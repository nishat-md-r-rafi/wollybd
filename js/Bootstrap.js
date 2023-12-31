/*!
 * Bootstrap v4.0.0-alpha.5 (https://getbootstrap.com)
 * Copyright 2011-2016 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(t) { var e = jQuery.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(),
function() {
    function t(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
        n = function() {
            function t(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e } }(),
        i = function(t) {
            function e(t) { return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase() }

            function n(t) { return (t[0] || t).nodeType }

            function i(e) { var n = this,
                    i = !1; return t(this).one(s.TRANSITION_END, (function() { i = !0 })), setTimeout((function() { i || s.triggerTransitionEnd(n) }), e), this } var o = !1,
                r = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" },
                s = { TRANSITION_END: "bsTransitionEnd", getUID: function(t) { do { t += ~~(1e6 * Math.random()) } while (document.getElementById(t)); return t }, getSelectorFromElement: function(t) { var e = t.getAttribute("data-target"); return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e }, reflow: function(t) { new Function("bs", "return bs")(t.offsetHeight) }, triggerTransitionEnd: function(e) { t(e).trigger(o.end) }, supportsTransitionEnd: function() { return Boolean(o) }, typeCheckConfig: function(t, i, o) { for (var r in o)
                            if (o.hasOwnProperty(r)) { var s, a = o[r],
                                    l = i[r]; if (s = l && n(l) ? "element" : e(l), !new RegExp(a).test(s)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + s + '" but expected type "' + a + '".') } } }; return o = function() { if (window.QUnit) return !1; var t = document.createElement("bootstrap"); for (var e in r)
                    if (void 0 !== t.style[e]) return { end: r[e] };
                return !1 }(), t.fn.emulateTransitionEnd = i, s.supportsTransitionEnd() && (t.event.special[s.TRANSITION_END] = { bindType: o.end, delegateType: o.end, handle: function(e) { if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } }), s }(jQuery),
        o = (function(e) { var o = "alert",
                r = "bs.alert",
                s = "." + r,
                a = e.fn[o],
                l = { CLOSE: "close" + s, CLOSED: "closed" + s, CLICK_DATA_API: "click" + s + ".data-api" },
                h = "alert",
                c = "fade",
                u = "in",
                d = function() {
                    function o(e) { t(this, o), this._element = e } return o.prototype.close = function(t) { t = t || this._element; var e = this._getRootElement(t);
                        this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e) }, o.prototype.dispose = function() { e.removeData(this._element, r), this._element = null }, o.prototype._getRootElement = function(t) { var n = i.getSelectorFromElement(t),
                            o = !1; return n && (o = e(n)[0]), o || (o = e(t).closest("." + h)[0]), o }, o.prototype._triggerCloseEvent = function(t) { var n = e.Event(l.CLOSE); return e(t).trigger(n), n }, o.prototype._removeElement = function(t) { return e(t).removeClass(u), i.supportsTransitionEnd() && e(t).hasClass(c) ? void e(t).one(i.TRANSITION_END, e.proxy(this._destroyElement, this, t)).emulateTransitionEnd(150) : void this._destroyElement(t) }, o.prototype._destroyElement = function(t) { e(t).detach().trigger(l.CLOSED).remove() }, o._jQueryInterface = function(t) { return this.each((function() { var n = e(this),
                                i = n.data(r);
                            i || (i = new o(this), n.data(r, i)), "close" === t && i[t](this) })) }, o._handleDismiss = function(t) { return function(e) { e && e.preventDefault(), t.close(this) } }, n(o, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.5" } }]), o }();
            e(document).on(l.CLICK_DATA_API, '[data-dismiss="alert"]', d._handleDismiss(new d)), e.fn[o] = d._jQueryInterface, e.fn[o].Constructor = d, e.fn[o].noConflict = function() { return e.fn[o] = a, d._jQueryInterface } }(jQuery), function(e) { var i = "button",
                o = "bs.button",
                r = "." + o,
                s = ".data-api",
                a = e.fn[i],
                l = "active",
                h = "btn",
                c = "focus",
                u = '[data-toggle^="button"]',
                d = '[data-toggle="buttons"]',
                f = "input",
                _ = ".active",
                p = ".btn",
                g = { CLICK_DATA_API: "click" + r + s, FOCUS_BLUR_DATA_API: "focus" + r + s + " blur" + r + s },
                m = function() {
                    function i(e) { t(this, i), this._element = e } return i.prototype.toggle = function() { var t = !0,
                            n = e(this._element).closest(d)[0]; if (n) { var i = e(this._element).find(f)[0]; if (i) { if ("radio" === i.type)
                                    if (i.checked && e(this._element).hasClass(l)) t = !1;
                                    else { var o = e(n).find(_)[0];
                                        o && e(o).removeClass(l) }
                                t && (i.checked = !e(this._element).hasClass(l), e(this._element).trigger("change")), i.focus() } } else this._element.setAttribute("aria-pressed", !e(this._element).hasClass(l));
                        t && e(this._element).toggleClass(l) }, i.prototype.dispose = function() { e.removeData(this._element, o), this._element = null }, i._jQueryInterface = function(t) { return this.each((function() { var n = e(this).data(o);
                            n || (n = new i(this), e(this).data(o, n)), "toggle" === t && n[t]() })) }, n(i, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.5" } }]), i }();
            e(document).on(g.CLICK_DATA_API, u, (function(t) { t.preventDefault(); var n = t.target;
                e(n).hasClass(h) || (n = e(n).closest(p)), m._jQueryInterface.call(e(n), "toggle") })).on(g.FOCUS_BLUR_DATA_API, u, (function(t) { var n = e(t.target).closest(p)[0];
                e(n).toggleClass(c, /^focus(in)?$/.test(t.type)) })), e.fn[i] = m._jQueryInterface, e.fn[i].Constructor = m, e.fn[i].noConflict = function() { return e.fn[i] = a, m._jQueryInterface } }(jQuery), function(o) { var r = "carousel",
                s = "bs.carousel",
                a = "." + s,
                l = ".data-api",
                h = o.fn[r],
                c = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
                u = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
                d = "next",
                f = "prev",
                _ = { SLIDE: "slide" + a, SLID: "slid" + a, KEYDOWN: "keydown" + a, MOUSEENTER: "mouseenter" + a, MOUSELEAVE: "mouseleave" + a, LOAD_DATA_API: "load" + a + l, CLICK_DATA_API: "click" + a + l },
                p = "carousel",
                g = "active",
                m = "slide",
                v = "right",
                y = "left",
                E = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".next, .prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
                T = function() {
                    function l(e, n) { t(this, l), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(n), this._element = o(e)[0], this._indicatorsElement = o(this._element).find(E.INDICATORS)[0], this._addEventListeners() } return l.prototype.next = function() { this._isSliding || this._slide(d) }, l.prototype.nextWhenVisible = function() { document.hidden || this.next() }, l.prototype.prev = function() { this._isSliding || this._slide(f) }, l.prototype.pause = function(t) { t || (this._isPaused = !0), o(this._element).find(E.NEXT_PREV)[0] && i.supportsTransitionEnd() && (i.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, l.prototype.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval(o.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval)) }, l.prototype.to = function(t) { var e = this;
                        this._activeElement = o(this._element).find(E.ACTIVE_ITEM)[0]; var n = this._getItemIndex(this._activeElement); if (!(t > this._items.length - 1 || t < 0)) { if (this._isSliding) return void o(this._element).one(_.SLID, (function() { return e.to(t) })); if (n === t) return this.pause(), void this.cycle(); var i = t > n ? d : f;
                            this._slide(i, this._items[t]) } }, l.prototype.dispose = function() { o(this._element).off(a), o.removeData(this._element, s), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, l.prototype._getConfig = function(t) { return t = o.extend({}, c, t), i.typeCheckConfig(r, t, u), t }, l.prototype._addEventListeners = function() { this._config.keyboard && o(this._element).on(_.KEYDOWN, o.proxy(this._keydown, this)), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || o(this._element).on(_.MOUSEENTER, o.proxy(this.pause, this)).on(_.MOUSELEAVE, o.proxy(this.cycle, this)) }, l.prototype._keydown = function(t) { if (t.preventDefault(), !/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                            case 37:
                                this.prev(); break;
                            case 39:
                                this.next(); break;
                            default:
                                return } }, l.prototype._getItemIndex = function(t) { return this._items = o.makeArray(o(t).parent().find(E.ITEM)), this._items.indexOf(t) }, l.prototype._getItemByDirection = function(t, e) { var n = t === d,
                            i = t === f,
                            o = this._getItemIndex(e),
                            r = this._items.length - 1; if ((i && 0 === o || n && o === r) && !this._config.wrap) return e; var s = (o + (t === f ? -1 : 1)) % this._items.length; return -1 === s ? this._items[this._items.length - 1] : this._items[s] }, l.prototype._triggerSlideEvent = function(t, e) { var n = o.Event(_.SLIDE, { relatedTarget: t, direction: e }); return o(this._element).trigger(n), n }, l.prototype._setActiveIndicatorElement = function(t) { if (this._indicatorsElement) { o(this._indicatorsElement).find(E.ACTIVE).removeClass(g); var e = this._indicatorsElement.children[this._getItemIndex(t)];
                            e && o(e).addClass(g) } }, l.prototype._slide = function(t, e) { var n = this,
                            r = o(this._element).find(E.ACTIVE_ITEM)[0],
                            s = e || r && this._getItemByDirection(t, r),
                            a = Boolean(this._interval),
                            l = t === d ? y : v; if (s && o(s).hasClass(g)) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(s, l).isDefaultPrevented() && r && s) { this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s); var h = o.Event(_.SLID, { relatedTarget: s, direction: l });
                            i.supportsTransitionEnd() && o(this._element).hasClass(m) ? (o(s).addClass(t), i.reflow(s), o(r).addClass(l), o(s).addClass(l), o(r).one(i.TRANSITION_END, (function() { o(s).removeClass(l).removeClass(t), o(s).addClass(g), o(r).removeClass(g).removeClass(t).removeClass(l), n._isSliding = !1, setTimeout((function() { return o(n._element).trigger(h) }), 0) })).emulateTransitionEnd(600)) : (o(r).removeClass(g), o(s).addClass(g), this._isSliding = !1, o(this._element).trigger(h)), a && this.cycle() } }, l._jQueryInterface = function(t) { return this.each((function() { var n = o(this).data(s),
                                i = o.extend({}, c, o(this).data()); "object" === (void 0 === t ? "undefined" : e(t)) && o.extend(i, t); var r = "string" == typeof t ? t : i.slide; if (n || (n = new l(this, i), o(this).data(s, n)), "number" == typeof t) n.to(t);
                            else if ("string" == typeof r) { if (void 0 === n[r]) throw new Error('No method named "' + r + '"');
                                n[r]() } else i.interval && (n.pause(), n.cycle()) })) }, l._dataApiClickHandler = function(t) { var e = i.getSelectorFromElement(this); if (e) { var n = o(e)[0]; if (n && o(n).hasClass(p)) { var r = o.extend({}, o(n).data(), o(this).data()),
                                    a = this.getAttribute("data-slide-to");
                                a && (r.interval = !1), l._jQueryInterface.call(o(n), r), a && o(n).data(s).to(a), t.preventDefault() } } }, n(l, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.5" } }, { key: "Default", get: function() { return c } }]), l }();
            o(document).on(_.CLICK_DATA_API, E.DATA_SLIDE, T._dataApiClickHandler), o(window).on(_.LOAD_DATA_API, (function() { o(E.DATA_RIDE).each((function() { var t = o(this);
                    T._jQueryInterface.call(t, t.data()) })) })), o.fn[r] = T._jQueryInterface, o.fn[r].Constructor = T, o.fn[r].noConflict = function() { return o.fn[r] = h, T._jQueryInterface } }(jQuery), function(o) { var r = "collapse",
                s = "bs.collapse",
                a = "." + s,
                l = o.fn[r],
                h = { toggle: !0, parent: "" },
                c = { toggle: "boolean", parent: "string" },
                u = { SHOW: "show" + a, SHOWN: "shown" + a, HIDE: "hide" + a, HIDDEN: "hidden" + a, CLICK_DATA_API: "click" + a + ".data-api" },
                d = "in",
                f = "collapse",
                _ = "collapsing",
                p = "collapsed",
                g = "width",
                m = "height",
                v = ".card > .in, .card > .collapsing",
                y = '[data-toggle="collapse"]',
                E = function() {
                    function a(e, n) { t(this, a), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = o.makeArray(o('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } return a.prototype.toggle = function() { o(this._element).hasClass(d) ? this.hide() : this.show() }, a.prototype.show = function() { var t = this; if (!this._isTransitioning && !o(this._element).hasClass(d)) { var e = void 0,
                                n = void 0; if (this._parent && ((e = o.makeArray(o(v))).length || (e = null)), !(e && (n = o(e).data(s), n && n._isTransitioning))) { var r = o.Event(u.SHOW); if (o(this._element).trigger(r), !r.isDefaultPrevented()) { e && (a._jQueryInterface.call(o(e), "hide"), n || o(e).data(s, null)); var l = this._getDimension();
                                    o(this._element).removeClass(f).addClass(_), this._element.style[l] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && o(this._triggerArray).removeClass(p).attr("aria-expanded", !0), this.setTransitioning(!0); var h = function() { o(t._element).removeClass(_).addClass(f).addClass(d), t._element.style[l] = "", t.setTransitioning(!1), o(t._element).trigger(u.SHOWN) }; if (!i.supportsTransitionEnd()) return void h(); var c = "scroll" + (l[0].toUpperCase() + l.slice(1));
                                    o(this._element).one(i.TRANSITION_END, h).emulateTransitionEnd(600), this._element.style[l] = this._element[c] + "px" } } } }, a.prototype.hide = function() { var t = this; if (!this._isTransitioning && o(this._element).hasClass(d)) { var e = o.Event(u.HIDE); if (o(this._element).trigger(e), !e.isDefaultPrevented()) { var n = this._getDimension(),
                                    r = n === g ? "offsetWidth" : "offsetHeight";
                                this._element.style[n] = this._element[r] + "px", i.reflow(this._element), o(this._element).addClass(_).removeClass(f).removeClass(d), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && o(this._triggerArray).addClass(p).attr("aria-expanded", !1), this.setTransitioning(!0); var s = function() { t.setTransitioning(!1), o(t._element).removeClass(_).addClass(f).trigger(u.HIDDEN) }; return this._element.style[n] = "", i.supportsTransitionEnd() ? void o(this._element).one(i.TRANSITION_END, s).emulateTransitionEnd(600) : void s() } } }, a.prototype.setTransitioning = function(t) { this._isTransitioning = t }, a.prototype.dispose = function() { o.removeData(this._element, s), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, a.prototype._getConfig = function(t) { return (t = o.extend({}, h, t)).toggle = Boolean(t.toggle), i.typeCheckConfig(r, t, c), t }, a.prototype._getDimension = function() { return o(this._element).hasClass(g) ? g : m }, a.prototype._getParent = function() { var t = this,
                            e = o(this._config.parent)[0],
                            n = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'; return o(e).find(n).each((function(e, n) { t._addAriaAndCollapsedClass(a._getTargetFromElement(n), [n]) })), e }, a.prototype._addAriaAndCollapsedClass = function(t, e) { if (t) { var n = o(t).hasClass(d);
                            t.setAttribute("aria-expanded", n), e.length && o(e).toggleClass(p, !n).attr("aria-expanded", n) } }, a._getTargetFromElement = function(t) { var e = i.getSelectorFromElement(t); return e ? o(e)[0] : null }, a._jQueryInterface = function(t) { return this.each((function() { var n = o(this),
                                i = n.data(s),
                                r = o.extend({}, h, n.data(), "object" === (void 0 === t ? "undefined" : e(t)) && t); if (!i && r.toggle && /show|hide/.test(t) && (r.toggle = !1), i || (i = new a(this, r), n.data(s, i)), "string" == typeof t) { if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                                i[t]() } })) }, n(a, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.5" } }, { key: "Default", get: function() { return h } }]), a }();
            o(document).on(u.CLICK_DATA_API, y, (function(t) { t.preventDefault(); var e = E._getTargetFromElement(this),
                    n = o(e).data(s) ? "toggle" : o(this).data();
                E._jQueryInterface.call(o(e), n) })), o.fn[r] = E._jQueryInterface, o.fn[r].Constructor = E, o.fn[r].noConflict = function() { return o.fn[r] = l, E._jQueryInterface } }(jQuery), function(e) { var o = "dropdown",
                r = "bs.dropdown",
                s = "." + r,
                a = ".data-api",
                l = e.fn[o],
                h = { HIDE: "hide" + s, HIDDEN: "hidden" + s, SHOW: "show" + s, SHOWN: "shown" + s, CLICK: "click" + s, CLICK_DATA_API: "click" + s + a, KEYDOWN_DATA_API: "keydown" + s + a },
                c = "dropdown-backdrop",
                u = "disabled",
                d = "open",
                f = ".dropdown-backdrop",
                _ = '[data-toggle="dropdown"]',
                p = ".dropdown form",
                g = '[role="menu"]',
                m = '[role="listbox"]',
                v = ".navbar-nav",
                y = '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a',
                E = function() {
                    function o(e) { t(this, o), this._element = e, this._addEventListeners() } return o.prototype.toggle = function() { if (this.disabled || e(this).hasClass(u)) return !1; var t = o._getParentFromElement(this),
                            n = e(t).hasClass(d); if (o._clearMenus(), n) return !1; if ("ontouchstart" in document.documentElement && !e(t).closest(v).length) { var i = document.createElement("div");
                            i.className = c, e(i).insertBefore(this), e(i).on("click", o._clearMenus) } var r = { relatedTarget: this },
                            s = e.Event(h.SHOW, r); return e(t).trigger(s), !s.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", "true"), e(t).toggleClass(d), e(t).trigger(e.Event(h.SHOWN, r)), !1) }, o.prototype.dispose = function() { e.removeData(this._element, r), e(this._element).off(s), this._element = null }, o.prototype._addEventListeners = function() { e(this._element).on(h.CLICK, this.toggle) }, o._jQueryInterface = function(t) { return this.each((function() { var n = e(this).data(r); if (n || e(this).data(r, n = new o(this)), "string" == typeof t) { if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                n[t].call(this) } })) }, o._clearMenus = function(t) { if (!t || 3 !== t.which) { var n = e(f)[0];
                            n && n.parentNode.removeChild(n); for (var i = e.makeArray(e(_)), r = 0; r < i.length; r++) { var s = o._getParentFromElement(i[r]),
                                    a = { relatedTarget: i[r] }; if (e(s).hasClass(d) && !(t && "click" === t.type && /input|textarea/i.test(t.target.tagName) && e.contains(s, t.target))) { var l = e.Event(h.HIDE, a);
                                    e(s).trigger(l), l.isDefaultPrevented() || (i[r].setAttribute("aria-expanded", "false"), e(s).removeClass(d).trigger(e.Event(h.HIDDEN, a))) } } } }, o._getParentFromElement = function(t) { var n = void 0,
                            o = i.getSelectorFromElement(t); return o && (n = e(o)[0]), n || t.parentNode }, o._dataApiKeydownHandler = function(t) { if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(u))) { var n = o._getParentFromElement(this),
                                i = e(n).hasClass(d); if (!i && 27 !== t.which || i && 27 === t.which) { if (27 === t.which) { var r = e(n).find(_)[0];
                                    e(r).trigger("focus") } return void e(this).trigger("click") } var s = e.makeArray(e(y)); if (s = s.filter((function(t) { return t.offsetWidth || t.offsetHeight })), s.length) { var a = s.indexOf(t.target);
                                38 === t.which && a > 0 && a--, 40 === t.which && a < s.length - 1 && a++, a < 0 && (a = 0), s[a].focus() } } }, n(o, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.5" } }]), o }();
            e(document).on(h.KEYDOWN_DATA_API, _, E._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API, g, E._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API, m, E._dataApiKeydownHandler).on(h.CLICK_DATA_API, E._clearMenus).on(h.CLICK_DATA_API, _, E.prototype.toggle).on(h.CLICK_DATA_API, p, (function(t) { t.stopPropagation() })), e.fn[o] = E._jQueryInterface, e.fn[o].Constructor = E, e.fn[o].noConflict = function() { return e.fn[o] = l, E._jQueryInterface } }(jQuery), function(o) { var r = "modal",
                s = "bs.modal",
                a = "." + s,
                l = o.fn[r],
                h = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
                c = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
                u = { HIDE: "hide" + a, HIDDEN: "hidden" + a, SHOW: "show" + a, SHOWN: "shown" + a, FOCUSIN: "focusin" + a, RESIZE: "resize" + a, CLICK_DISMISS: "click.dismiss" + a, KEYDOWN_DISMISS: "keydown.dismiss" + a, MOUSEUP_DISMISS: "mouseup.dismiss" + a, MOUSEDOWN_DISMISS: "mousedown.dismiss" + a, CLICK_DATA_API: "click" + a + ".data-api" },
                d = "modal-scrollbar-measure",
                f = "modal-backdrop",
                _ = "modal-open",
                p = "fade",
                g = "in",
                m = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed" },
                v = function() {
                    function l(e, n) { t(this, l), this._config = this._getConfig(n), this._element = e, this._dialog = o(e).find(m.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0 } return l.prototype.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, l.prototype.show = function(t) { var e = this,
                            n = o.Event(u.SHOW, { relatedTarget: t });
                        o(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), o(document.body).addClass(_), this._setEscapeEvent(), this._setResizeEvent(), o(this._element).on(u.CLICK_DISMISS, m.DATA_DISMISS, o.proxy(this.hide, this)), o(this._dialog).on(u.MOUSEDOWN_DISMISS, (function() { o(e._element).one(u.MOUSEUP_DISMISS, (function(t) { o(t.target).is(e._element) && (e._ignoreBackdropClick = !0) })) })), this._showBackdrop(o.proxy(this._showElement, this, t))) }, l.prototype.hide = function(t) { t && t.preventDefault(); var e = o.Event(u.HIDE);
                        o(this._element).trigger(e), this._isShown && !e.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), o(document).off(u.FOCUSIN), o(this._element).removeClass(g), o(this._element).off(u.CLICK_DISMISS), o(this._dialog).off(u.MOUSEDOWN_DISMISS), i.supportsTransitionEnd() && o(this._element).hasClass(p) ? o(this._element).one(i.TRANSITION_END, o.proxy(this._hideModal, this)).emulateTransitionEnd(300) : this._hideModal()) }, l.prototype.dispose = function() { o.removeData(this._element, s), o(window).off(a), o(document).off(a), o(this._element).off(a), o(this._backdrop).off(a), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null }, l.prototype._getConfig = function(t) { return t = o.extend({}, h, t), i.typeCheckConfig(r, t, c), t }, l.prototype._showElement = function(t) { var e = this,
                            n = i.supportsTransitionEnd() && o(this._element).hasClass(p);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && i.reflow(this._element), o(this._element).addClass(g), this._config.focus && this._enforceFocus(); var r = o.Event(u.SHOWN, { relatedTarget: t }),
                            s = function() { e._config.focus && e._element.focus(), o(e._element).trigger(r) };
                        n ? o(this._dialog).one(i.TRANSITION_END, s).emulateTransitionEnd(300) : s() }, l.prototype._enforceFocus = function() { var t = this;
                        o(document).off(u.FOCUSIN).on(u.FOCUSIN, (function(e) { document === e.target || t._element === e.target || o(t._element).has(e.target).length || t._element.focus() })) }, l.prototype._setEscapeEvent = function() { var t = this;
                        this._isShown && this._config.keyboard ? o(this._element).on(u.KEYDOWN_DISMISS, (function(e) { 27 === e.which && t.hide() })) : this._isShown || o(this._element).off(u.KEYDOWN_DISMISS) }, l.prototype._setResizeEvent = function() { this._isShown ? o(window).on(u.RESIZE, o.proxy(this._handleUpdate, this)) : o(window).off(u.RESIZE) }, l.prototype._hideModal = function() { var t = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._showBackdrop((function() { o(document.body).removeClass(_), t._resetAdjustments(), t._resetScrollbar(), o(t._element).trigger(u.HIDDEN) })) }, l.prototype._removeBackdrop = function() { this._backdrop && (o(this._backdrop).remove(), this._backdrop = null) }, l.prototype._showBackdrop = function(t) { var e = this,
                            n = o(this._element).hasClass(p) ? p : ""; if (this._isShown && this._config.backdrop) { var r = i.supportsTransitionEnd() && n; if (this._backdrop = document.createElement("div"), this._backdrop.className = f, n && o(this._backdrop).addClass(n), o(this._backdrop).appendTo(document.body), o(this._element).on(u.CLICK_DISMISS, (function(t) { return e._ignoreBackdropClick ? void(e._ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())) })), r && i.reflow(this._backdrop), o(this._backdrop).addClass(g), !t) return; if (!r) return void t();
                            o(this._backdrop).one(i.TRANSITION_END, t).emulateTransitionEnd(150) } else if (!this._isShown && this._backdrop) { o(this._backdrop).removeClass(g); var s = function() { e._removeBackdrop(), t && t() };
                            i.supportsTransitionEnd() && o(this._element).hasClass(p) ? o(this._backdrop).one(i.TRANSITION_END, s).emulateTransitionEnd(150) : s() } else t && t() }, l.prototype._handleUpdate = function() { this._adjustDialog() }, l.prototype._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, l.prototype._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, l.prototype._checkScrollbar = function() { this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, l.prototype._setScrollbar = function() { var t = parseInt(o(m.FIXED_CONTENT).css("padding-right") || 0, 10);
                        this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = t + this._scrollbarWidth + "px") }, l.prototype._resetScrollbar = function() { document.body.style.paddingRight = this._originalBodyPadding }, l.prototype._getScrollbarWidth = function() { var t = document.createElement("div");
                        t.className = d, document.body.appendChild(t); var e = t.offsetWidth - t.clientWidth; return document.body.removeChild(t), e }, l._jQueryInterface = function(t, n) { return this.each((function() { var i = o(this).data(s),
                                r = o.extend({}, l.Default, o(this).data(), "object" === (void 0 === t ? "undefined" : e(t)) && t); if (i || (i = new l(this, r), o(this).data(s, i)), "string" == typeof t) { if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                                i[t](n) } else r.show && i.show(n) })) }, n(l, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.5" } }, { key: "Default", get: function() { return h } }]), l }();
            o(document).on(u.CLICK_DATA_API, m.DATA_TOGGLE, (function(t) { var e = this,
                    n = void 0,
                    r = i.getSelectorFromElement(this);
                r && (n = o(r)[0]); var a = o(n).data(s) ? "toggle" : o.extend({}, o(n).data(), o(this).data()); "A" === this.tagName && t.preventDefault(); var l = o(n).one(u.SHOW, (function(t) { t.isDefaultPrevented() || l.one(u.HIDDEN, (function() { o(e).is(":visible") && e.focus() })) }));
                v._jQueryInterface.call(o(n), a, this) })), o.fn[r] = v._jQueryInterface, o.fn[r].Constructor = v, o.fn[r].noConflict = function() { return o.fn[r] = l, v._jQueryInterface } }(jQuery), function(o) { var r = "scrollspy",
                s = "bs.scrollspy",
                a = "." + s,
                l = o.fn[r],
                h = { offset: 10, method: "auto", target: "" },
                c = { offset: "number", method: "string", target: "(string|element)" },
                u = { ACTIVATE: "activate" + a, SCROLL: "scroll" + a, LOAD_DATA_API: "load" + a + ".data-api" },
                d = "dropdown-item",
                f = "active",
                _ = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", LIST_ITEM: ".list-item", LI: "li", LI_DROPDOWN: "li.dropdown", NAV_LINKS: ".nav-link", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
                p = "offset",
                g = "position",
                m = function() {
                    function l(e, n) { t(this, l), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + _.NAV_LINKS + "," + this._config.target + " " + _.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, o(this._scrollElement).on(u.SCROLL, o.proxy(this._process, this)), this.refresh(), this._process() } return l.prototype.refresh = function() { var t = this,
                            e = this._scrollElement !== this._scrollElement.window ? g : p,
                            n = "auto" === this._config.method ? e : this._config.method,
                            r = n === g ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), o.makeArray(o(this._selector)).map((function(t) { var e = void 0,
                                s = i.getSelectorFromElement(t); return s && (e = o(s)[0]), e && (e.offsetWidth || e.offsetHeight) ? [o(e)[n]().top + r, s] : null })).filter((function(t) { return t })).sort((function(t, e) { return t[0] - e[0] })).forEach((function(e) { t._offsets.push(e[0]), t._targets.push(e[1]) })) }, l.prototype.dispose = function() { o.removeData(this._element, s), o(this._scrollElement).off(a), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, l.prototype._getConfig = function(t) { if ("string" != typeof(t = o.extend({}, h, t)).target) { var e = o(t.target).attr("id");
                            e || (e = i.getUID(r), o(t.target).attr("id", e)), t.target = "#" + e } return i.typeCheckConfig(r, t, c), t }, l.prototype._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop }, l.prototype._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, l.prototype._process = function() { var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            n = this._config.offset + e - this._scrollElement.offsetHeight; if (this._scrollHeight !== e && this.refresh(), t >= n) { var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i) } if (this._activeTarget && t < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var o = this._offsets.length; o--;) { this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]) } }, l.prototype._activate = function(t) { this._activeTarget = t, this._clear(); var e = this._selector.split(",");
                        e = e.map((function(e) { return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]' })); var n = o(e.join(","));
                        n.hasClass(d) ? (n.closest(_.DROPDOWN).find(_.DROPDOWN_TOGGLE).addClass(f), n.addClass(f)) : n.parents(_.LI).find(_.NAV_LINKS).addClass(f), o(this._scrollElement).trigger(u.ACTIVATE, { relatedTarget: t }) }, l.prototype._clear = function() { o(this._selector).filter(_.ACTIVE).removeClass(f) }, l._jQueryInterface = function(t) { return this.each((function() { var n = o(this).data(s),
                                i = "object" === (void 0 === t ? "undefined" : e(t)) && t || null; if (n || (n = new l(this, i), o(this).data(s, n)), "string" == typeof t) { if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                n[t]() } })) }, n(l, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.5" } }, { key: "Default", get: function() { return h } }]), l }();
            o(window).on(u.LOAD_DATA_API, (function() { for (var t = o.makeArray(o(_.DATA_SPY)), e = t.length; e--;) { var n = o(t[e]);
                    m._jQueryInterface.call(n, n.data()) } })), o.fn[r] = m._jQueryInterface, o.fn[r].Constructor = m, o.fn[r].noConflict = function() { return o.fn[r] = l, m._jQueryInterface } }(jQuery), function(e) { var o = "tab",
                r = "bs.tab",
                s = "." + r,
                a = e.fn[o],
                l = { HIDE: "hide" + s, HIDDEN: "hidden" + s, SHOW: "show" + s, SHOWN: "shown" + s, CLICK_DATA_API: "click" + s + ".data-api" },
                h = "dropdown-menu",
                c = "active",
                u = "fade",
                d = "in",
                f = ".dropdown",
                _ = "ul:not(.dropdown-menu)",
                p = "> .nav-item .fade, > .fade",
                g = ".active",
                m = "> .nav-item > .active, > .active",
                v = '[data-toggle="tab"], [data-toggle="pill"]',
                y = ".dropdown-toggle",
                E = "> .dropdown-menu .active",
                T = function() {
                    function o(e) { t(this, o), this._element = e } return o.prototype.show = function() { var t = this; if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !e(this._element).hasClass(c)) { var n = void 0,
                                o = void 0,
                                r = e(this._element).closest(_)[0],
                                s = i.getSelectorFromElement(this._element);
                            r && (o = (o = e.makeArray(e(r).find(g)))[o.length - 1]); var a = e.Event(l.HIDE, { relatedTarget: this._element }),
                                h = e.Event(l.SHOW, { relatedTarget: o }); if (o && e(o).trigger(a), e(this._element).trigger(h), !h.isDefaultPrevented() && !a.isDefaultPrevented()) { s && (n = e(s)[0]), this._activate(this._element, r); var u = function() { var n = e.Event(l.HIDDEN, { relatedTarget: t._element }),
                                        i = e.Event(l.SHOWN, { relatedTarget: o });
                                    e(o).trigger(n), e(t._element).trigger(i) };
                                n ? this._activate(n, n.parentNode, u) : u() } } }, o.prototype.dispose = function() { e.removeClass(this._element, r), this._element = null }, o.prototype._activate = function(t, n, o) { var r = e(n).find(m)[0],
                            s = o && i.supportsTransitionEnd() && (r && e(r).hasClass(u) || Boolean(e(n).find(p)[0])),
                            a = e.proxy(this._transitionComplete, this, t, r, s, o);
                        r && s ? e(r).one(i.TRANSITION_END, a).emulateTransitionEnd(150) : a(), r && e(r).removeClass(d) }, o.prototype._transitionComplete = function(t, n, o, r) { if (n) { e(n).removeClass(c); var s = e(n).find(E)[0];
                            s && e(s).removeClass(c), n.setAttribute("aria-expanded", !1) } if (e(t).addClass(c), t.setAttribute("aria-expanded", !0), o ? (i.reflow(t), e(t).addClass(d)) : e(t).removeClass(u), t.parentNode && e(t.parentNode).hasClass(h)) { var a = e(t).closest(f)[0];
                            a && e(a).find(y).addClass(c), t.setAttribute("aria-expanded", !0) }
                        r && r() }, o._jQueryInterface = function(t) { return this.each((function() { var n = e(this),
                                i = n.data(r); if (i || (i = i = new o(this), n.data(r, i)), "string" == typeof t) { if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                                i[t]() } })) }, n(o, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.5" } }]), o }();
            e(document).on(l.CLICK_DATA_API, v, (function(t) { t.preventDefault(), T._jQueryInterface.call(e(this), "show") })), e.fn[o] = T._jQueryInterface, e.fn[o].Constructor = T, e.fn[o].noConflict = function() { return e.fn[o] = a, T._jQueryInterface } }(jQuery), function(o) { if (void 0 === window.Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)"); var r = "tooltip",
                s = "bs.tooltip",
                a = "." + s,
                l = o.fn[r],
                h = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: "0 0", constraints: [] },
                c = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "string", constraints: "array" },
                u = { TOP: "bottom center", RIGHT: "middle left", BOTTOM: "top center", LEFT: "middle right" },
                d = "in",
                f = "out",
                _ = { HIDE: "hide" + a, HIDDEN: "hidden" + a, SHOW: "show" + a, SHOWN: "shown" + a, INSERTED: "inserted" + a, CLICK: "click" + a, FOCUSIN: "focusin" + a, FOCUSOUT: "focusout" + a, MOUSEENTER: "mouseenter" + a, MOUSELEAVE: "mouseleave" + a },
                p = "fade",
                g = "in",
                m = ".tooltip-inner",
                v = { element: !1, enabled: !1 },
                y = "hover",
                E = "focus",
                T = "manual",
                C = function() {
                    function l(e, n) { t(this, l), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._tether = null, this.element = e, this.config = this._getConfig(n), this.tip = null, this._setListeners() } return l.prototype.enable = function() { this._isEnabled = !0 }, l.prototype.disable = function() { this._isEnabled = !1 }, l.prototype.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, l.prototype.toggle = function(t) { if (t) { var e = this.constructor.DATA_KEY,
                                n = o(t.currentTarget).data(e);
                            n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), o(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n) } else { if (o(this.getTipElement()).hasClass(g)) return void this._leave(null, this);
                            this._enter(null, this) } }, l.prototype.dispose = function() { clearTimeout(this._timeout), this.cleanupTether(), o.removeData(this.element, this.constructor.DATA_KEY), o(this.element).off(this.constructor.EVENT_KEY), this.tip && o(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null }, l.prototype.show = function() { var t = this,
                            e = o.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { o(this.element).trigger(e); var n = o.contains(this.element.ownerDocument.documentElement, this.element); if (e.isDefaultPrevented() || !n) return; var r = this.getTipElement(),
                                s = i.getUID(this.constructor.NAME);
                            r.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && o(r).addClass(p); var a = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                                h = this._getAttachment(a);
                            o(r).data(this.constructor.DATA_KEY, this).appendTo(document.body), o(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({ attachment: h, element: r, target: this.element, classes: v, classPrefix: "bs-tether", offset: this.config.offset, constraints: this.config.constraints, addTargetClasses: !1 }), i.reflow(r), this._tether.position(), o(r).addClass(g); var c = function() { var e = t._hoverState;
                                t._hoverState = null, o(t.element).trigger(t.constructor.Event.SHOWN), e === f && t._leave(null, t) }; if (i.supportsTransitionEnd() && o(this.tip).hasClass(p)) return void o(this.tip).one(i.TRANSITION_END, c).emulateTransitionEnd(l._TRANSITION_DURATION);
                            c() } }, l.prototype.hide = function(t) { var e = this,
                            n = this.getTipElement(),
                            r = o.Event(this.constructor.Event.HIDE),
                            s = function() { e._hoverState !== d && n.parentNode && n.parentNode.removeChild(n), e.element.removeAttribute("aria-describedby"), o(e.element).trigger(e.constructor.Event.HIDDEN), e.cleanupTether(), t && t() };
                        o(this.element).trigger(r), r.isDefaultPrevented() || (o(n).removeClass(g), i.supportsTransitionEnd() && o(this.tip).hasClass(p) ? o(n).one(i.TRANSITION_END, s).emulateTransitionEnd(150) : s(), this._hoverState = "") }, l.prototype.isWithContent = function() { return Boolean(this.getTitle()) }, l.prototype.getTipElement = function() { return this.tip = this.tip || o(this.config.template)[0] }, l.prototype.setContent = function() { var t = o(this.getTipElement());
                        this.setElementContent(t.find(m), this.getTitle()), t.removeClass(p).removeClass(g), this.cleanupTether() }, l.prototype.setElementContent = function(t, n) { var i = this.config.html; "object" === (void 0 === n ? "undefined" : e(n)) && (n.nodeType || n.jquery) ? i ? o(n).parent().is(t) || t.empty().append(n) : t.text(o(n).text()): t[i ? "html" : "text"](n) }, l.prototype.getTitle = function() { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, l.prototype.cleanupTether = function() { this._tether && this._tether.destroy() }, l.prototype._getAttachment = function(t) { return u[t.toUpperCase()] }, l.prototype._setListeners = function() { var t = this;
                        this.config.trigger.split(" ").forEach((function(e) { if ("click" === e) o(t.element).on(t.constructor.Event.CLICK, t.config.selector, o.proxy(t.toggle, t));
                            else if (e !== T) { var n = e === y ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                    i = e === y ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                o(t.element).on(n, t.config.selector, o.proxy(t._enter, t)).on(i, t.config.selector, o.proxy(t._leave, t)) } })), this.config.selector ? this.config = o.extend({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, l.prototype._fixTitle = function() { var t = e(this.element.getAttribute("data-original-title"));
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, l.prototype._enter = function(t, e) { var n = this.constructor.DATA_KEY; return (e = e || o(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), o(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? E : y] = !0), o(e.getTipElement()).hasClass(g) || e._hoverState === d ? void(e._hoverState = d) : (clearTimeout(e._timeout), e._hoverState = d, e.config.delay && e.config.delay.show ? void(e._timeout = setTimeout((function() { e._hoverState === d && e.show() }), e.config.delay.show)) : void e.show()) }, l.prototype._leave = function(t, e) { var n = this.constructor.DATA_KEY; if ((e = e || o(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), o(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? E : y] = !1), !e._isWithActiveTrigger()) return clearTimeout(e._timeout), e._hoverState = f, e.config.delay && e.config.delay.hide ? void(e._timeout = setTimeout((function() { e._hoverState === f && e.hide() }), e.config.delay.hide)) : void e.hide() }, l.prototype._isWithActiveTrigger = function() { for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1 }, l.prototype._getConfig = function(t) { return (t = o.extend({}, this.constructor.Default, o(this.element).data(), t)).delay && "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), i.typeCheckConfig(r, t, this.constructor.DefaultType), t }, l.prototype._getDelegateConfig = function() { var t = {}; if (this.config)
                            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]); return t }, l._jQueryInterface = function(t) { return this.each((function() { var n = o(this).data(s),
                                i = "object" === (void 0 === t ? "undefined" : e(t)) ? t : null; if ((n || !/dispose|hide/.test(t)) && (n || (n = new l(this, i), o(this).data(s, n)), "string" == typeof t)) { if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                n[t]() } })) }, n(l, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.5" } }, { key: "Default", get: function() { return h } }, { key: "NAME", get: function() { return r } }, { key: "DATA_KEY", get: function() { return s } }, { key: "Event", get: function() { return _ } }, { key: "EVENT_KEY", get: function() { return a } }, { key: "DefaultType", get: function() { return c } }]), l }(); return o.fn[r] = C._jQueryInterface, o.fn[r].Constructor = C, o.fn[r].noConflict = function() { return o.fn[r] = l, C._jQueryInterface }, C }(jQuery));! function(i) { var r = "popover",
            s = "bs.popover",
            a = "." + s,
            l = i.fn[r],
            h = i.extend({}, o.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }),
            c = i.extend({}, o.DefaultType, { content: "(string|element|function)" }),
            u = "fade",
            d = "in",
            f = ".popover-title",
            _ = ".popover-content",
            p = { HIDE: "hide" + a, HIDDEN: "hidden" + a, SHOW: "show" + a, SHOWN: "shown" + a, INSERTED: "inserted" + a, CLICK: "click" + a, FOCUSIN: "focusin" + a, FOCUSOUT: "focusout" + a, MOUSEENTER: "mouseenter" + a, MOUSELEAVE: "mouseleave" + a },
            g = function(o) {
                function l() { return t(this, l),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, o.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(l, o), l.prototype.isWithContent = function() { return this.getTitle() || this._getContent() }, l.prototype.getTipElement = function() { return this.tip = this.tip || i(this.config.template)[0] }, l.prototype.setContent = function() { var t = i(this.getTipElement());
                    this.setElementContent(t.find(f), this.getTitle()), this.setElementContent(t.find(_), this._getContent()), t.removeClass(u).removeClass(d), this.cleanupTether() }, l.prototype._getContent = function() { return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content) }, l._jQueryInterface = function(t) { return this.each((function() { var n = i(this).data(s),
                            o = "object" === (void 0 === t ? "undefined" : e(t)) ? t : null; if ((n || !/destroy|hide/.test(t)) && (n || (n = new l(this, o), i(this).data(s, n)), "string" == typeof t)) { if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                            n[t]() } })) }, n(l, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.5" } }, { key: "Default", get: function() { return h } }, { key: "NAME", get: function() { return r } }, { key: "DATA_KEY", get: function() { return s } }, { key: "Event", get: function() { return p } }, { key: "EVENT_KEY", get: function() { return a } }, { key: "DefaultType", get: function() { return c } }]), l }(o);
        i.fn[r] = g._jQueryInterface, i.fn[r].Constructor = g, i.fn[r].noConflict = function() { return i.fn[r] = l, g._jQueryInterface } }(jQuery) }();