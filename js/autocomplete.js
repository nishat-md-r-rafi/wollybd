/*!
 * autocomplete.js 0.38.1
 * https://github.com/algolia/autocomplete.js
 * Copyright 2021 Algolia, Inc. and other contributors; Licensed MIT
 */
! function(a) {
    function b(d) { if (c[d]) return c[d].exports; var e = c[d] = { exports: {}, id: d, loaded: !1 }; return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports }
    var c = {};
    b.m = a, b.c = c, b.p = "", b(0)
}([function(a, b, c) {
    "use strict";
    a.exports = c(1)
}, function(a, b, c) {
    "use strict";
    var d = c(2),
        e = c(3);
    d.element = e;
    var f = c(4);
    f.isArray = e.isArray, f.isFunction = e.isFunction, f.isObject = e.isPlainObject, f.bind = e.proxy, f.each = function(a, b) {
        function c(a, c) { return b(c, a) }
        e.each(a, c)
    }, f.map = e.map, f.mixin = e.extend, f.Event = e.Event;
    var g, h, i, j = c(5),
        k = c(6);
    g = e.fn.autocomplete, h = "aaAutocomplete", i = {
        initialize: function(a, b) {
            function c() {
                var c, d = e(this),
                    f = new k({ el: d });
                c = new j({ input: d, eventBus: f, dropdownMenuContainer: a.dropdownMenuContainer, hint: void 0 === a.hint || !!a.hint, minLength: a.minLength, autoselect: a.autoselect, autoselectOnBlur: a.autoselectOnBlur, tabAutocomplete: a.tabAutocomplete, openOnFocus: a.openOnFocus, templates: a.templates, debug: a.debug, clearOnSelected: a.clearOnSelected, cssClasses: a.cssClasses, datasets: b, keyboardShortcuts: a.keyboardShortcuts, appendTo: a.appendTo, autoWidth: a.autoWidth }), d.data(h, c)
            }
            return b = f.isArray(b) ? b : [].slice.call(arguments, 1), a = a || {}, this.each(c)
        },
        open: function() {
            function a() {
                var a, b = e(this);
                (a = b.data(h)) && a.open()
            }
            return this.each(a)
        },
        close: function() {
            function a() {
                var a, b = e(this);
                (a = b.data(h)) && a.close()
            }
            return this.each(a)
        },
        val: function(a) {
            function b() {
                var b, c = e(this);
                (b = c.data(h)) && b.setVal(a)
            }
            return arguments.length ? this.each(b) : function(a) { var b, c; return (b = a.data(h)) && (c = b.getVal()), c }(this.first())
        },
        destroy: function() {
            function a() {
                var a, b = e(this);
                (a = b.data(h)) && (a.destroy(), b.removeData(h))
            }
            return this.each(a)
        }
    }, e.fn.autocomplete = function(a) { var b; return i[a] && "initialize" !== a ? (b = this.filter(function() { return !!e(this).data(h) }), i[a].apply(b, [].slice.call(arguments, 1))) : i.initialize.apply(this, arguments) }, e.fn.autocomplete.noConflict = function() { return e.fn.autocomplete = g, this }, e.fn.autocomplete.sources = j.sources, e.fn.autocomplete.escapeHighlightedString = f.escapeHighlightedString, a.exports = e.fn.autocomplete
}, function(a, b) {
    "use strict";
    a.exports = { element: null }
}, function(a, b) { a.exports = jQuery }, function(a, b, c) {
    "use strict";

    function d(a) { return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") }
    var e = c(2);
    a.exports = {
        isArray: null,
        isFunction: null,
        isObject: null,
        bind: null,
        each: null,
        map: null,
        mixin: null,
        isMsie: function(a) { if (void 0 === a && (a = navigator.userAgent), /(msie|trident)/i.test(a)) { var b = a.match(/(msie |rv:)(\d+(.\d+)?)/i); if (b) return b[2] } return !1 },
        escapeRegExChars: function(a) { return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") },
        isNumber: function(a) { return "number" == typeof a },
        toStr: function(a) { return void 0 === a || null === a ? "" : a + "" },
        cloneDeep: function(a) {
            var b = this.mixin({}, a),
                c = this;
            return this.each(b, function(a, d) { a && (c.isArray(a) ? b[d] = [].concat(a) : c.isObject(a) && (b[d] = c.cloneDeep(a))) }), b
        },
        error: function(a) { throw new Error(a) },
        every: function(a, b) { var c = !0; return a ? (this.each(a, function(d, e) { c && (c = b.call(null, d, e, a) && c) }), !!c) : c },
        any: function(a, b) { var c = !1; return a ? (this.each(a, function(d, e) { if (b.call(null, d, e, a)) return c = !0, !1 }), c) : c },
        getUniqueId: function() { var a = 0; return function() { return a++ } }(),
        templatify: function(a) { if (this.isFunction(a)) return a; var b = e.element(a); return "SCRIPT" === b.prop("tagName") ? function() { return b.text() } : function() { return String(a) } },
        defer: function(a) { setTimeout(a, 0) },
        noop: function() {},
        formatPrefix: function(a, b) { return b ? "" : a + "-" },
        className: function(a, b, c) { return (c ? "" : ".") + a + b },
        escapeHighlightedString: function(a, b, c) {
            b = b || "<em>";
            var e = document.createElement("div");
            e.appendChild(document.createTextNode(b)), c = c || "</em>";
            var f = document.createElement("div");
            f.appendChild(document.createTextNode(c));
            var g = document.createElement("div");
            return g.appendChild(document.createTextNode(a)), g.innerHTML.replace(RegExp(d(e.innerHTML), "g"), b).replace(RegExp(d(f.innerHTML), "g"), c)
        }
    }
}, function(a, b, c) {
    "use strict";

    function d(a) {
        var b, c;
        if (a = a || {}, a.input || i.error("missing input"), this.isActivated = !1, this.debug = !!a.debug, this.autoselect = !!a.autoselect, this.autoselectOnBlur = !!a.autoselectOnBlur, this.openOnFocus = !!a.openOnFocus, this.minLength = i.isNumber(a.minLength) ? a.minLength : 1, this.autoWidth = void 0 === a.autoWidth || !!a.autoWidth, this.clearOnSelected = !!a.clearOnSelected, this.tabAutocomplete = void 0 === a.tabAutocomplete || !!a.tabAutocomplete, a.hint = !!a.hint, a.hint && a.appendTo) throw new Error("[autocomplete.js] hint and appendTo options can't be used at the same time");
        this.css = a.css = i.mixin({}, o, a.appendTo ? o.appendTo : {}), this.cssClasses = a.cssClasses = i.mixin({}, o.defaultClasses, a.cssClasses || {}), this.cssClasses.prefix = a.cssClasses.formattedPrefix = i.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix), this.listboxId = a.listboxId = [this.cssClasses.root, "listbox", i.getUniqueId()].join("-");
        var f = e(a);
        this.$node = f.wrapper;
        var g = this.$input = f.input;
        b = f.menu, c = f.hint, a.dropdownMenuContainer && j.element(a.dropdownMenuContainer).css("position", "relative").append(b.css("top", "0")), g.on("blur.aa", function(a) {
            var c = document.activeElement;
            i.isMsie() && (b[0] === c || b[0].contains(c)) && (a.preventDefault(), a.stopImmediatePropagation(), i.defer(function() { g.focus() }))
        }), b.on("mousedown.aa", function(a) { a.preventDefault() }), this.eventBus = a.eventBus || new k({ el: g }), this.dropdown = new d.Dropdown({ appendTo: a.appendTo, wrapper: this.$node, menu: b, datasets: a.datasets, templates: a.templates, cssClasses: a.cssClasses, minLength: this.minLength }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onSync("shown", this._onShown, this).onSync("empty", this._onEmpty, this).onSync("redrawn", this._onRedrawn, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = new d.Input({ input: g, hint: c }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), this._bindKeyboardShortcuts(a), this._setLanguageDirection()
    }

    function e(a) {
        var b, c, d, e;
        b = j.element(a.input), c = j.element(n.wrapper.replace("%ROOT%", a.cssClasses.root)).css(a.css.wrapper), a.appendTo || "block" !== b.css("display") || "table" !== b.parent().css("display") || c.css("display", "table-cell");
        var g = n.dropdown.replace("%PREFIX%", a.cssClasses.prefix).replace("%DROPDOWN_MENU%", a.cssClasses.dropdownMenu);
        d = j.element(g).css(a.css.dropdown).attr({ role: "listbox", id: a.listboxId }), a.templates && a.templates.dropdownMenu && d.html(i.templatify(a.templates.dropdownMenu)()), e = b.clone().css(a.css.hint).css(f(b)), e.val("").addClass(i.className(a.cssClasses.prefix, a.cssClasses.hint, !0)).removeAttr("id name placeholder required").prop("readonly", !0).attr({ "aria-hidden": "true", autocomplete: "off", spellcheck: "false", tabindex: -1 }), e.removeData && e.removeData(), b.data(h, { "aria-autocomplete": b.attr("aria-autocomplete"), "aria-expanded": b.attr("aria-expanded"), "aria-owns": b.attr("aria-owns"), autocomplete: b.attr("autocomplete"), dir: b.attr("dir"), role: b.attr("role"), spellcheck: b.attr("spellcheck"), style: b.attr("style"), type: b.attr("type") }), b.addClass(i.className(a.cssClasses.prefix, a.cssClasses.input, !0)).attr({ autocomplete: "off", spellcheck: !1, role: "combobox", "aria-autocomplete": a.datasets && a.datasets[0] && a.datasets[0].displayKey ? "both" : "list", "aria-expanded": "false", "aria-label": a.ariaLabel, "aria-owns": a.listboxId }).css(a.hint ? a.css.input : a.css.inputWithNoHint);
        try { b.attr("dir") || b.attr("dir", "auto") } catch (a) {}
        return c = a.appendTo ? c.appendTo(j.element(a.appendTo).eq(0)).eq(0) : b.wrap(c).parent(), c.prepend(a.hint ? e : null).append(d), { wrapper: c, input: b, hint: e, menu: d }
    }

    function f(a) { return { backgroundAttachment: a.css("background-attachment"), backgroundClip: a.css("background-clip"), backgroundColor: a.css("background-color"), backgroundImage: a.css("background-image"), backgroundOrigin: a.css("background-origin"), backgroundPosition: a.css("background-position"), backgroundRepeat: a.css("background-repeat"), backgroundSize: a.css("background-size") } }

    function g(a, b) {
        var c = a.find(i.className(b.prefix, b.input));
        i.each(c.data(h), function(a, b) { void 0 === a ? c.removeAttr(b) : c.attr(b, a) }), c.detach().removeClass(i.className(b.prefix, b.input, !0)).insertAfter(a), c.removeData && c.removeData(h), a.remove()
    }
    var h = "aaAttrs",
        i = c(4),
        j = c(2),
        k = c(6),
        l = c(7),
        m = c(16),
        n = c(18),
        o = c(19);
    i.mixin(d.prototype, {
        _bindKeyboardShortcuts: function(a) {
            if (a.keyboardShortcuts) {
                var b = this.$input,
                    c = [];
                i.each(a.keyboardShortcuts, function(a) { "string" == typeof a && (a = a.toUpperCase().charCodeAt(0)), c.push(a) }), j.element(document).keydown(function(a) {
                    var d = a.target || a.srcElement,
                        e = d.tagName;
                    if (!d.isContentEditable && "INPUT" !== e && "SELECT" !== e && "TEXTAREA" !== e) {
                        var f = a.which || a.keyCode;
                        c.indexOf(f) !== -1 && (b.focus(), a.stopPropagation(), a.preventDefault())
                    }
                })
            }
        },
        _onSuggestionClicked: function(a, b) {
            var c, d = { selectionMethod: "click" };
            (c = this.dropdown.getDatumForSuggestion(b)) && this._select(c, d)
        },
        _onCursorMoved: function(a, b) {
            var c = this.dropdown.getDatumForCursor(),
                d = this.dropdown.getCurrentCursor().attr("id");
            this.input.setActiveDescendant(d), c && (b && this.input.setInputValue(c.value, !0), this.eventBus.trigger("cursorchanged", c.raw, c.datasetName))
        },
        _onCursorRemoved: function() { this.input.resetInputValue(), this._updateHint(), this.eventBus.trigger("cursorremoved") },
        _onDatasetRendered: function() { this._updateHint(), this.eventBus.trigger("updated") },
        _onOpened: function() { this._updateHint(), this.input.expand(), this.eventBus.trigger("opened") },
        _onEmpty: function() { this.eventBus.trigger("empty") },
        _onRedrawn: function() {
            this.$node.css("top", "0px"), this.$node.css("left", "0px");
            var a = this.$input[0].getBoundingClientRect();
            this.autoWidth && this.$node.css("width", a.width + "px");
            var b = this.$node[0].getBoundingClientRect(),
                c = a.bottom - b.top;
            this.$node.css("top", c + "px");
            var d = a.left - b.left;
            this.$node.css("left", d + "px"), this.eventBus.trigger("redrawn")
        },
        _onShown: function() { this.eventBus.trigger("shown"), this.autoselect && this.dropdown.cursorTopSuggestion() },
        _onClosed: function() { this.input.clearHint(), this.input.removeActiveDescendant(), this.input.collapse(), this.eventBus.trigger("closed") },
        _onFocused: function() {
            if (this.isActivated = !0, this.openOnFocus) {
                var a = this.input.getQuery();
                a.length >= this.minLength ? this.dropdown.update(a) : this.dropdown.empty(), this.dropdown.open()
            }
        },
        _onBlurred: function() {
            var a, b;
            a = this.dropdown.getDatumForCursor(), b = this.dropdown.getDatumForTopSuggestion();
            var c = { selectionMethod: "blur" };
            this.debug || (this.autoselectOnBlur && a ? this._select(a, c) : this.autoselectOnBlur && b ? this._select(b, c) : (this.isActivated = !1, this.dropdown.empty(), this.dropdown.close()))
        },
        _onEnterKeyed: function(a, b) {
            var c, d;
            c = this.dropdown.getDatumForCursor(), d = this.dropdown.getDatumForTopSuggestion();
            var e = { selectionMethod: "enterKey" };
            c ? (this._select(c, e), b.preventDefault()) : this.autoselect && d && (this._select(d, e), b.preventDefault())
        },
        _onTabKeyed: function(a, b) {
            if (!this.tabAutocomplete) return void this.dropdown.close();
            var c, d = { selectionMethod: "tabKey" };
            (c = this.dropdown.getDatumForCursor()) ? (this._select(c, d), b.preventDefault()) : this._autocomplete(!0)
        },
        _onEscKeyed: function() { this.dropdown.close(), this.input.resetInputValue() },
        _onUpKeyed: function() {
            var a = this.input.getQuery();
            this.dropdown.isEmpty && a.length >= this.minLength ? this.dropdown.update(a) : this.dropdown.moveCursorUp(), this.dropdown.open()
        },
        _onDownKeyed: function() {
            var a = this.input.getQuery();
            this.dropdown.isEmpty && a.length >= this.minLength ? this.dropdown.update(a) : this.dropdown.moveCursorDown(), this.dropdown.open()
        },
        _onLeftKeyed: function() { "rtl" === this.dir && this._autocomplete() },
        _onRightKeyed: function() { "ltr" === this.dir && this._autocomplete() },
        _onQueryChanged: function(a, b) { this.input.clearHintIfInvalid(), b.length >= this.minLength ? this.dropdown.update(b) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection() },
        _onWhitespaceChanged: function() { this._updateHint(), this.dropdown.open() },
        _setLanguageDirection: function() {
            var a = this.input.getLanguageDirection();
            this.dir !== a && (this.dir = a, this.$node.css("direction", a), this.dropdown.setLanguageDirection(a))
        },
        _updateHint: function() {
            var a, b, c, d, e, f;
            a = this.dropdown.getDatumForTopSuggestion(), a && this.dropdown.isVisible() && !this.input.hasOverflow() ? (b = this.input.getInputValue(), c = l.normalizeQuery(b), d = i.escapeRegExChars(c), e = new RegExp("^(?:" + d + ")(.+$)", "i"), f = e.exec(a.value), f ? this.input.setHint(b + f[1]) : this.input.clearHint()) : this.input.clearHint()
        },
        _autocomplete: function(a) {
            var b, c, d, e;
            b = this.input.getHint(), c = this.input.getQuery(), d = a || this.input.isCursorAtEnd(), b && c !== b && d && (e = this.dropdown.getDatumForTopSuggestion(), e && this.input.setInputValue(e.value), this.eventBus.trigger("autocompleted", e.raw, e.datasetName))
        },
        _select: function(a, b) { void 0 !== a.value && this.input.setQuery(a.value), this.clearOnSelected ? this.setVal("") : this.input.setInputValue(a.value, !0), this._setLanguageDirection(), this.eventBus.trigger("selected", a.raw, a.datasetName, b).isDefaultPrevented() === !1 && (this.dropdown.close(), i.defer(i.bind(this.dropdown.empty, this.dropdown))) },
        open: function() {
            if (!this.isActivated) {
                var a = this.input.getInputValue();
                a.length >= this.minLength ? this.dropdown.update(a) : this.dropdown.empty()
            }
            this.dropdown.open()
        },
        close: function() { this.dropdown.close() },
        setVal: function(a) { a = i.toStr(a), this.isActivated ? this.input.setInputValue(a) : (this.input.setQuery(a), this.input.setInputValue(a, !0)), this._setLanguageDirection() },
        getVal: function() { return this.input.getQuery() },
        destroy: function() { this.input.destroy(), this.dropdown.destroy(), g(this.$node, this.cssClasses), this.$node = null },
        getWrapper: function() { return this.dropdown.$container[0] }
    }), d.Dropdown = m, d.Input = l, d.sources = c(20), a.exports = d
}, function(a, b, c) {
    "use strict";

    function d(a) { a && a.el || e.error("EventBus initialized without el"), this.$el = f.element(a.el) }
    var e = c(4),
        f = c(2);
    e.mixin(d.prototype, { trigger: function(a, b, c, d) { var f = e.Event("autocomplete:" + a); return this.$el.trigger(f, [b, c, d]), f } }), a.exports = d
}, function(a, b, c) {
    "use strict";

    function d(a) {
        var b, c, d, f, g = this;
        a = a || {}, a.input || i.error("input is missing"), b = i.bind(this._onBlur, this), c = i.bind(this._onFocus, this), d = i.bind(this._onKeydown, this), f = i.bind(this._onInput, this), this.$hint = j.element(a.hint), this.$input = j.element(a.input).on("blur.aa", b).on("focus.aa", c).on("keydown.aa", d), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = i.noop), i.isMsie() ? this.$input.on("keydown.aa keypress.aa cut.aa paste.aa", function(a) { h[a.which || a.keyCode] || i.defer(i.bind(g._onInput, g, a)) }) : this.$input.on("input.aa", f), this.query = this.$input.val(), this.$overflowHelper = e(this.$input)
    }

    function e(a) { return j.element('<pre aria-hidden="true"></pre>').css({ position: "absolute", visibility: "hidden", whiteSpace: "pre", fontFamily: a.css("font-family"), fontSize: a.css("font-size"), fontStyle: a.css("font-style"), fontVariant: a.css("font-variant"), fontWeight: a.css("font-weight"), wordSpacing: a.css("word-spacing"), letterSpacing: a.css("letter-spacing"), textIndent: a.css("text-indent"), textRendering: a.css("text-rendering"), textTransform: a.css("text-transform") }).insertAfter(a) }

    function f(a, b) { return d.normalizeQuery(a) === d.normalizeQuery(b) }

    function g(a) { return a.altKey || a.ctrlKey || a.metaKey || a.shiftKey }
    var h;
    h = { 9: "tab", 27: "esc", 37: "left", 39: "right", 13: "enter", 38: "up", 40: "down" };
    var i = c(4),
        j = c(2),
        k = c(8);
    d.normalizeQuery = function(a) { return (a || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ") }, i.mixin(d.prototype, k, {
        _onBlur: function() { this.resetInputValue(), this.$input.removeAttr("aria-activedescendant"), this.trigger("blurred") },
        _onFocus: function() { this.trigger("focused") },
        _onKeydown: function(a) {
            var b = h[a.which || a.keyCode];
            this._managePreventDefault(b, a), b && this._shouldTrigger(b, a) && this.trigger(b + "Keyed", a)
        },
        _onInput: function() { this._checkInputValue() },
        _managePreventDefault: function(a, b) {
            var c, d, e;
            switch (a) {
                case "tab":
                    d = this.getHint(), e = this.getInputValue(), c = d && d !== e && !g(b);
                    break;
                case "up":
                case "down":
                    c = !g(b);
                    break;
                default:
                    c = !1
            }
            c && b.preventDefault()
        },
        _shouldTrigger: function(a, b) {
            var c;
            switch (a) {
                case "tab":
                    c = !g(b);
                    break;
                default:
                    c = !0
            }
            return c
        },
        _checkInputValue: function() {
            var a, b, c;
            a = this.getInputValue(), b = f(a, this.query), c = !(!b || !this.query) && this.query.length !== a.length, this.query = a, b ? c && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
        },
        focus: function() { this.$input.focus() },
        blur: function() { this.$input.blur() },
        getQuery: function() { return this.query },
        setQuery: function(a) { this.query = a },
        getInputValue: function() { return this.$input.val() },
        setInputValue: function(a, b) { void 0 === a && (a = this.query), this.$input.val(a), b ? this.clearHint() : this._checkInputValue() },
        expand: function() { this.$input.attr("aria-expanded", "true") },
        collapse: function() { this.$input.attr("aria-expanded", "false") },
        setActiveDescendant: function(a) { this.$input.attr("aria-activedescendant", a) },
        removeActiveDescendant: function() { this.$input.removeAttr("aria-activedescendant") },
        resetInputValue: function() { this.setInputValue(this.query, !0) },
        getHint: function() { return this.$hint.val() },
        setHint: function(a) { this.$hint.val(a) },
        clearHint: function() { this.setHint("") },
        clearHintIfInvalid: function() {
            var a, b, c, d;
            a = this.getInputValue(), b = this.getHint(), c = a !== b && 0 === b.indexOf(a), (d = "" !== a && c && !this.hasOverflow()) || this.clearHint()
        },
        getLanguageDirection: function() { return (this.$input.css("direction") || "ltr").toLowerCase() },
        hasOverflow: function() { var a = this.$input.width() - 2; return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= a },
        isCursorAtEnd: function() { var a, b, c; return a = this.$input.val().length, b = this.$input[0].selectionStart, i.isNumber(b) ? b === a : !document.selection || (c = document.selection.createRange(), c.moveStart("character", -a), a === c.text.length) },
        destroy: function() { this.$hint.off(".aa"), this.$input.off(".aa"), this.$hint = this.$input = this.$overflowHelper = null }
    }), a.exports = d
}, function(a, b, c) {
    "use strict";

    function d(a, b, c, d) { var e; if (!c) return this; for (b = b.split(l), c = d ? j(c, d) : c, this._callbacks = this._callbacks || {}; e = b.shift();) this._callbacks[e] = this._callbacks[e] || { sync: [], async: [] }, this._callbacks[e][a].push(c); return this }

    function e(a, b, c) { return d.call(this, "async", a, b, c) }

    function f(a, b, c) { return d.call(this, "sync", a, b, c) }

    function g(a) { var b; if (!this._callbacks) return this; for (a = a.split(l); b = a.shift();) delete this._callbacks[b]; return this }

    function h(a) {
        var b, c, d, e, f;
        if (!this._callbacks) return this;
        for (a = a.split(l), d = [].slice.call(arguments, 1);
            (b = a.shift()) && (c = this._callbacks[b]);) e = i(c.sync, this, [b].concat(d)), f = i(c.async, this, [b].concat(d)), e() && k(f);
        return this
    }

    function i(a, b, c) {
        function d() { for (var d, e = 0, f = a.length; !d && e < f; e += 1) d = a[e].apply(b, c) === !1; return !d }
        return d
    }

    function j(a, b) { return a.bind ? a.bind(b) : function() { a.apply(b, [].slice.call(arguments, 0)) } }
    var k = c(9),
        l = /\s+/;
    a.exports = { onSync: f, onAsync: e, off: g, trigger: h }
}, function(a, b, c) {
    "use strict";

    function d() { h && i && (h = !1, i.length ? m = i.concat(m) : l = -1, m.length && e()) }

    function e() {
        if (!h) {
            n = !1, h = !0;
            for (var a = m.length, b = setTimeout(d); a;) {
                for (i = m, m = []; i && ++l < a;) i[l].run();
                l = -1, a = m.length
            }
            i = null, l = -1, h = !1, clearTimeout(b)
        }
    }

    function f(a, b) { this.fun = a, this.array = b }

    function g(a) {
        var b = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
        m.push(new f(a, b)), n || h || (n = !0, j())
    }
    for (var h, i, j, k = [c(10), c(12), c(13), c(14), c(15)], l = -1, m = [], n = !1, o = -1, p = k.length; ++o < p;)
        if (k[o] && k[o].test && k[o].test()) { j = k[o].install(e); break }
    f.prototype.run = function() {
        var a = this.fun,
            b = this.array;
        switch (b.length) {
            case 0:
                return a();
            case 1:
                return a(b[0]);
            case 2:
                return a(b[0], b[1]);
            case 3:
                return a(b[0], b[1], b[2]);
            default:
                return a.apply(null, b)
        }
    }, a.exports = g
}, function(a, b, c) {
    (function(a) {
        "use strict";
        b.test = function() { return void 0 !== a && !a.browser }, b.install = function(b) { return function() { a.nextTick(b) } }
    }).call(b, c(11))
}, function(a, b) {
    function c() { throw new Error("setTimeout has not been defined") }

    function d() { throw new Error("clearTimeout has not been defined") }

    function e(a) { if (k === setTimeout) return setTimeout(a, 0); if ((k === c || !k) && setTimeout) return k = setTimeout, setTimeout(a, 0); try { return k(a, 0) } catch (b) { try { return k.call(null, a, 0) } catch (b) { return k.call(this, a, 0) } } }

    function f(a) { if (l === clearTimeout) return clearTimeout(a); if ((l === d || !l) && clearTimeout) return l = clearTimeout, clearTimeout(a); try { return l(a) } catch (b) { try { return l.call(null, a) } catch (b) { return l.call(this, a) } } }

    function g() { p && n && (p = !1, n.length ? o = n.concat(o) : q = -1, o.length && h()) }

    function h() {
        if (!p) {
            var a = e(g);
            p = !0;
            for (var b = o.length; b;) {
                for (n = o, o = []; ++q < b;) n && n[q].run();
                q = -1, b = o.length
            }
            n = null, p = !1, f(a)
        }
    }

    function i(a, b) { this.fun = a, this.array = b }

    function j() {}
    var k, l, m = a.exports = {};
    ! function() { try { k = "function" == typeof setTimeout ? setTimeout : c } catch (a) { k = c } try { l = "function" == typeof clearTimeout ? clearTimeout : d } catch (a) { l = d } }();
    var n, o = [],
        p = !1,
        q = -1;
    m.nextTick = function(a) {
        var b = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
        o.push(new i(a, b)), 1 !== o.length || p || e(h)
    }, i.prototype.run = function() { this.fun.apply(null, this.array) }, m.title = "browser", m.browser = !0, m.env = {}, m.argv = [], m.version = "", m.versions = {}, m.on = j, m.addListener = j, m.once = j, m.off = j, m.removeListener = j, m.removeAllListeners = j, m.emit = j, m.binding = function(a) { throw new Error("process.binding is not supported") }, m.cwd = function() { return "/" }, m.chdir = function(a) { throw new Error("process.chdir is not supported") }, m.umask = function() { return 0 }
}, function(a, b) {
    (function(a) {
        "use strict";
        var c = a.MutationObserver || a.WebKitMutationObserver;
        b.test = function() { return c }, b.install = function(b) {
            var d = 0,
                e = new c(b),
                f = a.document.createTextNode("");
            return e.observe(f, { characterData: !0 }),
                function() { f.data = d = ++d % 2 }
        }
    }).call(b, function() { return this }())
}, function(a, b) {
    (function(a) {
        "use strict";
        b.test = function() { return !a.setImmediate && void 0 !== a.MessageChannel }, b.install = function(b) {
            var c = new a.MessageChannel;
            return c.port1.onmessage = b,
                function() { c.port2.postMessage(0) }
        }
    }).call(b, function() { return this }())
}, function(a, b) {
    (function(a) {
        "use strict";
        b.test = function() { return "document" in a && "onreadystatechange" in a.document.createElement("script") }, b.install = function(b) { return function() { var c = a.document.createElement("script"); return c.onreadystatechange = function() { b(), c.onreadystatechange = null, c.parentNode.removeChild(c), c = null }, a.document.documentElement.appendChild(c), b } }
    }).call(b, function() { return this }())
}, function(a, b) {
    "use strict";
    b.test = function() { return !0 }, b.install = function(a) { return function() { setTimeout(a, 0) } }
}, function(a, b, c) {
    "use strict";

    function d(a) {
        var b, c, d, h = this;
        a = a || {}, a.menu || f.error("menu is required"), f.isArray(a.datasets) || f.isObject(a.datasets) || f.error("1 or more datasets required"), a.datasets || f.error("datasets is required"), this.isOpen = !1, this.isEmpty = !0, this.minLength = a.minLength || 0, this.templates = {}, this.appendTo = a.appendTo || !1, this.css = f.mixin({}, j, a.appendTo ? j.appendTo : {}), this.cssClasses = a.cssClasses = f.mixin({}, j.defaultClasses, a.cssClasses || {}), this.cssClasses.prefix = a.cssClasses.formattedPrefix || f.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix), b = f.bind(this._onSuggestionClick, this), c = f.bind(this._onSuggestionMouseEnter, this), d = f.bind(this._onSuggestionMouseLeave, this);
        var i = f.className(this.cssClasses.prefix, this.cssClasses.suggestion);
        this.$menu = g.element(a.menu).on("mouseenter.aa", i, c).on("mouseleave.aa", i, d).on("click.aa", i, b), this.$container = a.appendTo ? a.wrapper : this.$menu, a.templates && a.templates.header && (this.templates.header = f.templatify(a.templates.header), this.$menu.prepend(this.templates.header())), a.templates && a.templates.empty && (this.templates.empty = f.templatify(a.templates.empty), this.$empty = g.element('<div class="' + f.className(this.cssClasses.prefix, this.cssClasses.empty, !0) + '"></div>'), this.$menu.append(this.$empty), this.$empty.hide()), this.datasets = f.map(a.datasets, function(b) { return e(h.$menu, b, a.cssClasses) }), f.each(this.datasets, function(a) {
            var b = a.getRoot();
            b && 0 === b.parent().length && h.$menu.append(b), a.onSync("rendered", h._onRendered, h)
        }), a.templates && a.templates.footer && (this.templates.footer = f.templatify(a.templates.footer), this.$menu.append(this.templates.footer()));
        var k = this;
        g.element(window).resize(function() { k._redraw() })
    }

    function e(a, b, c) { return new d.Dataset(f.mixin({ $menu: a, cssClasses: c }, b)) }
    var f = c(4),
        g = c(2),
        h = c(8),
        i = c(17),
        j = c(19);
    f.mixin(d.prototype, h, {
        _onSuggestionClick: function(a) { this.trigger("suggestionClicked", g.element(a.currentTarget)) },
        _onSuggestionMouseEnter: function(a) {
            var b = g.element(a.currentTarget);
            if (!b.hasClass(f.className(this.cssClasses.prefix, this.cssClasses.cursor, !0))) {
                this._removeCursor();
                var c = this;
                setTimeout(function() { c._setCursor(b, !1) }, 0)
            }
        },
        _onSuggestionMouseLeave: function(a) {
            if (a.relatedTarget) { if (g.element(a.relatedTarget).closest("." + f.className(this.cssClasses.prefix, this.cssClasses.cursor, !0)).length > 0) return }
            this._removeCursor(), this.trigger("cursorRemoved")
        },
        _onRendered: function(a, b) {
            function c(a) { return a.isEmpty() }

            function d(a) { return a.templates && a.templates.empty }
            if (this.isEmpty = f.every(this.datasets, c), this.isEmpty)
                if (b.length >= this.minLength && this.trigger("empty"), this.$empty)
                    if (b.length < this.minLength) this._hide();
                    else {
                        var e = this.templates.empty({ query: this.datasets[0] && this.datasets[0].query });
                        this.$empty.html(e), this.$empty.show(), this._show()
                    }
            else f.any(this.datasets, d) ? b.length < this.minLength ? this._hide() : this._show() : this._hide();
            else this.isOpen && (this.$empty && (this.$empty.empty(), this.$empty.hide()), b.length >= this.minLength ? this._show() : this._hide());
            this.trigger("datasetRendered")
        },
        _hide: function() { this.$container.hide() },
        _show: function() { this.$container.css("display", "block"), this._redraw(), this.trigger("shown") },
        _redraw: function() { this.isOpen && this.appendTo && this.trigger("redrawn") },
        _getSuggestions: function() { return this.$menu.find(f.className(this.cssClasses.prefix, this.cssClasses.suggestion)) },
        _getCursor: function() { return this.$menu.find(f.className(this.cssClasses.prefix, this.cssClasses.cursor)).first() },
        _setCursor: function(a, b) { a.first().addClass(f.className(this.cssClasses.prefix, this.cssClasses.cursor, !0)).attr("aria-selected", "true"), this.trigger("cursorMoved", b) },
        _removeCursor: function() { this._getCursor().removeClass(f.className(this.cssClasses.prefix, this.cssClasses.cursor, !0)).removeAttr("aria-selected") },
        _moveCursor: function(a) {
            var b, c, d, e;
            if (this.isOpen) {
                if (c = this._getCursor(), b = this._getSuggestions(), this._removeCursor(), d = b.index(c) + a, (d = (d + 1) % (b.length + 1) - 1) === -1) return void this.trigger("cursorRemoved");
                d < -1 && (d = b.length - 1), this._setCursor(e = b.eq(d), !0), this._ensureVisible(e)
            }
        },
        _ensureVisible: function(a) {
            var b, c, d, e;
            b = a.position().top, c = b + a.height() + parseInt(a.css("margin-top"), 10) + parseInt(a.css("margin-bottom"), 10), d = this.$menu.scrollTop(), e = this.$menu.height() + parseInt(this.$menu.css("padding-top"), 10) + parseInt(this.$menu.css("padding-bottom"), 10), b < 0 ? this.$menu.scrollTop(d + b) : e < c && this.$menu.scrollTop(d + (c - e))
        },
        close: function() { this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed")) },
        open: function() { this.isOpen || (this.isOpen = !0, this.isEmpty || this._show(), this.trigger("opened")) },
        setLanguageDirection: function(a) { this.$menu.css("ltr" === a ? this.css.ltr : this.css.rtl) },
        moveCursorUp: function() { this._moveCursor(-1) },
        moveCursorDown: function() { this._moveCursor(1) },
        getDatumForSuggestion: function(a) { var b = null; return a.length && (b = { raw: i.extractDatum(a), value: i.extractValue(a), datasetName: i.extractDatasetName(a) }), b },
        getCurrentCursor: function() { return this._getCursor().first() },
        getDatumForCursor: function() { return this.getDatumForSuggestion(this._getCursor().first()) },
        getDatumForTopSuggestion: function() { return this.getDatumForSuggestion(this._getSuggestions().first()) },
        cursorTopSuggestion: function() { this._setCursor(this._getSuggestions().first(), !1) },
        update: function(a) {
            function b(b) { b.update(a) }
            f.each(this.datasets, b)
        },
        empty: function() {
            function a(a) { a.clear() }
            f.each(this.datasets, a), this.isEmpty = !0
        },
        isVisible: function() { return this.isOpen && !this.isEmpty },
        destroy: function() {
            function a(a) { a.destroy() }
            this.$menu.off(".aa"), this.$menu = null, f.each(this.datasets, a)
        }
    }), d.Dataset = i, a.exports = d
}, function(a, b, c) {
    "use strict";

    function d(a) {
        a = a || {}, a.templates = a.templates || {}, a.source || k.error("missing source"), a.name && !g(a.name) && k.error("invalid dataset name: " + a.name), this.query = null, this._isEmpty = !0, this.highlight = !!a.highlight, this.name = void 0 === a.name || null === a.name ? k.getUniqueId() : a.name, this.source = a.source, this.displayFn = e(a.display || a.displayKey), this.debounce = a.debounce, this.cache = a.cache !== !1, this.templates = f(a.templates, this.displayFn), this.css = k.mixin({}, n, a.appendTo ? n.appendTo : {}), this.cssClasses = a.cssClasses = k.mixin({}, n.defaultClasses, a.cssClasses || {}), this.cssClasses.prefix = a.cssClasses.formattedPrefix || k.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix);
        var b = k.className(this.cssClasses.prefix, this.cssClasses.dataset);
        this.$el = a.$menu && a.$menu.find(b + "-" + this.name).length > 0 ? l.element(a.$menu.find(b + "-" + this.name)[0]) : l.element(m.dataset.replace("%CLASS%", this.name).replace("%PREFIX%", this.cssClasses.prefix).replace("%DATASET%", this.cssClasses.dataset)), this.$menu = a.$menu, this.clearCachedSuggestions()
    }

    function e(a) {
        function b(b) { return b[a] }
        return a = a || "value", k.isFunction(a) ? a : b
    }

    function f(a, b) {
        function c(a) { return "<p>" + b(a) + "</p>" }
        return { empty: a.empty && k.templatify(a.empty), header: a.header && k.templatify(a.header), footer: a.footer && k.templatify(a.footer), suggestion: a.suggestion || c }
    }

    function g(a) { return /^[_a-zA-Z0-9-]+$/.test(a) }
    var h = "aaDataset",
        i = "aaValue",
        j = "aaDatum",
        k = c(4),
        l = c(2),
        m = c(18),
        n = c(19),
        o = c(8);
    d.extractDatasetName = function(a) { return l.element(a).data(h) }, d.extractValue = function(a) { return l.element(a).data(i) }, d.extractDatum = function(a) { var b = l.element(a).data(j); return "string" == typeof b && (b = JSON.parse(b)), b }, k.mixin(d.prototype, o, {
        _render: function(a, b) {
            function c() { var b = [].slice.call(arguments, 0); return b = [{ query: a, isEmpty: !0 }].concat(b), n.templates.empty.apply(this, b) }

            function d() {
                function a(a) { var b, c = m.suggestion.replace("%PREFIX%", f.cssClasses.prefix).replace("%SUGGESTION%", f.cssClasses.suggestion); return b = l.element(c).attr({ role: "option", id: ["option", Math.floor(1e8 * Math.random())].join("-") }).append(n.templates.suggestion.apply(this, [a].concat(e))), b.data(h, n.name), b.data(i, n.displayFn(a) || void 0), b.data(j, JSON.stringify(a)), b.children().each(function() { l.element(this).css(f.css.suggestionChild) }), b }
                var c, d, e = [].slice.call(arguments, 0),
                    f = this,
                    g = m.suggestions.replace("%PREFIX%", this.cssClasses.prefix).replace("%SUGGESTIONS%", this.cssClasses.suggestions);
                return c = l.element(g).css(this.css.suggestions), d = k.map(b, a), c.append.apply(c, d), c
            }

            function e() { var b = [].slice.call(arguments, 0); return b = [{ query: a, isEmpty: !g }].concat(b), n.templates.header.apply(this, b) }

            function f() { var b = [].slice.call(arguments, 0); return b = [{ query: a, isEmpty: !g }].concat(b), n.templates.footer.apply(this, b) }
            if (this.$el) {
                var g, n = this,
                    o = [].slice.call(arguments, 2);
                if (this.$el.empty(), g = b && b.length, this._isEmpty = !g, !g && this.templates.empty) this.$el.html(c.apply(this, o)).prepend(n.templates.header ? e.apply(this, o) : null).append(n.templates.footer ? f.apply(this, o) : null);
                else if (g) this.$el.html(d.apply(this, o)).prepend(n.templates.header ? e.apply(this, o) : null).append(n.templates.footer ? f.apply(this, o) : null);
                else if (b && !Array.isArray(b)) throw new TypeError("suggestions must be an array");
                this.$menu && this.$menu.addClass(this.cssClasses.prefix + (g ? "with" : "without") + "-" + this.name).removeClass(this.cssClasses.prefix + (g ? "without" : "with") + "-" + this.name), this.trigger("rendered", a)
            }
        },
        getRoot: function() { return this.$el },
        update: function(a) {
            function b(b) {
                if (!this.canceled && a === this.query) {
                    var c = [].slice.call(arguments, 1);
                    this.cacheSuggestions(a, b, c), this._render.apply(this, [a, b].concat(c))
                }
            }
            if (this.query = a, this.canceled = !1, this.shouldFetchFromCache(a)) b.apply(this, [this.cachedSuggestions].concat(this.cachedRenderExtraArgs));
            else {
                var c = this,
                    d = function() { c.canceled || c.source(a, b.bind(c)) };
                if (this.debounce) {
                    var e = function() { c.debounceTimeout = null, d() };
                    clearTimeout(this.debounceTimeout), this.debounceTimeout = setTimeout(e, this.debounce)
                } else d()
            }
        },
        cacheSuggestions: function(a, b, c) { this.cachedQuery = a, this.cachedSuggestions = b, this.cachedRenderExtraArgs = c },
        shouldFetchFromCache: function(a) { return this.cache && this.cachedQuery === a && this.cachedSuggestions && this.cachedSuggestions.length },
        clearCachedSuggestions: function() { delete this.cachedQuery, delete this.cachedSuggestions, delete this.cachedRenderExtraArgs },
        cancel: function() { this.canceled = !0 },
        clear: function() { this.$el && (this.cancel(), this.$el.empty(), this.trigger("rendered", "")) },
        isEmpty: function() { return this._isEmpty },
        destroy: function() { this.clearCachedSuggestions(), this.$el = null }
    }), a.exports = d
}, function(a, b) {
    "use strict";
    a.exports = { wrapper: '<span class="%ROOT%"></span>', dropdown: '<span class="%PREFIX%%DROPDOWN_MENU%"></span>', dataset: '<div class="%PREFIX%%DATASET%-%CLASS%"></div>', suggestions: '<span class="%PREFIX%%SUGGESTIONS%"></span>', suggestion: '<div class="%PREFIX%%SUGGESTION%"></div>' }
}, function(a, b, c) {
    "use strict";
    var d = c(4),
        e = { wrapper: { position: "relative", display: "inline-block" }, hint: { position: "absolute", top: "0", left: "0", borderColor: "transparent", boxShadow: "none", opacity: "1" }, input: { position: "relative", verticalAlign: "top", backgroundColor: "transparent" }, inputWithNoHint: { position: "relative", verticalAlign: "top" }, dropdown: { position: "absolute", top: "100%", left: "0", zIndex: "100", display: "none" }, suggestions: { display: "block" }, suggestion: { whiteSpace: "nowrap", cursor: "pointer" }, suggestionChild: { whiteSpace: "normal" }, ltr: { left: "0", right: "auto" }, rtl: { left: "auto", right: "0" }, defaultClasses: { root: "algolia-autocomplete", prefix: "aa", noPrefix: !1, dropdownMenu: "dropdown-menu", input: "input", hint: "hint", suggestions: "suggestions", suggestion: "suggestion", cursor: "cursor", dataset: "dataset", empty: "empty" }, appendTo: { wrapper: { position: "absolute", zIndex: "100", display: "none" }, input: {}, inputWithNoHint: {}, dropdown: { display: "block" } } };
    d.isMsie() && d.mixin(e.input, { backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)" }), d.isMsie() && d.isMsie() <= 7 && d.mixin(e.input, { marginTop: "-1px" }), a.exports = e
}, function(a, b, c) {
    "use strict";
    a.exports = { hits: c(21), popularIn: c(24) }
}, function(a, b, c) {
    "use strict";
    var d = c(4),
        e = c(22),
        f = c(23),
        g = function() {
            function a(a, d) { return window.Promise.resolve().then(function() { return b.length && (e = a.search(b), b = []), e }).then(function(a) { if (a) return c = a.results, c[d] }) }
            var b = [],
                c = [],
                e = window.Promise.resolve();
            return function(c, e) { return function(f, g) { a(c.as, b.push({ indexName: c.indexName, query: f, params: e }) - 1).then(function(a) { a && g(a.hits, a) }).catch(function(a) { d.error(a.message) }) } }
        }();
    a.exports = function(a, b) {
        var c = f(a.as._ua);
        if (c && c[0] >= 3 && c[1] > 20) {
            var d = "autocomplete.js " + e;
            a.as._ua.indexOf(d) === -1 && (a.as._ua += "; " + d)
        }
        return g(a, b)
    }
}, function(a, b) { a.exports = "0.38.1" }, function(a, b) {
    "use strict";
    a.exports = function(a) { var b = a.match(/Algolia for JavaScript \((\d+\.)(\d+\.)(\d+)\)/) || a.match(/Algolia for vanilla JavaScript (\d+\.)(\d+\.)(\d+)/); if (b) return [b[1], b[2], b[3]] }
}, function(a, b, c) {
    "use strict";
    var d = c(4),
        e = c(22),
        f = c(23);
    a.exports = function(a, b, c, g) {
        function h(h, i) {
            a.search(h, b, function(a, h) {
                if (a) return void d.error(a.message);
                if (h.hits.length > 0) {
                    var l = h.hits[0],
                        m = d.mixin({ hitsPerPage: 0 }, c);
                    delete m.source, delete m.index;
                    var n = f(k.as._ua);
                    return n && n[0] >= 3 && n[1] > 20 && (b.additionalUA = "autocomplete.js " + e), void k.search(j(l), m, function(a, b) {
                        if (a) return void d.error(a.message);
                        var c = [];
                        if (g.includeAll) {
                            var e = g.allTitle || "All departments";
                            c.push(d.mixin({ facet: { value: e, count: b.nbHits } }, d.cloneDeep(l)))
                        }
                        d.each(b.facets, function(a, b) { d.each(a, function(a, e) { c.push(d.mixin({ facet: { facet: b, value: e, count: a } }, d.cloneDeep(l))) }) });
                        for (var f = 1; f < h.hits.length; ++f) c.push(h.hits[f]);
                        i(c, h)
                    })
                }
                i([])
            })
        }
        var i = f(a.as._ua);
        if (i && i[0] >= 3 && i[1] > 20 && (b = b || {}, b.additionalUA = "autocomplete.js " + e), !c.source) return d.error("Missing 'source' key");
        var j = d.isFunction(c.source) ? c.source : function(a) { return a[c.source] };
        if (!c.index) return d.error("Missing 'index' key");
        var k = c.index;
        return g = g || {}, h
    }
}]);