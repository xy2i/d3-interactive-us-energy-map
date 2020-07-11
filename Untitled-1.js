! function t(n, e, r) {
    function i(a, u) {
        if (!e[a]) {
            if (!n[a]) {
                var s = "function" == typeof require && require;
                if (!u && s) return s(a, !0);
                if (o) return o(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var l = e[a] = {
                exports: {}
            };
            n[a][0].call(l.exports, function(t) {
                var e = n[a][1][t];
                return i(e ? e : t)
            }, l, l.exports, t, n, e, r)
        }
        return e[a].exports
    }
    for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
    return i
}({
    1: [function(t, n, e) {
        ! function() {
            function t(t) {
                return t && (t.ownerDocument || t.document || t).documentElement
            }

            function e(t) {
                return t && (t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView)
            }

            function r(t, n) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            }

            function i(t) {
                return null === t ? NaN : +t
            }

            function o(t) {
                return !isNaN(t)
            }

            function a(t) {
                return {
                    left: function(n, e, r, i) {
                        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = n.length); r < i;) {
                            var o = r + i >>> 1;
                            t(n[o], e) < 0 ? r = o + 1 : i = o
                        }
                        return r
                    },
                    right: function(n, e, r, i) {
                        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = n.length); r < i;) {
                            var o = r + i >>> 1;
                            t(n[o], e) > 0 ? i = o : r = o + 1
                        }
                        return r
                    }
                }
            }

            function u(t) {
                return t.length
            }

            function s(t) {
                for (var n = 1; t * n % 1;) n *= 10;
                return n
            }

            function c(t, n) {
                for (var e in n) Object.defineProperty(t.prototype, e, {
                    value: n[e],
                    enumerable: !1
                })
            }

            function l() {
                this._ = Object.create(null)
            }

            function f(t) {
                return (t += "") === ba || t[0] === _a ? _a + t : t
            }

            function h(t) {
                return (t += "")[0] === _a ? t.slice(1) : t
            }

            function p(t) {
                return f(t) in this._
            }

            function d(t) {
                return (t = f(t)) in this._ && delete this._[t]
            }

            function g() {
                var t = [];
                for (var n in this._) t.push(h(n));
                return t
            }

            function v() {
                var t = 0;
                for (var n in this._) ++t;
                return t
            }

            function y() {
                for (var t in this._) return !1;
                return !0
            }

            function m() {
                this._ = Object.create(null)
            }

            function x(t) {
                return t
            }

            function M(t, n, e) {
                return function() {
                    var r = e.apply(n, arguments);
                    return r === n ? t : r
                }
            }

            function w(t, n) {
                if (n in t) return n;
                n = n.charAt(0).toUpperCase() + n.slice(1);
                for (var e = 0, r = ka.length; e < r; ++e) {
                    var i = ka[e] + n;
                    if (i in t) return i
                }
            }

            function b() {}

            function _() {}

            function k(t) {
                function n() {
                    for (var n, r = e, i = -1, o = r.length; ++i < o;)(n = r[i].on) && n.apply(this, arguments);
                    return t
                }
                var e = [],
                    r = new l;
                return n.on = function(n, i) {
                    var o, a = r.get(n);
                    return arguments.length < 2 ? a && a.on : (a && (a.on = null, e = e.slice(0, o = e.indexOf(a)).concat(e.slice(o + 1)), r.remove(n)), i && e.push(r.set(n, {
                        on: i
                    })), t)
                }, n
            }

            function E() {
                ca.event.preventDefault()
            }

            function T() {
                for (var t, n = ca.event; t = n.sourceEvent;) n = t;
                return n
            }

            function C(t) {
                for (var n = new _, e = 0, r = arguments.length; ++e < r;) n[arguments[e]] = k(n);
                return n.of = function(e, r) {
                    return function(i) {
                        try {
                            var o = i.sourceEvent = ca.event;
                            i.target = t, ca.event = i, n[i.type].apply(e, r)
                        } finally {
                            ca.event = o
                        }
                    }
                }, n
            }

            function S(t) {
                return Ta(t, Aa), t
            }

            function N(t) {
                return "function" == typeof t ? t : function() {
                    return Ca(t, this)
                }
            }

            function A(t) {
                return "function" == typeof t ? t : function() {
                    return Sa(t, this)
                }
            }

            function I(t, n) {
                function e() {
                    this.removeAttribute(t)
                }

                function r() {
                    this.removeAttributeNS(t.space, t.local)
                }

                function i() {
                    this.setAttribute(t, n)
                }

                function o() {
                    this.setAttributeNS(t.space, t.local, n)
                }

                function a() {
                    var e = n.apply(this, arguments);
                    null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                }

                function u() {
                    var e = n.apply(this, arguments);
                    null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                }
                return t = ca.ns.qualify(t), null == n ? t.local ? r : e : "function" == typeof n ? t.local ? u : a : t.local ? o : i
            }

            function z(t) {
                return t.trim().replace(/\s+/g, " ")
            }

            function P(t) {
                return new RegExp("(?:^|\\s+)" + ca.requote(t) + "(?:\\s+|$)", "g")
            }

            function L(t) {
                return (t + "").trim().split(/^|\s+/)
            }

            function D(t, n) {
                function e() {
                    for (var e = -1; ++e < i;) t[e](this, n)
                }

                function r() {
                    for (var e = -1, r = n.apply(this, arguments); ++e < i;) t[e](this, r)
                }
                t = L(t).map(R);
                var i = t.length;
                return "function" == typeof n ? r : e
            }

            function R(t) {
                var n = P(t);
                return function(e, r) {
                    if (i = e.classList) return r ? i.add(t) : i.remove(t);
                    var i = e.getAttribute("class") || "";
                    r ? (n.lastIndex = 0, n.test(i) || e.setAttribute("class", z(i + " " + t))) : e.setAttribute("class", z(i.replace(n, " ")))
                }
            }

            function q(t, n, e) {
                function r() {
                    this.style.removeProperty(t)
                }

                function i() {
                    this.style.setProperty(t, n, e)
                }

                function o() {
                    var r = n.apply(this, arguments);
                    null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
                }
                return null == n ? r : "function" == typeof n ? o : i
            }

            function O(t, n) {
                function e() {
                    delete this[t]
                }

                function r() {
                    this[t] = n
                }

                function i() {
                    var e = n.apply(this, arguments);
                    null == e ? delete this[t] : this[t] = e
                }
                return null == n ? e : "function" == typeof n ? i : r
            }

            function j(t) {
                function n() {
                    var n = this.ownerDocument,
                        e = this.namespaceURI;
                    return e === Ia && n.documentElement.namespaceURI === Ia ? n.createElement(t) : n.createElementNS(e, t)
                }

                function e() {
                    return this.ownerDocument.createElementNS(t.space, t.local)
                }
                return "function" == typeof t ? t : (t = ca.ns.qualify(t)).local ? e : n
            }

            function U() {
                var t = this.parentNode;
                t && t.removeChild(this)
            }

            function $(t) {
                return {
                    __data__: t
                }
            }

            function F(t) {
                return function() {
                    return Na(this, t)
                }
            }

            function H(t) {
                return arguments.length || (t = r),
                    function(n, e) {
                        return n && e ? t(n.__data__, e.__data__) : !n - !e
                    }
            }

            function W(t, n) {
                for (var e = 0, r = t.length; e < r; e++)
                    for (var i, o = t[e], a = 0, u = o.length; a < u; a++)(i = o[a]) && n(i, a, e);
                return t
            }

            function Y(t) {
                return Ta(t, Pa), t
            }

            function V(t) {
                var n, e;
                return function(r, i, o) {
                    var a, u = t[o].update,
                        s = u.length;
                    for (o != e && (e = o, n = 0), i >= n && (n = i + 1); !(a = u[n]) && ++n < s;);
                    return a
                }
            }

            function B(t, n, e) {
                function r() {
                    var n = this[a];
                    n && (this.removeEventListener(t, n, n.$), delete this[a])
                }

                function i() {
                    var i = s(n, fa(arguments));
                    r.call(this), this.addEventListener(t, this[a] = i, i.$ = e), i._ = n
                }

                function o() {
                    var n, e = new RegExp("^__on([^.]+)" + ca.requote(t) + "$");
                    for (var r in this)
                        if (n = r.match(e)) {
                            var i = this[r];
                            this.removeEventListener(n[1], i, i.$), delete this[r]
                        }
                }
                var a = "__on" + t,
                    u = t.indexOf("."),
                    s = X;
                u > 0 && (t = t.slice(0, u));
                var c = La.get(t);
                return c && (t = c, s = Z), u ? n ? i : r : n ? b : o
            }

            function X(t, n) {
                return function(e) {
                    var r = ca.event;
                    ca.event = e, n[0] = this.__data__;
                    try {
                        t.apply(this, n)
                    } finally {
                        ca.event = r
                    }
                }
            }

            function Z(t, n) {
                var e = X(t, n);
                return function(t) {
                    var n = this,
                        r = t.relatedTarget;
                    r && (r === n || 8 & r.compareDocumentPosition(n)) || e.call(n, t)
                }
            }

            function G(n) {
                var r = ".dragsuppress-" + ++Ra,
                    i = "click" + r,
                    o = ca.select(e(n)).on("touchmove" + r, E).on("dragstart" + r, E).on("selectstart" + r, E);
                if (null == Da && (Da = !("onselectstart" in n) && w(n.style, "userSelect")), Da) {
                    var a = t(n).style,
                        u = a[Da];
                    a[Da] = "none"
                }
                return function(t) {
                    if (o.on(r, null), Da && (a[Da] = u), t) {
                        var n = function() {
                            o.on(i, null)
                        };
                        o.on(i, function() {
                            E(), n()
                        }, !0), setTimeout(n, 0)
                    }
                }
            }

            function Q(t, n) {
                n.changedTouches && (n = n.changedTouches[0]);
                var r = t.ownerSVGElement || t;
                if (r.createSVGPoint) {
                    var i = r.createSVGPoint();
                    if (qa < 0) {
                        var o = e(t);
                        if (o.scrollX || o.scrollY) {
                            r = ca.select("body").append("svg").style({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                margin: 0,
                                padding: 0,
                                border: "none"
                            }, "important");
                            var a = r[0][0].getScreenCTM();
                            qa = !(a.f || a.e), r.remove()
                        }
                    }
                    return qa ? (i.x = n.pageX, i.y = n.pageY) : (i.x = n.clientX, i.y = n.clientY), i = i.matrixTransform(t.getScreenCTM().inverse()), [i.x, i.y]
                }
                var u = t.getBoundingClientRect();
                return [n.clientX - u.left - t.clientLeft, n.clientY - u.top - t.clientTop]
            }

            function J() {
                return ca.event.changedTouches[0].identifier
            }

            function K(t) {
                return t > 0 ? 1 : t < 0 ? -1 : 0
            }

            function tt(t, n, e) {
                return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
            }

            function nt(t) {
                return t > 1 ? 0 : t < -1 ? Ua : Math.acos(t)
            }

            function et(t) {
                return t > 1 ? Ha : t < -1 ? -Ha : Math.asin(t)
            }

            function rt(t) {
                return ((t = Math.exp(t)) - 1 / t) / 2
            }

            function it(t) {
                return ((t = Math.exp(t)) + 1 / t) / 2
            }

            function ot(t) {
                return ((t = Math.exp(2 * t)) - 1) / (t + 1)
            }

            function at(t) {
                return (t = Math.sin(t / 2)) * t
            }

            function ut() {}

            function st(t, n, e) {
                return this instanceof st ? (this.h = +t, this.s = +n, void(this.l = +e)) : arguments.length < 2 ? t instanceof st ? new st(t.h, t.s, t.l) : bt("" + t, _t, st) : new st(t, n, e)
            }

            function ct(t, n, e) {
                function r(t) {
                    return t > 360 ? t -= 360 : t < 0 && (t += 360), t < 60 ? o + (a - o) * t / 60 : t < 180 ? a : t < 240 ? o + (a - o) * (240 - t) / 60 : o
                }

                function i(t) {
                    return Math.round(255 * r(t))
                }
                var o, a;
                return t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t, n = isNaN(n) ? 0 : n < 0 ? 0 : n > 1 ? 1 : n, e = e < 0 ? 0 : e > 1 ? 1 : e, a = e <= .5 ? e * (1 + n) : e + n - e * n, o = 2 * e - a, new mt(i(t + 120), i(t), i(t - 120))
            }

            function lt(t, n, e) {
                return this instanceof lt ? (this.h = +t, this.c = +n, void(this.l = +e)) : arguments.length < 2 ? t instanceof lt ? new lt(t.h, t.c, t.l) : t instanceof ht ? dt(t.l, t.a, t.b) : dt((t = kt((t = ca.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : new lt(t, n, e)
            }

            function ft(t, n, e) {
                return isNaN(t) && (t = 0), isNaN(n) && (n = 0), new ht(e, Math.cos(t *= Wa) * n, Math.sin(t) * n)
            }

            function ht(t, n, e) {
                return this instanceof ht ? (this.l = +t, this.a = +n, void(this.b = +e)) : arguments.length < 2 ? t instanceof ht ? new ht(t.l, t.a, t.b) : t instanceof lt ? ft(t.h, t.c, t.l) : kt((t = mt(t)).r, t.g, t.b) : new ht(t, n, e)
            }

            function pt(t, n, e) {
                var r = (t + 16) / 116,
                    i = r + n / 500,
                    o = r - e / 200;
                return i = gt(i) * nu, r = gt(r) * eu, o = gt(o) * ru, new mt(yt(3.2404542 * i - 1.5371385 * r - .4985314 * o), yt(-.969266 * i + 1.8760108 * r + .041556 * o), yt(.0556434 * i - .2040259 * r + 1.0572252 * o))
            }

            function dt(t, n, e) {
                return t > 0 ? new lt(Math.atan2(e, n) * Ya, Math.sqrt(n * n + e * e), t) : new lt(NaN, NaN, t)
            }

            function gt(t) {
                return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037
            }

            function vt(t) {
                return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
            }

            function yt(t) {
                return Math.round(255 * (t <= .00304 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))
            }

            function mt(t, n, e) {
                return this instanceof mt ? (this.r = ~~t, this.g = ~~n, void(this.b = ~~e)) : arguments.length < 2 ? t instanceof mt ? new mt(t.r, t.g, t.b) : bt("" + t, mt, ct) : new mt(t, n, e)
            }

            function xt(t) {
                return new mt(t >> 16, t >> 8 & 255, 255 & t)
            }

            function Mt(t) {
                return xt(t) + ""
            }

            function wt(t) {
                return t < 16 ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
            }

            function bt(t, n, e) {
                var r, i, o, a = 0,
                    u = 0,
                    s = 0;
                if (r = /([a-z]+)\((.*)\)/.exec(t = t.toLowerCase())) switch (i = r[2].split(","), r[1]) {
                    case "hsl":
                        return e(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
                    case "rgb":
                        return n(Tt(i[0]), Tt(i[1]), Tt(i[2]))
                }
                return (o = au.get(t)) ? n(o.r, o.g, o.b) : (null == t || "#" !== t.charAt(0) || isNaN(o = parseInt(t.slice(1), 16)) || (4 === t.length ? (a = (3840 & o) >> 4, a = a >> 4 | a, u = 240 & o, u = u >> 4 | u, s = 15 & o, s = s << 4 | s) : 7 === t.length && (a = (16711680 & o) >> 16, u = (65280 & o) >> 8, s = 255 & o)), n(a, u, s))
            }

            function _t(t, n, e) {
                var r, i, o = Math.min(t /= 255, n /= 255, e /= 255),
                    a = Math.max(t, n, e),
                    u = a - o,
                    s = (a + o) / 2;
                return u ? (i = s < .5 ? u / (a + o) : u / (2 - a - o), r = t == a ? (n - e) / u + (n < e ? 6 : 0) : n == a ? (e - t) / u + 2 : (t - n) / u + 4, r *= 60) : (r = NaN, i = s > 0 && s < 1 ? 0 : r), new st(r, i, s)
            }

            function kt(t, n, e) {
                t = Et(t), n = Et(n), e = Et(e);
                var r = vt((.4124564 * t + .3575761 * n + .1804375 * e) / nu),
                    i = vt((.2126729 * t + .7151522 * n + .072175 * e) / eu),
                    o = vt((.0193339 * t + .119192 * n + .9503041 * e) / ru);
                return ht(116 * i - 16, 500 * (r - i), 200 * (i - o))
            }

            function Et(t) {
                return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
            }

            function Tt(t) {
                var n = parseFloat(t);
                return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * n) : n
            }

            function Ct(t) {
                return "function" == typeof t ? t : function() {
                    return t
                }
            }

            function St(t) {
                return function(n, e, r) {
                    return 2 === arguments.length && "function" == typeof e && (r = e, e = null), Nt(n, e, t, r)
                }
            }

            function Nt(t, n, e, r) {
                function i() {
                    var t, n = s.status;
                    if (!n && It(s) || n >= 200 && n < 300 || 304 === n) {
                        try {
                            t = e.call(o, s)
                        } catch (r) {
                            return void a.error.call(o, r)
                        }
                        a.load.call(o, t)
                    } else a.error.call(o, s)
                }
                var o = {},
                    a = ca.dispatch("beforesend", "progress", "load", "error"),
                    u = {},
                    s = new XMLHttpRequest,
                    c = null;
                return !this.XDomainRequest || "withCredentials" in s || !/^(http(s)?:)?\/\//.test(t) || (s = new XDomainRequest), "onload" in s ? s.onload = s.onerror = i : s.onreadystatechange = function() {
                    s.readyState > 3 && i()
                }, s.onprogress = function(t) {
                    var n = ca.event;
                    ca.event = t;
                    try {
                        a.progress.call(o, s)
                    } finally {
                        ca.event = n
                    }
                }, o.header = function(t, n) {
                    return t = (t + "").toLowerCase(), arguments.length < 2 ? u[t] : (null == n ? delete u[t] : u[t] = n + "", o)
                }, o.mimeType = function(t) {
                    return arguments.length ? (n = null == t ? null : t + "", o) : n
                }, o.responseType = function(t) {
                    return arguments.length ? (c = t, o) : c
                }, o.response = function(t) {
                    return e = t, o
                }, ["get", "post"].forEach(function(t) {
                    o[t] = function() {
                        return o.send.apply(o, [t].concat(fa(arguments)))
                    }
                }), o.send = function(e, r, i) {
                    if (2 === arguments.length && "function" == typeof r && (i = r, r = null), s.open(e, t, !0), null == n || "accept" in u || (u.accept = n + ",*/*"), s.setRequestHeader)
                        for (var l in u) s.setRequestHeader(l, u[l]);
                    return null != n && s.overrideMimeType && s.overrideMimeType(n), null != c && (s.responseType = c), null != i && o.on("error", i).on("load", function(t) {
                        i(null, t)
                    }), a.beforesend.call(o, s), s.send(null == r ? null : r), o
                }, o.abort = function() {
                    return s.abort(), o
                }, ca.rebind(o, a, "on"), null == r ? o : o.get(At(r))
            }

            function At(t) {
                return 1 === t.length ? function(n, e) {
                    t(null == n ? e : null)
                } : t
            }

            function It(t) {
                var n = t.responseType;
                return n && "text" !== n ? t.response : t.responseText
            }

            function zt(t, n, e) {
                var r = arguments.length;
                r < 2 && (n = 0), r < 3 && (e = Date.now());
                var i = e + n,
                    o = {
                        c: t,
                        t: i,
                        n: null
                    };
                return su ? su.n = o : uu = o, su = o, cu || (lu = clearTimeout(lu), cu = 1, fu(Pt)), o
            }

            function Pt() {
                var t = Lt(),
                    n = Dt() - t;
                n > 24 ? (isFinite(n) && (clearTimeout(lu), lu = setTimeout(Pt, n)), cu = 0) : (cu = 1, fu(Pt))
            }

            function Lt() {
                for (var t = Date.now(), n = uu; n;) t >= n.t && n.c(t - n.t) && (n.c = null), n = n.n;
                return t
            }

            function Dt() {
                for (var t, n = uu, e = 1 / 0; n;) n.c ? (n.t < e && (e = n.t), n = (t = n).n) : n = t ? t.n = n.n : uu = n.n;
                return su = t, e
            }

            function Rt(t, n) {
                return n - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1)
            }

            function qt(t, n) {
                var e = Math.pow(10, 3 * wa(8 - n));
                return {
                    scale: n > 8 ? function(t) {
                        return t / e
                    } : function(t) {
                        return t * e
                    },
                    symbol: t
                }
            }

            function Ot(t) {
                var n = t.decimal,
                    e = t.thousands,
                    r = t.grouping,
                    i = t.currency,
                    o = r && e ? function(t, n) {
                        for (var i = t.length, o = [], a = 0, u = r[0], s = 0; i > 0 && u > 0 && (s + u + 1 > n && (u = Math.max(1, n - s)), o.push(t.substring(i -= u, i + u)), !((s += u + 1) > n));) u = r[a = (a + 1) % r.length];
                        return o.reverse().join(e)
                    } : x;
                return function(t) {
                    var e = pu.exec(t),
                        r = e[1] || " ",
                        a = e[2] || ">",
                        u = e[3] || "-",
                        s = e[4] || "",
                        c = e[5],
                        l = +e[6],
                        f = e[7],
                        h = e[8],
                        p = e[9],
                        d = 1,
                        g = "",
                        v = "",
                        y = !1,
                        m = !0;
                    switch (h && (h = +h.substring(1)), (c || "0" === r && "=" === a) && (c = r = "0", a = "="), p) {
                        case "n":
                            f = !0, p = "g";
                            break;
                        case "%":
                            d = 100, v = "%", p = "f";
                            break;
                        case "p":
                            d = 100, v = "%", p = "r";
                            break;
                        case "b":
                        case "o":
                        case "x":
                        case "X":
                            "#" === s && (g = "0" + p.toLowerCase());
                        case "c":
                            m = !1;
                        case "d":
                            y = !0, h = 0;
                            break;
                        case "s":
                            d = -1, p = "r"
                    }
                    "$" === s && (g = i[0], v = i[1]), "r" != p || h || (p = "g"), null != h && ("g" == p ? h = Math.max(1, Math.min(21, h)) : "e" != p && "f" != p || (h = Math.max(0, Math.min(20, h)))), p = du.get(p) || jt;
                    var x = c && f;
                    return function(t) {
                        var e = v;
                        if (y && t % 1) return "";
                        var i = t < 0 || 0 === t && 1 / t < 0 ? (t = -t, "-") : "-" === u ? "" : u;
                        if (d < 0) {
                            var s = ca.formatPrefix(t, h);
                            t = s.scale(t), e = s.symbol + v
                        } else t *= d;
                        t = p(t, h);
                        var M, w, b = t.lastIndexOf(".");
                        if (b < 0) {
                            var _ = m ? t.lastIndexOf("e") : -1;
                            _ < 0 ? (M = t, w = "") : (M = t.substring(0, _), w = t.substring(_))
                        } else M = t.substring(0, b), w = n + t.substring(b + 1);
                        !c && f && (M = o(M, 1 / 0));
                        var k = g.length + M.length + w.length + (x ? 0 : i.length),
                            E = k < l ? new Array(k = l - k + 1).join(r) : "";
                        return x && (M = o(E + M, E.length ? l - w.length : 1 / 0)), i += g, t = M + w, ("<" === a ? i + t + E : ">" === a ? E + i + t : "^" === a ? E.substring(0, k >>= 1) + i + t + E.substring(k) : i + (x ? t : E + t)) + e
                    }
                }
            }

            function jt(t) {
                return t + ""
            }

            function Ut() {
                this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
            }

            function $t(t, n, e) {
                function r(n) {
                    var e = t(n),
                        r = o(e, 1);
                    return n - e < r - n ? e : r
                }

                function i(e) {
                    return n(e = t(new vu(e - 1)), 1), e
                }

                function o(t, e) {
                    return n(t = new vu((+t)), e), t
                }

                function a(t, r, o) {
                    var a = i(t),
                        u = [];
                    if (o > 1)
                        for (; a < r;) e(a) % o || u.push(new Date((+a))), n(a, 1);
                    else
                        for (; a < r;) u.push(new Date((+a))), n(a, 1);
                    return u
                }

                function u(t, n, e) {
                    try {
                        vu = Ut;
                        var r = new Ut;
                        return r._ = t, a(r, n, e)
                    } finally {
                        vu = Date
                    }
                }
                t.floor = t, t.round = r, t.ceil = i, t.offset = o, t.range = a;
                var s = t.utc = Ft(t);
                return s.floor = s, s.round = Ft(r), s.ceil = Ft(i), s.offset = Ft(o), s.range = u, t
            }

            function Ft(t) {
                return function(n, e) {
                    try {
                        vu = Ut;
                        var r = new Ut;
                        return r._ = n, t(r, e)._
                    } finally {
                        vu = Date
                    }
                }
            }

            function Ht(t) {
                function n(t) {
                    function n(n) {
                        for (var e, i, o, a = [], u = -1, s = 0; ++u < r;) 37 === t.charCodeAt(u) && (a.push(t.slice(s, u)), null != (i = mu[e = t.charAt(++u)]) && (e = t.charAt(++u)), (o = S[e]) && (e = o(n, null == i ? "e" === e ? " " : "0" : i)), a.push(e), s = u + 1);
                        return a.push(t.slice(s, u)), a.join("")
                    }
                    var r = t.length;
                    return n.parse = function(n) {
                        var r = {
                                y: 1900,
                                m: 0,
                                d: 1,
                                H: 0,
                                M: 0,
                                S: 0,
                                L: 0,
                                Z: null
                            },
                            i = e(r, t, n, 0);
                        if (i != n.length) return null;
                        "p" in r && (r.H = r.H % 12 + 12 * r.p);
                        var o = null != r.Z && vu !== Ut,
                            a = new(o ? Ut : vu);
                        return "j" in r ? a.setFullYear(r.y, 0, r.j) : "W" in r || "U" in r ? ("w" in r || (r.w = "W" in r ? 1 : 0), a.setFullYear(r.y, 0, 1), a.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (a.getDay() + 5) % 7 : r.w + 7 * r.U - (a.getDay() + 6) % 7)) : a.setFullYear(r.y, r.m, r.d), a.setHours(r.H + (r.Z / 100 | 0), r.M + r.Z % 100, r.S, r.L), o ? a._ : a
                    }, n.toString = function() {
                        return t
                    }, n
                }

                function e(t, n, e, r) {
                    for (var i, o, a, u = 0, s = n.length, c = e.length; u < s;) {
                        if (r >= c) return -1;
                        if (i = n.charCodeAt(u++), 37 === i) {
                            if (a = n.charAt(u++), o = N[a in mu ? n.charAt(u++) : a], !o || (r = o(t, e, r)) < 0) return -1
                        } else if (i != e.charCodeAt(r++)) return -1
                    }
                    return r
                }

                function r(t, n, e) {
                    b.lastIndex = 0;
                    var r = b.exec(n.slice(e));
                    return r ? (t.w = _.get(r[0].toLowerCase()), e + r[0].length) : -1
                }

                function i(t, n, e) {
                    M.lastIndex = 0;
                    var r = M.exec(n.slice(e));
                    return r ? (t.w = w.get(r[0].toLowerCase()), e + r[0].length) : -1
                }

                function o(t, n, e) {
                    T.lastIndex = 0;
                    var r = T.exec(n.slice(e));
                    return r ? (t.m = C.get(r[0].toLowerCase()), e + r[0].length) : -1
                }

                function a(t, n, e) {
                    k.lastIndex = 0;
                    var r = k.exec(n.slice(e));
                    return r ? (t.m = E.get(r[0].toLowerCase()), e + r[0].length) : -1
                }

                function u(t, n, r) {
                    return e(t, S.c.toString(), n, r)
                }

                function s(t, n, r) {
                    return e(t, S.x.toString(), n, r)
                }

                function c(t, n, r) {
                    return e(t, S.X.toString(), n, r)
                }

                function l(t, n, e) {
                    var r = x.get(n.slice(e, e += 2).toLowerCase());
                    return null == r ? -1 : (t.p = r, e)
                }
                var f = t.dateTime,
                    h = t.date,
                    p = t.time,
                    d = t.periods,
                    g = t.days,
                    v = t.shortDays,
                    y = t.months,
                    m = t.shortMonths;
                n.utc = function(t) {
                    function e(t) {
                        try {
                            vu = Ut;
                            var n = new vu;
                            return n._ = t, r(n)
                        } finally {
                            vu = Date
                        }
                    }
                    var r = n(t);
                    return e.parse = function(t) {
                        try {
                            vu = Ut;
                            var n = r.parse(t);
                            return n && n._
                        } finally {
                            vu = Date
                        }
                    }, e.toString = r.toString, e
                }, n.multi = n.utc.multi = ln;
                var x = ca.map(),
                    M = Yt(g),
                    w = Vt(g),
                    b = Yt(v),
                    _ = Vt(v),
                    k = Yt(y),
                    E = Vt(y),
                    T = Yt(m),
                    C = Vt(m);
                d.forEach(function(t, n) {
                    x.set(t.toLowerCase(), n)
                });
                var S = {
                        a: function(t) {
                            return v[t.getDay()]
                        },
                        A: function(t) {
                            return g[t.getDay()]
                        },
                        b: function(t) {
                            return m[t.getMonth()]
                        },
                        B: function(t) {
                            return y[t.getMonth()]
                        },
                        c: n(f),
                        d: function(t, n) {
                            return Wt(t.getDate(), n, 2)
                        },
                        e: function(t, n) {
                            return Wt(t.getDate(), n, 2)
                        },
                        H: function(t, n) {
                            return Wt(t.getHours(), n, 2)
                        },
                        I: function(t, n) {
                            return Wt(t.getHours() % 12 || 12, n, 2)
                        },
                        j: function(t, n) {
                            return Wt(1 + gu.dayOfYear(t), n, 3)
                        },
                        L: function(t, n) {
                            return Wt(t.getMilliseconds(), n, 3)
                        },
                        m: function(t, n) {
                            return Wt(t.getMonth() + 1, n, 2)
                        },
                        M: function(t, n) {
                            return Wt(t.getMinutes(), n, 2)
                        },
                        p: function(t) {
                            return d[+(t.getHours() >= 12)]
                        },
                        S: function(t, n) {
                            return Wt(t.getSeconds(), n, 2)
                        },
                        U: function(t, n) {
                            return Wt(gu.sundayOfYear(t), n, 2)
                        },
                        w: function(t) {
                            return t.getDay()
                        },
                        W: function(t, n) {
                            return Wt(gu.mondayOfYear(t), n, 2)
                        },
                        x: n(h),
                        X: n(p),
                        y: function(t, n) {
                            return Wt(t.getFullYear() % 100, n, 2)
                        },
                        Y: function(t, n) {
                            return Wt(t.getFullYear() % 1e4, n, 4)
                        },
                        Z: sn,
                        "%": function() {
                            return "%"
                        }
                    },
                    N = {
                        a: r,
                        A: i,
                        b: o,
                        B: a,
                        c: u,
                        d: nn,
                        e: nn,
                        H: rn,
                        I: rn,
                        j: en,
                        L: un,
                        m: tn,
                        M: on,
                        p: l,
                        S: an,
                        U: Xt,
                        w: Bt,
                        W: Zt,
                        x: s,
                        X: c,
                        y: Qt,
                        Y: Gt,
                        Z: Jt,
                        "%": cn
                    };
                return n
            }

            function Wt(t, n, e) {
                var r = t < 0 ? "-" : "",
                    i = (r ? -t : t) + "",
                    o = i.length;
                return r + (o < e ? new Array(e - o + 1).join(n) + i : i)
            }

            function Yt(t) {
                return new RegExp("^(?:" + t.map(ca.requote).join("|") + ")", "i")
            }

            function Vt(t) {
                for (var n = new l, e = -1, r = t.length; ++e < r;) n.set(t[e].toLowerCase(), e);
                return n
            }

            function Bt(t, n, e) {
                xu.lastIndex = 0;
                var r = xu.exec(n.slice(e, e + 1));
                return r ? (t.w = +r[0], e + r[0].length) : -1
            }

            function Xt(t, n, e) {
                xu.lastIndex = 0;
                var r = xu.exec(n.slice(e));
                return r ? (t.U = +r[0], e + r[0].length) : -1
            }

            function Zt(t, n, e) {
                xu.lastIndex = 0;
                var r = xu.exec(n.slice(e));
                return r ? (t.W = +r[0], e + r[0].length) : -1
            }

            function Gt(t, n, e) {
                xu.lastIndex = 0;
                var r = xu.exec(n.slice(e, e + 4));
                return r ? (t.y = +r[0], e + r[0].length) : -1
            }

            function Qt(t, n, e) {
                xu.lastIndex = 0;
                var r = xu.exec(n.slice(e, e + 2));
                return r ? (t.y = Kt(+r[0]), e + r[0].length) : -1
            }

            function Jt(t, n, e) {
                return /^[+-]\d{4}$/.test(n = n.slice(e, e + 5)) ? (t.Z = -n, e + 5) : -1
            }

            function Kt(t) {
                return t + (t > 68 ? 1900 : 2e3)
            }

            function tn(t, n, e) {
                xu.lastIndex = 0;
                var r = xu.exec(n.slice(e, e + 2));
                return r ? (t.m = r[0] - 1, e + r[0].length) : -1
            }

            function nn(t, n, e) {
                xu.lastIndex = 0;
                var r = xu.exec(n.slice(e, e + 2));
                return r ? (t.d = +r[0], e + r[0].length) : -1
            }

            function en(t, n, e) {
                xu.lastIndex = 0;
                var r = xu.exec(n.slice(e, e + 3));
                return r ? (t.j = +r[0], e + r[0].length) : -1
            }

            function rn(t, n, e) {
                xu.lastIndex = 0;
                var r = xu.exec(n.slice(e, e + 2));
                return r ? (t.H = +r[0], e + r[0].length) : -1
            }

            function on(t, n, e) {
                xu.lastIndex = 0;
                var r = xu.exec(n.slice(e, e + 2));
                return r ? (t.M = +r[0], e + r[0].length) : -1
            }

            function an(t, n, e) {
                xu.lastIndex = 0;
                var r = xu.exec(n.slice(e, e + 2));
                return r ? (t.S = +r[0], e + r[0].length) : -1
            }

            function un(t, n, e) {
                xu.lastIndex = 0;
                var r = xu.exec(n.slice(e, e + 3));
                return r ? (t.L = +r[0], e + r[0].length) : -1
            }

            function sn(t) {
                var n = t.getTimezoneOffset(),
                    e = n > 0 ? "-" : "+",
                    r = wa(n) / 60 | 0,
                    i = wa(n) % 60;
                return e + Wt(r, "0", 2) + Wt(i, "0", 2)
            }

            function cn(t, n, e) {
                Mu.lastIndex = 0;
                var r = Mu.exec(n.slice(e, e + 1));
                return r ? e + r[0].length : -1
            }

            function ln(t) {
                for (var n = t.length, e = -1; ++e < n;) t[e][0] = this(t[e][0]);
                return function(n) {
                    for (var e = 0, r = t[e]; !r[1](n);) r = t[++e];
                    return r[0](n)
                }
            }

            function fn() {}

            function hn(t, n, e) {
                var r = e.s = t + n,
                    i = r - t,
                    o = r - i;
                e.t = t - o + (n - i)
            }

            function pn(t, n) {
                t && ku.hasOwnProperty(t.type) && ku[t.type](t, n)
            }

            function dn(t, n, e) {
                var r, i = -1,
                    o = t.length - e;
                for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);
                n.lineEnd()
            }

            function gn(t, n) {
                var e = -1,
                    r = t.length;
                for (n.polygonStart(); ++e < r;) dn(t[e], n, 1);
                n.polygonEnd()
            }

            function vn() {
                function t(t, n) {
                    t *= Wa, n = n * Wa / 2 + Ua / 4;
                    var e = t - r,
                        a = e >= 0 ? 1 : -1,
                        u = a * e,
                        s = Math.cos(n),
                        c = Math.sin(n),
                        l = o * c,
                        f = i * s + l * Math.cos(u),
                        h = l * a * Math.sin(u);
                    Tu.add(Math.atan2(h, f)), r = t, i = s, o = c
                }
                var n, e, r, i, o;
                Cu.point = function(a, u) {
                    Cu.point = t, r = (n = a) * Wa, i = Math.cos(u = (e = u) * Wa / 2 + Ua / 4), o = Math.sin(u)
                }, Cu.lineEnd = function() {
                    t(n, e)
                }
            }

            function yn(t) {
                var n = t[0],
                    e = t[1],
                    r = Math.cos(e);
                return [r * Math.cos(n), r * Math.sin(n), Math.sin(e)]
            }

            function mn(t, n) {
                return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
            }

            function xn(t, n) {
                return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
            }

            function Mn(t, n) {
                t[0] += n[0], t[1] += n[1], t[2] += n[2]
            }

            function wn(t, n) {
                return [t[0] * n, t[1] * n, t[2] * n]
            }

            function bn(t) {
                var n = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
                t[0] /= n, t[1] /= n, t[2] /= n
            }

            function _n(t) {
                return [Math.atan2(t[1], t[0]), et(t[2])]
            }

            function kn(t, n) {
                return wa(t[0] - n[0]) < Oa && wa(t[1] - n[1]) < Oa
            }

            function En(t, n) {
                t *= Wa;
                var e = Math.cos(n *= Wa);
                Tn(e * Math.cos(t), e * Math.sin(t), Math.sin(n))
            }

            function Tn(t, n, e) {
                ++Su, Au += (t - Au) / Su, Iu += (n - Iu) / Su, zu += (e - zu) / Su
            }

            function Cn() {
                function t(t, i) {
                    t *= Wa;
                    var o = Math.cos(i *= Wa),
                        a = o * Math.cos(t),
                        u = o * Math.sin(t),
                        s = Math.sin(i),
                        c = Math.atan2(Math.sqrt((c = e * s - r * u) * c + (c = r * a - n * s) * c + (c = n * u - e * a) * c), n * a + e * u + r * s);
                    Nu += c, Pu += c * (n + (n = a)), Lu += c * (e + (e = u)), Du += c * (r + (r = s)), Tn(n, e, r)
                }
                var n, e, r;
                ju.point = function(i, o) {
                    i *= Wa;
                    var a = Math.cos(o *= Wa);
                    n = a * Math.cos(i), e = a * Math.sin(i), r = Math.sin(o), ju.point = t, Tn(n, e, r)
                }
            }

            function Sn() {
                ju.point = En
            }

            function Nn() {
                function t(t, n) {
                    t *= Wa;
                    var e = Math.cos(n *= Wa),
                        a = e * Math.cos(t),
                        u = e * Math.sin(t),
                        s = Math.sin(n),
                        c = i * s - o * u,
                        l = o * a - r * s,
                        f = r * u - i * a,
                        h = Math.sqrt(c * c + l * l + f * f),
                        p = r * a + i * u + o * s,
                        d = h && -nt(p) / h,
                        g = Math.atan2(h, p);
                    Ru += d * c, qu += d * l, Ou += d * f, Nu += g, Pu += g * (r + (r = a)), Lu += g * (i + (i = u)), Du += g * (o + (o = s)), Tn(r, i, o)
                }
                var n, e, r, i, o;
                ju.point = function(a, u) {
                    n = a, e = u, ju.point = t, a *= Wa;
                    var s = Math.cos(u *= Wa);
                    r = s * Math.cos(a), i = s * Math.sin(a), o = Math.sin(u), Tn(r, i, o)
                }, ju.lineEnd = function() {
                    t(n, e), ju.lineEnd = Sn, ju.point = En
                }
            }

            function An(t, n) {
                function e(e, r) {
                    return e = t(e, r), n(e[0], e[1])
                }
                return t.invert && n.invert && (e.invert = function(e, r) {
                    return e = n.invert(e, r), e && t.invert(e[0], e[1])
                }), e
            }

            function In() {
                return !0
            }

            function zn(t, n, e, r, i) {
                var o = [],
                    a = [];
                if (t.forEach(function(t) {
                        if (!((n = t.length - 1) <= 0)) {
                            var n, e = t[0],
                                r = t[n];
                            if (kn(e, r)) {
                                i.lineStart();
                                for (var u = 0; u < n; ++u) i.point((e = t[u])[0], e[1]);
                                return void i.lineEnd()
                            }
                            var s = new Ln(e, t, null, (!0)),
                                c = new Ln(e, null, s, (!1));
                            s.o = c, o.push(s), a.push(c), s = new Ln(r, t, null, (!1)), c = new Ln(r, null, s, (!0)), s.o = c, o.push(s), a.push(c)
                        }
                    }), a.sort(n), Pn(o), Pn(a), o.length) {
                    for (var u = 0, s = e, c = a.length; u < c; ++u) a[u].e = s = !s;
                    for (var l, f, h = o[0];;) {
                        for (var p = h, d = !0; p.v;)
                            if ((p = p.n) === h) return;
                        l = p.z, i.lineStart();
                        do {
                            if (p.v = p.o.v = !0, p.e) {
                                if (d)
                                    for (var u = 0, c = l.length; u < c; ++u) i.point((f = l[u])[0], f[1]);
                                else r(p.x, p.n.x, 1, i);
                                p = p.n
                            } else {
                                if (d) {
                                    l = p.p.z;
                                    for (var u = l.length - 1; u >= 0; --u) i.point((f = l[u])[0], f[1])
                                } else r(p.x, p.p.x, -1, i);
                                p = p.p
                            }
                            p = p.o, l = p.z, d = !d
                        } while (!p.v);
                        i.lineEnd()
                    }
                }
            }

            function Pn(t) {
                if (n = t.length) {
                    for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
                    i.n = e = t[0], e.p = i
                }
            }

            function Ln(t, n, e, r) {
                this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
            }

            function Dn(t, n, e, r) {
                return function(i, o) {
                    function a(n, e) {
                        var r = i(n, e);
                        t(n = r[0], e = r[1]) && o.point(n, e)
                    }

                    function u(t, n) {
                        var e = i(t, n);
                        v.point(e[0], e[1])
                    }

                    function s() {
                        m.point = u, v.lineStart()
                    }

                    function c() {
                        m.point = a, v.lineEnd()
                    }

                    function l(t, n) {
                        g.push([t, n]);
                        var e = i(t, n);
                        M.point(e[0], e[1])
                    }

                    function f() {
                        M.lineStart(), g = []
                    }

                    function h() {
                        l(g[0][0], g[0][1]), M.lineEnd();
                        var t, n = M.clean(),
                            e = x.buffer(),
                            r = e.length;
                        if (g.pop(), d.push(g), g = null, r)
                            if (1 & n) {
                                t = e[0];
                                var i, r = t.length - 1,
                                    a = -1;
                                if (r > 0) {
                                    for (w || (o.polygonStart(), w = !0), o.lineStart(); ++a < r;) o.point((i = t[a])[0], i[1]);
                                    o.lineEnd()
                                }
                            } else r > 1 && 2 & n && e.push(e.pop().concat(e.shift())), p.push(e.filter(Rn))
                    }
                    var p, d, g, v = n(o),
                        y = i.invert(r[0], r[1]),
                        m = {
                            point: a,
                            lineStart: s,
                            lineEnd: c,
                            polygonStart: function() {
                                m.point = l, m.lineStart = f, m.lineEnd = h, p = [], d = []
                            },
                            polygonEnd: function() {
                                m.point = a, m.lineStart = s, m.lineEnd = c, p = ca.merge(p);
                                var t = Fn(y, d);
                                p.length ? (w || (o.polygonStart(), w = !0), zn(p, On, t, e, o)) : t && (w || (o.polygonStart(), w = !0), o.lineStart(), e(null, null, 1, o), o.lineEnd()), w && (o.polygonEnd(), w = !1), p = d = null
                            },
                            sphere: function() {
                                o.polygonStart(), o.lineStart(), e(null, null, 1, o), o.lineEnd(), o.polygonEnd()
                            }
                        },
                        x = qn(),
                        M = n(x),
                        w = !1;
                    return m
                }
            }

            function Rn(t) {
                return t.length > 1
            }

            function qn() {
                var t, n = [];
                return {
                    lineStart: function() {
                        n.push(t = [])
                    },
                    point: function(n, e) {
                        t.push([n, e])
                    },
                    lineEnd: b,
                    buffer: function() {
                        var e = n;
                        return n = [], t = null, e
                    },
                    rejoin: function() {
                        n.length > 1 && n.push(n.pop().concat(n.shift()))
                    }
                }
            }

            function On(t, n) {
                return ((t = t.x)[0] < 0 ? t[1] - Ha - Oa : Ha - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Ha - Oa : Ha - n[1])
            }

            function jn(t) {
                var n, e = NaN,
                    r = NaN,
                    i = NaN;
                return {
                    lineStart: function() {
                        t.lineStart(), n = 1
                    },
                    point: function(o, a) {
                        var u = o > 0 ? Ua : -Ua,
                            s = wa(o - e);
                        wa(s - Ua) < Oa ? (t.point(e, r = (r + a) / 2 > 0 ? Ha : -Ha), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), t.point(o, r), n = 0) : i !== u && s >= Ua && (wa(e - i) < Oa && (e -= i * Oa), wa(o - u) < Oa && (o -= u * Oa), r = Un(e, r, o, a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), n = 0), t.point(e = o, r = a), i = u
                    },
                    lineEnd: function() {
                        t.lineEnd(), e = r = NaN
                    },
                    clean: function() {
                        return 2 - n
                    }
                }
            }

            function Un(t, n, e, r) {
                var i, o, a = Math.sin(t - e);
                return wa(a) > Oa ? Math.atan((Math.sin(n) * (o = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (i = Math.cos(n)) * Math.sin(t)) / (i * o * a)) : (n + r) / 2
            }

            function $n(t, n, e, r) {
                var i;
                if (null == t) i = e * Ha, r.point(-Ua, i), r.point(0, i), r.point(Ua, i), r.point(Ua, 0), r.point(Ua, -i), r.point(0, -i), r.point(-Ua, -i), r.point(-Ua, 0), r.point(-Ua, i);
                else if (wa(t[0] - n[0]) > Oa) {
                    var o = t[0] < n[0] ? Ua : -Ua;
                    i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
                } else r.point(n[0], n[1])
            }

            function Fn(t, n) {
                var e = t[0],
                    r = t[1],
                    i = [Math.sin(e), -Math.cos(e), 0],
                    o = 0,
                    a = 0;
                Tu.reset();
                for (var u = 0, s = n.length; u < s; ++u) {
                    var c = n[u],
                        l = c.length;
                    if (l)
                        for (var f = c[0], h = f[0], p = f[1] / 2 + Ua / 4, d = Math.sin(p), g = Math.cos(p), v = 1;;) {
                            v === l && (v = 0), t = c[v];
                            var y = t[0],
                                m = t[1] / 2 + Ua / 4,
                                x = Math.sin(m),
                                M = Math.cos(m),
                                w = y - h,
                                b = w >= 0 ? 1 : -1,
                                _ = b * w,
                                k = _ > Ua,
                                E = d * x;
                            if (Tu.add(Math.atan2(E * b * Math.sin(_), g * M + E * Math.cos(_))), o += k ? w + b * $a : w, k ^ h >= e ^ y >= e) {
                                var T = xn(yn(f), yn(t));
                                bn(T);
                                var C = xn(i, T);
                                bn(C);
                                var S = (k ^ w >= 0 ? -1 : 1) * et(C[2]);
                                (r > S || r === S && (T[0] || T[1])) && (a += k ^ w >= 0 ? 1 : -1)
                            }
                            if (!v++) break;
                            h = y, d = x, g = M, f = t
                        }
                }
                return (o < -Oa || o < Oa && Tu < -Oa) ^ 1 & a
            }

            function Hn(t) {
                function n(t, n) {
                    return Math.cos(t) * Math.cos(n) > o
                }

                function e(t) {
                    var e, o, s, c, l;
                    return {
                        lineStart: function() {
                            c = s = !1, l = 1
                        },
                        point: function(f, h) {
                            var p, d = [f, h],
                                g = n(f, h),
                                v = a ? g ? 0 : i(f, h) : g ? i(f + (f < 0 ? Ua : -Ua), h) : 0;
                            if (!e && (c = s = g) && t.lineStart(), g !== s && (p = r(e, d), (kn(e, p) || kn(d, p)) && (d[0] += Oa, d[1] += Oa, g = n(d[0], d[1]))), g !== s) l = 0, g ? (t.lineStart(), p = r(d, e), t.point(p[0], p[1])) : (p = r(e, d), t.point(p[0], p[1]), t.lineEnd()), e = p;
                            else if (u && e && a ^ g) {
                                var y;
                                v & o || !(y = r(d, e, !0)) || (l = 0, a ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd()) : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1])))
                            }!g || e && kn(e, d) || t.point(d[0], d[1]), e = d, s = g, o = v
                        },
                        lineEnd: function() {
                            s && t.lineEnd(), e = null
                        },
                        clean: function() {
                            return l | (c && s) << 1
                        }
                    }
                }

                function r(t, n, e) {
                    var r = yn(t),
                        i = yn(n),
                        a = [1, 0, 0],
                        u = xn(r, i),
                        s = mn(u, u),
                        c = u[0],
                        l = s - c * c;
                    if (!l) return !e && t;
                    var f = o * s / l,
                        h = -o * c / l,
                        p = xn(a, u),
                        d = wn(a, f),
                        g = wn(u, h);
                    Mn(d, g);
                    var v = p,
                        y = mn(d, v),
                        m = mn(v, v),
                        x = y * y - m * (mn(d, d) - 1);
                    if (!(x < 0)) {
                        var M = Math.sqrt(x),
                            w = wn(v, (-y - M) / m);
                        if (Mn(w, d), w = _n(w), !e) return w;
                        var b, _ = t[0],
                            k = n[0],
                            E = t[1],
                            T = n[1];
                        k < _ && (b = _, _ = k, k = b);
                        var C = k - _,
                            S = wa(C - Ua) < Oa,
                            N = S || C < Oa;
                        if (!S && T < E && (b = E, E = T, T = b), N ? S ? E + T > 0 ^ w[1] < (wa(w[0] - _) < Oa ? E : T) : E <= w[1] && w[1] <= T : C > Ua ^ (_ <= w[0] && w[0] <= k)) {
                            var A = wn(v, (-y + M) / m);
                            return Mn(A, d), [w, _n(A)]
                        }
                    }
                }

                function i(n, e) {
                    var r = a ? t : Ua - t,
                        i = 0;
                    return n < -r ? i |= 1 : n > r && (i |= 2), e < -r ? i |= 4 : e > r && (i |= 8), i
                }
                var o = Math.cos(t),
                    a = o > 0,
                    u = wa(o) > Oa,
                    s = ve(t, 6 * Wa);
                return Dn(n, e, s, a ? [0, -t] : [-Ua, t - Ua])
            }

            function Wn(t, n, e, r) {
                return function(i) {
                    var o, a = i.a,
                        u = i.b,
                        s = a.x,
                        c = a.y,
                        l = u.x,
                        f = u.y,
                        h = 0,
                        p = 1,
                        d = l - s,
                        g = f - c;
                    if (o = t - s, d || !(o > 0)) {
                        if (o /= d, d < 0) {
                            if (o < h) return;
                            o < p && (p = o)
                        } else if (d > 0) {
                            if (o > p) return;
                            o > h && (h = o)
                        }
                        if (o = e - s, d || !(o < 0)) {
                            if (o /= d, d < 0) {
                                if (o > p) return;
                                o > h && (h = o)
                            } else if (d > 0) {
                                if (o < h) return;
                                o < p && (p = o)
                            }
                            if (o = n - c, g || !(o > 0)) {
                                if (o /= g, g < 0) {
                                    if (o < h) return;
                                    o < p && (p = o)
                                } else if (g > 0) {
                                    if (o > p) return;
                                    o > h && (h = o)
                                }
                                if (o = r - c, g || !(o < 0)) {
                                    if (o /= g, g < 0) {
                                        if (o > p) return;
                                        o > h && (h = o)
                                    } else if (g > 0) {
                                        if (o < h) return;
                                        o < p && (p = o)
                                    }
                                    return h > 0 && (i.a = {
                                        x: s + h * d,
                                        y: c + h * g
                                    }), p < 1 && (i.b = {
                                        x: s + p * d,
                                        y: c + p * g
                                    }), i
                                }
                            }
                        }
                    }
                }
            }

            function Yn(t, n, e, r) {
                function i(r, i) {
                    return wa(r[0] - t) < Oa ? i > 0 ? 0 : 3 : wa(r[0] - e) < Oa ? i > 0 ? 2 : 1 : wa(r[1] - n) < Oa ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
                }

                function o(t, n) {
                    return a(t.x, n.x)
                }

                function a(t, n) {
                    var e = i(t, 1),
                        r = i(n, 1);
                    return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
                }
                return function(u) {
                    function s(t) {
                        for (var n = 0, e = v.length, r = t[1], i = 0; i < e; ++i)
                            for (var o, a = 1, u = v[i], s = u.length, c = u[0]; a < s; ++a) o = u[a], c[1] <= r ? o[1] > r && tt(c, o, t) > 0 && ++n : o[1] <= r && tt(c, o, t) < 0 && --n, c = o;
                        return 0 !== n
                    }

                    function c(o, u, s, c) {
                        var l = 0,
                            f = 0;
                        if (null == o || (l = i(o, s)) !== (f = i(u, s)) || a(o, u) < 0 ^ s > 0) {
                            do c.point(0 === l || 3 === l ? t : e, l > 1 ? r : n); while ((l = (l + s + 4) % 4) !== f)
                        } else c.point(u[0], u[1])
                    }

                    function l(i, o) {
                        return t <= i && i <= e && n <= o && o <= r
                    }

                    function f(t, n) {
                        l(t, n) && u.point(t, n)
                    }

                    function h() {
                        N.point = d, v && v.push(y = []), k = !0, _ = !1, w = b = NaN
                    }

                    function p() {
                        g && (d(m, x), M && _ && C.rejoin(), g.push(C.buffer())), N.point = f, _ && u.lineEnd()
                    }

                    function d(t, n) {
                        t = Math.max(-$u, Math.min($u, t)), n = Math.max(-$u, Math.min($u, n));
                        var e = l(t, n);
                        if (v && y.push([t, n]), k) m = t, x = n, M = e, k = !1, e && (u.lineStart(), u.point(t, n));
                        else if (e && _) u.point(t, n);
                        else {
                            var r = {
                                a: {
                                    x: w,
                                    y: b
                                },
                                b: {
                                    x: t,
                                    y: n
                                }
                            };
                            S(r) ? (_ || (u.lineStart(), u.point(r.a.x, r.a.y)), u.point(r.b.x, r.b.y), e || u.lineEnd(), E = !1) : e && (u.lineStart(), u.point(t, n), E = !1)
                        }
                        w = t, b = n, _ = e
                    }
                    var g, v, y, m, x, M, w, b, _, k, E, T = u,
                        C = qn(),
                        S = Wn(t, n, e, r),
                        N = {
                            point: f,
                            lineStart: h,
                            lineEnd: p,
                            polygonStart: function() {
                                u = C, g = [], v = [], E = !0
                            },
                            polygonEnd: function() {
                                u = T, g = ca.merge(g);
                                var n = s([t, r]),
                                    e = E && n,
                                    i = g.length;
                                (e || i) && (u.polygonStart(), e && (u.lineStart(), c(null, null, 1, u), u.lineEnd()), i && zn(g, o, n, c, u), u.polygonEnd()), g = v = y = null
                            }
                        };
                    return N
                }
            }

            function Vn(t) {
                var n = 0,
                    e = Ua / 3,
                    r = se(t),
                    i = r(n, e);
                return i.parallels = function(t) {
                    return arguments.length ? r(n = t[0] * Ua / 180, e = t[1] * Ua / 180) : [n / Ua * 180, e / Ua * 180]
                }, i
            }

            function Bn(t, n) {
                function e(t, n) {
                    var e = Math.sqrt(o - 2 * i * Math.sin(n)) / i;
                    return [e * Math.sin(t *= i), a - e * Math.cos(t)]
                }
                var r = Math.sin(t),
                    i = (r + Math.sin(n)) / 2,
                    o = 1 + r * (2 * i - r),
                    a = Math.sqrt(o) / i;
                return e.invert = function(t, n) {
                    var e = a - n;
                    return [Math.atan2(t, e) / i, et((o - (t * t + e * e) * i * i) / (2 * i))]
                }, e
            }

            function Xn() {
                function t(t, n) {
                    Hu += i * t - r * n, r = t, i = n
                }
                var n, e, r, i;
                Xu.point = function(o, a) {
                    Xu.point = t, n = r = o, e = i = a
                }, Xu.lineEnd = function() {
                    t(n, e)
                }
            }

            function Zn(t, n) {
                t < Wu && (Wu = t), t > Vu && (Vu = t), n < Yu && (Yu = n), n > Bu && (Bu = n)
            }

            function Gn() {
                function t(t, n) {
                    a.push("M", t, ",", n, o)
                }

                function n(t, n) {
                    a.push("M", t, ",", n), u.point = e
                }

                function e(t, n) {
                    a.push("L", t, ",", n)
                }

                function r() {
                    u.point = t
                }

                function i() {
                    a.push("Z")
                }
                var o = Qn(4.5),
                    a = [],
                    u = {
                        point: t,
                        lineStart: function() {
                            u.point = n
                        },
                        lineEnd: r,
                        polygonStart: function() {
                            u.lineEnd = i
                        },
                        polygonEnd: function() {
                            u.lineEnd = r, u.point = t
                        },
                        pointRadius: function(t) {
                            return o = Qn(t), u
                        },
                        result: function() {
                            if (a.length) {
                                var t = a.join("");
                                return a = [], t
                            }
                        }
                    };
                return u
            }

            function Qn(t) {
                return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
            }

            function Jn(t, n) {
                Au += t, Iu += n, ++zu
            }

            function Kn() {
                function t(t, r) {
                    var i = t - n,
                        o = r - e,
                        a = Math.sqrt(i * i + o * o);
                    Pu += a * (n + t) / 2, Lu += a * (e + r) / 2, Du += a, Jn(n = t, e = r)
                }
                var n, e;
                Gu.point = function(r, i) {
                    Gu.point = t, Jn(n = r, e = i)
                }
            }

            function te() {
                Gu.point = Jn
            }

            function ne() {
                function t(t, n) {
                    var e = t - r,
                        o = n - i,
                        a = Math.sqrt(e * e + o * o);
                    Pu += a * (r + t) / 2, Lu += a * (i + n) / 2, Du += a, a = i * t - r * n, Ru += a * (r + t), qu += a * (i + n), Ou += 3 * a, Jn(r = t, i = n)
                }
                var n, e, r, i;
                Gu.point = function(o, a) {
                    Gu.point = t, Jn(n = r = o, e = i = a)
                }, Gu.lineEnd = function() {
                    t(n, e)
                }
            }

            function ee(t) {
                function n(n, e) {
                    t.moveTo(n + a, e), t.arc(n, e, a, 0, $a)
                }

                function e(n, e) {
                    t.moveTo(n, e), u.point = r
                }

                function r(n, e) {
                    t.lineTo(n, e)
                }

                function i() {
                    u.point = n
                }

                function o() {
                    t.closePath()
                }
                var a = 4.5,
                    u = {
                        point: n,
                        lineStart: function() {
                            u.point = e
                        },
                        lineEnd: i,
                        polygonStart: function() {
                            u.lineEnd = o;
                        },
                        polygonEnd: function() {
                            u.lineEnd = i, u.point = n
                        },
                        pointRadius: function(t) {
                            return a = t, u
                        },
                        result: b
                    };
                return u
            }

            function re(t) {
                function n(t) {
                    return (u ? r : e)(t)
                }

                function e(n) {
                    return ae(n, function(e, r) {
                        e = t(e, r), n.point(e[0], e[1])
                    })
                }

                function r(n) {
                    function e(e, r) {
                        e = t(e, r), n.point(e[0], e[1])
                    }

                    function r() {
                        x = NaN, k.point = o, n.lineStart()
                    }

                    function o(e, r) {
                        var o = yn([e, r]),
                            a = t(e, r);
                        i(x, M, m, w, b, _, x = a[0], M = a[1], m = e, w = o[0], b = o[1], _ = o[2], u, n), n.point(x, M)
                    }

                    function a() {
                        k.point = e, n.lineEnd()
                    }

                    function s() {
                        r(), k.point = c, k.lineEnd = l
                    }

                    function c(t, n) {
                        o(f = t, h = n), p = x, d = M, g = w, v = b, y = _, k.point = o
                    }

                    function l() {
                        i(x, M, m, w, b, _, p, d, f, g, v, y, u, n), k.lineEnd = a, a()
                    }
                    var f, h, p, d, g, v, y, m, x, M, w, b, _, k = {
                        point: e,
                        lineStart: r,
                        lineEnd: a,
                        polygonStart: function() {
                            n.polygonStart(), k.lineStart = s
                        },
                        polygonEnd: function() {
                            n.polygonEnd(), k.lineStart = r
                        }
                    };
                    return k
                }

                function i(n, e, r, u, s, c, l, f, h, p, d, g, v, y) {
                    var m = l - n,
                        x = f - e,
                        M = m * m + x * x;
                    if (M > 4 * o && v--) {
                        var w = u + p,
                            b = s + d,
                            _ = c + g,
                            k = Math.sqrt(w * w + b * b + _ * _),
                            E = Math.asin(_ /= k),
                            T = wa(wa(_) - 1) < Oa || wa(r - h) < Oa ? (r + h) / 2 : Math.atan2(b, w),
                            C = t(T, E),
                            S = C[0],
                            N = C[1],
                            A = S - n,
                            I = N - e,
                            z = x * A - m * I;
                        (z * z / M > o || wa((m * A + x * I) / M - .5) > .3 || u * p + s * d + c * g < a) && (i(n, e, r, u, s, c, S, N, T, w /= k, b /= k, _, v, y), y.point(S, N), i(S, N, T, w, b, _, l, f, h, p, d, g, v, y))
                    }
                }
                var o = .5,
                    a = Math.cos(30 * Wa),
                    u = 16;
                return n.precision = function(t) {
                    return arguments.length ? (u = (o = t * t) > 0 && 16, n) : Math.sqrt(o)
                }, n
            }

            function ie(t) {
                var n = re(function(n, e) {
                    return t([n * Ya, e * Ya])
                });
                return function(t) {
                    return ce(n(t))
                }
            }

            function oe(t) {
                this.stream = t
            }

            function ae(t, n) {
                return {
                    point: n,
                    sphere: function() {
                        t.sphere()
                    },
                    lineStart: function() {
                        t.lineStart()
                    },
                    lineEnd: function() {
                        t.lineEnd()
                    },
                    polygonStart: function() {
                        t.polygonStart()
                    },
                    polygonEnd: function() {
                        t.polygonEnd()
                    }
                }
            }

            function ue(t) {
                return se(function() {
                    return t
                })()
            }

            function se(t) {
                function n(t) {
                    return t = u(t[0] * Wa, t[1] * Wa), [t[0] * h + s, c - t[1] * h]
                }

                function e(t) {
                    return t = u.invert((t[0] - s) / h, (c - t[1]) / h), t && [t[0] * Ya, t[1] * Ya]
                }

                function r() {
                    u = An(a = he(y, m, M), o);
                    var t = o(g, v);
                    return s = p - t[0] * h, c = d + t[1] * h, i()
                }

                function i() {
                    return l && (l.valid = !1, l = null), n
                }
                var o, a, u, s, c, l, f = re(function(t, n) {
                        return t = o(t, n), [t[0] * h + s, c - t[1] * h]
                    }),
                    h = 150,
                    p = 480,
                    d = 250,
                    g = 0,
                    v = 0,
                    y = 0,
                    m = 0,
                    M = 0,
                    w = Uu,
                    b = x,
                    _ = null,
                    k = null;
                return n.stream = function(t) {
                        return l && (l.valid = !1), l = ce(w(a, f(b(t)))), l.valid = !0, l
                    }, n.clipAngle = function(t) {
                        return arguments.length ? (w = null == t ? (_ = t, Uu) : Hn((_ = +t) * Wa), i()) : _
                    }, n.clipExtent = function(t) {
                        return arguments.length ? (k = t, b = t ? Yn(t[0][0], t[0][1], t[1][0], t[1][1]) : x, i()) : k
                    }, n.scale = function(t) {
                        return arguments.length ? (h = +t, r()) : h
                    }, n.translate = function(t) {
                        return arguments.length ? (p = +t[0], d = +t[1], r()) : [p, d]
                    }, n.center = function(t) {
                        return arguments.length ? (g = t[0] % 360 * Wa, v = t[1] % 360 * Wa, r()) : [g * Ya, v * Ya]
                    }, n.rotate = function(t) {
                        return arguments.length ? (y = t[0] % 360 * Wa, m = t[1] % 360 * Wa, M = t.length > 2 ? t[2] % 360 * Wa : 0, r()) : [y * Ya, m * Ya, M * Ya]
                    }, ca.rebind(n, f, "precision"),
                    function() {
                        return o = t.apply(this, arguments), n.invert = o.invert && e, r()
                    }
            }

            function ce(t) {
                return ae(t, function(n, e) {
                    t.point(n * Wa, e * Wa)
                })
            }

            function le(t, n) {
                return [t, n]
            }

            function fe(t, n) {
                return [t > Ua ? t - $a : t < -Ua ? t + $a : t, n]
            }

            function he(t, n, e) {
                return t ? n || e ? An(de(t), ge(n, e)) : de(t) : n || e ? ge(n, e) : fe
            }

            function pe(t) {
                return function(n, e) {
                    return n += t, [n > Ua ? n - $a : n < -Ua ? n + $a : n, e]
                }
            }

            function de(t) {
                var n = pe(t);
                return n.invert = pe(-t), n
            }

            function ge(t, n) {
                function e(t, n) {
                    var e = Math.cos(n),
                        u = Math.cos(t) * e,
                        s = Math.sin(t) * e,
                        c = Math.sin(n),
                        l = c * r + u * i;
                    return [Math.atan2(s * o - l * a, u * r - c * i), et(l * o + s * a)]
                }
                var r = Math.cos(t),
                    i = Math.sin(t),
                    o = Math.cos(n),
                    a = Math.sin(n);
                return e.invert = function(t, n) {
                    var e = Math.cos(n),
                        u = Math.cos(t) * e,
                        s = Math.sin(t) * e,
                        c = Math.sin(n),
                        l = c * o - s * a;
                    return [Math.atan2(s * o + c * a, u * r + l * i), et(l * r - u * i)]
                }, e
            }

            function ve(t, n) {
                var e = Math.cos(t),
                    r = Math.sin(t);
                return function(i, o, a, u) {
                    var s = a * n;
                    null != i ? (i = ye(e, i), o = ye(e, o), (a > 0 ? i < o : i > o) && (i += a * $a)) : (i = t + a * $a, o = t - .5 * s);
                    for (var c, l = i; a > 0 ? l > o : l < o; l -= s) u.point((c = _n([e, -r * Math.cos(l), -r * Math.sin(l)]))[0], c[1])
                }
            }

            function ye(t, n) {
                var e = yn(n);
                e[0] -= t, bn(e);
                var r = nt(-e[1]);
                return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Oa) % (2 * Math.PI)
            }

            function me(t, n, e) {
                var r = ca.range(t, n - Oa, e).concat(n);
                return function(t) {
                    return r.map(function(n) {
                        return [t, n]
                    })
                }
            }

            function xe(t, n, e) {
                var r = ca.range(t, n - Oa, e).concat(n);
                return function(t) {
                    return r.map(function(n) {
                        return [n, t]
                    })
                }
            }

            function Me(t) {
                return t.source
            }

            function we(t) {
                return t.target
            }

            function be(t, n, e, r) {
                var i = Math.cos(n),
                    o = Math.sin(n),
                    a = Math.cos(r),
                    u = Math.sin(r),
                    s = i * Math.cos(t),
                    c = i * Math.sin(t),
                    l = a * Math.cos(e),
                    f = a * Math.sin(e),
                    h = 2 * Math.asin(Math.sqrt(at(r - n) + i * a * at(e - t))),
                    p = 1 / Math.sin(h),
                    d = h ? function(t) {
                        var n = Math.sin(t *= h) * p,
                            e = Math.sin(h - t) * p,
                            r = e * s + n * l,
                            i = e * c + n * f,
                            a = e * o + n * u;
                        return [Math.atan2(i, r) * Ya, Math.atan2(a, Math.sqrt(r * r + i * i)) * Ya]
                    } : function() {
                        return [t * Ya, n * Ya]
                    };
                return d.distance = h, d
            }

            function _e() {
                function t(t, i) {
                    var o = Math.sin(i *= Wa),
                        a = Math.cos(i),
                        u = wa((t *= Wa) - n),
                        s = Math.cos(u);
                    Qu += Math.atan2(Math.sqrt((u = a * Math.sin(u)) * u + (u = r * o - e * a * s) * u), e * o + r * a * s), n = t, e = o, r = a
                }
                var n, e, r;
                Ju.point = function(i, o) {
                    n = i * Wa, e = Math.sin(o *= Wa), r = Math.cos(o), Ju.point = t
                }, Ju.lineEnd = function() {
                    Ju.point = Ju.lineEnd = b
                }
            }

            function ke(t, n) {
                function e(n, e) {
                    var r = Math.cos(n),
                        i = Math.cos(e),
                        o = t(r * i);
                    return [o * i * Math.sin(n), o * Math.sin(e)]
                }
                return e.invert = function(t, e) {
                    var r = Math.sqrt(t * t + e * e),
                        i = n(r),
                        o = Math.sin(i),
                        a = Math.cos(i);
                    return [Math.atan2(t * o, r * a), Math.asin(r && e * o / r)]
                }, e
            }

            function Ee(t, n) {
                function e(t, n) {
                    a > 0 ? n < -Ha + Oa && (n = -Ha + Oa) : n > Ha - Oa && (n = Ha - Oa);
                    var e = a / Math.pow(i(n), o);
                    return [e * Math.sin(o * t), a - e * Math.cos(o * t)]
                }
                var r = Math.cos(t),
                    i = function(t) {
                        return Math.tan(Ua / 4 + t / 2)
                    },
                    o = t === n ? Math.sin(t) : Math.log(r / Math.cos(n)) / Math.log(i(n) / i(t)),
                    a = r * Math.pow(i(t), o) / o;
                return o ? (e.invert = function(t, n) {
                    var e = a - n,
                        r = K(o) * Math.sqrt(t * t + e * e);
                    return [Math.atan2(t, e) / o, 2 * Math.atan(Math.pow(a / r, 1 / o)) - Ha]
                }, e) : Ce
            }

            function Te(t, n) {
                function e(t, n) {
                    var e = o - n;
                    return [e * Math.sin(i * t), o - e * Math.cos(i * t)]
                }
                var r = Math.cos(t),
                    i = t === n ? Math.sin(t) : (r - Math.cos(n)) / (n - t),
                    o = r / i + t;
                return wa(i) < Oa ? le : (e.invert = function(t, n) {
                    var e = o - n;
                    return [Math.atan2(t, e) / i, o - K(i) * Math.sqrt(t * t + e * e)]
                }, e)
            }

            function Ce(t, n) {
                return [t, Math.log(Math.tan(Ua / 4 + n / 2))]
            }

            function Se(t) {
                var n, e = ue(t),
                    r = e.scale,
                    i = e.translate,
                    o = e.clipExtent;
                return e.scale = function() {
                    var t = r.apply(e, arguments);
                    return t === e ? n ? e.clipExtent(null) : e : t
                }, e.translate = function() {
                    var t = i.apply(e, arguments);
                    return t === e ? n ? e.clipExtent(null) : e : t
                }, e.clipExtent = function(t) {
                    var a = o.apply(e, arguments);
                    if (a === e) {
                        if (n = null == t) {
                            var u = Ua * r(),
                                s = i();
                            o([[s[0] - u, s[1] - u], [s[0] + u, s[1] + u]])
                        }
                    } else n && (a = null);
                    return a
                }, e.clipExtent(null)
            }

            function Ne(t, n) {
                return [Math.log(Math.tan(Ua / 4 + n / 2)), -t]
            }

            function Ae(t) {
                return t[0]
            }

            function Ie(t) {
                return t[1]
            }

            function ze(t) {
                for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; i++) {
                    for (; r > 1 && tt(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;) --r;
                    e[r++] = i
                }
                return e.slice(0, r)
            }

            function Pe(t, n) {
                return t[0] - n[0] || t[1] - n[1]
            }

            function Le(t, n, e) {
                return (e[0] - n[0]) * (t[1] - n[1]) < (e[1] - n[1]) * (t[0] - n[0])
            }

            function De(t, n, e, r) {
                var i = t[0],
                    o = e[0],
                    a = n[0] - i,
                    u = r[0] - o,
                    s = t[1],
                    c = e[1],
                    l = n[1] - s,
                    f = r[1] - c,
                    h = (u * (s - c) - f * (i - o)) / (f * a - u * l);
                return [i + h * a, s + h * l]
            }

            function Re(t) {
                var n = t[0],
                    e = t[t.length - 1];
                return !(n[0] - e[0] || n[1] - e[1])
            }

            function qe() {
                ir(this), this.edge = this.site = this.circle = null
            }

            function Oe(t) {
                var n = ls.pop() || new qe;
                return n.site = t, n
            }

            function je(t) {
                Ze(t), us.remove(t), ls.push(t), ir(t)
            }

            function Ue(t) {
                var n = t.circle,
                    e = n.x,
                    r = n.cy,
                    i = {
                        x: e,
                        y: r
                    },
                    o = t.P,
                    a = t.N,
                    u = [t];
                je(t);
                for (var s = o; s.circle && wa(e - s.circle.x) < Oa && wa(r - s.circle.cy) < Oa;) o = s.P, u.unshift(s), je(s), s = o;
                u.unshift(s), Ze(s);
                for (var c = a; c.circle && wa(e - c.circle.x) < Oa && wa(r - c.circle.cy) < Oa;) a = c.N, u.push(c), je(c), c = a;
                u.push(c), Ze(c);
                var l, f = u.length;
                for (l = 1; l < f; ++l) c = u[l], s = u[l - 1], nr(c.edge, s.site, c.site, i);
                s = u[0], c = u[f - 1], c.edge = Ke(s.site, c.site, null, i), Xe(s), Xe(c)
            }

            function $e(t) {
                for (var n, e, r, i, o = t.x, a = t.y, u = us._; u;)
                    if (r = Fe(u, a) - o, r > Oa) u = u.L;
                    else {
                        if (i = o - He(u, a), !(i > Oa)) {
                            r > -Oa ? (n = u.P, e = u) : i > -Oa ? (n = u, e = u.N) : n = e = u;
                            break
                        }
                        if (!u.R) {
                            n = u;
                            break
                        }
                        u = u.R
                    } var s = Oe(t);
                if (us.insert(n, s), n || e) {
                    if (n === e) return Ze(n), e = Oe(n.site), us.insert(s, e), s.edge = e.edge = Ke(n.site, s.site), Xe(n), void Xe(e);
                    if (!e) return void(s.edge = Ke(n.site, s.site));
                    Ze(n), Ze(e);
                    var c = n.site,
                        l = c.x,
                        f = c.y,
                        h = t.x - l,
                        p = t.y - f,
                        d = e.site,
                        g = d.x - l,
                        v = d.y - f,
                        y = 2 * (h * v - p * g),
                        m = h * h + p * p,
                        x = g * g + v * v,
                        M = {
                            x: (v * m - p * x) / y + l,
                            y: (h * x - g * m) / y + f
                        };
                    nr(e.edge, c, d, M), s.edge = Ke(c, t, null, M), e.edge = Ke(t, d, null, M), Xe(n), Xe(e)
                }
            }

            function Fe(t, n) {
                var e = t.site,
                    r = e.x,
                    i = e.y,
                    o = i - n;
                if (!o) return r;
                var a = t.P;
                if (!a) return -(1 / 0);
                e = a.site;
                var u = e.x,
                    s = e.y,
                    c = s - n;
                if (!c) return u;
                var l = u - r,
                    f = 1 / o - 1 / c,
                    h = l / c;
                return f ? (-h + Math.sqrt(h * h - 2 * f * (l * l / (-2 * c) - s + c / 2 + i - o / 2))) / f + r : (r + u) / 2
            }

            function He(t, n) {
                var e = t.N;
                if (e) return Fe(e, n);
                var r = t.site;
                return r.y === n ? r.x : 1 / 0
            }

            function We(t) {
                this.site = t, this.edges = []
            }

            function Ye(t) {
                for (var n, e, r, i, o, a, u, s, c, l, f = t[0][0], h = t[1][0], p = t[0][1], d = t[1][1], g = as, v = g.length; v--;)
                    if (o = g[v], o && o.prepare())
                        for (u = o.edges, s = u.length, a = 0; a < s;) l = u[a].end(), r = l.x, i = l.y, c = u[++a % s].start(), n = c.x, e = c.y, (wa(r - n) > Oa || wa(i - e) > Oa) && (u.splice(a, 0, new er(tr(o.site, l, wa(r - f) < Oa && d - i > Oa ? {
                            x: f,
                            y: wa(n - f) < Oa ? e : d
                        } : wa(i - d) < Oa && h - r > Oa ? {
                            x: wa(e - d) < Oa ? n : h,
                            y: d
                        } : wa(r - h) < Oa && i - p > Oa ? {
                            x: h,
                            y: wa(n - h) < Oa ? e : p
                        } : wa(i - p) < Oa && r - f > Oa ? {
                            x: wa(e - p) < Oa ? n : f,
                            y: p
                        } : null), o.site, null)), ++s)
            }

            function Ve(t, n) {
                return n.angle - t.angle
            }

            function Be() {
                ir(this), this.x = this.y = this.arc = this.site = this.cy = null
            }

            function Xe(t) {
                var n = t.P,
                    e = t.N;
                if (n && e) {
                    var r = n.site,
                        i = t.site,
                        o = e.site;
                    if (r !== o) {
                        var a = i.x,
                            u = i.y,
                            s = r.x - a,
                            c = r.y - u,
                            l = o.x - a,
                            f = o.y - u,
                            h = 2 * (s * f - c * l);
                        if (!(h >= -ja)) {
                            var p = s * s + c * c,
                                d = l * l + f * f,
                                g = (f * p - c * d) / h,
                                v = (s * d - l * p) / h,
                                f = v + u,
                                y = fs.pop() || new Be;
                            y.arc = t, y.site = i, y.x = g + a, y.y = f + Math.sqrt(g * g + v * v), y.cy = f, t.circle = y;
                            for (var m = null, x = cs._; x;)
                                if (y.y < x.y || y.y === x.y && y.x <= x.x) {
                                    if (!x.L) {
                                        m = x.P;
                                        break
                                    }
                                    x = x.L
                                } else {
                                    if (!x.R) {
                                        m = x;
                                        break
                                    }
                                    x = x.R
                                } cs.insert(m, y), m || (ss = y)
                        }
                    }
                }
            }

            function Ze(t) {
                var n = t.circle;
                n && (n.P || (ss = n.N), cs.remove(n), fs.push(n), ir(n), t.circle = null)
            }

            function Ge(t) {
                for (var n, e = os, r = Wn(t[0][0], t[0][1], t[1][0], t[1][1]), i = e.length; i--;) n = e[i], (!Qe(n, t) || !r(n) || wa(n.a.x - n.b.x) < Oa && wa(n.a.y - n.b.y) < Oa) && (n.a = n.b = null, e.splice(i, 1))
            }

            function Qe(t, n) {
                var e = t.b;
                if (e) return !0;
                var r, i, o = t.a,
                    a = n[0][0],
                    u = n[1][0],
                    s = n[0][1],
                    c = n[1][1],
                    l = t.l,
                    f = t.r,
                    h = l.x,
                    p = l.y,
                    d = f.x,
                    g = f.y,
                    v = (h + d) / 2,
                    y = (p + g) / 2;
                if (g === p) {
                    if (v < a || v >= u) return;
                    if (h > d) {
                        if (o) {
                            if (o.y >= c) return
                        } else o = {
                            x: v,
                            y: s
                        };
                        e = {
                            x: v,
                            y: c
                        }
                    } else {
                        if (o) {
                            if (o.y < s) return
                        } else o = {
                            x: v,
                            y: c
                        };
                        e = {
                            x: v,
                            y: s
                        }
                    }
                } else if (r = (h - d) / (g - p), i = y - r * v, r < -1 || r > 1)
                    if (h > d) {
                        if (o) {
                            if (o.y >= c) return
                        } else o = {
                            x: (s - i) / r,
                            y: s
                        };
                        e = {
                            x: (c - i) / r,
                            y: c
                        }
                    } else {
                        if (o) {
                            if (o.y < s) return
                        } else o = {
                            x: (c - i) / r,
                            y: c
                        };
                        e = {
                            x: (s - i) / r,
                            y: s
                        }
                    }
                else if (p < g) {
                    if (o) {
                        if (o.x >= u) return
                    } else o = {
                        x: a,
                        y: r * a + i
                    };
                    e = {
                        x: u,
                        y: r * u + i
                    }
                } else {
                    if (o) {
                        if (o.x < a) return
                    } else o = {
                        x: u,
                        y: r * u + i
                    };
                    e = {
                        x: a,
                        y: r * a + i
                    }
                }
                return t.a = o, t.b = e, !0
            }

            function Je(t, n) {
                this.l = t, this.r = n, this.a = this.b = null
            }

            function Ke(t, n, e, r) {
                var i = new Je(t, n);
                return os.push(i), e && nr(i, t, n, e), r && nr(i, n, t, r), as[t.i].edges.push(new er(i, t, n)), as[n.i].edges.push(new er(i, n, t)), i
            }

            function tr(t, n, e) {
                var r = new Je(t, null);
                return r.a = n, r.b = e, os.push(r), r
            }

            function nr(t, n, e, r) {
                t.a || t.b ? t.l === e ? t.b = r : t.a = r : (t.a = r, t.l = n, t.r = e)
            }

            function er(t, n, e) {
                var r = t.a,
                    i = t.b;
                this.edge = t, this.site = n, this.angle = e ? Math.atan2(e.y - n.y, e.x - n.x) : t.l === n ? Math.atan2(i.x - r.x, r.y - i.y) : Math.atan2(r.x - i.x, i.y - r.y)
            }

            function rr() {
                this._ = null
            }

            function ir(t) {
                t.U = t.C = t.L = t.R = t.P = t.N = null
            }

            function or(t, n) {
                var e = n,
                    r = n.R,
                    i = e.U;
                i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
            }

            function ar(t, n) {
                var e = n,
                    r = n.L,
                    i = e.U;
                i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
            }

            function ur(t) {
                for (; t.L;) t = t.L;
                return t
            }

            function sr(t, n) {
                var e, r, i, o = t.sort(cr).pop();
                for (os = [], as = new Array(t.length), us = new rr, cs = new rr;;)
                    if (i = ss, o && (!i || o.y < i.y || o.y === i.y && o.x < i.x)) o.x === e && o.y === r || (as[o.i] = new We(o), $e(o), e = o.x, r = o.y), o = t.pop();
                    else {
                        if (!i) break;
                        Ue(i.arc)
                    } n && (Ge(n), Ye(n));
                var a = {
                    cells: as,
                    edges: os
                };
                return us = cs = os = as = null, a
            }

            function cr(t, n) {
                return n.y - t.y || n.x - t.x
            }

            function lr(t, n, e) {
                return (t.x - e.x) * (n.y - t.y) - (t.x - n.x) * (e.y - t.y)
            }

            function fr(t) {
                return t.x
            }

            function hr(t) {
                return t.y
            }

            function pr() {
                return {
                    leaf: !0,
                    nodes: [],
                    point: null,
                    x: null,
                    y: null
                }
            }

            function dr(t, n, e, r, i, o) {
                if (!t(n, e, r, i, o)) {
                    var a = .5 * (e + i),
                        u = .5 * (r + o),
                        s = n.nodes;
                    s[0] && dr(t, s[0], e, r, a, u), s[1] && dr(t, s[1], a, r, i, u), s[2] && dr(t, s[2], e, u, a, o), s[3] && dr(t, s[3], a, u, i, o)
                }
            }

            function gr(t, n, e, r, i, o, a) {
                var u, s = 1 / 0;
                return function c(t, l, f, h, p) {
                    if (!(l > o || f > a || h < r || p < i)) {
                        if (d = t.point) {
                            var d, g = n - t.x,
                                v = e - t.y,
                                y = g * g + v * v;
                            if (y < s) {
                                var m = Math.sqrt(s = y);
                                r = n - m, i = e - m, o = n + m, a = e + m, u = d
                            }
                        }
                        for (var x = t.nodes, M = .5 * (l + h), w = .5 * (f + p), b = n >= M, _ = e >= w, k = _ << 1 | b, E = k + 4; k < E; ++k)
                            if (t = x[3 & k]) switch (3 & k) {
                                case 0:
                                    c(t, l, f, M, w);
                                    break;
                                case 1:
                                    c(t, M, f, h, w);
                                    break;
                                case 2:
                                    c(t, l, w, M, p);
                                    break;
                                case 3:
                                    c(t, M, w, h, p)
                            }
                    }
                }(t, r, i, o, a), u
            }

            function vr(t, n) {
                t = ca.rgb(t), n = ca.rgb(n);
                var e = t.r,
                    r = t.g,
                    i = t.b,
                    o = n.r - e,
                    a = n.g - r,
                    u = n.b - i;
                return function(t) {
                    return "#" + wt(Math.round(e + o * t)) + wt(Math.round(r + a * t)) + wt(Math.round(i + u * t))
                }
            }

            function yr(t, n) {
                var e, r = {},
                    i = {};
                for (e in t) e in n ? r[e] = Mr(t[e], n[e]) : i[e] = t[e];
                for (e in n) e in t || (i[e] = n[e]);
                return function(t) {
                    for (e in r) i[e] = r[e](t);
                    return i
                }
            }

            function mr(t, n) {
                return t = +t, n = +n,
                    function(e) {
                        return t * (1 - e) + n * e
                    }
            }

            function xr(t, n) {
                var e, r, i, o = ps.lastIndex = ds.lastIndex = 0,
                    a = -1,
                    u = [],
                    s = [];
                for (t += "", n += "";
                    (e = ps.exec(t)) && (r = ds.exec(n));)(i = r.index) > o && (i = n.slice(o, i), u[a] ? u[a] += i : u[++a] = i), (e = e[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null, s.push({
                    i: a,
                    x: mr(e, r)
                })), o = ds.lastIndex;
                return o < n.length && (i = n.slice(o), u[a] ? u[a] += i : u[++a] = i), u.length < 2 ? s[0] ? (n = s[0].x, function(t) {
                    return n(t) + ""
                }) : function() {
                    return n
                } : (n = s.length, function(t) {
                    for (var e, r = 0; r < n; ++r) u[(e = s[r]).i] = e.x(t);
                    return u.join("")
                })
            }

            function Mr(t, n) {
                for (var e, r = ca.interpolators.length; --r >= 0 && !(e = ca.interpolators[r](t, n)););
                return e
            }

            function wr(t, n) {
                var e, r = [],
                    i = [],
                    o = t.length,
                    a = n.length,
                    u = Math.min(t.length, n.length);
                for (e = 0; e < u; ++e) r.push(Mr(t[e], n[e]));
                for (; e < o; ++e) i[e] = t[e];
                for (; e < a; ++e) i[e] = n[e];
                return function(t) {
                    for (e = 0; e < u; ++e) i[e] = r[e](t);
                    return i
                }
            }

            function br(t) {
                return function(n) {
                    return n <= 0 ? 0 : n >= 1 ? 1 : t(n)
                }
            }

            function _r(t) {
                return function(n) {
                    return 1 - t(1 - n)
                }
            }

            function kr(t) {
                return function(n) {
                    return .5 * (n < .5 ? t(2 * n) : 2 - t(2 - 2 * n))
                }
            }

            function Er(t) {
                return t * t
            }

            function Tr(t) {
                return t * t * t
            }

            function Cr(t) {
                if (t <= 0) return 0;
                if (t >= 1) return 1;
                var n = t * t,
                    e = n * t;
                return 4 * (t < .5 ? e : 3 * (t - n) + e - .75)
            }

            function Sr(t) {
                return function(n) {
                    return Math.pow(n, t)
                }
            }

            function Nr(t) {
                return 1 - Math.cos(t * Ha)
            }

            function Ar(t) {
                return Math.pow(2, 10 * (t - 1))
            }

            function Ir(t) {
                return 1 - Math.sqrt(1 - t * t)
            }

            function zr(t, n) {
                var e;
                return arguments.length < 2 && (n = .45), arguments.length ? e = n / $a * Math.asin(1 / t) : (t = 1, e = n / 4),
                    function(r) {
                        return 1 + t * Math.pow(2, -10 * r) * Math.sin((r - e) * $a / n)
                    }
            }

            function Pr(t) {
                return t || (t = 1.70158),
                    function(n) {
                        return n * n * ((t + 1) * n - t)
                    }
            }

            function Lr(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }

            function Dr(t, n) {
                t = ca.hcl(t), n = ca.hcl(n);
                var e = t.h,
                    r = t.c,
                    i = t.l,
                    o = n.h - e,
                    a = n.c - r,
                    u = n.l - i;
                return isNaN(a) && (a = 0, r = isNaN(r) ? n.c : r), isNaN(o) ? (o = 0, e = isNaN(e) ? n.h : e) : o > 180 ? o -= 360 : o < -180 && (o += 360),
                    function(t) {
                        return ft(e + o * t, r + a * t, i + u * t) + ""
                    }
            }

            function Rr(t, n) {
                t = ca.hsl(t), n = ca.hsl(n);
                var e = t.h,
                    r = t.s,
                    i = t.l,
                    o = n.h - e,
                    a = n.s - r,
                    u = n.l - i;
                return isNaN(a) && (a = 0, r = isNaN(r) ? n.s : r), isNaN(o) ? (o = 0, e = isNaN(e) ? n.h : e) : o > 180 ? o -= 360 : o < -180 && (o += 360),
                    function(t) {
                        return ct(e + o * t, r + a * t, i + u * t) + ""
                    }
            }

            function qr(t, n) {
                t = ca.lab(t), n = ca.lab(n);
                var e = t.l,
                    r = t.a,
                    i = t.b,
                    o = n.l - e,
                    a = n.a - r,
                    u = n.b - i;
                return function(t) {
                    return pt(e + o * t, r + a * t, i + u * t) + ""
                }
            }

            function Or(t, n) {
                return n -= t,
                    function(e) {
                        return Math.round(t + n * e)
                    }
            }

            function jr(t) {
                var n = [t.a, t.b],
                    e = [t.c, t.d],
                    r = $r(n),
                    i = Ur(n, e),
                    o = $r(Fr(e, n, -i)) || 0;
                n[0] * e[1] < e[0] * n[1] && (n[0] *= -1, n[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(n[1], n[0]) : Math.atan2(-e[0], e[1])) * Ya, this.translate = [t.e, t.f], this.scale = [r, o], this.skew = o ? Math.atan2(i, o) * Ya : 0
            }

            function Ur(t, n) {
                return t[0] * n[0] + t[1] * n[1]
            }

            function $r(t) {
                var n = Math.sqrt(Ur(t, t));
                return n && (t[0] /= n, t[1] /= n), n
            }

            function Fr(t, n, e) {
                return t[0] += e * n[0], t[1] += e * n[1], t
            }

            function Hr(t) {
                return t.length ? t.pop() + "," : ""
            }

            function Wr(t, n, e, r) {
                if (t[0] !== n[0] || t[1] !== n[1]) {
                    var i = e.push("translate(", null, ",", null, ")");
                    r.push({
                        i: i - 4,
                        x: mr(t[0], n[0])
                    }, {
                        i: i - 2,
                        x: mr(t[1], n[1])
                    })
                } else(n[0] || n[1]) && e.push("translate(" + n + ")")
            }

            function Yr(t, n, e, r) {
                t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), r.push({
                    i: e.push(Hr(e) + "rotate(", null, ")") - 2,
                    x: mr(t, n)
                })) : n && e.push(Hr(e) + "rotate(" + n + ")")
            }

            function Vr(t, n, e, r) {
                t !== n ? r.push({
                    i: e.push(Hr(e) + "skewX(", null, ")") - 2,
                    x: mr(t, n)
                }) : n && e.push(Hr(e) + "skewX(" + n + ")")
            }

            function Br(t, n, e, r) {
                if (t[0] !== n[0] || t[1] !== n[1]) {
                    var i = e.push(Hr(e) + "scale(", null, ",", null, ")");
                    r.push({
                        i: i - 4,
                        x: mr(t[0], n[0])
                    }, {
                        i: i - 2,
                        x: mr(t[1], n[1])
                    })
                } else 1 === n[0] && 1 === n[1] || e.push(Hr(e) + "scale(" + n + ")")
            }

            function Xr(t, n) {
                var e = [],
                    r = [];
                return t = ca.transform(t), n = ca.transform(n), Wr(t.translate, n.translate, e, r), Yr(t.rotate, n.rotate, e, r), Vr(t.skew, n.skew, e, r), Br(t.scale, n.scale, e, r), t = n = null,
                    function(t) {
                        for (var n, i = -1, o = r.length; ++i < o;) e[(n = r[i]).i] = n.x(t);
                        return e.join("")
                    }
            }

            function Zr(t, n) {
                return n = (n -= t = +t) || 1 / n,
                    function(e) {
                        return (e - t) / n
                    }
            }

            function Gr(t, n) {
                return n = (n -= t = +t) || 1 / n,
                    function(e) {
                        return Math.max(0, Math.min(1, (e - t) / n))
                    }
            }

            function Qr(t) {
                for (var n = t.source, e = t.target, r = Kr(n, e), i = [n]; n !== r;) n = n.parent, i.push(n);
                for (var o = i.length; e !== r;) i.splice(o, 0, e), e = e.parent;
                return i
            }

            function Jr(t) {
                for (var n = [], e = t.parent; null != e;) n.push(t), t = e, e = e.parent;
                return n.push(t), n
            }

            function Kr(t, n) {
                if (t === n) return t;
                for (var e = Jr(t), r = Jr(n), i = e.pop(), o = r.pop(), a = null; i === o;) a = i, i = e.pop(), o = r.pop();
                return a
            }

            function ti(t) {
                t.fixed |= 2
            }

            function ni(t) {
                t.fixed &= -7
            }

            function ei(t) {
                t.fixed |= 4, t.px = t.x, t.py = t.y
            }

            function ri(t) {
                t.fixed &= -5
            }

            function ii(t, n, e) {
                var r = 0,
                    i = 0;
                if (t.charge = 0, !t.leaf)
                    for (var o, a = t.nodes, u = a.length, s = -1; ++s < u;) o = a[s], null != o && (ii(o, n, e), t.charge += o.charge, r += o.charge * o.cx, i += o.charge * o.cy);
                if (t.point) {
                    t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
                    var c = n * e[t.point.index];
                    t.charge += t.pointCharge = c, r += c * t.point.x, i += c * t.point.y
                }
                t.cx = r / t.charge, t.cy = i / t.charge
            }

            function oi(t, n) {
                return ca.rebind(t, n, "sort", "children", "value"), t.nodes = t, t.links = fi, t
            }

            function ai(t, n) {
                for (var e = [t]; null != (t = e.pop());)
                    if (n(t), (i = t.children) && (r = i.length))
                        for (var r, i; --r >= 0;) e.push(i[r])
            }

            function ui(t, n) {
                for (var e = [t], r = []; null != (t = e.pop());)
                    if (r.push(t), (o = t.children) && (i = o.length))
                        for (var i, o, a = -1; ++a < i;) e.push(o[a]);
                for (; null != (t = r.pop());) n(t)
            }

            function si(t) {
                return t.children
            }

            function ci(t) {
                return t.value
            }

            function li(t, n) {
                return n.value - t.value
            }

            function fi(t) {
                return ca.merge(t.map(function(t) {
                    return (t.children || []).map(function(n) {
                        return {
                            source: t,
                            target: n
                        }
                    })
                }))
            }

            function hi(t) {
                return t.x
            }

            function pi(t) {
                return t.y
            }

            function di(t, n, e) {
                t.y0 = n, t.y = e
            }

            function gi(t) {
                return ca.range(t.length)
            }

            function vi(t) {
                for (var n = -1, e = t[0].length, r = []; ++n < e;) r[n] = 0;
                return r
            }

            function yi(t) {
                for (var n, e = 1, r = 0, i = t[0][1], o = t.length; e < o; ++e)(n = t[e][1]) > i && (r = e, i = n);
                return r
            }

            function mi(t) {
                return t.reduce(xi, 0)
            }

            function xi(t, n) {
                return t + n[1]
            }

            function Mi(t, n) {
                return wi(t, Math.ceil(Math.log(n.length) / Math.LN2 + 1))
            }

            function wi(t, n) {
                for (var e = -1, r = +t[0], i = (t[1] - r) / n, o = []; ++e <= n;) o[e] = i * e + r;
                return o
            }

            function bi(t) {
                return [ca.min(t), ca.max(t)]
            }

            function _i(t, n) {
                return t.value - n.value
            }

            function ki(t, n) {
                var e = t._pack_next;
                t._pack_next = n, n._pack_prev = t, n._pack_next = e, e._pack_prev = n
            }

            function Ei(t, n) {
                t._pack_next = n, n._pack_prev = t
            }

            function Ti(t, n) {
                var e = n.x - t.x,
                    r = n.y - t.y,
                    i = t.r + n.r;
                return .999 * i * i > e * e + r * r
            }

            function Ci(t) {
                function n(t) {
                    l = Math.min(t.x - t.r, l), f = Math.max(t.x + t.r, f), h = Math.min(t.y - t.r, h), p = Math.max(t.y + t.r, p)
                }
                if ((e = t.children) && (c = e.length)) {
                    var e, r, i, o, a, u, s, c, l = 1 / 0,
                        f = -(1 / 0),
                        h = 1 / 0,
                        p = -(1 / 0);
                    if (e.forEach(Si), r = e[0], r.x = -r.r, r.y = 0, n(r), c > 1 && (i = e[1], i.x = i.r, i.y = 0, n(i), c > 2))
                        for (o = e[2], Ii(r, i, o), n(o), ki(r, o), r._pack_prev = o, ki(o, i), i = r._pack_next, a = 3; a < c; a++) {
                            Ii(r, i, o = e[a]);
                            var d = 0,
                                g = 1,
                                v = 1;
                            for (u = i._pack_next; u !== i; u = u._pack_next, g++)
                                if (Ti(u, o)) {
                                    d = 1;
                                    break
                                } if (1 == d)
                                for (s = r._pack_prev; s !== u._pack_prev && !Ti(s, o); s = s._pack_prev, v++);
                            d ? (g < v || g == v && i.r < r.r ? Ei(r, i = u) : Ei(r = s, i), a--) : (ki(r, o), i = o, n(o))
                        }
                    var y = (l + f) / 2,
                        m = (h + p) / 2,
                        x = 0;
                    for (a = 0; a < c; a++) o = e[a], o.x -= y, o.y -= m, x = Math.max(x, o.r + Math.sqrt(o.x * o.x + o.y * o.y));
                    t.r = x, e.forEach(Ni)
                }
            }

            function Si(t) {
                t._pack_next = t._pack_prev = t
            }

            function Ni(t) {
                delete t._pack_next, delete t._pack_prev
            }

            function Ai(t, n, e, r) {
                var i = t.children;
                if (t.x = n += r * t.x, t.y = e += r * t.y, t.r *= r, i)
                    for (var o = -1, a = i.length; ++o < a;) Ai(i[o], n, e, r)
            }

            function Ii(t, n, e) {
                var r = t.r + e.r,
                    i = n.x - t.x,
                    o = n.y - t.y;
                if (r && (i || o)) {
                    var a = n.r + e.r,
                        u = i * i + o * o;
                    a *= a, r *= r;
                    var s = .5 + (r - a) / (2 * u),
                        c = Math.sqrt(Math.max(0, 2 * a * (r + u) - (r -= u) * r - a * a)) / (2 * u);
                    e.x = t.x + s * i + c * o, e.y = t.y + s * o - c * i
                } else e.x = t.x + r, e.y = t.y
            }

            function zi(t, n) {
                return t.parent == n.parent ? 1 : 2
            }

            function Pi(t) {
                var n = t.children;
                return n.length ? n[0] : t.t
            }

            function Li(t) {
                var n, e = t.children;
                return (n = e.length) ? e[n - 1] : t.t
            }

            function Di(t, n, e) {
                var r = e / (n.i - t.i);
                n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e
            }

            function Ri(t) {
                for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;) n = i[o], n.z += e, n.m += e, e += n.s + (r += n.c)
            }

            function qi(t, n, e) {
                return t.a.parent === n.parent ? t.a : e
            }

            function Oi(t) {
                return 1 + ca.max(t, function(t) {
                    return t.y
                })
            }

            function ji(t) {
                return t.reduce(function(t, n) {
                    return t + n.x
                }, 0) / t.length
            }

            function Ui(t) {
                var n = t.children;
                return n && n.length ? Ui(n[0]) : t
            }

            function $i(t) {
                var n, e = t.children;
                return e && (n = e.length) ? $i(e[n - 1]) : t
            }

            function Fi(t) {
                return {
                    x: t.x,
                    y: t.y,
                    dx: t.dx,
                    dy: t.dy
                }
            }

            function Hi(t, n) {
                var e = t.x + n[3],
                    r = t.y + n[0],
                    i = t.dx - n[1] - n[3],
                    o = t.dy - n[0] - n[2];
                return i < 0 && (e += i / 2, i = 0), o < 0 && (r += o / 2, o = 0), {
                    x: e,
                    y: r,
                    dx: i,
                    dy: o
                }
            }

            function Wi(t) {
                var n = t[0],
                    e = t[t.length - 1];
                return n < e ? [n, e] : [e, n]
            }

            function Yi(t) {
                return t.rangeExtent ? t.rangeExtent() : Wi(t.range())
            }

            function Vi(t, n, e, r) {
                var i = e(t[0], t[1]),
                    o = r(n[0], n[1]);
                return function(t) {
                    return o(i(t))
                }
            }

            function Bi(t, n) {
                var e, r = 0,
                    i = t.length - 1,
                    o = t[r],
                    a = t[i];
                return a < o && (e = r, r = i, i = e, e = o, o = a, a = e), t[r] = n.floor(o), t[i] = n.ceil(a), t
            }

            function Xi(t) {
                return t ? {
                    floor: function(n) {
                        return Math.floor(n / t) * t
                    },
                    ceil: function(n) {
                        return Math.ceil(n / t) * t
                    }
                } : Es
            }

            function Zi(t, n, e, r) {
                var i = [],
                    o = [],
                    a = 0,
                    u = Math.min(t.length, n.length) - 1;
                for (t[u] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a <= u;) i.push(e(t[a - 1], t[a])), o.push(r(n[a - 1], n[a]));
                return function(n) {
                    var e = ca.bisect(t, n, 1, u) - 1;
                    return o[e](i[e](n))
                }
            }

            function Gi(t, n, e, r) {
                function i() {
                    var i = Math.min(t.length, n.length) > 2 ? Zi : Vi,
                        s = r ? Gr : Zr;
                    return a = i(t, n, s, e), u = i(n, t, s, Mr), o
                }

                function o(t) {
                    return a(t)
                }
                var a, u;
                return o.invert = function(t) {
                    return u(t)
                }, o.domain = function(n) {
                    return arguments.length ? (t = n.map(Number), i()) : t
                }, o.range = function(t) {
                    return arguments.length ? (n = t, i()) : n
                }, o.rangeRound = function(t) {
                    return o.range(t).interpolate(Or)
                }, o.clamp = function(t) {
                    return arguments.length ? (r = t, i()) : r
                }, o.interpolate = function(t) {
                    return arguments.length ? (e = t, i()) : e
                }, o.ticks = function(n) {
                    return to(t, n)
                }, o.tickFormat = function(n, e) {
                    return no(t, n, e)
                }, o.nice = function(n) {
                    return Ji(t, n), i()
                }, o.copy = function() {
                    return Gi(t, n, e, r)
                }, i()
            }

            function Qi(t, n) {
                return ca.rebind(t, n, "range", "rangeRound", "interpolate", "clamp")
            }

            function Ji(t, n) {
                return Bi(t, Xi(Ki(t, n)[2])), Bi(t, Xi(Ki(t, n)[2])), t
            }

            function Ki(t, n) {
                null == n && (n = 10);
                var e = Wi(t),
                    r = e[1] - e[0],
                    i = Math.pow(10, Math.floor(Math.log(r / n) / Math.LN10)),
                    o = n / r * i;
                return o <= .15 ? i *= 10 : o <= .35 ? i *= 5 : o <= .75 && (i *= 2), e[0] = Math.ceil(e[0] / i) * i, e[1] = Math.floor(e[1] / i) * i + .5 * i, e[2] = i, e
            }

            function to(t, n) {
                return ca.range.apply(ca, Ki(t, n))
            }

            function no(t, n, e) {
                var r = Ki(t, n);
                if (e) {
                    var i = pu.exec(e);
                    if (i.shift(), "s" === i[8]) {
                        var o = ca.formatPrefix(Math.max(wa(r[0]), wa(r[1])));
                        return i[7] || (i[7] = "." + eo(o.scale(r[2]))), i[8] = "f", e = ca.format(i.join("")),
                            function(t) {
                                return e(o.scale(t)) + o.symbol
                            }
                    }
                    i[7] || (i[7] = "." + ro(i[8], r)), e = i.join("")
                } else e = ",." + eo(r[2]) + "f";
                return ca.format(e)
            }

            function eo(t) {
                return -Math.floor(Math.log(t) / Math.LN10 + .01)
            }

            function ro(t, n) {
                var e = eo(n[2]);
                return t in Ts ? Math.abs(e - eo(Math.max(wa(n[0]), wa(n[1])))) + +("e" !== t) : e - 2 * ("%" === t)
            }

            function io(t, n, e, r) {
                function i(t) {
                    return (e ? Math.log(t < 0 ? 0 : t) : -Math.log(t > 0 ? 0 : -t)) / Math.log(n)
                }

                function o(t) {
                    return e ? Math.pow(n, t) : -Math.pow(n, -t)
                }

                function a(n) {
                    return t(i(n))
                }
                return a.invert = function(n) {
                    return o(t.invert(n))
                }, a.domain = function(n) {
                    return arguments.length ? (e = n[0] >= 0, t.domain((r = n.map(Number)).map(i)), a) : r
                }, a.base = function(e) {
                    return arguments.length ? (n = +e, t.domain(r.map(i)), a) : n
                }, a.nice = function() {
                    var n = Bi(r.map(i), e ? Math : Ss);
                    return t.domain(n), r = n.map(o), a
                }, a.ticks = function() {
                    var t = Wi(r),
                        a = [],
                        u = t[0],
                        s = t[1],
                        c = Math.floor(i(u)),
                        l = Math.ceil(i(s)),
                        f = n % 1 ? 2 : n;
                    if (isFinite(l - c)) {
                        if (e) {
                            for (; c < l; c++)
                                for (var h = 1; h < f; h++) a.push(o(c) * h);
                            a.push(o(c))
                        } else
                            for (a.push(o(c)); c++ < l;)
                                for (var h = f - 1; h > 0; h--) a.push(o(c) * h);
                        for (c = 0; a[c] < u; c++);
                        for (l = a.length; a[l - 1] > s; l--);
                        a = a.slice(c, l)
                    }
                    return a
                }, a.tickFormat = function(t, e) {
                    if (!arguments.length) return Cs;
                    arguments.length < 2 ? e = Cs : "function" != typeof e && (e = ca.format(e));
                    var r = Math.max(1, n * t / a.ticks().length);
                    return function(t) {
                        var a = t / o(Math.round(i(t)));
                        return a * n < n - .5 && (a *= n), a <= r ? e(t) : ""
                    }
                }, a.copy = function() {
                    return io(t.copy(), n, e, r)
                }, Qi(a, t)
            }

            function oo(t, n, e) {
                function r(n) {
                    return t(i(n))
                }
                var i = ao(n),
                    o = ao(1 / n);
                return r.invert = function(n) {
                    return o(t.invert(n))
                }, r.domain = function(n) {
                    return arguments.length ? (t.domain((e = n.map(Number)).map(i)), r) : e
                }, r.ticks = function(t) {
                    return to(e, t)
                }, r.tickFormat = function(t, n) {
                    return no(e, t, n)
                }, r.nice = function(t) {
                    return r.domain(Ji(e, t))
                }, r.exponent = function(a) {
                    return arguments.length ? (i = ao(n = a), o = ao(1 / n), t.domain(e.map(i)), r) : n
                }, r.copy = function() {
                    return oo(t.copy(), n, e)
                }, Qi(r, t)
            }

            function ao(t) {
                return function(n) {
                    return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t)
                }
            }

            function uo(t, n) {
                function e(e) {
                    return o[((i.get(e) || ("range" === n.t ? i.set(e, t.push(e)) : NaN)) - 1) % o.length]
                }

                function r(n, e) {
                    return ca.range(t.length).map(function(t) {
                        return n + e * t
                    })
                }
                var i, o, a;
                return e.domain = function(r) {
                    if (!arguments.length) return t;
                    t = [], i = new l;
                    for (var o, a = -1, u = r.length; ++a < u;) i.has(o = r[a]) || i.set(o, t.push(o));
                    return e[n.t].apply(e, n.a)
                }, e.range = function(t) {
                    return arguments.length ? (o = t, a = 0, n = {
                        t: "range",
                        a: arguments
                    }, e) : o
                }, e.rangePoints = function(i, u) {
                    arguments.length < 2 && (u = 0);
                    var s = i[0],
                        c = i[1],
                        l = t.length < 2 ? (s = (s + c) / 2, 0) : (c - s) / (t.length - 1 + u);
                    return o = r(s + l * u / 2, l), a = 0, n = {
                        t: "rangePoints",
                        a: arguments
                    }, e
                }, e.rangeRoundPoints = function(i, u) {
                    arguments.length < 2 && (u = 0);
                    var s = i[0],
                        c = i[1],
                        l = t.length < 2 ? (s = c = Math.round((s + c) / 2), 0) : (c - s) / (t.length - 1 + u) | 0;
                    return o = r(s + Math.round(l * u / 2 + (c - s - (t.length - 1 + u) * l) / 2), l), a = 0, n = {
                        t: "rangeRoundPoints",
                        a: arguments
                    }, e
                }, e.rangeBands = function(i, u, s) {
                    arguments.length < 2 && (u = 0), arguments.length < 3 && (s = u);
                    var c = i[1] < i[0],
                        l = i[c - 0],
                        f = i[1 - c],
                        h = (f - l) / (t.length - u + 2 * s);
                    return o = r(l + h * s, h), c && o.reverse(), a = h * (1 - u), n = {
                        t: "rangeBands",
                        a: arguments
                    }, e
                }, e.rangeRoundBands = function(i, u, s) {
                    arguments.length < 2 && (u = 0), arguments.length < 3 && (s = u);
                    var c = i[1] < i[0],
                        l = i[c - 0],
                        f = i[1 - c],
                        h = Math.floor((f - l) / (t.length - u + 2 * s));
                    return o = r(l + Math.round((f - l - (t.length - u) * h) / 2), h), c && o.reverse(), a = Math.round(h * (1 - u)), n = {
                        t: "rangeRoundBands",
                        a: arguments
                    }, e
                }, e.rangeBand = function() {
                    return a
                }, e.rangeExtent = function() {
                    return Wi(n.a[0])
                }, e.copy = function() {
                    return uo(t, n)
                }, e.domain(t)
            }

            function so(t, n) {
                function e() {
                    var e = 0,
                        r = n.length;
                    for (u = []; ++e < r;) u[e - 1] = ca.quantile(t, e / r);
                    return a
                }

                function a(t) {
                    if (!isNaN(t = +t)) return n[ca.bisect(u, t)]
                }
                var u;
                return a.domain = function(n) {
                    return arguments.length ? (t = n.map(i).filter(o).sort(r), e()) : t
                }, a.range = function(t) {
                    return arguments.length ? (n = t, e()) : n
                }, a.quantiles = function() {
                    return u
                }, a.invertExtent = function(e) {
                    return e = n.indexOf(e), e < 0 ? [NaN, NaN] : [e > 0 ? u[e - 1] : t[0], e < u.length ? u[e] : t[t.length - 1]]
                }, a.copy = function() {
                    return so(t, n)
                }, e()
            }

            function co(t, n, e) {
                function r(n) {
                    return e[Math.max(0, Math.min(a, Math.floor(o * (n - t))))]
                }

                function i() {
                    return o = e.length / (n - t), a = e.length - 1, r
                }
                var o, a;
                return r.domain = function(e) {
                    return arguments.length ? (t = +e[0], n = +e[e.length - 1], i()) : [t, n]
                }, r.range = function(t) {
                    return arguments.length ? (e = t, i()) : e
                }, r.invertExtent = function(n) {
                    return n = e.indexOf(n), n = n < 0 ? NaN : n / o + t, [n, n + 1 / o]
                }, r.copy = function() {
                    return co(t, n, e)
                }, i()
            }

            function lo(t, n) {
                function e(e) {
                    if (e <= e) return n[ca.bisect(t, e)]
                }
                return e.domain = function(n) {
                    return arguments.length ? (t = n, e) : t
                }, e.range = function(t) {
                    return arguments.length ? (n = t, e) : n
                }, e.invertExtent = function(e) {
                    return e = n.indexOf(e), [t[e - 1], t[e]]
                }, e.copy = function() {
                    return lo(t, n)
                }, e
            }

            function fo(t) {
                function n(t) {
                    return +t
                }
                return n.invert = n, n.domain = n.range = function(e) {
                    return arguments.length ? (t = e.map(n), n) : t
                }, n.ticks = function(n) {
                    return to(t, n)
                }, n.tickFormat = function(n, e) {
                    return no(t, n, e)
                }, n.copy = function() {
                    return fo(t)
                }, n
            }

            function ho() {
                return 0
            }

            function po(t) {
                return t.innerRadius
            }

            function go(t) {
                return t.outerRadius
            }

            function vo(t) {
                return t.startAngle
            }

            function yo(t) {
                return t.endAngle
            }

            function mo(t) {
                return t && t.padAngle
            }

            function xo(t, n, e, r) {
                return (t - e) * n - (n - r) * t > 0 ? 0 : 1
            }

            function Mo(t, n, e, r, i) {
                var o = t[0] - n[0],
                    a = t[1] - n[1],
                    u = (i ? r : -r) / Math.sqrt(o * o + a * a),
                    s = u * a,
                    c = -u * o,
                    l = t[0] + s,
                    f = t[1] + c,
                    h = n[0] + s,
                    p = n[1] + c,
                    d = (l + h) / 2,
                    g = (f + p) / 2,
                    v = h - l,
                    y = p - f,
                    m = v * v + y * y,
                    x = e - r,
                    M = l * p - h * f,
                    w = (y < 0 ? -1 : 1) * Math.sqrt(Math.max(0, x * x * m - M * M)),
                    b = (M * y - v * w) / m,
                    _ = (-M * v - y * w) / m,
                    k = (M * y + v * w) / m,
                    E = (-M * v + y * w) / m,
                    T = b - d,
                    C = _ - g,
                    S = k - d,
                    N = E - g;
                return T * T + C * C > S * S + N * N && (b = k, _ = E), [[b - s, _ - c], [b * e / x, _ * e / x]]
            }

            function wo(t) {
                function n(n) {
                    function a() {
                        c.push("M", o(t(l), u))
                    }
                    for (var s, c = [], l = [], f = -1, h = n.length, p = Ct(e), d = Ct(r); ++f < h;) i.call(this, s = n[f], f) ? l.push([+p.call(this, s, f), +d.call(this, s, f)]) : l.length && (a(), l = []);
                    return l.length && a(), c.length ? c.join("") : null
                }
                var e = Ae,
                    r = Ie,
                    i = In,
                    o = bo,
                    a = o.key,
                    u = .7;
                return n.x = function(t) {
                    return arguments.length ? (e = t, n) : e
                }, n.y = function(t) {
                    return arguments.length ? (r = t, n) : r
                }, n.defined = function(t) {
                    return arguments.length ? (i = t, n) : i
                }, n.interpolate = function(t) {
                    return arguments.length ? (a = "function" == typeof t ? o = t : (o = Ls.get(t) || bo).key, n) : a
                }, n.tension = function(t) {
                    return arguments.length ? (u = t, n) : u
                }, n
            }

            function bo(t) {
                return t.length > 1 ? t.join("L") : t + "Z"
            }

            function _o(t) {
                return t.join("L") + "Z"
            }

            function ko(t) {
                for (var n = 0, e = t.length, r = t[0], i = [r[0], ",", r[1]]; ++n < e;) i.push("H", (r[0] + (r = t[n])[0]) / 2, "V", r[1]);
                return e > 1 && i.push("H", r[0]), i.join("")
            }

            function Eo(t) {
                for (var n = 0, e = t.length, r = t[0], i = [r[0], ",", r[1]]; ++n < e;) i.push("V", (r = t[n])[1], "H", r[0]);
                return i.join("")
            }

            function To(t) {
                for (var n = 0, e = t.length, r = t[0], i = [r[0], ",", r[1]]; ++n < e;) i.push("H", (r = t[n])[0], "V", r[1]);
                return i.join("")
            }

            function Co(t, n) {
                return t.length < 4 ? bo(t) : t[1] + Ao(t.slice(1, -1), Io(t, n))
            }

            function So(t, n) {
                return t.length < 3 ? _o(t) : t[0] + Ao((t.push(t[0]), t), Io([t[t.length - 2]].concat(t, [t[1]]), n))
            }

            function No(t, n) {
                return t.length < 3 ? bo(t) : t[0] + Ao(t, Io(t, n))
            }

            function Ao(t, n) {
                if (n.length < 1 || t.length != n.length && t.length != n.length + 2) return bo(t);
                var e = t.length != n.length,
                    r = "",
                    i = t[0],
                    o = t[1],
                    a = n[0],
                    u = a,
                    s = 1;
                if (e && (r += "Q" + (o[0] - 2 * a[0] / 3) + "," + (o[1] - 2 * a[1] / 3) + "," + o[0] + "," + o[1], i = t[1], s = 2), n.length > 1) {
                    u = n[1], o = t[s], s++, r += "C" + (i[0] + a[0]) + "," + (i[1] + a[1]) + "," + (o[0] - u[0]) + "," + (o[1] - u[1]) + "," + o[0] + "," + o[1];
                    for (var c = 2; c < n.length; c++, s++) o = t[s], u = n[c], r += "S" + (o[0] - u[0]) + "," + (o[1] - u[1]) + "," + o[0] + "," + o[1]
                }
                if (e) {
                    var l = t[s];
                    r += "Q" + (o[0] + 2 * u[0] / 3) + "," + (o[1] + 2 * u[1] / 3) + "," + l[0] + "," + l[1]
                }
                return r
            }

            function Io(t, n) {
                for (var e, r = [], i = (1 - n) / 2, o = t[0], a = t[1], u = 1, s = t.length; ++u < s;) e = o, o = a, a = t[u], r.push([i * (a[0] - e[0]), i * (a[1] - e[1])]);
                return r
            }

            function zo(t) {
                if (t.length < 3) return bo(t);
                var n = 1,
                    e = t.length,
                    r = t[0],
                    i = r[0],
                    o = r[1],
                    a = [i, i, i, (r = t[1])[0]],
                    u = [o, o, o, r[1]],
                    s = [i, ",", o, "L", Ro(qs, a), ",", Ro(qs, u)];
                for (t.push(t[e - 1]); ++n <= e;) r = t[n], a.shift(), a.push(r[0]), u.shift(), u.push(r[1]), qo(s, a, u);
                return t.pop(), s.push("L", r), s.join("")
            }

            function Po(t) {
                if (t.length < 4) return bo(t);
                for (var n, e = [], r = -1, i = t.length, o = [0], a = [0]; ++r < 3;) n = t[r], o.push(n[0]), a.push(n[1]);
                for (e.push(Ro(qs, o) + "," + Ro(qs, a)), --r; ++r < i;) n = t[r], o.shift(), o.push(n[0]), a.shift(), a.push(n[1]), qo(e, o, a);
                return e.join("")
            }

            function Lo(t) {
                for (var n, e, r = -1, i = t.length, o = i + 4, a = [], u = []; ++r < 4;) e = t[r % i], a.push(e[0]), u.push(e[1]);
                for (n = [Ro(qs, a), ",", Ro(qs, u)], --r; ++r < o;) e = t[r % i], a.shift(), a.push(e[0]), u.shift(), u.push(e[1]), qo(n, a, u);
                return n.join("")
            }

            function Do(t, n) {
                var e = t.length - 1;
                if (e)
                    for (var r, i, o = t[0][0], a = t[0][1], u = t[e][0] - o, s = t[e][1] - a, c = -1; ++c <= e;) r = t[c], i = c / e, r[0] = n * r[0] + (1 - n) * (o + i * u), r[1] = n * r[1] + (1 - n) * (a + i * s);
                return zo(t)
            }

            function Ro(t, n) {
                return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3]
            }

            function qo(t, n, e) {
                t.push("C", Ro(Ds, n), ",", Ro(Ds, e), ",", Ro(Rs, n), ",", Ro(Rs, e), ",", Ro(qs, n), ",", Ro(qs, e))
            }

            function Oo(t, n) {
                return (n[1] - t[1]) / (n[0] - t[0])
            }

            function jo(t) {
                for (var n = 0, e = t.length - 1, r = [], i = t[0], o = t[1], a = r[0] = Oo(i, o); ++n < e;) r[n] = (a + (a = Oo(i = o, o = t[n + 1]))) / 2;
                return r[n] = a, r
            }

            function Uo(t) {
                for (var n, e, r, i, o = [], a = jo(t), u = -1, s = t.length - 1; ++u < s;) n = Oo(t[u], t[u + 1]), wa(n) < Oa ? a[u] = a[u + 1] = 0 : (e = a[u] / n, r = a[u + 1] / n, i = e * e + r * r,
                    i > 9 && (i = 3 * n / Math.sqrt(i), a[u] = i * e, a[u + 1] = i * r));
                for (u = -1; ++u <= s;) i = (t[Math.min(s, u + 1)][0] - t[Math.max(0, u - 1)][0]) / (6 * (1 + a[u] * a[u])), o.push([i || 0, a[u] * i || 0]);
                return o
            }

            function $o(t) {
                return t.length < 3 ? bo(t) : t[0] + Ao(t, Uo(t))
            }

            function Fo(t) {
                for (var n, e, r, i = -1, o = t.length; ++i < o;) n = t[i], e = n[0], r = n[1] - Ha, n[0] = e * Math.cos(r), n[1] = e * Math.sin(r);
                return t
            }

            function Ho(t) {
                function n(n) {
                    function s() {
                        g.push("M", u(t(y), f), l, c(t(v.reverse()), f), "Z")
                    }
                    for (var h, p, d, g = [], v = [], y = [], m = -1, x = n.length, M = Ct(e), w = Ct(i), b = e === r ? function() {
                            return p
                        } : Ct(r), _ = i === o ? function() {
                            return d
                        } : Ct(o); ++m < x;) a.call(this, h = n[m], m) ? (v.push([p = +M.call(this, h, m), d = +w.call(this, h, m)]), y.push([+b.call(this, h, m), +_.call(this, h, m)])) : v.length && (s(), v = [], y = []);
                    return v.length && s(), g.length ? g.join("") : null
                }
                var e = Ae,
                    r = Ae,
                    i = 0,
                    o = Ie,
                    a = In,
                    u = bo,
                    s = u.key,
                    c = u,
                    l = "L",
                    f = .7;
                return n.x = function(t) {
                    return arguments.length ? (e = r = t, n) : r
                }, n.x0 = function(t) {
                    return arguments.length ? (e = t, n) : e
                }, n.x1 = function(t) {
                    return arguments.length ? (r = t, n) : r
                }, n.y = function(t) {
                    return arguments.length ? (i = o = t, n) : o
                }, n.y0 = function(t) {
                    return arguments.length ? (i = t, n) : i
                }, n.y1 = function(t) {
                    return arguments.length ? (o = t, n) : o
                }, n.defined = function(t) {
                    return arguments.length ? (a = t, n) : a
                }, n.interpolate = function(t) {
                    return arguments.length ? (s = "function" == typeof t ? u = t : (u = Ls.get(t) || bo).key, c = u.reverse || u, l = u.closed ? "M" : "L", n) : s
                }, n.tension = function(t) {
                    return arguments.length ? (f = t, n) : f
                }, n
            }

            function Wo(t) {
                return t.radius
            }

            function Yo(t) {
                return [t.x, t.y]
            }

            function Vo(t) {
                return function() {
                    var n = t.apply(this, arguments),
                        e = n[0],
                        r = n[1] - Ha;
                    return [e * Math.cos(r), e * Math.sin(r)]
                }
            }

            function Bo() {
                return 64
            }

            function Xo() {
                return "circle"
            }

            function Zo(t) {
                var n = Math.sqrt(t / Ua);
                return "M0," + n + "A" + n + "," + n + " 0 1,1 0," + -n + "A" + n + "," + n + " 0 1,1 0," + n + "Z"
            }

            function Go(t) {
                return function() {
                    var n, e, r;
                    (n = this[t]) && (r = n[e = n.active]) && (r.timer.c = null, r.timer.t = NaN, --n.count ? delete n[e] : delete this[t], n.active += .5, r.event && r.event.interrupt.call(this, this.__data__, r.index))
                }
            }

            function Qo(t, n, e) {
                return Ta(t, Ws), t.namespace = n, t.id = e, t
            }

            function Jo(t, n, e, r) {
                var i = t.id,
                    o = t.namespace;
                return W(t, "function" == typeof e ? function(t, a, u) {
                    t[o][i].tween.set(n, r(e.call(t, t.__data__, a, u)))
                } : (e = r(e), function(t) {
                    t[o][i].tween.set(n, e)
                }))
            }

            function Ko(t) {
                return null == t && (t = ""),
                    function() {
                        this.textContent = t
                    }
            }

            function ta(t) {
                return null == t ? "__transition__" : "__transition_" + t + "__"
            }

            function na(t, n, e, r, i) {
                function o(t) {
                    var n = g.delay;
                    return c.t = n + s, n <= t ? a(t - n) : void(c.c = a)
                }

                function a(e) {
                    var i = d.active,
                        o = d[i];
                    o && (o.timer.c = null, o.timer.t = NaN, --d.count, delete d[i], o.event && o.event.interrupt.call(t, t.__data__, o.index));
                    for (var a in d)
                        if (+a < r) {
                            var l = d[a];
                            l.timer.c = null, l.timer.t = NaN, --d.count, delete d[a]
                        } c.c = u, zt(function() {
                        return c.c && u(e || 1) && (c.c = null, c.t = NaN), 1
                    }, 0, s), d.active = r, g.event && g.event.start.call(t, t.__data__, n), p = [], g.tween.forEach(function(e, r) {
                        (r = r.call(t, t.__data__, n)) && p.push(r)
                    }), h = g.ease, f = g.duration
                }

                function u(i) {
                    for (var o = i / f, a = h(o), u = p.length; u > 0;) p[--u].call(t, a);
                    if (o >= 1) return g.event && g.event.end.call(t, t.__data__, n), --d.count ? delete d[r] : delete t[e], 1
                }
                var s, c, f, h, p, d = t[e] || (t[e] = {
                        active: 0,
                        count: 0
                    }),
                    g = d[r];
                g || (s = i.time, c = zt(o, 0, s), g = d[r] = {
                    tween: new l,
                    time: s,
                    timer: c,
                    delay: i.delay,
                    duration: i.duration,
                    ease: i.ease,
                    index: n
                }, i = null, ++d.count)
            }

            function ea(t, n, e) {
                t.attr("transform", function(t) {
                    var r = n(t);
                    return "translate(" + (isFinite(r) ? r : e(t)) + ",0)"
                })
            }

            function ra(t, n, e) {
                t.attr("transform", function(t) {
                    var r = n(t);
                    return "translate(0," + (isFinite(r) ? r : e(t)) + ")"
                })
            }

            function ia(t) {
                return t.toISOString()
            }

            function oa(t, n, e) {
                function r(n) {
                    return t(n)
                }

                function i(t, e) {
                    var r = t[1] - t[0],
                        i = r / e,
                        o = ca.bisect(Ks, i);
                    return o == Ks.length ? [n.year, Ki(t.map(function(t) {
                        return t / 31536e6
                    }), e)[2]] : o ? n[i / Ks[o - 1] < Ks[o] / i ? o - 1 : o] : [ec, Ki(t, e)[2]]
                }
                return r.invert = function(n) {
                    return aa(t.invert(n))
                }, r.domain = function(n) {
                    return arguments.length ? (t.domain(n), r) : t.domain().map(aa)
                }, r.nice = function(t, n) {
                    function e(e) {
                        return !isNaN(e) && !t.range(e, aa(+e + 1), n).length
                    }
                    var o = r.domain(),
                        a = Wi(o),
                        u = null == t ? i(a, 10) : "number" == typeof t && i(a, t);
                    return u && (t = u[0], n = u[1]), r.domain(Bi(o, n > 1 ? {
                        floor: function(n) {
                            for (; e(n = t.floor(n));) n = aa(n - 1);
                            return n
                        },
                        ceil: function(n) {
                            for (; e(n = t.ceil(n));) n = aa(+n + 1);
                            return n
                        }
                    } : t))
                }, r.ticks = function(t, n) {
                    var e = Wi(r.domain()),
                        o = null == t ? i(e, 10) : "number" == typeof t ? i(e, t) : !t.range && [{
                            range: t
                        }, n];
                    return o && (t = o[0], n = o[1]), t.range(e[0], aa(+e[1] + 1), n < 1 ? 1 : n)
                }, r.tickFormat = function() {
                    return e
                }, r.copy = function() {
                    return oa(t.copy(), n, e)
                }, Qi(r, t)
            }

            function aa(t) {
                return new Date(t)
            }

            function ua(t) {
                return JSON.parse(t.responseText)
            }

            function sa(t) {
                var n = ha.createRange();
                return n.selectNode(ha.body), n.createContextualFragment(t.responseText)
            }
            var ca = {
                    version: "3.5.17"
                },
                la = [].slice,
                fa = function(t) {
                    return la.call(t)
                },
                ha = this.document;
            if (ha) try {
                fa(ha.documentElement.childNodes)[0].nodeType
            } catch (pa) {
                fa = function(t) {
                    for (var n = t.length, e = new Array(n); n--;) e[n] = t[n];
                    return e
                }
            }
            if (Date.now || (Date.now = function() {
                    return +new Date
                }), ha) try {
                ha.createElement("DIV").style.setProperty("opacity", 0, "")
            } catch (da) {
                var ga = this.Element.prototype,
                    va = ga.setAttribute,
                    ya = ga.setAttributeNS,
                    ma = this.CSSStyleDeclaration.prototype,
                    xa = ma.setProperty;
                ga.setAttribute = function(t, n) {
                    va.call(this, t, n + "")
                }, ga.setAttributeNS = function(t, n, e) {
                    ya.call(this, t, n, e + "")
                }, ma.setProperty = function(t, n, e) {
                    xa.call(this, t, n + "", e)
                }
            }
            ca.ascending = r, ca.descending = function(t, n) {
                return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
            }, ca.min = function(t, n) {
                var e, r, i = -1,
                    o = t.length;
                if (1 === arguments.length) {
                    for (; ++i < o;)
                        if (null != (r = t[i]) && r >= r) {
                            e = r;
                            break
                        } for (; ++i < o;) null != (r = t[i]) && e > r && (e = r)
                } else {
                    for (; ++i < o;)
                        if (null != (r = n.call(t, t[i], i)) && r >= r) {
                            e = r;
                            break
                        } for (; ++i < o;) null != (r = n.call(t, t[i], i)) && e > r && (e = r)
                }
                return e
            }, ca.max = function(t, n) {
                var e, r, i = -1,
                    o = t.length;
                if (1 === arguments.length) {
                    for (; ++i < o;)
                        if (null != (r = t[i]) && r >= r) {
                            e = r;
                            break
                        } for (; ++i < o;) null != (r = t[i]) && r > e && (e = r)
                } else {
                    for (; ++i < o;)
                        if (null != (r = n.call(t, t[i], i)) && r >= r) {
                            e = r;
                            break
                        } for (; ++i < o;) null != (r = n.call(t, t[i], i)) && r > e && (e = r)
                }
                return e
            }, ca.extent = function(t, n) {
                var e, r, i, o = -1,
                    a = t.length;
                if (1 === arguments.length) {
                    for (; ++o < a;)
                        if (null != (r = t[o]) && r >= r) {
                            e = i = r;
                            break
                        } for (; ++o < a;) null != (r = t[o]) && (e > r && (e = r), i < r && (i = r))
                } else {
                    for (; ++o < a;)
                        if (null != (r = n.call(t, t[o], o)) && r >= r) {
                            e = i = r;
                            break
                        } for (; ++o < a;) null != (r = n.call(t, t[o], o)) && (e > r && (e = r), i < r && (i = r))
                }
                return [e, i]
            }, ca.sum = function(t, n) {
                var e, r = 0,
                    i = t.length,
                    a = -1;
                if (1 === arguments.length)
                    for (; ++a < i;) o(e = +t[a]) && (r += e);
                else
                    for (; ++a < i;) o(e = +n.call(t, t[a], a)) && (r += e);
                return r
            }, ca.mean = function(t, n) {
                var e, r = 0,
                    a = t.length,
                    u = -1,
                    s = a;
                if (1 === arguments.length)
                    for (; ++u < a;) o(e = i(t[u])) ? r += e : --s;
                else
                    for (; ++u < a;) o(e = i(n.call(t, t[u], u))) ? r += e : --s;
                if (s) return r / s
            }, ca.quantile = function(t, n) {
                var e = (t.length - 1) * n + 1,
                    r = Math.floor(e),
                    i = +t[r - 1],
                    o = e - r;
                return o ? i + o * (t[r] - i) : i
            }, ca.median = function(t, n) {
                var e, a = [],
                    u = t.length,
                    s = -1;
                if (1 === arguments.length)
                    for (; ++s < u;) o(e = i(t[s])) && a.push(e);
                else
                    for (; ++s < u;) o(e = i(n.call(t, t[s], s))) && a.push(e);
                if (a.length) return ca.quantile(a.sort(r), .5)
            }, ca.variance = function(t, n) {
                var e, r, a = t.length,
                    u = 0,
                    s = 0,
                    c = -1,
                    l = 0;
                if (1 === arguments.length)
                    for (; ++c < a;) o(e = i(t[c])) && (r = e - u, u += r / ++l, s += r * (e - u));
                else
                    for (; ++c < a;) o(e = i(n.call(t, t[c], c))) && (r = e - u, u += r / ++l, s += r * (e - u));
                if (l > 1) return s / (l - 1)
            }, ca.deviation = function() {
                var t = ca.variance.apply(this, arguments);
                return t ? Math.sqrt(t) : t
            };
            var Ma = a(r);
            ca.bisectLeft = Ma.left, ca.bisect = ca.bisectRight = Ma.right, ca.bisector = function(t) {
                return a(1 === t.length ? function(n, e) {
                    return r(t(n), e)
                } : t)
            }, ca.shuffle = function(t, n, e) {
                (o = arguments.length) < 3 && (e = t.length, o < 2 && (n = 0));
                for (var r, i, o = e - n; o;) i = Math.random() * o-- | 0, r = t[o + n], t[o + n] = t[i + n], t[i + n] = r;
                return t
            }, ca.permute = function(t, n) {
                for (var e = n.length, r = new Array(e); e--;) r[e] = t[n[e]];
                return r
            }, ca.pairs = function(t) {
                for (var n, e = 0, r = t.length - 1, i = t[0], o = new Array(r < 0 ? 0 : r); e < r;) o[e] = [n = i, i = t[++e]];
                return o
            }, ca.transpose = function(t) {
                if (!(i = t.length)) return [];
                for (var n = -1, e = ca.min(t, u), r = new Array(e); ++n < e;)
                    for (var i, o = -1, a = r[n] = new Array(i); ++o < i;) a[o] = t[o][n];
                return r
            }, ca.zip = function() {
                return ca.transpose(arguments)
            }, ca.keys = function(t) {
                var n = [];
                for (var e in t) n.push(e);
                return n
            }, ca.values = function(t) {
                var n = [];
                for (var e in t) n.push(t[e]);
                return n
            }, ca.entries = function(t) {
                var n = [];
                for (var e in t) n.push({
                    key: e,
                    value: t[e]
                });
                return n
            }, ca.merge = function(t) {
                for (var n, e, r, i = t.length, o = -1, a = 0; ++o < i;) a += t[o].length;
                for (e = new Array(a); --i >= 0;)
                    for (r = t[i], n = r.length; --n >= 0;) e[--a] = r[n];
                return e
            };
            var wa = Math.abs;
            ca.range = function(t, n, e) {
                if (arguments.length < 3 && (e = 1, arguments.length < 2 && (n = t, t = 0)), (n - t) / e === 1 / 0) throw new Error("infinite range");
                var r, i = [],
                    o = s(wa(e)),
                    a = -1;
                if (t *= o, n *= o, e *= o, e < 0)
                    for (;
                        (r = t + e * ++a) > n;) i.push(r / o);
                else
                    for (;
                        (r = t + e * ++a) < n;) i.push(r / o);
                return i
            }, ca.map = function(t, n) {
                var e = new l;
                if (t instanceof l) t.forEach(function(t, n) {
                    e.set(t, n)
                });
                else if (Array.isArray(t)) {
                    var r, i = -1,
                        o = t.length;
                    if (1 === arguments.length)
                        for (; ++i < o;) e.set(i, t[i]);
                    else
                        for (; ++i < o;) e.set(n.call(t, r = t[i], i), r)
                } else
                    for (var a in t) e.set(a, t[a]);
                return e
            };
            var ba = "__proto__",
                _a = "\0";
            c(l, {
                has: p,
                get: function(t) {
                    return this._[f(t)]
                },
                set: function(t, n) {
                    return this._[f(t)] = n
                },
                remove: d,
                keys: g,
                values: function() {
                    var t = [];
                    for (var n in this._) t.push(this._[n]);
                    return t
                },
                entries: function() {
                    var t = [];
                    for (var n in this._) t.push({
                        key: h(n),
                        value: this._[n]
                    });
                    return t
                },
                size: v,
                empty: y,
                forEach: function(t) {
                    for (var n in this._) t.call(this, h(n), this._[n])
                }
            }), ca.nest = function() {
                function t(n, a, u) {
                    if (u >= o.length) return r ? r.call(i, a) : e ? a.sort(e) : a;
                    for (var s, c, f, h, p = -1, d = a.length, g = o[u++], v = new l; ++p < d;)(h = v.get(s = g(c = a[p]))) ? h.push(c) : v.set(s, [c]);
                    return n ? (c = n(), f = function(e, r) {
                        c.set(e, t(n, r, u))
                    }) : (c = {}, f = function(e, r) {
                        c[e] = t(n, r, u)
                    }), v.forEach(f), c
                }

                function n(t, e) {
                    if (e >= o.length) return t;
                    var r = [],
                        i = a[e++];
                    return t.forEach(function(t, i) {
                        r.push({
                            key: t,
                            values: n(i, e)
                        })
                    }), i ? r.sort(function(t, n) {
                        return i(t.key, n.key)
                    }) : r
                }
                var e, r, i = {},
                    o = [],
                    a = [];
                return i.map = function(n, e) {
                    return t(e, n, 0)
                }, i.entries = function(e) {
                    return n(t(ca.map, e, 0), 0)
                }, i.key = function(t) {
                    return o.push(t), i
                }, i.sortKeys = function(t) {
                    return a[o.length - 1] = t, i
                }, i.sortValues = function(t) {
                    return e = t, i
                }, i.rollup = function(t) {
                    return r = t, i
                }, i
            }, ca.set = function(t) {
                var n = new m;
                if (t)
                    for (var e = 0, r = t.length; e < r; ++e) n.add(t[e]);
                return n
            }, c(m, {
                has: p,
                add: function(t) {
                    return this._[f(t += "")] = !0, t
                },
                remove: d,
                values: g,
                size: v,
                empty: y,
                forEach: function(t) {
                    for (var n in this._) t.call(this, h(n))
                }
            }), ca.behavior = {}, ca.rebind = function(t, n) {
                for (var e, r = 1, i = arguments.length; ++r < i;) t[e = arguments[r]] = M(t, n, n[e]);
                return t
            };
            var ka = ["webkit", "ms", "moz", "Moz", "o", "O"];
            ca.dispatch = function() {
                for (var t = new _, n = -1, e = arguments.length; ++n < e;) t[arguments[n]] = k(t);
                return t
            }, _.prototype.on = function(t, n) {
                var e = t.indexOf("."),
                    r = "";
                if (e >= 0 && (r = t.slice(e + 1), t = t.slice(0, e)), t) return arguments.length < 2 ? this[t].on(r) : this[t].on(r, n);
                if (2 === arguments.length) {
                    if (null == n)
                        for (t in this) this.hasOwnProperty(t) && this[t].on(r, null);
                    return this
                }
            }, ca.event = null, ca.requote = function(t) {
                return t.replace(Ea, "\\$&")
            };
            var Ea = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
                Ta = {}.__proto__ ? function(t, n) {
                    t.__proto__ = n
                } : function(t, n) {
                    for (var e in n) t[e] = n[e]
                },
                Ca = function(t, n) {
                    return n.querySelector(t)
                },
                Sa = function(t, n) {
                    return n.querySelectorAll(t)
                },
                Na = function(t, n) {
                    var e = t.matches || t[w(t, "matchesSelector")];
                    return (Na = function(t, n) {
                        return e.call(t, n)
                    })(t, n)
                };
            "function" == typeof Sizzle && (Ca = function(t, n) {
                return Sizzle(t, n)[0] || null
            }, Sa = Sizzle, Na = Sizzle.matchesSelector), ca.selection = function() {
                return ca.select(ha.documentElement)
            };
            var Aa = ca.selection.prototype = [];
            Aa.select = function(t) {
                var n, e, r, i, o = [];
                t = N(t);
                for (var a = -1, u = this.length; ++a < u;) {
                    o.push(n = []), n.parentNode = (r = this[a]).parentNode;
                    for (var s = -1, c = r.length; ++s < c;)(i = r[s]) ? (n.push(e = t.call(i, i.__data__, s, a)), e && "__data__" in i && (e.__data__ = i.__data__)) : n.push(null)
                }
                return S(o)
            }, Aa.selectAll = function(t) {
                var n, e, r = [];
                t = A(t);
                for (var i = -1, o = this.length; ++i < o;)
                    for (var a = this[i], u = -1, s = a.length; ++u < s;)(e = a[u]) && (r.push(n = fa(t.call(e, e.__data__, u, i))), n.parentNode = e);
                return S(r)
            };
            var Ia = "http://www.w3.org/1999/xhtml",
                za = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: Ia,
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                };
            ca.ns = {
                prefix: za,
                qualify: function(t) {
                    var n = t.indexOf(":"),
                        e = t;
                    return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), za.hasOwnProperty(e) ? {
                        space: za[e],
                        local: t
                    } : t
                }
            }, Aa.attr = function(t, n) {
                if (arguments.length < 2) {
                    if ("string" == typeof t) {
                        var e = this.node();
                        return t = ca.ns.qualify(t), t.local ? e.getAttributeNS(t.space, t.local) : e.getAttribute(t)
                    }
                    for (n in t) this.each(I(n, t[n]));
                    return this
                }
                return this.each(I(t, n))
            }, Aa.classed = function(t, n) {
                if (arguments.length < 2) {
                    if ("string" == typeof t) {
                        var e = this.node(),
                            r = (t = L(t)).length,
                            i = -1;
                        if (n = e.classList) {
                            for (; ++i < r;)
                                if (!n.contains(t[i])) return !1
                        } else
                            for (n = e.getAttribute("class"); ++i < r;)
                                if (!P(t[i]).test(n)) return !1;
                        return !0
                    }
                    for (n in t) this.each(D(n, t[n]));
                    return this
                }
                return this.each(D(t, n))
            }, Aa.style = function(t, n, r) {
                var i = arguments.length;
                if (i < 3) {
                    if ("string" != typeof t) {
                        i < 2 && (n = "");
                        for (r in t) this.each(q(r, t[r], n));
                        return this
                    }
                    if (i < 2) {
                        var o = this.node();
                        return e(o).getComputedStyle(o, null).getPropertyValue(t)
                    }
                    r = ""
                }
                return this.each(q(t, n, r))
            }, Aa.property = function(t, n) {
                if (arguments.length < 2) {
                    if ("string" == typeof t) return this.node()[t];
                    for (n in t) this.each(O(n, t[n]));
                    return this
                }
                return this.each(O(t, n))
            }, Aa.text = function(t) {
                return arguments.length ? this.each("function" == typeof t ? function() {
                    var n = t.apply(this, arguments);
                    this.textContent = null == n ? "" : n
                } : null == t ? function() {
                    this.textContent = ""
                } : function() {
                    this.textContent = t
                }) : this.node().textContent
            }, Aa.html = function(t) {
                return arguments.length ? this.each("function" == typeof t ? function() {
                    var n = t.apply(this, arguments);
                    this.innerHTML = null == n ? "" : n
                } : null == t ? function() {
                    this.innerHTML = ""
                } : function() {
                    this.innerHTML = t
                }) : this.node().innerHTML
            }, Aa.append = function(t) {
                return t = j(t), this.select(function() {
                    return this.appendChild(t.apply(this, arguments))
                })
            }, Aa.insert = function(t, n) {
                return t = j(t), n = N(n), this.select(function() {
                    return this.insertBefore(t.apply(this, arguments), n.apply(this, arguments) || null)
                })
            }, Aa.remove = function() {
                return this.each(U)
            }, Aa.data = function(t, n) {
                function e(t, e) {
                    var r, i, o, a = t.length,
                        f = e.length,
                        h = Math.min(a, f),
                        p = new Array(f),
                        d = new Array(f),
                        g = new Array(a);
                    if (n) {
                        var v, y = new l,
                            m = new Array(a);
                        for (r = -1; ++r < a;)(i = t[r]) && (y.has(v = n.call(i, i.__data__, r)) ? g[r] = i : y.set(v, i), m[r] = v);
                        for (r = -1; ++r < f;)(i = y.get(v = n.call(e, o = e[r], r))) ? i !== !0 && (p[r] = i, i.__data__ = o) : d[r] = $(o), y.set(v, !0);
                        for (r = -1; ++r < a;) r in m && y.get(m[r]) !== !0 && (g[r] = t[r])
                    } else {
                        for (r = -1; ++r < h;) i = t[r], o = e[r], i ? (i.__data__ = o, p[r] = i) : d[r] = $(o);
                        for (; r < f; ++r) d[r] = $(e[r]);
                        for (; r < a; ++r) g[r] = t[r]
                    }
                    d.update = p, d.parentNode = p.parentNode = g.parentNode = t.parentNode, u.push(d), s.push(p), c.push(g)
                }
                var r, i, o = -1,
                    a = this.length;
                if (!arguments.length) {
                    for (t = new Array(a = (r = this[0]).length); ++o < a;)(i = r[o]) && (t[o] = i.__data__);
                    return t
                }
                var u = Y([]),
                    s = S([]),
                    c = S([]);
                if ("function" == typeof t)
                    for (; ++o < a;) e(r = this[o], t.call(r, r.parentNode.__data__, o));
                else
                    for (; ++o < a;) e(r = this[o], t);
                return s.enter = function() {
                    return u
                }, s.exit = function() {
                    return c
                }, s
            }, Aa.datum = function(t) {
                return arguments.length ? this.property("__data__", t) : this.property("__data__")
            }, Aa.filter = function(t) {
                var n, e, r, i = [];
                "function" != typeof t && (t = F(t));
                for (var o = 0, a = this.length; o < a; o++) {
                    i.push(n = []), n.parentNode = (e = this[o]).parentNode;
                    for (var u = 0, s = e.length; u < s; u++)(r = e[u]) && t.call(r, r.__data__, u, o) && n.push(r)
                }
                return S(i)
            }, Aa.order = function() {
                for (var t = -1, n = this.length; ++t < n;)
                    for (var e, r = this[t], i = r.length - 1, o = r[i]; --i >= 0;)(e = r[i]) && (o && o !== e.nextSibling && o.parentNode.insertBefore(e, o), o = e);
                return this
            }, Aa.sort = function(t) {
                t = H.apply(this, arguments);
                for (var n = -1, e = this.length; ++n < e;) this[n].sort(t);
                return this.order()
            }, Aa.each = function(t) {
                return W(this, function(n, e, r) {
                    t.call(n, n.__data__, e, r)
                })
            }, Aa.call = function(t) {
                var n = fa(arguments);
                return t.apply(n[0] = this, n), this
            }, Aa.empty = function() {
                return !this.node()
            }, Aa.node = function() {
                for (var t = 0, n = this.length; t < n; t++)
                    for (var e = this[t], r = 0, i = e.length; r < i; r++) {
                        var o = e[r];
                        if (o) return o
                    }
                return null
            }, Aa.size = function() {
                var t = 0;
                return W(this, function() {
                    ++t
                }), t
            };
            var Pa = [];
            ca.selection.enter = Y, ca.selection.enter.prototype = Pa, Pa.append = Aa.append, Pa.empty = Aa.empty, Pa.node = Aa.node, Pa.call = Aa.call, Pa.size = Aa.size, Pa.select = function(t) {
                for (var n, e, r, i, o, a = [], u = -1, s = this.length; ++u < s;) {
                    r = (i = this[u]).update, a.push(n = []), n.parentNode = i.parentNode;
                    for (var c = -1, l = i.length; ++c < l;)(o = i[c]) ? (n.push(r[c] = e = t.call(i.parentNode, o.__data__, c, u)), e.__data__ = o.__data__) : n.push(null)
                }
                return S(a)
            }, Pa.insert = function(t, n) {
                return arguments.length < 2 && (n = V(this)), Aa.insert.call(this, t, n)
            }, ca.select = function(n) {
                var e;
                return "string" == typeof n ? (e = [Ca(n, ha)], e.parentNode = ha.documentElement) : (e = [n], e.parentNode = t(n)), S([e])
            }, ca.selectAll = function(t) {
                var n;
                return "string" == typeof t ? (n = fa(Sa(t, ha)), n.parentNode = ha.documentElement) : (n = fa(t), n.parentNode = null), S([n])
            }, Aa.on = function(t, n, e) {
                var r = arguments.length;
                if (r < 3) {
                    if ("string" != typeof t) {
                        r < 2 && (n = !1);
                        for (e in t) this.each(B(e, t[e], n));
                        return this
                    }
                    if (r < 2) return (r = this.node()["__on" + t]) && r._;
                    e = !1
                }
                return this.each(B(t, n, e))
            };
            var La = ca.map({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            });
            ha && La.forEach(function(t) {
                "on" + t in ha && La.remove(t)
            });
            var Da, Ra = 0;
            ca.mouse = function(t) {
                return Q(t, T())
            };
            var qa = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
            ca.touch = function(t, n, e) {
                if (arguments.length < 3 && (e = n, n = T().changedTouches), n)
                    for (var r, i = 0, o = n.length; i < o; ++i)
                        if ((r = n[i]).identifier === e) return Q(t, r)
            }, ca.behavior.drag = function() {
                function t() {
                    this.on("mousedown.drag", o).on("touchstart.drag", a)
                }

                function n(t, n, e, o, a) {
                    return function() {
                        function u() {
                            var t, e, r = n(h, g);
                            r && (t = r[0] - x[0], e = r[1] - x[1], d |= t | e, x = r, p({
                                type: "drag",
                                x: r[0] + c[0],
                                y: r[1] + c[1],
                                dx: t,
                                dy: e
                            }))
                        }

                        function s() {
                            n(h, g) && (y.on(o + v, null).on(a + v, null), m(d), p({
                                type: "dragend"
                            }))
                        }
                        var c, l = this,
                            f = ca.event.target.correspondingElement || ca.event.target,
                            h = l.parentNode,
                            p = r.of(l, arguments),
                            d = 0,
                            g = t(),
                            v = ".drag" + (null == g ? "" : "-" + g),
                            y = ca.select(e(f)).on(o + v, u).on(a + v, s),
                            m = G(f),
                            x = n(h, g);
                        i ? (c = i.apply(l, arguments), c = [c.x - x[0], c.y - x[1]]) : c = [0, 0], p({
                            type: "dragstart"
                        })
                    }
                }
                var r = C(t, "drag", "dragstart", "dragend"),
                    i = null,
                    o = n(b, ca.mouse, e, "mousemove", "mouseup"),
                    a = n(J, ca.touch, x, "touchmove", "touchend");
                return t.origin = function(n) {
                    return arguments.length ? (i = n, t) : i
                }, ca.rebind(t, r, "on")
            }, ca.touches = function(t, n) {
                return arguments.length < 2 && (n = T().touches), n ? fa(n).map(function(n) {
                    var e = Q(t, n);
                    return e.identifier = n.identifier, e
                }) : []
            };
            var Oa = 1e-6,
                ja = Oa * Oa,
                Ua = Math.PI,
                $a = 2 * Ua,
                Fa = $a - Oa,
                Ha = Ua / 2,
                Wa = Ua / 180,
                Ya = 180 / Ua,
                Va = Math.SQRT2,
                Ba = 2,
                Xa = 4;
            ca.interpolateZoom = function(t, n) {
                var e, r, i = t[0],
                    o = t[1],
                    a = t[2],
                    u = n[0],
                    s = n[1],
                    c = n[2],
                    l = u - i,
                    f = s - o,
                    h = l * l + f * f;
                if (h < ja) r = Math.log(c / a) / Va, e = function(t) {
                    return [i + t * l, o + t * f, a * Math.exp(Va * t * r)]
                };
                else {
                    var p = Math.sqrt(h),
                        d = (c * c - a * a + Xa * h) / (2 * a * Ba * p),
                        g = (c * c - a * a - Xa * h) / (2 * c * Ba * p),
                        v = Math.log(Math.sqrt(d * d + 1) - d),
                        y = Math.log(Math.sqrt(g * g + 1) - g);
                    r = (y - v) / Va, e = function(t) {
                        var n = t * r,
                            e = it(v),
                            u = a / (Ba * p) * (e * ot(Va * n + v) - rt(v));
                        return [i + u * l, o + u * f, a * e / it(Va * n + v)]
                    }
                }
                return e.duration = 1e3 * r, e
            }, ca.behavior.zoom = function() {
                function t(t) {
                    t.on(I, f).on(Ga + ".zoom", p).on("dblclick.zoom", d).on(L, h)
                }

                function n(t) {
                    return [(t[0] - k.x) / k.k, (t[1] - k.y) / k.k]
                }

                function r(t) {
                    return [t[0] * k.k + k.x, t[1] * k.k + k.y]
                }

                function i(t) {
                    k.k = Math.max(S[0], Math.min(S[1], t))
                }

                function o(t, n) {
                    n = r(n), k.x += t[0] - n[0], k.y += t[1] - n[1]
                }

                function a(n, e, r, a) {
                    n.__chart__ = {
                        x: k.x,
                        y: k.y,
                        k: k.k
                    }, i(Math.pow(2, a)), o(v = e, r), n = ca.select(n), N > 0 && (n = n.transition().duration(N)), n.call(t.event)
                }

                function u() {
                    w && w.domain(M.range().map(function(t) {
                        return (t - k.x) / k.k
                    }).map(M.invert)), _ && _.domain(b.range().map(function(t) {
                        return (t - k.y) / k.k
                    }).map(b.invert))
                }

                function s(t) {
                    A++ || t({
                        type: "zoomstart"
                    })
                }

                function c(t) {
                    u(), t({
                        type: "zoom",
                        scale: k.k,
                        translate: [k.x, k.y]
                    })
                }

                function l(t) {
                    --A || (t({
                        type: "zoomend"
                    }), v = null)
                }

                function f() {
                    function t() {
                        u = 1, o(ca.mouse(i), h), c(a)
                    }

                    function r() {
                        f.on(z, null).on(P, null), p(u), l(a)
                    }
                    var i = this,
                        a = D.of(i, arguments),
                        u = 0,
                        f = ca.select(e(i)).on(z, t).on(P, r),
                        h = n(ca.mouse(i)),
                        p = G(i);
                    Hs.call(i), s(a)
                }

                function h() {
                    function t() {
                        var t = ca.touches(d);
                        return p = k.k, t.forEach(function(t) {
                            t.identifier in v && (v[t.identifier] = n(t))
                        }), t
                    }

                    function e() {
                        var n = ca.event.target;
                        ca.select(n).on(M, r).on(w, u), b.push(n);
                        for (var e = ca.event.changedTouches, i = 0, o = e.length; i < o; ++i) v[e[i].identifier] = null;
                        var s = t(),
                            c = Date.now();
                        if (1 === s.length) {
                            if (c - x < 500) {
                                var l = s[0];
                                a(d, l, v[l.identifier], Math.floor(Math.log(k.k) / Math.LN2) + 1), E()
                            }
                            x = c
                        } else if (s.length > 1) {
                            var l = s[0],
                                f = s[1],
                                h = l[0] - f[0],
                                p = l[1] - f[1];
                            y = h * h + p * p
                        }
                    }

                    function r() {
                        var t, n, e, r, a = ca.touches(d);
                        Hs.call(d);
                        for (var u = 0, s = a.length; u < s; ++u, r = null)
                            if (e = a[u], r = v[e.identifier]) {
                                if (n) break;
                                t = e, n = r
                            } if (r) {
                            var l = (l = e[0] - t[0]) * l + (l = e[1] - t[1]) * l,
                                f = y && Math.sqrt(l / y);
                            t = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2], n = [(n[0] + r[0]) / 2, (n[1] + r[1]) / 2], i(f * p)
                        }
                        x = null, o(t, n), c(g)
                    }

                    function u() {
                        if (ca.event.touches.length) {
                            for (var n = ca.event.changedTouches, e = 0, r = n.length; e < r; ++e) delete v[n[e].identifier];
                            for (var i in v) return void t()
                        }
                        ca.selectAll(b).on(m, null), _.on(I, f).on(L, h), T(), l(g)
                    }
                    var p, d = this,
                        g = D.of(d, arguments),
                        v = {},
                        y = 0,
                        m = ".zoom-" + ca.event.changedTouches[0].identifier,
                        M = "touchmove" + m,
                        w = "touchend" + m,
                        b = [],
                        _ = ca.select(d),
                        T = G(d);
                    e(), s(g), _.on(I, null).on(L, e)
                }

                function p() {
                    var t = D.of(this, arguments);
                    m ? clearTimeout(m) : (Hs.call(this), g = n(v = y || ca.mouse(this)), s(t)), m = setTimeout(function() {
                        m = null, l(t)
                    }, 50), E(), i(Math.pow(2, .002 * Za()) * k.k), o(v, g), c(t)
                }

                function d() {
                    var t = ca.mouse(this),
                        e = Math.log(k.k) / Math.LN2;
                    a(this, t, n(t), ca.event.shiftKey ? Math.ceil(e) - 1 : Math.floor(e) + 1)
                }
                var g, v, y, m, x, M, w, b, _, k = {
                        x: 0,
                        y: 0,
                        k: 1
                    },
                    T = [960, 500],
                    S = Qa,
                    N = 250,
                    A = 0,
                    I = "mousedown.zoom",
                    z = "mousemove.zoom",
                    P = "mouseup.zoom",
                    L = "touchstart.zoom",
                    D = C(t, "zoomstart", "zoom", "zoomend");
                return Ga || (Ga = "onwheel" in ha ? (Za = function() {
                    return -ca.event.deltaY * (ca.event.deltaMode ? 120 : 1)
                }, "wheel") : "onmousewheel" in ha ? (Za = function() {
                    return ca.event.wheelDelta
                }, "mousewheel") : (Za = function() {
                    return -ca.event.detail
                }, "MozMousePixelScroll")), t.event = function(t) {
                    t.each(function() {
                        var t = D.of(this, arguments),
                            n = k;
                        $s ? ca.select(this).transition().each("start.zoom", function() {
                            k = this.__chart__ || {
                                x: 0,
                                y: 0,
                                k: 1
                            }, s(t)
                        }).tween("zoom:zoom", function() {
                            var e = T[0],
                                r = T[1],
                                i = v ? v[0] : e / 2,
                                o = v ? v[1] : r / 2,
                                a = ca.interpolateZoom([(i - k.x) / k.k, (o - k.y) / k.k, e / k.k], [(i - n.x) / n.k, (o - n.y) / n.k, e / n.k]);
                            return function(n) {
                                var r = a(n),
                                    u = e / r[2];
                                this.__chart__ = k = {
                                    x: i - r[0] * u,
                                    y: o - r[1] * u,
                                    k: u
                                }, c(t)
                            }
                        }).each("interrupt.zoom", function() {
                            l(t)
                        }).each("end.zoom", function() {
                            l(t)
                        }) : (this.__chart__ = k, s(t), c(t), l(t))
                    })
                }, t.translate = function(n) {
                    return arguments.length ? (k = {
                        x: +n[0],
                        y: +n[1],
                        k: k.k
                    }, u(), t) : [k.x, k.y]
                }, t.scale = function(n) {
                    return arguments.length ? (k = {
                        x: k.x,
                        y: k.y,
                        k: null
                    }, i(+n), u(), t) : k.k
                }, t.scaleExtent = function(n) {
                    return arguments.length ? (S = null == n ? Qa : [+n[0], +n[1]], t) : S
                }, t.center = function(n) {
                    return arguments.length ? (y = n && [+n[0], +n[1]], t) : y
                }, t.size = function(n) {
                    return arguments.length ? (T = n && [+n[0], +n[1]], t) : T
                }, t.duration = function(n) {
                    return arguments.length ? (N = +n, t) : N
                }, t.x = function(n) {
                    return arguments.length ? (w = n, M = n.copy(), k = {
                        x: 0,
                        y: 0,
                        k: 1
                    }, t) : w
                }, t.y = function(n) {
                    return arguments.length ? (_ = n, b = n.copy(), k = {
                        x: 0,
                        y: 0,
                        k: 1
                    }, t) : _
                }, ca.rebind(t, D, "on")
            };
            var Za, Ga, Qa = [0, 1 / 0];
            ca.color = ut, ut.prototype.toString = function() {
                return this.rgb() + ""
            }, ca.hsl = st;
            var Ja = st.prototype = new ut;
            Ja.brighter = function(t) {
                return t = Math.pow(.7, arguments.length ? t : 1), new st(this.h, this.s, this.l / t)
            }, Ja.darker = function(t) {
                return t = Math.pow(.7, arguments.length ? t : 1), new st(this.h, this.s, t * this.l)
            }, Ja.rgb = function() {
                return ct(this.h, this.s, this.l)
            }, ca.hcl = lt;
            var Ka = lt.prototype = new ut;
            Ka.brighter = function(t) {
                return new lt(this.h, this.c, Math.min(100, this.l + tu * (arguments.length ? t : 1)))
            }, Ka.darker = function(t) {
                return new lt(this.h, this.c, Math.max(0, this.l - tu * (arguments.length ? t : 1)))
            }, Ka.rgb = function() {
                return ft(this.h, this.c, this.l).rgb()
            }, ca.lab = ht;
            var tu = 18,
                nu = .95047,
                eu = 1,
                ru = 1.08883,
                iu = ht.prototype = new ut;
            iu.brighter = function(t) {
                return new ht(Math.min(100, this.l + tu * (arguments.length ? t : 1)), this.a, this.b)
            }, iu.darker = function(t) {
                return new ht(Math.max(0, this.l - tu * (arguments.length ? t : 1)), this.a, this.b)
            }, iu.rgb = function() {
                return pt(this.l, this.a, this.b)
            }, ca.rgb = mt;
            var ou = mt.prototype = new ut;
            ou.brighter = function(t) {
                t = Math.pow(.7, arguments.length ? t : 1);
                var n = this.r,
                    e = this.g,
                    r = this.b,
                    i = 30;
                return n || e || r ? (n && n < i && (n = i), e && e < i && (e = i), r && r < i && (r = i), new mt(Math.min(255, n / t), Math.min(255, e / t), Math.min(255, r / t))) : new mt(i, i, i)
            }, ou.darker = function(t) {
                return t = Math.pow(.7, arguments.length ? t : 1), new mt(t * this.r, t * this.g, t * this.b)
            }, ou.hsl = function() {
                return _t(this.r, this.g, this.b)
            }, ou.toString = function() {
                return "#" + wt(this.r) + wt(this.g) + wt(this.b)
            };
            var au = ca.map({
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            });
            au.forEach(function(t, n) {
                au.set(t, xt(n))
            }), ca.functor = Ct, ca.xhr = St(x), ca.dsv = function(t, n) {
                function e(t, e, o) {
                    arguments.length < 3 && (o = e, e = null);
                    var a = Nt(t, n, null == e ? r : i(e), o);
                    return a.row = function(t) {
                        return arguments.length ? a.response(null == (e = t) ? r : i(t)) : e
                    }, a
                }

                function r(t) {
                    return e.parse(t.responseText)
                }

                function i(t) {
                    return function(n) {
                        return e.parse(n.responseText, t)
                    }
                }

                function o(n) {
                    return n.map(a).join(t)
                }

                function a(t) {
                    return u.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
                }
                var u = new RegExp('["' + t + "\n]"),
                    s = t.charCodeAt(0);
                return e.parse = function(t, n) {
                    var r;
                    return e.parseRows(t, function(t, e) {
                        if (r) return r(t, e - 1);
                        var i = new Function("d", "return {" + t.map(function(t, n) {
                            return JSON.stringify(t) + ": d[" + n + "]"
                        }).join(",") + "}");
                        r = n ? function(t, e) {
                            return n(i(t), e)
                        } : i
                    })
                }, e.parseRows = function(t, n) {
                    function e() {
                        if (l >= c) return a;
                        if (i) return i = !1, o;
                        var n = l;
                        if (34 === t.charCodeAt(n)) {
                            for (var e = n; e++ < c;)
                                if (34 === t.charCodeAt(e)) {
                                    if (34 !== t.charCodeAt(e + 1)) break;
                                    ++e
                                } l = e + 2;
                            var r = t.charCodeAt(e + 1);
                            return 13 === r ? (i = !0, 10 === t.charCodeAt(e + 2) && ++l) : 10 === r && (i = !0), t.slice(n + 1, e).replace(/""/g, '"')
                        }
                        for (; l < c;) {
                            var r = t.charCodeAt(l++),
                                u = 1;
                            if (10 === r) i = !0;
                            else if (13 === r) i = !0, 10 === t.charCodeAt(l) && (++l, ++u);
                            else if (r !== s) continue;
                            return t.slice(n, l - u)
                        }
                        return t.slice(n)
                    }
                    for (var r, i, o = {}, a = {}, u = [], c = t.length, l = 0, f = 0;
                        (r = e()) !== a;) {
                        for (var h = []; r !== o && r !== a;) h.push(r), r = e();
                        n && null == (h = n(h, f++)) || u.push(h)
                    }
                    return u
                }, e.format = function(n) {
                    if (Array.isArray(n[0])) return e.formatRows(n);
                    var r = new m,
                        i = [];
                    return n.forEach(function(t) {
                        for (var n in t) r.has(n) || i.push(r.add(n))
                    }), [i.map(a).join(t)].concat(n.map(function(n) {
                        return i.map(function(t) {
                            return a(n[t])
                        }).join(t)
                    })).join("\n")
                }, e.formatRows = function(t) {
                    return t.map(o).join("\n")
                }, e
            }, ca.csv = ca.dsv(",", "text/csv"), ca.tsv = ca.dsv("\t", "text/tab-separated-values");
            var uu, su, cu, lu, fu = this[w(this, "requestAnimationFrame")] || function(t) {
                setTimeout(t, 17)
            };
            ca.timer = function() {
                zt.apply(this, arguments)
            }, ca.timer.flush = function() {
                Lt(), Dt()
            }, ca.round = function(t, n) {
                return n ? Math.round(t * (n = Math.pow(10, n))) / n : Math.round(t)
            };
            var hu = ["y", "z", "a", "f", "p", "n", "Âµ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(qt);
            ca.formatPrefix = function(t, n) {
                var e = 0;
                return (t = +t) && (t < 0 && (t *= -1), n && (t = ca.round(t, Rt(t, n))), e = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), hu[8 + e / 3]
            };
            var pu = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
                du = ca.map({
                    b: function(t) {
                        return t.toString(2)
                    },
                    c: function(t) {
                        return String.fromCharCode(t)
                    },
                    o: function(t) {
                        return t.toString(8)
                    },
                    x: function(t) {
                        return t.toString(16)
                    },
                    X: function(t) {
                        return t.toString(16).toUpperCase()
                    },
                    g: function(t, n) {
                        return t.toPrecision(n)
                    },
                    e: function(t, n) {
                        return t.toExponential(n)
                    },
                    f: function(t, n) {
                        return t.toFixed(n)
                    },
                    r: function(t, n) {
                        return (t = ca.round(t, Rt(t, n))).toFixed(Math.max(0, Math.min(20, Rt(t * (1 + 1e-15), n))))
                    }
                }),
                gu = ca.time = {},
                vu = Date;
            Ut.prototype = {
                getDate: function() {
                    return this._.getUTCDate()
                },
                getDay: function() {
                    return this._.getUTCDay()
                },
                getFullYear: function() {
                    return this._.getUTCFullYear()
                },
                getHours: function() {
                    return this._.getUTCHours()
                },
                getMilliseconds: function() {
                    return this._.getUTCMilliseconds()
                },
                getMinutes: function() {
                    return this._.getUTCMinutes()
                },
                getMonth: function() {
                    return this._.getUTCMonth()
                },
                getSeconds: function() {
                    return this._.getUTCSeconds()
                },
                getTime: function() {
                    return this._.getTime()
                },
                getTimezoneOffset: function() {
                    return 0
                },
                valueOf: function() {
                    return this._.valueOf()
                },
                setDate: function() {
                    yu.setUTCDate.apply(this._, arguments)
                },
                setDay: function() {
                    yu.setUTCDay.apply(this._, arguments)
                },
                setFullYear: function() {
                    yu.setUTCFullYear.apply(this._, arguments)
                },
                setHours: function() {
                    yu.setUTCHours.apply(this._, arguments)
                },
                setMilliseconds: function() {
                    yu.setUTCMilliseconds.apply(this._, arguments)
                },
                setMinutes: function() {
                    yu.setUTCMinutes.apply(this._, arguments)
                },
                setMonth: function() {
                    yu.setUTCMonth.apply(this._, arguments)
                },
                setSeconds: function() {
                    yu.setUTCSeconds.apply(this._, arguments)
                },
                setTime: function() {
                    yu.setTime.apply(this._, arguments)
                }
            };
            var yu = Date.prototype;
            gu.year = $t(function(t) {
                return t = gu.day(t), t.setMonth(0, 1), t
            }, function(t, n) {
                t.setFullYear(t.getFullYear() + n)
            }, function(t) {
                return t.getFullYear()
            }), gu.years = gu.year.range, gu.years.utc = gu.year.utc.range, gu.day = $t(function(t) {
                var n = new vu(2e3, 0);
                return n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n
            }, function(t, n) {
                t.setDate(t.getDate() + n)
            }, function(t) {
                return t.getDate() - 1
            }), gu.days = gu.day.range, gu.days.utc = gu.day.utc.range, gu.dayOfYear = function(t) {
                var n = gu.year(t);
                return Math.floor((t - n - 6e4 * (t.getTimezoneOffset() - n.getTimezoneOffset())) / 864e5)
            }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(t, n) {
                n = 7 - n;
                var e = gu[t] = $t(function(t) {
                    return (t = gu.day(t)).setDate(t.getDate() - (t.getDay() + n) % 7), t
                }, function(t, n) {
                    t.setDate(t.getDate() + 7 * Math.floor(n))
                }, function(t) {
                    var e = gu.year(t).getDay();
                    return Math.floor((gu.dayOfYear(t) + (e + n) % 7) / 7) - (e !== n)
                });
                gu[t + "s"] = e.range, gu[t + "s"].utc = e.utc.range,
                    gu[t + "OfYear"] = function(t) {
                        var e = gu.year(t).getDay();
                        return Math.floor((gu.dayOfYear(t) + (e + n) % 7) / 7)
                    }
            }), gu.week = gu.sunday, gu.weeks = gu.sunday.range, gu.weeks.utc = gu.sunday.utc.range, gu.weekOfYear = gu.sundayOfYear;
            var mu = {
                    "-": "",
                    _: " ",
                    0: "0"
                },
                xu = /^\s*\d+/,
                Mu = /^%/;
            ca.locale = function(t) {
                return {
                    numberFormat: Ot(t),
                    timeFormat: Ht(t)
                }
            };
            var wu = ca.locale({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["$", ""],
                dateTime: "%a %b %e %X %Y",
                date: "%m/%d/%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            });
            ca.format = wu.numberFormat, ca.geo = {}, fn.prototype = {
                s: 0,
                t: 0,
                add: function(t) {
                    hn(t, this.t, bu), hn(bu.s, this.s, this), this.s ? this.t += bu.t : this.s = bu.t
                },
                reset: function() {
                    this.s = this.t = 0
                },
                valueOf: function() {
                    return this.s
                }
            };
            var bu = new fn;
            ca.geo.stream = function(t, n) {
                t && _u.hasOwnProperty(t.type) ? _u[t.type](t, n) : pn(t, n)
            };
            var _u = {
                    Feature: function(t, n) {
                        pn(t.geometry, n)
                    },
                    FeatureCollection: function(t, n) {
                        for (var e = t.features, r = -1, i = e.length; ++r < i;) pn(e[r].geometry, n)
                    }
                },
                ku = {
                    Sphere: function(t, n) {
                        n.sphere()
                    },
                    Point: function(t, n) {
                        t = t.coordinates, n.point(t[0], t[1], t[2])
                    },
                    MultiPoint: function(t, n) {
                        for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2])
                    },
                    LineString: function(t, n) {
                        dn(t.coordinates, n, 0)
                    },
                    MultiLineString: function(t, n) {
                        for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) dn(e[r], n, 0)
                    },
                    Polygon: function(t, n) {
                        gn(t.coordinates, n)
                    },
                    MultiPolygon: function(t, n) {
                        for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) gn(e[r], n)
                    },
                    GeometryCollection: function(t, n) {
                        for (var e = t.geometries, r = -1, i = e.length; ++r < i;) pn(e[r], n)
                    }
                };
            ca.geo.area = function(t) {
                return Eu = 0, ca.geo.stream(t, Cu), Eu
            };
            var Eu, Tu = new fn,
                Cu = {
                    sphere: function() {
                        Eu += 4 * Ua
                    },
                    point: b,
                    lineStart: b,
                    lineEnd: b,
                    polygonStart: function() {
                        Tu.reset(), Cu.lineStart = vn
                    },
                    polygonEnd: function() {
                        var t = 2 * Tu;
                        Eu += t < 0 ? 4 * Ua + t : t, Cu.lineStart = Cu.lineEnd = Cu.point = b
                    }
                };
            ca.geo.bounds = function() {
                function t(t, n) {
                    x.push(M = [l = t, h = t]), n < f && (f = n), n > p && (p = n)
                }

                function n(n, e) {
                    var r = yn([n * Wa, e * Wa]);
                    if (y) {
                        var i = xn(y, r),
                            o = [i[1], -i[0], 0],
                            a = xn(o, i);
                        bn(a), a = _n(a);
                        var s = n - d,
                            c = s > 0 ? 1 : -1,
                            g = a[0] * Ya * c,
                            v = wa(s) > 180;
                        if (v ^ (c * d < g && g < c * n)) {
                            var m = a[1] * Ya;
                            m > p && (p = m)
                        } else if (g = (g + 360) % 360 - 180, v ^ (c * d < g && g < c * n)) {
                            var m = -a[1] * Ya;
                            m < f && (f = m)
                        } else e < f && (f = e), e > p && (p = e);
                        v ? n < d ? u(l, n) > u(l, h) && (h = n) : u(n, h) > u(l, h) && (l = n) : h >= l ? (n < l && (l = n), n > h && (h = n)) : n > d ? u(l, n) > u(l, h) && (h = n) : u(n, h) > u(l, h) && (l = n)
                    } else t(n, e);
                    y = r, d = n
                }

                function e() {
                    w.point = n
                }

                function r() {
                    M[0] = l, M[1] = h, w.point = t, y = null
                }

                function i(t, e) {
                    if (y) {
                        var r = t - d;
                        m += wa(r) > 180 ? r + (r > 0 ? 360 : -360) : r
                    } else g = t, v = e;
                    Cu.point(t, e), n(t, e)
                }

                function o() {
                    Cu.lineStart()
                }

                function a() {
                    i(g, v), Cu.lineEnd(), wa(m) > Oa && (l = -(h = 180)), M[0] = l, M[1] = h, y = null
                }

                function u(t, n) {
                    return (n -= t) < 0 ? n + 360 : n
                }

                function s(t, n) {
                    return t[0] - n[0]
                }

                function c(t, n) {
                    return n[0] <= n[1] ? n[0] <= t && t <= n[1] : t < n[0] || n[1] < t
                }
                var l, f, h, p, d, g, v, y, m, x, M, w = {
                    point: t,
                    lineStart: e,
                    lineEnd: r,
                    polygonStart: function() {
                        w.point = i, w.lineStart = o, w.lineEnd = a, m = 0, Cu.polygonStart()
                    },
                    polygonEnd: function() {
                        Cu.polygonEnd(), w.point = t, w.lineStart = e, w.lineEnd = r, Tu < 0 ? (l = -(h = 180), f = -(p = 90)) : m > Oa ? p = 90 : m < -Oa && (f = -90), M[0] = l, M[1] = h
                    }
                };
                return function(t) {
                    p = h = -(l = f = 1 / 0), x = [], ca.geo.stream(t, w);
                    var n = x.length;
                    if (n) {
                        x.sort(s);
                        for (var e, r = 1, i = x[0], o = [i]; r < n; ++r) e = x[r], c(e[0], i) || c(e[1], i) ? (u(i[0], e[1]) > u(i[0], i[1]) && (i[1] = e[1]), u(e[0], i[1]) > u(i[0], i[1]) && (i[0] = e[0])) : o.push(i = e);
                        for (var a, e, d = -(1 / 0), n = o.length - 1, r = 0, i = o[n]; r <= n; i = e, ++r) e = o[r], (a = u(i[1], e[0])) > d && (d = a, l = e[0], h = i[1])
                    }
                    return x = M = null, l === 1 / 0 || f === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[l, f], [h, p]]
                }
            }(), ca.geo.centroid = function(t) {
                Su = Nu = Au = Iu = zu = Pu = Lu = Du = Ru = qu = Ou = 0, ca.geo.stream(t, ju);
                var n = Ru,
                    e = qu,
                    r = Ou,
                    i = n * n + e * e + r * r;
                return i < ja && (n = Pu, e = Lu, r = Du, Nu < Oa && (n = Au, e = Iu, r = zu), i = n * n + e * e + r * r, i < ja) ? [NaN, NaN] : [Math.atan2(e, n) * Ya, et(r / Math.sqrt(i)) * Ya]
            };
            var Su, Nu, Au, Iu, zu, Pu, Lu, Du, Ru, qu, Ou, ju = {
                    sphere: b,
                    point: En,
                    lineStart: Cn,
                    lineEnd: Sn,
                    polygonStart: function() {
                        ju.lineStart = Nn
                    },
                    polygonEnd: function() {
                        ju.lineStart = Cn
                    }
                },
                Uu = Dn(In, jn, $n, [-Ua, -Ua / 2]),
                $u = 1e9;
            ca.geo.clipExtent = function() {
                var t, n, e, r, i, o, a = {
                    stream: function(t) {
                        return i && (i.valid = !1), i = o(t), i.valid = !0, i
                    },
                    extent: function(u) {
                        return arguments.length ? (o = Yn(t = +u[0][0], n = +u[0][1], e = +u[1][0], r = +u[1][1]), i && (i.valid = !1, i = null), a) : [[t, n], [e, r]]
                    }
                };
                return a.extent([[0, 0], [960, 500]])
            }, (ca.geo.conicEqualArea = function() {
                return Vn(Bn)
            }).raw = Bn, ca.geo.albers = function() {
                return ca.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
            }, ca.geo.albersUsa = function() {
                function t(t) {
                    var o = t[0],
                        a = t[1];
                    return n = null, e(o, a), n || (r(o, a), n) || i(o, a), n
                }
                var n, e, r, i, o = ca.geo.albers(),
                    a = ca.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                    u = ca.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                    s = {
                        point: function(t, e) {
                            n = [t, e]
                        }
                    };
                return t.invert = function(t) {
                    var n = o.scale(),
                        e = o.translate(),
                        r = (t[0] - e[0]) / n,
                        i = (t[1] - e[1]) / n;
                    return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? a : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? u : o).invert(t)
                }, t.stream = function(t) {
                    var n = o.stream(t),
                        e = a.stream(t),
                        r = u.stream(t);
                    return {
                        point: function(t, i) {
                            n.point(t, i), e.point(t, i), r.point(t, i)
                        },
                        sphere: function() {
                            n.sphere(), e.sphere(), r.sphere()
                        },
                        lineStart: function() {
                            n.lineStart(), e.lineStart(), r.lineStart()
                        },
                        lineEnd: function() {
                            n.lineEnd(), e.lineEnd(), r.lineEnd()
                        },
                        polygonStart: function() {
                            n.polygonStart(), e.polygonStart(), r.polygonStart()
                        },
                        polygonEnd: function() {
                            n.polygonEnd(), e.polygonEnd(), r.polygonEnd()
                        }
                    }
                }, t.precision = function(n) {
                    return arguments.length ? (o.precision(n), a.precision(n), u.precision(n), t) : o.precision()
                }, t.scale = function(n) {
                    return arguments.length ? (o.scale(n), a.scale(.35 * n), u.scale(n), t.translate(o.translate())) : o.scale()
                }, t.translate = function(n) {
                    if (!arguments.length) return o.translate();
                    var c = o.scale(),
                        l = +n[0],
                        f = +n[1];
                    return e = o.translate(n).clipExtent([[l - .455 * c, f - .238 * c], [l + .455 * c, f + .238 * c]]).stream(s).point, r = a.translate([l - .307 * c, f + .201 * c]).clipExtent([[l - .425 * c + Oa, f + .12 * c + Oa], [l - .214 * c - Oa, f + .234 * c - Oa]]).stream(s).point, i = u.translate([l - .205 * c, f + .212 * c]).clipExtent([[l - .214 * c + Oa, f + .166 * c + Oa], [l - .115 * c - Oa, f + .234 * c - Oa]]).stream(s).point, t
                }, t.scale(1070)
            };
            var Fu, Hu, Wu, Yu, Vu, Bu, Xu = {
                    point: b,
                    lineStart: b,
                    lineEnd: b,
                    polygonStart: function() {
                        Hu = 0, Xu.lineStart = Xn
                    },
                    polygonEnd: function() {
                        Xu.lineStart = Xu.lineEnd = Xu.point = b, Fu += wa(Hu / 2)
                    }
                },
                Zu = {
                    point: Zn,
                    lineStart: b,
                    lineEnd: b,
                    polygonStart: b,
                    polygonEnd: b
                },
                Gu = {
                    point: Jn,
                    lineStart: Kn,
                    lineEnd: te,
                    polygonStart: function() {
                        Gu.lineStart = ne
                    },
                    polygonEnd: function() {
                        Gu.point = Jn, Gu.lineStart = Kn, Gu.lineEnd = te
                    }
                };
            ca.geo.path = function() {
                function t(t) {
                    return t && ("function" == typeof u && o.pointRadius(+u.apply(this, arguments)), a && a.valid || (a = i(o)), ca.geo.stream(t, a)), o.result()
                }

                function n() {
                    return a = null, t
                }
                var e, r, i, o, a, u = 4.5;
                return t.area = function(t) {
                    return Fu = 0, ca.geo.stream(t, i(Xu)), Fu
                }, t.centroid = function(t) {
                    return Au = Iu = zu = Pu = Lu = Du = Ru = qu = Ou = 0, ca.geo.stream(t, i(Gu)), Ou ? [Ru / Ou, qu / Ou] : Du ? [Pu / Du, Lu / Du] : zu ? [Au / zu, Iu / zu] : [NaN, NaN]
                }, t.bounds = function(t) {
                    return Vu = Bu = -(Wu = Yu = 1 / 0), ca.geo.stream(t, i(Zu)), [[Wu, Yu], [Vu, Bu]]
                }, t.projection = function(t) {
                    return arguments.length ? (i = (e = t) ? t.stream || ie(t) : x, n()) : e
                }, t.context = function(t) {
                    return arguments.length ? (o = null == (r = t) ? new Gn : new ee(t), "function" != typeof u && o.pointRadius(u), n()) : r
                }, t.pointRadius = function(n) {
                    return arguments.length ? (u = "function" == typeof n ? n : (o.pointRadius(+n), +n), t) : u
                }, t.projection(ca.geo.albersUsa()).context(null)
            }, ca.geo.transform = function(t) {
                return {
                    stream: function(n) {
                        var e = new oe(n);
                        for (var r in t) e[r] = t[r];
                        return e
                    }
                }
            }, oe.prototype = {
                point: function(t, n) {
                    this.stream.point(t, n)
                },
                sphere: function() {
                    this.stream.sphere()
                },
                lineStart: function() {
                    this.stream.lineStart()
                },
                lineEnd: function() {
                    this.stream.lineEnd()
                },
                polygonStart: function() {
                    this.stream.polygonStart()
                },
                polygonEnd: function() {
                    this.stream.polygonEnd()
                }
            }, ca.geo.projection = ue, ca.geo.projectionMutator = se, (ca.geo.equirectangular = function() {
                return ue(le)
            }).raw = le.invert = le, ca.geo.rotation = function(t) {
                function n(n) {
                    return n = t(n[0] * Wa, n[1] * Wa), n[0] *= Ya, n[1] *= Ya, n
                }
                return t = he(t[0] % 360 * Wa, t[1] * Wa, t.length > 2 ? t[2] * Wa : 0), n.invert = function(n) {
                    return n = t.invert(n[0] * Wa, n[1] * Wa), n[0] *= Ya, n[1] *= Ya, n
                }, n
            }, fe.invert = le, ca.geo.circle = function() {
                function t() {
                    var t = "function" == typeof r ? r.apply(this, arguments) : r,
                        n = he(-t[0] * Wa, -t[1] * Wa, 0).invert,
                        i = [];
                    return e(null, null, 1, {
                        point: function(t, e) {
                            i.push(t = n(t, e)), t[0] *= Ya, t[1] *= Ya
                        }
                    }), {
                        type: "Polygon",
                        coordinates: [i]
                    }
                }
                var n, e, r = [0, 0],
                    i = 6;
                return t.origin = function(n) {
                    return arguments.length ? (r = n, t) : r
                }, t.angle = function(r) {
                    return arguments.length ? (e = ve((n = +r) * Wa, i * Wa), t) : n
                }, t.precision = function(r) {
                    return arguments.length ? (e = ve(n * Wa, (i = +r) * Wa), t) : i
                }, t.angle(90)
            }, ca.geo.distance = function(t, n) {
                var e, r = (n[0] - t[0]) * Wa,
                    i = t[1] * Wa,
                    o = n[1] * Wa,
                    a = Math.sin(r),
                    u = Math.cos(r),
                    s = Math.sin(i),
                    c = Math.cos(i),
                    l = Math.sin(o),
                    f = Math.cos(o);
                return Math.atan2(Math.sqrt((e = f * a) * e + (e = c * l - s * f * u) * e), s * l + c * f * u)
            }, ca.geo.graticule = function() {
                function t() {
                    return {
                        type: "MultiLineString",
                        coordinates: n()
                    }
                }

                function n() {
                    return ca.range(Math.ceil(o / v) * v, i, v).map(h).concat(ca.range(Math.ceil(c / y) * y, s, y).map(p)).concat(ca.range(Math.ceil(r / d) * d, e, d).filter(function(t) {
                        return wa(t % v) > Oa
                    }).map(l)).concat(ca.range(Math.ceil(u / g) * g, a, g).filter(function(t) {
                        return wa(t % y) > Oa
                    }).map(f))
                }
                var e, r, i, o, a, u, s, c, l, f, h, p, d = 10,
                    g = d,
                    v = 90,
                    y = 360,
                    m = 2.5;
                return t.lines = function() {
                    return n().map(function(t) {
                        return {
                            type: "LineString",
                            coordinates: t
                        }
                    })
                }, t.outline = function() {
                    return {
                        type: "Polygon",
                        coordinates: [h(o).concat(p(s).slice(1), h(i).reverse().slice(1), p(c).reverse().slice(1))]
                    }
                }, t.extent = function(n) {
                    return arguments.length ? t.majorExtent(n).minorExtent(n) : t.minorExtent()
                }, t.majorExtent = function(n) {
                    return arguments.length ? (o = +n[0][0], i = +n[1][0], c = +n[0][1], s = +n[1][1], o > i && (n = o, o = i, i = n), c > s && (n = c, c = s, s = n), t.precision(m)) : [[o, c], [i, s]]
                }, t.minorExtent = function(n) {
                    return arguments.length ? (r = +n[0][0], e = +n[1][0], u = +n[0][1], a = +n[1][1], r > e && (n = r, r = e, e = n), u > a && (n = u, u = a, a = n), t.precision(m)) : [[r, u], [e, a]]
                }, t.step = function(n) {
                    return arguments.length ? t.majorStep(n).minorStep(n) : t.minorStep()
                }, t.majorStep = function(n) {
                    return arguments.length ? (v = +n[0], y = +n[1], t) : [v, y]
                }, t.minorStep = function(n) {
                    return arguments.length ? (d = +n[0], g = +n[1], t) : [d, g]
                }, t.precision = function(n) {
                    return arguments.length ? (m = +n, l = me(u, a, 90), f = xe(r, e, m), h = me(c, s, 90), p = xe(o, i, m), t) : m
                }, t.majorExtent([[-180, -90 + Oa], [180, 90 - Oa]]).minorExtent([[-180, -80 - Oa], [180, 80 + Oa]])
            }, ca.geo.greatArc = function() {
                function t() {
                    return {
                        type: "LineString",
                        coordinates: [n || r.apply(this, arguments), e || i.apply(this, arguments)]
                    }
                }
                var n, e, r = Me,
                    i = we;
                return t.distance = function() {
                    return ca.geo.distance(n || r.apply(this, arguments), e || i.apply(this, arguments))
                }, t.source = function(e) {
                    return arguments.length ? (r = e, n = "function" == typeof e ? null : e, t) : r
                }, t.target = function(n) {
                    return arguments.length ? (i = n, e = "function" == typeof n ? null : n, t) : i
                }, t.precision = function() {
                    return arguments.length ? t : 0
                }, t
            }, ca.geo.interpolate = function(t, n) {
                return be(t[0] * Wa, t[1] * Wa, n[0] * Wa, n[1] * Wa)
            }, ca.geo.length = function(t) {
                return Qu = 0, ca.geo.stream(t, Ju), Qu
            };
            var Qu, Ju = {
                    sphere: b,
                    point: b,
                    lineStart: _e,
                    lineEnd: b,
                    polygonStart: b,
                    polygonEnd: b
                },
                Ku = ke(function(t) {
                    return Math.sqrt(2 / (1 + t))
                }, function(t) {
                    return 2 * Math.asin(t / 2)
                });
            (ca.geo.azimuthalEqualArea = function() {
                return ue(Ku)
            }).raw = Ku;
            var ts = ke(function(t) {
                var n = Math.acos(t);
                return n && n / Math.sin(n)
            }, x);
            (ca.geo.azimuthalEquidistant = function() {
                return ue(ts)
            }).raw = ts, (ca.geo.conicConformal = function() {
                return Vn(Ee)
            }).raw = Ee, (ca.geo.conicEquidistant = function() {
                return Vn(Te)
            }).raw = Te;
            var ns = ke(function(t) {
                return 1 / t
            }, Math.atan);
            (ca.geo.gnomonic = function() {
                return ue(ns)
            }).raw = ns, Ce.invert = function(t, n) {
                return [t, 2 * Math.atan(Math.exp(n)) - Ha]
            }, (ca.geo.mercator = function() {
                return Se(Ce)
            }).raw = Ce;
            var es = ke(function() {
                return 1
            }, Math.asin);
            (ca.geo.orthographic = function() {
                return ue(es)
            }).raw = es;
            var rs = ke(function(t) {
                return 1 / (1 + t)
            }, function(t) {
                return 2 * Math.atan(t)
            });
            (ca.geo.stereographic = function() {
                return ue(rs)
            }).raw = rs, Ne.invert = function(t, n) {
                return [-n, 2 * Math.atan(Math.exp(t)) - Ha]
            }, (ca.geo.transverseMercator = function() {
                var t = Se(Ne),
                    n = t.center,
                    e = t.rotate;
                return t.center = function(t) {
                    return t ? n([-t[1], t[0]]) : (t = n(), [t[1], -t[0]])
                }, t.rotate = function(t) {
                    return t ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = e(), [t[0], t[1], t[2] - 90])
                }, e([0, 0, 90])
            }).raw = Ne, ca.geom = {}, ca.geom.hull = function(t) {
                function n(t) {
                    if (t.length < 3) return [];
                    var n, i = Ct(e),
                        o = Ct(r),
                        a = t.length,
                        u = [],
                        s = [];
                    for (n = 0; n < a; n++) u.push([+i.call(this, t[n], n), +o.call(this, t[n], n), n]);
                    for (u.sort(Pe), n = 0; n < a; n++) s.push([u[n][0], -u[n][1]]);
                    var c = ze(u),
                        l = ze(s),
                        f = l[0] === c[0],
                        h = l[l.length - 1] === c[c.length - 1],
                        p = [];
                    for (n = c.length - 1; n >= 0; --n) p.push(t[u[c[n]][2]]);
                    for (n = +f; n < l.length - h; ++n) p.push(t[u[l[n]][2]]);
                    return p
                }
                var e = Ae,
                    r = Ie;
                return arguments.length ? n(t) : (n.x = function(t) {
                    return arguments.length ? (e = t, n) : e
                }, n.y = function(t) {
                    return arguments.length ? (r = t, n) : r
                }, n)
            }, ca.geom.polygon = function(t) {
                return Ta(t, is), t
            };
            var is = ca.geom.polygon.prototype = [];
            is.area = function() {
                for (var t, n = -1, e = this.length, r = this[e - 1], i = 0; ++n < e;) t = r, r = this[n], i += t[1] * r[0] - t[0] * r[1];
                return .5 * i
            }, is.centroid = function(t) {
                var n, e, r = -1,
                    i = this.length,
                    o = 0,
                    a = 0,
                    u = this[i - 1];
                for (arguments.length || (t = -1 / (6 * this.area())); ++r < i;) n = u, u = this[r], e = n[0] * u[1] - u[0] * n[1], o += (n[0] + u[0]) * e, a += (n[1] + u[1]) * e;
                return [o * t, a * t]
            }, is.clip = function(t) {
                for (var n, e, r, i, o, a, u = Re(t), s = -1, c = this.length - Re(this), l = this[c - 1]; ++s < c;) {
                    for (n = t.slice(), t.length = 0, i = this[s], o = n[(r = n.length - u) - 1], e = -1; ++e < r;) a = n[e], Le(a, l, i) ? (Le(o, l, i) || t.push(De(o, a, l, i)), t.push(a)) : Le(o, l, i) && t.push(De(o, a, l, i)), o = a;
                    u && t.push(t[0]), l = i
                }
                return t
            };
            var os, as, us, ss, cs, ls = [],
                fs = [];
            We.prototype.prepare = function() {
                for (var t, n = this.edges, e = n.length; e--;) t = n[e].edge, t.b && t.a || n.splice(e, 1);
                return n.sort(Ve), n.length
            }, er.prototype = {
                start: function() {
                    return this.edge.l === this.site ? this.edge.a : this.edge.b
                },
                end: function() {
                    return this.edge.l === this.site ? this.edge.b : this.edge.a
                }
            }, rr.prototype = {
                insert: function(t, n) {
                    var e, r, i;
                    if (t) {
                        if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                            for (t = t.R; t.L;) t = t.L;
                            t.L = n
                        } else t.R = n;
                        e = t
                    } else this._ ? (t = ur(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
                    for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) r = e.U, e === r.L ? (i = r.R, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (or(this, e), t = e, e = t.U), e.C = !1, r.C = !0, ar(this, r))) : (i = r.L, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (ar(this, e), t = e, e = t.U), e.C = !1, r.C = !0, or(this, r))), e = t.U;
                    this._.C = !1
                },
                remove: function(t) {
                    t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                    var n, e, r, i = t.U,
                        o = t.L,
                        a = t.R;
                    if (e = o ? a ? ur(a) : o : a, i ? i.L === t ? i.L = e : i.R = e : this._ = e, o && a ? (r = e.C, e.C = t.C, e.L = o, o.U = e, e !== a ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = a, a.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r) {
                        if (t && t.C) return void(t.C = !1);
                        do {
                            if (t === this._) break;
                            if (t === i.L) {
                                if (n = i.R, n.C && (n.C = !1, i.C = !0, or(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
                                    n.R && n.R.C || (n.L.C = !1, n.C = !0, ar(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, or(this, i), t = this._;
                                    break
                                }
                            } else if (n = i.L, n.C && (n.C = !1, i.C = !0, ar(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
                                n.L && n.L.C || (n.R.C = !1, n.C = !0, or(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, ar(this, i), t = this._;
                                break
                            }
                            n.C = !0, t = i, i = i.U
                        } while (!t.C);
                        t && (t.C = !1)
                    }
                }
            }, ca.geom.voronoi = function(t) {
                function n(t) {
                    var n = new Array(t.length),
                        r = u[0][0],
                        i = u[0][1],
                        o = u[1][0],
                        a = u[1][1];
                    return sr(e(t), u).cells.forEach(function(e, u) {
                        var s = e.edges,
                            c = e.site,
                            l = n[u] = s.length ? s.map(function(t) {
                                var n = t.start();
                                return [n.x, n.y]
                            }) : c.x >= r && c.x <= o && c.y >= i && c.y <= a ? [[r, a], [o, a], [o, i], [r, i]] : [];
                        l.point = t[u]
                    }), n
                }

                function e(t) {
                    return t.map(function(t, n) {
                        return {
                            x: Math.round(o(t, n) / Oa) * Oa,
                            y: Math.round(a(t, n) / Oa) * Oa,
                            i: n
                        }
                    })
                }
                var r = Ae,
                    i = Ie,
                    o = r,
                    a = i,
                    u = hs;
                return t ? n(t) : (n.links = function(t) {
                    return sr(e(t)).edges.filter(function(t) {
                        return t.l && t.r
                    }).map(function(n) {
                        return {
                            source: t[n.l.i],
                            target: t[n.r.i]
                        }
                    })
                }, n.triangles = function(t) {
                    var n = [];
                    return sr(e(t)).cells.forEach(function(e, r) {
                        for (var i, o, a = e.site, u = e.edges.sort(Ve), s = -1, c = u.length, l = u[c - 1].edge, f = l.l === a ? l.r : l.l; ++s < c;) i = l, o = f, l = u[s].edge, f = l.l === a ? l.r : l.l, r < o.i && r < f.i && lr(a, o, f) < 0 && n.push([t[r], t[o.i], t[f.i]])
                    }), n
                }, n.x = function(t) {
                    return arguments.length ? (o = Ct(r = t), n) : r
                }, n.y = function(t) {
                    return arguments.length ? (a = Ct(i = t), n) : i
                }, n.clipExtent = function(t) {
                    return arguments.length ? (u = null == t ? hs : t, n) : u === hs ? null : u
                }, n.size = function(t) {
                    return arguments.length ? n.clipExtent(t && [[0, 0], t]) : u === hs ? null : u && u[1]
                }, n)
            };
            var hs = [[-1e6, -1e6], [1e6, 1e6]];
            ca.geom.delaunay = function(t) {
                return ca.geom.voronoi().triangles(t)
            }, ca.geom.quadtree = function(t, n, e, r, i) {
                function o(t) {
                    function o(t, n, e, r, i, o, a, u) {
                        if (!isNaN(e) && !isNaN(r))
                            if (t.leaf) {
                                var s = t.x,
                                    l = t.y;
                                if (null != s)
                                    if (wa(s - e) + wa(l - r) < .01) c(t, n, e, r, i, o, a, u);
                                    else {
                                        var f = t.point;
                                        t.x = t.y = t.point = null, c(t, f, s, l, i, o, a, u), c(t, n, e, r, i, o, a, u)
                                    }
                                else t.x = e, t.y = r, t.point = n
                            } else c(t, n, e, r, i, o, a, u)
                    }

                    function c(t, n, e, r, i, a, u, s) {
                        var c = .5 * (i + u),
                            l = .5 * (a + s),
                            f = e >= c,
                            h = r >= l,
                            p = h << 1 | f;
                        t.leaf = !1, t = t.nodes[p] || (t.nodes[p] = pr()), f ? i = c : u = c, h ? a = l : s = l, o(t, n, e, r, i, a, u, s)
                    }
                    var l, f, h, p, d, g, v, y, m, x = Ct(u),
                        M = Ct(s);
                    if (null != n) g = n, v = e, y = r, m = i;
                    else if (y = m = -(g = v = 1 / 0), f = [], h = [], d = t.length, a)
                        for (p = 0; p < d; ++p) l = t[p], l.x < g && (g = l.x), l.y < v && (v = l.y), l.x > y && (y = l.x), l.y > m && (m = l.y), f.push(l.x), h.push(l.y);
                    else
                        for (p = 0; p < d; ++p) {
                            var w = +x(l = t[p], p),
                                b = +M(l, p);
                            w < g && (g = w), b < v && (v = b), w > y && (y = w), b > m && (m = b), f.push(w), h.push(b)
                        }
                    var _ = y - g,
                        k = m - v;
                    _ > k ? m = v + _ : y = g + k;
                    var E = pr();
                    if (E.add = function(t) {
                            o(E, t, +x(t, ++p), +M(t, p), g, v, y, m)
                        }, E.visit = function(t) {
                            dr(t, E, g, v, y, m)
                        }, E.find = function(t) {
                            return gr(E, t[0], t[1], g, v, y, m)
                        }, p = -1, null == n) {
                        for (; ++p < d;) o(E, t[p], f[p], h[p], g, v, y, m);
                        --p
                    } else t.forEach(E.add);
                    return f = h = t = l = null, E
                }
                var a, u = Ae,
                    s = Ie;
                return (a = arguments.length) ? (u = fr, s = hr, 3 === a && (i = e, r = n, e = n = 0), o(t)) : (o.x = function(t) {
                    return arguments.length ? (u = t, o) : u
                }, o.y = function(t) {
                    return arguments.length ? (s = t, o) : s
                }, o.extent = function(t) {
                    return arguments.length ? (null == t ? n = e = r = i = null : (n = +t[0][0], e = +t[0][1], r = +t[1][0], i = +t[1][1]), o) : null == n ? null : [[n, e], [r, i]]
                }, o.size = function(t) {
                    return arguments.length ? (null == t ? n = e = r = i = null : (n = e = 0, r = +t[0], i = +t[1]), o) : null == n ? null : [r - n, i - e]
                }, o)
            }, ca.interpolateRgb = vr, ca.interpolateObject = yr, ca.interpolateNumber = mr, ca.interpolateString = xr;
            var ps = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                ds = new RegExp(ps.source, "g");
            ca.interpolate = Mr, ca.interpolators = [function(t, n) {
                var e = typeof n;
                return ("string" === e ? au.has(n.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(n) ? vr : xr : n instanceof ut ? vr : Array.isArray(n) ? wr : "object" === e && isNaN(n) ? yr : mr)(t, n)
            }], ca.interpolateArray = wr;
            var gs = function() {
                    return x
                },
                vs = ca.map({
                    linear: gs,
                    poly: Sr,
                    quad: function() {
                        return Er
                    },
                    cubic: function() {
                        return Tr
                    },
                    sin: function() {
                        return Nr
                    },
                    exp: function() {
                        return Ar
                    },
                    circle: function() {
                        return Ir
                    },
                    elastic: zr,
                    back: Pr,
                    bounce: function() {
                        return Lr
                    }
                }),
                ys = ca.map({
                    "in": x,
                    out: _r,
                    "in-out": kr,
                    "out-in": function(t) {
                        return kr(_r(t))
                    }
                });
            ca.ease = function(t) {
                var n = t.indexOf("-"),
                    e = n >= 0 ? t.slice(0, n) : t,
                    r = n >= 0 ? t.slice(n + 1) : "in";
                return e = vs.get(e) || gs, r = ys.get(r) || x, br(r(e.apply(null, la.call(arguments, 1))))
            }, ca.interpolateHcl = Dr, ca.interpolateHsl = Rr, ca.interpolateLab = qr, ca.interpolateRound = Or, ca.transform = function(t) {
                var n = ha.createElementNS(ca.ns.prefix.svg, "g");
                return (ca.transform = function(t) {
                    if (null != t) {
                        n.setAttribute("transform", t);
                        var e = n.transform.baseVal.consolidate()
                    }
                    return new jr(e ? e.matrix : ms)
                })(t)
            }, jr.prototype.toString = function() {
                return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
            };
            var ms = {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: 0,
                f: 0
            };
            ca.interpolateTransform = Xr, ca.layout = {}, ca.layout.bundle = function() {
                return function(t) {
                    for (var n = [], e = -1, r = t.length; ++e < r;) n.push(Qr(t[e]));
                    return n
                }
            }, ca.layout.chord = function() {
                function t() {
                    var t, c, f, h, p, d = {},
                        g = [],
                        v = ca.range(o),
                        y = [];
                    for (e = [], r = [], t = 0, h = -1; ++h < o;) {
                        for (c = 0, p = -1; ++p < o;) c += i[h][p];
                        g.push(c), y.push(ca.range(o)), t += c
                    }
                    for (a && v.sort(function(t, n) {
                            return a(g[t], g[n])
                        }), u && y.forEach(function(t, n) {
                            t.sort(function(t, e) {
                                return u(i[n][t], i[n][e])
                            })
                        }), t = ($a - l * o) / t, c = 0, h = -1; ++h < o;) {
                        for (f = c, p = -1; ++p < o;) {
                            var m = v[h],
                                x = y[m][p],
                                M = i[m][x],
                                w = c,
                                b = c += M * t;
                            d[m + "-" + x] = {
                                index: m,
                                subindex: x,
                                startAngle: w,
                                endAngle: b,
                                value: M
                            }
                        }
                        r[m] = {
                            index: m,
                            startAngle: f,
                            endAngle: c,
                            value: g[m]
                        }, c += l
                    }
                    for (h = -1; ++h < o;)
                        for (p = h - 1; ++p < o;) {
                            var _ = d[h + "-" + p],
                                k = d[p + "-" + h];
                            (_.value || k.value) && e.push(_.value < k.value ? {
                                source: k,
                                target: _
                            } : {
                                source: _,
                                target: k
                            })
                        }
                    s && n()
                }

                function n() {
                    e.sort(function(t, n) {
                        return s((t.source.value + t.target.value) / 2, (n.source.value + n.target.value) / 2)
                    })
                }
                var e, r, i, o, a, u, s, c = {},
                    l = 0;
                return c.matrix = function(t) {
                    return arguments.length ? (o = (i = t) && i.length, e = r = null, c) : i
                }, c.padding = function(t) {
                    return arguments.length ? (l = t, e = r = null, c) : l
                }, c.sortGroups = function(t) {
                    return arguments.length ? (a = t, e = r = null, c) : a
                }, c.sortSubgroups = function(t) {
                    return arguments.length ? (u = t, e = null, c) : u
                }, c.sortChords = function(t) {
                    return arguments.length ? (s = t, e && n(), c) : s
                }, c.chords = function() {
                    return e || t(), e
                }, c.groups = function() {
                    return r || t(), r
                }, c
            }, ca.layout.force = function() {
                function t(t) {
                    return function(n, e, r, i) {
                        if (n.point !== t) {
                            var o = n.cx - t.x,
                                a = n.cy - t.y,
                                u = i - e,
                                s = o * o + a * a;
                            if (u * u / y < s) {
                                if (s < g) {
                                    var c = n.charge / s;
                                    t.px -= o * c, t.py -= a * c
                                }
                                return !0
                            }
                            if (n.point && s && s < g) {
                                var c = n.pointCharge / s;
                                t.px -= o * c, t.py -= a * c
                            }
                        }
                        return !n.charge
                    }
                }

                function n(t) {
                    t.px = ca.event.x, t.py = ca.event.y, s.resume()
                }
                var e, r, i, o, a, u, s = {},
                    c = ca.dispatch("start", "tick", "end"),
                    l = [1, 1],
                    f = .9,
                    h = xs,
                    p = Ms,
                    d = -30,
                    g = ws,
                    v = .1,
                    y = .64,
                    m = [],
                    M = [];
                return s.tick = function() {
                    if ((i *= .99) < .005) return e = null, c.end({
                        type: "end",
                        alpha: i = 0
                    }), !0;
                    var n, r, s, h, p, g, y, x, w, b = m.length,
                        _ = M.length;
                    for (r = 0; r < _; ++r) s = M[r], h = s.source, p = s.target, x = p.x - h.x, w = p.y - h.y, (g = x * x + w * w) && (g = i * a[r] * ((g = Math.sqrt(g)) - o[r]) / g, x *= g, w *= g, p.x -= x * (y = h.weight + p.weight ? h.weight / (h.weight + p.weight) : .5), p.y -= w * y, h.x += x * (y = 1 - y), h.y += w * y);
                    if ((y = i * v) && (x = l[0] / 2, w = l[1] / 2, r = -1, y))
                        for (; ++r < b;) s = m[r], s.x += (x - s.x) * y, s.y += (w - s.y) * y;
                    if (d)
                        for (ii(n = ca.geom.quadtree(m), i, u), r = -1; ++r < b;)(s = m[r]).fixed || n.visit(t(s));
                    for (r = -1; ++r < b;) s = m[r], s.fixed ? (s.x = s.px, s.y = s.py) : (s.x -= (s.px - (s.px = s.x)) * f, s.y -= (s.py - (s.py = s.y)) * f);
                    c.tick({
                        type: "tick",
                        alpha: i
                    })
                }, s.nodes = function(t) {
                    return arguments.length ? (m = t, s) : m
                }, s.links = function(t) {
                    return arguments.length ? (M = t, s) : M
                }, s.size = function(t) {
                    return arguments.length ? (l = t, s) : l
                }, s.linkDistance = function(t) {
                    return arguments.length ? (h = "function" == typeof t ? t : +t, s) : h
                }, s.distance = s.linkDistance, s.linkStrength = function(t) {
                    return arguments.length ? (p = "function" == typeof t ? t : +t, s) : p
                }, s.friction = function(t) {
                    return arguments.length ? (f = +t, s) : f
                }, s.charge = function(t) {
                    return arguments.length ? (d = "function" == typeof t ? t : +t, s) : d
                }, s.chargeDistance = function(t) {
                    return arguments.length ? (g = t * t, s) : Math.sqrt(g)
                }, s.gravity = function(t) {
                    return arguments.length ? (v = +t, s) : v
                }, s.theta = function(t) {
                    return arguments.length ? (y = t * t, s) : Math.sqrt(y)
                }, s.alpha = function(t) {
                    return arguments.length ? (t = +t, i ? t > 0 ? i = t : (e.c = null, e.t = NaN, e = null, c.end({
                        type: "end",
                        alpha: i = 0
                    })) : t > 0 && (c.start({
                        type: "start",
                        alpha: i = t
                    }), e = zt(s.tick)), s) : i
                }, s.start = function() {
                    function t(t, r) {
                        if (!e) {
                            for (e = new Array(i), s = 0; s < i; ++s) e[s] = [];
                            for (s = 0; s < c; ++s) {
                                var o = M[s];
                                e[o.source.index].push(o.target), e[o.target.index].push(o.source)
                            }
                        }
                        for (var a, u = e[n], s = -1, l = u.length; ++s < l;)
                            if (!isNaN(a = u[s][t])) return a;
                        return Math.random() * r
                    }
                    var n, e, r, i = m.length,
                        c = M.length,
                        f = l[0],
                        g = l[1];
                    for (n = 0; n < i; ++n)(r = m[n]).index = n, r.weight = 0;
                    for (n = 0; n < c; ++n) r = M[n], "number" == typeof r.source && (r.source = m[r.source]), "number" == typeof r.target && (r.target = m[r.target]), ++r.source.weight, ++r.target.weight;
                    for (n = 0; n < i; ++n) r = m[n], isNaN(r.x) && (r.x = t("x", f)), isNaN(r.y) && (r.y = t("y", g)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
                    if (o = [], "function" == typeof h)
                        for (n = 0; n < c; ++n) o[n] = +h.call(this, M[n], n);
                    else
                        for (n = 0; n < c; ++n) o[n] = h;
                    if (a = [], "function" == typeof p)
                        for (n = 0; n < c; ++n) a[n] = +p.call(this, M[n], n);
                    else
                        for (n = 0; n < c; ++n) a[n] = p;
                    if (u = [], "function" == typeof d)
                        for (n = 0; n < i; ++n) u[n] = +d.call(this, m[n], n);
                    else
                        for (n = 0; n < i; ++n) u[n] = d;
                    return s.resume()
                }, s.resume = function() {
                    return s.alpha(.1)
                }, s.stop = function() {
                    return s.alpha(0)
                }, s.drag = function() {
                    return r || (r = ca.behavior.drag().origin(x).on("dragstart.force", ti).on("drag.force", n).on("dragend.force", ni)), arguments.length ? void this.on("mouseover.force", ei).on("mouseout.force", ri).call(r) : r
                }, ca.rebind(s, c, "on")
            };
            var xs = 20,
                Ms = 1,
                ws = 1 / 0;
            ca.layout.hierarchy = function() {
                function t(i) {
                    var o, a = [i],
                        u = [];
                    for (i.depth = 0; null != (o = a.pop());)
                        if (u.push(o), (c = e.call(t, o, o.depth)) && (s = c.length)) {
                            for (var s, c, l; --s >= 0;) a.push(l = c[s]), l.parent = o, l.depth = o.depth + 1;
                            r && (o.value = 0), o.children = c
                        } else r && (o.value = +r.call(t, o, o.depth) || 0), delete o.children;
                    return ui(i, function(t) {
                        var e, i;
                        n && (e = t.children) && e.sort(n), r && (i = t.parent) && (i.value += t.value)
                    }), u
                }
                var n = li,
                    e = si,
                    r = ci;
                return t.sort = function(e) {
                    return arguments.length ? (n = e, t) : n
                }, t.children = function(n) {
                    return arguments.length ? (e = n, t) : e
                }, t.value = function(n) {
                    return arguments.length ? (r = n, t) : r
                }, t.revalue = function(n) {
                    return r && (ai(n, function(t) {
                        t.children && (t.value = 0)
                    }), ui(n, function(n) {
                        var e;
                        n.children || (n.value = +r.call(t, n, n.depth) || 0), (e = n.parent) && (e.value += n.value)
                    })), n
                }, t
            }, ca.layout.partition = function() {
                function t(n, e, r, i) {
                    var o = n.children;
                    if (n.x = e, n.y = n.depth * i, n.dx = r, n.dy = i, o && (a = o.length)) {
                        var a, u, s, c = -1;
                        for (r = n.value ? r / n.value : 0; ++c < a;) t(u = o[c], e, s = u.value * r, i), e += s
                    }
                }

                function n(t) {
                    var e = t.children,
                        r = 0;
                    if (e && (i = e.length))
                        for (var i, o = -1; ++o < i;) r = Math.max(r, n(e[o]));
                    return 1 + r
                }

                function e(e, o) {
                    var a = r.call(this, e, o);
                    return t(a[0], 0, i[0], i[1] / n(a[0])), a
                }
                var r = ca.layout.hierarchy(),
                    i = [1, 1];
                return e.size = function(t) {
                    return arguments.length ? (i = t, e) : i
                }, oi(e, r)
            }, ca.layout.pie = function() {
                function t(a) {
                    var u, s = a.length,
                        c = a.map(function(e, r) {
                            return +n.call(t, e, r)
                        }),
                        l = +("function" == typeof r ? r.apply(this, arguments) : r),
                        f = ("function" == typeof i ? i.apply(this, arguments) : i) - l,
                        h = Math.min(Math.abs(f) / s, +("function" == typeof o ? o.apply(this, arguments) : o)),
                        p = h * (f < 0 ? -1 : 1),
                        d = ca.sum(c),
                        g = d ? (f - s * p) / d : 0,
                        v = ca.range(s),
                        y = [];
                    return null != e && v.sort(e === bs ? function(t, n) {
                        return c[n] - c[t]
                    } : function(t, n) {
                        return e(a[t], a[n])
                    }), v.forEach(function(t) {
                        y[t] = {
                            data: a[t],
                            value: u = c[t],
                            startAngle: l,
                            endAngle: l += u * g + p,
                            padAngle: h
                        }
                    }), y
                }
                var n = Number,
                    e = bs,
                    r = 0,
                    i = $a,
                    o = 0;
                return t.value = function(e) {
                    return arguments.length ? (n = e, t) : n
                }, t.sort = function(n) {
                    return arguments.length ? (e = n, t) : e
                }, t.startAngle = function(n) {
                    return arguments.length ? (r = n, t) : r
                }, t.endAngle = function(n) {
                    return arguments.length ? (i = n, t) : i
                }, t.padAngle = function(n) {
                    return arguments.length ? (o = n, t) : o
                }, t
            };
            var bs = {};
            ca.layout.stack = function() {
                function t(u, s) {
                    if (!(h = u.length)) return u;
                    var c = u.map(function(e, r) {
                            return n.call(t, e, r)
                        }),
                        l = c.map(function(n) {
                            return n.map(function(n, e) {
                                return [o.call(t, n, e), a.call(t, n, e)]
                            })
                        }),
                        f = e.call(t, l, s);
                    c = ca.permute(c, f), l = ca.permute(l, f);
                    var h, p, d, g, v = r.call(t, l, s),
                        y = c[0].length;
                    for (d = 0; d < y; ++d)
                        for (i.call(t, c[0][d], g = v[d], l[0][d][1]), p = 1; p < h; ++p) i.call(t, c[p][d], g += l[p - 1][d][1], l[p][d][1]);
                    return u
                }
                var n = x,
                    e = gi,
                    r = vi,
                    i = di,
                    o = hi,
                    a = pi;
                return t.values = function(e) {
                    return arguments.length ? (n = e, t) : n
                }, t.order = function(n) {
                    return arguments.length ? (e = "function" == typeof n ? n : _s.get(n) || gi, t) : e
                }, t.offset = function(n) {
                    return arguments.length ? (r = "function" == typeof n ? n : ks.get(n) || vi, t) : r
                }, t.x = function(n) {
                    return arguments.length ? (o = n, t) : o
                }, t.y = function(n) {
                    return arguments.length ? (a = n, t) : a
                }, t.out = function(n) {
                    return arguments.length ? (i = n, t) : i
                }, t
            };
            var _s = ca.map({
                    "inside-out": function(t) {
                        var n, e, r = t.length,
                            i = t.map(yi),
                            o = t.map(mi),
                            a = ca.range(r).sort(function(t, n) {
                                return i[t] - i[n]
                            }),
                            u = 0,
                            s = 0,
                            c = [],
                            l = [];
                        for (n = 0; n < r; ++n) e = a[n], u < s ? (u += o[e], c.push(e)) : (s += o[e], l.push(e));
                        return l.reverse().concat(c)
                    },
                    reverse: function(t) {
                        return ca.range(t.length).reverse()
                    },
                    "default": gi
                }),
                ks = ca.map({
                    silhouette: function(t) {
                        var n, e, r, i = t.length,
                            o = t[0].length,
                            a = [],
                            u = 0,
                            s = [];
                        for (e = 0; e < o; ++e) {
                            for (n = 0, r = 0; n < i; n++) r += t[n][e][1];
                            r > u && (u = r), a.push(r)
                        }
                        for (e = 0; e < o; ++e) s[e] = (u - a[e]) / 2;
                        return s
                    },
                    wiggle: function(t) {
                        var n, e, r, i, o, a, u, s, c, l = t.length,
                            f = t[0],
                            h = f.length,
                            p = [];
                        for (p[0] = s = c = 0, e = 1; e < h; ++e) {
                            for (n = 0, i = 0; n < l; ++n) i += t[n][e][1];
                            for (n = 0, o = 0, u = f[e][0] - f[e - 1][0]; n < l; ++n) {
                                for (r = 0, a = (t[n][e][1] - t[n][e - 1][1]) / (2 * u); r < n; ++r) a += (t[r][e][1] - t[r][e - 1][1]) / u;
                                o += a * t[n][e][1]
                            }
                            p[e] = s -= i ? o / i * u : 0, s < c && (c = s)
                        }
                        for (e = 0; e < h; ++e) p[e] -= c;
                        return p
                    },
                    expand: function(t) {
                        var n, e, r, i = t.length,
                            o = t[0].length,
                            a = 1 / i,
                            u = [];
                        for (e = 0; e < o; ++e) {
                            for (n = 0, r = 0; n < i; n++) r += t[n][e][1];
                            if (r)
                                for (n = 0; n < i; n++) t[n][e][1] /= r;
                            else
                                for (n = 0; n < i; n++) t[n][e][1] = a
                        }
                        for (e = 0; e < o; ++e) u[e] = 0;
                        return u
                    },
                    zero: vi
                });
            ca.layout.histogram = function() {
                function t(t, o) {
                    for (var a, u, s = [], c = t.map(e, this), l = r.call(this, c, o), f = i.call(this, l, c, o), o = -1, h = c.length, p = f.length - 1, d = n ? 1 : 1 / h; ++o < p;) a = s[o] = [], a.dx = f[o + 1] - (a.x = f[o]), a.y = 0;
                    if (p > 0)
                        for (o = -1; ++o < h;) u = c[o], u >= l[0] && u <= l[1] && (a = s[ca.bisect(f, u, 1, p) - 1], a.y += d, a.push(t[o]));
                    return s
                }
                var n = !0,
                    e = Number,
                    r = bi,
                    i = Mi;
                return t.value = function(n) {
                    return arguments.length ? (e = n, t) : e
                }, t.range = function(n) {
                    return arguments.length ? (r = Ct(n), t) : r
                }, t.bins = function(n) {
                    return arguments.length ? (i = "number" == typeof n ? function(t) {
                        return wi(t, n)
                    } : Ct(n), t) : i
                }, t.frequency = function(e) {
                    return arguments.length ? (n = !!e, t) : n
                }, t
            }, ca.layout.pack = function() {
                function t(t, o) {
                    var a = e.call(this, t, o),
                        u = a[0],
                        s = i[0],
                        c = i[1],
                        l = null == n ? Math.sqrt : "function" == typeof n ? n : function() {
                            return n
                        };
                    if (u.x = u.y = 0, ui(u, function(t) {
                            t.r = +l(t.value)
                        }), ui(u, Ci), r) {
                        var f = r * (n ? 1 : Math.max(2 * u.r / s, 2 * u.r / c)) / 2;
                        ui(u, function(t) {
                            t.r += f
                        }), ui(u, Ci), ui(u, function(t) {
                            t.r -= f
                        })
                    }
                    return Ai(u, s / 2, c / 2, n ? 1 : 1 / Math.max(2 * u.r / s, 2 * u.r / c)), a
                }
                var n, e = ca.layout.hierarchy().sort(_i),
                    r = 0,
                    i = [1, 1];
                return t.size = function(n) {
                    return arguments.length ? (i = n, t) : i
                }, t.radius = function(e) {
                    return arguments.length ? (n = null == e || "function" == typeof e ? e : +e, t) : n
                }, t.padding = function(n) {
                    return arguments.length ? (r = +n, t) : r
                }, oi(t, e)
            }, ca.layout.tree = function() {
                function t(t, i) {
                    var l = a.call(this, t, i),
                        f = l[0],
                        h = n(f);
                    if (ui(h, e), h.parent.m = -h.z, ai(h, r), c) ai(f, o);
                    else {
                        var p = f,
                            d = f,
                            g = f;
                        ai(f, function(t) {
                            t.x < p.x && (p = t), t.x > d.x && (d = t), t.depth > g.depth && (g = t)
                        });
                        var v = u(p, d) / 2 - p.x,
                            y = s[0] / (d.x + u(d, p) / 2 + v),
                            m = s[1] / (g.depth || 1);
                        ai(f, function(t) {
                            t.x = (t.x + v) * y, t.y = t.depth * m
                        })
                    }
                    return l
                }

                function n(t) {
                    for (var n, e = {
                            A: null,
                            children: [t]
                        }, r = [e]; null != (n = r.pop());)
                        for (var i, o = n.children, a = 0, u = o.length; a < u; ++a) r.push((o[a] = i = {
                            _: o[a],
                            parent: n,
                            children: (i = o[a].children) && i.slice() || [],
                            A: null,
                            a: null,
                            z: 0,
                            m: 0,
                            c: 0,
                            s: 0,
                            t: null,
                            i: a
                        }).a = i);
                    return e.children[0]
                }

                function e(t) {
                    var n = t.children,
                        e = t.parent.children,
                        r = t.i ? e[t.i - 1] : null;
                    if (n.length) {
                        Ri(t);
                        var o = (n[0].z + n[n.length - 1].z) / 2;
                        r ? (t.z = r.z + u(t._, r._), t.m = t.z - o) : t.z = o
                    } else r && (t.z = r.z + u(t._, r._));
                    t.parent.A = i(t, r, t.parent.A || e[0])
                }

                function r(t) {
                    t._.x = t.z + t.parent.m, t.m += t.parent.m
                }

                function i(t, n, e) {
                    if (n) {
                        for (var r, i = t, o = t, a = n, s = i.parent.children[0], c = i.m, l = o.m, f = a.m, h = s.m; a = Li(a), i = Pi(i), a && i;) s = Pi(s), o = Li(o), o.a = t, r = a.z + f - i.z - c + u(a._, i._), r > 0 && (Di(qi(a, t, e), t, r), c += r, l += r), f += a.m, c += i.m, h += s.m, l += o.m;
                        a && !Li(o) && (o.t = a, o.m += f - l), i && !Pi(s) && (s.t = i, s.m += c - h, e = t)
                    }
                    return e
                }

                function o(t) {
                    t.x *= s[0], t.y = t.depth * s[1]
                }
                var a = ca.layout.hierarchy().sort(null).value(null),
                    u = zi,
                    s = [1, 1],
                    c = null;
                return t.separation = function(n) {
                    return arguments.length ? (u = n, t) : u
                }, t.size = function(n) {
                    return arguments.length ? (c = null == (s = n) ? o : null, t) : c ? null : s
                }, t.nodeSize = function(n) {
                    return arguments.length ? (c = null == (s = n) ? null : o, t) : c ? s : null
                }, oi(t, a)
            }, ca.layout.cluster = function() {
                function t(t, o) {
                    var a, u = n.call(this, t, o),
                        s = u[0],
                        c = 0;
                    ui(s, function(t) {
                        var n = t.children;
                        n && n.length ? (t.x = ji(n), t.y = Oi(n)) : (t.x = a ? c += e(t, a) : 0, t.y = 0, a = t)
                    });
                    var l = Ui(s),
                        f = $i(s),
                        h = l.x - e(l, f) / 2,
                        p = f.x + e(f, l) / 2;
                    return ui(s, i ? function(t) {
                        t.x = (t.x - s.x) * r[0], t.y = (s.y - t.y) * r[1]
                    } : function(t) {
                        t.x = (t.x - h) / (p - h) * r[0], t.y = (1 - (s.y ? t.y / s.y : 1)) * r[1]
                    }), u
                }
                var n = ca.layout.hierarchy().sort(null).value(null),
                    e = zi,
                    r = [1, 1],
                    i = !1;
                return t.separation = function(n) {
                    return arguments.length ? (e = n, t) : e
                }, t.size = function(n) {
                    return arguments.length ? (i = null == (r = n), t) : i ? null : r
                }, t.nodeSize = function(n) {
                    return arguments.length ? (i = null != (r = n), t) : i ? r : null
                }, oi(t, n)
            }, ca.layout.treemap = function() {
                function t(t, n) {
                    for (var e, r, i = -1, o = t.length; ++i < o;) r = (e = t[i]).value * (n < 0 ? 0 : n), e.area = isNaN(r) || r <= 0 ? 0 : r
                }

                function n(e) {
                    var o = e.children;
                    if (o && o.length) {
                        var a, u, s, c = f(e),
                            l = [],
                            h = o.slice(),
                            d = 1 / 0,
                            g = "slice" === p ? c.dx : "dice" === p ? c.dy : "slice-dice" === p ? 1 & e.depth ? c.dy : c.dx : Math.min(c.dx, c.dy);
                        for (t(h, c.dx * c.dy / e.value), l.area = 0;
                            (s = h.length) > 0;) l.push(a = h[s - 1]), l.area += a.area, "squarify" !== p || (u = r(l, g)) <= d ? (h.pop(), d = u) : (l.area -= l.pop().area,
                            i(l, g, c, !1), g = Math.min(c.dx, c.dy), l.length = l.area = 0, d = 1 / 0);
                        l.length && (i(l, g, c, !0), l.length = l.area = 0), o.forEach(n)
                    }
                }

                function e(n) {
                    var r = n.children;
                    if (r && r.length) {
                        var o, a = f(n),
                            u = r.slice(),
                            s = [];
                        for (t(u, a.dx * a.dy / n.value), s.area = 0; o = u.pop();) s.push(o), s.area += o.area, null != o.z && (i(s, o.z ? a.dx : a.dy, a, !u.length), s.length = s.area = 0);
                        r.forEach(e)
                    }
                }

                function r(t, n) {
                    for (var e, r = t.area, i = 0, o = 1 / 0, a = -1, u = t.length; ++a < u;)(e = t[a].area) && (e < o && (o = e), e > i && (i = e));
                    return r *= r, n *= n, r ? Math.max(n * i * d / r, r / (n * o * d)) : 1 / 0
                }

                function i(t, n, e, r) {
                    var i, o = -1,
                        a = t.length,
                        u = e.x,
                        c = e.y,
                        l = n ? s(t.area / n) : 0;
                    if (n == e.dx) {
                        for ((r || l > e.dy) && (l = e.dy); ++o < a;) i = t[o], i.x = u, i.y = c, i.dy = l, u += i.dx = Math.min(e.x + e.dx - u, l ? s(i.area / l) : 0);
                        i.z = !0, i.dx += e.x + e.dx - u, e.y += l, e.dy -= l
                    } else {
                        for ((r || l > e.dx) && (l = e.dx); ++o < a;) i = t[o], i.x = u, i.y = c, i.dx = l, c += i.dy = Math.min(e.y + e.dy - c, l ? s(i.area / l) : 0);
                        i.z = !1, i.dy += e.y + e.dy - c, e.x += l, e.dx -= l
                    }
                }

                function o(r) {
                    var i = a || u(r),
                        o = i[0];
                    return o.x = o.y = 0, o.value ? (o.dx = c[0], o.dy = c[1]) : o.dx = o.dy = 0, a && u.revalue(o), t([o], o.dx * o.dy / o.value), (a ? e : n)(o), h && (a = i), i
                }
                var a, u = ca.layout.hierarchy(),
                    s = Math.round,
                    c = [1, 1],
                    l = null,
                    f = Fi,
                    h = !1,
                    p = "squarify",
                    d = .5 * (1 + Math.sqrt(5));
                return o.size = function(t) {
                    return arguments.length ? (c = t, o) : c
                }, o.padding = function(t) {
                    function n(n) {
                        var e = t.call(o, n, n.depth);
                        return null == e ? Fi(n) : Hi(n, "number" == typeof e ? [e, e, e, e] : e)
                    }

                    function e(n) {
                        return Hi(n, t)
                    }
                    if (!arguments.length) return l;
                    var r;
                    return f = null == (l = t) ? Fi : "function" == (r = typeof t) ? n : "number" === r ? (t = [t, t, t, t], e) : e, o
                }, o.round = function(t) {
                    return arguments.length ? (s = t ? Math.round : Number, o) : s != Number
                }, o.sticky = function(t) {
                    return arguments.length ? (h = t, a = null, o) : h
                }, o.ratio = function(t) {
                    return arguments.length ? (d = t, o) : d
                }, o.mode = function(t) {
                    return arguments.length ? (p = t + "", o) : p
                }, oi(o, u)
            }, ca.random = {
                normal: function(t, n) {
                    var e = arguments.length;
                    return e < 2 && (n = 1), e < 1 && (t = 0),
                        function() {
                            var e, r, i;
                            do e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, i = e * e + r * r; while (!i || i > 1);
                            return t + n * e * Math.sqrt(-2 * Math.log(i) / i)
                        }
                },
                logNormal: function() {
                    var t = ca.random.normal.apply(ca, arguments);
                    return function() {
                        return Math.exp(t())
                    }
                },
                bates: function(t) {
                    var n = ca.random.irwinHall(t);
                    return function() {
                        return n() / t
                    }
                },
                irwinHall: function(t) {
                    return function() {
                        for (var n = 0, e = 0; e < t; e++) n += Math.random();
                        return n
                    }
                }
            }, ca.scale = {};
            var Es = {
                floor: x,
                ceil: x
            };
            ca.scale.linear = function() {
                return Gi([0, 1], [0, 1], Mr, !1)
            };
            var Ts = {
                s: 1,
                g: 1,
                p: 1,
                r: 1,
                e: 1
            };
            ca.scale.log = function() {
                return io(ca.scale.linear().domain([0, 1]), 10, !0, [1, 10])
            };
            var Cs = ca.format(".0e"),
                Ss = {
                    floor: function(t) {
                        return -Math.ceil(-t)
                    },
                    ceil: function(t) {
                        return -Math.floor(-t)
                    }
                };
            ca.scale.pow = function() {
                return oo(ca.scale.linear(), 1, [0, 1])
            }, ca.scale.sqrt = function() {
                return ca.scale.pow().exponent(.5)
            }, ca.scale.ordinal = function() {
                return uo([], {
                    t: "range",
                    a: [[]]
                })
            }, ca.scale.category10 = function() {
                return ca.scale.ordinal().range(Ns)
            }, ca.scale.category20 = function() {
                return ca.scale.ordinal().range(As)
            }, ca.scale.category20b = function() {
                return ca.scale.ordinal().range(Is)
            }, ca.scale.category20c = function() {
                return ca.scale.ordinal().range(zs)
            };
            var Ns = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(Mt),
                As = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(Mt),
                Is = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(Mt),
                zs = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(Mt);
            ca.scale.quantile = function() {
                return so([], [])
            }, ca.scale.quantize = function() {
                return co(0, 1, [0, 1])
            }, ca.scale.threshold = function() {
                return lo([.5], [0, 1])
            }, ca.scale.identity = function() {
                return fo([0, 1])
            }, ca.svg = {}, ca.svg.arc = function() {
                function t() {
                    var t = Math.max(0, +e.apply(this, arguments)),
                        c = Math.max(0, +r.apply(this, arguments)),
                        l = a.apply(this, arguments) - Ha,
                        f = u.apply(this, arguments) - Ha,
                        h = Math.abs(f - l),
                        p = l > f ? 0 : 1;
                    if (c < t && (d = c, c = t, t = d), h >= Fa) return n(c, p) + (t ? n(t, 1 - p) : "") + "Z";
                    var d, g, v, y, m, x, M, w, b, _, k, E, T = 0,
                        C = 0,
                        S = [];
                    if ((y = (+s.apply(this, arguments) || 0) / 2) && (v = o === Ps ? Math.sqrt(t * t + c * c) : +o.apply(this, arguments), p || (C *= -1), c && (C = et(v / c * Math.sin(y))), t && (T = et(v / t * Math.sin(y)))), c) {
                        m = c * Math.cos(l + C), x = c * Math.sin(l + C), M = c * Math.cos(f - C), w = c * Math.sin(f - C);
                        var N = Math.abs(f - l - 2 * C) <= Ua ? 0 : 1;
                        if (C && xo(m, x, M, w) === p ^ N) {
                            var A = (l + f) / 2;
                            m = c * Math.cos(A), x = c * Math.sin(A), M = w = null
                        }
                    } else m = x = 0;
                    if (t) {
                        b = t * Math.cos(f - T), _ = t * Math.sin(f - T), k = t * Math.cos(l + T), E = t * Math.sin(l + T);
                        var I = Math.abs(l - f + 2 * T) <= Ua ? 0 : 1;
                        if (T && xo(b, _, k, E) === 1 - p ^ I) {
                            var z = (l + f) / 2;
                            b = t * Math.cos(z), _ = t * Math.sin(z), k = E = null
                        }
                    } else b = _ = 0;
                    if (h > Oa && (d = Math.min(Math.abs(c - t) / 2, +i.apply(this, arguments))) > .001) {
                        g = t < c ^ p ? 0 : 1;
                        var P = d,
                            L = d;
                        if (h < Ua) {
                            var D = null == k ? [b, _] : null == M ? [m, x] : De([m, x], [k, E], [M, w], [b, _]),
                                R = m - D[0],
                                q = x - D[1],
                                O = M - D[0],
                                j = w - D[1],
                                U = 1 / Math.sin(Math.acos((R * O + q * j) / (Math.sqrt(R * R + q * q) * Math.sqrt(O * O + j * j))) / 2),
                                $ = Math.sqrt(D[0] * D[0] + D[1] * D[1]);
                            L = Math.min(d, (t - $) / (U - 1)), P = Math.min(d, (c - $) / (U + 1))
                        }
                        if (null != M) {
                            var F = Mo(null == k ? [b, _] : [k, E], [m, x], c, P, p),
                                H = Mo([M, w], [b, _], c, P, p);
                            d === P ? S.push("M", F[0], "A", P, ",", P, " 0 0,", g, " ", F[1], "A", c, ",", c, " 0 ", 1 - p ^ xo(F[1][0], F[1][1], H[1][0], H[1][1]), ",", p, " ", H[1], "A", P, ",", P, " 0 0,", g, " ", H[0]) : S.push("M", F[0], "A", P, ",", P, " 0 1,", g, " ", H[0])
                        } else S.push("M", m, ",", x);
                        if (null != k) {
                            var W = Mo([m, x], [k, E], t, -L, p),
                                Y = Mo([b, _], null == M ? [m, x] : [M, w], t, -L, p);
                            d === L ? S.push("L", Y[0], "A", L, ",", L, " 0 0,", g, " ", Y[1], "A", t, ",", t, " 0 ", p ^ xo(Y[1][0], Y[1][1], W[1][0], W[1][1]), ",", 1 - p, " ", W[1], "A", L, ",", L, " 0 0,", g, " ", W[0]) : S.push("L", Y[0], "A", L, ",", L, " 0 0,", g, " ", W[0])
                        } else S.push("L", b, ",", _)
                    } else S.push("M", m, ",", x), null != M && S.push("A", c, ",", c, " 0 ", N, ",", p, " ", M, ",", w), S.push("L", b, ",", _), null != k && S.push("A", t, ",", t, " 0 ", I, ",", 1 - p, " ", k, ",", E);
                    return S.push("Z"), S.join("")
                }

                function n(t, n) {
                    return "M0," + t + "A" + t + "," + t + " 0 1," + n + " 0," + -t + "A" + t + "," + t + " 0 1," + n + " 0," + t
                }
                var e = po,
                    r = go,
                    i = ho,
                    o = Ps,
                    a = vo,
                    u = yo,
                    s = mo;
                return t.innerRadius = function(n) {
                    return arguments.length ? (e = Ct(n), t) : e
                }, t.outerRadius = function(n) {
                    return arguments.length ? (r = Ct(n), t) : r
                }, t.cornerRadius = function(n) {
                    return arguments.length ? (i = Ct(n), t) : i
                }, t.padRadius = function(n) {
                    return arguments.length ? (o = n == Ps ? Ps : Ct(n), t) : o
                }, t.startAngle = function(n) {
                    return arguments.length ? (a = Ct(n), t) : a
                }, t.endAngle = function(n) {
                    return arguments.length ? (u = Ct(n), t) : u
                }, t.padAngle = function(n) {
                    return arguments.length ? (s = Ct(n), t) : s
                }, t.centroid = function() {
                    var t = (+e.apply(this, arguments) + +r.apply(this, arguments)) / 2,
                        n = (+a.apply(this, arguments) + +u.apply(this, arguments)) / 2 - Ha;
                    return [Math.cos(n) * t, Math.sin(n) * t]
                }, t
            };
            var Ps = "auto";
            ca.svg.line = function() {
                return wo(x)
            };
            var Ls = ca.map({
                linear: bo,
                "linear-closed": _o,
                step: ko,
                "step-before": Eo,
                "step-after": To,
                basis: zo,
                "basis-open": Po,
                "basis-closed": Lo,
                bundle: Do,
                cardinal: No,
                "cardinal-open": Co,
                "cardinal-closed": So,
                monotone: $o
            });
            Ls.forEach(function(t, n) {
                n.key = t, n.closed = /-closed$/.test(t)
            });
            var Ds = [0, 2 / 3, 1 / 3, 0],
                Rs = [0, 1 / 3, 2 / 3, 0],
                qs = [0, 1 / 6, 2 / 3, 1 / 6];
            ca.svg.line.radial = function() {
                var t = wo(Fo);
                return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t
            }, Eo.reverse = To, To.reverse = Eo, ca.svg.area = function() {
                return Ho(x)
            }, ca.svg.area.radial = function() {
                var t = Ho(Fo);
                return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t
            }, ca.svg.chord = function() {
                function t(t, u) {
                    var s = n(this, o, t, u),
                        c = n(this, a, t, u);
                    return "M" + s.p0 + r(s.r, s.p1, s.a1 - s.a0) + (e(s, c) ? i(s.r, s.p1, s.r, s.p0) : i(s.r, s.p1, c.r, c.p0) + r(c.r, c.p1, c.a1 - c.a0) + i(c.r, c.p1, s.r, s.p0)) + "Z"
                }

                function n(t, n, e, r) {
                    var i = n.call(t, e, r),
                        o = u.call(t, i, r),
                        a = s.call(t, i, r) - Ha,
                        l = c.call(t, i, r) - Ha;
                    return {
                        r: o,
                        a0: a,
                        a1: l,
                        p0: [o * Math.cos(a), o * Math.sin(a)],
                        p1: [o * Math.cos(l), o * Math.sin(l)]
                    }
                }

                function e(t, n) {
                    return t.a0 == n.a0 && t.a1 == n.a1
                }

                function r(t, n, e) {
                    return "A" + t + "," + t + " 0 " + +(e > Ua) + ",1 " + n
                }

                function i(t, n, e, r) {
                    return "Q 0,0 " + r
                }
                var o = Me,
                    a = we,
                    u = Wo,
                    s = vo,
                    c = yo;
                return t.radius = function(n) {
                    return arguments.length ? (u = Ct(n), t) : u
                }, t.source = function(n) {
                    return arguments.length ? (o = Ct(n), t) : o
                }, t.target = function(n) {
                    return arguments.length ? (a = Ct(n), t) : a
                }, t.startAngle = function(n) {
                    return arguments.length ? (s = Ct(n), t) : s
                }, t.endAngle = function(n) {
                    return arguments.length ? (c = Ct(n), t) : c
                }, t
            }, ca.svg.diagonal = function() {
                function t(t, i) {
                    var o = n.call(this, t, i),
                        a = e.call(this, t, i),
                        u = (o.y + a.y) / 2,
                        s = [o, {
                            x: o.x,
                            y: u
                        }, {
                            x: a.x,
                            y: u
                        }, a];
                    return s = s.map(r), "M" + s[0] + "C" + s[1] + " " + s[2] + " " + s[3]
                }
                var n = Me,
                    e = we,
                    r = Yo;
                return t.source = function(e) {
                    return arguments.length ? (n = Ct(e), t) : n
                }, t.target = function(n) {
                    return arguments.length ? (e = Ct(n), t) : e
                }, t.projection = function(n) {
                    return arguments.length ? (r = n, t) : r
                }, t
            }, ca.svg.diagonal.radial = function() {
                var t = ca.svg.diagonal(),
                    n = Yo,
                    e = t.projection;
                return t.projection = function(t) {
                    return arguments.length ? e(Vo(n = t)) : n
                }, t
            }, ca.svg.symbol = function() {
                function t(t, r) {
                    return (Os.get(n.call(this, t, r)) || Zo)(e.call(this, t, r))
                }
                var n = Xo,
                    e = Bo;
                return t.type = function(e) {
                    return arguments.length ? (n = Ct(e), t) : n
                }, t.size = function(n) {
                    return arguments.length ? (e = Ct(n), t) : e
                }, t
            };
            var Os = ca.map({
                circle: Zo,
                cross: function(t) {
                    var n = Math.sqrt(t / 5) / 2;
                    return "M" + -3 * n + "," + -n + "H" + -n + "V" + -3 * n + "H" + n + "V" + -n + "H" + 3 * n + "V" + n + "H" + n + "V" + 3 * n + "H" + -n + "V" + n + "H" + -3 * n + "Z"
                },
                diamond: function(t) {
                    var n = Math.sqrt(t / (2 * Us)),
                        e = n * Us;
                    return "M0," + -n + "L" + e + ",0 0," + n + " " + -e + ",0Z"
                },
                square: function(t) {
                    var n = Math.sqrt(t) / 2;
                    return "M" + -n + "," + -n + "L" + n + "," + -n + " " + n + "," + n + " " + -n + "," + n + "Z"
                },
                "triangle-down": function(t) {
                    var n = Math.sqrt(t / js),
                        e = n * js / 2;
                    return "M0," + e + "L" + n + "," + -e + " " + -n + "," + -e + "Z"
                },
                "triangle-up": function(t) {
                    var n = Math.sqrt(t / js),
                        e = n * js / 2;
                    return "M0," + -e + "L" + n + "," + e + " " + -n + "," + e + "Z"
                }
            });
            ca.svg.symbolTypes = Os.keys();
            var js = Math.sqrt(3),
                Us = Math.tan(30 * Wa);
            Aa.transition = function(t) {
                for (var n, e, r = $s || ++Ys, i = ta(t), o = [], a = Fs || {
                        time: Date.now(),
                        ease: Cr,
                        delay: 0,
                        duration: 250
                    }, u = -1, s = this.length; ++u < s;) {
                    o.push(n = []);
                    for (var c = this[u], l = -1, f = c.length; ++l < f;)(e = c[l]) && na(e, l, i, r, a), n.push(e)
                }
                return Qo(o, i, r)
            }, Aa.interrupt = function(t) {
                return this.each(null == t ? Hs : Go(ta(t)))
            };
            var $s, Fs, Hs = Go(ta()),
                Ws = [],
                Ys = 0;
            Ws.call = Aa.call, Ws.empty = Aa.empty, Ws.node = Aa.node, Ws.size = Aa.size, ca.transition = function(t, n) {
                return t && t.transition ? $s ? t.transition(n) : t : ca.selection().transition(t)
            }, ca.transition.prototype = Ws, Ws.select = function(t) {
                var n, e, r, i = this.id,
                    o = this.namespace,
                    a = [];
                t = N(t);
                for (var u = -1, s = this.length; ++u < s;) {
                    a.push(n = []);
                    for (var c = this[u], l = -1, f = c.length; ++l < f;)(r = c[l]) && (e = t.call(r, r.__data__, l, u)) ? ("__data__" in r && (e.__data__ = r.__data__), na(e, l, o, i, r[o][i]), n.push(e)) : n.push(null)
                }
                return Qo(a, o, i)
            }, Ws.selectAll = function(t) {
                var n, e, r, i, o, a = this.id,
                    u = this.namespace,
                    s = [];
                t = A(t);
                for (var c = -1, l = this.length; ++c < l;)
                    for (var f = this[c], h = -1, p = f.length; ++h < p;)
                        if (r = f[h]) {
                            o = r[u][a], e = t.call(r, r.__data__, h, c), s.push(n = []);
                            for (var d = -1, g = e.length; ++d < g;)(i = e[d]) && na(i, d, u, a, o), n.push(i)
                        } return Qo(s, u, a)
            }, Ws.filter = function(t) {
                var n, e, r, i = [];
                "function" != typeof t && (t = F(t));
                for (var o = 0, a = this.length; o < a; o++) {
                    i.push(n = []);
                    for (var e = this[o], u = 0, s = e.length; u < s; u++)(r = e[u]) && t.call(r, r.__data__, u, o) && n.push(r)
                }
                return Qo(i, this.namespace, this.id)
            }, Ws.tween = function(t, n) {
                var e = this.id,
                    r = this.namespace;
                return arguments.length < 2 ? this.node()[r][e].tween.get(t) : W(this, null == n ? function(n) {
                    n[r][e].tween.remove(t)
                } : function(i) {
                    i[r][e].tween.set(t, n)
                })
            }, Ws.attr = function(t, n) {
                function e() {
                    this.removeAttribute(u)
                }

                function r() {
                    this.removeAttributeNS(u.space, u.local)
                }

                function i(t) {
                    return null == t ? e : (t += "", function() {
                        var n, e = this.getAttribute(u);
                        return e !== t && (n = a(e, t), function(t) {
                            this.setAttribute(u, n(t))
                        })
                    })
                }

                function o(t) {
                    return null == t ? r : (t += "", function() {
                        var n, e = this.getAttributeNS(u.space, u.local);
                        return e !== t && (n = a(e, t), function(t) {
                            this.setAttributeNS(u.space, u.local, n(t))
                        })
                    })
                }
                if (arguments.length < 2) {
                    for (n in t) this.attr(n, t[n]);
                    return this
                }
                var a = "transform" == t ? Xr : Mr,
                    u = ca.ns.qualify(t);
                return Jo(this, "attr." + t, n, u.local ? o : i)
            }, Ws.attrTween = function(t, n) {
                function e(t, e) {
                    var r = n.call(this, t, e, this.getAttribute(i));
                    return r && function(t) {
                        this.setAttribute(i, r(t))
                    }
                }

                function r(t, e) {
                    var r = n.call(this, t, e, this.getAttributeNS(i.space, i.local));
                    return r && function(t) {
                        this.setAttributeNS(i.space, i.local, r(t))
                    }
                }
                var i = ca.ns.qualify(t);
                return this.tween("attr." + t, i.local ? r : e)
            }, Ws.style = function(t, n, r) {
                function i() {
                    this.style.removeProperty(t)
                }

                function o(n) {
                    return null == n ? i : (n += "", function() {
                        var i, o = e(this).getComputedStyle(this, null).getPropertyValue(t);
                        return o !== n && (i = Mr(o, n), function(n) {
                            this.style.setProperty(t, i(n), r)
                        })
                    })
                }
                var a = arguments.length;
                if (a < 3) {
                    if ("string" != typeof t) {
                        a < 2 && (n = "");
                        for (r in t) this.style(r, t[r], n);
                        return this
                    }
                    r = ""
                }
                return Jo(this, "style." + t, n, o)
            }, Ws.styleTween = function(t, n, r) {
                function i(i, o) {
                    var a = n.call(this, i, o, e(this).getComputedStyle(this, null).getPropertyValue(t));
                    return a && function(n) {
                        this.style.setProperty(t, a(n), r)
                    }
                }
                return arguments.length < 3 && (r = ""), this.tween("style." + t, i)
            }, Ws.text = function(t) {
                return Jo(this, "text", t, Ko)
            }, Ws.remove = function() {
                var t = this.namespace;
                return this.each("end.transition", function() {
                    var n;
                    this[t].count < 2 && (n = this.parentNode) && n.removeChild(this)
                })
            }, Ws.ease = function(t) {
                var n = this.id,
                    e = this.namespace;
                return arguments.length < 1 ? this.node()[e][n].ease : ("function" != typeof t && (t = ca.ease.apply(ca, arguments)), W(this, function(r) {
                    r[e][n].ease = t
                }))
            }, Ws.delay = function(t) {
                var n = this.id,
                    e = this.namespace;
                return arguments.length < 1 ? this.node()[e][n].delay : W(this, "function" == typeof t ? function(r, i, o) {
                    r[e][n].delay = +t.call(r, r.__data__, i, o)
                } : (t = +t, function(r) {
                    r[e][n].delay = t
                }))
            }, Ws.duration = function(t) {
                var n = this.id,
                    e = this.namespace;
                return arguments.length < 1 ? this.node()[e][n].duration : W(this, "function" == typeof t ? function(r, i, o) {
                    r[e][n].duration = Math.max(1, t.call(r, r.__data__, i, o))
                } : (t = Math.max(1, t), function(r) {
                    r[e][n].duration = t
                }))
            }, Ws.each = function(t, n) {
                var e = this.id,
                    r = this.namespace;
                if (arguments.length < 2) {
                    var i = Fs,
                        o = $s;
                    try {
                        $s = e, W(this, function(n, i, o) {
                            Fs = n[r][e], t.call(n, n.__data__, i, o)
                        })
                    } finally {
                        Fs = i, $s = o
                    }
                } else W(this, function(i) {
                    var o = i[r][e];
                    (o.event || (o.event = ca.dispatch("start", "end", "interrupt"))).on(t, n)
                });
                return this
            }, Ws.transition = function() {
                for (var t, n, e, r, i = this.id, o = ++Ys, a = this.namespace, u = [], s = 0, c = this.length; s < c; s++) {
                    u.push(t = []);
                    for (var n = this[s], l = 0, f = n.length; l < f; l++)(e = n[l]) && (r = e[a][i], na(e, l, a, o, {
                        time: r.time,
                        ease: r.ease,
                        delay: r.delay + r.duration,
                        duration: r.duration
                    })), t.push(e)
                }
                return Qo(u, a, o)
            }, ca.svg.axis = function() {
                function t(t) {
                    t.each(function() {
                        var t, c = ca.select(this),
                            l = this.__chart__ || e,
                            f = this.__chart__ = e.copy(),
                            h = null == s ? f.ticks ? f.ticks.apply(f, u) : f.domain() : s,
                            p = null == n ? f.tickFormat ? f.tickFormat.apply(f, u) : x : n,
                            d = c.selectAll(".tick").data(h, f),
                            g = d.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Oa),
                            v = ca.transition(d.exit()).style("opacity", Oa).remove(),
                            y = ca.transition(d.order()).style("opacity", 1),
                            m = Math.max(i, 0) + a,
                            M = Yi(f),
                            w = c.selectAll(".domain").data([0]),
                            b = (w.enter().append("path").attr("class", "domain"), ca.transition(w));
                        g.append("line"), g.append("text");
                        var _, k, E, T, C = g.select("line"),
                            S = y.select("line"),
                            N = d.select("text").text(p),
                            A = g.select("text"),
                            I = y.select("text"),
                            z = "top" === r || "left" === r ? -1 : 1;
                        if ("bottom" === r || "top" === r ? (t = ea, _ = "x", E = "y", k = "x2", T = "y2", N.attr("dy", z < 0 ? "0em" : ".71em").style("text-anchor", "middle"), b.attr("d", "M" + M[0] + "," + z * o + "V0H" + M[1] + "V" + z * o)) : (t = ra, _ = "y", E = "x", k = "y2", T = "x2", N.attr("dy", ".32em").style("text-anchor", z < 0 ? "end" : "start"), b.attr("d", "M" + z * o + "," + M[0] + "H0V" + M[1] + "H" + z * o)), C.attr(T, z * i), A.attr(E, z * m), S.attr(k, 0).attr(T, z * i), I.attr(_, 0).attr(E, z * m), f.rangeBand) {
                            var P = f,
                                L = P.rangeBand() / 2;
                            l = f = function(t) {
                                return P(t) + L
                            }
                        } else l.rangeBand ? l = f : v.call(t, f, l);
                        g.call(t, l, f), y.call(t, f, f)
                    })
                }
                var n, e = ca.scale.linear(),
                    r = Vs,
                    i = 6,
                    o = 6,
                    a = 3,
                    u = [10],
                    s = null;
                return t.scale = function(n) {
                    return arguments.length ? (e = n, t) : e
                }, t.orient = function(n) {
                    return arguments.length ? (r = n in Bs ? n + "" : Vs, t) : r
                }, t.ticks = function() {
                    return arguments.length ? (u = fa(arguments), t) : u
                }, t.tickValues = function(n) {
                    return arguments.length ? (s = n, t) : s
                }, t.tickFormat = function(e) {
                    return arguments.length ? (n = e, t) : n
                }, t.tickSize = function(n) {
                    var e = arguments.length;
                    return e ? (i = +n, o = +arguments[e - 1], t) : i
                }, t.innerTickSize = function(n) {
                    return arguments.length ? (i = +n, t) : i
                }, t.outerTickSize = function(n) {
                    return arguments.length ? (o = +n, t) : o
                }, t.tickPadding = function(n) {
                    return arguments.length ? (a = +n, t) : a
                }, t.tickSubdivide = function() {
                    return arguments.length && t
                }, t
            };
            var Vs = "bottom",
                Bs = {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1
                };
            ca.svg.brush = function() {
                function t(e) {
                    e.each(function() {
                        var e = ca.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", o).on("touchstart.brush", o),
                            a = e.selectAll(".background").data([0]);
                        a.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), e.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                        var u = e.selectAll(".resize").data(g, x);
                        u.exit().remove(), u.enter().append("g").attr("class", function(t) {
                            return "resize " + t
                        }).style("cursor", function(t) {
                            return Xs[t]
                        }).append("rect").attr("x", function(t) {
                            return /[ew]$/.test(t) ? -3 : null
                        }).attr("y", function(t) {
                            return /^[ns]/.test(t) ? -3 : null
                        }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), u.style("display", t.empty() ? "none" : null);
                        var s, f = ca.transition(e),
                            h = ca.transition(a);
                        c && (s = Yi(c), h.attr("x", s[0]).attr("width", s[1] - s[0]), r(f)), l && (s = Yi(l), h.attr("y", s[0]).attr("height", s[1] - s[0]), i(f)), n(f)
                    })
                }

                function n(t) {
                    t.selectAll(".resize").attr("transform", function(t) {
                        return "translate(" + f[+/e$/.test(t)] + "," + h[+/^s/.test(t)] + ")"
                    })
                }

                function r(t) {
                    t.select(".extent").attr("x", f[0]), t.selectAll(".extent,.n>rect,.s>rect").attr("width", f[1] - f[0])
                }

                function i(t) {
                    t.select(".extent").attr("y", h[0]), t.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1] - h[0])
                }

                function o() {
                    function o() {
                        32 == ca.event.keyCode && (N || (x = null, I[0] -= f[1], I[1] -= h[1], N = 2), E())
                    }

                    function g() {
                        32 == ca.event.keyCode && 2 == N && (I[0] += f[1], I[1] += h[1], N = 0, E())
                    }

                    function v() {
                        var t = ca.mouse(w),
                            e = !1;
                        M && (t[0] += M[0], t[1] += M[1]), N || (ca.event.altKey ? (x || (x = [(f[0] + f[1]) / 2, (h[0] + h[1]) / 2]), I[0] = f[+(t[0] < x[0])], I[1] = h[+(t[1] < x[1])]) : x = null), C && y(t, c, 0) && (r(k), e = !0), S && y(t, l, 1) && (i(k), e = !0), e && (n(k), _({
                            type: "brush",
                            mode: N ? "move" : "resize"
                        }))
                    }

                    function y(t, n, e) {
                        var r, i, o = Yi(n),
                            s = o[0],
                            c = o[1],
                            l = I[e],
                            g = e ? h : f,
                            v = g[1] - g[0];
                        if (N && (s -= l, c -= v + l), r = (e ? d : p) ? Math.max(s, Math.min(c, t[e])) : t[e], N ? i = (r += l) + v : (x && (l = Math.max(s, Math.min(c, 2 * x[e] - r))), l < r ? (i = r, r = l) : i = l), g[0] != r || g[1] != i) return e ? u = null : a = null, g[0] = r, g[1] = i, !0
                    }

                    function m() {
                        v(), k.style("pointer-events", "all").selectAll(".resize").style("display", t.empty() ? "none" : null), ca.select("body").style("cursor", null), z.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), A(), _({
                            type: "brushend"
                        })
                    }
                    var x, M, w = this,
                        b = ca.select(ca.event.target),
                        _ = s.of(w, arguments),
                        k = ca.select(w),
                        T = b.datum(),
                        C = !/^(n|s)$/.test(T) && c,
                        S = !/^(e|w)$/.test(T) && l,
                        N = b.classed("extent"),
                        A = G(w),
                        I = ca.mouse(w),
                        z = ca.select(e(w)).on("keydown.brush", o).on("keyup.brush", g);
                    if (ca.event.changedTouches ? z.on("touchmove.brush", v).on("touchend.brush", m) : z.on("mousemove.brush", v).on("mouseup.brush", m), k.interrupt().selectAll("*").interrupt(), N) I[0] = f[0] - I[0], I[1] = h[0] - I[1];
                    else if (T) {
                        var P = +/w$/.test(T),
                            L = +/^n/.test(T);
                        M = [f[1 - P] - I[0], h[1 - L] - I[1]], I[0] = f[P], I[1] = h[L]
                    } else ca.event.altKey && (x = I.slice());
                    k.style("pointer-events", "none").selectAll(".resize").style("display", null), ca.select("body").style("cursor", b.style("cursor")), _({
                        type: "brushstart"
                    }), v()
                }
                var a, u, s = C(t, "brushstart", "brush", "brushend"),
                    c = null,
                    l = null,
                    f = [0, 0],
                    h = [0, 0],
                    p = !0,
                    d = !0,
                    g = Zs[0];
                return t.event = function(t) {
                    t.each(function() {
                        var t = s.of(this, arguments),
                            n = {
                                x: f,
                                y: h,
                                i: a,
                                j: u
                            },
                            e = this.__chart__ || n;
                        this.__chart__ = n, $s ? ca.select(this).transition().each("start.brush", function() {
                            a = e.i, u = e.j, f = e.x, h = e.y, t({
                                type: "brushstart"
                            })
                        }).tween("brush:brush", function() {
                            var e = wr(f, n.x),
                                r = wr(h, n.y);
                            return a = u = null,
                                function(i) {
                                    f = n.x = e(i), h = n.y = r(i), t({
                                        type: "brush",
                                        mode: "resize"
                                    })
                                }
                        }).each("end.brush", function() {
                            a = n.i, u = n.j, t({
                                type: "brush",
                                mode: "resize"
                            }), t({
                                type: "brushend"
                            })
                        }) : (t({
                            type: "brushstart"
                        }), t({
                            type: "brush",
                            mode: "resize"
                        }), t({
                            type: "brushend"
                        }))
                    })
                }, t.x = function(n) {
                    return arguments.length ? (c = n, g = Zs[!c << 1 | !l], t) : c
                }, t.y = function(n) {
                    return arguments.length ? (l = n, g = Zs[!c << 1 | !l], t) : l
                }, t.clamp = function(n) {
                    return arguments.length ? (c && l ? (p = !!n[0], d = !!n[1]) : c ? p = !!n : l && (d = !!n), t) : c && l ? [p, d] : c ? p : l ? d : null
                }, t.extent = function(n) {
                    var e, r, i, o, s;
                    return arguments.length ? (c && (e = n[0], r = n[1], l && (e = e[0], r = r[0]), a = [e, r], c.invert && (e = c(e), r = c(r)), r < e && (s = e, e = r, r = s), e == f[0] && r == f[1] || (f = [e, r])), l && (i = n[0], o = n[1], c && (i = i[1], o = o[1]), u = [i, o], l.invert && (i = l(i), o = l(o)), o < i && (s = i, i = o, o = s), i == h[0] && o == h[1] || (h = [i, o])), t) : (c && (a ? (e = a[0], r = a[1]) : (e = f[0], r = f[1], c.invert && (e = c.invert(e), r = c.invert(r)), r < e && (s = e, e = r, r = s))), l && (u ? (i = u[0], o = u[1]) : (i = h[0], o = h[1], l.invert && (i = l.invert(i), o = l.invert(o)), o < i && (s = i, i = o, o = s))), c && l ? [[e, i], [r, o]] : c ? [e, r] : l && [i, o])
                }, t.clear = function() {
                    return t.empty() || (f = [0, 0], h = [0, 0], a = u = null), t
                }, t.empty = function() {
                    return !!c && f[0] == f[1] || !!l && h[0] == h[1]
                }, ca.rebind(t, s, "on")
            };
            var Xs = {
                    n: "ns-resize",
                    e: "ew-resize",
                    s: "ns-resize",
                    w: "ew-resize",
                    nw: "nwse-resize",
                    ne: "nesw-resize",
                    se: "nwse-resize",
                    sw: "nesw-resize"
                },
                Zs = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []],
                Gs = gu.format = wu.timeFormat,
                Qs = Gs.utc,
                Js = Qs("%Y-%m-%dT%H:%M:%S.%LZ");
            Gs.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? ia : Js, ia.parse = function(t) {
                var n = new Date(t);
                return isNaN(n) ? null : n
            }, ia.toString = Js.toString, gu.second = $t(function(t) {
                return new vu(1e3 * Math.floor(t / 1e3))
            }, function(t, n) {
                t.setTime(t.getTime() + 1e3 * Math.floor(n))
            }, function(t) {
                return t.getSeconds()
            }), gu.seconds = gu.second.range, gu.seconds.utc = gu.second.utc.range, gu.minute = $t(function(t) {
                return new vu(6e4 * Math.floor(t / 6e4))
            }, function(t, n) {
                t.setTime(t.getTime() + 6e4 * Math.floor(n))
            }, function(t) {
                return t.getMinutes()
            }), gu.minutes = gu.minute.range, gu.minutes.utc = gu.minute.utc.range, gu.hour = $t(function(t) {
                var n = t.getTimezoneOffset() / 60;
                return new vu(36e5 * (Math.floor(t / 36e5 - n) + n))
            }, function(t, n) {
                t.setTime(t.getTime() + 36e5 * Math.floor(n))
            }, function(t) {
                return t.getHours()
            }), gu.hours = gu.hour.range, gu.hours.utc = gu.hour.utc.range, gu.month = $t(function(t) {
                return t = gu.day(t), t.setDate(1), t
            }, function(t, n) {
                t.setMonth(t.getMonth() + n)
            }, function(t) {
                return t.getMonth()
            }), gu.months = gu.month.range, gu.months.utc = gu.month.utc.range;
            var Ks = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
                tc = [[gu.second, 1], [gu.second, 5], [gu.second, 15], [gu.second, 30], [gu.minute, 1], [gu.minute, 5], [gu.minute, 15], [gu.minute, 30], [gu.hour, 1], [gu.hour, 3], [gu.hour, 6], [gu.hour, 12], [gu.day, 1], [gu.day, 2], [gu.week, 1], [gu.month, 1], [gu.month, 3], [gu.year, 1]],
                nc = Gs.multi([[".%L", function(t) {
                    return t.getMilliseconds()
                }], [":%S", function(t) {
                    return t.getSeconds()
                }], ["%I:%M", function(t) {
                    return t.getMinutes()
                }], ["%I %p", function(t) {
                    return t.getHours()
                }], ["%a %d", function(t) {
                    return t.getDay() && 1 != t.getDate()
                }], ["%b %d", function(t) {
                    return 1 != t.getDate()
                }], ["%B", function(t) {
                    return t.getMonth()
                }], ["%Y", In]]),
                ec = {
                    range: function(t, n, e) {
                        return ca.range(Math.ceil(t / e) * e, +n, e).map(aa)
                    },
                    floor: x,
                    ceil: x
                };
            tc.year = gu.year, gu.scale = function() {
                return oa(ca.scale.linear(), tc, nc)
            };
            var rc = tc.map(function(t) {
                    return [t[0].utc, t[1]]
                }),
                ic = Qs.multi([[".%L", function(t) {
                    return t.getUTCMilliseconds()
                }], [":%S", function(t) {
                    return t.getUTCSeconds()
                }], ["%I:%M", function(t) {
                    return t.getUTCMinutes()
                }], ["%I %p", function(t) {
                    return t.getUTCHours()
                }], ["%a %d", function(t) {
                    return t.getUTCDay() && 1 != t.getUTCDate()
                }], ["%b %d", function(t) {
                    return 1 != t.getUTCDate()
                }], ["%B", function(t) {
                    return t.getUTCMonth()
                }], ["%Y", In]]);
            rc.year = gu.year.utc, gu.scale.utc = function() {
                return oa(ca.scale.linear(), rc, ic)
            }, ca.text = St(function(t) {
                return t.responseText
            }), ca.json = function(t, n) {
                return Nt(t, "application/json", ua, n)
            }, ca.html = function(t, n) {
                return Nt(t, "text/html", sa, n)
            }, ca.xml = St(function(t) {
                return t.responseXML
            }), "function" == typeof define && define.amd ? (this.d3 = ca, define(ca)) : "object" == typeof n && n.exports ? n.exports = ca : this.d3 = ca
        }()
    }, {}],
    2: [function(t, n, e) {
        ! function(t, e, r, i) {
            "use strict";

            function o(t, n, e) {
                return setTimeout(l(t, e), n)
            }

            function a(t, n, e) {
                return !!Array.isArray(t) && (u(t, e[n], e), !0)
            }

            function u(t, n, e) {
                var r;
                if (t)
                    if (t.forEach) t.forEach(n, e);
                    else if (t.length !== i)
                    for (r = 0; r < t.length;) n.call(e, t[r], r, t), r++;
                else
                    for (r in t) t.hasOwnProperty(r) && n.call(e, t[r], r, t)
            }

            function s(n, e, r) {
                var i = "DEPRECATED METHOD: " + e + "\n" + r + " AT \n";
                return function() {
                    var e = new Error("get-stack-trace"),
                        r = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                        o = t.console && (t.console.warn || t.console.log);
                    return o && o.call(t.console, i, r), n.apply(this, arguments)
                }
            }

            function c(t, n, e) {
                var r, i = n.prototype;
                r = t.prototype = Object.create(i), r.constructor = t, r._super = i, e && ht(r, e)
            }

            function l(t, n) {
                return function() {
                    return t.apply(n, arguments)
                }
            }

            function f(t, n) {
                return typeof t == gt ? t.apply(n ? n[0] || i : i, n) : t
            }

            function h(t, n) {
                return t === i ? n : t
            }

            function p(t, n, e) {
                u(y(n), function(n) {
                    t.addEventListener(n, e, !1)
                })
            }

            function d(t, n, e) {
                u(y(n), function(n) {
                    t.removeEventListener(n, e, !1)
                })
            }

            function g(t, n) {
                for (; t;) {
                    if (t == n) return !0;
                    t = t.parentNode
                }
                return !1
            }

            function v(t, n) {
                return t.indexOf(n) > -1
            }

            function y(t) {
                return t.trim().split(/\s+/g)
            }

            function m(t, n, e) {
                if (t.indexOf && !e) return t.indexOf(n);
                for (var r = 0; r < t.length;) {
                    if (e && t[r][e] == n || !e && t[r] === n) return r;
                    r++
                }
                return -1
            }

            function x(t) {
                return Array.prototype.slice.call(t, 0)
            }

            function M(t, n, e) {
                for (var r = [], i = [], o = 0; o < t.length;) {
                    var a = n ? t[o][n] : t[o];
                    m(i, a) < 0 && r.push(t[o]), i[o] = a, o++
                }
                return e && (r = n ? r.sort(function(t, e) {
                    return t[n] > e[n]
                }) : r.sort()), r
            }

            function w(t, n) {
                for (var e, r, o = n[0].toUpperCase() + n.slice(1), a = 0; a < pt.length;) {
                    if (e = pt[a], r = e ? e + o : n, r in t) return r;
                    a++
                }
                return i
            }

            function b() {
                return wt++
            }

            function _(n) {
                var e = n.ownerDocument || n;
                return e.defaultView || e.parentWindow || t
            }

            function k(t, n) {
                var e = this;
                this.manager = t, this.callback = n, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(n) {
                    f(t.options.enable, [t]) && e.handler(n)
                }, this.init()
            }

            function E(t) {
                var n, e = t.options.inputClass;
                return new(n = e ? e : kt ? j : Et ? F : _t ? W : O)(t, T)
            }

            function T(t, n, e) {
                var r = e.pointers.length,
                    i = e.changedPointers.length,
                    o = n & It && r - i === 0,
                    a = n & (Pt | Lt) && r - i === 0;
                e.isFirst = !!o, e.isFinal = !!a, o && (t.session = {}), e.eventType = n, C(t, e), t.emit("hammer.input", e), t.recognize(e), t.session.prevInput = e
            }

            function C(t, n) {
                var e = t.session,
                    r = n.pointers,
                    i = r.length;
                e.firstInput || (e.firstInput = A(n)), i > 1 && !e.firstMultiple ? e.firstMultiple = A(n) : 1 === i && (e.firstMultiple = !1);
                var o = e.firstInput,
                    a = e.firstMultiple,
                    u = a ? a.center : o.center,
                    s = n.center = I(r);
                n.timeStamp = mt(), n.deltaTime = n.timeStamp - o.timeStamp, n.angle = D(u, s), n.distance = L(u, s), S(e, n), n.offsetDirection = P(n.deltaX, n.deltaY);
                var c = z(n.deltaTime, n.deltaX, n.deltaY);
                n.overallVelocityX = c.x, n.overallVelocityY = c.y, n.overallVelocity = yt(c.x) > yt(c.y) ? c.x : c.y, n.scale = a ? q(a.pointers, r) : 1, n.rotation = a ? R(a.pointers, r) : 0, n.maxPointers = e.prevInput ? n.pointers.length > e.prevInput.maxPointers ? n.pointers.length : e.prevInput.maxPointers : n.pointers.length, N(e, n);
                var l = t.element;
                g(n.srcEvent.target, l) && (l = n.srcEvent.target), n.target = l
            }

            function S(t, n) {
                var e = n.center,
                    r = t.offsetDelta || {},
                    i = t.prevDelta || {},
                    o = t.prevInput || {};
                n.eventType !== It && o.eventType !== Pt || (i = t.prevDelta = {
                    x: o.deltaX || 0,
                    y: o.deltaY || 0
                }, r = t.offsetDelta = {
                    x: e.x,
                    y: e.y
                }), n.deltaX = i.x + (e.x - r.x), n.deltaY = i.y + (e.y - r.y)
            }

            function N(t, n) {
                var e, r, o, a, u = t.lastInterval || n,
                    s = n.timeStamp - u.timeStamp;
                if (n.eventType != Lt && (s > At || u.velocity === i)) {
                    var c = n.deltaX - u.deltaX,
                        l = n.deltaY - u.deltaY,
                        f = z(s, c, l);
                    r = f.x, o = f.y, e = yt(f.x) > yt(f.y) ? f.x : f.y, a = P(c, l), t.lastInterval = n
                } else e = u.velocity, r = u.velocityX, o = u.velocityY, a = u.direction;
                n.velocity = e, n.velocityX = r, n.velocityY = o, n.direction = a
            }

            function A(t) {
                for (var n = [], e = 0; e < t.pointers.length;) n[e] = {
                    clientX: vt(t.pointers[e].clientX),
                    clientY: vt(t.pointers[e].clientY)
                }, e++;
                return {
                    timeStamp: mt(),
                    pointers: n,
                    center: I(n),
                    deltaX: t.deltaX,
                    deltaY: t.deltaY
                }
            }

            function I(t) {
                var n = t.length;
                if (1 === n) return {
                    x: vt(t[0].clientX),
                    y: vt(t[0].clientY)
                };
                for (var e = 0, r = 0, i = 0; i < n;) e += t[i].clientX, r += t[i].clientY, i++;
                return {
                    x: vt(e / n),
                    y: vt(r / n)
                }
            }

            function z(t, n, e) {
                return {
                    x: n / t || 0,
                    y: e / t || 0
                }
            }

            function P(t, n) {
                return t === n ? Dt : yt(t) >= yt(n) ? t < 0 ? Rt : qt : n < 0 ? Ot : jt
            }

            function L(t, n, e) {
                e || (e = Ht);
                var r = n[e[0]] - t[e[0]],
                    i = n[e[1]] - t[e[1]];
                return Math.sqrt(r * r + i * i)
            }

            function D(t, n, e) {
                e || (e = Ht);
                var r = n[e[0]] - t[e[0]],
                    i = n[e[1]] - t[e[1]];
                return 180 * Math.atan2(i, r) / Math.PI
            }

            function R(t, n) {
                return D(n[1], n[0], Wt) + D(t[1], t[0], Wt)
            }

            function q(t, n) {
                return L(n[0], n[1], Wt) / L(t[0], t[1], Wt)
            }

            function O() {
                this.evEl = Vt, this.evWin = Bt, this.pressed = !1, k.apply(this, arguments)
            }

            function j() {
                this.evEl = Gt, this.evWin = Qt, k.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
            }

            function U() {
                this.evTarget = Kt, this.evWin = tn, this.started = !1, k.apply(this, arguments)
            }

            function $(t, n) {
                var e = x(t.touches),
                    r = x(t.changedTouches);
                return n & (Pt | Lt) && (e = M(e.concat(r), "identifier", !0)), [e, r]
            }

            function F() {
                this.evTarget = en, this.targetIds = {}, k.apply(this, arguments)
            }

            function H(t, n) {
                var e = x(t.touches),
                    r = this.targetIds;
                if (n & (It | zt) && 1 === e.length) return r[e[0].identifier] = !0, [e, e];
                var i, o, a = x(t.changedTouches),
                    u = [],
                    s = this.target;
                if (o = e.filter(function(t) {
                        return g(t.target, s)
                    }), n === It)
                    for (i = 0; i < o.length;) r[o[i].identifier] = !0, i++;
                for (i = 0; i < a.length;) r[a[i].identifier] && u.push(a[i]), n & (Pt | Lt) && delete r[a[i].identifier], i++;
                return u.length ? [M(o.concat(u), "identifier", !0), u] : void 0
            }

            function W() {
                k.apply(this, arguments);
                var t = l(this.handler, this);
                this.touch = new F(this.manager, t), this.mouse = new O(this.manager, t), this.primaryTouch = null, this.lastTouches = []
            }

            function Y(t, n) {
                t & It ? (this.primaryTouch = n.changedPointers[0].identifier, V.call(this, n)) : t & (Pt | Lt) && V.call(this, n)
            }

            function V(t) {
                var n = t.changedPointers[0];
                if (n.identifier === this.primaryTouch) {
                    var e = {
                        x: n.clientX,
                        y: n.clientY
                    };
                    this.lastTouches.push(e);
                    var r = this.lastTouches,
                        i = function() {
                            var t = r.indexOf(e);
                            t > -1 && r.splice(t, 1)
                        };
                    setTimeout(i, rn)
                }
            }

            function B(t) {
                for (var n = t.srcEvent.clientX, e = t.srcEvent.clientY, r = 0; r < this.lastTouches.length; r++) {
                    var i = this.lastTouches[r],
                        o = Math.abs(n - i.x),
                        a = Math.abs(e - i.y);
                    if (o <= on && a <= on) return !0
                }
                return !1
            }

            function X(t, n) {
                this.manager = t, this.set(n)
            }

            function Z(t) {
                if (v(t, fn)) return fn;
                var n = v(t, hn),
                    e = v(t, pn);
                return n && e ? fn : n || e ? n ? hn : pn : v(t, ln) ? ln : cn
            }

            function G() {
                if (!un) return !1;
                var n = {},
                    e = t.CSS && t.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(r) {
                    n[r] = !e || t.CSS.supports("touch-action", r)
                }), n
            }

            function Q(t) {
                this.options = ht({}, this.defaults, t || {}), this.id = b(), this.manager = null, this.options.enable = h(this.options.enable, !0), this.state = gn, this.simultaneous = {}, this.requireFail = []
            }

            function J(t) {
                return t & Mn ? "cancel" : t & mn ? "end" : t & yn ? "move" : t & vn ? "start" : ""
            }

            function K(t) {
                return t == jt ? "down" : t == Ot ? "up" : t == Rt ? "left" : t == qt ? "right" : ""
            }

            function tt(t, n) {
                var e = n.manager;
                return e ? e.get(t) : t
            }

            function nt() {
                Q.apply(this, arguments)
            }

            function et() {
                nt.apply(this, arguments), this.pX = null, this.pY = null
            }

            function rt() {
                nt.apply(this, arguments)
            }

            function it() {
                Q.apply(this, arguments), this._timer = null, this._input = null
            }

            function ot() {
                nt.apply(this, arguments)
            }

            function at() {
                nt.apply(this, arguments)
            }

            function ut() {
                Q.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
            }

            function st(t, n) {
                return n = n || {}, n.recognizers = h(n.recognizers, st.defaults.preset), new ct(t, n)
            }

            function ct(t, n) {
                this.options = ht({}, st.defaults, n || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = E(this), this.touchAction = new X(this, this.options.touchAction), lt(this, !0), u(this.options.recognizers, function(t) {
                    var n = this.add(new t[0](t[1]));
                    t[2] && n.recognizeWith(t[2]), t[3] && n.requireFailure(t[3])
                }, this)
            }

            function lt(t, n) {
                var e = t.element;
                if (e.style) {
                    var r;
                    u(t.options.cssProps, function(i, o) {
                        r = w(e.style, o), n ? (t.oldCssProps[r] = e.style[r], e.style[r] = i) : e.style[r] = t.oldCssProps[r] || "";
                    }), n || (t.oldCssProps = {})
                }
            }

            function ft(t, n) {
                var r = e.createEvent("Event");
                r.initEvent(t, !0, !0), r.gesture = n, n.target.dispatchEvent(r)
            }
            var ht, pt = ["", "webkit", "Moz", "MS", "ms", "o"],
                dt = e.createElement("div"),
                gt = "function",
                vt = Math.round,
                yt = Math.abs,
                mt = Date.now;
            ht = "function" != typeof Object.assign ? function(t) {
                if (t === i || null === t) throw new TypeError("Cannot convert undefined or null to object");
                for (var n = Object(t), e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    if (r !== i && null !== r)
                        for (var o in r) r.hasOwnProperty(o) && (n[o] = r[o])
                }
                return n
            } : Object.assign;
            var xt = s(function(t, n, e) {
                    for (var r = Object.keys(n), o = 0; o < r.length;)(!e || e && t[r[o]] === i) && (t[r[o]] = n[r[o]]), o++;
                    return t
                }, "extend", "Use `assign`."),
                Mt = s(function(t, n) {
                    return xt(t, n, !0)
                }, "merge", "Use `assign`."),
                wt = 1,
                bt = /mobile|tablet|ip(ad|hone|od)|android/i,
                _t = "ontouchstart" in t,
                kt = w(t, "PointerEvent") !== i,
                Et = _t && bt.test(navigator.userAgent),
                Tt = "touch",
                Ct = "pen",
                St = "mouse",
                Nt = "kinect",
                At = 25,
                It = 1,
                zt = 2,
                Pt = 4,
                Lt = 8,
                Dt = 1,
                Rt = 2,
                qt = 4,
                Ot = 8,
                jt = 16,
                Ut = Rt | qt,
                $t = Ot | jt,
                Ft = Ut | $t,
                Ht = ["x", "y"],
                Wt = ["clientX", "clientY"];
            k.prototype = {
                handler: function() {},
                init: function() {
                    this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(_(this.element), this.evWin, this.domHandler)
                },
                destroy: function() {
                    this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(_(this.element), this.evWin, this.domHandler)
                }
            };
            var Yt = {
                    mousedown: It,
                    mousemove: zt,
                    mouseup: Pt
                },
                Vt = "mousedown",
                Bt = "mousemove mouseup";
            c(O, k, {
                handler: function(t) {
                    var n = Yt[t.type];
                    n & It && 0 === t.button && (this.pressed = !0), n & zt && 1 !== t.which && (n = Pt), this.pressed && (n & Pt && (this.pressed = !1), this.callback(this.manager, n, {
                        pointers: [t],
                        changedPointers: [t],
                        pointerType: St,
                        srcEvent: t
                    }))
                }
            });
            var Xt = {
                    pointerdown: It,
                    pointermove: zt,
                    pointerup: Pt,
                    pointercancel: Lt,
                    pointerout: Lt
                },
                Zt = {
                    2: Tt,
                    3: Ct,
                    4: St,
                    5: Nt
                },
                Gt = "pointerdown",
                Qt = "pointermove pointerup pointercancel";
            t.MSPointerEvent && !t.PointerEvent && (Gt = "MSPointerDown", Qt = "MSPointerMove MSPointerUp MSPointerCancel"), c(j, k, {
                handler: function(t) {
                    var n = this.store,
                        e = !1,
                        r = t.type.toLowerCase().replace("ms", ""),
                        i = Xt[r],
                        o = Zt[t.pointerType] || t.pointerType,
                        a = o == Tt,
                        u = m(n, t.pointerId, "pointerId");
                    i & It && (0 === t.button || a) ? u < 0 && (n.push(t), u = n.length - 1) : i & (Pt | Lt) && (e = !0), u < 0 || (n[u] = t, this.callback(this.manager, i, {
                        pointers: n,
                        changedPointers: [t],
                        pointerType: o,
                        srcEvent: t
                    }), e && n.splice(u, 1))
                }
            });
            var Jt = {
                    touchstart: It,
                    touchmove: zt,
                    touchend: Pt,
                    touchcancel: Lt
                },
                Kt = "touchstart",
                tn = "touchstart touchmove touchend touchcancel";
            c(U, k, {
                handler: function(t) {
                    var n = Jt[t.type];
                    if (n === It && (this.started = !0), this.started) {
                        var e = $.call(this, t, n);
                        n & (Pt | Lt) && e[0].length - e[1].length === 0 && (this.started = !1), this.callback(this.manager, n, {
                            pointers: e[0],
                            changedPointers: e[1],
                            pointerType: Tt,
                            srcEvent: t
                        })
                    }
                }
            });
            var nn = {
                    touchstart: It,
                    touchmove: zt,
                    touchend: Pt,
                    touchcancel: Lt
                },
                en = "touchstart touchmove touchend touchcancel";
            c(F, k, {
                handler: function(t) {
                    var n = nn[t.type],
                        e = H.call(this, t, n);
                    e && this.callback(this.manager, n, {
                        pointers: e[0],
                        changedPointers: e[1],
                        pointerType: Tt,
                        srcEvent: t
                    })
                }
            });
            var rn = 2500,
                on = 25;
            c(W, k, {
                handler: function(t, n, e) {
                    var r = e.pointerType == Tt,
                        i = e.pointerType == St;
                    if (!(i && e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents)) {
                        if (r) Y.call(this, n, e);
                        else if (i && B.call(this, e)) return;
                        this.callback(t, n, e)
                    }
                },
                destroy: function() {
                    this.touch.destroy(), this.mouse.destroy()
                }
            });
            var an = w(dt.style, "touchAction"),
                un = an !== i,
                sn = "compute",
                cn = "auto",
                ln = "manipulation",
                fn = "none",
                hn = "pan-x",
                pn = "pan-y",
                dn = G();
            X.prototype = {
                set: function(t) {
                    t == sn && (t = this.compute()), un && this.manager.element.style && dn[t] && (this.manager.element.style[an] = t), this.actions = t.toLowerCase().trim()
                },
                update: function() {
                    this.set(this.manager.options.touchAction)
                },
                compute: function() {
                    var t = [];
                    return u(this.manager.recognizers, function(n) {
                        f(n.options.enable, [n]) && (t = t.concat(n.getTouchAction()))
                    }), Z(t.join(" "))
                },
                preventDefaults: function(t) {
                    var n = t.srcEvent,
                        e = t.offsetDirection;
                    if (this.manager.session.prevented) return void n.preventDefault();
                    var r = this.actions,
                        i = v(r, fn) && !dn[fn],
                        o = v(r, pn) && !dn[pn],
                        a = v(r, hn) && !dn[hn];
                    if (i) {
                        var u = 1 === t.pointers.length,
                            s = t.distance < 2,
                            c = t.deltaTime < 250;
                        if (u && s && c) return
                    }
                    return a && o ? void 0 : i || o && e & Ut || a && e & $t ? this.preventSrc(n) : void 0
                },
                preventSrc: function(t) {
                    this.manager.session.prevented = !0, t.preventDefault()
                }
            };
            var gn = 1,
                vn = 2,
                yn = 4,
                mn = 8,
                xn = mn,
                Mn = 16,
                wn = 32;
            Q.prototype = {
                defaults: {},
                set: function(t) {
                    return ht(this.options, t), this.manager && this.manager.touchAction.update(), this
                },
                recognizeWith: function(t) {
                    if (a(t, "recognizeWith", this)) return this;
                    var n = this.simultaneous;
                    return t = tt(t, this), n[t.id] || (n[t.id] = t, t.recognizeWith(this)), this
                },
                dropRecognizeWith: function(t) {
                    return a(t, "dropRecognizeWith", this) ? this : (t = tt(t, this), delete this.simultaneous[t.id], this)
                },
                requireFailure: function(t) {
                    if (a(t, "requireFailure", this)) return this;
                    var n = this.requireFail;
                    return t = tt(t, this), m(n, t) === -1 && (n.push(t), t.requireFailure(this)), this
                },
                dropRequireFailure: function(t) {
                    if (a(t, "dropRequireFailure", this)) return this;
                    t = tt(t, this);
                    var n = m(this.requireFail, t);
                    return n > -1 && this.requireFail.splice(n, 1), this
                },
                hasRequireFailures: function() {
                    return this.requireFail.length > 0
                },
                canRecognizeWith: function(t) {
                    return !!this.simultaneous[t.id]
                },
                emit: function(t) {
                    function n(n) {
                        e.manager.emit(n, t)
                    }
                    var e = this,
                        r = this.state;
                    r < mn && n(e.options.event + J(r)), n(e.options.event), t.additionalEvent && n(t.additionalEvent), r >= mn && n(e.options.event + J(r))
                },
                tryEmit: function(t) {
                    return this.canEmit() ? this.emit(t) : void(this.state = wn)
                },
                canEmit: function() {
                    for (var t = 0; t < this.requireFail.length;) {
                        if (!(this.requireFail[t].state & (wn | gn))) return !1;
                        t++
                    }
                    return !0
                },
                recognize: function(t) {
                    var n = ht({}, t);
                    return f(this.options.enable, [this, n]) ? (this.state & (xn | Mn | wn) && (this.state = gn), this.state = this.process(n), void(this.state & (vn | yn | mn | Mn) && this.tryEmit(n))) : (this.reset(), void(this.state = wn))
                },
                process: function(t) {},
                getTouchAction: function() {},
                reset: function() {}
            }, c(nt, Q, {
                defaults: {
                    pointers: 1
                },
                attrTest: function(t) {
                    var n = this.options.pointers;
                    return 0 === n || t.pointers.length === n
                },
                process: function(t) {
                    var n = this.state,
                        e = t.eventType,
                        r = n & (vn | yn),
                        i = this.attrTest(t);
                    return r && (e & Lt || !i) ? n | Mn : r || i ? e & Pt ? n | mn : n & vn ? n | yn : vn : wn
                }
            }), c(et, nt, {
                defaults: {
                    event: "pan",
                    threshold: 10,
                    pointers: 1,
                    direction: Ft
                },
                getTouchAction: function() {
                    var t = this.options.direction,
                        n = [];
                    return t & Ut && n.push(pn), t & $t && n.push(hn), n
                },
                directionTest: function(t) {
                    var n = this.options,
                        e = !0,
                        r = t.distance,
                        i = t.direction,
                        o = t.deltaX,
                        a = t.deltaY;
                    return i & n.direction || (n.direction & Ut ? (i = 0 === o ? Dt : o < 0 ? Rt : qt, e = o != this.pX, r = Math.abs(t.deltaX)) : (i = 0 === a ? Dt : a < 0 ? Ot : jt, e = a != this.pY, r = Math.abs(t.deltaY))), t.direction = i, e && r > n.threshold && i & n.direction
                },
                attrTest: function(t) {
                    return nt.prototype.attrTest.call(this, t) && (this.state & vn || !(this.state & vn) && this.directionTest(t))
                },
                emit: function(t) {
                    this.pX = t.deltaX, this.pY = t.deltaY;
                    var n = K(t.direction);
                    n && (t.additionalEvent = this.options.event + n), this._super.emit.call(this, t)
                }
            }), c(rt, nt, {
                defaults: {
                    event: "pinch",
                    threshold: 0,
                    pointers: 2
                },
                getTouchAction: function() {
                    return [fn]
                },
                attrTest: function(t) {
                    return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & vn)
                },
                emit: function(t) {
                    if (1 !== t.scale) {
                        var n = t.scale < 1 ? "in" : "out";
                        t.additionalEvent = this.options.event + n
                    }
                    this._super.emit.call(this, t)
                }
            }), c(it, Q, {
                defaults: {
                    event: "press",
                    pointers: 1,
                    time: 251,
                    threshold: 9
                },
                getTouchAction: function() {
                    return [cn]
                },
                process: function(t) {
                    var n = this.options,
                        e = t.pointers.length === n.pointers,
                        r = t.distance < n.threshold,
                        i = t.deltaTime > n.time;
                    if (this._input = t, !r || !e || t.eventType & (Pt | Lt) && !i) this.reset();
                    else if (t.eventType & It) this.reset(), this._timer = o(function() {
                        this.state = xn, this.tryEmit()
                    }, n.time, this);
                    else if (t.eventType & Pt) return xn;
                    return wn
                },
                reset: function() {
                    clearTimeout(this._timer)
                },
                emit: function(t) {
                    this.state === xn && (t && t.eventType & Pt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = mt(), this.manager.emit(this.options.event, this._input)))
                }
            }), c(ot, nt, {
                defaults: {
                    event: "rotate",
                    threshold: 0,
                    pointers: 2
                },
                getTouchAction: function() {
                    return [fn]
                },
                attrTest: function(t) {
                    return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & vn)
                }
            }), c(at, nt, {
                defaults: {
                    event: "swipe",
                    threshold: 10,
                    velocity: .3,
                    direction: Ut | $t,
                    pointers: 1
                },
                getTouchAction: function() {
                    return et.prototype.getTouchAction.call(this)
                },
                attrTest: function(t) {
                    var n, e = this.options.direction;
                    return e & (Ut | $t) ? n = t.overallVelocity : e & Ut ? n = t.overallVelocityX : e & $t && (n = t.overallVelocityY), this._super.attrTest.call(this, t) && e & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && yt(n) > this.options.velocity && t.eventType & Pt
                },
                emit: function(t) {
                    var n = K(t.offsetDirection);
                    n && this.manager.emit(this.options.event + n, t), this.manager.emit(this.options.event, t)
                }
            }), c(ut, Q, {
                defaults: {
                    event: "tap",
                    pointers: 1,
                    taps: 1,
                    interval: 300,
                    time: 250,
                    threshold: 9,
                    posThreshold: 10
                },
                getTouchAction: function() {
                    return [ln]
                },
                process: function(t) {
                    var n = this.options,
                        e = t.pointers.length === n.pointers,
                        r = t.distance < n.threshold,
                        i = t.deltaTime < n.time;
                    if (this.reset(), t.eventType & It && 0 === this.count) return this.failTimeout();
                    if (r && i && e) {
                        if (t.eventType != Pt) return this.failTimeout();
                        var a = !this.pTime || t.timeStamp - this.pTime < n.interval,
                            u = !this.pCenter || L(this.pCenter, t.center) < n.posThreshold;
                        this.pTime = t.timeStamp, this.pCenter = t.center, u && a ? this.count += 1 : this.count = 1, this._input = t;
                        var s = this.count % n.taps;
                        if (0 === s) return this.hasRequireFailures() ? (this._timer = o(function() {
                            this.state = xn, this.tryEmit()
                        }, n.interval, this), vn) : xn
                    }
                    return wn
                },
                failTimeout: function() {
                    return this._timer = o(function() {
                        this.state = wn
                    }, this.options.interval, this), wn
                },
                reset: function() {
                    clearTimeout(this._timer)
                },
                emit: function() {
                    this.state == xn && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                }
            }), st.VERSION = "2.0.7", st.defaults = {
                domEvents: !1,
                touchAction: sn,
                enable: !0,
                inputTarget: null,
                inputClass: null,
                preset: [[ot, {
                    enable: !1
                }], [rt, {
                    enable: !1
                }, ["rotate"]], [at, {
                    direction: Ut
                }], [et, {
                    direction: Ut
                }, ["swipe"]], [ut], [ut, {
                    event: "doubletap",
                    taps: 2
                }, ["tap"]], [it]],
                cssProps: {
                    userSelect: "none",
                    touchSelect: "none",
                    touchCallout: "none",
                    contentZooming: "none",
                    userDrag: "none",
                    tapHighlightColor: "rgba(0,0,0,0)"
                }
            };
            var bn = 1,
                _n = 2;
            ct.prototype = {
                set: function(t) {
                    return ht(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
                },
                stop: function(t) {
                    this.session.stopped = t ? _n : bn
                },
                recognize: function(t) {
                    var n = this.session;
                    if (!n.stopped) {
                        this.touchAction.preventDefaults(t);
                        var e, r = this.recognizers,
                            i = n.curRecognizer;
                        (!i || i && i.state & xn) && (i = n.curRecognizer = null);
                        for (var o = 0; o < r.length;) e = r[o], n.stopped === _n || i && e != i && !e.canRecognizeWith(i) ? e.reset() : e.recognize(t), !i && e.state & (vn | yn | mn) && (i = n.curRecognizer = e), o++
                    }
                },
                get: function(t) {
                    if (t instanceof Q) return t;
                    for (var n = this.recognizers, e = 0; e < n.length; e++)
                        if (n[e].options.event == t) return n[e];
                    return null
                },
                add: function(t) {
                    if (a(t, "add", this)) return this;
                    var n = this.get(t.options.event);
                    return n && this.remove(n), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
                },
                remove: function(t) {
                    if (a(t, "remove", this)) return this;
                    if (t = this.get(t)) {
                        var n = this.recognizers,
                            e = m(n, t);
                        e !== -1 && (n.splice(e, 1), this.touchAction.update())
                    }
                    return this
                },
                on: function(t, n) {
                    if (t !== i && n !== i) {
                        var e = this.handlers;
                        return u(y(t), function(t) {
                            e[t] = e[t] || [], e[t].push(n)
                        }), this
                    }
                },
                off: function(t, n) {
                    if (t !== i) {
                        var e = this.handlers;
                        return u(y(t), function(t) {
                            n ? e[t] && e[t].splice(m(e[t], n), 1) : delete e[t]
                        }), this
                    }
                },
                emit: function(t, n) {
                    this.options.domEvents && ft(t, n);
                    var e = this.handlers[t] && this.handlers[t].slice();
                    if (e && e.length) {
                        n.type = t, n.preventDefault = function() {
                            n.srcEvent.preventDefault()
                        };
                        for (var r = 0; r < e.length;) e[r](n), r++
                    }
                },
                destroy: function() {
                    this.element && lt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                }
            }, ht(st, {
                INPUT_START: It,
                INPUT_MOVE: zt,
                INPUT_END: Pt,
                INPUT_CANCEL: Lt,
                STATE_POSSIBLE: gn,
                STATE_BEGAN: vn,
                STATE_CHANGED: yn,
                STATE_ENDED: mn,
                STATE_RECOGNIZED: xn,
                STATE_CANCELLED: Mn,
                STATE_FAILED: wn,
                DIRECTION_NONE: Dt,
                DIRECTION_LEFT: Rt,
                DIRECTION_RIGHT: qt,
                DIRECTION_UP: Ot,
                DIRECTION_DOWN: jt,
                DIRECTION_HORIZONTAL: Ut,
                DIRECTION_VERTICAL: $t,
                DIRECTION_ALL: Ft,
                Manager: ct,
                Input: k,
                TouchAction: X,
                TouchInput: F,
                MouseInput: O,
                PointerEventInput: j,
                TouchMouseInput: W,
                SingleTouchInput: U,
                Recognizer: Q,
                AttrRecognizer: nt,
                Tap: ut,
                Pan: et,
                Swipe: at,
                Pinch: rt,
                Rotate: ot,
                Press: it,
                on: p,
                off: d,
                each: u,
                merge: Mt,
                extend: xt,
                assign: ht,
                inherit: c,
                bindFn: l,
                prefixed: w
            });
            var kn = "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
            kn.Hammer = st, "function" == typeof define && define.amd ? define(function() {
                return st
            }) : "undefined" != typeof n && n.exports ? n.exports = st : t[r] = st
        }(window, document, "Hammer")
    }, {}],
    3: [function(t, n, e) {
        ! function(t, r) {
            "object" == typeof e && "undefined" != typeof n ? r(e) : "function" == typeof define && define.amd ? define(["exports"], r) : r(t.topojson = t.topojson || {})
        }(this, function(t) {
            "use strict";

            function n() {}

            function e(t) {
                if (!t) return n;
                var e, r, i = t.scale[0],
                    o = t.scale[1],
                    a = t.translate[0],
                    u = t.translate[1];
                return function(t, n) {
                    n || (e = r = 0), t[0] = (e += t[0]) * i + a, t[1] = (r += t[1]) * o + u
                }
            }

            function r(t) {
                if (!t) return n;
                var e, r, i = t.scale[0],
                    o = t.scale[1],
                    a = t.translate[0],
                    u = t.translate[1];
                return function(t, n) {
                    n || (e = r = 0);
                    var s = Math.round((t[0] - a) / i),
                        c = Math.round((t[1] - u) / o);
                    t[0] = s - e, t[1] = c - r, e = s, r = c
                }
            }

            function i(t, n) {
                for (var e, r = t.length, i = r - n; i < --r;) e = t[i], t[i++] = t[r], t[r] = e
            }

            function o(t, n) {
                for (var e = 0, r = t.length; e < r;) {
                    var i = e + r >>> 1;
                    t[i] < n ? e = i + 1 : r = i
                }
                return e
            }

            function a(t, n) {
                return "GeometryCollection" === n.type ? {
                    type: "FeatureCollection",
                    features: n.geometries.map(function(n) {
                        return u(t, n)
                    })
                } : u(t, n)
            }

            function u(t, n) {
                var e = {
                    type: "Feature",
                    id: n.id,
                    properties: n.properties || {},
                    geometry: s(t, n)
                };
                return null == n.id && delete e.id, e
            }

            function s(t, n) {
                function r(t, n) {
                    n.length && n.pop();
                    for (var e, r = f[t < 0 ? ~t : t], o = 0, a = r.length; o < a; ++o) n.push(e = r[o].slice()), l(e, o);
                    t < 0 && i(n, a)
                }

                function o(t) {
                    return t = t.slice(), l(t, 0), t
                }

                function a(t) {
                    for (var n = [], e = 0, i = t.length; e < i; ++e) r(t[e], n);
                    return n.length < 2 && n.push(n[0].slice()), n
                }

                function u(t) {
                    for (var n = a(t); n.length < 4;) n.push(n[0].slice());
                    return n
                }

                function s(t) {
                    return t.map(u)
                }

                function c(t) {
                    var n = t.type;
                    return "GeometryCollection" === n ? {
                        type: n,
                        geometries: t.geometries.map(c)
                    } : n in h ? {
                        type: n,
                        coordinates: h[n](t)
                    } : null
                }
                var l = e(t.transform),
                    f = t.arcs,
                    h = {
                        Point: function(t) {
                            return o(t.coordinates)
                        },
                        MultiPoint: function(t) {
                            return t.coordinates.map(o)
                        },
                        LineString: function(t) {
                            return a(t.arcs)
                        },
                        MultiLineString: function(t) {
                            return t.arcs.map(a)
                        },
                        Polygon: function(t) {
                            return s(t.arcs)
                        },
                        MultiPolygon: function(t) {
                            return t.arcs.map(s)
                        }
                    };
                return c(n)
            }

            function c(t, n) {
                function e(n) {
                    var e, r = t.arcs[n < 0 ? ~n : n],
                        i = r[0];
                    return t.transform ? (e = [0, 0], r.forEach(function(t) {
                        e[0] += t[0], e[1] += t[1]
                    })) : e = r[r.length - 1], n < 0 ? [e, i] : [i, e]
                }

                function r(t, n) {
                    for (var e in t) {
                        var r = t[e];
                        delete n[r.start], delete r.start, delete r.end, r.forEach(function(t) {
                            i[t < 0 ? ~t : t] = 1
                        }), u.push(r)
                    }
                }
                var i = {},
                    o = {},
                    a = {},
                    u = [],
                    s = -1;
                return n.forEach(function(e, r) {
                    var i, o = t.arcs[e < 0 ? ~e : e];
                    o.length < 3 && !o[1][0] && !o[1][1] && (i = n[++s], n[s] = e, n[r] = i)
                }), n.forEach(function(t) {
                    var n, r, i = e(t),
                        u = i[0],
                        s = i[1];
                    if (n = a[u])
                        if (delete a[n.end], n.push(t), n.end = s, r = o[s]) {
                            delete o[r.start];
                            var c = r === n ? n : n.concat(r);
                            o[c.start = n.start] = a[c.end = r.end] = c
                        } else o[n.start] = a[n.end] = n;
                    else if (n = o[s])
                        if (delete o[n.start], n.unshift(t), n.start = u, r = a[u]) {
                            delete a[r.end];
                            var l = r === n ? n : r.concat(n);
                            o[l.start = r.start] = a[l.end = n.end] = l
                        } else o[n.start] = a[n.end] = n;
                    else n = [t], o[n.start = u] = a[n.end = s] = n
                }), r(a, o), r(o, a), n.forEach(function(t) {
                    i[t < 0 ? ~t : t] || u.push([t])
                }), u
            }

            function l(t) {
                return s(t, f.apply(this, arguments))
            }

            function f(t, n, e) {
                function r(t) {
                    var n = t < 0 ? ~t : t;
                    (l[n] || (l[n] = [])).push({
                        i: t,
                        g: s
                    })
                }

                function i(t) {
                    t.forEach(r)
                }

                function o(t) {
                    t.forEach(i)
                }

                function a(t) {
                    "GeometryCollection" === t.type ? t.geometries.forEach(a) : t.type in f && (s = t, f[t.type](t.arcs))
                }
                var u = [];
                if (arguments.length > 1) {
                    var s, l = [],
                        f = {
                            LineString: i,
                            MultiLineString: o,
                            Polygon: o,
                            MultiPolygon: function(t) {
                                t.forEach(o)
                            }
                        };
                    a(n), l.forEach(arguments.length < 3 ? function(t) {
                        u.push(t[0].i)
                    } : function(t) {
                        e(t[0].g, t[t.length - 1].g) && u.push(t[0].i)
                    })
                } else
                    for (var h = 0, p = t.arcs.length; h < p; ++h) u.push(h);
                return {
                    type: "MultiLineString",
                    arcs: c(t, u)
                }
            }

            function h(t) {
                var n = t[0],
                    e = t[1],
                    r = t[2];
                return Math.abs((n[0] - r[0]) * (e[1] - n[1]) - (n[0] - e[0]) * (r[1] - n[1]))
            }

            function p(t) {
                for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;) n = i, i = t[e], o += n[0] * i[1] - n[1] * i[0];
                return o / 2
            }

            function d(t) {
                return s(t, g.apply(this, arguments))
            }

            function g(t, n) {
                function e(t) {
                    t.forEach(function(n) {
                        n.forEach(function(n) {
                            (i[n = n < 0 ? ~n : n] || (i[n] = [])).push(t)
                        })
                    }), o.push(t)
                }

                function r(n) {
                    return Math.abs(p(s(t, {
                        type: "Polygon",
                        arcs: [n]
                    }).coordinates[0]))
                }
                var i = {},
                    o = [],
                    a = [];
                return n.forEach(function(t) {
                    "Polygon" === t.type ? e(t.arcs) : "MultiPolygon" === t.type && t.arcs.forEach(e)
                }), o.forEach(function(t) {
                    if (!t._) {
                        var n = [],
                            e = [t];
                        for (t._ = 1, a.push(n); t = e.pop();) n.push(t), t.forEach(function(t) {
                            t.forEach(function(t) {
                                i[t < 0 ? ~t : t].forEach(function(t) {
                                    t._ || (t._ = 1, e.push(t))
                                })
                            })
                        })
                    }
                }), o.forEach(function(t) {
                    delete t._
                }), {
                    type: "MultiPolygon",
                    arcs: a.map(function(n) {
                        var e, o = [];
                        if (n.forEach(function(t) {
                                t.forEach(function(t) {
                                    t.forEach(function(t) {
                                        i[t < 0 ? ~t : t].length < 2 && o.push(t)
                                    })
                                })
                            }), o = c(t, o), (e = o.length) > 1)
                            for (var a, u, s = 1, l = r(o[0]); s < e; ++s)(a = r(o[s])) > l && (u = o[0], o[0] = o[s], o[s] = u, l = a);
                        return o
                    })
                }
            }

            function v(t) {
                function n(t, n) {
                    t.forEach(function(t) {
                        t < 0 && (t = ~t);
                        var e = i[t];
                        e ? e.push(n) : i[t] = [n]
                    })
                }

                function e(t, e) {
                    t.forEach(function(t) {
                        n(t, e)
                    })
                }

                function r(t, n) {
                    "GeometryCollection" === t.type ? t.geometries.forEach(function(t) {
                        r(t, n)
                    }) : t.type in u && u[t.type](t.arcs, n)
                }
                var i = {},
                    a = t.map(function() {
                        return []
                    }),
                    u = {
                        LineString: n,
                        MultiLineString: e,
                        Polygon: e,
                        MultiPolygon: function(t, n) {
                            t.forEach(function(t) {
                                e(t, n)
                            })
                        }
                    };
                t.forEach(r);
                for (var s in i)
                    for (var c = i[s], l = c.length, f = 0; f < l; ++f)
                        for (var h = f + 1; h < l; ++h) {
                            var p, d = c[f],
                                g = c[h];
                            (p = a[d])[s = o(p, g)] !== g && p.splice(s, 0, g), (p = a[g])[s = o(p, d)] !== d && p.splice(s, 0, d)
                        }
                return a
            }

            function y(t, n) {
                return t[1][2] - n[1][2]
            }

            function m() {
                function t(t, n) {
                    for (; n > 0;) {
                        var e = (n + 1 >> 1) - 1,
                            i = r[e];
                        if (y(t, i) >= 0) break;
                        r[i._ = n] = i, r[t._ = n = e] = t
                    }
                }

                function n(t, n) {
                    for (;;) {
                        var e = n + 1 << 1,
                            o = e - 1,
                            a = n,
                            u = r[a];
                        if (o < i && y(r[o], u) < 0 && (u = r[a = o]), e < i && y(r[e], u) < 0 && (u = r[a = e]), a === n) break;
                        r[u._ = n] = u, r[t._ = n = a] = t
                    }
                }
                var e = {},
                    r = [],
                    i = 0;
                return e.push = function(n) {
                    return t(r[n._ = i] = n, i++), i
                }, e.pop = function() {
                    if (!(i <= 0)) {
                        var t, e = r[0];
                        return --i > 0 && (t = r[i], n(r[t._ = 0] = t, 0)), e
                    }
                }, e.remove = function(e) {
                    var o, a = e._;
                    if (r[a] === e) return a !== --i && (o = r[i], (y(o, e) < 0 ? t : n)(r[o._ = a] = o, a)), a
                }, e
            }

            function x(t, n) {
                function i(t) {
                    u.remove(t), t[1][2] = n(t), u.push(t)
                }
                var o = e(t.transform),
                    a = r(t.transform),
                    u = m();
                return n || (n = h), t.arcs.forEach(function(t) {
                    var e, r, s, c, l = [],
                        f = 0;
                    for (r = 0, s = t.length; r < s; ++r) c = t[r], o(t[r] = [c[0], c[1], 1 / 0], r);
                    for (r = 1, s = t.length - 1; r < s; ++r) e = t.slice(r - 1, r + 2), e[1][2] = n(e), l.push(e), u.push(e);
                    for (r = 0, s = l.length; r < s; ++r) e = l[r], e.previous = l[r - 1], e.next = l[r + 1];
                    for (; e = u.pop();) {
                        var h = e.previous,
                            p = e.next;
                        e[1][2] < f ? e[1][2] = f : f = e[1][2], h && (h.next = p, h[2] = e[2], i(h)), p && (p.previous = h, p[0] = e[0], i(p))
                    }
                    t.forEach(a)
                }), t
            }
            var M = "1.6.27";
            t.version = M, t.mesh = l, t.meshArcs = f, t.merge = d, t.mergeArcs = g, t.feature = a, t.neighbors = v, t.presimplify = x, Object.defineProperty(t, "__esModule", {
                value: !0
            })
        })
    }, {}],
    4: [function(t, n, e) {
        "use strict";

        function r(t, n, e) {
            var r;
            return function() {
                function i() {
                    e || t.apply(o, a), r = null
                }
                var o = this,
                    a = arguments;
                r ? clearTimeout(r) : e && t.apply(o, a), r = setTimeout(i, n || 300)
            }
        }
        var i = (t("./pg-template/postGraphicsTemplate.js"), t("d3")),
            o = (t("topojson"), t("./stacked")),
            a = t("hammerjs");
        t("./newtooltip");
        var u = t("./states"),
            s = new o,
            c = (i.scale.sqrt().range([1, 20]), i.scale.category10(), {
                xs: 480,
                sm: 768,
                md: 992,
                lg: 1200,
                xl: 1500
            }),
            l = new a(document.getElementById("key-coal")),
            f = new a(document.getElementById("key-gas")),
            h = new a(document.getElementById("key-nuclear")),
            p = new a(document.getElementById("key-hydro")),
            d = new a(document.getElementById("key-solar")),
            g = new a(document.getElementById("key-oil")),
            v = new a(document.getElementById("key-wind")),
            y = new a(document.getElementById("key-other"));
        l.on("tap", function() {
            s.sortBy("coalpct")
        }), f.on("tap", function() {
            s.sortBy("natgaspct")
        }), p.on("tap", function() {
            s.sortBy("hydropct")
        }), d.on("tap", function() {
            s.sortBy("solarpct")
        }), h.on("tap", function() {
            s.sortBy("nuclearpct")
        }), v.on("tap", function() {
            s.sortBy("windpct")
        }), y.on("tap", function() {
            s.sortBy("otherpct")
        }), g.on("tap", function() {
            s.sortBy("oilpct")
        });
        var m = $(window).width();
        s.screenWidth(m);
        var x = [],
            M = {};
        i.csv("data/generation2016.csv", function(t) {
                x = t, M = i.nest().key(function(t) {
                    return t.stab
                }).rollup(function(t) {
                    return t[0]
                }).map(x)
            }), $(document).ready(function() {
                if (i.csv("data/generation2016-min.csv", function(t) {
                        t = t.filter(function(t) {
                            return console.log(t, "DC" != t.stab && "US-Total" != t.stab), "DC" != t.stab && "US-Total" != t.stab
                        }), i.select("#sources-by-state").datum(t).call(s), i.select(window).on("resize", function() {
                            var n = $(window).width();
                            i.select("#sources-by-state").datum(t).call(s.screenWidth(n))
                        })
                    }), m > c.md) {
                    var t = document.getElementById("svg-img-wrap"),
                        n = i.select(t).selectAll("path");
                    n.on("mouseover", function(t) {
                        var n = document.getElementById("svg-img-wrap"),
                            e = (n.getBoundingClientRect(), i.select(this).attr("id").slice(6, 8));
                        i.select(this).attr("fill", "#cccccc");
                        var r = u[e],
                            o = i.event,
                            a = '<h4 class="franklin">' + r + "</h4>";
                        if (x.length > 0) {
                            var s = M[e];
                            a += "<p><b>Total electricity generation,<br> January to May 2015:</b><br> " + s.total + " gigawatt-hours</p>";
                            var c = [{
                                key: "coal",
                                display: "Coal"
                            }, {
                                key: "natural gas",
                                display: "Natural gas"
                            }, {
                                key: "nuclear",
                                display: "Nuclear"
                            }, {
                                key: "hydro",
                                display: "Hydro"
                            }, {
                                key: "wind",
                                display: "Wind"
                            }, {
                                key: "solar",
                                display: "Solar"
                            }, {
                                key: "liquid petroleum",
                                display: "Oil"
                            }];
                            c = c.sort(function(t, n) {
                                var e = s[t.key].replace(",", ""),
                                    r = s[n.key].replace(",", ""),
                                    i = +e || 0,
                                    o = +r || 0;
                                return o - i
                            }), c.forEach(function(t) {
                                s[t.key] && +s[t.key].replace(",", "") > 0 && (a += '<br><div class="tooltip-source ' + t.key + '"></div><b>' + t.display + ":</b> " + s[t.key] + " GWh")
                            }), a += "</p>"
                        }
                        $.showTooltip(o, {
                            wrapperId: "svg-img-wrap",
                            data: t,
                            contentFunction: function(t) {
                                var n = a;
                                return n
                            },
                            xOffset: 20,
                            yOffset: -50,
                            flipY: !0,
                            centerY: !0
                        })
                    }).on("mouseout", function(t) {
                        $.hideTooltip("svg-img-wrap"), i.select(this).attr("fill", "rgb(221, 221, 221)")
                    })
                }
            }),
            function(t, n) {
                jQuery.fn[n] = function(t) {
                    return t ? this.bind("resize", r(t)) : this.trigger(n)
                }
            }(jQuery, "smartresize")
    }, {
        "./newtooltip": 5,
        "./pg-template/postGraphicsTemplate.js": 10,
        "./stacked": 11,
        "./states": 12,
        d3: 1,
        hammerjs: 2,
        topojson: 3
    }],
    5: [function(t, n, e) {
        "use strict";
        ! function(t) {
            t.showTooltip = function(n, e) {
                function r(n) {
                    var r, o = {
                            left: t("#" + e.wrapperId).offset().left,
                            bottom: t("#" + e.wrapperId).offset().top + t("#" + e.wrapperId).height()
                        },
                        a = {
                            x: t("#" + e.wrapperId).width() / 2,
                            y: t("#" + e.wrapperId).height() / 2
                        },
                        u = "undefined" != typeof e.xOffset ? e.xOffset : 20,
                        s = "undefined" != typeof e.yOffset ? e.yOffset : 0,
                        c = n.pageY > o.bottom - a.y ? n.pageY + s - i.height() : n.pageY + s;
                    n.pageX > o.left + a.x ? (r = t(window).width() - n.pageX + u, i.css({
                        right: r,
                        left: "auto",
                        top: c
                    })) : (r = n.pageX + u, i.css({
                        right: "auto",
                        left: r,
                        top: c
                    }))
                }
                0 == t("#wp-graphics-tooltips").length ? t("body").prepend('<div id="wp-graphics-tooltips" class="posrel"><div id="' + e.wrapperId + '-wp-graphics-tooltip" class="wp-graphics-tooltip franklin"></div></div>') : 0 == t("#" + e.wrapperId + "-wp-graphics-tooltip").length && t("#wp-graphics-tooltips").append('<div id="' + e.wrapperId + '-wp-graphics-tooltip" class="wp-graphics-tooltip franklin"></div>');
                var i = t("#" + e.wrapperId + "-wp-graphics-tooltip");
                r(n), t("#" + e.wrapperId).on("mousemove", r), i.on("mousemove", r), i.on("mouseover", function() {
                    i.show()
                }).on("mouseout", function() {
                    i.hide()
                }), i.show(), i.html(e.contentFunction(e.data))
            }, t.hideTooltip = function(n) {
                var e = t("#" + n + "-wp-graphics-tooltip");
                t("#" + n).off("mousemove"), e.off("mousemove mouseover mouseout"), e.hide()
            }
        }(jQuery)
    }, {}],
    6: [function(t, n, e) {
        "use strict";
        (function() {
            var t = {};
            window.TWP = window.TWP || {
                Module: {}
            }, window.TWP.Module = window.TWP.Module || {}, window.TWP.Module.util = t, t.getParameters && "undefined" != typeof t.getParameters || (t.getParameters = function(t) {
                var n, e, r = [],
                    i = {};
                if (t && t.indexOf("?") !== -1 && (r = t.split("?")[1])) {
                    n = r.indexOf("&") ? r.split("&") : [r];
                    for (var o = 0; o < n.length; o++) n[o].indexOf("=") !== -1 && (e = n[o].split("="), i[e[0]] = unescape(e[1]))
                }
                return i
            }), t.changeIframeHeight = function() {
                var t = window.location.origin.replace(window.location.protocol, "") + window.location.pathname,
                    n = [];
                n.push('iframe[src="' + t + window.location.search + '"]'), "/" === window.location.pathname[window.location.pathname.length - 1] ? n.push('iframe[src="' + (t.slice(0, -1) + window.location.search) + '"]') : n.push('iframe[src="' + t + "/" + window.location.search + '"]');
                var e = $(window.top.document).find(n.join(",")),
                    r = $("body").outerHeight(!0);
                e.css({
                    height: r + "px"
                })
            }, t.debounce = function(t, n, e) {
                var r;
                return function() {
                    var i = this,
                        o = arguments,
                        a = function() {
                            r = null, e || t.apply(i, o)
                        },
                        u = e && !r;
                    clearTimeout(r), r = setTimeout(a, n), u && t.apply(i, o)
                }
            }, $(document).ready(function() {
                var n = t.getParameters(document.URL);
                if (n.template && "iframe" === n.template) {
                    try {
                        document.domain = "washingtonpost.com"
                    } catch (e) {}
                    $("body").addClass("iframe").show().css("display", "block"), n.graphic_id && $("#" + n.graphic_id).siblings().hide(), $("#pg-content, .pg-article").siblings().hide();
                    try {
                        if (window.location.hostname === window.top.location.hostname) {
                            var r = t.debounce(function() {
                                t.changeIframeHeight()
                            }, 250);
                            window.setTimeout(function() {
                                t.changeIframeHeight()
                            }, 1e3), $(window).on("resize", r)
                        }
                    } catch (e) {}
                }
            })
        }).call(void 0)
    }, {}],
    7: [function(t, n, e) {
        "use strict";
        n.exports = function(t) {
            var n = "http://data.washingtonpost.com/content/top/?q=%7B%22_id%22:%22graphics%22%7D",
                e = t.items || 8;
            jQuery.getJSON(n, function(n) {
                try {
                    var r = [];
                    n.q_results[0].rows[0].content.slice(0, e).map(function(t, n) {
                        var e = "https://img.washingtonpost.com/wp-apps/imrs.php",
                            i = e + "?src=" + t.media[0].url + "&w=60&h=60";
                        r.push('\n                    <div class="article">\n                        <a href="' + t.url + '">\n                            <div class="number left">' + (n + 1) + "</div>\n                            <img src=" + i + ' class="right" />\n                            <div class="headline">' + t.linkText + '</div>\n                            <div class="clear"></div>\n                        </a>\n                    </div>\n                ')
                    }), jQuery.isArray(t.container) ? jQuery.each(t.container, function(t, n) {
                        jQuery(n).html(r.join(""))
                    }) : jQuery(t.container).html(r.join(""))
                } catch (i) {
                    console.log("Error fetching top content", i)
                }
            })
        }
    }, {}],
    8: [function(t, n, e) {
        "use strict";
        ! function(t, n) {
            function e() {
                return !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Kindle/i) || navigator.userAgent.match(/Windows Phone/i))
            }

            function r() {
                t("#sections-menu-off-canvas > ul > li").each(function() {
                    if (t("#main-sections-nav").hasClass("active") && t(this).hasClass("has-sub")) {
                        var e = t(this).find("ul").height() / 2 - 10,
                            r = t(this).offset().top - t(n).scrollTop();
                        r < 94 ? e = 0 : r - e < 95 && (e = r - 95), t(this).find("ul").css("top", "-" + e + "px")
                    }
                })
            }
            var i = n.wp_pb = n.wp_pb || {},
                o = i.nav = i.nav || {},
                a = {
                    init: function() {
                        if (!t("#page").hasClass("ie8")) {
                            if (t("#pb-root .pb-f-page-header-v2").length) {
                                var e = t(".pb-f-page-header-v2");
                                t("#pb-root").before(e)
                            }(n.ActiveXObject || "ActiveXObject" in n) && (t("#main-sections-nav").addClass("ie"), t("#wp-header").addClass("ie")), t("#sections-menu-off-canvas ul.side-nav li").each(function() {
                                    if (!t(this).hasClass("nav-screenreader-link")) {
                                        var n = t(this).find(">a"),
                                            e = n.html().replace(/\s+/g, "").replace(/\&/g, "-").toLowerCase(),
                                            r = n.attr("href");
                                        if (t(this).hasClass("main-nav")) n.attr("href", r + "?nid=menu_nav_" + e);
                                        else if (t(this).hasClass("sub-nav-item")) {
                                            var i = t(this).parents(".main-nav").find(">a").text().replace(/\s+/g, "").replace(/\&/g, "-").toLowerCase();
                                            n.attr("href", r + "?nid=menu_nav_" + i + "-" + e)
                                        }
                                    }
                                }), t("#sections-menu-wide li").each(function() {
                                    var n = t(this).find("a"),
                                        e = n.html().replace(/\s+/g, "").replace(/\&/g, "-").toLowerCase(),
                                        r = n.attr("href");
                                    n.attr("href", r + "?nid=top_nav_" + e)
                                }),
                                function() {
                                    var n;
                                    t("#search-btn").click(function(n) {
                                        t(this).hasClass("closed") ? (t(this).removeClass("closed").addClass("opened"), t("#search-field").removeClass("closed").addClass("opened"), t("#search-field").focus()) : t(this).hasClass("opened") && t("#search-form").submit()
                                    }), t("#search-btn").bind("mouseover", function() {
                                        t(this).hasClass("opened") && (n = !0)
                                    }).bind("mouseout", function() {
                                        t(this).hasClass("opened") && (n = !1)
                                    }), t("#search-field").blur(function(e) {
                                        t(this).hasClass("opened") && !n && (t(this).removeClass("opened").addClass("closed"), t("#search-btn").removeClass("opened").addClass("closed"))
                                    }), t("#search-form, #nav-search-mobile").submit(function(n) {
                                        if (t(this).find("input[type=text]").val()) {
                                            try {
                                                s.sendDataToOmniture("Search Submit", "event2", {
                                                    eVar38: t(this).find("input[type=text]").val(),
                                                    eVar1: s.pageName
                                                })
                                            } catch (e) {}
                                            return !0
                                        }
                                        return !1
                                    })
                                }(),
                                function() {
                                    function e(n) {
                                        r = setTimeout(function() {
                                            t("#main-sections-nav").addClass("subNavigation"), t(n).addClass("hover")
                                        }, 75)
                                    }
                                    var r;
                                    t("#logged-in-status .nav-sign-in").hover(function(n) {
                                        t("#nav-subscribe").addClass("signIn-hover")
                                    }, function(n) {
                                        t("#nav-subscribe").removeClass("signIn-hover")
                                    }), t("#sections-menu-off-canvas li a").hover(function(n) {
                                        t(this).addClass("hover-name"), t(this).parent().addClass("unhover-list")
                                    }, function(n) {
                                        t(this).removeClass("hover-name"), t(this).parent().removeClass("unhover-list")
                                    }), t("#nav-user").click(function() {
                                        t("#user-menu").toggleClass("nav-user-show")
                                    }), t("#settings-nav-btn").click(function() {
                                        t("#logged-in-status").hasClass("logged-in") ? t("#user-menu").toggleClass("nav-user-show") : t(".sign-up-buttons").toggleClass("nav-user-show")
                                    }), t(".main-nav").hover(function() {
                                        e(t(this))
                                    }, function() {
                                        t(this).removeClass("hover"), t("#main-sections-nav").removeClass("subNavigation"), clearTimeout(r)
                                    }), t(n).width() <= 480 && t(".main-nav").click(function() {
                                        location.href = t(this).find(".main-nav-item").attr("href")
                                    })
                                }()
                        }
                    },
                    setupNav: function() {
                        t.fn.appendLinkItems = function(n, e) {
                            var r = this;
                            return e = e || "<li>", t.each(n, function(n, i) {
                                var o = t("<a>");
                                i.title && o.text(i.title), i.html && o.html(i.html), i.href && o.attr("href", i.href), i.attr && o.attr(i.attr), r.append(t(e).append(o).addClass(i.selected ? "selected" : ""))
                            }), this
                        }, o.setIdentityMenu = function(n) {
                            var e = t("#user-menu ul");
                            e.children("li").remove(), e.appendLinkItems(n)
                        }, o.closeDropdowns = function() {
                            t("#wp-header .dropdown-trigger.active").each(function() {
                                t(this).removeClass("active"), t("#" + t(this).data("menu")).hide()
                            }), t(".leaderboard").removeClass("hideAd")
                        }, o.showNav = function() {
                            t("#wp-header").hasClass("bar-hidden") && setTimeout(function() {
                                t("#wp-header").removeClass("bar-hidden")
                            }, 250)
                        }, o.hideNav = function() {
                            t("#wp-header").hasClass("bar-hidden") || setTimeout(function() {
                                t("#wp-header").addClass("bar-hidden")
                            }, 250)
                        }, t(".section-menu-btn").click(function(e) {
                            if (e.stopPropagation(), e.preventDefault(), !t("html").hasClass("drawbridge-up")) {
                                var i = t(this),
                                    o = t("#main-sections-nav");
                                o.hasClass("active") ? (t("body").removeClass("left-menu left-menu-pb"), i.removeClass("active"), o.removeClass("active")) : (o.css("height", t(n).height() - 45), t("body").addClass("left-menu left-menu-pb"), i.addClass("active"), o.addClass("active")), r()
                            }
                        })
                    },
                    setScrollEvents: function() {
                        var i = t("#logo-in-nav").hasClass("homePage"),
                            a = t(this).scrollTop() ? t(this).scrollTop() : 0,
                            u = e(),
                            s = t(".pb-f-page-notification-bar"),
                            c = 0;
                        if (s.length && (c = s.outerHeight()), i) t("#logo-in-nav").removeClass("nav-display-show").addClass("nav-display-hide"), t(n).scroll(function() {
                            var e = !1,
                                i = 768,
                                o = t(n).width(),
                                a = n.pageYOffset,
                                u = 80;
                            o >= i && (a > u && 0 == e ? (e = !0, t("#sections-menu-wide").removeClass("nav-display-show").addClass("nav-display-hide"), t("#logo-in-nav").addClass("nav-display-show").removeClass("nav-display-hide")) : a <= 0 && (e = !1, t("#section-menu-btn").hasClass("active") || (t("#logo-in-nav").removeClass("nav-display-show").addClass("nav-display-hide"), t("#sections-menu-wide").addClass("nav-display-show").removeClass("nav-display-hide")))), t("#main-sections-nav").hasClass("active") && r()
                        });
                        else if (!i || u) {
                            var l = 50,
                                f = 150;
                            u && (f = 30, l = 25), t(n).scroll(function() {
                                if (!t("#section-menu-btn").hasClass("active")) {
                                    var n = t(this).scrollTop();
                                    if (n + 80 < a || 0 === n) {
                                        var e = n;
                                        setTimeout(function() {
                                            var r = t(this).scrollTop();
                                            (e - r > f && !t("#wp-header").hasClass("no-scroll-peek") || 0 === n) && (o.showNav(),
                                                a = n)
                                        }, l)
                                    } else n - 80 > a && n > 50 + c && (o.hideNav(), a = n);
                                    t("#user-menu").removeClass("nav-user-show"), t(".sign-up-buttons").removeClass("nav-user-show")
                                }
                                t("#main-sections-nav").hasClass("active") && r()
                            })
                        }
                        t(n).resize(function() {
                            o.closeDropdowns(), t("body").hasClass("left-menu") && t("#main-sections-nav").css("height", t(n).height() - 45)
                        }), t(document).ready(function() {
                            o.showNav()
                        })
                    },
                    setIdentity: function() {
                        var e;
                        o.getIdentityProvider = function() {
                            return e
                        }, o.setIdentityProvider = function(n) {
                            var r = function() {};
                            e = {}, e.name = n.name || "", e.getUserId = n.getUserId || r, e.getUserMenu = n.getUserMenu || r, e.getSignInLink = n.getSignInLink || r, e.getRegistrationLink = n.getRegistrationLink || r, e.isUserLoggedIn = n.isUserLoggedIn || r, e.isUserSubscriber = n.isUserSubscriber || r, e.render = n.render || function() {
                                e.isUserLoggedIn() ? (t("#nav-user .username").text(e.getUserId()), o.setIdentityMenu(e.getUserMenu()), t("#nav-user, #user-menu").removeClass("hidden"), "0" === e.isUserSubscriber() && (t("#user-menu ul li:first-child").after(t("#nav-subscribe").clone()), t("#user-menu  #nav-subscribe").removeClass("hidden")), t("#logged-in-status").addClass("logged-in"), t(".nav-sign-in").addClass("hidden"), t("#nav-subscribe").addClass("hidden"), t("#nav-subscribe-mobile").addClass("hidden")) : (t("#sign-in-link").attr("href", e.getSignInLink() + "&nid=top_pb_signin"), t(".nav-sign-in").removeClass("hidden"), t("#nav-subscribe").removeClass("hidden"), t("#nav-subscribe-mobile").removeClass("hidden"))
                            }, o.renderIdentity()
                        }, o.renderIdentity = function(t) {
                            t = t || function() {}, e && e.render(), t(e)
                        };
                        var r = t("#nav-user").data("show-identity"),
                            i = n.location.href.split("?")[0],
                            a = {
                                name: "TWP",
                                getUserId: function() {
                                    var t = TWP.Util.User.getUserName(),
                                        n = TWP.Util.User.getUserId();
                                    return "string" == typeof t && t.length > 0 ? t : n
                                },
                                getUserMenu: function() {
                                    return [{
                                        title: "Profile",
                                        href: TWP.signin.profileurl + i + "&refresh=true"
                                    }, {
                                        title: "Log out",
                                        href: TWP.signin.logouturl_page
                                    }]
                                },
                                getSignInLink: function() {
                                    return TWP.signin.loginurl_page + i
                                },
                                getRegistrationLink: function() {
                                    return TWP.signin.registrationurl_page + i
                                },
                                isUserSubscriber: function() {
                                    var t = document.cookie.match(/rplsb=([0-9]+)/) ? RegExp.$1 : "";
                                    return t
                                },
                                isUserLoggedIn: function() {
                                    return !!TWP.Util.User && TWP.Util.User.getAuthentication()
                                }
                            };
                        if (r) {
                            (new Date).getTime();
                            ! function u() {
                                if (!o.getIdentityProvider())
                                    if (TWP && TWP.signin && TWP.Util) o.setIdentityProvider(a), o.renderIdentity();
                                    else {
                                        (new Date).getTime();
                                        n.setTimeout(function() {
                                            u()
                                        }, 200)
                                    }
                            }()
                        }
                    }
                };
            a.init(), a.setupNav(), a.setScrollEvents(), a.setIdentity()
        }(jQuery, window)
    }, {}],
    9: [function(t, n, e) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        ! function() {
            try {
                var t = {
                        myRoot: ".top-sharebar-wrapper",
                        init: function() {
                            $(".pb-f-sharebars-top-share-bar").each(function(n, e) {
                                if (TWPHead.desktop || $(e).find(".top-sharebar-wrapper").data("pb-prevent-ajax") || 0 != $(e).find(".vertical-sticky-top-sharebar").size()) t.originalInit();
                                else {
                                    var r = $(e).find(".top-sharebar-wrapper").data("pb-canonical-url");
                                    r.indexOf(".washingtonpost.com") >= 0 ? $.ajax({
                                        url: "/pb/api/v2/render/feature",
                                        dataType: "json",
                                        data: {
                                            id: $(e)[0].id,
                                            uri: window.location.pathname,
                                            contentUri: r,
                                            desktop: TWPHead.desktop,
                                            mobile: TWPHead.mobile
                                        },
                                        cache: !0,
                                        jsonCallback: "wpTopShareBarAjax",
                                        success: function(n) {
                                            $(e).empty(), $(e).append($(n.rendering).children()), t.originalInit()
                                        },
                                        error: function(n) {
                                            t.originalInit()
                                        }
                                    }) : t.originalInit(), $(e).find(".top-sharebar-wrapper").data("pb-prevent-ajax", "true")
                                }
                            })
                        },
                        originalInit: function(t) {
                            var r = this;
                            t = t || this.myRoot;
                            var i = $(t);
                            i.hasClass("sticky-top-sharebar") && e.init(), i.each(function(t, e) {
                                $(e).hasClass("vertical-sticky-top-sharebar") && n.init($(e));
                                var i = $(e),
                                    o = $(".tool:not(.more, .read-later-bookmark, .read-later-list)", i),
                                    a = $(".social-tools-wrapper", i),
                                    u = $(".tool.more", a),
                                    s = $(".social-tools-additional", i),
                                    c = window.innerWidth > 0 ? window.innerWidth : screen.width;
                                1 === mobile_browser && c < 480;
                                if (u.off("click").on("click", this, function(t) {
                                        u.hide(), s.show("fast", function(t) {
                                            i.addClass("expanded"), $(".social-tools", s).animate({
                                                "margin-left": 0
                                            }, 4250)
                                        }).addClass("more-open")
                                    }), o.bind({
                                        click: function(t) {
                                            var n = $(this).attr("class");
                                            n = "undefined" != typeof n ? n.split(" ")[0].trim() : "", r.trackTraffic("share." + n, n + "_bar")
                                        }
                                    }), wp_pb && wp_pb.BrowserInfo && wp_pb.BrowserInfo.tablet && i.addClass("tablet"), TWPHead.mobile && i.find(".vertical-sticky-top-sharebar").size() > 0) {
                                    var l = function() {
                                        var t = i.find(".social-tools-wrapper").width() - 5,
                                            n = Math.ceil(i.find(".social-tools-primary .social-tools .tool").first().outerWidth(!0));
                                        i.find(".social-tools-primary .social-tools .tool.more").hide();
                                        var e = i.find(".social-tools-primary .social-tools .tool:not(.more), .social-tools-additional .social-tools .tool").hide();
                                        i.find(".social-tools-readlater").length > 0 && (t -= Math.ceil(i.find(".social-tools-readlater").width()));
                                        for (var r = Math.floor(t / n), o = 0; o < e.length; o++) try {
                                            o < r ? $(e.get(o)).fadeIn() : $(e.get(o)).hide()
                                        } catch (a) {}
                                    };
                                    $(window).resize(function() {
                                        l()
                                    }), l()
                                } else i.find(".social-tools-primary .social-tools .tool").fadeIn();
                                i.removeClass("unprocessed")
                            }), "function" == typeof wp_pb.StaticMethods.initReadLater && wp_pb.StaticMethods.initReadLater(i, "top-share-bar")
                        },
                        trackTraffic: function(t, n) {
                            if ("function" == typeof window.sendDataToOmniture) {
                                var e = {
                                    eVar1: "object" == r(window.s) && s && s.eVar1,
                                    eVar2: "object" == r(window.s) && s && s.eVar2,
                                    eVar8: "object" == r(window.s) && s && s.eVar8,
                                    eVar17: "object" == r(window.s) && s && s.eVar17,
                                    eVar27: n
                                };
                                try {
                                    sendDataToOmniture(t, "event6", e)
                                } catch (i) {}
                            }
                        }
                    },
                    n = {
                        init: function(t) {
                            t.closest(".pb-f-sharebars-top-share-bar").insertBefore("#pb-root"), window.innerWidth > 992 && (t.css({
                                top: ($(window).height() - t.outerHeight() + 25) / 2 + "px"
                            }), t.animate({
                                left: "-1px"
                            }), $(window).resize(function() {
                                t.animate({
                                    top: ($(window).height() - t.outerHeight() + 25) / 2 + "px"
                                }, 50)
                            })), n.enableCollisionDetection(t)
                        },
                        enableCollisionDetection: function(t) {
                            var n = 600,
                                e = 3,
                                r = 0;
                            return function(i) {
                                function o(t, n) {
                                    var e = t.getBoundingClientRect(),
                                        r = n.getBoundingClientRect();
                                    return !(e.top > r.bottom || e.right < r.left || e.bottom < r.top || e.left > r.right)
                                }
                                var a;
                                !t || r > e || (a = setInterval(function() {
                                    var t = i.closest(".pb-f-sharebars-top-share-bar"),
                                        n = t.find(".top-sharebar-wrapper"),
                                        e = $("html").hasClass("gallery_story") ? $(".pb-f-gallery-gallery") : $("#main-content"),
                                        r = t.data("__mccollides"),
                                        u = {
                                            value: void 0
                                        };
                                    t.length && n.length && e.length ? (u.value = o(e[0], n[0]), r && u.value === r.value || (wp_pb.report("sticky-vertical-sharebar", "collides_with_main_content", u.value), t.data("__mccollides", {
                                        value: u.value
                                    }))) : clearInterval(a)
                                }, n), r++)
                            }
                        }("getBoundingClientRect" in document.documentElement)
                    },
                    e = {
                        setElmTop: function(t, n) {
                            var e = n ? "translate3d(0px, " + n + "px, 0px)" : "initial";
                            t.css({
                                transform: e
                            })
                        },
                        fixedPosition: function(t, n) {
                            var e = $(window).scrollTop();
                            e > n ? t.hasClass("top-sharebar-fixed") || (t.addClass("top-sharebar-fixed"), wp_pb.report("sticky-top-sharebar", "sharebar_fixed", !0)) : (t.removeClass("top-sharebar-fixed"), wp_pb.report("sticky-top-sharebar", "sharebar_unfixed", !0)), "block" == $(".shareBar-follow-modal").css("display") && ($("#wp-header").height() > 0 ? $(".shareBar-follow-modal").addClass("fixedModalNav").removeClass("fixedModal") : $(".shareBar-follow-modal").addClass("fixedModal").removeClass("fixedModalNav"))
                        },
                        moveOutOfRoot: function(t) {
                            var n = $("#pb-root");
                            if ("none" !== n.css("max-width")) {
                                var e = t.parent(),
                                    r = $(".pb-f-ad-leaderboard");
                                e.find(".sticky-top-sharebar").css("padding-top", "55px"), n.before(e), n.before(r)
                            }
                        },
                        detectMobileForSMS: function() {
                            if (mobile_browser) {
                                var t = "";
                                windows_browser ? t = "sms://?body=" : (android_browser || android233_browser) && (t = "sms:?body="), t.length > 0 ? $(".pb-f-sharebars-top-share-bar .sms-share-device.unprocessed").each(function() {
                                    $(this).attr("onclick", $(this).attr("onclick").replace(/sms:\?&body=/g, t)), $(this).removeClass("unprocessed")
                                }) : $(".pb-f-sharebars-top-share-bar .sms-share-device.unprocessed").removeClass("unprocessed")
                            }
                        },
                        init: function() {
                            var t = $(".sticky-top-sharebar"),
                                n = this;
                            if (t.length) {
                                this.moveOutOfRoot(t);
                                var e = t.offset().top,
                                    r = $("#wp-header");
                                "fixed" === r.css("position") && $(window).scrollTop() > e && this.fixedPosition(t, e), $(window).off("scroll.sharebar").on("scroll.sharebar", function() {
                                    n.fixedPosition(t, e)
                                }), this.detectMobileForSMS()
                            }
                        }
                    },
                    i = (document.cookie.match(/wapo_login_id=([^;]+)/) ? RegExp.$1 : "", document.cookie.match(/wapo_secure_login_id=([^;]+)/) ? RegExp.$1 : "", navigator.userAgent, {
                        currIncrementMax: 9,
                        currIncrementUnit: 2,
                        currIncrementIndex: 0,
                        init: function(t, n, e) {
                            t = t || "#article-body article, .related-story, .liveblog-intro, #liveblog-story-list .description, #full-recipe .article-content", n = n || "p, li", e = e || ".tool.textresizer", this.root = $(t), this.resizeableElements = $(n, this.root), $(".related-story").prev("h3").length > 0 && (this.resizeableElements.push($(".related-story").prev("h3")), this.resizeableElements.push($(".related-story h4 a"))), $(e).on("click", this, this.resize)
                        },
                        resize: function(t) {
                            var n = t.data;
                            n.currIncrementIndex == n.currIncrementMax && (n.currIncrementIndex = 0, n.currIncrementUnit = 2 == n.currIncrementUnit ? -2 : 2), n.currIncrementIndex = n.currIncrementIndex + 1, n.resizeableElements.each(function() {
                                elm = $(this), currSize = parseFloat(elm.css("font-size"), 5);
                                var t = currSize + n.currIncrementUnit;
                                elm.css("font-size", t), wp_pb.report("textresizer", "resized", t)
                            })
                        }
                    }),
                    o = function(t) {
                        if ("function" == typeof window.sendDataToOmniture) {
                            var n = {
                                eVar1: "object" == r(window.s) && s && s.eVar1,
                                eVar2: "object" == r(window.s) && s && s.eVar2,
                                eVar8: "object" == r(window.s) && s && s.eVar8,
                                eVar17: "object" == r(window.s) && s && s.eVar17,
                                eVar27: t
                            };
                            try {
                                sendDataToOmniture(t + ".click", "event6", n)
                            } catch (e) {}
                        }
                    };
                $(".social-tools-wrapper .tool.textresizer, .social-tools-wrapper .tool.print").bind("click", function() {
                    var t = $(this).attr("class").split(" ")[0].trim();
                    o(t)
                }), window.TWP = TWP || {}, TWP.SocialTools = TWP.SocialTools || t, TWP.SocialTools.init(), TWP.TextResizer = TWP.TextResizer || i, TWP.TextResizer.init();
                var a = isMobile.tablet();
                window.VisitorSegment && VisitorSegment("tablet", function() {
                    return a && $(window).width() > 768
                })
            } catch (u) {}
        }()
    }, {}],
    10: [function(t, n, e) {
        "use strict";
        var r = (t("./iframe.js"), t("./pbHeader.js"), t("./pbSocialTools.js"), t("./mostRead.js")),
            i = function() {
                var t = $("#nav-subscribe"),
                    n = t.attr("href"),
                    e = window.encodeURI(window.location.href);
                t.attr("href", n + e)
            };
        i(), $(".section-label-span").mouseover(function() {
            $(".story-label-explainer").show()
        }), $(".story-label-explainer").click(function() {
            $(".story-label-explainer").hide()
        }), jQuery(document).ready(function() {
            if (document.location.href.indexOf("template=iframe") == -1) try {
                r({
                    container: ["#relatedHeadlines", "#relatedHeadlinesSide"],
                    items: 5
                })
            } catch (t) {}
        })
    }, {
        "./iframe.js": 6,
        "./mostRead.js": 7,
        "./pbHeader.js": 8,
        "./pbSocialTools.js": 9
    }],
    11: [function(t, n, e) {
        "use strict";
        var r = t("./states"),
            i = t("d3");
        n.exports = function() {
            function t(t) {
                return x.reduce(function(n, e) {
                    return n.push({
                        state: t.stab,
                        source: e,
                        pct: +t[e.prop],
                        offset: n.reduce(function(t, n) {
                            return t + +n.pct
                        }, -1 * +t[x[0].prop])
                    }), n
                }, [])
            }

            function n(n) {
                function e() {
                    return i.svg.axis().scale(h).orient("left").tickValues([0, 25, 50, 75, 100]).tickFormat(w)
                }
                var c = {
                    top: 20,
                    right: 45,
                    bottom: 15,
                    left: 45
                };
                n.sort(function(t, n) {
                    return i.descending(t.coalpct, n.coalpct) || i.descending(t.natgaspct, n.natgaspct)
                }), a = 300 - c.top - c.bottom, u = i.select(this).node().getBoundingClientRect().width - c.right - c.left, s = u / 50, h = i.scale.linear().range([0, a / 2]).domain([0, 100]), i.select(this).select("svg").remove();
                var g = i.select(this).append("svg").attr("width", u + c.right + c.left).attr("height", a + c.top + c.bottom).append("g").attr("transform", "translate(" + c.left + "," + c.top + ")"),
                    v = g.append("text").style("font-size", "14px").attr("dy", 10).attr("class", "stacked-label").attr("text-anchor", "middle").attr("transform", "translate(" + u / 2 + "," + a / 7 + ")");
                v.append("tspan").text("Share of electricity generated "), d = v.append("tspan").text("by " + y[x[0].prop].toLowerCase()), f = g.selectAll("g.state").data(n.sort(function(t, n) {
                    return +n[x[0].prop] - +t[x[0].prop]
                })).enter().append("g").attr("transform", function(t, n) {
                    return "translate(" + n * s + "," + a / 2 + ")"
                }), l = f.selectAll("rect.othersource").data(t).enter().append("rect").attr("class", "othersource").attr("height", function(t) {
                    return h(t.pct)
                }).attr("width", s).attr("x", 0).attr("y", 0).attr("fill", function(t, n) {
                    return t.source.color
                }).attr("stroke", function(t, n) {
                    return i.rgb(t.source.color).darker(.5)
                }).attr("transform", function(t) {
                    return "translate(0," + h(t.offset) + ")"
                }), l.on("mouseover", function(t) {
                    $(t.source.key).toggleClass("hovered", !0), i.select(this).classed("mouseover", !0), $.showTooltip(i.event, {
                        wrapperId: "sources-by-state",
                        data: t,
                        contentFunction: function(t) {
                            var n = '<p class="franklin">' + y[t.source.prop] + " account for <b>" + Math.round(t.pct, 2) + " percent</b> of electricity generation in " + r[t.state] + ".</p>";
                            return n
                        },
                        xOffset: 20,
                        yOffset: -50,
                        flipY: !0,
                        centerY: !0
                    })
                }).on("mouseout", function(t) {
                    $(t.source.key).toggleClass("hovered", !1), i.select(this).classed("mouseover", !1), $.hideTooltip("sources-by-state")
                }).on("click", function(t, n) {
                    o.sortBy(t.source.prop)
                }), p = f.append("text").attr("dy", -3).attr("dx", s / 2).style("text-anchor", "middle").attr("transform", function(t) {
                    return "translate(0," + -1 * h(t[x[0].prop]) + ")"
                }).text(function(t) {
                    return t.stab
                }), g.append("g").attr("class", "ticks coal").attr("transform", "translate(-3,0)").call(e().scale(h.domain([100, 0]))), g.append("g").attr("class", "axis coal").attr("transform", "translate(" + u + ",0)").call(e().tickSize(u)), g.append("g").attr("class", "ticks othersources").attr("transform", "translate(" + (u + 3) + "," + a / 2 + ")").call(e().scale(h.domain([0, 100])).orient("right")), g.append("g").attr("class", "axis othersources").attr("transform", "translate(" + u + "," + a / 2 + ")").call(e().tickSize(u))
            }

            function e(n) {
                function e() {
                    return i.svg.axis().scale(h).orient("top").tickValues([0, 25, 50, 75, 100]).tickFormat(w)
                }
                n.sort(function(t, n) {
                    return i.descending(t.coalpct, n.coalpct) || i.descending(t.pctnatural_gas, n.pctnatural_gas)
                });
                var r = {
                    top: 50,
                    right: 20,
                    bottom: 20,
                    left: 20
                };
                u = i.select(this).node().getBoundingClientRect().width - r.right - r.left, c = 12, a = 50 * c, h = i.scale.linear().range([0, u / 2]).domain([0, 100]), i.select(this).select("svg").remove();
                var o = i.select(this).append("svg").attr("width", u + r.right + r.left).attr("height", a + r.top + r.bottom).append("g").attr("transform", "translate(" + r.left + "," + r.top + ")"),
                    s = o.append("text").style("font-size", "12px").attr("dy", 10).attr("class", "stacked-label").attr("text-anchor", "middle").attr("transform", "translate(" + (5 + u / 4) + ",-50)");
                s.append("tspan").text("Share of electricity generated"), d = s.append("tspan").attr("x", 0).attr("dy", 15).text("by " + y[x[0].prop].toLowerCase()), f = o.selectAll("g.state").data(n.sort(function(t, n) {
                    return +n[x[0].prop] - +t[x[0].prop]
                })).enter().append("g").attr("transform", function(t, n) {
                    return "translate(" + u / 2 + "," + n * c + ")"
                }), l = f.selectAll("rect.othersource").data(t).enter().append("rect").attr("class", "othersource").attr("width", function(t) {
                    return h(t.pct)
                }).attr("height", c).attr("x", 0).attr("y", 0).attr("fill", function(t, n) {
                    return t.source.color
                }).attr("stroke", function(t, n) {
                    return i.rgb(t.source.color).darker(.5)
                }).attr("transform", function(t) {
                    return "translate(" + h(t.offset) + ",0)"
                }), p = f.append("text").attr("dx", -2).attr("dy", c / 2 + 3).style("text-anchor", "end").attr("transform", function(t) {
                    return "translate(" + -1 * h(t[x[0].prop]) + ",0)"
                }).text(function(t) {
                    return t.stab
                }), o.append("g").attr("class", "ticks coal").attr("transform", "translate(0,-3)").call(e().scale(h.domain([100, 0]))), o.append("g").attr("class", "axis coal").attr("transform", "translate(0," + a + ")").call(e().tickSize(a)), o.append("g").attr("class", "ticks othersources").attr("transform", "translate(" + u / 2 + "," + (a + 3) + ")").call(e().scale(h.domain([0, 100])).orient("bottom")), o.append("g").attr("class", "axis othersources").attr("transform", "translate(" + u / 2 + "," + a + ")").call(e().tickSize(a))
            }

            function o(t) {
                t.each(function(t) {
                    g > v.sm ? n.call(this, t) : e.call(this, t)
                })
            }
            var a, u, s, c, l, f, h, p, d, g, v = {
                    xs: 480,
                    sm: 768,
                    md: 992,
                    lg: 1200,
                    xl: 1500
                },
                y = (i.scale.category10(), {
                    natgaspct: "Natural gas-powered plants",
                    coalpct: "Coal-powered plants",
                    nuclearpct: "Nuclear-powered plants",
                    hydropct: "Hydro-powered plants",
                    windpct: "Wind-powered plants",
                    oilpct: "Oil-powered plants",
                    solarpct: "Solar-powered plants",
                    otherpct: "Other sources"
                }),
                m = [{
                    prop: "natgaspct",
                    color: "#F68B28",
                    key: "#key-gas"
                }, {
                    prop: "coalpct",
                    color: "#555",
                    key: "#key-coal"
                }, {
                    prop: "nuclearpct",
                    color: "#CF4A9A",
                    key: "#key-nuclear"
                }, {
                    prop: "hydropct",
                    color: "#0081C5",
                    key: "#key-hydro"
                }, {
                    prop: "windpct",
                    color: "#0DB14B",
                    key: "#key-wind"
                }, {
                    prop: "oilpct",
                    color: "#ED1C24",
                    key: "#key-oil"
                }, {
                    prop: "solarpct",
                    color: "#D7C944",
                    key: "#key-solar"
                }, {
                    prop: "otherpct",
                    color: "#FFEFD5",
                    key: "#key-other"
                }],
                x = m,
                M = !0,
                w = function(t) {
                    return t + "%"
                };
            return o.renderHorizontally = function(t) {
                return M = t, o
            }, o.screenWidth = function(t) {
                return g = t, o
            }, o.sortBy = function(n) {
                var e = x.splice(x.map(function(t) {
                    return t.prop
                }).indexOf(n), 1);
                x.sort(function(t, n) {
                    return m.indexOf(t) - m.indexOf(n)
                }), x.unshift(e[0]), console.log("hi", $(".key-icon"), $(x[0].key)), $(".key-icon").removeClass("selected"), $(x[0].key).addClass("selected"), d.text("by " + y[x[0].prop].toLowerCase()), l.data(t, function(t) {
                    return t.state + t.source.prop
                }), l.transition(l).duration(750).delay(function(t, n) {
                    return 5 * n
                }).attr("transform", function(t, n) {
                    return g > v.sm ? "translate(0," + h(t.offset) + ")" : "translate(" + h(t.offset) + ",0)"
                }), g > v.sm ? p.transition(p).duration(750).delay(function(t, n) {
                    return 5 * n
                }).attr("transform", function(t) {
                    return "translate(0," + -1 * h(t[x[0].prop]) + ")"
                }) : p.transition(p).duration(750).delay(function(t, n) {
                    return 5 * n
                }).attr("transform", function(t) {
                    return "translate(" + -1 * h(t[x[0].prop]) + ",0)"
                }), f.sort(function(t, e) {
                    return +e[n] - +t[n]
                }).transition(f).duration(750).delay(function(t, n) {
                    return 5 * n
                }).attr("transform", function(t, n) {
                    return g > v.sm ? "translate(" + n * s + "," + a / 2 + ")" : "translate(" + u / 2 + "," + n * c + ")"
                })
            }, o
        }
    }, {
        "./states": 12,
        d3: 1
    }],
    12: [function(t, n, e) {
        "use strict";
        n.exports = {
            AK: "Alaska",
            HI: "Hawaii",
            ID: "Idaho",
            IA: "Iowa",
            ME: "Maine",
            OH: "Ohio",
            UT: "Utah",
            AL: "Alabama",
            AZ: "Arizona",
            AR: "Arkansas",
            CA: "California",
            CO: "Colorado",
            CT: "Connecticut",
            DE: "Delaware",
            FL: "Florida",
            GA: "Georgia",
            IL: "Illinois",
            IN: "Indiana",
            KS: "Kansas",
            KY: "Kentucky",
            LA: "Lousiana",
            MA: "Massachusetts",
            MD: "Maryland",
            MI: "Michigan",
            MN: "Minnesota",
            MS: "Mississippi",
            MO: "Missouri",
            MT: "Montana",
            NC: "North Carolina",
            ND: "North Dakota",
            NE: "Nebraska",
            NV: "Nevada",
            NH: "New Hampshire",
            NJ: "New Jersey",
            NM: "New Mexico",
            NY: "New York",
            OK: "Oklahoma",
            OR: "Oregon",
            PA: "Pennsylvania",
            RI: "Rhode Island",
            SC: "South Carolina",
            SD: "South Dakota",
            TN: "Tennessee",
            TX: "Texas",
            VA: "Virginia",
            VT: "Vermont",
            WA: "Washington",
            WI: "Wisconsin",
            WV: "West Virginia",
            WY: "Wyoming"
        }
    }, {}]
}, {}, [4]);