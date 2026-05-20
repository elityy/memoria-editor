import { $ as e, $t as t, A as n, At as r, B as i, Bt as a, C as o, Ct as s, D as c, Dt as l, E as u, Et as d, F as f, Ft as p, Gt as m, H as h, Ht as g, I as _, It as v, J as y, Jt as b, K as x, Kt as S, L as C, Lt as w, M as T, Mt as E, N as ee, Nt as D, O, Ot as k, P as A, Pt as j, Q as M, Qt as N, R as te, Rt as ne, S as P, St as re, T as ie, Tt as ae, Ut as F, V as oe, Vt as se, W as ce, Wt as le, X as ue, Xt as de, Yt as fe, Z as pe, Zt as me, _ as he, _n as ge, _t as I, a as L, an as R, at as _e, b as ve, bn as ye, bt as be, c as xe, cn as Se, ct as Ce, d as we, dn as Te, dt as Ee, en as De, et as z, f as Oe, fn as ke, ft as Ae, g as je, gn as Me, gt as Ne, h as Pe, hn as Fe, ht as Ie, i as Le, in as Re, it as ze, j as Be, jt as Ve, k as He, kt as Ue, l as We, ln as Ge, lt as Ke, m as qe, mn as Je, mt as Ye, n as Xe, nn as Ze, nt as Qe, o as $e, on as et, ot as tt, p as nt, pn as rt, pt as it, q as at, qt as ot, r as st, rn as ct, rt as lt, s as ut, sn as dt, st as ft, t as pt, tn as mt, tt as ht, u as gt, un as _t, v as vt, vn as yt, vt as bt, w as xt, wt as St, x as Ct, xn as wt, xt as Tt, y as Et, yn as Dt, yt as Ot, z as kt, zt as At } from "./editor-sidebar-panel-layout-DIMndSUi.js";
import { Fragment as jt, jsx as B, jsxs as V } from "react/jsx-runtime";
import { Component as Mt, Fragment as Nt, Suspense as Pt, createContext as Ft, createElement as It, forwardRef as Lt, lazy as H, useCallback as U, useContext as W, useEffect as G, useId as K, useImperativeHandle as Rt, useInsertionEffect as q, useLayoutEffect as zt, useMemo as J, useReducer as Bt, useRef as Y, useState as X } from "react";
import { createPortal as Vt } from "react-dom";
//#region \0rolldown/runtime.js
var Ht = Object.create, Ut = Object.defineProperty, Wt = Object.getOwnPropertyDescriptor, Gt = Object.getOwnPropertyNames, Kt = Object.getPrototypeOf, qt = Object.prototype.hasOwnProperty, Jt = (e, t) => () => (e && (t = e(e = 0)), t), Z = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), Yt = (e, t) => {
	let n = {};
	for (var r in e) Ut(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || Ut(n, Symbol.toStringTag, { value: "Module" }), n;
}, Xt = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = Gt(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !qt.call(e, s) && s !== n && Ut(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = Wt(t, s)) || r.enumerable
	});
	return e;
}, Zt = (e, t, n) => (n = e == null ? {} : Ht(Kt(e)), Xt(t || !e || !e.__esModule ? Ut(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), Qt = (e) => qt.call(e, "module.exports") ? e["module.exports"] : Xt(Ut({}, "__esModule", { value: !0 }), e), $t = "https://github.com/elityy/memoria-editor";
function en({ url: e }) {
	return /* @__PURE__ */ B("a", {
		href: e || $t,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "pointer-events-auto fixed bottom-2 left-3 z-10 rounded-md px-2 py-1 text-[10px] font-medium leading-tight text-black/25 transition-colors hover:text-black/50",
		title: "This editor is open-source software (AGPL-3.0)",
		children: "Source code"
	});
}
//#endregion
//#region node_modules/.pnpm/fflate@0.4.8/node_modules/fflate/esm/browser.js
var tn = Uint8Array, nn = Uint16Array, rn = Uint32Array, an = new tn([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0,
	0,
	0,
	0
]), on = new tn([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13,
	0,
	0
]), sn = new tn([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]), cn = function(e, t) {
	for (var n = new nn(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
	for (var i = new rn(n[30]), r = 1; r < 30; ++r) for (var a = n[r]; a < n[r + 1]; ++a) i[a] = a - n[r] << 5 | r;
	return [n, i];
}, ln = cn(an, 2), un = ln[0], dn = ln[1];
un[28] = 258, dn[258] = 28;
var fn = cn(on, 0);
fn[0];
for (var pn = fn[1], mn = new nn(32768), hn = 0; hn < 32768; ++hn) {
	var gn = (hn & 43690) >>> 1 | (hn & 21845) << 1;
	gn = (gn & 52428) >>> 2 | (gn & 13107) << 2, gn = (gn & 61680) >>> 4 | (gn & 3855) << 4, mn[hn] = ((gn & 65280) >>> 8 | (gn & 255) << 8) >>> 1;
}
for (var _n = (function(e, t, n) {
	for (var r = e.length, i = 0, a = new nn(t); i < r; ++i) ++a[e[i] - 1];
	var o = new nn(t);
	for (i = 0; i < t; ++i) o[i] = o[i - 1] + a[i - 1] << 1;
	var s;
	if (n) {
		s = new nn(1 << t);
		var c = 15 - t;
		for (i = 0; i < r; ++i) if (e[i]) for (var l = i << 4 | e[i], u = t - e[i], d = o[e[i] - 1]++ << u, f = d | (1 << u) - 1; d <= f; ++d) s[mn[d] >>> c] = l;
	} else for (s = new nn(r), i = 0; i < r; ++i) s[i] = mn[o[e[i] - 1]++] >>> 15 - e[i];
	return s;
}), vn = new tn(288), hn = 0; hn < 144; ++hn) vn[hn] = 8;
for (var hn = 144; hn < 256; ++hn) vn[hn] = 9;
for (var hn = 256; hn < 280; ++hn) vn[hn] = 7;
for (var hn = 280; hn < 288; ++hn) vn[hn] = 8;
for (var yn = new tn(32), hn = 0; hn < 32; ++hn) yn[hn] = 5;
var bn = /* @__PURE__ */ _n(vn, 9, 0), xn = /* @__PURE__ */ _n(yn, 5, 0), Sn = function(e) {
	return (e / 8 >> 0) + (e & 7 && 1);
}, Cn = function(e, t, n) {
	(t == null || t < 0) && (t = 0), (n == null || n > e.length) && (n = e.length);
	var r = new (e instanceof nn ? nn : e instanceof rn ? rn : tn)(n - t);
	return r.set(e.subarray(t, n)), r;
}, wn = function(e, t, n) {
	n <<= t & 7;
	var r = t / 8 >> 0;
	e[r] |= n, e[r + 1] |= n >>> 8;
}, Tn = function(e, t, n) {
	n <<= t & 7;
	var r = t / 8 >> 0;
	e[r] |= n, e[r + 1] |= n >>> 8, e[r + 2] |= n >>> 16;
}, En = function(e, t) {
	for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({
		s: r,
		f: e[r]
	});
	var i = n.length, a = n.slice();
	if (!i) return [new tn(0), 0];
	if (i == 1) {
		var o = new tn(n[0].s + 1);
		return o[n[0].s] = 1, [o, 1];
	}
	n.sort(function(e, t) {
		return e.f - t.f;
	}), n.push({
		s: -1,
		f: 25001
	});
	var s = n[0], c = n[1], l = 0, u = 1, d = 2;
	for (n[0] = {
		s: -1,
		f: s.f + c.f,
		l: s,
		r: c
	}; u != i - 1;) s = n[n[l].f < n[d].f ? l++ : d++], c = n[l != u && n[l].f < n[d].f ? l++ : d++], n[u++] = {
		s: -1,
		f: s.f + c.f,
		l: s,
		r: c
	};
	for (var f = a[0].s, r = 1; r < i; ++r) a[r].s > f && (f = a[r].s);
	var p = new nn(f + 1), m = Dn(n[u - 1], p, 0);
	if (m > t) {
		var r = 0, h = 0, g = m - t, _ = 1 << g;
		for (a.sort(function(e, t) {
			return p[t.s] - p[e.s] || e.f - t.f;
		}); r < i; ++r) {
			var v = a[r].s;
			if (p[v] > t) h += _ - (1 << m - p[v]), p[v] = t;
			else break;
		}
		for (h >>>= g; h > 0;) {
			var y = a[r].s;
			p[y] < t ? h -= 1 << t - p[y]++ - 1 : ++r;
		}
		for (; r >= 0 && h; --r) {
			var b = a[r].s;
			p[b] == t && (--p[b], ++h);
		}
		m = t;
	}
	return [new tn(p), m];
}, Dn = function(e, t, n) {
	return e.s == -1 ? Math.max(Dn(e.l, t, n + 1), Dn(e.r, t, n + 1)) : t[e.s] = n;
}, On = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new nn(++t), r = 0, i = e[0], a = 1, o = function(e) {
		n[r++] = e;
	}, s = 1; s <= t; ++s) if (e[s] == i && s != t) ++a;
	else {
		if (!i && a > 2) {
			for (; a > 138; a -= 138) o(32754);
			a > 2 && (o(a > 10 ? a - 11 << 5 | 28690 : a - 3 << 5 | 12305), a = 0);
		} else if (a > 3) {
			for (o(i), --a; a > 6; a -= 6) o(8304);
			a > 2 && (o(a - 3 << 5 | 8208), a = 0);
		}
		for (; a--;) o(i);
		a = 1, i = e[s];
	}
	return [n.subarray(0, r), t];
}, kn = function(e, t) {
	for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
	return n;
}, Q = function(e, t, n) {
	var r = n.length, i = Sn(t + 2);
	e[i] = r & 255, e[i + 1] = r >>> 8, e[i + 2] = e[i] ^ 255, e[i + 3] = e[i + 1] ^ 255;
	for (var a = 0; a < r; ++a) e[i + a + 4] = n[a];
	return (i + 4 + r) * 8;
}, An = function(e, t, n, r, i, a, o, s, c, l, u) {
	wn(t, u++, n), ++i[256];
	for (var d = En(i, 15), f = d[0], p = d[1], m = En(a, 15), h = m[0], g = m[1], _ = On(f), v = _[0], y = _[1], b = On(h), x = b[0], S = b[1], C = new nn(19), w = 0; w < v.length; ++w) C[v[w] & 31]++;
	for (var w = 0; w < x.length; ++w) C[x[w] & 31]++;
	for (var T = En(C, 7), E = T[0], ee = T[1], D = 19; D > 4 && !E[sn[D - 1]]; --D);
	var O = l + 5 << 3, k = kn(i, vn) + kn(a, yn) + o, A = kn(i, f) + kn(a, h) + o + 14 + 3 * D + kn(C, E) + (2 * C[16] + 3 * C[17] + 7 * C[18]);
	if (O <= k && O <= A) return Q(t, u, e.subarray(c, c + l));
	var j, M, N, te;
	if (wn(t, u, 1 + (A < k)), u += 2, A < k) {
		j = _n(f, p, 0), M = f, N = _n(h, g, 0), te = h;
		var ne = _n(E, ee, 0);
		wn(t, u, y - 257), wn(t, u + 5, S - 1), wn(t, u + 10, D - 4), u += 14;
		for (var w = 0; w < D; ++w) wn(t, u + 3 * w, E[sn[w]]);
		u += 3 * D;
		for (var P = [v, x], re = 0; re < 2; ++re) for (var ie = P[re], w = 0; w < ie.length; ++w) {
			var ae = ie[w] & 31;
			wn(t, u, ne[ae]), u += E[ae], ae > 15 && (wn(t, u, ie[w] >>> 5 & 127), u += ie[w] >>> 12);
		}
	} else j = bn, M = vn, N = xn, te = yn;
	for (var w = 0; w < s; ++w) if (r[w] > 255) {
		var ae = r[w] >>> 18 & 31;
		Tn(t, u, j[ae + 257]), u += M[ae + 257], ae > 7 && (wn(t, u, r[w] >>> 23 & 31), u += an[ae]);
		var F = r[w] & 31;
		Tn(t, u, N[F]), u += te[F], F > 3 && (Tn(t, u, r[w] >>> 5 & 8191), u += on[F]);
	} else Tn(t, u, j[r[w]]), u += M[r[w]];
	return Tn(t, u, j[256]), u + M[256];
}, jn = /* @__PURE__ */ new rn([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), Mn = /* @__PURE__ */ new tn(0), Nn = function(e, t, n, r, i, a) {
	var o = e.length, s = new tn(r + o + 5 * (1 + Math.floor(o / 7e3)) + i), c = s.subarray(r, s.length - i), l = 0;
	if (!t || o < 8) for (var u = 0; u <= o; u += 65535) {
		var d = u + 65535;
		d < o ? l = Q(c, l, e.subarray(u, d)) : (c[u] = a, l = Q(c, l, e.subarray(u, o)));
	}
	else {
		for (var f = jn[t - 1], p = f >>> 13, m = f & 8191, h = (1 << n) - 1, g = new nn(32768), _ = new nn(h + 1), v = Math.ceil(n / 3), y = 2 * v, b = function(t) {
			return (e[t] ^ e[t + 1] << v ^ e[t + 2] << y) & h;
		}, x = new rn(25e3), S = new nn(288), C = new nn(32), w = 0, T = 0, u = 0, E = 0, ee = 0, D = 0; u < o; ++u) {
			var O = b(u), k = u & 32767, A = _[O];
			if (g[k] = A, _[O] = k, ee <= u) {
				var j = o - u;
				if ((w > 7e3 || E > 24576) && j > 423) {
					l = An(e, c, 0, x, S, C, T, E, D, u - D, l), E = w = T = 0, D = u;
					for (var M = 0; M < 286; ++M) S[M] = 0;
					for (var M = 0; M < 30; ++M) C[M] = 0;
				}
				var N = 2, te = 0, ne = m, P = k - A & 32767;
				if (j > 2 && O == b(u - P)) for (var re = Math.min(p, j) - 1, ie = Math.min(32767, u), ae = Math.min(258, j); P <= ie && --ne && k != A;) {
					if (e[u + N] == e[u + N - P]) {
						for (var F = 0; F < ae && e[u + F] == e[u + F - P]; ++F);
						if (F > N) {
							if (N = F, te = P, F > re) break;
							for (var oe = Math.min(P, F - 2), se = 0, M = 0; M < oe; ++M) {
								var ce = u - P + M + 32768 & 32767, le = ce - g[ce] + 32768 & 32767;
								le > se && (se = le, A = ce);
							}
						}
					}
					k = A, A = g[k], P += k - A + 32768 & 32767;
				}
				if (te) {
					x[E++] = 268435456 | dn[N] << 18 | pn[te];
					var ue = dn[N] & 31, de = pn[te] & 31;
					T += an[ue] + on[de], ++S[257 + ue], ++C[de], ee = u + N, ++w;
				} else x[E++] = e[u], ++S[e[u]];
			}
		}
		l = An(e, c, a, x, S, C, T, E, D, u - D, l), a || (l = Q(c, l, Mn));
	}
	return Cn(s, 0, r + Sn(l) + i);
}, Pn = /* @__PURE__ */ (function() {
	for (var e = new rn(256), t = 0; t < 256; ++t) {
		for (var n = t, r = 9; --r;) n = (n & 1 && 3988292384) ^ n >>> 1;
		e[t] = n;
	}
	return e;
})(), Fn = function() {
	var e = 4294967295;
	return {
		p: function(t) {
			for (var n = e, r = 0; r < t.length; ++r) n = Pn[n & 255 ^ t[r]] ^ n >>> 8;
			e = n;
		},
		d: function() {
			return e ^ 4294967295;
		}
	};
}, In = function(e, t, n, r, i) {
	return Nn(e, t.level == null ? 6 : t.level, t.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 12 + t.mem, n, r, !i);
}, Ln = function(e, t) {
	var n = {};
	for (var r in e) n[r] = e[r];
	for (var r in t) n[r] = t[r];
	return n;
}, Rn = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
};
function zn(e, t) {
	return t === void 0 && (t = {}), In(e, t, 0, 0);
}
var Bn = function(e, t, n, r) {
	for (var i in e) {
		var a = e[i], o = t + i;
		a instanceof tn ? n[o] = [a, r] : Array.isArray(a) ? n[o] = [a[0], Ln(r, a[1])] : Bn(a, o + "/", n, r);
	}
};
function Vn(e, t) {
	var n = e.length;
	if (!t && typeof TextEncoder < "u") return new TextEncoder().encode(e);
	for (var r = new tn(e.length + (e.length >>> 1)), i = 0, a = function(e) {
		r[i++] = e;
	}, o = 0; o < n; ++o) {
		if (i + 5 > r.length) {
			var s = new tn(i + 8 + (n - o << 1));
			s.set(r), r = s;
		}
		var c = e.charCodeAt(o);
		c < 128 || t ? a(c) : c < 2048 ? (a(192 | c >>> 6), a(128 | c & 63)) : c > 55295 && c < 57344 ? (c = 65536 + (c & 1047552) | e.charCodeAt(++o) & 1023, a(240 | c >>> 18), a(128 | c >>> 12 & 63), a(128 | c >>> 6 & 63), a(128 | c & 63)) : (a(224 | c >>> 12), a(128 | c >>> 6 & 63), a(128 | c & 63));
	}
	return Cn(r, 0, i);
}
var Hn = function(e, t, n, r, i, a, o, s, c, l) {
	var u = a.length, d = r.length;
	Rn(e, t, c == null ? 67324752 : 33639248), t += 4, c != null && (e[t] = 20, t += 2), e[t] = 20, t += 2, e[t++] = l == 8 && (s.level == 1 ? 6 : s.level < 6 ? 4 : s.level == 9 ? 2 : 0), e[t++] = o && 8, e[t] = l, t += 2;
	var f = new Date(s.mtime || Date.now()), p = f.getFullYear() - 1980;
	if (p < 0 || p > 119) throw "date not in range 1980-2099";
	Rn(e, t, (p << 24) * 2 | f.getMonth() + 1 << 21 | f.getDate() << 16 | f.getHours() << 11 | f.getMinutes() << 5 | f.getSeconds() >>> 1), t += 4, Rn(e, t, n), Rn(e, t + 4, d), Rn(e, t + 8, i), Rn(e, t + 12, u), t += 16, c != null && (Rn(e, t += 10, c), t += 4), e.set(a, t), t += u, c ?? e.set(r, t);
}, Un = function(e, t, n, r, i) {
	Rn(e, t, 101010256), Rn(e, t + 8, n), Rn(e, t + 10, n), Rn(e, t + 12, r), Rn(e, t + 16, i);
};
function Wn(e, t) {
	t === void 0 && (t = {});
	var n = {}, r = [];
	Bn(e, "", n, t);
	var i = 0, a = 0;
	for (var o in n) {
		var s = n[o], c = s[0], l = s[1], u = l.level == 0 ? 0 : 8, d = Vn(o), f = d.length;
		if (d.length > 65535) throw "filename too long";
		var p = u ? zn(c, l) : c, m = p.length, h = Fn();
		h.p(c), r.push({
			t: u,
			d: p,
			m: c.length,
			c: h.d(),
			u: o.length != f,
			n: d,
			o: i,
			p: l
		}), i += 30 + f + m, a += 76 + 2 * f + m;
	}
	for (var g = new tn(a + 22), _ = i, v = a - i, y = 0; y < r.length; ++y) {
		var b = r[y];
		Hn(g, b.o, b.c, b.d, b.m, b.n, b.u, b.p, null, b.t), Hn(g, i, b.c, b.d, b.m, b.n, b.u, b.p, b.o, b.t), i += 46 + b.n.length;
	}
	return Un(g, i, r.length, v, _), g;
}
//#endregion
//#region src/hooks/use-viewport-aware-popover.ts
function Gn(e, t, n, r = "center") {
	let i = e.getBoundingClientRect(), a = window.innerHeight - i.bottom - 8 - 8, o = i.top - 8 - 8, s = t?.getBoundingClientRect().height ?? n, c;
	c = o >= s ? !0 : a >= s ? !1 : o > a;
	let l = 0;
	if (t) {
		let e = t.getBoundingClientRect();
		if (r === "center") {
			let t = e.width, n = i.left + i.width / 2;
			n - t / 2 < 8 ? l = 8 - (n - t / 2) : n + t / 2 > window.innerWidth - 8 && (l = window.innerWidth - 8 - (n + t / 2));
		} else e.right > window.innerWidth - 8 ? l = window.innerWidth - 8 - e.right : e.left < 8 && (l = 8 - e.left);
	}
	return {
		openUpward: c,
		shiftX: l
	};
}
function Kn(e, t, n = 8) {
	let r = e.getBoundingClientRect(), i = t.getBoundingClientRect(), a = 0, o = 0;
	return i.right > r.right - n && (a += r.right - n - i.right), i.left + a < r.left + n && (a += r.left + n - (i.left + a)), i.bottom + o > r.bottom - n && (o += r.bottom - n - (i.bottom + o)), i.top + o < r.top + n && (o += r.top + n - (i.top + o)), {
		shiftX: a,
		shiftY: o
	};
}
function qn(e, t, n) {
	let [r, i] = X({
		x: 0,
		y: 0
	});
	return zt(() => {
		if (!e) {
			i({
				x: 0,
				y: 0
			});
			return;
		}
		function r() {
			let e = t.current, r = n();
			if (!e || !r) return;
			let { shiftX: a, shiftY: o } = Kn(e, r);
			i({
				x: a,
				y: o
			});
		}
		return r(), window.addEventListener("resize", r), window.addEventListener("scroll", r, !0), () => {
			window.removeEventListener("resize", r), window.removeEventListener("scroll", r, !0);
		};
	}, [
		e,
		t,
		n
	]), r;
}
function Jn(e, t, n, r, i = "center") {
	let [a, o] = X(!0), [s, c] = X(0);
	return zt(() => {
		if (!e) {
			o(!0), c(0);
			return;
		}
		function a() {
			let e = t.current;
			if (!e) return;
			let { openUpward: a, shiftX: s } = Gn(e, r(), n, i);
			o(a), c(s);
		}
		return a(), window.addEventListener("resize", a), window.addEventListener("scroll", a, !0), () => {
			window.removeEventListener("resize", a), window.removeEventListener("scroll", a, !0);
		};
	}, [
		e,
		n,
		t,
		r,
		i
	]), {
		openUpward: a,
		shiftX: s
	};
}
function Yn(e, t, n) {
	return U(() => e ? t.current : n.current, [
		e,
		t,
		n
	]);
}
//#endregion
//#region src/lib/avnac-image-proxy.ts
function Xn() {
	return "";
}
function Zn(e) {
	if (typeof window > "u") return null;
	try {
		return new URL(e, window.location.href);
	} catch {
		return null;
	}
}
function Qn(e) {
	let t = Zn(e);
	return t ? t.pathname.endsWith("/media/proxy") && t.searchParams.has("url") : !1;
}
function $n(e) {
	let t = e.trim();
	if (!t) return t;
	let n = Zn(t);
	return !n || n.protocol === "data:" || n.protocol === "blob:" || n.origin === window.location.origin || Qn(t) || n.protocol !== "http:" && n.protocol !== "https:" ? t : `${Xn()}/media/proxy?url=${encodeURIComponent(n.toString())}`;
}
async function er(e) {
	let t = $n(e), n = new Image();
	return !t.startsWith("data:") && !t.startsWith("blob:") && (n.crossOrigin = "anonymous"), await new Promise((r, i) => {
		n.onload = () => r(), n.onerror = () => i(/* @__PURE__ */ Error(`Could not load image: ${e}`)), n.src = t;
	}), {
		src: t,
		naturalWidth: Math.max(1, n.naturalWidth || n.width || 1),
		naturalHeight: Math.max(1, n.naturalHeight || n.height || 1)
	};
}
//#endregion
//#region src/components/editor-range-slider.tsx
var tr = [
	"relative z-10 h-8 w-full cursor-pointer appearance-none bg-transparent",
	"focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/45 focus-visible:ring-offset-1",
	"rounded-full disabled:cursor-not-allowed disabled:opacity-40",
	"[&::-webkit-slider-runnable-track]:h-0 [&::-webkit-slider-runnable-track]:bg-transparent",
	"[&::-webkit-slider-thumb]:-mt-2.5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5",
	"[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-0",
	"[&::-webkit-slider-thumb]:bg-white",
	"[&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(59,130,246,0.14),0_1px_4px_rgba(0,0,0,0.12)]",
	"[&::-moz-range-track]:h-0 [&::-moz-range-track]:bg-transparent",
	"[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0",
	"[&::-moz-range-thumb]:bg-white",
	"[&::-moz-range-thumb]:shadow-[0_2px_8px_rgba(59,130,246,0.14),0_1px_4px_rgba(0,0,0,0.12)]"
].join(" ");
function nr({ min: e, max: t, step: n = 1, value: r, onChange: i, disabled: a, id: o, "aria-label": s, "aria-valuemin": c, "aria-valuemax": l, "aria-valuenow": u, trackClassName: d = "w-full min-w-[6rem]" }) {
	return /* @__PURE__ */ V("div", {
		className: ["relative flex h-8 shrink-0 items-center", d].filter(Boolean).join(" "),
		children: [
			/* @__PURE__ */ B("div", {
				className: "pointer-events-none absolute left-2 right-2 top-1/2 h-px -translate-y-1/2 bg-neutral-300/90",
				"aria-hidden": !0
			}),
			/* @__PURE__ */ B("div", {
				className: "pointer-events-none absolute left-2 top-1/2 size-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-500",
				"aria-hidden": !0
			}),
			/* @__PURE__ */ B("div", {
				className: "pointer-events-none absolute right-2 top-1/2 size-[5px] translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-500",
				"aria-hidden": !0
			}),
			/* @__PURE__ */ B("input", {
				id: o,
				type: "range",
				min: e,
				max: t,
				step: n,
				value: r,
				disabled: a,
				"aria-label": s,
				"aria-valuemin": c,
				"aria-valuemax": l,
				"aria-valuenow": u,
				onChange: (e) => i(Number(e.target.value)),
				className: tr
			})
		]
	});
}
//#endregion
//#region src/components/floating-toolbar-shell.tsx
var rr = "pointer-events-auto z-10 inline-flex max-w-[min(100vw-2rem,720px)] items-stretch overflow-visible rounded-full border border-black/[0.08] bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md", ir = Lt(function({ children: e, className: t = "", role: n, "aria-label": r }, i) {
	return /* @__PURE__ */ B("div", {
		ref: i,
		"data-avnac-chrome": !0,
		role: n,
		"aria-label": r,
		className: [rr, t].filter(Boolean).join(" "),
		children: e
	});
});
function ar() {
	return /* @__PURE__ */ B("div", {
		className: "mx-0.5 w-px shrink-0 self-center bg-black/10",
		style: { height: "1.25rem" },
		"aria-hidden": !0
	});
}
function or(e, t) {
	let n = t?.wide ? "flex h-8 min-w-[2.75rem] shrink-0 items-center justify-center gap-0.5 rounded-lg px-1.5 text-neutral-600 outline-none transition-colors hover:bg-black/[0.06]" : "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-neutral-600 outline-none transition-colors hover:bg-black/[0.06]";
	return e ? `${n} bg-black/[0.08] text-neutral-900` : n;
}
var sr = "z-50 rounded-xl border border-black/[0.08] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]", cr = sr, lr = `${sr} overflow-hidden`;
//#endregion
//#region src/components/background-popover.tsx
function ur(e) {
	let t = e.trim().toLowerCase();
	if (t === "transparent" || t === "none") return !0;
	let n = /^rgba?\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*(?:,\s*([0-9.]+)\s*)?\)$/.exec(t);
	if (n && n[4] !== void 0) {
		let e = parseFloat(n[4]);
		return Number.isFinite(e) && e === 0;
	}
	return /^#[0-9a-f]{8}$/i.test(t) ? t.slice(7, 9).toLowerCase() === "00" : !1;
}
function dr(e, t) {
	return e === t ? !0 : ur(e) && ur(t);
}
var fr = {
	background: "repeating-conic-gradient(#e2e2e2 0% 25%, #fafafa 0% 50%)",
	backgroundSize: "8px 8px"
}, pr = [
	"transparent",
	"#ffffff",
	"#f8f9fa",
	"#f1f3f5",
	"#e9ecef",
	"#dee2e6",
	"#212529",
	"#0c8ce9",
	"#339af0",
	"#51cf66",
	"#fcc419",
	"#ff922b",
	"#ff6b6b",
	"#cc5de8",
	"#845ef7",
	"#5c7cfa",
	"#22b8cf",
	"#20c997",
	"#94d82d"
], mr = [
	{
		stops: [{
			color: "#667eea",
			offset: 0
		}, {
			color: "#764ba2",
			offset: 1
		}],
		angle: 135
	},
	{
		stops: [{
			color: "#f093fb",
			offset: 0
		}, {
			color: "#f5576c",
			offset: 1
		}],
		angle: 135
	},
	{
		stops: [{
			color: "#4facfe",
			offset: 0
		}, {
			color: "#00f2fe",
			offset: 1
		}],
		angle: 135
	},
	{
		stops: [{
			color: "#43e97b",
			offset: 0
		}, {
			color: "#38f9d7",
			offset: 1
		}],
		angle: 135
	},
	{
		stops: [{
			color: "#fa709a",
			offset: 0
		}, {
			color: "#fee140",
			offset: 1
		}],
		angle: 135
	},
	{
		stops: [{
			color: "#a18cd1",
			offset: 0
		}, {
			color: "#fbc2eb",
			offset: 1
		}],
		angle: 135
	},
	{
		stops: [{
			color: "#fccb90",
			offset: 0
		}, {
			color: "#d57eeb",
			offset: 1
		}],
		angle: 135
	},
	{
		stops: [{
			color: "#e0c3fc",
			offset: 0
		}, {
			color: "#8ec5fc",
			offset: 1
		}],
		angle: 135
	},
	{
		stops: [{
			color: "#f5f7fa",
			offset: 0
		}, {
			color: "#c3cfe2",
			offset: 1
		}],
		angle: 135
	},
	{
		stops: [{
			color: "#0c0c0c",
			offset: 0
		}, {
			color: "#3a3a3a",
			offset: 1
		}],
		angle: 135
	},
	{
		stops: [{
			color: "#ff9a9e",
			offset: 0
		}, {
			color: "#fecfef",
			offset: 1
		}],
		angle: 135
	},
	{
		stops: [{
			color: "#96fbc4",
			offset: 0
		}, {
			color: "#f9f586",
			offset: 1
		}],
		angle: 90
	}
];
function hr(e, t) {
	return `linear-gradient(${t}deg, ${e.map((e) => `${e.color} ${Math.round(e.offset * 100)}%`).join(", ")})`;
}
var gr = /^#[0-9A-Fa-f]{6}$/;
function _r(e) {
	let t = e.trim();
	return gr.test(t) ? t : /^[0-9A-Fa-f]{6}$/.test(t) ? `#${t}` : null;
}
function vr(e) {
	return Number.isFinite(e) ? Math.min(360, Math.max(0, Math.round(e))) : 0;
}
function yr(e) {
	return e.type === "solid" && ur(e.color) ? fr : e.type === "solid" ? { backgroundColor: e.color } : { backgroundImage: e.css };
}
function br({ value: e, onChange: t }) {
	let [n, r] = X(e.type === "gradient" ? "gradient" : "solid"), i = Y(null), a = Y(null), o = Y(null), [s, c] = X(e.type === "solid" ? e.color : "#ffffff"), [l, u] = X(e.type === "gradient" ? e.angle : 135), [d, f] = X(e.type === "gradient" ? e.stops[0]?.color ?? "#667eea" : "#667eea"), [p, m] = X(e.type === "gradient" ? e.stops[1]?.color ?? "#764ba2" : "#764ba2"), [h, g] = X(String(e.type === "gradient" ? e.angle : 135));
	G(() => {
		e.type === "solid" && c(e.color), e.type === "gradient" && (u(e.angle), g(String(e.angle)), f(e.stops[0]?.color ?? "#667eea"), m(e.stops[1]?.color ?? "#764ba2"));
	}, [e]);
	function _(e) {
		c(e), t({
			type: "solid",
			color: e
		});
	}
	function v(e, n) {
		let r = vr(n);
		u(r), g(String(r)), e.length >= 1 && f(e[0].color), e.length >= 2 && m(e[1].color), t({
			type: "gradient",
			css: hr(e, r),
			stops: e,
			angle: r
		});
	}
	function y(e, t, n) {
		v([{
			color: e,
			offset: 0
		}, {
			color: t,
			offset: 1
		}], n);
	}
	let b = (e) => `flex-1 rounded-lg px-3 py-1.5 text-[12px] font-semibold transition-colors ${e ? "bg-neutral-900 text-white shadow-sm" : "text-neutral-500 hover:text-neutral-700"}`;
	return /* @__PURE__ */ V("div", {
		className: [
			"w-[min(380px,calc(100vw-2rem))] p-3.5",
			lr,
			"!overflow-visible"
		].join(" "),
		children: [/* @__PURE__ */ V("div", {
			className: "mb-3 flex gap-1 rounded-lg bg-neutral-100 p-0.5",
			children: [/* @__PURE__ */ B("button", {
				type: "button",
				className: b(n === "solid"),
				onClick: () => r("solid"),
				children: "Solid"
			}), /* @__PURE__ */ B("button", {
				type: "button",
				className: b(n === "gradient"),
				onClick: () => r("gradient"),
				children: "Gradient"
			})]
		}), n === "solid" ? /* @__PURE__ */ V("div", { children: [/* @__PURE__ */ B("div", {
			className: "mb-2.5 grid grid-cols-6 gap-2 justify-items-center",
			children: pr.map((t) => /* @__PURE__ */ B("button", {
				type: "button",
				className: `h-12 w-12 shrink-0 rounded-full border transition-shadow ${e.type === "solid" && dr(e.color, t) ? "border-neutral-900 ring-2 ring-neutral-900/20" : "border-black/10 hover:border-black/25"}`,
				style: t === "transparent" || ur(t) ? fr : { backgroundColor: t },
				onClick: () => _(t),
				"aria-label": t === "transparent" ? "Transparent" : t,
				title: t === "transparent" ? "Transparent" : t
			}, t))
		}), /* @__PURE__ */ V("div", {
			className: "flex items-center gap-2.5 rounded-lg border border-black/10 px-2.5 py-2",
			children: [
				/* @__PURE__ */ B("button", {
					type: "button",
					className: "h-8 w-8 shrink-0 rounded-full border border-black/15 shadow-inner outline-none ring-offset-2 transition hover:ring-2 hover:ring-neutral-900/10 focus-visible:ring-2 focus-visible:ring-neutral-900/20",
					style: ur(s) ? fr : { backgroundColor: gr.test(s) ? s : "#ffffff" },
					onClick: () => i.current?.click(),
					"aria-label": "Pick custom color"
				}),
				/* @__PURE__ */ B("input", {
					ref: i,
					type: "color",
					value: gr.test(s) ? s : "#ffffff",
					onChange: (e) => _(e.target.value),
					className: "sr-only",
					tabIndex: -1
				}),
				/* @__PURE__ */ B("input", {
					type: "text",
					value: s,
					onChange: (e) => {
						let t = e.target.value;
						c(t), gr.test(t) && _(t);
					},
					className: "min-w-0 flex-1 rounded-md border border-transparent bg-transparent px-1 py-0.5 font-mono text-[13px] font-medium text-neutral-800 outline-none transition focus:border-black/10",
					spellCheck: !1,
					"aria-label": "Hex color"
				})
			]
		})] }) : /* @__PURE__ */ V("div", { children: [/* @__PURE__ */ B("div", {
			className: "mb-2.5 grid grid-cols-4 gap-2 justify-items-center",
			children: mr.map((t, n) => {
				let r = hr(t.stops, t.angle);
				return /* @__PURE__ */ B("button", {
					type: "button",
					className: `h-12 w-12 shrink-0 rounded-full border transition-shadow ${e.type === "gradient" && e.stops.length === t.stops.length && e.stops.every((e, n) => e.color === t.stops[n].color && e.offset === t.stops[n].offset) && e.angle === t.angle ? "border-neutral-900 ring-2 ring-neutral-900/20" : "border-black/10 hover:border-black/25"}`,
					style: { backgroundImage: r },
					onClick: () => v(t.stops, t.angle),
					"aria-label": `Gradient ${n + 1}`
				}, n);
			})
		}), /* @__PURE__ */ V("div", {
			className: "rounded-lg border border-black/10 p-3",
			children: [/* @__PURE__ */ B("p", {
				className: "mb-2.5 text-[11px] font-semibold uppercase tracking-wide text-neutral-400",
				children: "Custom"
			}), /* @__PURE__ */ V("div", {
				className: "grid gap-3",
				children: [
					/* @__PURE__ */ V("div", {
						className: "flex items-center gap-2.5",
						children: [
							/* @__PURE__ */ B("label", {
								htmlFor: "bg-grad-start",
								className: "w-[3.25rem] shrink-0 text-[12px] font-medium text-neutral-600",
								children: "Start"
							}),
							/* @__PURE__ */ B("button", {
								type: "button",
								className: "h-8 w-8 shrink-0 rounded-full border border-black/12 shadow-inner outline-none ring-offset-2 transition hover:ring-2 hover:ring-neutral-900/15 focus-visible:ring-2 focus-visible:ring-neutral-900/25",
								style: { backgroundColor: gr.test(d) ? d : "#667eea" },
								onClick: () => a.current?.click(),
								"aria-label": "Pick start color"
							}),
							/* @__PURE__ */ B("input", {
								ref: a,
								type: "color",
								value: gr.test(d) ? d : "#667eea",
								onChange: (e) => {
									f(e.target.value), y(e.target.value, p, l);
								},
								className: "sr-only",
								tabIndex: -1,
								"aria-hidden": !0
							}),
							/* @__PURE__ */ B("input", {
								id: "bg-grad-start",
								type: "text",
								value: d,
								onChange: (e) => {
									let t = e.target.value;
									f(t);
									let n = _r(t);
									n && y(n, p, l);
								},
								onBlur: () => {
									let t = _r(d);
									if (t) f(t), y(t, p, l);
									else {
										let t = e.type === "gradient" ? e.stops[0]?.color ?? "#667eea" : "#667eea";
										f(t), y(t, p, l);
									}
								},
								className: "min-w-0 flex-1 rounded-md border border-black/10 bg-neutral-50/80 px-2 py-1.5 font-mono text-[12px] text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-black/20",
								spellCheck: !1,
								autoComplete: "off",
								placeholder: "#000000"
							})
						]
					}),
					/* @__PURE__ */ V("div", {
						className: "flex items-center gap-2.5",
						children: [
							/* @__PURE__ */ B("label", {
								htmlFor: "bg-grad-end",
								className: "w-[3.25rem] shrink-0 text-[12px] font-medium text-neutral-600",
								children: "End"
							}),
							/* @__PURE__ */ B("button", {
								type: "button",
								className: "h-8 w-8 shrink-0 rounded-full border border-black/12 shadow-inner outline-none ring-offset-2 transition hover:ring-2 hover:ring-neutral-900/15 focus-visible:ring-2 focus-visible:ring-neutral-900/25",
								style: { backgroundColor: gr.test(p) ? p : "#764ba2" },
								onClick: () => o.current?.click(),
								"aria-label": "Pick end color"
							}),
							/* @__PURE__ */ B("input", {
								ref: o,
								type: "color",
								value: gr.test(p) ? p : "#764ba2",
								onChange: (e) => {
									m(e.target.value), y(d, e.target.value, l);
								},
								className: "sr-only",
								tabIndex: -1,
								"aria-hidden": !0
							}),
							/* @__PURE__ */ B("input", {
								id: "bg-grad-end",
								type: "text",
								value: p,
								onChange: (e) => {
									let t = e.target.value;
									m(t);
									let n = _r(t);
									n && y(d, n, l);
								},
								onBlur: () => {
									let t = _r(p);
									if (t) m(t), y(d, t, l);
									else {
										let t = e.type === "gradient" ? e.stops[1]?.color ?? "#764ba2" : "#764ba2";
										m(t), y(d, t, l);
									}
								},
								className: "min-w-0 flex-1 rounded-md border border-black/10 bg-neutral-50/80 px-2 py-1.5 font-mono text-[12px] text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-black/20",
								spellCheck: !1,
								autoComplete: "off",
								placeholder: "#000000"
							})
						]
					}),
					/* @__PURE__ */ V("div", {
						className: "grid grid-cols-[3.25rem_minmax(0,1fr)_4.5rem] items-center gap-2",
						children: [
							/* @__PURE__ */ B("label", {
								htmlFor: "bg-grad-angle",
								className: "text-[12px] font-medium text-neutral-600",
								children: "Angle"
							}),
							/* @__PURE__ */ B(nr, {
								min: 0,
								max: 360,
								value: l,
								onChange: (e) => {
									let t = vr(e);
									u(t), g(String(t)), y(d, p, t);
								},
								"aria-label": "Gradient angle",
								trackClassName: "min-w-0 w-full"
							}),
							/* @__PURE__ */ V("div", {
								className: "relative w-full min-w-[4.5rem] shrink-0",
								children: [/* @__PURE__ */ B("input", {
									id: "bg-grad-angle",
									type: "text",
									inputMode: "numeric",
									value: h,
									onChange: (e) => {
										let t = e.target.value;
										if (g(t), t === "" || t === "-") return;
										let n = Number(t);
										if (Number.isFinite(n)) {
											let e = vr(n);
											u(e), y(d, p, e);
										}
									},
									onBlur: () => {
										let e = Number(h), t = Number.isFinite(e) ? vr(e) : l;
										u(t), g(String(t)), y(d, p, t);
									},
									className: "box-border w-full min-w-0 rounded-md border border-black/10 bg-neutral-50/80 py-1.5 pl-2 pr-6 text-right font-mono text-[12px] tabular-nums text-neutral-900 outline-none focus:border-black/20",
									"aria-label": "Angle in degrees"
								}), /* @__PURE__ */ B("span", {
									className: "pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[11px] font-medium text-neutral-400",
									children: "°"
								})]
							})
						]
					})
				]
			})]
		})] })]
	});
}
//#endregion
//#region src/lib/avnac-vector-pen-bezier.ts
function xr(e) {
	return [e.outX ?? e.x, e.outY ?? e.y];
}
function Sr(e) {
	return [e.inX ?? e.x, e.inY ?? e.y];
}
function Cr(e, t, n, r, i) {
	let a = 1 - e, o = a * a, s = o * a, c = e * e, l = c * e;
	return [s * t[0] + 3 * o * e * n[0] + 3 * a * c * r[0] + l * i[0], s * t[1] + 3 * o * e * n[1] + 3 * a * c * r[1] + l * i[1]];
}
function wr(e, t = 20, n = !1) {
	if (e.length < 2) return [];
	let r = [], i = n ? e.length : e.length - 1;
	for (let n = 0; n < i; n++) {
		let i = e[n], a = e[(n + 1) % e.length], o = [i.x, i.y], s = xr(i), c = Sr(a), l = [a.x, a.y], u = Math.max(2, t);
		for (let e = 0; e < u; e++) {
			let t = e / u;
			r.push(Cr(t, o, s, c, l));
		}
	}
	if (!n) {
		let t = e[e.length - 1];
		r.push([t.x, t.y]);
	} else if (r.length > 0) {
		let e = r[0], t = r[r.length - 1];
		(e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]) > 1e-16 && r.push([e[0], e[1]]);
	}
	return r;
}
function Tr(e, t, n, r) {
	let i = e[t];
	if (i) {
		if (i.outX = n, i.outY = r, t <= 0) {
			delete i.inX, delete i.inY;
			return;
		}
		i.inX = 2 * i.x - n, i.inY = 2 * i.y - r;
	}
}
function Er(e, t, n, r, i, a) {
	if (e.length < 2) return null;
	let o = t ? e.length : e.length - 1;
	if (o <= 0) return null;
	let s = null;
	for (let t = 0; t < o; t++) {
		let o = e[t], c = e[(t + 1) % e.length], l = [o.x, o.y], u = xr(o), d = Sr(c), f = [c.x, c.y];
		for (let e = 0; e <= 32; e++) {
			let o = e / 32, c = Cr(o, l, u, d, f), p = (c[0] - n) * i, m = (c[1] - r) * a, h = Math.hypot(p, m);
			(s === null || h < s.dist) && (s = {
				segmentIndex: t,
				t: o,
				x: c[0],
				y: c[1],
				dist: h
			});
		}
	}
	if (s) {
		let t = e[s.segmentIndex], o = e[(s.segmentIndex + 1) % e.length], c = [t.x, t.y], l = xr(t), u = Sr(o), d = [o.x, o.y], f = 1 / 32, p = Math.max(0, s.t - f), m = Math.min(1, s.t + f);
		for (let e = 0; e <= 24; e++) {
			let t = p + (m - p) * (e / 24), o = Cr(t, c, l, u, d), f = (o[0] - n) * i, h = (o[1] - r) * a, g = Math.hypot(f, h);
			g < s.dist && (s = {
				segmentIndex: s.segmentIndex,
				t,
				x: o[0],
				y: o[1],
				dist: g
			});
		}
	}
	return s;
}
function Dr(e, t, n, r) {
	if (e.length < 2) return null;
	let i = r ? e.length : e.length - 1;
	if (t < 0 || t >= i) return null;
	let a = Math.min(.9999, Math.max(1e-4, n)), o = e[t], s = (t + 1) % e.length, c = e[s], l = [o.x, o.y], u = xr(o), d = Sr(c), f = [c.x, c.y], p = (e, t, n) => [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n], m = p(l, u, a), h = p(u, d, a), g = p(d, f, a), _ = p(m, h, a), v = p(h, g, a), y = p(_, v, a), b = e.map((e) => ({ ...e })), x = b[t], S = b[s], C = 1e-9;
	(o.outX != null || o.outY != null || Math.abs(m[0] - x.x) > C || Math.abs(m[1] - x.y) > C) && (x.outX = m[0], x.outY = m[1]), (c.inX != null || c.inY != null || Math.abs(g[0] - S.x) > C || Math.abs(g[1] - S.y) > C) && (S.inX = g[0], S.inY = g[1]);
	let w = {
		x: y[0],
		y: y[1]
	};
	(Math.abs(_[0] - y[0]) > C || Math.abs(_[1] - y[1]) > C) && (w.inX = _[0], w.inY = _[1]), (Math.abs(v[0] - y[0]) > C || Math.abs(v[1] - y[1]) > C) && (w.outX = v[0], w.outY = v[1]);
	let T = t + 1;
	return b.splice(T, 0, w), b;
}
var Or = "application/avnac-vector-board";
function kr(e) {
	return {
		id: crypto.randomUUID(),
		name: e,
		visible: !0,
		strokes: []
	};
}
function Ar() {
	let e = kr("Layer 1");
	return {
		v: 2,
		layers: [e],
		activeLayerId: e.id
	};
}
function jr(e) {
	if (!Array.isArray(e) || e.length === 0) return;
	let t = [];
	for (let n of e) {
		if (!n || typeof n != "object") continue;
		let e = n, r = typeof e.x == "number" ? e.x : NaN, i = typeof e.y == "number" ? e.y : NaN;
		if (!Number.isFinite(r) || !Number.isFinite(i)) continue;
		let a = {
			x: r,
			y: i
		}, o = (t) => typeof e[t] == "number" ? e[t] : void 0, s = o("inX"), c = o("inY"), l = o("outX"), u = o("outY");
		s !== void 0 && c !== void 0 && (a.inX = s, a.inY = c), l !== void 0 && u !== void 0 && (a.outX = l, a.outY = u), t.push(a);
	}
	return t.length > 0 ? t : void 0;
}
function Mr(e) {
	let t = e.points, n = jr(e.penAnchors), r = Array.isArray(t) ? t.filter((e) => Array.isArray(e) && e.length >= 2 && typeof e[0] == "number" && typeof e[1] == "number") : [];
	if (r.length === 0 && (!n || n.length < 2)) return null;
	let i = typeof e.id == "string" ? e.id : crypto.randomUUID(), a = typeof e.stroke == "string" ? e.stroke : "#1a1a1a", o = typeof e.strokeWidthN == "number" ? e.strokeWidthN : 0, s = {
		id: i,
		kind: typeof e.kind == "string" ? e.kind : "pen",
		points: r,
		stroke: a,
		strokeWidthN: o,
		fill: typeof e.fill == "string" ? e.fill : ""
	};
	return n && (s.penAnchors = n), e.penClosed === !0 && (s.penClosed = !0), s;
}
function Nr(e) {
	let t = kr("Layer 1");
	return t.strokes = e.strokes.map((e) => Mr({
		...e,
		kind: "pen",
		fill: ""
	})).filter((e) => e != null), {
		v: 2,
		layers: [t],
		activeLayerId: t.id
	};
}
function Pr(e) {
	if (!e || typeof e != "object") return Ar();
	let t = e;
	if (t.v === 2 && Array.isArray(t.layers)) {
		let e = [];
		for (let n of t.layers) {
			if (!n || typeof n != "object") continue;
			let t = n, r = typeof t.id == "string" ? t.id : crypto.randomUUID(), i = typeof t.name == "string" ? t.name : "Layer", a = typeof t.visible == "boolean" ? t.visible : !0, o = (Array.isArray(t.strokes) ? t.strokes : []).map((e) => e && typeof e == "object" ? Mr(e) : null).filter((e) => e != null);
			e.push({
				id: r,
				name: i,
				visible: a,
				strokes: o
			});
		}
		if (e.length === 0) return Ar();
		let n = typeof t.activeLayerId == "string" ? t.activeLayerId : e[0].id;
		return e.some((e) => e.id === n) || (n = e[0].id), {
			v: 2,
			layers: e,
			activeLayerId: n
		};
	}
	return t.v === 1 && Array.isArray(t.strokes) ? Nr({
		v: 1,
		strokes: t.strokes
	}) : Ar();
}
function Fr(e) {
	return e.layers.find((t) => t.id === e.activeLayerId);
}
function Ir(e) {
	return e.layers.filter((e) => e.visible).flatMap((e) => e.strokes);
}
function Lr(e) {
	return Ir(e).some((e) => Rr(e));
}
function Rr(e) {
	return e.kind === "pen" ? e.penAnchors && e.penAnchors.length >= 2 ? !0 : e.points.length >= 2 : e.kind === "polygon" || e.kind === "line" || e.kind === "rect" || e.kind === "ellipse" || e.kind === "arrow" ? e.points.length >= 2 : !1;
}
function zr(e, t, n) {
	let r = pi(n);
	if (r.length < 2) return Infinity;
	let i = Infinity;
	for (let n = 1; n < r.length; n++) {
		let a = li(e, t, r[n - 1], r[n]);
		a < i && (i = a);
	}
	if (n.kind === "pen" && n.penClosed === !0 && r.length >= 2) {
		let n = li(e, t, r[r.length - 1], r[0]);
		n < i && (i = n);
	}
	if (n.kind === "rect" || n.kind === "ellipse") {
		let [a, o] = [r[0], r[r.length - 1]], s = Math.min(a[0], o[0]), c = Math.max(a[0], o[0]), l = Math.min(a[1], o[1]), u = Math.max(a[1], o[1]);
		if (n.kind === "rect") {
			let n = Math.min(li(e, t, [s, l], [c, l]), li(e, t, [c, l], [c, u]), li(e, t, [c, u], [s, u]), li(e, t, [s, u], [s, l]));
			i = Math.min(i, n);
		} else {
			let n = (s + c) / 2, r = (l + u) / 2, a = (c - s) / 2, o = (u - l) / 2;
			if (a > 1e-6 && o > 1e-6) {
				let s = (e - n) / a, c = (t - r) / o, l = s * s + c * c, u = Math.abs(Math.sqrt(Math.max(l, 1e-12)) - 1) * Math.min(a, o);
				i = Math.min(i, u);
			}
		}
	}
	return i;
}
var Br = .022;
function Vr(e) {
	let t = typeof e.strokeWidthN == "number" ? e.strokeWidthN : 0;
	return !!e.stroke && e.stroke !== "transparent" && Number.isFinite(t) && t > 0;
}
function Hr(e, t, n, r = Br) {
	let i = [...e.layers].reverse();
	for (let e of i) {
		if (!e.visible) continue;
		let i = [...e.strokes].reverse();
		for (let a of i) if (Rr(a) && fi(t, n, a, r)) return {
			layerId: e.id,
			stroke: a
		};
	}
	return null;
}
function Ur(e, t, n) {
	let r = (e) => [e[0] + t, e[1] + n], i = {
		...e,
		points: e.points.map(r)
	};
	return e.penAnchors && e.penAnchors.length > 0 && (i.penAnchors = e.penAnchors.map((e) => ({
		...e,
		x: e.x + t,
		y: e.y + n,
		inX: e.inX == null ? void 0 : e.inX + t,
		inY: e.inY == null ? void 0 : e.inY + n,
		outX: e.outX == null ? void 0 : e.outX + t,
		outY: e.outY == null ? void 0 : e.outY + n
	}))), i;
}
function Wr(e, t, n, r, i) {
	let a = (e) => [t + (e[0] - t) * r, n + (e[1] - n) * i], o = {
		...e,
		points: e.points.map(a)
	};
	e.penAnchors && e.penAnchors.length > 0 && (o.penAnchors = e.penAnchors.map((e) => ({
		...e,
		x: t + (e.x - t) * r,
		y: n + (e.y - n) * i,
		inX: e.inX == null ? void 0 : t + (e.inX - t) * r,
		inY: e.inY == null ? void 0 : n + (e.inY - n) * i,
		outX: e.outX == null ? void 0 : t + (e.outX - t) * r,
		outY: e.outY == null ? void 0 : n + (e.outY - n) * i
	})));
	let s = (Math.abs(r) + Math.abs(i)) / 2;
	return Number.isFinite(e.strokeWidthN) && s > 0 && (o.strokeWidthN = e.strokeWidthN * s), o;
}
function Gr(e) {
	return `${e.layerId}:${e.strokeId}`;
}
function Kr(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) t.add(Gr(n));
	return t;
}
function qr(e, t, n, r) {
	if (t.length === 0) return e;
	let i = Kr(t);
	return {
		...e,
		layers: e.layers.map((e) => ({
			...e,
			strokes: e.strokes.map((t) => i.has(`${e.id}:${t.id}`) ? Ur(t, n, r) : t)
		}))
	};
}
function Jr(e, t) {
	if (t.length === 0) return e;
	let n = Kr(t);
	return {
		...e,
		layers: e.layers.map((e) => ({
			...e,
			strokes: e.strokes.filter((t) => !n.has(`${e.id}:${t.id}`))
		}))
	};
}
function Yr(e, t) {
	if (t.length === 0) return [];
	let n = /* @__PURE__ */ new Map();
	for (let t of e.layers) {
		let e = /* @__PURE__ */ new Map();
		for (let n of t.strokes) e.set(n.id, n);
		n.set(t.id, e);
	}
	let r = [], i = /* @__PURE__ */ new Set();
	for (let a of e.layers) {
		let e = n.get(a.id);
		for (let n of a.strokes) {
			let o = `${a.id}:${n.id}`;
			!i.has(o) && t.some((e) => e.layerId === a.id && e.strokeId === n.id) && (r.push(e.get(n.id)), i.add(o));
		}
	}
	return r;
}
function Xr(e, t) {
	if (t.length === 0) return null;
	let n = Kr(t), r = [], i = !1, a = e.layers.map((e) => {
		let t = [];
		for (let a of e.strokes) if (t.push(a), n.has(`${e.id}:${a.id}`)) {
			let n = ii(a);
			t.push(n), r.push({
				layerId: e.id,
				strokeId: n.id
			}), i = !0;
		}
		return i ? {
			...e,
			strokes: t
		} : e;
	});
	return i ? {
		doc: {
			...e,
			layers: a
		},
		newSelections: r
	} : null;
}
function Zr(e, t) {
	let n = ci(e);
	return !(!n || n.maxX < t.minX || n.minX > t.maxX || n.maxY < t.minY || n.minY > t.maxY);
}
function Qr(e, t) {
	let n = [];
	for (let r of e.layers) if (r.visible) for (let e of r.strokes) Rr(e) && Zr(e, t) && n.push({
		layerId: r.id,
		strokeId: e.id
	});
	return n;
}
function $r(e, t, n, r, i, a) {
	if (t.length === 0) return e;
	let o = Kr(t);
	return {
		...e,
		layers: e.layers.map((e) => ({
			...e,
			strokes: e.strokes.map((t) => o.has(`${e.id}:${t.id}`) ? Wr(t, n, r, i, a) : t)
		}))
	};
}
function ei(e, t) {
	if (t.length === 0) return null;
	let n = Kr(t), r = Infinity, i = Infinity, a = -Infinity, o = -Infinity;
	for (let t of e.layers) if (t.visible) for (let e of t.strokes) {
		if (!n.has(`${t.id}:${e.id}`)) continue;
		let s = ci(e);
		s && (s.minX < r && (r = s.minX), s.minY < i && (i = s.minY), s.maxX > a && (a = s.maxX), s.maxY > o && (o = s.maxY));
	}
	return Number.isFinite(r) ? {
		minX: r,
		minY: i,
		maxX: a,
		maxY: o
	} : null;
}
function ti(e, t, n) {
	if (e.length === 0) return e;
	let r = e.filter((e) => t.has(e.id));
	if (r.length === 0) return e;
	if (n === "front") return [...e.filter((e) => !t.has(e.id)), ...r];
	if (n === "back") {
		let n = e.filter((e) => !t.has(e.id));
		return [...r, ...n];
	}
	let i = e.slice();
	if (n === "forward") for (let e = i.length - 2; e >= 0; e--) {
		let n = i[e];
		if (!t.has(n.id)) continue;
		let r = i[e + 1];
		t.has(r.id) || (i[e] = r, i[e + 1] = n);
	}
	else for (let e = 1; e < i.length; e++) {
		let n = i[e];
		if (!t.has(n.id)) continue;
		let r = i[e - 1];
		t.has(r.id) || (i[e] = r, i[e - 1] = n);
	}
	return i;
}
function ni(e, t, n) {
	if (t.length === 0) return e;
	let r = /* @__PURE__ */ new Map();
	for (let e of t) {
		let t = r.get(e.layerId) ?? /* @__PURE__ */ new Set();
		t.add(e.strokeId), r.set(e.layerId, t);
	}
	return {
		...e,
		layers: e.layers.map((e) => {
			let t = r.get(e.id);
			return t ? {
				...e,
				strokes: ti(e.strokes, t, n)
			} : e;
		})
	};
}
function ri(e, t, n, r) {
	return {
		...e,
		layers: e.layers.map((e) => e.id === t ? {
			...e,
			strokes: e.strokes.map((e) => e.id === n ? {
				...e,
				...r
			} : e)
		} : e)
	};
}
function ii(e) {
	return {
		...e,
		id: crypto.randomUUID(),
		points: e.points.map((e) => [e[0], e[1]]),
		penAnchors: e.penAnchors?.map((e) => ({ ...e }))
	};
}
function ai(e, t, n, r) {
	let i = Fr(e);
	if (!i?.visible) return null;
	let a = [], o = t.map((e) => {
		let t = ii(e);
		return a.push(t.id), Ur(t, n, r);
	});
	return {
		doc: {
			...e,
			layers: e.layers.map((e) => e.id === i.id ? {
				...e,
				strokes: [...e.strokes, ...o]
			} : e)
		},
		newStrokeIds: a
	};
}
function oi(e) {
	let t;
	try {
		t = JSON.parse(e);
	} catch {
		return null;
	}
	if (!t || typeof t != "object") return null;
	let n = t;
	if (n.avnacVectorStrokeClip !== !0 || n.v !== 1 || !Array.isArray(n.strokes)) return null;
	let r = [];
	for (let e of n.strokes) {
		if (!e || typeof e != "object") continue;
		let t = Mr(e);
		t && r.push(t);
	}
	return r.length > 0 ? r : null;
}
function si(e, t, n, r) {
	return {
		...e,
		layers: e.layers.map((e) => e.id === t ? {
			...e,
			strokes: e.strokes.map((e) => e.id === n ? {
				...e,
				...r
			} : e)
		} : e)
	};
}
function ci(e) {
	let t = pi(e);
	if (t.length === 0) return null;
	let n = Infinity, r = -Infinity, i = Infinity, a = -Infinity;
	for (let e of t) n = Math.min(n, e[0]), r = Math.max(r, e[0]), i = Math.min(i, e[1]), a = Math.max(a, e[1]);
	return Number.isFinite(n) ? {
		minX: n,
		minY: i,
		maxX: r,
		maxY: a
	} : null;
}
function li(e, t, n, r) {
	let [i, a] = n, [o, s] = r, c = o - i, l = s - a, u = e - i, d = t - a, f = c * c + l * l;
	if (f < 1e-18) return Math.hypot(e - i, t - a);
	let p = (u * c + d * l) / f;
	p = Math.max(0, Math.min(1, p));
	let m = i + p * c, h = a + p * l;
	return Math.hypot(e - m, t - h);
}
function ui(e, t, n) {
	if (n.length < 3) return !1;
	let r = !1;
	for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
		let o = n[i][0], s = n[i][1], c = n[a][0], l = n[a][1], u = l - s;
		Math.abs(u) < 1e-18 || s > t != l > t && e < (c - o) * (t - s) / u + o && (r = !r);
	}
	return r;
}
function di(e, t, n) {
	if (e.kind === "pen" && e.penClosed === !0) {
		if (e.penAnchors && e.penAnchors.length >= 2) {
			let r = wr(e.penAnchors, 48, !0);
			if (r.length >= 3) return ui(t, n, r);
		}
		return e.points.length >= 3 ? ui(t, n, e.points) : !1;
	}
	if (e.points.length < 2) return !1;
	if (e.kind === "rect") {
		let [r, i] = e.points[0], [a, o] = e.points[1];
		return t >= Math.min(r, a) && t <= Math.max(r, a) && n >= Math.min(i, o) && n <= Math.max(i, o);
	}
	if (e.kind === "ellipse") {
		let [r, i] = e.points[0], [a, o] = e.points[1], s = Math.min(r, a), c = Math.max(r, a), l = Math.min(i, o), u = Math.max(i, o), d = (c - s) / 2, f = (u - l) / 2;
		if (d < 1e-9 || f < 1e-9) return !1;
		let p = (s + c) / 2, m = (l + u) / 2, h = (t - p) / d, g = (n - m) / f;
		return h * h + g * g <= 1.000000001;
	}
	return e.kind === "polygon" && e.points.length >= 3 ? ui(t, n, e.points) : !1;
}
function fi(e, t, n, r) {
	return zr(e, t, n) <= r + n.strokeWidthN * .5 ? !0 : di(n, e, t);
}
function pi(e) {
	if (e.kind === "rect" || e.kind === "ellipse") {
		if (e.points.length < 2) return [];
		let [t, n] = e.points[0], [r, i] = e.points[1], a = Math.min(t, r), o = Math.max(t, r), s = Math.min(n, i), c = Math.max(n, i);
		if (e.kind === "rect") return [
			[a, s],
			[o, s],
			[o, c],
			[a, c],
			[a, s]
		];
		let l = (a + o) / 2, u = (s + c) / 2, d = (o - a) / 2, f = (c - s) / 2, p = [];
		for (let e = 0; e <= 48; e++) {
			let t = e / 48 * Math.PI * 2;
			p.push([l + d * Math.cos(t), u + f * Math.sin(t)]);
		}
		return p;
	}
	return e.kind === "arrow" && e.points.length >= 2 ? [e.points[0], e.points[1]] : e.kind === "pen" && e.penAnchors && e.penAnchors.length >= 2 ? wr(e.penAnchors, 24, e.penClosed === !0) : e.points;
}
//#endregion
//#region src/lib/load-google-font.ts
var mi = /* @__PURE__ */ new Set();
function hi(e) {
	return (e.split(",")[0]?.trim() ?? "").replace(/^["']|["']$/g, "");
}
function gi(e) {
	return `gf-${e.replace(/[^a-zA-Z0-9]+/g, "-")}`;
}
function _i(e) {
	let t = hi(e);
	if (!t || mi.has(t)) return;
	let n = gi(t);
	if (document.getElementById(n)) {
		mi.add(t);
		return;
	}
	mi.add(t);
	let r = encodeURIComponent(t).replace(/%20/g, "+"), i = document.createElement("link");
	i.id = n, i.rel = "stylesheet", i.href = `https://fonts.googleapis.com/css2?family=${r}:wght@400;500;600;700&display=swap`, document.head.appendChild(i);
}
//#endregion
//#region src/lib/avnac-scene-render.ts
var vi = /* @__PURE__ */ new Map(), yi = null, bi = null;
function xi(e) {
	let t = e.lineHeight;
	return typeof t != "number" || !Number.isFinite(t) ? 1.22 : Math.max(.6, Math.min(4, t));
}
function Si(e) {
	let t = e.letterSpacing;
	return typeof t != "number" || !Number.isFinite(t) ? 0 : t;
}
function Ci(e, t, n) {
	let r = n ?? wi();
	return r ? (Ri(r, e), zi(r, e, t)) : Math.max(0, Array.from(t).length * (e.fontSize * .6));
}
function wi() {
	return typeof document > "u" ? null : (yi ||= document.createElement("canvas"), yi.getContext("2d"));
}
function Ti(e, t, n, r, i) {
	let a = n * Math.PI / 180, o = Math.sin(a), s = -Math.cos(a), c = r / 2, l = i / 2, u = o === 0 ? Infinity : r / 2 / Math.abs(o), d = s === 0 ? Infinity : i / 2 / Math.abs(s), f = Math.min(u, d), p = e.createLinearGradient(c - o * f, l - s * f, c + o * f, l + s * f);
	for (let e of t) p.addColorStop(e.offset, e.color);
	return p;
}
function Ei(e, t, n, r) {
	return t.type === "solid" ? t.color : Ti(e, t.stops, t.angle, n, r);
}
function Di(e) {
	return Math.max(0, Math.min(28, Math.max(0, Math.min(100, e)) / 100 * 28));
}
function Oi(e, t) {
	let n = Math.max(0, Math.min(e, t));
	return {
		x: (e - n) / 2,
		y: (t - n) / 2,
		width: n,
		height: n
	};
}
async function ki(e) {
	let t = $n(e), n = t || e, r = vi.get(n);
	if (r) return r;
	let i = new Promise((n, r) => {
		let i = new Image();
		!t.startsWith("data:") && !t.startsWith("blob:") && (i.crossOrigin = "anonymous"), i.onload = () => n(i), i.onerror = () => r(/* @__PURE__ */ Error(`Could not load image: ${e}`)), i.src = t;
	});
	vi.set(n, i);
	try {
		return await i;
	} catch (e) {
		throw vi.delete(n), e;
	}
}
function Ai(e, t) {
	if (!t.shadow) {
		e.shadowColor = "transparent", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0;
		return;
	}
	e.shadowColor = h(t.shadow), e.shadowBlur = t.shadow.blur, e.shadowOffsetX = t.shadow.offsetX, e.shadowOffsetY = t.shadow.offsetY;
}
function ji(e, t) {
	if (t.lineStyle === "dashed") {
		e.setLineDash([t.strokeWidth * 3, t.strokeWidth * 2]);
		return;
	}
	if (t.lineStyle === "dotted") {
		e.setLineDash([t.strokeWidth * .5, t.strokeWidth * 1.8]);
		return;
	}
	e.setLineDash([]);
}
function Mi(e, t, n, r, i, a) {
	let o = Math.max(0, Math.min(a, Math.min(r, i) / 2)), s = e.roundRect;
	if (e.beginPath(), typeof s == "function") {
		s.call(e, t, n, r, i, o);
		return;
	}
	e.moveTo(t + o, n), e.lineTo(t + r - o, n), e.quadraticCurveTo(t + r, n, t + r, n + o), e.lineTo(t + r, n + i - o), e.quadraticCurveTo(t + r, n + i, t + r - o, n + i), e.lineTo(t + o, n + i), e.quadraticCurveTo(t, n + i, t, n + i - o), e.lineTo(t, n + o), e.quadraticCurveTo(t, n, t + o, n), e.closePath();
}
function Ni(e, t, n, r, i) {
	let a = i || "#ffb88e";
	e.fillStyle = `${a}18`, e.fillRect(0, 0, t, n), e.strokeStyle = `${a}40`, e.lineWidth = 1, e.beginPath(), e.moveTo(0, 0), e.lineTo(t, n), e.moveTo(t, 0), e.lineTo(0, n), e.stroke();
	let o = r || "Placeholder", s = Math.max(12, Math.min(24, t * .06));
	e.fillStyle = a, e.font = `600 ${s}px sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText(o, t / 2, n / 2, t * .8);
}
function Pi(e, t) {
	e.fillStyle = Ei(e, t.fill, t.width, t.height), e.fill(), t.strokeWidth > 0 && (e.strokeStyle = Ei(e, t.stroke, t.width, t.height), e.lineWidth = t.strokeWidth, e.stroke());
}
function Fi(e, t, n) {
	let r = [], i = Math.max(3, e), a = t / 2, o = n / 2;
	for (let e = 0; e < i; e += 1) {
		let t = -Math.PI / 2 + e / i * Math.PI * 2;
		r.push([a + Math.cos(t) * a, o + Math.sin(t) * o]);
	}
	return r;
}
function Ii(e, t, n) {
	let r = [], i = Math.max(4, e), a = t / 2, o = n / 2;
	for (let e = 0; e < i * 2; e += 1) {
		let t = -Math.PI / 2 + e / (i * 2) * Math.PI * 2, n = e % 2 == 0 ? 1 : .45;
		r.push([a + Math.cos(t) * a * n, o + Math.sin(t) * o * n]);
	}
	return r;
}
function Li(e, t, n = !0) {
	if (t.length !== 0) {
		e.beginPath(), e.moveTo(t[0][0], t[0][1]);
		for (let n = 1; n < t.length; n += 1) e.lineTo(t[n][0], t[n][1]);
		n && e.closePath();
	}
}
function Ri(e, t) {
	let n = (t.fontWeight, t.fontWeight);
	e.font = `${t.fontStyle} ${n} ${t.fontSize}px "${t.fontFamily}", sans-serif`;
}
function zi(e, t, n) {
	if (!n) return 0;
	let r = Si(t);
	if (r === 0) return e.measureText(n).width;
	let i = Array.from(n), a = i.reduce((t, n) => t + e.measureText(n).width, 0) + Math.max(0, i.length - 1) * r;
	return Math.max(0, a);
}
function Bi(e, t, n, r, i, a) {
	let o = Si(t);
	if (o === 0 || n.length <= 1) {
		a === "stroke" ? e.strokeText(n, r, i) : e.fillText(n, r, i);
		return;
	}
	let s = Array.from(n), c = r;
	for (let t = 0; t < s.length; t += 1) {
		let n = s[t] ?? "";
		a === "stroke" ? e.strokeText(n, c, i) : e.fillText(n, c, i), c += e.measureText(n).width, t < s.length - 1 && (c += o);
	}
}
function Vi(e, t, n, r, i) {
	let a = t.textAlign === "justify" ? "left" : t.textAlign, o = a === "center" ? t.width / 2 : a === "right" ? t.width : 0;
	for (let s = 0; s < n.lines.length; s += 1) {
		let c = n.lines[s] ?? "", l = s * n.lineHeight + r, u = zi(e, t, c);
		Bi(e, t, c, a === "center" ? o - u / 2 : a === "right" ? o - u : 0, l, i);
	}
}
function Hi(e, t, n, r) {
	if (!n) return [""];
	let i = Array.from(n), a = [], o = "";
	for (let n of i) {
		let i = o + n;
		if (zi(e, t, i) <= r || !o) {
			o = i;
			continue;
		}
		a.push(o), o = n;
	}
	return o && a.push(o), a;
}
function Ui(e, t, n) {
	let r = e.measureText("Mg"), i = typeof r.fontBoundingBoxAscent == "number" && Number.isFinite(r.fontBoundingBoxAscent) ? r.fontBoundingBoxAscent : r.actualBoundingBoxAscent || t.fontSize * .8, a = typeof r.fontBoundingBoxDescent == "number" && Number.isFinite(r.fontBoundingBoxDescent) ? r.fontBoundingBoxDescent : r.actualBoundingBoxDescent || t.fontSize * .2;
	return (n - Math.max(1, i + a)) / 2 + i;
}
function Wi(e, t) {
	let n = t ?? wi();
	return n ? (Ri(n, e), Ui(n, e, e.fontSize * xi(e))) : e.fontSize * .8;
}
function Gi(e, t) {
	let n = t ?? wi(), r = e.fontSize * xi(e);
	if (!n) {
		let t = e.text.split(/\r?\n/);
		return {
			lines: t,
			lineHeight: r,
			height: t.length * r
		};
	}
	Ri(n, e);
	let i = Math.max(8, e.width), a = e.text.split(/\r?\n/), o = [];
	for (let t of a) {
		if (!t.trim()) {
			o.push("");
			continue;
		}
		let r = t.split(/(\s+)/).filter(Boolean), a = "";
		for (let t of r) {
			let r = a ? `${a}${t}` : t;
			if (zi(n, e, r) <= i) {
				a = r;
				continue;
			}
			if (!a) {
				let r = Hi(n, e, t.trimStart(), i);
				a = r.pop() ?? "", o.push(...r);
				continue;
			}
			o.push(a.trimEnd());
			let s = t.trimStart();
			if (!s) {
				a = "";
				continue;
			}
			if (zi(n, e, s) <= i) {
				a = s;
				continue;
			}
			let c = Hi(n, e, s, i);
			a = c.pop() ?? "", o.push(...c);
		}
		o.push(a.trimEnd());
	}
	return {
		lines: o,
		lineHeight: r,
		height: Math.max(r, o.length * r)
	};
}
async function Ki(e) {
	let t = /* @__PURE__ */ new Set(), n = (e) => {
		if (e.type === "text" && t.add(e.fontFamily), e.type === "group") for (let t of e.children) n(t);
	};
	for (let t of e.objects) n(t);
	await Promise.all([...t].map((e) => _i(e)));
}
function qi(e, t) {
	let n = Gi(t, e);
	Ri(e, t), e.textBaseline = "alphabetic", e.textAlign = "left";
	let r = Ei(e, t.fill, t.width, t.height), i = t.textAlign === "justify" ? "left" : t.textAlign, a = i === "center" ? t.width / 2 : i === "right" ? t.width : 0, o = Ui(e, t, n.lineHeight);
	t.strokeWidth > 0 && Ji(e, t, n, o);
	for (let s = 0; s < n.lines.length; s += 1) {
		let c = n.lines[s] ?? "", l = s * n.lineHeight + o, u = zi(e, t, c), d = i === "center" ? a - u / 2 : i === "right" ? a - u : 0;
		if (e.fillStyle = r, Bi(e, t, c, d, l, "fill"), t.underline && c.length > 0) {
			let n = l + t.fontSize * .12;
			e.beginPath(), e.moveTo(d, n), e.lineTo(d + u, n), e.lineWidth = Math.max(1, t.fontSize * .06), e.strokeStyle = r, e.stroke();
		}
	}
}
function Ji(e, t, n, r) {
	if (typeof document > "u") {
		e.strokeStyle = Ei(e, t.stroke, t.width, t.height), e.lineWidth = t.strokeWidth, Vi(e, t, n, r, "stroke");
		return;
	}
	bi ||= document.createElement("canvas");
	let i = Math.ceil(Math.max(2, t.strokeWidth * 2)), a = e.getTransform(), o = Math.max(1, Math.hypot(a.a, a.b) || 1), s = Math.max(1, Math.ceil((t.width + i * 2) * o)), c = Math.max(1, Math.ceil((Math.max(t.height, n.height) + i * 2) * o));
	bi.width = s, bi.height = c;
	let l = bi.getContext("2d");
	l && (l.setTransform(o, 0, 0, o, 0, 0), l.clearRect(0, 0, s / o, c / o), l.translate(i, i), Ri(l, t), l.textBaseline = "alphabetic", l.textAlign = "left", l.lineJoin = "round", l.lineCap = "round", l.miterLimit = 2, l.strokeStyle = Ei(l, t.stroke, t.width, t.height), l.lineWidth = t.strokeWidth * 2, Vi(l, t, n, r, "stroke"), l.globalCompositeOperation = "destination-out", l.fillStyle = "#000000", Vi(l, t, n, r, "fill"), l.globalCompositeOperation = "source-over", e.drawImage(bi, -i, -i, s / o, c / o));
}
function Yi(e, t) {
	let n = t.strokeWidth / 2, r = n, i = Math.max(n + 1, t.width - t.strokeWidth * 1.8), a = t.height / 2;
	if (e.beginPath(), t.pathType === "curved") {
		let n = r + (i - r) * t.curveT, o = a - t.curveBulge;
		e.moveTo(r, a), e.quadraticCurveTo(n, o, i, a);
	} else e.moveTo(r, a), e.lineTo(i, a);
}
function Xi(e, t) {
	let n = Math.max(t.strokeWidth * 2, t.strokeWidth * 4 * t.headSize), r = t.width - t.strokeWidth * .5, i = t.height / 2, a = Math.max(t.strokeWidth * 1.6, t.strokeWidth * 3.2 * t.headSize);
	e.beginPath(), e.moveTo(r, i), e.lineTo(r - n, i - a / 2), e.lineTo(r - n * .82, i), e.lineTo(r - n, i + a / 2), e.closePath(), e.fill();
}
function Zi(e, t, n, r) {
	let i = Math.max(.5, t.strokeWidthN * Math.min(n, r));
	e.strokeStyle = t.stroke || "#1a1a1a", e.fillStyle = t.fill || "transparent", e.lineWidth = i, e.lineCap = "round", e.lineJoin = "round";
	let a = t.kind === "pen" && t.penAnchors && t.penAnchors.length >= 2 ? wr(t.penAnchors, 18, t.penClosed === !0) : t.points;
	if (a.length < 2) return;
	let o = a.map(([e, t]) => [e * n, t * r]);
	if (t.kind === "rect") {
		let [n, r] = [o[0], o[o.length - 1]], i = Math.min(n[0], r[0]), a = Math.min(n[1], r[1]), s = Math.abs(r[0] - n[0]), c = Math.abs(r[1] - n[1]);
		e.beginPath(), e.rect(i, a, s, c), t.fill && t.fill !== "transparent" && e.fill(), e.stroke();
		return;
	}
	if (t.kind === "ellipse") {
		let [n, r] = [o[0], o[o.length - 1]], i = (n[0] + r[0]) / 2, a = (n[1] + r[1]) / 2, s = Math.abs(r[0] - n[0]) / 2, c = Math.abs(r[1] - n[1]) / 2;
		e.beginPath(), e.ellipse(i, a, s, c, 0, 0, Math.PI * 2), t.fill && t.fill !== "transparent" && e.fill(), e.stroke();
		return;
	}
	if (t.kind === "polygon") {
		Li(e, o), t.fill && t.fill !== "transparent" && e.fill(), e.stroke();
		return;
	}
	if (t.kind === "arrow") {
		let [n, r] = [o[0], o[o.length - 1]];
		e.beginPath(), e.moveTo(n[0], n[1]), e.lineTo(r[0], r[1]), e.stroke();
		let a = r[0] - n[0], s = r[1] - n[1], c = Math.atan2(s, a), l = Math.max(i * 3.2, 12), u = Math.max(i * 2.2, 8);
		e.beginPath(), e.moveTo(r[0], r[1]), e.lineTo(r[0] - l * Math.cos(c) + u * Math.sin(c) * .5, r[1] - l * Math.sin(c) - u * Math.cos(c) * .5), e.lineTo(r[0] - l * Math.cos(c) - u * Math.sin(c) * .5, r[1] - l * Math.sin(c) + u * Math.cos(c) * .5), e.closePath(), e.fillStyle = t.stroke || "#1a1a1a", e.fill();
		return;
	}
	e.beginPath(), e.moveTo(o[0][0], o[0][1]);
	for (let t = 1; t < o.length; t += 1) e.lineTo(o[t][0], o[t][1]);
	t.kind === "pen" && t.penClosed && e.closePath(), t.fill && t.fill !== "transparent" && t.kind === "pen" && e.fill(), e.stroke();
}
function Qi(e, t, n, r, i) {
	i?.fillBackground !== !1 && (e.fillStyle = "#f8f8f7", e.fillRect(0, 0, n, r));
	let a = Ir(t);
	for (let t of a) Zi(e, t, n, r);
}
async function $i(e, t, n) {
	if (!t.visible) return;
	e.save(), e.globalAlpha *= t.opacity, Ai(e, t);
	let r = Di(t.blurPct);
	switch (e.filter = r > 0 ? `blur(${r}px)` : "none", e.translate(t.x + t.width / 2, t.y + t.height / 2), e.rotate(t.rotation * Math.PI / 180), e.translate(-t.width / 2, -t.height / 2), t.type) {
		case "rect":
			Mi(e, 0, 0, t.width, t.height, t.cornerRadius), Pi(e, t);
			break;
		case "ellipse":
			e.beginPath(), e.ellipse(t.width / 2, t.height / 2, t.width / 2, t.height / 2, 0, 0, Math.PI * 2), Pi(e, t);
			break;
		case "polygon":
			Li(e, Fi(t.sides, t.width, t.height)), Pi(e, t);
			break;
		case "star":
			Li(e, Ii(t.points, t.width, t.height)), Pi(e, t);
			break;
		case "line":
			e.strokeStyle = Ei(e, t.stroke, t.width, t.height), e.lineWidth = t.strokeWidth, e.lineCap = t.roundedEnds ? "round" : "butt", ji(e, t), e.beginPath(), e.moveTo(t.strokeWidth / 2, t.height / 2), e.lineTo(t.width - t.strokeWidth / 2, t.height / 2), e.stroke(), e.setLineDash([]);
			break;
		case "arrow":
			e.strokeStyle = Ei(e, t.stroke, t.width, t.height), e.fillStyle = Ei(e, t.stroke, t.width, t.height), e.lineWidth = t.strokeWidth, e.lineCap = t.roundedEnds ? "round" : "butt", e.lineJoin = "round", ji(e, t), Yi(e, t), e.stroke(), e.setLineDash([]), Xi(e, t);
			break;
		case "text":
			qi(e, t);
			break;
		case "image": {
			let n = await ki(t.src), r = t.crop.rotation || 0;
			if (e.save(), Mi(e, 0, 0, t.width, t.height, t.cornerRadius), e.clip(), Math.abs(r) < .001) e.drawImage(n, t.crop.x, t.crop.y, t.crop.width, t.crop.height, 0, 0, t.width, t.height);
			else {
				let i = t.width / Math.max(1, t.crop.width), a = t.height / Math.max(1, t.crop.height), o = t.crop.x + t.crop.width / 2, s = t.crop.y + t.crop.height / 2;
				e.translate(t.width / 2, t.height / 2), e.scale(i, a), e.rotate(r * Math.PI / 180), e.drawImage(n, -o, -s);
			}
			e.restore();
			break;
		}
		case "icon": {
			let n = await ki(y(t.svg, {
				fill: t.fill,
				strokeWidth: t.strokeWidth
			})), r = Oi(t.width, t.height);
			e.drawImage(n, r.x, r.y, r.width, r.height);
			break;
		}
		case "vector-board": {
			let r = n[t.boardId];
			r && Qi(e, r, t.width, t.height, { fillBackground: !1 });
			break;
		}
		case "group":
			for (let r of t.children) await $i(e, r, n);
			break;
		case "placeholder": {
			if (e.save(), Mi(e, 0, 0, t.width, t.height, t.cornerRadius), e.clip(), t.previewImageUrl) try {
				let n = await ki(t.previewImageUrl), r = n.naturalWidth || n.width, i = n.naturalHeight || n.height;
				if (t.fit === "fill") e.drawImage(n, 0, 0, t.width, t.height);
				else {
					let a = t.width / t.height, o = r / i, s = 0, c = 0, l = r, u = i;
					t.fit === "cover" && (o > a ? (l = i * a, s = (r - l) / 2) : (u = r / a, c = (i - u) / 2));
					let d = t.fit === "contain" ? o > a ? t.width : t.height * o : t.width, f = t.fit === "contain" && o > a ? t.width / o : t.height, p = (t.width - d) / 2, m = (t.height - f) / 2;
					t.fit === "contain" ? e.drawImage(n, 0, 0, r, i, p, m, d, f) : e.drawImage(n, s, c, l, u, 0, 0, t.width, t.height);
				}
			} catch {
				Ni(e, t.width, t.height, t.label, t.borderColor);
			}
			else Ni(e, t.width, t.height, t.label, t.borderColor);
			e.restore();
			let n = t.borderColor || "#ffb88e";
			e.save(), e.strokeStyle = n, e.lineWidth = 2, e.setLineDash([8, 4]), Mi(e, 0, 0, t.width, t.height, t.cornerRadius), e.stroke(), e.setLineDash([]), e.restore();
			break;
		}
	}
	e.restore();
}
async function ea(e, t, n, r) {
	let { width: i, height: a } = t.artboard;
	e.clearRect(0, 0, i, a), r?.transparent || (e.fillStyle = Ei(e, t.bg, i, a), e.fillRect(0, 0, i, a)), await Ki(t);
	for (let r of t.objects) await $i(e, r, n);
}
async function ta(e, t, n) {
	let r = Math.max(1, Math.round(n?.multiplier ?? 1)), i = n?.format ?? "png", a = document.createElement("canvas");
	a.width = Math.max(1, Math.round(e.artboard.width * r)), a.height = Math.max(1, Math.round(e.artboard.height * r));
	let o = a.getContext("2d");
	if (!o) throw Error("Could not create export canvas.");
	o.setTransform(r, 0, 0, r, 0, 0), await ea(o, e, t, { transparent: n?.transparent });
	let s = i === "jpg" ? "image/jpeg" : i === "webp" ? "image/webp" : "image/png";
	return a.toDataURL(s);
}
//#endregion
//#region src/lib/extract-image-url-from-data-transfer.ts
function na(e) {
	return e.replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#39;/g, "'");
}
function ra(e) {
	for (let t of e.split(/\r?\n/)) {
		let e = t.trim();
		if (!(!e || e.startsWith("#")) && /^https?:\/\//i.test(e)) return e;
	}
	return null;
}
function ia(e) {
	let t = e.match(/<img[^>]+src\s*=\s*["']([^"']+)["']/i);
	if (t?.[1]) return na(t[1]);
	let n = e.match(/srcset\s*=\s*["']([^"']+)["']/i);
	if (n?.[1]) {
		let e = n[1].split(",")[0]?.trim().split(/\s+/)[0];
		if (e) return na(e);
	}
	return null;
}
function aa(e) {
	let t = e.indexOf("http://"), n = e.indexOf("https://"), r = t >= 0 && n >= 0 ? Math.min(t, n) : Math.max(t, n);
	return r < 0 ? null : e.slice(r).trim() || null;
}
function oa(e) {
	let t = e.getData("DownloadURL");
	if (t) {
		let e = aa(t);
		if (e) return e;
	}
	let n = e.getData("text/html");
	if (n) {
		let e = ia(n);
		if (e && /^https?:\/\//i.test(e)) return e;
	}
	let r = e.getData("text/uri-list");
	if (r) {
		let e = ra(r);
		if (e) return e;
	}
	let i = e.getData("text/plain")?.trim();
	return i && /^https?:\/\//i.test(i) ? i : null;
}
//#endregion
//#region src/lib/feature-flags.ts
function sa(e) {
	return String(e ?? "").trim().toLowerCase() === "true";
}
sa(void 0);
var ca = "We have taken background removal down because the server cost is too high for a free and open-source project. If Avnac is useful to you, please consider sponsoring the project so we can bring it back.";
//#endregion
//#region src/scene-engine/primitives/files.ts
function la() {
	let e = navigator.clipboard?.read;
	return e ? e.call(navigator.clipboard).then(async (e) => {
		let t = [];
		for (let n of e) {
			let e = n.types.find((e) => e.startsWith("image/"));
			if (!e) continue;
			let r = await n.getType(e), i = e.split("/")[1]?.split("+")[0] || "png";
			t.push(new File([r], `clipboard-image.${i}`, { type: e }));
		}
		return t;
	}) : Promise.resolve([]);
}
function ua(e) {
	return e.type.startsWith("image/") ? !0 : /\.(avif|bmp|gif|jpe?g|png|svg|webp)$/i.test(e.name);
}
function da(e) {
	return e ? Array.from(e.types).some((e) => e === "Files" || e === "application/x-moz-file") : !1;
}
function fa(e) {
	if (!e) return [];
	let t = Array.from(e.files).filter(ua), n = Array.from(e.items).filter((e) => e.kind === "file").map((e) => e.getAsFile()).filter((e) => !!e && ua(e)), r = /* @__PURE__ */ new Set();
	return [...t, ...n].filter((e) => {
		let t = `${e.name}:${e.size}:${e.type}:${e.lastModified}`;
		return r.has(t) ? !1 : (r.add(t), !0);
	});
}
//#endregion
//#region src/scene-engine/primitives/geometry.ts
var pa = 15;
function ma(e, t) {
	return Number.isFinite(e) ? Math.min(16e3, Math.max(100, Math.round(e))) : t;
}
function ha(e, t, n, r) {
	return Math.atan2(r - t, n - e) * 180 / Math.PI;
}
function ga(e, t = pa) {
	return Math.round(e / t) * t;
}
function _a(e, t, n) {
	let r = -n * Math.PI / 180, i = Math.cos(r), a = Math.sin(r);
	return {
		x: e * i - t * a,
		y: e * a + t * i
	};
}
function va(e, t, n) {
	let r = n * Math.PI / 180, i = Math.cos(r), a = Math.sin(r);
	return {
		x: e * i - t * a,
		y: e * a + t * i
	};
}
function ya(e, t, n) {
	let r = t / 2, i = n / 2;
	switch (e) {
		case "nw": return {
			x: -r,
			y: -i
		};
		case "n": return {
			x: 0,
			y: -i
		};
		case "ne": return {
			x: r,
			y: -i
		};
		case "e": return {
			x: r,
			y: 0
		};
		case "se": return {
			x: r,
			y: i
		};
		case "s": return {
			x: 0,
			y: i
		};
		case "sw": return {
			x: -r,
			y: i
		};
		case "w": return {
			x: -r,
			y: 0
		};
	}
}
function ba(e) {
	switch (e) {
		case "nw": return "se";
		case "n": return "s";
		case "ne": return "sw";
		case "e": return "w";
		case "se": return "nw";
		case "s": return "n";
		case "sw": return "ne";
		case "w": return "e";
	}
}
function xa(e) {
	return e === "nw" || e === "ne" || e === "se" || e === "sw";
}
function Sa(e) {
	return e === "n" || e === "e" || e === "s" || e === "w";
}
function Ca(e) {
	switch (e) {
		case "n":
		case "s": return "ns-resize";
		case "e":
		case "w": return "ew-resize";
		case "nw":
		case "se": return "nwse-resize";
		case "ne":
		case "sw": return "nesw-resize";
	}
}
function wa(e, t, n, r, i) {
	let a = Math.max(1, r), o = Math.max(1, i), s = Math.max(12 / a, 12 / o, Math.abs(n.x - t.x) / a, Math.abs(n.y - t.y) / o), c = a * s, l = o * s, u = e === "ne" || e === "se" ? 1 : -1, d = e === "sw" || e === "se" ? 1 : -1;
	return {
		minX: u > 0 ? t.x : t.x - c,
		maxX: u > 0 ? t.x + c : t.x,
		minY: d > 0 ? t.y : t.y - l,
		maxY: d > 0 ? t.y + l : t.y
	};
}
function Ta(e, t, n, r) {
	return {
		left: Math.min(e, n),
		top: Math.min(t, r),
		width: Math.abs(n - e),
		height: Math.abs(r - t)
	};
}
function Ea(e, t) {
	return e.left <= t.left + t.width && e.left + e.width >= t.left && e.top <= t.top + t.height && e.top + e.height >= t.top;
}
function Da(e, t) {
	let n = new Set(e), r = [...e];
	for (let e of t) n.has(e) || (n.add(e), r.push(e));
	return r;
}
//#endregion
//#region src/scene-engine/primitives/objects.ts
function Oa(e) {
	let t = we(e);
	return t.id = crypto.randomUUID(), t.type === "group" && (t.children = t.children.map((e) => Oa(e))), t;
}
function ka(e, t, n) {
	return e.map((e) => {
		let r = we(e);
		return r.x *= t, r.y *= n, r.width = Math.max(1, r.width * t), r.height = Math.max(1, r.height * n), r.type === "group" && (r.children = ka(r.children, t, n)), O(r) ? f(r, Math.min(ve(r) * Math.max(t, n), u(r))) : r;
	});
}
function Aa(e) {
	return e.type === "rect" || e.type === "ellipse" || e.type === "polygon" || e.type === "star";
}
var ja = 1, Ma = 1e-4;
function Na(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function Pa(e) {
	let t = Math.max(ja, e.naturalWidth || e.width), n = Math.max(ja, e.naturalHeight || e.height), r = Na(e.crop.width || t, ja, t), i = Na(e.crop.height || n, ja, n);
	return {
		x: Na(e.crop.x || 0, 0, Math.max(0, t - r)),
		y: Na(e.crop.y || 0, 0, Math.max(0, n - i)),
		width: r,
		height: i,
		rotation: e.crop.rotation || 0
	};
}
function Fa(e, t, n) {
	let r = Math.max(ja, e.naturalWidth || e.width), i = Math.max(ja, e.naturalHeight || e.height), a = Math.max(ja / i, n || 1), o = r / i, s = a >= o ? r : i * a, c = a >= o ? r / a : i, l = t.width, u = t.height;
	l / u > a ? l = u * a : u = l / a, l > s && (l = s, u = l / a), u > c && (u = c, l = u * a), l = Na(l, ja, Math.max(ja, s)), u = Na(u, ja, Math.max(ja, c));
	let d = t.x + t.width / 2, f = t.y + t.height / 2;
	return {
		x: Na(d - l / 2, 0, Math.max(0, r - l)),
		y: Na(f - u / 2, 0, Math.max(0, i - u)),
		width: l,
		height: u,
		rotation: t.rotation || 0
	};
}
function Ia(e, t, n, r) {
	let i = we(e), a = Pa(e), o = Math.max(ja, e.naturalWidth || e.width), s = Math.max(ja, e.naturalHeight || e.height), c = e.x + e.width, l = e.y + e.height, u = e.x + e.width / 2, d = e.y + e.height / 2;
	if (n === "e" || n === "w") {
		let s = Math.max(Ma, e.height / Math.max(ja, a.height)), l = a.x + a.width / 2, d = t.width / s, f = Na(d, ja, o), p = a.x;
		if (r) p = Na(l - f / 2, 0, Math.max(0, o - f)), f = Math.min(f, o), i.x = Math.abs(f - d) < .001 ? t.x : u - f * s / 2;
		else if (n === "w") {
			let e = a.x + a.width;
			f = Math.min(f, e), p = e - f, i.x = Math.abs(f - d) < .001 ? t.x : c - f * s;
		} else f = Math.min(f, o - a.x), i.x = Math.abs(f - d) < .001 ? t.x : e.x;
		return i.y = t.y, i.width = Math.max(1, f * s), i.height = e.height, i.crop = {
			x: Na(p, 0, Math.max(0, o - f)),
			y: a.y,
			width: f,
			height: a.height,
			rotation: a.rotation || 0
		}, i;
	}
	if (n === "n" || n === "s") {
		let o = Math.max(Ma, e.width / Math.max(ja, a.width)), c = a.y + a.height / 2, u = t.height / o, f = Na(u, ja, s), p = a.y;
		if (r) p = Na(c - f / 2, 0, Math.max(0, s - f)), f = Math.min(f, s), i.y = Math.abs(f - u) < .001 ? t.y : d - f * o / 2;
		else if (n === "n") {
			let e = a.y + a.height;
			f = Math.min(f, e), p = e - f, i.y = Math.abs(f - u) < .001 ? t.y : l - f * o;
		} else f = Math.min(f, s - a.y), i.y = Math.abs(f - u) < .001 ? t.y : e.y;
		return i.x = t.x, i.width = e.width, i.height = Math.max(1, f * o), i.crop = {
			x: a.x,
			y: Na(p, 0, Math.max(0, s - f)),
			width: a.width,
			height: f,
			rotation: a.rotation || 0
		}, i;
	}
	return i;
}
function La(e, t, n) {
	if (t.length === 0) return e;
	let r = new Set(t);
	if (n === "front" || n === "back") {
		let t = e.filter((e) => r.has(e.id));
		if (t.length === 0) return e;
		let i = e.filter((e) => !r.has(e.id)), a = n === "front" ? [...i, ...t] : [...t, ...i];
		return a.every((t, n) => t === e[n]) ? e : a;
	}
	let i = [...e], a = !1;
	if (n === "forward") {
		for (let e = i.length - 2; e >= 0; --e) !r.has(i[e].id) || r.has(i[e + 1].id) || ([i[e], i[e + 1]] = [i[e + 1], i[e]], a = !0);
		return a ? i : e;
	}
	for (let e = 1; e < i.length; e += 1) !r.has(i[e].id) || r.has(i[e - 1].id) || ([i[e], i[e - 1]] = [i[e - 1], i[e]], a = !0);
	return a ? i : e;
}
function Ra(e, t, n) {
	let r = we(e);
	if (r.x = t.x, r.y = t.y, r.width = Math.max(1, t.width), r.height = Math.max(1, t.height), r.type === "text") {
		let e = n?.initial?.type === "text" ? n.initial : r;
		if (n?.handle && xa(n.handle)) {
			let n = Math.max(.1, Math.max(t.width / Math.max(1, e.width), t.height / Math.max(1, e.height)));
			r.fontSize = Math.max(8, Math.round(e.fontSize * n)), r.letterSpacing = Math.round(e.letterSpacing * n);
		}
		r.width = Math.max(24, t.width);
		let i = Gi(r);
		return r.height = Math.max(i.height, t.height), r;
	}
	if (r.type === "image") {
		let e = n?.initial?.type === "image" ? n.initial : r;
		return n?.handle && Sa(n.handle) ? Ia(e, t, n.handle, !!n.centered) : (r.crop = Fa(r, Pa(r), r.width / Math.max(1, r.height)), r);
	}
	return r.type === "group" && (r.children = ka(r.children, r.width / e.width, r.height / e.height)), O(r) ? f(r, Math.min(ve(r), u(r))) : r;
}
var za = 1.5, Ba = 1.6;
function Va(e, t) {
	return Math.max(8, Math.round(Math.min(e, t) * .0025));
}
function Ha(e, t, n, r, i, a, o) {
	let s = e.left, c = e.left + e.width, l = e.top, u = e.top + e.height, d = s + e.width / 2, f = l + e.height / 2, p = 0, m = Infinity, h = null, g = i * Ba, _ = (e, t) => {
		let n = t - e, r = Math.abs(n), o = a !== null && Math.abs(t - a) < .5;
		if (r > (o ? g : i)) return;
		let s = r - (o ? za : 0);
		s < m && (m = s, p = n, h = t);
	};
	for (let e of t) {
		let t = e.left, n = e.left + e.width / 2, r = e.left + e.width;
		for (let e of [
			t,
			n,
			r
		]) _(s, e), _(d, e), _(c, e);
	}
	_(d, n / 2);
	let v = 0, y = Infinity, b = null, x = i * Ba, S = (e, t) => {
		let n = t - e, r = Math.abs(n), a = o !== null && Math.abs(t - o) < .5;
		if (r > (a ? x : i)) return;
		let s = r - (a ? za : 0);
		s < y && (y = s, v = n, b = t);
	};
	for (let e of t) {
		let t = e.top, n = e.top + e.height / 2, r = e.top + e.height;
		for (let e of [
			t,
			n,
			r
		]) S(l, e), S(f, e), S(u, e);
	}
	S(f, r / 2);
	let C = [];
	return h !== null && C.push({
		axis: "v",
		pos: h
	}), b !== null && C.push({
		axis: "h",
		pos: b
	}), {
		guides: C,
		dx: p,
		dy: v
	};
}
//#endregion
//#region src/scene-engine/primitives/types.ts
var Ua = [
	"nw",
	"n",
	"ne",
	"e",
	"se",
	"s",
	"sw",
	"w"
], Wa = 120;
function Ga({ blurPct: e, onChange: t }) {
	let [n, r] = X(!1), i = Y(null), a = Y(null), o = U(() => a.current, []), s = Math.max(0, Math.min(100, Math.round(e))), { openUpward: c, shiftX: l } = Jn(n, i, Wa, o, "center");
	return G(() => {
		if (!n) return;
		let e = (e) => {
			i.current?.contains(e.target) || r(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [n]), /* @__PURE__ */ V("div", {
		ref: i,
		className: "relative shrink-0",
		children: [/* @__PURE__ */ V("button", {
			type: "button",
			className: [or(n, { wide: !0 }), "gap-1 px-2"].join(" "),
			"aria-label": `Blur, ${s}%`,
			title: "Blur",
			"aria-expanded": n,
			"aria-haspopup": "dialog",
			onClick: () => r((e) => !e),
			children: [/* @__PURE__ */ B(M, {
				icon: Ve,
				size: 18,
				strokeWidth: 1.75
			}), /* @__PURE__ */ V("span", {
				className: "min-w-[2.25rem] text-left text-xs font-medium tabular-nums text-neutral-700",
				children: [s, "%"]
			})]
		}), n ? /* @__PURE__ */ V("div", {
			ref: a,
			className: [
				"absolute left-1/2 z-[70] min-w-[13.5rem] p-3",
				c ? "bottom-full mb-2" : "top-full mt-2",
				lr
			].join(" "),
			style: { transform: `translateX(calc(-50% + ${l}px))` },
			children: [/* @__PURE__ */ V("div", {
				className: "mb-2 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ B("span", {
					className: "text-[13px] font-medium text-neutral-800",
					children: "Blur"
				}), /* @__PURE__ */ V("span", {
					className: "text-[13px] tabular-nums text-neutral-600",
					children: [s, "%"]
				})]
			}), /* @__PURE__ */ B(nr, {
				min: 0,
				max: 100,
				value: s,
				onChange: t,
				"aria-label": "Blur",
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-valuenow": s,
				trackClassName: "w-full"
			})]
		}) : null]
	});
}
//#endregion
//#region src/components/editor-shortcuts-modal.tsx
var Ka = [
	{
		keys: "Cmd/Ctrl + Z",
		action: "Undo"
	},
	{
		keys: "Cmd/Ctrl + Shift + Z",
		action: "Redo"
	},
	{
		keys: "Cmd/Ctrl + G",
		action: "Group selection"
	},
	{
		keys: "Cmd/Ctrl + Shift + G",
		action: "Ungroup"
	},
	{
		keys: "Cmd/Ctrl + D",
		action: "Duplicate selection"
	},
	{
		keys: "Cmd/Ctrl + C / V",
		action: "Copy / paste (Avnac clipboard)"
	},
	{
		keys: "Arrow keys",
		action: "Nudge selection 1px"
	},
	{
		keys: "Shift + Arrow keys",
		action: "Nudge selection 10px"
	},
	{
		keys: "Delete / Backspace",
		action: "Delete selection"
	},
	{
		keys: "Option/Alt + drag",
		action: "Duplicate while dragging (canvas)"
	},
	{
		keys: "Vector board — tools",
		action: "V = Move, P = Pen, Shift+P = Pencil, R = Rectangle, O = Ellipse"
	},
	{
		keys: "Vector board — selection",
		action: "Shift+click multi-selects; drag empty area marquees; Shift+drag marquee = additive; Delete/Backspace removes; Cmd/Ctrl+C/V copies/pastes; Alt+drag duplicates; Arrow nudges 1px (Shift = 10px)"
	},
	{
		keys: "Vector board — transform",
		action: "Drag selection handles to resize (Shift = proportional, Alt = from center); double-click a pen shape to edit its anchors, then Alt+click to remove an anchor, Esc to exit"
	},
	{
		keys: "Vector board — view / z-order",
		action: "Space+drag or middle-click drag to pan; Cmd/Ctrl+wheel zooms; Cmd/Ctrl+0 resets, Cmd/Ctrl+1 fits, Cmd/Ctrl+=/- zooms; Cmd/Ctrl+] / [ moves selection forward/backward (add Shift for front/back)"
	},
	{
		keys: "?",
		action: "Show shortcuts"
	}
];
function qa({ open: e, onClose: t }) {
	return e ? /* @__PURE__ */ B("div", {
		className: "pointer-events-auto fixed inset-0 z-[20000] flex items-center justify-center bg-black/35 p-4 backdrop-blur-[2px]",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Keyboard shortcuts",
		onMouseDown: (e) => {
			e.target === e.currentTarget && t();
		},
		children: /* @__PURE__ */ V("div", {
			"data-avnac-chrome": !0,
			className: "max-h-[90vh] w-full max-w-md overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-2xl",
			children: [/* @__PURE__ */ V("div", {
				className: "flex items-center justify-between border-b border-black/[0.06] px-4 py-3",
				children: [/* @__PURE__ */ B("h2", {
					className: "m-0 text-base font-semibold text-neutral-900",
					children: "Shortcuts"
				}), /* @__PURE__ */ B("button", {
					type: "button",
					className: "flex h-9 w-9 items-center justify-center rounded-lg text-neutral-600 hover:bg-black/[0.06]",
					onClick: t,
					"aria-label": "Close",
					children: /* @__PURE__ */ B(M, {
						icon: _e,
						size: 20,
						strokeWidth: 1.75
					})
				})]
			}), /* @__PURE__ */ B("div", {
				className: "max-h-[min(70vh,420px)] overflow-auto p-4",
				children: /* @__PURE__ */ B("table", {
					className: "w-full border-collapse text-sm",
					children: /* @__PURE__ */ B("tbody", { children: Ka.map((e) => /* @__PURE__ */ V("tr", {
						className: "border-b border-black/[0.04]",
						children: [/* @__PURE__ */ B("td", {
							className: "py-2 pr-3 font-medium tabular-nums text-neutral-800",
							children: e.keys
						}), /* @__PURE__ */ B("td", {
							className: "py-2 text-neutral-600",
							children: e.action
						})]
					}, e.action)) })
				})
			})]
		})
	}) : null;
}
//#endregion
//#region src/components/ui/utils.ts
function Ja(...e) {
	return e.filter(Boolean).join(" ");
}
//#endregion
//#region src/components/ui/button.tsx
var Ya = "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 border font-medium no-underline outline-none transition-[background-color,border-color,color,box-shadow,opacity,transform] focus-visible:ring-2 focus-visible:ring-[var(--accent)]/45 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-45", Xa = {
	primary: "border-neutral-900 bg-neutral-950 text-white shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:bg-neutral-800",
	secondary: "border-black/[0.1] bg-white/88 text-neutral-900 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:border-black/[0.16] hover:bg-white",
	ghost: "border-transparent bg-transparent text-neutral-700 hover:bg-black/[0.055] hover:text-neutral-950",
	subtle: "border-black/[0.06] bg-black/[0.035] text-neutral-800 hover:border-black/[0.1] hover:bg-black/[0.06]",
	danger: "border-red-200 bg-red-50 text-red-700 hover:border-red-300 hover:bg-red-100",
	magic: "border-[#8B3DFF]/20 bg-[linear-gradient(135deg,rgba(139,61,255,0.1),rgba(255,184,142,0.16))] text-[#5d2fc2] hover:border-[#8B3DFF]/32 hover:bg-[linear-gradient(135deg,rgba(139,61,255,0.14),rgba(255,184,142,0.22))]"
}, Za = {
	xs: "h-8 rounded-lg px-2.5 text-[12px]",
	sm: "h-9 rounded-lg px-3 text-[13px]",
	md: "h-10 rounded-xl px-4 text-sm",
	lg: "h-12 rounded-xl px-5 text-base"
};
function Qa({ className: e, fullWidth: t, size: n = "md", variant: r = "secondary" } = {}) {
	return Ja(Ya, Xa[r], Za[n], t && "w-full", e);
}
var $a = Lt(function({ className: e, children: t, variant: n = "secondary", size: r = "md", fullWidth: i, iconBefore: a, iconAfter: o, type: s = "button", ...c }, l) {
	return /* @__PURE__ */ V("button", {
		ref: l,
		type: s,
		className: Qa({
			className: e,
			fullWidth: i,
			size: r,
			variant: n
		}),
		...c,
		children: [
			a,
			t,
			o
		]
	});
});
Lt(function({ className: e, children: t, variant: n = "secondary", size: r = "md", fullWidth: i, iconBefore: a, iconAfter: o, ...s }, c) {
	return /* @__PURE__ */ V("a", {
		ref: c,
		className: Qa({
			className: e,
			fullWidth: i,
			size: r,
			variant: n
		}),
		...s,
		children: [
			a,
			t,
			o
		]
	});
});
var eo = {
	chrome: "border-transparent bg-transparent text-neutral-600 hover:bg-black/[0.06] hover:text-neutral-950",
	ghost: "border-transparent bg-transparent text-neutral-600 hover:bg-black/[0.055] hover:text-neutral-950",
	subtle: "border-black/[0.06] bg-black/[0.035] text-neutral-700 hover:border-black/[0.1] hover:bg-black/[0.06]",
	primary: "border-neutral-900 bg-neutral-950 text-white hover:bg-neutral-800",
	danger: "border-transparent bg-transparent text-red-600 hover:bg-red-50",
	magic: "border-[#8B3DFF]/18 bg-[#8B3DFF]/8 text-[#6838ce] hover:border-[#8B3DFF]/28 hover:bg-[#8B3DFF]/12"
}, to = {
	sm: "h-8 w-8 rounded-lg",
	md: "h-9 w-9 rounded-xl",
	lg: "h-10 w-10 rounded-xl"
};
function no({ active: e, className: t, size: n = "sm", variant: r = "chrome" } = {}) {
	return Ja("inline-flex shrink-0 cursor-pointer items-center justify-center border outline-none transition-[background-color,border-color,color,box-shadow,opacity] focus-visible:ring-2 focus-visible:ring-[var(--accent)]/45 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-45", eo[r], to[n], e && "border-black/[0.08] bg-black/[0.08] text-neutral-950", t);
}
var ro = Lt(function({ className: e, icon: t, label: n, variant: r = "chrome", size: i = "sm", active: a, strokeWidth: o = 1.75, type: s = "button", ...c }, l) {
	return /* @__PURE__ */ B("button", {
		ref: l,
		type: s,
		"aria-label": n,
		title: n,
		className: no({
			active: a,
			className: e,
			size: i,
			variant: r
		}),
		...c,
		children: /* @__PURE__ */ B(M, {
			icon: t,
			size: i === "lg" ? 20 : 18,
			strokeWidth: o
		})
	});
}), io = Lt(function({ className: e, ...t }, n) {
	return /* @__PURE__ */ B("div", {
		ref: n,
		className: Ja("grid gap-1 p-1.5", e),
		...t
	});
}), ao = Lt(function({ className: e, icon: t, label: n, description: r, shortcut: i, active: a, danger: o, type: s = "button", ...c }, l) {
	return /* @__PURE__ */ V("button", {
		ref: l,
		type: s,
		className: Ja("flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left outline-none transition-[background-color,color,box-shadow] hover:bg-black/[0.04] focus-visible:ring-2 focus-visible:ring-[var(--accent)]/45 disabled:cursor-not-allowed disabled:opacity-45", a && "bg-black/[0.055]", o ? "text-red-600 hover:bg-red-50" : "text-neutral-800", e),
		...c,
		children: [
			t ? /* @__PURE__ */ B(M, {
				icon: t,
				size: 18,
				strokeWidth: 1.75,
				className: Ja("shrink-0", o ? "text-red-500" : "text-neutral-500")
			}) : null,
			/* @__PURE__ */ V("span", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ B("span", {
					className: "block truncate text-[13px] font-medium",
					children: n
				}), r ? /* @__PURE__ */ B("span", {
					className: "mt-0.5 block truncate text-[12px] leading-5 text-neutral-500",
					children: r
				}) : null]
			}),
			i ? /* @__PURE__ */ B("span", {
				className: "shrink-0 rounded-md bg-black/[0.04] px-1.5 py-0.5 text-[11px] font-medium text-neutral-500",
				children: i
			}) : null
		]
	});
}), oo = {
	page: "border-transparent bg-[var(--surface-subtle)]",
	panel: "border-black/[0.08] bg-white/95 shadow-[0_16px_44px_rgba(15,23,42,0.08)] backdrop-blur-md",
	raised: "border-black/[0.08] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08),0_1px_0_rgba(255,255,255,0.72)_inset]",
	chrome: "border-black/[0.08] bg-white/88 shadow-[0_8px_30px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.75)_inset] backdrop-blur-xl",
	canvas: "border-black/[0.08] bg-[#f7f7f5] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.74)]",
	subtle: "border-black/[0.06] bg-black/[0.025]"
}, so = {
	none: "",
	xs: "p-2",
	sm: "p-3",
	md: "p-4",
	lg: "p-5"
}, co = {
	sm: "rounded-lg",
	md: "rounded-xl",
	lg: "rounded-2xl",
	xl: "rounded-3xl",
	full: "rounded-full"
}, lo = Lt(function({ className: e, variant: t = "panel", padding: n = "md", radius: r = "lg", ...i }, a) {
	return /* @__PURE__ */ B("div", {
		ref: a,
		className: Ja("border text-neutral-900", oo[t], so[n], co[r], e),
		...i
	});
});
Lt(function({ title: e, eyebrow: t, description: n, actions: r, children: i, className: a, padding: o = "none", ...s }, c) {
	return /* @__PURE__ */ V(lo, {
		ref: c,
		padding: o,
		className: Ja("overflow-hidden", a),
		...s,
		children: [e || t || n || r ? /* @__PURE__ */ V("div", {
			className: "flex min-h-12 items-start justify-between gap-4 border-b border-black/[0.06] px-4 py-3",
			children: [/* @__PURE__ */ V("div", {
				className: "min-w-0",
				children: [
					t ? /* @__PURE__ */ B("div", {
						className: "text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500",
						children: t
					}) : null,
					e ? /* @__PURE__ */ B("h2", {
						className: "m-0 text-sm font-semibold text-neutral-900",
						children: e
					}) : null,
					n ? /* @__PURE__ */ B("p", {
						className: "m-0 mt-1 text-[12.5px] leading-5 text-neutral-500",
						children: n
					}) : null
				]
			}), r ? /* @__PURE__ */ B("div", {
				className: "flex shrink-0 items-center gap-1.5",
				children: r
			}) : null]
		}) : null, i]
	});
});
var uo = Lt(function({ className: e, compact: t, ...n }, r) {
	return /* @__PURE__ */ B("div", {
		ref: r,
		role: "toolbar",
		className: Ja("pointer-events-auto inline-flex items-center rounded-full border border-black/[0.08] bg-white/90 shadow-[0_6px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl", t ? "gap-0.5 px-1 py-1" : "gap-1 px-1.5 py-1.5", e),
		...n
	});
}), fo = Lt(function({ className: e, ...t }, n) {
	return /* @__PURE__ */ B("div", {
		ref: n,
		className: Ja("relative inline-flex items-center gap-0.5 rounded-full border border-black/[0.06] bg-black/[0.025] p-0.5", e),
		...t
	});
}), po = Lt(function({ className: e, width: t = "w-72", style: n, ...r }, i) {
	return /* @__PURE__ */ B("div", {
		ref: i,
		className: Ja("z-50 overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_18px_48px_rgba(0,0,0,0.14)]", t, e),
		style: n,
		...r
	});
});
function mo({ orientation: e = "horizontal" }) {
	return e === "vertical" ? /* @__PURE__ */ B("div", {
		"aria-hidden": !0,
		className: "mx-1 h-5 w-px shrink-0 bg-black/10"
	}) : /* @__PURE__ */ B("div", {
		"aria-hidden": !0,
		className: "h-px w-full bg-black/[0.07]"
	});
}
//#endregion
//#region src/components/image-crop-modal.tsx
var ho = 12, go = 10, _o = -180, vo = 180, yo = .015, bo = [
	{
		id: "square",
		label: "1:1",
		description: "Square",
		ratio: 1
	},
	{
		id: "landscape",
		label: "16:9",
		description: "Widescreen",
		ratio: 16 / 9
	},
	{
		id: "story",
		label: "9:16",
		description: "Story",
		ratio: 9 / 16
	},
	{
		id: "portrait",
		label: "4:5",
		description: "Portrait",
		ratio: 4 / 5
	},
	{
		id: "post",
		label: "5:4",
		description: "Post",
		ratio: 5 / 4
	},
	{
		id: "photo",
		label: "3:2",
		description: "Photo",
		ratio: 3 / 2
	},
	{
		id: "classic",
		label: "4:3",
		description: "Classic",
		ratio: 4 / 3
	},
	{
		id: "current",
		label: "Frame",
		description: "Current shape",
		ratio: "frame"
	},
	{
		id: "original",
		label: "Original",
		description: "Image ratio",
		ratio: "original"
	},
	{
		id: "free",
		label: "Free",
		description: "Unlocked",
		ratio: null
	}
];
function xo(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function So(e, t) {
	return Math.max(1, Math.min(ho, e, t));
}
function Co(e) {
	return Number.isFinite(e) ? xo(Math.round(e * 10) / 10, _o, vo) : 0;
}
function wo(e, t, n) {
	let r = So(t, n), { x: i, y: a, w: o, h: s } = e;
	return i = xo(i, 0, Math.max(0, t - r)), a = xo(a, 0, Math.max(0, n - r)), o = xo(o, r, Math.max(r, t - i)), s = xo(s, r, Math.max(r, n - a)), {
		x: i,
		y: a,
		w: o,
		h: s,
		rotation: Co(e.rotation)
	};
}
function To(e, t, n, r) {
	let i = Math.max(.001, r), a = Math.max(1, Math.min(t, n * i)), o = Math.max(1, a / i), s = xo(e.w, 1, a), c = s / i;
	c > o && (c = o, s = c * i);
	let l = Math.min(So(t, n), a, o);
	return (s < l || c < l) && (i >= 1 ? (c = Math.min(o, l), s = c * i) : (s = Math.min(a, l), c = s / i)), {
		x: xo(e.x, 0, Math.max(0, t - s)),
		y: xo(e.y, 0, Math.max(0, n - c)),
		w: s,
		h: c,
		rotation: Co(e.rotation)
	};
}
function Eo(e, t, n, r) {
	let i = Math.max(.001, r), a = Math.min(t, n * i), o = Math.min(n, t / i), s = e.w, c = e.h;
	s / Math.max(1, c) > i ? s = c * i : c = s / i, s > a && (s = a, c = s / i), c > o && (c = o, s = c * i);
	let l = e.x + e.w / 2, u = e.y + e.h / 2;
	return To({
		x: l - s / 2,
		y: u - c / 2,
		w: s,
		h: c,
		rotation: e.rotation
	}, t, n, i);
}
function Do(e, t, n) {
	let r = wo(e, t, n), i = Co(r.rotation);
	if (Math.abs(i) < .001) return {
		...r,
		rotation: i
	};
	let a = Math.max(.001, r.w / Math.max(1, r.h)), o = r.x + r.w / 2, s = r.y + r.h / 2, c = Math.max(0, Math.min(o, t - o)), l = Math.max(0, Math.min(s, n - s)), u = i * Math.PI / 180, d = Math.abs(Math.cos(u)), f = Math.abs(Math.sin(u)), p = 2 * c / Math.max(1e-4, d + f / a), m = 2 * l / Math.max(1e-4, f + d / a), h = Math.max(1, Math.min(t, n * a, p, m)), g = Math.max(1, Math.min(r.w, h)), _ = Math.max(1, g / a);
	return {
		x: xo(o - g / 2, 0, Math.max(0, t - g)),
		y: xo(s - _ / 2, 0, Math.max(0, n - _)),
		w: g,
		h: _,
		rotation: i
	};
}
function Oo(e, t, n) {
	return e.ratio === null ? null : e.ratio === "original" ? t.w > 0 && t.h > 0 ? t.w / t.h : null : e.ratio === "frame" ? n.width > 0 && n.height > 0 ? n.width / n.height : null : e.ratio;
}
function ko(e, t, n) {
	if (!Number.isFinite(e) || e <= 0) return "free";
	for (let r of bo) {
		if (r.ratio === null) continue;
		let i = Oo(r, t, n);
		if (i && Math.abs(i - e) <= yo) return r.id;
	}
	return "free";
}
function Ao(e, t, n, r, i, a, o) {
	if (t === "move") return wo({
		...e,
		x: e.x + n,
		y: e.y + r
	}, i, a);
	if (!o) {
		let o = { ...e };
		return t.includes("e") && (o.w = e.w + n), t.includes("w") && (o.x = e.x + n, o.w = e.w - n), t.includes("s") && (o.h = e.h + r), t.includes("n") && (o.y = e.y + r, o.h = e.h - r), o.w < ho && (t.includes("w") && (o.x = e.x + e.w - ho), o.w = ho), o.h < ho && (t.includes("n") && (o.y = e.y + e.h - ho), o.h = ho), wo(o, i, a);
	}
	let s = e.x + e.w / 2, c = e.y + e.h / 2, l = t.includes("e") || t.includes("w"), u = t.includes("n") || t.includes("s"), d = e.w, f = e.h;
	return l && (d = t.includes("w") ? e.w - n : e.w + n), u && (f = t.includes("n") ? e.h - r : e.h + r), l && !u ? f = d / o : u && !l ? d = f * o : Math.abs(d - e.w) >= Math.abs(f - e.h) * o ? f = d / o : d = f * o, d = Math.max(ho, d), f = Math.max(ho, f), To({
		x: t.includes("w") ? e.x + e.w - d : t.includes("e") ? e.x : s - d / 2,
		y: t.includes("n") ? e.y + e.h - f : t.includes("s") ? e.y : c - f / 2,
		w: d,
		h: f,
		rotation: e.rotation
	}, i, a, o);
}
function jo({ ratio: e }) {
	let t = e ?? 1, n = t >= 32 / 24 ? 32 : 24 * t, r = t >= 32 / 24 ? 32 / t : 24;
	return /* @__PURE__ */ B("span", {
		className: ["block rounded-[4px] border-2 border-current", e === null ? "border-dashed opacity-80" : ""].join(" "),
		style: {
			width: n,
			height: r
		},
		"aria-hidden": !0
	});
}
function Mo({ open: e, imageSrc: t, initialCrop: n, initialFrame: r, onCancel: i, onApply: a }) {
	let o = Y(null), s = Y(null), c = Y(n);
	c.current = n;
	let [l, u] = X({
		w: 0,
		h: 0
	}), [d, f] = X(n), [p, m] = X({
		left: 0,
		top: 0,
		width: 0,
		height: 0
	}), [h, g] = X("free"), [, _] = Bt((e) => e + 1, 0), v = Y(null), y = Oo(bo.find((e) => e.id === h) ?? bo[0], l, r);
	G(() => {
		if (!e) {
			u({
				w: 0,
				h: 0
			});
			return;
		}
		let t = {
			...n,
			rotation: Co(n.rotation)
		}, i = r.width > 0 && r.height > 0 ? r.width / r.height : t.w / Math.max(1, t.h);
		f(t), g(ko(i, {
			w: 0,
			h: 0
		}, r));
	}, [
		e,
		n.x,
		n.y,
		n.w,
		n.h,
		n.rotation,
		r.width,
		r.height
	]), G(() => {
		if (!e) return;
		let t = (e) => {
			e.key === "Escape" && i(), (e.metaKey || e.ctrlKey) && e.key === "Enter" && l.w > 0 && a({
				cropX: d.x,
				cropY: d.y,
				width: d.w,
				height: d.h,
				cropRotation: d.rotation
			});
		};
		return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
	}, [
		e,
		i,
		a,
		l.w,
		d.x,
		d.y,
		d.w,
		d.h,
		d.rotation
	]), G(() => {
		if (!e) return;
		let t = () => _();
		window.addEventListener("resize", t);
		let n = o.current, r = null;
		return n && typeof ResizeObserver < "u" && (r = new ResizeObserver(() => _()), r.observe(n)), () => {
			window.removeEventListener("resize", t), r?.disconnect();
		};
	}, [e]), G(() => {
		!e || l.w <= 0 || l.h <= 0 || !y || f((e) => Do(Eo(e, l.w, l.h, y), l.w, l.h));
	}, [
		e,
		l.w,
		l.h,
		y
	]);
	let b = U(() => {
		let e = s.current;
		if (!e) return;
		let t = e.naturalWidth, n = e.naturalHeight;
		if (t <= 0 || n <= 0) return;
		u({
			w: t,
			h: n
		});
		let r = c.current;
		f(wo({
			x: r.x,
			y: r.y,
			w: r.w,
			h: r.h,
			rotation: r.rotation
		}, t, n)), _();
	}, []);
	zt(() => {
		let t = s.current;
		if (!e || !t || l.w <= 0) {
			m({
				left: 0,
				top: 0,
				width: 0,
				height: 0
			});
			return;
		}
		let n = (t.offsetWidth || t.getBoundingClientRect().width) / l.w;
		m({
			left: d.x * n,
			top: d.y * n,
			width: d.w * n,
			height: d.h * n
		});
	}, [
		e,
		l.w,
		d.x,
		d.y,
		d.w,
		d.h,
		_
	]);
	let x = U((e, t) => {
		e.preventDefault(), e.stopPropagation();
		let n = s.current;
		if (!n || l.w <= 0) return;
		let r = (n.offsetWidth || n.getBoundingClientRect().width) / l.w;
		v.current = {
			kind: t,
			startClientX: e.clientX,
			startClientY: e.clientY,
			start: { ...d },
			scale: r,
			aspect: y
		}, e.currentTarget.setPointerCapture?.(e.pointerId);
	}, [
		d,
		l.w,
		y
	]);
	G(() => {
		if (!e) return;
		let t = (e) => {
			let t = v.current;
			if (!t || l.w <= 0 || l.h <= 0) return;
			let n = e.clientX - t.startClientX, r = e.clientY - t.startClientY, i = n / t.scale, a = r / t.scale;
			f(Do(Ao(t.start, t.kind, i, a, l.w, l.h, t.aspect), l.w, l.h));
		}, n = () => {
			v.current = null;
		};
		return window.addEventListener("pointermove", t), window.addEventListener("pointerup", n), window.addEventListener("pointercancel", n), () => {
			window.removeEventListener("pointermove", t), window.removeEventListener("pointerup", n), window.removeEventListener("pointercancel", n);
		};
	}, [
		e,
		l.w,
		l.h
	]);
	let S = U((e) => {
		g(e.id);
		let t = Oo(e, l, r);
		t && l.w > 0 && l.h > 0 && f((e) => Do(Eo(e, l.w, l.h, t), l.w, l.h));
	}, [l, r]), C = U((e) => {
		let t = Co(e);
		f((e) => l.w > 0 && l.h > 0 ? Do({
			...e,
			rotation: t
		}, l.w, l.h) : {
			...e,
			rotation: t
		});
	}, [l.w, l.h]), w = U(() => {
		a({
			cropX: d.x,
			cropY: d.y,
			width: d.w,
			height: d.h,
			cropRotation: d.rotation
		});
	}, [d, a]);
	if (!e || typeof document > "u") return null;
	let T = l.w > 0 && l.h > 0 && s.current, E = T ? {
		left: p.left,
		top: p.top,
		width: p.width,
		height: p.height
	} : { display: "none" }, ee = T ? {
		transform: `rotate(${d.rotation}deg)`,
		transformOrigin: `${p.left + p.width / 2}px ${p.top + p.height / 2}px`
	} : {}, D = (e, t) => /* @__PURE__ */ B("button", {
		type: "button",
		tabIndex: -1,
		"aria-hidden": !0,
		className: `absolute z-10 box-border rounded-sm border-2 border-white bg-[var(--accent)] shadow-[0_1px_4px_rgba(0,0,0,0.28)] ${t}`,
		style: {
			width: go,
			height: go,
			margin: -go / 2
		},
		onPointerDown: (t) => x(t, e)
	});
	return Vt(/* @__PURE__ */ B("div", {
		className: "fixed inset-0 z-[200] flex items-center justify-center bg-black/40 p-4 backdrop-blur-[2px]",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Crop image",
		onMouseDown: (e) => {
			e.target === e.currentTarget && i();
		},
		children: /* @__PURE__ */ V("div", {
			className: "flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-black/10 bg-[var(--surface)] shadow-2xl",
			children: [
				/* @__PURE__ */ V("div", {
					className: "flex items-center justify-between border-b border-black/10 px-4 py-3",
					children: [/* @__PURE__ */ B("h2", {
						className: "m-0 text-base font-semibold text-[var(--text)]",
						children: "Crop image"
					}), /* @__PURE__ */ B("button", {
						type: "button",
						className: "rounded-lg p-1.5 text-neutral-500 hover:bg-black/5 hover:text-neutral-800",
						"aria-label": "Close",
						onClick: i,
						children: /* @__PURE__ */ B(M, {
							icon: _e,
							size: 20,
							strokeWidth: 1.75
						})
					})]
				}),
				/* @__PURE__ */ V("div", {
					className: "border-b border-black/10 px-4 py-3",
					children: [
						/* @__PURE__ */ V("div", {
							className: "mb-3 flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ B("span", {
								className: "text-sm font-semibold text-[var(--text)]",
								children: "Aspect ratio"
							}), /* @__PURE__ */ B("span", {
								className: "text-xs font-medium text-neutral-500",
								children: "Image rotation"
							})]
						}),
						/* @__PURE__ */ B("div", {
							className: "flex gap-2 overflow-x-auto pb-1",
							children: bo.map((e) => {
								let t = Oo(e, l, r), n = h === e.id;
								return /* @__PURE__ */ V("button", {
									type: "button",
									className: [
										"flex min-w-[5.75rem] flex-col items-center gap-1 rounded-xl border px-2.5 py-2 text-xs font-semibold outline-none",
										"hover:bg-black/[0.03] focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40",
										n ? "border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_10%,white)] text-neutral-950 shadow-[0_0_0_2px_color-mix(in_srgb,var(--accent)_25%,transparent)]" : "border-neutral-200 bg-white text-neutral-700"
									].join(" "),
									title: e.description,
									"aria-pressed": n,
									onClick: () => S(e),
									children: [/* @__PURE__ */ B("span", {
										className: "flex h-7 items-center justify-center",
										children: /* @__PURE__ */ B(jo, { ratio: t })
									}), e.label]
								}, e.id);
							})
						}),
						/* @__PURE__ */ V("div", {
							className: "mt-3 grid gap-3 md:grid-cols-[1fr_auto_auto] md:items-center",
							children: [
								/* @__PURE__ */ B(nr, {
									min: _o,
									max: vo,
									step: 1,
									value: d.rotation,
									onChange: C,
									"aria-label": "Rotate image within crop",
									trackClassName: "w-full"
								}),
								/* @__PURE__ */ B("button", {
									type: "button",
									className: "h-10 rounded-lg border border-black/10 bg-white px-3 text-sm font-semibold text-neutral-800 hover:bg-black/[0.04]",
									onClick: () => C(0),
									children: "Auto"
								}),
								/* @__PURE__ */ V("label", {
									className: "flex h-10 min-w-[5rem] items-center rounded-lg border border-black/10 bg-white px-2",
									children: [
										/* @__PURE__ */ B("span", {
											className: "sr-only",
											children: "Image rotation degrees"
										}),
										/* @__PURE__ */ B("input", {
											type: "number",
											min: _o,
											max: vo,
											step: 1,
											value: Math.round(d.rotation),
											className: "min-w-0 flex-1 border-0 bg-transparent text-center text-sm font-medium outline-none",
											onChange: (e) => C(Number(e.target.value))
										}),
										/* @__PURE__ */ B("span", {
											className: "text-xs font-medium text-neutral-500",
											children: "°"
										})
									]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ B("div", {
					className: "min-h-0 flex-1 overflow-auto bg-[#d5d9e2] p-4",
					children: /* @__PURE__ */ V("div", {
						ref: o,
						className: "relative mx-auto inline-block max-w-full",
						children: [/* @__PURE__ */ B("img", {
							ref: s,
							src: t,
							alt: "",
							className: "block max-h-[55vh] max-w-full object-contain",
							style: ee,
							draggable: !1,
							onLoad: b
						}, t), T ? /* @__PURE__ */ B("div", {
							className: "pointer-events-none absolute inset-0",
							children: /* @__PURE__ */ V("div", {
								className: "pointer-events-auto absolute z-[1] cursor-move border-2 border-[var(--accent)] shadow-[0_0_0_9999px_rgba(0,0,0,0.52)]",
								style: E,
								onPointerDown: (e) => x(e, "move"),
								children: [
									/* @__PURE__ */ B("div", {
										className: "pointer-events-none absolute inset-0 opacity-70",
										style: {
											backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)",
											backgroundSize: "33.333% 100%, 100% 33.333%"
										},
										"aria-hidden": !0
									}),
									D("nw", "left-0 top-0 cursor-nwse-resize"),
									D("n", "left-1/2 top-0 -translate-x-1/2 cursor-ns-resize"),
									D("ne", "right-0 top-0 cursor-nesw-resize"),
									D("e", "right-0 top-1/2 -translate-y-1/2 cursor-ew-resize"),
									D("se", "right-0 bottom-0 cursor-nwse-resize"),
									D("s", "bottom-0 left-1/2 -translate-x-1/2 cursor-ns-resize"),
									D("sw", "bottom-0 left-0 cursor-nesw-resize"),
									D("w", "left-0 top-1/2 -translate-y-1/2 cursor-ew-resize")
								]
							})
						}) : null]
					})
				}),
				/* @__PURE__ */ V("div", {
					className: "flex justify-end gap-2.5 border-t border-black/10 px-4 py-3",
					children: [/* @__PURE__ */ B($a, {
						variant: "secondary",
						size: "md",
						className: "h-11 !rounded-full px-5",
						onClick: i,
						children: "Cancel"
					}), /* @__PURE__ */ B($a, {
						disabled: !T,
						variant: "primary",
						size: "md",
						className: "h-11 !rounded-full px-5",
						onClick: w,
						iconBefore: /* @__PURE__ */ B(M, {
							icon: Ne,
							size: 18,
							strokeWidth: 1.75
						}),
						children: "Apply crop"
					})]
				})
			]
		})
	}), document.body);
}
//#endregion
//#region src/components/scene-editor/ai-controller-context.tsx
var No = Ft(null);
function Po({ children: e, controller: t }) {
	return /* @__PURE__ */ B(No.Provider, {
		value: t,
		children: e
	});
}
function Fo() {
	let e = W(No);
	if (!e) throw Error("useAiController must be used within AiControllerProvider");
	return e;
}
//#endregion
//#region src/components/scene-editor/asset-library-context.tsx
var Io = Ft({
	onFetchAssets: null,
	onAssetUpload: null,
	assetResolver: null
});
function Lo({ children: e, onFetchAssets: t, onAssetUpload: n, assetResolver: r }) {
	return /* @__PURE__ */ B(Io.Provider, {
		value: {
			onFetchAssets: t ?? null,
			onAssetUpload: n ?? null,
			assetResolver: r ?? null
		},
		children: e
	});
}
function Ro() {
	return W(Io);
}
//#endregion
//#region src/components/canvas-element-toolbar.tsx
var zo = 8, Bo = 4, Vo = 4e3;
function Ho(e, t, n) {
	let r = t.left + n, i = t.right - n, a = t.top + n, o = t.bottom - n, s = i - r, c = o - a, l = 0, u = 0;
	return e.width > s || e.left < r ? l = r - e.left : e.right > i && (l = i - e.right), e.height > c || e.top < a ? u = a - e.top : e.bottom > o && (u = o - e.bottom), {
		x: l,
		y: u
	};
}
function Uo(e) {
	return Number.isFinite(e) ? Math.max(0, Math.min(Vo, Math.round(e))) : 0;
}
function Wo({ axis: e, icon: t, value: n, onChange: r }) {
	let [i, a] = X(!1), [o, s] = X(""), c = Y(!1), l = e === "horizontal" ? "Horizontal gap" : "Vertical gap", u = n == null ? 0 : Uo(n), d = n == null ? "Mixed" : String(u), f = U(() => {
		if (c.current) {
			c.current = !1, a(!1);
			return;
		}
		let e = Number(o.replace(/,/g, "").trim());
		Number.isFinite(e) && r(Uo(e)), a(!1);
	}, [o, r]), p = U((e) => {
		r(Uo(u + e));
	}, [u, r]);
	return /* @__PURE__ */ V("div", {
		className: "px-3 py-2",
		children: [/* @__PURE__ */ V("div", {
			className: "mb-1.5 flex items-center gap-2 text-[12px] font-medium text-neutral-600",
			children: [/* @__PURE__ */ B("span", {
				className: "text-neutral-500",
				children: t
			}), /* @__PURE__ */ B("span", { children: l })]
		}), /* @__PURE__ */ V("div", {
			className: "grid grid-cols-[1.75rem_minmax(3.75rem,1fr)_1.75rem] overflow-hidden rounded-lg border border-black/10 bg-white",
			children: [
				/* @__PURE__ */ B("button", {
					type: "button",
					className: "flex h-8 items-center justify-center text-neutral-600 hover:bg-black/[0.05]",
					"aria-label": `Decrease ${l.toLowerCase()}`,
					onClick: () => p(-Bo),
					children: /* @__PURE__ */ B(M, {
						icon: wt,
						size: 14,
						strokeWidth: 1.85
					})
				}),
				/* @__PURE__ */ B("input", {
					type: "text",
					inputMode: "decimal",
					value: i ? o : d,
					placeholder: "Mixed",
					className: "h-8 min-w-0 border-x border-black/10 px-1.5 text-center text-[12px] font-medium tabular-nums text-neutral-900 outline-none placeholder:text-neutral-500 focus:bg-neutral-50",
					"aria-label": l,
					onFocus: (e) => {
						c.current = !1, a(!0), s(n == null ? "" : String(u)), e.currentTarget.select();
					},
					onChange: (e) => s(e.target.value),
					onBlur: f,
					onKeyDown: (e) => {
						e.key === "Enter" && (e.preventDefault(), f()), e.key === "Escape" && (e.preventDefault(), c.current = !0, a(!1), e.currentTarget.blur());
					}
				}),
				/* @__PURE__ */ B("button", {
					type: "button",
					className: "flex h-8 items-center justify-center text-neutral-600 hover:bg-black/[0.05]",
					"aria-label": `Increase ${l.toLowerCase()}`,
					onClick: () => p(Bo),
					children: /* @__PURE__ */ B(M, {
						icon: Fe,
						size: 14,
						strokeWidth: 1.85
					})
				})
			]
		})]
	});
}
var Go = Lt(function({ style: n, placement: r, viewportRef: i, locked: o, onDuplicate: s, onToggleLock: c, onDelete: l, onCopy: u, onPaste: d, onAlign: f, alignAlreadySatisfied: p, canGroup: m, canAlignElements: h, canUngroup: g, canSpaceGroup: _, canDistributeGroupSpacing: v, groupSpacingValues: y, onGroup: b, onAlignElements: x, onDistributeGroupSpacing: C, onSetGroupSpacing: w, onUngroup: T }, E) {
	let [ee, D] = X(!1), [O, k] = X(!1), [A, j] = X(!1), [N, te] = X(!1), ne = Y(null), P = Y(null), re = Y(null), ie = Y(null), ae = Y(null), F = qn(ee, i, U(() => P.current, [])), [oe, se] = X({
		x: 0,
		y: 0
	}), [ce, ue] = X({
		x: 0,
		y: 0
	}), [de, fe] = X({
		x: 0,
		y: 0
	}), [pe, he] = X({
		x: 0,
		y: 0
	}), ge = Y(null), I = Y(null), L = U((e) => {
		ge.current = e, typeof E == "function" ? E(e) : E && (E.current = e);
	}, [E]);
	zt(() => {
		let e = ge.current, t = i.current;
		if (!e || !t) return;
		let a = {
			left: n.left,
			top: n.top,
			placement: r
		}, o = I.current, s = !o || o.left !== a.left || o.top !== a.top || o.placement !== a.placement;
		I.current = a, s && he({
			x: 0,
			y: 0
		});
		let c = Ho(e.getBoundingClientRect(), t.getBoundingClientRect(), zo);
		s ? he({
			x: c.x,
			y: c.y
		}) : (c.x !== 0 || c.y !== 0) && he((e) => ({
			x: e.x + c.x,
			y: e.y + c.y
		}));
		let l = () => {
			let e = ge.current, t = i.current;
			if (!e || !t) return;
			let n = Ho(e.getBoundingClientRect(), t.getBoundingClientRect(), zo);
			Math.abs(n.x) < .25 && Math.abs(n.y) < .25 || he((e) => ({
				x: e.x + n.x,
				y: e.y + n.y
			}));
		}, u = new ResizeObserver(() => l());
		return u.observe(e), t.addEventListener("scroll", l, { passive: !0 }), window.addEventListener("resize", l), () => {
			u.disconnect(), t.removeEventListener("scroll", l), window.removeEventListener("resize", l);
		};
	}, [
		i,
		r,
		n.left,
		n.top,
		o,
		m,
		g,
		h,
		_,
		ee,
		O,
		A,
		N
	]), zt(() => {
		if (!ee) {
			se({
				x: 0,
				y: 0
			}), ue({
				x: 0,
				y: 0
			}), fe({
				x: 0,
				y: 0
			});
			return;
		}
		function e() {
			let e = i.current;
			if (e) {
				if (A) {
					let t = re.current;
					if (t) {
						let { shiftX: n, shiftY: r } = Kn(e, t);
						se({
							x: n,
							y: r
						});
					}
				} else se({
					x: 0,
					y: 0
				});
				if (O) {
					let t = ie.current;
					if (t) {
						let { shiftX: n, shiftY: r } = Kn(e, t);
						ue({
							x: n,
							y: r
						});
					}
				} else ue({
					x: 0,
					y: 0
				});
				if (N) {
					let t = ae.current;
					if (t) {
						let { shiftX: n, shiftY: r } = Kn(e, t);
						fe({
							x: n,
							y: r
						});
					}
				} else fe({
					x: 0,
					y: 0
				});
			}
		}
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [
		ee,
		A,
		O,
		N,
		i
	]), G(() => {
		if (!ee && !O && !A && !N) return;
		let e = (e) => {
			let t = e.target;
			ne.current?.contains(t) || (D(!1), k(!1), j(!1), te(!1));
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [
		ee,
		O,
		A,
		N
	]), G(() => {
		o && (D(!1), k(!1), j(!1), te(!1));
	}, [o]), G(() => {
		h || j(!1);
	}, [h]), G(() => {
		_ || te(!1);
	}, [_]);
	let R = r === "above" ? `calc(-100% - 10px + ${pe.y}px)` : `calc(10px + ${pe.y}px)`;
	return /* @__PURE__ */ B("div", {
		ref: L,
		className: "pointer-events-auto z-[35]",
		style: {
			position: "absolute",
			transform: `translate(calc(-50% + ${pe.x}px), ${R})`,
			...n
		},
		children: /* @__PURE__ */ B(ir, {
			role: "toolbar",
			"aria-label": "Element actions",
			children: /* @__PURE__ */ B("div", {
				ref: ne,
				className: "relative flex items-stretch overflow-visible",
				children: o ? /* @__PURE__ */ V("button", {
					type: "button",
					className: [or(!0, { wide: !0 }), "gap-1.5 px-2.5"].join(" "),
					title: "Unlock",
					"aria-label": "Unlock",
					"aria-pressed": !0,
					onClick: c,
					children: [/* @__PURE__ */ B(M, {
						icon: S,
						size: 18,
						strokeWidth: 1.75
					}), /* @__PURE__ */ B("span", {
						className: "text-[13px] font-medium",
						children: "Unlock"
					})]
				}) : /* @__PURE__ */ V(jt, { children: [
					m ? /* @__PURE__ */ V(jt, { children: [/* @__PURE__ */ V("button", {
						type: "button",
						className: [or(!1, { wide: !0 }), "gap-1.5 px-2.5"].join(" "),
						title: "Group selection (Cmd/Ctrl+G)",
						"aria-label": "Group selection",
						onClick: b,
						children: [/* @__PURE__ */ B(M, {
							icon: _t,
							size: 18,
							strokeWidth: 1.75
						}), /* @__PURE__ */ B("span", {
							className: "text-[13px] font-medium",
							children: "Group"
						})]
					}), /* @__PURE__ */ B(ar, {})] }) : null,
					g ? /* @__PURE__ */ V(jt, { children: [/* @__PURE__ */ V("button", {
						type: "button",
						className: [or(!1, { wide: !0 }), "gap-1.5 px-2.5"].join(" "),
						title: "Ungroup (Cmd/Ctrl+Shift+G)",
						"aria-label": "Ungroup selection",
						onClick: T,
						children: [/* @__PURE__ */ B(M, {
							icon: e,
							size: 18,
							strokeWidth: 1.75
						}), /* @__PURE__ */ B("span", {
							className: "text-[13px] font-medium",
							children: "Ungroup"
						})]
					}), /* @__PURE__ */ B(ar, {})] }) : null,
					/* @__PURE__ */ B("button", {
						type: "button",
						className: or(!1),
						title: "Duplicate",
						"aria-label": "Duplicate",
						onClick: s,
						children: /* @__PURE__ */ B(M, {
							icon: be,
							size: 18,
							strokeWidth: 1.75
						})
					}),
					/* @__PURE__ */ B("button", {
						type: "button",
						className: or(!1),
						title: "Lock",
						"aria-label": "Lock",
						"aria-pressed": !1,
						onClick: c,
						children: /* @__PURE__ */ B(M, {
							icon: a,
							size: 18,
							strokeWidth: 1.75
						})
					}),
					/* @__PURE__ */ B("button", {
						type: "button",
						className: or(!1),
						title: "Delete",
						"aria-label": "Delete",
						onClick: l,
						children: /* @__PURE__ */ B(M, {
							icon: et,
							size: 18,
							strokeWidth: 1.75
						})
					}),
					/* @__PURE__ */ B(ar, {}),
					/* @__PURE__ */ V("div", {
						className: "relative flex items-center pr-1",
						children: [/* @__PURE__ */ B("button", {
							type: "button",
							className: or(ee),
							title: "More options",
							"aria-label": "More options",
							"aria-expanded": ee,
							"aria-haspopup": "menu",
							onClick: () => {
								D((e) => !e), k(!1), j(!1), te(!1);
							},
							children: /* @__PURE__ */ B(M, {
								icon: At,
								size: 18,
								strokeWidth: 1.75
							})
						}), ee ? /* @__PURE__ */ V("div", {
							ref: P,
							role: "menu",
							className: ["absolute left-0 top-full z-[60] mt-1.5 min-w-[11rem] py-1", cr].join(" "),
							style: { transform: F.x !== 0 || F.y !== 0 ? `translate(${F.x}px, ${F.y}px)` : void 0 },
							children: [
								/* @__PURE__ */ V("button", {
									type: "button",
									role: "menuitem",
									className: "flex w-full items-center gap-2 px-3 py-2 text-left text-[13px] font-medium text-neutral-800 hover:bg-black/[0.05]",
									onClick: () => {
										u(), D(!1);
									},
									children: [/* @__PURE__ */ B(M, {
										icon: ot,
										size: 18,
										strokeWidth: 1.75,
										className: "shrink-0 text-neutral-600"
									}), "Copy"]
								}),
								/* @__PURE__ */ V("button", {
									type: "button",
									role: "menuitem",
									className: "flex w-full items-center gap-2 px-3 py-2 text-left text-[13px] font-medium text-neutral-800 hover:bg-black/[0.05]",
									onClick: () => {
										d(), D(!1);
									},
									children: [/* @__PURE__ */ B(M, {
										icon: Ot,
										size: 18,
										strokeWidth: 1.75,
										className: "shrink-0 text-neutral-600"
									}), "Paste"]
								}),
								/* @__PURE__ */ B("div", {
									className: "my-1 h-px bg-black/[0.06]",
									"aria-hidden": !0
								}),
								h ? /* @__PURE__ */ V("div", {
									className: "relative w-full shrink-0",
									children: [/* @__PURE__ */ V("button", {
										type: "button",
										className: "flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-[13px] font-medium text-neutral-800 hover:bg-black/[0.05]",
										"aria-expanded": A,
										onClick: () => {
											j((e) => !e), k(!1), te(!1);
										},
										children: [/* @__PURE__ */ V("span", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ B(M, {
												icon: tt,
												size: 18,
												strokeWidth: 1.75,
												className: "shrink-0 text-neutral-600"
											}), "Align elements"]
										}), /* @__PURE__ */ B(M, {
											icon: Ge,
											size: 14,
											strokeWidth: 1.75,
											className: `shrink-0 transition-transform ${A ? "rotate-180" : ""}`
										})]
									}), A ? /* @__PURE__ */ V("div", {
										ref: re,
										role: "menu",
										className: ["absolute left-full top-0 z-[61] ml-1.5 min-w-[10.5rem] py-1", lr].join(" "),
										style: { transform: oe.x !== 0 || oe.y !== 0 ? `translate(${oe.x}px, ${oe.y}px)` : void 0 },
										children: [
											/* @__PURE__ */ V("button", {
												type: "button",
												role: "menuitem",
												className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] text-neutral-800 hover:bg-black/[0.05]",
												onClick: () => {
													x("left"), j(!1), D(!1);
												},
												children: [/* @__PURE__ */ B(M, {
													icon: Te,
													size: 16,
													strokeWidth: 1.75,
													className: "text-neutral-600"
												}), "Left"]
											}),
											/* @__PURE__ */ V("button", {
												type: "button",
												role: "menuitem",
												className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] text-neutral-800 hover:bg-black/[0.05]",
												onClick: () => {
													x("centerH"), j(!1), D(!1);
												},
												children: [/* @__PURE__ */ B(M, {
													icon: mt,
													size: 16,
													strokeWidth: 1.75,
													className: "text-neutral-600"
												}), "Center"]
											}),
											/* @__PURE__ */ V("button", {
												type: "button",
												role: "menuitem",
												className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] text-neutral-800 hover:bg-black/[0.05]",
												onClick: () => {
													x("right"), j(!1), D(!1);
												},
												children: [/* @__PURE__ */ B(M, {
													icon: De,
													size: 16,
													strokeWidth: 1.75,
													className: "text-neutral-600"
												}), "Right"]
											}),
											/* @__PURE__ */ B("div", {
												className: "my-1 h-px bg-black/[0.06]",
												"aria-hidden": !0
											}),
											/* @__PURE__ */ V("button", {
												type: "button",
												role: "menuitem",
												className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] text-neutral-800 hover:bg-black/[0.05]",
												onClick: () => {
													x("top"), j(!1), D(!1);
												},
												children: [/* @__PURE__ */ B(M, {
													icon: me,
													size: 16,
													strokeWidth: 1.75,
													className: "text-neutral-600"
												}), "Top"]
											}),
											/* @__PURE__ */ V("button", {
												type: "button",
												role: "menuitem",
												className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] text-neutral-800 hover:bg-black/[0.05]",
												onClick: () => {
													x("centerV"), j(!1), D(!1);
												},
												children: [/* @__PURE__ */ B(M, {
													icon: Se,
													size: 16,
													strokeWidth: 1.75,
													className: "text-neutral-600"
												}), "Middle"]
											}),
											/* @__PURE__ */ V("button", {
												type: "button",
												role: "menuitem",
												className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] text-neutral-800 hover:bg-black/[0.05]",
												onClick: () => {
													x("bottom"), j(!1), D(!1);
												},
												children: [/* @__PURE__ */ B(M, {
													icon: St,
													size: 16,
													strokeWidth: 1.75,
													className: "text-neutral-600"
												}), "Bottom"]
											})
										]
									}) : null]
								}) : null,
								_ ? /* @__PURE__ */ V("div", {
									className: "relative w-full shrink-0",
									children: [/* @__PURE__ */ V("button", {
										type: "button",
										className: "flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-[13px] font-medium text-neutral-800 hover:bg-black/[0.05]",
										"aria-expanded": N,
										onClick: () => {
											te((e) => !e), j(!1), k(!1);
										},
										children: [/* @__PURE__ */ V("span", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ B(M, {
												icon: t,
												size: 18,
												strokeWidth: 1.75,
												className: "shrink-0 text-neutral-600"
											}), "Spacing"]
										}), /* @__PURE__ */ B(M, {
											icon: Ge,
											size: 14,
											strokeWidth: 1.75,
											className: `shrink-0 transition-transform ${N ? "rotate-180" : ""}`
										})]
									}), N ? /* @__PURE__ */ V("div", {
										ref: ae,
										role: "group",
										"aria-label": "Group spacing",
										className: ["absolute left-full top-0 z-[61] ml-1.5 w-[13rem] py-1", lr].join(" "),
										style: { transform: de.x !== 0 || de.y !== 0 ? `translate(${de.x}px, ${de.y}px)` : void 0 },
										children: [
											/* @__PURE__ */ V("button", {
												type: "button",
												disabled: !v,
												className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] text-neutral-800 hover:bg-black/[0.05] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent",
												onClick: () => {
													C("horizontal");
												},
												children: [/* @__PURE__ */ B(M, {
													icon: t,
													size: 16,
													strokeWidth: 1.75,
													className: "text-neutral-600"
												}), "Distribute horizontally"]
											}),
											/* @__PURE__ */ V("button", {
												type: "button",
												disabled: !v,
												className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] text-neutral-800 hover:bg-black/[0.05] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent",
												onClick: () => {
													C("vertical");
												},
												children: [/* @__PURE__ */ B(M, {
													icon: le,
													size: 16,
													strokeWidth: 1.75,
													className: "text-neutral-600"
												}), "Distribute vertically"]
											}),
											/* @__PURE__ */ B("div", {
												className: "my-1 h-px bg-black/[0.06]",
												"aria-hidden": !0
											}),
											/* @__PURE__ */ B(Wo, {
												axis: "horizontal",
												icon: /* @__PURE__ */ B(M, {
													icon: t,
													size: 15,
													strokeWidth: 1.75
												}),
												value: y?.horizontal ?? null,
												onChange: (e) => w("horizontal", e)
											}),
											/* @__PURE__ */ B(Wo, {
												axis: "vertical",
												icon: /* @__PURE__ */ B(M, {
													icon: le,
													size: 15,
													strokeWidth: 1.75
												}),
												value: y?.vertical ?? null,
												onChange: (e) => w("vertical", e)
											})
										]
									}) : null]
								}) : null,
								/* @__PURE__ */ V("div", {
									className: "relative w-full shrink-0",
									children: [/* @__PURE__ */ V("button", {
										type: "button",
										className: "flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-[13px] font-medium text-neutral-800 hover:bg-black/[0.05]",
										"aria-expanded": O,
										onClick: () => {
											k((e) => !e), j(!1), te(!1);
										},
										children: [/* @__PURE__ */ B("span", { children: "Align to page" }), /* @__PURE__ */ B(M, {
											icon: Ge,
											size: 14,
											strokeWidth: 1.75,
											className: `shrink-0 transition-transform ${O ? "rotate-180" : ""}`
										})]
									}), O ? /* @__PURE__ */ V("div", {
										ref: ie,
										role: "menu",
										className: ["absolute left-full top-0 z-[61] ml-1.5 min-w-[11rem] py-1", lr].join(" "),
										style: { transform: ce.x !== 0 || ce.y !== 0 ? `translate(${ce.x}px, ${ce.y}px)` : void 0 },
										children: [
											/* @__PURE__ */ V("button", {
												type: "button",
												role: "menuitem",
												disabled: p.left,
												className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] text-neutral-800 hover:bg-black/[0.05] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent",
												onClick: () => {
													f("left"), k(!1), D(!1);
												},
												children: [/* @__PURE__ */ B(M, {
													icon: Te,
													size: 16,
													strokeWidth: 1.75,
													className: "text-neutral-600"
												}), "Left"]
											}),
											/* @__PURE__ */ V("button", {
												type: "button",
												role: "menuitem",
												disabled: p.centerH,
												className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] text-neutral-800 hover:bg-black/[0.05] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent",
												onClick: () => {
													f("centerH"), k(!1), D(!1);
												},
												children: [/* @__PURE__ */ B(M, {
													icon: mt,
													size: 16,
													strokeWidth: 1.75,
													className: "text-neutral-600"
												}), "Center horizontally"]
											}),
											/* @__PURE__ */ V("button", {
												type: "button",
												role: "menuitem",
												disabled: p.right,
												className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] text-neutral-800 hover:bg-black/[0.05] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent",
												onClick: () => {
													f("right"), k(!1), D(!1);
												},
												children: [/* @__PURE__ */ B(M, {
													icon: De,
													size: 16,
													strokeWidth: 1.75,
													className: "text-neutral-600"
												}), "Right"]
											}),
											/* @__PURE__ */ V("button", {
												type: "button",
												role: "menuitem",
												disabled: p.top,
												className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] text-neutral-800 hover:bg-black/[0.05] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent",
												onClick: () => {
													f("top"), k(!1), D(!1);
												},
												children: [/* @__PURE__ */ B(M, {
													icon: me,
													size: 16,
													strokeWidth: 1.75,
													className: "text-neutral-600"
												}), "Top"]
											}),
											/* @__PURE__ */ V("button", {
												type: "button",
												role: "menuitem",
												disabled: p.centerV,
												className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] text-neutral-800 hover:bg-black/[0.05] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent",
												onClick: () => {
													f("centerV"), k(!1), D(!1);
												},
												children: [/* @__PURE__ */ B(M, {
													icon: Se,
													size: 16,
													strokeWidth: 1.75,
													className: "text-neutral-600"
												}), "Center vertically"]
											}),
											/* @__PURE__ */ V("button", {
												type: "button",
												role: "menuitem",
												disabled: p.bottom,
												className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] text-neutral-800 hover:bg-black/[0.05] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent",
												onClick: () => {
													f("bottom"), k(!1), D(!1);
												},
												children: [/* @__PURE__ */ B(M, {
													icon: St,
													size: 16,
													strokeWidth: 1.75,
													className: "text-neutral-600"
												}), "Bottom"]
											})
										]
									}) : null]
								})
							]
						}) : null]
					})
				] })
			})
		})
	});
}), Ko = Ft(null);
function qo({ children: e, value: t }) {
	return /* @__PURE__ */ B(Ko.Provider, {
		value: t,
		children: e
	});
}
function Jo() {
	let e = W(Ko);
	if (!e) throw Error("useCanvasStageContext must be used within CanvasStageProvider");
	return e;
}
//#endregion
//#region src/components/scene-editor/object-view.tsx
function Yo(e) {
	let t = [], n = Di(e.blurPct);
	if (n > 0 && t.push(`blur(${n}px)`), e.shadow) {
		let n = Math.max(0, Math.min(100, e.shadow.opacityPct)) / 100, r = e.shadow.colorHex.replace("#", ""), i = Number.parseInt(r.slice(0, 2), 16) || 0, a = Number.parseInt(r.slice(2, 4), 16) || 0, o = Number.parseInt(r.slice(4, 6), 16) || 0;
		t.push(`drop-shadow(${e.shadow.offsetX}px ${e.shadow.offsetY}px ${e.shadow.blur}px rgba(${i},${a},${o},${n}))`);
	}
	return t.length > 0 ? t.join(" ") : void 0;
}
function Xo(e) {
	let t = e * Math.PI / 180, n = Math.sin(t), r = -Math.cos(t), i = n === 0 ? Infinity : .5 / Math.abs(n), a = r === 0 ? Infinity : .5 / Math.abs(r), o = Math.min(i, a);
	return {
		x1: `${(.5 - n * o) * 100}%`,
		y1: `${(.5 - r * o) * 100}%`,
		x2: `${(.5 + n * o) * 100}%`,
		y2: `${(.5 + r * o) * 100}%`
	};
}
function Zo(e, t) {
	if (t.type !== "gradient") return null;
	let n = Xo(t.angle);
	return /* @__PURE__ */ B("linearGradient", {
		id: e,
		x1: n.x1,
		y1: n.y1,
		x2: n.x2,
		y2: n.y2,
		children: t.stops.map((t) => /* @__PURE__ */ B("stop", {
			offset: `${t.offset * 100}%`,
			stopColor: t.color
		}, `${e}-${t.offset}-${t.color}`))
	});
}
function Qo(e, t) {
	return t.type === "solid" ? t.color : `url(#${e})`;
}
function $o(e) {
	return {
		position: "absolute",
		left: e.x,
		top: e.y,
		width: e.width,
		height: e.height,
		transform: `rotate(${e.rotation}deg)`,
		transformOrigin: "center center",
		opacity: e.opacity,
		filter: Yo(e),
		overflow: "visible"
	};
}
function es({ doc: e, width: t, height: n }) {
	let r = Y(null);
	return zt(() => {
		let i = r.current;
		if (!i) return;
		let a = Math.min(2, window.devicePixelRatio || 1);
		i.width = Math.max(1, Math.round(t * a)), i.height = Math.max(1, Math.round(n * a)), i.style.width = `${t}px`, i.style.height = `${n}px`;
		let o = i.getContext("2d");
		o && (o.setTransform(a, 0, 0, a, 0, 0), o.clearRect(0, 0, t, n), e && Qi(o, e, t, n, { fillBackground: !1 }));
	}, [
		e,
		t,
		n
	]), /* @__PURE__ */ B("canvas", {
		ref: r,
		className: "block h-full w-full rounded-xl",
		"aria-hidden": !0
	});
}
function ts({ obj: e, vectorBoardDocs: t, textEditingId: n, textDraft: r, onObjectPointerDown: i, onObjectHoverChange: a, onTextDoubleClick: o, onTextDraftChange: s, onTextDraftCommit: c }) {
	let l = e.type === "text" && n === e.id, u = $o(e), d = e.id.replace(/[^a-zA-Z0-9_-]/g, ""), f = {
		onPointerMove: () => a(e.id, !0),
		onPointerOver: () => a(e.id, !0),
		onPointerEnter: () => a(e.id, !0),
		onPointerLeave: () => a(e.id, !1)
	};
	if (e.type === "group") return /* @__PURE__ */ B("div", {
		style: u,
		"data-avnac-scene-object": !0,
		onPointerDown: (t) => i(t, e),
		...f,
		title: e.locked ? "Locked group" : void 0,
		children: e.children.map((e) => /* @__PURE__ */ B("div", {
			style: { pointerEvents: "none" },
			children: /* @__PURE__ */ B(ts, {
				obj: e,
				vectorBoardDocs: t,
				textEditingId: n,
				textDraft: r,
				onObjectPointerDown: i,
				onObjectHoverChange: a,
				onTextDoubleClick: o,
				onTextDraftChange: s,
				onTextDraftCommit: c
			})
		}, e.id))
	});
	if (e.type === "image") {
		let t = e.width / Math.max(1, e.crop.width), n = e.height / Math.max(1, e.crop.height), r = e.crop.rotation || 0, a = e.crop.x + e.crop.width / 2, o = e.crop.y + e.crop.height / 2;
		return /* @__PURE__ */ B("div", {
			style: u,
			"data-avnac-scene-object": !0,
			onPointerDown: (t) => i(t, e),
			...f,
			title: e.locked ? "Locked image" : void 0,
			children: /* @__PURE__ */ B("div", {
				className: "relative h-full w-full overflow-hidden",
				style: { borderRadius: e.cornerRadius },
				children: /* @__PURE__ */ B("img", {
					src: e.src,
					alt: "",
					draggable: !1,
					className: "pointer-events-none absolute select-none",
					style: {
						left: e.width / 2 - a * t,
						top: e.height / 2 - o * n,
						width: e.naturalWidth * t,
						height: e.naturalHeight * n,
						maxWidth: "none",
						transform: `rotate(${r}deg)`,
						transformOrigin: `${a * t}px ${o * n}px`
					}
				})
			})
		});
	}
	if (e.type === "vector-board") return /* @__PURE__ */ B("div", {
		style: u,
		"data-avnac-scene-object": !0,
		onPointerDown: (t) => i(t, e),
		...f,
		title: e.locked ? "Locked vector board" : void 0,
		children: /* @__PURE__ */ B(es, {
			doc: t[e.boardId],
			width: e.width,
			height: e.height
		})
	});
	if (e.type === "text") {
		let t = Gi(e), n = l ? Gi({
			...e,
			text: r
		}) : t, a = xi(e), p = Si(e), m = e.fontSize * a, h = Wi(e), g = Math.max(t.height, e.height), _ = `${d}-text-fill`, v = `${d}-text-stroke`, y = `${d}-text-stroke-mask`, b = Math.ceil(Math.max(2, e.strokeWidth * 2)), x = e.textAlign === "center" ? "middle" : e.textAlign === "right" ? "end" : "start", S = e.textAlign === "center" ? e.width / 2 : e.textAlign === "right" ? e.width : 0;
		return /* @__PURE__ */ B("div", {
			style: l ? {
				...u,
				height: Math.max(e.height, n.height)
			} : u,
			"data-avnac-scene-object": !0,
			onPointerDown: l ? void 0 : (t) => i(t, e),
			onDoubleClick: () => o(e),
			...f,
			title: e.locked ? "Locked text" : void 0,
			children: l ? /* @__PURE__ */ B("textarea", {
				value: r,
				onChange: (e) => s(e.target.value),
				onBlur: c,
				onPointerDown: (e) => e.stopPropagation(),
				onDoubleClick: (e) => e.stopPropagation(),
				autoFocus: !0,
				spellCheck: !1,
				className: "h-full w-full resize-none overflow-hidden border-0 bg-transparent p-0 outline-none select-text",
				style: {
					fontFamily: `"${e.fontFamily}", sans-serif`,
					fontSize: e.fontSize,
					fontStyle: e.fontStyle,
					fontWeight: String(e.fontWeight),
					textAlign: e.textAlign,
					letterSpacing: p,
					color: e.fill.type === "solid" ? e.fill.color : "#171717",
					lineHeight: String(a),
					boxSizing: "border-box"
				}
			}) : /* @__PURE__ */ V("svg", {
				className: "pointer-events-none block",
				width: e.width,
				height: g,
				viewBox: `0 0 ${e.width} ${g}`,
				overflow: "visible",
				children: [/* @__PURE__ */ V("defs", { children: [
					Zo(_, e.fill),
					Zo(v, e.stroke),
					e.strokeWidth > 0 ? /* @__PURE__ */ V("mask", {
						id: y,
						maskUnits: "userSpaceOnUse",
						x: -b,
						y: -b,
						width: e.width + b * 2,
						height: g + b * 2,
						children: [/* @__PURE__ */ B("rect", {
							x: -b,
							y: -b,
							width: e.width + b * 2,
							height: g + b * 2,
							fill: "white"
						}), t.lines.map((t, n) => /* @__PURE__ */ B("text", {
							x: S,
							y: h + n * m,
							xmlSpace: "preserve",
							fill: "black",
							fontFamily: e.fontFamily,
							fontSize: e.fontSize,
							fontStyle: e.fontStyle,
							fontWeight: String(e.fontWeight),
							letterSpacing: p,
							textAnchor: x,
							children: t
						}, `${e.id}-stroke-mask-${n}`))]
					}) : null
				] }), t.lines.map((t, n) => {
					let r = h + n * m, i = Ci(e, t), a = e.textAlign === "center" ? S - i / 2 : e.textAlign === "right" ? S - i : S;
					return /* @__PURE__ */ V("g", { children: [
						e.strokeWidth > 0 ? /* @__PURE__ */ B("text", {
							x: S,
							y: r,
							xmlSpace: "preserve",
							fill: "none",
							stroke: Qo(v, e.stroke),
							strokeWidth: e.strokeWidth * 2,
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeMiterlimit: 2,
							mask: `url(#${y})`,
							fontFamily: e.fontFamily,
							fontSize: e.fontSize,
							fontStyle: e.fontStyle,
							fontWeight: String(e.fontWeight),
							letterSpacing: p,
							textAnchor: x,
							children: t
						}) : null,
						/* @__PURE__ */ B("text", {
							x: S,
							y: r,
							xmlSpace: "preserve",
							fill: Qo(_, e.fill),
							fontFamily: e.fontFamily,
							fontSize: e.fontSize,
							fontStyle: e.fontStyle,
							fontWeight: String(e.fontWeight),
							letterSpacing: p,
							textAnchor: x,
							children: t
						}),
						e.underline && t.length > 0 ? /* @__PURE__ */ B("line", {
							x1: a,
							x2: a + i,
							y1: r + e.fontSize * .12,
							y2: r + e.fontSize * .12,
							stroke: Qo(_, e.fill),
							strokeWidth: Math.max(1, e.fontSize * .06),
							strokeLinecap: "round"
						}) : null
					] }, `${e.id}-line-${n}`);
				})]
			})
		});
	}
	if (e.type === "icon") {
		let t = `${d}-icon-fill`, n = ue(e.fill, t);
		return /* @__PURE__ */ B("div", {
			style: u,
			"data-avnac-scene-object": !0,
			onPointerDown: (t) => i(t, e),
			...f,
			title: e.locked ? "Locked icon" : void 0,
			children: /* @__PURE__ */ V("svg", {
				width: e.width,
				height: e.height,
				viewBox: "0 0 24 24",
				preserveAspectRatio: "xMidYMid meet",
				fill: "none",
				style: {
					display: "block",
					overflow: "visible"
				},
				children: [/* @__PURE__ */ B("defs", { children: Zo(t, e.fill) }), e.svg.map(([t, r], i) => It(t, {
					...at(r, n, e.strokeWidth),
					key: r.key ?? `${e.id}-icon-${i}`
				}))]
			})
		});
	}
	let p = `${d}-fill`, m = `${d}-stroke`, h = "strokeWidth" in e ? e.strokeWidth : 0, g = {
		display: "block",
		overflow: "visible"
	};
	if (e.type === "rect") {
		let t = h > 0 ? h / 2 : 0;
		return /* @__PURE__ */ B("div", {
			style: u,
			"data-avnac-scene-object": !0,
			onPointerDown: (t) => i(t, e),
			...f,
			title: e.locked ? "Locked shape" : void 0,
			children: /* @__PURE__ */ V("svg", {
				width: e.width,
				height: e.height,
				style: g,
				children: [/* @__PURE__ */ V("defs", { children: [Zo(p, e.fill), Zo(m, e.stroke)] }), /* @__PURE__ */ B("rect", {
					x: t,
					y: t,
					width: Math.max(1, e.width - t * 2),
					height: Math.max(1, e.height - t * 2),
					rx: Math.min(e.cornerRadius, Math.min(e.width, e.height) / 2),
					fill: Qo(p, e.fill),
					stroke: h > 0 ? Qo(m, e.stroke) : "transparent",
					strokeWidth: h
				})]
			})
		});
	}
	if (e.type === "ellipse") {
		let t = Math.max(1, e.width / 2 - h / 2), n = Math.max(1, e.height / 2 - h / 2);
		return /* @__PURE__ */ B("div", {
			style: u,
			"data-avnac-scene-object": !0,
			onPointerDown: (t) => i(t, e),
			...f,
			children: /* @__PURE__ */ V("svg", {
				width: e.width,
				height: e.height,
				style: g,
				children: [/* @__PURE__ */ V("defs", { children: [Zo(p, e.fill), Zo(m, e.stroke)] }), /* @__PURE__ */ B("ellipse", {
					cx: e.width / 2,
					cy: e.height / 2,
					rx: t,
					ry: n,
					fill: Qo(p, e.fill),
					stroke: h > 0 ? Qo(m, e.stroke) : "transparent",
					strokeWidth: h
				})]
			})
		});
	}
	if (e.type === "polygon" || e.type === "star") {
		let t = e.type === "polygon" ? Array.from({ length: Math.max(3, e.sides) }, (t, n) => {
			let r = -Math.PI / 2 + n / Math.max(3, e.sides) * Math.PI * 2;
			return [e.width / 2 + Math.cos(r) * e.width / 2, e.height / 2 + Math.sin(r) * e.height / 2];
		}) : Array.from({ length: Math.max(4, e.points) * 2 }, (t, n) => {
			let r = -Math.PI / 2 + n / (Math.max(4, e.points) * 2) * Math.PI * 2, i = n % 2 == 0 ? 1 : .45;
			return [e.width / 2 + Math.cos(r) * e.width / 2 * i, e.height / 2 + Math.sin(r) * e.height / 2 * i];
		});
		return /* @__PURE__ */ B("div", {
			style: u,
			"data-avnac-scene-object": !0,
			onPointerDown: (t) => i(t, e),
			...f,
			children: /* @__PURE__ */ V("svg", {
				width: e.width,
				height: e.height,
				style: g,
				children: [/* @__PURE__ */ V("defs", { children: [Zo(p, e.fill), Zo(m, e.stroke)] }), /* @__PURE__ */ B("polygon", {
					points: t.map(([e, t]) => `${e},${t}`).join(" "),
					fill: Qo(p, e.fill),
					stroke: h > 0 ? Qo(m, e.stroke) : "transparent",
					strokeWidth: h,
					strokeLinejoin: "round"
				})]
			})
		});
	}
	if (e.type === "line") return /* @__PURE__ */ B("div", {
		style: u,
		"data-avnac-scene-object": !0,
		onPointerDown: (t) => i(t, e),
		...f,
		children: /* @__PURE__ */ V("svg", {
			width: e.width,
			height: e.height,
			style: g,
			children: [/* @__PURE__ */ B("defs", { children: Zo(m, e.stroke) }), /* @__PURE__ */ B("line", {
				x1: e.strokeWidth / 2,
				y1: e.height / 2,
				x2: e.width - e.strokeWidth / 2,
				y2: e.height / 2,
				stroke: Qo(m, e.stroke),
				strokeWidth: e.strokeWidth,
				strokeLinecap: e.roundedEnds ? "round" : "square",
				strokeDasharray: e.lineStyle === "dashed" ? `${e.strokeWidth * 3} ${e.strokeWidth * 2}` : e.lineStyle === "dotted" ? `${e.strokeWidth * .5} ${e.strokeWidth * 1.8}` : void 0
			})]
		})
	});
	let _ = e, v = _.height / 2, y = _.width - _.strokeWidth * .6, b = _.strokeWidth / 2, x = Math.max(b + 1, y - _.strokeWidth * 3.2 * _.headSize), S = b + (x - b) * _.curveT, C = v - _.curveBulge, w = Math.max(_.strokeWidth * 2, _.strokeWidth * 4 * _.headSize), T = Math.max(_.strokeWidth * 1.8, _.strokeWidth * 3 * _.headSize), E = _.pathType === "curved" ? `M ${b} ${v} Q ${S} ${C} ${x} ${v}` : `M ${b} ${v} L ${x} ${v}`;
	return /* @__PURE__ */ B("div", {
		style: u,
		"data-avnac-scene-object": !0,
		onPointerDown: (t) => i(t, e),
		...f,
		children: /* @__PURE__ */ V("svg", {
			width: _.width,
			height: _.height,
			style: g,
			children: [
				/* @__PURE__ */ B("defs", { children: Zo(m, _.stroke) }),
				/* @__PURE__ */ B("path", {
					d: E,
					fill: "none",
					stroke: Qo(m, _.stroke),
					strokeWidth: _.strokeWidth,
					strokeLinecap: _.roundedEnds ? "round" : "square",
					strokeLinejoin: "round",
					strokeDasharray: _.lineStyle === "dashed" ? `${_.strokeWidth * 3} ${_.strokeWidth * 2}` : _.lineStyle === "dotted" ? `${_.strokeWidth * .5} ${_.strokeWidth * 1.8}` : void 0
				}),
				/* @__PURE__ */ B("polygon", {
					points: `${y},${v} ${y - w},${v - T / 2} ${y - w * .82},${v} ${y - w},${v + T / 2}`,
					fill: Qo(m, _.stroke)
				})
			]
		})
	});
}
//#endregion
//#region src/components/scene-editor/selection-overlays.tsx
var ns = "var(--accent)";
function rs({ object: e, phase: t }) {
	return /* @__PURE__ */ B("div", {
		className: "pointer-events-none absolute z-[20]",
		style: {
			left: e.x,
			top: e.y,
			width: e.width,
			height: e.height,
			transform: `rotate(${e.rotation}deg)`,
			transformOrigin: "center center"
		},
		children: /* @__PURE__ */ V("div", {
			className: "avnac-remove-bg-overlay absolute inset-0 overflow-hidden",
			"data-phase": t,
			style: { borderRadius: e.cornerRadius },
			children: [
				/* @__PURE__ */ B("div", { className: "avnac-remove-bg-overlay__wash" }),
				/* @__PURE__ */ B("div", { className: "avnac-remove-bg-overlay__beam" }),
				/* @__PURE__ */ B("div", { className: "avnac-remove-bg-overlay__edge" })
			]
		})
	});
}
function is({ object: e, scale: t, onHandlePointerDown: n, onRotatePointerDown: r }) {
	let i = Math.max(t, .01), a = 1.5 / i, o = 12 / i, s = 22 / i, c = 8 / i, l = 24 / i, u = 32 / i, d = 24 / i, f = 28 / i, p = 16 / i, m = 30 / i, h = "block border border-[#aeb0bd] bg-white shadow-[0_1px_3px_rgba(15,23,42,0.18),0_0_0_1px_rgba(255,255,255,0.95)] transition-[transform,border-color,box-shadow] duration-150 group-hover:scale-110 group-hover:border-[#ff9f6e] group-hover:shadow-[0_2px_8px_rgba(15,23,42,0.22),0_0_0_3px_rgba(255,159,110,0.18)]";
	return /* @__PURE__ */ V("div", {
		className: "pointer-events-none absolute z-[22]",
		style: {
			left: e.x,
			top: e.y,
			width: e.width,
			height: e.height,
			transform: `rotate(${e.rotation}deg)`,
			transformOrigin: "center center"
		},
		children: [
			/* @__PURE__ */ B("div", {
				className: "absolute inset-0 rounded-[6px]",
				style: {
					border: `${a}px solid ${ns}`,
					boxShadow: `0 0 0 ${1 / i}px rgba(255,255,255,0.9), 0 0 0 ${2.5 / i}px color-mix(in srgb, ${ns} 16%, transparent)`
				}
			}),
			Ua.map((e) => {
				let t = e === "e" || e === "w", r = e === "n" || e === "s", i = t || r, a = t ? u : i ? d : l, f = r ? u : i ? d : l, p = t ? s : r ? c : o, m = r ? s : t ? c : o, g = -a / 2, _ = -f / 2;
				return /* @__PURE__ */ B("button", {
					type: "button",
					tabIndex: -1,
					className: "group pointer-events-auto absolute z-[2] flex items-center justify-center rounded-full bg-transparent p-0 outline-none touch-none",
					style: {
						...{
							nw: {
								left: g,
								top: _
							},
							n: {
								left: "50%",
								top: _,
								marginLeft: g
							},
							ne: {
								right: g,
								top: _
							},
							e: {
								right: g,
								top: "50%",
								marginTop: _
							},
							se: {
								right: g,
								bottom: _
							},
							s: {
								left: "50%",
								bottom: _,
								marginLeft: g
							},
							sw: {
								left: g,
								bottom: _
							},
							w: {
								left: g,
								top: "50%",
								marginTop: _
							}
						}[e],
						width: a,
						height: f,
						cursor: Ca(e)
					},
					onPointerDown: (t) => n(t, e),
					children: /* @__PURE__ */ B("span", {
						"aria-hidden": "true",
						className: h,
						style: {
							width: p,
							height: m,
							borderRadius: i ? `${c}px` : "9999px"
						}
					})
				}, e);
			}),
			/* @__PURE__ */ B("div", {
				"aria-hidden": "true",
				className: "absolute left-1/2 -translate-x-1/2 rounded-full",
				style: {
					bottom: -m,
					width: Math.max(1 / i, a),
					height: m,
					background: ns,
					boxShadow: `0 0 0 ${1 / i}px rgba(255,255,255,0.85)`
				}
			}),
			/* @__PURE__ */ B("button", {
				type: "button",
				tabIndex: -1,
				className: "group pointer-events-auto absolute left-1/2 z-[2] flex -translate-x-1/2 items-center justify-center rounded-full bg-transparent p-0 outline-none touch-none",
				style: {
					bottom: -(m + f / 2),
					width: f,
					height: f,
					cursor: "grab"
				},
				onPointerDown: r,
				children: /* @__PURE__ */ B("span", {
					"aria-hidden": "true",
					className: h,
					style: {
						width: p,
						height: p,
						borderRadius: "9999px"
					}
				})
			})
		]
	});
}
function as({ bounds: e, scale: t, dashed: n = !1, fill: r = !1 }) {
	let i = Math.max(t, .01), a = 1.5 / i;
	return /* @__PURE__ */ B("div", {
		className: "pointer-events-none absolute z-[21] rounded-[6px]",
		style: {
			left: e.left,
			top: e.top,
			width: e.width,
			height: e.height,
			border: `${a}px ${n ? "dashed" : "solid"} ${ns}`,
			background: r ? `color-mix(in srgb, ${ns} 12%, transparent)` : "transparent",
			boxShadow: n ? void 0 : `0 0 0 ${1 / i}px color-mix(in srgb, ${ns} 18%, transparent)`
		}
	});
}
function os({ guides: e, scale: t, artboardW: n, artboardH: r }) {
	if (e.length === 0) return null;
	let i = 1 / Math.max(t, .01);
	return /* @__PURE__ */ B(jt, { children: e.map((e, t) => e.axis === "v" ? /* @__PURE__ */ B("div", {
		className: "pointer-events-none absolute z-[19] bg-[var(--accent)]",
		style: {
			left: e.pos - i / 2,
			top: 0,
			width: i,
			height: r
		}
	}, `snap-v-${e.pos}-${t}`) : /* @__PURE__ */ B("div", {
		className: "pointer-events-none absolute z-[19] bg-[var(--accent)]",
		style: {
			left: 0,
			top: e.pos - i / 2,
			width: n,
			height: i
		}
	}, `snap-h-${e.pos}-${t}`)) });
}
//#endregion
//#region src/lib/avnac-vector-boards-storage.ts
var ss = (e) => `avnac-vector-boards:${e}`, cs = (e) => `avnac-vector-board-docs:${e}`;
function ls(e) {
	try {
		let t = localStorage.getItem(ss(e));
		if (!t) return [];
		let n = JSON.parse(t);
		return Array.isArray(n) ? n.map((e) => {
			if (!e || typeof e != "object") return null;
			let t = e, n = typeof t.id == "string" ? t.id : null, r = typeof t.name == "string" ? t.name : null, i = typeof t.createdAt == "number" ? t.createdAt : null;
			return !n || !r || i == null ? null : {
				id: n,
				name: r,
				createdAt: i
			};
		}).filter((e) => e != null) : [];
	} catch {
		return [];
	}
}
function us(e, t) {
	try {
		localStorage.setItem(ss(e), JSON.stringify(t));
	} catch {}
}
function ds(e) {
	try {
		let t = localStorage.getItem(cs(e));
		if (!t) return {};
		let n = JSON.parse(t);
		if (!n || typeof n != "object") return {};
		let r = {};
		for (let [e, t] of Object.entries(n)) !t || typeof t != "object" || (r[e] = Pr(t));
		return r;
	} catch {
		return {};
	}
}
function fs(e, t) {
	try {
		localStorage.setItem(cs(e), JSON.stringify(t));
	} catch {}
}
function ps(e, t) {
	let n = { ...t };
	for (let t of e) n[t.id] || (n[t.id] = Ar());
	return n;
}
//#endregion
//#region src/components/scene-editor/use-vector-board-controls.tsx
var ms = Ft(null);
function hs({ children: e, value: t }) {
	return /* @__PURE__ */ B(ms.Provider, {
		value: t,
		children: e
	});
}
function gs() {
	let e = W(ms);
	if (!e) throw Error("useVectorBoardControlsContext must be used within VectorBoardControlsProvider");
	return e;
}
function _s({ addObjects: e, artboardH: t, artboardW: n, persistId: r, ready: i, setDoc: a }) {
	let [o, s] = X([]), [c, l] = X({}), [u, d] = X(null);
	G(() => {
		let e = r ? ls(r) : [], t = r ? ds(r) : {};
		s(e), l(r ? ps(e, t) : t), d(null);
	}, [r]), G(() => {
		!r || !i || us(r, o);
	}, [
		o,
		r,
		i
	]), G(() => {
		!r || !i || fs(r, c);
	}, [
		c,
		r,
		i
	]);
	let f = U(() => {
		let e = crypto.randomUUID(), t = {
			id: e,
			name: `Vector ${o.length + 1}`,
			createdAt: Date.now()
		};
		s((e) => [...e, t]), l((t) => ({
			...t,
			[e]: Ar()
		})), d(e);
	}, [o.length]), p = U((e) => {
		s((t) => t.filter((t) => t.id !== e)), l((t) => {
			let n = { ...t };
			return delete n[e], n;
		}), a((t) => ({
			...t,
			objects: t.objects.filter((t) => !(t.type === "vector-board" && t.boardId === e))
		})), u === e && d(null);
	}, [a, u]), m = U((e) => {
		d(e);
	}, []), h = U(() => {
		d(null);
	}, []), g = U((e, t) => {
		l((n) => ({
			...n,
			[e]: t
		}));
	}, []), _ = U((r, i, a) => {
		let o = c[r];
		!o || !Lr(o) || e([{
			id: crypto.randomUUID(),
			type: "vector-board",
			x: i ?? n / 2 - 280 / 2,
			y: a ?? t / 2 - 280 / 2,
			width: 280,
			height: 280,
			rotation: 0,
			opacity: 1,
			visible: !0,
			locked: !1,
			blurPct: 0,
			shadow: null,
			boardId: r
		}]);
	}, [
		e,
		t,
		n,
		c
	]);
	return {
		boardDocs: c,
		boards: o,
		closeVectorWorkspace: h,
		createVectorBoard: f,
		deleteVectorBoard: p,
		onVectorBoardDocumentChange: g,
		openVectorBoardWorkspace: m,
		placeActiveVectorBoardAtArtboardCenter: U(() => {
			u && _(u);
		}, [_, u]),
		placeVectorBoard: _,
		vectorWorkspaceId: u,
		vectorWorkspaceName: J(() => o.find((e) => e.id === u)?.name ?? "Vector board", [o, u])
	};
}
//#endregion
//#region src/components/scene-editor/canvas-stage.tsx
var vs = {
	left: !1,
	centerH: !1,
	right: !1,
	top: !1,
	centerV: !1,
	bottom: !1
}, ys = 40, bs = 48;
function xs({ artboardWidth: e, canDeletePage: t, pageId: n, onAddPage: r, onDeletePage: i, onDuplicatePage: a }) {
	return /* @__PURE__ */ V("div", {
		"data-avnac-chrome": !0,
		className: "pointer-events-auto mb-1 flex h-9 items-center justify-end gap-1.5",
		style: { width: e },
		children: [
			/* @__PURE__ */ B(ro, {
				icon: ot,
				label: "Duplicate page",
				size: "md",
				variant: "ghost",
				className: "rounded-lg text-neutral-700 hover:bg-black/[0.05] hover:text-neutral-900",
				onClick: () => a(n)
			}),
			/* @__PURE__ */ B(ro, {
				icon: Ue,
				label: "Add new page",
				size: "md",
				variant: "ghost",
				className: "rounded-lg text-neutral-700 hover:bg-black/[0.05] hover:text-neutral-900",
				onClick: () => r(n)
			}),
			t ? /* @__PURE__ */ B(ro, {
				icon: et,
				label: "Delete page",
				size: "md",
				variant: "ghost",
				className: "rounded-lg text-neutral-700 hover:bg-black/[0.05] hover:text-neutral-900",
				onClick: () => i(n)
			}) : null
		]
	});
}
function Ss() {
	let { actions: e, refs: t, state: n } = Jo(), { activatePage: r, addPage: i, alignElementToArtboard: a, alignSelectedElements: o, commitTextDraft: s, copyElementToClipboard: c, deleteSelection: l, deletePage: u, duplicatePage: d, duplicateElement: f, distributeGroupSpacing: p, groupSelection: m, onArtboardPointerEnter: h, onArtboardPointerLeave: g, onArtboardPointerMove: _, onObjectHoverChange: v, onObjectPointerDown: y, onRotateHandlePointerDown: b, onSelectionHandlePointerDown: x, onTextDoubleClick: S, onTextDraftChange: C, onViewportPointerDown: w, pasteFromClipboard: T, setGroupSpacing: E, toggleElementLock: ee, ungroupSelection: D } = e, { artboardInnerRef: O, artboardOuterRef: k, elementToolbarRef: A, viewportRef: j } = t, { backgroundActive: M, backgroundHovered: N, deletingPageIds: te, editingSelectedText: ne, elementToolbarAlignAlready: re, elementToolbarCanAlignElements: ie, elementToolbarCanDistributeGroupSpacing: ae, elementToolbarCanGroup: F, elementToolbarCanSpaceGroup: oe, elementToolbarCanUngroup: se, elementToolbarGroupSpacingValues: ce, elementToolbarLayout: le, elementToolbarLockedDisplay: ue, hasObjectSelected: de, imageRemovalEffect: fe, marqueeRect: pe, ready: me, scale: he, selectedObjects: ge, selectedSingle: I, selectionBounds: R, snapGuides: _e, textDraft: ve, textEditingId: ye } = n, be = L((e) => e.doc), xe = L((e) => e.selectedIds), Se = L((e) => e.hoveredId), { boardDocs: Ce } = gs(), we = be.pages.length > 0 ? be.pages : [], Te = we.length > 1, Ee = (we.find((e) => e.id === be.activePageId) ?? we[0])?.objects ?? be.objects, De = J(() => Se ? Ee.find((e) => e.id === Se && e.visible) ?? null : null, [Se, Ee]), z = () => {};
	return /* @__PURE__ */ B("div", {
		className: "flex min-h-full w-max min-w-full flex-col items-start px-4 pb-4 pt-4 sm:px-6 sm:pb-6 sm:pt-4",
		children: /* @__PURE__ */ B("div", {
			className: "relative z-0 mx-auto my-auto flex flex-col",
			children: we.map((e) => {
				let t = e.id === be.activePageId, n = te.includes(e.id), L = we[we.length - 1]?.id === e.id, Se = e.artboard.width, Ee = e.artboard.height, Oe = e.objects, ke = Ee * he + ys + (L ? 0 : bs);
				return /* @__PURE__ */ V("div", {
					className: "relative inline-block",
					"data-avnac-page-id": e.id,
					style: {
						height: n ? 0 : ke,
						opacity: +!n,
						overflow: n ? "hidden" : "visible",
						pointerEvents: n ? "none" : void 0,
						transform: n ? "translateX(-72px) scale(0.985)" : "translateY(0) scale(1)",
						transformOrigin: "center left",
						filter: n ? "blur(8px)" : "blur(0px)",
						transition: n ? "height 260ms cubic-bezier(0.22, 1, 0.36, 1), opacity 180ms ease-out, transform 240ms cubic-bezier(0.4, 0, 0.2, 1), filter 220ms cubic-bezier(0.4, 0, 0.2, 1)" : "none",
						willChange: n ? "height, opacity, transform, filter" : void 0
					},
					children: [/* @__PURE__ */ B(xs, {
						artboardWidth: Se * he,
						canDeletePage: Te,
						pageId: e.id,
						onAddPage: i,
						onDeletePage: u,
						onDuplicatePage: d
					}), /* @__PURE__ */ V("div", {
						ref: t ? k : void 0,
						className: "relative rounded-sm",
						style: {
							width: Se * he,
							height: Ee * he,
							lineHeight: 0,
							boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
						},
						onPointerDown: t ? void 0 : (t) => {
							t.button === 0 && r(e.id, { selectBackground: !0 });
						},
						children: [t && me && de && le && !ne ? /* @__PURE__ */ B(Go, {
							ref: A,
							style: {
								left: le.left,
								top: le.top
							},
							placement: le.placement,
							viewportRef: j,
							locked: ue,
							onDuplicate: f,
							onToggleLock: ee,
							onDelete: l,
							onCopy: c,
							onPaste: T,
							onAlign: a,
							alignAlreadySatisfied: re ?? vs,
							canGroup: F,
							canAlignElements: ie,
							canUngroup: se,
							canSpaceGroup: oe,
							canDistributeGroupSpacing: ae,
							groupSpacingValues: ce,
							onGroup: m,
							onAlignElements: o,
							onDistributeGroupSpacing: p,
							onSetGroupSpacing: E,
							onUngroup: D
						}) : null, /* @__PURE__ */ V("div", {
							ref: t ? O : void 0,
							className: "absolute left-0 top-0 select-none overflow-visible rounded-sm bg-white",
							style: {
								width: Se,
								height: Ee,
								transform: `scale(${he})`,
								transformOrigin: "top left",
								background: e.bg.type === "solid" ? e.bg.color : e.bg.css
							},
							onPointerEnter: t ? h : void 0,
							onPointerMove: t ? _ : void 0,
							onPointerDown: t ? w : void 0,
							onPointerLeave: t ? g : void 0,
							children: [/* @__PURE__ */ B("div", {
								className: "absolute inset-0 overflow-hidden rounded-[inherit]",
								children: Oe.filter((e) => e.visible).map((e) => /* @__PURE__ */ B(ts, {
									obj: e,
									vectorBoardDocs: Ce,
									textEditingId: t ? ye : null,
									textDraft: t ? ve : "",
									onObjectPointerDown: t ? y : z,
									onObjectHoverChange: t ? v : z,
									onTextDoubleClick: t ? S : z,
									onTextDraftChange: t ? C : z,
									onTextDraftCommit: t ? s : z
								}, e.id))
							}), t ? /* @__PURE__ */ V(jt, { children: [
								/* @__PURE__ */ B(os, {
									guides: _e,
									scale: he,
									artboardW: Se,
									artboardH: Ee
								}),
								De && xe.length === 0 && ye == null ? /* @__PURE__ */ B(as, {
									bounds: P(De),
									scale: he
								}) : null,
								M || !De && xe.length === 0 && ye == null && N ? /* @__PURE__ */ B(as, {
									bounds: {
										left: 0,
										top: 0,
										width: Se,
										height: Ee
									},
									scale: he
								}) : null,
								ge.length > 1 && R ? /* @__PURE__ */ B(as, {
									bounds: R,
									scale: he
								}) : null,
								fe ? /* @__PURE__ */ B(rs, {
									object: fe.object,
									phase: fe.phase
								}) : null,
								pe && (pe.width > 0 || pe.height > 0) ? /* @__PURE__ */ B(as, {
									bounds: pe,
									scale: he,
									dashed: !0,
									fill: !0
								}) : null,
								I && !I.locked && !ne ? /* @__PURE__ */ B(is, {
									object: I,
									scale: he,
									onHandlePointerDown: x,
									onRotatePointerDown: b
								}) : null
							] }) : null]
						})]
					})]
				}, e.id);
			})
		})
	});
}
//#endregion
//#region src/components/canvas-zoom-slider.tsx
function Cs({ value: e, min: t = 5, max: n = 100, onChange: r, onFitRequest: i, disabled: a }) {
	let o = Math.round(e);
	return /* @__PURE__ */ V("div", {
		className: "flex items-center gap-3 rounded-xl bg-[var(--surface-subtle)] px-3 py-2 sm:bg-white/90 sm:shadow-[0_2px_12px_rgba(0,0,0,0.06)]",
		title: "Drag to zoom. Click the percentage to fit the page in view.",
		children: [/* @__PURE__ */ B(nr, {
			min: t,
			max: n,
			step: 1,
			value: o,
			disabled: a,
			onChange: r,
			"aria-label": "Canvas zoom",
			trackClassName: "w-[9.5rem] sm:w-40"
		}), i ? /* @__PURE__ */ V("button", {
			type: "button",
			disabled: a,
			onClick: i,
			className: "min-w-[2.75rem] text-left text-sm tabular-nums text-neutral-600 outline-none hover:text-neutral-900 disabled:pointer-events-none disabled:opacity-40",
			children: [o, "%"]
		}) : /* @__PURE__ */ V("span", {
			className: "min-w-[2.75rem] text-sm tabular-nums text-neutral-600",
			children: [o, "%"]
		})]
	});
}
//#endregion
//#region src/components/shapes-popover.tsx
var ws = {
	rect: D,
	ellipse: d,
	polygon: R,
	star: Ye,
	line: j,
	arrow: ge
};
function Ts(e) {
	return e === "generic" ? Me : ws[e];
}
var Es = [
	{
		kind: "rect",
		label: "Square",
		icon: ws.rect
	},
	{
		kind: "ellipse",
		label: "Ellipse",
		icon: ws.ellipse
	},
	{
		kind: "polygon",
		label: "Polygon",
		icon: ws.polygon
	},
	{
		kind: "star",
		label: "Star",
		icon: ws.star
	},
	{
		kind: "line",
		label: "Line",
		icon: ws.line
	},
	{
		kind: "arrow",
		label: "Arrow",
		icon: ws.arrow
	}
];
function Ds({ open: e, disabled: t, anchorRef: n, onClose: r, onPick: i }) {
	let a = Y(null), o = U(() => a.current, []), { openUpward: s, shiftX: c } = Jn(e && !t, n, 320, o, "left");
	return !e || t ? null : /* @__PURE__ */ B("div", {
		ref: a,
		role: "menu",
		style: { transform: `translateX(${c}px)` },
		className: ["absolute left-0 z-[60] min-w-[11rem] overflow-hidden rounded-xl border border-black/[0.08] bg-white py-1 shadow-[0_12px_40px_rgba(0,0,0,0.12)]", s ? "bottom-full mb-2" : "top-full mt-2"].join(" "),
		children: Es.map(({ kind: e, label: t, icon: n }) => /* @__PURE__ */ V("button", {
			type: "button",
			role: "menuitem",
			className: "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm text-neutral-800 outline-none hover:bg-black/[0.05]",
			onClick: () => {
				i(e), r();
			},
			children: [
				/* @__PURE__ */ B(M, {
					icon: n,
					size: 18,
					strokeWidth: 1.75
				}),
				/* @__PURE__ */ B("span", { children: t }),
				e === "rect" ? /* @__PURE__ */ B("span", {
					className: "ml-auto text-[10px] text-neutral-400",
					children: "default"
				}) : null
			]
		}, e))
	});
}
//#endregion
//#region src/components/scene-editor/editor-bottom-tools.tsx
function Os({ addShapeFromKind: e, addText: t, imageInputRef: n, maxZoom: r, minZoom: i, onZoomFitRequest: a, onZoomSliderChange: o, ready: s, setShapesPopoverOpen: c, setShapesQuickAddKind: l, setShortcutsOpen: u, shapeToolSplitRef: d, shapesPopoverOpen: f, shapesQuickAddKind: p, zoomPercent: m }) {
	return /* @__PURE__ */ V(jt, { children: [/* @__PURE__ */ B("div", {
		className: "pointer-events-auto absolute bottom-[max(0.5rem,env(safe-area-inset-bottom,0px))] right-3 z-30 sm:right-4",
		children: s && m !== null ? /* @__PURE__ */ B(Cs, {
			value: m,
			min: i,
			max: r,
			onChange: o,
			onFitRequest: a
		}) : null
	}), /* @__PURE__ */ B("div", {
		className: "pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center pb-2 pt-24",
		children: /* @__PURE__ */ V(uo, {
			"aria-label": "Editor tools",
			children: [
				/* @__PURE__ */ V(fo, {
					ref: d,
					children: [
						/* @__PURE__ */ B($a, {
							disabled: !s,
							variant: "ghost",
							size: "xs",
							className: "min-w-[2.5rem] rounded-full px-2",
							onClick: () => e(p === "generic" ? "rect" : p),
							"aria-label": "Add shape",
							title: "Add shape",
							iconBefore: /* @__PURE__ */ B(M, {
								icon: Ts(p),
								size: 20,
								strokeWidth: 1.75
							})
						}),
						/* @__PURE__ */ B(ro, {
							icon: yt,
							label: "More shapes",
							disabled: !s,
							size: "sm",
							className: "rounded-full",
							onClick: () => c((e) => !e),
							"aria-expanded": f,
							"aria-haspopup": "menu"
						}),
						/* @__PURE__ */ B(Ds, {
							open: f,
							disabled: !s,
							anchorRef: d,
							onClose: () => c(!1),
							onPick: (t) => {
								l(t), e(t), c(!1);
							}
						})
					]
				}),
				/* @__PURE__ */ B(ro, {
					icon: ht,
					label: "Add text",
					disabled: !s,
					size: "md",
					className: "rounded-lg",
					onClick: t,
					strokeWidth: 1.75
				}),
				/* @__PURE__ */ B(ro, {
					icon: b,
					label: "Add image",
					disabled: !s,
					size: "md",
					className: "rounded-lg",
					onClick: () => n.current?.click(),
					strokeWidth: 1.75
				}),
				/* @__PURE__ */ B(ro, {
					icon: Ze,
					label: "Keyboard shortcuts",
					disabled: !s,
					size: "md",
					className: "rounded-lg",
					onClick: () => u(!0),
					strokeWidth: 1.75,
					title: "Shortcuts (?)"
				}),
				s ? null : /* @__PURE__ */ B("span", {
					className: "px-3 text-xs text-[var(--text-muted)]",
					children: "Loading..."
				})
			]
		})
	})] });
}
//#endregion
//#region src/components/scene-editor/editor-context-menu.tsx
function ks({ onAddPage: e, canDeletePage: t, contextMenu: n, onClose: r, onCopy: i, onDelete: o, onDeletePage: s, onDuplicate: c, onDuplicatePage: l, onPaste: u, onToggleLock: d }) {
	return n ? /* @__PURE__ */ B(po, {
		role: "menu",
		width: "w-auto",
		className: "fixed z-[90] min-w-48 rounded-xl py-1 backdrop-blur",
		style: {
			left: `min(${n.x}px, calc(100vw - 12.5rem))`,
			top: `min(${n.y}px, calc(100vh - 18rem))`
		},
		"data-avnac-chrome": !0,
		children: /* @__PURE__ */ V(io, {
			className: "p-0",
			children: [
				n.hasSelection ? /* @__PURE__ */ V(jt, { children: [
					/* @__PURE__ */ B(ao, {
						role: "menuitem",
						icon: ot,
						label: "Copy",
						onClick: () => {
							i(), r();
						}
					}),
					/* @__PURE__ */ B(ao, {
						role: "menuitem",
						icon: be,
						label: "Duplicate",
						onClick: () => {
							c(), r();
						}
					}),
					/* @__PURE__ */ B(ao, {
						role: "menuitem",
						icon: n.locked ? S : a,
						label: n.locked ? "Unlock" : "Lock",
						onClick: () => {
							d(), r();
						}
					}),
					/* @__PURE__ */ B(mo, {})
				] }) : null,
				/* @__PURE__ */ B(ao, {
					role: "menuitem",
					icon: Ot,
					label: "Paste",
					onClick: () => {
						u({
							x: n.sceneX,
							y: n.sceneY
						}), r();
					}
				}),
				n.showPageActions ? /* @__PURE__ */ V(jt, { children: [
					/* @__PURE__ */ B(ao, {
						role: "menuitem",
						icon: ot,
						label: "Duplicate page",
						onClick: () => {
							l(n.pageId ?? void 0), r();
						}
					}),
					/* @__PURE__ */ B(ao, {
						role: "menuitem",
						icon: Ue,
						label: "Add new page",
						onClick: () => {
							e(n.pageId ?? void 0), r();
						}
					}),
					t ? /* @__PURE__ */ B(ao, {
						role: "menuitem",
						icon: et,
						label: "Delete page",
						onClick: () => {
							s(n.pageId ?? void 0), r();
						}
					}) : null
				] }) : null,
				n.hasSelection ? /* @__PURE__ */ V(jt, { children: [/* @__PURE__ */ B(mo, {}), /* @__PURE__ */ B(ao, {
					role: "menuitem",
					icon: et,
					label: "Delete",
					onClick: () => {
						o(), r();
					}
				})] }) : null
			]
		})
	}) : null;
}
//#endregion
//#region src/data/artboard-presets.ts
function As(e, t) {
	return Math.round(e / 25.4 * t);
}
var js = [
	{
		id: "custom-4000",
		label: "Large square (4000)",
		category: "general",
		width: 4e3,
		height: 4e3
	},
	{
		id: "ig-square",
		label: "Instagram square (1080)",
		category: "social-media",
		width: 1080,
		height: 1080
	},
	{
		id: "ig-portrait",
		label: "Instagram portrait (1080×1350)",
		category: "social-media",
		width: 1080,
		height: 1350
	},
	{
		id: "ig-story",
		label: "Story / Reels (1080×1920)",
		category: "social-media",
		width: 1080,
		height: 1920
	},
	{
		id: "twitter-post",
		label: "X / Twitter post (1200×675)",
		category: "social-media",
		width: 1200,
		height: 675
	},
	{
		id: "linkedin",
		label: "LinkedIn share (1200×627)",
		category: "social-media",
		width: 1200,
		height: 627
	},
	{
		id: "youtube-thumb",
		label: "YouTube thumbnail (1280×720)",
		category: "social-media",
		width: 1280,
		height: 720
	},
	{
		id: "hd",
		label: "HD (1920×1080)",
		category: "presentation",
		width: 1920,
		height: 1080
	},
	{
		id: "a4-300",
		label: "A4 portrait",
		category: "print",
		widthMm: 210,
		heightMm: 297,
		dpi: 300,
		width: As(210, 300),
		height: As(297, 300)
	},
	{
		id: "a4-landscape-300",
		label: "A4 landscape",
		category: "print",
		widthMm: 297,
		heightMm: 210,
		dpi: 300,
		width: As(297, 300),
		height: As(210, 300)
	},
	{
		id: "a5-300",
		label: "A5 portrait",
		category: "print",
		widthMm: 148,
		heightMm: 210,
		dpi: 300,
		width: As(148, 300),
		height: As(210, 300)
	},
	{
		id: "letter-300",
		label: "US Letter portrait",
		category: "print",
		widthMm: 215.9,
		heightMm: 279.4,
		dpi: 300,
		width: As(215.9, 300),
		height: As(279.4, 300)
	},
	{
		id: "4x6-300",
		label: "4×6″ photo",
		category: "print",
		widthMm: 101.6,
		heightMm: 152.4,
		dpi: 300,
		width: As(101.6, 300),
		height: As(152.4, 300)
	},
	{
		id: "5x7-300",
		label: "5×7″ photo",
		category: "print",
		widthMm: 127,
		heightMm: 177.8,
		dpi: 300,
		width: As(127, 300),
		height: As(177.8, 300)
	}
], Ms = 220, Ns = 100, Ps = 16e3;
function Fs({ width: e, height: t, onResize: n, viewportRef: r, disabled: i }) {
	let [a, o] = X(!1), [s, c] = X(!1), [l, u] = X(!0), d = Y(null), f = Y(null), p = Y(null), m = U(() => f.current, []), [h, g] = X({
		x: 0,
		y: 0
	}), [_, v] = X(String(e)), [y, b] = X(String(t)), x = J(() => e <= 0 || t <= 0 ? 1 : e / t, [e, t]), S = js.find((n) => n.width === e && n.height === t) ?? null;
	G(() => {
		v(String(e)), b(String(t));
	}, [e, t]);
	let { openUpward: C, shiftX: w } = Jn(a, d, Ms, m, "center");
	zt(() => {
		if (!a || !s) {
			g({
				x: 0,
				y: 0
			});
			return;
		}
		function e() {
			let e = r.current, t = p.current;
			if (!e || !t) return;
			let { shiftX: n, shiftY: i } = Kn(e, t);
			g({
				x: n,
				y: i
			});
		}
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [
		a,
		s,
		r
	]), G(() => {
		if (!a) return;
		let e = (e) => {
			d.current?.contains(e.target) || (o(!1), c(!1));
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [a]), G(() => {
		a || c(!1);
	}, [a]);
	let T = U((e) => Math.min(Ps, Math.max(Ns, Math.round(e))), []), E = U((r, i) => {
		let a = T(r), o = T(i);
		v(String(a)), b(String(o)), !(a === e && o === t) && n(a, o);
	}, [
		T,
		t,
		n,
		e
	]), ee = U((n) => {
		let r = Number.parseInt(n, 10);
		if (!Number.isFinite(r)) {
			v(String(e)), b(String(t));
			return;
		}
		let i = T(r);
		E(i, l ? T(i / x) : t);
	}, [
		x,
		T,
		E,
		t,
		l,
		e
	]), D = U((n) => {
		let r = Number.parseInt(n, 10);
		if (!Number.isFinite(r)) {
			v(String(e)), b(String(t));
			return;
		}
		let i = T(r);
		E(l ? T(i * x) : e, i);
	}, [
		x,
		T,
		E,
		t,
		l,
		e
	]), O = `${e}×${t}`, A = !!i;
	return /* @__PURE__ */ V("div", {
		ref: d,
		className: "relative shrink-0",
		children: [/* @__PURE__ */ V("button", {
			type: "button",
			disabled: A,
			className: [
				or(a, { wide: !0 }),
				"gap-1 px-2",
				A ? "pointer-events-none opacity-40" : ""
			].join(" "),
			"aria-label": `Artboard size, ${O}px`,
			title: "Resize artboard",
			"aria-expanded": a,
			"aria-haspopup": "dialog",
			onClick: () => {
				A || o((e) => !e);
			},
			children: [/* @__PURE__ */ B(M, {
				icon: it,
				size: 18,
				strokeWidth: 1.75
			}), /* @__PURE__ */ B("span", {
				className: "max-w-[5.5rem] truncate text-left text-xs font-medium tabular-nums text-neutral-700 sm:max-w-none",
				children: O
			})]
		}), a && !A ? /* @__PURE__ */ V("div", {
			ref: f,
			className: [
				"absolute left-1/2 z-[70] w-[min(18rem,calc(100vw-2rem))] p-3",
				C ? "bottom-full mb-2" : "top-full mt-2",
				cr
			].join(" "),
			style: { transform: `translateX(calc(-50% + ${w}px))` },
			children: [
				/* @__PURE__ */ B("p", {
					className: "mb-2 text-[13px] font-medium text-neutral-800",
					children: "Artboard size"
				}),
				/* @__PURE__ */ B("div", {
					className: "relative -mx-3 mb-3 w-auto shrink-0",
					children: /* @__PURE__ */ V("div", {
						className: "relative w-full shrink-0",
						children: [/* @__PURE__ */ V("button", {
							type: "button",
							className: "flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-[13px] font-medium text-neutral-800 hover:bg-black/[0.05]",
							"aria-label": "Artboard preset",
							"aria-expanded": s,
							"aria-haspopup": "menu",
							onClick: () => c((e) => !e),
							children: [/* @__PURE__ */ B("span", {
								className: "min-w-0 truncate",
								children: S?.label ?? "Custom dimensions"
							}), /* @__PURE__ */ B(M, {
								icon: Ge,
								size: 14,
								strokeWidth: 1.75,
								className: `shrink-0 transition-transform ${s ? "rotate-180" : ""}`
							})]
						}), s ? /* @__PURE__ */ V("div", {
							ref: p,
							role: "menu",
							className: ["absolute left-full top-0 z-[61] ml-1.5 min-w-[14rem] py-1", lr].join(" "),
							style: { transform: h.x !== 0 || h.y !== 0 ? `translate(${h.x}px, ${h.y}px)` : void 0 },
							children: [/* @__PURE__ */ V("button", {
								type: "button",
								role: "menuitemradio",
								"aria-checked": !S,
								className: ["flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] outline-none transition-colors hover:bg-black/[0.05]", S ? "text-neutral-700" : "bg-black/[0.04] text-neutral-900"].join(" "),
								onClick: () => c(!1),
								children: [/* @__PURE__ */ B("span", {
									className: "truncate",
									children: "Custom dimensions"
								}), S ? null : /* @__PURE__ */ B("span", {
									className: "ml-auto text-[10px] font-medium uppercase tracking-[0.08em] text-neutral-500",
									children: "Current"
								})]
							}), js.map((e) => {
								let t = S?.id === e.id;
								return /* @__PURE__ */ V("button", {
									type: "button",
									role: "menuitemradio",
									"aria-checked": t,
									className: ["flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] outline-none transition-colors hover:bg-black/[0.05]", t ? "bg-black/[0.04] text-neutral-900" : "text-neutral-700"].join(" "),
									onClick: () => {
										c(!1), n(e.width, e.height);
									},
									children: [/* @__PURE__ */ B("span", {
										className: "truncate",
										children: e.label
									}), t ? /* @__PURE__ */ B("span", {
										className: "ml-auto text-[10px] font-medium uppercase tracking-[0.08em] text-neutral-500",
										children: "Current"
									}) : null]
								}, e.id);
							})]
						}) : null]
					})
				}),
				/* @__PURE__ */ B("div", {
					className: "mb-2 text-[12px] font-medium text-neutral-700",
					children: "Custom size"
				}),
				/* @__PURE__ */ V("div", {
					className: "grid grid-cols-[1fr_auto_1fr_auto] items-end gap-2",
					children: [
						/* @__PURE__ */ V("label", {
							className: "block text-[12px] font-medium text-neutral-700",
							children: ["Width", /* @__PURE__ */ B(Is, {
								value: _,
								min: Ns,
								max: Ps,
								ariaLabel: "Artboard width",
								onDraftChange: v,
								onCommit: ee,
								onScrub: (e) => {
									let n = T(e);
									E(n, l ? T(n / x) : Number.parseInt(y, 10) || t);
								}
							})]
						}),
						/* @__PURE__ */ B("div", {
							className: "flex h-9 items-center justify-center pb-[2px] text-neutral-300",
							children: "×"
						}),
						/* @__PURE__ */ V("label", {
							className: "block text-[12px] font-medium text-neutral-700",
							children: ["Height", /* @__PURE__ */ B(Is, {
								value: y,
								min: Ns,
								max: Ps,
								ariaLabel: "Artboard height",
								onDraftChange: b,
								onCommit: D,
								onScrub: (t) => {
									let n = T(t);
									E(l ? T(n * x) : Number.parseInt(_, 10) || e, n);
								}
							})]
						}),
						/* @__PURE__ */ B("button", {
							type: "button",
							className: ["mt-1 flex h-9 w-9 items-center justify-center rounded-lg border transition-colors", l ? "border-black/15 bg-black/[0.05] text-neutral-900" : "border-black/10 bg-white text-neutral-600 hover:border-black/15"].join(" "),
							"aria-label": l ? "Unlink dimensions" : "Link dimensions",
							"aria-pressed": l,
							title: l ? "Unlink dimensions" : "Link dimensions",
							onClick: () => u((e) => !e),
							children: /* @__PURE__ */ B(M, {
								icon: l ? dt : k,
								size: 15,
								strokeWidth: 1.75
							})
						})
					]
				})
			]
		}) : null]
	});
}
function Is({ value: e, min: t, max: n, ariaLabel: r, onDraftChange: i, onCommit: a, onScrub: o }) {
	let [s, c] = X(!1), l = Y(null), u = Y(null);
	G(() => {
		s && (u.current?.focus(), u.current?.select());
	}, [s]);
	let d = Number.parseInt(e, 10), f = Number.isFinite(d) ? Math.max(t, Math.min(n, d)) : t;
	return s ? /* @__PURE__ */ B("input", {
		ref: u,
		type: "text",
		inputMode: "numeric",
		value: e,
		onChange: (e) => i(e.target.value),
		onBlur: () => {
			c(!1), a(e);
		},
		onKeyDown: (t) => {
			t.key === "Enter" && (t.preventDefault(), c(!1), a(e)), t.key === "Escape" && (t.preventDefault(), c(!1));
		},
		className: "mt-1 box-border h-9 w-full rounded-lg border border-black/20 bg-white px-2 text-center font-mono text-[13px] tabular-nums text-neutral-900 outline-none focus:ring-2 focus:ring-black/15",
		"aria-label": r
	}) : /* @__PURE__ */ B("div", {
		role: "spinbutton",
		"aria-valuenow": f,
		"aria-valuemin": t,
		"aria-valuemax": n,
		"aria-label": `${r} — drag horizontally to change, double-click to type`,
		title: "Drag to change size · Shift for faster steps · Double-click to type",
		className: "mt-1 flex h-9 w-full cursor-ew-resize select-none items-center justify-center rounded-lg border border-black/10 bg-white px-2 font-mono text-[13px] tabular-nums text-neutral-900 touch-none transition-colors hover:border-black/18",
		onPointerDown: (e) => {
			s || e.button !== 0 || (e.preventDefault(), l.current = {
				pointerId: e.pointerId,
				startX: e.clientX,
				startValue: f,
				active: !1
			});
		},
		onPointerMove: (e) => {
			let t = l.current;
			if (!t || e.pointerId !== t.pointerId) return;
			let n = e.clientX - t.startX;
			if (!t.active) {
				if (Math.abs(n) < 4) return;
				t.active = !0, e.currentTarget.setPointerCapture(e.pointerId);
			}
			let r = e.shiftKey ? 4 : 1;
			o(t.startValue + n * r);
		},
		onPointerUp: (e) => {
			let t = l.current;
			if (!(!t || e.pointerId !== t.pointerId)) {
				if (t.active) try {
					e.currentTarget.releasePointerCapture(e.pointerId);
				} catch {}
				l.current = null;
			}
		},
		onPointerCancel: (e) => {
			let t = l.current;
			!t || e.pointerId !== t.pointerId || (l.current = null);
		},
		onDoubleClick: (e) => {
			e.preventDefault(), c(!0);
		},
		children: f
	});
}
//#endregion
//#region src/components/corner-radius-toolbar-control.tsx
var Ls = 120;
function Rs({ value: e, max: t, onChange: n, disabled: r }) {
	let [i, a] = X(!1), o = Y(null), s = Y(null), c = U(() => s.current, []), l = Math.max(0, t), u = Math.max(1, Math.ceil(l)), d = r || l <= 0, f = Math.round(Math.min(e, l)), { openUpward: p, shiftX: m } = Jn(i, o, Ls, c, "center");
	return G(() => {
		if (!i) return;
		let e = (e) => {
			o.current?.contains(e.target) || a(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [i]), /* @__PURE__ */ V("div", {
		ref: o,
		className: "relative shrink-0",
		children: [/* @__PURE__ */ V("button", {
			type: "button",
			disabled: d,
			className: [
				or(i, { wide: !0 }),
				"gap-1 px-2",
				d ? "pointer-events-none opacity-40" : ""
			].join(" "),
			"aria-label": `Corner radius, ${f}px`,
			title: "Corner radius",
			"aria-expanded": i,
			"aria-haspopup": "dialog",
			onClick: () => {
				d || a((e) => !e);
			},
			children: [/* @__PURE__ */ B(M, {
				icon: ke,
				size: 18,
				strokeWidth: 1.75
			}), /* @__PURE__ */ V("span", {
				className: "min-w-[2.25rem] text-left text-xs font-medium tabular-nums text-neutral-700",
				children: [f, "px"]
			})]
		}), i && !d ? /* @__PURE__ */ V("div", {
			ref: s,
			className: [
				"absolute left-1/2 z-[70] min-w-[13.5rem] p-3",
				p ? "bottom-full mb-2" : "top-full mt-2",
				lr
			].join(" "),
			style: { transform: `translateX(calc(-50% + ${m}px))` },
			children: [/* @__PURE__ */ V("div", {
				className: "mb-2 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ B("span", {
					className: "text-[13px] font-medium text-neutral-800",
					children: "Corner radius"
				}), /* @__PURE__ */ V("span", {
					className: "text-[13px] tabular-nums text-neutral-600",
					children: [f, "px"]
				})]
			}), /* @__PURE__ */ B(nr, {
				min: 0,
				max: u,
				value: Math.min(e, u),
				onChange: (e) => n(Math.min(e, l)),
				"aria-label": "Corner radius",
				"aria-valuemin": 0,
				"aria-valuemax": u,
				"aria-valuenow": f,
				trackClassName: "w-full"
			})]
		}) : null]
	});
}
//#endregion
//#region src/components/paint-popover-control.tsx
var zs = 440;
function Bs({ value: e, onChange: t, ariaLabel: n = "Color and gradient", title: r = "Color and gradient", compact: i = !1 }) {
	let [a, o] = X(!1), s = Y(null), c = Y(null), { openUpward: l, shiftX: u } = Jn(a, s, zs, U(() => c.current, []), "center");
	return G(() => {
		if (!a) return;
		let e = (e) => {
			s.current?.contains(e.target) || o(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [a]), /* @__PURE__ */ V("div", {
		ref: s,
		className: "relative shrink-0",
		children: [/* @__PURE__ */ B("button", {
			type: "button",
			className: i ? or(a) : "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-neutral-600 outline-none transition-colors hover:bg-black/[0.06]",
			"aria-label": n,
			title: r,
			"aria-expanded": a,
			"aria-haspopup": "dialog",
			onClick: () => o((e) => !e),
			children: /* @__PURE__ */ B("span", {
				className: "h-5 w-5 rounded-md border border-black/15 shadow-inner",
				style: yr(e)
			})
		}), a ? /* @__PURE__ */ B("div", {
			ref: c,
			className: ["absolute left-1/2 z-[70]", l ? "bottom-full mb-2" : "top-full mt-2"].join(" "),
			style: { transform: `translateX(calc(-50% + ${u}px))` },
			children: /* @__PURE__ */ B(br, {
				value: e,
				onChange: t
			})
		}) : null]
	});
}
//#endregion
//#region src/components/placeholder-toolbar.tsx
var Vs = [
	{
		value: "cover",
		label: "Cover"
	},
	{
		value: "contain",
		label: "Contain"
	},
	{
		value: "fill",
		label: "Fill"
	}
];
function Hs({ model: e, onFitChange: t, onCornerRadius: n, onBorderColorChange: r, footerSlot: i }) {
	let a = {
		type: "solid",
		color: e.borderColor || "#ffb88e"
	};
	return /* @__PURE__ */ V(ir, { children: [
		/* @__PURE__ */ B("div", {
			className: "flex items-center gap-0.5 px-1",
			children: Vs.map((n) => /* @__PURE__ */ B("button", {
				type: "button",
				className: ["rounded-md px-2 py-1 text-[11px] font-medium transition-colors", e.fit === n.value ? "bg-black/10 text-neutral-900" : "text-neutral-500 hover:bg-black/5 hover:text-neutral-700"].join(" "),
				onClick: () => t(n.value),
				"aria-pressed": e.fit === n.value,
				title: `Fit: ${n.label}`,
				children: n.label
			}, n.value))
		}),
		/* @__PURE__ */ B(ar, {}),
		/* @__PURE__ */ B(Bs, {
			compact: !0,
			value: a,
			onChange: (e) => {
				e.type === "solid" && r(e.color);
			},
			title: "Border color",
			ariaLabel: "Placeholder border color"
		}),
		/* @__PURE__ */ B(ar, {}),
		/* @__PURE__ */ B(Rs, {
			value: e.cornerRadius,
			max: e.cornerRadiusMax,
			onChange: n
		}),
		i ? /* @__PURE__ */ V(jt, { children: [/* @__PURE__ */ B(ar, {}), i] }) : null
	] });
}
//#endregion
//#region src/lib/avnac-shape-meta.ts
function Us(e) {
	return e ? e.kind === "arrow" ? !0 : e.kind === "line" && !!e.arrowEndpoints && e.arrowStrokeWidth != null : !1;
}
//#endregion
//#region src/components/shape-options-toolbar.tsx
function Ws(e = "") {
	return `text-[10px] font-medium uppercase tracking-wide text-neutral-500 ${e}`;
}
function Gs() {
	return /* @__PURE__ */ V("svg", {
		width: "18",
		height: "18",
		viewBox: "0 0 24 24",
		fill: "none",
		children: [
			/* @__PURE__ */ B("circle", {
				cx: "3",
				cy: "12",
				r: "1.5",
				fill: "currentColor"
			}),
			/* @__PURE__ */ B("circle", {
				cx: "8",
				cy: "12",
				r: "1.5",
				fill: "currentColor"
			}),
			/* @__PURE__ */ B("circle", {
				cx: "13",
				cy: "12",
				r: "1.5",
				fill: "currentColor"
			}),
			/* @__PURE__ */ B("circle", {
				cx: "18",
				cy: "12",
				r: "1.5",
				fill: "currentColor"
			}),
			/* @__PURE__ */ B("circle", {
				cx: "23",
				cy: "12",
				r: "1.5",
				fill: "currentColor"
			})
		]
	});
}
var Ks = [
	{
		style: "solid",
		label: "Solid"
	},
	{
		style: "dashed",
		label: "Dashed"
	},
	{
		style: "dotted",
		label: "Dotted"
	}
];
function qs(e) {
	return e === "solid" ? /* @__PURE__ */ B(M, {
		icon: ae,
		size: 18,
		strokeWidth: 1.75
	}) : e === "dashed" ? /* @__PURE__ */ B(M, {
		icon: Je,
		size: 18,
		strokeWidth: 1.75
	}) : /* @__PURE__ */ B(Gs, {});
}
function Js({ meta: e, paintValue: t, onPaintChange: n, onPolygonSides: r, onStarPoints: i, onArrowLineStyle: a, onArrowRoundedEnds: o, onArrowStrokeWidth: s, onArrowPathType: c, rectCornerRadius: l, rectCornerRadiusMax: u, onRectCornerRadius: d, footerSlot: f }) {
	let [p, m] = X(!1), [h, g] = X(!1), _ = Y(null), v = Y(null), y = Y(null), { openUpward: b, shiftX: x } = Jn(p || h, _, p ? 300 : 160, Yn(p, v, y));
	if (G(() => {
		if (!p && !h) return;
		let e = (e) => {
			_.current?.contains(e.target) || (m(!1), g(!1));
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [p, h]), e.kind === "rect") return /* @__PURE__ */ B(ir, {
		role: "toolbar",
		"aria-label": "Shape options",
		children: /* @__PURE__ */ V("div", {
			className: "flex items-center py-1 pl-2 pr-3",
			children: [
				/* @__PURE__ */ B(Bs, {
					compact: !0,
					value: t,
					onChange: n,
					title: "Fill color and gradient",
					ariaLabel: "Fill color and gradient"
				}),
				d !== void 0 && l !== void 0 && u !== void 0 ? /* @__PURE__ */ V(jt, { children: [/* @__PURE__ */ B(ar, {}), /* @__PURE__ */ B(Rs, {
					value: l,
					max: u,
					onChange: d
				})] }) : null,
				f ? /* @__PURE__ */ V(jt, { children: [/* @__PURE__ */ B(ar, {}), f] }) : null
			]
		})
	});
	if (e.kind === "ellipse") return /* @__PURE__ */ B(ir, {
		role: "toolbar",
		"aria-label": "Shape options",
		children: /* @__PURE__ */ V("div", {
			className: "flex items-center py-1 pl-2 pr-3",
			children: [/* @__PURE__ */ B(Bs, {
				compact: !0,
				value: t,
				onChange: n,
				title: "Fill color and gradient",
				ariaLabel: "Fill color and gradient"
			}), f ? /* @__PURE__ */ V(jt, { children: [/* @__PURE__ */ B(ar, {}), f] }) : null]
		})
	});
	if (e.kind === "line" && !Us(e)) return /* @__PURE__ */ B(ir, {
		role: "toolbar",
		"aria-label": "Line options",
		children: /* @__PURE__ */ V("div", {
			className: "flex items-center py-1 pl-2 pr-3",
			children: [/* @__PURE__ */ B(Bs, {
				compact: !0,
				value: t,
				onChange: n,
				title: "Stroke color and gradient",
				ariaLabel: "Stroke color and gradient"
			}), f ? /* @__PURE__ */ V(jt, { children: [/* @__PURE__ */ B(ar, {}), f] }) : null]
		})
	});
	if (e.kind === "polygon") {
		let i = e.polygonSides ?? 6;
		return /* @__PURE__ */ B(ir, {
			role: "toolbar",
			"aria-label": "Polygon options",
			children: /* @__PURE__ */ V("div", {
				className: "flex items-center gap-1 py-1 pl-2 pr-3",
				children: [
					/* @__PURE__ */ B(Bs, {
						compact: !0,
						value: t,
						onChange: n,
						title: "Fill color and gradient",
						ariaLabel: "Fill color and gradient"
					}),
					/* @__PURE__ */ B(ar, {}),
					/* @__PURE__ */ B("span", {
						className: Ws(),
						children: "Sides"
					}),
					/* @__PURE__ */ B("input", {
						type: "number",
						min: 3,
						max: 32,
						value: i,
						onChange: (e) => {
							let t = Number(e.target.value);
							Number.isFinite(t) && r(Math.round(t));
						},
						className: "w-12 rounded-md border border-black/12 bg-neutral-50 px-1.5 py-0.5 text-center text-xs tabular-nums text-neutral-900 outline-none focus:border-black/25"
					}),
					/* @__PURE__ */ B(nr, {
						min: 3,
						max: 16,
						value: Math.min(16, i),
						onChange: r,
						"aria-label": "Polygon sides",
						trackClassName: "w-24"
					}),
					f ? /* @__PURE__ */ V(jt, { children: [/* @__PURE__ */ B(ar, {}), f] }) : null
				]
			})
		});
	}
	if (e.kind === "star") {
		let r = e.starPoints ?? 5;
		return /* @__PURE__ */ B(ir, {
			role: "toolbar",
			"aria-label": "Star options",
			children: /* @__PURE__ */ V("div", {
				className: "flex items-center gap-1 py-1 pl-2 pr-3",
				children: [
					/* @__PURE__ */ B(Bs, {
						compact: !0,
						value: t,
						onChange: n,
						title: "Fill color and gradient",
						ariaLabel: "Fill color and gradient"
					}),
					/* @__PURE__ */ B(ar, {}),
					/* @__PURE__ */ B("span", {
						className: Ws(),
						children: "Points"
					}),
					/* @__PURE__ */ B("input", {
						type: "number",
						min: 3,
						max: 24,
						value: r,
						onChange: (e) => {
							let t = Number(e.target.value);
							Number.isFinite(t) && i(Math.round(t));
						},
						className: "w-12 rounded-md border border-black/12 bg-neutral-50 px-1.5 py-0.5 text-center text-xs tabular-nums text-neutral-900 outline-none focus:border-black/25"
					}),
					/* @__PURE__ */ B(nr, {
						min: 3,
						max: 12,
						value: Math.min(12, r),
						onChange: i,
						"aria-label": "Star points",
						trackClassName: "w-24"
					}),
					f ? /* @__PURE__ */ V(jt, { children: [/* @__PURE__ */ B(ar, {}), f] }) : null
				]
			})
		});
	}
	if (Us(e)) {
		let r = e.arrowLineStyle ?? "solid", i = e.arrowRoundedEnds ?? !1, l = e.arrowStrokeWidth ?? 10, u = e.arrowPathType ?? "straight";
		return /* @__PURE__ */ V("div", {
			ref: _,
			className: "relative",
			children: [
				/* @__PURE__ */ B(ir, {
					role: "toolbar",
					"aria-label": e.kind === "line" ? "Line options" : "Arrow options",
					children: /* @__PURE__ */ V("div", {
						className: "flex items-center gap-1 py-1 pl-2 pr-2",
						children: [
							/* @__PURE__ */ B(Bs, {
								compact: !0,
								value: t,
								onChange: n,
								title: "Stroke color and gradient",
								ariaLabel: "Stroke color and gradient"
							}),
							/* @__PURE__ */ B(ar, {}),
							/* @__PURE__ */ V("button", {
								type: "button",
								className: or(h, { wide: !0 }),
								"aria-expanded": h,
								"aria-haspopup": "dialog",
								"aria-label": "Line type",
								title: "Line type",
								onClick: () => {
									g((e) => !e), m(!1);
								},
								children: [/* @__PURE__ */ B(M, {
									icon: u === "curved" ? Ce : Ee,
									size: 18,
									strokeWidth: 1.75
								}), /* @__PURE__ */ B(M, {
									icon: yt,
									size: 12,
									strokeWidth: 1.75,
									className: `transition-transform ${h ? "rotate-180" : ""}`
								})]
							}),
							/* @__PURE__ */ B(ar, {}),
							/* @__PURE__ */ V("button", {
								type: "button",
								className: or(p, { wide: !0 }),
								"aria-expanded": p,
								"aria-haspopup": "dialog",
								"aria-label": "Stroke style",
								title: "Stroke style",
								onClick: () => {
									m((e) => !e), g(!1);
								},
								children: [qs(r), /* @__PURE__ */ B(M, {
									icon: yt,
									size: 12,
									strokeWidth: 1.75,
									className: `transition-transform ${p ? "rotate-180" : ""}`
								})]
							}),
							f ? /* @__PURE__ */ V(jt, { children: [/* @__PURE__ */ B(ar, {}), f] }) : null
						]
					})
				}),
				h ? /* @__PURE__ */ V("div", {
					ref: y,
					role: "dialog",
					"aria-label": "Line type",
					style: { transform: `translateX(calc(-50% + ${x}px))` },
					className: [
						"absolute left-1/2 z-[60] min-w-[11rem] px-2 py-2",
						b ? "bottom-full mb-2" : "top-full mt-2",
						lr
					].join(" "),
					children: [/* @__PURE__ */ V("button", {
						type: "button",
						className: "flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-[13px] font-medium text-neutral-800 hover:bg-black/[0.05]",
						onClick: () => {
							c("straight"), g(!1);
						},
						children: [
							/* @__PURE__ */ B(M, {
								icon: Ee,
								size: 18,
								strokeWidth: 1.75,
								className: "shrink-0 text-neutral-600"
							}),
							/* @__PURE__ */ B("span", {
								className: "flex-1",
								children: "Straight"
							}),
							u === "straight" ? /* @__PURE__ */ B(M, {
								icon: Ne,
								size: 16,
								strokeWidth: 1.75,
								className: "shrink-0 text-neutral-700"
							}) : null
						]
					}), /* @__PURE__ */ V("button", {
						type: "button",
						className: "flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-[13px] font-medium text-neutral-800 hover:bg-black/[0.05]",
						onClick: () => {
							c("curved"), g(!1);
						},
						children: [
							/* @__PURE__ */ B(M, {
								icon: Ce,
								size: 18,
								strokeWidth: 1.75,
								className: "shrink-0 text-neutral-600"
							}),
							/* @__PURE__ */ B("span", {
								className: "flex-1",
								children: "Curved"
							}),
							u === "curved" ? /* @__PURE__ */ B(M, {
								icon: Ne,
								size: 16,
								strokeWidth: 1.75,
								className: "shrink-0 text-neutral-700"
							}) : null
						]
					})]
				}) : null,
				p ? /* @__PURE__ */ V("div", {
					ref: v,
					role: "dialog",
					"aria-label": "Stroke style options",
					style: { transform: `translateX(calc(-50% + ${x}px))` },
					className: [
						"absolute left-1/2 z-[60] w-[min(18rem,calc(100vw-2rem))] px-4 py-3.5",
						b ? "bottom-full mb-2" : "top-full mt-2",
						lr
					].join(" "),
					children: [
						/* @__PURE__ */ B("div", {
							className: "flex items-center gap-1.5",
							children: Ks.map(({ style: e, label: t }) => /* @__PURE__ */ B("button", {
								type: "button",
								onClick: () => a(e),
								className: `flex h-10 flex-1 items-center justify-center rounded-lg border text-neutral-600 transition-colors ${r === e ? "border-black/15 bg-black/[0.08] text-neutral-900" : "border-black/[0.08] hover:bg-black/[0.05]"}`,
								"aria-label": t,
								title: t,
								children: qs(e)
							}, e))
						}),
						/* @__PURE__ */ V("label", {
							className: "mt-3 flex cursor-pointer items-center justify-between",
							children: [/* @__PURE__ */ B("span", {
								className: "text-[13px] font-medium text-neutral-700",
								children: "Rounded end points"
							}), /* @__PURE__ */ B("button", {
								type: "button",
								role: "switch",
								"aria-checked": i,
								onClick: () => o(!i),
								className: `relative h-6 w-10 rounded-full transition-colors ${i ? "bg-neutral-900" : "bg-neutral-300"}`,
								children: /* @__PURE__ */ B("span", { className: `absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${i ? "translate-x-[18px]" : "translate-x-0.5"}` })
							})]
						}),
						/* @__PURE__ */ V("div", {
							className: "mt-3 flex flex-col gap-1.5",
							children: [/* @__PURE__ */ B("span", {
								className: "text-[13px] font-medium text-neutral-700",
								children: "Stroke weight"
							}), /* @__PURE__ */ V("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ B(nr, {
									min: 1,
									max: 80,
									value: l,
									onChange: s,
									"aria-label": "Stroke weight",
									trackClassName: "min-w-0 flex-1"
								}), /* @__PURE__ */ B("input", {
									type: "number",
									min: 1,
									max: 80,
									value: l,
									onChange: (e) => {
										let t = Number(e.target.value);
										Number.isFinite(t) && s(t);
									},
									className: "w-12 rounded-md border border-black/12 bg-neutral-50 px-1.5 py-1 text-center text-xs tabular-nums text-neutral-900 outline-none focus:border-black/25"
								})]
							})]
						})
					]
				}) : null
			]
		});
	}
	return null;
}
//#endregion
//#region src/data/google-font-families.ts
var Ys = /* @__PURE__ */ "ABeeZee.Abel.Abril Fatface.Aclonica.Acme.Actor.Adamina.Advent Pro.Aguafina Script.Akatab.Akaya Kanadaka.Akaya Telivigala.Akronim.Aladin.Alata.Alatsi.Aldrich.Alef.Alegreya.Alegreya Sans.Alegreya Sans SC.Alegreya SC.Aleo.Alex Brush.Alfa Slab One.Alice.Alike.Alike Angular.Allan.Allerta.Allerta Stencil.Allura.Almarai.Almendra.Almendra Display.Almendra SC.Amarante.Amaranth.Amatic SC.Amethysta.Amiko.Amiri.Amita.Anaheim.Andada Pro.Andika.Anek Bangla.Anek Devanagari.Anek Gujarati.Anek Gurmukhi.Anek Kannada.Anek Latin.Anek Malayalam.Anek Odia.Anek Tamil.Anek Telugu.Angkor.Annie Use Your Telescope.Anonymous Pro.Antic.Antic Didone.Antic Slab.Anton.Antonio.Arapey.Arbutus.Arbutus Slab.Architects Daughter.Archivo.Archivo Black.Archivo Narrow.Are You Serious.Aref Ruqaa.Arima.Arimo.Arizonia.Armata.Arsenal.Artifika.Arvo.Arya.Asap.Asap Condensed.Asar.Asset.Assistant.Astloch.Asul.Athiti.Atkinson Hyperlegible.Atma.Atomic Age.Aubrey.Audiowide.Autour One.Average.Average Sans.Averia Gruesa Libre.Averia Libre.Averia Sans Libre.Averia Serif Libre.Azeret Mono.B612.B612 Mono.Babylonica.Bad Script.Bahiana.Bahianita.Bai Jamjuree.Bakbak One.Ballet.Baloo 2.Baloo Bhai 2.Baloo Bhaijaan 2.Baloo Bhaina 2.Baloo Chettan 2.Baloo Da 2.Baloo Paaji 2.Baloo Tamma 2.Baloo Tammudu 2.Baloo Thambi 2.Balsamiq Sans.Balthazar.Bangers.Barlow.Barlow Condensed.Barlow Semi Condensed.Barriecito.Barrio.Basic.Baskervville.Battambang.Baumans.Bayon.Be Vietnam Pro.Bebas Neue.Belgrano.Bellefair.Belleza.Bellota.Bellota Text.BenchNine.Bentham.Berkshire Swash.Besley.Beth Ellen.Bevan.BhuTuka Expanded One.Big Shoulders Display.Big Shoulders Inline Display.Big Shoulders Inline Text.Big Shoulders Stencil Display.Big Shoulders Stencil Text.Big Shoulders Text.Bigelow Rules.Bigshot One.Bilbo.Bilbo Swash Caps.BioRhyme.BioRhyme Expanded.Birthstone.Birthstone Bounce.Biryani.Bitter.Black And White Picture.Black Han Sans.Black Ops One.Blinker.Bodoni Moda.Bokor.Bonbon.Bonheur Royale.Boogaloo.Borel.Bowlby One.Bowlby One SC.Brawler.Bree Serif.Bricolage Grotesque.Bruno Ace.Bruno Ace SC.Bubblegum Sans.Bubbler One.Buda.Buenard.Bungee.Bungee Hairline.Bungee Inline.Bungee Outline.Bungee Shade.Bungee Spice.Butcherman.Butterfly Kids.Cabin.Cabin Condensed.Cabin Sketch.Caesar Dressing.Cagliostro.Cairo.Cairo Play.Caladea.Calistoga.Calligraffitti.Cambay.Cambo.Candal.Cantarell.Cantata One.Cantora One.Capriola.Caramel.Carattere.Cardo.Carlito.Carme.Carrois Gothic.Carrois Gothic SC.Carter One.Castoro.Castoro Titling.Catamaran.Caudex.Caveat.Caveat Brush.Cedarville Cursive.Ceviche One.Chakra Petch.Changa.Changa One.Chango.Charis SIL.Charm.Charmonman.Chathura.Chau Philomene One.Chela One.Chelsea Market.Chenla.Cherish.Cherry Bomb One.Cherry Cream Soda.Chewy.Chicle.Chilanka.Chivo.Chivo Mono.Chokokutai.Chonburi.Cinzel.Cinzel Decorative.Clicker Script.Climate Crisis.Coda.Codystar.Coiny.Combo.Comfortaa.Comforter.Comforter Brush.Comic Neue.Coming Soon.Commissioner.Concert One.Condiment.Content.Contrail One.Convergence.Cookie.Copse.Corben.Corinthia.Cormorant.Cormorant Garamond.Cormorant Infant.Cormorant SC.Cormorant Unicase.Courgette.Courier Prime.Cousine.Coustard.Covered By Your Grace.Crafty Girls.Creepster.Crete Round.Crimson Pro.Crimson Text.Croissant One.Crushed.Cuprum.Cute Font.Cutive.Cutive Mono.DM Mono.DM Sans.DM Serif Display.DM Serif Text.Dancing Script.Dangrek.Darker Grotesque.Darumadrop One.David Libre.Dawning of a New Day.Days One.Dekko.Dela Gothic One.Delicious Handrawn.Delius.Delius Swash Caps.Delius Unicase.Della Respira.Denk One.Devonshire.Dhurjati.Didact Gothic.Diphylleia.Diplomata.Diplomata SC.Do Hyeon.Dokdo.Domine.Donegal One.Dongle.Doppio One.Dorsa.Dosis.DotGothic16.Dr Sugiyama.Duru Sans.Dynalight.EB Garamond.Eagle Lake.East Sea Dokdo.Eater.Economica.Eczar.Edu NSW ACT Foundation.Edu QLD Beginner.Edu SA Beginner.Edu TAS Beginner.Edu VIC WA NT Beginner.El Messiri.Electrolize.Elsie.Elsie Swash Caps.Emblema One.Emilys Candy.Encode Sans.Encode Sans Condensed.Encode Sans Expanded.Encode Sans SC.Encode Sans Semi Condensed.Encode Sans Semi Expanded.Engagement.Englebert.Enriqueta.Ephesis.Epilogue.Erica One.Esteban.Estonia.Euphoria Script.Ewert.Exo.Exo 2.Expletus Sans.Explora.Fahkwang.Familjen Grotesk.Fanwood Text.Farro.Farsan.Fascinate.Fascinate Inline.Faster One.Fasthand.Fauna One.Faustina.Federant.Federo.Felipa.Fenix.Festive.Figtree.Finger Paint.Finlandica.Fira Code.Fira Mono.Fira Sans.Fira Sans Condensed.Fira Sans Extra Condensed.Fjalla One.Fjord One.Flamenco.Flavors.Fleur De Leah.Flow Block.Flow Circular.Flow Rounded.Foldit.Fondamento.Fontdiner Swanky.Forum.Fragment Mono.Francois One.Frank Ruhl Libre.Fraunces.Freckle Face.Fredericka the Great.Fredoka.Freehand.Fresca.Frijole.Fruktur.Fugaz One.Fuggles.Fuzzy Bubbles.GFS Didot.GFS Neohellenic.Gabriela.Gaegu.Gafata.Galada.Galdeano.Galindo.Gamja Flower.Gantari.Gayathri.Gelasio.Gemunu Libre.Genos.Gentium Book Plus.Gentium Plus.Geo.Geologica.Georama.Geostar.Geostar Fill.Germania One.Gideon Roman.Gidugu.Gilda Display.Girassol.Give You Glory.Glass Antiqua.Glegoo.Gloock.Gloria Hallelujah.Glory.Gluten.Goblin One.Gochi Hand.Goldman.Golos Text.Gorditas.Gothic A1.Gotu.Goudy Bookletter 1911.Gowun Batang.Gowun Dodum.Graduate.Grand Hotel.Grandiflora One.Grandstander.Grape Nuts.Gravitas One.Great Vibes.Grechen Fuemen.Grenze.Grenze Gotisch.Grey Qo.Griffy.Gruppo.Gudea.Gugi.Gulzar.Gupter.Gurajada.Gwendolyn.Habibi.Hachi Maru Pop.Hahmlet.Halant.Hammersmith One.Hanalei.Hanalei Fill.Handjet.Handlee.Hanken Grotesk.Hanuman.Happy Monkey.Harmattan.Headland One.Heebo.Henny Penny.Hepta Slab.Herr Von Muellerhoff.Hi Melody.Hina Mincho.Hind.Hind Guntur.Hind Madurai.Hind Siliguri.Hind Vadodara.Holtwood One SC.Homemade Apple.Homenaje.Hubballi.Hubot Sans.Hurricane.IBM Plex Mono.IBM Plex Sans.IBM Plex Sans Arabic.IBM Plex Sans Condensed.IBM Plex Sans Devanagari.IBM Plex Sans Hebrew.IBM Plex Sans JP.IBM Plex Sans KR.IBM Plex Sans Thai.IBM Plex Sans Thai Looped.IBM Plex Serif.IM Fell DW Pica.IM Fell DW Pica SC.IM Fell Double Pica.IM Fell Double Pica SC.IM Fell English.IM Fell English SC.IM Fell French Canon.IM Fell French Canon SC.IM Fell Great Primer.IM Fell Great Primer SC.Ibarra Real Nova.Iceberg.Iceland.Imbue.Imperial Script.Imprima.Inclusive Sans.Inconsolata.Inder.Indie Flower.Ingrid Darling.Inika.Inknut Antiqua.Inria Sans.Inria Serif.Inspiration.Instrument Sans.Instrument Serif.Inter.Inter Tight.Irish Grover.Island Moments.Istok Web.Italiana.Italianno.Itim.Jacques Francois.Jacques Francois Shadow.Jaldi.JetBrains Mono.Jim Nightshade.Joan.Jockey One.Jolly Lodger.Jomhuria.Jomolhari.Josefin Sans.Josefin Slab.Jost.Joti One.Jua.Judson.Julee.Julius Sans One.Junge.Jura.Just Another Hand.Just Me Again Down Here.K2D.Kablammo.Kadwa.Kaisei Decol.Kaisei HarunoUmi.Kaisei Opti.Kaisei Tokumin.Kalam.Kameron.Kanit.Kantumruy Pro.Karantina.Karla.Karla Tamil Inclined.Karla Tamil Upright.Karma.Katibeh.Kaushan Script.Kavivanar.Kavoon.Kdam Thmor Pro.Keania One.Kelly Slab.Kenia.Khand.Khmer.Khula.Kings.Kirang Haerang.Kite One.Kiwi Maru.Klee One.Knewave.KoHo.Kodchasan.Koh Santepheap.Kolker Brush.Konkhmer Sleokchher.Kosugi.Kosugi Maru.Kotta One.Koulen.Kranky.Kreon.Kristi.Krona One.Krub.Kufam.Kulim Park.Kumar One.Kumar One Outline.Kumbh Sans.Kurale.La Belle Aurore.Labrada.Lacquer.Laila.Lakki Reddy.Lalezar.Lancelot.Langar.Lateef.Lato.Lavishly Yours.League Gothic.League Script.League Spartan.Leckerli One.Ledger.Lekton.Lemon.Lemonada.Lexend.Lexend Deca.Lexend Exa.Lexend Giga.Lexend Mega.Lexend Peta.Lexend Tera.Lexend Zetta.Libre Barcode 128.Libre Barcode 128 Text.Libre Barcode 39.Libre Barcode 39 Extended.Libre Barcode 39 Extended Text.Libre Barcode 39 Text.Libre Barcode EAN13 Text.Libre Baskerville.Libre Bodoni.Libre Caslon Display.Libre Caslon Text.Libre Franklin.Licorice.Life Savers.Lilita One.Lily Script One.Limelight.Linden Hill.Linefont.Lisu Bosa.Literata.Liu Jian Mao Cao.Livvic.Lobster.Lobster Two.Londrina Outline.Londrina Shadow.Londrina Sketch.Londrina Solid.Long Cang.Lora.Love Light.Love Ya Like A Sister.Loved by the King.Lovers Quarrel.Luckiest Guy.Lugrasimo.Lumanosimo.Lunasima.Lusitana.Lustria.Luxurious Roman.Luxurious Script.M PLUS 1.M PLUS 1 Code.M PLUS 1p.M PLUS 2.M PLUS Code Latin.M PLUS Rounded 1c.Ma Shan Zheng.Macondo.Macondo Swash Caps.Mada.Madimi One.Magra.Maiden Orange.Maitree.Major Mono Display.Mako.Mali.Mallanna.Mandali.Manjari.Manrope.Mansalva.Manuale.Marcellus.Marcellus SC.Marck Script.Margarine.Markazi Text.Marko One.Marmelad.Martel.Martel Sans.Martian Mono.Marvel.Mate.Mate SC.Material Icons.Material Icons Outlined.Material Icons Round.Material Icons Sharp.Material Icons Two Tone.Material Symbols.Material Symbols Outlined.Material Symbols Rounded.Material Symbols Sharp.Maven Pro.McLaren.Mea Culpa.Meddon.MedievalSharp.Medula One.Meera Inimai.Megrim.Meie Script.Meow Script.Merienda.Merriweather.Merriweather Sans.Metal.Metal Mania.Metamorphous.Metrophobic.Michroma.Milonga.Miltonian.Miltonian Tattoo.Mina.Mingzat.Miniver.Miriam Libre.Mirza.Miss Fajardose.Mitr.Mochiy Pop One.Mochiy Pop P One.Modak.Modern Antiqua.Mogra.Mohave.Moirai One.Molengo.Molle.Monda.Monofett.Monoton.Monsieur La Doulaise.Montaga.Montagu Slab.MonteCarlo.Montserrat.Montserrat Alternates.Montserrat Subrayada.Moo Lah Lah.Moon Dance.Moul.Moulpali.Mountains of Christmas.Mouse Memoirs.Mr Bedfort.Mr Dafoe.Mr De Haviland.Mrs Saint Delafield.Mrs Sheppards.Ms Madi.Mukta.Mukta Mahee.Mukta Malar.Mukta Vaani.Mulish.Murecho.MuseoModerno.My Soul.Mynerve.Mystery Quest.NTR.Nabla.Nanum Brush Script.Nanum Gothic.Nanum Gothic Coding.Nanum Myeongjo.Nanum Pen Script.Narnoor.Neonderthaw.Nerko One.Neucha.Neuton.New Rocker.New Tegomin.News Cycle.Newsreader.Niconne.Niramit.Nixie One.Nobile.Nokora.Norican.Nosifer.Notable.Nothing You Could Do.Noticia Text.Noto Color Emoji.Noto Emoji.Noto Kufi Arabic.Noto Music.Noto Naskh Arabic.Noto Nastaliq Urdu.Noto Rashi Hebrew.Noto Sans.Noto Sans Adlam.Noto Sans Adlam Unjoined.Noto Sans Anatolian Hieroglyphs.Noto Sans Arabic.Noto Sans Armenian.Noto Sans Avestan.Noto Sans Balinese.Noto Sans Bamum.Noto Sans Bassa Vah.Noto Sans Batak.Noto Sans Bengali.Noto Sans Bhaiksuki.Noto Sans Brahmi.Noto Sans Buginese.Noto Sans Buhid.Noto Sans Canadian Aboriginal.Noto Sans Carian.Noto Sans Caucasian Albanian.Noto Sans Chakma.Noto Sans Cham.Noto Sans Cherokee.Noto Sans Chorasmian.Noto Sans Coptic.Noto Sans Cuneiform.Noto Sans Cypriot.Noto Sans Cypro Minoan.Noto Sans Deseret.Noto Sans Devanagari.Noto Sans Display.Noto Sans Duployan.Noto Sans Egyptian Hieroglyphs.Noto Sans Elbasan.Noto Sans Elymaic.Noto Sans Ethiopic.Noto Sans Georgian.Noto Sans Glagolitic.Noto Sans Gothic.Noto Sans Grantha.Noto Sans Gujarati.Noto Sans Gunjala Gondi.Noto Sans Gurmukhi.Noto Sans HK.Noto Sans Hanifi Rohingya.Noto Sans Hanunoo.Noto Sans Hatran.Noto Sans Hebrew.Noto Sans Imperial Aramaic.Noto Sans Indic Siyaq Numbers.Noto Sans Inscriptional Pahlavi.Noto Sans Inscriptional Parthian.Noto Sans JP.Noto Sans Javanese.Noto Sans KR.Noto Sans Kaithi.Noto Sans Kannada.Noto Sans Kawi.Noto Sans Kayah Li.Noto Sans Kharoshthi.Noto Sans Khmer.Noto Sans Khojki.Noto Sans Khudawadi.Noto Sans Lao.Noto Sans Lao Looped.Noto Sans Lepcha.Noto Sans Limbu.Noto Sans Linear A.Noto Sans Linear B.Noto Sans Lisu.Noto Sans Lycian.Noto Sans Lydian.Noto Sans Mahajani.Noto Sans Malayalam.Noto Sans Mandaic.Noto Sans Manichaean.Noto Sans Marchen.Noto Sans Masaram Gondi.Noto Sans Math.Noto Sans Mayan Numerals.Noto Sans Medefaidrin.Noto Sans Meetei Mayek.Noto Sans Mende Kikakui.Noto Sans Meroitic.Noto Sans Miao.Noto Sans Modi.Noto Sans Mongolian.Noto Sans Mono.Noto Sans Mro.Noto Sans Multani.Noto Sans Myanmar.Noto Sans NKo.Noto Sans NKo Unjoined.Noto Sans Nabataean.Noto Sans Nag Mundari.Noto Sans Nandinagari.Noto Sans New Tai Lue.Noto Sans Newa.Noto Sans Nushu.Noto Sans Ogham.Noto Sans Ol Chiki.Noto Sans Old Hungarian.Noto Sans Old Italic.Noto Sans Old North Arabian.Noto Sans Old Permic.Noto Sans Old Persian.Noto Sans Old Sogdian.Noto Sans Old South Arabian.Noto Sans Old Turkic.Noto Sans Oriya.Noto Sans Osage.Noto Sans Osmanya.Noto Sans Pahawh Hmong.Noto Sans Palmyrene.Noto Sans Pau Cin Hau.Noto Sans Phags Pa.Noto Sans Phoenician.Noto Sans Psalter Pahlavi.Noto Sans Rejang.Noto Sans Runic.Noto Sans SC.Noto Sans Samaritan.Noto Sans Saurashtra.Noto Sans Sharada.Noto Sans Shavian.Noto Sans Siddham.Noto Sans SignWriting.Noto Sans Sinhala.Noto Sans Sogdian.Noto Sans Sora Sompeng.Noto Sans Soyombo.Noto Sans Sundanese.Noto Sans Syloti Nagri.Noto Sans Symbols.Noto Sans Symbols 2.Noto Sans Syriac.Noto Sans Syriac Eastern.Noto Sans Tagalog.Noto Sans Tagbanwa.Noto Sans Tai Le.Noto Sans Tai Tham.Noto Sans Tai Viet.Noto Sans Takri.Noto Sans Tamil.Noto Sans Tamil Supplement.Noto Sans Tangsa.Noto Sans Telugu.Noto Sans Thaana.Noto Sans Thai.Noto Sans Thai Looped.Noto Sans Tifinagh.Noto Sans Tirhuta.Noto Sans Ugaritic.Noto Sans Vai.Noto Sans Vithkuqi.Noto Sans Wancho.Noto Sans Warang Citi.Noto Sans Yi.Noto Sans Zanabazar Square.Noto Serif.Noto Serif Ahom.Noto Serif Armenian.Noto Serif Balinese.Noto Serif Bengali.Noto Serif Devanagari.Noto Serif Display.Noto Serif Dogra.Noto Serif Ethiopic.Noto Serif Georgian.Noto Serif Grantha.Noto Serif Gujarati.Noto Serif Gurmukhi.Noto Serif HK.Noto Serif Hebrew.Noto Serif JP.Noto Serif KR.Noto Serif Kannada.Noto Serif Khitan Small Script.Noto Serif Khmer.Noto Serif Lao.Noto Serif Malayalam.Noto Serif Myanmar.Noto Serif NP Hmong.Noto Serif Oriya.Noto Serif Ottoman Siyaq.Noto Serif SC.Noto Serif Sinhala.Noto Serif TC.Noto Serif Tamil.Noto Serif Tangut.Noto Serif Telugu.Noto Serif Thai.Noto Serif Tibetan.Noto Serif Toto.Noto Serif Vithkuqi.Noto Serif Yezidi.Noto Traditional Nushu.Nova Cut.Nova Flat.Nova Mono.Nova Oval.Nova Round.Nova Script.Nova Slim.Nova Square.Numans.Nunito.Nunito Sans.Nuosu SIL.Odibee Sans.Odor Mean Chey.Offside.Oi.Old Standard TT.Oldenburg.Ole.Oleo Script.Oleo Script Swash Caps.Onest.Oooh Baby.Open Sans.Oranienbaum.Orbit.Orbitron.Orelega One.Oregano.Orienta.Original Surfer.Oswald.Outfit.Over the Rainbow.Overlock.Overlock SC.Overpass.Overpass Mono.Ovo.Oxanium.Oxygen.Oxygen Mono.PT Mono.PT Sans.PT Sans Caption.PT Sans Narrow.PT Serif.PT Serif Caption.Pacifico.Padauk.Padyakke Expanded One.Palanquin.Palanquin Dark.Palette Mosaic.Pangolin.Paprika.Parisienne.Passero One.Passion One.Passions Conflict.Pathway Extreme.Pathway Gothic One.Patrick Hand.Patrick Hand SC.Pattaya.Patua One.Pavanam.Paytone One.Peddana.Peralta.Permanent Marker.Petemoss.Petit Formal Script.Petrona.Philosopher.Phudu.Piazzolla.Piedra.Pinyon Script.Pirata One.Pixelify Sans.Plaster.Play.Playball.Playfair Display.Playfair Display SC.Playpen Sans.Plus Jakarta Sans.Podkova.Poetsen One.Poiret One.Poller One.Poly.Pompiere.Pontano Sans.Poor Story.Poppins.Port Lligat Sans.Port Lligat Slab.Potta One.Pragati Narrow.Praise.Prata.Preahvihear.Press Start 2P.Pridi.Princess Sofia.Prociono.Prompt.Prosto One.Proza Libre.Public Sans.Puppies Play.Puritan.Purple Purse.Qahiri.Quando.Quantico.Quattrocento.Quattrocento Sans.Questrial.Quicksand.Quintessential.Qwigley.Qwitcher Grypen.REM.Racing Sans One.Radio Canada.Radley.Rajdhani.Rakkas.Raleway.Raleway Dots.Ramabhadra.Rambla.Rammetto One.Rampart One.Ranchers.Rancho.Ranga.Rasa.Rationale.Ravi Prakash.Readex Pro.Recursive.Red Hat Display.Red Hat Mono.Red Hat Text.Red Rose.Redacted.Redacted Script.Redressed.Reem Kufi.Reem Kufi Fun.Reem Kufi Ink.Reenie Beanie.Reggae One.Revalia.Rhodium Libre.Ribeye.Ribeye Marrow.Righteous.Risque.Road Rage.Roboto.Roboto Condensed.Roboto Flex.Roboto Mono.Roboto Serif.Roboto Slab.Rochester.Rock Salt.RocknRoll One.Rokkitt.Romanesco.Ropa Sans.Rosario.Rosarivo.Rouge Script.Rowdies.Rozha One.Rubik.Rubik Beastly.Rubik Bubbles.Rubik Burned.Rubik Dirt.Rubik Distressed.Rubik Gemstones.Rubik Glitch.Rubik Iso.Rubik Marker Hatch.Rubik Maze.Rubik Microbe.Rubik Mono One.Rubik Moonrocks.Rubik Pixels.Rubik Puddles.Rubik Spray Paint.Rubik Storm.Rubik Vinyl.Rubik Wet Paint.Ruda.Rufina.Ruge Boogie.Ruluko.Rum Raisin.Ruslan Display.Russo One.Ruthie.Ruwudu.Rye.STIX Two Math.STIX Two Text.Sacramento.Sahitya.Sail.Saira.Saira Condensed.Saira Extra Condensed.Saira Semi Condensed.Saira Stencil One.Salsa.Sanchez.Sancreek.Sankofa Display.Sansita.Sansita Swashed.Sarabun.Sarala.Sarina.Sarpanch.Sassy Frass.Satisfy.Sawarabi Gothic.Sawarabi Mincho.Scada.Scheherazade New.Schoolbell.Scope One.Seaweed Script.Secular One.Sedgwick Ave.Sedgwick Ave Display.Sen.Send Flowers.Sevillana.Seymour One.Shadows Into Light.Shadows Into Light Two.Shalimar.Shantell Sans.Shanti.Share.Share Tech.Share Tech Mono.Shippori Antique.Shippori Antique B1.Shippori Mincho.Shippori Mincho B1.Shojumaru.Short Stack.Shrikhand.Siemreap.Sigmar.Sigmar One.Signika.Signika Negative.Silkscreen.Simonetta.Single Day.Sintony.Sirin Stencil.Six Caps.Sixtyfour.Skranji.Slabo 13px.Slabo 27px.Slackey.Slackside One.Smokum.Smooch.Smooch Sans.Smythe.Sniglet.Snippet.Snowburst One.Sofadi One.Sofia.Sofia Sans.Sofia Sans Condensed.Sofia Sans Extra Condensed.Sofia Sans Semi Condensed.Solitreo.Solway.Song Myung.Sono.Sonsie One.Sora.Sorts Mill Goudy.Source Code Pro.Source Sans 3.Source Serif 4.Space Grotesk.Space Mono.Special Elite.Spectral.Spectral SC.Spicy Rice.Spinnaker.Spirax.Splash.Spline Sans.Spline Sans Mono.Squada One.Square Peg.Sree Krushnadevaraya.Sriracha.Srisakdi.Staatliches.Stalemate.Stalinist One.Stardos Stencil.Stick.Stick No Bills.Stint Ultra Condensed.Stint Ultra Expanded.Stoke.Strait.Style Script.Stylish.Sue Ellen Francisco.Suez One.Sulphur Point.Sumana.Sunflower.Sunshiney.Supermercado One.Sura.Suranna.Suravaram.Suwannaphum.Swanky and Moo Moo.Syncopate.Syne.Syne Mono.Syne Tactile.Tac One.Tagesschrift.Tai Heritage Pro.Tajawal.Tangerine.Tapestry.Taprom.Tauri.Taviraj.Teko.Telex.Tenali Ramakrishna.Tenor Sans.Text Me One.Texturina.Thasadith.The Girl Next Door.The Nautigal.Tienne.Tillana.Timmana.Tinos.Tiro Bangla.Tiro Devanagari Hindi.Tiro Devanagari Marathi.Tiro Devanagari Sanskrit.Tiro Gurmukhi.Tiro Kannada.Tiro Tamil.Tiro Telugu.Titan One.Titillium Web.Tomorrow.Tourney.Trade Winds.Train One.Trirong.Trispace.Trocchi.Trochut.Truculenta.Trykker.Tulpen One.Turret Road.Twinkle Star.Ubuntu.Ubuntu Condensed.Ubuntu Mono.Uchen.Ultra.Unbounded.Uncial Antiqua.Underdog.Unica One.UnifrakturCook.UnifrakturMaguntia.Unkempt.Unlock.Unna.Updock.Urbanist.VT323.Vampiro One.Varela.Varela Round.Varta.Vast Shadow.Vazirmatn.Vesper Libre.Viaoda Libre.Vibes.Vibur.Victor Mono.Vidaloka.Viga.Vina Sans.Voces.Volkhov.Vollkorn.Vollkorn SC.Voltaire.Vujahday Script.Waiting for the Sunrise.Wallpoet.Walter Turncoat.Warnes.Water Brush.Waterfall.Wavefont.Wellfleet.Wendy One.Whisper.WindSong.Wire One.Wix Madefor Display.Wix Madefor Text.Work Sans.Xanh Mono.Yaldevi.Yanone Kaffeesatz.Yantramanav.Yatra One.Yellowtail.Yeon Sung.Yeseva One.Yesteryear.Yomogi.Young Serif.Yrsa.Ysabeau.Ysabeau Infant.Ysabeau Office.Ysabeau SC.Yuji Boku.Yuji Hentaigana Akari.Yuji Hentaigana Akebono.Yuji Mai.Yuji Syuku.Yusei Magic.ZCOOL KuaiLe.ZCOOL QingKe HuangYou.ZCOOL XiaoWei.Zen Antique.Zen Antique Soft.Zen Dots.Zen Kaku Gothic Antique.Zen Kaku Gothic New.Zen Kurenaido.Zen Loop.Zen Maru Gothic.Zen Old Mincho.Zen Tokyo Zoo.Zeyada.Zhi Mang Xing.Zilla Slab.Zilla Slab Highlight".split(".");
//#endregion
//#region src/components/toolbar-number-scrubber.tsx
function Xs({ value: e, min: t, max: n, onChange: r, ariaLabel: i, title: a, editTitle: o, icon: s }) {
	let [c, l] = X(!1), [u, d] = X(""), f = Y(null), p = Y(null), m = U((e) => Math.max(t, Math.min(n, Math.round(e))), [t, n]);
	G(() => {
		c && (p.current?.focus(), p.current?.select());
	}, [c]);
	let h = U(() => {
		let e = Number(u.replace(/,/g, "").trim());
		Number.isFinite(e) && r(m(e)), l(!1);
	}, [
		m,
		u,
		r
	]), g = (t) => {
		c || t.button === 0 && (t.preventDefault(), f.current = {
			pointerId: t.pointerId,
			startX: t.clientX,
			startValue: e,
			active: !1
		});
	}, _ = (e) => {
		let t = f.current;
		if (!t || e.pointerId !== t.pointerId) return;
		let n = e.clientX - t.startX;
		if (!t.active) {
			if (Math.abs(n) < 4) return;
			t.active = !0, e.currentTarget.setPointerCapture(e.pointerId);
		}
		let i = e.shiftKey ? 2 : .5;
		r(m(t.startValue + n * i));
	}, v = (e) => {
		let t = f.current;
		if (!(!t || e.pointerId !== t.pointerId)) {
			if (t.active) try {
				e.currentTarget.releasePointerCapture(e.pointerId);
			} catch {}
			f.current = null;
		}
	}, y = Math.round(e);
	return c ? /* @__PURE__ */ B("input", {
		ref: p,
		type: "text",
		inputMode: "decimal",
		value: u,
		onChange: (e) => d(e.target.value),
		onBlur: h,
		onKeyDown: (e) => {
			e.key === "Enter" && (e.preventDefault(), h()), e.key === "Escape" && (e.preventDefault(), l(!1));
		},
		className: "h-8 w-16 rounded-lg border border-black/20 bg-white px-1.5 text-center text-xs tabular-nums text-neutral-900 outline-none focus:ring-2 focus:ring-black/15",
		"aria-label": o ?? i
	}) : /* @__PURE__ */ V("div", {
		role: "spinbutton",
		"aria-valuenow": y,
		"aria-valuemin": t,
		"aria-valuemax": n,
		"aria-label": i,
		title: a,
		className: ["flex h-8 cursor-ew-resize select-none items-center justify-center rounded-lg border border-black/10 bg-white px-2 text-xs tabular-nums text-neutral-900 touch-none hover:border-black/18", s ? "min-w-[4.5rem] gap-1.5" : "min-w-[2.75rem]"].join(" "),
		onPointerDown: g,
		onPointerMove: _,
		onPointerUp: v,
		onPointerCancel: v,
		onDoubleClick: (e) => {
			e.preventDefault(), d(String(y)), l(!0);
		},
		children: [s ? /* @__PURE__ */ B("span", {
			className: "text-neutral-600",
			children: s
		}) : null, /* @__PURE__ */ B("span", { children: y })]
	});
}
//#endregion
//#region src/components/font-size-scrubber.tsx
function Zs({ value: e, min: t = 8, max: n = 800, onChange: r }) {
	return /* @__PURE__ */ B(Xs, {
		value: e,
		min: t,
		max: n,
		onChange: r,
		ariaLabel: "Font size. Drag horizontally to change, double-click to type",
		editTitle: "Font size",
		title: "Drag to change size · Shift for faster steps · Double-click to type"
	});
}
//#endregion
//#region src/components/letter-spacing-scrubber.tsx
var Qs = 180;
function $s({ value: e, min: t = -40, max: n = 200, onChange: r, lineHeight: i, onLineHeightChange: a }) {
	let [o, s] = X(!1), c = Y(null), l = Y(null), { openUpward: u, shiftX: d } = Jn(o, c, Qs, U(() => l.current, []), "center");
	G(() => {
		if (!o) return;
		let e = (e) => {
			c.current?.contains(e.target) || s(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [o]);
	let f = `${Number(i.toFixed(2))}x`;
	return /* @__PURE__ */ V("div", {
		ref: c,
		className: "relative shrink-0",
		children: [/* @__PURE__ */ B("button", {
			type: "button",
			className: or(o),
			"aria-label": `Text spacing. Letter spacing ${e} pixels, line spacing ${f}`,
			title: "Text spacing",
			"aria-expanded": o,
			"aria-haspopup": "dialog",
			onClick: () => s((e) => !e),
			children: /* @__PURE__ */ B(M, {
				icon: w,
				size: 16,
				strokeWidth: 1.75
			})
		}), o ? /* @__PURE__ */ B("div", {
			ref: l,
			className: [
				"absolute left-1/2 z-[70] min-w-[13.5rem] p-3",
				u ? "bottom-full mb-2" : "top-full mt-2",
				lr
			].join(" "),
			style: { transform: `translateX(calc(-50% + ${d}px))` },
			children: /* @__PURE__ */ V("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ V("div", { children: [/* @__PURE__ */ V("div", {
					className: "mb-2 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ B("span", {
						className: "text-[13px] font-medium text-neutral-800",
						children: "Letter spacing"
					}), /* @__PURE__ */ V("span", {
						className: "text-[13px] tabular-nums text-neutral-600",
						children: [e, "px"]
					})]
				}), /* @__PURE__ */ B(nr, {
					min: t,
					max: n,
					value: e,
					onChange: r,
					"aria-label": "Letter spacing",
					"aria-valuemin": t,
					"aria-valuemax": n,
					"aria-valuenow": e,
					trackClassName: "w-full"
				})] }), /* @__PURE__ */ V("div", {
					className: "pt-1",
					children: [/* @__PURE__ */ V("div", {
						className: "mb-2 flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ B("span", {
							className: "text-[13px] font-medium text-neutral-800",
							children: "Line spacing"
						}), /* @__PURE__ */ B("span", {
							className: "text-[13px] tabular-nums text-neutral-600",
							children: f
						})]
					}), /* @__PURE__ */ B(nr, {
						min: .6,
						max: 4,
						step: .01,
						value: i,
						onChange: a,
						"aria-label": "Line spacing",
						"aria-valuemin": .6,
						"aria-valuemax": 4,
						"aria-valuenow": i,
						trackClassName: "w-full"
					})]
				})]
			})
		}) : null]
	});
}
//#endregion
//#region src/components/text-format-toolbar.tsx
var ec = 80, tc = [
	"left",
	"center",
	"right",
	"justify"
], nc = {
	left: "Align left",
	center: "Align center",
	right: "Align right",
	justify: "Justify"
}, rc = {
	left: re,
	center: se,
	right: Re,
	justify: fe
};
function ic(e) {
	return tc[(tc.indexOf(e) + 1) % tc.length];
}
var ac = 288;
function oc({ values: e, onChange: t, footerSlot: n }) {
	let [r, i] = X(!1), [a, o] = X(""), [s, c] = X(!1), [l, u] = X(224), d = Y(null), f = Y(null), p = Y(null);
	G(() => {
		r && _i(e.fontFamily);
	}, [r, e.fontFamily]), G(() => {
		if (!r) return;
		let e = (e) => {
			let t = e.target;
			d.current?.contains(t) || i(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [r]), G(() => {
		r || (c(!1), u(224));
	}, [r]);
	let m = J(() => {
		let e = a.trim().toLowerCase();
		if (!e) return Ys.slice(0, ec);
		let t = [];
		for (let n of Ys) if (n.toLowerCase().includes(e) && (t.push(n), t.length >= ec)) break;
		return t;
	}, [a]);
	zt(() => {
		if (!r || !f.current) return;
		function e() {
			let e = f.current, t = p.current;
			if (!e) return;
			let n = e.getBoundingClientRect(), r = window.innerHeight - n.bottom - 4 - 8, i = n.top - 4 - 8, a = t?.getBoundingClientRect().height ?? ac, o;
			o = i >= a ? !0 : r >= a ? !1 : i > r, c(o);
			let s = Math.max(96, (o ? i : r) - 56 - 4);
			u(Math.min(224, s));
		}
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [
		r,
		a,
		m.length
	]);
	let h = ic(e.textAlign), g = nc[e.textAlign], _ = nc[h], v = rc[e.textAlign];
	return /* @__PURE__ */ V(ir, {
		ref: d,
		role: "toolbar",
		"aria-label": "Text formatting",
		children: [
			/* @__PURE__ */ V("div", {
				ref: f,
				className: "relative flex shrink-0 items-center py-1 pl-2",
				children: [/* @__PURE__ */ B("button", {
					type: "button",
					className: "flex h-8 max-w-[9.5rem] items-center gap-1 truncate rounded-lg px-2 text-left text-xs font-medium text-neutral-800 outline-none hover:bg-black/[0.06] sm:max-w-[11rem]",
					onClick: () => i((e) => !e),
					"aria-expanded": r,
					"aria-haspopup": "listbox",
					children: /* @__PURE__ */ B("span", {
						className: "truncate",
						children: e.fontFamily
					})
				}), r ? /* @__PURE__ */ V("div", {
					ref: p,
					className: [
						"absolute left-0 w-[min(calc(100vw-2rem),280px)]",
						lr,
						s ? "bottom-full mb-1" : "top-full mt-1"
					].join(" "),
					children: [
						/* @__PURE__ */ B("div", {
							className: "border-b border-black/[0.06] p-2",
							children: /* @__PURE__ */ B("input", {
								type: "search",
								value: a,
								onChange: (e) => o(e.target.value),
								placeholder: "Search fonts…",
								className: "w-full rounded-lg border border-black/10 bg-neutral-50 px-2.5 py-1.5 text-sm text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 focus:border-black/20",
								autoFocus: !0
							})
						}),
						/* @__PURE__ */ B("ul", {
							className: "overflow-y-auto py-1",
							style: { maxHeight: l },
							role: "listbox",
							"aria-label": "Google Fonts",
							children: m.map((n) => /* @__PURE__ */ B("li", {
								role: "none",
								children: /* @__PURE__ */ B("button", {
									type: "button",
									role: "option",
									"aria-selected": n === e.fontFamily,
									className: "flex w-full items-center px-3 py-1.5 text-left text-sm text-neutral-900 hover:bg-black/[0.05]",
									style: { fontFamily: `"${n}", sans-serif` },
									onMouseEnter: () => _i(n),
									onClick: () => {
										_i(n), t({ fontFamily: n }), i(!1), o("");
									},
									children: n
								})
							}, n))
						}),
						m.length === 0 ? /* @__PURE__ */ B("p", {
							className: "px-3 py-4 text-center text-xs text-neutral-500",
							children: "No matches"
						}) : null
					]
				}) : null]
			}),
			/* @__PURE__ */ B(ar, {}),
			/* @__PURE__ */ V("div", {
				className: "flex min-h-8 min-w-0 flex-nowrap items-center gap-1 py-1 pr-2",
				children: [
					/* @__PURE__ */ V("div", {
						className: "flex min-w-0 shrink-0 flex-nowrap items-center gap-1 overflow-visible",
						children: [/* @__PURE__ */ B(Zs, {
							value: e.fontSize,
							min: 8,
							max: 800,
							onChange: (e) => t({ fontSize: e })
						}), /* @__PURE__ */ B($s, {
							value: e.letterSpacing,
							min: -40,
							max: 200,
							onChange: (e) => t({ letterSpacing: e }),
							lineHeight: e.lineHeight,
							onLineHeightChange: (e) => t({ lineHeight: e })
						})]
					}),
					/* @__PURE__ */ B("div", {
						className: "mx-0.5 h-5 w-px shrink-0 bg-black/10",
						"aria-hidden": !0
					}),
					/* @__PURE__ */ B(Bs, {
						compact: !0,
						value: e.fillStyle,
						onChange: (e) => t({ fillStyle: e }),
						title: "Text color and gradient",
						ariaLabel: "Text color and gradient"
					}),
					/* @__PURE__ */ B("div", {
						className: "mx-0.5 h-5 w-px shrink-0 bg-black/10",
						"aria-hidden": !0
					}),
					/* @__PURE__ */ V("div", {
						className: "flex min-h-8 min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-x-auto [scrollbar-width:thin]",
						children: [
							/* @__PURE__ */ B("button", {
								type: "button",
								className: or(!1),
								title: `${g}. Click to switch to ${_.toLowerCase()}.`,
								"aria-label": `${g}. Click to switch to ${_.toLowerCase()}.`,
								onClick: () => t({ textAlign: h }),
								children: /* @__PURE__ */ B(M, {
									icon: v,
									size: 18,
									strokeWidth: 1.75
								})
							}),
							/* @__PURE__ */ B("div", {
								className: "mx-0.5 h-5 w-px shrink-0 bg-black/10",
								"aria-hidden": !0
							}),
							/* @__PURE__ */ B("button", {
								type: "button",
								className: or(e.bold),
								title: "Bold",
								"aria-label": "Bold",
								onClick: () => t({ bold: !e.bold }),
								children: /* @__PURE__ */ B(M, {
									icon: N,
									size: 18,
									strokeWidth: 1.75
								})
							}),
							/* @__PURE__ */ B("button", {
								type: "button",
								className: or(e.italic),
								title: "Italic",
								"aria-label": "Italic",
								onClick: () => t({ italic: !e.italic }),
								children: /* @__PURE__ */ B(M, {
									icon: ft,
									size: 18,
									strokeWidth: 1.75
								})
							}),
							/* @__PURE__ */ B("button", {
								type: "button",
								className: or(e.underline),
								title: "Underline",
								"aria-label": "Underline",
								onClick: () => t({ underline: !e.underline }),
								children: /* @__PURE__ */ B(M, {
									icon: Tt,
									size: 18,
									strokeWidth: 1.75
								})
							})
						]
					})
				]
			}),
			n ? /* @__PURE__ */ V(jt, { children: [/* @__PURE__ */ B(ar, {}), /* @__PURE__ */ B("div", {
				className: "flex shrink-0 items-center py-1 pr-2",
				children: n
			})] }) : null
		]
	});
}
//#endregion
//#region src/components/scene-editor/editor-selection-toolbar-context.tsx
var sc = Ft(null);
function cc({ children: e, value: t }) {
	return /* @__PURE__ */ B(sc.Provider, {
		value: t,
		children: e
	});
}
function lc() {
	let e = W(sc);
	if (!e) throw Error("useEditorSelectionToolbar must be used within EditorSelectionToolbarProvider");
	return e;
}
//#endregion
//#region src/components/scene-editor/editor-selection-toolbar.tsx
function uc() {
	let { actions: e, refs: t, state: n } = lc(), r = L((e) => e.doc.artboard), i = L((e) => e.doc.bg), { applyArrowLineStyle: a, applyArrowPathType: o, applyArrowRoundedEnds: s, applyArrowStrokeWidth: c, applyBackgroundPicked: l, applyImageCornerRadius: u, applyPaintToSelection: d, applyPlaceholderFit: f, applyPlaceholderCornerRadius: p, applyPlaceholderBorderColor: m, applyPolygonSides: h, applyRectCornerRadius: _, applyStarPoints: v, onArtboardResize: y, onTextFormatChange: b, openImageCropModal: x, removeImageBackground: S, toggleBackgroundPopover: C } = e, { backgroundPopoverAnchorRef: w, backgroundPopoverPanelRef: T, selectionToolsRef: E, viewportRef: ee } = t, { backgroundActive: D, backgroundPopoverOpenUpward: O, backgroundPopoverShiftX: k, bgPopoverOpen: A, elementToolbarLockedDisplay: j, hasObjectSelected: N, imageCornerToolbar: te, imageRemovalState: ne, placeholderToolbar: P, ready: re, selectionFillPaint: ie, selectionEffectsFooterSlot: ae, shapeToolbarModel: F, textToolbarValues: oe } = n, se = re && !!oe, ce = re && !oe && !!F, le = re && !oe && !F && !!P, ue = re && N && !oe && !F && !P, de = re && D && !N && !oe && !F;
	return !se && !ce && !le && !ue && !de ? null : /* @__PURE__ */ V("div", {
		ref: E,
		className: "pointer-events-none absolute left-1/2 -top-3 z-30 -translate-x-1/2",
		children: [
			se ? /* @__PURE__ */ B("div", {
				className: "pointer-events-auto",
				children: /* @__PURE__ */ B(oc, {
					values: oe,
					onChange: b,
					footerSlot: ae
				})
			}) : null,
			ce ? /* @__PURE__ */ B("div", {
				className: "pointer-events-auto",
				children: /* @__PURE__ */ B(Js, {
					meta: F.meta,
					paintValue: F.paint,
					onPaintChange: d,
					onPolygonSides: h,
					onStarPoints: v,
					onArrowLineStyle: a,
					onArrowRoundedEnds: s,
					onArrowStrokeWidth: c,
					onArrowPathType: o,
					rectCornerRadius: F.rectCornerRadius,
					rectCornerRadiusMax: F.rectCornerRadiusMax,
					onRectCornerRadius: F.meta.kind === "rect" ? _ : void 0,
					footerSlot: ae
				})
			}) : null,
			le && P ? /* @__PURE__ */ B("div", {
				className: "pointer-events-auto",
				children: /* @__PURE__ */ B(Hs, {
					model: P,
					onFitChange: f,
					onCornerRadius: p,
					onBorderColorChange: m,
					footerSlot: ae
				})
			}) : null,
			ue ? /* @__PURE__ */ B("div", {
				className: "pointer-events-auto",
				children: /* @__PURE__ */ V(uo, {
					compact: !0,
					className: "pl-2 pr-2",
					"aria-label": "Selection",
					children: [
						ie ? /* @__PURE__ */ V(jt, { children: [/* @__PURE__ */ B(Bs, {
							compact: !0,
							value: ie,
							onChange: d,
							title: "Fill color and gradient",
							ariaLabel: "Fill color and gradient"
						}), /* @__PURE__ */ B(mo, { orientation: "vertical" })] }) : null,
						te ? /* @__PURE__ */ V(jt, { children: [
							/* @__PURE__ */ B(ro, {
								icon: g,
								label: "Crop image",
								disabled: j,
								className: j ? "pointer-events-none opacity-40" : "",
								onClick: x
							}),
							/* @__PURE__ */ B($a, {
								disabled: j || ne === "running",
								variant: "ghost",
								size: "xs",
								className: [
									"h-8 gap-1.5 rounded-lg px-2.5 text-[13px] font-medium",
									j ? "pointer-events-none opacity-40" : "",
									ne === "idle" ? "" : "bg-black/[0.08] text-neutral-900"
								].join(" "),
								onClick: S,
								"aria-label": "Remove background",
								title: "Remove background",
								iconBefore: /* @__PURE__ */ B(M, {
									icon: rt,
									size: 18,
									strokeWidth: 1.75
								}),
								children: ne === "running" ? "Removing…" : ne === "success" ? "Removed" : "Remove bg"
							}),
							/* @__PURE__ */ B(mo, { orientation: "vertical" }),
							/* @__PURE__ */ B(Rs, {
								value: te.radius,
								max: te.max,
								onChange: u,
								disabled: j
							}),
							/* @__PURE__ */ B(mo, { orientation: "vertical" })
						] }) : null,
						ae
					]
				})
			}) : null,
			de ? /* @__PURE__ */ V("div", {
				ref: w,
				className: "pointer-events-auto relative",
				children: [/* @__PURE__ */ V(uo, {
					compact: !0,
					className: "px-2 py-1",
					children: [
						/* @__PURE__ */ B(Fs, {
							width: r.width,
							height: r.height,
							onResize: y,
							viewportRef: ee
						}),
						/* @__PURE__ */ B(mo, { orientation: "vertical" }),
						/* @__PURE__ */ B($a, {
							variant: "ghost",
							size: "sm",
							className: "h-9 gap-2 rounded-lg px-3 text-sm",
							onClick: C,
							"aria-label": "Page background",
							"aria-expanded": A,
							iconBefore: /* @__PURE__ */ B("span", {
								className: "size-4 rounded-full border border-black/10",
								style: yr(i)
							}),
							children: "Background"
						})
					]
				}), A ? /* @__PURE__ */ B("div", {
					ref: T,
					className: ["absolute left-1/2 z-[60]", O ? "bottom-full mb-2" : "top-full mt-2"].join(" "),
					style: { transform: `translateX(calc(-50% + ${k}px))` },
					children: /* @__PURE__ */ B(br, {
						value: i,
						onChange: l
					})
				}) : null]
			}) : null
		]
	});
}
//#endregion
//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/can-promise.js
var dc = /* @__PURE__ */ Z(((e, t) => {
	t.exports = function() {
		return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
	};
})), fc = /* @__PURE__ */ Z(((e) => {
	var t, n = [
		0,
		26,
		44,
		70,
		100,
		134,
		172,
		196,
		242,
		292,
		346,
		404,
		466,
		532,
		581,
		655,
		733,
		815,
		901,
		991,
		1085,
		1156,
		1258,
		1364,
		1474,
		1588,
		1706,
		1828,
		1921,
		2051,
		2185,
		2323,
		2465,
		2611,
		2761,
		2876,
		3034,
		3196,
		3362,
		3532,
		3706
	];
	e.getSymbolSize = function(e) {
		if (!e) throw Error("\"version\" cannot be null or undefined");
		if (e < 1 || e > 40) throw Error("\"version\" should be in range from 1 to 40");
		return e * 4 + 17;
	}, e.getSymbolTotalCodewords = function(e) {
		return n[e];
	}, e.getBCHDigit = function(e) {
		let t = 0;
		for (; e !== 0;) t++, e >>>= 1;
		return t;
	}, e.setToSJISFunction = function(e) {
		if (typeof e != "function") throw Error("\"toSJISFunc\" is not a valid function.");
		t = e;
	}, e.isKanjiModeEnabled = function() {
		return t !== void 0;
	}, e.toSJIS = function(e) {
		return t(e);
	};
})), pc = /* @__PURE__ */ Z(((e) => {
	e.L = { bit: 1 }, e.M = { bit: 0 }, e.Q = { bit: 3 }, e.H = { bit: 2 };
	function t(t) {
		if (typeof t != "string") throw Error("Param is not a string");
		switch (t.toLowerCase()) {
			case "l":
			case "low": return e.L;
			case "m":
			case "medium": return e.M;
			case "q":
			case "quartile": return e.Q;
			case "h":
			case "high": return e.H;
			default: throw Error("Unknown EC Level: " + t);
		}
	}
	e.isValid = function(e) {
		return e && e.bit !== void 0 && e.bit >= 0 && e.bit < 4;
	}, e.from = function(n, r) {
		if (e.isValid(n)) return n;
		try {
			return t(n);
		} catch {
			return r;
		}
	};
})), mc = /* @__PURE__ */ Z(((e, t) => {
	function n() {
		this.buffer = [], this.length = 0;
	}
	n.prototype = {
		get: function(e) {
			let t = Math.floor(e / 8);
			return (this.buffer[t] >>> 7 - e % 8 & 1) == 1;
		},
		put: function(e, t) {
			for (let n = 0; n < t; n++) this.putBit((e >>> t - n - 1 & 1) == 1);
		},
		getLengthInBits: function() {
			return this.length;
		},
		putBit: function(e) {
			let t = Math.floor(this.length / 8);
			this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
		}
	}, t.exports = n;
})), hc = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		if (!e || e < 1) throw Error("BitMatrix size must be defined and greater than 0");
		this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e);
	}
	n.prototype.set = function(e, t, n, r) {
		let i = e * this.size + t;
		this.data[i] = n, r && (this.reservedBit[i] = !0);
	}, n.prototype.get = function(e, t) {
		return this.data[e * this.size + t];
	}, n.prototype.xor = function(e, t, n) {
		this.data[e * this.size + t] ^= n;
	}, n.prototype.isReserved = function(e, t) {
		return this.reservedBit[e * this.size + t];
	}, t.exports = n;
})), gc = /* @__PURE__ */ Z(((e) => {
	var t = fc().getSymbolSize;
	e.getRowColCoords = function(e) {
		if (e === 1) return [];
		let n = Math.floor(e / 7) + 2, r = t(e), i = r === 145 ? 26 : Math.ceil((r - 13) / (2 * n - 2)) * 2, a = [r - 7];
		for (let e = 1; e < n - 1; e++) a[e] = a[e - 1] - i;
		return a.push(6), a.reverse();
	}, e.getPositions = function(t) {
		let n = [], r = e.getRowColCoords(t), i = r.length;
		for (let e = 0; e < i; e++) for (let t = 0; t < i; t++) e === 0 && t === 0 || e === 0 && t === i - 1 || e === i - 1 && t === 0 || n.push([r[e], r[t]]);
		return n;
	};
})), _c = /* @__PURE__ */ Z(((e) => {
	var t = fc().getSymbolSize, n = 7;
	e.getPositions = function(e) {
		let r = t(e);
		return [
			[0, 0],
			[r - n, 0],
			[0, r - n]
		];
	};
})), vc = /* @__PURE__ */ Z(((e) => {
	e.Patterns = {
		PATTERN000: 0,
		PATTERN001: 1,
		PATTERN010: 2,
		PATTERN011: 3,
		PATTERN100: 4,
		PATTERN101: 5,
		PATTERN110: 6,
		PATTERN111: 7
	};
	var t = {
		N1: 3,
		N2: 3,
		N3: 40,
		N4: 10
	};
	e.isValid = function(e) {
		return e != null && e !== "" && !isNaN(e) && e >= 0 && e <= 7;
	}, e.from = function(t) {
		return e.isValid(t) ? parseInt(t, 10) : void 0;
	}, e.getPenaltyN1 = function(e) {
		let n = e.size, r = 0, i = 0, a = 0, o = null, s = null;
		for (let c = 0; c < n; c++) {
			i = a = 0, o = s = null;
			for (let l = 0; l < n; l++) {
				let n = e.get(c, l);
				n === o ? i++ : (i >= 5 && (r += t.N1 + (i - 5)), o = n, i = 1), n = e.get(l, c), n === s ? a++ : (a >= 5 && (r += t.N1 + (a - 5)), s = n, a = 1);
			}
			i >= 5 && (r += t.N1 + (i - 5)), a >= 5 && (r += t.N1 + (a - 5));
		}
		return r;
	}, e.getPenaltyN2 = function(e) {
		let n = e.size, r = 0;
		for (let t = 0; t < n - 1; t++) for (let i = 0; i < n - 1; i++) {
			let n = e.get(t, i) + e.get(t, i + 1) + e.get(t + 1, i) + e.get(t + 1, i + 1);
			(n === 4 || n === 0) && r++;
		}
		return r * t.N2;
	}, e.getPenaltyN3 = function(e) {
		let n = e.size, r = 0, i = 0, a = 0;
		for (let t = 0; t < n; t++) {
			i = a = 0;
			for (let o = 0; o < n; o++) i = i << 1 & 2047 | e.get(t, o), o >= 10 && (i === 1488 || i === 93) && r++, a = a << 1 & 2047 | e.get(o, t), o >= 10 && (a === 1488 || a === 93) && r++;
		}
		return r * t.N3;
	}, e.getPenaltyN4 = function(e) {
		let n = 0, r = e.data.length;
		for (let t = 0; t < r; t++) n += e.data[t];
		return Math.abs(Math.ceil(n * 100 / r / 5) - 10) * t.N4;
	};
	function n(t, n, r) {
		switch (t) {
			case e.Patterns.PATTERN000: return (n + r) % 2 == 0;
			case e.Patterns.PATTERN001: return n % 2 == 0;
			case e.Patterns.PATTERN010: return r % 3 == 0;
			case e.Patterns.PATTERN011: return (n + r) % 3 == 0;
			case e.Patterns.PATTERN100: return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
			case e.Patterns.PATTERN101: return n * r % 2 + n * r % 3 == 0;
			case e.Patterns.PATTERN110: return (n * r % 2 + n * r % 3) % 2 == 0;
			case e.Patterns.PATTERN111: return (n * r % 3 + (n + r) % 2) % 2 == 0;
			default: throw Error("bad maskPattern:" + t);
		}
	}
	e.applyMask = function(e, t) {
		let r = t.size;
		for (let i = 0; i < r; i++) for (let a = 0; a < r; a++) t.isReserved(a, i) || t.xor(a, i, n(e, a, i));
	}, e.getBestMask = function(t, n) {
		let r = Object.keys(e.Patterns).length, i = 0, a = Infinity;
		for (let o = 0; o < r; o++) {
			n(o), e.applyMask(o, t);
			let r = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
			e.applyMask(o, t), r < a && (a = r, i = o);
		}
		return i;
	};
})), yc = /* @__PURE__ */ Z(((e) => {
	var t = pc(), n = [
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		2,
		2,
		1,
		2,
		2,
		4,
		1,
		2,
		4,
		4,
		2,
		4,
		4,
		4,
		2,
		4,
		6,
		5,
		2,
		4,
		6,
		6,
		2,
		5,
		8,
		8,
		4,
		5,
		8,
		8,
		4,
		5,
		8,
		11,
		4,
		8,
		10,
		11,
		4,
		9,
		12,
		16,
		4,
		9,
		16,
		16,
		6,
		10,
		12,
		18,
		6,
		10,
		17,
		16,
		6,
		11,
		16,
		19,
		6,
		13,
		18,
		21,
		7,
		14,
		21,
		25,
		8,
		16,
		20,
		25,
		8,
		17,
		23,
		25,
		9,
		17,
		23,
		34,
		9,
		18,
		25,
		30,
		10,
		20,
		27,
		32,
		12,
		21,
		29,
		35,
		12,
		23,
		34,
		37,
		12,
		25,
		34,
		40,
		13,
		26,
		35,
		42,
		14,
		28,
		38,
		45,
		15,
		29,
		40,
		48,
		16,
		31,
		43,
		51,
		17,
		33,
		45,
		54,
		18,
		35,
		48,
		57,
		19,
		37,
		51,
		60,
		19,
		38,
		53,
		63,
		20,
		40,
		56,
		66,
		21,
		43,
		59,
		70,
		22,
		45,
		62,
		74,
		24,
		47,
		65,
		77,
		25,
		49,
		68,
		81
	], r = [
		7,
		10,
		13,
		17,
		10,
		16,
		22,
		28,
		15,
		26,
		36,
		44,
		20,
		36,
		52,
		64,
		26,
		48,
		72,
		88,
		36,
		64,
		96,
		112,
		40,
		72,
		108,
		130,
		48,
		88,
		132,
		156,
		60,
		110,
		160,
		192,
		72,
		130,
		192,
		224,
		80,
		150,
		224,
		264,
		96,
		176,
		260,
		308,
		104,
		198,
		288,
		352,
		120,
		216,
		320,
		384,
		132,
		240,
		360,
		432,
		144,
		280,
		408,
		480,
		168,
		308,
		448,
		532,
		180,
		338,
		504,
		588,
		196,
		364,
		546,
		650,
		224,
		416,
		600,
		700,
		224,
		442,
		644,
		750,
		252,
		476,
		690,
		816,
		270,
		504,
		750,
		900,
		300,
		560,
		810,
		960,
		312,
		588,
		870,
		1050,
		336,
		644,
		952,
		1110,
		360,
		700,
		1020,
		1200,
		390,
		728,
		1050,
		1260,
		420,
		784,
		1140,
		1350,
		450,
		812,
		1200,
		1440,
		480,
		868,
		1290,
		1530,
		510,
		924,
		1350,
		1620,
		540,
		980,
		1440,
		1710,
		570,
		1036,
		1530,
		1800,
		570,
		1064,
		1590,
		1890,
		600,
		1120,
		1680,
		1980,
		630,
		1204,
		1770,
		2100,
		660,
		1260,
		1860,
		2220,
		720,
		1316,
		1950,
		2310,
		750,
		1372,
		2040,
		2430
	];
	e.getBlocksCount = function(e, r) {
		switch (r) {
			case t.L: return n[(e - 1) * 4 + 0];
			case t.M: return n[(e - 1) * 4 + 1];
			case t.Q: return n[(e - 1) * 4 + 2];
			case t.H: return n[(e - 1) * 4 + 3];
			default: return;
		}
	}, e.getTotalCodewordsCount = function(e, n) {
		switch (n) {
			case t.L: return r[(e - 1) * 4 + 0];
			case t.M: return r[(e - 1) * 4 + 1];
			case t.Q: return r[(e - 1) * 4 + 2];
			case t.H: return r[(e - 1) * 4 + 3];
			default: return;
		}
	};
})), bc = /* @__PURE__ */ Z(((e) => {
	var t = new Uint8Array(512), n = new Uint8Array(256);
	(function() {
		let e = 1;
		for (let r = 0; r < 255; r++) t[r] = e, n[e] = r, e <<= 1, e & 256 && (e ^= 285);
		for (let e = 255; e < 512; e++) t[e] = t[e - 255];
	})(), e.log = function(e) {
		if (e < 1) throw Error("log(" + e + ")");
		return n[e];
	}, e.exp = function(e) {
		return t[e];
	}, e.mul = function(e, r) {
		return e === 0 || r === 0 ? 0 : t[n[e] + n[r]];
	};
})), xc = /* @__PURE__ */ Z(((e) => {
	var t = bc();
	e.mul = function(e, n) {
		let r = new Uint8Array(e.length + n.length - 1);
		for (let i = 0; i < e.length; i++) for (let a = 0; a < n.length; a++) r[i + a] ^= t.mul(e[i], n[a]);
		return r;
	}, e.mod = function(e, n) {
		let r = new Uint8Array(e);
		for (; r.length - n.length >= 0;) {
			let e = r[0];
			for (let i = 0; i < n.length; i++) r[i] ^= t.mul(n[i], e);
			let i = 0;
			for (; i < r.length && r[i] === 0;) i++;
			r = r.slice(i);
		}
		return r;
	}, e.generateECPolynomial = function(n) {
		let r = new Uint8Array([1]);
		for (let i = 0; i < n; i++) r = e.mul(r, new Uint8Array([1, t.exp(i)]));
		return r;
	};
})), Sc = /* @__PURE__ */ Z(((e, t) => {
	var n = xc();
	function r(e) {
		this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree);
	}
	r.prototype.initialize = function(e) {
		this.degree = e, this.genPoly = n.generateECPolynomial(this.degree);
	}, r.prototype.encode = function(e) {
		if (!this.genPoly) throw Error("Encoder not initialized");
		let t = new Uint8Array(e.length + this.degree);
		t.set(e);
		let r = n.mod(t, this.genPoly), i = this.degree - r.length;
		if (i > 0) {
			let e = new Uint8Array(this.degree);
			return e.set(r, i), e;
		}
		return r;
	}, t.exports = r;
})), Cc = /* @__PURE__ */ Z(((e) => {
	e.isValid = function(e) {
		return !isNaN(e) && e >= 1 && e <= 40;
	};
})), wc = /* @__PURE__ */ Z(((e) => {
	var t = "[0-9]+", n = "[A-Z $%*+\\-./:]+", r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
	r = r.replace(/u/g, "\\u");
	var i = "(?:(?![A-Z0-9 $%*+\\-./:]|" + r + ")(?:.|[\r\n]))+";
	e.KANJI = new RegExp(r, "g"), e.BYTE_KANJI = /* @__PURE__ */ RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), e.BYTE = new RegExp(i, "g"), e.NUMERIC = new RegExp(t, "g"), e.ALPHANUMERIC = new RegExp(n, "g");
	var a = RegExp("^" + r + "$"), o = RegExp("^" + t + "$"), s = /* @__PURE__ */ RegExp("^[A-Z0-9 $%*+\\-./:]+$");
	e.testKanji = function(e) {
		return a.test(e);
	}, e.testNumeric = function(e) {
		return o.test(e);
	}, e.testAlphanumeric = function(e) {
		return s.test(e);
	};
})), Tc = /* @__PURE__ */ Z(((e) => {
	var t = Cc(), n = wc();
	e.NUMERIC = {
		id: "Numeric",
		bit: 1,
		ccBits: [
			10,
			12,
			14
		]
	}, e.ALPHANUMERIC = {
		id: "Alphanumeric",
		bit: 2,
		ccBits: [
			9,
			11,
			13
		]
	}, e.BYTE = {
		id: "Byte",
		bit: 4,
		ccBits: [
			8,
			16,
			16
		]
	}, e.KANJI = {
		id: "Kanji",
		bit: 8,
		ccBits: [
			8,
			10,
			12
		]
	}, e.MIXED = { bit: -1 }, e.getCharCountIndicator = function(e, n) {
		if (!e.ccBits) throw Error("Invalid mode: " + e);
		if (!t.isValid(n)) throw Error("Invalid version: " + n);
		return n >= 1 && n < 10 ? e.ccBits[0] : n < 27 ? e.ccBits[1] : e.ccBits[2];
	}, e.getBestModeForData = function(t) {
		return n.testNumeric(t) ? e.NUMERIC : n.testAlphanumeric(t) ? e.ALPHANUMERIC : n.testKanji(t) ? e.KANJI : e.BYTE;
	}, e.toString = function(e) {
		if (e && e.id) return e.id;
		throw Error("Invalid mode");
	}, e.isValid = function(e) {
		return e && e.bit && e.ccBits;
	};
	function r(t) {
		if (typeof t != "string") throw Error("Param is not a string");
		switch (t.toLowerCase()) {
			case "numeric": return e.NUMERIC;
			case "alphanumeric": return e.ALPHANUMERIC;
			case "kanji": return e.KANJI;
			case "byte": return e.BYTE;
			default: throw Error("Unknown mode: " + t);
		}
	}
	e.from = function(t, n) {
		if (e.isValid(t)) return t;
		try {
			return r(t);
		} catch {
			return n;
		}
	};
})), Ec = /* @__PURE__ */ Z(((e) => {
	var t = fc(), n = yc(), r = pc(), i = Tc(), a = Cc(), o = 7973, s = t.getBCHDigit(o);
	function c(t, n, r) {
		for (let i = 1; i <= 40; i++) if (n <= e.getCapacity(i, r, t)) return i;
	}
	function l(e, t) {
		return i.getCharCountIndicator(e, t) + 4;
	}
	function u(e, t) {
		let n = 0;
		return e.forEach(function(e) {
			let r = l(e.mode, t);
			n += r + e.getBitsLength();
		}), n;
	}
	function d(t, n) {
		for (let r = 1; r <= 40; r++) if (u(t, r) <= e.getCapacity(r, n, i.MIXED)) return r;
	}
	e.from = function(e, t) {
		return a.isValid(e) ? parseInt(e, 10) : t;
	}, e.getCapacity = function(e, r, o) {
		if (!a.isValid(e)) throw Error("Invalid QR Code version");
		o === void 0 && (o = i.BYTE);
		let s = (t.getSymbolTotalCodewords(e) - n.getTotalCodewordsCount(e, r)) * 8;
		if (o === i.MIXED) return s;
		let c = s - l(o, e);
		switch (o) {
			case i.NUMERIC: return Math.floor(c / 10 * 3);
			case i.ALPHANUMERIC: return Math.floor(c / 11 * 2);
			case i.KANJI: return Math.floor(c / 13);
			case i.BYTE:
			default: return Math.floor(c / 8);
		}
	}, e.getBestVersionForData = function(e, t) {
		let n, i = r.from(t, r.M);
		if (Array.isArray(e)) {
			if (e.length > 1) return d(e, i);
			if (e.length === 0) return 1;
			n = e[0];
		} else n = e;
		return c(n.mode, n.getLength(), i);
	}, e.getEncodedBits = function(e) {
		if (!a.isValid(e) || e < 7) throw Error("Invalid QR Code version");
		let n = e << 12;
		for (; t.getBCHDigit(n) - s >= 0;) n ^= o << t.getBCHDigit(n) - s;
		return e << 12 | n;
	};
})), Dc = /* @__PURE__ */ Z(((e) => {
	var t = fc(), n = 1335, r = 21522, i = t.getBCHDigit(n);
	e.getEncodedBits = function(e, a) {
		let o = e.bit << 3 | a, s = o << 10;
		for (; t.getBCHDigit(s) - i >= 0;) s ^= n << t.getBCHDigit(s) - i;
		return (o << 10 | s) ^ r;
	};
})), Oc = /* @__PURE__ */ Z(((e, t) => {
	var n = Tc();
	function r(e) {
		this.mode = n.NUMERIC, this.data = e.toString();
	}
	r.getBitsLength = function(e) {
		return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
	}, r.prototype.getLength = function() {
		return this.data.length;
	}, r.prototype.getBitsLength = function() {
		return r.getBitsLength(this.data.length);
	}, r.prototype.write = function(e) {
		let t, n, r;
		for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), r = parseInt(n, 10), e.put(r, 10);
		let i = this.data.length - t;
		i > 0 && (n = this.data.substr(t), r = parseInt(n, 10), e.put(r, i * 3 + 1));
	}, t.exports = r;
})), kc = /* @__PURE__ */ Z(((e, t) => {
	var n = Tc(), r = /* @__PURE__ */ "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".split("");
	function i(e) {
		this.mode = n.ALPHANUMERIC, this.data = e;
	}
	i.getBitsLength = function(e) {
		return 11 * Math.floor(e / 2) + e % 2 * 6;
	}, i.prototype.getLength = function() {
		return this.data.length;
	}, i.prototype.getBitsLength = function() {
		return i.getBitsLength(this.data.length);
	}, i.prototype.write = function(e) {
		let t;
		for (t = 0; t + 2 <= this.data.length; t += 2) {
			let n = r.indexOf(this.data[t]) * 45;
			n += r.indexOf(this.data[t + 1]), e.put(n, 11);
		}
		this.data.length % 2 && e.put(r.indexOf(this.data[t]), 6);
	}, t.exports = i;
})), Ac = /* @__PURE__ */ Z(((e, t) => {
	var n = Tc();
	function r(e) {
		this.mode = n.BYTE, typeof e == "string" ? this.data = new TextEncoder().encode(e) : this.data = new Uint8Array(e);
	}
	r.getBitsLength = function(e) {
		return e * 8;
	}, r.prototype.getLength = function() {
		return this.data.length;
	}, r.prototype.getBitsLength = function() {
		return r.getBitsLength(this.data.length);
	}, r.prototype.write = function(e) {
		for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8);
	}, t.exports = r;
})), jc = /* @__PURE__ */ Z(((e, t) => {
	var n = Tc(), r = fc();
	function i(e) {
		this.mode = n.KANJI, this.data = e;
	}
	i.getBitsLength = function(e) {
		return e * 13;
	}, i.prototype.getLength = function() {
		return this.data.length;
	}, i.prototype.getBitsLength = function() {
		return i.getBitsLength(this.data.length);
	}, i.prototype.write = function(e) {
		let t;
		for (t = 0; t < this.data.length; t++) {
			let n = r.toSJIS(this.data[t]);
			if (n >= 33088 && n <= 40956) n -= 33088;
			else if (n >= 57408 && n <= 60351) n -= 49472;
			else throw Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
			n = (n >>> 8 & 255) * 192 + (n & 255), e.put(n, 13);
		}
	}, t.exports = i;
})), Mc = /* @__PURE__ */ Z(((e, t) => {
	var n = {
		single_source_shortest_paths: function(e, t, r) {
			var i = {}, a = {};
			a[t] = 0;
			var o = n.PriorityQueue.make();
			o.push(t, 0);
			for (var s, c, l, u, d, f, p, m, h; !o.empty();) for (l in s = o.pop(), c = s.value, u = s.cost, d = e[c] || {}, d) d.hasOwnProperty(l) && (f = d[l], p = u + f, m = a[l], h = a[l] === void 0, (h || m > p) && (a[l] = p, o.push(l, p), i[l] = c));
			if (r !== void 0 && a[r] === void 0) {
				var g = [
					"Could not find a path from ",
					t,
					" to ",
					r,
					"."
				].join("");
				throw Error(g);
			}
			return i;
		},
		extract_shortest_path_from_predecessor_list: function(e, t) {
			for (var n = [], r = t; r;) n.push(r), e[r], r = e[r];
			return n.reverse(), n;
		},
		find_path: function(e, t, r) {
			var i = n.single_source_shortest_paths(e, t, r);
			return n.extract_shortest_path_from_predecessor_list(i, r);
		},
		PriorityQueue: {
			make: function(e) {
				var t = n.PriorityQueue, r = {}, i;
				for (i in e ||= {}, t) t.hasOwnProperty(i) && (r[i] = t[i]);
				return r.queue = [], r.sorter = e.sorter || t.default_sorter, r;
			},
			default_sorter: function(e, t) {
				return e.cost - t.cost;
			},
			push: function(e, t) {
				var n = {
					value: e,
					cost: t
				};
				this.queue.push(n), this.queue.sort(this.sorter);
			},
			pop: function() {
				return this.queue.shift();
			},
			empty: function() {
				return this.queue.length === 0;
			}
		}
	};
	t !== void 0 && (t.exports = n);
})), Nc = /* @__PURE__ */ Z(((e) => {
	var t = Tc(), n = Oc(), r = kc(), i = Ac(), a = jc(), o = wc(), s = fc(), c = Mc();
	function l(e) {
		return unescape(encodeURIComponent(e)).length;
	}
	function u(e, t, n) {
		let r = [], i;
		for (; (i = e.exec(n)) !== null;) r.push({
			data: i[0],
			index: i.index,
			mode: t,
			length: i[0].length
		});
		return r;
	}
	function d(e) {
		let n = u(o.NUMERIC, t.NUMERIC, e), r = u(o.ALPHANUMERIC, t.ALPHANUMERIC, e), i, a;
		return s.isKanjiModeEnabled() ? (i = u(o.BYTE, t.BYTE, e), a = u(o.KANJI, t.KANJI, e)) : (i = u(o.BYTE_KANJI, t.BYTE, e), a = []), n.concat(r, i, a).sort(function(e, t) {
			return e.index - t.index;
		}).map(function(e) {
			return {
				data: e.data,
				mode: e.mode,
				length: e.length
			};
		});
	}
	function f(e, o) {
		switch (o) {
			case t.NUMERIC: return n.getBitsLength(e);
			case t.ALPHANUMERIC: return r.getBitsLength(e);
			case t.KANJI: return a.getBitsLength(e);
			case t.BYTE: return i.getBitsLength(e);
		}
	}
	function p(e) {
		return e.reduce(function(e, t) {
			let n = e.length - 1 >= 0 ? e[e.length - 1] : null;
			return n && n.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e);
		}, []);
	}
	function m(e) {
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			switch (i.mode) {
				case t.NUMERIC:
					n.push([
						i,
						{
							data: i.data,
							mode: t.ALPHANUMERIC,
							length: i.length
						},
						{
							data: i.data,
							mode: t.BYTE,
							length: i.length
						}
					]);
					break;
				case t.ALPHANUMERIC:
					n.push([i, {
						data: i.data,
						mode: t.BYTE,
						length: i.length
					}]);
					break;
				case t.KANJI:
					n.push([i, {
						data: i.data,
						mode: t.BYTE,
						length: l(i.data)
					}]);
					break;
				case t.BYTE: n.push([{
					data: i.data,
					mode: t.BYTE,
					length: l(i.data)
				}]);
			}
		}
		return n;
	}
	function h(e, n) {
		let r = {}, i = { start: {} }, a = ["start"];
		for (let o = 0; o < e.length; o++) {
			let s = e[o], c = [];
			for (let e = 0; e < s.length; e++) {
				let l = s[e], u = "" + o + e;
				c.push(u), r[u] = {
					node: l,
					lastCount: 0
				}, i[u] = {};
				for (let e = 0; e < a.length; e++) {
					let o = a[e];
					r[o] && r[o].node.mode === l.mode ? (i[o][u] = f(r[o].lastCount + l.length, l.mode) - f(r[o].lastCount, l.mode), r[o].lastCount += l.length) : (r[o] && (r[o].lastCount = l.length), i[o][u] = f(l.length, l.mode) + 4 + t.getCharCountIndicator(l.mode, n));
				}
			}
			a = c;
		}
		for (let e = 0; e < a.length; e++) i[a[e]].end = 0;
		return {
			map: i,
			table: r
		};
	}
	function g(e, o) {
		let c, l = t.getBestModeForData(e);
		if (c = t.from(o, l), c !== t.BYTE && c.bit < l.bit) throw Error("\"" + e + "\" cannot be encoded with mode " + t.toString(c) + ".\n Suggested mode is: " + t.toString(l));
		switch (c === t.KANJI && !s.isKanjiModeEnabled() && (c = t.BYTE), c) {
			case t.NUMERIC: return new n(e);
			case t.ALPHANUMERIC: return new r(e);
			case t.KANJI: return new a(e);
			case t.BYTE: return new i(e);
		}
	}
	e.fromArray = function(e) {
		return e.reduce(function(e, t) {
			return typeof t == "string" ? e.push(g(t, null)) : t.data && e.push(g(t.data, t.mode)), e;
		}, []);
	}, e.fromString = function(t, n) {
		let r = h(m(d(t, s.isKanjiModeEnabled())), n), i = c.find_path(r.map, "start", "end"), a = [];
		for (let e = 1; e < i.length - 1; e++) a.push(r.table[i[e]].node);
		return e.fromArray(p(a));
	}, e.rawSplit = function(t) {
		return e.fromArray(d(t, s.isKanjiModeEnabled()));
	};
})), Pc = /* @__PURE__ */ Z(((e) => {
	var t = fc(), n = pc(), r = mc(), i = hc(), a = gc(), o = _c(), s = vc(), c = yc(), l = Sc(), u = Ec(), d = Dc(), f = Tc(), p = Nc();
	function m(e, t) {
		let n = e.size, r = o.getPositions(t);
		for (let t = 0; t < r.length; t++) {
			let i = r[t][0], a = r[t][1];
			for (let t = -1; t <= 7; t++) if (!(i + t <= -1 || n <= i + t)) for (let r = -1; r <= 7; r++) a + r <= -1 || n <= a + r || (t >= 0 && t <= 6 && (r === 0 || r === 6) || r >= 0 && r <= 6 && (t === 0 || t === 6) || t >= 2 && t <= 4 && r >= 2 && r <= 4 ? e.set(i + t, a + r, !0, !0) : e.set(i + t, a + r, !1, !0));
		}
	}
	function h(e) {
		let t = e.size;
		for (let n = 8; n < t - 8; n++) {
			let t = n % 2 == 0;
			e.set(n, 6, t, !0), e.set(6, n, t, !0);
		}
	}
	function g(e, t) {
		let n = a.getPositions(t);
		for (let t = 0; t < n.length; t++) {
			let r = n[t][0], i = n[t][1];
			for (let t = -2; t <= 2; t++) for (let n = -2; n <= 2; n++) t === -2 || t === 2 || n === -2 || n === 2 || t === 0 && n === 0 ? e.set(r + t, i + n, !0, !0) : e.set(r + t, i + n, !1, !0);
		}
	}
	function _(e, t) {
		let n = e.size, r = u.getEncodedBits(t), i, a, o;
		for (let t = 0; t < 18; t++) i = Math.floor(t / 3), a = t % 3 + n - 8 - 3, o = (r >> t & 1) == 1, e.set(i, a, o, !0), e.set(a, i, o, !0);
	}
	function v(e, t, n) {
		let r = e.size, i = d.getEncodedBits(t, n), a, o;
		for (a = 0; a < 15; a++) o = (i >> a & 1) == 1, a < 6 ? e.set(a, 8, o, !0) : a < 8 ? e.set(a + 1, 8, o, !0) : e.set(r - 15 + a, 8, o, !0), a < 8 ? e.set(8, r - a - 1, o, !0) : a < 9 ? e.set(8, 15 - a - 1 + 1, o, !0) : e.set(8, 15 - a - 1, o, !0);
		e.set(r - 8, 8, 1, !0);
	}
	function y(e, t) {
		let n = e.size, r = -1, i = n - 1, a = 7, o = 0;
		for (let s = n - 1; s > 0; s -= 2) for (s === 6 && s--;;) {
			for (let n = 0; n < 2; n++) if (!e.isReserved(i, s - n)) {
				let r = !1;
				o < t.length && (r = (t[o] >>> a & 1) == 1), e.set(i, s - n, r), a--, a === -1 && (o++, a = 7);
			}
			if (i += r, i < 0 || n <= i) {
				i -= r, r = -r;
				break;
			}
		}
	}
	function b(e, n, i) {
		let a = new r();
		i.forEach(function(t) {
			a.put(t.mode.bit, 4), a.put(t.getLength(), f.getCharCountIndicator(t.mode, e)), t.write(a);
		});
		let o = (t.getSymbolTotalCodewords(e) - c.getTotalCodewordsCount(e, n)) * 8;
		for (a.getLengthInBits() + 4 <= o && a.put(0, 4); a.getLengthInBits() % 8 != 0;) a.putBit(0);
		let s = (o - a.getLengthInBits()) / 8;
		for (let e = 0; e < s; e++) a.put(e % 2 ? 17 : 236, 8);
		return x(a, e, n);
	}
	function x(e, n, r) {
		let i = t.getSymbolTotalCodewords(n), a = i - c.getTotalCodewordsCount(n, r), o = c.getBlocksCount(n, r), s = o - i % o, u = Math.floor(i / o), d = Math.floor(a / o), f = d + 1, p = u - d, m = new l(p), h = 0, g = Array(o), _ = Array(o), v = 0, y = new Uint8Array(e.buffer);
		for (let e = 0; e < o; e++) {
			let t = e < s ? d : f;
			g[e] = y.slice(h, h + t), _[e] = m.encode(g[e]), h += t, v = Math.max(v, t);
		}
		let b = new Uint8Array(i), x = 0, S, C;
		for (S = 0; S < v; S++) for (C = 0; C < o; C++) S < g[C].length && (b[x++] = g[C][S]);
		for (S = 0; S < p; S++) for (C = 0; C < o; C++) b[x++] = _[C][S];
		return b;
	}
	function S(e, n, r, a) {
		let o;
		if (Array.isArray(e)) o = p.fromArray(e);
		else if (typeof e == "string") {
			let t = n;
			if (!t) {
				let n = p.rawSplit(e);
				t = u.getBestVersionForData(n, r);
			}
			o = p.fromString(e, t || 40);
		} else throw Error("Invalid data");
		let c = u.getBestVersionForData(o, r);
		if (!c) throw Error("The amount of data is too big to be stored in a QR Code");
		if (!n) n = c;
		else if (n < c) throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + c + ".\n");
		let l = b(n, r, o), d = new i(t.getSymbolSize(n));
		return m(d, n), h(d), g(d, n), v(d, r, 0), n >= 7 && _(d, n), y(d, l), isNaN(a) && (a = s.getBestMask(d, v.bind(null, d, r))), s.applyMask(a, d), v(d, r, a), {
			modules: d,
			version: n,
			errorCorrectionLevel: r,
			maskPattern: a,
			segments: o
		};
	}
	e.create = function(e, r) {
		if (e === void 0 || e === "") throw Error("No input text");
		let i = n.M, a, o;
		return r !== void 0 && (i = n.from(r.errorCorrectionLevel, n.M), a = u.from(r.version), o = s.from(r.maskPattern), r.toSJISFunc && t.setToSJISFunction(r.toSJISFunc)), S(e, a, i, o);
	};
})), Fc = /* @__PURE__ */ Z(((e) => {
	function t(e) {
		if (typeof e == "number" && (e = e.toString()), typeof e != "string") throw Error("Color should be defined as hex string");
		let t = e.slice().replace("#", "").split("");
		if (t.length < 3 || t.length === 5 || t.length > 8) throw Error("Invalid hex color: " + e);
		(t.length === 3 || t.length === 4) && (t = Array.prototype.concat.apply([], t.map(function(e) {
			return [e, e];
		}))), t.length === 6 && t.push("F", "F");
		let n = parseInt(t.join(""), 16);
		return {
			r: n >> 24 & 255,
			g: n >> 16 & 255,
			b: n >> 8 & 255,
			a: n & 255,
			hex: "#" + t.slice(0, 6).join("")
		};
	}
	e.getOptions = function(e) {
		e ||= {}, e.color ||= {};
		let n = e.margin === void 0 || e.margin === null || e.margin < 0 ? 4 : e.margin, r = e.width && e.width >= 21 ? e.width : void 0, i = e.scale || 4;
		return {
			width: r,
			scale: r ? 4 : i,
			margin: n,
			color: {
				dark: t(e.color.dark || "#000000ff"),
				light: t(e.color.light || "#ffffffff")
			},
			type: e.type,
			rendererOpts: e.rendererOpts || {}
		};
	}, e.getScale = function(e, t) {
		return t.width && t.width >= e + t.margin * 2 ? t.width / (e + t.margin * 2) : t.scale;
	}, e.getImageWidth = function(t, n) {
		let r = e.getScale(t, n);
		return Math.floor((t + n.margin * 2) * r);
	}, e.qrToImageData = function(t, n, r) {
		let i = n.modules.size, a = n.modules.data, o = e.getScale(i, r), s = Math.floor((i + r.margin * 2) * o), c = r.margin * o, l = [r.color.light, r.color.dark];
		for (let e = 0; e < s; e++) for (let n = 0; n < s; n++) {
			let u = (e * s + n) * 4, d = r.color.light;
			if (e >= c && n >= c && e < s - c && n < s - c) {
				let t = Math.floor((e - c) / o), r = Math.floor((n - c) / o);
				d = l[+!!a[t * i + r]];
			}
			t[u++] = d.r, t[u++] = d.g, t[u++] = d.b, t[u] = d.a;
		}
	};
})), Ic = /* @__PURE__ */ Z(((e) => {
	var t = Fc();
	function n(e, t, n) {
		e.clearRect(0, 0, t.width, t.height), t.style ||= {}, t.height = n, t.width = n, t.style.height = n + "px", t.style.width = n + "px";
	}
	function r() {
		try {
			return document.createElement("canvas");
		} catch {
			throw Error("You need to specify a canvas element");
		}
	}
	e.render = function(e, i, a) {
		let o = a, s = i;
		o === void 0 && (!i || !i.getContext) && (o = i, i = void 0), i || (s = r()), o = t.getOptions(o);
		let c = t.getImageWidth(e.modules.size, o), l = s.getContext("2d"), u = l.createImageData(c, c);
		return t.qrToImageData(u.data, e, o), n(l, s, c), l.putImageData(u, 0, 0), s;
	}, e.renderToDataURL = function(t, n, r) {
		let i = r;
		i === void 0 && (!n || !n.getContext) && (i = n, n = void 0), i ||= {};
		let a = e.render(t, n, i), o = i.type || "image/png", s = i.rendererOpts || {};
		return a.toDataURL(o, s.quality);
	};
})), Lc = /* @__PURE__ */ Z(((e) => {
	var t = Fc();
	function n(e, t) {
		let n = e.a / 255, r = t + "=\"" + e.hex + "\"";
		return n < 1 ? r + " " + t + "-opacity=\"" + n.toFixed(2).slice(1) + "\"" : r;
	}
	function r(e, t, n) {
		let r = e + t;
		return n !== void 0 && (r += " " + n), r;
	}
	function i(e, t, n) {
		let i = "", a = 0, o = !1, s = 0;
		for (let c = 0; c < e.length; c++) {
			let l = Math.floor(c % t), u = Math.floor(c / t);
			!l && !o && (o = !0), e[c] ? (s++, c > 0 && l > 0 && e[c - 1] || (i += o ? r("M", l + n, .5 + u + n) : r("m", a, 0), a = 0, o = !1), l + 1 < t && e[c + 1] || (i += r("h", s), s = 0)) : a++;
		}
		return i;
	}
	e.render = function(e, r, a) {
		let o = t.getOptions(r), s = e.modules.size, c = e.modules.data, l = s + o.margin * 2, u = o.color.light.a ? "<path " + n(o.color.light, "fill") + " d=\"M0 0h" + l + "v" + l + "H0z\"/>" : "", d = "<path " + n(o.color.dark, "stroke") + " d=\"" + i(c, s, o.margin) + "\"/>", f = "viewBox=\"0 0 " + l + " " + l + "\"", p = "<svg xmlns=\"http://www.w3.org/2000/svg\" " + (o.width ? "width=\"" + o.width + "\" height=\"" + o.width + "\" " : "") + f + " shape-rendering=\"crispEdges\">" + u + d + "</svg>\n";
		return typeof a == "function" && a(null, p), p;
	};
})), Rc = /* @__PURE__ */ Zt((/* @__PURE__ */ Z(((e) => {
	var t = dc(), n = Pc(), r = Ic(), i = Lc();
	function a(e, r, i, a, o) {
		let s = [].slice.call(arguments, 1), c = s.length, l = typeof s[c - 1] == "function";
		if (!l && !t()) throw Error("Callback required as last argument");
		if (l) {
			if (c < 2) throw Error("Too few arguments provided");
			c === 2 ? (o = i, i = r, r = a = void 0) : c === 3 && (r.getContext && o === void 0 ? (o = a, a = void 0) : (o = a, a = i, i = r, r = void 0));
		} else {
			if (c < 1) throw Error("Too few arguments provided");
			return c === 1 ? (i = r, r = a = void 0) : c === 2 && !r.getContext && (a = i, i = r, r = void 0), new Promise(function(t, o) {
				try {
					t(e(n.create(i, a), r, a));
				} catch (e) {
					o(e);
				}
			});
		}
		try {
			let t = n.create(i, a);
			o(null, e(t, r, a));
		} catch (e) {
			o(e);
		}
	}
	e.create = n.create, e.toCanvas = a.bind(null, r.render), e.toDataURL = a.bind(null, r.renderToDataURL), e.toString = a.bind(null, function(e, t, n) {
		return i.render(e, n);
	});
})))(), 1), zc = 512, Bc = 1, Vc = "M", Hc = 400, Uc = {
	dark: "#0a0a0a",
	light: "#ffffff"
};
function Wc(e, t) {
	return Rc.toDataURL(e.trim(), {
		width: zc,
		margin: Bc,
		errorCorrectionLevel: Vc,
		color: {
			dark: t.dark,
			light: t.light
		}
	});
}
function Gc({ open: e, onClose: t }) {
	let n = Fo(), [r, i] = X("menu"), [a, o] = X(""), [s, c] = X(null), [l, u] = X(null), [d, f] = X(!1), [p, m] = X({ ...Uc }), h = Y(0), g = U(() => {
		o(""), c(null), u(null), m({ ...Uc });
	}, []);
	G(() => {
		e && (i("menu"), g());
	}, [e, g]), G(() => {
		if (!e || r !== "qr-code") return;
		let t = a.trim();
		if (!t) {
			c(null), u(null);
			return;
		}
		let n = !1, i = window.setTimeout(() => {
			let e = ++h.current;
			Wc(t, p).then((t) => {
				n || e !== h.current || (c(t), u(null));
			}, () => {
				n || e !== h.current || (c(null), u("Could not build a QR code for this URL."));
			});
		}, 200);
		return () => {
			n = !0, window.clearTimeout(i);
		};
	}, [
		e,
		r,
		a,
		p
	]);
	let _ = async () => {
		let e = a.trim();
		if (e) {
			f(!0), u(null);
			try {
				let r = await Wc(e, p);
				await n.addImageFromUrl({
					url: r,
					origin: "center",
					width: Hc,
					height: Hc
				}), t();
			} catch {
				u("Could not add this QR code to the canvas.");
			} finally {
				f(!1);
			}
		}
	};
	return e ? /* @__PURE__ */ V("div", {
		"data-avnac-chrome": !0,
		className: [
			"pointer-events-auto fixed z-40 flex w-[min(100vw-1.5rem,340px)] max-h-[min(92dvh,720px)] flex-col overflow-hidden rounded-3xl border border-black/[0.08] bg-white/95 backdrop-blur-md",
			pt,
			Xe
		].join(" "),
		role: "dialog",
		"aria-label": "Apps",
		children: [/* @__PURE__ */ V("div", {
			className: "flex shrink-0 items-center justify-between border-b border-black/[0.06] px-3 py-2",
			children: [/* @__PURE__ */ V("div", {
				className: "flex min-w-0 items-center gap-2",
				children: [r === "menu" ? null : /* @__PURE__ */ B("button", {
					type: "button",
					className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-neutral-600 hover:bg-black/[0.06]",
					onClick: () => i("menu"),
					"aria-label": "Back to apps",
					children: /* @__PURE__ */ B(M, {
						icon: ye,
						size: 18,
						strokeWidth: 1.75
					})
				}), /* @__PURE__ */ B("span", {
					className: "truncate text-sm font-semibold text-neutral-800",
					children: r === "menu" ? "Apps" : "QR code"
				})]
			}), /* @__PURE__ */ B("button", {
				type: "button",
				className: "flex h-8 w-8 items-center justify-center rounded-lg text-neutral-600 hover:bg-black/[0.06]",
				onClick: t,
				"aria-label": "Close apps",
				children: /* @__PURE__ */ B(M, {
					icon: _e,
					size: 18,
					strokeWidth: 1.75
				})
			})]
		}), r === "menu" ? /* @__PURE__ */ B("div", {
			className: "flex flex-col gap-1 p-2",
			children: /* @__PURE__ */ V("button", {
				type: "button",
				onClick: () => i("qr-code"),
				className: "flex w-full items-center gap-3 rounded-2xl border border-black/[0.06] bg-white px-3 py-3 text-left transition-colors hover:bg-[var(--surface-subtle)]",
				children: [/* @__PURE__ */ B(M, {
					icon: F,
					size: 22,
					strokeWidth: 1.75,
					className: "shrink-0 text-neutral-700"
				}), /* @__PURE__ */ V("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ B("div", {
						className: "text-[13px] font-semibold text-neutral-900",
						children: "QR code"
					}), /* @__PURE__ */ B("div", {
						className: "text-[11.5px] text-neutral-500",
						children: "Encode a URL and place it on the artboard."
					})]
				})]
			})
		}) : /* @__PURE__ */ V("div", {
			className: "flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-3",
			children: [
				/* @__PURE__ */ V("label", {
					className: "block text-[11px] font-medium text-neutral-600",
					children: ["URL", /* @__PURE__ */ B("input", {
						type: "url",
						value: a,
						onChange: (e) => o(e.target.value),
						className: "mt-1 h-10 w-full rounded-xl border border-black/[0.08] bg-white px-2.5 text-[13px] text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/45",
						placeholder: "https://example.com",
						autoComplete: "url",
						inputMode: "url"
					})]
				}),
				/* @__PURE__ */ V("details", {
					className: "group rounded-xl border border-black/[0.08] bg-white",
					children: [/* @__PURE__ */ V("summary", {
						className: "flex cursor-pointer list-none items-center justify-between gap-3 px-3 py-3 [&::-webkit-details-marker]:hidden",
						children: [/* @__PURE__ */ B("span", {
							className: "text-[13px] font-semibold text-neutral-900",
							children: "Customize"
						}), /* @__PURE__ */ B("span", {
							className: "flex size-7 shrink-0 items-center justify-center text-neutral-500 transition-transform duration-200 group-open:rotate-180",
							"aria-hidden": !0,
							children: /* @__PURE__ */ B("svg", {
								width: "12",
								height: "12",
								viewBox: "0 0 12 12",
								fill: "none",
								xmlns: "http://www.w3.org/2000/svg",
								className: "shrink-0",
								children: /* @__PURE__ */ B("path", {
									d: "M2.5 4.25L6 7.75L9.5 4.25",
									stroke: "currentColor",
									strokeWidth: "1.5",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})
							})
						})]
					}), /* @__PURE__ */ V("div", {
						className: "border-t border-black/[0.06] px-3 pb-3 pt-1",
						children: [/* @__PURE__ */ V("label", {
							className: "flex cursor-pointer items-center justify-between gap-4 py-2.5",
							children: [/* @__PURE__ */ B("span", {
								className: "text-[13px] text-neutral-900",
								children: "Background color"
							}), /* @__PURE__ */ V("span", {
								className: "relative size-9 shrink-0",
								children: [/* @__PURE__ */ B("input", {
									type: "color",
									value: p.light,
									onChange: (e) => m((t) => ({
										...t,
										light: e.target.value
									})),
									className: "absolute inset-0 z-10 size-9 cursor-pointer opacity-0",
									"aria-label": "QR background color"
								}), /* @__PURE__ */ B("span", {
									className: "pointer-events-none block size-9 rounded-full border border-black/[0.12] bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]",
									style: { backgroundColor: p.light }
								})]
							})]
						}), /* @__PURE__ */ V("label", {
							className: "flex cursor-pointer items-center justify-between gap-4 py-2.5",
							children: [/* @__PURE__ */ B("span", {
								className: "text-[13px] text-neutral-900",
								children: "Foreground color"
							}), /* @__PURE__ */ V("span", {
								className: "relative size-9 shrink-0",
								children: [/* @__PURE__ */ B("input", {
									type: "color",
									value: p.dark,
									onChange: (e) => m((t) => ({
										...t,
										dark: e.target.value
									})),
									className: "absolute inset-0 z-10 size-9 cursor-pointer opacity-0",
									"aria-label": "QR foreground color"
								}), /* @__PURE__ */ B("span", {
									className: "pointer-events-none block size-9 rounded-full border border-black/[0.12] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]",
									style: { backgroundColor: p.dark }
								})]
							})]
						})]
					})]
				}),
				l ? /* @__PURE__ */ B("p", {
					className: "text-[12px] text-red-600",
					children: l
				}) : null,
				s ? /* @__PURE__ */ B("div", {
					className: "flex justify-center rounded-xl border border-black/[0.06] bg-white p-3",
					children: /* @__PURE__ */ B("img", {
						src: s,
						alt: "QR code preview",
						width: 200,
						height: 200,
						className: "size-[200px] max-w-full bg-white"
					})
				}) : /* @__PURE__ */ B("p", {
					className: "text-center text-[12px] text-neutral-500",
					children: "Enter a URL to see a live preview."
				}),
				/* @__PURE__ */ B("div", {
					className: "mt-auto border-t border-black/[0.06] pt-2",
					children: /* @__PURE__ */ B("button", {
						type: "button",
						disabled: d || !a.trim() || !s,
						onClick: () => void _(),
						className: "w-full rounded-xl bg-[var(--text)] px-3 py-2.5 text-[13px] font-medium text-white disabled:cursor-not-allowed disabled:opacity-50",
						children: d ? "Adding…" : "Add to canvas"
					})
				})
			]
		})]
	}) : null;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var Kc = Ft({});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/utils/use-constant.mjs
function qc(e) {
	let t = Y(null);
	return t.current === null && (t.current = e()), t.current;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var Jc = typeof window < "u" ? zt : G, Yc = /* @__PURE__ */ Ft(null);
//#endregion
//#region node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/array.mjs
function Xc(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function Zc(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
function Qc([ ...e], t, n) {
	let r = t < 0 ? e.length + t : t;
	if (r >= 0 && r < e.length) {
		let r = n < 0 ? e.length + n : n, [i] = e.splice(t, 1);
		e.splice(r, 0, i);
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/clamp.mjs
var $c = (e, t, n) => n > t ? t : n < e ? e : n;
//#endregion
//#region node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/format-error-message.mjs
function el(e, t) {
	return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/errors.mjs
var tl = () => {}, nl = () => {};
typeof process < "u" && process.env.NODE_ENV !== "production" && (tl = (e, t, n) => {
	!e && typeof console < "u" && console.warn(el(t, n));
}, nl = (e, t, n) => {
	if (!e) throw Error(el(t, n));
});
//#endregion
//#region node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/global-config.mjs
var rl = {}, il = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), al = (e) => typeof e == "object" && !!e, ol = (e) => /^0[^.\s]+$/u.test(e);
//#endregion
//#region node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/memo.mjs
/* @__NO_SIDE_EFFECTS__ */
function sl(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/noop.mjs
var cl = /* @__NO_SIDE_EFFECTS__ */ (e) => e, ll = (...e) => e.reduce((e, t) => (n) => t(e(n))), ul = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r ? (n - e) / r : 1;
}, dl = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return Xc(this.subscriptions, e), () => Zc(this.subscriptions, e);
	}
	notify(e, t, n) {
		let r = this.subscriptions.length;
		if (r) if (r === 1) this.subscriptions[0](e, t, n);
		else for (let i = 0; i < r; i++) {
			let r = this.subscriptions[i];
			r && r(e, t, n);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, fl = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, pl = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, ml = /* @__NO_SIDE_EFFECTS__ */ (e, t) => t ? 1e3 / t * e : 0, hl = /* @__PURE__ */ new Set();
function gl(e, t, n) {
	e || hl.has(t) || (console.warn(el(t, n)), hl.add(t));
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
var _l = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, vl = 1e-7, yl = 12;
function bl(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = _l(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > vl && ++s < yl);
	return o;
}
/* @__NO_SIDE_EFFECTS__ */
function xl(e, t, n, r) {
	if (e === t && n === r) return cl;
	let i = (t) => bl(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : _l(i(e), t, r);
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var Sl = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Cl = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => 1 - e(1 - t), wl = /* @__PURE__ */ xl(.33, 1.53, .69, .99), Tl = /* @__PURE__ */ Cl(wl), El = /* @__PURE__ */ Sl(Tl), Dl = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * Tl(e) : .5 * (2 - 2 ** (-10 * (e - 1))), Ol = (e) => 1 - Math.sin(Math.acos(e)), kl = /* @__PURE__ */ Cl(Ol), Al = /* @__PURE__ */ Sl(Ol), jl = /* @__PURE__ */ xl(.42, 0, 1, 1), Ml = /* @__PURE__ */ xl(0, 0, .58, 1), Nl = /* @__PURE__ */ xl(.42, 0, .58, 1), Pl = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] != "number", Fl = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] == "number", Il = {
	linear: cl,
	easeIn: jl,
	easeInOut: Nl,
	easeOut: Ml,
	circIn: Ol,
	circInOut: Al,
	circOut: kl,
	backIn: Tl,
	backInOut: El,
	backOut: wl,
	anticipate: Dl
}, Ll = (e) => typeof e == "string", Rl = (e) => {
	if (/* @__PURE__ */ Fl(e)) {
		nl(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
		let [t, n, r, i] = e;
		return /* @__PURE__ */ xl(t, n, r, i);
	} else if (Ll(e)) return nl(Il[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), Il[e];
	return e;
}, zl = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
], Bl = {
	value: null,
	addProjectionMetrics: null
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function Vl(e, t) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = !1, a = !1, o = /* @__PURE__ */ new WeakSet(), s = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, c = 0;
	function l(t) {
		o.has(t) && (u.schedule(t), e()), c++, t(s);
	}
	let u = {
		schedule: (e, t = !1, a = !1) => {
			let s = a && i ? n : r;
			return t && o.add(e), s.add(e), e;
		},
		cancel: (e) => {
			r.delete(e), o.delete(e);
		},
		process: (e) => {
			if (s = e, i) {
				a = !0;
				return;
			}
			i = !0;
			let o = n;
			n = r, r = o, n.forEach(l), t && Bl.value && Bl.value.frameloop[t].push(c), c = 0, n.clear(), i = !1, a && (a = !1, u.process(e));
		}
	};
	return u;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var Hl = 40;
function Ul(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = zl.reduce((e, n) => (e[n] = Vl(a, t ? n : void 0), e), {}), { setup: s, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: p, postRender: m } = o, h = () => {
		let a = rl.useManualTiming, o = a ? i.timestamp : performance.now();
		n = !1, a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, Hl), 1)), i.timestamp = o, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
	}, g = () => {
		n = !0, r = !0, i.isProcessing || e(h);
	};
	return {
		schedule: zl.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < zl.length; t++) o[zl[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: Wl, cancel: Gl, state: Kl, steps: ql } = /* @__PURE__ */ Ul(typeof requestAnimationFrame < "u" ? requestAnimationFrame : cl, !0), Jl;
function Yl() {
	Jl = void 0;
}
var Xl = {
	now: () => (Jl === void 0 && Xl.set(Kl.isProcessing || rl.useManualTiming ? Kl.timestamp : performance.now()), Jl),
	set: (e) => {
		Jl = e, queueMicrotask(Yl);
	}
}, Zl = {
	layout: 0,
	mainThread: 0,
	waapi: 0
}, Ql = (e) => (t) => typeof t == "string" && t.startsWith(e), $l = /* @__PURE__ */ Ql("--"), eu = /* @__PURE__ */ Ql("var(--"), tu = (e) => eu(e) ? nu.test(e.split("/*")[0].trim()) : !1, nu = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function ru(e) {
	return typeof e == "string" ? e.split("/*")[0].includes("var(--") : !1;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var iu = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, au = {
	...iu,
	transform: (e) => $c(0, 1, e)
}, ou = {
	...iu,
	default: 1
}, su = (e) => Math.round(e * 1e5) / 1e5, cu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function lu(e) {
	return e == null;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var uu = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, du = (e, t) => (n) => !!(typeof n == "string" && uu.test(n) && n.startsWith(e) || t && !lu(n) && Object.prototype.hasOwnProperty.call(n, t)), fu = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(cu);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, pu = (e) => $c(0, 255, e), mu = {
	...iu,
	transform: (e) => Math.round(pu(e))
}, hu = {
	test: /* @__PURE__ */ du("rgb", "red"),
	parse: /* @__PURE__ */ fu("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + mu.transform(e) + ", " + mu.transform(t) + ", " + mu.transform(n) + ", " + su(au.transform(r)) + ")"
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function gu(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var _u = {
	test: /* @__PURE__ */ du("#"),
	parse: gu,
	transform: hu.transform
}, vu = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), yu = /* @__PURE__ */ vu("deg"), bu = /* @__PURE__ */ vu("%"), $ = /* @__PURE__ */ vu("px"), xu = /* @__PURE__ */ vu("vh"), Su = /* @__PURE__ */ vu("vw"), Cu = {
	...bu,
	parse: (e) => bu.parse(e) / 100,
	transform: (e) => bu.transform(e * 100)
}, wu = {
	test: /* @__PURE__ */ du("hsl", "hue"),
	parse: /* @__PURE__ */ fu("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + bu.transform(su(t)) + ", " + bu.transform(su(n)) + ", " + su(au.transform(r)) + ")"
}, Tu = {
	test: (e) => hu.test(e) || _u.test(e) || wu.test(e),
	parse: (e) => hu.test(e) ? hu.parse(e) : wu.test(e) ? wu.parse(e) : _u.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? hu.transform(e) : wu.transform(e),
	getAnimatableNone: (e) => {
		let t = Tu.parse(e);
		return t.alpha = 0, Tu.transform(t);
	}
}, Eu = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function Du(e) {
	return isNaN(e) && typeof e == "string" && (e.match(cu)?.length || 0) + (e.match(Eu)?.length || 0) > 0;
}
var Ou = "number", ku = "color", Au = "var", ju = "var(", Mu = "${}", Nu = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Pu(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(Nu, (e) => (Tu.test(e) ? (r.color.push(a), i.push(ku), n.push(Tu.parse(e))) : e.startsWith(ju) ? (r.var.push(a), i.push(Au), n.push(e)) : (r.number.push(a), i.push(Ou), n.push(parseFloat(e))), ++a, Mu)).split(Mu),
		indexes: r,
		types: i
	};
}
function Fu(e) {
	return Pu(e).values;
}
function Iu({ split: e, types: t }) {
	let n = e.length;
	return (r) => {
		let i = "";
		for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
			let e = t[a];
			e === Ou ? i += su(r[a]) : e === ku ? i += Tu.transform(r[a]) : i += r[a];
		}
		return i;
	};
}
function Lu(e) {
	return Iu(Pu(e));
}
var Ru = (e) => typeof e == "number" ? 0 : Tu.test(e) ? Tu.getAnimatableNone(e) : e, zu = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : Ru(e);
function Bu(e) {
	let t = Pu(e);
	return Iu(t)(t.values.map((e, n) => zu(e, t.split[n])));
}
var Vu = {
	test: Du,
	parse: Fu,
	createTransformer: Lu,
	getAnimatableNone: Bu
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function Hu(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Uu({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = Hu(s, r, e + 1 / 3), a = Hu(s, r, e), o = Hu(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function Wu(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/utils/mix/number.mjs
var Gu = (e, t, n) => e + (t - e) * n, Ku = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, qu = [
	_u,
	hu,
	wu
], Ju = (e) => qu.find((t) => t.test(e));
function Yu(e) {
	let t = Ju(e);
	if (tl(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
	let n = t.parse(e);
	return t === wu && (n = Uu(n)), n;
}
var Xu = (e, t) => {
	let n = Yu(e), r = Yu(t);
	if (!n || !r) return Wu(e, t);
	let i = { ...n };
	return (e) => (i.red = Ku(n.red, r.red, e), i.green = Ku(n.green, r.green, e), i.blue = Ku(n.blue, r.blue, e), i.alpha = Gu(n.alpha, r.alpha, e), hu.transform(i));
}, Zu = new Set(["none", "hidden"]);
function Qu(e, t) {
	return Zu.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function $u(e, t) {
	return (n) => Gu(e, t, n);
}
function ed(e) {
	return typeof e == "number" ? $u : typeof e == "string" ? tu(e) ? Wu : Tu.test(e) ? Xu : id : Array.isArray(e) ? td : typeof e == "object" ? Tu.test(e) ? Xu : nd : Wu;
}
function td(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => ed(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function nd(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = ed(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function rd(e, t) {
	let n = [], r = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < t.values.length; i++) {
		let a = t.types[i], o = e.indexes[a][r[a]];
		n[i] = e.values[o] ?? 0, r[a]++;
	}
	return n;
}
var id = (e, t) => {
	let n = Vu.createTransformer(t), r = Pu(e), i = Pu(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Zu.has(e) && !i.values.length || Zu.has(t) && !r.values.length ? Qu(e, t) : ll(td(rd(r, i), i.values), n) : (tl(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), Wu(e, t));
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/utils/mix/index.mjs
function ad(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Gu(e, t, n) : ed(e)(e, t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var od = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => Wl.update(t, e),
		stop: () => Gl(t),
		now: () => Kl.isProcessing ? Kl.timestamp : Xl.now()
	};
}, sd = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, cd = 2e4;
function ld(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function ud(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(ld(r), cd);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: /* @__PURE__ */ pl(i)
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var dd = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
};
function fd(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var pd = 12;
function md(e, t, n) {
	let r = n;
	for (let n = 1; n < pd; n++) r -= e(r) / t(r);
	return r;
}
var hd = .001;
function gd({ duration: e = dd.duration, bounce: t = dd.bounce, velocity: n = dd.velocity, mass: r = dd.mass }) {
	let i, a;
	tl(e <= /* @__PURE__ */ fl(dd.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let o = 1 - t;
	o = $c(dd.minDamping, dd.maxDamping, o), e = $c(dd.minDuration, dd.maxDuration, /* @__PURE__ */ pl(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = fd(t, o), c = Math.exp(-i);
		return hd - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = fd(t ** 2, o);
		return (-i(t) + hd > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => {
		let r = Math.exp(-t * e), i = (t - n) * e + 1;
		return -hd + r * i;
	}, a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = md(i, a, s);
	if (e = /* @__PURE__ */ fl(e), isNaN(c)) return {
		stiffness: dd.stiffness,
		damping: dd.damping,
		duration: e
	};
	{
		let t = c ** 2 * r;
		return {
			stiffness: t,
			damping: o * 2 * Math.sqrt(r * t),
			duration: e
		};
	}
}
var _d = ["duration", "bounce"], vd = [
	"stiffness",
	"damping",
	"mass"
];
function yd(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function bd(e) {
	let t = {
		velocity: dd.velocity,
		stiffness: dd.stiffness,
		damping: dd.damping,
		mass: dd.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!yd(e, vd) && yd(e, _d)) if (t.velocity = 0, e.visualDuration) {
		let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * $c(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
		t = {
			...t,
			mass: dd.mass,
			stiffness: i,
			damping: a
		};
	} else {
		let n = gd({
			...e,
			velocity: 0
		});
		t = {
			...t,
			...n,
			mass: dd.mass
		}, t.isResolvedFromDuration = !0;
	}
	return t;
}
function xd(e = dd.visualDuration, t = dd.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = bd({
		...n,
		velocity: -/* @__PURE__ */ pl(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, _ = /* @__PURE__ */ pl(Math.sqrt(c / u)), v = Math.abs(g) < 5;
	r ||= v ? dd.restSpeed.granular : dd.restSpeed.default, i ||= v ? dd.restDelta.granular : dd.restDelta.default;
	let y, b, x, S, C, w;
	if (h < 1) x = fd(_, h), S = (m + h * _ * g) / x, y = (e) => o - Math.exp(-h * _ * e) * (S * Math.sin(x * e) + g * Math.cos(x * e)), C = h * _ * S + g * x, w = h * _ * g - S * x, b = (e) => Math.exp(-h * _ * e) * (C * Math.sin(x * e) + w * Math.cos(x * e));
	else if (h === 1) {
		y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
		let e = m + _ * g;
		b = (t) => Math.exp(-_ * t) * (_ * e * t - m);
	} else {
		let e = _ * Math.sqrt(h * h - 1);
		y = (t) => {
			let n = Math.exp(-h * _ * t), r = Math.min(e * t, 300);
			return o - n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e;
		};
		let t = (m + h * _ * g) / e, n = h * _ * t - g * e, r = h * _ * g - t * e;
		b = (t) => {
			let i = Math.exp(-h * _ * t), a = Math.min(e * t, 300);
			return i * (n * Math.sinh(a) + r * Math.cosh(a));
		};
	}
	let T = {
		calculatedDuration: p && d || null,
		velocity: (e) => /* @__PURE__ */ fl(b(e)),
		next: (e) => {
			if (!p && h < 1) {
				let t = Math.exp(-h * _ * e), n = Math.sin(x * e), a = Math.cos(x * e), c = o - t * (S * n + g * a), l = /* @__PURE__ */ fl(t * (C * n + w * a));
				return s.done = Math.abs(l) <= r && Math.abs(o - c) <= i, s.value = s.done ? o : c, s;
			}
			let t = y(e);
			if (p) s.done = e >= d;
			else {
				let n = /* @__PURE__ */ fl(b(e));
				s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
			}
			return s.value = s.done ? o : t, s;
		},
		toString: () => {
			let e = Math.min(ld(T), cd), t = sd((t) => T.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return T;
}
xd.applyToOptions = (e) => {
	let t = ud(e, 100, xd);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ fl(t.duration), e.type = "keyframes", e;
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var Sd = 5;
function Cd(e, t, n) {
	let r = Math.max(t - Sd, 0);
	return /* @__PURE__ */ ml(n - e(r), t - r);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function wd({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = xd({
			keyframes: [f.value, m(f.value)],
			velocity: Cd(y, e, f.value),
			damping: i,
			stiffness: a,
			restDelta: l,
			restSpeed: u
		}));
	};
	return C(0), {
		calculatedDuration: null,
		next: (e) => {
			let t = !1;
			return !S && x === void 0 && (t = !0, b(e), C(e)), x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/utils/interpolate.mjs
function Td(e, t, n) {
	let r = [], i = n || rl.mix || ad, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = ll(Array.isArray(t) ? t[n] || cl : t, a)), r.push(a);
	}
	return r;
}
function Ed(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (nl(a === t.length, "Both input and output ranges must be the same length", "range-length"), a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = Td(t, r, i), c = s.length, l = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ ul(e[r], e[r + 1], n);
		return s[r](i);
	};
	return n ? (t) => l($c(e[0], e[a - 1], t)) : l;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function Dd(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ ul(0, t, r);
		e.push(Gu(n, 1, i));
	}
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function Od(e) {
	let t = [0];
	return Dd(t, e.length - 1), t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function kd(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function Ad(e, t) {
	return e.map(() => t || Nl).splice(0, e.length - 1);
}
function jd({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = /* @__PURE__ */ Pl(r) ? r.map(Rl) : Rl(r), a = {
		done: !1,
		value: t[0]
	}, o = Ed(kd(n && n.length === t.length ? n : Od(t), e), t, { ease: Array.isArray(i) ? i : Ad(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var Md = (e) => e !== null;
function Nd(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter(Md), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var Pd = {
	decay: wd,
	inertia: wd,
	tween: jd,
	keyframes: jd,
	spring: xd
};
function Fd(e) {
	typeof e.type == "string" && (e.type = Pd[e.type]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var Id = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((e) => {
			this.resolve = e;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
}, Ld = (e) => e / 100, Rd = class extends Id {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
			done: !1,
			value: void 0
		}, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== Xl.now() && this.tick(Xl.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, Zl.mainThread++, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		Fd(e);
		let { type: t = jd, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || jd;
		process.env.NODE_ENV !== "production" && s !== jd && nl(o.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${o}`, "spring-two-frames"), s !== jd && typeof o[0] != "number" && (this.mixKeyframes = ll(Ld, ad(o[0], o[1])), o = [0, 100]);
		let c = s({
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = ld(c));
		let { calculatedDuration: l } = c;
		this.calculatedDuration = l, this.resolvedDuration = l + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = c;
	}
	updateTime(e) {
		let t = Math.round(e - this.startTime) * this.playbackSpeed;
		this.holdTime === null ? this.currentTime = t : this.currentTime = this.holdTime;
	}
	tick(e, t = !1) {
		let { generator: n, totalDuration: r, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: o, calculatedDuration: s } = this;
		if (this.startTime === null) return n.next(0);
		let { delay: c = 0, keyframes: l, repeat: u, repeatType: d, repeatDelay: f, type: p, onUpdate: m, finalKeyframe: h } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
		let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
		this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
		let v = this.currentTime, y = n;
		if (u) {
			let e = Math.min(this.currentTime, r) / o, t = Math.floor(e), n = e % 1;
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, u + 1), t % 2 && (d === "reverse" ? (n = 1 - n, f && (n -= f / o)) : d === "mirror" && (y = a)), v = $c(0, 1, n) * o;
		}
		let b;
		_ ? (this.delayState.value = l[0], b = this.delayState) : b = y.next(v), i && !_ && (b.value = i(b.value));
		let { done: x } = b;
		!_ && s !== null && (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
		let S = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
		return S && p !== wd && (b.value = Nd(l, this.options, h, this.speed)), m && m(b.value), S && this.finish(), b;
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	get duration() {
		return /* @__PURE__ */ pl(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ pl(e);
	}
	get time() {
		return /* @__PURE__ */ pl(this.currentTime);
	}
	set time(e) {
		e = /* @__PURE__ */ fl(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
	}
	getGeneratorVelocity() {
		let e = this.currentTime;
		if (e <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(e);
		let t = this.generator.next(e).value;
		return Cd((e) => this.generator.next(e).value, e, t);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let t = this.playbackSpeed !== e;
		t && this.driver && this.updateTime(Xl.now()), this.playbackSpeed = e, t && this.driver && (this.time = /* @__PURE__ */ pl(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = od, startTime: t } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? n : this.startTime = n - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(Xl.now()), this.holdTime = this.currentTime;
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, Zl.mainThread--;
	}
	stopDriver() {
		this.driver &&= (this.driver.stop(), void 0);
	}
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
	attachTimeline(e) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function zd(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var Bd = (e) => e * 180 / Math.PI, Vd = (e) => Ud(Bd(Math.atan2(e[1], e[0]))), Hd = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: Vd,
	rotateZ: Vd,
	skewX: (e) => Bd(Math.atan(e[1])),
	skewY: (e) => Bd(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Ud = (e) => (e %= 360, e < 0 && (e += 360), e), Wd = Vd, Gd = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), Kd = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), qd = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: Gd,
	scaleY: Kd,
	scale: (e) => (Gd(e) + Kd(e)) / 2,
	rotateX: (e) => Ud(Bd(Math.atan2(e[6], e[5]))),
	rotateY: (e) => Ud(Bd(Math.atan2(-e[2], e[0]))),
	rotateZ: Wd,
	rotate: Wd,
	skewX: (e) => Bd(Math.atan(e[4])),
	skewY: (e) => Bd(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Jd(e) {
	return +!!e.includes("scale");
}
function Yd(e, t) {
	if (!e || e === "none") return Jd(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = qd, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = Hd, i = t;
	}
	if (!i) return Jd(t);
	let a = r[t], o = i[1].split(",").map(Zd);
	return typeof a == "function" ? a(o) : o[a];
}
var Xd = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return Yd(n, t);
};
function Zd(e) {
	return parseFloat(e.trim());
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
var Qd = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
], $d = new Set(Qd), ef = (e) => e === iu || e === $, tf = new Set([
	"x",
	"y",
	"z"
]), nf = Qd.filter((e) => !tf.has(e));
function rf(e) {
	let t = [];
	return nf.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
	}), t;
}
var af = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: (e, { transform: t }) => Yd(t, "x"),
	y: (e, { transform: t }) => Yd(t, "y")
};
af.translateX = af.x, af.translateY = af.y;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var of = /* @__PURE__ */ new Set(), sf = !1, cf = !1, lf = !1;
function uf() {
	if (cf) {
		let e = Array.from(of).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = rf(e);
			t.length && (n.set(e, t), e.render());
		}), e.forEach((e) => e.measureInitialState()), t.forEach((e) => {
			e.render();
			let t = n.get(e);
			t && t.forEach(([t, n]) => {
				e.getValue(t)?.set(n);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	cf = !1, sf = !1, of.forEach((e) => e.complete(lf)), of.clear();
}
function df() {
	of.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (cf = !0);
	});
}
function ff() {
	lf = !0, df(), uf(), lf = !1;
}
var pf = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (of.add(this), sf || (sf = !0, Wl.read(df), Wl.resolveKeyframes(uf))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		if (e[0] === null) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = n.readValue(t, a);
				r != null && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		}
		zd(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), of.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (of.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, mf = (e) => e.startsWith("--");
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function hf(e, t, n) {
	mf(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var gf = {};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function _f(e, t) {
	let n = /* @__PURE__ */ sl(e);
	return () => gf[t] ?? n();
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var vf = /* @__PURE__ */ _f(() => window.ScrollTimeline !== void 0, "scrollTimeline"), yf = /* @__PURE__ */ _f(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), bf = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, xf = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /* @__PURE__ */ bf([
		0,
		.65,
		.55,
		1
	]),
	circOut: /* @__PURE__ */ bf([
		.55,
		0,
		1,
		.45
	]),
	backIn: /* @__PURE__ */ bf([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /* @__PURE__ */ bf([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function Sf(e, t) {
	if (e) return typeof e == "function" ? yf() ? sd(e, t) : "ease-out" : /* @__PURE__ */ Fl(e) ? bf(e) : Array.isArray(e) ? e.map((e) => Sf(e, t) || xf.easeOut) : xf[e];
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function Cf(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = Sf(s, i);
	Array.isArray(d) && (u.easing = d), Bl.value && Zl.waapi++;
	let f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? "linear" : d,
		fill: "both",
		iterations: a + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	l && (f.pseudoElement = l);
	let p = e.animate(u, f);
	return Bl.value && p.finished.finally(() => {
		Zl.waapi--;
	}), p;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function wf(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function Tf({ type: e, ...t }) {
	return wf(e) && yf() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var Ef = class extends Id {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, nl(typeof e.type != "string", "Mini animate() doesn't support \"type\" as a string.", "mini-spring");
		let c = Tf(e);
		this.animation = Cf(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = Nd(r, this.options, o, this.speed);
				this.updateMotionValue && this.updateMotionValue(e), hf(t, n, e), this.animation.cancel();
			}
			s?.(), this.notifyFinished();
		};
	}
	play() {
		this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		let { state: e } = this;
		e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		let e = this.options?.element;
		!this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
	}
	get duration() {
		let e = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ pl(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ pl(e);
	}
	get time() {
		return /* @__PURE__ */ pl(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		let t = this.finishedTime !== null;
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ fl(e), t && this.animation.pause();
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(e) {
		e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(e) {
		this.manualStartTime = this.animation.startTime = e;
	}
	attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && vf() ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), n && (this.animation.rangeEnd = n), cl) : r(this);
	}
}, Df = {
	anticipate: Dl,
	backInOut: El,
	circInOut: Al
};
function Of(e) {
	return e in Df;
}
function kf(e) {
	typeof e.ease == "string" && Of(e.ease) && (e.ease = Df[e.ease]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var Af = 10, jf = class extends Ef {
	constructor(e) {
		kf(e), Fd(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let o = new Rd({
			...a,
			autoplay: !1
		}), s = Math.max(Af, Xl.now() - this.startTime), c = $c(0, Af, s - Af), l = o.sample(s).value, { name: u } = this.options;
		i && u && hf(i, u, l), t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c), o.stop();
	}
}, Mf = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Vu.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function Nf(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Pf(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = Mf(i, t), s = Mf(a, t);
	return tl(o === s, `You are trying to animate ${t} from "${i}" to "${a}". "${o ? a : i}" is not an animatable value.`, "value-not-animatable"), !o || !s ? !1 : Nf(e) || (n === "spring" || wf(n)) && r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function Ff(e) {
	e.duration = 0, e.type = "keyframes";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var If = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), Lf = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Rf(e) {
	for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && Lf.test(e[t])) return !0;
	return !1;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var zf = new Set([
	"color",
	"backgroundColor",
	"outlineColor",
	"fill",
	"stroke",
	"borderColor",
	"borderTopColor",
	"borderRightColor",
	"borderBottomColor",
	"borderLeftColor"
]), Bf = /* @__PURE__ */ sl(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Vf(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s } = e;
	if (!(t?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
	return Bf() && n && (If.has(n) || zf.has(n) && Rf(s)) && (n !== "transform" || !l) && !c && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var Hf = 40, Uf = class extends Id {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: o, name: s, motionValue: c, element: l, ...u }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = Xl.now();
		let d = {
			autoplay: e,
			delay: t,
			type: n,
			repeat: r,
			repeatDelay: i,
			repeatType: a,
			name: s,
			motionValue: c,
			element: l,
			...u
		}, f = l?.KeyframeResolver || pf;
		this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
		this.resolvedAt = Xl.now();
		let u = !0;
		Pf(e, i, a, o) || (u = !1, (rl.instantAnimations || !s) && l?.(Nd(e, n, t)), e[0] = e[e.length - 1], Ff(n), n.repeat = 0);
		let d = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > Hf ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, f = u && !c && Vf(d), p = d.motionValue?.owner?.current, m;
		if (f) try {
			m = new jf({
				...d,
				element: p
			});
		} catch {
			m = new Rd(d);
		}
		else m = new Rd(d);
		m.finished.then(() => {
			this.notifyFinished();
		}).catch(cl), this.pendingTimeline &&= (this.stopTimeline = m.attachTimeline(this.pendingTimeline), void 0), this._animation = m;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), ff()), this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(e) {
		this.animation.time = e;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(e) {
		this.animation.speed = e;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(e) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function Wf(e, t, n, r = 0, i = 1) {
	let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t), o = e.size, s = (o - 1) * r;
	return typeof n == "function" ? n(a, o) : i === 1 ? a * r : s - a * r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
var Gf = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Kf(e) {
	let t = Gf.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
var qf = 4;
function Jf(e, t, n = 1) {
	nl(n <= qf, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	let [r, i] = Kf(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return il(e) ? parseFloat(e) : e;
	}
	return tu(i) ? Jf(i, t, n + 1) : i;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var Yf = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, Xf = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), Zf = {
	type: "keyframes",
	duration: .8
}, Qf = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, $f = (e, { keyframes: t }) => t.length > 2 ? Zf : $d.has(e) ? e.startsWith("scale") ? Xf(t[1]) : Yf : Qf;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function ep(e, t) {
	if (e?.inherit && t) {
		let { inherit: n, ...r } = e;
		return {
			...t,
			...r
		};
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function tp(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : ep(n, e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
var np = new Set([
	"when",
	"delay",
	"delayChildren",
	"staggerChildren",
	"staggerDirection",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from",
	"elapsed"
]);
function rp(e) {
	for (let t in e) if (!np.has(t)) return !0;
	return !1;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var ip = (e, t, n, r = {}, i, a) => (o) => {
	let s = tp(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
	l -= /* @__PURE__ */ fl(c);
	let u = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...s,
		delay: -l,
		onUpdate: (e) => {
			t.set(e), s.onUpdate && s.onUpdate(e);
		},
		onComplete: () => {
			o(), s.onComplete && s.onComplete();
		},
		name: e,
		motionValue: t,
		element: a ? void 0 : i
	};
	rp(s) || Object.assign(u, $f(e, u)), u.duration &&= /* @__PURE__ */ fl(u.duration), u.repeatDelay &&= /* @__PURE__ */ fl(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (Ff(u), u.delay === 0 && (d = !0)), (rl.instantAnimations || rl.skipAnimations || i?.shouldSkipAnimations || s.skipAnimations) && (d = !0, Ff(u), u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
		let e = Nd(u.keyframes, s);
		if (e !== void 0) {
			Wl.update(() => {
				u.onUpdate(e), u.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new Rd(u) : new Uf(u);
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function ap(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function op(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = ap(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = ap(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function sp(e, t, n) {
	let r = e.getProps();
	return op(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var cp = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...Qd
]), lp = 30, up = (e) => !isNaN(parseFloat(e)), dp = { current: void 0 }, fp = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = Xl.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = Xl.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = up(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return process.env.NODE_ENV !== "production" && gl(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new dl());
		let n = this.events[e].add(t);
		return e === "change" ? () => {
			n(), Wl.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : n;
	}
	clearListeners() {
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, t) {
		this.passiveEffect = e, this.stopPassiveEffect = t;
	}
	set(e) {
		this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
	}
	setWithVelocity(e, t, n) {
		this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
	}
	jump(e, t = !0) {
		this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(e) {
		this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(e);
	}
	removeDependent(e) {
		this.dependents && this.dependents.delete(e);
	}
	get() {
		return dp.current && dp.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = Xl.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > lp) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, lp);
		return /* @__PURE__ */ ml(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
	}
	start(e) {
		return this.stop(), new Promise((t) => {
			this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify();
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
		});
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
};
function pp(e, t) {
	return new fp(e, t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
var mp = (e) => Array.isArray(e);
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/utils/setters.mjs
function hp(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, pp(n));
}
function gp(e) {
	return mp(e) ? e[e.length - 1] || 0 : e;
}
function _p(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = sp(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) hp(e, t, gp(i[t]));
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var vp = (e) => !!(e && e.getVelocity);
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/value/will-change/is.mjs
function yp(e) {
	return !!(vp(e) && e.add);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function bp(e, t) {
	let n = e.getValue("willChange");
	if (yp(n)) return n.add(t);
	if (!n && rl.WillChange) {
		let n = new rl.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function xp(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var Sp = "data-" + xp("framerAppearId");
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function Cp(e) {
	return e.props[Sp];
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
function wp({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function Tp(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a, transitionEnd: o, ...s } = t, c = e.getDefaultTransition();
	a = a ? ep(a, c) : c;
	let l = a?.reduceMotion, u = a?.skipAnimations;
	r && (a = r);
	let d = [], f = i && e.animationState && e.animationState.getState()[i];
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || f && wp(f, t)) continue;
		let o = {
			delay: n,
			...tp(a || {}, t)
		};
		u && (o.skipAnimations = !0);
		let c = r.get();
		if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
			Wl.update(() => r.set(i));
			continue;
		}
		let p = !1;
		if (window.MotionHandoffAnimation) {
			let n = Cp(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, Wl);
				e !== null && (o.startTime = e, p = !0);
			}
		}
		bp(e, t);
		let m = l ?? e.shouldReduceMotion;
		r.start(ip(t, r, i, m && cp.has(t) ? { type: !1 } : o, e, p));
		let h = r.animation;
		h && d.push(h);
	}
	if (o) {
		let t = () => Wl.update(() => {
			o && _p(e, o);
		});
		d.length ? Promise.all(d).then(t) : t();
	}
	return d;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function Ep(e, t, n = {}) {
	let r = sp(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(Tp(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
		return Dp(e, t, r, a, o, s, n);
	} : () => Promise.resolve(), { when: s } = i;
	if (s) {
		let [e, t] = s === "beforeChildren" ? [a, o] : [o, a];
		return e().then(() => t());
	} else return Promise.all([a(), o(n.delay)]);
}
function Dp(e, t, n = 0, r = 0, i = 0, a = 1, o) {
	let s = [];
	for (let c of e.variantChildren) c.notify("AnimationStart", t), s.push(Ep(c, t, {
		...o,
		delay: n + (typeof r == "function" ? 0 : r) + Wf(e.variantChildren, c, r, i, a)
	}).then(() => c.notify("AnimationComplete", t)));
	return Promise.all(s);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function Op(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => Ep(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = Ep(e, t, n);
	else {
		let i = typeof t == "function" ? sp(e, t, n.custom) : t;
		r = Promise.all(Tp(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/value/types/auto.mjs
var kp = {
	test: (e) => e === "auto",
	parse: (e) => e
}, Ap = (e) => (t) => t.test(e), jp = [
	iu,
	$,
	bu,
	yu,
	Su,
	xu,
	kp
], Mp = (e) => jp.find(Ap(e));
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function Np(e) {
	return typeof e == "number" ? e === 0 : e === null ? !0 : e === "none" || e === "0" || ol(e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
var Pp = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function Fp(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(cu) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!Pp.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var Ip = /\b([a-z-]*)\(.*?\)/gu, Lp = {
	...Vu,
	getAnimatableNone: (e) => {
		let t = e.match(Ip);
		return t ? t.map(Fp).join(" ") : e;
	}
}, Rp = {
	...Vu,
	getAnimatableNone: (e) => {
		let t = Vu.parse(e);
		return Vu.createTransformer(e)(t.map((e) => typeof e == "number" ? 0 : typeof e == "object" ? {
			...e,
			alpha: 1
		} : e));
	}
}, zp = {
	...iu,
	transform: Math.round
}, Bp = {
	borderWidth: $,
	borderTopWidth: $,
	borderRightWidth: $,
	borderBottomWidth: $,
	borderLeftWidth: $,
	borderRadius: $,
	borderTopLeftRadius: $,
	borderTopRightRadius: $,
	borderBottomRightRadius: $,
	borderBottomLeftRadius: $,
	width: $,
	maxWidth: $,
	height: $,
	maxHeight: $,
	top: $,
	right: $,
	bottom: $,
	left: $,
	inset: $,
	insetBlock: $,
	insetBlockStart: $,
	insetBlockEnd: $,
	insetInline: $,
	insetInlineStart: $,
	insetInlineEnd: $,
	padding: $,
	paddingTop: $,
	paddingRight: $,
	paddingBottom: $,
	paddingLeft: $,
	paddingBlock: $,
	paddingBlockStart: $,
	paddingBlockEnd: $,
	paddingInline: $,
	paddingInlineStart: $,
	paddingInlineEnd: $,
	margin: $,
	marginTop: $,
	marginRight: $,
	marginBottom: $,
	marginLeft: $,
	marginBlock: $,
	marginBlockStart: $,
	marginBlockEnd: $,
	marginInline: $,
	marginInlineStart: $,
	marginInlineEnd: $,
	fontSize: $,
	backgroundPositionX: $,
	backgroundPositionY: $,
	rotate: yu,
	rotateX: yu,
	rotateY: yu,
	rotateZ: yu,
	scale: ou,
	scaleX: ou,
	scaleY: ou,
	scaleZ: ou,
	skew: yu,
	skewX: yu,
	skewY: yu,
	distance: $,
	translateX: $,
	translateY: $,
	translateZ: $,
	x: $,
	y: $,
	z: $,
	perspective: $,
	transformPerspective: $,
	opacity: au,
	originX: Cu,
	originY: Cu,
	originZ: $,
	zIndex: zp,
	fillOpacity: au,
	strokeOpacity: au,
	numOctaves: zp
}, Vp = {
	...Bp,
	color: Tu,
	backgroundColor: Tu,
	outlineColor: Tu,
	fill: Tu,
	stroke: Tu,
	borderColor: Tu,
	borderTopColor: Tu,
	borderRightColor: Tu,
	borderBottomColor: Tu,
	borderLeftColor: Tu,
	filter: Lp,
	WebkitFilter: Lp,
	mask: Rp,
	WebkitMask: Rp
}, Hp = (e) => Vp[e], Up = /* @__PURE__ */ new Set([Lp, Rp]);
function Wp(e, t) {
	let n = Hp(e);
	return Up.has(n) || (n = Vu), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var Gp = new Set([
	"auto",
	"none",
	"0"
]);
function Kp(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !Gp.has(t) && Pu(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = Wp(n, i);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var qp = class extends pf {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), tu(r))) {
				let i = Jf(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !cp.has(n) || e.length !== 2) return;
		let [r, i] = e, a = Mp(r), o = Mp(i);
		if (ru(r) !== ru(i) && af[n]) {
			this.needsMeasurement = !0;
			return;
		}
		if (a !== o) if (ef(a) && ef(o)) for (let t = 0; t < e.length; t++) {
			let n = e[t];
			typeof n == "string" && (e[t] = parseFloat(n));
		}
		else af[n] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || Np(e[t])) && n.push(t);
		n.length && Kp(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = af[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = af[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function Jp(e, t, n) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let r = document;
		t && (r = t.current);
		let i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e).filter((e) => e != null);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var Yp = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function Xp(e) {
	return al(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: Zp, cancel: Qp } = /* @__PURE__ */ Ul(queueMicrotask, !1), $p = {
	x: !1,
	y: !1
};
function em() {
	return $p.x || $p.y;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function tm(e) {
	return e === "x" || e === "y" ? $p[e] ? null : ($p[e] = !0, () => {
		$p[e] = !1;
	}) : $p.x || $p.y ? null : ($p.x = $p.y = !0, () => {
		$p.x = $p.y = !1;
	});
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function nm(e, t) {
	let n = Jp(e), r = new AbortController();
	return [
		n,
		{
			passive: !0,
			...t,
			signal: r.signal
		},
		() => r.abort()
	];
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/gestures/hover.mjs
function rm(e) {
	return !(e.pointerType === "touch" || em());
}
function im(e, t, n = {}) {
	let [r, i, a] = nm(e, n);
	return r.forEach((e) => {
		let n = !1, r = !1, a, o = () => {
			e.removeEventListener("pointerleave", u);
		}, s = (e) => {
			a &&= (a(e), void 0), o();
		}, c = (e) => {
			n = !1, window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), r && (r = !1, s(e));
		}, l = () => {
			n = !0, window.addEventListener("pointerup", c, i), window.addEventListener("pointercancel", c, i);
		}, u = (e) => {
			if (e.pointerType !== "touch") {
				if (n) {
					r = !0;
					return;
				}
				s(e);
			}
		};
		e.addEventListener("pointerenter", (n) => {
			if (!rm(n)) return;
			r = !1;
			let o = t(e, n);
			typeof o == "function" && (a = o, e.addEventListener("pointerleave", u, i));
		}, i), e.addEventListener("pointerdown", l, i);
	}), a;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var am = (e, t) => t ? e === t ? !0 : am(e, t.parentElement) : !1, om = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, sm = new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function cm(e) {
	return sm.has(e.tagName) || e.isContentEditable === !0;
}
var lm = new Set([
	"INPUT",
	"SELECT",
	"TEXTAREA"
]);
function um(e) {
	return lm.has(e.tagName) || e.isContentEditable === !0;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var dm = /* @__PURE__ */ new WeakSet();
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function fm(e) {
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function pm(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var mm = (e, t) => {
	let n = e.currentTarget;
	if (!n) return;
	let r = fm(() => {
		if (dm.has(n)) return;
		pm(n, "down");
		let e = fm(() => {
			pm(n, "up");
		});
		n.addEventListener("keyup", e, t), n.addEventListener("blur", () => pm(n, "cancel"), t);
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/gestures/press/index.mjs
function hm(e) {
	return om(e) && !em();
}
var gm = /* @__PURE__ */ new WeakSet();
function _m(e, t, n = {}) {
	let [r, i, a] = nm(e, n), o = (e) => {
		let r = e.currentTarget;
		if (!hm(e) || gm.has(e)) return;
		dm.add(r), n.stopPropagation && gm.add(e);
		let a = t(r, e), o = (e, t) => {
			window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", c), dm.has(r) && dm.delete(r), hm(e) && typeof a == "function" && a(e, { success: t });
		}, s = (e) => {
			o(e, r === window || r === document || n.useGlobalTarget || am(r, e.target));
		}, c = (e) => {
			o(e, !1);
		};
		window.addEventListener("pointerup", s, i), window.addEventListener("pointercancel", c, i);
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i), Xp(e) && (e.addEventListener("focus", (e) => mm(e, i)), !cm(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), a;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function vm(e) {
	return al(e) && "ownerSVGElement" in e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/resize/handle-element.mjs
var ym = /* @__PURE__ */ new WeakMap(), bm, xm = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : vm(r) && "getBBox" in r ? r.getBBox()[t] : r[n], Sm = /* @__PURE__ */ xm("inline", "width", "offsetWidth"), Cm = /* @__PURE__ */ xm("block", "height", "offsetHeight");
function wm({ target: e, borderBoxSize: t }) {
	ym.get(e)?.forEach((n) => {
		n(e, {
			get width() {
				return Sm(e, t);
			},
			get height() {
				return Cm(e, t);
			}
		});
	});
}
function Tm(e) {
	e.forEach(wm);
}
function Em() {
	typeof ResizeObserver > "u" || (bm = new ResizeObserver(Tm));
}
function Dm(e, t) {
	bm || Em();
	let n = Jp(e);
	return n.forEach((e) => {
		let n = ym.get(e);
		n || (n = /* @__PURE__ */ new Set(), ym.set(e, n)), n.add(t), bm?.observe(e);
	}), () => {
		n.forEach((e) => {
			let n = ym.get(e);
			n?.delete(t), n?.size || bm?.unobserve(e);
		});
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/resize/handle-window.mjs
var Om = /* @__PURE__ */ new Set(), km;
function Am() {
	km = () => {
		let e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		Om.forEach((t) => t(e));
	}, window.addEventListener("resize", km);
}
function jm(e) {
	return Om.add(e), km || Am(), () => {
		Om.delete(e), !Om.size && typeof km == "function" && (window.removeEventListener("resize", km), km = void 0);
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/resize/index.mjs
function Mm(e, t) {
	return typeof e == "function" ? jm(e) : Dm(e, t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function Nm(e) {
	return vm(e) && e.tagName === "svg";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/utils/transform.mjs
function Pm(...e) {
	let t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], a = e[2 + n], o = e[3 + n], s = Ed(i, a, o);
	return t ? s(r) : s;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/value/types/utils/find.mjs
var Fm = [
	...jp,
	Tu,
	Vu
], Im = (e) => Fm.find(Ap(e)), Lm = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), Rm = () => ({
	x: Lm(),
	y: Lm()
}), zm = () => ({
	min: 0,
	max: 0
}), Bm = () => ({
	x: zm(),
	y: zm()
}), Vm = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function Hm(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
function Um(e) {
	return typeof e == "string" || Array.isArray(e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var Wm = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], Gm = ["initial", ...Wm];
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function Km(e) {
	return Hm(e.animate) || Gm.some((t) => Um(e[t]));
}
function qm(e) {
	return !!(Km(e) || e.variants);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
function Jm(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (vp(i)) e.addValue(r, i);
		else if (vp(a)) e.addValue(r, pp(i, { owner: e }));
		else if (a !== i) if (e.hasValue(r)) {
			let t = e.getValue(r);
			t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
		} else {
			let t = e.getStaticValue(r);
			e.addValue(r, pp(t === void 0 ? i : t, { owner: e }));
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var Ym = { current: null }, Xm = { current: !1 }, Zm = typeof window < "u";
function Qm() {
	if (Xm.current = !0, Zm) if (window.matchMedia) {
		let e = window.matchMedia("(prefers-reduced-motion)"), t = () => Ym.current = e.matches;
		e.addEventListener("change", t), t();
	} else Ym.current = !1;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/VisualElement.mjs
var $m = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], eh = {};
function th(e) {
	eh = e;
}
function nh() {
	return eh;
}
var rh = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, skipAnimations: i, blockInitialAnimation: a, visualState: o }, s = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = pf, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = Xl.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, Wl.render(this.render, !1, !0));
		};
		let { latestValues: c, renderState: l } = o;
		this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = t.initial ? { ...c } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = s, this.blockInitialAnimation = !!a, this.isControllingVariants = Km(t), this.isVariantNode = qm(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in d) {
			let t = d[e];
			c[e] !== void 0 && vp(t) && t.set(c[e]);
		}
	}
	mount(e) {
		if (this.hasBeenMounted) for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
		this.current = e, Vm.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Xm.current || Qm(), this.shouldReduceMotion = Ym.current), process.env.NODE_ENV !== "production" && gl(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
	}
	unmount() {
		this.projection && this.projection.unmount(), Gl(this.notifyUpdate), Gl(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
		for (let e in this.events) this.events[e].clear();
		for (let e in this.features) {
			let t = this.features[e];
			t && (t.unmount(), t.isMounted = !1);
		}
		this.current = null;
	}
	addChild(e) {
		this.children.add(e), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(e);
	}
	removeChild(e) {
		this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
	}
	bindToMotionValue(e, t) {
		if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && If.has(e) && this.current instanceof HTMLElement) {
			let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate, s = new Ef({
				element: this.current,
				name: e,
				keyframes: r,
				times: i,
				ease: a,
				duration: /* @__PURE__ */ fl(o)
			}), c = n(s);
			this.valueSubscriptions.set(e, () => {
				c(), s.cancel();
			});
			return;
		}
		let n = $d.has(e);
		n && this.onBindTransform && this.onBindTransform();
		let r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && Wl.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), i;
		typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
			r(), i && i();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = "animation";
		for (e in eh) {
			let t = eh[e];
			if (!t) continue;
			let { isEnabled: n, Feature: r } = t;
			if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
				let t = this.features[e];
				t.isMounted ? t.update() : (t.mount(), t.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Bm();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < $m.length; t++) {
			let n = $m[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = Jm(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(e) {
		return this.props.variants ? this.props.variants[e] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	addVariantChild(e) {
		let t = this.getClosestVariantNode();
		if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
	}
	addValue(e, t) {
		let n = this.values.get(e);
		t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get());
	}
	removeValue(e) {
		this.values.delete(e);
		let t = this.valueSubscriptions.get(e);
		t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, t) {
		if (this.props.values && this.props.values[e]) return this.props.values[e];
		let n = this.values.get(e);
		return n === void 0 && t !== void 0 && (n = pp(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (il(n) || ol(n)) ? n = parseFloat(n) : !Im(n) && Vu.test(t) && (n = Wp(e, t)), this.setBaseTarget(e, vp(n) ? n.get() : n)), vp(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = op(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !vp(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new dl()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
	scheduleRenderMicrotask() {
		Zp.render(this.render);
	}
}, ih = class extends rh {
	constructor() {
		super(...arguments), this.KeyframeResolver = qp;
	}
	sortInstanceNodePosition(e, t) {
		return e.compareDocumentPosition(t) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, t) {
		let n = e.style;
		return n ? n[t] : void 0;
	}
	removeValueFromRenderState(e, { vars: t, style: n }) {
		delete t[e], delete n[e];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: e } = this.props;
		vp(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
}, ah = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function oh({ top: e, left: t, right: n, bottom: r }) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	};
}
function sh({ x: e, y: t }) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	};
}
function ch(e, t) {
	if (!t) return e;
	let n = t({
		x: e.left,
		y: e.top
	}), r = t({
		x: e.right,
		y: e.bottom
	});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
function lh(e) {
	return e === void 0 || e === 1;
}
function uh({ scale: e, scaleX: t, scaleY: n }) {
	return !lh(e) || !lh(t) || !lh(n);
}
function dh(e) {
	return uh(e) || fh(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function fh(e) {
	return ph(e.x) || ph(e.y);
}
function ph(e) {
	return e && e !== "0%";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
function mh(e, t, n) {
	return n + t * (e - n);
}
function hh(e, t, n, r, i) {
	return i !== void 0 && (e = mh(e, i, r)), mh(e, n, r) + t;
}
function gh(e, t = 0, n = 1, r, i) {
	e.min = hh(e.min, t, n, r, i), e.max = hh(e.max, t, n, r, i);
}
function _h(e, { x: t, y: n }) {
	gh(e.x, t.translate, t.scale, t.originPoint), gh(e.y, n.translate, n.scale, n.originPoint);
}
var vh = .999999999999, yh = 1.0000000000001;
function bh(e, t, n, r = !1) {
	let i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let a, o;
	for (let s = 0; s < i; s++) {
		a = n[s], o = a.projectionDelta;
		let { visualElement: i } = a.options;
		i && i.props.style && i.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && (xh(e.x, -a.scroll.offset.x), xh(e.y, -a.scroll.offset.y)), o && (t.x *= o.x.scale, t.y *= o.y.scale, _h(e, o)), r && dh(a.latestValues) && wh(e, a.latestValues, a.layout?.layoutBox));
	}
	t.x < yh && t.x > vh && (t.x = 1), t.y < yh && t.y > vh && (t.y = 1);
}
function xh(e, t) {
	e.min += t, e.max += t;
}
function Sh(e, t, n, r, i = .5) {
	gh(e, t, n, Gu(e.min, e.max, i), r);
}
function Ch(e, t) {
	return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function wh(e, t, n) {
	let r = n ?? e;
	Sh(e.x, Ch(t.x, r.x), t.scaleX, t.scale, t.originX), Sh(e.y, Ch(t.y, r.y), t.scaleY, t.scale, t.originY);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function Th(e, t) {
	return oh(ch(e.getBoundingClientRect(), t));
}
function Eh(e, t, n) {
	let r = Th(e, n), { scroll: i } = t;
	return i && (xh(r.x, i.offset.x), xh(r.y, i.offset.y)), r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var Dh = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, Oh = Qd.length;
function kh(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < Oh; a++) {
		let o = Qd[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (typeof s == "number") c = s === +!!o.startsWith("scale");
		else {
			let e = parseFloat(s);
			c = o.startsWith("scale") ? e === 1 : e === 0;
		}
		if (!c || n) {
			let e = Yp(s, Bp[o]);
			if (!c) {
				i = !1;
				let t = Dh[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function Ah(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if ($d.has(e)) {
			o = !0;
			continue;
		} else if ($l(e)) {
			i[e] = n;
			continue;
		} else {
			let t = Yp(n, Bp[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = kh(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function jh(e, { style: t, vars: n }, r, i) {
	let a = e.style, o;
	for (o in t) a[o] = t[o];
	for (o in i?.applyProjectionStyles(a, r), n) a.setProperty(o, n[o]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function Mh(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var Nh = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") if ($.test(e)) e = parseFloat(e);
	else return e;
	return `${Mh(e, t.target.x)}% ${Mh(e, t.target.y)}%`;
} }, Ph = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = Vu.parse(e);
	if (i.length > 5) return r;
	let a = Vu.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = Gu(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, Fh = {
	borderRadius: {
		...Nh,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: Nh,
	borderTopRightRadius: Nh,
	borderBottomLeftRadius: Nh,
	borderBottomRightRadius: Nh,
	boxShadow: Ph
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function Ih(e, { layout: t, layoutId: n }) {
	return $d.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Fh[e] || e === "opacity");
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function Lh(e, t, n) {
	let r = e.style, i = t?.style, a = {};
	if (!r) return a;
	for (let t in r) (vp(r[t]) || i && vp(i[t]) || Ih(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
	return a;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function Rh(e) {
	return window.getComputedStyle(e);
}
var zh = class extends ih {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = jh;
	}
	readValueFromInstance(e, t) {
		if ($d.has(t)) return this.projection?.isProjecting ? Jd(t) : Xd(e, t);
		{
			let n = Rh(e), r = ($l(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return Th(e, t);
	}
	build(e, t, n) {
		Ah(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return Lh(e, t, n);
	}
}, Bh = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, Vh = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function Hh(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? Bh : Vh;
	e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var Uh = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function Wh(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if (Ah(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox);
	for (let e of Uh) d[e] !== void 0 && (f[e] = d[e], delete d[e]);
	t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && Hh(d, i, a, o, !1);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
var Gh = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]), Kh = (e) => typeof e == "string" && e.toLowerCase() === "svg";
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function qh(e, t, n, r) {
	jh(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(Gh.has(n) ? n : xp(n), t.attrs[n]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function Jh(e, t, n) {
	let r = Lh(e, t, n);
	for (let n in e) if (vp(e[n]) || vp(t[n])) {
		let t = Qd.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var Yh = class extends ih {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Bm;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if ($d.has(t)) {
			let e = Hp(t);
			return e && e.default || 0;
		}
		return t = Gh.has(t) ? t : xp(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return Jh(e, t, n);
	}
	build(e, t, n) {
		Wh(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		qh(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = Kh(e.tagName), super.mount(e);
	}
}, Xh = Gm.length;
function Zh(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && Zh(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < Xh; n++) {
		let r = Gm[n], i = e.props[r];
		(Um(i) || i === !1) && (t[r] = i);
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function Qh(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var $h = [...Wm].reverse(), eg = Wm.length;
function tg(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => Op(e, t, n)));
}
function ng(e) {
	let t = tg(e), n = ag(), r = !0, i = !1, a = (t) => (n, r) => {
		let i = sp(e, r, t === "exit" ? e.presenceContext?.custom : void 0);
		if (i) {
			let { transition: e, transitionEnd: t, ...r } = i;
			n = {
				...n,
				...r,
				...t
			};
		}
		return n;
	};
	function o(n) {
		t = n(e);
	}
	function s(o) {
		let { props: s } = e, c = Zh(e.parent) || {}, l = [], u = /* @__PURE__ */ new Set(), d = {}, f = Infinity;
		for (let t = 0; t < eg; t++) {
			let p = $h[t], m = n[p], h = s[p] === void 0 ? c[p] : s[p], g = Um(h), _ = p === o ? m.isActive : null;
			_ === !1 && (f = t);
			let v = h === c[p] && h !== s[p] && g;
			if (v && (r || i) && e.manuallyAnimateOnMount && (v = !1), m.protectedKeys = { ...d }, !m.isActive && _ === null || !h && !m.prevProp || Hm(h) || typeof h == "boolean") continue;
			if (p === "exit" && m.isActive && _ !== !0) {
				m.prevResolvedValues && (d = {
					...d,
					...m.prevResolvedValues
				});
				continue;
			}
			let y = rg(m.prevProp, h), b = y || p === o && m.isActive && !v && g || t > f && g, x = !1, S = Array.isArray(h) ? h : [h], C = S.reduce(a(p), {});
			_ === !1 && (C = {});
			let { prevResolvedValues: w = {} } = m, T = {
				...w,
				...C
			}, E = (t) => {
				b = !0, u.has(t) && (x = !0, u.delete(t)), m.needsAnimating[t] = !0;
				let n = e.getValue(t);
				n && (n.liveStyle = !1);
			};
			for (let e in T) {
				let t = C[e], n = w[e];
				if (d.hasOwnProperty(e)) continue;
				let r = !1;
				r = mp(t) && mp(n) ? !Qh(t, n) || y : t !== n, r ? t == null ? u.add(e) : E(e) : t !== void 0 && u.has(e) ? E(e) : m.protectedKeys[e] = !0;
			}
			m.prevProp = h, m.prevResolvedValues = C, m.isActive && (d = {
				...d,
				...C
			}), (r || i) && e.blockInitialAnimation && (b = !1);
			let ee = v && y;
			b && (!ee || x) && l.push(...S.map((t) => {
				let n = { type: p };
				if (typeof t == "string" && (r || i) && !ee && e.manuallyAnimateOnMount && e.parent) {
					let { parent: r } = e, i = sp(r, t);
					if (r.enteringChildren && i) {
						let { delayChildren: t } = i.transition || {};
						n.delay = Wf(r.enteringChildren, e, t);
					}
				}
				return {
					animation: t,
					options: n
				};
			}));
		}
		if (u.size) {
			let t = {};
			if (typeof s.initial != "boolean") {
				let n = sp(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
				n && n.transition && (t.transition = n.transition);
			}
			u.forEach((n) => {
				let r = e.getBaseTarget(n), i = e.getValue(n);
				i && (i.liveStyle = !0), t[n] = r ?? null;
			}), l.push({ animation: t });
		}
		let p = !!l.length;
		return r && (s.initial === !1 || s.initial === s.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, i = !1, p ? t(l) : Promise.resolve();
	}
	function c(t, r) {
		if (n[t].isActive === r) return Promise.resolve();
		e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), n[t].isActive = r;
		let i = s(t);
		for (let e in n) n[e].protectedKeys = {};
		return i;
	}
	return {
		animateChanges: s,
		setActive: c,
		setAnimateFunction: o,
		getState: () => n,
		reset: () => {
			n = ag(), i = !0;
		}
	};
}
function rg(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !Qh(t, e) : !1;
}
function ig(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function ag() {
	return {
		animate: ig(!0),
		whileInView: ig(),
		whileHover: ig(),
		whileTap: ig(),
		whileDrag: ig(),
		whileFocus: ig(),
		exit: ig()
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
function og(e, t) {
	e.min = t.min, e.max = t.max;
}
function sg(e, t) {
	og(e.x, t.x), og(e.y, t.y);
}
function cg(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var lg = 1e-4, ug = 1 - lg, dg = 1 + lg, fg = .01, pg = 0 - fg, mg = 0 + fg;
function hg(e) {
	return e.max - e.min;
}
function gg(e, t, n) {
	return Math.abs(e - t) <= n;
}
function _g(e, t, n, r = .5) {
	e.origin = r, e.originPoint = Gu(t.min, t.max, e.origin), e.scale = hg(n) / hg(t), e.translate = Gu(n.min, n.max, e.origin) - e.originPoint, (e.scale >= ug && e.scale <= dg || isNaN(e.scale)) && (e.scale = 1), (e.translate >= pg && e.translate <= mg || isNaN(e.translate)) && (e.translate = 0);
}
function vg(e, t, n, r) {
	_g(e.x, t.x, n.x, r ? r.originX : void 0), _g(e.y, t.y, n.y, r ? r.originY : void 0);
}
function yg(e, t, n, r = 0) {
	e.min = (r ? Gu(n.min, n.max, r) : n.min) + t.min, e.max = e.min + hg(t);
}
function bg(e, t, n, r) {
	yg(e.x, t.x, n.x, r?.x), yg(e.y, t.y, n.y, r?.y);
}
function xg(e, t, n, r = 0) {
	let i = r ? Gu(n.min, n.max, r) : n.min;
	e.min = t.min - i, e.max = e.min + hg(t);
}
function Sg(e, t, n, r) {
	xg(e.x, t.x, n.x, r?.x), xg(e.y, t.y, n.y, r?.y);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
function Cg(e, t, n, r, i) {
	return e -= t, e = mh(e, 1 / n, r), i !== void 0 && (e = mh(e, 1 / i, r)), e;
}
function wg(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (bu.test(t) && (t = parseFloat(t), t = Gu(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let s = Gu(a.min, a.max, r);
	e === a && (s -= t), e.min = Cg(e.min, t, n, s, i), e.max = Cg(e.max, t, n, s, i);
}
function Tg(e, t, [n, r, i], a, o) {
	wg(e, t[n], t[r], t[i], t.scale, a, o);
}
var Eg = [
	"x",
	"scaleX",
	"originX"
], Dg = [
	"y",
	"scaleY",
	"originY"
];
function Og(e, t, n, r) {
	Tg(e.x, t, Eg, n ? n.x : void 0, r ? r.x : void 0), Tg(e.y, t, Dg, n ? n.y : void 0, r ? r.y : void 0);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function kg(e) {
	return e.translate === 0 && e.scale === 1;
}
function Ag(e) {
	return kg(e.x) && kg(e.y);
}
function jg(e, t) {
	return e.min === t.min && e.max === t.max;
}
function Mg(e, t) {
	return jg(e.x, t.x) && jg(e.y, t.y);
}
function Ng(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Pg(e, t) {
	return Ng(e.x, t.x) && Ng(e.y, t.y);
}
function Fg(e) {
	return hg(e.x) / hg(e.y);
}
function Ig(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function Lg(e) {
	return [e("x"), e("y")];
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/projection/styles/transform.mjs
function Rg(e, t, n) {
	let r = "", i = e.x.translate / t.x, a = e.y.translate / t.y, o = n?.z || 0;
	if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
		let { transformPerspective: e, rotate: t, rotateX: i, rotateY: a, skewX: o, skewY: s } = n;
		e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotateX(${i}deg) `), a && (r += `rotateY(${a}deg) `), o && (r += `skewX(${o}deg) `), s && (r += `skewY(${s}deg) `);
	}
	let s = e.x.scale * t.x, c = e.y.scale * t.y;
	return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || "none";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs
var zg = [
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderBottomLeftRadius",
	"borderBottomRightRadius"
], Bg = zg.length, Vg = (e) => typeof e == "string" ? parseFloat(e) : e, Hg = (e) => typeof e == "number" || $.test(e);
function Ug(e, t, n, r, i, a) {
	i ? (e.opacity = Gu(0, n.opacity ?? 1, Gg(r)), e.opacityExit = Gu(t.opacity ?? 1, 0, Kg(r))) : a && (e.opacity = Gu(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let i = 0; i < Bg; i++) {
		let a = zg[i], o = Wg(t, a), s = Wg(n, a);
		o === void 0 && s === void 0 || (o ||= 0, s ||= 0, o === 0 || s === 0 || Hg(o) === Hg(s) ? (e[a] = Math.max(Gu(Vg(o), Vg(s), r), 0), (bu.test(s) || bu.test(o)) && (e[a] += "%")) : e[a] = s);
	}
	(t.rotate || n.rotate) && (e.rotate = Gu(t.rotate || 0, n.rotate || 0, r));
}
function Wg(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var Gg = /* @__PURE__ */ qg(0, .5, kl), Kg = /* @__PURE__ */ qg(.5, .95, cl);
function qg(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ ul(e, t, r));
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function Jg(e, t, n) {
	let r = vp(e) ? e : pp(e);
	return r.start(ip("", r, t, n)), r.animation;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function Yg(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
var Xg = (e, t) => e.depth - t.depth, Zg = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(e) {
		Xc(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		Zc(this.children, e), this.isDirty = !0;
	}
	forEach(e) {
		this.isDirty && this.children.sort(Xg), this.isDirty = !1, this.children.forEach(e);
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/utils/delay.mjs
function Qg(e, t) {
	let n = Xl.now(), r = ({ timestamp: i }) => {
		let a = i - n;
		a >= t && (Gl(r), e(a - t));
	};
	return Wl.setup(r, !0), () => Gl(r);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
function $g(e) {
	return vp(e) ? e.get() : e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var e_ = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		Xc(this.members, e);
		for (let t = this.members.length - 1; t >= 0; t--) {
			let n = this.members[t];
			if (n === e || n === this.lead || n === this.prevLead) continue;
			let r = n.instance;
			(!r || r.isConnected === !1) && !n.snapshot && (Zc(this.members, n), n.unmount());
		}
		e.scheduleRender();
	}
	remove(e) {
		if (Zc(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
			let e = this.members[this.members.length - 1];
			e && this.promote(e);
		}
	}
	relegate(e) {
		for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
			let e = this.members[t];
			if (e.isPresent !== !1 && e.instance?.isConnected !== !1) return this.promote(e), !0;
		}
		return !1;
	}
	promote(e, t) {
		let n = this.lead;
		if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
			n.updateSnapshot(), e.scheduleRender();
			let { layoutDependency: r } = n.options, { layoutDependency: i } = e.options;
			(r === void 0 || r !== i) && (e.resumeFrom = n, t && (n.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root?.isUpdating && (e.isLayoutDirty = !0)), e.options.crossfade === !1 && n.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((e) => {
			e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.();
		});
	}
	scheduleRender() {
		this.members.forEach((e) => e.instance && e.scheduleRender(!1));
	}
	removeLeadSnapshot() {
		this.lead?.snapshot && (this.lead.snapshot = void 0);
	}
}, t_ = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
}, n_ = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
}, r_ = [
	"",
	"X",
	"Y",
	"Z"
], i_ = 1e3, a_ = 0;
function o_(e, t, n, r) {
	let { latestValues: i } = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function s_(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	let { visualElement: t } = e.options;
	if (!t) return;
	let n = Cp(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		let { layout: t, layoutId: r } = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", Wl, !(t || r));
	}
	let { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && s_(r);
}
function c_({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
	return class {
		constructor(e = {}, n = t?.()) {
			this.id = a_++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, Bl.value && (n_.nodes = n_.calculatedTargetDeltas = n_.calculatedProjections = 0), this.nodes.forEach(d_), this.nodes.forEach(b_), this.nodes.forEach(x_), this.nodes.forEach(f_), Bl.addProjectionMetrics && Bl.addProjectionMetrics(n_);
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new Zg());
		}
		addEventListener(e, t) {
			return this.eventHandlers.has(e) || this.eventHandlers.set(e, new dl()), this.eventHandlers.get(e).add(t);
		}
		notifyListeners(e, ...t) {
			let n = this.eventHandlers.get(e);
			n && n.notify(...t);
		}
		hasListeners(e) {
			return this.eventHandlers.has(e);
		}
		mount(t) {
			if (this.instance) return;
			this.isSVG = vm(t) && !Nm(t), this.instance = t;
			let { layoutId: n, layout: r, visualElement: i } = this.options;
			if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
				let n, r = 0, i = () => this.root.updateBlockedByResize = !1;
				Wl.read(() => {
					r = window.innerWidth;
				}), e(t, () => {
					let e = window.innerWidth;
					e !== r && (r = e, this.root.updateBlockedByResize = !0, n && n(), n = Qg(i, 250), t_.hasAnimatedSinceResize && (t_.hasAnimatedSinceResize = !1, this.nodes.forEach(y_)));
				});
			}
			n && this.root.registerSharedNode(n, this), this.options.animate !== !1 && i && (n || r) && this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let a = this.options.transition || i.getDefaultTransition() || O_, { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(), c = !this.targetLayout || !Pg(this.targetLayout, r), l = !t && n;
				if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let t = {
						...tp(a, "layout"),
						onPlay: o,
						onComplete: s
					};
					(i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, l);
				} else t || y_(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = r;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let e = this.getStack();
			e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Gl(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(S_), this.animationId++);
		}
		getTransformTemplate() {
			let { visualElement: e } = this.options;
			return e && e.getProps().transformTemplate;
		}
		willUpdate(e = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && s_(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let e = 0; e < this.path.length; e++) {
				let t = this.path[e];
				t.shouldResetTransform = !0, (typeof t.latestValues.x == "string" || typeof t.latestValues.y == "string") && (t.isLayoutDirty = !0), t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1);
			}
			let { layoutId: t, layout: n } = this.options;
			if (t === void 0 && !n) return;
			let r = this.getTransformTemplate();
			this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate");
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				let e = this.updateBlockedByResize;
				this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), e && this.nodes.forEach(h_), this.nodes.forEach(m_);
				return;
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(g_);
				return;
			}
			this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(__), this.nodes.forEach(v_), this.nodes.forEach(l_), this.nodes.forEach(u_)) : this.nodes.forEach(g_), this.clearAllSnapshots();
			let e = Xl.now();
			Kl.delta = $c(0, 1e3 / 60, e - Kl.timestamp), Kl.timestamp = e, Kl.isProcessing = !0, ql.update.process(Kl), ql.preRender.process(Kl), ql.render.process(Kl), Kl.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, Zp.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(p_), this.sharedNodes.forEach(C_);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Wl.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			Wl.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !hg(this.snapshot.measuredBox.x) && !hg(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
			let e = this.layout;
			this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected ||= Bm(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			let { visualElement: t } = this.options;
			t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0);
		}
		updateScroll(e = "measure") {
			let t = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && this.instance) {
				let t = r(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: e,
					isRoot: t,
					offset: n(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : t
				};
			}
		}
		resetTransform() {
			if (!i) return;
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t = this.projectionDelta && !Ag(this.projectionDelta), n = this.getTransformTemplate(), r = n ? n(this.latestValues, "") : void 0, a = r !== this.prevTransformTemplateValue;
			e && this.instance && (t || dh(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(e = !0) {
			let t = this.measurePageBox(), n = this.removeElementScroll(t);
			return e && (n = this.removeTransform(n)), M_(n), {
				animationId: this.root.animationId,
				measuredBox: t,
				layoutBox: n,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: e } = this.options;
			if (!e) return Bm();
			let t = e.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(P_))) {
				let { scroll: e } = this.root;
				e && (xh(t.x, e.offset.x), xh(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = Bm();
			if (sg(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && sg(t, e), xh(t.x, i.offset.x), xh(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1, n) {
			let r = n || Bm();
			sg(r, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				!t && n.options.layoutScroll && n.scroll && n !== n.root && (xh(r.x, -n.scroll.offset.x), xh(r.y, -n.scroll.offset.y)), dh(n.latestValues) && wh(r, n.latestValues, n.layout?.layoutBox);
			}
			return dh(this.latestValues) && wh(r, this.latestValues, this.layout?.layoutBox), r;
		}
		removeTransform(e) {
			let t = Bm();
			sg(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				if (!dh(n.latestValues)) continue;
				let r;
				n.instance && (uh(n.latestValues) && n.updateSnapshot(), r = Bm(), sg(r, n.measurePageBox())), Og(t, n.latestValues, n.snapshot?.layoutBox, r);
			}
			return dh(this.latestValues) && Og(t, this.latestValues), t;
		}
		setTargetDelta(e) {
			this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
		}
		setOptions(e) {
			this.options = {
				...this.options,
				...e,
				crossfade: e.crossfade === void 0 ? !0 : e.crossfade
			};
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Kl.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(e = !1) {
			let t = this.getLead();
			this.isProjectionDirty ||= t.isProjectionDirty, this.isTransformDirty ||= t.isTransformDirty, this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
			let n = !!this.resumingFrom || this !== t;
			if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: r, layoutId: i } = this.options;
			if (!this.layout || !(r || i)) return;
			this.resolvedRelativeTargetAt = Kl.timestamp;
			let a = this.getClosestProjectingParent();
			a && this.linkedParentVersion !== a.layoutVersion && !a.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && a && a.layout ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Bm(), this.targetWithTransforms = Bm()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), bg(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : sg(this.target, this.layout.layoutBox), _h(this.target, this.targetDelta)) : sg(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && a && !!a.resumingFrom == !!this.resumingFrom && !a.options.layoutScroll && a.target && this.animationProgress !== 1 ? this.createRelativeTarget(a, this.target, a.target) : this.relativeParent = this.relativeTarget = void 0), Bl.value && n_.calculatedTargetDeltas++);
		}
		getClosestProjectingParent() {
			if (!(!this.parent || uh(this.parent.latestValues) || fh(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(e, t, n) {
			this.relativeParent = e, this.linkedParentVersion = e.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Bm(), this.relativeTargetOrigin = Bm(), Sg(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0), sg(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let e = this.getLead(), t = !!this.resumingFrom || this !== e, n = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === Kl.timestamp && (n = !1), n) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
			sg(this.layoutCorrected, this.layout.layoutBox);
			let a = this.treeScale.x, o = this.treeScale.y;
			bh(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = Bm());
			let { target: s } = e;
			if (!s) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (cg(this.prevProjectionDelta.x, this.projectionDelta.x), cg(this.prevProjectionDelta.y, this.projectionDelta.y)), vg(this.projectionDelta, this.layoutCorrected, s, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !Ig(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ig(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", s)), Bl.value && n_.calculatedProjections++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(e = !0) {
			if (this.options.visualElement?.scheduleRender(), e) {
				let e = this.getStack();
				e && e.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = Rm(), this.projectionDelta = Rm(), this.projectionDeltaWithTransform = Rm();
		}
		setAnimationOrigin(e, t = !1) {
			let n = this.snapshot, r = n ? n.latestValues : {}, i = { ...this.latestValues }, a = Rm();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let o = Bm(), s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0), c = this.getStack(), l = !c || c.members.length <= 1, u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(D_));
			this.animationProgress = 0;
			let d;
			this.mixTargetDelta = (t) => {
				let n = t / 1e3;
				w_(a.x, e.x, n), w_(a.y, e.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Sg(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), E_(this.relativeTarget, this.relativeTargetOrigin, o, n), d && Mg(this.relativeTarget, d) && (this.isProjectionDirty = !1), d ||= Bm(), sg(d, this.relativeTarget)), s && (this.animationValues = i, Ug(i, r, this.latestValues, n, u, l)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (Gl(this.pendingAnimation), void 0), this.pendingAnimation = Wl.update(() => {
				t_.hasAnimatedSinceResize = !0, Zl.layout++, this.motionValue ||= pp(0), this.motionValue.jump(0, !1), this.currentAnimation = Jg(this.motionValue, [0, 1e3], {
					...e,
					velocity: 0,
					isSync: !0,
					onUpdate: (t) => {
						this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
					},
					onStop: () => {
						Zl.layout--;
					},
					onComplete: () => {
						Zl.layout--, e.onComplete && e.onComplete(), this.completeAnimation();
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			let e = this.getStack();
			e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(i_), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let e = this.getLead(), { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
			if (!(!t || !n || !r)) {
				if (this !== e && this.layout && r && N_(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
					n = this.target || Bm();
					let t = hg(this.layout.layoutBox.x);
					n.x.min = e.target.x.min, n.x.max = n.x.min + t;
					let r = hg(this.layout.layoutBox.y);
					n.y.min = e.target.y.min, n.y.max = n.y.min + r;
				}
				sg(t, n), wh(t, i), vg(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
			}
		}
		registerSharedNode(e, t) {
			this.sharedNodes.has(e) || this.sharedNodes.set(e, new e_()), this.sharedNodes.get(e).add(t);
			let n = t.options.initialPromotionConfig;
			t.promote({
				transition: n ? n.transition : void 0,
				preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
			});
		}
		isLead() {
			let e = this.getStack();
			return e ? e.lead === this : !0;
		}
		getLead() {
			let { layoutId: e } = this.options;
			return e && this.getStack()?.lead || this;
		}
		getPrevLead() {
			let { layoutId: e } = this.options;
			return e ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			let { layoutId: e } = this.options;
			if (e) return this.root.sharedNodes.get(e);
		}
		promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
			let r = this.getStack();
			r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({ transition: t });
		}
		relegate() {
			let e = this.getStack();
			return e ? e.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: e } = this.options;
			if (!e) return;
			let t = !1, { latestValues: n } = e;
			if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
			let r = {};
			n.z && o_("z", e, r, this.animationValues);
			for (let t = 0; t < r_.length; t++) o_(`rotate${r_[t]}`, e, r, this.animationValues), o_(`skew${r_[t]}`, e, r, this.animationValues);
			e.render();
			for (let t in r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
			e.scheduleRender();
		}
		applyProjectionStyles(e, t) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				e.visibility = "hidden";
				return;
			}
			let n = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = !1, e.visibility = "", e.opacity = "", e.pointerEvents = $g(t?.pointerEvents) || "", e.transform = n ? n(this.latestValues, "") : "none";
				return;
			}
			let r = this.getLead();
			if (!this.projectionDelta || !this.layout || !r.target) {
				this.options.layoutId && (e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e.pointerEvents = $g(t?.pointerEvents) || ""), this.hasProjected && !dh(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1);
				return;
			}
			e.visibility = "";
			let i = r.animationValues || r.latestValues;
			this.applyTransformsToTarget();
			let a = Rg(this.projectionDeltaWithTransform, this.treeScale, i);
			n && (a = n(i, a)), e.transform = a;
			let { x: o, y: s } = this.projectionDelta;
			e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`, r.animationValues ? e.opacity = r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : e.opacity = r === this ? i.opacity === void 0 ? "" : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
			for (let t in Fh) {
				if (i[t] === void 0) continue;
				let { correct: n, applyTo: o, isCSSVariable: s } = Fh[t], c = a === "none" ? i[t] : n(i[t], r);
				if (o) {
					let t = o.length;
					for (let n = 0; n < t; n++) e[o[n]] = c;
				} else s ? this.options.visualElement.renderState.vars[t] = c : e[t] = c;
			}
			this.options.layoutId && (e.pointerEvents = r === this ? $g(t?.pointerEvents) || "" : "none");
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(m_), this.root.sharedNodes.clear();
		}
	};
}
function l_(e) {
	e.updateLayout();
}
function u_(e) {
	let t = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		let { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
		if (i === "size") Lg((e) => {
			let r = a ? t.measuredBox[e] : t.layoutBox[e], i = hg(r);
			r.min = n[e].min, r.max = r.min + i;
		});
		else if (i === "x" || i === "y") {
			let e = i === "x" ? "y" : "x";
			og(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
		} else N_(i, t.layoutBox, n) && Lg((r) => {
			let i = a ? t.measuredBox[r] : t.layoutBox[r], o = hg(n[r]);
			i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
		});
		let o = Rm();
		vg(o, n, t.layoutBox);
		let s = Rm();
		a ? vg(s, e.applyTransform(r, !0), t.measuredBox) : vg(s, n, t.layoutBox);
		let c = !Ag(o), l = !1;
		if (!e.resumeFrom) {
			let r = e.getClosestProjectingParent();
			if (r && !r.resumeFrom) {
				let { snapshot: i, layout: a } = r;
				if (i && a) {
					let o = e.options.layoutAnchor || void 0, s = Bm();
					Sg(s, t.layoutBox, i.layoutBox, o);
					let c = Bm();
					Sg(c, n, a.layoutBox, o), Pg(s, c) || (l = !0), r.options.layoutRoot && (e.relativeTarget = c, e.relativeTargetOrigin = s, e.relativeParent = r);
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: n,
			snapshot: t,
			delta: s,
			layoutDelta: o,
			hasLayoutChanged: c,
			hasRelativeLayoutChanged: l
		});
	} else if (e.isLead()) {
		let { onExitComplete: t } = e.options;
		t && t();
	}
	e.options.transition = void 0;
}
function d_(e) {
	Bl.value && n_.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
}
function f_(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function p_(e) {
	e.clearSnapshot();
}
function m_(e) {
	e.clearMeasurements();
}
function h_(e) {
	e.isLayoutDirty = !0, e.updateLayout();
}
function g_(e) {
	e.isLayoutDirty = !1;
}
function __(e) {
	e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0);
}
function v_(e) {
	let { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function y_(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function b_(e) {
	e.resolveTargetDelta();
}
function x_(e) {
	e.calcProjection();
}
function S_(e) {
	e.resetSkewAndRotation();
}
function C_(e) {
	e.removeLeadSnapshot();
}
function w_(e, t, n) {
	e.translate = Gu(t.translate, 0, n), e.scale = Gu(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function T_(e, t, n, r) {
	e.min = Gu(t.min, n.min, r), e.max = Gu(t.max, n.max, r);
}
function E_(e, t, n, r) {
	T_(e.x, t.x, n.x, r), T_(e.y, t.y, n.y, r);
}
function D_(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var O_ = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, k_ = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), A_ = k_("applewebkit/") && !k_("chrome/") ? Math.round : cl;
function j_(e) {
	e.min = A_(e.min), e.max = A_(e.max);
}
function M_(e) {
	j_(e.x), j_(e.y);
}
function N_(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !gg(Fg(t), Fg(n), .2);
}
function P_(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.39.0/node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
var F_ = c_({
	attachResizeListener: (e, t) => Yg(e, "resize", t),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
		y: document.documentElement.scrollTop || document.body?.scrollTop || 0
	}),
	checkIsScrollRoot: () => !0
}), I_ = { current: void 0 }, L_ = c_({
	measureScroll: (e) => ({
		x: e.scrollLeft,
		y: e.scrollTop
	}),
	defaultParent: () => {
		if (!I_.current) {
			let e = new F_({});
			e.mount(window), e.setOptions({ layoutScroll: !0 }), I_.current = e;
		}
		return I_.current;
	},
	resetTransform: (e, t) => {
		e.style.transform = t === void 0 ? "none" : t;
	},
	checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), R_ = Ft({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: "never"
});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function z_(e = !0) {
	let t = W(Yc);
	if (t === null) return [!0, null];
	let { isPresent: n, onExitComplete: r, register: i } = t, a = K();
	G(() => {
		if (e) return i(a);
	}, [e]);
	let o = U(() => e && r && r(a), [
		a,
		r,
		e
	]);
	return !n && r ? [!1, o] : [!0];
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/context/LazyContext.mjs
var B_ = Ft({ strict: !1 }), V_ = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
}, H_ = !1;
function U_() {
	if (H_) return;
	let e = {};
	for (let t in V_) e[t] = { isEnabled: (e) => V_[t].some((t) => !!e[t]) };
	th(e), H_ = !0;
}
function W_() {
	return U_(), nh();
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function G_(e) {
	let t = W_();
	for (let n in e) t[n] = {
		...t[n],
		...e[n]
	};
	th(t);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var K_ = new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport".split("."));
function q_(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || K_.has(e);
}
//#endregion
//#region __vite-optional-peer-dep:@emotion/is-prop-valid:framer-motion
var J_ = /* @__PURE__ */ Yt({ default: () => Y_ }), Y_, X_ = Jt((() => {
	throw Y_ = {}, Error("Could not resolve \"@emotion/is-prop-valid\" imported by \"framer-motion\". Is it installed?");
})), Z_ = (e) => !q_(e);
function Q_(e) {
	typeof e == "function" && (Z_ = (t) => t.startsWith("on") ? !q_(t) : e(t));
}
try {
	Q_((X_(), Qt(J_)).default);
} catch {}
function $_(e, t, n) {
	let r = {};
	for (let i in e) i === "values" && typeof e.values == "object" || vp(e[i]) || (Z_(i) || n === !0 && q_(i) || !t && !q_(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var ev = /* @__PURE__ */ Ft({});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function tv(e, t) {
	if (Km(e)) {
		let { initial: t, animate: n } = e;
		return {
			initial: t === !1 || Um(t) ? t : void 0,
			animate: Um(n) ? n : void 0
		};
	}
	return e.inherit === !1 ? {} : t;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function nv(e) {
	let { initial: t, animate: n } = tv(e, W(ev));
	return J(() => ({
		initial: t,
		animate: n
	}), [rv(t), rv(n)]);
}
function rv(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var iv = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/html/use-props.mjs
function av(e, t, n) {
	for (let r in t) !vp(t[r]) && !Ih(r, n) && (e[r] = t[r]);
}
function ov({ transformTemplate: e }, t) {
	return J(() => {
		let n = iv();
		return Ah(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function sv(e, t) {
	let n = e.style || {}, r = {};
	return av(r, n, e), Object.assign(r, ov(e, t)), r;
}
function cv(e, t) {
	let n = {}, r = sv(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var lv = () => ({
	...iv(),
	attrs: {}
});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function uv(e, t, n, r) {
	let i = J(() => {
		let n = lv();
		return Wh(n, t, Kh(r), e.transformTemplate, e.style), {
			...n.attrs,
			style: { ...n.style }
		};
	}, [t]);
	if (e.style) {
		let t = {};
		av(t, e.style, e), i.style = {
			...t,
			...i.style
		};
	}
	return i;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var dv = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function fv(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(dv.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function pv(e, t, n, { latestValues: r }, i, a = !1, o) {
	let s = (o ?? fv(e) ? uv : cv)(t, r, i, e), c = $_(t, typeof e == "string", a), l = e === Nt ? {} : {
		...c,
		...s,
		ref: n
	}, { children: u } = t, d = J(() => vp(u) ? u.get() : u, [u]);
	return It(e, {
		...l,
		children: d
	});
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function mv({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
	return {
		latestValues: hv(n, r, i, e),
		renderState: t()
	};
}
function hv(e, t, n, r) {
	let i = {}, a = r(e, {});
	for (let e in a) i[e] = $g(a[e]);
	let { initial: o, animate: s } = e, c = Km(e), l = qm(e);
	t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
	let u = n ? n.initial === !1 : !1;
	u ||= o === !1;
	let d = u ? s : o;
	if (d && typeof d != "boolean" && !Hm(d)) {
		let t = Array.isArray(d) ? d : [d];
		for (let n = 0; n < t.length; n++) {
			let r = op(e, t[n]);
			if (r) {
				let { transitionEnd: e, transition: t, ...n } = r;
				for (let e in n) {
					let t = n[e];
					if (Array.isArray(t)) {
						let e = u ? t.length - 1 : 0;
						t = t[e];
					}
					t !== null && (i[e] = t);
				}
				for (let t in e) i[t] = e[t];
			}
		}
	}
	return i;
}
var gv = (e) => (t, n) => {
	let r = W(ev), i = W(Yc), a = () => mv(e, t, r, i);
	return n ? a() : qc(a);
}, _v = /* @__PURE__ */ gv({
	scrapeMotionValuesFromProps: Lh,
	createRenderState: iv
}), vv = /* @__PURE__ */ gv({
	scrapeMotionValuesFromProps: Jh,
	createRenderState: lv
}), yv = Symbol.for("motionComponentSymbol");
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function bv(e, t, n) {
	let r = Y(n);
	q(() => {
		r.current = n;
	});
	let i = Y(null);
	return U((n) => {
		n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount());
		let a = r.current;
		if (typeof a == "function") if (n) {
			let e = a(n);
			typeof e == "function" && (i.current = e);
		} else i.current ? (i.current(), i.current = null) : a(n);
		else a && (a.current = n);
	}, [t]);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var xv = Ft({});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function Sv(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function Cv(e, t, n, r, i, a) {
	let { visualElement: o } = W(ev), s = W(B_), c = W(Yc), l = W(R_), u = l.reducedMotion, d = l.skipAnimations, f = Y(null), p = Y(!1);
	r ||= s.renderer, !f.current && r && (f.current = r(e, {
		visualState: t,
		parent: o,
		props: n,
		presenceContext: c,
		blockInitialAnimation: c ? c.initial === !1 : !1,
		reducedMotionConfig: u,
		skipAnimations: d,
		isSVG: a
	}), p.current && f.current && (f.current.manuallyAnimateOnMount = !0));
	let m = f.current, h = W(xv);
	m && !m.projection && i && (m.type === "html" || m.type === "svg") && wv(f.current, n, i, h);
	let g = Y(!1);
	q(() => {
		m && g.current && m.update(n, c);
	});
	let _ = n[Sp], v = Y(!!_ && typeof window < "u" && !window.MotionHandoffIsComplete?.(_) && window.MotionHasOptimisedAnimation?.(_));
	return Jc(() => {
		p.current = !0, m && (g.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), v.current && m.animationState && m.animationState.animateChanges());
	}), G(() => {
		m && (!v.current && m.animationState && m.animationState.animateChanges(), v.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(_);
		}), !1), m.enteringChildren = void 0);
	}), m;
}
function wv(e, t, n, r) {
	let { layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l, layoutAnchor: u, layoutCrossfade: d } = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Tv(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: a,
		alwaysMeasureLayout: !!o || s && Sv(s),
		visualElement: e,
		animationType: typeof a == "string" ? a : "both",
		initialPromotionConfig: r,
		crossfade: d,
		layoutScroll: c,
		layoutRoot: l,
		layoutAnchor: u
	});
}
function Tv(e) {
	if (e) return e.options.allowProjection === !1 ? Tv(e.parent) : e.projection;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/motion/index.mjs
function Ev(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
	r && G_(r);
	let a = n ? n === "svg" : fv(e), o = a ? vv : _v;
	function s(n, s) {
		let c, l = {
			...W(R_),
			...n,
			layoutId: Dv(n)
		}, { isStatic: u } = l, d = nv(n), f = o(n, u);
		if (!u && typeof window < "u") {
			Ov(l, r);
			let t = kv(l);
			c = t.MeasureLayout, d.visualElement = Cv(e, f, l, i, t.ProjectionNode, a);
		}
		return V(ev.Provider, {
			value: d,
			children: [c && d.visualElement ? B(c, {
				visualElement: d.visualElement,
				...l
			}) : null, pv(e, n, bv(f, d.visualElement, s), f, u, t, a)]
		});
	}
	s.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
	let c = Lt(s);
	return c[yv] = e, c;
}
function Dv({ layoutId: e }) {
	let t = W(Kc).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function Ov(e, t) {
	let n = W(B_).strict;
	if (process.env.NODE_ENV !== "production" && t && n) {
		let t = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		e.ignoreStrict ? tl(!1, t, "lazy-strict-mode") : nl(!1, t, "lazy-strict-mode");
	}
}
function kv(e) {
	let { drag: t, layout: n } = W_();
	if (!t && !n) return {};
	let r = {
		...t,
		...n
	};
	return {
		MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
		ProjectionNode: r.ProjectionNode
	};
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function Av(e, t) {
	if (typeof Proxy > "u") return Ev;
	let n = /* @__PURE__ */ new Map(), r = (n, r) => Ev(n, r, e, t);
	return new Proxy((e, t) => (process.env.NODE_ENV !== "production" && gl(!1, "motion() is deprecated. Use motion.create() instead."), r(e, t)), { get: (i, a) => a === "create" ? r : (n.has(a) || n.set(a, Ev(a, void 0, e, t)), n.get(a)) });
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var jv = (e, t) => t.isSVG ?? fv(e) ? new Yh(t) : new zh(t, { allowProjection: e !== Nt }), Mv = class extends ah {
	constructor(e) {
		super(e), e.animationState ||= ng(e);
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		Hm(e) && (this.unmountControls = e.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		let { animate: e } = this.node.getProps(), { animate: t } = this.node.prevProps || {};
		e !== t && this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset(), this.unmountControls?.();
	}
}, Nv = 0, Pv = {
	animation: { Feature: Mv },
	exit: { Feature: class extends ah {
		constructor() {
			super(...arguments), this.id = Nv++, this.isExitComplete = !1;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: e, onExitComplete: t } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || e === n) return;
			if (e && n === !1) {
				if (this.isExitComplete) {
					let { initial: e, custom: t } = this.node.getProps();
					if (typeof e == "string" || typeof e == "object" && e && !Array.isArray(e)) {
						let n = sp(this.node, e, t);
						if (n) {
							let { transition: e, transitionEnd: t, ...r } = n;
							for (let e in r) this.node.getValue(e)?.jump(r[e]);
						}
					}
					this.node.animationState.reset(), this.node.animationState.animateChanges();
				} else this.node.animationState.setActive("exit", !1);
				this.isExitComplete = !1;
				return;
			}
			let r = this.node.animationState.setActive("exit", !e);
			t && !e && r.then(() => {
				this.isExitComplete = !0, t(this.id);
			});
		}
		mount() {
			let { register: e, onExitComplete: t } = this.node.presenceContext || {};
			t && t(this.id), e && (this.unmount = e(this.id));
		}
		unmount() {}
	} }
};
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/events/event-info.mjs
function Fv(e) {
	return { point: {
		x: e.pageX,
		y: e.pageY
	} };
}
var Iv = (e) => (t) => om(t) && e(t, Fv(t));
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function Lv(e, t, n, r) {
	return Yg(e, t, Iv(n), r);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var Rv = ({ current: e }) => e ? e.ownerDocument.defaultView : null, zv = (e, t) => Math.abs(e - t);
function Bv(e, t) {
	let n = zv(e.x, t.x), r = zv(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var Vv = /* @__PURE__ */ new Set(["auto", "scroll"]), Hv = class {
	constructor(e, t, { transformPagePoint: n, contextWindow: r = window, dragSnapToOrigin: i = !1, distanceThreshold: a = 3, element: o } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (e) => {
			this.handleScroll(e.target);
		}, this.onWindowScroll = () => {
			this.handleScroll(window);
		}, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Uv(this.lastRawMoveEventInfo, this.transformPagePoint));
			let e = Gv(this.lastMoveEventInfo, this.history), t = this.startEvent !== null, n = Bv(e.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!t && !n) return;
			let { point: r } = e, { timestamp: i } = Kl;
			this.history.push({
				...r,
				timestamp: i
			});
			let { onStart: a, onMove: o } = this.handlers;
			t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e);
		}, this.handlePointerMove = (e, t) => {
			this.lastMoveEvent = e, this.lastRawMoveEventInfo = t, this.lastMoveEventInfo = Uv(t, this.transformPagePoint), Wl.update(this.updatePoint, !0);
		}, this.handlePointerUp = (e, t) => {
			this.end();
			let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
			if ((this.dragSnapToOrigin || !this.startEvent) && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let a = Gv(e.type === "pointercancel" ? this.lastMoveEventInfo : Uv(t, this.transformPagePoint), this.history);
			this.startEvent && n && n(e, a), r && r(e, a);
		}, !om(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.distanceThreshold = a, this.contextWindow = r || window;
		let s = Uv(Fv(e), this.transformPagePoint), { point: c } = s, { timestamp: l } = Kl;
		this.history = [{
			...c,
			timestamp: l
		}];
		let { onSessionStart: u } = t;
		u && u(e, Gv(s, this.history)), this.removeListeners = ll(Lv(this.contextWindow, "pointermove", this.handlePointerMove), Lv(this.contextWindow, "pointerup", this.handlePointerUp), Lv(this.contextWindow, "pointercancel", this.handlePointerUp)), o && this.startScrollTracking(o);
	}
	startScrollTracking(e) {
		let t = e.parentElement;
		for (; t;) {
			let e = getComputedStyle(t);
			(Vv.has(e.overflowX) || Vv.has(e.overflowY)) && this.scrollPositions.set(t, {
				x: t.scrollLeft,
				y: t.scrollTop
			}), t = t.parentElement;
		}
		this.scrollPositions.set(window, {
			x: window.scrollX,
			y: window.scrollY
		}), window.addEventListener("scroll", this.onElementScroll, { capture: !0 }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
			window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }), window.removeEventListener("scroll", this.onWindowScroll);
		};
	}
	handleScroll(e) {
		let t = this.scrollPositions.get(e);
		if (!t) return;
		let n = e === window, r = n ? {
			x: window.scrollX,
			y: window.scrollY
		} : {
			x: e.scrollLeft,
			y: e.scrollTop
		}, i = {
			x: r.x - t.x,
			y: r.y - t.y
		};
		i.x === 0 && i.y === 0 || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(e, r), Wl.update(this.updatePoint, !0));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Gl(this.updatePoint);
	}
};
function Uv(e, t) {
	return t ? { point: t(e.point) } : e;
}
function Wv(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function Gv({ point: e }, t) {
	return {
		point: e,
		delta: Wv(e, qv(t)),
		offset: Wv(e, Kv(t)),
		velocity: Jv(t, .1)
	};
}
function Kv(e) {
	return e[0];
}
function qv(e) {
	return e[e.length - 1];
}
function Jv(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1, r = null, i = qv(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ fl(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	r === e[0] && e.length > 2 && i.timestamp - r.timestamp > /* @__PURE__ */ fl(t) * 2 && (r = e[1]);
	let a = /* @__PURE__ */ pl(i.timestamp - r.timestamp);
	if (a === 0) return {
		x: 0,
		y: 0
	};
	let o = {
		x: (i.x - r.x) / a,
		y: (i.y - r.y) / a
	};
	return o.x === Infinity && (o.x = 0), o.y === Infinity && (o.y = 0), o;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function Yv(e, { min: t, max: n }, r) {
	return t !== void 0 && e < t ? e = r ? Gu(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Gu(n, e, r.max) : Math.min(e, n)), e;
}
function Xv(e, t, n) {
	return {
		min: t === void 0 ? void 0 : e.min + t,
		max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
	};
}
function Zv(e, { top: t, left: n, bottom: r, right: i }) {
	return {
		x: Xv(e.x, n, i),
		y: Xv(e.y, t, r)
	};
}
function Qv(e, t) {
	let n = t.min - e.min, r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	};
}
function $v(e, t) {
	return {
		x: Qv(e.x, t.x),
		y: Qv(e.y, t.y)
	};
}
function ey(e, t) {
	let n = .5, r = hg(e), i = hg(t);
	return i > r ? n = /* @__PURE__ */ ul(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ ul(e.min, e.max - i, t.min)), $c(0, 1, n);
}
function ty(e, t) {
	let n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var ny = .35;
function ry(e = ny) {
	return e === !1 ? e = 0 : e === !0 && (e = ny), {
		x: iy(e, "left", "right"),
		y: iy(e, "top", "bottom")
	};
}
function iy(e, t, n) {
	return {
		min: ay(e, t),
		max: ay(e, n)
	};
}
function ay(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var oy = /* @__PURE__ */ new WeakMap(), sy = class {
	constructor(e) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Bm(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
	}
	start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
		let { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		let i = (e) => {
			t && this.snapToCursor(Fv(e).point), this.stopAnimation();
		}, a = (e, t) => {
			let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
			if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = tm(n), !this.openDragLock)) return;
			this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Lg((e) => {
				let t = this.getAxisMotionValue(e).get() || 0;
				if (bu.test(t)) {
					let { projection: n } = this.visualElement;
					if (n && n.layout) {
						let r = n.layout.layoutBox[e];
						r && (t = hg(r) * (parseFloat(t) / 100));
					}
				}
				this.originPoint[e] = t;
			}), i && Wl.update(() => i(e, t), !1, !0), bp(this.visualElement, "transform");
			let { animationState: a } = this.visualElement;
			a && a.setActive("whileDrag", !0);
		}, o = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t;
			let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
			if (!n && !this.openDragLock) return;
			let { offset: o } = t;
			if (r && this.currentDirection === null) {
				this.currentDirection = dy(o), this.currentDirection !== null && i && i(this.currentDirection);
				return;
			}
			this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), a && Wl.update(() => a(e, t), !1, !0);
		}, s = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t, this.stop(e, t), this.latestPointerEvent = null, this.latestPanInfo = null;
		}, c = () => {
			let { dragSnapToOrigin: e } = this.getProps();
			(e || this.constraints) && this.startAnimation({
				x: 0,
				y: 0
			});
		}, { dragSnapToOrigin: l } = this.getProps();
		this.panSession = new Hv(e, {
			onSessionStart: i,
			onStart: a,
			onMove: o,
			onSessionEnd: s,
			resumeAnimation: c
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: l,
			distanceThreshold: n,
			contextWindow: Rv(this.visualElement),
			element: this.visualElement.current
		});
	}
	stop(e, t) {
		let n = e || this.latestPointerEvent, r = t || this.latestPanInfo, i = this.isDragging;
		if (this.cancel(), !i || !r || !n) return;
		let { velocity: a } = r;
		this.startAnimation(a);
		let { onDragEnd: o } = this.getProps();
		o && Wl.postRender(() => o(n, r));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: e, animationState: t } = this.visualElement;
		e && (e.isAnimationBlocked = !1), this.endPanSession();
		let { dragPropagation: n } = this.getProps();
		!n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive("whileDrag", !1);
	}
	endPanSession() {
		this.panSession && this.panSession.end(), this.panSession = void 0;
	}
	updateAxis(e, t, n) {
		let { drag: r } = this.getProps();
		if (!n || !uy(e, r, this.currentDirection)) return;
		let i = this.getAxisMotionValue(e), a = this.originPoint[e] + n[e];
		this.constraints && this.constraints[e] && (a = Yv(a, this.constraints[e], this.elastic[e])), i.set(a);
	}
	resolveConstraints() {
		let { dragConstraints: e, dragElastic: t } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
		e && Sv(e) ? this.constraints ||= this.resolveRefConstraints() : e && n ? this.constraints = Zv(n.layoutBox, e) : this.constraints = !1, this.elastic = ry(t), r !== this.constraints && !Sv(e) && n && this.constraints && !this.hasMutatedConstraints && Lg((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = ty(n.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!e || !Sv(e)) return !1;
		let n = e.current;
		nl(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
		let { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		r.root && (r.root.scroll = void 0, r.root.updateScroll());
		let i = Eh(n, r.root, this.visualElement.getTransformPagePoint()), a = $v(r.layout.layoutBox, i);
		if (t) {
			let e = t(sh(a));
			this.hasMutatedConstraints = !!e, e && (a = oh(e));
		}
		return a;
	}
	startAnimation(e) {
		let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), s = this.constraints || {}, c = Lg((o) => {
			if (!uy(o, t, this.currentDirection)) return;
			let c = s && s[o] || {};
			(a === !0 || a === o) && (c = {
				min: 0,
				max: 0
			});
			let l = r ? 200 : 1e6, u = r ? 40 : 1e7, d = {
				type: "inertia",
				velocity: n ? e[o] : 0,
				bounceStiffness: l,
				bounceDamping: u,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...i,
				...c
			};
			return this.startAxisValueAnimation(o, d);
		});
		return Promise.all(c).then(o);
	}
	startAxisValueAnimation(e, t) {
		let n = this.getAxisMotionValue(e);
		return bp(this.visualElement, e), n.start(ip(e, n, 0, t, this.visualElement, !1));
	}
	stopAnimation() {
		Lg((e) => this.getAxisMotionValue(e).stop());
	}
	getAxisMotionValue(e) {
		let t = `_drag${e.toUpperCase()}`;
		return this.visualElement.getProps()[t] || this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0);
	}
	snapToCursor(e) {
		Lg((t) => {
			let { drag: n } = this.getProps();
			if (!uy(t, n, this.currentDirection)) return;
			let { projection: r } = this.visualElement, i = this.getAxisMotionValue(t);
			if (r && r.layout) {
				let { min: n, max: a } = r.layout.layoutBox[t], o = i.get() || 0;
				i.set(e[t] - Gu(n, a, .5) + o);
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement;
		if (!Sv(t) || !n || !this.constraints) return;
		this.stopAnimation();
		let r = {
			x: 0,
			y: 0
		};
		Lg((e) => {
			let t = this.getAxisMotionValue(e);
			if (t && this.constraints !== !1) {
				let n = t.get();
				r[e] = ey({
					min: n,
					max: n
				}, this.constraints[e]);
			}
		});
		let { transformTemplate: i } = this.visualElement.getProps();
		this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), Lg((t) => {
			if (!uy(t, e, null)) return;
			let n = this.getAxisMotionValue(t), { min: i, max: a } = this.constraints[t];
			n.set(Gu(i, a, r[t]));
		}), this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		oy.set(this.visualElement, this);
		let e = this.visualElement.current, t = Lv(e, "pointerdown", (t) => {
			let { drag: n, dragListener: r = !0 } = this.getProps(), i = t.target, a = i !== e && um(i);
			n && r && !a && this.start(t);
		}), n, r = () => {
			let { dragConstraints: t } = this.getProps();
			Sv(t) && t.current && (this.constraints = this.resolveRefConstraints(), n ||= ly(e, t.current, () => this.scalePositionWithinConstraints()));
		}, { projection: i } = this.visualElement, a = i.addEventListener("measure", r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), Wl.read(r);
		let o = Yg(window, "resize", () => this.scalePositionWithinConstraints()), s = i.addEventListener("didUpdate", (({ delta: e, hasLayoutChanged: t }) => {
			this.isDragging && t && (Lg((t) => {
				let n = this.getAxisMotionValue(t);
				n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate));
			}), this.visualElement.render());
		}));
		return () => {
			o(), t(), a(), s && s(), n && n();
		};
	}
	getProps() {
		let e = this.visualElement.getProps(), { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = ny, dragMomentum: o = !0 } = e;
		return {
			...e,
			drag: t,
			dragDirectionLock: n,
			dragPropagation: r,
			dragConstraints: i,
			dragElastic: a,
			dragMomentum: o
		};
	}
};
function cy(e) {
	let t = !0;
	return () => {
		if (t) {
			t = !1;
			return;
		}
		e();
	};
}
function ly(e, t, n) {
	let r = Mm(e, cy(n)), i = Mm(t, cy(n));
	return () => {
		r(), i();
	};
}
function uy(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function dy(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var fy = class extends ah {
	constructor(e) {
		super(e), this.removeGroupControls = cl, this.removeListeners = cl, this.controls = new sy(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || cl;
	}
	update() {
		let { dragControls: e } = this.node.getProps(), { dragControls: t } = this.node.prevProps || {};
		e !== t && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
	}
}, py = (e) => (t, n) => {
	e && Wl.update(() => e(t, n), !1, !0);
}, my = class extends ah {
	constructor() {
		super(...arguments), this.removePointerDownListener = cl;
	}
	onPointerDown(e) {
		this.session = new Hv(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: Rv(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
		return {
			onSessionStart: py(e),
			onStart: py(t),
			onMove: py(n),
			onEnd: (e, t) => {
				delete this.session, r && Wl.postRender(() => r(e, t));
			}
		};
	}
	mount() {
		this.removePointerDownListener = Lv(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, hy = !1, gy = class extends Mt {
	componentDidMount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
		i && (t.group && t.group.add(i), n && n.register && r && n.register(i), hy && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), i.setOptions({
			...i.options,
			layoutDependency: this.props.layoutDependency,
			onExitComplete: () => this.safeToRemove()
		})), t_.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(e) {
		let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, { projection: a } = n;
		return a ? (a.isPresent = i, e.layoutDependency !== t && a.setOptions({
			...a.options,
			layoutDependency: t
		}), hy = !0, r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || Wl.postRender(() => {
			let e = a.getStack();
			(!e || !e.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { visualElement: e, layoutAnchor: t } = this.props, { projection: n } = e;
		n && (n.options.layoutAnchor = t, n.root.didUpdate(), Zp.postRender(() => {
			!n.currentAnimation && n.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;
		hy = !0, r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
	}
	safeToRemove() {
		let { safeToRemove: e } = this.props;
		e && e();
	}
	render() {
		return null;
	}
};
function _y(e) {
	let [t, n] = z_(), r = W(Kc);
	return B(gy, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: W(xv),
		isPresent: t,
		safeToRemove: n
	});
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/motion/features/drag.mjs
var vy = {
	pan: { Feature: my },
	drag: {
		Feature: fy,
		ProjectionNode: L_,
		MeasureLayout: _y
	}
};
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/gestures/hover.mjs
function yy(e, t, n) {
	let { props: r } = e;
	e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
	let i = r["onHover" + n];
	i && Wl.postRender(() => i(t, Fv(t)));
}
var by = class extends ah {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = im(e, (e, t) => (yy(this.node, t, "Start"), (e) => yy(this.node, e, "End"))));
	}
	unmount() {}
}, xy = class extends ah {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let e = !1;
		try {
			e = this.node.current.matches(":focus-visible");
		} catch {
			e = !0;
		}
		!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
	}
	mount() {
		this.unmount = ll(Yg(this.node.current, "focus", () => this.onFocus()), Yg(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/gestures/press.mjs
function Sy(e, t, n) {
	let { props: r } = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
	let i = r["onTap" + (n === "End" ? "" : n)];
	i && Wl.postRender(() => i(t, Fv(t)));
}
var Cy = class extends ah {
	mount() {
		let { current: e } = this.node;
		if (!e) return;
		let { globalTapTarget: t, propagate: n } = this.node.props;
		this.unmount = _m(e, (e, t) => (Sy(this.node, t, "Start"), (e, { success: t }) => Sy(this.node, e, t ? "End" : "Cancel")), {
			useGlobalTarget: t,
			stopPropagation: n?.tap === !1
		});
	}
	unmount() {}
}, wy = /* @__PURE__ */ new WeakMap(), Ty = /* @__PURE__ */ new WeakMap(), Ey = (e) => {
	let t = wy.get(e.target);
	t && t(e);
}, Dy = (e) => {
	e.forEach(Ey);
};
function Oy({ root: e, ...t }) {
	let n = e || document;
	Ty.has(n) || Ty.set(n, {});
	let r = Ty.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(Dy, {
		root: e,
		...t
	})), r[i];
}
function ky(e, t, n) {
	let r = Oy(t);
	return wy.set(e, n), r.observe(e), () => {
		wy.delete(e), r.unobserve(e);
	};
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var Ay = {
	some: 0,
	all: 1
}, jy = class extends ah {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.stopObserver?.();
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == "number" ? r : Ay[r]
		}, o = (e) => {
			let { isIntersecting: t } = e;
			if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
			t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
			let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
			a && a(e);
		};
		this.stopObserver = ky(this.node.current, a, o);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: e, prevProps: t } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(My(e, t)) && this.startObserver();
	}
	unmount() {
		this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
	}
};
function My({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var Ny = {
	inView: { Feature: jy },
	tap: { Feature: Cy },
	focus: { Feature: xy },
	hover: { Feature: by }
}, Py = { layout: {
	ProjectionNode: L_,
	MeasureLayout: _y
} }, Fy = /* @__PURE__ */ Av({
	...Pv,
	...Ny,
	...vy,
	...Py
}, jv);
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/value/use-motion-value.mjs
function Iy(e) {
	let t = qc(() => pp(e)), { isStatic: n } = W(R_);
	if (n) {
		let [, n] = X(e);
		G(() => t.on("change", n), []);
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function Ly(e, t) {
	let n = Iy(t()), r = () => n.set(t());
	return r(), Jc(() => {
		let t = () => Wl.preRender(r, !1, !0), n = e.map((e) => e.on("change", t));
		return () => {
			n.forEach((e) => e()), Gl(r);
		};
	}), n;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/value/use-computed.mjs
function Ry(e) {
	dp.current = [], e();
	let t = Ly(dp.current, e);
	return dp.current = void 0, t;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/value/use-transform.mjs
function zy(e, t, n, r) {
	if (typeof e == "function") return Ry(e);
	if (n !== void 0 && !Array.isArray(n) && typeof t != "function") return Vy(e, t, n, r);
	let i = typeof t == "function" ? t : Pm(t, n, r), a = Array.isArray(e) ? By(e, i) : By([e], ([e]) => i(e)), o = Array.isArray(e) ? void 0 : e.accelerate;
	return o && !o.isTransformed && typeof t != "function" && Array.isArray(n) && r?.clamp !== !1 && (a.accelerate = {
		...o,
		times: t,
		keyframes: n,
		isTransformed: !0,
		...r?.ease ? { ease: r.ease } : {}
	}), a;
}
function By(e, t) {
	let n = qc(() => []);
	return Ly(e, () => {
		n.length = 0;
		let r = e.length;
		for (let t = 0; t < r; t++) n[t] = e[t].get();
		return t(n);
	});
}
function Vy(e, t, n, r) {
	let i = qc(() => Object.keys(n)), a = qc(() => ({}));
	for (let o of i) a[o] = zy(e, t, n[o], r);
	return a;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs
var Hy = class {
	constructor() {
		this.componentControls = /* @__PURE__ */ new Set();
	}
	subscribe(e) {
		return this.componentControls.add(e), () => this.componentControls.delete(e);
	}
	start(e, t) {
		this.componentControls.forEach((n) => {
			n.start(e.nativeEvent || e, t);
		});
	}
	cancel() {
		this.componentControls.forEach((e) => {
			e.cancel();
		});
	}
	stop() {
		this.componentControls.forEach((e) => {
			e.stop();
		});
	}
}, Uy = () => new Hy();
function Wy() {
	return qc(Uy);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/context/ReorderContext.mjs
var Gy = Ft(null);
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs
function Ky(e, t, n, r) {
	if (!r) return e;
	let i = e.findIndex((e) => e.value === t);
	if (i === -1) return e;
	let a = r > 0 ? 1 : -1, o = e[i + a];
	if (!o) return e;
	let s = e[i], c = o.layout, l = Gu(c.min, c.max, .5);
	return a === 1 && s.layout.max + n > l || a === -1 && s.layout.min + n < l ? Qc(e, i, i + a) : e;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/components/Reorder/Group.mjs
function qy({ children: e, as: t = "ul", axis: n = "y", onReorder: r, values: i, ...a }, o) {
	let s = qc(() => Fy[t]), c = [], l = Y(!1), u = Y(null);
	nl(!!i, "Reorder.Group must be provided a values prop", "reorder-values");
	let d = {
		axis: n,
		groupRef: u,
		registerItem: (e, t) => {
			let r = c.findIndex((t) => e === t.value);
			r === -1 ? c.push({
				value: e,
				layout: t[n]
			}) : c[r].layout = t[n], c.sort(Yy);
		},
		updateOrder: (e, t, n) => {
			if (l.current) return;
			let a = Ky(c, e, t, n);
			if (c !== a) {
				l.current = !0;
				let e = [...i];
				for (let t = 0; t < a.length; t++) if (c[t].value !== a[t].value) {
					let n = i.indexOf(c[t].value), r = i.indexOf(a[t].value);
					n !== -1 && r !== -1 && ([e[n], e[r]] = [e[r], e[n]]);
					break;
				}
				r(e);
			}
		}
	};
	G(() => {
		l.current = !1;
	});
	let f = (e) => {
		u.current = e, typeof o == "function" ? o(e) : o && (o.current = e);
	}, p = {
		overflowAnchor: "none",
		...a.style
	};
	return B(s, {
		...a,
		style: p,
		ref: f,
		ignoreStrict: !0,
		children: B(Gy.Provider, {
			value: d,
			children: e
		})
	});
}
var Jy = /* @__PURE__ */ Lt(qy);
function Yy(e, t) {
	return e.layout.min - t.layout.min;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/components/Reorder/utils/auto-scroll.mjs
var Xy = 50, Zy = 25, Qy = new Set(["auto", "scroll"]), $y = /* @__PURE__ */ new WeakMap(), eb = /* @__PURE__ */ new WeakMap(), tb = null;
function nb() {
	if (tb) {
		let e = ib(tb, "y");
		e && (eb.delete(e), $y.delete(e));
		let t = ib(tb, "x");
		t && t !== e && (eb.delete(t), $y.delete(t)), tb = null;
	}
}
function rb(e, t) {
	let n = getComputedStyle(e), r = t === "x" ? n.overflowX : n.overflowY, i = e === document.body || e === document.documentElement;
	return Qy.has(r) || i;
}
function ib(e, t) {
	let n = e?.parentElement;
	for (; n;) {
		if (rb(n, t)) return n;
		n = n.parentElement;
	}
	return null;
}
function ab(e, t, n) {
	let r = t.getBoundingClientRect(), i = n === "x" ? Math.max(0, r.left) : Math.max(0, r.top), a = n === "x" ? Math.min(window.innerWidth, r.right) : Math.min(window.innerHeight, r.bottom), o = e - i, s = a - e;
	if (o < Xy) {
		let e = 1 - o / Xy;
		return {
			amount: -Zy * e * e,
			edge: "start"
		};
	} else if (s < Xy) {
		let e = 1 - s / Xy;
		return {
			amount: Zy * e * e,
			edge: "end"
		};
	}
	return {
		amount: 0,
		edge: null
	};
}
function ob(e, t, n, r) {
	if (!e) return;
	tb = e;
	let i = ib(e, n);
	if (!i) return;
	let { amount: a, edge: o } = ab(t - (n === "x" ? window.scrollX : window.scrollY), i, n);
	if (o === null) {
		eb.delete(i), $y.delete(i);
		return;
	}
	let s = eb.get(i), c = i === document.body || i === document.documentElement;
	if (s !== o) {
		if (!(o === "start" && r < 0 || o === "end" && r > 0)) return;
		eb.set(i, o);
		let e = n === "x" ? i.scrollWidth - (c ? window.innerWidth : i.clientWidth) : i.scrollHeight - (c ? window.innerHeight : i.clientHeight);
		$y.set(i, e);
	}
	if (a > 0) {
		let e = $y.get(i);
		if ((n === "x" ? c ? window.scrollX : i.scrollLeft : c ? window.scrollY : i.scrollTop) >= e) return;
	}
	n === "x" ? c ? window.scrollBy({ left: a }) : i.scrollLeft += a : c ? window.scrollBy({ top: a }) : i.scrollTop += a;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.39.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/components/Reorder/Item.mjs
function sb(e, t = 0) {
	return vp(e) ? e : Iy(t);
}
function cb({ children: e, style: t = {}, value: n, as: r = "li", onDrag: i, onDragEnd: a, layout: o = !0, ...s }, c) {
	let l = qc(() => Fy[r]), u = W(Gy), d = {
		x: sb(t.x),
		y: sb(t.y)
	}, f = zy([d.x, d.y], ([e, t]) => e || t ? 1 : "unset");
	nl(!!u, "Reorder.Item must be a child of Reorder.Group", "reorder-item-child");
	let { axis: p, registerItem: m, updateOrder: h, groupRef: g } = u;
	return B(l, {
		drag: p,
		...s,
		dragSnapToOrigin: !0,
		style: {
			...t,
			x: d.x,
			y: d.y,
			zIndex: f
		},
		layout: o,
		onDrag: (e, t) => {
			let { velocity: r, point: a } = t;
			h(n, d[p].get(), r[p]), ob(g.current, a[p], p, r[p]), i && i(e, t);
		},
		onDragEnd: (e, t) => {
			nb(), a && a(e, t);
		},
		onLayoutMeasure: (e) => {
			m(n, e);
		},
		ref: c,
		ignoreStrict: !0,
		children: e
	});
}
var lb = /* @__PURE__ */ Lt(cb), ub = {
	layers: {
		icon: be,
		activeIcon: be
	},
	uploads: {
		icon: I,
		activeIcon: I
	},
	images: {
		icon: l,
		activeIcon: l
	},
	icons: {
		icon: Dt,
		activeIcon: Dt
	},
	"vector-board": {
		icon: z,
		activeIcon: z
	},
	apps: {
		icon: bt,
		activeIcon: bt
	},
	ai: {
		icon: rt,
		activeIcon: rt
	}
}, db = {
	ai: !1,
	qrCode: !0,
	icons: !0,
	vectorBoards: !0,
	imageUpload: !0,
	stockImages: !0,
	apps: !0,
	layers: !0,
	export: !0
};
function fb(e) {
	let t = e?.features;
	return t ? {
		ai: t.ai ?? db.ai,
		qrCode: t.qrCode ?? db.qrCode,
		icons: t.icons ?? db.icons,
		vectorBoards: t.vectorBoards ?? db.vectorBoards,
		imageUpload: t.imageUpload ?? db.imageUpload,
		stockImages: t.stockImages ?? db.stockImages,
		apps: t.apps ?? db.apps,
		layers: t.layers ?? db.layers,
		export: t.export ?? db.export
	} : db;
}
var pb = Ft(db);
function mb({ config: e, children: t }) {
	let n = J(() => fb(e), [e]);
	return /* @__PURE__ */ B(pb.Provider, {
		value: n,
		children: t
	});
}
function hb() {
	return W(pb);
}
//#endregion
//#region src/components/editor-floating-sidebar.tsx
var gb = [
	{
		id: "layers",
		label: "Layers",
		icon: ub.layers.icon,
		activeIcon: ub.layers.activeIcon
	},
	{
		id: "uploads",
		label: "Uploads",
		icon: ub.uploads.icon,
		activeIcon: ub.uploads.activeIcon
	},
	{
		id: "images",
		label: "Images",
		icon: ub.images.icon,
		activeIcon: ub.images.activeIcon
	},
	{
		id: "icons",
		label: "Icons",
		icon: ub.icons.icon,
		activeIcon: ub.icons.activeIcon
	},
	{
		id: "vector-board",
		label: "Vectors",
		icon: ub["vector-board"].icon,
		activeIcon: ub["vector-board"].activeIcon
	},
	{
		id: "apps",
		label: "Apps",
		icon: ub.apps.icon,
		activeIcon: ub.apps.activeIcon
	}
], _b = {
	layers: "layers",
	uploads: "imageUpload",
	images: "stockImages",
	icons: "icons",
	"vector-board": "vectorBoards",
	apps: "apps"
};
function vb({ activePanel: e, onSelectPanel: t, disabled: n }) {
	let r = Y(null), i = Y({}), [a, o] = X(null), s = hb(), c = J(() => gb.filter((e) => {
		let t = _b[e.id];
		return !t || s[t];
	}), [s]), l = e ? c.find((t) => t.id === e) ?? null : null;
	return zt(() => {
		if (!l || l.fancy) {
			o(null);
			return;
		}
		let e = i.current[l.id];
		if (!e) {
			o(null);
			return;
		}
		o({
			left: e.offsetLeft,
			top: e.offsetTop,
			width: e.offsetWidth,
			height: e.offsetHeight
		});
	}, [l]), G(() => {
		if (!l || l.fancy) return;
		let e = () => {
			let e = i.current[l.id];
			e && o({
				left: e.offsetLeft,
				top: e.offsetTop,
				width: e.offsetWidth,
				height: e.offsetHeight
			});
		};
		if (e(), typeof ResizeObserver != "function") return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
		let t = new ResizeObserver(e), n = r.current;
		return n && t.observe(n), Object.values(i.current).forEach((e) => {
			e && t.observe(e);
		}), window.addEventListener("resize", e), () => {
			t.disconnect(), window.removeEventListener("resize", e);
		};
	}, [l]), /* @__PURE__ */ V("nav", {
		ref: r,
		"data-avnac-chrome": !0,
		"aria-label": "Editor tools",
		className: ["pointer-events-auto fixed left-3 top-[calc(0.75rem+2.5rem+0.75rem+1px+0.75rem)] z-[45] flex flex-col gap-0.5 rounded-3xl border border-black/[0.08] bg-neutral-100/95 p-1.5 backdrop-blur-md sm:top-[calc(0.875rem+2.5rem+0.875rem+1px+0.75rem)]", n ? "pointer-events-none opacity-40" : ""].filter(Boolean).join(" "),
		children: [a ? /* @__PURE__ */ B(Fy.span, {
			"aria-hidden": !0,
			initial: !1,
			animate: {
				x: a.left,
				y: a.top,
				width: a.width,
				height: a.height,
				opacity: 1
			},
			transition: {
				type: "spring",
				stiffness: 560,
				damping: 40,
				mass: .72
			},
			className: "pointer-events-none absolute left-0 top-0 z-0 rounded-2xl border border-black/[0.06] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
		}) : null, c.map((r) => {
			let a = e === r.id, o = a ? r.activeIcon : r.icon;
			return r.fancy ? /* @__PURE__ */ V("button", {
				ref: (e) => {
					i.current[r.id] = e;
				},
				type: "button",
				disabled: n,
				"aria-pressed": a,
				onClick: () => t(r.id),
				className: ["avnac-ai-tile relative z-10 flex w-[4.25rem] flex-col items-center gap-1 rounded-2xl px-1.5 py-2.5 text-[11px] font-medium transition-[background,box-shadow]", n ? "cursor-not-allowed" : ""].join(" "),
				children: [/* @__PURE__ */ B(M, {
					icon: o,
					size: 22,
					strokeWidth: a ? void 0 : 1.75,
					className: "avnac-ai-accent shrink-0"
				}), /* @__PURE__ */ B("span", {
					className: "avnac-ai-accent max-w-full truncate font-semibold",
					children: r.label
				})]
			}, r.id) : /* @__PURE__ */ V("button", {
				ref: (e) => {
					i.current[r.id] = e;
				},
				type: "button",
				disabled: n,
				"aria-pressed": a,
				onClick: () => t(r.id),
				className: [
					"relative z-10 flex w-[4.25rem] flex-col items-center gap-1 rounded-2xl px-1.5 py-2.5 text-[11px] font-medium transition-colors",
					a ? "text-neutral-900" : "text-neutral-600 hover:bg-white/70 hover:text-neutral-900",
					n ? "cursor-not-allowed" : ""
				].join(" "),
				children: [/* @__PURE__ */ B(M, {
					icon: o,
					size: 22,
					strokeWidth: a ? void 0 : 1.65,
					className: "shrink-0 text-neutral-700"
				}), /* @__PURE__ */ B("span", {
					className: "max-w-full truncate",
					children: r.label
				})]
			}, r.id);
		})]
	});
}
//#endregion
//#region src/components/editor-images-panel.tsx
function yb({ open: e, onClose: t }) {
	return e ? /* @__PURE__ */ V("div", {
		"data-avnac-chrome": !0,
		className: [
			"pointer-events-auto fixed z-40 flex w-[min(100vw-1.5rem,340px)] max-h-[min(92dvh,720px)] flex-col overflow-hidden rounded-3xl border border-black/[0.08] bg-white/95 backdrop-blur-md",
			pt,
			Xe
		].join(" "),
		role: "dialog",
		"aria-label": "Images",
		children: [/* @__PURE__ */ V("div", {
			className: "flex shrink-0 items-start justify-between border-b border-black/[0.06] px-3 py-2",
			children: [/* @__PURE__ */ B("div", {
				className: "min-w-0",
				children: /* @__PURE__ */ B("div", {
					className: "text-sm font-semibold text-neutral-800",
					children: "Images"
				})
			}), /* @__PURE__ */ B("button", {
				type: "button",
				className: "flex h-8 w-8 items-center justify-center rounded-lg text-neutral-600 hover:bg-black/[0.06]",
				onClick: t,
				"aria-label": "Close images",
				children: /* @__PURE__ */ B(M, {
					icon: _e,
					size: 18,
					strokeWidth: 1.75
				})
			})]
		}), /* @__PURE__ */ B("div", {
			className: "flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden p-6",
			children: /* @__PURE__ */ B("p", {
				className: "text-center text-[13px] text-neutral-500",
				children: "Asset library coming soon."
			})
		})]
	}) : null;
}
//#endregion
//#region src/components/editor-layers-panel.tsx
function bb({ row: e, onSelectLayer: t, onRenameLayer: n }) {
	let [r, i] = X(!1), [a, o] = X(e.label);
	return G(() => {
		r || o(e.label);
	}, [
		e.id,
		e.label,
		r
	]), r && n ? /* @__PURE__ */ B("input", {
		type: "text",
		className: "min-w-0 flex-1 rounded-md border border-black/15 bg-white px-2 py-1 text-sm text-neutral-800 outline-none focus:border-black/30",
		value: a,
		onChange: (e) => o(e.target.value),
		onBlur: () => {
			i(!1), n(e.index, a.trim());
		},
		onKeyDown: (t) => {
			t.key === "Enter" && (t.preventDefault(), t.target.blur()), t.key === "Escape" && (o(e.label), i(!1));
		},
		autoFocus: !0,
		"aria-label": "Layer name",
		onPointerDown: (e) => e.stopPropagation()
	}) : /* @__PURE__ */ B("button", {
		type: "button",
		className: "flex min-w-0 flex-1 items-center gap-2 px-1 py-1.5 text-left text-sm text-neutral-800",
		onClick: () => t(e.index),
		title: n ? "Double-click to rename" : void 0,
		children: /* @__PURE__ */ B("span", {
			className: "truncate",
			onDoubleClick: (t) => {
				n && (t.preventDefault(), t.stopPropagation(), o(e.label), i(!0));
			},
			children: e.label
		})
	});
}
function xb(e) {
	return ["flex items-center gap-0.5 rounded-lg py-0.5", e ? "bg-[var(--accent)]/20" : "hover:bg-black/[0.04]"].join(" ");
}
function Sb({ row: e, value: t, onSelectLayer: n, onToggleVisible: r, onBringForward: i, onSendBackward: a, onRenameLayer: o }) {
	let s = Wy(), c = U((e) => {
		e.preventDefault(), s.start(e);
	}, [s]);
	return /* @__PURE__ */ V(lb, {
		value: t,
		dragListener: !1,
		dragControls: s,
		className: xb(e.selected),
		style: { listStyle: "none" },
		children: [
			/* @__PURE__ */ B("div", {
				role: "button",
				tabIndex: 0,
				"aria-label": `Reorder ${e.label}`,
				title: "Drag to reorder",
				className: "flex h-8 w-7 shrink-0 cursor-grab touch-none items-center justify-center rounded-md text-neutral-400 hover:bg-black/[0.06] hover:text-neutral-600 active:cursor-grabbing",
				onPointerDown: c,
				onKeyDown: (e) => {
					(e.key === "Enter" || e.key === " ") && e.preventDefault();
				},
				children: /* @__PURE__ */ B(M, {
					icon: m,
					size: 16,
					strokeWidth: 1.75
				})
			}),
			/* @__PURE__ */ B(bb, {
				row: e,
				onSelectLayer: n,
				onRenameLayer: o
			}),
			/* @__PURE__ */ B("button", {
				type: "button",
				className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-neutral-600 hover:bg-black/[0.06]",
				title: e.visible ? "Hide" : "Show",
				"aria-label": e.visible ? "Hide layer" : "Show layer",
				onClick: () => r(e.index),
				children: /* @__PURE__ */ B(M, {
					icon: e.visible ? ne : Ke,
					size: 18,
					strokeWidth: 1.75
				})
			}),
			/* @__PURE__ */ B("button", {
				type: "button",
				className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-neutral-600 hover:bg-black/[0.06]",
				title: "Forward",
				"aria-label": "Bring forward",
				onClick: () => i(e.index),
				children: /* @__PURE__ */ B(M, {
					icon: Ie,
					size: 18,
					strokeWidth: 1.75
				})
			}),
			/* @__PURE__ */ B("button", {
				type: "button",
				className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-neutral-600 hover:bg-black/[0.06]",
				title: "Backward",
				"aria-label": "Send backward",
				onClick: () => a(e.index),
				children: /* @__PURE__ */ B(M, {
					icon: yt,
					size: 18,
					strokeWidth: 1.75
				})
			})
		]
	});
}
function Cb({ row: e, onSelectLayer: t, onToggleVisible: n, onBringForward: r, onSendBackward: i, onRenameLayer: a }) {
	return /* @__PURE__ */ V("li", {
		className: xb(e.selected),
		children: [
			/* @__PURE__ */ B(bb, {
				row: e,
				onSelectLayer: t,
				onRenameLayer: a
			}),
			/* @__PURE__ */ B("button", {
				type: "button",
				className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-neutral-600 hover:bg-black/[0.06]",
				title: e.visible ? "Hide" : "Show",
				"aria-label": e.visible ? "Hide layer" : "Show layer",
				onClick: () => n(e.index),
				children: /* @__PURE__ */ B(M, {
					icon: e.visible ? ne : Ke,
					size: 18,
					strokeWidth: 1.75
				})
			}),
			/* @__PURE__ */ B("button", {
				type: "button",
				className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-neutral-600 hover:bg-black/[0.06]",
				title: "Forward",
				"aria-label": "Bring forward",
				onClick: () => r(e.index),
				children: /* @__PURE__ */ B(M, {
					icon: Ie,
					size: 18,
					strokeWidth: 1.75
				})
			}),
			/* @__PURE__ */ B("button", {
				type: "button",
				className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-neutral-600 hover:bg-black/[0.06]",
				title: "Backward",
				"aria-label": "Send backward",
				onClick: () => i(e.index),
				children: /* @__PURE__ */ B(M, {
					icon: yt,
					size: 18,
					strokeWidth: 1.75
				})
			})
		]
	});
}
function wb({ open: e, onClose: t, rows: n, onSelectLayer: r, onToggleVisible: i, onBringForward: a, onSendBackward: o, onReorder: s, onRenameLayer: c }) {
	if (!e) return null;
	let l = "max-h-[min(60vh,360px)] overflow-auto p-1";
	return /* @__PURE__ */ V("div", {
		"data-avnac-chrome": !0,
		className: [
			"pointer-events-auto fixed z-40 flex w-[min(100vw-1.5rem,280px)] flex-col overflow-hidden rounded-3xl border border-black/[0.08] bg-white/95 backdrop-blur-md",
			pt,
			Xe
		].join(" "),
		role: "dialog",
		"aria-label": "Layers",
		children: [/* @__PURE__ */ V("div", {
			className: "flex items-center justify-between border-b border-black/[0.06] px-3 py-2",
			children: [/* @__PURE__ */ B("span", {
				className: "text-sm font-semibold text-neutral-800",
				children: "Layers"
			}), /* @__PURE__ */ B("button", {
				type: "button",
				className: "flex h-8 w-8 items-center justify-center rounded-lg text-neutral-600 hover:bg-black/[0.06]",
				onClick: t,
				"aria-label": "Close layers",
				children: /* @__PURE__ */ B(M, {
					icon: _e,
					size: 18,
					strokeWidth: 1.75
				})
			})]
		}), n.length === 0 ? /* @__PURE__ */ B("ul", {
			className: l,
			children: /* @__PURE__ */ B("li", {
				className: "px-3 py-6 text-center text-sm text-neutral-500",
				children: "No objects yet"
			})
		}) : s ? /* @__PURE__ */ B(Jy, {
			as: "ul",
			axis: "y",
			className: l,
			values: n.map((e) => e.id),
			onReorder: s,
			children: n.map((e) => /* @__PURE__ */ B(Sb, {
				value: e.id,
				row: e,
				onSelectLayer: r,
				onToggleVisible: i,
				onBringForward: a,
				onSendBackward: o,
				onRenameLayer: c
			}, e.id))
		}) : /* @__PURE__ */ B("ul", {
			className: l,
			children: n.map((e) => /* @__PURE__ */ B(Cb, {
				row: e,
				onSelectLayer: r,
				onToggleVisible: i,
				onBringForward: a,
				onSendBackward: o,
				onRenameLayer: c
			}, e.id))
		})]
	});
}
//#endregion
//#region src/components/editor-uploads-panel.tsx
var Tb = 3;
function Eb({ open: e, onClose: t }) {
	let { onFetchAssets: n, onAssetUpload: r } = Ro(), i = L((e) => e.doc), a = L((e) => e.setDoc), o = L((e) => e.setSelectedIds), [s, c] = X([]), [l, u] = X(null), [d, f] = X(!1), [p, m] = X(!1), [h, g] = X(null), [_, v] = X(""), [y, b] = X(!1), x = Y(null), S = Y(null), C = Y(0), [w, T] = X("");
	G(() => {
		let e = setTimeout(() => T(_.trim()), 300);
		return () => clearTimeout(e);
	}, [_]), G(() => {
		if (!e || !n) return;
		let t = ++C.current;
		f(!0), g(null), n({ search: w || void 0 }).then((e) => {
			t === C.current && (c(e.items), u(e.nextCursor));
		}).catch((e) => {
			t === C.current && g(e instanceof Error ? e.message : "Failed to load assets");
		}).finally(() => {
			t === C.current && f(!1);
		});
	}, [
		e,
		n,
		w
	]);
	let E = U(() => {
		if (!n || !l || p) return;
		let e = ++C.current;
		m(!0), n({
			cursor: l,
			search: w || void 0
		}).then((t) => {
			e === C.current && (c((e) => [...e, ...t.items]), u(t.nextCursor));
		}).catch(() => {}).finally(() => {
			e === C.current && m(!1);
		});
	}, [
		n,
		l,
		p,
		w
	]);
	G(() => {
		let e = S.current;
		if (!e || !l) return;
		let t = () => {
			e.scrollTop + e.clientHeight >= e.scrollHeight - 80 && E();
		};
		return e.addEventListener("scroll", t, { passive: !0 }), () => e.removeEventListener("scroll", t);
	}, [l, E]);
	let ee = U(async (e) => {
		let n = await er(e.url).catch(() => ({
			src: e.url,
			naturalWidth: e.widthPx,
			naturalHeight: e.heightPx
		})), r = n.naturalWidth, s = n.naturalHeight, c = Math.min(1, 800 / Math.max(r, s));
		r = Math.round(r * c), s = Math.round(s * c);
		let l = Math.round(i.artboard.width / 2 - r / 2), u = Math.round(i.artboard.height / 2 - s / 2), d = {
			id: crypto.randomUUID(),
			type: "image",
			x: l,
			y: u,
			width: r,
			height: s,
			rotation: 0,
			opacity: 1,
			visible: !0,
			locked: !1,
			blurPct: 0,
			shadow: null,
			src: n.src,
			naturalWidth: n.naturalWidth,
			naturalHeight: n.naturalHeight,
			crop: {
				x: 0,
				y: 0,
				width: n.naturalWidth,
				height: n.naturalHeight,
				rotation: 0
			},
			cornerRadius: 0,
			stroke: null,
			strokeWidth: 0,
			name: e.name || void 0
		};
		a((e) => ({
			...e,
			objects: [...e.objects, d]
		})), o([d.id]), t();
	}, [
		i.artboard.width,
		i.artboard.height,
		t,
		a,
		o
	]), D = U(async (e) => {
		if (!(!e || e.length === 0 || !r)) {
			b(!0);
			try {
				let t = e[0], n = await r(t), i = {
					id: n.assetId ?? crypto.randomUUID(),
					name: t.name,
					thumbnailUrl: n.url,
					url: n.url,
					widthPx: n.width ?? 800,
					heightPx: n.height ?? 800,
					mimeType: t.type,
					createdAt: (/* @__PURE__ */ new Date()).toISOString()
				};
				c((e) => [i, ...e]);
			} catch {
				g("Upload failed");
			} finally {
				b(!1), x.current && (x.current.value = "");
			}
		}
	}, [r]), O = J(() => {
		if (!w) return s;
		let e = w.toLowerCase();
		return s.filter((t) => t.name?.toLowerCase().includes(e) || t.mimeType.includes(e));
	}, [s, w]);
	if (!e) return null;
	let k = !!n;
	return /* @__PURE__ */ V("div", {
		"data-avnac-chrome": !0,
		className: [
			"pointer-events-auto fixed z-40 flex w-[min(100vw-1.5rem,320px)] max-h-[min(92dvh,640px)] flex-col overflow-hidden rounded-3xl border border-black/[0.08] bg-white/95 backdrop-blur-md",
			pt,
			Xe
		].join(" "),
		role: "dialog",
		"aria-label": "Assets",
		children: [
			/* @__PURE__ */ V("div", {
				className: "flex items-center justify-between border-b border-black/[0.06] px-3 py-2",
				children: [/* @__PURE__ */ B("span", {
					className: "text-sm font-semibold text-neutral-800",
					children: "Assets"
				}), /* @__PURE__ */ B("button", {
					type: "button",
					className: "flex h-8 w-8 items-center justify-center rounded-lg text-neutral-600 hover:bg-black/[0.06]",
					onClick: t,
					"aria-label": "Close assets",
					children: /* @__PURE__ */ B(M, {
						icon: _e,
						size: 18,
						strokeWidth: 1.75
					})
				})]
			}),
			/* @__PURE__ */ V("div", {
				className: "flex gap-1.5 border-b border-black/[0.06] px-2.5 py-2",
				children: [/* @__PURE__ */ V("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ B(M, {
						icon: ze,
						size: 15,
						strokeWidth: 1.75,
						className: "absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400"
					}), /* @__PURE__ */ B("input", {
						type: "text",
						placeholder: "Search assets...",
						value: _,
						onChange: (e) => v(e.target.value),
						className: "h-8 w-full rounded-xl border border-black/[0.06] bg-neutral-50 pl-8 pr-2.5 text-xs text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-neutral-300 focus:ring-1 focus:ring-neutral-200"
					})]
				}), r ? /* @__PURE__ */ V(jt, { children: [/* @__PURE__ */ B("button", {
					type: "button",
					disabled: y,
					className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-black/[0.06] bg-neutral-50 text-neutral-600 hover:bg-neutral-100 disabled:opacity-50",
					onClick: () => x.current?.click(),
					"aria-label": "Upload asset",
					children: /* @__PURE__ */ B(M, {
						icon: I,
						size: 16,
						strokeWidth: 1.75
					})
				}), /* @__PURE__ */ B("input", {
					ref: x,
					type: "file",
					accept: "image/png,image/jpeg,image/svg+xml,image/webp",
					className: "hidden",
					onChange: (e) => void D(e.target.files)
				})] }) : null]
			}),
			/* @__PURE__ */ B("div", {
				ref: S,
				className: "flex-1 overflow-y-auto p-2.5",
				children: k ? d ? /* @__PURE__ */ B("div", {
					className: "flex items-center justify-center py-8",
					children: /* @__PURE__ */ B("div", { className: "h-5 w-5 animate-spin rounded-full border-2 border-neutral-300 border-t-transparent" })
				}) : h ? /* @__PURE__ */ B("div", {
					className: "px-3 py-6 text-center text-xs text-red-500",
					children: h
				}) : O.length === 0 ? /* @__PURE__ */ B("div", {
					className: "px-3 py-8 text-center text-sm text-neutral-500",
					children: w ? "No matching assets" : "No assets yet — upload one to get started"
				}) : /* @__PURE__ */ V(jt, { children: [/* @__PURE__ */ B("div", {
					className: "grid gap-2",
					style: { gridTemplateColumns: `repeat(${Tb}, 1fr)` },
					children: O.map((e) => /* @__PURE__ */ B(Db, {
						asset: e,
						onClick: () => void ee(e)
					}, e.id))
				}), p ? /* @__PURE__ */ B("div", {
					className: "flex justify-center py-3",
					children: /* @__PURE__ */ B("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-neutral-300 border-t-transparent" })
				}) : null] }) : /* @__PURE__ */ B("div", {
					className: "px-3 py-8 text-center text-sm text-neutral-500",
					children: "Asset library not connected"
				})
			}),
			y ? /* @__PURE__ */ B("div", {
				className: "absolute inset-0 z-10 flex items-center justify-center bg-white/80 backdrop-blur-sm",
				children: /* @__PURE__ */ V("div", {
					className: "text-center",
					children: [/* @__PURE__ */ B("div", { className: "mx-auto mb-2 h-5 w-5 animate-spin rounded-full border-2 border-neutral-400 border-t-transparent" }), /* @__PURE__ */ B("span", {
						className: "text-xs text-neutral-600",
						children: "Uploading..."
					})]
				})
			}) : null
		]
	});
}
function Db({ asset: e, onClick: t }) {
	let [n, r] = X(!1), [i, a] = X(!1);
	return /* @__PURE__ */ V("button", {
		type: "button",
		onClick: t,
		className: "group relative flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-black/[0.06] bg-neutral-50 transition-colors hover:border-neutral-300 hover:bg-neutral-100",
		title: e.name ?? "Unnamed asset",
		children: [
			i ? /* @__PURE__ */ B("span", {
				className: "text-[10px] text-neutral-400",
				children: "Error"
			}) : /* @__PURE__ */ B("img", {
				src: e.thumbnailUrl,
				alt: e.name ?? "Asset",
				loading: "lazy",
				onLoad: () => r(!0),
				onError: () => a(!0),
				className: ["h-full w-full object-contain p-1 transition-opacity", n ? "opacity-100" : "opacity-0"].join(" ")
			}),
			!n && !i ? /* @__PURE__ */ B("div", {
				className: "absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ B("div", { className: "h-3 w-3 animate-spin rounded-full border border-neutral-300 border-t-transparent" })
			}) : null,
			e.name ? /* @__PURE__ */ B("div", {
				className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-1.5 pb-1 pt-4 opacity-0 transition-opacity group-hover:opacity-100",
				children: /* @__PURE__ */ B("span", {
					className: "block truncate text-[10px] font-medium text-white",
					children: e.name
				})
			}) : null
		]
	});
}
//#endregion
//#region src/components/stroke-toolbar-popover.tsx
var Ob = 340, kb = 40;
function Ab({ strokeWidthPx: e, strokePaint: t, onStrokeWidthChange: n, onStrokePaintChange: r, strokeWidthMin: i = 0, strokeWidthMax: a = kb }) {
	let [o, s] = X(!1), c = Y(null), l = Y(null), u = U(() => l.current, []), d = Math.max(i, Math.min(a, Math.round(e))), { openUpward: f, shiftX: p } = Jn(o, c, Ob, u, "center");
	return G(() => {
		if (!o) return;
		let e = (e) => {
			c.current?.contains(e.target) || s(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [o]), /* @__PURE__ */ V("div", {
		ref: c,
		className: "relative shrink-0",
		children: [/* @__PURE__ */ V("button", {
			type: "button",
			className: [or(o, { wide: !0 }), "gap-1 px-2"].join(" "),
			"aria-label": `Outline stroke, ${d}px`,
			title: "Stroke",
			"aria-expanded": o,
			"aria-haspopup": "dialog",
			onClick: () => s((e) => !e),
			children: [/* @__PURE__ */ B(M, {
				icon: ct,
				size: 18,
				strokeWidth: 1.75
			}), /* @__PURE__ */ V("span", {
				className: "min-w-[2.25rem] text-left text-xs font-medium tabular-nums text-neutral-700",
				children: [d, "px"]
			})]
		}), o ? /* @__PURE__ */ V("div", {
			ref: l,
			className: [
				"absolute left-1/2 z-[70] min-w-[15rem] p-3",
				f ? "bottom-full mb-2" : "top-full mt-2",
				cr
			].join(" "),
			style: { transform: `translateX(calc(-50% + ${p}px))` },
			children: [
				/* @__PURE__ */ V("div", {
					className: "mb-3 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ B("span", {
						className: "text-[13px] font-medium text-neutral-800",
						children: "Stroke width"
					}), /* @__PURE__ */ V("span", {
						className: "text-[13px] tabular-nums text-neutral-600",
						children: [d, "px"]
					})]
				}),
				/* @__PURE__ */ B(nr, {
					min: i,
					max: a,
					value: d,
					onChange: n,
					"aria-label": "Stroke width",
					"aria-valuemin": i,
					"aria-valuemax": a,
					"aria-valuenow": d,
					trackClassName: "mb-4 w-full"
				}),
				/* @__PURE__ */ V("div", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ B("span", {
						className: "text-[13px] font-medium text-neutral-800",
						children: "Stroke color"
					}), /* @__PURE__ */ B(Bs, {
						compact: !0,
						value: t,
						onChange: r,
						ariaLabel: "Stroke color and gradient",
						title: "Stroke color"
					})]
				})
			]
		}) : null]
	});
}
//#endregion
//#region src/components/vector-board-workspace.tsx
var jb = .02, Mb = 24, Nb = .002, Pb = "rgba(15,23,42,0.32)", Fb = .017, Ib = Fb * Fb, Lb = .005;
function Rb(e, t, n, r, i) {
	let a = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">${e.map(([e, t]) => `<${e} ${Object.entries(t).filter(([e]) => e !== "key").map(([e, t]) => `${e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`)}="${String(t).replace(/currentColor/g, r)}"`).join(" ")} />`).join("")}</svg>`;
	return `url("data:image/svg+xml,${encodeURIComponent(a)}") ${t} ${n}, ${i}`;
}
var zb = Rb(de, 7, 2, "#1e293b", "default"), Bb = Rb(r, 10, 4, "#1e293b", "crosshair"), Vb = Rb(E, 10, 4, "#dc2626", "not-allowed");
function Hb(e) {
	return e.altKey || typeof e.getModifierState == "function" && e.getModifierState("Alt");
}
function Ub(e, t) {
	if (!(!e || t < 0)) try {
		e.hasPointerCapture(t) && e.releasePointerCapture(t);
	} catch {}
}
function Wb(e) {
	return !!e && e !== "transparent";
}
function Gb(e) {
	return e.type === "solid" ? e.color : e.stops[0]?.color ?? "#1a1a1a";
}
var Kb = [
	"nw",
	"n",
	"ne",
	"e",
	"se",
	"s",
	"sw",
	"w"
], qb = {
	nw: "nwse-resize",
	n: "ns-resize",
	ne: "nesw-resize",
	e: "ew-resize",
	se: "nwse-resize",
	s: "ns-resize",
	sw: "nesw-resize",
	w: "ew-resize"
};
function Jb(e, t) {
	let n = (t.minX + t.maxX) / 2, r = (t.minY + t.maxY) / 2;
	switch (e) {
		case "nw": return [t.minX, t.minY];
		case "n": return [n, t.minY];
		case "ne": return [t.maxX, t.minY];
		case "e": return [t.maxX, r];
		case "se": return [t.maxX, t.maxY];
		case "s": return [n, t.maxY];
		case "sw": return [t.minX, t.maxY];
		case "w": return [t.minX, r];
	}
}
function Yb(e, t) {
	switch (e) {
		case "nw": return [t.maxX, t.maxY];
		case "n": return [(t.minX + t.maxX) / 2, t.maxY];
		case "ne": return [t.minX, t.maxY];
		case "e": return [t.minX, (t.minY + t.maxY) / 2];
		case "se": return [t.minX, t.minY];
		case "s": return [(t.minX + t.maxX) / 2, t.minY];
		case "sw": return [t.maxX, t.minY];
		case "w": return [t.maxX, (t.minY + t.maxY) / 2];
	}
}
function Xb(e, t, n) {
	for (let r = e.anchors.length - 1; r >= 0; r--) {
		let i = e.anchors[r];
		if (i.outX != null && i.outY != null) {
			let e = t - i.outX, a = n - i.outY;
			if (e * e + a * a <= Ib) return {
				type: "handle",
				anchorIndex: r,
				which: "out"
			};
		}
		if (i.inX != null && i.inY != null) {
			let e = t - i.inX, a = n - i.inY;
			if (e * e + a * a <= Ib) return {
				type: "handle",
				anchorIndex: r,
				which: "in"
			};
		}
	}
	for (let r = e.anchors.length - 1; r >= 0; r--) {
		let i = e.anchors[r], a = t - i.x, o = n - i.y;
		if (a * a + o * o <= Ib * 1.44) return {
			type: "anchor",
			anchorIndex: r
		};
	}
	return null;
}
function Zb(e, t) {
	if (t < 0 || t >= e.length) return e;
	let n = e.map((e) => ({ ...e }));
	if (n.splice(t, 1), t > 0) {
		let e = n[t - 1];
		delete e.outX, delete e.outY;
	}
	if (t < n.length) {
		let e = n[t];
		delete e.inX, delete e.inY;
	}
	return n;
}
function Qb(e, t, n, r, i) {
	if (!(t.length < 2)) {
		e.moveTo(t[0].x * n, t[0].y * r);
		for (let i = 0; i < t.length - 1; i++) {
			let a = t[i], o = t[i + 1], [s, c] = xr(a), [l, u] = Sr(o);
			e.bezierCurveTo(s * n, c * r, l * n, u * r, o.x * n, o.y * r);
		}
		if (i && t.length >= 2) {
			let i = t[t.length - 1], a = t[0], [o, s] = xr(i), [c, l] = Sr(a);
			e.bezierCurveTo(o * n, s * r, c * n, l * r, a.x * n, a.y * r);
		}
	}
}
function $b(e, t, n) {
	e.fillStyle = "#2563eb", e.strokeStyle = "#1e40af", e.lineWidth = 1, e.beginPath(), e.moveTo(t, n - 4), e.lineTo(t + 4, n), e.lineTo(t, n + 4), e.lineTo(t - 4, n), e.closePath(), e.fill(), e.stroke();
}
function ex(e, t, n, r, i, a, o, s, c, l) {
	let { anchors: u, selectedAnchor: d } = t;
	if (u.length >= 2 && (e.lineCap = "round", e.lineJoin = "round", c && o && o !== "transparent" && u.length >= 3 && (e.beginPath(), Qb(e, u, n, r, !0), e.fillStyle = o, e.globalAlpha = .35, e.fill(), e.globalAlpha = 1), e.beginPath(), Qb(e, u, n, r, !1), a > 0 ? (e.strokeStyle = i, e.lineWidth = a) : (e.strokeStyle = "rgba(71, 85, 105, 0.82)", e.lineWidth = Math.max(.75, 1 / Math.max(.001, l))), e.stroke()), c && u.length >= 2) {
		let t = u[u.length - 1], i = u[0];
		e.save(), e.strokeStyle = "rgba(37, 99, 235, 0.9)", e.lineWidth = Math.max(1, a || 1), e.setLineDash([5, 4]), e.beginPath(), e.moveTo(t.x * n, t.y * r);
		let [o, s] = xr(t), [c, l] = Sr(i);
		e.bezierCurveTo(o * n, s * r, c * n, l * r, i.x * n, i.y * r), e.stroke(), e.restore();
	}
	let f = (e) => e * n, p = (e) => e * r;
	for (let t = 0; t < u.length; t++) {
		let n = u[t];
		n.inX != null && n.inY != null && (e.strokeStyle = "rgba(100,116,139,0.9)", e.lineWidth = 1, e.beginPath(), e.moveTo(f(n.x), p(n.y)), e.lineTo(f(n.inX), p(n.inY)), e.stroke(), $b(e, f(n.inX), p(n.inY))), n.outX != null && n.outY != null && (e.strokeStyle = "rgba(100,116,139,0.9)", e.lineWidth = 1, e.beginPath(), e.moveTo(f(n.x), p(n.y)), e.lineTo(f(n.outX), p(n.outY)), e.stroke(), $b(e, f(n.outX), p(n.outY)));
		let r = d === t ? 5 : 4;
		if (e.fillStyle = d === t ? "#2563eb" : "#ffffff", e.strokeStyle = "#2563eb", e.lineWidth = 1.5, e.beginPath(), e.arc(f(n.x), p(n.y), r, 0, Math.PI * 2), e.fill(), e.stroke(), s === t) {
			let t = f(n.x), r = p(n.y);
			e.strokeStyle = "#dc2626", e.lineWidth = 1.75, e.beginPath(), e.moveTo(t - 6, r - 6), e.lineTo(t + 6, r + 6), e.moveTo(t + 6, r - 6), e.lineTo(t - 6, r + 6), e.stroke();
		}
	}
}
function tx(e, t, n) {
	e.fillStyle = "#f8f8f7", e.fillRect(0, 0, t, n), e.strokeStyle = "rgba(10,10,10,0.06)", e.lineWidth = 1, e.beginPath();
	for (let r = 0; r <= t; r += Mb) e.moveTo(r + .5, 0), e.lineTo(r + .5, n);
	for (let r = 0; r <= n; r += Mb) e.moveTo(0, r + .5), e.lineTo(t, r + .5);
	e.stroke();
}
function nx(e, t, n, r) {
	let i = Math.max(1, Math.min(n, r));
	e.lineCap = "round", e.lineJoin = "round";
	let a = t.fill && t.fill.length > 0 && t.fill !== "transparent", o = Vr(t);
	if (o && (e.strokeStyle = t.stroke, e.lineWidth = Math.max(0, t.strokeWidthN * i)), t.kind === "pen") {
		if (t.penAnchors && t.penAnchors.length >= 2) {
			e.beginPath(), e.moveTo(t.penAnchors[0].x * n, t.penAnchors[0].y * r);
			for (let i = 0; i < t.penAnchors.length - 1; i++) {
				let a = t.penAnchors[i], o = t.penAnchors[i + 1], [s, c] = xr(a), [l, u] = Sr(o);
				e.bezierCurveTo(s * n, c * r, l * n, u * r, o.x * n, o.y * r);
			}
			if (t.penClosed === !0 && t.penAnchors.length >= 2) {
				let i = t.penAnchors[t.penAnchors.length - 1], a = t.penAnchors[0], [o, s] = xr(i), [c, l] = Sr(a);
				e.bezierCurveTo(o * n, s * r, c * n, l * r, a.x * n, a.y * r);
			}
			a && t.penClosed === !0 && (e.fillStyle = t.fill, e.fill()), o && e.stroke();
			return;
		}
		if (t.points.length < 2) return;
		e.beginPath(), e.moveTo(t.points[0][0] * n, t.points[0][1] * r);
		for (let i = 1; i < t.points.length; i++) e.lineTo(t.points[i][0] * n, t.points[i][1] * r);
		t.penClosed === !0 && t.points.length >= 3 && e.closePath(), a && t.penClosed === !0 && t.points.length >= 3 && (e.fillStyle = t.fill, e.fill()), o && e.stroke();
		return;
	}
	if (t.kind === "polygon") {
		if (t.points.length < 2) return;
		e.beginPath(), e.moveTo(t.points[0][0] * n, t.points[0][1] * r);
		for (let i = 1; i < t.points.length; i++) e.lineTo(t.points[i][0] * n, t.points[i][1] * r);
		t.points.length >= 3 && e.closePath(), a && (e.fillStyle = t.fill, e.fill()), o && e.stroke();
		return;
	}
	if (t.points.length < 2) return;
	let [s, c] = t.points[0], [l, u] = t.points[1], d = s * n, f = c * r, p = l * n, m = u * r;
	if (t.kind === "line") {
		if (!o) return;
		e.beginPath(), e.moveTo(d, f), e.lineTo(p, m), e.stroke();
		return;
	}
	if (t.kind === "rect") {
		let n = Math.min(d, p), r = Math.max(d, p), i = Math.min(f, m), s = Math.max(f, m);
		e.beginPath(), e.rect(n, i, r - n, s - i), a && (e.fillStyle = t.fill, e.fill()), o && e.stroke();
		return;
	}
	if (t.kind === "ellipse") {
		let i = Math.min(s, l), d = Math.max(s, l), f = Math.min(c, u), p = Math.max(c, u), m = (i + d) / 2 * n, h = (f + p) / 2 * r, g = (d - i) / 2 * n, _ = (p - f) / 2 * r;
		if (g < .5 || _ < .5) return;
		e.beginPath(), e.ellipse(m, h, g, _, 0, 0, Math.PI * 2), a && (e.fillStyle = t.fill, e.fill()), o && e.stroke();
		return;
	}
	if (t.kind === "arrow") {
		if (!o) return;
		e.beginPath(), e.moveTo(d, f), e.lineTo(p, m), e.stroke();
		let t = p - d, n = m - f, r = Math.hypot(t, n);
		if (r < 2) return;
		t /= r, n /= r;
		let i = Math.min(r * .35, 28), a = i * .45, s = p - t * i, c = m - n * i, l = -n, u = t;
		e.beginPath(), e.moveTo(p, m), e.lineTo(s + l * a, c + u * a), e.moveTo(p, m), e.lineTo(s - l * a, c - u * a), e.stroke();
	}
}
function rx(e, t, n, r) {
	for (let i of t.layers) if (i.visible) for (let t of i.strokes) nx(e, t, n, r);
}
function ix(e, t, n, r) {
	e.fillStyle = "#f8f8f7", e.fillRect(0, 0, n, r), rx(e, t, n, r);
}
function ax(e, t, n, r, i, a, o, s, c, l) {
	if (!t) return;
	if (t.kind === "pen-bezier") {
		ex(e, t, n, r, i, a, o, s, c, l);
		return;
	}
	if (t.kind === "polyline") {
		let o = Math.max(0, a);
		if (o <= 0 || (e.strokeStyle = i, e.lineWidth = o, e.lineCap = "round", e.lineJoin = "round", t.points.length < 2)) return;
		e.beginPath(), e.moveTo(t.points[0][0] * n, t.points[0][1] * r);
		for (let i = 1; i < t.points.length; i++) e.lineTo(t.points[i][0] * n, t.points[i][1] * r);
		e.stroke();
		return;
	}
	let u = t, d = Math.max(0, a), f = d > 0 ? d : 1;
	e.strokeStyle = i, e.lineCap = "round", e.lineJoin = "round";
	let p = u.b ?? u.a, m = u.a[0] * n, h = u.a[1] * r, g = p[0] * n, _ = p[1] * r;
	if (u.tool === "rect") {
		let t = Math.min(m, g), n = Math.max(m, g), r = Math.min(h, _), i = Math.max(h, _);
		e.beginPath(), e.rect(t, r, n - t, i - r), o && o !== "transparent" && (e.fillStyle = o, e.globalAlpha = .35, e.fill(), e.globalAlpha = 1), e.lineWidth = f, e.strokeStyle = Pb, e.stroke();
		return;
	}
	if (u.tool === "ellipse") {
		let t = u.a[0], i = u.a[1], a = p[0], s = p[1], c = Math.min(t, a), l = Math.max(t, a), d = Math.min(i, s), m = Math.max(i, s), h = (c + l) / 2 * n, g = (d + m) / 2 * r, _ = (l - c) / 2 * n, v = (m - d) / 2 * r;
		if (_ < .5 || v < .5) return;
		e.beginPath(), e.ellipse(h, g, _, v, 0, 0, Math.PI * 2), o && o !== "transparent" && (e.fillStyle = o, e.globalAlpha = .35, e.fill(), e.globalAlpha = 1), e.lineWidth = f, e.strokeStyle = Pb, e.stroke();
	}
}
function ox(e, t, n, r) {
	let i = (t[0] - e[0]) * n, a = (t[1] - e[1]) * r, o = Math.max(Math.abs(i), Math.abs(a)), s = i < 0 ? -1 : 1, c = a < 0 ? -1 : 1;
	return [e[0] + s * o / Math.max(1, n), e[1] + c * o / Math.max(1, r)];
}
function sx(e, t, n, r, i) {
	if (!t) return;
	let a = t.minX * n, o = t.minY * r, s = (t.maxX - t.minX) * n, c = (t.maxY - t.minY) * r;
	s <= 0 || c <= 0 || (e.save(), e.fillStyle = "rgba(37,99,235,0.08)", e.strokeStyle = "rgba(37,99,235,0.75)", e.lineWidth = 1 / i, e.fillRect(a, o, s, c), e.strokeRect(a, o, s, c), e.restore());
}
function cx(e, t, n, r, i) {
	if (!t) return;
	let a = t.minX * n, o = t.minY * r, s = t.maxX * n, c = t.maxY * r;
	e.save(), e.strokeStyle = "#2563eb", e.lineWidth = 1 / i, e.strokeRect(a, o, Math.max(1, s - a), Math.max(1, c - o));
	let l = 8 / i, u = l / 2;
	for (let a of Kb) {
		let [o, s] = Jb(a, t), c = o * n - u, d = s * r - u;
		e.fillStyle = "#ffffff", e.strokeStyle = "#2563eb", e.lineWidth = 1 / i, e.fillRect(c, d, l, l), e.strokeRect(c, d, l, l);
	}
	e.restore();
}
function lx(e, t, n, r, i, a, o) {
	if (!n) return;
	let s = t.layers.find((e) => e.id === n.layerId);
	if (!s?.visible) return;
	let c = s.strokes.find((e) => e.id === n.strokeId);
	if (!c || c.kind !== "pen" || !c.penAnchors) return;
	let l = c.penAnchors;
	if (l.length === 0) return;
	e.save(), l.length >= 2 && (e.lineCap = "round", e.lineJoin = "round", e.strokeStyle = Vr(c) ? "rgba(100, 116, 139, 0.42)" : "rgba(71, 85, 105, 0.88)", e.lineWidth = Math.max(.75, 1 / Math.max(.001, a)), e.beginPath(), Qb(e, l, r, i, c.penClosed === !0), e.stroke()), e.strokeStyle = "rgba(37,99,235,0.5)", e.lineWidth = 1 / a;
	for (let t of l) t.inX != null && t.inY != null && (e.beginPath(), e.moveTo(t.x * r, t.y * i), e.lineTo(t.inX * r, t.inY * i), e.stroke()), t.outX != null && t.outY != null && (e.beginPath(), e.moveTo(t.x * r, t.y * i), e.lineTo(t.outX * r, t.outY * i), e.stroke());
	let u = 3 / a;
	for (let t of l) t.inX != null && t.inY != null && (e.fillStyle = "#2563eb", e.beginPath(), e.arc(t.inX * r, t.inY * i, u, 0, Math.PI * 2), e.fill()), t.outX != null && t.outY != null && (e.fillStyle = "#2563eb", e.beginPath(), e.arc(t.outX * r, t.outY * i, u, 0, Math.PI * 2), e.fill());
	let d = 6 / a, f = d / 2;
	for (let t of l) e.fillStyle = "#ffffff", e.strokeStyle = "#2563eb", e.lineWidth = 1 / a, e.fillRect(t.x * r - f, t.y * i - f, d, d), e.strokeRect(t.x * r - f, t.y * i - f, d, d);
	if (o) {
		let t = o.x * r, n = o.y * i, s = 4 / a;
		e.beginPath(), e.arc(t, n, s, 0, Math.PI * 2), e.fillStyle = "#ffffff", e.fill(), e.lineWidth = 1.25 / a, e.strokeStyle = "#2563eb", e.stroke();
	}
	e.restore();
}
function ux({ open: e, boardName: t, document: n, onDocumentChange: r, onSave: i, onSaveAndPlace: a, onClose: o }) {
	let s = Y(null), c = Y(null), [l, u] = X("pencil"), [f, p] = X("#1a1a1a"), [m, h] = X("#94a3b8"), [g, _] = X(0), [v, y] = X(null), b = Y(null), [x, S] = X(null), [C, w] = X(!1), [T, E] = X([]), ee = Y(null), O = Y(null), [k, A] = X(null), [j, N] = X(!1), te = Y(null), P = Y(n);
	P.current = n;
	let [re, ie] = X(1), [ae, F] = X(0), [oe, se] = X(0), ce = Y({
		scale: 1,
		tx: 0,
		ty: 0
	});
	ce.current = {
		scale: re,
		tx: ae,
		ty: oe
	};
	let le = Y(!1), ue = Y(null), fe = Y({
		stack: [n],
		index: 0
	}), pe = Y(null), [me, he] = X(null), ge = Y(null);
	ge.current = me;
	let [I, L] = X(null), R = Y(null);
	R.current = I;
	let ve = Y(null), ye = Y(null), be = Y(!1), xe = T.length > 0 ? T[T.length - 1] : null, Se = xe ? `${xe.layerId}:${xe.strokeId}` : null, Ce = J(() => xe ? n.layers.find((e) => e.id === xe.layerId)?.strokes.find((e) => e.id === xe.strokeId) ?? null : null, [n, xe]);
	G(() => {
		if (!e || !Se || !xe) return;
		let t = P.current.layers.find((e) => e.id === xe.layerId)?.strokes.find((e) => e.id === xe.strokeId);
		if (!t) return;
		let n = c.current, r = n?.getBoundingClientRect().width ?? 1, i = n?.getBoundingClientRect().height ?? 1, a = Math.max(1, Math.min(r, i)), o = t.stroke && Wb(t.stroke) ? t.stroke : "#1a1a1a", s = t.fill && t.fill !== "transparent" ? t.fill : "#94a3b8", l = Math.min(16, Math.max(0, Math.round(t.strokeWidthN * a)));
		p(o), h(s), _(l);
	}, [
		e,
		Se,
		xe
	]);
	let we = U(() => {
		let e = s.current, t = c.current;
		if (!e || !t) return;
		let r = window.devicePixelRatio || 1, { width: i, height: a } = e.getBoundingClientRect(), o = Math.max(1, Math.floor(i)), l = Math.max(1, Math.floor(a));
		t.width = Math.floor(o * r), t.height = Math.floor(l * r), t.style.width = `${o}px`, t.style.height = `${l}px`;
		let u = t.getContext("2d");
		u && (u.setTransform(r, 0, 0, r, 0, 0), u.clearRect(0, 0, o, l), u.save(), u.translate(ae, oe), u.scale(re, re), tx(u, o, l), rx(u, n, o, l), ax(u, b.current, o, l, f, g, m, x, C, re), sx(u, k, o, l, re), !me && !b.current && cx(u, ei(n, T), o, l, re), lx(u, n, me, o, l, re, I), u.restore());
	}, [
		n,
		f,
		g,
		m,
		x,
		C,
		T,
		k,
		re,
		ae,
		oe,
		me,
		I
	]);
	zt(() => {
		if (!e) return;
		we();
		let t = s.current;
		if (!t) return;
		let n = new ResizeObserver(() => we());
		return n.observe(t), () => n.disconnect();
	}, [e, we]), G(() => {
		b.current = v, e && we();
	}, [
		v,
		e,
		we
	]), G(() => {
		if (!e) {
			let e = ee.current;
			e && Ub(c.current, e.pointerId);
			let t = O.current;
			t && Ub(c.current, t.pointerId);
			let n = pe.current;
			n && Ub(c.current, n.pointerId);
			let r = ve.current;
			r && Ub(c.current, r.pointerId);
			let i = ue.current;
			i && Ub(c.current, i.pointerId), E([]), A(null), he(null), ee.current = null, O.current = null, pe.current = null, ve.current = null, ue.current = null, le.current = !1;
		}
	}, [e]), G(() => {
		l !== "move" && he(null);
	}, [l]), G(() => {
		me || L(null);
	}, [me]), G(() => {
		let e = ee.current;
		e && Ub(c.current, e.pointerId), ee.current = null, l !== "pen" && b.current?.kind === "pen-bezier" && (b.current = null, y(null)), S(null), w(!1);
		let t = c.current;
		t && (l === "pen" ? t.style.cursor = Bb : l === "move" ? t.style.cursor = zb : t.style.cursor = "crosshair");
	}, [l]), G(() => {
		e || N(!1);
	}, [e]), G(() => {
		if (!j) return;
		let e = (e) => {
			te.current?.contains(e.target) || N(!1);
		};
		return window.document.addEventListener("mousedown", e), () => window.document.removeEventListener("mousedown", e);
	}, [j]);
	let Te = U((e, t) => {
		let n = c.current;
		if (!n) return null;
		let r = n.getBoundingClientRect(), i = ce.current, a = (e - r.left - i.tx) / i.scale, o = (t - r.top - i.ty) / i.scale, s = a / Math.max(1, r.width), l = o / Math.max(1, r.height);
		return [Math.max(0, Math.min(1, s)), Math.max(0, Math.min(1, l))];
	}, []), Ee = U((e, t) => {
		let n = c.current;
		if (!n) return null;
		let r = n.getBoundingClientRect(), i = ce.current, a = (e - r.left - i.tx) / i.scale, o = (t - r.top - i.ty) / i.scale;
		return [a / Math.max(1, r.width), o / Math.max(1, r.height)];
	}, []), De = U((e, t, n) => {
		let r = c.current;
		if (!r) return;
		let i = ge.current;
		if (l === "move" && i) {
			if (ve.current) {
				L(null);
				return;
			}
			let a = r.getBoundingClientRect(), o = Math.max(1, a.width), s = Math.max(1, a.height), c = Ee(e, t);
			if (!c) {
				L(null);
				return;
			}
			let l = P.current.layers.find((e) => e.id === i.layerId)?.strokes.find((e) => e.id === i.strokeId);
			if (l?.kind !== "pen" || !l.penAnchors) {
				L(null), r.style.cursor = zb;
				return;
			}
			let u = l.penAnchors, d = ce.current.scale, f = 8 / (d * Math.min(o, s)), p = f * f;
			if (n) {
				for (let e = u.length - 1; e >= 0; e--) {
					let t = u[e], n = c[0] - t.x, i = c[1] - t.y;
					if (n * n + i * i <= p) {
						L(null), r.style.cursor = Vb;
						return;
					}
				}
				L(null), r.style.cursor = zb;
				return;
			}
			for (let e = u.length - 1; e >= 0; e--) {
				let t = u[e], n = c[0] - t.x, i = c[1] - t.y;
				if (n * n + i * i <= p) {
					L(null), r.style.cursor = zb;
					return;
				}
				if (t.outX != null && t.outY != null) {
					let e = c[0] - t.outX, n = c[1] - t.outY;
					if (e * e + n * n <= p) {
						L(null), r.style.cursor = zb;
						return;
					}
				}
				if (t.inX != null && t.inY != null) {
					let e = c[0] - t.inX, n = c[1] - t.inY;
					if (e * e + n * n <= p) {
						L(null), r.style.cursor = zb;
						return;
					}
				}
			}
			if (u.length >= 2) {
				let e = Er(u, l.penClosed === !0, c[0], c[1], o * d, s * d);
				if (e && e.dist <= 6) {
					L({
						x: e.x,
						y: e.y,
						segmentIndex: e.segmentIndex,
						t: e.t
					}), r.style.cursor = Bb;
					return;
				}
			}
			L(null), r.style.cursor = zb;
			return;
		}
		if (L(null), l !== "pen") return;
		let a = Te(e, t);
		if (!a) return;
		let o = b.current;
		if (o?.kind === "pen-bezier" && n) {
			let e = Xb(o, a[0], a[1]);
			e?.type === "anchor" ? (S(e.anchorIndex), w(!1), r.style.cursor = Vb) : (S(null), w(!1), r.style.cursor = Bb);
		} else if (o?.kind === "pen-bezier" && !n && o.anchors.length >= 2) {
			let e = Xb(o, a[0], a[1]);
			w(e?.type === "anchor" && e.anchorIndex === 0), S(null), r.style.cursor = Bb;
		} else S(null), w(!1), r.style.cursor = Bb;
	}, [
		l,
		Te,
		Ee
	]);
	G(() => {
		if (!e) return;
		let t = (e) => {
			if (e.key !== "Alt" && e.code !== "AltLeft" && e.code !== "AltRight") return;
			let t = ye.current;
			if (!t) return;
			let n = e.type === "keydown";
			be.current = n, De(t.x, t.y, n);
		}, n = () => {
			be.current = !1;
			let e = ye.current;
			e && De(e.x, e.y, !1);
		};
		return window.addEventListener("keydown", t, !0), window.addEventListener("keyup", t, !0), window.addEventListener("blur", n), () => {
			window.removeEventListener("keydown", t, !0), window.removeEventListener("keyup", t, !0), window.removeEventListener("blur", n);
		};
	}, [e, De]);
	let z = U((e) => {
		P.current = e;
		let t = fe.current, n = t.stack.slice(0, t.index + 1);
		n.push(e);
		let i = n.length > 200 ? n.slice(n.length - 200) : n;
		fe.current = {
			stack: i,
			index: i.length - 1
		}, r(e);
	}, [r]), Oe = U((e) => {
		P.current = e, r(e);
	}, [r]), ke = U(() => {
		let e = fe.current;
		if (e.index <= 0) return;
		let t = e.index - 1, n = e.stack[t];
		fe.current = {
			...e,
			index: t
		}, P.current = n, E((e) => e.filter((e) => n.layers.find((t) => t.id === e.layerId)?.strokes.some((t) => t.id === e.strokeId))), he(null), r(n);
	}, [r]), je = U(() => {
		let e = fe.current;
		if (e.index >= e.stack.length - 1) return;
		let t = e.index + 1, n = e.stack[t];
		fe.current = {
			...e,
			index: t
		}, P.current = n, E((e) => e.filter((e) => n.layers.find((t) => t.id === e.layerId)?.strokes.some((t) => t.id === e.strokeId))), he(null), r(n);
	}, [r]);
	G(() => {
		e && (fe.current = {
			stack: [P.current],
			index: 0
		}, ie(1), F(0), se(0));
	}, [e]);
	let Me = U((e, t, n) => {
		let r = ce.current, i = Math.max(.2, Math.min(8, r.scale * n));
		if (Math.abs(i - r.scale) < 1e-6) return;
		let a = (e - r.tx) / r.scale, o = (t - r.ty) / r.scale, s = e - a * i, c = t - o * i;
		ie(i), F(s), se(c);
	}, []), Ne = U((e) => {
		let t = c.current;
		if (!t) return;
		let n = t.getBoundingClientRect();
		Me(n.width / 2, n.height / 2, e);
	}, [Me]), Pe = U(() => {
		ie(1), F(0), se(0);
	}, []), Le = U(() => {
		let e = c.current;
		if (!e) return;
		let t = e.getBoundingClientRect(), n = ei(P.current, P.current.layers.flatMap((e) => e.visible ? e.strokes.map((t) => ({
			layerId: e.id,
			strokeId: t.id
		})) : []));
		if (!n) {
			Pe();
			return;
		}
		let r = .05, i = Math.max(0, n.minX - r), a = Math.max(0, n.minY - r), o = Math.min(1, n.maxX + r), s = Math.min(1, n.maxY + r), l = (o - i) * t.width, u = (s - a) * t.height;
		if (l <= 0 || u <= 0) {
			Pe();
			return;
		}
		let d = Math.max(.2, Math.min(8, Math.min(t.width / l, t.height / u))), f = (i + o) / 2 * t.width, p = (a + s) / 2 * t.height;
		ie(d), F(t.width / 2 - f * d), se(t.height / 2 - p * d);
	}, [Pe]);
	G(() => {
		let t = c.current;
		if (!t || !e) return;
		let n = (e) => {
			if (e.ctrlKey || e.metaKey) {
				e.preventDefault();
				let n = t.getBoundingClientRect();
				Me(e.clientX - n.left, e.clientY - n.top, Math.exp(-e.deltaY * .01));
				return;
			}
			e.preventDefault(), F((t) => t - e.deltaX), se((t) => t - e.deltaY);
		};
		return t.addEventListener("wheel", n, { passive: !1 }), () => t.removeEventListener("wheel", n);
	}, [e, Me]);
	let Re = U((e, t) => {
		let n = e[e.length - 1];
		if (!n) return [...e, t];
		let r = t[0] - n[0], i = t[1] - n[1];
		return r * r + i * i < Nb * Nb ? e : [...e, t];
	}, []), ze = U((e) => {
		let t = Fr(n);
		t && (z({
			...n,
			layers: n.layers.map((n) => n.id === t.id ? {
				...n,
				strokes: [...n.strokes, e]
			} : n)
		}), E([{
			layerId: t.id,
			strokeId: e.id
		}]), he(null));
	}, [n, z]), Be = U(() => {
		let e = c.current;
		if (!e) return 0;
		let t = e.getBoundingClientRect();
		return g / Math.max(1, Math.min(t.width, t.height));
	}, [g]), Ve = U((e = !1) => {
		let t = b.current;
		if (t?.kind !== "pen-bezier" || t.anchors.length < 2) return;
		let n = e && m && m !== "transparent" ? m : "";
		ze({
			id: crypto.randomUUID(),
			kind: "pen",
			points: [],
			penAnchors: t.anchors.map((e) => ({ ...e })),
			penClosed: e ? !0 : void 0,
			stroke: f,
			strokeWidthN: Be(),
			fill: n
		}), b.current = null, y(null), S(null), w(!1);
	}, [
		ze,
		m,
		f,
		Be
	]);
	G(() => {
		if (!e) return;
		let t = (e) => {
			if (e.key === "Escape") {
				o();
				return;
			}
			if (e.key === "Enter" && l === "pen") {
				let t = b.current;
				t?.kind === "pen-bezier" && t.anchors.length >= 2 && (e.preventDefault(), Ve());
			}
		};
		return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
	}, [
		e,
		o,
		l,
		Ve
	]), G(() => {
		if (!e) return;
		let t = (e) => {
			if (!e.target.closest("input, textarea, [contenteditable=\"true\"]")) {
				if (e.key === " " || e.code === "Space") {
					if (!le.current) {
						le.current = !0;
						let e = c.current;
						e && !ue.current && (e.style.cursor = "grab");
					}
					b.current || e.preventDefault();
					return;
				}
				if (e.key === "Escape" && ge.current) {
					e.preventDefault(), he(null);
					return;
				}
				if (!b.current) {
					if (e.metaKey || e.ctrlKey) {
						if (e.key === "z" || e.key === "Z") {
							e.preventDefault(), e.stopPropagation(), e.shiftKey ? je() : ke();
							return;
						}
						if ((e.key === "=" || e.key === "+") && !e.shiftKey) {
							e.preventDefault(), Ne(1.2);
							return;
						}
						if (e.key === "-" || e.key === "_") {
							e.preventDefault(), Ne(1 / 1.2);
							return;
						}
						if (e.key === "0") {
							e.preventDefault(), Pe();
							return;
						}
						if (e.key === "1") {
							e.preventDefault(), Le();
							return;
						}
						if (e.key === "a" || e.key === "A") {
							e.preventDefault();
							let t = [];
							for (let e of P.current.layers) for (let n of e.strokes) t.push({
								layerId: e.id,
								strokeId: n.id
							});
							E(t);
							return;
						}
						if (e.key === "d" || e.key === "D") {
							if (T.length === 0) {
								e.preventDefault();
								return;
							}
							e.preventDefault();
							let t = Xr(P.current, T);
							t && (z(t.doc), E(t.newSelections));
							return;
						}
						if (e.key === "]") {
							if (T.length === 0) return;
							e.preventDefault(), e.stopPropagation(), z(ni(P.current, T, e.shiftKey ? "front" : "forward"));
							return;
						}
						if (e.key === "[") {
							if (T.length === 0) return;
							e.preventDefault(), e.stopPropagation(), z(ni(P.current, T, e.shiftKey ? "back" : "backward"));
							return;
						}
					}
					if (e.key === "Backspace" || e.key === "Delete") {
						if (T.length === 0) return;
						e.preventDefault(), e.stopPropagation(), z(Jr(P.current, T)), E([]), he(null);
						return;
					}
					if (!e.metaKey && !e.ctrlKey && !e.altKey && e.key.length === 1) {
						let t = e.key.toLowerCase(), n = null;
						if (t === "v" && !e.shiftKey ? n = "move" : t === "p" && e.shiftKey ? n = "pencil" : t === "p" && !e.shiftKey ? n = "pen" : t === "r" && !e.shiftKey ? n = "rect" : t === "o" && !e.shiftKey && (n = "ellipse"), n) {
							e.preventDefault(), e.stopPropagation(), u(n);
							return;
						}
					}
					if ((e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight") && T.length > 0 && !e.metaKey && !e.ctrlKey) {
						e.preventDefault(), e.stopPropagation();
						let t = c.current?.getBoundingClientRect(), n = t ? Math.max(1, t.width) : 1, r = t ? Math.max(1, t.height) : 1, i = e.shiftKey ? 10 : 1, a = 0, o = 0;
						e.key === "ArrowLeft" && (a = -i), e.key === "ArrowRight" && (a = i), e.key === "ArrowUp" && (o = -i), e.key === "ArrowDown" && (o = i), z(qr(P.current, T, a / n, o / r));
						return;
					}
					if (e.metaKey || e.ctrlKey) {
						if (e.key === "c" || e.key === "C") {
							if (T.length === 0) return;
							let t = Yr(P.current, T);
							if (t.length === 0) return;
							e.preventDefault(), e.stopPropagation();
							let n = JSON.stringify({
								avnacVectorStrokeClip: !0,
								v: 1,
								strokes: t
							});
							navigator.clipboard.writeText(n).catch(() => {});
							return;
						}
						(e.key === "v" || e.key === "V") && (e.preventDefault(), e.stopPropagation(), (async () => {
							let e;
							try {
								e = await navigator.clipboard.readText();
							} catch {
								return;
							}
							let t = oi(e);
							if (!t) return;
							let n = ai(P.current, t, jb, jb);
							if (!n) return;
							z(n.doc);
							let r = Fr(n.doc);
							r && E(n.newStrokeIds.map((e) => ({
								layerId: r.id,
								strokeId: e
							})));
						})());
					}
				}
			}
		}, n = (e) => {
			if (e.key === " " || e.code === "Space") {
				le.current = !1;
				let e = c.current;
				e && !ue.current && (l === "pen" ? e.style.cursor = Bb : l === "move" ? e.style.cursor = zb : e.style.cursor = "crosshair");
			}
		};
		return window.addEventListener("keydown", t, !0), window.addEventListener("keyup", n, !0), () => {
			window.removeEventListener("keydown", t, !0), window.removeEventListener("keyup", n, !0);
		};
	}, [
		e,
		T,
		z,
		ke,
		je,
		Ne,
		Pe,
		Le,
		l
	]);
	let He = U(() => (l === "rect" || l === "ellipse" || l === "pen") && m && m !== "transparent" ? m : "", [l, m]), Ue = (e) => {
		let t = c.current, r = t?.getBoundingClientRect();
		if (e.button === 1 || e.button === 0 && le.current) {
			ue.current = {
				startX: e.clientX,
				startY: e.clientY,
				startTx: ce.current.tx,
				startTy: ce.current.ty,
				pointerId: e.pointerId
			}, e.target.setPointerCapture(e.pointerId), t && (t.style.cursor = "grabbing"), e.preventDefault();
			return;
		}
		if (e.button !== 0) return;
		if (l === "move" && me) {
			let t = Ee(e.clientX, e.clientY);
			if (t && r) {
				let n = P.current.layers.find((e) => e.id === me.layerId)?.strokes.find((e) => e.id === me.strokeId);
				if (n?.kind === "pen" && n.penAnchors) {
					let i = 8 / (ce.current.scale * Math.min(r.width, r.height)), a = i * i;
					for (let r = n.penAnchors.length - 1; r >= 0; r--) {
						let i = n.penAnchors[r];
						if (i.outX != null && i.outY != null) {
							let n = t[0] - i.outX, o = t[1] - i.outY;
							if (n * n + o * o <= a) {
								ve.current = {
									type: "handle-out",
									anchorIndex: r,
									pointerId: e.pointerId,
									last: t
								}, e.target.setPointerCapture(e.pointerId);
								return;
							}
						}
						if (i.inX != null && i.inY != null) {
							let n = t[0] - i.inX, o = t[1] - i.inY;
							if (n * n + o * o <= a) {
								ve.current = {
									type: "handle-in",
									anchorIndex: r,
									pointerId: e.pointerId,
									last: t
								}, e.target.setPointerCapture(e.pointerId);
								return;
							}
						}
					}
					for (let r = n.penAnchors.length - 1; r >= 0; r--) {
						let i = n.penAnchors[r], o = t[0] - i.x, s = t[1] - i.y;
						if (o * o + s * s <= a) {
							if (Hb(e)) {
								let e = n.penAnchors.slice(0, r).concat(n.penAnchors.slice(r + 1));
								e.length === 0 ? (z(Jr(P.current, [me])), he(null), E([])) : z(ri(P.current, me.layerId, me.strokeId, { penAnchors: e }));
								return;
							}
							ve.current = {
								type: "anchor",
								anchorIndex: r,
								pointerId: e.pointerId,
								last: t
							}, e.target.setPointerCapture(e.pointerId);
							return;
						}
					}
					if (!Hb(e) && n.penAnchors.length >= 2) {
						let i = Er(n.penAnchors, n.penClosed === !0, t[0], t[1], r.width * ce.current.scale, r.height * ce.current.scale);
						if (i && i.dist <= 6) {
							let t = Dr(n.penAnchors, i.segmentIndex, i.t, n.penClosed === !0);
							if (t) {
								z(ri(P.current, me.layerId, me.strokeId, { penAnchors: t })), ve.current = {
									type: "anchor",
									anchorIndex: i.segmentIndex + 1,
									pointerId: e.pointerId,
									last: [i.x, i.y]
								}, e.target.setPointerCapture(e.pointerId), L(null);
								return;
							}
						}
					}
				}
			}
			he(null);
		}
		if (l === "move" && T.length > 0 && r) {
			let n = ei(P.current, T);
			if (n) {
				let i = Ee(e.clientX, e.clientY);
				if (i) for (let a of Kb) {
					let [o, s] = Jb(a, n), c = (i[0] - o) * r.width * ce.current.scale, l = (i[1] - s) * r.height * ce.current.scale;
					if (Math.hypot(c, l) <= 10) {
						let r = Yb(a, n);
						pe.current = {
							handle: a,
							snapshotDoc: P.current,
							snapshotSelections: T,
							bounds: n,
							anchor: r,
							startPt: i,
							pointerId: e.pointerId
						}, e.target.setPointerCapture(e.pointerId), t && (t.style.cursor = qb[a]);
						return;
					}
				}
			}
		}
		let i = Te(e.clientX, e.clientY);
		if (i) {
			if (l === "move") {
				let t = Hr(n, i[0], i[1]);
				if (!t) {
					e.shiftKey ? O.current = {
						start: i,
						current: i,
						baseSelection: T,
						additive: !0,
						pointerId: e.pointerId
					} : (E([]), O.current = {
						start: i,
						current: i,
						baseSelection: [],
						additive: !1,
						pointerId: e.pointerId
					}), A({
						minX: i[0],
						minY: i[1],
						maxX: i[0],
						maxY: i[1]
					}), e.target.setPointerCapture(e.pointerId);
					return;
				}
				let r = {
					layerId: t.layerId,
					strokeId: t.stroke.id
				}, a = T.some((e) => e.layerId === r.layerId && e.strokeId === r.strokeId), o;
				if (o = e.shiftKey ? a ? T.filter((e) => !(e.layerId === r.layerId && e.strokeId === r.strokeId)) : [...T, r] : a ? T : [r], Hb(e) && o.length > 0) {
					let e = Xr(P.current, o);
					e && (Oe(e.doc), o = e.newSelections);
				}
				if (E(o), o.some((e) => e.layerId === r.layerId && e.strokeId === r.strokeId) && o.length > 0) {
					ee.current = {
						selections: o,
						last: i,
						pointerId: e.pointerId
					}, e.target.setPointerCapture(e.pointerId);
					let t = c.current;
					t && (t.style.cursor = "grabbing");
				}
				return;
			}
			if (Fr(n)?.visible) {
				if (l === "pen") {
					let t = b.current;
					if (t?.kind === "pen-bezier") {
						let n = Xb(t, i[0], i[1]);
						if (n?.type === "handle") {
							let r = {
								...t,
								selectedAnchor: n.anchorIndex,
								drag: {
									type: "handle",
									anchorIndex: n.anchorIndex,
									which: n.which
								}
							};
							b.current = r, y(r), e.target.setPointerCapture(e.pointerId);
							return;
						}
						if (n?.type === "anchor") {
							if (Hb(e)) {
								let e = Zb(t.anchors, n.anchorIndex);
								if (e.length === 0) b.current = null, y(null);
								else {
									let n = {
										...t,
										anchors: e,
										selectedAnchor: null,
										drag: null
									};
									b.current = n, y(n);
								}
								S(null), w(!1);
								return;
							}
							if (n.anchorIndex === 0 && t.anchors.length >= 2) {
								Ve(!0);
								return;
							}
							let r = {
								...t,
								selectedAnchor: n.anchorIndex,
								drag: null
							};
							b.current = r, y(r);
							return;
						}
					}
					let n = [...b.current?.kind === "pen-bezier" ? b.current.anchors.map((e) => ({ ...e })) : [], {
						x: i[0],
						y: i[1]
					}], r = {
						kind: "pen-bezier",
						anchors: n,
						selectedAnchor: null,
						drag: {
							type: "place",
							anchorIndex: n.length - 1,
							startX: i[0],
							startY: i[1]
						}
					};
					b.current = r, y(r), e.target.setPointerCapture(e.pointerId);
					return;
				}
				if (l === "pencil") {
					let t = {
						kind: "polyline",
						tool: "pencil",
						points: [i]
					};
					b.current = t, y(t), e.target.setPointerCapture(e.pointerId);
					return;
				}
				if (l === "rect" || l === "ellipse") {
					let t = {
						kind: "shape",
						tool: l,
						a: i
					};
					b.current = t, y(t), e.target.setPointerCapture(e.pointerId);
				}
			}
		}
	}, We = (e) => {
		let t = c.current;
		if (ye.current = {
			x: e.clientX,
			y: e.clientY
		}, be.current = Hb(e), ue.current) {
			let t = ue.current;
			F(t.startTx + (e.clientX - t.startX)), se(t.startTy + (e.clientY - t.startY));
			return;
		}
		if (pe.current) {
			let t = pe.current, n = Ee(e.clientX, e.clientY);
			if (!n) return;
			let r = t.handle, i = r === "nw" || r === "ne" || r === "se" || r === "sw" || r === "e" || r === "w", a = r === "nw" || r === "ne" || r === "se" || r === "sw" || r === "n" || r === "s", o = Jb(r, t.bounds), s, c, l = 1, u = 1;
			if (Hb(e) ? (s = (t.bounds.minX + t.bounds.maxX) / 2, c = (t.bounds.minY + t.bounds.maxY) / 2) : (s = t.anchor[0], c = t.anchor[1]), i) {
				let e = o[0] - s, t = n[0] - s;
				Math.abs(e) > 1e-9 && (l = t / e);
			}
			if (a) {
				let e = o[1] - c, t = n[1] - c;
				Math.abs(e) > 1e-9 && (u = t / e);
			}
			if (e.shiftKey) if (i && a) {
				let e = Math.max(Math.abs(l), Math.abs(u));
				l = (l < 0 ? -1 : 1) * e, u = (u < 0 ? -1 : 1) * e;
			} else i ? u = Math.abs(l) * (u < 0 ? -1 : 1) : a && (l = Math.abs(u) * (l < 0 ? -1 : 1));
			i && !a && (u = 1), a && !i && (l = 1), Oe($r(t.snapshotDoc, t.snapshotSelections, s, c, l, u));
			return;
		}
		if (ve.current) {
			let t = ve.current, n = Ee(e.clientX, e.clientY);
			if (!n || !me) return;
			let r = P.current.layers.find((e) => e.id === me.layerId)?.strokes.find((e) => e.id === me.strokeId);
			if (!r?.penAnchors) return;
			let i = t.anchorIndex, a = r.penAnchors.map((e) => ({ ...e })), o = a[i];
			if (!o) return;
			if (t.type === "anchor") {
				let e = n[0] - t.last[0], r = n[1] - t.last[1];
				o.x += e, o.y += r, o.inX != null && (o.inX += e), o.inY != null && (o.inY += r), o.outX != null && (o.outX += e), o.outY != null && (o.outY += r);
			} else t.type === "handle-in" ? (o.inX = n[0], o.inY = n[1]) : (o.outX = n[0], o.outY = n[1]);
			t.last = n, Oe(ri(P.current, me.layerId, me.strokeId, { penAnchors: a }));
			return;
		}
		let n = Te(e.clientX, e.clientY);
		if (l === "move" && ee.current && n) {
			let e = ee.current, t = n[0] - e.last[0], r = n[1] - e.last[1];
			e.last = n, Oe(qr(P.current, e.selections, t, r));
			return;
		}
		if (l === "move" && O.current && n) {
			let e = O.current;
			e.current = n;
			let t = Math.min(e.start[0], n[0]), r = Math.min(e.start[1], n[1]), i = Math.max(e.start[0], n[0]), a = Math.max(e.start[1], n[1]);
			A({
				minX: t,
				minY: r,
				maxX: i,
				maxY: a
			});
			let o = Qr(P.current, {
				minX: t,
				minY: r,
				maxX: i,
				maxY: a
			});
			if (e.additive) {
				let t = /* @__PURE__ */ new Set(), n = [];
				for (let r of [...e.baseSelection, ...o]) {
					let e = `${r.layerId}:${r.strokeId}`;
					t.has(e) || (t.add(e), n.push(r));
				}
				E(n);
			} else E(o);
			return;
		}
		(l === "pen" || l === "move" && me) && t ? De(e.clientX, e.clientY, Hb(e)) : l !== "pen" && (S(null), w(!1));
		let r = b.current;
		if (!r || !n) return;
		if (r.kind === "pen-bezier" && r.drag) {
			if (r.drag.type === "place") {
				let e = r.anchors.map((e) => ({ ...e }));
				Tr(e, r.drag.anchorIndex, n[0], n[1]);
				let t = {
					...r,
					anchors: e
				};
				b.current = t, y(t);
				return;
			}
			if (r.drag.type === "handle") {
				let e = r.anchors.map((e) => ({ ...e })), t = e[r.drag.anchorIndex];
				r.drag.which === "in" ? (t.inX = n[0], t.inY = n[1], t.outX = 2 * t.x - n[0], t.outY = 2 * t.y - n[1]) : (t.outX = n[0], t.outY = n[1], t.inX = 2 * t.x - n[0], t.inY = 2 * t.y - n[1]);
				let i = {
					...r,
					anchors: e
				};
				b.current = i, y(i);
				return;
			}
		}
		if (r.kind === "pen-bezier") return;
		if (r.kind === "polyline") {
			let e = Re(r.points, n), t = {
				...r,
				points: e
			};
			b.current = t, y(t);
			return;
		}
		if (r.kind !== "shape") return;
		let i = r, a = n;
		if (e.shiftKey) {
			let e = t?.getBoundingClientRect(), r = e ? Math.max(1, e.width) : 1, o = e ? Math.max(1, e.height) : 1;
			a = ox(i.a, n, r, o);
		}
		let o = {
			kind: "shape",
			tool: i.tool,
			a: i.a,
			b: a
		};
		b.current = o, y(o);
	}, Ge = (e) => {
		let t = e.target, n = () => {
			typeof t.hasPointerCapture == "function" && t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId);
		};
		if (ue.current) {
			ue.current = null, n();
			let e = c.current;
			e && (e.style.cursor = le.current ? "grab" : "default");
			return;
		}
		if (pe.current) {
			pe.current = null, n(), z(P.current);
			let e = c.current;
			e && (e.style.cursor = l === "move" ? zb : "default");
			return;
		}
		if (ve.current) {
			ve.current = null, n(), z(P.current);
			return;
		}
		if (l === "move" && ee.current) {
			ee.current = null, n(), z(P.current);
			let e = c.current;
			e && (e.style.cursor = zb);
			return;
		}
		if (l === "move" && O.current) {
			O.current = null, A(null), n();
			let e = c.current;
			e && (e.style.cursor = zb);
			return;
		}
		let r = b.current;
		if (!r) return;
		if (r.kind === "pen-bezier") {
			let t = e.target;
			typeof t.hasPointerCapture == "function" && t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId);
			let n = Te(e.clientX, e.clientY);
			if (r.drag?.type === "place" && n) {
				let e = Math.hypot(n[0] - r.drag.startX, n[1] - r.drag.startY), t = r.anchors.map((e) => ({ ...e })), i = r.drag.anchorIndex;
				if (e < Lb && i >= 0) {
					let e = t[i];
					if (delete e.inX, delete e.inY, delete e.outX, delete e.outY, i > 0) {
						let e = t[i - 1];
						delete e.outX, delete e.outY;
					}
				}
				let a = {
					...r,
					anchors: t,
					drag: null
				};
				b.current = a, y(a);
				return;
			}
			if (r.drag?.type === "handle") {
				let e = {
					...r,
					drag: null
				};
				b.current = e, y(e);
				return;
			}
			return;
		}
		e.target.releasePointerCapture(e.pointerId), b.current = null, y(null);
		let i = Be(), a = He();
		if (r.kind === "polyline") {
			if (r.points.length < 2) return;
			ze({
				id: crypto.randomUUID(),
				kind: "pen",
				points: r.points,
				stroke: f,
				strokeWidthN: i,
				fill: ""
			});
			return;
		}
		let o = r, s = c.current?.getBoundingClientRect(), u = s ? Math.max(1, s.width) : 1, d = s ? Math.max(1, s.height) : 1, p = Math.max(1e-4, ce.current.scale), m = o.b ?? o.a, h = (m[0] - o.a[0]) * u * p, g = (m[1] - o.a[1]) * d * p, _ = o.a, v = m;
		if (Math.abs(h) < 3 && Math.abs(g) < 3) {
			let e = 100 / 2 / (u * p), t = 100 / 2 / (d * p);
			_ = [o.a[0] - e, o.a[1] - t], v = [o.a[0] + e, o.a[1] + t];
		}
		let x = o.tool;
		ze({
			id: crypto.randomUUID(),
			kind: x,
			points: [_, v],
			stroke: "",
			strokeWidthN: 0,
			fill: a
		});
	}, qe = () => {
		let e = Fr(n);
		e && (E((t) => t.filter((t) => t.layerId !== e.id)), z({
			...n,
			layers: n.layers.map((t) => t.id === e.id ? {
				...t,
				strokes: []
			} : t)
		}));
	}, Je = () => {
		E([]), z(Ar());
	}, Ye = () => {
		let e = kr(`Layer ${n.layers.length + 1}`);
		z({
			...n,
			layers: [...n.layers, e],
			activeLayerId: e.id
		});
	}, Xe = (e) => {
		if (n.layers.length <= 1) return;
		let t = n.layers.filter((t) => t.id !== e), r = n.activeLayerId;
		r === e && (r = t[0].id), z({
			...n,
			layers: t,
			activeLayerId: r
		});
	}, Ze = (e, t) => {
		let r = n.layers.findIndex((t) => t.id === e);
		if (r < 0) return;
		let i = r + t;
		if (i < 0 || i >= n.layers.length) return;
		let a = [...n.layers], o = a[r];
		a[r] = a[i], a[i] = o, z({
			...n,
			layers: a
		});
	}, $e = (e, t) => {
		z({
			...n,
			layers: n.layers.map((n) => n.id === e ? {
				...n,
				visible: t
			} : n)
		});
	};
	if (!e) return null;
	let tt = Lr(n), nt = Ce && (Ce.kind === "rect" || Ce.kind === "ellipse" || Ce.kind === "polygon" || Ce.kind === "pen" && Ce.penClosed === !0), rt = l === "rect" || l === "ellipse" || l === "pen" || l === "move" && !!nt;
	return /* @__PURE__ */ B("div", {
		"data-avnac-chrome": !0,
		className: "pointer-events-auto fixed inset-0 z-[90] flex items-center justify-center bg-black/45 p-3 sm:p-6",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": t,
		onClick: o,
		children: /* @__PURE__ */ V("div", {
			className: "flex h-[min(90vh,920px)] w-[min(96vw,1400px)] overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.2)]",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ V("aside", {
				className: "flex w-[13.5rem] shrink-0 flex-col border-r border-black/[0.06] bg-neutral-50/90",
				children: [
					/* @__PURE__ */ B("div", {
						className: "border-b border-black/[0.06] px-3 py-2",
						children: /* @__PURE__ */ B("span", {
							className: "text-[11px] font-semibold uppercase tracking-wide text-neutral-500",
							children: "Layers"
						})
					}),
					/* @__PURE__ */ B("div", {
						className: "flex min-h-0 flex-1 flex-col gap-0.5 overflow-auto p-2",
						children: n.layers.map((e) => /* @__PURE__ */ V("div", {
							className: ["flex flex-col rounded-xl border px-2 py-1.5", e.id === n.activeLayerId ? "border-[var(--accent)]/60 bg-[var(--accent)]/15" : "border-transparent bg-white/80"].join(" "),
							children: [/* @__PURE__ */ V("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ B("button", {
									type: "button",
									className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-neutral-600 hover:bg-black/[0.06]",
									title: e.visible ? "Hide" : "Show",
									"aria-label": e.visible ? "Hide layer" : "Show layer",
									onClick: () => $e(e.id, !e.visible),
									children: /* @__PURE__ */ B(M, {
										icon: e.visible ? ne : Ke,
										size: 16,
										strokeWidth: 1.75
									})
								}), /* @__PURE__ */ B("button", {
									type: "button",
									className: "min-w-0 flex-1 truncate text-left text-[13px] font-medium text-neutral-800",
									onClick: () => z({
										...n,
										activeLayerId: e.id
									}),
									children: e.name
								})]
							}), /* @__PURE__ */ V("div", {
								className: "mt-1 flex items-center justify-end gap-0.5",
								children: [
									/* @__PURE__ */ B("button", {
										type: "button",
										className: "rounded p-1 text-neutral-500 hover:bg-black/[0.06] hover:text-neutral-800",
										title: "Move down",
										onClick: () => Ze(e.id, -1),
										children: /* @__PURE__ */ B(M, {
											icon: yt,
											size: 14,
											strokeWidth: 1.75
										})
									}),
									/* @__PURE__ */ B("button", {
										type: "button",
										className: "rounded p-1 text-neutral-500 hover:bg-black/[0.06] hover:text-neutral-800",
										title: "Move up",
										onClick: () => Ze(e.id, 1),
										children: /* @__PURE__ */ B(M, {
											icon: Ie,
											size: 14,
											strokeWidth: 1.75
										})
									}),
									/* @__PURE__ */ B("button", {
										type: "button",
										disabled: n.layers.length <= 1,
										className: "rounded p-1 text-neutral-500 hover:bg-red-50 hover:text-red-700 disabled:opacity-30",
										title: "Delete layer",
										onClick: () => Xe(e.id),
										children: /* @__PURE__ */ B(M, {
											icon: et,
											size: 14,
											strokeWidth: 1.75
										})
									})
								]
							})]
						}, e.id))
					}),
					/* @__PURE__ */ B("div", {
						className: "border-t border-black/[0.06] p-2",
						children: /* @__PURE__ */ V("button", {
							type: "button",
							className: "flex w-full items-center justify-center gap-1.5 rounded-lg border border-black/[0.08] bg-white py-2 text-[13px] font-medium text-neutral-800 hover:bg-black/[0.03]",
							onClick: Ye,
							children: [/* @__PURE__ */ B(M, {
								icon: Fe,
								size: 16,
								strokeWidth: 1.75
							}), "Add layer"]
						})
					})
				]
			}), /* @__PURE__ */ V("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [
					/* @__PURE__ */ V("div", {
						className: "flex shrink-0 items-center justify-between gap-3 border-b border-black/[0.06] px-4 py-3 sm:px-5",
						children: [/* @__PURE__ */ B("h2", {
							className: "m-0 min-w-0 truncate text-base font-semibold text-neutral-900 sm:text-lg",
							children: t
						}), /* @__PURE__ */ B("button", {
							type: "button",
							className: or(!1),
							onClick: o,
							"aria-label": "Close vector workspace",
							children: /* @__PURE__ */ B(M, {
								icon: _e,
								size: 20,
								strokeWidth: 1.75
							})
						})]
					}),
					/* @__PURE__ */ B("div", {
						className: "flex shrink-0 flex-col gap-2 border-b border-black/[0.06] bg-[linear-gradient(180deg,rgba(250,250,249,0.9)_0%,rgba(255,255,255,0.5)_100%)] px-4 py-3 sm:px-5",
						children: /* @__PURE__ */ V("div", {
							className: "flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2",
							children: [/* @__PURE__ */ V("div", {
								className: "flex min-w-0 flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ B(ir, {
									role: "toolbar",
									"aria-label": "Drawing tools",
									children: /* @__PURE__ */ B("div", {
										className: "flex flex-wrap items-center gap-0.5 py-1 pl-1 pr-2",
										children: [
											[
												"move",
												"Move",
												"V",
												de
											],
											[
												"pencil",
												"Pencil",
												"Shift+P",
												Ae
											],
											[
												"pen",
												"Pen",
												"P",
												Qe
											],
											[
												"rect",
												"Rectangle",
												"R",
												D
											],
											[
												"ellipse",
												"Ellipse",
												"O",
												d
											]
										].map(([e, t, n, r]) => /* @__PURE__ */ B("button", {
											type: "button",
											className: or(l === e),
											title: `${t} (${n})`,
											"aria-label": `${t} (${n})`,
											"aria-keyshortcuts": n,
											"aria-pressed": l === e,
											onClick: () => u(e),
											children: /* @__PURE__ */ B(M, {
												icon: r,
												size: 18,
												strokeWidth: 1.75
											})
										}, e))
									})
								}), /* @__PURE__ */ B(ir, {
									role: "toolbar",
									"aria-label": "Stroke and fill",
									children: /* @__PURE__ */ V("div", {
										className: "flex flex-wrap items-center gap-0.5 py-1 pl-1 pr-2",
										children: [/* @__PURE__ */ B(Ab, {
											strokeWidthMax: 16,
											strokeWidthPx: g,
											strokePaint: {
												type: "solid",
												color: f
											},
											onStrokeWidthChange: (e) => {
												if (_(e), T.length > 0) {
													let t = c.current, r = t?.getBoundingClientRect().width ?? 1, i = t?.getBoundingClientRect().height ?? 1, a = Math.max(1, Math.min(r, i)), o = n;
													for (let t of T) o = si(o, t.layerId, t.strokeId, { strokeWidthN: e / a });
													z(o);
												}
											},
											onStrokePaintChange: (e) => {
												let t = Gb(e);
												if (p(t), T.length > 0) {
													let e = n;
													for (let n of T) e = si(e, n.layerId, n.strokeId, { stroke: t });
													z(e);
												}
											}
										}), rt ? /* @__PURE__ */ V(jt, { children: [/* @__PURE__ */ B(ar, {}), /* @__PURE__ */ B(Bs, {
											compact: !0,
											value: {
												type: "solid",
												color: m
											},
											onChange: (e) => {
												let t = Gb(e);
												if (h(t), T.length > 0) {
													let e = t && t !== "transparent" ? t : "", r = n;
													for (let t of T) r = si(r, t.layerId, t.strokeId, { fill: e });
													z(r);
												}
											},
											title: "Fill color",
											ariaLabel: "Fill color"
										})] }) : null]
									})
								})]
							}), /* @__PURE__ */ B("div", {
								className: "ml-auto flex shrink-0 items-center",
								children: /* @__PURE__ */ B(ir, {
									"aria-label": "Board actions",
									children: /* @__PURE__ */ V("div", {
										className: "flex flex-wrap items-center justify-end gap-0.5 py-1 pl-1 pr-2",
										children: [
											/* @__PURE__ */ B("button", {
												type: "button",
												className: [or(!1, { wide: !0 }), "px-2.5 text-[13px] font-medium"].join(" "),
												onClick: qe,
												children: "Clear layer"
											}),
											/* @__PURE__ */ B(ar, {}),
											/* @__PURE__ */ B("button", {
												type: "button",
												className: [or(!1, { wide: !0 }), "px-2.5 text-[13px] font-medium"].join(" "),
												onClick: Je,
												children: "Clear all"
											}),
											/* @__PURE__ */ B(ar, {}),
											/* @__PURE__ */ V("div", {
												ref: te,
												className: "relative shrink-0",
												children: [/* @__PURE__ */ V("div", {
													className: "flex h-8 overflow-hidden rounded-lg",
													children: [/* @__PURE__ */ B("button", {
														type: "button",
														className: "flex min-w-0 flex-1 items-center justify-center bg-neutral-900 px-3 text-[13px] font-semibold text-white outline-none transition-colors hover:bg-neutral-800",
														onClick: () => {
															N(!1), i();
														},
														children: "Save"
													}), /* @__PURE__ */ B("button", {
														type: "button",
														className: "flex w-8 shrink-0 items-center justify-center border-l border-white/20 bg-neutral-900 text-white outline-none transition-colors hover:bg-neutral-800",
														"aria-expanded": j,
														"aria-haspopup": "menu",
														title: "More save options",
														onClick: () => N((e) => !e),
														children: /* @__PURE__ */ B(M, {
															icon: yt,
															size: 16,
															strokeWidth: 1.75
														})
													})]
												}), j ? /* @__PURE__ */ B("div", {
													className: "absolute right-0 top-full z-[80] mt-1 min-w-[14rem] rounded-xl border border-black/[0.08] bg-white py-1 shadow-[0_12px_40px_rgba(0,0,0,0.12)]",
													role: "menu",
													children: /* @__PURE__ */ B("button", {
														type: "button",
														role: "menuitem",
														disabled: !tt,
														className: ["flex w-full px-3 py-2 text-left text-[13px] font-medium transition-colors", tt ? "text-neutral-800 hover:bg-black/[0.05]" : "cursor-not-allowed text-neutral-400"].join(" "),
														onClick: () => {
															tt && (N(!1), a());
														},
														children: "Save and place on canvas"
													})
												}) : null]
											})
										]
									})
								})
							})]
						})
					}),
					/* @__PURE__ */ V("div", {
						ref: s,
						className: "relative min-h-0 flex-1 bg-neutral-200/40 p-3 sm:p-4",
						children: [
							/* @__PURE__ */ B("canvas", {
								ref: c,
								className: "block h-full w-full max-w-none touch-none rounded-lg border border-black/[0.08] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)]",
								"aria-label": "Vector drawing canvas",
								style: { touchAction: "none" },
								onPointerDown: Ue,
								onPointerMove: We,
								onPointerUp: Ge,
								onPointerCancel: Ge,
								onDoubleClick: (e) => {
									if (l !== "move") return;
									let t = Te(e.clientX, e.clientY);
									if (!t) return;
									let r = Hr(n, t[0], t[1]);
									r && r.stroke.kind === "pen" && r.stroke.penAnchors && r.stroke.penAnchors.length > 0 && (he({
										layerId: r.layerId,
										strokeId: r.stroke.id
									}), E([{
										layerId: r.layerId,
										strokeId: r.stroke.id
									}]), requestAnimationFrame(() => {
										let e = ye.current;
										e && De(e.x, e.y, be.current);
									}));
								},
								onPointerLeave: () => {
									S(null), w(!1);
									let e = c.current;
									e && (l === "pen" ? e.style.cursor = Bb : l === "move" ? e.style.cursor = zb : e.style.cursor = "crosshair");
								}
							}),
							/* @__PURE__ */ V("div", {
								className: "pointer-events-none absolute bottom-3 right-3 flex items-center gap-1 rounded-md border border-black/[0.08] bg-white/90 px-2 py-1 text-[11px] font-medium text-neutral-600 shadow-sm backdrop-blur-sm",
								children: [Math.round(re * 100), "%"]
							}),
							/* @__PURE__ */ V("div", {
								className: "pointer-events-auto absolute bottom-3 left-3 flex items-center gap-1 rounded-md border border-black/[0.08] bg-white/90 px-1 py-1 text-[11px] text-neutral-600 shadow-sm backdrop-blur-sm",
								children: [
									/* @__PURE__ */ B("button", {
										type: "button",
										className: "rounded px-1.5 py-0.5 hover:bg-black/[0.06]",
										title: "Zoom out",
										onClick: () => Ne(1 / 1.2),
										children: "−"
									}),
									/* @__PURE__ */ B("button", {
										type: "button",
										className: "rounded px-1.5 py-0.5 hover:bg-black/[0.06]",
										title: "Reset zoom",
										onClick: Pe,
										children: "1:1"
									}),
									/* @__PURE__ */ B("button", {
										type: "button",
										className: "rounded px-1.5 py-0.5 hover:bg-black/[0.06]",
										title: "Fit to content",
										onClick: Le,
										children: "Fit"
									}),
									/* @__PURE__ */ B("button", {
										type: "button",
										className: "rounded px-1.5 py-0.5 hover:bg-black/[0.06]",
										title: "Zoom in",
										onClick: () => Ne(1.2),
										children: "+"
									})
								]
							})
						]
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/components/vector-board-list-preview.tsx
function dx({ doc: e, size: t = 56, className: n = "" }) {
	let r = Y(null);
	return zt(() => {
		let n = r.current;
		if (!n) return;
		let i = t, a = t, o = Math.min(2, window.devicePixelRatio || 1);
		n.width = Math.floor(i * o), n.height = Math.floor(a * o), n.style.width = `${i}px`, n.style.height = `${a}px`;
		let s = n.getContext("2d");
		s && (s.setTransform(o, 0, 0, o, 0, 0), ix(s, e, i, a));
	}, [e, t]), /* @__PURE__ */ B("canvas", {
		ref: r,
		className: ["pointer-events-none block max-h-full max-w-full", n].join(" "),
		"aria-hidden": !0
	});
}
//#endregion
//#region src/components/editor-vector-board-panel.tsx
function fx({ open: e, onClose: t, boards: n, boardDocs: r, onCreateNew: i, onOpenBoard: a, onDeleteBoard: o }) {
	return e ? /* @__PURE__ */ V("div", {
		"data-avnac-chrome": !0,
		className: [
			"pointer-events-auto fixed z-40 flex w-[min(100vw-1.5rem,300px)] flex-col overflow-hidden rounded-3xl border border-black/[0.08] bg-white/95 backdrop-blur-md",
			pt,
			Xe
		].join(" "),
		role: "dialog",
		"aria-label": "Vector boards",
		children: [
			/* @__PURE__ */ V("div", {
				className: "flex items-center justify-between border-b border-black/[0.06] px-3 py-2",
				children: [/* @__PURE__ */ B("span", {
					className: "text-sm font-semibold text-neutral-800",
					children: "Vector boards"
				}), /* @__PURE__ */ B("button", {
					type: "button",
					className: "flex h-8 w-8 items-center justify-center rounded-lg text-neutral-600 hover:bg-black/[0.06]",
					onClick: t,
					"aria-label": "Close vector boards",
					children: /* @__PURE__ */ B(M, {
						icon: _e,
						size: 18,
						strokeWidth: 1.75
					})
				})]
			}),
			/* @__PURE__ */ B("div", {
				className: "flex max-h-[min(50vh,360px)] flex-col gap-2 overflow-auto p-2",
				children: n.length === 0 ? /* @__PURE__ */ B("p", {
					className: "px-2 py-6 text-center text-sm text-neutral-500",
					children: "No vector boards yet."
				}) : /* @__PURE__ */ B("ul", {
					className: "flex flex-col gap-1.5",
					children: n.map((e) => {
						let t = r[e.id] ?? Ar(), n = Lr(t);
						return /* @__PURE__ */ B("li", { children: /* @__PURE__ */ V("div", {
							className: "flex items-center gap-2 rounded-xl border border-black/[0.06] bg-neutral-50/80 p-2",
							children: [
								/* @__PURE__ */ B("div", {
									draggable: n,
									onDragStart: (t) => {
										if (!n) {
											t.preventDefault();
											return;
										}
										t.dataTransfer.setData(Or, e.id), t.dataTransfer.effectAllowed = "copy";
									},
									className: ["shrink-0 overflow-hidden rounded-lg border border-black/10 bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]", n ? "cursor-grab active:cursor-grabbing" : "cursor-not-allowed opacity-50"].join(" "),
									title: n ? "Drag onto the canvas to place" : "Draw something to drag to the canvas",
									children: /* @__PURE__ */ B(dx, {
										doc: t,
										size: 56
									})
								}),
								/* @__PURE__ */ V("button", {
									type: "button",
									className: "min-w-0 flex-1 rounded-lg px-2 py-1.5 text-left text-sm text-neutral-800 transition-colors hover:bg-white/80",
									onClick: () => a(e.id),
									children: [/* @__PURE__ */ B("span", {
										className: "block truncate font-medium",
										children: e.name
									}), /* @__PURE__ */ B("span", {
										className: "mt-0.5 block text-[11px] text-neutral-500",
										children: n ? "Click to edit · drag preview to place" : "Click to edit"
									})]
								}),
								/* @__PURE__ */ B("button", {
									type: "button",
									className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-red-50 hover:text-red-600",
									title: "Delete vector board",
									"aria-label": `Delete ${e.name}`,
									onClick: (t) => {
										t.stopPropagation(), o(e.id);
									},
									children: /* @__PURE__ */ B(M, {
										icon: et,
										size: 18,
										strokeWidth: 1.75
									})
								})
							]
						}) }, e.id);
					})
				})
			}),
			/* @__PURE__ */ B("div", {
				className: "border-t border-black/[0.06] p-2",
				children: /* @__PURE__ */ V("button", {
					type: "button",
					className: "flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800",
					onClick: i,
					children: [/* @__PURE__ */ B(M, {
						icon: Fe,
						size: 18,
						strokeWidth: 1.75
					}), "New vector board"]
				})
			})
		]
	}) : null;
}
//#endregion
//#region src/components/scene-editor/use-editor-layer-controls.ts
function px() {
	let e = L((e) => e.doc.objects), t = L((e) => e.selectedIds), n = L((e) => e.setDoc), r = L((e) => e.setSelectedIds), i = J(() => [...e].map((e, n) => ({
		id: e.id,
		index: n,
		label: c(e),
		visible: e.visible,
		selected: t.includes(e.id)
	})).reverse(), [e, t]), a = U((t) => {
		let r = new Map(e.map((e) => [e.id, e])), i = [...t].reverse().map((e) => r.get(e)).filter((e) => !!e);
		n((e) => ({
			...e,
			objects: i
		}));
	}, [e, n]), o = U((t) => {
		let n = e[t];
		n && r([n.id]);
	}, [e, r]), s = U((e) => {
		n((t) => ({
			...t,
			objects: t.objects.map((t, n) => n === e ? {
				...t,
				visible: !t.visible
			} : t)
		}));
	}, [n]);
	return {
		layerRows: i,
		onLayerBringForward: U((e) => {
			n((t) => {
				if (e >= t.objects.length - 1) return t;
				let n = [...t.objects], r = n[e];
				return n[e] = n[e + 1], n[e + 1] = r, {
					...t,
					objects: n
				};
			});
		}, [n]),
		onLayerReorder: a,
		onLayerSendBackward: U((e) => {
			n((t) => {
				if (e <= 0) return t;
				let n = [...t.objects], r = n[e];
				return n[e] = n[e - 1], n[e - 1] = r, {
					...t,
					objects: n
				};
			});
		}, [n]),
		onRenameLayer: U((e, t) => {
			n((n) => ({
				...n,
				objects: n.objects.map((n, r) => r === e ? {
					...n,
					name: t.trim() || void 0
				} : n)
			}));
		}, [n]),
		onSelectLayer: o,
		onToggleLayerVisible: s
	};
}
//#endregion
//#region src/components/scene-editor/editor-side-panels.tsx
var mx = H(() => import("./editor-icons-panel-BSyCKnv8.js"));
function hx() {
	return /* @__PURE__ */ V("div", {
		"data-avnac-chrome": !0,
		className: [
			"pointer-events-auto fixed z-40 flex w-[min(100vw-1.5rem,360px)] max-h-[min(92dvh,720px)] flex-col overflow-hidden rounded-3xl border border-black/[0.08] bg-white/95 backdrop-blur-md",
			pt,
			Xe
		].join(" "),
		role: "status",
		children: [/* @__PURE__ */ B("div", {
			className: "border-b border-black/[0.06] px-3 py-2 text-sm font-semibold text-neutral-800",
			children: "Icons"
		}), /* @__PURE__ */ B("div", {
			className: "px-3 py-8 text-center text-sm text-neutral-500",
			children: "Loading..."
		})]
	});
}
function gx({ activePanel: e, onClosePanel: t, onSelectPanel: n, ready: r }) {
	let { layerRows: i, onLayerBringForward: a, onLayerReorder: o, onLayerSendBackward: s, onRenameLayer: c, onSelectLayer: l, onToggleLayerVisible: u } = px(), { boardDocs: d, boards: f, closeVectorWorkspace: p, createVectorBoard: m, deleteVectorBoard: h, onVectorBoardDocumentChange: g, openVectorBoardWorkspace: _, placeActiveVectorBoardAtArtboardCenter: v, vectorWorkspaceId: y, vectorWorkspaceName: b } = gs(), x = hb();
	return /* @__PURE__ */ V(jt, { children: [
		r ? /* @__PURE__ */ B(vb, {
			activePanel: e,
			onSelectPanel: n
		}) : null,
		x.layers ? /* @__PURE__ */ B(wb, {
			open: r && e === "layers",
			onClose: t,
			rows: i,
			onSelectLayer: l,
			onToggleVisible: u,
			onBringForward: a,
			onSendBackward: s,
			onReorder: o,
			onRenameLayer: c
		}) : null,
		x.imageUpload ? /* @__PURE__ */ B(Eb, {
			open: r && e === "uploads",
			onClose: t
		}) : null,
		x.stockImages ? /* @__PURE__ */ B(yb, {
			open: r && e === "images",
			onClose: t
		}) : null,
		x.icons && r && e === "icons" ? /* @__PURE__ */ B(Pt, {
			fallback: /* @__PURE__ */ B(hx, {}),
			children: /* @__PURE__ */ B(mx, {
				open: !0,
				onClose: t
			})
		}) : null,
		x.vectorBoards ? /* @__PURE__ */ B(fx, {
			open: r && e === "vector-board",
			onClose: t,
			boards: f,
			boardDocs: d,
			onCreateNew: m,
			onOpenBoard: _,
			onDeleteBoard: h
		}) : null,
		x.apps ? /* @__PURE__ */ B(Gc, {
			open: r && e === "apps",
			onClose: t
		}) : null,
		y ? /* @__PURE__ */ B(ux, {
			open: !0,
			boardName: b,
			document: d[y] ?? Ar(),
			onDocumentChange: (e) => g(y, e),
			onSave: p,
			onSaveAndPlace: () => {
				v(), p();
			},
			onClose: p
		}) : null
	] });
}
//#endregion
//#region src/components/scene-editor/use-ai-design-controller.ts
var _x = {
	type: "solid",
	color: "transparent"
};
function vx(e, t, n) {
	return e.origin === "top-left" ? e.x ?? t : (e.x ?? t) - n / 2;
}
function yx(e, t, n) {
	return e.origin === "top-left" ? e.y ?? t : (e.y ?? t) - n / 2;
}
function bx({ addObjects: e, artboardH: t, artboardW: r, doc: i, placeImageObject: a, setDoc: s, setSelectedIds: l }) {
	return J(() => ({
		getCanvas: () => ({
			width: i.artboard.width,
			height: i.artboard.height,
			background: i.bg.type === "solid" ? i.bg.color : i.bg.css,
			objectCount: i.objects.length,
			objects: i.objects.map((e) => ({
				id: e.id,
				kind: e.type === "vector-board" ? "vector-board" : e.type === "group" ? "group" : e.type,
				label: c(e),
				left: e.x,
				top: e.y,
				width: e.width,
				height: e.height,
				angle: e.rotation,
				fill: (() => {
					let t = He(e) ? Ct(e) : null;
					return t?.type === "solid" ? t.color : null;
				})(),
				stroke: (() => {
					let t = n(e) ? o(e) : null;
					return t?.type === "solid" ? t.color : null;
				})(),
				text: e.type === "text" ? e.text : null
			}))
		}),
		addRectangle: (n) => {
			let i = {
				id: crypto.randomUUID(),
				type: "rect",
				x: vx(n, r / 2, n.width),
				y: yx(n, t / 2, n.height),
				width: n.width,
				height: n.height,
				rotation: n.rotation ?? 0,
				opacity: n.opacity ?? 1,
				visible: !0,
				locked: !1,
				blurPct: 0,
				shadow: null,
				fill: {
					type: "solid",
					color: n.fill ?? "#262626"
				},
				stroke: {
					type: "solid",
					color: n.stroke ?? "transparent"
				},
				strokeWidth: n.strokeWidth ?? 0,
				cornerRadius: n.cornerRadius ?? 0
			};
			return e([i]), { id: i.id };
		},
		addEllipse: (n) => {
			let i = {
				id: crypto.randomUUID(),
				type: "ellipse",
				x: vx(n, r / 2, n.width),
				y: yx(n, t / 2, n.height),
				width: n.width,
				height: n.height,
				rotation: n.rotation ?? 0,
				opacity: n.opacity ?? 1,
				visible: !0,
				locked: !1,
				blurPct: 0,
				shadow: null,
				fill: {
					type: "solid",
					color: n.fill ?? "#262626"
				},
				stroke: {
					type: "solid",
					color: n.stroke ?? "transparent"
				},
				strokeWidth: n.strokeWidth ?? 0
			};
			return e([i]), { id: i.id };
		},
		addText: (n) => {
			let i = n.width ?? 320, a = n.fontSize ?? 64, o = {
				id: crypto.randomUUID(),
				type: "text",
				x: vx(n, r / 2, i),
				y: yx(n, t / 2, a * 2),
				width: i,
				height: a,
				rotation: n.rotation ?? 0,
				opacity: n.opacity ?? 1,
				visible: !0,
				locked: !1,
				blurPct: 0,
				shadow: null,
				text: n.text,
				fill: {
					type: "solid",
					color: n.fill ?? "#171717"
				},
				stroke: _x,
				strokeWidth: 0,
				fontFamily: n.fontFamily ?? "Inter",
				fontSize: a,
				letterSpacing: We(n.letterSpacing ?? 0),
				lineHeight: 1.22,
				fontWeight: n.fontWeight ?? "normal",
				fontStyle: n.fontStyle ?? "normal",
				underline: !1,
				textAlign: n.textAlign ?? "left"
			};
			return o.height = Math.max(Gi(o).height, o.fontSize * xi(o)), e([o]), { id: o.id };
		},
		addLine: (t) => {
			let n = Math.max(1, Math.hypot(t.x2 - t.x1, t.y2 - t.y1)), r = Math.max(24, (t.strokeWidth ?? 4) * 3), i = (t.x1 + t.x2) / 2, a = (t.y1 + t.y2) / 2, o = {
				id: crypto.randomUUID(),
				type: "line",
				x: i - n / 2,
				y: a - r / 2,
				width: n,
				height: r,
				rotation: ha(t.x1, t.y1, t.x2, t.y2),
				opacity: t.opacity ?? 1,
				visible: !0,
				locked: !1,
				blurPct: 0,
				shadow: null,
				stroke: {
					type: "solid",
					color: t.stroke ?? "#262626"
				},
				strokeWidth: t.strokeWidth ?? 4,
				lineStyle: "solid",
				roundedEnds: !0
			};
			return e([o]), { id: o.id };
		},
		addImageFromUrl: async (e) => {
			let t = await a(e.url, {
				x: e.x,
				y: e.y,
				origin: e.origin,
				width: e.width,
				height: e.height
			});
			return t ? { id: t } : null;
		},
		updateObject: (e, t) => {
			let n = !1;
			return s((r) => ({
				...r,
				objects: r.objects.map((r) => {
					if (r.id !== e) return r;
					n = !0;
					let i = { ...r };
					return t.left !== void 0 && (i.x = t.left), t.top !== void 0 && (i.y = t.top), t.width !== void 0 && (i.width = t.width), t.height !== void 0 && (i.height = t.height), t.angle !== void 0 && (i.rotation = t.angle), t.opacity !== void 0 && (i.opacity = Math.max(0, Math.min(1, t.opacity))), t.fill !== void 0 && (i = _(i, {
						type: "solid",
						color: t.fill
					})), t.stroke !== void 0 && (i = C(i, {
						type: "solid",
						color: t.stroke
					})), t.strokeWidth !== void 0 && (i = te(i, t.strokeWidth)), i.type === "text" && (t.text !== void 0 && (i.text = t.text), t.fontSize !== void 0 && (i.fontSize = t.fontSize), t.letterSpacing !== void 0 && (i.letterSpacing = We(t.letterSpacing)), i.height = Math.max(Gi(i).height, i.fontSize * xi(i))), i;
				})
			})), n;
		},
		deleteObject: (e) => i.objects.some((t) => t.id === e) ? (s((t) => ({
			...t,
			objects: t.objects.filter((t) => t.id !== e)
		})), !0) : !1,
		selectObjects: (e) => {
			let t = e.filter((e) => i.objects.some((t) => t.id === e));
			return l(t), t.length;
		},
		setBackgroundColor: (e) => s((t) => ({
			...t,
			bg: {
				type: "solid",
				color: e
			}
		})),
		clearCanvas: () => {
			let e = i.objects.length;
			return s((e) => ({
				...e,
				objects: []
			})), l([]), e;
		}
	}), [
		e,
		t,
		r,
		i,
		a,
		s,
		l
	]);
}
//#endregion
//#region src/components/scene-editor/use-editor-keyboard-shortcuts.ts
function xx(e) {
	return e instanceof HTMLElement ? !!e.closest("input, textarea, select, [contenteditable=\"true\"], [contenteditable=\"\"], [role=\"textbox\"]") : !1;
}
function Sx(e) {
	return e === document || e === document.body || e === document.documentElement;
}
function Cx(e, t) {
	return !!t && e instanceof Node && t.contains(e);
}
function wx() {
	let e = window.getSelection();
	return !!e && !e.isCollapsed && e.toString().length > 0;
}
function Tx({ applyingHistoryRef: e, commitTextDraft: t, copyElementToClipboard: n, deleteSelection: r, duplicateElement: i, groupSelection: a, historyIndexRef: o, historyRef: s, nudgeSelection: c, onZoomFitRequest: l, onZoomInRequest: u, onZoomOutRequest: d, pasteFromClipboard: f, reorderSelectionLayers: p, setDoc: m, setShortcutsOpen: h, shortcutScopeRef: g, ungroupSelection: _ }) {
	let v = Y(!1);
	G(() => {
		let e = (e) => {
			v.current = Cx(e.target, g.current);
		};
		return window.addEventListener("pointerdown", e, !0), window.addEventListener("focusin", e, !0), () => {
			window.removeEventListener("pointerdown", e, !0), window.removeEventListener("focusin", e, !0);
		};
	}, [g]), G(() => {
		let y = (t) => {
			let n = s.current[t];
			n && (e.current = !0, o.current = t, m(gt(n)), window.setTimeout(() => {
				e.current = !1;
			}, 0));
		}, b = (e) => {
			let m = e.target, b = Cx(m, g.current), x = Sx(m) && v.current, S = b || x, C = xx(m);
			if (e.key === "?" && !C && S) {
				e.preventDefault(), h(!0);
				return;
			}
			if (C) {
				S && e.key === "Escape" && (e.preventDefault(), t());
				return;
			}
			if (!S) return;
			let w = e.metaKey || e.ctrlKey;
			if (w && e.key.toLowerCase() === "z") {
				e.preventDefault(), y(e.shiftKey ? Math.min(s.current.length - 1, o.current + 1) : Math.max(0, o.current - 1));
				return;
			}
			if (w && e.key.toLowerCase() === "g") {
				e.preventDefault(), e.shiftKey ? _() : a();
				return;
			}
			if (w && e.key.toLowerCase() === "d") {
				e.preventDefault(), i();
				return;
			}
			if (w && e.key.toLowerCase() === "c") {
				if (wx()) return;
				e.preventDefault(), n();
				return;
			}
			if (w && e.key.toLowerCase() === "v") {
				e.preventDefault(), f();
				return;
			}
			if (w && (e.key === "+" || e.key === "=" && e.shiftKey || e.code === "Equal" || e.code === "NumpadAdd")) {
				e.preventDefault(), u();
				return;
			}
			if (w && (e.key === "-" || e.code === "Minus" || e.code === "NumpadSubtract")) {
				e.preventDefault(), d();
				return;
			}
			if (w && e.code === "BracketRight") {
				e.preventDefault(), p(e.shiftKey ? "front" : "forward");
				return;
			}
			if (w && e.code === "BracketLeft") {
				e.preventDefault(), p(e.shiftKey ? "back" : "backward");
				return;
			}
			if (e.key === "Delete" || e.key === "Backspace") {
				e.preventDefault(), r();
				return;
			}
			if (e.key === "ArrowLeft") {
				e.preventDefault(), c(e.shiftKey ? -10 : -1, 0);
				return;
			}
			if (e.key === "ArrowRight") {
				e.preventDefault(), c(e.shiftKey ? 10 : 1, 0);
				return;
			}
			if (e.key === "ArrowUp") {
				e.preventDefault(), c(0, e.shiftKey ? -10 : -1);
				return;
			}
			if (e.key === "ArrowDown") {
				e.preventDefault(), c(0, e.shiftKey ? 10 : 1);
				return;
			}
			w && e.key === "1" && (e.preventDefault(), l());
		};
		return window.addEventListener("keydown", b, !0), () => window.removeEventListener("keydown", b, !0);
	}, [
		e,
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		c,
		l,
		u,
		d,
		f,
		p,
		m,
		h,
		g,
		_
	]);
}
//#endregion
//#region src/lib/avnac-asset-resolver.ts
var Ex = "asset:";
function Dx(e) {
	return e.startsWith(Ex);
}
function Ox(e) {
	return e.slice(6);
}
function kx(e) {
	return `${Ex}${e}`;
}
async function Ax(e, t) {
	let n = await Promise.all(e.objects.map((e) => jx(e, t)));
	return {
		...e,
		objects: n
	};
}
async function jx(e, t) {
	if (e.type === "image" && Dx(e.src)) {
		let n = await t(e.src);
		return {
			...e,
			src: n
		};
	}
	if (e.type === "group" && e.children) {
		let n = await Promise.all(e.children.map((e) => jx(e, t)));
		return {
			...e,
			children: n
		};
	}
	return e;
}
async function Mx(e, t) {
	let n = await Ax(e, t);
	if (n.pages && n.pages.length > 0) {
		let e = await Promise.all(n.pages.map(async (e) => {
			let n = await Promise.all(e.objects.map((e) => jx(e, t)));
			return {
				...e,
				objects: n
			};
		}));
		return {
			...n,
			pages: e
		};
	}
	return n;
}
//#endregion
//#region src/lib/avnac-editor-idb.ts
var Nx = "avnac-editor", Px = 1, Fx = "documents";
function Ix(e) {
	if (!e || typeof e.id != "string") return null;
	let t = he(e.document);
	if (t === "invalid") return null;
	let n = Be(e.document);
	return n ? {
		id: e.id,
		updatedAt: Number.isFinite(e.updatedAt) ? e.updatedAt : Date.now(),
		document: n,
		storageKind: t,
		name: typeof e.name == "string" ? e.name : void 0
	} : null;
}
function Lx() {
	return new Promise((e, t) => {
		let n = indexedDB.open(Nx, Px);
		n.onerror = () => t(n.error ?? /* @__PURE__ */ Error("indexedDB open failed")), n.onsuccess = () => e(n.result), n.onupgradeneeded = () => {
			let e = n.result;
			e.objectStoreNames.contains(Fx) || e.createObjectStore(Fx, { keyPath: "id" });
		};
	});
}
async function Rx(e) {
	let t = await Lx();
	try {
		return await new Promise((n, r) => {
			let i = t.transaction(Fx, "readonly");
			i.onerror = () => r(i.error ?? /* @__PURE__ */ Error("idb read failed"));
			let a = i.objectStore(Fx).get(e);
			a.onerror = () => r(a.error ?? /* @__PURE__ */ Error("idb get failed")), a.onsuccess = () => {
				n(Ix(a.result ?? null));
			};
		});
	} finally {
		t.close();
	}
}
async function zx(e) {
	return (await Rx(e))?.document ?? null;
}
async function Bx(e, t, n) {
	let r = await Rx(e), i = n && n.name !== void 0 ? n.name.trim() || "Untitled" : r?.name?.trim() || "Untitled", a = await Lx();
	try {
		await new Promise((n, r) => {
			let o = a.transaction(Fx, "readwrite");
			o.onerror = () => r(o.error ?? /* @__PURE__ */ Error("idb write failed")), o.oncomplete = () => n(), o.objectStore(Fx).put({
				id: e,
				updatedAt: Date.now(),
				document: t,
				storageKind: "current",
				name: i
			});
		});
	} finally {
		a.close();
	}
}
//#endregion
//#region src/components/scene-editor/use-scene-document-lifecycle.ts
function Vx({ applyingHistoryRef: e, assetResolver: t, autosaveTimerRef: n, defaultArtboardH: r, defaultArtboardW: i, doc: a, historyIndexRef: o, historyRef: s, historyTimerRef: c, initialArtboardHeight: l, initialArtboardWidth: u, initialDocument: d, onChange: f, onReadyChange: p, persistDisplayNameRef: m, persistId: h, persistIdRef: g, ready: _, setDoc: v, setReady: y, setSelectedIds: b, setTextEditingId: x, setZoomPercent: S, zoomUserAdjustedRef: C }) {
	let w = Y(null);
	G(() => {
		let e = !1;
		return y(!1), (async () => {
			let n = null;
			if (d) n = Be(d);
			else if (h) {
				let e = await zx(h);
				n = e ? Be(e) : null;
			} else try {
				let e = localStorage.getItem(ut);
				n = e ? Be(JSON.parse(e)) : null;
			} catch {
				n = null;
			}
			let a = n ?? nt(ma(u, i), ma(l, r));
			if (!e) {
				if (t) try {
					a = await Mx(a, t);
				} catch (e) {
					console.error("[avnac] asset resolution failed", e);
				}
				e || (v(a), b([]), x(null), s.current = [gt(a)], o.current = 0, w.current = JSON.stringify(gt(a)), C.current = !1, S(100), y(!0));
			}
		})(), () => {
			e = !0;
		};
	}, [
		t,
		r,
		i,
		o,
		s,
		l,
		u,
		d,
		h,
		v,
		y,
		b,
		x,
		S,
		C
	]), G(() => {
		p?.(_);
	}, [p, _]), G(() => {
		if (_) return c.current && window.clearTimeout(c.current), c.current = window.setTimeout(() => {
			if (e.current) return;
			let t = gt(a), n = JSON.stringify(t), r = s.current[o.current];
			r && JSON.stringify(r) === n || (s.current = s.current.slice(0, o.current + 1), s.current.push(t), o.current = s.current.length - 1);
		}, 140), () => {
			c.current && window.clearTimeout(c.current);
		};
	}, [
		e,
		a,
		o,
		s,
		c,
		_
	]), G(() => {
		if (_) return n.current && window.clearTimeout(n.current), n.current = window.setTimeout(() => {
			let e = gt(a), t = JSON.stringify(e);
			g.current ? Bx(g.current, e, { name: m.current }).catch((e) => {
				console.error("[avnac] autosave failed", e);
			}) : localStorage.setItem(ut, JSON.stringify(e)), t !== w.current && (w.current = t, f?.(e));
		}, 240), () => {
			n.current && window.clearTimeout(n.current);
		};
	}, [
		n,
		a,
		f,
		m,
		g,
		_
	]);
}
//#endregion
//#region src/components/shadow-toolbar-popover.tsx
var Hx = 380, Ux = 50, Wx = 40;
function Gx({ value: e, shadowActive: t, onChange: n }) {
	let [r, i] = X(!1), a = Y(null), o = Y(null), { openUpward: s, shiftX: c } = Jn(r, a, Hx, U(() => o.current, []), "center");
	G(() => {
		if (!r) return;
		let e = (e) => {
			a.current?.contains(e.target) || i(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [r]);
	let l = Math.max(0, Math.min(Ux, Math.round(e.blur))), u = Math.max(-Wx, Math.min(Wx, Math.round(e.offsetX))), d = Math.max(-Wx, Math.min(Wx, Math.round(e.offsetY))), f = Math.max(0, Math.min(100, Math.round(e.opacityPct)));
	return /* @__PURE__ */ V("div", {
		ref: a,
		className: "relative shrink-0",
		children: [/* @__PURE__ */ V("button", {
			type: "button",
			className: [or(r, { wide: !0 }), "gap-1 px-2"].join(" "),
			"aria-label": t ? `Drop shadow, ${l}px blur` : "Drop shadow, off",
			title: "Shadow",
			"aria-expanded": r,
			"aria-haspopup": "dialog",
			onClick: () => i((e) => !e),
			children: [/* @__PURE__ */ B(M, {
				icon: v,
				size: 18,
				strokeWidth: 1.75
			}), /* @__PURE__ */ B("span", {
				className: "min-w-[2.25rem] text-left text-xs font-medium tabular-nums text-neutral-700",
				children: t ? `${l}` : "—"
			})]
		}), r ? /* @__PURE__ */ V("div", {
			ref: o,
			className: [
				"absolute left-1/2 z-[70] min-w-[15.5rem] p-3",
				s ? "bottom-full mb-2" : "top-full mt-2",
				lr
			].join(" "),
			style: { transform: `translateX(calc(-50% + ${c}px))` },
			children: [
				/* @__PURE__ */ V("div", {
					className: "mb-3 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ B("span", {
						className: "text-[13px] font-medium text-neutral-800",
						children: "Shadow"
					}), /* @__PURE__ */ V("label", {
						className: "flex cursor-pointer items-center gap-1.5 text-[12px] text-neutral-600",
						children: [/* @__PURE__ */ B("span", {
							className: "text-neutral-500",
							children: "Color"
						}), /* @__PURE__ */ B("input", {
							type: "color",
							value: /^#[0-9A-Fa-f]{6}$/.test(e.colorHex) ? e.colorHex : "#000000",
							onChange: (t) => n({
								...e,
								colorHex: t.target.value
							}),
							className: "h-7 w-9 cursor-pointer rounded border border-black/15 bg-white p-0",
							"aria-label": "Shadow color"
						})]
					})]
				}),
				/* @__PURE__ */ V("div", {
					className: "mb-2 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ B("span", {
						className: "text-[12px] font-medium text-neutral-600",
						children: "Blur"
					}), /* @__PURE__ */ V("span", {
						className: "text-[12px] tabular-nums text-neutral-500",
						children: [l, "px"]
					})]
				}),
				/* @__PURE__ */ B(nr, {
					min: 0,
					max: Ux,
					value: l,
					onChange: (t) => n({
						...e,
						blur: t
					}),
					"aria-label": "Shadow blur",
					trackClassName: "mb-3 w-full"
				}),
				/* @__PURE__ */ V("div", {
					className: "mb-2 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ B("span", {
						className: "text-[12px] font-medium text-neutral-600",
						children: "Opacity"
					}), /* @__PURE__ */ V("span", {
						className: "text-[12px] tabular-nums text-neutral-500",
						children: [f, "%"]
					})]
				}),
				/* @__PURE__ */ B(nr, {
					min: 0,
					max: 100,
					value: f,
					onChange: (t) => n({
						...e,
						opacityPct: t
					}),
					"aria-label": "Shadow opacity",
					trackClassName: "mb-3 w-full"
				}),
				/* @__PURE__ */ V("div", {
					className: "mb-2 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ B("span", {
						className: "text-[12px] font-medium text-neutral-600",
						children: "Offset X"
					}), /* @__PURE__ */ V("span", {
						className: "text-[12px] tabular-nums text-neutral-500",
						children: [u, "px"]
					})]
				}),
				/* @__PURE__ */ B(nr, {
					min: -Wx,
					max: Wx,
					value: u,
					onChange: (t) => n({
						...e,
						offsetX: t
					}),
					"aria-label": "Shadow offset X",
					trackClassName: "mb-3 w-full"
				}),
				/* @__PURE__ */ V("div", {
					className: "mb-2 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ B("span", {
						className: "text-[12px] font-medium text-neutral-600",
						children: "Offset Y"
					}), /* @__PURE__ */ V("span", {
						className: "text-[12px] tabular-nums text-neutral-500",
						children: [d, "px"]
					})]
				}),
				/* @__PURE__ */ B(nr, {
					min: -Wx,
					max: Wx,
					value: d,
					onChange: (t) => n({
						...e,
						offsetY: t
					}),
					"aria-label": "Shadow offset Y",
					trackClassName: "w-full"
				})
			]
		}) : null]
	});
}
//#endregion
//#region src/components/transparency-toolbar-popover.tsx
var Kx = 120;
function qx({ opacityPct: e, onChange: t }) {
	let [n, r] = X(!1), i = Y(null), a = Y(null), { openUpward: o, shiftX: s } = Jn(n, i, Kx, U(() => a.current, []), "center");
	return G(() => {
		if (!n) return;
		let e = (e) => {
			i.current?.contains(e.target) || r(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [n]), /* @__PURE__ */ V("div", {
		ref: i,
		className: "relative shrink-0",
		children: [/* @__PURE__ */ V("button", {
			type: "button",
			className: [or(n, { wide: !0 }), "gap-1 px-2"].join(" "),
			"aria-label": `Transparency, ${e}%`,
			title: "Transparency",
			"aria-expanded": n,
			"aria-haspopup": "dialog",
			onClick: () => r((e) => !e),
			children: [/* @__PURE__ */ B(M, {
				icon: p,
				size: 18,
				strokeWidth: 1.75
			}), /* @__PURE__ */ V("span", {
				className: "min-w-[2.25rem] text-left text-xs font-medium tabular-nums text-neutral-700",
				children: [e, "%"]
			})]
		}), n ? /* @__PURE__ */ V("div", {
			ref: a,
			className: [
				"absolute left-1/2 z-[70] min-w-[13.5rem] p-3",
				o ? "bottom-full mb-2" : "top-full mt-2",
				lr
			].join(" "),
			style: { transform: `translateX(calc(-50% + ${s}px))` },
			children: [/* @__PURE__ */ V("div", {
				className: "mb-2 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ B("span", {
					className: "text-[13px] font-medium text-neutral-800",
					children: "Opacity"
				}), /* @__PURE__ */ V("span", {
					className: "text-[13px] tabular-nums text-neutral-600",
					children: [e, "%"]
				})]
			}), /* @__PURE__ */ B(nr, {
				min: 0,
				max: 100,
				value: e,
				onChange: t,
				"aria-label": "Opacity",
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-valuenow": e,
				trackClassName: "w-full"
			})]
		}) : null]
	});
}
//#endregion
//#region src/components/scene-editor.tsx
var Jx = 4e3, Yx = 4e3, Xx = 32, Zx = 5, Qx = 500, $x = 48, eS = 24, tS = 240, nS = {
	type: "solid",
	color: "#262626"
}, rS = {
	type: "solid",
	color: "transparent"
}, iS = {
	type: "solid",
	color: "#262626"
};
function aS(e) {
	return e instanceof Element && !!e.closest("[data-avnac-scene-object]");
}
function oS(e, t, n) {
	let r = Xx;
	return {
		left: Math.abs(e.left - r) <= 2,
		centerH: Math.abs(e.left + e.width / 2 - t / 2) <= 2,
		right: Math.abs(e.left + e.width - (t - r)) <= 2,
		top: Math.abs(e.top - r) <= 2,
		centerV: Math.abs(e.top + e.height / 2 - n / 2) <= 2,
		bottom: Math.abs(e.top + e.height - (n - r)) <= 2
	};
}
function sS(e, t, n, r) {
	let i = e.getBoundingClientRect();
	if (i.width <= 0 || i.height <= 0 || t <= 0 || n <= 0) return null;
	let a = i.width / t, o = i.height / n;
	return {
		left: i.left + (r.left + r.width) * a + 8,
		top: i.top + (r.top + r.height) * o + 8,
		text: `w: ${Math.round(r.width).toLocaleString("en-US")} h: ${Math.round(r.height).toLocaleString("en-US")}`
	};
}
function cS(e) {
	return Math.max(Zx, Math.min(Qx, e));
}
function lS(e) {
	return e.trim().replace(/\.[a-z0-9]+$/i, "").replace(/[^a-z0-9-_]+/gi, "-").replace(/^-+|-+$/g, "") || "avnac";
}
function uS(e, t) {
	return {
		...e,
		artboard: { ...t.artboard },
		bg: t.bg,
		objects: t.objects,
		activePageId: t.id
	};
}
async function dS(e, t, n) {
	let r = uS(e, t), i = Math.max(t.artboard.width, t.artboard.height, 1), a = Math.max(.04, Math.min(1, 88 / i)), o = document.createElement("canvas");
	o.width = Math.max(1, Math.round(t.artboard.width * a)), o.height = Math.max(1, Math.round(t.artboard.height * a));
	let s = o.getContext("2d");
	if (!s) return null;
	s.setTransform(a, 0, 0, a, 0, 0);
	try {
		return await ea(s, r, n, { transparent: !1 }), o.toDataURL("image/png");
	} catch (e) {
		return console.error("[avnac] export page preview failed", e), null;
	}
}
async function fS(e) {
	let t = await fetch(e);
	if (!t.ok) throw Error("Could not read exported image.");
	return new Uint8Array(await t.arrayBuffer());
}
var pS = [
	1,
	0,
	0,
	1,
	0,
	0
];
function mS(e, t) {
	return [
		e[0] * t[0] + e[2] * t[1],
		e[1] * t[0] + e[3] * t[1],
		e[0] * t[2] + e[2] * t[3],
		e[1] * t[2] + e[3] * t[3],
		e[0] * t[4] + e[2] * t[5] + e[4],
		e[1] * t[4] + e[3] * t[5] + e[5]
	];
}
function hS(e) {
	let t = e.rotation * Math.PI / 180, n = Math.cos(t), r = Math.sin(t), i = e.x + e.width / 2, a = e.y + e.height / 2;
	return [
		n,
		r,
		-r,
		n,
		i - n * (e.width / 2) + r * (e.height / 2),
		a - r * (e.width / 2) - n * (e.height / 2)
	];
}
function gS(e, t, n) {
	return {
		x: e[0] * t + e[2] * n + e[4],
		y: e[1] * t + e[3] * n + e[5]
	};
}
function _S(e) {
	return Math.atan2(e[1], e[0]) * 180 / Math.PI;
}
function vS(e, t = pS, n = []) {
	for (let r of e) {
		if (!r.visible) continue;
		let e = mS(t, hS(r));
		if (r.type === "text") {
			r.text.trim() && n.push({
				obj: r,
				matrix: e
			});
			continue;
		}
		r.type === "group" && vS(r.children, e, n);
	}
	return n;
}
function yS(e, t) {
	let n = (t.fontWeight, t.fontWeight);
	e.font = `${t.fontStyle} ${n} ${t.fontSize}px "${t.fontFamily}", sans-serif`;
}
function bS(e, t, n) {
	yS(e, t);
	let r = e.measureText("Mg"), i = typeof r.fontBoundingBoxAscent == "number" && Number.isFinite(r.fontBoundingBoxAscent) ? r.fontBoundingBoxAscent : r.actualBoundingBoxAscent || t.fontSize * .8, a = typeof r.fontBoundingBoxDescent == "number" && Number.isFinite(r.fontBoundingBoxDescent) ? r.fontBoundingBoxDescent : r.actualBoundingBoxDescent || t.fontSize * .2;
	return (n - Math.max(1, i + a)) / 2 + i;
}
function xS(e) {
	let t = e.toLowerCase();
	return t.includes("mono") || t.includes("courier") ? "courier" : t.includes("serif") || t.includes("times") || t.includes("georgia") ? "times" : "helvetica";
}
function SS(e) {
	let t = e.fontWeight === "bold" || typeof e.fontWeight == "number" && e.fontWeight >= 600, n = e.fontStyle === "italic";
	return t && n ? "bolditalic" : t ? "bold" : n ? "italic" : "normal";
}
function CS(e, t) {
	let n = document.createElement("canvas").getContext("2d");
	if (n) for (let { obj: r, matrix: i } of vS(t.objects)) {
		let t = Gi(r, n), a = r.textAlign === "justify" ? "left" : r.textAlign, o = a === "center" ? r.width / 2 : a === "right" ? r.width : 0, s = bS(n, r, t.lineHeight);
		e.setFont(xS(r.fontFamily), SS(r)), e.setFontSize(r.fontSize);
		let c = e.getCharSpace();
		e.setCharSpace(r.letterSpacing);
		for (let n = 0; n < t.lines.length; n += 1) {
			let r = t.lines[n] ?? "";
			if (!r) continue;
			let c = gS(i, o, n * t.lineHeight + s);
			e.text(r, c.x, c.y, {
				align: a,
				angle: _S(i),
				baseline: "alphabetic",
				renderingMode: "invisible"
			});
		}
		e.setCharSpace(c);
	}
}
function wS(e) {
	return e.map((e, t) => Oe({
		...e,
		name: `Page ${t + 1}`
	}));
}
var TS = Lt(function({ onReadyChange: e, persistId: t, persistDisplayName: r, initialArtboardWidth: a, initialArtboardHeight: s, initialDocument: c, onChange: l, onRemoveBackground: d, onAssetUpload: p, assetResolver: m, onFetchAssets: h }, g) {
	let v = Y(t);
	v.current = t;
	let y = Y(r?.trim() || "Untitled");
	y.current = r?.trim() || "Untitled";
	let b = Y(null), S = Y(null), w = Y(null), E = Y(null), D = Y(null), O = Y(null), k = Y(null), j = Y(null), M = Y(!1), N = Y(null), ne = Y(null), re = Y(/* @__PURE__ */ new Map()), ae = Y([]), F = Y(-1), se = Y(!1), le = Y(null), ue = Y(null), de = Y(null), fe = Y(null), me = Y(null), he = Y(null);
	he.current ||= Le(nt(ma(a, Jx), ma(s, Yx)));
	let ge = he.current, I = pe(ge, (e) => e.doc), L = pe(ge, (e) => e.setDoc), R = pe(ge, (e) => e.selectedIds), _e = pe(ge, (e) => e.setSelectedIds), ve = pe(ge, (e) => e.setHoveredId), [ye, be] = X(!1), [Se, Ce] = X([]), [Te, Ee] = X(null), [De, z] = X(null), [ke, Ae] = X(null), [Me, Ne] = X(!1), [Fe, Ie] = X(!1), [Re, ze] = X(!1), [Ve, Ue] = X("generic"), [Ge, Ke] = X(!1), [Je, Ye] = X(""), [Xe, Ze] = X({
		x: 0,
		y: 0,
		w: 0,
		h: 0,
		rotation: 0
	}), [Qe, $e] = X({
		width: 0,
		height: 0
	}), et = Y(null), [tt, rt] = X(!1), [it, at] = X(null), [ot, ct] = X(null), [lt, ut] = X(null), [dt, ft] = X(""), [pt, mt] = X(!1), [ht, _t] = X(!1), [yt, bt] = X(null), [St, wt] = X(null), [Tt, Dt] = X([]), [, Ot] = X(0), [At, Mt] = X(null), Nt = Y(null), Pt = Y(null), { openUpward: Ft, shiftX: It } = Jn(Me, Nt, 440, U(() => Pt.current, []), "center");
	G(() => {
		if (!Me) return;
		let e = (e) => {
			Nt.current?.contains(e.target) || Ne(!1);
		}, t = (e) => {
			e.key === "Escape" && Ne(!1);
		};
		return document.addEventListener("mousedown", e), document.addEventListener("keydown", t), () => {
			document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t);
		};
	}, [Me]);
	let Lt = (De ?? 100) / 100;
	N.current = De;
	let H = I.artboard.width, W = I.artboard.height, K = J(() => I.objects.filter((e) => R.includes(e.id)), [I.objects, R]), q = K.length === 1 ? K[0] : null, Bt = q?.type === "text" && lt === q.id, Ht = K.length > 0;
	G(() => {
		(!pt || Ht) && Me && Ne(!1);
	}, [
		pt,
		Me,
		Ht
	]), G(() => {
		Ht && pt && mt(!1);
	}, [pt, Ht]);
	let Ut = U(() => {
		let e = b.current;
		if (!e) return;
		let t = Math.max(200, e.clientWidth - $x * 2), n = Math.max(200, e.clientHeight - $x * 2), r = Math.max(Zx, Math.min(Qx, Math.floor(Math.min(t / Math.max(1, H), n / Math.max(1, W)) * 100)));
		N.current = r, z(r);
	}, [W, H]);
	zt(() => {
		De === null || M.current || Ut();
	}, [
		H,
		W,
		Ut,
		De
	]), Vx({
		applyingHistoryRef: se,
		assetResolver: m,
		autosaveTimerRef: ue,
		defaultArtboardH: Yx,
		defaultArtboardW: Jx,
		doc: I,
		historyIndexRef: F,
		historyRef: ae,
		historyTimerRef: de,
		initialArtboardHeight: s,
		initialArtboardWidth: a,
		initialDocument: c,
		onChange: l,
		onReadyChange: e,
		persistDisplayNameRef: y,
		persistId: t,
		persistIdRef: v,
		ready: ye,
		setDoc: L,
		setReady: be,
		setSelectedIds: _e,
		setTextEditingId: ut,
		setZoomPercent: z,
		zoomUserAdjustedRef: M
	}), G(() => {
		if (!it) return;
		let e = window.setTimeout(() => at(null), 4500);
		return () => window.clearTimeout(e);
	}, [it]), G(() => () => {
		re.current.forEach((e) => {
			window.clearTimeout(e);
		}), re.current.clear();
	}, []);
	let Wt = J(() => ie(K), [K]), Gt = J(() => !q || q.type !== "text" ? null : {
		fontFamily: q.fontFamily,
		fontSize: q.fontSize,
		letterSpacing: q.letterSpacing,
		lineHeight: q.lineHeight ?? 1.22,
		fillStyle: q.fill,
		textAlign: q.textAlign,
		bold: q.fontWeight === "bold" || q.fontWeight === 700 || q.fontWeight === 600,
		italic: q.fontStyle === "italic",
		underline: q.underline
	}, [q]), Kt = J(() => {
		if (!q) return null;
		let e = ee(q);
		return e ? {
			meta: e,
			paint: q.type === "line" || q.type === "arrow" ? q.stroke : Ct(q) ?? nS,
			rectCornerRadius: q.type === "rect" ? q.cornerRadius : void 0,
			rectCornerRadiusMax: q.type === "rect" ? u(q) : void 0
		} : null;
	}, [q]), qt = J(() => !q || q.type !== "image" ? null : {
		radius: q.cornerRadius,
		max: u(q)
	}, [q]), Jt = J(() => !q || q.type !== "placeholder" ? null : {
		fit: q.fit,
		cornerRadius: q.cornerRadius,
		cornerRadiusMax: u(q),
		borderColor: q.borderColor || "#ffb88e",
		label: q.label || ""
	}, [q]), Z = J(() => K.length === 0 ? 0 : Math.round(K.reduce((e, t) => e + t.blurPct, 0) / K.length), [K]), Yt = J(() => K.length === 0 ? 100 : Math.round(K.reduce((e, t) => e + t.opacity, 0) / K.length * 100), [K]), Xt = J(() => {
		let e = K.filter((e) => He(e));
		return e.length === 0 ? null : Ct(e[0]) ?? nS;
	}, [K]), Zt = J(() => K.some((e) => n(e)), [K]), Qt = J(() => {
		let e = K.filter((e) => n(e));
		return e.length === 0 ? 0 : Math.round(e.reduce((e, t) => e + xt(t), 0) / e.length);
	}, [K]), $t = J(() => {
		let e = K.filter((e) => n(e));
		return e.length === 0 ? {
			type: "solid",
			color: "#000000"
		} : o(e[0]) ?? {
			type: "solid",
			color: "#000000"
		};
	}, [K]), tn = J(() => K.some((e) => e.shadow != null), [K]), nn = J(() => {
		let e = K.map((e) => e.shadow).filter((e) => e != null);
		return e.length > 0 ? oe(e) : { ...i };
	}, [K]), rn = J(() => {
		if (!Wt || !De) return null;
		let e = Wt.top * Lt, t = (Wt.top + Wt.height) * Lt, n = e <= 56 ? "below" : "above";
		return {
			left: (Wt.left + Wt.width / 2) * Lt,
			top: e <= 56 ? t : e,
			placement: n
		};
	}, [
		Wt,
		De,
		Lt
	]), an = J(() => Wt ? oS(Wt, H, W) : null, [
		Wt,
		H,
		W
	]), on = J(() => K.length > 0 && K.every((e) => e.locked), [K]), sn = K.length >= 2, cn = K.length >= 2, ln = q?.type === "group" && !q.locked, un = q?.type === "group" && !q.locked && q.children.length >= 2, dn = q?.type === "group" && !q.locked && q.children.length >= 3, fn = J(() => !un || q?.type !== "group" ? null : {
		horizontal: vt(q, "horizontal"),
		vertical: vt(q, "vertical")
	}, [un, q]), pn = q?.type === "image" && yt?.targetId === q.id ? yt.phase : "idle", mn = q?.type === "image" && yt?.targetId === q.id ? {
		object: q,
		phase: yt.phase
	} : null, hn = U((e, t) => {
		R.length !== 0 && (L((n) => ({
			...n,
			objects: n.objects.map((n) => R.includes(n.id) ? {
				...n,
				x: n.x + e,
				y: n.y + t
			} : n)
		})), Ot((e) => e + 1));
	}, [R]), gn = U((e) => {
		_e(e), Ot((e) => e + 1);
	}, []);
	G(() => {
		let e = /* @__PURE__ */ new Set(), t = (n) => {
			n.type === "text" && n.fontFamily.trim() && e.add(n.fontFamily.trim()), n.type === "group" && n.children.forEach(t);
		};
		I.objects.forEach(t), e.forEach((e) => {
			_i(e);
		});
	}, [I.objects]);
	let _n = U((e) => {
		R.length !== 0 && L((t) => {
			let n = La(t.objects, R, e);
			return n === t.objects ? t : {
				...t,
				objects: n
			};
		});
	}, [R]), vn = U((e, t) => {
		let n = E.current;
		if (!n) return {
			x: 0,
			y: 0
		};
		let r = n.getBoundingClientRect();
		return {
			x: Math.max(0, Math.min(H, (e - r.left) / Lt)),
			y: Math.max(0, Math.min(W, (t - r.top) / Lt))
		};
	}, [
		H,
		W,
		Lt
	]), yn = U((e) => {
		L((t) => ({
			...t,
			objects: [...t.objects, ...e]
		})), gn(e.map((e) => e.id));
	}, [gn]), bn = _s({
		addObjects: yn,
		artboardH: W,
		artboardW: H,
		persistId: t,
		ready: ye,
		setDoc: L
	}), { boardDocs: xn, placeVectorBoard: Sn } = bn, Cn = J(() => ({
		fontSize: Math.round(H * .04),
		shapeSize: Math.round(Math.min(H, W) * .16),
		lineW: Math.round(H * .24),
		lineH: Math.round(W * .12)
	}), [H, W]), wn = U((e) => ({
		...e,
		x: H / 2 - e.width / 2,
		y: W / 2 - e.height / 2
	}), [H, W]), Tn = U((e) => {
		let t = Cn.shapeSize, n = Cn.lineW, r = Cn.lineH, i = wn({
			id: crypto.randomUUID(),
			x: 0,
			y: 0,
			width: e === "line" || e === "arrow" ? Math.round(n * 1.2) : t,
			height: e === "line" || e === "arrow" ? Math.max(24, Math.round(r * .35)) : t,
			rotation: 0,
			opacity: 1,
			visible: !0,
			locked: !1,
			blurPct: 0,
			shadow: null
		}), a = Math.max(0, H - i.width), o = Math.max(0, W - i.height), s = () => {
			let e = i.x + i.width / 2, t = i.y + i.height / 2;
			return I.objects.some((n) => {
				let r = Et(n);
				return Math.abs(r.x - e) < 2 && Math.abs(r.y - t) < 2;
			});
		};
		for (; s() && (i.x < a || i.y < o);) i = {
			...i,
			x: Math.min(a, i.x + eS),
			y: Math.min(o, i.y + eS)
		};
		if (e === "rect") {
			yn([{
				...i,
				type: "rect",
				fill: nS,
				stroke: rS,
				strokeWidth: 0,
				cornerRadius: Math.round(t * .06)
			}]);
			return;
		}
		if (e === "ellipse") {
			yn([{
				...i,
				type: "ellipse",
				fill: nS,
				stroke: rS,
				strokeWidth: 0
			}]);
			return;
		}
		if (e === "polygon") {
			yn([{
				...i,
				type: "polygon",
				fill: nS,
				stroke: rS,
				strokeWidth: 0,
				sides: 6
			}]);
			return;
		}
		if (e === "star") {
			yn([{
				...i,
				type: "star",
				fill: nS,
				stroke: rS,
				strokeWidth: 0,
				points: 5
			}]);
			return;
		}
		if (e === "line") {
			yn([{
				...i,
				type: "line",
				stroke: iS,
				strokeWidth: 6,
				lineStyle: "solid",
				roundedEnds: !0
			}]);
			return;
		}
		yn([{
			...i,
			type: "arrow",
			stroke: iS,
			strokeWidth: 6,
			lineStyle: "solid",
			roundedEnds: !0,
			pathType: "straight",
			headSize: 1,
			curveBulge: Math.round(i.height * .4),
			curveT: .5
		}]);
	}, [
		yn,
		W,
		H,
		wn,
		Cn,
		I.objects
	]), En = U(() => {
		yn([wn({
			id: crypto.randomUUID(),
			type: "text",
			x: 0,
			y: 0,
			width: Math.round(H * .28),
			height: Math.round(Cn.fontSize * 1.4),
			rotation: 0,
			opacity: 1,
			visible: !0,
			locked: !1,
			blurPct: 0,
			shadow: null,
			text: "Add text",
			fill: {
				type: "solid",
				color: "#171717"
			},
			stroke: rS,
			strokeWidth: 0,
			fontFamily: "Inter",
			fontSize: Cn.fontSize,
			letterSpacing: 0,
			lineHeight: 1.22,
			fontWeight: "normal",
			fontStyle: "normal",
			underline: !1,
			textAlign: "left"
		})]);
	}, [
		yn,
		H,
		wn,
		Cn.fontSize
	]), Dn = U(async (e, t) => {
		let n = await er(e), r = t?.width ?? n.naturalWidth, i = t?.height ?? n.naturalHeight;
		if (!t?.width && !t?.height) {
			let e = Math.min(1, 800 / Math.max(r, i));
			r = Math.round(r * e), i = Math.round(i * e);
		} else t?.width && !t?.height ? i = Math.round(n.naturalHeight / n.naturalWidth * t.width) : !t?.width && t?.height && (r = Math.round(n.naturalWidth / n.naturalHeight * t.height));
		let a = t?.origin ?? "center", o = a === "center" ? (t?.x ?? H / 2) - r / 2 : t?.x ?? H / 2 - r / 2, s = a === "center" ? (t?.y ?? W / 2) - i / 2 : t?.y ?? W / 2 - i / 2, c = {
			id: crypto.randomUUID(),
			type: "image",
			x: o,
			y: s,
			width: r,
			height: i,
			rotation: 0,
			opacity: 1,
			visible: !0,
			locked: !1,
			blurPct: 0,
			shadow: null,
			src: n.src,
			naturalWidth: n.naturalWidth,
			naturalHeight: n.naturalHeight,
			crop: {
				x: 0,
				y: 0,
				width: n.naturalWidth,
				height: n.naturalHeight,
				rotation: 0
			},
			cornerRadius: 0
		};
		return yn([c]), c.id;
	}, [
		yn,
		W,
		H
	]), On = U((e, t) => {
		let n = Math.round(Math.max(96, Math.min(512, Math.min(H, W) * .12))), r = t?.origin ?? "top-left", i = r === "center" ? (t?.x ?? H / 2) - n / 2 : t?.x ?? H / 2 - n / 2, a = r === "center" ? (t?.y ?? W / 2) - n / 2 : t?.y ?? W / 2 - n / 2;
		yn([{
			id: crypto.randomUUID(),
			type: "icon",
			x: Math.max(0, Math.min(H - n, i)),
			y: Math.max(0, Math.min(W - n, a)),
			width: n,
			height: n,
			rotation: 0,
			opacity: 1,
			visible: !0,
			locked: !1,
			name: e.label,
			blurPct: 0,
			shadow: null,
			iconName: e.iconName,
			svg: x(e.svg),
			fill: nS,
			strokeWidth: 1.5
		}]);
	}, [
		yn,
		W,
		H
	]), kn = U(async (e, t) => {
		let n = e ? Array.from(e) : [], r = 0;
		for (let e of n) {
			if (!ua(e)) continue;
			let n;
			if (p) try {
				n = (await p(e)).url;
			} catch (t) {
				console.error("[avnac] asset upload failed, falling back to data URL", t), n = await new Promise((t, n) => {
					let r = new FileReader();
					r.onload = () => t(String(r.result)), r.onerror = () => n(r.error), r.readAsDataURL(e);
				});
			}
			else n = await new Promise((t, n) => {
				let r = new FileReader();
				r.onload = () => t(String(r.result)), r.onerror = () => n(r.error), r.readAsDataURL(e);
			});
			await Dn(n, t ? {
				...t,
				x: typeof t.x == "number" ? t.x + r * eS : t.x,
				y: typeof t.y == "number" ? t.y + r * eS : t.y
			} : void 0), r += 1;
		}
	}, [p, Dn]), Q = U((e) => {
		L((t) => ({
			...t,
			objects: t.objects.map((t) => R.includes(t.id) ? e(t) : t)
		}));
	}, [R]), An = U(() => {
		R.length !== 0 && (L((e) => ({
			...e,
			objects: T(e.objects, R)
		})), _e([]), ut(null));
	}, [R]), jn = U(async () => {
		R.length !== 0 && yn(I.objects.filter((e) => R.includes(e.id)).map((e) => {
			let t = Oa(e);
			return t.x += eS, t.y += eS, t.locked = !1, t;
		}));
	}, [
		yn,
		I.objects,
		R
	]), Mn = U(async () => {
		if (R.length === 0) return;
		let e = I.objects.filter((e) => R.includes(e.id)).map((e) => we(e));
		await navigator.clipboard.writeText(JSON.stringify({
			avnacClip: !0,
			v: 2,
			objects: e
		}));
	}, [I.objects, R]), Nn = U(async (e) => {
		let t = await la().catch(() => []);
		if (t.length > 0) {
			await kn(t);
			return;
		}
		let n = await navigator.clipboard.readText().catch(() => "");
		if (!n) return;
		let r = null;
		try {
			r = JSON.parse(n);
		} catch {
			r = null;
		}
		if (r?.avnacClip && Array.isArray(r.objects)) {
			let t = r.objects.map((e) => Be({
				v: 2,
				artboard: I.artboard,
				bg: I.bg,
				objects: [e]
			})?.objects[0] ?? null).filter((e) => e != null).map((e) => Oa(e));
			if (t.length > 0) {
				if (e) {
					let n = ie(t);
					if (n) {
						let r = e.x - n.left, i = e.y - n.top;
						for (let e of t) e.x += r, e.y += i;
					}
				} else for (let e of t) e.x += eS, e.y += eS;
				yn(t);
				return;
			}
		}
		(/^https?:\/\//i.test(n.trim()) || /^data:image\//i.test(n.trim())) && await Dn(n.trim(), e ? {
			...e,
			origin: "top-left"
		} : void 0);
	}, [
		kn,
		yn,
		I.artboard,
		I.bg,
		Dn
	]), Pn = U(() => {
		Q((e) => ({
			...e,
			locked: !on
		}));
	}, [on, Q]), Fn = U(() => {
		let e = Pe(I.objects.filter((e) => R.includes(e.id)));
		if (!e) return;
		let t = I.objects.findIndex((e) => R.includes(e.id)), n = I.objects.filter((e) => !R.includes(e.id));
		n.splice(t < 0 ? n.length : t, 0, e), L((e) => ({
			...e,
			objects: n
		})), _e([e.id]);
	}, [I.objects, R]), In = U(() => {
		if (!q || q.type !== "group") return;
		let e = kt(q);
		L((t) => {
			let n = t.objects.findIndex((e) => e.id === q.id), r = t.objects.filter((e) => e.id !== q.id);
			return r.splice(n < 0 ? r.length : n, 0, ...e), {
				...t,
				objects: r
			};
		}), _e(e.map((e) => e.id));
	}, [q]), Ln = U((e) => {
		L((t) => ({
			...t,
			bg: e
		}));
	}, []), Rn = U((e) => {
		Q((t) => t.type === "line" || t.type === "arrow" ? C(t, e) : He(t) ? _(t, e) : t);
	}, [Q]), zn = U((e) => {
		Q((t) => te(t, e));
	}, [Q]), Bn = U((e) => {
		Q((t) => C(t, e));
	}, [Q]), Vn = U((e) => {
		Q((t) => ({
			...t,
			blurPct: e
		}));
	}, [Q]), Hn = U((e) => {
		Q((t) => ({
			...t,
			opacity: Math.max(0, Math.min(1, e / 100))
		}));
	}, [Q]), Un = U((e) => {
		let t = e.blur === 0 && e.offsetX === 0 && e.offsetY === 0 && e.opacityPct === 0;
		Q((n) => ({
			...n,
			shadow: t ? null : { ...e }
		}));
	}, [Q]), Gn = U((e) => {
		Q((t) => t.type === "rect" ? f(t, e) : t);
	}, [Q]), Kn = U((e) => {
		Q((t) => t.type === "image" ? f(t, e) : t);
	}, [Q]), qn = U((e) => {
		Q((t) => t.type === "placeholder" ? {
			...t,
			fit: e
		} : t);
	}, [Q]), Yn = U((e) => {
		Q((t) => t.type === "placeholder" ? f(t, e) : t);
	}, [Q]), Xn = U((e) => {
		Q((t) => t.type === "placeholder" ? {
			...t,
			borderColor: e
		} : t);
	}, [Q]), Zn = U((e) => {
		Q((t) => t.type === "polygon" ? {
			...t,
			sides: Math.max(3, Math.min(32, Math.round(e)))
		} : t);
	}, [Q]), Qn = U((e) => {
		Q((t) => t.type === "star" ? {
			...t,
			points: Math.max(4, Math.min(32, Math.round(e)))
		} : t);
	}, [Q]), $n = U((e) => {
		Q((t) => t.type === "line" || t.type === "arrow" ? {
			...t,
			lineStyle: e
		} : t);
	}, [Q]), tr = U((e) => {
		Q((t) => t.type === "line" || t.type === "arrow" ? {
			...t,
			roundedEnds: e
		} : t);
	}, [Q]), nr = U((e) => {
		Q((t) => t.type === "line" || t.type === "arrow" ? {
			...t,
			strokeWidth: Math.max(1, e)
		} : t);
	}, [Q]), rr = U((e) => {
		Q((t) => t.type === "arrow" ? {
			...t,
			pathType: e
		} : t);
	}, [Q]), ir = U((e) => {
		e.fontFamily && _i(e.fontFamily), Q((t) => {
			if (t.type !== "text") return t;
			let n = { ...t };
			e.fontFamily && (n.fontFamily = e.fontFamily), e.fontSize !== void 0 && (n.fontSize = e.fontSize), e.letterSpacing !== void 0 && (n.letterSpacing = We(e.letterSpacing)), e.lineHeight !== void 0 && (n.lineHeight = Math.max(.6, Math.min(4, e.lineHeight))), e.fillStyle && (n.fill = e.fillStyle), e.textAlign && (n.textAlign = e.textAlign), e.bold !== void 0 && (n.fontWeight = e.bold ? "bold" : "normal"), e.italic !== void 0 && (n.fontStyle = e.italic ? "italic" : "normal"), e.underline !== void 0 && (n.underline = e.underline);
			let r = Gi(n);
			return n.height = Math.max(r.height, n.fontSize * xi(n)), n;
		});
	}, [Q]), or = U((e) => {
		if (!Wt) return;
		let t = 0, n = 0;
		e === "left" && (t = Xx - Wt.left), e === "centerH" && (t = H / 2 - (Wt.left + Wt.width / 2)), e === "right" && (t = H - Xx - (Wt.left + Wt.width)), e === "top" && (n = Xx - Wt.top), e === "centerV" && (n = W / 2 - (Wt.top + Wt.height / 2)), e === "bottom" && (n = W - Xx - (Wt.top + Wt.height)), Q((e) => ({
			...e,
			x: e.x + t,
			y: e.y + n
		}));
	}, [
		W,
		H,
		Wt,
		Q
	]), sr = U((e) => {
		if (K.length < 2) return;
		let t = ie(K);
		t && Q((n) => {
			let r = P(n);
			return e === "left" ? {
				...n,
				x: n.x + (t.left - r.left)
			} : e === "right" ? {
				...n,
				x: n.x + (t.left + t.width - (r.left + r.width))
			} : e === "centerH" ? {
				...n,
				x: n.x + (t.left + t.width / 2 - (r.left + r.width / 2))
			} : e === "top" ? {
				...n,
				y: n.y + (t.top - r.top)
			} : e === "bottom" ? {
				...n,
				y: n.y + (t.top + t.height - (r.top + r.height))
			} : {
				...n,
				y: n.y + (t.top + t.height / 2 - (r.top + r.height / 2))
			};
		});
	}, [K, Q]), cr = U((e) => {
		Q((t) => t.type === "group" && !t.locked ? je(t, e) : t);
	}, [Q]), lr = U((e, t) => {
		Q((n) => n.type === "group" && !n.locked ? A(n, e, t) : n);
	}, [Q]), ur = U((e, t) => {
		L((n) => ({
			...n,
			artboard: {
				width: e,
				height: t
			}
		})), M.current || window.setTimeout(() => Ut(), 0);
	}, [Ut]), dr = U(() => {
		!q || q.type !== "image" || (et.current = q.id, Ye(q.src), Ze({
			x: q.crop.x,
			y: q.crop.y,
			w: q.crop.width,
			h: q.crop.height,
			rotation: q.crop.rotation || 0
		}), $e({
			width: q.width,
			height: q.height
		}), Ke(!0));
	}, [q]), fr = U(() => {
		if (!q || q.type !== "image" || q.locked) return;
		if (!d) {
			rt(!0);
			return;
		}
		let e = q.id, t = q.src;
		bt({
			phase: "running",
			targetId: e
		}), (async () => {
			try {
				let n = await d(t);
				L((t) => ({
					...t,
					objects: t.objects.map((t) => t.id === e && t.type === "image" ? {
						...t,
						src: n.url
					} : t)
				})), bt({
					phase: "success",
					targetId: e
				}), window.setTimeout(() => {
					bt((t) => t?.targetId === e ? null : t);
				}, 900);
			} catch {
				bt((t) => t?.targetId === e ? null : t);
			}
		})();
	}, [
		q,
		d,
		L,
		bt
	]), pr = U((e) => {
		let t = et.current;
		t && (L((n) => ({
			...n,
			objects: n.objects.map((n) => {
				if (n.id !== t || n.type !== "image") return n;
				let r = e.width / Math.max(1, e.height), i = n.width / Math.max(1, n.height), a = n.width, o = n.height;
				Number.isFinite(r) && r > 0 && Math.abs(r - i) > .001 && (r >= i ? (a = n.width, o = Math.max(1, n.width / r)) : (o = n.height, a = Math.max(1, n.height * r)));
				let s = n.x + n.width / 2, c = n.y + n.height / 2;
				return {
					...n,
					x: s - a / 2,
					y: c - o / 2,
					width: a,
					height: o,
					crop: {
						x: e.cropX,
						y: e.cropY,
						width: e.width,
						height: e.height,
						rotation: e.cropRotation
					}
				};
			})
		})), Ke(!1));
	}, []), mr = U(() => {
		Ke(!1);
	}, []), hr = U((e) => {
		let t = new Blob([JSON.stringify(e, null, 2)], { type: "application/json" }), n = URL.createObjectURL(t), r = document.createElement("a");
		r.href = n, r.download = "avnac-document.json", r.click(), URL.revokeObjectURL(n);
	}, []), gr = U(() => {
		hr(I);
	}, [I, hr]), _r = U(async (e) => {
		let t = await e.text(), n;
		try {
			n = JSON.parse(t);
		} catch {
			throw Error("Invalid JSON file.");
		}
		let r = Be(n);
		if (!r) throw Error("This file is not an Avnac document.");
		se.current = !0, L(r), _e([]), ut(null), ae.current = [gt(r)], F.current = 0, window.setTimeout(() => {
			se.current = !1;
		}, 0);
	}, []), vr = U((e) => {
		(async () => {
			try {
				let t = e?.format ?? "png", n = e?.targetDpi ? Math.max(1, e.targetDpi / 96) : e?.multiplier ?? 1, r = e?.transparent ?? !1, i = lS(y.current || "avnac"), a = I.pages.length > 0 ? I.pages : [Oe({
					name: "Page 1",
					artboard: I.artboard,
					bg: I.bg,
					objects: I.objects
				})], o = e?.pageIds?.length ? new Set(e.pageIds) : null, s = o ? a.filter((e) => o.has(e.id)) : a, c = s.length > 0 ? s : a;
				if (t === "pdf") {
					let { jsPDF: t } = await import("./jspdf.es.min-DHYFsn0D.js"), r = null;
					for (let i of c) {
						let a = uS(I, i), { width: o, height: s } = i.artboard, c = o >= s ? "landscape" : "portrait", l = await ta(a, xn, {
							format: "png",
							multiplier: n,
							transparent: !1
						});
						r ? r.addPage([o, s], c) : r = new t({
							orientation: c,
							unit: "px",
							format: [o, s],
							hotfixes: ["px_scaling"],
							compress: !0
						}), r.addImage(l, "PNG", 0, 0, o, s), e?.flattenPdf || CS(r, i);
					}
					r?.save(`${i}.pdf`);
					return;
				}
				if (c.length > 1) {
					let e = {};
					for (let [a, o] of c.entries()) {
						let s = await ta(uS(I, o), xn, {
							format: t,
							multiplier: n,
							transparent: r
						}), c = String(a + 1).padStart(2, "0");
						e[`${i}-page-${c}.${t}`] = await fS(s);
					}
					let a = Wn(e, { level: 0 }), o = new ArrayBuffer(a.byteLength);
					new Uint8Array(o).set(a);
					let s = new Blob([o], { type: "application/zip" }), l = URL.createObjectURL(s), u = document.createElement("a");
					u.href = l, u.download = `${i}.zip`, u.click(), window.setTimeout(() => URL.revokeObjectURL(l), 0);
					return;
				}
				let l = c[0] ? uS(I, c[0]) : I, u = c[0] ?? null, d = await ta(l, xn, {
					format: t,
					multiplier: n,
					transparent: r
				}), f = document.createElement("a");
				if (f.href = d, u && a.length > 1) {
					let e = a.findIndex((e) => e.id === u.id);
					f.download = `${i}-page-${String((e >= 0 ? e : 0) + 1).padStart(2, "0")}.${t}`;
				} else f.download = `${i}.${t}`;
				f.click();
			} catch (e) {
				console.error("[avnac] export failed", e), at("Could not export this canvas. Some images could not be prepared.");
			}
		})();
	}, [I, xn]), yr = U(async () => {
		let e = I.pages.length > 0 ? I.pages : [];
		return Promise.all(e.map(async (e) => ({
			id: e.id,
			name: e.name,
			width: e.artboard.width,
			height: e.artboard.height,
			isCurrent: e.id === I.activePageId,
			previewUrl: await dS(I, e, xn)
		})));
	}, [I, xn]);
	Rt(g, () => ({
		exportImage: vr,
		getExportPages: yr,
		saveDocument: gr,
		loadDocument: _r
	}), [
		vr,
		yr,
		gr,
		_r
	]);
	let br = U((e) => {
		M.current = !0;
		let t = cS(e);
		N.current = t, z(t);
	}, []), xr = U(() => {
		M.current = !1, Ut();
	}, [Ut]), Sr = U((e, t, n) => {
		let r = N.current, i = b.current, a = w.current;
		if (r == null || !i || !a) return;
		let o = cS(n);
		if (o === r) return;
		let s = r / 100, c = o / 100, l = a.getBoundingClientRect(), u = (e - l.left) / s, d = (t - l.top) / s;
		N.current = o, z(o), window.requestAnimationFrame(() => {
			let n = a.getBoundingClientRect(), r = i.getBoundingClientRect(), o = e - r.left, s = t - r.top, l = n.left - r.left + u * c, f = n.top - r.top + d * c;
			i.scrollLeft += l - o, i.scrollTop += f - s;
		});
	}, []), Cr = U((e) => {
		let t = b.current, n = N.current;
		if (!t || n == null) return;
		M.current = !0;
		let r = t.getBoundingClientRect();
		Sr(r.left + r.width / 2, r.top + r.height / 2, n * e);
	}, [Sr]), wr = U(() => {
		Cr(1.1);
	}, [Cr]), Tr = U(() => {
		Cr(1 / 1.1);
	}, [Cr]);
	G(() => {
		if (!ye) return;
		let e = S.current, t = b.current;
		if (!t) return;
		let n = (n) => {
			let r = n.target;
			if (r instanceof Node && (t.contains(r) || e?.contains(r))) return !0;
			if (typeof n.clientX != "number" || typeof n.clientY != "number") return !1;
			let i = document.elementFromPoint(n.clientX, n.clientY);
			return !!i && (t.contains(i) || !!e?.contains(i));
		}, r = (e) => {
			if (typeof e.clientX == "number" && typeof e.clientY == "number") return {
				x: e.clientX,
				y: e.clientY
			};
			let n = t.getBoundingClientRect();
			return {
				x: n.left + n.width / 2,
				y: n.top + n.height / 2
			};
		}, i = (e) => {
			if (!e.ctrlKey || !n(e)) return;
			e.preventDefault(), e.stopPropagation(), M.current = !0;
			let t = N.current;
			if (t == null) return;
			let i = r(e);
			Sr(i.x, i.y, t * Math.exp(-e.deltaY * .006));
		}, a = (e) => {
			let t = e;
			n(t) && N.current != null && (ne.current = N.current, M.current = !0, t.preventDefault(), t.stopPropagation());
		}, o = (e) => {
			let t = e;
			if (!n(t)) return;
			let i = ne.current ?? N.current;
			if (i == null) return;
			M.current = !0, t.preventDefault(), t.stopPropagation();
			let a = r(t);
			Sr(a.x, a.y, i * t.scale);
		}, s = () => {
			ne.current = null;
		};
		return window.addEventListener("wheel", i, {
			passive: !1,
			capture: !0
		}), window.addEventListener("gesturestart", a, {
			passive: !1,
			capture: !0
		}), window.addEventListener("gesturechange", o, {
			passive: !1,
			capture: !0
		}), window.addEventListener("gestureend", s, !0), () => {
			ne.current = null, window.removeEventListener("wheel", i, !0), window.removeEventListener("gesturestart", a, !0), window.removeEventListener("gesturechange", o, !0), window.removeEventListener("gestureend", s, !0);
		};
	}, [ye, Sr]);
	let Er = U(() => {
		lt && (L((e) => ({
			...e,
			objects: e.objects.map((e) => {
				if (e.id !== lt || e.type !== "text") return e;
				let t = {
					...e,
					text: dt
				}, n = Gi(t);
				return t.height = Math.max(n.height, t.fontSize * 1.22), t;
			})
		})), ut(null));
	}, [dt, lt]), Dr = U((e) => {
		le.current = e, ve(null), wt(null), fe.current = null, me.current = null, Dt([]), Mt(null);
		let t = (e) => {
			let t = le.current;
			if (!t) return;
			let n = vn(e.clientX, e.clientY);
			if (t.kind === "marquee") {
				let e = Ta(t.startSceneX, t.startSceneY, n.x, n.y);
				wt(e);
				let r = t.objects.filter((t) => t.visible && Ea(P(t), e)).map((e) => e.id);
				_e(t.additive ? Da(t.initialSelection, r) : r);
				return;
			}
			if (t.kind === "move") {
				let e = n.x - t.startSceneX, r = n.y - t.startSceneY, i = e, a = r;
				if (t.initialBounds) {
					let n = Ha({
						...t.initialBounds,
						left: t.initialBounds.left + e,
						top: t.initialBounds.top + r
					}, t.snapTargets, H, W, Va(H, W), fe.current, me.current);
					i += Math.abs(n.dx) >= .25 ? n.dx : 0, a += Math.abs(n.dy) >= .25 ? n.dy : 0, fe.current = n.guides.find((e) => e.axis === "v")?.pos ?? null, me.current = n.guides.find((e) => e.axis === "h")?.pos ?? null, Dt(n.guides);
				} else fe.current = null, me.current = null, Dt([]);
				L((e) => ({
					...e,
					objects: e.objects.map((e) => {
						let n = t.initial.get(e.id);
						return n ? {
							...e,
							x: n.x + i,
							y: n.y + a
						} : e;
					})
				}));
				return;
			}
			if (t.kind === "rotate") {
				let r = ha(t.center.x, t.center.y, n.x, n.y) - t.startAngle, i = t.initialRotation + r;
				L((n) => ({
					...n,
					objects: n.objects.map((n) => n.id === t.id ? {
						...n,
						rotation: e.shiftKey ? ga(i) : i
					} : n)
				}));
				return;
			}
			let r = t.initial, i = Et(r), a = _a(n.x - i.x, n.y - i.y, r.rotation), o = e.altKey, s = e.shiftKey, c = xa(t.handle) && (r.type === "image" || (r.type === "group" || Aa(r)) && !s), l = ya(ba(t.handle), r.width, r.height), u = ya(t.handle, r.width, r.height), d = t.handle === "n" || t.handle === "s" ? u.x : a.x, f = t.handle === "e" || t.handle === "w" ? u.y : a.y, p = Math.min(l.x, d), m = Math.max(l.x, d), h = Math.min(l.y, f), g = Math.max(l.y, f);
			if (o) {
				let e = t.handle === "n" || t.handle === "s" ? r.width / 2 : Math.max(6, Math.abs(a.x)), n = t.handle === "e" || t.handle === "w" ? r.height / 2 : Math.max(6, Math.abs(a.y));
				p = -e, m = e, h = -n, g = n;
			} else if (t.handle === "e" || t.handle === "w") h = -r.height / 2, g = r.height / 2;
			else if (t.handle === "n" || t.handle === "s") p = -r.width / 2, m = r.width / 2;
			else if (c) {
				let e = wa(t.handle, l, {
					x: d,
					y: f
				}, r.width, r.height);
				p = e.minX, m = e.maxX, h = e.minY, g = e.maxY;
			}
			if (o && c) {
				let e = Math.max(12 / Math.max(1, r.width), 12 / Math.max(1, r.height), (m - p) / Math.max(1, r.width), (g - h) / Math.max(1, r.height)), t = Math.max(1, r.width) * e, n = Math.max(1, r.height) * e;
				p = -t / 2, m = t / 2, h = -n / 2, g = n / 2;
			}
			if (m - p < 12) {
				let e = (m + p) / 2;
				p = e - 6, m = e + 6;
			}
			if (g - h < 12) {
				let e = (g + h) / 2;
				h = e - 6, g = e + 6;
			}
			let _ = {
				x: (p + m) / 2,
				y: (h + g) / 2
			}, v = va(_.x, _.y, r.rotation), y = {
				x: o ? i.x : i.x + v.x,
				y: o ? i.y : i.y + v.y
			}, b = Ra(r, {
				x: y.x - (m - p) / 2,
				y: y.y - (g - h) / 2,
				width: m - p,
				height: g - h
			}, {
				handle: t.handle,
				initial: r,
				centered: o
			}), x = P(b), S = E.current;
			S && Mt(sS(S, H, W, x)), L((e) => ({
				...e,
				objects: e.objects.map((e) => e.id === t.id ? b : e)
			}));
		}, n = () => {
			le.current = null, wt(null), fe.current = null, me.current = null, Dt([]), Mt(null), window.removeEventListener("pointermove", t), window.removeEventListener("pointerup", n), window.removeEventListener("pointercancel", n);
		};
		window.addEventListener("pointermove", t), window.addEventListener("pointerup", n), window.addEventListener("pointercancel", n);
	}, [
		W,
		H,
		vn
	]), kr = U((e, t) => {
		if (e.button !== 0) return;
		if (e.stopPropagation(), mt(!1), lt && lt !== t.id && Er(), e.shiftKey || e.metaKey || e.ctrlKey) {
			_e((e) => e.includes(t.id) ? e.filter((e) => e !== t.id) : [...e, t.id]);
			return;
		}
		if (R.includes(t.id) || _e([t.id]), ct(null), t.locked) return;
		let n = vn(e.clientX, e.clientY), r = R.includes(t.id) ? R : [t.id], i = r, a = I.objects.filter((e) => i.includes(e.id));
		if (e.altKey && a.length > 0) {
			let e = a.map((e) => {
				let t = Oa(e);
				return t.locked = !1, t;
			});
			i = e.map((e) => e.id), a = e, L((t) => ({
				...t,
				objects: [...t.objects, ...e]
			})), _e(i);
		}
		let o = /* @__PURE__ */ new Map();
		for (let e of a) o.set(e.id, {
			x: e.x,
			y: e.y
		});
		let s = ie(a), c = I.objects.filter((e) => e.visible && !r.includes(e.id)).map((e) => P(e));
		Dr({
			kind: "move",
			ids: i,
			startSceneX: n.x,
			startSceneY: n.y,
			initial: o,
			initialBounds: s,
			snapTargets: c
		});
	}, [
		Er,
		I.objects,
		vn,
		R,
		Dr,
		lt
	]), Ar = U((e, t) => {
		!q || q.locked || (e.preventDefault(), e.stopPropagation(), Dr({
			kind: "resize",
			id: q.id,
			handle: t,
			initial: we(q)
		}));
	}, [q, Dr]), jr = U((e) => {
		if (!q || q.locked) return;
		e.preventDefault(), e.stopPropagation();
		let t = vn(e.clientX, e.clientY), n = Et(q);
		Dr({
			kind: "rotate",
			id: q.id,
			center: n,
			initialRotation: q.rotation,
			startAngle: ha(n.x, n.y, t.x, t.y)
		});
	}, [
		vn,
		q,
		Dr
	]), Mr = U((e) => {
		if (e.button !== 0) return;
		lt && Er(), ct(null), ve(null), _t(!0);
		let t = e.shiftKey || e.metaKey || e.ctrlKey, n = vn(e.clientX, e.clientY);
		mt(!t), t || _e([]), Dr({
			kind: "marquee",
			startSceneX: n.x,
			startSceneY: n.y,
			additive: t,
			initialSelection: t ? R : [],
			objects: I.objects.filter((e) => e.visible)
		});
	}, [
		Er,
		I.objects,
		vn,
		R,
		Dr,
		lt
	]), Nr = U((e) => {
		if (e.button !== 0) return;
		let t = e.target;
		w.current?.contains(t) || e.target?.closest?.("[data-avnac-chrome]") || (lt && Er(), ct(null), ve(null), _t(!1), mt(!1), wt(null), _e([]));
	}, [
		Er,
		ve,
		_e,
		lt
	]), Pr = U((e) => {
		_t(!aS(e.target));
	}, []), Fr = U((e) => {
		_t(!aS(e.target));
	}, []), Ir = U(() => {
		ve(null), _t(!1);
	}, []), Lr = U((e) => {
		e.preventDefault();
		let t = e.target, n = t?.closest?.("[data-avnac-scene-object]"), r = t?.closest?.("[data-avnac-page-id]"), i = r?.getAttribute("data-avnac-page-id") ?? null, a = vn(e.clientX, e.clientY);
		ct({
			x: e.clientX,
			y: e.clientY,
			sceneX: a.x,
			sceneY: a.y,
			hasSelection: R.length > 0,
			pageId: i,
			showPageActions: !!r && !n,
			locked: on
		});
	}, [
		on,
		vn,
		R.length
	]), Rr = U(() => ct(null), []), zr = U(() => {
		_e([]), ve(null), ut(null), _t(!1), mt(!1), wt(null), ct(null);
	}, [ve, _e]), Br = U((e, t) => {
		Er(), L((t) => t.activePageId === e ? t : xe(t, e)), zr(), t?.selectBackground && mt(!0);
	}, [
		zr,
		Er,
		L
	]), Vr = U((e) => {
		Er();
		let t = null;
		L((n) => {
			let r = e ? n.pages.findIndex((t) => t.id === e) : -1, i = r >= 0 ? r : n.pages.findIndex((e) => e.id === n.activePageId), a = i >= 0 ? n.pages[i] : null, o = i >= 0 ? i + 1 : n.pages.length, s = qe(a?.artboard.width ?? n.artboard.width, a?.artboard.height ?? n.artboard.height, `Page ${o + 1}`), c = [...n.pages];
			c.splice(o, 0, s);
			let l = wS(c);
			return t = s.id, xe({
				...n,
				pages: l
			}, s.id);
		}), Ee(t), zr();
	}, [
		zr,
		Er,
		L
	]), Hr = U((e) => {
		Er();
		let t = null;
		L((n) => {
			let r = e ? n.pages.findIndex((t) => t.id === e) : -1, i = r >= 0 ? r : n.pages.findIndex((e) => e.id === n.activePageId), a = i >= 0 ? n.pages[i] : Oe({
				name: "Page 1",
				artboard: n.artboard,
				bg: n.bg,
				objects: n.objects
			}), o = Oe({
				name: `Page ${i + 2}`,
				artboard: a.artboard,
				bg: a.bg,
				objects: a.objects.map((e) => Oa(e))
			}), s = [...n.pages];
			s.splice(i >= 0 ? i + 1 : s.length, 0, o);
			let c = wS(s);
			return t = o.id, xe({
				...n,
				pages: c
			}, o.id);
		}), Ee(t), zr();
	}, [
		zr,
		Er,
		L
	]), Ur = U((e) => {
		Er();
		let t = ge.getState().doc, n = e ?? t.activePageId;
		if (!n || re.current.has(n) || t.pages.length <= 1 || !t.pages.some((e) => e.id === n)) return;
		zr(), Ce((e) => e.includes(n) ? e : [...e, n]);
		let r = window.setTimeout(() => {
			re.current.delete(n), L((e) => {
				let t = e.pages.findIndex((e) => e.id === n), r = t >= 0 ? e.pages[t] : null;
				if (!r || e.pages.length <= 1) return e;
				let i = [...e.pages];
				i.splice(t, 1);
				let a = wS(i), o = a[Math.min(t, a.length - 1)] ?? a[0], s = r.id === e.activePageId ? o.id : e.activePageId, c = a.find((e) => e.id === s) ?? o;
				return xe({
					...e,
					artboard: { ...c.artboard },
					bg: c.bg,
					objects: c.objects,
					activePageId: s,
					pages: a
				}, s);
			}), Ce((e) => e.filter((e) => e !== n));
		}, tS);
		re.current.set(n, r);
	}, [
		zr,
		Er,
		ge,
		L
	]);
	zt(() => {
		if (!Te) return;
		let e = b.current;
		if (!e) return;
		let t = window.requestAnimationFrame(() => {
			let t = e.querySelector(`[data-avnac-page-id="${Te}"]`);
			t && t.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "nearest"
			}), Ee((e) => e === Te ? null : e);
		});
		return () => window.cancelAnimationFrame(t);
	}, [Te]), Tx({
		applyingHistoryRef: se,
		commitTextDraft: Er,
		copyElementToClipboard: Mn,
		deleteSelection: An,
		duplicateElement: jn,
		groupSelection: Fn,
		historyIndexRef: F,
		historyRef: ae,
		nudgeSelection: hn,
		onZoomFitRequest: xr,
		onZoomInRequest: wr,
		onZoomOutRequest: Tr,
		pasteFromClipboard: Nn,
		reorderSelectionLayers: _n,
		setDoc: L,
		setShortcutsOpen: Ie,
		shortcutScopeRef: b,
		ungroupSelection: In
	}), G(() => {
		let e = (e) => {
			if (lt || xx(e.target)) return;
			let t = b.current;
			if (!t || !(e.target instanceof Node) || !t.contains(e.target)) return;
			let n = fa(e.clipboardData);
			if (n.length > 0) {
				e.preventDefault(), kn(n);
				return;
			}
			let r = e.clipboardData ? oa(e.clipboardData) : null;
			r && (e.preventDefault(), Dn(r));
		};
		return window.addEventListener("paste", e), () => window.removeEventListener("paste", e);
	}, [
		kn,
		Dn,
		lt
	]);
	let Wr = U((e) => {
		(e.dataTransfer.types.includes("application/avnac-vector-board") || e.dataTransfer.types.includes("application/x-avnac-icon") || da(e.dataTransfer) || fa(e.dataTransfer).length > 0 || oa(e.dataTransfer)) && (e.preventDefault(), e.dataTransfer.dropEffect = "copy");
	}, []), Gr = U((e) => {
		e.preventDefault();
		let t = vn(e.clientX, e.clientY), n = e.dataTransfer.getData(Or);
		if (n) {
			Sn(n, t.x, t.y);
			return;
		}
		let r = ce(e.dataTransfer);
		if (r) {
			On(r, {
				x: t.x,
				y: t.y,
				origin: "top-left"
			});
			return;
		}
		let i = fa(e.dataTransfer);
		if (i.length > 0) {
			kn(i, {
				x: t.x,
				y: t.y,
				origin: "top-left"
			});
			return;
		}
		let a = oa(e.dataTransfer);
		a && Dn(a, {
			x: t.x,
			y: t.y,
			origin: "top-left"
		});
	}, [
		kn,
		On,
		Dn,
		Sn,
		vn
	]), Kr = bx({
		addObjects: yn,
		artboardH: W,
		artboardW: H,
		doc: I,
		placeImageObject: Dn,
		setDoc: L,
		setSelectedIds: _e
	});
	return /* @__PURE__ */ B(st, {
		store: ge,
		children: /* @__PURE__ */ B(hs, {
			value: bn,
			children: /* @__PURE__ */ V("div", {
				ref: S,
				className: "relative flex min-h-0 flex-1 flex-col",
				children: [
					/* @__PURE__ */ B("input", {
						ref: j,
						type: "file",
						accept: "image/*",
						className: "hidden",
						multiple: !0,
						onChange: (e) => {
							kn(e.target.files), e.target.value = "";
						}
					}),
					/* @__PURE__ */ B(cc, {
						value: {
							actions: {
								applyArrowLineStyle: $n,
								applyArrowPathType: rr,
								applyArrowRoundedEnds: tr,
								applyArrowStrokeWidth: nr,
								applyBackgroundPicked: Ln,
								applyImageCornerRadius: Kn,
								applyPaintToSelection: Rn,
								applyPlaceholderFit: qn,
								applyPlaceholderCornerRadius: Yn,
								applyPlaceholderBorderColor: Xn,
								applyPolygonSides: Zn,
								applyRectCornerRadius: Gn,
								applyStarPoints: Qn,
								onArtboardResize: ur,
								onTextFormatChange: ir,
								openImageCropModal: dr,
								removeImageBackground: fr,
								toggleBackgroundPopover: () => Ne((e) => !e)
							},
							refs: {
								backgroundPopoverAnchorRef: Nt,
								backgroundPopoverPanelRef: Pt,
								selectionToolsRef: O,
								viewportRef: b
							},
							state: {
								backgroundActive: pt,
								backgroundPopoverOpenUpward: Ft,
								backgroundPopoverShiftX: It,
								bgPopoverOpen: Me,
								elementToolbarLockedDisplay: on,
								hasObjectSelected: Ht,
								imageCornerToolbar: qt,
								imageRemovalState: pn,
								placeholderToolbar: Jt,
								ready: ye,
								selectionFillPaint: Xt,
								selectionEffectsFooterSlot: Ht ? /* @__PURE__ */ V(jt, { children: [
									/* @__PURE__ */ B(Ga, {
										blurPct: Z,
										onChange: Vn
									}),
									/* @__PURE__ */ B(ar, {}),
									/* @__PURE__ */ B(qx, {
										opacityPct: Yt,
										onChange: Hn
									}),
									Zt ? /* @__PURE__ */ V(jt, { children: [/* @__PURE__ */ B(ar, {}), /* @__PURE__ */ B(Ab, {
										strokeWidthPx: Qt,
										strokePaint: $t,
										onStrokeWidthChange: zn,
										onStrokePaintChange: Bn
									})] }) : null,
									/* @__PURE__ */ B(ar, {}),
									/* @__PURE__ */ B(Gx, {
										value: nn,
										shadowActive: tn,
										onChange: Un
									})
								] }) : null,
								shapeToolbarModel: Kt,
								textToolbarValues: Gt
							}
						},
						children: /* @__PURE__ */ B(uc, {})
					}),
					it ? /* @__PURE__ */ B("div", {
						className: "pointer-events-none absolute inset-x-0 top-3 z-40 flex justify-center px-3",
						children: /* @__PURE__ */ B("div", {
							className: "rounded-full border border-red-200 bg-red-50/95 px-4 py-2 text-sm text-red-700 shadow-[0_8px_24px_rgba(153,27,27,0.12)] backdrop-blur",
							children: it
						})
					}) : null,
					/* @__PURE__ */ B("div", {
						ref: b,
						className: "relative flex min-h-0 flex-1 flex-col overflow-auto overscroll-contain rounded-2xl bg-[var(--surface-subtle)]",
						onContextMenu: ye ? Lr : void 0,
						onDragOver: ye ? Wr : void 0,
						onDrop: ye ? Gr : void 0,
						onPointerDown: ye ? Nr : void 0,
						children: /* @__PURE__ */ B(qo, {
							value: {
								actions: {
									activatePage: Br,
									addPage: Vr,
									alignElementToArtboard: or,
									alignSelectedElements: sr,
									commitTextDraft: Er,
									copyElementToClipboard: () => void Mn(),
									deleteSelection: An,
									deletePage: Ur,
									duplicatePage: Hr,
									duplicateElement: () => void jn(),
									distributeGroupSpacing: cr,
									groupSelection: Fn,
									onArtboardPointerEnter: Pr,
									onArtboardPointerLeave: Ir,
									onArtboardPointerMove: Fr,
									onObjectHoverChange: (e, t) => {
										ve((n) => t ? e : n === e ? null : n);
									},
									onObjectPointerDown: kr,
									onRotateHandlePointerDown: jr,
									onSelectionHandlePointerDown: Ar,
									onTextDoubleClick: (e) => {
										e.locked || (_e([e.id]), ut(e.id), ft(e.text));
									},
									onTextDraftChange: ft,
									onViewportPointerDown: Mr,
									pasteFromClipboard: () => void Nn(),
									setGroupSpacing: lr,
									toggleElementLock: Pn,
									ungroupSelection: In
								},
								refs: {
									artboardInnerRef: E,
									artboardOuterRef: w,
									elementToolbarRef: D,
									viewportRef: b
								},
								state: {
									backgroundActive: pt,
									backgroundHovered: ht,
									deletingPageIds: Se,
									editingSelectedText: Bt,
									elementToolbarAlignAlready: an,
									elementToolbarCanAlignElements: cn,
									elementToolbarCanDistributeGroupSpacing: dn,
									elementToolbarCanGroup: sn,
									elementToolbarCanSpaceGroup: un,
									elementToolbarCanUngroup: !!ln,
									elementToolbarGroupSpacingValues: fn,
									elementToolbarLayout: rn,
									elementToolbarLockedDisplay: on,
									hasObjectSelected: Ht,
									imageRemovalEffect: mn,
									marqueeRect: St,
									ready: ye,
									scale: Lt,
									selectedObjects: K,
									selectedSingle: q,
									selectionBounds: Wt,
									snapGuides: Tt,
									textDraft: dt,
									textEditingId: lt
								}
							},
							children: /* @__PURE__ */ B(Ss, {})
						})
					}),
					/* @__PURE__ */ B(ks, {
						onAddPage: Vr,
						canDeletePage: I.pages.length > 1,
						contextMenu: ot,
						onClose: Rr,
						onCopy: () => void Mn(),
						onDelete: An,
						onDeletePage: Ur,
						onDuplicate: () => void jn(),
						onDuplicatePage: Hr,
						onPaste: (e) => void Nn(e),
						onToggleLock: Pn
					}),
					/* @__PURE__ */ B(Os, {
						addShapeFromKind: Tn,
						addText: En,
						imageInputRef: j,
						maxZoom: Qx,
						minZoom: Zx,
						onZoomFitRequest: xr,
						onZoomSliderChange: br,
						ready: ye,
						setShapesPopoverOpen: ze,
						setShapesQuickAddKind: Ue,
						setShortcutsOpen: Ie,
						shapeToolSplitRef: k,
						shapesPopoverOpen: Re,
						shapesQuickAddKind: Ve,
						zoomPercent: De
					}),
					/* @__PURE__ */ B(en, {}),
					ye ? null : /* @__PURE__ */ B("div", {
						className: "pointer-events-none absolute inset-0 flex items-center justify-center",
						children: /* @__PURE__ */ B("span", {
							className: "text-sm text-[var(--text-muted)]",
							children: "Loading canvas…"
						})
					}),
					/* @__PURE__ */ B(Lo, {
						onFetchAssets: h,
						onAssetUpload: p,
						assetResolver: m,
						children: /* @__PURE__ */ B(Po, {
							controller: Kr,
							children: /* @__PURE__ */ B(gx, {
								activePanel: ke,
								onClosePanel: () => Ae(null),
								onSelectPanel: (e) => Ae((t) => t === e ? null : e),
								ready: ye
							})
						})
					}),
					/* @__PURE__ */ B(qa, {
						open: Fe,
						onClose: () => Ie(!1)
					}),
					/* @__PURE__ */ B(Mo, {
						open: Ge,
						imageSrc: Je,
						initialCrop: Xe,
						initialFrame: Qe,
						onCancel: mr,
						onApply: pr
					}),
					/* @__PURE__ */ B(ES, {
						open: tt,
						onClose: () => rt(!1)
					}),
					ye && At ? Vt(/* @__PURE__ */ B("div", {
						className: "pointer-events-none fixed z-[10050] rounded-md bg-neutral-900 px-2 py-1 text-[11px] font-medium leading-5 tabular-nums text-white shadow-md",
						style: {
							left: At.left,
							top: At.top
						},
						role: "status",
						"aria-live": "polite",
						children: At.text
					}), document.body) : null
				]
			})
		})
	});
});
function ES({ open: e, onClose: t }) {
	return e ? /* @__PURE__ */ B("div", {
		className: "pointer-events-auto fixed inset-0 z-[20000] flex items-center justify-center bg-black/35 p-4 backdrop-blur-[2px]",
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "image-removal-unavailable-title",
		onMouseDown: (e) => {
			e.target === e.currentTarget && t();
		},
		children: /* @__PURE__ */ V("div", {
			"data-avnac-chrome": !0,
			className: "relative z-[1] w-full max-w-[34rem] overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white shadow-[0_32px_90px_rgba(15,23,42,0.24)]",
			children: [/* @__PURE__ */ V("div", {
				className: "bg-[linear-gradient(135deg,#fff6dd,#ffe8f1_48%,#eef8ff)] px-6 pb-6 pt-7 sm:px-8 sm:pb-7",
				children: [
					/* @__PURE__ */ B("div", {
						className: "grid size-14 place-items-center rounded-2xl border border-white/70 bg-white/75 text-[#db0061] shadow-[0_10px_24px_rgba(219,0,97,0.12)]",
						children: /* @__PURE__ */ B(M, {
							icon: s,
							size: 28,
							strokeWidth: 1.75
						})
					}),
					/* @__PURE__ */ B("h2", {
						id: "image-removal-unavailable-title",
						className: "display-title mt-5 text-[clamp(2.4rem,9vw,3.6rem)] font-semibold leading-[0.94] text-[#323232]",
						children: "Background removal is paused"
					}),
					/* @__PURE__ */ B("p", {
						className: "mt-4 max-w-[28rem] text-base font-medium leading-7 text-[#555f6b] sm:text-lg",
						children: ca
					})
				]
			}), /* @__PURE__ */ V("div", {
				className: "grid gap-3 px-6 py-5 sm:px-8 sm:py-6",
				children: [/* @__PURE__ */ V("a", {
					href: "/sponsor",
					className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 text-base font-bold text-white no-underline transition hover:bg-neutral-800",
					children: [/* @__PURE__ */ B(M, {
						icon: lt,
						size: 18,
						strokeWidth: 1.9
					}), "Sponsor Avnac"]
				}), /* @__PURE__ */ B("button", {
					type: "button",
					className: "inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full border border-black/[0.1] bg-white px-5 text-base font-bold text-neutral-900 transition hover:bg-black/[0.04]",
					onClick: t,
					children: "Close"
				})]
			})]
		})
	}) : null;
}
//#endregion
export { Ex as ASSET_REF_PREFIX, $e as AVNAC_DOC_VERSION, en as AgplSourceOffer, mb as EditorFeaturesProvider, TS as MemoriaEditor, gt as cloneAvnacDocument, Oe as createAvnacPage, nt as createEmptyAvnacDocument, qe as createEmptyAvnacPage, Ox as getAssetId, Dx as isAssetRef, Yt as n, Be as parseAvnacDocument, Zt as r, ea as renderAvnacDocumentToCanvas, ta as renderAvnacDocumentToDataUrl, Mx as resolveAllPagesAssets, Ax as resolveDocumentAssets, fb as resolveFeatures, Z as t, kx as toAssetRef, hb as useEditorFeatures };
