! function(t, e) { "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e() }(this, (function(t, e, o) { "use strict";

    function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function n(t) { var e = t.getBoundingClientRect(),
            o = {}; for (var i in e) o[i] = e[i]; if (t.ownerDocument !== document) { var r = t.ownerDocument.defaultView.frameElement; if (r) { var s = n(r);
                o.top += s.top, o.bottom += s.top, o.left += s.left, o.right += s.left } } return o }

    function r(t) { var e = (getComputedStyle(t) || {}).position,
            o = []; if ("fixed" === e) return [t]; for (var i = t;
            (i = i.parentNode) && i && 1 === i.nodeType;) { var n = void 0; try { n = getComputedStyle(i) } catch (t) {} if (null == n) return o.push(i), o; var r = n,
                s = r.overflow,
                a = r.overflowX,
                l = r.overflowY; /(auto|scroll)/.test(s + l + a) && ("absolute" !== e || ["relative", "absolute", "fixed"].indexOf(n.position) >= 0) && o.push(i) } return o.push(t.ownerDocument.body), t.ownerDocument !== document && o.push(t.ownerDocument.defaultView), o }

    function s() { x && document.body.removeChild(x), x = null }

    function a(t) { var e = void 0;
        t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument; var o = e.documentElement,
            i = n(t),
            r = S(); return i.top -= r.top, i.left -= r.left, void 0 === i.width && (i.width = document.body.scrollWidth - i.left - i.right), void 0 === i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - o.clientTop, i.left = i.left - o.clientLeft, i.right = e.body.clientWidth - i.width - i.left, i.bottom = e.body.clientHeight - i.height - i.top, i }

    function l(t) { return t.offsetParent || document.documentElement }

    function h() { var t = document.createElement("div");
        t.style.width = "100%", t.style.height = "200px"; var e = document.createElement("div");
        f(e.style, { position: "absolute", top: 0, left: 0, pointerEvents: "none", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), e.appendChild(t), document.body.appendChild(e); var o = t.offsetWidth;
        e.style.overflow = "scroll"; var i = t.offsetWidth;
        o === i && (i = e.clientWidth), document.body.removeChild(e); var n = o - i; return { width: n, height: n } }

    function f() { var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
            e = []; return Array.prototype.push.apply(e, arguments), e.slice(1).forEach((function(e) { if (e)
                for (var o in e)({}).hasOwnProperty.call(e, o) && (t[o] = e[o]) })), t }

    function d(t, e) { if (void 0 !== t.classList) e.split(" ").forEach((function(e) { e.trim() && t.classList.remove(e) }));
        else { var o = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
                i = c(t).replace(o, " ");
            g(t, i) } }

    function p(t, e) { if (void 0 !== t.classList) e.split(" ").forEach((function(e) { e.trim() && t.classList.add(e) }));
        else { d(t, e); var o = c(t) + " " + e;
            g(t, o) } }

    function u(t, e) { if (void 0 !== t.classList) return t.classList.contains(e); var o = c(t); return new RegExp("(^| )" + e + "( |$)", "gi").test(o) }

    function c(t) { return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className }

    function g(t, e) { t.setAttribute("class", e) }

    function v(t, e, o) { o.forEach((function(o) {-1 === e.indexOf(o) && u(t, o) && d(t, o) })), e.forEach((function(e) { u(t, e) || p(t, e) })) }

    function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function m(t, e) { var o = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2]; return t + o >= e && e >= t - o }

    function b() { return "undefined" != typeof performance && void 0 !== performance.now ? performance.now() : +new Date }

    function y() { for (var t = { top: 0, left: 0 }, e = arguments.length, o = Array(e), i = 0; e > i; i++) o[i] = arguments[i]; return o.forEach((function(e) { var o = e.top,
                i = e.left; "string" == typeof o && (o = parseFloat(o, 10)), "string" == typeof i && (i = parseFloat(i, 10)), t.top += o, t.left += i })), t }

    function w(t, e) { return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t }

    function C(t, e) { return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), void 0 !== e.nodeType && function() { var t = e,
                o = a(e),
                i = o,
                n = getComputedStyle(e); if (e = [i.left, i.top, o.width + i.left, o.height + i.top], t.ownerDocument !== document) { var r = t.ownerDocument.defaultView;
                e[0] += r.pageXOffset, e[1] += r.pageYOffset, e[2] += r.pageXOffset, e[3] += r.pageYOffset }
            q.forEach((function(t, o) { "Top" === (t = t[0].toUpperCase() + t.substr(1)) || "Left" === t ? e[o] += parseFloat(n["border" + t + "Width"]) : e[o] -= parseFloat(n["border" + t + "Width"]) })) }(), e } var O = function() {
            function t(t, e) { for (var o = 0; o < e.length; o++) { var i = e[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } return function(e, o, i) { return o && t(e.prototype, o), i && t(e, i), e } }(),
        E = void 0;
    void 0 === E && (E = { modules: [] }); var x = null,
        A = function() { var t = 0; return function() { return ++t } }(),
        T = {},
        S = function() { var t = x;
            t || ((t = document.createElement("div")).setAttribute("data-tether-id", A()), f(t.style, { top: 0, left: 0, position: "absolute" }), document.body.appendChild(t), x = t); var e = t.getAttribute("data-tether-id"); return void 0 === T[e] && (T[e] = n(t), W((function() { delete T[e] }))), T[e] },
        P = [],
        W = function(t) { P.push(t) },
        M = function() { for (var t = void 0; t = P.pop();) t() },
        _ = function() {
            function t() { i(this, t) } return O(t, [{ key: "on", value: function(t, e, o) { var i = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                    void 0 === this.bindings && (this.bindings = {}), void 0 === this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({ handler: e, ctx: o, once: i }) } }, { key: "once", value: function(t, e, o) { this.on(t, e, o, !0) } }, { key: "off", value: function(t, e) { if (void 0 !== this.bindings && void 0 !== this.bindings[t])
                        if (void 0 === e) delete this.bindings[t];
                        else
                            for (var o = 0; o < this.bindings[t].length;) this.bindings[t][o].handler === e ? this.bindings[t].splice(o, 1) : ++o } }, { key: "trigger", value: function(t) { if (void 0 !== this.bindings && this.bindings[t]) { for (var e = 0, o = arguments.length, i = Array(o > 1 ? o - 1 : 0), n = 1; o > n; n++) i[n - 1] = arguments[n]; for (; e < this.bindings[t].length;) { var r = this.bindings[t][e],
                                s = r.handler,
                                a = r.ctx,
                                l = r.once,
                                h = a;
                            void 0 === h && (h = this), s.apply(h, i), l ? this.bindings[t].splice(e, 1) : ++e } } } }]), t }();
    E.Utils = { getActualBoundingClientRect: n, getScrollParents: r, getBounds: a, getOffsetParent: l, extend: f, addClass: p, removeClass: d, hasClass: u, updateClasses: v, defer: W, flush: M, uniqueId: A, Evented: _, getScrollBarSize: h, removeUtilElements: s }; var k = function(t, e) { if (Array.isArray(t)) return t; if (Symbol.iterator in Object(t)) return function(t, e) { var o = [],
                    i = !0,
                    n = !1,
                    r = void 0; try { for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0); } catch (t) { n = !0, r = t } finally { try {!i && a.return && a.return() } finally { if (n) throw r } } return o }(t, e); throw new TypeError("Invalid attempt to destructure non-iterable instance") },
        B = (O = function() {
            function t(t, e) { for (var o = 0; o < e.length; o++) { var i = e[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } return function(e, o, i) { return o && t(e.prototype, o), i && t(e, i), e } }(), function(t, e, o) { for (var i = !0; i;) { var n = t,
                    r = e,
                    s = o;
                i = !1, null === n && (n = Function.prototype); var a = Object.getOwnPropertyDescriptor(n, r); if (void 0 !== a) { if ("value" in a) return a.value; var l = a.get; if (void 0 === l) return; return l.call(s) } var h = Object.getPrototypeOf(n); if (null === h) return;
                t = h, e = r, o = s, i = !0, a = h = void 0 } }); if (void 0 === E) throw new Error("You must include the utils.js file before tether.js"); var r = (I = E.Utils).getScrollParents,
        l = (a = I.getBounds, I.getOffsetParent),
        p = (f = I.extend, I.addClass),
        d = I.removeClass,
        h = (v = I.updateClasses, W = I.defer, M = I.flush, I.getScrollBarSize),
        s = I.removeUtilElements,
        z = function() { if ("undefined" == typeof document) return ""; for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], o = 0; o < e.length; ++o) { var i = e[o]; if (void 0 !== t.style[i]) return i } }(),
        j = [],
        Y = function() { j.forEach((function(t) { t.position(!1) })), M() };! function() { var t = null,
            e = null,
            o = null,
            i = function i() { return void 0 !== e && e > 16 ? (e = Math.min(e - 16, 250), void(o = setTimeout(i, 250))) : void(void 0 !== t && b() - t < 10 || (null != o && (clearTimeout(o), o = null), t = b(), Y(), e = b() - t)) }; "undefined" != typeof window && void 0 !== window.addEventListener && ["resize", "scroll", "touchmove"].forEach((function(t) { window.addEventListener(t, i) })) }(); var L = { center: "center", left: "right", right: "left" },
        D = { middle: "middle", top: "bottom", bottom: "top" },
        X = { top: 0, left: 0, middle: "50%", center: "50%", bottom: "100%", right: "100%" },
        F = function(t, e) { var o = t.left,
                i = t.top; return "auto" === o && (o = L[e.left]), "auto" === i && (i = D[e.top]), { left: o, top: i } },
        H = function(t) { var e = t.left,
                o = t.top; return void 0 !== X[t.left] && (e = X[t.left]), void 0 !== X[t.top] && (o = X[t.top]), { left: e, top: o } },
        N = function(t) { var e = t.split(" "),
                o = k(e, 2); return { top: o[0], left: o[1] } },
        U = N,
        V = function(t) {
            function e(t) { var o = this;
                i(this, e), B(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), j.push(this), this.history = [], this.setOptions(t, !1), E.modules.forEach((function(t) { void 0 !== t.initialize && t.initialize.call(o) })), this.position() } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), O(e, [{ key: "getClass", value: function() { var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                        e = this.options.classes; return void 0 !== e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t } }, { key: "setOptions", value: function(t) { var e = this,
                        o = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
                    this.options = f({ offset: "0 0", targetOffset: "0 0", targetAttachment: "auto auto", classPrefix: "tether" }, t); var i = this.options,
                        n = i.element,
                        s = i.target,
                        a = i.targetModifier; if (this.element = n, this.target = s, this.targetModifier = a, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach((function(t) { if (void 0 === e[t]) throw new Error("Tether Error: Both element and target must be defined");
                            void 0 !== e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t])) })), p(this.element, this.getClass("element")), !1 !== this.options.addTargetClasses && p(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                    this.targetAttachment = U(this.options.targetAttachment), this.attachment = U(this.options.attachment), this.offset = N(this.options.offset), this.targetOffset = N(this.options.targetOffset), void 0 !== this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = r(this.target), !1 !== this.options.enabled && this.enable(o) } }, { key: "getTargetBounds", value: function() { if (void 0 === this.targetModifier) return a(this.target); if ("visible" === this.targetModifier) return this.target === document.body ? { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth } : ((r = { height: (t = a(this.target)).height, width: t.width, top: t.top, left: t.left }).height = Math.min(r.height, t.height - (pageYOffset - t.top)), r.height = Math.min(r.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), r.height = Math.min(innerHeight, r.height), r.height -= 2, r.width = Math.min(r.width, t.width - (pageXOffset - t.left)), r.width = Math.min(r.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), r.width = Math.min(innerWidth, r.width), r.width -= 2, r.top < pageYOffset && (r.top = pageYOffset), r.left < pageXOffset && (r.left = pageXOffset), r); if ("scroll-handle" === this.targetModifier) { var t = void 0,
                            e = this.target;
                        e === document.body ? (e = document.documentElement, t = { left: pageXOffset, top: pageYOffset, height: innerHeight, width: innerWidth }) : t = a(e); var o = getComputedStyle(e),
                            i = 0;
                        (e.scrollWidth > e.clientWidth || [o.overflow, o.overflowX].indexOf("scroll") >= 0 || this.target !== document.body) && (i = 15); var n = t.height - parseFloat(o.borderTopWidth) - parseFloat(o.borderBottomWidth) - i,
                            r = { width: 15, height: .975 * n * (n / e.scrollHeight), left: t.left + t.width - parseFloat(o.borderLeftWidth) - 15 },
                            s = 0;
                        408 > n && this.target === document.body && (s = -11e-5 * Math.pow(n, 2) - .00727 * n + 22.58), this.target !== document.body && (r.height = Math.max(r.height, 24)); var l = this.target.scrollTop / (e.scrollHeight - n); return r.top = l * (n - r.height - s) + t.top + parseFloat(o.borderTopWidth), this.target === document.body && (r.height = Math.max(r.height, 24)), r } } }, { key: "clearCache", value: function() { this._cache = {} } }, { key: "cache", value: function(t, e) { return void 0 === this._cache && (this._cache = {}), void 0 === this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t] } }, { key: "enable", value: function() { var t = this,
                        e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];!1 !== this.options.addTargetClasses && p(this.target, this.getClass("enabled")), p(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach((function(e) { e !== t.target.ownerDocument && e.addEventListener("scroll", t.position) })), e && this.position() } }, { key: "disable", value: function() { var t = this;
                    d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !1, void 0 !== this.scrollParents && this.scrollParents.forEach((function(e) { e.removeEventListener("scroll", t.position) })) } }, { key: "destroy", value: function() { var t = this;
                    this.disable(), j.forEach((function(e, o) { e === t && j.splice(o, 1) })), 0 === j.length && s() } }, { key: "updateAttachClasses", value: function(t, e) { var o = this;
                    t = t || this.attachment, e = e || this.targetAttachment;
                    void 0 !== this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), void 0 === this._addAttachClasses && (this._addAttachClasses = []); var i = this._addAttachClasses;
                    t.top && i.push(this.getClass("element-attached") + "-" + t.top), t.left && i.push(this.getClass("element-attached") + "-" + t.left), e.top && i.push(this.getClass("target-attached") + "-" + e.top), e.left && i.push(this.getClass("target-attached") + "-" + e.left); var n = [];
                    ["left", "top", "bottom", "right", "middle", "center"].forEach((function(t) { n.push(o.getClass("element-attached") + "-" + t), n.push(o.getClass("target-attached") + "-" + t) })), W((function() { void 0 !== o._addAttachClasses && (v(o.element, o._addAttachClasses, n), !1 !== o.options.addTargetClasses && v(o.target, o._addAttachClasses, n), delete o._addAttachClasses) })) } }, { key: "position", value: function() { var t = this,
                        e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0]; if (this.enabled) { this.clearCache(); var o = F(this.targetAttachment, this.attachment);
                        this.updateAttachClasses(this.attachment, o); var i = this.cache("element-bounds", (function() { return a(t.element) })),
                            n = i.width,
                            r = i.height; if (0 === n && 0 === r && void 0 !== this.lastSize) { var s = this.lastSize;
                            n = s.width, r = s.height } else this.lastSize = { width: n, height: r }; var f = this.cache("target-bounds", (function() { return t.getTargetBounds() })),
                            d = f,
                            p = w(H(this.attachment), { width: n, height: r }),
                            u = w(H(o), d),
                            c = w(this.offset, { width: n, height: r }),
                            g = w(this.targetOffset, d);
                        p = y(p, c), u = y(u, g); for (var v = f.left + u.left - p.left, m = f.top + u.top - p.top, b = 0; b < E.modules.length; ++b) { var C = E.modules[b].position.call(this, { left: v, top: m, targetAttachment: o, targetPos: f, elementPos: i, offset: p, targetOffset: u, manualOffset: c, manualTargetOffset: g, scrollbarSize: T, attachment: this.attachment }); if (!1 === C) return !1;
                            void 0 !== C && "object" == typeof C && (m = C.top, v = C.left) } var O = { page: { top: m, left: v }, viewport: { top: m - pageYOffset, bottom: pageYOffset - m - r + innerHeight, left: v - pageXOffset, right: pageXOffset - v - n + innerWidth } },
                            x = this.target.ownerDocument,
                            A = x.defaultView,
                            T = void 0; return x.body.scrollWidth > A.innerWidth && (T = this.cache("scrollbar-size", h), O.viewport.bottom -= T.height), x.body.scrollHeight > A.innerHeight && (T = this.cache("scrollbar-size", h), O.viewport.right -= T.width), (-1 === ["", "static"].indexOf(x.body.style.position) || -1 === ["", "static"].indexOf(x.body.parentElement.style.position)) && (O.page.bottom = x.body.scrollHeight - m - r, O.page.right = x.body.scrollWidth - v - n), void 0 !== this.options.optimizations && !1 !== this.options.optimizations.moveElement && void 0 === this.targetModifier && function() { var e = t.cache("target-offsetparent", (function() { return l(t.target) })),
                                o = t.cache("target-offsetparent-bounds", (function() { return a(e) })),
                                i = getComputedStyle(e),
                                n = o,
                                r = {}; if (["Top", "Left", "Bottom", "Right"].forEach((function(t) { r[t.toLowerCase()] = parseFloat(i["border" + t + "Width"]) })), o.right = x.body.scrollWidth - o.left - n.width + r.right, o.bottom = x.body.scrollHeight - o.top - n.height + r.bottom, O.page.top >= o.top + r.top && O.page.bottom >= o.bottom && O.page.left >= o.left + r.left && O.page.right >= o.right) { var s = e.scrollTop,
                                    h = e.scrollLeft;
                                O.offset = { top: O.page.top - o.top + s - r.top, left: O.page.left - o.left + h - r.left } } }(), this.move(O), this.history.unshift(O), this.history.length > 3 && this.history.pop(), e && M(), !0 } } }, { key: "move", value: function(t) { var e = this; if (void 0 !== this.element.parentNode) { var o = {}; for (var i in t)
                            for (var n in o[i] = {}, t[i]) { for (var r = !1, s = 0; s < this.history.length; ++s) { var a = this.history[s]; if (void 0 !== a[i] && !m(a[i][n], t[i][n])) { r = !0; break } }
                                r || (o[i][n] = !0) }
                        var h = { top: "", left: "", right: "", bottom: "" },
                            d = function(t, o) { if (!1 !== (void 0 !== e.options.optimizations ? e.options.optimizations.gpu : null)) { var i = void 0,
                                        n = void 0;
                                    t.top ? (h.top = 0, i = o.top) : (h.bottom = 0, i = -o.bottom), t.left ? (h.left = 0, n = o.left) : (h.right = 0, n = -o.right), h[z] = "translateX(" + Math.round(n) + "px) translateY(" + Math.round(i) + "px)", "msTransform" !== z && (h[z] += " translateZ(0)") } else t.top ? h.top = o.top + "px" : h.bottom = o.bottom + "px", t.left ? h.left = o.left + "px" : h.right = o.right + "px" },
                            p = !1; if ((o.page.top || o.page.bottom) && (o.page.left || o.page.right) ? (h.position = "absolute", d(o.page, t.page)) : (o.viewport.top || o.viewport.bottom) && (o.viewport.left || o.viewport.right) ? (h.position = "fixed", d(o.viewport, t.viewport)) : void 0 !== o.offset && o.offset.top && o.offset.left ? function() { h.position = "absolute"; var i = e.cache("target-offsetparent", (function() { return l(e.target) }));
                                l(e.element) !== i && W((function() { e.element.parentNode.removeChild(e.element), i.appendChild(e.element) })), d(o.offset, t.offset), p = !0 }() : (h.position = "absolute", d({ top: !0, left: !0 }, t.page)), !p) { for (var u = !0, c = this.element.parentNode; c && 1 === c.nodeType && "BODY" !== c.tagName;) { if ("static" !== getComputedStyle(c).position) { u = !1; break }
                                c = c.parentNode }
                            u || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element)) } var g = {},
                            v = !1; for (var n in h) { var b = h[n];
                            this.element.style[n] !== b && (v = !0, g[n] = b) }
                        v && W((function() { f(e.element.style, g) })) } } }]), e }(_);
    V.modules = [], E.position = Y; var R = f(V, E),
        f = (k = function(t, e) { if (Array.isArray(t)) return t; if (Symbol.iterator in Object(t)) return function(t, e) { var o = [],
                    i = !0,
                    n = !1,
                    r = void 0; try { for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0); } catch (t) { n = !0, r = t } finally { try {!i && a.return && a.return() } finally { if (n) throw r } } return o }(t, e); throw new TypeError("Invalid attempt to destructure non-iterable instance") }, a = (I = E.Utils).getBounds, I.extend),
        q = (v = I.updateClasses, W = I.defer, ["left", "top", "right", "bottom"]);
    E.modules.push({ position: function(t) { var e = this,
                o = t.top,
                i = t.left,
                n = t.targetAttachment; if (!this.options.constraints) return !0; var r = this.cache("element-bounds", (function() { return a(e.element) })),
                s = r.height,
                l = r.width; if (0 === l && 0 === s && void 0 !== this.lastSize) { var h = this.lastSize;
                l = h.width, s = h.height } var d = this.cache("target-bounds", (function() { return e.getTargetBounds() })),
                p = d.height,
                u = d.width,
                c = [this.getClass("pinned"), this.getClass("out-of-bounds")];
            this.options.constraints.forEach((function(t) { var e = t.outOfBoundsClass,
                    o = t.pinnedClass;
                e && c.push(e), o && c.push(o) })), c.forEach((function(t) {
                ["left", "top", "right", "bottom"].forEach((function(e) { c.push(t + "-" + e) })) })); var g = [],
                m = f({}, n),
                b = f({}, this.attachment); return this.options.constraints.forEach((function(t) { var r = t.to,
                    a = t.attachment,
                    h = t.pin;
                void 0 === a && (a = ""); var f = void 0,
                    d = void 0; if (a.indexOf(" ") >= 0) { var c = a.split(" "),
                        v = k(c, 2);
                    d = v[0], f = v[1] } else f = d = a; var y = C(e, r);
                ("target" === d || "both" === d) && (o < y[1] && "top" === m.top && (o += p, m.top = "bottom"), o + s > y[3] && "bottom" === m.top && (o -= p, m.top = "top")), "together" === d && ("top" === m.top && ("bottom" === b.top && o < y[1] ? (o += p, m.top = "bottom", o += s, b.top = "top") : "top" === b.top && o + s > y[3] && o - (s - p) >= y[1] && (o -= s - p, m.top = "bottom", b.top = "bottom")), "bottom" === m.top && ("top" === b.top && o + s > y[3] ? (o -= p, m.top = "top", o -= s, b.top = "bottom") : "bottom" === b.top && o < y[1] && o + (2 * s - p) <= y[3] && (o += s - p, m.top = "top", b.top = "top")), "middle" === m.top && (o + s > y[3] && "top" === b.top ? (o -= s, b.top = "bottom") : o < y[1] && "bottom" === b.top && (o += s, b.top = "top"))), ("target" === f || "both" === f) && (i < y[0] && "left" === m.left && (i += u, m.left = "right"), i + l > y[2] && "right" === m.left && (i -= u, m.left = "left")), "together" === f && (i < y[0] && "left" === m.left ? "right" === b.left ? (i += u, m.left = "right", i += l, b.left = "left") : "left" === b.left && (i += u, m.left = "right", i -= l, b.left = "right") : i + l > y[2] && "right" === m.left ? "left" === b.left ? (i -= u, m.left = "left", i -= l, b.left = "right") : "right" === b.left && (i -= u, m.left = "left", i += l, b.left = "left") : "center" === m.left && (i + l > y[2] && "left" === b.left ? (i -= l, b.left = "right") : i < y[0] && "right" === b.left && (i += l, b.left = "left"))), ("element" === d || "both" === d) && (o < y[1] && "bottom" === b.top && (o += s, b.top = "top"), o + s > y[3] && "top" === b.top && (o -= s, b.top = "bottom")), ("element" === f || "both" === f) && (i < y[0] && ("right" === b.left ? (i += l, b.left = "left") : "center" === b.left && (i += l / 2, b.left = "left")), i + l > y[2] && ("left" === b.left ? (i -= l, b.left = "right") : "center" === b.left && (i -= l / 2, b.left = "right"))), "string" == typeof h ? h = h.split(",").map((function(t) { return t.trim() })) : !0 === h && (h = ["top", "left", "right", "bottom"]), h = h || []; var w = [],
                    O = [];
                o < y[1] && (h.indexOf("top") >= 0 ? (o = y[1], w.push("top")) : O.push("top")), o + s > y[3] && (h.indexOf("bottom") >= 0 ? (o = y[3] - s, w.push("bottom")) : O.push("bottom")), i < y[0] && (h.indexOf("left") >= 0 ? (i = y[0], w.push("left")) : O.push("left")), i + l > y[2] && (h.indexOf("right") >= 0 ? (i = y[2] - l, w.push("right")) : O.push("right")), w.length && function() { var t;
                    t = void 0 !== e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), g.push(t), w.forEach((function(e) { g.push(t + "-" + e) })) }(), O.length && function() { var t;
                    t = void 0 !== e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), g.push(t), O.forEach((function(e) { g.push(t + "-" + e) })) }(), (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) && (b.left = m.left = !1), (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) && (b.top = m.top = !1), (m.top !== n.top || m.left !== n.left || b.top !== e.attachment.top || b.left !== e.attachment.left) && (e.updateAttachClasses(b, m), e.trigger("update", { attachment: b, targetAttachment: m })) })), W((function() {!1 !== e.options.addTargetClasses && v(e.target, g, c), v(e.element, g, c) })), { top: o, left: i } } }); var I, a = (I = E.Utils).getBounds,
        v = I.updateClasses;
    W = I.defer;
    E.modules.push({ position: function(t) { var e = this,
                o = t.top,
                i = t.left,
                n = this.cache("element-bounds", (function() { return a(e.element) })),
                r = n.height,
                s = n.width,
                l = this.getTargetBounds(),
                h = o + r,
                f = i + s,
                d = [];
            o <= l.bottom && h >= l.top && ["left", "right"].forEach((function(t) { var e = l[t];
                (e === i || e === f) && d.push(t) })), i <= l.right && f >= l.left && ["top", "bottom"].forEach((function(t) { var e = l[t];
                (e === o || e === h) && d.push(t) })); var p = [],
                u = []; return p.push(this.getClass("abutted")), ["left", "top", "right", "bottom"].forEach((function(t) { p.push(e.getClass("abutted") + "-" + t) })), d.length && u.push(this.getClass("abutted")), d.forEach((function(t) { u.push(e.getClass("abutted") + "-" + t) })), W((function() {!1 !== e.options.addTargetClasses && v(e.target, u, p), v(e.element, u, p) })), !0 } });
    k = function(t, e) { if (Array.isArray(t)) return t; if (Symbol.iterator in Object(t)) return function(t, e) { var o = [],
                i = !0,
                n = !1,
                r = void 0; try { for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0); } catch (t) { n = !0, r = t } finally { try {!i && a.return && a.return() } finally { if (n) throw r } } return o }(t, e); throw new TypeError("Invalid attempt to destructure non-iterable instance") }; return E.modules.push({ position: function(t) { var e = t.top,
                o = t.left; if (this.options.shift) { var i = this.options.shift; "function" == typeof this.options.shift && (i = this.options.shift.call(this, { top: e, left: o })); var n = void 0,
                    r = void 0; if ("string" == typeof i) {
                    (i = i.split(" "))[1] = i[1] || i[0]; var s = k(i, 2);
                    n = s[0], r = s[1], n = parseFloat(n, 10), r = parseFloat(r, 10) } else n = i.top, r = i.left; return { top: e += n, left: o += r } } } }), R }));