/*!
    localForage -- Offline Storage, Improved
    Version 1.5.5
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).localforage = e()
    }
}((function() {
    return function e(t, r, n) {
        function o(a, u) {
            if (!r[a]) {
                if (!t[a]) { var c = "function" == typeof require && require; if (!u && c) return c(a, !0); if (i) return i(a, !0); var f = new Error("Cannot find module '" + a + "'"); throw f.code = "MODULE_NOT_FOUND", f }
                var s = r[a] = { exports: {} };
                t[a][0].call(s.exports, (function(e) { return o(t[a][1][e] || e) }), s, s.exports, e, t, r, n)
            }
            return r[a].exports
        }
        for (var i = "function" == typeof require && require, a = 0; a < n.length; a++) o(n[a]);
        return o
    }({
        1: [function(e, t, r) {
            (function(e) {
                "use strict";

                function r() {
                    f = !0;
                    for (var e, t, r = s.length; r;) {
                        for (t = s, s = [], e = -1; ++e < r;) t[e]();
                        r = s.length
                    }
                    f = !1
                }
                var n, o = e.MutationObserver || e.WebKitMutationObserver;
                if (o) {
                    var i = 0,
                        a = new o(r),
                        u = e.document.createTextNode("");
                    a.observe(u, { characterData: !0 }), n = function() { u.data = i = ++i % 2 }
                } else if (e.setImmediate || void 0 === e.MessageChannel) n = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
                    var t = e.document.createElement("script");
                    t.onreadystatechange = function() { r(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null }, e.document.documentElement.appendChild(t)
                } : function() { setTimeout(r, 0) };
                else {
                    var c = new e.MessageChannel;
                    c.port1.onmessage = r, n = function() { c.port2.postMessage(0) }
                }
                var f, s = [];
                t.exports = function(e) { 1 !== s.push(e) || f || n() }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        2: [function(e, t, r) {
            "use strict";

            function n() {}

            function o(e) {
                if ("function" != typeof e) throw new TypeError("resolver must be a function");
                this.state = h, this.queue = [], this.outcome = void 0, e !== n && c(this, e)
            }

            function i(e, t, r) { this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r && (this.onRejected = r, this.callRejected = this.otherCallRejected) }

            function a(e, t, r) {
                s((function() {
                    var n;
                    try { n = t(r) } catch (t) { return l.reject(e, t) }
                    n === e ? l.reject(e, new TypeError("Cannot resolve promise with itself")) : l.resolve(e, n)
                }))
            }

            function u(e) { var t = e && e.then; if (e && "object" == typeof e && "function" == typeof t) return function() { t.apply(e, arguments) } }

            function c(e, t) {
                function r(t) { o || (o = !0, l.reject(e, t)) }

                function n(t) { o || (o = !0, l.resolve(e, t)) }
                var o = !1,
                    i = f((function() { t(n, r) }));
                "error" === i.status && r(i.value)
            }

            function f(e, t) { var r = {}; try { r.value = e(t), r.status = "success" } catch (e) { r.status = "error", r.value = e } return r }
            var s = e(1),
                l = {},
                d = ["REJECTED"],
                v = ["FULFILLED"],
                h = ["PENDING"];
            t.exports = r = o, o.prototype.catch = function(e) { return this.then(null, e) }, o.prototype.then = function(e, t) { if ("function" != typeof e && this.state === v || "function" != typeof t && this.state === d) return this; var r = new this.constructor(n); return this.state !== h ? a(r, this.state === v ? e : t, this.outcome) : this.queue.push(new i(r, e, t)), r }, i.prototype.callFulfilled = function(e) { l.resolve(this.promise, e) }, i.prototype.otherCallFulfilled = function(e) { a(this.promise, this.onFulfilled, e) }, i.prototype.callRejected = function(e) { l.reject(this.promise, e) }, i.prototype.otherCallRejected = function(e) { a(this.promise, this.onRejected, e) }, l.resolve = function(e, t) {
                var r = f(u, t);
                if ("error" === r.status) return l.reject(e, r.value);
                var n = r.value;
                if (n) c(e, n);
                else { e.state = v, e.outcome = t; for (var o = -1, i = e.queue.length; ++o < i;) e.queue[o].callFulfilled(t) }
                return e
            }, l.reject = function(e, t) { e.state = d, e.outcome = t; for (var r = -1, n = e.queue.length; ++r < n;) e.queue[r].callRejected(t); return e }, r.resolve = function(e) { return e instanceof this ? e : l.resolve(new this(n), e) }, r.reject = function(e) { var t = new this(n); return l.reject(t, e) }, r.all = function(e) {
                function t(e, t) { r.resolve(e).then((function(e) { a[t] = e, ++u !== o || i || (i = !0, l.resolve(f, a)) }), (function(e) { i || (i = !0, l.reject(f, e)) })) }
                var r = this;
                if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                var o = e.length,
                    i = !1;
                if (!o) return this.resolve([]);
                for (var a = new Array(o), u = 0, c = -1, f = new this(n); ++c < o;) t(e[c], c);
                return f
            }, r.race = function(e) {
                function t(e) { r.resolve(e).then((function(e) { i || (i = !0, l.resolve(u, e)) }), (function(e) { i || (i = !0, l.reject(u, e)) })) }
                var r = this;
                if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                var o = e.length,
                    i = !1;
                if (!o) return this.resolve([]);
                for (var a = -1, u = new this(n); ++a < o;) t(e[a]);
                return u
            }
        }, { 1: 1 }],
        3: [function(e, t, r) {
            (function(t) { "use strict"; "function" != typeof t.Promise && (t.Promise = e(2)) }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { 2: 2 }],
        4: [function(e, t, r) {
            "use strict";

            function n(e, t) { e = e || [], t = t || {}; try { return new Blob(e, t) } catch (o) { if ("TypeError" !== o.name) throw o; for (var r = new("undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder), n = 0; n < e.length; n += 1) r.append(e[n]); return r.getBlob(t.type) } }

            function o(e, t) { t && e.then((function(e) { t(null, e) }), (function(e) { t(e) })) }

            function i(e, t, r) { "function" == typeof t && e.then(t), "function" == typeof r && e.catch(r) }

            function a(e) { return "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), e = String(e)), e }

            function u(e) { for (var t = e.length, r = new ArrayBuffer(t), n = new Uint8Array(r), o = 0; o < t; o++) n[o] = e.charCodeAt(o); return r }

            function c(e) {
                return "boolean" == typeof E ? A.resolve(E) : function(e) {
                    return new A((function(t) {
                        var r = e.transaction(x, D),
                            o = n([""]);
                        r.objectStore(x).put(o, "key"), r.onabort = function(e) { e.preventDefault(), e.stopPropagation(), t(!1) }, r.oncomplete = function() {
                            var e = navigator.userAgent.match(/Chrome\/(\d+)/),
                                r = navigator.userAgent.match(/Edge\//);
                            t(r || !e || parseInt(e[1], 10) >= 43)
                        }
                    })).catch((function() { return !1 }))
                }(e).then((function(e) { return E = e }))
            }

            function f(e) {
                var t = j[e.name],
                    r = {};
                r.promise = new A((function(e) { r.resolve = e })), t.deferredOperations.push(r), t.dbReady ? t.dbReady = t.dbReady.then((function() { return r.promise })) : t.dbReady = r.promise
            }

            function s(e, t) {
                return new A((function(r, n) {
                    if (e.db) {
                        if (!t) return r(e.db);
                        f(e), e.db.close()
                    }
                    var o = [e.name];
                    t && o.push(e.version);
                    var i = S.open.apply(S, o);
                    t && (i.onupgradeneeded = function(t) {
                        var r = i.result;
                        try { r.createObjectStore(e.storeName), t.oldVersion <= 1 && r.createObjectStore(x) } catch (r) {
                            if ("ConstraintError" !== r.name) throw r;
                            console.warn('The database "' + e.name + '" has been upgraded from version ' + t.oldVersion + " to version " + t.newVersion + ', but the storage "' + e.storeName + '" already exists.')
                        }
                    }), i.onerror = function(e) { e.preventDefault(), n(i.error) }, i.onsuccess = function() {
                        r(i.result),
                            function(e) {
                                var t = j[e.name].deferredOperations.pop();
                                t && t.resolve()
                            }(e)
                    }
                }))
            }

            function l(e) { return n([u(atob(e.data))], { type: e.type }) }

            function d(e) { return e && e.__local_forage_encoded_blob }

            function v(e) {
                var t = this,
                    r = t._initReady().then((function() { var e = j[t._dbInfo.name]; if (e && e.dbReady) return e.dbReady }));
                return i(r, e, e), r
            }

            function h(e) {
                f(e);
                for (var t = j[e.name].forages, r = 0; r < t.length; r++) t[r]._dbInfo.db && (t[r]._dbInfo.db.close(), t[r]._dbInfo.db = null);
                return s(e, !1).then((function(e) { for (var r = 0; r < t.length; r++) t[r]._dbInfo.db = e })).catch((function(t) {
                    throw

                    function(e, t) {
                        var r = j[e.name].deferredOperations.pop();
                        r && r.reject(t)
                    }(e, t), t
                }))
            }

            function y(e, t, r) {
                try {
                    var n = e.db.transaction(e.storeName, t);
                    r(null, n)
                } catch (n) {
                    if (!e.db || "InvalidStateError" === n.name) return h(e).then((function() {
                        var n = e.db.transaction(e.storeName, t);
                        r(null, n)
                    }));
                    r(n)
                }
            }

            function p(e) {
                var t, r, n, o, i, a = .75 * e.length,
                    u = e.length,
                    c = 0;
                "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
                var f = new ArrayBuffer(a),
                    s = new Uint8Array(f);
                for (t = 0; t < u; t += 4) r = B.indexOf(e[t]), n = B.indexOf(e[t + 1]), o = B.indexOf(e[t + 2]), i = B.indexOf(e[t + 3]), s[c++] = r << 2 | n >> 4, s[c++] = (15 & n) << 4 | o >> 2, s[c++] = (3 & o) << 6 | 63 & i;
                return f
            }

            function b(e) {
                var t, r = new Uint8Array(e),
                    n = "";
                for (t = 0; t < r.length; t += 3) n += B[r[t] >> 2], n += B[(3 & r[t]) << 4 | r[t + 1] >> 4], n += B[(15 & r[t + 1]) << 2 | r[t + 2] >> 6], n += B[63 & r[t + 2]];
                return r.length % 3 == 2 ? n = n.substring(0, n.length - 1) + "=" : r.length % 3 == 1 && (n = n.substring(0, n.length - 2) + "=="), n
            }

            function g(e, t, r, n) {
                var i = this;
                e = a(e);
                var u = new A((function(o, a) {
                    i.ready().then((function() {
                        void 0 === t && (t = null);
                        var u = t,
                            c = i._dbInfo;
                        c.serializer.serialize(t, (function(t, f) {
                            f ? a(f) : c.db.transaction((function(r) { r.executeSql("INSERT OR REPLACE INTO " + c.storeName + " (key, value) VALUES (?, ?)", [e, t], (function() { o(u) }), (function(e, t) { a(t) })) }), (function(t) {
                                if (t.code === t.QUOTA_ERR) {
                                    if (n > 0) return void o(g.apply(i, [e, u, r, n - 1]));
                                    a(t)
                                }
                            }))
                        }))
                    })).catch(a)
                }));
                return o(u, r), u
            }

            function m() { return ! function() { var e = "_localforage_support_test"; try { return localStorage.setItem(e, !0), localStorage.removeItem(e), !1 } catch (e) { return !0 } }() || localStorage.length > 0 }

            function _(e, t) { e[t] = function() { var r = arguments; return e.ready().then((function() { return e[t].apply(e, r) })) } }

            function w() {
                for (var e = 1; e < arguments.length; e++) {
                    var t = arguments[e];
                    if (t)
                        for (var r in t) t.hasOwnProperty(r) && ($(t[r]) ? arguments[0][r] = t[r].slice() : arguments[0][r] = t[r])
                }
                return arguments[0]
            }
            var I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
                S = function() { try { if ("undefined" != typeof indexedDB) return indexedDB; if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB; if ("undefined" != typeof mozIndexedDB) return mozIndexedDB; if ("undefined" != typeof OIndexedDB) return OIndexedDB; if ("undefined" != typeof msIndexedDB) return msIndexedDB } catch (e) { return } }();
            "undefined" == typeof Promise && e(3);
            var E, j, A = Promise,
                x = "local-forage-detect-blob-support",
                R = Object.prototype.toString,
                O = "readonly",
                D = "readwrite",
                N = {
                    _driver: "asyncStorage",
                    _initStorage: function(e) {
                        function t() { return A.resolve() }
                        var r = this,
                            n = { db: null };
                        if (e)
                            for (var o in e) n[o] = e[o];
                        j || (j = {});
                        var i = j[n.name];
                        i || (i = { forages: [], db: null, dbReady: null, deferredOperations: [] }, j[n.name] = i), i.forages.push(r), r._initReady || (r._initReady = r.ready, r.ready = v);
                        for (var a = [], u = 0; u < i.forages.length; u++) {
                            var c = i.forages[u];
                            c !== r && a.push(c._initReady().catch(t))
                        }
                        var f = i.forages.slice(0);
                        return A.all(a).then((function() {
                            return n.db = i.db,
                                function(e) { return s(e, !1) }(n)
                        })).then((function(e) {
                            return n.db = e,
                                function(e, t) {
                                    if (!e.db) return !0;
                                    var r = !e.db.objectStoreNames.contains(e.storeName),
                                        n = e.version < e.db.version,
                                        o = e.version > e.db.version;
                                    if (n && (e.version !== t && console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), o || r) {
                                        if (r) {
                                            var i = e.db.version + 1;
                                            i > e.version && (e.version = i)
                                        }
                                        return !0
                                    }
                                    return !1
                                }(n, r._defaultConfig.version) ? function(e) { return s(e, !0) }(n) : e
                        })).then((function(e) {
                            n.db = i.db = e, r._dbInfo = n;
                            for (var t = 0; t < f.length; t++) {
                                var o = f[t];
                                o !== r && (o._dbInfo.db = n.db, o._dbInfo.version = n.version)
                            }
                        }))
                    },
                    _support: function() {
                        try {
                            if (!S) return !1;
                            var e = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                                t = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                            return (!e || t) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
                        } catch (e) { return !1 }
                    }(),
                    iterate: function(e, t) {
                        var r = this,
                            n = new A((function(t, n) {
                                r.ready().then((function() {
                                    y(r._dbInfo, O, (function(o, i) {
                                        if (o) return n(o);
                                        try {
                                            var a = i.objectStore(r._dbInfo.storeName).openCursor(),
                                                u = 1;
                                            a.onsuccess = function() {
                                                var r = a.result;
                                                if (r) {
                                                    var n = r.value;
                                                    d(n) && (n = l(n));
                                                    var o = e(n, r.key, u++);
                                                    void 0 !== o ? t(o) : r.continue()
                                                } else t()
                                            }, a.onerror = function() { n(a.error) }
                                        } catch (e) { n(e) }
                                    }))
                                })).catch(n)
                            }));
                        return o(n, t), n
                    },
                    getItem: function(e, t) {
                        var r = this;
                        e = a(e);
                        var n = new A((function(t, n) {
                            r.ready().then((function() {
                                y(r._dbInfo, O, (function(o, i) {
                                    if (o) return n(o);
                                    try {
                                        var a = i.objectStore(r._dbInfo.storeName).get(e);
                                        a.onsuccess = function() {
                                            var e = a.result;
                                            void 0 === e && (e = null), d(e) && (e = l(e)), t(e)
                                        }, a.onerror = function() { n(a.error) }
                                    } catch (e) { n(e) }
                                }))
                            })).catch(n)
                        }));
                        return o(n, t), n
                    },
                    setItem: function(e, t, r) {
                        var n = this;
                        e = a(e);
                        var i = new A((function(r, o) {
                            var i;
                            n.ready().then((function() {
                                return i = n._dbInfo, "[object Blob]" === R.call(t) ? c(i.db).then((function(e) {
                                    return e ? t : function(e) {
                                        return new A((function(t, r) {
                                            var n = new FileReader;
                                            n.onerror = r, n.onloadend = function(r) {
                                                var n = btoa(r.target.result || "");
                                                t({ __local_forage_encoded_blob: !0, data: n, type: e.type })
                                            }, n.readAsBinaryString(e)
                                        }))
                                    }(t)
                                })) : t
                            })).then((function(t) {
                                y(n._dbInfo, D, (function(i, a) {
                                    if (i) return o(i);
                                    try {
                                        var u = a.objectStore(n._dbInfo.storeName);
                                        null === t && (t = void 0);
                                        var c = u.put(t, e);
                                        a.oncomplete = function() { void 0 === t && (t = null), r(t) }, a.onabort = a.onerror = function() {
                                            var e = c.error ? c.error : c.transaction.error;
                                            o(e)
                                        }
                                    } catch (e) { o(e) }
                                }))
                            })).catch(o)
                        }));
                        return o(i, r), i
                    },
                    removeItem: function(e, t) {
                        var r = this;
                        e = a(e);
                        var n = new A((function(t, n) {
                            r.ready().then((function() {
                                y(r._dbInfo, D, (function(o, i) {
                                    if (o) return n(o);
                                    try {
                                        var a = i.objectStore(r._dbInfo.storeName).delete(e);
                                        i.oncomplete = function() { t() }, i.onerror = function() { n(a.error) }, i.onabort = function() {
                                            var e = a.error ? a.error : a.transaction.error;
                                            n(e)
                                        }
                                    } catch (e) { n(e) }
                                }))
                            })).catch(n)
                        }));
                        return o(n, t), n
                    },
                    clear: function(e) {
                        var t = this,
                            r = new A((function(e, r) {
                                t.ready().then((function() {
                                    y(t._dbInfo, D, (function(n, o) {
                                        if (n) return r(n);
                                        try {
                                            var i = o.objectStore(t._dbInfo.storeName).clear();
                                            o.oncomplete = function() { e() }, o.onabort = o.onerror = function() {
                                                var e = i.error ? i.error : i.transaction.error;
                                                r(e)
                                            }
                                        } catch (e) { r(e) }
                                    }))
                                })).catch(r)
                            }));
                        return o(r, e), r
                    },
                    length: function(e) {
                        var t = this,
                            r = new A((function(e, r) {
                                t.ready().then((function() {
                                    y(t._dbInfo, O, (function(n, o) {
                                        if (n) return r(n);
                                        try {
                                            var i = o.objectStore(t._dbInfo.storeName).count();
                                            i.onsuccess = function() { e(i.result) }, i.onerror = function() { r(i.error) }
                                        } catch (e) { r(e) }
                                    }))
                                })).catch(r)
                            }));
                        return o(r, e), r
                    },
                    key: function(e, t) {
                        var r = this,
                            n = new A((function(t, n) {
                                e < 0 ? t(null) : r.ready().then((function() {
                                    y(r._dbInfo, O, (function(o, i) {
                                        if (o) return n(o);
                                        try {
                                            var a = i.objectStore(r._dbInfo.storeName),
                                                u = !1,
                                                c = a.openCursor();
                                            c.onsuccess = function() {
                                                var r = c.result;
                                                r ? 0 === e || u ? t(r.key) : (u = !0, r.advance(e)) : t(null)
                                            }, c.onerror = function() { n(c.error) }
                                        } catch (e) { n(e) }
                                    }))
                                })).catch(n)
                            }));
                        return o(n, t), n
                    },
                    keys: function(e) {
                        var t = this,
                            r = new A((function(e, r) {
                                t.ready().then((function() {
                                    y(t._dbInfo, O, (function(n, o) {
                                        if (n) return r(n);
                                        try {
                                            var i = o.objectStore(t._dbInfo.storeName).openCursor(),
                                                a = [];
                                            i.onsuccess = function() {
                                                var t = i.result;
                                                t ? (a.push(t.key), t.continue()) : e(a)
                                            }, i.onerror = function() { r(i.error) }
                                        } catch (e) { r(e) }
                                    }))
                                })).catch(r)
                            }));
                        return o(r, e), r
                    }
                },
                B = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                k = "~~local_forage_type~",
                C = /^~~local_forage_type~([^~]+)~/,
                T = "__lfsc__:",
                F = T.length,
                L = "arbf",
                z = "blob",
                M = "si08",
                P = "ui08",
                q = "uic8",
                U = "si16",
                W = "si32",
                Q = "ur16",
                G = "ui32",
                H = "fl32",
                J = "fl64",
                K = F + L.length,
                V = Object.prototype.toString,
                X = {
                    serialize: function(e, t) {
                        var r = "";
                        if (e && (r = V.call(e)), e && ("[object ArrayBuffer]" === r || e.buffer && "[object ArrayBuffer]" === V.call(e.buffer))) {
                            var n, o = T;
                            e instanceof ArrayBuffer ? (n = e, o += L) : (n = e.buffer, "[object Int8Array]" === r ? o += M : "[object Uint8Array]" === r ? o += P : "[object Uint8ClampedArray]" === r ? o += q : "[object Int16Array]" === r ? o += U : "[object Uint16Array]" === r ? o += Q : "[object Int32Array]" === r ? o += W : "[object Uint32Array]" === r ? o += G : "[object Float32Array]" === r ? o += H : "[object Float64Array]" === r ? o += J : t(new Error("Failed to get type for BinaryArray"))), t(o + b(n))
                        } else if ("[object Blob]" === r) {
                            var i = new FileReader;
                            i.onload = function() {
                                var r = k + e.type + "~" + b(this.result);
                                t(T + z + r)
                            }, i.readAsArrayBuffer(e)
                        } else try { t(JSON.stringify(e)) } catch (r) { console.error("Couldn't convert value into a JSON string: ", e), t(null, r) }
                    },
                    deserialize: function(e) {
                        if (e.substring(0, F) !== T) return JSON.parse(e);
                        var t, r = e.substring(K),
                            o = e.substring(F, K);
                        if (o === z && C.test(r)) {
                            var i = r.match(C);
                            t = i[1], r = r.substring(i[0].length)
                        }
                        var a = p(r);
                        switch (o) {
                            case L:
                                return a;
                            case z:
                                return n([a], { type: t });
                            case M:
                                return new Int8Array(a);
                            case P:
                                return new Uint8Array(a);
                            case q:
                                return new Uint8ClampedArray(a);
                            case U:
                                return new Int16Array(a);
                            case Q:
                                return new Uint16Array(a);
                            case W:
                                return new Int32Array(a);
                            case G:
                                return new Uint32Array(a);
                            case H:
                                return new Float32Array(a);
                            case J:
                                return new Float64Array(a);
                            default:
                                throw new Error("Unkown type: " + o)
                        }
                    },
                    stringToBuffer: p,
                    bufferToString: b
                },
                Y = {
                    _driver: "webSQLStorage",
                    _initStorage: function(e) {
                        var t = this,
                            r = { db: null };
                        if (e)
                            for (var n in e) r[n] = "string" != typeof e[n] ? e[n].toString() : e[n];
                        var o = new A((function(e, n) {
                            try { r.db = openDatabase(r.name, String(r.version), r.description, r.size) } catch (e) { return n(e) }
                            r.db.transaction((function(o) { o.executeSql("CREATE TABLE IF NOT EXISTS " + r.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], (function() { t._dbInfo = r, e() }), (function(e, t) { n(t) })) }))
                        }));
                        return r.serializer = X, o
                    },
                    _support: "function" == typeof openDatabase,
                    iterate: function(e, t) {
                        var r = this,
                            n = new A((function(t, n) {
                                r.ready().then((function() {
                                    var o = r._dbInfo;
                                    o.db.transaction((function(r) {
                                        r.executeSql("SELECT * FROM " + o.storeName, [], (function(r, n) {
                                            for (var i = n.rows, a = i.length, u = 0; u < a; u++) {
                                                var c = i.item(u),
                                                    f = c.value;
                                                if (f && (f = o.serializer.deserialize(f)), void 0 !== (f = e(f, c.key, u + 1))) return void t(f)
                                            }
                                            t()
                                        }), (function(e, t) { n(t) }))
                                    }))
                                })).catch(n)
                            }));
                        return o(n, t), n
                    },
                    getItem: function(e, t) {
                        var r = this;
                        e = a(e);
                        var n = new A((function(t, n) {
                            r.ready().then((function() {
                                var o = r._dbInfo;
                                o.db.transaction((function(r) {
                                    r.executeSql("SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [e], (function(e, r) {
                                        var n = r.rows.length ? r.rows.item(0).value : null;
                                        n && (n = o.serializer.deserialize(n)), t(n)
                                    }), (function(e, t) { n(t) }))
                                }))
                            })).catch(n)
                        }));
                        return o(n, t), n
                    },
                    setItem: function(e, t, r) { return g.apply(this, [e, t, r, 1]) },
                    removeItem: function(e, t) {
                        var r = this;
                        e = a(e);
                        var n = new A((function(t, n) {
                            r.ready().then((function() {
                                var o = r._dbInfo;
                                o.db.transaction((function(r) { r.executeSql("DELETE FROM " + o.storeName + " WHERE key = ?", [e], (function() { t() }), (function(e, t) { n(t) })) }))
                            })).catch(n)
                        }));
                        return o(n, t), n
                    },
                    clear: function(e) {
                        var t = this,
                            r = new A((function(e, r) {
                                t.ready().then((function() {
                                    var n = t._dbInfo;
                                    n.db.transaction((function(t) { t.executeSql("DELETE FROM " + n.storeName, [], (function() { e() }), (function(e, t) { r(t) })) }))
                                })).catch(r)
                            }));
                        return o(r, e), r
                    },
                    length: function(e) {
                        var t = this,
                            r = new A((function(e, r) {
                                t.ready().then((function() {
                                    var n = t._dbInfo;
                                    n.db.transaction((function(t) {
                                        t.executeSql("SELECT COUNT(key) as c FROM " + n.storeName, [], (function(t, r) {
                                            var n = r.rows.item(0).c;
                                            e(n)
                                        }), (function(e, t) { r(t) }))
                                    }))
                                })).catch(r)
                            }));
                        return o(r, e), r
                    },
                    key: function(e, t) {
                        var r = this,
                            n = new A((function(t, n) {
                                r.ready().then((function() {
                                    var o = r._dbInfo;
                                    o.db.transaction((function(r) {
                                        r.executeSql("SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [e + 1], (function(e, r) {
                                            var n = r.rows.length ? r.rows.item(0).key : null;
                                            t(n)
                                        }), (function(e, t) { n(t) }))
                                    }))
                                })).catch(n)
                            }));
                        return o(n, t), n
                    },
                    keys: function(e) {
                        var t = this,
                            r = new A((function(e, r) {
                                t.ready().then((function() {
                                    var n = t._dbInfo;
                                    n.db.transaction((function(t) {
                                        t.executeSql("SELECT key FROM " + n.storeName, [], (function(t, r) {
                                            for (var n = [], o = 0; o < r.rows.length; o++) n.push(r.rows.item(o).key);
                                            e(n)
                                        }), (function(e, t) { r(t) }))
                                    }))
                                })).catch(r)
                            }));
                        return o(r, e), r
                    }
                },
                Z = {
                    _driver: "localStorageWrapper",
                    _initStorage: function(e) {
                        var t = {};
                        if (e)
                            for (var r in e) t[r] = e[r];
                        return t.keyPrefix = t.name + "/", t.storeName !== this._defaultConfig.storeName && (t.keyPrefix += t.storeName + "/"), m() ? (this._dbInfo = t, t.serializer = X, A.resolve()) : A.reject()
                    },
                    _support: function() { try { return "undefined" != typeof localStorage && "setItem" in localStorage && "function" == typeof localStorage.setItem } catch (e) { return !1 } }(),
                    iterate: function(e, t) {
                        var r = this,
                            n = r.ready().then((function() { for (var t = r._dbInfo, n = t.keyPrefix, o = n.length, i = localStorage.length, a = 1, u = 0; u < i; u++) { var c = localStorage.key(u); if (0 === c.indexOf(n)) { var f = localStorage.getItem(c); if (f && (f = t.serializer.deserialize(f)), void 0 !== (f = e(f, c.substring(o), a++))) return f } } }));
                        return o(n, t), n
                    },
                    getItem: function(e, t) {
                        var r = this;
                        e = a(e);
                        var n = r.ready().then((function() {
                            var t = r._dbInfo,
                                n = localStorage.getItem(t.keyPrefix + e);
                            return n && (n = t.serializer.deserialize(n)), n
                        }));
                        return o(n, t), n
                    },
                    setItem: function(e, t, r) {
                        var n = this;
                        e = a(e);
                        var i = n.ready().then((function() {
                            void 0 === t && (t = null);
                            var r = t;
                            return new A((function(o, i) {
                                var a = n._dbInfo;
                                a.serializer.serialize(t, (function(t, n) {
                                    if (n) i(n);
                                    else try { localStorage.setItem(a.keyPrefix + e, t), o(r) } catch (e) { "QuotaExceededError" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name || i(e), i(e) }
                                }))
                            }))
                        }));
                        return o(i, r), i
                    },
                    removeItem: function(e, t) {
                        var r = this;
                        e = a(e);
                        var n = r.ready().then((function() {
                            var t = r._dbInfo;
                            localStorage.removeItem(t.keyPrefix + e)
                        }));
                        return o(n, t), n
                    },
                    clear: function(e) {
                        var t = this,
                            r = t.ready().then((function() {
                                for (var e = t._dbInfo.keyPrefix, r = localStorage.length - 1; r >= 0; r--) {
                                    var n = localStorage.key(r);
                                    0 === n.indexOf(e) && localStorage.removeItem(n)
                                }
                            }));
                        return o(r, e), r
                    },
                    length: function(e) { var t = this.keys().then((function(e) { return e.length })); return o(t, e), t },
                    key: function(e, t) {
                        var r = this,
                            n = r.ready().then((function() { var t, n = r._dbInfo; try { t = localStorage.key(e) } catch (e) { t = null } return t && (t = t.substring(n.keyPrefix.length)), t }));
                        return o(n, t), n
                    },
                    keys: function(e) {
                        var t = this,
                            r = t.ready().then((function() {
                                for (var e = t._dbInfo, r = localStorage.length, n = [], o = 0; o < r; o++) {
                                    var i = localStorage.key(o);
                                    0 === i.indexOf(e.keyPrefix) && n.push(i.substring(e.keyPrefix.length))
                                }
                                return n
                            }));
                        return o(r, e), r
                    }
                },
                $ = Array.isArray || function(e) { return "[object Array]" === Object.prototype.toString.call(e) },
                ee = {},
                te = {},
                re = { INDEXEDDB: N, WEBSQL: Y, LOCALSTORAGE: Z },
                ne = [re.INDEXEDDB._driver, re.WEBSQL._driver, re.LOCALSTORAGE._driver],
                oe = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"],
                ie = { description: "", driver: ne.slice(), name: "localforage", size: 4980736, storeName: "keyvaluepairs", version: 1 },
                ae = function() {
                    function e(t) {
                        for (var r in function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), re)
                            if (re.hasOwnProperty(r)) {
                                var n = re[r],
                                    o = n._driver;
                                this[r] = o, ee[o] || this.defineDriver(n)
                            }
                        this._defaultConfig = w({}, ie), this._config = w({}, this._defaultConfig, t), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch((function() {}))
                    }
                    return e.prototype.config = function(e) {
                        if ("object" === (void 0 === e ? "undefined" : I(e))) {
                            if (this._ready) return new Error("Can't call config() after localforage has been used.");
                            for (var t in e) {
                                if ("storeName" === t && (e[t] = e[t].replace(/\W/g, "_")), "version" === t && "number" != typeof e[t]) return new Error("Database version must be a number.");
                                this._config[t] = e[t]
                            }
                            return !("driver" in e && e.driver) || this.setDriver(this._config.driver)
                        }
                        return "string" == typeof e ? this._config[e] : this._config
                    }, e.prototype.defineDriver = function(e, t, r) {
                        var n = new A((function(t, r) {
                            try {
                                var n = e._driver,
                                    o = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                if (!e._driver) return void r(o);
                                for (var i = oe.concat("_initStorage"), a = 0, u = i.length; a < u; a++) { var c = i[a]; if (!c || !e[c] || "function" != typeof e[c]) return void r(o) }
                                var f = function(r) { ee[n] && console.info("Redefining LocalForage driver: " + n), ee[n] = e, te[n] = r, t() };
                                "_support" in e ? e._support && "function" == typeof e._support ? e._support().then(f, r) : f(!!e._support) : f(!0)
                            } catch (e) { r(e) }
                        }));
                        return i(n, t, r), n
                    }, e.prototype.driver = function() { return this._driver || null }, e.prototype.getDriver = function(e, t, r) { var n = ee[e] ? A.resolve(ee[e]) : A.reject(new Error("Driver not found.")); return i(n, t, r), n }, e.prototype.getSerializer = function(e) { var t = A.resolve(X); return i(t, e), t }, e.prototype.ready = function(e) {
                        var t = this,
                            r = t._driverSet.then((function() { return null === t._ready && (t._ready = t._initDriver()), t._ready }));
                        return i(r, e, e), r
                    }, e.prototype.setDriver = function(e, t, r) {
                        function n() { a._config.driver = a.driver() }

                        function o(e) { return a._extend(e), n(), a._ready = a._initStorage(a._config), a._ready }
                        var a = this;
                        $(e) || (e = [e]);
                        var u = this._getSupportedDrivers(e),
                            c = null !== this._driverSet ? this._driverSet.catch((function() { return A.resolve() })) : A.resolve();
                        return this._driverSet = c.then((function() {
                            var e = u[0];
                            return a._dbInfo = null, a._ready = null, a.getDriver(e).then((function(e) {
                                a._driver = e._driver, n(), a._wrapLibraryMethodsWithReady(), a._initDriver = function(e) {
                                    return function() {
                                        var t = 0;
                                        return function r() {
                                            for (; t < e.length;) { var i = e[t]; return t++, a._dbInfo = null, a._ready = null, a.getDriver(i).then(o).catch(r) }
                                            n();
                                            var u = new Error("No available storage method found.");
                                            return a._driverSet = A.reject(u), a._driverSet
                                        }()
                                    }
                                }(u)
                            }))
                        })).catch((function() { n(); var e = new Error("No available storage method found."); return a._driverSet = A.reject(e), a._driverSet })), i(this._driverSet, t, r), this._driverSet
                    }, e.prototype.supports = function(e) { return !!te[e] }, e.prototype._extend = function(e) { w(this, e) }, e.prototype._getSupportedDrivers = function(e) {
                        for (var t = [], r = 0, n = e.length; r < n; r++) {
                            var o = e[r];
                            this.supports(o) && t.push(o)
                        }
                        return t
                    }, e.prototype._wrapLibraryMethodsWithReady = function() { for (var e = 0, t = oe.length; e < t; e++) _(this, oe[e]) }, e.prototype.createInstance = function(t) { return new e(t) }, e
                }(),
                ue = new ae;
            t.exports = ue
        }, { 3: 3 }]
    }, {}, [4])(4)
}));