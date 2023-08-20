/*! rangeslider.js - v2.3.0 | (c) 2016 @andreruffert | MIT license | https://github.com/andreruffert/rangeslider.js */ ! function(t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery) }((function(t) {
    "use strict";

    function i(t) { return t && (0 === t.offsetWidth || 0 === t.offsetHeight || !1 === t.open) }

    function e(t) { for (var e = [], n = t.parentNode; i(n);) e.push(n), n = n.parentNode; return e }

    function n(t, i) {
        function n(t) { void 0 !== t.open && (t.open = !t.open) }
        var s = e(t),
            o = s.length,
            r = [],
            h = t[i];
        if (o) {
            for (var a = 0; a < o; a++) r[a] = s[a].style.cssText, s[a].style.setProperty ? s[a].style.setProperty("display", "block", "important") : s[a].style.cssText += ";display: block !important", s[a].style.height = "0", s[a].style.overflow = "hidden", s[a].style.visibility = "hidden", n(s[a]);
            h = t[i];
            for (var l = 0; l < o; l++) s[l].style.cssText = r[l], n(s[l])
        }
        return h
    }

    function s(t, i) { var e = parseFloat(t); return Number.isNaN(e) ? i : e }

    function o(t) { return t.charAt(0).toUpperCase() + t.substr(1) }

    function r(i, e) {
        if (this.$window = t(window), this.$document = t(document), this.$element = t(i), this.options = t.extend({}, d, e), this.polyfill = this.options.polyfill, this.orientation = this.$element[0].getAttribute("data-orientation") || this.options.orientation, this.onInit = this.options.onInit, this.onSlide = this.options.onSlide, this.onSlideEnd = this.options.onSlideEnd, this.DIMENSION = u.orientation[this.orientation].dimension, this.DIRECTION = u.orientation[this.orientation].direction, this.DIRECTION_STYLE = u.orientation[this.orientation].directionStyle, this.COORDINATE = u.orientation[this.orientation].coordinate, this.polyfill && l) return !1;
        this.identifier = "js-" + h + "-" + a++, this.startEvent = this.options.startEvent.join("." + this.identifier + " ") + "." + this.identifier, this.moveEvent = this.options.moveEvent.join("." + this.identifier + " ") + "." + this.identifier, this.endEvent = this.options.endEvent.join("." + this.identifier + " ") + "." + this.identifier, this.toFixed = (this.step + "").replace(".", "").length - 1, this.$fill = t('<div class="' + this.options.fillClass + '" />'), this.$handle = t('<div class="' + this.options.handleClass + '" />'), this.$range = t('<div class="' + this.options.rangeClass + " " + this.options[this.orientation + "Class"] + '" id="' + this.identifier + '" />').insertAfter(this.$element).prepend(this.$fill, this.$handle), this.$element.css({ position: "absolute", width: "1px", height: "1px", overflow: "hidden", opacity: "0" }), this.handleDown = t.proxy(this.handleDown, this), this.handleMove = t.proxy(this.handleMove, this), this.handleEnd = t.proxy(this.handleEnd, this), this.init();
        var n = this;
        this.$window.on("resize." + this.identifier, function(t, i) {
            return i = i || 100,
                function() {
                    if (!t.debouncing) {
                        var e = Array.prototype.slice.apply(arguments);
                        t.lastReturnVal = t.apply(window, e), t.debouncing = !0
                    }
                    return clearTimeout(t.debounceTimeout), t.debounceTimeout = setTimeout((function() { t.debouncing = !1 }), i), t.lastReturnVal
                }
        }((function() {
            ! function(t, i) {
                var e = Array.prototype.slice.call(arguments, 2);
                setTimeout((function() { return t.apply(null, e) }), i)
            }((function() { n.update(!1, !1) }), 300)
        }), 20)), this.$document.on(this.startEvent, "#" + this.identifier + ":not(." + this.options.disabledClass + ")", this.handleDown), this.$element.on("change." + this.identifier, (function(t, i) {
            if (!i || i.origin !== n.identifier) {
                var e = t.target.value,
                    s = n.getPositionFromValue(e);
                n.setPosition(s)
            }
        }))
    }
    Number.isNaN = Number.isNaN || function(t) { return "number" == typeof t && t != t };
    var h = "rangeslider",
        a = 0,
        l = function() { var t = document.createElement("input"); return t.setAttribute("type", "range"), "text" !== t.type }(),
        d = { polyfill: !0, orientation: "horizontal", rangeClass: "rangeslider", disabledClass: "rangeslider--disabled", activeClass: "rangeslider--active", horizontalClass: "rangeslider--horizontal", verticalClass: "rangeslider--vertical", fillClass: "rangeslider__fill", handleClass: "rangeslider__handle", startEvent: ["mousedown", "touchstart", "pointerdown"], moveEvent: ["mousemove", "touchmove", "pointermove"], endEvent: ["mouseup", "touchend", "pointerup"] },
        u = { orientation: { horizontal: { dimension: "width", direction: "left", directionStyle: "left", coordinate: "x" }, vertical: { dimension: "height", direction: "top", directionStyle: "bottom", coordinate: "y" } } };
    return r.prototype.init = function() { this.update(!0, !1), this.onInit && "function" == typeof this.onInit && this.onInit() }, r.prototype.update = function(t, i) {
        (t = t || !1) && (this.min = s(this.$element[0].getAttribute("min"), 0), this.max = s(this.$element[0].getAttribute("max"), 100), this.value = s(this.$element[0].value, Math.round(this.min + (this.max - this.min) / 2)), this.step = s(this.$element[0].getAttribute("step"), 1)), this.handleDimension = n(this.$handle[0], "offset" + o(this.DIMENSION)), this.rangeDimension = n(this.$range[0], "offset" + o(this.DIMENSION)), this.maxHandlePos = this.rangeDimension - this.handleDimension, this.grabPos = this.handleDimension / 2, this.position = this.getPositionFromValue(this.value), this.$element[0].disabled ? this.$range.addClass(this.options.disabledClass) : this.$range.removeClass(this.options.disabledClass), this.setPosition(this.position, i)
    }, r.prototype.handleDown = function(t) {
        if (t.preventDefault(), this.$document.on(this.moveEvent, this.handleMove), this.$document.on(this.endEvent, this.handleEnd), this.$range.addClass(this.options.activeClass), !((" " + t.target.className + " ").replace(/[\n\t]/g, " ").indexOf(this.options.handleClass) > -1)) {
            var i = this.getRelativePosition(t),
                e = this.$range[0].getBoundingClientRect()[this.DIRECTION],
                n = this.getPositionFromNode(this.$handle[0]) - e,
                s = "vertical" === this.orientation ? this.maxHandlePos - (i - this.grabPos) : i - this.grabPos;
            this.setPosition(s), i >= n && i < n + this.handleDimension && (this.grabPos = i - n)
        }
    }, r.prototype.handleMove = function(t) {
        t.preventDefault();
        var i = this.getRelativePosition(t),
            e = "vertical" === this.orientation ? this.maxHandlePos - (i - this.grabPos) : i - this.grabPos;
        this.setPosition(e)
    }, r.prototype.handleEnd = function(t) { t.preventDefault(), this.$document.off(this.moveEvent, this.handleMove), this.$document.off(this.endEvent, this.handleEnd), this.$range.removeClass(this.options.activeClass), this.$element.trigger("change", { origin: this.identifier }), this.onSlideEnd && "function" == typeof this.onSlideEnd && this.onSlideEnd(this.position, this.value) }, r.prototype.cap = function(t, i, e) { return t < i ? i : t > e ? e : t }, r.prototype.setPosition = function(t, i) {
        var e, n;
        void 0 === i && (i = !0), e = this.getValueFromPosition(this.cap(t, 0, this.maxHandlePos)), n = this.getPositionFromValue(e), this.$fill[0].style[this.DIMENSION] = n + this.grabPos + "px", this.$handle[0].style[this.DIRECTION_STYLE] = n + "px", this.setValue(e), this.position = n, this.value = e, i && this.onSlide && "function" == typeof this.onSlide && this.onSlide(n, e)
    }, r.prototype.getPositionFromNode = function(t) { for (var i = 0; null !== t;) i += t.offsetLeft, t = t.offsetParent; return i }, r.prototype.getRelativePosition = function(t) {
        var i = o(this.COORDINATE),
            e = this.$range[0].getBoundingClientRect()[this.DIRECTION],
            n = 0;
        return void 0 !== t.originalEvent["client" + i] ? n = t.originalEvent["client" + i] : t.originalEvent.touches && t.originalEvent.touches[0] && void 0 !== t.originalEvent.touches[0]["client" + i] ? n = t.originalEvent.touches[0]["client" + i] : t.currentPoint && void 0 !== t.currentPoint[this.COORDINATE] && (n = t.currentPoint[this.COORDINATE]), n - e
    }, r.prototype.getPositionFromValue = function(t) { var i; return i = (t - this.min) / (this.max - this.min), Number.isNaN(i) ? 0 : i * this.maxHandlePos }, r.prototype.getValueFromPosition = function(t) { var i, e; return i = t / (this.maxHandlePos || 1), e = this.step * Math.round(i * (this.max - this.min) / this.step) + this.min, Number(e.toFixed(this.toFixed)) }, r.prototype.setValue = function(t) { t === this.value && "" !== this.$element[0].value || this.$element.val(t).trigger("input", { origin: this.identifier }) }, r.prototype.destroy = function() { this.$document.off("." + this.identifier), this.$window.off("." + this.identifier), this.$element.off("." + this.identifier).removeAttr("style").removeData("plugin_" + h), this.$range && this.$range.length && this.$range[0].parentNode.removeChild(this.$range[0]) }, t.fn[h] = function(i) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.each((function() {
            var n = t(this),
                s = n.data("plugin_" + h);
            s || n.data("plugin_" + h, s = new r(this, i)), "string" == typeof i && s[i].apply(s, e)
        }))
    }, "rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"
}));