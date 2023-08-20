!function(e, t) {
    "use strict";
    function n(e, n, o) {
        if ("string" != typeof e)
            throw "invalid module definition, module id must be defined and be a string";
        if (n === t)
            throw "invalid module definition, dependencies must be specified";
        if (o === t)
            throw "invalid module definition, definition function must be specified";
        !function(e, t) {
            for (var n, o = [], a = 0; a < e.length; ++a) {
                if (!(n = i[e[a]] || r(e[a])))
                    throw "module definition dependecy not found: " + e[a];
                o.push(n)
            }
            t.apply(null, o)
        }(n, (function() {
            i[e] = o.apply(null, arguments)
        }
        ))
    }
    function r(t) {
        for (var n = e, r = t.split(/[.\/]/), i = 0; i < r.length; ++i) {
            if (!n[r[i]])
                return;
            n = n[r[i]]
        }
        return n
    }
    var i = {}
      , o = "tinymce/geom/Rect"
      , a = "tinymce/util/Promise"
      , s = "tinymce/util/Delay"
      , l = "tinymce/Env"
      , c = "tinymce/dom/EventUtils"
      , u = "tinymce/dom/Sizzle"
      , d = "tinymce/util/Arr"
      , f = "tinymce/util/Tools"
      , h = "tinymce/dom/DomQuery"
      , p = "tinymce/html/Styles"
      , m = "tinymce/dom/TreeWalker"
      , g = "tinymce/dom/Range"
      , v = "tinymce/html/Entities"
      , y = "tinymce/dom/StyleSheetLoader"
      , b = "tinymce/dom/DOMUtils"
      , C = "tinymce/dom/ScriptLoader"
      , x = "tinymce/AddOnManager"
      , w = "tinymce/dom/NodeType"
      , E = "tinymce/text/Zwsp"
      , N = "tinymce/caret/CaretContainer"
      , _ = "tinymce/dom/RangeUtils"
      , S = "tinymce/NodeChange"
      , k = "tinymce/html/Node"
      , T = "tinymce/html/Schema"
      , R = "tinymce/html/SaxParser"
      , A = "tinymce/html/DomParser"
      , B = "tinymce/html/Writer"
      , D = "tinymce/html/Serializer"
      , L = "tinymce/dom/Serializer"
      , M = "tinymce/dom/TridentSelection"
      , P = "tinymce/util/VK"
      , O = "tinymce/dom/ControlSelection"
      , H = "tinymce/util/Fun"
      , I = "tinymce/caret/CaretCandidate"
      , F = "tinymce/geom/ClientRect"
      , z = "tinymce/text/ExtendingChar"
      , U = "tinymce/caret/CaretPosition"
      , W = "tinymce/caret/CaretBookmark"
      , V = "tinymce/dom/BookmarkManager"
      , $ = "tinymce/dom/Selection"
      , q = "tinymce/dom/ElementUtils"
      , j = "tinymce/fmt/Preview"
      , Y = "tinymce/fmt/Hooks"
      , X = "tinymce/Formatter"
      , K = "tinymce/undo/Diff"
      , G = "tinymce/undo/Fragments"
      , J = "tinymce/undo/Levels"
      , Q = "tinymce/UndoManager"
      , Z = "tinymce/EnterKey"
      , ee = "tinymce/ForceBlocks"
      , te = "tinymce/caret/CaretUtils"
      , ne = "tinymce/caret/CaretWalker"
      , re = "tinymce/InsertList"
      , ie = "tinymce/InsertContent"
      , oe = "tinymce/EditorCommands"
      , ae = "tinymce/util/URI"
      , se = "tinymce/util/Class"
      , le = "tinymce/util/EventDispatcher"
      , ce = "tinymce/data/Binding"
      , ue = "tinymce/util/Observable"
      , de = "tinymce/data/ObservableObject"
      , fe = "tinymce/ui/Selector"
      , he = "tinymce/ui/Collection"
      , pe = "tinymce/ui/DomUtils"
      , me = "tinymce/ui/BoxUtils"
      , ge = "tinymce/ui/ClassList"
      , ve = "tinymce/ui/ReflowQueue"
      , ye = "tinymce/ui/Control"
      , be = "tinymce/ui/Factory"
      , Ce = "tinymce/ui/KeyboardNavigation"
      , xe = "tinymce/ui/Container"
      , we = "tinymce/ui/DragHelper"
      , Ee = "tinymce/ui/Scrollable"
      , Ne = "tinymce/ui/Panel"
      , _e = "tinymce/ui/Movable"
      , Se = "tinymce/ui/Resizable"
      , ke = "tinymce/ui/FloatPanel"
      , Te = "tinymce/ui/Window"
      , Re = "tinymce/ui/MessageBox"
      , Ae = "tinymce/WindowManager"
      , Be = "tinymce/ui/Tooltip"
      , De = "tinymce/ui/Widget"
      , Le = "tinymce/ui/Progress"
      , Me = "tinymce/ui/Notification"
      , Pe = "tinymce/NotificationManager"
      , Oe = "tinymce/dom/NodePath"
      , He = "tinymce/util/Quirks"
      , Ie = "tinymce/EditorObservable"
      , Fe = "tinymce/Mode"
      , ze = "tinymce/Shortcuts"
      , Ue = "tinymce/file/Uploader"
      , We = "tinymce/file/Conversions"
      , Ve = "tinymce/file/ImageScanner"
      , $e = "tinymce/file/BlobCache"
      , qe = "tinymce/file/UploadStatus"
      , je = "tinymce/EditorUpload"
      , Ye = "tinymce/caret/FakeCaret"
      , Xe = "tinymce/dom/Dimensions"
      , Ke = "tinymce/caret/LineWalker"
      , Ge = "tinymce/caret/LineUtils"
      , Je = "tinymce/dom/MousePosition"
      , Qe = "tinymce/DragDropOverrides"
      , Ze = "tinymce/SelectionOverrides"
      , et = "tinymce/util/Uuid"
      , tt = "tinymce/ui/Sidebar"
      , nt = "tinymce/Editor"
      , rt = "tinymce/util/I18n"
      , it = "tinymce/FocusManager"
      , ot = "tinymce/EditorManager"
      , at = "tinymce/util/XHR"
      , st = "tinymce/util/JSON"
      , lt = "tinymce/util/JSONRequest"
      , ct = "tinymce/util/JSONP"
      , ut = "tinymce/util/LocalStorage"
      , dt = "tinymce/Compat"
      , ft = "tinymce/ui/Layout"
      , ht = "tinymce/ui/AbsoluteLayout"
      , pt = "tinymce/ui/Button"
      , mt = "tinymce/ui/ButtonGroup"
      , gt = "tinymce/ui/Checkbox"
      , vt = "tinymce/ui/ComboBox"
      , yt = "tinymce/ui/ColorBox"
      , bt = "tinymce/ui/PanelButton"
      , Ct = "tinymce/ui/ColorButton"
      , xt = "tinymce/util/Color"
      , wt = "tinymce/ui/ColorPicker"
      , Et = "tinymce/ui/Path"
      , Nt = "tinymce/ui/ElementPath"
      , _t = "tinymce/ui/FormItem"
      , St = "tinymce/ui/Form"
      , kt = "tinymce/ui/FieldSet"
      , Tt = "tinymce/content/LinkTargets"
      , Rt = "tinymce/ui/FilePicker"
      , At = "tinymce/ui/FitLayout"
      , Bt = "tinymce/ui/FlexLayout"
      , Dt = "tinymce/ui/FlowLayout"
      , Lt = "tinymce/ui/FormatControls"
      , Mt = "tinymce/ui/GridLayout"
      , Pt = "tinymce/ui/Iframe"
      , Ot = "tinymce/ui/InfoBox"
      , Ht = "tinymce/ui/Label"
      , It = "tinymce/ui/Toolbar"
      , Ft = "tinymce/ui/MenuBar"
      , zt = "tinymce/ui/MenuButton"
      , Ut = "tinymce/ui/MenuItem"
      , Wt = "tinymce/ui/Throbber"
      , Vt = "tinymce/ui/Menu"
      , $t = "tinymce/ui/ListBox"
      , qt = "tinymce/ui/Radio"
      , jt = "tinymce/ui/ResizeHandle"
      , Yt = "tinymce/ui/SelectBox"
      , Xt = "tinymce/ui/Slider"
      , Kt = "tinymce/ui/Spacer"
      , Gt = "tinymce/ui/SplitButton"
      , Jt = "tinymce/ui/StackLayout"
      , Qt = "tinymce/ui/TabPanel"
      , Zt = "tinymce/ui/TextBox";
    n(o, [], (function() {
        function e(e, n, r) {
            var o, a, s, l, c, u;
            return o = n.x,
            a = n.y,
            s = e.w,
            l = e.h,
            c = n.w,
            u = n.h,
            "b" === (r = (r || "").split(""))[0] && (a += u),
            "r" === r[1] && (o += c),
            "c" === r[0] && (a += i(u / 2)),
            "c" === r[1] && (o += i(c / 2)),
            "b" === r[3] && (a -= l),
            "r" === r[4] && (o -= s),
            "c" === r[3] && (a -= i(l / 2)),
            "c" === r[4] && (o -= i(s / 2)),
            t(o, a, s, l)
        }
        function t(e, t, n, r) {
            return {
                x: e,
                y: t,
                w: n,
                h: r
            }
        }
        var n = Math.min
          , r = Math.max
          , i = Math.round;
        return {
            inflate: function(e, n, r) {
                return t(e.x - n, e.y - r, e.w + 2 * n, e.h + 2 * r)
            },
            relativePosition: e,
            findBestRelativePosition: function(t, n, r, i) {
                var o, a;
                for (a = 0; a < i.length; a++)
                    if ((o = e(t, n, i[a])).x >= r.x && o.x + o.w <= r.w + r.x && o.y >= r.y && o.y + o.h <= r.h + r.y)
                        return i[a];
                return null
            },
            intersect: function(e, i) {
                var o, a, s, l;
                return o = r(e.x, i.x),
                a = r(e.y, i.y),
                s = n(e.x + e.w, i.x + i.w),
                l = n(e.y + e.h, i.y + i.h),
                s - o < 0 || l - a < 0 ? null : t(o, a, s - o, l - a)
            },
            clamp: function(e, n, i) {
                var o, a, s, l, c, u, d, f, h, p;
                return c = e.x,
                u = e.y,
                d = e.x + e.w,
                f = e.y + e.h,
                h = n.x + n.w,
                p = n.y + n.h,
                o = r(0, n.x - c),
                a = r(0, n.y - u),
                s = r(0, d - h),
                l = r(0, f - p),
                c += o,
                u += a,
                i && (d += o,
                f += a,
                c -= s,
                u -= l),
                t(c, u, (d -= s) - c, (f -= l) - u)
            },
            create: t,
            fromClientRect: function(e) {
                return t(e.left, e.top, e.width, e.height)
            }
        }
    }
    )),
    n(a, [], (function() {
        function e(e, t) {
            return function() {
                e.apply(t, arguments)
            }
        }
        function t(t) {
            if ("object" != typeof this)
                throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof t)
                throw new TypeError("not a function");
            this._state = null,
            this._value = null,
            this._deferreds = [],
            s(t, e(r, this), e(i, this))
        }
        function n(e) {
            var t = this;
            return null === this._state ? void this._deferreds.push(e) : void l((function() {
                var n = t._state ? e.onFulfilled : e.onRejected;
                if (null !== n) {
                    var r;
                    try {
                        r = n(t._value)
                    } catch (t) {
                        return void e.reject(t)
                    }
                    e.resolve(r)
                } else
                    (t._state ? e.resolve : e.reject)(t._value)
            }
            ))
        }
        function r(t) {
            try {
                if (t === this)
                    throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var n = t.then;
                    if ("function" == typeof n)
                        return void s(e(n, t), e(r, this), e(i, this))
                }
                this._state = !0,
                this._value = t,
                o.call(this)
            } catch (e) {
                i.call(this, e)
            }
        }
        function i(e) {
            this._state = !1,
            this._value = e,
            o.call(this)
        }
        function o() {
            for (var e = 0, t = this._deferreds.length; e < t; e++)
                n.call(this, this._deferreds[e]);
            this._deferreds = null
        }
        function a(e, t, n, r) {
            this.onFulfilled = "function" == typeof e ? e : null,
            this.onRejected = "function" == typeof t ? t : null,
            this.resolve = n,
            this.reject = r
        }
        function s(e, t, n) {
            var r = !1;
            try {
                e((function(e) {
                    r || (r = !0,
                    t(e))
                }
                ), (function(e) {
                    r || (r = !0,
                    n(e))
                }
                ))
            } catch (e) {
                if (r)
                    return;
                r = !0,
                n(e)
            }
        }
        if (window.Promise)
            return window.Promise;
        var l = t.immediateFn || "function" == typeof setImmediate && setImmediate || function(e) {
            setTimeout(e, 1)
        }
          , c = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        ;
        return t.prototype.catch = function(e) {
            return this.then(null, e)
        }
        ,
        t.prototype.then = function(e, r) {
            var i = this;
            return new t((function(t, o) {
                n.call(i, new a(e,r,t,o))
            }
            ))
        }
        ,
        t.all = function() {
            var e = Array.prototype.slice.call(1 === arguments.length && c(arguments[0]) ? arguments[0] : arguments);
            return new t((function(t, n) {
                function r(o, a) {
                    try {
                        if (a && ("object" == typeof a || "function" == typeof a)) {
                            var s = a.then;
                            if ("function" == typeof s)
                                return void s.call(a, (function(e) {
                                    r(o, e)
                                }
                                ), n)
                        }
                        e[o] = a,
                        0 == --i && t(e)
                    } catch (e) {
                        n(e)
                    }
                }
                if (0 === e.length)
                    return t([]);
                for (var i = e.length, o = 0; o < e.length; o++)
                    r(o, e[o])
            }
            ))
        }
        ,
        t.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === t ? e : new t((function(t) {
                t(e)
            }
            ))
        }
        ,
        t.reject = function(e) {
            return new t((function(t, n) {
                n(e)
            }
            ))
        }
        ,
        t.race = function(e) {
            return new t((function(t, n) {
                for (var r = 0, i = e.length; r < i; r++)
                    e[r].then(t, n)
            }
            ))
        }
        ,
        t
    }
    )),
    n(s, [a], (function(e) {
        function t(e, t) {
            return "number" != typeof t && (t = 0),
            setTimeout(e, t)
        }
        function n(e, t) {
            return "number" != typeof t && (t = 1),
            setInterval(e, t)
        }
        function r(e, n) {
            var r, i;
            return i = function() {
                var i = arguments;
                clearTimeout(r),
                r = t((function() {
                    e.apply(this, i)
                }
                ), n)
            }
            ,
            i.stop = function() {
                clearTimeout(r)
            }
            ,
            i
        }
        var i;
        return {
            requestAnimationFrame: function(t, n) {
                return i ? void i.then(t) : void (i = new e((function(e) {
                    n || (n = document.body),
                    function(e, t) {
                        var n, r = window.requestAnimationFrame, i = ["ms", "moz", "webkit"];
                        for (n = 0; n < i.length && !r; n++)
                            r = window[i[n] + "RequestAnimationFrame"];
                        r || (r = function(e) {
                            window.setTimeout(e, 0)
                        }
                        ),
                        r(e, t)
                    }(e, n)
                }
                )).then(t))
            },
            setTimeout: t,
            setInterval: n,
            setEditorTimeout: function(e, n, r) {
                return t((function() {
                    e.removed || n()
                }
                ), r)
            },
            setEditorInterval: function(e, t, r) {
                var i;
                return i = n((function() {
                    e.removed ? clearInterval(i) : t()
                }
                ), r)
            },
            debounce: r,
            throttle: r,
            clearInterval: function(e) {
                return clearInterval(e)
            },
            clearTimeout: function(e) {
                return clearTimeout(e)
            }
        }
    }
    )),
    n(l, [], (function() {
        function e(e) {
            return "matchMedia"in window && matchMedia(e).matches
        }
        var t, n, r, i, o, a, s, l, c, u, d, f, h, p = navigator, m = p.userAgent;
        return t = window.opera && window.opera.buildNumber,
        c = /Android/.test(m),
        r = (r = !(n = /WebKit/.test(m)) && !t && /MSIE/gi.test(m) && /Explorer/gi.test(p.appName)) && /MSIE (\w+)\./.exec(m)[1],
        i = -1 != m.indexOf("Trident/") && (-1 != m.indexOf("rv:") || -1 != p.appName.indexOf("Netscape")) && 11,
        o = -1 != m.indexOf("Edge/") && !r && !i && 12,
        r = r || i || o,
        a = !n && !i && /Gecko/.test(m),
        s = -1 != m.indexOf("Mac"),
        l = /(iPad|iPhone)/.test(m),
        u = "FormData"in window && "FileReader"in window && "URL"in window && !!URL.createObjectURL,
        d = e("only screen and (max-device-width: 480px)") && (c || l),
        f = e("only screen and (min-width: 800px)") && (c || l),
        h = -1 != m.indexOf("Windows Phone"),
        o && (n = !1),
        {
            opera: t,
            webkit: n,
            ie: r,
            gecko: a,
            mac: s,
            iOS: l,
            android: c,
            contentEditable: !l || u || m.match(/AppleWebKit\/(\d*)/)[1] >= 534,
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            caretAfter: 8 != r,
            range: window.getSelection && "Range"in window,
            documentMode: r && !o ? document.documentMode || 7 : 10,
            fileApi: u,
            ceFalse: !1 === r || r > 8,
            canHaveCSP: !1 === r || r > 11,
            desktop: !d && !f,
            windowsPhone: h
        }
    }
    )),
    n(c, [s, l], (function(e, t) {
        function n(e, t, n, r) {
            e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n)
        }
        function r(e, t, n, r) {
            e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n)
        }
        function i(e, n) {
            function r() {
                return !1
            }
            function i() {
                return !0
            }
            var o, a, s = n || {};
            for (o in e)
                c[o] || (s[o] = e[o]);
            if (s.target || (s.target = s.srcElement || document),
            t.experimentalShadowDom && (s.target = function(e, t) {
                var n, r = t;
                return (n = e.path) && n.length > 0 && (r = n[0]),
                e.deepPath && (n = e.deepPath()) && n.length > 0 && (r = n[0]),
                r
            }(e, s.target)),
            e && l.test(e.type) && e.pageX === a && e.clientX !== a) {
                var u = s.target.ownerDocument || document
                  , d = u.documentElement
                  , f = u.body;
                s.pageX = e.clientX + (d && d.scrollLeft || f && f.scrollLeft || 0) - (d && d.clientLeft || f && f.clientLeft || 0),
                s.pageY = e.clientY + (d && d.scrollTop || f && f.scrollTop || 0) - (d && d.clientTop || f && f.clientTop || 0)
            }
            return s.preventDefault = function() {
                s.isDefaultPrevented = i,
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            }
            ,
            s.stopPropagation = function() {
                s.isPropagationStopped = i,
                e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
            }
            ,
            s.stopImmediatePropagation = function() {
                s.isImmediatePropagationStopped = i,
                s.stopPropagation()
            }
            ,
            s.isDefaultPrevented || (s.isDefaultPrevented = r,
            s.isPropagationStopped = r,
            s.isImmediatePropagationStopped = r),
            void 0 === s.metaKey && (s.metaKey = !1),
            s
        }
        function o(t, i, o) {
            function a() {
                o.domLoaded || (o.domLoaded = !0,
                i(l))
            }
            var s = t.document
              , l = {
                type: "ready"
            };
            return o.domLoaded ? void i(l) : (s.addEventListener ? "complete" === s.readyState ? a() : n(t, "DOMContentLoaded", a) : (n(s, "readystatechange", (function e() {
                ("complete" === s.readyState || "interactive" === s.readyState && s.body) && (r(s, "readystatechange", e),
                a())
            }
            )),
            s.documentElement.doScroll && t.self === t.top && function t() {
                try {
                    s.documentElement.doScroll("left")
                } catch (n) {
                    return void e.setTimeout(t)
                }
                a()
            }()),
            void n(t, "load", a))
        }
        function a() {
            function e(e, t) {
                var n, r, i, o, a = f[t];
                if (n = a && a[e.type])
                    for (r = 0,
                    i = n.length; r < i; r++)
                        if ((o = n[r]) && !1 === o.func.call(o.scope, e) && e.preventDefault(),
                        e.isImmediatePropagationStopped())
                            return
            }
            var t, a, l, c, u, d = this, f = {};
            a = s + (+new Date).toString(32),
            c = "onmouseenter"in document.documentElement,
            l = "onfocusin"in document.documentElement,
            u = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            },
            t = 1,
            d.domLoaded = !1,
            d.events = f,
            d.bind = function(r, s, h, p) {
                function m(t) {
                    e(i(t || E.event), g)
                }
                var g, v, y, b, C, x, w, E = window;
                if (r && 3 !== r.nodeType && 8 !== r.nodeType) {
                    for (r[a] ? g = r[a] : (g = t++,
                    r[a] = g,
                    f[g] = {}),
                    p = p || r,
                    y = (s = s.split(" ")).length; y--; )
                        x = m,
                        C = w = !1,
                        "DOMContentLoaded" === (b = s[y]) && (b = "ready"),
                        d.domLoaded && "ready" === b && "complete" == r.readyState ? h.call(p, i({
                            type: b
                        })) : (c || (C = u[b]) && (x = function(t) {
                            var n, r;
                            if (n = t.currentTarget,
                            (r = t.relatedTarget) && n.contains)
                                r = n.contains(r);
                            else
                                for (; r && r !== n; )
                                    r = r.parentNode;
                            r || ((t = i(t || E.event)).type = "mouseout" === t.type ? "mouseleave" : "mouseenter",
                            t.target = n,
                            e(t, g))
                        }
                        ),
                        l || "focusin" !== b && "focusout" !== b || (w = !0,
                        C = "focusin" === b ? "focus" : "blur",
                        x = function(t) {
                            (t = i(t || E.event)).type = "focus" === t.type ? "focusin" : "focusout",
                            e(t, g)
                        }
                        ),
                        (v = f[g][b]) ? "ready" === b && d.domLoaded ? h({
                            type: b
                        }) : v.push({
                            func: h,
                            scope: p
                        }) : (f[g][b] = v = [{
                            func: h,
                            scope: p
                        }],
                        v.fakeName = C,
                        v.capture = w,
                        v.nativeHandler = x,
                        "ready" === b ? o(r, x, d) : n(r, C || b, x, w)));
                    return r = v = 0,
                    h
                }
            }
            ,
            d.unbind = function(e, t, n) {
                var i, o, s, l, c, u;
                if (!e || 3 === e.nodeType || 8 === e.nodeType)
                    return d;
                if (i = e[a]) {
                    if (u = f[i],
                    t) {
                        for (s = (t = t.split(" ")).length; s--; )
                            if (o = u[c = t[s]]) {
                                if (n)
                                    for (l = o.length; l--; )
                                        if (o[l].func === n) {
                                            var h = o.nativeHandler
                                              , p = o.fakeName
                                              , m = o.capture;
                                            (o = o.slice(0, l).concat(o.slice(l + 1))).nativeHandler = h,
                                            o.fakeName = p,
                                            o.capture = m,
                                            u[c] = o
                                        }
                                n && 0 !== o.length || (delete u[c],
                                r(e, o.fakeName || c, o.nativeHandler, o.capture))
                            }
                    } else {
                        for (c in u)
                            r(e, (o = u[c]).fakeName || c, o.nativeHandler, o.capture);
                        u = {}
                    }
                    for (c in u)
                        return d;
                    delete f[i];
                    try {
                        delete e[a]
                    } catch (t) {
                        e[a] = null
                    }
                }
                return d
            }
            ,
            d.fire = function(t, n, r) {
                var o;
                if (!t || 3 === t.nodeType || 8 === t.nodeType)
                    return d;
                (r = i(null, r)).type = n,
                r.target = t;
                do {
                    (o = t[a]) && e(r, o),
                    t = t.parentNode || t.ownerDocument || t.defaultView || t.parentWindow
                } while (t && !r.isPropagationStopped());
                return d
            }
            ,
            d.clean = function(e) {
                var t, n, r = d.unbind;
                if (!e || 3 === e.nodeType || 8 === e.nodeType)
                    return d;
                if (e[a] && r(e),
                e.getElementsByTagName || (e = e.document),
                e && e.getElementsByTagName)
                    for (r(e),
                    t = (n = e.getElementsByTagName("*")).length; t--; )
                        (e = n[t])[a] && r(e);
                return d
            }
            ,
            d.destroy = function() {
                f = {}
            }
            ,
            d.cancel = function(e) {
                return e && (e.preventDefault(),
                e.stopImmediatePropagation()),
                !1
            }
        }
        var s = "mce-data-"
          , l = /^(?:mouse|contextmenu)|click/
          , c = {
            keyLocation: 1,
            layerX: 1,
            layerY: 1,
            returnValue: 1,
            webkitMovementX: 1,
            webkitMovementY: 1,
            keyIdentifier: 1
        };
        return a.Event = new a,
        a.Event.bind(window, "ready", (function() {}
        )),
        a
    }
    )),
    n(u, [], (function() {
        function e(e, t, n, r) {
            var i, o, a, s, l, c, d, h, p, m;
            if ((t ? t.ownerDocument || t : z) !== D && B(t),
            n = n || [],
            !e || "string" != typeof e)
                return n;
            if (1 !== (s = (t = t || D).nodeType) && 9 !== s)
                return [];
            if (M && !r) {
                if (i = ve.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (!(o = t.getElementById(a)) || !o.parentNode)
                                return n;
                            if (o.id === a)
                                return n.push(o),
                                n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && I(t, o) && o.id === a)
                            return n.push(o),
                            n
                    } else {
                        if (i[2])
                            return Z.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((a = i[3]) && x.getElementsByClassName)
                            return Z.apply(n, t.getElementsByClassName(a)),
                            n
                    }
                if (x.qsa && (!P || !P.test(e))) {
                    if (h = d = F,
                    p = t,
                    m = 9 === s && e,
                    1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = _(e),
                        (d = t.getAttribute("id")) ? h = d.replace(be, "\\$&") : t.setAttribute("id", h),
                        h = "[id='" + h + "'] ",
                        l = c.length; l--; )
                            c[l] = h + f(c[l]);
                        p = ye.test(e) && u(t.parentNode) || t,
                        m = c.join(",")
                    }
                    if (m)
                        try {
                            return Z.apply(n, p.querySelectorAll(m)),
                            n
                        } catch (e) {} finally {
                            d || t.removeAttribute("id")
                        }
                }
            }
            return k(e.replace(se, "$1"), t, n, r)
        }
        function n() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > w.cacheLength && delete t[e.shift()],
                t[n + " "] = r
            }
        }
        function r(e) {
            return e[F] = !0,
            e
        }
        function i(e) {
            var t = D.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--; )
                w.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return r((function(t) {
                return t = +t,
                r((function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                }
                ))
            }
            ))
        }
        function u(e) {
            return e && typeof e.getElementsByTagName !== Y && e
        }
        function d() {}
        function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function h(e, t, n) {
            var r = t.dir
              , i = n && "parentNode" === r
              , o = W++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || i)
                        return e(t, n, o)
            }
            : function(t, n, a) {
                var s, l, c = [U, o];
                if (a) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || i) && e(t, n, a))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i) {
                            if ((s = (l = t[F] || (t[F] = {}))[r]) && s[0] === U && s[1] === o)
                                return c[2] = s[2];
                            if (l[r] = c,
                            c[2] = e(t, n, a))
                                return !0
                        }
            }
        }
        function p(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function m(t, n, r) {
            for (var i = 0, o = n.length; i < o; i++)
                e(t, n[i], r);
            return r
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                c && t.push(s)));
            return a
        }
        function v(e, t, n, i, o, a) {
            return i && !i[F] && (i = v(i)),
            o && !o[F] && (o = v(o, a)),
            r((function(r, a, s, l) {
                var c, u, d, f = [], h = [], p = a.length, v = r || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? v : g(v, f, e, s, l), b = n ? o || (r ? e : p || i) ? [] : a : y;
                if (n && n(y, b, s, l),
                i)
                    for (c = g(b, h),
                    i(c, [], s, l),
                    u = c.length; u--; )
                        (d = c[u]) && (b[h[u]] = !(y[h[u]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [],
                            u = b.length; u--; )
                                (d = b[u]) && c.push(y[u] = d);
                            o(null, b = [], c, l)
                        }
                        for (u = b.length; u--; )
                            (d = b[u]) && (c = o ? te.call(r, d) : f[u]) > -1 && (r[c] = !(a[c] = d))
                    }
                } else
                    b = g(b === a ? b.splice(p, b.length) : b),
                    o ? o(null, a, b, l) : Z.apply(a, b)
            }
            ))
        }
        function y(e) {
            for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = h((function(e) {
                return e === t
            }
            ), a, !0), c = h((function(e) {
                return te.call(t, e) > -1
            }
            ), a, !0), u = [function(e, n, r) {
                return !o && (r || n !== T) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
            }
            ]; s < i; s++)
                if (n = w.relative[e[s].type])
                    u = [h(p(u), n)];
                else {
                    if ((n = w.filter[e[s].type].apply(null, e[s].matches))[F]) {
                        for (r = ++s; r < i && !w.relative[e[r].type]; r++)
                            ;
                        return v(s > 1 && p(u), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, s < r && y(e.slice(s, r)), r < i && y(e = e.slice(r)), r < i && f(e))
                    }
                    u.push(n)
                }
            return p(u)
        }
        function b(t, n) {
            var i = n.length > 0
              , o = t.length > 0
              , a = function(r, a, s, l, c) {
                var u, d, f, h = 0, p = "0", m = r && [], v = [], y = T, b = r || o && w.find.TAG("*", c), C = U += null == y ? 1 : Math.random() || .1, x = b.length;
                for (c && (T = a !== D && a); p !== x && null != (u = b[p]); p++) {
                    if (o && u) {
                        for (d = 0; f = t[d++]; )
                            if (f(u, a, s)) {
                                l.push(u);
                                break
                            }
                        c && (U = C)
                    }
                    i && ((u = !f && u) && h--,
                    r && m.push(u))
                }
                if (h += p,
                i && p !== h) {
                    for (d = 0; f = n[d++]; )
                        f(m, v, a, s);
                    if (r) {
                        if (h > 0)
                            for (; p--; )
                                m[p] || v[p] || (v[p] = J.call(l));
                        v = g(v)
                    }
                    Z.apply(l, v),
                    c && !r && v.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                }
                return c && (U = C,
                T = y),
                m
            };
            return i ? r(a) : a
        }
        var C, x, w, E, N, _, S, k, T, R, A, B, D, L, M, P, O, H, I, F = "sizzle" + -new Date, z = window.document, U = 0, W = 0, V = n(), $ = n(), q = n(), j = function(e, t) {
            return e === t && (A = !0),
            0
        }, Y = typeof t, X = 1 << 31, K = {}.hasOwnProperty, G = [], J = G.pop, Q = G.push, Z = G.push, ee = G.slice, te = G.indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", re = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + re + "*\\]", ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", se = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$","g"), le = new RegExp("^" + re + "*," + re + "*"), ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"), ue = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]","g"), de = new RegExp(ae), fe = new RegExp("^" + ie + "$"), he = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie + "|[*])"),
            ATTR: new RegExp("^" + oe),
            PSEUDO: new RegExp("^" + ae),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)","i"),
            bool: new RegExp("^(?:" + ne + ")$","i"),
            needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)","i")
        }, pe = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, Ce = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)","ig"), xe = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        };
        try {
            Z.apply(G = ee.call(z.childNodes), z.childNodes),
            G[z.childNodes.length].nodeType
        } catch (e) {
            Z = {
                apply: G.length ? function(e, t) {
                    Q.apply(e, ee.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        for (C in x = e.support = {},
        N = e.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        B = e.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : z, r = n.defaultView;
            return n !== D && 9 === n.nodeType && n.documentElement ? (D = n,
            L = n.documentElement,
            M = !N(n),
            r && r !== function(e) {
                try {
                    return e.top
                } catch (e) {}
                return null
            }(r) && (r.addEventListener ? r.addEventListener("unload", (function() {
                B()
            }
            ), !1) : r.attachEvent && r.attachEvent("onunload", (function() {
                B()
            }
            ))),
            x.attributes = i((function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }
            )),
            x.getElementsByTagName = i((function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }
            )),
            x.getElementsByClassName = ge.test(n.getElementsByClassName),
            x.getById = i((function(e) {
                return L.appendChild(e).id = F,
                !n.getElementsByName || !n.getElementsByName(F).length
            }
            )),
            x.getById ? (w.find.ID = function(e, t) {
                if (typeof t.getElementById !== Y && M) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            w.filter.ID = function(e) {
                var t = e.replace(Ce, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete w.find.ID,
            w.filter.ID = function(e) {
                var t = e.replace(Ce, xe);
                return function(e) {
                    var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            w.find.TAG = x.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== Y)
                    return t.getElementsByTagName(e)
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            w.find.CLASS = x.getElementsByClassName && function(e, t) {
                if (M)
                    return t.getElementsByClassName(e)
            }
            ,
            O = [],
            P = [],
            (x.qsa = ge.test(n.querySelectorAll)) && (i((function(e) {
                e.innerHTML = "<select msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + re + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || P.push("\\[" + re + "*(?:value|" + ne + ")"),
                e.querySelectorAll(":checked").length || P.push(":checked")
            }
            )),
            i((function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && P.push("name" + re + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                P.push(",.*:")
            }
            ))),
            (x.matchesSelector = ge.test(H = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i((function(e) {
                x.disconnectedMatch = H.call(e, "div"),
                H.call(e, "[s!='']:x"),
                O.push("!=", ae)
            }
            )),
            P = P.length && new RegExp(P.join("|")),
            O = O.length && new RegExp(O.join("|")),
            t = ge.test(L.compareDocumentPosition),
            I = t || ge.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            j = t ? function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !x.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === z && I(z, e) ? -1 : t === n || t.ownerDocument === z && I(z, t) ? 1 : R ? te.call(R, e) - te.call(R, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var r, i = 0, o = e.parentNode, s = t.parentNode, l = [e], c = [t];
                if (!o || !s)
                    return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : R ? te.call(R, e) - te.call(R, t) : 0;
                if (o === s)
                    return a(e, t);
                for (r = e; r = r.parentNode; )
                    l.unshift(r);
                for (r = t; r = r.parentNode; )
                    c.unshift(r);
                for (; l[i] === c[i]; )
                    i++;
                return i ? a(l[i], c[i]) : l[i] === z ? -1 : c[i] === z ? 1 : 0
            }
            ,
            n) : D
        }
        ,
        e.matches = function(t, n) {
            return e(t, null, null, n)
        }
        ,
        e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== D && B(t),
            n = n.replace(ue, "='$1']"),
            x.matchesSelector && M && (!O || !O.test(n)) && (!P || !P.test(n)))
                try {
                    var r = H.call(t, n);
                    if (r || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return r
                } catch (e) {}
            return e(n, D, null, [t]).length > 0
        }
        ,
        e.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && B(e),
            I(e, t)
        }
        ,
        e.attr = function(e, n) {
            (e.ownerDocument || e) !== D && B(e);
            var r = w.attrHandle[n.toLowerCase()]
              , i = r && K.call(w.attrHandle, n.toLowerCase()) ? r(e, n, !M) : t;
            return i !== t ? i : x.attributes || !M ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null
        }
        ,
        e.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        e.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (A = !x.detectDuplicates,
            R = !x.sortStable && e.slice(0),
            e.sort(j),
            A) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return R = null,
            e
        }
        ,
        E = e.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += E(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += E(t);
            return n
        }
        ,
        w = e.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Ce, xe),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(Ce, xe),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                    t
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = _(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Ce, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = V[e + " "];
                    return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && V(e, (function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
                    }
                    ))
                },
                ATTR: function(t, n, r) {
                    return function(i) {
                        var o = e.attr(i, t);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var c, u, d, f, h, p, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (d = t; d = d[m]; )
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? g.firstChild : g.lastChild],
                            a && y) {
                                for (h = (c = (u = g[F] || (g[F] = {}))[e] || [])[0] === U && c[1],
                                f = c[0] === U && c[2],
                                d = h && g.childNodes[h]; d = ++h && d && d[m] || (f = h = 0) || p.pop(); )
                                    if (1 === d.nodeType && ++f && d === t) {
                                        u[e] = [U, h, f];
                                        break
                                    }
                            } else if (y && (c = (t[F] || (t[F] = {}))[e]) && c[0] === U)
                                f = c[1];
                            else
                                for (; (d = ++h && d && d[m] || (f = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[F] || (d[F] = {}))[e] = [U, f]),
                                d !== t)); )
                                    ;
                            return (f -= i) === r || f % r == 0 && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var i, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[F] ? o(n) : o.length > 1 ? (i = [t, t, "", n],
                    w.setFilters.hasOwnProperty(t.toLowerCase()) ? r((function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; )
                            e[r = te.call(e, i[a])] = !(t[r] = i[a])
                    }
                    )) : function(e) {
                        return o(e, 0, i)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: r((function(e) {
                    var t = []
                      , n = []
                      , i = S(e.replace(se, "$1"));
                    return i[F] ? r((function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }
                    )) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        !n.pop()
                    }
                }
                )),
                has: r((function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }
                )),
                contains: r((function(e) {
                    return e = e.replace(Ce, xe),
                    function(t) {
                        return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                    }
                }
                )),
                lang: r((function(t) {
                    return fe.test(t || "") || e.error("unsupported lang: " + t),
                    t = t.replace(Ce, xe).toLowerCase(),
                    function(e) {
                        var n;
                        do {
                            if (n = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }
                )),
                target: function(e) {
                    var t = window.location && window.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === L
                },
                focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return pe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c((function() {
                    return [0]
                }
                )),
                last: c((function(e, t) {
                    return [t - 1]
                }
                )),
                eq: c((function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }
                )),
                even: c((function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                odd: c((function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                lt: c((function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }
                )),
                gt: c((function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                }
                ))
            }
        },
        w.pseudos.nth = w.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[C] = s(C);
        for (C in {
            submit: !0,
            reset: !0
        })
            w.pseudos[C] = l(C);
        return d.prototype = w.filters = w.pseudos,
        w.setFilters = new d,
        _ = e.tokenize = function(t, n) {
            var r, i, o, a, s, l, c, u = $[t + " "];
            if (u)
                return n ? 0 : u.slice(0);
            for (s = t,
            l = [],
            c = w.preFilter; s; ) {
                for (a in r && !(i = le.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                l.push(o = [])),
                r = !1,
                (i = ce.exec(s)) && (r = i.shift(),
                o.push({
                    value: r,
                    type: i[0].replace(se, " ")
                }),
                s = s.slice(r.length)),
                w.filter)
                    !(i = he[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(),
                    o.push({
                        value: r,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(r.length));
                if (!r)
                    break
            }
            return n ? s.length : s ? e.error(t) : $(t, l).slice(0)
        }
        ,
        S = e.compile = function(e, t) {
            var n, r = [], i = [], o = q[e + " "];
            if (!o) {
                for (t || (t = _(e)),
                n = t.length; n--; )
                    (o = y(t[n]))[F] ? r.push(o) : i.push(o);
                (o = q(e, b(i, r))).selector = e
            }
            return o
        }
        ,
        k = e.select = function(e, t, n, r) {
            var i, o, a, s, l, c = "function" == typeof e && e, d = !r && _(e = c.selector || e);
            if (n = n || [],
            1 === d.length) {
                if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && M && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(a.matches[0].replace(Ce, xe), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                !w.relative[s = a.type]); )
                    if ((l = w.find[s]) && (r = l(a.matches[0].replace(Ce, xe), ye.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && f(o)))
                            return Z.apply(n, r),
                            n;
                        break
                    }
            }
            return (c || S(e, d))(r, t, !M, n, ye.test(e) && u(t.parentNode) || t),
            n
        }
        ,
        x.sortStable = F.split("").sort(j).join("") === F,
        x.detectDuplicates = !!A,
        B(),
        x.sortDetached = i((function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"))
        }
        )),
        i((function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }
        )) || o("type|href|height|width", (function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }
        )),
        x.attributes && i((function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }
        )) || o("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }
        )),
        i((function(e) {
            return null == e.getAttribute("disabled")
        }
        )) || o(ne, (function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        )),
        e
    }
    )),
    n(d, [], (function() {
        function e(e, n, r) {
            var i, o;
            if (!e)
                return 0;
            if (r = r || e,
            e.length !== t) {
                for (i = 0,
                o = e.length; i < o; i++)
                    if (!1 === n.call(r, e[i], i, e))
                        return 0
            } else
                for (i in e)
                    if (e.hasOwnProperty(i) && !1 === n.call(r, e[i], i, e))
                        return 0;
            return 1
        }
        function n(e, t, n) {
            var r, i;
            for (r = 0,
            i = e.length; r < i; r++)
                if (t.call(n, e[r], r, e))
                    return r;
            return -1
        }
        var r = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        ;
        return {
            isArray: r,
            toArray: function(e) {
                var t, n, i = e;
                if (!r(e))
                    for (i = [],
                    t = 0,
                    n = e.length; t < n; t++)
                        i[t] = e[t];
                return i
            },
            each: e,
            map: function(t, n) {
                var r = [];
                return e(t, (function(e, i) {
                    r.push(n(e, i, t))
                }
                )),
                r
            },
            filter: function(t, n) {
                var r = [];
                return e(t, (function(e, i) {
                    n && !n(e, i, t) || r.push(e)
                }
                )),
                r
            },
            indexOf: function(e, t) {
                var n, r;
                if (e)
                    for (n = 0,
                    r = e.length; n < r; n++)
                        if (e[n] === t)
                            return n;
                return -1
            },
            reduce: function(e, t, n, r) {
                var i = 0;
                for (arguments.length < 3 && (n = e[0]); i < e.length; i++)
                    n = t.call(r, n, e[i], i);
                return n
            },
            findIndex: n,
            find: function(e, r, i) {
                var o = n(e, r, i);
                return -1 !== o ? e[o] : t
            },
            last: function(e) {
                return e[e.length - 1]
            }
        }
    }
    )),
    n(f, [l, d], (function(e, n) {
        function r(e) {
            return null === e || e === t ? "" : ("" + e).replace(o, "")
        }
        function i(e, r) {
            return r ? !("array" != r || !n.isArray(e)) || typeof e == r : e !== t
        }
        var o = /^\s*|\s*$/g;
        return {
            trim: r,
            isArray: n.isArray,
            is: i,
            toArray: n.toArray,
            makeMap: function(e, t, n) {
                var r;
                for (t = t || ",",
                "string" == typeof (e = e || []) && (e = e.split(t)),
                n = n || {},
                r = e.length; r--; )
                    n[e[r]] = {};
                return n
            },
            each: n.each,
            map: n.map,
            grep: n.filter,
            inArray: n.indexOf,
            hasOwn: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            extend: function(e, n) {
                var r, i, o, a, s = arguments;
                for (r = 1,
                i = s.length; r < i; r++)
                    for (o in n = s[r])
                        n.hasOwnProperty(o) && ((a = n[o]) !== t && (e[o] = a));
                return e
            },
            create: function(e, t, n) {
                var r, i, o, a, s, l = this, c = 0;
                if (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e),
                o = e[3].match(/(^|\.)(\w+)$/i)[2],
                !(i = l.createNS(e[3].replace(/\.\w+$/, ""), n))[o]) {
                    if ("static" == e[2])
                        return i[o] = t,
                        void (this.onCreate && this.onCreate(e[2], e[3], i[o]));
                    t[o] || (t[o] = function() {}
                    ,
                    c = 1),
                    i[o] = t[o],
                    l.extend(i[o].prototype, t),
                    e[5] && (r = l.resolve(e[5]).prototype,
                    a = e[5].match(/\.(\w+)$/i)[1],
                    s = i[o],
                    i[o] = c ? function() {
                        return r[a].apply(this, arguments)
                    }
                    : function() {
                        return this.parent = r[a],
                        s.apply(this, arguments)
                    }
                    ,
                    i[o].prototype[o] = i[o],
                    l.each(r, (function(e, t) {
                        i[o].prototype[t] = r[t]
                    }
                    )),
                    l.each(t, (function(e, t) {
                        r[t] ? i[o].prototype[t] = function() {
                            return this.parent = r[t],
                            e.apply(this, arguments)
                        }
                        : t != o && (i[o].prototype[t] = e)
                    }
                    ))),
                    l.each(t.static, (function(e, t) {
                        i[o][t] = e
                    }
                    ))
                }
            },
            walk: function e(t, r, i, o) {
                o = o || this,
                t && (i && (t = t[i]),
                n.each(t, (function(t, n) {
                    return !1 !== r.call(o, t, n, i) && void e(t, r, i, o)
                }
                )))
            },
            createNS: function(e, t) {
                var n, r;
                for (t = t || window,
                e = e.split("."),
                n = 0; n < e.length; n++)
                    t[r = e[n]] || (t[r] = {}),
                    t = t[r];
                return t
            },
            resolve: function(e, t) {
                var n, r;
                for (t = t || window,
                n = 0,
                r = (e = e.split(".")).length; n < r && (t = t[e[n]]); n++)
                    ;
                return t
            },
            explode: function(e, t) {
                return !e || i(e, "array") ? e : n.map(e.split(t || ","), r)
            },
            _addCacheSuffix: function(t) {
                var n = e.cacheSuffix;
                return n && (t += (-1 === t.indexOf("?") ? "?" : "&") + n),
                t
            }
        }
    }
    )),
    n(h, [c, u, f, l], (function(e, n, r, i) {
        function o(e) {
            return void 0 !== e
        }
        function a(e) {
            return "string" == typeof e
        }
        function s(e, t) {
            var n, r, i;
            for (i = (t = t || x).createElement("div"),
            n = t.createDocumentFragment(),
            i.innerHTML = e; r = i.firstChild; )
                n.appendChild(r);
            return n
        }
        function l(e, t, n, r) {
            var i;
            if (a(t))
                t = s(t, m(e[0]));
            else if (t.length && !t.nodeType) {
                if (t = d.makeArray(t),
                r)
                    for (i = t.length - 1; i >= 0; i--)
                        l(e, t[i], n, r);
                else
                    for (i = 0; i < t.length; i++)
                        l(e, t[i], n, r);
                return e
            }
            if (t.nodeType)
                for (i = e.length; i--; )
                    n.call(e[i], t);
            return e
        }
        function c(e, t) {
            return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
        }
        function u(e, t, n) {
            var r, i;
            return t = d(t)[0],
            e.each((function() {
                var e = this;
                n && r == e.parentNode || (r = e.parentNode,
                i = t.cloneNode(!1),
                e.parentNode.insertBefore(i, e)),
                i.appendChild(e)
            }
            )),
            e
        }
        function d(e, t) {
            return new d.fn.init(e,t)
        }
        function f(e) {
            return null === e || e === C ? "" : ("" + e).replace(L, "")
        }
        function h(e, t) {
            var n, r, i, o;
            if (e)
                if (undefined === (n = e.length)) {
                    for (r in e)
                        if (e.hasOwnProperty(r) && (o = e[r],
                        !1 === t.call(o, r, o)))
                            break
                } else
                    for (i = 0; i < n && (o = e[i],
                    !1 !== t.call(o, i, o)); i++)
                        ;
            return e
        }
        function p(e, t) {
            var n = [];
            return h(e, (function(e, r) {
                t(r, e) && n.push(r)
            }
            )),
            n
        }
        function m(e) {
            return e ? 9 == e.nodeType ? e : e.ownerDocument : x
        }
        function g(e, n, r) {
            var i = []
              , o = e[n];
            for ("string" != typeof r && r instanceof d && (r = r[0]); o && 9 !== o.nodeType; ) {
                if (r !== t) {
                    if (o === r)
                        break;
                    if ("string" == typeof r && d(o).is(r))
                        break
                }
                1 === o.nodeType && i.push(o),
                o = o[n]
            }
            return i
        }
        function v(e, n, r, i) {
            var o = [];
            for (i instanceof d && (i = i[0]); e; e = e[n])
                if (!r || e.nodeType === r) {
                    if (i !== t) {
                        if (e === i)
                            break;
                        if ("string" == typeof i && d(e).is(i))
                            break
                    }
                    o.push(e)
                }
            return o
        }
        function y(e, t, n) {
            for (e = e[t]; e; e = e[t])
                if (e.nodeType == n)
                    return e;
            return null
        }
        function b(e, t, n) {
            h(n, (function(n, r) {
                e[n] = e[n] || {},
                e[n][t] = r
            }
            ))
        }
        var C, x = document, w = Array.prototype.push, E = Array.prototype.slice, N = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, _ = e.Event, S = r.makeMap("children,contents,next,prev"), k = r.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " "), T = r.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected", " "), R = {
            for: "htmlFor",
            class: "className",
            readonly: "readOnly"
        }, A = {
            float: "cssFloat"
        }, B = {}, D = {}, L = /^\s*|\s*$/g;
        return d.fn = d.prototype = {
            constructor: d,
            selector: "",
            context: null,
            length: 0,
            init: function(e, t) {
                var n, r, i = this;
                if (!e)
                    return i;
                if (e.nodeType)
                    return i.context = i[0] = e,
                    i.length = 1,
                    i;
                if (t && t.nodeType)
                    i.context = t;
                else {
                    if (t)
                        return d(e).attr(t);
                    i.context = t = document
                }
                if (a(e)) {
                    if (i.selector = e,
                    !(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e)))
                        return d(t).find(e);
                    if (n[1])
                        for (r = s(e, m(t)).firstChild; r; )
                            w.call(i, r),
                            r = r.nextSibling;
                    else {
                        if (!(r = m(t).getElementById(n[2])))
                            return i;
                        if (r.id !== n[2])
                            return i.find(e);
                        i.length = 1,
                        i[0] = r
                    }
                } else
                    this.add(e, !1);
                return i
            },
            toArray: function() {
                return r.toArray(this)
            },
            add: function(e, t) {
                var n, r, i = this;
                if (a(e))
                    return i.add(d(e));
                if (!1 !== t)
                    for (n = d.unique(i.toArray().concat(d.makeArray(e))),
                    i.length = n.length,
                    r = 0; r < n.length; r++)
                        i[r] = n[r];
                else
                    w.apply(i, d.makeArray(e));
                return i
            },
            attr: function(e, t) {
                var n, r = this;
                if ("object" == typeof e)
                    h(e, (function(e, t) {
                        r.attr(e, t)
                    }
                    ));
                else {
                    if (!o(t)) {
                        if (r[0] && 1 === r[0].nodeType) {
                            if ((n = B[e]) && n.get)
                                return n.get(r[0], e);
                            if (T[e])
                                return r.prop(e) ? e : C;
                            null === (t = r[0].getAttribute(e, 2)) && (t = C)
                        }
                        return t
                    }
                    this.each((function() {
                        var n;
                        if (1 === this.nodeType) {
                            if ((n = B[e]) && n.set)
                                return void n.set(this, t);
                            null === t ? this.removeAttribute(e, 2) : this.setAttribute(e, t, 2)
                        }
                    }
                    ))
                }
                return r
            },
            removeAttr: function(e) {
                return this.attr(e, null)
            },
            prop: function(e, t) {
                var n = this;
                if ("object" == typeof (e = R[e] || e))
                    h(e, (function(e, t) {
                        n.prop(e, t)
                    }
                    ));
                else {
                    if (!o(t))
                        return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
                    this.each((function() {
                        1 == this.nodeType && (this[e] = t)
                    }
                    ))
                }
                return n
            },
            css: function(e, t) {
                function n(e) {
                    return e.replace(/-(\D)/g, (function(e, t) {
                        return t.toUpperCase()
                    }
                    ))
                }
                function r(e) {
                    return e.replace(/[A-Z]/g, (function(e) {
                        return "-" + e
                    }
                    ))
                }
                var i, a, s = this;
                if ("object" == typeof e)
                    h(e, (function(e, t) {
                        s.css(e, t)
                    }
                    ));
                else if (o(t))
                    e = n(e),
                    "number" != typeof t || k[e] || (t += "px"),
                    s.each((function() {
                        var n = this.style;
                        if ((a = D[e]) && a.set)
                            a.set(this, t);
                        else {
                            try {
                                this.style[A[e] || e] = t
                            } catch (e) {}
                            null !== t && "" !== t || (n.removeProperty ? n.removeProperty(r(e)) : n.removeAttribute(e))
                        }
                    }
                    ));
                else {
                    if (i = s[0],
                    (a = D[e]) && a.get)
                        return a.get(i);
                    if (i.ownerDocument.defaultView)
                        try {
                            return i.ownerDocument.defaultView.getComputedStyle(i, null).getPropertyValue(r(e))
                        } catch (e) {
                            return C
                        }
                    else if (i.currentStyle)
                        return i.currentStyle[n(e)]
                }
                return s
            },
            remove: function() {
                for (var e, t = this.length; t--; )
                    e = this[t],
                    _.clean(e),
                    e.parentNode && e.parentNode.removeChild(e);
                return this
            },
            empty: function() {
                for (var e, t = this.length; t--; )
                    for (e = this[t]; e.firstChild; )
                        e.removeChild(e.firstChild);
                return this
            },
            html: function(e) {
                var t, n = this;
                if (o(e)) {
                    t = n.length;
                    try {
                        for (; t--; )
                            n[t].innerHTML = e
                    } catch (r) {
                        d(n[t]).empty().append(e)
                    }
                    return n
                }
                return n[0] ? n[0].innerHTML : ""
            },
            text: function(e) {
                var t, n = this;
                if (o(e)) {
                    for (t = n.length; t--; )
                        "innerText"in n[t] ? n[t].innerText = e : n[0].textContent = e;
                    return n
                }
                return n[0] ? n[0].innerText || n[0].textContent : ""
            },
            append: function() {
                return l(this, arguments, (function(e) {
                    (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.appendChild(e)
                }
                ))
            },
            prepend: function() {
                return l(this, arguments, (function(e) {
                    (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.insertBefore(e, this.firstChild)
                }
                ), !0)
            },
            before: function() {
                var e = this;
                return e[0] && e[0].parentNode ? l(e, arguments, (function(e) {
                    this.parentNode.insertBefore(e, this)
                }
                )) : e
            },
            after: function() {
                var e = this;
                return e[0] && e[0].parentNode ? l(e, arguments, (function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                }
                ), !0) : e
            },
            appendTo: function(e) {
                return d(e).append(this),
                this
            },
            prependTo: function(e) {
                return d(e).prepend(this),
                this
            },
            replaceWith: function(e) {
                return this.before(e).remove()
            },
            wrap: function(e) {
                return u(this, e)
            },
            wrapAll: function(e) {
                return u(this, e, !0)
            },
            wrapInner: function(e) {
                return this.each((function() {
                    d(this).contents().wrapAll(e)
                }
                )),
                this
            },
            unwrap: function() {
                return this.parent().each((function() {
                    d(this).replaceWith(this.childNodes)
                }
                ))
            },
            clone: function() {
                var e = [];
                return this.each((function() {
                    e.push(this.cloneNode(!0))
                }
                )),
                d(e)
            },
            addClass: function(e) {
                return this.toggleClass(e, !0)
            },
            removeClass: function(e) {
                return this.toggleClass(e, !1)
            },
            toggleClass: function(e, t) {
                var n = this;
                return "string" != typeof e || (-1 !== e.indexOf(" ") ? h(e.split(" "), (function() {
                    n.toggleClass(this, t)
                }
                )) : n.each((function(n, r) {
                    var i, o;
                    (o = c(r, e)) !== t && (i = r.className,
                    o ? r.className = f((" " + i + " ").replace(" " + e + " ", " ")) : r.className += i ? " " + e : e)
                }
                ))),
                n
            },
            hasClass: function(e) {
                return c(this[0], e)
            },
            each: function(e) {
                return h(this, e)
            },
            on: function(e, t) {
                return this.each((function() {
                    _.bind(this, e, t)
                }
                ))
            },
            off: function(e, t) {
                return this.each((function() {
                    _.unbind(this, e, t)
                }
                ))
            },
            trigger: function(e) {
                return this.each((function() {
                    "object" == typeof e ? _.fire(this, e.type, e) : _.fire(this, e)
                }
                ))
            },
            show: function() {
                return this.css("display", "")
            },
            hide: function() {
                return this.css("display", "none")
            },
            slice: function() {
                return new d(E.apply(this, arguments))
            },
            eq: function(e) {
                return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            find: function(e) {
                var t, n, r = [];
                for (t = 0,
                n = this.length; t < n; t++)
                    d.find(e, this[t], r);
                return d(r)
            },
            filter: function(e) {
                return d("function" == typeof e ? p(this.toArray(), (function(t, n) {
                    return e(n, t)
                }
                )) : d.filter(e, this.toArray()))
            },
            closest: function(e) {
                var t = [];
                return e instanceof d && (e = e[0]),
                this.each((function(n, r) {
                    for (; r; ) {
                        if ("string" == typeof e && d(r).is(e)) {
                            t.push(r);
                            break
                        }
                        if (r == e) {
                            t.push(r);
                            break
                        }
                        r = r.parentNode
                    }
                }
                )),
                d(t)
            },
            offset: function(e) {
                var t, n, r, i, o = 0, a = 0;
                return e ? this.css(e) : ((t = this[0]) && (r = (n = t.ownerDocument).documentElement,
                t.getBoundingClientRect && (o = (i = t.getBoundingClientRect()).left + (r.scrollLeft || n.body.scrollLeft) - r.clientLeft,
                a = i.top + (r.scrollTop || n.body.scrollTop) - r.clientTop)),
                {
                    left: o,
                    top: a
                })
            },
            push: w,
            sort: [].sort,
            splice: [].splice
        },
        r.extend(d, {
            extend: r.extend,
            makeArray: function(e) {
                return function(e) {
                    return e && e == e.window
                }(e) || e.nodeType ? [e] : r.toArray(e)
            },
            inArray: function(e, t) {
                var n;
                if (t.indexOf)
                    return t.indexOf(e);
                for (n = t.length; n--; )
                    if (t[n] === e)
                        return n;
                return -1
            },
            isArray: r.isArray,
            each: h,
            trim: f,
            grep: p,
            find: n,
            expr: n.selectors,
            unique: n.uniqueSort,
            text: n.getText,
            contains: n.contains,
            filter: function(e, t, n) {
                var r = t.length;
                for (n && (e = ":not(" + e + ")"); r--; )
                    1 != t[r].nodeType && t.splice(r, 1);
                return 1 === t.length ? d.find.matchesSelector(t[0], e) ? [t[0]] : [] : d.find.matches(e, t)
            }
        }),
        h({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return g(e, "parentNode")
            },
            next: function(e) {
                return y(e, "nextSibling", 1)
            },
            prev: function(e) {
                return y(e, "previousSibling", 1)
            },
            children: function(e) {
                return v(e.firstChild, "nextSibling", 1)
            },
            contents: function(e) {
                return r.toArray(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes)
            }
        }, (function(e, t) {
            d.fn[e] = function(n) {
                var r = [];
                return this.each((function() {
                    var e = t.call(r, this, n, r);
                    e && (d.isArray(e) ? r.push.apply(r, e) : r.push(e))
                }
                )),
                this.length > 1 && (S[e] || (r = d.unique(r)),
                0 === e.indexOf("parents") && (r = r.reverse())),
                r = d(r),
                n ? r.filter(n) : r
            }
        }
        )),
        h({
            parentsUntil: function(e, t) {
                return g(e, "parentNode", t)
            },
            nextUntil: function(e, t) {
                return v(e, "nextSibling", 1, t).slice(1)
            },
            prevUntil: function(e, t) {
                return v(e, "previousSibling", 1, t).slice(1)
            }
        }, (function(e, t) {
            d.fn[e] = function(n, r) {
                var i = [];
                return this.each((function() {
                    var e = t.call(i, this, n, i);
                    e && (d.isArray(e) ? i.push.apply(i, e) : i.push(e))
                }
                )),
                this.length > 1 && (i = d.unique(i),
                0 !== e.indexOf("parents") && "prevUntil" !== e || (i = i.reverse())),
                i = d(i),
                r ? i.filter(r) : i
            }
        }
        )),
        d.fn.is = function(e) {
            return !!e && this.filter(e).length > 0
        }
        ,
        d.fn.init.prototype = d.fn,
        d.overrideDefaults = function(e) {
            function t(r, i) {
                return n = n || e(),
                0 === arguments.length && (r = n.element),
                i || (i = n.context),
                new t.fn.init(r,i)
            }
            var n;
            return d.extend(t, this),
            t
        }
        ,
        i.ie && i.ie < 8 && (b(B, "get", {
            maxlength: function(e) {
                var t = e.maxLength;
                return 2147483647 === t ? C : t
            },
            size: function(e) {
                var t = e.size;
                return 20 === t ? C : t
            },
            class: function(e) {
                return e.className
            },
            style: function(e) {
                var t = e.style.cssText;
                return 0 === t.length ? C : t
            }
        }),
        b(B, "set", {
            class: function(e, t) {
                e.className = t
            },
            style: function(e, t) {
                e.style.cssText = t
            }
        })),
        i.ie && i.ie < 9 && (A.float = "styleFloat",
        b(D, "set", {
            opacity: function(e, t) {
                var n = e.style;
                null === t || "" === t ? n.removeAttribute("filter") : (n.zoom = 1,
                n.filter = "alpha(opacity=" + 100 * t + ")")
            }
        })),
        d.attrHooks = B,
        d.cssHooks = D,
        d
    }
    )),
    n(p, [], (function() {
        return function(e, t) {
            function n(e, t, n, r) {
                function i(e) {
                    return (e = parseInt(e, 10).toString(16)).length > 1 ? e : "0" + e
                }
                return "#" + i(t) + i(n) + i(r)
            }
            var r, i, o, a, s = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi, l = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi, c = /\s*([^:]+):\s*([^;]+);?/g, u = /\s+$/, d = {}, f = "\ufeff";
            for (e = e || {},
            t && (o = t.getValidStyles(),
            a = t.getInvalidStyles()),
            i = "\\\" \\' \\; \\: ; : \ufeff".split(" "),
            r = 0; r < i.length; r++)
                d[i[r]] = f + r,
                d[f + r] = i[r];
            return {
                toHex: function(e) {
                    return e.replace(s, n)
                },
                parse: function(t) {
                    function i(e, t, n) {
                        var i, o, a, s;
                        if ((i = x[e + "-top" + t]) && ((o = x[e + "-right" + t]) && ((a = x[e + "-bottom" + t]) && (s = x[e + "-left" + t])))) {
                            var l = [i, o, a, s];
                            for (r = l.length - 1; r-- && l[r] === l[r + 1]; )
                                ;
                            r > -1 && n || (x[e + t] = -1 == r ? l[0] : l.join(" "),
                            delete x[e + "-top" + t],
                            delete x[e + "-right" + t],
                            delete x[e + "-bottom" + t],
                            delete x[e + "-left" + t])
                        }
                    }
                    function o(e) {
                        var t, n = x[e];
                        if (n) {
                            for (t = (n = n.split(" ")).length; t--; )
                                if (n[t] !== n[0])
                                    return !1;
                            return x[e] = n[0],
                            !0
                        }
                    }
                    function a(e) {
                        return C = !0,
                        d[e]
                    }
                    function h(e, t) {
                        return C && (e = e.replace(/\uFEFF[0-9]/g, (function(e) {
                            return d[e]
                        }
                        ))),
                        t || (e = e.replace(/\\([\'\";:])/g, "$1")),
                        e
                    }
                    function p(e) {
                        return String.fromCharCode(parseInt(e.slice(1), 16))
                    }
                    function m(e) {
                        return e.replace(/\\[0-9a-f]+/gi, p)
                    }
                    function g(t, n, r, i, o, a) {
                        if (o = o || a)
                            return "'" + (o = h(o)).replace(/\'/g, "\\'") + "'";
                        if (n = h(n || r || i),
                        !e.allow_script_urls) {
                            var s = n.replace(/[\s\r\n]+/g, "");
                            if (/(java|vb)script:/i.test(s))
                                return "";
                            if (!e.allow_svg_data_urls && /^data:image\/svg/i.test(s))
                                return ""
                        }
                        return w && (n = w.call(E, n, "style")),
                        "url('" + n.replace(/\'/g, "\\'") + "')"
                    }
                    var v, y, b, C, x = {}, w = e.url_converter, E = e.url_converter_scope || this;
                    if (t) {
                        for (t = (t = t.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, a).replace(/\"[^\"]+\"|\'[^\']+\'/g, (function(e) {
                            return e.replace(/[;:]/g, a)
                        }
                        )); v = c.exec(t); )
                            if (c.lastIndex = v.index + v[0].length,
                            y = v[1].replace(u, "").toLowerCase(),
                            b = v[2].replace(u, ""),
                            y && b) {
                                if (y = m(y),
                                b = m(b),
                                -1 !== y.indexOf(f) || -1 !== y.indexOf('"'))
                                    continue;
                                if (!e.allow_script_urls && ("behavior" == y || /expression\s*\(|\/\*|\*\//.test(b)))
                                    continue;
                                "font-weight" === y && "700" === b ? b = "bold" : "color" !== y && "background-color" !== y || (b = b.toLowerCase()),
                                b = (b = b.replace(s, n)).replace(l, g),
                                x[y] = C ? h(b, !0) : b
                            }
                        i("border", "", !0),
                        i("border", "-width"),
                        i("border", "-color"),
                        i("border", "-style"),
                        i("padding", ""),
                        i("margin", ""),
                        function(e, t, n, r) {
                            o(t) && o(n) && o(r) && (x[e] = x[t] + " " + x[n] + " " + x[r],
                            delete x[t],
                            delete x[n],
                            delete x[r])
                        }("border", "border-width", "border-style", "border-color"),
                        "medium none" === x.border && delete x.border,
                        "none" === x["border-image"] && delete x["border-image"]
                    }
                    return x
                },
                serialize: function(e, t) {
                    function n(t) {
                        var n, r, i, a;
                        if (n = o[t])
                            for (r = 0,
                            i = n.length; r < i; r++)
                                t = n[r],
                                (a = e[t]) && (l += (l.length > 0 ? " " : "") + t + ": " + a + ";")
                    }
                    function r(e, t) {
                        var n;
                        return !((n = a["*"]) && n[e] || (n = a[t],
                        n && n[e]))
                    }
                    var i, s, l = "";
                    if (t && o)
                        n("*"),
                        n(t);
                    else
                        for (i in e)
                            !(s = e[i]) || a && !r(i, t) || (l += (l.length > 0 ? " " : "") + i + ": " + s + ";");
                    return l
                }
            }
        }
    }
    )),
    n(m, [], (function() {
        return function(e, t) {
            function n(e, n, r, i) {
                var o, a;
                if (e) {
                    if (!i && e[n])
                        return e[n];
                    if (e != t) {
                        if (o = e[r])
                            return o;
                        for (a = e.parentNode; a && a != t; a = a.parentNode)
                            if (o = a[r])
                                return o
                    }
                }
            }
            var r = e;
            this.current = function() {
                return r
            }
            ,
            this.next = function(e) {
                return r = n(r, "firstChild", "nextSibling", e)
            }
            ,
            this.prev = function(e) {
                return r = n(r, "lastChild", "previousSibling", e)
            }
            ,
            this.prev2 = function(e) {
                return r = function(e, n, r, i) {
                    var o, a, s;
                    if (e) {
                        if (o = e[r],
                        t && o === t)
                            return;
                        if (o) {
                            if (!i)
                                for (s = o[n]; s; s = s[n])
                                    if (!s[n])
                                        return s;
                            return o
                        }
                        if ((a = e.parentNode) && a !== t)
                            return a
                    }
                }(r, "lastChild", "previousSibling", e)
            }
        }
    }
    )),
    n(g, [f], (function(e) {
        function t(n) {
            function r() {
                return w.createDocumentFragment()
            }
            function i(e, t) {
                d(S, e, t)
            }
            function o(e, t) {
                d(k, e, t)
            }
            function a(e) {
                i(e.parentNode, L(e))
            }
            function s(e) {
                o(e.parentNode, L(e) + 1)
            }
            function l() {
                return f(N)
            }
            function c(e, t) {
                var n;
                if (3 == e.nodeType)
                    return e;
                if (t < 0)
                    return e;
                for (n = e.firstChild; n && t > 0; )
                    --t,
                    n = n.nextSibling;
                return n || e
            }
            function u(e, t, r, i) {
                var o, a, s, l, c, u;
                if (e == r)
                    return t == i ? 0 : t < i ? -1 : 1;
                for (o = r; o && o.parentNode != e; )
                    o = o.parentNode;
                if (o) {
                    for (a = 0,
                    s = e.firstChild; s != o && a < t; )
                        a++,
                        s = s.nextSibling;
                    return t <= a ? -1 : 1
                }
                for (o = e; o && o.parentNode != r; )
                    o = o.parentNode;
                if (o) {
                    for (a = 0,
                    s = r.firstChild; s != o && a < i; )
                        a++,
                        s = s.nextSibling;
                    return a < i ? -1 : 1
                }
                for (l = n.findCommonAncestor(e, r),
                c = e; c && c.parentNode != l; )
                    c = c.parentNode;
                for (c || (c = l),
                u = r; u && u.parentNode != l; )
                    u = u.parentNode;
                if (u || (u = l),
                c == u)
                    return 0;
                for (s = l.firstChild; s; ) {
                    if (s == c)
                        return -1;
                    if (s == u)
                        return 1;
                    s = s.nextSibling
                }
            }
            function d(e, t, r) {
                var i, o;
                for (e ? (x[R] = t,
                x[T] = r) : (x[A] = t,
                x[B] = r),
                i = x[A]; i.parentNode; )
                    i = i.parentNode;
                for (o = x[R]; o.parentNode; )
                    o = o.parentNode;
                o == i ? u(x[R], x[T], x[A], x[B]) > 0 && x.collapse(e) : x.collapse(e),
                x.collapsed = x[R] == x[A] && x[T] == x[B],
                x.commonAncestorContainer = n.findCommonAncestor(x[R], x[A])
            }
            function f(e) {
                var t, n, r, i, o, a, s, l = 0, c = 0;
                if (x[R] == x[A])
                    return h(e);
                for (n = (t = x[A]).parentNode; n; t = n,
                n = n.parentNode) {
                    if (n == x[R])
                        return p(t, e);
                    ++l
                }
                for (n = (t = x[R]).parentNode; n; t = n,
                n = n.parentNode) {
                    if (n == x[A])
                        return m(t, e);
                    ++c
                }
                for (r = c - l,
                i = x[R]; r > 0; )
                    i = i.parentNode,
                    r--;
                for (o = x[A]; r < 0; )
                    o = o.parentNode,
                    r++;
                for (a = i.parentNode,
                s = o.parentNode; a != s; a = a.parentNode,
                s = s.parentNode)
                    i = a,
                    o = s;
                return g(i, o, e)
            }
            function h(e) {
                var t, n, i, o, a, s, l, u;
                if (e != _ && (t = r()),
                x[T] == x[B])
                    return t;
                if (3 == x[R].nodeType) {
                    if (n = x[R].nodeValue.substring(x[T], x[B]),
                    e != N && (i = x[R],
                    l = x[T],
                    u = x[B] - x[T],
                    0 === l && u >= i.nodeValue.length - 1 ? i.parentNode.removeChild(i) : i.deleteData(l, u),
                    x.collapse(S)),
                    e == _)
                        return;
                    return n.length > 0 && t.appendChild(w.createTextNode(n)),
                    t
                }
                for (i = c(x[R], x[T]),
                o = x[B] - x[T]; i && o > 0; )
                    a = i.nextSibling,
                    s = C(i, e),
                    t && t.appendChild(s),
                    --o,
                    i = a;
                return e != N && x.collapse(S),
                t
            }
            function p(e, t) {
                var n, i, o, a, s;
                if (t != _ && (n = r()),
                i = v(e, t),
                n && n.appendChild(i),
                (o = L(e) - x[T]) <= 0)
                    return t != N && (x.setEndBefore(e),
                    x.collapse(k)),
                    n;
                for (i = e.previousSibling; o > 0; )
                    a = i.previousSibling,
                    s = C(i, t),
                    n && n.insertBefore(s, n.firstChild),
                    --o,
                    i = a;
                return t != N && (x.setEndBefore(e),
                x.collapse(k)),
                n
            }
            function m(e, t) {
                var n, i, o, a, s, l;
                for (t != _ && (n = r()),
                o = y(e, t),
                n && n.appendChild(o),
                i = L(e),
                ++i,
                a = x[B] - i,
                o = e.nextSibling; o && a > 0; )
                    s = o.nextSibling,
                    l = C(o, t),
                    n && n.appendChild(l),
                    --a,
                    o = s;
                return t != N && (x.setStartAfter(e),
                x.collapse(S)),
                n
            }
            function g(e, t, n) {
                var i, o, a, s, l, c;
                for (n != _ && (o = r()),
                i = y(e, n),
                o && o.appendChild(i),
                a = L(e),
                s = L(t) - ++a,
                l = e.nextSibling; s > 0; )
                    c = l.nextSibling,
                    i = C(l, n),
                    o && o.appendChild(i),
                    l = c,
                    --s;
                return i = v(t, n),
                o && o.appendChild(i),
                n != N && (x.setStartAfter(e),
                x.collapse(S)),
                o
            }
            function v(e, t) {
                var n, r, i, o, a, s = c(x[A], x[B] - 1), l = s != x[A];
                if (s == e)
                    return b(s, l, k, t);
                for (r = b(n = s.parentNode, k, k, t); n; ) {
                    for (; s; )
                        i = s.previousSibling,
                        o = b(s, l, k, t),
                        t != _ && r.insertBefore(o, r.firstChild),
                        l = S,
                        s = i;
                    if (n == e)
                        return r;
                    s = n.previousSibling,
                    a = b(n = n.parentNode, k, k, t),
                    t != _ && a.appendChild(r),
                    r = a
                }
            }
            function y(e, t) {
                var n, r, i, o, a, s = c(x[R], x[T]), l = s != x[R];
                if (s == e)
                    return b(s, l, S, t);
                for (r = b(n = s.parentNode, k, S, t); n; ) {
                    for (; s; )
                        i = s.nextSibling,
                        o = b(s, l, S, t),
                        t != _ && r.appendChild(o),
                        l = S,
                        s = i;
                    if (n == e)
                        return r;
                    s = n.nextSibling,
                    a = b(n = n.parentNode, k, S, t),
                    t != _ && a.appendChild(r),
                    r = a
                }
            }
            function b(e, t, r, i) {
                var o, a, s, l, c;
                if (t)
                    return C(e, i);
                if (3 == e.nodeType) {
                    if (o = e.nodeValue,
                    r ? (l = x[T],
                    a = o.substring(l),
                    s = o.substring(0, l)) : (l = x[B],
                    a = o.substring(0, l),
                    s = o.substring(l)),
                    i != N && (e.nodeValue = s),
                    i == _)
                        return;
                    return (c = n.clone(e, k)).nodeValue = a,
                    c
                }
                return i != _ ? n.clone(e, k) : void 0
            }
            function C(e, t) {
                return t != _ ? t == N ? n.clone(e, S) : e : void e.parentNode.removeChild(e)
            }
            var x = this
              , w = n.doc
              , E = 0
              , N = 1
              , _ = 2
              , S = !0
              , k = !1
              , T = "startOffset"
              , R = "startContainer"
              , A = "endContainer"
              , B = "endOffset"
              , D = e.extend
              , L = n.nodeIndex;
            return D(x, {
                startContainer: w,
                startOffset: 0,
                endContainer: w,
                endOffset: 0,
                collapsed: S,
                commonAncestorContainer: w,
                START_TO_START: 0,
                START_TO_END: 1,
                END_TO_END: 2,
                END_TO_START: 3,
                setStart: i,
                setEnd: o,
                setStartBefore: a,
                setStartAfter: function(e) {
                    i(e.parentNode, L(e) + 1)
                },
                setEndBefore: function(e) {
                    o(e.parentNode, L(e))
                },
                setEndAfter: s,
                collapse: function(e) {
                    e ? (x[A] = x[R],
                    x[B] = x[T]) : (x[R] = x[A],
                    x[T] = x[B]),
                    x.collapsed = S
                },
                selectNode: function(e) {
                    a(e),
                    s(e)
                },
                selectNodeContents: function(e) {
                    i(e, 0),
                    o(e, 1 === e.nodeType ? e.childNodes.length : e.nodeValue.length)
                },
                compareBoundaryPoints: function(e, t) {
                    var n = x[R]
                      , r = x[T]
                      , i = x[A]
                      , o = x[B]
                      , a = t.startContainer
                      , s = t.startOffset
                      , l = t.endContainer
                      , c = t.endOffset;
                    return 0 === e ? u(n, r, a, s) : 1 === e ? u(i, o, a, s) : 2 === e ? u(i, o, l, c) : 3 === e ? u(n, r, l, c) : void 0
                },
                deleteContents: function() {
                    f(_)
                },
                extractContents: function() {
                    return f(E)
                },
                cloneContents: l,
                insertNode: function(e) {
                    var t, r, i = this[R], o = this[T];
                    3 !== i.nodeType && 4 !== i.nodeType || !i.nodeValue ? (i.childNodes.length > 0 && (r = i.childNodes[o]),
                    r ? i.insertBefore(e, r) : 3 == i.nodeType ? n.insertAfter(e, i) : i.appendChild(e)) : o ? o >= i.nodeValue.length ? n.insertAfter(e, i) : (t = i.splitText(o),
                    i.parentNode.insertBefore(e, t)) : i.parentNode.insertBefore(e, i)
                },
                surroundContents: function(e) {
                    var t = x.extractContents();
                    x.insertNode(e),
                    e.appendChild(t),
                    x.selectNode(e)
                },
                cloneRange: function() {
                    return D(new t(n), {
                        startContainer: x[R],
                        startOffset: x[T],
                        endContainer: x[A],
                        endOffset: x[B],
                        collapsed: x.collapsed,
                        commonAncestorContainer: x.commonAncestorContainer
                    })
                },
                toStringIE: function() {
                    return n.create("body", null, l()).outerText
                }
            }),
            x
        }
        return t.prototype.toString = function() {
            return this.toStringIE()
        }
        ,
        t
    }
    )),
    n(v, [f], (function(e) {
        function t(e, t) {
            var n, i, o, a = {};
            if (e) {
                for (e = e.split(","),
                t = t || 10,
                n = 0; n < e.length; n += 2)
                    i = String.fromCharCode(parseInt(e[n], t)),
                    r[i] || (o = "&" + e[n + 1] + ";",
                    a[i] = o,
                    a[o] = i);
                return a
            }
        }
        var n, r, i, o = e.makeMap, a = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, s = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = /[<>&\"\']/g, c = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi, u = {
            128: "€",
            130: "‚",
            131: "ƒ",
            132: "„",
            133: "…",
            134: "†",
            135: "‡",
            136: "ˆ",
            137: "‰",
            138: "Š",
            139: "‹",
            140: "Œ",
            142: "Ž",
            145: "‘",
            146: "’",
            147: "“",
            148: "”",
            149: "•",
            150: "–",
            151: "—",
            152: "˜",
            153: "™",
            154: "š",
            155: "›",
            156: "œ",
            158: "ž",
            159: "Ÿ"
        };
        r = {
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            "`": "&#96;"
        },
        i = {
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&quot;": '"',
            "&apos;": "'"
        },
        n = t("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32);
        var d = {
            encodeRaw: function(e, t) {
                return e.replace(t ? a : s, (function(e) {
                    return r[e] || e
                }
                ))
            },
            encodeAllRaw: function(e) {
                return ("" + e).replace(l, (function(e) {
                    return r[e] || e
                }
                ))
            },
            encodeNumeric: function(e, t) {
                return e.replace(t ? a : s, (function(e) {
                    return e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : r[e] || "&#" + e.charCodeAt(0) + ";"
                }
                ))
            },
            encodeNamed: function(e, t, i) {
                return i = i || n,
                e.replace(t ? a : s, (function(e) {
                    return r[e] || i[e] || e
                }
                ))
            },
            getEncodeFunc: function(e, i) {
                return i = t(i) || n,
                (e = o(e.replace(/\+/g, ","))).named && e.numeric ? function(e, t) {
                    return e.replace(t ? a : s, (function(e) {
                        return r[e] || i[e] || "&#" + e.charCodeAt(0) + ";" || e
                    }
                    ))
                }
                : e.named ? i ? function(e, t) {
                    return d.encodeNamed(e, t, i)
                }
                : d.encodeNamed : e.numeric ? d.encodeNumeric : d.encodeRaw
            },
            decode: function(e) {
                return e.replace(c, (function(e, t) {
                    return t ? (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) > 65535 ? (t -= 65536,
                    String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : u[t] || String.fromCharCode(t) : i[e] || n[e] || function(e) {
                        var t;
                        return (t = document.createElement("div")).innerHTML = e,
                        t.textContent || t.innerText || e
                    }(e)
                }
                ))
            }
        };
        return d
    }
    )),
    n(y, [f, s], (function(e, t) {
        return function(n, r) {
            function i(e) {
                n.getElementsByTagName("head")[0].appendChild(e)
            }
            var o, a = 0, s = {};
            o = (r = r || {}).maxLoadTime || 5e3,
            this.load = function(r, l, c) {
                function u() {
                    for (var e = v.passed, t = e.length; t--; )
                        e[t]();
                    v.status = 2,
                    v.passed = [],
                    v.failed = []
                }
                function d() {
                    for (var e = v.failed, t = e.length; t--; )
                        e[t]();
                    v.status = 3,
                    v.passed = [],
                    v.failed = []
                }
                function f(e, n) {
                    e() || ((new Date).getTime() - g < o ? t.setTimeout(n) : d())
                }
                function h() {
                    f((function() {
                        for (var e, t, r = n.styleSheets, i = r.length; i--; )
                            if ((t = (e = r[i]).ownerNode ? e.ownerNode : e.owningElement) && t.id === p.id)
                                return u(),
                                !0
                    }
                    ), h)
                }
                var p, m, g, v;
                if (r = e._addCacheSuffix(r),
                s[r] ? v = s[r] : (v = {
                    passed: [],
                    failed: []
                },
                s[r] = v),
                l && v.passed.push(l),
                c && v.failed.push(c),
                1 != v.status) {
                    if (2 == v.status)
                        return void u();
                    if (3 == v.status)
                        return void d();
                    if (v.status = 1,
                    (p = n.createElement("link")).rel = "stylesheet",
                    p.type = "text/css",
                    p.id = "u" + a++,
                    p.async = !1,
                    p.defer = !1,
                    g = (new Date).getTime(),
                    "onload"in p && !function() {
                        var e = navigator.userAgent.match(/WebKit\/(\d*)/);
                        return !!(e && e[1] < 536)
                    }())
                        p.onload = h,
                        p.onerror = d;
                    else {
                        if (navigator.userAgent.indexOf("Firefox") > 0)
                            return (m = n.createElement("style")).textContent = '@import "' + r + '"',
                            function e() {
                                f((function() {
                                    try {
                                        var e = m.sheet.cssRules;
                                        return u(),
                                        !!e
                                    } catch (e) {}
                                }
                                ), e)
                            }(),
                            void i(m);
                        h()
                    }
                    i(p),
                    p.href = r
                }
            }
        }
    }
    )),
    n(b, [u, h, p, c, m, g, v, l, f, y], (function(e, n, r, i, o, a, s, l, c, u) {
        function d(e, t) {
            var n = t.attr("style");
            (n = e.serializeStyle(e.parseStyle(n), t[0].nodeName)) || (n = null),
            t.attr("data-mce-style", n)
        }
        function f(e, t) {
            var n, r, i = 0;
            if (e)
                for (n = e.nodeType,
                e = e.previousSibling; e; e = e.previousSibling)
                    r = e.nodeType,
                    (!t || 3 != r || r != n && e.nodeValue.length) && (i++,
                    n = r);
            return i
        }
        function h(e, t) {
            var o, a = this;
            a.doc = e,
            a.win = window,
            a.files = {},
            a.counter = 0,
            a.stdMode = !y || e.documentMode >= 8,
            a.boxModel = !y || "CSS1Compat" == e.compatMode || a.stdMode,
            a.styleSheetLoader = new u(e),
            a.boundEvents = [],
            a.settings = t = t || {},
            a.schema = t.schema,
            a.styles = new r({
                url_converter: t.url_converter,
                url_converter_scope: t.url_converter_scope
            },t.schema),
            a.fixDoc(e),
            a.events = t.ownEvents ? new i(t.proxy) : i.Event,
            a.attrHooks = function(e, t) {
                var n, r = {}, i = t.keep_values;
                return n = {
                    set: function(n, r, i) {
                        t.url_converter && (r = t.url_converter.call(t.url_converter_scope || e, r, i, n[0])),
                        n.attr("data-mce-" + i, r).attr(i, r)
                    },
                    get: function(e, t) {
                        return e.attr("data-mce-" + t) || e.attr(t)
                    }
                },
                r = {
                    style: {
                        set: function(e, t) {
                            return null !== t && "object" == typeof t ? void e.css(t) : (i && e.attr("data-mce-style", t),
                            void e.attr("style", t))
                        },
                        get: function(t) {
                            var n = t.attr("data-mce-style") || t.attr("style");
                            return e.serializeStyle(e.parseStyle(n), t[0].nodeName)
                        }
                    }
                },
                i && (r.href = r.src = n),
                r
            }(a, t),
            o = t.schema ? t.schema.getBlockElements() : {},
            a.$ = n.overrideDefaults((function() {
                return {
                    context: e,
                    element: a.getRoot()
                }
            }
            )),
            a.isBlock = function(e) {
                if (!e)
                    return !1;
                var t = e.nodeType;
                return t ? !(1 !== t || !o[e.nodeName]) : !!o[e]
            }
        }
        var p = c.each
          , m = c.is
          , g = c.grep
          , v = c.trim
          , y = l.ie
          , b = /^([a-z0-9],?)+$/i
          , C = /^[ \t\r\n]*$/;
        return h.prototype = {
            $$: function(e) {
                return "string" == typeof e && (e = this.get(e)),
                this.$(e)
            },
            root: null,
            fixDoc: function(e) {
                var t, n = this.settings;
                if (y && n.schema)
                    for (t in "abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video".replace(/\w+/g, (function(t) {
                        e.createElement(t)
                    }
                    )),
                    n.schema.getCustomElements())
                        e.createElement(t)
            },
            clone: function(e, t) {
                var n, r, i = this;
                return !y || 1 !== e.nodeType || t ? e.cloneNode(t) : (r = i.doc,
                t ? n.firstChild : (n = r.createElement(e.nodeName),
                p(i.getAttribs(e), (function(t) {
                    i.setAttrib(n, t.nodeName, i.getAttrib(e, t.nodeName))
                }
                )),
                n))
            },
            getRoot: function() {
                return this.settings.root_element || this.doc.body
            },
            getViewPort: function(e) {
                var t, n;
                return t = (e = e || this.win).document,
                n = this.boxModel ? t.documentElement : t.body,
                {
                    x: e.pageXOffset || n.scrollLeft,
                    y: e.pageYOffset || n.scrollTop,
                    w: e.innerWidth || n.clientWidth,
                    h: e.innerHeight || n.clientHeight
                }
            },
            getRect: function(e) {
                var t, n, r = this;
                return e = r.get(e),
                t = r.getPos(e),
                n = r.getSize(e),
                {
                    x: t.x,
                    y: t.y,
                    w: n.w,
                    h: n.h
                }
            },
            getSize: function(e) {
                var t, n, r = this;
                return e = r.get(e),
                t = r.getStyle(e, "width"),
                n = r.getStyle(e, "height"),
                -1 === t.indexOf("px") && (t = 0),
                -1 === n.indexOf("px") && (n = 0),
                {
                    w: parseInt(t, 10) || e.offsetWidth || e.clientWidth,
                    h: parseInt(n, 10) || e.offsetHeight || e.clientHeight
                }
            },
            getParent: function(e, t, n) {
                return this.getParents(e, t, n, !1)
            },
            getParents: function(e, n, r, i) {
                var o, a = this, s = [];
                for (e = a.get(e),
                i = i === t,
                r = r || ("BODY" != a.getRoot().nodeName ? a.getRoot().parentNode : null),
                m(n, "string") && (o = n,
                n = "*" === n ? function(e) {
                    return 1 == e.nodeType
                }
                : function(e) {
                    return a.is(e, o)
                }
                ); e && e != r && e.nodeType && 9 !== e.nodeType; ) {
                    if (!n || n(e)) {
                        if (!i)
                            return e;
                        s.push(e)
                    }
                    e = e.parentNode
                }
                return i ? s : null
            },
            get: function(e) {
                var t;
                return e && this.doc && "string" == typeof e && (t = e,
                (e = this.doc.getElementById(e)) && e.id !== t) ? this.doc.getElementsByName(t)[1] : e
            },
            getNext: function(e, t) {
                return this._findSib(e, t, "nextSibling")
            },
            getPrev: function(e, t) {
                return this._findSib(e, t, "previousSibling")
            },
            select: function(t, n) {
                var r = this;
                return e(t, r.get(n) || r.settings.root_element || r.doc, [])
            },
            is: function(n, r) {
                var i;
                if (n.length === t) {
                    if ("*" === r)
                        return 1 == n.nodeType;
                    if (b.test(r)) {
                        for (r = r.toLowerCase().split(/,/),
                        n = n.nodeName.toLowerCase(),
                        i = r.length - 1; i >= 0; i--)
                            if (r[i] == n)
                                return !0;
                        return !1
                    }
                }
                if (n.nodeType && 1 != n.nodeType)
                    return !1;
                var o = n.nodeType ? [n] : n;
                return e(r, o[0].ownerDocument || o[0], null, o).length > 0
            },
            add: function(e, t, n, r, i) {
                var o = this;
                return this.run(e, (function(e) {
                    var a;
                    return a = m(t, "string") ? o.doc.createElement(t) : t,
                    o.setAttribs(a, n),
                    r && (r.nodeType ? a.appendChild(r) : o.setHTML(a, r)),
                    i ? a : e.appendChild(a)
                }
                ))
            },
            create: function(e, t, n) {
                return this.add(this.doc.createElement(e), e, t, n, 1)
            },
            createHTML: function(e, t, n) {
                var r, i = "";
                for (r in i += "<" + e,
                t)
                    t.hasOwnProperty(r) && null !== t[r] && void 0 !== t[r] && (i += " " + r + '="' + this.encode(t[r]) + '"');
                return void 0 !== n ? i + ">" + n + "</" + e + ">" : i + " />"
            },
            createFragment: function(e) {
                var t, n, r, i = this.doc;
                for (r = i.createElement("div"),
                t = i.createDocumentFragment(),
                e && (r.innerHTML = e); n = r.firstChild; )
                    t.appendChild(n);
                return t
            },
            remove: function(e, t) {
                return e = this.$$(e),
                t ? e.each((function() {
                    for (var e; e = this.firstChild; )
                        3 == e.nodeType && 0 === e.data.length ? this.removeChild(e) : this.parentNode.insertBefore(e, this)
                }
                )).remove() : e.remove(),
                e.length > 1 ? e.toArray() : e[0]
            },
            setStyle: function(e, t, n) {
                e = this.$$(e).css(t, n),
                this.settings.update_styles && d(this, e)
            },
            getStyle: function(e, n, r) {
                return e = this.$$(e),
                r ? e.css(n) : (n = n.replace(/-(\D)/g, (function(e, t) {
                    return t.toUpperCase()
                }
                )),
                "float" == n && (n = l.ie && l.ie < 12 ? "styleFloat" : "cssFloat"),
                e[0] && e[0].style ? e[0].style[n] : t)
            },
            setStyles: function(e, t) {
                e = this.$$(e).css(t),
                this.settings.update_styles && d(this, e)
            },
            removeAllAttribs: function(e) {
                return this.run(e, (function(e) {
                    var t, n = e.attributes;
                    for (t = n.length - 1; t >= 0; t--)
                        e.removeAttributeNode(n.item(t))
                }
                ))
            },
            setAttrib: function(e, t, n) {
                var r, i, o = this, a = o.settings;
                "" === n && (n = null),
                r = (e = o.$$(e)).attr(t),
                e.length && ((i = o.attrHooks[t]) && i.set ? i.set(e, n, t) : e.attr(t, n),
                r != n && a.onSetAttrib && a.onSetAttrib({
                    attrElm: e,
                    attrName: t,
                    attrValue: n
                }))
            },
            setAttribs: function(e, t) {
                var n = this;
                n.$$(e).each((function(e, r) {
                    p(t, (function(e, t) {
                        n.setAttrib(r, t, e)
                    }
                    ))
                }
                ))
            },
            getAttrib: function(e, t, n) {
                var r, i;
                return (e = this.$$(e)).length && (i = (r = this.attrHooks[t]) && r.get ? r.get(e, t) : e.attr(t)),
                void 0 === i && (i = n || ""),
                i
            },
            getPos: function(e, t) {
                var r, i, o = this, a = 0, s = 0, l = o.doc, c = l.body;
                if (t = t || c,
                e = o.get(e)) {
                    if (t === c && e.getBoundingClientRect && "static" === n(c).css("position"))
                        return i = e.getBoundingClientRect(),
                        t = o.boxModel ? l.documentElement : c,
                        {
                            x: a = i.left + (l.documentElement.scrollLeft || c.scrollLeft) - t.clientLeft,
                            y: s = i.top + (l.documentElement.scrollTop || c.scrollTop) - t.clientTop
                        };
                    for (r = e; r && r != t && r.nodeType; )
                        a += r.offsetLeft || 0,
                        s += r.offsetTop || 0,
                        r = r.offsetParent;
                    for (r = e.parentNode; r && r != t && r.nodeType; )
                        a -= r.scrollLeft || 0,
                        s -= r.scrollTop || 0,
                        r = r.parentNode
                }
                return {
                    x: a,
                    y: s
                }
            },
            parseStyle: function(e) {
                return this.styles.parse(e)
            },
            serializeStyle: function(e, t) {
                return this.styles.serialize(e, t)
            },
            addStyle: function(e) {
                var t, n, r = this.doc;
                if (this !== h.DOM && r === document) {
                    var i = h.DOM.addedStyles;
                    if ((i = i || [])[e])
                        return;
                    i[e] = !0,
                    h.DOM.addedStyles = i
                }
                (n = r.getElementById("mceDefaultStyles")) || ((n = r.createElement("style")).id = "mceDefaultStyles",
                n.type = "text/css",
                (t = r.getElementsByTagName("head")[0]).firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n)),
                n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(r.createTextNode(e))
            },
            loadCSS: function(e) {
                var t, n = this, r = n.doc;
                return n !== h.DOM && r === document ? void h.DOM.loadCSS(e) : (e || (e = ""),
                t = r.getElementsByTagName("head")[0],
                void p(e.split(","), (function(e) {
                    var i;
                    e = c._addCacheSuffix(e),
                    n.files[e] || (n.files[e] = !0,
                    i = n.create("link", {
                        rel: "stylesheet",
                        href: e
                    }),
                    y && r.documentMode && r.recalc && (i.onload = function() {
                        r.recalc && r.recalc(),
                        i.onload = null
                    }
                    ),
                    t.appendChild(i))
                }
                )))
            },
            addClass: function(e, t) {
                this.$$(e).addClass(t)
            },
            removeClass: function(e, t) {
                this.toggleClass(e, t, !1)
            },
            hasClass: function(e, t) {
                return this.$$(e).hasClass(t)
            },
            toggleClass: function(e, t, r) {
                this.$$(e).toggleClass(t, r).each((function() {
                    "" === this.className && n(this).attr("class", null)
                }
                ))
            },
            show: function(e) {
                this.$$(e).show()
            },
            hide: function(e) {
                this.$$(e).hide()
            },
            isHidden: function(e) {
                return "none" == this.$$(e).css("display")
            },
            uniqueId: function(e) {
                return (e || "mce_") + this.counter++
            },
            setHTML: function(e, t) {
                e = this.$$(e),
                y ? e.each((function(e, r) {
                    if (!1 !== r.canHaveHTML) {
                        for (; r.firstChild; )
                            r.removeChild(r.firstChild);
                        try {
                            r.innerHTML = "<br>" + t,
                            r.removeChild(r.firstChild)
                        } catch (e) {
                            n("<div></div>").html("<br>" + t).contents().slice(1).appendTo(r)
                        }
                        return t
                    }
                }
                )) : e.html(t)
            },
            getOuterHTML: function(e) {
                return 1 == (e = this.get(e)).nodeType && "outerHTML"in e ? e.outerHTML : n("<div></div>").append(n(e).clone()).html()
            },
            setOuterHTML: function(e, t) {
                var r = this;
                r.$$(e).each((function() {
                    try {
                        if ("outerHTML"in this)
                            return void (this.outerHTML = t)
                    } catch (e) {}
                    r.remove(n(this).html(t), !0)
                }
                ))
            },
            decode: s.decode,
            encode: s.encodeAllRaw,
            insertAfter: function(e, t) {
                return t = this.get(t),
                this.run(e, (function(e) {
                    var n, r;
                    return n = t.parentNode,
                    (r = t.nextSibling) ? n.insertBefore(e, r) : n.appendChild(e),
                    e
                }
                ))
            },
            replace: function(e, t, n) {
                return this.run(t, (function(t) {
                    return m(t, "array") && (e = e.cloneNode(!0)),
                    n && p(g(t.childNodes), (function(t) {
                        e.appendChild(t)
                    }
                    )),
                    t.parentNode.replaceChild(e, t)
                }
                ))
            },
            rename: function(e, t) {
                var n, r = this;
                return e.nodeName != t.toUpperCase() && (n = r.create(t),
                p(r.getAttribs(e), (function(t) {
                    r.setAttrib(n, t.nodeName, r.getAttrib(e, t.nodeName))
                }
                )),
                r.replace(n, e, 1)),
                n || e
            },
            findCommonAncestor: function(e, t) {
                for (var n, r = e; r; ) {
                    for (n = t; n && r != n; )
                        n = n.parentNode;
                    if (r == n)
                        break;
                    r = r.parentNode
                }
                return !r && e.ownerDocument ? e.ownerDocument.documentElement : r
            },
            toHex: function(e) {
                return this.styles.toHex(c.trim(e))
            },
            run: function(e, t, n) {
                var r, i = this;
                return "string" == typeof e && (e = i.get(e)),
                !!e && (n = n || this,
                e.nodeType || !e.length && 0 !== e.length ? t.call(n, e) : (r = [],
                p(e, (function(e, o) {
                    e && ("string" == typeof e && (e = i.get(e)),
                    r.push(t.call(n, e, o)))
                }
                )),
                r))
            },
            getAttribs: function(e) {
                var t;
                if (!(e = this.get(e)))
                    return [];
                if (y) {
                    if (t = [],
                    "OBJECT" == e.nodeName)
                        return e.attributes;
                    "OPTION" === e.nodeName && this.getAttrib(e, "selected") && t.push({
                        specified: 1,
                        nodeName: "selected"
                    });
                    return e.cloneNode(!1).outerHTML.replace(/<\/?[\w:\-]+ ?|=[\"][^\"]+\"|=\'[^\']+\'|=[\w\-]+|>/gi, "").replace(/[\w:\-]+/gi, (function(e) {
                        t.push({
                            specified: 1,
                            nodeName: e
                        })
                    }
                    )),
                    t
                }
                return e.attributes
            },
            isEmpty: function(e, t) {
                var n, r, i, a, s, l = this, c = 0;
                if (e = e.firstChild) {
                    a = new o(e,e.parentNode),
                    t = t || (l.schema ? l.schema.getNonEmptyElements() : null);
                    do {
                        if (1 === (i = e.nodeType)) {
                            var u = e.getAttribute("data-mce-bogus");
                            if (u) {
                                e = a.next("all" === u);
                                continue
                            }
                            if (s = e.nodeName.toLowerCase(),
                            t && t[s]) {
                                if ("br" === s) {
                                    c++,
                                    e = a.next();
                                    continue
                                }
                                return !1
                            }
                            for (n = (r = l.getAttribs(e)).length; n--; )
                                if ("name" === (s = r[n].nodeName) || "data-mce-bookmark" === s)
                                    return !1
                        }
                        if (8 == i)
                            return !1;
                        if (3 === i && !C.test(e.nodeValue))
                            return !1;
                        e = a.next()
                    } while (e)
                }
                return c <= 1
            },
            createRng: function() {
                var e = this.doc;
                return e.createRange ? e.createRange() : new a(this)
            },
            nodeIndex: f,
            split: function(e, t, n) {
                function r(e) {
                    var t, n = e.childNodes, i = e.nodeType;
                    if (1 != i || "bookmark" != e.getAttribute("data-mce-type")) {
                        for (t = n.length - 1; t >= 0; t--)
                            r(n[t]);
                        if (9 != i) {
                            if (3 == i && e.nodeValue.length > 0) {
                                var o = v(e.nodeValue).length;
                                if (!s.isBlock(e.parentNode) || o > 0 || 0 === o && function(e) {
                                    var t = e.previousSibling && "SPAN" == e.previousSibling.nodeName
                                      , n = e.nextSibling && "SPAN" == e.nextSibling.nodeName;
                                    return t && n
                                }(e))
                                    return
                            } else if (1 == i && (1 == (n = e.childNodes).length && n[0] && 1 == n[0].nodeType && "bookmark" == n[0].getAttribute("data-mce-type") && e.parentNode.insertBefore(n[0], e),
                            n.length || /^(br|hr|input|img)$/i.test(e.nodeName)))
                                return;
                            s.remove(e)
                        }
                        return e
                    }
                }
                var i, o, a, s = this, l = s.createRng();
                if (e && t)
                    return l.setStart(e.parentNode, s.nodeIndex(e)),
                    l.setEnd(t.parentNode, s.nodeIndex(t)),
                    i = l.extractContents(),
                    (l = s.createRng()).setStart(t.parentNode, s.nodeIndex(t) + 1),
                    l.setEnd(e.parentNode, s.nodeIndex(e) + 1),
                    o = l.extractContents(),
                    (a = e.parentNode).insertBefore(r(i), e),
                    n ? a.insertBefore(n, e) : a.insertBefore(t, e),
                    a.insertBefore(r(o), e),
                    s.remove(e),
                    n || t
            },
            bind: function(e, t, n, r) {
                var i = this;
                if (c.isArray(e)) {
                    for (var o = e.length; o--; )
                        e[o] = i.bind(e[o], t, n, r);
                    return e
                }
                return !i.settings.collect || e !== i.doc && e !== i.win || i.boundEvents.push([e, t, n, r]),
                i.events.bind(e, t, n, r || i)
            },
            unbind: function(e, t, n) {
                var r, i = this;
                if (c.isArray(e)) {
                    for (r = e.length; r--; )
                        e[r] = i.unbind(e[r], t, n);
                    return e
                }
                if (i.boundEvents && (e === i.doc || e === i.win))
                    for (r = i.boundEvents.length; r--; ) {
                        var o = i.boundEvents[r];
                        e != o[0] || t && t != o[1] || n && n != o[2] || this.events.unbind(o[0], o[1], o[2])
                    }
                return this.events.unbind(e, t, n)
            },
            fire: function(e, t, n) {
                return this.events.fire(e, t, n)
            },
            getContentEditable: function(e) {
                var t;
                return e && 1 == e.nodeType ? (t = e.getAttribute("data-mce-contenteditable")) && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null : null
            },
            getContentEditableParent: function(e) {
                for (var t = this.getRoot(), n = null; e && e !== t && null === (n = this.getContentEditable(e)); e = e.parentNode)
                    ;
                return n
            },
            destroy: function() {
                var t = this;
                if (t.boundEvents) {
                    for (var n = t.boundEvents.length; n--; ) {
                        var r = t.boundEvents[n];
                        this.events.unbind(r[0], r[1], r[2])
                    }
                    t.boundEvents = null
                }
                e.setDocument && e.setDocument(),
                t.win = t.doc = t.root = t.events = t.frag = null
            },
            isChildOf: function(e, t) {
                for (; e; ) {
                    if (t === e)
                        return !0;
                    e = e.parentNode
                }
                return !1
            },
            dumpRng: function(e) {
                return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset
            },
            _findSib: function(e, t, n) {
                var r = this
                  , i = t;
                if (e)
                    for ("string" == typeof i && (i = function(e) {
                        return r.is(e, t)
                    }
                    ),
                    e = e[n]; e; e = e[n])
                        if (i(e))
                            return e;
                return null
            }
        },
        h.DOM = new h(document),
        h.nodeIndex = f,
        h
    }
    )),
    n(C, [b, f], (function(e, t) {
        function n() {
            function e(e, n) {
                function i() {
                    s.remove(a),
                    o && (o.onreadystatechange = o.onload = o = null),
                    n()
                }
                var o, a, s = r;
                a = s.uniqueId(),
                (o = document.createElement("script")).id = a,
                o.type = "text/javascript",
                o.src = t._addCacheSuffix(e),
                "onreadystatechange"in o ? o.onreadystatechange = function() {
                    /loaded|complete/.test(o.readyState) && i()
                }
                : o.onload = i,
                o.onerror = function() {
                    "undefined" != typeof console && console.log && console.log("Failed to load: " + e)
                }
                ,
                (document.getElementsByTagName("head")[0] || document.body).appendChild(o)
            }
            var n, a = {}, s = [], l = {}, c = [], u = 0;
            this.isDone = function(e) {
                return 2 == a[e]
            }
            ,
            this.markDone = function(e) {
                a[e] = 2
            }
            ,
            this.add = this.load = function(e, t, r) {
                a[e] == n && (s.push(e),
                a[e] = 0),
                t && (l[e] || (l[e] = []),
                l[e].push({
                    func: t,
                    scope: r || this
                }))
            }
            ,
            this.remove = function(e) {
                delete a[e],
                delete l[e]
            }
            ,
            this.loadQueue = function(e, t) {
                this.loadScripts(s, e, t)
            }
            ,
            this.loadScripts = function(t, r, s) {
                function d(e) {
                    i(l[e], (function(e) {
                        e.func.call(e.scope)
                    }
                    )),
                    l[e] = n
                }
                var f;
                c.push({
                    func: r,
                    scope: s || this
                }),
                (f = function() {
                    var n = o(t);
                    t.length = 0,
                    i(n, (function(t) {
                        return 2 == a[t] ? void d(t) : void (1 != a[t] && (a[t] = 1,
                        u++,
                        e(t, (function() {
                            a[t] = 2,
                            u--,
                            d(t),
                            f()
                        }
                        ))))
                    }
                    )),
                    u || (i(c, (function(e) {
                        e.func.call(e.scope)
                    }
                    )),
                    c.length = 0)
                }
                )()
            }
        }
        var r = e.DOM
          , i = t.each
          , o = t.grep;
        return n.ScriptLoader = new n,
        n
    }
    )),
    n(x, [C, f], (function(e, n) {
        function r() {
            var e = this;
            e.items = [],
            e.urls = {},
            e.lookup = {}
        }
        var i = n.each;
        return r.prototype = {
            get: function(e) {
                return this.lookup[e] ? this.lookup[e].instance : t
            },
            dependencies: function(e) {
                var t;
                return this.lookup[e] && (t = this.lookup[e].dependencies),
                t || []
            },
            requireLangPack: function(t, n) {
                var i = r.language;
                if (i && !1 !== r.languageLoad) {
                    if (n)
                        if (-1 != (n = "," + n + ",").indexOf("," + i.substr(0, 2) + ","))
                            i = i.substr(0, 2);
                        else if (-1 == n.indexOf("," + i + ","))
                            return;
                    e.ScriptLoader.add(this.urls[t] + "/langs/" + i + ".js")
                }
            },
            add: function(e, t, n) {
                return this.items.push(t),
                this.lookup[e] = {
                    instance: t,
                    dependencies: n
                },
                t
            },
            remove: function(e) {
                delete this.urls[e],
                delete this.lookup[e]
            },
            createUrl: function(e, t) {
                return "object" == typeof t ? t : {
                    prefix: e.prefix,
                    resource: t,
                    suffix: e.suffix
                }
            },
            addComponents: function(t, n) {
                var r = this.urls[t];
                i(n, (function(t) {
                    e.ScriptLoader.add(r + "/" + t)
                }
                ))
            },
            load: function(n, o, a, s) {
                function l() {
                    var r = c.dependencies(n);
                    i(r, (function(e) {
                        var n = c.createUrl(o, e);
                        c.load(n.resource, n, t, t)
                    }
                    )),
                    a && (s ? a.call(s) : a.call(e))
                }
                var c = this
                  , u = o;
                c.urls[n] || ("object" == typeof o && (u = o.prefix + o.resource + o.suffix),
                0 !== u.indexOf("/") && -1 == u.indexOf("://") && (u = r.baseURL + "/" + u),
                c.urls[n] = u.substring(0, u.lastIndexOf("/")),
                c.lookup[n] ? l() : e.ScriptLoader.add(u, l, s))
            }
        },
        r.PluginManager = new r,
        r.ThemeManager = new r,
        r
    }
    )),
    n(w, [], (function() {
        function e(e) {
            return function(t) {
                return !!t && t.nodeType == e
            }
        }
        function t(e) {
            return e = e.toLowerCase().split(" "),
            function(t) {
                var n, r;
                if (t && t.nodeType)
                    for (r = t.nodeName.toLowerCase(),
                    n = 0; n < e.length; n++)
                        if (r === e[n])
                            return !0;
                return !1
            }
        }
        function n(e) {
            return function(t) {
                if (r(t)) {
                    if (t.contentEditable === e)
                        return !0;
                    if (t.getAttribute("data-mce-contenteditable") === e)
                        return !0
                }
                return !1
            }
        }
        var r = e(1);
        return {
            isText: e(3),
            isElement: r,
            isComment: e(8),
            isBr: t("br"),
            isContentEditableTrue: n("true"),
            isContentEditableFalse: n("false"),
            matchNodeNames: t,
            hasPropValue: function(e, t) {
                return function(n) {
                    return r(n) && n[e] === t
                }
            },
            hasAttributeValue: function(e, t) {
                return function(n) {
                    return r(n) && n.getAttribute(e) === t
                }
            },
            matchStyleValues: function(e, t) {
                return t = t.toLowerCase().split(" "),
                function(n) {
                    var i;
                    if (r(n))
                        for (i = 0; i < t.length; i++)
                            if (getComputedStyle(n, null).getPropertyValue(e) === t[i])
                                return !0;
                    return !1
                }
            },
            isBogus: function(e) {
                return r(e) && e.hasAttribute("data-mce-bogus")
            }
        }
    }
    )),
    n(E, [], (function() {
        var e = "\ufeff";
        return {
            isZwsp: function(t) {
                return t == e
            },
            ZWSP: e,
            trim: function(t) {
                return t.replace(new RegExp(e,"g"), "")
            }
        }
    }
    )),
    n(N, [w, E], (function(e, t) {
        function n(e) {
            return d(e) && (e = e.parentNode),
            u(e) && e.hasAttribute("data-mce-caret")
        }
        function r(e) {
            return d(e) && t.isZwsp(e.data)
        }
        function i(e) {
            return n(e) || r(e)
        }
        function o(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }
        function a(t) {
            return t.firstChild !== t.lastChild || !e.isBr(t.firstChild)
        }
        function s(e) {
            return d(e) && e.data[0] == t.ZWSP
        }
        function l(e) {
            return d(e) && e.data[e.data.length - 1] == t.ZWSP
        }
        function c(t) {
            var n = t.getElementsByTagName("br")
              , r = n[n.length - 1];
            e.isBogus(r) && r.parentNode.removeChild(r)
        }
        var u = e.isElement
          , d = e.isText;
        return {
            isCaretContainer: i,
            isCaretContainerBlock: n,
            isCaretContainerInline: r,
            showCaretContainerBlock: function(e) {
                return e && e.hasAttribute("data-mce-caret") ? (c(e),
                e.removeAttribute("data-mce-caret"),
                e.removeAttribute("data-mce-bogus"),
                e.removeAttribute("style"),
                e.removeAttribute("_moz_abspos"),
                e) : null
            },
            insertInline: function(e, n) {
                var r, o, a;
                if (o = e.ownerDocument.createTextNode(t.ZWSP),
                a = e.parentNode,
                n) {
                    if (r = e.previousSibling,
                    d(r)) {
                        if (i(r))
                            return r;
                        if (l(r))
                            return r.splitText(r.data.length - 1)
                    }
                    a.insertBefore(o, e)
                } else {
                    if (r = e.nextSibling,
                    d(r)) {
                        if (i(r))
                            return r;
                        if (s(r))
                            return r.splitText(1),
                            r
                    }
                    e.nextSibling ? a.insertBefore(o, e.nextSibling) : a.appendChild(o)
                }
                return o
            },
            insertBlock: function(e, t, n) {
                var r, i;
                return (r = t.ownerDocument.createElement(e)).setAttribute("data-mce-caret", n ? "before" : "after"),
                r.setAttribute("data-mce-bogus", "all"),
                r.appendChild(function() {
                    var e = document.createElement("br");
                    return e.setAttribute("data-mce-bogus", "1"),
                    e
                }()),
                i = t.parentNode,
                n ? i.insertBefore(r, t) : t.nextSibling ? i.insertBefore(r, t.nextSibling) : i.appendChild(r),
                r
            },
            hasContent: a,
            remove: function(e) {
                if (u(e) && i(e) && (a(e) ? e.removeAttribute("data-mce-caret") : o(e)),
                d(e)) {
                    var n = t.trim(function(e) {
                        try {
                            return e.nodeValue
                        } catch (e) {
                            return ""
                        }
                    }(e));
                    !function(e, t) {
                        0 === t.length ? o(e) : e.nodeValue = t
                    }(e, n)
                }
            },
            startsWithCaretContainer: s,
            endsWithCaretContainer: l
        }
    }
    )),
    n(_, [f, m, w, g, N], (function(e, t, n, r, i) {
        function o(e) {
            return f(e) || h(e)
        }
        function a(e, t, n) {
            for (; e && e !== t; ) {
                if (n(e))
                    return e;
                e = e.parentNode
            }
            return null
        }
        function s(e) {
            return "_mce_caret" === e.id
        }
        function l(e, t) {
            return p(e) && !1 === function(e, t, n) {
                return null !== a(e, t, n)
            }(e, t, s)
        }
        function c(e) {
            this.walk = function(t, n) {
                function r(e) {
                    var t;
                    return 3 === (t = e[0]).nodeType && t === m && g >= t.nodeValue.length && e.splice(0, 1),
                    t = e[e.length - 1],
                    0 === y && e.length > 0 && t === v && 3 === t.nodeType && e.splice(e.length - 1, 1),
                    e
                }
                function i(e, t, n) {
                    for (var r = []; e && e != n; e = e[t])
                        r.push(e);
                    return r
                }
                function o(e, t) {
                    do {
                        if (e.parentNode == t)
                            return e;
                        e = e.parentNode
                    } while (e)
                }
                function a(e, t, o) {
                    var a = o ? "nextSibling" : "previousSibling";
                    for (f = (u = e).parentNode; u && u != t; u = f)
                        f = u.parentNode,
                        (h = i(u == e ? u : u[a], a)).length && (o || h.reverse(),
                        n(r(h)))
                }
                var s, l, c, u, f, h, p, m = t.startContainer, g = t.startOffset, v = t.endContainer, y = t.endOffset;
                if ((p = e.select("td[data-mce-selected],th[data-mce-selected]")).length > 0)
                    d(p, (function(e) {
                        n([e])
                    }
                    ));
                else {
                    if (1 == m.nodeType && m.hasChildNodes() && (m = m.childNodes[g]),
                    1 == v.nodeType && v.hasChildNodes() && (v = function(e, t) {
                        var n = e.childNodes;
                        return --t > n.length - 1 ? t = n.length - 1 : t < 0 && (t = 0),
                        n[t] || e
                    }(v, y)),
                    m == v)
                        return n(r([m]));
                    for (s = e.findCommonAncestor(m, v),
                    u = m; u; u = u.parentNode) {
                        if (u === v)
                            return a(m, s, !0);
                        if (u === s)
                            break
                    }
                    for (u = v; u; u = u.parentNode) {
                        if (u === m)
                            return a(v, s);
                        if (u === s)
                            break
                    }
                    l = o(m, s) || m,
                    c = o(v, s) || v,
                    a(m, l, !0),
                    (h = i(l == m ? l : l.nextSibling, "nextSibling", c == v ? c.nextSibling : c)).length && n(r(h)),
                    a(v, c)
                }
            }
            ,
            this.split = function(e) {
                function t(e, t) {
                    return e.splitText(t)
                }
                var n = e.startContainer
                  , r = e.startOffset
                  , i = e.endContainer
                  , o = e.endOffset;
                return n == i && 3 == n.nodeType ? r > 0 && r < n.nodeValue.length && (n = (i = t(n, r)).previousSibling,
                o > r ? (n = i = t(i, o -= r).previousSibling,
                o = i.nodeValue.length,
                r = 0) : o = 0) : (3 == n.nodeType && r > 0 && r < n.nodeValue.length && (n = t(n, r),
                r = 0),
                3 == i.nodeType && o > 0 && o < i.nodeValue.length && (o = (i = t(i, o).previousSibling).nodeValue.length)),
                {
                    startContainer: n,
                    startOffset: r,
                    endContainer: i,
                    endOffset: o
                }
            }
            ,
            this.normalize = function(n) {
                function r(r) {
                    function a(e) {
                        return e && /^(TD|TH|CAPTION)$/.test(e.nodeName)
                    }
                    function s(n, r) {
                        for (var i = new t(n,e.getParent(n.parentNode, e.isBlock) || b); n = i[r ? "prev" : "next"](); )
                            if ("BR" === n.nodeName)
                                return !0
                    }
                    function c(n, r) {
                        var a, s, c;
                        if (r = r || u,
                        c = e.getParent(r.parentNode, e.isBlock) || b,
                        n && "BR" == r.nodeName && y && e.isEmpty(c))
                            return u = r.parentNode,
                            d = e.nodeIndex(r),
                            void (i = !0);
                        for (a = new t(r,c); m = a[n ? "prev" : "next"](); ) {
                            if ("false" === e.getContentEditableParent(m) || l(m, e.getRoot()))
                                return;
                            if (3 === m.nodeType && m.nodeValue.length > 0)
                                return u = m,
                                d = n ? m.nodeValue.length : 0,
                                void (i = !0);
                            if (e.isBlock(m) || g[m.nodeName.toLowerCase()])
                                return;
                            s = m
                        }
                        o && s && (u = s,
                        i = !0,
                        d = 0)
                    }
                    var u, d, f, m, g, v, y, b = e.getRoot();
                    if (u = n[(r ? "start" : "end") + "Container"],
                    d = n[(r ? "start" : "end") + "Offset"],
                    y = 1 == u.nodeType && d === u.childNodes.length,
                    g = e.schema.getNonEmptyElements(),
                    v = r,
                    !p(u)) {
                        if (1 == u.nodeType && d > u.childNodes.length - 1 && (v = !1),
                        9 === u.nodeType && (u = e.getRoot(),
                        d = 0),
                        u === b) {
                            if (v && (m = u.childNodes[d > 0 ? d - 1 : 0])) {
                                if (p(m))
                                    return;
                                if (g[m.nodeName] || "TABLE" == m.nodeName)
                                    return
                            }
                            if (u.hasChildNodes()) {
                                if (d = Math.min(!v && d > 0 ? d - 1 : d, u.childNodes.length - 1),
                                u = u.childNodes[d],
                                d = 0,
                                !o && u === b.lastChild && "TABLE" === u.nodeName)
                                    return;
                                if (function(e) {
                                    for (; e && e != b; ) {
                                        if (h(e))
                                            return !0;
                                        e = e.parentNode
                                    }
                                    return !1
                                }(u) || p(u))
                                    return;
                                if (u.hasChildNodes() && !/TABLE/.test(u.nodeName)) {
                                    m = u,
                                    f = new t(u,b);
                                    do {
                                        if (h(m) || p(m)) {
                                            i = !1;
                                            break
                                        }
                                        if (3 === m.nodeType && m.nodeValue.length > 0) {
                                            d = v ? 0 : m.nodeValue.length,
                                            u = m,
                                            i = !0;
                                            break
                                        }
                                        if (g[m.nodeName.toLowerCase()] && !a(m)) {
                                            d = e.nodeIndex(m),
                                            u = m.parentNode,
                                            "IMG" != m.nodeName || v || d++,
                                            i = !0;
                                            break
                                        }
                                    } while (m = v ? f.next() : f.prev())
                                }
                            }
                        }
                        o && (3 === u.nodeType && 0 === d && c(!0),
                        1 === u.nodeType && ((m = u.childNodes[d]) || (m = u.childNodes[d - 1]),
                        !m || "BR" !== m.nodeName || function(e, t) {
                            return e.previousSibling && e.previousSibling.nodeName == t
                        }(m, "A") || s(m) || s(m, !0) || c(!0, m))),
                        v && !o && 3 === u.nodeType && d === u.nodeValue.length && c(!1),
                        i && n["set" + (r ? "Start" : "End")](u, d)
                    }
                }
                var i, o;
                return o = n.collapsed,
                r(!0),
                o || r(),
                i && o && n.collapse(!0),
                i
            }
        }
        function u(t, n, r) {
            var i, o, a;
            if (i = r.elementFromPoint(t, n),
            o = r.body.createTextRange(),
            i && "HTML" != i.tagName || (i = r.body),
            o.moveToElementText(i),
            a = (a = e.toArray(o.getClientRects())).sort((function(e, t) {
                return (e = Math.abs(Math.max(e.top - n, e.bottom - n))) - (t = Math.abs(Math.max(t.top - n, t.bottom - n)))
            }
            )),
            a.length > 0) {
                n = (a[0].bottom + a[0].top) / 2;
                try {
                    return o.moveToPoint(t, n),
                    o.collapse(!0),
                    o
                } catch (e) {}
            }
            return null
        }
        var d = e.each
          , f = n.isContentEditableTrue
          , h = n.isContentEditableFalse
          , p = i.isCaretContainer;
        return c.compareRanges = function(e, t) {
            if (e && t) {
                if (!e.item && !e.duplicate)
                    return e.startContainer == t.startContainer && e.startOffset == t.startOffset;
                if (e.item && t.item && e.item(0) === t.item(0))
                    return !0;
                if (e.isEqual && t.isEqual && t.isEqual(e))
                    return !0
            }
            return !1
        }
        ,
        c.getCaretRangeFromPoint = function(e, t, n) {
            var r, i;
            if (n.caretPositionFromPoint)
                i = n.caretPositionFromPoint(e, t),
                (r = n.createRange()).setStart(i.offsetNode, i.offset),
                r.collapse(!0);
            else if (n.caretRangeFromPoint)
                r = n.caretRangeFromPoint(e, t);
            else if (n.body.createTextRange) {
                r = n.body.createTextRange();
                try {
                    r.moveToPoint(e, t),
                    r.collapse(!0)
                } catch (i) {
                    r = u(e, t, n)
                }
                return function(e, t) {
                    var n = e && e.parentElement ? e.parentElement() : null;
                    return h(a(n, t, o)) ? null : e
                }(r, n.body)
            }
            return r
        }
        ,
        c.getSelectedNode = function(e) {
            var t = e.startContainer
              , n = e.startOffset;
            return t.hasChildNodes() && e.endOffset == n + 1 ? t.childNodes[n] : null
        }
        ,
        c.getNode = function(e, t) {
            return 1 == e.nodeType && e.hasChildNodes() && (t >= e.childNodes.length && (t = e.childNodes.length - 1),
            e = e.childNodes[t]),
            e
        }
        ,
        c
    }
    )),
    n(S, [_, l, s], (function(e, t, n) {
        return function(r) {
            var i, o = [];
            "onselectionchange"in r.getDoc() || r.on("NodeChange Click MouseUp KeyUp Focus", (function(t) {
                var n, o;
                o = {
                    startContainer: (n = r.selection.getRng()).startContainer,
                    startOffset: n.startOffset,
                    endContainer: n.endContainer,
                    endOffset: n.endOffset
                },
                "nodechange" != t.type && e.compareRanges(o, i) || r.fire("SelectionChange"),
                i = o
            }
            )),
            r.on("contextmenu", (function() {
                r.fire("SelectionChange")
            }
            )),
            r.on("SelectionChange", (function() {
                var e = r.selection.getStart(!0);
                !t.range && r.selection.isCollapsed() || !function(e) {
                    var t, n;
                    if ((n = r.$(e).parentsUntil(r.getBody()).add(e)).length === o.length) {
                        for (t = n.length; t >= 0 && n[t] === o[t]; t--)
                            ;
                        if (-1 === t)
                            return o = n,
                            !0
                    }
                    return o = n,
                    !1
                }(e) && r.dom.isChildOf(e, r.getBody()) && r.nodeChanged({
                    selectionChange: !0
                })
            }
            )),
            r.on("MouseUp", (function(e) {
                e.isDefaultPrevented() || ("IMG" == r.selection.getNode().nodeName ? n.setEditorTimeout(r, (function() {
                    r.nodeChanged()
                }
                )) : r.nodeChanged())
            }
            )),
            this.nodeChanged = function(e) {
                var t, n, i, o = r.selection;
                r.initialized && o && !r.settings.disable_nodechange && !r.readonly && (i = r.getBody(),
                (t = o.getStart() || i).ownerDocument == r.getDoc() && r.dom.isChildOf(t, i) || (t = i),
                "IMG" == t.nodeName && o.isCollapsed() && (t = t.parentNode),
                n = [],
                r.dom.getParent(t, (function(e) {
                    return e === i || void n.push(e)
                }
                )),
                (e = e || {}).element = t,
                e.parents = n,
                r.fire("NodeChange", e))
            }
        }
    }
    )),
    n(k, [], (function() {
        function e(e, t, n) {
            var r, i, o = n ? "lastChild" : "firstChild", a = n ? "prev" : "next";
            if (e[o])
                return e[o];
            if (e !== t) {
                if (r = e[a])
                    return r;
                for (i = e.parent; i && i !== t; i = i.parent)
                    if (r = i[a])
                        return r
            }
        }
        function t(e, t) {
            this.name = e,
            this.type = t,
            1 === t && (this.attributes = [],
            this.attributes.map = {})
        }
        var n = /^[ \t\r\n]*$/
          , r = {
            "#text": 3,
            "#comment": 8,
            "#cdata": 4,
            "#pi": 7,
            "#doctype": 10,
            "#document-fragment": 11
        };
        return t.prototype = {
            replace: function(e) {
                var t = this;
                return e.parent && e.remove(),
                t.insert(e, t),
                t.remove(),
                t
            },
            attr: function(e, t) {
                var n, r, i = this;
                if ("string" != typeof e) {
                    for (r in e)
                        i.attr(r, e[r]);
                    return i
                }
                if (n = i.attributes) {
                    if (undefined !== t) {
                        if (null === t) {
                            if (e in n.map)
                                for (delete n.map[e],
                                r = n.length; r--; )
                                    if (n[r].name === e)
                                        return n = n.splice(r, 1),
                                        i;
                            return i
                        }
                        if (e in n.map) {
                            for (r = n.length; r--; )
                                if (n[r].name === e) {
                                    n[r].value = t;
                                    break
                                }
                        } else
                            n.push({
                                name: e,
                                value: t
                            });
                        return n.map[e] = t,
                        i
                    }
                    return n.map[e]
                }
            },
            clone: function() {
                var e, n, r, i, o, a = this, s = new t(a.name,a.type);
                if (r = a.attributes) {
                    for ((o = []).map = {},
                    e = 0,
                    n = r.length; e < n; e++)
                        "id" !== (i = r[e]).name && (o[o.length] = {
                            name: i.name,
                            value: i.value
                        },
                        o.map[i.name] = i.value);
                    s.attributes = o
                }
                return s.value = a.value,
                s.shortEnded = a.shortEnded,
                s
            },
            wrap: function(e) {
                var t = this;
                return t.parent.insert(e, t),
                e.append(t),
                t
            },
            unwrap: function() {
                var e, t, n = this;
                for (e = n.firstChild; e; )
                    t = e.next,
                    n.insert(e, n, !0),
                    e = t;
                n.remove()
            },
            remove: function() {
                var e = this
                  , t = e.parent
                  , n = e.next
                  , r = e.prev;
                return t && (t.firstChild === e ? (t.firstChild = n,
                n && (n.prev = null)) : r.next = n,
                t.lastChild === e ? (t.lastChild = r,
                r && (r.next = null)) : n.prev = r,
                e.parent = e.next = e.prev = null),
                e
            },
            append: function(e) {
                var t, n = this;
                return e.parent && e.remove(),
                (t = n.lastChild) ? (t.next = e,
                e.prev = t,
                n.lastChild = e) : n.lastChild = n.firstChild = e,
                e.parent = n,
                e
            },
            insert: function(e, t, n) {
                var r;
                return e.parent && e.remove(),
                r = t.parent || this,
                n ? (t === r.firstChild ? r.firstChild = e : t.prev.next = e,
                e.prev = t.prev,
                e.next = t,
                t.prev = e) : (t === r.lastChild ? r.lastChild = e : t.next.prev = e,
                e.next = t.next,
                e.prev = t,
                t.next = e),
                e.parent = r,
                e
            },
            getAll: function(t) {
                var n, r = [];
                for (n = this.firstChild; n; n = e(n, this))
                    n.name === t && r.push(n);
                return r
            },
            empty: function() {
                var t, n, r, i = this;
                if (i.firstChild) {
                    for (t = [],
                    r = i.firstChild; r; r = e(r, i))
                        t.push(r);
                    for (n = t.length; n--; )
                        (r = t[n]).parent = r.firstChild = r.lastChild = r.next = r.prev = null
                }
                return i.firstChild = i.lastChild = null,
                i
            },
            isEmpty: function(t) {
                var r, i, o = this.firstChild;
                if (o)
                    do {
                        if (1 === o.type) {
                            if (o.attributes.map["data-mce-bogus"])
                                continue;
                            if (t[o.name])
                                return !1;
                            for (r = o.attributes.length; r--; )
                                if ("name" === (i = o.attributes[r].name) || 0 === i.indexOf("data-mce-bookmark"))
                                    return !1
                        }
                        if (8 === o.type)
                            return !1;
                        if (3 === o.type && !n.test(o.value))
                            return !1
                    } while (o = e(o, this));
                return !0
            },
            walk: function(t) {
                return e(this, null, t)
            }
        },
        t.create = function(e, n) {
            var i, o;
            if (i = new t(e,r[e] || 1),
            n)
                for (o in n)
                    i.attr(o, n[o]);
            return i
        }
        ,
        t
    }
    )),
    n(T, [f], (function(e) {
        function t(t, n) {
            return (t = e.trim(t)) ? t.split(n || " ") : []
        }
        function n(e) {
            function n(e, n, r) {
                function i(e, t) {
                    var n, r, i = {};
                    for (n = 0,
                    r = e.length; n < r; n++)
                        i[e[n]] = t || {};
                    return i
                }
                var s, l, c;
                for (n = n || "",
                "string" == typeof (r = r || []) && (r = t(r)),
                s = (e = t(e)).length; s--; )
                    c = {
                        attributes: i(l = t([a, n].join(" "))),
                        attributesOrder: l,
                        children: i(r, o)
                    },
                    h[e[s]] = c
            }
            function r(e, n) {
                var r, i, o, a;
                for (r = (e = t(e)).length,
                n = t(n); r--; )
                    for (i = h[e[r]],
                    o = 0,
                    a = n.length; o < a; o++)
                        i.attributes[n[o]] = {},
                        i.attributesOrder.push(n[o])
            }
            var a, l, c, u, d, f, h = {};
            return i[e] ? i[e] : (a = "id accesskey class dir lang style tabindex title",
            l = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul",
            c = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment",
            "html4" != e && (a += " contenteditable contextmenu draggable dropzone hidden spellcheck translate",
            l += " article aside details dialog figure header footer hgroup section nav",
            c += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"),
            "html5-strict" != e && (a += " xml:lang",
            c = [c, f = "acronym applet basefont big font strike tt"].join(" "),
            s(t(f), (function(e) {
                n(e, "", c)
            }
            )),
            l = [l, d = "center dir isindex noframes"].join(" "),
            u = [l, c].join(" "),
            s(t(d), (function(e) {
                n(e, "", u)
            }
            ))),
            u = u || [l, c].join(" "),
            n("html", "manifest", "head body"),
            n("head", "", "base command link meta noscript script style title"),
            n("title hr noscript br"),
            n("base", "href target"),
            n("link", "href rel media hreflang type sizes hreflang"),
            n("meta", "name http-equiv content charset"),
            n("style", "media type scoped"),
            n("script", "src async defer type charset"),
            n("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", u),
            n("address dt dd div caption", "", u),
            n("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", c),
            n("blockquote", "cite", u),
            n("ol", "reversed start type", "li"),
            n("ul", "", "li"),
            n("li", "value", u),
            n("dl", "", "dt dd"),
            n("a", "href target rel media hreflang type", c),
            n("q", "cite", c),
            n("ins del", "cite datetime", u),
            n("img", "src sizes srcset alt usemap ismap width height"),
            n("iframe", "src name width height", u),
            n("embed", "src type width height"),
            n("object", "data type typemustmatch name usemap form width height", [u, "param"].join(" ")),
            n("param", "name value"),
            n("map", "name", [u, "area"].join(" ")),
            n("area", "alt coords shape href target rel media hreflang type"),
            n("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" == e ? " col" : "")),
            n("colgroup", "span", "col"),
            n("col", "span"),
            n("tbody thead tfoot", "", "tr"),
            n("tr", "", "td th"),
            n("td", "colspan rowspan headers", u),
            n("th", "colspan rowspan headers scope abbr", u),
            n("form", "accept-charset action autocomplete enctype method name novalidate target", u),
            n("fieldset", "disabled form name", [u, "legend"].join(" ")),
            n("label", "form for", c),
            n("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),
            n("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" == e ? u : c),
            n("select", "disabled form multiple name required size", "option optgroup"),
            n("optgroup", "disabled label", "option"),
            n("option", "disabled label selected value"),
            n("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"),
            n("menu", "type label", [u, "li"].join(" ")),
            n("noscript", "", u),
            "html4" != e && (n("wbr"),
            n("ruby", "", [c, "rt rp"].join(" ")),
            n("figcaption", "", u),
            n("mark rt rp summary bdi", "", c),
            n("canvas", "width height", u),
            n("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [u, "track source"].join(" ")),
            n("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [u, "track source"].join(" ")),
            n("picture", "", "img source"),
            n("source", "src srcset type media sizes"),
            n("track", "kind src srclang label default"),
            n("datalist", "", [c, "option"].join(" ")),
            n("article section nav aside header footer", "", u),
            n("hgroup", "", "h1 h2 h3 h4 h5 h6"),
            n("figure", "", [u, "figcaption"].join(" ")),
            n("time", "datetime", c),
            n("dialog", "open", u),
            n("command", "type label icon disabled checked radiogroup command"),
            n("output", "for form name", c),
            n("progress", "value max", c),
            n("meter", "value min max low high optimum", c),
            n("details", "open", [u, "summary"].join(" ")),
            n("keygen", "autofocus challenge disabled form keytype name")),
            "html5-strict" != e && (r("script", "language xml:space"),
            r("style", "xml:space"),
            r("object", "declare classid code codebase codetype archive standby align border hspace vspace"),
            r("embed", "align name hspace vspace"),
            r("param", "valuetype type"),
            r("a", "charset name rev shape coords"),
            r("br", "clear"),
            r("applet", "codebase archive code object alt name width height align hspace vspace"),
            r("img", "name longdesc align border hspace vspace"),
            r("iframe", "longdesc frameborder marginwidth marginheight scrolling align"),
            r("font basefont", "size color face"),
            r("input", "usemap align"),
            r("select", "onchange"),
            r("textarea"),
            r("h1 h2 h3 h4 h5 h6 div p legend caption", "align"),
            r("ul", "type compact"),
            r("li", "type"),
            r("ol dl menu dir", "compact"),
            r("pre", "width xml:space"),
            r("hr", "align noshade size width"),
            r("isindex", "prompt"),
            r("table", "summary width frame rules cellspacing cellpadding align bgcolor"),
            r("col", "width align char charoff valign"),
            r("colgroup", "width align char charoff valign"),
            r("thead", "align char charoff valign"),
            r("tr", "align char charoff valign bgcolor"),
            r("th", "axis align char charoff valign nowrap bgcolor width height"),
            r("form", "accept"),
            r("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"),
            r("tfoot", "align char charoff valign"),
            r("tbody", "align char charoff valign"),
            r("area", "nohref"),
            r("body", "background bgcolor text link vlink alink")),
            "html4" != e && (r("input button select textarea", "autofocus"),
            r("input textarea", "placeholder"),
            r("a", "download"),
            r("link script img", "crossorigin"),
            r("iframe", "sandbox seamless allowfullscreen")),
            s(t("a form meter progress dfn"), (function(e) {
                h[e] && delete h[e].children[e]
            }
            )),
            delete h.caption.children.table,
            delete h.script,
            i[e] = h,
            h)
        }
        function r(e, t) {
            var n;
            return e && (n = {},
            "string" == typeof e && (e = {
                "*": e
            }),
            s(e, (function(e, r) {
                n[r] = n[r.toUpperCase()] = "map" == t ? a(e, /[, ]/) : c(e, /[, ]/)
            }
            ))),
            n
        }
        var i = {}
          , o = {}
          , a = e.makeMap
          , s = e.each
          , l = e.extend
          , c = e.explode
          , u = e.inArray;
        return function(e) {
            function o(t, n, r) {
                var o = e[t];
                return o ? o = a(o, /[, ]/, a(o.toUpperCase(), /[, ]/)) : (o = i[t]) || (o = a(n, " ", a(n.toUpperCase(), " ")),
                o = l(o, r),
                i[t] = o),
                o
            }
            function d(e) {
                return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$")
            }
            function f(e) {
                var n, r, i, o, s, l, c, f, h, p, m, g, v, y, b, C, x, w, E, N = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/, _ = /^([!\-])?(\w+::\w+|[^=:<]+)?(?:([=:<])(.*))?$/, S = /[*?+]/;
                if (e)
                    for (e = t(e, ","),
                    B["@"] && (C = B["@"].attributes,
                    x = B["@"].attributesOrder),
                    n = 0,
                    r = e.length; n < r; n++)
                        if (s = N.exec(e[n])) {
                            if (y = s[1],
                            h = s[2],
                            b = s[3],
                            f = s[5],
                            l = {
                                attributes: g = {},
                                attributesOrder: v = []
                            },
                            "#" === y && (l.paddEmpty = !0),
                            "-" === y && (l.removeEmpty = !0),
                            "!" === s[4] && (l.removeEmptyAttrs = !0),
                            C) {
                                for (w in C)
                                    g[w] = C[w];
                                v.push.apply(v, x)
                            }
                            if (f)
                                for (i = 0,
                                o = (f = t(f, "|")).length; i < o; i++)
                                    if (s = _.exec(f[i])) {
                                        if (c = {},
                                        m = s[1],
                                        p = s[2].replace(/::/g, ":"),
                                        y = s[3],
                                        E = s[4],
                                        "!" === m && (l.attributesRequired = l.attributesRequired || [],
                                        l.attributesRequired.push(p),
                                        c.required = !0),
                                        "-" === m) {
                                            delete g[p],
                                            v.splice(u(v, p), 1);
                                            continue
                                        }
                                        y && ("=" === y && (l.attributesDefault = l.attributesDefault || [],
                                        l.attributesDefault.push({
                                            name: p,
                                            value: E
                                        }),
                                        c.defaultValue = E),
                                        ":" === y && (l.attributesForced = l.attributesForced || [],
                                        l.attributesForced.push({
                                            name: p,
                                            value: E
                                        }),
                                        c.forcedValue = E),
                                        "<" === y && (c.validValues = a(E, "?"))),
                                        S.test(p) ? (l.attributePatterns = l.attributePatterns || [],
                                        c.pattern = d(p),
                                        l.attributePatterns.push(c)) : (g[p] || v.push(p),
                                        g[p] = c)
                                    }
                            C || "@" != h || (C = g,
                            x = v),
                            b && (l.outputName = h,
                            B[b] = l),
                            S.test(h) ? (l.pattern = d(h),
                            L.push(l)) : B[h] = l
                        }
            }
            function h(e) {
                B = {},
                L = [],
                f(e),
                s(b, (function(e, t) {
                    D[t] = e.children
                }
                ))
            }
            function p(e) {
                var n = /^(~)?(.+)$/;
                e && (i.text_block_elements = i.block_elements = null,
                s(t(e, ","), (function(e) {
                    var t = n.exec(e)
                      , r = "~" === t[1]
                      , i = r ? "span" : "div"
                      , o = t[2];
                    if (D[o] = D[i],
                    M[o] = i,
                    r || (_[o.toUpperCase()] = {},
                    _[o] = {}),
                    !B[o]) {
                        var a = B[i];
                        delete (a = l({}, a)).removeEmptyAttrs,
                        delete a.removeEmpty,
                        B[o] = a
                    }
                    s(D, (function(e, t) {
                        e[i] && (D[t] = e = l({}, D[t]),
                        e[o] = e[i])
                    }
                    ))
                }
                )))
            }
            function m(n) {
                var r = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
                i[e.schema] = null,
                n && s(t(n, ","), (function(e) {
                    var n, i, o = r.exec(e);
                    o && (i = o[1],
                    n = i ? D[o[2]] : D[o[2]] = {
                        "#comment": {}
                    },
                    n = D[o[2]],
                    s(t(o[3], "|"), (function(e) {
                        "-" === i ? delete n[e] : n[e] = {}
                    }
                    )))
                }
                ))
            }
            function g(e) {
                var t, n = B[e];
                if (n)
                    return n;
                for (t = L.length; t--; )
                    if ((n = L[t]).pattern.test(e))
                        return n
            }
            var v, y, b, C, x, w, E, N, _, S, k, T, R, A = this, B = {}, D = {}, L = [], M = {}, P = {};
            b = n((e = e || {}).schema),
            !1 === e.verify_html && (e.valid_elements = "*[*]"),
            v = r(e.valid_styles),
            y = r(e.invalid_styles, "map"),
            N = r(e.valid_classes, "map"),
            C = o("whitespace_elements", "pre script noscript style textarea video audio iframe object"),
            x = o("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"),
            w = o("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"),
            E = o("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),
            S = o("non_empty_elements", "td th iframe video audio object script", w),
            k = o("move_caret_before_on_enter_elements", "table", S),
            T = o("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside nav figure"),
            _ = o("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption", T),
            R = o("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp"),
            s((e.special || "script noscript style textarea").split(" "), (function(e) {
                P[e] = new RegExp("</" + e + "[^>]*>","gi")
            }
            )),
            e.valid_elements ? h(e.valid_elements) : (s(b, (function(e, t) {
                B[t] = {
                    attributes: e.attributes,
                    attributesOrder: e.attributesOrder
                },
                D[t] = e.children
            }
            )),
            "html5" != e.schema && s(t("strong/b em/i"), (function(e) {
                e = t(e, "/"),
                B[e[1]].outputName = e[0]
            }
            )),
            s(t("ol ul sub sup blockquote span font a table tbody tr strong em b i"), (function(e) {
                B[e] && (B[e].removeEmpty = !0)
            }
            )),
            s(t("p h1 h2 h3 h4 h5 h6 th td pre div address caption"), (function(e) {
                B[e].paddEmpty = !0
            }
            )),
            s(t("span"), (function(e) {
                B[e].removeEmptyAttrs = !0
            }
            ))),
            p(e.custom_elements),
            m(e.valid_children),
            f(e.extended_valid_elements),
            m("+ol[ul|ol],+ul[ul|ol]"),
            s({
                dd: "dl",
                dt: "dl",
                li: "ul ol",
                td: "tr",
                th: "tr",
                tr: "tbody thead tfoot",
                tbody: "table",
                thead: "table",
                tfoot: "table",
                legend: "fieldset",
                area: "map",
                param: "video audio object"
            }, (function(e, n) {
                B[n] && (B[n].parentsRequired = t(e))
            }
            )),
            e.invalid_elements && s(c(e.invalid_elements), (function(e) {
                B[e] && delete B[e]
            }
            )),
            g("span") || f("span[!data-mce-type|*]"),
            A.children = D,
            A.getValidStyles = function() {
                return v
            }
            ,
            A.getInvalidStyles = function() {
                return y
            }
            ,
            A.getValidClasses = function() {
                return N
            }
            ,
            A.getBoolAttrs = function() {
                return E
            }
            ,
            A.getBlockElements = function() {
                return _
            }
            ,
            A.getTextBlockElements = function() {
                return T
            }
            ,
            A.getTextInlineElements = function() {
                return R
            }
            ,
            A.getShortEndedElements = function() {
                return w
            }
            ,
            A.getSelfClosingElements = function() {
                return x
            }
            ,
            A.getNonEmptyElements = function() {
                return S
            }
            ,
            A.getMoveCaretBeforeOnEnterElements = function() {
                return k
            }
            ,
            A.getWhiteSpaceElements = function() {
                return C
            }
            ,
            A.getSpecialElements = function() {
                return P
            }
            ,
            A.isValidChild = function(e, t) {
                var n = D[e];
                return !(!n || !n[t])
            }
            ,
            A.isValid = function(e, t) {
                var n, r, i = g(e);
                if (i) {
                    if (!t)
                        return !0;
                    if (i.attributes[t])
                        return !0;
                    if (n = i.attributePatterns)
                        for (r = n.length; r--; )
                            if (n[r].pattern.test(e))
                                return !0
                }
                return !1
            }
            ,
            A.getElementRule = g,
            A.getCustomElements = function() {
                return M
            }
            ,
            A.addValidElements = f,
            A.setValidElements = h,
            A.addCustomElements = p,
            A.addValidChildren = m,
            A.elements = B
        }
    }
    )),
    n(R, [T, v, f], (function(e, t, n) {
        function r(e, t, n) {
            var r, i, o, a, s = 1;
            for (a = e.getShortEndedElements(),
            (o = /<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g).lastIndex = r = n; i = o.exec(t); ) {
                if (r = o.lastIndex,
                "/" === i[1])
                    s--;
                else if (!i[1]) {
                    if (i[2]in a)
                        continue;
                    s++
                }
                if (0 === s)
                    break
            }
            return r
        }
        function i(i, a) {
            function s() {}
            var l = this;
            i = i || {},
            l.schema = a = a || new e,
            !1 !== i.fix_self_closing && (i.fix_self_closing = !0),
            o("comment cdata text start end pi doctype".split(" "), (function(e) {
                e && (l[e] = i[e] || s)
            }
            )),
            l.parse = function(e) {
                function o(e) {
                    var t, n;
                    for (t = I.length; t-- && I[t].name !== e; )
                        ;
                    if (t >= 0) {
                        for (n = I.length - 1; n >= t; n--)
                            (e = I[n]).valid && O.end(e.name);
                        I.length = t
                    }
                }
                function s(e, t, n, r, o) {
                    var a, s;
                    if (n = (t = t.toLowerCase())in y ? t : z(n || r || o || ""),
                    C && !m && 0 !== t.indexOf("data-")) {
                        if (!(a = _[t]) && S) {
                            for (s = S.length; s-- && !(a = S[s]).pattern.test(t); )
                                ;
                            -1 === s && (a = null)
                        }
                        if (!a)
                            return;
                        if (a.validValues && !(n in a.validValues))
                            return
                    }
                    if (U[t] && !i.allow_script_urls) {
                        var l = n.replace(/[\s\u0000-\u001F]+/g, "");
                        try {
                            l = decodeURIComponent(l)
                        } catch (e) {
                            l = unescape(l)
                        }
                        if (W.test(l))
                            return;
                        if (!i.allow_html_data_urls && V.test(l) && !/^data:image\//i.test(l))
                            return
                    }
                    d.map[t] = n,
                    d.push({
                        name: t,
                        value: n
                    })
                }
                var l, c, u, d, f, h, p, m, g, v, y, b, C, x, w, E, N, _, S, k, T, R, A, B, D, L, M, P, O = this, H = 0, I = [], F = 0, z = t.decode, U = n.makeMap("src,href,data,background,formaction,poster"), W = /((java|vb)script|mhtml):/i, V = /^data:/i;
                for (B = new RegExp("<(?:(?:!--([\\w\\W]*?)--\x3e)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([^>]+)>)|(?:([A-Za-z0-9\\-_\\:\\.]+)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))","g"),
                D = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,
                v = a.getShortEndedElements(),
                A = i.self_closing_elements || a.getSelfClosingElements(),
                y = a.getBoolAttrs(),
                C = i.validate,
                g = i.remove_internals,
                P = i.fix_self_closing,
                L = a.getSpecialElements(); l = B.exec(e); ) {
                    if (H < l.index && O.text(z(e.substr(H, l.index - H))),
                    c = l[6])
                        ":" === (c = c.toLowerCase()).charAt(0) && (c = c.substr(1)),
                        o(c);
                    else if (c = l[7]) {
                        if (":" === (c = c.toLowerCase()).charAt(0) && (c = c.substr(1)),
                        b = c in v,
                        P && A[c] && I.length > 0 && I[I.length - 1].name === c && o(c),
                        !C || (x = a.getElementRule(c))) {
                            if (w = !0,
                            C && (_ = x.attributes,
                            S = x.attributePatterns),
                            (N = l[8]) ? ((m = -1 !== N.indexOf("data-mce-type")) && g && (w = !1),
                            (d = []).map = {},
                            N.replace(D, s)) : (d = []).map = {},
                            C && !m) {
                                if (k = x.attributesRequired,
                                T = x.attributesDefault,
                                R = x.attributesForced,
                                x.removeEmptyAttrs && !d.length && (w = !1),
                                R)
                                    for (f = R.length; f--; )
                                        p = (E = R[f]).name,
                                        "{$uid}" === (M = E.value) && (M = "mce_" + F++),
                                        d.map[p] = M,
                                        d.push({
                                            name: p,
                                            value: M
                                        });
                                if (T)
                                    for (f = T.length; f--; )
                                        (p = (E = T[f]).name)in d.map || ("{$uid}" === (M = E.value) && (M = "mce_" + F++),
                                        d.map[p] = M,
                                        d.push({
                                            name: p,
                                            value: M
                                        }));
                                if (k) {
                                    for (f = k.length; f-- && !(k[f]in d.map); )
                                        ;
                                    -1 === f && (w = !1)
                                }
                                if (E = d.map["data-mce-bogus"]) {
                                    if ("all" === E) {
                                        H = r(a, e, B.lastIndex),
                                        B.lastIndex = H;
                                        continue
                                    }
                                    w = !1
                                }
                            }
                            w && O.start(c, d, b)
                        } else
                            w = !1;
                        if (u = L[c]) {
                            u.lastIndex = H = l.index + l[0].length,
                            (l = u.exec(e)) ? (w && (h = e.substr(H, l.index - H)),
                            H = l.index + l[0].length) : (h = e.substr(H),
                            H = e.length),
                            w && (h.length > 0 && O.text(h, !0),
                            O.end(c)),
                            B.lastIndex = H;
                            continue
                        }
                        b || (N && N.indexOf("/") == N.length - 1 ? w && O.end(c) : I.push({
                            name: c,
                            valid: w
                        }))
                    } else
                        (c = l[1]) ? (">" === c.charAt(0) && (c = " " + c),
                        i.allow_conditional_comments || "[if" !== c.substr(0, 3).toLowerCase() || (c = " " + c),
                        O.comment(c)) : (c = l[2]) ? O.cdata(c) : (c = l[3]) ? O.doctype(c) : (c = l[4]) && O.pi(c, l[5]);
                    H = l.index + l[0].length
                }
                for (H < e.length && O.text(z(e.substr(H))),
                f = I.length - 1; f >= 0; f--)
                    (c = I[f]).valid && O.end(c.name)
            }
        }
        var o = n.each;
        return i.findEndTag = r,
        i
    }
    )),
    n(A, [k, T, R, f], (function(e, t, n, r) {
        var i = r.makeMap
          , o = r.each
          , a = r.explode
          , s = r.extend;
        return function(l, c) {
            function u(t) {
                var n, r, o, a, s, l, u, f, h, p, m, g, v, y, b;
                for (m = i("tr,td,th,tbody,thead,tfoot,table"),
                p = c.getNonEmptyElements(),
                g = c.getTextBlockElements(),
                v = c.getSpecialElements(),
                n = 0; n < t.length; n++)
                    if ((r = t[n]).parent && !r.fixed)
                        if (g[r.name] && "li" == r.parent.name) {
                            for (y = r.next; y && g[y.name]; )
                                y.name = "li",
                                y.fixed = !0,
                                r.parent.insert(y, r.parent),
                                y = y.next;
                            r.unwrap(r)
                        } else {
                            for (a = [r],
                            o = r.parent; o && !c.isValidChild(o.name, r.name) && !m[o.name]; o = o.parent)
                                a.push(o);
                            if (o && a.length > 1) {
                                for (a.reverse(),
                                s = l = d.filterNode(a[0].clone()),
                                h = 0; h < a.length - 1; h++) {
                                    for (c.isValidChild(l.name, a[h].name) ? (u = d.filterNode(a[h].clone()),
                                    l.append(u)) : u = l,
                                    f = a[h].firstChild; f && f != a[h + 1]; )
                                        b = f.next,
                                        u.append(f),
                                        f = b;
                                    l = u
                                }
                                s.isEmpty(p) ? o.insert(r, a[0], !0) : (o.insert(s, a[0], !0),
                                o.insert(r, s)),
                                ((o = a[0]).isEmpty(p) || o.firstChild === o.lastChild && "br" === o.firstChild.name) && o.empty().remove()
                            } else if (r.parent) {
                                if ("li" === r.name) {
                                    if ((y = r.prev) && ("ul" === y.name || "ul" === y.name)) {
                                        y.append(r);
                                        continue
                                    }
                                    if ((y = r.next) && ("ul" === y.name || "ul" === y.name)) {
                                        y.insert(r, y.firstChild, !0);
                                        continue
                                    }
                                    r.wrap(d.filterNode(new e("ul",1)));
                                    continue
                                }
                                c.isValidChild(r.parent.name, "div") && c.isValidChild("div", r.name) ? r.wrap(d.filterNode(new e("div",1))) : v[r.name] ? r.empty().remove() : r.unwrap()
                            }
                        }
            }
            var d = this
              , f = {}
              , h = []
              , p = {}
              , m = {};
            (l = l || {}).validate = !("validate"in l) || l.validate,
            l.root_name = l.root_name || "body",
            d.schema = c = c || new t,
            d.filterNode = function(e) {
                var t, n, r;
                n in f && ((r = p[n]) ? r.push(e) : p[n] = [e]),
                t = h.length;
                for (; t--; )
                    (n = h[t].name)in e.attributes.map && ((r = m[n]) ? r.push(e) : m[n] = [e]);
                return e
            }
            ,
            d.addNodeFilter = function(e, t) {
                o(a(e), (function(e) {
                    var n = f[e];
                    n || (f[e] = n = []),
                    n.push(t)
                }
                ))
            }
            ,
            d.addAttributeFilter = function(e, t) {
                o(a(e), (function(e) {
                    var n;
                    for (n = 0; n < h.length; n++)
                        if (h[n].name === e)
                            return void h[n].callbacks.push(t);
                    h.push({
                        name: e,
                        callbacks: [t]
                    })
                }
                ))
            }
            ,
            d.parse = function(t, r) {
                function o(t, n) {
                    var r, i = new e(t,n);
                    return t in f && ((r = p[t]) ? r.push(i) : p[t] = [i]),
                    i
                }
                function a(e) {
                    var t, n, r, i, o = c.getBlockElements();
                    for (t = e.prev; t && 3 === t.type; ) {
                        if ((r = t.value.replace(R, "")).length > 0)
                            return void (t.value = r);
                        if (n = t.next) {
                            if (3 == n.type && n.value.length) {
                                t = t.prev;
                                continue
                            }
                            if (!o[n.name] && "script" != n.name && "style" != n.name) {
                                t = t.prev;
                                continue
                            }
                        }
                        i = t.prev,
                        t.remove(),
                        t = i
                    }
                }
                var d, g, v, y, b, C, x, w, E, N, _, S, k, T, R, A, B, D, L, M, P, O = [];
                if (r = r || {},
                p = {},
                m = {},
                S = s(i("script,style,head,html,body,title,meta,param"), c.getBlockElements()),
                M = c.getNonEmptyElements(),
                L = c.children,
                _ = l.validate,
                P = "forced_root_block"in r ? r.forced_root_block : l.forced_root_block,
                D = c.getWhiteSpaceElements(),
                k = /^[ \t\r\n]+/,
                R = /[ \t\r\n]+$/,
                A = /[ \t\r\n]+/g,
                B = /^[ \t\r\n]+$/,
                d = new n({
                    validate: _,
                    allow_script_urls: l.allow_script_urls,
                    allow_conditional_comments: l.allow_conditional_comments,
                    self_closing_elements: function(e) {
                        var t, n = {};
                        for (t in e)
                            "li" !== t && "p" != t && (n[t] = e[t]);
                        return n
                    }(c.getSelfClosingElements()),
                    cdata: function(e) {
                        v.append(o("#cdata", 4)).value = e
                    },
                    text: function(e, t) {
                        var n;
                        T || (e = e.replace(A, " "),
                        v.lastChild && S[v.lastChild.name] && (e = e.replace(k, ""))),
                        0 !== e.length && ((n = o("#text", 3)).raw = !!t,
                        v.append(n).value = e)
                    },
                    comment: function(e) {
                        v.append(o("#comment", 8)).value = e
                    },
                    pi: function(e, t) {
                        v.append(o(e, 7)).value = t,
                        a(v)
                    },
                    doctype: function(e) {
                        v.append(o("#doctype", 10)).value = e,
                        a(v)
                    },
                    start: function(e, t, n) {
                        var r, i, s, l, u;
                        if (s = _ ? c.getElementRule(e) : {}) {
                            for ((r = o(s.outputName || e, 1)).attributes = t,
                            r.shortEnded = n,
                            v.append(r),
                            (u = L[v.name]) && L[r.name] && !u[r.name] && O.push(r),
                            i = h.length; i--; )
                                (l = h[i].name)in t.map && ((E = m[l]) ? E.push(r) : m[l] = [r]);
                            S[e] && a(r),
                            n || (v = r),
                            !T && D[e] && (T = !0)
                        }
                    },
                    end: function(t) {
                        var n, r, i, o, a;
                        if (r = _ ? c.getElementRule(t) : {}) {
                            if (S[t] && !T) {
                                if ((n = v.firstChild) && 3 === n.type)
                                    if ((i = n.value.replace(k, "")).length > 0)
                                        n.value = i,
                                        n = n.next;
                                    else
                                        for (o = n.next,
                                        n.remove(),
                                        n = o; n && 3 === n.type; )
                                            i = n.value,
                                            o = n.next,
                                            (0 === i.length || B.test(i)) && (n.remove(),
                                            n = o),
                                            n = o;
                                if ((n = v.lastChild) && 3 === n.type)
                                    if ((i = n.value.replace(R, "")).length > 0)
                                        n.value = i,
                                        n = n.prev;
                                    else
                                        for (o = n.prev,
                                        n.remove(),
                                        n = o; n && 3 === n.type; )
                                            i = n.value,
                                            o = n.prev,
                                            (0 === i.length || B.test(i)) && (n.remove(),
                                            n = o),
                                            n = o
                            }
                            if (T && D[t] && (T = !1),
                            (r.removeEmpty || r.paddEmpty) && v.isEmpty(M))
                                if (r.paddEmpty)
                                    v.empty().append(new e("#text","3")).value = " ";
                                else if (!v.attributes.map.name && !v.attributes.map.id)
                                    return a = v.parent,
                                    S[v.name] ? v.empty().remove() : v.unwrap(),
                                    void (v = a);
                            v = v.parent
                        }
                    }
                },c),
                g = v = new e(r.context || l.root_name,11),
                d.parse(t),
                _ && O.length && (r.context ? r.invalid = !0 : u(O)),
                P && ("body" == g.name || r.isRootContent) && function() {
                    function e(e) {
                        e && ((r = e.firstChild) && 3 == r.type && (r.value = r.value.replace(k, "")),
                        (r = e.lastChild) && 3 == r.type && (r.value = r.value.replace(R, "")))
                    }
                    var t, n, r = g.firstChild;
                    if (c.isValidChild(g.name, P.toLowerCase())) {
                        for (; r; )
                            t = r.next,
                            3 == r.type || 1 == r.type && "p" !== r.name && !S[r.name] && !r.attr("data-mce-type") ? (n || ((n = o(P, 1)).attr(l.forced_root_block_attrs),
                            g.insert(n, r)),
                            n.append(r)) : (e(n),
                            n = null),
                            r = t;
                        e(n)
                    }
                }(),
                !r.invalid) {
                    for (N in p) {
                        for (E = f[N],
                        x = (y = p[N]).length; x--; )
                            y[x].parent || y.splice(x, 1);
                        for (b = 0,
                        C = E.length; b < C; b++)
                            E[b](y, N, r)
                    }
                    for (b = 0,
                    C = h.length; b < C; b++)
                        if ((E = h[b]).name in m) {
                            for (x = (y = m[E.name]).length; x--; )
                                y[x].parent || y.splice(x, 1);
                            for (x = 0,
                            w = E.callbacks.length; x < w; x++)
                                E.callbacks[x](y, E.name, r)
                        }
                }
                return g
            }
            ,
            l.remove_trailing_brs && d.addNodeFilter("br", (function(t) {
                var n, r, i, o, a, l, u, d, f = t.length, h = s({}, c.getBlockElements()), p = c.getNonEmptyElements();
                for (h.body = 1,
                n = 0; n < f; n++)
                    if (i = (r = t[n]).parent,
                    h[r.parent.name] && r === i.lastChild) {
                        for (a = r.prev; a; ) {
                            if ("span" !== (l = a.name) || "bookmark" !== a.attr("data-mce-type")) {
                                if ("br" !== l)
                                    break;
                                if ("br" === l) {
                                    r = null;
                                    break
                                }
                            }
                            a = a.prev
                        }
                        r && (r.remove(),
                        i.isEmpty(p) && ((u = c.getElementRule(i.name)) && (u.removeEmpty ? i.remove() : u.paddEmpty && (i.empty().append(new e("#text",3)).value = " "))))
                    } else {
                        for (o = r; i && i.firstChild === o && i.lastChild === o && (o = i,
                        !h[i.name]); )
                            i = i.parent;
                        o === i && ((d = new e("#text",3)).value = " ",
                        r.replace(d))
                    }
            }
            )),
            l.allow_unsafe_link_target || d.addAttributeFilter("href", (function(e) {
                function t(e) {
                    var t = new RegExp("(" + s.replace(" ", "|") + ")","g");
                    return e && (e = r.trim(e.replace(t, ""))),
                    e || null
                }
                function n(e, n) {
                    return n ? function(e) {
                        return (e = t(e)) ? [e, s].join(" ") : s
                    }(e) : t(e)
                }
                for (var i, o, a = e.length, s = "noopener noreferrer"; a--; )
                    o = (i = e[a]).attr("rel"),
                    "a" === i.name && i.attr("rel", n(o, "_blank" == i.attr("target")))
            }
            )),
            l.allow_html_in_named_anchor || d.addAttributeFilter("id,name", (function(e) {
                for (var t, n, r, i, o = e.length; o--; )
                    if ("a" === (i = e[o]).name && i.firstChild && !i.attr("href")) {
                        r = i.parent,
                        t = i.lastChild;
                        do {
                            n = t.prev,
                            r.insert(t, i),
                            t = n
                        } while (t)
                    }
            }
            )),
            l.validate && c.getValidClasses() && d.addAttributeFilter("class", (function(e) {
                for (var t, n, r, i, o, a, s, l = e.length, u = c.getValidClasses(); l--; ) {
                    for (n = (t = e[l]).attr("class").split(" "),
                    o = "",
                    r = 0; r < n.length; r++)
                        i = n[r],
                        s = !1,
                        (a = u["*"]) && a[i] && (s = !0),
                        a = u[t.name],
                        !s && a && a[i] && (s = !0),
                        s && (o && (o += " "),
                        o += i);
                    o.length || (o = null),
                    t.attr("class", o)
                }
            }
            ))
        }
    }
    )),
    n(B, [v, f], (function(e, t) {
        var n = t.makeMap;
        return function(t) {
            var r, i, o, a, s, l = [];
            return r = (t = t || {}).indent,
            i = n(t.indent_before || ""),
            o = n(t.indent_after || ""),
            a = e.getEncodeFunc(t.entity_encoding || "raw", t.entities),
            s = "html" == t.element_format,
            {
                start: function(e, t, n) {
                    var c, u, d, f;
                    if (r && i[e] && l.length > 0 && ((f = l[l.length - 1]).length > 0 && "\n" !== f && l.push("\n")),
                    l.push("<", e),
                    t)
                        for (c = 0,
                        u = t.length; c < u; c++)
                            d = t[c],
                            l.push(" ", d.name, '="', a(d.value, !0), '"');
                    l[l.length] = !n || s ? ">" : " />",
                    n && r && o[e] && l.length > 0 && ((f = l[l.length - 1]).length > 0 && "\n" !== f && l.push("\n"))
                },
                end: function(e) {
                    var t;
                    l.push("</", e, ">"),
                    r && o[e] && l.length > 0 && ((t = l[l.length - 1]).length > 0 && "\n" !== t && l.push("\n"))
                },
                text: function(e, t) {
                    e.length > 0 && (l[l.length] = t ? e : a(e))
                },
                cdata: function(e) {
                    l.push("<![CDATA[", e, "]]>")
                },
                comment: function(e) {
                    l.push("\x3c!--", e, "--\x3e")
                },
                pi: function(e, t) {
                    t ? l.push("<?", e, " ", a(t), "?>") : l.push("<?", e, "?>"),
                    r && l.push("\n")
                },
                doctype: function(e) {
                    l.push("<!DOCTYPE", e, ">", r ? "\n" : "")
                },
                reset: function() {
                    l.length = 0
                },
                getContent: function() {
                    return l.join("").replace(/\n$/, "")
                }
            }
        }
    }
    )),
    n(D, [B, T], (function(e, t) {
        return function(n, r) {
            var i = this
              , o = new e(n);
            (n = n || {}).validate = !("validate"in n) || n.validate,
            i.schema = r = r || new t,
            i.writer = o,
            i.serialize = function(e) {
                function t(e) {
                    var n, s, l, c, u, d, f, h, p, m = i[e.type];
                    if (m)
                        m(e);
                    else {
                        if (n = e.name,
                        s = e.shortEnded,
                        l = e.attributes,
                        a && l && l.length > 1 && ((d = []).map = {},
                        p = r.getElementRule(e.name))) {
                            for (f = 0,
                            h = p.attributesOrder.length; f < h; f++)
                                (c = p.attributesOrder[f])in l.map && (u = l.map[c],
                                d.map[c] = u,
                                d.push({
                                    name: c,
                                    value: u
                                }));
                            for (f = 0,
                            h = l.length; f < h; f++)
                                (c = l[f].name)in d.map || (u = l.map[c],
                                d.map[c] = u,
                                d.push({
                                    name: c,
                                    value: u
                                }));
                            l = d
                        }
                        if (o.start(e.name, l, s),
                        !s) {
                            if (e = e.firstChild)
                                do {
                                    t(e)
                                } while (e = e.next);
                            o.end(n)
                        }
                    }
                }
                var i, a;
                return a = n.validate,
                i = {
                    3: function(e) {
                        o.text(e.value, e.raw)
                    },
                    8: function(e) {
                        o.comment(e.value)
                    },
                    7: function(e) {
                        o.pi(e.name, e.value)
                    },
                    10: function(e) {
                        o.doctype(e.value)
                    },
                    4: function(e) {
                        o.cdata(e.value)
                    },
                    11: function(e) {
                        if (e = e.firstChild)
                            do {
                                t(e)
                            } while (e = e.next)
                    }
                },
                o.reset(),
                1 != e.type || n.inner ? i[11](e) : t(e),
                o.getContent()
            }
        }
    }
    )),
    n(L, [b, A, R, v, D, k, T, l, f, E], (function(e, t, n, r, i, o, a, s, l, c) {
        var u = l.each
          , d = l.trim
          , f = e.DOM;
        return function(e, o) {
            function h(e) {
                var t = new RegExp(["<span[^>]+data-mce-bogus[^>]+>[​\ufeff]+<\\/span>", "\\s?(" + y.join("|") + ')="[^"]+"'].join("|"),"gi");
                return c.trim(e.replace(t, ""))
            }
            function p(e) {
                var t, r, i, a, s, l = e, c = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g, u = o.schema;
                for (l = h(l),
                s = u.getShortEndedElements(); a = c.exec(l); )
                    r = c.lastIndex,
                    i = a[0].length,
                    t = s[a[1]] ? r : n.findEndTag(u, l, r),
                    l = l.substring(0, r - i) + l.substring(t),
                    c.lastIndex = r - i;
                return d(l)
            }
            var m, g, v, y = ["data-mce-selected"];
            return o && (m = o.dom,
            g = o.schema),
            m = m || f,
            g = g || new a(e),
            e.entity_encoding = e.entity_encoding || "named",
            e.remove_trailing_brs = !("remove_trailing_brs"in e) || e.remove_trailing_brs,
            (v = new t(e,g)).addAttributeFilter("data-mce-tabindex", (function(e, t) {
                for (var n, r = e.length; r--; )
                    (n = e[r]).attr("tabindex", n.attributes.map["data-mce-tabindex"]),
                    n.attr(t, null)
            }
            )),
            v.addAttributeFilter("src,href,style", (function(t, n) {
                for (var r, i, o = t.length, a = "data-mce-" + n, s = e.url_converter, l = e.url_converter_scope; o--; )
                    undefined !== (i = (r = t[o]).attributes.map[a]) ? (r.attr(n, i.length > 0 ? i : null),
                    r.attr(a, null)) : (i = r.attributes.map[n],
                    "style" === n ? i = m.serializeStyle(m.parseStyle(i), r.name) : s && (i = s.call(l, i, n, r.name)),
                    r.attr(n, i.length > 0 ? i : null))
            }
            )),
            v.addAttributeFilter("class", (function(e) {
                for (var t, n, r = e.length; r--; )
                    (n = (t = e[r]).attr("class")) && (n = t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""),
                    t.attr("class", n.length > 0 ? n : null))
            }
            )),
            v.addAttributeFilter("data-mce-type", (function(e, t, n) {
                for (var r, i = e.length; i--; )
                    "bookmark" !== (r = e[i]).attributes.map["data-mce-type"] || n.cleanup || r.remove()
            }
            )),
            v.addNodeFilter("noscript", (function(e) {
                for (var t, n = e.length; n--; )
                    (t = e[n].firstChild) && (t.value = r.decode(t.value))
            }
            )),
            v.addNodeFilter("script,style", (function(e, t) {
                function n(e) {
                    return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "")
                }
                for (var r, i, o, a = e.length; a--; )
                    i = (r = e[a]).firstChild ? r.firstChild.value : "",
                    "script" === t ? ((o = r.attr("type")) && r.attr("type", "mce-no/type" == o ? null : o.replace(/^mce\-/, "")),
                    i.length > 0 && (r.firstChild.value = "// <![CDATA[\n" + n(i) + "\n// ]]>")) : i.length > 0 && (r.firstChild.value = "\x3c!--\n" + n(i) + "\n--\x3e")
            }
            )),
            v.addNodeFilter("#comment", (function(e) {
                for (var t, n = e.length; n--; )
                    0 === (t = e[n]).value.indexOf("[CDATA[") ? (t.name = "#cdata",
                    t.type = 4,
                    t.value = t.value.replace(/^\[CDATA\[|\]\]$/g, "")) : 0 === t.value.indexOf("mce:protected ") && (t.name = "#text",
                    t.type = 3,
                    t.raw = !0,
                    t.value = unescape(t.value).substr(14))
            }
            )),
            v.addNodeFilter("xml:namespace,input", (function(e, t) {
                for (var n, r = e.length; r--; )
                    7 === (n = e[r]).type ? n.remove() : 1 === n.type && ("input" !== t || "type"in n.attributes.map || n.attr("type", "text"))
            }
            )),
            e.fix_list_elements && v.addNodeFilter("ul,ol", (function(e) {
                for (var t, n, r = e.length; r--; )
                    "ul" !== (n = (t = e[r]).parent).name && "ol" !== n.name || t.prev && "li" === t.prev.name && t.prev.append(t)
            }
            )),
            v.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize", (function(e, t) {
                for (var n = e.length; n--; )
                    e[n].attr(t, null)
            }
            )),
            {
                schema: g,
                addNodeFilter: v.addNodeFilter,
                addAttributeFilter: v.addAttributeFilter,
                serialize: function(t, n) {
                    var r, o, a, l, f, h;
                    return s.ie && m.select("script,style,select,map").length > 0 ? (f = t.innerHTML,
                    t = t.cloneNode(!1),
                    m.setHTML(t, f)) : t = t.cloneNode(!0),
                    (r = document.implementation).createHTMLDocument && (o = r.createHTMLDocument(""),
                    u("BODY" == t.nodeName ? t.childNodes : [t], (function(e) {
                        o.body.appendChild(o.importNode(e, !0))
                    }
                    )),
                    t = "BODY" != t.nodeName ? o.body.firstChild : o.body,
                    a = m.doc,
                    m.doc = o),
                    (n = n || {}).format = n.format || "html",
                    n.selection && (n.forced_root_block = ""),
                    n.no_events || (n.node = t,
                    this.onPreProcess(n)),
                    function(e) {
                        function t(e) {
                            return e && "br" === e.name
                        }
                        var n, r;
                        t(n = e.lastChild) && t(r = n.prev) && (n.remove(),
                        r.remove())
                    }(h = v.parse(d(n.getInner ? t.innerHTML : m.getOuterHTML(t)), n)),
                    l = new i(e,g),
                    n.content = l.serialize(h),
                    n.cleanup || (n.content = c.trim(n.content),
                    n.content = n.content.replace(/\uFEFF/g, "")),
                    n.no_events || this.onPostProcess(n),
                    a && (m.doc = a),
                    n.node = null,
                    n.content
                },
                addRules: function(e) {
                    g.addValidElements(e)
                },
                setRules: function(e) {
                    g.setValidElements(e)
                },
                onPreProcess: function(e) {
                    o && o.fire("PreProcess", e)
                },
                onPostProcess: function(e) {
                    o && o.fire("PostProcess", e)
                },
                addTempAttr: function(e) {
                    -1 === l.inArray(y, e) && (v.addAttributeFilter(e, (function(e, t) {
                        for (var n = e.length; n--; )
                            e[n].attr(t, null)
                    }
                    )),
                    y.push(e))
                },
                trimHtml: h,
                getTrimmedContent: function() {
                    return p(o.getBody().innerHTML)
                },
                trimContent: p
            }
        }
    }
    )),
    n(M, [], (function() {
        return function(e) {
            function t(t, n) {
                var r, i, o, a, s, l, c, u, d = 0, f = -1;
                if ((r = t.duplicate()).collapse(n),
                (u = r.parentElement()).ownerDocument === e.dom.doc) {
                    for (; "false" === u.contentEditable; )
                        u = u.parentNode;
                    if (!u.hasChildNodes())
                        return {
                            node: u,
                            inside: 1
                        };
                    for (i = (a = u.children).length - 1; d <= i; )
                        if (s = a[c = Math.floor((d + i) / 2)],
                        r.moveToElementText(s),
                        (f = r.compareEndPoints(n ? "StartToStart" : "EndToEnd", t)) > 0)
                            i = c - 1;
                        else {
                            if (!(f < 0))
                                return {
                                    node: s
                                };
                            d = c + 1
                        }
                    if (f < 0)
                        for (s ? r.collapse(!1) : (r.moveToElementText(u),
                        r.collapse(!0),
                        s = u,
                        o = !0),
                        l = 0; 0 !== r.compareEndPoints(n ? "StartToStart" : "StartToEnd", t) && 0 !== r.move("character", 1) && u == r.parentElement(); )
                            l++;
                    else
                        for (r.collapse(!0),
                        l = 0; 0 !== r.compareEndPoints(n ? "StartToStart" : "StartToEnd", t) && 0 !== r.move("character", -1) && u == r.parentElement(); )
                            l++;
                    return {
                        node: s,
                        position: f,
                        offset: l,
                        inside: o
                    }
                }
            }
            var n = this
              , r = e.dom
              , i = !1;
            this.getBookmark = function(n) {
                function i(e) {
                    var t, n, i, o, a = [];
                    for (t = e.parentNode,
                    n = r.getRoot().parentNode; t != n && 9 !== t.nodeType; ) {
                        for (o = (i = t.children).length; o--; )
                            if (e === i[o]) {
                                a.push(o);
                                break
                            }
                        e = t,
                        t = t.parentNode
                    }
                    return a
                }
                function o(e) {
                    var n;
                    if (n = t(a, e))
                        return {
                            position: n.position,
                            offset: n.offset,
                            indexes: i(n.node),
                            inside: n.inside
                        }
                }
                var a = e.getRng()
                  , s = {};
                return 2 === n && (a.item ? s.start = {
                    ctrl: !0,
                    indexes: i(a.item(0))
                } : (s.start = o(!0),
                e.isCollapsed() || (s.end = o()))),
                s
            }
            ,
            this.moveToBookmark = function(e) {
                function t(e) {
                    var t, n, i, o;
                    for (t = r.getRoot(),
                    n = e.length - 1; n >= 0; n--)
                        o = t.children,
                        (i = e[n]) <= o.length - 1 && (t = o[i]);
                    return t
                }
                function n(n) {
                    var r, a, s, l = e[n ? "start" : "end"];
                    l && (r = l.position > 0,
                    (a = o.createTextRange()).moveToElementText(t(l.indexes)),
                    undefined !== (s = l.offset) ? (a.collapse(l.inside || r),
                    a.moveStart("character", r ? -s : s)) : a.collapse(n),
                    i.setEndPoint(n ? "StartToStart" : "EndToStart", a),
                    n && i.collapse(!0))
                }
                var i, o = r.doc.body;
                e.start && (e.start.ctrl ? ((i = o.createControlRange()).addElement(t(e.start.indexes)),
                i.select()) : (i = o.createTextRange(),
                n(!0),
                n(),
                i.select()))
            }
            ,
            this.addRange = function(t) {
                function n(e) {
                    var t, n, a, d, f;
                    a = r.create("a"),
                    t = e ? s : c,
                    n = e ? l : u,
                    d = o.duplicate(),
                    t != p && t != p.documentElement || (t = m,
                    n = 0),
                    3 == t.nodeType ? (t.parentNode.insertBefore(a, t),
                    d.moveToElementText(a),
                    d.moveStart("character", n),
                    r.remove(a),
                    o.setEndPoint(e ? "StartToStart" : "EndToEnd", d)) : ((f = t.childNodes).length ? (n >= f.length ? r.insertAfter(a, f[f.length - 1]) : t.insertBefore(a, f[n]),
                    d.moveToElementText(a)) : t.canHaveHTML && (t.innerHTML = "<span>&#xFEFF;</span>",
                    a = t.firstChild,
                    d.moveToElementText(a),
                    d.collapse(i)),
                    o.setEndPoint(e ? "StartToStart" : "EndToEnd", d),
                    r.remove(a))
                }
                var o, a, s, l, c, u, d, f, h, p = e.dom.doc, m = p.body;
                if (s = t.startContainer,
                l = t.startOffset,
                c = t.endContainer,
                u = t.endOffset,
                o = m.createTextRange(),
                s == c && 1 == s.nodeType) {
                    if (l == u && !s.hasChildNodes()) {
                        if (s.canHaveHTML)
                            return (d = s.previousSibling) && !d.hasChildNodes() && r.isBlock(d) ? d.innerHTML = "&#xFEFF;" : d = null,
                            s.innerHTML = "<span>&#xFEFF;</span><span>&#xFEFF;</span>",
                            o.moveToElementText(s.lastChild),
                            o.select(),
                            r.doc.selection.clear(),
                            s.innerHTML = "",
                            void (d && (d.innerHTML = ""));
                        l = r.nodeIndex(s),
                        s = s.parentNode
                    }
                    if (l == u - 1)
                        try {
                            if (h = s.childNodes[l],
                            (a = m.createControlRange()).addElement(h),
                            a.select(),
                            (f = e.getRng()).item && h === f.item(0))
                                return
                        } catch (e) {}
                }
                n(!0),
                n(),
                o.select()
            }
            ,
            this.getRangeAt = function() {
                function i(e) {
                    var n, r, i, o, a = t(u, e), s = 0;
                    if (n = a.node,
                    r = a.offset,
                    !a.inside || n.hasChildNodes())
                        if (undefined !== r) {
                            if (a.position < 0) {
                                if (!(i = a.inside ? n.firstChild : n.nextSibling))
                                    return void d[e ? "setStartAfter" : "setEndAfter"](n);
                                if (!r)
                                    return void (3 == i.nodeType ? d[e ? "setStart" : "setEnd"](i, 0) : d[e ? "setStartBefore" : "setEndBefore"](i));
                                for (; i; ) {
                                    if (3 == i.nodeType && (s += (o = i.nodeValue).length) >= r) {
                                        n = i,
                                        s -= r,
                                        s = o.length - s;
                                        break
                                    }
                                    i = i.nextSibling
                                }
                            } else {
                                if (!(i = n.previousSibling))
                                    return d[e ? "setStartBefore" : "setEndBefore"](n);
                                if (!r)
                                    return void (3 == n.nodeType ? d[e ? "setStart" : "setEnd"](i, n.nodeValue.length) : d[e ? "setStartAfter" : "setEndAfter"](i));
                                for (; i; ) {
                                    if (3 == i.nodeType && (s += i.nodeValue.length) >= r) {
                                        n = i,
                                        s -= r;
                                        break
                                    }
                                    i = i.previousSibling
                                }
                            }
                            d[e ? "setStart" : "setEnd"](n, s)
                        } else
                            d[e ? "setStartBefore" : "setEndAfter"](n);
                    else
                        d[e ? "setStart" : "setEnd"](n, 0)
                }
                var o, a, s, l, c, u = e.getRng(), d = r.createRng();
                if ((o = u.item ? u.item(0) : u.parentElement()).ownerDocument != r.doc)
                    return d;
                if (a = e.isCollapsed(),
                u.item)
                    return d.setStart(o.parentNode, r.nodeIndex(o)),
                    d.setEnd(d.startContainer, d.startOffset + 1),
                    d;
                try {
                    i(!0),
                    a || i()
                } catch (t) {
                    if (-2147024809 != t.number)
                        throw t;
                    c = n.getBookmark(2),
                    (s = u.duplicate()).collapse(!0),
                    o = s.parentElement(),
                    a || ((s = u.duplicate()).collapse(!1),
                    (l = s.parentElement()).innerHTML = l.innerHTML),
                    o.innerHTML = o.innerHTML,
                    n.moveToBookmark(c),
                    u = e.getRng(),
                    i(!0),
                    a || i()
                }
                return d
            }
        }
    }
    )),
    n(P, [l], (function(e) {
        return {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            modifierPressed: function(e) {
                return e.shiftKey || e.ctrlKey || e.altKey || this.metaKeyPressed(e)
            },
            metaKeyPressed: function(t) {
                return e.mac ? t.metaKey : t.ctrlKey && !t.altKey
            }
        }
    }
    )),
    n(O, [P, f, s, l, w], (function(e, t, n, r, i) {
        function o(e, t) {
            for (; t && t != e; ) {
                if (s(t) || a(t))
                    return t;
                t = t.parentNode
            }
            return null
        }
        var a = i.isContentEditableFalse
          , s = i.isContentEditableTrue;
        return function(i, s) {
            function l(e) {
                var t = s.settings.object_resizing;
                return !1 !== t && !r.iOS && ("string" != typeof t && (t = "table,img,div"),
                "false" !== e.getAttribute("data-mce-resize") && e != s.getBody() && s.dom.is(e, t))
            }
            function c(t) {
                var n, r, i, o;
                n = t.screenX - R,
                r = t.screenY - A,
                H = n * k[2] + L,
                I = r * k[3] + M,
                H = H < 5 ? 5 : H,
                I = I < 5 ? 5 : I,
                ("IMG" == E.nodeName && !1 !== s.settings.resize_img_proportional ? !e.modifierPressed(t) : e.modifierPressed(t) || "IMG" == E.nodeName && k[2] * k[3] != 0) && (j(n) > j(r) ? (I = Y(H * P),
                H = Y(I / P)) : (H = Y(I / P),
                I = Y(H * P))),
                U.setStyles(N, {
                    width: H,
                    height: I
                }),
                i = (i = k.startPos.x + n) > 0 ? i : 0,
                o = (o = k.startPos.y + r) > 0 ? o : 0,
                U.setStyles(_, {
                    left: i,
                    top: o,
                    display: "block"
                }),
                _.innerHTML = H + " &times; " + I,
                k[2] < 0 && N.clientWidth <= H && U.setStyle(N, "left", B + (L - H)),
                k[3] < 0 && N.clientHeight <= I && U.setStyle(N, "top", D + (M - I)),
                (n = X.scrollWidth - F) + (r = X.scrollHeight - z) !== 0 && U.setStyles(_, {
                    left: i - n,
                    top: o - r
                }),
                O || (s.fire("ObjectResizeStart", {
                    target: E,
                    width: L,
                    height: M
                }),
                O = !0)
            }
            function u() {
                function e(e, t) {
                    t && (E.style[e] || !s.schema.isValid(E.nodeName.toLowerCase(), e) ? U.setStyle(E, e, t) : U.setAttrib(E, e, t))
                }
                O = !1,
                e("width", H),
                e("height", I),
                U.unbind(V, "mousemove", c),
                U.unbind(V, "mouseup", u),
                $ != V && (U.unbind($, "mousemove", c),
                U.unbind($, "mouseup", u)),
                U.remove(N),
                U.remove(_),
                q && "TABLE" != E.nodeName || d(E),
                s.fire("ObjectResized", {
                    target: E,
                    width: H,
                    height: I
                }),
                U.setAttrib(E, "style", U.getAttrib(E, "style")),
                s.nodeChanged()
            }
            function d(e, t, n) {
                var i, o, a, d, h;
                f(),
                C(),
                i = U.getPos(e, X),
                B = i.x,
                D = i.y,
                h = e.getBoundingClientRect(),
                o = h.width || h.right - h.left,
                a = h.height || h.bottom - h.top,
                E != e && (b(),
                E = e,
                H = I = 0),
                d = s.fire("ObjectSelected", {
                    target: e
                }),
                l(e) && !d.isDefaultPrevented() ? W(S, (function(e, i) {
                    function s(t) {
                        R = t.screenX,
                        A = t.screenY,
                        L = E.clientWidth,
                        M = E.clientHeight,
                        P = M / L,
                        k = e,
                        e.startPos = {
                            x: o * e[0] + B,
                            y: a * e[1] + D
                        },
                        F = X.scrollWidth,
                        z = X.scrollHeight,
                        N = E.cloneNode(!0),
                        U.addClass(N, "mce-clonedresizable"),
                        U.setAttrib(N, "data-mce-bogus", "all"),
                        N.contentEditable = !1,
                        N.unSelectabe = !0,
                        U.setStyles(N, {
                            left: B,
                            top: D,
                            margin: 0
                        }),
                        N.removeAttribute("data-mce-selected"),
                        X.appendChild(N),
                        U.bind(V, "mousemove", c),
                        U.bind(V, "mouseup", u),
                        $ != V && (U.bind($, "mousemove", c),
                        U.bind($, "mouseup", u)),
                        _ = U.add(X, "div", {
                            class: "mce-resize-helper",
                            "data-mce-bogus": "all"
                        }, L + " &times; " + M)
                    }
                    var l;
                    return t ? void (i == t && s(n)) : ((l = U.get("mceResizeHandle" + i)) && U.remove(l),
                    l = U.add(X, "div", {
                        id: "mceResizeHandle" + i,
                        "data-mce-bogus": "all",
                        class: "mce-resizehandle",
                        unselectable: !0,
                        style: "cursor:" + i + "-resize; margin:0; padding:0"
                    }),
                    r.ie && (l.contentEditable = !1),
                    U.bind(l, "mousedown", (function(e) {
                        e.stopImmediatePropagation(),
                        e.preventDefault(),
                        s(e)
                    }
                    )),
                    e.elm = l,
                    void U.setStyles(l, {
                        left: o * e[0] + B - l.offsetWidth / 2,
                        top: a * e[1] + D - l.offsetHeight / 2
                    }))
                }
                )) : f(),
                E.setAttribute("data-mce-selected", "1")
            }
            function f() {
                var e, t;
                for (e in C(),
                E && E.removeAttribute("data-mce-selected"),
                S)
                    (t = U.get("mceResizeHandle" + e)) && (U.unbind(t),
                    U.remove(t))
            }
            function h(e) {
                function t(e, t) {
                    if (e)
                        do {
                            if (e === t)
                                return !0
                        } while (e = e.parentNode)
                }
                var n, r;
                if (!O && !s.removed)
                    return W(U.select("img[data-mce-selected],hr[data-mce-selected]"), (function(e) {
                        e.removeAttribute("data-mce-selected")
                    }
                    )),
                    r = "mousedown" == e.type ? e.target : i.getNode(),
                    t(r = U.$(r).closest(q ? "table" : "table,img,hr")[0], X) && (x(),
                    t(n = i.getStart(!0), r) && t(i.getEnd(!0), r) && (!q || r != n && "IMG" !== n.nodeName)) ? void d(r) : void f()
            }
            function p(e, t, n) {
                e && e.attachEvent && e.attachEvent("on" + t, n)
            }
            function m(e, t, n) {
                e && e.detachEvent && e.detachEvent("on" + t, n)
            }
            function g(e) {
                var t, n, r, i, o, a, l, c = e.srcElement;
                for (n in t = c.getBoundingClientRect(),
                a = T.clientX - t.left,
                l = T.clientY - t.top,
                S)
                    if (r = S[n],
                    i = c.offsetWidth * r[0],
                    o = c.offsetHeight * r[1],
                    j(i - a) < 8 && j(o - l) < 8) {
                        k = r;
                        break
                    }
                O = !0,
                s.fire("ObjectResizeStart", {
                    target: E,
                    width: E.clientWidth,
                    height: E.clientHeight
                }),
                s.getDoc().selection.empty(),
                d(c, n, T)
            }
            function v(e) {
                return a(o(s.getBody(), e))
            }
            function y(e) {
                var t = e.srcElement;
                if (v(t))
                    !function(e) {
                        e.preventDefault ? e.preventDefault() : e.returnValue = !1
                    }(e);
                else if (t != E) {
                    if (s.fire("ObjectSelected", {
                        target: t
                    }),
                    b(),
                    0 === t.id.indexOf("mceResizeHandle"))
                        return void (e.returnValue = !1);
                    "IMG" != t.nodeName && "TABLE" != t.nodeName || (f(),
                    E = t,
                    p(t, "resizestart", g))
                }
            }
            function b() {
                m(E, "resizestart", g)
            }
            function C() {
                for (var e in S) {
                    var t = S[e];
                    t.elm && (U.unbind(t.elm),
                    delete t.elm)
                }
            }
            function x() {
                try {
                    s.getDoc().execCommand("enableObjectResizing", !1, !1)
                } catch (e) {}
            }
            function w(e) {
                var t;
                if (q) {
                    t = V.body.createControlRange();
                    try {
                        return t.addElement(e),
                        t.select(),
                        !0
                    } catch (e) {}
                }
            }
            var E, N, _, S, k, T, R, A, B, D, L, M, P, O, H, I, F, z, U = s.dom, W = t.each, V = s.getDoc(), $ = document, q = r.ie && r.ie < 11, j = Math.abs, Y = Math.round, X = s.getBody();
            S = {
                nw: [0, 0, -1, -1],
                ne: [1, 0, 1, -1],
                se: [1, 1, 1, 1],
                sw: [0, 1, -1, 1]
            };
            var K = ".mce-content-body";
            return s.contentStyles.push(K + " div.mce-resizehandle {position: absolute;border: 1px solid black;box-sizing: box-sizing;background: #FFF;width: 7px;height: 7px;z-index: 10000}" + K + " .mce-resizehandle:hover {background: #000}" + K + " img[data-mce-selected]," + K + " hr[data-mce-selected] {outline: 1px solid black;resize: none}" + K + " .mce-clonedresizable {position: absolute;" + (r.gecko ? "" : "outline: 1px dashed black;") + "opacity: .5;filter: alpha(opacity=50);z-index: 10000}" + K + " .mce-resize-helper {background: #555;background: rgba(0,0,0,0.75);border-radius: 3px;border: 1px;color: white;display: none;font-family: sans-serif;font-size: 12px;white-space: nowrap;line-height: 14px;margin: 5px 10px;padding: 5px;position: absolute;z-index: 10001}"),
            s.on("init", (function() {
                q ? (s.on("ObjectResized", (function(e) {
                    "TABLE" != e.target.nodeName && (f(),
                    w(e.target))
                }
                )),
                p(X, "controlselect", y),
                s.on("mousedown", (function(e) {
                    T = e
                }
                ))) : (x(),
                r.ie >= 11 && (s.on("mousedown click", (function(e) {
                    var t = e.target
                      , n = t.nodeName;
                    O || !/^(TABLE|IMG|HR)$/.test(n) || v(t) || (s.selection.select(t, "TABLE" == n),
                    "mousedown" == e.type && s.nodeChanged())
                }
                )),
                s.dom.bind(X, "mscontrolselect", (function(e) {
                    function t(e) {
                        n.setEditorTimeout(s, (function() {
                            s.selection.select(e)
                        }
                        ))
                    }
                    return v(e.target) ? (e.preventDefault(),
                    void t(e.target)) : void (/^(TABLE|IMG|HR)$/.test(e.target.nodeName) && (e.preventDefault(),
                    "IMG" == e.target.tagName && t(e.target)))
                }
                ))));
                var e = n.throttle((function(e) {
                    s.composing || h(e)
                }
                ));
                s.on("nodechange ResizeEditor ResizeWindow drop", e),
                s.on("keyup compositionend", (function(t) {
                    E && "TABLE" == E.nodeName && e(t)
                }
                )),
                s.on("hide blur", f)
            }
            )),
            s.on("remove", C),
            {
                isResizable: l,
                showResizeRect: d,
                hideResizeRect: f,
                updateResizeRect: h,
                controlSelect: w,
                destroy: function() {
                    E = N = null,
                    q && (b(),
                    m(X, "controlselect", y))
                }
            }
        }
    }
    )),
    n(H, [], (function() {
        var e = [].slice;
        return {
            constant: function(e) {
                return function() {
                    return e
                }
            },
            negate: function(e) {
                return function(t) {
                    return !e(t)
                }
            },
            and: function() {
                var t = e.call(arguments);
                return function(e) {
                    for (var n = 0; n < t.length; n++)
                        if (!t[n](e))
                            return !1;
                    return !0
                }
            },
            or: function() {
                var t = e.call(arguments);
                return function(e) {
                    for (var n = 0; n < t.length; n++)
                        if (t[n](e))
                            return !0;
                    return !1
                }
            },
            curry: function t(n) {
                var r = e.call(arguments);
                return r.length - 1 >= n.length ? n.apply(this, r.slice(1)) : function() {
                    var e = r.concat([].slice.call(arguments));
                    return t.apply(this, e)
                }
            },
            compose: function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            },
            noop: function() {}
        }
    }
    )),
    n(I, [w, d, N], (function(e, t, n) {
        function r(e) {
            return !f(e) && (l(e) ? !c(e.parentNode) : u(e) || s(e) || d(e) || a(e))
        }
        function i(e, t) {
            for (e = e.parentNode; e && e != t; e = e.parentNode) {
                if (a(e))
                    return !1;
                if (o(e))
                    return !0
            }
            return !0
        }
        var o = e.isContentEditableTrue
          , a = e.isContentEditableFalse
          , s = e.isBr
          , l = e.isText
          , c = e.matchNodeNames("script style textarea")
          , u = e.matchNodeNames("img input textarea hr iframe video audio object")
          , d = e.matchNodeNames("table")
          , f = n.isCaretContainer;
        return {
            isCaretCandidate: r,
            isInEditable: i,
            isAtomic: function(e) {
                return u(e) || function(e) {
                    return !!a(e) && !0 !== t.reduce(e.getElementsByTagName("*"), (function(e, t) {
                        return e || o(t)
                    }
                    ), !1)
                }(e)
            },
            isEditableCaretCandidate: function(e, t) {
                return r(e) && i(e, t)
            }
        }
    }
    )),
    n(F, [], (function() {
        function e(e) {
            return e ? {
                left: a(e.left),
                top: a(e.top),
                bottom: a(e.bottom),
                right: a(e.right),
                width: a(e.width),
                height: a(e.height)
            } : {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                width: 0,
                height: 0
            }
        }
        function t(e, t, n) {
            return e >= 0 && e <= Math.min(t.height, n.height) / 2
        }
        function n(e, n) {
            return e.bottom < n.top || !(e.top > n.bottom) && t(n.top - e.bottom, e, n)
        }
        function r(e, n) {
            return e.top > n.bottom || !(e.bottom < n.top) && t(n.bottom - e.top, e, n)
        }
        function i(e, t) {
            return e.left < t.left
        }
        function o(e, t) {
            return e.right > t.right
        }
        var a = Math.round;
        return {
            clone: e,
            collapse: function(t, n) {
                return t = e(t),
                n || (t.left = t.left + t.width),
                t.right = t.left,
                t.width = 0,
                t
            },
            isEqual: function(e, t) {
                return e.left === t.left && e.top === t.top && e.bottom === t.bottom && e.right === t.right
            },
            isAbove: n,
            isBelow: r,
            isLeft: i,
            isRight: o,
            compare: function(e, t) {
                return n(e, t) ? -1 : r(e, t) ? 1 : i(e, t) ? -1 : o(e, t) ? 1 : 0
            },
            containsXY: function(e, t, n) {
                return t >= e.left && t <= e.right && n >= e.top && n <= e.bottom
            }
        }
    }
    )),
    n(z, [], (function() {
        var e = new RegExp("[̀-ͯ҃-҇҈-҉֑-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٰٟۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢ-ॣঁ়াু-ৄ্ৗৢ-ৣਁ-ਂ਼ੁ-ੂੇ-ੈੋ-੍ੑੰ-ੱੵઁ-ં઼ુ-ૅે-ૈ્ૢ-ૣଁ଼ାିୁ-ୄ୍ୖୗୢ-ୣஂாீ்ௗఀా-ీె-ైొ-్ౕ-ౖౢ-ౣಁ಼ಿೂೆೌ-್ೕ-ೖೢ-ೣഁാു-ൄ്ൗൢ-ൣ්ාි-ුූෟัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-ཱ༹༙༵༷-ཾྀ-྄྆-྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္-်ွ-ှၘ-ၙၞ-ၠၱ-ၴႂႅ-ႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳ឴-឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧ-ᤨᤲ᤹-᤻ᨗ-ᨘᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽᪾ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀ-ᮁᮢ-ᮥᮨ-ᮩ᮫-ᮭ᯦ᯨ-ᯩᯭᯯ-ᯱᰬ-ᰳᰶ-᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸-᳹᷀-᷵᷼-᷿‌-‍⃐-⃜⃝-⃠⃡⃢-⃤⃥-⃰⳯-⵿⳱ⷠ-〪ⷿ-〭〮-゙〯-゚꙯꙰-꙲ꙴ-꙽ꚞ-ꚟ꛰-꛱ꠂ꠆ꠋꠥ-ꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱ-ꨲꨵ-ꨶꩃꩌꩼꪰꪲ-ꪴꪷ-ꪸꪾ-꪿꫁ꫬ-ꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯ﾞ-ﾟ]");
        return {
            isExtendingChar: function(t) {
                return "string" == typeof t && t.charCodeAt(0) >= 768 && e.test(t)
            }
        }
    }
    )),
    n(U, [H, w, b, _, I, F, z], (function(e, t, n, r, i, o, a) {
        function s(e) {
            return "createRange"in e ? e.createRange() : n.DOM.createRng()
        }
        function l(e) {
            return e && /[\r\n\t ]/.test(e)
        }
        function c(e) {
            var t, n = e.startContainer, r = e.startOffset;
            return !!(l(e.toString()) && v(n.parentNode) && (t = n.data,
            l(t[r - 1]) || l(t[r + 1])))
        }
        function u(e) {
            function t(e) {
                var t, n;
                return t = (n = e.getClientRects()).length > 0 ? o.clone(n[0]) : o.clone(e.getBoundingClientRect()),
                b(e) && 0 === t.left ? function(e) {
                    var t, n = e.ownerDocument, r = s(n), i = n.createTextNode(" "), a = e.parentNode;
                    return a.insertBefore(i, e),
                    r.setStart(i, 0),
                    r.setEnd(i, 1),
                    t = o.clone(r.getBoundingClientRect()),
                    a.removeChild(i),
                    t
                }(e) : t
            }
            function n(e, t) {
                return (e = o.collapse(e, t)).width = 1,
                e.right = e.left + 1,
                e
            }
            function r(e) {
                0 !== e.height && (d.length > 0 && o.isEqual(e, d[d.length - 1]) || d.push(e))
            }
            function i(e, i) {
                var o = s(e.ownerDocument);
                if (i < e.data.length) {
                    if (a.isExtendingChar(e.data[i]))
                        return d;
                    if (a.isExtendingChar(e.data[i - 1]) && (o.setStart(e, i),
                    o.setEnd(e, i + 1),
                    !c(o)))
                        return r(n(t(o), !1)),
                        d
                }
                i > 0 && (o.setStart(e, i - 1),
                o.setEnd(e, i),
                c(o) || r(n(t(o), !1))),
                i < e.data.length && (o.setStart(e, i),
                o.setEnd(e, i + 1),
                c(o) || r(n(t(o), !0)))
            }
            var l, u, d = [];
            if (y(e.container()))
                return i(e.container(), e.offset()),
                d;
            if (f(e.container()))
                if (e.isAtEnd())
                    u = x(e.container(), e.offset()),
                    y(u) && i(u, u.data.length),
                    g(u) && !b(u) && r(n(t(u), !1));
                else {
                    if (u = x(e.container(), e.offset()),
                    y(u) && i(u, 0),
                    g(u) && e.isAtEnd())
                        return r(n(t(u), !1)),
                        d;
                    l = x(e.container(), e.offset() - 1),
                    g(l) && !b(l) && (p(l) || p(u) || !g(u)) && r(n(t(l), !1)),
                    g(u) && r(n(t(u), !0))
                }
            return d
        }
        function d(t, n, r) {
            function i() {
                return r || (r = u(new d(t,n))),
                r
            }
            return {
                container: e.constant(t),
                offset: e.constant(n),
                toRange: function() {
                    var e;
                    return (e = s(t.ownerDocument)).setStart(t, n),
                    e.setEnd(t, n),
                    e
                },
                getClientRects: i,
                isVisible: function() {
                    return i().length > 0
                },
                isAtStart: function() {
                    return y(t),
                    0 === n
                },
                isAtEnd: function() {
                    return y(t) ? n >= t.data.length : n >= t.childNodes.length
                },
                isEqual: function(e) {
                    return e && t === e.container() && n === e.offset()
                },
                getNode: function(e) {
                    return x(t, e ? n - 1 : n)
                }
            }
        }
        var f = t.isElement
          , h = i.isCaretCandidate
          , p = t.matchStyleValues("display", "block table")
          , m = t.matchStyleValues("float", "left right")
          , g = e.and(f, h, e.negate(m))
          , v = e.negate(t.matchStyleValues("white-space", "pre pre-line pre-wrap"))
          , y = t.isText
          , b = t.isBr
          , C = n.nodeIndex
          , x = r.getNode;
        return d.fromRangeStart = function(e) {
            return new d(e.startContainer,e.startOffset)
        }
        ,
        d.fromRangeEnd = function(e) {
            return new d(e.endContainer,e.endOffset)
        }
        ,
        d.after = function(e) {
            return new d(e.parentNode,C(e) + 1)
        }
        ,
        d.before = function(e) {
            return new d(e.parentNode,C(e))
        }
        ,
        d
    }
    )),
    n(W, [w, b, H, d, U], (function(e, t, n, r, i) {
        function o(e) {
            var t = e.parentNode;
            return f(t) ? o(t) : t
        }
        function a(e) {
            return e ? r.reduce(e.childNodes, (function(e, t) {
                return f(t) && "BR" != t.nodeName ? e = e.concat(a(t)) : e.push(t),
                e
            }
            ), []) : []
        }
        function s(e) {
            return function(t) {
                return e === t
            }
        }
        function l(t) {
            var n, i, l;
            return n = a(o(t)),
            i = r.findIndex(n, s(t), t),
            n = n.slice(0, i + 1),
            l = r.reduce(n, (function(e, t, r) {
                return d(t) && d(n[r - 1]) && e++,
                e
            }
            ), 0),
            n = r.filter(n, e.matchNodeNames(t.nodeName)),
            (i = r.findIndex(n, s(t), t)) - l
        }
        function c(e) {
            return (d(e) ? "text()" : e.nodeName.toLowerCase()) + "[" + l(e) + "]"
        }
        function u(t, n, i) {
            var o = a(t);
            return o = r.filter(o, (function(e, t) {
                return !d(e) || !d(o[t - 1])
            }
            )),
            (o = r.filter(o, e.matchNodeNames(n)))[i]
        }
        var d = e.isText
          , f = e.isBogus
          , h = t.nodeIndex;
        return {
            create: function(t, i) {
                var o, a, s, l, u, f = [];
                return o = i.container(),
                a = i.offset(),
                d(o) ? s = function(e, t) {
                    for (; (e = e.previousSibling) && d(e); )
                        t += e.data.length;
                    return t
                }(o, a) : (a >= (l = o.childNodes).length ? (s = "after",
                a = l.length - 1) : s = "before",
                o = l[a]),
                f.push(c(o)),
                u = function(e, t, n) {
                    var r = [];
                    for (t = t.parentNode; !(t == e || n && n(t)); t = t.parentNode)
                        r.push(t);
                    return r
                }(t, o),
                u = r.filter(u, n.negate(e.isBogus)),
                f = f.concat(r.map(u, (function(e) {
                    return c(e)
                }
                ))),
                f.reverse().join("/") + "," + s
            },
            resolve: function(e, t) {
                var n, o, a;
                return t ? (n = t.split(","),
                t = n[0].split("/"),
                a = n.length > 1 ? n[1] : "before",
                o = r.reduce(t, (function(e, t) {
                    return (t = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)) ? ("text()" === t[1] && (t[1] = "#text"),
                    u(e, t[1], parseInt(t[2], 10))) : null
                }
                ), e),
                o ? d(o) ? function(e, t) {
                    for (var n, r = e, o = 0; d(r); ) {
                        if (n = r.data.length,
                        t >= o && t <= o + n) {
                            e = r,
                            t -= o;
                            break
                        }
                        if (!d(r.nextSibling)) {
                            e = r,
                            t = n;
                            break
                        }
                        o += n,
                        r = r.nextSibling
                    }
                    return t > e.data.length && (t = e.data.length),
                    new i(e,t)
                }(o, parseInt(a, 10)) : (a = "after" === a ? h(o) + 1 : h(o),
                new i(o.parentNode,a)) : null) : null
            }
        }
    }
    )),
    n(V, [l, f, N, W, U, w, _], (function(e, t, n, r, i, o, a) {
        function s(s) {
            var c = s.dom;
            this.getBookmark = function(e, u) {
                function d(e, n) {
                    var r = 0;
                    return t.each(c.select(e), (function(e) {
                        if ("all" !== e.getAttribute("data-mce-bogus"))
                            return e != n && void r++
                    }
                    )),
                    r
                }
                function f(e) {
                    function t(t) {
                        var n, r, i, o = t ? "start" : "end";
                        n = e[o + "Container"],
                        r = e[o + "Offset"],
                        1 == n.nodeType && "TR" == n.nodeName && ((n = (i = n.childNodes)[Math.min(t ? r : r - 1, i.length - 1)]) && (r = t ? 0 : n.childNodes.length,
                        e["set" + (t ? "Start" : "End")](n, r)))
                    }
                    return t(!0),
                    t(),
                    e
                }
                var h, p, m, g, v, y, b, C = "&#xFEFF;";
                if (2 == e)
                    return v = (y = s.getNode()) ? y.nodeName : null,
                    h = s.getRng(),
                    l(y) || "IMG" == v ? {
                        name: v,
                        index: d(v, y)
                    } : s.tridentSel ? s.tridentSel.getBookmark(e) : (y = function(e) {
                        function t(e, t) {
                            var r;
                            if (o.isElement(e) && (e = a.getNode(e, t),
                            l(e)))
                                return e;
                            if (n.isCaretContainer(e)) {
                                if (o.isText(e) && n.isCaretContainerBlock(e) && (e = e.parentNode),
                                r = e.previousSibling,
                                l(r))
                                    return r;
                                if (r = e.nextSibling,
                                l(r))
                                    return r
                            }
                        }
                        return t(e.startContainer, e.startOffset) || t(e.endContainer, e.endOffset)
                    }(h),
                    y ? {
                        name: v = y.tagName,
                        index: d(v, y)
                    } : function(e) {
                        function t(e, t) {
                            var r, i, o = e[t ? "startContainer" : "endContainer"], a = e[t ? "startOffset" : "endOffset"], s = [], l = 0;
                            if (3 == o.nodeType) {
                                if (u)
                                    for (r = o.previousSibling; r && 3 == r.nodeType; r = r.previousSibling)
                                        a += r.nodeValue.length;
                                s.push(a)
                            } else
                                a >= (i = o.childNodes).length && i.length && (l = 1,
                                a = Math.max(0, i.length - 1)),
                                s.push(c.nodeIndex(i[a], u) + l);
                            for (; o && o != n; o = o.parentNode)
                                s.push(c.nodeIndex(o, u));
                            return s
                        }
                        var n = c.getRoot()
                          , r = {};
                        return r.start = t(e, !0),
                        s.isCollapsed() || (r.end = t(e)),
                        r
                    }(h));
                if (3 == e)
                    return h = s.getRng(),
                    {
                        start: r.create(c.getRoot(), i.fromRangeStart(h)),
                        end: r.create(c.getRoot(), i.fromRangeEnd(h))
                    };
                if (e)
                    return {
                        rng: s.getRng()
                    };
                if (h = s.getRng(),
                m = c.uniqueId(),
                g = s.isCollapsed(),
                b = "overflow:hidden;line-height:0px",
                h.duplicate || h.item) {
                    if (h.item)
                        return {
                            name: v = (y = h.item(0)).nodeName,
                            index: d(v, y)
                        };
                    p = h.duplicate();
                    try {
                        h.collapse(),
                        h.pasteHTML('<span data-mce-type="bookmark" id="' + m + '_start" style="' + b + '">' + C + "</span>"),
                        g || (p.collapse(!1),
                        h.moveToElementText(p.parentElement()),
                        0 === h.compareEndPoints("StartToEnd", p) && p.move("character", -1),
                        p.pasteHTML('<span data-mce-type="bookmark" id="' + m + '_end" style="' + b + '">' + C + "</span>"))
                    } catch (e) {
                        return null
                    }
                } else {
                    if ("IMG" == (v = (y = s.getNode()).nodeName))
                        return {
                            name: v,
                            index: d(v, y)
                        };
                    p = f(h.cloneRange()),
                    g || (p.collapse(!1),
                    p.insertNode(c.create("span", {
                        "data-mce-type": "bookmark",
                        id: m + "_end",
                        style: b
                    }, C))),
                    (h = f(h)).collapse(!0),
                    h.insertNode(c.create("span", {
                        "data-mce-type": "bookmark",
                        id: m + "_start",
                        style: b
                    }, C))
                }
                return s.moveToBookmark({
                    id: m,
                    keep: 1
                }),
                {
                    id: m
                }
            }
            ,
            this.moveToBookmark = function(n) {
                function i(e) {
                    var t, r, i, o, a = n[e ? "start" : "end"];
                    if (a) {
                        for (i = a[0],
                        r = u,
                        t = a.length - 1; t >= 1; t--) {
                            if (o = r.childNodes,
                            a[t] > o.length - 1)
                                return;
                            r = o[a[t]]
                        }
                        3 === r.nodeType && (i = Math.min(a[0], r.nodeValue.length)),
                        1 === r.nodeType && (i = Math.min(a[0], r.childNodes.length)),
                        e ? l.setStart(r, i) : l.setEnd(r, i)
                    }
                    return !0
                }
                function o(r) {
                    var i, o, a, s, l = c.get(n.id + "_" + r), u = n.keep;
                    if (l && (i = l.parentNode,
                    "start" == r ? (u ? (i = l.firstChild,
                    o = 1) : o = c.nodeIndex(l),
                    d = f = i,
                    h = p = o) : (u ? (i = l.firstChild,
                    o = 1) : o = c.nodeIndex(l),
                    f = i,
                    p = o),
                    !u)) {
                        for (s = l.previousSibling,
                        a = l.nextSibling,
                        t.each(t.grep(l.childNodes), (function(e) {
                            3 == e.nodeType && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""))
                        }
                        )); l = c.get(n.id + "_" + r); )
                            c.remove(l, 1);
                        s && a && s.nodeType == a.nodeType && 3 == s.nodeType && !e.opera && (o = s.nodeValue.length,
                        s.appendData(a.nodeValue),
                        c.remove(a),
                        "start" == r ? (d = f = s,
                        h = p = o) : (f = s,
                        p = o))
                    }
                }
                function a(t) {
                    return !c.isBlock(t) || t.innerHTML || e.ie || (t.innerHTML = '<br data-mce-bogus="1" />'),
                    t
                }
                var l, u, d, f, h, p;
                if (n)
                    if (t.isArray(n.start)) {
                        if (l = c.createRng(),
                        u = c.getRoot(),
                        s.tridentSel)
                            return s.tridentSel.moveToBookmark(n);
                        i(!0) && i() && s.setRng(l)
                    } else
                        "string" == typeof n.start ? s.setRng(function() {
                            var e, t;
                            return e = c.createRng(),
                            t = r.resolve(c.getRoot(), n.start),
                            e.setStart(t.container(), t.offset()),
                            t = r.resolve(c.getRoot(), n.end),
                            e.setEnd(t.container(), t.offset()),
                            e
                        }()) : n.id ? (o("start"),
                        o("end"),
                        d && ((l = c.createRng()).setStart(a(d), h),
                        l.setEnd(a(f), p),
                        s.setRng(l))) : n.name ? s.select(c.select(n.name)[n.index]) : n.rng && s.setRng(n.rng)
            }
        }
        var l = o.isContentEditableFalse;
        return s.isBookmarkNode = function(e) {
            return e && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type")
        }
        ,
        s
    }
    )),
    n($, [m, M, O, _, V, w, l, f, U], (function(e, n, r, i, o, a, s, l, c) {
        function u(e, t, i, a) {
            var s = this;
            s.dom = e,
            s.win = t,
            s.serializer = i,
            s.editor = a,
            s.bookmarkManager = new o(s),
            s.controlSelection = new r(s,a),
            s.win.getSelection || (s.tridentSel = new n(s))
        }
        var d = l.each
          , f = l.trim
          , h = s.ie;
        return u.prototype = {
            setCursorLocation: function(e, t) {
                var n = this
                  , r = n.dom.createRng();
                e ? (r.setStart(e, t),
                r.setEnd(e, t),
                n.setRng(r),
                n.collapse(!1)) : (n._moveEndPoint(r, n.editor.getBody(), !0),
                n.setRng(r))
            },
            getContent: function(e) {
                var n, r, i, o = this, a = o.getRng(), s = o.dom.create("body"), l = o.getSel();
                return n = r = "",
                (e = e || {}).get = !0,
                e.format = e.format || "html",
                e.selection = !0,
                o.editor.fire("BeforeGetContent", e),
                "text" == e.format ? o.isCollapsed() ? "" : a.text || (l.toString ? l.toString() : "") : (a.cloneContents ? (i = a.cloneContents()) && s.appendChild(i) : a.item !== t || a.htmlText !== t ? (s.innerHTML = "<br>" + (a.item ? a.item(0).outerHTML : a.htmlText),
                s.removeChild(s.firstChild)) : s.innerHTML = a.toString(),
                /^\s/.test(s.innerHTML) && (n = " "),
                /\s+$/.test(s.innerHTML) && (r = " "),
                e.getInner = !0,
                e.content = o.isCollapsed() ? "" : n + o.serializer.serialize(s, e) + r,
                o.editor.fire("GetContent", e),
                e.content)
            },
            setContent: function(e, t) {
                var n, r, i, o = this, a = o.getRng(), s = o.win.document;
                if ((t = t || {
                    format: "html"
                }).set = !0,
                t.selection = !0,
                t.content = e,
                t.no_events || o.editor.fire("BeforeSetContent", t),
                e = t.content,
                a.insertNode) {
                    e += '<span id="__caret">_</span>',
                    a.startContainer == s && a.endContainer == s ? s.body.innerHTML = e : (a.deleteContents(),
                    0 === s.body.childNodes.length ? s.body.innerHTML = e : a.createContextualFragment ? a.insertNode(a.createContextualFragment(e)) : (r = s.createDocumentFragment(),
                    i = s.createElement("div"),
                    r.appendChild(i),
                    i.outerHTML = e,
                    a.insertNode(r))),
                    n = o.dom.get("__caret"),
                    (a = s.createRange()).setStartBefore(n),
                    a.setEndBefore(n),
                    o.setRng(a),
                    o.dom.remove("__caret");
                    try {
                        o.setRng(a)
                    } catch (e) {}
                } else
                    a.item && (s.execCommand("Delete", !1, null),
                    a = o.getRng()),
                    /^\s+/.test(e) ? (a.pasteHTML('<span id="__mce_tmp">_</span>' + e),
                    o.dom.remove("__mce_tmp")) : a.pasteHTML(e);
                t.no_events || o.editor.fire("SetContent", t)
            },
            getStart: function(e) {
                var t, n, r, i, o = this, a = o.getRng();
                if (a.duplicate || a.item) {
                    if (a.item)
                        return a.item(0);
                    for ((r = a.duplicate()).collapse(1),
                    (t = r.parentElement()).ownerDocument !== o.dom.doc && (t = o.dom.getRoot()),
                    n = i = a.parentElement(); i = i.parentNode; )
                        if (i == t) {
                            t = n;
                            break
                        }
                    return t
                }
                return 1 == (t = a.startContainer).nodeType && t.hasChildNodes() && (e && a.collapsed || (t = t.childNodes[Math.min(t.childNodes.length - 1, a.startOffset)])),
                t && 3 == t.nodeType ? t.parentNode : t
            },
            getEnd: function(e) {
                var t, n, r = this, i = r.getRng();
                return i.duplicate || i.item ? i.item ? i.item(0) : ((i = i.duplicate()).collapse(0),
                (t = i.parentElement()).ownerDocument !== r.dom.doc && (t = r.dom.getRoot()),
                t && "BODY" == t.nodeName && t.lastChild || t) : (t = i.endContainer,
                n = i.endOffset,
                1 == t.nodeType && t.hasChildNodes() && (e && i.collapsed || (t = t.childNodes[n > 0 ? n - 1 : n])),
                t && 3 == t.nodeType ? t.parentNode : t)
            },
            getBookmark: function(e, t) {
                return this.bookmarkManager.getBookmark(e, t)
            },
            moveToBookmark: function(e) {
                return this.bookmarkManager.moveToBookmark(e)
            },
            select: function(e, t) {
                var n, r = this, i = r.dom, o = i.createRng();
                if (r.lastFocusBookmark = null,
                e) {
                    if (!t && r.controlSelection.controlSelect(e))
                        return;
                    n = i.nodeIndex(e),
                    o.setStart(e.parentNode, n),
                    o.setEnd(e.parentNode, n + 1),
                    t && (r._moveEndPoint(o, e, !0),
                    r._moveEndPoint(o, e)),
                    r.setRng(o)
                }
                return e
            },
            isCollapsed: function() {
                var e = this.getRng()
                  , t = this.getSel();
                return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed)
            },
            collapse: function(e) {
                var t, n = this, r = n.getRng();
                r.item && (t = r.item(0),
                (r = n.win.document.body.createTextRange()).moveToElementText(t)),
                r.collapse(!!e),
                n.setRng(r)
            },
            getSel: function() {
                var e = this.win;
                return e.getSelection ? e.getSelection() : e.document.selection
            },
            getRng: function(e) {
                function t(e, t, n) {
                    try {
                        return t.compareBoundaryPoints(e, n)
                    } catch (e) {
                        return -1
                    }
                }
                var n, r, i, o, a, s, l = this;
                if (!l.win)
                    return null;
                if (null == (o = l.win.document))
                    return null;
                if (!e && l.lastFocusBookmark) {
                    var c = l.lastFocusBookmark;
                    return c.startContainer ? ((r = o.createRange()).setStart(c.startContainer, c.startOffset),
                    r.setEnd(c.endContainer, c.endOffset)) : r = c,
                    r
                }
                if (e && l.tridentSel)
                    return l.tridentSel.getRangeAt(0);
                try {
                    (n = l.getSel()) && (r = n.rangeCount > 0 ? n.getRangeAt(0) : n.createRange ? n.createRange() : o.createRange())
                } catch (e) {}
                if ((s = l.editor.fire("GetSelectionRange", {
                    range: r
                })).range !== r)
                    return s.range;
                if (h && r && r.setStart && o.selection) {
                    try {
                        a = o.selection.createRange()
                    } catch (e) {}
                    a && a.item && (i = a.item(0),
                    (r = o.createRange()).setStartBefore(i),
                    r.setEndAfter(i))
                }
                return r || (r = o.createRange ? o.createRange() : o.body.createTextRange()),
                r.setStart && 9 === r.startContainer.nodeType && r.collapsed && (i = l.dom.getRoot(),
                r.setStart(i, 0),
                r.setEnd(i, 0)),
                l.selectedRange && l.explicitRange && (0 === t(r.START_TO_START, r, l.selectedRange) && 0 === t(r.END_TO_END, r, l.selectedRange) ? r = l.explicitRange : (l.selectedRange = null,
                l.explicitRange = null)),
                r
            },
            setRng: function(e, t) {
                var n, r, i = this;
                if (e)
                    if (e.select) {
                        i.explicitRange = null;
                        try {
                            e.select()
                        } catch (e) {}
                    } else if (i.tridentSel) {
                        if (e.cloneRange)
                            try {
                                i.tridentSel.addRange(e)
                            } catch (e) {}
                    } else {
                        if (n = i.getSel(),
                        e = i.editor.fire("SetSelectionRange", {
                            range: e
                        }).range,
                        n) {
                            i.explicitRange = e;
                            try {
                                n.removeAllRanges(),
                                n.addRange(e)
                            } catch (e) {}
                            !1 === t && n.extend && (n.collapse(e.endContainer, e.endOffset),
                            n.extend(e.startContainer, e.startOffset)),
                            i.selectedRange = n.rangeCount > 0 ? n.getRangeAt(0) : null
                        }
                        e.collapsed || e.startContainer != e.endContainer || !n.setBaseAndExtent || s.ie || e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes() && ((r = e.startContainer.childNodes[e.startOffset]) && "IMG" == r.tagName && i.getSel().setBaseAndExtent(r, 0, r, 1)),
                        i.editor.fire("AfterSetSelectionRange", {
                            range: e
                        })
                    }
            },
            setNode: function(e) {
                return this.setContent(this.dom.getOuterHTML(e)),
                e
            },
            getNode: function() {
                function e(e, t) {
                    for (var n = e; e && 3 === e.nodeType && 0 === e.length; )
                        e = t ? e.nextSibling : e.previousSibling;
                    return e || n
                }
                var t, n, r, i, o, a = this, s = a.getRng(), l = a.dom.getRoot();
                return s ? (n = s.startContainer,
                r = s.endContainer,
                i = s.startOffset,
                o = s.endOffset,
                s.setStart ? (t = s.commonAncestorContainer,
                !s.collapsed && (n == r && o - i < 2 && n.hasChildNodes() && (t = n.childNodes[i]),
                3 === n.nodeType && 3 === r.nodeType && (n = n.length === i ? e(n.nextSibling, !0) : n.parentNode,
                r = 0 === o ? e(r.previousSibling, !1) : r.parentNode,
                n && n === r)) ? n : t && 3 == t.nodeType ? t.parentNode : t) : ((t = s.item ? s.item(0) : s.parentElement()).ownerDocument !== a.win.document && (t = l),
                t)) : l
            },
            getSelectedBlocks: function(t, n) {
                var r, i, o = this, a = o.dom, s = [];
                if (i = a.getRoot(),
                t = a.getParent(t || o.getStart(), a.isBlock),
                n = a.getParent(n || o.getEnd(), a.isBlock),
                t && t != i && s.push(t),
                t && n && t != n) {
                    r = t;
                    for (var l = new e(t,i); (r = l.next()) && r != n; )
                        a.isBlock(r) && s.push(r)
                }
                return n && t != n && n != i && s.push(n),
                s
            },
            isForward: function() {
                var e, t, n = this.dom, r = this.getSel();
                return !(r && r.anchorNode && r.focusNode) || ((e = n.createRng()).setStart(r.anchorNode, r.anchorOffset),
                e.collapse(!0),
                (t = n.createRng()).setStart(r.focusNode, r.focusOffset),
                t.collapse(!0),
                e.compareBoundaryPoints(e.START_TO_START, t) <= 0)
            },
            normalize: function() {
                var e = this
                  , t = e.getRng();
                return s.range && new i(e.dom).normalize(t) && e.setRng(t, e.isForward()),
                t
            },
            selectorChanged: function(e, t) {
                var n, r = this;
                return r.selectorChangedData || (r.selectorChangedData = {},
                n = {},
                r.editor.on("NodeChange", (function(e) {
                    var t = e.element
                      , i = r.dom
                      , o = i.getParents(t, null, i.getRoot())
                      , a = {};
                    d(r.selectorChangedData, (function(e, t) {
                        d(o, (function(r) {
                            if (i.is(r, t))
                                return n[t] || (d(e, (function(e) {
                                    e(!0, {
                                        node: r,
                                        selector: t,
                                        parents: o
                                    })
                                }
                                )),
                                n[t] = e),
                                a[t] = e,
                                !1
                        }
                        ))
                    }
                    )),
                    d(n, (function(e, r) {
                        a[r] || (delete n[r],
                        d(e, (function(e) {
                            e(!1, {
                                node: t,
                                selector: r,
                                parents: o
                            })
                        }
                        )))
                    }
                    ))
                }
                ))),
                r.selectorChangedData[e] || (r.selectorChangedData[e] = []),
                r.selectorChangedData[e].push(t),
                r
            },
            getScrollContainer: function() {
                for (var e, t = this.dom.getRoot(); t && "BODY" != t.nodeName; ) {
                    if (t.scrollHeight > t.clientHeight) {
                        e = t;
                        break
                    }
                    t = t.parentNode
                }
                return e
            },
            scrollIntoView: function(e, t) {
                function n(e) {
                    for (var t = 0, n = 0, r = e; r && r.nodeType; )
                        t += r.offsetLeft || 0,
                        n += r.offsetTop || 0,
                        r = r.offsetParent;
                    return {
                        x: t,
                        y: n
                    }
                }
                var r, i, o, s, l = this, c = l.dom, u = c.getRoot(), d = 0;
                if (a.isElement(e)) {
                    if (!1 === t && (d = e.offsetHeight),
                    "BODY" != u.nodeName) {
                        var f = l.getScrollContainer();
                        if (f)
                            return r = n(e).y - n(f).y + d,
                            s = f.clientHeight,
                            void ((r < (o = f.scrollTop) || r + 25 > o + s) && (f.scrollTop = r < o ? r : r - s + 25))
                    }
                    i = c.getViewPort(l.editor.getWin()),
                    r = c.getPos(e).y + d,
                    o = i.y,
                    s = i.h,
                    (r < i.y || r + 25 > o + s) && l.editor.getWin().scrollTo(0, r < o ? r : r - s + 25)
                }
            },
            placeCaretAt: function(e, t) {
                this.setRng(i.getCaretRangeFromPoint(e, t, this.editor.getDoc()))
            },
            _moveEndPoint: function(t, n, r) {
                var i = n
                  , o = new e(n,i)
                  , a = this.dom.schema.getNonEmptyElements();
                do {
                    if (3 == n.nodeType && 0 !== f(n.nodeValue).length)
                        return void (r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length));
                    if (a[n.nodeName] && !/^(TD|TH)$/.test(n.nodeName))
                        return void (r ? t.setStartBefore(n) : "BR" == n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n));
                    if (s.ie && s.ie < 11 && this.dom.isBlock(n) && this.dom.isEmpty(n))
                        return void (r ? t.setStart(n, 0) : t.setEnd(n, 0))
                } while (n = r ? o.next() : o.prev());
                "BODY" == i.nodeName && (r ? t.setStart(i, 0) : t.setEnd(i, i.childNodes.length))
            },
            getBoundingClientRect: function() {
                var e = this.getRng();
                return e.collapsed ? c.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect()
            },
            destroy: function() {
                this.win = null,
                this.controlSelection.destroy()
            }
        },
        u
    }
    )),
    n(q, [V, f], (function(e, t) {
        var n = t.each;
        return function(t) {
            this.compare = function(r, i) {
                function o(e) {
                    var r = {};
                    return n(t.getAttribs(e), (function(n) {
                        var i = n.nodeName.toLowerCase();
                        0 !== i.indexOf("_") && "style" !== i && 0 !== i.indexOf("data-") && (r[i] = t.getAttrib(e, i))
                    }
                    )),
                    r
                }
                function a(e, t) {
                    var n, r;
                    for (r in e)
                        if (e.hasOwnProperty(r)) {
                            if (void 0 === (n = t[r]))
                                return !1;
                            if (e[r] != n)
                                return !1;
                            delete t[r]
                        }
                    for (r in t)
                        if (t.hasOwnProperty(r))
                            return !1;
                    return !0
                }
                return !(r.nodeName != i.nodeName || !a(o(r), o(i)) || !a(t.parseStyle(t.getAttrib(r, "style")), t.parseStyle(t.getAttrib(i, "style"))) || e.isBookmarkNode(r) || e.isBookmarkNode(i))
            }
        }
    }
    )),
    n(j, [b, f, T], (function(e, t, n) {
        function r(e, r) {
            function i(e) {
                var t;
                return l = "string" == typeof e ? {
                    name: e,
                    classes: [],
                    attrs: {}
                } : e,
                function(e, t) {
                    t.classes.length && s.addClass(e, t.classes.join(" ")),
                    s.setAttribs(e, t.attrs)
                }(t = s.create(l.name), l),
                t
            }
            function o(e, n) {
                var r = "string" != typeof e ? e.nodeName.toLowerCase() : e
                  , i = u.getElementRule(r).parentsRequired;
                return !(!i || !i.length) && (n && -1 !== t.inArray(i, n) ? n : i[0])
            }
            var a, l, c, u = r && r.schema || new n({});
            return e && e.length ? (a = i(l = e[0]),
            (c = s.create("div")).appendChild(function e(n, r, a) {
                var l, c, u, d = r.length && r[0], f = d && d.name;
                if (u = o(n, f))
                    f == u ? (c = r[0],
                    r = r.slice(1)) : c = u;
                else if (d)
                    c = r[0],
                    r = r.slice(1);
                else if (!a)
                    return n;
                return c && (l = i(c)).appendChild(n),
                a && (l || (l = s.create("div")).appendChild(n),
                t.each(a, (function(e) {
                    var t = i(e);
                    l.insertBefore(t, n)
                }
                ))),
                e(l, r, c && c.siblings)
            }(a, e.slice(1), l.siblings)),
            c) : ""
        }
        function i(e) {
            var n, r = {
                classes: [],
                attrs: {}
            };
            return "*" !== (e = r.selector = t.trim(e)) && (n = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, (function(e, n, i, o, a) {
                switch (n) {
                case "#":
                    r.attrs.id = i;
                    break;
                case ".":
                    r.classes.push(i);
                    break;
                case ":":
                    -1 !== t.inArray("checked disabled enabled read-only required".split(" "), i) && (r.attrs[i] = i)
                }
                if ("[" == o) {
                    var s = a.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                    s && (r.attrs[s[1]] = s[2])
                }
                return ""
            }
            ))),
            r.name = n || "div",
            r
        }
        function o(e) {
            return e && "string" == typeof e ? (e = (e = e.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1"),
            t.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/), (function(e) {
                var n = t.map(e.split(/(?:~\+|~|\+)/), i)
                  , r = n.pop();
                return n.length && (r.siblings = n),
                r
            }
            )).reverse()) : []
        }
        var a = t.each
          , s = e.DOM;
        return {
            getCssText: function(e, t) {
                function n(e) {
                    return e.replace(/%(\w+)/g, "")
                }
                var i, l, c, u, d, f, h = "";
                if (!1 === (f = e.settings.preview_styles))
                    return "";
                if ("string" != typeof f && (f = "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"),
                "string" == typeof t) {
                    if (!(t = e.formatter.get(t)))
                        return;
                    t = t[0]
                }
                return "preview"in t && !1 === (f = t.preview) ? "" : (i = t.block || t.inline || "span",
                (u = o(t.selector)).length ? (u[0].name || (u[0].name = i),
                i = t.selector,
                l = r(u)) : l = r([i]),
                c = s.select(i, l)[0] || l.firstChild,
                a(t.styles, (function(e, t) {
                    (e = n(e)) && s.setStyle(c, t, e)
                }
                )),
                a(t.attributes, (function(e, t) {
                    (e = n(e)) && s.setAttrib(c, t, e)
                }
                )),
                a(t.classes, (function(e) {
                    e = n(e),
                    s.hasClass(c, e) || s.addClass(c, e)
                }
                )),
                e.fire("PreviewFormats"),
                s.setStyles(l, {
                    position: "absolute",
                    left: -65535
                }),
                e.getBody().appendChild(l),
                d = s.getStyle(e.getBody(), "fontSize", !0),
                d = /px$/.test(d) ? parseInt(d, 10) : 0,
                a(f.split(" "), (function(t) {
                    var n = s.getStyle(c, t, !0);
                    if (!("background-color" == t && /transparent|rgba\s*\([^)]+,\s*0\)/.test(n) && (n = s.getStyle(e.getBody(), t, !0),
                    "#ffffff" == s.toHex(n).toLowerCase()) || "color" == t && "#000000" == s.toHex(n).toLowerCase())) {
                        if ("font-size" == t && /em|%$/.test(n)) {
                            if (0 === d)
                                return;
                            n = (n = parseFloat(n, 10) / (/%$/.test(n) ? 100 : 1)) * d + "px"
                        }
                        "border" == t && n && (h += "padding:0 2px;"),
                        h += t + ":" + n + ";"
                    }
                }
                )),
                e.fire("AfterPreviewFormats"),
                s.remove(l),
                h)
            },
            parseSelector: o,
            selectorToHtml: function(e, t) {
                return r(o(e))
            }
        }
    }
    )),
    n(Y, [d, w, h], (function(e, t, n) {
        var r = {}
          , i = e.filter
          , o = e.each;
        return function(e, t) {
            var n = r[e];
            n || (r[e] = n = []),
            r[e].push(t)
        }("pre", (function(r) {
            var a, s, l = r.selection.getRng();
            a = t.matchNodeNames("pre"),
            l.collapsed || (s = r.selection.getSelectedBlocks(),
            o(i(i(s, a), (function(t) {
                return a(t.previousSibling) && -1 != e.indexOf(s, t.previousSibling)
            }
            )), (function(e) {
                !function(e, t) {
                    n(t).remove(),
                    n(e).append("<br><br>").append(t.childNodes)
                }(e.previousSibling, e)
            }
            )))
        }
        )),
        {
            postProcess: function(e, t) {
                o(r[e], (function(e) {
                    e(t)
                }
                ))
            }
        }
    }
    )),
    n(X, [m, _, V, q, f, j, Y], (function(e, t, n, r, i, o, a) {
        return function(s) {
            function l(e) {
                return e.nodeType && (e = e.nodeName),
                !!s.schema.getTextBlockElements()[e.toLowerCase()]
            }
            function c(e) {
                return /^(TH|TD)$/.test(e.nodeName)
            }
            function u(e, t) {
                return U.getParents(e, t, U.getRoot())
            }
            function d(e) {
                return 1 === e.nodeType && "_mce_caret" === e.id
            }
            function f(e) {
                return e ? z[e] : z
            }
            function h(e, t) {
                e && ("string" != typeof e ? ee(e, (function(e, t) {
                    h(t, e)
                }
                )) : (t = t.length ? t : [t],
                ee(t, (function(e) {
                    e.deep === H && (e.deep = !e.selector),
                    e.split === H && (e.split = !e.selector || e.inline),
                    e.remove === H && e.selector && !e.inline && (e.remove = "none"),
                    e.selector && e.inline && (e.mixed = !0,
                    e.block_expand = !0),
                    "string" == typeof e.classes && (e.classes = e.classes.split(/\s+/))
                }
                )),
                z[e] = t))
            }
            function p(e, t) {
                var n = f(t);
                if (n)
                    for (var r = 0; r < n.length; r++)
                        if (!1 === n[r].inherit && U.is(e, n[r].selector))
                            return !0;
                return !1
            }
            function m(e) {
                var t;
                return s.dom.getParent(e, (function(e) {
                    return (t = s.dom.getStyle(e, "text-decoration")) && "none" !== t
                }
                )),
                t
            }
            function g(e) {
                var t;
                1 === e.nodeType && e.parentNode && 1 === e.parentNode.nodeType && (t = m(e.parentNode),
                s.dom.getStyle(e, "color") && t ? s.dom.setStyle(e, "text-decoration", t) : s.dom.getStyle(e, "text-decoration") === t && s.dom.setStyle(e, "text-decoration", null))
            }
            function v(t, n, r) {
                function i(e, t) {
                    if (t = t || m,
                    e) {
                        if (t.onformat && t.onformat(e, t, n, r),
                        ee(t.styles, (function(t, r) {
                            U.setStyle(e, r, _(t, n))
                        }
                        )),
                        t.styles) {
                            var i = U.getAttrib(e, "style");
                            i && e.setAttribute("data-mce-style", i)
                        }
                        ee(t.attributes, (function(t, r) {
                            U.setAttrib(e, r, _(t, n))
                        }
                        )),
                        ee(t.classes, (function(t) {
                            t = _(t, n),
                            U.hasClass(e, t) || U.addClass(e, t)
                        }
                        ))
                    }
                }
                function o(e, t) {
                    var n = !1;
                    return !!m.selector && (ee(e, (function(e) {
                        if (!("collapsed"in e) || e.collapsed === y)
                            return U.is(t, e.selector) && !d(t) ? (i(t, e),
                            n = !0,
                            !1) : void 0
                    }
                    )),
                    n)
                }
                function c(e, r, a) {
                    var s, c, u = [], f = !0;
                    s = m.inline || m.block,
                    i(c = U.create(s)),
                    V.walk(e, (function(e) {
                        var r;
                        ee(e, (function e(h) {
                            var g, v, y, C;
                            if (C = f,
                            g = h.nodeName.toLowerCase(),
                            v = h.parentNode.nodeName.toLowerCase(),
                            1 === h.nodeType && Q(h) && (C = f,
                            f = "true" === Q(h),
                            y = !0),
                            w(g, "br"))
                                return r = 0,
                                void (m.block && U.remove(h));
                            if (m.wrapper && b(h, t, n))
                                r = 0;
                            else {
                                if (f && !y && m.block && !m.wrapper && l(g) && $(v, s))
                                    return i(h = U.rename(h, s)),
                                    u.push(h),
                                    void (r = 0);
                                if (m.selector) {
                                    var x = o(p, h);
                                    if (!m.inline || x)
                                        return void (r = 0)
                                }
                                !f || y || !$(s, g) || !$(v, s) || !a && 3 === h.nodeType && 1 === h.nodeValue.length && 65279 === h.nodeValue.charCodeAt(0) || d(h) || m.inline && q(h) ? (r = 0,
                                ee(te(h.childNodes), e),
                                y && (f = C),
                                r = 0) : (r || (r = U.clone(c, G),
                                h.parentNode.insertBefore(r, h),
                                u.push(r)),
                                r.appendChild(h))
                            }
                        }
                        ))
                    }
                    )),
                    !0 === m.links && ee(u, (function(e) {
                        !function e(t) {
                            "A" === t.nodeName && i(t, m),
                            ee(te(t.childNodes), e)
                        }(e)
                    }
                    )),
                    ee(u, (function(e) {
                        var r;
                        if (r = function(e) {
                            var t = 0;
                            return ee(e.childNodes, (function(e) {
                                S(e) || Z(e) || t++
                            }
                            )),
                            t
                        }(e),
                        !(u.length > 1) && q(e) || 0 !== r) {
                            if (m.inline || m.wrapper) {
                                if (m.exact || 1 !== r || (e = function(e) {
                                    var t, n;
                                    return ee(e.childNodes, (function(e) {
                                        if (1 == e.nodeType && !Z(e) && !d(e))
                                            return t = e,
                                            G
                                    }
                                    )),
                                    t && !Z(t) && x(t, m) && (i(n = U.clone(t, G)),
                                    U.replace(n, e, J),
                                    U.remove(t, 1)),
                                    n || e
                                }(e)),
                                ee(p, (function(t) {
                                    ee(U.select(t.inline, e), (function(e) {
                                        Z(e) || R(t, n, e, t.exact ? e : null)
                                    }
                                    ))
                                }
                                )),
                                b(e.parentNode, t, n))
                                    return U.remove(e, 1),
                                    e = 0,
                                    J;
                                m.merge_with_parents && U.getParent(e.parentNode, (function(r) {
                                    if (b(r, t, n))
                                        return U.remove(e, 1),
                                        e = 0,
                                        J
                                }
                                )),
                                e && !1 !== m.merge_siblings && (e = D(B(e), e),
                                e = D(e, B(e, J)))
                            }
                        } else
                            U.remove(e, 1)
                    }
                    ))
                }
                var u, h, p = f(t), m = p[0], y = !r && W.isCollapsed();
                if ("false" !== Q(W.getNode())) {
                    if (m) {
                        if (r)
                            r.nodeType ? o(p, r) || ((h = U.createRng()).setStartBefore(r),
                            h.setEndAfter(r),
                            c(T(h, p), 0, !0)) : c(r, 0, !0);
                        else if (y && m.inline && !U.select("td[data-mce-selected],th[data-mce-selected]").length)
                            M("apply", t, n);
                        else {
                            var C = s.selection.getNode();
                            j || !p[0].defaultBlock || U.getParent(C, U.isBlock) || v(p[0].defaultBlock),
                            s.selection.setRng(function() {
                                var t = s.selection.getRng()
                                  , n = t.startContainer
                                  , i = t.endContainer;
                                if (n != i && 0 === t.endOffset) {
                                    var o = function(t, n) {
                                        var i = new e(n);
                                        for (r = i.prev2(); r; r = i.prev2()) {
                                            if (3 == r.nodeType && r.data.length > 0)
                                                return r;
                                            if (r.childNodes.length > 1 || r == t || "BR" == r.tagName)
                                                return r
                                        }
                                    }(n, i)
                                      , a = 3 == o.nodeType ? o.data.length : o.childNodes.length;
                                    t.setEnd(o, a)
                                }
                                return t
                            }()),
                            u = W.getBookmark(),
                            c(T(W.getRng(J), p)),
                            m.styles && (m.styles.color || m.styles.textDecoration) && (ne(C, g, "childNodes"),
                            g(C)),
                            W.moveToBookmark(u),
                            P(W.getRng(J)),
                            s.nodeChanged()
                        }
                        a.postProcess(t, s)
                    }
                } else {
                    r = W.getNode();
                    for (var E = 0, N = p.length; E < N; E++)
                        if (p[E].ceFalseOverride && U.is(r, p[E].selector))
                            return void i(r, p[E])
                }
            }
            function y(e, t, n, r) {
                function i(e) {
                    var n, r, o, a, s;
                    if (1 === e.nodeType && Q(e) && (a = y,
                    y = "true" === Q(e),
                    s = !0),
                    n = te(e.childNodes),
                    y && !s)
                        for (r = 0,
                        o = g.length; r < o && !R(g[r], t, e, e); r++)
                            ;
                    if (v.deep && n.length) {
                        for (r = 0,
                        o = n.length; r < o; r++)
                            i(n[r]);
                        s && (y = a)
                    }
                }
                function o(n) {
                    var i;
                    return ee(u(n.parentNode).reverse(), (function(n) {
                        var o;
                        i || "_start" == n.id || "_end" == n.id || (o = b(n, e, t, r)) && !1 !== o.split && (i = n)
                    }
                    )),
                    i
                }
                function a(e) {
                    return function(e, n, r, i) {
                        var o, a, s, l, c, u;
                        if (e) {
                            for (u = e.parentNode,
                            o = n.parentNode; o && o != u; o = o.parentNode) {
                                for (a = U.clone(o, G),
                                c = 0; c < g.length; c++)
                                    if (R(g[c], t, a, a)) {
                                        a = 0;
                                        break
                                    }
                                a && (s && a.appendChild(s),
                                l || (l = a),
                                s = a)
                            }
                            !i || v.mixed && q(e) || (n = U.split(e, n)),
                            s && (r.parentNode.insertBefore(s, r),
                            l.appendChild(r))
                        }
                        return n
                    }(o(e), e, e, !0)
                }
                function l(e) {
                    var t = U.get(e ? "_start" : "_end")
                      , n = t[e ? "firstChild" : "lastChild"];
                    return Z(n) && (n = n[e ? "firstChild" : "lastChild"]),
                    3 == n.nodeType && 0 === n.data.length && (n = e ? t.previousSibling || t.nextSibling : t.nextSibling || t.previousSibling),
                    U.remove(t, !0),
                    n
                }
                function d(e) {
                    var t, n, r = e.commonAncestorContainer;
                    if (e = T(e, g, J),
                    v.split) {
                        if ((t = L(e, J)) != (n = L(e))) {
                            if (/^(TR|TH|TD)$/.test(t.nodeName) && t.firstChild && (t = "TR" == t.nodeName ? t.firstChild.firstChild || t : t.firstChild || t),
                            r && /^T(HEAD|BODY|FOOT|R)$/.test(r.nodeName) && c(n) && n.firstChild && (n = n.firstChild || n),
                            U.isChildOf(t, n) && !q(n) && !c(t) && !c(n))
                                return a(t = k(t, "span", {
                                    id: "_start",
                                    "data-mce-type": "bookmark"
                                })),
                                void (t = l(J));
                            t = k(t, "span", {
                                id: "_start",
                                "data-mce-type": "bookmark"
                            }),
                            n = k(n, "span", {
                                id: "_end",
                                "data-mce-type": "bookmark"
                            }),
                            a(t),
                            a(n),
                            t = l(J),
                            n = l()
                        } else
                            t = n = a(t);
                        e.startContainer = t.parentNode ? t.parentNode : t,
                        e.startOffset = Y(t),
                        e.endContainer = n.parentNode ? n.parentNode : n,
                        e.endOffset = Y(n) + 1
                    }
                    V.walk(e, (function(e) {
                        ee(e, (function(e) {
                            i(e),
                            1 === e.nodeType && "underline" === s.dom.getStyle(e, "text-decoration") && e.parentNode && "underline" === m(e.parentNode) && R({
                                deep: !1,
                                exact: !0,
                                inline: "span",
                                styles: {
                                    textDecoration: "underline"
                                }
                            }, null, e)
                        }
                        ))
                    }
                    ))
                }
                var h, p, g = f(e), v = g[0], y = !0;
                if (n)
                    n.nodeType ? ((p = U.createRng()).setStartBefore(n),
                    p.setEndAfter(n),
                    d(p)) : d(n);
                else if ("false" !== Q(W.getNode()))
                    W.isCollapsed() && v.inline && !U.select("td[data-mce-selected],th[data-mce-selected]").length ? M("remove", e, t, r) : (h = W.getBookmark(),
                    d(W.getRng(J)),
                    W.moveToBookmark(h),
                    v.inline && C(e, t, W.getStart()) && P(W.getRng(!0)),
                    s.nodeChanged());
                else {
                    n = W.getNode();
                    for (var x = 0, w = g.length; x < w && (!g[x].ceFalseOverride || !R(g[x], t, n, n)); x++)
                        ;
                }
            }
            function b(e, t, n, r) {
                function i(e, t, i) {
                    var o, a, s, l = t[i];
                    if (t.onmatch)
                        return t.onmatch(e, t, i);
                    if (l)
                        if (l.length === H) {
                            for (o in l)
                                if (l.hasOwnProperty(o)) {
                                    if (a = "attributes" === i ? U.getAttrib(e, o) : E(e, o),
                                    r && !a && !t.exact)
                                        return;
                                    if ((!r || t.exact) && !w(a, N(_(l[o], n), o)))
                                        return
                                }
                        } else
                            for (s = 0; s < l.length; s++)
                                if ("attributes" === i ? U.getAttrib(e, l[s]) : E(e, l[s]))
                                    return t;
                    return t
                }
                var o, a, s, l = f(t);
                if (l && e)
                    for (a = 0; a < l.length; a++)
                        if (x(e, o = l[a]) && i(e, o, "attributes") && i(e, o, "styles")) {
                            if (s = o.classes)
                                for (a = 0; a < s.length; a++)
                                    if (!U.hasClass(e, s[a]))
                                        return;
                            return o
                        }
            }
            function C(e, t, n) {
                function r(n) {
                    var r = U.getRoot();
                    return n !== r && (n = U.getParent(n, (function(n) {
                        return !!p(n, e) || n.parentNode === r || !!b(n, e, t, !0)
                    }
                    )),
                    b(n, e, t))
                }
                var i;
                return n ? r(n) : r(n = W.getNode()) ? J : (i = W.getStart()) != n && r(i) ? J : G
            }
            function x(e, t) {
                return w(e, t.inline) || w(e, t.block) ? J : t.selector ? 1 == e.nodeType && U.is(e, t.selector) : void 0
            }
            function w(e, t) {
                return t = t || "",
                e = "" + ((e = e || "").nodeName || e),
                t = "" + (t.nodeName || t),
                e.toLowerCase() == t.toLowerCase()
            }
            function E(e, t) {
                return N(U.getStyle(e, t), t)
            }
            function N(e, t) {
                return "color" != t && "backgroundColor" != t || (e = U.toHex(e)),
                "fontWeight" == t && 700 == e && (e = "bold"),
                "fontFamily" == t && (e = e.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")),
                "" + e
            }
            function _(e, t) {
                return "string" != typeof e ? e = e(t) : t && (e = e.replace(/%(\w+)/g, (function(e, n) {
                    return t[n] || e
                }
                ))),
                e
            }
            function S(e) {
                return e && 3 === e.nodeType && /^([\t \r\n]+|)$/.test(e.nodeValue)
            }
            function k(e, t, n) {
                var r = U.create(t, n);
                return e.parentNode.insertBefore(r, e),
                r.appendChild(e),
                r
            }
            function T(t, n, r) {
                function i(e) {
                    function t(e) {
                        return "BR" == e.nodeName && e.getAttribute("data-mce-bogus") && !e.nextSibling
                    }
                    var r, i, o, a, s;
                    if (r = i = e ? g : y,
                    a = e ? "previousSibling" : "nextSibling",
                    s = U.getRoot(),
                    3 == r.nodeType && !S(r) && (e ? v > 0 : b < r.nodeValue.length))
                        return r;
                    for (; ; ) {
                        if (!n[0].block_expand && q(i))
                            return i;
                        for (o = i[a]; o; o = o[a])
                            if (!Z(o) && !S(o) && !t(o))
                                return i;
                        if (i == s || i.parentNode == s) {
                            r = i;
                            break
                        }
                        i = i.parentNode
                    }
                    return r
                }
                function o(e, t) {
                    for (t === H && (t = 3 === e.nodeType ? e.length : e.childNodes.length); e && e.hasChildNodes(); )
                        (e = e.childNodes[t]) && (t = 3 === e.nodeType ? e.length : e.childNodes.length);
                    return {
                        node: e,
                        offset: t
                    }
                }
                function a(e) {
                    for (var t = e; t; ) {
                        if (1 === t.nodeType && Q(t))
                            return "false" === Q(t) ? t : e;
                        t = t.parentNode
                    }
                    return e
                }
                function c(t, n, i) {
                    function o(e, t) {
                        var n, o, a = e.nodeValue;
                        return void 0 === t && (t = i ? a.length : 0),
                        i ? -1 === (n = (n = a.lastIndexOf(" ", t)) > (o = a.lastIndexOf(" ", t)) ? n : o) || r || n++ : (n = a.indexOf(" ", t),
                        o = a.indexOf(" ", t),
                        n = -1 !== n && (-1 === o || n < o) ? n : o),
                        n
                    }
                    var a, l, c, u;
                    if (3 === t.nodeType) {
                        if (-1 !== (c = o(t, n)))
                            return {
                                container: t,
                                offset: c
                            };
                        u = t
                    }
                    for (a = new e(t,U.getParent(t, q) || s.getBody()); l = a[i ? "prev" : "next"](); )
                        if (3 === l.nodeType) {
                            if (u = l,
                            -1 !== (c = o(l)))
                                return {
                                    container: l,
                                    offset: c
                                }
                        } else if (q(l))
                            break;
                    if (u)
                        return {
                            container: u,
                            offset: n = i ? 0 : u.length
                        }
                }
                function d(e, r) {
                    var i, o, a, s;
                    for (3 == e.nodeType && 0 === e.nodeValue.length && e[r] && (e = e[r]),
                    i = u(e),
                    o = 0; o < i.length; o++)
                        for (a = 0; a < n.length; a++)
                            if ((!("collapsed"in (s = n[a])) || s.collapsed === t.collapsed) && U.is(i[o], s.selector))
                                return i[o];
                    return e
                }
                function f(e, t) {
                    var r, i = U.getRoot();
                    if (n[0].wrapper || (r = U.getParent(e, n[0].block, i)),
                    r || (r = U.getParent(3 == e.nodeType ? e.parentNode : e, (function(e) {
                        return e != i && l(e)
                    }
                    ))),
                    r && n[0].wrapper && (r = u(r, "ul,ol").reverse()[0] || r),
                    !r)
                        for (r = e; r[t] && !q(r[t]) && !w(r = r[t], "br"); )
                            ;
                    return r || e
                }
                var h, p, m, g = t.startContainer, v = t.startOffset, y = t.endContainer, b = t.endOffset;
                if (1 == g.nodeType && g.hasChildNodes() && (h = g.childNodes.length - 1,
                3 == (g = g.childNodes[v > h ? h : v]).nodeType && (v = 0)),
                1 == y.nodeType && y.hasChildNodes() && (h = y.childNodes.length - 1,
                3 == (y = y.childNodes[b > h ? h : b - 1]).nodeType && (b = y.nodeValue.length)),
                g = a(g),
                y = a(y),
                (Z(g.parentNode) || Z(g)) && (3 == (g = (g = Z(g) ? g : g.parentNode).nextSibling || g).nodeType && (v = 0)),
                (Z(y.parentNode) || Z(y)) && (3 == (y = (y = Z(y) ? y : y.parentNode).previousSibling || y).nodeType && (b = y.length)),
                n[0].inline && (t.collapsed && ((m = c(g, v, !0)) && (g = m.container,
                v = m.offset),
                (m = c(y, b)) && (y = m.container,
                b = m.offset)),
                (p = o(y, b)).node)) {
                    for (; p.node && 0 === p.offset && p.node.previousSibling; )
                        p = o(p.node.previousSibling);
                    p.node && p.offset > 0 && 3 === p.node.nodeType && " " === p.node.nodeValue.charAt(p.offset - 1) && p.offset > 1 && (y = p.node).splitText(p.offset - 1)
                }
                return (n[0].inline || n[0].block_expand) && (n[0].inline && 3 == g.nodeType && 0 !== v || (g = i(!0)),
                n[0].inline && 3 == y.nodeType && b !== y.nodeValue.length || (y = i())),
                n[0].selector && n[0].expand !== G && !n[0].inline && (g = d(g, "previousSibling"),
                y = d(y, "nextSibling")),
                (n[0].block || n[0].selector) && (g = f(g, "previousSibling"),
                y = f(y, "nextSibling"),
                n[0].block && (q(g) || (g = i(!0)),
                q(y) || (y = i()))),
                1 == g.nodeType && (v = Y(g),
                g = g.parentNode),
                1 == y.nodeType && (b = Y(y) + 1,
                y = y.parentNode),
                {
                    startContainer: g,
                    startOffset: v,
                    endContainer: y,
                    endOffset: b
                }
            }
            function R(e, t, n, r) {
                var i, o, a;
                if (!x(n, e) && !function(e, t) {
                    return t.links && "A" == e.tagName
                }(n, e))
                    return G;
                if ("all" != e.remove)
                    for (ee(e.styles, (function(i, o) {
                        i = N(_(i, t), o),
                        "number" == typeof o && (o = i,
                        r = 0),
                        (e.remove_similar || !r || w(E(r, o), i)) && U.setStyle(n, o, ""),
                        a = 1
                    }
                    )),
                    a && "" === U.getAttrib(n, "style") && (n.removeAttribute("style"),
                    n.removeAttribute("data-mce-style")),
                    ee(e.attributes, (function(e, i) {
                        var o;
                        if (e = _(e, t),
                        "number" == typeof i && (i = e,
                        r = 0),
                        !r || w(U.getAttrib(r, i), e)) {
                            if ("class" == i && ((e = U.getAttrib(n, i)) && (o = "",
                            ee(e.split(/\s+/), (function(e) {
                                /mce\-\w+/.test(e) && (o += (o ? " " : "") + e)
                            }
                            )),
                            o)))
                                return void U.setAttrib(n, i, o);
                            "class" == i && n.removeAttribute("className"),
                            K.test(i) && n.removeAttribute("data-mce-" + i),
                            n.removeAttribute(i)
                        }
                    }
                    )),
                    ee(e.classes, (function(e) {
                        e = _(e, t),
                        r && !U.hasClass(r, e) || U.removeClass(n, e)
                    }
                    )),
                    o = U.getAttribs(n),
                    i = 0; i < o.length; i++) {
                        var s = o[i].nodeName;
                        if (0 !== s.indexOf("_") && 0 !== s.indexOf("data-"))
                            return G
                    }
                return "none" != e.remove ? (A(n, e),
                J) : void 0
            }
            function A(e, t) {
                function n(e, t, n) {
                    return !(e = B(e, t, n)) || "BR" == e.nodeName || q(e)
                }
                var r, i = e.parentNode;
                t.block && (j ? i == U.getRoot() && (t.list_block && w(e, t.list_block) || ee(te(e.childNodes), (function(e) {
                    $(j, e.nodeName.toLowerCase()) ? r ? r.appendChild(e) : (r = k(e, j),
                    U.setAttribs(r, s.settings.forced_root_block_attrs)) : r = 0
                }
                ))) : q(e) && !q(i) && (n(e, G) || n(e.firstChild, J, 1) || e.insertBefore(U.create("br"), e.firstChild),
                n(e, J) || n(e.lastChild, G, 1) || e.appendChild(U.create("br")))),
                t.selector && t.inline && !w(t.inline, e) || U.remove(e, 1)
            }
            function B(e, t, n) {
                if (e)
                    for (t = t ? "nextSibling" : "previousSibling",
                    e = n ? e : e[t]; e; e = e[t])
                        if (1 == e.nodeType || !S(e))
                            return e
            }
            function D(e, t) {
                function n(e, t) {
                    for (i = e; i; i = i[t]) {
                        if (3 == i.nodeType && 0 !== i.nodeValue.length)
                            return e;
                        if (1 == i.nodeType && !Z(i))
                            return i
                    }
                    return e
                }
                var i, o, a = new r(U);
                if (e && t && (e = n(e, "previousSibling"),
                t = n(t, "nextSibling"),
                a.compare(e, t))) {
                    for (i = e.nextSibling; i && i != t; )
                        o = i,
                        i = i.nextSibling,
                        e.appendChild(o);
                    return U.remove(t),
                    ee(te(t.childNodes), (function(t) {
                        e.appendChild(t)
                    }
                    )),
                    e
                }
                return t
            }
            function L(t, n) {
                var r, i, o;
                return r = t[n ? "startContainer" : "endContainer"],
                i = t[n ? "startOffset" : "endOffset"],
                1 == r.nodeType && (o = r.childNodes.length - 1,
                !n && i && i--,
                r = r.childNodes[i > o ? o : i]),
                3 === r.nodeType && n && i >= r.nodeValue.length && (r = new e(r,s.getBody()).next() || r),
                3 !== r.nodeType || n || 0 !== i || (r = new e(r,s.getBody()).prev() || r),
                r
            }
            function M(t, n, r, i) {
                function o(e) {
                    var t = U.create("span", {
                        id: p,
                        "data-mce-bogus": !0,
                        style: m ? "color:red" : ""
                    });
                    return e && t.appendChild(s.getDoc().createTextNode(X)),
                    t
                }
                function a(e, t) {
                    for (; e; ) {
                        if (3 === e.nodeType && e.nodeValue !== X || e.childNodes.length > 1)
                            return !1;
                        t && 1 === e.nodeType && t.push(e),
                        e = e.firstChild
                    }
                    return !0
                }
                function c(e) {
                    for (; e; ) {
                        if (e.id === p)
                            return e;
                        e = e.parentNode
                    }
                }
                function u(t) {
                    var n;
                    if (t)
                        for (t = (n = new e(t,t)).current(); t; t = n.next())
                            if (3 === t.nodeType)
                                return t
                }
                function d(e, t) {
                    var n, r;
                    if (e)
                        r = W.getRng(!0),
                        a(e) ? (!1 !== t && (r.setStartBefore(e),
                        r.setEndBefore(e)),
                        U.remove(e)) : ((n = u(e)).nodeValue.charAt(0) === X && (n.deleteData(0, 1),
                        r.startContainer == n && r.startOffset > 0 && r.setStart(n, r.startOffset - 1),
                        r.endContainer == n && r.endOffset > 0 && r.setEnd(n, r.endOffset - 1)),
                        U.remove(e, 1)),
                        W.setRng(r);
                    else if (!(e = c(W.getStart())))
                        for (; e = U.get(p); )
                            d(e, !1)
                }
                function h() {
                    var e;
                    (e = c(W.getStart())) && !U.isEmpty(e) && ne(e, (function(e) {
                        1 != e.nodeType || e.id === p || U.isEmpty(e) || U.setAttrib(e, "data-mce-bogus", null)
                    }
                    ), "childNodes")
                }
                var p = "_mce_caret"
                  , m = s.settings.caret_debug;
                s._hasCaretEvents || (F = function() {
                    var e, t = [];
                    if (a(c(W.getStart()), t))
                        for (e = t.length; e--; )
                            U.setAttrib(t[e], "data-mce-bogus", "1")
                }
                ,
                I = function(e) {
                    var t = e.keyCode;
                    d(),
                    8 == t && W.isCollapsed() && W.getStart().innerHTML == X && d(c(W.getStart())),
                    37 != t && 39 != t || d(c(W.getStart())),
                    h()
                }
                ,
                s.on("SetContent", (function(e) {
                    e.selection && h()
                }
                )),
                s._hasCaretEvents = !0),
                "apply" == t ? function() {
                    var e, t, i, a, s, l;
                    a = (e = W.getRng(!0)).startOffset,
                    l = e.startContainer.nodeValue,
                    (t = c(W.getStart())) && (i = u(t)),
                    l && a > 0 && a < l.length && /\w/.test(l.charAt(a)) && /\w/.test(l.charAt(a - 1)) ? (s = W.getBookmark(),
                    e.collapse(!0),
                    e = T(e, f(n)),
                    e = V.split(e),
                    v(n, r, e),
                    W.moveToBookmark(s)) : (t && i.nodeValue === X || (i = (t = o(!0)).firstChild,
                    e.insertNode(t),
                    a = 1),
                    v(n, r, t),
                    W.setCursorLocation(i, a))
                }() : function() {
                    var e, t, a, s, c, u, d, h, p = W.getRng(!0), m = [];
                    for (e = p.startContainer,
                    t = p.startOffset,
                    c = e,
                    3 == e.nodeType && (t != e.nodeValue.length && (s = !0),
                    c = c.parentNode); c; ) {
                        if (b(c, n, r, i)) {
                            u = c;
                            break
                        }
                        c.nextSibling && (s = !0),
                        m.push(c),
                        c = c.parentNode
                    }
                    if (u)
                        if (s)
                            a = W.getBookmark(),
                            p.collapse(!0),
                            p = T(p, f(n), !0),
                            p = V.split(p),
                            y(n, r, p),
                            W.moveToBookmark(a);
                        else {
                            for (c = h = o(),
                            d = m.length - 1; d >= 0; d--)
                                c.appendChild(U.clone(m[d], !1)),
                                c = c.firstChild;
                            c.appendChild(U.doc.createTextNode(X)),
                            c = c.firstChild;
                            var g = U.getParent(u, l);
                            g && U.isEmpty(g) ? u.parentNode.replaceChild(h, u) : U.insertAfter(h, u),
                            W.setCursorLocation(c, 1),
                            U.isEmpty(u) && U.remove(u)
                        }
                }()
            }
            function P(t) {
                var n, r, i, o, a, s = t.startContainer, l = t.startOffset;
                if ((t.startContainer != t.endContainer || !function(e) {
                    return e && /^(IMG)$/.test(e.nodeName)
                }(t.startContainer.childNodes[t.startOffset])) && (3 == s.nodeType && l >= s.nodeValue.length && (l = Y(s),
                s = s.parentNode,
                n = !0),
                1 == s.nodeType))
                    for (s = (o = s.childNodes)[Math.min(l, o.length - 1)],
                    r = new e(s,U.getParent(s, U.isBlock)),
                    (l > o.length - 1 || n) && r.next(),
                    i = r.current(); i; i = r.next())
                        if (3 == i.nodeType && !S(i))
                            return a = U.create("a", {
                                "data-mce-bogus": "all"
                            }, X),
                            i.parentNode.insertBefore(a, i),
                            t.setStart(i, 0),
                            W.setRng(t),
                            void U.remove(a)
            }
            var O, H, I, F, z = {}, U = s.dom, W = s.selection, V = new t(U), $ = s.schema.isValidChild, q = U.isBlock, j = s.settings.forced_root_block, Y = U.nodeIndex, X = "\ufeff", K = /^(src|href|style)$/, G = !1, J = !0, Q = U.getContentEditable, Z = n.isBookmarkNode, ee = i.each, te = i.grep, ne = i.walk;
            (0,
            i.extend)(this, {
                get: f,
                register: h,
                unregister: function(e) {
                    return e && z[e] && delete z[e],
                    z
                },
                apply: v,
                remove: y,
                toggle: function(e, t, n) {
                    var r = f(e);
                    !C(e, t, n) || "toggle"in r[0] && !r[0].toggle ? v(e, t, n) : y(e, t, n)
                },
                match: C,
                matchAll: function(e, t) {
                    var n, r = [], i = {};
                    return n = W.getStart(),
                    U.getParent(n, (function(n) {
                        var o, a;
                        for (o = 0; o < e.length; o++)
                            a = e[o],
                            !i[a] && b(n, a, t) && (i[a] = !0,
                            r.push(a))
                    }
                    ), U.getRoot()),
                    r
                },
                matchNode: b,
                canApply: function(e) {
                    var t, n, r, i, o = f(e);
                    if (o)
                        for (t = u(W.getStart()),
                        r = o.length - 1; r >= 0; r--) {
                            if (!(i = o[r].selector) || o[r].defaultBlock)
                                return J;
                            for (n = t.length - 1; n >= 0; n--)
                                if (U.is(t[n], i))
                                    return J
                        }
                    return G
                },
                formatChanged: function(e, t, n) {
                    var r;
                    return O || (O = {},
                    r = {},
                    s.on("NodeChange", (function(e) {
                        var t = u(e.element)
                          , n = {};
                        t = i.grep(t, (function(e) {
                            return 1 == e.nodeType && !e.getAttribute("data-mce-bogus")
                        }
                        )),
                        ee(O, (function(e, i) {
                            ee(t, (function(o) {
                                return b(o, i, {}, e.similar) ? (r[i] || (ee(e, (function(e) {
                                    e(!0, {
                                        node: o,
                                        format: i,
                                        parents: t
                                    })
                                }
                                )),
                                r[i] = e),
                                n[i] = e,
                                !1) : !p(o, i) && void 0
                            }
                            ))
                        }
                        )),
                        ee(r, (function(i, o) {
                            n[o] || (delete r[o],
                            ee(i, (function(n) {
                                n(!1, {
                                    node: e.element,
                                    format: o,
                                    parents: t
                                })
                            }
                            )))
                        }
                        ))
                    }
                    ))),
                    ee(e.split(","), (function(e) {
                        O[e] || (O[e] = [],
                        O[e].similar = n),
                        O[e].push(t)
                    }
                    )),
                    this
                },
                getCssText: function(e) {
                    return o.getCssText(s, e)
                }
            }),
            h({
                valigntop: [{
                    selector: "td,th",
                    styles: {
                        verticalAlign: "top"
                    }
                }],
                valignmiddle: [{
                    selector: "td,th",
                    styles: {
                        verticalAlign: "middle"
                    }
                }],
                valignbottom: [{
                    selector: "td,th",
                    styles: {
                        verticalAlign: "bottom"
                    }
                }],
                alignleft: [{
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-left",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                }, {
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {
                        textAlign: "left"
                    },
                    inherit: !1,
                    preview: !1,
                    defaultBlock: "div"
                }, {
                    selector: "img,table",
                    collapsed: !1,
                    styles: {
                        float: "left"
                    },
                    preview: "font-family font-size"
                }],
                aligncenter: [{
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {
                        textAlign: "center"
                    },
                    inherit: !1,
                    preview: !1,
                    defaultBlock: "div"
                }, {
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-center",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                }, {
                    selector: "img",
                    collapsed: !1,
                    styles: {
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"
                    },
                    preview: !1
                }, {
                    selector: "table",
                    collapsed: !1,
                    styles: {
                        marginLeft: "auto",
                        marginRight: "auto"
                    },
                    preview: "font-family font-size"
                }],
                alignright: [{
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-right",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                }, {
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {
                        textAlign: "right"
                    },
                    inherit: !1,
                    preview: "font-family font-size",
                    defaultBlock: "div"
                }, {
                    selector: "img,table",
                    collapsed: !1,
                    styles: {
                        float: "right"
                    },
                    preview: "font-family font-size"
                }],
                alignjustify: [{
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {
                        textAlign: "justify"
                    },
                    inherit: !1,
                    defaultBlock: "div",
                    preview: "font-family font-size"
                }],
                bold: [{
                    inline: "strong",
                    remove: "all"
                }, {
                    inline: "span",
                    styles: {
                        fontWeight: "bold"
                    }
                }, {
                    inline: "b",
                    remove: "all"
                }],
                italic: [{
                    inline: "em",
                    remove: "all"
                }, {
                    inline: "span",
                    styles: {
                        fontStyle: "italic"
                    }
                }, {
                    inline: "i",
                    remove: "all"
                }],
                underline: [{
                    inline: "span",
                    styles: {
                        textDecoration: "underline"
                    },
                    exact: !0
                }, {
                    inline: "u",
                    remove: "all"
                }],
                strikethrough: [{
                    inline: "span",
                    styles: {
                        textDecoration: "line-through"
                    },
                    exact: !0
                }, {
                    inline: "strike",
                    remove: "all"
                }],
                forecolor: {
                    inline: "span",
                    styles: {
                        color: "%value"
                    },
                    links: !0,
                    remove_similar: !0
                },
                hilitecolor: {
                    inline: "span",
                    styles: {
                        backgroundColor: "%value"
                    },
                    links: !0,
                    remove_similar: !0
                },
                fontname: {
                    inline: "span",
                    styles: {
                        fontFamily: "%value"
                    }
                },
                fontsize: {
                    inline: "span",
                    styles: {
                        fontSize: "%value"
                    }
                },
                fontsize_class: {
                    inline: "span",
                    attributes: {
                        class: "%value"
                    }
                },
                blockquote: {
                    block: "blockquote",
                    wrapper: 1,
                    remove: "all"
                },
                subscript: {
                    inline: "sub"
                },
                superscript: {
                    inline: "sup"
                },
                code: {
                    inline: "code"
                },
                link: {
                    inline: "a",
                    selector: "a",
                    remove: "all",
                    split: !0,
                    deep: !0,
                    onmatch: function() {
                        return !0
                    },
                    onformat: function(e, t, n) {
                        ee(n, (function(t, n) {
                            U.setAttrib(e, n, t)
                        }
                        ))
                    }
                },
                removeformat: [{
                    selector: "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",
                    remove: "all",
                    split: !0,
                    expand: !1,
                    block_expand: !0,
                    deep: !0
                }, {
                    selector: "span",
                    attributes: ["style", "class"],
                    remove: "empty",
                    split: !0,
                    expand: !1,
                    deep: !0
                }, {
                    selector: "*",
                    attributes: ["style", "class"],
                    split: !1,
                    expand: !1,
                    deep: !0
                }]
            }),
            ee("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/), (function(e) {
                h(e, {
                    block: e,
                    remove: "all"
                })
            }
            )),
            h(s.settings.formats),
            function() {
                s.addShortcut("meta+b", "bold_desc", "Bold"),
                s.addShortcut("meta+i", "italic_desc", "Italic"),
                s.addShortcut("meta+u", "underline_desc", "Underline");
                for (var e = 1; e <= 6; e++)
                    s.addShortcut("access+" + e, "", ["FormatBlock", !1, "h" + e]);
                s.addShortcut("access+7", "", ["FormatBlock", !1, "p"]),
                s.addShortcut("access+8", "", ["FormatBlock", !1, "div"]),
                s.addShortcut("access+9", "", ["FormatBlock", !1, "address"])
            }(),
            s.on("BeforeGetContent", (function(e) {
                F && "raw" != e.format && F()
            }
            )),
            s.on("mouseup keydown", (function(e) {
                I && I(e)
            }
            ))
        }
    }
    )),
    n(K, [], (function() {
        return {
            KEEP: 0,
            DELETE: 2,
            INSERT: 1,
            diff: function(e, t) {
                var n = e.length + t.length + 2
                  , r = new Array(n)
                  , i = new Array(n)
                  , o = function(n, r, i, a, l) {
                    var c = s(n, r, i, a);
                    if (null === c || c.start === r && c.diag === r - a || c.end === n && c.diag === n - i)
                        for (var u = n, d = i; u < r || d < a; )
                            u < r && d < a && e[u] === t[d] ? (l.push([0, e[u]]),
                            ++u,
                            ++d) : r - n > a - i ? (l.push([2, e[u]]),
                            ++u) : (l.push([1, t[d]]),
                            ++d);
                    else {
                        o(n, c.start, i, c.start - c.diag, l);
                        for (var f = c.start; f < c.end; ++f)
                            l.push([0, e[f]]);
                        o(c.end, r, c.end - c.diag, a, l)
                    }
                }
                  , a = function(n, r, i, o) {
                    for (var a = n; a - r < o && a < i && e[a] === t[a - r]; )
                        ++a;
                    return function(e, t, n) {
                        return {
                            start: e,
                            end: t,
                            diag: n
                        }
                    }(n, a, r)
                }
                  , s = function(n, o, s, l) {
                    var c = o - n
                      , u = l - s;
                    if (0 === c || 0 === u)
                        return null;
                    var d = c - u
                      , f = u + c
                      , h = (f % 2 == 0 ? f : f + 1) / 2;
                    r[1 + h] = n,
                    i[1 + h] = o + 1;
                    for (var p = 0; p <= h; ++p) {
                        for (var m = -p; m <= p; m += 2) {
                            var g = m + h;
                            m === -p || m != p && r[g - 1] < r[g + 1] ? r[g] = r[g + 1] : r[g] = r[g - 1] + 1;
                            for (var v = r[g], y = v - n + s - m; v < o && y < l && e[v] === t[y]; )
                                r[g] = ++v,
                                ++y;
                            if (d % 2 != 0 && d - p <= m && m <= d + p && i[g - d] <= r[g])
                                return a(i[g - d], m + n - s, o, l)
                        }
                        for (m = d - p; m <= d + p; m += 2) {
                            for (g = m + h - d,
                            m === d - p || m != d + p && i[g + 1] <= i[g - 1] ? i[g] = i[g + 1] - 1 : i[g] = i[g - 1],
                            y = (v = i[g] - 1) - n + s - m; v >= n && y >= s && e[v] === t[y]; )
                                i[g] = v--,
                                y--;
                            if (d % 2 == 0 && -p <= m && m <= p && i[g] <= r[g + d])
                                return a(i[g], m + n - s, o, l)
                        }
                    }
                }
                  , l = [];
                return o(0, e.length, 0, t.length, l),
                l
            }
        }
    }
    )),
    n(G, [d, v, K], (function(e, t, n) {
        var r = function(e) {
            return 1 === e.nodeType ? e.outerHTML : 3 === e.nodeType ? t.encodeRaw(e.data, !1) : 8 === e.nodeType ? "\x3c!--" + e.data + "--\x3e" : ""
        }
          , i = function(e, t, n) {
            var r = function(e) {
                var t, n, r;
                for (r = document.createElement("div"),
                t = document.createDocumentFragment(),
                e && (r.innerHTML = e); n = r.firstChild; )
                    t.appendChild(n);
                return t
            }(t);
            if (e.hasChildNodes() && n < e.childNodes.length) {
                var i = e.childNodes[n];
                i.parentNode.insertBefore(r, i)
            } else
                e.appendChild(r)
        }
          , o = function(t, r) {
            var o = 0;
            e.each(t, (function(e) {
                e[0] === n.KEEP ? o++ : e[0] === n.INSERT ? (i(r, e[1], o),
                o++) : e[0] === n.DELETE && function(e, t) {
                    if (e.hasChildNodes() && t < e.childNodes.length) {
                        var n = e.childNodes[t];
                        n.parentNode.removeChild(n)
                    }
                }(r, o)
            }
            ))
        };
        return {
            read: function(t) {
                return e.map(t.childNodes, r)
            },
            write: function(t, i) {
                var a = e.map(i.childNodes, r);
                return o(n.diff(a, t), i),
                i
            }
        }
    }
    )),
    n(J, [d, G], (function(e, t) {
        var n = function(e) {
            return {
                type: "fragmented",
                fragments: e,
                content: "",
                bookmark: null,
                beforeBookmark: null
            }
        }
          , r = function(e) {
            return {
                type: "complete",
                fragments: null,
                content: e,
                bookmark: null,
                beforeBookmark: null
            }
        }
          , i = function(e) {
            return "fragmented" === e.type ? e.fragments.join("") : e.content
        };
        return {
            createFragmentedLevel: n,
            createCompleteLevel: r,
            createFromEditor: function(i) {
                var o, a;
                return o = t.read(i.getBody()),
                function(e) {
                    return -1 !== e.indexOf("</iframe>")
                }(a = e.map(o, (function(e) {
                    return i.serializer.trimContent(e)
                }
                )).join("")) ? n(o) : r(a)
            },
            applyToEditor: function(e, n, r) {
                "fragmented" === n.type ? t.write(n.fragments, e.getBody()) : e.setContent(n.content, {
                    format: "raw"
                }),
                e.selection.moveToBookmark(r ? n.beforeBookmark : n.bookmark)
            },
            isEq: function(e, t) {
                return i(e) === i(t)
            }
        }
    }
    )),
    n(Q, [P, f, J, l], (function(e, t, n, r) {
        return function(e) {
            function i(t) {
                e.setDirty(t)
            }
            function o(e) {
                c.typing = !1,
                c.add({}, e)
            }
            function a() {
                c.typing && (c.typing = !1,
                c.add())
            }
            var s, l, c = this, u = 0, d = [], f = 0;
            return e.on("init", (function() {
                c.add()
            }
            )),
            e.on("BeforeExecCommand", (function(e) {
                var t = e.command;
                "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && (a(),
                c.beforeChange())
            }
            )),
            e.on("ExecCommand", (function(e) {
                var t = e.command;
                "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && o(e)
            }
            )),
            e.on("ObjectResizeStart Cut", (function() {
                c.beforeChange()
            }
            )),
            e.on("SaveContent ObjectResized blur", o),
            e.on("DragEnd", o),
            e.on("KeyUp", (function(t) {
                var a = t.keyCode;
                t.isDefaultPrevented() || ((a >= 33 && a <= 36 || a >= 37 && a <= 40 || 45 === a || t.ctrlKey) && (o(),
                e.nodeChanged()),
                (46 === a || 8 === a || r.mac && (91 === a || 93 === a)) && e.nodeChanged(),
                l && c.typing && (e.isDirty() || (i(d[0] && !n.isEq(n.createFromEditor(e), d[0])),
                e.isDirty() && e.fire("change", {
                    level: d[0],
                    lastLevel: null
                })),
                e.fire("TypingUndo"),
                l = !1,
                e.nodeChanged()))
            }
            )),
            e.on("KeyDown", (function(e) {
                var t = e.keyCode;
                if (!e.isDefaultPrevented()) {
                    if (t >= 33 && t <= 36 || t >= 37 && t <= 40 || 45 === t)
                        return void (c.typing && o(e));
                    var n = e.ctrlKey && !e.altKey || e.metaKey;
                    !(t < 16 || t > 20) || 224 === t || 91 === t || c.typing || n || (c.beforeChange(),
                    c.typing = !0,
                    c.add({}, e),
                    l = !0)
                }
            }
            )),
            e.on("MouseDown", (function(e) {
                c.typing && o(e)
            }
            )),
            e.addShortcut("meta+z", "", "Undo"),
            e.addShortcut("meta+y,meta+shift+z", "", "Redo"),
            e.on("AddUndo Undo Redo ClearUndos", (function(t) {
                t.isDefaultPrevented() || e.nodeChanged()
            }
            )),
            c = {
                data: d,
                typing: !1,
                beforeChange: function() {
                    f || (s = e.selection.getBookmark(2, !0))
                },
                add: function(r, o) {
                    var a, l, c, h = e.settings;
                    if (c = n.createFromEditor(e),
                    r = r || {},
                    r = t.extend(r, c),
                    f || e.removed)
                        return null;
                    if (l = d[u],
                    e.fire("BeforeAddUndo", {
                        level: r,
                        lastLevel: l,
                        originalEvent: o
                    }).isDefaultPrevented())
                        return null;
                    if (l && n.isEq(l, r))
                        return null;
                    if (d[u] && (d[u].beforeBookmark = s),
                    h.custom_undo_redo_levels && d.length > h.custom_undo_redo_levels) {
                        for (a = 0; a < d.length - 1; a++)
                            d[a] = d[a + 1];
                        d.length--,
                        u = d.length
                    }
                    r.bookmark = e.selection.getBookmark(2, !0),
                    u < d.length - 1 && (d.length = u + 1),
                    d.push(r),
                    u = d.length - 1;
                    var p = {
                        level: r,
                        lastLevel: l,
                        originalEvent: o
                    };
                    return e.fire("AddUndo", p),
                    u > 0 && (i(!0),
                    e.fire("change", p)),
                    r
                },
                undo: function() {
                    var t;
                    return c.typing && (c.add(),
                    c.typing = !1),
                    u > 0 && (t = d[--u],
                    n.applyToEditor(e, t, !0),
                    i(!0),
                    e.fire("undo", {
                        level: t
                    })),
                    t
                },
                redo: function() {
                    var t;
                    return u < d.length - 1 && (t = d[++u],
                    n.applyToEditor(e, t, !1),
                    i(!0),
                    e.fire("redo", {
                        level: t
                    })),
                    t
                },
                clear: function() {
                    d = [],
                    u = 0,
                    c.typing = !1,
                    c.data = d,
                    e.fire("ClearUndos")
                },
                hasUndo: function() {
                    return u > 0 || c.typing && d[0] && !n.isEq(n.createFromEditor(e), d[0])
                },
                hasRedo: function() {
                    return u < d.length - 1 && !c.typing
                },
                transact: function(e) {
                    a(),
                    c.beforeChange();
                    try {
                        f++,
                        e()
                    } finally {
                        f--
                    }
                    return c.add()
                },
                extra: function(t, r) {
                    var i, o;
                    c.transact(t) && (o = d[u].bookmark,
                    i = d[u - 1],
                    n.applyToEditor(e, i, !0),
                    c.transact(r) && (d[u - 1].beforeBookmark = o))
                }
            }
        }
    }
    )),
    n(Z, [m, _, N, l], (function(e, t, n, r) {
        var i = r.ie && r.ie < 11;
        return function(o) {
            function a(a) {
                function p(e) {
                    return e && s.isBlock(e) && !/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName) && !/^(fixed|absolute)/i.test(e.style.position) && "true" !== s.getContentEditable(e)
                }
                function m(e) {
                    var t;
                    s.isBlock(e) && (t = l.getRng(),
                    e.appendChild(s.create("span", null, " ")),
                    l.select(e),
                    e.lastChild.outerHTML = "",
                    l.setRng(t))
                }
                function g(t) {
                    var n, i, o, a, c = t;
                    if (t) {
                        if (r.ie && r.ie < 9 && k && k.firstChild && k.firstChild == k.lastChild && "BR" == k.firstChild.tagName && s.remove(k.firstChild),
                        /^(LI|DT|DD)$/.test(t.nodeName)) {
                            var u = function(e) {
                                for (; e; ) {
                                    if (1 == e.nodeType || 3 == e.nodeType && e.data && /[\r\n\s]/.test(e.data))
                                        return e;
                                    e = e.nextSibling
                                }
                            }(t.firstChild);
                            u && /^(UL|OL|DL)$/.test(u.nodeName) && t.insertBefore(s.doc.createTextNode(" "), t.firstChild)
                        }
                        if (o = s.createRng(),
                        r.ie || t.normalize(),
                        t.hasChildNodes()) {
                            for (n = new e(t,t); i = n.current(); ) {
                                if (3 == i.nodeType) {
                                    o.setStart(i, 0),
                                    o.setEnd(i, 0);
                                    break
                                }
                                if (h[i.nodeName.toLowerCase()]) {
                                    o.setStartBefore(i),
                                    o.setEndBefore(i);
                                    break
                                }
                                c = i,
                                i = n.next()
                            }
                            i || (o.setStart(c, 0),
                            o.setEnd(c, 0))
                        } else
                            "BR" == t.nodeName ? t.nextSibling && s.isBlock(t.nextSibling) ? ((!T || T < 9) && (a = s.create("br"),
                            t.parentNode.insertBefore(a, t)),
                            o.setStartBefore(t),
                            o.setEndBefore(t)) : (o.setStartAfter(t),
                            o.setEndAfter(t)) : (o.setStart(t, 0),
                            o.setEnd(t, 0));
                        l.setRng(o),
                        s.remove(a),
                        l.scrollIntoView(t)
                    }
                }
                function v(e) {
                    var t = c.forced_root_block;
                    t && t.toLowerCase() === e.tagName.toLowerCase() && s.setAttribs(e, c.forced_root_block_attrs)
                }
                function y(e) {
                    var t, n, r, o = _, a = d.getTextInlineElements();
                    if (e || "TABLE" == L ? v(t = s.create(e || P)) : t = k.cloneNode(!1),
                    r = t,
                    !1 !== c.keep_styles)
                        do {
                            if (a[o.nodeName]) {
                                if ("_mce_caret" == o.id)
                                    continue;
                                n = o.cloneNode(!1),
                                s.setAttrib(n, "id", ""),
                                t.hasChildNodes() ? (n.appendChild(t.firstChild),
                                t.appendChild(n)) : (r = n,
                                t.appendChild(n))
                            }
                        } while ((o = o.parentNode) && o != N);
                    return i || (r.innerHTML = '<br data-mce-bogus="1">'),
                    t
                }
                function b(t) {
                    var n, r, i;
                    if (3 == _.nodeType && (t ? S > 0 : S < _.nodeValue.length))
                        return !1;
                    if (_.parentNode == k && O && !t)
                        return !0;
                    if (t && 1 == _.nodeType && _ == k.firstChild)
                        return !0;
                    if ("TABLE" === _.nodeName || _.previousSibling && "TABLE" == _.previousSibling.nodeName)
                        return O && !t || !O && t;
                    for (n = new e(_,k),
                    3 == _.nodeType && (t && 0 === S ? n.prev() : t || S != _.nodeValue.length || n.next()); r = n.current(); ) {
                        if (1 === r.nodeType) {
                            if (!r.getAttribute("data-mce-bogus") && (i = r.nodeName.toLowerCase(),
                            f[i] && "br" !== i))
                                return !1
                        } else if (3 === r.nodeType && !/^[ \t\r\n]*$/.test(r.nodeValue))
                            return !1;
                        t ? n.prev() : n.next()
                    }
                    return !0
                }
                function C() {
                    o.execCommand("InsertLineBreak", !1, a)
                }
                function x() {
                    A = /^(H[1-6]|PRE|FIGURE)$/.test(L) && "HGROUP" != M ? y(P) : y(),
                    c.end_container_on_empty_block && p(D) && s.isEmpty(k) ? A = s.split(D, k) : s.insertAfter(A, k),
                    g(A)
                }
                var w, E, N, _, S, k, T, R, A, B, D, L, M, P, O;
                if (w = l.getRng(!0),
                !a.isDefaultPrevented()) {
                    if (!w.collapsed)
                        return void o.execCommand("Delete");
                    if (new t(s).normalize(w),
                    _ = w.startContainer,
                    S = w.startOffset,
                    P = (P = (c.force_p_newlines ? "p" : "") || c.forced_root_block) ? P.toUpperCase() : "",
                    T = s.doc.documentMode,
                    R = a.shiftKey,
                    1 == _.nodeType && _.hasChildNodes() && (O = S > _.childNodes.length - 1,
                    _ = _.childNodes[Math.min(S, _.childNodes.length - 1)] || _,
                    S = O && 3 == _.nodeType ? _.nodeValue.length : 0),
                    N = function(e) {
                        var t, n, r = s.getRoot();
                        for (t = e; t !== r && "false" !== s.getContentEditable(t); )
                            "true" === s.getContentEditable(t) && (n = t),
                            t = t.parentNode;
                        return t !== r ? n : r
                    }(_)) {
                        if (u.beforeChange(),
                        !s.isBlock(N) && N != s.getRoot())
                            return void (P && !R || C());
                        if ((P && !R || !P && R) && (_ = function(e, t) {
                            var n, r, i, a, l, c, u = P || "P";
                            if (!(r = s.getParent(e, s.isBlock)) || !p(r)) {
                                if (c = (r = r || N) == o.getBody() || function(e) {
                                    return e && /^(TD|TH|CAPTION)$/.test(e.nodeName)
                                }(r) ? r.nodeName.toLowerCase() : r.parentNode.nodeName.toLowerCase(),
                                !r.hasChildNodes())
                                    return v(n = s.create(u)),
                                    r.appendChild(n),
                                    w.setStart(n, 0),
                                    w.setEnd(n, 0),
                                    n;
                                for (a = e; a.parentNode != r; )
                                    a = a.parentNode;
                                for (; a && !s.isBlock(a); )
                                    i = a,
                                    a = a.previousSibling;
                                if (i && d.isValidChild(c, u.toLowerCase())) {
                                    for (v(n = s.create(u)),
                                    i.parentNode.insertBefore(n, i),
                                    a = i; a && !s.isBlock(a); )
                                        l = a.nextSibling,
                                        n.appendChild(a),
                                        a = l;
                                    w.setStart(e, t),
                                    w.setEnd(e, t)
                                }
                            }
                            return e
                        }(_, S)),
                        k = s.getParent(_, s.isBlock),
                        D = k ? s.getParent(k.parentNode, s.isBlock) : null,
                        L = k ? k.nodeName.toUpperCase() : "",
                        "LI" != (M = D ? D.nodeName.toUpperCase() : "") || a.ctrlKey || (k = D,
                        L = M),
                        o.undoManager.typing && (o.undoManager.typing = !1,
                        o.undoManager.add()),
                        /^(LI|DT|DD)$/.test(L)) {
                            if (!P && R)
                                return void C();
                            if (s.isEmpty(k))
                                return void function() {
                                    function e(e) {
                                        for (var t = D[e ? "firstChild" : "lastChild"]; t && 1 != t.nodeType; )
                                            t = t[e ? "nextSibling" : "previousSibling"];
                                        return t === k
                                    }
                                    function t() {
                                        var e = D.parentNode;
                                        return /^(LI|DT|DD)$/.test(e.nodeName) ? e : D
                                    }
                                    if (D != o.getBody()) {
                                        var n = D.parentNode.nodeName;
                                        /^(OL|UL|LI)$/.test(n) && (P = "LI"),
                                        A = P ? y(P) : s.create("BR"),
                                        e(!0) && e() ? "LI" == n ? s.insertAfter(A, t()) : s.replace(A, D) : e(!0) ? "LI" == n ? (s.insertAfter(A, t()),
                                        A.appendChild(s.doc.createTextNode(" ")),
                                        A.appendChild(D)) : D.parentNode.insertBefore(A, D) : e() ? (s.insertAfter(A, t()),
                                        m(A)) : (D = t(),
                                        (E = w.cloneRange()).setStartAfter(k),
                                        E.setEndAfter(D),
                                        B = E.extractContents(),
                                        "LI" == P && "LI" == B.firstChild.nodeName ? (A = B.firstChild,
                                        s.insertAfter(B, D)) : (s.insertAfter(B, D),
                                        s.insertAfter(A, D))),
                                        s.remove(k),
                                        g(A),
                                        u.add()
                                    }
                                }()
                        }
                        if ("PRE" == L && !1 !== c.br_in_pre) {
                            if (!R)
                                return void C()
                        } else if (!P && !R && "LI" != L || P && R)
                            return void C();
                        P && k === o.getBody() || (P = P || "P",
                        n.isCaretContainerBlock(k) ? A = n.showCaretContainerBlock(k) : b() ? x() : b(!0) ? (m(A = k.parentNode.insertBefore(y(), k)),
                        g(k)) : ((E = w.cloneRange()).setEndAfter(k),
                        function(e) {
                            do {
                                3 === e.nodeType && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")),
                                e = e.firstChild
                            } while (e)
                        }(B = E.extractContents()),
                        A = B.firstChild,
                        s.insertAfter(B, k),
                        function(e) {
                            var t, n = e, r = [];
                            if (n) {
                                for (; n = n.firstChild; ) {
                                    if (s.isBlock(n))
                                        return;
                                    1 != n.nodeType || f[n.nodeName.toLowerCase()] || r.push(n)
                                }
                                for (t = r.length; t--; )
                                    (!(n = r[t]).hasChildNodes() || n.firstChild == n.lastChild && "" === n.firstChild.nodeValue || "A" == n.nodeName && " " === (n.innerText || n.textContent)) && s.remove(n)
                            }
                        }(A),
                        function(e) {
                            var t;
                            i || (e.normalize(),
                            (t = e.lastChild) && !/^(left|right)$/gi.test(s.getStyle(t, "float", !0)) || s.add(e, "br"))
                        }(k),
                        s.isEmpty(k) && function(e) {
                            e.innerHTML = i ? "" : '<br data-mce-bogus="1">'
                        }(k),
                        A.normalize(),
                        s.isEmpty(A) ? (s.remove(A),
                        x()) : g(A)),
                        s.setAttrib(A, "id", ""),
                        o.fire("NewBlock", {
                            newBlock: A
                        }),
                        u.typing = !1,
                        u.add())
                    }
                }
            }
            var s = o.dom
              , l = o.selection
              , c = o.settings
              , u = o.undoManager
              , d = o.schema
              , f = d.getNonEmptyElements()
              , h = d.getMoveCaretBeforeOnEnterElements();
            o.on("keydown", (function(e) {
                13 == e.keyCode && !1 !== a(e) && e.preventDefault()
            }
            ))
        }
    }
    )),
    n(ee, [], (function() {
        return function(e) {
            var t = e.settings
              , n = e.dom
              , r = e.selection
              , i = e.schema
              , o = i.getBlockElements();
            t.forced_root_block && e.on("NodeChange", (function() {
                var a, s, l, c, u, d, f, h, p, m, g, v, y = r.getStart(), b = e.getBody(), C = -16777215;
                if (v = t.forced_root_block,
                y && 1 === y.nodeType && v) {
                    for (; y && y != b; ) {
                        if (o[y.nodeName])
                            return;
                        y = y.parentNode
                    }
                    if ((a = r.getRng()).setStart) {
                        s = a.startContainer,
                        l = a.startOffset,
                        c = a.endContainer,
                        u = a.endOffset;
                        try {
                            p = e.getDoc().activeElement === b
                        } catch (e) {}
                    } else
                        a.item && (y = a.item(0),
                        (a = e.getDoc().body.createTextRange()).moveToElementText(y)),
                        p = a.parentElement().ownerDocument === e.getDoc(),
                        (m = a.duplicate()).collapse(!0),
                        l = -1 * m.move("character", C),
                        m.collapsed || ((m = a.duplicate()).collapse(!1),
                        u = -1 * m.move("character", C) - l);
                    for (y = b.firstChild,
                    g = b.nodeName.toLowerCase(); y; )
                        if ((3 === y.nodeType || 1 == y.nodeType && !o[y.nodeName]) && i.isValidChild(g, v.toLowerCase())) {
                            if (3 === y.nodeType && 0 === y.nodeValue.length) {
                                f = y,
                                y = y.nextSibling,
                                n.remove(f);
                                continue
                            }
                            d || (d = n.create(v, e.settings.forced_root_block_attrs),
                            y.parentNode.insertBefore(d, y),
                            h = !0),
                            f = y,
                            y = y.nextSibling,
                            d.appendChild(f)
                        } else
                            d = null,
                            y = y.nextSibling;
                    if (h && p) {
                        if (a.setStart)
                            a.setStart(s, l),
                            a.setEnd(c, u),
                            r.setRng(a);
                        else
                            try {
                                (a = e.getDoc().body.createTextRange()).moveToElementText(b),
                                a.collapse(!0),
                                a.moveStart("character", l),
                                u > 0 && a.moveEnd("character", u),
                                a.select()
                            } catch (e) {}
                        e.nodeChanged()
                    }
                }
            }
            ))
        }
    }
    )),
    n(te, [H, m, w, U, N, I], (function(e, t, n, r, i, o) {
        function a(e) {
            return e > 0
        }
        function s(e) {
            return e < 0
        }
        function l(e, t) {
            for (var n; n = e(t); )
                if (!b(n))
                    return n;
            return null
        }
        function c(e, t) {
            for (e = e.parentNode; e && e != t; e = e.parentNode)
                if (m(e))
                    return e;
            return t
        }
        function u(e, t) {
            for (; e && e != t; ) {
                if (v(e))
                    return e;
                e = e.parentNode
            }
            return null
        }
        function d(e, t) {
            var n = t.ownerDocument.createRange();
            return e ? (n.setStartBefore(t),
            n.setEndBefore(t)) : (n.setStartAfter(t),
            n.setEndAfter(t)),
            n
        }
        function f(e, t, n) {
            return u(t, e) == u(n, e)
        }
        function h(e, t, n) {
            var r, i;
            for (i = e ? "previousSibling" : "nextSibling"; n && n != t; ) {
                if (r = n[i],
                y(r) && (r = r[i]),
                g(r)) {
                    if (f(t, r, n))
                        return r;
                    break
                }
                if (w(r))
                    break;
                n = n.parentNode
            }
            return null
        }
        function p(e, t) {
            return g(function(e, t) {
                var n, r;
                return t ? (n = t.container(),
                r = t.offset(),
                x(n) ? n.childNodes[r + e] : null) : null
            }(e, t))
        }
        var m = n.isContentEditableTrue
          , g = n.isContentEditableFalse
          , v = n.matchStyleValues("display", "block table table-cell table-caption")
          , y = i.isCaretContainer
          , b = i.isCaretContainerBlock
          , C = e.curry
          , x = n.isElement
          , w = o.isCaretCandidate
          , E = C(d, !0)
          , N = C(d, !1);
        return {
            isForwards: a,
            isBackwards: s,
            findNode: function(e, n, r, i, o) {
                var c = new t(e,i);
                if (s(n)) {
                    if ((g(e) || b(e)) && r(e = l(c.prev, !0)))
                        return e;
                    for (; e = l(c.prev, o); )
                        if (r(e))
                            return e
                }
                if (a(n)) {
                    if ((g(e) || b(e)) && r(e = l(c.next, !0)))
                        return e;
                    for (; e = l(c.next, o); )
                        if (r(e))
                            return e
                }
                return null
            },
            getEditingHost: c,
            getParentBlock: u,
            isInSameBlock: function(e, t, n) {
                return u(e.container(), n) == u(t.container(), n)
            },
            isInSameEditingHost: function(e, t, n) {
                return c(e.container(), n) == c(t.container(), n)
            },
            isBeforeContentEditableFalse: C(p, 0),
            isAfterContentEditableFalse: C(p, -1),
            normalizeRange: function(e, t, r) {
                var o, a, s, l, c = C(h, !0, t), u = C(h, !1, t);
                if (a = r.startContainer,
                s = r.startOffset,
                i.isCaretContainerBlock(a)) {
                    if (x(a) || (a = a.parentNode),
                    "before" == (l = a.getAttribute("data-mce-caret")) && (o = a.nextSibling,
                    g(o)))
                        return E(o);
                    if ("after" == l && (o = a.previousSibling,
                    g(o)))
                        return N(o)
                }
                if (!r.collapsed)
                    return r;
                if (n.isText(a)) {
                    if (y(a)) {
                        if (1 === e) {
                            if (o = u(a))
                                return E(o);
                            if (o = c(a))
                                return N(o)
                        }
                        if (-1 === e) {
                            if (o = c(a))
                                return N(o);
                            if (o = u(a))
                                return E(o)
                        }
                        return r
                    }
                    if (i.endsWithCaretContainer(a) && s >= a.data.length - 1)
                        return 1 === e && (o = u(a)) ? E(o) : r;
                    if (i.startsWithCaretContainer(a) && s <= 1)
                        return -1 === e && (o = c(a)) ? N(o) : r;
                    if (s === a.data.length)
                        return (o = u(a)) ? E(o) : r;
                    if (0 === s)
                        return (o = c(a)) ? N(o) : r
                }
                return r
            }
        }
    }
    )),
    n(ne, [w, I, U, te, d, H], (function(e, t, n, r, i, o) {
        function a(e, t) {
            return e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null
        }
        function s(e, t) {
            if (p(e)) {
                if (g(t.previousSibling) && !d(t.previousSibling))
                    return n.before(t);
                if (d(t))
                    return n(t, 0)
            }
            if (m(e)) {
                if (g(t.nextSibling) && !d(t.nextSibling))
                    return n.after(t);
                if (d(t))
                    return n(t, t.data.length)
            }
            return m(e) ? h(t) ? n.before(t) : n.after(t) : n.before(t)
        }
        function l(t, i) {
            var o;
            return !!e.isBr(t) && (!!(o = c(1, n.after(t), i)) && !r.isInSameBlock(n.before(t), n.before(o), i))
        }
        function c(e, t, h) {
            var b, C, x, w, E, N, _;
            if (!f(h) || !t)
                return null;
            if (b = (_ = t).container(),
            C = _.offset(),
            d(b)) {
                if (m(e) && C > 0)
                    return n(b, --C);
                if (p(e) && C < b.length)
                    return n(b, ++C);
                x = b
            } else {
                if (m(e) && C > 0 && (w = a(b, C - 1),
                g(w)))
                    return !v(w) && (E = r.findNode(w, e, y, w)) ? d(E) ? n(E, E.data.length) : n.after(E) : d(w) ? n(w, w.data.length) : n.before(w);
                if (p(e) && C < b.childNodes.length && (w = a(b, C),
                g(w)))
                    return l(w, h) ? c(e, n.after(w), h) : !v(w) && (E = r.findNode(w, e, y, w)) ? d(E) ? n(E, 0) : n.before(E) : d(w) ? n(w, 0) : n.after(w);
                x = _.getNode()
            }
            return (p(e) && _.isAtEnd() || m(e) && _.isAtStart()) && (x = r.findNode(x, e, o.constant(!0), h, !0),
            y(x)) ? s(e, x) : (w = r.findNode(x, e, y, h),
            N = i.last(i.filter(function(e, t) {
                for (var n = []; e && e != t; )
                    n.push(e),
                    e = e.parentNode;
                return n
            }(b, h), u)),
            !N || w && N.contains(w) ? w ? s(e, w) : null : _ = p(e) ? n.after(N) : n.before(N))
        }
        var u = e.isContentEditableFalse
          , d = e.isText
          , f = e.isElement
          , h = e.isBr
          , p = r.isForwards
          , m = r.isBackwards
          , g = t.isCaretCandidate
          , v = t.isAtomic
          , y = t.isEditableCaretCandidate;
        return function(e) {
            return {
                next: function(t) {
                    return c(1, t, e)
                },
                prev: function(t) {
                    return c(-1, t, e)
                }
            }
        }
    }
    )),
    n(re, [f, ne, U], (function(e, t, n) {
        var r = function(e, t, n) {
            var r = t.serialize(n);
            return function(e) {
                var t = e.firstChild
                  , n = e.lastChild;
                return t && "META" === t.nodeName && t.parentNode.removeChild(t),
                n && "mce_marker" === n.id && n.parentNode.removeChild(n),
                e
            }(e.createFragment(r))
        }
          , i = function(t) {
            return e.grep(t.childNodes, (function(e) {
                return "LI" === e.nodeName
            }
            ))
        }
          , o = function(e) {
            return e.length > 0 && function(e) {
                return !e.firstChild
            }(e[e.length - 1]) ? e.slice(0, -1) : e
        }
          , a = function(e, t) {
            var n = e.getParent(t, e.isBlock);
            return n && "LI" === n.nodeName ? n : null
        }
          , s = function(e, r) {
            var i = n.before(e)
              , o = new t(r).next(i);
            return o ? o.toRange() : null
        }
          , l = function(e, r) {
            var i = n.after(e)
              , o = new t(r).prev(i);
            return o ? o.toRange() : null
        }
          , c = function(t, n, r, i) {
            var o = function(e, t) {
                var n = t.cloneRange()
                  , r = t.cloneRange();
                return n.setStartBefore(e),
                r.setEndAfter(e),
                [n.cloneContents(), r.cloneContents()]
            }(t, i)
              , a = t.parentNode;
            return a.insertBefore(o[0], t),
            e.each(n, (function(e) {
                a.insertBefore(e, t)
            }
            )),
            a.insertBefore(o[1], t),
            a.removeChild(t),
            l(n[n.length - 1], r)
        }
          , u = function(t, n, r) {
            var i = t.parentNode;
            return e.each(n, (function(e) {
                i.insertBefore(e, t)
            }
            )),
            s(t, r)
        }
          , d = function(e, t, n, r) {
            return r.insertAfter(t.reverse(), e),
            l(t[0], n)
        };
        return {
            isListFragment: function(e) {
                var t = e.firstChild
                  , n = e.lastChild;
                return t && "meta" === t.name && (t = t.next),
                n && "mce_marker" === n.attr("id") && (n = n.prev),
                !(!t || t !== n || "ul" !== t.name && "ol" !== t.name)
            },
            insertAtCaret: function(e, s, l, f) {
                var h = r(s, e, f)
                  , p = a(s, l.startContainer)
                  , m = o(i(h.firstChild))
                  , g = s.getRoot()
                  , v = function(e) {
                    var r = n.fromRangeStart(l)
                      , i = new t(s.getRoot())
                      , o = 1 === e ? i.prev(r) : i.next(r);
                    return !o || a(s, o.getNode()) !== p
                };
                return v(1) ? u(p, m, g) : v(2) ? d(p, m, g, s) : c(p, m, g, l)
            },
            isParentBlockLi: function(e, t) {
                return !!a(e, t)
            },
            trimListItems: o,
            listItems: i
        }
    }
    )),
    n(ie, [l, f, D, ne, U, q, w, re], (function(e, t, n, r, i, o, a, s) {
        var l = a.matchNodeNames("td th")
          , c = function(a, c, u) {
            var d, f, h, p, m, g, v, y, b, C, x, w, E = a.schema.getTextInlineElements(), N = a.selection, _ = a.dom;
            /^ | $/.test(c) && (c = function(e) {
                function t(e) {
                    return r[e] && 3 == r[e].nodeType
                }
                var n, r, i;
                return n = N.getRng(!0),
                r = n.startContainer,
                i = n.startOffset,
                3 == r.nodeType && (i > 0 ? e = e.replace(/^&nbsp;/, " ") : t("previousSibling") || (e = e.replace(/^ /, "&nbsp;")),
                i < r.length ? e = e.replace(/&nbsp;(<br>|)$/, " ") : t("nextSibling") || (e = e.replace(/(&nbsp;| )(<br>|)$/, "&nbsp;"))),
                e
            }(c)),
            d = a.parser,
            w = u.merge,
            f = new n({
                validate: a.settings.validate
            },a.schema),
            x = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>',
            g = {
                content: c,
                format: "html",
                selection: !0
            },
            a.fire("BeforeSetContent", g),
            -1 == (c = g.content).indexOf("{$caret}") && (c += "{$caret}"),
            c = c.replace(/\{\$caret\}/, x);
            var S = (y = N.getRng()).startContainer || (y.parentElement ? y.parentElement() : null)
              , k = a.getBody();
            S === k && N.isCollapsed() && _.isBlock(k.firstChild) && function(e) {
                return e && !a.schema.getShortEndedElements()[e.nodeName]
            }(k.firstChild) && _.isEmpty(k.firstChild) && ((y = _.createRng()).setStart(k.firstChild, 0),
            y.setEnd(k.firstChild, 0),
            N.setRng(y)),
            N.isCollapsed() || (a.selection.setRng(a.selection.getRng()),
            a.getDoc().execCommand("Delete", !1, null),
            function() {
                var e, t, n;
                t = (e = N.getRng(!0)).startContainer,
                n = e.startOffset,
                3 == t.nodeType && e.collapsed && (" " === t.data[n] ? (t.deleteData(n, 1),
                /[\u00a0| ]$/.test(c) || (c += " ")) : " " === t.data[n - 1] && (t.deleteData(n - 1, 1),
                /[\u00a0| ]$/.test(c) || (c = " " + c)))
            }());
            var T = {
                context: (h = N.getNode()).nodeName.toLowerCase(),
                data: u.data
            };
            if (m = d.parse(c, T),
            !0 === u.paste && s.isListFragment(m) && s.isParentBlockLi(_, h))
                return y = s.insertAtCaret(f, _, a.selection.getRng(!0), m),
                a.selection.setRng(y),
                void a.fire("SetContent", g);
            if (function(e) {
                for (var t = e; t = t.walk(); )
                    1 === t.type && t.attr("data-mce-fragment", "1")
            }(m),
            "mce_marker" == (b = m.lastChild).attr("id"))
                for (v = b,
                b = b.prev; b; b = b.walk(!0))
                    if (3 == b.type || !_.isBlock(b.name)) {
                        a.schema.isValidChild(b.parent.name, "span") && b.parent.insert(v, b, "br" === b.name);
                        break
                    }
            if (a._selectionOverrides.showBlockCaretContainer(h),
            T.invalid) {
                for (N.setContent(x),
                h = N.getNode(),
                p = a.getBody(),
                9 == h.nodeType ? h = b = p : b = h; b !== p; )
                    h = b,
                    b = b.parentNode;
                c = h == p ? p.innerHTML : _.getOuterHTML(h),
                c = f.serialize(d.parse(c.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, (function() {
                    return f.serialize(m)
                }
                )))),
                h == p ? _.setHTML(p, c) : _.setOuterHTML(h, c)
            } else
                c = f.serialize(m),
                b = h.firstChild,
                C = h.lastChild,
                !b || b === C && "BR" === b.nodeName ? _.setHTML(h, c) : N.setContent(c);
            (function() {
                if (w) {
                    var e = a.getBody()
                      , n = new o(_);
                    t.each(_.select("*[data-mce-fragment]"), (function(t) {
                        for (var r = t.parentNode; r && r != e; r = r.parentNode)
                            E[t.nodeName.toLowerCase()] && n.compare(r, t) && _.remove(t, !0)
                    }
                    ))
                }
            }
            )(),
            function(t) {
                var n, o, s;
                if (t) {
                    if (N.scrollIntoView(t),
                    n = function(e) {
                        for (var t = a.getBody(); e && e !== t; e = e.parentNode)
                            if ("false" === a.dom.getContentEditable(e))
                                return e;
                        return null
                    }(t))
                        return _.remove(t),
                        void N.select(n);
                    y = _.createRng(),
                    (b = t.previousSibling) && 3 == b.nodeType ? (y.setStart(b, b.nodeValue.length),
                    e.ie || (C = t.nextSibling) && 3 == C.nodeType && (b.appendData(C.data),
                    C.parentNode.removeChild(C))) : (y.setStartBefore(t),
                    y.setEndBefore(t)),
                    o = _.getParent(t, _.isBlock),
                    _.remove(t),
                    o && _.isEmpty(o) && (a.$(o).empty(),
                    y.setStart(o, 0),
                    y.setEnd(o, 0),
                    l(o) || function(e) {
                        return !!e.getAttribute("data-mce-fragment")
                    }(o) || !(s = function(e) {
                        var t = i.fromRangeStart(e);
                        if (t = new r(a.getBody()).next(t))
                            return t.toRange()
                    }(y)) ? _.add(o, _.create("br", {
                        "data-mce-bogus": "1"
                    })) : (y = s,
                    _.remove(o))),
                    N.setRng(y)
                }
            }(_.get("mce_marker")),
            function(e) {
                t.each(e.getElementsByTagName("*"), (function(e) {
                    e.removeAttribute("data-mce-fragment")
                }
                ))
            }(a.getBody()),
            a.fire("SetContent", g),
            a.addVisual()
        }
          , u = function(e) {
            var n;
            return "string" != typeof e ? (n = t.extend({
                paste: e.paste,
                data: {
                    paste: e.paste
                }
            }, e),
            {
                content: e.content,
                details: n
            }) : {
                content: e,
                details: {}
            }
        };
        return {
            insertAtCaret: function(e, t) {
                var n = u(t);
                c(e, n.content, n.details)
            }
        }
    }
    )),
    n(oe, [l, f, _, m, ie], (function(e, n, r, i, o) {
        var a = n.each
          , s = n.extend
          , l = n.map
          , c = n.inArray
          , u = n.explode
          , d = e.ie && e.ie < 11
          , f = !0
          , h = !1;
        return function(n) {
            function p(e) {
                var t;
                if (!n.quirks.isHidden()) {
                    if (e = e.toLowerCase(),
                    t = _.state[e])
                        return t(e);
                    try {
                        return n.getDoc().queryCommandState(e)
                    } catch (e) {}
                    return !1
                }
            }
            function m(e, t) {
                t = t || "exec",
                a(e, (function(e, n) {
                    a(n.toLowerCase().split(","), (function(n) {
                        _[t][n] = e
                    }
                    ))
                }
                ))
            }
            function g(e, r, i) {
                return r === t && (r = h),
                i === t && (i = null),
                n.getDoc().execCommand(e, r, i)
            }
            function v(e) {
                return E.match(e)
            }
            function y(e, r) {
                E.toggle(e, r ? {
                    value: r
                } : t),
                n.nodeChanged()
            }
            function b(e) {
                N = w.getBookmark(e)
            }
            function C() {
                w.moveToBookmark(N)
            }
            var x, w, E, N, _ = {
                state: {},
                exec: {},
                value: {}
            }, S = n.settings;
            n.on("PreInit", (function() {
                x = n.dom,
                w = n.selection,
                S = n.settings,
                E = n.formatter
            }
            )),
            s(this, {
                execCommand: function(e, t, r, i) {
                    var o, s, l = 0;
                    if (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e) || i && i.skip_focus || n.focus(),
                    (i = n.fire("BeforeExecCommand", {
                        command: e,
                        ui: t,
                        value: r
                    })).isDefaultPrevented())
                        return !1;
                    if (s = e.toLowerCase(),
                    o = _.exec[s])
                        return o(s, t, r),
                        n.fire("ExecCommand", {
                            command: e,
                            ui: t,
                            value: r
                        }),
                        !0;
                    if (a(n.plugins, (function(i) {
                        if (i.execCommand && i.execCommand(e, t, r))
                            return n.fire("ExecCommand", {
                                command: e,
                                ui: t,
                                value: r
                            }),
                            l = !0,
                            !1
                    }
                    )),
                    l)
                        return l;
                    if (n.theme && n.theme.execCommand && n.theme.execCommand(e, t, r))
                        return n.fire("ExecCommand", {
                            command: e,
                            ui: t,
                            value: r
                        }),
                        !0;
                    try {
                        l = n.getDoc().execCommand(e, t, r)
                    } catch (e) {}
                    return !!l && (n.fire("ExecCommand", {
                        command: e,
                        ui: t,
                        value: r
                    }),
                    !0)
                },
                queryCommandState: p,
                queryCommandValue: function(e) {
                    var t;
                    if (!n.quirks.isHidden()) {
                        if (e = e.toLowerCase(),
                        t = _.value[e])
                            return t(e);
                        try {
                            return n.getDoc().queryCommandValue(e)
                        } catch (e) {}
                    }
                },
                queryCommandSupported: function(e) {
                    if (e = e.toLowerCase(),
                    _.exec[e])
                        return !0;
                    try {
                        return n.getDoc().queryCommandSupported(e)
                    } catch (e) {}
                    return !1
                },
                addCommands: m,
                addCommand: function(e, t, r) {
                    e = e.toLowerCase(),
                    _.exec[e] = function(e, i, o, a) {
                        return t.call(r || n, i, o, a)
                    }
                },
                addQueryStateHandler: function(e, t, r) {
                    e = e.toLowerCase(),
                    _.state[e] = function() {
                        return t.call(r || n)
                    }
                },
                addQueryValueHandler: function(e, t, r) {
                    e = e.toLowerCase(),
                    _.value[e] = function() {
                        return t.call(r || n)
                    }
                },
                hasCustomCommand: function(e) {
                    return e = e.toLowerCase(),
                    !!_.exec[e]
                }
            }),
            m({
                "mceResetDesignMode,mceBeginUndoLevel": function() {},
                "mceEndUndoLevel,mceAddUndoLevel": function() {
                    n.undoManager.add()
                },
                "Cut,Copy,Paste": function(t) {
                    var r, i = n.getDoc();
                    try {
                        g(t)
                    } catch (e) {
                        r = f
                    }
                    if ("paste" !== t || i.queryCommandEnabled(t) || (r = !0),
                    r || !i.queryCommandSupported(t)) {
                        var o = n.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
                        e.mac && (o = o.replace(/Ctrl\+/g, "⌘+")),
                        n.notificationManager.open({
                            text: o,
                            type: "error"
                        })
                    }
                },
                unlink: function() {
                    if (w.isCollapsed()) {
                        var e = n.dom.getParent(n.selection.getStart(), "a");
                        e && n.dom.remove(e, !0)
                    } else
                        E.remove("link")
                },
                "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function(e) {
                    var t = e.substring(7);
                    "full" == t && (t = "justify"),
                    a("left,center,right,justify".split(","), (function(e) {
                        t != e && E.remove("align" + e)
                    }
                    )),
                    "none" != t && y("align" + t)
                },
                "InsertUnorderedList,InsertOrderedList": function(e) {
                    var t, n;
                    g(e),
                    (t = x.getParent(w.getNode(), "ol,ul")) && (n = t.parentNode,
                    /^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName) && (b(),
                    x.split(n, t),
                    C()))
                },
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) {
                    y(e)
                },
                "ForeColor,HiliteColor,FontName": function(e, t, n) {
                    y(e, n)
                },
                FontSize: function(e, t, n) {
                    var r, i;
                    n >= 1 && n <= 7 && (i = u(S.font_size_style_values),
                    n = (r = u(S.font_size_classes)) ? r[n - 1] || n : i[n - 1] || n),
                    y(e, n)
                },
                RemoveFormat: function(e) {
                    E.remove(e)
                },
                mceBlockQuote: function() {
                    y("blockquote")
                },
                FormatBlock: function(e, t, n) {
                    return y(n || "p")
                },
                mceCleanup: function() {
                    var e = w.getBookmark();
                    n.setContent(n.getContent({
                        cleanup: f
                    }), {
                        cleanup: f
                    }),
                    w.moveToBookmark(e)
                },
                mceRemoveNode: function(e, t, r) {
                    var i = r || w.getNode();
                    i != n.getBody() && (b(),
                    n.dom.remove(i, f),
                    C())
                },
                mceSelectNodeDepth: function(e, t, r) {
                    var i = 0;
                    x.getParent(w.getNode(), (function(e) {
                        if (1 == e.nodeType && i++ == r)
                            return w.select(e),
                            h
                    }
                    ), n.getBody())
                },
                mceSelectNode: function(e, t, n) {
                    w.select(n)
                },
                mceInsertContent: function(e, t, r) {
                    o.insertAtCaret(n, r)
                },
                mceInsertRawHTML: function(e, t, r) {
                    w.setContent("tiny_mce_marker"),
                    n.setContent(n.getContent().replace(/tiny_mce_marker/g, (function() {
                        return r
                    }
                    )))
                },
                mceToggleFormat: function(e, t, n) {
                    y(n)
                },
                mceSetContent: function(e, t, r) {
                    n.setContent(r)
                },
                "Indent,Outdent": function(e) {
                    var t, r, i;
                    t = S.indentation,
                    r = /[a-z%]+$/i.exec(t),
                    t = parseInt(t, 10),
                    p("InsertUnorderedList") || p("InsertOrderedList") ? g(e) : (S.forced_root_block || x.getParent(w.getNode(), x.isBlock) || E.apply("div"),
                    a(w.getSelectedBlocks(), (function(o) {
                        if ("false" !== x.getContentEditable(o) && "LI" !== o.nodeName) {
                            var a = n.getParam("indent_use_margin", !1) ? "margin" : "padding";
                            a = "TABLE" === o.nodeName ? "margin" : a,
                            a += "rtl" == x.getStyle(o, "direction", !0) ? "Right" : "Left",
                            "outdent" == e ? (i = Math.max(0, parseInt(o.style[a] || 0, 10) - t),
                            x.setStyle(o, a, i ? i + r : "")) : (i = parseInt(o.style[a] || 0, 10) + t + r,
                            x.setStyle(o, a, i))
                        }
                    }
                    )))
                },
                mceRepaint: function() {},
                InsertHorizontalRule: function() {
                    n.execCommand("mceInsertContent", !1, "<hr />")
                },
                mceToggleVisualAid: function() {
                    n.hasVisual = !n.hasVisual,
                    n.addVisual()
                },
                mceReplaceContent: function(e, t, r) {
                    n.execCommand("mceInsertContent", !1, r.replace(/\{\$selection\}/g, w.getContent({
                        format: "text"
                    })))
                },
                mceInsertLink: function(e, t, n) {
                    var r;
                    "string" == typeof n && (n = {
                        href: n
                    }),
                    r = x.getParent(w.getNode(), "a"),
                    n.href = n.href.replace(" ", "%20"),
                    r && n.href || E.remove("link"),
                    n.href && E.apply("link", n, r)
                },
                selectAll: function() {
                    var e, t = x.getRoot();
                    w.getRng().setStart ? ((e = x.createRng()).setStart(t, 0),
                    e.setEnd(t, t.childNodes.length),
                    w.setRng(e)) : (e = w.getRng()).item || (e.moveToElementText(t),
                    e.select())
                },
                delete: function() {
                    g("Delete");
                    var e = n.getBody();
                    x.isEmpty(e) && (n.setContent(""),
                    e.firstChild && x.isBlock(e.firstChild) ? n.selection.setCursorLocation(e.firstChild, 0) : n.selection.setCursorLocation(e, 0))
                },
                mceNewDocument: function() {
                    n.setContent("")
                },
                InsertLineBreak: function(e, t, o) {
                    var a, s, l, c = o, u = w.getRng(!0);
                    new r(x).normalize(u);
                    var h = u.startOffset
                      , p = u.startContainer;
                    if (1 == p.nodeType && p.hasChildNodes()) {
                        var m = h > p.childNodes.length - 1;
                        p = p.childNodes[Math.min(h, p.childNodes.length - 1)] || p,
                        h = m && 3 == p.nodeType ? p.nodeValue.length : 0
                    }
                    var g = x.getParent(p, x.isBlock)
                      , v = g ? g.nodeName.toUpperCase() : ""
                      , y = g ? x.getParent(g.parentNode, x.isBlock) : null
                      , b = y ? y.nodeName.toUpperCase() : ""
                      , C = c && c.ctrlKey;
                    "LI" != b || C || (g = y,
                    v = b),
                    p && 3 == p.nodeType && h >= p.nodeValue.length && (d || function() {
                        for (var e, t = new i(p,g), r = n.schema.getNonEmptyElements(); e = t.next(); )
                            if (r[e.nodeName.toLowerCase()] || e.length > 0)
                                return !0
                    }() || (a = x.create("br"),
                    u.insertNode(a),
                    u.setStartAfter(a),
                    u.setEndAfter(a),
                    s = !0)),
                    a = x.create("br"),
                    u.insertNode(a);
                    var E = x.doc.documentMode;
                    return d && "PRE" == v && (!E || E < 8) && a.parentNode.insertBefore(x.doc.createTextNode("\r"), a),
                    l = x.create("span", {}, "&nbsp;"),
                    a.parentNode.insertBefore(l, a),
                    w.scrollIntoView(l),
                    x.remove(l),
                    s ? (u.setStartBefore(a),
                    u.setEndBefore(a)) : (u.setStartAfter(a),
                    u.setEndAfter(a)),
                    w.setRng(u),
                    n.undoManager.add(),
                    f
                }
            }),
            m({
                "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull": function(e) {
                    var t = "align" + e.substring(7)
                      , n = w.isCollapsed() ? [x.getParent(w.getNode(), x.isBlock)] : w.getSelectedBlocks()
                      , r = l(n, (function(e) {
                        return !!E.matchNode(e, t)
                    }
                    ));
                    return -1 !== c(r, f)
                },
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) {
                    return v(e)
                },
                mceBlockQuote: function() {
                    return v("blockquote")
                },
                Outdent: function() {
                    var e;
                    if (S.inline_styles) {
                        if ((e = x.getParent(w.getStart(), x.isBlock)) && parseInt(e.style.paddingLeft, 10) > 0)
                            return f;
                        if ((e = x.getParent(w.getEnd(), x.isBlock)) && parseInt(e.style.paddingLeft, 10) > 0)
                            return f
                    }
                    return p("InsertUnorderedList") || p("InsertOrderedList") || !S.inline_styles && !!x.getParent(w.getNode(), "BLOCKQUOTE")
                },
                "InsertUnorderedList,InsertOrderedList": function(e) {
                    var t = x.getParent(w.getNode(), "ul,ol");
                    return t && ("insertunorderedlist" === e && "UL" === t.tagName || "insertorderedlist" === e && "OL" === t.tagName)
                }
            }, "state"),
            m({
                "FontSize,FontName": function(e) {
                    var t, n = 0;
                    return (t = x.getParent(w.getNode(), "span")) && (n = "fontsize" == e ? t.style.fontSize : t.style.fontFamily.replace(/, /g, ",").replace(/[\'\"]/g, "").toLowerCase()),
                    n
                }
            }, "value"),
            m({
                Undo: function() {
                    n.undoManager.undo()
                },
                Redo: function() {
                    n.undoManager.redo()
                }
            })
        }
    }
    )),
    n(ae, [f], (function(e) {
        function t(e, o) {
            var a, s, l = this;
            if (e = r(e),
            a = (o = l.settings = o || {}).base_uri,
            /^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e))
                l.source = e;
            else {
                var c = 0 === e.indexOf("//");
                0 !== e.indexOf("/") || c || (e = (a && a.protocol || "http") + "://mce_host" + e),
                /^[\w\-]*:?\/\//.test(e) || (s = o.base_uri ? o.base_uri.path : new t(location.href).directory,
                "" === o.base_uri.protocol ? e = "//mce_host" + l.toAbsPath(s, e) : (e = /([^#?]*)([#?]?.*)/.exec(e),
                e = (a && a.protocol || "http") + "://mce_host" + l.toAbsPath(s, e[1]) + e[2])),
                e = e.replace(/@@/g, "(mce_at)"),
                e = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e),
                n(i, (function(t, n) {
                    var r = e[n];
                    r && (r = r.replace(/\(mce_at\)/g, "@@")),
                    l[t] = r
                }
                )),
                a && (l.protocol || (l.protocol = a.protocol),
                l.userInfo || (l.userInfo = a.userInfo),
                l.port || "mce_host" !== l.host || (l.port = a.port),
                l.host && "mce_host" !== l.host || (l.host = a.host),
                l.source = ""),
                c && (l.protocol = "")
            }
        }
        var n = e.each
          , r = e.trim
          , i = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" ")
          , o = {
            ftp: 21,
            http: 80,
            https: 443,
            mailto: 25
        };
        return t.prototype = {
            setPath: function(e) {
                var t = this;
                e = /^(.*?)\/?(\w+)?$/.exec(e),
                t.path = e[0],
                t.directory = e[1],
                t.file = e[2],
                t.source = "",
                t.getURI()
            },
            toRelative: function(e) {
                var n, r = this;
                if ("./" === e)
                    return e;
                if ("mce_host" != (e = new t(e,{
                    base_uri: r
                })).host && r.host != e.host && e.host || r.port != e.port || r.protocol != e.protocol && "" !== e.protocol)
                    return e.getURI();
                var i = r.getURI()
                  , o = e.getURI();
                return i == o || "/" == i.charAt(i.length - 1) && i.substr(0, i.length - 1) == o ? i : (n = r.toRelPath(r.path, e.path),
                e.query && (n += "?" + e.query),
                e.anchor && (n += "#" + e.anchor),
                n)
            },
            toAbsolute: function(e, n) {
                return (e = new t(e,{
                    base_uri: this
                })).getURI(n && this.isSameOrigin(e))
            },
            isSameOrigin: function(e) {
                if (this.host == e.host && this.protocol == e.protocol) {
                    if (this.port == e.port)
                        return !0;
                    var t = o[this.protocol];
                    if (t && (this.port || t) == (e.port || t))
                        return !0
                }
                return !1
            },
            toRelPath: function(e, t) {
                var n, r, i, o = 0, a = "";
                if (e = (e = e.substring(0, e.lastIndexOf("/"))).split("/"),
                n = t.split("/"),
                e.length >= n.length)
                    for (r = 0,
                    i = e.length; r < i; r++)
                        if (r >= n.length || e[r] != n[r]) {
                            o = r + 1;
                            break
                        }
                if (e.length < n.length)
                    for (r = 0,
                    i = n.length; r < i; r++)
                        if (r >= e.length || e[r] != n[r]) {
                            o = r + 1;
                            break
                        }
                if (1 === o)
                    return t;
                for (r = 0,
                i = e.length - (o - 1); r < i; r++)
                    a += "../";
                for (r = o - 1,
                i = n.length; r < i; r++)
                    a += r != o - 1 ? "/" + n[r] : n[r];
                return a
            },
            toAbsPath: function(e, t) {
                var r, i, o, a = 0, s = [];
                for (i = /\/$/.test(t) ? "/" : "",
                e = e.split("/"),
                t = t.split("/"),
                n(e, (function(e) {
                    e && s.push(e)
                }
                )),
                e = s,
                r = t.length - 1,
                s = []; r >= 0; r--)
                    0 !== t[r].length && "." !== t[r] && (".." !== t[r] ? a > 0 ? a-- : s.push(t[r]) : a++);
                return 0 !== (o = (r = e.length - a) <= 0 ? s.reverse().join("/") : e.slice(0, r).join("/") + "/" + s.reverse().join("/")).indexOf("/") && (o = "/" + o),
                i && o.lastIndexOf("/") !== o.length - 1 && (o += i),
                o
            },
            getURI: function(e) {
                var t, n = this;
                return n.source && !e || (t = "",
                e || (t += n.protocol ? n.protocol + "://" : "//",
                n.userInfo && (t += n.userInfo + "@"),
                n.host && (t += n.host),
                n.port && (t += ":" + n.port)),
                n.path && (t += n.path),
                n.query && (t += "?" + n.query),
                n.anchor && (t += "#" + n.anchor),
                n.source = t),
                n.source
            }
        },
        t.parseDataUri = function(e) {
            var t, n;
            return e = decodeURIComponent(e).split(","),
            (n = /data:([^;]+)/.exec(e[0])) && (t = n[1]),
            {
                type: t,
                data: e[1]
            }
        }
        ,
        t.getDocumentBaseUrl = function(e) {
            var t;
            return t = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? e.href : e.protocol + "//" + e.host + e.pathname,
            /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""),
            /[\/\\]$/.test(t) || (t += "/")),
            t
        }
        ,
        t
    }
    )),
    n(se, [f], (function(e) {
        function t() {}
        var n, r, i = e.each, o = e.extend;
        return t.extend = n = function(e) {
            function t() {
                var e, t, n, i = this;
                if (!r && (i.init && i.init.apply(i, arguments),
                t = i.Mixins))
                    for (e = t.length; e--; )
                        (n = t[e]).init && n.init.apply(i, arguments)
            }
            function a() {
                return this
            }
            function s(e, t) {
                return function() {
                    var n, r = this, i = r._super;
                    return r._super = d[e],
                    n = t.apply(r, arguments),
                    r._super = i,
                    n
                }
            }
            var l, c, u, d = this.prototype;
            for (c in r = !0,
            l = new this,
            r = !1,
            e.Mixins && (i(e.Mixins, (function(t) {
                for (var n in t)
                    "init" !== n && (e[n] = t[n])
            }
            )),
            d.Mixins && (e.Mixins = d.Mixins.concat(e.Mixins))),
            e.Methods && i(e.Methods.split(","), (function(t) {
                e[t] = a
            }
            )),
            e.Properties && i(e.Properties.split(","), (function(t) {
                var n = "_" + t;
                e[t] = function(e) {
                    var t = this;
                    return undefined !== e ? (t[n] = e,
                    t) : t[n]
                }
            }
            )),
            e.Statics && i(e.Statics, (function(e, n) {
                t[n] = e
            }
            )),
            e.Defaults && d.Defaults && (e.Defaults = o({}, d.Defaults, e.Defaults)),
            e)
                "function" == typeof (u = e[c]) && d[c] ? l[c] = s(c, u) : l[c] = u;
            return t.prototype = l,
            t.constructor = t,
            t.extend = n,
            t
        }
        ,
        t
    }
    )),
    n(le, [f], (function(e) {
        function t(t) {
            function n() {
                return !1
            }
            function r() {
                return !0
            }
            function i(t, r, i, o) {
                var a, u, d;
                if (!1 === r && (r = n),
                r)
                    for (r = {
                        func: r
                    },
                    o && e.extend(r, o),
                    d = (u = t.toLowerCase().split(" ")).length; d--; )
                        t = u[d],
                        (a = c[t]) || (a = c[t] = [],
                        s(t, !0)),
                        i ? a.unshift(r) : a.push(r);
                return l
            }
            function o(e, t) {
                var n, r, i, o, a;
                if (e)
                    for (n = (o = e.toLowerCase().split(" ")).length; n--; ) {
                        if (e = o[n],
                        r = c[e],
                        !e) {
                            for (i in c)
                                s(i, !1),
                                delete c[i];
                            return l
                        }
                        if (r) {
                            if (t)
                                for (a = r.length; a--; )
                                    r[a].func === t && (r = r.slice(0, a).concat(r.slice(a + 1)),
                                    c[e] = r);
                            else
                                r.length = 0;
                            r.length || (s(e, !1),
                            delete c[e])
                        }
                    }
                else {
                    for (e in c)
                        s(e, !1);
                    c = {}
                }
                return l
            }
            var a, s, l = this, c = {};
            a = (t = t || {}).scope || l,
            s = t.toggleEvent || n,
            l.fire = function(e, i) {
                var s, l, u, d;
                if (e = e.toLowerCase(),
                (i = i || {}).type = e,
                i.target || (i.target = a),
                i.preventDefault || (i.preventDefault = function() {
                    i.isDefaultPrevented = r
                }
                ,
                i.stopPropagation = function() {
                    i.isPropagationStopped = r
                }
                ,
                i.stopImmediatePropagation = function() {
                    i.isImmediatePropagationStopped = r
                }
                ,
                i.isDefaultPrevented = n,
                i.isPropagationStopped = n,
                i.isImmediatePropagationStopped = n),
                t.beforeFire && t.beforeFire(i),
                s = c[e])
                    for (l = 0,
                    u = s.length; l < u; l++) {
                        if ((d = s[l]).once && o(e, d.func),
                        i.isImmediatePropagationStopped())
                            return i.stopPropagation(),
                            i;
                        if (!1 === d.func.call(a, i))
                            return i.preventDefault(),
                            i
                    }
                return i
            }
            ,
            l.on = i,
            l.off = o,
            l.once = function(e, t, n) {
                return i(e, t, n, {
                    once: !0
                })
            }
            ,
            l.has = function(e) {
                return e = e.toLowerCase(),
                !(!c[e] || 0 === c[e].length)
            }
        }
        var n = e.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend", " ");
        return t.isNative = function(e) {
            return !!n[e.toLowerCase()]
        }
        ,
        t
    }
    )),
    n(ce, [], (function() {
        function e(e) {
            this.create = e.create
        }
        return e.create = function(t, n) {
            return new e({
                create: function(e, r) {
                    function i(t) {
                        e.set(r, t.value)
                    }
                    var o;
                    return e.on("change:" + r, (function(e) {
                        t.set(n, e.value)
                    }
                    )),
                    t.on("change:" + n, i),
                    (o = e._bindings) || (o = e._bindings = [],
                    e.on("destroy", (function() {
                        for (var e = o.length; e--; )
                            o[e]()
                    }
                    ))),
                    o.push((function() {
                        t.off("change:" + n, i)
                    }
                    )),
                    t.get(n)
                }
            })
        }
        ,
        e
    }
    )),
    n(ue, [le], (function(e) {
        function t(t) {
            return t._eventDispatcher || (t._eventDispatcher = new e({
                scope: t,
                toggleEvent: function(n, r) {
                    e.isNative(n) && t.toggleNativeEvent && t.toggleNativeEvent(n, r)
                }
            })),
            t._eventDispatcher
        }
        return {
            fire: function(e, n, r) {
                var i = this;
                if (i.removed && "remove" !== e)
                    return n;
                if (n = t(i).fire(e, n, r),
                !1 !== r && i.parent)
                    for (var o = i.parent(); o && !n.isPropagationStopped(); )
                        o.fire(e, n, !1),
                        o = o.parent();
                return n
            },
            on: function(e, n, r) {
                return t(this).on(e, n, r)
            },
            off: function(e, n) {
                return t(this).off(e, n)
            },
            once: function(e, n) {
                return t(this).once(e, n)
            },
            hasEventListeners: function(e) {
                return t(this).has(e)
            }
        }
    }
    )),
    n(de, [ce, ue, se, f], (function(e, t, n, r) {
        function i(e) {
            return e.nodeType > 0
        }
        function o(e, t) {
            var n, a;
            if (e === t)
                return !0;
            if (null === e || null === t)
                return e === t;
            if ("object" != typeof e || "object" != typeof t)
                return e === t;
            if (r.isArray(t)) {
                if (e.length !== t.length)
                    return !1;
                for (n = e.length; n--; )
                    if (!o(e[n], t[n]))
                        return !1
            }
            if (i(e) || i(t))
                return e === t;
            for (n in a = {},
            t) {
                if (!o(e[n], t[n]))
                    return !1;
                a[n] = !0
            }
            for (n in e)
                if (!a[n] && !o(e[n], t[n]))
                    return !1;
            return !0
        }
        return n.extend({
            Mixins: [t],
            init: function(t) {
                var n, r;
                for (n in t = t || {})
                    (r = t[n])instanceof e && (t[n] = r.create(this, n));
                this.data = t
            },
            set: function(t, n) {
                var r, i, a = this.data[t];
                if (n instanceof e && (n = n.create(this, t)),
                "object" == typeof t) {
                    for (r in t)
                        this.set(r, t[r]);
                    return this
                }
                return o(a, n) || (this.data[t] = n,
                i = {
                    target: this,
                    name: t,
                    value: n,
                    oldValue: a
                },
                this.fire("change:" + t, i),
                this.fire("change", i)),
                this
            },
            get: function(e) {
                return this.data[e]
            },
            has: function(e) {
                return e in this.data
            },
            bind: function(t) {
                return e.create(this, t)
            },
            destroy: function() {
                this.fire("destroy")
            }
        })
    }
    )),
    n(fe, [se], (function(e) {
        var t, n = /^([\w\\*]+)?(?:#([\w\-\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i, r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, i = /^\s*|\s*$/g, o = e.extend({
            init: function(e) {
                function t(e) {
                    var t;
                    if (e)
                        return (e = /(?:not\((.+)\))|(.+)/i.exec(e))[1] ? (t = a(e[1], []),
                        function(e) {
                            return !s(e, t)
                        }
                        ) : (e = e[2],
                        function(t, n, r) {
                            return "first" === e ? 0 === n : "last" === e ? n === r - 1 : "even" === e ? n % 2 == 0 : "odd" === e ? n % 2 == 1 : !!t[e] && t[e]()
                        }
                        )
                }
                function o(e, r, o) {
                    function a(e) {
                        e && r.push(e)
                    }
                    var s;
                    return a(function(e) {
                        if (e)
                            return e = e.toLowerCase(),
                            function(t) {
                                return "*" === e || t.type === e
                            }
                    }((s = n.exec(e.replace(i, "")))[1])),
                    a(function(e) {
                        if (e)
                            return function(t) {
                                return t._name === e
                            }
                    }(s[2])),
                    a(function(e) {
                        if (e)
                            return e = e.split("."),
                            function(t) {
                                for (var n = e.length; n--; )
                                    if (!t.classes.contains(e[n]))
                                        return !1;
                                return !0
                            }
                    }(s[3])),
                    a(function(e, t, n) {
                        if (e)
                            return function(r) {
                                var i = r[e] ? r[e]() : "";
                                return t ? "=" === t ? i === n : "*=" === t ? i.indexOf(n) >= 0 : "~=" === t ? (" " + i + " ").indexOf(" " + n + " ") >= 0 : "!=" === t ? i != n : "^=" === t ? 0 === i.indexOf(n) : "$=" === t && i.substr(i.length - n.length) === n : !!n
                            }
                    }(s[4], s[5], s[6])),
                    a(t(s[7])),
                    r.pseudo = !!s[7],
                    r.direct = o,
                    r
                }
                function a(e, t) {
                    var n, i, s, l = [];
                    do {
                        if (r.exec(""),
                        (i = r.exec(e)) && (e = i[3],
                        l.push(i[1]),
                        i[2])) {
                            n = i[3];
                            break
                        }
                    } while (i);
                    for (n && a(n, t),
                    e = [],
                    s = 0; s < l.length; s++)
                        ">" != l[s] && e.push(o(l[s], [], ">" === l[s - 1]));
                    return t.push(e),
                    t
                }
                var s = this.match;
                this._selectors = a(e, [])
            },
            match: function(e, t) {
                var n, r, i, o, a, s, l, c, u, d, f, h, p;
                for (n = 0,
                r = (t = t || this._selectors).length; n < r; n++) {
                    for (p = e,
                    h = 0,
                    i = (o = (a = t[n]).length) - 1; i >= 0; i--)
                        for (c = a[i]; p; ) {
                            if (c.pseudo)
                                for (u = d = (f = p.parent().items()).length; u-- && f[u] !== p; )
                                    ;
                            for (s = 0,
                            l = c.length; s < l; s++)
                                if (!c[s](p, u, d)) {
                                    s = l + 1;
                                    break
                                }
                            if (s === l) {
                                h++;
                                break
                            }
                            if (i === o - 1)
                                break;
                            p = p.parent()
                        }
                    if (h === o)
                        return !0
                }
                return !1
            },
            find: function(e) {
                function n(e, t, r) {
                    var i, o, s, l, c, u = t[r];
                    for (i = 0,
                    o = e.length; i < o; i++) {
                        for (c = e[i],
                        s = 0,
                        l = u.length; s < l; s++)
                            if (!u[s](c, i, o)) {
                                s = l + 1;
                                break
                            }
                        if (s === l)
                            r == t.length - 1 ? a.push(c) : c.items && n(c.items(), t, r + 1);
                        else if (u.direct)
                            return;
                        c.items && n(c.items(), t, r)
                    }
                }
                var r, i, a = [], s = this._selectors;
                if (e.items) {
                    for (r = 0,
                    i = s.length; r < i; r++)
                        n(e.items(), s[r], 0);
                    i > 1 && (a = function(e) {
                        for (var t, n = [], r = e.length; r--; )
                            (t = e[r]).__checked || (n.push(t),
                            t.__checked = 1);
                        for (r = n.length; r--; )
                            delete n[r].__checked;
                        return n
                    }(a))
                }
                return t || (t = o.Collection),
                new t(a)
            }
        });
        return o
    }
    )),
    n(he, [f, fe, se], (function(e, t, n) {
        var r, i, o = Array.prototype.push, a = Array.prototype.slice;
        return i = {
            length: 0,
            init: function(e) {
                e && this.add(e)
            },
            add: function(t) {
                var n = this;
                return e.isArray(t) ? o.apply(n, t) : t instanceof r ? n.add(t.toArray()) : o.call(n, t),
                n
            },
            set: function(e) {
                var t, n = this, r = n.length;
                for (n.length = 0,
                n.add(e),
                t = n.length; t < r; t++)
                    delete n[t];
                return n
            },
            filter: function(e) {
                var n, i, o, a, s = [];
                for ("string" == typeof e ? (e = new t(e),
                a = function(t) {
                    return e.match(t)
                }
                ) : a = e,
                n = 0,
                i = this.length; n < i; n++)
                    a(o = this[n]) && s.push(o);
                return new r(s)
            },
            slice: function() {
                return new r(a.apply(this, arguments))
            },
            eq: function(e) {
                return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
            },
            each: function(t) {
                return e.each(this, t),
                this
            },
            toArray: function() {
                return e.toArray(this)
            },
            indexOf: function(e) {
                for (var t = this.length; t-- && this[t] !== e; )
                    ;
                return t
            },
            reverse: function() {
                return new r(e.toArray(this).reverse())
            },
            hasClass: function(e) {
                return !!this[0] && this[0].classes.contains(e)
            },
            prop: function(e, t) {
                var n, r = this;
                return undefined !== t ? (r.each((function(n) {
                    n[e] && n[e](t)
                }
                )),
                r) : (n = r[0]) && n[e] ? n[e]() : void 0
            },
            exec: function(t) {
                var n = e.toArray(arguments).slice(1);
                return this.each((function(e) {
                    e[t] && e[t].apply(e, n)
                }
                )),
                this
            },
            remove: function() {
                for (var e = this.length; e--; )
                    this[e].remove();
                return this
            },
            addClass: function(e) {
                return this.each((function(t) {
                    t.classes.add(e)
                }
                ))
            },
            removeClass: function(e) {
                return this.each((function(t) {
                    t.classes.remove(e)
                }
                ))
            }
        },
        e.each("fire on off show hide append prepend before after reflow".split(" "), (function(t) {
            i[t] = function() {
                var n = e.toArray(arguments);
                return this.each((function(e) {
                    t in e && e[t].apply(e, n)
                }
                )),
                this
            }
        }
        )),
        e.each("text name disabled active selected checked visible parent value data".split(" "), (function(e) {
            i[e] = function(t) {
                return this.prop(e, t)
            }
        }
        )),
        r = n.extend(i),
        t.Collection = r,
        r
    }
    )),
    n(pe, [l, f, b], (function(e, t, n) {
        var r = 0
          , i = {
            id: function() {
                return "mceu_" + r++
            },
            create: function(e, r, i) {
                var o = document.createElement(e);
                return n.DOM.setAttribs(o, r),
                "string" == typeof i ? o.innerHTML = i : t.each(i, (function(e) {
                    e.nodeType && o.appendChild(e)
                }
                )),
                o
            },
            createFragment: function(e) {
                return n.DOM.createFragment(e)
            },
            getWindowSize: function() {
                return n.DOM.getViewPort()
            },
            getSize: function(e) {
                var t, n;
                if (e.getBoundingClientRect) {
                    var r = e.getBoundingClientRect();
                    t = Math.max(r.width || r.right - r.left, e.offsetWidth),
                    n = Math.max(r.height || r.bottom - r.bottom, e.offsetHeight)
                } else
                    t = e.offsetWidth,
                    n = e.offsetHeight;
                return {
                    width: t,
                    height: n
                }
            },
            getPos: function(e, t) {
                return n.DOM.getPos(e, t || i.getContainer())
            },
            getContainer: function() {
                return e.container ? e.container : document.body
            },
            getViewPort: function(e) {
                return n.DOM.getViewPort(e)
            },
            get: function(e) {
                return document.getElementById(e)
            },
            addClass: function(e, t) {
                return n.DOM.addClass(e, t)
            },
            removeClass: function(e, t) {
                return n.DOM.removeClass(e, t)
            },
            hasClass: function(e, t) {
                return n.DOM.hasClass(e, t)
            },
            toggleClass: function(e, t, r) {
                return n.DOM.toggleClass(e, t, r)
            },
            css: function(e, t, r) {
                return n.DOM.setStyle(e, t, r)
            },
            getRuntimeStyle: function(e, t) {
                return n.DOM.getStyle(e, t, !0)
            },
            on: function(e, t, r, i) {
                return n.DOM.bind(e, t, r, i)
            },
            off: function(e, t, r) {
                return n.DOM.unbind(e, t, r)
            },
            fire: function(e, t, r) {
                return n.DOM.fire(e, t, r)
            },
            innerHtml: function(e, t) {
                n.DOM.setHTML(e, t)
            }
        };
        return i
    }
    )),
    n(me, [], (function() {
        return {
            parseBox: function(e) {
                var t;
                if (e)
                    return "number" == typeof e ? {
                        top: e = e || 0,
                        left: e,
                        bottom: e,
                        right: e
                    } : (1 === (t = (e = e.split(" ")).length) ? e[1] = e[2] = e[3] = e[0] : 2 === t ? (e[2] = e[0],
                    e[3] = e[1]) : 3 === t && (e[3] = e[1]),
                    {
                        top: parseInt(e[0], 10) || 0,
                        right: parseInt(e[1], 10) || 0,
                        bottom: parseInt(e[2], 10) || 0,
                        left: parseInt(e[3], 10) || 0
                    })
            },
            measureBox: function(e, t) {
                function n(t) {
                    var n = document.defaultView;
                    return n ? (t = t.replace(/[A-Z]/g, (function(e) {
                        return "-" + e
                    }
                    )),
                    n.getComputedStyle(e, null).getPropertyValue(t)) : e.currentStyle[t]
                }
                function r(e) {
                    var t = parseFloat(n(e), 10);
                    return isNaN(t) ? 0 : t
                }
                return {
                    top: r(t + "TopWidth"),
                    right: r(t + "RightWidth"),
                    bottom: r(t + "BottomWidth"),
                    left: r(t + "LeftWidth")
                }
            }
        }
    }
    )),
    n(ge, [f], (function(e) {
        function t() {}
        function n(e) {
            this.cls = [],
            this.cls._map = {},
            this.onchange = e || t,
            this.prefix = ""
        }
        return e.extend(n.prototype, {
            add: function(e) {
                return e && !this.contains(e) && (this.cls._map[e] = !0,
                this.cls.push(e),
                this._change()),
                this
            },
            remove: function(e) {
                if (this.contains(e)) {
                    for (var t = 0; t < this.cls.length && this.cls[t] !== e; t++)
                        ;
                    this.cls.splice(t, 1),
                    delete this.cls._map[e],
                    this._change()
                }
                return this
            },
            toggle: function(e, t) {
                var n = this.contains(e);
                return n !== t && (n ? this.remove(e) : this.add(e),
                this._change()),
                this
            },
            contains: function(e) {
                return !!this.cls._map[e]
            },
            _change: function() {
                delete this.clsValue,
                this.onchange.call(this)
            }
        }),
        n.prototype.toString = function() {
            var e;
            if (this.clsValue)
                return this.clsValue;
            e = "";
            for (var t = 0; t < this.cls.length; t++)
                t > 0 && (e += " "),
                e += this.prefix + this.cls[t];
            return e
        }
        ,
        n
    }
    )),
    n(ve, [s], (function(e) {
        var t, n = {};
        return {
            add: function(r) {
                var i = r.parent();
                if (i) {
                    if (!i._layout || i._layout.isNative())
                        return;
                    n[i._id] || (n[i._id] = i),
                    t || (t = !0,
                    e.requestAnimationFrame((function() {
                        var e, r;
                        for (e in t = !1,
                        n)
                            (r = n[e]).state.get("rendered") && r.reflow();
                        n = {}
                    }
                    ), document.body))
                }
            },
            remove: function(e) {
                n[e._id] && delete n[e._id]
            }
        }
    }
    )),
    n(ye, [se, f, le, de, he, pe, h, me, ge, ve], (function(e, t, n, r, i, o, a, s, l, c) {
        function u(e) {
            return e._eventDispatcher || (e._eventDispatcher = new n({
                scope: e,
                toggleEvent: function(t, r) {
                    r && n.isNative(t) && (e._nativeEvents || (e._nativeEvents = {}),
                    e._nativeEvents[t] = !0,
                    e.state.get("rendered") && d(e))
                }
            })),
            e._eventDispatcher
        }
        function d(e) {
            function t(t) {
                var n = e.getParentCtrl(t.target);
                n && n.fire(t.type, t)
            }
            function n() {
                var e = c._lastHoverCtrl;
                e && (e.fire("mouseleave", {
                    target: e.getEl()
                }),
                e.parents().each((function(e) {
                    e.fire("mouseleave", {
                        target: e.getEl()
                    })
                }
                )),
                c._lastHoverCtrl = null)
            }
            function r(t) {
                var n, r, i, o = e.getParentCtrl(t.target), a = c._lastHoverCtrl, s = 0;
                if (o !== a) {
                    if (c._lastHoverCtrl = o,
                    (r = o.parents().toArray().reverse()).push(o),
                    a) {
                        for ((i = a.parents().toArray().reverse()).push(a),
                        s = 0; s < i.length && r[s] === i[s]; s++)
                            ;
                        for (n = i.length - 1; n >= s; n--)
                            (a = i[n]).fire("mouseleave", {
                                target: a.getEl()
                            })
                    }
                    for (n = s; n < r.length; n++)
                        (o = r[n]).fire("mouseenter", {
                            target: o.getEl()
                        })
                }
            }
            function i(t) {
                t.preventDefault(),
                "mousewheel" == t.type ? (t.deltaY = -.025 * t.wheelDelta,
                t.wheelDeltaX && (t.deltaX = -.025 * t.wheelDeltaX)) : (t.deltaX = 0,
                t.deltaY = t.detail),
                t = e.fire("wheel", t)
            }
            var o, s, l, c, u, d;
            if (u = e._nativeEvents) {
                for ((l = e.parents().toArray()).unshift(e),
                o = 0,
                s = l.length; !c && o < s; o++)
                    c = l[o]._eventsRoot;
                for (c || (c = l[l.length - 1] || e),
                e._eventsRoot = c,
                s = o,
                o = 0; o < s; o++)
                    l[o]._eventsRoot = c;
                var f = c._delegates;
                for (d in f || (f = c._delegates = {}),
                u) {
                    if (!u)
                        return !1;
                    "wheel" !== d || p ? ("mouseenter" === d || "mouseleave" === d ? c._hasMouseEnter || (a(c.getEl()).on("mouseleave", n).on("mouseover", r),
                    c._hasMouseEnter = 1) : f[d] || (a(c.getEl()).on(d, t),
                    f[d] = !0),
                    u[d] = !1) : h ? a(e.getEl()).on("mousewheel", i) : a(e.getEl()).on("DOMMouseScroll", i)
                }
            }
        }
        var f, h = "onmousewheel"in document, p = !1, m = "mce-", g = 0, v = {
            Statics: {
                classPrefix: m
            },
            isRtl: function() {
                return f.rtl
            },
            classPrefix: m,
            init: function(e) {
                function n(e) {
                    var t;
                    for (e = e.split(" "),
                    t = 0; t < e.length; t++)
                        c.classes.add(e[t])
                }
                var i, o, c = this;
                c.settings = e = t.extend({}, c.Defaults, e),
                c._id = e.id || "mceu_" + g++,
                c._aria = {
                    role: e.role
                },
                c._elmCache = {},
                c.$ = a,
                c.state = new r({
                    visible: !0,
                    active: !1,
                    disabled: !1,
                    value: ""
                }),
                c.data = new r(e.data),
                c.classes = new l((function() {
                    c.state.get("rendered") && (c.getEl().className = this.toString())
                }
                )),
                c.classes.prefix = c.classPrefix,
                (i = e.classes) && (c.Defaults && ((o = c.Defaults.classes) && i != o && n(o)),
                n(i)),
                t.each("title text name visible disabled active value".split(" "), (function(t) {
                    t in e && c[t](e[t])
                }
                )),
                c.on("click", (function() {
                    if (c.disabled())
                        return !1
                }
                )),
                c.settings = e,
                c.borderBox = s.parseBox(e.border),
                c.paddingBox = s.parseBox(e.padding),
                c.marginBox = s.parseBox(e.margin),
                e.hidden && c.hide()
            },
            Properties: "parent,name",
            getContainerElm: function() {
                return o.getContainer()
            },
            getParentCtrl: function(e) {
                for (var t, n = this.getRoot().controlIdLookup; e && n && !(t = n[e.id]); )
                    e = e.parentNode;
                return t
            },
            initLayoutRect: function() {
                var e, t, n, r, i, a, l, c, u, d, f = this, h = f.settings, p = f.getEl();
                e = f.borderBox = f.borderBox || s.measureBox(p, "border"),
                f.paddingBox = f.paddingBox || s.measureBox(p, "padding"),
                f.marginBox = f.marginBox || s.measureBox(p, "margin"),
                d = o.getSize(p),
                c = h.minWidth,
                u = h.minHeight,
                i = c || d.width,
                a = u || d.height,
                n = h.width,
                r = h.height,
                l = void 0 !== (l = h.autoResize) ? l : !n && !r,
                n = n || i,
                r = r || a;
                var m = e.left + e.right
                  , g = e.top + e.bottom
                  , v = h.maxWidth || 65535
                  , y = h.maxHeight || 65535;
                return f._layoutRect = t = {
                    x: h.x || 0,
                    y: h.y || 0,
                    w: n,
                    h: r,
                    deltaW: m,
                    deltaH: g,
                    contentW: n - m,
                    contentH: r - g,
                    innerW: n - m,
                    innerH: r - g,
                    startMinWidth: c || 0,
                    startMinHeight: u || 0,
                    minW: Math.min(i, v),
                    minH: Math.min(a, y),
                    maxW: v,
                    maxH: y,
                    autoResize: l,
                    scrollW: 0
                },
                f._lastLayoutRect = {},
                t
            },
            layoutRect: function(e) {
                var t, n, r, i, o, a, s = this, l = s._layoutRect;
                return l || (l = s.initLayoutRect()),
                e ? (r = l.deltaW,
                i = l.deltaH,
                e.x !== o && (l.x = e.x),
                e.y !== o && (l.y = e.y),
                e.minW !== o && (l.minW = e.minW),
                e.minH !== o && (l.minH = e.minH),
                (n = e.w) !== o && (n = (n = n < l.minW ? l.minW : n) > l.maxW ? l.maxW : n,
                l.w = n,
                l.innerW = n - r),
                (n = e.h) !== o && (n = (n = n < l.minH ? l.minH : n) > l.maxH ? l.maxH : n,
                l.h = n,
                l.innerH = n - i),
                (n = e.innerW) !== o && (n = (n = n < l.minW - r ? l.minW - r : n) > l.maxW - r ? l.maxW - r : n,
                l.innerW = n,
                l.w = n + r),
                (n = e.innerH) !== o && (n = (n = n < l.minH - i ? l.minH - i : n) > l.maxH - i ? l.maxH - i : n,
                l.innerH = n,
                l.h = n + i),
                e.contentW !== o && (l.contentW = e.contentW),
                e.contentH !== o && (l.contentH = e.contentH),
                (t = s._lastLayoutRect).x === l.x && t.y === l.y && t.w === l.w && t.h === l.h || ((a = f.repaintControls) && a.map && !a.map[s._id] && (a.push(s),
                a.map[s._id] = !0),
                t.x = l.x,
                t.y = l.y,
                t.w = l.w,
                t.h = l.h),
                s) : l
            },
            repaint: function() {
                var e, t, n, r, i, o, a, s, l, c, u = this;
                l = document.createRange ? function(e) {
                    return e
                }
                : Math.round,
                e = u.getEl().style,
                r = u._layoutRect,
                s = u._lastRepaintRect || {},
                o = (i = u.borderBox).left + i.right,
                a = i.top + i.bottom,
                r.x !== s.x && (e.left = l(r.x) + "px",
                s.x = r.x),
                r.y !== s.y && (e.top = l(r.y) + "px",
                s.y = r.y),
                r.w !== s.w && (c = l(r.w - o),
                e.width = (c >= 0 ? c : 0) + "px",
                s.w = r.w),
                r.h !== s.h && (c = l(r.h - a),
                e.height = (c >= 0 ? c : 0) + "px",
                s.h = r.h),
                u._hasBody && r.innerW !== s.innerW && (c = l(r.innerW),
                (n = u.getEl("body")) && ((t = n.style).width = (c >= 0 ? c : 0) + "px"),
                s.innerW = r.innerW),
                u._hasBody && r.innerH !== s.innerH && (c = l(r.innerH),
                (n = n || u.getEl("body")) && ((t = t || n.style).height = (c >= 0 ? c : 0) + "px"),
                s.innerH = r.innerH),
                u._lastRepaintRect = s,
                u.fire("repaint", {}, !1)
            },
            updateLayoutRect: function() {
                var e = this;
                e.parent()._lastRect = null,
                o.css(e.getEl(), {
                    width: "",
                    height: ""
                }),
                e._layoutRect = e._lastRepaintRect = e._lastLayoutRect = null,
                e.initLayoutRect()
            },
            on: function(e, t) {
                var n = this;
                return u(n).on(e, function(e) {
                    var t, r;
                    return "string" != typeof e ? e : function(i) {
                        return t || n.parentsAndSelf().each((function(n) {
                            var i = n.settings.callbacks;
                            if (i && (t = i[e]))
                                return r = n,
                                !1
                        }
                        )),
                        t ? t.call(r, i) : (i.action = e,
                        void this.fire("execute", i))
                    }
                }(t)),
                n
            },
            off: function(e, t) {
                return u(this).off(e, t),
                this
            },
            fire: function(e, t, n) {
                var r = this;
                if ((t = t || {}).control || (t.control = r),
                t = u(r).fire(e, t),
                !1 !== n && r.parent)
                    for (var i = r.parent(); i && !t.isPropagationStopped(); )
                        i.fire(e, t, !1),
                        i = i.parent();
                return t
            },
            hasEventListeners: function(e) {
                return u(this).has(e)
            },
            parents: function(e) {
                var t, n = new i;
                for (t = this.parent(); t; t = t.parent())
                    n.add(t);
                return e && (n = n.filter(e)),
                n
            },
            parentsAndSelf: function(e) {
                return new i(this).add(this.parents(e))
            },
            next: function() {
                var e = this.parent().items();
                return e[e.indexOf(this) + 1]
            },
            prev: function() {
                var e = this.parent().items();
                return e[e.indexOf(this) - 1]
            },
            innerHtml: function(e) {
                return this.$el.html(e),
                this
            },
            getEl: function(e) {
                var t = e ? this._id + "-" + e : this._id;
                return this._elmCache[t] || (this._elmCache[t] = a("#" + t)[0]),
                this._elmCache[t]
            },
            show: function() {
                return this.visible(!0)
            },
            hide: function() {
                return this.visible(!1)
            },
            focus: function() {
                try {
                    this.getEl().focus()
                } catch (e) {}
                return this
            },
            blur: function() {
                return this.getEl().blur(),
                this
            },
            aria: function(e, t) {
                var n = this
                  , r = n.getEl(n.ariaTarget);
                return void 0 === t ? n._aria[e] : (n._aria[e] = t,
                n.state.get("rendered") && r.setAttribute("role" == e ? e : "aria-" + e, t),
                n)
            },
            encode: function(e, t) {
                return !1 !== t && (e = this.translate(e)),
                (e || "").replace(/[&<>"]/g, (function(e) {
                    return "&#" + e.charCodeAt(0) + ";"
                }
                ))
            },
            translate: function(e) {
                return f.translate ? f.translate(e) : e
            },
            before: function(e) {
                var t = this
                  , n = t.parent();
                return n && n.insert(e, n.items().indexOf(t), !0),
                t
            },
            after: function(e) {
                var t = this
                  , n = t.parent();
                return n && n.insert(e, n.items().indexOf(t)),
                t
            },
            remove: function() {
                var e, t, n = this, r = n.getEl(), i = n.parent();
                if (n.items) {
                    var o = n.items().toArray();
                    for (t = o.length; t--; )
                        o[t].remove()
                }
                i && i.items && (e = [],
                i.items().each((function(t) {
                    t !== n && e.push(t)
                }
                )),
                i.items().set(e),
                i._lastRect = null),
                n._eventsRoot && n._eventsRoot == n && a(r).off();
                var s = n.getRoot().controlIdLookup;
                return s && delete s[n._id],
                r && r.parentNode && r.parentNode.removeChild(r),
                n.state.set("rendered", !1),
                n.state.destroy(),
                n.fire("remove"),
                n
            },
            renderBefore: function(e) {
                return a(e).before(this.renderHtml()),
                this.postRender(),
                this
            },
            renderTo: function(e) {
                return a(e || this.getContainerElm()).append(this.renderHtml()),
                this.postRender(),
                this
            },
            preRender: function() {},
            render: function() {},
            renderHtml: function() {
                return '<div id="' + this._id + '" class="' + this.classes + '"></div>'
            },
            postRender: function() {
                var e, t, n, r, i, o = this, s = o.settings;
                for (r in o.$el = a(o.getEl()),
                o.state.set("rendered", !0),
                s)
                    0 === r.indexOf("on") && o.on(r.substr(2), s[r]);
                if (o._eventsRoot) {
                    for (n = o.parent(); !i && n; n = n.parent())
                        i = n._eventsRoot;
                    if (i)
                        for (r in i._nativeEvents)
                            o._nativeEvents[r] = !0
                }
                d(o),
                s.style && ((e = o.getEl()) && (e.setAttribute("style", s.style),
                e.style.cssText = s.style)),
                o.settings.border && (t = o.borderBox,
                o.$el.css({
                    "border-top-width": t.top,
                    "border-right-width": t.right,
                    "border-bottom-width": t.bottom,
                    "border-left-width": t.left
                }));
                var l = o.getRoot();
                for (var u in l.controlIdLookup || (l.controlIdLookup = {}),
                l.controlIdLookup[o._id] = o,
                o._aria)
                    o.aria(u, o._aria[u]);
                !1 === o.state.get("visible") && (o.getEl().style.display = "none"),
                o.bindStates(),
                o.state.on("change:visible", (function(e) {
                    var t, n = e.value;
                    o.state.get("rendered") && (o.getEl().style.display = !1 === n ? "none" : "",
                    o.getEl().getBoundingClientRect()),
                    (t = o.parent()) && (t._lastRect = null),
                    o.fire(n ? "show" : "hide"),
                    c.add(o)
                }
                )),
                o.fire("postrender", {}, !1)
            },
            bindStates: function() {},
            scrollIntoView: function(e) {
                var t, n, r, i, o, a, s = this.getEl(), l = s.parentNode, c = function(e, t) {
                    var n, r, i = e;
                    for (n = r = 0; i && i != t && i.nodeType; )
                        n += i.offsetLeft || 0,
                        r += i.offsetTop || 0,
                        i = i.offsetParent;
                    return {
                        x: n,
                        y: r
                    }
                }(s, l);
                return t = c.x,
                n = c.y,
                r = s.offsetWidth,
                i = s.offsetHeight,
                o = l.clientWidth,
                a = l.clientHeight,
                "end" == e ? (t -= o - r,
                n -= a - i) : "center" == e && (t -= o / 2 - r / 2,
                n -= a / 2 - i / 2),
                l.scrollLeft = t,
                l.scrollTop = n,
                this
            },
            getRoot: function() {
                for (var e, t = this, n = []; t; ) {
                    if (t.rootControl) {
                        e = t.rootControl;
                        break
                    }
                    n.push(t),
                    e = t,
                    t = t.parent()
                }
                e || (e = this);
                for (var r = n.length; r--; )
                    n[r].rootControl = e;
                return e
            },
            reflow: function() {
                c.remove(this);
                var e = this.parent();
                return e._layout && !e._layout.isNative() && e.reflow(),
                this
            }
        };
        return t.each("text title visible disabled active value".split(" "), (function(e) {
            v[e] = function(t) {
                return 0 === arguments.length ? this.state.get(e) : (void 0 !== t && this.state.set(e, t),
                this)
            }
        }
        )),
        f = e.extend(v)
    }
    )),
    n(be, [], (function() {
        var e, t = {};
        return {
            add: function(e, n) {
                t[e.toLowerCase()] = n
            },
            has: function(e) {
                return !!t[e.toLowerCase()]
            },
            create: function(n, r) {
                var i, o, a;
                if (!e) {
                    for (o in a = tinymce.ui)
                        t[o.toLowerCase()] = a[o];
                    e = !0
                }
                if ("string" == typeof n ? (r = r || {}).type = n : n = (r = n).type,
                n = n.toLowerCase(),
                !(i = t[n]))
                    throw new Error("Could not find control by type: " + n);
                return (i = new i(r)).type = n,
                i
            }
        }
    }
    )),
    n(Ce, [], (function() {
        return function(e) {
            function t(e) {
                return e && 1 === e.nodeType
            }
            function n(e) {
                return t(e = e || v) ? e.getAttribute("role") : null
            }
            function r(e) {
                for (var t, r = e || v; r = r.parentNode; )
                    if (t = n(r))
                        return t
            }
            function i(e) {
                var n = v;
                if (t(n))
                    return n.getAttribute("aria-" + e)
            }
            function o(e) {
                var t = e.tagName.toUpperCase();
                return "INPUT" == t || "TEXTAREA" == t || "SELECT" == t
            }
            function a(e) {
                return !(!o(e) || e.hidden) || !!/^(button|menuitem|checkbox|tab|menuitemcheckbox|option|gridcell|slider)$/.test(n(e))
            }
            function s(e) {
                var t = [];
                return function e(n) {
                    if (1 == n.nodeType && "none" != n.style.display && !n.disabled) {
                        a(n) && t.push(n);
                        for (var r = 0; r < n.childNodes.length; r++)
                            e(n.childNodes[r])
                    }
                }(e || b.getEl()),
                t
            }
            function l(e) {
                var t, n;
                (n = (e = e || y).parents().toArray()).unshift(e);
                for (var r = 0; r < n.length && !(t = n[r]).settings.ariaRoot; r++)
                    ;
                return t
            }
            function c(e, t) {
                return e < 0 ? e = t.length - 1 : e >= t.length && (e = 0),
                t[e] && t[e].focus(),
                e
            }
            function u(e, t) {
                var n = -1
                  , r = l();
                t = t || s(r.getEl());
                for (var i = 0; i < t.length; i++)
                    t[i] === v && (n = i);
                n += e,
                r.lastAriaIndex = c(n, t)
            }
            function d() {
                "tablist" == r() ? u(-1, s(v.parentNode)) : y.parent().submenu ? m() : u(-1)
            }
            function f() {
                var e = n()
                  , t = r();
                "tablist" == t ? u(1, s(v.parentNode)) : "menuitem" == e && "menu" == t && i("haspopup") ? g() : u(1)
            }
            function h() {
                u(-1)
            }
            function p() {
                var e = n()
                  , t = r();
                "menuitem" == e && "menubar" == t ? g() : "button" == e && i("haspopup") ? g({
                    key: "down"
                }) : u(1)
            }
            function m() {
                y.fire("cancel")
            }
            function g(e) {
                e = e || {},
                y.fire("click", {
                    target: v,
                    aria: e
                })
            }
            var v, y, b = e.root;
            try {
                v = document.activeElement
            } catch (e) {
                v = document.body
            }
            return y = b.getParentCtrl(v),
            b.on("keydown", (function(e) {
                function t(e, t) {
                    o(v) || "slider" !== n(v) && !1 !== t(e) && e.preventDefault()
                }
                if (!e.isDefaultPrevented())
                    switch (e.keyCode) {
                    case 37:
                        t(e, d);
                        break;
                    case 39:
                        t(e, f);
                        break;
                    case 38:
                        t(e, h);
                        break;
                    case 40:
                        t(e, p);
                        break;
                    case 27:
                        m();
                        break;
                    case 14:
                    case 13:
                    case 32:
                        t(e, g);
                        break;
                    case 9:
                        !1 !== function(e) {
                            if ("tablist" == r()) {
                                var t = s(y.getEl("body"))[0];
                                t && t.focus()
                            } else
                                u(e.shiftKey ? -1 : 1)
                        }(e) && e.preventDefault()
                    }
            }
            )),
            b.on("focusin", (function(e) {
                v = e.target,
                y = e.control
            }
            )),
            {
                focusFirst: function(e) {
                    var t = l(e)
                      , n = s(t.getEl());
                    t.settings.ariaRemember && "lastAriaIndex"in t ? c(t.lastAriaIndex, n) : c(0, n)
                }
            }
        }
    }
    )),
    n(xe, [ye, he, fe, be, Ce, f, h, ge, ve], (function(e, t, n, r, i, o, a, s, l) {
        var c = {};
        return e.extend({
            init: function(e) {
                var n = this;
                n._super(e),
                (e = n.settings).fixed && n.state.set("fixed", !0),
                n._items = new t,
                n.isRtl() && n.classes.add("rtl"),
                n.bodyClasses = new s((function() {
                    n.state.get("rendered") && (n.getEl("body").className = this.toString())
                }
                )),
                n.bodyClasses.prefix = n.classPrefix,
                n.classes.add("container"),
                n.bodyClasses.add("container-body"),
                e.containerCls && n.classes.add(e.containerCls),
                n._layout = r.create((e.layout || "") + "layout"),
                n.settings.items ? n.add(n.settings.items) : n.add(n.render()),
                n._hasBody = !0
            },
            items: function() {
                return this._items
            },
            find: function(e) {
                return (e = c[e] = c[e] || new n(e)).find(this)
            },
            add: function(e) {
                var t = this;
                return t.items().add(t.create(e)).parent(t),
                t
            },
            focus: function(e) {
                var t, n, r, i = this;
                return e && (n = i.keyboardNav || i.parents().eq(-1)[0].keyboardNav) ? void n.focusFirst(i) : (r = i.find("*"),
                i.statusbar && r.add(i.statusbar.items()),
                r.each((function(e) {
                    return e.settings.autofocus ? (t = null,
                    !1) : void (e.canFocus && (t = t || e))
                }
                )),
                t && t.focus(),
                i)
            },
            replace: function(e, t) {
                for (var n, r = this.items(), i = r.length; i--; )
                    if (r[i] === e) {
                        r[i] = t;
                        break
                    }
                i >= 0 && ((n = t.getEl()) && n.parentNode.removeChild(n),
                (n = e.getEl()) && n.parentNode.removeChild(n)),
                t.parent(this)
            },
            create: function(t) {
                var n, i = this, a = [];
                return o.isArray(t) || (t = [t]),
                o.each(t, (function(t) {
                    t && (t instanceof e || ("string" == typeof t && (t = {
                        type: t
                    }),
                    n = o.extend({}, i.settings.defaults, t),
                    t.type = n.type = n.type || t.type || i.settings.defaultType || (n.defaults ? n.defaults.type : null),
                    t = r.create(n)),
                    a.push(t))
                }
                )),
                a
            },
            renderNew: function() {
                var e = this;
                return e.items().each((function(t, n) {
                    var r;
                    t.parent(e),
                    t.state.get("rendered") || ((r = e.getEl("body")).hasChildNodes() && n <= r.childNodes.length - 1 ? a(r.childNodes[n]).before(t.renderHtml()) : a(r).append(t.renderHtml()),
                    t.postRender(),
                    l.add(t))
                }
                )),
                e._layout.applyClasses(e.items().filter(":visible")),
                e._lastRect = null,
                e
            },
            append: function(e) {
                return this.add(e).renderNew()
            },
            prepend: function(e) {
                var t = this;
                return t.items().set(t.create(e).concat(t.items().toArray())),
                t.renderNew()
            },
            insert: function(e, t, n) {
                var r, i, o, a = this;
                return e = a.create(e),
                r = a.items(),
                !n && t < r.length - 1 && (t += 1),
                t >= 0 && t < r.length && (i = r.slice(0, t).toArray(),
                o = r.slice(t).toArray(),
                r.set(i.concat(e, o))),
                a.renderNew()
            },
            fromJSON: function(e) {
                for (var t in e)
                    this.find("#" + t).value(e[t]);
                return this
            },
            toJSON: function() {
                var e = {};
                return this.find("*").each((function(t) {
                    var n = t.name()
                      , r = t.value();
                    n && void 0 !== r && (e[n] = r)
                }
                )),
                e
            },
            renderHtml: function() {
                var e = this
                  , t = e._layout
                  , n = this.settings.role;
                return e.preRender(),
                t.preRender(e),
                '<div id="' + e._id + '" class="' + e.classes + '"' + (n ? ' role="' + this.settings.role + '"' : "") + '><div id="' + e._id + '-body" class="' + e.bodyClasses + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>"
            },
            postRender: function() {
                var e, t = this;
                return t.items().exec("postRender"),
                t._super(),
                t._layout.postRender(t),
                t.state.set("rendered", !0),
                t.settings.style && t.$el.css(t.settings.style),
                t.settings.border && (e = t.borderBox,
                t.$el.css({
                    "border-top-width": e.top,
                    "border-right-width": e.right,
                    "border-bottom-width": e.bottom,
                    "border-left-width": e.left
                })),
                t.parent() || (t.keyboardNav = new i({
                    root: t
                })),
                t
            },
            initLayoutRect: function() {
                var e = this
                  , t = e._super();
                return e._layout.recalc(e),
                t
            },
            recalc: function() {
                var e = this
                  , t = e._layoutRect
                  , n = e._lastRect;
                if (!n || n.w != t.w || n.h != t.h)
                    return e._layout.recalc(e),
                    t = e.layoutRect(),
                    e._lastRect = {
                        x: t.x,
                        y: t.y,
                        w: t.w,
                        h: t.h
                    },
                    !0
            },
            reflow: function() {
                var t;
                if (l.remove(this),
                this.visible()) {
                    for (e.repaintControls = [],
                    e.repaintControls.map = {},
                    this.recalc(),
                    t = e.repaintControls.length; t--; )
                        e.repaintControls[t].repaint();
                    "flow" !== this.settings.layout && "stack" !== this.settings.layout && this.repaint(),
                    e.repaintControls = []
                }
                return this
            }
        })
    }
    )),
    n(we, [h], (function(e) {
        function t(e) {
            var t, n;
            if (e.changedTouches)
                for (t = "screenX screenY pageX pageY clientX clientY".split(" "),
                n = 0; n < t.length; n++)
                    e[t[n]] = e.changedTouches[0][t[n]]
        }
        return function(n, r) {
            function i() {
                return f.getElementById(r.handle || n)
            }
            var o, a, s, l, c, u, d, f = r.document || document;
            r = r || {},
            s = function(n) {
                var s, h, p = function(e) {
                    var t, n, r, i, o, a, s, l = Math.max;
                    return t = e.documentElement,
                    n = e.body,
                    r = l(t.scrollWidth, n.scrollWidth),
                    i = l(t.clientWidth, n.clientWidth),
                    o = l(t.offsetWidth, n.offsetWidth),
                    a = l(t.scrollHeight, n.scrollHeight),
                    s = l(t.clientHeight, n.clientHeight),
                    {
                        width: r < o ? i : r,
                        height: a < l(t.offsetHeight, n.offsetHeight) ? s : a
                    }
                }(f);
                t(n),
                n.preventDefault(),
                a = n.button,
                s = i(),
                u = n.screenX,
                d = n.screenY,
                h = window.getComputedStyle ? window.getComputedStyle(s, null).getPropertyValue("cursor") : s.runtimeStyle.cursor,
                o = e("<div></div>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: p.width,
                    height: p.height,
                    zIndex: 2147483647,
                    opacity: 1e-4,
                    cursor: h
                }).appendTo(f.body),
                e(f).on("mousemove touchmove", c).on("mouseup touchend", l),
                r.start(n)
            }
            ,
            c = function(e) {
                return t(e),
                e.button !== a ? l(e) : (e.deltaX = e.screenX - u,
                e.deltaY = e.screenY - d,
                e.preventDefault(),
                void r.drag(e))
            }
            ,
            l = function(n) {
                t(n),
                e(f).off("mousemove touchmove", c).off("mouseup touchend", l),
                o.remove(),
                r.stop && r.stop(n)
            }
            ,
            this.destroy = function() {
                e(i()).off()
            }
            ,
            e(i()).on("mousedown touchstart", s)
        }
    }
    )),
    n(Ee, [h, we], (function(e, t) {
        return {
            init: function() {
                this.on("repaint", this.renderScroll)
            },
            renderScroll: function() {
                function n() {
                    function t(t, a, s, l, c, u) {
                        var d, f, h, p, m, g, v, y;
                        if (f = r.getEl("scroll" + t)) {
                            if (v = a.toLowerCase(),
                            y = s.toLowerCase(),
                            e(r.getEl("absend")).css(v, r.layoutRect()[l] - 1),
                            !c)
                                return void e(f).css("display", "none");
                            e(f).css("display", "block"),
                            d = r.getEl("body"),
                            h = r.getEl("scroll" + t + "t"),
                            p = d["client" + s] - 2 * i,
                            m = (p -= n && o ? f["client" + u] : 0) / d["scroll" + s],
                            (g = {})[v] = d["offset" + a] + i,
                            g[y] = p,
                            e(f).css(g),
                            (g = {})[v] = d["scroll" + a] * m,
                            g[y] = p * m,
                            e(h).css(g)
                        }
                    }
                    var n, o, a;
                    a = r.getEl("body"),
                    n = a.scrollWidth > a.clientWidth,
                    o = a.scrollHeight > a.clientHeight,
                    t("h", "Left", "Width", "contentW", n, "Height"),
                    t("v", "Top", "Height", "contentH", o, "Width")
                }
                var r = this
                  , i = 2;
                r.settings.autoScroll && (r._hasScroll || (r._hasScroll = !0,
                function() {
                    function n(n, o, a, s, l) {
                        var c, u = r._id + "-scroll" + n, d = r.classPrefix;
                        e(r.getEl()).append('<div id="' + u + '" class="' + d + "scrollbar " + d + "scrollbar-" + n + '"><div id="' + u + 't" class="' + d + 'scrollbar-thumb"></div></div>'),
                        r.draghelper = new t(u + "t",{
                            start: function() {
                                c = r.getEl("body")["scroll" + o],
                                e("#" + u).addClass(d + "active")
                            },
                            drag: function(e) {
                                var t, u, d, f, h = r.layoutRect();
                                u = h.contentW > h.innerW,
                                d = h.contentH > h.innerH,
                                f = r.getEl("body")["client" + a] - 2 * i,
                                t = (f -= u && d ? r.getEl("scroll" + n)["client" + l] : 0) / r.getEl("body")["scroll" + a],
                                r.getEl("body")["scroll" + o] = c + e["delta" + s] / t
                            },
                            stop: function() {
                                e("#" + u).removeClass(d + "active")
                            }
                        })
                    }
                    r.classes.add("scroll"),
                    n("v", "Top", "Height", "Y", "Width"),
                    n("h", "Left", "Width", "X", "Height")
                }(),
                r.on("wheel", (function(e) {
                    var t = r.getEl("body");
                    t.scrollLeft += 10 * (e.deltaX || 0),
                    t.scrollTop += 10 * e.deltaY,
                    n()
                }
                )),
                e(r.getEl("body")).on("scroll", n)),
                n())
            }
        }
    }
    )),
    n(Ne, [xe, Ee], (function(e, t) {
        return e.extend({
            Defaults: {
                layout: "fit",
                containerCls: "panel"
            },
            Mixins: [t],
            renderHtml: function() {
                var e = this
                  , t = e._layout
                  , n = e.settings.html;
                return e.preRender(),
                t.preRender(e),
                void 0 === n ? n = '<div id="' + e._id + '-body" class="' + e.bodyClasses + '">' + t.renderHtml(e) + "</div>" : ("function" == typeof n && (n = n.call(e)),
                e._hasBody = !1),
                '<div id="' + e._id + '" class="' + e.classes + '" hidefocus="1" tabindex="-1" role="group">' + (e._preBodyHtml || "") + n + "</div>"
            }
        })
    }
    )),
    n(_e, [pe], (function(e) {
        function t(t, n, r) {
            var i, o, a, s, l, c, u, d, f, h;
            return f = e.getViewPort(),
            a = (o = e.getPos(n)).x,
            s = o.y,
            t.state.get("fixed") && "static" == e.getRuntimeStyle(document.body, "position") && (a -= f.x,
            s -= f.y),
            i = t.getEl(),
            l = (h = e.getSize(i)).width,
            c = h.height,
            u = (h = e.getSize(n)).width,
            d = h.height,
            "b" === (r = (r || "").split(""))[0] && (s += d),
            "r" === r[1] && (a += u),
            "c" === r[0] && (s += Math.round(d / 2)),
            "c" === r[1] && (a += Math.round(u / 2)),
            "b" === r[3] && (s -= c),
            "r" === r[4] && (a -= l),
            "c" === r[3] && (s -= Math.round(c / 2)),
            "c" === r[4] && (a -= Math.round(l / 2)),
            {
                x: a,
                y: s,
                w: l,
                h: c
            }
        }
        return {
            testMoveRel: function(n, r) {
                for (var i = e.getViewPort(), o = 0; o < r.length; o++) {
                    var a = t(this, n, r[o]);
                    if (this.state.get("fixed")) {
                        if (a.x > 0 && a.x + a.w < i.w && a.y > 0 && a.y + a.h < i.h)
                            return r[o]
                    } else if (a.x > i.x && a.x + a.w < i.w + i.x && a.y > i.y && a.y + a.h < i.h + i.y)
                        return r[o]
                }
                return r[0]
            },
            moveRel: function(e, n) {
                "string" != typeof n && (n = this.testMoveRel(e, n));
                var r = t(this, e, n);
                return this.moveTo(r.x, r.y)
            },
            moveBy: function(e, t) {
                var n = this
                  , r = n.layoutRect();
                return n.moveTo(r.x + e, r.y + t),
                n
            },
            moveTo: function(t, n) {
                function r(e, t, n) {
                    return e < 0 ? 0 : e + n > t ? (e = t - n) < 0 ? 0 : e : e
                }
                var i = this;
                if (i.settings.constrainToViewport) {
                    var o = e.getViewPort(window)
                      , a = i.layoutRect();
                    t = r(t, o.w + o.x, a.w),
                    n = r(n, o.h + o.y, a.h)
                }
                return i.state.get("rendered") ? i.layoutRect({
                    x: t,
                    y: n
                }).repaint() : (i.settings.x = t,
                i.settings.y = n),
                i.fire("move", {
                    x: t,
                    y: n
                }),
                i
            }
        }
    }
    )),
    n(Se, [pe], (function(e) {
        return {
            resizeToContent: function() {
                this._layoutRect.autoResize = !0,
                this._lastRect = null,
                this.reflow()
            },
            resizeTo: function(t, n) {
                if (t <= 1 || n <= 1) {
                    var r = e.getWindowSize();
                    t = t <= 1 ? t * r.w : t,
                    n = n <= 1 ? n * r.h : n
                }
                return this._layoutRect.autoResize = !1,
                this.layoutRect({
                    minW: t,
                    minH: n,
                    w: t,
                    h: n
                }).reflow()
            },
            resizeBy: function(e, t) {
                var n = this.layoutRect();
                return this.resizeTo(n.w + e, n.h + t)
            }
        }
    }
    )),
    n(ke, [Ne, _e, Se, pe, h, s], (function(e, t, n, r, i, o) {
        function a(e, t) {
            for (; e; ) {
                if (e == t)
                    return !0;
                e = e.parent()
            }
        }
        function s() {
            d || (d = function(e) {
                2 != e.button && function(e) {
                    for (var t = m.length; t--; ) {
                        var n = m[t]
                          , r = n.getParentCtrl(e.target);
                        if (n.settings.autohide) {
                            if (r && (a(r, n) || n.parent() === r))
                                continue;
                            (e = n.fire("autohide", {
                                target: e.target
                            })).isDefaultPrevented() || n.hide()
                        }
                    }
                }(e)
            }
            ,
            i(document).on("click touchstart", d))
        }
        function l(e) {
            function t(t, n) {
                for (var r, i = 0; i < m.length; i++)
                    if (m[i] != e)
                        for (r = m[i].parent(); r && (r = r.parent()); )
                            r == e && m[i].fixed(t).moveBy(0, n).repaint()
            }
            var n = r.getViewPort().y;
            e.settings.autofix && (e.state.get("fixed") ? e._autoFixY > n && (e.fixed(!1).layoutRect({
                y: e._autoFixY
            }).repaint(),
            t(!1, e._autoFixY - n)) : (e._autoFixY = e.layoutRect().y,
            e._autoFixY < n && (e.fixed(!0).layoutRect({
                y: 0
            }).repaint(),
            t(!0, n - e._autoFixY))))
        }
        function c(e, t) {
            var n, r, o = v.zIndex || 65535;
            if (e)
                g.push(t);
            else
                for (n = g.length; n--; )
                    g[n] === t && g.splice(n, 1);
            if (g.length)
                for (n = 0; n < g.length; n++)
                    g[n].modal && (o++,
                    r = g[n]),
                    g[n].getEl().style.zIndex = o,
                    g[n].zIndex = o,
                    o++;
            var a = i("#" + t.classPrefix + "modal-block", t.getContainerElm())[0];
            r ? i(a).css("z-index", r.zIndex - 1) : a && (a.parentNode.removeChild(a),
            p = !1),
            v.currentZIndex = o
        }
        function u(e) {
            var t;
            for (t = m.length; t--; )
                m[t] === e && m.splice(t, 1);
            for (t = g.length; t--; )
                g[t] === e && g.splice(t, 1)
        }
        var d, f, h, p, m = [], g = [], v = e.extend({
            Mixins: [t, n],
            init: function(e) {
                var t = this;
                t._super(e),
                t._eventsRoot = t,
                t.classes.add("floatpanel"),
                e.autohide && (s(),
                function() {
                    if (!h) {
                        var e = document.documentElement
                          , t = e.clientWidth
                          , n = e.clientHeight;
                        h = function() {
                            document.all && t == e.clientWidth && n == e.clientHeight || (t = e.clientWidth,
                            n = e.clientHeight,
                            v.hideAll())
                        }
                        ,
                        i(window).on("resize", h)
                    }
                }(),
                m.push(t)),
                e.autofix && (f || (f = function() {
                    var e;
                    for (e = m.length; e--; )
                        l(m[e])
                }
                ,
                i(window).on("scroll", f)),
                t.on("move", (function() {
                    l(this)
                }
                ))),
                t.on("postrender show", (function(e) {
                    if (e.control == t) {
                        var n, r = t.classPrefix;
                        t.modal && !p && ((n = i("#" + r + "modal-block", t.getContainerElm()))[0] || (n = i('<div id="' + r + 'modal-block" class="' + r + "reset " + r + 'fade"></div>').appendTo(t.getContainerElm())),
                        o.setTimeout((function() {
                            n.addClass(r + "in"),
                            i(t.getEl()).addClass(r + "in")
                        }
                        )),
                        p = !0),
                        c(!0, t)
                    }
                }
                )),
                t.on("show", (function() {
                    t.parents().each((function(e) {
                        if (e.state.get("fixed"))
                            return t.fixed(!0),
                            !1
                    }
                    ))
                }
                )),
                e.popover && (t._preBodyHtml = '<div class="' + t.classPrefix + 'arrow"></div>',
                t.classes.add("popover").add("bottom").add(t.isRtl() ? "end" : "start")),
                t.aria("label", e.ariaLabel),
                t.aria("labelledby", t._id),
                t.aria("describedby", t.describedBy || t._id + "-none")
            },
            fixed: function(e) {
                var t = this;
                if (t.state.get("fixed") != e) {
                    if (t.state.get("rendered")) {
                        var n = r.getViewPort();
                        e ? t.layoutRect().y -= n.y : t.layoutRect().y += n.y
                    }
                    t.classes.toggle("fixed", e),
                    t.state.set("fixed", e)
                }
                return t
            },
            show: function() {
                var e, t = this, n = t._super();
                for (e = m.length; e-- && m[e] !== t; )
                    ;
                return -1 === e && m.push(t),
                n
            },
            hide: function() {
                return u(this),
                c(!1, this),
                this._super()
            },
            hideAll: function() {
                v.hideAll()
            },
            close: function() {
                var e = this;
                return e.fire("close").isDefaultPrevented() || (e.remove(),
                c(!1, e)),
                e
            },
            remove: function() {
                u(this),
                this._super()
            },
            postRender: function() {
                var e = this;
                return e.settings.bodyRole && this.getEl("body").setAttribute("role", e.settings.bodyRole),
                e._super()
            }
        });
        return v.hideAll = function() {
            for (var e = m.length; e--; ) {
                var t = m[e];
                t && t.settings.autohide && (t.hide(),
                m.splice(e, 1))
            }
        }
        ,
        v
    }
    )),
    n(Te, [ke, Ne, pe, h, we, me, l, s], (function(e, t, n, r, i, o, a, s) {
        function l(e) {
            var t, n = r("meta[name=viewport]")[0];
            !1 !== a.overrideViewPort && (n || ((n = document.createElement("meta")).setAttribute("name", "viewport"),
            document.getElementsByTagName("head")[0].appendChild(n)),
            (t = n.getAttribute("content")) && void 0 !== d && (d = t),
            n.setAttribute("content", e ? "width=device-width,initial-scale=1.0,user-scalable=0,minimum-scale=1.0,maximum-scale=1.0" : d))
        }
        function c(e, t) {
            (function() {
                for (var e = 0; e < u.length; e++)
                    if (u[e]._fullscreen)
                        return !0;
                return !1
            }
            )() && !1 === t && r([document.documentElement, document.body]).removeClass(e + "fullscreen")
        }
        var u = []
          , d = ""
          , f = e.extend({
            modal: !0,
            Defaults: {
                border: 1,
                layout: "flex",
                containerCls: "panel",
                role: "dialog",
                callbacks: {
                    submit: function() {
                        this.fire("submit", {
                            data: this.toJSON()
                        })
                    },
                    close: function() {
                        this.close()
                    }
                }
            },
            init: function(e) {
                var r = this;
                r._super(e),
                r.isRtl() && r.classes.add("rtl"),
                r.classes.add("window"),
                r.bodyClasses.add("window-body"),
                r.state.set("fixed", !0),
                e.buttons && (r.statusbar = new t({
                    layout: "flex",
                    border: "1 0 0 0",
                    spacing: 3,
                    padding: 10,
                    align: "center",
                    pack: r.isRtl() ? "start" : "end",
                    defaults: {
                        type: "button"
                    },
                    items: e.buttons
                }),
                r.statusbar.classes.add("foot"),
                r.statusbar.parent(r)),
                r.on("click", (function(e) {
                    var t = r.classPrefix + "close";
                    (n.hasClass(e.target, t) || n.hasClass(e.target.parentNode, t)) && r.close()
                }
                )),
                r.on("cancel", (function() {
                    r.close()
                }
                )),
                r.aria("describedby", r.describedBy || r._id + "-none"),
                r.aria("label", e.title),
                r._fullscreen = !1
            },
            recalc: function() {
                var e, t, r, i, o = this, a = o.statusbar;
                o._fullscreen && (o.layoutRect(n.getWindowSize()),
                o.layoutRect().contentH = o.layoutRect().innerH),
                o._super(),
                e = o.layoutRect(),
                o.settings.title && !o._fullscreen && ((t = e.headerW) > e.w && (r = e.x - Math.max(0, t / 2),
                o.layoutRect({
                    w: t,
                    x: r
                }),
                i = !0)),
                a && (a.layoutRect({
                    w: o.layoutRect().innerW
                }).recalc(),
                (t = a.layoutRect().minW + e.deltaW) > e.w && (r = e.x - Math.max(0, t - e.w),
                o.layoutRect({
                    w: t,
                    x: r
                }),
                i = !0)),
                i && o.recalc()
            },
            initLayoutRect: function() {
                var e, t = this, r = t._super(), i = 0;
                if (t.settings.title && !t._fullscreen) {
                    e = t.getEl("head");
                    var o = n.getSize(e);
                    r.headerW = o.width,
                    r.headerH = o.height,
                    i += r.headerH
                }
                t.statusbar && (i += t.statusbar.layoutRect().h),
                r.deltaH += i,
                r.minH += i,
                r.h += i;
                var a = n.getWindowSize();
                return r.x = t.settings.x || Math.max(0, a.w / 2 - r.w / 2),
                r.y = t.settings.y || Math.max(0, a.h / 2 - r.h / 2),
                r
            },
            renderHtml: function() {
                var e = this
                  , t = e._layout
                  , n = e._id
                  , r = e.classPrefix
                  , i = e.settings
                  , o = ""
                  , a = ""
                  , s = i.html;
                return e.preRender(),
                t.preRender(e),
                i.title && (o = '<div id="' + n + '-head" class="' + r + 'window-head"><div id="' + n + '-title" class="' + r + 'title">' + e.encode(i.title) + '</div><div id="' + n + '-dragh" class="' + r + 'dragh"></div><button type="button" class="' + r + 'close" aria-hidden="true"><i class="mce-ico mce-i-remove"></i></button></div>'),
                i.url && (s = '<iframe src="' + i.url + '" tabindex="-1"></iframe>'),
                void 0 === s && (s = t.renderHtml(e)),
                e.statusbar && (a = e.statusbar.renderHtml()),
                '<div id="' + n + '" class="' + e.classes + '" hidefocus="1"><div class="' + e.classPrefix + 'reset" role="application">' + o + '<div id="' + n + '-body" class="' + e.bodyClasses + '">' + s + "</div>" + a + "</div></div>"
            },
            fullscreen: function(e) {
                var t, i, a = this, l = document.documentElement, c = a.classPrefix;
                if (e != a._fullscreen)
                    if (r(window).on("resize", (function() {
                        var e;
                        if (a._fullscreen)
                            if (t)
                                a._timer || (a._timer = s.setTimeout((function() {
                                    var e = n.getWindowSize();
                                    a.moveTo(0, 0).resizeTo(e.w, e.h),
                                    a._timer = 0
                                }
                                ), 50));
                            else {
                                e = (new Date).getTime();
                                var r = n.getWindowSize();
                                a.moveTo(0, 0).resizeTo(r.w, r.h),
                                (new Date).getTime() - e > 50 && (t = !0)
                            }
                    }
                    )),
                    i = a.layoutRect(),
                    a._fullscreen = e,
                    e) {
                        a._initial = {
                            x: i.x,
                            y: i.y,
                            w: i.w,
                            h: i.h
                        },
                        a.borderBox = o.parseBox("0"),
                        a.getEl("head").style.display = "none",
                        i.deltaH -= i.headerH + 2,
                        r([l, document.body]).addClass(c + "fullscreen"),
                        a.classes.add("fullscreen");
                        var u = n.getWindowSize();
                        a.moveTo(0, 0).resizeTo(u.w, u.h)
                    } else
                        a.borderBox = o.parseBox(a.settings.border),
                        a.getEl("head").style.display = "",
                        i.deltaH += i.headerH,
                        r([l, document.body]).removeClass(c + "fullscreen"),
                        a.classes.remove("fullscreen"),
                        a.moveTo(a._initial.x, a._initial.y).resizeTo(a._initial.w, a._initial.h);
                return a.reflow()
            },
            postRender: function() {
                var e, t = this;
                setTimeout((function() {
                    t.classes.add("in"),
                    t.fire("open")
                }
                ), 0),
                t._super(),
                t.statusbar && t.statusbar.postRender(),
                t.focus(),
                this.dragHelper = new i(t._id + "-dragh",{
                    start: function() {
                        e = {
                            x: t.layoutRect().x,
                            y: t.layoutRect().y
                        }
                    },
                    drag: function(n) {
                        t.moveTo(e.x + n.deltaX, e.y + n.deltaY)
                    }
                }),
                t.on("submit", (function(e) {
                    e.isDefaultPrevented() || t.close()
                }
                )),
                u.push(t),
                l(!0)
            },
            submit: function() {
                return this.fire("submit", {
                    data: this.toJSON()
                })
            },
            remove: function() {
                var e, t = this;
                for (t.dragHelper.destroy(),
                t._super(),
                t.statusbar && this.statusbar.remove(),
                c(t.classPrefix, !1),
                e = u.length; e--; )
                    u[e] === t && u.splice(e, 1);
                l(u.length > 0)
            },
            getContentWindow: function() {
                var e = this.getEl().getElementsByTagName("iframe")[0];
                return e ? e.contentWindow : null
            }
        });
        return function() {
            if (!a.desktop) {
                var e = {
                    w: window.innerWidth,
                    h: window.innerHeight
                };
                s.setInterval((function() {
                    var t = window.innerWidth
                      , n = window.innerHeight;
                    e.w == t && e.h == n || (e = {
                        w: t,
                        h: n
                    },
                    r(window).trigger("resize"))
                }
                ), 100)
            }
            r(window).on("resize", (function() {
                var e, t, r = n.getWindowSize();
                for (e = 0; e < u.length; e++)
                    t = u[e].layoutRect(),
                    u[e].moveTo(u[e].settings.x || Math.max(0, r.w / 2 - t.w / 2), u[e].settings.y || Math.max(0, r.h / 2 - t.h / 2))
            }
            ))
        }(),
        f
    }
    )),
    n(Re, [Te], (function(e) {
        var t = e.extend({
            init: function(e) {
                e = {
                    border: 1,
                    padding: 20,
                    layout: "flex",
                    pack: "center",
                    align: "center",
                    containerCls: "panel",
                    autoScroll: !0,
                    buttons: {
                        type: "button",
                        text: "Ok",
                        action: "ok"
                    },
                    items: {
                        type: "label",
                        multiline: !0,
                        maxWidth: 500,
                        maxHeight: 200
                    }
                },
                this._super(e)
            },
            Statics: {
                OK: 1,
                OK_CANCEL: 2,
                YES_NO: 3,
                YES_NO_CANCEL: 4,
                msgBox: function(n) {
                    function r(e, t, n) {
                        return {
                            type: "button",
                            text: e,
                            subtype: n ? "primary" : "",
                            onClick: function(e) {
                                e.control.parents()[1].close(),
                                o(t)
                            }
                        }
                    }
                    var i, o = n.callback || function() {}
                    ;
                    switch (n.buttons) {
                    case t.OK_CANCEL:
                        i = [r("Ok", !0, !0), r("Cancel", !1)];
                        break;
                    case t.YES_NO:
                    case t.YES_NO_CANCEL:
                        i = [r("Yes", 1, !0), r("No", 0)],
                        n.buttons == t.YES_NO_CANCEL && i.push(r("Cancel", -1));
                        break;
                    default:
                        i = [r("Ok", !0, !0)]
                    }
                    return new e({
                        padding: 20,
                        x: n.x,
                        y: n.y,
                        minWidth: 300,
                        minHeight: 100,
                        layout: "flex",
                        pack: "center",
                        align: "center",
                        buttons: i,
                        title: n.title,
                        role: "alertdialog",
                        items: {
                            type: "label",
                            multiline: !0,
                            maxWidth: 500,
                            maxHeight: 200,
                            text: n.text
                        },
                        onPostRender: function() {
                            this.aria("describedby", this.items()[0]._id)
                        },
                        onClose: n.onClose,
                        onCancel: function() {
                            o(!1)
                        }
                    }).renderTo(document.body).reflow()
                },
                alert: function(e, n) {
                    return "string" == typeof e && (e = {
                        text: e
                    }),
                    e.callback = n,
                    t.msgBox(e)
                },
                confirm: function(e, n) {
                    return "string" == typeof e && (e = {
                        text: e
                    }),
                    e.callback = n,
                    e.buttons = t.OK_CANCEL,
                    t.msgBox(e)
                }
            }
        });
        return t
    }
    )),
    n(Ae, [Te, Re], (function(e, t) {
        return function(n) {
            function r() {
                if (s.length)
                    return s[s.length - 1]
            }
            function i(e) {
                n.fire("OpenWindow", {
                    win: e
                })
            }
            function o(e) {
                n.fire("CloseWindow", {
                    win: e
                })
            }
            var a = this
              , s = [];
            a.windows = s,
            n.on("remove", (function() {
                for (var e = s.length; e--; )
                    s[e].close()
            }
            )),
            a.open = function(t, r) {
                var a;
                return n.editorManager.setActive(n),
                t.title = t.title || " ",
                t.url = t.url || t.file,
                t.url && (t.width = parseInt(t.width || 320, 10),
                t.height = parseInt(t.height || 240, 10)),
                t.body && (t.items = {
                    defaults: t.defaults,
                    type: t.bodyType || "form",
                    items: t.body,
                    data: t.data,
                    callbacks: t.commands
                }),
                t.url || t.buttons || (t.buttons = [{
                    text: "Ok",
                    subtype: "primary",
                    onclick: function() {
                        a.find("form")[0].submit()
                    }
                }, {
                    text: "Cancel",
                    onclick: function() {
                        a.close()
                    }
                }]),
                a = new e(t),
                s.push(a),
                a.on("close", (function() {
                    for (var e = s.length; e--; )
                        s[e] === a && s.splice(e, 1);
                    s.length || n.focus(),
                    o(a)
                }
                )),
                t.data && a.on("postRender", (function() {
                    this.find("*").each((function(e) {
                        var n = e.name();
                        n in t.data && e.value(t.data[n])
                    }
                    ))
                }
                )),
                a.features = t || {},
                a.params = r || {},
                1 === s.length && n.nodeChanged(),
                i(a = a.renderTo().reflow()),
                a
            }
            ,
            a.alert = function(e, r, a) {
                var s;
                (s = t.alert(e, (function() {
                    r ? r.call(a || this) : n.focus()
                }
                ))).on("close", (function() {
                    o(s)
                }
                )),
                i(s)
            }
            ,
            a.confirm = function(e, n, r) {
                var a;
                a = t.confirm(e, (function(e) {
                    n.call(r || this, e)
                }
                )),
                a.on("close", (function() {
                    o(a)
                }
                )),
                i(a)
            }
            ,
            a.close = function() {
                r() && r().close()
            }
            ,
            a.getParams = function() {
                return r() ? r().params : null
            }
            ,
            a.setParams = function(e) {
                r() && (r().params = e)
            }
            ,
            a.getWindows = function() {
                return s
            }
        }
    }
    )),
    n(Be, [ye, _e], (function(e, t) {
        return e.extend({
            Mixins: [t],
            Defaults: {
                classes: "widget tooltip tooltip-n"
            },
            renderHtml: function() {
                var e = this
                  , t = e.classPrefix;
                return '<div id="' + e._id + '" class="' + e.classes + '" role="presentation"><div class="' + t + 'tooltip-arrow"></div><div class="' + t + 'tooltip-inner">' + e.encode(e.state.get("text")) + "</div></div>"
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:text", (function(t) {
                    e.getEl().lastChild.innerHTML = e.encode(t.value)
                }
                )),
                e._super()
            },
            repaint: function() {
                var e, t;
                e = this.getEl().style,
                t = this._layoutRect,
                e.left = t.x + "px",
                e.top = t.y + "px",
                e.zIndex = 131070
            }
        })
    }
    )),
    n(De, [ye, Be], (function(e, t) {
        var n, r = e.extend({
            init: function(e) {
                var t = this;
                t._super(e),
                e = t.settings,
                t.canFocus = !0,
                e.tooltip && !1 !== r.tooltips && (t.on("mouseenter", (function(n) {
                    var r = t.tooltip().moveTo(-65535);
                    if (n.control == t) {
                        var i = r.text(e.tooltip).show().testMoveRel(t.getEl(), ["bc-tc", "bc-tl", "bc-tr"]);
                        r.classes.toggle("tooltip-n", "bc-tc" == i),
                        r.classes.toggle("tooltip-nw", "bc-tl" == i),
                        r.classes.toggle("tooltip-ne", "bc-tr" == i),
                        r.moveRel(t.getEl(), i)
                    } else
                        r.hide()
                }
                )),
                t.on("mouseleave mousedown click", (function() {
                    t.tooltip().hide()
                }
                ))),
                t.aria("label", e.ariaLabel || e.tooltip)
            },
            tooltip: function() {
                return n || (n = new t({
                    type: "tooltip"
                })).renderTo(),
                n
            },
            postRender: function() {
                var e = this
                  , t = e.settings;
                e._super(),
                e.parent() || !t.width && !t.height || (e.initLayoutRect(),
                e.repaint()),
                t.autofocus && e.focus()
            },
            bindStates: function() {
                function e(e) {
                    n.aria("disabled", e),
                    n.classes.toggle("disabled", e)
                }
                function t(e) {
                    n.aria("pressed", e),
                    n.classes.toggle("active", e)
                }
                var n = this;
                return n.state.on("change:disabled", (function(t) {
                    e(t.value)
                }
                )),
                n.state.on("change:active", (function(e) {
                    t(e.value)
                }
                )),
                n.state.get("disabled") && e(!0),
                n.state.get("active") && t(!0),
                n._super()
            },
            remove: function() {
                this._super(),
                n && (n.remove(),
                n = null)
            }
        });
        return r
    }
    )),
    n(Le, [De], (function(e) {
        return e.extend({
            Defaults: {
                value: 0
            },
            init: function(e) {
                var t = this;
                t._super(e),
                t.classes.add("progress"),
                t.settings.filter || (t.settings.filter = function(e) {
                    return Math.round(e)
                }
                )
            },
            renderHtml: function() {
                var e = this._id
                  , t = this.classPrefix;
                return '<div id="' + e + '" class="' + this.classes + '"><div class="' + t + 'bar-container"><div class="' + t + 'bar"></div></div><div class="' + t + 'text">0%</div></div>'
            },
            postRender: function() {
                var e = this;
                return e._super(),
                e.value(e.settings.value),
                e
            },
            bindStates: function() {
                function e(e) {
                    e = t.settings.filter(e),
                    t.getEl().lastChild.innerHTML = e + "%",
                    t.getEl().firstChild.firstChild.style.width = e + "%"
                }
                var t = this;
                return t.state.on("change:value", (function(t) {
                    e(t.value)
                }
                )),
                e(t.state.get("value")),
                t._super()
            }
        })
    }
    )),
    n(Me, [ye, _e, Le, s], (function(e, t, n, r) {
        return e.extend({
            Mixins: [t],
            Defaults: {
                classes: "widget notification"
            },
            init: function(e) {
                var t = this;
                t._super(e),
                e.text && t.text(e.text),
                e.icon && (t.icon = e.icon),
                e.color && (t.color = e.color),
                e.type && t.classes.add("notification-" + e.type),
                e.timeout && (e.timeout < 0 || e.timeout > 0) && !e.closeButton ? t.closeButton = !1 : (t.classes.add("has-close"),
                t.closeButton = !0),
                e.progressBar && (t.progressBar = new n),
                t.on("click", (function(e) {
                    -1 != e.target.className.indexOf(t.classPrefix + "close") && t.close()
                }
                ))
            },
            renderHtml: function() {
                var e = this
                  , t = e.classPrefix
                  , n = ""
                  , r = ""
                  , i = ""
                  , o = "";
                return e.icon && (n = '<i class="' + t + "ico " + t + "i-" + e.icon + '"></i>'),
                e.color && (o = ' style="background-color: ' + e.color + '"'),
                e.closeButton && (r = '<button type="button" class="' + t + 'close" aria-hidden="true">×</button>'),
                e.progressBar && (i = e.progressBar.renderHtml()),
                '<div id="' + e._id + '" class="' + e.classes + '"' + o + ' role="presentation">' + n + '<div class="' + t + 'notification-inner">' + e.state.get("text") + "</div>" + i + r + "</div>"
            },
            postRender: function() {
                var e = this;
                return r.setTimeout((function() {
                    e.$el.addClass(e.classPrefix + "in")
                }
                )),
                e._super()
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:text", (function(t) {
                    e.getEl().childNodes[1].innerHTML = t.value
                }
                )),
                e.progressBar && e.progressBar.bindStates(),
                e._super()
            },
            close: function() {
                var e = this;
                return e.fire("close").isDefaultPrevented() || e.remove(),
                e
            },
            repaint: function() {
                var e, t;
                e = this.getEl().style,
                t = this._layoutRect,
                e.left = t.x + "px",
                e.top = t.y + "px",
                e.zIndex = 65534
            }
        })
    }
    )),
    n(Pe, [Me, s, f], (function(e, t, n) {
        return function(r) {
            function i() {
                if (l.length)
                    return l[l.length - 1]
            }
            function o() {
                if (l.length > 0) {
                    var e = l.slice(0, 1)[0]
                      , t = r.inline ? r.getElement() : r.getContentAreaContainer();
                    if (e.moveRel(t, "tc-tc"),
                    l.length > 1)
                        for (var n = 1; n < l.length; n++)
                            l[n].moveRel(l[n - 1].getEl(), "bc-tc")
                }
            }
            function a(e, t) {
                if (!function(e) {
                    return !e.progressBar && !e.timeout
                }(t))
                    return null;
                var r = n.grep(e, (function(e) {
                    return function(e, t) {
                        return e.type === t.settings.type && e.text === t.settings.text
                    }(t, e)
                }
                ));
                return 0 === r.length ? null : r[0]
            }
            var s = this
              , l = [];
            s.notifications = l,
            r.on("remove", (function() {
                for (var e = l.length; e--; )
                    l[e].close()
            }
            )),
            r.on("ResizeEditor", o),
            r.on("ResizeWindow", (function() {
                t.requestAnimationFrame((function() {
                    (function() {
                        for (var e = 0; e < l.length; e++)
                            l[e].moveTo(0, 0)
                    }
                    )(),
                    o()
                }
                ))
            }
            )),
            s.open = function(t) {
                if (!r.removed) {
                    var n;
                    r.editorManager.setActive(r);
                    var i = a(l, t);
                    return null === i ? (n = new e(t),
                    l.push(n),
                    t.timeout > 0 && (n.timer = setTimeout((function() {
                        n.close()
                    }
                    ), t.timeout)),
                    n.on("close", (function() {
                        var e = l.length;
                        for (n.timer && r.getWin().clearTimeout(n.timer); e--; )
                            l[e] === n && l.splice(e, 1);
                        o()
                    }
                    )),
                    n.renderTo(),
                    o()) : n = i,
                    n
                }
            }
            ,
            s.close = function() {
                i() && i().close()
            }
            ,
            s.getNotifications = function() {
                return l
            }
            ,
            r.on("SkinLoaded", (function() {
                var e = r.settings.service_message;
                e && r.notificationManager.open({
                    text: e,
                    type: "warning",
                    timeout: 0,
                    icon: ""
                })
            }
            ))
        }
    }
    )),
    n(Oe, [b], (function(e) {
        return {
            create: function(t, n, r) {
                for (var i = []; n && n != t; n = n.parentNode)
                    i.push(e.nodeIndex(n, r));
                return i
            },
            resolve: function(e, t) {
                var n, r, i;
                for (r = e,
                n = t.length - 1; n >= 0; n--) {
                    if (i = r.childNodes,
                    t[n] > i.length - 1)
                        return null;
                    r = i[t[n]]
                }
                return r
            }
        }
    }
    )),
    n(He, [P, _, m, Oe, k, v, l, f, s, N, U, ne], (function(e, t, n, r, i, o, a, s, l, c, u, d) {
        return function(f) {
            function h(e, t) {
                try {
                    f.getDoc().execCommand(e, !1, t)
                } catch (e) {}
            }
            function p() {
                var e = f.getDoc().documentMode;
                return e || 6
            }
            function m(e) {
                return e.isDefaultPrevented()
            }
            function g(e) {
                var t, n;
                e.dataTransfer && (f.selection.isCollapsed() && "IMG" == e.target.tagName && A.select(e.target),
                (t = f.selection.getContent()).length > 0 && (n = H + escape(f.id) + "," + escape(t),
                e.dataTransfer.setData(I, n)))
            }
            function v(e) {
                var t;
                return e.dataTransfer && ((t = e.dataTransfer.getData(I)) && t.indexOf(H) >= 0) ? (t = t.substr(H.length).split(","),
                {
                    id: unescape(t[0]),
                    html: unescape(t[1])
                }) : null
            }
            function y(e) {
                f.queryCommandSupported("mceInsertClipboardContent") ? f.execCommand("mceInsertClipboardContent", !1, {
                    content: e
                }) : f.execCommand("mceInsertContent", !1, e)
            }
            function b() {
                f.shortcuts.add("meta+a", null, "SelectAll")
            }
            function C() {
                f.on("keydown", (function(e) {
                    if (!m(e) && e.keyCode === k) {
                        if (!f.getBody().getElementsByTagName("hr").length)
                            return;
                        if (A.isCollapsed() && 0 === A.getRng(!0).startOffset) {
                            var t = A.getNode()
                              , n = t.previousSibling;
                            if ("HR" == t.nodeName)
                                return R.remove(t),
                                void e.preventDefault();
                            n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (R.remove(n),
                            e.preventDefault())
                        }
                    }
                }
                ))
            }
            function x() {
                f.on("keydown", (function(e) {
                    if (!m(e) && e.keyCode === k && A.isCollapsed() && 0 === A.getRng(!0).startOffset) {
                        var t = A.getNode().previousSibling;
                        if (t && t.nodeName && "table" === t.nodeName.toLowerCase())
                            return e.preventDefault(),
                            !1
                    }
                }
                ))
            }
            function w() {
                f.inline || (f.contentStyles.push("body {min-height: 150px}"),
                f.on("click", (function(e) {
                    var t;
                    if ("HTML" == e.target.nodeName) {
                        if (a.ie > 11)
                            return void f.getBody().focus();
                        t = f.selection.getRng(),
                        f.getBody().focus(),
                        f.selection.setRng(t),
                        f.selection.normalize(),
                        f.nodeChanged()
                    }
                }
                )))
            }
            function E() {}
            function N() {
                function t(e) {
                    var t = new d(e.getBody())
                      , n = e.selection.getRng()
                      , r = u.fromRangeStart(n)
                      , i = u.fromRangeEnd(n);
                    return !e.selection.isCollapsed() && !t.prev(r) && !t.next(i)
                }
                f.on("keypress", (function(n) {
                    !m(n) && !A.isCollapsed() && n.charCode > 31 && !e.metaKeyPressed(n) && t(f) && (n.preventDefault(),
                    f.setContent(String.fromCharCode(n.charCode)),
                    f.selection.select(f.getBody(), !0),
                    f.selection.collapse(!1),
                    f.nodeChanged())
                }
                )),
                f.on("keydown", (function(e) {
                    var n = e.keyCode;
                    m(e) || n != T && n != k || t(f) && (e.preventDefault(),
                    f.setContent(""),
                    f.nodeChanged())
                }
                ))
            }
            var _ = s.each
              , S = f.$
              , k = e.BACKSPACE
              , T = e.DELETE
              , R = f.dom
              , A = f.selection
              , B = f.settings
              , D = f.parser
              , L = f.serializer
              , M = a.gecko
              , P = a.ie
              , O = a.webkit
              , H = "data:text/mce-internal,"
              , I = P ? "Text" : "URL";
            return f.on("keydown", (function(t) {
                var n, r, i, o, a;
                if (!m(t) && t.keyCode == e.BACKSPACE && (r = (n = A.getRng()).startContainer,
                i = n.startOffset,
                o = R.getRoot(),
                a = r,
                n.collapsed && 0 === i)) {
                    for (; a && a.parentNode && a.parentNode.firstChild == a && a.parentNode != o; )
                        a = a.parentNode;
                    "BLOCKQUOTE" === a.tagName && (f.formatter.toggle("blockquote", null, a),
                    (n = R.createRng()).setStart(r, 0),
                    n.setEnd(r, 0),
                    A.setRng(n))
                }
            }
            )),
            function() {
                function e(e) {
                    var t = R.create("body")
                      , n = e.cloneContents();
                    return t.appendChild(n),
                    A.serializer.serialize(t, {
                        format: "html"
                    })
                }
                function n(n) {
                    if (!n.setStart) {
                        if (n.item)
                            return !1;
                        var r = n.duplicate();
                        return r.moveToElementText(f.getBody()),
                        t.compareRanges(n, r)
                    }
                    var i = e(n)
                      , o = R.createRng();
                    return o.selectNode(f.getBody()),
                    i === e(o)
                }
                f.on("keydown", (function(e) {
                    var t, r, i = e.keyCode;
                    if (!m(e) && (i == T || i == k)) {
                        if (t = f.selection.isCollapsed(),
                        r = f.getBody(),
                        t && !R.isEmpty(r))
                            return;
                        if (!t && !n(f.selection.getRng()))
                            return;
                        e.preventDefault(),
                        f.setContent(""),
                        r.firstChild && R.isBlock(r.firstChild) ? f.selection.setCursorLocation(r.firstChild, 0) : f.selection.setCursorLocation(r, 0),
                        f.nodeChanged()
                    }
                }
                ))
            }(),
            a.windowsPhone || f.on("keyup focusin mouseup", (function(t) {
                65 == t.keyCode && e.metaKeyPressed(t) || A.normalize()
            }
            ), !0),
            O && (N(),
            function() {
                function i(e) {
                    var t = w.schema.getBlockElements()
                      , n = f.getBody();
                    if ("BR" != e.nodeName)
                        return !1;
                    for (; e != n && !t[e.nodeName]; e = e.parentNode)
                        if (e.nextSibling)
                            return !1;
                    return !0
                }
                function o(e, t) {
                    var n;
                    for (n = e.nextSibling; n && n != t; n = n.nextSibling)
                        if ((3 != n.nodeType || 0 !== S.trim(n.data).length) && n !== t)
                            return !1;
                    return n === t
                }
                function a(e, t, r) {
                    var o, a, s;
                    if (w.isChildOf(e, f.getBody()))
                        for (s = w.schema.getNonEmptyElements(),
                        o = new n(r || e,e); a = o[t ? "next" : "prev"](); ) {
                            if (s[a.nodeName] && !i(a))
                                return a;
                            if (3 == a.nodeType && a.data.length > 0)
                                return a
                        }
                }
                function c(e) {
                    var n, r, i, o, s;
                    if (!e.collapsed && (n = w.getParent(t.getNode(e.startContainer, e.startOffset), w.isBlock),
                    r = w.getParent(t.getNode(e.endContainer, e.endOffset), w.isBlock),
                    s = f.schema.getTextBlockElements(),
                    n != r && s[n.nodeName] && s[r.nodeName] && "false" !== w.getContentEditable(n) && "false" !== w.getContentEditable(r)))
                        return e.deleteContents(),
                        i = a(n, !1),
                        o = a(r, !0),
                        w.isEmpty(r) || S(n).append(r.childNodes),
                        S(r).remove(),
                        i ? 1 == i.nodeType ? "BR" == i.nodeName ? (e.setStartBefore(i),
                        e.setEndBefore(i)) : (e.setStartAfter(i),
                        e.setEndAfter(i)) : (e.setStart(i, i.data.length),
                        e.setEnd(i, i.data.length)) : o && (1 == o.nodeType ? (e.setStartBefore(o),
                        e.setEndBefore(o)) : (e.setStart(o, 0),
                        e.setEnd(o, 0))),
                        E.setRng(e),
                        !0
                }
                function u(e, n) {
                    var r, i, s, l, c, u;
                    if (!e.collapsed)
                        return e;
                    if (c = e.startContainer,
                    u = e.startOffset,
                    3 == c.nodeType)
                        if (n) {
                            if (u < c.data.length)
                                return e
                        } else if (u > 0)
                            return e;
                    r = t.getNode(c, u),
                    s = w.getParent(r, w.isBlock),
                    i = a(f.getBody(), n, r),
                    l = w.getParent(i, w.isBlock);
                    var d = 1 === c.nodeType && u > c.childNodes.length - 1;
                    if (!r || !i)
                        return e;
                    if (l && s != l)
                        if (n) {
                            if (!o(s, l))
                                return e;
                            1 == r.nodeType ? "BR" == r.nodeName ? e.setStartBefore(r) : e.setStartAfter(r) : e.setStart(r, r.data.length),
                            1 == i.nodeType ? e.setEnd(i, 0) : e.setEndBefore(i)
                        } else {
                            if (!o(l, s))
                                return e;
                            1 == i.nodeType ? "BR" == i.nodeName ? e.setStartBefore(i) : e.setStartAfter(i) : e.setStart(i, i.data.length),
                            1 == r.nodeType && d ? e.setEndAfter(r) : e.setEndBefore(r)
                        }
                    return e
                }
                function d(e, t) {
                    function n(e, n) {
                        return m = S(n).parents().filter((function(e, t) {
                            return !!f.schema.getTextInlineElements()[t.nodeName]
                        }
                        )),
                        l = e.cloneNode(!1),
                        m = s.map(m, (function(e) {
                            return e = e.cloneNode(!1),
                            l.hasChildNodes() ? (e.appendChild(l.firstChild),
                            l.appendChild(e)) : l.appendChild(e),
                            l.appendChild(e),
                            e
                        }
                        )),
                        m.length ? (p = w.create("br"),
                        m[0].appendChild(p),
                        w.replace(l, e),
                        t.setStartBefore(p),
                        t.setEndBefore(p),
                        f.selection.setRng(t),
                        p) : null
                    }
                    function i(e) {
                        return e && f.schema.getTextBlockElements()[e.tagName]
                    }
                    var o, a, l, c, u, d, h, p, m;
                    if (t.collapsed && (d = t.startContainer,
                    h = t.startOffset,
                    i(a = w.getParent(d, w.isBlock))))
                        if (1 == d.nodeType) {
                            if ((d = d.childNodes[h]) && "BR" != d.tagName)
                                return;
                            if (u = e ? a.nextSibling : a.previousSibling,
                            w.isEmpty(a) && i(u) && w.isEmpty(u) && n(a, d))
                                return w.remove(u),
                                !0
                        } else if (3 == d.nodeType) {
                            if (o = r.create(a, d),
                            c = a.cloneNode(!0),
                            d = r.resolve(c, o),
                            e) {
                                if (h >= d.data.length)
                                    return;
                                d.deleteData(h, 1)
                            } else {
                                if (h <= 0)
                                    return;
                                d.deleteData(h - 1, 1)
                            }
                            if (w.isEmpty(c))
                                return n(a, d)
                        }
                }
                function h(e) {
                    var t, n, r;
                    (function(e) {
                        var t = E.getRng();
                        if (c(t = u(t, e)))
                            return !0
                    }
                    )(e) || (s.each(f.getBody().getElementsByTagName("*"), (function(e) {
                        "SPAN" == e.tagName && e.setAttribute("mce-data-marked", 1),
                        !e.hasAttribute("data-mce-style") && e.hasAttribute("style") && f.dom.setAttrib(e, "style", f.dom.getAttrib(e, "style"))
                    }
                    )),
                    (t = new N((function() {}
                    ))).observe(f.getDoc(), {
                        childList: !0,
                        attributes: !0,
                        subtree: !0,
                        attributeFilter: ["style"]
                    }),
                    f.getDoc().execCommand(e ? "ForwardDelete" : "Delete", !1, null),
                    n = f.selection.getRng(),
                    r = n.startContainer.parentNode,
                    s.each(t.takeRecords(), (function(e) {
                        if (w.isChildOf(e.target, f.getBody())) {
                            if ("style" == e.attributeName) {
                                var t = e.target.getAttribute("data-mce-style");
                                t ? e.target.setAttribute("style", t) : e.target.removeAttribute("style")
                            }
                            s.each(e.addedNodes, (function(e) {
                                var t, i;
                                "SPAN" != e.nodeName || e.getAttribute("mce-data-marked") || (e == r && (t = n.startOffset,
                                i = e.firstChild),
                                w.remove(e, !0),
                                i && (n.setStart(i, t),
                                n.setEnd(i, t),
                                f.selection.setRng(n)))
                            }
                            ))
                        }
                    }
                    )),
                    t.disconnect(),
                    s.each(f.dom.select("span[mce-data-marked]"), (function(e) {
                        e.removeAttribute("mce-data-marked")
                    }
                    )))
                }
                function p(e) {
                    f.undoManager.transact((function() {
                        h(e)
                    }
                    ))
                }
                var b, C, x = f.getDoc(), w = f.dom, E = f.selection, N = window.MutationObserver;
                N || (b = !0,
                N = function() {
                    function e(e) {
                        var t = e.relatedNode || e.target;
                        r.push({
                            target: t,
                            addedNodes: [t]
                        })
                    }
                    function t(e) {
                        var t = e.relatedNode || e.target;
                        r.push({
                            target: t,
                            attributeName: e.attrName
                        })
                    }
                    var n, r = [];
                    this.observe = function(r) {
                        (n = r).addEventListener("DOMSubtreeModified", e, !1),
                        n.addEventListener("DOMNodeInsertedIntoDocument", e, !1),
                        n.addEventListener("DOMNodeInserted", e, !1),
                        n.addEventListener("DOMAttrModified", t, !1)
                    }
                    ,
                    this.disconnect = function() {
                        n.removeEventListener("DOMSubtreeModified", e, !1),
                        n.removeEventListener("DOMNodeInsertedIntoDocument", e, !1),
                        n.removeEventListener("DOMNodeInserted", e, !1),
                        n.removeEventListener("DOMAttrModified", t, !1)
                    }
                    ,
                    this.takeRecords = function() {
                        return r
                    }
                }
                ),
                f.on("keydown", (function(e) {
                    var t = e.keyCode == T
                      , n = e.ctrlKey || e.metaKey;
                    if (!m(e) && (t || e.keyCode == k)) {
                        var r = f.selection.getRng()
                          , i = r.startContainer
                          , o = r.startOffset;
                        if (t && e.shiftKey)
                            return;
                        if (d(t, r))
                            return void e.preventDefault();
                        if (!n && r.collapsed && 3 == i.nodeType && (t ? o < i.data.length : o > 0))
                            return;
                        e.preventDefault(),
                        n && f.selection.getSel().modify("extend", t ? "forward" : "backward", e.metaKey ? "lineboundary" : "word"),
                        h(t)
                    }
                }
                )),
                f.on("keypress", (function(t) {
                    var n, r, i, o, a, s;
                    !m(t) && !E.isCollapsed() && t.charCode > 31 && !e.metaKeyPressed(t) && (n = f.selection.getRng(),
                    s = String.fromCharCode(t.charCode),
                    t.preventDefault(),
                    r = S(n.startContainer).parents().filter((function(e, t) {
                        return !!f.schema.getTextInlineElements()[t.nodeName]
                    }
                    )),
                    h(!0),
                    r = r.filter((function(e, t) {
                        return !S.contains(f.getBody(), t)
                    }
                    )),
                    r.length ? (i = w.createFragment(),
                    r.each((function(e, t) {
                        t = t.cloneNode(!1),
                        i.hasChildNodes() ? (t.appendChild(i.firstChild),
                        i.appendChild(t)) : (a = t,
                        i.appendChild(t)),
                        i.appendChild(t)
                    }
                    )),
                    a.appendChild(f.getDoc().createTextNode(s)),
                    o = w.getParent(n.startContainer, w.isBlock),
                    w.isEmpty(o) ? S(o).empty().append(i) : n.insertNode(i),
                    n.setStart(a.firstChild, 1),
                    n.setEnd(a.firstChild, 1),
                    f.selection.setRng(n)) : f.selection.setContent(s))
                }
                )),
                f.addCommand("Delete", (function() {
                    h()
                }
                )),
                f.addCommand("ForwardDelete", (function() {
                    h(!0)
                }
                )),
                b || (f.on("dragstart", (function(e) {
                    C = E.getRng(),
                    g(e)
                }
                )),
                f.on("drop", (function(e) {
                    if (!m(e)) {
                        var n = v(e);
                        n && (e.preventDefault(),
                        l.setEditorTimeout(f, (function() {
                            var r = t.getCaretRangeFromPoint(e.x, e.y, x);
                            C && (E.setRng(C),
                            C = null,
                            p()),
                            E.setRng(r),
                            y(n.html)
                        }
                        )))
                    }
                }
                )),
                f.on("cut", (function(e) {
                    m(e) || !e.clipboardData || f.selection.isCollapsed() || (e.preventDefault(),
                    e.clipboardData.clearData(),
                    e.clipboardData.setData("text/html", f.selection.getContent()),
                    e.clipboardData.setData("text/plain", f.selection.getContent({
                        format: "text"
                    })),
                    l.setEditorTimeout(f, (function() {
                        p(!0)
                    }
                    )))
                }
                )))
            }(),
            f.settings.content_editable || R.bind(f.getDoc(), "mousedown mouseup", (function(e) {
                var t;
                if (e.target == f.getDoc().documentElement)
                    if (t = A.getRng(),
                    f.getBody().focus(),
                    "mousedown" == e.type) {
                        if (c.isCaretContainer(t.startContainer))
                            return;
                        A.placeCaretAt(e.clientX, e.clientY)
                    } else
                        A.setRng(t)
            }
            )),
            f.on("click", (function(e) {
                var t = e.target;
                /^(IMG|HR)$/.test(t.nodeName) && "false" !== R.getContentEditableParent(t) && (e.preventDefault(),
                A.getSel().setBaseAndExtent(t, 0, t, 1),
                f.nodeChanged()),
                "A" == t.nodeName && R.hasClass(t, "mce-item-anchor") && (e.preventDefault(),
                A.select(t))
            }
            )),
            B.forced_root_block && f.on("init", (function() {
                h("DefaultParagraphSeparator", B.forced_root_block)
            }
            )),
            f.on("init", (function() {
                f.dom.bind(f.getBody(), "submit", (function(e) {
                    e.preventDefault()
                }
                ))
            }
            )),
            x(),
            D.addNodeFilter("br", (function(e) {
                for (var t = e.length; t--; )
                    "Apple-interchange-newline" == e[t].attr("class") && e[t].remove()
            }
            )),
            a.iOS ? (f.inline || f.on("keydown", (function() {
                document.activeElement == document.body && f.getWin().focus()
            }
            )),
            w(),
            f.on("click", (function(e) {
                var t = e.target;
                do {
                    if ("A" === t.tagName)
                        return void e.preventDefault()
                } while (t = t.parentNode)
            }
            )),
            f.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")) : b()),
            P && a.ie < 11 && (C(),
            document.body.setAttribute("role", "application"),
            p() > 7 || (h("RespectVisibilityInDesign", !0),
            f.contentStyles.push(".mceHideBrInPre pre br {display: none}"),
            R.addClass(f.getBody(), "mceHideBrInPre"),
            D.addNodeFilter("pre", (function(e) {
                for (var t, n, r, o, a = e.length; a--; )
                    for (n = (t = e[a].getAll("br")).length; n--; )
                        (o = (r = t[n]).prev) && 3 === o.type && "\n" != o.value.charAt(o.value - 1) ? o.value += "\n" : r.parent.insert(new i("#text",3), r, !0).value = "\n"
            }
            )),
            L.addNodeFilter("pre", (function(e) {
                for (var t, n, r, i = e.length; i--; )
                    for (n = (t = e[i].getAll("br")).length; n--; )
                        (r = t[n].prev) && 3 == r.type && (r.value = r.value.replace(/\r?\n$/, ""))
            }
            ))),
            R.bind(f.getBody(), "mouseup", (function() {
                var e, t = A.getNode();
                "IMG" == t.nodeName && ((e = R.getStyle(t, "width")) && (R.setAttrib(t, "width", e.replace(/[^0-9%]+/g, "")),
                R.setStyle(t, "width", "")),
                (e = R.getStyle(t, "height")) && (R.setAttrib(t, "height", e.replace(/[^0-9%]+/g, "")),
                R.setStyle(t, "height", "")))
            }
            )),
            f.on("keydown", (function(e) {
                var t;
                m(e) || e.keyCode != k || (t = f.getDoc().selection.createRange()) && t.item && (e.preventDefault(),
                f.undoManager.beforeChange(),
                R.remove(t.item(0)),
                f.undoManager.add())
            }
            )),
            function() {
                var e;
                p() >= 10 && (e = "",
                _("p div h1 h2 h3 h4 h5 h6".split(" "), (function(t, n) {
                    e += (n > 0 ? "," : "") + t + ":empty"
                }
                )),
                f.contentStyles.push(e + "{padding-right: 1px !important}"))
            }(),
            p() < 9 && (D.addNodeFilter("noscript", (function(e) {
                for (var t, n, r = e.length; r--; )
                    (n = (t = e[r]).firstChild) && t.attr("data-mce-innertext", n.value)
            }
            )),
            L.addNodeFilter("noscript", (function(e) {
                for (var t, n, r, a = e.length; a--; )
                    t = e[a],
                    (n = e[a].firstChild) ? n.value = o.decode(n.value) : (r = t.attributes.map["data-mce-innertext"]) && (t.attr("data-mce-innertext", null),
                    (n = new i("#text",3)).value = r,
                    n.raw = !0,
                    t.append(n))
            }
            ))),
            function() {
                function e(e, t) {
                    var n = s.createTextRange();
                    try {
                        n.moveToPoint(e, t)
                    } catch (e) {
                        n = null
                    }
                    return n
                }
                function t(t) {
                    var r;
                    t.button ? (r = e(t.x, t.y)) && (r.compareEndPoints("StartToStart", i) > 0 ? r.setEndPoint("StartToStart", i) : r.setEndPoint("EndToEnd", i),
                    r.select()) : n()
                }
                function n() {
                    var e = a.selection.createRange();
                    i && !e.item && 0 === e.compareEndPoints("StartToEnd", e) && i.select(),
                    R.unbind(a, "mouseup", n),
                    R.unbind(a, "mousemove", t),
                    i = r = 0
                }
                var r, i, o, a = R.doc, s = a.body;
                a.documentElement.unselectable = !0,
                R.bind(a, "mousedown contextmenu", (function(s) {
                    if ("HTML" === s.target.nodeName) {
                        if (r && n(),
                        (o = a.documentElement).scrollHeight > o.clientHeight)
                            return;
                        r = 1,
                        (i = e(s.x, s.y)) && (R.bind(a, "mouseup", n),
                        R.bind(a, "mousemove", t),
                        R.getRoot().focus(),
                        i.select())
                    }
                }
                ))
            }()),
            a.ie >= 11 && (w(),
            x()),
            a.ie && (b(),
            h("AutoUrlDetect", !1),
            f.on("dragstart", (function(e) {
                g(e)
            }
            )),
            f.on("drop", (function(e) {
                if (!m(e)) {
                    var n = v(e);
                    if (n && n.id != f.id) {
                        e.preventDefault();
                        var r = t.getCaretRangeFromPoint(e.x, e.y, f.getDoc());
                        A.setRng(r),
                        y(n.html)
                    }
                }
            }
            ))),
            M && (N(),
            C(),
            window.Range.prototype.getClientRects || f.on("mousedown", (function(e) {
                if (!m(e) && "HTML" === e.target.nodeName) {
                    var t = f.getBody();
                    t.blur(),
                    l.setEditorTimeout(f, (function() {
                        t.focus()
                    }
                    ))
                }
            }
            )),
            function() {
                function e() {
                    var e = R.getAttribs(A.getStart().cloneNode(!1));
                    return function() {
                        var t = A.getStart();
                        t !== f.getBody() && (R.setAttrib(t, "style", null),
                        _(e, (function(e) {
                            t.setAttributeNode(e.cloneNode(!0))
                        }
                        )))
                    }
                }
                function t() {
                    return !A.isCollapsed() && R.getParent(A.getStart(), R.isBlock) != R.getParent(A.getEnd(), R.isBlock)
                }
                f.on("keypress", (function(n) {
                    var r;
                    if (!m(n) && (8 == n.keyCode || 46 == n.keyCode) && t())
                        return r = e(),
                        f.getDoc().execCommand("delete", !1, null),
                        r(),
                        n.preventDefault(),
                        !1
                }
                )),
                R.bind(f.getDoc(), "cut", (function(n) {
                    var r;
                    !m(n) && t() && (r = e(),
                    l.setEditorTimeout(f, (function() {
                        r()
                    }
                    )))
                }
                ))
            }(),
            B.readonly || f.on("BeforeExecCommand MouseDown", (function() {
                h("StyleWithCSS", !1),
                h("enableInlineTableEditing", !1),
                B.object_resizing || h("enableObjectResizing", !1)
            }
            )),
            f.on("SetContent ExecCommand", (function(e) {
                "setcontent" != e.type && "mceInsertLink" !== e.command || _(R.select("a"), (function(e) {
                    var t = e.parentNode
                      , n = R.getRoot();
                    if (t.lastChild === e) {
                        for (; t && !R.isBlock(t); ) {
                            if (t.parentNode.lastChild !== t || t === n)
                                return;
                            t = t.parentNode
                        }
                        R.add(t, "br", {
                            "data-mce-bogus": 1
                        })
                    }
                }
                ))
            }
            )),
            f.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"),
            a.mac && f.on("keydown", (function(t) {
                !e.metaKeyPressed(t) || t.shiftKey || 37 != t.keyCode && 39 != t.keyCode || (t.preventDefault(),
                f.selection.getSel().modify("move", 37 == t.keyCode ? "backward" : "forward", "lineboundary"))
            }
            )),
            x()),
            {
                refreshContentEditable: E,
                isHidden: function() {
                    var e;
                    return M ? !(e = f.selection.getSel()) || !e.rangeCount || 0 === e.rangeCount : 0
                }
            }
        }
    }
    )),
    n(Ie, [ue, b, f], (function(e, t, n) {
        function r(e, t) {
            return "selectionchange" == t ? e.getDoc() : !e.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t) ? e.getDoc().documentElement : e.settings.event_root ? (e.eventRoot || (e.eventRoot = a.select(e.settings.event_root)[0]),
            e.eventRoot) : e.getBody()
        }
        function i(e, t) {
            function n(e) {
                return !e.hidden && !e.readonly
            }
            var i, s = r(e, t);
            if (e.delegates || (e.delegates = {}),
            !e.delegates[t])
                if (e.settings.event_root) {
                    if (o || (o = {},
                    e.editorManager.on("removeEditor", (function() {
                        var t;
                        if (!e.editorManager.activeEditor && o) {
                            for (t in o)
                                e.dom.unbind(r(e, t));
                            o = null
                        }
                    }
                    ))),
                    o[t])
                        return;
                    i = function(r) {
                        for (var i = r.target, o = e.editorManager.editors, s = o.length; s--; ) {
                            var l = o[s].getBody();
                            (l === i || a.isChildOf(i, l)) && n(o[s]) && o[s].fire(t, r)
                        }
                    }
                    ,
                    o[t] = i,
                    a.bind(s, t, i)
                } else
                    i = function(r) {
                        n(e) && e.fire(t, r)
                    }
                    ,
                    a.bind(s, t, i),
                    e.delegates[t] = i
        }
        var o, a = t.DOM, s = {
            bindPendingEventDelegates: function() {
                var e = this;
                n.each(e._pendingNativeEvents, (function(t) {
                    i(e, t)
                }
                ))
            },
            toggleNativeEvent: function(e, t) {
                var n = this;
                "focus" != e && "blur" != e && (t ? n.initialized ? i(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && (n.dom.unbind(r(n, e), e, n.delegates[e]),
                delete n.delegates[e]))
            },
            unbindAllNativeEvents: function() {
                var e, t = this;
                if (t.delegates) {
                    for (e in t.delegates)
                        t.dom.unbind(r(t, e), e, t.delegates[e]);
                    delete t.delegates
                }
                t.inline || (t.getBody().onload = null,
                t.dom.unbind(t.getWin()),
                t.dom.unbind(t.getDoc())),
                t.dom.unbind(t.getBody()),
                t.dom.unbind(t.getContainer())
            }
        };
        return n.extend({}, e, s)
    }
    )),
    n(Fe, [], (function() {
        function e(e, t, n) {
            try {
                e.getDoc().execCommand(t, !1, n)
            } catch (e) {}
        }
        function t(t, n) {
            t._clickBlocker && (t._clickBlocker.unbind(),
            t._clickBlocker = null),
            n ? (t._clickBlocker = function(e) {
                var t, n;
                return t = e.getBody(),
                n = function(t) {
                    e.dom.getParents(t.target, "a").length > 0 && t.preventDefault()
                }
                ,
                e.dom.bind(t, "click", n),
                {
                    unbind: function() {
                        e.dom.unbind(t, "click", n)
                    }
                }
            }(t),
            t.selection.controlSelection.hideResizeRect(),
            t.readonly = !0,
            t.getBody().contentEditable = !1) : (t.readonly = !1,
            t.getBody().contentEditable = !0,
            e(t, "StyleWithCSS", !1),
            e(t, "enableInlineTableEditing", !1),
            e(t, "enableObjectResizing", !1),
            t.focus(),
            t.nodeChanged())
        }
        return {
            setMode: function(e, n) {
                var r = e.readonly ? "readonly" : "design";
                n != r && (e.initialized ? t(e, "readonly" == n) : e.on("init", (function() {
                    t(e, "readonly" == n)
                }
                )),
                e.fire("SwitchMode", {
                    mode: n
                }))
            }
        }
    }
    )),
    n(ze, [f, l], (function(e, t) {
        var n = e.each
          , r = e.explode
          , i = {
            f9: 120,
            f10: 121,
            f11: 122
        }
          , o = e.makeMap("alt,ctrl,shift,meta,access");
        return function(a) {
            function s(e) {
                var a, s, l = {};
                for (s in n(r(e, "+"), (function(e) {
                    e in o ? l[e] = !0 : /^[0-9]{2,}$/.test(e) ? l.keyCode = parseInt(e, 10) : (l.charCode = e.charCodeAt(0),
                    l.keyCode = i[e] || e.toUpperCase().charCodeAt(0))
                }
                )),
                a = [l.keyCode],
                o)
                    l[s] ? a.push(s) : l[s] = !1;
                return l.id = a.join(","),
                l.access && (l.alt = !0,
                t.mac ? l.ctrl = !0 : l.shift = !0),
                l.meta && (t.mac ? l.meta = !0 : (l.ctrl = !0,
                l.meta = !1)),
                l
            }
            function l(t, n, i, o) {
                var l;
                return (l = e.map(r(t, ">"), s))[l.length - 1] = e.extend(l[l.length - 1], {
                    func: i,
                    scope: o || a
                }),
                e.extend(l[0], {
                    desc: a.translate(n),
                    subpatterns: l.slice(1)
                })
            }
            function c(e, t) {
                return !!t && t.ctrl == e.ctrlKey && t.meta == e.metaKey && t.alt == e.altKey && t.shift == e.shiftKey && !!(e.keyCode == t.keyCode || e.charCode && e.charCode == t.charCode) && (e.preventDefault(),
                !0)
            }
            function u(e) {
                return e.func ? e.func.call(e.scope) : null
            }
            var d = {}
              , f = [];
            a.on("keyup keypress keydown", (function(e) {
                !function(e) {
                    return e.altKey || e.ctrlKey || e.metaKey
                }(e) && !function(e) {
                    return "keydown" === e.type && e.keyCode >= 112 && e.keyCode <= 123
                }(e) || e.isDefaultPrevented() || (n(d, (function(t) {
                    if (c(e, t))
                        return f = t.subpatterns.slice(0),
                        "keydown" == e.type && u(t),
                        !0
                }
                )),
                c(e, f[0]) && (1 === f.length && "keydown" == e.type && u(f[0]),
                f.shift()))
            }
            )),
            this.add = function(t, i, o, s) {
                var c;
                return c = o,
                "string" == typeof o ? o = function() {
                    a.execCommand(c, !1, null)
                }
                : e.isArray(c) && (o = function() {
                    a.execCommand(c[0], c[1], c[2])
                }
                ),
                n(r(e.trim(t.toLowerCase())), (function(e) {
                    var t = l(e, i, o, s);
                    d[t.id] = t
                }
                )),
                !0
            }
            ,
            this.remove = function(e) {
                var t = l(e);
                return !!d[t.id] && (delete d[t.id],
                !0)
            }
        }
    }
    )),
    n(Ue, [a, f, H], (function(e, t, n) {
        return function(r, i) {
            function o(e) {
                var t;
                return t = {
                    "image/jpeg": "jpg",
                    "image/jpg": "jpg",
                    "image/gif": "gif",
                    "image/png": "png"
                }[e.blob().type.toLowerCase()] || "dat",
                e.filename() + "." + t
            }
            function a(e) {
                return {
                    id: e.id,
                    blob: e.blob,
                    base64: e.base64,
                    filename: n.constant(o(e))
                }
            }
            function s(e, t, n, r) {
                var o, a;
                (o = new XMLHttpRequest).open("POST", i.url),
                o.withCredentials = i.credentials,
                o.upload.onprogress = function(e) {
                    r(e.loaded / e.total * 100)
                }
                ,
                o.onerror = function() {
                    n("Image upload failed due to a XHR Transport error. Code: " + o.status)
                }
                ,
                o.onload = function() {
                    var e;
                    return 200 != o.status ? void n("HTTP Error: " + o.status) : (e = JSON.parse(o.responseText)) && "string" == typeof e.location ? void t(function(e, t) {
                        return e ? e.replace(/\/$/, "") + "/" + t.replace(/^\//, "") : t
                    }(i.basePath, e.location)) : void n("Invalid JSON: " + o.responseText)
                }
                ,
                (a = new FormData).append("file", e.blob(), e.filename()),
                o.send(a)
            }
            function l() {
                return new e((function(e) {
                    e([])
                }
                ))
            }
            function c(e, t) {
                return {
                    url: t,
                    blobInfo: e,
                    status: !0
                }
            }
            function u(e, t) {
                return {
                    url: "",
                    blobInfo: e,
                    status: !1,
                    error: t
                }
            }
            function d(e, n) {
                t.each(m[e], (function(e) {
                    e(n)
                }
                )),
                delete m[e]
            }
            function f(t, n, i) {
                return r.markPending(t.blobUri()),
                new e((function(e) {
                    var o, s, l = function() {};
                    try {
                        var f = function() {
                            o && (o.close(),
                            s = l)
                        }
                          , h = function() {
                            f(),
                            r.removeFailed(t.blobUri()),
                            d(t.blobUri(), u(t, h)),
                            e(u(t, h))
                        };
                        s = function(e) {
                            e < 0 || e > 100 || (o || (o = i()),
                            o.progressBar.value(e))
                        }
                        ,
                        n(a(t), (function(n) {
                            f(),
                            r.markUploaded(t.blobUri(), n),
                            d(t.blobUri(), c(t, n)),
                            e(c(t, n))
                        }
                        ), h, s)
                    } catch (n) {
                        e(u(t, n.message))
                    }
                }
                ))
            }
            function h(t) {
                var n = t.blobUri();
                return new e((function(e) {
                    m[n] = m[n] || [],
                    m[n].push(e)
                }
                ))
            }
            function p(n, o) {
                return n = t.grep(n, (function(e) {
                    return !r.isUploaded(e.blobUri())
                }
                )),
                e.all(t.map(n, (function(e) {
                    return r.isPending(e.blobUri()) ? h(e) : f(e, i.handler, o)
                }
                )))
            }
            var m = {};
            return i = t.extend({
                credentials: !1,
                handler: s
            }, i),
            {
                upload: function(e, t) {
                    return !i.url && function(e) {
                        return e === s
                    }(i.handler) ? l() : p(e, t)
                }
            }
        }
    }
    )),
    n(We, [a], (function(e) {
        function t(t) {
            return new e((function(e) {
                var n = new XMLHttpRequest;
                n.open("GET", t, !0),
                n.responseType = "blob",
                n.onload = function() {
                    200 == this.status && e(this.response)
                }
                ,
                n.send()
            }
            ))
        }
        function n(e) {
            var t, n;
            return e = decodeURIComponent(e).split(","),
            (n = /data:([^;]+)/.exec(e[0])) && (t = n[1]),
            {
                type: t,
                data: e[1]
            }
        }
        function r(t) {
            return new e((function(e) {
                var r, i, o;
                t = n(t);
                try {
                    r = atob(t.data)
                } catch (t) {
                    return void e(new Blob([]))
                }
                for (i = new Uint8Array(r.length),
                o = 0; o < i.length; o++)
                    i[o] = r.charCodeAt(o);
                e(new Blob([i],{
                    type: t.type
                }))
            }
            ))
        }
        return {
            uriToBlob: function(e) {
                return 0 === e.indexOf("blob:") ? t(e) : 0 === e.indexOf("data:") ? r(e) : null
            },
            blobToDataUri: function(t) {
                return new e((function(e) {
                    var n = new FileReader;
                    n.onloadend = function() {
                        e(n.result)
                    }
                    ,
                    n.readAsDataURL(t)
                }
                ))
            },
            parseDataUri: n
        }
    }
    )),
    n(Ve, [a, d, H, We, l], (function(e, t, n, r, i) {
        var o = 0;
        return function(a, s) {
            var l = {};
            return {
                findAll: function(c, u) {
                    var d, f;
                    return u || (u = n.constant(!0)),
                    d = t.filter(c.getElementsByTagName("img"), (function(e) {
                        var t = e.src;
                        return !!i.fileApi && !e.hasAttribute("data-mce-bogus") && !e.hasAttribute("data-mce-placeholder") && !(!t || t == i.transparentSrc) && (0 === t.indexOf("blob:") ? !a.isUploaded(t) : 0 === t.indexOf("data:") && u(e))
                    }
                    )),
                    f = t.map(d, (function(t) {
                        var n;
                        return l[t.src] ? new e((function(e) {
                            l[t.src].then((function(n) {
                                e({
                                    image: t,
                                    blobInfo: n.blobInfo
                                })
                            }
                            ))
                        }
                        )) : (n = new e((function(e) {
                            !function(e, t) {
                                var n, i;
                                0 === e.src.indexOf("blob:") ? (i = s.getByUri(e.src)) && t({
                                    image: e,
                                    blobInfo: i
                                }) : (n = r.parseDataUri(e.src).data,
                                i = s.findFirst((function(e) {
                                    return e.base64() === n
                                }
                                )),
                                i ? t({
                                    image: e,
                                    blobInfo: i
                                }) : r.uriToBlob(e.src).then((function(r) {
                                    var i = "blobid" + o++
                                      , a = s.create(i, r, n);
                                    s.add(a),
                                    t({
                                        image: e,
                                        blobInfo: a
                                    })
                                }
                                )))
                            }(t, e)
                        }
                        )).then((function(e) {
                            return delete l[e.image.src],
                            e
                        }
                        )).catch((function(e) {
                            return delete l[t.src],
                            e
                        }
                        )),
                        l[t.src] = n,
                        n)
                    }
                    )),
                    e.all(f)
                }
            }
        }
    }
    )),
    n($e, [d, H], (function(e, t) {
        return function() {
            function n(e) {
                return r((function(t) {
                    return t.id() === e
                }
                ))
            }
            function r(t) {
                return e.filter(i, t)[0]
            }
            var i = []
              , o = t.constant;
            return {
                create: function(e, t, n, r) {
                    return {
                        id: o(e),
                        filename: o(r || e),
                        blob: o(t),
                        base64: o(n),
                        blobUri: o(URL.createObjectURL(t))
                    }
                },
                add: function(e) {
                    n(e.id()) || i.push(e)
                },
                get: n,
                getByUri: function(e) {
                    return r((function(t) {
                        return t.blobUri() == e
                    }
                    ))
                },
                findFirst: r,
                removeByUri: function(t) {
                    i = e.filter(i, (function(e) {
                        return e.blobUri() !== t || (URL.revokeObjectURL(e.blobUri()),
                        !1)
                    }
                    ))
                },
                destroy: function() {
                    e.each(i, (function(e) {
                        URL.revokeObjectURL(e.blobUri())
                    }
                    )),
                    i = []
                }
            }
        }
    }
    )),
    n(qe, [], (function() {
        return function() {
            function e(e, t) {
                return {
                    status: e,
                    resultUri: t
                }
            }
            function t(e) {
                return e in i
            }
            var n = 1
              , r = 2
              , i = {};
            return {
                hasBlobUri: t,
                getResultUri: function(e) {
                    var t = i[e];
                    return t ? t.resultUri : null
                },
                isPending: function(e) {
                    return !!t(e) && i[e].status === n
                },
                isUploaded: function(e) {
                    return !!t(e) && i[e].status === r
                },
                markPending: function(t) {
                    i[t] = e(n, null)
                },
                markUploaded: function(t, n) {
                    i[t] = e(r, n)
                },
                removeFailed: function(e) {
                    delete i[e]
                },
                destroy: function() {
                    i = {}
                }
            }
        }
    }
    )),
    n(je, [d, Ue, Ve, $e, qe], (function(e, t, n, r, i) {
        return function(o) {
            function a(e) {
                return function(t) {
                    return o.selection ? e(t) : []
                }
            }
            function s(e, t, n) {
                var r = 0;
                do {
                    -1 !== (r = e.indexOf(t, r)) && (e = e.substring(0, r) + n + e.substr(r + t.length),
                    r += n.length - t.length + 1)
                } while (-1 !== r);
                return e
            }
            function l(e, t, n) {
                return e = s(e, 'src="' + t + '"', 'src="' + n + '"'),
                s(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"')
            }
            function c(t, n) {
                e.each(o.undoManager.data, (function(r) {
                    "fragmented" === r.type ? r.fragments = e.map(r.fragments, (function(e) {
                        return l(e, t, n)
                    }
                    )) : r.content = l(r.content, t, n)
                }
                ))
            }
            function u() {
                return o.notificationManager.open({
                    text: o.translate("Image uploading..."),
                    type: "info",
                    timeout: -1,
                    progressBar: !0
                })
            }
            function d(n) {
                return g || (g = new t(C,{
                    url: b.images_upload_url,
                    basePath: b.images_upload_base_path,
                    credentials: b.images_upload_credentials,
                    handler: b.images_upload_handler
                })),
                p().then(a((function(t) {
                    var r;
                    return r = e.map(t, (function(e) {
                        return e.blobInfo
                    }
                    )),
                    g.upload(r, u).then(a((function(r) {
                        return r = e.map(r, (function(e, n) {
                            var r = t[n].image;
                            return e.status && !1 !== o.settings.images_replace_blob_uris && function(e, t) {
                                y.removeByUri(e.src),
                                c(e.src, t),
                                o.$(e).attr({
                                    src: b.images_reuse_filename ? t + "?" + (new Date).getTime() : t,
                                    "data-mce-src": o.convertURL(t, "src")
                                })
                            }(r, e.url),
                            {
                                element: r,
                                status: e.status
                            }
                        }
                        )),
                        n && n(r),
                        r
                    }
                    )))
                }
                )))
            }
            function f(e) {
                if (!1 !== b.automatic_uploads)
                    return d(e)
            }
            function h(e) {
                return !b.images_dataimg_filter || b.images_dataimg_filter(e)
            }
            function p() {
                return v || (v = new n(C,y)),
                v.findAll(o.getBody(), h).then(a((function(t) {
                    return e.each(t, (function(e) {
                        c(e.image.src, e.blobInfo.blobUri()),
                        e.image.src = e.blobInfo.blobUri(),
                        e.image.removeAttribute("data-mce-src")
                    }
                    )),
                    t
                }
                )))
            }
            function m(t) {
                return t.replace(/src="(blob:[^"]+)"/g, (function(t, n) {
                    var r = C.getResultUri(n);
                    if (r)
                        return 'src="' + r + '"';
                    var i = y.getByUri(n);
                    return i || (i = e.reduce(o.editorManager.editors, (function(e, t) {
                        return e || t.editorUpload.blobCache.getByUri(n)
                    }
                    ), null)),
                    i ? 'src="data:' + i.blob().type + ";base64," + i.base64() + '"' : t
                }
                ))
            }
            var g, v, y = new r, b = o.settings, C = new i;
            return o.on("setContent", (function() {
                !1 !== o.settings.automatic_uploads ? f() : p()
            }
            )),
            o.on("RawSaveContent", (function(e) {
                e.content = m(e.content)
            }
            )),
            o.on("getContent", (function(e) {
                e.source_view || "raw" == e.format || (e.content = m(e.content))
            }
            )),
            o.on("PostRender", (function() {
                o.parser.addNodeFilter("img", (function(t) {
                    e.each(t, (function(e) {
                        var t = e.attr("src");
                        if (!y.getByUri(t)) {
                            var n = C.getResultUri(t);
                            n && e.attr("src", n)
                        }
                    }
                    ))
                }
                ))
            }
            )),
            {
                blobCache: y,
                uploadImages: d,
                uploadImagesAuto: f,
                scanForImages: p,
                destroy: function() {
                    y.destroy(),
                    C.destroy(),
                    v = g = null
                }
            }
        }
    }
    )),
    n(Ye, [N, U, w, _, h, F, s], (function(e, t, n, r, i, o, a) {
        var s = n.isContentEditableFalse;
        return function(t, n) {
            function r(e, n) {
                var r, i, a, s, l, c = o.collapse(e.getBoundingClientRect(), n);
                return "BODY" == t.tagName ? (r = t.ownerDocument.documentElement,
                i = t.scrollLeft || r.scrollLeft,
                a = t.scrollTop || r.scrollTop) : (l = t.getBoundingClientRect(),
                i = t.scrollLeft - l.left,
                a = t.scrollTop - l.top),
                c.left += i,
                c.right += i,
                c.top += a,
                c.bottom += a,
                c.width = 1,
                (s = e.offsetWidth - e.clientWidth) > 0 && (n && (s *= -1),
                c.left += s,
                c.right += s),
                c
            }
            function l() {
                (function() {
                    var n, r, o, a, s;
                    for (n = i("*[contentEditable=false]", t),
                    a = 0; a < n.length; a++)
                        o = (r = n[a]).previousSibling,
                        e.endsWithCaretContainer(o) && (1 == (s = o.data).length ? o.parentNode.removeChild(o) : o.deleteData(s.length - 1, 1)),
                        o = r.nextSibling,
                        e.startsWithCaretContainer(o) && (1 == (s = o.data).length ? o.parentNode.removeChild(o) : o.deleteData(0, 1))
                }
                )(),
                f && (e.remove(f),
                f = null),
                d && (d.remove(),
                d = null),
                clearInterval(u)
            }
            function c() {
                u = a.setInterval((function() {
                    i("div.mce-visual-caret", t).toggleClass("mce-visual-caret-hidden")
                }
                ), 500)
            }
            var u, d, f;
            return {
                show: function(o, a) {
                    var u, h;
                    return l(),
                    n(a) ? (f = e.insertBlock("p", a, o),
                    u = r(a, o),
                    i(f).css("top", u.top),
                    d = i('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(u).appendTo(t),
                    o && d.addClass("mce-visual-caret-before"),
                    c(),
                    (h = a.ownerDocument.createRange()).setStart(f, 0),
                    h.setEnd(f, 0),
                    h) : (f = e.insertInline(a, o),
                    h = a.ownerDocument.createRange(),
                    s(f.nextSibling) ? (h.setStart(f, 0),
                    h.setEnd(f, 0)) : (h.setStart(f, 1),
                    h.setEnd(f, 1)),
                    h)
                },
                hide: l,
                getCss: function() {
                    return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"
                },
                destroy: function() {
                    a.clearInterval(u)
                }
            }
        }
    }
    )),
    n(Xe, [d, w, F], (function(e, t, n) {
        return {
            getClientRects: function r(i) {
                function o(t) {
                    return e.map(t, (function(e) {
                        return (e = n.clone(e)).node = i,
                        e
                    }
                    ))
                }
                if (e.isArray(i))
                    return e.reduce(i, (function(e, t) {
                        return e.concat(r(t))
                    }
                    ), []);
                if (t.isElement(i))
                    return o(i.getClientRects());
                if (t.isText(i)) {
                    var a = i.ownerDocument.createRange();
                    return a.setStart(i, 0),
                    a.setEnd(i, i.data.length),
                    o(a.getClientRects())
                }
            }
        }
    }
    )),
    n(Ke, [H, d, Xe, I, te, ne, U, F], (function(e, t, n, r, i, o, a, s) {
        function l(e, t, n, o) {
            for (; o = i.findNode(o, e, r.isEditableCaretCandidate, t); )
                if (n(o))
                    return
        }
        function c(e, r, i, o, a, s) {
            function c(o) {
                var s, l, c;
                for (c = n.getClientRects(o),
                -1 == e && (c = c.reverse()),
                s = 0; s < c.length; s++)
                    if (l = c[s],
                    !i(l, d)) {
                        if (h.length > 0 && r(l, t.last(h)) && f++,
                        l.line = f,
                        a(l))
                            return !0;
                        h.push(l)
                    }
            }
            var u, d, f = 0, h = [];
            return (d = t.last(s.getClientRects())) ? (c(u = s.getNode()),
            l(e, o, c, u),
            h) : h
        }
        var u = e.curry;
        return {
            upUntil: u(c, -1, s.isAbove, s.isBelow),
            downUntil: u(c, 1, s.isBelow, s.isAbove),
            positionsUntil: function(e, n, r, i) {
                function l(e) {
                    return t.last(e.getClientRects())
                }
                var c, u, d, f, h, p, m = new o(n), g = [], v = 0;
                1 == e ? (c = m.next,
                u = s.isBelow,
                d = s.isAbove,
                f = a.after(i)) : (c = m.prev,
                u = s.isAbove,
                d = s.isBelow,
                f = a.before(i)),
                p = l(f);
                do {
                    if (f.isVisible() && !d(h = l(f), p)) {
                        if (g.length > 0 && u(h, t.last(g)) && v++,
                        (h = s.clone(h)).position = f,
                        h.line = v,
                        r(h))
                            return g;
                        g.push(h)
                    }
                } while (f = c(f));
                return g
            },
            isAboveLine: u((function(e, t) {
                return t.line > e
            }
            )),
            isLine: u((function(e, t) {
                return t.line === e
            }
            ))
        }
    }
    )),
    n(Ge, [H, d, w, Xe, F, te, I], (function(e, t, n, r, i, o, a) {
        function s(e, t) {
            return Math.abs(e.left - t)
        }
        function l(e, t) {
            return Math.abs(e.right - t)
        }
        function c(e, n) {
            function r(e, t) {
                return e >= t.left && e <= t.right
            }
            return t.reduce(e, (function(e, t) {
                var i, o;
                return i = Math.min(s(e, n), l(e, n)),
                o = Math.min(s(t, n), l(t, n)),
                r(n, t) ? t : r(n, e) ? e : o == i && f(t.node) || o < i ? t : e
            }
            ))
        }
        function u(e, t, n, r) {
            for (; r = h(r, e, a.isEditableCaretCandidate, t); )
                if (n(r))
                    return
        }
        function d(e, n) {
            function o(e, i) {
                var o;
                return o = t.filter(r.getClientRects(i), (function(t) {
                    return !e(t, n)
                }
                )),
                a = a.concat(o),
                0 === o.length
            }
            var a = [];
            return a.push(n),
            u(-1, e, p(o, i.isAbove), n.node),
            u(1, e, p(o, i.isBelow), n.node),
            a
        }
        var f = n.isContentEditableFalse
          , h = o.findNode
          , p = e.curry;
        return {
            findClosestClientRect: c,
            findLineNodeRects: d,
            closestCaret: function(e, n, i) {
                var o, a;
                return o = r.getClientRects(function(e) {
                    return t.filter(t.toArray(e.getElementsByTagName("*")), f)
                }(e)),
                o = t.filter(o, (function(e) {
                    return i >= e.top && i <= e.bottom
                }
                )),
                (a = c(o, n)) && ((a = c(d(e, a), n)) && f(a.node)) ? function(e, t) {
                    return {
                        node: e.node,
                        before: s(e, t) < l(e, t)
                    }
                }(a, n) : null
            }
        }
    }
    )),
    n(Je, [], (function() {
        var e = function(e) {
            var t, n, r, i;
            return i = e.getBoundingClientRect(),
            n = (t = e.ownerDocument).documentElement,
            r = t.defaultView,
            {
                top: i.top + r.pageYOffset - n.clientTop,
                left: i.left + r.pageXOffset - n.clientLeft
            }
        }
          , t = function(t) {
            return t.inline ? e(t.getBody()) : {
                left: 0,
                top: 0
            }
        }
          , n = function(t, n) {
            if (n.target.ownerDocument !== t.getDoc()) {
                var r = e(t.getContentAreaContainer())
                  , i = function(e) {
                    var t = e.getBody()
                      , n = e.getDoc().documentElement
                      , r = {
                        left: t.scrollLeft,
                        top: t.scrollTop
                    }
                      , i = {
                        left: t.scrollLeft || n.scrollLeft,
                        top: t.scrollTop || n.scrollTop
                    };
                    return e.inline ? r : i
                }(t);
                return {
                    left: n.pageX - r.left + i.left,
                    top: n.pageY - r.top + i.top
                }
            }
            return {
                left: n.pageX,
                top: n.pageY
            }
        };
        return {
            calc: function(e, r) {
                return function(e, t, n) {
                    return {
                        pageX: n.left - e.left + t.left,
                        pageY: n.top - e.top + t.top
                    }
                }(t(e), function(e) {
                    var t = e.getBody();
                    return e.inline ? {
                        left: t.scrollLeft,
                        top: t.scrollTop
                    } : {
                        left: 0,
                        top: 0
                    }
                }(e), n(e, r))
            }
        }
    }
    )),
    n(Qe, [w, d, H, s, b, Je], (function(e, t, n, r, i, o) {
        var a = e.isContentEditableFalse
          , s = e.isContentEditableTrue
          , l = function(e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        }
          , c = function(e, r) {
            return function(i) {
                if (function(e) {
                    return 0 === e.button
                }(i)) {
                    var o = t.find(r.dom.getParents(i.target), n.or(a, s));
                    if (function(e) {
                        return a(e)
                    }(o)) {
                        var l = r.dom.getPos(o)
                          , c = r.getBody()
                          , u = r.getDoc().documentElement;
                        e.element = o,
                        e.screenX = i.screenX,
                        e.screenY = i.screenY,
                        e.maxX = (r.inline ? c.scrollWidth : u.offsetWidth) - 2,
                        e.maxY = (r.inline ? c.scrollHeight : u.offsetHeight) - 2,
                        e.relX = i.pageX - l.x,
                        e.relY = i.pageY - l.y,
                        e.width = o.offsetWidth,
                        e.height = o.offsetHeight,
                        e.ghost = function(e, t, n, r) {
                            var i = t.cloneNode(!0);
                            e.dom.setStyles(i, {
                                width: n,
                                height: r
                            }),
                            e.dom.setAttrib(i, "data-mce-selected", null);
                            var o = e.dom.create("div", {
                                class: "mce-drag-container",
                                "data-mce-bogus": "all",
                                unselectable: "on",
                                contenteditable: "false"
                            });
                            return e.dom.setStyles(o, {
                                position: "absolute",
                                opacity: .5,
                                overflow: "hidden",
                                border: 0,
                                padding: 0,
                                margin: 0,
                                width: n,
                                height: r
                            }),
                            e.dom.setStyles(i, {
                                margin: 0,
                                boxSizing: "border-box"
                            }),
                            o.appendChild(i),
                            o
                        }(r, o, e.width, e.height)
                    }
                }
            }
        }
          , u = function(e, t) {
            var n = r.throttle((function(e, n) {
                t._selectionOverrides.hideFakeCaret(),
                t.selection.placeCaretAt(e, n)
            }
            ), 0);
            return function(r) {
                var i = Math.max(Math.abs(r.screenX - e.screenX), Math.abs(r.screenY - e.screenY));
                if (function(e) {
                    return e.element
                }(e) && !e.dragging && i > 10) {
                    if (t.fire("dragstart", {
                        target: e.element
                    }).isDefaultPrevented())
                        return;
                    e.dragging = !0,
                    t.focus()
                }
                if (e.dragging) {
                    var a = function(e, t) {
                        return {
                            pageX: t.pageX - e.relX,
                            pageY: t.pageY + 5
                        }
                    }(e, o.calc(t, r));
                    (function(e, t) {
                        e.parentNode !== t && t.appendChild(e)
                    }
                    )(e.ghost, t.getBody()),
                    function(e, t, n, r, i, o) {
                        var a = 0
                          , s = 0;
                        e.style.left = t.pageX + "px",
                        e.style.top = t.pageY + "px",
                        t.pageX + n > i && (a = t.pageX + n - i),
                        t.pageY + r > o && (s = t.pageY + r - o),
                        e.style.width = n - a + "px",
                        e.style.height = r - s + "px"
                    }(e.ghost, a, e.width, e.height, e.maxX, e.maxY),
                    n(r.clientX, r.clientY)
                }
            }
        }
          , d = function(e, t) {
            return function(n) {
                if (e.dragging && function(e, t, n) {
                    return t !== n && !e.dom.isChildOf(t, n) && !a(t)
                }(t, function(e) {
                    var t = e.getSel().getRangeAt(0).startContainer;
                    return 3 === t.nodeType ? t.parentNode : t
                }(t.selection), e.element)) {
                    var r = function(e) {
                        var t = e.cloneNode(!0);
                        return t.removeAttribute("data-mce-selected"),
                        t
                    }(e.element)
                      , i = t.fire("drop", {
                        targetClone: r,
                        clientX: n.clientX,
                        clientY: n.clientY
                    });
                    i.isDefaultPrevented() || (r = i.targetClone,
                    t.undoManager.transact((function() {
                        l(e.element),
                        t.insertContent(t.dom.getOuterHTML(r)),
                        t._selectionOverrides.hideFakeCaret()
                    }
                    )))
                }
                f(e)
            }
        }
          , f = function(e) {
            e.dragging = !1,
            e.element = null,
            l(e.ghost)
        }
          , h = function(e) {
            var t, n, r, o, a, s, l = {};
            t = i.DOM,
            s = document,
            n = c(l, e),
            r = u(l, e),
            o = d(l, e),
            a = function(e, t) {
                return function() {
                    f(e),
                    e.dragging && t.fire("dragend")
                }
            }(l, e),
            e.on("mousedown", n),
            e.on("mousemove", r),
            e.on("mouseup", o),
            t.bind(s, "mousemove", r),
            t.bind(s, "mouseup", a),
            e.on("remove", (function() {
                t.unbind(s, "mousemove", r),
                t.unbind(s, "mouseup", a)
            }
            ))
        };
        return {
            init: function(e) {
                h(e),
                function(e) {
                    e.on("drop", (function(t) {
                        var n = void 0 !== t.clientX ? e.getDoc().elementFromPoint(t.clientX, t.clientY) : null;
                        (a(n) || a(e.dom.getContentEditableParent(n))) && t.preventDefault()
                    }
                    ))
                }(e)
            }
        }
    }
    )),
    n(Ze, [l, ne, U, N, te, Ye, Ke, Ge, w, _, F, P, H, d, s, Qe], (function(e, t, n, r, i, o, a, s, l, c, u, d, f, h, p, m) {
        function g(e, t) {
            for (; t = e(t); )
                if (t.isVisible())
                    return t;
            return t
        }
        var v = f.curry
          , y = l.isContentEditableTrue
          , b = l.isContentEditableFalse
          , C = l.isElement
          , x = i.isAfterContentEditableFalse
          , w = i.isBeforeContentEditableFalse
          , E = c.getSelectedNode;
        return function(c) {
            function N(e) {
                return c.dom.isBlock(e)
            }
            function _(e) {
                e && c.selection.setRng(e)
            }
            function S() {
                return c.selection.getRng()
            }
            function k(e, t) {
                c.selection.scrollIntoView(e, t)
            }
            function T(e, t, n) {
                return c.fire("ShowCaret", {
                    target: t,
                    direction: e,
                    before: n
                }).isDefaultPrevented() ? null : (k(t, -1 === e),
                Z.show(n, t))
            }
            function R(e) {
                return c.fire("BeforeObjectSelected", {
                    target: e
                }).isDefaultPrevented() ? null : function(e) {
                    var t = e.ownerDocument.createRange();
                    return t.selectNode(e),
                    t
                }(e)
            }
            function A(e, t) {
                var n = i.isInSameBlock(e, t);
                return !(n || !l.isBr(e.getNode())) || n
            }
            function B(e, t) {
                return t = i.normalizeRange(e, K, t),
                -1 == e ? n.fromRangeStart(t) : n.fromRangeEnd(t)
            }
            function D(e) {
                return r.isCaretContainerBlock(e.startContainer)
            }
            function L(t, r) {
                var i, o;
                if (r.collapsed && c.settings.forced_root_block) {
                    if (!(i = c.dom.getParent(r.startContainer, "PRE")))
                        return;
                    (1 == t ? J(n.fromRangeStart(r)) : Q(n.fromRangeStart(r))) || (o = function() {
                        var t = c.dom.create(c.settings.forced_root_block);
                        return (!e.ie || e.ie >= 11) && (t.innerHTML = '<br data-mce-bogus="1">'),
                        t
                    }(),
                    1 == t ? c.$(i).after(o) : c.$(i).before(o),
                    c.selection.select(o, !0),
                    c.selection.collapse())
                }
            }
            function M(e, t, n, r) {
                var i;
                return (i = function(e, t, n, r) {
                    var i, o, a, s;
                    return !r.collapsed && (i = E(r),
                    b(i)) ? T(e, i, -1 == e) : (s = D(r),
                    n(o = B(e, r)) ? R(o.getNode(-1 == e)) : (o = t(o)) ? n(o) ? T(e, o.getNode(-1 == e), 1 == e) : n(a = t(o)) && A(o, a) ? T(e, a.getNode(-1 == e), 1 == e) : s ? I(o.toRange()) : null : s ? r : null)
                }(e, t, n, r)) ? i : (i = L(e, r)) || null
            }
            function P(e, t, n) {
                var r;
                return (r = function(e, t, n) {
                    var r, i, o, l, c, u, d, f, p;
                    if (p = E(n),
                    r = B(e, n),
                    i = t(K, a.isAboveLine(1), r),
                    o = h.filter(i, a.isLine(1)),
                    c = h.last(r.getClientRects()),
                    w(r) && (p = r.getNode()),
                    x(r) && (p = r.getNode(!0)),
                    !c)
                        return null;
                    if (u = c.left,
                    (l = s.findClosestClientRect(o, u)) && b(l.node))
                        return d = Math.abs(u - l.left),
                        f = Math.abs(u - l.right),
                        T(e, l.node, d < f);
                    if (p) {
                        var m = a.positionsUntil(e, K, a.isAboveLine(1), p);
                        if (l = s.findClosestClientRect(h.filter(m, a.isLine(1)), u))
                            return I(l.position.toRange());
                        if (l = h.last(h.filter(m, a.isLine(0))))
                            return I(l.position.toRange())
                    }
                }(e, t, n)) ? r : (r = L(e, n)) || null
            }
            function O(e) {
                e.hasAttribute("data-mce-caret") && (r.showCaretContainerBlock(e),
                _(S()),
                k(e[0]))
            }
            function H(e) {
                var t, r;
                return e = i.normalizeRange(1, K, e),
                t = n.fromRangeStart(e),
                b(t.getNode()) ? T(1, t.getNode(), !t.isAtEnd()) : b(t.getNode(!0)) ? T(1, t.getNode(!0), !1) : (r = c.dom.getParent(t.getNode(), f.or(b, y)),
                b(r) ? T(1, r, !1) : null)
            }
            function I(e) {
                return e && e.collapsed ? H(e) || e : e
            }
            function F(e) {
                var t, i, o, a;
                return b(e) ? (b(e.previousSibling) && (o = e.previousSibling),
                (i = Q(n.before(e))) || (t = J(n.after(e))),
                t && C(t.getNode()) && (a = t.getNode()),
                r.remove(e.previousSibling),
                r.remove(e.nextSibling),
                c.dom.remove(e),
                c.dom.isEmpty(c.getBody()) ? (c.setContent(""),
                void c.focus()) : o ? n.after(o).toRange() : a ? n.before(a).toRange() : i ? i.toRange() : t ? t.toRange() : null) : null
            }
            function z(e) {
                var t = c.schema.getTextBlockElements();
                return e.nodeName in t
            }
            function U(e) {
                return c.dom.isEmpty(e)
            }
            function W(e, t, r) {
                var i, o, a, s, l = c.dom;
                if (i = l.getParent(t.getNode(), l.isBlock),
                o = l.getParent(r.getNode(), l.isBlock),
                -1 === e) {
                    if (s = r.getNode(!0),
                    x(r) && N(s))
                        return z(i) ? (U(i) && l.remove(i),
                        n.after(s).toRange()) : F(r.getNode(!0))
                } else if (s = t.getNode(),
                w(t) && N(s))
                    return z(o) ? (U(o) && l.remove(o),
                    n.before(s).toRange()) : F(t.getNode());
                if (i === o || !z(i) || !z(o))
                    return null;
                for (; a = i.firstChild; )
                    o.appendChild(a);
                return c.dom.remove(i),
                r.toRange()
            }
            function V(e, t, n, i) {
                var o, a, s, l;
                return !i.collapsed && (o = E(i),
                b(o)) ? I(F(o)) : n(a = B(e, i)) && r.isCaretContainerBlock(i.startContainer) ? (l = -1 == e ? G.prev(a) : G.next(a)) ? I(l.toRange()) : i : t(a) ? I(F(a.getNode(-1 == e))) : t(s = -1 == e ? G.prev(a) : G.next(a)) ? -1 === e ? W(e, a, s) : W(e, s, a) : void 0
            }
            function $(e) {
                return r.isCaretContainer(e.startContainer) || r.isCaretContainer(e.endContainer)
            }
            function q(t) {
                var n, r, i, o, a, s, l, u, d, f, h = c.$, p = c.dom;
                if (!t)
                    return null;
                if (t.collapsed) {
                    if (!$(t)) {
                        if (u = B(1, t),
                        b(u.getNode()))
                            return T(1, u.getNode(), !u.isAtEnd());
                        if (b(u.getNode(!0)))
                            return T(1, u.getNode(!0), !1)
                    }
                    return null
                }
                return o = t.startContainer,
                a = t.startOffset,
                s = t.endOffset,
                3 == o.nodeType && 0 == a && b(o.parentNode) && (o = o.parentNode,
                a = p.nodeIndex(o),
                o = o.parentNode),
                1 != o.nodeType ? null : (s == a + 1 && (n = o.childNodes[a]),
                b(n) ? (d = f = n.cloneNode(!0),
                (l = c.fire("ObjectSelected", {
                    target: n,
                    targetClone: d
                })).isDefaultPrevented() ? null : (d = l.targetClone,
                0 === (r = h("#" + ee)).length && (r = h('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id", ee)).appendTo(c.getBody()),
                t = c.dom.createRng(),
                d === f && e.ie ? (r.empty().append('<p style="font-size: 0" data-mce-bogus="all"> </p>').append(d),
                t.setStartAfter(r[0].firstChild.firstChild),
                t.setEndAfter(d)) : (r.empty().append(" ").append(d).append(" "),
                t.setStart(r[0].firstChild, 1),
                t.setEnd(r[0].lastChild, 0)),
                r.css({
                    top: p.getPos(n, c.getBody()).y
                }),
                r[0].focus(),
                (i = c.selection.getSel()).removeAllRanges(),
                i.addRange(t),
                c.$("*[data-mce-selected]").removeAttr("data-mce-selected"),
                n.setAttribute("data-mce-selected", 1),
                X = n,
                t)) : null)
            }
            function j() {
                X && (X.removeAttribute("data-mce-selected"),
                c.$("#" + ee).remove(),
                X = null)
            }
            function Y() {
                Z.hide()
            }
            var X, K = c.getBody(), G = new t(K), J = v(g, G.next), Q = v(g, G.prev), Z = new o(c.getBody(),N), ee = "sel-" + c.dom.uniqueId(), te = c.$;
            return e.ceFalse && (function() {
                function i(e, t) {
                    var n = t(S());
                    n && !e.isDefaultPrevented() && (e.preventDefault(),
                    _(n))
                }
                function o(e) {
                    for (var t = c.getBody(); e && e != t; ) {
                        if (y(e) || b(e))
                            return e;
                        e = e.parentNode
                    }
                    return null
                }
                function l() {
                    var e, t = o(c.selection.getNode());
                    y(t) && N(t) && c.dom.isEmpty(t) && (e = c.dom.create("br", {
                        "data-mce-bogus": "1"
                    }),
                    c.$(t).empty().append(e),
                    c.selection.setRng(n.before(e).toRange()))
                }
                function f(e) {
                    var t = te("*[data-mce-caret]")[0];
                    if (t)
                        return "compositionstart" == e.type ? (e.preventDefault(),
                        e.stopPropagation(),
                        void O(t)) : void (r.hasContent(t) && O(t))
                }
                var g = v(M, 1, J, w)
                  , C = v(M, -1, Q, x)
                  , E = v(V, 1, w, x)
                  , k = v(V, -1, x, w)
                  , A = v(P, -1, a.upUntil)
                  , B = v(P, 1, a.downUntil);
                c.on("mouseup", (function() {
                    var e = S();
                    e.collapsed && _(H(e))
                }
                )),
                c.on("click", (function(e) {
                    var t;
                    (t = o(e.target)) && (b(t) && (e.preventDefault(),
                    c.focus()),
                    y(t) && c.dom.isChildOf(t, c.selection.getNode()) && j())
                }
                )),
                c.on("blur NewBlock", (function() {
                    j(),
                    Y()
                }
                ));
                var D = function(e) {
                    var r = new t(e);
                    if (!e.firstChild)
                        return !1;
                    var i = n.before(e.firstChild)
                      , o = r.next(i);
                    return o && !w(o) && !x(o)
                }
                  , L = function(e, t) {
                    var n = c.dom.getParent(e, c.dom.isBlock)
                      , r = c.dom.getParent(t, c.dom.isBlock);
                    return n && !function(e, t) {
                        return c.dom.getParent(e, c.dom.isBlock) === c.dom.getParent(t, c.dom.isBlock)
                    }(n, r) && D(n)
                };
                (function(e) {
                    var t = !1;
                    e.on("touchstart", (function() {
                        t = !1
                    }
                    )),
                    e.on("touchmove", (function() {
                        t = !0
                    }
                    )),
                    e.on("touchend", (function(e) {
                        var n = o(e.target);
                        b(n) && (t || (e.preventDefault(),
                        q(R(n))))
                    }
                    ))
                }
                )(c),
                c.on("mousedown", (function(e) {
                    var t;
                    if (t = o(e.target))
                        b(t) ? (e.preventDefault(),
                        q(R(t))) : function(e, t, n) {
                            return !n.collapsed && h.reduce(n.getClientRects(), (function(n, r) {
                                return n || u.containsXY(r, e, t)
                            }
                            ), !1)
                        }(e.clientX, e.clientY, c.selection.getRng()) || c.selection.placeCaretAt(e.clientX, e.clientY);
                    else {
                        j(),
                        Y();
                        var n = s.closestCaret(K, e.clientX, e.clientY);
                        n && (L(e.target, n.node) || (e.preventDefault(),
                        c.getBody().focus(),
                        _(T(1, n.node, n.before))))
                    }
                }
                )),
                c.on("keydown", (function(e) {
                    if (!d.modifierPressed(e))
                        switch (e.keyCode) {
                        case d.RIGHT:
                            i(e, g);
                            break;
                        case d.DOWN:
                            i(e, B);
                            break;
                        case d.LEFT:
                            i(e, C);
                            break;
                        case d.UP:
                            i(e, A);
                            break;
                        case d.DELETE:
                            i(e, E);
                            break;
                        case d.BACKSPACE:
                            i(e, k);
                            break;
                        default:
                            b(c.selection.getNode()) && function(e) {
                                return !(e.keyCode >= 112 && e.keyCode <= 123)
                            }(e) && e.preventDefault()
                        }
                }
                )),
                c.on("keyup compositionstart", (function(e) {
                    f(e),
                    function(e) {
                        var t;
                        switch (e.keyCode) {
                        case d.DELETE:
                        case d.BACKSPACE:
                            t = l()
                        }
                        t && e.preventDefault()
                    }(e)
                }
                ), !0),
                c.on("cut", (function() {
                    var e = c.selection.getNode();
                    b(e) && p.setEditorTimeout(c, (function() {
                        _(I(F(e)))
                    }
                    ))
                }
                )),
                c.on("getSelectionRange", (function(e) {
                    var t = e.range;
                    if (X) {
                        if (!X.parentNode)
                            return void (X = null);
                        (t = t.cloneRange()).selectNode(X),
                        e.range = t
                    }
                }
                )),
                c.on("setSelectionRange", (function(e) {
                    var t;
                    (t = q(e.range)) && (e.range = t)
                }
                )),
                c.on("AfterSetSelectionRange", (function(e) {
                    var t = e.range;
                    $(t) || Y(),
                    function(e) {
                        return c.dom.hasClass(e, "mce-offscreen-selection")
                    }(t.startContainer.parentNode) || j()
                }
                )),
                c.on("focus", (function() {
                    p.setEditorTimeout(c, (function() {
                        c.selection.setRng(I(c.selection.getRng()))
                    }
                    ), 0)
                }
                )),
                c.on("copy", (function(t) {
                    var n = t.clipboardData;
                    if (!t.isDefaultPrevented() && t.clipboardData && !e.ie) {
                        var r = function() {
                            var e = c.dom.get(ee);
                            return e ? e.getElementsByTagName("*")[0] : e
                        }();
                        r && (t.preventDefault(),
                        n.clearData(),
                        n.setData("text/html", r.outerHTML),
                        n.setData("text/plain", r.outerText))
                    }
                }
                )),
                m.init(c)
            }(),
            function() {
                var e = c.contentStyles
                  , t = ".mce-content-body";
                e.push(Z.getCss()),
                e.push(t + " .mce-offscreen-selection {position: absolute;left: -9999999999px;max-width: 1000000px;}" + t + " *[contentEditable=false] {cursor: default;}" + t + " *[contentEditable=true] {cursor: text;}")
            }()),
            {
                showBlockCaretContainer: O,
                hideFakeCaret: Y,
                destroy: function() {
                    Z.destroy(),
                    X = null
                }
            }
        }
    }
    )),
    n(et, [], (function() {
        var e = 0;
        return {
            uuid: function(t) {
                return t + e++ + function() {
                    var e = function() {
                        return Math.round(4294967295 * Math.random()).toString(36)
                    };
                    return "s" + (new Date).getTime().toString(36) + e() + e() + e()
                }()
            }
        }
    }
    )),
    n(tt, [], (function() {
        return {
            add: function(e, t, n) {
                var r = e.sidebars ? e.sidebars : [];
                r.push({
                    name: t,
                    settings: n
                }),
                e.sidebars = r
            }
        }
    }
    )),
    n(nt, [b, h, x, S, k, L, D, $, X, Q, Z, ee, oe, ae, C, c, Ae, Pe, T, A, He, l, f, s, Ie, Fe, ze, je, Ze, et, tt], (function(e, n, r, i, o, a, s, l, c, u, d, f, h, p, m, g, v, y, b, C, x, w, E, N, _, S, k, T, R, A, B) {
        function D(e, t, i) {
            var o, a, s, l = this;
            o = l.documentBaseUrl = i.documentBaseURL,
            a = i.baseURI,
            s = i.defaultSettings,
            t = O({
                id: e,
                theme: "modern",
                delta_width: 0,
                delta_height: 0,
                popup_css: "",
                plugins: "",
                document_base_url: o,
                add_form_submit_trigger: !0,
                submit_patch: !0,
                add_unload_trigger: !0,
                convert_urls: !0,
                relative_urls: !0,
                remove_script_host: !0,
                object_resizing: !0,
                doctype: "<!DOCTYPE html>",
                visual: !0,
                font_size_style_values: "xx-small,x-small,small,medium,large,x-large,xx-large",
                font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
                forced_root_block: "p",
                hidden_input: !0,
                padd_empty_editor: !0,
                render_ui: !0,
                indentation: "30px",
                inline_styles: !0,
                convert_fonts_to_spans: !0,
                indent: "simple",
                indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                validate: !0,
                entity_encoding: "named",
                url_converter: l.convertURL,
                url_converter_scope: l,
                ie7_compat: !0
            }, s, t),
            s && s.external_plugins && t.external_plugins && (t.external_plugins = O({}, s.external_plugins, t.external_plugins)),
            l.settings = t,
            r.language = t.language || "en",
            r.languageLoad = t.language_load,
            r.baseURL = i.baseURL,
            l.id = t.id = e,
            l.setDirty(!1),
            l.plugins = {},
            l.documentBaseURI = new p(t.document_base_url || o,{
                base_uri: a
            }),
            l.baseURI = a,
            l.contentCSS = [],
            l.contentStyles = [],
            l.shortcuts = new k(l),
            l.loadedCSS = {},
            l.editorCommands = new h(l),
            l.suffix = i.suffix,
            l.editorManager = i,
            l.inline = t.inline,
            l.settings.content_editable = l.inline,
            t.cache_suffix && (w.cacheSuffix = t.cache_suffix.replace(/^[\?\&]+/, "")),
            !1 === t.override_viewport && (w.overrideViewPort = !1),
            i.fire("SetupEditor", l),
            l.execCallback("setup", l),
            l.$ = n.overrideDefaults((function() {
                return {
                    context: l.inline ? l.getBody() : l.getDoc(),
                    element: l.getBody()
                }
            }
            ))
        }
        var L = e.DOM
          , M = r.ThemeManager
          , P = r.PluginManager
          , O = E.extend
          , H = E.each
          , I = E.explode
          , F = E.inArray
          , z = E.trim
          , U = E.resolve
          , W = g.Event
          , V = w.gecko
          , $ = w.ie;
        return D.prototype = {
            render: function() {
                var e = this
                  , t = e.settings
                  , n = e.id
                  , r = e.suffix;
                if (W.domLoaded) {
                    if (e.getElement() && w.contentEditable) {
                        t.inline ? e.inline = !0 : (e.orgVisibility = e.getElement().style.visibility,
                        e.getElement().style.visibility = "hidden");
                        var i = e.getElement().form || L.getParent(n, "form");
                        i && (e.formElement = i,
                        t.hidden_input && !/TEXTAREA|INPUT/i.test(e.getElement().nodeName) && (L.insertAfter(L.create("input", {
                            type: "hidden",
                            name: n
                        }), n),
                        e.hasHiddenInput = !0),
                        e.formEventDelegate = function(t) {
                            e.fire(t.type, t)
                        }
                        ,
                        L.bind(i, "submit reset", e.formEventDelegate),
                        e.on("reset", (function() {
                            e.setContent(e.startContent, {
                                format: "raw"
                            })
                        }
                        )),
                        !t.submit_patch || i.submit.nodeType || i.submit.length || i._mceOldSubmit || (i._mceOldSubmit = i.submit,
                        i.submit = function() {
                            return e.editorManager.triggerSave(),
                            e.setDirty(!1),
                            i._mceOldSubmit(i)
                        }
                        )),
                        e.windowManager = new v(e),
                        e.notificationManager = new y(e),
                        "xml" == t.encoding && e.on("GetContent", (function(e) {
                            e.save && (e.content = L.encode(e.content))
                        }
                        )),
                        t.add_form_submit_trigger && e.on("submit", (function() {
                            e.initialized && e.save()
                        }
                        )),
                        t.add_unload_trigger && (e._beforeUnload = function() {
                            !e.initialized || e.destroyed || e.isHidden() || e.save({
                                format: "raw",
                                no_events: !0,
                                set_dirty: !1
                            })
                        }
                        ,
                        e.editorManager.on("BeforeUnload", e._beforeUnload)),
                        e.editorManager.add(e),
                        function() {
                            var n = m.ScriptLoader;
                            if (t.language && "en" != t.language && !t.language_url && (t.language_url = e.editorManager.baseURL + "/langs/" + t.language + ".js"),
                            t.language_url && n.add(t.language_url),
                            t.theme && "function" != typeof t.theme && "-" != t.theme.charAt(0) && !M.urls[t.theme]) {
                                var i = t.theme_url;
                                i = i ? e.documentBaseURI.toAbsolute(i) : "themes/" + t.theme + "/theme" + r + ".js",
                                M.load(t.theme, i)
                            }
                            E.isArray(t.plugins) && (t.plugins = t.plugins.join(" ")),
                            H(t.external_plugins, (function(e, n) {
                                P.load(n, e),
                                t.plugins += " " + n
                            }
                            )),
                            H(t.plugins.split(/[ ,]/), (function(e) {
                                if ((e = z(e)) && !P.urls[e])
                                    if ("-" == e.charAt(0)) {
                                        e = e.substr(1, e.length);
                                        var t = P.dependencies(e);
                                        H(t, (function(e) {
                                            var t = {
                                                prefix: "plugins/",
                                                resource: e,
                                                suffix: "/plugin" + r + ".js"
                                            };
                                            e = P.createUrl(t, e),
                                            P.load(e.resource, e)
                                        }
                                        ))
                                    } else
                                        P.load(e, {
                                            prefix: "plugins/",
                                            resource: e,
                                            suffix: "/plugin" + r + ".js"
                                        })
                            }
                            )),
                            n.loadQueue((function() {
                                e.removed || e.init()
                            }
                            ))
                        }()
                    }
                } else
                    L.bind(window, "ready", (function t() {
                        L.unbind(window, "ready", t),
                        e.render()
                    }
                    ))
            },
            init: function() {
                var e, t, n, r, i, o, a, s, l, c, u, d = this, f = d.settings, h = d.getElement(), p = [];
                if (d.rtl = f.rtl_ui || d.editorManager.i18n.rtl,
                d.editorManager.i18n.setCode(f.language),
                f.aria_label = f.aria_label || L.getAttrib(h, "aria-label", d.getLang("aria.rich_text_area")),
                d.fire("ScriptsLoaded"),
                f.theme && ("function" != typeof f.theme ? (f.theme = f.theme.replace(/-/, ""),
                o = M.get(f.theme),
                d.theme = new o(d,M.urls[f.theme]),
                d.theme.init && d.theme.init(d, M.urls[f.theme] || d.documentBaseUrl.replace(/\/$/, ""), d.$)) : d.theme = f.theme),
                H(f.plugins.replace(/\-/g, "").split(/[ ,]/), (function e(t) {
                    var n, r, i = P.get(t);
                    if (n = P.urls[t] || d.documentBaseUrl.replace(/\/$/, ""),
                    t = z(t),
                    i && -1 === F(p, t)) {
                        if (H(P.dependencies(t), (function(t) {
                            e(t)
                        }
                        )),
                        d.plugins[t])
                            return;
                        r = new i(d,n,d.$),
                        d.plugins[t] = r,
                        r.init && (r.init(d, n),
                        p.push(t))
                    }
                }
                )),
                f.render_ui && d.theme && (d.orgDisplay = h.style.display,
                "function" != typeof f.theme ? (e = f.width || h.style.width || h.offsetWidth,
                t = f.height || h.style.height || h.offsetHeight,
                n = f.min_height || 100,
                (c = /^[0-9\.]+(|px)$/i).test("" + e) && (e = Math.max(parseInt(e, 10), 100)),
                c.test("" + t) && (t = Math.max(parseInt(t, 10), n)),
                i = d.theme.renderUI({
                    targetNode: h,
                    width: e,
                    height: t,
                    deltaWidth: f.delta_width,
                    deltaHeight: f.delta_height
                }),
                f.content_editable || (t = (i.iframeHeight || t) + ("number" == typeof t ? i.deltaHeight || 0 : "")) < n && (t = n)) : ((i = f.theme(d, h)).editorContainer.nodeType && (i.editorContainer.id = i.editorContainer.id || d.id + "_parent"),
                i.iframeContainer.nodeType && (i.iframeContainer.id = i.iframeContainer.id || d.id + "_iframecontainer"),
                t = i.iframeHeight || h.offsetHeight),
                d.editorContainer = i.editorContainer),
                f.content_css && H(I(f.content_css), (function(e) {
                    d.contentCSS.push(d.documentBaseURI.toAbsolute(e))
                }
                )),
                f.content_style && d.contentStyles.push(f.content_style),
                f.content_editable)
                    return h = r = i = null,
                    d.initContentBody();
                if (d.iframeHTML = f.doctype + "<html><head>",
                f.document_base_url != d.documentBaseUrl && (d.iframeHTML += '<base href="' + d.documentBaseURI.getURI() + '" />'),
                !w.caretAfter && f.ie7_compat && (d.iframeHTML += '<meta http-equiv="X-UA-Compatible" content="IE=7" />'),
                d.iframeHTML += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />',
                !/#$/.test(document.location.href))
                    for (u = 0; u < d.contentCSS.length; u++) {
                        var m = d.contentCSS[u];
                        d.iframeHTML += '<link type="text/css" rel="stylesheet" href="' + E._addCacheSuffix(m) + '" />',
                        d.loadedCSS[m] = !0
                    }
                -1 != (s = f.body_id || "tinymce").indexOf("=") && (s = (s = d.getParam("body_id", "", "hash"))[d.id] || s),
                -1 != (l = f.body_class || "").indexOf("=") && (l = (l = d.getParam("body_class", "", "hash"))[d.id] || ""),
                f.content_security_policy && (d.iframeHTML += '<meta http-equiv="Content-Security-Policy" content="' + f.content_security_policy + '" />'),
                d.iframeHTML += '</head><body id="' + s + '" class="mce-content-body ' + l + '" data-id="' + d.id + '"><br></body></html>';
                var g = 'javascript:(function(){document.open();document.domain="' + document.domain + '";var ed = window.parent.tinymce.get("' + d.id + '");document.write(ed.iframeHTML);document.close();ed.initContentBody(true);})()';
                document.domain != location.hostname && w.ie && w.ie < 12 && (a = g);
                var v = L.create("iframe", {
                    id: d.id + "_ifr",
                    frameBorder: "0",
                    allowTransparency: "true",
                    title: d.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),
                    style: {
                        width: "100%",
                        height: t,
                        display: "block"
                    }
                });
                if (v.onload = function() {
                    v.onload = null,
                    d.fire("load")
                }
                ,
                L.setAttrib(v, "src", a || 'javascript:""'),
                d.contentAreaContainer = i.iframeContainer,
                d.iframeElement = v,
                r = L.add(i.iframeContainer, v),
                $)
                    try {
                        d.getDoc()
                    } catch (e) {
                        r.src = a = g
                    }
                i.editorContainer && (L.get(i.editorContainer).style.display = d.orgDisplay,
                d.hidden = L.isHidden(i.editorContainer)),
                d.getElement().style.display = "none",
                L.setAttrib(d.id, "aria-hidden", !0),
                a || d.initContentBody(),
                h = r = i = null
            },
            initContentBody: function(t) {
                var n, r, s = this, h = s.settings, p = s.getElement(), m = s.getDoc();
                h.inline || (s.getElement().style.visibility = s.orgVisibility),
                t || h.content_editable || (m.open(),
                m.write(s.iframeHTML),
                m.close()),
                h.content_editable && (s.on("remove", (function() {
                    var e = this.getBody();
                    L.removeClass(e, "mce-content-body"),
                    L.removeClass(e, "mce-edit-focus"),
                    L.setAttrib(e, "contentEditable", null)
                }
                )),
                L.addClass(p, "mce-content-body"),
                s.contentDocument = m = h.content_document || document,
                s.contentWindow = h.content_window || window,
                s.bodyElement = p,
                h.content_document = h.content_window = null,
                h.root_name = p.nodeName.toLowerCase()),
                (n = s.getBody()).disabled = !0,
                s.readonly = h.readonly,
                s.readonly || (s.inline && "static" == L.getStyle(n, "position", !0) && (n.style.position = "relative"),
                n.contentEditable = s.getParam("content_editable_state", !0)),
                n.disabled = !1,
                s.editorUpload = new T(s),
                s.schema = new b(h),
                s.dom = new e(m,{
                    keep_values: !0,
                    url_converter: s.convertURL,
                    url_converter_scope: s,
                    hex_colors: h.force_hex_style_colors,
                    class_filter: h.class_filter,
                    update_styles: !0,
                    root_element: s.inline ? s.getBody() : null,
                    collect: h.content_editable,
                    schema: s.schema,
                    onSetAttrib: function(e) {
                        s.fire("SetAttrib", e)
                    }
                }),
                s.parser = new C(h,s.schema),
                s.parser.addAttributeFilter("src,href,style,tabindex", (function(e, t) {
                    for (var n, r, i, o = e.length, a = s.dom; o--; )
                        if (r = (n = e[o]).attr(t),
                        i = "data-mce-" + t,
                        !n.attributes.map[i]) {
                            if (0 === r.indexOf("data:") || 0 === r.indexOf("blob:"))
                                continue;
                            "style" === t ? ((r = a.serializeStyle(a.parseStyle(r), n.name)).length || (r = null),
                            n.attr(i, r),
                            n.attr(t, r)) : "tabindex" === t ? (n.attr(i, r),
                            n.attr(t, null)) : n.attr(i, s.convertURL(r, t, n.name))
                        }
                }
                )),
                s.parser.addNodeFilter("script", (function(e) {
                    for (var t, n, r = e.length; r--; )
                        0 !== (n = (t = e[r]).attr("type") || "no/type").indexOf("mce-") && t.attr("type", "mce-" + n)
                }
                )),
                s.parser.addNodeFilter("#cdata", (function(e) {
                    for (var t, n = e.length; n--; )
                        (t = e[n]).type = 8,
                        t.name = "#comment",
                        t.value = "[CDATA[" + t.value + "]]"
                }
                )),
                s.parser.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", (function(e) {
                    for (var t, n = e.length, r = s.schema.getNonEmptyElements(); n--; )
                        (t = e[n]).isEmpty(r) && (t.append(new o("br",1)).shortEnded = !0)
                }
                )),
                s.serializer = new a(h,s),
                s.selection = new l(s.dom,s.getWin(),s.serializer,s),
                s.formatter = new c(s),
                s.undoManager = new u(s),
                s.forceBlocks = new f(s),
                s.enterKey = new d(s),
                s._nodeChangeDispatcher = new i(s),
                s._selectionOverrides = new R(s),
                s.fire("PreInit"),
                h.browser_spellcheck || h.gecko_spellcheck || (m.body.spellcheck = !1,
                L.setAttrib(n, "spellcheck", "false")),
                s.quirks = new x(s),
                s.fire("PostRender"),
                h.directionality && (n.dir = h.directionality),
                h.nowrap && (n.style.whiteSpace = "nowrap"),
                h.protect && s.on("BeforeSetContent", (function(e) {
                    H(h.protect, (function(t) {
                        e.content = e.content.replace(t, (function(e) {
                            return "\x3c!--mce:protected " + escape(e) + "--\x3e"
                        }
                        ))
                    }
                    ))
                }
                )),
                s.on("SetContent", (function() {
                    s.addVisual(s.getBody())
                }
                )),
                h.padd_empty_editor && s.on("PostProcess", (function(e) {
                    e.content = e.content.replace(/^(<p[^>]*>(&nbsp;|&#160;|\s|\u00a0|)<\/p>[\r\n]*|<br \/>[\r\n]*)$/, "")
                }
                )),
                s.load({
                    initial: !0,
                    format: "html"
                }),
                s.startContent = s.getContent({
                    format: "raw"
                }),
                s.initialized = !0,
                s.bindPendingEventDelegates(),
                s.fire("init"),
                s.focus(!0),
                s.nodeChanged({
                    initial: !0
                }),
                s.execCallback("init_instance_callback", s),
                s.on("compositionstart compositionend", (function(e) {
                    s.composing = "compositionstart" === e.type
                }
                )),
                s.contentStyles.length > 0 && (r = "",
                H(s.contentStyles, (function(e) {
                    r += e + "\r\n"
                }
                )),
                s.dom.addStyle(r)),
                H(s.contentCSS, (function(e) {
                    s.loadedCSS[e] || (s.dom.loadCSS(e),
                    s.loadedCSS[e] = !0)
                }
                )),
                h.auto_focus && N.setEditorTimeout(s, (function() {
                    var e;
                    (e = !0 === h.auto_focus ? s : s.editorManager.get(h.auto_focus)).destroyed || e.focus()
                }
                ), 100),
                p = m = n = null
            },
            focus: function(e) {
                var t, n, r, i = this, o = i.selection, a = i.settings.content_editable, s = i.getDoc(), l = i.getBody();
                if (!e) {
                    if ((t = o.getRng()).item && (n = t.item(0)),
                    i.quirks.refreshContentEditable(),
                    r = function(e) {
                        return i.dom.getParent(e, (function(e) {
                            return "true" === i.dom.getContentEditable(e)
                        }
                        ))
                    }(o.getNode()),
                    i.$.contains(l, r))
                        return r.focus(),
                        o.normalize(),
                        void i.editorManager.setActive(i);
                    if (a || (w.opera || i.getBody().focus(),
                    i.getWin().focus()),
                    V || a) {
                        if (l.setActive)
                            try {
                                l.setActive()
                            } catch (e) {
                                l.focus()
                            }
                        else
                            l.focus();
                        a && o.normalize()
                    }
                    n && n.ownerDocument == s && ((t = s.body.createControlRange()).addElement(n),
                    t.select())
                }
                i.editorManager.setActive(i)
            },
            execCallback: function(e) {
                var t, n = this, r = n.settings[e];
                if (r)
                    return n.callbackLookup && (t = n.callbackLookup[e]) && (r = t.func,
                    t = t.scope),
                    "string" == typeof r && (t = (t = r.replace(/\.\w+$/, "")) ? U(t) : 0,
                    r = U(r),
                    n.callbackLookup = n.callbackLookup || {},
                    n.callbackLookup[e] = {
                        func: r,
                        scope: t
                    }),
                    r.apply(t || n, Array.prototype.slice.call(arguments, 1))
            },
            translate: function(e) {
                var t = this.settings.language || "en"
                  , n = this.editorManager.i18n;
                return e ? (e = n.data[t + "." + e] || e.replace(/\{\#([^\}]+)\}/g, (function(e, r) {
                    return n.data[t + "." + r] || "{#" + r + "}"
                }
                )),
                this.editorManager.translate(e)) : ""
            },
            getLang: function(e, n) {
                return this.editorManager.i18n.data[(this.settings.language || "en") + "." + e] || (n !== t ? n : "{#" + e + "}")
            },
            getParam: function(e, t, n) {
                var r, i = e in this.settings ? this.settings[e] : t;
                return "hash" === n ? (r = {},
                "string" == typeof i ? H(i.indexOf("=") > 0 ? i.split(/[;,](?![^=;,]*(?:[;,]|$))/) : i.split(","), (function(e) {
                    (e = e.split("=")).length > 1 ? r[z(e[0])] = z(e[1]) : r[z(e[0])] = z(e)
                }
                )) : r = i,
                r) : i
            },
            nodeChanged: function(e) {
                this._nodeChangeDispatcher.nodeChanged(e)
            },
            addButton: function(e, t) {
                var n = this;
                t.cmd && (t.onclick = function() {
                    n.execCommand(t.cmd)
                }
                ),
                t.text || t.icon || (t.icon = e),
                n.buttons = n.buttons || {},
                t.tooltip = t.tooltip || t.title,
                n.buttons[e] = t
            },
            addSidebar: function(e, t) {
                return B.add(this, e, t)
            },
            addMenuItem: function(e, t) {
                var n = this;
                t.cmd && (t.onclick = function() {
                    n.execCommand(t.cmd)
                }
                ),
                n.menuItems = n.menuItems || {},
                n.menuItems[e] = t
            },
            addContextToolbar: function(e, t) {
                var n, r = this;
                r.contextToolbars = r.contextToolbars || [],
                "string" == typeof e && (n = e,
                e = function(e) {
                    return r.dom.is(e, n)
                }
                ),
                r.contextToolbars.push({
                    id: A.uuid("mcet"),
                    predicate: e,
                    items: t
                })
            },
            addCommand: function(e, t, n) {
                this.editorCommands.addCommand(e, t, n)
            },
            addQueryStateHandler: function(e, t, n) {
                this.editorCommands.addQueryStateHandler(e, t, n)
            },
            addQueryValueHandler: function(e, t, n) {
                this.editorCommands.addQueryValueHandler(e, t, n)
            },
            addShortcut: function(e, t, n, r) {
                this.shortcuts.add(e, t, n, r)
            },
            execCommand: function(e, t, n, r) {
                return this.editorCommands.execCommand(e, t, n, r)
            },
            queryCommandState: function(e) {
                return this.editorCommands.queryCommandState(e)
            },
            queryCommandValue: function(e) {
                return this.editorCommands.queryCommandValue(e)
            },
            queryCommandSupported: function(e) {
                return this.editorCommands.queryCommandSupported(e)
            },
            show: function() {
                var e = this;
                e.hidden && (e.hidden = !1,
                e.inline ? e.getBody().contentEditable = !0 : (L.show(e.getContainer()),
                L.hide(e.id)),
                e.load(),
                e.fire("show"))
            },
            hide: function() {
                var e = this
                  , t = e.getDoc();
                e.hidden || ($ && t && !e.inline && t.execCommand("SelectAll"),
                e.save(),
                e.inline ? (e.getBody().contentEditable = !1,
                e == e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (L.hide(e.getContainer()),
                L.setStyle(e.id, "display", e.orgDisplay)),
                e.hidden = !0,
                e.fire("hide"))
            },
            isHidden: function() {
                return !!this.hidden
            },
            setProgressState: function(e, t) {
                this.fire("ProgressState", {
                    state: e,
                    time: t
                })
            },
            load: function(e) {
                var n, r = this, i = r.getElement();
                if (i)
                    return (e = e || {}).load = !0,
                    n = r.setContent(i.value !== t ? i.value : i.innerHTML, e),
                    e.element = i,
                    e.no_events || r.fire("LoadContent", e),
                    e.element = i = null,
                    n
            },
            save: function(e) {
                var t, n, r = this, i = r.getElement();
                if (i && r.initialized)
                    return (e = e || {}).save = !0,
                    e.element = i,
                    e.content = r.getContent(e),
                    e.no_events || r.fire("SaveContent", e),
                    "raw" == e.format && r.fire("RawSaveContent", e),
                    t = e.content,
                    /TEXTAREA|INPUT/i.test(i.nodeName) ? i.value = t : (r.inline || (i.innerHTML = t),
                    (n = L.getParent(r.id, "form")) && H(n.elements, (function(e) {
                        if (e.name == r.id)
                            return e.value = t,
                            !1
                    }
                    ))),
                    e.element = i = null,
                    !1 !== e.set_dirty && r.setDirty(!1),
                    t
            },
            setContent: function(e, t) {
                var n, r, i = this, o = i.getBody();
                return (t = t || {}).format = t.format || "html",
                t.set = !0,
                t.content = e,
                t.no_events || i.fire("BeforeSetContent", t),
                0 === (e = t.content).length || /^\s+$/.test(e) ? (r = $ && $ < 11 ? "" : '<br data-mce-bogus="1">',
                "TABLE" == o.nodeName ? e = "<tr><td>" + r + "</td></tr>" : /^(UL|OL)$/.test(o.nodeName) && (e = "<li>" + r + "</li>"),
                (n = i.settings.forced_root_block) && i.schema.isValidChild(o.nodeName.toLowerCase(), n.toLowerCase()) ? (e = r,
                e = i.dom.createHTML(n, i.settings.forced_root_block_attrs, e)) : $ || e || (e = '<br data-mce-bogus="1">'),
                i.dom.setHTML(o, e),
                i.fire("SetContent", t)) : ("raw" !== t.format && (e = new s({
                    validate: i.validate
                },i.schema).serialize(i.parser.parse(e, {
                    isRootContent: !0
                }))),
                t.content = z(e),
                i.dom.setHTML(o, t.content),
                t.no_events || i.fire("SetContent", t)),
                t.content
            },
            getContent: function(e) {
                var t, n = this, r = n.getBody();
                return (e = e || {}).format = e.format || "html",
                e.get = !0,
                e.getInner = !0,
                e.no_events || n.fire("BeforeGetContent", e),
                t = "raw" == e.format ? n.serializer.getTrimmedContent() : "text" == e.format ? r.innerText || r.textContent : n.serializer.serialize(r, e),
                "text" != e.format ? e.content = z(t) : e.content = t,
                e.no_events || n.fire("GetContent", e),
                e.content
            },
            insertContent: function(e, t) {
                t && (e = O({
                    content: e
                }, t)),
                this.execCommand("mceInsertContent", !1, e)
            },
            isDirty: function() {
                return !this.isNotDirty
            },
            setDirty: function(e) {
                var t = !this.isNotDirty;
                this.isNotDirty = !e,
                e && e != t && this.fire("dirty")
            },
            setMode: function(e) {
                S.setMode(this, e)
            },
            getContainer: function() {
                var e = this;
                return e.container || (e.container = L.get(e.editorContainer || e.id + "_parent")),
                e.container
            },
            getContentAreaContainer: function() {
                return this.contentAreaContainer
            },
            getElement: function() {
                return this.targetElm || (this.targetElm = L.get(this.id)),
                this.targetElm
            },
            getWin: function() {
                var e, t = this;
                return t.contentWindow || (e = t.iframeElement) && (t.contentWindow = e.contentWindow),
                t.contentWindow
            },
            getDoc: function() {
                var e, t = this;
                return t.contentDocument || (e = t.getWin()) && (t.contentDocument = e.document),
                t.contentDocument
            },
            getBody: function() {
                var e = this.getDoc();
                return this.bodyElement || (e ? e.body : null)
            },
            convertURL: function(e, t, n) {
                var r = this
                  , i = r.settings;
                return i.urlconverter_callback ? r.execCallback("urlconverter_callback", e, n, !0, t) : !i.convert_urls || n && "LINK" == n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : i.relative_urls ? r.documentBaseURI.toRelative(e) : e = r.documentBaseURI.toAbsolute(e, i.remove_script_host)
            },
            addVisual: function(e) {
                var n, r = this, i = r.settings, o = r.dom;
                e = e || r.getBody(),
                r.hasVisual === t && (r.hasVisual = i.visual),
                H(o.select("table,a", e), (function(e) {
                    var t;
                    switch (e.nodeName) {
                    case "TABLE":
                        return n = i.visual_table_class || "mce-item-table",
                        void ((t = o.getAttrib(e, "border")) && "0" != t || !r.hasVisual ? o.removeClass(e, n) : o.addClass(e, n));
                    case "A":
                        return void (o.getAttrib(e, "href", !1) || (t = o.getAttrib(e, "name") || e.id,
                        n = i.visual_anchor_class || "mce-item-anchor",
                        t && r.hasVisual ? o.addClass(e, n) : o.removeClass(e, n)))
                    }
                }
                )),
                r.fire("VisualAid", {
                    element: e,
                    hasVisual: r.hasVisual
                })
            },
            remove: function() {
                var e = this;
                e.removed || (e.save(),
                e.removed = 1,
                e.unbindAllNativeEvents(),
                e.hasHiddenInput && L.remove(e.getElement().nextSibling),
                e.inline || ($ && $ < 10 && e.getDoc().execCommand("SelectAll", !1, null),
                L.setStyle(e.id, "display", e.orgDisplay),
                e.getBody().onload = null),
                e.fire("remove"),
                e.editorManager.remove(e),
                L.remove(e.getContainer()),
                e._selectionOverrides.destroy(),
                e.editorUpload.destroy(),
                e.destroy())
            },
            destroy: function(e) {
                var t, n = this;
                if (!n.destroyed) {
                    if (!e && !n.removed)
                        return void n.remove();
                    e || (n.editorManager.off("beforeunload", n._beforeUnload),
                    n.theme && n.theme.destroy && n.theme.destroy(),
                    n.selection.destroy(),
                    n.dom.destroy()),
                    (t = n.formElement) && (t._mceOldSubmit && (t.submit = t._mceOldSubmit,
                    t._mceOldSubmit = null),
                    L.unbind(t, "submit reset", n.formEventDelegate)),
                    n.contentAreaContainer = n.formElement = n.container = n.editorContainer = null,
                    n.bodyElement = n.contentDocument = n.contentWindow = null,
                    n.iframeElement = n.targetElm = null,
                    n.selection && (n.selection = n.selection.win = n.selection.dom = n.selection.dom.doc = null),
                    n.destroyed = 1
                }
            },
            uploadImages: function(e) {
                return this.editorUpload.uploadImages(e)
            },
            _scanForImages: function() {
                return this.editorUpload.scanForImages()
            }
        },
        O(D.prototype, _),
        D
    }
    )),
    n(rt, [f], (function(e) {
        var t = {}
          , n = "en";
        return {
            setCode: function(e) {
                e && (n = e,
                this.rtl = !!this.data[e] && "rtl" === this.data[e]._dir)
            },
            getCode: function() {
                return n
            },
            rtl: !1,
            add: function(e, n) {
                var r = t[e];
                for (var i in r || (t[e] = r = {}),
                n)
                    r[i] = n[i];
                this.setCode(e)
            },
            translate: function(r) {
                function i(t) {
                    return e.is(t, "function") ? Object.prototype.toString.call(t) : o(t) ? "" : "" + t
                }
                function o(t) {
                    return "" === t || null === t || e.is(t, "undefined")
                }
                function a(t) {
                    return t = i(t),
                    e.hasOwn(s, t) ? i(s[t]) : t
                }
                var s = t[n] || {};
                if (o(r))
                    return "";
                if (e.is(r, "object") && e.hasOwn(r, "raw"))
                    return i(r.raw);
                if (e.is(r, "array")) {
                    var l = r.slice(1);
                    r = a(r[0]).replace(/\{([0-9]+)\}/g, (function(t, n) {
                        return e.hasOwn(l, n) ? i(l[n]) : t
                    }
                    ))
                }
                return a(r).replace(/{context:\w+}$/, "")
            },
            data: t
        }
    }
    )),
    n(it, [b, s, l], (function(e, t, n) {
        function r(e) {
            function l() {
                try {
                    return document.activeElement
                } catch (e) {
                    return document.body
                }
            }
            function c(e) {
                return !!s.getParent(e, r.isEditorUIElement)
            }
            e.on("AddEditor", (function(r) {
                var u = r.editor;
                u.on("init", (function() {
                    (u.inline || n.ie) && ("onbeforedeactivate"in document && n.ie < 9 ? u.dom.bind(u.getBody(), "beforedeactivate", (function(e) {
                        if (e.target == u.getBody())
                            try {
                                u.lastRng = u.selection.getRng()
                            } catch (e) {}
                    }
                    )) : u.on("nodechange mouseup keyup", (function(e) {
                        var t = l();
                        "nodechange" == e.type && e.selectionChange || (t && t.id == u.id + "_ifr" && (t = u.getBody()),
                        u.dom.isChildOf(t, u.getBody()) && (u.lastRng = u.selection.getRng()))
                    }
                    )),
                    n.webkit && !i && (i = function() {
                        var t = e.activeEditor;
                        if (t && t.selection) {
                            var n = t.selection.getRng();
                            n && !n.collapsed && (u.lastRng = n)
                        }
                    }
                    ,
                    s.bind(document, "selectionchange", i)))
                }
                )),
                u.on("setcontent", (function() {
                    u.lastRng = null
                }
                )),
                u.on("mousedown", (function() {
                    u.selection.lastFocusBookmark = null
                }
                )),
                u.on("focusin", (function() {
                    var t, n = e.focusedEditor;
                    u.selection.lastFocusBookmark && (t = function(e, t) {
                        var n;
                        return t.startContainer ? ((n = e.getDoc().createRange()).setStart(t.startContainer, t.startOffset),
                        n.setEnd(t.endContainer, t.endOffset)) : n = t,
                        n
                    }(u, u.selection.lastFocusBookmark),
                    u.selection.lastFocusBookmark = null,
                    u.selection.setRng(t)),
                    n != u && (n && n.fire("blur", {
                        focusedEditor: u
                    }),
                    e.setActive(u),
                    e.focusedEditor = u,
                    u.fire("focus", {
                        blurredEditor: n
                    }),
                    u.focus(!0)),
                    u.lastRng = null
                }
                )),
                u.on("focusout", (function() {
                    t.setEditorTimeout(u, (function() {
                        var t = e.focusedEditor;
                        c(l()) || t != u || (u.fire("blur", {
                            focusedEditor: null
                        }),
                        e.focusedEditor = null,
                        u.selection && (u.selection.lastFocusBookmark = null))
                    }
                    ))
                }
                )),
                o || (o = function(t) {
                    var n, r = e.activeEditor;
                    n = t.target,
                    r && n.ownerDocument == document && (r.selection && n != r.getBody() && (r.selection.lastFocusBookmark = function(e, t) {
                        if (t && t.startContainer) {
                            if (!e.isChildOf(t.startContainer, e.getRoot()) || !e.isChildOf(t.endContainer, e.getRoot()))
                                return;
                            return {
                                startContainer: t.startContainer,
                                startOffset: t.startOffset,
                                endContainer: t.endContainer,
                                endOffset: t.endOffset
                            }
                        }
                        return t
                    }(r.dom, r.lastRng)),
                    n == document.body || c(n) || e.focusedEditor != r || (r.fire("blur", {
                        focusedEditor: null
                    }),
                    e.focusedEditor = null))
                }
                ,
                s.bind(document, "focusin", o)),
                u.inline && !a && (a = function(t) {
                    var n = e.activeEditor
                      , r = n.dom;
                    if (n.inline && r && !r.isChildOf(t.target, n.getBody())) {
                        var i = n.selection.getRng();
                        i.collapsed || (n.lastRng = i)
                    }
                }
                ,
                s.bind(document, "mouseup", a))
            }
            )),
            e.on("RemoveEditor", (function(t) {
                e.focusedEditor == t.editor && (e.focusedEditor = null),
                e.activeEditor || (s.unbind(document, "selectionchange", i),
                s.unbind(document, "focusin", o),
                s.unbind(document, "mouseup", a),
                i = o = a = null)
            }
            ))
        }
        var i, o, a, s = e.DOM;
        return r.isEditorUIElement = function(e) {
            return -1 !== e.className.toString().indexOf("mce-")
        }
        ,
        r
    }
    )),
    n(ot, [nt, h, b, ae, l, f, a, ue, rt, it, x], (function(e, t, n, r, i, o, a, s, l, c, u) {
        function d(e) {
            b(g.editors, (function(t) {
                "scroll" === e.type ? t.fire("ScrollWindow", e) : t.fire("ResizeWindow", e)
            }
            ))
        }
        function f(e, n) {
            n !== w && (n ? t(window).on("resize scroll", d) : t(window).off("resize scroll", d),
            w = n)
        }
        function h(e) {
            var t, n = g.editors;
            delete n[e.id];
            for (var r = 0; r < n.length; r++)
                if (n[r] == e) {
                    n.splice(r, 1),
                    t = !0;
                    break
                }
            return g.activeEditor == e && (g.activeEditor = n[0]),
            g.focusedEditor == e && (g.focusedEditor = null),
            t
        }
        function p(e) {
            return e && e.initialized && !(e.getContainer() || e.getBody()).parentNode && (h(e),
            e.unbindAllNativeEvents(),
            e.destroy(!0),
            e.removed = !0,
            e = null),
            e
        }
        var m, g, v = n.DOM, y = o.explode, b = o.each, C = o.extend, x = 0, w = !1;
        return g = {
            $: t,
            majorVersion: "4",
            minorVersion: "5.1",
            releaseDate: "2016-12-07",
            editors: [],
            i18n: l,
            activeEditor: null,
            setup: function() {
                var e, t, n, i, o = this, a = "";
                if (t = r.getDocumentBaseUrl(document.location),
                /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""),
                /[\/\\]$/.test(t) || (t += "/")),
                n = window.tinymce || window.tinyMCEPreInit)
                    e = n.base || n.baseURL,
                    a = n.suffix;
                else {
                    for (var s = document.getElementsByTagName("script"), l = 0; l < s.length; l++) {
                        var u = (i = s[l].src).substring(i.lastIndexOf("/"));
                        if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(i)) {
                            -1 != u.indexOf(".min") && (a = ".min"),
                            e = i.substring(0, i.lastIndexOf("/"));
                            break
                        }
                    }
                    !e && document.currentScript && (-1 != (i = document.currentScript.src).indexOf(".min") && (a = ".min"),
                    e = i.substring(0, i.lastIndexOf("/")))
                }
                o.baseURL = new r(t).toAbsolute(e),
                o.documentBaseURL = t,
                o.baseURI = new r(o.baseURL),
                o.suffix = a,
                o.focusManager = new c(o)
            },
            overrideDefaults: function(e) {
                var t, n;
                (t = e.base_url) && (this.baseURL = new r(this.documentBaseURL).toAbsolute(t.replace(/\/+$/, "")),
                this.baseURI = new r(this.baseURL)),
                n = e.suffix,
                e.suffix && (this.suffix = n),
                this.defaultSettings = e;
                var i = e.plugin_base_urls;
                for (var o in i)
                    u.PluginManager.urls[o] = i[o]
            },
            init: function(n) {
                function r(e) {
                    var t = e.id;
                    return t || (t = (t = e.name) && !v.get(t) ? e.name : v.uniqueId(),
                    e.setAttribute("id", t)),
                    t
                }
                function i(e, t) {
                    return t.constructor === RegExp ? t.test(e.className) : v.hasClass(e, t)
                }
                function s(e) {
                    var t, n = [];
                    if (e.types)
                        return b(e.types, (function(e) {
                            n = n.concat(v.select(e.selector))
                        }
                        )),
                        n;
                    if (e.selector)
                        return v.select(e.selector);
                    if (e.target)
                        return [e.target];
                    switch (e.mode) {
                    case "exact":
                        (t = e.elements || "").length > 0 && b(y(t), (function(e) {
                            var t;
                            (t = v.get(e)) ? n.push(t) : b(document.forms, (function(t) {
                                b(t.elements, (function(t) {
                                    t.name === e && (e = "mce_editor_" + x++,
                                    v.setAttrib(t, "id", e),
                                    n.push(t))
                                }
                                ))
                            }
                            ))
                        }
                        ));
                        break;
                    case "textareas":
                    case "specific_textareas":
                        b(v.select("textarea"), (function(t) {
                            e.editor_deselector && i(t, e.editor_deselector) || e.editor_selector && !i(t, e.editor_selector) || n.push(t)
                        }
                        ))
                    }
                    return n
                }
                var l, c, u = this;
                c = o.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option tbody tfoot thead tr script noscript style textarea video audio iframe object menu", " ");
                var d = function(e) {
                    l = e
                };
                return u.settings = n,
                v.bind(window, "ready", (function i() {
                    function a(t, n, r) {
                        var i = new e(t,n,u);
                        h.push(i),
                        i.on("init", (function() {
                            ++f === l.length && d(h)
                        }
                        )),
                        i.targetElm = i.targetElm || r,
                        i.render()
                    }
                    var l, f = 0, h = [];
                    return v.unbind(window, "ready", i),
                    function(e) {
                        var t = n[e];
                        if (t)
                            t.apply(u, Array.prototype.slice.call(arguments, 2))
                    }("onpageload"),
                    l = t.unique(s(n)),
                    n.types ? void b(n.types, (function(e) {
                        o.each(l, (function(t) {
                            return !v.is(t, e.selector) || (a(r(t), C({}, n, e), t),
                            !1)
                        }
                        ))
                    }
                    )) : (o.each(l, (function(e) {
                        p(u.get(e.id))
                    }
                    )),
                    l = o.grep(l, (function(e) {
                        return !u.get(e.id)
                    }
                    )),
                    void b(l, (function(e) {
                        !function(e, t) {
                            return e.inline && t.tagName.toLowerCase()in c
                        }(n, e) ? a(r(e), n, e) : function(e, t) {
                            window.console && !window.test && window.console.log(e, t)
                        }("Could not initialize inline editor on invalid inline target element", e)
                    }
                    )))
                }
                )),
                new a((function(e) {
                    l ? e(l) : d = function(t) {
                        e(t)
                    }
                }
                ))
            },
            get: function(e) {
                return arguments.length ? e in this.editors ? this.editors[e] : null : this.editors
            },
            add: function(e) {
                var t = this
                  , n = t.editors;
                return n[e.id] = e,
                n.push(e),
                f(0, !0),
                t.activeEditor = e,
                t.fire("AddEditor", {
                    editor: e
                }),
                m || (m = function() {
                    t.fire("BeforeUnload")
                }
                ,
                v.bind(window, "beforeunload", m)),
                e
            },
            createEditor: function(t, n) {
                return this.add(new e(t,n,this))
            },
            remove: function(e) {
                var t, n, r = this, i = r.editors;
                if (e)
                    return "string" == typeof e ? (e = e.selector || e,
                    void b(v.select(e), (function(e) {
                        (n = i[e.id]) && r.remove(n)
                    }
                    ))) : i[(n = e).id] ? (h(n) && r.fire("RemoveEditor", {
                        editor: n
                    }),
                    i.length || v.unbind(window, "beforeunload", m),
                    n.remove(),
                    f(0, i.length > 0),
                    n) : null;
                for (t = i.length - 1; t >= 0; t--)
                    r.remove(i[t])
            },
            execCommand: function(t, n, r) {
                var i = this
                  , o = i.get(r);
                switch (t) {
                case "mceAddEditor":
                    return i.get(r) || new e(r,i.settings,i).render(),
                    !0;
                case "mceRemoveEditor":
                    return o && o.remove(),
                    !0;
                case "mceToggleEditor":
                    return o ? (o.isHidden() ? o.show() : o.hide(),
                    !0) : (i.execCommand("mceAddEditor", 0, r),
                    !0)
                }
                return !!i.activeEditor && i.activeEditor.execCommand(t, n, r)
            },
            triggerSave: function() {
                b(this.editors, (function(e) {
                    e.save()
                }
                ))
            },
            addI18n: function(e, t) {
                l.add(e, t)
            },
            translate: function(e) {
                return l.translate(e)
            },
            setActive: function(e) {
                var t = this.activeEditor;
                this.activeEditor != e && (t && t.fire("deactivate", {
                    relatedTarget: e
                }),
                e.fire("activate", {
                    relatedTarget: t
                })),
                this.activeEditor = e
            }
        },
        C(g, s),
        g.setup(),
        window.tinymce = window.tinyMCE = g,
        g
    }
    )),
    n("tinymce/LegacyInput", [ot, f], (function(e, t) {
        var n = t.each
          , r = t.explode;
        e.on("AddEditor", (function(e) {
            var t = e.editor;
            t.on("preInit", (function() {
                function e(e, t) {
                    n(t, (function(t, n) {
                        t && a.setStyle(e, n, t)
                    }
                    )),
                    a.rename(e, "span")
                }
                var i, o, a, s = t.settings;
                s.inline_styles && (o = r(s.font_size_legacy_values),
                i = {
                    font: function(t, n) {
                        e(n, {
                            backgroundColor: n.style.backgroundColor,
                            color: n.color,
                            fontFamily: n.face,
                            fontSize: o[parseInt(n.size, 10) - 1]
                        })
                    },
                    u: function(n, r) {
                        "html4" === t.settings.schema && e(r, {
                            textDecoration: "underline"
                        })
                    },
                    strike: function(t, n) {
                        e(n, {
                            textDecoration: "line-through"
                        })
                    }
                },
                t.on("PreProcess SetContent", (function(e) {
                    a = t.dom,
                    s.convert_fonts_to_spans && n(a.select("font,u,strike", e.node), (function(e) {
                        i[e.nodeName.toLowerCase()](a, e)
                    }
                    ))
                }
                )))
            }
            ))
        }
        ))
    }
    )),
    n(at, [ue, f], (function(e, t) {
        var n = {
            send: function(e) {
                function r() {
                    !e.async || 4 == i.readyState || o++ > 1e4 ? (e.success && o < 1e4 && 200 == i.status ? e.success.call(e.success_scope, "" + i.responseText, i, e) : e.error && e.error.call(e.error_scope, o > 1e4 ? "TIMED_OUT" : "GENERAL", i, e),
                    i = null) : setTimeout(r, 10)
                }
                var i, o = 0;
                if (e.scope = e.scope || this,
                e.success_scope = e.success_scope || e.scope,
                e.error_scope = e.error_scope || e.scope,
                e.async = !1 !== e.async,
                e.data = e.data || "",
                n.fire("beforeInitialize", {
                    settings: e
                }),
                i = new XMLHttpRequest) {
                    if (i.overrideMimeType && i.overrideMimeType(e.content_type),
                    i.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async),
                    e.crossDomain && (i.withCredentials = !0),
                    e.content_type && i.setRequestHeader("Content-Type", e.content_type),
                    e.requestheaders && t.each(e.requestheaders, (function(e) {
                        i.setRequestHeader(e.key, e.value)
                    }
                    )),
                    i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    (i = n.fire("beforeSend", {
                        xhr: i,
                        settings: e
                    }).xhr).send(e.data),
                    !e.async)
                        return r();
                    setTimeout(r, 10)
                }
            }
        };
        return t.extend(n, e),
        n
    }
    )),
    n(st, [], (function() {
        return {
            serialize: function e(t, n) {
                var r, i, o, a;
                if (n = n || '"',
                null === t)
                    return "null";
                if ("string" == (o = typeof t))
                    return i = "\bb\tt\nn\ff\rr\"\"''\\\\",
                    n + t.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g, (function(e, t) {
                        return '"' === n && "'" === e ? e : (r = i.indexOf(t)) + 1 ? "\\" + i.charAt(r + 1) : (e = t.charCodeAt().toString(16),
                        "\\u" + "0000".substring(e.length) + e)
                    }
                    )) + n;
                if ("object" == o) {
                    if (t.hasOwnProperty && "[object Array]" === Object.prototype.toString.call(t)) {
                        for (r = 0,
                        i = "["; r < t.length; r++)
                            i += (r > 0 ? "," : "") + e(t[r], n);
                        return i + "]"
                    }
                    for (a in i = "{",
                    t)
                        t.hasOwnProperty(a) && (i += "function" != typeof t[a] ? (i.length > 1 ? "," + n : n) + a + n + ":" + e(t[a], n) : "");
                    return i + "}"
                }
                return "" + t
            },
            parse: function(e) {
                try {
                    return window[String.fromCharCode(101) + "val"]("(" + e + ")")
                } catch (e) {}
            }
        }
    }
    )),
    n(lt, [st, at, f], (function(e, t, n) {
        function r(e) {
            this.settings = i({}, e),
            this.count = 0
        }
        var i = n.extend;
        return r.sendRPC = function(e) {
            return (new r).send(e)
        }
        ,
        r.prototype = {
            send: function(n) {
                var r = n.error
                  , o = n.success;
                (n = i(this.settings, n)).success = function(t, i) {
                    void 0 === (t = e.parse(t)) && (t = {
                        error: "JSON Parse error."
                    }),
                    t.error ? r.call(n.error_scope || n.scope, t.error, i) : o.call(n.success_scope || n.scope, t.result)
                }
                ,
                n.error = function(e, t) {
                    r && r.call(n.error_scope || n.scope, e, t)
                }
                ,
                n.data = e.serialize({
                    id: n.id || "c" + this.count++,
                    method: n.method,
                    params: n.params
                }),
                n.content_type = "application/json",
                t.send(n)
            }
        },
        r
    }
    )),
    n(ct, [b], (function(e) {
        return {
            callbacks: {},
            count: 0,
            send: function(n) {
                var r = this
                  , i = e.DOM
                  , o = n.count !== t ? n.count : r.count
                  , a = "tinymce_jsonp_" + o;
                r.callbacks[o] = function(e) {
                    i.remove(a),
                    delete r.callbacks[o],
                    n.callback(e)
                }
                ,
                i.add(i.doc.body, "script", {
                    id: a,
                    src: n.url,
                    type: "text/javascript"
                }),
                r.count++
            }
        }
    }
    )),
    n(ut, [], (function() {
        function e() {
            for (var e in a = [],
            o)
                a.push(e);
            r.length = a.length
        }
        function n() {
            var t, n = "";
            if (l) {
                for (var r in o)
                    t = o[r],
                    n += (n ? "," : "") + r.length.toString(32) + "," + r + "," + t.length.toString(32) + "," + t;
                i.setAttribute(s, n);
                try {
                    i.save(s)
                } catch (e) {}
                e()
            }
        }
        var r, i, o, a, s, l;
        try {
            if (window.localStorage)
                return localStorage
        } catch (e) {}
        return s = "tinymce",
        i = document.documentElement,
        (l = !!i.addBehavior) && i.addBehavior("#default#userData"),
        r = {
            key: function(e) {
                return a[e]
            },
            getItem: function(e) {
                return e in o ? o[e] : null
            },
            setItem: function(e, t) {
                o[e] = "" + t,
                n()
            },
            removeItem: function(e) {
                delete o[e],
                n()
            },
            clear: function() {
                o = {},
                n()
            }
        },
        function() {
            function n(e) {
                var n, r;
                return -1 === (r = e !== t ? u + e : a.indexOf(",", u)) || r > a.length ? null : (n = a.substring(u, r),
                u = r + 1,
                n)
            }
            var r, a, c, u = 0;
            if (o = {},
            l) {
                i.load(s),
                a = i.getAttribute(s) || "";
                do {
                    var d = n();
                    if (null === d)
                        break;
                    if (null !== (r = n(parseInt(d, 32) || 0))) {
                        if (null === (d = n()))
                            break;
                        c = n(parseInt(d, 32) || 0),
                        r && (o[r] = c)
                    }
                } while (null !== r);
                e()
            }
        }(),
        r
    }
    )),
    n(dt, [b, c, C, x, f, l], (function(e, t, n, r, i, o) {
        var a = window.tinymce;
        return a.DOM = e.DOM,
        a.ScriptLoader = n.ScriptLoader,
        a.PluginManager = r.PluginManager,
        a.ThemeManager = r.ThemeManager,
        a.dom = a.dom || {},
        a.dom.Event = t.Event,
        i.each("trim isArray is toArray makeMap each map grep inArray extend create walk createNS resolve explode _addCacheSuffix".split(" "), (function(e) {
            a[e] = i[e]
        }
        )),
        i.each("isOpera isWebKit isIE isGecko isMac".split(" "), (function(e) {
            a[e] = o[e.substr(2).toLowerCase()]
        }
        )),
        {}
    }
    )),
    n(ft, [se, f], (function(e, t) {
        return e.extend({
            Defaults: {
                firstControlClass: "first",
                lastControlClass: "last"
            },
            init: function(e) {
                this.settings = t.extend({}, this.Defaults, e)
            },
            preRender: function(e) {
                e.bodyClasses.add(this.settings.containerClass)
            },
            applyClasses: function(e) {
                var t, n, r, i, o = this.settings;
                t = o.firstControlClass,
                n = o.lastControlClass,
                e.each((function(e) {
                    e.classes.remove(t).remove(n).add(o.controlClass),
                    e.visible() && (r || (r = e),
                    i = e)
                }
                )),
                r && r.classes.add(t),
                i && i.classes.add(n)
            },
            renderHtml: function(e) {
                var t = "";
                return this.applyClasses(e.items()),
                e.items().each((function(e) {
                    t += e.renderHtml()
                }
                )),
                t
            },
            recalc: function() {},
            postRender: function() {},
            isNative: function() {
                return !1
            }
        })
    }
    )),
    n(ht, [ft], (function(e) {
        return e.extend({
            Defaults: {
                containerClass: "abs-layout",
                controlClass: "abs-layout-item"
            },
            recalc: function(e) {
                e.items().filter(":visible").each((function(e) {
                    var t = e.settings;
                    e.layoutRect({
                        x: t.x,
                        y: t.y,
                        w: t.w,
                        h: t.h
                    }),
                    e.recalc && e.recalc()
                }
                ))
            },
            renderHtml: function(e) {
                return '<div id="' + e._id + '-absend" class="' + e.classPrefix + 'abs-end"></div>' + this._super(e)
            }
        })
    }
    )),
    n(pt, [De], (function(e) {
        return e.extend({
            Defaults: {
                classes: "widget btn",
                role: "button"
            },
            init: function(e) {
                var t, n = this;
                n._super(e),
                e = n.settings,
                t = n.settings.size,
                n.on("click mousedown", (function(e) {
                    e.preventDefault()
                }
                )),
                n.on("touchstart", (function(e) {
                    n.fire("click", e),
                    e.preventDefault()
                }
                )),
                e.subtype && n.classes.add(e.subtype),
                t && n.classes.add("btn-" + t),
                e.icon && n.icon(e.icon)
            },
            icon: function(e) {
                return arguments.length ? (this.state.set("icon", e),
                this) : this.state.get("icon")
            },
            repaint: function() {
                var e, t = this.getEl().firstChild;
                t && ((e = t.style).width = e.height = "100%"),
                this._super()
            },
            renderHtml: function() {
                var e, t = this, n = t._id, r = t.classPrefix, i = t.state.get("icon"), o = t.state.get("text"), a = "";
                return (e = t.settings.image) ? (i = "none",
                "string" != typeof e && (e = window.getSelection ? e[0] : e[1]),
                e = " style=\"background-image: url('" + e + "')\"") : e = "",
                o && (t.classes.add("btn-has-text"),
                a = '<span class="' + r + 'txt">' + t.encode(o) + "</span>"),
                i = i ? r + "ico " + r + "i-" + i : "",
                '<div id="' + n + '" class="' + t.classes + '" tabindex="-1" aria-labelledby="' + n + '"><button role="presentation" type="button" tabindex="-1">' + (i ? '<i class="' + i + '"' + e + "></i>" : "") + a + "</button></div>"
            },
            bindStates: function() {
                function e(e) {
                    var i = n("span." + r, t.getEl());
                    e ? (i[0] || (n("button:first", t.getEl()).append('<span class="' + r + '"></span>'),
                    i = n("span." + r, t.getEl())),
                    i.html(t.encode(e))) : i.remove(),
                    t.classes.toggle("btn-has-text", !!e)
                }
                var t = this
                  , n = t.$
                  , r = t.classPrefix + "txt";
                return t.state.on("change:text", (function(t) {
                    e(t.value)
                }
                )),
                t.state.on("change:icon", (function(n) {
                    var r = n.value
                      , i = t.classPrefix;
                    t.settings.icon = r,
                    r = r ? i + "ico " + i + "i-" + t.settings.icon : "";
                    var o = t.getEl().firstChild
                      , a = o.getElementsByTagName("i")[0];
                    r ? (a && a == o.firstChild || (a = document.createElement("i"),
                    o.insertBefore(a, o.firstChild)),
                    a.className = r) : a && o.removeChild(a),
                    e(t.state.get("text"))
                }
                )),
                t._super()
            }
        })
    }
    )),
    n(mt, [xe], (function(e) {
        return e.extend({
            Defaults: {
                defaultType: "button",
                role: "group"
            },
            renderHtml: function() {
                var e = this
                  , t = e._layout;
                return e.classes.add("btn-group"),
                e.preRender(),
                t.preRender(e),
                '<div id="' + e._id + '" class="' + e.classes + '"><div id="' + e._id + '-body">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>"
            }
        })
    }
    )),
    n(gt, [De], (function(e) {
        return e.extend({
            Defaults: {
                classes: "checkbox",
                role: "checkbox",
                checked: !1
            },
            init: function(e) {
                var t = this;
                t._super(e),
                t.on("click mousedown", (function(e) {
                    e.preventDefault()
                }
                )),
                t.on("click", (function(e) {
                    e.preventDefault(),
                    t.disabled() || t.checked(!t.checked())
                }
                )),
                t.checked(t.settings.checked)
            },
            checked: function(e) {
                return arguments.length ? (this.state.set("checked", e),
                this) : this.state.get("checked")
            },
            value: function(e) {
                return arguments.length ? this.checked(e) : this.checked()
            },
            renderHtml: function() {
                var e = this
                  , t = e._id
                  , n = e.classPrefix;
                return '<div id="' + t + '" class="' + e.classes + '" unselectable="on" aria-labelledby="' + t + '-al" tabindex="-1"><i class="' + n + "ico " + n + 'i-checkbox"></i><span id="' + t + '-al" class="' + n + 'label">' + e.encode(e.state.get("text")) + "</span></div>"
            },
            bindStates: function() {
                function e(e) {
                    t.classes.toggle("checked", e),
                    t.aria("checked", e)
                }
                var t = this;
                return t.state.on("change:text", (function(e) {
                    t.getEl("al").firstChild.data = t.translate(e.value)
                }
                )),
                t.state.on("change:checked change:value", (function(n) {
                    t.fire("change"),
                    e(n.value)
                }
                )),
                t.state.on("change:icon", (function(e) {
                    var n = e.value
                      , r = t.classPrefix;
                    if (void 0 === n)
                        return t.settings.icon;
                    t.settings.icon = n,
                    n = n ? r + "ico " + r + "i-" + t.settings.icon : "";
                    var i = t.getEl().firstChild
                      , o = i.getElementsByTagName("i")[0];
                    n ? (o && o == i.firstChild || (o = document.createElement("i"),
                    i.insertBefore(o, i.firstChild)),
                    o.className = n) : o && i.removeChild(o)
                }
                )),
                t.state.get("checked") && e(!0),
                t._super()
            }
        })
    }
    )),
    n(vt, [De, be, pe, h, P, f], (function(e, t, n, r, i, o) {
        return e.extend({
            init: function(e) {
                var t = this;
                t._super(e),
                e = t.settings,
                t.classes.add("combobox"),
                t.subinput = !0,
                t.ariaTarget = "inp",
                e.menu = e.menu || e.values,
                e.menu && (e.icon = "caret"),
                t.on("click", (function(n) {
                    var i = n.target
                      , o = t.getEl();
                    if (r.contains(o, i) || i == o)
                        for (; i && i != o; )
                            i.id && -1 != i.id.indexOf("-open") && (t.fire("action"),
                            e.menu && (t.showMenu(),
                            n.aria && t.menu.items()[0].focus())),
                            i = i.parentNode
                }
                )),
                t.on("keydown", (function(e) {
                    var n;
                    13 == e.keyCode && "INPUT" === e.target.nodeName && (e.preventDefault(),
                    t.parents().reverse().each((function(e) {
                        if (e.toJSON)
                            return n = e,
                            !1
                    }
                    )),
                    t.fire("submit", {
                        data: n.toJSON()
                    }))
                }
                )),
                t.on("keyup", (function(e) {
                    if ("INPUT" == e.target.nodeName) {
                        var n = t.state.get("value")
                          , r = e.target.value;
                        r !== n && (t.state.set("value", r),
                        t.fire("autocomplete", e))
                    }
                }
                )),
                t.on("mouseover", (function(e) {
                    var n = t.tooltip().moveTo(-65535);
                    if (t.statusLevel() && -1 !== e.target.className.indexOf(t.classPrefix + "status")) {
                        var r = t.statusMessage() || "Ok"
                          , i = n.text(r).show().testMoveRel(e.target, ["bc-tc", "bc-tl", "bc-tr"]);
                        n.classes.toggle("tooltip-n", "bc-tc" == i),
                        n.classes.toggle("tooltip-nw", "bc-tl" == i),
                        n.classes.toggle("tooltip-ne", "bc-tr" == i),
                        n.moveRel(e.target, i)
                    }
                }
                ))
            },
            statusLevel: function(e) {
                return arguments.length > 0 && this.state.set("statusLevel", e),
                this.state.get("statusLevel")
            },
            statusMessage: function(e) {
                return arguments.length > 0 && this.state.set("statusMessage", e),
                this.state.get("statusMessage")
            },
            showMenu: function() {
                var e, n = this, r = n.settings;
                n.menu || ((e = r.menu || []).length ? e = {
                    type: "menu",
                    items: e
                } : e.type = e.type || "menu",
                n.menu = t.create(e).parent(n).renderTo(n.getContainerElm()),
                n.fire("createmenu"),
                n.menu.reflow(),
                n.menu.on("cancel", (function(e) {
                    e.control === n.menu && n.focus()
                }
                )),
                n.menu.on("show hide", (function(e) {
                    e.control.items().each((function(e) {
                        e.active(e.value() == n.value())
                    }
                    ))
                }
                )).fire("show"),
                n.menu.on("select", (function(e) {
                    n.value(e.control.value())
                }
                )),
                n.on("focusin", (function(e) {
                    "INPUT" == e.target.tagName.toUpperCase() && n.menu.hide()
                }
                )),
                n.aria("expanded", !0)),
                n.menu.show(),
                n.menu.layoutRect({
                    w: n.layoutRect().w
                }),
                n.menu.moveRel(n.getEl(), n.isRtl() ? ["br-tr", "tr-br"] : ["bl-tl", "tl-bl"])
            },
            focus: function() {
                this.getEl("inp").focus()
            },
            repaint: function() {
                var e, t, i = this, o = i.getEl(), a = i.getEl("open"), s = i.layoutRect(), l = 0, c = o.firstChild;
                i.statusLevel() && "none" !== i.statusLevel() && (l = parseInt(n.getRuntimeStyle(c, "padding-right"), 10) - parseInt(n.getRuntimeStyle(c, "padding-left"), 10)),
                e = a ? s.w - n.getSize(a).width - 10 : s.w - 10;
                var u = document;
                return u.all && (!u.documentMode || u.documentMode <= 8) && (t = i.layoutRect().h - 2 + "px"),
                r(c).css({
                    width: e - l,
                    lineHeight: t
                }),
                i._super(),
                i
            },
            postRender: function() {
                var e = this;
                return r(this.getEl("inp")).on("change", (function(t) {
                    e.state.set("value", t.target.value),
                    e.fire("change", t)
                }
                )),
                e._super()
            },
            renderHtml: function() {
                var e, t, n, r = this, i = r._id, o = r.settings, a = r.classPrefix, s = r.state.get("value") || "", l = "", c = "";
                return "spellcheck"in o && (c += ' spellcheck="' + o.spellcheck + '"'),
                o.maxLength && (c += ' maxlength="' + o.maxLength + '"'),
                o.size && (c += ' size="' + o.size + '"'),
                o.subtype && (c += ' type="' + o.subtype + '"'),
                n = '<i id="' + i + '-status" class="mce-status mce-ico" style="display: none"></i>',
                r.disabled() && (c += ' disabled="disabled"'),
                (e = o.icon) && "caret" != e && (e = a + "ico " + a + "i-" + o.icon),
                t = r.state.get("text"),
                (e || t) && (l = '<div id="' + i + '-open" class="' + a + "btn " + a + 'open" tabIndex="-1" role="button"><button id="' + i + '-action" type="button" hidefocus="1" tabindex="-1">' + ("caret" != e ? '<i class="' + e + '"></i>' : '<i class="' + a + 'caret"></i>') + (t ? (e ? " " : "") + t : "") + "</button></div>",
                r.classes.add("has-open")),
                '<div id="' + i + '" class="' + r.classes + '"><input id="' + i + '-inp" class="' + a + 'textbox" value="' + r.encode(s, !1) + '" hidefocus="1"' + c + ' placeholder="' + r.encode(o.placeholder) + '" />' + n + l + "</div>"
            },
            value: function(e) {
                return arguments.length ? (this.state.set("value", e),
                this) : (this.state.get("rendered") && this.state.set("value", this.getEl("inp").value),
                this.state.get("value"))
            },
            showAutoComplete: function(e, n) {
                var r = this;
                if (0 !== e.length) {
                    var i = function(e, t) {
                        return function() {
                            r.fire("selectitem", {
                                title: t,
                                value: e
                            })
                        }
                    };
                    r.menu ? r.menu.items().remove() : r.menu = t.create({
                        type: "menu",
                        classes: "combobox-menu",
                        layout: "flow"
                    }).parent(r).renderTo(),
                    o.each(e, (function(e) {
                        r.menu.add({
                            text: e.title,
                            url: e.previewUrl,
                            match: n,
                            classes: "menu-item-ellipsis",
                            onclick: i(e.value, e.title)
                        })
                    }
                    )),
                    r.menu.renderNew(),
                    r.hideMenu(),
                    r.menu.on("cancel", (function(e) {
                        e.control.parent() === r.menu && (e.stopPropagation(),
                        r.focus(),
                        r.hideMenu())
                    }
                    )),
                    r.menu.on("select", (function() {
                        r.focus()
                    }
                    ));
                    var a = r.layoutRect().w;
                    r.menu.layoutRect({
                        w: a,
                        minW: 0,
                        maxW: a
                    }),
                    r.menu.reflow(),
                    r.menu.show(),
                    r.menu.moveRel(r.getEl(), r.isRtl() ? ["br-tr", "tr-br"] : ["bl-tl", "tl-bl"])
                } else
                    r.hideMenu()
            },
            hideMenu: function() {
                this.menu && this.menu.hide()
            },
            bindStates: function() {
                var e = this;
                e.state.on("change:value", (function(t) {
                    e.getEl("inp").value != t.value && (e.getEl("inp").value = t.value)
                }
                )),
                e.state.on("change:disabled", (function(t) {
                    e.getEl("inp").disabled = t.value
                }
                )),
                e.state.on("change:statusLevel", (function(t) {
                    var r = e.getEl("status")
                      , i = e.classPrefix
                      , o = t.value;
                    n.css(r, "display", "none" === o ? "none" : ""),
                    n.toggleClass(r, i + "i-checkmark", "ok" === o),
                    n.toggleClass(r, i + "i-warning", "warn" === o),
                    n.toggleClass(r, i + "i-error", "error" === o),
                    e.classes.toggle("has-status", "none" !== o),
                    e.repaint()
                }
                )),
                n.on(e.getEl("status"), "mouseleave", (function() {
                    e.tooltip().hide()
                }
                )),
                e.on("cancel", (function(t) {
                    e.menu && e.menu.visible() && (t.stopPropagation(),
                    e.hideMenu())
                }
                ));
                var t = function(e, t) {
                    t && t.items().length > 0 && t.items().eq(e)[0].focus()
                };
                return e.on("keydown", (function(n) {
                    var r = n.keyCode;
                    "INPUT" === n.target.nodeName && (r === i.DOWN ? (n.preventDefault(),
                    e.fire("autocomplete"),
                    t(0, e.menu)) : r === i.UP && (n.preventDefault(),
                    t(-1, e.menu)))
                }
                )),
                e._super()
            },
            remove: function() {
                r(this.getEl("inp")).off(),
                this.menu && this.menu.remove(),
                this._super()
            }
        })
    }
    )),
    n(yt, [vt], (function(e) {
        return e.extend({
            init: function(e) {
                var t = this;
                e.spellcheck = !1,
                e.onaction && (e.icon = "none"),
                t._super(e),
                t.classes.add("colorbox"),
                t.on("change keyup postrender", (function() {
                    t.repaintColor(t.value())
                }
                ))
            },
            repaintColor: function(e) {
                var t = this.getEl("open")
                  , n = t ? t.getElementsByTagName("i")[0] : null;
                if (n)
                    try {
                        n.style.background = e
                    } catch (e) {}
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:value", (function(t) {
                    e.state.get("rendered") && e.repaintColor(t.value)
                }
                )),
                e._super()
            }
        })
    }
    )),
    n(bt, [pt, ke], (function(e, t) {
        return e.extend({
            showPanel: function() {
                var e = this
                  , n = e.settings;
                if (e.active(!0),
                e.panel)
                    e.panel.show();
                else {
                    var r = n.panel;
                    r.type && (r = {
                        layout: "grid",
                        items: r
                    }),
                    r.role = r.role || "dialog",
                    r.popover = !0,
                    r.autohide = !0,
                    r.ariaRoot = !0,
                    e.panel = new t(r).on("hide", (function() {
                        e.active(!1)
                    }
                    )).on("cancel", (function(t) {
                        t.stopPropagation(),
                        e.focus(),
                        e.hidePanel()
                    }
                    )).parent(e).renderTo(e.getContainerElm()),
                    e.panel.fire("show"),
                    e.panel.reflow()
                }
                e.panel.moveRel(e.getEl(), n.popoverAlign || (e.isRtl() ? ["bc-tr", "bc-tc"] : ["bc-tl", "bc-tc"]))
            },
            hidePanel: function() {
                this.panel && this.panel.hide()
            },
            postRender: function() {
                var e = this;
                return e.aria("haspopup", !0),
                e.on("click", (function(t) {
                    t.control === e && (e.panel && e.panel.visible() ? e.hidePanel() : (e.showPanel(),
                    e.panel.focus(!!t.aria)))
                }
                )),
                e._super()
            },
            remove: function() {
                return this.panel && (this.panel.remove(),
                this.panel = null),
                this._super()
            }
        })
    }
    )),
    n(Ct, [bt, b], (function(e, t) {
        var n = t.DOM;
        return e.extend({
            init: function(e) {
                this._super(e),
                this.classes.add("colorbutton")
            },
            color: function(e) {
                return e ? (this._color = e,
                this.getEl("preview").style.backgroundColor = e,
                this) : this._color
            },
            resetColor: function() {
                return this._color = null,
                this.getEl("preview").style.backgroundColor = null,
                this
            },
            renderHtml: function() {
                var e = this
                  , t = e._id
                  , n = e.classPrefix
                  , r = e.state.get("text")
                  , i = e.settings.icon ? n + "ico " + n + "i-" + e.settings.icon : ""
                  , o = e.settings.image ? " style=\"background-image: url('" + e.settings.image + "')\"" : ""
                  , a = "";
                return r && (e.classes.add("btn-has-text"),
                a = '<span class="' + n + 'txt">' + e.encode(r) + "</span>"),
                '<div id="' + t + '" class="' + e.classes + '" role="button" tabindex="-1" aria-haspopup="true"><button role="presentation" hidefocus="1" type="button" tabindex="-1">' + (i ? '<i class="' + i + '"' + o + "></i>" : "") + '<span id="' + t + '-preview" class="' + n + 'preview"></span>' + a + '</button><button type="button" class="' + n + 'open" hidefocus="1" tabindex="-1"> <i class="' + n + 'caret"></i></button></div>'
            },
            postRender: function() {
                var e = this
                  , t = e.settings.onclick;
                return e.on("click", (function(r) {
                    r.aria && "down" == r.aria.key || r.control != e || n.getParent(r.target, "." + e.classPrefix + "open") || (r.stopImmediatePropagation(),
                    t.call(e, r))
                }
                )),
                delete e.settings.onclick,
                e._super()
            }
        })
    }
    )),
    n(xt, [], (function() {
        var e = Math.min
          , t = Math.max
          , n = Math.round;
        return function(r) {
            function i(r, i, o) {
                var a, u, d, f;
                if (r = (parseInt(r, 10) || 0) % 360,
                i = parseInt(i, 10) / 100,
                o = parseInt(o, 10) / 100,
                i = t(0, e(i, 1)),
                o = t(0, e(o, 1)),
                0 !== i) {
                    switch (a = r / 60,
                    d = (u = o * i) * (1 - Math.abs(a % 2 - 1)),
                    f = o - u,
                    Math.floor(a)) {
                    case 0:
                        s = u,
                        l = d,
                        c = 0;
                        break;
                    case 1:
                        s = d,
                        l = u,
                        c = 0;
                        break;
                    case 2:
                        s = 0,
                        l = u,
                        c = d;
                        break;
                    case 3:
                        s = 0,
                        l = d,
                        c = u;
                        break;
                    case 4:
                        s = d,
                        l = 0,
                        c = u;
                        break;
                    case 5:
                        s = u,
                        l = 0,
                        c = d;
                        break;
                    default:
                        s = l = c = 0
                    }
                    s = n(255 * (s + f)),
                    l = n(255 * (l + f)),
                    c = n(255 * (c + f))
                } else
                    s = l = c = n(255 * o)
            }
            function o(e) {
                var t;
                return "object" == typeof e ? "r"in e ? (s = e.r,
                l = e.g,
                c = e.b) : "v"in e && i(e.h, e.s, e.v) : (t = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e)) ? (s = parseInt(t[1], 10),
                l = parseInt(t[2], 10),
                c = parseInt(t[3], 10)) : (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e)) ? (s = parseInt(t[1], 16),
                l = parseInt(t[2], 16),
                c = parseInt(t[3], 16)) : (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) && (s = parseInt(t[1] + t[1], 16),
                l = parseInt(t[2] + t[2], 16),
                c = parseInt(t[3] + t[3], 16)),
                s = s < 0 ? 0 : s > 255 ? 255 : s,
                l = l < 0 ? 0 : l > 255 ? 255 : l,
                c = c < 0 ? 0 : c > 255 ? 255 : c,
                a
            }
            var a = this
              , s = 0
              , l = 0
              , c = 0;
            r && o(r),
            a.toRgb = function() {
                return {
                    r: s,
                    g: l,
                    b: c
                }
            }
            ,
            a.toHsv = function() {
                return function(r, i, o) {
                    var a, s, l, c;
                    return a = 0,
                    s = 0,
                    (l = e(r /= 255, e(i /= 255, o /= 255))) == (c = t(r, t(i, o))) ? {
                        h: 0,
                        s: 0,
                        v: 100 * (s = l)
                    } : (a = (c - l) / c,
                    s = c,
                    {
                        h: n(60 * ((r == l ? 3 : o == l ? 1 : 5) - (r == l ? i - o : o == l ? r - i : o - r) / (c - l))),
                        s: n(100 * a),
                        v: n(100 * s)
                    })
                }(s, l, c)
            }
            ,
            a.toHex = function() {
                function e(e) {
                    return (e = parseInt(e, 10).toString(16)).length > 1 ? e : "0" + e
                }
                return "#" + e(s) + e(l) + e(c)
            }
            ,
            a.parse = o
        }
    }
    )),
    n(wt, [De, we, pe, xt], (function(e, t, n, r) {
        return e.extend({
            Defaults: {
                classes: "widget colorpicker"
            },
            init: function(e) {
                this._super(e)
            },
            postRender: function() {
                function e(e, t) {
                    var r, i, o = n.getPos(e);
                    return r = t.pageX - o.x,
                    i = t.pageY - o.y,
                    {
                        x: r = Math.max(0, Math.min(r / e.clientWidth, 1)),
                        y: i = Math.max(0, Math.min(i / e.clientHeight, 1))
                    }
                }
                function i(e, t) {
                    var i = (360 - e.h) / 360;
                    n.css(c, {
                        top: 100 * i + "%"
                    }),
                    t || n.css(d, {
                        left: e.s + "%",
                        top: 100 - e.v + "%"
                    }),
                    u.style.background = new r({
                        s: 100,
                        v: 100,
                        h: e.h
                    }).toHex(),
                    f.color().parse({
                        s: e.s,
                        v: e.v,
                        h: e.h
                    })
                }
                function o(t) {
                    var n;
                    n = e(u, t),
                    s.s = 100 * n.x,
                    s.v = 100 * (1 - n.y),
                    i(s),
                    f.fire("change")
                }
                function a(t) {
                    var n;
                    n = e(l, t),
                    (s = h.toHsv()).h = 360 * (1 - n.y),
                    i(s, !0),
                    f.fire("change")
                }
                var s, l, c, u, d, f = this, h = f.color();
                l = f.getEl("h"),
                c = f.getEl("hp"),
                u = f.getEl("sv"),
                d = f.getEl("svp"),
                f._repaint = function() {
                    i(s = h.toHsv())
                }
                ,
                f._super(),
                f._svdraghelper = new t(f._id + "-sv",{
                    start: o,
                    drag: o
                }),
                f._hdraghelper = new t(f._id + "-h",{
                    start: a,
                    drag: a
                }),
                f._repaint()
            },
            rgb: function() {
                return this.color().toRgb()
            },
            value: function(e) {
                var t = this;
                return arguments.length ? (t.color().parse(e),
                void (t._rendered && t._repaint())) : t.color().toHex()
            },
            color: function() {
                return this._color || (this._color = new r),
                this._color
            },
            renderHtml: function() {
                var e, t = this, n = t._id, r = t.classPrefix, i = "#ff0000,#ff0080,#ff00ff,#8000ff,#0000ff,#0080ff,#00ffff,#00ff80,#00ff00,#80ff00,#ffff00,#ff8000,#ff0000";
                return e = '<div id="' + n + '-h" class="' + r + 'colorpicker-h" style="' + ("background: -ms-linear-gradient(top," + i + ");background: linear-gradient(to bottom," + i + ");") + '">' + function() {
                    var e, t, n, o, a = "";
                    for (n = "filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=",
                    e = 0,
                    t = (o = i.split(",")).length - 1; e < t; e++)
                        a += '<div class="' + r + 'colorpicker-h-chunk" style="height:' + 100 / t + "%;" + n + o[e] + ",endColorstr=" + o[e + 1] + ");-ms-" + n + o[e] + ",endColorstr=" + o[e + 1] + ')"></div>';
                    return a
                }() + '<div id="' + n + '-hp" class="' + r + 'colorpicker-h-marker"></div></div>',
                '<div id="' + n + '" class="' + t.classes + '"><div id="' + n + '-sv" class="' + r + 'colorpicker-sv"><div class="' + r + 'colorpicker-overlay1"><div class="' + r + 'colorpicker-overlay2"><div id="' + n + '-svp" class="' + r + 'colorpicker-selector1"><div class="' + r + 'colorpicker-selector2"></div></div></div></div></div>' + e + "</div>"
            }
        })
    }
    )),
    n(Et, [De], (function(e) {
        return e.extend({
            init: function(e) {
                var t = this;
                e.delimiter || (e.delimiter = "»"),
                t._super(e),
                t.classes.add("path"),
                t.canFocus = !0,
                t.on("click", (function(e) {
                    var n;
                    (n = e.target.getAttribute("data-index")) && t.fire("select", {
                        value: t.row()[n],
                        index: n
                    })
                }
                )),
                t.row(t.settings.row)
            },
            focus: function() {
                return this.getEl().firstChild.focus(),
                this
            },
            row: function(e) {
                return arguments.length ? (this.state.set("row", e),
                this) : this.state.get("row")
            },
            renderHtml: function() {
                var e = this;
                return '<div id="' + e._id + '" class="' + e.classes + '">' + e._getDataPathHtml(e.state.get("row")) + "</div>"
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:row", (function(t) {
                    e.innerHtml(e._getDataPathHtml(t.value))
                }
                )),
                e._super()
            },
            _getDataPathHtml: function(e) {
                var t, n, r = this, i = e || [], o = "", a = r.classPrefix;
                for (t = 0,
                n = i.length; t < n; t++)
                    o += (t > 0 ? '<div class="' + a + 'divider" aria-hidden="true"> ' + r.settings.delimiter + " </div>" : "") + '<div role="button" class="' + a + "path-item" + (t == n - 1 ? " " + a + "last" : "") + '" data-index="' + t + '" tabindex="-1" id="' + r._id + "-" + t + '" aria-level="' + (t + 1) + '">' + i[t].name + "</div>";
                return o || (o = '<div class="' + a + 'path-item"> </div>'),
                o
            }
        })
    }
    )),
    n(Nt, [Et], (function(e) {
        return e.extend({
            postRender: function() {
                function e(e) {
                    if (1 === e.nodeType) {
                        if ("BR" == e.nodeName || e.getAttribute("data-mce-bogus"))
                            return !0;
                        if ("bookmark" === e.getAttribute("data-mce-type"))
                            return !0
                    }
                    return !1
                }
                var t = this
                  , n = t.settings.editor;
                return !1 !== n.settings.elementpath && (t.on("select", (function(e) {
                    n.focus(),
                    n.selection.select(this.row()[e.index].element),
                    n.nodeChanged()
                }
                )),
                n.on("nodeChange", (function(r) {
                    for (var i = [], o = r.parents, a = o.length; a--; )
                        if (1 == o[a].nodeType && !e(o[a])) {
                            var s = n.fire("ResolveName", {
                                name: o[a].nodeName.toLowerCase(),
                                target: o[a]
                            });
                            if (s.isDefaultPrevented() || i.push({
                                name: s.name,
                                element: o[a]
                            }),
                            s.isPropagationStopped())
                                break
                        }
                    t.row(i)
                }
                ))),
                t._super()
            }
        })
    }
    )),
    n(_t, [xe], (function(e) {
        return e.extend({
            Defaults: {
                layout: "flex",
                align: "center",
                defaults: {
                    flex: 1
                }
            },
            renderHtml: function() {
                var e = this
                  , t = e._layout
                  , n = e.classPrefix;
                return e.classes.add("formitem"),
                t.preRender(e),
                '<div id="' + e._id + '" class="' + e.classes + '" hidefocus="1" tabindex="-1">' + (e.settings.title ? '<div id="' + e._id + '-title" class="' + n + 'title">' + e.settings.title + "</div>" : "") + '<div id="' + e._id + '-body" class="' + e.bodyClasses + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>"
            }
        })
    }
    )),
    n(St, [xe, _t, f], (function(e, t, n) {
        return e.extend({
            Defaults: {
                containerCls: "form",
                layout: "flex",
                direction: "column",
                align: "stretch",
                flex: 1,
                padding: 20,
                labelGap: 30,
                spacing: 10,
                callbacks: {
                    submit: function() {
                        this.submit()
                    }
                }
            },
            preRender: function() {
                var e = this
                  , r = e.items();
                e.settings.formItemDefaults || (e.settings.formItemDefaults = {
                    layout: "flex",
                    autoResize: "overflow",
                    defaults: {
                        flex: 1
                    }
                }),
                r.each((function(r) {
                    var i, o = r.settings.label;
                    o && ((i = new t(n.extend({
                        items: {
                            type: "label",
                            id: r._id + "-l",
                            text: o,
                            flex: 0,
                            forId: r._id,
                            disabled: r.disabled()
                        }
                    }, e.settings.formItemDefaults))).type = "formitem",
                    r.aria("labelledby", r._id + "-l"),
                    void 0 === r.settings.flex && (r.settings.flex = 1),
                    e.replace(r, i),
                    i.add(r))
                }
                ))
            },
            submit: function() {
                return this.fire("submit", {
                    data: this.toJSON()
                })
            },
            postRender: function() {
                var e = this;
                e._super(),
                e.fromJSON(e.settings.data)
            },
            bindStates: function() {
                function e() {
                    var e, n, r = 0, i = [];
                    if (!1 !== t.settings.labelGapCalc)
                        for (("children" == t.settings.labelGapCalc ? t.find("formitem") : t.items()).filter("formitem").each((function(e) {
                            var t = e.items()[0]
                              , n = t.getEl().clientWidth;
                            r = n > r ? n : r,
                            i.push(t)
                        }
                        )),
                        n = t.settings.labelGap || 0,
                        e = i.length; e--; )
                            i[e].settings.minWidth = r + n
                }
                var t = this;
                t._super(),
                t.on("show", e),
                e()
            }
        })
    }
    )),
    n(kt, [St], (function(e) {
        return e.extend({
            Defaults: {
                containerCls: "fieldset",
                layout: "flex",
                direction: "column",
                align: "stretch",
                flex: 1,
                padding: "25 15 5 15",
                labelGap: 30,
                spacing: 10,
                border: 1
            },
            renderHtml: function() {
                var e = this
                  , t = e._layout
                  , n = e.classPrefix;
                return e.preRender(),
                t.preRender(e),
                '<fieldset id="' + e._id + '" class="' + e.classes + '" hidefocus="1" tabindex="-1">' + (e.settings.title ? '<legend id="' + e._id + '-title" class="' + n + 'fieldset-title">' + e.settings.title + "</legend>" : "") + '<div id="' + e._id + '-body" class="' + e.bodyClasses + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></fieldset>"
            }
        })
    }
    )),
    n(Tt, [b, H, d, et, f, w], (function(e, t, n, r, i, o) {
        var a = i.trim
          , s = function(e, t, n, r, i) {
            return {
                type: e,
                title: t,
                url: n,
                level: r,
                attach: i
            }
        }
          , l = function(t, n) {
            return e.DOM.select(t, n)
        }
          , c = function(e) {
            return e.innerText || e.textContent
        }
          , u = function(e) {
            return function(e) {
                return e && "A" === e.nodeName && (e.id || e.name)
            }(e) && f(e)
        }
          , d = function(e) {
            return e && /^(H[1-6])$/.test(e.nodeName)
        }
          , f = function(e) {
            return function(e) {
                for (; e = e.parentNode; ) {
                    var t = e.contentEditable;
                    if (t && "inherit" !== t)
                        return o.isContentEditableTrue(e)
                }
                return !1
            }(e) && !o.isContentEditableFalse(e)
        }
          , h = function(e) {
            return d(e) && f(e)
        }
          , p = function(e) {
            var t = function(e) {
                return e.id ? e.id : r.uuid("h")
            }(e);
            return s("header", c(e), "#" + t, function(e) {
                return d(e) ? parseInt(e.nodeName.substr(1), 10) : 0
            }(e), (function() {
                e.id = t
            }
            ))
        }
          , m = function(e) {
            var n = e.id || e.name
              , r = c(e);
            return s("anchor", r || "#" + n, "#" + n, 0, t.noop)
        }
          , g = function(e) {
            return a(e.title).length > 0
        };
        return {
            find: function(e) {
                var t = function(e) {
                    return l("h1,h2,h3,h4,h5,h6,a:not([href])", e)
                }(e);
                return n.filter(function(e) {
                    return n.map(n.filter(e, h), p)
                }(t).concat(function(e) {
                    return n.map(n.filter(e, u), m)
                }(t)), g)
            }
        }
    }
    )),
    n(Rt, [vt, f, d, H, P, Tt], (function(e, t, n, r, i, o) {
        var a = {}
          , s = function(e) {
            return {
                title: e.title,
                value: {
                    title: {
                        raw: e.title
                    },
                    url: e.url,
                    attach: e.attach
                }
            }
        }
          , l = function(e) {
            return t.map(e, s)
        }
          , c = function(e, t) {
            return {
                title: e,
                value: {
                    title: e,
                    url: t,
                    attach: r.noop
                }
            }
        }
          , u = function(e, t, n) {
            var r = t in e ? e[t] : n;
            return !1 === r ? null : r
        }
          , d = function(e, i, o, s) {
            var d = {
                title: "-"
            }
              , f = function(e) {
                var a = n.filter(e[o], (function(e) {
                    return function(e, t) {
                        var r = n.find(t, (function(t) {
                            return t.url === e
                        }
                        ));
                        return !r
                    }(e, i)
                }
                ));
                return t.map(a, (function(e) {
                    return {
                        title: e,
                        value: {
                            title: e,
                            url: e,
                            attach: r.noop
                        }
                    }
                }
                ))
            }
              , p = function(e) {
                var t = n.filter(i, (function(t) {
                    return t.type == e
                }
                ));
                return l(t)
            };
            return !1 === s.typeahead_urls ? [] : "file" === o ? function(e) {
                return n.reduce(e, (function(e, t) {
                    return 0 === e.length || 0 === t.length ? e.concat(t) : e.concat(d, t)
                }
                ), [])
            }([h(e, f(a)), h(e, p("header")), h(e, function() {
                var e = p("anchor")
                  , t = u(s, "anchor_top", "#top")
                  , n = u(s, "anchor_bottom", "#bottom");
                return null !== t && e.unshift(c("<top>", t)),
                null !== n && e.push(c("<bottom>", n)),
                e
            }())]) : h(e, f(a))
        }
          , f = function(e, t) {
            var r = a[t];
            /^https?/.test(e) && (r ? -1 === n.indexOf(r, e) && (a[t] = r.slice(0, 5).concat(e)) : a[t] = [e])
        }
          , h = function(e, n) {
            var r = e.toLowerCase()
              , i = t.grep(n, (function(e) {
                return -1 !== e.title.toLowerCase().indexOf(r)
            }
            ));
            return 1 === i.length && i[0].title === e ? [] : i
        }
          , p = function(e, t, n, r) {
            var i = function(i) {
                var a = o.find(n)
                  , s = d(i, a, r, t);
                e.showAutoComplete(s, i)
            };
            e.on("autocomplete", (function() {
                i(e.value())
            }
            )),
            e.on("selectitem", (function(t) {
                var n = t.value;
                e.value(n.url);
                var i = function(e) {
                    var t = e.title;
                    return t.raw ? t.raw : t
                }(n);
                "image" === r ? e.fire("change", {
                    meta: {
                        alt: i,
                        attach: n.attach
                    }
                }) : e.fire("change", {
                    meta: {
                        text: i,
                        attach: n.attach
                    }
                }),
                e.focus()
            }
            )),
            e.on("click", (function(t) {
                0 === e.value().length && "INPUT" === t.target.nodeName && i("")
            }
            )),
            e.on("PostRender", (function() {
                e.getRoot().on("submit", (function(t) {
                    t.isDefaultPrevented() || f(e.value(), r)
                }
                ))
            }
            ))
        };
        return e.extend({
            init: function(e) {
                var n, r, i, o = this, a = tinymce.activeEditor, s = a.settings, l = e.filetype;
                e.spellcheck = !1,
                (i = s.file_picker_types || s.file_browser_callback_types) && (i = t.makeMap(i, /[, ]/)),
                i && !i[l] || (!(r = s.file_picker_callback) || i && !i[l] ? !(r = s.file_browser_callback) || i && !i[l] || (n = function() {
                    r(o.getEl("inp").id, o.value(), l, window)
                }
                ) : n = function() {
                    var e = o.fire("beforecall").meta;
                    e = t.extend({
                        filetype: l
                    }, e),
                    r.call(a, (function(e, t) {
                        o.value(e).fire("change", {
                            meta: t
                        })
                    }
                    ), o.value(), e)
                }
                ),
                n && (e.icon = "browse",
                e.onaction = n),
                o._super(e),
                p(o, s, a.getBody(), l),
                function(e, t, n) {
                    var r = t.filepicker_validator_handler;
                    if (r) {
                        var i = function(t) {
                            return 0 === t.length ? void e.statusLevel("none") : void r({
                                url: t,
                                type: n
                            }, (function(t) {
                                var n = function(e) {
                                    var t = e.status
                                      , n = e.message;
                                    return "valid" === t ? {
                                        status: "ok",
                                        message: n
                                    } : "unknown" === t || "invalid" === t ? {
                                        status: "warn",
                                        message: n
                                    } : {
                                        status: "none",
                                        message: ""
                                    }
                                }(t);
                                e.statusMessage(n.message),
                                e.statusLevel(n.status)
                            }
                            ))
                        };
                        e.state.on("change:value", (function(e) {
                            i(e.value)
                        }
                        ))
                    }
                }(o, s, l)
            }
        })
    }
    )),
    n(At, [ht], (function(e) {
        return e.extend({
            recalc: function(e) {
                var t = e.layoutRect()
                  , n = e.paddingBox;
                e.items().filter(":visible").each((function(e) {
                    e.layoutRect({
                        x: n.left,
                        y: n.top,
                        w: t.innerW - n.right - n.left,
                        h: t.innerH - n.top - n.bottom
                    }),
                    e.recalc && e.recalc()
                }
                ))
            }
        })
    }
    )),
    n(Bt, [ht], (function(e) {
        return e.extend({
            recalc: function(e) {
                var t, n, r, i, o, a, s, l, c, u, d, f, h, p, m, g, v, y, b, C, x, w, E, N, _, S, k, T, R, A, B, D, L, M, P, O, H, I = [], F = Math.max, z = Math.min;
                for (r = e.items().filter(":visible"),
                i = e.layoutRect(),
                o = e.paddingBox,
                a = e.settings,
                f = e.isRtl() ? a.direction || "row-reversed" : a.direction,
                s = a.align,
                l = e.isRtl() ? a.pack || "end" : a.pack,
                c = a.spacing || 0,
                "row-reversed" != f && "column-reverse" != f || (r = r.set(r.toArray().reverse()),
                f = f.split("-")[0]),
                "column" == f ? (N = "y",
                w = "h",
                E = "minH",
                _ = "maxH",
                k = "innerH",
                S = "top",
                T = "deltaH",
                R = "contentH",
                M = "left",
                D = "w",
                A = "x",
                B = "innerW",
                L = "minW",
                P = "right",
                O = "deltaW",
                H = "contentW") : (N = "x",
                w = "w",
                E = "minW",
                _ = "maxW",
                k = "innerW",
                S = "left",
                T = "deltaW",
                R = "contentW",
                M = "top",
                D = "h",
                A = "y",
                B = "innerH",
                L = "minH",
                P = "bottom",
                O = "deltaH",
                H = "contentH"),
                d = i[k] - o[S] - o[S],
                x = u = 0,
                t = 0,
                n = r.length; t < n; t++)
                    p = (h = r[t]).layoutRect(),
                    d -= t < n - 1 ? c : 0,
                    (m = h.settings.flex) > 0 && (u += m,
                    p[_] && I.push(h),
                    p.flex = m),
                    d -= p[E],
                    (g = o[M] + p[L] + o[P]) > x && (x = g);
                if ((b = {})[E] = d < 0 ? i[E] - d + i[T] : i[k] - d + i[T],
                b[L] = x + i[O],
                b[R] = i[k] - d,
                b[H] = x,
                b.minW = z(b.minW, i.maxW),
                b.minH = z(b.minH, i.maxH),
                b.minW = F(b.minW, i.startMinWidth),
                b.minH = F(b.minH, i.startMinHeight),
                !i.autoResize || b.minW == i.minW && b.minH == i.minH) {
                    for (y = d / u,
                    t = 0,
                    n = I.length; t < n; t++)
                        v = (p = (h = I[t]).layoutRect())[_],
                        (g = p[E] + p.flex * y) > v ? (d -= p[_] - p[E],
                        u -= p.flex,
                        p.flex = 0,
                        p.maxFlexSize = v) : p.maxFlexSize = 0;
                    for (y = d / u,
                    C = o[S],
                    b = {},
                    0 === u && ("end" == l ? C = d + o[S] : "center" == l ? (C = Math.round(i[k] / 2 - (i[k] - d) / 2) + o[S]) < 0 && (C = o[S]) : "justify" == l && (C = o[S],
                    c = Math.floor(d / (r.length - 1)))),
                    b[A] = o[M],
                    t = 0,
                    n = r.length; t < n; t++)
                        g = (p = (h = r[t]).layoutRect()).maxFlexSize || p[E],
                        "center" === s ? b[A] = Math.round(i[B] / 2 - p[D] / 2) : "stretch" === s ? (b[D] = F(p[L] || 0, i[B] - o[M] - o[P]),
                        b[A] = o[M]) : "end" === s && (b[A] = i[B] - p[D] - o.top),
                        p.flex > 0 && (g += p.flex * y),
                        b[w] = g,
                        b[N] = C,
                        h.layoutRect(b),
                        h.recalc && h.recalc(),
                        C += g + c
                } else if (b.w = b.minW,
                b.h = b.minH,
                e.layoutRect(b),
                this.recalc(e),
                null === e._lastRect) {
                    var U = e.parent();
                    U && (U._lastRect = null,
                    U.recalc())
                }
            }
        })
    }
    )),
    n(Dt, [ft], (function(e) {
        return e.extend({
            Defaults: {
                containerClass: "flow-layout",
                controlClass: "flow-layout-item",
                endClass: "break"
            },
            recalc: function(e) {
                e.items().filter(":visible").each((function(e) {
                    e.recalc && e.recalc()
                }
                ))
            },
            isNative: function() {
                return !0
            }
        })
    }
    )),
    n(Lt, [ye, De, ke, f, d, b, ot, l], (function(e, t, n, r, i, o, a, s) {
        function l(t) {
            t.on("ScriptsLoaded", (function() {
                t.rtl && (e.rtl = !0)
            }
            ))
        }
        function c(e) {
            function t(t, n) {
                return function() {
                    var r = this;
                    e.on("nodeChange", (function(i) {
                        var o = e.formatter
                          , a = null;
                        u(i.parents, (function(e) {
                            if (u(t, (function(t) {
                                if (n ? o.matchNode(e, n, {
                                    value: t.value
                                }) && (a = t.value) : o.matchNode(e, t.value) && (a = t.value),
                                a)
                                    return !1
                            }
                            )),
                            a)
                                return !1
                        }
                        )),
                        r.value(a)
                    }
                    ))
                }
            }
            function i(e) {
                for (var t = (e = e.replace(/;$/, "").split(";")).length; t--; )
                    e[t] = e[t].split("=");
                return e
            }
            function o(t) {
                return function() {
                    var n = this;
                    e.formatter ? e.formatter.formatChanged(t, (function(e) {
                        n.active(e)
                    }
                    )) : e.on("init", (function() {
                        e.formatter.formatChanged(t, (function(e) {
                            n.active(e)
                        }
                        ))
                    }
                    ))
                }
            }
            function a(t) {
                return function() {
                    function n() {
                        return !!e.undoManager && e.undoManager[t]()
                    }
                    var r = this;
                    t = "redo" == t ? "hasRedo" : "hasUndo",
                    r.disabled(!n()),
                    e.on("Undo Redo AddUndo TypingUndo ClearUndos SwitchMode", (function() {
                        r.disabled(e.readonly || !n())
                    }
                    ))
                }
            }
            function s(t) {
                t.control && (t = t.control.value()),
                t && e.execCommand("mceToggleFormat", !1, t)
            }
            function l(t) {
                var n = t.length;
                return r.each(t, (function(t) {
                    t.menu && (t.hidden = 0 === l(t.menu));
                    var r = t.format;
                    r && (t.hidden = !e.formatter.canApply(r)),
                    t.hidden && n--
                }
                )),
                n
            }
            function c(t) {
                var n = t.items().length;
                return t.items().each((function(t) {
                    t.menu && t.visible(c(t.menu) > 0),
                    !t.menu && t.settings.menu && t.visible(l(t.settings.menu) > 0);
                    var r = t.settings.format;
                    r && t.visible(e.formatter.canApply(r)),
                    t.visible() || n--
                }
                )),
                n
            }
            var f;
            f = function() {
                function t(e) {
                    var i = [];
                    if (e)
                        return u(e, (function(e) {
                            var o = {
                                text: e.title,
                                icon: e.icon
                            };
                            if (e.items)
                                o.menu = t(e.items);
                            else {
                                var a = e.format || "custom" + n++;
                                e.format || (e.name = a,
                                r.push(e)),
                                o.format = a,
                                o.cmd = e.cmd
                            }
                            i.push(o)
                        }
                        )),
                        i
                }
                var n = 0
                  , r = []
                  , i = [{
                    title: "Headings",
                    items: [{
                        title: "Heading 1",
                        format: "h1"
                    }, {
                        title: "Heading 2",
                        format: "h2"
                    }, {
                        title: "Heading 3",
                        format: "h3"
                    }, {
                        title: "Heading 4",
                        format: "h4"
                    }, {
                        title: "Heading 5",
                        format: "h5"
                    }, {
                        title: "Heading 6",
                        format: "h6"
                    }]
                }, {
                    title: "Inline",
                    items: [{
                        title: "Bold",
                        icon: "bold",
                        format: "bold"
                    }, {
                        title: "Italic",
                        icon: "italic",
                        format: "italic"
                    }, {
                        title: "Underline",
                        icon: "underline",
                        format: "underline"
                    }, {
                        title: "Strikethrough",
                        icon: "strikethrough",
                        format: "strikethrough"
                    }, {
                        title: "Superscript",
                        icon: "superscript",
                        format: "superscript"
                    }, {
                        title: "Subscript",
                        icon: "subscript",
                        format: "subscript"
                    }, {
                        title: "Code",
                        icon: "code",
                        format: "code"
                    }]
                }, {
                    title: "Blocks",
                    items: [{
                        title: "Paragraph",
                        format: "p"
                    }, {
                        title: "Blockquote",
                        format: "blockquote"
                    }, {
                        title: "Div",
                        format: "div"
                    }, {
                        title: "Pre",
                        format: "pre"
                    }]
                }, {
                    title: "Alignment",
                    items: [{
                        title: "Left",
                        icon: "alignleft",
                        format: "alignleft"
                    }, {
                        title: "Center",
                        icon: "aligncenter",
                        format: "aligncenter"
                    }, {
                        title: "Right",
                        icon: "alignright",
                        format: "alignright"
                    }, {
                        title: "Justify",
                        icon: "alignjustify",
                        format: "alignjustify"
                    }]
                }];
                return e.on("init", (function() {
                    u(r, (function(t) {
                        e.formatter.register(t.name, t)
                    }
                    ))
                }
                )),
                {
                    type: "menu",
                    items: t(e.settings.style_formats_merge ? e.settings.style_formats ? i.concat(e.settings.style_formats) : i : e.settings.style_formats || i),
                    onPostRender: function(t) {
                        e.fire("renderFormatsMenu", {
                            control: t.control
                        })
                    },
                    itemDefaults: {
                        preview: !0,
                        textStyle: function() {
                            if (this.settings.format)
                                return e.formatter.getCssText(this.settings.format)
                        },
                        onPostRender: function() {
                            var t = this;
                            t.parent().on("show", (function() {
                                var n, r;
                                (n = t.settings.format) && (t.disabled(!e.formatter.canApply(n)),
                                t.active(e.formatter.match(n))),
                                (r = t.settings.cmd) && t.active(e.queryCommandState(r))
                            }
                            ))
                        },
                        onclick: function() {
                            this.settings.format && s(this.settings.format),
                            this.settings.cmd && e.execCommand(this.settings.cmd)
                        }
                    }
                }
            }(),
            u({
                bold: "Bold",
                italic: "Italic",
                underline: "Underline",
                strikethrough: "Strikethrough",
                subscript: "Subscript",
                superscript: "Superscript"
            }, (function(t, n) {
                e.addButton(n, {
                    tooltip: t,
                    onPostRender: o(n),
                    onclick: function() {
                        s(n)
                    }
                })
            }
            )),
            u({
                outdent: ["Decrease indent", "Outdent"],
                indent: ["Increase indent", "Indent"],
                cut: ["Cut", "Cut"],
                copy: ["Copy", "Copy"],
                paste: ["Paste", "Paste"],
                help: ["Help", "mceHelp"],
                selectall: ["Select all", "SelectAll"],
                removeformat: ["Clear formatting", "RemoveFormat"],
                visualaid: ["Visual aids", "mceToggleVisualAid"],
                newdocument: ["New document", "mceNewDocument"]
            }, (function(t, n) {
                e.addButton(n, {
                    tooltip: t[0],
                    cmd: t[1]
                })
            }
            )),
            u({
                blockquote: ["Blockquote", "mceBlockQuote"],
                subscript: ["Subscript", "Subscript"],
                superscript: ["Superscript", "Superscript"],
                alignleft: ["Align left", "JustifyLeft"],
                aligncenter: ["Align center", "JustifyCenter"],
                alignright: ["Align right", "JustifyRight"],
                alignjustify: ["Justify", "JustifyFull"],
                alignnone: ["No alignment", "JustifyNone"]
            }, (function(t, n) {
                e.addButton(n, {
                    tooltip: t[0],
                    cmd: t[1],
                    onPostRender: o(n)
                })
            }
            ));
            var h = function(t) {
                var n, i;
                if ("string" == typeof t)
                    i = t.split(" ");
                else if (r.isArray(t))
                    return d(r.map(t, h));
                return n = r.grep(i, (function(t) {
                    return "|" === t || t in e.menuItems
                }
                )),
                r.map(n, (function(t) {
                    return "|" === t ? {
                        text: "-"
                    } : e.menuItems[t]
                }
                ))
            }
              , p = function(t) {
                var n = [{
                    text: "-"
                }]
                  , i = r.grep(e.menuItems, (function(e) {
                    return e.context === t
                }
                ));
                return r.each(i, (function(e) {
                    "before" == e.separator && n.push({
                        text: "|"
                    }),
                    e.prependToContext ? n.unshift(e) : n.push(e),
                    "after" == e.separator && n.push({
                        text: "|"
                    })
                }
                )),
                n
            };
            e.addButton("undo", {
                tooltip: "Undo",
                onPostRender: a("undo"),
                cmd: "undo"
            }),
            e.addButton("redo", {
                tooltip: "Redo",
                onPostRender: a("redo"),
                cmd: "redo"
            }),
            e.addMenuItem("newdocument", {
                text: "New document",
                icon: "newdocument",
                cmd: "mceNewDocument"
            }),
            e.addMenuItem("undo", {
                text: "Undo",
                icon: "undo",
                shortcut: "Meta+Z",
                onPostRender: a("undo"),
                cmd: "undo"
            }),
            e.addMenuItem("redo", {
                text: "Redo",
                icon: "redo",
                shortcut: "Meta+Y",
                onPostRender: a("redo"),
                cmd: "redo"
            }),
            e.addMenuItem("visualaid", {
                text: "Visual aids",
                selectable: !0,
                onPostRender: function() {
                    var t = this;
                    e.on("VisualAid", (function(e) {
                        t.active(e.hasVisual)
                    }
                    )),
                    t.active(e.hasVisual)
                },
                cmd: "mceToggleVisualAid"
            }),
            e.addButton("remove", {
                tooltip: "Remove",
                icon: "remove",
                cmd: "Delete"
            }),
            e.addButton("insert", {
                type: "menubutton",
                icon: "insert",
                menu: [],
                oncreatemenu: function() {
                    this.menu.add(function(e) {
                        return function(e) {
                            var t = e;
                            return t.length > 0 && "-" === t[0].text && (t = t.slice(1)),
                            t.length > 0 && "-" === t[t.length - 1].text && (t = t.slice(0, t.length - 1)),
                            t
                        }(e.insert_button_items ? h(e.insert_button_items) : p("insert"))
                    }(e.settings)),
                    this.menu.renderNew()
                }
            }),
            u({
                cut: ["Cut", "Cut", "Meta+X"],
                copy: ["Copy", "Copy", "Meta+C"],
                paste: ["Paste", "Paste", "Meta+V"],
                selectall: ["Select all", "SelectAll", "Meta+A"],
                bold: ["Bold", "Bold", "Meta+B"],
                italic: ["Italic", "Italic", "Meta+I"],
                underline: ["Underline", "Underline"],
                strikethrough: ["Strikethrough", "Strikethrough"],
                subscript: ["Subscript", "Subscript"],
                superscript: ["Superscript", "Superscript"],
                removeformat: ["Clear formatting", "RemoveFormat"]
            }, (function(t, n) {
                e.addMenuItem(n, {
                    text: t[0],
                    icon: n,
                    shortcut: t[2],
                    cmd: t[1]
                })
            }
            )),
            e.on("mousedown", (function() {
                n.hideAll()
            }
            )),
            e.addButton("styleselect", {
                type: "menubutton",
                text: "Formats",
                menu: f,
                onShowMenu: function() {
                    e.settings.style_formats_autohide && c(this.menu)
                }
            }),
            e.addButton("formatselect", (function() {
                var n = []
                  , r = i(e.settings.block_formats || "Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre");
                return u(r, (function(t) {
                    n.push({
                        text: t[0],
                        value: t[1],
                        textStyle: function() {
                            return e.formatter.getCssText(t[1])
                        }
                    })
                }
                )),
                {
                    type: "listbox",
                    text: r[0][0],
                    values: n,
                    fixedWidth: !0,
                    onselect: s,
                    onPostRender: t(n)
                }
            }
            )),
            e.addButton("fontselect", (function() {
                var n = []
                  , r = i(e.settings.font_formats || "Andale Mono=andale mono,monospace;Arial=arial,helvetica,sans-serif;Arial Black=arial black,sans-serif;Book Antiqua=book antiqua,palatino,serif;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,palatino,serif;Helvetica=helvetica,arial,sans-serif;Impact=impact,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco,monospace;Times New Roman=times new roman,times,serif;Trebuchet MS=trebuchet ms,geneva,sans-serif;Verdana=verdana,geneva,sans-serif;Webdings=webdings;Wingdings=wingdings,zapf dingbats");
                return u(r, (function(e) {
                    n.push({
                        text: {
                            raw: e[0]
                        },
                        value: e[1],
                        textStyle: -1 == e[1].indexOf("dings") ? "font-family:" + e[1] : ""
                    })
                }
                )),
                {
                    type: "listbox",
                    text: "Font Family",
                    tooltip: "Font Family",
                    values: n,
                    fixedWidth: !0,
                    onPostRender: t(n, "fontname"),
                    onselect: function(t) {
                        t.control.settings.value && e.execCommand("FontName", !1, t.control.settings.value)
                    }
                }
            }
            )),
            e.addButton("fontsizeselect", (function() {
                var n = []
                  , r = e.settings.fontsize_formats || "8pt 10pt 12pt 14pt 18pt 24pt 36pt";
                return u(r.split(" "), (function(e) {
                    var t = e
                      , r = e
                      , i = e.split("=");
                    i.length > 1 && (t = i[0],
                    r = i[1]),
                    n.push({
                        text: t,
                        value: r
                    })
                }
                )),
                {
                    type: "listbox",
                    text: "Font Sizes",
                    tooltip: "Font Sizes",
                    values: n,
                    fixedWidth: !0,
                    onPostRender: t(n, "fontsize"),
                    onclick: function(t) {
                        t.control.settings.value && e.execCommand("FontSize", !1, t.control.settings.value)
                    }
                }
            }
            )),
            e.addMenuItem("formats", {
                text: "Formats",
                menu: f
            })
        }
        var u = r.each
          , d = function(e) {
            return i.reduce(e, (function(e, t) {
                return e.concat(t)
            }
            ), [])
        };
        a.on("AddEditor", (function(e) {
            var t = e.editor;
            l(t),
            c(t),
            function(e) {
                e.settings.ui_container && (s.container = o.DOM.select(e.settings.ui_container)[0])
            }(t)
        }
        )),
        e.translate = function(e) {
            return a.translate(e)
        }
        ,
        t.tooltips = !s.iOS
    }
    )),
    n(Mt, [ht], (function(e) {
        return e.extend({
            recalc: function(e) {
                var t, n, r, i, o, a, s, l, c, u, d, f, h, p, m, g, v, y, b, C, x, w, E, N, _, S, k, T, R = [], A = [];
                t = e.settings,
                i = e.items().filter(":visible"),
                o = e.layoutRect(),
                r = t.columns || Math.ceil(Math.sqrt(i.length)),
                n = Math.ceil(i.length / r),
                y = t.spacingH || t.spacing || 0,
                b = t.spacingV || t.spacing || 0,
                C = t.alignH || t.align,
                x = t.alignV || t.align,
                g = e.paddingBox,
                T = "reverseRows"in t ? t.reverseRows : e.isRtl(),
                C && "string" == typeof C && (C = [C]),
                x && "string" == typeof x && (x = [x]);
                for (d = 0; d < r; d++)
                    R.push(0);
                for (f = 0; f < n; f++)
                    A.push(0);
                for (f = 0; f < n; f++)
                    for (d = 0; d < r && (u = i[f * r + d]); d++)
                        N = (c = u.layoutRect()).minW,
                        _ = c.minH,
                        R[d] = N > R[d] ? N : R[d],
                        A[f] = _ > A[f] ? _ : A[f];
                for (S = o.innerW - g.left - g.right,
                w = 0,
                d = 0; d < r; d++)
                    w += R[d] + (d > 0 ? y : 0),
                    S -= (d > 0 ? y : 0) + R[d];
                for (k = o.innerH - g.top - g.bottom,
                E = 0,
                f = 0; f < n; f++)
                    E += A[f] + (f > 0 ? b : 0),
                    k -= (f > 0 ? b : 0) + A[f];
                if (w += g.left + g.right,
                E += g.top + g.bottom,
                (l = {}).minW = w + (o.w - o.innerW),
                l.minH = E + (o.h - o.innerH),
                l.contentW = l.minW - o.deltaW,
                l.contentH = l.minH - o.deltaH,
                l.minW = Math.min(l.minW, o.maxW),
                l.minH = Math.min(l.minH, o.maxH),
                l.minW = Math.max(l.minW, o.startMinWidth),
                l.minH = Math.max(l.minH, o.startMinHeight),
                !o.autoResize || l.minW == o.minW && l.minH == o.minH) {
                    var B;
                    o.autoResize && ((l = e.layoutRect(l)).contentW = l.minW - o.deltaW,
                    l.contentH = l.minH - o.deltaH),
                    B = "start" == t.packV ? 0 : k > 0 ? Math.floor(k / n) : 0;
                    var D = 0
                      , L = t.flexWidths;
                    if (L)
                        for (d = 0; d < L.length; d++)
                            D += L[d];
                    else
                        D = r;
                    var M = S / D;
                    for (d = 0; d < r; d++)
                        R[d] += L ? L[d] * M : M;
                    for (p = g.top,
                    f = 0; f < n; f++) {
                        for (h = g.left,
                        s = A[f] + B,
                        d = 0; d < r && (u = i[T ? f * r + r - 1 - d : f * r + d]); d++)
                            m = u.settings,
                            c = u.layoutRect(),
                            a = Math.max(R[d], c.startMinWidth),
                            c.x = h,
                            c.y = p,
                            "center" == (v = m.alignH || (C ? C[d] || C[0] : null)) ? c.x = h + a / 2 - c.w / 2 : "right" == v ? c.x = h + a - c.w : "stretch" == v && (c.w = a),
                            "center" == (v = m.alignV || (x ? x[d] || x[0] : null)) ? c.y = p + s / 2 - c.h / 2 : "bottom" == v ? c.y = p + s - c.h : "stretch" == v && (c.h = s),
                            u.layoutRect(c),
                            h += a + y,
                            u.recalc && u.recalc();
                        p += s + b
                    }
                } else if (l.w = l.minW,
                l.h = l.minH,
                e.layoutRect(l),
                this.recalc(e),
                null === e._lastRect) {
                    var P = e.parent();
                    P && (P._lastRect = null,
                    P.recalc())
                }
            }
        })
    }
    )),
    n(Pt, [De, s], (function(e, t) {
        return e.extend({
            renderHtml: function() {
                var e = this;
                return e.classes.add("iframe"),
                e.canFocus = !1,
                '<iframe id="' + e._id + '" class="' + e.classes + '" tabindex="-1" src="' + (e.settings.url || "javascript:''") + '" frameborder="0"></iframe>'
            },
            src: function(e) {
                this.getEl().src = e
            },
            html: function(e, n) {
                var r = this
                  , i = this.getEl().contentWindow.document.body;
                return i ? (i.innerHTML = e,
                n && n()) : t.setTimeout((function() {
                    r.html(e)
                }
                )),
                this
            }
        })
    }
    )),
    n(Ot, [De], (function(e) {
        return e.extend({
            init: function(e) {
                var t = this;
                t._super(e),
                t.classes.add("widget").add("infobox"),
                t.canFocus = !1
            },
            severity: function(e) {
                this.classes.remove("error"),
                this.classes.remove("warning"),
                this.classes.remove("success"),
                this.classes.add(e)
            },
            help: function(e) {
                this.state.set("help", e)
            },
            renderHtml: function() {
                var e = this
                  , t = e.classPrefix;
                return '<div id="' + e._id + '" class="' + e.classes + '"><div id="' + e._id + '-body">' + e.encode(e.state.get("text")) + '<button role="button" tabindex="-1"><i class="' + t + "ico " + t + 'i-help"></i></button></div></div>'
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:text", (function(t) {
                    e.getEl("body").firstChild.data = e.encode(t.value),
                    e.state.get("rendered") && e.updateLayoutRect()
                }
                )),
                e.state.on("change:help", (function(t) {
                    e.classes.toggle("has-help", t.value),
                    e.state.get("rendered") && e.updateLayoutRect()
                }
                )),
                e._super()
            }
        })
    }
    )),
    n(Ht, [De, pe], (function(e, t) {
        return e.extend({
            init: function(e) {
                var t = this;
                t._super(e),
                t.classes.add("widget").add("label"),
                t.canFocus = !1,
                e.multiline && t.classes.add("autoscroll"),
                e.strong && t.classes.add("strong")
            },
            initLayoutRect: function() {
                var e = this
                  , n = e._super();
                e.settings.multiline && (t.getSize(e.getEl()).width > n.maxW && (n.minW = n.maxW,
                e.classes.add("multiline")),
                e.getEl().style.width = n.minW + "px",
                n.startMinH = n.h = n.minH = Math.min(n.maxH, t.getSize(e.getEl()).height));
                return n
            },
            repaint: function() {
                var e = this;
                return e.settings.multiline || (e.getEl().style.lineHeight = e.layoutRect().h + "px"),
                e._super()
            },
            severity: function(e) {
                this.classes.remove("error"),
                this.classes.remove("warning"),
                this.classes.remove("success"),
                this.classes.add(e)
            },
            renderHtml: function() {
                var e, t, n = this, r = n.settings.forId;
                return !r && (t = n.settings.forName) && ((e = n.getRoot().find("#" + t)[0]) && (r = e._id)),
                r ? '<label id="' + n._id + '" class="' + n.classes + '"' + (r ? ' for="' + r + '"' : "") + ">" + n.encode(n.state.get("text")) + "</label>" : '<span id="' + n._id + '" class="' + n.classes + '">' + n.encode(n.state.get("text")) + "</span>"
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:text", (function(t) {
                    e.innerHtml(e.encode(t.value)),
                    e.state.get("rendered") && e.updateLayoutRect()
                }
                )),
                e._super()
            }
        })
    }
    )),
    n(It, [xe], (function(e) {
        return e.extend({
            Defaults: {
                role: "toolbar",
                layout: "flow"
            },
            init: function(e) {
                this._super(e),
                this.classes.add("toolbar")
            },
            postRender: function() {
                return this.items().each((function(e) {
                    e.classes.add("toolbar-item")
                }
                )),
                this._super()
            }
        })
    }
    )),
    n(Ft, [It], (function(e) {
        return e.extend({
            Defaults: {
                role: "menubar",
                containerCls: "menubar",
                ariaRoot: !0,
                defaults: {
                    type: "menubutton"
                }
            }
        })
    }
    )),
    n(zt, [pt, be, Ft], (function(e, t, n) {
        var r = e.extend({
            init: function(e) {
                var t = this;
                t._renderOpen = !0,
                t._super(e),
                e = t.settings,
                t.classes.add("menubtn"),
                e.fixedWidth && t.classes.add("fixed-width"),
                t.aria("haspopup", !0),
                t.state.set("menu", e.menu || t.render())
            },
            showMenu: function() {
                var e, n = this;
                return n.menu && n.menu.visible() ? n.hideMenu() : (n.menu || ((e = n.state.get("menu") || []).length ? e = {
                    type: "menu",
                    items: e
                } : e.type = e.type || "menu",
                e.renderTo ? n.menu = e.parent(n).show().renderTo() : n.menu = t.create(e).parent(n).renderTo(),
                n.fire("createmenu"),
                n.menu.reflow(),
                n.menu.on("cancel", (function(e) {
                    e.control.parent() === n.menu && (e.stopPropagation(),
                    n.focus(),
                    n.hideMenu())
                }
                )),
                n.menu.on("select", (function() {
                    n.focus()
                }
                )),
                n.menu.on("show hide", (function(e) {
                    e.control == n.menu && n.activeMenu("show" == e.type),
                    n.aria("expanded", "show" == e.type)
                }
                )).fire("show")),
                n.menu.show(),
                n.menu.layoutRect({
                    w: n.layoutRect().w
                }),
                n.menu.moveRel(n.getEl(), n.isRtl() ? ["br-tr", "tr-br"] : ["bl-tl", "tl-bl"]),
                void n.fire("showmenu"))
            },
            hideMenu: function() {
                var e = this;
                e.menu && (e.menu.items().each((function(e) {
                    e.hideMenu && e.hideMenu()
                }
                )),
                e.menu.hide())
            },
            activeMenu: function(e) {
                this.classes.toggle("active", e)
            },
            renderHtml: function() {
                var e, t = this, r = t._id, i = t.classPrefix, o = t.settings.icon, a = t.state.get("text"), s = "";
                return (e = t.settings.image) ? (o = "none",
                "string" != typeof e && (e = window.getSelection ? e[0] : e[1]),
                e = " style=\"background-image: url('" + e + "')\"") : e = "",
                a && (t.classes.add("btn-has-text"),
                s = '<span class="' + i + 'txt">' + t.encode(a) + "</span>"),
                o = t.settings.icon ? i + "ico " + i + "i-" + o : "",
                t.aria("role", t.parent()instanceof n ? "menuitem" : "button"),
                '<div id="' + r + '" class="' + t.classes + '" tabindex="-1" aria-labelledby="' + r + '"><button id="' + r + '-open" role="presentation" type="button" tabindex="-1">' + (o ? '<i class="' + o + '"' + e + "></i>" : "") + s + ' <i class="' + i + 'caret"></i></button></div>'
            },
            postRender: function() {
                var e = this;
                return e.on("click", (function(t) {
                    t.control === e && function(e, t) {
                        for (; e; ) {
                            if (t === e)
                                return !0;
                            e = e.parentNode
                        }
                        return !1
                    }(t.target, e.getEl()) && (e.showMenu(),
                    t.aria && e.menu.items().filter(":visible")[0].focus())
                }
                )),
                e.on("mouseenter", (function(t) {
                    var n, i = t.control, o = e.parent();
                    i && o && i instanceof r && i.parent() == o && (o.items().filter("MenuButton").each((function(e) {
                        e.hideMenu && e != i && (e.menu && e.menu.visible() && (n = !0),
                        e.hideMenu())
                    }
                    )),
                    n && (i.focus(),
                    i.showMenu()))
                }
                )),
                e._super()
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:menu", (function() {
                    e.menu && e.menu.remove(),
                    e.menu = null
                }
                )),
                e._super()
            },
            remove: function() {
                this._super(),
                this.menu && this.menu.remove()
            }
        });
        return r
    }
    )),
    n(Ut, [De, be, l, s], (function(e, t, n, r) {
        return e.extend({
            Defaults: {
                border: 0,
                role: "menuitem"
            },
            init: function(e) {
                var t, n = this;
                n._super(e),
                e = n.settings,
                n.classes.add("menu-item"),
                e.menu && n.classes.add("menu-item-expand"),
                e.preview && n.classes.add("menu-item-preview"),
                "-" !== (t = n.state.get("text")) && "|" !== t || (n.classes.add("menu-item-sep"),
                n.aria("role", "separator"),
                n.state.set("text", "-")),
                e.selectable && (n.aria("role", "menuitemcheckbox"),
                n.classes.add("menu-item-checkbox"),
                e.icon = "selected"),
                e.preview || e.selectable || n.classes.add("menu-item-normal"),
                n.on("mousedown", (function(e) {
                    e.preventDefault()
                }
                )),
                e.menu && !e.ariaHideMenu && n.aria("haspopup", !0)
            },
            hasMenus: function() {
                return !!this.settings.menu
            },
            showMenu: function() {
                var e, n = this, r = n.settings, i = n.parent();
                if (i.items().each((function(e) {
                    e !== n && e.hideMenu()
                }
                )),
                r.menu) {
                    (e = n.menu) ? e.show() : ((e = r.menu).length ? e = {
                        type: "menu",
                        items: e
                    } : e.type = e.type || "menu",
                    i.settings.itemDefaults && (e.itemDefaults = i.settings.itemDefaults),
                    (e = n.menu = t.create(e).parent(n).renderTo()).reflow(),
                    e.on("cancel", (function(t) {
                        t.stopPropagation(),
                        n.focus(),
                        e.hide()
                    }
                    )),
                    e.on("show hide", (function(e) {
                        e.control.items && e.control.items().each((function(e) {
                            e.active(e.settings.selected)
                        }
                        ))
                    }
                    )).fire("show"),
                    e.on("hide", (function(t) {
                        t.control === e && n.classes.remove("selected")
                    }
                    )),
                    e.submenu = !0),
                    e._parentMenu = i,
                    e.classes.add("menu-sub");
                    var o = e.testMoveRel(n.getEl(), n.isRtl() ? ["tl-tr", "bl-br", "tr-tl", "br-bl"] : ["tr-tl", "br-bl", "tl-tr", "bl-br"]);
                    e.moveRel(n.getEl(), o),
                    e.rel = o,
                    o = "menu-sub-" + o,
                    e.classes.remove(e._lastRel).add(o),
                    e._lastRel = o,
                    n.classes.add("selected"),
                    n.aria("expanded", !0)
                }
            },
            hideMenu: function() {
                var e = this;
                return e.menu && (e.menu.items().each((function(e) {
                    e.hideMenu && e.hideMenu()
                }
                )),
                e.menu.hide(),
                e.aria("expanded", !1)),
                e
            },
            renderHtml: function() {
                function e(e) {
                    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                }
                function t(t) {
                    var n = s.match || "";
                    return n ? t.replace(new RegExp(e(n),"gi"), (function(e) {
                        return "!mce~match[" + e + "]mce~match!"
                    }
                    )) : t
                }
                function r(t) {
                    return t.replace(new RegExp(e("!mce~match["),"g"), "<b>").replace(new RegExp(e("]mce~match!"),"g"), "</b>")
                }
                var i, o = this, a = o._id, s = o.settings, l = o.classPrefix, c = o.state.get("text"), u = o.settings.icon, d = "", f = s.shortcut, h = o.encode(s.url);
                return u && o.parent().classes.add("menu-has-icons"),
                s.image && (d = " style=\"background-image: url('" + s.image + "')\""),
                f && (f = function(e) {
                    var t, r, i;
                    for (i = n.mac ? {
                        alt: "&#x2325;",
                        ctrl: "&#x2318;",
                        shift: "&#x21E7;",
                        meta: "&#x2318;"
                    } : {
                        meta: "Ctrl"
                    },
                    e = e.split("+"),
                    t = 0; t < e.length; t++)
                        (r = i[e[t].toLowerCase()]) && (e[t] = r);
                    return e.join("+")
                }(f)),
                u = l + "ico " + l + "i-" + (o.settings.icon || "none"),
                i = "-" !== c ? '<i class="' + u + '"' + d + "></i> " : "",
                c = r(o.encode(t(c))),
                h = r(o.encode(t(h))),
                '<div id="' + a + '" class="' + o.classes + '" tabindex="-1">' + i + ("-" !== c ? '<span id="' + a + '-text" class="' + l + 'text">' + c + "</span>" : "") + (f ? '<div id="' + a + '-shortcut" class="' + l + 'menu-shortcut">' + f + "</div>" : "") + (s.menu ? '<div class="' + l + 'caret"></div>' : "") + (h ? '<div class="' + l + 'menu-item-link">' + h + "</div>" : "") + "</div>"
            },
            postRender: function() {
                var e = this
                  , t = e.settings
                  , n = t.textStyle;
                if ("function" == typeof n && (n = n.call(this)),
                n) {
                    var i = e.getEl("text");
                    i && i.setAttribute("style", n)
                }
                return e.on("mouseenter click", (function(n) {
                    n.control === e && (t.menu || "click" !== n.type ? (e.showMenu(),
                    n.aria && e.menu.focus(!0)) : (e.fire("select"),
                    r.requestAnimationFrame((function() {
                        e.parent().hideAll()
                    }
                    ))))
                }
                )),
                e._super(),
                e
            },
            hover: function() {
                var e = this;
                return e.parent().items().each((function(e) {
                    e.classes.remove("selected")
                }
                )),
                e.classes.toggle("selected", !0),
                e
            },
            active: function(e) {
                return void 0 !== e && this.aria("checked", e),
                this._super(e)
            },
            remove: function() {
                this._super(),
                this.menu && this.menu.remove()
            }
        })
    }
    )),
    n(Wt, [h, ye, s], (function(e, t, n) {
        return function(r, i) {
            var o, a, s = this, l = t.classPrefix;
            s.show = function(t, c) {
                function u() {
                    o && (e(r).append('<div class="' + l + "throbber" + (i ? " " + l + "throbber-inline" : "") + '"></div>'),
                    c && c())
                }
                return s.hide(),
                o = !0,
                t ? a = n.setTimeout(u, t) : u(),
                s
            }
            ,
            s.hide = function() {
                var e = r.lastChild;
                return n.clearTimeout(a),
                e && -1 != e.className.indexOf("throbber") && e.parentNode.removeChild(e),
                o = !1,
                s
            }
        }
    }
    )),
    n(Vt, [ke, Ut, Wt, f], (function(e, t, n, r) {
        return e.extend({
            Defaults: {
                defaultType: "menuitem",
                border: 1,
                layout: "stack",
                role: "application",
                bodyRole: "menu",
                ariaRoot: !0
            },
            init: function(e) {
                if (e.autohide = !0,
                e.constrainToViewport = !0,
                "function" == typeof e.items && (e.itemsFactory = e.items,
                e.items = []),
                e.itemDefaults)
                    for (var t = e.items, n = t.length; n--; )
                        t[n] = r.extend({}, e.itemDefaults, t[n]);
                this._super(e),
                this.classes.add("menu")
            },
            repaint: function() {
                return this.classes.toggle("menu-align", !0),
                this._super(),
                this.getEl().style.height = "",
                this.getEl("body").style.height = "",
                this
            },
            cancel: function() {
                this.hideAll(),
                this.fire("select")
            },
            load: function() {
                function e() {
                    r.throbber && (r.throbber.hide(),
                    r.throbber = null)
                }
                var t, r = this;
                r.settings.itemsFactory && (r.throbber || (r.throbber = new n(r.getEl("body"),!0),
                0 === r.items().length ? (r.throbber.show(),
                r.fire("loading")) : r.throbber.show(100, (function() {
                    r.items().remove(),
                    r.fire("loading")
                }
                )),
                r.on("hide close", e)),
                r.requestTime = t = (new Date).getTime(),
                r.settings.itemsFactory((function(n) {
                    return 0 === n.length ? void r.hide() : void (r.requestTime === t && (r.getEl().style.width = "",
                    r.getEl("body").style.width = "",
                    e(),
                    r.items().remove(),
                    r.getEl("body").innerHTML = "",
                    r.add(n),
                    r.renderNew(),
                    r.fire("loaded")))
                }
                )))
            },
            hideAll: function() {
                return this.find("menuitem").exec("hideMenu"),
                this._super()
            },
            preRender: function() {
                var e = this;
                return e.items().each((function(t) {
                    var n = t.settings;
                    if (n.icon || n.image || n.selectable)
                        return e._hasIcons = !0,
                        !1
                }
                )),
                e.settings.itemsFactory && e.on("postrender", (function() {
                    e.settings.itemsFactory && e.load()
                }
                )),
                e._super()
            }
        })
    }
    )),
    n($t, [zt, Vt], (function(e, t) {
        return e.extend({
            init: function(e) {
                var t, n, r, i, o = this;
                o._super(e),
                e = o.settings,
                o._values = t = e.values,
                t && (void 0 !== e.value && function t(i) {
                    for (var a = 0; a < i.length; a++) {
                        if (n = i[a].selected || e.value === i[a].value)
                            return r = r || i[a].text,
                            o.state.set("value", i[a].value),
                            !0;
                        if (i[a].menu && t(i[a].menu))
                            return !0
                    }
                }(t),
                !n && t.length > 0 && (r = t[0].text,
                o.state.set("value", t[0].value)),
                o.state.set("menu", t)),
                o.state.set("text", e.text || r),
                o.classes.add("listbox"),
                o.on("select", (function(t) {
                    var n = t.control;
                    i && (t.lastControl = i),
                    e.multiple ? n.active(!n.active()) : o.value(t.control.value()),
                    i = n
                }
                ))
            },
            bindStates: function() {
                function e(e, n) {
                    e instanceof t && e.items().each((function(e) {
                        e.hasMenus() || e.active(e.value() === n)
                    }
                    ))
                }
                function n(e, t) {
                    var r;
                    if (e)
                        for (var i = 0; i < e.length; i++) {
                            if (e[i].value === t)
                                return e[i];
                            if (e[i].menu && (r = n(e[i].menu, t)))
                                return r
                        }
                }
                var r = this;
                return r.on("show", (function(t) {
                    e(t.control, r.value())
                }
                )),
                r.state.on("change:value", (function(e) {
                    var t = n(r.state.get("menu"), e.value);
                    t ? r.text(t.text) : r.text(r.settings.text)
                }
                )),
                r._super()
            }
        })
    }
    )),
    n(qt, [gt], (function(e) {
        return e.extend({
            Defaults: {
                classes: "radio",
                role: "radio"
            }
        })
    }
    )),
    n(jt, [De, we], (function(e, t) {
        return e.extend({
            renderHtml: function() {
                var e = this
                  , t = e.classPrefix;
                return e.classes.add("resizehandle"),
                "both" == e.settings.direction && e.classes.add("resizehandle-both"),
                e.canFocus = !1,
                '<div id="' + e._id + '" class="' + e.classes + '"><i class="' + t + "ico " + t + 'i-resize"></i></div>'
            },
            postRender: function() {
                var e = this;
                e._super(),
                e.resizeDragHelper = new t(this._id,{
                    start: function() {
                        e.fire("ResizeStart")
                    },
                    drag: function(t) {
                        "both" != e.settings.direction && (t.deltaX = 0),
                        e.fire("Resize", t)
                    },
                    stop: function() {
                        e.fire("ResizeEnd")
                    }
                })
            },
            remove: function() {
                return this.resizeDragHelper && this.resizeDragHelper.destroy(),
                this._super()
            }
        })
    }
    )),
    n(Yt, [De], (function(e) {
        function t(e) {
            var t = "";
            if (e)
                for (var n = 0; n < e.length; n++)
                    t += '<option value="' + e[n] + '">' + e[n] + "</option>";
            return t
        }
        return e.extend({
            Defaults: {
                classes: "selectbox",
                role: "selectbox",
                options: []
            },
            init: function(e) {
                var t = this;
                t._super(e),
                t.settings.size && (t.size = t.settings.size),
                t.settings.options && (t._options = t.settings.options),
                t.on("keydown", (function(e) {
                    var n;
                    13 == e.keyCode && (e.preventDefault(),
                    t.parents().reverse().each((function(e) {
                        if (e.toJSON)
                            return n = e,
                            !1
                    }
                    )),
                    t.fire("submit", {
                        data: n.toJSON()
                    }))
                }
                ))
            },
            options: function(e) {
                return arguments.length ? (this.state.set("options", e),
                this) : this.state.get("options")
            },
            renderHtml: function() {
                var e, n = this, r = "";
                return e = t(n._options),
                n.size && (r = ' size = "' + n.size + '"'),
                '<select id="' + n._id + '" class="' + n.classes + '"' + r + ">" + e + "</select>"
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:options", (function(n) {
                    e.getEl().innerHTML = t(n.value)
                }
                )),
                e._super()
            }
        })
    }
    )),
    n(Xt, [De, we, pe], (function(e, t, n) {
        function r(e, t, n) {
            return e < t && (e = t),
            e > n && (e = n),
            e
        }
        function i(e, t, n) {
            e.setAttribute("aria-" + t, n)
        }
        function o(e, t) {
            var r, o, a, s, l;
            "v" == e.settings.orientation ? (a = "top",
            o = "height",
            r = "h") : (a = "left",
            o = "width",
            r = "w"),
            l = e.getEl("handle"),
            s = ((e.layoutRect()[r] || 100) - n.getSize(l)[o]) * ((t - e._minValue) / (e._maxValue - e._minValue)) + "px",
            l.style[a] = s,
            l.style.height = e.layoutRect().h + "px",
            i(l, "valuenow", t),
            i(l, "valuetext", "" + e.settings.previewFilter(t)),
            i(l, "valuemin", e._minValue),
            i(l, "valuemax", e._maxValue)
        }
        return e.extend({
            init: function(e) {
                var t = this;
                e.previewFilter || (e.previewFilter = function(e) {
                    return Math.round(100 * e) / 100
                }
                ),
                t._super(e),
                t.classes.add("slider"),
                "v" == e.orientation && t.classes.add("vertical"),
                t._minValue = e.minValue || 0,
                t._maxValue = e.maxValue || 100,
                t._initValue = t.state.get("value")
            },
            renderHtml: function() {
                var e = this
                  , t = e._id
                  , n = e.classPrefix;
                return '<div id="' + t + '" class="' + e.classes + '"><div id="' + t + '-handle" class="' + n + 'slider-handle" role="slider" tabindex="-1"></div></div>'
            },
            reset: function() {
                this.value(this._initValue).repaint()
            },
            postRender: function() {
                var e, i, o, a, s, l, c = this;
                e = c._minValue,
                i = c._maxValue,
                "v" == c.settings.orientation ? (o = "screenY",
                a = "top",
                s = "height",
                l = "h") : (o = "screenX",
                a = "left",
                s = "width",
                l = "w"),
                c._super(),
                function(e, t) {
                    function n(n) {
                        var i;
                        i = c.value(),
                        i = function(e, t, n) {
                            return n * (t - e) - e
                        }(e, t, function(e, t, n) {
                            return (n + e) / (t - e)
                        }(e, t, i) + .05 * n),
                        i = r(i, e, t),
                        c.value(i),
                        c.fire("dragstart", {
                            value: i
                        }),
                        c.fire("drag", {
                            value: i
                        }),
                        c.fire("dragend", {
                            value: i
                        })
                    }
                    c.on("keydown", (function(e) {
                        switch (e.keyCode) {
                        case 37:
                        case 38:
                            n(-1);
                            break;
                        case 39:
                        case 40:
                            n(1)
                        }
                    }
                    ))
                }(e, i, c.getEl("handle")),
                function(e, i, u) {
                    var d, f, h, p, m;
                    c._dragHelper = new t(c._id,{
                        handle: c._id + "-handle",
                        start: function(e) {
                            d = e[o],
                            f = parseInt(c.getEl("handle").style[a], 10),
                            h = (c.layoutRect()[l] || 100) - n.getSize(u)[s],
                            c.fire("dragstart", {
                                value: m
                            })
                        },
                        drag: function(t) {
                            var n = t[o] - d;
                            p = r(f + n, 0, h),
                            u.style[a] = p + "px",
                            m = e + p / h * (i - e),
                            c.value(m),
                            c.tooltip().text("" + c.settings.previewFilter(m)).show().moveRel(u, "bc tc"),
                            c.fire("drag", {
                                value: m
                            })
                        },
                        stop: function() {
                            c.tooltip().hide(),
                            c.fire("dragend", {
                                value: m
                            })
                        }
                    })
                }(e, i, c.getEl("handle"))
            },
            repaint: function() {
                this._super(),
                o(this, this.value())
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:value", (function(t) {
                    o(e, t.value)
                }
                )),
                e._super()
            }
        })
    }
    )),
    n(Kt, [De], (function(e) {
        return e.extend({
            renderHtml: function() {
                var e = this;
                return e.classes.add("spacer"),
                e.canFocus = !1,
                '<div id="' + e._id + '" class="' + e.classes + '"></div>'
            }
        })
    }
    )),
    n(Gt, [zt, pe, h], (function(e, t, n) {
        return e.extend({
            Defaults: {
                classes: "widget btn splitbtn",
                role: "button"
            },
            repaint: function() {
                var e, r, i = this, o = i.getEl(), a = i.layoutRect();
                return i._super(),
                e = o.firstChild,
                r = o.lastChild,
                n(e).css({
                    width: a.w - t.getSize(r).width,
                    height: a.h - 2
                }),
                n(r).css({
                    height: a.h - 2
                }),
                i
            },
            activeMenu: function(e) {
                n(this.getEl().lastChild).toggleClass(this.classPrefix + "active", e)
            },
            renderHtml: function() {
                var e, t = this, n = t._id, r = t.classPrefix, i = t.state.get("icon"), o = t.state.get("text"), a = "";
                return (e = t.settings.image) ? (i = "none",
                "string" != typeof e && (e = window.getSelection ? e[0] : e[1]),
                e = " style=\"background-image: url('" + e + "')\"") : e = "",
                i = t.settings.icon ? r + "ico " + r + "i-" + i : "",
                o && (t.classes.add("btn-has-text"),
                a = '<span class="' + r + 'txt">' + t.encode(o) + "</span>"),
                '<div id="' + n + '" class="' + t.classes + '" role="button" tabindex="-1"><button type="button" hidefocus="1" tabindex="-1">' + (i ? '<i class="' + i + '"' + e + "></i>" : "") + a + '</button><button type="button" class="' + r + 'open" hidefocus="1" tabindex="-1">' + (t._menuBtnText ? (i ? " " : "") + t._menuBtnText : "") + ' <i class="' + r + 'caret"></i></button></div>'
            },
            postRender: function() {
                var e = this
                  , t = e.settings.onclick;
                return e.on("click", (function(e) {
                    var n = e.target;
                    if (e.control == this)
                        for (; n; ) {
                            if (e.aria && "down" != e.aria.key || "BUTTON" == n.nodeName && -1 == n.className.indexOf("open"))
                                return e.stopImmediatePropagation(),
                                void (t && t.call(this, e));
                            n = n.parentNode
                        }
                }
                )),
                delete e.settings.onclick,
                e._super()
            }
        })
    }
    )),
    n(Jt, [Dt], (function(e) {
        return e.extend({
            Defaults: {
                containerClass: "stack-layout",
                controlClass: "stack-layout-item",
                endClass: "break"
            },
            isNative: function() {
                return !0
            }
        })
    }
    )),
    n(Qt, [Ne, h, pe], (function(e, t, n) {
        return e.extend({
            Defaults: {
                layout: "absolute",
                defaults: {
                    type: "panel"
                }
            },
            activateTab: function(e) {
                var n;
                this.activeTabId && (n = this.getEl(this.activeTabId),
                t(n).removeClass(this.classPrefix + "active"),
                n.setAttribute("aria-selected", "false")),
                this.activeTabId = "t" + e,
                (n = this.getEl("t" + e)).setAttribute("aria-selected", "true"),
                t(n).addClass(this.classPrefix + "active"),
                this.items()[e].show().fire("showtab"),
                this.reflow(),
                this.items().each((function(t, n) {
                    e != n && t.hide()
                }
                ))
            },
            renderHtml: function() {
                var e = this
                  , t = e._layout
                  , n = ""
                  , r = e.classPrefix;
                return e.preRender(),
                t.preRender(e),
                e.items().each((function(t, i) {
                    var o = e._id + "-t" + i;
                    t.aria("role", "tabpanel"),
                    t.aria("labelledby", o),
                    n += '<div id="' + o + '" class="' + r + 'tab" unselectable="on" role="tab" aria-controls="' + t._id + '" aria-selected="false" tabIndex="-1">' + e.encode(t.settings.title) + "</div>"
                }
                )),
                '<div id="' + e._id + '" class="' + e.classes + '" hidefocus="1" tabindex="-1"><div id="' + e._id + '-head" class="' + r + 'tabs" role="tablist">' + n + '</div><div id="' + e._id + '-body" class="' + e.bodyClasses + '">' + t.renderHtml(e) + "</div></div>"
            },
            postRender: function() {
                var e = this;
                e._super(),
                e.settings.activeTab = e.settings.activeTab || 0,
                e.activateTab(e.settings.activeTab),
                this.on("click", (function(t) {
                    var n = t.target.parentNode;
                    if (n && n.id == e._id + "-head")
                        for (var r = n.childNodes.length; r--; )
                            n.childNodes[r] == t.target && e.activateTab(r)
                }
                ))
            },
            initLayoutRect: function() {
                var e, t, r, i = this;
                t = (t = n.getSize(i.getEl("head")).width) < 0 ? 0 : t,
                r = 0,
                i.items().each((function(e) {
                    t = Math.max(t, e.layoutRect().minW),
                    r = Math.max(r, e.layoutRect().minH)
                }
                )),
                i.items().each((function(e) {
                    e.settings.x = 0,
                    e.settings.y = 0,
                    e.settings.w = t,
                    e.settings.h = r,
                    e.layoutRect({
                        x: 0,
                        y: 0,
                        w: t,
                        h: r
                    })
                }
                ));
                var o = n.getSize(i.getEl("head")).height;
                return i.settings.minWidth = t,
                i.settings.minHeight = r + o,
                (e = i._super()).deltaH += o,
                e.innerH = e.h - e.deltaH,
                e
            }
        })
    }
    )),
    n(Zt, [De, f, pe], (function(e, t, n) {
        return e.extend({
            init: function(e) {
                var t = this;
                t._super(e),
                t.classes.add("textbox"),
                e.multiline ? t.classes.add("multiline") : (t.on("keydown", (function(e) {
                    var n;
                    13 == e.keyCode && (e.preventDefault(),
                    t.parents().reverse().each((function(e) {
                        if (e.toJSON)
                            return n = e,
                            !1
                    }
                    )),
                    t.fire("submit", {
                        data: n.toJSON()
                    }))
                }
                )),
                t.on("keyup", (function(e) {
                    t.state.set("value", e.target.value)
                }
                )))
            },
            repaint: function() {
                var e, t, n, r, i, o = this, a = 0;
                e = o.getEl().style,
                t = o._layoutRect,
                i = o._lastRepaintRect || {};
                var s = document;
                return !o.settings.multiline && s.all && (!s.documentMode || s.documentMode <= 8) && (e.lineHeight = t.h - a + "px"),
                r = (n = o.borderBox).left + n.right + 8,
                a = n.top + n.bottom + (o.settings.multiline ? 8 : 0),
                t.x !== i.x && (e.left = t.x + "px",
                i.x = t.x),
                t.y !== i.y && (e.top = t.y + "px",
                i.y = t.y),
                t.w !== i.w && (e.width = t.w - r + "px",
                i.w = t.w),
                t.h !== i.h && (e.height = t.h - a + "px",
                i.h = t.h),
                o._lastRepaintRect = i,
                o.fire("repaint", {}, !1),
                o
            },
            renderHtml: function() {
                var e, r, i = this, o = i.settings;
                return e = {
                    id: i._id,
                    hidefocus: "1"
                },
                t.each(["rows", "spellcheck", "maxLength", "size", "readonly", "min", "max", "step", "list", "pattern", "placeholder", "required", "multiple"], (function(t) {
                    e[t] = o[t]
                }
                )),
                i.disabled() && (e.disabled = "disabled"),
                o.subtype && (e.type = o.subtype),
                (r = n.create(o.multiline ? "textarea" : "input", e)).value = i.state.get("value"),
                r.className = i.classes,
                r.outerHTML
            },
            value: function(e) {
                return arguments.length ? (this.state.set("value", e),
                this) : (this.state.get("rendered") && this.state.set("value", this.getEl().value),
                this.state.get("value"))
            },
            postRender: function() {
                var e = this;
                e.getEl().value = e.state.get("value"),
                e._super(),
                e.$el.on("change", (function(t) {
                    e.state.set("value", t.target.value),
                    e.fire("change", t)
                }
                ))
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:value", (function(t) {
                    e.getEl().value != t.value && (e.getEl().value = t.value)
                }
                )),
                e.state.on("change:disabled", (function(t) {
                    e.getEl().disabled = t.value
                }
                )),
                e._super()
            },
            remove: function() {
                this.$el.off(),
                this._super()
            }
        })
    }
    )),
    n("tinymce/Register", [], (function() {
        var e = this || window;
        return "function" == typeof e.define && (e.define.amd || e.define("ephox/tinymce", [], (function() {
            return e.tinymce
        }
        ))),
        "object" == typeof module && (module.exports = window.tinymce),
        {}
    }
    )),
    function(n) {
        var r, o, a, s, l;
        for (r = 0; r < n.length; r++) {
            o = e,
            s = (a = n[r]).split(/[.\/]/);
            for (var c = 0; c < s.length - 1; ++c)
                o[s[c]] === t && (o[s[c]] = {}),
                o = o[s[c]];
            o[s[s.length - 1]] = i[a]
        }
        if (e.AMDLC_TESTS) {
            for (a in l = e.privateModules || {},
            i)
                l[a] = i[a];
            for (r = 0; r < n.length; r++)
                delete l[n[r]];
            e.privateModules = l
        }
    }([o, a, s, l, c, u, f, h, p, m, v, b, C, x, _, k, T, R, A, B, D, L, P, O, V, $, X, Q, oe, ae, se, le, ue, fe, he, ve, ye, be, Ce, xe, we, Ee, Ne, _e, Se, ke, Te, Re, Ae, Be, De, Le, Me, Pe, Ie, ze, nt, rt, it, ot, at, st, lt, ct, ut, dt, ft, ht, pt, mt, gt, vt, yt, bt, Ct, xt, wt, Et, Nt, _t, St, kt, Rt, At, Bt, Dt, Lt, Mt, Pt, Ot, Ht, It, Ft, zt, Ut, Wt, Vt, $t, qt, jt, Yt, Xt, Kt, Gt, Jt, Qt, Zt])
}(window);
