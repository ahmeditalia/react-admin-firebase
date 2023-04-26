import {
  getDocs,
  limit,
  orderBy,
  query,
  QueryConstraint,
  startAfter,
  where,
} from 'firebase/firestore';
import {
  FireStoreCollectionRef,
  FireStoreQuery,
  FireStoreQueryOrder,
} from 'misc/firebase-models';
import { IFirestoreLogger, messageTypes } from '../../misc';
import { findLastQueryCursor, getQueryCursor } from './queryCursors';

interface ParamsToQueryOptions {
  filters?: boolean;
  sort?: boolean;
  pagination?: boolean;
}

interface QueryPair {
  noPagination: FireStoreQuery;
  withPagination: FireStoreQuery;
}

const defaultParamsToQueryOptions = {
  filters: true,
  sort: true,
  pagination: true,
};

export async function paramsToQuery<
  TParams extends messageTypes.IParamsGetList
>(
  collection: FireStoreCollectionRef,
  params: TParams,
  resourceName: string,
  flogger: IFirestoreLogger,
  options: ParamsToQueryOptions = defaultParamsToQueryOptions
): Promise<QueryPair> {
  const filterConstraints = options.filters
    ? getFiltersConstraints(params.filter)
    : [];

  const sortConstraints = options.sort ? getSortConstraints(params.sort) : [];

  const paginationConstraints = options.pagination
    ? await getPaginationConstraints(
        collection,
        [...filterConstraints, ...sortConstraints],
        params,
        resourceName,
        flogger
      )
    : [];

  return {
    noPagination: query(
      collection,
      ...[...filterConstraints, ...sortConstraints]
    ),
    withPagination: query(
      collection,
      ...[...filterConstraints, ...sortConstraints, ...paginationConstraints]
    ),
  };
}

export function getFiltersConstraints(filters: {
  [fieldName: string]: any;
}): QueryConstraint[] {
  const queries = Object.entries(filters).flatMap(([fieldName, fieldValue]) => {
    const key = fieldName.split('_')[1];
    if (key) {
      if (key == 'equals') return [where(fieldName, '==', fieldValue)];
      if (key == 'notEquals') return [where(fieldName, '!=', fieldValue)];
      if (key == 'gte') return [where(fieldName, '>=', fieldValue)];
      if (key == 'gt') return [where(fieldName, '>', fieldValue)];
      if (key == 'lte') return [where(fieldName, '<=', fieldValue)];
      if (key == 'lt') return [where(fieldName, '<', fieldValue)];
      if (key == 'array-contains')
        return [where(fieldName, 'array-contains', fieldValue)];
      if (key == 'array-contains-any')
        return [where(fieldName, 'array-contains-any', fieldValue)];
      if (key == 'in') return [where(fieldName, 'in', fieldValue)];
      if (key == 'not-in') return [where(fieldName, 'not-in', fieldValue)];
      if (key == 'contains')
        return [
          where(fieldName, '>=', fieldValue.toLocaleLowerCase()),
          where(fieldName, '<=', `${fieldValue.toLocaleLowerCase()}\uf8ff`),
        ];
    }
    return [where(fieldName, '==', fieldValue)];
  });
  console.log(queries);
  return queries;
}
export function getSortConstraints(sort: {
  field: string;
  order: string;
}): QueryConstraint[] {
  if (sort != null && sort.field !== 'id') {
    const { field, order } = sort;
    const parsedOrder = order.toLocaleLowerCase() as FireStoreQueryOrder;
    return [orderBy(field, parsedOrder)];
  }
  return [];
}

async function getPaginationConstraints<
  TParams extends messageTypes.IParamsGetList
>(
  collectionRef: FireStoreCollectionRef,
  queryConstraints: QueryConstraint[],
  params: TParams,
  resourceName: string,
  flogger: IFirestoreLogger
): Promise<QueryConstraint[]> {
  const { page, perPage } = params.pagination;

  if (page === 1) {
    return [limit(perPage)];
  } else {
    let queryCursor = await getQueryCursor(
      collectionRef,
      params,
      resourceName,
      flogger
    );
    if (!queryCursor) {
      queryCursor = await findLastQueryCursor(
        collectionRef,
        queryConstraints,
        params,
        resourceName,
        flogger
      );
    }
    return [startAfter(queryCursor), limit(perPage)];
  }
}

export function getFullParamsForQuery<
  TParams extends messageTypes.IParamsGetList
>(reactAdminParams: TParams, softdeleteEnabled: boolean): TParams {
  return {
    ...reactAdminParams,
    filter: softdeleteEnabled
      ? {
          deleted: false,
          ...reactAdminParams.filter,
        }
      : reactAdminParams.filter,
  };
}

export function getNextPageParams<TParams extends messageTypes.IParamsGetList>(
  params: TParams
): TParams {
  return {
    ...params,
    pagination: {
      ...params.pagination,
      page: params.pagination.page + 1,
    },
  };
}
