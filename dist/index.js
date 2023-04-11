var e=require("lodash"),r=require("firebase/storage"),t=require("path-browserify"),n=require("firebase/app"),o=require("firebase/auth"),i=require("firebase/firestore");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=/*#__PURE__*/a(t);function u(r,t,n){r.sort(function(r,o){var i=e.get(r,t),a=e.get(o,t),s="asc"===n;return Number.isFinite(i)&&Number.isFinite(a)?c(i,a,s):"string"==typeof i&&"string"==typeof a?c(i.toLowerCase(),a.toLowerCase(),s):i instanceof Date&&a instanceof Date?c(i,a,s):c(!!i,!!a,s)})}function c(e,r,t){return e>r?t?1:-1:e<r?t?-1:1:0}function l(r,t){if(!t||e.isEmpty(t))return r;var n=[];return Object.keys(t).map(function(e){var r=function(e,r){if(!r||"string"==typeof r||"number"==typeof r||"boolean"==typeof r)return[{searchField:e,searchValue:r}];var t={};return t[e]=r,function(e){var r=[];return function e(t,n){for(var o in n=n||"",t)if(t.hasOwnProperty(o)){var i=t&&t[o],a=n?n+"."+o:o;"object"==typeof i||i instanceof Array?e(i,a):r.push({searchField:a,searchValue:i})}}(e,null),r}(t)}(e,t[e]);n.push.apply(n,r)}),r.filter(function(r){return n.reduce(function(t,n){var o=function(r,t,n){var o=e.get(r,t);return!o&&!n||!!o&&("string"==typeof n?o.toString().toLowerCase().includes(n.toLowerCase()):"boolean"==typeof n||"number"==typeof n?o===n:!!Array.isArray(n)&&n.includes(o))}(r,n.searchField,n.searchValue);return o&&t},!0)})}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},f.apply(this,arguments)}function d(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var h=function(){return null},v=/*#__PURE__*/function(){function e(e,r){this.title=void 0,this.cacheEnabledKey=void 0,this.title=e,this.cacheEnabledKey=r}var r,t,n=e.prototype;return n.isEnabled=function(){return!!localStorage.getItem(this.cacheEnabledKey)},n.SetEnabled=function(e){e?localStorage.setItem(this.cacheEnabledKey,"true"):localStorage.removeItem(this.cacheEnabledKey)},r=e,(t=[{key:"log",get:function(){return this.isEnabled()?console.log.bind(console,this.title):h}},{key:"warn",get:function(){return this.isEnabled()?console.warn.bind(console,this.title):h}},{key:"error",get:function(){return this.isEnabled()?console.error.bind(console,this.title):h}}])&&function(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,"symbol"==typeof(o=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key))?o:String(o),n)}var o}(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),e}(),m=new v("💸firestore-costs:","LOGGING_FIRESTORE_COSTS_ENABLED"),p="firecosts-single-reads",g=new v("🔥raf:","LOGGING_ENABLED"),P=g.log,y=g.error,b=g.warn;function w(e,r,t){var n=document.getElementById("eventMonitor");if(n){var o=new CustomEvent(e,{detail:{fileName:r,data:t}});n.dispatchEvent(o)}else P("eventMonitor not found to dispatch event "+e+" for "+r)}var D="___REF_FULLPATH_";function j(e){var r={parsedDoc:{},refdocs:[]};return!e||"object"!=typeof e||(Object.keys(e).map(function(t){e[t]=R(e[t],t,r)}),r.parsedDoc=e),r}function R(e,r,t){if(!e)return e;if("object"!=typeof e)return e;if(e.toDate&&"function"==typeof e.toDate)return e.toDate();if(Array.isArray(e))return e.map(function(e,n){return R(e,r+"."+n,t)});if(L(e)){var n=e;return t.refdocs.push({fieldPath:r,refDocPath:n.path}),n.id}return"object"==typeof e?(Object.keys(e).map(function(r){e[r]=R(e[r],r,t)}),e):e}function L(e){return"string"==typeof e.id&&"object"==typeof e.firestore&&"object"==typeof e.parent&&"string"==typeof e.path}var F=function t(n,o){try{var i,a=function(e){if(i)return e;var r=Array.isArray(o);return r?Promise.all(o.map(function(e,r){return Promise.resolve(t(n,e)).then(function(e){o[r]=e})})):L(o)?o:r||"object"!=typeof o?void 0:Promise.all(Object.keys(o).map(function(e){try{return Promise.resolve(t(n,o[e])).then(function(r){o[e]=r})}catch(e){return Promise.reject(e)}}))};if(!o||"object"!=typeof o)return Promise.resolve(o);var s=e.has(o,"src"),u=function(){if(s)return function(e,t){try{var a=Promise.resolve(r.getDownloadURL(r.ref(n.storage(),o.src))).then(function(e){var r=f({},o,{src:e});return i=1,r})}catch(e){return t(e)}return a&&a.then?a.then(void 0,t):a}(0,function(e){return y("Error when getting download URL",{error:e}),i=1,o})}();return Promise.resolve(u&&u.then?u.then(a):a(u))}catch(e){return Promise.reject(e)}};function T(r){if(!r)return b("parseFireStoreDocument: no doc",{doc:r}),{};var t=j(r.data()),n=function(r,t){return t.map(function(t){e.set(r,D+t.fieldPath,t.refDocPath)}),r}(t.parsedDoc,t.refdocs);return f({id:r.id},n)}function G(e,r){if(!e)return r+"";if(!r)throw new Error("Resource name must be a string of length greater than 0 characters");var t="string"==typeof e?e:e(),n=s.default.join("/",t,"/",r,"/");if((n.split("/").length-1)%2)throw new Error('The rootRef path must point to a "document"\n    not a "collection"e.g. /collection/document/ or\n    /collection/document/collection/document/');return n.slice(1,-1)}function A(){return s.default.join.apply(s.default,[].slice.call(arguments))}function E(e){var r={uploads:[],refdocs:[],parsedDoc:{}};return!e||"object"!=typeof e||(Object.keys(e).map(function(t){S(e[t],t,r)}),r.parsedDoc=e),r}function S(e,r,t){return e?"string"==typeof r&&r.includes(D)?void t.refdocs.push({fieldDotsPath:r,refPath:e}):"object"!=typeof e?e:e.toDate&&"function"==typeof e.toDate?e.toDate():Array.isArray(e)?e.map(function(e,n){return S(e,r+"."+n,t)}):e&&e.hasOwnProperty("rawFile")?(t.uploads.push({fieldDotsPath:r,fieldSlashesPath:r.split(".").join("/"),rawFile:e.rawFile}),void delete e.rawFile):(Object.keys(e).map(function(n){S(e[n],r+"."+n,t)}),e):e}var U=/*#__PURE__*/function(){function e(e,t){this._app=void 0,this._firestore=void 0,this._storage=void 0,this._auth=void 0,this.options=void 0;var a=e||{};this.options=a,this._app=window._app=function(e,r){if(r.app)return r.app;var t=n.getApps();return null!=t&&t.length?n.getApp():n.initializeApp(e)}(t,a),this._firestore=i.getFirestore(this._app),this._storage=r.getStorage(this._app),this._auth=o.getAuth(this._app)}var t=e.prototype;return t.dbGetCollection=function(e){return i.collection(this._firestore,e)},t.dbCreateBatch=function(){return i.writeBatch(this._firestore)},t.dbMakeNewId=function(){return i.doc(i.collection(this._firestore,"collections")).id},t.OnUserLogout=function(e){this._auth.onAuthStateChanged(function(r){var t=!r;P("FirebaseWrapper.OnUserLogout",{user:r,isLoggedOut:t}),t&&e(r)})},t.putFile=function(e,t){var n=r.uploadBytesResumable(r.ref(this._storage,e),t),o=new Promise(function(e,r){return n.then(e).catch(r)}),i=o.then(function(e){return r.getDownloadURL(e.ref)}).then(function(e){return e});return{task:n,taskResult:o,downloadUrl:i}},t.getStorageDownloadUrl=function(e){try{return Promise.resolve(r.getDownloadURL(r.ref(this._storage,e)))}catch(e){return Promise.reject(e)}},t.serverTimestamp=function(){return i.serverTimestamp()},t.authSetPersistence=function(e){try{var r;switch(e){case"local":r=o.browserLocalPersistence;break;case"none":r=o.inMemoryPersistence;break;default:r=o.browserSessionPersistence}return P("setPersistence",{persistenceInput:e,persistenceResolved:r}),Promise.resolve(this._auth.setPersistence(r).catch(function(e){return console.error(e)}))}catch(e){return Promise.reject(e)}},t.authSigninEmailPassword=function(e,r){try{return Promise.resolve(o.signInWithEmailAndPassword(this._auth,e,r))}catch(e){return Promise.reject(e)}},t.authSignOut=function(){try{return Promise.resolve(o.signOut(this._auth))}catch(e){return Promise.reject(e)}},t.authGetUserLoggedIn=function(){try{var e=this;return Promise.resolve(new Promise(function(r,t){var n=e._auth;if(n.currentUser)return r(n.currentUser);var i=o.onAuthStateChanged(e._auth,function(e){i(),e?r(e):t()})}))}catch(e){return Promise.reject(e)}},t.GetUserLogin=function(){try{return Promise.resolve(this.authGetUserLoggedIn())}catch(e){return Promise.reject(e)}},t.auth=function(){return this._auth},t.storage=function(){return this._storage},t.GetApp=function(){return this._app},t.db=function(){return this._firestore},e}();function I(e,r){try{var t=e()}catch(e){return r(e)}return t&&t.then?t.then(void 0,r):t}var k=/*#__PURE__*/function(){function e(e,r){this.fireWrapper=void 0;var t=r||{};P("Auth Client: initializing...",{firebaseConfig:e,options:t}),this.fireWrapper=new U(t,e),t.persistence&&this.setPersistence(t.persistence)}var r=e.prototype;return r.setPersistence=function(e){return this.fireWrapper.authSetPersistence(e)},r.HandleAuthLogin=function(e){try{var r=this,t=e.username,n=e.password;return Promise.resolve(t&&n?I(function(){return Promise.resolve(r.fireWrapper.authSigninEmailPassword(t,n)).then(function(e){return P("HandleAuthLogin: user sucessfully logged in",{user:e}),e})},function(){throw P("HandleAuthLogin: invalid credentials",{params:e}),new Error("Login error: invalid credentials")}):r.getUserLogin())}catch(e){return Promise.reject(e)}},r.HandleAuthLogout=function(){return this.fireWrapper.authSignOut()},r.HandleAuthError=function(e){return P("HandleAuthLogin: invalid credentials",{errorHttp:e}),"ok"===function(e){if(e>=200&&e<300)return"ok";switch(e){case 401:case 403:return"unauthenticated";default:return"ok"}}(!!e&&e.status)?(P("API is actually authenticated"),Promise.resolve()):(b("Received authentication error from API"),Promise.reject())},r.HandleAuthCheck=function(){try{return Promise.resolve(this.getUserLogin())}catch(e){return Promise.reject(e)}},r.getUserLogin=function(){return this.fireWrapper.authGetUserLoggedIn()},r.HandleGetPermissions=function(){try{var e=this;return Promise.resolve(I(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.claims})})},function(e){return P("HandleGetPermission: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetIdentity=function(){try{var e=this;return Promise.resolve(I(function(){return Promise.resolve(e.getUserLogin()).then(function(e){var r=e.displayName,t=e.photoURL;return{id:e.uid,fullName:""+(null!=r?r:""),avatar:""+(null!=t?t:"")}})},function(e){return P("HandleGetIdentity: no user is logged in",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTAuthTime=function(){try{var e=this;return Promise.resolve(I(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.authTime})})},function(e){return P("HandleGetJWTAuthTime: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTExpirationTime=function(){try{var e=this;return Promise.resolve(I(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.expirationTime})})},function(e){return P("HandleGetJWTExpirationTime: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTSignInProvider=function(){try{var e=this;return Promise.resolve(I(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.signInProvider})})},function(e){return P("HandleGetJWTSignInProvider: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTIssuedAtTime=function(){try{var e=this;return Promise.resolve(I(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.issuedAtTime})})},function(e){return P("HandleGetJWTIssuedAtTime: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTToken=function(){try{var e=this;return Promise.resolve(I(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.token})})},function(e){return P("HandleGetJWTToken: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},e}(),_=/*#__PURE__*/function(){function e(e,r,t){var n=this;this.fireWrapper=void 0,this.options=void 0,this.flogger=void 0,this.resources={},this.fireWrapper=e,this.options=r,this.flogger=t,this.fireWrapper.OnUserLogout(function(){n.resources={}})}var r=e.prototype;return r.TryGetResource=function(e,r,t){try{var n=function(){return o.TryGetResourcePromise(e,t)},o=this,i=function(){if(r)return Promise.resolve(o.RefreshResource(e,t)).then(function(){})}();return Promise.resolve(i&&i.then?i.then(n):n())}catch(e){return Promise.reject(e)}},r.GetResource=function(e){var r=this.resources[e];if(!r)throw new Error("react-admin-firebase: Can't find resource: \""+e+'"');return r},r.TryGetResourcePromise=function(e,r){try{var t=this;return P("resourceManager.TryGetResourcePromise",{relativePath:e,collectionQuery:r}),Promise.resolve(t.initPath(e)).then(function(){var r=t.resources[e];if(!r)throw new Error('react-admin-firebase: Cant find resource: "'+e+'"');return r})}catch(e){return Promise.reject(e)}},r.RefreshResource=function(e,r){try{var t,n,o=this;if(null!=(t=o.options)&&null!=(n=t.lazyLoading)&&n.enabled)throw b("resourceManager.RefreshResource",{warn:"RefreshResource is not available in lazy loading mode"}),new Error("react-admin-firebase: RefreshResource is not available in lazy loading mode");return P("resourceManager.RefreshResource",{relativePath:e,collectionQuery:r}),Promise.resolve(o.initPath(e)).then(function(){var t=o.resources[e],n=t.collection,a=o.applyQuery(n,r);return Promise.resolve(i.getDocs(a)).then(function(e){e.forEach(function(e){return t.list.push(T(e))}),o.flogger.logDocument(e.docs.length)(),P("resourceManager.RefreshResource",{newDocs:e,resource:t,collectionPath:n.path})})})}catch(e){return Promise.reject(e)}},r.GetSingleDoc=function(e,r){try{var t=this;return Promise.resolve(t.initPath(e)).then(function(){var n=t.GetResource(e);return t.flogger.logDocument(1)(),Promise.resolve(i.getDoc(i.doc(n.collection,r))).then(function(t){if(!t.exists)throw new Error("react-admin-firebase: No id found matching: "+r);var o=T(t);return P("resourceManager.GetSingleDoc",{relativePath:e,resource:n,docId:r,docSnap:t,result:o}),o})})}catch(e){return Promise.reject(e)}},r.initPath=function(e){try{var r=this,t=G(r.options&&r.options.rootRef,e),n=!!r.resources[e];if(P("resourceManager.initPath()",{absolutePath:t,hasBeenInited:n}),n)return P("resourceManager.initPath() has been initialized already..."),Promise.resolve();var o=r.fireWrapper.dbGetCollection(t),i={collection:o,list:[],path:e,pathAbsolute:t};return r.resources[e]=i,P("resourceManager.initPath() setting resource...",{resource:i,allResources:r.resources,collection:o,collectionPath:o.path}),Promise.resolve()}catch(e){return Promise.reject(e)}},r.getUserIdentifier=function(){try{var e=this;return Promise.resolve(e.options.associateUsersById?e.getCurrentUserId():e.getCurrentUserEmail())}catch(e){return Promise.reject(e)}},r.getCurrentUserEmail=function(){try{return Promise.resolve(this.fireWrapper.authGetUserLoggedIn()).then(function(e){return e?e.email:"annonymous user"})}catch(e){return Promise.reject(e)}},r.getCurrentUserId=function(){try{return Promise.resolve(this.fireWrapper.authGetUserLoggedIn()).then(function(e){return e?e.uid:"annonymous user"})}catch(e){return Promise.reject(e)}},r.applyQuery=function(e,r){var t=r?r(e):e;return P("resourceManager.applyQuery() ...",{collection:e,collectionQuery:(r||"-").toString(),collRef:t}),t},e}(),C=/*#__PURE__*/function(){function r(e,r,t){this.fireWrapper=void 0,this.options=void 0,this.flogger=void 0,this.rm=void 0,this.fireWrapper=e,this.options=r,this.flogger=t,this.rm=new _(this.fireWrapper,this.options,this.flogger)}var t=r.prototype;return t.checkRemoveIdField=function(e,r){this.options.dontAddIdFieldToDoc||(e.id=r)},t.transformToDb=function(e,r,t){return"function"==typeof this.options.transformToDb?this.options.transformToDb(e,r,t):r},t.parseDataAndUpload=function(r,t,n){try{var o=this;if(!n)return Promise.resolve(n);var a=i.doc(r.collection,t).path,s=E(n);return Promise.resolve(Promise.all(s.uploads.map(function(r){try{var t=function(e,r,t,n){var o=e instanceof File?e.name.split("."):[],i=null!=o&&o.length?"."+o.pop():"";return n?A(r,t,e.name):A(r,t+i)}(r.rawFile,a,r.fieldDotsPath,!!o.options.useFileNamesInStorage);return Promise.resolve(o.saveFile(t,r.rawFile)).then(function(t){e.set(n,r.fieldDotsPath+".src",t)})}catch(e){return Promise.reject(e)}}))).then(function(){return n})}catch(e){return Promise.reject(e)}},t.addCreatedByFields=function(e){try{var r=this;return Promise.resolve(function(e,r,t,n){try{return n.disableMeta?Promise.resolve():Promise.resolve(t.getUserIdentifier()).then(function(t){var o=function(e){if(e.renameMetaFields&&e.renameMetaFields.created_at)return e.renameMetaFields.created_at;var r=e.metaFieldCasing,t="createdate";return r?"camel"===r?"createDate":"snake"===r?"create_date":"pascal"===r?"CreateDate":"kebab"===r?"create-date":t:t}(n),i=function(e){if(e.renameMetaFields&&e.renameMetaFields.created_by)return e.renameMetaFields.created_by;var r=e.metaFieldCasing,t="createdby";return r?"camel"===r?"createdBy":"snake"===r?"created_by":"pascal"===r?"CreatedBy":"kebab"===r?"created-by":t:t}(n);e[o]=r.serverTimestamp(),e[i]=t})}catch(e){return Promise.reject(e)}}(e,r.fireWrapper,r.rm,r.options))}catch(e){return Promise.reject(e)}},t.addUpdatedByFields=function(e){try{var r=this;return Promise.resolve(function(e,r,t,n){try{return n.disableMeta?Promise.resolve():Promise.resolve(t.getUserIdentifier()).then(function(t){var o=function(e){if(e.renameMetaFields&&e.renameMetaFields.updated_at)return e.renameMetaFields.updated_at;var r=e.metaFieldCasing,t="lastupdate";return r?"camel"===r?"lastUpdate":"snake"===r?"last_update":"pascal"===r?"LastUpdate":"kebab"===r?"last-update":t:t}(n),i=function(e){if(e.renameMetaFields&&e.renameMetaFields.updated_by)return e.renameMetaFields.updated_by;var r=e.metaFieldCasing,t="updatedby";return r?"camel"===r?"updatedBy":"snake"===r?"updated_by":"pascal"===r?"UpdatedBy":"kebab"===r?"updated-by":t:t}(n);e[o]=r.serverTimestamp(),e[i]=t})}catch(e){return Promise.reject(e)}}(e,r.fireWrapper,r.rm,r.options))}catch(e){return Promise.reject(e)}},t.saveFile=function(r,t){try{var n=this;return P("saveFile() saving file...",{storagePath:r,rawFile:t}),Promise.resolve(function(e,o){try{var i=(s=(a=n.fireWrapper.putFile(r,t)).task,u=a.taskResult,c=a.downloadUrl,w("FILE_UPLOAD_WILL_START",l=t.name),s.on("state_changed",function(e){var r=e.bytesTransferred/e.totalBytes*100;switch(P("Upload is "+r+"% done"),w("FILE_UPLOAD_PROGRESS",l,r),e.state){case"paused":P("Upload is paused"),w("FILE_UPLOAD_PAUSED",l);break;case"running":P("Upload is running"),w("FILE_UPLOAD_RUNNING",l);break;case"cancelled":P("Upload has been canceled"),w("FILE_UPLOAD_CANCELED",l)}}),Promise.resolve(Promise.all([c,u])).then(function(e){var t=e[0];return w("FILE_UPLOAD_COMPLETE",l),w("FILE_SAVED",l),P("saveFile() saved file",{storagePath:r,taskResult:u,getDownloadURL:t}),n.options.relativeFilePaths?r:t}))}catch(e){return o(e)}var a,s,u,c,l;return i&&i.then?i.then(void 0,o):i}(0,function(r){"storage/unknown"===e.get(r,"code")?y('saveFile() error saving file, No bucket found! Try clicking "Get Started" in firebase -> storage',{storageError:r}):y("saveFile() error saving file",{storageError:r})}))}catch(e){return Promise.reject(e)}},r}();function M(e,r,t){if(!e.s){if(t instanceof O){if(!t.s)return void(t.o=M.bind(null,e,r));1&r&&(r=t.s),t=t.v}if(t&&t.then)return void t.then(M.bind(null,e,r),M.bind(null,e,2));e.s=r,e.v=t;const n=e.o;n&&n(e)}}var O=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(r,t){var n=new e,o=this.s;if(o){var i=1&o?r:t;if(i){try{M(n,1,i(this.v))}catch(e){M(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?M(n,1,r?r(o):o):t?M(n,1,t(o)):M(n,2,o)}catch(e){M(n,2,e)}},n},e}();function W(e){return e instanceof O&&1&e.s}var N=function(e,r,t,n){try{var o=btoa(JSON.stringify(f({},r,{resourceName:t}))),a=localStorage.getItem(o);return a?Promise.resolve(i.getDoc(i.doc(e,a))).then(function(e){return n.logDocument(1)(),!!e.exists()&&e}):Promise.resolve(!1)}catch(e){return Promise.reject(e)}},H=function(e,r,t,n,o){void 0===o&&(o=B);try{var a=function(r){return{noPagination:i.query.apply(void 0,[e].concat([].concat(s,u))),withPagination:i.query.apply(void 0,[e].concat([].concat(s,u,r)))}},s=o.filters?(c=Object.entries(r.filter).flatMap(function(e){var r=e[0],t=e[1];return"object"==typeof t?Object.entries(t).flatMap(function(e){var t=e[0],n=e[1];return console.log(t),"equals"==t?[i.where(r,"==",n)]:"gte"==t?[i.where(r,">=",n)]:"lte"==t?[i.where(r,"<=",n)]:[i.where(r,"==",n)]}):[i.where(r,"==",t)]}),console.log(c),c):[],u=o.sort?function(e){if(null!=e&&"id"!==e.field){var r=e.field,t=e.order.toLocaleLowerCase();return[i.orderBy(r,t)]}return[]}(r.sort):[];return Promise.resolve(o.pagination?Promise.resolve(function(e,r,t,n,o){try{var a=t.pagination,s=a.perPage;return 1===a.page?Promise.resolve([i.limit(s)]):Promise.resolve(N(e,t,n,o)).then(function(a){function u(){return[i.startAfter(a),i.limit(s)]}var c=function(){if(!a)return Promise.resolve(function(e,r,t,n,o){try{var a=function(){var t=(u-d)*c,n=i.query.apply(void 0,[e].concat([].concat(r,1===d?[i.limit(t)]:[i.startAfter(l),i.limit(t)])));return Promise.resolve(i.getDocs(n)).then(function(e){var r=e.docs.length;return o.logDocument(r)(),e.docs[r-1]})},s=t.pagination,u=s.page,c=s.perPage,l=!1,d=u-1,h=f({},t,{pagination:f({},t.pagination)}),v=function(e,r,t){for(var n;;){var o=e();if(W(o)&&(o=o.v),!o)return i;if(o.then){n=0;break}var i=t();if(i&&i.then){if(!W(i)){n=1;break}i=i.s}if(r){var a=r();if(a&&a.then&&!W(a)){n=2;break}}}var s=new O,u=M.bind(null,s,2);return(0===n?o.then(l):1===n?i.then(c):a.then(f)).then(void 0,u),s;function c(n){i=n;do{if(r&&(a=r())&&a.then&&!W(a))return void a.then(f).then(void 0,u);if(!(o=e())||W(o)&&!o.v)return void M(s,1,i);if(o.then)return void o.then(l).then(void 0,u);W(i=t())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,u)}function l(e){e?(i=t())&&i.then?i.then(c).then(void 0,u):c(i):M(s,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):M(s,1,i)}}(function(){return!l&&d>1},void 0,function(){return d--,h.pagination.page=d,console.log("getting query cursor currentPage=",d),Promise.resolve(N(e,h,n,o)).then(function(e){l=e})});return Promise.resolve(v&&v.then?v.then(a):a())}catch(e){return Promise.reject(e)}}(e,r,t,n,o)).then(function(e){a=e})}();return c&&c.then?c.then(u):u()})}catch(e){return Promise.reject(e)}}(e,[].concat(s,u),r,t,n)).then(a):a([]))}catch(e){return Promise.reject(e)}var c},B={filters:!0,sort:!0,pagination:!0};function J(e,r){return f({},e,{filter:r?f({deleted:!1},e.filter):e.filter})}function x(e,r,t){if(!e.s){if(t instanceof z){if(!t.s)return void(t.o=x.bind(null,e,r));1&r&&(r=t.s),t=t.v}if(t&&t.then)return void t.then(x.bind(null,e,r),x.bind(null,e,2));e.s=r,e.v=t;const n=e.o;n&&n(e)}}var z=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(r,t){var n=new e,o=this.s;if(o){var i=1&o?r:t;if(i){try{x(n,1,i(this.v))}catch(e){x(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?x(n,1,r?r(o):o):t?x(n,1,t(o)):x(n,2,o)}catch(e){x(n,2,e)}},n},e}();function q(e,r,t){var n=[];for(var o in e)n.push(o);return function(e,r,t){var n,o,i=-1;return function a(s){try{for(;++i<e.length&&(!t||!t());)if((s=r(i))&&s.then){if(!((u=s)instanceof z&&1&u.s))return void s.then(a,o||(o=x.bind(null,n=new z,2)));s=s.v}n?x(n,1,s):n=s}catch(e){x(n||(n=new z),2,e)}var u}(),n}(n,function(e){return r(n[e])},t)}var Q=/*#__PURE__*/function(){function e(e,r,t){this.options=void 0,this.rm=void 0,this.client=void 0,this.options=e,this.rm=r,this.client=t}var r=e.prototype;return r.apiGetList=function(e,r){try{var t=this;return Promise.resolve(t.tryGetResource(e)).then(function(n){var o=J(r,!!t.options.softDelete);return P("apiGetListLazy",{resourceName:e,params:o}),Promise.resolve(H(n.collection,o,e,t.client.flogger)).then(function(r){var a=r.noPagination;return Promise.resolve(i.getDocs(r.withPagination)).then(function(r){var s=r.docs.length;if(!s)return P("apiGetListLazy",{message:"There are not records for given query"}),{data:[],total:0};t.client.flogger.logDocument(s)();var u=r.docs.map(function(e){return T(e)});return function(e,r,t){var n=btoa(JSON.stringify(f({},r,{resourceName:t})));localStorage.setItem(n,e.id);var o="ra-firebase-cursor-keys_"+t,i=localStorage.getItem(o);if(i){var a=JSON.parse(i).concat(n);localStorage.setItem(o,JSON.stringify(a))}else localStorage.setItem(o,JSON.stringify([n]))}(r.docs[r.docs.length-1],function(e){return f({},e,{pagination:f({},e.pagination,{page:e.pagination.page+1})})}(o),e),Promise.resolve(i.getCountFromServer(a)).then(function(e){var r;function o(t){return r?t:(P("apiGetListLazy result",{docs:u,resource:n,collectionPath:n.collection.path}),{data:u,total:e.data().count})}var i=function(){if(t.options.relativeFilePaths)return Promise.resolve(Promise.all(u.map(function(e){try{var r=q(e,function(r){return Promise.resolve(F(t.client.fireWrapper,e[r])).then(function(t){e[r]=t})});return Promise.resolve(r&&r.then?r.then(function(){return e}):e)}catch(e){return Promise.reject(e)}}))).then(function(t){P("apiGetListLazy result",{docs:t,resource:n,collectionPath:n.collection.path});var o={data:t,total:e.data().count};return r=1,o})}();return i&&i.then?i.then(o):o(i)})})})})}catch(e){return Promise.reject(e)}},r.apiGetManyReference=function(e,r){try{var t=this;return Promise.resolve(t.tryGetResource(e)).then(function(n){var o;P("apiGetManyReferenceLazy",{resourceName:e,resource:n,reactAdminParams:r});var a=f({},r.filter,((o={})[r.target]=r.id,o)),s=J(f({},r,{filter:a}),!!t.options.softDelete);return Promise.resolve(H(n.collection,s,e,t.client.flogger)).then(function(e){return Promise.resolve(i.getDocs(e.withPagination)).then(function(e){var r;function o(e){return r?e:(P("apiGetManyReferenceLazy result",{docs:i,resource:n,collectionPath:n.collection.path}),{data:i,total:i.length})}t.client.flogger.logDocument(e.docs.length)();var i=e.docs.map(T),a=function(){if(t.options.relativeFilePaths)return Promise.resolve(Promise.all(i.map(function(e){try{var r=q(e,function(r){return Promise.resolve(F(t.client.fireWrapper,e[r])).then(function(t){e[r]=t})});return Promise.resolve(r&&r.then?r.then(function(){return e}):e)}catch(e){return Promise.reject(e)}}))).then(function(e){return P("apiGetManyReferenceLazy result",{docs:e,resource:n,collectionPath:n.collection.path}),r=1,{data:e,total:i.length}})}();return a&&a.then?a.then(o):o(a)})})})}catch(e){return Promise.reject(e)}},r.tryGetResource=function(e,r){try{return Promise.resolve(this.rm.TryGetResourcePromise(e,r))}catch(e){return Promise.reject(e)}},e}();exports.FirebaseAuthProvider=function(e,r){!function(e,r){if(!(e||r&&r.app))throw new Error("Please pass the Firebase firebaseConfig object or options.app to the FirebaseAuthProvider")}(e,r),g.SetEnabled(!(null==r||!r.logging));var t=new k(e,r);return{login:function(e){return t.HandleAuthLogin(e)},logout:function(){return t.HandleAuthLogout()},checkAuth:function(){return t.HandleAuthCheck()},checkError:function(e){return t.HandleAuthError(e)},getPermissions:function(){return t.HandleGetPermissions()},getIdentity:function(){return t.HandleGetIdentity()},getAuthUser:function(){return t.getUserLogin()},getJWTAuthTime:function(){return t.HandleGetJWTAuthTime()},getJWTExpirationTime:function(){return t.HandleGetJWTExpirationTime()},getJWTSignInProvider:function(){return t.HandleGetJWTSignInProvider()},getJWTClaims:function(){return t.HandleGetPermissions()},getJWTToken:function(){return t.HandleGetJWTToken()}}},exports.FirebaseDataProvider=function(e,r){var t,n,o=function(e){try{var r;return Promise.resolve(function(t,n){try{var o=Promise.resolve(e()).then(function(e){return r=e})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){var t=(e||"").toString(),n=function(e){var r=/\[code\=([\w-]*)/g.exec(e),t=Array.isArray(r)&&r[1];switch(t||y("unknown StatusCode ",{statusTxt:e}),t){case"unauthenticated":return 401;case"permission-denied":return 403;case"internal":return 0;case"invalid-argument":return 400;case"not-found":return 404;case"aborted":return 409;case"resource-exhausted":return 429;case"cancelled":return 499;case"internal":return 500;case"unimplemented":return 501;case"unavailable":return 503;case"deadline-exceeded":return 504;default:return 200}}(t),o={status:n,message:t,json:r};throw y("DataProvider:",e,{errorMsg:t,code:n,errorObj:o}),o}))}catch(e){return Promise.reject(e)}},a=r||{};!function(e,r){if(!(e||r&&r.app))throw new Error("Please pass the Firebase firebaseConfig object or options.app to the FirebaseAuthProvider");r&&r.rootRef&&G(r.rootRef,"test")}(e,a);var s=function(e){return{SetEnabled:function(e){m.SetEnabled(e)},ResetCount:function(e){e&&localStorage.removeItem(p)},logDocument:function(r){if(null==e||null==(t=e.lazyLoading)||!t.enabled)return h;var t,n=function(e){void 0===e&&(e=1);var r=localStorage.getItem(p)||"",t=(parseInt(r)||0)+e;return localStorage.setItem(p,t+""),t}(r);return m.log.bind(console,"+"+r+" (session total="+n+" documents read)")}}}(a);g.SetEnabled(!(null==a||!a.logging)),s.SetEnabled(!(null==a||null==(t=a.firestoreCostsLogger)||!t.enabled)),s.ResetCount(!(null!=a&&null!=(n=a.firestoreCostsLogger)&&n.persistCount)),P("Creating FirebaseDataProvider",{firebaseConfig:e,options:a});var c=new U(r,e),v=new C(c,a,s);return{app:c.GetApp(),getList:function(e,r){return o(function(){return function(e,r,t){try{var n;P("GetList",{resourceName:e,params:r});var o=t.rm,i=t.fireWrapper,a=t.options;if(null!=a&&null!=(n=a.lazyLoading)&&n.enabled){var s=new Q(a,o,t);return Promise.resolve(s.apiGetList(e,r))}var c=r.filter||{},f=c.collectionQuery;return delete c.collectionQuery,Promise.resolve(o.TryGetResource(e,"REFRESH",f)).then(function(e){var t;function n(e){return t?e:{data:v,total:m}}var o=e.list;if(null!=r.sort){var s=r.sort;u(o,s.field,"ASC"===s.order?"asc":"desc")}var f=o;a.softDelete&&!Object.keys(c).includes("deleted")&&(f=o.filter(function(e){return!e.deleted}));var d=l(f,c),h=(r.pagination.page-1)*r.pagination.perPage,v=d.slice(h,h+r.pagination.perPage),m=d.length,p=function(){if(a.relativeFilePaths)return Promise.resolve(Promise.all(v.map(function(e){return F(i,e)}))).then(function(e){return t=1,{data:e,total:m}})}();return p&&p.then?p.then(n):n(p)})}catch(e){return Promise.reject(e)}}(e,r,v)})},getOne:function(e,r){return o(function(){return function(e,r,t){try{P("GetOne",{resourceName:e,params:r});var n=t.rm;return Promise.resolve(function(o,i){try{var a=Promise.resolve(n.GetSingleDoc(e,r.id+"")).then(function(e){return t.flogger.logDocument(1)(),{data:e}})}catch(e){return i()}return a&&a.then?a.then(void 0,i):a}(0,function(){throw new Error("Error getting id: "+r.id+" from collection: "+e)}))}catch(e){return Promise.reject(e)}}(e,r,v)})},getMany:function(e,r){return o(function(){return function(e,r,t){try{var n=t.options,o=t.fireWrapper;return Promise.resolve(t.rm.TryGetResource(e)).then(function(a){var s=r.ids;return P("GetMany",{resourceName:e,resource:a,params:r,ids:s}),Promise.resolve(Promise.all(s.map(function(e){return i.getDoc(i.doc(a.collection,"string"==typeof e?e:e.___refid))}))).then(function(e){var r;function i(e){return r?e:{data:u}}t.flogger.logDocument(s.length)();var a=e.map(function(e){return f({},e.data(),{id:e.id})}),u=n.softDelete?a.filter(function(e){return!e.deleted}):a,c=function(){if(n.relativeFilePaths)return Promise.resolve(Promise.all(u.map(function(e){return F(o,e)}))).then(function(e){return r=1,{data:e}})}();return c&&c.then?c.then(i):i(c)})})}catch(e){return Promise.reject(e)}}(e,r,v)})},getManyReference:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm,o=t.options,i=t.fireWrapper;P("GetManyReference",{resourceName:e,params:r});var a=r.filter||{};return Promise.resolve(n.TryGetResource(e,"REFRESH",a.collectionQuery)).then(function(t){var n;function s(e){return n?e:{data:b,total:w}}delete a.collectionQuery,P("apiGetManyReference",{resourceName:e,resource:t,params:r});var c=t.list,f=r.target,d=r.id,h=c;o.softDelete&&(h=c.filter(function(e){return!e.deleted}));var v=l(h,a),m={};m[f]=d;var p=l(v,m);if(null!=r.sort){var g=r.sort;u(p,g.field,"ASC"===g.order?"asc":"desc")}var y=(r.pagination.page-1)*r.pagination.perPage,b=p.slice(y,y+r.pagination.perPage),w=p.length,D=function(){if(o.relativeFilePaths)return Promise.resolve(Promise.all(p.map(function(e){return F(i,e)}))).then(function(e){return n=1,{data:e,total:w}})}();return D&&D.then?D.then(s):s(D)})}catch(e){return Promise.reject(e)}}(e,r,v)})},update:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm;P("Update",{resourceName:e,params:r});var o=r.id+"";return delete r.data.id,Promise.resolve(n.TryGetResource(e)).then(function(n){return P("Update",{resourceName:e,resource:n,params:r}),Promise.resolve(t.parseDataAndUpload(n,o,r.data)).then(function(r){var a=f({},r);return t.checkRemoveIdField(a,o),Promise.resolve(t.addUpdatedByFields(a)).then(function(){var s=t.transformToDb(e,a,o);return Promise.resolve(i.updateDoc(i.doc(n.collection,o),s)).then(function(){return{data:f({},r,{id:o})}})})})})}catch(e){return Promise.reject(e)}}(e,r,v)})},updateMany:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm;return P("UpdateMany",{resourceName:e,params:r}),delete r.data.id,Promise.resolve(n.TryGetResource(e)).then(function(n){return P("UpdateMany",{resourceName:e,resource:n,params:r}),Promise.resolve(Promise.all(r.ids.map(function(o){try{var a=o+"";return Promise.resolve(t.parseDataAndUpload(n,a,r.data)).then(function(r){var o=f({},r);return t.checkRemoveIdField(o,a),Promise.resolve(t.addUpdatedByFields(o)).then(function(){var s=t.transformToDb(e,o,a);return Promise.resolve(i.updateDoc(i.doc(n.collection,a),s)).then(function(){return f({},r,{id:a})})})})}catch(e){return Promise.reject(e)}}))).then(function(e){return{data:e}})})}catch(e){return Promise.reject(e)}}(e,r,v)})},create:function(e,r){return o(function(){return function(e,r,t){try{var n=t.fireWrapper;return Promise.resolve(t.rm.TryGetResource(e)).then(function(o){var a;function s(s){if(a)return s;var u=n.dbMakeNewId();return Promise.resolve(t.parseDataAndUpload(o,u,r.data)).then(function(r){var n=f({},r);return t.checkRemoveIdField(n,u),Promise.resolve(t.addCreatedByFields(n)).then(function(){return Promise.resolve(t.addUpdatedByFields(n)).then(function(){var r=t.transformToDb(e,n,u);return Promise.resolve(i.setDoc(i.doc(o.collection,u),r,{merge:!1})).then(function(){return{data:f({},r,{id:u})}})})})})}P("Create",{resourceName:e,resource:o,params:r});var u=r.data&&r.data.id;P("Create",{hasOverridenDocId:u});var c=function(){if(u){var n=r.data.id;return Promise.resolve(i.getDoc(i.doc(o.collection,n))).then(function(s){if(s.exists())throw new Error('the id:"'+n+"\" already exists, please use a unique string if overriding the 'id' field");return Promise.resolve(t.parseDataAndUpload(o,n,r.data)).then(function(r){if(!n)throw new Error("id must be a valid string");var s=f({},r);return t.checkRemoveIdField(s,n),Promise.resolve(t.addCreatedByFields(s)).then(function(){return Promise.resolve(t.addUpdatedByFields(s)).then(function(){var r=t.transformToDb(e,s,n);return P("Create",{docObj:s}),Promise.resolve(i.setDoc(i.doc(o.collection,n),r,{merge:!1})).then(function(){var e={data:f({},r,{id:n})};return a=1,e})})})})})}}();return c&&c.then?c.then(s):s(c)})}catch(e){return Promise.reject(e)}}(e,r,v)})},delete:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm;return t.options.softDelete?Promise.resolve(function(e,r,t){try{var n=r.id+"";return Promise.resolve(t.rm.TryGetResource(e)).then(function(o){P("DeleteSoft",{resourceName:e,resource:o,params:r});var a={deleted:!0};return Promise.resolve(t.addUpdatedByFields(a)).then(function(){return i.updateDoc(i.doc(o.collection,n),a).catch(function(e){y("DeleteSoft error",{error:e})}),{data:r.previousData}})})}catch(e){return Promise.reject(e)}}(e,r,t)):Promise.resolve(n.TryGetResource(e)).then(function(t){var n;function o(e){return n?e:{data:r.previousData}}P("apiDelete",{resourceName:e,resource:t,params:r});var a=function(e,n){try{var o=Promise.resolve(i.deleteDoc(i.doc(t.collection,r.id+""))).then(function(){})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){throw new Error(e)});return a&&a.then?a.then(o):o(a)})}catch(e){return Promise.reject(e)}}(e,r,v)})},deleteMany:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm,o=t.fireWrapper;return t.options.softDelete?Promise.resolve(function(e,r,t){try{return Promise.resolve(t.rm.TryGetResource(e)).then(function(n){return P("DeleteManySoft",{resourceName:e,resource:n,params:r}),Promise.resolve(Promise.all(r.ids.map(function(e){try{var r=e+"",o={deleted:!0};return Promise.resolve(t.addUpdatedByFields(o)).then(function(){return i.updateDoc(i.doc(n.collection,r),o).catch(function(e){y("apiSoftDeleteMany error",{error:e})}),r})}catch(e){return Promise.reject(e)}}))).then(function(e){return{data:e}})})}catch(e){return Promise.reject(e)}}(e,r,t)):Promise.resolve(n.TryGetResource(e)).then(function(t){var n;function a(e){return n?e:{data:u}}P("DeleteMany",{resourceName:e,resource:t,params:r});for(var s,u=[],c=o.dbCreateBatch(),l=function(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return d(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,r):void 0}}(e))){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(r.ids);!(s=l()).done;){var f=s.value,h=i.doc(t.collection,f+"");c.delete(h),u.push(f)}var v=function(e,r){try{var t=Promise.resolve(c.commit()).then(function(){})}catch(e){return r(e)}return t&&t.then?t.then(void 0,r):t}(0,function(e){throw new Error(e)});return v&&v.then?v.then(a):a(v)})}catch(e){return Promise.reject(e)}}(e,r,v)})}}};
//# sourceMappingURL=index.js.map
