if (!function(d) {
    d.fn.viewportChecker = function(t) {
        var c = {
            classToAdd: "visible",
            classToRemove: "invisible",
            classToAddForFullView: "full-visible",
            removeClassAfterAnimation: !1,
            offset: 100,
            repeat: !1,
            invertBottomOffset: !0,
            callbackFunction: function(t, e) {},
            scrollHorizontal: !1,
            scrollBox: window
        };
        d.extend(c, t);
        var e = this, l = {
            height: d(c.scrollBox).height(),
            width: d(c.scrollBox).width()
        };
        return this.checkElements = function() {
            var r, a = c.scrollHorizontal ? (r = Math.max(d("html").scrollLeft(), d("body").scrollLeft(), d(window).scrollLeft())) + l.width : (r = Math.max(d("html").scrollTop(), d("body").scrollTop(), d(window).scrollTop())) + l.height;
            e.each(function() {
                var t, e, i, o = d(this), n = {}, s = {};
                o.data("vp-add-class") && (s.classToAdd = o.data("vp-add-class")), o.data("vp-remove-class") && (s.classToRemove = o.data("vp-remove-class")), 
                o.data("vp-add-class-full-view") && (s.classToAddForFullView = o.data("vp-add-class-full-view")), 
                o.data("vp-keep-add-class") && (s.removeClassAfterAnimation = o.data("vp-remove-after-animation")), 
                o.data("vp-offset") && (s.offset = o.data("vp-offset")), o.data("vp-repeat") && (s.repeat = o.data("vp-repeat")), 
                o.data("vp-scrollHorizontal") && (s.scrollHorizontal = o.data("vp-scrollHorizontal")), 
                o.data("vp-invertBottomOffset") && (s.scrollHorizontal = o.data("vp-invertBottomOffset")), 
                d.extend(n, c), d.extend(n, s), o.data("vp-animated") && !n.repeat || (0 < String(n.offset).indexOf("%") && (n.offset = parseInt(n.offset) / 100 * l.height), 
                t = n.scrollHorizontal ? o.offset().left : o.offset().top, e = n.scrollHorizontal ? t + o.width() : t + o.height(), 
                i = Math.round(t) + n.offset, s = n.scrollHorizontal ? i + o.width() : i + o.height(), 
                n.invertBottomOffset && (s -= 2 * n.offset), i < a && r < s ? (o.removeClass(n.classToRemove), 
                o.addClass(n.classToAdd), n.callbackFunction(o, "add"), e <= a && r <= t ? o.addClass(n.classToAddForFullView) : o.removeClass(n.classToAddForFullView), 
                o.data("vp-animated", !0), n.removeClassAfterAnimation && o.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    o.removeClass(n.classToAdd);
                })) : o.hasClass(n.classToAdd) && n.repeat && (o.removeClass(n.classToAdd + " " + n.classToAddForFullView), 
                n.callbackFunction(o, "remove"), o.data("vp-animated", !1)));
            });
        }, ("ontouchstart" in window || "onmsgesturechange" in window) && d(document).bind("touchmove MSPointerMove pointermove", this.checkElements), 
        d(c.scrollBox).bind("load scroll", this.checkElements), d(window).resize(function(t) {
            l = {
                height: d(c.scrollBox).height(),
                width: d(c.scrollBox).width()
            }, e.checkElements();
        }), this.checkElements(), this;
    };
}(jQuery), function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e();
}(this, function() {
    "use strict";
    var t, o;
    function p() {
        return t.apply(null, arguments);
    }
    function r(t) {
        return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t);
    }
    function a(t) {
        return null != t && "[object Object]" === Object.prototype.toString.call(t);
    }
    function s(t) {
        return void 0 === t;
    }
    function c(t) {
        return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t);
    }
    function n(t) {
        return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t);
    }
    function l(t, e) {
        for (var i = [], o = 0; o < t.length; ++o) i.push(e(t[o], o));
        return i;
    }
    function u(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }
    function d(t, e) {
        for (var i in e) u(e, i) && (t[i] = e[i]);
        return u(e, "toString") && (t.toString = e.toString), u(e, "valueOf") && (t.valueOf = e.valueOf), 
        t;
    }
    function h(t, e, i, o) {
        return we(t, e, i, o, !0).utc();
    }
    function f(t) {
        return null == t._pf && (t._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }), t._pf;
    }
    function M(t) {
        if (null == t._isValid) {
            var e = f(t), i = o.call(e.parsedDateParts, function(t) {
                return null != t;
            }), i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);
            if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), 
            null != Object.isFrozen && Object.isFrozen(t)) return i;
            t._isValid = i;
        }
        return t._isValid;
    }
    function b(t) {
        var e = h(NaN);
        return null != t ? d(f(e), t) : f(e).userInvalidated = !0, e;
    }
    o = Array.prototype.some ? Array.prototype.some : function(t) {
        for (var e = Object(this), i = e.length >>> 0, o = 0; o < i; o++) if (o in e && t.call(this, e[o], o, e)) return !0;
        return !1;
    };
    var m = p.momentProperties = [];
    function g(t, e) {
        var i, o, n;
        if (s(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), s(e._i) || (t._i = e._i), 
        s(e._f) || (t._f = e._f), s(e._l) || (t._l = e._l), s(e._strict) || (t._strict = e._strict), 
        s(e._tzm) || (t._tzm = e._tzm), s(e._isUTC) || (t._isUTC = e._isUTC), s(e._offset) || (t._offset = e._offset), 
        s(e._pf) || (t._pf = f(e)), s(e._locale) || (t._locale = e._locale), 0 < m.length) for (i = 0; i < m.length; i++) s(n = e[o = m[i]]) || (t[o] = n);
        return t;
    }
    var e = !1;
    function z(t) {
        g(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), 
        !1 === e && (e = !0, p.updateOffset(this), e = !1);
    }
    function A(t) {
        return t instanceof z || null != t && null != t._isAMomentObject;
    }
    function v(t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
    }
    function y(t) {
        var e = +t, t = 0;
        return 0 != e && isFinite(e) && (t = v(e)), t;
    }
    function O(t, e, i) {
        for (var o = Math.min(t.length, e.length), n = Math.abs(t.length - e.length), s = 0, r = 0; r < o; r++) (i && t[r] !== e[r] || !i && y(t[r]) !== y(e[r])) && s++;
        return s + n;
    }
    function L(t) {
        !1 === p.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t);
    }
    function i(n, s) {
        var r = !0;
        return d(function() {
            if (null != p.deprecationHandler && p.deprecationHandler(null, n), r) {
                for (var t, e = [], i = 0; i < arguments.length; i++) {
                    if (t = "", "object" == typeof arguments[i]) {
                        for (var o in t += "\n[" + i + "] ", arguments[0]) t += o + ": " + arguments[0][o] + ", ";
                        t = t.slice(0, -2);
                    } else t = arguments[i];
                    e.push(t);
                }
                L(n + "\nArguments: " + Array.prototype.slice.call(e).join("") + "\n" + new Error().stack), 
                r = !1;
            }
            return s.apply(this, arguments);
        }, s);
    }
    var T, w = {};
    function q(t, e) {
        null != p.deprecationHandler && p.deprecationHandler(t, e), w[t] || (L(e), w[t] = !0);
    }
    function N(t) {
        return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t);
    }
    function S(t, e) {
        var i, o = d({}, t);
        for (i in e) u(e, i) && (a(t[i]) && a(e[i]) ? (o[i] = {}, d(o[i], t[i]), d(o[i], e[i])) : null != e[i] ? o[i] = e[i] : delete o[i]);
        for (i in t) u(t, i) && !u(e, i) && a(t[i]) && (o[i] = d({}, o[i]));
        return o;
    }
    function W(t) {
        null != t && this.set(t);
    }
    p.suppressDeprecationWarnings = !1, p.deprecationHandler = null, T = Object.keys ? Object.keys : function(t) {
        var e, i = [];
        for (e in t) u(t, e) && i.push(e);
        return i;
    };
    var C = {};
    function B(t, e) {
        var i = t.toLowerCase();
        C[i] = C[i + "s"] = C[e] = t;
    }
    function _(t) {
        return "string" == typeof t ? C[t] || C[t.toLowerCase()] : void 0;
    }
    function X(t) {
        var e, i, o = {};
        for (i in t) u(t, i) && (e = _(i)) && (o[e] = t[i]);
        return o;
    }
    var k = {};
    function E(t, e) {
        k[t] = e;
    }
    function x(t, e, i) {
        var o = "" + Math.abs(t), e = e - o.length;
        return (0 <= t ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + o;
    }
    var D = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, R = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, P = {}, I = {};
    function $(t, e, i, o) {
        var n = "string" == typeof o ? function() {
            return this[o]();
        } : o;
        t && (I[t] = n), e && (I[e[0]] = function() {
            return x(n.apply(this, arguments), e[1], e[2]);
        }), i && (I[i] = function() {
            return this.localeData().ordinal(n.apply(this, arguments), t);
        });
    }
    function H(t, e) {
        return t.isValid() ? (e = F(e, t.localeData()), P[e] = P[e] || function(o) {
            for (var t, n = o.match(D), e = 0, s = n.length; e < s; e++) I[n[e]] ? n[e] = I[n[e]] : n[e] = (t = n[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
            return function(t) {
                for (var e = "", i = 0; i < s; i++) e += N(n[i]) ? n[i].call(t, o) : n[i];
                return e;
            };
        }(e), P[e](t)) : t.localeData().invalidDate();
    }
    function F(t, e) {
        var i = 5;
        function o(t) {
            return e.longDateFormat(t) || t;
        }
        for (R.lastIndex = 0; 0 <= i && R.test(t); ) t = t.replace(R, o), R.lastIndex = 0, 
        --i;
        return t;
    }
    var U = /\d/, j = /\d\d/, V = /\d{3}/, Y = /\d{4}/, G = /[+-]?\d{6}/, Q = /\d\d?/, K = /\d\d\d\d?/, J = /\d\d\d\d\d\d?/, Z = /\d{1,3}/, tt = /\d{1,4}/, et = /[+-]?\d{1,6}/, it = /\d+/, ot = /[+-]?\d+/, nt = /Z|[+-]\d\d:?\d\d/gi, st = /Z|[+-]\d\d(?::?\d\d)?/gi, rt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, at = {};
    function ct(t, i, o) {
        at[t] = N(i) ? i : function(t, e) {
            return t && o ? o : i;
        };
    }
    function lt(t, e) {
        return u(at, t) ? at[t](e._strict, e._locale) : new RegExp(dt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, i, o, n) {
            return e || i || o || n;
        })));
    }
    function dt(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    var pt = {};
    function ut(t, i) {
        var e, o = i;
        for ("string" == typeof t && (t = [ t ]), c(i) && (o = function(t, e) {
            e[i] = y(t);
        }), e = 0; e < t.length; e++) pt[t[e]] = o;
    }
    function ht(t, n) {
        ut(t, function(t, e, i, o) {
            i._w = i._w || {}, n(t, i._w, i, o);
        });
    }
    var ft = 0, Mt = 1, bt = 2, mt = 3, gt = 4, zt = 5, At = 6, vt = 7, yt = 8;
    function Ot(t) {
        return Lt(t) ? 366 : 365;
    }
    function Lt(t) {
        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
    }
    $("Y", 0, 0, function() {
        var t = this.year();
        return t <= 9999 ? "" + t : "+" + t;
    }), $(0, [ "YY", 2 ], 0, function() {
        return this.year() % 100;
    }), $(0, [ "YYYY", 4 ], 0, "year"), $(0, [ "YYYYY", 5 ], 0, "year"), $(0, [ "YYYYYY", 6, !0 ], 0, "year"), 
    B("year", "y"), E("year", 1), ct("Y", ot), ct("YY", Q, j), ct("YYYY", tt, Y), ct("YYYYY", et, G), 
    ct("YYYYYY", et, G), ut([ "YYYYY", "YYYYYY" ], ft), ut("YYYY", function(t, e) {
        e[ft] = 2 === t.length ? p.parseTwoDigitYear(t) : y(t);
    }), ut("YY", function(t, e) {
        e[ft] = p.parseTwoDigitYear(t);
    }), ut("Y", function(t, e) {
        e[ft] = parseInt(t, 10);
    }), p.parseTwoDigitYear = function(t) {
        return y(t) + (68 < y(t) ? 1900 : 2e3);
    };
    var Tt, wt = qt("FullYear", !0);
    function qt(e, i) {
        return function(t) {
            return null != t ? (St(this, e, t), p.updateOffset(this, i), this) : Nt(this, e);
        };
    }
    function Nt(t, e) {
        return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN;
    }
    function St(t, e, i) {
        t.isValid() && !isNaN(i) && ("FullYear" === e && Lt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), Wt(i, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i));
    }
    function Wt(t, e) {
        if (isNaN(t) || isNaN(e)) return NaN;
        var i, i = (e % (i = 12) + i) % i;
        return t += (e - i) / 12, 1 == i ? Lt(t) ? 29 : 28 : 31 - i % 7 % 2;
    }
    Tt = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
        for (var e = 0; e < this.length; ++e) if (this[e] === t) return e;
        return -1;
    }, $("M", [ "MM", 2 ], "Mo", function() {
        return this.month() + 1;
    }), $("MMM", 0, 0, function(t) {
        return this.localeData().monthsShort(this, t);
    }), $("MMMM", 0, 0, function(t) {
        return this.localeData().months(this, t);
    }), B("month", "M"), E("month", 8), ct("M", Q), ct("MM", Q, j), ct("MMM", function(t, e) {
        return e.monthsShortRegex(t);
    }), ct("MMMM", function(t, e) {
        return e.monthsRegex(t);
    }), ut([ "M", "MM" ], function(t, e) {
        e[Mt] = y(t) - 1;
    }), ut([ "MMM", "MMMM" ], function(t, e, i, o) {
        o = i._locale.monthsParse(t, o, i._strict);
        null != o ? e[Mt] = o : f(i).invalidMonth = t;
    });
    var Ct = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Bt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
    var _t = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
    function Xt(t, e) {
        var i;
        if (!t.isValid()) return t;
        if ("string" == typeof e) if (/^\d+$/.test(e)) e = y(e); else if (!c(e = t.localeData().monthsParse(e))) return t;
        return i = Math.min(t.date(), Wt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), 
        t;
    }
    function kt(t) {
        return null != t ? (Xt(this, t), p.updateOffset(this, !0), this) : Nt(this, "Month");
    }
    var Et = rt;
    var xt = rt;
    function Dt() {
        function t(t, e) {
            return e.length - t.length;
        }
        for (var e, i = [], o = [], n = [], s = 0; s < 12; s++) e = h([ 2e3, s ]), i.push(this.monthsShort(e, "")), 
        o.push(this.months(e, "")), n.push(this.months(e, "")), n.push(this.monthsShort(e, ""));
        for (i.sort(t), o.sort(t), n.sort(t), s = 0; s < 12; s++) i[s] = dt(i[s]), o[s] = dt(o[s]);
        for (s = 0; s < 24; s++) n[s] = dt(n[s]);
        this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, 
        this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i");
    }
    function Rt(t) {
        var e = new Date(Date.UTC.apply(null, arguments));
        return t < 100 && 0 <= t && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), 
        e;
    }
    function Pt(t, e, i) {
        i = 7 + e - i;
        return i - (7 + Rt(t, 0, i).getUTCDay() - e) % 7 - 1;
    }
    function It(t, e, i, o, n) {
        var s, n = 1 + 7 * (e - 1) + (7 + i - o) % 7 + Pt(t, o, n), n = n <= 0 ? Ot(s = t - 1) + n : n > Ot(t) ? (s = t + 1, 
        n - Ot(t)) : (s = t, n);
        return {
            year: s,
            dayOfYear: n
        };
    }
    function $t(t, e, i) {
        var o, n, s = Pt(t.year(), e, i), s = Math.floor((t.dayOfYear() - s - 1) / 7) + 1;
        return s < 1 ? o = s + Ht(n = t.year() - 1, e, i) : s > Ht(t.year(), e, i) ? (o = s - Ht(t.year(), e, i), 
        n = t.year() + 1) : (n = t.year(), o = s), {
            week: o,
            year: n
        };
    }
    function Ht(t, e, i) {
        var o = Pt(t, e, i), i = Pt(t + 1, e, i);
        return (Ot(t) - o + i) / 7;
    }
    $("w", [ "ww", 2 ], "wo", "week"), $("W", [ "WW", 2 ], "Wo", "isoWeek"), B("week", "w"), 
    B("isoWeek", "W"), E("week", 5), E("isoWeek", 5), ct("w", Q), ct("ww", Q, j), ct("W", Q), 
    ct("WW", Q, j), ht([ "w", "ww", "W", "WW" ], function(t, e, i, o) {
        e[o.substr(0, 1)] = y(t);
    });
    $("d", 0, "do", "day"), $("dd", 0, 0, function(t) {
        return this.localeData().weekdaysMin(this, t);
    }), $("ddd", 0, 0, function(t) {
        return this.localeData().weekdaysShort(this, t);
    }), $("dddd", 0, 0, function(t) {
        return this.localeData().weekdays(this, t);
    }), $("e", 0, 0, "weekday"), $("E", 0, 0, "isoWeekday"), B("day", "d"), B("weekday", "e"), 
    B("isoWeekday", "E"), E("day", 11), E("weekday", 11), E("isoWeekday", 11), ct("d", Q), 
    ct("e", Q), ct("E", Q), ct("dd", function(t, e) {
        return e.weekdaysMinRegex(t);
    }), ct("ddd", function(t, e) {
        return e.weekdaysShortRegex(t);
    }), ct("dddd", function(t, e) {
        return e.weekdaysRegex(t);
    }), ht([ "dd", "ddd", "dddd" ], function(t, e, i, o) {
        o = i._locale.weekdaysParse(t, o, i._strict);
        null != o ? e.d = o : f(i).invalidWeekday = t;
    }), ht([ "d", "e", "E" ], function(t, e, i, o) {
        e[o] = y(t);
    });
    var Ft = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
    var Ut = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
    var jt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    var Vt = rt;
    var Yt = rt;
    var Gt = rt;
    function Qt() {
        function t(t, e) {
            return e.length - t.length;
        }
        for (var e, i, o, n = [], s = [], r = [], a = [], c = 0; c < 7; c++) o = h([ 2e3, 1 ]).day(c), 
        e = this.weekdaysMin(o, ""), i = this.weekdaysShort(o, ""), o = this.weekdays(o, ""), 
        n.push(e), s.push(i), r.push(o), a.push(e), a.push(i), a.push(o);
        for (n.sort(t), s.sort(t), r.sort(t), a.sort(t), c = 0; c < 7; c++) s[c] = dt(s[c]), 
        r[c] = dt(r[c]), a[c] = dt(a[c]);
        this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, 
        this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), 
        this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + n.join("|") + ")", "i");
    }
    function Kt() {
        return this.hours() % 12 || 12;
    }
    function Jt(t, e) {
        $(t, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), e);
        });
    }
    function Zt(t, e) {
        return e._meridiemParse;
    }
    $("H", [ "HH", 2 ], 0, "hour"), $("h", [ "hh", 2 ], 0, Kt), $("k", [ "kk", 2 ], 0, function() {
        return this.hours() || 24;
    }), $("hmm", 0, 0, function() {
        return "" + Kt.apply(this) + x(this.minutes(), 2);
    }), $("hmmss", 0, 0, function() {
        return "" + Kt.apply(this) + x(this.minutes(), 2) + x(this.seconds(), 2);
    }), $("Hmm", 0, 0, function() {
        return "" + this.hours() + x(this.minutes(), 2);
    }), $("Hmmss", 0, 0, function() {
        return "" + this.hours() + x(this.minutes(), 2) + x(this.seconds(), 2);
    }), Jt("a", !0), Jt("A", !1), B("hour", "h"), E("hour", 13), ct("a", Zt), ct("A", Zt), 
    ct("H", Q), ct("h", Q), ct("k", Q), ct("HH", Q, j), ct("hh", Q, j), ct("kk", Q, j), 
    ct("hmm", K), ct("hmmss", J), ct("Hmm", K), ct("Hmmss", J), ut([ "H", "HH" ], mt), 
    ut([ "k", "kk" ], function(t, e, i) {
        t = y(t);
        e[mt] = 24 === t ? 0 : t;
    }), ut([ "a", "A" ], function(t, e, i) {
        i._isPm = i._locale.isPM(t), i._meridiem = t;
    }), ut([ "h", "hh" ], function(t, e, i) {
        e[mt] = y(t), f(i).bigHour = !0;
    }), ut("hmm", function(t, e, i) {
        var o = t.length - 2;
        e[mt] = y(t.substr(0, o)), e[gt] = y(t.substr(o)), f(i).bigHour = !0;
    }), ut("hmmss", function(t, e, i) {
        var o = t.length - 4, n = t.length - 2;
        e[mt] = y(t.substr(0, o)), e[gt] = y(t.substr(o, 2)), e[zt] = y(t.substr(n)), f(i).bigHour = !0;
    }), ut("Hmm", function(t, e, i) {
        var o = t.length - 2;
        e[mt] = y(t.substr(0, o)), e[gt] = y(t.substr(o));
    }), ut("Hmmss", function(t, e, i) {
        var o = t.length - 4, n = t.length - 2;
        e[mt] = y(t.substr(0, o)), e[gt] = y(t.substr(o, 2)), e[zt] = y(t.substr(n));
    });
    var te, ee = qt("Hours", !0), ie = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: Bt,
        monthsShort: _t,
        week: {
            dow: 0,
            doy: 6
        },
        weekdays: Ft,
        weekdaysMin: jt,
        weekdaysShort: Ut,
        meridiemParse: /[ap]\.?m?\.?/i
    }, oe = {}, ne = {};
    function se(t) {
        return t ? t.toLowerCase().replace("_", "-") : t;
    }
    function re(t) {
        if (!oe[t] && "undefined" != typeof module && module && module.exports) try {
            var e = te._abbr;
            require("./locale/" + t), ae(e);
        } catch (t) {}
        return oe[t];
    }
    function ae(t, e) {
        var i;
        return t && (i = s(e) ? le(t) : ce(t, e)) && (te = i), te._abbr;
    }
    function ce(t, e) {
        if (null === e) return delete oe[t], null;
        var i = ie;
        if (e.abbr = t, null != oe[t]) q("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), 
        i = oe[t]._config; else if (null != e.parentLocale) {
            if (null == oe[e.parentLocale]) return ne[e.parentLocale] || (ne[e.parentLocale] = []), 
            ne[e.parentLocale].push({
                name: t,
                config: e
            }), null;
            i = oe[e.parentLocale]._config;
        }
        return oe[t] = new W(S(i, e)), ne[t] && ne[t].forEach(function(t) {
            ce(t.name, t.config);
        }), ae(t), oe[t];
    }
    function le(t) {
        var e;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return te;
        if (!r(t)) {
            if (e = re(t)) return e;
            t = [ t ];
        }
        return function(t) {
            for (var e, i, o, n, s = 0; s < t.length; ) {
                for (e = (n = se(t[s]).split("-")).length, i = (i = se(t[s + 1])) ? i.split("-") : null; 0 < e; ) {
                    if (o = re(n.slice(0, e).join("-"))) return o;
                    if (i && i.length >= e && O(n, i, !0) >= e - 1) break;
                    e--;
                }
                s++;
            }
            return null;
        }(t);
    }
    function de(t) {
        var e = t._a;
        return e && -2 === f(t).overflow && (e = e[Mt] < 0 || 11 < e[Mt] ? Mt : e[bt] < 1 || e[bt] > Wt(e[ft], e[Mt]) ? bt : e[mt] < 0 || 24 < e[mt] || 24 === e[mt] && (0 !== e[gt] || 0 !== e[zt] || 0 !== e[At]) ? mt : e[gt] < 0 || 59 < e[gt] ? gt : e[zt] < 0 || 59 < e[zt] ? zt : e[At] < 0 || 999 < e[At] ? At : -1, 
        f(t)._overflowDayOfYear && (e < ft || bt < e) && (e = bt), f(t)._overflowWeeks && -1 === e && (e = vt), 
        f(t)._overflowWeekday && -1 === e && (e = yt), f(t).overflow = e), t;
    }
    function pe(t, e, i) {
        return null != t ? t : null != e ? e : i;
    }
    function ue(t) {
        var e, i, o, n, s = [];
        if (!t._d) {
            for (o = t, n = new Date(p.now()), i = o._useUTC ? [ n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate() ] : [ n.getFullYear(), n.getMonth(), n.getDate() ], 
            t._w && null == t._a[bt] && null == t._a[Mt] && function(t) {
                var e, i, o, n, s, r, a;
                {
                    var c;
                    null != (e = t._w).GG || null != e.W || null != e.E ? (s = 1, r = 4, i = pe(e.GG, t._a[ft], $t(qe(), 1, 4).year), 
                    o = pe(e.W, 1), ((n = pe(e.E, 1)) < 1 || 7 < n) && (a = !0)) : (s = t._locale._week.dow, 
                    r = t._locale._week.doy, c = $t(qe(), s, r), i = pe(e.gg, t._a[ft], c.year), o = pe(e.w, c.week), 
                    null != e.d ? ((n = e.d) < 0 || 6 < n) && (a = !0) : null != e.e ? (n = e.e + s, 
                    (e.e < 0 || 6 < e.e) && (a = !0)) : n = s);
                }
                o < 1 || o > Ht(i, s, r) ? f(t)._overflowWeeks = !0 : null != a ? f(t)._overflowWeekday = !0 : (r = It(i, o, n, s, r), 
                t._a[ft] = r.year, t._dayOfYear = r.dayOfYear);
            }(t), null != t._dayOfYear && (n = pe(t._a[ft], i[ft]), (t._dayOfYear > Ot(n) || 0 === t._dayOfYear) && (f(t)._overflowDayOfYear = !0), 
            n = Rt(n, 0, t._dayOfYear), t._a[Mt] = n.getUTCMonth(), t._a[bt] = n.getUTCDate()), 
            e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = s[e] = i[e];
            for (;e < 7; e++) t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            24 === t._a[mt] && 0 === t._a[gt] && 0 === t._a[zt] && 0 === t._a[At] && (t._nextDay = !0, 
            t._a[mt] = 0), t._d = (t._useUTC ? Rt : function(t, e, i, o, n, s, r) {
                return r = new Date(t, e, i, o, n, s, r), t < 100 && 0 <= t && isFinite(r.getFullYear()) && r.setFullYear(t), 
                r;
            }).apply(null, s), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), 
            t._nextDay && (t._a[mt] = 24), t._w && void 0 !== t._w.d && t._w.d !== t._d.getDay() && (f(t).weekdayMismatch = !0);
        }
    }
    var he = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, fe = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Me = /Z|[+-]\d\d(?::?\d\d)?/, be = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, !1 ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, !1 ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, !1 ], [ "YYYYDDD", /\d{7}/ ] ], me = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ], ge = /^\/?Date\((\-?\d+)/i;
    function ze(t) {
        var e, i, o, n, s, r, a = t._i, c = he.exec(a) || fe.exec(a);
        if (c) {
            for (f(t).iso = !0, e = 0, i = be.length; e < i; e++) if (be[e][1].exec(c[1])) {
                n = be[e][0], o = !1 !== be[e][2];
                break;
            }
            if (null == n) return void (t._isValid = !1);
            if (c[3]) {
                for (e = 0, i = me.length; e < i; e++) if (me[e][1].exec(c[3])) {
                    s = (c[2] || " ") + me[e][0];
                    break;
                }
                if (null == s) return void (t._isValid = !1);
            }
            if (!o && null != s) return void (t._isValid = !1);
            if (c[4]) {
                if (!Me.exec(c[4])) return void (t._isValid = !1);
                r = "Z";
            }
            t._f = n + (s || "") + (r || ""), Le(t);
        } else t._isValid = !1;
    }
    var Ae = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    function ve(t, e, i, o, n, s) {
        n = [ function(t) {
            t = parseInt(t, 10);
            {
                if (t <= 49) return 2e3 + t;
                if (t <= 999) return 1900 + t;
            }
            return t;
        }(t), _t.indexOf(e), parseInt(i, 10), parseInt(o, 10), parseInt(n, 10) ];
        return s && n.push(parseInt(s, 10)), n;
    }
    var ye = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    function Oe(t) {
        var e, i, o, n = Ae.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim());
        if (n) {
            var s = ve(n[4], n[3], n[2], n[5], n[6], n[7]);
            if (e = n[1], i = s, o = t, e && Ut.indexOf(e) !== new Date(i[0], i[1], i[2]).getDay() && (f(o).weekdayMismatch = !0, 
            !void (o._isValid = !1))) return;
            t._a = s, t._tzm = (o = n[8], s = n[9], n = n[10], o ? ye[o] : s ? 0 : 60 * (((s = parseInt(n, 10)) - (n = s % 100)) / 100) + n), 
            t._d = Rt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), 
            f(t).rfc2822 = !0;
        } else t._isValid = !1;
    }
    function Le(t) {
        if (t._f !== p.ISO_8601) if (t._f !== p.RFC_2822) {
            t._a = [], f(t).empty = !0;
            for (var e, i, o, n, s, r = "" + t._i, a = r.length, c = 0, l = F(t._f, t._locale).match(D) || [], d = 0; d < l.length; d++) i = l[d], 
            (e = (r.match(lt(i, t)) || [])[0]) && (0 < (n = r.substr(0, r.indexOf(e))).length && f(t).unusedInput.push(n), 
            r = r.slice(r.indexOf(e) + e.length), c += e.length), I[i] ? (e ? f(t).empty = !1 : f(t).unusedTokens.push(i), 
            o = i, s = t, null != (n = e) && u(pt, o) && pt[o](n, s._a, s, o)) : t._strict && !e && f(t).unusedTokens.push(i);
            f(t).charsLeftOver = a - c, 0 < r.length && f(t).unusedInput.push(r), t._a[mt] <= 12 && !0 === f(t).bigHour && 0 < t._a[mt] && (f(t).bigHour = void 0), 
            f(t).parsedDateParts = t._a.slice(0), f(t).meridiem = t._meridiem, t._a[mt] = function(t, e, i) {
                if (null == i) return e;
                return null != t.meridiemHour ? t.meridiemHour(e, i) : (null != t.isPM && ((i = t.isPM(i)) && e < 12 && (e += 12), 
                i || 12 !== e || (e = 0)), e);
            }(t._locale, t._a[mt], t._meridiem), ue(t), de(t);
        } else Oe(t); else ze(t);
    }
    function Te(t) {
        var e = t._i, i = t._f;
        return t._locale = t._locale || le(t._l), null === e || void 0 === i && "" === e ? b({
            nullInput: !0
        }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), A(e) ? new z(de(e)) : (n(e) ? t._d = e : r(i) ? function(t) {
            var e, i, o, n, s;
            if (0 === t._f.length) return f(t).invalidFormat = !0, t._d = new Date(NaN);
            for (n = 0; n < t._f.length; n++) s = 0, e = g({}, t), null != t._useUTC && (e._useUTC = t._useUTC), 
            e._f = t._f[n], Le(e), M(e) && (s += f(e).charsLeftOver, s += 10 * f(e).unusedTokens.length, 
            f(e).score = s, (null == o || s < o) && (o = s, i = e));
            d(t, i || e);
        }(t) : i ? Le(t) : s(i = (e = t)._i) ? e._d = new Date(p.now()) : n(i) ? e._d = new Date(i.valueOf()) : "string" == typeof i ? function(t) {
            var e = ge.exec(t._i);
            null === e ? (ze(t), !1 === t._isValid && (delete t._isValid, Oe(t), !1 === t._isValid && (delete t._isValid, 
            p.createFromInputFallback(t)))) : t._d = new Date(+e[1]);
        }(e) : r(i) ? (e._a = l(i.slice(0), function(t) {
            return parseInt(t, 10);
        }), ue(e)) : a(i) ? function(t) {
            var e;
            t._d || (e = X(t._i), t._a = l([ e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond ], function(t) {
                return t && parseInt(t, 10);
            }), ue(t));
        }(e) : c(i) ? e._d = new Date(i) : p.createFromInputFallback(e), M(t) || (t._d = null), 
        t));
    }
    function we(t, e, i, o, n) {
        var s = {};
        return !0 !== i && !1 !== i || (o = i, i = void 0), (a(t) && function(t) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
            for (var e in t) if (t.hasOwnProperty(e)) return;
            return 1;
        }(t) || r(t) && 0 === t.length) && (t = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = n, 
        s._l = i, s._i = t, s._f = e, s._strict = o, (s = new z(de(Te(s = s))))._nextDay && (s.add(1, "d"), 
        s._nextDay = void 0), s;
    }
    function qe(t, e, i, o) {
        return we(t, e, i, o, !1);
    }
    p.createFromInputFallback = i("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
    }), p.ISO_8601 = function() {}, p.RFC_2822 = function() {};
    var Ne = i("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var t = qe.apply(null, arguments);
        return this.isValid() && t.isValid() ? t < this ? this : t : b();
    }), Se = i("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var t = qe.apply(null, arguments);
        return this.isValid() && t.isValid() ? this < t ? this : t : b();
    });
    function We(t, e) {
        var i, o;
        if (1 === e.length && r(e[0]) && (e = e[0]), !e.length) return qe();
        for (i = e[0], o = 1; o < e.length; ++o) e[o].isValid() && !e[o][t](i) || (i = e[o]);
        return i;
    }
    var Ce = [ "year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond" ];
    function Be(t) {
        var e = X(t), i = e.year || 0, o = e.quarter || 0, n = e.month || 0, s = e.week || 0, r = e.day || 0, a = e.hour || 0, c = e.minute || 0, l = e.second || 0, t = e.millisecond || 0;
        this._isValid = function(t) {
            for (var e in t) if (-1 === Tt.call(Ce, e) || null != t[e] && isNaN(t[e])) return !1;
            for (var i = !1, o = 0; o < Ce.length; ++o) if (t[Ce[o]]) {
                if (i) return !1;
                parseFloat(t[Ce[o]]) !== y(t[Ce[o]]) && (i = !0);
            }
            return !0;
        }(e), this._milliseconds = +t + 1e3 * l + 6e4 * c + 1e3 * a * 60 * 60, this._days = +r + 7 * s, 
        this._months = +n + 3 * o + 12 * i, this._data = {}, this._locale = le(), this._bubble();
    }
    function _e(t) {
        return t instanceof Be;
    }
    function Xe(t) {
        return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
    }
    function ke(t, i) {
        $(t, 0, 0, function() {
            var t = this.utcOffset(), e = "+";
            return t < 0 && (t = -t, e = "-"), e + x(~~(t / 60), 2) + i + x(~~t % 60, 2);
        });
    }
    ke("Z", ":"), ke("ZZ", ""), ct("Z", st), ct("ZZ", st), ut([ "Z", "ZZ" ], function(t, e, i) {
        i._useUTC = !0, i._tzm = xe(st, t);
    });
    var Ee = /([\+\-]|\d\d)/gi;
    function xe(t, e) {
        e = (e || "").match(t);
        if (null === e) return null;
        t = ((e[e.length - 1] || []) + "").match(Ee) || [ "-", 0, 0 ], e = 60 * t[1] + y(t[2]);
        return 0 === e ? 0 : "+" === t[0] ? e : -e;
    }
    function De(t, e) {
        var i;
        return e._isUTC ? (i = e.clone(), e = (A(t) || n(t) ? t : qe(t)).valueOf() - i.valueOf(), 
        i._d.setTime(i._d.valueOf() + e), p.updateOffset(i, !1), i) : qe(t).local();
    }
    function Re(t) {
        return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
    }
    function Pe() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset);
    }
    p.updateOffset = function() {};
    var Ie = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, $e = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function He(t, e) {
        var i, o = t, n = null;
        return _e(t) ? o = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : c(t) ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (n = Ie.exec(t)) ? (i = "-" === n[1] ? -1 : 1, 
        o = {
            y: 0,
            d: y(n[bt]) * i,
            h: y(n[mt]) * i,
            m: y(n[gt]) * i,
            s: y(n[zt]) * i,
            ms: y(Xe(1e3 * n[At])) * i
        }) : (n = $e.exec(t)) ? (i = "-" === n[1] ? -1 : (n[1], 1), o = {
            y: Fe(n[2], i),
            M: Fe(n[3], i),
            w: Fe(n[4], i),
            d: Fe(n[5], i),
            h: Fe(n[6], i),
            m: Fe(n[7], i),
            s: Fe(n[8], i)
        }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (i = function(t, e) {
            var i;
            if (!t.isValid() || !e.isValid()) return {
                milliseconds: 0,
                months: 0
            };
            e = De(e, t), t.isBefore(e) ? i = Ue(t, e) : ((i = Ue(e, t)).milliseconds = -i.milliseconds, 
            i.months = -i.months);
            return i;
        }(qe(o.from), qe(o.to)), (o = {}).ms = i.milliseconds, o.M = i.months), o = new Be(o), 
        _e(t) && u(t, "_locale") && (o._locale = t._locale), o;
    }
    function Fe(t, e) {
        t = t && parseFloat(t.replace(",", "."));
        return (isNaN(t) ? 0 : t) * e;
    }
    function Ue(t, e) {
        var i = {
            milliseconds: 0,
            months: 0
        };
        return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, 
        i.milliseconds = +e - +t.clone().add(i.months, "M"), i;
    }
    function je(o, n) {
        return function(t, e) {
            var i;
            return null === e || isNaN(+e) || (q(n, "moment()." + n + "(period, number) is deprecated. Please use moment()." + n + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), 
            i = t, t = e, e = i), Ve(this, He(t = "string" == typeof t ? +t : t, e), o), this;
        };
    }
    function Ve(t, e, i, o) {
        var n = e._milliseconds, s = Xe(e._days), e = Xe(e._months);
        t.isValid() && (o = null == o || o, e && Xt(t, Nt(t, "Month") + e * i), s && St(t, "Date", Nt(t, "Date") + s * i), 
        n && t._d.setTime(t._d.valueOf() + n * i), o && p.updateOffset(t, s || e));
    }
    He.fn = Be.prototype, He.invalid = function() {
        return He(NaN);
    };
    rt = je(1, "add"), K = je(-1, "subtract");
    function Ye(t, e) {
        var i = 12 * (e.year() - t.year()) + (e.month() - t.month()), o = t.clone().add(i, "months"), o = e - o < 0 ? (e - o) / (o - t.clone().add(i - 1, "months")) : (e - o) / (t.clone().add(1 + i, "months") - o);
        return -(i + o) || 0;
    }
    function Ge(t) {
        return void 0 === t ? this._locale._abbr : (null != (t = le(t)) && (this._locale = t), 
        this);
    }
    p.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", p.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    J = i("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
        return void 0 === t ? this.localeData() : this.locale(t);
    });
    function Qe() {
        return this._locale;
    }
    function Ke(t, e) {
        $(0, [ t, t.length ], 0, e);
    }
    function Je(t, e, i, o, n) {
        var s;
        return null == t ? $t(this, o, n).year : ((s = Ht(t, o, n)) < e && (e = s), function(t, e, i, o, n) {
            n = It(t, e, i, o, n), n = Rt(n.year, 0, n.dayOfYear);
            return this.year(n.getUTCFullYear()), this.month(n.getUTCMonth()), this.date(n.getUTCDate()), 
            this;
        }.call(this, t, e, i, o, n));
    }
    $(0, [ "gg", 2 ], 0, function() {
        return this.weekYear() % 100;
    }), $(0, [ "GG", 2 ], 0, function() {
        return this.isoWeekYear() % 100;
    }), Ke("gggg", "weekYear"), Ke("ggggg", "weekYear"), Ke("GGGG", "isoWeekYear"), 
    Ke("GGGGG", "isoWeekYear"), B("weekYear", "gg"), B("isoWeekYear", "GG"), E("weekYear", 1), 
    E("isoWeekYear", 1), ct("G", ot), ct("g", ot), ct("GG", Q, j), ct("gg", Q, j), ct("GGGG", tt, Y), 
    ct("gggg", tt, Y), ct("GGGGG", et, G), ct("ggggg", et, G), ht([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(t, e, i, o) {
        e[o.substr(0, 2)] = y(t);
    }), ht([ "gg", "GG" ], function(t, e, i, o) {
        e[o] = p.parseTwoDigitYear(t);
    }), $("Q", 0, "Qo", "quarter"), B("quarter", "Q"), E("quarter", 7), ct("Q", U), 
    ut("Q", function(t, e) {
        e[Mt] = 3 * (y(t) - 1);
    }), $("D", [ "DD", 2 ], "Do", "date"), B("date", "D"), E("date", 9), ct("D", Q), 
    ct("DD", Q, j), ct("Do", function(t, e) {
        return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient;
    }), ut([ "D", "DD" ], bt), ut("Do", function(t, e) {
        e[bt] = y(t.match(Q)[0]);
    });
    Bt = qt("Date", !0);
    $("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear"), B("dayOfYear", "DDD"), E("dayOfYear", 4), 
    ct("DDD", Z), ct("DDDD", V), ut([ "DDD", "DDDD" ], function(t, e, i) {
        i._dayOfYear = y(t);
    }), $("m", [ "mm", 2 ], 0, "minute"), B("minute", "m"), E("minute", 14), ct("m", Q), 
    ct("mm", Q, j), ut([ "m", "mm" ], gt);
    Ft = qt("Minutes", !1);
    $("s", [ "ss", 2 ], 0, "second"), B("second", "s"), E("second", 15), ct("s", Q), 
    ct("ss", Q, j), ut([ "s", "ss" ], zt);
    var Ze, jt = qt("Seconds", !1);
    for ($("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
    }), $(0, [ "SS", 2 ], 0, function() {
        return ~~(this.millisecond() / 10);
    }), $(0, [ "SSS", 3 ], 0, "millisecond"), $(0, [ "SSSS", 4 ], 0, function() {
        return 10 * this.millisecond();
    }), $(0, [ "SSSSS", 5 ], 0, function() {
        return 100 * this.millisecond();
    }), $(0, [ "SSSSSS", 6 ], 0, function() {
        return 1e3 * this.millisecond();
    }), $(0, [ "SSSSSSS", 7 ], 0, function() {
        return 1e4 * this.millisecond();
    }), $(0, [ "SSSSSSSS", 8 ], 0, function() {
        return 1e5 * this.millisecond();
    }), $(0, [ "SSSSSSSSS", 9 ], 0, function() {
        return 1e6 * this.millisecond();
    }), B("millisecond", "ms"), E("millisecond", 16), ct("S", Z, U), ct("SS", Z, j), 
    ct("SSS", Z, V), Ze = "SSSS"; Ze.length <= 9; Ze += "S") ct(Ze, it);
    function ti(t, e) {
        e[At] = y(1e3 * ("0." + t));
    }
    for (Ze = "S"; Ze.length <= 9; Ze += "S") ut(Ze, ti);
    tt = qt("Milliseconds", !1);
    $("z", 0, 0, "zoneAbbr"), $("zz", 0, 0, "zoneName");
    Y = z.prototype;
    function ei(t) {
        return t;
    }
    Y.add = rt, Y.calendar = function(t, e) {
        var i = t || qe(), t = De(i, this).startOf("day"), t = p.calendarFormat(this, t) || "sameElse", e = e && (N(e[t]) ? e[t].call(this, i) : e[t]);
        return this.format(e || this.localeData().calendar(t, this, qe(i)));
    }, Y.clone = function() {
        return new z(this);
    }, Y.diff = function(t, e, i) {
        var o, n;
        if (!this.isValid()) return NaN;
        if (!(o = De(t, this)).isValid()) return NaN;
        switch (t = 6e4 * (o.utcOffset() - this.utcOffset()), e = _(e)) {
          case "year":
            n = Ye(this, o) / 12;
            break;

          case "month":
            n = Ye(this, o);
            break;

          case "quarter":
            n = Ye(this, o) / 3;
            break;

          case "second":
            n = (this - o) / 1e3;
            break;

          case "minute":
            n = (this - o) / 6e4;
            break;

          case "hour":
            n = (this - o) / 36e5;
            break;

          case "day":
            n = (this - o - t) / 864e5;
            break;

          case "week":
            n = (this - o - t) / 6048e5;
            break;

          default:
            n = this - o;
        }
        return i ? n : v(n);
    }, Y.endOf = function(t) {
        return void 0 === (t = _(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), 
        this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"));
    }, Y.format = function(t) {
        return t = t || (this.isUtc() ? p.defaultFormatUtc : p.defaultFormat), t = H(this, t), 
        this.localeData().postformat(t);
    }, Y.from = function(t, e) {
        return this.isValid() && (A(t) && t.isValid() || qe(t).isValid()) ? He({
            to: this,
            from: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
    }, Y.fromNow = function(t) {
        return this.from(qe(), t);
    }, Y.to = function(t, e) {
        return this.isValid() && (A(t) && t.isValid() || qe(t).isValid()) ? He({
            from: this,
            to: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
    }, Y.toNow = function(t) {
        return this.to(qe(), t);
    }, Y.get = function(t) {
        return N(this[t = _(t)]) ? this[t]() : this;
    }, Y.invalidAt = function() {
        return f(this).overflow;
    }, Y.isAfter = function(t, e) {
        return t = A(t) ? t : qe(t), !(!this.isValid() || !t.isValid()) && ("millisecond" === (e = _(s(e) ? "millisecond" : e)) ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(e).valueOf());
    }, Y.isBefore = function(t, e) {
        return t = A(t) ? t : qe(t), !(!this.isValid() || !t.isValid()) && ("millisecond" === (e = _(s(e) ? "millisecond" : e)) ? this.valueOf() < t.valueOf() : this.clone().endOf(e).valueOf() < t.valueOf());
    }, Y.isBetween = function(t, e, i, o) {
        return ("(" === (o = o || "()")[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) && (")" === o[1] ? this.isBefore(e, i) : !this.isAfter(e, i));
    }, Y.isSame = function(t, e) {
        return t = A(t) ? t : qe(t), !(!this.isValid() || !t.isValid()) && ("millisecond" === (e = _(e || "millisecond")) ? this.valueOf() === t.valueOf() : (t = t.valueOf(), 
        this.clone().startOf(e).valueOf() <= t && t <= this.clone().endOf(e).valueOf()));
    }, Y.isSameOrAfter = function(t, e) {
        return this.isSame(t, e) || this.isAfter(t, e);
    }, Y.isSameOrBefore = function(t, e) {
        return this.isSame(t, e) || this.isBefore(t, e);
    }, Y.isValid = function() {
        return M(this);
    }, Y.lang = J, Y.locale = Ge, Y.localeData = Qe, Y.max = Se, Y.min = Ne, Y.parsingFlags = function() {
        return d({}, f(this));
    }, Y.set = function(t, e) {
        if ("object" == typeof t) for (var i = function(t) {
            var e, i = [];
            for (e in t) i.push({
                unit: e,
                priority: k[e]
            });
            return i.sort(function(t, e) {
                return t.priority - e.priority;
            }), i;
        }(t = X(t)), o = 0; o < i.length; o++) this[i[o].unit](t[i[o].unit]); else if (N(this[t = _(t)])) return this[t](e);
        return this;
    }, Y.startOf = function(t) {
        switch (t = _(t)) {
          case "year":
            this.month(0);

          case "quarter":
          case "month":
            this.date(1);

          case "week":
          case "isoWeek":
          case "day":
          case "date":
            this.hours(0);

          case "hour":
            this.minutes(0);

          case "minute":
            this.seconds(0);

          case "second":
            this.milliseconds(0);
        }
        return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), 
        this;
    }, Y.subtract = K, Y.toArray = function() {
        var t = this;
        return [ t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond() ];
    }, Y.toObject = function() {
        var t = this;
        return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds()
        };
    }, Y.toDate = function() {
        return new Date(this.valueOf());
    }, Y.toISOString = function() {
        if (!this.isValid()) return null;
        var t = this.clone().utc();
        return t.year() < 0 || 9999 < t.year() ? H(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : N(Date.prototype.toISOString) ? this.toDate().toISOString() : H(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
    }, Y.inspect = function() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var t = "moment", e = "";
        this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", 
        e = "Z");
        var i = "[" + t + '("]', t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", e = e + '[")]';
        return this.format(i + t + "-MM-DD[T]HH:mm:ss.SSS" + e);
    }, Y.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
    }, Y.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }, Y.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
    }, Y.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
    }, Y.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }, Y.year = wt, Y.isLeapYear = function() {
        return Lt(this.year());
    }, Y.weekYear = function(t) {
        return Je.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }, Y.isoWeekYear = function(t) {
        return Je.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
    }, Y.quarter = Y.quarters = function(t) {
        return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3);
    }, Y.month = kt, Y.daysInMonth = function() {
        return Wt(this.year(), this.month());
    }, Y.week = Y.weeks = function(t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d");
    }, Y.isoWeek = Y.isoWeeks = function(t) {
        var e = $t(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d");
    }, Y.weeksInYear = function() {
        var t = this.localeData()._week;
        return Ht(this.year(), t.dow, t.doy);
    }, Y.isoWeeksInYear = function() {
        return Ht(this.year(), 1, 4);
    }, Y.date = Bt, Y.day = Y.days = function(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e, i, o = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t ? (e = t, i = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = i.weekdaysParse(e)) ? e : null : parseInt(e, 10), 
        this.add(t - o, "d")) : o;
    }, Y.weekday = function(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d");
    }, Y.isoWeekday = function(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        if (null == t) return this.day() || 7;
        var e = (e = t, t = this.localeData(), "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e);
        return this.day(this.day() % 7 ? e : e - 7);
    }, Y.dayOfYear = function(t) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == t ? e : this.add(t - e, "d");
    }, Y.hour = Y.hours = ee, Y.minute = Y.minutes = Ft, Y.second = Y.seconds = jt, 
    Y.millisecond = Y.milliseconds = tt, Y.utcOffset = function(t, e, i) {
        var o, n = this._offset || 0;
        if (!this.isValid()) return null != t ? this : NaN;
        if (null == t) return this._isUTC ? n : Re(this);
        if ("string" == typeof t) {
            if (null === (t = xe(st, t))) return this;
        } else Math.abs(t) < 16 && !i && (t *= 60);
        return !this._isUTC && e && (o = Re(this)), this._offset = t, this._isUTC = !0, 
        null != o && this.add(o, "m"), n !== t && (!e || this._changeInProgress ? Ve(this, He(t - n, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, 
        p.updateOffset(this, !0), this._changeInProgress = null)), this;
    }, Y.utc = function(t) {
        return this.utcOffset(0, t);
    }, Y.local = function(t) {
        return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Re(this), "m")), 
        this;
    }, Y.parseZone = function() {
        var t;
        return null != this._tzm ? this.utcOffset(this._tzm, !1, !0) : "string" == typeof this._i && (null != (t = xe(nt, this._i)) ? this.utcOffset(t) : this.utcOffset(0, !0)), 
        this;
    }, Y.hasAlignedHourOffset = function(t) {
        return !!this.isValid() && (t = t ? qe(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0);
    }, Y.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }, Y.isLocal = function() {
        return !!this.isValid() && !this._isUTC;
    }, Y.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC;
    }, Y.isUtc = Pe, Y.isUTC = Pe, Y.zoneAbbr = function() {
        return this._isUTC ? "UTC" : "";
    }, Y.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : "";
    }, Y.dates = i("dates accessor is deprecated. Use date instead.", Bt), Y.months = i("months accessor is deprecated. Use month instead", kt), 
    Y.years = i("years accessor is deprecated. Use year instead", wt), Y.zone = i("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(t, e) {
        return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset();
    }), Y.isDSTShifted = i("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!s(this._isDSTShifted)) return this._isDSTShifted;
        var t, e = {};
        return g(e, this), (e = Te(e))._a ? (t = (e._isUTC ? h : qe)(e._a), this._isDSTShifted = this.isValid() && 0 < O(e._a, t.toArray())) : this._isDSTShifted = !1, 
        this._isDSTShifted;
    });
    et = W.prototype;
    function ii(t, e, i, o) {
        var n = le(), e = h().set(o, e);
        return n[i](e, t);
    }
    function oi(t, e, i) {
        if (c(t) && (e = t, t = void 0), t = t || "", null != e) return ii(t, e, i, "month");
        for (var o = [], n = 0; n < 12; n++) o[n] = ii(t, n, i, "month");
        return o;
    }
    function ni(t, e, i, o) {
        e = ("boolean" == typeof t ? c(e) && (i = e, e = void 0) : (e = t, t = !1, c(i = e) && (i = e, 
        e = void 0)), e || "");
        var n = le(), s = t ? n._week.dow : 0;
        if (null != i) return ii(e, (i + s) % 7, o, "day");
        for (var r = [], a = 0; a < 7; a++) r[a] = ii(e, (a + s) % 7, o, "day");
        return r;
    }
    et.calendar = function(t, e, i) {
        return N(t = this._calendar[t] || this._calendar.sameElse) ? t.call(e, i) : t;
    }, et.longDateFormat = function(t) {
        var e = this._longDateFormat[t], i = this._longDateFormat[t.toUpperCase()];
        return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function(t) {
            return t.slice(1);
        }), this._longDateFormat[t]);
    }, et.invalidDate = function() {
        return this._invalidDate;
    }, et.ordinal = function(t) {
        return this._ordinal.replace("%d", t);
    }, et.preparse = ei, et.postformat = ei, et.relativeTime = function(t, e, i, o) {
        var n = this._relativeTime[i];
        return N(n) ? n(t, e, i, o) : n.replace(/%d/i, t);
    }, et.pastFuture = function(t, e) {
        return N(t = this._relativeTime[0 < t ? "future" : "past"]) ? t(e) : t.replace(/%s/i, e);
    }, et.set = function(t) {
        var e, i;
        for (i in t) N(e = t[i]) ? this[i] = e : this["_" + i] = e;
        this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
    }, et.months = function(t, e) {
        return t ? (r(this._months) ? this._months : this._months[(this._months.isFormat || Ct).test(e) ? "format" : "standalone"])[t.month()] : r(this._months) ? this._months : this._months.standalone;
    }, et.monthsShort = function(t, e) {
        return t ? (r(this._monthsShort) ? this._monthsShort : this._monthsShort[Ct.test(e) ? "format" : "standalone"])[t.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
    }, et.monthsParse = function(t, e, i) {
        var o, n;
        if (this._monthsParseExact) return function(t, e, i) {
            var o, n, s, t = t.toLocaleLowerCase();
            if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], 
            this._shortMonthsParse = [], o = 0; o < 12; ++o) s = h([ 2e3, o ]), this._shortMonthsParse[o] = this.monthsShort(s, "").toLocaleLowerCase(), 
            this._longMonthsParse[o] = this.months(s, "").toLocaleLowerCase();
            return i ? "MMM" === e ? -1 !== (n = Tt.call(this._shortMonthsParse, t)) ? n : null : -1 !== (n = Tt.call(this._longMonthsParse, t)) ? n : null : "MMM" === e ? -1 !== (n = Tt.call(this._shortMonthsParse, t)) || -1 !== (n = Tt.call(this._longMonthsParse, t)) ? n : null : -1 !== (n = Tt.call(this._longMonthsParse, t)) || -1 !== (n = Tt.call(this._shortMonthsParse, t)) ? n : null;
        }.call(this, t, e, i);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), 
        o = 0; o < 12; o++) {
            if (n = h([ 2e3, o ]), i && !this._longMonthsParse[o] && (this._longMonthsParse[o] = new RegExp("^" + this.months(n, "").replace(".", "") + "$", "i"), 
            this._shortMonthsParse[o] = new RegExp("^" + this.monthsShort(n, "").replace(".", "") + "$", "i")), 
            i || this._monthsParse[o] || (n = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), 
            this._monthsParse[o] = new RegExp(n.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[o].test(t)) return o;
            if (i && "MMM" === e && this._shortMonthsParse[o].test(t)) return o;
            if (!i && this._monthsParse[o].test(t)) return o;
        }
    }, et.monthsRegex = function(t) {
        return this._monthsParseExact ? (u(this, "_monthsRegex") || Dt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = xt), 
        this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex);
    }, et.monthsShortRegex = function(t) {
        return this._monthsParseExact ? (u(this, "_monthsRegex") || Dt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = Et), 
        this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex);
    }, et.week = function(t) {
        return $t(t, this._week.dow, this._week.doy).week;
    }, et.firstDayOfYear = function() {
        return this._week.doy;
    }, et.firstDayOfWeek = function() {
        return this._week.dow;
    }, et.weekdays = function(t, e) {
        return t ? (r(this._weekdays) ? this._weekdays : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"])[t.day()] : r(this._weekdays) ? this._weekdays : this._weekdays.standalone;
    }, et.weekdaysMin = function(t) {
        return t ? this._weekdaysMin[t.day()] : this._weekdaysMin;
    }, et.weekdaysShort = function(t) {
        return t ? this._weekdaysShort[t.day()] : this._weekdaysShort;
    }, et.weekdaysParse = function(t, e, i) {
        var o, n;
        if (this._weekdaysParseExact) return function(t, e, i) {
            var o, n, s, t = t.toLocaleLowerCase();
            if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], 
            this._minWeekdaysParse = [], o = 0; o < 7; ++o) s = h([ 2e3, 1 ]).day(o), this._minWeekdaysParse[o] = this.weekdaysMin(s, "").toLocaleLowerCase(), 
            this._shortWeekdaysParse[o] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[o] = this.weekdays(s, "").toLocaleLowerCase();
            return i ? "dddd" === e ? -1 !== (n = Tt.call(this._weekdaysParse, t)) ? n : null : "ddd" === e ? -1 !== (n = Tt.call(this._shortWeekdaysParse, t)) ? n : null : -1 !== (n = Tt.call(this._minWeekdaysParse, t)) ? n : null : "dddd" === e ? -1 !== (n = Tt.call(this._weekdaysParse, t)) || -1 !== (n = Tt.call(this._shortWeekdaysParse, t)) || -1 !== (n = Tt.call(this._minWeekdaysParse, t)) ? n : null : "ddd" === e ? -1 !== (n = Tt.call(this._shortWeekdaysParse, t)) || -1 !== (n = Tt.call(this._weekdaysParse, t)) || -1 !== (n = Tt.call(this._minWeekdaysParse, t)) ? n : null : -1 !== (n = Tt.call(this._minWeekdaysParse, t)) || -1 !== (n = Tt.call(this._weekdaysParse, t)) || -1 !== (n = Tt.call(this._shortWeekdaysParse, t)) ? n : null;
        }.call(this, t, e, i);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], 
        this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), o = 0; o < 7; o++) {
            if (n = h([ 2e3, 1 ]).day(o), i && !this._fullWeekdaysParse[o] && (this._fullWeekdaysParse[o] = new RegExp("^" + this.weekdays(n, "").replace(".", ".?") + "$", "i"), 
            this._shortWeekdaysParse[o] = new RegExp("^" + this.weekdaysShort(n, "").replace(".", ".?") + "$", "i"), 
            this._minWeekdaysParse[o] = new RegExp("^" + this.weekdaysMin(n, "").replace(".", ".?") + "$", "i")), 
            this._weekdaysParse[o] || (n = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), 
            this._weekdaysParse[o] = new RegExp(n.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[o].test(t)) return o;
            if (i && "ddd" === e && this._shortWeekdaysParse[o].test(t)) return o;
            if (i && "dd" === e && this._minWeekdaysParse[o].test(t)) return o;
            if (!i && this._weekdaysParse[o].test(t)) return o;
        }
    }, et.weekdaysRegex = function(t) {
        return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = Vt), 
        this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex);
    }, et.weekdaysShortRegex = function(t) {
        return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Yt), 
        this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
    }, et.weekdaysMinRegex = function(t) {
        return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Gt), 
        this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
    }, et.isPM = function(t) {
        return "p" === (t + "").toLowerCase().charAt(0);
    }, et.meridiem = function(t, e, i) {
        return 11 < t ? i ? "pm" : "PM" : i ? "am" : "AM";
    }, ae("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(t) {
            var e = t % 10;
            return t + (1 === y(t % 100 / 10) ? "th" : 1 == e ? "st" : 2 == e ? "nd" : 3 == e ? "rd" : "th");
        }
    }), p.lang = i("moment.lang is deprecated. Use moment.locale instead.", ae), p.langData = i("moment.langData is deprecated. Use moment.localeData instead.", le);
    var si = Math.abs;
    function ri(t, e, i, o) {
        i = He(e, i);
        return t._milliseconds += o * i._milliseconds, t._days += o * i._days, t._months += o * i._months, 
        t._bubble();
    }
    function ai(t) {
        return t < 0 ? Math.floor(t) : Math.ceil(t);
    }
    function ci(t) {
        return 4800 * t / 146097;
    }
    function li(t) {
        return 146097 * t / 4800;
    }
    function di(t) {
        return function() {
            return this.as(t);
        };
    }
    G = di("ms"), U = di("s"), j = di("m"), Z = di("h"), V = di("d"), rt = di("w"), 
    Se = di("M"), Ne = di("y");
    function pi(t) {
        return function() {
            return this.isValid() ? this._data[t] : NaN;
        };
    }
    K = pi("milliseconds"), ee = pi("seconds"), Ft = pi("minutes"), jt = pi("hours"), 
    tt = pi("days"), Bt = pi("months"), wt = pi("years");
    var ui = Math.round, hi = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    };
    function fi(t, e, i) {
        var o = He(t).abs(), n = ui(o.as("s")), s = ui(o.as("m")), r = ui(o.as("h")), a = ui(o.as("d")), c = ui(o.as("M")), o = ui(o.as("y")), o = (n <= hi.ss ? [ "s", n ] : n < hi.s && [ "ss", n ]) || s <= 1 && [ "m" ] || s < hi.m && [ "mm", s ] || r <= 1 && [ "h" ] || r < hi.h && [ "hh", r ] || a <= 1 && [ "d" ] || a < hi.d && [ "dd", a ] || c <= 1 && [ "M" ] || c < hi.M && [ "MM", c ] || o <= 1 && [ "y" ] || [ "yy", o ];
        return o[2] = e, o[3] = 0 < +t, o[4] = i, function(t, e, i, o, n) {
            return n.relativeTime(e || 1, !!i, t, o);
        }.apply(null, o);
    }
    var Mi = Math.abs;
    function bi(t) {
        return (0 < t) - (t < 0) || +t;
    }
    function mi() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t = Mi(this._milliseconds) / 1e3, e = Mi(this._days), i = Mi(this._months), o = v(t / 60), n = v(o / 60);
        t %= 60, o %= 60;
        var s = v(i / 12), r = i %= 12, a = e, c = n, l = o, i = t ? t.toFixed(3).replace(/\.?0+$/, "") : "", e = this.asSeconds();
        if (!e) return "P0D";
        n = e < 0 ? "-" : "", o = bi(this._months) !== bi(e) ? "-" : "", t = bi(this._days) !== bi(e) ? "-" : "", 
        e = bi(this._milliseconds) !== bi(e) ? "-" : "";
        return n + "P" + (s ? o + s + "Y" : "") + (r ? o + r + "M" : "") + (a ? t + a + "D" : "") + (c || l || i ? "T" : "") + (c ? e + c + "H" : "") + (l ? e + l + "M" : "") + (i ? e + i + "S" : "");
    }
    et = Be.prototype;
    return et.isValid = function() {
        return this._isValid;
    }, et.abs = function() {
        var t = this._data;
        return this._milliseconds = si(this._milliseconds), this._days = si(this._days), 
        this._months = si(this._months), t.milliseconds = si(t.milliseconds), t.seconds = si(t.seconds), 
        t.minutes = si(t.minutes), t.hours = si(t.hours), t.months = si(t.months), t.years = si(t.years), 
        this;
    }, et.add = function(t, e) {
        return ri(this, t, e, 1);
    }, et.subtract = function(t, e) {
        return ri(this, t, e, -1);
    }, et.as = function(t) {
        if (!this.isValid()) return NaN;
        var e, i, o = this._milliseconds;
        if ("month" === (t = _(t)) || "year" === t) return e = this._days + o / 864e5, i = this._months + ci(e), 
        "month" === t ? i : i / 12;
        switch (e = this._days + Math.round(li(this._months)), t) {
          case "week":
            return e / 7 + o / 6048e5;

          case "day":
            return e + o / 864e5;

          case "hour":
            return 24 * e + o / 36e5;

          case "minute":
            return 1440 * e + o / 6e4;

          case "second":
            return 86400 * e + o / 1e3;

          case "millisecond":
            return Math.floor(864e5 * e) + o;

          default:
            throw new Error("Unknown unit " + t);
        }
    }, et.asMilliseconds = G, et.asSeconds = U, et.asMinutes = j, et.asHours = Z, et.asDays = V, 
    et.asWeeks = rt, et.asMonths = Se, et.asYears = Ne, et.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * y(this._months / 12) : NaN;
    }, et._bubble = function() {
        var t = this._milliseconds, e = this._days, i = this._months, o = this._data;
        return 0 <= t && 0 <= e && 0 <= i || t <= 0 && e <= 0 && i <= 0 || (t += 864e5 * ai(li(i) + e), 
        i = e = 0), o.milliseconds = t % 1e3, t = v(t / 1e3), o.seconds = t % 60, t = v(t / 60), 
        o.minutes = t % 60, t = v(t / 60), o.hours = t % 24, e += v(t / 24), i += t = v(ci(e)), 
        e -= ai(li(t)), t = v(i / 12), i %= 12, o.days = e, o.months = i, o.years = t, this;
    }, et.clone = function() {
        return He(this);
    }, et.get = function(t) {
        return t = _(t), this.isValid() ? this[t + "s"]() : NaN;
    }, et.milliseconds = K, et.seconds = ee, et.minutes = Ft, et.hours = jt, et.days = tt, 
    et.weeks = function() {
        return v(this.days() / 7);
    }, et.months = Bt, et.years = wt, et.humanize = function(t) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e = this.localeData(), i = fi(this, !t, e);
        return t && (i = e.pastFuture(+this, i)), e.postformat(i);
    }, et.toISOString = mi, et.toString = mi, et.toJSON = mi, et.locale = Ge, et.localeData = Qe, 
    et.toIsoString = i("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", mi), 
    et.lang = J, $("X", 0, 0, "unix"), $("x", 0, 0, "valueOf"), ct("x", ot), ct("X", /[+-]?\d+(\.\d{1,3})?/), 
    ut("X", function(t, e, i) {
        i._d = new Date(1e3 * parseFloat(t, 10));
    }), ut("x", function(t, e, i) {
        i._d = new Date(y(t));
    }), p.version = "2.19.2", t = qe, p.fn = Y, p.min = function() {
        return We("isBefore", [].slice.call(arguments, 0));
    }, p.max = function() {
        return We("isAfter", [].slice.call(arguments, 0));
    }, p.now = function() {
        return Date.now ? Date.now() : +new Date();
    }, p.utc = h, p.unix = function(t) {
        return qe(1e3 * t);
    }, p.months = function(t, e) {
        return oi(t, e, "months");
    }, p.isDate = n, p.locale = ae, p.invalid = b, p.duration = He, p.isMoment = A, 
    p.weekdays = function(t, e, i) {
        return ni(t, e, i, "weekdays");
    }, p.parseZone = function() {
        return qe.apply(null, arguments).parseZone();
    }, p.localeData = le, p.isDuration = _e, p.monthsShort = function(t, e) {
        return oi(t, e, "monthsShort");
    }, p.weekdaysMin = function(t, e, i) {
        return ni(t, e, i, "weekdaysMin");
    }, p.defineLocale = ce, p.updateLocale = function(t, e) {
        var i, o;
        return null != e ? (i = ie, null != (o = re(t)) && (i = o._config), (e = new W(e = S(i, e))).parentLocale = oe[t], 
        oe[t] = e, ae(t)) : null != oe[t] && (null != oe[t].parentLocale ? oe[t] = oe[t].parentLocale : null != oe[t] && delete oe[t]), 
        oe[t];
    }, p.locales = function() {
        return T(oe);
    }, p.weekdaysShort = function(t, e, i) {
        return ni(t, e, i, "weekdaysShort");
    }, p.normalizeUnits = _, p.relativeTimeRounding = function(t) {
        return void 0 === t ? ui : "function" == typeof t && (ui = t, !0);
    }, p.relativeTimeThreshold = function(t, e) {
        return void 0 !== hi[t] && (void 0 === e ? hi[t] : (hi[t] = e, "s" === t && (hi.ss = e - 1), 
        !0));
    }, p.calendarFormat = function(t, e) {
        return (e = t.diff(e, "days", !0)) < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse";
    }, p.prototype = Y, p;
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "moment" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("moment")) : e(t.moment);
}(this, function(n) {
    "use strict";
    var e, s = {}, r = {}, l = {}, d = {}, t = n.version.split("."), i = +t[0], o = +t[1];
    function a(t) {
        return 96 < t ? t - 87 : 64 < t ? t - 29 : t - 48;
    }
    function c(t) {
        var e = 0, i = t.split("."), o = i[0], n = i[1] || "", s = 1, r = 0, i = 1;
        for (45 === t.charCodeAt(0) && (i = -(e = 1)); e < o.length; e++) r = 60 * r + a(o.charCodeAt(e));
        for (e = 0; e < n.length; e++) s /= 60, r += a(n.charCodeAt(e)) * s;
        return r * i;
    }
    function p(t) {
        for (var e = 0; e < t.length; e++) t[e] = c(t[e]);
    }
    function u(t, e) {
        for (var i = [], o = 0; o < e.length; o++) i[o] = t[e[o]];
        return i;
    }
    function h(t) {
        var e = t.split("|"), i = e[2].split(" "), o = e[3].split(""), t = e[4].split(" ");
        return p(i), p(o), p(t), function(t, e) {
            for (var i = 0; i < e; i++) t[i] = Math.round((t[i - 1] || 0) + 6e4 * t[i]);
            t[e - 1] = 1 / 0;
        }(t, o.length), {
            name: e[0],
            abbrs: u(e[1].split(" "), o),
            offsets: u(i, o),
            untils: t,
            population: 0 | e[5]
        };
    }
    function f(t) {
        t && this._set(h(t));
    }
    function M(t) {
        var e = t.toTimeString(), i = e.match(/\([a-z ]+\)/i);
        "GMT" === (i = i && i[0] ? (i = i[0].match(/[A-Z]/g)) ? i.join("") : void 0 : (i = e.match(/[A-Z]{3,5}/g)) ? i[0] : void 0) && (i = void 0), 
        this.at = +t, this.abbr = i, this.offset = t.getTimezoneOffset();
    }
    function b(t) {
        this.zone = t, this.offsetScore = 0, this.abbrScore = 0;
    }
    function m() {
        for (var t, e, i = new Date().getFullYear() - 2, o = new M(new Date(i, 0, 1)), n = [ o ], s = 1; s < 48; s++) (e = new M(new Date(i, s, 1))).offset !== o.offset && (t = function(t, e) {
            for (var i; i = 6e4 * ((e.at - t.at) / 12e4 | 0); ) (i = new M(new Date(t.at + i))).offset === t.offset ? t = i : e = i;
            return t;
        }(o, e), n.push(t), n.push(new M(new Date(t.at + 6e4)))), o = e;
        for (s = 0; s < 4; s++) n.push(new M(new Date(i + s, 0, 1))), n.push(new M(new Date(i + s, 6, 1)));
        return n;
    }
    function g(t, e) {
        return t.offsetScore !== e.offsetScore ? t.offsetScore - e.offsetScore : t.abbrScore !== e.abbrScore ? t.abbrScore - e.abbrScore : e.zone.population - t.zone.population;
    }
    function z() {
        try {
            var t = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (t && 3 < t.length) {
                var e = l[A(t)];
                if (e) return e;
                q("Moment Timezone found " + t + " from the Intl api, but did not have that data loaded.");
            }
        } catch (t) {}
        for (var i, o, n = m(), s = n.length, r = function(t) {
            for (var e, i, o = t.length, n = {}, s = [], r = 0; r < o; r++) for (e in i = d[t[r].offset] || {}) i.hasOwnProperty(e) && (n[e] = !0);
            for (r in n) n.hasOwnProperty(r) && s.push(l[r]);
            return s;
        }(n), a = [], c = 0; c < r.length; c++) {
            for (i = new b(y(r[c])), o = 0; o < s; o++) i.scoreOffsetAt(n[o]);
            a.push(i);
        }
        return a.sort(g), 0 < a.length ? a[0].zone.name : void 0;
    }
    function A(t) {
        return (t || "").toLowerCase().replace(/\//g, "_");
    }
    function v(t) {
        var e, i, o, n;
        for ("string" == typeof t && (t = [ t ]), e = 0; e < t.length; e++) n = A(i = (o = t[e].split("|"))[0]), 
        s[n] = t[e], l[n] = i, function(t, e) {
            var i, o;
            for (p(e), i = 0; i < e.length; i++) o = e[i], d[o] = d[o] || {}, d[o][t] = !0;
        }(n, o[2].split(" "));
    }
    function y(t, e) {
        t = A(t);
        var i, o = s[t];
        return o instanceof f ? o : "string" == typeof o ? (o = new f(o), s[t] = o) : r[t] && e !== y && (i = y(r[t], y)) ? ((o = s[t] = new f())._set(i), 
        o.name = l[t], o) : null;
    }
    function O(t) {
        var e, i, o, n;
        for ("string" == typeof t && (t = [ t ]), e = 0; e < t.length; e++) o = A((i = t[e].split("|"))[0]), 
        n = A(i[1]), r[o] = n, l[o] = i[0], r[n] = o, l[n] = i[1];
    }
    function L(t) {
        v(t.zones), O(t.links), N.dataVersion = t.version;
    }
    function T(t) {
        return T.didShowError || (T.didShowError = !0, q("moment.tz.zoneExists('" + t + "') has been deprecated in favor of !moment.tz.zone('" + t + "')")), 
        !!y(t);
    }
    function w(t) {
        var e = "X" === t._f || "x" === t._f;
        return !(!t._a || void 0 !== t._tzm || e);
    }
    function q(t) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(t);
    }
    function N(t) {
        var e = Array.prototype.slice.call(arguments, 0, -1), i = arguments[arguments.length - 1], o = y(i), e = n.utc.apply(null, e);
        return o && !n.isMoment(t) && w(e) && e.add(o.parse(e), "minutes"), e.tz(i), e;
    }
    (i < 2 || 2 == i && o < 6) && q("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + n.version + ". See momentjs.com"), 
    f.prototype = {
        _set: function(t) {
            this.name = t.name, this.abbrs = t.abbrs, this.untils = t.untils, this.offsets = t.offsets, 
            this.population = t.population;
        },
        _index: function(t) {
            for (var e = +t, i = this.untils, o = 0; o < i.length; o++) if (e < i[o]) return o;
        },
        parse: function(t) {
            for (var e, i, o, n = +t, s = this.offsets, r = this.untils, a = r.length - 1, c = 0; c < a; c++) if (e = s[c], 
            i = s[c + 1], o = s[c ? c - 1 : c], e < i && N.moveAmbiguousForward ? e = i : o < e && N.moveInvalidForward && (e = o), 
            n < r[c] - 6e4 * e) return s[c];
            return s[a];
        },
        abbr: function(t) {
            return this.abbrs[this._index(t)];
        },
        offset: function(t) {
            return q("zone.offset has been deprecated in favor of zone.utcOffset"), this.offsets[this._index(t)];
        },
        utcOffset: function(t) {
            return this.offsets[this._index(t)];
        }
    }, b.prototype.scoreOffsetAt = function(t) {
        this.offsetScore += Math.abs(this.zone.utcOffset(t.at) - t.offset), this.zone.abbr(t.at).replace(/[^A-Z]/g, "") !== t.abbr && this.abbrScore++;
    }, N.version = "0.5.14", N.dataVersion = "", N._zones = s, N._links = r, N._names = l, 
    N.add = v, N.link = O, N.load = L, N.zone = y, N.zoneExists = T, N.guess = function(t) {
        return e && !t || (e = z()), e;
    }, N.names = function() {
        var t, e = [];
        for (t in l) l.hasOwnProperty(t) && (s[t] || s[r[t]]) && l[t] && e.push(l[t]);
        return e.sort();
    }, N.Zone = f, N.unpack = h, N.unpackBase60 = c, N.needsOffset = w, N.moveInvalidForward = !0, 
    N.moveAmbiguousForward = !1;
    var S, t = n.fn;
    function W(t) {
        return function() {
            return this._z ? this._z.abbr(this) : t.call(this);
        };
    }
    n.tz = N, n.defaultZone = null, n.updateOffset = function(t, e) {
        var i = n.defaultZone;
        void 0 === t._z && (i && w(t) && !t._isUTC && (t._d = n.utc(t._a)._d, t.utc().add(i.parse(t), "minutes")), 
        t._z = i), t._z && (i = t._z.utcOffset(t), Math.abs(i) < 16 && (i /= 60), void 0 !== t.utcOffset ? t.utcOffset(-i, e) : t.zone(i, e));
    }, t.tz = function(t, e) {
        return t ? (this._z = y(t), this._z ? n.updateOffset(this, e) : q("Moment Timezone has no data for " + t + ". See http://momentjs.com/timezone/docs/#/data-loading/."), 
        this) : this._z ? this._z.name : void 0;
    }, t.zoneName = W(t.zoneName), t.zoneAbbr = W(t.zoneAbbr), t.utc = (S = t.utc, function() {
        return this._z = null, S.apply(this, arguments);
    }), n.tz.setDefault = function(t) {
        return (i < 2 || 2 == i && o < 9) && q("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + n.version + "."), 
        n.defaultZone = t ? y(t) : null, n;
    };
    t = n.momentProperties;
    return "[object Array]" === Object.prototype.toString.call(t) ? (t.push("_z"), t.push("_a")) : t && (t._z = null), 
    L({
        version: "2017c",
        zones: [ "Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5", "Africa/Accra|LMT GMT +0020|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE|41e5", "Africa/Nairobi|LMT EAT +0230 +0245|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ|47e5", "Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5", "Africa/Lagos|LMT WAT|-d.A -10|01|-22y0d.A|17e6", "Africa/Bissau|LMT -01 GMT|12.k 10 0|012|-2ldWV.E 2xonV.E|39e4", "Africa/Maputo|LMT CAT|-2a.k -20|01|-2GJea.k|26e5", "Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6", "Africa/Casablanca|LMT WET WEST CET|u.k 0 -10 -10|0121212121212121213121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|32e5", "Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1y7o0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|85e3", "Africa/El_Aaiun|LMT -01 WET WEST|Q.M 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|20e4", "Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0|84e5", "Africa/Juba|LMT CAT CAST EAT|-26.s -20 -30 -30|01212121212121212121212121212121213|-1yW26.s 1zK06.s 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0", "Africa/Khartoum|LMT CAT CAST EAT|-2a.8 -20 -30 -30|012121212121212121212121212121212131|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0 HjL0|51e5", "Africa/Monrovia|MMT MMT GMT|H.8 I.u 0|012|-23Lzg.Q 28G01.m|11e5", "Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0|13e5", "Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5", "Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5", "Africa/Windhoek|+0130 SAST SAST CAT WAT WAST|-1u -20 -30 -20 -10 -20|01213454545454545454545454545454545454545454545454543|-2GJdu 1Ajdu 1cL0 1SqL0 9Io0 16P0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4", "America/Adak|NST NWT NPT BST BDT AHST HST HDT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326", "America/Anchorage|AST AWT APT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4", "America/Port_of_Spain|LMT AST|46.4 40|01|-2kNvR.U|43e3", "America/Araguaina|LMT -03 -02|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4", "America/Argentina/Buenos_Aires|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 A4p0 uL0 1qN0 WL0", "America/Argentina/Catamarca|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 7B0 8zb0 uL0", "America/Argentina/Cordoba|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0 1qN0 WL0", "America/Argentina/Jujuy|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 A4p0 uL0", "America/Argentina/La_Rioja|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0", "America/Argentina/Mendoza|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232312121321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 ri10 Op0 7TX0 uL0", "America/Argentina/Rio_Gallegos|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0", "America/Argentina/Salta|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0", "America/Argentina/San_Juan|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rld0 m10 8lb0 uL0", "America/Argentina/San_Luis|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121212321212|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 vDb0 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0", "America/Argentina/Tucuman|CMT -04 -03 -02|4g.M 40 30 20|0121212121212121212121212121212121212121212323232313232123232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 4N0 8BX0 uL0 1qN0 WL0", "America/Argentina/Ushuaia|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rkN0 8p0 8zb0 uL0", "America/Curacao|LMT -0430 AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d|15e4", "America/Asuncion|AMT -04 -03|3O.E 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5", "America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0|28e2", "America/Bahia|LMT -03 -02|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5", "America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3", "America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4", "America/Belem|LMT -03 -02|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|20e5", "America/Belize|LMT CST -0530 CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0|57e3", "America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0|11e2", "America/Boa_Vista|LMT -04 -03|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2", "America/Bogota|BMT -05 -04|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0|90e5", "America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4", "America/Cambridge_Bay|-00 MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2", "America/Campo_Grande|LMT -04 -03|3C.s 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|77e4", "America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141412|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4", "America/Caracas|CMT -0430 -04|4r.E 4u 40|01212|-2kV7w.k 28KM2.k 1IwOu kqo0|29e5", "America/Cayenne|LMT -04 -03|3t.k 40 30|012|-2mrwu.E 2gWou.E|58e3", "America/Panama|CMT EST|5j.A 50|01|-2uduE.o|15e5", "America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5", "America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4", "America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5", "America/Creston|MST PST|70 80|010|-29DR0 43B0|53e2", "America/Cuiaba|LMT -04 -03|3I.k 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|54e4", "America/Danmarkshavn|LMT -03 -02 GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8", "America/Dawson|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|13e2", "America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0|12e3", "America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5", "America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|012342525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 XQp0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5", "America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|01212121212121341212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 LFB0 1cL0 3Cp0 1cL0 66N0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5", "America/Eirunepe|LMT -05 -04|4D.s 50 40|0121212121212121212121212121212121|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3", "America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0|11e5", "America/Tijuana|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOO0 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5", "America/Fort_Nelson|PST PDT PWT PPT MST|80 70 70 70 70|01023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2", "America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Fortaleza|LMT -03 -02|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5", "America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3", "America/Godthab|LMT -03 -02|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3", "America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2", "America/Grand_Turk|KMT EST EDT AST|57.b 50 40 40|01212121212121212121212121212121212121212121212121212121212121212121212121232121212121212121212121212121212121212121|-2l1uQ.N 2HHBQ.N 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2", "America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5", "America/Guayaquil|QMT -05 -04|5e 50 40|0121|-1yVSK 2uILK rz0|27e5", "America/Guyana|LMT -0345 -03 -04|3Q.E 3J 30 40|0123|-2dvU7.k 2r6LQ.k Bxbf|80e4", "America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4", "America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5", "America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4", "America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Inuvik|-00 PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2", "America/Iqaluit|-00 EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2", "America/Jamaica|KMT EST EDT|57.b 50 40|0121212121212121212121|-2l1uQ.N 2uM1Q.N 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4", "America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3", "America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 Bb0 10N0 2bB0 8in0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/La_Paz|CMT BOST -04|4w.A 3w.A 40|012|-1x37r.o 13b0|19e5", "America/Lima|LMT -05 -04|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6", "America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp1 1VaX 3dA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6", "America/Maceio|LMT -03 -02|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4", "America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5", "America/Manaus|LMT -04 -03|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5", "America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0|39e4", "America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4", "America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|44e4", "America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2", "America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|11e5", "America/Metlakatla|PST PWT PPT PDT AKST AKDT|80 70 70 70 90 80|0120303030303030303030303030303030454545454545454545454545454545454545454545454|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2", "America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6", "America/Miquelon|LMT AST -03 -02|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2", "America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3", "America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|41e5", "America/Montevideo|MMT -0330 -03 -02 -0230|3I.I 3u 30 20 2u|012121212121212121212121213232323232324242423243232323232323232323232323232323232323232|-20UIf.g 8jzJ.g 1cLu 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1qMu WLu 1qMu 11zu 1o0u 11zu NAu 11bu 2iMu zWu Dq10 19X0 pd0 jz0 cm10 19X0 1fB0 1on0 11d0 1oL0 1nB0 1fzu 1aou 1fzu 1aou 1fzu 3nAu Jb0 3MN0 1SLu 4jzu 2PB0 Lb0 3Dd0 1pb0 ixd0 An0 1MN0 An0 1wp0 On0 1wp0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5", "America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5", "America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|24e4", "America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6", "America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2", "America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2", "America/Noronha|LMT -02 -01|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2", "America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3", "America/Pangnirtung|-00 AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2", "America/Paramaribo|LMT PMT PMT -0330 -03|3E.E 3E.Q 3E.A 3u 30|01234|-2nDUj.k Wqo0.c qanX.I 1yVXN.o|24e4", "America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0|42e5", "America/Port-au-Prince|PPMT EST EDT|4N 50 40|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5", "America/Rio_Branco|LMT -05 -04|4v.c 50 40|01212121212121212121212121212121|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4", "America/Porto_Velho|LMT -04 -03|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|37e4", "America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0|24e5", "America/Punta_Arenas|SMT -05 -04 -03|4G.K 50 40 30|0102021212121212121232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 blz0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0", "America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842", "America/Rankin_Inlet|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2", "America/Recife|LMT -03 -02|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5", "America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0|19e4", "America/Resolute|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229", "America/Santarem|LMT -04 -03|3C.M 40 30|0121212121212121212121212121212|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4", "America/Santiago|SMT -05 -04 -03|4G.K 50 40 30|010202121212121212321232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9Bz0 jb0 1oN0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|62e5", "America/Santo_Domingo|SDMT EST EDT -0430 AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5", "America/Sao_Paulo|LMT -03 -02|36.s 30 20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|20e6", "America/Scoresbysund|LMT -02 -01 +00|1r.Q 20 10 0|0121323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452", "America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2", "America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4", "America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0|16e3", "America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0|11e5", "America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656", "America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4", "America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5", "America/Whitehorse|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 3NA0 vrd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3", "America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4", "America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642", "America/Yellowknife|-00 MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3", "Antarctica/Casey|-00 +08 +11|0 -80 -b0|0121212|-2q00 1DjS0 T90 40P0 KL0 blz0|10", "Antarctica/Davis|-00 +07 +05|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0|70", "Antarctica/DumontDUrville|-00 +10|0 -a0|0101|-U0o0 cfq0 bFm0|80", "Antarctica/Macquarie|AEST AEDT -00 +11|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0|1", "Antarctica/Mawson|-00 +06 +05|0 -60 -50|012|-CEo0 2fyk0|60", "Pacific/Auckland|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5", "Antarctica/Palmer|-00 -03 -04 -02|0 30 40 20|0121212121213121212121212121212121212121212121212121212121212121212121212121212121|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40", "Antarctica/Rothera|-00 -03|0 30|01|gOo0|130", "Antarctica/Syowa|-00 +03|0 -30|01|-vs00|20", "Antarctica/Troll|-00 +00 +02|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40", "Antarctica/Vostok|-00 +06|0 -60|01|-tjA0|25", "Europe/Oslo|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e4", "Asia/Riyadh|LMT +03|-36.Q -30|01|-TvD6.Q|57e5", "Asia/Almaty|LMT +05 +06 +07|-57.M -50 -60 -70|012323232323232323232321232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5", "Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e5", "Asia/Anadyr|LMT +12 +13 +14 +11|-bN.U -c0 -d0 -e0 -b0|01232121212121212121214121212121212121212121212121212121212141|-1PcbN.U eUnN.U 23CL0 1db0 2q10 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|13e3", "Asia/Aqtau|LMT +04 +05 +06|-3l.4 -40 -50 -60|012323232323232323232123232312121212121212121212|-1Pc3l.4 eUnl.4 24PX0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4", "Asia/Aqtobe|LMT +04 +05 +06|-3M.E -40 -50 -60|0123232323232323232321232323232323232323232323232|-1Pc3M.E eUnM.E 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4", "Asia/Ashgabat|LMT +04 +05 +06|-3R.w -40 -50 -60|0123232323232323232323212|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0|41e4", "Asia/Atyrau|LMT +03 +05 +06 +04|-3r.I -30 -50 -60 -40|01232323232323232323242323232323232324242424242|-1Pc3r.I eUor.I 24PW0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 2sp0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0", "Asia/Baghdad|BMT +03 +04|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5", "Asia/Qatar|LMT +04 +03|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8|96e4", "Asia/Baku|LMT +03 +04 +05|-3j.o -30 -40 -50|01232323232323232323232123232323232323232323232323232323232323232|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 9Je0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5", "Asia/Bangkok|BMT +07|-6G.4 -70|01|-218SG.4|15e6", "Asia/Barnaul|LMT +06 +07 +08|-5z -60 -70 -80|0123232323232323232323212323232321212121212121212121212121212121212|-21S5z pCnz 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0", "Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5", "Asia/Bishkek|LMT +05 +06 +07|-4W.o -50 -60 -70|012323232323232323232321212121212121212121212121212|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2e00 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|87e4", "Asia/Brunei|LMT +0730 +08|-7D.E -7u -80|012|-1KITD.E gDc9.E|42e4", "Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6", "Asia/Chita|LMT +08 +09 +10|-7x.Q -80 -90 -a0|012323232323232323232321232323232323232323232323232323232323232312|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4", "Asia/Choibalsan|LMT +07 +08 +10 +09|-7C -70 -80 -a0 -90|0123434343434343434343434343434343434343434343424242|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0|38e3", "Asia/Shanghai|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6", "Asia/Colombo|MMT +0530 +06 +0630|-5j.w -5u -60 -6u|01231321|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu|22e5", "Asia/Dhaka|HMT +0630 +0530 +06 +07|-5R.k -6u -5u -60 -70|0121343|-18LFR.k 1unn.k HB0 m6n0 2kxbu 1i00|16e6", "Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|26e5", "Asia/Dili|LMT +08 +09|-8m.k -80 -90|01212|-2le8m.k 1dnXm.k 1nfA0 Xld0|19e4", "Asia/Dubai|LMT +04|-3F.c -40|01|-21JfF.c|39e5", "Asia/Dushanbe|LMT +05 +06 +07|-4z.c -50 -60 -70|012323232323232323232321|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2hB0|76e4", "Asia/Famagusta|LMT EET EEST +03|-2f.M -20 -30 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212312121212121212121212121212121212121212121|-1Vc2f.M 2a3cf.M 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Asia/Gaza|EET EEST IST IDT|-20 -30 -20 -30|010101010101010101010101010101012323232323232323232323232320101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0|18e5", "Asia/Hebron|EET EEST IST IDT|-20 -30 -20 -30|01010101010101010101010101010101232323232323232323232323232010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0|25e4", "Asia/Ho_Chi_Minh|LMT PLMT +07 +08 +09|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0|90e5", "Asia/Hong_Kong|LMT HKT HKST JST|-7A.G -80 -90 -90|0121312121212121212121212121212121212121212121212121212121212121212121|-2CFHA.G 1sEP6.G 1cL0 ylu 93X0 1qQu 1tX0 Rd0 1In0 NB0 1cL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1kL0 14N0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5", "Asia/Hovd|LMT +06 +07 +08|-66.A -60 -70 -80|012323232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|81e3", "Asia/Irkutsk|IMT +07 +08 +09|-6V.5 -70 -80 -90|01232323232323232323232123232323232323232323232323232323232323232|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4", "Europe/Istanbul|IMT EET EEST +04 +03|-1U.U -20 -30 -40 -30|012121212121212121212121212121212121212121212121212121234343434342121212121212121212121212121212121212121212121212121212121212124|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSp0 CL0 mN0 1Vz0 1gN0 1pz0 5Rd0 1fz0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1jB0 18L0 1ip0 17z0 qdd0 xX0 3S10 Tz0 dA10 11z0 1o10 11z0 1qN0 11z0 1ze0 11B0 WM0 1qO0 WI0 1nX0 1rB0 10L0 11B0 1in0 17d0 1in0 2pX0 19E0 1fU0 16Q0 1iI0 16Q0 1iI0 1Vd0 pb0 3Kp0 14o0 1de0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1a00 1fA0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6", "Asia/Jakarta|BMT +0720 +0730 +09 +08 WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu|31e6", "Asia/Jayapura|LMT +09 +0930 WIT|-9m.M -90 -9u -90|0123|-1uu9m.M sMMm.M L4nu|26e4", "Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|01212121212132121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4", "Asia/Kabul|+04 +0430|-40 -4u|01|-10Qs0|46e5", "Asia/Kamchatka|LMT +11 +12 +13|-ay.A -b0 -c0 -d0|012323232323232323232321232323232323232323232323232323232323212|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|18e4", "Asia/Karachi|LMT +0530 +0630 +05 PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6", "Asia/Urumqi|LMT +06|-5O.k -60|01|-1GgtO.k|32e5", "Asia/Kathmandu|LMT +0530 +0545|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g|12e5", "Asia/Khandyga|LMT +08 +09 +10 +11|-92.d -80 -90 -a0 -b0|0123232323232323232323212323232323232323232323232343434343434343432|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2", "Asia/Krasnoyarsk|LMT +06 +07 +08|-6b.q -60 -70 -80|01232323232323232323232123232323232323232323232323232323232323232|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5", "Asia/Kuala_Lumpur|SMT +07 +0720 +0730 +09 +08|-6T.p -70 -7k -7u -90 -80|0123435|-2Bg6T.p 17anT.p l5XE 17bO 8Fyu 1so1u|71e5", "Asia/Kuching|LMT +0730 +08 +0820 +09|-7l.k -7u -80 -8k -90|0123232323232323242|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0|13e4", "Asia/Macau|LMT CST CDT|-7y.k -80 -90|012121212121212121212121212121212121212121|-2le7y.k 1XO34.k 1wn0 Rd0 1wn0 R9u 1wqu U10 1tz0 TVu 1tz0 17gu 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cOu 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cL0|57e4", "Asia/Magadan|LMT +10 +11 +12|-a3.c -a0 -b0 -c0|012323232323232323232321232323232323232323232323232323232323232312|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3", "Asia/Makassar|LMT MMT +08 +09 WITA|-7V.A -7V.A -80 -90 -80|01234|-21JjV.A vfc0 myLV.A 8ML0|15e5", "Asia/Manila|+08 +09|-80 -90|010101010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0|24e6", "Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|32e4", "Asia/Novokuznetsk|LMT +06 +07 +08|-5M.M -60 -70 -80|012323232323232323232321232323232323232323232323232323232323212|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|55e4", "Asia/Novosibirsk|LMT +06 +07 +08|-5v.E -60 -70 -80|0123232323232323232323212323212121212121212121212121212121212121212|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 4eN0|15e5", "Asia/Omsk|LMT +05 +06 +07|-4R.u -50 -60 -70|01232323232323232323232123232323232323232323232323232323232323232|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5", "Asia/Oral|LMT +03 +05 +06 +04|-3p.o -30 -50 -60 -40|01232323232323232424242424242424242424242424242|-1Pc3p.o eUop.o 23CK0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4", "Asia/Pontianak|LMT PMT +0730 +09 +08 WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu|23e4", "Asia/Pyongyang|LMT KST JST KST|-8n -8u -90 -90|01231|-2um8n 97XR 1lTzu 2Onc0|29e5", "Asia/Qyzylorda|LMT +04 +05 +06|-4l.Q -40 -50 -60|0123232323232323232323232323232323232323232323|-1Pc4l.Q eUol.Q 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|73e4", "Asia/Rangoon|RMT +0630 +09|-6o.L -6u -90|0121|-21Jio.L SmnS.L 7j9u|48e5", "Asia/Sakhalin|LMT +09 +11 +12 +10|-9u.M -90 -b0 -c0 -a0|01232323232323232323232423232323232424242424242424242424242424242|-2AGVu.M 1BoMu.M 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 2pB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4", "Asia/Samarkand|LMT +04 +05 +06|-4r.R -40 -50 -60|01232323232323232323232|-1Pc4r.R eUor.R 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|36e4", "Asia/Seoul|LMT KST JST KST KDT KDT|-8r.Q -8u -90 -90 -9u -a0|0123141414141414135353|-2um8r.Q 97XV.Q 1m1zu kKo0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6", "Asia/Srednekolymsk|LMT +10 +11 +12|-ae.Q -a0 -b0 -c0|01232323232323232323232123232323232323232323232323232323232323232|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2", "Asia/Taipei|CST JST CDT|-80 -90 -90|01020202020202020202020202020202020202020|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0|74e5", "Asia/Tashkent|LMT +05 +06 +07|-4B.b -50 -60 -70|012323232323232323232321|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0|23e5", "Asia/Tbilisi|TBMT +03 +04 +05|-2X.b -30 -40 -50|0123232323232323232323212121232323232323232323212|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cK0 1cL0 1cN0 1cL0 1cN0 2pz0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5", "Asia/Tehran|LMT TMT +0330 +04 +05 +0430|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6", "Asia/Thimphu|LMT +0530 +06|-5W.A -5u -60|012|-Su5W.A 1BGMs.A|79e3", "Asia/Tokyo|JST JDT|-90 -a0|010101010|-QJH0 QL0 1lB0 13X0 1zB0 NX0 1zB0 NX0|38e6", "Asia/Tomsk|LMT +06 +07 +08|-5D.P -60 -70 -80|0123232323232323232323212323232323232323232323212121212121212121212|-21NhD.P pxzD.P 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5", "Asia/Ulaanbaatar|LMT +07 +08 +09|-77.w -70 -80 -90|012323232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|12e5", "Asia/Ust-Nera|LMT +08 +09 +12 +11 +10|-9w.S -80 -90 -c0 -b0 -a0|012343434343434343434345434343434343434343434343434343434343434345|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2", "Asia/Vladivostok|LMT +09 +10 +11|-8L.v -90 -a0 -b0|01232323232323232323232123232323232323232323232323232323232323232|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4", "Asia/Yakutsk|LMT +08 +09 +10|-8C.W -80 -90 -a0|01232323232323232323232123232323232323232323232323232323232323232|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4", "Asia/Yekaterinburg|LMT PMT +04 +05 +06|-42.x -3J.5 -40 -50 -60|012343434343434343434343234343434343434343434343434343434343434343|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5", "Asia/Yerevan|LMT +03 +04 +05|-2W -30 -40 -50|0123232323232323232323212121212323232323232323232323232323232|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 4RX0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5", "Atlantic/Azores|HMT -02 -01 +00 WET|1S.w 20 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121232323232323232323232323232323234323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2ldW5.s aPX5.s Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4", "Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3", "Atlantic/Canary|LMT -01 WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Atlantic/Cape_Verde|LMT -02 -01|1y.4 20 10|01212|-2xomp.U 1qOMp.U 7zX0 1djf0|50e4", "Atlantic/Faroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|49e3", "Atlantic/Madeira|FMT -01 +00 +01 WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldWQ.o aPWQ.o Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e4", "Atlantic/Reykjavik|LMT -01 +00 GMT|1s 10 0 0|012121212121212121212121212121212121212121212121212121212121212121213|-2uWmw mfaw 1Bd0 ML0 1LB0 Cn0 1LB0 3fX0 C10 HrX0 1cO0 LB0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0|12e4", "Atlantic/South_Georgia|-02|20|0||30", "Atlantic/Stanley|SMT -04 -03 -02|3P.o 40 30 20|012121212121212323212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 2mN0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2", "Australia/Sydney|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5", "Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5", "Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5", "Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|18e3", "Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|746", "Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0|12e4", "Australia/Eucla|+0845 +0945|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368", "Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|21e4", "Australia/Lord_Howe|AEST +1030 +1130 +11|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347", "Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10", "Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|39e5", "Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5", "CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Pacific/Easter|EMT -07 -06 -05|7h.s 70 60 50|012121212121212121212121212123232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1uSgG.w 1s4IG.w WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 2pA0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|30e2", "EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "EST|EST|50|0|", "EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Europe/Dublin|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g600 14o0 1wo0 17c0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Etc/GMT+0|GMT|0|0|", "Etc/GMT+1|-01|10|0|", "Etc/GMT+10|-10|a0|0|", "Etc/GMT+11|-11|b0|0|", "Etc/GMT+12|-12|c0|0|", "Etc/GMT+3|-03|30|0|", "Etc/GMT+4|-04|40|0|", "Etc/GMT+5|-05|50|0|", "Etc/GMT+6|-06|60|0|", "Etc/GMT+7|-07|70|0|", "Etc/GMT+8|-08|80|0|", "Etc/GMT+9|-09|90|0|", "Etc/GMT-1|+01|-10|0|", "Pacific/Port_Moresby|+10|-a0|0||25e4", "Pacific/Pohnpei|+11|-b0|0||34e3", "Pacific/Tarawa|+12|-c0|0||29e3", "Etc/GMT-13|+13|-d0|0|", "Etc/GMT-14|+14|-e0|0|", "Etc/GMT-2|+02|-20|0|", "Etc/GMT-3|+03|-30|0|", "Etc/GMT-4|+04|-40|0|", "Etc/GMT-5|+05|-50|0|", "Etc/GMT-6|+06|-60|0|", "Indian/Christmas|+07|-70|0||21e2", "Etc/GMT-8|+08|-80|0|", "Pacific/Palau|+09|-90|0||21e3", "Etc/UCT|UCT|0|0|", "Etc/UTC|UTC|0|0|", "Europe/Amsterdam|AMT NST +0120 +0020 CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|16e5", "Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|79e3", "Europe/Astrakhan|LMT +03 +04 +05|-3c.c -30 -40 -50|012323232323232323212121212121212121212121212121212121212121212|-1Pcrc.c eUMc.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0", "Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5", "Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6", "Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5", "Europe/Prague|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 16M0 1lc0 1tA0 17A0 11c0 1io0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e5", "Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|21e5", "Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|19e5", "Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5", "Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e4", "Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|012323232323232323234545467676767676767676767323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4", "Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|30e3", "Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Kaliningrad|CET CEST CET CEST MSK MSD EEST EET +03|-10 -20 -20 -30 -30 -40 -30 -20 -30|0101010101010232454545454545454546767676767676767676767676767676767676767676787|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 Am0 Lb0 1en0 op0 1pNz0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4", "Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|34e5", "Europe/Kirov|LMT +03 +04 +05|-3i.M -30 -40 -50|01232323232323232321212121212121212121212121212121212121212121|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4", "Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ldXn.f aPWn.f Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5", "Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|010101010101010101210343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-25Td0 19B0 1cL0 1dd0 b1z0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1in0 17d0 iIn0 Hd0 1cL0 bb0 1200 2s20 14n0 5aL0 Mp0 1vz0 17d0 1in0 17d0 1in0 17d0 1in0 17d0 6hX0 11B0 XHX0 1a10 1fz0 1a10 19X0 1cN0 1fz0 1a10 1fC0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e5", "Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1co0 17c0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1co0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4", "Europe/Minsk|MMT EET MSK CEST CET MSD EEST +03|-1O -20 -30 -20 -10 -40 -30 -30|01234343252525252525252525261616161616161616161616161616161616161617|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0|19e5", "Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e3", "Europe/Moscow|MMT MMT MST MDST MSD MSK +05 EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c4v.j ik0 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6", "Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6", "Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|64e4", "Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1cM0 16M0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1C00 LA0 1zc0 Oo0 1C00 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|39e5", "Europe/Samara|LMT +03 +04 +05|-3k.k -30 -40 -50|0123232323232323232121232323232323232323232323232323232323212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2y10 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|12e5", "Europe/Saratov|LMT +03 +04 +05|-34.i -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 5810", "Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4", "Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|15e5", "Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e4", "Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4", "Europe/Ulyanovsk|LMT +03 +04 +05 +02|-3d.A -30 -40 -50 -20|01232323232323232321214121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0", "Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e4", "Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1a00 1cM0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|18e5", "Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646473737373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Europe/Volgograd|LMT +03 +04 +05|-2V.E -30 -40 -50|01232323232323232121212121212121212121212121212121212121212121|-21IqV.E psLV.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5", "Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5", "Europe/Zaporozhye|+0220 EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|77e4", "HST|HST|a0|0|", "Indian/Chagos|LMT +05 +06|-4N.E -50 -60|012|-2xosN.E 3AGLN.E|30e2", "Indian/Cocos|+0630|-6u|0||596", "Indian/Kerguelen|-00 +05|0 -50|01|-MG00|130", "Indian/Mahe|LMT +04|-3F.M -40|01|-2yO3F.M|79e3", "Indian/Maldives|MMT +05|-4S -50|01|-olgS|35e4", "Indian/Mauritius|LMT +04 +05|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0|15e4", "Indian/Reunion|LMT +04|-3F.Q -40|01|-2mDDF.Q|84e4", "Pacific/Kwajalein|+11 -12 +12|-b0 c0 -c0|012|-AX0 W9X0|14e3", "MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "MST|MST|70|0|", "MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Pacific/Chatham|+1215 +1245 +1345|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600", "PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Pacific/Apia|LMT -1130 -11 -10 +14 +13|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3", "Pacific/Bougainville|+10 +09 +11|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0|18e4", "Pacific/Efate|LMT +11 +12|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3", "Pacific/Enderbury|-12 -11 +13|c0 b0 -d0|012|nIc0 B8n0|1", "Pacific/Fakaofo|-11 +13|b0 -d0|01|1Gfn0|483", "Pacific/Fiji|LMT +12 +13|-bT.I -c0 -d0|0121212121212121212121212121212121212121212121212121212121212121|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0|88e4", "Pacific/Galapagos|LMT -05 -06|5W.o 50 60|01212|-1yVS1.A 2dTz1.A gNd0 rz0|25e3", "Pacific/Gambier|LMT -09|8X.M 90|01|-2jof0.c|125", "Pacific/Guadalcanal|LMT +11|-aD.M -b0|01|-2joyD.M|11e4", "Pacific/Guam|GST ChST|-a0 -a0|01|1fpq0|17e4", "Pacific/Honolulu|HST HDT HST|au 9u a0|010102|-1thLu 8x0 lef0 8Pz0 46p0|37e4", "Pacific/Kiritimati|-1040 -10 +14|aE a0 -e0|012|nIaE B8nk|51e2", "Pacific/Kosrae|+11 +12|-b0 -c0|010|-AX0 1bdz0|66e2", "Pacific/Majuro|+11 +12|-b0 -c0|01|-AX0|28e3", "Pacific/Marquesas|LMT -0930|9i 9u|01|-2joeG|86e2", "Pacific/Pago_Pago|LMT SST|bm.M b0|01|-2nDMB.c|37e2", "Pacific/Nauru|LMT +1130 +09 +12|-b7.E -bu -90 -c0|01213|-1Xdn7.E PvzB.E 5RCu 1ouJu|10e3", "Pacific/Niue|-1120 -1130 -11|bk bu b0|012|-KfME 17y0a|12e2", "Pacific/Norfolk|+1112 +1130 +1230 +11|-bc -bu -cu -b0|01213|-Kgbc W01G On0 1COp0|25e4", "Pacific/Noumea|LMT +11 +12|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0|98e3", "Pacific/Pitcairn|-0830 -08|8u 80|01|18Vku|56", "Pacific/Rarotonga|-1030 -0930 -10|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3", "Pacific/Tahiti|LMT -10|9W.g a0|01|-2joe1.I|18e4", "Pacific/Tongatapu|+1220 +13 +14|-ck -d0 -e0|0121212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0 zWN0 s00|75e3", "WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00" ],
        links: [ "Africa/Abidjan|Africa/Bamako", "Africa/Abidjan|Africa/Banjul", "Africa/Abidjan|Africa/Conakry", "Africa/Abidjan|Africa/Dakar", "Africa/Abidjan|Africa/Freetown", "Africa/Abidjan|Africa/Lome", "Africa/Abidjan|Africa/Nouakchott", "Africa/Abidjan|Africa/Ouagadougou", "Africa/Abidjan|Africa/Sao_Tome", "Africa/Abidjan|Africa/Timbuktu", "Africa/Abidjan|Atlantic/St_Helena", "Africa/Cairo|Egypt", "Africa/Johannesburg|Africa/Maseru", "Africa/Johannesburg|Africa/Mbabane", "Africa/Lagos|Africa/Bangui", "Africa/Lagos|Africa/Brazzaville", "Africa/Lagos|Africa/Douala", "Africa/Lagos|Africa/Kinshasa", "Africa/Lagos|Africa/Libreville", "Africa/Lagos|Africa/Luanda", "Africa/Lagos|Africa/Malabo", "Africa/Lagos|Africa/Niamey", "Africa/Lagos|Africa/Porto-Novo", "Africa/Maputo|Africa/Blantyre", "Africa/Maputo|Africa/Bujumbura", "Africa/Maputo|Africa/Gaborone", "Africa/Maputo|Africa/Harare", "Africa/Maputo|Africa/Kigali", "Africa/Maputo|Africa/Lubumbashi", "Africa/Maputo|Africa/Lusaka", "Africa/Nairobi|Africa/Addis_Ababa", "Africa/Nairobi|Africa/Asmara", "Africa/Nairobi|Africa/Asmera", "Africa/Nairobi|Africa/Dar_es_Salaam", "Africa/Nairobi|Africa/Djibouti", "Africa/Nairobi|Africa/Kampala", "Africa/Nairobi|Africa/Mogadishu", "Africa/Nairobi|Indian/Antananarivo", "Africa/Nairobi|Indian/Comoro", "Africa/Nairobi|Indian/Mayotte", "Africa/Tripoli|Libya", "America/Adak|America/Atka", "America/Adak|US/Aleutian", "America/Anchorage|US/Alaska", "America/Argentina/Buenos_Aires|America/Buenos_Aires", "America/Argentina/Catamarca|America/Argentina/ComodRivadavia", "America/Argentina/Catamarca|America/Catamarca", "America/Argentina/Cordoba|America/Cordoba", "America/Argentina/Cordoba|America/Rosario", "America/Argentina/Jujuy|America/Jujuy", "America/Argentina/Mendoza|America/Mendoza", "America/Atikokan|America/Coral_Harbour", "America/Chicago|US/Central", "America/Curacao|America/Aruba", "America/Curacao|America/Kralendijk", "America/Curacao|America/Lower_Princes", "America/Denver|America/Shiprock", "America/Denver|Navajo", "America/Denver|US/Mountain", "America/Detroit|US/Michigan", "America/Edmonton|Canada/Mountain", "America/Fort_Wayne|America/Indiana/Indianapolis", "America/Fort_Wayne|America/Indianapolis", "America/Fort_Wayne|US/East-Indiana", "America/Halifax|Canada/Atlantic", "America/Havana|Cuba", "America/Indiana/Knox|America/Knox_IN", "America/Indiana/Knox|US/Indiana-Starke", "America/Jamaica|Jamaica", "America/Kentucky/Louisville|America/Louisville", "America/Los_Angeles|US/Pacific", "America/Los_Angeles|US/Pacific-New", "America/Manaus|Brazil/West", "America/Mazatlan|Mexico/BajaSur", "America/Mexico_City|Mexico/General", "America/New_York|US/Eastern", "America/Noronha|Brazil/DeNoronha", "America/Panama|America/Cayman", "America/Phoenix|US/Arizona", "America/Port_of_Spain|America/Anguilla", "America/Port_of_Spain|America/Antigua", "America/Port_of_Spain|America/Dominica", "America/Port_of_Spain|America/Grenada", "America/Port_of_Spain|America/Guadeloupe", "America/Port_of_Spain|America/Marigot", "America/Port_of_Spain|America/Montserrat", "America/Port_of_Spain|America/St_Barthelemy", "America/Port_of_Spain|America/St_Kitts", "America/Port_of_Spain|America/St_Lucia", "America/Port_of_Spain|America/St_Thomas", "America/Port_of_Spain|America/St_Vincent", "America/Port_of_Spain|America/Tortola", "America/Port_of_Spain|America/Virgin", "America/Regina|Canada/Saskatchewan", "America/Rio_Branco|America/Porto_Acre", "America/Rio_Branco|Brazil/Acre", "America/Santiago|Chile/Continental", "America/Sao_Paulo|Brazil/East", "America/St_Johns|Canada/Newfoundland", "America/Tijuana|America/Ensenada", "America/Tijuana|America/Santa_Isabel", "America/Tijuana|Mexico/BajaNorte", "America/Toronto|America/Montreal", "America/Toronto|Canada/Eastern", "America/Vancouver|Canada/Pacific", "America/Whitehorse|Canada/Yukon", "America/Winnipeg|Canada/Central", "Asia/Ashgabat|Asia/Ashkhabad", "Asia/Bangkok|Asia/Phnom_Penh", "Asia/Bangkok|Asia/Vientiane", "Asia/Dhaka|Asia/Dacca", "Asia/Dubai|Asia/Muscat", "Asia/Ho_Chi_Minh|Asia/Saigon", "Asia/Hong_Kong|Hongkong", "Asia/Jerusalem|Asia/Tel_Aviv", "Asia/Jerusalem|Israel", "Asia/Kathmandu|Asia/Katmandu", "Asia/Kolkata|Asia/Calcutta", "Asia/Kuala_Lumpur|Asia/Singapore", "Asia/Kuala_Lumpur|Singapore", "Asia/Macau|Asia/Macao", "Asia/Makassar|Asia/Ujung_Pandang", "Asia/Nicosia|Europe/Nicosia", "Asia/Qatar|Asia/Bahrain", "Asia/Rangoon|Asia/Yangon", "Asia/Riyadh|Asia/Aden", "Asia/Riyadh|Asia/Kuwait", "Asia/Seoul|ROK", "Asia/Shanghai|Asia/Chongqing", "Asia/Shanghai|Asia/Chungking", "Asia/Shanghai|Asia/Harbin", "Asia/Shanghai|PRC", "Asia/Taipei|ROC", "Asia/Tehran|Iran", "Asia/Thimphu|Asia/Thimbu", "Asia/Tokyo|Japan", "Asia/Ulaanbaatar|Asia/Ulan_Bator", "Asia/Urumqi|Asia/Kashgar", "Atlantic/Faroe|Atlantic/Faeroe", "Atlantic/Reykjavik|Iceland", "Atlantic/South_Georgia|Etc/GMT+2", "Australia/Adelaide|Australia/South", "Australia/Brisbane|Australia/Queensland", "Australia/Broken_Hill|Australia/Yancowinna", "Australia/Darwin|Australia/North", "Australia/Hobart|Australia/Tasmania", "Australia/Lord_Howe|Australia/LHI", "Australia/Melbourne|Australia/Victoria", "Australia/Perth|Australia/West", "Australia/Sydney|Australia/ACT", "Australia/Sydney|Australia/Canberra", "Australia/Sydney|Australia/NSW", "Etc/GMT+0|Etc/GMT", "Etc/GMT+0|Etc/GMT-0", "Etc/GMT+0|Etc/GMT0", "Etc/GMT+0|Etc/Greenwich", "Etc/GMT+0|GMT", "Etc/GMT+0|GMT+0", "Etc/GMT+0|GMT-0", "Etc/GMT+0|GMT0", "Etc/GMT+0|Greenwich", "Etc/UCT|UCT", "Etc/UTC|Etc/Universal", "Etc/UTC|Etc/Zulu", "Etc/UTC|UTC", "Etc/UTC|Universal", "Etc/UTC|Zulu", "Europe/Belgrade|Europe/Ljubljana", "Europe/Belgrade|Europe/Podgorica", "Europe/Belgrade|Europe/Sarajevo", "Europe/Belgrade|Europe/Skopje", "Europe/Belgrade|Europe/Zagreb", "Europe/Chisinau|Europe/Tiraspol", "Europe/Dublin|Eire", "Europe/Helsinki|Europe/Mariehamn", "Europe/Istanbul|Asia/Istanbul", "Europe/Istanbul|Turkey", "Europe/Lisbon|Portugal", "Europe/London|Europe/Belfast", "Europe/London|Europe/Guernsey", "Europe/London|Europe/Isle_of_Man", "Europe/London|Europe/Jersey", "Europe/London|GB", "Europe/London|GB-Eire", "Europe/Moscow|W-SU", "Europe/Oslo|Arctic/Longyearbyen", "Europe/Oslo|Atlantic/Jan_Mayen", "Europe/Prague|Europe/Bratislava", "Europe/Rome|Europe/San_Marino", "Europe/Rome|Europe/Vatican", "Europe/Warsaw|Poland", "Europe/Zurich|Europe/Busingen", "Europe/Zurich|Europe/Vaduz", "Indian/Christmas|Etc/GMT-7", "Pacific/Auckland|Antarctica/McMurdo", "Pacific/Auckland|Antarctica/South_Pole", "Pacific/Auckland|NZ", "Pacific/Chatham|NZ-CHAT", "Pacific/Easter|Chile/EasterIsland", "Pacific/Guam|Pacific/Saipan", "Pacific/Honolulu|Pacific/Johnston", "Pacific/Honolulu|US/Hawaii", "Pacific/Kwajalein|Kwajalein", "Pacific/Pago_Pago|Pacific/Midway", "Pacific/Pago_Pago|Pacific/Samoa", "Pacific/Pago_Pago|US/Samoa", "Pacific/Palau|Etc/GMT-9", "Pacific/Pohnpei|Etc/GMT-11", "Pacific/Pohnpei|Pacific/Ponape", "Pacific/Port_Moresby|Etc/GMT-10", "Pacific/Port_Moresby|Pacific/Chuuk", "Pacific/Port_Moresby|Pacific/Truk", "Pacific/Port_Moresby|Pacific/Yap", "Pacific/Tarawa|Etc/GMT-12", "Pacific/Tarawa|Pacific/Funafuti", "Pacific/Tarawa|Pacific/Wake", "Pacific/Tarawa|Pacific/Wallis" ]
    }), n;
}), function(t) {
    if (t(window).outerWidth() < 992) {
        if (!t.fn.viewportChecker) return console.error("MISSING DEPENDANCY: The component 'animate-on-scroll' requires the library 'jquery-viewport-checker'. Please update packages.json to include this library.");
        t("[data-pnp-animation-delay]").each(function() {
            t(this).css("animation-delay", t(this).data("pnp-animation-delay"));
        }), t("[data-pnp-animation-duration]").each(function() {
            t(this).css("animation-duration", t(this).data("pnp-animation-duration"));
        }), t("[data-pnp-animate]").each(function() {
            t(this).addClass("aos-transparent").viewportChecker({
                classToAdd: "aos-not-transparent animated " + t(this).data("pnp-animate"),
                offset: "10%",
                invertBottomOffset: !0
            });
        });
    }
}(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

if (!function() {
    "use strict";
    var t = jQuery.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || 2 < t[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
}(), function(c) {
    "use strict";
    function l(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, 
        this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e);
    }
    l.VERSION = "3.3.6", l.TRANSITION_DURATION = 150, l.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, l.prototype.init = function(t, e, i) {
        if (this.enabled = !0, this.type = t, this.$element = c(e), this.options = this.getOptions(i), 
        this.$viewport = this.options.viewport && c(c.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), 
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), n = o.length; n--; ) {
            var s, r = o[n];
            "click" == r ? this.$element.on("click." + this.type, this.options.selector, c.proxy(this.toggle, this)) : "manual" != r && (s = "hover" == r ? "mouseenter" : "focusin", 
            r = "hover" == r ? "mouseleave" : "focusout", this.$element.on(s + "." + this.type, this.options.selector, c.proxy(this.enter, this)), 
            this.$element.on(r + "." + this.type, this.options.selector, c.proxy(this.leave, this)));
        }
        this.options.selector ? this._options = c.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    }, l.prototype.getDefaults = function() {
        return l.DEFAULTS;
    }, l.prototype.getOptions = function(t) {
        return (t = c.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t;
    }, l.prototype.getDelegateOptions = function() {
        var i = {}, o = this.getDefaults();
        return this._options && c.each(this._options, function(t, e) {
            o[t] != e && (i[t] = e);
        }), i;
    }, l.prototype.enter = function(t) {
        var e = t instanceof this.constructor ? t : c(t.currentTarget).data("bs." + this.type);
        if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), 
        c(t.currentTarget).data("bs." + this.type, e)), t instanceof c.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0), 
        e.tip().hasClass("in") || "in" == e.hoverState) e.hoverState = "in"; else {
            if (clearTimeout(e.timeout), e.hoverState = "in", !e.options.delay || !e.options.delay.show) return e.show();
            e.timeout = setTimeout(function() {
                "in" == e.hoverState && e.show();
            }, e.options.delay.show);
        }
    }, l.prototype.isInStateTrue = function() {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1;
    }, l.prototype.leave = function(t) {
        var e = t instanceof this.constructor ? t : c(t.currentTarget).data("bs." + this.type);
        if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), 
        c(t.currentTarget).data("bs." + this.type, e)), t instanceof c.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1), 
        !e.isInStateTrue()) {
            if (clearTimeout(e.timeout), e.hoverState = "out", !e.options.delay || !e.options.delay.hide) return e.hide();
            e.timeout = setTimeout(function() {
                "out" == e.hoverState && e.hide();
            }, e.options.delay.hide);
        }
    }, l.prototype.show = function() {
        var t = c.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var e = c.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !e) return;
            var i = this, o = this.tip(), n = this.getUID(this.type);
            this.setContent(), o.attr("id", n), this.$element.attr("aria-describedby", n), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement, r = /\s?auto?\s?/i, a = r.test(s);
            a && (s = s.replace(r, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), 
            this.$element.trigger("inserted.bs." + this.type);
            t = this.getPosition(), e = o[0].offsetWidth, n = o[0].offsetHeight;
            a && (r = s, a = this.getPosition(this.$viewport), s = "bottom" == s && t.bottom + n > a.bottom ? "top" : "top" == s && t.top - n < a.top ? "bottom" : "right" == s && t.right + e > a.width ? "left" : "left" == s && t.left - e < a.left ? "right" : s, 
            o.removeClass(r).addClass(s));
            n = this.getCalculatedOffset(s, t, e, n);
            this.applyPlacement(n, s);
            s = function() {
                var t = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i);
            };
            c.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", s).emulateTransitionEnd(l.TRANSITION_DURATION) : s();
        }
    }, l.prototype.applyPlacement = function(t, e) {
        var i = this.tip(), o = i[0].offsetWidth, n = i[0].offsetHeight, s = parseInt(i.css("margin-top"), 10), r = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(r) && (r = 0), t.top += s, t.left += r, c.offset.setOffset(i[0], c.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                });
            }
        }, t), 0), i.addClass("in");
        var a = i[0].offsetWidth, s = i[0].offsetHeight;
        "top" == e && s != n && (t.top = t.top + n - s);
        r = this.getViewportAdjustedDelta(e, t, a, s);
        r.left ? t.left += r.left : t.top += r.top;
        e = /top|bottom/.test(e), n = e ? 2 * r.left - o + a : 2 * r.top - n + s, s = e ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(n, i[0][s], e);
    }, l.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "");
    }, l.prototype.setContent = function() {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
    }, l.prototype.hide = function(t) {
        var e = this, i = c(this.$tip), o = c.Event("hide.bs." + this.type);
        function n() {
            "in" != e.hoverState && i.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), 
            t && t();
        }
        if (this.$element.trigger(o), !o.isDefaultPrevented()) return i.removeClass("in"), 
        c.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", n).emulateTransitionEnd(l.TRANSITION_DURATION) : n(), 
        this.hoverState = null, this;
    }, l.prototype.fixTitle = function() {
        var t = this.$element;
        !t.attr("title") && "string" == typeof t.attr("data-original-title") || t.attr("data-original-title", t.attr("title") || "").attr("title", "");
    }, l.prototype.hasContent = function() {
        return this.getTitle();
    }, l.prototype.getPosition = function(t) {
        var e = (t = t || this.$element)[0], i = "BODY" == e.tagName, o = e.getBoundingClientRect();
        null == o.width && (o = c.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        e = i ? {
            top: 0,
            left: 0
        } : t.offset(), t = {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
        }, i = i ? {
            width: c(window).width(),
            height: c(window).height()
        } : null;
        return c.extend({}, o, t, i, e);
    }, l.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        };
    }, l.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s, r = this.options.viewport && this.options.viewport.padding || 0, a = this.getPosition(this.$viewport);
        return /right|left/.test(t) ? (t = e.top - r - a.scroll, s = e.top + r - a.scroll + o, 
        t < a.top ? n.top = a.top - t : s > a.top + a.height && (n.top = a.top + a.height - s)) : (s = e.left - r, 
        i = e.left + r + i, s < a.left ? n.left = a.left - s : i > a.right && (n.left = a.left + a.width - i)), 
        n;
    }, l.prototype.getTitle = function() {
        var t = this.$element, e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title);
    }, l.prototype.getUID = function(t) {
        for (;t += ~~(1e6 * Math.random()), document.getElementById(t); ) ;
        return t;
    }, l.prototype.tip = function() {
        if (!this.$tip && (this.$tip = c(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip;
    }, l.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, l.prototype.enable = function() {
        this.enabled = !0;
    }, l.prototype.disable = function() {
        this.enabled = !1;
    }, l.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    }, l.prototype.toggle = function(t) {
        var e = this;
        t && ((e = c(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), 
        c(t.currentTarget).data("bs." + this.type, e))), t ? (e.inState.click = !e.inState.click, 
        e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e);
    }, l.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), 
            t.$tip = null, t.$arrow = null, t.$viewport = null;
        });
    };
    var t = c.fn.tooltip;
    c.fn.tooltip = function(o) {
        return this.each(function() {
            var t = c(this), e = t.data("bs.tooltip"), i = "object" == typeof o && o;
            !e && /destroy|hide/.test(o) || (e || t.data("bs.tooltip", e = new l(this, i)), 
            "string" == typeof o && e[o]());
        });
    }, c.fn.tooltip.Constructor = l, c.fn.tooltip.noConflict = function() {
        return c.fn.tooltip = t, this;
    };
}(jQuery), function(r) {
    function i(t) {
        var e = null, i = null, o = r(t), n = r(".dropdown-menu", t), s = o.parents("ul.nav");
        return 0 < s.size() && (e = s.data("dropdown-in") || null, i = s.data("dropdown-out") || null), 
        {
            target: t,
            dropdown: o,
            dropdownMenu: n,
            effectIn: n.data("dropdown-in") || e,
            effectOut: n.data("dropdown-out") || i
        };
    }
    function o(t, e) {
        e && (t.dropdown.addClass("dropdown-animating"), t.dropdownMenu.addClass("animated"), 
        t.dropdownMenu.addClass(e));
    }
    function n(t, e) {
        t.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
            t.dropdown.removeClass("dropdown-animating"), t.dropdownMenu.removeClass("animated"), 
            t.dropdownMenu.removeClass(t.effectIn), t.dropdownMenu.removeClass(t.effectOut), 
            "function" == typeof e && e();
        });
    }
    r(".dropdown, .dropup").on({
        "show.bs.dropdown": function() {
            var t = i(this);
            o(t, t.effectIn), t.dropdownMenu.hasClass("-no-backdrop") || (r("body").append('<div class="modal-backdrop -dropdown fade"></div>'), 
            setTimeout(function() {
                r(".modal-backdrop").addClass("in");
            }, 50), $body.addClass("-dropdown-open")), t.dropdownMenu.closest(".component-anchor-point-bar").length && $body.addClass("-sub-nav-dropdown");
        },
        "shown.bs.dropdown": function() {
            var t = i(this);
            t.effectIn && t.effectOut && n(t, function() {});
        },
        "hide.bs.dropdown": function(t) {
            var e = i(this);
            e.effectOut && (t.preventDefault(), o(e, e.effectOut), n(e, function() {
                e.dropdown.removeClass("open");
            })), r(".modal-backdrop").removeClass("in").addClass("-remove-me"), setTimeout(function() {
                r(".modal-backdrop.-remove-me").remove();
            }, 700), $body.removeClass("-dropdown-open").removeClass("-sub-nav-dropdown");
        }
    });
}(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

if (!function() {
    "use strict";
    var t = jQuery.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || 2 < t[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
}(), function(n) {
    "use strict";
    function o(t) {
        n(t).on("click.bs.dropdown", this.toggle);
    }
    var s = '[data-toggle="dropdown"]';
    function r(t) {
        var e = t.attr("data-target"), e = (e = e || (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, "")) && n(e);
        return e && e.length ? e : t.parent();
    }
    function a(o) {
        o && 3 === o.which || (n(".dropdown-backdrop").remove(), n(s).each(function() {
            var t = n(this), e = r(t), i = {
                relatedTarget: this
            };
            e.hasClass("open") && (o && "click" == o.type && /input|textarea/i.test(o.target.tagName) && n.contains(e[0], o.target) || (e.trigger(o = n.Event("hide.bs.dropdown", i)), 
            o.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger(n.Event("hidden.bs.dropdown", i)))));
        }));
    }
    o.VERSION = "3.3.6", o.prototype.toggle = function(t) {
        var e = n(this);
        if (!e.is(".disabled, :disabled")) {
            var i = r(e), o = i.hasClass("open");
            if (a(), !o) {
                "ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", a);
                o = {
                    relatedTarget: this
                };
                if (i.trigger(t = n.Event("show.bs.dropdown", o)), t.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", o));
            }
            return !1;
        }
    }, o.prototype.keydown = function(t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var e = n(this);
            if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
                var i = r(e), o = i.hasClass("open");
                if (!o && 27 != t.which || o && 27 == t.which) return 27 == t.which && i.find(s).trigger("focus"), 
                e.trigger("click");
                e = i.find(".dropdown-menu li:not(.disabled):visible a");
                e.length && (i = e.index(t.target), 38 == t.which && 0 < i && i--, 40 == t.which && i < e.length - 1 && i++, 
                ~i || (i = 0), e.eq(i).trigger("focus"));
            }
        }
    };
    var t = n.fn.dropdown;
    n.fn.dropdown = function(i) {
        return this.each(function() {
            var t = n(this), e = t.data("bs.dropdown");
            e || t.data("bs.dropdown", e = new o(this)), "string" == typeof i && e[i].call(t);
        });
    }, n.fn.dropdown.Constructor = o, n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = t, this;
    }, n(document).on("click.bs.dropdown.data-api", a).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation();
    }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown);
}(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

if (!function() {
    "use strict";
    var t = jQuery.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || 2 < t[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
}(), function(s) {
    "use strict";
    function r(t, e) {
        this.options = e, this.$body = s(document.body), this.$element = s(t), this.$dialog = this.$element.find(".modal-dialog"), 
        this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, 
        this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, s.proxy(function() {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    }
    function n(o, n) {
        return this.each(function() {
            var t = s(this), e = t.data("bs.modal"), i = s.extend({}, r.DEFAULTS, t.data(), "object" == typeof o && o);
            e || t.data("bs.modal", e = new r(this, i)), "string" == typeof o ? e[o](n) : i.show && e.show(n);
        });
    }
    r.VERSION = "3.3.6", r.TRANSITION_DURATION = 300, r.BACKDROP_TRANSITION_DURATION = 150, 
    r.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, r.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t);
    }, r.prototype.show = function(i) {
        var o = this, t = s.Event("show.bs.modal", {
            relatedTarget: i
        });
        this.$element.trigger(t), this.isShown || t.isDefaultPrevented() || (this.isShown = !0, 
        this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), 
        this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', s.proxy(this.hide, this)), 
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            o.$element.one("mouseup.dismiss.bs.modal", function(t) {
                s(t.target).is(o.$element) && (o.ignoreBackdropClick = !0);
            });
        }), this.backdrop(function() {
            var t = s.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), 
            o.adjustDialog(), t && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var e = s.Event("shown.bs.modal", {
                relatedTarget: i
            });
            t ? o.$dialog.one("bsTransitionEnd", function() {
                o.$element.trigger("focus").trigger(e);
            }).emulateTransitionEnd(r.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(e);
        }));
    }, r.prototype.hide = function(t) {
        t && t.preventDefault(), t = s.Event("hide.bs.modal"), this.$element.trigger(t), 
        this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), 
        s(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), 
        this.$dialog.off("mousedown.dismiss.bs.modal"), s.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", s.proxy(this.hideModal, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : this.hideModal());
    }, r.prototype.enforceFocus = function() {
        s(document).off("focusin.bs.modal").on("focusin.bs.modal", s.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus");
        }, this));
    }, r.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", s.proxy(function(t) {
            27 == t.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
    }, r.prototype.resize = function() {
        this.isShown ? s(window).on("resize.bs.modal", s.proxy(this.handleUpdate, this)) : s(window).off("resize.bs.modal");
    }, r.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal");
        });
    }, r.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, r.prototype.backdrop = function(t) {
        var e = this, i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = s.support.transition && i;
            if (this.$backdrop = s(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), 
            this.$element.on("click.dismiss.bs.modal", s.proxy(function(t) {
                this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide());
            }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(r.BACKDROP_TRANSITION_DURATION) : t();
        } else {
            !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), o = function() {
                e.removeBackdrop(), t && t();
            }, s.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(r.BACKDROP_TRANSITION_DURATION) : o()) : t && t();
        }
    }, r.prototype.handleUpdate = function() {
        this.adjustDialog();
    }, r.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        });
    }, r.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        });
    }, r.prototype.checkScrollbar = function() {
        var t, e = window.innerWidth;
        e || (e = (t = document.documentElement.getBoundingClientRect()).right - Math.abs(t.left)), 
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar();
    }, r.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth);
    }, r.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
    }, r.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e;
    };
    var t = s.fn.modal;
    s.fn.modal = n, s.fn.modal.Constructor = r, s.fn.modal.noConflict = function() {
        return s.fn.modal = t, this;
    }, s(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var e = s(this), i = e.attr("href"), o = s(e.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")), i = o.data("bs.modal") ? "toggle" : s.extend({
            remote: !/#/.test(i) && i
        }, o.data(), e.data());
        e.is("a") && t.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                e.is(":visible") && e.trigger("focus");
            });
        }), n.call(o, i, this);
    });
}(jQuery), function(o) {
    "use strict";
    o.fn.emulateTransitionEnd = function(t) {
        var e = !1, i = this;
        o(this).one("bsTransitionEnd", function() {
            e = !0;
        });
        return setTimeout(function() {
            e || o(i).trigger(o.support.transition.end);
        }, t), this;
    }, o(function() {
        o.support.transition = function() {
            var t, e = document.createElement("bootstrap"), i = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (t in i) if (void 0 !== e.style[t]) return {
                end: i[t]
            };
            return !1;
        }(), o.support.transition && (o.event.special.bsTransitionEnd = {
            bindType: o.support.transition.end,
            delegateType: o.support.transition.end,
            handle: function(t) {
                if (o(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
            }
        });
    });
}(jQuery), function(n) {
    "use strict";
    function s(t, e) {
        this.init("popover", t, e);
    }
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    s.VERSION = "3.3.6", s.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), ((s.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype)).constructor = s).prototype.getDefaults = function() {
        return s.DEFAULTS;
    }, s.prototype.setContent = function() {
        var t = this.tip(), e = this.getTitle(), i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), 
        t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide();
    }, s.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    }, s.prototype.getContent = function() {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
    }, s.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };
    var t = n.fn.popover;
    n.fn.popover = function(o) {
        return this.each(function() {
            var t = n(this), e = t.data("bs.popover"), i = "object" == typeof o && o;
            !e && /destroy|hide/.test(o) || (e || t.data("bs.popover", e = new s(this, i)), 
            "string" == typeof o && e[o]());
        });
    }, n.fn.popover.Constructor = s, n.fn.popover.noConflict = function() {
        return n.fn.popover = t, this;
    };
}(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

!function() {
    "use strict";
    var t = jQuery.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || 3 < t[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(), function(n) {
    "use strict";
    function s(t, e) {
        this.$body = n(document.body), this.$scrollElement = n(t).is(document.body) ? n(window) : n(t), 
        this.options = n.extend({}, s.DEFAULTS, e), this.selector = (this.options.target || "") + " .nav li > a", 
        this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, 
        this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this)), this.refresh(), 
        this.process();
    }
    function e(o) {
        return this.each(function() {
            var t = n(this), e = t.data("bs.scrollspy"), i = "object" == typeof o && o;
            e || t.data("bs.scrollspy", e = new s(this, i)), "string" == typeof o && e[o]();
        });
    }
    s.VERSION = "3.3.7", s.DEFAULTS = {
        offset: 10
    }, s.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    }, s.prototype.refresh = function() {
        var t = this, i = "offset", o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), 
        n.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), 
        this.$body.find(this.selector).map(function() {
            var t = n(this), e = t.data("target") || t.attr("href"), t = /^#./.test(e) && n(e);
            return t && t.length && t.is(":visible") ? [ [ t[i]().top + o, e ] ] : null;
        }).sort(function(t, e) {
            return t[0] - e[0];
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1]);
        });
    }, s.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(), o = this.options.offset + i - this.$scrollElement.height(), n = this.offsets, s = this.targets, r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), o <= e) return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--; ) r != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t]);
    }, s.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        t = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', 
        t = n(t).parents("li").addClass("active");
        t.parent(".dropdown-menu").length && (t = t.closest("li.dropdown").addClass("active")), 
        t.trigger("activate.bs.scrollspy");
    }, s.prototype.clear = function() {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };
    var t = n.fn.scrollspy;
    n.fn.scrollspy = e, n.fn.scrollspy.Constructor = s, n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = t, this;
    }, n(window).on("load.bs.scrollspy.data-api", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            e.call(t, t.data());
        });
    });
}(jQuery), function(t) {
    "use strict";
    var f = "undefined" == typeof window && "undefined" != typeof global && "function" == typeof require, M = f ? t.require : null, b = {
        protocol: "protocol",
        host: "hostname",
        port: "port",
        path: "pathname",
        query: "search",
        hash: "hash"
    }, m = {
        ftp: 21,
        gopher: 70,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
    };
    function s(t) {
        return encodeURIComponent(t).replace(/'/g, "%27");
    }
    function g(t) {
        return (t = (t = (t = t.replace(/\+/g, " ")).replace(/%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi, function(t, e, i, o) {
            e = parseInt(e, 16) - 224, i = parseInt(i, 16) - 128;
            if (0 == e && i < 32) return t;
            o = (e << 12) + (i << 6) + (parseInt(o, 16) - 128);
            return 65535 < o ? t : String.fromCharCode(o);
        })).replace(/%([cd][0-9a-f])%([89ab][0-9a-f])/gi, function(t, e, i) {
            e = parseInt(e, 16) - 192;
            if (e < 2) return t;
            i = parseInt(i, 16) - 128;
            return String.fromCharCode((e << 6) + i);
        })).replace(/%([0-7][0-9a-f])/gi, function(t, e) {
            return String.fromCharCode(parseInt(e, 16));
        });
    }
    function z(t) {
        for (var e = /([^=&]+)(=([^&]*))?/g; o = e.exec(t); ) {
            var i = decodeURIComponent(o[1].replace(/\+/g, " ")), o = o[3] ? g(o[3]) : "";
            void 0 !== this[i] && null !== this[i] ? (this[i] instanceof Array || (this[i] = [ this[i] ]), 
            this[i].push(o)) : this[i] = o;
        }
    }
    function A(t, e) {
        !function(t, e, i) {
            var o, n, s = f ? "file://" + (process.platform.match(/^win/i) ? "/" : "") + M("fs").realpathSync(".") : document.location.href;
            e = e || s, f ? o = M("url").parse(e) : (o = document.createElement("a")).href = e;
            var r, a = (c = {
                path: !0,
                query: !0,
                hash: !0
            }, (r = e) && /^[a-z]+:/.test(r) && (c.protocol = !0, c.host = !0, /[-a-z0-9]+(\.[-a-z0-9])*:\d+/i.test(r) && (c.port = !0), 
            /\/\/(.*?)(?::(.*?))?@/.test(r) && (c.user = !0, c.pass = !0)), c), c = e.match(/\/\/(.*?)(?::(.*?))?@/) || [];
            for (n in b) a[n] ? t[n] = o[b[n]] || "" : t[n] = "";
            if (t.protocol = t.protocol.replace(/:$/, ""), t.query = t.query.replace(/^\?/, ""), 
            t.hash = g(t.hash.replace(/^#/, "")), t.user = g(c[1] || ""), t.pass = g(c[2] || ""), 
            t.port = m[t.protocol] == t.port || 0 == t.port ? "" : t.port, !a.protocol && /[^/#?]/.test(e.charAt(0)) && (t.path = e.split("?")[0].split("#")[0]), 
            !a.protocol && i) {
                var l = new A(s.match(/(.*\/)/)[0]), d = l.path.split("/"), p = t.path.split("/"), u = [ "protocol", "user", "pass", "host", "port" ], h = u.length;
                for (d.pop(), n = 0; n < h; n++) t[u[n]] = l[u[n]];
                for (;".." === p[0]; ) d.pop(), p.shift();
                t.path = ("/" !== e.charAt(0) ? d.join("/") : "") + "/" + p.join("/");
            }
            t.path = t.path.replace(/^\/{2,}/, "/"), t.paths(("/" === t.path.charAt(0) ? t.path.slice(1) : t.path).split("/")), 
            t.query = new z(t.query);
        }(this, t, !e);
    }
    z.prototype.toString = function() {
        var t, e, i = "", o = s;
        for (t in this) if (!(this[t] instanceof Function || null === this[t])) if (this[t] instanceof Array) {
            var n = this[t].length;
            if (n) for (e = 0; e < n; e++) i += i ? "&" : "", i += o(t) + "=" + o(this[t][e]); else i += (i ? "&" : "") + o(t) + "=";
        } else i += i ? "&" : "", i += o(t) + "=" + o(this[t]);
        return i;
    }, A.prototype.clearQuery = function() {
        for (var t in this.query) this.query[t] instanceof Function || delete this.query[t];
        return this;
    }, A.prototype.queryLength = function() {
        var t, e = 0;
        for (t in this) this[t] instanceof Function || e++;
        return e;
    }, A.prototype.isEmptyQuery = function() {
        return 0 === this.queryLength();
    }, A.prototype.paths = function(t) {
        var e, i = "", o = 0;
        if (t && t.length && t + "" !== t) {
            for (this.isAbsolute() && (i = "/"), e = t.length; o < e; o++) t[o] = !o && t[o].match(/^\w:$/) ? t[o] : s(t[o]);
            this.path = i + t.join("/");
        }
        for (o = 0, e = (t = ("/" === this.path.charAt(0) ? this.path.slice(1) : this.path).split("/")).length; o < e; o++) t[o] = g(t[o]);
        return t;
    }, A.prototype.encode = s, A.prototype.decode = g, A.prototype.isAbsolute = function() {
        return this.protocol || "/" === this.path.charAt(0);
    }, A.prototype.toString = function() {
        return (this.protocol && this.protocol + "://") + (this.user && s(this.user) + (this.pass && ":" + s(this.pass)) + "@") + (this.host && this.host) + (this.port && ":" + this.port) + (this.path && this.path) + (this.query.toString() && "?" + this.query) + (this.hash && "#" + s(this.hash));
    }, t[t.exports ? "exports" : "Url"] = A;
}("undefined" != typeof module && module.exports ? module : window);

var fixto = function(s, t, r) {
    var a = (n = {
        getAll: function(t) {
            return r.defaultView.getComputedStyle(t);
        },
        get: function(t, e) {
            return this.getAll(t)[e];
        },
        toFloat: function(t) {
            return parseFloat(t, 10) || 0;
        },
        getFloat: function(t, e) {
            return this.toFloat(this.get(t, e));
        },
        _getAllCurrentStyle: function(t) {
            return t.currentStyle;
        }
    }, r.documentElement.currentStyle && (n.getAll = n._getAllCurrentStyle), n), o = (e.prototype = {
        replace: function() {
            var t = this.replacer.style, e = a.getAll(this.element);
            t.width = this._width(), t.height = this._height(), t.marginTop = e.marginTop, t.marginBottom = e.marginBottom, 
            t.marginLeft = e.marginLeft, t.marginRight = e.marginRight, t.cssFloat = e.cssFloat, 
            t.styleFloat = e.styleFloat, t.position = e.position, t.top = e.top, t.right = e.right, 
            t.bottom = e.bottom, t.left = e.left, t.display = e.display;
        },
        hide: function() {
            this.replacer.style.display = "none";
        },
        _width: function() {
            return this.element.getBoundingClientRect().width + "px";
        },
        _widthOffset: function() {
            return this.element.offsetWidth + "px";
        },
        _height: function() {
            return this.element.getBoundingClientRect().height + "px";
        },
        _heightOffset: function() {
            return this.element.offsetHeight + "px";
        },
        destroy: function() {
            for (var t in s(this.replacer).remove(), this) this.hasOwnProperty(t) && (this[t] = null);
        }
    }, r.documentElement.getBoundingClientRect().width || (e.prototype._width = e.prototype._widthOffset, 
    e.prototype._height = e.prototype._heightOffset), {
        MimicNode: e,
        computedStyle: a
    });
    function e(t) {
        this.element = t, this.replacer = r.createElement("div"), this.replacer.style.visibility = "hidden", 
        this.hide(), t.parentNode.insertBefore(this.replacer, t);
    }
    function i() {
        this._vendor = null;
    }
    i.prototype = {
        _vendors: {
            webkit: {
                cssPrefix: "-webkit-",
                jsPrefix: "Webkit"
            },
            moz: {
                cssPrefix: "-moz-",
                jsPrefix: "Moz"
            },
            ms: {
                cssPrefix: "-ms-",
                jsPrefix: "ms"
            },
            opera: {
                cssPrefix: "-o-",
                jsPrefix: "O"
            }
        },
        _prefixJsProperty: function(t, e) {
            return t.jsPrefix + e[0].toUpperCase() + e.substr(1);
        },
        _prefixValue: function(t, e) {
            return t.cssPrefix + e;
        },
        _valueSupported: function(t, e, i) {
            try {
                return i.style[t] = e, i.style[t] === e;
            } catch (t) {
                return !1;
            }
        },
        propertySupported: function(t) {
            return void 0 !== r.documentElement.style[t];
        },
        getJsProperty: function(t) {
            if (this.propertySupported(t)) return t;
            if (this._vendor) return this._prefixJsProperty(this._vendor, t);
            var e, i;
            for (i in this._vendors) if (e = this._prefixJsProperty(this._vendors[i], t), this.propertySupported(e)) return this._vendor = this._vendors[i], 
            e;
            return null;
        },
        getCssValue: function(t, e) {
            var i, o, n = r.createElement("div"), s = this.getJsProperty(t);
            if (this._valueSupported(s, e, n)) return e;
            if (this._vendor && (i = this._prefixValue(this._vendor, e), this._valueSupported(s, i, n))) return i;
            for (o in this._vendors) if (i = this._prefixValue(this._vendors[o], e), this._valueSupported(s, i, n)) return this._vendor = this._vendors[o], 
            i;
            return null;
        }
    };
    var c, n = new i(), l = n.getJsProperty("transform");
    var d, p = n.getCssValue("position", "sticky"), u = n.getCssValue("position", "fixed");
    function h(t, e, i) {
        this.child = t, this._$child = s(t), this.parent = e, this.options = {
            className: "fixto-fixed",
            top: 0
        }, this._setOptions(i);
    }
    function f(t, e, i) {
        h.call(this, t, e, i), this._replacer = new o.MimicNode(t), this._ghostNode = this._replacer.replacer, 
        this._saveStyles(), this._saveViewportHeight(), this._proxied_onscroll = this._bind(this._onscroll, this), 
        this._proxied_onresize = this._bind(this._onresize, this), this.start();
    }
    function M(t, e, i) {
        h.call(this, t, e, i), this.start();
    }
    "Microsoft Internet Explorer" === navigator.appName && (d = parseFloat(navigator.appVersion.split("MSIE")[1])), 
    h.prototype = {
        _mindtop: function() {
            var t = 0;
            if (this._$mind) for (var e, i, o = 0, n = this._$mind.length; o < n; o++) {
                (i = (e = this._$mind[o]).getBoundingClientRect()).height ? t += i.height : (i = a.getAll(e), 
                t += e.offsetHeight + a.toFloat(i.marginTop) + a.toFloat(i.marginBottom));
            }
            return t;
        },
        stop: function() {
            this._stop(), this._running = !1;
        },
        start: function() {
            this._running || (this._start(), this._running = !0);
        },
        destroy: function() {
            for (var t in this.stop(), this._destroy(), this._$child.removeData("fixto-instance"), 
            this) this.hasOwnProperty(t) && (this[t] = null);
        },
        _setOptions: function(t) {
            s.extend(this.options, t), this.options.mind && (this._$mind = s(this.options.mind)), 
            this.options.zIndex && (this.child.style.zIndex = this.options.zIndex);
        },
        setOptions: function(t) {
            this._setOptions(t), this.refresh();
        },
        _stop: function() {},
        _start: function() {},
        _destroy: function() {},
        refresh: function() {}
    }, f.prototype = new h(), s.extend(f.prototype, {
        _bind: function(t, e) {
            return function() {
                return t.call(e);
            };
        },
        _toresize: 8 === d ? r.documentElement : t,
        _onscroll: function() {
            if (this._scrollTop = r.documentElement.scrollTop || r.body.scrollTop, this._parentBottom = this.parent.offsetHeight + this._fullOffset("offsetTop", this.parent), 
            !1 !== this.options.mindBottomPadding && (this._parentBottom -= a.getFloat(this.parent, "paddingBottom")), 
            this.fixed) {
                if (this._scrollTop > this._parentBottom || this._scrollTop < this._fullOffset("offsetTop", this._ghostNode) - this.options.top - this._mindtop()) return void this._unfix();
                this._adjust();
            } else {
                var t = a.getAll(this.child);
                this._scrollTop < this._parentBottom && this._scrollTop > this._fullOffset("offsetTop", this.child) - this.options.top - this._mindtop() && this._viewportHeight > this.child.offsetHeight + a.toFloat(t.marginTop) + a.toFloat(t.marginBottom) && (this._fix(), 
                this._adjust());
            }
        },
        _adjust: function() {
            var t = 0, e = this._mindtop(), i = 0, o = a.getAll(this.child), n = null;
            c && (n = this._getContext()) && (t = Math.abs(n.getBoundingClientRect().top)), 
            0 < (i = this._parentBottom - this._scrollTop - (this.child.offsetHeight + a.toFloat(o.marginBottom) + e + this.options.top)) && (i = 0), 
            this.child.style.top = i + e + t + this.options.top - a.toFloat(o.marginTop) + "px";
        },
        _fullOffset: function(t, e, i) {
            for (var o = e[t], n = e.offsetParent; null !== n && n !== i; ) o += n[t], n = n.offsetParent;
            return o;
        },
        _getContext: function() {
            for (var t, e = this.child, i = null; !i; ) {
                if ((t = e.parentNode) === r.documentElement) return null;
                if ("none" !== a.getAll(t)[l]) {
                    i = t;
                    break;
                }
                e = t;
            }
            return i;
        },
        _fix: function() {
            var t, e = this.child, i = e.style, o = a.getAll(e), n = e.getBoundingClientRect().left, s = o.width;
            this._saveStyles(), r.documentElement.currentStyle && (s = e.offsetWidth - (a.toFloat(o.paddingLeft) + a.toFloat(o.paddingRight) + a.toFloat(o.borderLeftWidth) + a.toFloat(o.borderRightWidth)) + "px"), 
            !c || (t = this._getContext()) && (n = e.getBoundingClientRect().left - t.getBoundingClientRect().left), 
            this._replacer.replace(), i.left = n - a.toFloat(o.marginLeft) + "px", i.width = s, 
            i.position = "fixed", i.top = this._mindtop() + this.options.top - a.toFloat(o.marginTop) + "px", 
            this._$child.addClass(this.options.className), this.fixed = !0;
        },
        _unfix: function() {
            var t = this.child.style;
            this._replacer.hide(), t.position = this._childOriginalPosition, t.top = this._childOriginalTop, 
            t.width = this._childOriginalWidth, t.left = this._childOriginalLeft, this._$child.removeClass(this.options.className), 
            this.fixed = !1;
        },
        _saveStyles: function() {
            var t = this.child.style;
            this._childOriginalPosition = t.position, this._childOriginalTop = t.top, this._childOriginalWidth = t.width, 
            this._childOriginalLeft = t.left;
        },
        _onresize: function() {
            this.refresh();
        },
        _saveViewportHeight: function() {
            this._viewportHeight = t.innerHeight || r.documentElement.clientHeight;
        },
        _stop: function() {
            this._unfix(), s(t).unbind("scroll", this._proxied_onscroll), s(this._toresize).unbind("resize", this._proxied_onresize);
        },
        _start: function() {
            this._onscroll(), s(t).bind("scroll", this._proxied_onscroll), s(this._toresize).bind("resize", this._proxied_onresize);
        },
        _destroy: function() {
            this._replacer.destroy();
        },
        refresh: function() {
            this._saveViewportHeight(), this._unfix(), this._onscroll();
        }
    }), M.prototype = new h(), s.extend(M.prototype, {
        _start: function() {
            var t = a.getAll(this.child);
            this._childOriginalPosition = t.position, this._childOriginalTop = t.top, this.child.style.position = p, 
            this.refresh();
        },
        _stop: function() {
            this.child.style.position = this._childOriginalPosition, this.child.style.top = this._childOriginalTop;
        },
        refresh: function() {
            this.child.style.top = this._mindtop() + this.options.top + "px";
        }
    });
    var b = d < 8 ? function() {
        return "not supported";
    } : function(t, e, i) {
        return p && !i || p && i && !1 !== i.useNativeSticky ? new M(t, e, i) : u ? (void 0 === c && (o = !1, 
        n = r.createElement("div"), s = r.createElement("div"), n.appendChild(s), n.style[l] = "translate(0)", 
        n.style.marginTop = "10px", n.style.visibility = "hidden", s.style.position = "fixed", 
        s.style.top = 0, r.body.appendChild(n), 0 < s.getBoundingClientRect().top && (o = !0), 
        r.body.removeChild(n), c = o), new f(t, e, i)) : "Neither fixed nor sticky positioning supported";
        var o, n, s;
    };
    return s.fn.fixTo = function(e, i) {
        var o = s(e), n = 0;
        return this.each(function() {
            var t = s(this).data("fixto-instance");
            t ? t[e].call(t, i) : s(this).data("fixto-instance", b(this, o[n], i)), n++;
        });
    }, {
        FixToContainer: f,
        fixTo: b,
        computedStyle: a,
        mimicNode: o
    };
}(window.jQuery, window, document);

!function(f) {
    function d(t) {
        if (t.valAttr("error-msg-container")) return f(t.valAttr("error-msg-container"));
        var e = t.parent();
        if (!e.hasClass("form-group") && !e.closest("form").hasClass("form-horizontal")) {
            t = e.closest(".form-group");
            if (t.length) return t.eq(0);
        }
        return e;
    }
    function p(t, e) {
        t.addClass(e.errorElementClass).removeClass("valid"), d(t).addClass(e.inputParentClassOnError).removeClass(e.inputParentClassOnSuccess), 
        "" !== e.borderColorOnError && t.css("border-color", e.borderColorOnError);
    }
    function u(t, e) {
        t.each(function() {
            var t = f(this);
            b(t, "", e, e.errorMessagePosition), t.removeClass("valid").removeClass(e.errorElementClass).css("border-color", ""), 
            d(t).removeClass(e.inputParentClassOnError).removeClass(e.inputParentClassOnSuccess).find("." + e.errorMessageClass).remove();
        });
    }
    function h(t, e, i, o) {
        var e = o.errorMessageTemplate.messages.replace(/\{errorTitle\}/g, e), n = [];
        f.each(i, function(t, e) {
            n.push(o.errorMessageTemplate.field.replace(/\{msg\}/g, e));
        }), e = e.replace(/\{fields\}/g, n.join("")), i = (i = o.errorMessageTemplate.container.replace(/\{errorMessageClass\}/g, o.errorMessageClass)).replace(/\{messages\}/g, e), 
        t.children().eq(0).before(i);
    }
    var M = f(window), b = function(e, i, t, o) {
        function n(t) {
            M.trigger("validationErrorDisplay", [ e, t ]), t.html(i);
        }
        var s, r = document.getElementById(e.attr("name") + "_err_msg"), a = {};
        r ? (m("Using deprecated element reference " + r.id), o = f(r)) : "function" == typeof o && (o = o(e, i, t)), 
        "object" == typeof o ? (s = !1, o.find("." + t.errorMessageClass).each(function() {
            if (this.inputReferer === e[0]) return s = f(this), !1;
        }), s ? i ? n(s) : s.remove() : (n(a = f('<div class="' + t.errorMessageClass + '"></div>')), 
        a[0].inputReferer = e[0], o.prepend(a))) : (0 === (a = (o = d(e)).find("." + t.errorMessageClass + ".help-block")).length && (a = f("<span></span>").addClass("help-block").addClass(t.errorMessageClass)).appendTo(o), 
        n(a));
    }, m = function(t) {
        "console" in window ? "function" == typeof window.console.warn ? window.console.warn(t) : "function" == typeof window.console.log && window.console.log(t) : alert(t);
    };
    f.fn.validateOnBlur = function(t, e) {
        return this.find("*[data-validation]").bind("blur.validation", function() {
            f(this).validateInputOnBlur(t, e, !0, "blur");
        }), e.validateCheckboxRadioOnClick && this.find("input[type=checkbox][data-validation],input[type=radio][data-validation]").bind("click.validation", function() {
            f(this).validateInputOnBlur(t, e, !0, "click");
        }), this;
    }, f.fn.validateOnEvent = function(i, o) {
        return this.find("*[data-validation-event]").each(function() {
            var t = f(this), e = t.valAttr("event");
            e && t.unbind(e + ".validation").bind(e + ".validation", function(t) {
                9 !== (t || {}).keyCode && f(this).validateInputOnBlur(i, o, !0, e);
            });
        }), this;
    };
    var n = 0;
    f.fn.showHelpOnFocus = function(t) {
        return t = t || "data-validation-help", this.find(".has-help-txt").valAttr("has-keyup-event", !1).removeClass("has-help-txt"), 
        this.find("textarea,input").each(function() {
            var e = f(this), i = "jquery_form_help_" + ++n, o = e.attr(t);
            o && e.addClass("has-help-txt").unbind("focus.help").bind("focus.help", function() {
                var t = e.parent().find("." + i);
                0 === t.length && (t = f("<span />").addClass(i).addClass("help").addClass("help-block").text(o).hide(), 
                e.after(t)), t.fadeIn();
            }).unbind("blur.help").bind("blur.help", function() {
                f(this).parent().find("." + i).fadeOut("slow");
            });
        }), this;
    }, f.fn.validate = function(i, o, t) {
        var n = f.extend({}, f.formUtils.LANG, t || {});
        this.each(function() {
            var t = f(this), e = t.closest("form").get(0).validationConfig || {};
            t.one("validation", function(t, e) {
                "function" == typeof i && i(e, this, t);
            }), t.validateInputOnBlur(n, f.extend({}, e, o || {}), !0);
        });
    }, f.fn.willPostponeValidation = function() {
        return (this.valAttr("suggestion-nr") || this.valAttr("postpone") || this.hasClass("hasDatepicker")) && !window.postponedValidation;
    }, f.fn.validateInputOnBlur = function(t, e, i, o) {
        if (f.formUtils.eventType = o, this.willPostponeValidation()) {
            var n = this, s = this.valAttr("postpone") || 200;
            return window.postponedValidation = function() {
                n.validateInputOnBlur(t, e, i, o), window.postponedValidation = !1;
            }, setTimeout(function() {
                window.postponedValidation && window.postponedValidation();
            }, s), this;
        }
        t = f.extend({}, f.formUtils.LANG, t || {}), u(this, e);
        var r = this, s = r.closest("form"), s = f.formUtils.validateInput(r, t, e, s, o);
        return s.isValid ? s.shouldChangeDisplay && (r.addClass("valid"), d(r).addClass(e.inputParentClassOnSuccess)) : s.isValid || (p(r, e), 
        b(r, s.errorMsg, e, e.errorMessagePosition)), this;
    }, f.fn.valAttr = function(t, e) {
        return void 0 === e ? this.attr("data-validation-" + t) : !1 === e || null === e ? this.removeAttr("data-validation-" + t) : (t = 0 < t.length ? "-" + t : "", 
        this.attr("data-validation" + t, e));
    }, f.fn.isValid = function(s, r, i) {
        if (f.formUtils.isLoadingModules) {
            var t = this;
            return setTimeout(function() {
                t.isValid(s, r, i);
            }, 200), null;
        }
        r = f.extend({}, f.formUtils.defaultConfig(), r || {}), s = f.extend({}, f.formUtils.LANG, s || {}), 
        i = !1 !== i, f.formUtils.errorDisplayPreventedWhenHalted && (delete f.formUtils.errorDisplayPreventedWhenHalted, 
        i = !1), f.formUtils.isValidatingEntireForm = !0, f.formUtils.haltValidation = !1;
        function a(t, e) {
            f.inArray(t, o) < 0 && o.push(t), n.push(e), e.attr("current-error", t), i && p(e, r);
        }
        var e, c = [], o = [], n = [], l = this;
        return i && (l.find("." + r.errorMessageClass + ".alert").remove(), u(l.find("." + r.errorElementClass + ",.valid"), r)), 
        l.find("input,textarea,select").filter(':not([type="submit"],[type="button"])').each(function() {
            var t, e = f(this), i = e.attr("type"), o = "radio" === i || "checkbox" === i, n = e.attr("name");
            t = n, "submit" === (i = i) || "button" === i || "reset" === i || -1 < f.inArray(t, r.ignore || []) || o && !(f.inArray(n, c) < 0) || (o && c.push(n), 
            (n = f.formUtils.validateInput(e, s, r, l, "submit")).shouldChangeDisplay && (n.isValid ? n.isValid && (e.valAttr("current-error", !1).addClass("valid"), 
            d(e).addClass(r.inputParentClassOnSuccess)) : a(n.errorMsg, e)));
        }), "function" == typeof r.onValidate && (e = r.onValidate(l), f.isArray(e) ? f.each(e, function(t, e) {
            a(e.message, e.element);
        }) : e && e.element && e.message && a(e.message, e.element)), f.formUtils.isValidatingEntireForm = !1, 
        !f.formUtils.haltValidation && 0 < n.length ? (i && ("top" === r.errorMessagePosition ? h(l, s.errorTitle, o, r) : "custom" === r.errorMessagePosition ? (m("Use deprecated function errorMessageCustom"), 
        "function" == typeof r.errorMessageCustom && r.errorMessageCustom(l, s.errorTitle, o, r)) : f.each(n, function(t, e) {
            b(e, e.attr("current-error"), r, r.errorMessagePosition);
        }), r.scrollToTopOnError && M.scrollTop(l.offset().top - 20)), !1) : (!i && f.formUtils.haltValidation && (f.formUtils.errorDisplayPreventedWhenHalted = !0), 
        !f.formUtils.haltValidation);
    }, f.fn.validateForm = function(t, e) {
        return m("Use of deprecated function $.validateForm, use $.isValid instead"), this.isValid(t, e, !0);
    }, f.fn.restrictLength = function(t) {
        return new f.formUtils.lengthRestriction(this, t), this;
    }, f.fn.addSuggestions = function(e) {
        var i;
        return this.find("input").each(function() {
            var t = f(this);
            0 < (i = f.split(t.attr("data-suggestions"))).length && !t.hasClass("has-suggestions") && (f.formUtils.suggest(t, i, e), 
            t.addClass("has-suggestions"));
        }), this;
    }, f.split = function(t, i) {
        if ("function" != typeof i) {
            if (!t) return [];
            var o = [];
            return f.each(t.split(i || /[,|\-\s]\s*/g), function(t, e) {
                (e = f.trim(e)).length && o.push(e);
            }), o;
        }
        t && f.each(t.split(/[,|\-\s]\s*/g), function(t, e) {
            if ((e = f.trim(e)).length) return i(e, t);
        });
    }, f.validate = function(o) {
        var t = f.extend(f.formUtils.defaultConfig(), {
            form: "form",
            validateOnEvent: !1,
            validateOnBlur: !0,
            validateCheckboxRadioOnClick: !0,
            showHelpOnFocus: !0,
            addSuggestions: !0,
            modules: "",
            onModulesLoaded: null,
            language: !1,
            onSuccess: !1,
            onError: !1,
            onElementValidate: !1
        });
        (o = f.extend(t, o || {})).lang && "en" !== o.lang && (t = "lang/" + o.lang + ".js", 
        o.modules += o.modules.length ? "," + t : t), f(o.form).each(function(t, e) {
            e.validationConfig = o;
            var i = f(e);
            M.trigger("formValidationSetup", [ i, o ]), i.trigger("formValidationSetup", [ o ]), 
            i.find(".has-help-txt").unbind("focus.validation").unbind("blur.validation"), i.removeClass("has-validation-callback").unbind("submit.validation").unbind("reset.validation").find("input[data-validation],textarea[data-validation]").unbind("blur.validation"), 
            i.bind("submit.validation", function() {
                var t = f(this);
                if (f.formUtils.haltValidation) return !1;
                if (f.formUtils.isLoadingModules) return setTimeout(function() {
                    t.trigger("submit.validation");
                }, 200), !1;
                var e = t.isValid(o.language, o);
                return !f.formUtils.haltValidation && (e && "function" == typeof o.onSuccess ? !1 !== o.onSuccess(t) && void 0 : e || "function" != typeof o.onError ? e : (o.onError(t), 
                !1));
            }).bind("reset.validation", function() {
                f(this).find("." + o.errorMessageClass + ".alert").remove(), u(f(this).find("." + o.errorElementClass + ",.valid"), o);
            }).addClass("has-validation-callback"), o.showHelpOnFocus && i.showHelpOnFocus(), 
            o.addSuggestions && i.addSuggestions(), o.validateOnBlur && (i.validateOnBlur(o.language, o), 
            i.bind("html5ValidationAttrsFound", function() {
                i.validateOnBlur(o.language, o);
            })), o.validateOnEvent && i.validateOnEvent(o.language, o);
        }), "" !== o.modules && f.formUtils.loadModules(o.modules, !1, function() {
            "function" == typeof o.onModulesLoaded && o.onModulesLoaded(), M.trigger("validatorsLoaded", [ "string" == typeof o.form ? f(o.form) : o.form, o ]);
        });
    }, f.formUtils = {
        defaultConfig: function() {
            return {
                ignore: [],
                errorElementClass: "error",
                borderColorOnError: "#b94a48",
                errorMessageClass: "form-error",
                validationRuleAttribute: "data-validation",
                validationErrorMsgAttribute: "data-validation-error-msg",
                errorMessagePosition: "element",
                errorMessageTemplate: {
                    container: '<div class="{errorMessageClass} alert alert-danger">{messages}</div>',
                    messages: "<strong>{errorTitle}</strong><ul>{fields}</ul>",
                    field: "<li>{msg}</li>"
                },
                errorMessageCustom: h,
                scrollToTopOnError: !0,
                dateFormat: "yyyy-mm-dd",
                addValidClassOnAll: !1,
                decimalSeparator: ".",
                inputParentClassOnError: "has-error",
                inputParentClassOnSuccess: "has-success",
                validateHiddenInputs: !1
            };
        },
        validators: {},
        _events: {
            load: [],
            valid: [],
            invalid: []
        },
        haltValidation: !1,
        isValidatingEntireForm: !1,
        addValidator: function(t) {
            var e = 0 === t.name.indexOf("validate_") ? t.name : "validate_" + t.name;
            void 0 === t.validateOnKeyUp && (t.validateOnKeyUp = !0), this.validators[e] = t;
        },
        isLoadingModules: !1,
        loadedModules: {},
        loadModules: function(e, t, i) {
            var a, o, n;
            void 0 === i && (i = !0), f.formUtils.isLoadingModules ? setTimeout(function() {
                f.formUtils.loadModules(e, t, i);
            }) : (a = !1, o = function(t, o) {
                function n() {
                    0 === --e && (f.formUtils.isLoadingModules = !1, i && a && ("function" == typeof i ? i() : M.trigger("validatorsLoaded")));
                }
                var t = f.split(t), e = t.length;
                0 < e && (f.formUtils.isLoadingModules = !0);
                var s = "?_=" + new Date().getTime(), r = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0];
                f.each(t, function(t, e) {
                    var i;
                    0 === (e = f.trim(e)).length ? n() : (i = o + e + (".js" === e.slice(-3) ? "" : ".js"), 
                    e = document.createElement("SCRIPT"), i in f.formUtils.loadedModules ? n() : (f.formUtils.loadedModules[i] = 1, 
                    a = !0, e.type = "text/javascript", e.onload = n, e.src = i + (".dev.js" === i.slice(-7) ? s : ""), 
                    e.onerror = function() {
                        m("Unable to load form validation module " + i);
                    }, e.onreadystatechange = function() {
                        "complete" !== this.readyState && "loaded" !== this.readyState || (n(), this.onload = null, 
                        this.onreadystatechange = null);
                    }, r.appendChild(e)));
                });
            }, t ? o(e, t) : (n = function() {
                var t = !1;
                return f('script[src*="form-validator"]').each(function() {
                    return "/" === (t = this.src.substr(0, this.src.lastIndexOf("/")) + "/") && (t = ""), 
                    !1;
                }), !1 !== t && (o(e, t), !0);
            })() || f(n));
        },
        validateInput: function(o, n, s, r, a) {
            o.trigger("beforeValidation"), s = s || f.formUtils.defaultConfig(), n = n || f.formUtils.LANG;
            var c = o.val() || "", t = {
                isValid: !0,
                shouldChangeDisplay: !0,
                errorMsg: ""
            }, e = o.valAttr("optional"), i = !1, l = !1, d = !1, p = o.valAttr("if-checked"), u = o.valAttr("if-checked-value");
            if (o.attr("disabled") || !o.is(":visible") && !s.validateHiddenInputs) return t.shouldChangeDisplay = !1, 
            t;
            null != p && (i = !0, d = r.find('input[name="' + p + '"]'), null != u ? d.each(function(t, e) {
                f(e).prop("checked") && f(e).val() === u && (l = !0);
            }) : d.prop("checked") && (l = !0));
            d = !c && "number" === o[0].type;
            if (!c && "true" === e && !d || i && !l) return t.shouldChangeDisplay = s.addValidClassOnAll, 
            t;
            var d = o.attr(s.validationRuleAttribute), h = !0;
            if (!d) return t.shouldChangeDisplay = s.addValidClassOnAll, t;
            i = o.valAttr("ignore");
            return i && (console.log("HAS IGNORE " + c), f.each(i.split(""), function(t, e) {
                console.log(e + " -> IGNORED"), c = c.replace(new RegExp("\\" + e, "g"), "");
            }), console.log("AFTER IGNORE FILTER " + c)), f.split(d, function(t) {
                0 !== t.indexOf("validate_") && (t = "validate_" + t);
                var e = f.formUtils.validators[t];
                if (!e || "function" != typeof e.validatorFunction) throw new Error('Using undefined validator "' + t + '"');
                "validate_checkbox_group" === t && (o = r.find('[name="' + o.attr("name") + '"]:eq(0)'));
                var i = null;
                if ("keyup" === a && !e.validateOnKeyUp || (i = e.validatorFunction(c, o, s, n, r)), 
                !i) return (h = null) !== i && (h = (h = o.attr(s.validationErrorMsgAttribute + "-" + t.replace("validate_", ""))) || ((h = o.attr(s.validationErrorMsgAttribute)) || ((h = "function" != typeof e.errorMessageKey ? n[e.errorMessageKey] : n[e.errorMessageKey(s)]) || e.errorMessage))), 
                !1;
            }, " "), "string" == typeof h ? (o.trigger("validation", !1), t.errorMsg = h, t.isValid = !1, 
            t.shouldChangeDisplay = !0) : null === h ? t.shouldChangeDisplay = s.addValidClassOnAll : (o.trigger("validation", !0), 
            t.shouldChangeDisplay = !0), "function" == typeof s.onElementValidate && null !== h && s.onElementValidate(t.isValid, o, r, h), 
            t;
        },
        parseDate: function(t, e) {
            var i = e.replace(/[a-zA-Z]/gi, "").substring(0, 1), o = "^", n = e.split(i || null);
            if (f.each(n, function(t, e) {
                o += (0 < t ? "\\" + i : "") + "(\\d{" + e.length + "})";
            }), o += "$", null === (r = t.match(new RegExp(o)))) return !1;
            function s(t, e, i) {
                for (var o = 0; o < e.length; o++) if (e[o].substring(0, 1) === t) return f.formUtils.parseDateInt(i[o + 1]);
                return -1;
            }
            var e = s("m", n, r), t = s("d", n, r), r = s("y", n, r);
            return !(2 === e && 28 < t && (r % 4 != 0 || r % 100 == 0 && r % 400 != 0) || 2 === e && 29 < t && (r % 4 == 0 || r % 100 != 0 && r % 400 == 0) || 12 < e || 0 === e) && (!(this.isShortMonth(e) && 30 < t || !this.isShortMonth(e) && 31 < t || 0 === t) && [ r, e, t ]);
        },
        parseDateInt: function(t) {
            return 0 === t.indexOf("0") && (t = t.replace("0", "")), parseInt(t, 10);
        },
        isShortMonth: function(t) {
            return t % 2 == 0 && t < 7 || t % 2 != 0 && 7 < t;
        },
        lengthRestriction: function(i, o) {
            function t() {
                var t, e = i.val().length;
                n < e && (t = i.scrollTop(), i.val(i.val().substring(0, n)), i.scrollTop(t)), (s = n - e) < 0 && (s = 0), 
                o.text(s);
            }
            var n = parseInt(o.text(), 10), s = 0;
            f(i).bind("keydown keyup keypress focus blur", t).bind("cut paste", function() {
                setTimeout(t, 100);
            }), f(document).bind("ready", t);
        },
        numericRangeCheck: function(t, e) {
            var i = f.split(e), o = parseInt(e.substr(3), 10);
            return 1 === i.length && -1 === e.indexOf("min") && -1 === e.indexOf("max") && (i = [ e, e ]), 
            2 === i.length && (t < parseInt(i[0], 10) || t > parseInt(i[1], 10)) ? [ "out", i[0], i[1] ] : 0 === e.indexOf("min") && t < o ? [ "min", o ] : 0 === e.indexOf("max") && o < t ? [ "max", o ] : [ "ok" ];
        },
        _numSuggestionElements: 0,
        _selectedSuggestion: null,
        _previousTypedVal: null,
        suggest: function(e, t, i) {
            function c(t, e) {
                var i = e.offset();
                t.css({
                    width: e.outerWidth(),
                    left: i.left + "px",
                    top: i.top + e.outerHeight() + "px"
                });
            }
            var l = {
                css: {
                    maxHeight: "150px",
                    background: "#FFF",
                    lineHeight: "150%",
                    textDecoration: "underline",
                    overflowX: "hidden",
                    overflowY: "auto",
                    border: "#CCC solid 1px",
                    borderTop: "none",
                    cursor: "pointer"
                },
                activeSuggestionCSS: {
                    background: "#E9E9E9"
                }
            };
            i && f.extend(l, i), l.css.position = "absolute", l.css["z-index"] = 9999, e.attr("autocomplete", "off"), 
            0 === this._numSuggestionElements && M.bind("resize", function() {
                f(".jquery-form-suggestions").each(function() {
                    var t = f(this), e = t.attr("data-suggest-container");
                    c(t, f(".suggestions-" + e).eq(0));
                });
            }), this._numSuggestionElements++;
            function d(t) {
                t = t.valAttr("suggestion-nr"), f.formUtils._selectedSuggestion = null, f.formUtils._previousTypedVal = null, 
                f(".jquery-form-suggestion-" + t).fadeOut("fast");
            }
            return e.data("suggestions", t).valAttr("suggestion-nr", this._numSuggestionElements).unbind("focus.suggest").bind("focus.suggest", function() {
                f(this).trigger("keyup"), f.formUtils._selectedSuggestion = null;
            }).unbind("keyup.suggest").bind("keyup.suggest", function() {
                var o, t, i, n, s = f(this), r = [], a = f.trim(s.val()).toLocaleLowerCase();
                a !== f.formUtils._previousTypedVal && (f.formUtils._previousTypedVal = a, o = !1, 
                t = s.valAttr("suggestion-nr"), (i = f(".jquery-form-suggestion-" + t)).scrollTop(0), 
                "" !== a && (n = 2 < a.length, f.each(s.data("suggestions"), function(t, e) {
                    var i = e.toLocaleLowerCase();
                    if (i === a) return r.push("<strong>" + e + "</strong>"), !(o = !0);
                    (0 === i.indexOf(a) || n && -1 < i.indexOf(a)) && r.push(e.replace(new RegExp(a, "gi"), "<strong>$&</strong>"));
                })), o || 0 === r.length && 0 < i.length ? i.hide() : 0 < r.length && 0 === i.length ? (i = f("<div></div>").css(l.css).appendTo("body"), 
                e.addClass("suggestions-" + t), i.attr("data-suggest-container", t).addClass("jquery-form-suggestions").addClass("jquery-form-suggestion-" + t)) : 0 < r.length && !i.is(":visible") && i.show(), 
                0 < r.length && a.length !== r[0].length && (c(i, s), i.html(""), f.each(r, function(t, e) {
                    f("<div></div>").append(e).css({
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        padding: "5px"
                    }).addClass("form-suggest-element").appendTo(i).click(function() {
                        s.focus(), s.val(f(this).text()), d(s);
                    });
                })));
            }).unbind("keydown.validation").bind("keydown.validation", function(t) {
                var e = t.keyCode ? t.keyCode : t.which, i = f(this);
                if (13 === e && null !== f.formUtils._selectedSuggestion) {
                    var o, n = i.valAttr("suggestion-nr");
                    0 < (o = f(".jquery-form-suggestion-" + n)).length && (s = o.find("div").eq(f.formUtils._selectedSuggestion).text(), 
                    i.val(s), d(i), t.preventDefault());
                } else {
                    n = i.valAttr("suggestion-nr");
                    var s = (o = f(".jquery-form-suggestion-" + n)).children();
                    if (0 < s.length && -1 < f.inArray(e, [ 38, 40 ])) {
                        38 === e ? (null === f.formUtils._selectedSuggestion ? f.formUtils._selectedSuggestion = s.length - 1 : f.formUtils._selectedSuggestion--, 
                        f.formUtils._selectedSuggestion < 0 && (f.formUtils._selectedSuggestion = s.length - 1)) : 40 === e && (null === f.formUtils._selectedSuggestion ? f.formUtils._selectedSuggestion = 0 : f.formUtils._selectedSuggestion++, 
                        f.formUtils._selectedSuggestion > s.length - 1 && (f.formUtils._selectedSuggestion = 0));
                        i = o.innerHeight(), n = o.scrollTop(), e = o.children().eq(0).outerHeight() * f.formUtils._selectedSuggestion;
                        return (e < n || n + i < e) && o.scrollTop(e), s.removeClass("active-suggestion").css("background", "none").eq(f.formUtils._selectedSuggestion).addClass("active-suggestion").css(l.activeSuggestionCSS), 
                        t.preventDefault(), !1;
                    }
                }
            }).unbind("blur.suggest").bind("blur.suggest", function() {
                d(f(this));
            }), e;
        },
        LANG: {
            errorTitle: "Form submission failed!",
            requiredField: "This is a required field",
            requiredFields: "You have not answered all required fields",
            badTime: "You have not given a correct time",
            badEmail: "You have not given a correct e-mail address",
            badTelephone: "You have not given a correct phone number",
            badSecurityAnswer: "You have not given a correct answer to the security question",
            badDate: "You have not given a correct date",
            lengthBadStart: "The input value must be between ",
            lengthBadEnd: " characters",
            lengthTooLongStart: "The input value is longer than ",
            lengthTooShortStart: "The input value is shorter than ",
            notConfirmed: "Input values could not be confirmed",
            badDomain: "Incorrect domain value",
            badUrl: "The input value is not a correct URL",
            badCustomVal: "The input value is incorrect",
            andSpaces: " and spaces ",
            badInt: "The input value was not a correct number",
            badSecurityNumber: "Your social security number was incorrect",
            badUKVatAnswer: "Incorrect UK VAT Number",
            badStrength: "The password isn't strong enough",
            badNumberOfSelectedOptionsStart: "You have to choose at least ",
            badNumberOfSelectedOptionsEnd: " answers",
            badAlphaNumeric: "The input value can only contain alphanumeric characters ",
            badAlphaNumericExtra: " and ",
            wrongFileSize: "The file you are trying to upload is too large (max %s)",
            wrongFileType: "Only files of type %s is allowed",
            groupCheckedRangeStart: "Please choose between ",
            groupCheckedTooFewStart: "Please choose at least ",
            groupCheckedTooManyStart: "Please choose a maximum of ",
            groupCheckedEnd: " item(s)",
            badCreditCard: "The credit card number is not correct",
            badCVV: "The CVV number was not correct",
            wrongFileDim: "Incorrect image dimensions,",
            imageTooTall: "the image can not be taller than",
            imageTooWide: "the image can not be wider than",
            imageTooSmall: "the image was too small",
            min: "min",
            max: "max",
            imageRatioNotAccepted: "Image ratio is not be accepted",
            badBrazilTelephoneAnswer: "The phone number entered is invalid",
            badBrazilCEPAnswer: "The CEP entered is invalid",
            badBrazilCPFAnswer: "The CPF entered is invalid"
        }
    }, f.formUtils.addValidator({
        name: "email",
        validatorFunction: function(t) {
            var e = t.toLowerCase().split("@"), i = e[0], t = e[1];
            if (i && t) {
                if (0 === i.indexOf('"')) {
                    t = i.length;
                    if ((i = i.replace(/\"/g, "")).length !== t - 2) return !1;
                }
                return f.formUtils.validators.validate_domain.validatorFunction(e[1]) && 0 !== i.indexOf(".") && "." !== i.substring(i.length - 1, i.length) && -1 === i.indexOf("..") && !/[^\w\+\.\-\#\-\_\~\!\$\&\'\(\)\*\+\,\;\=\:]/.test(i);
            }
            return !1;
        },
        errorMessage: "",
        errorMessageKey: "badEmail"
    }), f.formUtils.addValidator({
        name: "domain",
        validatorFunction: function(t) {
            return 0 < t.length && t.length <= 253 && !/[^a-zA-Z0-9]/.test(t.slice(-2)) && !/[^a-zA-Z0-9]/.test(t.substr(0, 1)) && !/[^a-zA-Z0-9\.\-]/.test(t) && 1 === t.split("..").length && 1 < t.split(".").length;
        },
        errorMessage: "",
        errorMessageKey: "badDomain"
    }), f.formUtils.addValidator({
        name: "required",
        validatorFunction: function(t, e, i, o, n) {
            switch (e.attr("type")) {
              case "checkbox":
                return e.is(":checked");

              case "radio":
                return 0 < n.find('input[name="' + e.attr("name") + '"]').filter(":checked").length;

              default:
                return "" !== f.trim(t);
            }
        },
        errorMessage: "",
        errorMessageKey: function(t) {
            return "top" === t.errorMessagePosition || "custom" === t.errorMessagePosition ? "requiredFields" : "requiredField";
        }
    }), f.formUtils.addValidator({
        name: "length",
        validatorFunction: function(t, e, i, o) {
            var n = e.valAttr("length"), s = e.attr("type");
            if (void 0 === n) return alert('Please add attribute "data-validation-length" to ' + e[0].nodeName + " named " + e.attr("name")), 
            !0;
            var r, t = ("file" === s && void 0 !== e.get(0).files ? e.get(0).files : t).length, t = f.formUtils.numericRangeCheck(t, n);
            switch (t[0]) {
              case "out":
                this.errorMessage = o.lengthBadStart + n + o.lengthBadEnd, r = !1;
                break;

              case "min":
                this.errorMessage = o.lengthTooShortStart + t[1] + o.lengthBadEnd, r = !1;
                break;

              case "max":
                this.errorMessage = o.lengthTooLongStart + t[1] + o.lengthBadEnd, r = !1;
                break;

              default:
                r = !0;
            }
            return r;
        },
        errorMessage: "",
        errorMessageKey: ""
    }), f.formUtils.addValidator({
        name: "url",
        validatorFunction: function(t) {
            if (/^(https?|ftp):\/\/((((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|\[|\]|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)) {
                var e = t.split("://")[1], t = e.indexOf("/");
                return -1 < t && (e = e.substr(0, t)), f.formUtils.validators.validate_domain.validatorFunction(e);
            }
            return !1;
        },
        errorMessage: "",
        errorMessageKey: "badUrl"
    }), f.formUtils.addValidator({
        name: "number",
        validatorFunction: function(t, e, i) {
            if ("" !== t) {
                var o, n, s = e.valAttr("allowing") || "", r = e.valAttr("decimal-separator") || i.decimalSeparator, a = !1, i = e.valAttr("step") || "", e = !1;
                if (-1 === s.indexOf("number") && (s += ",number"), -1 === s.indexOf("negative") && 0 === t.indexOf("-")) return !1;
                if (-1 < s.indexOf("range") && (o = parseFloat(s.substring(s.indexOf("[") + 1, s.indexOf(";"))), 
                n = parseFloat(s.substring(s.indexOf(";") + 1, s.indexOf("]"))), a = !0), "" !== i && (e = !0), 
                "," === r) {
                    if (-1 < t.indexOf(".")) return !1;
                    t = t.replace(",", ".");
                }
                if (-1 < s.indexOf("number") && "" === t.replace(/[0-9-]/g, "") && (!a || o <= t && t <= n) && (!e || t % i == 0)) return !0;
                if (-1 < s.indexOf("float") && null !== t.match(new RegExp("^([0-9-]+)\\.([0-9]+)$")) && (!a || o <= t && t <= n) && (!e || t % i == 0)) return !0;
            }
            return !1;
        },
        errorMessage: "",
        errorMessageKey: "badInt"
    }), f.formUtils.addValidator({
        name: "alphanumeric",
        validatorFunction: function(t, e, i, o) {
            var n = "^([a-zA-Z0-9", s = e.valAttr("allowing"), e = "";
            return s ? (e = n + s + "]+)$", -1 < (s = s.replace(/\\/g, "")).indexOf(" ") && (s = s.replace(" ", ""), 
            s += o.andSpaces || f.formUtils.LANG.andSpaces), this.errorMessage = o.badAlphaNumeric + o.badAlphaNumericExtra + s) : (e = n + "]+)$", 
            this.errorMessage = o.badAlphaNumeric), new RegExp(e).test(t);
        },
        errorMessage: "",
        errorMessageKey: ""
    }), f.formUtils.addValidator({
        name: "custom",
        validatorFunction: function(t, e) {
            return new RegExp(e.valAttr("regexp")).test(t);
        },
        errorMessage: "",
        errorMessageKey: "badCustomVal"
    }), f.formUtils.addValidator({
        name: "date",
        validatorFunction: function(t, e, i) {
            i = e.valAttr("format") || i.dateFormat || "yyyy-mm-dd";
            return !1 !== f.formUtils.parseDate(t, i);
        },
        errorMessage: "",
        errorMessageKey: "badDate"
    }), f.formUtils.addValidator({
        name: "checkbox_group",
        validatorFunction: function(t, e, i, o, n) {
            var s = !0, r = e.attr("name"), a = f('input[type=checkbox][name^="' + r + '"]', n), c = a.filter(":checked").length, r = e.valAttr("qty");
            void 0 === r && (n = e.get(0).nodeName, alert('Attribute "data-validation-qty" is missing from ' + n + " named " + e.attr("name")));
            var l, c = f.formUtils.numericRangeCheck(c, r);
            switch (c[0]) {
              case "out":
                this.errorMessage = o.groupCheckedRangeStart + r + o.groupCheckedEnd, s = !1;
                break;

              case "min":
                this.errorMessage = o.groupCheckedTooFewStart + c[1] + o.groupCheckedEnd, s = !1;
                break;

              case "max":
                this.errorMessage = o.groupCheckedTooManyStart + c[1] + o.groupCheckedEnd, s = !1;
                break;

              default:
                s = !0;
            }
            return s || (l = function() {
                a.unbind("click", l), a.filter("*[data-validation]").validateInputOnBlur(o, i, !1, "blur");
            }, a.bind("click", l)), s;
        }
    });
}(jQuery), function(s) {
    s.formUtils.addValidator({
        name: "time",
        validatorFunction: function(t) {
            if (null === t.match(/^(\d{2}):(\d{2})$/)) return !1;
            var e = parseInt(t.split(":")[0], 10), t = parseInt(t.split(":")[1], 10);
            return !(23 < e || 59 < t);
        },
        errorMessage: "",
        errorMessageKey: "badTime"
    }), s.formUtils.addValidator({
        name: "birthdate",
        validatorFunction: function(t, e, i) {
            var o = "yyyy-mm-dd";
            e.valAttr("format") ? o = e.valAttr("format") : void 0 !== i.dateFormat && (o = i.dateFormat);
            var n = s.formUtils.parseDate(t, o);
            if (!n) return !1;
            e = new Date(), i = e.getFullYear(), t = n[0], o = n[1], n = n[2];
            if (t !== i) return t < i && i - 124 < t;
            t = e.getMonth() + 1;
            return o !== t ? o < t : n <= e.getDate();
        },
        errorMessage: "",
        errorMessageKey: "badDate"
    });
}(jQuery), function(u, h) {
    "use strict";
    function c(t) {
        return t = u.split((t.valAttr("allowing") || "").toLowerCase()), -1 < u.inArray("jpg", t) && -1 == u.inArray("jpeg", t) ? t.push("jpeg") : -1 < u.inArray("jpeg", t) && -1 == u.inArray("jpg", t) && t.push("jpg"), 
        t;
    }
    function l(t, e, i, o) {
        e = o[e] || "", t.errorMessageKey = "", t.errorMessage = e.replace("%s", i);
    }
    function d(t) {
        h.console && h.console.log && h.console.log(t);
    }
    var f = void 0 !== h.FileReader;
    u.formUtils.addValidator({
        name: "mime",
        validatorFunction: function(t, e, i, o) {
            if (f) {
                var n = !0, s = e.get(0).files || [], r = "", a = c(e);
                return s.length && (u.each(s, function(t, e) {
                    return n = !1, r = e.type || "", u.each(a, function(t, e) {
                        if (n = -1 < r.indexOf(e)) return !1;
                    }), n;
                }), n || (d("Trying to upload a file with mime type " + r + " which is not allowed"), 
                l(this, "wrongFileType", a.join(", "), o))), n;
            }
            return d("FileReader not supported by browser, will check file extension"), u.formUtils.validators.validate_extension.validatorFunction(t, e, i, o);
        },
        errorMessage: "",
        errorMessageKey: "wrongFileType"
    }), u.formUtils.addValidator({
        name: "extension",
        validatorFunction: function(t, e, i, o) {
            var n = !0, s = this, r = c(e);
            return u.each(e.get(0).files || [ t ], function(t, e) {
                e = "string" == typeof e ? e : e.value || e.fileName || e.name, e = e.substr(e.lastIndexOf(".") + 1);
                if (-1 == u.inArray(e.toLowerCase(), r)) return n = !1, l(s, "wrongFileType", r.join(", "), o), 
                !1;
            }), n;
        },
        errorMessage: "",
        errorMessageKey: "wrongFileType"
    }), u.formUtils.addValidator({
        name: "size",
        validatorFunction: function(t, e, i, o) {
            var n = e.valAttr("max-size");
            if (!n) return d('Input "' + e.attr("name") + '" is missing data-validation-max-size attribute'), 
            !0;
            if (!f) return !0;
            var s = u.formUtils.convertSizeNameToBytes(n), r = !0;
            return u.each(e.get(0).files || [], function(t, e) {
                return r = e.size <= s;
            }), r || l(this, "wrongFileSize", n, o), r;
        },
        errorMessage: "",
        errorMessageKey: "wrongFileSize"
    }), u.formUtils.convertSizeNameToBytes = function(t) {
        return "M" == (t = t.toUpperCase()).substr(t.length - 1, 1) ? 1024 * parseInt(t.substr(0, t.length - 1), 10) * 1024 : "MB" == t.substr(t.length - 2, 2) ? 1024 * parseInt(t.substr(0, t.length - 2), 10) * 1024 : "KB" == t.substr(t.length - 2, 2) ? 1024 * parseInt(t.substr(0, t.length - 2), 10) : "B" == t.substr(t.length - 1, 1) ? parseInt(t.substr(0, t.length - 1), 10) : parseInt(t, 10);
    };
    function M() {
        return !1;
    }
    u.formUtils.checkImageDimension = function(t, e, i) {
        function o(t) {
            t = (t = t.replace("min", "").replace("max", "")).split("x"), s.width = t[0], s.height = t[1] ? t[1] : t[0];
        }
        var n = !1, s = {
            width: 0,
            height: 0
        }, r = !1, a = !1, e = e.split("-");
        return 1 == e.length ? 0 === e[0].indexOf("min") ? r = e[0] : a = e[0] : (r = e[0], 
        a = e[1]), r && (o(r), (t.width < s.width || t.height < s.height) && (n = i.imageTooSmall + " (" + i.min + " " + s.width + "x" + s.height + "px)")), 
        !n && a && (o(a), (t.width > s.width || t.height > s.height) && (n = t.width > s.width ? i.imageTooWide + " " + s.width + "px" : i.imageTooTall + " " + s.height + "px", 
        n += " (" + i.max + " " + s.width + "x" + s.height + "px)")), n;
    }, u.formUtils.checkImageRatio = function(t, e, i) {
        var o, n, s, r = t.width / t.height, t = function(t) {
            t = t.replace("max", "").replace("min", "").split(":");
            return t[0] / t[1];
        }, e = e.split("-");
        if (1 == e.length) {
            if (r !== t(e[0])) return i.imageRatioNotAccepted;
        } else if (2 == e.length && (o = r, n = t(e[0]), s = t(e[1]), console.log(o + ">=" + n + " && " + o + " <= " + s), 
        !(n <= o && o <= s))) return i.imageRatioNotAccepted;
        return !1;
    }, u.formUtils.addValidator({
        name: "dimension",
        validatorFunction: function(t, i, e, o, n) {
            if (f) {
                var s = !0, r = i.get(0).files || [];
                if (-1 == i.attr("data-validation").indexOf("mime")) return alert("You should validate file type being jpg, gif or png on input " + i[0].name), 
                !1;
                if (1 < r.length) return alert("Validating image dimensions does not support inputs allowing multiple files"), 
                !1;
                if (0 == r.length) return !0;
                if (i.valAttr("has-valid-dim")) return !0;
                if (i.valAttr("has-not-valid-dim")) return this.errorMessage = o.wrongFileDim + " " + i.valAttr("has-not-valid-dim"), 
                !1;
                if ("keyup" == u.formUtils.eventType) return null;
                var a = !1;
                return u.formUtils.isValidatingEntireForm && (a = !0, u.formUtils.haltValidation = !0, 
                n.bind("submit", M).addClass("on-blur")), c = r[0], l = function(t) {
                    var e = !1;
                    i.valAttr("dimension") && (e = u.formUtils.checkImageDimension(t, i.valAttr("dimension"), o)), 
                    !e && i.valAttr("ratio") && (e = u.formUtils.checkImageRatio(t, i.valAttr("ratio"), o)), 
                    e ? i.valAttr("has-not-valid-dim", e) : i.valAttr("has-valid-dim", "true"), i.valAttr("has-keyup-event") || i.valAttr("has-keyup-event", "1").bind("keyup change", function(t) {
                        9 != t.keyCode && 16 != t.keyCode && u(this).valAttr("has-not-valid-dim", !1).valAttr("has-valid-dim", !1);
                    }), a ? (u.formUtils.haltValidation = !1, n.removeClass("on-blur").get(0).onsubmit = function() {}, 
                    n.unbind("submit", M), n.trigger("submit")) : i.trigger("blur");
                }, d = function(t) {
                    throw t;
                }, r = new FileReader(), p = new Image(), r.readAsDataURL(c), r.onload = function(t) {
                    p.onload = function() {
                        u(h).trigger("imageValidation", [ this ]), l(this);
                    }, p.onerror = function() {
                        d();
                    }, p.src = t.target.result;
                }, !0;
            }
            var c, l, d, p;
            return s;
        },
        errorMessage: "",
        errorMessageKey: ""
    }), u(h).one("validatorsLoaded formValidationSetup", function(t, e) {
        e = e ? e.find('input[type="file"]') : u('input[type="file"]');
        e.filter("*[data-validation]").bind("change", function() {
            u(this).removeClass("error").parent().find(".form-error").remove();
        });
    });
}(jQuery, window), function(c, s) {
    "use strict";
    c.formUtils.addValidator({
        name: "spamcheck",
        validatorFunction: function(t, e) {
            return e.valAttr("captcha") === t;
        },
        errorMessage: "",
        errorMessageKey: "badSecurityAnswer"
    }), c.formUtils.addValidator({
        name: "confirmation",
        validatorFunction: function(t, e, i, o, n) {
            var s, r = "", a = e.valAttr("confirm") || e.attr("name") + "_confirmation", c = n.find('[name="' + a + '"]').eq(0);
            return c ? (r = c.val(), i.validateOnBlur && !c.attr("hasValidationCallback") && (c.attr("hasValidationCallback", "true"), 
            s = function() {
                e.validate();
            }, c.on("keyup", s), n.one("formValidationSetup", function() {
                c.attr("hasValidationCallback", "false"), c.off("keyup", s);
            }))) : alert('Could not find an input with name "' + a + '"'), t === r;
        },
        errorMessage: "",
        errorMessageKey: "notConfirmed"
    });
    var r = {
        amex: [ 15, 15 ],
        diners_club: [ 14, 14 ],
        cjb: [ 16, 16 ],
        laser: [ 16, 19 ],
        visa: [ 16, 16 ],
        mastercard: [ 16, 16 ],
        maestro: [ 12, 19 ],
        discover: [ 16, 16 ]
    }, e = !1, a = !1;
    c.formUtils.addValidator({
        name: "creditcard",
        validatorFunction: function(i, t) {
            t = c.split(t.valAttr("allowing") || "");
            if (a = -1 < c.inArray("amex", t), e = a && 1 === t.length, 0 < t.length) {
                var o = !1;
                if (c.each(t, function(t, e) {
                    if (e in r) {
                        if (i.length >= r[e][0] && i.length <= r[e][1]) return !(o = !0);
                    } else s.console && console.warn('Use of unknown credit card "' + e + '"');
                }), !o) return !1;
            }
            if ("" !== i.replace(new RegExp("[0-9]", "g"), "")) return !1;
            var n = 0;
            return c.each(i.split("").reverse(), function(t, e) {
                e = parseInt(e, 10), n += t % 2 == 0 || (e *= 2) < 10 ? e : e - 9;
            }), n % 10 == 0;
        },
        errorMessage: "",
        errorMessageKey: "badCreditCard"
    }), c.formUtils.addValidator({
        name: "cvv",
        validatorFunction: function(t) {
            return "" === t.replace(/[0-9]/g, "") && (t += "", e ? 4 === t.length : a ? 3 === t.length || 4 === t.length : 3 === t.length);
        },
        errorMessage: "",
        errorMessageKey: "badCVV"
    }), c.formUtils.addValidator({
        name: "strength",
        validatorFunction: function(t, e) {
            e = e.valAttr("strength") || 2;
            return e && 3 < e && (e = 3), c.formUtils.validators.validate_strength.calculatePasswordStrength(t) >= e;
        },
        errorMessage: "",
        errorMessageKey: "badStrength",
        calculatePasswordStrength: function(t) {
            if (t.length < 4) return 0;
            function e(t, e) {
                for (var i = "", o = 0; o < e.length; o++) {
                    for (var n = !0, s = 0; s < t && s + o + t < e.length; s++) n = n && e.charAt(s + o) === e.charAt(s + o + t);
                    s < t && (n = !1), n ? (o += t - 1, n = !1) : i += e.charAt(o);
                }
                return i;
            }
            var i = 0;
            return i += 4 * t.length, i += e(1, t).length - t.length, i += e(2, t).length - t.length, 
            i += e(3, t).length - t.length, i += e(4, t).length - t.length, t.match(/(.*[0-9].*[0-9].*[0-9])/) && (i += 5), 
            t.match(/(.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~])/) && (i += 5), t.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && (i += 10), 
            t.match(/([a-zA-Z])/) && t.match(/([0-9])/) && (i += 15), t.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && t.match(/([0-9])/) && (i += 15), 
            t.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && t.match(/([a-zA-Z])/) && (i += 15), (t.match(/^\w+$/) || t.match(/^\d+$/)) && (i -= 10), 
            i < 0 && (i = 0), 100 < i && (i = 100), i < 20 ? 0 : i < 40 ? 1 : i <= 60 ? 2 : 3;
        },
        strengthDisplay: function(t, e) {
            var r = {
                fontSize: "12pt",
                padding: "4px",
                bad: "Very bad",
                weak: "Weak",
                good: "Good",
                strong: "Strong"
            };
            e && c.extend(r, e), t.bind("keyup", function() {
                var t = c(this).val(), e = void 0 === r.parent ? c(this).parent() : c(r.parent), i = e.find(".strength-meter"), o = c.formUtils.validators.validate_strength.calculatePasswordStrength(t), n = {
                    background: "pink",
                    color: "#FF0000",
                    fontWeight: "bold",
                    border: "red solid 1px",
                    borderWidth: "0px 0px 4px",
                    display: "inline-block",
                    fontSize: r.fontSize,
                    padding: r.padding
                }, s = r.bad;
                0 === i.length && (i = c("<span></span>")).addClass("strength-meter").appendTo(e), 
                t ? i.show() : i.hide(), 1 === o ? s = r.weak : 2 === o ? (n.background = "lightyellow", 
                n.borderColor = "yellow", n.color = "goldenrod", s = r.good) : 3 <= o && (n.background = "lightgreen", 
                n.borderColor = "darkgreen", n.color = "darkgreen", s = r.strong), i.css(n).text(s);
            });
        }
    });
    function l(t, i, e, o, n) {
        function s(t, e) {
            t.valid ? i.valAttr("backend-valid", "true") : (i.valAttr("backend-invalid", "true"), 
            t.message && i.attr(o.validationErrorMsgAttribute, t.message)), i.valAttr("has-keyup-event") || i.valAttr("has-keyup-event", "1").bind("keyup change", function(t) {
                9 !== t.keyCode && 16 !== t.keyCode && c(this).valAttr("backend-valid", !1).valAttr("backend-invalid", !1);
            }), e();
        }
        var r = i.valAttr("req-params") || i.data("validation-req-params") || {};
        "string" == typeof (r = r || {}) && (r = c.parseJSON(r)), r[i.valAttr("param-name") || i.attr("name")] = e, 
        c.ajax({
            url: t,
            type: "POST",
            cache: !1,
            data: r,
            dataType: "json",
            error: function(t) {
                return s({
                    valid: !1,
                    message: "Connection failed with status: " + t.statusText
                }, n), !1;
            },
            success: function(t) {
                s(t, n);
            }
        });
    }
    function d() {
        return !1;
    }
    c.formUtils.addValidator({
        name: "server",
        validatorFunction: function(t, e, i, o, n) {
            var s = e.valAttr("backend-valid"), r = e.valAttr("backend-invalid"), a = document.location.href;
            return e.valAttr("url") ? a = e.valAttr("url") : "serverURL" in i && (a = i.backendUrl), 
            !!s || !r && ("keyup" === c.formUtils.eventType || (c.formUtils.isValidatingEntireForm ? (n.bind("submit", d).addClass("validating-server-side").addClass("on-blur"), 
            e.addClass("validating-server-side"), c.formUtils.haltValidation = !0, l(a, e, t, i, function() {
                n.removeClass("validating-server-side").removeClass("on-blur").get(0).onsubmit = function() {}, 
                n.unbind("submit", d), e.removeClass("validating-server-side"), e.valAttr("value-length", t.length), 
                c.formUtils.haltValidation = !1, n.trigger("submit");
            })) : (n.addClass("validating-server-side"), e.addClass("validating-server-side"), 
            l(a, e, t, i, function() {
                n.removeClass("validating-server-side"), e.removeClass("validating-server-side"), 
                e.trigger("blur");
            }))), null);
        },
        errorMessage: "",
        errorMessageKey: "badBackend",
        validateOnKeyUp: !1
    }), c.formUtils.addValidator({
        name: "letternumeric",
        validatorFunction: function(t, e, i, o) {
            var n = "^([a-zA-Z0-9ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", s = e.valAttr("allowing"), e = "";
            return s ? (e = n + s + "]+)$", -1 < (s = s.replace(/\\/g, "")).indexOf(" ") && (s = s.replace(" ", ""), 
            s += o.andSpaces || c.formUtils.LANG.andSpaces), this.errorMessage = o.badAlphaNumeric + o.badAlphaNumericExtra + s) : (e = n + "]+)$", 
            this.errorMessage = o.badAlphaNumeric), new RegExp(e).test(t);
        },
        errorMessage: "",
        errorMessageKey: "requiredFields"
    }), c.fn.displayPasswordStrength = function(t) {
        return new c.formUtils.validators.validate_strength.strengthDisplay(this, t), this;
    };
}(jQuery, window), $.formUtils.addValidator({
    name: "ukvatnumber",
    validatorFunction: function(t) {
        if ((t = t.replace(/[^0-9]/g, "")).length < 9) return !1;
        var e = !1, i = t.split(""), o = Number(i[7] + i[8]), n = i[0], t = i[1];
        if (0 === n && 0 < t) return !1;
        for (var s = 0, r = 0; r < 7; r++) s += i[r] * (8 - r);
        for (var a = 0, c = 8; 2 <= c; c--) i[a], a++;
        for (;0 < s; ) s -= 97;
        return o === (s = Math.abs(s)) && (e = !0), e || (55 <= (s %= 97) ? s -= 55 : s += 42, 
        s === o && (e = !0)), e;
    },
    errorMessage: "",
    errorMessageKey: "badUKVatAnswer"
}), function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : jQuery && !jQuery.fn.hoverIntent && t(jQuery);
}(function(c) {
    "use strict";
    function l(t) {
        n = t.pageX, s = t.pageY;
    }
    var n, s, r = {
        interval: 100,
        sensitivity: 6,
        timeout: 0
    }, d = 0, p = function(t, e, i, o) {
        if (Math.sqrt((i.pX - n) * (i.pX - n) + (i.pY - s) * (i.pY - s)) < o.sensitivity) return e.off(i.event, l), 
        delete i.timeoutId, i.isActive = !0, t.pageX = n, t.pageY = s, delete i.pX, delete i.pY, 
        o.over.apply(e[0], [ t ]);
        i.pX = n, i.pY = s, i.timeoutId = setTimeout(function() {
            p(t, e, i, o);
        }, o.interval);
    };
    c.fn.hoverIntent = function(t, e, i) {
        var o = d++, a = c.extend({}, r);
        c.isPlainObject(t) ? (a = c.extend(a, t), c.isFunction(a.out) || (a.out = a.over)) : a = c.isFunction(e) ? c.extend(a, {
            over: t,
            out: e,
            selector: i
        }) : c.extend(a, {
            over: t,
            out: t,
            selector: e
        });
        e = function(t) {
            var n = c.extend({}, t), s = c(this), e = s.data("hoverIntent");
            e || s.data("hoverIntent", e = {});
            var r = e[o];
            r || (e[o] = r = {
                id: o
            }), r.timeoutId && (r.timeoutId = clearTimeout(r.timeoutId));
            e = r.event = "mousemove.hoverIntent.hoverIntent" + o;
            if ("mouseenter" === t.type) {
                if (r.isActive) return;
                r.pX = n.pageX, r.pY = n.pageY, s.off(e, l).on(e, l), r.timeoutId = setTimeout(function() {
                    p(n, s, r, a);
                }, a.interval);
            } else {
                if (!r.isActive) return;
                s.off(e, l), r.timeoutId = setTimeout(function() {
                    var t, e, i, o;
                    t = n, e = s, i = r, o = a.out, delete e.data("hoverIntent")[i.id], o.apply(e[0], [ t ]);
                }, a.timeout);
            }
        };
        return this.on({
            "mouseenter.hoverIntent": e,
            "mouseleave.hoverIntent": e
        }, a.selector);
    };
}), function() {
    "use strict";
    var p, e;
    function c(t) {
        this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, 
        this.intersectionRect = t.intersectionRect || n(), this.isIntersecting = !!t.intersectionRect;
        var e = this.boundingClientRect, t = e.width * e.height, e = this.intersectionRect, e = e.width * e.height;
        this.intersectionRatio = t ? Number((e / t).toFixed(4)) : this.isIntersecting ? 1 : 0;
    }
    function t(t, e) {
        var i, o, n, e = e || {};
        if ("function" != typeof t) throw new Error("callback must be a function");
        if (e.root && 1 != e.root.nodeType) throw new Error("root must be an Element");
        this._checkForIntersections = (i = this._checkForIntersections.bind(this), o = this.THROTTLE_TIMEOUT, 
        n = null, function() {
            n = n || setTimeout(function() {
                i(), n = null;
            }, o);
        }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], 
        this._rootMarginValues = this._parseRootMargin(e.rootMargin), this.thresholds = this._initThresholds(e.threshold), 
        this.root = e.root || null, this.rootMargin = this._rootMarginValues.map(function(t) {
            return t.value + t.unit;
        }).join(" ");
    }
    function i(t, e, i, o) {
        "function" == typeof t.addEventListener ? t.addEventListener(e, i, o || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, i);
    }
    function o(t, e, i, o) {
        "function" == typeof t.removeEventListener ? t.removeEventListener(e, i, o || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, i);
    }
    function u(t) {
        var e;
        try {
            e = t.getBoundingClientRect();
        } catch (t) {}
        return e ? (e.width && e.height || (e = {
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            width: e.right - e.left,
            height: e.bottom - e.top
        }), e) : n();
    }
    function n() {
        return {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        };
    }
    function s(t, e) {
        for (var i = e; i; ) {
            if (i == t) return !0;
            i = h(i);
        }
        return !1;
    }
    function h(t) {
        t = t.parentNode;
        return t && 11 == t.nodeType && t.host ? t.host : t && t.assignedSlot ? t.assignedSlot.parentNode : t;
    }
    "object" == typeof window && ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ? "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function() {
            return 0 < this.intersectionRatio;
        }
    }) : (p = window.document, e = [], t.prototype.THROTTLE_TIMEOUT = 100, t.prototype.POLL_INTERVAL = null, 
    t.prototype.USE_MUTATION_OBSERVER = !0, t.prototype.observe = function(e) {
        if (!this._observationTargets.some(function(t) {
            return t.element == e;
        })) {
            if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
            this._registerInstance(), this._observationTargets.push({
                element: e,
                entry: null
            }), this._monitorIntersections(), this._checkForIntersections();
        }
    }, t.prototype.unobserve = function(e) {
        this._observationTargets = this._observationTargets.filter(function(t) {
            return t.element != e;
        }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance());
    }, t.prototype.disconnect = function() {
        this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance();
    }, t.prototype.takeRecords = function() {
        var t = this._queuedEntries.slice();
        return this._queuedEntries = [], t;
    }, t.prototype._initThresholds = function(t) {
        t = t || [ 0 ];
        return Array.isArray(t) || (t = [ t ]), t.sort().filter(function(t, e, i) {
            if ("number" != typeof t || isNaN(t) || t < 0 || 1 < t) throw new Error("threshold must be a number between 0 and 1 inclusively");
            return t !== i[e - 1];
        });
    }, t.prototype._parseRootMargin = function(t) {
        t = (t || "0px").split(/\s+/).map(function(t) {
            t = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
            if (!t) throw new Error("rootMargin must be specified in pixels or percent");
            return {
                value: parseFloat(t[1]),
                unit: t[2]
            };
        });
        return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t;
    }, t.prototype._monitorIntersections = function() {
        this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(window, "resize", this._checkForIntersections, !0), 
        i(p, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in window && (this._domObserver = new MutationObserver(this._checkForIntersections), 
        this._domObserver.observe(p, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))));
    }, t.prototype._unmonitorIntersections = function() {
        this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), 
        this._monitoringInterval = null, o(window, "resize", this._checkForIntersections, !0), 
        o(p, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), 
        this._domObserver = null));
    }, t.prototype._checkForIntersections = function() {
        var r = this._rootIsInDom(), a = r ? this._getRootRect() : n();
        this._observationTargets.forEach(function(t) {
            var e = t.element, i = u(e), o = this._rootContainsTarget(e), n = t.entry, s = r && o && this._computeTargetAndRootIntersection(e, a), s = t.entry = new c({
                time: window.performance && performance.now && performance.now(),
                target: e,
                boundingClientRect: i,
                rootBounds: a,
                intersectionRect: s
            });
            n ? r && o ? this._hasCrossedThreshold(n, s) && this._queuedEntries.push(s) : n && n.isIntersecting && this._queuedEntries.push(s) : this._queuedEntries.push(s);
        }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this);
    }, t.prototype._computeTargetAndRootIntersection = function(t, e) {
        if ("none" != window.getComputedStyle(t).display) {
            for (var i, o, n, s, r = u(t), a = h(t), c = !1; !c; ) {
                var l = null, d = 1 == a.nodeType ? window.getComputedStyle(a) : {};
                if ("none" == d.display) return;
                if (a == this.root || a == p ? (c = !0, l = e) : a != p.body && a != p.documentElement && "visible" != d.overflow && (l = u(a)), 
                l && (i = l, o = r, l = d = s = n = void 0, n = Math.max(i.top, o.top), s = Math.min(i.bottom, o.bottom), 
                d = Math.max(i.left, o.left), l = Math.min(i.right, o.right), o = s - n, !(r = 0 <= (i = l - d) && 0 <= o && {
                    top: n,
                    bottom: s,
                    left: d,
                    right: l,
                    width: i,
                    height: o
                }))) break;
                a = h(a);
            }
            return r;
        }
    }, t.prototype._getRootRect = function() {
        var t, e;
        return e = this.root ? u(this.root) : (t = p.documentElement, e = p.body, {
            top: 0,
            left: 0,
            right: t.clientWidth || e.clientWidth,
            width: t.clientWidth || e.clientWidth,
            bottom: t.clientHeight || e.clientHeight,
            height: t.clientHeight || e.clientHeight
        }), this._expandRectByRootMargin(e);
    }, t.prototype._expandRectByRootMargin = function(i) {
        var t = this._rootMarginValues.map(function(t, e) {
            return "px" == t.unit ? t.value : t.value * (e % 2 ? i.width : i.height) / 100;
        }), t = {
            top: i.top - t[0],
            right: i.right + t[1],
            bottom: i.bottom + t[2],
            left: i.left - t[3]
        };
        return t.width = t.right - t.left, t.height = t.bottom - t.top, t;
    }, t.prototype._hasCrossedThreshold = function(t, e) {
        var i = t && t.isIntersecting ? t.intersectionRatio || 0 : -1, o = e.isIntersecting ? e.intersectionRatio || 0 : -1;
        if (i !== o) for (var n = 0; n < this.thresholds.length; n++) {
            var s = this.thresholds[n];
            if (s == i || s == o || s < i != s < o) return !0;
        }
    }, t.prototype._rootIsInDom = function() {
        return !this.root || s(p, this.root);
    }, t.prototype._rootContainsTarget = function(t) {
        return s(this.root || p, t);
    }, t.prototype._registerInstance = function() {
        e.indexOf(this) < 0 && e.push(this);
    }, t.prototype._unregisterInstance = function() {
        var t = e.indexOf(this);
        -1 != t && e.splice(t, 1);
    }, window.IntersectionObserver = t, window.IntersectionObserverEntry = c));
}(), function(t) {
    var l = Array.prototype.slice;
    function e() {}
    function i(a) {
        if (a) {
            var c = "undefined" == typeof console ? e : function(t) {
                console.error(t);
            };
            return a.bridget = function(t, e) {
                var i, s, r;
                (i = e).prototype.option || (i.prototype.option = function(t) {
                    a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
                }), s = t, r = e, a.fn[s] = function(e) {
                    if ("string" != typeof e) return this.each(function() {
                        var t = a.data(this, s);
                        t ? (t.option(e), t._init()) : (t = new r(this, e), a.data(this, s, t));
                    });
                    for (var t = l.call(arguments, 1), i = 0, o = this.length; i < o; i++) {
                        var n = this[i], n = a.data(n, s);
                        if (n) if (a.isFunction(n[e]) && "_" !== e.charAt(0)) {
                            n = n[e].apply(n, t);
                            if (void 0 !== n) return n;
                        } else c("no such method '" + e + "' for " + s + " instance"); else c("cannot call methods on " + s + " prior to initialization; attempted to call '" + e + "'");
                    }
                    return this;
                };
            }, a.bridget;
        }
    }
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", [ "jquery" ], i) : "object" == typeof exports ? i(require("jquery")) : i(t.jQuery);
}(window), function(i) {
    var t = document.documentElement, e = function() {};
    function o(t) {
        var e = i.event;
        return e.target = e.target || e.srcElement || t, e;
    }
    t.addEventListener ? e = function(t, e, i) {
        t.addEventListener(e, i, !1);
    } : t.attachEvent && (e = function(e, t, i) {
        e[t + i] = i.handleEvent ? function() {
            var t = o(e);
            i.handleEvent.call(i, t);
        } : function() {
            var t = o(e);
            i.call(e, t);
        }, e.attachEvent("on" + t, e[t + i]);
    });
    var n = function() {};
    t.removeEventListener ? n = function(t, e, i) {
        t.removeEventListener(e, i, !1);
    } : t.detachEvent && (n = function(e, i, o) {
        e.detachEvent("on" + i, e[i + o]);
        try {
            delete e[i + o];
        } catch (t) {
            e[i + o] = void 0;
        }
    });
    n = {
        bind: e,
        unbind: n
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", n) : "object" == typeof exports ? module.exports = n : i.eventie = n;
}(window), function() {
    "use strict";
    function t() {}
    var e = t.prototype, i = this, o = i.EventEmitter;
    function s(t, e) {
        for (var i = t.length; i--; ) if (t[i].listener === e) return i;
        return -1;
    }
    function n(t) {
        return function() {
            return this[t].apply(this, arguments);
        };
    }
    e.getListeners = function(t) {
        var e, i, o = this._getEvents();
        if (t instanceof RegExp) for (i in e = {}, o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i]); else e = o[t] || (o[t] = []);
        return e;
    }, e.flattenListeners = function(t) {
        for (var e = [], i = 0; i < t.length; i += 1) e.push(t[i].listener);
        return e;
    }, e.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && ((e = {})[t] = i), e || i;
    }, e.addListener = function(t, e) {
        var i, o = this.getListenersAsObject(t), n = "object" == typeof e;
        for (i in o) o.hasOwnProperty(i) && -1 === s(o[i], e) && o[i].push(n ? e : {
            listener: e,
            once: !1
        });
        return this;
    }, e.on = n("addListener"), e.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        });
    }, e.once = n("addOnceListener"), e.defineEvent = function(t) {
        return this.getListeners(t), this;
    }, e.defineEvents = function(t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
        return this;
    }, e.removeListener = function(t, e) {
        var i, o, n = this.getListenersAsObject(t);
        for (o in n) n.hasOwnProperty(o) && -1 !== (i = s(n[o], e)) && n[o].splice(i, 1);
        return this;
    }, e.off = n("removeListener"), e.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e);
    }, e.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e);
    }, e.manipulateListeners = function(t, e, i) {
        var o, n, s = t ? this.removeListener : this.addListener, r = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp) for (o = i.length; o--; ) s.call(this, e, i[o]); else for (o in e) e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? s : r).call(this, o, n);
        return this;
    }, e.removeEvent = function(t) {
        var e, i = typeof t, o = this._getEvents();
        if ("string" == i) delete o[t]; else if (t instanceof RegExp) for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e]; else delete this._events;
        return this;
    }, e.removeAllListeners = n("removeEvent"), e.emitEvent = function(t, e) {
        var i, o, n, s = this.getListenersAsObject(t);
        for (n in s) if (s.hasOwnProperty(n)) for (o = s[n].length; o--; ) !0 === (i = s[n][o]).once && this.removeListener(t, i.listener), 
        i.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this;
    }, e.trigger = n("emitEvent"), e.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e);
    }, e.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this;
    }, e._getOnceReturnValue = function() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
    }, e._getEvents = function() {
        return this._events || (this._events = {});
    }, t.noConflict = function() {
        return i.EventEmitter = o, t;
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t;
    }) : "object" == typeof module && module.exports ? module.exports = t : i.EventEmitter = t;
}.call(this), function(t) {
    var n = "Webkit Moz ms Ms O".split(" "), s = document.documentElement.style;
    function e(t) {
        if (t) {
            if ("string" == typeof s[t]) return t;
            var e;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var i = 0, o = n.length; i < o; i++) if (e = n[i] + t, "string" == typeof s[e]) return e;
        }
    }
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return e;
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e;
}(window), function(y) {
    function O(t) {
        var e = parseFloat(t);
        return -1 === t.indexOf("%") && !isNaN(e) && e;
    }
    var L = "undefined" == typeof console ? function() {} : function(t) {
        console.error(t);
    }, T = [ "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth" ];
    function t(m) {
        var g, z, A, v = !1;
        return function(t) {
            var e, i;
            if (v || (v = !0, e = y.getComputedStyle, i = e ? function(t) {
                return e(t, null);
            } : function(t) {
                return t.currentStyle;
            }, g = function(t) {
                t = i(t);
                return t || L("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), 
                t;
            }, (z = m("boxSizing")) && ((b = document.createElement("div")).style.width = "200px", 
            b.style.padding = "1px 2px 3px 4px", b.style.borderStyle = "solid", b.style.borderWidth = "1px 2px 3px 4px", 
            b.style[z] = "border-box", (M = document.body || document.documentElement).appendChild(b), 
            f = g(b), A = 200 === O(f.width), M.removeChild(b))), "string" == typeof t && (t = document.querySelector(t)), 
            t && "object" == typeof t && t.nodeType) {
                var o = g(t);
                if ("none" === o.display) return function() {
                    for (var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, e = 0, i = T.length; e < i; e++) {
                        t[T[e]] = 0;
                    }
                    return t;
                }();
                var n = {};
                n.width = t.offsetWidth, n.height = t.offsetHeight;
                for (var s = n.isBorderBox = !(!z || !o[z] || "border-box" !== o[z]), r = 0, a = T.length; r < a; r++) {
                    var c = T[r], l = function(t, e) {
                        if (y.getComputedStyle || -1 === e.indexOf("%")) return e;
                        var i = t.style, o = i.left, n = t.runtimeStyle, s = n && n.left;
                        s && (n.left = t.currentStyle.left);
                        i.left = e, e = i.pixelLeft, i.left = o, s && (n.left = s);
                        return e;
                    }(t, l = o[c]), l = parseFloat(l);
                    n[c] = isNaN(l) ? 0 : l;
                }
                var d = n.paddingLeft + n.paddingRight, p = n.paddingTop + n.paddingBottom, u = n.marginLeft + n.marginRight, h = n.marginTop + n.marginBottom, f = n.borderLeftWidth + n.borderRightWidth, M = n.borderTopWidth + n.borderBottomWidth, b = s && A, s = O(o.width);
                !1 !== s && (n.width = s + (b ? 0 : d + f));
                s = O(o.height);
                return !1 !== s && (n.height = s + (b ? 0 : p + M)), n.innerWidth = n.width - (d + f), 
                n.innerHeight = n.height - (p + M), n.outerWidth = n.width + u, n.outerHeight = n.height + h, 
                n;
            }
        };
    }
    "function" == typeof define && define.amd ? define("get-size/get-size", [ "get-style-property/get-style-property" ], t) : "object" == typeof exports ? module.exports = t(require("desandro-get-style-property")) : y.getSize = t(y.getStyleProperty);
}(window), function(e) {
    var i = e.document, o = [];
    function n(t) {
        "function" == typeof t && (n.isReady ? t() : o.push(t));
    }
    function s(t) {
        t = "readystatechange" === t.type && "complete" !== i.readyState;
        n.isReady || t || r();
    }
    function r() {
        n.isReady = !0;
        for (var t = 0, e = o.length; t < e; t++) {
            (0, o[t])();
        }
    }
    function t(t) {
        return "complete" === i.readyState ? r() : (t.bind(i, "DOMContentLoaded", s), t.bind(i, "readystatechange", s), 
        t.bind(e, "load", s)), n;
    }
    n.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", [ "eventie/eventie" ], t) : "object" == typeof exports ? module.exports = t(require("eventie")) : e.docReady = t(e.eventie);
}(window), function(n) {
    "use strict";
    var t, i = function() {
        if (n.matches) return "matches";
        if (n.matchesSelector) return "matchesSelector";
        for (var t = [ "webkit", "moz", "ms", "o" ], e = 0, i = t.length; e < i; e++) {
            var o = t[e] + "MatchesSelector";
            if (n[o]) return o;
        }
    }();
    function o(t, e) {
        return t[i](e);
    }
    function s(t) {
        t.parentNode || document.createDocumentFragment().appendChild(t);
    }
    t = i ? o(document.createElement("div"), "div") ? o : function(t, e) {
        return s(t), o(t, e);
    } : function(t, e) {
        s(t);
        for (var i = t.parentNode.querySelectorAll(e), o = 0, n = i.length; o < n; o++) if (i[o] === t) return !0;
        return !1;
    }, "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
        return t;
    }) : "object" == typeof exports ? module.exports = t : window.matchesSelector = t;
}(Element.prototype), function(i, o) {
    "use strict";
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", [ "doc-ready/doc-ready", "matches-selector/matches-selector" ], function(t, e) {
        return o(i, t, e);
    }) : "object" == typeof exports ? module.exports = o(i, require("doc-ready"), require("desandro-matches-selector")) : i.fizzyUIUtils = o(i, i.docReady, i.matchesSelector);
}(window, function(u, t, l) {
    var i, h = {
        extend: function(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        },
        modulo: function(t, e) {
            return (t % e + e) % e;
        }
    }, e = Object.prototype.toString;
    h.isArray = function(t) {
        return "[object Array]" == e.call(t);
    }, h.makeArray = function(t) {
        var e = [];
        if (h.isArray(t)) e = t; else if (t && "number" == typeof t.length) for (var i = 0, o = t.length; i < o; i++) e.push(t[i]); else e.push(t);
        return e;
    }, h.indexOf = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e);
    } : function(t, e) {
        for (var i = 0, o = t.length; i < o; i++) if (t[i] === e) return i;
        return -1;
    }, h.removeFrom = function(t, e) {
        e = h.indexOf(t, e);
        -1 != e && t.splice(e, 1);
    }, h.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
        return t instanceof HTMLElement;
    } : function(t) {
        return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName;
    }, h.setText = function(t, e) {
        t[i = i || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText")] = e;
    }, h.getParent = function(t, e) {
        for (;t != document.body; ) if (t = t.parentNode, l(t, e)) return t;
    }, h.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t;
    }, h.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
    }, h.filterFindElements = function(t, e) {
        for (var i = [], o = 0, n = (t = h.makeArray(t)).length; o < n; o++) {
            var s = t[o];
            if (h.isElement(s)) if (e) {
                l(s, e) && i.push(s);
                for (var r = s.querySelectorAll(e), a = 0, c = r.length; a < c; a++) i.push(r[a]);
            } else i.push(s);
        }
        return i;
    }, h.debounceMethod = function(t, e, o) {
        var n = t.prototype[e], s = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[s];
            t && clearTimeout(t);
            var e = arguments, i = this;
            this[s] = setTimeout(function() {
                n.apply(i, e), delete i[s];
            }, o || 100);
        };
    }, h.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i;
        }).toLowerCase();
    };
    var f = u.console;
    return h.htmlInit = function(d, p) {
        t(function() {
            for (var t = h.toDashed(p), e = document.querySelectorAll(".js-" + t), i = "data-" + t + "-options", o = 0, n = e.length; o < n; o++) {
                var s, r = e[o], a = r.getAttribute(i);
                try {
                    s = a && JSON.parse(a);
                } catch (t) {
                    f && f.error("Error parsing " + i + " on " + r.nodeName.toLowerCase() + (r.id ? "#" + r.id : "") + ": " + t);
                    continue;
                }
                var c = new d(r, s), l = u.jQuery;
                l && l.data(r, p, c);
            }
        });
    }, h;
}), function(n, s) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/item", [ "eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils" ], function(t, e, i, o) {
        return s(n, t, e, i, o);
    }) : "object" == typeof exports ? module.exports = s(n, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (n.Outlayer = {}, 
    n.Outlayer.Item = s(n, n.EventEmitter, n.getSize, n.getStyleProperty, n.fizzyUIUtils));
}(window, function(t, e, i, s, o) {
    "use strict";
    var n = t.getComputedStyle, r = n ? function(t) {
        return n(t, null);
    } : function(t) {
        return t.currentStyle;
    };
    var a = s("transition"), t = s("transform"), t = a && t, c = !!s("perspective"), l = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend"
    }[a], d = [ "transform", "transition", "transitionDuration", "transitionProperty" ], p = function() {
        for (var t = {}, e = 0, i = d.length; e < i; e++) {
            var o = d[e], n = s(o);
            n && n !== o && (t[o] = n);
        }
        return t;
    }();
    function u(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create());
    }
    o.extend(u.prototype, e.prototype), u.prototype._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        });
    }, u.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
    }, u.prototype.getSize = function() {
        this.size = i(this.element);
    }, u.prototype.css = function(t) {
        var e, i = this.element.style;
        for (e in t) {
            i[p[e] || e] = t[e];
        }
    }, u.prototype.getPosition = function() {
        var t = r(this.element), e = this.layout.options, i = e.isOriginLeft, o = e.isOriginTop, n = t[i ? "left" : "right"], e = t[o ? "top" : "bottom"], t = this.layout.size, n = -1 != n.indexOf("%") ? parseFloat(n) / 100 * t.width : parseInt(n, 10), e = -1 != e.indexOf("%") ? parseFloat(e) / 100 * t.height : parseInt(e, 10), n = isNaN(n) ? 0 : n, e = isNaN(e) ? 0 : e;
        n -= i ? t.paddingLeft : t.paddingRight, e -= o ? t.paddingTop : t.paddingBottom, 
        this.position.x = n, this.position.y = e;
    }, u.prototype.layoutPosition = function() {
        var t = this.layout.size, e = this.layout.options, i = {}, o = e.isOriginLeft ? "paddingLeft" : "paddingRight", n = e.isOriginLeft ? "left" : "right", s = e.isOriginLeft ? "right" : "left", o = this.position.x + t[o];
        i[n] = this.getXValue(o), i[s] = "";
        o = e.isOriginTop ? "paddingTop" : "paddingBottom", s = e.isOriginTop ? "top" : "bottom", 
        e = e.isOriginTop ? "bottom" : "top", o = this.position.y + t[o];
        i[s] = this.getYValue(o), i[e] = "", this.css(i), this.emitEvent("layout", [ this ]);
    }, u.prototype.getXValue = function(t) {
        var e = this.layout.options;
        return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px";
    }, u.prototype.getYValue = function(t) {
        var e = this.layout.options;
        return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px";
    }, u.prototype._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x, o = this.position.y, n = parseInt(t, 10), s = parseInt(e, 10), s = n === this.position.x && s === this.position.y;
        this.setPosition(t, e), !s || this.isTransitioning ? (i = t - i, e -= o, (o = {}).transform = this.getTranslate(i, e), 
        this.transition({
            to: o,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })) : this.layoutPosition();
    }, u.prototype.getTranslate = function(t, e) {
        var i = this.layout.options;
        return t = i.isOriginLeft ? t : -t, e = i.isOriginTop ? e : -e, c ? "translate3d(" + t + "px, " + e + "px, 0)" : "translate(" + t + "px, " + e + "px)";
    }, u.prototype.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition();
    }, u.prototype.moveTo = t ? u.prototype._transitionTo : u.prototype.goTo, u.prototype.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10);
    }, u.prototype._nonTransition = function(t) {
        for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this);
    }, u.prototype._transition = function(t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var e, i = this._transn;
            for (e in t.onTransitionEnd) i.onEnd[e] = t.onTransitionEnd[e];
            for (e in t.to) i.ingProperties[e] = !0, t.isCleaning && (i.clean[e] = !0);
            t.from && (this.css(t.from), this.element.offsetHeight, 0), this.enableTransition(t.to), 
            this.css(t.to), this.isTransitioning = !0;
        } else this._nonTransition(t);
    };
    var h = "opacity," + (p.transform || "transform").replace(/([A-Z])/g, function(t) {
        return "-" + t.toLowerCase();
    });
    u.prototype.enableTransition = function() {
        this.isTransitioning || (this.css({
            transitionProperty: h,
            transitionDuration: this.layout.options.transitionDuration
        }), this.element.addEventListener(l, this, !1));
    }, u.prototype.transition = u.prototype[a ? "_transition" : "_nonTransition"], u.prototype.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t);
    }, u.prototype.onotransitionend = function(t) {
        this.ontransitionend(t);
    };
    var f = {
        "-webkit-transform": "transform",
        "-moz-transform": "transform",
        "-o-transform": "transform"
    };
    u.prototype.ontransitionend = function(t) {
        var e, i;
        t.target === this.element && (e = this._transn, i = f[t.propertyName] || t.propertyName, 
        delete e.ingProperties[i], function(t) {
            for (var e in t) return;
            return 1;
        }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", 
        delete e.clean[i]), i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]), 
        this.emitEvent("transitionEnd", [ this ]));
    }, u.prototype.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1;
    }, u.prototype._removeStyles = function(t) {
        var e, i = {};
        for (e in t) i[e] = "";
        this.css(i);
    };
    var M = {
        transitionProperty: "",
        transitionDuration: ""
    };
    return u.prototype.removeTransitionStyles = function() {
        this.css(M);
    }, u.prototype.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [ this ]);
    }, u.prototype.remove = function() {
        var t;
        a && parseFloat(this.layout.options.transitionDuration) ? ((t = this).once("transitionEnd", function() {
            t.removeElem();
        }), this.hide()) : this.removeElem();
    }, u.prototype.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options, e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, 
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        });
    }, u.prototype.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal");
    }, u.prototype.getHideRevealTransitionEndProperty = function(t) {
        var e, t = this.layout.options[t];
        if (t.opacity) return "opacity";
        for (e in t) return e;
    }, u.prototype.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options, e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, 
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        });
    }, u.prototype.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"));
    }, u.prototype.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        });
    }, u;
}), function(s, r) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", [ "eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item" ], function(t, e, i, o, n) {
        return r(s, t, e, i, o, n);
    }) : "object" == typeof exports ? module.exports = r(s, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : s.Outlayer = r(s, s.eventie, s.EventEmitter, s.getSize, s.fizzyUIUtils, s.Outlayer.Item);
}(window, function(t, e, i, n, s, o) {
    "use strict";
    function r() {}
    var a = t.console, c = t.jQuery, l = 0, d = {};
    function p(t, e) {
        var i = s.getQueryElement(t);
        i ? (this.element = i, c && (this.$element = c(this.element)), this.options = s.extend({}, this.constructor.defaults), 
        this.option(e), e = ++l, this.element.outlayerGUID = e, (d[e] = this)._create(), 
        this.options.isInitLayout && this.layout()) : a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t));
    }
    return p.namespace = "outlayer", p.Item = o, p.defaults = {
        containerStyle: {
            position: "relative"
        },
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    }, s.extend(p.prototype, i.prototype), p.prototype.option = function(t) {
        s.extend(this.options, t);
    }, p.prototype._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), 
        this.options.isResizeBound && this.bindResize();
    }, p.prototype.reloadItems = function() {
        this.items = this._itemize(this.element.children);
    }, p.prototype._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, s = e.length; n < s; n++) {
            var r = new i(e[n], this);
            o.push(r);
        }
        return o;
    }, p.prototype._filterFindItemElements = function(t) {
        return s.filterFindElements(t, this.options.itemSelector);
    }, p.prototype.getItemElements = function() {
        for (var t = [], e = 0, i = this.items.length; e < i; e++) t.push(this.items[e].element);
        return t;
    }, p.prototype._init = p.prototype.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0;
    }, p.prototype._resetLayout = function() {
        this.getSize();
    }, p.prototype.getSize = function() {
        this.size = n(this.element);
    }, p.prototype._getMeasurement = function(t, e) {
        var i, o = this.options[t];
        o ? ("string" == typeof o ? i = this.element.querySelector(o) : s.isElement(o) && (i = o), 
        this[t] = i ? n(i)[e] : o) : this[t] = 0;
    }, p.prototype.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
    }, p.prototype._getItemsForLayout = function(t) {
        for (var e = [], i = 0, o = t.length; i < o; i++) {
            var n = t[i];
            n.isIgnored || e.push(n);
        }
        return e;
    }, p.prototype._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            for (var i = [], o = 0, n = t.length; o < n; o++) {
                var s = t[o], r = this._getItemLayoutPosition(s);
                r.item = s, r.isInstant = e || s.isLayoutInstant, i.push(r);
            }
            this._processLayoutQueue(i);
        }
    }, p.prototype._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        };
    }, p.prototype._processLayoutQueue = function(t) {
        for (var e = 0, i = t.length; e < i; e++) {
            var o = t[e];
            this._positionItem(o.item, o.x, o.y, o.isInstant);
        }
    }, p.prototype._positionItem = function(t, e, i, o) {
        o ? t.goTo(e, i) : t.moveTo(e, i);
    }, p.prototype._postLayout = function() {
        this.resizeContainer();
    }, p.prototype.resizeContainer = function() {
        var t;
        !this.options.isResizingContainer || (t = this._getContainerSize()) && (this._setContainerMeasure(t.width, !0), 
        this._setContainerMeasure(t.height, !1));
    }, p.prototype._getContainerSize = r, p.prototype._setContainerMeasure = function(t, e) {
        var i;
        void 0 !== t && ((i = this.size).isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), 
        t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px");
    }, p.prototype._emitCompleteOnItems = function(t, e) {
        var i = this;
        function o() {
            i.dispatchEvent(t + "Complete", null, [ e ]);
        }
        var n = e.length;
        if (e && n) for (var s = 0, r = 0, a = e.length; r < a; r++) {
            e[r].once(t, c);
        } else o();
        function c() {
            ++s === n && o();
        }
    }, p.prototype.dispatchEvent = function(t, e, i) {
        var o = e ? [ e ].concat(i) : i;
        this.emitEvent(t, o), c && (this.$element = this.$element || c(this.element), e ? ((e = c.Event(e)).type = t, 
        this.$element.trigger(e, i)) : this.$element.trigger(t, i));
    }, p.prototype.ignore = function(t) {
        t = this.getItem(t);
        t && (t.isIgnored = !0);
    }, p.prototype.unignore = function(t) {
        t = this.getItem(t);
        t && delete t.isIgnored;
    }, p.prototype.stamp = function(t) {
        if (t = this._find(t)) {
            this.stamps = this.stamps.concat(t);
            for (var e = 0, i = t.length; e < i; e++) {
                var o = t[e];
                this.ignore(o);
            }
        }
    }, p.prototype.unstamp = function(t) {
        if (t = this._find(t)) for (var e = 0, i = t.length; e < i; e++) {
            var o = t[e];
            s.removeFrom(this.stamps, o), this.unignore(o);
        }
    }, p.prototype._find = function(t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = s.makeArray(t);
    }, p.prototype._manageStamps = function() {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var t = 0, e = this.stamps.length; t < e; t++) {
                var i = this.stamps[t];
                this._manageStamp(i);
            }
        }
    }, p.prototype._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        };
    }, p.prototype._manageStamp = r, p.prototype._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(), i = this._boundingRect, t = n(t);
        return {
            left: e.left - i.left - t.marginLeft,
            top: e.top - i.top - t.marginTop,
            right: i.right - e.right - t.marginRight,
            bottom: i.bottom - e.bottom - t.marginBottom
        };
    }, p.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
    }, p.prototype.bindResize = function() {
        this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0);
    }, p.prototype.unbindResize = function() {
        this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1;
    }, p.prototype.onresize = function() {
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var t = this;
        this.resizeTimeout = setTimeout(function() {
            t.resize(), delete t.resizeTimeout;
        }, 100);
    }, p.prototype.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
    }, p.prototype.needsResizeLayout = function() {
        var t = n(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth;
    }, p.prototype.addItems = function(t) {
        t = this._itemize(t);
        return t.length && (this.items = this.items.concat(t)), t;
    }, p.prototype.appended = function(t) {
        t = this.addItems(t);
        t.length && (this.layoutItems(t, !0), this.reveal(t));
    }, p.prototype.prepended = function(t) {
        var e = this._itemize(t);
        e.length && (t = this.items.slice(0), this.items = e.concat(t), this._resetLayout(), 
        this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(t));
    }, p.prototype.reveal = function(t) {
        this._emitCompleteOnItems("reveal", t);
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            t[i].reveal();
        }
    }, p.prototype.hide = function(t) {
        this._emitCompleteOnItems("hide", t);
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            t[i].hide();
        }
    }, p.prototype.revealItemElements = function(t) {
        t = this.getItems(t);
        this.reveal(t);
    }, p.prototype.hideItemElements = function(t) {
        t = this.getItems(t);
        this.hide(t);
    }, p.prototype.getItem = function(t) {
        for (var e = 0, i = this.items.length; e < i; e++) {
            var o = this.items[e];
            if (o.element === t) return o;
        }
    }, p.prototype.getItems = function(t) {
        for (var e = [], i = 0, o = (t = s.makeArray(t)).length; i < o; i++) {
            var n = t[i], n = this.getItem(n);
            n && e.push(n);
        }
        return e;
    }, p.prototype.remove = function(t) {
        var e = this.getItems(t);
        if (this._emitCompleteOnItems("remove", e), e && e.length) for (var i = 0, o = e.length; i < o; i++) {
            var n = e[i];
            n.remove(), s.removeFrom(this.items, n);
        }
    }, p.prototype.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "";
        for (var e = 0, i = this.items.length; e < i; e++) {
            this.items[e].destroy();
        }
        this.unbindResize();
        t = this.element.outlayerGUID;
        delete d[t], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace);
    }, p.data = function(t) {
        t = (t = s.getQueryElement(t)) && t.outlayerGUID;
        return t && d[t];
    }, p.create = function(t, e) {
        function i() {
            p.apply(this, arguments);
        }
        return Object.create ? i.prototype = Object.create(p.prototype) : s.extend(i.prototype, p.prototype), 
        (i.prototype.constructor = i).defaults = s.extend({}, p.defaults), s.extend(i.defaults, e), 
        i.prototype.settings = {}, i.namespace = t, i.data = p.data, (i.Item = function() {
            o.apply(this, arguments);
        }).prototype = new o(), s.htmlInit(i, t), c && c.bridget && c.bridget(t, i), i;
    }, p.Item = o, p;
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/item", [ "outlayer/outlayer" ], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, 
    t.Isotope.Item = e(t.Outlayer));
}(window, function(t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments);
    }
    (e.prototype = new t.Item())._create = function() {
        this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {};
    }, e.prototype.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t, e = this.layout.options.getSortData, i = this.layout._sorters;
            for (t in e) {
                var o = i[t];
                this.sortData[t] = o(this.element, this);
            }
        }
    };
    var i = e.prototype.destroy;
    return e.prototype.destroy = function() {
        i.apply(this, arguments), this.css({
            display: ""
        });
    }, e;
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", [ "get-size/get-size", "outlayer/outlayer" ], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, 
    t.Isotope.LayoutMode = e(t.getSize, t.Outlayer));
}(window, function(e, n) {
    "use strict";
    function s(t) {
        (this.isotope = t) && (this.options = t.options[this.namespace], this.element = t.element, 
        this.items = t.filteredItems, this.size = t.size);
    }
    return function() {
        for (var t = [ "_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout" ], e = 0, i = t.length; e < i; e++) {
            var o = t[e];
            s.prototype[o] = function(t) {
                return function() {
                    return n.prototype[t].apply(this.isotope, arguments);
                };
            }(o);
        }
    }(), s.prototype.needsVerticalResizeLayout = function() {
        var t = e(this.isotope.element);
        return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight;
    }, s.prototype._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments);
    }, s.prototype.getColumnWidth = function() {
        this.getSegmentSize("column", "Width");
    }, s.prototype.getRowHeight = function() {
        this.getSegmentSize("row", "Height");
    }, s.prototype.getSegmentSize = function(t, e) {
        var i = t + e, o = "outer" + e;
        this._getMeasurement(i, o), this[i] || (t = this.getFirstItemSize(), this[i] = t && t[o] || this.isotope.size["inner" + e]);
    }, s.prototype.getFirstItemSize = function() {
        var t = this.isotope.filteredItems[0];
        return t && t.element && e(t.element);
    }, s.prototype.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments);
    }, s.prototype.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size;
    }, s.modes = {}, s.create = function(t, e) {
        function i() {
            s.apply(this, arguments);
        }
        return i.prototype = new s(), e && (i.options = e), s.modes[i.prototype.namespace = t] = i;
    }, s;
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("masonry/masonry", [ "outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils" ], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils);
}(window, function(t, a, c) {
    t = t.create("masonry");
    return t.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), 
        this.measureColumns();
        var t = this.cols;
        for (this.colYs = []; t--; ) this.colYs.push(0);
        this.maxY = 0;
    }, t.prototype.measureColumns = function() {
        this.getContainerWidth(), this.columnWidth || (i = (e = this.items[0]) && e.element, 
        this.columnWidth = i && a(i).outerWidth || this.containerWidth);
        var t = this.columnWidth += this.gutter, e = this.containerWidth + this.gutter, i = e / t, t = t - e % t, i = Math[t && t < 1 ? "round" : "floor"](i);
        this.cols = Math.max(i, 1);
    }, t.prototype.getContainerWidth = function() {
        var t = this.options.isFitWidth ? this.element.parentNode : this.element, t = a(t);
        this.containerWidth = t && t.innerWidth;
    }, t.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        for (var e = t.size.outerWidth % this.columnWidth, i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth), i = Math.min(i, this.cols), o = this._getColGroup(i), e = Math.min.apply(Math, o), n = c.indexOf(o, e), i = {
            x: this.columnWidth * n,
            y: e
        }, s = e + t.size.outerHeight, r = this.cols + 1 - o.length, a = 0; a < r; a++) this.colYs[n + a] = s;
        return i;
    }, t.prototype._getColGroup = function(t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) {
            var n = this.colYs.slice(o, o + t);
            e[o] = Math.max.apply(Math, n);
        }
        return e;
    }, t.prototype._manageStamp = function(t) {
        var e = a(t), i = this._getElementOffset(t), o = this.options.isOriginLeft ? i.left : i.right, t = o + e.outerWidth, o = Math.floor(o / this.columnWidth), o = Math.max(0, o), n = Math.floor(t / this.columnWidth);
        n -= t % this.columnWidth ? 0 : 1, n = Math.min(this.cols - 1, n);
        for (var s = (this.options.isOriginTop ? i.top : i.bottom) + e.outerHeight, r = o; r <= n; r++) this.colYs[r] = Math.max(s, this.colYs[r]);
    }, t.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t;
    }, t.prototype._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
    }, t.prototype.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t !== this.containerWidth;
    }, t;
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", [ "../layout-mode", "masonry/masonry" ], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry);
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry"), o = i.prototype._getElementOffset, n = i.prototype.layout, t = i.prototype._getMeasurement;
    !function(t, e) {
        for (var i in e) t[i] = e[i];
    }(i.prototype, e.prototype), i.prototype._getElementOffset = o, i.prototype.layout = n, 
    i.prototype._getMeasurement = t;
    var s = i.prototype.measureColumns;
    i.prototype.measureColumns = function() {
        this.items = this.isotope.filteredItems, s.call(this);
    };
    var r = i.prototype._manageStamp;
    return i.prototype._manageStamp = function() {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, 
        r.apply(this, arguments);
    }, i;
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", [ "../layout-mode" ], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function(t) {
    "use strict";
    t = t.create("fitRows");
    return t.prototype._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
    }, t.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        i = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, 
        i;
    }, t.prototype._getContainerSize = function() {
        return {
            height: this.maxY
        };
    }, t;
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", [ "../layout-mode" ], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function(t) {
    "use strict";
    t = t.create("vertical", {
        horizontalAlignment: 0
    });
    return t.prototype._resetLayout = function() {
        this.y = 0;
    }, t.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        };
    }, t.prototype._getContainerSize = function() {
        return {
            height: this.y
        };
    }, t;
}), function(r, a) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical" ], function(t, e, i, o, n, s) {
        return a(r, t, 0, i, o, n, s);
    }) : "object" == typeof exports ? module.exports = a(r, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : r.Isotope = a(r, r.Outlayer, r.getSize, r.matchesSelector, r.fizzyUIUtils, r.Isotope.Item, r.Isotope.LayoutMode);
}(window, function(t, o, e, i, s, n, r) {
    var a = t.jQuery, c = String.prototype.trim ? function(t) {
        return t.trim();
    } : function(t) {
        return t.replace(/^\s+|\s+$/g, "");
    }, l = document.documentElement.textContent ? function(t) {
        return t.textContent;
    } : function(t) {
        return t.innerText;
    }, d = o.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    });
    d.Item = n, d.LayoutMode = r, d.prototype._create = function() {
        for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), o.prototype._create.call(this), 
        this.modes = {}, this.filteredItems = this.items, this.sortHistory = [ "original-order" ], 
        r.modes) this._initLayoutMode(t);
    }, d.prototype.reloadItems = function() {
        this.itemGUID = 0, o.prototype.reloadItems.call(this);
    }, d.prototype._itemize = function() {
        for (var t = o.prototype._itemize.apply(this, arguments), e = 0, i = t.length; e < i; e++) {
            t[e].id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
    }, d.prototype._initLayoutMode = function(t) {
        var e = r.modes[t], i = this.options[t] || {};
        this.options[t] = e.options ? s.extend(e.options, i) : i, this.modes[t] = new e(this);
    }, d.prototype.layout = function() {
        this._isLayoutInited || !this.options.isInitLayout ? this._layout() : this.arrange();
    }, d.prototype._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), 
        this._isLayoutInited = !0;
    }, d.prototype.arrange = function(t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches;
        var i = this;
        function o() {
            i.reveal(e.needReveal), i.hide(e.needHide);
        }
        this._bindArrangeComplete(), this._isInstant ? this._noTransition(o) : o(), this._sort(), 
        this._layout();
    }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function() {
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        return this._isInstant = t;
    }, d.prototype._bindArrangeComplete = function() {
        var t, e, i, o = this;
        function n() {
            t && e && i && o.dispatchEvent("arrangeComplete", null, [ o.filteredItems ]);
        }
        this.once("layoutComplete", function() {
            t = !0, n();
        }), this.once("hideComplete", function() {
            e = !0, n();
        }), this.once("revealComplete", function() {
            i = !0, n();
        });
    }, d.prototype._filter = function(t) {
        for (var e = (e = this.options.filter) || "*", i = [], o = [], n = [], s = this._getFilterTest(e), r = 0, a = t.length; r < a; r++) {
            var c, l = t[r];
            l.isIgnored || ((c = s(l)) && i.push(l), c && l.isHidden ? o.push(l) : c || l.isHidden || n.push(l));
        }
        return {
            matches: i,
            needReveal: o,
            needHide: n
        };
    }, d.prototype._getFilterTest = function(e) {
        return a && this.options.isJQueryFiltering ? function(t) {
            return a(t.element).is(e);
        } : "function" == typeof e ? function(t) {
            return e(t.element);
        } : function(t) {
            return i(t.element, e);
        };
    }, d.prototype.updateSortData = function(t) {
        t = t ? (t = s.makeArray(t), this.getItems(t)) : this.items;
        this._getSorters(), this._updateItemsSortData(t);
    }, d.prototype._getSorters = function() {
        var t, e = this.options.getSortData;
        for (t in e) {
            var i = e[t];
            this._sorters[t] = p(i);
        }
    }, d.prototype._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            t[i].updateSortData();
        }
    };
    var p = function(t) {
        if ("string" != typeof t) return t;
        var e = c(t).split(" "), i = e[0], o = i.match(/^\[(.+)\]$/), n = function(e, i) {
            var t;
            t = e ? function(t) {
                return t.getAttribute(e);
            } : function(t) {
                t = t.querySelector(i);
                return t && l(t);
            };
            return t;
        }(o && o[1], i), s = d.sortDataParsers[e[1]];
        return t = s ? function(t) {
            return t && s(n(t));
        } : function(t) {
            return t && n(t);
        };
    };
    d.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10);
        },
        parseFloat: function(t) {
            return parseFloat(t);
        }
    }, d.prototype._sort = function() {
        var t, a, c, e = this.options.sortBy;
        e && (t = [].concat.apply(e, this.sortHistory), a = t, c = this.options.sortAscending, 
        t = function(t, e) {
            for (var i = 0, o = a.length; i < o; i++) {
                var n = a[i], s = t.sortData[n], r = e.sortData[n];
                if (r < s || s < r) return (r < s ? 1 : -1) * ((void 0 !== c[n] ? c[n] : c) ? 1 : -1);
            }
            return 0;
        }, this.filteredItems.sort(t), e != this.sortHistory[0] && this.sortHistory.unshift(e));
    }, d.prototype._mode = function() {
        var t = this.options.layoutMode, e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e;
    }, d.prototype._resetLayout = function() {
        o.prototype._resetLayout.call(this), this._mode()._resetLayout();
    }, d.prototype._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t);
    }, d.prototype._manageStamp = function(t) {
        this._mode()._manageStamp(t);
    }, d.prototype._getContainerSize = function() {
        return this._mode()._getContainerSize();
    }, d.prototype.needsResizeLayout = function() {
        return this._mode().needsResizeLayout();
    }, d.prototype.appended = function(t) {
        t = this.addItems(t);
        t.length && (t = this._filterRevealAdded(t), this.filteredItems = this.filteredItems.concat(t));
    }, d.prototype.prepended = function(t) {
        var e = this._itemize(t);
        e.length && (this._resetLayout(), this._manageStamps(), t = this._filterRevealAdded(e), 
        this.layoutItems(this.filteredItems), this.filteredItems = t.concat(this.filteredItems), 
        this.items = e.concat(this.items));
    }, d.prototype._filterRevealAdded = function(t) {
        t = this._filter(t);
        return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), 
        t.matches;
    }, d.prototype.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            for (var i, o = e.length, n = 0; n < o; n++) i = e[n], this.element.appendChild(i.element);
            t = this._filter(e).matches;
            for (n = 0; n < o; n++) e[n].isLayoutInstant = !0;
            for (this.arrange(), n = 0; n < o; n++) delete e[n].isLayoutInstant;
            this.reveal(t);
        }
    };
    var u = d.prototype.remove;
    return d.prototype.remove = function(t) {
        t = s.makeArray(t);
        var e = this.getItems(t);
        u.call(this, t);
        var i = e && e.length;
        if (i) for (var o = 0; o < i; o++) {
            var n = e[o];
            s.removeFrom(this.filteredItems, n);
        }
    }, d.prototype.shuffle = function() {
        for (var t = 0, e = this.items.length; t < e; t++) {
            this.items[t].sortData.random = Math.random();
        }
        this.options.sortBy = "random", this._sort(), this._layout();
    }, d.prototype._noTransition = function(t) {
        var e = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        t = t.call(this);
        return this.options.transitionDuration = e, t;
    }, d.prototype.getFilteredItemElements = function() {
        for (var t = [], e = 0, i = this.filteredItems.length; e < i; e++) t.push(this.filteredItems[e].element);
        return t;
    }, d;
}), function(M) {
    function b(t) {
        return t.split("").reverse().join("");
    }
    function t(t) {
        var e = t.elem;
        e.nodeType && e.parentNode && (e = (e = e._animateNumberSetter) || c.numberStep)(t.now, t);
    }
    var c = {
        numberStep: function(t, e) {
            t = Math.floor(t);
            M(e.elem).text(t);
        }
    };
    M.Tween && M.Tween.propHooks ? M.Tween.propHooks.number = {
        set: t
    } : M.fx.step.number = t, M.animateNumber = {
        numberStepFactories: {
            append: function(o) {
                return function(t, e) {
                    var i = Math.floor(t);
                    M(e.elem).prop("number", t).text(i + o);
                };
            },
            separator: function(u, h, f) {
                return u = u || " ", h = h || 3, f = f || "", function(t, e) {
                    var i = t < 0, o = Math.floor((i ? -1 : 1) * t).toString(), e = M(e.elem);
                    if (o.length > h) {
                        for (var n, s, r, a = o, c = h, l = a.split("").reverse(), o = [], d = 0, p = Math.ceil(a.length / c); d < p; d++) {
                            for (n = "", r = 0; r < c && (s = d * c + r) !== a.length; r++) n += l[s];
                            o.push(n);
                        }
                        a = o.length - 1, c = b(o[a]), o[a] = b(parseInt(c, 10).toString()), o = o.join(u), 
                        o = b(o);
                    }
                    e.prop("number", t).text((i ? "-" : "") + o + f);
                };
            }
        }
    }, M.fn.animateNumber = function() {
        for (var t, e, i = arguments[0], o = M.extend({}, c, i), n = M(this), s = [ o ], r = 1, a = arguments.length; r < a; r++) s.push(arguments[r]);
        return i.numberStep && (t = this.each(function() {
            this._animateNumberSetter = i.numberStep;
        }), e = o.complete, o.complete = function() {
            t.each(function() {
                delete this._animateNumberSetter;
            }), e && e.apply(this, arguments);
        }), n.animate.apply(n, s);
    };
}(jQuery), function(t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery);
}(function(p) {
    function u(t) {
        return f.raw ? t : encodeURIComponent(t);
    }
    function h(t, e) {
        t = f.raw ? t : function(t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return t = decodeURIComponent(t.replace(i, " ")), f.json ? JSON.parse(t) : t;
            } catch (t) {}
        }(t);
        return p.isFunction(e) ? e(t) : t;
    }
    var i = /\+/g, f = p.cookie = function(t, e, i) {
        var o, n;
        if (1 < arguments.length && !p.isFunction(e)) return "number" == typeof (i = p.extend({}, f.defaults, i)).expires && (n = i.expires, 
        (o = i.expires = new Date()).setTime(+o + 864e5 * n)), document.cookie = [ u(t), "=", (n = e, 
        u(f.json ? JSON.stringify(n) : String(n))), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : "" ].join("");
        for (var s = t ? void 0 : {}, r = document.cookie ? document.cookie.split("; ") : [], a = 0, c = r.length; a < c; a++) {
            var l = r[a].split("="), d = (d = l.shift(), f.raw ? d : decodeURIComponent(d)), l = l.join("=");
            if (t && t === d) {
                s = h(l, e);
                break;
            }
            t || void 0 === (l = h(l)) || (s[d] = l);
        }
        return s;
    };
    f.defaults = {}, p.removeCookie = function(t, e) {
        return void 0 !== p.cookie(t) && (p.cookie(t, "", p.extend({}, e, {
            expires: -1
        })), !p.cookie(t));
    };
}), function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : t(jQuery);
}(function(o) {
    "use strict";
    var n = [], e = [], s = {
        precision: 100,
        elapse: !1,
        defer: !1
    };
    e.push(/^[0-9]*$/.source), e.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), 
    e.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), e = new RegExp(e.join("|"));
    var d = {
        Y: "years",
        m: "months",
        n: "daysToMonth",
        d: "daysToWeek",
        w: "weeks",
        W: "weeksToMonth",
        H: "hours",
        M: "minutes",
        S: "seconds",
        D: "totalDays",
        I: "totalHours",
        N: "totalMinutes",
        T: "totalSeconds"
    };
    function i(l) {
        return function(t) {
            var e = t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (e) for (var i = 0, o = e.length; i < o; ++i) {
                var n = e[i].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/), s = (c = (c = n[0]).toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), 
                new RegExp(c)), r = n[1] || "", a = n[3] || "", c = null, n = n[2];
                d.hasOwnProperty(n) && (c = d[n], c = Number(l[c])), null !== c && ("!" === r && (c = function(t, e) {
                    var i = "s", o = "";
                    t && (t = t.replace(/(:|;|\s)/gi, "").split(/\,/), i = 1 === t.length ? t[0] : (o = t[0], 
                    t[1]));
                    return 1 < Math.abs(e) ? i : o;
                }(a, c)), "" === r && c < 10 && (c = "0" + c.toString()), t = t.replace(s, c.toString()));
            }
            return t = t.replace(/%%/, "%");
        };
    }
    function r(t, e, i) {
        this.el = t, this.$el = o(t), this.interval = null, this.offset = {}, this.options = o.extend({}, s), 
        this.instanceNumber = n.length, n.push(this), this.$el.data("countdown-instance", this.instanceNumber), 
        i && ("function" == typeof i ? (this.$el.on("update.countdown", i), this.$el.on("stoped.countdown", i), 
        this.$el.on("finish.countdown", i)) : this.options = o.extend({}, s, i)), this.setFinalDate(e), 
        !1 === this.options.defer && this.start();
    }
    o.extend(r.prototype, {
        start: function() {
            null !== this.interval && clearInterval(this.interval);
            var t = this;
            this.update(), this.interval = setInterval(function() {
                t.update.call(t);
            }, this.options.precision);
        },
        stop: function() {
            clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped");
        },
        toggle: function() {
            this.interval ? this.stop() : this.start();
        },
        pause: function() {
            this.stop();
        },
        resume: function() {
            this.start();
        },
        remove: function() {
            this.stop.call(this), n[this.instanceNumber] = null, delete this.$el.data().countdownInstance;
        },
        setFinalDate: function(t) {
            this.finalDate = function(t) {
                if (t instanceof Date) return t;
                if (String(t).match(e)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), 
                new Date(t);
                throw new Error("Couldn't cast `" + t + "` to a date object.");
            }(t);
        },
        update: function() {
            var t, e, i;
            0 !== this.$el.closest("html").length ? (t = void 0 !== o._data(this.el, "events"), 
            e = new Date(), i = this.finalDate.getTime() - e.getTime(), i = Math.ceil(i / 1e3), 
            i = !this.options.elapse && i < 0 ? 0 : Math.abs(i), this.totalSecsLeft !== i && t && (this.totalSecsLeft = i, 
            this.elapsed = e >= this.finalDate, this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                years: Math.abs(this.finalDate.getFullYear() - e.getFullYear()),
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                totalMinutes: Math.floor(this.totalSecsLeft / 60),
                totalSeconds: this.totalSecsLeft
            }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), 
            this.dispatchEvent("finish")))) : this.remove();
        },
        dispatchEvent: function(t) {
            t = o.Event(t + ".countdown");
            t.finalDate = this.finalDate, t.elapsed = this.elapsed, t.offset = o.extend({}, this.offset), 
            t.strftime = i(this.offset), this.$el.trigger(t);
        }
    }), o.fn.countdown = function() {
        var i = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var t, e = o(this).data("countdown-instance");
            void 0 !== e ? (t = n[e], e = i[0], r.prototype.hasOwnProperty(e) ? t[e].apply(t, i.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (t.setFinalDate.call(t, e), 
            t.start()) : o.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))) : new r(this, i[0], i[1]);
        });
    };
}), function(z) {
    window.fp_fadingEffectExtension = function() {
        function i(t, e) {
            e ? (r = !1, a.turnOff()) : (r = s.autoScrolling, a.turnOn());
        }
        var o, n, s, r, a = this, t = z.fn.fullpage.getFullpageData(), c = t.options, l = t.internals, e = c.scrollingSpeed, d = ".fullpage-wrapper", t = ".active", p = ".fp-section", u = p + t, h = ".fp-slide", f = "fp-fading-animations", M = "#" + f, b = "fp-fading-sheet", m = "#" + b;
        a.apply = function() {
            z(d).on("afterResponsive", i), s = z.extend(!0, {}, c), r = s.autoScrolling, c.scrollBar = !1, 
            a.isFadingPanel("sections") && z.fn.fullpage.setAutoScrolling(!0);
            var t = a.isFadingPanel("slides") ? a.getStyles(h) : "", e = a.isFadingPanel("sections") ? a.getStyles(p) : "";
            c.fadingEffect && a.appendStyleSheet(b, e + t), clearTimeout(n), n = setTimeout(a.applyAnimation, 300);
        }, a.isFadingPanel = function(t) {
            return !0 === c.fadingEffect || c.fadingEffect === t;
        }, a.appendStyleSheet = function(t, e) {
            z('<style id="' + t + '">' + e + "</style>").appendTo("head");
        }, a.applyAnimation = function() {
            o = a.getTransition();
            var t = a.isFadingPanel("slides") ? a.getPanelAnimation(h) : "", e = a.isFadingPanel("sections") ? a.getPanelAnimation(p) : "";
            a.appendStyleSheet(f, t + e);
        }, a.getPanelAnimation = function(t) {
            return t + "{-webkit-transition: " + o + ";transition: " + o + ";}";
        }, a.getStyles = function(t) {
            return a.getContainerStyles(t) + "" + a.getPanelStyles(t) + a.getActivePanelStyles(t);
        }, a.getContainerStyles = function(t) {
            return t === h ? ".fp-slidesContainer {width: 100% !important;transform: none!important;}" : "";
        }, a.getPanelStyles = function(t) {
            return t + "{width: 100% !important;position: absolute;left: 0;top: 0;visibility: hidden;opacity: 0;}";
        }, a.getActivePanelStyles = function(t) {
            return t + ".active{visibility: visible;opacity: 1;}";
        }, a.update = function(t) {
            z(M).remove(), e = t, a.applyAnimation();
        }, a.getTransition = function() {
            return "all " + e + "ms " + c.easingcss3;
        }, a.turnOff = function() {
            var t, e;
            z(m).length && (z(M).remove(), t = z(u).find(".fp-slide.active"), e = z(u).find(".fp-slidesContainer"), 
            l.removeAnimation(e), z(m).remove(), c.scrollBar = s.scrollBar, z.fn.fullpage.setAutoScrolling(r), 
            t.length && l.silentLandscapeScroll(t));
        }, a.turnOn = function() {
            z(m).length || (a.apply(), z("html,body").scrollTop(0), l.silentScroll(0));
        }, a.c = l.c;
        var g = a["common".charAt(0)];
        return "complete" === document.readyState && g("fadingEffect"), z(window).on("load", function() {
            g("fadingEffect");
        }), a;
    };
}(jQuery), function(e, i) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "jquery" ], function(t) {
        return i(t, e, e.document, e.Math);
    }) : "object" == typeof exports && exports ? module.exports = i(require("jquery"), e, e.document, e.Math) : i(jQuery, e, e.document, e.Math);
}("undefined" != typeof window ? window : this, function(Ae, ve, ye, Oe, Le) {
    "use strict";
    var Te = "fullpage-wrapper", we = "." + Te, t = "fp-scrollable", o = "." + t, qe = "fp-responsive", Ne = "fp-notransition", Se = "fp-destroyed", We = "fp-enabled", Ce = "fp-viewing", Be = "active", _e = "." + Be, Xe = "fp-completely", ke = "fp-section", Ee = "." + ke, xe = Ee + _e, De = "fp-tableCell", Re = "." + De, Pe = "#fp-nav", Ie = "fp-tooltip", $e = "fp-slide", He = "." + $e, Fe = He + _e, Ue = "fp-slides", je = "." + Ue, Ve = "fp-slidesContainer", Ye = "." + Ve, Ge = "fp-table", Qe = "fp-slidesNav", Ke = "." + Qe, Je = Ke + " a", e = "fp-controlArrow", Ze = "." + e, ti = "fp-prev", ei = Ze + ".fp-prev", ii = Ze + ".fp-next", oi = Ae(ve), ni = Ae(ye), si = {
        scrollbars: !0,
        mouseWheel: !0,
        hideScrollbars: !1,
        fadeScrollbars: !1,
        disableMouse: !0,
        interactiveScrollbars: !0
    };
    Ae.fn.fullpage = function(h) {
        function i(t, e) {
            t || qt(0), kt("autoScrolling", t, e);
            e = Ae(xe);
            h.autoScrolling && !h.scrollBar ? (Dt.css({
                overflow: "hidden",
                height: "100%"
            }), o(ae.recordHistory, "internal"), Vt.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), e.length && qt(e.position().top)) : (Dt.css({
                overflow: "visible",
                height: "initial"
            }), o(!1, "internal"), Vt.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), Wt(Vt), e.length && (console.log("llama scroll"), Dt.scrollTop(e.position().top), 
            console.log("fiunish scroll"))), Vt.trigger("setAutoScrolling", [ t ]);
        }
        function o(t, e) {
            kt("recordHistory", t, e);
        }
        function n(t, e) {
            "internal" !== e && h.fadingEffect && Pt.fadingEffect && Pt.fadingEffect.update(t), 
            kt("scrollingSpeed", t, e);
        }
        function s(t, e) {
            kt("fitToSection", t, e);
        }
        function e(t) {
            t ? (function() {
                var t, e = "";
                ve.addEventListener ? t = "addEventListener" : (t = "attachEvent", e = "on");
                var i = "onwheel" in ye.createElement("div") ? "wheel" : ye.onmousewheel !== Le ? "mousewheel" : "DOMMouseScroll";
                "DOMMouseScroll" == i ? ye[t](e + "MozMousePixelScroll", W, !1) : ye[t](e + i, W, !1);
            }(), Vt.on("mousedown", G).on("mouseup", Q)) : (ye.addEventListener ? (ye.removeEventListener("mousewheel", W, !1), 
            ye.removeEventListener("wheel", W, !1), ye.removeEventListener("MozMousePixelScroll", W, !1)) : ye.detachEvent("onmousewheel", W), 
            Vt.off("mousedown", G).off("mouseup", Q));
        }
        function r(i, t) {
            void 0 !== t ? (t = t.replace(/ /g, "").split(","), Ae.each(t, function(t, e) {
                St(i, e, "m");
            })) : i ? (e(!0), (Ut || jt) && (h.autoScrolling && Rt.off(re.touchmove).on(re.touchmove, L), 
            Ae(we).off(re.touchstart).on(re.touchstart, N).off(re.touchmove).on(re.touchmove, T))) : (e(!1), 
            (Ut || jt) && Ae(we).off(re.touchstart).off(re.touchmove));
        }
        function a(i, t) {
            void 0 !== t ? (t = t.replace(/ /g, "").split(","), Ae.each(t, function(t, e) {
                St(i, e, "k");
            })) : h.keyboardScrolling = i;
        }
        function c() {
            var t = Ae(xe).prev(Ee);
            t.length || !h.loopTop && !h.continuousVertical || (t = Ae(Ee).last()), t.length && X(t, null, !0);
        }
        function l() {
            var t = Ae(xe).next(Ee);
            t.length || !h.loopBottom && !h.continuousVertical || (t = Ae(Ee).first()), t.length && X(t, null, !1);
        }
        function d(t, e) {
            n(0, "internal"), p(t, e), n(ae.scrollingSpeed, "internal");
        }
        function p(t, e) {
            var i = mt(t);
            void 0 !== e ? gt(t, e) : 0 < i.length && X(i);
        }
        function u(t) {
            C("right", t);
        }
        function f(t) {
            C("left", t);
        }
        function M(t) {
            var e;
            Vt.hasClass(Se) || (Gt = !0, Yt = oi.height(), Ae(Ee).each(function() {
                var t = Ae(this).find(je), e = Ae(this).find(He);
                h.verticalCentered && Ae(this).find(Re).css("height", Mt(Ae(this)) + "px"), Ae(this).css("height", g(Ae(this)) + "px"), 
                h.scrollOverflow && (e.length ? e.each(function() {
                    ht(Ae(this));
                }) : ht(Ae(this))), 1 < e.length && it(t, t.find(Fe));
            }), (e = Ae(xe).index(Ee)) && d(e + 1), Gt = !1, Ae.isFunction(h.afterResize) && t && h.afterResize.call(Vt), 
            Ae.isFunction(h.afterReBuild) && !t && h.afterReBuild.call(Vt));
        }
        function b(t) {
            var e = Rt.hasClass(qe);
            t ? e || (i(!1, "internal"), s(!1, "internal"), Ae(Pe).hide(), Rt.addClass(qe), 
            Ae.isFunction(h.afterResponsive) && h.afterResponsive.call(Vt, t), h.responsiveSlides && Pt.responsiveSlides && Pt.responsiveSlides.toSections(), 
            Vt.trigger("afterResponsive", [ t ])) : e && (i(ae.autoScrolling, "internal"), s(ae.autoScrolling, "internal"), 
            Ae(Pe).show(), Rt.removeClass(qe), Ae.isFunction(h.afterResponsive) && h.afterResponsive.call(Vt, t), 
            h.responsiveSlides && Pt.responsiveSlides && Pt.responsiveSlides.toSlides(), Vt.trigger("afterResponsive", [ t ]));
        }
        function t(t) {
            var e = "fp_" + t + "Extension";
            ce[t] = h[t + "Key"], Pt[t] = void 0 !== ve[e] ? new ve[e]() : null, Pt[t] && Pt[t].c(t);
        }
        function m(t, e, i) {
            var o = 100 * i, n = 100 / i;
            e.wrapAll('<div class="' + Ve + '" />'), e.parent().wrap('<div class="' + Ue + '" />'), 
            t.find(Ye).css("width", o + "%"), 1 < i && (h.controlArrows && ((o = t).find(je).after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'), 
            "#fff" != h.controlArrowColor && (o.find(ii).css("border-color", "transparent transparent transparent " + h.controlArrowColor), 
            o.find(ei).css("border-color", "transparent " + h.controlArrowColor + " transparent transparent")), 
            h.loopHorizontal || o.find(ei).hide()), h.slidesNavigation && function(t, e) {
                t.append('<div class="' + Qe + '"><ul></ul></div>');
                var i = t.find(Ke);
                i.addClass(h.slidesNavPosition);
                for (var o = 0; o < e; o++) i.find("ul").append('<li><a href="#"><span></span></a></li>');
                i.css("margin-left", "-" + i.width() / 2 + "px"), i.find("li").first().find("a").addClass(Be);
            }(t, i)), e.each(function(t) {
                Ae(this).css("width", n + "%"), h.verticalCentered && ft(Ae(this));
            });
            t = t.find(Fe);
            t.length && (0 !== Ae(xe).index(Ee) || 0 === Ae(xe).index(Ee) && 0 !== t.index()) ? wt(t) : e.eq(0).addClass(Be);
        }
        function g(t) {
            return h.offsetSections && Pt.offsetSections ? Pt.offsetSections.getWindowHeight(t) : Yt;
        }
        function z() {
            Ae(Ee).each(function() {
                var t = Ae(this).find(He);
                t.length ? t.each(function() {
                    ht(Ae(this));
                }) : ht(Ae(this));
            }), A();
        }
        function A() {
            var t = Ae(xe);
            t.addClass(Xe), h.scrollOverflowHandler.afterRender && h.scrollOverflowHandler.afterRender(t), 
            E(t), x(t), h.scrollOverflowHandler.afterLoad(), Ae.isFunction(h.afterLoad) && h.afterLoad.call(t, t.data("anchor"), t.index(Ee) + 1), 
            Ae.isFunction(h.afterRender) && h.afterRender.call(Vt);
        }
        function v() {
            be || (requestAnimationFrame(y), be = !0);
        }
        function y() {
            if (Vt.trigger("onScroll"), (!h.autoScrolling || h.scrollBar || Ct("dragAndMove")) && !Xt()) {
                var t, e, i, o, n, s, r, a = Ct("dragAndMove") ? Oe.abs(Pt.dragAndMove.getCurrentScroll()) : oi.scrollTop(), c = (s = a, 
                me = s, 0), l = a + oi.height() / 2, d = (Ct("dragAndMove") ? Pt.dragAndMove.getDocumentHeight() : Rt.height() - oi.height()) === a, p = ye.querySelectorAll(Ee);
                if (d) c = p.length - 1; else if (a) for (var u = 0; u < p.length; ++u) {
                    p[u].offsetTop <= l && (c = u);
                } else c = 0;
                (r = Ae(p).eq(c)).hasClass(Be) || (le = !0, o = (i = Ae(xe)).index(Ee) + 1, n = pt(r), 
                s = r.data("anchor"), d = r.index(Ee) + 1, (a = r.find(Fe)).length && (e = a.data("anchor"), 
                t = a.index()), Kt && (r.addClass(Be).siblings().removeClass(Be), Bt("parallax", "afterLoad"), 
                Ae.isFunction(h.onLeave) && h.onLeave.call(i, o, d, n), Ae.isFunction(h.afterLoad) && h.afterLoad.call(r, s, d), 
                h.resetSliders && Pt.resetSliders && Pt.resetSliders.apply({
                    localIsResizing: Gt,
                    leavingSection: o
                }), R(i), E(r), x(r), dt(s, d - 1), h.anchors.length && (It = s), At(t, e, s)), 
                clearTimeout(oe), oe = setTimeout(function() {
                    le = !1;
                }, 100)), h.fitToSection && (clearTimeout(ne), ne = setTimeout(function() {
                    Kt && h.fitToSection && (Ae(xe).is(r) && (Gt = !0), X(Ae(xe)), Gt = !1);
                }, h.fitToSectionDelay));
            }
            be = !1;
        }
        function O(t, e) {
            if (Zt.m[t]) {
                var i = "down" === t ? "bottom" : "top", o = "down" === t ? l : c;
                if (Pt.scrollHorizontally && (o = Pt.scrollHorizontally.getScrollSection(t, o)), 
                0 < e.length) {
                    if (!h.scrollOverflowHandler.isScrolled(i, e)) return 1;
                    o();
                } else o();
            }
        }
        function L(t) {
            var e = t.originalEvent;
            !w(t.target) && h.autoScrolling && q(e) && t.preventDefault();
        }
        function T(t) {
            var e = t.originalEvent, i = Ae(e.target).closest(Ee);
            !w(t.target) && q(e) && (h.autoScrolling && t.preventDefault(), t = h.scrollOverflowHandler.scrollable(i), 
            e = Tt(e), ue = e.y, he = e.x, i.find(je).length && Oe.abs(pe - he) > Oe.abs(de - ue) ? !Ft && Oe.abs(pe - he) > oi.outerWidth() / 100 * h.touchSensitivity && (he < pe ? Zt.m.right && u(i) : Zt.m.left && f(i)) : h.autoScrolling && Kt && Oe.abs(de - ue) > oi.height() / 100 * h.touchSensitivity && (ue < de ? O("down", t) : de < ue && O("up", t)));
        }
        function w(t, e) {
            e = e || 0;
            t = Ae(t).parent();
            return !!(e < h.normalScrollElementTouchThreshold && t.is(h.normalScrollElements)) || e != h.normalScrollElementTouchThreshold && w(t, ++e);
        }
        function q(t) {
            return void 0 === t.pointerType || "mouse" != t.pointerType;
        }
        function N(t) {
            t = t.originalEvent;
            h.fitToSection && Dt.stop(), q(t) && (t = Tt(t), de = t.y, pe = t.x);
        }
        function S(t, e) {
            for (var i = 0, o = t.slice(Oe.max(t.length - e, 1)), n = 0; n < o.length; n++) i += o[n];
            return Oe.ceil(i / e);
        }
        function W(t) {
            var e = new Date().getTime(), i = Ae(".fp-completely").hasClass("fp-normal-scroll");
            if (h.autoScrolling && !Ht && !i) {
                var o = (t = t || ve.event).wheelDelta || -t.deltaY || -t.detail, n = Oe.max(-1, Oe.min(1, o)), i = void 0 !== t.wheelDeltaX || void 0 !== t.deltaX, i = Oe.abs(t.wheelDeltaX) < Oe.abs(t.wheelDelta) || Oe.abs(t.deltaX) < Oe.abs(t.deltaY) || !i;
                149 < Jt.length && Jt.shift(), Jt.push(Oe.abs(o)), h.scrollBar && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
                o = Ae(xe), t = h.scrollOverflowHandler.scrollable(o), o = e - Me;
                return Me = e, 200 < o && (Jt = []), Kt && !_t() && (o = S(Jt, 10), S(Jt, 70) <= o && i && O(n < 0 ? "down" : "up", t)), 
                !1;
            }
            h.fitToSection && Dt.stop();
        }
        function C(t, e) {
            var i = (void 0 === e ? Ae(xe) : e).find(je);
            if (!(!i.length || _t() || Ft || i.find(He).length < 2)) {
                var o = i.find(Fe), e = null;
                if (!(e = "left" === t ? o.prev(He) : o.next(He)).length) {
                    if (!h.loopHorizontal) return;
                    e = "left" === t ? o.siblings(":last") : o.siblings(":first");
                }
                Ft = !0, it(i, e, t);
            }
        }
        function B() {
            Ae(Fe).each(function() {
                wt(Ae(this), "internal");
            });
        }
        function _(t) {
            var e = t.position(), i = e.top, o = Ct("dragAndMove") && Pt.dragAndMove.isGrabbing ? Pt.dragAndMove.isScrollingDown() : e.top > me, n = i - Yt + t.outerHeight(), e = h.bigSectionsDestination;
            return t.outerHeight() > Yt ? (o || e) && "bottom" !== e || (i = n) : (o || Gt && t.is(":last-child")) && (i = n), 
            h.offsetSections && Pt.offsetSections && (i = Pt.offsetSections.getSectionPosition(o, i, t)), 
            me = i;
        }
        function X(t, e, i) {
            var o, n;
            void 0 !== t && t.length && ((e = {
                element: t,
                callback: e,
                isMovementUp: i,
                dtop: _(t),
                yMovement: pt(t),
                anchorLink: t.data("anchor"),
                sectionIndex: t.index(Ee),
                activeSlide: t.find(Fe),
                activeSection: Ae(xe),
                leavingSection: Ae(xe).index(Ee) + 1,
                localIsResizing: Gt
            }).activeSection.is(t) && !Gt || h.scrollBar && oi.scrollTop() === e.dtop && !t.hasClass("fp-auto-height") || (e.activeSlide.length && (o = e.activeSlide.data("anchor"), 
            n = e.activeSlide.index()), Bt("parallax", "apply", e), h.autoScrolling && h.continuousVertical && void 0 !== e.isMovementUp && (!e.isMovementUp && "up" == e.yMovement || e.isMovementUp && "down" == e.yMovement) && ((i = e).isMovementUp ? i.activeSection.before(i.activeSection.nextAll(Ee)) : i.activeSection.after(i.activeSection.prevAll(Ee).get().reverse()), 
            qt(Ae(xe).position().top), B(), i.wrapAroundElements = i.activeSection, i.dtop = i.element.position().top, 
            i.yMovement = pt(i.element), i.leavingSection = i.activeSection.index(Ee) + 1, i.sectionIndex = i.element.index(Ee), 
            Ae(we).trigger("onContinuousVertical", [ i ]), e = i), Ae.isFunction(h.onLeave) && !e.localIsResizing && !1 === h.onLeave.call(e.activeSection, e.leavingSection, e.sectionIndex + 1, e.yMovement) || (Ct("scrollOverflowReset") && Pt.scrollOverflowReset.setPrevious(e.activeSection), 
            R(e.activeSection), h.scrollOverflowHandler.beforeLeave(), t.addClass(Be).siblings().removeClass(Be), 
            E(t), h.scrollOverflowHandler.onLeave(), Kt = !1, At(n, o, e.anchorLink, e.sectionIndex), 
            function(t) {
                {
                    var e;
                    h.css3 && h.autoScrolling && !h.scrollBar ? (bt("translate3d(0px, -" + Oe.round(t.dtop) + "px, 0px)", !0), 
                    h.scrollingSpeed ? (clearTimeout(ee), ee = setTimeout(function() {
                        k(t);
                    }, h.scrollingSpeed)) : k(t)) : (e = function(t) {
                        var e = {};
                        return h.autoScrolling && !h.scrollBar ? (e.options = {
                            top: -t.dtop
                        }, e.element = we) : (e.options = {
                            scrollTop: t.dtop
                        }, e.element = "html, body"), e;
                    }(t), Ae(e.element).animate(e.options, h.scrollingSpeed, h.easing).promise().done(function() {
                        h.scrollBar ? setTimeout(function() {
                            k(t);
                        }, 30) : k(t);
                    }));
                }
            }(e), It = e.anchorLink, dt(e.anchorLink, e.sectionIndex))));
        }
        function k(t) {
            var e;
            (e = t).wrapAroundElements && e.wrapAroundElements.length && (e.isMovementUp ? Ae(".fp-section:first").before(e.wrapAroundElements) : Ae(".fp-section:last").after(e.wrapAroundElements), 
            qt(Ae(xe).position().top), B(), e.sectionIndex = e.element.index(Ee), e.leavingSection = e.activeSection.index(Ee) + 1), 
            Ae.isFunction(h.afterLoad) && !t.localIsResizing && h.afterLoad.call(t.element, t.anchorLink, t.sectionIndex + 1), 
            h.scrollOverflowHandler.afterLoad(), Bt("parallax", "afterLoad"), Ct("scrollOverflowReset") && Pt.scrollOverflowReset.reset(), 
            h.resetSliders && Pt.resetSliders && Pt.resetSliders.apply(t), t.localIsResizing || x(t.element), 
            t.element.addClass(Xe).siblings().removeClass(Xe), Kt = !0, Ae.isFunction(t.callback) && t.callback.call(this);
        }
        function E(t) {
            var e;
            h.lazyLoading && P(t).find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                (e = Ae(this)).attr("src", e.data("src")), e.removeAttr("data-src"), e.is("source") && e.closest("video").get(0).load();
            });
        }
        function x(t) {
            t = P(t);
            t.find("video, audio").each(function() {
                var t = Ae(this).get(0);
                t.hasAttribute("data-autoplay") && "function" == typeof t.play && t.play();
            }), t.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var t = Ae(this).get(0);
                t.hasAttribute("data-autoplay") && D(t), t.onload = function() {
                    t.hasAttribute("data-autoplay") && D(t);
                };
            });
        }
        function D(t) {
            t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
        }
        function R(t) {
            t = P(t);
            t.find("video, audio").each(function() {
                var t = Ae(this).get(0);
                t.hasAttribute("data-keepplaying") || "function" != typeof t.pause || t.pause();
            }), t.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var t = Ae(this).get(0);
                /youtube\.com\/embed\//.test(Ae(this).attr("src")) && !t.hasAttribute("data-keepplaying") && Ae(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            });
        }
        function P(t) {
            var e = t.find(Fe);
            return e.length && (t = Ae(e)), t;
        }
        function I(t) {
            function o(t) {
                var e, i, o, n, s, r = "", a = 0;
                for (t = t.replace(/[^A-Za-z0-9+\/=]/g, ""); a < t.length; ) e = c.indexOf(t.charAt(a++)) << 2 | (o = c.indexOf(t.charAt(a++))) >> 4, 
                i = (15 & o) << 4 | (n = c.indexOf(t.charAt(a++))) >> 2, o = (3 & n) << 6 | (s = c.indexOf(t.charAt(a++))), 
                r += String.fromCharCode(e), 64 != n && (r += String.fromCharCode(i)), 64 != s && (r += String.fromCharCode(o));
                return function(t) {
                    for (var e, i = "", o = 0, n = 0, s = 0; o < t.length; ) (n = t.charCodeAt(o)) < 128 ? (i += String.fromCharCode(n), 
                    o++) : 191 < n && n < 224 ? (s = t.charCodeAt(o + 1), i += String.fromCharCode((31 & n) << 6 | 63 & s), 
                    o += 2) : (s = t.charCodeAt(o + 1), e = t.charCodeAt(o + 2), i += String.fromCharCode((15 & n) << 12 | (63 & s) << 6 | 63 & e), 
                    o += 3);
                    return i;
                }(r);
            }
            function n(t) {
                return t.slice(3).slice(0, -3);
            }
            var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            return function(t) {
                var e = t.split("_");
                if (1 < e.length) {
                    var i = e[1];
                    return t.replace(n(e[1]), "").split("_")[0] + "_" + o(i.slice(3).slice(0, -3));
                }
                return n(t);
            }(o(t));
        }
        function $(t) {
            var e = function() {
                if (ye.domain.length) {
                    var t = ye.domain.replace(/^(www\.)/, "").split(".");
                    return (t.shift(), t.join(".")).replace(/(^\.*)|(\.*$)/g, "");
                }
                return "";
            }(), i = [ "localhost", "127.0.0.1", "jshell.net", "UDdDQU5ZNlNN" ], o = i[0], n = i[1], s = i[2], i = I(i[3]), n = [ o, n, s ].indexOf(e) < 0 && 0 !== e.length, s = void 0 !== ce[t] && ce[t].length;
            if (s || !n) {
                s = s ? I(ce[t]) : "", t = 1 < (s = s.split("_")).length && -1 < s[1].indexOf(t, s[1].length - t.length);
                return (!(s[0].indexOf(e, s[0].length - e.length) < 0) || !n || i == s[0]) && t || !n;
            }
        }
        function H(t) {
            var e = I("boobs"), i = Oe.random() < .5;
            $(t) || ((t = function() {
                "9999999" !== (i ? Rt.find("div").first() : Rt.find("div").last()).css("z-index") && (i ? Rt.prepend(e) : Rt.append(e));
            })(), setInterval(t, 2e3));
        }
        function F() {
            var t = ve.location.hash.replace("#", "").split("/"), e = decodeURIComponent(t[0]), t = decodeURIComponent(t[1]);
            e && (h.animateAnchor ? gt : d)(e, t);
        }
        function U() {
            var t, e, i, o;
            le || h.lockAnchors || (o = ve.location.hash.replace("#", "").split("/"), t = decodeURIComponent(o[0]), 
            e = decodeURIComponent(o[1]), o = (i = void 0 === It) && void 0 === e && !Ft, t.length && (t && t !== It && !i || o || !Ft && $t != e) && gt(t, e));
        }
        function j(t) {
            clearTimeout(se);
            var e = Ae(":focus");
            e.is("textarea") || e.is("input") || e.is("select") || "true" === e.attr("contentEditable") || "" === e.attr("contentEditable") || !h.keyboardScrolling || !h.autoScrolling || (e = t.which, 
            -1 < Ae.inArray(e, [ 40, 38, 32, 33, 34 ]) && t.preventDefault(), Ht = t.ctrlKey, 
            se = setTimeout(function() {
                !function(t) {
                    var e = t.shiftKey;
                    if (Kt || !([ 37, 39 ].indexOf(t.which) < 0)) switch (t.which) {
                      case 38:
                      case 33:
                        Zt.k.up && c();
                        break;

                      case 32:
                        if (e && Zt.k.up) {
                            c();
                            break;
                        }

                      case 40:
                      case 34:
                        Zt.k.down && l();
                        break;

                      case 36:
                        Zt.k.up && p(1);
                        break;

                      case 35:
                        Zt.k.down && p(Ae(Ee).length);
                        break;

                      case 37:
                        Zt.k.left && f();
                        break;

                      case 39:
                        Zt.k.right && u();
                        break;

                      default:
                        ;
                    }
                }(t);
            }, 150));
        }
        function V() {
            Ae(this).prev().trigger("click");
        }
        function Y(t) {
            Qt && (Ht = t.ctrlKey);
        }
        function G(t) {
            2 == t.which && (ge = t.pageY, Vt.on("mousemove", et));
        }
        function Q(t) {
            2 == t.which && Vt.off("mousemove");
        }
        function K() {
            var t = Ae(this).closest(Ee);
            Ae(this).hasClass(ti) ? Zt.m.left && f(t) : Zt.m.right && u(t);
        }
        function J() {
            Ht = Qt = !1;
        }
        function Z(t) {
            t.preventDefault();
            t = Ae(this).parent().index();
            X(Ae(Ee).eq(t));
        }
        function tt(t) {
            t.preventDefault();
            var e = Ae(this).closest(Ee).find(je), t = e.find(He).eq(Ae(this).closest("li").index());
            it(e, t);
        }
        function et(t) {
            Kt && (t.pageY < ge && Zt.m.up ? c() : t.pageY > ge && Zt.m.down && l()), ge = t.pageY;
        }
        function it(t, e, i) {
            var o = t.closest(Ee), i = {
                slides: t,
                destiny: e,
                direction: i,
                destinyPos: e.position(),
                slideIndex: e.index(),
                section: o,
                sectionIndex: o.index(Ee),
                anchorLink: o.data("anchor"),
                slidesNav: o.find(Ke),
                slideAnchor: yt(e),
                prevSlide: o.find(Fe),
                prevSlideIndex: o.find(Fe).index(),
                localIsResizing: Gt
            };
            return i.xMovement = ut(i.prevSlideIndex, i.slideIndex), i.localIsResizing || (Kt = !1), 
            Bt("parallax", "applyHorizontal", i), h.onSlideLeave && !i.localIsResizing && "none" !== i.xMovement && Ae.isFunction(h.onSlideLeave) && !1 === h.onSlideLeave.call(i.prevSlide, i.anchorLink, i.sectionIndex + 1, i.prevSlideIndex, i.xMovement, i.slideIndex) ? void (Ft = !1) : (e.addClass(Be).siblings().removeClass(Be), 
            i.localIsResizing || (R(i.prevSlide), E(e)), ot(i), o.hasClass(Be) && At(i.slideIndex, i.slideAnchor, i.anchorLink, i.sectionIndex), 
            Pt.continuousHorizontal && Pt.continuousHorizontal.apply(i), Xt() ? nt(i) : st(t, i, !0), 
            void (h.interlockedSlides && Pt.interlockedSlides && Pt.interlockedSlides.apply(i)));
        }
        function ot(t) {
            !h.loopHorizontal && h.controlArrows && (t.section.find(ei).toggle(0 !== t.slideIndex), 
            t.section.find(ii).toggle(!t.destiny.is(":last-child")));
        }
        function nt(t) {
            var e, i;
            Pt.continuousHorizontal && Pt.continuousHorizontal.afterSlideLoads(t), e = t.slidesNav, 
            i = t.slideIndex, e.find(_e).removeClass(Be), e.find("li").eq(i).find("a").addClass(Be), 
            t.localIsResizing || (Bt("parallax", "afterSlideLoads"), Ae.isFunction(h.afterSlideLoad) && h.afterSlideLoad.call(t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex), 
            Kt = !0, x(t.destiny)), Ft = !1, Pt.interlockedSlides && Pt.interlockedSlides.apply(t);
        }
        function st(t, e, i) {
            var o, n = e.destinyPos;
            h.css3 ? (o = "translate3d(-" + Oe.round(n.left) + "px, 0px, 0px)", ct(t.find(Ye)).css(Nt(o)), 
            ie = setTimeout(function() {
                i && nt(e);
            }, h.scrollingSpeed, h.easing)) : t.animate({
                scrollLeft: Oe.round(n.left)
            }, h.scrollingSpeed, h.easing, function() {
                i && nt(e);
            });
        }
        function rt() {
            var t;
            Vt.trigger("onResize"), at(), Ut ? (t = Ae(ye.activeElement)).is("textarea") || t.is("input") || t.is("select") || (t = oi.height(), 
            Oe.abs(t - ze) > 20 * Oe.max(ze, t) / 100 && (M(!0), ze = t)) : (clearTimeout(te), 
            te = setTimeout(function() {
                M(!0);
            }, 350));
        }
        function at() {
            var t = h.responsive || h.responsiveWidth, e = h.responsiveHeight, i = t && oi.outerWidth() < t, o = e && oi.height() < e;
            t && e ? b(i || o) : t ? b(i) : e && b(o);
        }
        function ct(t) {
            var e = "all " + h.scrollingSpeed + "ms " + h.easingcss3;
            return t.removeClass(Ne), t.css({
                "-webkit-transition": e,
                transition: e
            });
        }
        function lt(t) {
            return t.addClass(Ne);
        }
        function dt(t, e) {
            var i;
            i = t, h.menu && (Ae(h.menu).find(_e).removeClass(Be), Ae(h.menu).find('[data-menuanchor="' + i + '"]').addClass(Be)), 
            t = t, e = e, h.navigation && (Ae(Pe).find(_e).removeClass(Be), (t ? Ae(Pe).find('a[href="#' + t + '"]') : Ae(Pe).find("li").eq(e).find("a")).addClass(Be));
        }
        function pt(t) {
            var e = Ae(xe).index(Ee), t = t.index(Ee);
            return e == t ? "none" : t < e ? "up" : "down";
        }
        function ut(t, e) {
            return t == e ? "none" : e < t ? "left" : "right";
        }
        function ht(t) {
            var e, i, o, n, s;
            t.hasClass("fp-noscroll") || (t.css("overflow", "hidden"), o = (i = h.scrollOverflowHandler).wrapContent(), 
            s = t.closest(Ee), (n = i.scrollable(t)).length ? e = i.scrollHeight(t) : (e = t.get(0).scrollHeight, 
            h.verticalCentered && (e = t.find(Re).get(0).scrollHeight)), (s = Mt(s)) < e ? n.length ? i.update(t, s) : ((h.verticalCentered ? t.find(Re) : t).wrapInner(o), 
            i.create(t, s, h.scrollOverflowOptions)) : i.remove(t), t.css("overflow", ""));
        }
        function ft(t) {
            t.hasClass(Ge) || t.addClass(Ge).wrapInner('<div class="' + De + '" style="height:' + Mt(t) + 'px;" />');
        }
        function Mt(t) {
            var e, i = g(t);
            return (h.paddingTop || h.paddingBottom) && ((e = t).hasClass(ke) || (e = t.closest(Ee)), 
            e = parseInt(e.css("padding-top")) + parseInt(e.css("padding-bottom")), i = Yt - e), 
            i;
        }
        function bt(t, e) {
            (e ? ct : lt)(Vt), Vt.css(Nt(t)), setTimeout(function() {
                Vt.removeClass(Ne);
            }, 10);
        }
        function mt(t) {
            var e = Vt.find(Ee + '[data-anchor="' + t + '"]');
            return e.length || (e = Ae(Ee).eq(t - 1)), e;
        }
        function gt(t, e) {
            var i = mt(t);
            i.length && (void 0 === e && (e = 0), t === It || i.hasClass(Be) ? zt(i, e) : X(i, function() {
                zt(i, e);
            }));
        }
        function zt(t, e) {
            var i, o;
            void 0 !== e && (i = t.find(je), o = e, (e = (t = (e = t).find(je)).find(He + '[data-anchor="' + o + '"]')).length || (e = t.find(He).eq(o)), 
            (e = e).length && it(i, e));
        }
        function At(t, e, i) {
            var o = "";
            h.anchors.length && !h.lockAnchors && (t ? (void 0 !== i && (o = i), void 0 === e && (e = t), 
            vt(o + "/" + ($t = e))) : (void 0 !== t && ($t = e), vt(i))), Ot();
        }
        function vt(t) {
            var e;
            h.recordHistory ? location.hash = t : Ut || jt ? ve.history.replaceState(Le, Le, "#" + t) : (e = ve.location.href.split("#")[0], 
            ve.location.replace(e + "#" + t));
        }
        function yt(t) {
            var e = t.data("anchor"), t = t.index();
            return void 0 === e && (e = t), e;
        }
        function Ot() {
            var t = Ae(xe), e = t.find(Fe), i = yt(t), t = yt(e), i = String(i);
            e.length && (i = i + "-" + t), i = i.replace("/", "-").replace("#", "");
            t = new RegExp("\\b\\s?" + Ce + "-[^\\s]+\\b", "g");
            Rt[0].className = Rt[0].className.replace(t, ""), Rt.addClass(Ce + "-" + i);
        }
        function Lt() {
            return ve.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            };
        }
        function Tt(t) {
            var e = [];
            return e.y = (void 0 !== t.pageY && (t.pageY || t.pageX) ? t : t.touches[0]).pageY, 
            e.x = (void 0 !== t.pageX && (t.pageY || t.pageX) ? t : t.touches[0]).pageX, jt && q(t) && h.scrollBar && (e.y = t.touches[0].pageY, 
            e.x = t.touches[0].pageX), e;
        }
        function wt(t, e) {
            n(0, "internal"), void 0 !== e && (Gt = !0), it(t.closest(je), t), void 0 !== e && (Gt = !1), 
            n(ae.scrollingSpeed, "internal");
        }
        function qt(t) {
            t = Oe.round(t);
            h.css3 && h.autoScrolling && !h.scrollBar ? bt("translate3d(0px, -" + t + "px, 0px)", !1) : h.autoScrolling && !h.scrollBar ? Vt.css("top", -t) : Dt.scrollTop(t);
        }
        function Nt(t) {
            return {
                "-webkit-transform": t,
                "-moz-transform": t,
                "-ms-transform": t,
                transform: t
            };
        }
        function St(t, e, i) {
            switch (e) {
              case "up":
                Zt[i].up = t;
                break;

              case "down":
                Zt[i].down = t;
                break;

              case "left":
                Zt[i].left = t;
                break;

              case "right":
                Zt[i].right = t;
                break;

              case "all":
                ("m" == i ? r : a)(t);
            }
        }
        function Wt(t) {
            return t.css({
                "-webkit-transition": "none",
                transition: "none"
            });
        }
        function Ct(t) {
            return null !== h[t] && "object" == typeof h[t] ? h[t].enabled && Pt[t] : h[t] && Pt[t];
        }
        function Bt(t, e, i) {
            i = Array.isArray(i) ? i.join(", ") : i;
            Ct(t) && Pt[t][e](i);
        }
        function _t() {
            return Ct("dragAndMove") && Pt.dragAndMove.isAnimating;
        }
        function Xt() {
            return Ct("dragAndMove") && Pt.dragAndMove.isGrabbing;
        }
        function kt(t, e, i) {
            h[t] = e, "internal" !== i && (ae[t] = e);
        }
        function Et() {
            return Ae("html").hasClass(We) ? void xt("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (h.continuousVertical && (h.loopTop || h.loopBottom) && (h.continuousVertical = !1, 
            xt("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), 
            h.scrollBar && h.scrollOverflow && xt("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), 
            !h.continuousVertical || !h.scrollBar && h.autoScrolling || (h.continuousVertical = !1, 
            xt("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), 
            void Ae.each(h.anchors, function(t, e) {
                var i = ni.find("[name]").filter(function() {
                    return Ae(this).attr("name") && Ae(this).attr("name").toLowerCase() == e.toLowerCase();
                }), o = ni.find("[id]").filter(function() {
                    return Ae(this).attr("id") && Ae(this).attr("id").toLowerCase() == e.toLowerCase();
                });
                (o.length || i.length) && (xt("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), 
                o.length && xt("error", '"' + e + '" is is being used by another element `id` property'), 
                i.length && xt("error", '"' + e + '" is is being used by another element `name` property'));
            }));
        }
        function xt(t, e) {
            console && console[t] && console[t]("fullPage: " + e);
        }
        var Dt, Rt, Pt, It, $t, Ht, Ft, Ut, jt, Vt, Yt, Gt, Qt, Kt, Jt, Zt, te, ee, ie, oe, ne, se, re, ae, ce, le, de, pe, ue, he, fe, Me, be, me, ge, ze;
        Ae("html").hasClass(We) ? Et() : (Dt = Ae("html, body"), Rt = Ae("body"), Pt = Ae.fn.fullpage, 
        h = Ae.extend(!0, {
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 1e3,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !1,
            scrollHorizontally: !1,
            interlockedSlides: !1,
            dragAndMove: !1,
            offsetSections: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            scrollOverflowReset: !1,
            scrollOverflowHandler: ri,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            parallax: !1,
            parallaxOptions: {
                type: "reveal",
                percentage: 62,
                property: "translate"
            },
            sectionSelector: ".section",
            slideSelector: ".slide",
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,
            lazyLoading: !0
        }, h), Ft = !1, Ut = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/), 
        jt = "ontouchstart" in ve || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints, 
        Vt = Ae(this), Yt = oi.height(), (Zt = {
            m: {
                up: Kt = Qt = !(Gt = !(Jt = [])),
                down: !0,
                left: !0,
                right: !0
            }
        }).k = Ae.extend(!0, {}, Zt.m), fe = Lt(), re = {
            touchmove: "ontouchmove" in ve ? "touchmove" : fe.move,
            touchstart: "ontouchstart" in ve ? "touchstart" : fe.down
        }, ae = Ae.extend(!0, {}, h), ce = {}, Et(), si.click = jt, h.scrollOverflowOptions = Ae.extend(si, h.scrollOverflowOptions), 
        Ae.extend(Ae.easing, {
            easeInOutCubic: function(t, e, i, o, n) {
                return (e /= n / 2) < 1 ? o / 2 * e * e * e + i : o / 2 * ((e -= 2) * e * e + 2) + i;
            }
        }), Ae(this).length && (Pt.setAutoScrolling = i, Pt.setRecordHistory = o, Pt.setScrollingSpeed = n, 
        Pt.setFitToSection = s, Pt.setLockAnchors = function(t) {
            h.lockAnchors = t;
        }, Pt.setMouseWheelScrolling = e, Pt.setAllowScrolling = r, Pt.setKeyboardScrolling = a, 
        Pt.moveSectionUp = c, Pt.moveSectionDown = l, Pt.silentMoveTo = d, Pt.moveTo = p, 
        Pt.moveSlideRight = u, Pt.moveSlideLeft = f, Pt.reBuild = M, Pt.setResponsive = b, 
        Pt.getFullpageData = function() {
            return {
                options: h,
                internals: {
                    canScroll: Kt,
                    isScrollAllowed: Zt,
                    getDestinationPosition: _,
                    isTouch: jt,
                    c: H,
                    getXmovement: ut,
                    removeAnimation: lt,
                    getTransforms: Nt,
                    lazyLoad: E,
                    addAnimation: ct,
                    performHorizontalMove: st,
                    landscapeScroll: it,
                    silentLandscapeScroll: wt,
                    keepSlidesPosition: B,
                    silentScroll: qt,
                    styleSlides: m,
                    scrollHandler: v,
                    getEventsPage: Tt,
                    getMSPointer: Lt,
                    isReallyTouch: q,
                    checkParentForNormalScrollElement: w,
                    usingExtension: Ct,
                    toggleControlArrows: ot
                }
            };
        }, Pt.destroy = function(t) {
            Vt.trigger("destroy", [ t ]), i(!1, "internal"), r(!1), a(!1), Vt.addClass(Se), 
            clearTimeout(ie), clearTimeout(ee), clearTimeout(te), clearTimeout(oe), clearTimeout(ne), 
            oi.off("scroll", v).off("hashchange", U).off("resize", rt), ni.off("click touchstart", Pe + " a").off("mouseenter", Pe + " li").off("mouseleave", Pe + " li").off("click touchstart", Je).off("mouseover", h.normalScrollElements).off("mouseout", h.normalScrollElements), 
            Ae(Ee).off("click touchstart", Ze), Ct("dragAndMove") && Pt.dragAndMove.destroy(), 
            clearTimeout(ie), clearTimeout(ee), t && function() {
                qt(0), Vt.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                    Ae(this).attr("src", Ae(this).data("src")), Ae(this).removeAttr("data-src");
                }), Ae(Pe + ", " + Ke + ", " + Ze).remove(), Ae(Ee).css({
                    height: "",
                    "background-color": "",
                    padding: ""
                }), Ae(He).css({
                    width: ""
                }), Vt.css({
                    height: "",
                    position: "",
                    "-ms-touch-action": "",
                    "touch-action": ""
                }), Dt.css({
                    overflow: "",
                    height: ""
                }), Ae("html").removeClass(We), Rt.removeClass(qe), Ae.each(Rt.get(0).className.split(/\s+/), function(t, e) {
                    0 === e.indexOf(Ce) && Rt.removeClass(e);
                }), Ae(Ee + ", " + He).each(function() {
                    h.scrollOverflowHandler.remove(Ae(this)), Ae(this).removeClass(Ge + " " + Be);
                }), Wt(Vt), Vt.find(Re + ", " + Ye + ", " + je).each(function() {
                    Ae(this).replaceWith(this.childNodes);
                }), Dt.scrollTop(0);
                var t = [ ke, $e, Ve ];
                Ae.each(t, function(t, e) {
                    Ae("." + e).removeClass(e);
                });
            }();
        }, Pt.landscapeScroll = it, t("continuousHorizontal"), t("scrollHorizontally"), 
        t("resetSliders"), t("interlockedSlides"), t("responsiveSlides"), t("fadingEffect"), 
        t("dragAndMove"), t("offsetSections"), t("scrollOverflowReset"), t("parallax"), 
        Ct("dragAndMove") && Pt.dragAndMove.init(), function() {
            h.css3 && (h.css3 = function() {
                var t, e, i = ye.createElement("p"), o = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
                for (e in ye.body.insertBefore(i, null), o) i.style[e] !== Le && (i.style[e] = "translate3d(1px,1px,1px)", 
                t = ve.getComputedStyle(i).getPropertyValue(o[e]));
                return ye.body.removeChild(i), t !== Le && 0 < t.length && "none" !== t;
            }()), h.scrollBar = h.scrollBar || h.hybrid, t = Vt.find(h.sectionSelector), h.anchors.length || (h.anchors = t.filter("[data-anchor]").map(function() {
                return Ae(this).data("anchor").toString();
            }).get()), h.navigationTooltips.length || (h.navigationTooltips = t.filter("[data-tooltip]").map(function() {
                return Ae(this).data("tooltip").toString();
            }).get()), Vt.css({
                height: "100%",
                position: "relative"
            }), Vt.addClass(Te), Ae("html").addClass(We), Yt = oi.height(), Vt.removeClass(Se), 
            Vt.find(h.sectionSelector).addClass(ke), Vt.find(h.slideSelector).addClass($e), 
            Bt("parallax", "init"), Ae(Ee).each(function(t) {
                var e, i, o = Ae(this), n = o.find(He), s = n.length;
                e = o, (i = t) || 0 !== Ae(xe).length || e.addClass(Be), e.css("height", g(e) + "px"), 
                h.paddingTop && e.css("padding-top", h.paddingTop), h.paddingBottom && e.css("padding-bottom", h.paddingBottom), 
                void 0 !== h.sectionsColor[i] && e.css("background-color", h.sectionsColor[i]), 
                void 0 !== h.anchors[i] && e.attr("data-anchor", h.anchors[i]), i = o, t = t, void 0 !== h.anchors[t] && i.hasClass(Be) && dt(h.anchors[t], t), 
                h.menu && h.css3 && Ae(h.menu).closest(we).length && Ae(h.menu).appendTo(Rt), 0 < s ? m(o, n, s) : h.verticalCentered && ft(o);
            }), h.fixedElements && h.css3 && Ae(h.fixedElements).appendTo(Rt), h.navigation && function() {
                Rt.append('<div id="fp-nav"><ul></ul></div>');
                var t = Ae(Pe);
                t.addClass(function() {
                    return h.showActiveTooltip ? "fp-show-active " + h.navigationPosition : h.navigationPosition;
                });
                for (var e = 0; e < Ae(Ee).length; e++) {
                    var i = "";
                    h.anchors.length && (i = h.anchors[e]);
                    var o = '<li><a href="#' + i + '"><span></span></a>', i = h.navigationTooltips[e];
                    void 0 !== i && "" !== i && (o += '<div class="' + Ie + " " + h.navigationPosition + '">' + i + "</div>"), 
                    o += "</li>", t.find("ul").append(o);
                }
                Ae(Pe).css("margin-top", "-" + Ae(Pe).height() / 2 + "px"), Ae(Pe).find("li").eq(Ae(xe).index(Ee)).find("a").addClass(Be);
            }(), Vt.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var t, e, i;
                t = Ae(this), e = "enablejsapi=1", i = t.attr("src"), t.attr("src", i + function(t) {
                    return /\?/.test(t) ? "&" : "?";
                }(i) + e);
            }), h.fadingEffect && Pt.fadingEffect && Pt.fadingEffect.apply(), h.scrollOverflow ? ("complete" === ye.readyState && z(), 
            oi.on("load", z)) : A(), r(!0), i(h.autoScrolling, "internal");
            var t = Ae(xe).find(Fe);
            t.length && (0 !== Ae(xe).index(Ee) || 0 === Ae(xe).index(Ee) && 0 !== t.index()) && wt(t), 
            at(), Ot(), "complete" === ye.readyState && F(), oi.on("load", F);
        }(), oi.on("scroll", v).on("hashchange", U).blur(J).resize(rt), ni.keydown(j).keyup(Y).on("click touchstart", Pe + " a", Z).on("click touchstart", Je, tt).on("click", ".fp-tooltip", V), 
        Ae(Ee).on("click touchstart", Ze, K), h.normalScrollElements && (ni.on("mouseenter", h.normalScrollElements, function() {
            e(!1);
        }), ni.on("mouseleave", h.normalScrollElements, function() {
            e(!0);
        })), Ct("dragAndMove") && Pt.dragAndMove.turnOffTouch()), le = !1, he = ue = pe = de = 0, 
        fe = ve.requestAnimationFrame || ve.mozRequestAnimationFrame || ve.webkitRequestAnimationFrame || ve.msRequestAnimationFrame, 
        ve.requestAnimationFrame = fe, Me = new Date().getTime(), be = !1, ge = me = 0, 
        ze = Yt);
    }, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function() {
        this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), 
        this.wrapper.addEventListener("DOMMouseScroll", this);
    }, IScroll.prototype.wheelOff = function() {
        this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), 
        this.wrapper.removeEventListener("DOMMouseScroll", this);
    });
    var ri = {
        refreshId: null,
        iScrollInstances: [],
        toggleWheel: function(e) {
            Ae(xe).find(o).each(function() {
                var t = Ae(this).data("iscrollInstance");
                void 0 !== t && t && (e ? t.wheelOn() : t.wheelOff());
            });
        },
        onLeave: function() {
            ri.toggleWheel(!1);
        },
        beforeLeave: function() {
            ri.onLeave();
        },
        afterLoad: function() {
            ri.toggleWheel(!0);
        },
        create: function(t, e, i) {
            t = t.find(o);
            t.height(e), t.each(function() {
                var t = Ae(this), e = t.data("iscrollInstance");
                e && Ae.each(ri.iScrollInstances, function() {
                    Ae(this).destroy();
                }), (e = new IScroll(t.get(0), i)).on("scrollEnd", function() {
                    this.fp_isAtTop = -30 < this.y, this.fp_isAtEnd = this.y - this.maxScrollY < 30;
                }), ri.iScrollInstances.push(e), e.wheelOff(), t.data("iscrollInstance", e);
            });
        },
        isScrolled: function(t, e) {
            var i = e.data("iscrollInstance");
            return !i || ("top" === t ? 0 <= i.y && !e.scrollTop() : "bottom" === t ? 0 - i.y + e.scrollTop() + 1 + e.innerHeight() >= e[0].scrollHeight : void 0);
        },
        scrollable: function(t) {
            return (t.find(je).length ? t.find(Fe) : t).find(o);
        },
        scrollHeight: function(t) {
            return t.find(o).children().first().get(0).scrollHeight;
        },
        remove: function(t) {
            var e, i = t.find(o);
            i.length && ((e = i.data("iscrollInstance")) && e.destroy(), i.data("iscrollInstance", null)), 
            t.find(o).children().first().children().first().unwrap().unwrap();
        },
        update: function(t, e) {
            clearTimeout(ri.refreshId), ri.refreshId = setTimeout(function() {
                Ae.each(ri.iScrollInstances, function() {
                    Ae(this).get(0).refresh();
                });
            }, 150), t.find(o).css("height", e + "px").parent().css("height", e + "px");
        },
        wrapContent: function() {
            return '<div class="' + t + '"><div class="fp-scroller"></div></div>';
        }
    };
}), function(a) {
    a.extend(a, {
        placeholder: {
            browser_supported: function() {
                return void 0 !== this._supported ? this._supported : this._supported = !!("placeholder" in a('<input type="text">')[0]);
            },
            shim: function(t) {
                var e = {
                    color: "#888",
                    cls: "placeholder",
                    selector: "input[placeholder], textarea[placeholder]"
                };
                return a.extend(e, t), !this.browser_supported() && a(e.selector)._placeholder_shim(e);
            }
        }
    }), a.extend(a.fn, {
        _placeholder_shim: function(s) {
            function r(t) {
                var e = a(t).offsetParent().offset(), i = a(t).offset();
                return {
                    top: i.top - e.top,
                    left: i.left - e.left,
                    width: a(t).width()
                };
            }
            return this.each(function() {
                var t = a(this);
                if (t.is(":visible") && !t.val()) {
                    if (t.data("placeholder")) return t.data("placeholder").css(r(t)), !0;
                    var e = {};
                    t.is("textarea") || "auto" == t.css("height") || (e = {
                        lineHeight: t.css("height"),
                        whiteSpace: "nowrap"
                    });
                    var i = "border-box" === t.css("box-sizing"), o = t.is("textarea"), n = a("<label />").text(t.attr("placeholder")).addClass(s.cls).css(a.extend({
                        position: "absolute",
                        display: "inline",
                        float: "none",
                        overflow: "hidden",
                        textAlign: "left",
                        color: s.color,
                        cursor: "text",
                        paddingTop: !o && i ? "0" : t.css("padding-top"),
                        paddingRight: t.css("padding-right"),
                        paddingBottom: !o && i ? "0" : t.css("padding-bottom"),
                        paddingLeft: t.css("padding-left"),
                        fontSize: t.css("font-size"),
                        fontFamily: t.css("font-family"),
                        fontStyle: t.css("font-style"),
                        fontWeight: t.css("font-weight"),
                        textTransform: t.css("text-transform"),
                        backgroundColor: "transparent",
                        zIndex: 15
                    }, e)).css(r(this)).attr("for", this.id).data("target", t).click(function() {
                        a(this).data("target").is(":disabled") || a(this).data("target").focus();
                    }).insertBefore(this);
                    t.data("placeholder", n).on("keydown", function() {
                        n.hide();
                    }).on("blur change", function() {
                        n[t.val().length ? "hide" : "show"]();
                    }), a(window).one("resize", function() {
                        !function t(e) {
                            var i = e.data("target");
                            void 0 !== i && (e.css(r(i)), a(window).one("resize", function() {
                                t(e);
                            }));
                        }(n);
                    });
                }
            });
        }
    });
}(jQuery), jQuery(document).add(window).bind("ready load", function() {
    jQuery.placeholder && jQuery.placeholder.shim();
}), function(e, i) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", [ "jquery" ], function(t) {
        i(e, t);
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery);
}(window, function(t, e) {
    function i(c, l, d) {
        (d = d || e || t.jQuery) && (l.prototype.option || (l.prototype.option = function(t) {
            d.isPlainObject(t) && (this.options = d.extend(!0, this.options, t));
        }), d.fn[c] = function(t) {
            if ("string" != typeof t) return a = t, this.each(function(t, e) {
                var i = d.data(e, c);
                i ? (i.option(a), i._init()) : (i = new l(e, a), d.data(e, c, i));
            }), this;
            var o, n, s, r, a, e = p.call(arguments, 1);
            return n = e, r = "$()." + c + '("' + (o = t) + '")', (t = this).each(function(t, e) {
                var i = d.data(e, c);
                i ? (e = i[o]) && "_" != o.charAt(0) ? (i = e.apply(i, n), s = void 0 === s ? i : s) : u(r + " is not a valid method") : u(c + " not initialized. Cannot call methods, i.e. " + r);
            }), void 0 !== s ? s : t;
        }, o(d));
    }
    function o(t) {
        !t || t && t.bridget || (t.bridget = i);
    }
    var p = Array.prototype.slice, n = t.console, u = void 0 === n ? function() {} : function(t) {
        n.error(t);
    };
    return o(e || t.jQuery), i;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", [], e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e();
}(window, function() {
    function h(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    function f(t) {
        t = getComputedStyle(t);
        return t || e("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), 
        t;
    }
    function M(t) {
        if (z || (z = !0, (u = document.createElement("div")).style.width = "200px", u.style.padding = "1px 2px 3px 4px", 
        u.style.borderStyle = "solid", u.style.borderWidth = "1px 2px 3px 4px", u.style.boxSizing = "border-box", 
        (p = document.body || document.documentElement).appendChild(u), d = f(u), M.isBoxSizeOuter = b = 200 == h(d.width), 
        p.removeChild(u)), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
            var e = f(t);
            if ("none" == e.display) return function() {
                for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; e < g; e++) {
                    t[m[e]] = 0;
                }
                return t;
            }();
            var i = {};
            i.width = t.offsetWidth, i.height = t.offsetHeight;
            for (var o = i.isBorderBox = "border-box" == e.boxSizing, n = 0; n < g; n++) {
                var s = m[n], r = e[s], r = parseFloat(r);
                i[s] = isNaN(r) ? 0 : r;
            }
            var a = i.paddingLeft + i.paddingRight, c = i.paddingTop + i.paddingBottom, l = i.marginLeft + i.marginRight, d = i.marginTop + i.marginBottom, p = i.borderLeftWidth + i.borderRightWidth, u = i.borderTopWidth + i.borderBottomWidth, t = o && b, o = h(e.width);
            !1 !== o && (i.width = o + (t ? 0 : a + p));
            o = h(e.height);
            return !1 !== o && (i.height = o + (t ? 0 : c + u)), i.innerWidth = i.width - (a + p), 
            i.innerHeight = i.height - (c + u), i.outerWidth = i.width + l, i.outerHeight = i.height + d, 
            i;
        }
        var u, p, d;
    }
    var b, e = "undefined" == typeof console ? function() {} : function(t) {
        console.error(t);
    }, m = [ "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth" ], g = m.length, z = !1;
    return M;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, t = i[t] = i[t] || [];
            return -1 == t.indexOf(e) && t.push(e), this;
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this;
        }
    }, e.off = function(t, e) {
        t = this._events && this._events[t];
        if (t && t.length) {
            e = t.indexOf(e);
            return -1 != e && t.splice(e, 1), this;
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = 0, n = i[o];
            e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t]; n; ) {
                var r = s && s[n];
                r && (this.off(t, n), delete s[n]), n.apply(this, e), n = i[o += r ? 0 : 1];
            }
            return this;
        }
    }, t;
}), function(e, i) {
    "function" == typeof define && define.amd ? define("unipointer/unipointer", [ "ev-emitter/ev-emitter" ], function(t) {
        return i(e, t);
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.Unipointer = i(e, e.EvEmitter);
}(window, function(i, t) {
    function e() {}
    t = e.prototype = Object.create(t.prototype);
    t.bindStartEvent = function(t) {
        this._bindStartEvent(t, !0);
    }, t.unbindStartEvent = function(t) {
        this._bindStartEvent(t, !1);
    }, t._bindStartEvent = function(t, e) {
        e = (e = void 0 === e || !!e) ? "addEventListener" : "removeEventListener";
        i.navigator.pointerEnabled ? t[e]("pointerdown", this) : i.navigator.msPointerEnabled ? t[e]("MSPointerDown", this) : (t[e]("mousedown", this), 
        t[e]("touchstart", this));
    }, t.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
    }, t.getTouch = function(t) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (i.identifier == this.pointerIdentifier) return i;
        }
    }, t.onmousedown = function(t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this._pointerDown(t, t);
    }, t.ontouchstart = function(t) {
        this._pointerDown(t, t.changedTouches[0]);
    }, t.onMSPointerDown = t.onpointerdown = function(t) {
        this._pointerDown(t, t);
    }, t._pointerDown = function(t, e) {
        this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, 
        this.pointerDown(t, e));
    }, t.pointerDown = function(t, e) {
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [ t, e ]);
    };
    var o = {
        mousedown: [ "mousemove", "mouseup" ],
        touchstart: [ "touchmove", "touchend", "touchcancel" ],
        pointerdown: [ "pointermove", "pointerup", "pointercancel" ],
        MSPointerDown: [ "MSPointerMove", "MSPointerUp", "MSPointerCancel" ]
    };
    return t._bindPostStartEvents = function(t) {
        t && ((t = o[t.type]).forEach(function(t) {
            i.addEventListener(t, this);
        }, this), this._boundPointerEvents = t);
    }, t._unbindPostStartEvents = function() {
        this._boundPointerEvents && (this._boundPointerEvents.forEach(function(t) {
            i.removeEventListener(t, this);
        }, this), delete this._boundPointerEvents);
    }, t.onmousemove = function(t) {
        this._pointerMove(t, t);
    }, t.onMSPointerMove = t.onpointermove = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
    }, t.ontouchmove = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e);
    }, t._pointerMove = function(t, e) {
        this.pointerMove(t, e);
    }, t.pointerMove = function(t, e) {
        this.emitEvent("pointerMove", [ t, e ]);
    }, t.onmouseup = function(t) {
        this._pointerUp(t, t);
    }, t.onMSPointerUp = t.onpointerup = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
    }, t.ontouchend = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e);
    }, t._pointerUp = function(t, e) {
        this._pointerDone(), this.pointerUp(t, e);
    }, t.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [ t, e ]);
    }, t._pointerDone = function() {
        this.isPointerDown = !1, delete this.pointerIdentifier, this._unbindPostStartEvents(), 
        this.pointerDone();
    }, t.pointerDone = function() {}, t.onMSPointerCancel = t.onpointercancel = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
    }, t.ontouchcancel = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e);
    }, t._pointerCancel = function(t, e) {
        this._pointerDone(), this.pointerCancel(t, e);
    }, t.pointerCancel = function(t, e) {
        this.emitEvent("pointerCancel", [ t, e ]);
    }, e.getPointerPoint = function(t) {
        return {
            x: t.pageX,
            y: t.pageY
        };
    }, e;
}), function(e, i) {
    "function" == typeof define && define.amd ? define("unidragger/unidragger", [ "unipointer/unipointer" ], function(t) {
        return i(e, t);
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("unipointer")) : e.Unidragger = i(e, e.Unipointer);
}(window, function(t, o) {
    function s() {}
    function e() {}
    var i = e.prototype = Object.create(o.prototype);
    i.bindHandles = function() {
        this._bindHandles(!0);
    }, i.unbindHandles = function() {
        this._bindHandles(!1);
    };
    var r = t.navigator;
    return i._bindHandles = function(e) {
        var t;
        e = void 0 === e || !!e, t = r.pointerEnabled ? function(t) {
            t.style.touchAction = e ? "none" : "";
        } : r.msPointerEnabled ? function(t) {
            t.style.msTouchAction = e ? "none" : "";
        } : s;
        for (var i = e ? "addEventListener" : "removeEventListener", o = 0; o < this.handles.length; o++) {
            var n = this.handles[o];
            this._bindStartEvent(n, e), t(n), n[i]("click", this);
        }
    }, i.pointerDown = function(t, e) {
        if ("INPUT" == t.target.nodeName && "range" == t.target.type) return this.isPointerDown = !1, 
        void delete this.pointerIdentifier;
        this._dragPointerDown(t, e);
        var i = document.activeElement;
        i && i.blur && i.blur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [ t, e ]);
    }, i._dragPointerDown = function(t, e) {
        this.pointerDownPoint = o.getPointerPoint(e), this.canPreventDefaultOnPointerDown(t, e) && t.preventDefault();
    }, i.canPreventDefaultOnPointerDown = function(t) {
        return "SELECT" != t.target.nodeName;
    }, i.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [ t, e, i ]), this._dragMove(t, e, i);
    }, i._dragPointerMove = function(t, e) {
        var i = o.getPointerPoint(e), i = {
            x: i.x - this.pointerDownPoint.x,
            y: i.y - this.pointerDownPoint.y
        };
        return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i;
    }, i.hasDragStarted = function(t) {
        return 3 < Math.abs(t.x) || 3 < Math.abs(t.y);
    }, i.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [ t, e ]), this._dragPointerUp(t, e);
    }, i._dragPointerUp = function(t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
    }, i._dragStart = function(t, e) {
        this.isDragging = !0, this.dragStartPoint = o.getPointerPoint(e), this.isPreventingClicks = !0, 
        this.dragStart(t, e);
    }, i.dragStart = function(t, e) {
        this.emitEvent("dragStart", [ t, e ]);
    }, i._dragMove = function(t, e, i) {
        this.isDragging && this.dragMove(t, e, i);
    }, i.dragMove = function(t, e, i) {
        t.preventDefault(), this.emitEvent("dragMove", [ t, e, i ]);
    }, i._dragEnd = function(t, e) {
        this.isDragging = !1, setTimeout(function() {
            delete this.isPreventingClicks;
        }.bind(this)), this.dragEnd(t, e);
    }, i.dragEnd = function(t, e) {
        this.emitEvent("dragEnd", [ t, e ]);
    }, i.onclick = function(t) {
        this.isPreventingClicks && t.preventDefault();
    }, i._staticClick = function(t, e) {
        var i;
        this.isIgnoringMouseUp && "mouseup" == t.type || ("INPUT" != (i = t.target.nodeName) && "TEXTAREA" != i || t.target.focus(), 
        this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
            delete this.isIgnoringMouseUp;
        }.bind(this), 400)));
    }, i.staticClick = function(t, e) {
        this.emitEvent("staticClick", [ t, e ]);
    }, e.getPointerPoint = o.getPointerPoint, e;
}), function(i, o) {
    "function" == typeof define && define.amd ? define([ "get-size/get-size", "unidragger/unidragger" ], function(t, e) {
        return o(i, t, e);
    }) : "object" == typeof module && module.exports ? module.exports = o(i, require("get-size"), require("unidragger")) : i.Draggabilly = o(i, i.getSize, i.Unidragger);
}(window, function(n, r, t) {
    function i(t, e) {
        for (var i in e) t[i] = e[i];
        return t;
    }
    function e(t, e) {
        this.element = "string" == typeof t ? c.querySelector(t) : t, d && (this.$element = d(this.element)), 
        this.options = i({}, this.constructor.defaults), this.option(e), this._create();
    }
    function a(t, e, i) {
        return i = i || "round", e ? Math[i](t / e) * e : t;
    }
    var c = n.document, o = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame, s = 0, o = o || function(t) {
        var e = new Date().getTime(), i = Math.max(0, 16 - (e - s)), t = setTimeout(t, i);
        return s = e + i, t;
    }, l = "string" == typeof c.documentElement.style.transform ? "transform" : "WebkitTransform", d = n.jQuery, t = e.prototype = Object.create(t.prototype);
    e.defaults = {}, t.option = function(t) {
        i(this.options, t);
    };
    var p = {
        relative: !0,
        absolute: !0,
        fixed: !0
    };
    return t._create = function() {
        this.position = {}, this._getPosition(), this.startPoint = {
            x: 0,
            y: 0
        }, this.dragPoint = {
            x: 0,
            y: 0
        }, this.startPosition = i({}, this.position);
        var t = getComputedStyle(this.element);
        p[t.position] || (this.element.style.position = "relative"), this.enable(), this.setHandles();
    }, t.setHandles = function() {
        this.handles = this.options.handle ? this.element.querySelectorAll(this.options.handle) : [ this.element ], 
        this.bindHandles();
    }, t.dispatchEvent = function(t, e, i) {
        var o = [ e ].concat(i);
        this.emitEvent(t, o);
        o = n.jQuery;
        o && this.$element && (e ? ((e = o.Event(e)).type = t, this.$element.trigger(e, i)) : this.$element.trigger(t, i));
    }, t._getPosition = function() {
        var t = getComputedStyle(this.element), e = this._getPositionCoord(t.left, "width"), i = this._getPositionCoord(t.top, "height");
        this.position.x = isNaN(e) ? 0 : e, this.position.y = isNaN(i) ? 0 : i, this._addTransformPosition(t);
    }, t._getPositionCoord = function(t, e) {
        if (-1 == t.indexOf("%")) return parseInt(t, 10);
        var i = r(this.element.parentNode);
        return i ? parseFloat(t) / 100 * i[e] : 0;
    }, t._addTransformPosition = function(t) {
        var e, i = t[l];
        0 === i.indexOf("matrix") && (e = i.split(","), t = 0 === i.indexOf("matrix3d") ? 12 : 4, 
        i = parseInt(e[t], 10), t = parseInt(e[1 + t], 10), this.position.x += i, this.position.y += t);
    }, t.pointerDown = function(t, e) {
        this._dragPointerDown(t, e);
        var i = c.activeElement;
        i && i.blur && i != c.body && i.blur(), this._bindPostStartEvents(t), this.element.classList.add("is-pointer-down"), 
        this.dispatchEvent("pointerDown", t, [ e ]);
    }, t.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [ e, i ]), this._dragMove(t, e, i);
    }, t.dragStart = function(t, e) {
        this.isEnabled && (this._getPosition(), this.measureContainment(), this.startPosition.x = this.position.x, 
        this.startPosition.y = this.position.y, this.setLeftTop(), this.dragPoint.x = 0, 
        this.dragPoint.y = 0, this.element.classList.add("is-dragging"), this.dispatchEvent("dragStart", t, [ e ]), 
        this.animate());
    }, t.measureContainment = function() {
        var t, e, i, o, n, s = this.options.containment;
        s && (o = s instanceof HTMLElement ? s : "string" == typeof s ? c.querySelector(s) : this.element.parentNode, 
        t = r(this.element), e = r(o), i = this.element.getBoundingClientRect(), n = o.getBoundingClientRect(), 
        s = e.borderLeftWidth + e.borderRightWidth, o = e.borderTopWidth + e.borderBottomWidth, 
        n = this.relativeStartPosition = {
            x: i.left - (n.left + e.borderLeftWidth),
            y: i.top - (n.top + e.borderTopWidth)
        }, this.containSize = {
            width: e.width - s - n.x - t.width,
            height: e.height - o - n.y - t.height
        });
    }, t.dragMove = function(t, e, i) {
        var o, n, s, r;
        this.isEnabled && (s = i.x, r = i.y, o = (n = this.options.grid) && n[0], n = n && n[1], 
        s = a(s, o), r = a(r, n), s = this.containDrag("x", s, o), r = this.containDrag("y", r, n), 
        s = "y" == this.options.axis ? 0 : s, r = "x" == this.options.axis ? 0 : r, this.position.x = this.startPosition.x + s, 
        this.position.y = this.startPosition.y + r, this.dragPoint.x = s, this.dragPoint.y = r, 
        this.dispatchEvent("dragMove", t, [ e, i ]));
    }, t.containDrag = function(t, e, i) {
        if (!this.options.containment) return e;
        var o = "x" == t ? "width" : "height", t = a(-this.relativeStartPosition[t], i, "ceil"), o = a(o = this.containSize[o], i, "floor");
        return Math.min(o, Math.max(t, e));
    }, t.pointerUp = function(t, e) {
        this.element.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [ e ]), 
        this._dragPointerUp(t, e);
    }, t.dragEnd = function(t, e) {
        this.isEnabled && (l && (this.element.style[l] = "", this.setLeftTop()), this.element.classList.remove("is-dragging"), 
        this.dispatchEvent("dragEnd", t, [ e ]));
    }, t.animate = function() {
        var t;
        this.isDragging && (this.positionDrag(), t = this, o(function() {
            t.animate();
        }));
    }, t.setLeftTop = function() {
        this.element.style.left = this.position.x + "px", this.element.style.top = this.position.y + "px";
    }, t.positionDrag = function() {
        this.element.style[l] = "translate3d( " + this.dragPoint.x + "px, " + this.dragPoint.y + "px, 0)";
    }, t.staticClick = function(t, e) {
        this.dispatchEvent("staticClick", t, [ e ]);
    }, t.enable = function() {
        this.isEnabled = !0;
    }, t.disable = function() {
        this.isEnabled = !1, this.isDragging && this.dragEnd();
    }, t.destroy = function() {
        this.disable(), this.element.style[l] = "", this.element.style.left = "", this.element.style.top = "", 
        this.element.style.position = "", this.unbindHandles(), this.$element && this.$element.removeData("draggabilly");
    }, t._init = function() {}, d && d.bridget && d.bridget("draggabilly", e), e;
}), function(e, i) {
    "use strict";
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", [ "jquery" ], function(t) {
        i(e, t);
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery);
}(window, function(t, e) {
    "use strict";
    function i(c, l, d) {
        (d = d || e || t.jQuery) && (l.prototype.option || (l.prototype.option = function(t) {
            d.isPlainObject(t) && (this.options = d.extend(!0, this.options, t));
        }), d.fn[c] = function(t) {
            if ("string" != typeof t) return a = t, this.each(function(t, e) {
                var i = d.data(e, c);
                i ? (i.option(a), i._init()) : (i = new l(e, a), d.data(e, c, i));
            }), this;
            var o, n, s, r, a, e = p.call(arguments, 1);
            return n = e, r = "$()." + c + '("' + (o = t) + '")', (t = this).each(function(t, e) {
                var i = d.data(e, c);
                i ? (e = i[o]) && "_" != o.charAt(0) ? (i = e.apply(i, n), s = void 0 === s ? i : s) : u(r + " is not a valid method") : u(c + " not initialized. Cannot call methods, i.e. " + r);
            }), void 0 !== s ? s : t;
        }, o(d));
    }
    function o(t) {
        !t || t && t.bridget || (t.bridget = i);
    }
    var p = Array.prototype.slice, n = t.console, u = void 0 === n ? function() {} : function(t) {
        n.error(t);
    };
    return o(e || t.jQuery), i;
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e();
}(window, function() {
    "use strict";
    function h(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    function f(t) {
        t = getComputedStyle(t);
        return t || e("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), 
        t;
    }
    function M(t) {
        if (z || (z = !0, (u = document.createElement("div")).style.width = "200px", u.style.padding = "1px 2px 3px 4px", 
        u.style.borderStyle = "solid", u.style.borderWidth = "1px 2px 3px 4px", u.style.boxSizing = "border-box", 
        (p = document.body || document.documentElement).appendChild(u), d = f(u), M.isBoxSizeOuter = b = 200 == h(d.width), 
        p.removeChild(u)), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
            var e = f(t);
            if ("none" == e.display) return function() {
                for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; e < g; e++) {
                    t[m[e]] = 0;
                }
                return t;
            }();
            var i = {};
            i.width = t.offsetWidth, i.height = t.offsetHeight;
            for (var o = i.isBorderBox = "border-box" == e.boxSizing, n = 0; n < g; n++) {
                var s = m[n], r = e[s], r = parseFloat(r);
                i[s] = isNaN(r) ? 0 : r;
            }
            var a = i.paddingLeft + i.paddingRight, c = i.paddingTop + i.paddingBottom, l = i.marginLeft + i.marginRight, d = i.marginTop + i.marginBottom, p = i.borderLeftWidth + i.borderRightWidth, u = i.borderTopWidth + i.borderBottomWidth, t = o && b, o = h(e.width);
            !1 !== o && (i.width = o + (t ? 0 : a + p));
            o = h(e.height);
            return !1 !== o && (i.height = o + (t ? 0 : c + u)), i.innerWidth = i.width - (a + p), 
            i.innerHeight = i.height - (c + u), i.outerWidth = i.width + l, i.outerHeight = i.height + d, 
            i;
        }
        var u, p, d;
    }
    var b, e = "undefined" == typeof console ? function() {} : function(t) {
        console.error(t);
    }, m = [ "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth" ], g = m.length, z = !1;
    return M;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e();
}(this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, t = i[t] = i[t] || [];
            return -1 == t.indexOf(e) && t.push(e), this;
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this;
        }
    }, e.off = function(t, e) {
        t = this._events && this._events[t];
        if (t && t.length) {
            e = t.indexOf(e);
            return -1 != e && t.splice(e, 1), this;
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = 0, n = i[o];
            e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t]; n; ) {
                var r = s && s[n];
                r && (this.off(t, n), delete s[n]), n.apply(this, e), n = i[o += r ? 0 : 1];
            }
            return this;
        }
    }, t;
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function() {
    "use strict";
    var i = function() {
        var t = Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = [ "webkit", "moz", "ms", "o" ], i = 0; i < e.length; i++) {
            var o = e[i] + "MatchesSelector";
            if (t[o]) return o;
        }
    }();
    return function(t, e) {
        return t[i](e);
    };
}), function(e, i) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", [ "desandro-matches-selector/matches-selector" ], function(t) {
        return i(e, t);
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector);
}(window, function(i, s) {
    var l = {
        extend: function(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        },
        modulo: function(t, e) {
            return (t % e + e) % e;
        },
        makeArray: function(t) {
            var e = [];
            if (Array.isArray(t)) e = t; else if (t && "number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]); else e.push(t);
            return e;
        },
        removeFrom: function(t, e) {
            e = t.indexOf(e);
            -1 != e && t.splice(e, 1);
        },
        getParent: function(t, e) {
            for (;t != document.body; ) if (t = t.parentNode, s(t, e)) return t;
        },
        getQueryElement: function(t) {
            return "string" == typeof t ? document.querySelector(t) : t;
        },
        handleEvent: function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t);
        },
        filterFindElements: function(t, o) {
            t = l.makeArray(t);
            var n = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!o) return void n.push(t);
                    s(t, o) && n.push(t);
                    for (var e = t.querySelectorAll(o), i = 0; i < e.length; i++) n.push(e[i]);
                }
            }), n;
        },
        debounceMethod: function(t, e, o) {
            var n = t.prototype[e], s = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[s];
                t && clearTimeout(t);
                var e = arguments, i = this;
                this[s] = setTimeout(function() {
                    n.apply(i, e), delete i[s];
                }, o || 100);
            };
        },
        docReady: function(t) {
            "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t);
        },
        toDashed: function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i;
            }).toLowerCase();
        }
    }, d = i.console;
    return l.htmlInit = function(a, c) {
        l.docReady(function() {
            var t = l.toDashed(c), n = "data-" + t, e = document.querySelectorAll("[" + n + "]"), t = document.querySelectorAll(".js-" + t), t = l.makeArray(e).concat(l.makeArray(t)), s = n + "-options", r = i.jQuery;
            t.forEach(function(e) {
                var t, i = e.getAttribute(n) || e.getAttribute(s);
                try {
                    t = i && JSON.parse(i);
                } catch (t) {
                    return void (d && d.error("Error parsing " + n + " on " + e.className + ": " + t));
                }
                var o = new a(e, t);
                r && r.data(e, c, o);
            });
        });
    }, l;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", [ "ev-emitter/ev-emitter", "get-size/get-size" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, 
    t.Outlayer.Item = e(t.EvEmitter, t.getSize));
}(window, function(t, e) {
    "use strict";
    function i(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create());
    }
    var o = document.documentElement.style, n = "string" == typeof o.transition ? "transition" : "WebkitTransition", s = "string" == typeof o.transform ? "transform" : "WebkitTransform", r = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[n], a = {
        transform: s,
        transition: n,
        transitionDuration: n + "Duration",
        transitionProperty: n + "Property",
        transitionDelay: n + "Delay"
    }, t = i.prototype = Object.create(t.prototype);
    t.constructor = i, t._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        });
    }, t.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
    }, t.getSize = function() {
        this.size = e(this.element);
    }, t.css = function(t) {
        var e, i = this.element.style;
        for (e in t) {
            i[a[e] || e] = t[e];
        }
    }, t.getPosition = function() {
        var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"), i = this.layout._getOption("originTop"), o = t[e ? "left" : "right"], n = t[i ? "top" : "bottom"], t = this.layout.size, o = -1 != o.indexOf("%") ? parseFloat(o) / 100 * t.width : parseInt(o, 10), n = -1 != n.indexOf("%") ? parseFloat(n) / 100 * t.height : parseInt(n, 10), o = isNaN(o) ? 0 : o, n = isNaN(n) ? 0 : n;
        o -= e ? t.paddingLeft : t.paddingRight, n -= i ? t.paddingTop : t.paddingBottom, 
        this.position.x = o, this.position.y = n;
    }, t.layoutPosition = function() {
        var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"), o = this.layout._getOption("originTop"), n = i ? "paddingLeft" : "paddingRight", s = i ? "left" : "right", i = i ? "right" : "left", n = this.position.x + t[n];
        e[s] = this.getXValue(n), e[i] = "";
        n = o ? "paddingTop" : "paddingBottom", i = o ? "top" : "bottom", o = o ? "bottom" : "top", 
        n = this.position.y + t[n];
        e[i] = this.getYValue(n), e[o] = "", this.css(e), this.emitEvent("layout", [ this ]);
    }, t.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
    }, t.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
    }, t._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x, o = this.position.y, n = parseInt(t, 10), s = parseInt(e, 10), s = n === this.position.x && s === this.position.y;
        this.setPosition(t, e), !s || this.isTransitioning ? (i = t - i, e -= o, (o = {}).transform = this.getTranslate(i, e), 
        this.transition({
            to: o,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })) : this.layoutPosition();
    }, t.getTranslate = function(t, e) {
        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)";
    }, t.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition();
    }, t.moveTo = t._transitionTo, t.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10);
    }, t._nonTransition = function(t) {
        for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this);
    }, t.transition = function(t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var e, i = this._transn;
            for (e in t.onTransitionEnd) i.onEnd[e] = t.onTransitionEnd[e];
            for (e in t.to) i.ingProperties[e] = !0, t.isCleaning && (i.clean[e] = !0);
            t.from && (this.css(t.from), this.element.offsetHeight, 0), this.enableTransition(t.to), 
            this.css(t.to), this.isTransitioning = !0;
        } else this._nonTransition(t);
    };
    var c = "opacity," + s.replace(/([A-Z])/g, function(t) {
        return "-" + t.toLowerCase();
    });
    t.enableTransition = function() {
        var t;
        this.isTransitioning || (t = "number" == typeof (t = this.layout.options.transitionDuration) ? t + "ms" : t, 
        this.css({
            transitionProperty: c,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0
        }), this.element.addEventListener(r, this, !1));
    }, t.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t);
    }, t.onotransitionend = function(t) {
        this.ontransitionend(t);
    };
    var l = {
        "-webkit-transform": "transform"
    };
    t.ontransitionend = function(t) {
        var e, i;
        t.target === this.element && (e = this._transn, i = l[t.propertyName] || t.propertyName, 
        delete e.ingProperties[i], function(t) {
            for (var e in t) return;
            return 1;
        }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", 
        delete e.clean[i]), i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]), 
        this.emitEvent("transitionEnd", [ this ]));
    }, t.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1;
    }, t._removeStyles = function(t) {
        var e, i = {};
        for (e in t) i[e] = "";
        this.css(i);
    };
    var d = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return t.removeTransitionStyles = function() {
        this.css(d);
    }, t.stagger = function(t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
    }, t.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [ this ]);
    }, t.remove = function() {
        return n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem();
        }), void this.hide()) : void this.removeElem();
    }, t.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options, e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, 
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        });
    }, t.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal");
    }, t.getHideRevealTransitionEndProperty = function(t) {
        var e, t = this.layout.options[t];
        if (t.opacity) return "opacity";
        for (e in t) return e;
    }, t.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options, e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, 
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        });
    }, t.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"));
    }, t.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        });
    }, i;
}), function(n, s) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", [ "ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item" ], function(t, e, i, o) {
        return s(n, t, e, i, o);
    }) : "object" == typeof module && module.exports ? module.exports = s(n, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : n.Outlayer = s(n, n.EvEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item);
}(window, function(t, e, n, o, s) {
    "use strict";
    function r(t, e) {
        var i = o.getQueryElement(t);
        i ? (this.element = i, l && (this.$element = l(this.element)), this.options = o.extend({}, this.constructor.defaults), 
        this.option(e), e = ++d, this.element.outlayerGUID = e, (p[e] = this)._create(), 
        this._getOption("initLayout") && this.layout()) : c && c.error("Bad element for " + this.constructor.namespace + ": " + (i || t));
    }
    function a(t) {
        function e() {
            t.apply(this, arguments);
        }
        return (e.prototype = Object.create(t.prototype)).constructor = e;
    }
    function i() {}
    var c = t.console, l = t.jQuery, d = 0, p = {};
    r.namespace = "outlayer", r.Item = s, r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var u = r.prototype;
    o.extend(u, e.prototype), u.option = function(t) {
        o.extend(this.options, t);
    }, u._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
    }, r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, u._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), 
        this._getOption("resize") && this.bindResize();
    }, u.reloadItems = function() {
        this.items = this._itemize(this.element.children);
    }, u._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = new i(e[n], this);
            o.push(s);
        }
        return o;
    }, u._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector);
    }, u.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element;
        });
    }, u.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"), t = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0;
    }, u._init = u.layout, u._resetLayout = function() {
        this.getSize();
    }, u.getSize = function() {
        this.size = n(this.element);
    }, u._getMeasurement = function(t, e) {
        var i, o = this.options[t];
        o ? ("string" == typeof o ? i = this.element.querySelector(o) : o instanceof HTMLElement && (i = o), 
        this[t] = i ? n(i)[e] : o) : this[t] = 0;
    }, u.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
    }, u._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored;
        });
    }, u._layoutItems = function(t, i) {
        var o;
        this._emitCompleteOnItems("layout", t), t && t.length && (o = [], t.forEach(function(t) {
            var e = this._getItemLayoutPosition(t);
            e.item = t, e.isInstant = i || t.isLayoutInstant, o.push(e);
        }, this), this._processLayoutQueue(o));
    }, u._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        };
    }, u._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
        }, this);
    }, u.updateStagger = function() {
        var t = this.options.stagger;
        return null == t ? void (this.stagger = 0) : (this.stagger = function(t) {
            if ("number" == typeof t) return t;
            var t = (e = t.match(/(^\d*\.?\d*)(\w*)/)) && e[1], e = e && e[2];
            return t.length ? (t = parseFloat(t)) * (h[e] || 1) : 0;
        }(t), this.stagger);
    }, u._positionItem = function(t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
    }, u._postLayout = function() {
        this.resizeContainer();
    }, u.resizeContainer = function() {
        var t;
        !this._getOption("resizeContainer") || (t = this._getContainerSize()) && (this._setContainerMeasure(t.width, !0), 
        this._setContainerMeasure(t.height, !1));
    }, u._getContainerSize = i, u._setContainerMeasure = function(t, e) {
        var i;
        void 0 !== t && ((i = this.size).isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), 
        t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px");
    }, u._emitCompleteOnItems = function(e, t) {
        function i() {
            s.dispatchEvent(e + "Complete", null, [ t ]);
        }
        function o() {
            ++n == r && i();
        }
        var n, s = this, r = t.length;
        t && r ? (n = 0, t.forEach(function(t) {
            t.once(e, o);
        })) : i();
    }, u.dispatchEvent = function(t, e, i) {
        var o = e ? [ e ].concat(i) : i;
        this.emitEvent(t, o), l && (this.$element = this.$element || l(this.element), e ? ((e = l.Event(e)).type = t, 
        this.$element.trigger(e, i)) : this.$element.trigger(t, i));
    }, u.ignore = function(t) {
        t = this.getItem(t);
        t && (t.isIgnored = !0);
    }, u.unignore = function(t) {
        t = this.getItem(t);
        t && delete t.isIgnored;
    }, u.stamp = function(t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
    }, u.unstamp = function(t) {
        (t = this._find(t)) && t.forEach(function(t) {
            o.removeFrom(this.stamps, t), this.unignore(t);
        }, this);
    }, u._find = function(t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)) : void 0;
    }, u._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
    }, u._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        };
    }, u._manageStamp = i, u._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(), i = this._boundingRect, t = n(t);
        return {
            left: e.left - i.left - t.marginLeft,
            top: e.top - i.top - t.marginTop,
            right: i.right - e.right - t.marginRight,
            bottom: i.bottom - e.bottom - t.marginBottom
        };
    }, u.handleEvent = o.handleEvent, u.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0;
    }, u.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1;
    }, u.onresize = function() {
        this.resize();
    }, o.debounceMethod(r, "onresize", 100), u.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
    }, u.needsResizeLayout = function() {
        var t = n(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth;
    }, u.addItems = function(t) {
        t = this._itemize(t);
        return t.length && (this.items = this.items.concat(t)), t;
    }, u.appended = function(t) {
        t = this.addItems(t);
        t.length && (this.layoutItems(t, !0), this.reveal(t));
    }, u.prepended = function(t) {
        var e = this._itemize(t);
        e.length && (t = this.items.slice(0), this.items = e.concat(t), this._resetLayout(), 
        this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(t));
    }, u.reveal = function(t) {
        var i;
        this._emitCompleteOnItems("reveal", t), t && t.length && (i = this.updateStagger(), 
        t.forEach(function(t, e) {
            t.stagger(e * i), t.reveal();
        }));
    }, u.hide = function(t) {
        var i;
        this._emitCompleteOnItems("hide", t), t && t.length && (i = this.updateStagger(), 
        t.forEach(function(t, e) {
            t.stagger(e * i), t.hide();
        }));
    }, u.revealItemElements = function(t) {
        t = this.getItems(t);
        this.reveal(t);
    }, u.hideItemElements = function(t) {
        t = this.getItems(t);
        this.hide(t);
    }, u.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i;
        }
    }, u.getItems = function(t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            t = this.getItem(t);
            t && e.push(t);
        }, this), e;
    }, u.remove = function(t) {
        t = this.getItems(t);
        this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function(t) {
            t.remove(), o.removeFrom(this.items, t);
        }, this);
    }, u.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
            t.destroy();
        }), this.unbindResize();
        t = this.element.outlayerGUID;
        delete p[t], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace);
    }, r.data = function(t) {
        t = (t = o.getQueryElement(t)) && t.outlayerGUID;
        return t && p[t];
    }, r.create = function(t, e) {
        var i = a(r);
        return i.defaults = o.extend({}, r.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, r.compatOptions), 
        i.namespace = t, i.data = r.data, i.Item = a(s), o.htmlInit(i, t), l && l.bridget && l.bridget(t, i), 
        i;
    };
    var h = {
        ms: 1,
        s: 1e3
    };
    return r.Item = s, r;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("packery/js/rect", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Packery = t.Packery || {}, 
    t.Packery.Rect = e());
}(window, function() {
    "use strict";
    function a(t) {
        for (var e in a.defaults) this[e] = a.defaults[e];
        for (e in t) this[e] = t[e];
    }
    a.defaults = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    var t = a.prototype;
    return t.contains = function(t) {
        var e = t.width || 0, i = t.height || 0;
        return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i;
    }, t.overlaps = function(t) {
        var e = this.x + this.width, i = this.y + this.height, o = t.x + t.width, n = t.y + t.height;
        return this.x < o && e > t.x && this.y < n && i > t.y;
    }, t.getMaximalFreeRects = function(t) {
        if (!this.overlaps(t)) return !1;
        var e, i = [], o = this.x + this.width, n = this.y + this.height, s = t.x + t.width, r = t.y + t.height;
        return this.y < t.y && (e = new a({
            x: this.x,
            y: this.y,
            width: this.width,
            height: t.y - this.y
        }), i.push(e)), s < o && (e = new a({
            x: s,
            y: this.y,
            width: o - s,
            height: this.height
        }), i.push(e)), r < n && (e = new a({
            x: this.x,
            y: r,
            width: this.width,
            height: n - r
        }), i.push(e)), this.x < t.x && (e = new a({
            x: this.x,
            y: this.y,
            width: t.x - this.x,
            height: this.height
        }), i.push(e)), i;
    }, t.canFit = function(t) {
        return this.width >= t.width && this.height >= t.height;
    }, a;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("packery/js/packer", [ "./rect" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("./rect")) : (t = t.Packery = t.Packery || {}).Packer = e(t.Rect);
}(window, function(e) {
    "use strict";
    function t(t, e, i) {
        this.width = t || 0, this.height = e || 0, this.sortDirection = i || "downwardLeftToRight", 
        this.reset();
    }
    var i = t.prototype;
    i.reset = function() {
        this.spaces = [];
        var t = new e({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });
        this.spaces.push(t), this.sorter = o[this.sortDirection] || o.downwardLeftToRight;
    }, i.pack = function(t) {
        for (var e = 0; e < this.spaces.length; e++) {
            var i = this.spaces[e];
            if (i.canFit(t)) {
                this.placeInSpace(t, i);
                break;
            }
        }
    }, i.columnPack = function(t) {
        for (var e = 0; e < this.spaces.length; e++) {
            var i = this.spaces[e];
            if (i.x <= t.x && i.x + i.width >= t.x + t.width && i.height >= t.height - .01) {
                t.y = i.y, this.placed(t);
                break;
            }
        }
    }, i.rowPack = function(t) {
        for (var e = 0; e < this.spaces.length; e++) {
            var i = this.spaces[e];
            if (i.y <= t.y && i.y + i.height >= t.y + t.height && i.width >= t.width - .01) {
                t.x = i.x, this.placed(t);
                break;
            }
        }
    }, i.placeInSpace = function(t, e) {
        t.x = e.x, t.y = e.y, this.placed(t);
    }, i.placed = function(t) {
        for (var e = [], i = 0; i < this.spaces.length; i++) {
            var o = this.spaces[i], n = o.getMaximalFreeRects(t);
            n ? e.push.apply(e, n) : e.push(o);
        }
        this.spaces = e, this.mergeSortSpaces();
    }, i.mergeSortSpaces = function() {
        t.mergeRects(this.spaces), this.spaces.sort(this.sorter);
    }, i.addSpace = function(t) {
        this.spaces.push(t), this.mergeSortSpaces();
    }, t.mergeRects = function(t) {
        var e = 0, i = t[e];
        t: for (;i; ) {
            for (var o = 0, n = t[e + o]; n; ) {
                if (n == i) o++; else {
                    if (n.contains(i)) {
                        t.splice(e, 1), i = t[e];
                        continue t;
                    }
                    i.contains(n) ? t.splice(e + o, 1) : o++;
                }
                n = t[e + o];
            }
            i = t[++e];
        }
        return t;
    };
    var o = {
        downwardLeftToRight: function(t, e) {
            return t.y - e.y || t.x - e.x;
        },
        rightwardTopToBottom: function(t, e) {
            return t.x - e.x || t.y - e.y;
        }
    };
    return t;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("packery/js/item", [ "outlayer/outlayer", "./rect" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("./rect")) : t.Packery.Item = e(t.Outlayer, t.Packery.Rect);
}(window, function(t, e) {
    "use strict";
    function i() {
        t.Item.apply(this, arguments);
    }
    var o = "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform", n = i.prototype = Object.create(t.Item.prototype), s = n._create;
    n._create = function() {
        s.call(this), this.rect = new e();
    };
    var r = n.moveTo;
    return n.moveTo = function(t, e) {
        var i = Math.abs(this.position.x - t), o = Math.abs(this.position.y - e);
        return this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && i < 1 && o < 1 ? void this.goTo(t, e) : void r.apply(this, arguments);
    }, n.enablePlacing = function() {
        this.removeTransitionStyles(), this.isTransitioning && o && (this.element.style[o] = "none"), 
        this.isTransitioning = !1, this.getSize(), this.layout._setRectSize(this.element, this.rect), 
        this.isPlacing = !0;
    }, n.disablePlacing = function() {
        this.isPlacing = !1;
    }, n.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), 
        this.emitEvent("remove", [ this ]);
    }, n.showDropPlaceholder = function() {
        var t = this.dropPlaceholder;
        t || ((t = this.dropPlaceholder = document.createElement("div")).className = "packery-drop-placeholder", 
        t.style.position = "absolute"), t.style.width = this.size.width + "px", t.style.height = this.size.height + "px", 
        this.positionDropPlaceholder(), this.layout.element.appendChild(t);
    }, n.positionDropPlaceholder = function() {
        this.dropPlaceholder.style[o] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)";
    }, n.hideDropPlaceholder = function() {
        var t = this.dropPlaceholder.parentNode;
        t && t.removeChild(this.dropPlaceholder);
    }, i;
}), function(t, e) {
    "function" == typeof define && define.amd ? define([ "get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : t.Packery = e(t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item);
}(window, function(l, t, h, e, i) {
    "use strict";
    function o(t, e) {
        return t.position.y - e.position.y || t.position.x - e.position.x;
    }
    function n(t, e) {
        return t.position.x - e.position.x || t.position.y - e.position.y;
    }
    h.prototype.canFit = function(t) {
        return this.width >= t.width - 1 && this.height >= t.height - 1;
    };
    var s = t.create("packery");
    s.Item = i;
    i = s.prototype;
    i._create = function() {
        t.prototype._create.call(this), this.packer = new e(), this.shiftPacker = new e(), 
        this.isEnabled = !0, this.dragItemCount = 0;
        var i = this;
        this.handleDraggabilly = {
            dragStart: function() {
                i.itemDragStart(this.element);
            },
            dragMove: function() {
                i.itemDragMove(this.element, this.position.x, this.position.y);
            },
            dragEnd: function() {
                i.itemDragEnd(this.element);
            }
        }, this.handleUIDraggable = {
            start: function(t, e) {
                e && i.itemDragStart(t.currentTarget);
            },
            drag: function(t, e) {
                e && i.itemDragMove(t.currentTarget, e.position.left, e.position.top);
            },
            stop: function(t, e) {
                e && i.itemDragEnd(t.currentTarget);
            }
        };
    }, i._resetLayout = function() {
        var t, e, i;
        this.getSize(), this._getMeasurements(), i = this._getOption("horizontal") ? (t = 1 / 0, 
        e = this.size.innerHeight + this.gutter, "rightwardTopToBottom") : (t = this.size.innerWidth + this.gutter, 
        e = 1 / 0, "downwardLeftToRight"), this.packer.width = this.shiftPacker.width = t, 
        this.packer.height = this.shiftPacker.height = e, this.packer.sortDirection = this.shiftPacker.sortDirection = i, 
        this.packer.reset(), this.maxY = 0, this.maxX = 0;
    }, i._getMeasurements = function() {
        this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), 
        this._getMeasurement("gutter", "width");
    }, i._getItemLayoutPosition = function(t) {
        var e;
        return this._setRectSize(t.element, t.rect), this.isShifting || 0 < this.dragItemCount ? (e = this._getPackMethod(), 
        this.packer[e](t.rect)) : this.packer.pack(t.rect), this._setMaxXY(t.rect), t.rect;
    }, i.shiftLayout = function() {
        this.isShifting = !0, this.layout(), delete this.isShifting;
    }, i._getPackMethod = function() {
        return this._getOption("horizontal") ? "rowPack" : "columnPack";
    }, i._setMaxXY = function(t) {
        this.maxX = Math.max(t.x + t.width, this.maxX), this.maxY = Math.max(t.y + t.height, this.maxY);
    }, i._setRectSize = function(t, e) {
        var i = l(t), t = i.outerWidth, i = i.outerHeight;
        (t || i) && (t = this._applyGridGutter(t, this.columnWidth), i = this._applyGridGutter(i, this.rowHeight)), 
        e.width = Math.min(t, this.packer.width), e.height = Math.min(i, this.packer.height);
    }, i._applyGridGutter = function(t, e) {
        if (!e) return t + this.gutter;
        var i = t % (e += this.gutter);
        return Math[i && i < 1 ? "round" : "ceil"](t / e) * e;
    }, i._getContainerSize = function() {
        return this._getOption("horizontal") ? {
            width: this.maxX - this.gutter
        } : {
            height: this.maxY - this.gutter
        };
    }, i._manageStamp = function(t) {
        var e, i = this.getItem(t);
        e = i && i.isPlacing ? i.rect : (e = this._getElementOffset(t), new h({
            x: this._getOption("originLeft") ? e.left : e.right,
            y: this._getOption("originTop") ? e.top : e.bottom
        })), this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e);
    }, i.sortItemsByPosition = function() {
        var t = this._getOption("horizontal") ? n : o;
        this.items.sort(t);
    }, i.fit = function(t, e, i) {
        t = this.getItem(t);
        t && (this.stamp(t.element), t.enablePlacing(), this.updateShiftTargets(t), e = void 0 === e ? t.rect.x : e, 
        i = void 0 === i ? t.rect.y : i, this.shift(t, e, i), this._bindFitEvents(t), t.moveTo(t.rect.x, t.rect.y), 
        this.shiftLayout(), this.unstamp(t.element), this.sortItemsByPosition(), t.disablePlacing());
    }, i._bindFitEvents = function(t) {
        function e() {
            2 == ++o && i.dispatchEvent("fitComplete", null, [ t ]);
        }
        var i = this, o = 0;
        t.once("layout", e), this.once("layoutComplete", e);
    }, i.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout());
    }, i.needsResizeLayout = function() {
        var t = l(this.element), e = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
        return t[e] != this.size[e];
    }, i.resizeShiftPercentLayout = function() {
        var i, e, o, t = this._getItemsForLayout(this.items), n = this._getOption("horizontal"), s = n ? "y" : "x", r = n ? "height" : "width", a = n ? "rowHeight" : "columnWidth", n = n ? "innerHeight" : "innerWidth", c = this[a];
        (c = c && c + this.gutter) ? (this._getMeasurements(), i = this[a] + this.gutter, 
        t.forEach(function(t) {
            var e = Math.round(t.rect[s] / c);
            t.rect[s] = e * i;
        })) : (e = l(this.element)[n] + this.gutter, o = this.packer[r], t.forEach(function(t) {
            t.rect[s] = t.rect[s] / o * e;
        })), this.shiftLayout();
    }, i.itemDragStart = function(t) {
        this.isEnabled && (this.stamp(t), (t = this.getItem(t)) && (t.enablePlacing(), t.showDropPlaceholder(), 
        this.dragItemCount++, this.updateShiftTargets(t)));
    }, i.updateShiftTargets = function(t) {
        this.shiftPacker.reset(), this._getBoundingRect();
        var i = this._getOption("originLeft"), o = this._getOption("originTop");
        this.stamps.forEach(function(t) {
            var e = this.getItem(t);
            e && e.isPlacing || (e = this._getElementOffset(t), e = new h({
                x: i ? e.left : e.right,
                y: o ? e.top : e.bottom
            }), this._setRectSize(t, e), this.shiftPacker.placed(e));
        }, this);
        var c = this._getOption("horizontal"), e = c ? "rowHeight" : "columnWidth", l = c ? "height" : "width";
        this.shiftTargetKeys = [], this.shiftTargets = [];
        var d = this[e];
        if (d = d && d + this.gutter) for (var e = Math.ceil(t.rect[l] / d), n = Math.floor((this.shiftPacker[l] + this.gutter) / d), p = (n - e) * d, s = 0; s < n; s++) {
            var r = c ? 0 : s * d, a = c ? s * d : 0;
            this._addShiftTarget(r, a, p);
        } else p = this.shiftPacker[l] + this.gutter - t.rect[l], this._addShiftTarget(0, 0, p);
        var t = this._getItemsForLayout(this.items), u = this._getPackMethod();
        t.forEach(function(t) {
            var e = t.rect;
            this._setRectSize(t.element, e), this.shiftPacker[u](e), this._addShiftTarget(e.x, e.y, p);
            var i = c ? e.x + e.width : e.x, o = c ? e.y : e.y + e.height;
            if (this._addShiftTarget(i, o, p), d) for (var n = Math.round(e[l] / d), s = 1; s < n; s++) {
                var r = c ? i : e.x + d * s, a = c ? e.y + d * s : o;
                this._addShiftTarget(r, a, p);
            }
        }, this);
    }, i._addShiftTarget = function(t, e, i) {
        var o = this._getOption("horizontal") ? e : t;
        0 !== o && i < o || (o = t + "," + e, -1 != this.shiftTargetKeys.indexOf(o) || (this.shiftTargetKeys.push(o), 
        this.shiftTargets.push({
            x: t,
            y: e
        })));
    }, i.shift = function(t, e, i) {
        var n, s = 1 / 0, r = {
            x: e,
            y: i
        };
        this.shiftTargets.forEach(function(t) {
            var e, i, o, e = (o = (i = r).x - (e = t).x, e = i.y - e.y, Math.sqrt(o * o + e * e));
            e < s && (n = t, s = e);
        }), t.rect.x = n.x, t.rect.y = n.y;
    };
    i.itemDragMove = function(t, e, i) {
        function o() {
            n.shift(s, e, i), s.positionDropPlaceholder(), n.layout();
        }
        var n, s = this.isEnabled && this.getItem(t);
        s && (e -= this.size.paddingLeft, i -= this.size.paddingTop, n = this, t = new Date(), 
        this._itemDragTime && t - this._itemDragTime < 120 ? (clearTimeout(this.dragTimeout), 
        this.dragTimeout = setTimeout(o, 120)) : (o(), this._itemDragTime = t));
    }, i.itemDragEnd = function(t) {
        function e() {
            2 == ++i && (n.element.classList.remove("is-positioning-post-drag"), n.hideDropPlaceholder(), 
            o.dispatchEvent("dragItemPositioned", null, [ n ]));
        }
        var i, o, n = this.isEnabled && this.getItem(t);
        n && (clearTimeout(this.dragTimeout), n.element.classList.add("is-positioning-post-drag"), 
        i = 0, o = this, n.once("layout", e), this.once("layoutComplete", e), n.moveTo(n.rect.x, n.rect.y), 
        this.layout(), this.dragItemCount = Math.max(0, this.dragItemCount - 1), this.sortItemsByPosition(), 
        n.disablePlacing(), this.unstamp(n.element));
    }, i.bindDraggabillyEvents = function(t) {
        this._bindDraggabillyEvents(t, "on");
    }, i.unbindDraggabillyEvents = function(t) {
        this._bindDraggabillyEvents(t, "off");
    }, i._bindDraggabillyEvents = function(t, e) {
        var i = this.handleDraggabilly;
        t[e]("dragStart", i.dragStart), t[e]("dragMove", i.dragMove), t[e]("dragEnd", i.dragEnd);
    }, i.bindUIDraggableEvents = function(t) {
        this._bindUIDraggableEvents(t, "on");
    }, i.unbindUIDraggableEvents = function(t) {
        this._bindUIDraggableEvents(t, "off");
    }, i._bindUIDraggableEvents = function(t, e) {
        var i = this.handleUIDraggable;
        t[e]("dragstart", i.start)[e]("drag", i.drag)[e]("dragstop", i.stop);
    };
    var r = i.destroy;
    return i.destroy = function() {
        r.apply(this, arguments), this.isEnabled = !1;
    }, s.Rect = h, s.Packer = e, s;
}), function(t, e) {
    "use strict";
    var i;
    if ("object" == typeof exports) {
        try {
            i = require("moment");
        } catch (t) {}
        module.exports = e(i);
    } else "function" == typeof define && define.amd ? define(function(t) {
        try {
            i = t("moment");
        } catch (t) {}
        return e(i);
    }) : t.Pikaday = e(t.moment);
}(this, function(n) {
    "use strict";
    function s(t, e, i, o) {
        d ? t.addEventListener(e, i, !!o) : t.attachEvent("on" + e, i);
    }
    function o(t, e, i, o) {
        d ? t.removeEventListener(e, i, !!o) : t.detachEvent("on" + e, i);
    }
    function r(t, e, i) {
        var o;
        p.createEvent ? ((o = p.createEvent("HTMLEvents")).initEvent(e, !0, !1), o = h(o, i), 
        t.dispatchEvent(o)) : p.createEventObject && (o = p.createEventObject(), o = h(o, i), 
        t.fireEvent("on" + e, o));
    }
    function a(t, e) {
        return -1 !== (" " + t.className + " ").indexOf(" " + e + " ");
    }
    function b(t) {
        return /Array/.test(Object.prototype.toString.call(t));
    }
    function N(t) {
        return /Date/.test(Object.prototype.toString.call(t)) && !isNaN(t.getTime());
    }
    function S(t, e) {
        return [ 31, (t = t) % 4 == 0 && t % 100 != 0 || t % 400 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ][e];
    }
    function W(t) {
        N(t) && t.setHours(0, 0, 0, 0);
    }
    function C(t, e) {
        return t.getTime() === e.getTime();
    }
    function e(t) {
        return t.month < 0 && (t.year -= Math.ceil(Math.abs(t.month) / 12), t.month += 12), 
        11 < t.month && (t.year += Math.floor(Math.abs(t.month) / 12), t.month -= 12), t;
    }
    function c(t, e, i) {
        for (e += t.firstDay; 7 <= e; ) e -= 7;
        return (i ? t.i18n.weekdaysShort : t.i18n.weekdays)[e];
    }
    function B(t, e) {
        return '<table cellpadding="0" cellspacing="0" class="pika-table">' + function(t) {
            var e, i = [];
            for (t.showWeekNumber && i.push("<th></th>"), e = 0; e < 7; e++) i.push('<th scope="col"><abbr title="' + c(t, e) + '">' + c(t, e, !0) + "</abbr></th>");
            return "<thead>" + (t.isRTL ? i.reverse() : i).join("") + "</thead>";
        }(t) + "<tbody>" + e.join("") + "</tbody></table>";
    }
    function t(t) {
        var i = this, o = i.config(t);
        i._onMouseDown = function(t) {
            if (i._v) {
                var e = (t = t || window.event).target || t.srcElement;
                if (e) if (a(e, "is-disabled") || (a(e, "pika-button") && !a(e, "is-empty") ? (i.setDate(new Date(e.getAttribute("data-pika-year"), e.getAttribute("data-pika-month"), e.getAttribute("data-pika-day"))), 
                o.bound && u(function() {
                    i.hide(), o.field && o.field.blur();
                }, 100)) : a(e, "pika-prev") ? i.prevMonth() : a(e, "pika-next") && i.nextMonth()), 
                a(e, "pika-select")) i._c = !0; else {
                    if (!t.preventDefault) return t.returnValue = !1;
                    t.preventDefault();
                }
            }
        }, i._onChange = function(t) {
            t = (t = t || window.event).target || t.srcElement;
            t && (a(t, "pika-select-month") ? i.gotoMonth(t.value) : a(t, "pika-select-year") && i.gotoYear(t.value));
        }, i._onInputChange = function(t) {
            var e;
            t.firedBy !== i && (e = l ? (e = n(o.field.value, o.format, o.formatStrict)) && e.isValid() ? e.toDate() : null : new Date(Date.parse(o.field.value)), 
            N(e) && i.setDate(e), i._v || i.show());
        }, i._onInputFocus = function() {
            i.show();
        }, i._onInputClick = function() {
            i.show();
        }, i._onInputBlur = function() {
            var t = p.activeElement;
            do {
                if (a(t, "pika-single")) return;
            } while (t = t.parentNode);
            i._c || (i._b = u(function() {
                i.hide();
            }, 50)), i._c = !1;
        }, i._onClick = function(t) {
            var t = (t = t || window.event).target || t.srcElement, e = t;
            if (t) {
                !d && a(t, "pika-select") && (t.onchange || (t.setAttribute("onchange", "return;"), 
                s(t, "change", i._onChange)));
                do {
                    if (a(e, "pika-single") || e === o.trigger) return;
                } while (e = e.parentNode);
                i._v && t !== o.trigger && e !== o.trigger && i.hide();
            }
        }, i.el = p.createElement("div"), i.el.className = "pika-single" + (o.isRTL ? " is-rtl" : "") + (o.theme ? " " + o.theme : ""), 
        s(i.el, "mousedown", i._onMouseDown, !0), s(i.el, "touchend", i._onMouseDown, !0), 
        s(i.el, "change", i._onChange), o.field && (o.container ? o.container.appendChild(i.el) : o.bound ? p.body.appendChild(i.el) : o.field.parentNode.insertBefore(i.el, o.field.nextSibling), 
        s(o.field, "change", i._onInputChange), o.defaultDate || (l && o.field.value ? o.defaultDate = n(o.field.value, o.format).toDate() : o.defaultDate = new Date(Date.parse(o.field.value)), 
        o.setDefaultDate = !0)), t = o.defaultDate, N(t) ? o.setDefaultDate ? i.setDate(t, !0) : i.gotoDate(t) : i.gotoDate(new Date()), 
        o.bound ? (this.hide(), i.el.className += " is-bound", s(o.trigger, "click", i._onInputClick), 
        s(o.trigger, "focus", i._onInputFocus), s(o.trigger, "blur", i._onInputBlur)) : this.show();
    }
    var l = "function" == typeof n, d = !!window.addEventListener, p = window.document, u = window.setTimeout, h = function(t, e, i) {
        var o, n;
        for (o in e) (n = void 0 !== t[o]) && "object" == typeof e[o] && null !== e[o] && void 0 === e[o].nodeName ? N(e[o]) ? i && (t[o] = new Date(e[o].getTime())) : b(e[o]) ? i && (t[o] = e[o].slice(0)) : t[o] = h({}, e[o], i) : !i && n || (t[o] = e[o]);
        return t;
    }, i = {
        field: null,
        bound: void 0,
        position: "bottom left",
        reposition: !0,
        format: "YYYY-MM-DD",
        defaultDate: null,
        setDefaultDate: !1,
        firstDay: 0,
        formatStrict: !1,
        minDate: null,
        maxDate: null,
        yearRange: 10,
        showWeekNumber: !1,
        minYear: 0,
        maxYear: 9999,
        minMonth: void 0,
        maxMonth: void 0,
        startRange: null,
        endRange: null,
        isRTL: !1,
        yearSuffix: "",
        showMonthAfterYear: !1,
        showDaysInNextAndPreviousMonths: !1,
        numberOfMonths: 1,
        mainCalendar: "left",
        container: void 0,
        i18n: {
            previousMonth: "Previous Month",
            nextMonth: "Next Month",
            months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            weekdays: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            weekdaysShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
        },
        theme: null,
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null
    };
    return t.prototype = {
        config: function(t) {
            this._o || (this._o = h({}, i, !0));
            var e = h(this._o, t, !0);
            e.isRTL = !!e.isRTL, e.field = e.field && e.field.nodeName ? e.field : null, e.theme = "string" == typeof e.theme && e.theme ? e.theme : null, 
            e.bound = !!(void 0 !== e.bound ? e.field && e.bound : e.field), e.trigger = e.trigger && e.trigger.nodeName ? e.trigger : e.field, 
            e.disableWeekends = !!e.disableWeekends, e.disableDayFn = "function" == typeof e.disableDayFn ? e.disableDayFn : null;
            t = parseInt(e.numberOfMonths, 10) || 1;
            return e.numberOfMonths = 4 < t ? 4 : t, N(e.minDate) || (e.minDate = !1), N(e.maxDate) || (e.maxDate = !1), 
            e.minDate && e.maxDate && e.maxDate < e.minDate && (e.maxDate = e.minDate = !1), 
            e.minDate && this.setMinDate(e.minDate), e.maxDate && this.setMaxDate(e.maxDate), 
            b(e.yearRange) ? (t = new Date().getFullYear() - 10, e.yearRange[0] = parseInt(e.yearRange[0], 10) || t, 
            e.yearRange[1] = parseInt(e.yearRange[1], 10) || t) : (e.yearRange = Math.abs(parseInt(e.yearRange, 10)) || i.yearRange, 
            100 < e.yearRange && (e.yearRange = 100)), e;
        },
        toString: function(t) {
            return N(this._d) ? l ? n(this._d).format(t || this._o.format) : this._d.toDateString() : "";
        },
        getMoment: function() {
            return l ? n(this._d) : null;
        },
        setMoment: function(t, e) {
            l && n.isMoment(t) && this.setDate(t.toDate(), e);
        },
        getDate: function() {
            return N(this._d) ? new Date(this._d.getTime()) : null;
        },
        setDate: function(t, e) {
            if (!t) return this._d = null, this._o.field && (this._o.field.value = "", r(this._o.field, "change", {
                firedBy: this
            })), this.draw();
            var i, o;
            "string" == typeof t && (t = new Date(Date.parse(t))), N(t) && (i = this._o.minDate, 
            o = this._o.maxDate, N(i) && t < i ? t = i : N(o) && o < t && (t = o), this._d = new Date(t.getTime()), 
            W(this._d), this.gotoDate(this._d), this._o.field && (this._o.field.value = this.toString(), 
            r(this._o.field, "change", {
                firedBy: this
            })), e || "function" != typeof this._o.onSelect || this._o.onSelect.call(this, this.getDate()));
        },
        gotoDate: function(t) {
            var e, i, o, n = !0;
            N(t) && (this.calendars && (e = new Date(this.calendars[0].year, this.calendars[0].month, 1), 
            i = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1), 
            o = t.getTime(), i.setMonth(i.getMonth() + 1), i.setDate(i.getDate() - 1), n = o < e.getTime() || i.getTime() < o), 
            n && (this.calendars = [ {
                month: t.getMonth(),
                year: t.getFullYear()
            } ], "right" === this._o.mainCalendar && (this.calendars[0].month += 1 - this._o.numberOfMonths)), 
            this.adjustCalendars());
        },
        adjustCalendars: function() {
            this.calendars[0] = e(this.calendars[0]);
            for (var t = 1; t < this._o.numberOfMonths; t++) this.calendars[t] = e({
                month: this.calendars[0].month + t,
                year: this.calendars[0].year
            });
            this.draw();
        },
        gotoToday: function() {
            this.gotoDate(new Date());
        },
        gotoMonth: function(t) {
            isNaN(t) || (this.calendars[0].month = parseInt(t, 10), this.adjustCalendars());
        },
        nextMonth: function() {
            this.calendars[0].month++, this.adjustCalendars();
        },
        prevMonth: function() {
            this.calendars[0].month--, this.adjustCalendars();
        },
        gotoYear: function(t) {
            isNaN(t) || (this.calendars[0].year = parseInt(t, 10), this.adjustCalendars());
        },
        setMinDate: function(t) {
            W(t), this._o.minDate = t, this._o.minYear = t.getFullYear(), this._o.minMonth = t.getMonth(), 
            this.draw();
        },
        setMaxDate: function(t) {
            W(t), this._o.maxDate = t, this._o.maxYear = t.getFullYear(), this._o.maxMonth = t.getMonth(), 
            this.draw();
        },
        setStartRange: function(t) {
            this._o.startRange = t;
        },
        setEndRange: function(t) {
            this._o.endRange = t;
        },
        draw: function(t) {
            if (this._v || t) {
                var e = this._o, i = e.minYear, o = e.maxYear, n = e.minMonth, t = e.maxMonth, s = "";
                this._y <= i && (this._y = i, !isNaN(n) && this._m < n && (this._m = n)), this._y >= o && (this._y = o, 
                !isNaN(t) && this._m > t && (this._m = t));
                for (var r, a = 0; a < e.numberOfMonths; a++) s += '<div class="pika-lendar">' + function(t, e, i, o, n) {
                    for (var s, r, a, c = t._o, l = i === c.minYear, d = i === c.maxYear, p = '<div class="pika-title">', u = !0, h = !0, f = [], M = 0; M < 12; M++) f.push('<option value="' + (i === n ? M - e : 12 + M - e) + '"' + (M === o ? " selected" : "") + (l && M < c.minMonth || d && M > c.maxMonth ? "disabled" : "") + ">" + c.i18n.months[M] + "</option>");
                    for (r = '<div class="pika-label">' + c.i18n.months[o] + '<select class="pika-select pika-select-month" tabindex="-1">' + f.join("") + "</select></div>", 
                    s = b(c.yearRange) ? (M = c.yearRange[0], c.yearRange[1] + 1) : (M = i - c.yearRange, 
                    1 + i + c.yearRange), f = []; M < s && M <= c.maxYear; M++) M >= c.minYear && f.push('<option value="' + M + '"' + (M === i ? " selected" : "") + ">" + M + "</option>");
                    return a = '<div class="pika-label">' + i + c.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + f.join("") + "</select></div>", 
                    c.showMonthAfterYear ? p += a + r : p += r + a, l && (0 === o || c.minMonth >= o) && (u = !1), 
                    d && (11 === o || c.maxMonth <= o) && (h = !1), 0 === e && (p += '<button class="pika-prev' + (u ? "" : " is-disabled") + '" type="button">' + c.i18n.previousMonth + "</button>"), 
                    e === t._o.numberOfMonths - 1 && (p += '<button class="pika-next' + (h ? "" : " is-disabled") + '" type="button">' + c.i18n.nextMonth + "</button>"), 
                    p + "</div>";
                }(this, a, this.calendars[a].year, this.calendars[a].month, this.calendars[0].year) + this.render(this.calendars[a].year, this.calendars[a].month) + "</div>";
                this.el.innerHTML = s, e.bound && "hidden" !== e.field.type && u(function() {
                    e.trigger.focus();
                }, 1), "function" == typeof this._o.onDraw && (r = this, u(function() {
                    r._o.onDraw.call(r);
                }, 0));
            }
        },
        adjustPosition: function() {
            var t, e, i, o, n, s, r, a, c, l;
            if (!this._o.container) {
                if (this.el.style.position = "absolute", e = t = this._o.trigger, i = this.el.offsetWidth, 
                o = this.el.offsetHeight, n = window.innerWidth || p.documentElement.clientWidth, 
                s = window.innerHeight || p.documentElement.clientHeight, r = window.pageYOffset || p.body.scrollTop || p.documentElement.scrollTop, 
                "function" == typeof t.getBoundingClientRect) a = (l = t.getBoundingClientRect()).left + window.pageXOffset, 
                c = l.bottom + window.pageYOffset; else for (a = e.offsetLeft, c = e.offsetTop + e.offsetHeight; e = e.offsetParent; ) a += e.offsetLeft, 
                c += e.offsetTop;
                (this._o.reposition && n < a + i || -1 < this._o.position.indexOf("right") && 0 < a - i + t.offsetWidth) && (a = a - i + t.offsetWidth), 
                (this._o.reposition && s + r < c + o || -1 < this._o.position.indexOf("top") && 0 < c - o - t.offsetHeight) && (c = c - o - t.offsetHeight), 
                this.el.style.left = a + "px", this.el.style.top = c + "px";
            }
        },
        render: function(t, e) {
            var i = this._o, o = new Date(), n = S(t, e), s = new Date(t, e, 1).getDay(), r = [], a = [];
            W(o), 0 < i.firstDay && (s -= i.firstDay) < 0 && (s += 7);
            for (var c = 0 === e ? 11 : e - 1, l = 11 === e ? 0 : e + 1, d = 0 === e ? t - 1 : t, p = 11 === e ? t + 1 : t, u = S(d, c), h = n + s, f = h; 7 < f; ) f -= 7;
            h += 7 - f;
            for (var M, b = 0, m = 0; b < h; b++) {
                var g = new Date(t, e, b - s + 1), z = !!N(this._d) && C(g, this._d), A = C(g, o), v = b < s || n + s <= b, y = b - s + 1, O = e, L = t, T = i.startRange && C(i.startRange, g), w = i.endRange && C(i.endRange, g), q = i.startRange && i.endRange && i.startRange < g && g < i.endRange;
                v && (L = b < s ? (y = u + y, O = c, d) : (y -= n, O = l, p));
                var T = {
                    day: y,
                    month: O,
                    year: L,
                    isSelected: z,
                    isToday: A,
                    isDisabled: i.minDate && g < i.minDate || i.maxDate && g > i.maxDate || i.disableWeekends && function(t) {
                        t = t.getDay();
                        return 0 === t || 6 === t;
                    }(g) || i.disableDayFn && i.disableDayFn(g),
                    isEmpty: v,
                    isStartRange: T,
                    isEndRange: w,
                    isInRange: q,
                    showDaysInNextAndPreviousMonths: i.showDaysInNextAndPreviousMonths
                };
                a.push(function(t) {
                    var e = [];
                    if (t.isEmpty) {
                        if (!t.showDaysInNextAndPreviousMonths) return '<td class="is-empty"></td>';
                        e.push("is-outside-current-month");
                    }
                    return t.isDisabled && e.push("is-disabled"), t.isToday && e.push("is-today"), t.isSelected && e.push("is-selected"), 
                    t.isInRange && e.push("is-inrange"), t.isStartRange && e.push("is-startrange"), 
                    t.isEndRange && e.push("is-endrange"), '<td data-day="' + t.day + '" class="' + e.join(" ") + '"><button class="pika-button pika-day" type="button" data-pika-year="' + t.year + '" data-pika-month="' + t.month + '" data-pika-day="' + t.day + '">' + t.day + "</button></td>";
                }(T)), 7 == ++m && (i.showWeekNumber && a.unshift((w = b - s, q = e, T = t, M = void 0, 
                M = new Date(T, 0, 1), '<td class="pika-week">' + Math.ceil(((new Date(T, q, w) - M) / 864e5 + M.getDay() + 1) / 7) + "</td>")), 
                r.push((M = a, "<tr>" + (i.isRTL ? M.reverse() : M).join("") + "</tr>")), a = [], 
                m = 0);
            }
            return B(i, r);
        },
        isVisible: function() {
            return this._v;
        },
        show: function() {
            var t, e;
            this._v || (t = this.el, e = "is-hidden", t.className = (e = (" " + t.className + " ").replace(" " + e + " ", " ")).trim ? e.trim() : e.replace(/^\s+|\s+$/g, ""), 
            this._v = !0, this.draw(), this._o.bound && (s(p, "click", this._onClick), this.adjustPosition()), 
            "function" == typeof this._o.onOpen && this._o.onOpen.call(this));
        },
        hide: function() {
            var t, e, i = this._v;
            !1 !== i && (this._o.bound && o(p, "click", this._onClick), this.el.style.position = "static", 
            this.el.style.left = "auto", this.el.style.top = "auto", t = this.el, a(t, e = "is-hidden") || (t.className = "" === t.className ? e : t.className + " " + e), 
            this._v = !1, void 0 !== i && "function" == typeof this._o.onClose && this._o.onClose.call(this));
        },
        destroy: function() {
            this.hide(), o(this.el, "mousedown", this._onMouseDown, !0), o(this.el, "touchend", this._onMouseDown, !0), 
            o(this.el, "change", this._onChange), this._o.field && (o(this._o.field, "change", this._onInputChange), 
            this._o.bound && (o(this._o.trigger, "click", this._onInputClick), o(this._o.trigger, "focus", this._onInputFocus), 
            o(this._o.trigger, "blur", this._onInputBlur))), this.el.parentNode && this.el.parentNode.removeChild(this.el);
        }
    }, t;
}), function(_) {
    "use strict";
    function i(n, t) {
        var r, a, c, l, d, p, u, h, f, s, M, b, m, g, z, A = this, v = _(n), y = !1, O = !1, L = /android|ip(hone|od|ad)/i.test(navigator.userAgent), i = v.prop("tabindex");
        function T() {
            A.items = [];
            var t = v.children(), n = "<ul>", e = t.filter(":selected").index(), s = 0;
            f = h = ~e ? e : 0, (m = t.length) && (t.each(function() {
                var t, e, i = _(this);
                function o() {
                    var t = _(this), e = t.html(), i = t.prop("disabled"), o = A.options.optionsItemBuilder;
                    A.items[s] = {
                        element: t,
                        value: t.val(),
                        text: e,
                        slug: x.replaceDiacritics(e),
                        disabled: i
                    }, n += x.format('<li data-index="{1}" class="{2}">{3}</li>', s, _.trim([ s == f ? "selected" : "", s == m - 1 ? "last" : "", i ? "disabled" : "" ].join(" ")), _.isFunction(o) ? o(A.items[s], t, s) : x.format(o, A.items[s])), 
                    s++;
                }
                i.is("optgroup") ? (t = i.prop("disabled"), e = i.children(), n += x.format('<ul class="{1}"><li class="{2}">{3}</li>', _.trim([ A.classes.group, t ? "disabled" : "", i.prop("class") ].join(" ")), A.classes.grouplabel, i.prop("label")), 
                t && e.prop("disabled", !0), e.each(o), n += "</ul>") : o.call(i);
            }), a.append(c.html(n + "</ul>")), d.html(_.isFunction(z) ? z(A.items[f]) : x.format(z, A.items[f]))), 
            l.add(v).add(p).add(r).off(k), p.prop("class", [ A.classes.wrapper, A.options.customClass.overwrite ? v.prop("class").replace(/\S+/g, A.options.customClass.prefix + "-$&") : v.prop("class"), A.options.responsive ? A.classes.responsive : "" ].join(" ")), 
            v.prop("disabled") ? (p.addClass(A.classes.disabled), r.prop("disabled", !0)) : (O = !0, 
            p.removeClass(A.classes.disabled).on("mouseenter.sl mouseleave.sl", function(t) {
                _(this).toggleClass(A.classes.hover), A.options.openOnHover && (clearTimeout(A.closeTimer), 
                "mouseleave" == t.type ? A.closeTimer = setTimeout(S, A.options.hoverIntentTimeout) : q());
            }), l.on("click.sl", function(t) {
                y ? S() : q(t);
            }), r.prop({
                tabindex: i,
                disabled: !1
            }).on("keypress.sl", o).on("keydown.sl", function(t) {
                o(t), clearTimeout(A.resetStr), A.resetStr = setTimeout(function() {
                    r.val("");
                }, A.options.keySearchTimeout);
                t = t.keyCode || t.which;
                if (36 < t && t < 41) {
                    if (!A.options.allowWrap && (t < 39 && 0 == h || 38 < t && h + 1 == A.items.length)) return;
                    W(x[(t < 39 ? "previous" : "next") + "EnabledItem"](A.items, h));
                }
            }).on("focusin.sl", function(t) {
                r.one("blur", function() {
                    r.blur();
                }), y || q(t);
            }).on("oninput" in r[0] ? "input" : "keyup", function() {
                r.val().length && _.each(A.items, function(t, e) {
                    if (RegExp("^" + r.val(), "i").test(e.slug) && !e.disabled) return W(t), !1;
                });
            }), v.prop("tabindex", !1), u = _("li", a.removeAttr("style")).on({
                mousedown: function(t) {
                    t.preventDefault(), t.stopPropagation();
                },
                click: function() {
                    return W(_(this).data("index"), !0), !1;
                }
            }).filter("[data-index]")), x.triggerCallback("Init", A);
        }
        function w() {
            x.triggerCallback("Refresh", A), T();
        }
        function o(t) {
            var e = t.keyCode || t.which;
            13 == e && t.preventDefault(), /^(9|13|27)$/.test(e) && (t.stopPropagation(), W(h, !0));
        }
        function q(t) {
            var e, i, o;
            x.triggerCallback("BeforeOpen", A), t && (t.preventDefault(), t.stopPropagation()), 
            O && (e = a.closest(":visible").children(":hidden").addClass(A.classes.tempshow), 
            i = A.options.maxHeight, o = a.outerWidth(), t = l.outerWidth() - (o - a.width()), 
            !A.options.expandToItemText || o < t ? b = t : (a.css("overflow", "scroll"), p.width(9e4), 
            b = a.width(), a.css("overflow", ""), p.width("")), a.width(b).height() > i && a.height(i), 
            e.removeClass(A.classes.tempshow), _("." + A.classes.hideselect, "." + A.classes.open).children()[X]("close"), 
            y = !0, s = a.outerHeight(), M = a.height(), p.addClass(A.classes.open), r.val("").is(":focus") || r.focus(), 
            D.on("click.sl", S).on("scroll.sl", N), N(), A.options.preventWindowScroll && D.on("mousewheel.sl DOMMouseScroll.sl", "." + A.classes.scroll, function(t) {
                var e = t.originalEvent, i = _(this).scrollTop(), o = 0;
                "detail" in e && (o = -1 * e.detail), "wheelDelta" in e && (o = e.wheelDelta), "wheelDeltaY" in e && (o = e.wheelDeltaY), 
                "deltaY" in e && (o = -1 * e.deltaY), (i == this.scrollHeight - M && o < 0 || 0 == i && 0 < o) && t.preventDefault();
            }), C(h), x.triggerCallback("Open", A));
        }
        function N() {
            p.toggleClass(A.classes.above, p.offset().top + p.outerHeight() + s > e.scrollTop() + e.height());
        }
        function S() {
            var t;
            x.triggerCallback("BeforeClose", A), f != h && (x.triggerCallback("BeforeChange", A), 
            t = A.items[h].text, v.prop("selectedIndex", f = h).data("value", t), d.html(_.isFunction(z) ? z(A.items[h]) : x.format(z, A.items[h])), 
            x.triggerCallback("Change", A)), D.off(k), p.removeClass(A.classes.open), y = !1, 
            x.triggerCallback("Close", A);
        }
        function W(t, e) {
            null != t && (A.items[t].disabled || (u.removeClass("selected").eq(h = t).addClass("selected"), 
            C(t), e && S()));
        }
        function C(t) {
            var e = u.eq(t).outerHeight(), i = u[t].offsetTop, o = c.scrollTop(), t = i + 2 * e;
            c.scrollTop(o + s < t ? t - s : i - e < o ? i - e : o);
        }
        function B(t) {
            O && (a.add(l).add(r).remove(), t || v.removeData(X).removeData("value"), v.prop("tabindex", i).off(k).off(g).unwrap().unwrap(), 
            O = !1);
        }
        !function t(e) {
            var o, i;
            A.options = _.extend(!0, {}, E, A.options, e), A.classes = {}, A.element = n, x.triggerCallback("BeforeInit", A), 
            A.options.disableOnMobile && L ? A.disableOnMobile = !0 : (B(!0), o = A.options.customClass, 
            i = "Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive Above Scroll Group GroupLabel".split(" "), 
            e = v.width(), _.each(i, function(t, e) {
                var i = o.prefix + e;
                A.classes[e.toLowerCase()] = o.camelCase ? i : x.toDash(i);
            }), r = _("<input/>", {
                class: A.classes.input,
                readonly: L
            }), a = _("<div/>", {
                class: A.classes.items,
                tabindex: -1
            }), c = _("<div/>", {
                class: A.classes.scroll
            }), l = _("<div/>", {
                class: o.prefix,
                html: A.options.arrowButtonMarkup
            }), d = _('<p class="label"/>'), p = v.wrap("<div>").parent().append(l.prepend(d), a, r), 
            g = {
                open: q,
                close: S,
                destroy: B,
                refresh: w,
                init: t
            }, v.on(g).wrap('<div class="' + A.classes.hideselect + '">'), _.extend(A, g), z = A.options.labelBuilder, 
            A.options.inheritOriginalWidth && 0 < e && p.width(e), T());
        }(t);
    }
    var X = "selectric", k = ".sl", E = {
        onChange: function(t) {
            _(t).change();
        },
        maxHeight: 300,
        keySearchTimeout: 500,
        arrowButtonMarkup: '<b class="button">&#x25be;</b>',
        disableOnMobile: !0,
        openOnHover: !1,
        hoverIntentTimeout: 500,
        expandToItemText: !1,
        responsive: !1,
        preventWindowScroll: !0,
        inheritOriginalWidth: !1,
        allowWrap: !0,
        customClass: {
            prefix: X,
            camelCase: !1,
            overwrite: !0
        },
        optionsItemBuilder: "{text}",
        labelBuilder: "{text}"
    }, n = {
        add: function(t, e, i) {
            this[t] || (this[t] = {}), this[t][e] = i;
        },
        remove: function(t, e) {
            delete this[t][e];
        }
    }, x = {
        replaceDiacritics: function(t) {
            for (var e = "40-46 50-53 54-57 62-70 71-74 61 47 77".replace(/\d+/g, "\\3$&").split(" "), i = e.length; i--; ) t = t.toLowerCase().replace(RegExp("[" + e[i] + "]", "g"), "aeiouncy".charAt(i));
            return t;
        },
        format: function(t) {
            var o = arguments;
            return ("" + t).replace(/{(\d+|(\w+))}/g, function(t, e, i) {
                return i && o[1] ? o[1][i] : o[e];
            });
        },
        nextEnabledItem: function(t, e) {
            for (;t[e = (e + 1) % t.length].disabled; ) ;
            return e;
        },
        previousEnabledItem: function(t, e) {
            for (;t[e = (0 < e ? e : t.length) - 1].disabled; ) ;
            return e;
        },
        toDash: function(t) {
            return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        },
        triggerCallback: function(t, e) {
            var i = e.element, o = e.options["on" + t];
            _.isFunction(o) && o.call(i, i, e), n[t] && _.each(n[t], function() {
                this.call(i, i, e);
            }), _(i).trigger(X + "-" + x.toDash(t), e);
        }
    }, D = _(document), e = _(window);
    _.fn[X] = function(e) {
        return this.each(function() {
            var t = _.data(this, X);
            t && !t.disableOnMobile ? "" + e === e && t[e] ? t[e]() : t.init(e) : _.data(this, X, new i(this, e));
        });
    }, _.fn[X].hooks = n;
}(jQuery), function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery);
}(function(c) {
    "use strict";
    var s, r = window.Slick || {};
    s = 0, (r = function(t, e) {
        var i, o, n = this;
        if (n.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: c(t),
            appendDots: c(t),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(t, e) {
                return '<button type="button" data-role="none">' + (e + 1) + "</button>";
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, n.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, c.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, 
        n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.hidden = "hidden", 
        n.paused = !1, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, 
        n.$slider = c(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, 
        n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, 
        t = c(t).data("slick") || {}, n.options = c.extend({}, n.defaults, t, e), n.currentSlide = n.options.initialSlide, 
        n.originalSettings = n.options, (i = n.options.responsive || null) && -1 < i.length) {
            for (o in n.respondTo = n.options.respondTo || "window", i) i.hasOwnProperty(o) && (n.breakpoints.push(i[o].breakpoint), 
            n.breakpointSettings[i[o].breakpoint] = i[o].settings);
            n.breakpoints.sort(function(t, e) {
                return !0 === n.options.mobileFirst ? t - e : e - t;
            });
        }
        void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", 
        n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = c.proxy(n.autoPlay, n), 
        n.autoPlayClear = c.proxy(n.autoPlayClear, n), n.changeSlide = c.proxy(n.changeSlide, n), 
        n.clickHandler = c.proxy(n.clickHandler, n), n.selectHandler = c.proxy(n.selectHandler, n), 
        n.setPosition = c.proxy(n.setPosition, n), n.swipeHandler = c.proxy(n.swipeHandler, n), 
        n.dragHandler = c.proxy(n.dragHandler, n), n.keyHandler = c.proxy(n.keyHandler, n), 
        n.autoPlayIterator = c.proxy(n.autoPlayIterator, n), n.instanceUid = s++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, 
        n.init(!0), n.checkResponsive(!0);
    }).prototype.addSlide = r.prototype.slickAdd = function(t, e, i) {
        var o = this;
        if ("boolean" == typeof e) i = e, e = null; else if (e < 0 || e >= o.slideCount) return !1;
        o.unload(), "number" == typeof e ? 0 === e && 0 === o.$slides.length ? c(t).appendTo(o.$slideTrack) : i ? c(t).insertBefore(o.$slides.eq(e)) : c(t).insertAfter(o.$slides.eq(e)) : !0 === i ? c(t).prependTo(o.$slideTrack) : c(t).appendTo(o.$slideTrack), 
        o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), 
        o.$slideTrack.append(o.$slides), o.$slides.each(function(t, e) {
            c(e).attr("data-slick-index", t);
        }), o.$slidesCache = o.$slides, o.reinit();
    }, r.prototype.animateHeight = function() {
        var t;
        1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical && (t = this.$slides.eq(this.currentSlide).outerHeight(!0), 
        this.$list.animate({
            height: t
        }, this.options.speed));
    }, r.prototype.animateSlide = function(t, e) {
        var i = {}, o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), 
        !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, e) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, e) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), 
        c({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(t) {
                t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate(" + t + "px, 0px)" : i[o.animType] = "translate(0px," + t + "px)", 
                o.$slideTrack.css(i);
            },
            complete: function() {
                e && e.call();
            }
        })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", 
        o.$slideTrack.css(i), e && setTimeout(function() {
            o.disableTransition(), e.call();
        }, o.options.speed));
    }, r.prototype.asNavFor = function(e) {
        var t = this.options.asNavFor;
        t && null !== t && (t = c(t).not(this.$slider)), null !== t && "object" == typeof t && t.each(function() {
            var t = c(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0);
        });
    }, r.prototype.applyTransition = function(t) {
        var e = this, i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, 
        (!1 === e.options.fade ? e.$slideTrack : e.$slides.eq(t)).css(i);
    }, r.prototype.autoPlay = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer), this.slideCount > this.options.slidesToShow && !0 !== this.paused && (this.autoPlayTimer = setInterval(this.autoPlayIterator, this.options.autoplaySpeed));
    }, r.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    }, r.prototype.autoPlayIterator = function() {
        var t = this;
        !1 === t.options.infinite ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0), 
        t.slideHandler(t.currentSlide + t.options.slidesToScroll)) : (t.currentSlide - 1 == 0 && (t.direction = 1), 
        t.slideHandler(t.currentSlide - t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll);
    }, r.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow = c(t.options.prevArrow), 
        t.$nextArrow = c(t.options.nextArrow), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.appendTo(t.options.appendArrows), 
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), 
        !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled"));
    }, r.prototype.buildDots = function() {
        var t, e, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (e = '<ul class="' + i.options.dotsClass + '">', t = 0; t <= i.getDotCount(); t += 1) e += "<li>" + i.options.customPaging.call(this, i, t) + "</li>";
            e += "</ul>", i.$dots = c(e).appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
        }
    }, r.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, 
        t.$slides.each(function(t, e) {
            c(e).attr("data-slick-index", t).data("originalStyling", c(e).attr("style") || "");
        }), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? c('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), 
        t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), 
        t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), 
        c("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), 
        t.buildArrows(), t.buildDots(), t.updateDots(), !0 === t.options.accessibility && t.$list.prop("tabIndex", 0), 
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable");
    }, r.prototype.buildRows = function() {
        var t, e, i, o = this, n = document.createDocumentFragment(), s = o.$slider.children();
        if (1 < o.options.rows) {
            for (i = o.options.slidesPerRow * o.options.rows, e = Math.ceil(s.length / i), t = 0; t < e; t++) {
                for (var r = document.createElement("div"), a = 0; a < o.options.rows; a++) {
                    for (var c = document.createElement("div"), l = 0; l < o.options.slidesPerRow; l++) {
                        var d = t * i + (a * o.options.slidesPerRow + l);
                        s.get(d) && c.appendChild(s.get(d));
                    }
                    r.appendChild(c);
                }
                n.appendChild(r);
            }
            o.$slider.html(n), o.$slider.children().children().children().css({
                width: 100 / o.options.slidesPerRow + "%",
                display: "inline-block"
            });
        }
    }, r.prototype.checkResponsive = function(t) {
        var e, i, o, n = this, s = !1, r = n.$slider.width(), a = window.innerWidth || c(window).width();
        if ("window" === n.respondTo ? o = a : "slider" === n.respondTo ? o = r : "min" === n.respondTo && (o = Math.min(a, r)), 
        n.originalSettings.responsive && -1 < n.originalSettings.responsive.length && null !== n.originalSettings.responsive) {
            for (e in i = null, n.breakpoints) n.breakpoints.hasOwnProperty(e) && (!1 === n.originalSettings.mobileFirst ? o < n.breakpoints[e] && (i = n.breakpoints[e]) : o > n.breakpoints[e] && (i = n.breakpoints[e]));
            null !== i ? null !== n.activeBreakpoint && i === n.activeBreakpoint || (n.activeBreakpoint = i, 
            "unslick" === n.breakpointSettings[i] ? n.unslick(i) : (n.options = c.extend({}, n.originalSettings, n.breakpointSettings[i]), 
            !0 === t && (n.currentSlide = n.options.initialSlide), n.refresh(t)), s = i) : null !== n.activeBreakpoint && (n.activeBreakpoint = null, 
            n.options = n.originalSettings, !0 === t && (n.currentSlide = n.options.initialSlide), 
            n.refresh(t), s = i), t || !1 === s || n.$slider.trigger("breakpoint", [ n, s ]);
        }
    }, r.prototype.changeSlide = function(t, e) {
        var i, o, n = this, s = c(t.target);
        switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), i = n.slideCount % n.options.slidesToScroll != 0 ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll, 
        t.data.message) {
          case "previous":
            o = 0 == i ? n.options.slidesToScroll : n.options.slidesToShow - i, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide - o, !1, e);
            break;

          case "next":
            o = 0 == i ? n.options.slidesToScroll : i, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide + o, !1, e);
            break;

          case "index":
            t = 0 === t.data.index ? 0 : t.data.index || s.index() * n.options.slidesToScroll;
            n.slideHandler(n.checkNavigable(t), !1, e), s.children().trigger("focus");
            break;

          default:
            return;
        }
    }, r.prototype.checkNavigable = function(t) {
        var e = this.getNavigableIndexes(), i = 0;
        if (t > e[e.length - 1]) t = e[e.length - 1]; else for (var o in e) {
            if (t < e[o]) {
                t = i;
                break;
            }
            i = e[o];
        }
        return t;
    }, r.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (c("li", t.$dots).off("click.slick", t.changeSlide), 
        !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && c("li", t.$dots).off("mouseenter.slick", c.proxy(t.setPaused, t, !0)).off("mouseleave.slick", c.proxy(t.setPaused, t, !1))), 
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), 
        t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), 
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), 
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), 
        c(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", c.proxy(t.setPaused, t, !0)), 
        t.$list.off("mouseleave.slick", c.proxy(t.setPaused, t, !1)), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), 
        !0 === t.options.focusOnSelect && c(t.$slideTrack).children().off("click.slick", t.selectHandler), 
        c(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), 
        c(window).off("resize.slick.slick-" + t.instanceUid, t.resize), c("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), 
        c(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), c(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition);
    }, r.prototype.cleanUpRows = function() {
        var t;
        1 < this.options.rows && ((t = this.$slides.children().children()).removeAttr("style"), 
        this.$slider.html(t));
    }, r.prototype.clickHandler = function(t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault());
    }, r.prototype.destroy = function(t) {
        var e = this;
        e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), c(".slick-cloned", e.$slider).detach(), 
        e.$dots && e.$dots.remove(), e.$prevArrow && "object" != typeof e.options.prevArrow && e.$prevArrow.remove(), 
        e.$nextArrow && "object" != typeof e.options.nextArrow && e.$nextArrow.remove(), 
        e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            c(this).attr("style", c(this).data("originalStyling"));
        }), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), 
        e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), 
        e.$slider.removeClass("slick-initialized"), e.unslicked = !0, t || e.$slider.trigger("destroy", [ e ]);
    }, r.prototype.disableTransition = function(t) {
        var e = {};
        e[this.transitionType] = "", (!1 === this.options.fade ? this.$slideTrack : this.$slides.eq(t)).css(e);
    }, r.prototype.fadeSlide = function(t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function() {
            i.disableTransition(t), e.call();
        }, i.options.speed));
    }, r.prototype.fadeSlideOut = function(t) {
        !1 === this.cssTransitions ? this.$slides.eq(t).animate({
            opacity: 0,
            zIndex: this.options.zIndex - 2
        }, this.options.speed, this.options.easing) : (this.applyTransition(t), this.$slides.eq(t).css({
            opacity: 0,
            zIndex: this.options.zIndex - 2
        }));
    }, r.prototype.filterSlides = r.prototype.slickFilter = function(t) {
        null !== t && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), 
        this.$slidesCache.filter(t).appendTo(this.$slideTrack), this.reinit());
    }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
        return this.currentSlide;
    }, r.prototype.getDotCount = function() {
        var t = this, e = 0, i = 0, o = 0;
        if (!0 === t.options.infinite) for (;e < t.slideCount; ) ++o, e = i + t.options.slidesToShow, 
        i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else if (!0 === t.options.centerMode) o = t.slideCount; else for (;e < t.slideCount; ) ++o, 
        e = i + t.options.slidesToShow, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o - 1;
    }, r.prototype.getLeft = function(t) {
        var e, i = this, o = 0;
        return i.slideOffset = 0, e = i.$slides.first().outerHeight(), !0 === i.options.infinite ? (i.slideCount > i.options.slidesToShow && (i.slideOffset = i.slideWidth * i.options.slidesToShow * -1, 
        o = e * i.options.slidesToShow * -1), i.slideCount % i.options.slidesToScroll != 0 && t + i.options.slidesToScroll > i.slideCount && i.slideCount > i.options.slidesToShow && (o = t > i.slideCount ? (i.slideOffset = (i.options.slidesToShow - (t - i.slideCount)) * i.slideWidth * -1, 
        (i.options.slidesToShow - (t - i.slideCount)) * e * -1) : (i.slideOffset = i.slideCount % i.options.slidesToScroll * i.slideWidth * -1, 
        i.slideCount % i.options.slidesToScroll * e * -1))) : t + i.options.slidesToShow > i.slideCount && (i.slideOffset = (t + i.options.slidesToShow - i.slideCount) * i.slideWidth, 
        o = (t + i.options.slidesToShow - i.slideCount) * e), i.slideCount <= i.options.slidesToShow && (o = i.slideOffset = 0), 
        !0 === i.options.centerMode && !0 === i.options.infinite ? i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2) - i.slideWidth : !0 === i.options.centerMode && (i.slideOffset = 0, 
        i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2)), e = !1 === i.options.vertical ? t * i.slideWidth * -1 + i.slideOffset : t * e * -1 + o, 
        !0 === i.options.variableWidth && (e = (o = i.slideCount <= i.options.slidesToShow || !1 === i.options.infinite ? i.$slideTrack.children(".slick-slide").eq(t) : i.$slideTrack.children(".slick-slide").eq(t + i.options.slidesToShow))[0] ? -1 * o[0].offsetLeft : 0, 
        !0 === i.options.centerMode && (e = (o = !1 === i.options.infinite ? i.$slideTrack.children(".slick-slide").eq(t) : i.$slideTrack.children(".slick-slide").eq(t + i.options.slidesToShow + 1))[0] ? -1 * o[0].offsetLeft : 0, 
        e += (i.$list.width() - o.outerWidth()) / 2)), e;
    }, r.prototype.getOption = r.prototype.slickGetOption = function(t) {
        return this.options[t];
    }, r.prototype.getNavigableIndexes = function() {
        for (var t = this, e = 0, i = 0, o = [], n = !1 === t.options.infinite ? t.slideCount : (e = -1 * t.options.slidesToScroll, 
        i = -1 * t.options.slidesToScroll, 2 * t.slideCount); e < n; ) o.push(e), e = i + t.options.slidesToScroll, 
        i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o;
    }, r.prototype.getSlick = function() {
        return this;
    }, r.prototype.getSlideCount = function() {
        var i, o = this, n = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0;
        return !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(t, e) {
            if (e.offsetLeft - n + c(e).outerWidth() / 2 > -1 * o.swipeLeft) return i = e, !1;
        }), Math.abs(c(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
    }, r.prototype.goTo = r.prototype.slickGoTo = function(t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e);
    }, r.prototype.init = function(t) {
        var e = this;
        c(e.$slider).hasClass("slick-initialized") || (c(e.$slider).addClass("slick-initialized"), 
        e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), 
        e.updateArrows(), e.updateDots()), t && e.$slider.trigger("init", [ e ]);
    }, r.prototype.initArrowEvents = function() {
        !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.on("click.slick", {
            message: "previous"
        }, this.changeSlide), this.$nextArrow.on("click.slick", {
            message: "next"
        }, this.changeSlide));
    }, r.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && c("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && c("li", t.$dots).on("mouseenter.slick", c.proxy(t.setPaused, t, !0)).on("mouseleave.slick", c.proxy(t.setPaused, t, !1));
    }, r.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), c(document).on(t.visibilityChange, c.proxy(t.visibility, t)), 
        t.$list.on("mouseenter.slick", c.proxy(t.setPaused, t, !0)), t.$list.on("mouseleave.slick", c.proxy(t.setPaused, t, !1)), 
        !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), 
        c(window).on("orientationchange.slick.slick-" + t.instanceUid, c.proxy(t.orientationChange, t)), 
        c(window).on("resize.slick.slick-" + t.instanceUid, c.proxy(t.resize, t)), c("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), 
        c(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), c(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition);
    }, r.prototype.initUI = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), 
        t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show(), 
        !0 === t.options.autoplay && t.autoPlay();
    }, r.prototype.keyHandler = function(t) {
        37 === t.keyCode && !0 === this.options.accessibility ? this.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === t.keyCode && !0 === this.options.accessibility && this.changeSlide({
            data: {
                message: "next"
            }
        });
    }, r.prototype.lazyLoad = function() {
        var t, e, i = this;
        function o(t) {
            c("img[data-lazy]", t).each(function() {
                var t = c(this), e = c(this).attr("data-lazy"), i = document.createElement("img");
                i.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        t.attr("src", e).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading");
                        });
                    });
                }, i.src = e;
            });
        }
        !0 === i.options.centerMode ? e = !0 === i.options.infinite ? (t = i.currentSlide + (i.options.slidesToShow / 2 + 1)) + i.options.slidesToShow + 2 : (t = Math.max(0, i.currentSlide - (i.options.slidesToShow / 2 + 1)), 
        i.options.slidesToShow / 2 + 1 + 2 + i.currentSlide) : (e = (t = i.options.infinite ? i.options.slidesToShow + i.currentSlide : i.currentSlide) + i.options.slidesToShow, 
        !0 === i.options.fade && (0 < t && t--, e <= i.slideCount && e++)), o(i.$slider.find(".slick-slide").slice(t, e)), 
        i.slideCount <= i.options.slidesToShow ? o(i.$slider.find(".slick-slide")) : i.currentSlide >= i.slideCount - i.options.slidesToShow ? o(i.$slider.find(".slick-cloned").slice(0, i.options.slidesToShow)) : 0 === i.currentSlide && o(i.$slider.find(".slick-cloned").slice(-1 * i.options.slidesToShow));
    }, r.prototype.loadSlider = function() {
        this.setPosition(), this.$slideTrack.css({
            opacity: 1
        }), this.$slider.removeClass("slick-loading"), this.initUI(), "progressive" === this.options.lazyLoad && this.progressiveLazyLoad();
    }, r.prototype.next = r.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        });
    }, r.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition();
    }, r.prototype.pause = r.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0;
    }, r.prototype.play = r.prototype.slickPlay = function() {
        this.paused = !1, this.autoPlay();
    }, r.prototype.postSlide = function(t) {
        this.$slider.trigger("afterChange", [ this, t ]), this.animating = !1, this.setPosition(), 
        !(this.swipeLeft = null) === this.options.autoplay && !1 === this.paused && this.autoPlay();
    }, r.prototype.prev = r.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        });
    }, r.prototype.preventDefault = function(t) {
        t.preventDefault();
    }, r.prototype.progressiveLazyLoad = function() {
        var t, e = this;
        0 < c("img[data-lazy]", e.$slider).length && (t = c("img[data-lazy]", e.$slider).first()).attr("src", t.attr("data-lazy")).removeClass("slick-loading").load(function() {
            t.removeAttr("data-lazy"), e.progressiveLazyLoad(), !0 === e.options.adaptiveHeight && e.setPosition();
        }).error(function() {
            t.removeAttr("data-lazy"), e.progressiveLazyLoad();
        });
    }, r.prototype.refresh = function(t) {
        var e = this.currentSlide;
        this.destroy(!0), c.extend(this, this.initials, {
            currentSlide: e
        }), this.init(), t || this.changeSlide({
            data: {
                message: "index",
                index: e
            }
        }, !1);
    }, r.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, 
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), 
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.setProps(), t.setupInfinite(), 
        t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), 
        t.initDotEvents(), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), 
        t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [ t ]);
    }, r.prototype.resize = function() {
        var t = this;
        c(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = c(window).width(), t.checkResponsive(), t.unslicked || t.setPosition();
        }, 50));
    }, r.prototype.removeSlide = r.prototype.slickRemove = function(t, e, i) {
        var o = this;
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : o.slideCount - 1 : !0 === e ? --t : t, 
        o.slideCount < 1 || t < 0 || t > o.slideCount - 1) return !1;
        o.unload(), (!0 === i ? o.$slideTrack.children() : o.$slideTrack.children(this.options.slide).eq(t)).remove(), 
        o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), 
        o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
    }, r.prototype.setCSS = function(t) {
        var e, i, o = this, n = {};
        !0 === o.options.rtl && (t = -t), e = "left" == o.positionProp ? Math.ceil(t) + "px" : "0px", 
        i = "top" == o.positionProp ? Math.ceil(t) + "px" : "0px", n[o.positionProp] = t, 
        !1 === o.transformsEnabled || (!(n = {}) === o.cssTransitions ? n[o.animType] = "translate(" + e + ", " + i + ")" : n[o.animType] = "translate3d(" + e + ", " + i + ", 0px)"), 
        o.$slideTrack.css(n);
    }, r.prototype.setDimensions = function() {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), 
        !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), 
        t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), 
        t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
    }, r.prototype.setFade = function() {
        var i, o = this;
        o.$slides.each(function(t, e) {
            i = o.slideWidth * t * -1, !0 === o.options.rtl ? c(e).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            }) : c(e).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            });
        }), o.$slides.eq(o.currentSlide).css({
            zIndex: o.options.zIndex - 1,
            opacity: 1
        });
    }, r.prototype.setHeight = function() {
        var t;
        1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical && (t = this.$slides.eq(this.currentSlide).outerHeight(!0), 
        this.$list.css("height", t));
    }, r.prototype.setOption = r.prototype.slickSetOption = function(t, e, i) {
        this.options[t] = e, !0 === i && (this.unload(), this.reinit());
    }, r.prototype.setPosition = function() {
        this.setDimensions(), this.setHeight(), !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(), 
        this.$slider.trigger("setPosition", [ this ]);
    }, r.prototype.setProps = function() {
        var t = this, e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), 
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), 
        t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), 
        void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", 
        t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), 
        void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", 
        t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), 
        void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", 
        t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), 
        void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", 
        t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), 
        void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", 
        t.transitionType = "transition"), t.transformsEnabled = null !== t.animType && !1 !== t.animType;
    }, r.prototype.setSlideClasses = function(t) {
        var e, i, o = this, n = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        o.$slides.eq(t).addClass("slick-current"), !0 === o.options.centerMode ? (i = Math.floor(o.options.slidesToShow / 2), 
        !0 === o.options.infinite && (i <= t && t <= o.slideCount - 1 - i ? o.$slides.slice(t - i, t + i + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = o.options.slidesToShow + t, 
        n.slice(e - i + 1, e + i + 2).addClass("slick-active").attr("aria-hidden", "false")), 
        0 === t ? n.eq(n.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && n.eq(o.options.slidesToShow).addClass("slick-center")), 
        o.$slides.eq(t).addClass("slick-center")) : 0 <= t && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= o.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (i = o.slideCount % o.options.slidesToShow, 
        e = !0 === o.options.infinite ? o.options.slidesToShow + t : t, (o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? n.slice(e - (o.options.slidesToShow - i), e + i) : n.slice(e, e + o.options.slidesToShow)).addClass("slick-active").attr("aria-hidden", "false")), 
        "ondemand" === o.options.lazyLoad && o.lazyLoad();
    }, r.prototype.setupInfinite = function() {
        var t, e, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (e = null, 
        o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, 
            t = o.slideCount; t > o.slideCount - i; --t) e = t - 1, c(o.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < i; t += 1) e = t, c(o.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                c(this).attr("id", "");
            });
        }
    }, r.prototype.setPaused = function(t) {
        !0 === this.options.autoplay && !0 === this.options.pauseOnHover && ((this.paused = t) ? this.autoPlayClear() : this.autoPlay());
    }, r.prototype.selectHandler = function(t) {
        t = c(t.target).is(".slick-slide") ? c(t.target) : c(t.target).parents(".slick-slide"), 
        t = (t = parseInt(t.attr("data-slick-index"))) || 0;
        if (this.slideCount <= this.options.slidesToShow) return this.setSlideClasses(t), 
        void this.asNavFor(t);
        this.slideHandler(t);
    }, r.prototype.slideHandler = function(t, e, i) {
        var o, n, s, r = this;
        if (e = e || !1, (!0 !== r.animating || !0 !== r.options.waitForAnimate) && !(!0 === r.options.fade && r.currentSlide === t || r.slideCount <= r.options.slidesToShow)) if (!1 === e && r.asNavFor(t), 
        o = t, s = r.getLeft(o), e = r.getLeft(r.currentSlide), r.currentLeft = null === r.swipeLeft ? e : r.swipeLeft, 
        !1 === r.options.infinite && !1 === r.options.centerMode && (t < 0 || t > r.getDotCount() * r.options.slidesToScroll)) !1 === r.options.fade && (o = r.currentSlide, 
        !0 !== i ? r.animateSlide(e, function() {
            r.postSlide(o);
        }) : r.postSlide(o)); else if (!1 === r.options.infinite && !0 === r.options.centerMode && (t < 0 || t > r.slideCount - r.options.slidesToScroll)) !1 === r.options.fade && (o = r.currentSlide, 
        !0 !== i ? r.animateSlide(e, function() {
            r.postSlide(o);
        }) : r.postSlide(o)); else {
            if (!0 === r.options.autoplay && clearInterval(r.autoPlayTimer), n = o < 0 ? r.slideCount % r.options.slidesToScroll != 0 ? r.slideCount - r.slideCount % r.options.slidesToScroll : r.slideCount + o : o >= r.slideCount ? r.slideCount % r.options.slidesToScroll != 0 ? 0 : o - r.slideCount : o, 
            r.animating = !0, r.$slider.trigger("beforeChange", [ r, r.currentSlide, n ]), e = r.currentSlide, 
            r.currentSlide = n, r.setSlideClasses(r.currentSlide), r.updateDots(), r.updateArrows(), 
            !0 === r.options.fade) return !0 !== i ? (r.fadeSlideOut(e), r.fadeSlide(n, function() {
                r.postSlide(n);
            })) : r.postSlide(n), void r.animateHeight();
            !0 !== i ? r.animateSlide(s, function() {
                r.postSlide(n);
            }) : r.postSlide(n);
        }
    }, r.prototype.startLoad = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), 
        t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), 
        t.$slider.addClass("slick-loading");
    }, r.prototype.swipeDirection = function() {
        var t = this.touchObject.startX - this.touchObject.curX, e = this.touchObject.startY - this.touchObject.curY, t = Math.atan2(e, t), t = Math.round(180 * t / Math.PI);
        return t < 0 && (t = 360 - Math.abs(t)), t <= 45 && 0 <= t || t <= 360 && 315 <= t ? !1 === this.options.rtl ? "left" : "right" : 135 <= t && t <= 225 ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? 35 <= t && t <= 135 ? "left" : "right" : "vertical";
    }, r.prototype.swipeEnd = function(t) {
        var e, i = this;
        if (i.dragging = !1, i.shouldClick = !(10 < i.touchObject.swipeLength), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [ i, i.swipeDirection() ]), 
        i.touchObject.swipeLength >= i.touchObject.minSwipe) switch (i.swipeDirection()) {
          case "left":
            e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), 
            i.slideHandler(e), i.currentDirection = 0, i.touchObject = {}, i.$slider.trigger("swipe", [ i, "left" ]);
            break;

          case "right":
            e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), 
            i.slideHandler(e), i.currentDirection = 1, i.touchObject = {}, i.$slider.trigger("swipe", [ i, "right" ]);
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), 
        i.touchObject = {});
    }, r.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, 
        e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), 
        t.data.action) {
          case "start":
            e.swipeStart(t);
            break;

          case "move":
            e.swipeMove(t);
            break;

          case "end":
            e.swipeEnd(t);
        }
    }, r.prototype.swipeMove = function(t) {
        var e, i, o = this, n = void 0 !== t.originalEvent ? t.originalEvent.touches : null;
        return !(!o.dragging || n && 1 !== n.length) && (e = o.getLeft(o.currentSlide), 
        o.touchObject.curX = void 0 !== n ? n[0].pageX : t.clientX, o.touchObject.curY = void 0 !== n ? n[0].pageY : t.clientY, 
        o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), 
        !0 === o.options.verticalSwiping && (o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2)))), 
        "vertical" !== (i = o.swipeDirection()) ? (void 0 !== t.originalEvent && 4 < o.touchObject.swipeLength && t.preventDefault(), 
        n = (!1 === o.options.rtl ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), 
        !0 === o.options.verticalSwiping && (n = o.touchObject.curY > o.touchObject.startY ? 1 : -1), 
        t = o.touchObject.swipeLength, (o.touchObject.edgeHit = !1) === o.options.infinite && (0 === o.currentSlide && "right" === i || o.currentSlide >= o.getDotCount() && "left" === i) && (t = o.touchObject.swipeLength * o.options.edgeFriction, 
        o.touchObject.edgeHit = !0), !1 === o.options.vertical ? o.swipeLeft = e + t * n : o.swipeLeft = e + t * (o.$list.height() / o.listWidth) * n, 
        !0 === o.options.verticalSwiping && (o.swipeLeft = e + t * n), !0 !== o.options.fade && !1 !== o.options.touchMove && (!0 === o.animating ? (o.swipeLeft = null, 
        !1) : void o.setCSS(o.swipeLeft))) : void 0);
    }, r.prototype.swipeStart = function(t) {
        var e;
        if (1 !== this.touchObject.fingerCount || this.slideCount <= this.options.slidesToShow) return !(this.touchObject = {});
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), 
        this.touchObject.startX = this.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, 
        this.touchObject.startY = this.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, 
        this.dragging = !0;
    }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
        null !== this.$slidesCache && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), 
        this.$slidesCache.appendTo(this.$slideTrack), this.reinit());
    }, r.prototype.unload = function() {
        var t = this;
        c(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), 
        t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), 
        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }, r.prototype.unslick = function(t) {
        this.$slider.trigger("unslick", [ this, t ]), this.destroy();
    }, r.prototype.updateArrows = function() {
        var t = this;
        Math.floor(t.options.slidesToShow / 2);
        !0 === t.options.arrows && !0 !== t.options.infinite && t.slideCount > t.options.slidesToShow && (t.$prevArrow.removeClass("slick-disabled"), 
        t.$nextArrow.removeClass("slick-disabled"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled"), 
        t.$nextArrow.removeClass("slick-disabled")) : (t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode || t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode) && (t.$nextArrow.addClass("slick-disabled"), 
        t.$prevArrow.removeClass("slick-disabled")));
    }, r.prototype.updateDots = function() {
        null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), 
        this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
    }, r.prototype.visibility = function() {
        document[this.hidden] ? (this.paused = !0, this.autoPlayClear()) : !0 === this.options.autoplay && (this.paused = !1, 
        this.autoPlay());
    }, c.fn.slick = function() {
        for (var t, e = arguments[0], i = Array.prototype.slice.call(arguments, 1), o = this.length, n = 0; n < o; n++) if ("object" == typeof e || void 0 === e ? this[n].slick = new r(this[n], e) : t = this[n].slick[e].apply(this[n].slick, i), 
        void 0 !== t) return t;
        return this;
    };
}), function() {
    var S = this.jQuery || window.jQuery, W = S(window);
    S.fn.stick_in_parent = function(t) {
        var v, y, e, i, O, o, L, T, w, q, N;
        for (null == t && (t = {}), N = t.sticky_class, O = t.inner_scrolling, q = t.recalc_every, 
        w = t.parent, T = t.offset_top, L = t.spacer, y = t.bottoming, null == T && (T = 0), 
        null == w && (w = void 0), null == O && (O = !0), null == N && (N = "is_stuck"), 
        v = S(document), null == y && (y = !0), e = function(n, s, r, a, c, l, d, p) {
            var u, t, h, f, M, b, m, g, e, z, A, o;
            if (!n.data("sticky_kit")) {
                if (n.data("sticky_kit", !0), M = v.height(), m = n.parent(), null != w && (m = m.closest(w)), 
                !m.length) throw "failed to find stick parent";
                if (u = h = !1, (A = null != L ? L && n.closest(L) : S("<div />")) && A.css("position", n.css("position")), 
                (g = function() {
                    var t, e, i;
                    if (!p && (M = v.height(), t = parseInt(m.css("border-top-width"), 10), e = parseInt(m.css("padding-top"), 10), 
                    s = parseInt(m.css("padding-bottom"), 10), r = m.offset().top + t + e, a = m.height(), 
                    h && (u = h = !1, null == L && (n.insertAfter(A), A.detach()), n.css({
                        position: "",
                        top: "",
                        width: "",
                        bottom: ""
                    }).removeClass(N), i = !0), c = n.offset().top - (parseInt(n.css("margin-top"), 10) || 0) - T, 
                    l = n.outerHeight(!0), d = n.css("float"), A && A.css({
                        width: n.outerWidth(!0),
                        height: l,
                        display: n.css("display"),
                        "vertical-align": n.css("vertical-align"),
                        float: d
                    }), i)) return o();
                })(), l !== a) return f = void 0, b = T, z = q, o = function() {
                    var t, e, i, o;
                    if (!p && (i = !1, null != z && (--z <= 0 && (z = q, g(), i = !0)), i || v.height() === M || g(), 
                    i = W.scrollTop(), null != f && (e = i - f), f = i, h ? (y && (o = a + r < i + l + b, 
                    u && !o && (u = !1, n.css({
                        position: "fixed",
                        bottom: "",
                        top: b
                    }).trigger("sticky_kit:unbottom"))), i < c && (h = !1, b = T, null == L && ("left" !== d && "right" !== d || n.insertAfter(A), 
                    A.detach()), t = {
                        position: "",
                        width: "",
                        top: ""
                    }, n.css(t).removeClass(N).trigger("sticky_kit:unstick")), O && ((t = W.height()) < l + T && !u && (b -= e, 
                    b = Math.max(t - l, b), b = Math.min(T, b), h && n.css({
                        top: b + "px"
                    })))) : c < i && (h = !0, (t = {
                        position: "fixed",
                        top: b
                    }).width = "border-box" === n.css("box-sizing") ? n.outerWidth() + "px" : n.width() + "px", 
                    n.css(t).addClass(N), null == L && (n.after(A), "left" !== d && "right" !== d || A.append(n)), 
                    n.trigger("sticky_kit:stick")), h && y && (null == o && (o = a + r < i + l + b), 
                    !u && o))) return u = !0, "static" === m.css("position") && m.css({
                        position: "relative"
                    }), n.css({
                        position: "absolute",
                        bottom: s,
                        top: "auto"
                    }).trigger("sticky_kit:bottom");
                }, e = function() {
                    return g(), o();
                }, t = function() {
                    if (p = !0, W.off("touchmove", o), W.off("scroll", o), W.off("resize", e), S(document.body).off("sticky_kit:recalc", e), 
                    n.off("sticky_kit:detach", t), n.removeData("sticky_kit"), n.css({
                        position: "",
                        bottom: "",
                        top: "",
                        width: ""
                    }), m.position("position", ""), h) return null == L && ("left" !== d && "right" !== d || n.insertAfter(A), 
                    A.remove()), n.removeClass(N);
                }, W.on("touchmove", o), W.on("scroll", o), W.on("resize", e), S(document.body).on("sticky_kit:recalc", e), 
                n.on("sticky_kit:detach", t), setTimeout(o, 0);
            }
        }, i = 0, o = this.length; i < o; i++) t = this[i], e(S(t));
        return this;
    };
}.call(this);

var $window = $(window), $document = $(document), $body = $("body"), $html = $("html"), $navBar = $("#desktop-nav"), pnpHelper = {}, navHeights = {
    xs: 57,
    sm: 65,
    md: 73,
    lg: 81,
    xlg: 96
};

function doBrowserCheck(t) {
    var e;
    -1 < navigator.userAgent.toLowerCase().indexOf("firefox") ? (pnpHelper.browser.isFirefox = !0, 
    t && $html.addClass("browser-firefox")) : /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) ? (pnpHelper.browser.isChrome = !0, 
    t && ($html.addClass("browser-chrome"), $html.addClass("browser-webkit"))) : /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor) ? (pnpHelper.browser.isSafari = !0, 
    t && ($html.addClass("browser-safari"), $html.addClass("browser-webkit"))) : (e = !1, 
    (e = function() {
        var t = window.navigator.userAgent, e = t.indexOf("MSIE ");
        if (0 < e) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
        if (0 < t.indexOf("Trident/")) {
            var i = t.indexOf("rv:");
            return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10);
        }
        return 0 < (i = t.indexOf("Edge/")) && parseInt(t.substring(i + 5, t.indexOf(".", i)), 10);
    }()) && (pnpHelper.browser.isIE = !0, pnpHelper.browser.version.ie = e, t && ($html.addClass("browser-ie"), 
    $html.addClass("browser-ie-" + e), $html.addClass("browser-lt-ie-" + (e + 1)), e < 12 ? $html.addClass("browser-lt-edge") : 12 <= e && $html.addClass("browser-edge")))), 
    navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform) && (pnpHelper.browser.isIOS = !0, 
    navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS 7_\d/i) && (pnpHelper.browser.version.ios = 7, 
    t && $html.addClass("os-ios-7")), t && $html.addClass("os-ios"));
}

pnpHelper.bootstrap = {
    xs: 768,
    md: 992,
    lg: 1200,
    xlg: 1500,
    ipadLanscape: 1024,
    ipadPortrait: 768,
    isXs: function() {
        return $window.outerWidth() < pnpHelper.bootstrap.xs;
    },
    isSm: function() {
        return $window.outerWidth() >= pnpHelper.bootstrap.xs;
    },
    isMd: function() {
        return $window.outerWidth() >= pnpHelper.bootstrap.md;
    },
    isLg: function() {
        return $window.outerWidth() >= pnpHelper.bootstrap.lg;
    },
    isXlg: function() {
        return $window.outerWidth() >= pnpHelper.bootstrap.xlg;
    }
}, pnpHelper.getNavHeight = function() {
    return pnpHelper.bootstrap.isXlg() ? navHeights.xlg : pnpHelper.bootstrap.isLg() ? navHeights.lg : pnpHelper.bootstrap.isMd() ? navHeights.md : pnpHelper.bootstrap.isSm() ? navHeights.sm : 0;
}, pnpHelper.onResizeFinished = function(e, t) {
    var i;
    $window.on("resize", function(t) {
        clearTimeout(i), i = setTimeout(e, 50);
    }), t && e.call();
}, pnpHelper.scroll = {
    scrollPast: function(t, e) {
        t = (t = e || $(t)).offset().top + t.outerHeight(!0) - pnpHelper.getNavHeight();
        pnpHelper.scroll.doScroll(t);
    },
    scrollTo: function(t, e, i) {
        t = $(t).offset().top;
        void 0 === i && (i = 0), t -= pnpHelper.getNavHeight(), i && (t -= i), pnpHelper.scroll.doScroll(t, e);
    },
    doScroll: function(t, e) {
        e = e || null, void 0 !== t && $("html,body").animate({
            scrollTop: t
        }, 500, e);
    },
    preventDefault: function(t) {
        (t = t || window.event).preventDefault && t.preventDefault(), t.returnValue = !1;
    },
    lock: function() {
        window.addEventListener && window.addEventListener("DOMMouseScroll", pnpHelper.scroll.preventDefault, !1), 
        window.onwheel = pnpHelper.scroll.preventDefault, window.onmousewheel = document.onmousewheel = pnpHelper.scroll.preventDefault, 
        window.ontouchmove = pnpHelper.scroll.preventDefault, document.onkeydown = function(t) {
            if ({
                37: 1,
                38: 1,
                39: 1,
                40: 1
            }[t.keyCode]) return pnpHelper.scroll.preventDefault(t), !1;
        };
    },
    unlock: function() {
        window.removeEventListener && window.removeEventListener("DOMMouseScroll", pnpHelper.scroll.preventDefault, !1), 
        window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, 
        document.onkeydown = null;
    }
}, pnpHelper.preloadImage = function(t) {
    Log.info("Preloading image: " + t), new Image().src = t;
}, pnpHelper.dependencyCheck = {
    fixTo: "fixTo",
    viewportChecker: "viewportChecker",
    jqueryCookie: "jqueryCookie",
    slickSlider: "slickSlider",
    hoverIntent: "hoverIntent",
    bootstrapModal: "bootstrapModal",
    fullPageJs: "fullPageJs",
    requireDependencies: function(e, t) {
        if (t && t.length) {
            var i, o = !1;
            function n(t) {
                console.error("MISSING DEPENDENCY: The component '" + e + "' requires the JS library '" + t + "'. Please add it to the project."), 
                o = !0;
            }
            for (i in t) {
                var s = t[i];
                s === pnpHelper.dependencyCheck.fixTo ? window.fixto || n(s) : s === pnpHelper.dependencyCheck.viewportChecker ? $.fn.viewportChecker || n(s) : s === pnpHelper.dependencyCheck.jqueryCookie ? $.cookie || n(s) : s === pnpHelper.dependencyCheck.slickSlider ? $.fn.slick || n(s) : s === pnpHelper.dependencyCheck.hoverIntent ? $.fn.hoverIntent || n(s) : s === pnpHelper.dependencyCheck.bootstrapModal ? $.fn.modal || n(s) : s === pnpHelper.dependencyCheck.fullPageJs ? $.fn.fullpage || n(s) : console.warn("A check for dependency '" + s + "' was not found.");
            }
            return o;
        }
        return console.warn("No dependencies passed to dependencyCheck.requireDependencies() function"), 
        !1;
    }
}, doBrowserCheck(!(pnpHelper.browser = {
    isFirefox: !1,
    isChrome: !1,
    isSafari: !1,
    isIOS: !1,
    isIE: !1,
    version: {
        ie: !1,
        ios: !1
    }
})), function() {
    function t() {}
    window.console || (window.console = {
        log: t,
        info: t,
        warn: t,
        debug: t,
        error: t
    });
}();

var touch = Modernizr.prefixed("MaxTouchPoints", navigator);

!Modernizr.touch && (touch || navigator.maxTouchPoints && 0 < navigator.maxTouchPoints) && (Modernizr.touch = !0, 
$html.addClass("touch").removeClass("no-touch")), pnpHelper.ajaxNavigation = function() {
    var s = [];
    this.loadPage = function(i, e, o) {
        function n(t) {
            e && (t ? (window.history.pushState && window.history.pushState(t, t.title, i), 
            $("#content > article").height($("#content > article").outerHeight()), $("#content > article").html(t.html), 
            $("title").text(t.title), $("#content > article").height("auto"), $.pnp.initPage()) : console.error("A valid page cannot be found for URL " + thisSlideUrl, t)), 
            o && o(t);
        }
        s[i] ? (console.log("Returning page from cache"), n(s[i])) : (console.log("Returning page"), 
        $.get(i, function(t) {
            var e = $(t).find("#content > article").html(), t = $(t).filter("title").text();
            s[i] = {
                html: e,
                title: t
            }, n(s[i]);
        }));
    };
}, pnpHelper.modal = {
    open: function(e) {
        var t = 0, i = 0;
        $(e).on("shown.bs.modal", function(t) {
            $.pnp.initPage(), wpcf7.initForm($(e).find(".wpcf7 > form"));
        }).on("show.bs.modal", function() {
            t = $("body").css("top"), i = $("body").scrollTop(), $body.css({
                top: -i
            });
        }).on("hidden.bs.modal", function() {
            $body.css({
                top: t
            }), $body.scrollTop(i);
        }).modal();
    }
}, pnpHelper.debounce = function(o, n, s) {
    var r;
    return function() {
        var t = this, e = arguments, i = s && !r;
        clearTimeout(r), r = setTimeout(function() {
            r = null, s || o.apply(t, e);
        }, n), i && o.apply(t, e);
    };
}, pnpHelper.getUrlParameter = function(t) {
    t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    t = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(location.search);
    return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "));
};

var faqs, $searchBox, $numResults, doSearch, lastScrollTop = 0;

function scrollDirection() {
    var t = $window.scrollTop();
    lastScrollTop <= t ? $window.trigger("scrolldown") : $window.trigger("scrollup"), 
    lastScrollTop = t;
}

function initBannerVideos() {
    pnpHelper.bootstrap.isMd() && $(".has-background-video").each(function() {
        var t = $(this), e = t.find("[data-src]");
        e.attr("src", e.data("src")).removeAttr("data-src"), "function" == typeof e.parent().load && e.parent().load(), 
        setTimeout(function() {
            t.find(".loading-cover").addClass("-in");
        }, 4500);
    });
}

function adjustHeadingHeight() {
    $(".component-icon-text-grid").each(function() {
        var t = 0;
        $(".heading", this).each(function() {
            $(this).css("height", "auto"), $(this).height() > t && (t = $(this).height());
        }), $(".heading", this).height(t);
    });
}

window.addEventListener("scroll", scrollDirection), function(d) {
    d.pnp = {}, d.pnp.initPlaceholderShim = function() {
        d.placeholder.shim();
    }, d.pnp.initSelectric = function() {
        d('select:not(".-unstyled"):not(.country_select)').selectric({
            onChange: function() {
                0 === d(this).val().length ? d(this).addClass("placeholder") : d(this).removeClass("placeholder"), 
                d(this).selectric("refresh"), $document.trigger("pegasus-selectric-changed", [ d(this) ]);
            },
            onClose: function() {
                "select_required" === d(this).attr("data-validation") && (0 === d(this).val().length ? (d(this).closest(".selectric-wrapper").find(".selectric").addClass("error").removeClass("valid"), 
                d(this).closest(".form-group").hasClass("has-error") || d(this).closest(".form-group").addClass("has-error").append('<span class="help-block form-error">This is a required field</span>')) : (d(this).closest(".selectric-wrapper").find(".selectric").addClass("valid").removeClass("error"), 
                d(this).closest(".has-error").removeClass("has-error").find(".form-error").remove()));
            }
        });
    }, d.pnp.initDatePicker = function() {
        d(".datepicker").each(function() {
            var t = new Date();
            t.setDate(t.getDate() + 1), "future" == d(this).data("pnp-pikaday-config") ? new Pikaday({
                field: d(this)[0],
                format: "DD/MM/YYYY",
                minDate: t
            }) : new Pikaday({
                field: d(this)[0],
                format: "DD/MM/YYYY"
            });
        });
    }, d.pnp.initFormValidation = function() {
        d.validate({
            modules: "uk, date, security",
            scrollToTopOnError: !1,
            onValidate: function(t) {
                var e = [];
                return t.find('select[data-validation="pnp_select_required"]:hidden').each(function() {
                    0 === d(this).val().length ? (e.push({
                        element: d(this),
                        message: "This is a required field"
                    }), d(this).closest(".selectric-wrapper").find(".selectric").addClass("error").removeClass("valid")) : d(this).closest(".selectric-wrapper").find(".selectric").removeClass("error").addClass("valid");
                }), 0 === e.length || e;
            }
        }), $document.on("click", "[data-pnp-validate-postcode]", function() {
            var i = d(this);
            return d(d(this).data("pnp-validate-postcode")).validate(function(t, e) {
                t && d(i.data("pnp-show-postcode")).slideDown();
            }), !1;
        });
    }, d.pnp.initFixto = function() {
        d("[data-pnp-fixto]").fixTo("body", {
            top: pnpHelper.getNavHeight()
        }), d("[data-pnp-fixto-parent]").each(function() {
            d(this).fixTo(d(this).parent(), {
                top: pnpHelper.getNavHeight()
            });
        });
    }, d.pnp.initDropdowns = function() {
        d(".dropdown").dropdown();
    }, d.pnp.initScrollHijack = function() {
        if ($body.hasClass("page-template-tpl-one-page-scroll-php")) {
            if (pnpHelper.dependencyCheck.requireDependencies("Scroll Hijack", [ pnpHelper.dependencyCheck.fullPageJs ])) return;
            pnpHelper.bootstrap.isSm() && d("#content > article").fullpage({
                scrollBar: !0,
                scrollingSpeed: 1e3,
                navigation: !0,
                responsiveWidth: 768,
                navigationPosition: "right",
                fixedElements: "#page-header",
                fadingEffect: !0,
                fadingEffectKey: "_",
                sectionSelector: ".fullpage-section",
                slideSelector: ".fullpage-slide"
            });
        }
    }, d.pnp.initPageScrolled = function() {
        var t, e;
        countUp = function(t) {
            var e = parseFloat(t.innerHTML.replace(",", ""), 10), i = Math.min(parseInt(e), 49), o = Math.max(Math.ceil(e / i), 1), n = Math.max(Math.round(3e3 / i), 1), s = 0, r = function() {
                (s += o) < e ? (t.innerHTML = s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 
                setTimeout(r, n)) : (t.innerHTML = e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 
                t.classList.toggle("count"), t.classList.toggle("done"));
            };
            0 < n && n <= 3e3 && (t.innerHTML = s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 
            setTimeout(r, n));
        }, countUpAll = function(t) {
            var e, i = d(t).find(".number"), o = 0;
            i.each(function() {
                d(this).data("target", parseFloat(d(this).text().replace(",", ""))), d(this).data("val", 0), 
                d(this).text("0");
            }), e = setInterval(function() {
                50 === (o += 1) ? (i.each(function() {
                    d(this).html(d(this).data("target").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                }), clearInterval(e)) : i.each(function() {
                    d(this).data("val", parseFloat(d(this).data("val")) + d(this).data("target") / 50), 
                    d(this).html(Math.round(d(this).data("val")));
                });
            }, 60);
        }, d("html").hasClass("no-scroll") && (100 < d(document).scrollTop() && (d("html").removeClass("no-scroll"), 
        d("html").addClass("scrolled")), e = t = 0, d(document).on("scroll", function() {
            (t = d(document).scrollTop()) < e ? (d("html").addClass("scroll-up"), d("html").removeClass("scroll-down")) : (d("html").removeClass("scroll-up"), 
            d("html").addClass("scroll-down")), 100 < d(document).scrollTop() ? (d("html").removeClass("no-scroll"), 
            d("html").addClass("scrolled")) : (d("html").addClass("no-scroll"), d("html").removeClass("scrolled")), 
            e = t;
        }));
        var i = function(t, i) {
            d(t).each(function(t, e) {
                e.isIntersecting && e.intersectionRatio >= i.thresholds[0] && (e.target.dataset.pnpbg && (d("#content").css("backgroundColor", e.target.dataset.pnpbg), 
                d(".component-logo").css("color", e.target.dataset.pnpbg)), e.target.dataset.pnptxt && d("#content").css("color", e.target.dataset.pnptxt)), 
                e.isIntersecting && !e.target.classList.contains("scrolled") && e.intersectionRatio >= i.thresholds[0] && requestAnimationFrame(function() {
                    e.target.classList.contains("scrolled") || (e.target.classList.add("scrolled"), 
                    e.target.classList.contains("component-count-up") && countUpAll(e.target));
                });
            });
        }, o = new IntersectionObserver(i, {
            threshold: .5
        }), n = new IntersectionObserver(i, {
            rootMargin: "0% 0% -33% 0%"
        });
        observer3 = new IntersectionObserver(i, {
            rootMargin: "0% 0% -5% 0%"
        }), d(".component, .component-count-up, .individual-card").each(function(t, e) {
            o.observe(e), n.observe(e);
        }), d(".component-text-grid__grid-content").each(function(t, e) {
            o.observe(e), observer3.observe(e);
        });
        function s(t, e) {
            d.each(t, function(t, e) {
                e.isIntersecting && requestAnimationFrame(function() {
                    Math.round(e.intersectionRect.bottom) === Math.round(e.rootBounds.bottom) ? e.target.dataset.parallax = Math.max(0, Math.min(50, Math.round(e.intersectionRect.height / e.rootBounds.height * 50))) : e.target.dataset.parallax = 100 - Math.max(0, Math.min(50, Math.round(e.intersectionRect.height / e.rootBounds.height * 50)));
                });
            });
        }
        var i = function() {
            for (var t = 100, e = []; t--; ) e[t] = t / 100;
            return e;
        }, r = new IntersectionObserver(s, {
            threshold: i(),
            rootMargin: "0% 0% 0% 0%"
        }), a = new IntersectionObserver(function(t, e) {
            d.each(t, function(t, e) {
                e.isIntersecting ? requestAnimationFrame(function() {
                    e.target.dataset.parallax = Math.round(100 * e.intersectionRatio);
                }) : e.target.dataset.parallax = "";
            });
        }, {
            threshold: i(),
            rootMargin: "-25% 0% -25% 0%"
        }), c = new IntersectionObserver(function(t, e) {
            d.each(t, function(t, e) {
                e.isIntersecting ? e.target.classList.remove("unfix") : e.target.classList.add("unfix");
            });
        }, {
            threshold: 0,
            rootMargin: "-100% 0% 100% 0%"
        }), l = new IntersectionObserver(s, {
            threshold: i(),
            rootMargin: "-33% 0% -33% 0%"
        });
        d(".component-banner, .component-process__rows-row").each(function() {
            r.observe(this);
        }), d(".component-call-to-action").each(function() {
            a.observe(this);
        }), d(".component-featured-text, .component-stat-list").each(function() {
            c.observe(this);
        }), d(".component-process__rows-row").each(function() {
            l.observe(this);
        });
    }, d.pnp.initVideo = function() {
        for (var o = document.querySelectorAll(".bg-player"), t = o.length, n = 0; n < t; n += 1) !function() {
            var i, t, e;
            o[n].classList.contains("provider-vimeo") && "undefined" != typeof Vimeo && (i = o[n].querySelector("iframe"), 
            t = new Vimeo.Player(i), e = o[n], "undefined" != typeof Promise && Promise.all([ t.getVideoWidth(), t.getVideoHeight() ]).then(function(t) {
                var e = t[0], t = t[1];
                i.style.minWidth = 105 / (t / e) + "vh", i.style.minHeight = 100 / (e / t) + "vw";
            }), t.on("bufferend", function() {
                e.classList.add("played");
            }));
        }();
        function s() {
            "undefined" != typeof Promise ? Promise.all([ vimeoPlayer.getVideoWidth(), vimeoPlayer.getVideoHeight() ]).then(function(t) {
                var e = t[0], t = t[1];
                embed.style.paddingBottom = t / e * 100 + "%", embed.style.opacity = 1, vimeoPlayer.play();
            }) : (embed.style.paddingBottom = "45.9375%", embed.style.opacity = 1);
        }
        function r(t) {
            var e = (t = t || this.element).closest(".video--open");
            t.removeAttribute("src"), t.removeAttribute("data-ready"), e && (e.classList.remove("video--open"), 
            document.body.classList.remove("video-playing"), e.querySelector(".play").removeAttribute("aria-expanded"));
        }
        function a() {
            embed.style.paddingBottom = "45.9375%", embed.style.opacity = 1, youTubePlayer.playVideo();
        }
        window.onYouTubePlayerAPIReady = function() {}, d(".component-video, .component-deployment-systems").each(function() {
            this.addEventListener("click", function(t) {
                var e, i, o;
                t.target && t.target.classList.contains("play") ? (o = (i = (e = t.target).nextElementSibling).querySelectorAll("iframe")[0], 
                e.setAttribute("aria-expanded", "true"), e.parentNode.classList.add("video--open"), 
                document.body.classList.add("video-playing"), flickityVideo = "undefined" != typeof Flickity && Flickity.data(e.closest(".flickity-enabled")), 
                embed = i.classList.contains("embed-container") ? i : i.querySelectorAll(".embed-container"), 
                e.classList.contains("provider-vimeo") && "undefined" != typeof Vimeo ? (o.hasAttribute("src") ? (vimeoPlayer = new Vimeo.Player(o), 
                s()) : (o.setAttribute("src", e.dataset.src), vimeoPlayer = new Vimeo.Player(o), 
                vimeoPlayer.on("loaded", s), vimeoPlayer.on("ended", r)), vimeoPlayer.play()) : e.classList.contains("provider-youtube") && "undefined" != typeof YT ? o.hasAttribute("src") ? (youTubePlayer = new YT.Player(o), 
                a()) : (o.setAttribute("src", e.dataset.src), youTubePlayer = new YT.Player(o, {
                    events: {
                        onReady: a
                    }
                }), void 0 === youTubePlayer.playVideo && ((youTubePlayer = o).setAttribute("src", o.getAttribute("src").replace("autoplay=0", "autoplay=1")), 
                embed.style.paddingBottom = "45.9375%", embed.style.opacity = 1)) : (o.setAttribute("src", e.dataset.src + "&autoplay=1"), 
                embed.style.opacity = 1), flickityVideo && flickityVideo.pausePlayer()) : t.target && t.target.classList.contains("end-play") && r(t.target.previousElementSibling.querySelectorAll("iframe")[0]);
            }, !1);
        });
    }, d.pnp.initPage = function(t) {
        d.pnp.initPlaceholderShim(), d.pnp.initSelectric(), d.pnp.initDatePicker(), d.pnp.initFormValidation(), 
        d.pnp.initDropdowns(), d.pnp.initVideo(), d.pnp.initAccordion(), d.pnp.initCards(), 
        d.pnp.initCustomContactForm7(), t && (d.pnp.initScrollHijack(), d.pnp.initPageScrolled(), 
        d.pnp.initFixto(), d.pnp.initModals(), d.pnp.initMicrointeractions(), d.pnp.initSliders()), 
        setTimeout(function() {
            $window.trigger("resize");
        }, 0);
    };
}(jQuery), $document.ready(function() {
    $.pnp.initPage(!0);
}), function(n) {
    function e(t, o, n, s) {
        var r = {
            easeOutQuad: function(t) {
                return t * (2 - t);
            }
        }, a = window.pageYOffset, c = "now" in window.performance ? performance.now() : new Date().getTime(), e = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight), i = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight, t = "number" == typeof t ? t : t.offsetTop, l = Math.round(e - t < i ? e - i : t);
        if ("requestAnimationFrame" in window == !1) return window.scroll(0, l), void (s && s());
        !function t() {
            var e = "now" in window.performance ? performance.now() : new Date().getTime(), i = Math.min(1, (e - c) / o), i = r[n](i);
            window.scroll(0, Math.ceil(i * (l - a) + a)), window.pageYOffset !== l ? 0 <= o - (e - c) && requestAnimationFrame(t) : s && s();
        }();
    }
    function s(t, i) {
        n(t).each(function(t, e) {
            e.isIntersecting && !e.target.classList.contains("scrolled") && e.intersectionRatio >= i.thresholds[0] && requestAnimationFrame(function() {
                e.target.classList.add("scrolled");
            });
        });
    }
    n('[href^="#"]:not([data-pnp-scroll-to])').on("click", function(t) {
        "a" === t.target.tagName.toLowerCase() && "#" !== t.target.getAttribute("href") && (t.preventDefault(), 
        t.stopPropagation(), e(document.querySelector(t.target.getAttribute("href")), 300, "easeOutQuad"), 
        t.target.blur());
    }), document.fonts.ready.then(function() {
        n(".component-count-up .number").each(function() {
            this.style.width = this.offsetWidth + "px";
        });
    }), n(".trigger-modal").on("click", function(e) {
        var t = n('.vessel-modal-wrap[data-href="' + e.target.href + '"]'), i = new IntersectionObserver(s, {
            threshold: .66
        }), o = new IntersectionObserver(s, {
            rootMargin: "0% 0% -33% 0%"
        });
        e.preventDefault(), e.stopPropagation(), t.length ? (n(".vessel-modal-wrap").addClass("modal-closed"), 
        t.removeClass("modal-closed"), n("body").addClass("vessel-modal-open")) : e.target.href && n.ajax(e.target.href).done(function(t) {
            n(".vessel-modal-wrap").addClass("modal-closed"), n("body").append('<div class="vessel-modal-wrap" data-href="' + e.target.href + '"><div class="vessel-modal-inner"><button class="close-vessel-modal">Close</button>' + t + "</div></div>"), 
            n("body").addClass("vessel-modal-open"), n(".vessel-row, .vessel-v-chart-bar").each(function() {
                i.observe(this), o.observe(this);
            }), n(".vessel-modal-wrap").on("click", function(t) {
                n(t.target).hasClass("close-vessel-modal") || t.stopPropagation();
            });
        });
    }), n("body").on("click", function(t) {
        n("body").removeClass("vessel-modal-open"), n(".vessel-modal-wrap").addClass("modal-closed");
    }), n("body").on("click", ".wpcf7-submit", function(t) {
        n(this).closest(".wpcf7-form").find(".mc4wp-checkbox input").prop("checked", !0);
    });
}(jQuery), 0 < $("#accordion-search-form").length && (faqs = [], $("[data-pnp-search-results]").find(".component-accordion .panel").each(function(t) {
    var e = $(this).find(".trigger").text().toLowerCase(), i = $(this).find(".reveal").text().toLowerCase();
    faqs.push(e + i), $(this).attr("id", "faq-" + t);
}), $searchBox = $("#accordion-search-box"), $numResults = $("#num-results"), doSearch = function() {
    $body.addClass("search-active");
    for (var t = $searchBox.val().toLowerCase(), e = new RegExp("\\b" + t + "\\b", "i"), i = 0; i < faqs.length; i++) e.test(faqs[i]) ? $("#faq-" + i + ".filtered-out").removeClass("filtered-out") : $("#faq-" + i).addClass("filtered-out");
    t = $("[data-pnp-search-results] .panel:not(.filtered-out)").size();
    $numResults.find(".num-results").html(t), $numResults.show(), 1 == t ? $("#num-results span#plural").hide() : $("#num-results span#plural").show(), 
    $(".component-accordion").addClass("filtered-out"), $(".component-accordion .panel:not(.filtered-out)").each(function() {
        $(this).closest(".component-accordion").removeClass("filtered-out");
    }), $window.trigger("resize"), pnpHelper.scroll.scrollTo("#num-results");
}, $searchBox.keyup(function(t) {
    return 0 != $(this).val().length ? (13 === (t.keyCode || t.which) && doSearch(), 
    !1) : ($(".panel.filtered-out").removeClass("filtered-out"), void $body.removeClass("search-active"));
}), $document.on("click", "#clear-search", function() {
    return $(".filtered-out").removeClass("filtered-out"), $("#num-results").hide(), 
    $(".component.component-text").show(), $("#faq-search-box").val(""), $window.trigger("resize"), 
    !1;
}), $document.on("submit", "#accordion-search-form", function(t) {
    0 < $searchBox.val().length ? doSearch() : ($(".panel.filtered-out").removeClass("filtered-out"), 
    $body.removeClass("search-active")), t.preventDefault();
})), $(function() {
    0 < $(".has-background-video, .background-video").length && (pnpHelper.onResizeFinished(initBannerVideos), 
    $window.trigger("resize"));
}), function(e) {
    $document.on("click", "[data-pnp-toggle-class]", function() {
        return e(e(this).data("pnp-target")).toggleClass(e(this).data("pnp-class")), !1;
    }), $document.on("click", "[data-pnp-add-class]", function() {
        return e(e(this).data("pnp-target")).addClass(e(this).data("pnp-class")), !1;
    }), $document.on("click", "[data-pnp-remove-class]", function() {
        return e(e(this).data("pnp-target")).removeClass(e(this).data("pnp-class")), !1;
    }), $document.on("click", "[data-pnp-show-toggle]", function() {
        return e(e(this).data("pnp-hide-target")).hide(), e(e(this).data("pnp-show-target")).show(), 
        e.event.trigger({
            type: "pnp-show-toggle-complete"
        }), !1;
    }), $document.on("click", "[data-pnp-slide-toggle]", function() {
        return e(e(this).data("pnp-slide-toggle")).is(":visible") ? e(this).addClass("-out").removeClass("-in") : e(this).addClass("-in").removeClass("-out"), 
        e(e(this).data("pnp-slide-toggle")).slideToggle(), !1;
    }), $document.on("click", "[data-pnp-slide-up]", function() {
        return e(e(this).data("pnp-slide-up")).slideUp(), !1;
    }), $document.on("click", "[data-pnp-slide-down]", function() {
        return e(e(this).data("pnp-slide-down")).slideDown(), !1;
    }), $document.on("change", "[data-pnp-slide-toggle-change]", function() {
        e(e(this).data("pnp-slide-toggle-change")).is(":checked") ? e(this).addClass("-out").removeClass("-in") : e(this).addClass("-in").removeClass("-out"), 
        e(e(this).data("pnp-slide-toggle-change")).slideToggle();
    }), $document.on("click", "[data-pnp-back]", function() {
        return window.history.back(), !1;
    }), $document.on("click", "[data-pnp-return-false]", function() {
        return !1;
    }), $document.on("click", "[data-pnp-scroll-to],[data-pnp-scroll-past]", function() {
        var t;
        return e(this).data("pnp-scroll-past") ? (t = e(this).data("pnp-scroll-past"), pnpHelper.scroll.scrollPast(e(this).closest(t))) : e(this).data("pnp-scroll-to") && ("href" !== e(this).data("pnp-scroll-to") ? pnpHelper.scroll.scrollTo(e(this).data("pnp-scroll-to")) : pnpHelper.scroll.scrollTo(e(this).attr("href"), null)), 
        !1;
    });
}(jQuery), $.pnp.initAccordion = function() {
    0 < $(".component-accordion").length && ($(".component-accordion .trigger").on("click", function(t) {
        var e = $(this).closest(".component-accordion"), i = $(this).closest(".panel");
        return t.stopPropagation(), i.hasClass("active") ? i.removeClass("active").find(".reveal").slideUp(300, function() {
            $window.trigger("resize");
        }) : (e.find(".panel.active").removeClass("active").find(".reveal").slideUp(300), 
        i.addClass("active").find(".reveal").slideDown(300, function() {
            $window.trigger("resize"), this.getBoundingClientRect().bottom > (window.innerHeight || document.documentElement.clientHeight) && $("html, body").animate({
                scrollTop: $("html, body").scrollTop() + $(this).outerHeight() + 50
            }, 500);
        })), !1;
    }), $(".component-accordion .trigger.initial-active").trigger("click"));
}, $.pnp.initCards = function() {
    function u(t) {
        var e = $.Deferred(), i = {
            ajax: !0,
            action: "do_ajax_shortcode"
        }, i = $.extend(i, t);
        return console.log("test"), console.log(i), $.post(ajax_object.ajax_url, i, function(t) {
            e.resolve(t);
        }), e;
    }
    $(".component-cards").each(function() {
        var e, i, t, o, n, s, r, a, c, l = $(this), d = l.find("[data-ajax]"), p = d.data("ajax");
        l.find(".pagination").length && (e = l, i = d, (t = p).current_page = 1, e.find(".pagination").on("click", function() {
            return $(this).hasClass("-prev") && 1 < t.current_page ? t.current_page-- : $(this).hasClass("-next") && t.current_page++, 
            $.when(u(t)).done(function(t) {
                "" == t ? e.find(".pagination.-next").hide() : e.find(".pagination.-next").show(), 
                console.log(t), i.empty().append(t);
            }), !1;
        })), l.find(".ajax-infinite-scroll-marker").length && (o = l, n = d, a = !(r = !0), 
        (s = p).current_page = 1, o.find(".ajax-infinite-scroll-marker").viewportChecker({
            repeat: !0,
            callbackFunction: function(t, e) {
                "Remove" != e && 0 != r && !0 !== a && (a = !0, s.current_page++, $.when(u(s)).done(function(t) {
                    "" != t ? (n.append(t), $window.trigger("resize"), a = !1) : r = !1;
                }));
            }
        })), l.find(".filter-terms").length && (c = l.find(".isotope-container").isotope({
            itemSelector: ".item",
            layoutMode: "fitRows"
        }), l.find(".filter-terms .term").on("click", function() {
            var t = $(this).attr("data-term-id");
            return $(this).addClass("active").siblings().removeClass("active"), -1 == t ? (c.isotope({
                filter: "*"
            }), $(this).closest(".filter-terms").find(".-reset").hide()) : (c.isotope({
                filter: ".term-id-" + t
            }), $(this).closest(".filter-terms").find(".-reset").show()), !1;
        }));
    });
}, $.pnp.initCustomContactForm7 = function() {
    var t = $(".component-form");
    t.length && t.each(function(t, e) {
        var i = $(e), o = i.find('input:not([type="checkbox"]):not([type="file"]), textarea'), e = i.find('input[type="file"]');
        o.after('<span class="validation-bar"></span>'), o.on("change keyup", function(t) {
            var e = t.target;
            t = $(e).next(".validation-bar");
            !e.checkValidity() || $(e).hasClass("wpcf7-not-valid") && (void 0 === e.value || "" === e.value) ? ($(e).parent().find('span[role="alert"]').show(), 
            t.addClass("-invalid").addClass("-in")) : ($(e).parent().find('span[role="alert"]').hide(), 
            t.removeClass("-invalid").addClass("-in"));
        }), e.on("change", function(t) {
            var e = $(t.target), i = [];
            if (e.get(0).files.length) for (var o = 0; o < e.get(0).files.length; o++) i.push("<li>" + e.get(0).files[o].name + "</li>");
            e.val() && e.closest(".wpcf7-form-control-wrap").next("label").find(".label-inner").html('<ul class="file-names">' + i.join("") + "</ul>");
        }), i.on("wpcf7:invalid", function(t) {
            $(t.currentTarget).find('input:not([type="hidden"]), textarea').trigger("change");
        });
    }), $(".wpcf7").on("wpcf7:invalid", function(t) {
        $(".equalise").addClass("-transition"), $window.trigger("resize");
    });
}, $(".component-icon-text-grid").length && pnpHelper.onResizeFinished(adjustHeadingHeight, !0), 
$(function() {
    $(".request .-password").click(function() {
        $(".login-form").hasClass("-forgot-toggle") ? ($(".request .-password").text("Forgot Password?"), 
        $(".login-form").removeClass("-forgot-toggle"), $(".field-wrap.-login").fadeIn("fast"), 
        $(".field-wrap.-forgot").css("display", "none"), $(".login-form-btn.-login").fadeIn("fast"), 
        $(".login-form-btn.-reset").css("display", "none")) : ($(".request .-password").text("Back to login"), 
        $(".login-form").addClass("-forgot-toggle"), $(".field-wrap.-login").css("display", "none"), 
        $(".field-wrap.-forgot").fadeIn("fast"), $(".login-form-btn.-login").css("display", "none"), 
        $(".login-form-btn.-reset").fadeIn("fast"));
    }), $(".login-form-btn.-login").click(function() {
        $(".field-wrap.-login .valid").fadeIn("fast");
    }), $(".login-form-btn.-reset").click(function() {
        $(".field-wrap.-forgot .valid").fadeIn("fast");
    });
}), function(i) {
    var a, c;
    pnpHelper.dependencyCheck.requireDependencies("Microinteration", [ pnpHelper.dependencyCheck.jqueryCookie ]) || (i.cookie.json = !0, 
    a = "micro-interactions", c = (c = i.cookie(a)) || {
        total: 0,
        counts: {},
        closes: []
    }, i.fn.microInteraction = function(t) {
        var o = i(this), n = this, s = o.data("pnp-mi-id"), e = "1" == o.data("pnp-mi-debug-mode"), r = {
            removeAfter: 0,
            showRepeatedly: !0,
            classOnShow: "-show",
            classOnHide: "animated fadeOutDown"
        };
        return t && (r = i.extend({}, r, t)), e && (r.showRepeatedly = !0), o.find("[data-pnp-mi-close]").click(function() {
            return n.hideInteraction(!0), i("html").removeClass("mi-open"), !1;
        }), o.find("[data-pnp-mi-hide]").click(function() {
            return n.hideInteraction(), i("html").removeClass("mi-open"), !1;
        }), this.hideInteraction = function(t) {
            var e = r.classOnShow.split(" ");
            if (1 < e.length) for (var i = 0; i < e.length; i++) o.removeClass(e[i]); else o.removeClass(r.classOnShow);
            o.addClass(r.classOnHide), t && (c.closes.push(s), n.updateCookie()), setTimeout(function() {
                o.hide();
            }, 1e3);
        }, this.showInteraction = function() {
            e && (console.info("Number of times you have seen this microinteraction:", n.getShowCount()), 
            console.info("Total number of microinteractions seen:", c.total)), (c.total < 999 && -1 == i.inArray(s, c.closes) && (r.showRepeatedly || 0 == n.getShowCount()) || e) && (i("html").addClass("mi-open"), 
            o.show(), o.addClass(r.classOnShow), n.incrementShowCount(), n.updateCookie(), 0 < r.removeAfter && setTimeout(function() {
                n.hideInteraction(), i("html").removeClass("mi-open");
            }, r.removeAfter));
        }, this.getShowCount = function() {
            return c.counts[s] || (c.counts[s] = 0), c.counts[s];
        }, this.incrementShowCount = function() {
            n.getShowCount(), c.counts[s]++, c.total++;
        }, this.updateCookie = function() {
            i.cookie(a, c, {
                path: "/"
            });
        }, this;
    });
}(jQuery), $.pnp.initMicrointeractions = function() {
    ($(".component-microinteraction").length || $(".banner-message").length) && $("[data-pnp-mi-delay]").each(function() {
        var t = $(this), e = {};
        t.data("pnp-mi-config") && (e = {
            removeAfter: 0,
            showRepeatedly: !0,
            classOnShow: "-show",
            classOnHide: "animated fadeOutDown"
        }), _delay = 5e3, parseInt(t.data("pnp-mi-delay")) && (_delay = t.data("pnp-mi-delay"));
        var i = t.microInteraction(e);
        setTimeout(function() {
            i.showInteraction();
        }, _delay);
    });
}, $.pnp.initModals = function() {
    var n;
    pnpHelper.dependencyCheck.requireDependencies("Modals", [ pnpHelper.dependencyCheck.bootstrapModal ]) || $("[data-pnp-open-in-modal]").not(".modal").length && (4 < $("[data-pnp-open-in-modal]").length ? (n = $("#modal-skeleton"), 
    $("[data-pnp-open-in-modal],.large-modal").not(".modal").each(function(e) {
        var t = $(this), i = "modal-container";
        0 < t.data("pnp-open-in-modal").length && (i += " " + t.data("pnp-open-in-modal")), 
        t.data("pnp-content-type"), i += " " + t.data("pnp-content-type");
        var o = new Url(t.attr("href"));
        o.query.modal = "yes", $body.append("<div id='modal-" + e + "' class='" + i + "'>" + n.html() + "</div>"), 
        $("#modal-" + e + " .modal-body").html('<p class="text-center"><br/><br/><br/>Loading...</p>'), 
        t.attr("data-pnp-modal-id", "#modal-" + e), $("#modal-" + e + " > .modal").on("show.bs.modal", function(t) {
            $.get(o, function(t) {
                t = (t = t).replace("pnp-modal-link", "");
                $("#modal-" + e + " .modal-body").html(t);
            }).fail(function(t) {
                console.warn("Unable to preload modal " + o, t);
            });
        });
    })) : setTimeout(function() {
        var s = $("#modal-skeleton");
        $("[data-pnp-open-in-modal]").not(".modal").each(function(e) {
            var i = $(this), o = "modal-container";
            0 < i.data("pnp-open-in-modal").length && (o += " " + i.data("pnp-open-in-modal")), 
            i.data("pnp-content-type"), o += " " + i.data("pnp-content-type");
            var n = new Url(i.attr("href"));
            n.query.modal = "yes", console.log("Preloading modal:" + n), $.get(n, function(t) {
                t = (t = t).replace("pnp-modal-link", "");
                $body.append("<div id='modal-" + e + "' class='" + o + "'>" + s.html() + "</div>"), 
                $("#modal-" + e + " .modal-body").html(t), i.attr("data-pnp-modal-id", "#modal-" + e), 
                -1 < o.indexOf("-basket-modal") && $("#modal-" + e + " > .modal").on("show.bs.modal", function(t) {});
            }).fail(function(t) {
                console.warn("Unable to preload modal " + n, t);
            });
        });
    }, 1e3), $document.on("click", "[data-pnp-modal-id]", function() {
        return pnpHelper.modal.open($(this).data("pnp-modal-id") + " > .modal"), !1;
    }), $document.on("click", ".modal-backdrop.fade.in", function() {
        $document.find(".pnp-modal.in").modal("hide");
    }));
}, $(function() {
    $(".nav-container .has-children").hoverIntent(function() {
        $(this).find(".dropdown-menu").addClass("show"), $("body").addClass("dropdown-open");
    }, function() {
        $(this).find(".dropdown-menu").removeClass("show"), $("body").removeClass("dropdown-open");
    });
}), $(function() {
    function t() {
        $(".navbar-toggle-multi-level").removeClass("active"), $html.removeClass("mob-nav-in"), 
        i.fadeOut();
    }
    function e() {
        $html.hasClass("mob-nav-in") ? t() : ($(".navbar-toggle-multi-level").addClass("active"), 
        $html.addClass("mob-nav-in"), i.fadeIn());
    }
    var i, o;
    0 < $(".multi-level-mob-menu").length && (i = $("#side-menu-veil"), $document.on("click", ".navbar-toggle-multi-level", function() {
        return e(), !1;
    }), $document.on("click", "#side-menu-veil", function() {
        return e(), !1;
    }), $document.on("click", ".pnp-nav-has-child-menu", function() {
        return $(this).parent().find("aside").first().addClass("in"), -1 < navigator.userAgent.indexOf("Safari") && (o = $("#menu-main-menu").scrollTop(), 
        $("#menu-main-menu").scrollTop(0), $("#menu-main-menu").css("overflow-y", "hidden")), 
        !1;
    }), $document.on("click", ".pnp-nav-back", function() {
        return $(this).closest("aside").removeClass("in"), null != o && ($("#menu-main-menu").css("overflow-y", "auto"), 
        $("#menu-main-menu").scrollTop(o)), !1;
    }), $document.on("click", ".multi-level-mob-menu .nav-item", function() {
        t();
    }));
}), $(function() {
    $document.on("click", ".navbar-toggle-overlay", function() {
        var t = $(this), e = $(".overlay-mob-menu");
        e.is(":visible") ? (t.removeClass("active"), e.fadeOut()) : (t.addClass("active"), 
        e.fadeIn());
    });
}), $(function() {
    0 < $(".mobile-standard").length && $document.on("click", ".navbar-toggle-standard", function() {
        var t = $(this), e = $("#mob-nav-container");
        e.is(":visible") ? (t.removeClass("active"), e.slideUp()) : (t.addClass("active"), 
        e.slideDown());
    });
}), $(function() {
    var c, t, l, e, a, d, p, u, h, f;
    pnpHelper.bootstrap.isMd() && (e = $(".scrolling-animation-content-section"), c = $(".scrolling-animation-background-content"), 
    t = $(".scrolling-animation-intro"), l = !pnpHelper.bootstrap.isMd(), e.length && (t.addClass("-loaded"), 
    e.addClass("-loaded"), setTimeout(function() {
        t.removeClass("-loaded").addClass("-hide");
    }, 4500), setTimeout(function() {
        $(".opening-video-container ").find("video").get(0).play();
    }, 5500), e.find(".scrolling-content").each(function(t, e) {
        var i = $(this), o = i.offset().top, n = o + i.height(), s = i.data("id"), r = c.find('.scrolling-section[data-id="' + s + '"]'), a = r.hasClass("opening-video-container") ? "" : r.find("video");
        $window.on({
            resize: function() {
                o = i.offset().top, n = o + i.height(), l = !pnpHelper.bootstrap.isMd();
            },
            scrollup: function(t) {
                l || n >= $window.scrollTop() + $window.height() && o < $window.scrollTop() + $window.height() && ($(".scrolling-section").removeClass("-init"), 
                r.addClass("-init"));
            },
            scrolldown: function(t) {
                i.hasClass("-init") || l || o < $window.scrollTop() + $window.height() && ($(".scrolling-section").removeClass("-init"), 
                r.addClass("-init"), a.length && a.get(0).paused && (a.get(0).currentTime = 0, a.get(0).play()));
            }
        });
    }), $(".content-wrapper").each(function(t, e) {
        var i = $(this), o = i.offset().top, n = o + i.height();
        $window.on({
            resize: function() {
                o = i.offset().top, n = o + i.height(), l = !pnpHelper.bootstrap.isMd();
            },
            scrollup: function() {
                l || (n >= $window.scrollTop() + $window.height() && o < $window.scrollTop() + $window.height() && i.removeClass("-exit").addClass("-enter"), 
                o >= $window.scrollTop() + $window.height() && i.addClass("-exit").removeClass("-enter"), 
                0 === o & $window.scrollTop() <= 1 && i.removeClass("-exit").addClass("-enter"), 
                $window.scrollTop() < $window.height() / 2 && $document.find(".content-wrapper:not(.-first)").addClass("-exit").removeClass("-enter"));
            },
            scrolldown: function() {
                l || (o < $window.scrollTop() + $window.height() && o > $window.scrollTop() && i.removeClass("-exit").addClass("-enter"), 
                n < $window.scrollTop() + $window.height() && i.addClass("-exit").removeClass("-enter"));
            }
        });
    }), e = $(".scrolling-section:not(.-contains-video)"), a = function(t) {
        return "/wp-content/themes/pegasus/components/scrolling-animation/images/" + t.toString().padStart(4, "0") + ".jpg";
    }, d = new Image(), h = 1080, f = 1920, window.addEventListener("load", function() {
        h < $window.height() && (h = $window.height(), f = 1.777777 * $window.height()), 
        p = (h - $window.height()) / 2, u = $window.width() / 2 - f / 2, d.src = a(parseInt($(".scrolling-section:not(.-contains-video).-init").data("frame-start")));
    }), pnpHelper.onResizeFinished(function() {
        !(f > $window.width()) || h > $window.height() ? (f = $window.width(), h = .5625 * $window.width()) : (h = $window.height(), 
        f = 1.777777 * $window.height()), p = (h - $window.height()) / 2, u = $window.width() / 2 - f / 2;
    }), e.each(function(t, e) {
        var i = $(this).find("canvas"), o = i.get(0).getContext("2d");
        i.get(0).width = $window.width(), i.get(0).height = $window.height(), pnpHelper.onResizeFinished(function() {
            i.get(0).width = $window.width(), i.get(0).height = $window.height(), o.drawImage(d, u, -Math.abs(p), f, h);
        });
    }), $window.on("scroll", function() {
        var t, e, i, o, n, s, r;
        pnpHelper.bootstrap.isMd() && (t = $(".scrolling-section:not(.-contains-video).-init"), 
        (n = $(".scrolling-animation-content-section").find('[data-id="' + t.data("id") + '"]')).length && (e = $window.scrollTop(), 
        i = n.offset().top + n.height() - $window.height(), i = (e - (n.offset().top - $window.height())) / (i - (n.offset().top - $window.height())), 
        o = parseInt(t.data("frame-start")), n = parseInt(t.data("frame-end")) - o, s = Math.min(n - 1, Math.ceil(i * n)), 
        r = t.find("canvas").get(0).getContext("2d"), requestAnimationFrame(function() {
            d.src = a(o + s), d.onload = function() {
                r.drawImage(d, u, -Math.abs(p), f, h);
            };
        })));
    }), pnpHelper.bootstrap.isMd() && function() {
        new Image();
        for (var t = 1; t <= 558; t++) new Image().src = a(t);
    }()));
}), $.pnp.initSliders = function() {
    if ($(".slider-container").length) {
        if (pnpHelper.dependencyCheck.requireDependencies("Slider", [ pnpHelper.dependencyCheck.slickSlider ])) return;
        $(".slider-container:visible:not(.slick-initialized)").each(function() {
            var t, e, i = $(this).data("pnp-slider-config"), o = $(this);
            o.slick((e = o, (t = i).slidesToShow = e.hasClass("slider-pages") ? 2 : 1, $.extend({
                infinite: !e.hasClass("slider-pages"),
                mobileFirst: !1,
                speed: 400,
                variableWidth: e.hasClass("slider-pages")
            }, t))), $document.on("click", ".slider-next", function(t) {
                return o.slick("slickNext"), !1;
            }), $document.on("click", ".slider-prev", function(t) {
                return o.slick("slickPrev"), !1;
            });
        });
    }
}, $.pnp.initSubNav = function() {
    $.fn.anchorPointBar = function(t, n) {
        var s = this, r = $(this), a = r.find("ul"), c = 0, l = !1, d = {
            elemSelector: "[data-pnp-apb-anchor]",
            stickToNav: !0,
            replaceNav: !1,
            scrollDuration: 1e3,
            responsiveWidth: 767
        };
        t && $.extend(d, t), 0 < r.closest("[data-pnp-search-results]").length && 0 == r.closest("[data-pnp-search-results]").find(".anchor-component").length && (d.elemSelector = "[data-pnp-search-results] h2"), 
        this.addAnchorPoint = function(t, e) {
            var i = "";
            void 0 === e && (e = ""), 0 == c && (i = "active");
            var o = t.data("pnp-apb-anchor");
            null != o && 0 != o.length || (o = t.text()), a.append('<li class="' + i + '" data-pnp-apb-anchor-index="' + c + '"><a href="#" class="nav-line-height ' + e + '">' + o + "</a></li>"), 
            c++;
        }, this.init = function() {
            var t, e, i;
            function o() {
                $window.width() > d.responsiveWidth && ($window.scrollTop() >= e ? i.addClass("-fixed") : i.removeClass("-fixed"));
            }
            $.fn.viewportChecker ? (n || ($(d.elemSelector).each(function(t) {
                $(this).attr("data-pnp-apb-index", t);
            }), $document.on("click", ".anchor-points a", function() {
                var t;
                return l || (t = $(this).closest("[data-pnp-apb-anchor-index]").data("pnp-apb-anchor-index"), 
                l = !0, $('[data-pnp-apb-index="' + t + '"]').length && (t = $('[data-pnp-apb-index="' + t + '"]').offset().top, 
                t -= r.outerHeight(), d.stickToNav && (t -= pnpHelper.getNavHeight()), $("html, body").animate({
                    scrollTop: t + "px"
                }, d.scrollDuration, function() {
                    l = !1;
                }))), !1;
            })), s.hasClass("-vertical") || (d.stickToNav || d.replaceNav) && (e = r.offset().top, 
            d.replaceNav || pnpHelper.getNavHeight(), i = r.find(".inner"), d.stickToNav && (e -= pnpHelper.getNavHeight()), 
            o(), $window.scroll(o).resize(function() {
                $window.width() > d.responsiveWidth && (clearTimeout(t), t = setTimeout(function() {
                    e = r.offset().top, d.stickToNav && (e -= $navBar.height()), d.stickToNav && $navBar.height();
                }, 300));
            }))) : console.error("MISSING DEPENDENCY: The component 'anchor-point-bar' requires the library 'jquery-viewport-checker'. Please update packages.json to include this library.");
        }, 0 == a.find("[data-pnp-apb-anchor-index]").length && (s.init(), n || $(d.elemSelector).each(function(t) {
            s.addAnchorPoint($(this));
        }));
    }, 0 < $(".component-subnav.-internal").length && $(".component-subnav.-internal").anchorPointBar(null, !1), 
    0 < $(".component-subnav.-external").length && $(".component-subnav.-external").anchorPointBar(null, !0), 
    $("[data-pnp-apb-index]").viewportChecker({
        repeat: !0,
        callbackFunction: function(t, e) {
            t = $("[data-pnp-apb-anchor-index]").eq($(t).data("pnp-apb-index"));
            "add" == e ? t.addClass("active") : t.removeClass("active");
        }
    });
}, $(function() {
    var i, t;
    $(".component-timeline").length && (t = $(".associated-content-point"), i = $(".point-content-container"), 
    $(".sticky-container").stick_in_parent(), $.each(t, function(t, e) {
        $(this).viewportChecker({
            offset: "50%",
            invertBottomOffset: !0,
            repeat: !0,
            callbackFunction: function(t, e) {
                t = t.attr("data-point-name"), t = $('.point-content-container[data-point-name="' + t + '"]');
                t.length && (i.removeClass("-show"), t.addClass("-show"));
            }
        });
    }), t = $(".associated-content-point.-mobile").find(".dot.-pulse"), $.each(t, function(t, e) {
        var i = $(this), o = i.parent(), n = i.next(), s = o.parent().next();
        i.on("click", function(t) {
            t.preventDefault(), o.hasClass("-active") ? (o.removeClass("-active"), s.slideUp(300, function() {
                n.fadeIn(300);
            })) : (o.addClass("-active"), n.fadeOut(300, function() {
                s.slideDown(300);
            }));
        });
    }));
});