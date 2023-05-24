var Ip = Object.defineProperty;
var zp = (E, T, m) => T in E ? Ip(E, T, { enumerable: !0, configurable: !0, writable: !0, value: m }) : E[T] = m;
var Ut = (E, T, m) => (zp(E, typeof T != "symbol" ? T + "" : T, m), m);
const kp = {
  Point: "point",
  Line: "line",
  Polygon: "polygon"
};
var Da = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Np(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
var je = {}, Up = {
  get exports() {
    return je;
  },
  set exports(E) {
    je = E;
  }
};
(function(E, T) {
  (function(m, C) {
    C(T);
  })(Da, function(m) {
    function C(r) {
      this.options = r || {}, this.paneName = this.options.paneName || "labelPane", this.zIndex = this.options.zIndex || 1, this._map = r.map, this._lastDrawTime = null, this.show();
    }
    function L(r) {
      return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
    }
    function S(r, i) {
      return i = { exports: {} }, r(i, i.exports), i.exports;
    }
    function N(r, i) {
      return function(t) {
        return i(r(t));
      };
    }
    function Y(r) {
      var i = function(t) {
        return t == null ? t : (1 < arguments.length && (t = Array.prototype.slice.call(arguments)), r(t));
      };
      return "conversion" in r && (i.conversion = r.conversion), i;
    }
    function H(r) {
      var i = function(t) {
        if (t == null)
          return t;
        1 < arguments.length && (t = Array.prototype.slice.call(arguments));
        var e = r(t);
        if ((typeof e > "u" ? "undefined" : be(e)) === "object")
          for (var a = e.length, n = 0; n < a; n++)
            e[n] = Math.round(e[n]);
        return e;
      };
      return "conversion" in r && (i.conversion = r.conversion), i;
    }
    function V(r, i) {
      if (!(this instanceof V))
        return new V(r, i);
      if (i && i in ou && (i = null), i && !(i in He))
        throw Error("Unknown model: " + i);
      if (typeof r > "u")
        this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
      else if (r instanceof V)
        this.model = r.model, this.color = r.color.slice(), this.valpha = r.valpha;
      else if (typeof r == "string") {
        if (i = Xi.get(r), i === null)
          throw Error("Unable to parse color from string: " + r);
        this.model = i.model;
        var t = He[this.model].channels;
        this.color = i.value.slice(0, t), this.valpha = typeof i.value[t] == "number" ? i.value[t] : 1;
      } else if (r.length)
        this.model = i || "rgb", t = He[this.model].channels, i = jo.call(r, 0, t), this.color = st(i, t), this.valpha = typeof r[t] == "number" ? r[t] : 1;
      else if (typeof r == "number")
        r &= 16777215, this.model = "rgb", this.color = [r >> 16 & 255, r >> 8 & 255, r & 255], this.valpha = 1;
      else {
        if (this.valpha = 1, i = de(r), "alpha" in r && (i.splice(i.indexOf("alpha"), 1), this.valpha = typeof r.alpha == "number" ? r.alpha : 0), i = i.sort().join(""), !(i in Wo))
          throw Error("Unable to parse color from object: " + Gi(r));
        this.model = Wo[i], t = He[this.model].labels;
        var e = [];
        for (i = 0; i < t.length; i++)
          e.push(r[t[i]]);
        this.color = st(e);
      }
      if (Gn[this.model])
        for (t = He[this.model].channels, i = 0; i < t; i++)
          (r = Gn[this.model][i]) && (this.color[i] = r(this.color[i]));
      this.valpha = Math.max(0, Math.min(1, this.valpha)), iu && iu(this);
    }
    function J(r) {
      return function(i) {
        return Number(i.toFixed(r));
      };
    }
    function rt(r, i, t) {
      return r = Array.isArray(r) ? r : [r], r.forEach(function(e) {
        (Gn[e] || (Gn[e] = []))[i] = t;
      }), r = r[0], function(e) {
        if (arguments.length) {
          t && (e = t(e));
          var a = this[r]();
          return a.color[i] = e, a;
        }
        return a = this[r]().color[i], t && (a = t(a)), a;
      };
    }
    function tt(r) {
      return function(i) {
        return Math.max(0, Math.min(r, i));
      };
    }
    function st(r, i) {
      for (var t = 0; t < i; t++)
        typeof r[t] != "number" && (r[t] = 0);
      return r;
    }
    function D(r) {
      return r * Math.PI / 180;
    }
    function z(r) {
      return r / Math.PI * 180;
    }
    function b(r) {
      return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
    }
    function j(r) {
      return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
    }
    function k(r, i) {
      return 1e-8 > Math.abs(r - i);
    }
    function W(r) {
      var i = r[0], t = r[r.length - 1];
      return Math.sqrt(Math.pow(i[0] - t[0], 2) + Math.pow(i[1] - t[1], 2) + Math.pow((i[2] || 0) - (t[2] || 0), 2)) < (1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 2e-7);
    }
    function q() {
    }
    function $(r, i) {
      for (var t in i)
        r[t] = i[t];
    }
    function nt(r, i) {
      this.lng = r, this.lat = i;
    }
    function At(r, i) {
      this.x = r, this.y = i;
    }
    function mt(r, i) {
      var t = document.createElement("canvas");
      return r && (t.width = r), i && (t.height = i), t;
    }
    function gt(r) {
      r = r || {}, this.gradient = r.gradient || { "0.25": "rgba(0, 0, 255, 1)", "0.55": "rgba(0, 255, 0, 1)", "0.85": "rgba(255, 255, 0, 1)", 1: "rgba(255, 0, 0, 1)" }, this.maxSize = r.maxSize === void 0 ? 35 : r.maxSize, this.minSize = r.minSize || 0, this.max = r.max || 100, this.min = r.min || 0, this.initPalette();
    }
    function ht(r) {
      this.options = r || {}, this._initialize();
    }
    function xt(r, i, t, e, a) {
      var n = 1 - r, s = 1 - r;
      return n * n * n * i + 3 * s * s * r * t + 3 * (1 - r) * r * r * e + r * r * r * a;
    }
    function ot(r) {
      this.WORLD_SIZE_MC_HALF = 20037726372307256e-9, this.WORLD_SIZE_MC = 2 * this.WORLD_SIZE_MC_HALF, this.options = r || {}, this._initialize();
    }
    function at(r, i) {
      return r && i ? Math.round(Math.sqrt(Math.pow(r.lng - i.lng, 2) + Math.pow(r.lat - i.lat, 2))) : 0;
    }
    function _t(r) {
      return r = r.split("|"), r[0] = r[0].split(","), { lng: parseFloat(r[0][0]), lat: parseFloat(r[0][1]) };
    }
    function Et(r) {
      for (var i = r.length; 0 <= --i; )
        r[i] = 0;
    }
    function Wt(r, i, t, e, a) {
      this.static_tree = r, this.extra_bits = i, this.extra_base = t, this.elems = e, this.max_length = a, this.has_stree = r && r.length;
    }
    function zt(r, i) {
      this.dyn_tree = r, this.max_code = 0, this.stat_desc = i;
    }
    function Kt(r, i, t, e, a) {
      this.good_length = r, this.max_lazy = i, this.nice_length = t, this.max_chain = e, this.func = a;
    }
    function qt() {
      this.strm = null, this.status = 0, this.pending_buf = null, this.wrap = this.pending = this.pending_out = this.pending_buf_size = 0, this.gzhead = null, this.gzindex = 0, this.method = Vn, this.last_flush = -1, this.w_mask = this.w_bits = this.w_size = 0, this.window = null, this.window_size = 0, this.head = this.prev = null, this.nice_match = this.good_match = this.strategy = this.level = this.max_lazy_match = this.max_chain_length = this.prev_length = this.lookahead = this.match_start = this.strstart = this.match_available = this.prev_match = this.match_length = this.block_start = this.hash_shift = this.hash_mask = this.hash_bits = this.hash_size = this.ins_h = 0, this.dyn_ltree = new Uint16Array(1146), this.dyn_dtree = new Uint16Array(122), this.bl_tree = new Uint16Array(78), Dr(this.dyn_ltree), Dr(this.dyn_dtree), Dr(this.bl_tree), this.bl_desc = this.d_desc = this.l_desc = null, this.bl_count = new Uint16Array(16), this.heap = new Uint16Array(573), Dr(this.heap), this.heap_max = this.heap_len = 0, this.depth = new Uint16Array(573), Dr(this.depth), this.bi_valid = this.bi_buf = this.insert = this.matches = this.static_len = this.opt_len = this.d_buf = this.last_lit = this.lit_bufsize = this.l_buf = 0;
    }
    function Nt(r) {
      r = this.options = Yn.assign({ level: Rc, method: Bc, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: Oc }, r || {}), r.raw && 0 < r.windowBits ? r.windowBits = -r.windowBits : r.gzip && 0 < r.windowBits && 16 > r.windowBits && (r.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Su(), this.strm.avail_out = 0;
      var i = tn.deflateInit2(
        this.strm,
        r.level,
        r.method,
        r.windowBits,
        r.memLevel,
        r.strategy
      );
      if (i !== Zn)
        throw Error(Jr[i]);
      if (r.header && tn.deflateSetHeader(this.strm, r.header), r.dictionary) {
        if (r = typeof r.dictionary == "string" ? rn.string2buf(r.dictionary) : Ru.call(r.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(r.dictionary) : r.dictionary, i = tn.deflateSetDictionary(this.strm, r), i !== Zn)
          throw Error(Jr[i]);
        this._dict_set = !0;
      }
    }
    function $t(r, i) {
      if (i = new Nt(i), i.push(r, !0), i.err)
        throw i.msg || Jr[i.err];
      return i.result;
    }
    function Bt() {
      this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.total = this.check = this.dmax = this.flags = 0, this.head = null, this.wnext = this.whave = this.wsize = this.wbits = 0, this.window = null, this.extra = this.offset = this.length = this.bits = this.hold = 0, this.distcode = this.lencode = null, this.have = this.ndist = this.nlen = this.ncode = this.distbits = this.lenbits = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.distdyn = this.lendyn = null, this.was = this.back = this.sane = 0;
    }
    function Yt(r) {
      var i = this.options = Yn.assign({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
      }, r || {});
      if (i.raw && 0 <= i.windowBits && 16 > i.windowBits && (i.windowBits = -i.windowBits, i.windowBits === 0 && (i.windowBits = -15)), !(0 <= i.windowBits && 16 > i.windowBits) || r && r.windowBits || (i.windowBits += 32), 15 < i.windowBits && 48 > i.windowBits && !(i.windowBits & 15) && (i.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Su(), this.strm.avail_out = 0, r = mr.inflateInit2(this.strm, i.windowBits), r !== on || (this.header = new Gc(), mr.inflateGetHeader(this.strm, this.header), i.dictionary && (typeof i.dictionary == "string" ? i.dictionary = rn.string2buf(i.dictionary) : Hu.call(i.dictionary) === "[object ArrayBuffer]" && (i.dictionary = new Uint8Array(i.dictionary)), i.raw && (r = mr.inflateSetDictionary(this.strm, i.dictionary), r !== on))))
        throw Error(Jr[r]);
    }
    function Ht(r, i) {
      if (i = new Yt(i), i.push(r), i.err)
        throw i.msg || Jr[i.err];
      return i.result;
    }
    function Xt(r, i) {
      for (var t = ["webgl2", "experimental-webgl2", "webgl", "experimental-webgl"], e = void 0, a = 0; a < t.length; a++)
        try {
          if (e = r.getContext(t[a], {
            stencil: !0,
            alpha: !0,
            premultipliedAlpha: !1,
            antialias: i.antialias || !0,
            preserveDrawingBuffer: i.preserveDrawingBuffer || !1
          }))
            break;
        } catch {
        }
      return e;
    }
    function Zt(r, i, t) {
      var e = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : {};
      t = Rt({ TEXTURE_MAG_FILTER: "LINEAR", TEXTURE_MIN_FILTER: "LINEAR", TEXTURE_WRAP_S: "REPEAT", TEXTURE_WRAP_T: "REPEAT" }, t);
      var a = r.createTexture();
      if (r.bindTexture(r.TEXTURE_2D, a), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, e.flipY || !0), e.format && e.width) {
        var n = r.LUMINANCE;
        e.format && (n = r[e.format]), e.format !== "RGBA" && e.format !== "RGB" ? (i = new Float32Array(i), r.texImage2D(r.TEXTURE_2D, 0, r.R32F, e.width, e.height, 0, r.RED, r[e.type] || r.FLOAT, i)) : r.texImage2D(r.TEXTURE_2D, 0, n, e.width, e.height, 0, n, r[e.type] || r.FLOAT, i);
      } else
        r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, i);
      for (var s in t)
        r.texParameteri(r.TEXTURE_2D, r[s], r[t[s]]);
      return r.bindTexture(r.TEXTURE_2D, null), { texture: a, data: { width: e.width, height: e.height, data: i, type: e.type } };
    }
    function Ot(r, i, t, e, a) {
      if ((typeof i > "u" ? "undefined" : be(i)) === "object")
        i = Zt(r, i, e, a), t(i.texture, null, i.data);
      else {
        var n = new Image();
        n.crossOrigin = "anonymous", n.onload = function() {
          var s = j(n.width), o = j(n.height), u = document.createElement("canvas");
          u.width = s, u.height = o;
          var c = u.getContext("2d");
          c.drawImage(n, 0, 0, s, o), n = u, u = Zt(r, n, e, a).texture, t(u, n, { width: s, height: o, data: c.getImageData(0, 0, s, o), type: "RGBA" });
        }, n.src = i;
      }
    }
    function ie(r, i) {
      if (i instanceof Array) {
        var t = {
          zero: r.ZERO,
          one: r.ONE,
          src_color: r.SRC_COLOR,
          one_minus_src_color: r.ONE_MINUS_SRC_COLOR,
          dst_color: r.DST_COLOR,
          one_minus_dst_color: r.ONE_MINUS_DST_COLOR,
          src_alpha: r.SRC_ALPHA,
          one_minus_src_alpha: r.ONE_MINUS_SRC_ALPHA,
          dst_alpha: r.DST_ALPHA,
          one_minus_dst_alpha: r.ONE_MINUS_DST_ALPHA,
          constant_color: r.CONSTANT_COLOR,
          one_minus_constant_color: r.ONE_MINUS_CONSTANT_COLOR,
          constant_alpha: r.CONSTANT_ALPHA,
          one_minus_constant_alpha: r.ONE_MINUS_CONSTANT_ALPHA,
          src_alpha_saturate: r.SRC_ALPHA_SATURATE
        };
        return i.map(function(e) {
          return t[e];
        });
      }
      switch (i) {
        case "default":
          return su ? [r.SRC_ALPHA, r.ZERO, r.ONE, r.ZERO] : [r.ONE, r.ZERO];
        case "deeper":
          return [r.ONE, r.ONE_MINUS_SRC_ALPHA];
        case "normal":
          return [r.SRC_ALPHA, r.ONE];
        case "lighter":
          return [r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA];
        default:
          return [r.ONE, r.ZERO];
      }
    }
    function rr(r, i) {
      var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : [], e = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "#ccc", a = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 1, n = document.createElement("canvas"), s = n.getContext("2d");
      n.width = 256, n.height = a, n = i[0];
      var o = i[i.length - 1];
      if (r.length === i.length) {
        for (var u = s.createLinearGradient(0, 0, 256, 1), c = 0; c < r.length; ++c)
          u.addColorStop((i[c] - n) / (o - n), r[c]);
        s.fillStyle = u, s.fillRect(0, 0, 256, a);
      } else if (r.length - i.length === -1) {
        u = 0, c = 1;
        for (var v = 0; v < r.length; ++v) {
          var l = Math.floor((i[c] - n) / (o - n) * 256);
          s.fillStyle = r[v], s.fillRect(u, 0, l, a), u = l, c++;
        }
      } else
        s.fillStyle = e || "#ccc", s.fillRect(0, 0, 256, a);
      return -1 >= r.length - i.length && t.length === 2 && (s.fillStyle = e || "#ccc", e = (t[0] - n) / (o - n), e = Math.floor(256 * e), s.fillRect(0, 0, e, a), e = (t[1] - n) / (o - n), e = Math.floor(256 * e), s.fillRect(
        e,
        0,
        255,
        a
      )), { data: new Uint8Array(new Uint8ClampedArray(s.getImageData(0, 0, 256, a).data)), width: 256, height: a };
    }
    function le(r, i, t) {
      t = t || 2;
      var e = i && i.length, a = e ? i[0] * t : r.length, n = Ne(r, 0, a, t, !0), s = [];
      if (!n || n.next === n.prev)
        return s;
      var o;
      if (e) {
        var u = t;
        e = [];
        var c, v = 0;
        for (c = i.length; v < c; v++) {
          var l = i[v] * u, f = v < c - 1 ? i[v + 1] * u : r.length;
          l = Ne(r, l, f, u, !1), l === l.next && (l.steiner = !0), e.push(Wf(l));
        }
        for (e.sort(Gf), v = 0; v < e.length; v++)
          u = e[v], i = n, (i = jf(u, i)) && (u = hs(i, u), we(i, i.next), we(u, u.next)), n = we(n, n.next);
      }
      if (r.length > 80 * t) {
        var p = o = r[0], d = e = r[1];
        for (u = t; u < a; u += t)
          v = r[u], i = r[u + 1], v < p && (p = v), i < d && (d = i), v > o && (o = v), i > e && (e = i);
        o = Math.max(o - p, e - d), o = o !== 0 ? 1 / o : 0;
      }
      return cr(n, s, t, p, d, o), s;
    }
    function Ne(r, i, t, e, a) {
      if (a === 0 < Ao(r, i, t, e))
        for (a = i; a < t; a += e)
          var n = cs(a, r[a], r[a + 1], n);
      else
        for (a = t - e; a >= i; a -= e)
          n = cs(a, r[a], r[a + 1], n);
      return n && _n(n, n.next) && (Oi(n), n = n.next), n;
    }
    function we(r, i) {
      if (!r)
        return r;
      i || (i = r);
      do {
        var t = !1;
        if (r.steiner || !_n(r, r.next) && se(r.prev, r, r.next) !== 0)
          r = r.next;
        else {
          if (Oi(r), r = i = r.prev, r === r.next)
            break;
          t = !0;
        }
      } while (t || r !== i);
      return i;
    }
    function cr(r, i, t, e, a, n, s) {
      if (r) {
        if (!s && n) {
          var o = r, u = o;
          do
            u.z === null && (u.z = xo(u.x, u.y, e, a, n)), u.prevZ = u.prev, u = u.nextZ = u.next;
          while (u !== o);
          u.prevZ.nextZ = null, u.prevZ = null, o = u;
          var c, v, l, f, p = 1;
          do {
            u = o;
            var d = o = null;
            for (v = 0; u; ) {
              v++;
              var g = u;
              for (c = l = 0; c < p && (l++, g = g.nextZ, g); c++)
                ;
              for (f = p; 0 < l || 0 < f && g; )
                l !== 0 && (f === 0 || !g || u.z <= g.z) ? (c = u, u = u.nextZ, l--) : (c = g, g = g.nextZ, f--), d ? d.nextZ = c : o = c, c.prevZ = d, d = c;
              u = g;
            }
            d.nextZ = null, p *= 2;
          } while (1 < v);
        }
        for (o = r; r.prev !== r.next; ) {
          if (u = r.prev, g = r.next, n)
            d = Hf(r, e, a, n);
          else
            t:
              if (d = r, v = d.prev, l = d, p = d.next, 0 <= se(v, l, p))
                d = !1;
              else {
                for (c = d.next.next; c !== d.prev; ) {
                  if (ri(v.x, v.y, l.x, l.y, p.x, p.y, c.x, c.y) && 0 <= se(c.prev, c, c.next)) {
                    d = !1;
                    break t;
                  }
                  c = c.next;
                }
                d = !0;
              }
          if (d)
            i.push(u.i / t), i.push(r.i / t), i.push(g.i / t), Oi(r), o = r = g.next;
          else if (r = g, r === o) {
            if (!s)
              cr(we(r), i, t, e, a, n, 1);
            else if (s === 1) {
              r = we(r), s = i, o = t, u = r;
              do
                g = u.prev, d = u.next.next, !_n(g, d) && fs(g, u, u.next, d) && Ri(g, d) && Ri(d, g) && (s.push(g.i / o), s.push(u.i / o), s.push(d.i / o), Oi(u), Oi(u.next), u = r = d), u = u.next;
              while (u !== r);
              r = we(u), cr(r, i, t, e, a, n, 2);
            } else if (s === 2)
              t: {
                s = r;
                do {
                  for (o = s.next.next; o !== s.prev; ) {
                    if (u = s.i !== o.i) {
                      if (u = s, g = o, d = u.next.i !== g.i && u.prev.i !== g.i) {
                        e: {
                          d = u;
                          do {
                            if (d.i !== u.i && d.next.i !== u.i && d.i !== g.i && d.next.i !== g.i && fs(d, d.next, u, g)) {
                              d = !0;
                              break e;
                            }
                            d = d.next;
                          } while (d !== u);
                          d = !1;
                        }
                        d = !d;
                      }
                      if (d) {
                        if (d = Ri(u, g) && Ri(g, u)) {
                          d = u, v = !1, l = (u.x + g.x) / 2, p = (u.y + g.y) / 2;
                          do
                            d.y > p != d.next.y > p && d.next.y !== d.y && l < (d.next.x - d.x) * (p - d.y) / (d.next.y - d.y) + d.x && (v = !v), d = d.next;
                          while (d !== u);
                          d = v;
                        }
                        d = d && (se(u.prev, u, g.prev) || se(u, g.prev, g)) || _n(u, g) && 0 < se(u.prev, u, u.next) && 0 < se(g.prev, g, g.next);
                      }
                      u = d;
                    }
                    if (u) {
                      r = hs(s, o), s = we(s, s.next), r = we(r, r.next), cr(s, i, t, e, a, n), cr(r, i, t, e, a, n);
                      break t;
                    }
                    o = o.next;
                  }
                  s = s.next;
                } while (s !== r);
              }
            break;
          }
        }
      }
    }
    function Hf(r, i, t, e) {
      var a = r.prev, n = r.next;
      if (0 <= se(a, r, n))
        return !1;
      var s = a.x > r.x ? a.x > n.x ? a.x : n.x : r.x > n.x ? r.x : n.x, o = a.y > r.y ? a.y > n.y ? a.y : n.y : r.y > n.y ? r.y : n.y, u = xo(a.x < r.x ? a.x < n.x ? a.x : n.x : r.x < n.x ? r.x : n.x, a.y < r.y ? a.y < n.y ? a.y : n.y : r.y < n.y ? r.y : n.y, i, t, e);
      for (i = xo(s, o, i, t, e), t = r.prevZ, e = r.nextZ; t && t.z >= u && e && e.z <= i; ) {
        if (t !== r.prev && t !== r.next && ri(a.x, a.y, r.x, r.y, n.x, n.y, t.x, t.y) && 0 <= se(t.prev, t, t.next) || (t = t.prevZ, e !== r.prev && e !== r.next && ri(a.x, a.y, r.x, r.y, n.x, n.y, e.x, e.y) && 0 <= se(e.prev, e, e.next)))
          return !1;
        e = e.nextZ;
      }
      for (; t && t.z >= u; ) {
        if (t !== r.prev && t !== r.next && ri(a.x, a.y, r.x, r.y, n.x, n.y, t.x, t.y) && 0 <= se(t.prev, t, t.next))
          return !1;
        t = t.prevZ;
      }
      for (; e && e.z <= i; ) {
        if (e !== r.prev && e !== r.next && ri(a.x, a.y, r.x, r.y, n.x, n.y, e.x, e.y) && 0 <= se(e.prev, e, e.next))
          return !1;
        e = e.nextZ;
      }
      return !0;
    }
    function Gf(r, i) {
      return r.x - i.x;
    }
    function jf(r, i) {
      var t = i, e = r.x, a = r.y, n = -1 / 0;
      do {
        if (a <= t.y && a >= t.next.y && t.next.y !== t.y) {
          var s = t.x + (a - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
          if (s <= e && s > n) {
            if (n = s, s === e) {
              if (a === t.y)
                return t;
              if (a === t.next.y)
                return t.next;
            }
            var o = t.x < t.next.x ? t : t.next;
          }
        }
        t = t.next;
      } while (t !== i);
      if (!o)
        return null;
      if (e === n)
        return o;
      i = o, s = o.x;
      var u = o.y, c = 1 / 0;
      t = o;
      do {
        if (e >= t.x && t.x >= s && e !== t.x && ri(a < u ? e : n, a, s, u, a < u ? n : e, a, t.x, t.y)) {
          var v = Math.abs(a - t.y) / (e - t.x), l;
          if ((l = Ri(t, r)) && !(l = v < c) && (l = v === c) && !(l = t.x > o.x) && (l = t.x === o.x)) {
            l = o;
            var f = t;
            l = 0 > se(l.prev, l, f.prev) && 0 > se(f.next, l, l.next);
          }
          l && (o = t, c = v);
        }
        t = t.next;
      } while (t !== i);
      return o;
    }
    function xo(r, i, t, e, a) {
      return r = 32767 * (r - t) * a, i = 32767 * (i - e) * a, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, i = (i | i << 8) & 16711935, i = (i | i << 4) & 252645135, i = (i | i << 2) & 858993459, (r | r << 1) & 1431655765 | ((i | i << 1) & 1431655765) << 1;
    }
    function Wf(r) {
      var i = r, t = r;
      do
        (i.x < t.x || i.x === t.x && i.y < t.y) && (t = i), i = i.next;
      while (i !== r);
      return t;
    }
    function ri(r, i, t, e, a, n, s, o) {
      return 0 <= (a - s) * (i - o) - (r - s) * (n - o) && 0 <= (r - s) * (e - o) - (t - s) * (i - o) && 0 <= (t - s) * (n - o) - (a - s) * (e - o);
    }
    function se(r, i, t) {
      return (i.y - r.y) * (t.x - i.x) - (i.x - r.x) * (t.y - i.y);
    }
    function _n(r, i) {
      return r.x === i.x && r.y === i.y;
    }
    function fs(r, i, t, e) {
      var a = wn(se(r, i, t)), n = wn(se(r, i, e)), s = wn(se(t, e, r)), o = wn(se(t, e, i));
      return !!(a !== n && s !== o || a === 0 && An(r, t, i) || n === 0 && An(r, e, i) || s === 0 && An(t, r, e) || o === 0 && An(t, i, e));
    }
    function An(r, i, t) {
      return i.x <= Math.max(r.x, t.x) && i.x >= Math.min(r.x, t.x) && i.y <= Math.max(r.y, t.y) && i.y >= Math.min(r.y, t.y);
    }
    function wn(r) {
      return 0 < r ? 1 : 0 > r ? -1 : 0;
    }
    function Ri(r, i) {
      return 0 > se(r.prev, r, r.next) ? 0 <= se(r, i, r.next) && 0 <= se(r, r.prev, i) : 0 > se(r, i, r.prev) || 0 > se(r, r.next, i);
    }
    function hs(r, i) {
      var t = new _o(r.i, r.x, r.y), e = new _o(i.i, i.x, i.y), a = r.next, n = i.prev;
      return r.next = i, i.prev = r, t.next = a, a.prev = t, e.next = t, t.prev = e, n.next = e, e.prev = n, e;
    }
    function cs(r, i, t, e) {
      return r = new _o(r, i, t), e ? (r.next = e.next, r.prev = e, e.next.prev = r, e.next = r) : (r.prev = r, r.next = r), r;
    }
    function Oi(r) {
      r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
    }
    function _o(r, i, t) {
      this.i = r, this.x = i, this.y = t, this.nextZ = this.prevZ = this.z = this.next = this.prev = null, this.steiner = !1;
    }
    function Ao(r, i, t, e) {
      for (var a = 0, n = t - e; i < t; i += e)
        a += (r[n] - r[i]) * (r[i + 1] + r[n + 1]), n = i;
      return a;
    }
    function ds(r) {
      try {
        return Kn.createObjectURL(new Blob([r], { type: "application/javascript" }));
      } catch {
        var i = new vd();
        return i.append(r), Kn.createObjectURL(i.getBlob(type));
      }
    }
    function Hr(r, i) {
      this.shapeLayer = r, this.gl = i, this.initData();
    }
    function ps(r, i, t, e) {
      var a = [];
      return e = e * Math.PI / 180, a[0] = (r - t[0]) * Math.cos(e) - (i - t[1]) * Math.sin(e) + t[0], a[1] = (r - t[0]) * Math.sin(e) + (i - t[1]) * Math.cos(e) + t[1], a;
    }
    function Er(r) {
      var i = 0, t = 0, e = !0, a = !1, n = void 0;
      try {
        for (var s = si(r), o; !(e = (o = s.next()).done); e = !0) {
          var u = o.value;
          i += u.w * u.h, t = Math.max(t, u.w);
        }
      } catch (g) {
        a = !0, n = g;
      } finally {
        try {
          !e && s.return && s.return();
        } finally {
          if (a)
            throw n;
        }
      }
      r.sort(function(g, A) {
        return A.h - g.h;
      }), t = [{ x: 0, y: 0, w: Math.max(Math.ceil(Math.sqrt(i / 0.95)), t), h: 1 / 0 }], a = e = 0, n = !0, s = !1, o = void 0;
      try {
        for (var c = si(r), v; !(n = (v = c.next()).done); n = !0)
          for (var l = v.value, f = t.length - 1; 0 <= f; f--) {
            var p = t[f];
            if (!(l.w > p.w || l.h > p.h)) {
              if (l.x = p.x, l.y = p.y, a = Math.max(a, l.y + l.h), e = Math.max(e, l.x + l.w), l.w === p.w && l.h === p.h) {
                var d = t.pop();
                f < t.length && (t[f] = d);
              } else
                l.h === p.h ? (p.x += l.w, p.w -= l.w) : (l.w !== p.w && t.push({ x: p.x + l.w, y: p.y, w: p.w - l.w, h: l.h }), p.y += l.h, p.h -= l.h);
              break;
            }
          }
      } catch (g) {
        s = !0, o = g;
      } finally {
        try {
          !n && c.return && c.return();
        } finally {
          if (s)
            throw o;
        }
      }
      return { w: e, h: a, fill: i / (e * a) || 0 };
    }
    function We(r, i) {
      var t = [];
      return r.forEach(function(e) {
        t.push(i ? -e : e, e);
      }), t;
    }
    function vs(r) {
      for (var i = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 0, t = [], e = 0; e < r - 1; e++) {
        var a = 2 * (e + i);
        t.push(a, a + 1, a + 2), t.push(a + 2, a + 1, a + 3);
      }
      return t;
    }
    function Tn(r) {
      return function(i, t, e) {
        return i = t + r, t = e.length - 1, e[0 < t ? 0 > i ? 0 : i > t ? t : i : i < t ? t : 0 < i ? 0 : i];
      };
    }
    function ir(r) {
      if (!r[0] || !r[0].length)
        return r;
      for (var i = r[0].length, t = [], e = 0, a = 0; a < r.length; a++)
        for (var n = 0; n < i; n++)
          t[e++] = r[a][n];
      return t;
    }
    function gs() {
      for (var r = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : [], i = [], t = 0, e = 0; e < r.length; e++) {
        var a = r[e];
        if (0 < e) {
          var n = r[e - 1];
          t += Math.sqrt(Math.pow(a[0] - n[0], 2) + Math.pow(a[1] - n[1], 2));
        }
        i.push(t);
      }
      return { arr: i, total: t };
    }
    function ms() {
      var r = document.createElement("canvas");
      r.width = r.height = 32;
      var i = r.getContext("2d");
      return { canvas: r, ctx: i };
    }
    function ys() {
      var r = (0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}).color, i = ms(), t = i.canvas;
      return i = i.ctx, i.save(), i.moveTo(0, 0), i.lineTo(20, 0), i.lineTo(32, 16), i.lineTo(20, 32), i.lineTo(0, 32), i.lineTo(10, 16), i.fillStyle = r || "#fff", i.fill(), i.restore(), t;
    }
    function En(r, i) {
      return It.set(r, -i[1], i[0]);
    }
    function xs(r, i, t) {
      return It.sub(r, i, t), It.normalize(r, r), r;
    }
    function Xf(r) {
      var i, t;
      this.promise = new r(function(e, a) {
        if (i !== void 0 || t !== void 0)
          throw TypeError("Bad Promise constructor");
        i = e, t = a;
      }), this.resolve = jr(i), this.reject = jr(t);
    }
    function Vf(r, i, t) {
      return t = Math.PI / 180 * (60 * t + 30), [r.x + i * Math.cos(t), r.y + i * Math.sin(t)];
    }
    function Yf(r, i, t) {
      for (var e = {}, a = [], n = r.length, s = i / 2 / Math.sin(Math.PI / 3), o = 1.5 * s, u = 1, c = 0; c < n; ++c) {
        var v = r[c].geometry.coordinates;
        t && (v = t(v));
        var l = +v[0], f = +v[1];
        if (!isNaN(l) && !isNaN(f)) {
          v = Math.round(f /= o);
          var p = Math.round(l = l / i - (v & 1) / 2), d = f - v;
          if (1 < 3 * Math.abs(d)) {
            var g = l - p, A = p + (l < p ? -1 : 1) / 2, _ = v + (f < v ? -1 : 1);
            l -= A, f -= _, g * g + d * d > l * l + f * f && (p = A + (v & 1 ? 1 : -1) / 2, v = _);
          }
          d = p + "-" + v, (g = e[d]) ? (g.count += r[c].count || 1, u = Math.max(u, g.count)) : (e[d] = { center: { x: (p + (v & 1) / 2) * i, y: v * o }, count: r[c].count || 1 }, a.push(e[d]));
        }
      }
      return a.max = u, a.r = s, a;
    }
    function Zf(r, i, t, e) {
      switch (e) {
        case 5122:
          return new Int16Array(r, i, t);
        case 5123:
          return new Uint16Array(r, i, t);
        case 5124:
          return new Int32Array(r, i, t);
        case 5125:
          return new Uint32Array(r, i, t);
        case 5126:
          return new Float32Array(r, i, t);
        default:
          return null;
      }
    }
    function Mn(r) {
      return Zf(r.bufferView.data, r.byteOffset, r.count * Ra[r.type], r.componentType);
    }
    function Jf(r) {
      var i = "", t = r.lastIndexOf("/");
      return t !== -1 && (i = r.substring(0, t + 1)), i;
    }
    function Qf(r, i) {
      var t = new XMLHttpRequest();
      t.overrideMimeType("application/json"), t.open("GET", r, !0), t.onreadystatechange = function() {
        t.readyState == 4 && t.status == "200" && i(t.responseText, this);
      }, t.send(null);
    }
    function Kf(r, i) {
      var t = new XMLHttpRequest();
      t.responseType = "arraybuffer", t.open("GET", r, !0), t.onreadystatechange = function() {
        if (t.readyState == 4 && t.status == "200") {
          var e = t.response;
          e && i && i(e);
        }
      }, t.send(null);
    }
    function qf(r, i, t) {
      var e = new Image();
      e.crossOrigin = "Anonymous", e.src = r, e.onload = function() {
        t(e, i);
      };
    }
    function $f(r) {
      function i(K, ut) {
        t.uniform1i(K, ut.index), t.activeTexture(t.TEXTURE0 + ut.index), K = F.glTF.textures[ut.index], t.bindTexture(t.TEXTURE_2D, K.texture), t.bindSampler(ut.index, K.sampler ? K.sampler.sampler : s);
      }
      var t = r.gl, e = 0, a = [];
      r = t.canvas;
      var n = function(K, ut, St) {
        for (this.glTFScene = K, this.glTF = ut, this.id = St, this.rootTransform = pt.create(), this.nodeMatrix = Array(ut.nodes.length), K = 0, ut = this.nodeMatrix.length; K < ut; K++)
          this.nodeMatrix[K] = pt.create();
      }, s = t.createSampler();
      t.samplerParameteri(s, t.TEXTURE_MIN_FILTER, t.NEAREST_MIPMAP_LINEAR), t.samplerParameteri(s, t.TEXTURE_MAG_FILTER, t.LINEAR), t.samplerParameteri(
        s,
        t.TEXTURE_WRAP_S,
        t.REPEAT
      ), t.samplerParameteri(s, t.TEXTURE_WRAP_T, t.REPEAT), t.bindVertexArray(null), t.bindVertexArray(null);
      var o = { HAS_SKIN: 1, SKIN_VEC8: 2, HAS_BASECOLORMAP: 4, HAS_NORMALMAP: 8, HAS_METALROUGHNESSMAP: 16, HAS_OCCLUSIONMAP: 32, HAS_EMISSIVEMAP: 64 }, u = {}, c = function() {
        this.flags = 0, this.programObject = null;
      };
      c.prototype.hasSkin = function() {
        return this.flags & o.HAS_SKIN;
      }, c.prototype.hasBaseColorMap = function() {
        return this.flags & o.HAS_BASECOLORMAP;
      }, c.prototype.hasNormalMap = function() {
        return this.flags & o.HAS_NORMALMAP;
      }, c.prototype.hasMetalRoughnessMap = function() {
        return this.flags & o.HAS_METALROUGHNESSMAP;
      }, c.prototype.hasOcclusionMap = function() {
        return this.flags & o.HAS_OCCLUSIONMAP;
      }, c.prototype.hasEmissiveMap = function() {
        return this.flags & o.HAS_EMISSIVEMAP;
      }, c.prototype.defineMacro = function(K) {
        o[K] !== void 0 && (this.flags |= o[K]);
      }, c.prototype.compile = function() {
        var K = u[this.flags];
        if (K)
          this.programObject = K;
        else {
          var ut = K = "";
          this.flags & o.HAS_SKIN && (K += `#define HAS_SKIN
`), this.flags & o.SKIN_VEC8 && (K += `#define SKIN_VEC8
`), this.flags & o.HAS_BASECOLORMAP && (ut += `#define HAS_BASECOLORMAP
`), this.flags & o.HAS_NORMALMAP && (ut += `#define HAS_NORMALMAP
`), this.flags & o.HAS_METALROUGHNESSMAP && (ut += `#define HAS_METALROUGHNESSMAP
`), this.flags & o.HAS_OCCLUSIONMAP && (ut += `#define HAS_OCCLUSIONMAP
`), this.flags & o.HAS_EMISSIVEMAP && (ut += `#define HAS_EMISSIVEMAP
`), K = xi.createProgram(
            t,
            `#version 300 es
` + K + `#define POSITION_LOCATION 0
#define NORMAL_LOCATION 1
#define TEXCOORD_0_LOCATION 2
#define JOINTS_0_LOCATION 3
#define JOINTS_1_LOCATION 5
#define WEIGHTS_0_LOCATION 4
#define WEIGHTS_1_LOCATION 6
#define TANGENT_LOCATION 7
precision highp float;precision highp int;uniform mat4 u_MVP;uniform mat4 u_MV;uniform mat4 u_MVNormal;
#ifdef HAS_SKIN
uniform JointMatrix{mat4 matrix[65];}u_jointMatrix;
#endif
layout(location=POSITION_LOCATION)in vec3 position;layout(location=NORMAL_LOCATION)in vec3 normal;layout(location=TEXCOORD_0_LOCATION)in vec2 uv;
#ifdef HAS_SKIN
layout(location=JOINTS_0_LOCATION)in vec4 joint0;layout(location=WEIGHTS_0_LOCATION)in vec4 weight0;
#ifdef SKIN_VEC8
layout(location=JOINTS_1_LOCATION)in vec4 joint1;layout(location=WEIGHTS_1_LOCATION)in vec4 weight1;
#endif
#endif
out vec3 v_position;out vec3 v_normal;out vec2 v_uv;void main(){
#ifdef HAS_SKIN
mat4 skinMatrix=weight0.x*u_jointMatrix.matrix[int(joint0.x)]+weight0.y*u_jointMatrix.matrix[int(joint0.y)]+weight0.z*u_jointMatrix.matrix[int(joint0.z)]+weight0.w*u_jointMatrix.matrix[int(joint0.w)];
#ifdef SKIN_VEC8
skinMatrix+=weight1.x*u_jointMatrix.matrix[int(joint1.x)]+weight1.y*u_jointMatrix.matrix[int(joint1.y)]+weight1.z*u_jointMatrix.matrix[int(joint1.z)]+weight1.w*u_jointMatrix.matrix[int(joint1.w)];
#endif
#endif
v_uv=uv;
#ifdef HAS_SKIN
v_normal=normalize((u_MVNormal*transpose(inverse(skinMatrix))*vec4(normal,0)).xyz);vec4 pos=u_MV*skinMatrix*vec4(position,1.0);gl_Position=u_MVP*skinMatrix*vec4(position,1.0);
#else
v_normal=normalize((u_MVNormal*vec4(normal,0)).xyz);vec4 pos=u_MV*vec4(position,1.0);gl_Position=u_MVP*vec4(position,1.0);
#endif
v_position=vec3(pos.xyz)/pos.w;}`,
            `#version 300 es
` + ut + `#define FRAG_COLOR_LOCATION 0
precision highp float;precision highp int;uniform sampler2D u_brdfLUT;uniform vec4 u_baseColorFactor;
#ifdef HAS_BASECOLORMAP
uniform sampler2D u_baseColorTexture;
#endif
#ifdef HAS_NORMALMAP
uniform sampler2D u_normalTexture;uniform float u_normalTextureScale;
#endif
#ifdef HAS_EMISSIVEMAP
uniform sampler2D u_emissiveTexture;uniform vec3 u_emissiveFactor;
#endif
#ifdef HAS_METALROUGHNESSMAP
uniform sampler2D u_metallicRoughnessTexture;
#endif
uniform float u_metallicFactor;uniform float u_roughnessFactor;
#ifdef HAS_OCCLUSIONMAP
uniform sampler2D u_occlusionTexture;uniform float u_occlusionStrength;
#endif
in vec3 v_position;in vec3 v_normal;in vec2 v_uv;layout(location=FRAG_COLOR_LOCATION)out vec4 frag_color;struct PBRInfo{float NdotL;float NdotV;float NdotH;float LdotH;float VdotH;float perceptualRoughness;float metalness;vec3 reflectance0;vec3 reflectance90;float alphaRoughness;vec3 diffuseColor;vec3 specularColor;};const float M_PI=3.141592653589793;const float c_MinRoughness=0.04;vec3 getNormal(){vec3 pos_dx=dFdx(v_position);vec3 pos_dy=dFdy(v_position);vec3 tex_dx=dFdx(vec3(v_uv,0.0));vec3 tex_dy=dFdy(vec3(v_uv,0.0));vec3 t=(tex_dy.t*pos_dx-tex_dx.t*pos_dy)/(tex_dx.s*tex_dy.t-tex_dy.s*tex_dx.t);vec3 ng=v_normal;t=normalize(t-ng*dot(ng,t));vec3 b=normalize(cross(ng,t));mat3 tbn=mat3(t,b,ng);
#ifdef HAS_NORMALMAP
vec3 n=texture(u_normalTexture,v_uv).rgb;n=normalize(tbn*((2.0*n-1.0)*vec3(u_normalTextureScale,u_normalTextureScale,1.0)));
#else
vec3 n=tbn[2].xyz;
#endif
return n;}vec3 getIBLContribution(PBRInfo pbrInputs,vec3 n,vec3 reflection){float mipCount=10.0;float lod=(pbrInputs.perceptualRoughness*mipCount);vec3 brdf=texture(u_brdfLUT,vec2(pbrInputs.NdotV,1.0-pbrInputs.perceptualRoughness)).rgb;vec3 diffuseLight=vec3(0.6,0.6,0.6);vec3 specularLight=vec3(0.6,0.6,0.6);vec3 diffuse=diffuseLight*pbrInputs.diffuseColor;vec3 specular=specularLight*(pbrInputs.specularColor*brdf.x+brdf.y);return diffuse+specular;}vec3 diffuse(PBRInfo pbrInputs){return pbrInputs.diffuseColor/M_PI;}vec3 specularReflection(PBRInfo pbrInputs){return pbrInputs.reflectance0+(pbrInputs.reflectance90-pbrInputs.reflectance0)*pow(clamp(1.0-pbrInputs.VdotH,0.0,1.0),5.0);}float geometricOcclusion(PBRInfo pbrInputs){float NdotL=pbrInputs.NdotL;float NdotV=pbrInputs.NdotV;float r=pbrInputs.alphaRoughness;float attenuationL=2.0*NdotL/(NdotL+sqrt(r*r+(1.0-r*r)*(NdotL*NdotL)));float attenuationV=2.0*NdotV/(NdotV+sqrt(r*r+(1.0-r*r)*(NdotV*NdotV)));return attenuationL*attenuationV;}float microfacetDistribution(PBRInfo pbrInputs){float roughnessSq=pbrInputs.alphaRoughness*pbrInputs.alphaRoughness;float f=(pbrInputs.NdotH*roughnessSq-pbrInputs.NdotH)*pbrInputs.NdotH+1.0;return roughnessSq/(M_PI*f*f);}void main(){float perceptualRoughness=u_roughnessFactor;float metallic=u_metallicFactor;
#ifdef HAS_METALROUGHNESSMAP
vec4 mrSample=texture(u_metallicRoughnessTexture,v_uv);perceptualRoughness=mrSample.g*perceptualRoughness;metallic=mrSample.b*metallic;
#endif
perceptualRoughness=clamp(perceptualRoughness,c_MinRoughness,1.0);metallic=clamp(metallic,0.0,1.0);float alphaRoughness=perceptualRoughness*perceptualRoughness;
#ifdef HAS_BASECOLORMAP
vec4 baseColor=texture(u_baseColorTexture,v_uv)*u_baseColorFactor;
#else
vec4 baseColor=u_baseColorFactor;
#endif
vec3 f0=vec3(0.04);vec3 diffuseColor=baseColor.rgb*(vec3(1.0)-f0);diffuseColor*=1.0-metallic;vec3 specularColor=mix(f0,baseColor.rgb,metallic);float reflectance=max(max(specularColor.r,specularColor.g),specularColor.b);float reflectance90=clamp(reflectance*25.0,0.0,1.0);vec3 specularEnvironmentR0=specularColor.rgb;vec3 specularEnvironmentR90=vec3(1.0,1.0,1.0)*reflectance90;vec3 n=getNormal();vec3 v=normalize(-v_position);vec3 l=normalize(vec3(1.0,1.0,1.0));vec3 h=normalize(l+v);vec3 reflection=-normalize(reflect(v,n));float NdotL=clamp(dot(n,l),0.001,1.0);float NdotV=abs(dot(n,v))+0.001;float NdotH=clamp(dot(n,h),0.0,1.0);float LdotH=clamp(dot(l,h),0.0,1.0);float VdotH=clamp(dot(v,h),0.0,1.0);PBRInfo pbrInputs=PBRInfo(NdotL,NdotV,NdotH,LdotH,VdotH,perceptualRoughness,metallic,specularEnvironmentR0,specularEnvironmentR90,alphaRoughness,diffuseColor,specularColor);vec3 F=specularReflection(pbrInputs);float G=geometricOcclusion(pbrInputs);float D=microfacetDistribution(pbrInputs);vec3 diffuseContrib=(1.0-F)*diffuse(pbrInputs);vec3 specContrib=max(vec3(0.0),F*G*D/(4.0*NdotL*NdotV));vec3 color=NdotL*(diffuseContrib+specContrib);color+=getIBLContribution(pbrInputs,n,reflection);
#ifdef HAS_OCCLUSIONMAP
float ao=texture(u_occlusionTexture,v_uv).r;color=mix(color,color*ao,u_occlusionStrength);
#endif
#ifdef HAS_EMISSIVEMAP
vec3 emissive=texture(u_emissiveTexture,v_uv).rgb*u_emissiveFactor;color+=emissive;
#endif
frag_color=vec4(color,baseColor.a);}`
          ), this.programObject = { program: K, uniformLocations: {}, uniformBlockIndices: {} }, this.flags & o.HAS_SKIN && (this.programObject.uniformBlockIndices.JointMatrix = t.getUniformBlockIndex(K, "JointMatrix")), ut = this.programObject.uniformLocations, ut.MVP = t.getUniformLocation(K, "u_MVP"), ut.MVNormal = t.getUniformLocation(K, "u_MVNormal"), ut.MV = t.getUniformLocation(K, "u_MV"), ut.baseColorFactor = t.getUniformLocation(K, "u_baseColorFactor"), ut.metallicFactor = t.getUniformLocation(K, "u_metallicFactor"), ut.roughnessFactor = t.getUniformLocation(
            K,
            "u_roughnessFactor"
          ), this.flags & o.HAS_BASECOLORMAP && (ut.baseColorTexture = t.getUniformLocation(K, "u_baseColorTexture")), this.flags & o.HAS_NORMALMAP && (ut.normalTexture = t.getUniformLocation(K, "u_normalTexture"), ut.normalTextureScale = t.getUniformLocation(K, "u_normalTextureScale")), this.flags & o.HAS_METALROUGHNESSMAP && (ut.metallicRoughnessTexture = t.getUniformLocation(K, "u_metallicRoughnessTexture")), this.flags & o.HAS_OCCLUSIONMAP && (ut.occlusionTexture = t.getUniformLocation(K, "u_occlusionTexture"), ut.occlusionStrength = t.getUniformLocation(K, "u_occlusionStrength")), this.flags & o.HAS_EMISSIVEMAP && (ut.emissiveTexture = t.getUniformLocation(K, "u_emissiveTexture"), ut.emissiveFactor = t.getUniformLocation(K, "u_emissiveFactor")), t.useProgram(null), u[this.flags] = this.programObject;
        }
      };
      var v = 1, l = Mt.create(), f = pt.create();
      Qn.create();
      var p = [];
      t.enable(t.CULL_FACE), t.cullFace(t.BACK), t.frontFace(t.CCW);
      var d = !0;
      t.enable(t.DEPTH_TEST), t.depthFunc(t.LEQUAL);
      var g = g || {}, A = null;
      Mt.create();
      var _ = pt.create();
      pt.perspective(
        _,
        0.785,
        r.width / r.height,
        0.01,
        100
      ), pt.create();
      var M = pt.create(), P = pt.create(), R = pt.create();
      pt.create();
      var B, F, I = [1, 1, 1, 1], U = g.drawPrimitive = function(K, ut) {
        if (Tt) {
          P = M = Tt.matrix, pt.invert(R, M), pt.transpose(R, R), ut = I;
          var St = K.shader, Ct = K.material;
          if (Ct !== null) {
            var lt = Ct.pbrMetallicRoughness;
            ut = lt.baseColorFactor, K.material.doubleSided === d && ((d = !K.material.doubleSided) ? t.enable(t.CULL_FACE) : t.disable(t.CULL_FACE));
          }
          A != K.shader.programObject && (A = K.shader.programObject, t.useProgram(A.program)), Ct && (St.hasBaseColorMap() && i(
            A.uniformLocations.baseColorTexture,
            lt.baseColorTexture
          ), St.hasNormalMap() && (i(A.uniformLocations.normalTexture, Ct.normalTexture), t.uniform1f(A.uniformLocations.normalTextureScale, Ct.normalTexture.scale)), St.hasMetalRoughnessMap() && i(A.uniformLocations.metallicRoughnessTexture, lt.metallicRoughnessTexture), t.uniform1f(A.uniformLocations.metallicFactor, lt.metallicFactor), t.uniform1f(A.uniformLocations.roughnessFactor, lt.roughnessFactor), St.hasOcclusionMap() && (i(A.uniformLocations.occlusionTexture, Ct.occlusionTexture), t.uniform1f(
            A.uniformLocations.occlusionStrength,
            Ct.occlusionTexture.strength
          )), St.hasEmissiveMap() && (i(A.uniformLocations.emissiveTexture, Ct.emissiveTexture), t.uniform3fv(A.uniformLocations.emissiveFactor, Ct.emissiveFactor))), St.hasSkin() && t.uniformBlockBinding(A.program, A.uniformBlockIndices.JointMatrix, B), t.activeTexture(t.TEXTURE0 + 29), t.bindTexture(t.TEXTURE_2D, null), t.uniform4fv(A.uniformLocations.baseColorFactor, ut), t.uniformMatrix4fv(A.uniformLocations.MV, !1, M), t.uniformMatrix4fv(A.uniformLocations.MVP, !1, P), t.uniformMatrix4fv(
            A.uniformLocations.MVNormal,
            !1,
            R
          ), t.bindVertexArray(K.vertexArray), K.indices !== null ? t.drawElements(K.mode, K.indicesLength, K.indicesComponentType, K.indicesOffset) : t.drawArrays(K.mode, K.drawArraysOffset, K.drawArraysCount), t.bindVertexArray(null);
        }
      }, G = pt.create(), Z = pt.create(), Q = g.drawNode = function(K, ut, St, Ct) {
        if (ut = St[ut], Ct !== void 0 ? pt.mul(ut, Ct, K.matrix) : pt.copy(ut, K.matrix), K.skin !== null) {
          var lt = K.skin;
          B = lt.uniformBlockID;
          var Ze = K.skin.joints;
          for (pt.invert(Z, ut), Ct = 0, re = Ze.length; Ct < re; Ct++) {
            var ee = Ze[Ct];
            pt.mul(G, St[ee.nodeID], lt.inverseBindMatrix[Ct]), pt.mul(
              G,
              Z,
              G
            ), lt.jointMatrixUnidormBufferData.set(G, 16 * Ct);
          }
          t.bindBuffer(t.UNIFORM_BUFFER, lt.jointMatrixUniformBuffer), t.bufferSubData(t.UNIFORM_BUFFER, 0, lt.jointMatrixUnidormBufferData, 0, lt.jointMatrixUnidormBufferData.length);
        }
        var re;
        if (K.mesh !== null)
          for (lt = K.mesh, Ct = 0, re = lt.primitives.length; Ct < re; Ct++)
            U(lt.primitives[Ct], ut);
        for (K.skin !== null && t.bindBuffer(t.UNIFORM_BUFFER, null), Ct = 0, re = K.children.length; Ct < re; Ct++)
          Q(K.children[Ct], K.children[Ct].nodeID, St, ut);
      }, it = g.drawScene = function(K) {
        var ut = K.glTF;
        if (ut.animations) {
          var St = ut.animations[e], Ct, lt = 0;
          for (Ct = St.samplers.length; lt < Ct; lt++)
            St.samplers[lt].getValue(vt);
          for (lt = 0, Ct = St.channels.length; lt < Ct; lt++) {
            var Ze = St.channels[lt], ee = Ze.sampler, re = ut.nodes[Ze.target.nodeID];
            switch (Ze.target.path) {
              case "rotation":
                ue.copy(re.rotation, ee.curValue);
                break;
              case "translation":
                Mt.copy(re.translation, ee.curValue);
                break;
              case "scale":
                Mt.copy(re.scale, ee.curValue);
            }
            re.updateMatrixFromTRS();
          }
        }
        for (St = 0, ut = K.glTFScene.nodes.length; St < ut; St++)
          Q(K.glTFScene.nodes[St], K.glTFScene.nodes[St].nodeID, K.nodeMatrix, K.rootTransform);
      }, et = performance.now(), vt = 0, Tt;
      return { setupScene: function(K, ut) {
        function St(Ba, Fp) {
          if (Ba !== void 0) {
            var gn = Ba.bufferView;
            return gn.target === null ? (t.bindBuffer(t.ARRAY_BUFFER, gn.buffer), t.bufferData(t.ARRAY_BUFFER, gn.data, t.STATIC_DRAW)) : t.bindBuffer(gn.target, gn.buffer), Ba.prepareVertexAttrib(Fp, t), !0;
          }
          return !1;
        }
        var Ct;
        if (K.animations) {
          var lt = 0;
          for (Ct = K.animations.length; lt < Ct; lt++)
            a.add(K.animations[lt].name || lt);
        }
        e = 0, lt = K.scenes[K.defaultScene], Mt.fromValues(1.2 * lt.boundingBox.transform[0], 0, 0), Mt.create(), ut ? ut = p[ut.id] = new n(lt, K, ut.id) : (ut = new n(lt, K, p.length), p.push(ut)), p.length === 1 && (pt.identity(f), v = 1 / Math.max(lt.boundingBox.transform[0], Math.max(lt.boundingBox.transform[5], lt.boundingBox.transform[10])), pt.getTranslation(l, lt.boundingBox.transform), Mt.scale(l, l, -1), l[0] += -0.5 * lt.boundingBox.transform[0], l[1] += -0.5 * lt.boundingBox.transform[5], l[2] += -0.5 * lt.boundingBox.transform[10], v *= 0.5, f[0] = v, f[5] = v, f[10] = v, pt.translate(f, f, l), Mt.set(l, 0, 0, -1.5), v = 1);
        var Ze;
        for (lt = 0, Ct = K.bufferViews.length; lt < Ct; lt++) {
          var ee = K.bufferViews[lt];
          ee.createBuffer(t), ee.bindData(t);
        }
        if (K.textures)
          for (lt = 0, Ct = K.textures.length; lt < Ct; lt++) {
            var re = K.textures[lt];
            re.createTexture(t);
          }
        if (K.samplers)
          for (lt = 0, Ct = K.samplers.length; lt < Ct; lt++)
            re = K.samplers[lt], re.createSampler(t);
        if (K.skins)
          for (lt = 0, Ct = K.skins.length; lt < Ct; lt++)
            re = K.skins[lt], re.jointMatrixUniformBuffer = t.createBuffer(), t.bindBufferBase(t.UNIFORM_BUFFER, re.uniformBlockID, re.jointMatrixUniformBuffer), t.bindBuffer(t.UNIFORM_BUFFER, re.jointMatrixUniformBuffer), t.bufferData(t.UNIFORM_BUFFER, re.jointMatrixUnidormBufferData, t.DYNAMIC_DRAW), t.bufferSubData(
              t.UNIFORM_BUFFER,
              0,
              re.jointMatrixUnidormBufferData
            ), t.bindBuffer(t.UNIFORM_BUFFER, null);
        var Oa = 0;
        for (Ze = K.meshes.length; Oa < Ze; Oa++)
          for (re = K.meshes[Oa], lt = 0, Ct = re.primitives.length; lt < Ct; ++lt) {
            var ve = re.primitives[lt];
            ve.shader = new c(), ve.vertexArray = ee = t.createVertexArray(), t.bindVertexArray(ee), St(ve.attributes.POSITION, 0), St(ve.attributes.NORMAL, 1), St(ve.attributes.TEXCOORD_0, 2), St(ve.attributes.JOINTS_0, 3) && St(ve.attributes.WEIGHTS_0, 4) && ve.shader.defineMacro("HAS_SKIN"), St(ve.attributes.JOINTS_1, 5) && St(ve.attributes.WEIGHTS_1, 6) && ve.shader.defineMacro("SKIN_VEC8"), ve.indices !== null && (ee = K.accessors[ve.indices], ee = ee.bufferView, ee.target === null ? (t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, ee.buffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, ee.data, t.STATIC_DRAW)) : t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, ee.buffer)), t.bindVertexArray(null), t.bindBuffer(t.ARRAY_BUFFER, null), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null), (ee = ve.material) && (ee.pbrMetallicRoughness.baseColorTexture && ve.shader.defineMacro("HAS_BASECOLORMAP"), ee.pbrMetallicRoughness.metallicRoughnessTexture && ve.shader.defineMacro("HAS_METALROUGHNESSMAP"), ee.normalTexture && ve.shader.defineMacro("HAS_NORMALMAP"), ee.occlusionTexture && ve.shader.defineMacro("HAS_OCCLUSIONMAP"), ee.emissiveTexture && ve.shader.defineMacro("HAS_EMISSIVEMAP")), ve.shader.compile();
          }
        return ut;
      }, render: g.render = function(K) {
        Tt = K, K = (/* @__PURE__ */ new Date()).getTime();
        var ut, St = 0;
        for (ut = p.length; St < ut; St++)
          F = p[St], it(p[St]);
        A = null, vt = 1e-3 * (K - et);
      } };
    }
    function th(r, i, t, e, a, n) {
      if (typeof i == "string" && typeof t == "number" && typeof e == "number")
        for (i = i.split(n), n = 0; n < i.length; n++)
          r.fillText(i[n], t, e), e += a;
    }
    function he(r) {
      this.options = r = r || {}, r.colors = r.colors || ["rgba(0,192,73,0.99609375)", "rgba(242,48,48,0.99609375)", "rgba(255,159,25,0.99609375)"];
      var i = r.colors;
      this.drawTogether = !0, this.parseColors(i), this.tileSize = 256, this.ratio = window.devicePixelRatio, this.cache = {}, r.getTileUrl && (this.getTileUrl = r.getTileUrl), this._loadCount = {};
    }
    function eh(r) {
      var i = r / 2, t = r + i, e = new mt(2 * t, 2 * t), a = e.getContext("2d");
      return a.shadowBlur = i, a.shadowColor = "black", a.shadowOffsetX = a.shadowOffsetY = 1e4, a.beginPath(), a.arc(t - 1e4, t - 1e4, r, 0, 2 * Math.PI, !0), a.closePath(), a.fill(), e;
    }
    var wo = window.BMapGL || window.BMap;
    wo && wo.Overlay && (C.prototype = new wo.Overlay()), C.prototype.initialize = function(r) {
      this._map = r;
      var i = this.canvas = document.createElement("canvas"), t = this.ctx = this.canvas.getContext("2d");
      i.style.cssText = "position:absolute;left:0;top:0;z-index:" + this.zIndex + ";", this.adjustSize(), this.adjustRatio(t), r.getContainer().appendChild(i);
      var e = this;
      return r.addEventListener("resize", function() {
        e.adjustSize(), e._draw();
      }), this.canvas;
    }, C.prototype.adjustSize = function() {
      var r = this._map.getSize(), i = this.canvas;
      i.width = r.width, i.height = r.height, i.style.width = i.width + "px", i.style.height = i.height + "px";
    }, C.prototype.adjustRatio = function(r) {
      var i = (window.devicePixelRatio || 1) / (r.backingStorePixelRatio || r.webkitBackingStorePixelRatio || r.mozBackingStorePixelRatio || r.msBackingStorePixelRatio || r.oBackingStorePixelRatio || r.backingStorePixelRatio || 1), t = r.canvas.width, e = r.canvas.height;
      r.canvas.width = t * i, r.canvas.height = e * i, r.canvas.style.width = t + "px", r.canvas.style.height = e + "px", r.scale(i, i);
    }, C.prototype.draw = function() {
      this._draw.apply(this, arguments);
    }, C.prototype._draw = function() {
      this.dispatchEvent("draw"), this.options.update && this.options.update.apply(this, arguments);
    }, C.prototype.getContainer = function() {
      return this.canvas;
    }, C.prototype.show = function() {
      this.canvas || this._map.addOverlay(this), this.canvas.style.display = "block";
    }, C.prototype.hide = function() {
      this.canvas.style.display = "none";
    }, C.prototype.setZIndex = function(r) {
      this.canvas.style.zIndex = r;
    }, C.prototype.getZIndex = function() {
      return this.zIndex;
    };
    var _s = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof Da < "u" ? Da : typeof self < "u" ? self : {}, rh = S(function(r, i) {
      i.__esModule = !0, i.default = function(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      };
    }), ft = L(rh), Mr = function(r) {
      if (r == null)
        throw TypeError("Can't call method on  " + r);
      return r;
    }, ih = {}.hasOwnProperty, te = function(r, i) {
      return ih.call(r, i);
    }, nh = {}.toString, Gr = function(r) {
      return nh.call(r).slice(
        8,
        -1
      );
    }, To = Object("z").propertyIsEnumerable(0) ? Object : function(r) {
      return Gr(r) == "String" ? r.split("") : Object(r);
    }, nr = function(r) {
      return To(Mr(r));
    }, oh = Math.ceil, ah = Math.floor, Eo = function(r) {
      return isNaN(r = +r) ? 0 : (0 < r ? ah : oh)(r);
    }, sh = Math.min, Pn = function(r) {
      return 0 < r ? sh(Eo(r), 9007199254740991) : 0;
    }, uh = Math.max, lh = Math.min, Jt = S(function(r) {
      r = r.exports = { version: "2.6.5" }, typeof __e == "number" && (__e = r);
    }), kt = S(function(r) {
      r = r.exports = typeof window < "u" && Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")(), typeof __g == "number" && (__g = r);
    }), Bi = S(function(r) {
      var i = kt["__core-js_shared__"] || (kt["__core-js_shared__"] = {});
      (r.exports = function(t, e) {
        return i[t] || (i[t] = e !== void 0 ? e : {});
      })("versions", []).push({ version: Jt.version, mode: "pure", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" });
    }), fh = 0, hh = Math.random(), Ln = function(r) {
      return "Symbol(".concat(r === void 0 ? "" : r, ")_", (++fh + hh).toString(36));
    }, As = Bi("keys"), Mo = function(r) {
      return As[r] || (As[r] = Ln(r));
    }, ch = function(r) {
      return function(i, t, e) {
        i = nr(i);
        var a = Pn(i.length);
        if (e = Eo(e), e = 0 > e ? uh(e + a, 0) : lh(e, a), r && t != t) {
          for (; a > e; )
            if (t = i[e++], t != t)
              return !0;
        } else
          for (; a > e; e++)
            if ((r || e in i) && i[e] === t)
              return r || e || 0;
        return !r && -1;
      };
    }(!1), dh = Mo("IE_PROTO"), ws = function(r, i) {
      r = nr(r);
      var t = 0, e = [], a;
      for (a in r)
        a != dh && te(r, a) && e.push(a);
      for (; i.length > t; )
        te(r, a = i[t++]) && (~ch(e, a) || e.push(a));
      return e;
    }, Cn = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), ii = Object.keys || function(r) {
      return ws(r, Cn);
    }, jr = function(r) {
      if (typeof r != "function")
        throw TypeError(r + " is not a function!");
      return r;
    }, ye = function(r, i, t) {
      if (jr(r), i === void 0)
        return r;
      switch (t) {
        case 1:
          return function(e) {
            return r.call(i, e);
          };
        case 2:
          return function(e, a) {
            return r.call(i, e, a);
          };
        case 3:
          return function(e, a, n) {
            return r.call(i, e, a, n);
          };
      }
      return function() {
        return r.apply(i, arguments);
      };
    }, Le = function(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }, Oe = function(r) {
      if (!Le(r))
        throw TypeError(r + " is not an object!");
      return r;
    }, Pr = function(r) {
      try {
        return !!r();
      } catch {
        return !0;
      }
    }, Xe = !Pr(function() {
      return Object.defineProperty({}, "a", { get: function() {
        return 7;
      } }).a != 7;
    }), ni = kt.document, Sn = Le(ni) && Le(ni.createElement), Ts = !Xe && !Pr(function() {
      return Object.defineProperty(Sn ? ni.createElement("div") : {}, "a", { get: function() {
        return 7;
      } }).a != 7;
    }), Di = function(r, i) {
      if (!Le(r))
        return r;
      var t, e;
      if (i && typeof (t = r.toString) == "function" && !Le(e = t.call(r)) || typeof (t = r.valueOf) == "function" && !Le(e = t.call(r)) || !i && typeof (t = r.toString) == "function" && !Le(e = t.call(r)))
        return e;
      throw TypeError("Can't convert object to primitive value");
    }, ph = Object.defineProperty, Ue = { f: Xe ? Object.defineProperty : function(r, i, t) {
      if (Oe(r), i = Di(i, !0), Oe(t), Ts)
        try {
          return ph(r, i, t);
        } catch {
        }
      if ("get" in t || "set" in t)
        throw TypeError("Accessors not supported!");
      return "value" in t && (r[i] = t.value), r;
    } }, Lr = function(r, i) {
      return { enumerable: !(r & 1), configurable: !(r & 2), writable: !(r & 4), value: i };
    }, dr = Xe ? function(r, i, t) {
      return Ue.f(r, i, Lr(1, t));
    } : function(r, i, t) {
      return r[i] = t, r;
    }, Ce = function(r, i, t) {
      var e = r & Ce.F, a = r & Ce.G, n = r & Ce.S, s = r & Ce.P, o = r & Ce.B, u = r & Ce.W, c = a ? Jt : Jt[i] || (Jt[i] = {}), v = c.prototype;
      n = a ? kt : n ? kt[i] : (kt[i] || {}).prototype;
      var l;
      a && (t = i);
      for (l in t)
        if (i = !e && n && n[l] !== void 0, !i || !te(c, l)) {
          var f = i ? n[l] : t[l];
          c[l] = a && typeof n[l] != "function" ? t[l] : o && i ? ye(f, kt) : u && n[l] == f ? function(p) {
            var d = function(g, A, _) {
              if (this instanceof p) {
                switch (arguments.length) {
                  case 0:
                    return new p();
                  case 1:
                    return new p(g);
                  case 2:
                    return new p(g, A);
                }
                return new p(g, A, _);
              }
              return p.apply(this, arguments);
            };
            return d.prototype = p.prototype, d;
          }(f) : s && typeof f == "function" ? ye(Function.call, f) : f, s && ((c.virtual || (c.virtual = {}))[l] = f, r & Ce.R && v && !v[l] && dr(v, l, f));
        }
    };
    Ce.F = 1, Ce.G = 2, Ce.S = 4, Ce.P = 8, Ce.B = 16, Ce.W = 32, Ce.U = 64, Ce.R = 128;
    var wt = Ce, Rn = function(r, i) {
      var t = (Jt.Object || {})[r] || Object[r], e = {};
      e[r] = i(t), wt(wt.S + wt.F * Pr(function() {
        t(1);
      }), "Object", e);
    };
    Rn("keys", function() {
      return function(r) {
        return ii(Object(Mr(r)));
      };
    });
    var vh = Jt.Object.keys, gh = S(function(r) {
      r.exports = { default: vh, __esModule: !0 };
    }), de = L(gh), Po = Object.getOwnPropertySymbols, On = {}.propertyIsEnumerable, Bn = Object.assign, mh = !Bn || Pr(function() {
      var r = {}, i = {}, t = Symbol();
      return r[t] = 7, "abcdefghijklmnopqrst".split("").forEach(function(e) {
        i[e] = e;
      }), Bn({}, r)[t] != 7 || Object.keys(Bn({}, i)).join("") != "abcdefghijklmnopqrst";
    }) ? function(r, i) {
      for (var t = Object(Mr(r)), e = arguments.length, a = 1, n = Po, s = On; e > a; )
        for (var o = To(arguments[a++]), u = n ? ii(o).concat(n(o)) : ii(o), c = u.length, v = 0, l; c > v; )
          s.call(o, l = u[v++]) && (t[l] = o[l]);
      return t;
    } : Bn;
    wt(wt.S + wt.F, "Object", { assign: mh });
    var yh = Jt.Object.assign, xh = S(function(r) {
      r.exports = { default: yh, __esModule: !0 };
    }), Rt = L(xh), Es = Mo("IE_PROTO"), _h = Object.prototype, Ms = Object.getPrototypeOf || function(r) {
      return r = Object(Mr(r)), te(r, Es) ? r[Es] : typeof r.constructor == "function" && r instanceof r.constructor ? r.constructor.prototype : r instanceof Object ? _h : null;
    };
    Rn("getPrototypeOf", function() {
      return function(r) {
        return Ms(Object(Mr(r)));
      };
    });
    var Ah = Jt.Object.getPrototypeOf, bi = S(function(r) {
      r.exports = { default: Ah, __esModule: !0 };
    }), yt = L(bi);
    wt(wt.S + wt.F * !Xe, "Object", { defineProperty: Ue.f });
    var wh = Jt.Object, Th = function(r, i, t) {
      return wh.defineProperty(r, i, t);
    }, pr = S(function(r) {
      r.exports = { default: Th, __esModule: !0 };
    }), pe = L(pr), Eh = S(function(r, i) {
      i.__esModule = !0;
      var t = pr && pr.__esModule ? pr : { default: pr };
      i.default = function() {
        function e(a, n) {
          for (var s = 0; s < n.length; s++) {
            var o = n[s];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), (0, t.default)(a, o.key, o);
          }
        }
        return function(a, n, s) {
          return n && e(a.prototype, n), s && e(a, s), a;
        };
      }();
    }), ct = L(Eh), or = {}, Mh = Xe ? Object.defineProperties : function(r, i) {
      Oe(r);
      for (var t = ii(i), e = t.length, a = 0, n; e > a; )
        Ue.f(
          r,
          n = t[a++],
          i[n]
        );
      return r;
    }, Ps = kt.document, Lo = Ps && Ps.documentElement, Ph = Mo("IE_PROTO"), Co = function() {
    }, Dn = function() {
      var r = Sn ? ni.createElement("iframe") : {}, i = Cn.length;
      for (r.style.display = "none", Lo.appendChild(r), r.src = "javascript:", r = r.contentWindow.document, r.open(), r.write("<script>document.F=Object<\/script>"), r.close(), Dn = r.F; i--; )
        delete Dn.prototype[Cn[i]];
      return Dn();
    }, Cr = Object.create || function(r, i) {
      if (r !== null) {
        Co.prototype = Oe(r);
        var t = new Co();
        Co.prototype = null, t[Ph] = r;
      } else
        t = Dn();
      return i === void 0 ? t : Mh(t, i);
    }, me = S(function(r) {
      var i = Bi("wks"), t = kt.Symbol, e = typeof t == "function";
      (r.exports = function(a) {
        return i[a] || (i[a] = e && t[a] || (e ? t : Ln)("Symbol." + a));
      }).store = i;
    }), Lh = Ue.f, Ls = me("toStringTag"), Wr = function(r, i, t) {
      r && !te(r = t ? r : r.prototype, Ls) && Lh(r, Ls, { configurable: !0, value: i });
    }, Cs = {};
    dr(Cs, me("iterator"), function() {
      return this;
    });
    var Ch = function(r, i, t) {
      r.prototype = Cr(Cs, { next: Lr(1, t) }), Wr(r, i + " Iterator");
    }, So = me("iterator"), Ro = !([].keys && "next" in [].keys()), Sh = function() {
      return this;
    }, Oo = function(r, i, t, e, a, n, s) {
      Ch(t, i, e), e = function(_) {
        return !Ro && _ in v ? v[_] : function() {
          return new t(this, _);
        };
      };
      var o = i + " Iterator", u = a == "values", c = !1, v = r.prototype, l = v[So] || v["@@iterator"] || a && v[a], f = l || e(a), p = a ? u ? e("entries") : f : void 0, d = i == "Array" && v.entries || l, g;
      if (d && (r = Ms(d.call(new r())), r !== Object.prototype && r.next && Wr(r, o, !0)), u && l && l.name !== "values" && (c = !0, f = function() {
        return l.call(this);
      }), s && (Ro || c || !v[So]) && dr(v, So, f), or[i] = f, or[o] = Sh, a) {
        var A = { values: u ? f : e("values"), keys: n ? f : e("keys"), entries: p };
        if (s)
          for (g in A)
            g in v || dr(v, g, A[g]);
        else
          wt(wt.P + wt.F * (Ro || c), i, A);
      }
      return A;
    }, Rh = function(r) {
      return function(i, t) {
        i = String(Mr(i)), t = Eo(t);
        var e = i.length, a;
        if (0 > t || t >= e)
          return r ? "" : void 0;
        var n = i.charCodeAt(t);
        return 55296 > n || 56319 < n || t + 1 === e || 56320 > (a = i.charCodeAt(t + 1)) || 57343 < a ? r ? i.charAt(t) : n : r ? i.slice(t, t + 2) : (n - 55296 << 10) + (a - 56320) + 65536;
      };
    }(!0);
    Oo(String, "String", function(r) {
      this._t = String(r), this._i = 0;
    }, function() {
      var r = this._t, i = this._i;
      return i >= r.length ? { value: void 0, done: !0 } : (r = Rh(r, i), this._i += r.length, {
        value: r,
        done: !1
      });
    });
    var Sr = function(r, i) {
      return { value: i, done: !!r };
    };
    Oo(Array, "Array", function(r, i) {
      this._t = nr(r), this._i = 0, this._k = i;
    }, function() {
      var r = this._t, i = this._k, t = this._i++;
      return !r || t >= r.length ? (this._t = void 0, Sr(1)) : i == "keys" ? Sr(0, t) : i == "values" ? Sr(0, r[t]) : Sr(0, [t, r[t]]);
    }, "values"), or.Arguments = or.Array;
    for (var Ss = me("toStringTag"), Rs = "CSSRuleList CSSStyleDeclaration CSSValueList ClientRectList DOMRectList DOMStringList DOMTokenList DataTransferItemList FileList HTMLAllCollection HTMLCollection HTMLFormElement HTMLSelectElement MediaList MimeTypeArray NamedNodeMap NodeList PaintRequestList Plugin PluginArray SVGLengthList SVGNumberList SVGPathSegList SVGPointList SVGStringList SVGTransformList SourceBufferList StyleSheetList TextTrackCueList TextTrackList TouchList".split(" "), Bo = 0; Bo < Rs.length; Bo++) {
      var Do = Rs[Bo], Os = kt[Do], bo = Os && Os.prototype;
      bo && !bo[Ss] && dr(bo, Ss, Do), or[Do] = or.Array;
    }
    var bn = { f: me }, Oh = bn.f("iterator"), Fi = S(function(r) {
      r.exports = { default: Oh, __esModule: !0 };
    });
    L(Fi);
    var Fn = S(function(r) {
      var i = Ln("meta"), t = Ue.f, e = 0, a = Object.isExtensible || function() {
        return !0;
      }, n = !Pr(function() {
        return a(Object.preventExtensions({}));
      }), s = function(u) {
        t(u, i, { value: { i: "O" + ++e, w: {} } });
      }, o = r.exports = { KEY: i, NEED: !1, fastKey: function(u, c) {
        if (!Le(u))
          return typeof u == "symbol" ? u : (typeof u == "string" ? "S" : "P") + u;
        if (!te(u, i)) {
          if (!a(u))
            return "F";
          if (!c)
            return "E";
          s(u);
        }
        return u[i].i;
      }, getWeak: function(u, c) {
        if (!te(u, i)) {
          if (!a(u))
            return !0;
          if (!c)
            return !1;
          s(u);
        }
        return u[i].w;
      }, onFreeze: function(u) {
        return n && o.NEED && a(u) && !te(u, i) && s(u), u;
      } };
    }), Bh = Ue.f, Fo = function(r) {
      var i = Jt.Symbol || (Jt.Symbol = {});
      r.charAt(0) == "_" || r in i || Bh(i, r, { value: bn.f(r) });
    }, Io = Array.isArray || function(r) {
      return Gr(r) == "Array";
    }, Dh = Cn.concat("length", "prototype"), Bs = Object.getOwnPropertyNames || function(r) {
      return ws(r, Dh);
    }, Ds = Bs, bh = {}.toString, bs = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], Fs = function(r) {
      if (bs && bh.call(r) == "[object Window]")
        try {
          var i = Ds(r);
        } catch {
          i = bs.slice();
        }
      else
        i = Ds(nr(r));
      return i;
    }, Is = Object.getOwnPropertyDescriptor, In = { f: Xe ? Is : function(r, i) {
      if (r = nr(r), i = Di(i, !0), Ts)
        try {
          return Is(r, i);
        } catch {
        }
      if (te(r, i))
        return Lr(!On.call(r, i), r[i]);
    } }, Fh = Fn.KEY, zs = In.f, Xr = Ue.f, ks = Fs, Be = kt.Symbol, zn = kt.JSON, kn = zn && zn.stringify, De = me("_hidden"), Ns = me("toPrimitive"), Ih = {}.propertyIsEnumerable, Ii = Bi("symbol-registry"), vr = Bi("symbols"), zi = Bi("op-symbols"), Qe = Object.prototype, oi = typeof Be == "function", zo = kt.QObject, ko = !zo || !zo.prototype || !zo.prototype.findChild, No = Xe && Pr(function() {
      return Cr(Xr({}, "a", { get: function() {
        return Xr(this, "a", { value: 7 }).a;
      } })).a != 7;
    }) ? function(r, i, t) {
      var e = zs(Qe, i);
      e && delete Qe[i], Xr(r, i, t), e && r !== Qe && Xr(Qe, i, e);
    } : Xr, Us = function(r) {
      var i = vr[r] = Cr(Be.prototype);
      return i._k = r, i;
    }, Uo = oi && typeof Be.iterator == "symbol" ? function(r) {
      return typeof r == "symbol";
    } : function(r) {
      return r instanceof Be;
    }, Nn = function(r, i, t) {
      return r === Qe && Nn(zi, i, t), Oe(r), i = Di(i, !0), Oe(t), te(vr, i) ? (t.enumerable ? (te(r, De) && r[De][i] && (r[De][i] = !1), t = Cr(t, { enumerable: Lr(0, !1) })) : (te(r, De) || Xr(r, De, Lr(1, {})), r[De][i] = !0), No(r, i, t)) : Xr(r, i, t);
    }, Hs = function(r, i) {
      Oe(r);
      var t = i = nr(i), e = ii(t), a = Po;
      if (a) {
        a = a(t);
        for (var n = On, s = 0, o; a.length > s; )
          n.call(t, o = a[s++]) && e.push(o);
      }
      t = 0, o = e.length;
      for (var u; o > t; )
        Nn(r, u = e[t++], i[u]);
      return r;
    }, zh = function(r) {
      var i = Ih.call(this, r = Di(r, !0));
      return this === Qe && te(vr, r) && !te(zi, r) ? !1 : i || !te(this, r) || !te(vr, r) || te(this, De) && this[De][r] ? i : !0;
    }, Gs = function(r, i) {
      if (r = nr(r), i = Di(i, !0), r !== Qe || !te(vr, i) || te(zi, i)) {
        var t = zs(r, i);
        return !t || !te(vr, i) || te(r, De) && r[De][i] || (t.enumerable = !0), t;
      }
    }, js = function(r) {
      r = ks(nr(r));
      for (var i = [], t = 0, e; r.length > t; )
        te(vr, e = r[t++]) || e == De || e == Fh || i.push(e);
      return i;
    }, Ws = function(r) {
      var i = r === Qe;
      r = ks(i ? zi : nr(r));
      for (var t = [], e = 0, a; r.length > e; )
        te(vr, a = r[e++]) && (!i || te(Qe, a)) && t.push(vr[a]);
      return t;
    };
    oi || (Be = function() {
      if (this instanceof Be)
        throw TypeError("Symbol is not a constructor!");
      var r = Ln(0 < arguments.length ? arguments[0] : void 0), i = function(t) {
        this === Qe && i.call(zi, t), te(this, De) && te(this[De], r) && (this[De][r] = !1), No(this, r, Lr(1, t));
      };
      return Xe && ko && No(Qe, r, { configurable: !0, set: i }), Us(r);
    }, dr(Be.prototype, "toString", function() {
      return this._k;
    }), In.f = Gs, Ue.f = Nn, Bs = Fs = js, On = zh, Po = Ws, bn.f = function(r) {
      return Us(me(r));
    }), wt(wt.G + wt.W + wt.F * !oi, { Symbol: Be });
    for (var Xs = "hasInstance isConcatSpreadable iterator match replace search species split toPrimitive toStringTag unscopables".split(" "), Vs = 0; Xs.length > Vs; )
      me(Xs[Vs++]);
    for (var Ys = ii(me.store), Zs = 0; Ys.length > Zs; )
      Fo(Ys[Zs++]);
    wt(wt.S + wt.F * !oi, "Symbol", { for: function(r) {
      return te(Ii, r += "") ? Ii[r] : Ii[r] = Be(r);
    }, keyFor: function(r) {
      if (!Uo(r))
        throw TypeError(r + " is not a symbol!");
      for (var i in Ii)
        if (Ii[i] === r)
          return i;
    }, useSetter: function() {
      ko = !0;
    }, useSimple: function() {
      ko = !1;
    } }), wt(wt.S + wt.F * !oi, "Object", {
      create: function(r, i) {
        return i === void 0 ? Cr(r) : Hs(Cr(r), i);
      },
      defineProperty: Nn,
      defineProperties: Hs,
      getOwnPropertyDescriptor: Gs,
      getOwnPropertyNames: js,
      getOwnPropertySymbols: Ws
    }), zn && wt(wt.S + wt.F * (!oi || Pr(function() {
      var r = Be();
      return kn([r]) != "[null]" || kn({ a: r }) != "{}" || kn(Object(r)) != "{}";
    })), "JSON", { stringify: function(r) {
      for (var i = [r], t = 1, e; arguments.length > t; )
        i.push(arguments[t++]);
      if (e = t = i[1], (Le(t) || r !== void 0) && !Uo(r))
        return Io(t) || (t = function(a, n) {
          if (typeof e == "function" && (n = e.call(this, a, n)), !Uo(n))
            return n;
        }), i[1] = t, kn.apply(zn, i);
    } }), Be.prototype[Ns] || dr(Be.prototype, Ns, Be.prototype.valueOf), Wr(Be, "Symbol"), Wr(Math, "Math", !0), Wr(
      kt.JSON,
      "JSON",
      !0
    ), Fo("asyncIterator"), Fo("observable");
    var kh = Jt.Symbol, ki = S(function(r) {
      r.exports = { default: kh, __esModule: !0 };
    }), Js = L(ki), ai = S(function(r, i) {
      i.__esModule = !0, r = Fi && Fi.__esModule ? Fi : { default: Fi };
      var t = ki && ki.__esModule ? ki : { default: ki }, e = typeof t.default == "function" && typeof r.default == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof t.default == "function" && a.constructor === t.default && a !== t.default.prototype ? "symbol" : typeof a;
      };
      i.default = typeof t.default == "function" && e(r.default) === "symbol" ? function(a) {
        return typeof a > "u" ? "undefined" : e(a);
      } : function(a) {
        return a && typeof t.default == "function" && a.constructor === t.default && a !== t.default.prototype ? "symbol" : typeof a > "u" ? "undefined" : e(a);
      };
    }), be = L(ai), Nh = S(function(r, i) {
      i.__esModule = !0;
      var t = ai && ai.__esModule ? ai : { default: ai };
      i.default = function(e, a) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !a || (typeof a > "u" ? "undefined" : (0, t.default)(a)) !== "object" && typeof a != "function" ? e : a;
      };
    }), Pt = L(Nh), Uh = Object.setPrototypeOf || ("__proto__" in {} ? function(r, i, t) {
      try {
        t = ye(Function.call, In.f(Object.prototype, "__proto__").set, 2), t(r, []), i = !(r instanceof Array);
      } catch {
        i = !0;
      }
      return function(e, a) {
        if (Oe(e), !Le(a) && a !== null)
          throw TypeError(a + ": can't set as prototype!");
        return i ? e.__proto__ = a : t(e, a), e;
      };
    }({}, !1) : void 0);
    wt(wt.S, "Object", { setPrototypeOf: Uh });
    var Hh = Jt.Object.setPrototypeOf, Qs = S(function(r) {
      r.exports = { default: Hh, __esModule: !0 };
    });
    L(Qs), wt(wt.S, "Object", { create: Cr });
    var Gh = Jt.Object, jh = function(r, i) {
      return Gh.create(r, i);
    }, Ks = S(function(r) {
      r.exports = { default: jh, __esModule: !0 };
    }), Wh = L(Ks), Xh = S(function(r, i) {
      function t(s) {
        return s && s.__esModule ? s : { default: s };
      }
      i.__esModule = !0;
      var e = t(Qs), a = t(Ks), n = t(ai);
      i.default = function(s, o) {
        if (typeof o != "function" && o !== null)
          throw new TypeError("Super expression must either be null or a function, not " + (typeof o > "u" ? "undefined" : (0, n.default)(o)));
        s.prototype = (0, a.default)(o && o.prototype, { constructor: {
          value: s,
          enumerable: !1,
          writable: !0,
          configurable: !0
        } }), o && (e.default ? (0, e.default)(s, o) : s.__proto__ = o);
      };
    }), Lt = L(Xh), Vh = me("toStringTag"), Yh = Gr(function() {
      return arguments;
    }()) == "Arguments", Un = function(r) {
      var i;
      if (r === void 0)
        var t = "Undefined";
      else {
        if (r === null)
          var e = "Null";
        else {
          t: {
            var a = r = Object(r);
            try {
              e = a[Vh];
              break t;
            } catch {
            }
            e = void 0;
          }
          e = typeof (t = e) == "string" ? t : Yh ? Gr(r) : (i = Gr(r)) == "Object" && typeof r.callee == "function" ? "Arguments" : i;
        }
        t = e;
      }
      return t;
    }, Zh = me("iterator"), Jh = Jt.isIterable = function(r) {
      return r = Object(r), r[Zh] !== void 0 || "@@iterator" in r || or.hasOwnProperty(Un(r));
    }, Ni = S(function(r) {
      r.exports = { default: Jh, __esModule: !0 };
    });
    L(Ni);
    var Qh = me("iterator"), Ho = Jt.getIteratorMethod = function(r) {
      if (r != null)
        return r[Qh] || r["@@iterator"] || or[Un(r)];
    }, Kh = Jt.getIterator = function(r) {
      var i = Ho(r);
      if (typeof i != "function")
        throw TypeError(r + " is not iterable!");
      return Oe(i.call(r));
    }, Ui = S(function(r) {
      r.exports = { default: Kh, __esModule: !0 };
    }), si = L(Ui), qh = S(function(r, i) {
      i.__esModule = !0;
      var t = Ni && Ni.__esModule ? Ni : { default: Ni }, e = Ui && Ui.__esModule ? Ui : { default: Ui };
      i.default = function() {
        return function(a, n) {
          if (Array.isArray(a))
            return a;
          if ((0, t.default)(Object(a))) {
            var s = [], o = !0, u = !1, c = void 0;
            try {
              for (var v = (0, e.default)(a), l; !(o = (l = v.next()).done) && (s.push(l.value), !n || s.length !== n); o = !0)
                ;
            } catch (f) {
              u = !0, c = f;
            } finally {
              try {
                !o && v.return && v.return();
              } finally {
                if (u)
                  throw c;
              }
            }
            return s;
          }
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
    }), Vt = L(qh), qs = function(r, i, t, e) {
      try {
        return e ? i(Oe(t)[0], t[1]) : i(t);
      } catch (a) {
        throw i = r.return, i !== void 0 && Oe(i.call(r)), a;
      }
    }, $s = me("iterator"), tu = Array.prototype, Go = me("iterator"), eu = !1;
    try {
      [7][Go]().return = function() {
        eu = !0;
      };
    } catch {
    }
    var ru = function(r, i) {
      if (!i && !eu)
        return !1;
      var t = !1;
      try {
        i = [7];
        var e = i[Go]();
        e.next = function() {
          return { done: t = !0 };
        }, i[Go] = function() {
          return e;
        }, r(i);
      } catch {
      }
      return t;
    };
    wt(wt.S + wt.F * !ru(function(r) {
    }), "Array", { from: function(r) {
      var i = Object(Mr(r)), t = typeof this == "function" ? this : Array, e = arguments.length, a = 1 < e ? arguments[1] : void 0, n = a !== void 0, s = 0, o = Ho(i), u;
      if (n && (a = ye(a, 2 < e ? arguments[2] : void 0, 2)), o != null && (t != Array || o === void 0 || or.Array !== o && tu[$s] !== o))
        for (i = o.call(i), t = new t(); !(u = i.next()).done; s++)
          e = t, o = s, u = n ? qs(i, a, [u.value, s], !0) : u.value, o in e ? Ue.f(e, o, Lr(0, u)) : e[o] = u;
      else
        for (e = Pn(i.length), t = new t(e); e > s; s++) {
          o = t, u = s;
          var c = n ? a(i[s], s) : i[s];
          u in o ? Ue.f(o, u, Lr(0, c)) : o[u] = c;
        }
      return t.length = s, t;
    } });
    var $h = Jt.Array.from, Hi = S(function(r) {
      r.exports = { default: $h, __esModule: !0 };
    }), Hn = L(Hi), tc = S(function(r, i) {
      i.__esModule = !0;
      var t = Hi && Hi.__esModule ? Hi : { default: Hi };
      i.default = function(e) {
        if (Array.isArray(e)) {
          for (var a = 0, n = Array(e.length); a < e.length; a++)
            n[a] = e[a];
          return n;
        }
        return (0, t.default)(e);
      };
    }), bt = L(tc), ec = Fn.onFreeze;
    Rn("freeze", function(r) {
      return function(i) {
        return r && Le(i) ? r(ec(i)) : i;
      };
    });
    var rc = Jt.Object.freeze, ic = S(function(r) {
      r.exports = { default: rc, __esModule: !0 };
    }), iu = L(ic), nu = Jt.JSON || (Jt.JSON = { stringify: JSON.stringify }), nc = function(r) {
      return nu.stringify.apply(nu, arguments);
    }, oc = S(function(r) {
      r.exports = { default: nc, __esModule: !0 };
    }), Gi = L(oc), Ke = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [
        30,
        144,
        255
      ],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [
        173,
        216,
        230
      ],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [
        102,
        205,
        170
      ],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [
        238,
        232,
        170
      ],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    }, ac = In.f;
    Rn("getOwnPropertyDescriptor", function() {
      return function(r, i) {
        return ac(nr(r), i);
      };
    });
    var sc = Jt.Object, uc = function(r, i) {
      return sc.getOwnPropertyDescriptor(
        r,
        i
      );
    }, ji = S(function(r) {
      r.exports = { default: uc, __esModule: !0 };
    }), ce = L(ji), Wi = S(function(r) {
      var i = Array.prototype.concat, t = Array.prototype.slice, e = r.exports = function(a) {
        for (var n = [], s = 0, o = a.length; s < o; s++) {
          var u = a[s], c = (c = u) && typeof c != "string" ? c instanceof Array || Array.isArray(c) || 0 <= c.length && (c.splice instanceof Function || ce(c, c.length - 1) && c.constructor.name !== "String") : !1;
          c ? n = i.call(n, t.call(u)) : n.push(u);
        }
        return n;
      };
      e.wrap = function(a) {
        return function() {
          return a(e(arguments));
        };
      };
    }), Xi = S(function(r) {
      function i(s, o, u) {
        return Math.min(Math.max(o, s), u);
      }
      function t(s) {
        return s = s.toString(16).toUpperCase(), 2 > s.length ? "0" + s : s;
      }
      var e = {}, a;
      for (a in Ke)
        Ke.hasOwnProperty(a) && (e[Ke[a]] = a);
      var n = r.exports = { to: {}, get: {} };
      n.get = function(s) {
        switch (s.substring(0, 3).toLowerCase()) {
          case "hsl":
            s = n.get.hsl(s);
            var o = "hsl";
            break;
          case "hwb":
            s = n.get.hwb(s), o = "hwb";
            break;
          default:
            s = n.get.rgb(s), o = "rgb";
        }
        return s ? { model: o, value: s } : null;
      }, n.get.rgb = function(s) {
        if (!s)
          return null;
        var o = /^#([a-f0-9]{3,4})$/i, u = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/, c = /^rgba?\(\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/, v = /(\D+)/, l = [0, 0, 0, 1], f;
        if (f = s.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
          for (o = f[2], f = f[1], s = 0; 3 > s; s++)
            u = 2 * s, l[s] = parseInt(f.slice(u, u + 2), 16);
          o && (l[3] = Math.round(parseInt(o, 16) / 255 * 100) / 100);
        } else if (f = s.match(o)) {
          for (f = f[1], o = f[3], s = 0; 3 > s; s++)
            l[s] = parseInt(f[s] + f[s], 16);
          o && (l[3] = Math.round(parseInt(o + o, 16) / 255 * 100) / 100);
        } else if (f = s.match(u)) {
          for (s = 0; 3 > s; s++)
            l[s] = parseInt(f[s + 1], 0);
          f[4] && (l[3] = parseFloat(f[4]));
        } else if (f = s.match(c)) {
          for (s = 0; 3 > s; s++)
            l[s] = Math.round(2.55 * parseFloat(f[s + 1]));
          f[4] && (l[3] = parseFloat(f[4]));
        } else
          return (f = s.match(v)) ? f[1] === "transparent" ? [0, 0, 0, 0] : (l = Ke[f[1]], l ? (l[3] = 1, l) : null) : null;
        for (s = 0; 3 > s; s++)
          l[s] = i(l[s], 0, 255);
        return l[3] = i(l[3], 0, 1), l;
      }, n.get.hsl = function(s) {
        if (!s)
          return null;
        var o = s.match(/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);
        if (o) {
          var u = parseFloat(o[4]);
          s = (parseFloat(o[1]) + 360) % 360;
          var c = i(parseFloat(o[2]), 0, 100);
          return o = i(parseFloat(o[3]), 0, 100), u = i(isNaN(u) ? 1 : u, 0, 1), [s, c, o, u];
        }
        return null;
      }, n.get.hwb = function(s) {
        if (!s)
          return null;
        var o = s.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);
        if (o) {
          var u = parseFloat(o[4]);
          s = (parseFloat(o[1]) % 360 + 360) % 360;
          var c = i(parseFloat(o[2]), 0, 100);
          return o = i(parseFloat(o[3]), 0, 100), u = i(isNaN(u) ? 1 : u, 0, 1), [s, c, o, u];
        }
        return null;
      }, n.to.hex = function() {
        var s = Wi(arguments);
        return "#" + t(s[0]) + t(s[1]) + t(s[2]) + (1 > s[3] ? t(Math.round(255 * s[3])) : "");
      }, n.to.rgb = function() {
        var s = Wi(arguments);
        return 4 > s.length || s[3] === 1 ? "rgb(" + Math.round(s[0]) + ", " + Math.round(s[1]) + ", " + Math.round(s[2]) + ")" : "rgba(" + Math.round(s[0]) + ", " + Math.round(s[1]) + ", " + Math.round(s[2]) + ", " + s[3] + ")";
      }, n.to.rgb.percent = function() {
        var s = Wi(arguments), o = Math.round(s[0] / 255 * 100), u = Math.round(s[1] / 255 * 100), c = Math.round(s[2] / 255 * 100);
        return 4 > s.length || s[3] === 1 ? "rgb(" + o + "%, " + u + "%, " + c + "%)" : "rgba(" + o + "%, " + u + "%, " + c + "%, " + s[3] + ")";
      }, n.to.hsl = function() {
        var s = Wi(arguments);
        return 4 > s.length || s[3] === 1 ? "hsl(" + s[0] + ", " + s[1] + "%, " + s[2] + "%)" : "hsla(" + s[0] + ", " + s[1] + "%, " + s[2] + "%, " + s[3] + ")";
      }, n.to.hwb = function() {
        var s = Wi(arguments), o = "";
        return 4 <= s.length && s[3] !== 1 && (o = ", " + s[3]), "hwb(" + s[0] + ", " + s[1] + "%, " + s[2] + "%" + o + ")";
      }, n.to.keyword = function(s) {
        return e[s.slice(0, 3)];
      };
    }), Vr = S(function(r) {
      var i = {};
      for (a in Ke)
        Ke.hasOwnProperty(a) && (i[Ke[a]] = a);
      var t = r.exports = { rgb: { channels: 3, labels: "rgb" }, hsl: {
        channels: 3,
        labels: "hsl"
      }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } }, e;
      for (e in t)
        if (t.hasOwnProperty(e)) {
          if (!("channels" in t[e]))
            throw Error("missing channels property: " + e);
          if (!("labels" in t[e]))
            throw Error("missing channel labels property: " + e);
          if (t[e].labels.length !== t[e].channels)
            throw Error("channel and label counts mismatch: " + e);
          r = t[e].channels;
          var a = t[e].labels;
          delete t[e].channels, delete t[e].labels, Object.defineProperty(t[e], "channels", { value: r }), Object.defineProperty(t[e], "labels", { value: a });
        }
      t.rgb.hsl = function(n) {
        var s = n[0] / 255, o = n[1] / 255, u = n[2] / 255;
        n = Math.min(s, o, u);
        var c = Math.max(s, o, u), v = c - n, l;
        return c === n ? l = 0 : s === c ? l = (o - u) / v : o === c ? l = 2 + (u - s) / v : u === c && (l = 4 + (s - o) / v), l = Math.min(60 * l, 360), 0 > l && (l += 360), s = (n + c) / 2, [l, 100 * (c === n ? 0 : 0.5 >= s ? v / (c + n) : v / (2 - c - n)), 100 * s];
      }, t.rgb.hsv = function(n) {
        var s, o = n[0] / 255, u = n[1] / 255, c = n[2] / 255, v = Math.max(o, u, c), l = v - Math.min(o, u, c);
        if (l === 0)
          var f = s = 0;
        else {
          s = l / v, n = (v - o) / 6 / l + 0.5;
          var p = (v - u) / 6 / l + 0.5;
          l = (v - c) / 6 / l + 0.5, o === v ? f = l - p : u === v ? f = 1 / 3 + n - l : c === v && (f = 2 / 3 + p - n), 0 > f ? f += 1 : 1 < f && --f;
        }
        return [360 * f, 100 * s, 100 * v];
      }, t.rgb.hwb = function(n) {
        var s = n[0], o = n[1], u = n[2];
        n = t.rgb.hsl(n)[0];
        var c = 1 / 255 * Math.min(s, Math.min(o, u));
        return u = 1 - 1 / 255 * Math.max(s, Math.max(o, u)), [n, 100 * c, 100 * u];
      }, t.rgb.cmyk = function(n) {
        var s = n[0] / 255, o = n[1] / 255;
        n = n[2] / 255;
        var u = Math.min(1 - s, 1 - o, 1 - n);
        return [100 * ((1 - s - u) / (1 - u) || 0), 100 * ((1 - o - u) / (1 - u) || 0), 100 * ((1 - n - u) / (1 - u) || 0), 100 * u];
      }, t.rgb.keyword = function(n) {
        var s = i[n];
        if (s)
          return s;
        s = 1 / 0;
        var o;
        for (o in Ke)
          if (Ke.hasOwnProperty(o)) {
            var u = Ke[o];
            if (u = Math.pow(n[0] - u[0], 2) + Math.pow(n[1] - u[1], 2) + Math.pow(n[2] - u[2], 2), u < s) {
              s = u;
              var c = o;
            }
          }
        return c;
      }, t.keyword.rgb = function(n) {
        return Ke[n];
      }, t.rgb.xyz = function(n) {
        var s = n[0] / 255, o = n[1] / 255;
        return n = n[2] / 255, s = 0.04045 < s ? Math.pow((s + 0.055) / 1.055, 2.4) : s / 12.92, o = 0.04045 < o ? Math.pow((o + 0.055) / 1.055, 2.4) : o / 12.92, n = 0.04045 < n ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92, [100 * (0.4124 * s + 0.3576 * o + 0.1805 * n), 100 * (0.2126 * s + 0.7152 * o + 0.0722 * n), 100 * (0.0193 * s + 0.1192 * o + 0.9505 * n)];
      }, t.rgb.lab = function(n) {
        var s = t.rgb.xyz(n);
        n = s[0];
        var o = s[1];
        return s = s[2], n /= 95.047, o /= 100, s /= 108.883, n = 8856e-6 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, o = 8856e-6 < o ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, s = 8856e-6 < s ? Math.pow(
          s,
          1 / 3
        ) : 7.787 * s + 16 / 116, [116 * o - 16, 500 * (n - o), 200 * (o - s)];
      }, t.hsl.rgb = function(n) {
        var s = n[0] / 360, o = n[1] / 100;
        if (n = n[2] / 100, o === 0) {
          var u = 255 * n;
          return [u, u, u];
        }
        o = 0.5 > n ? n * (1 + o) : n + o - n * o, n = 2 * n - o;
        for (var c = [0, 0, 0], v = 0; 3 > v; v++)
          u = s + 1 / 3 * -(v - 1), 0 > u && u++, 1 < u && u--, u = 1 > 6 * u ? n + 6 * (o - n) * u : 1 > 2 * u ? o : 2 > 3 * u ? n + (o - n) * (2 / 3 - u) * 6 : n, c[v] = 255 * u;
        return c;
      }, t.hsl.hsv = function(n) {
        var s = n[0], o = n[1] / 100;
        n = n[2] / 100;
        var u = o, c = Math.max(n, 0.01);
        return n *= 2, o *= 1 >= n ? n : 2 - n, u *= 1 >= c ? c : 2 - c, [s, 100 * (n === 0 ? 2 * u / (c + u) : 2 * o / (n + o)), (n + o) / 2 * 100];
      }, t.hsv.rgb = function(n) {
        var s = n[0] / 60, o = n[1] / 100;
        n = n[2] / 100;
        var u = Math.floor(s) % 6, c = s - Math.floor(s);
        s = 255 * n * (1 - o);
        var v = 255 * n * (1 - o * c);
        switch (o = 255 * n * (1 - o * (1 - c)), n *= 255, u) {
          case 0:
            return [n, o, s];
          case 1:
            return [v, n, s];
          case 2:
            return [s, n, o];
          case 3:
            return [s, v, n];
          case 4:
            return [o, s, n];
          case 5:
            return [n, s, v];
        }
      }, t.hsv.hsl = function(n) {
        var s = n[0], o = n[1] / 100;
        n = n[2] / 100;
        var u = Math.max(n, 0.01), c = (2 - o) * u;
        return u = o * u / (1 >= c ? c : 2 - c) || 0, [s, 100 * u, (2 - o) * n / 2 * 100];
      }, t.hwb.rgb = function(n) {
        var s = n[0] / 360, o = n[1] / 100;
        n = n[2] / 100;
        var u = o + n;
        switch (1 < u && (o /= u, n /= u), u = Math.floor(6 * s), n = 1 - n, s = 6 * s - u, u & 1 && (s = 1 - s), s = o + s * (n - o), u) {
          default:
          case 6:
          case 0:
            u = n;
            var c = s;
            break;
          case 1:
            u = s, c = n;
            break;
          case 2:
            u = o, c = n, o = s;
            break;
          case 3:
            u = o, c = s, o = n;
            break;
          case 4:
            u = s, c = o, o = n;
            break;
          case 5:
            u = n, c = o, o = s;
        }
        return [255 * u, 255 * c, 255 * o];
      }, t.cmyk.rgb = function(n) {
        var s = n[3] / 100;
        return [255 * (1 - Math.min(1, n[0] / 100 * (1 - s) + s)), 255 * (1 - Math.min(1, n[1] / 100 * (1 - s) + s)), 255 * (1 - Math.min(1, n[2] / 100 * (1 - s) + s))];
      }, t.xyz.rgb = function(n) {
        var s = n[0] / 100, o = n[1] / 100, u = n[2] / 100;
        n = 3.2406 * s + -1.5372 * o + -0.4986 * u;
        var c = -0.9689 * s + 1.8758 * o + 0.0415 * u;
        return s = 0.0557 * s + -0.204 * o + 1.057 * u, n = 31308e-7 < n ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : 12.92 * n, c = 31308e-7 < c ? 1.055 * Math.pow(c, 1 / 2.4) - 0.055 : 12.92 * c, s = 31308e-7 < s ? 1.055 * Math.pow(s, 1 / 2.4) - 0.055 : 12.92 * s, n = Math.min(Math.max(0, n), 1), c = Math.min(Math.max(0, c), 1), s = Math.min(Math.max(0, s), 1), [255 * n, 255 * c, 255 * s];
      }, t.xyz.lab = function(n) {
        var s = n[0], o = n[1];
        return n = n[2], s /= 95.047, o /= 100, n /= 108.883, s = 8856e-6 < s ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, o = 8856e-6 < o ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, n = 8856e-6 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * o - 16, 500 * (s - o), 200 * (o - n)];
      }, t.lab.xyz = function(n) {
        var s = n[1], o = n[2];
        n = (n[0] + 16) / 116, s = s / 500 + n, o = n - o / 200;
        var u = Math.pow(n, 3), c = Math.pow(s, 3), v = Math.pow(o, 3);
        return [95.047 * (8856e-6 < c ? c : (s - 16 / 116) / 7.787), 100 * (8856e-6 < u ? u : (n - 16 / 116) / 7.787), 108.883 * (8856e-6 < v ? v : (o - 16 / 116) / 7.787)];
      }, t.lab.lch = function(n) {
        var s = n[0], o = n[1];
        n = n[2];
        var u = 360 * Math.atan2(n, o) / 2 / Math.PI;
        return 0 > u && (u += 360), [s, Math.sqrt(o * o + n * n), u];
      }, t.lch.lab = function(n) {
        var s = n[0], o = n[1];
        return n = n[2] / 360 * 2 * Math.PI, [s, o * Math.cos(n), o * Math.sin(n)];
      }, t.rgb.ansi16 = function(n) {
        var s = n[0], o = n[1], u = n[2], c = 1 in arguments ? arguments[1] : t.rgb.hsv(n)[2];
        return c = Math.round(c / 50), c === 0 ? 30 : (s = 30 + (Math.round(u / 255) << 2 | Math.round(o / 255) << 1 | Math.round(s / 255)), c === 2 && (s += 60), s);
      }, t.hsv.ansi16 = function(n) {
        return t.rgb.ansi16(t.hsv.rgb(n), n[2]);
      }, t.rgb.ansi256 = function(n) {
        var s = n[0], o = n[1];
        return n = n[2], s === o && o === n ? 8 > s ? 16 : 248 < s ? 231 : Math.round((s - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(s / 255 * 5) + 6 * Math.round(o / 255 * 5) + Math.round(n / 255 * 5);
      }, t.ansi16.rgb = function(n) {
        var s = n % 10;
        return s === 0 || s === 7 ? (50 < n && (s += 3.5), s = s / 10.5 * 255, [s, s, s]) : (n = 0.5 * (~~(50 < n) + 1), [(s & 1) * n * 255, (s >> 1 & 1) * n * 255, (s >> 2 & 1) * n * 255]);
      }, t.ansi256.rgb = function(n) {
        if (232 <= n) {
          var s = 10 * (n - 232) + 8;
          return [s, s, s];
        }
        n -= 16, s = Math.floor(n / 36) / 5 * 255;
        var o = Math.floor((n %= 36) / 6) / 5 * 255;
        return [s, o, n % 6 / 5 * 255];
      }, t.rgb.hex = function(n) {
        return n = (((Math.round(n[0]) & 255) << 16) + ((Math.round(n[1]) & 255) << 8) + (Math.round(n[2]) & 255)).toString(16).toUpperCase(), "000000".substring(n.length) + n;
      }, t.hex.rgb = function(n) {
        if (n = n.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i), !n)
          return [0, 0, 0];
        var s = n[0];
        return n[0].length === 3 && (s = s.split("").map(function(o) {
          return o + o;
        }).join("")), n = parseInt(s, 16), [n >> 16 & 255, n >> 8 & 255, n & 255];
      }, t.rgb.hcg = function(n) {
        var s = n[0] / 255, o = n[1] / 255;
        n = n[2] / 255;
        var u = Math.max(Math.max(s, o), n), c = Math.min(Math.min(s, o), n), v = u - c;
        return [(0 >= v ? 0 : u === s ? (o - n) / v % 6 : u === o ? 2 + (n - s) / v : (s - o) / v + 8) / 6 % 1 * 360, 100 * v, 100 * (1 > v ? c / (1 - v) : 0)];
      }, t.hsl.hcg = function(n) {
        var s = n[1] / 100, o = n[2] / 100, u = 0;
        return s = 0.5 > o ? 2 * s * o : 2 * s * (1 - o), 1 > s && (u = (o - 0.5 * s) / (1 - s)), [n[0], 100 * s, 100 * u];
      }, t.hsv.hcg = function(n) {
        var s = n[2] / 100, o = n[1] / 100 * s, u = 0;
        return 1 > o && (u = (s - o) / (1 - o)), [n[0], 100 * o, 100 * u];
      }, t.hcg.rgb = function(n) {
        var s = n[1] / 100, o = n[2] / 100;
        if (s === 0)
          return [255 * o, 255 * o, 255 * o];
        var u = [0, 0, 0];
        n = n[0] / 360 % 1 * 6;
        var c = n % 1, v = 1 - c;
        switch (Math.floor(n)) {
          case 0:
            u[0] = 1, u[1] = c, u[2] = 0;
            break;
          case 1:
            u[0] = v, u[1] = 1, u[2] = 0;
            break;
          case 2:
            u[0] = 0, u[1] = 1, u[2] = c;
            break;
          case 3:
            u[0] = 0, u[1] = v, u[2] = 1;
            break;
          case 4:
            u[0] = c, u[1] = 0, u[2] = 1;
            break;
          default:
            u[0] = 1, u[1] = 0, u[2] = v;
        }
        return o *= 1 - s, [255 * (s * u[0] + o), 255 * (s * u[1] + o), 255 * (s * u[2] + o)];
      }, t.hcg.hsv = function(n) {
        var s = n[1] / 100, o = s + n[2] / 100 * (1 - s), u = 0;
        return 0 < o && (u = s / o), [n[0], 100 * u, 100 * o];
      }, t.hcg.hsl = function(n) {
        var s = n[1] / 100, o = n[2] / 100 * (1 - s) + 0.5 * s, u = 0;
        return 0 < o && 0.5 > o ? u = s / (2 * o) : 0.5 <= o && 1 > o && (u = s / (2 * (1 - o))), [n[0], 100 * u, 100 * o];
      }, t.hcg.hwb = function(n) {
        var s = n[1] / 100, o = s + n[2] / 100 * (1 - s);
        return [n[0], 100 * (o - s), 100 * (1 - o)];
      }, t.hwb.hcg = function(n) {
        var s = 1 - n[2] / 100, o = s - n[1] / 100, u = 0;
        return 1 > o && (u = (s - o) / (1 - o)), [n[0], 100 * o, 100 * u];
      }, t.apple.rgb = function(n) {
        return [n[0] / 65535 * 255, n[1] / 65535 * 255, n[2] / 65535 * 255];
      }, t.rgb.apple = function(n) {
        return [n[0] / 255 * 65535, n[1] / 255 * 65535, n[2] / 255 * 65535];
      }, t.gray.rgb = function(n) {
        return [n[0] / 100 * 255, n[0] / 100 * 255, n[0] / 100 * 255];
      }, t.gray.hsl = t.gray.hsv = function(n) {
        return [0, 0, n[0]];
      }, t.gray.hwb = function(n) {
        return [0, 100, n[0]];
      }, t.gray.cmyk = function(n) {
        return [0, 0, 0, n[0]];
      }, t.gray.lab = function(n) {
        return [n[0], 0, 0];
      }, t.gray.hex = function(n) {
        return n = Math.round(n[0] / 100 * 255) & 255, n = ((n << 16) + (n << 8) + n).toString(16).toUpperCase(), "000000".substring(n.length) + n;
      }, t.rgb.gray = function(n) {
        return [(n[0] + n[1] + n[2]) / 3 / 255 * 100];
      };
    }), lc = function(r) {
      for (var i = {}, t = de(Vr), e = t.length, a = 0; a < e; a++)
        i[t[a]] = { distance: -1, parent: null };
      for (t = [r], i[r].distance = 0; t.length; ) {
        r = t.pop(), e = de(Vr[r]), a = e.length;
        for (var n = 0; n < a; n++) {
          var s = e[n], o = i[s];
          o.distance === -1 && (o.distance = i[r].distance + 1, o.parent = r, t.unshift(s));
        }
      }
      for (t = {}, r = de(i), e = r.length, a = 0; a < e; a++) {
        var u = r[a];
        if (i[u].parent !== null) {
          n = u, s = i, o = [s[u].parent, u];
          var c = Vr[s[u].parent][u];
          for (u = s[u].parent; s[u].parent; )
            o.unshift(s[u].parent), c = N(Vr[s[u].parent][u], c), u = s[u].parent;
          c.conversion = o, t[n] = c;
        }
      }
      return t;
    }, ui = {};
    de(Vr).forEach(function(r) {
      ui[r] = {}, Object.defineProperty(ui[r], "channels", { value: Vr[r].channels }), Object.defineProperty(ui[r], "labels", { value: Vr[r].labels });
      var i = lc(r);
      de(i).forEach(function(t) {
        var e = i[t];
        ui[r][t] = H(e), ui[r][t].raw = Y(e);
      });
    });
    var He = ui, jo = [].slice, ou = ["keyword", "gray", "hex"], Wo = {};
    de(He).forEach(function(r) {
      Wo[jo.call(He[r].labels).sort().join("")] = r;
    });
    var Gn = {};
    V.prototype = {
      toString: function() {
        return this.string();
      },
      toJSON: function() {
        return this[this.model]();
      },
      string: function(r) {
        var i = this.model in Xi.to ? this : this.rgb();
        return i = i.round(typeof r == "number" ? r : 1), r = i.valpha === 1 ? i.color : i.color.concat(this.valpha), Xi.to[i.model](r);
      },
      percentString: function(r) {
        return r = this.rgb().round(typeof r == "number" ? r : 1), r = r.valpha === 1 ? r.color : r.color.concat(this.valpha), Xi.to.rgb.percent(r);
      },
      array: function() {
        return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
      },
      object: function() {
        for (var r = {}, i = He[this.model].channels, t = He[this.model].labels, e = 0; e < i; e++)
          r[t[e]] = this.color[e];
        return this.valpha !== 1 && (r.alpha = this.valpha), r;
      },
      unitArray: function() {
        var r = this.rgb().color;
        return r[0] /= 255, r[1] /= 255, r[2] /= 255, this.valpha !== 1 && r.push(this.valpha), r;
      },
      unitObject: function() {
        var r = this.rgb().object();
        return r.r /= 255, r.g /= 255, r.b /= 255, this.valpha !== 1 && (r.alpha = this.valpha), r;
      },
      round: function(r) {
        return r = Math.max(r || 0, 0), new V(
          this.color.map(J(r)).concat(this.valpha),
          this.model
        );
      },
      alpha: function(r) {
        return arguments.length ? new V(this.color.concat(Math.max(0, Math.min(1, r))), this.model) : this.valpha;
      },
      red: rt("rgb", 0, tt(255)),
      green: rt("rgb", 1, tt(255)),
      blue: rt("rgb", 2, tt(255)),
      hue: rt(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function(r) {
        return (r % 360 + 360) % 360;
      }),
      saturationl: rt("hsl", 1, tt(100)),
      lightness: rt("hsl", 2, tt(100)),
      saturationv: rt("hsv", 1, tt(100)),
      value: rt("hsv", 2, tt(100)),
      chroma: rt("hcg", 1, tt(100)),
      gray: rt("hcg", 2, tt(100)),
      white: rt("hwb", 1, tt(100)),
      wblack: rt("hwb", 2, tt(100)),
      cyan: rt("cmyk", 0, tt(100)),
      magenta: rt("cmyk", 1, tt(100)),
      yellow: rt("cmyk", 2, tt(100)),
      black: rt("cmyk", 3, tt(100)),
      x: rt("xyz", 0, tt(100)),
      y: rt("xyz", 1, tt(100)),
      z: rt("xyz", 2, tt(100)),
      l: rt("lab", 0, tt(100)),
      a: rt("lab", 1),
      b: rt("lab", 2),
      keyword: function(r) {
        return arguments.length ? new V(r) : He[this.model].keyword(this.color);
      },
      hex: function(r) {
        return arguments.length ? new V(r) : Xi.to.hex(this.rgb().round().color);
      },
      rgbNumber: function() {
        var r = this.rgb().color;
        return (r[0] & 255) << 16 | (r[1] & 255) << 8 | r[2] & 255;
      },
      luminosity: function() {
        for (var r = this.rgb().color, i = [], t = 0; t < r.length; t++) {
          var e = r[t] / 255;
          i[t] = 0.03928 >= e ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2];
      },
      contrast: function(r) {
        var i = this.luminosity();
        return r = r.luminosity(), i > r ? (i + 0.05) / (r + 0.05) : (r + 0.05) / (i + 0.05);
      },
      level: function(r) {
        return r = this.contrast(r), 7.1 <= r ? "AAA" : 4.5 <= r ? "AA" : "";
      },
      isDark: function() {
        var r = this.rgb().color;
        return 128 > (299 * r[0] + 587 * r[1] + 114 * r[2]) / 1e3;
      },
      isLight: function() {
        return !this.isDark();
      },
      negate: function() {
        for (var r = this.rgb(), i = 0; 3 > i; i++)
          r.color[i] = 255 - r.color[i];
        return r;
      },
      lighten: function(r) {
        var i = this.hsl();
        return i.color[2] += i.color[2] * r, i;
      },
      darken: function(r) {
        var i = this.hsl();
        return i.color[2] -= i.color[2] * r, i;
      },
      saturate: function(r) {
        var i = this.hsl();
        return i.color[1] += i.color[1] * r, i;
      },
      desaturate: function(r) {
        var i = this.hsl();
        return i.color[1] -= i.color[1] * r, i;
      },
      whiten: function(r) {
        var i = this.hwb();
        return i.color[1] += i.color[1] * r, i;
      },
      blacken: function(r) {
        var i = this.hwb();
        return i.color[2] += i.color[2] * r, i;
      },
      grayscale: function() {
        var r = this.rgb().color;
        return r = 0.3 * r[0] + 0.59 * r[1] + 0.11 * r[2], V.rgb(r, r, r);
      },
      fade: function(r) {
        return this.alpha(this.valpha - this.valpha * r);
      },
      opaquer: function(r) {
        return this.alpha(this.valpha + this.valpha * r);
      },
      rotate: function(r) {
        var i = this.hsl(), t = i.color[0];
        return t = (t + r) % 360, i.color[0] = 0 > t ? 360 + t : t, i;
      },
      mix: function(r, i) {
        if (!r || !r.rgb)
          throw Error('Argument to "mix" was not a Color instance, but rather an instance of ' + (typeof r > "u" ? "undefined" : be(r)));
        r = r.rgb();
        var t = this.rgb();
        i = i === void 0 ? 0.5 : i;
        var e = 2 * i - 1, a = r.alpha() - t.alpha();
        return e = ((e * a === -1 ? e : (e + a) / (1 + e * a)) + 1) / 2, a = 1 - e, V.rgb(e * r.red() + a * t.red(), e * r.green() + a * t.green(), e * r.blue() + a * t.blue(), r.alpha() * i + t.alpha() * (1 - i));
      }
    }, de(He).forEach(function(r) {
      if (ou.indexOf(r) === -1) {
        var i = He[r].channels;
        V.prototype[r] = function() {
          if (this.model === r)
            return new V(this);
          if (arguments.length)
            return new V(arguments, r);
          var t = typeof arguments[i] == "number" ? i : this.valpha, e = He[this.model][r].raw(this.color);
          return e = Array.isArray(e) ? e : [e], new V(e.concat(t), r);
        }, V[r] = function(t) {
          return typeof t == "number" && (t = st(jo.call(arguments), i)), new V(t, r);
        };
      }
    }), $(nt.prototype, { equals: function(r) {
      return this.lat === r.lat && this.lng === r.lng;
    }, clone: function() {
      return new nt(this.lat, this.lng);
    }, getLngSpan: function(r) {
      return r = Math.abs(r - this.lng), 180 < r && (r = 360 - r), r;
    }, sub: function(r) {
      return new nt(this.lat - r.lat, this.lng - r.lng);
    }, toString: function() {
      return "Point";
    } }), $(q, { EARTHRADIUS: 637099681e-2, MCBAND: [1289059486e-2, 836237787e-2, 5591021, 348198983e-2, 167804312e-2, 0], LLBAND: [75, 60, 45, 30, 15, 0], MC2LL: [[
      1410526172116255e-23,
      898305509648872e-20,
      -1.9939833816331,
      200.9824383106796,
      -187.2403703815547,
      91.6087516669843,
      -23.38765649603339,
      2.57121317296198,
      -0.03801003308653,
      173379812e-1
    ], [-7435856389565537e-24, 8983055097726239e-21, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1026014486e-2], [
      -3030883460898826e-23,
      898305509983578e-20,
      0.30071316287616,
      59.74293618442277,
      7.357984074871,
      -25.38371002664745,
      13.45380521110908,
      -3.29883767235584,
      0.32710905363475,
      685681737e-2
    ], [-1981981304930552e-23, 8983055099779535e-21, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 448277706e-2], [309191371068437e-23, 8983055096812155e-21, 6995724062e-14, 23.10934304144901, -23663490511e-14, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 25551644e-1], [
      2890871144776878e-24,
      8983055095805407e-21,
      -3068298e-14,
      7.47137025468032,
      -353937994e-14,
      -0.02145144861037,
      -1234426596e-14,
      10322952773e-14,
      -323890364e-14,
      826088.5
    ]], LL2MC: [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [8277824516172526e-19, 111320.7020463578, 6477955746671607e-7, -4082003173641316e-6, 1077490566351142e-5, -1517187553151559e-5, 1205306533862167e-5, -5124939663577472e-6, 9133119359512032e-7, 67.5], [
      0.00337398766765,
      111320.7020202162,
      4481351045890365e-9,
      -2339375119931662e-8,
      7968221547186455e-8,
      -1159649932797253e-7,
      9723671115602145e-8,
      -4366194633752821e-8,
      8477230501135234e-9,
      52.5
    ], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837749470245e-9, 992013.7397791013, -122195221711287e-8, 1340652697009075e-9, -620943.6990984312, 144416.9293806241, 37.5], [-3441963504368392e-19, 111320.7020576856, 278.2353980772752, 2485758690035394e-9, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [
      -3218135878613132e-19,
      111320.7020701615,
      0.00369383431289,
      823725.6402795718,
      0.46104986909093,
      2351.343141331292,
      1.58060784298199,
      8.77738589078284,
      0.37238884252424,
      7.45
    ]], getDistanceByMC: function(r, i) {
      if (!r || !i || (r = this.convertMC2LL(r), !r))
        return 0;
      var t = this.toRadians(r.lng);
      if (r = this.toRadians(r.lat), i = this.convertMC2LL(i), !i)
        return 0;
      var e = this.toRadians(i.lng);
      return i = this.toRadians(i.lat), this.getDistance(t, e, r, i);
    }, getDistanceByLL: function(r, i) {
      if (!r || !i)
        return 0;
      r.lng = this.getLoop(r.lng, -180, 180), r.lat = this.getRange(r.lat, -74, 74), i.lng = this.getLoop(i.lng, -180, 180), i.lat = this.getRange(i.lat, -74, 74);
      var t = this.toRadians(r.lng), e = this.toRadians(r.lat);
      return r = this.toRadians(i.lng), i = this.toRadians(i.lat), this.getDistance(t, r, e, i);
    }, convertMC2LL: function(r) {
      if (r == null)
        return new nt(0, 0);
      if (180 > r.lng && -180 < r.lng && 90 > r.lat && -90 < r.lat)
        return r;
      if (window.BMAPGL_84)
        return new nt(180 / Math.PI * (2 * Math.atan(Math.exp(r.lat / 2003750834e-2 * 180 * Math.PI / 180)) - Math.PI / 2), r.lng / 2003750834e-2 * 180);
      for (var i = new nt(Math.abs(r.lng), Math.abs(r.lat)), t = 0; t < this.MCBAND.length; t++)
        if (i.lat >= this.MCBAND[t]) {
          var e = this.MC2LL[t];
          break;
        }
      return r = this.convertor(r, e), r = new nt(r.lng.toFixed(6), r.lat.toFixed(6));
    }, convertLL2MC: function(r) {
      if (r == null)
        return new nt(0, 0);
      if (180 < r.lng || -180 > r.lng || 90 < r.lat || -90 > r.lat)
        return r;
      if (window.BMAPGL_84) {
        var i = r.lat * Math.PI / 180;
        return new nt(r.lng * Math.PI / 180 * 6378137, 31890685e-1 * Math.log((1 + Math.sin(i)) / (1 - Math.sin(i))));
      }
      r.lng = this.getLoop(r.lng, -180, 180), r.lat = this.getRange(r.lat, -74, 74), i = new nt(r.lng, r.lat);
      for (var t = 0; t < this.LLBAND.length; t++)
        if (i.lat >= this.LLBAND[t]) {
          var e = this.LL2MC[t];
          break;
        }
      if (!e) {
        for (t = 0; t < this.LLBAND.length; t++)
          if (i.lat <= -this.LLBAND[t]) {
            e = this.LL2MC[t];
            break;
          }
      }
      return r = this.convertor(r, e), r = new nt(Number(r.lng.toFixed(2)), Number(r.lat.toFixed(2)));
    }, convertor: function(r, i) {
      if (r && i) {
        var t = i[0] + i[1] * Math.abs(r.lng), e = Math.abs(r.lat) / i[9];
        return i = i[2] + i[3] * e + i[4] * e * e + i[5] * e * e * e + i[6] * e * e * e * e + i[7] * e * e * e * e * e + i[8] * e * e * e * e * e * e, t *= 0 > r.lng ? -1 : 1, i *= 0 > r.lat ? -1 : 1, new nt(t, i);
      }
    }, getDistance: function(r, i, t, e) {
      return this.EARTHRADIUS * Math.acos(Math.sin(t) * Math.sin(e) + Math.cos(t) * Math.cos(e) * Math.cos(i - r));
    }, toRadians: function(r) {
      return Math.PI * r / 180;
    }, toDegrees: function(r) {
      return 180 * r / Math.PI;
    }, getRange: function(r, i, t) {
      return i != null && (r = Math.max(r, i)), t != null && (r = Math.min(r, t)), r;
    }, getLoop: function(r, i, t) {
      for (; r > t; )
        r -= t - i;
      for (; r < i; )
        r += t - i;
      return r;
    } }), $(q.prototype, { lngLatToMercator: function(r) {
      return q.convertLL2MC(r);
    }, lngLatToPoint: function(r) {
      return r = q.convertLL2MC(r), new At(r.lng, r.lat);
    }, mercatorToLngLat: function(r) {
      return q.convertMC2LL(r);
    }, pointToLngLat: function(r) {
      return r = new nt(r.x, r.y), q.convertMC2LL(r);
    }, pointToPixel: function(r, i, t, e, a) {
      if (r)
        return r = this.lngLatToMercator(r, a), i = this.getZoomUnits(i), new At(Math.round((r.lng - t.lng) / i + e.width / 2), Math.round((t.lat - r.lat) / i + e.height / 2));
    }, pixelToPoint: function(r, i, t, e, a) {
      if (r)
        return i = this.getZoomUnits(i), r = new nt(t.lng + i * (r.x - e.width / 2), t.lat - i * (r.y - e.height / 2)), this.mercatorToLngLat(r, a);
    }, getZoomUnits: function(r) {
      return Math.pow(2, 18 - r);
    } }), gt.prototype.setMax = function(r) {
      this.max = r || 100;
    }, gt.prototype.setMin = function(r) {
      this.min = r || 0;
    }, gt.prototype.setMaxSize = function(r) {
      this.maxSize = r || 35;
    }, gt.prototype.setMinSize = function(r) {
      this.minSize = r || 0;
    }, gt.prototype.initPalette = function() {
      var r = this.gradient, i = this.paletteCtx = new mt(256, 1).getContext("2d"), t = i.createLinearGradient(0, 0, 256, 1);
      de(r).forEach(function(e) {
        t.addColorStop(parseFloat(e), r[e]);
      }), i.fillStyle = t, i.fillRect(0, 0, 256, 1), i.imageData = i.getImageData(0, 0, 256, 1).data;
    }, gt.prototype.getColor = function(r) {
      return r = this.getImageData(r), "rgba(" + r[0] + ", " + r[1] + ", " + r[2] + ", " + r[3] / 256 + ")";
    }, gt.prototype.getImageData = function(r) {
      var i = this.paletteCtx.imageData;
      if (r === void 0)
        return i;
      var t = this.max, e = this.min;
      return r > t && (r = t), r < e && (r = e), r = 4 * Math.floor((r - e) / (t - e) * 255), [i[r], i[r + 1], i[r + 2], i[r + 3]];
    }, gt.prototype.getSize = function(r) {
      var i = this.max, t = this.min, e = this.maxSize, a = this.minSize;
      return r > i && (r = i), r < t && (r = t), a + (r - t) / (i - t) * (e - a);
    }, ht.prototype._initialize = function() {
      this.v0 = this._normalizaCoord(this.options.start), this.v3 = this._normalizaCoord(this.options.end), this.v1 = this._getControlPoint(this.v0, this.v3, 4), this.v2 = this._getControlPoint(this.v3, this.v0, 5), this.v0[2] || (this.v0[2] = 0), this.v3[2] || (this.v3[2] = 0);
    }, ht.prototype.setOptions = function(r) {
      this.options = r || {}, this._initialize();
    }, ht.prototype.getPoints = function(r) {
      r === void 0 && (r = 20);
      for (var i = [], t = 0; t <= r; t++)
        i.push(this._getPoint(t / r));
      return i;
    }, ht.prototype._normalizaCoord = function(r) {
      return r ? (r = q.convertLL2MC({ lng: Number(r[0]), lat: Number(r[1]) }), [r.lng, r.lat]) : [];
    }, ht.prototype._getControlPoint = function(r, i) {
      var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : 1;
      return [].concat(bt(this._getQuarter(r, i)), [this._getDistance(r, i) / t]);
    }, ht.prototype._getQuarter = function(r, i) {
      return [(3 * r[0] + i[0]) / 4, (3 * r[1] + i[1]) / 4];
    }, ht.prototype._getDistance = function(r, i) {
      return Math.sqrt(Math.pow(r[0] - i[0], 2) + Math.pow(r[1] - i[1], 2));
    }, ht.prototype._getPoint = function(r) {
      var i = [], t = this.v0, e = this.v1, a = this.v2, n = this.v3;
      return i.push(xt(r, t[0], e[0], a[0], n[0]), xt(r, t[1], e[1], a[1], n[1]), xt(r, t[2], e[2], a[2], n[2])), i;
    }, ot.prototype._initialize = function() {
      this.points = this.options.points || this.options.point || [], this.greatCirclePoints = [];
      for (var r = [], i = 0; i < this.points.length; i++) {
        var t = this._normalizaCoord(this.points[i]);
        t && r.push(t);
      }
      this.points = r;
    }, ot.prototype.setOptions = function(r) {
      this.options = r || {}, this._initialize();
    }, ot.prototype.getPoints = function() {
      if (this.greatCirclePoints.length === 0)
        for (var r = 0; r < this.points.length - 1; r++)
          this._calcGreatCirclePoints(this.points[r], this.points[r + 1]);
      return this.greatCirclePoints;
    }, ot.prototype._normalizaCoord = function(r) {
      if (!r)
        return null;
      r instanceof Array && (r = { lng: Number(r[0]), lat: Number(r[1]) });
      var i = q.convertLL2MC(r);
      return r = q.convertMC2LL(r), i.latLng = r, i;
    }, ot.prototype._calcGreatCirclePoints = function(r, i) {
      var t = r.latLng, e = i.latLng;
      if (!k(t.lng, e.lng) || !k(t.lat, e.lat)) {
        var a = q.getDistance(D(t.lng), D(t.lat), D(e.lng), D(e.lat));
        if (!(25e4 > a)) {
          a = Math.round(a / 15e4);
          var n = this._calcAngularDistance(t, e);
          this.greatCirclePoints.push([r.lng, r.lat]);
          for (var s = 0; s < a; s++) {
            var o = this._calcMiddlePoint(t, e, s / a, n);
            o = q.convertLL2MC(o);
            var u = at(o, r);
            30037726 < u && (o.lng = o.lng < r.lng ? o.lng + this.WORLD_SIZE_MC : o.lng - this.WORLD_SIZE_MC), this.greatCirclePoints.push([o.lng, o.lat]), r = o;
          }
          u = at(i, r), 30037726 < u && (i.lng = i.lng < r.lng ? i.lng + this.WORLD_SIZE_MC : i.lng - this.WORLD_SIZE_MC), this.greatCirclePoints.push([i.lng, i.lat]);
        }
      }
    }, ot.prototype._calcAngularDistance = function(r, i) {
      var t = D(r.lat), e = D(i.lat);
      return r = D(r.lng), i = D(i.lng), Math.acos(Math.sin(t) * Math.sin(e) + Math.cos(t) * Math.cos(e) * Math.cos(Math.abs(i - r)));
    }, ot.prototype._calcMiddlePoint = function(r, i, t, e) {
      var a = i.lat, n = r.lng;
      i = i.lng, r = D(r.lat), a = D(a), n = D(n);
      var s = D(i);
      return i = Math.sin((1 - t) * e) / Math.sin(e), e = Math.sin(t * e) / Math.sin(e), t = i * Math.cos(r) * Math.cos(n) + e * Math.cos(a) * Math.cos(s), n = i * Math.cos(r) * Math.sin(n) + e * Math.cos(a) * Math.sin(s), r = Math.atan2(i * Math.sin(r) + e * Math.sin(a), Math.sqrt(Math.pow(t, 2) + Math.pow(n, 2))), new nt(z(Math.atan2(n, t)), z(r));
    };
    var fc = function() {
      function r() {
        var i = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
        ft(this, r), this.options = i, this._initialize();
      }
      return ct(r, [{ key: "_initialize", value: function() {
        this.points = this.options.points;
      } }, { key: "_normalizaCoord", value: function(i) {
        return i ? (i instanceof Array && (i = { lng: Number(i[0]), lat: Number(i[1]) }), q.convertLL2MC(i)) : null;
      } }, { key: "setOptions", value: function() {
        this.options = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, this._initialize();
      } }, { key: "getPoints", value: function(i) {
        for (var t = [], e = this.points, a = 0; a < e.length - 1; a++) {
          var n = this.getCurveByTwoPoints(
            this._normalizaCoord(e[a]),
            this._normalizaCoord(e[a + 1]),
            i
          );
          n && 0 < n.length && (t = t.concat(n));
        }
        return t;
      } }, { key: "getCurveByTwoPoints", value: function(i, t) {
        var e = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : 20;
        if (!i || !t)
          return null;
        var a = [], n = 0;
        if ((typeof t > "u" ? "undefined" : be(t)) === void 0)
          typeof a > "u" || be(a);
        else {
          var s = parseFloat(i.lat), o = parseFloat(t.lat), u = parseFloat(i.lng), c = parseFloat(t.lng);
          c > u && 180 < parseFloat(c - u) && 0 > u && (u = parseFloat(360 + u), c = parseFloat(360 + c));
          var v = 0;
          if (o === s)
            var l = 0, f = u - c;
          else
            c === u ? (l = Math.PI / 2, f = s - o) : (l = Math.atan((o - s) / (c - u)), f = (o - s) / Math.sin(l));
          for (v === 0 && (v = l + Math.PI / 5), f /= 2, l = f * Math.cos(v) + u, v = f * Math.sin(v) + s, f = 0; f < e + 1; f++) {
            var p = u * (1 - 2 * n + n * n) + l * (2 * n - 2 * n * n) + c * n * n, d = t.lng;
            a.push([0 > i.lng && 0 < d ? p - 360 : p, s * (1 - 2 * n + n * n) + v * (2 * n - 2 * n * n) + o * n * n]), n += 1 / e;
          }
          return a;
        }
      } }]), r;
    }(), Xo = [{ n: "北京", g: "116.395645,39.929986|12" }, { n: "上海", g: "121.487899,31.249162|12" }, { n: "天津", g: "117.210813,39.14393|12" }, { n: "重庆", g: "106.530635,29.544606|12" }], Yr = [
      { n: "安徽", g: "117.216005,31.859252|8", cities: [
        { n: "合肥", g: "117.282699,31.866942|12" },
        { n: "安庆", g: "117.058739,30.537898|13" },
        { n: "蚌埠", g: "117.35708,32.929499|13" },
        { n: "亳州", g: "115.787928,33.871211|13" },
        { n: "巢湖", g: "117.88049,31.608733|13" },
        { n: "池州", g: "117.494477,30.660019|14" },
        { n: "滁州", g: "118.32457,32.317351|13" },
        { n: "阜阳", g: "115.820932,32.901211|13" },
        { n: "淮北", g: "116.791447,33.960023|13" },
        { n: "淮南", g: "117.018639,32.642812|13" },
        { n: "黄山", g: "118.29357,29.734435|13" },
        { n: "六安", g: "116.505253,31.755558|13" },
        { n: "马鞍山", g: "118.515882,31.688528|13" },
        { n: "宿州", g: "116.988692,33.636772|13" },
        { n: "铜陵", g: "117.819429,30.94093|14" },
        { n: "芜湖", g: "118.384108,31.36602|12" },
        { n: "宣城", g: "118.752096,30.951642|13" }
      ] },
      { n: "福建", g: "117.984943,26.050118|8", cities: [
        { n: "福州", g: "119.330221,26.047125|12" },
        { n: "龙岩", g: "117.017997,25.078685|13" },
        { n: "南平", g: "118.181883,26.643626|13" },
        { n: "宁德", g: "119.542082,26.656527|14" },
        { n: "莆田", g: "119.077731,25.44845|13" },
        { n: "泉州", g: "118.600362,24.901652|12" },
        { n: "三明", g: "117.642194,26.270835|14" },
        { n: "厦门", g: "118.103886,24.489231|12" },
        { n: "漳州", g: "117.676205,24.517065|12" }
      ] },
      { n: "甘肃", g: "102.457625,38.103267|6", cities: [{ n: "兰州", g: "103.823305,36.064226|12" }, { n: "白银", g: "104.171241,36.546682|13" }, { n: "定西", g: "104.626638,35.586056|13" }, {
        n: "甘南州",
        g: "102.917442,34.992211|14"
      }, { n: "嘉峪关", g: "98.281635,39.802397|13" }, { n: "金昌", g: "102.208126,38.516072|13" }, { n: "酒泉", g: "98.508415,39.741474|13" }, { n: "临夏州", g: "103.215249,35.598514|13" }, { n: "陇南", g: "104.934573,33.39448|14" }, { n: "平凉", g: "106.688911,35.55011|13" }, { n: "庆阳", g: "107.644227,35.726801|13" }, { n: "天水", g: "105.736932,34.584319|13" }, { n: "武威", g: "102.640147,37.933172|13" }, { n: "张掖", g: "100.459892,38.93932|13" }] },
      { n: "广东", g: "113.394818,23.408004|8", cities: [
        { n: "广州", g: "113.30765,23.120049|12" },
        { n: "潮州", g: "116.630076,23.661812|13" },
        { n: "东莞", g: "113.763434,23.043024|12" },
        { n: "佛山", g: "113.134026,23.035095|13" },
        { n: "河源", g: "114.713721,23.757251|12" },
        { n: "惠州", g: "114.410658,23.11354|12" },
        { n: "江门", g: "113.078125,22.575117|13" },
        { n: "揭阳", g: "116.379501,23.547999|13" },
        { n: "茂名", g: "110.931245,21.668226|13" },
        { n: "梅州", g: "116.126403,24.304571|13" },
        { n: "清远", g: "113.040773,23.698469|13" },
        { n: "汕头", g: "116.72865,23.383908|13" },
        { n: "汕尾", g: "115.372924,22.778731|14" },
        { n: "韶关", g: "113.594461,24.80296|13" },
        { n: "深圳", g: "114.025974,22.546054|12" },
        { n: "阳江", g: "111.97701,21.871517|14" },
        { n: "云浮", g: "112.050946,22.937976|13" },
        { n: "湛江", g: "110.365067,21.257463|13" },
        { n: "肇庆", g: "112.479653,23.078663|13" },
        { n: "中山", g: "113.42206,22.545178|12" },
        { n: "珠海", g: "113.562447,22.256915|13" }
      ] },
      { n: "广西", g: "108.924274,23.552255|7", cities: [
        { n: "南宁", g: "108.297234,22.806493|12" },
        { n: "百色", g: "106.631821,23.901512|13" },
        { n: "北海", g: "109.122628,21.472718|13" },
        { n: "崇左", g: "107.357322,22.415455|14" },
        { n: "防城港", g: "108.351791,21.617398|15" },
        { n: "桂林", g: "110.26092,25.262901|12" },
        { n: "贵港", g: "109.613708,23.103373|13" },
        { n: "河池", g: "108.069948,24.699521|14" },
        { n: "贺州", g: "111.552594,24.411054|14" },
        { n: "来宾", g: "109.231817,23.741166|14" },
        { n: "柳州", g: "109.422402,24.329053|12" },
        { n: "钦州", g: "108.638798,21.97335|13" },
        { n: "梧州", g: "111.305472,23.485395|13" },
        { n: "玉林", g: "110.151676,22.643974|14" }
      ] },
      { n: "贵州", g: "106.734996,26.902826|8", cities: [
        { n: "贵阳", g: "106.709177,26.629907|12" },
        { n: "安顺", g: "105.92827,26.228595|13" },
        { n: "毕节地区", g: "105.300492,27.302612|14" },
        { n: "六盘水", g: "104.852087,26.591866|13" },
        { n: "铜仁地区", g: "109.196161,27.726271|14" },
        { n: "遵义", g: "106.93126,27.699961|13" },
        { n: "黔西南州", g: "104.900558,25.095148|11" },
        { n: "黔东南州", g: "107.985353,26.583992|11" },
        { n: "黔南州", g: "107.523205,26.264536|11" }
      ] },
      { n: "海南", g: "109.733755,19.180501|9", cities: [
        { n: "海口", g: "110.330802,20.022071|13" },
        { n: "白沙", g: "109.358586,19.216056|12" },
        { n: "保亭", g: "109.656113,18.597592|12" },
        { n: "昌江", g: "109.0113,19.222483|12" },
        { n: "儋州", g: "109.413973,19.571153|13" },
        { n: "澄迈", g: "109.996736,19.693135|13" },
        { n: "东方", g: "108.85101,18.998161|13" },
        { n: "定安", g: "110.32009,19.490991|13" },
        { n: "琼海", g: "110.414359,19.21483|13" },
        { n: "琼中", g: "109.861849,19.039771|12" },
        { n: "乐东", g: "109.062698,18.658614|12" },
        { n: "临高", g: "109.724101,19.805922|13" },
        { n: "陵水", g: "109.948661,18.575985|12" },
        { n: "三亚", g: "109.522771,18.257776|12" },
        { n: "屯昌", g: "110.063364,19.347749|13" },
        { n: "万宁", g: "110.292505,18.839886|13" },
        { n: "文昌", g: "110.780909,19.750947|13" },
        { n: "五指山", g: "109.51775,18.831306|13" }
      ] },
      { n: "河北", g: "115.661434,38.61384|7", cities: [{ n: "石家庄", g: "114.522082,38.048958|12" }, { n: "保定", g: "115.49481,38.886565|13" }, { n: "沧州", g: "116.863806,38.297615|13" }, { n: "承德", g: "117.933822,40.992521|14" }, { n: "邯郸", g: "114.482694,36.609308|13" }, { n: "衡水", g: "115.686229,37.746929|13" }, { n: "廊坊", g: "116.703602,39.518611|13" }, {
        n: "秦皇岛",
        g: "119.604368,39.945462|12"
      }, { n: "唐山", g: "118.183451,39.650531|13" }, { n: "邢台", g: "114.520487,37.069531|13" }, { n: "张家口", g: "114.893782,40.811188|13" }] },
      { n: "河南", g: "113.486804,34.157184|7", cities: [
        { n: "郑州", g: "113.649644,34.75661|12" },
        { n: "安阳", g: "114.351807,36.110267|12" },
        { n: "鹤壁", g: "114.29777,35.755426|13" },
        { n: "焦作", g: "113.211836,35.234608|13" },
        { n: "开封", g: "114.351642,34.801854|13" },
        { n: "洛阳", g: "112.447525,34.657368|12" },
        { n: "漯河", g: "114.046061,33.576279|13" },
        { n: "南阳", g: "112.542842,33.01142|13" },
        { n: "平顶山", g: "113.300849,33.745301|13" },
        { n: "濮阳", g: "115.026627,35.753298|12" },
        { n: "三门峡", g: "111.181262,34.78332|13" },
        { n: "商丘", g: "115.641886,34.438589|13" },
        { n: "新乡", g: "113.91269,35.307258|13" },
        { n: "信阳", g: "114.085491,32.128582|13" },
        { n: "许昌", g: "113.835312,34.02674|13" },
        { n: "周口", g: "114.654102,33.623741|13" },
        {
          n: "驻马店",
          g: "114.049154,32.983158|13"
        }
      ] },
      { n: "黑龙江", g: "128.047414,47.356592|6", cities: [
        { n: "哈尔滨", g: "126.657717,45.773225|12" },
        { n: "大庆", g: "125.02184,46.596709|12" },
        { n: "大兴安岭地区", g: "124.196104,51.991789|10" },
        { n: "鹤岗", g: "130.292472,47.338666|13" },
        { n: "黑河", g: "127.50083,50.25069|14" },
        { n: "鸡西", g: "130.941767,45.32154|13" },
        { n: "佳木斯", g: "130.284735,46.81378|12" },
        { n: "牡丹江", g: "129.608035,44.588521|13" },
        { n: "七台河", g: "131.019048,45.775005|14" },
        { n: "齐齐哈尔", g: "123.987289,47.3477|13" },
        { n: "双鸭山", g: "131.171402,46.655102|13" },
        { n: "绥化", g: "126.989095,46.646064|13" },
        { n: "伊春", g: "128.910766,47.734685|14" }
      ] },
      { n: "湖北", g: "112.410562,31.209316|8", cities: [
        { n: "武汉", g: "114.3162,30.581084|12" },
        { n: "鄂州", g: "114.895594,30.384439|14" },
        { n: "恩施", g: "109.517433,30.308978|14" },
        { n: "黄冈", g: "114.906618,30.446109|14" },
        {
          n: "黄石",
          g: "115.050683,30.216127|13"
        },
        { n: "荆门", g: "112.21733,31.042611|13" },
        { n: "荆州", g: "112.241866,30.332591|12" },
        { n: "潜江", g: "112.768768,30.343116|13" },
        { n: "神农架林区", g: "110.487231,31.595768|13" },
        { n: "十堰", g: "110.801229,32.636994|13" },
        { n: "随州", g: "113.379358,31.717858|13" },
        { n: "天门", g: "113.12623,30.649047|13" },
        { n: "仙桃", g: "113.387448,30.293966|13" },
        { n: "咸宁", g: "114.300061,29.880657|13" },
        { n: "襄阳", g: "112.176326,32.094934|12" },
        { n: "孝感", g: "113.935734,30.927955|13" },
        { n: "宜昌", g: "111.310981,30.732758|13" }
      ] },
      { n: "湖南", g: "111.720664,27.695864|7", cities: [
        { n: "长沙", g: "112.979353,28.213478|12" },
        { n: "常德", g: "111.653718,29.012149|12" },
        { n: "郴州", g: "113.037704,25.782264|13" },
        { n: "衡阳", g: "112.583819,26.898164|13" },
        { n: "怀化", g: "109.986959,27.557483|13" },
        { n: "娄底", g: "111.996396,27.741073|13" },
        { n: "邵阳", g: "111.461525,27.236811|13" },
        { n: "湘潭", g: "112.935556,27.835095|13" },
        { n: "湘西州", g: "109.745746,28.317951|14" },
        { n: "益阳", g: "112.366547,28.588088|13" },
        { n: "永州", g: "111.614648,26.435972|13" },
        { n: "岳阳", g: "113.146196,29.378007|13" },
        { n: "张家界", g: "110.48162,29.124889|13" },
        { n: "株洲", g: "113.131695,27.827433|13" }
      ] },
      { n: "江苏", g: "119.368489,33.013797|8", cities: [{ n: "南京", g: "118.778074,32.057236|12" }, { n: "常州", g: "119.981861,31.771397|12" }, { n: "淮安", g: "119.030186,33.606513|12" }, {
        n: "连云港",
        g: "119.173872,34.601549|12"
      }, { n: "南通", g: "120.873801,32.014665|12" }, { n: "苏州", g: "120.619907,31.317987|12" }, { n: "宿迁", g: "118.296893,33.95205|13" }, { n: "泰州", g: "119.919606,32.476053|13" }, { n: "无锡", g: "120.305456,31.570037|12" }, { n: "徐州", g: "117.188107,34.271553|12" }, { n: "盐城", g: "120.148872,33.379862|12" }, { n: "扬州", g: "119.427778,32.408505|13" }, { n: "镇江", g: "119.455835,32.204409|13" }] },
      { n: "江西", g: "115.676082,27.757258|7", cities: [{
        n: "南昌",
        g: "115.893528,28.689578|12"
      }, { n: "抚州", g: "116.360919,27.954545|13" }, { n: "赣州", g: "114.935909,25.845296|13" }, { n: "吉安", g: "114.992039,27.113848|13" }, { n: "景德镇", g: "117.186523,29.303563|12" }, { n: "九江", g: "115.999848,29.71964|13" }, { n: "萍乡", g: "113.859917,27.639544|13" }, { n: "上饶", g: "117.955464,28.457623|13" }, { n: "新余", g: "114.947117,27.822322|13" }, { n: "宜春", g: "114.400039,27.81113|13" }, { n: "鹰潭", g: "117.03545,28.24131|13" }] },
      { n: "吉林", g: "126.262876,43.678846|7", cities: [{ n: "长春", g: "125.313642,43.898338|12" }, { n: "白城", g: "122.840777,45.621086|13" }, { n: "白山", g: "126.435798,41.945859|13" }, { n: "吉林", g: "126.564544,43.871988|12" }, { n: "辽源", g: "125.133686,42.923303|13" }, { n: "四平", g: "124.391382,43.175525|12" }, { n: "松原", g: "124.832995,45.136049|13" }, { n: "通化", g: "125.94265,41.736397|13" }, { n: "延边", g: "129.485902,42.896414|13" }] },
      {
        n: "辽宁",
        g: "122.753592,41.6216|8",
        cities: [
          { n: "沈阳", g: "123.432791,41.808645|12" },
          { n: "鞍山", g: "123.007763,41.118744|13" },
          { n: "本溪", g: "123.778062,41.325838|12" },
          { n: "朝阳", g: "120.446163,41.571828|13" },
          { n: "大连", g: "121.593478,38.94871|12" },
          { n: "丹东", g: "124.338543,40.129023|12" },
          { n: "抚顺", g: "123.92982,41.877304|12" },
          { n: "阜新", g: "121.660822,42.01925|14" },
          { n: "葫芦岛", g: "120.860758,40.74303|13" },
          { n: "锦州", g: "121.147749,41.130879|13" },
          { n: "辽阳", g: "123.172451,41.273339|14" },
          { n: "盘锦", g: "122.073228,41.141248|13" },
          { n: "铁岭", g: "123.85485,42.299757|13" },
          { n: "营口", g: "122.233391,40.668651|13" }
        ]
      },
      { n: "内蒙古", g: "114.415868,43.468238|5", cities: [{ n: "呼和浩特", g: "111.660351,40.828319|12" }, { n: "阿拉善盟", g: "105.695683,38.843075|14" }, { n: "包头", g: "109.846239,40.647119|12" }, { n: "巴彦淖尔", g: "107.423807,40.76918|12" }, { n: "赤峰", g: "118.930761,42.297112|12" }, {
        n: "鄂尔多斯",
        g: "109.993706,39.81649|12"
      }, { n: "呼伦贝尔", g: "119.760822,49.201636|12" }, { n: "通辽", g: "122.260363,43.633756|12" }, { n: "乌海", g: "106.831999,39.683177|13" }, { n: "乌兰察布", g: "113.112846,41.022363|12" }, { n: "锡林郭勒盟", g: "116.02734,43.939705|11" }, { n: "兴安盟", g: "122.048167,46.083757|11" }] },
      { n: "宁夏", g: "106.155481,37.321323|8", cities: [
        { n: "银川", g: "106.206479,38.502621|12" },
        { n: "固原", g: "106.285268,36.021523|13" },
        { n: "石嘴山", g: "106.379337,39.020223|13" },
        { n: "吴忠", g: "106.208254,37.993561|14" },
        { n: "中卫", g: "105.196754,37.521124|14" }
      ] },
      { n: "青海", g: "96.202544,35.499761|7", cities: [
        { n: "西宁", g: "101.767921,36.640739|12" },
        { n: "果洛州", g: "100.223723,34.480485|11" },
        { n: "海东地区", g: "102.085207,36.51761|11" },
        { n: "海北州", g: "100.879802,36.960654|11" },
        { n: "海南州", g: "100.624066,36.284364|11" },
        { n: "海西州", g: "97.342625,37.373799|11" },
        { n: "黄南州", g: "102.0076,35.522852|11" },
        { n: "玉树州", g: "97.013316,33.00624|14" }
      ] },
      { n: "山东", g: "118.527663,36.09929|8", cities: [{ n: "济南", g: "117.024967,36.682785|12" }, { n: "滨州", g: "117.968292,37.405314|12" }, { n: "东营", g: "118.583926,37.487121|12" }, { n: "德州", g: "116.328161,37.460826|12" }, { n: "菏泽", g: "115.46336,35.26244|13" }, { n: "济宁", g: "116.600798,35.402122|13" }, { n: "莱芜", g: "117.684667,36.233654|13" }, {
        n: "聊城",
        g: "115.986869,36.455829|12"
      }, { n: "临沂", g: "118.340768,35.072409|12" }, { n: "青岛", g: "120.384428,36.105215|12" }, { n: "日照", g: "119.50718,35.420225|12" }, { n: "泰安", g: "117.089415,36.188078|13" }, { n: "威海", g: "122.093958,37.528787|13" }, { n: "潍坊", g: "119.142634,36.716115|12" }, { n: "烟台", g: "121.309555,37.536562|12" }, { n: "枣庄", g: "117.279305,34.807883|13" }, { n: "淄博", g: "118.059134,36.804685|12" }] },
      { n: "山西", g: "112.515496,37.866566|7", cities: [{
        n: "太原",
        g: "112.550864,37.890277|12"
      }, { n: "长治", g: "113.120292,36.201664|12" }, { n: "大同", g: "113.290509,40.113744|12" }, { n: "晋城", g: "112.867333,35.499834|13" }, { n: "晋中", g: "112.738514,37.693362|13" }, { n: "临汾", g: "111.538788,36.099745|13" }, { n: "吕梁", g: "111.143157,37.527316|14" }, { n: "朔州", g: "112.479928,39.337672|13" }, { n: "忻州", g: "112.727939,38.461031|12" }, { n: "阳泉", g: "113.569238,37.869529|13" }, { n: "运城", g: "111.006854,35.038859|13" }] },
      { n: "陕西", g: "109.503789,35.860026|7", cities: [{ n: "西安", g: "108.953098,34.2778|12" }, { n: "安康", g: "109.038045,32.70437|13" }, { n: "宝鸡", g: "107.170645,34.364081|12" }, { n: "汉中", g: "107.045478,33.081569|13" }, { n: "商洛", g: "109.934208,33.873907|13" }, { n: "铜川", g: "108.968067,34.908368|13" }, { n: "渭南", g: "109.483933,34.502358|13" }, { n: "咸阳", g: "108.707509,34.345373|13" }, { n: "延安", g: "109.50051,36.60332|13" }, { n: "榆林", g: "109.745926,38.279439|12" }] },
      { n: "四川", g: "102.89916,30.367481|7", cities: [
        { n: "成都", g: "104.067923,30.679943|12" },
        { n: "阿坝州", g: "102.228565,31.905763|15" },
        { n: "巴中", g: "106.757916,31.869189|14" },
        { n: "达州", g: "107.494973,31.214199|14" },
        { n: "德阳", g: "104.402398,31.13114|13" },
        { n: "甘孜州", g: "101.969232,30.055144|15" },
        { n: "广安", g: "106.63572,30.463984|13" },
        { n: "广元", g: "105.819687,32.44104|13" },
        { n: "乐山", g: "103.760824,29.600958|13" },
        {
          n: "凉山州",
          g: "102.259591,27.892393|14"
        },
        { n: "泸州", g: "105.44397,28.89593|14" },
        { n: "南充", g: "106.105554,30.800965|13" },
        { n: "眉山", g: "103.84143,30.061115|13" },
        { n: "绵阳", g: "104.705519,31.504701|12" },
        { n: "内江", g: "105.073056,29.599462|13" },
        { n: "攀枝花", g: "101.722423,26.587571|14" },
        { n: "遂宁", g: "105.564888,30.557491|12" },
        { n: "雅安", g: "103.009356,29.999716|13" },
        { n: "宜宾", g: "104.633019,28.769675|13" },
        { n: "资阳", g: "104.63593,30.132191|13" },
        { n: "自贡", g: "104.776071,29.359157|13" }
      ] },
      { n: "西藏", g: "89.137982,31.367315|6", cities: [{ n: "拉萨", g: "91.111891,29.662557|13" }, { n: "阿里地区", g: "81.107669,30.404557|11" }, { n: "昌都地区", g: "97.185582,31.140576|15" }, { n: "林芝地区", g: "94.349985,29.666941|11" }, { n: "那曲地区", g: "92.067018,31.48068|14" }, { n: "日喀则地区", g: "88.891486,29.269023|14" }, { n: "山南地区", g: "91.750644,29.229027|11" }] },
      { n: "新疆", g: "85.614899,42.127001|6", cities: [
        { n: "乌鲁木齐", g: "87.564988,43.84038|12" },
        { n: "阿拉尔", g: "81.291737,40.61568|13" },
        { n: "阿克苏地区", g: "80.269846,41.171731|12" },
        { n: "阿勒泰地区", g: "88.137915,47.839744|13" },
        { n: "巴音郭楞", g: "86.121688,41.771362|12" },
        { n: "博尔塔拉州", g: "82.052436,44.913651|11" },
        { n: "昌吉州", g: "87.296038,44.007058|13" },
        { n: "哈密地区", g: "93.528355,42.858596|13" },
        { n: "和田地区", g: "79.930239,37.116774|13" },
        { n: "喀什地区", g: "75.992973,39.470627|12" },
        { n: "克拉玛依", g: "84.88118,45.594331|13" },
        { n: "克孜勒苏州", g: "76.137564,39.750346|11" },
        { n: "石河子", g: "86.041865,44.308259|13" },
        { n: "塔城地区", g: "82.974881,46.758684|12" },
        { n: "图木舒克", g: "79.198155,39.889223|13" },
        { n: "吐鲁番地区", g: "89.181595,42.96047|13" },
        { n: "五家渠", g: "87.565449,44.368899|13" },
        { n: "伊犁州", g: "81.297854,43.922248|11" }
      ] },
      { n: "云南", g: "101.592952,24.864213|7", cities: [
        { n: "昆明", g: "102.714601,25.049153|12" },
        { n: "保山", g: "99.177996,25.120489|13" },
        { n: "楚雄州", g: "101.529382,25.066356|13" },
        { n: "大理州", g: "100.223675,25.5969|14" },
        { n: "德宏州", g: "98.589434,24.44124|14" },
        { n: "迪庆州", g: "99.713682,27.831029|14" },
        { n: "红河州", g: "103.384065,23.367718|11" },
        { n: "丽江", g: "100.229628,26.875351|13" },
        { n: "临沧", g: "100.092613,23.887806|14" },
        { n: "怒江州", g: "98.859932,25.860677|14" },
        { n: "普洱", g: "100.980058,22.788778|14" },
        { n: "曲靖", g: "103.782539,25.520758|12" },
        { n: "昭通", g: "103.725021,27.340633|13" },
        { n: "文山", g: "104.089112,23.401781|14" },
        { n: "西双版纳", g: "100.803038,22.009433|13" },
        { n: "玉溪", g: "102.545068,24.370447|13" }
      ] },
      { n: "浙江", g: "119.957202,29.159494|8", cities: [{ n: "杭州", g: "120.219375,30.259244|12" }, {
        n: "湖州",
        g: "120.137243,30.877925|12"
      }, { n: "嘉兴", g: "120.760428,30.773992|13" }, { n: "金华", g: "119.652576,29.102899|12" }, { n: "丽水", g: "119.929576,28.4563|13" }, { n: "宁波", g: "121.579006,29.885259|12" }, { n: "衢州", g: "118.875842,28.95691|12" }, { n: "绍兴", g: "120.592467,30.002365|13" }, { n: "台州", g: "121.440613,28.668283|13" }, { n: "温州", g: "120.690635,28.002838|12" }, { n: "舟山", g: "122.169872,30.03601|13" }] }
    ], Vo = [
      { n: "香港", g: "114.186124,22.293586|11" },
      { n: "澳门", g: "113.557519,22.204118|13" },
      { n: "台湾", g: "120.961454,23.80406|8" }
    ], Vi = void 0, au = function() {
      if (Vi !== void 0)
        return Vi;
      var r = navigator.userAgent, i = "Android;iPhone;SymbianOS;Windows Phone;iPad;iPod".split(";");
      Vi = !1;
      for (var t = 0; t < i.length; t++)
        if (0 < r.indexOf(i[t])) {
          Vi = !0;
          break;
        }
      return Vi;
    }(), Yi = void 0, su = function() {
      if (Yi !== void 0)
        return Yi;
      var r = navigator.userAgent, i = ["iPhone", "iPad", "iPod"];
      Yi = !1;
      for (var t = 0; t < i.length; t++)
        if (0 < r.indexOf(i[t])) {
          Yi = !0;
          break;
        }
      return Yi;
    }(), Yo = new Uint8Array([
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
      0
    ]), jn = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]), hc = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]), uu = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), gr = Array(576);
    Et(gr);
    var Zi = Array(60);
    Et(Zi);
    var Zr = Array(512);
    Et(Zr);
    var Ji = Array(256);
    Et(Ji);
    var Zo = Array(29);
    Et(Zo);
    var Wn = Array(30);
    Et(Wn);
    var lu = void 0, fu = void 0, hu = void 0, Qi = function(r, i) {
      r.pending_buf[r.pending++] = i & 255, r.pending_buf[r.pending++] = i >>> 8 & 255;
    }, Fe = function(r, i, t) {
      r.bi_valid > 16 - t ? (r.bi_buf |= i << r.bi_valid & 65535, Qi(r, r.bi_buf), r.bi_buf = i >> 16 - r.bi_valid, r.bi_valid += t - 16) : (r.bi_buf |= i << r.bi_valid & 65535, r.bi_valid += t);
    }, ar = function(r, i, t) {
      Fe(r, t[2 * i], t[2 * i + 1]);
    }, cu = function(r, i) {
      var t = 0;
      do
        t |= r & 1, r >>>= 1, t <<= 1;
      while (0 < --i);
      return t >>> 1;
    }, du = function(r, i, t) {
      var e = Array(16), a = 0, n;
      for (n = 1; 15 >= n; n++)
        e[n] = a = a + t[n - 1] << 1;
      for (t = 0; t <= i; t++)
        a = r[2 * t + 1], a !== 0 && (r[2 * t] = cu(e[a]++, a));
    }, pu = function(r) {
      var i;
      for (i = 0; 286 > i; i++)
        r.dyn_ltree[2 * i] = 0;
      for (i = 0; 30 > i; i++)
        r.dyn_dtree[2 * i] = 0;
      for (i = 0; 19 > i; i++)
        r.bl_tree[2 * i] = 0;
      r.dyn_ltree[512] = 1, r.opt_len = r.static_len = 0, r.last_lit = r.matches = 0;
    }, vu = function(r) {
      8 < r.bi_valid ? Qi(r, r.bi_buf) : 0 < r.bi_valid && (r.pending_buf[r.pending++] = r.bi_buf), r.bi_buf = 0, r.bi_valid = 0;
    }, gu = function(r, i, t, e) {
      var a = 2 * i, n = 2 * t;
      return r[a] < r[n] || r[a] === r[n] && e[i] <= e[t];
    }, Jo = function(r, i, t) {
      for (var e = r.heap[t], a = t << 1; a <= r.heap_len && (a < r.heap_len && gu(i, r.heap[a + 1], r.heap[a], r.depth) && a++, !gu(i, e, r.heap[a], r.depth)); )
        r.heap[t] = r.heap[a], t = a, a <<= 1;
      r.heap[t] = e;
    }, mu = function(r, i, t) {
      var e = 0;
      if (r.last_lit !== 0)
        do {
          var a = r.pending_buf[r.d_buf + 2 * e] << 8 | r.pending_buf[r.d_buf + 2 * e + 1], n = r.pending_buf[r.l_buf + e];
          if (e++, a === 0)
            ar(r, n, i);
          else {
            var s = Ji[n];
            ar(r, s + 256 + 1, i);
            var o = Yo[s];
            o !== 0 && (n -= Zo[s], Fe(r, n, o)), a--, s = 256 > a ? Zr[a] : Zr[256 + (a >>> 7)], ar(r, s, t), o = jn[s], o !== 0 && (a -= Wn[s], Fe(r, a, o));
          }
        } while (e < r.last_lit);
      ar(r, 256, i);
    }, Qo = function(r, i) {
      var t = i.dyn_tree, e = i.stat_desc.static_tree, a = i.stat_desc.has_stree, n = i.stat_desc.elems, s, o = -1;
      for (r.heap_len = 0, r.heap_max = 573, s = 0; s < n; s++)
        t[2 * s] !== 0 ? (r.heap[++r.heap_len] = o = s, r.depth[s] = 0) : t[2 * s + 1] = 0;
      for (; 2 > r.heap_len; ) {
        var u = r.heap[++r.heap_len] = 2 > o ? ++o : 0;
        t[2 * u] = 1, r.depth[u] = 0, r.opt_len--, a && (r.static_len -= e[2 * u + 1]);
      }
      for (i.max_code = o, s = r.heap_len >> 1; 1 <= s; s--)
        Jo(r, t, s);
      u = n;
      do
        s = r.heap[1], r.heap[1] = r.heap[r.heap_len--], Jo(r, t, 1), e = r.heap[1], r.heap[--r.heap_max] = s, r.heap[--r.heap_max] = e, t[2 * u] = t[2 * s] + t[2 * e], r.depth[u] = (r.depth[s] >= r.depth[e] ? r.depth[s] : r.depth[e]) + 1, t[2 * s + 1] = t[2 * e + 1] = u, r.heap[1] = u++, Jo(
          r,
          t,
          1
        );
      while (2 <= r.heap_len);
      r.heap[--r.heap_max] = r.heap[1], s = i.dyn_tree, u = i.max_code, e = i.stat_desc.static_tree, a = i.stat_desc.has_stree, n = i.stat_desc.extra_bits;
      var c = i.stat_desc.extra_base, v = i.stat_desc.max_length, l, f = 0;
      for (l = 0; 15 >= l; l++)
        r.bl_count[l] = 0;
      for (s[2 * r.heap[r.heap_max] + 1] = 0, i = r.heap_max + 1; 573 > i; i++) {
        var p = r.heap[i];
        if (l = s[2 * s[2 * p + 1] + 1] + 1, l > v && (l = v, f++), s[2 * p + 1] = l, !(p > u)) {
          r.bl_count[l]++;
          var d = 0;
          p >= c && (d = n[p - c]);
          var g = s[2 * p];
          r.opt_len += g * (l + d), a && (r.static_len += g * (e[2 * p + 1] + d));
        }
      }
      if (f !== 0) {
        do {
          for (l = v - 1; r.bl_count[l] === 0; )
            l--;
          r.bl_count[l]--, r.bl_count[l + 1] += 2, r.bl_count[v]--, f -= 2;
        } while (0 < f);
        for (l = v; l !== 0; l--)
          for (p = r.bl_count[l]; p !== 0; )
            e = r.heap[--i], e > u || (s[2 * e + 1] !== l && (r.opt_len += (l - s[2 * e + 1]) * s[2 * e], s[2 * e + 1] = l), p--);
      }
      du(t, o, r.bl_count);
    }, yu = function(r, i, t) {
      var e, a = -1, n = i[1], s = 0, o = 7, u = 4;
      for (n === 0 && (o = 138, u = 3), i[2 * (t + 1) + 1] = 65535, e = 0; e <= t; e++) {
        var c = n;
        n = i[2 * (e + 1) + 1], ++s < o && c === n || (s < u ? r.bl_tree[2 * c] += s : c !== 0 ? (c !== a && r.bl_tree[2 * c]++, r.bl_tree[32]++) : 10 >= s ? r.bl_tree[34]++ : r.bl_tree[36]++, s = 0, a = c, n === 0 ? (o = 138, u = 3) : c === n ? (o = 6, u = 3) : (o = 7, u = 4));
      }
    }, xu = function(r, i, t) {
      var e, a = -1, n = i[1], s = 0, o = 7, u = 4;
      for (n === 0 && (o = 138, u = 3), e = 0; e <= t; e++) {
        var c = n;
        if (n = i[2 * (e + 1) + 1], !(++s < o && c === n)) {
          if (s < u)
            do
              ar(r, c, r.bl_tree);
            while (--s !== 0);
          else
            c !== 0 ? (c !== a && (ar(r, c, r.bl_tree), s--), ar(r, 16, r.bl_tree), Fe(r, s - 3, 2)) : 10 >= s ? (ar(r, 17, r.bl_tree), Fe(r, s - 3, 3)) : (ar(r, 18, r.bl_tree), Fe(r, s - 11, 7));
          s = 0, a = c, n === 0 ? (o = 138, u = 3) : c === n ? (o = 6, u = 3) : (o = 7, u = 4);
        }
      }
    }, cc = function(r) {
      var i = 4093624447, t;
      for (t = 0; 31 >= t; t++, i >>>= 1)
        if (i & 1 && r.dyn_ltree[2 * t] !== 0)
          return 0;
      if (r.dyn_ltree[18] !== 0 || r.dyn_ltree[20] !== 0 || r.dyn_ltree[26] !== 0)
        return 1;
      for (t = 32; 256 > t; t++)
        if (r.dyn_ltree[2 * t] !== 0)
          return 1;
      return 0;
    }, _u = !1, Au = function(r, i, t, e) {
      Fe(r, e ? 1 : 0, 3), vu(r), Qi(r, t), Qi(r, ~t), r.pending_buf.set(r.window.subarray(i, i + t), r.pending), r.pending += t;
    }, Ki = function(r, i, t, e) {
      var a = r & 65535 | 0;
      r = r >>> 16 & 65535 | 0;
      for (var n; t !== 0; ) {
        n = 2e3 < t ? 2e3 : t, t -= n;
        do
          a = a + i[e++] | 0, r = r + a | 0;
        while (--n);
        a %= 65521, r %= 65521;
      }
      return a | r << 16 | 0;
    }, dc = new Uint32Array(function() {
      for (var r, i = [], t = 0; 256 > t; t++) {
        r = t;
        for (var e = 0; 8 > e; e++)
          r = r & 1 ? 3988292384 ^ r >>> 1 : r >>> 1;
        i[t] = r;
      }
      return i;
    }()), xe = function(r, i, t, e) {
      for (t = e + t, r ^= -1; e < t; e++)
        r = r >>> 8 ^ dc[(r ^ i[e]) & 255];
      return r ^ -1;
    }, Jr = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" }, Dt = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_MEM_ERROR: -4,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8
    }, Rr = function(r, i, t) {
      return r.pending_buf[r.d_buf + 2 * r.last_lit] = i >>> 8 & 255, r.pending_buf[r.d_buf + 2 * r.last_lit + 1] = i & 255, r.pending_buf[r.l_buf + r.last_lit] = t & 255, r.last_lit++, i === 0 ? r.dyn_ltree[2 * t]++ : (r.matches++, i--, r.dyn_ltree[2 * (Ji[t] + 256 + 1)]++, r.dyn_dtree[2 * (256 > i ? Zr[i] : Zr[256 + (i >>> 7)])]++), r.last_lit === r.lit_bufsize - 1;
    }, Qr = Dt.Z_NO_FLUSH, pc = Dt.Z_PARTIAL_FLUSH, vc = Dt.Z_FULL_FLUSH, Or = Dt.Z_FINISH, wu = Dt.Z_BLOCK, sr = Dt.Z_OK, Tu = Dt.Z_STREAM_END, qe = Dt.Z_STREAM_ERROR, gc = Dt.Z_DATA_ERROR, Ko = Dt.Z_BUF_ERROR, mc = Dt.Z_DEFAULT_COMPRESSION, yc = Dt.Z_FILTERED, Xn = Dt.Z_HUFFMAN_ONLY, xc = Dt.Z_RLE, _c = Dt.Z_FIXED, Ac = Dt.Z_DEFAULT_STRATEGY, wc = Dt.Z_UNKNOWN, Vn = Dt.Z_DEFLATED, Br = function(r, i) {
      return r.msg = Jr[i], i;
    }, Dr = function(r) {
      for (var i = r.length; 0 <= --i; )
        r[i] = 0;
    }, br = function(r, i, t) {
      return (i << r.hash_shift ^ t) & r.hash_mask;
    }, Fr = function(r) {
      var i = r.state, t = i.pending;
      t > r.avail_out && (t = r.avail_out), t !== 0 && (r.output.set(i.pending_buf.subarray(i.pending_out, i.pending_out + t), r.next_out), r.next_out += t, i.pending_out += t, r.total_out += t, r.avail_out -= t, i.pending -= t, i.pending === 0 && (i.pending_out = 0));
    }, Te = function(r, i) {
      var t = 0 <= r.block_start ? r.block_start : -1, e = r.strstart - r.block_start, a = 0;
      if (0 < r.level) {
        for (r.strm.data_type === 2 && (r.strm.data_type = cc(r)), Qo(r, r.l_desc), Qo(r, r.d_desc), yu(r, r.dyn_ltree, r.l_desc.max_code), yu(r, r.dyn_dtree, r.d_desc.max_code), Qo(
          r,
          r.bl_desc
        ), a = 18; 3 <= a && r.bl_tree[2 * uu[a] + 1] === 0; a--)
          ;
        r.opt_len += 3 * (a + 1) + 14;
        var n = r.opt_len + 3 + 7 >>> 3, s = r.static_len + 3 + 7 >>> 3;
        s <= n && (n = s);
      } else
        n = s = e + 5;
      if (e + 4 <= n && t !== -1)
        Au(r, t, e, i);
      else if (r.strategy === 4 || s === n)
        Fe(r, 2 + (i ? 1 : 0), 3), mu(r, gr, Zi);
      else {
        for (Fe(r, 4 + (i ? 1 : 0), 3), t = r.l_desc.max_code + 1, e = r.d_desc.max_code + 1, a += 1, Fe(r, t - 257, 5), Fe(r, e - 1, 5), Fe(r, a - 4, 4), n = 0; n < a; n++)
          Fe(r, r.bl_tree[2 * uu[n] + 1], 3);
        xu(r, r.dyn_ltree, t - 1), xu(r, r.dyn_dtree, e - 1), mu(r, r.dyn_ltree, r.dyn_dtree);
      }
      pu(r), i && vu(r), r.block_start = r.strstart, Fr(r.strm);
    }, Gt = function(r, i) {
      r.pending_buf[r.pending++] = i;
    }, qi = function(r, i) {
      r.pending_buf[r.pending++] = i >>> 8 & 255, r.pending_buf[r.pending++] = i & 255;
    }, Eu = function(r, i) {
      var t = r.max_chain_length, e = r.strstart, a = r.prev_length, n = r.nice_match, s = r.strstart > r.w_size - 262 ? r.strstart - (r.w_size - 262) : 0, o = r.window, u = r.w_mask, c = r.prev, v = r.strstart + 258, l = o[e + a - 1], f = o[e + a];
      r.prev_length >= r.good_match && (t >>= 2), n > r.lookahead && (n = r.lookahead);
      do {
        var p = i;
        if (o[p + a] === f && o[p + a - 1] === l && o[p] === o[e] && o[++p] === o[e + 1]) {
          for (e += 2, p++; o[++e] === o[++p] && o[++e] === o[++p] && o[++e] === o[++p] && o[++e] === o[++p] && o[++e] === o[++p] && o[++e] === o[++p] && o[++e] === o[++p] && o[++e] === o[++p] && e < v; )
            ;
          if (p = 258 - (v - e), e = v - 258, p > a) {
            if (r.match_start = i, a = p, p >= n)
              break;
            l = o[e + a - 1], f = o[e + a];
          }
        }
      } while ((i = c[i & u]) > s && --t !== 0);
      return a <= r.lookahead ? a : r.lookahead;
    }, Kr = function(r) {
      var i = r.w_size, t;
      do {
        var e = r.window_size - r.lookahead - r.strstart;
        if (r.strstart >= i + (i - 262)) {
          r.window.set(r.window.subarray(i, i + i), 0), r.match_start -= i, r.strstart -= i, r.block_start -= i;
          var a = t = r.hash_size;
          do {
            var n = r.head[--a];
            r.head[a] = n >= i ? n - i : 0;
          } while (--t);
          a = t = i;
          do
            n = r.prev[--a], r.prev[a] = n >= i ? n - i : 0;
          while (--t);
          e += i;
        }
        if (r.strm.avail_in === 0)
          break;
        a = r.strm, t = r.window, n = r.strstart + r.lookahead;
        var s = a.avail_in;
        if (s > e && (s = e), s === 0 ? t = 0 : (a.avail_in -= s, t.set(a.input.subarray(a.next_in, a.next_in + s), n), a.state.wrap === 1 ? a.adler = Ki(a.adler, t, s, n) : a.state.wrap === 2 && (a.adler = xe(a.adler, t, s, n)), a.next_in += s, a.total_in += s, t = s), r.lookahead += t, 3 <= r.lookahead + r.insert)
          for (e = r.strstart - r.insert, r.ins_h = r.window[e], r.ins_h = br(r, r.ins_h, r.window[e + 1]); r.insert && (r.ins_h = br(r, r.ins_h, r.window[e + 3 - 1]), r.prev[e & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = e, e++, r.insert--, !(3 > r.lookahead + r.insert)); )
            ;
      } while (262 > r.lookahead && r.strm.avail_in !== 0);
    }, qo = function(r, i) {
      for (var t; ; ) {
        if (262 > r.lookahead) {
          if (Kr(r), 262 > r.lookahead && i === Qr)
            return 1;
          if (r.lookahead === 0)
            break;
        }
        if (t = 0, 3 <= r.lookahead && (r.ins_h = br(r, r.ins_h, r.window[r.strstart + 3 - 1]), t = r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart), t !== 0 && r.strstart - t <= r.w_size - 262 && (r.match_length = Eu(r, t)), 3 <= r.match_length)
          if (t = Rr(r, r.strstart - r.match_start, r.match_length - 3), r.lookahead -= r.match_length, r.match_length <= r.max_lazy_match && 3 <= r.lookahead) {
            r.match_length--;
            do
              r.strstart++, r.ins_h = br(r, r.ins_h, r.window[r.strstart + 3 - 1]), r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart;
            while (--r.match_length !== 0);
            r.strstart++;
          } else
            r.strstart += r.match_length, r.match_length = 0, r.ins_h = r.window[r.strstart], r.ins_h = br(r, r.ins_h, r.window[r.strstart + 1]);
        else
          t = Rr(r, 0, r.window[r.strstart]), r.lookahead--, r.strstart++;
        if (t && (Te(r, !1), r.strm.avail_out === 0))
          return 1;
      }
      return r.insert = 2 > r.strstart ? r.strstart : 2, i === Or ? (Te(r, !0), r.strm.avail_out === 0 ? 3 : 4) : r.last_lit && (Te(r, !1), r.strm.avail_out === 0) ? 1 : 2;
    }, li = function(r, i) {
      for (var t, e; ; ) {
        if (262 > r.lookahead) {
          if (Kr(r), 262 > r.lookahead && i === Qr)
            return 1;
          if (r.lookahead === 0)
            break;
        }
        if (t = 0, 3 <= r.lookahead && (r.ins_h = br(r, r.ins_h, r.window[r.strstart + 3 - 1]), t = r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart), r.prev_length = r.match_length, r.prev_match = r.match_start, r.match_length = 2, t !== 0 && r.prev_length < r.max_lazy_match && r.strstart - t <= r.w_size - 262 && (r.match_length = Eu(r, t), 5 >= r.match_length && (r.strategy === yc || r.match_length === 3 && 4096 < r.strstart - r.match_start) && (r.match_length = 2)), 3 <= r.prev_length && r.match_length <= r.prev_length) {
          e = r.strstart + r.lookahead - 3, t = Rr(r, r.strstart - 1 - r.prev_match, r.prev_length - 3), r.lookahead -= r.prev_length - 1, r.prev_length -= 2;
          do
            ++r.strstart <= e && (r.ins_h = br(r, r.ins_h, r.window[r.strstart + 3 - 1]), r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart);
          while (--r.prev_length !== 0);
          if (r.match_available = 0, r.match_length = 2, r.strstart++, t && (Te(r, !1), r.strm.avail_out === 0))
            return 1;
        } else if (r.match_available) {
          if ((t = Rr(r, 0, r.window[r.strstart - 1])) && Te(r, !1), r.strstart++, r.lookahead--, r.strm.avail_out === 0)
            return 1;
        } else
          r.match_available = 1, r.strstart++, r.lookahead--;
      }
      return r.match_available && (Rr(r, 0, r.window[r.strstart - 1]), r.match_available = 0), r.insert = 2 > r.strstart ? r.strstart : 2, i === Or ? (Te(r, !0), r.strm.avail_out === 0 ? 3 : 4) : r.last_lit && (Te(r, !1), r.strm.avail_out === 0) ? 1 : 2;
    }, Tc = function(r, i) {
      for (var t, e, a, n = r.window; ; ) {
        if (258 >= r.lookahead) {
          if (Kr(r), 258 >= r.lookahead && i === Qr)
            return 1;
          if (r.lookahead === 0)
            break;
        }
        if (r.match_length = 0, 3 <= r.lookahead && 0 < r.strstart && (e = r.strstart - 1, t = n[e], t === n[++e] && t === n[++e] && t === n[++e])) {
          for (a = r.strstart + 258; t === n[++e] && t === n[++e] && t === n[++e] && t === n[++e] && t === n[++e] && t === n[++e] && t === n[++e] && t === n[++e] && e < a; )
            ;
          r.match_length = 258 - (a - e), r.match_length > r.lookahead && (r.match_length = r.lookahead);
        }
        if (3 <= r.match_length ? (t = Rr(r, 1, r.match_length - 3), r.lookahead -= r.match_length, r.strstart += r.match_length, r.match_length = 0) : (t = Rr(r, 0, r.window[r.strstart]), r.lookahead--, r.strstart++), t && (Te(r, !1), r.strm.avail_out === 0))
          return 1;
      }
      return r.insert = 0, i === Or ? (Te(r, !0), r.strm.avail_out === 0 ? 3 : 4) : r.last_lit && (Te(r, !1), r.strm.avail_out === 0) ? 1 : 2;
    }, Ec = function(r, i) {
      for (var t; ; ) {
        if (r.lookahead === 0 && (Kr(r), r.lookahead === 0)) {
          if (i === Qr)
            return 1;
          break;
        }
        if (r.match_length = 0, t = Rr(r, 0, r.window[r.strstart]), r.lookahead--, r.strstart++, t && (Te(r, !1), r.strm.avail_out === 0))
          return 1;
      }
      return r.insert = 0, i === Or ? (Te(r, !0), r.strm.avail_out === 0 ? 3 : 4) : r.last_lit && (Te(r, !1), r.strm.avail_out === 0) ? 1 : 2;
    }, $i = [new Kt(0, 0, 0, 0, function(r, i) {
      var t = 65535;
      for (t > r.pending_buf_size - 5 && (t = r.pending_buf_size - 5); ; ) {
        if (1 >= r.lookahead) {
          if (Kr(r), r.lookahead === 0 && i === Qr)
            return 1;
          if (r.lookahead === 0)
            break;
        }
        r.strstart += r.lookahead, r.lookahead = 0;
        var e = r.block_start + t;
        if ((r.strstart === 0 || r.strstart >= e) && (r.lookahead = r.strstart - e, r.strstart = e, Te(r, !1), r.strm.avail_out === 0) || r.strstart - r.block_start >= r.w_size - 262 && (Te(r, !1), r.strm.avail_out === 0))
          return 1;
      }
      return r.insert = 0, i === Or ? (Te(r, !0), r.strm.avail_out === 0 ? 3 : 4) : (r.strstart > r.block_start && Te(r, !1), 1);
    }), new Kt(4, 4, 8, 4, qo), new Kt(4, 5, 16, 8, qo), new Kt(4, 6, 32, 32, qo), new Kt(4, 4, 16, 16, li), new Kt(8, 16, 32, 32, li), new Kt(8, 16, 128, 128, li), new Kt(8, 32, 128, 256, li), new Kt(32, 128, 258, 1024, li), new Kt(32, 258, 258, 4096, li)], Mu = function(r) {
      if (!r || !r.state)
        return Br(r, qe);
      r.total_in = r.total_out = 0, r.data_type = wc;
      var i = r.state;
      if (i.pending = 0, i.pending_out = 0, 0 > i.wrap && (i.wrap = -i.wrap), i.status = i.wrap ? 42 : 113, r.adler = i.wrap === 2 ? 0 : 1, i.last_flush = Qr, !_u) {
        var t, e, a;
        for (r = Array(16), a = e = 0; 28 > a; a++)
          for (Zo[a] = e, t = 0; t < 1 << Yo[a]; t++)
            Ji[e++] = a;
        for (Ji[e - 1] = a, a = e = 0; 16 > a; a++)
          for (Wn[a] = e, t = 0; t < 1 << jn[a]; t++)
            Zr[e++] = a;
        for (e >>= 7; 30 > a; a++)
          for (Wn[a] = e << 7, t = 0; t < 1 << jn[a] - 7; t++)
            Zr[256 + e++] = a;
        for (t = 0; 15 >= t; t++)
          r[t] = 0;
        for (t = 0; 143 >= t; )
          gr[2 * t + 1] = 8, t++, r[8]++;
        for (; 255 >= t; )
          gr[2 * t + 1] = 9, t++, r[9]++;
        for (; 279 >= t; )
          gr[2 * t + 1] = 7, t++, r[7]++;
        for (; 287 >= t; )
          gr[2 * t + 1] = 8, t++, r[8]++;
        for (du(gr, 287, r), t = 0; 30 > t; t++)
          Zi[2 * t + 1] = 5, Zi[2 * t] = cu(t, 5);
        lu = new Wt(gr, Yo, 257, 286, 15), fu = new Wt(Zi, jn, 0, 30, 15), hu = new Wt([], hc, 0, 19, 7), _u = !0;
      }
      return i.l_desc = new zt(i.dyn_ltree, lu), i.d_desc = new zt(i.dyn_dtree, fu), i.bl_desc = new zt(i.bl_tree, hu), i.bi_buf = 0, i.bi_valid = 0, pu(i), sr;
    }, Pu = function(r) {
      var i = Mu(r);
      return i === sr && (r = r.state, r.window_size = 2 * r.w_size, Dr(r.head), r.max_lazy_match = $i[r.level].max_lazy, r.good_match = $i[r.level].good_length, r.nice_match = $i[r.level].nice_length, r.max_chain_length = $i[r.level].max_chain, r.strstart = 0, r.block_start = 0, r.lookahead = 0, r.insert = 0, r.match_length = r.prev_length = 2, r.match_available = 0, r.ins_h = 0), i;
    }, Lu = function(r, i, t, e, a, n) {
      if (!r)
        return qe;
      var s = 1;
      if (i === mc && (i = 6), 0 > e ? (s = 0, e = -e) : 15 < e && (s = 2, e -= 16), 1 > a || 9 < a || t !== Vn || 8 > e || 15 < e || 0 > i || 9 < i || 0 > n || n > _c)
        return Br(r, qe);
      e === 8 && (e = 9);
      var o = new qt();
      return r.state = o, o.strm = r, o.wrap = s, o.gzhead = null, o.w_bits = e, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = a + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3), o.window = new Uint8Array(2 * o.w_size), o.head = new Uint16Array(o.hash_size), o.prev = new Uint16Array(o.w_size), o.lit_bufsize = 1 << a + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new Uint8Array(o.pending_buf_size), o.d_buf = 1 * o.lit_bufsize, o.l_buf = 3 * o.lit_bufsize, o.level = i, o.strategy = n, o.method = t, Pu(r);
    }, tn = { deflateInit: function(r, i) {
      return Lu(r, i, Vn, 15, 8, Ac);
    }, deflateInit2: Lu, deflateReset: Pu, deflateResetKeep: Mu, deflateSetHeader: function(r, i) {
      return !r || !r.state || r.state.wrap !== 2 ? qe : (r.state.gzhead = i, sr);
    }, deflate: function(r, i) {
      if (!r || !r.state || i > wu || 0 > i)
        return r ? Br(r, qe) : qe;
      var t = r.state;
      if (!r.output || !r.input && r.avail_in !== 0 || t.status === 666 && i !== Or)
        return Br(r, r.avail_out === 0 ? Ko : qe);
      t.strm = r;
      var e = t.last_flush;
      if (t.last_flush = i, t.status === 42)
        if (t.wrap === 2)
          r.adler = 0, Gt(t, 31), Gt(t, 139), Gt(t, 8), t.gzhead ? (Gt(t, (t.gzhead.text ? 1 : 0) + (t.gzhead.hcrc ? 2 : 0) + (t.gzhead.extra ? 4 : 0) + (t.gzhead.name ? 8 : 0) + (t.gzhead.comment ? 16 : 0)), Gt(t, t.gzhead.time & 255), Gt(t, t.gzhead.time >> 8 & 255), Gt(t, t.gzhead.time >> 16 & 255), Gt(t, t.gzhead.time >> 24 & 255), Gt(t, t.level === 9 ? 2 : t.strategy >= Xn || 2 > t.level ? 4 : 0), Gt(t, t.gzhead.os & 255), t.gzhead.extra && t.gzhead.extra.length && (Gt(t, t.gzhead.extra.length & 255), Gt(t, t.gzhead.extra.length >> 8 & 255)), t.gzhead.hcrc && (r.adler = xe(r.adler, t.pending_buf, t.pending, 0)), t.gzindex = 0, t.status = 69) : (Gt(t, 0), Gt(t, 0), Gt(t, 0), Gt(t, 0), Gt(t, 0), Gt(t, t.level === 9 ? 2 : t.strategy >= Xn || 2 > t.level ? 4 : 0), Gt(t, 3), t.status = 113);
        else {
          var a = Vn + (t.w_bits - 8 << 4) << 8;
          a |= (t.strategy >= Xn || 2 > t.level ? 0 : 6 > t.level ? 1 : t.level === 6 ? 2 : 3) << 6, t.strstart !== 0 && (a |= 32), t.status = 113, qi(t, a + (31 - a % 31)), t.strstart !== 0 && (qi(t, r.adler >>> 16), qi(t, r.adler & 65535)), r.adler = 1;
        }
      if (t.status === 69)
        if (t.gzhead.extra) {
          for (a = t.pending; t.gzindex < (t.gzhead.extra.length & 65535) && (t.pending !== t.pending_buf_size || (t.gzhead.hcrc && t.pending > a && (r.adler = xe(r.adler, t.pending_buf, t.pending - a, a)), Fr(r), a = t.pending, t.pending !== t.pending_buf_size)); )
            Gt(t, t.gzhead.extra[t.gzindex] & 255), t.gzindex++;
          t.gzhead.hcrc && t.pending > a && (r.adler = xe(r.adler, t.pending_buf, t.pending - a, a)), t.gzindex === t.gzhead.extra.length && (t.gzindex = 0, t.status = 73);
        } else
          t.status = 73;
      if (t.status === 73)
        if (t.gzhead.name) {
          a = t.pending;
          do {
            if (t.pending === t.pending_buf_size && (t.gzhead.hcrc && t.pending > a && (r.adler = xe(r.adler, t.pending_buf, t.pending - a, a)), Fr(r), a = t.pending, t.pending === t.pending_buf_size)) {
              var n = 1;
              break;
            }
            n = t.gzindex < t.gzhead.name.length ? t.gzhead.name.charCodeAt(t.gzindex++) & 255 : 0, Gt(t, n);
          } while (n !== 0);
          t.gzhead.hcrc && t.pending > a && (r.adler = xe(
            r.adler,
            t.pending_buf,
            t.pending - a,
            a
          )), n === 0 && (t.gzindex = 0, t.status = 91);
        } else
          t.status = 91;
      if (t.status === 91)
        if (t.gzhead.comment) {
          a = t.pending;
          do {
            if (t.pending === t.pending_buf_size && (t.gzhead.hcrc && t.pending > a && (r.adler = xe(r.adler, t.pending_buf, t.pending - a, a)), Fr(r), a = t.pending, t.pending === t.pending_buf_size)) {
              n = 1;
              break;
            }
            n = t.gzindex < t.gzhead.comment.length ? t.gzhead.comment.charCodeAt(t.gzindex++) & 255 : 0, Gt(t, n);
          } while (n !== 0);
          t.gzhead.hcrc && t.pending > a && (r.adler = xe(r.adler, t.pending_buf, t.pending - a, a)), n === 0 && (t.status = 103);
        } else
          t.status = 103;
      if (t.status === 103 && (t.gzhead.hcrc ? (t.pending + 2 > t.pending_buf_size && Fr(r), t.pending + 2 <= t.pending_buf_size && (Gt(t, r.adler & 255), Gt(t, r.adler >> 8 & 255), r.adler = 0, t.status = 113)) : t.status = 113), t.pending !== 0) {
        if (Fr(r), r.avail_out === 0)
          return t.last_flush = -1, sr;
      } else if (r.avail_in === 0 && (i << 1) - (4 < i ? 9 : 0) <= (e << 1) - (4 < e ? 9 : 0) && i !== Or)
        return Br(r, Ko);
      if (t.status === 666 && r.avail_in !== 0)
        return Br(r, Ko);
      if (r.avail_in !== 0 || t.lookahead !== 0 || i !== Qr && t.status !== 666) {
        if (e = t.strategy === Xn ? Ec(t, i) : t.strategy === xc ? Tc(t, i) : $i[t.level].func(t, i), (e === 3 || e === 4) && (t.status = 666), e === 1 || e === 3)
          return r.avail_out === 0 && (t.last_flush = -1), sr;
        if (e === 2 && (i === pc ? (Fe(t, 2, 3), ar(t, 256, gr), t.bi_valid === 16 ? (Qi(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : 8 <= t.bi_valid && (t.pending_buf[t.pending++] = t.bi_buf & 255, t.bi_buf >>= 8, t.bi_valid -= 8)) : i !== wu && (Au(t, 0, 0, !1), i === vc && (Dr(t.head), t.lookahead === 0 && (t.strstart = 0, t.block_start = 0, t.insert = 0))), Fr(r), r.avail_out === 0))
          return t.last_flush = -1, sr;
      }
      return i !== Or ? sr : 0 >= t.wrap ? Tu : (t.wrap === 2 ? (Gt(t, r.adler & 255), Gt(t, r.adler >> 8 & 255), Gt(t, r.adler >> 16 & 255), Gt(t, r.adler >> 24 & 255), Gt(t, r.total_in & 255), Gt(t, r.total_in >> 8 & 255), Gt(t, r.total_in >> 16 & 255), Gt(t, r.total_in >> 24 & 255)) : (qi(t, r.adler >>> 16), qi(t, r.adler & 65535)), Fr(r), 0 < t.wrap && (t.wrap = -t.wrap), t.pending !== 0 ? sr : Tu);
    }, deflateEnd: function(r) {
      if (!r || !r.state)
        return qe;
      var i = r.state.status;
      return i !== 42 && i !== 69 && i !== 73 && i !== 91 && i !== 103 && i !== 113 && i !== 666 ? Br(r, qe) : (r.state = null, i === 113 ? Br(r, gc) : sr);
    }, deflateSetDictionary: function(r, i) {
      var t = i.length;
      if (!r || !r.state)
        return qe;
      var e = r.state, a = e.wrap;
      if (a === 2 || a === 1 && e.status !== 42 || e.lookahead)
        return qe;
      if (a === 1 && (r.adler = Ki(r.adler, i, t, 0)), e.wrap = 0, t >= e.w_size) {
        a === 0 && (Dr(e.head), e.strstart = 0, e.block_start = 0, e.insert = 0);
        var n = new Uint8Array(e.w_size);
        n.set(i.subarray(t - e.w_size, t), 0), i = n, t = e.w_size;
      }
      n = r.avail_in;
      var s = r.next_in, o = r.input;
      for (r.avail_in = t, r.next_in = 0, r.input = i, Kr(e); 3 <= e.lookahead; ) {
        i = e.strstart, t = e.lookahead - 2;
        do
          e.ins_h = br(e, e.ins_h, e.window[i + 3 - 1]), e.prev[i & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = i, i++;
        while (--t);
        e.strstart = i, e.lookahead = 2, Kr(e);
      }
      return e.strstart += e.lookahead, e.block_start = e.strstart, e.insert = e.lookahead, e.lookahead = 0, e.match_length = e.prev_length = 2, e.match_available = 0, r.next_in = s, r.input = o, r.avail_in = n, e.wrap = a, sr;
    }, deflateInfo: "pako deflate (from Nodeca project)" }, Yn = { assign: function(r) {
      for (var i = Array.prototype.slice.call(arguments, 1); i.length; ) {
        var t = i.shift();
        if (t) {
          if ((typeof t > "u" ? "undefined" : be(t)) !== "object")
            throw new TypeError(t + "must be non-object");
          for (var e in t)
            Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
        }
      }
      return r;
    }, flattenChunks: function(r) {
      for (var i = 0, t = 0, e = r.length; t < e; t++)
        i += r[t].length;
      i = new Uint8Array(i), e = t = 0;
      for (var a = r.length; t < a; t++) {
        var n = r[t];
        i.set(n, e), e += n.length;
      }
      return i;
    } }, Cu = !0;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch {
      Cu = !1;
    }
    for (var en = new Uint8Array(256), Ir = 0; 256 > Ir; Ir++)
      en[Ir] = 252 <= Ir ? 6 : 248 <= Ir ? 5 : 240 <= Ir ? 4 : 224 <= Ir ? 3 : 192 <= Ir ? 2 : 1;
    en[254] = en[254] = 1;
    var rn = { string2buf: function(r) {
      var i, t, e = r.length, a = 0;
      for (i = 0; i < e; i++) {
        var n = r.charCodeAt(i);
        if ((n & 64512) === 55296 && i + 1 < e) {
          var s = r.charCodeAt(i + 1);
          (s & 64512) === 56320 && (n = 65536 + (n - 55296 << 10) + (s - 56320), i++);
        }
        a += 128 > n ? 1 : 2048 > n ? 2 : 65536 > n ? 3 : 4;
      }
      var o = new Uint8Array(a);
      for (i = t = 0; t < a; i++)
        n = r.charCodeAt(i), (n & 64512) === 55296 && i + 1 < e && (s = r.charCodeAt(i + 1), (s & 64512) === 56320 && (n = 65536 + (n - 55296 << 10) + (s - 56320), i++)), 128 > n ? o[t++] = n : (2048 > n ? o[t++] = 192 | n >>> 6 : (65536 > n ? o[t++] = 224 | n >>> 12 : (o[t++] = 240 | n >>> 18, o[t++] = 128 | n >>> 12 & 63), o[t++] = 128 | n >>> 6 & 63), o[t++] = 128 | n & 63);
      return o;
    }, buf2string: function(r, i) {
      var t, e, a = i || r.length;
      for (i = Array(2 * a), t = e = 0; t < a; ) {
        var n = r[t++];
        if (128 > n)
          i[e++] = n;
        else {
          var s = en[n];
          if (4 < s)
            i[e++] = 65533, t += s - 1;
          else {
            for (n &= s === 2 ? 31 : s === 3 ? 15 : 7; 1 < s && t < a; )
              n = n << 6 | r[t++] & 63, s--;
            1 < s ? i[e++] = 65533 : 65536 > n ? i[e++] = n : (n -= 65536, i[e++] = 55296 | n >> 10 & 1023, i[e++] = 56320 | n & 1023);
          }
        }
      }
      if (r = e, 65534 > r && i.subarray && Cu)
        i = String.fromCharCode.apply(null, i.length === r ? i : i.subarray(0, r));
      else {
        for (t = "", e = 0; e < r; e++)
          t += String.fromCharCode(i[e]);
        i = t;
      }
      return i;
    }, utf8border: function(r, i) {
      i = i || r.length, i > r.length && (i = r.length);
      for (var t = i - 1; 0 <= t && (r[t] & 192) === 128; )
        t--;
      return 0 > t || t === 0 ? i : t + en[r[t]] > i ? t : i;
    } }, Su = function() {
      this.input = null, this.total_in = this.avail_in = this.next_in = 0, this.output = null, this.total_out = this.avail_out = this.next_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
    }, Ru = Object.prototype.toString, Mc = Dt.Z_NO_FLUSH, Pc = Dt.Z_SYNC_FLUSH, Lc = Dt.Z_FULL_FLUSH, Cc = Dt.Z_FINISH, Zn = Dt.Z_OK, Sc = Dt.Z_STREAM_END, Rc = Dt.Z_DEFAULT_COMPRESSION, Oc = Dt.Z_DEFAULT_STRATEGY, Bc = Dt.Z_DEFLATED;
    Nt.prototype.push = function(r, i) {
      var t = this.strm, e = this.options.chunkSize;
      if (this.ended)
        return !1;
      for (i = i === ~~i ? i : i === !0 ? Cc : Mc, typeof r == "string" ? t.input = rn.string2buf(r) : Ru.call(r) === "[object ArrayBuffer]" ? t.input = new Uint8Array(r) : t.input = r, t.next_in = 0, t.avail_in = t.input.length; ; )
        if (t.avail_out === 0 && (t.output = new Uint8Array(e), t.next_out = 0, t.avail_out = e), (i === Pc || i === Lc) && 6 >= t.avail_out)
          this.onData(t.output.subarray(0, t.next_out)), t.avail_out = 0;
        else {
          if (r = tn.deflate(t, i), r === Sc)
            return 0 < t.next_out && this.onData(t.output.subarray(
              0,
              t.next_out
            )), r = tn.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === Zn;
          if (t.avail_out === 0)
            this.onData(t.output);
          else if (0 < i && 0 < t.next_out)
            this.onData(t.output.subarray(0, t.next_out)), t.avail_out = 0;
          else if (t.avail_in === 0)
            break;
        }
      return !0;
    }, Nt.prototype.onData = function(r) {
      this.chunks.push(r);
    }, Nt.prototype.onEnd = function(r) {
      r === Zn && (this.result = Yn.flattenChunks(this.chunks)), this.chunks = [], this.err = r, this.msg = this.strm.msg;
    };
    var Dc = new Uint16Array([
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      13,
      15,
      17,
      19,
      23,
      27,
      31,
      35,
      43,
      51,
      59,
      67,
      83,
      99,
      115,
      131,
      163,
      195,
      227,
      258,
      0,
      0
    ]), bc = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]), Fc = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]), Ic = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]), nn = function(r, i, t, e, a, n, s, o) {
      var u = o.bits, c, v, l, f, p, d, g = 0, A = new Uint16Array(16), _ = new Uint16Array(16), M, P = 0;
      for (c = 0; 15 >= c; c++)
        A[c] = 0;
      for (v = 0; v < e; v++)
        A[i[t + v]]++;
      var R = u;
      for (l = 15; 1 <= l && A[l] === 0; l--)
        ;
      if (R > l && (R = l), l === 0)
        return a[n++] = 20971520, a[n++] = 20971520, o.bits = 1, 0;
      for (u = 1; u < l && A[u] === 0; u++)
        ;
      for (R < u && (R = u), c = f = 1; 15 >= c; c++)
        if (f <<= 1, f -= A[c], 0 > f)
          return -1;
      if (0 < f && (r === 0 || l !== 1))
        return -1;
      for (_[1] = 0, c = 1; 15 > c; c++)
        _[c + 1] = _[c] + A[c];
      for (v = 0; v < e; v++)
        i[t + v] !== 0 && (s[_[i[t + v]]++] = v);
      if (r === 0)
        var B = M = s, F = 19;
      else
        r === 1 ? (B = Dc, g -= 257, M = bc, P -= 257, F = 256) : (B = Fc, M = Ic, F = -1);
      v = p = 0, c = u;
      var I = n;
      e = R, _ = 0;
      var U = -1, G = 1 << R, Z = G - 1;
      if (r === 1 && 852 < G || r === 2 && 592 < G)
        return 1;
      for (; ; ) {
        var Q = c - _;
        if (s[v] < F)
          var it = 0, et = s[v];
        else
          s[v] > F ? (it = M[P + s[v]], et = B[g + s[v]]) : (it = 96, et = 0);
        f = 1 << c - _, u = d = 1 << e;
        do
          d -= f, a[I + (p >> _) + d] = Q << 24 | it << 16 | et | 0;
        while (d !== 0);
        for (f = 1 << c - 1; p & f; )
          f >>= 1;
        if (f !== 0 ? (p &= f - 1, p += f) : p = 0, v++, --A[c] === 0) {
          if (c === l)
            break;
          c = i[t + s[v]];
        }
        if (c > R && (p & Z) !== U) {
          for (_ === 0 && (_ = R), I += u, e = c - _, f = 1 << e; e + _ < l && (f -= A[e + _], !(0 >= f)); )
            e++, f <<= 1;
          if (G += 1 << e, r === 1 && 852 < G || r === 2 && 592 < G)
            return 1;
          U = p & Z, a[U] = R << 24 | e << 16 | I - n | 0;
        }
      }
      return p !== 0 && (a[I + p] = c - _ << 24 | 4194304), o.bits = R, 0;
    }, Ou = Dt.Z_FINISH, zc = Dt.Z_BLOCK, Jn = Dt.Z_TREES, qr = Dt.Z_OK, kc = Dt.Z_STREAM_END, Nc = Dt.Z_NEED_DICT, Ve = Dt.Z_STREAM_ERROR, Bu = Dt.Z_DATA_ERROR, Uc = Dt.Z_MEM_ERROR, Hc = Dt.Z_BUF_ERROR, Du = Dt.Z_DEFLATED, bu = function(r) {
      return (r >>> 24 & 255) + (r >>> 8 & 65280) + ((r & 65280) << 8) + ((r & 255) << 24);
    }, Fu = function(r) {
      if (!r || !r.state)
        return Ve;
      var i = r.state;
      return r.total_in = r.total_out = i.total = 0, r.msg = "", i.wrap && (r.adler = i.wrap & 1), i.mode = 1, i.last = 0, i.havedict = 0, i.dmax = 32768, i.head = null, i.hold = 0, i.bits = 0, i.lencode = i.lendyn = new Int32Array(852), i.distcode = i.distdyn = new Int32Array(592), i.sane = 1, i.back = -1, qr;
    }, Iu = function(r) {
      if (!r || !r.state)
        return Ve;
      var i = r.state;
      return i.wsize = 0, i.whave = 0, i.wnext = 0, Fu(r);
    }, zu = function(r, i) {
      if (!r || !r.state)
        return Ve;
      var t = r.state;
      if (0 > i) {
        var e = 0;
        i = -i;
      } else
        e = (i >> 4) + 1, 48 > i && (i &= 15);
      return i && (8 > i || 15 < i) ? Ve : (t.window !== null && t.wbits !== i && (t.window = null), t.wrap = e, t.wbits = i, Iu(r));
    }, ku = function(r, i) {
      if (!r)
        return Ve;
      var t = new Bt();
      return r.state = t, t.window = null, i = zu(r, i), i !== qr && (r.state = null), i;
    }, Nu = !0, $o = void 0, ta = void 0, Uu = function(r, i, t, e) {
      var a = r.state;
      return a.window === null && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new Uint8Array(a.wsize)), e >= a.wsize ? (a.window.set(i.subarray(t - a.wsize, t), 0), a.wnext = 0, a.whave = a.wsize) : (r = a.wsize - a.wnext, r > e && (r = e), a.window.set(i.subarray(t - e, t - e + r), a.wnext), (e -= r) ? (a.window.set(i.subarray(t - e, t), 0), a.wnext = e, a.whave = a.wsize) : (a.wnext += r, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += r))), 0;
    }, mr = { inflateReset: Iu, inflateReset2: zu, inflateResetKeep: Fu, inflateInit: function(r) {
      return ku(r, 15);
    }, inflateInit2: ku, inflate: function(r, i) {
      var t = new Uint8Array(4), e = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      if (!r || !r.state || !r.output || !r.input && r.avail_in !== 0)
        return Ve;
      var a = r.state;
      a.mode === 12 && (a.mode = 13);
      var n = r.next_out, s = r.output, o = r.avail_out, u = r.next_in, c = r.input, v = r.avail_in, l = a.hold, f = a.bits, p = v, d = o, g = qr;
      t:
        for (; ; )
          switch (a.mode) {
            case 1:
              if (a.wrap === 0) {
                a.mode = 13;
                break;
              }
              for (; 16 > f; ) {
                if (v === 0)
                  break t;
                v--, l += c[u++] << f, f += 8;
              }
              if (a.wrap & 2 && l === 35615) {
                a.check = 0, t[0] = l & 255, t[1] = l >>> 8 & 255, a.check = xe(a.check, t, 2, 0), f = l = 0, a.mode = 2;
                break;
              }
              if (a.flags = 0, a.head && (a.head.done = !1), !(a.wrap & 1) || (((l & 255) << 8) + (l >> 8)) % 31) {
                r.msg = "incorrect header check", a.mode = 30;
                break;
              }
              if ((l & 15) !== Du) {
                r.msg = "unknown compression method", a.mode = 30;
                break;
              }
              l >>>= 4, f -= 4;
              var A = (l & 15) + 8;
              if (a.wbits === 0)
                a.wbits = A;
              else if (A > a.wbits) {
                r.msg = "invalid window size", a.mode = 30;
                break;
              }
              a.dmax = 1 << a.wbits, r.adler = a.check = 1, a.mode = l & 512 ? 10 : 12, f = l = 0;
              break;
            case 2:
              for (; 16 > f; ) {
                if (v === 0)
                  break t;
                v--, l += c[u++] << f, f += 8;
              }
              if (a.flags = l, (a.flags & 255) !== Du) {
                r.msg = "unknown compression method", a.mode = 30;
                break;
              }
              if (a.flags & 57344) {
                r.msg = "unknown header flags set", a.mode = 30;
                break;
              }
              a.head && (a.head.text = l >> 8 & 1), a.flags & 512 && (t[0] = l & 255, t[1] = l >>> 8 & 255, a.check = xe(a.check, t, 2, 0)), f = l = 0, a.mode = 3;
            case 3:
              for (; 32 > f; ) {
                if (v === 0)
                  break t;
                v--, l += c[u++] << f, f += 8;
              }
              a.head && (a.head.time = l), a.flags & 512 && (t[0] = l & 255, t[1] = l >>> 8 & 255, t[2] = l >>> 16 & 255, t[3] = l >>> 24 & 255, a.check = xe(a.check, t, 4, 0)), f = l = 0, a.mode = 4;
            case 4:
              for (; 16 > f; ) {
                if (v === 0)
                  break t;
                v--, l += c[u++] << f, f += 8;
              }
              a.head && (a.head.xflags = l & 255, a.head.os = l >> 8), a.flags & 512 && (t[0] = l & 255, t[1] = l >>> 8 & 255, a.check = xe(a.check, t, 2, 0)), f = l = 0, a.mode = 5;
            case 5:
              if (a.flags & 1024) {
                for (; 16 > f; ) {
                  if (v === 0)
                    break t;
                  v--, l += c[u++] << f, f += 8;
                }
                a.length = l, a.head && (a.head.extra_len = l), a.flags & 512 && (t[0] = l & 255, t[1] = l >>> 8 & 255, a.check = xe(a.check, t, 2, 0)), f = l = 0;
              } else
                a.head && (a.head.extra = null);
              a.mode = 6;
            case 6:
              if (a.flags & 1024) {
                var _ = a.length;
                if (_ > v && (_ = v), _ && (a.head && (A = a.head.extra_len - a.length, a.head.extra || (a.head.extra = new Uint8Array(a.head.extra_len)), a.head.extra.set(c.subarray(u, u + _), A)), a.flags & 512 && (a.check = xe(a.check, c, _, u)), v -= _, u += _, a.length -= _), a.length)
                  break t;
              }
              a.length = 0, a.mode = 7;
            case 7:
              if (a.flags & 2048) {
                if (v === 0)
                  break t;
                _ = 0;
                do
                  A = c[u + _++], a.head && A && 65536 > a.length && (a.head.name += String.fromCharCode(A));
                while (A && _ < v);
                if (a.flags & 512 && (a.check = xe(a.check, c, _, u)), v -= _, u += _, A)
                  break t;
              } else
                a.head && (a.head.name = null);
              a.length = 0, a.mode = 8;
            case 8:
              if (a.flags & 4096) {
                if (v === 0)
                  break t;
                _ = 0;
                do
                  A = c[u + _++], a.head && A && 65536 > a.length && (a.head.comment += String.fromCharCode(A));
                while (A && _ < v);
                if (a.flags & 512 && (a.check = xe(a.check, c, _, u)), v -= _, u += _, A)
                  break t;
              } else
                a.head && (a.head.comment = null);
              a.mode = 9;
            case 9:
              if (a.flags & 512) {
                for (; 16 > f; ) {
                  if (v === 0)
                    break t;
                  v--, l += c[u++] << f, f += 8;
                }
                if (l !== (a.check & 65535)) {
                  r.msg = "header crc mismatch", a.mode = 30;
                  break;
                }
                f = l = 0;
              }
              a.head && (a.head.hcrc = a.flags >> 9 & 1, a.head.done = !0), r.adler = a.check = 0, a.mode = 12;
              break;
            case 10:
              for (; 32 > f; ) {
                if (v === 0)
                  break t;
                v--, l += c[u++] << f, f += 8;
              }
              r.adler = a.check = bu(l), f = l = 0, a.mode = 11;
            case 11:
              if (a.havedict === 0)
                return r.next_out = n, r.avail_out = o, r.next_in = u, r.avail_in = v, a.hold = l, a.bits = f, Nc;
              r.adler = a.check = 1, a.mode = 12;
            case 12:
              if (i === zc || i === Jn)
                break t;
            case 13:
              if (a.last) {
                l >>>= f & 7, f -= f & 7, a.mode = 27;
                break;
              }
              for (; 3 > f; ) {
                if (v === 0)
                  break t;
                v--, l += c[u++] << f, f += 8;
              }
              switch (a.last = l & 1, l >>>= 1, --f, l & 3) {
                case 0:
                  a.mode = 14;
                  break;
                case 1:
                  if (_ = a, Nu) {
                    for ($o = new Int32Array(512), ta = new Int32Array(32), A = 0; 144 > A; )
                      _.lens[A++] = 8;
                    for (; 256 > A; )
                      _.lens[A++] = 9;
                    for (; 280 > A; )
                      _.lens[A++] = 7;
                    for (; 288 > A; )
                      _.lens[A++] = 8;
                    for (nn(1, _.lens, 0, 288, $o, 0, _.work, { bits: 9 }), A = 0; 32 > A; )
                      _.lens[A++] = 5;
                    nn(2, _.lens, 0, 32, ta, 0, _.work, { bits: 5 }), Nu = !1;
                  }
                  if (_.lencode = $o, _.lenbits = 9, _.distcode = ta, _.distbits = 5, a.mode = 20, i === Jn) {
                    l >>>= 2, f -= 2;
                    break t;
                  }
                  break;
                case 2:
                  a.mode = 17;
                  break;
                case 3:
                  r.msg = "invalid block type", a.mode = 30;
              }
              l >>>= 2, f -= 2;
              break;
            case 14:
              for (l >>>= f & 7, f -= f & 7; 32 > f; ) {
                if (v === 0)
                  break t;
                v--, l += c[u++] << f, f += 8;
              }
              if ((l & 65535) !== (l >>> 16 ^ 65535)) {
                r.msg = "invalid stored block lengths", a.mode = 30;
                break;
              }
              if (a.length = l & 65535, f = l = 0, a.mode = 15, i === Jn)
                break t;
            case 15:
              a.mode = 16;
            case 16:
              if (_ = a.length) {
                if (_ > v && (_ = v), _ > o && (_ = o), _ === 0)
                  break t;
                s.set(c.subarray(u, u + _), n), v -= _, u += _, o -= _, n += _, a.length -= _;
                break;
              }
              a.mode = 12;
              break;
            case 17:
              for (; 14 > f; ) {
                if (v === 0)
                  break t;
                v--, l += c[u++] << f, f += 8;
              }
              if (a.nlen = (l & 31) + 257, l >>>= 5, f -= 5, a.ndist = (l & 31) + 1, l >>>= 5, f -= 5, a.ncode = (l & 15) + 4, l >>>= 4, f -= 4, 286 < a.nlen || 30 < a.ndist) {
                r.msg = "too many length or distance symbols", a.mode = 30;
                break;
              }
              a.have = 0, a.mode = 18;
            case 18:
              for (; a.have < a.ncode; ) {
                for (; 3 > f; ) {
                  if (v === 0)
                    break t;
                  v--, l += c[u++] << f, f += 8;
                }
                a.lens[e[a.have++]] = l & 7, l >>>= 3, f -= 3;
              }
              for (; 19 > a.have; )
                a.lens[e[a.have++]] = 0;
              if (a.lencode = a.lendyn, a.lenbits = 7, _ = { bits: a.lenbits }, g = nn(0, a.lens, 0, 19, a.lencode, 0, a.work, _), a.lenbits = _.bits, g) {
                r.msg = "invalid code lengths set", a.mode = 30;
                break;
              }
              a.have = 0, a.mode = 19;
            case 19:
              for (; a.have < a.nlen + a.ndist; ) {
                for (; ; ) {
                  var M = a.lencode[l & (1 << a.lenbits) - 1];
                  if (_ = M >>> 24, M &= 65535, _ <= f)
                    break;
                  if (v === 0)
                    break t;
                  v--, l += c[u++] << f, f += 8;
                }
                if (16 > M)
                  l >>>= _, f -= _, a.lens[a.have++] = M;
                else {
                  if (M === 16) {
                    for (A = _ + 2; f < A; ) {
                      if (v === 0)
                        break t;
                      v--, l += c[u++] << f, f += 8;
                    }
                    if (l >>>= _, f -= _, a.have === 0) {
                      r.msg = "invalid bit length repeat", a.mode = 30;
                      break;
                    }
                    A = a.lens[a.have - 1], _ = 3 + (l & 3), l >>>= 2, f -= 2;
                  } else if (M === 17) {
                    for (A = _ + 3; f < A; ) {
                      if (v === 0)
                        break t;
                      v--, l += c[u++] << f, f += 8;
                    }
                    l >>>= _, f -= _, A = 0, _ = 3 + (l & 7), l >>>= 3, f -= 3;
                  } else {
                    for (A = _ + 7; f < A; ) {
                      if (v === 0)
                        break t;
                      v--, l += c[u++] << f, f += 8;
                    }
                    l >>>= _, f -= _, A = 0, _ = 11 + (l & 127), l >>>= 7, f -= 7;
                  }
                  if (a.have + _ > a.nlen + a.ndist) {
                    r.msg = "invalid bit length repeat", a.mode = 30;
                    break;
                  }
                  for (; _--; )
                    a.lens[a.have++] = A;
                }
              }
              if (a.mode === 30)
                break;
              if (a.lens[256] === 0) {
                r.msg = "invalid code -- missing end-of-block", a.mode = 30;
                break;
              }
              if (a.lenbits = 9, _ = { bits: a.lenbits }, g = nn(1, a.lens, 0, a.nlen, a.lencode, 0, a.work, _), a.lenbits = _.bits, g) {
                r.msg = "invalid literal/lengths set", a.mode = 30;
                break;
              }
              if (a.distbits = 6, a.distcode = a.distdyn, _ = { bits: a.distbits }, g = nn(2, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, _), a.distbits = _.bits, g) {
                r.msg = "invalid distances set", a.mode = 30;
                break;
              }
              if (a.mode = 20, i === Jn)
                break t;
            case 20:
              a.mode = 21;
            case 21:
              if (6 <= v && 258 <= o) {
                r.next_out = n, r.avail_out = o, r.next_in = u, r.avail_in = v, a.hold = l, a.bits = f, c = r;
                var P = c.state;
                s = c.next_in;
                var R = c.input;
                u = s + (c.avail_in - 5), n = c.next_out;
                var B = c.output;
                v = n - (d - c.avail_out), o = n + (c.avail_out - 257), l = P.dmax, f = P.wsize, _ = P.whave, A = P.wnext;
                var F = P.window, I = P.hold, U = P.bits;
                M = P.lencode;
                var G = P.distcode, Z = (1 << P.lenbits) - 1, Q = (1 << P.distbits) - 1;
                e:
                  do {
                    15 > U && (I += R[s++] << U, U += 8, I += R[s++] << U, U += 8);
                    var it = M[I & Z];
                    r:
                      for (; ; ) {
                        var et = it >>> 24;
                        if (I >>>= et, U -= et, et = it >>> 16 & 255, et === 0)
                          B[n++] = it & 65535;
                        else if (et & 16) {
                          var vt = it & 65535;
                          (et &= 15) && (U < et && (I += R[s++] << U, U += 8), vt += I & (1 << et) - 1, I >>>= et, U -= et), 15 > U && (I += R[s++] << U, U += 8, I += R[s++] << U, U += 8), it = G[I & Q];
                          i:
                            for (; ; ) {
                              if (et = it >>> 24, I >>>= et, U -= et, et = it >>> 16 & 255, et & 16) {
                                if (it &= 65535, et &= 15, U < et && (I += R[s++] << U, U += 8, U < et && (I += R[s++] << U, U += 8)), it += I & (1 << et) - 1, it > l) {
                                  c.msg = "invalid distance too far back", P.mode = 30;
                                  break e;
                                }
                                if (I >>>= et, U -= et, et = n - v, it > et) {
                                  if (et = it - et, et > _ && P.sane) {
                                    c.msg = "invalid distance too far back", P.mode = 30;
                                    break e;
                                  }
                                  var Tt = 0, K = F;
                                  if (A === 0) {
                                    if (Tt += f - et, et < vt) {
                                      vt -= et;
                                      do
                                        B[n++] = F[Tt++];
                                      while (--et);
                                      Tt = n - it, K = B;
                                    }
                                  } else if (A < et) {
                                    if (Tt += f + A - et, et -= A, et < vt) {
                                      vt -= et;
                                      do
                                        B[n++] = F[Tt++];
                                      while (--et);
                                      if (Tt = 0, A < vt) {
                                        et = A, vt -= et;
                                        do
                                          B[n++] = F[Tt++];
                                        while (--et);
                                        Tt = n - it, K = B;
                                      }
                                    }
                                  } else if (Tt += A - et, et < vt) {
                                    vt -= et;
                                    do
                                      B[n++] = F[Tt++];
                                    while (--et);
                                    Tt = n - it, K = B;
                                  }
                                  for (; 2 < vt; )
                                    B[n++] = K[Tt++], B[n++] = K[Tt++], B[n++] = K[Tt++], vt -= 3;
                                  vt && (B[n++] = K[Tt++], 1 < vt && (B[n++] = K[Tt++]));
                                } else {
                                  Tt = n - it;
                                  do
                                    B[n++] = B[Tt++], B[n++] = B[Tt++], B[n++] = B[Tt++], vt -= 3;
                                  while (2 < vt);
                                  vt && (B[n++] = B[Tt++], 1 < vt && (B[n++] = B[Tt++]));
                                }
                              } else if (et & 64) {
                                c.msg = "invalid distance code", P.mode = 30;
                                break e;
                              } else {
                                it = G[(it & 65535) + (I & (1 << et) - 1)];
                                continue i;
                              }
                              break;
                            }
                        } else if (et & 64) {
                          et & 32 ? P.mode = 12 : (c.msg = "invalid literal/length code", P.mode = 30);
                          break e;
                        } else {
                          it = M[(it & 65535) + (I & (1 << et) - 1)];
                          continue r;
                        }
                        break;
                      }
                  } while (s < u && n < o);
                vt = U >> 3, s -= vt, U -= vt << 3, c.next_in = s, c.next_out = n, c.avail_in = s < u ? 5 + (u - s) : 5 - (s - u), c.avail_out = n < o ? 257 + (o - n) : 257 - (n - o), P.hold = I & (1 << U) - 1, P.bits = U, n = r.next_out, s = r.output, o = r.avail_out, u = r.next_in, c = r.input, v = r.avail_in, l = a.hold, f = a.bits, a.mode === 12 && (a.back = -1);
                break;
              }
              for (a.back = 0; M = a.lencode[l & (1 << a.lenbits) - 1], _ = M >>> 24, A = M >>> 16 & 255, M &= 65535, !(_ <= f); ) {
                if (v === 0)
                  break t;
                v--, l += c[u++] << f, f += 8;
              }
              if (A && !(A & 240)) {
                for (F = _, I = A, U = M; M = a.lencode[U + ((l & (1 << F + I) - 1) >> F)], _ = M >>> 24, A = M >>> 16 & 255, M &= 65535, !(F + _ <= f); ) {
                  if (v === 0)
                    break t;
                  v--, l += c[u++] << f, f += 8;
                }
                l >>>= F, f -= F, a.back += F;
              }
              if (l >>>= _, f -= _, a.back += _, a.length = M, A === 0) {
                a.mode = 26;
                break;
              }
              if (A & 32) {
                a.back = -1, a.mode = 12;
                break;
              }
              if (A & 64) {
                r.msg = "invalid literal/length code", a.mode = 30;
                break;
              }
              a.extra = A & 15, a.mode = 22;
            case 22:
              if (a.extra) {
                for (A = a.extra; f < A; ) {
                  if (v === 0)
                    break t;
                  v--, l += c[u++] << f, f += 8;
                }
                a.length += l & (1 << a.extra) - 1, l >>>= a.extra, f -= a.extra, a.back += a.extra;
              }
              a.was = a.length, a.mode = 23;
            case 23:
              for (; M = a.distcode[l & (1 << a.distbits) - 1], _ = M >>> 24, A = M >>> 16 & 255, M &= 65535, !(_ <= f); ) {
                if (v === 0)
                  break t;
                v--, l += c[u++] << f, f += 8;
              }
              if (!(A & 240)) {
                for (F = _, I = A, U = M; M = a.distcode[U + ((l & (1 << F + I) - 1) >> F)], _ = M >>> 24, A = M >>> 16 & 255, M &= 65535, !(F + _ <= f); ) {
                  if (v === 0)
                    break t;
                  v--, l += c[u++] << f, f += 8;
                }
                l >>>= F, f -= F, a.back += F;
              }
              if (l >>>= _, f -= _, a.back += _, A & 64) {
                r.msg = "invalid distance code", a.mode = 30;
                break;
              }
              a.offset = M, a.extra = A & 15, a.mode = 24;
            case 24:
              if (a.extra) {
                for (A = a.extra; f < A; ) {
                  if (v === 0)
                    break t;
                  v--, l += c[u++] << f, f += 8;
                }
                a.offset += l & (1 << a.extra) - 1, l >>>= a.extra, f -= a.extra, a.back += a.extra;
              }
              if (a.offset > a.dmax) {
                r.msg = "invalid distance too far back", a.mode = 30;
                break;
              }
              a.mode = 25;
            case 25:
              if (o === 0)
                break t;
              if (_ = d - o, a.offset > _) {
                if (_ = a.offset - _, _ > a.whave && a.sane) {
                  r.msg = "invalid distance too far back", a.mode = 30;
                  break;
                }
                _ > a.wnext ? (_ -= a.wnext, A = a.wsize - _) : A = a.wnext - _, _ > a.length && (_ = a.length), F = a.window;
              } else
                F = s, A = n - a.offset, _ = a.length;
              _ > o && (_ = o), o -= _, a.length -= _;
              do
                s[n++] = F[A++];
              while (--_);
              a.length === 0 && (a.mode = 21);
              break;
            case 26:
              if (o === 0)
                break t;
              s[n++] = a.length, o--, a.mode = 21;
              break;
            case 27:
              if (a.wrap) {
                for (; 32 > f; ) {
                  if (v === 0)
                    break t;
                  v--, l |= c[u++] << f, f += 8;
                }
                if (d -= o, r.total_out += d, a.total += d, d && (r.adler = a.check = a.flags ? xe(a.check, s, d, n - d) : Ki(a.check, s, d, n - d)), d = o, (a.flags ? l : bu(l)) !== a.check) {
                  r.msg = "incorrect data check", a.mode = 30;
                  break;
                }
                f = l = 0;
              }
              a.mode = 28;
            case 28:
              if (a.wrap && a.flags) {
                for (; 32 > f; ) {
                  if (v === 0)
                    break t;
                  v--, l += c[u++] << f, f += 8;
                }
                if (l !== (a.total & 4294967295)) {
                  r.msg = "incorrect length check", a.mode = 30;
                  break;
                }
                f = l = 0;
              }
              a.mode = 29;
            case 29:
              g = kc;
              break t;
            case 30:
              g = Bu;
              break t;
            case 31:
              return Uc;
            default:
              return Ve;
          }
      return r.next_out = n, r.avail_out = o, r.next_in = u, r.avail_in = v, a.hold = l, a.bits = f, (a.wsize || d !== r.avail_out && 30 > a.mode && (27 > a.mode || i !== Ou)) && Uu(r, r.output, r.next_out, d - r.avail_out), p -= r.avail_in, d -= r.avail_out, r.total_in += p, r.total_out += d, a.total += d, a.wrap && d && (r.adler = a.check = a.flags ? xe(a.check, s, d, r.next_out - d) : Ki(a.check, s, d, r.next_out - d)), r.data_type = a.bits + (a.last ? 64 : 0) + (a.mode === 12 ? 128 : 0) + (a.mode === 20 || a.mode === 15 ? 256 : 0), (p === 0 && d === 0 || i === Ou) && g === qr && (g = Hc), g;
    }, inflateEnd: function(r) {
      if (!r || !r.state)
        return Ve;
      var i = r.state;
      return i.window && (i.window = null), r.state = null, qr;
    }, inflateGetHeader: function(r, i) {
      return !r || !r.state || (r = r.state, !(r.wrap & 2)) ? Ve : (r.head = i, i.done = !1, qr);
    }, inflateSetDictionary: function(r, i) {
      var t = i.length;
      if (!r || !r.state)
        return Ve;
      var e = r.state;
      if (e.wrap !== 0 && e.mode !== 11)
        return Ve;
      if (e.mode === 11) {
        var a = Ki(1, i, t, 0);
        if (a !== e.check)
          return Bu;
      }
      return Uu(r, i, t, t), e.havedict = 1, qr;
    }, inflateInfo: "pako inflate (from Nodeca project)" }, Gc = function() {
      this.os = this.xflags = this.time = this.text = 0, this.extra = null, this.extra_len = 0, this.comment = this.name = "", this.hcrc = 0, this.done = !1;
    }, Hu = Object.prototype.toString, jc = Dt.Z_NO_FLUSH, Wc = Dt.Z_FINISH, on = Dt.Z_OK, ea = Dt.Z_STREAM_END, ra = Dt.Z_NEED_DICT, Xc = Dt.Z_STREAM_ERROR, Gu = Dt.Z_DATA_ERROR, Vc = Dt.Z_MEM_ERROR;
    Yt.prototype.push = function(r, i) {
      var t = this.strm, e = this.options.chunkSize, a = this.options.dictionary;
      if (this.ended)
        return !1;
      var n = i === ~~i ? i : i === !0 ? Wc : jc;
      for (Hu.call(r) === "[object ArrayBuffer]" ? t.input = new Uint8Array(r) : t.input = r, t.next_in = 0, t.avail_in = t.input.length; ; ) {
        for (t.avail_out === 0 && (t.output = new Uint8Array(e), t.next_out = 0, t.avail_out = e), i = mr.inflate(t, n), i === ra && a && (i = mr.inflateSetDictionary(t, a), i === on ? i = mr.inflate(t, n) : i === Gu && (i = ra)); 0 < t.avail_in && i === ea && 0 < t.state.wrap && r[t.next_in] !== 0; )
          mr.inflateReset(t), i = mr.inflate(t, n);
        switch (i) {
          case Xc:
          case Gu:
          case ra:
          case Vc:
            return this.onEnd(i), this.ended = !0, !1;
        }
        var s = t.avail_out;
        if (t.next_out && (t.avail_out === 0 || i === ea))
          if (this.options.to === "string") {
            var o = rn.utf8border(t.output, t.next_out), u = t.next_out - o, c = rn.buf2string(t.output, o);
            t.next_out = u, t.avail_out = e - u, u && t.output.set(t.output.subarray(o, o + u), 0), this.onData(c);
          } else
            this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out));
        if (i !== on || s !== 0) {
          if (i === ea) {
            i = mr.inflateEnd(this.strm), this.onEnd(i), this.ended = !0;
            break;
          }
          if (t.avail_in === 0)
            break;
        }
      }
      return !0;
    }, Yt.prototype.onData = function(r) {
      this.chunks.push(r);
    }, Yt.prototype.onEnd = function(r) {
      r === on && (this.result = this.options.to === "string" ? this.chunks.join("") : Yn.flattenChunks(this.chunks)), this.chunks = [], this.err = r, this.msg = this.strm.msg;
    };
    var ju = { Deflate: Nt, deflate: $t, deflateRaw: function(r, i) {
      return i = i || {}, i.raw = !0, $t(r, i);
    }, gzip: function(r, i) {
      return i = i || {}, i.gzip = !0, $t(r, i);
    }, Inflate: Yt, inflate: Ht, inflateRaw: function(r, i) {
      return i = i || {}, i.raw = !0, Ht(r, i);
    }, ungzip: Ht, constants: Dt }, $e = S(function(r, i) {
      Object.defineProperty(
        i,
        "__esModule",
        { value: !0 }
      ), i.setMatrixArrayType = function(n) {
        i.ARRAY_TYPE = e = n;
      }, i.toRadian = function(n) {
        return n * a;
      }, i.equals = function(n, s) {
        return Math.abs(n - s) <= t * Math.max(1, Math.abs(n), Math.abs(s));
      }, i.RANDOM = i.ARRAY_TYPE = i.EPSILON = void 0;
      var t = 1e-6;
      i.EPSILON = t;
      var e = typeof Float32Array < "u" ? Float32Array : Array;
      i.ARRAY_TYPE = e, i.RANDOM = Math.random;
      var a = Math.PI / 180;
    });
    L($e);
    var Wu = S(function(r, i) {
      function t(n, s, o) {
        var u = s[0], c = s[1], v = s[2];
        s = s[3];
        var l = o[0], f = o[1], p = o[2];
        return o = o[3], n[0] = u * l + v * f, n[1] = c * l + s * f, n[2] = u * p + v * o, n[3] = c * p + s * o, n;
      }
      function e(n, s, o) {
        return n[0] = s[0] - o[0], n[1] = s[1] - o[1], n[2] = s[2] - o[2], n[3] = s[3] - o[3], n;
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.create = function() {
        var n = new a.ARRAY_TYPE(4);
        return a.ARRAY_TYPE != Float32Array && (n[1] = 0, n[2] = 0), n[0] = 1, n[3] = 1, n;
      }, i.clone = function(n) {
        var s = new a.ARRAY_TYPE(4);
        return s[0] = n[0], s[1] = n[1], s[2] = n[2], s[3] = n[3], s;
      }, i.copy = function(n, s) {
        return n[0] = s[0], n[1] = s[1], n[2] = s[2], n[3] = s[3], n;
      }, i.identity = function(n) {
        return n[0] = 1, n[1] = 0, n[2] = 0, n[3] = 1, n;
      }, i.fromValues = function(n, s, o, u) {
        var c = new a.ARRAY_TYPE(4);
        return c[0] = n, c[1] = s, c[2] = o, c[3] = u, c;
      }, i.set = function(n, s, o, u, c) {
        return n[0] = s, n[1] = o, n[2] = u, n[3] = c, n;
      }, i.transpose = function(n, s) {
        if (n === s) {
          var o = s[1];
          n[1] = s[2], n[2] = o;
        } else
          n[0] = s[0], n[1] = s[2], n[2] = s[1], n[3] = s[3];
        return n;
      }, i.invert = function(n, s) {
        var o = s[0], u = s[1], c = s[2];
        s = s[3];
        var v = o * s - c * u;
        return v ? (v = 1 / v, n[0] = s * v, n[1] = -u * v, n[2] = -c * v, n[3] = o * v, n) : null;
      }, i.adjoint = function(n, s) {
        var o = s[0];
        return n[0] = s[3], n[1] = -s[1], n[2] = -s[2], n[3] = o, n;
      }, i.determinant = function(n) {
        return n[0] * n[3] - n[2] * n[1];
      }, i.multiply = t, i.rotate = function(n, s, o) {
        var u = s[0], c = s[1], v = s[2];
        s = s[3];
        var l = Math.sin(o);
        return o = Math.cos(o), n[0] = u * o + v * l, n[1] = c * o + s * l, n[2] = u * -l + v * o, n[3] = c * -l + s * o, n;
      }, i.scale = function(n, s, o) {
        var u = s[1], c = s[2], v = s[3], l = o[0];
        return o = o[1], n[0] = s[0] * l, n[1] = u * l, n[2] = c * o, n[3] = v * o, n;
      }, i.fromRotation = function(n, s) {
        var o = Math.sin(s);
        return s = Math.cos(s), n[0] = s, n[1] = o, n[2] = -o, n[3] = s, n;
      }, i.fromScaling = function(n, s) {
        return n[0] = s[0], n[1] = 0, n[2] = 0, n[3] = s[1], n;
      }, i.str = function(n) {
        return "mat2(" + n[0] + ", " + n[1] + ", " + n[2] + ", " + n[3] + ")";
      }, i.frob = function(n) {
        return Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2) + Math.pow(n[3], 2));
      }, i.LDU = function(n, s, o, u) {
        return n[2] = u[2] / u[0], o[0] = u[0], o[1] = u[1], o[3] = u[3] - n[2] * o[1], [n, s, o];
      }, i.add = function(n, s, o) {
        return n[0] = s[0] + o[0], n[1] = s[1] + o[1], n[2] = s[2] + o[2], n[3] = s[3] + o[3], n;
      }, i.subtract = e, i.exactEquals = function(n, s) {
        return n[0] === s[0] && n[1] === s[1] && n[2] === s[2] && n[3] === s[3];
      }, i.equals = function(n, s) {
        var o = n[0], u = n[1], c = n[2];
        n = n[3];
        var v = s[0], l = s[1], f = s[2];
        return s = s[3], Math.abs(o - v) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(v)) && Math.abs(u - l) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(l)) && Math.abs(c - f) <= a.EPSILON * Math.max(1, Math.abs(c), Math.abs(f)) && Math.abs(n - s) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(s));
      }, i.multiplyScalar = function(n, s, o) {
        return n[0] = s[0] * o, n[1] = s[1] * o, n[2] = s[2] * o, n[3] = s[3] * o, n;
      }, i.multiplyScalarAndAdd = function(n, s, o, u) {
        return n[0] = s[0] + o[0] * u, n[1] = s[1] + o[1] * u, n[2] = s[2] + o[2] * u, n[3] = s[3] + o[3] * u, n;
      }, i.sub = i.mul = void 0;
      var a = function(n) {
        if (n && n.__esModule)
          return n;
        var s = {};
        if (n != null) {
          for (var o in n)
            if (Object.prototype.hasOwnProperty.call(n, o)) {
              var u = pe && ce ? ce(n, o) : {};
              u.get || u.set ? pe(s, o, u) : s[o] = n[o];
            }
        }
        return s.default = n, s;
      }($e);
      i.mul = t, i.sub = e;
    });
    L(Wu);
    var Xu = S(function(r, i) {
      function t(n, s, o) {
        var u = s[0], c = s[1], v = s[2], l = s[3], f = s[4];
        s = s[5];
        var p = o[0], d = o[1], g = o[2], A = o[3], _ = o[4];
        return o = o[5], n[0] = u * p + v * d, n[1] = c * p + l * d, n[2] = u * g + v * A, n[3] = c * g + l * A, n[4] = u * _ + v * o + f, n[5] = c * _ + l * o + s, n;
      }
      function e(n, s, o) {
        return n[0] = s[0] - o[0], n[1] = s[1] - o[1], n[2] = s[2] - o[2], n[3] = s[3] - o[3], n[4] = s[4] - o[4], n[5] = s[5] - o[5], n;
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.create = function() {
        var n = new a.ARRAY_TYPE(6);
        return a.ARRAY_TYPE != Float32Array && (n[1] = 0, n[2] = 0, n[4] = 0, n[5] = 0), n[0] = 1, n[3] = 1, n;
      }, i.clone = function(n) {
        var s = new a.ARRAY_TYPE(6);
        return s[0] = n[0], s[1] = n[1], s[2] = n[2], s[3] = n[3], s[4] = n[4], s[5] = n[5], s;
      }, i.copy = function(n, s) {
        return n[0] = s[0], n[1] = s[1], n[2] = s[2], n[3] = s[3], n[4] = s[4], n[5] = s[5], n;
      }, i.identity = function(n) {
        return n[0] = 1, n[1] = 0, n[2] = 0, n[3] = 1, n[4] = 0, n[5] = 0, n;
      }, i.fromValues = function(n, s, o, u, c, v) {
        var l = new a.ARRAY_TYPE(6);
        return l[0] = n, l[1] = s, l[2] = o, l[3] = u, l[4] = c, l[5] = v, l;
      }, i.set = function(n, s, o, u, c, v, l) {
        return n[0] = s, n[1] = o, n[2] = u, n[3] = c, n[4] = v, n[5] = l, n;
      }, i.invert = function(n, s) {
        var o = s[0], u = s[1], c = s[2], v = s[3], l = s[4];
        s = s[5];
        var f = o * v - u * c;
        return f ? (f = 1 / f, n[0] = v * f, n[1] = -u * f, n[2] = -c * f, n[3] = o * f, n[4] = (c * s - v * l) * f, n[5] = (u * l - o * s) * f, n) : null;
      }, i.determinant = function(n) {
        return n[0] * n[3] - n[1] * n[2];
      }, i.multiply = t, i.rotate = function(n, s, o) {
        var u = s[0], c = s[1], v = s[2], l = s[3], f = s[4];
        s = s[5];
        var p = Math.sin(o);
        return o = Math.cos(o), n[0] = u * o + v * p, n[1] = c * o + l * p, n[2] = u * -p + v * o, n[3] = c * -p + l * o, n[4] = f, n[5] = s, n;
      }, i.scale = function(n, s, o) {
        var u = s[1], c = s[2], v = s[3], l = s[4], f = s[5], p = o[0];
        return o = o[1], n[0] = s[0] * p, n[1] = u * p, n[2] = c * o, n[3] = v * o, n[4] = l, n[5] = f, n;
      }, i.translate = function(n, s, o) {
        var u = s[0], c = s[1], v = s[2], l = s[3], f = s[4];
        s = s[5];
        var p = o[0];
        return o = o[1], n[0] = u, n[1] = c, n[2] = v, n[3] = l, n[4] = u * p + v * o + f, n[5] = c * p + l * o + s, n;
      }, i.fromRotation = function(n, s) {
        var o = Math.sin(s);
        return s = Math.cos(s), n[0] = s, n[1] = o, n[2] = -o, n[3] = s, n[4] = 0, n[5] = 0, n;
      }, i.fromScaling = function(n, s) {
        return n[0] = s[0], n[1] = 0, n[2] = 0, n[3] = s[1], n[4] = 0, n[5] = 0, n;
      }, i.fromTranslation = function(n, s) {
        return n[0] = 1, n[1] = 0, n[2] = 0, n[3] = 1, n[4] = s[0], n[5] = s[1], n;
      }, i.str = function(n) {
        return "mat2d(" + n[0] + ", " + n[1] + ", " + n[2] + ", " + n[3] + ", " + n[4] + ", " + n[5] + ")";
      }, i.frob = function(n) {
        return Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2) + Math.pow(n[3], 2) + Math.pow(
          n[4],
          2
        ) + Math.pow(n[5], 2) + 1);
      }, i.add = function(n, s, o) {
        return n[0] = s[0] + o[0], n[1] = s[1] + o[1], n[2] = s[2] + o[2], n[3] = s[3] + o[3], n[4] = s[4] + o[4], n[5] = s[5] + o[5], n;
      }, i.subtract = e, i.multiplyScalar = function(n, s, o) {
        return n[0] = s[0] * o, n[1] = s[1] * o, n[2] = s[2] * o, n[3] = s[3] * o, n[4] = s[4] * o, n[5] = s[5] * o, n;
      }, i.multiplyScalarAndAdd = function(n, s, o, u) {
        return n[0] = s[0] + o[0] * u, n[1] = s[1] + o[1] * u, n[2] = s[2] + o[2] * u, n[3] = s[3] + o[3] * u, n[4] = s[4] + o[4] * u, n[5] = s[5] + o[5] * u, n;
      }, i.exactEquals = function(n, s) {
        return n[0] === s[0] && n[1] === s[1] && n[2] === s[2] && n[3] === s[3] && n[4] === s[4] && n[5] === s[5];
      }, i.equals = function(n, s) {
        var o = n[0], u = n[1], c = n[2], v = n[3], l = n[4];
        n = n[5];
        var f = s[0], p = s[1], d = s[2], g = s[3], A = s[4];
        return s = s[5], Math.abs(o - f) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(u - p) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(p)) && Math.abs(c - d) <= a.EPSILON * Math.max(1, Math.abs(c), Math.abs(d)) && Math.abs(v - g) <= a.EPSILON * Math.max(1, Math.abs(v), Math.abs(g)) && Math.abs(l - A) <= a.EPSILON * Math.max(1, Math.abs(l), Math.abs(A)) && Math.abs(n - s) <= a.EPSILON * Math.max(
          1,
          Math.abs(n),
          Math.abs(s)
        );
      }, i.sub = i.mul = void 0;
      var a = function(n) {
        if (n && n.__esModule)
          return n;
        var s = {};
        if (n != null) {
          for (var o in n)
            if (Object.prototype.hasOwnProperty.call(n, o)) {
              var u = pe && ce ? ce(n, o) : {};
              u.get || u.set ? pe(s, o, u) : s[o] = n[o];
            }
        }
        return s.default = n, s;
      }($e);
      i.mul = t, i.sub = e;
    });
    L(Xu);
    var ia = S(function(r, i) {
      function t(n, s, o) {
        var u = s[0], c = s[1], v = s[2], l = s[3], f = s[4], p = s[5], d = s[6], g = s[7];
        s = s[8];
        var A = o[0], _ = o[1], M = o[2], P = o[3], R = o[4], B = o[5], F = o[6], I = o[7];
        return o = o[8], n[0] = A * u + _ * l + M * d, n[1] = A * c + _ * f + M * g, n[2] = A * v + _ * p + M * s, n[3] = P * u + R * l + B * d, n[4] = P * c + R * f + B * g, n[5] = P * v + R * p + B * s, n[6] = F * u + I * l + o * d, n[7] = F * c + I * f + o * g, n[8] = F * v + I * p + o * s, n;
      }
      function e(n, s, o) {
        return n[0] = s[0] - o[0], n[1] = s[1] - o[1], n[2] = s[2] - o[2], n[3] = s[3] - o[3], n[4] = s[4] - o[4], n[5] = s[5] - o[5], n[6] = s[6] - o[6], n[7] = s[7] - o[7], n[8] = s[8] - o[8], n;
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.create = function() {
        var n = new a.ARRAY_TYPE(9);
        return a.ARRAY_TYPE != Float32Array && (n[1] = 0, n[2] = 0, n[3] = 0, n[5] = 0, n[6] = 0, n[7] = 0), n[0] = 1, n[4] = 1, n[8] = 1, n;
      }, i.fromMat4 = function(n, s) {
        return n[0] = s[0], n[1] = s[1], n[2] = s[2], n[3] = s[4], n[4] = s[5], n[5] = s[6], n[6] = s[8], n[7] = s[9], n[8] = s[10], n;
      }, i.clone = function(n) {
        var s = new a.ARRAY_TYPE(9);
        return s[0] = n[0], s[1] = n[1], s[2] = n[2], s[3] = n[3], s[4] = n[4], s[5] = n[5], s[6] = n[6], s[7] = n[7], s[8] = n[8], s;
      }, i.copy = function(n, s) {
        return n[0] = s[0], n[1] = s[1], n[2] = s[2], n[3] = s[3], n[4] = s[4], n[5] = s[5], n[6] = s[6], n[7] = s[7], n[8] = s[8], n;
      }, i.fromValues = function(n, s, o, u, c, v, l, f, p) {
        var d = new a.ARRAY_TYPE(9);
        return d[0] = n, d[1] = s, d[2] = o, d[3] = u, d[4] = c, d[5] = v, d[6] = l, d[7] = f, d[8] = p, d;
      }, i.set = function(n, s, o, u, c, v, l, f, p, d) {
        return n[0] = s, n[1] = o, n[2] = u, n[3] = c, n[4] = v, n[5] = l, n[6] = f, n[7] = p, n[8] = d, n;
      }, i.identity = function(n) {
        return n[0] = 1, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 1, n[5] = 0, n[6] = 0, n[7] = 0, n[8] = 1, n;
      }, i.transpose = function(n, s) {
        if (n === s) {
          var o = s[1], u = s[2], c = s[5];
          n[1] = s[3], n[2] = s[6], n[3] = o, n[5] = s[7], n[6] = u, n[7] = c;
        } else
          n[0] = s[0], n[1] = s[3], n[2] = s[6], n[3] = s[1], n[4] = s[4], n[5] = s[7], n[6] = s[2], n[7] = s[5], n[8] = s[8];
        return n;
      }, i.invert = function(n, s) {
        var o = s[0], u = s[1], c = s[2], v = s[3], l = s[4], f = s[5], p = s[6], d = s[7];
        s = s[8];
        var g = s * l - f * d, A = -s * v + f * p, _ = d * v - l * p, M = o * g + u * A + c * _;
        return M ? (M = 1 / M, n[0] = g * M, n[1] = (-s * u + c * d) * M, n[2] = (f * u - c * l) * M, n[3] = A * M, n[4] = (s * o - c * p) * M, n[5] = (-f * o + c * v) * M, n[6] = _ * M, n[7] = (-d * o + u * p) * M, n[8] = (l * o - u * v) * M, n) : null;
      }, i.adjoint = function(n, s) {
        var o = s[0], u = s[1], c = s[2], v = s[3], l = s[4], f = s[5], p = s[6], d = s[7];
        return s = s[8], n[0] = l * s - f * d, n[1] = c * d - u * s, n[2] = u * f - c * l, n[3] = f * p - v * s, n[4] = o * s - c * p, n[5] = c * v - o * f, n[6] = v * d - l * p, n[7] = u * p - o * d, n[8] = o * l - u * v, n;
      }, i.determinant = function(n) {
        var s = n[3], o = n[4], u = n[5], c = n[6], v = n[7], l = n[8];
        return n[0] * (l * o - u * v) + n[1] * (-l * s + u * c) + n[2] * (v * s - o * c);
      }, i.multiply = t, i.translate = function(n, s, o) {
        var u = s[0], c = s[1], v = s[2], l = s[3], f = s[4], p = s[5], d = s[6], g = s[7];
        s = s[8];
        var A = o[0];
        return o = o[1], n[0] = u, n[1] = c, n[2] = v, n[3] = l, n[4] = f, n[5] = p, n[6] = A * u + o * l + d, n[7] = A * c + o * f + g, n[8] = A * v + o * p + s, n;
      }, i.rotate = function(n, s, o) {
        var u = s[0], c = s[1], v = s[2], l = s[3], f = s[4], p = s[5], d = s[6], g = s[7];
        s = s[8];
        var A = Math.sin(o);
        return o = Math.cos(o), n[0] = o * u + A * l, n[1] = o * c + A * f, n[2] = o * v + A * p, n[3] = o * l - A * u, n[4] = o * f - A * c, n[5] = o * p - A * v, n[6] = d, n[7] = g, n[8] = s, n;
      }, i.scale = function(n, s, o) {
        var u = o[0];
        return o = o[1], n[0] = u * s[0], n[1] = u * s[1], n[2] = u * s[2], n[3] = o * s[3], n[4] = o * s[4], n[5] = o * s[5], n[6] = s[6], n[7] = s[7], n[8] = s[8], n;
      }, i.fromTranslation = function(n, s) {
        return n[0] = 1, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 1, n[5] = 0, n[6] = s[0], n[7] = s[1], n[8] = 1, n;
      }, i.fromRotation = function(n, s) {
        var o = Math.sin(s);
        return s = Math.cos(s), n[0] = s, n[1] = o, n[2] = 0, n[3] = -o, n[4] = s, n[5] = 0, n[6] = 0, n[7] = 0, n[8] = 1, n;
      }, i.fromScaling = function(n, s) {
        return n[0] = s[0], n[1] = 0, n[2] = 0, n[3] = 0, n[4] = s[1], n[5] = 0, n[6] = 0, n[7] = 0, n[8] = 1, n;
      }, i.fromMat2d = function(n, s) {
        return n[0] = s[0], n[1] = s[1], n[2] = 0, n[3] = s[2], n[4] = s[3], n[5] = 0, n[6] = s[4], n[7] = s[5], n[8] = 1, n;
      }, i.fromQuat = function(n, s) {
        var o = s[0], u = s[1], c = s[2];
        s = s[3];
        var v = o + o, l = u + u, f = c + c;
        o *= v;
        var p = u * v;
        u *= l;
        var d = c * v, g = c * l;
        return c *= f, v *= s, l *= s, s *= f, n[0] = 1 - u - c, n[3] = p - s, n[6] = d + l, n[1] = p + s, n[4] = 1 - o - c, n[7] = g - v, n[2] = d - l, n[5] = g + v, n[8] = 1 - o - u, n;
      }, i.normalFromMat4 = function(n, s) {
        var o = s[0], u = s[1], c = s[2], v = s[3], l = s[4], f = s[5], p = s[6], d = s[7], g = s[8], A = s[9], _ = s[10], M = s[11], P = s[12], R = s[13], B = s[14];
        s = s[15];
        var F = o * f - u * l, I = o * p - c * l, U = o * d - v * l, G = u * p - c * f, Z = u * d - v * f, Q = c * d - v * p, it = g * R - A * P, et = g * B - _ * P;
        g = g * s - M * P;
        var vt = A * B - _ * R;
        return A = A * s - M * R, _ = _ * s - M * B, M = F * _ - I * A + U * vt + G * g - Z * et + Q * it, M ? (M = 1 / M, n[0] = (f * _ - p * A + d * vt) * M, n[1] = (p * g - l * _ - d * et) * M, n[2] = (l * A - f * g + d * it) * M, n[3] = (c * A - u * _ - v * vt) * M, n[4] = (o * _ - c * g + v * et) * M, n[5] = (u * g - o * A - v * it) * M, n[6] = (R * Q - B * Z + s * G) * M, n[7] = (B * U - P * Q - s * I) * M, n[8] = (P * Z - R * U + s * F) * M, n) : null;
      }, i.projection = function(n, s, o) {
        return n[0] = 2 / s, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = -2 / o, n[5] = 0, n[6] = -1, n[7] = 1, n[8] = 1, n;
      }, i.str = function(n) {
        return "mat3(" + n[0] + ", " + n[1] + ", " + n[2] + ", " + n[3] + ", " + n[4] + ", " + n[5] + ", " + n[6] + ", " + n[7] + ", " + n[8] + ")";
      }, i.frob = function(n) {
        return Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2) + Math.pow(n[3], 2) + Math.pow(n[4], 2) + Math.pow(n[5], 2) + Math.pow(n[6], 2) + Math.pow(n[7], 2) + Math.pow(n[8], 2));
      }, i.add = function(n, s, o) {
        return n[0] = s[0] + o[0], n[1] = s[1] + o[1], n[2] = s[2] + o[2], n[3] = s[3] + o[3], n[4] = s[4] + o[4], n[5] = s[5] + o[5], n[6] = s[6] + o[6], n[7] = s[7] + o[7], n[8] = s[8] + o[8], n;
      }, i.subtract = e, i.multiplyScalar = function(n, s, o) {
        return n[0] = s[0] * o, n[1] = s[1] * o, n[2] = s[2] * o, n[3] = s[3] * o, n[4] = s[4] * o, n[5] = s[5] * o, n[6] = s[6] * o, n[7] = s[7] * o, n[8] = s[8] * o, n;
      }, i.multiplyScalarAndAdd = function(n, s, o, u) {
        return n[0] = s[0] + o[0] * u, n[1] = s[1] + o[1] * u, n[2] = s[2] + o[2] * u, n[3] = s[3] + o[3] * u, n[4] = s[4] + o[4] * u, n[5] = s[5] + o[5] * u, n[6] = s[6] + o[6] * u, n[7] = s[7] + o[7] * u, n[8] = s[8] + o[8] * u, n;
      }, i.exactEquals = function(n, s) {
        return n[0] === s[0] && n[1] === s[1] && n[2] === s[2] && n[3] === s[3] && n[4] === s[4] && n[5] === s[5] && n[6] === s[6] && n[7] === s[7] && n[8] === s[8];
      }, i.equals = function(n, s) {
        var o = n[0], u = n[1], c = n[2], v = n[3], l = n[4], f = n[5], p = n[6], d = n[7];
        n = n[8];
        var g = s[0], A = s[1], _ = s[2], M = s[3], P = s[4], R = s[5], B = s[6], F = s[7];
        return s = s[8], Math.abs(o - g) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(g)) && Math.abs(u - A) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(A)) && Math.abs(c - _) <= a.EPSILON * Math.max(1, Math.abs(c), Math.abs(_)) && Math.abs(v - M) <= a.EPSILON * Math.max(1, Math.abs(v), Math.abs(M)) && Math.abs(l - P) <= a.EPSILON * Math.max(1, Math.abs(l), Math.abs(P)) && Math.abs(f - R) <= a.EPSILON * Math.max(
          1,
          Math.abs(f),
          Math.abs(R)
        ) && Math.abs(p - B) <= a.EPSILON * Math.max(1, Math.abs(p), Math.abs(B)) && Math.abs(d - F) <= a.EPSILON * Math.max(1, Math.abs(d), Math.abs(F)) && Math.abs(n - s) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(s));
      }, i.sub = i.mul = void 0;
      var a = function(n) {
        if (n && n.__esModule)
          return n;
        var s = {};
        if (n != null) {
          for (var o in n)
            if (Object.prototype.hasOwnProperty.call(n, o)) {
              var u = pe && ce ? ce(n, o) : {};
              u.get || u.set ? pe(s, o, u) : s[o] = n[o];
            }
        }
        return s.default = n, s;
      }($e);
      i.mul = t, i.sub = e;
    });
    L(ia);
    var na = S(function(r, i) {
      function t(o) {
        return o[0] = 1, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 1, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = 1, o[11] = 0, o[12] = 0, o[13] = 0, o[14] = 0, o[15] = 1, o;
      }
      function e(o, u, c) {
        var v = u[0], l = u[1], f = u[2], p = u[3], d = u[4], g = u[5], A = u[6], _ = u[7], M = u[8], P = u[9], R = u[10], B = u[11], F = u[12], I = u[13], U = u[14];
        u = u[15];
        var G = c[0], Z = c[1], Q = c[2], it = c[3];
        return o[0] = G * v + Z * d + Q * M + it * F, o[1] = G * l + Z * g + Q * P + it * I, o[2] = G * f + Z * A + Q * R + it * U, o[3] = G * p + Z * _ + Q * B + it * u, G = c[4], Z = c[5], Q = c[6], it = c[7], o[4] = G * v + Z * d + Q * M + it * F, o[5] = G * l + Z * g + Q * P + it * I, o[6] = G * f + Z * A + Q * R + it * U, o[7] = G * p + Z * _ + Q * B + it * u, G = c[8], Z = c[9], Q = c[10], it = c[11], o[8] = G * v + Z * d + Q * M + it * F, o[9] = G * l + Z * g + Q * P + it * I, o[10] = G * f + Z * A + Q * R + it * U, o[11] = G * p + Z * _ + Q * B + it * u, G = c[12], Z = c[13], Q = c[14], it = c[15], o[12] = G * v + Z * d + Q * M + it * F, o[13] = G * l + Z * g + Q * P + it * I, o[14] = G * f + Z * A + Q * R + it * U, o[15] = G * p + Z * _ + Q * B + it * u, o;
      }
      function a(o, u, c) {
        var v = u[0], l = u[1], f = u[2], p = u[3], d = v + v, g = l + l, A = f + f;
        u = v * d;
        var _ = v * g;
        v *= A;
        var M = l * g;
        return l *= A, f *= A, d *= p, g *= p, p *= A, o[0] = 1 - (M + f), o[1] = _ + p, o[2] = v - g, o[3] = 0, o[4] = _ - p, o[5] = 1 - (u + f), o[6] = l + d, o[7] = 0, o[8] = v + g, o[9] = l - d, o[10] = 1 - (u + M), o[11] = 0, o[12] = c[0], o[13] = c[1], o[14] = c[2], o[15] = 1, o;
      }
      function n(o, u, c) {
        return o[0] = u[0] - c[0], o[1] = u[1] - c[1], o[2] = u[2] - c[2], o[3] = u[3] - c[3], o[4] = u[4] - c[4], o[5] = u[5] - c[5], o[6] = u[6] - c[6], o[7] = u[7] - c[7], o[8] = u[8] - c[8], o[9] = u[9] - c[9], o[10] = u[10] - c[10], o[11] = u[11] - c[11], o[12] = u[12] - c[12], o[13] = u[13] - c[13], o[14] = u[14] - c[14], o[15] = u[15] - c[15], o;
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.create = function() {
        var o = new s.ARRAY_TYPE(16);
        return s.ARRAY_TYPE != Float32Array && (o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[11] = 0, o[12] = 0, o[13] = 0, o[14] = 0), o[0] = 1, o[5] = 1, o[10] = 1, o[15] = 1, o;
      }, i.clone = function(o) {
        var u = new s.ARRAY_TYPE(16);
        return u[0] = o[0], u[1] = o[1], u[2] = o[2], u[3] = o[3], u[4] = o[4], u[5] = o[5], u[6] = o[6], u[7] = o[7], u[8] = o[8], u[9] = o[9], u[10] = o[10], u[11] = o[11], u[12] = o[12], u[13] = o[13], u[14] = o[14], u[15] = o[15], u;
      }, i.copy = function(o, u) {
        return o[0] = u[0], o[1] = u[1], o[2] = u[2], o[3] = u[3], o[4] = u[4], o[5] = u[5], o[6] = u[6], o[7] = u[7], o[8] = u[8], o[9] = u[9], o[10] = u[10], o[11] = u[11], o[12] = u[12], o[13] = u[13], o[14] = u[14], o[15] = u[15], o;
      }, i.fromValues = function(o, u, c, v, l, f, p, d, g, A, _, M, P, R, B, F) {
        var I = new s.ARRAY_TYPE(16);
        return I[0] = o, I[1] = u, I[2] = c, I[3] = v, I[4] = l, I[5] = f, I[6] = p, I[7] = d, I[8] = g, I[9] = A, I[10] = _, I[11] = M, I[12] = P, I[13] = R, I[14] = B, I[15] = F, I;
      }, i.set = function(o, u, c, v, l, f, p, d, g, A, _, M, P, R, B, F, I) {
        return o[0] = u, o[1] = c, o[2] = v, o[3] = l, o[4] = f, o[5] = p, o[6] = d, o[7] = g, o[8] = A, o[9] = _, o[10] = M, o[11] = P, o[12] = R, o[13] = B, o[14] = F, o[15] = I, o;
      }, i.identity = t, i.transpose = function(o, u) {
        if (o === u) {
          var c = u[1], v = u[2], l = u[3], f = u[6], p = u[7], d = u[11];
          o[1] = u[4], o[2] = u[8], o[3] = u[12], o[4] = c, o[6] = u[9], o[7] = u[13], o[8] = v, o[9] = f, o[11] = u[14], o[12] = l, o[13] = p, o[14] = d;
        } else
          o[0] = u[0], o[1] = u[4], o[2] = u[8], o[3] = u[12], o[4] = u[1], o[5] = u[5], o[6] = u[9], o[7] = u[13], o[8] = u[2], o[9] = u[6], o[10] = u[10], o[11] = u[14], o[12] = u[3], o[13] = u[7], o[14] = u[11], o[15] = u[15];
        return o;
      }, i.invert = function(o, u) {
        var c = u[0], v = u[1], l = u[2], f = u[3], p = u[4], d = u[5], g = u[6], A = u[7], _ = u[8], M = u[9], P = u[10], R = u[11], B = u[12], F = u[13], I = u[14];
        u = u[15];
        var U = c * d - v * p, G = c * g - l * p, Z = c * A - f * p, Q = v * g - l * d, it = v * A - f * d, et = l * A - f * g, vt = _ * F - M * B, Tt = _ * I - P * B, K = _ * u - R * B, ut = M * I - P * F, St = M * u - R * F, Ct = P * u - R * I, lt = U * Ct - G * St + Z * ut + Q * K - it * Tt + et * vt;
        return lt ? (lt = 1 / lt, o[0] = (d * Ct - g * St + A * ut) * lt, o[1] = (l * St - v * Ct - f * ut) * lt, o[2] = (F * et - I * it + u * Q) * lt, o[3] = (P * it - M * et - R * Q) * lt, o[4] = (g * K - p * Ct - A * Tt) * lt, o[5] = (c * Ct - l * K + f * Tt) * lt, o[6] = (I * Z - B * et - u * G) * lt, o[7] = (_ * et - P * Z + R * G) * lt, o[8] = (p * St - d * K + A * vt) * lt, o[9] = (v * K - c * St - f * vt) * lt, o[10] = (B * it - F * Z + u * U) * lt, o[11] = (M * Z - _ * it - R * U) * lt, o[12] = (d * Tt - p * ut - g * vt) * lt, o[13] = (c * ut - v * Tt + l * vt) * lt, o[14] = (F * G - B * Q - I * U) * lt, o[15] = (_ * Q - M * G + P * U) * lt, o) : null;
      }, i.adjoint = function(o, u) {
        var c = u[0], v = u[1], l = u[2], f = u[3], p = u[4], d = u[5], g = u[6], A = u[7], _ = u[8], M = u[9], P = u[10], R = u[11], B = u[12], F = u[13], I = u[14];
        return u = u[15], o[0] = d * (P * u - R * I) - M * (g * u - A * I) + F * (g * R - A * P), o[1] = -(v * (P * u - R * I) - M * (l * u - f * I) + F * (l * R - f * P)), o[2] = v * (g * u - A * I) - d * (l * u - f * I) + F * (l * A - f * g), o[3] = -(v * (g * R - A * P) - d * (l * R - f * P) + M * (l * A - f * g)), o[4] = -(p * (P * u - R * I) - _ * (g * u - A * I) + B * (g * R - A * P)), o[5] = c * (P * u - R * I) - _ * (l * u - f * I) + B * (l * R - f * P), o[6] = -(c * (g * u - A * I) - p * (l * u - f * I) + B * (l * A - f * g)), o[7] = c * (g * R - A * P) - p * (l * R - f * P) + _ * (l * A - f * g), o[8] = p * (M * u - R * F) - _ * (d * u - A * F) + B * (d * R - A * M), o[9] = -(c * (M * u - R * F) - _ * (v * u - f * F) + B * (v * R - f * M)), o[10] = c * (d * u - A * F) - p * (v * u - f * F) + B * (v * A - f * d), o[11] = -(c * (d * R - A * M) - p * (v * R - f * M) + _ * (v * A - f * d)), o[12] = -(p * (M * I - P * F) - _ * (d * I - g * F) + B * (d * P - g * M)), o[13] = c * (M * I - P * F) - _ * (v * I - l * F) + B * (v * P - l * M), o[14] = -(c * (d * I - g * F) - p * (v * I - l * F) + B * (v * g - l * d)), o[15] = c * (d * P - g * M) - p * (v * P - l * M) + _ * (v * g - l * d), o;
      }, i.determinant = function(o) {
        var u = o[0], c = o[1], v = o[2], l = o[3], f = o[4], p = o[5], d = o[6], g = o[7], A = o[8], _ = o[9], M = o[10], P = o[11], R = o[12], B = o[13], F = o[14];
        return o = o[15], (u * p - c * f) * (M * o - P * F) - (u * d - v * f) * (_ * o - P * B) + (u * g - l * f) * (_ * F - M * B) + (c * d - v * p) * (A * o - P * R) - (c * g - l * p) * (A * F - M * R) + (v * g - l * d) * (A * B - _ * R);
      }, i.multiply = e, i.translate = function(o, u, c) {
        var v = c[0], l = c[1];
        if (c = c[2], u === o)
          o[12] = u[0] * v + u[4] * l + u[8] * c + u[12], o[13] = u[1] * v + u[5] * l + u[9] * c + u[13], o[14] = u[2] * v + u[6] * l + u[10] * c + u[14], o[15] = u[3] * v + u[7] * l + u[11] * c + u[15];
        else {
          var f = u[0], p = u[1], d = u[2], g = u[3], A = u[4], _ = u[5], M = u[6], P = u[7], R = u[8], B = u[9], F = u[10], I = u[11];
          o[0] = f, o[1] = p, o[2] = d, o[3] = g, o[4] = A, o[5] = _, o[6] = M, o[7] = P, o[8] = R, o[9] = B, o[10] = F, o[11] = I, o[12] = f * v + A * l + R * c + u[12], o[13] = p * v + _ * l + B * c + u[13], o[14] = d * v + M * l + F * c + u[14], o[15] = g * v + P * l + I * c + u[15];
        }
        return o;
      }, i.scale = function(o, u, c) {
        var v = c[0], l = c[1];
        return c = c[2], o[0] = u[0] * v, o[1] = u[1] * v, o[2] = u[2] * v, o[3] = u[3] * v, o[4] = u[4] * l, o[5] = u[5] * l, o[6] = u[6] * l, o[7] = u[7] * l, o[8] = u[8] * c, o[9] = u[9] * c, o[10] = u[10] * c, o[11] = u[11] * c, o[12] = u[12], o[13] = u[13], o[14] = u[14], o[15] = u[15], o;
      }, i.rotate = function(o, u, c, v) {
        var l = v[0], f = v[1];
        v = v[2];
        var p = Math.sqrt(l * l + f * f + v * v);
        if (p < s.EPSILON)
          return null;
        p = 1 / p, l *= p, f *= p, v *= p;
        var d = Math.sin(c), g = Math.cos(c), A = 1 - g;
        c = u[0], p = u[1];
        var _ = u[2], M = u[3], P = u[4], R = u[5], B = u[6], F = u[7], I = u[8], U = u[9], G = u[10], Z = u[11], Q = l * l * A + g, it = f * l * A + v * d, et = v * l * A - f * d, vt = l * f * A - v * d, Tt = f * f * A + g, K = v * f * A + l * d, ut = l * v * A + f * d;
        return l = f * v * A - l * d, f = v * v * A + g, o[0] = c * Q + P * it + I * et, o[1] = p * Q + R * it + U * et, o[2] = _ * Q + B * it + G * et, o[3] = M * Q + F * it + Z * et, o[4] = c * vt + P * Tt + I * K, o[5] = p * vt + R * Tt + U * K, o[6] = _ * vt + B * Tt + G * K, o[7] = M * vt + F * Tt + Z * K, o[8] = c * ut + P * l + I * f, o[9] = p * ut + R * l + U * f, o[10] = _ * ut + B * l + G * f, o[11] = M * ut + F * l + Z * f, u !== o && (o[12] = u[12], o[13] = u[13], o[14] = u[14], o[15] = u[15]), o;
      }, i.rotateX = function(o, u, c) {
        var v = Math.sin(c);
        c = Math.cos(c);
        var l = u[4], f = u[5], p = u[6], d = u[7], g = u[8], A = u[9], _ = u[10], M = u[11];
        return u !== o && (o[0] = u[0], o[1] = u[1], o[2] = u[2], o[3] = u[3], o[12] = u[12], o[13] = u[13], o[14] = u[14], o[15] = u[15]), o[4] = l * c + g * v, o[5] = f * c + A * v, o[6] = p * c + _ * v, o[7] = d * c + M * v, o[8] = g * c - l * v, o[9] = A * c - f * v, o[10] = _ * c - p * v, o[11] = M * c - d * v, o;
      }, i.rotateY = function(o, u, c) {
        var v = Math.sin(c);
        c = Math.cos(c);
        var l = u[0], f = u[1], p = u[2], d = u[3], g = u[8], A = u[9], _ = u[10], M = u[11];
        return u !== o && (o[4] = u[4], o[5] = u[5], o[6] = u[6], o[7] = u[7], o[12] = u[12], o[13] = u[13], o[14] = u[14], o[15] = u[15]), o[0] = l * c - g * v, o[1] = f * c - A * v, o[2] = p * c - _ * v, o[3] = d * c - M * v, o[8] = l * v + g * c, o[9] = f * v + A * c, o[10] = p * v + _ * c, o[11] = d * v + M * c, o;
      }, i.rotateZ = function(o, u, c) {
        var v = Math.sin(c);
        c = Math.cos(c);
        var l = u[0], f = u[1], p = u[2], d = u[3], g = u[4], A = u[5], _ = u[6], M = u[7];
        return u !== o && (o[8] = u[8], o[9] = u[9], o[10] = u[10], o[11] = u[11], o[12] = u[12], o[13] = u[13], o[14] = u[14], o[15] = u[15]), o[0] = l * c + g * v, o[1] = f * c + A * v, o[2] = p * c + _ * v, o[3] = d * c + M * v, o[4] = g * c - l * v, o[5] = A * c - f * v, o[6] = _ * c - p * v, o[7] = M * c - d * v, o;
      }, i.fromTranslation = function(o, u) {
        return o[0] = 1, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 1, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = 1, o[11] = 0, o[12] = u[0], o[13] = u[1], o[14] = u[2], o[15] = 1, o;
      }, i.fromScaling = function(o, u) {
        return o[0] = u[0], o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = u[1], o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = u[2], o[11] = 0, o[12] = 0, o[13] = 0, o[14] = 0, o[15] = 1, o;
      }, i.fromRotation = function(o, u, c) {
        var v = c[0], l = c[1];
        c = c[2];
        var f = Math.sqrt(v * v + l * l + c * c);
        if (f < s.EPSILON)
          return null;
        f = 1 / f, v *= f, l *= f, c *= f, f = Math.sin(u), u = Math.cos(u);
        var p = 1 - u;
        return o[0] = v * v * p + u, o[1] = l * v * p + c * f, o[2] = c * v * p - l * f, o[3] = 0, o[4] = v * l * p - c * f, o[5] = l * l * p + u, o[6] = c * l * p + v * f, o[7] = 0, o[8] = v * c * p + l * f, o[9] = l * c * p - v * f, o[10] = c * c * p + u, o[11] = 0, o[12] = 0, o[13] = 0, o[14] = 0, o[15] = 1, o;
      }, i.fromXRotation = function(o, u) {
        var c = Math.sin(u);
        return u = Math.cos(u), o[0] = 1, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = u, o[6] = c, o[7] = 0, o[8] = 0, o[9] = -c, o[10] = u, o[11] = 0, o[12] = 0, o[13] = 0, o[14] = 0, o[15] = 1, o;
      }, i.fromYRotation = function(o, u) {
        var c = Math.sin(u);
        return u = Math.cos(u), o[0] = u, o[1] = 0, o[2] = -c, o[3] = 0, o[4] = 0, o[5] = 1, o[6] = 0, o[7] = 0, o[8] = c, o[9] = 0, o[10] = u, o[11] = 0, o[12] = 0, o[13] = 0, o[14] = 0, o[15] = 1, o;
      }, i.fromZRotation = function(o, u) {
        var c = Math.sin(u);
        return u = Math.cos(u), o[0] = u, o[1] = c, o[2] = 0, o[3] = 0, o[4] = -c, o[5] = u, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = 1, o[11] = 0, o[12] = 0, o[13] = 0, o[14] = 0, o[15] = 1, o;
      }, i.fromRotationTranslation = a, i.fromQuat2 = function(o, u) {
        var c = new s.ARRAY_TYPE(3), v = -u[0], l = -u[1], f = -u[2], p = u[3], d = u[4], g = u[5], A = u[6], _ = u[7], M = v * v + l * l + f * f + p * p;
        return 0 < M ? (c[0] = 2 * (d * p + _ * v + g * f - A * l) / M, c[1] = 2 * (g * p + _ * l + A * v - d * f) / M, c[2] = 2 * (A * p + _ * f + d * l - g * v) / M) : (c[0] = 2 * (d * p + _ * v + g * f - A * l), c[1] = 2 * (g * p + _ * l + A * v - d * f), c[2] = 2 * (A * p + _ * f + d * l - g * v)), a(o, u, c), o;
      }, i.getTranslation = function(o, u) {
        return o[0] = u[12], o[1] = u[13], o[2] = u[14], o;
      }, i.getScaling = function(o, u) {
        var c = u[0], v = u[1], l = u[2], f = u[4], p = u[5], d = u[6], g = u[8], A = u[9];
        return u = u[10], o[0] = Math.sqrt(c * c + v * v + l * l), o[1] = Math.sqrt(f * f + p * p + d * d), o[2] = Math.sqrt(g * g + A * A + u * u), o;
      }, i.getRotation = function(o, u) {
        var c = u[0] + u[5] + u[10];
        return 0 < c ? (c = 2 * Math.sqrt(c + 1), o[3] = 0.25 * c, o[0] = (u[6] - u[9]) / c, o[1] = (u[8] - u[2]) / c, o[2] = (u[1] - u[4]) / c) : u[0] > u[5] && u[0] > u[10] ? (c = 2 * Math.sqrt(1 + u[0] - u[5] - u[10]), o[3] = (u[6] - u[9]) / c, o[0] = 0.25 * c, o[1] = (u[1] + u[4]) / c, o[2] = (u[8] + u[2]) / c) : u[5] > u[10] ? (c = 2 * Math.sqrt(1 + u[5] - u[0] - u[10]), o[3] = (u[8] - u[2]) / c, o[0] = (u[1] + u[4]) / c, o[1] = 0.25 * c, o[2] = (u[6] + u[9]) / c) : (c = 2 * Math.sqrt(1 + u[10] - u[0] - u[5]), o[3] = (u[1] - u[4]) / c, o[0] = (u[8] + u[2]) / c, o[1] = (u[6] + u[9]) / c, o[2] = 0.25 * c), o;
      }, i.fromRotationTranslationScale = function(o, u, c, v) {
        var l = u[0], f = u[1], p = u[2], d = u[3], g = l + l, A = f + f, _ = p + p;
        u = l * g;
        var M = l * A;
        l *= _;
        var P = f * A;
        f *= _, p *= _, g *= d, A *= d, d *= _, _ = v[0];
        var R = v[1];
        return v = v[2], o[0] = (1 - (P + p)) * _, o[1] = (M + d) * _, o[2] = (l - A) * _, o[3] = 0, o[4] = (M - d) * R, o[5] = (1 - (u + p)) * R, o[6] = (f + g) * R, o[7] = 0, o[8] = (l + A) * v, o[9] = (f - g) * v, o[10] = (1 - (u + P)) * v, o[11] = 0, o[12] = c[0], o[13] = c[1], o[14] = c[2], o[15] = 1, o;
      }, i.fromRotationTranslationScaleOrigin = function(o, u, c, v, l) {
        var f = u[0], p = u[1], d = u[2], g = u[3], A = f + f, _ = p + p, M = d + d;
        u = f * A;
        var P = f * _, R = f * M;
        f = p * _, p *= M;
        var B = d * M;
        d = g * A, _ *= g;
        var F = g * M, I = v[0], U = v[1];
        M = v[2], v = l[0], g = l[1], l = l[2], A = (1 - (f + B)) * I;
        var G = (P + F) * I;
        return I *= R - _, P = (P - F) * U, B = (1 - (u + B)) * U, U *= p + d, R = (R + _) * M, p = (p - d) * M, u = (1 - (u + f)) * M, o[0] = A, o[1] = G, o[2] = I, o[3] = 0, o[4] = P, o[5] = B, o[6] = U, o[7] = 0, o[8] = R, o[9] = p, o[10] = u, o[11] = 0, o[12] = c[0] + v - (A * v + P * g + R * l), o[13] = c[1] + g - (G * v + B * g + p * l), o[14] = c[2] + l - (I * v + U * g + u * l), o[15] = 1, o;
      }, i.fromQuat = function(o, u) {
        var c = u[0], v = u[1], l = u[2];
        u = u[3];
        var f = c + c, p = v + v, d = l + l;
        c *= f;
        var g = v * f;
        v *= p;
        var A = l * f, _ = l * p;
        return l *= d, f *= u, p *= u, u *= d, o[0] = 1 - v - l, o[1] = g + u, o[2] = A - p, o[3] = 0, o[4] = g - u, o[5] = 1 - c - l, o[6] = _ + f, o[7] = 0, o[8] = A + p, o[9] = _ - f, o[10] = 1 - c - v, o[11] = 0, o[12] = 0, o[13] = 0, o[14] = 0, o[15] = 1, o;
      }, i.frustum = function(o, u, c, v, l, f, p) {
        var d = 1 / (c - u), g = 1 / (l - v), A = 1 / (f - p);
        return o[0] = 2 * f * d, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 2 * f * g, o[6] = 0, o[7] = 0, o[8] = (c + u) * d, o[9] = (l + v) * g, o[10] = (p + f) * A, o[11] = -1, o[12] = 0, o[13] = 0, o[14] = p * f * 2 * A, o[15] = 0, o;
      }, i.perspective = function(o, u, c, v, l) {
        return u = 1 / Math.tan(u / 2), o[0] = u / c, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = u, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[11] = -1, o[12] = 0, o[13] = 0, o[15] = 0, l != null && l !== 1 / 0 ? (c = 1 / (v - l), o[10] = (l + v) * c, o[14] = 2 * l * v * c) : (o[10] = -1, o[14] = -2 * v), o;
      }, i.perspectiveFromFieldOfView = function(o, u, c, v) {
        var l = Math.tan(u.upDegrees * Math.PI / 180), f = Math.tan(u.downDegrees * Math.PI / 180), p = Math.tan(u.leftDegrees * Math.PI / 180);
        u = Math.tan(u.rightDegrees * Math.PI / 180);
        var d = 2 / (p + u), g = 2 / (l + f);
        return o[0] = d, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = g, o[6] = 0, o[7] = 0, o[8] = -((p - u) * d * 0.5), o[9] = (l - f) * g * 0.5, o[10] = v / (c - v), o[11] = -1, o[12] = 0, o[13] = 0, o[14] = v * c / (c - v), o[15] = 0, o;
      }, i.ortho = function(o, u, c, v, l, f, p) {
        var d = 1 / (u - c), g = 1 / (v - l), A = 1 / (f - p);
        return o[0] = -2 * d, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = -2 * g, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = 2 * A, o[11] = 0, o[12] = (u + c) * d, o[13] = (l + v) * g, o[14] = (p + f) * A, o[15] = 1, o;
      }, i.lookAt = function(o, u, c, v) {
        var l = u[0], f = u[1];
        u = u[2];
        var p = v[0], d = v[1], g = v[2], A = c[0];
        v = c[1];
        var _ = c[2];
        if (Math.abs(l - A) < s.EPSILON && Math.abs(f - v) < s.EPSILON && Math.abs(u - _) < s.EPSILON)
          return t(o);
        c = l - A, v = f - v, A = u - _;
        var M = 1 / Math.sqrt(c * c + v * v + A * A);
        c *= M, v *= M, A *= M, _ = d * A - g * v, g = g * c - p * A, p = p * v - d * c, (M = Math.sqrt(_ * _ + g * g + p * p)) ? (M = 1 / M, _ *= M, g *= M, p *= M) : p = g = _ = 0, d = v * p - A * g;
        var P = A * _ - c * p, R = c * g - v * _;
        return (M = Math.sqrt(d * d + P * P + R * R)) ? (M = 1 / M, d *= M, P *= M, R *= M) : R = P = d = 0, o[0] = _, o[1] = d, o[2] = c, o[3] = 0, o[4] = g, o[5] = P, o[6] = v, o[7] = 0, o[8] = p, o[9] = R, o[10] = A, o[11] = 0, o[12] = -(_ * l + g * f + p * u), o[13] = -(d * l + P * f + R * u), o[14] = -(c * l + v * f + A * u), o[15] = 1, o;
      }, i.targetTo = function(o, u, c, v) {
        var l = u[0], f = u[1];
        u = u[2];
        var p = v[0], d = v[1], g = v[2];
        v = l - c[0];
        var A = f - c[1];
        c = u - c[2];
        var _ = v * v + A * A + c * c;
        0 < _ && (_ = 1 / Math.sqrt(_), v *= _, A *= _, c *= _);
        var M = d * c - g * A;
        return g = g * v - p * c, p = p * A - d * v, _ = M * M + g * g + p * p, 0 < _ && (_ = 1 / Math.sqrt(_), M *= _, g *= _, p *= _), o[0] = M, o[1] = g, o[2] = p, o[3] = 0, o[4] = A * p - c * g, o[5] = c * M - v * p, o[6] = v * g - A * M, o[7] = 0, o[8] = v, o[9] = A, o[10] = c, o[11] = 0, o[12] = l, o[13] = f, o[14] = u, o[15] = 1, o;
      }, i.str = function(o) {
        return "mat4(" + o[0] + ", " + o[1] + ", " + o[2] + ", " + o[3] + ", " + o[4] + ", " + o[5] + ", " + o[6] + ", " + o[7] + ", " + o[8] + ", " + o[9] + ", " + o[10] + ", " + o[11] + ", " + o[12] + ", " + o[13] + ", " + o[14] + ", " + o[15] + ")";
      }, i.frob = function(o) {
        return Math.sqrt(Math.pow(o[0], 2) + Math.pow(o[1], 2) + Math.pow(o[2], 2) + Math.pow(o[3], 2) + Math.pow(o[4], 2) + Math.pow(o[5], 2) + Math.pow(o[6], 2) + Math.pow(o[7], 2) + Math.pow(
          o[8],
          2
        ) + Math.pow(o[9], 2) + Math.pow(o[10], 2) + Math.pow(o[11], 2) + Math.pow(o[12], 2) + Math.pow(o[13], 2) + Math.pow(o[14], 2) + Math.pow(o[15], 2));
      }, i.add = function(o, u, c) {
        return o[0] = u[0] + c[0], o[1] = u[1] + c[1], o[2] = u[2] + c[2], o[3] = u[3] + c[3], o[4] = u[4] + c[4], o[5] = u[5] + c[5], o[6] = u[6] + c[6], o[7] = u[7] + c[7], o[8] = u[8] + c[8], o[9] = u[9] + c[9], o[10] = u[10] + c[10], o[11] = u[11] + c[11], o[12] = u[12] + c[12], o[13] = u[13] + c[13], o[14] = u[14] + c[14], o[15] = u[15] + c[15], o;
      }, i.subtract = n, i.multiplyScalar = function(o, u, c) {
        return o[0] = u[0] * c, o[1] = u[1] * c, o[2] = u[2] * c, o[3] = u[3] * c, o[4] = u[4] * c, o[5] = u[5] * c, o[6] = u[6] * c, o[7] = u[7] * c, o[8] = u[8] * c, o[9] = u[9] * c, o[10] = u[10] * c, o[11] = u[11] * c, o[12] = u[12] * c, o[13] = u[13] * c, o[14] = u[14] * c, o[15] = u[15] * c, o;
      }, i.multiplyScalarAndAdd = function(o, u, c, v) {
        return o[0] = u[0] + c[0] * v, o[1] = u[1] + c[1] * v, o[2] = u[2] + c[2] * v, o[3] = u[3] + c[3] * v, o[4] = u[4] + c[4] * v, o[5] = u[5] + c[5] * v, o[6] = u[6] + c[6] * v, o[7] = u[7] + c[7] * v, o[8] = u[8] + c[8] * v, o[9] = u[9] + c[9] * v, o[10] = u[10] + c[10] * v, o[11] = u[11] + c[11] * v, o[12] = u[12] + c[12] * v, o[13] = u[13] + c[13] * v, o[14] = u[14] + c[14] * v, o[15] = u[15] + c[15] * v, o;
      }, i.exactEquals = function(o, u) {
        return o[0] === u[0] && o[1] === u[1] && o[2] === u[2] && o[3] === u[3] && o[4] === u[4] && o[5] === u[5] && o[6] === u[6] && o[7] === u[7] && o[8] === u[8] && o[9] === u[9] && o[10] === u[10] && o[11] === u[11] && o[12] === u[12] && o[13] === u[13] && o[14] === u[14] && o[15] === u[15];
      }, i.equals = function(o, u) {
        var c = o[0], v = o[1], l = o[2], f = o[3], p = o[4], d = o[5], g = o[6], A = o[7], _ = o[8], M = o[9], P = o[10], R = o[11], B = o[12], F = o[13], I = o[14];
        o = o[15];
        var U = u[0], G = u[1], Z = u[2], Q = u[3], it = u[4], et = u[5], vt = u[6], Tt = u[7], K = u[8], ut = u[9], St = u[10], Ct = u[11], lt = u[12], Ze = u[13], ee = u[14];
        return u = u[15], Math.abs(c - U) <= s.EPSILON * Math.max(1, Math.abs(c), Math.abs(U)) && Math.abs(v - G) <= s.EPSILON * Math.max(1, Math.abs(v), Math.abs(G)) && Math.abs(l - Z) <= s.EPSILON * Math.max(1, Math.abs(l), Math.abs(Z)) && Math.abs(f - Q) <= s.EPSILON * Math.max(1, Math.abs(f), Math.abs(Q)) && Math.abs(p - it) <= s.EPSILON * Math.max(1, Math.abs(p), Math.abs(it)) && Math.abs(d - et) <= s.EPSILON * Math.max(1, Math.abs(d), Math.abs(et)) && Math.abs(g - vt) <= s.EPSILON * Math.max(1, Math.abs(g), Math.abs(vt)) && Math.abs(A - Tt) <= s.EPSILON * Math.max(1, Math.abs(A), Math.abs(Tt)) && Math.abs(_ - K) <= s.EPSILON * Math.max(1, Math.abs(_), Math.abs(K)) && Math.abs(M - ut) <= s.EPSILON * Math.max(1, Math.abs(M), Math.abs(ut)) && Math.abs(P - St) <= s.EPSILON * Math.max(1, Math.abs(P), Math.abs(St)) && Math.abs(R - Ct) <= s.EPSILON * Math.max(1, Math.abs(R), Math.abs(Ct)) && Math.abs(B - lt) <= s.EPSILON * Math.max(1, Math.abs(B), Math.abs(lt)) && Math.abs(F - Ze) <= s.EPSILON * Math.max(1, Math.abs(F), Math.abs(Ze)) && Math.abs(I - ee) <= s.EPSILON * Math.max(1, Math.abs(I), Math.abs(ee)) && Math.abs(o - u) <= s.EPSILON * Math.max(
          1,
          Math.abs(o),
          Math.abs(u)
        );
      }, i.sub = i.mul = void 0;
      var s = function(o) {
        if (o && o.__esModule)
          return o;
        var u = {};
        if (o != null) {
          for (var c in o)
            if (Object.prototype.hasOwnProperty.call(o, c)) {
              var v = pe && ce ? ce(o, c) : {};
              v.get || v.set ? pe(u, c, v) : u[c] = o[c];
            }
        }
        return u.default = o, u;
      }($e);
      i.mul = e, i.sub = n;
    });
    L(na);
    var oa = S(function(r, i) {
      function t() {
        var d = new p.ARRAY_TYPE(3);
        return p.ARRAY_TYPE != Float32Array && (d[0] = 0, d[1] = 0, d[2] = 0), d;
      }
      function e(d) {
        var g = d[0], A = d[1];
        return d = d[2], Math.sqrt(g * g + A * A + d * d);
      }
      function a(d, g, A) {
        var _ = new p.ARRAY_TYPE(3);
        return _[0] = d, _[1] = g, _[2] = A, _;
      }
      function n(d, g, A) {
        return d[0] = g[0] - A[0], d[1] = g[1] - A[1], d[2] = g[2] - A[2], d;
      }
      function s(d, g, A) {
        return d[0] = g[0] * A[0], d[1] = g[1] * A[1], d[2] = g[2] * A[2], d;
      }
      function o(d, g, A) {
        return d[0] = g[0] / A[0], d[1] = g[1] / A[1], d[2] = g[2] / A[2], d;
      }
      function u(d, g) {
        var A = g[0] - d[0], _ = g[1] - d[1];
        return d = g[2] - d[2], Math.sqrt(A * A + _ * _ + d * d);
      }
      function c(d, g) {
        var A = g[0] - d[0], _ = g[1] - d[1];
        return d = g[2] - d[2], A * A + _ * _ + d * d;
      }
      function v(d) {
        var g = d[0], A = d[1];
        return d = d[2], g * g + A * A + d * d;
      }
      function l(d, g) {
        var A = g[0], _ = g[1], M = g[2];
        return A = A * A + _ * _ + M * M, 0 < A && (A = 1 / Math.sqrt(A)), d[0] = g[0] * A, d[1] = g[1] * A, d[2] = g[2] * A, d;
      }
      function f(d, g) {
        return d[0] * g[0] + d[1] * g[1] + d[2] * g[2];
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.create = t, i.clone = function(d) {
        var g = new p.ARRAY_TYPE(3);
        return g[0] = d[0], g[1] = d[1], g[2] = d[2], g;
      }, i.length = e, i.fromValues = a, i.copy = function(d, g) {
        return d[0] = g[0], d[1] = g[1], d[2] = g[2], d;
      }, i.set = function(d, g, A, _) {
        return d[0] = g, d[1] = A, d[2] = _, d;
      }, i.add = function(d, g, A) {
        return d[0] = g[0] + A[0], d[1] = g[1] + A[1], d[2] = g[2] + A[2], d;
      }, i.subtract = n, i.multiply = s, i.divide = o, i.ceil = function(d, g) {
        return d[0] = Math.ceil(g[0]), d[1] = Math.ceil(g[1]), d[2] = Math.ceil(g[2]), d;
      }, i.floor = function(d, g) {
        return d[0] = Math.floor(g[0]), d[1] = Math.floor(g[1]), d[2] = Math.floor(g[2]), d;
      }, i.min = function(d, g, A) {
        return d[0] = Math.min(g[0], A[0]), d[1] = Math.min(g[1], A[1]), d[2] = Math.min(g[2], A[2]), d;
      }, i.max = function(d, g, A) {
        return d[0] = Math.max(g[0], A[0]), d[1] = Math.max(g[1], A[1]), d[2] = Math.max(g[2], A[2]), d;
      }, i.round = function(d, g) {
        return d[0] = Math.round(g[0]), d[1] = Math.round(g[1]), d[2] = Math.round(g[2]), d;
      }, i.scale = function(d, g, A) {
        return d[0] = g[0] * A, d[1] = g[1] * A, d[2] = g[2] * A, d;
      }, i.scaleAndAdd = function(d, g, A, _) {
        return d[0] = g[0] + A[0] * _, d[1] = g[1] + A[1] * _, d[2] = g[2] + A[2] * _, d;
      }, i.distance = u, i.squaredDistance = c, i.squaredLength = v, i.negate = function(d, g) {
        return d[0] = -g[0], d[1] = -g[1], d[2] = -g[2], d;
      }, i.inverse = function(d, g) {
        return d[0] = 1 / g[0], d[1] = 1 / g[1], d[2] = 1 / g[2], d;
      }, i.normalize = l, i.dot = f, i.cross = function(d, g, A) {
        var _ = g[0], M = g[1];
        g = g[2];
        var P = A[0], R = A[1];
        return A = A[2], d[0] = M * A - g * R, d[1] = g * P - _ * A, d[2] = _ * R - M * P, d;
      }, i.lerp = function(d, g, A, _) {
        var M = g[0], P = g[1];
        return g = g[2], d[0] = M + _ * (A[0] - M), d[1] = P + _ * (A[1] - P), d[2] = g + _ * (A[2] - g), d;
      }, i.hermite = function(d, g, A, _, M, P) {
        var R = P * P, B = R * (2 * P - 3) + 1, F = R * (P - 2) + P, I = R * (P - 1);
        return P = R * (3 - 2 * P), d[0] = g[0] * B + A[0] * F + _[0] * I + M[0] * P, d[1] = g[1] * B + A[1] * F + _[1] * I + M[1] * P, d[2] = g[2] * B + A[2] * F + _[2] * I + M[2] * P, d;
      }, i.bezier = function(d, g, A, _, M, P) {
        var R = 1 - P, B = R * R, F = P * P, I = B * R;
        return B *= 3 * P, R *= 3 * F, P *= F, d[0] = g[0] * I + A[0] * B + _[0] * R + M[0] * P, d[1] = g[1] * I + A[1] * B + _[1] * R + M[1] * P, d[2] = g[2] * I + A[2] * B + _[2] * R + M[2] * P, d;
      }, i.random = function(d, g) {
        g = g || 1;
        var A = 2 * p.RANDOM() * Math.PI, _ = 2 * p.RANDOM() - 1, M = Math.sqrt(1 - _ * _) * g;
        return d[0] = Math.cos(A) * M, d[1] = Math.sin(A) * M, d[2] = _ * g, d;
      }, i.transformMat4 = function(d, g, A) {
        var _ = g[0], M = g[1];
        g = g[2];
        var P = A[3] * _ + A[7] * M + A[11] * g + A[15];
        return P = P || 1, d[0] = (A[0] * _ + A[4] * M + A[8] * g + A[12]) / P, d[1] = (A[1] * _ + A[5] * M + A[9] * g + A[13]) / P, d[2] = (A[2] * _ + A[6] * M + A[10] * g + A[14]) / P, d;
      }, i.transformMat3 = function(d, g, A) {
        var _ = g[0], M = g[1];
        return g = g[2], d[0] = _ * A[0] + M * A[3] + g * A[6], d[1] = _ * A[1] + M * A[4] + g * A[7], d[2] = _ * A[2] + M * A[5] + g * A[8], d;
      }, i.transformQuat = function(d, g, A) {
        var _ = A[0], M = A[1], P = A[2], R = g[0], B = g[1];
        g = g[2];
        var F = M * g - P * B, I = P * R - _ * g, U = _ * B - M * R;
        return A = 2 * A[3], d[0] = R + F * A + 2 * (M * U - P * I), d[1] = B + I * A + 2 * (P * F - _ * U), d[2] = g + U * A + 2 * (_ * I - M * F), d;
      }, i.rotateX = function(d, g, A, _) {
        var M = [], P = [];
        return M[0] = g[0] - A[0], M[1] = g[1] - A[1], M[2] = g[2] - A[2], P[0] = M[0], P[1] = M[1] * Math.cos(_) - M[2] * Math.sin(_), P[2] = M[1] * Math.sin(_) + M[2] * Math.cos(_), d[0] = P[0] + A[0], d[1] = P[1] + A[1], d[2] = P[2] + A[2], d;
      }, i.rotateY = function(d, g, A, _) {
        var M = [], P = [];
        return M[0] = g[0] - A[0], M[1] = g[1] - A[1], M[2] = g[2] - A[2], P[0] = M[2] * Math.sin(_) + M[0] * Math.cos(_), P[1] = M[1], P[2] = M[2] * Math.cos(_) - M[0] * Math.sin(_), d[0] = P[0] + A[0], d[1] = P[1] + A[1], d[2] = P[2] + A[2], d;
      }, i.rotateZ = function(d, g, A, _) {
        var M = [], P = [];
        return M[0] = g[0] - A[0], M[1] = g[1] - A[1], M[2] = g[2] - A[2], P[0] = M[0] * Math.cos(_) - M[1] * Math.sin(_), P[1] = M[0] * Math.sin(_) + M[1] * Math.cos(_), P[2] = M[2], d[0] = P[0] + A[0], d[1] = P[1] + A[1], d[2] = P[2] + A[2], d;
      }, i.angle = function(d, g) {
        return d = a(d[0], d[1], d[2]), g = a(g[0], g[1], g[2]), l(d, d), l(g, g), g = f(d, g), 1 < g ? 0 : -1 > g ? Math.PI : Math.acos(g);
      }, i.zero = function(d) {
        return d[0] = 0, d[1] = 0, d[2] = 0, d;
      }, i.str = function(d) {
        return "vec3(" + d[0] + ", " + d[1] + ", " + d[2] + ")";
      }, i.exactEquals = function(d, g) {
        return d[0] === g[0] && d[1] === g[1] && d[2] === g[2];
      }, i.equals = function(d, g) {
        var A = d[0], _ = d[1];
        d = d[2];
        var M = g[0], P = g[1];
        return g = g[2], Math.abs(A - M) <= p.EPSILON * Math.max(1, Math.abs(A), Math.abs(M)) && Math.abs(_ - P) <= p.EPSILON * Math.max(1, Math.abs(_), Math.abs(P)) && Math.abs(d - g) <= p.EPSILON * Math.max(1, Math.abs(d), Math.abs(g));
      }, i.forEach = i.sqrLen = i.len = i.sqrDist = i.dist = i.div = i.mul = i.sub = void 0;
      var p = function(d) {
        if (d && d.__esModule)
          return d;
        var g = {};
        if (d != null) {
          for (var A in d)
            if (Object.prototype.hasOwnProperty.call(d, A)) {
              var _ = pe && ce ? ce(d, A) : {};
              _.get || _.set ? pe(g, A, _) : g[A] = d[A];
            }
        }
        return g.default = d, g;
      }($e);
      i.sub = n, i.mul = s, i.div = o, i.dist = u, i.sqrDist = c, i.len = e, i.sqrLen = v, r = function() {
        var d = t();
        return function(g, A, _, M, P, R) {
          for (A || (A = 3), _ || (_ = 0), M = M ? Math.min(M * A + _, g.length) : g.length; _ < M; _ += A)
            d[0] = g[_], d[1] = g[_ + 1], d[2] = g[_ + 2], P(d, d, R), g[_] = d[0], g[_ + 1] = d[1], g[_ + 2] = d[2];
          return g;
        };
      }(), i.forEach = r;
    });
    L(oa);
    var aa = S(function(r, i) {
      function t() {
        var l = new v.ARRAY_TYPE(4);
        return v.ARRAY_TYPE != Float32Array && (l[0] = 0, l[1] = 0, l[2] = 0, l[3] = 0), l;
      }
      function e(l, f, p) {
        return l[0] = f[0] - p[0], l[1] = f[1] - p[1], l[2] = f[2] - p[2], l[3] = f[3] - p[3], l;
      }
      function a(l, f, p) {
        return l[0] = f[0] * p[0], l[1] = f[1] * p[1], l[2] = f[2] * p[2], l[3] = f[3] * p[3], l;
      }
      function n(l, f, p) {
        return l[0] = f[0] / p[0], l[1] = f[1] / p[1], l[2] = f[2] / p[2], l[3] = f[3] / p[3], l;
      }
      function s(l, f) {
        var p = f[0] - l[0], d = f[1] - l[1], g = f[2] - l[2];
        return l = f[3] - l[3], Math.sqrt(p * p + d * d + g * g + l * l);
      }
      function o(l, f) {
        var p = f[0] - l[0], d = f[1] - l[1], g = f[2] - l[2];
        return l = f[3] - l[3], p * p + d * d + g * g + l * l;
      }
      function u(l) {
        var f = l[0], p = l[1], d = l[2];
        return l = l[3], Math.sqrt(f * f + p * p + d * d + l * l);
      }
      function c(l) {
        var f = l[0], p = l[1], d = l[2];
        return l = l[3], f * f + p * p + d * d + l * l;
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.create = t, i.clone = function(l) {
        var f = new v.ARRAY_TYPE(4);
        return f[0] = l[0], f[1] = l[1], f[2] = l[2], f[3] = l[3], f;
      }, i.fromValues = function(l, f, p, d) {
        var g = new v.ARRAY_TYPE(4);
        return g[0] = l, g[1] = f, g[2] = p, g[3] = d, g;
      }, i.copy = function(l, f) {
        return l[0] = f[0], l[1] = f[1], l[2] = f[2], l[3] = f[3], l;
      }, i.set = function(l, f, p, d, g) {
        return l[0] = f, l[1] = p, l[2] = d, l[3] = g, l;
      }, i.add = function(l, f, p) {
        return l[0] = f[0] + p[0], l[1] = f[1] + p[1], l[2] = f[2] + p[2], l[3] = f[3] + p[3], l;
      }, i.subtract = e, i.multiply = a, i.divide = n, i.ceil = function(l, f) {
        return l[0] = Math.ceil(f[0]), l[1] = Math.ceil(f[1]), l[2] = Math.ceil(f[2]), l[3] = Math.ceil(f[3]), l;
      }, i.floor = function(l, f) {
        return l[0] = Math.floor(f[0]), l[1] = Math.floor(f[1]), l[2] = Math.floor(f[2]), l[3] = Math.floor(f[3]), l;
      }, i.min = function(l, f, p) {
        return l[0] = Math.min(f[0], p[0]), l[1] = Math.min(f[1], p[1]), l[2] = Math.min(f[2], p[2]), l[3] = Math.min(f[3], p[3]), l;
      }, i.max = function(l, f, p) {
        return l[0] = Math.max(f[0], p[0]), l[1] = Math.max(f[1], p[1]), l[2] = Math.max(f[2], p[2]), l[3] = Math.max(f[3], p[3]), l;
      }, i.round = function(l, f) {
        return l[0] = Math.round(f[0]), l[1] = Math.round(f[1]), l[2] = Math.round(f[2]), l[3] = Math.round(f[3]), l;
      }, i.scale = function(l, f, p) {
        return l[0] = f[0] * p, l[1] = f[1] * p, l[2] = f[2] * p, l[3] = f[3] * p, l;
      }, i.scaleAndAdd = function(l, f, p, d) {
        return l[0] = f[0] + p[0] * d, l[1] = f[1] + p[1] * d, l[2] = f[2] + p[2] * d, l[3] = f[3] + p[3] * d, l;
      }, i.distance = s, i.squaredDistance = o, i.length = u, i.squaredLength = c, i.negate = function(l, f) {
        return l[0] = -f[0], l[1] = -f[1], l[2] = -f[2], l[3] = -f[3], l;
      }, i.inverse = function(l, f) {
        return l[0] = 1 / f[0], l[1] = 1 / f[1], l[2] = 1 / f[2], l[3] = 1 / f[3], l;
      }, i.normalize = function(l, f) {
        var p = f[0], d = f[1], g = f[2];
        f = f[3];
        var A = p * p + d * d + g * g + f * f;
        return 0 < A && (A = 1 / Math.sqrt(A)), l[0] = p * A, l[1] = d * A, l[2] = g * A, l[3] = f * A, l;
      }, i.dot = function(l, f) {
        return l[0] * f[0] + l[1] * f[1] + l[2] * f[2] + l[3] * f[3];
      }, i.cross = function(l, f, p, d) {
        var g = p[0] * d[1] - p[1] * d[0], A = p[0] * d[2] - p[2] * d[0], _ = p[0] * d[3] - p[3] * d[0], M = p[1] * d[2] - p[2] * d[1], P = p[1] * d[3] - p[3] * d[1];
        p = p[2] * d[3] - p[3] * d[2], d = f[0];
        var R = f[1], B = f[2];
        return f = f[3], l[0] = R * p - B * P + f * M, l[1] = -(d * p) + B * _ - f * A, l[2] = d * P - R * _ + f * g, l[3] = -(d * M) + R * A - B * g, l;
      }, i.lerp = function(l, f, p, d) {
        var g = f[0], A = f[1], _ = f[2];
        return f = f[3], l[0] = g + d * (p[0] - g), l[1] = A + d * (p[1] - A), l[2] = _ + d * (p[2] - _), l[3] = f + d * (p[3] - f), l;
      }, i.random = function(l, f) {
        f = f || 1;
        do
          var p = 2 * v.RANDOM() - 1, d = 2 * v.RANDOM() - 1, g = p * p + d * d;
        while (1 <= g);
        do
          var A = 2 * v.RANDOM() - 1, _ = 2 * v.RANDOM() - 1, M = A * A + _ * _;
        while (1 <= M);
        return g = Math.sqrt((1 - g) / M), l[0] = f * p, l[1] = f * d, l[2] = f * A * g, l[3] = f * _ * g, l;
      }, i.transformMat4 = function(l, f, p) {
        var d = f[0], g = f[1], A = f[2];
        return f = f[3], l[0] = p[0] * d + p[4] * g + p[8] * A + p[12] * f, l[1] = p[1] * d + p[5] * g + p[9] * A + p[13] * f, l[2] = p[2] * d + p[6] * g + p[10] * A + p[14] * f, l[3] = p[3] * d + p[7] * g + p[11] * A + p[15] * f, l;
      }, i.transformQuat = function(l, f, p) {
        var d = f[0], g = f[1], A = f[2], _ = p[0], M = p[1], P = p[2];
        p = p[3];
        var R = p * d + M * A - P * g, B = p * g + P * d - _ * A, F = p * A + _ * g - M * d;
        return d = -_ * d - M * g - P * A, l[0] = R * p + d * -_ + B * -P - F * -M, l[1] = B * p + d * -M + F * -_ - R * -P, l[2] = F * p + d * -P + R * -M - B * -_, l[3] = f[3], l;
      }, i.zero = function(l) {
        return l[0] = 0, l[1] = 0, l[2] = 0, l[3] = 0, l;
      }, i.str = function(l) {
        return "vec4(" + l[0] + ", " + l[1] + ", " + l[2] + ", " + l[3] + ")";
      }, i.exactEquals = function(l, f) {
        return l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3];
      }, i.equals = function(l, f) {
        var p = l[0], d = l[1], g = l[2];
        l = l[3];
        var A = f[0], _ = f[1], M = f[2];
        return f = f[3], Math.abs(p - A) <= v.EPSILON * Math.max(1, Math.abs(p), Math.abs(A)) && Math.abs(d - _) <= v.EPSILON * Math.max(1, Math.abs(d), Math.abs(_)) && Math.abs(g - M) <= v.EPSILON * Math.max(1, Math.abs(g), Math.abs(M)) && Math.abs(l - f) <= v.EPSILON * Math.max(1, Math.abs(l), Math.abs(f));
      }, i.forEach = i.sqrLen = i.len = i.sqrDist = i.dist = i.div = i.mul = i.sub = void 0;
      var v = function(l) {
        if (l && l.__esModule)
          return l;
        var f = {};
        if (l != null) {
          for (var p in l)
            if (Object.prototype.hasOwnProperty.call(l, p)) {
              var d = pe && ce ? ce(l, p) : {};
              d.get || d.set ? pe(f, p, d) : f[p] = l[p];
            }
        }
        return f.default = l, f;
      }($e);
      i.sub = e, i.mul = a, i.div = n, i.dist = s, i.sqrDist = o, i.len = u, i.sqrLen = c, r = function() {
        var l = t();
        return function(f, p, d, g, A, _) {
          for (p || (p = 4), d || (d = 0), g = g ? Math.min(g * p + d, f.length) : f.length; d < g; d += p)
            l[0] = f[d], l[1] = f[d + 1], l[2] = f[d + 2], l[3] = f[d + 3], A(l, l, _), f[d] = l[0], f[d + 1] = l[1], f[d + 2] = l[2], f[d + 3] = l[3];
          return f;
        };
      }(), i.forEach = r;
    });
    L(aa);
    var sa = S(function(r, i) {
      function t(p) {
        if (p && p.__esModule)
          return p;
        var d = {};
        if (p != null) {
          for (var g in p)
            if (Object.prototype.hasOwnProperty.call(p, g)) {
              var A = pe && ce ? ce(p, g) : {};
              A.get || A.set ? pe(d, g, A) : d[g] = p[g];
            }
        }
        return d.default = p, d;
      }
      function e() {
        var p = new u.ARRAY_TYPE(4);
        return u.ARRAY_TYPE != Float32Array && (p[0] = 0, p[1] = 0, p[2] = 0), p[3] = 1, p;
      }
      function a(p, d, g) {
        g *= 0.5;
        var A = Math.sin(g);
        return p[0] = A * d[0], p[1] = A * d[1], p[2] = A * d[2], p[3] = Math.cos(g), p;
      }
      function n(p, d, g) {
        var A = d[0], _ = d[1], M = d[2];
        d = d[3];
        var P = g[0], R = g[1], B = g[2];
        return g = g[3], p[0] = A * g + d * P + _ * B - M * R, p[1] = _ * g + d * R + M * P - A * B, p[2] = M * g + d * B + A * R - _ * P, p[3] = d * g - A * P - _ * R - M * B, p;
      }
      function s(p, d, g, A) {
        var _ = d[0], M = d[1], P = d[2];
        d = d[3];
        var R = g[0], B = g[1], F = g[2];
        g = g[3];
        var I = _ * R + M * B + P * F + d * g;
        if (0 > I && (I = -I, R = -R, B = -B, F = -F, g = -g), 1 - I > u.EPSILON) {
          var U = Math.acos(I), G = Math.sin(U);
          I = Math.sin((1 - A) * U) / G, A = Math.sin(A * U) / G;
        } else
          I = 1 - A;
        return p[0] = I * _ + A * R, p[1] = I * M + A * B, p[2] = I * P + A * F, p[3] = I * d + A * g, p;
      }
      function o(p, d) {
        var g = d[0] + d[4] + d[8];
        if (0 < g)
          g = Math.sqrt(g + 1), p[3] = 0.5 * g, g = 0.5 / g, p[0] = (d[5] - d[7]) * g, p[1] = (d[6] - d[2]) * g, p[2] = (d[1] - d[3]) * g;
        else {
          var A = 0;
          d[4] > d[0] && (A = 1), d[8] > d[3 * A + A] && (A = 2);
          var _ = (A + 1) % 3, M = (A + 2) % 3;
          g = Math.sqrt(d[3 * A + A] - d[3 * _ + _] - d[3 * M + M] + 1), p[A] = 0.5 * g, g = 0.5 / g, p[3] = (d[3 * _ + M] - d[3 * M + _]) * g, p[_] = (d[3 * _ + A] + d[3 * A + _]) * g, p[M] = (d[3 * M + A] + d[3 * A + M]) * g;
        }
        return p;
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.create = e, i.identity = function(p) {
        return p[0] = 0, p[1] = 0, p[2] = 0, p[3] = 1, p;
      }, i.setAxisAngle = a, i.getAxisAngle = function(p, d) {
        var g = 2 * Math.acos(d[3]), A = Math.sin(g / 2);
        return A > u.EPSILON ? (p[0] = d[0] / A, p[1] = d[1] / A, p[2] = d[2] / A) : (p[0] = 1, p[1] = 0, p[2] = 0), g;
      }, i.multiply = n, i.rotateX = function(p, d, g) {
        g *= 0.5;
        var A = d[0], _ = d[1], M = d[2];
        d = d[3];
        var P = Math.sin(g);
        return g = Math.cos(g), p[0] = A * g + d * P, p[1] = _ * g + M * P, p[2] = M * g - _ * P, p[3] = d * g - A * P, p;
      }, i.rotateY = function(p, d, g) {
        g *= 0.5;
        var A = d[0], _ = d[1], M = d[2];
        d = d[3];
        var P = Math.sin(g);
        return g = Math.cos(g), p[0] = A * g - M * P, p[1] = _ * g + d * P, p[2] = M * g + A * P, p[3] = d * g - _ * P, p;
      }, i.rotateZ = function(p, d, g) {
        g *= 0.5;
        var A = d[0], _ = d[1], M = d[2];
        d = d[3];
        var P = Math.sin(g);
        return g = Math.cos(g), p[0] = A * g + _ * P, p[1] = _ * g - A * P, p[2] = M * g + d * P, p[3] = d * g - M * P, p;
      }, i.calculateW = function(p, d) {
        var g = d[0], A = d[1];
        return d = d[2], p[0] = g, p[1] = A, p[2] = d, p[3] = Math.sqrt(Math.abs(1 - g * g - A * A - d * d)), p;
      }, i.slerp = s, i.random = function(p) {
        var d = u.RANDOM(), g = u.RANDOM(), A = u.RANDOM(), _ = Math.sqrt(1 - d);
        return d = Math.sqrt(d), p[0] = _ * Math.sin(2 * Math.PI * g), p[1] = _ * Math.cos(2 * Math.PI * g), p[2] = d * Math.sin(2 * Math.PI * A), p[3] = d * Math.cos(2 * Math.PI * A), p;
      }, i.invert = function(p, d) {
        var g = d[0], A = d[1], _ = d[2];
        d = d[3];
        var M = g * g + A * A + _ * _ + d * d;
        return M = M ? 1 / M : 0, p[0] = -g * M, p[1] = -A * M, p[2] = -_ * M, p[3] = d * M, p;
      }, i.conjugate = function(p, d) {
        return p[0] = -d[0], p[1] = -d[1], p[2] = -d[2], p[3] = d[3], p;
      }, i.fromMat3 = o, i.fromEuler = function(p, d, g, A) {
        var _ = 0.5 * Math.PI / 180;
        d *= _, g *= _, A *= _, _ = Math.sin(d), d = Math.cos(d);
        var M = Math.sin(g);
        g = Math.cos(g);
        var P = Math.sin(A);
        return A = Math.cos(A), p[0] = _ * g * A - d * M * P, p[1] = d * M * A + _ * g * P, p[2] = d * g * P - _ * M * A, p[3] = d * g * A + _ * M * P, p;
      }, i.str = function(p) {
        return "quat(" + p[0] + ", " + p[1] + ", " + p[2] + ", " + p[3] + ")";
      }, i.setAxes = i.sqlerp = i.rotationTo = i.equals = i.exactEquals = i.normalize = i.sqrLen = i.squaredLength = i.len = i.length = i.lerp = i.dot = i.scale = i.mul = i.add = i.set = i.copy = i.fromValues = i.clone = void 0;
      var u = t($e), c = t(ia), v = t(oa);
      r = t(aa), i.clone = r.clone, i.fromValues = r.fromValues, i.copy = r.copy, i.set = r.set, i.add = r.add, i.mul = n, i.scale = r.scale, i.dot = r.dot, i.lerp = r.lerp;
      var l = r.length;
      i.length = l, i.len = l, l = r.squaredLength, i.squaredLength = l, i.sqrLen = l;
      var f = r.normalize;
      i.normalize = f, i.exactEquals = r.exactEquals, i.equals = r.equals, r = function() {
        var p = v.create(), d = v.fromValues(1, 0, 0), g = v.fromValues(0, 1, 0);
        return function(A, _, M) {
          var P = v.dot(_, M);
          return -0.999999 > P ? (v.cross(p, d, _), 1e-6 > v.len(p) && v.cross(p, g, _), v.normalize(p, p), a(A, p, Math.PI), A) : 0.999999 < P ? (A[0] = 0, A[1] = 0, A[2] = 0, A[3] = 1, A) : (v.cross(p, _, M), A[0] = p[0], A[1] = p[1], A[2] = p[2], A[3] = 1 + P, f(
            A,
            A
          ));
        };
      }(), i.rotationTo = r, r = function() {
        var p = e(), d = e();
        return function(g, A, _, M, P, R) {
          return s(p, A, P, R), s(d, _, M, R), s(g, p, d, 2 * R * (1 - R)), g;
        };
      }(), i.sqlerp = r, r = function() {
        var p = c.create();
        return function(d, g, A, _) {
          return p[0] = A[0], p[3] = A[1], p[6] = A[2], p[1] = _[0], p[4] = _[1], p[7] = _[2], p[2] = -g[0], p[5] = -g[1], p[8] = -g[2], f(d, o(d, p));
        };
      }(), i.setAxes = r;
    });
    L(sa);
    var Vu = S(function(r, i) {
      function t(l) {
        if (l && l.__esModule)
          return l;
        var f = {};
        if (l != null) {
          for (var p in l)
            if (Object.prototype.hasOwnProperty.call(l, p)) {
              var d = pe && ce ? ce(l, p) : {};
              d.get || d.set ? pe(f, p, d) : f[p] = l[p];
            }
        }
        return f.default = l, f;
      }
      function e(l, f, p) {
        var d = 0.5 * p[0], g = 0.5 * p[1];
        p = 0.5 * p[2];
        var A = f[0], _ = f[1], M = f[2];
        return f = f[3], l[0] = A, l[1] = _, l[2] = M, l[3] = f, l[4] = d * f + g * M - p * _, l[5] = g * f + p * A - d * M, l[6] = p * f + d * _ - g * A, l[7] = -d * A - g * _ - p * M, l;
      }
      function a(l, f) {
        return l[0] = f[0], l[1] = f[1], l[2] = f[2], l[3] = f[3], l[4] = f[4], l[5] = f[5], l[6] = f[6], l[7] = f[7], l;
      }
      function n(l, f, p) {
        var d = f[0], g = f[1], A = f[2], _ = f[3], M = p[4], P = p[5], R = p[6], B = p[7], F = f[4], I = f[5], U = f[6];
        f = f[7];
        var G = p[0], Z = p[1], Q = p[2];
        return p = p[3], l[0] = d * p + _ * G + g * Q - A * Z, l[1] = g * p + _ * Z + A * G - d * Q, l[2] = A * p + _ * Q + d * Z - g * G, l[3] = _ * p - d * G - g * Z - A * Q, l[4] = d * B + _ * M + g * R - A * P + F * p + f * G + I * Q - U * Z, l[5] = g * B + _ * P + A * M - d * R + I * p + f * Z + U * G - F * Q, l[6] = A * B + _ * R + d * P - g * M + U * p + f * Q + F * Z - I * G, l[7] = _ * B - d * M - g * P - A * R + f * p - F * G - I * Z - U * Q, l;
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.create = function() {
        var l = new s.ARRAY_TYPE(8);
        return s.ARRAY_TYPE != Float32Array && (l[0] = 0, l[1] = 0, l[2] = 0, l[4] = 0, l[5] = 0, l[6] = 0, l[7] = 0), l[3] = 1, l;
      }, i.clone = function(l) {
        var f = new s.ARRAY_TYPE(8);
        return f[0] = l[0], f[1] = l[1], f[2] = l[2], f[3] = l[3], f[4] = l[4], f[5] = l[5], f[6] = l[6], f[7] = l[7], f;
      }, i.fromValues = function(l, f, p, d, g, A, _, M) {
        var P = new s.ARRAY_TYPE(8);
        return P[0] = l, P[1] = f, P[2] = p, P[3] = d, P[4] = g, P[5] = A, P[6] = _, P[7] = M, P;
      }, i.fromRotationTranslationValues = function(l, f, p, d, g, A, _) {
        var M = new s.ARRAY_TYPE(8);
        return M[0] = l, M[1] = f, M[2] = p, M[3] = d, g *= 0.5, A *= 0.5, _ *= 0.5, M[4] = g * d + A * p - _ * f, M[5] = A * d + _ * l - g * p, M[6] = _ * d + g * f - A * l, M[7] = -g * l - A * f - _ * p, M;
      }, i.fromRotationTranslation = e, i.fromTranslation = function(l, f) {
        return l[0] = 0, l[1] = 0, l[2] = 0, l[3] = 1, l[4] = 0.5 * f[0], l[5] = 0.5 * f[1], l[6] = 0.5 * f[2], l[7] = 0, l;
      }, i.fromRotation = function(l, f) {
        return l[0] = f[0], l[1] = f[1], l[2] = f[2], l[3] = f[3], l[4] = 0, l[5] = 0, l[6] = 0, l[7] = 0, l;
      }, i.fromMat4 = function(l, f) {
        var p = o.create();
        u.getRotation(p, f);
        var d = new s.ARRAY_TYPE(3);
        return u.getTranslation(d, f), e(l, p, d), l;
      }, i.copy = a, i.identity = function(l) {
        return l[0] = 0, l[1] = 0, l[2] = 0, l[3] = 1, l[4] = 0, l[5] = 0, l[6] = 0, l[7] = 0, l;
      }, i.set = function(l, f, p, d, g, A, _, M, P) {
        return l[0] = f, l[1] = p, l[2] = d, l[3] = g, l[4] = A, l[5] = _, l[6] = M, l[7] = P, l;
      }, i.getDual = function(l, f) {
        return l[0] = f[4], l[1] = f[5], l[2] = f[6], l[3] = f[7], l;
      }, i.setDual = function(l, f) {
        return l[4] = f[0], l[5] = f[1], l[6] = f[2], l[7] = f[3], l;
      }, i.getTranslation = function(l, f) {
        var p = f[4], d = f[5], g = f[6], A = f[7], _ = -f[0], M = -f[1], P = -f[2];
        return f = f[3], l[0] = 2 * (p * f + A * _ + d * P - g * M), l[1] = 2 * (d * f + A * M + g * _ - p * P), l[2] = 2 * (g * f + A * P + p * M - d * _), l;
      }, i.translate = function(l, f, p) {
        var d = f[0], g = f[1], A = f[2], _ = f[3], M = 0.5 * p[0], P = 0.5 * p[1];
        p = 0.5 * p[2];
        var R = f[4], B = f[5], F = f[6];
        return f = f[7], l[0] = d, l[1] = g, l[2] = A, l[3] = _, l[4] = _ * M + g * p - A * P + R, l[5] = _ * P + A * M - d * p + B, l[6] = _ * p + d * P - g * M + F, l[7] = -d * M - g * P - A * p + f, l;
      }, i.rotateX = function(l, f, p) {
        var d = -f[0], g = -f[1], A = -f[2], _ = f[3], M = f[4], P = f[5], R = f[6], B = f[7], F = M * _ + B * d + P * A - R * g, I = P * _ + B * g + R * d - M * A, U = R * _ + B * A + M * g - P * d;
        return M = B * _ - M * d - P * g - R * A, o.rotateX(l, f, p), d = l[0], g = l[1], A = l[2], _ = l[3], l[4] = F * _ + M * d + I * A - U * g, l[5] = I * _ + M * g + U * d - F * A, l[6] = U * _ + M * A + F * g - I * d, l[7] = M * _ - F * d - I * g - U * A, l;
      }, i.rotateY = function(l, f, p) {
        var d = -f[0], g = -f[1], A = -f[2], _ = f[3], M = f[4], P = f[5], R = f[6], B = f[7], F = M * _ + B * d + P * A - R * g, I = P * _ + B * g + R * d - M * A, U = R * _ + B * A + M * g - P * d;
        return M = B * _ - M * d - P * g - R * A, o.rotateY(l, f, p), d = l[0], g = l[1], A = l[2], _ = l[3], l[4] = F * _ + M * d + I * A - U * g, l[5] = I * _ + M * g + U * d - F * A, l[6] = U * _ + M * A + F * g - I * d, l[7] = M * _ - F * d - I * g - U * A, l;
      }, i.rotateZ = function(l, f, p) {
        var d = -f[0], g = -f[1], A = -f[2], _ = f[3], M = f[4], P = f[5], R = f[6], B = f[7], F = M * _ + B * d + P * A - R * g, I = P * _ + B * g + R * d - M * A, U = R * _ + B * A + M * g - P * d;
        return M = B * _ - M * d - P * g - R * A, o.rotateZ(l, f, p), d = l[0], g = l[1], A = l[2], _ = l[3], l[4] = F * _ + M * d + I * A - U * g, l[5] = I * _ + M * g + U * d - F * A, l[6] = U * _ + M * A + F * g - I * d, l[7] = M * _ - F * d - I * g - U * A, l;
      }, i.rotateByQuatAppend = function(l, f, p) {
        var d = p[0], g = p[1], A = p[2];
        p = p[3];
        var _ = f[0], M = f[1], P = f[2], R = f[3];
        return l[0] = _ * p + R * d + M * A - P * g, l[1] = M * p + R * g + P * d - _ * A, l[2] = P * p + R * A + _ * g - M * d, l[3] = R * p - _ * d - M * g - P * A, _ = f[4], M = f[5], P = f[6], R = f[7], l[4] = _ * p + R * d + M * A - P * g, l[5] = M * p + R * g + P * d - _ * A, l[6] = P * p + R * A + _ * g - M * d, l[7] = R * p - _ * d - M * g - P * A, l;
      }, i.rotateByQuatPrepend = function(l, f, p) {
        var d = f[0], g = f[1], A = f[2];
        f = f[3];
        var _ = p[0], M = p[1], P = p[2], R = p[3];
        return l[0] = d * R + f * _ + g * P - A * M, l[1] = g * R + f * M + A * _ - d * P, l[2] = A * R + f * P + d * M - g * _, l[3] = f * R - d * _ - g * M - A * P, _ = p[4], M = p[5], P = p[6], R = p[7], l[4] = d * R + f * _ + g * P - A * M, l[5] = g * R + f * M + A * _ - d * P, l[6] = A * R + f * P + d * M - g * _, l[7] = f * R - d * _ - g * M - A * P, l;
      }, i.rotateAroundAxis = function(l, f, p, d) {
        if (Math.abs(d) < s.EPSILON)
          return a(l, f);
        var g = Math.sqrt(p[0] * p[0] + p[1] * p[1] + p[2] * p[2]);
        d *= 0.5;
        var A = Math.sin(d), _ = A * p[0] / g, M = A * p[1] / g;
        p = A * p[2] / g, d = Math.cos(d), g = f[0], A = f[1];
        var P = f[2], R = f[3];
        return l[0] = g * d + R * _ + A * p - P * M, l[1] = A * d + R * M + P * _ - g * p, l[2] = P * d + R * p + g * M - A * _, l[3] = R * d - g * _ - A * M - P * p, g = f[4], A = f[5], P = f[6], f = f[7], l[4] = g * d + f * _ + A * p - P * M, l[5] = A * d + f * M + P * _ - g * p, l[6] = P * d + f * p + g * M - A * _, l[7] = f * d - g * _ - A * M - P * p, l;
      }, i.add = function(l, f, p) {
        return l[0] = f[0] + p[0], l[1] = f[1] + p[1], l[2] = f[2] + p[2], l[3] = f[3] + p[3], l[4] = f[4] + p[4], l[5] = f[5] + p[5], l[6] = f[6] + p[6], l[7] = f[7] + p[7], l;
      }, i.multiply = n, i.scale = function(l, f, p) {
        return l[0] = f[0] * p, l[1] = f[1] * p, l[2] = f[2] * p, l[3] = f[3] * p, l[4] = f[4] * p, l[5] = f[5] * p, l[6] = f[6] * p, l[7] = f[7] * p, l;
      }, i.lerp = function(l, f, p, d) {
        var g = 1 - d;
        return 0 > c(f, p) && (d = -d), l[0] = f[0] * g + p[0] * d, l[1] = f[1] * g + p[1] * d, l[2] = f[2] * g + p[2] * d, l[3] = f[3] * g + p[3] * d, l[4] = f[4] * g + p[4] * d, l[5] = f[5] * g + p[5] * d, l[6] = f[6] * g + p[6] * d, l[7] = f[7] * g + p[7] * d, l;
      }, i.invert = function(l, f) {
        var p = v(f);
        return l[0] = -f[0] / p, l[1] = -f[1] / p, l[2] = -f[2] / p, l[3] = f[3] / p, l[4] = -f[4] / p, l[5] = -f[5] / p, l[6] = -f[6] / p, l[7] = f[7] / p, l;
      }, i.conjugate = function(l, f) {
        return l[0] = -f[0], l[1] = -f[1], l[2] = -f[2], l[3] = f[3], l[4] = -f[4], l[5] = -f[5], l[6] = -f[6], l[7] = f[7], l;
      }, i.normalize = function(l, f) {
        var p = v(f);
        if (0 < p) {
          p = Math.sqrt(p);
          var d = f[0] / p, g = f[1] / p, A = f[2] / p, _ = f[3] / p, M = f[4], P = f[5], R = f[6];
          f = f[7];
          var B = d * M + g * P + A * R + _ * f;
          l[0] = d, l[1] = g, l[2] = A, l[3] = _, l[4] = (M - d * B) / p, l[5] = (P - g * B) / p, l[6] = (R - A * B) / p, l[7] = (f - _ * B) / p;
        }
        return l;
      }, i.str = function(l) {
        return "quat2(" + l[0] + ", " + l[1] + ", " + l[2] + ", " + l[3] + ", " + l[4] + ", " + l[5] + ", " + l[6] + ", " + l[7] + ")";
      }, i.exactEquals = function(l, f) {
        return l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && l[4] === f[4] && l[5] === f[5] && l[6] === f[6] && l[7] === f[7];
      }, i.equals = function(l, f) {
        var p = l[0], d = l[1], g = l[2], A = l[3], _ = l[4], M = l[5], P = l[6];
        l = l[7];
        var R = f[0], B = f[1], F = f[2], I = f[3], U = f[4], G = f[5], Z = f[6];
        return f = f[7], Math.abs(p - R) <= s.EPSILON * Math.max(1, Math.abs(p), Math.abs(R)) && Math.abs(d - B) <= s.EPSILON * Math.max(1, Math.abs(d), Math.abs(B)) && Math.abs(g - F) <= s.EPSILON * Math.max(1, Math.abs(g), Math.abs(F)) && Math.abs(A - I) <= s.EPSILON * Math.max(1, Math.abs(A), Math.abs(I)) && Math.abs(_ - U) <= s.EPSILON * Math.max(1, Math.abs(_), Math.abs(U)) && Math.abs(M - G) <= s.EPSILON * Math.max(1, Math.abs(M), Math.abs(G)) && Math.abs(P - Z) <= s.EPSILON * Math.max(1, Math.abs(P), Math.abs(Z)) && Math.abs(l - f) <= s.EPSILON * Math.max(1, Math.abs(l), Math.abs(f));
      }, i.sqrLen = i.squaredLength = i.len = i.length = i.dot = i.mul = i.setReal = i.getReal = void 0;
      var s = t($e), o = t(sa), u = t(na);
      i.getReal = o.copy, i.setReal = o.copy, i.mul = n;
      var c = o.dot;
      i.dot = c, r = o.length, i.length = r, i.len = r;
      var v = o.squaredLength;
      i.squaredLength = v, i.sqrLen = v;
    });
    L(Vu);
    var Yu = S(function(r, i) {
      function t() {
        var l = new v.ARRAY_TYPE(2);
        return v.ARRAY_TYPE != Float32Array && (l[0] = 0, l[1] = 0), l;
      }
      function e(l, f, p) {
        return l[0] = f[0] - p[0], l[1] = f[1] - p[1], l;
      }
      function a(l, f, p) {
        return l[0] = f[0] * p[0], l[1] = f[1] * p[1], l;
      }
      function n(l, f, p) {
        return l[0] = f[0] / p[0], l[1] = f[1] / p[1], l;
      }
      function s(l, f) {
        var p = f[0] - l[0];
        return l = f[1] - l[1], Math.sqrt(p * p + l * l);
      }
      function o(l, f) {
        var p = f[0] - l[0];
        return l = f[1] - l[1], p * p + l * l;
      }
      function u(l) {
        var f = l[0];
        return l = l[1], Math.sqrt(f * f + l * l);
      }
      function c(l) {
        var f = l[0];
        return l = l[1], f * f + l * l;
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.create = t, i.clone = function(l) {
        var f = new v.ARRAY_TYPE(2);
        return f[0] = l[0], f[1] = l[1], f;
      }, i.fromValues = function(l, f) {
        var p = new v.ARRAY_TYPE(2);
        return p[0] = l, p[1] = f, p;
      }, i.copy = function(l, f) {
        return l[0] = f[0], l[1] = f[1], l;
      }, i.set = function(l, f, p) {
        return l[0] = f, l[1] = p, l;
      }, i.add = function(l, f, p) {
        return l[0] = f[0] + p[0], l[1] = f[1] + p[1], l;
      }, i.subtract = e, i.multiply = a, i.divide = n, i.ceil = function(l, f) {
        return l[0] = Math.ceil(f[0]), l[1] = Math.ceil(f[1]), l;
      }, i.floor = function(l, f) {
        return l[0] = Math.floor(f[0]), l[1] = Math.floor(f[1]), l;
      }, i.min = function(l, f, p) {
        return l[0] = Math.min(f[0], p[0]), l[1] = Math.min(f[1], p[1]), l;
      }, i.max = function(l, f, p) {
        return l[0] = Math.max(f[0], p[0]), l[1] = Math.max(f[1], p[1]), l;
      }, i.round = function(l, f) {
        return l[0] = Math.round(f[0]), l[1] = Math.round(f[1]), l;
      }, i.scale = function(l, f, p) {
        return l[0] = f[0] * p, l[1] = f[1] * p, l;
      }, i.scaleAndAdd = function(l, f, p, d) {
        return l[0] = f[0] + p[0] * d, l[1] = f[1] + p[1] * d, l;
      }, i.distance = s, i.squaredDistance = o, i.length = u, i.squaredLength = c, i.negate = function(l, f) {
        return l[0] = -f[0], l[1] = -f[1], l;
      }, i.inverse = function(l, f) {
        return l[0] = 1 / f[0], l[1] = 1 / f[1], l;
      }, i.normalize = function(l, f) {
        var p = f[0], d = f[1];
        return p = p * p + d * d, 0 < p && (p = 1 / Math.sqrt(p)), l[0] = f[0] * p, l[1] = f[1] * p, l;
      }, i.dot = function(l, f) {
        return l[0] * f[0] + l[1] * f[1];
      }, i.cross = function(l, f, p) {
        return f = f[0] * p[1] - f[1] * p[0], l[0] = l[1] = 0, l[2] = f, l;
      }, i.lerp = function(l, f, p, d) {
        var g = f[0];
        return f = f[1], l[0] = g + d * (p[0] - g), l[1] = f + d * (p[1] - f), l;
      }, i.random = function(l, f) {
        f = f || 1;
        var p = 2 * v.RANDOM() * Math.PI;
        return l[0] = Math.cos(p) * f, l[1] = Math.sin(p) * f, l;
      }, i.transformMat2 = function(l, f, p) {
        var d = f[0];
        return f = f[1], l[0] = p[0] * d + p[2] * f, l[1] = p[1] * d + p[3] * f, l;
      }, i.transformMat2d = function(l, f, p) {
        var d = f[0];
        return f = f[1], l[0] = p[0] * d + p[2] * f + p[4], l[1] = p[1] * d + p[3] * f + p[5], l;
      }, i.transformMat3 = function(l, f, p) {
        var d = f[0];
        return f = f[1], l[0] = p[0] * d + p[3] * f + p[6], l[1] = p[1] * d + p[4] * f + p[7], l;
      }, i.transformMat4 = function(l, f, p) {
        var d = f[0];
        return f = f[1], l[0] = p[0] * d + p[4] * f + p[12], l[1] = p[1] * d + p[5] * f + p[13], l;
      }, i.rotate = function(l, f, p, d) {
        var g = f[0] - p[0];
        f = f[1] - p[1];
        var A = Math.sin(d);
        return d = Math.cos(d), l[0] = g * d - f * A + p[0], l[1] = g * A + f * d + p[1], l;
      }, i.angle = function(l, f) {
        var p = l[0];
        l = l[1];
        var d = f[0];
        f = f[1];
        var g = p * p + l * l;
        0 < g && (g = 1 / Math.sqrt(g));
        var A = d * d + f * f;
        return 0 < A && (A = 1 / Math.sqrt(A)), p = (p * d + l * f) * g * A, 1 < p ? 0 : -1 > p ? Math.PI : Math.acos(p);
      }, i.zero = function(l) {
        return l[0] = 0, l[1] = 0, l;
      }, i.str = function(l) {
        return "vec2(" + l[0] + ", " + l[1] + ")";
      }, i.exactEquals = function(l, f) {
        return l[0] === f[0] && l[1] === f[1];
      }, i.equals = function(l, f) {
        var p = l[0];
        l = l[1];
        var d = f[0];
        return f = f[1], Math.abs(p - d) <= v.EPSILON * Math.max(1, Math.abs(p), Math.abs(d)) && Math.abs(l - f) <= v.EPSILON * Math.max(1, Math.abs(l), Math.abs(f));
      }, i.forEach = i.sqrLen = i.sqrDist = i.dist = i.div = i.mul = i.sub = i.len = void 0;
      var v = function(l) {
        if (l && l.__esModule)
          return l;
        var f = {};
        if (l != null) {
          for (var p in l)
            if (Object.prototype.hasOwnProperty.call(l, p)) {
              var d = pe && ce ? ce(l, p) : {};
              d.get || d.set ? pe(f, p, d) : f[p] = l[p];
            }
        }
        return f.default = l, f;
      }($e);
      i.len = u, i.sub = e, i.mul = a, i.div = n, i.dist = s, i.sqrDist = o, i.sqrLen = c, r = function() {
        var l = t();
        return function(f, p, d, g, A, _) {
          for (p || (p = 2), d || (d = 0), g = g ? Math.min(g * p + d, f.length) : f.length; d < g; d += p)
            l[0] = f[d], l[1] = f[d + 1], A(l, l, _), f[d] = l[0], f[d + 1] = l[1];
          return f;
        };
      }(), i.forEach = r;
    });
    L(Yu);
    var Ye = S(function(r, i) {
      function t(e) {
        if (e && e.__esModule)
          return e;
        var a = {};
        if (e != null) {
          for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) {
              var s = pe && ce ? ce(e, n) : {};
              s.get || s.set ? pe(a, n, s) : a[n] = e[n];
            }
        }
        return a.default = e, a;
      }
      Object.defineProperty(
        i,
        "__esModule",
        { value: !0 }
      ), i.vec4 = i.vec3 = i.vec2 = i.quat2 = i.quat = i.mat4 = i.mat3 = i.mat2d = i.mat2 = i.glMatrix = void 0, r = t($e), i.glMatrix = r, r = t(Wu), i.mat2 = r, r = t(Xu), i.mat2d = r, r = t(ia), i.mat3 = r, r = t(na), i.mat4 = r, r = t(sa), i.quat = r, r = t(Vu), i.quat2 = r, r = t(Yu), i.vec2 = r, r = t(oa), i.vec3 = r, r = t(aa), i.vec4 = r;
    });
    L(Ye);
    var ue = Ye.vec4, Mt = Ye.vec3, It = Ye.vec2, Yc = Ye.quat2, Qn = Ye.quat, pt = Ye.mat4, Zc = Ye.mat3, Jc = Ye.mat2d, Qc = Ye.mat2, Kc = Ye.glMatrix, Ft = function() {
      function r(i, t, e) {
        ft(this, r), this.options = t, this.gl = i, e && (this.map = e.map), e = this.getVertexShader(t.vertexShader);
        var a = this.getFragmentShader(t.fragmentShader);
        t = i.createShader(i.VERTEX_SHADER), i.shaderSource(t, e), i.compileShader(t), i.getShaderParameter(t, i.COMPILE_STATUS) ? (e = i.createShader(i.FRAGMENT_SHADER), i.shaderSource(e, a), i.compileShader(e), i.getShaderParameter(e, i.COMPILE_STATUS) ? (a = i.createProgram(), i.attachShader(a, t), i.attachShader(a, e), i.deleteShader(t), i.deleteShader(e), i.linkProgram(a), i.getProgramParameter(a, i.LINK_STATUS) ? t = a : (t = "Shader program failed to link.  The error log is:" + i.getProgramInfoLog(a), console.error(t), t = -1)) : (t = "Fragment shader failed to compile.  The error log is:" + i.getShaderInfoLog(e), console.error(t), t = -1)) : (t = "Vertex shader failed to compile.  The error log is:" + i.getShaderInfoLog(t), console.error(t), t = -1), t = this.program = t, e = {}, a = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES);
        for (var n = 0; n < a; n++) {
          var s = i.getActiveAttrib(t, n);
          e[s.name] = i.getAttribLocation(t, s.name);
        }
        n = {}, s = {};
        for (var o = i.getProgramParameter(t, i.ACTIVE_UNIFORMS), u = 0; u < o; u++) {
          var c = i.getActiveUniform(t, u);
          n[c.name] = i.getUniformLocation(t, c.name), s[c.name] = c.type;
        }
        this.parameter = i = { attributes: e, numAttributes: a, uniformsType: s, uniforms: n }, this.attributes = i.attributes, this.uniforms = i.uniforms, this.parameter = i;
      }
      return ct(r, [{ key: "getVertexShader", value: function(i) {
        var t = "";
        return this.map && this.map.type === "cesium" && (t = `#define LOG_DEPTH
`), t += `#ifdef LOG_DEPTH
uniform float currentFrustumX;varying float v_depthFromNearPlusOne;
#endif
uniform vec2 MAPV_resolution;
#if defined(PICK)
uniform bool uIsPickRender;attribute vec3 aPickColor;uniform vec3 uPickedColor;varying vec4 vPickColor;uniform bool uEnablePicked;bool mapvIsPicked(){return uEnablePicked&&aPickColor==uPickedColor;}
#endif
void afterMain(){
#if defined(LOG_DEPTH)
v_depthFromNearPlusOne=(gl_Position.w-currentFrustumX)+1.0;gl_Position.z=clamp(gl_Position.z/gl_Position.w,-1.0,1.0)*gl_Position.w;
#endif
#if defined(PICK)
vPickColor=vec4(aPickColor,0.0);if(mapvIsPicked()){vPickColor.a=1.0;}
#endif
}`, i = this.getDefines() + t + i, i = i.replace("void main", "void originMain"), i + "void main() {originMain(); afterMain();}";
      } }, { key: "getFragmentShader", value: function(i) {
        var t = "";
        return this.map && this.map.type === "cesium" && (t = `#define LOG_DEPTH
`), t += `#if defined(LOG_DEPTH)
#extension GL_EXT_frag_depth : enable
#endif
precision highp float;uniform vec2 MAPV_resolution;uniform bool uIsPickRender;
#if defined(PICK)
varying vec4 vPickColor;bool mapvIsPicked(){return vPickColor.a==1.0;}
#endif
#if defined(LOG_DEPTH)
uniform float oneOverLog2FarDepthFromNearPlusOne;uniform float farDepthFromNearPlusOne;varying float v_depthFromNearPlusOne;void writeLogDepth(float depth){if(depth<=0.9999999||depth>farDepthFromNearPlusOne){discard;}gl_FragDepthEXT=log2(depth)*oneOverLog2FarDepthFromNearPlusOne;}
#endif
void afterMain(){
#if defined(PICK)
if(uIsPickRender){gl_FragColor=vec4(vPickColor.rgb,1.0);return;}
#endif
#if defined(LOG_DEPTH)
writeLogDepth(v_depthFromNearPlusOne);
#endif
}`, i = this.getDefines() + t + i, i = i.replace("void main", "void originMain"), i + "void main() {originMain(); afterMain();}";
      } }, { key: "getDefines", value: function() {
        var i = "", t = this.options.defines;
        if (t)
          for (var e = 0; e < t.length; e++)
            i += "#define " + t[e] + `
`;
        return i;
      } }, { key: "use", value: function(i, t) {
        this.gl = i, i.useProgram(this.program), this.map && this.map.type === "cesium" && this.setUniforms({
          currentFrustumX: this.map.map.scene.camera.frustum.near,
          oneOverLog2FarDepthFromNearPlusOne: this.map.map.scene.context.uniformState.oneOverLog2FarDepthFromNearPlusOne,
          farDepthFromNearPlusOne: this.map.map.scene.context.uniformState.farDepthFromNearPlusOne
        }), this.uniforms.MAPV_resolution && this.setUniforms({ MAPV_resolution: [i.canvas.width, i.canvas.height] });
      } }, { key: "setUniform", value: function(i, t) {
        var e = this.gl, a = this.uniforms[i];
        if (a)
          switch (this.parameter.uniformsType[i]) {
            case e.FLOAT:
              e.uniform1f(a, t);
              break;
            case e.FLOAT_VEC2:
              e.uniform2f(a, t[0], t[1]);
              break;
            case e.FLOAT_VEC3:
              e.uniform3f(a, t[0], t[1], t[2]);
              break;
            case e.FLOAT_VEC4:
              e.uniform4f(a, t[0], t[1], t[2], t[3]);
              break;
            case e.SAMPLER_2D:
            case e.SAMPLER_CUBE:
              e.activeTexture(e["TEXTURE" + this.textureIndex]), e.uniform1i(a, this.textureIndex), e.bindTexture(e.TEXTURE_2D, t), this.textureIndex++;
              break;
            case e.INT:
            case e.BOOL:
              e.uniform1i(a, t);
              break;
            case e.INT_VEC2:
            case e.BOOL_VEC2:
              e.uniform2i(a, t[0], t[1]);
              break;
            case e.INT_VEC3:
            case e.BOOL_VEC3:
              e.uniform3i(a, t[0], t[1], t[2]);
              break;
            case e.INT_VEC4:
            case e.BOOL_VEC4:
              e.uniform4i(a, t[0], t[1], t[2], t[3]);
              break;
            case e.FLOAT_MAT2:
              e.uniformMatrix2fv(a, !1, t);
              break;
            case e.FLOAT_MAT3:
              e.uniformMatrix3fv(
                a,
                !1,
                t
              );
              break;
            case e.FLOAT_MAT4:
              e.uniformMatrix4fv(a, !1, t);
              break;
            default:
              console.error("Unrecognized uniform type: " + i);
          }
        else
          console.warn("Unrecognized uniform type: " + i);
      } }, { key: "setUniforms", value: function(i) {
        this.textureIndex = 0;
        for (var t in i)
          this.setUniform(t, i[t]);
      } }]), r;
    }(), yr = function(r, i, t, e) {
      var a = t ? t.call(e, r, i) : void 0;
      if (a !== void 0)
        return !!a;
      if (r === i)
        return !0;
      if ((typeof r > "u" ? "undefined" : be(r)) !== "object" || !r || (typeof i > "u" ? "undefined" : be(i)) !== "object" || !i)
        return !1;
      var n = de(r), s = de(i);
      if (n.length !== s.length)
        return !1;
      s = Object.prototype.hasOwnProperty.bind(i);
      for (var o = 0; o < n.length; o++) {
        if (a = n[o], !s(a))
          return !1;
        var u = r[a], c = i[a];
        if (a = t ? t.call(e, u, c, a) : void 0, a === !1 || a === void 0 && u !== c)
          return !1;
      }
      return !0;
    }, Zu = function() {
      function r(i) {
        ft(this, r), this.options = i, this.gl = i.gl, this.savedState = [], this.currentState = this.getDefaultState();
      }
      return ct(r, [{ key: "setDefaultState", value: function() {
        this.setState();
      } }, { key: "getDefaultState", value: function() {
        var i = this.gl;
        return {
          blend: !1,
          blendEquation: i.FUNC_ADD,
          blendFunc: [i.ONE, i.ZERO],
          depthMask: !0,
          depthTest: !0,
          depthFunc: i.LEQUAL,
          polygonOffset: [0, 0],
          cullFace: !1,
          stencilTest: !1
        };
      } }, { key: "getRealState", value: function() {
        var i = this.gl;
        return {
          blend: i.getParameter(i.BLEND),
          blendEquation: i.getParameter(i.BLEND_EQUATION),
          depthMask: i.getParameter(i.DEPTH_WRITEMASK),
          depthTest: i.getParameter(i.DEPTH_TEST),
          depthFunc: i.getParameter(i.DEPTH_FUNC),
          polygonOffset: [i.getParameter(i.POLYGON_OFFSET_FACTOR), i.getParameter(i.POLYGON_OFFSET_UNITS)],
          cullFace: i.getParameter(i.CULL_FACE),
          stencilTest: i.getParameter(i.STENCIL_TEST)
        };
      } }, { key: "getCurrentState", value: function() {
        return this.currentState;
      } }, { key: "save", value: function() {
        this.savedState.push(this.getCurrentState());
      } }, { key: "restore", value: function() {
        var i = this.savedState.pop();
        this.setState(i, { force: !0 });
      } }, { key: "setState", value: function(i) {
        var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
        i = Rt(this.getDefaultState(), i), this.setBlend(i, t), this.setDepth(i, t), this.setCullFace(i, t), this.setPolygonOffset(i, t), this.setStencil(
          i,
          t
        ), this.currentState = i;
      } }, { key: "setBlend", value: function(i, t) {
        var e = this.gl, a = this.getCurrentState();
        ((t = t.force) || !yr(i.blend, a.blend)) && (i.blend ? e.enable(e.BLEND) : e.disable(e.BLEND)), !t && yr(i.blendEquation, a.blendEquation) || e.blendEquation(i.blendEquation), (t || !yr(i.blendFunc, a.blendFunc)) && (i.blendFunc.length === 2 ? e.blendFunc(i.blendFunc[0], i.blendFunc[1]) : i.blendFunc.length === 4 && e.blendFuncSeparate(i.blendFunc[0], i.blendFunc[1], i.blendFunc[2], i.blendFunc[3]));
      } }, { key: "setDepth", value: function(i, t) {
        var e = this.gl, a = this.getCurrentState();
        ((t = t.force) || !yr(i.depthTest, a.depthTest)) && (i.depthTest ? e.enable(e.DEPTH_TEST) : e.disable(e.DEPTH_TEST)), (t || !yr(i.depthMask, a.depthMask)) && (i.depthMask ? e.depthMask(!0) : e.depthMask(!1)), !t && yr(i.depthFunc, a.depthFunc) || e.depthFunc(i.depthFunc);
      } }, { key: "setPolygonOffset", value: function(i, t) {
        var e = this.gl, a = this.getCurrentState();
        (t.force || !yr(i.polygonOffset, a.polygonOffset)) && (i.polygonOffset[0] !== 0 && i.polygonOffset[1] !== 0 ? e.enable(e.POLYGON_OFFSET_FILL) : e.disable(e.POLYGON_OFFSET_FILL), e.polygonOffset(i.polygonOffset[0], i.polygonOffset[1]));
      } }, { key: "setCullFace", value: function(i, t) {
        var e = this.gl, a = this.getCurrentState();
        (t.force || !yr(i.cullFace, a.cullFace)) && (i.cullFace ? (e.enable(e.CULL_FACE), e.cullFace(e.BACK)) : e.disable(e.CULL_FACE));
      } }, { key: "setStencil", value: function(i, t) {
        var e = this.gl, a = this.getCurrentState();
        (t.force || !yr(i.stencilTest, a.stencilTest)) && (i.stencilTest ? e.enable(e.STENCIL_TEST) : e.disable(e.STENCIL_TEST));
      } }]), r;
    }(), dt = function() {
      function r(i) {
        ft(this, r), this.options = i, this.gl = i.gl, this.buffer = this.gl.createBuffer(), i.data && this.updateData(i.data);
      }
      return ct(r, [{ key: "updateData", value: function(i) {
        var t = this.options, e = this.gl;
        this.bind(), e.bufferData(e[t.target], i, e[t.usage]);
      } }, { key: "bind", value: function(i) {
        i = i || this.gl, i.bindBuffer(i[this.options.target], this.buffer);
      } }, { key: "unBind", value: function(i) {
        i = i || this.gl, i.bindBuffer(i[this.options.target], null);
      } }, { key: "destroy", value: function() {
        this.buffer = null;
      } }]), r;
    }(), qc = {
      BYTE: 1,
      UNSIGNED_BYTE: 1,
      SHORT: 2,
      UNSIGNED_SHORT: 2,
      FLOAT: 4
    }, Qt = function() {
      function r(i) {
        for (ft(this, r), this.options = i, this.attributes = i.attributes, this.gl = i.gl, this.program = i.program, i = this.stride = 0; i < this.attributes.length; i++)
          this.stride += qc[this.attributes[i].type] * this.attributes[i].size;
      }
      return ct(r, [{ key: "setVertexAttribPointers", value: function() {
        for (var i = this.gl, t = this.program, e = 0; e < this.attributes.length; e++) {
          var a = this.attributes[e], n = t.attributes[a.name];
          n !== void 0 && (a.buffer.bind(i), i.vertexAttribPointer(n, a.size, i[a.type], a.normalize || !1, a.stride !== void 0 ? a.stride : this.stride, a.offset), i.enableVertexAttribArray(n));
        }
      } }, { key: "bind", value: function() {
        this.setVertexAttribPointers();
      } }, { key: "destroy", value: function() {
      } }]), r;
    }(), _e = function r(i, t, e) {
      ft(this, r), t = t || i.canvas.width, e = e || i.canvas.height;
      var a = i.createFramebuffer(), n = i.createTexture();
      i.bindTexture(i.TEXTURE_2D, n), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, t, e, 0, i.RGBA, i.UNSIGNED_BYTE, null), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR), i.texParameteri(
        i.TEXTURE_2D,
        i.TEXTURE_MIN_FILTER,
        i.LINEAR
      ), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), a.texture = n;
      var s = i.createRenderbuffer();
      i.bindRenderbuffer(i.RENDERBUFFER, s), i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t, e), a.depthBuffer = s, i.bindFramebuffer(i.FRAMEBUFFER, a), i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, n, 0), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, s), t = i.checkFramebufferStatus(i.FRAMEBUFFER), i.FRAMEBUFFER_COMPLETE === t && (i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindTexture(i.TEXTURE_2D, null), i.bindRenderbuffer(i.RENDERBUFFER, null), this.framebuffer = a);
    }, fi = function() {
      function r(i) {
        ft(this, r), this.options = {}, Rt(this.options, i), this.vertex = [-1, 1, 0, -1, -1, 0, 1, 1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], this.sampleCoord = [0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0];
      }
      return ct(r, [{ key: "getOptions", value: function() {
        return this.options;
      } }, { key: "onResize", value: function(i) {
      } }, { key: "render", value: function(i) {
        var t = i.gl;
        i = i.texture;
        var e = this.programSample;
        t.useProgram(e.program);
        var a = t.createBuffer();
        t.bindBuffer(t.ARRAY_BUFFER, a);
        var n = [-1, -1, 0, -1, 1, 0, 1, 1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0];
        t.bufferData(t.ARRAY_BUFFER, new Float32Array(n), t.STATIC_DRAW), t.enableVertexAttribArray(e.attributes.aPos), t.vertexAttribPointer(e.attributes.aPos, 3, t.FLOAT, !1, 0, 0), a = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, a), t.bufferData(t.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0]), t.STATIC_DRAW), t.enableVertexAttribArray(e.attributes.aTextureCoord), t.vertexAttribPointer(
          e.attributes.aTextureCoord,
          2,
          t.FLOAT,
          !1,
          0,
          0
        ), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, i), t.uniform1i(e.uniforms.uSampler, 0), t.drawArrays(t.TRIANGLES, 0, n.length / 3);
      } }]), r;
    }(), $c = function(r) {
      function i(t) {
        return ft(this, i), Pt(this, (i.__proto__ || yt(i)).call(this, t));
      }
      return Lt(i, r), ct(i, [{ key: "getProgram", value: function(t) {
        return this.programSample || (this.programSample = new Ft(t, {
          vertexShader: "attribute vec3 aPos;attribute vec2 aTextureCoord;varying vec2 vTextureCoord;void main(void){vTextureCoord=aTextureCoord;gl_Position=vec4(aPos,1.0);}",
          fragmentShader: "precision highp float;uniform sampler2D uSampler;uniform vec2 canvasSize;varying vec2 vTextureCoord;vec4 fxaa_2_0(sampler2D tex,vec2 fragCoord,vec2 resolution,vec2 v_rgbNW,vec2 v_rgbNE,vec2 v_rgbSW,vec2 v_rgbSE,vec2 v_rgbM){vec4 color;mediump vec2 inverseVP=vec2(1.0/resolution.x,1.0/resolution.y);vec3 rgbNW=texture2D(tex,v_rgbNW).xyz;vec3 rgbNE=texture2D(tex,v_rgbNE).xyz;vec3 rgbSW=texture2D(tex,v_rgbSW).xyz;vec3 rgbSE=texture2D(tex,v_rgbSE).xyz;vec4 texColor=texture2D(tex,v_rgbM);vec3 rgbM=texColor.xyz;vec3 luma=vec3(0.299,0.587,0.114);float lumaNW=dot(rgbNW,luma);float lumaNE=dot(rgbNE,luma);float lumaSW=dot(rgbSW,luma);float lumaSE=dot(rgbSE,luma);float lumaM=dot(rgbM,luma);float lumaMin=min(lumaM,min(min(lumaNW,lumaNE),min(lumaSW,lumaSE)));float lumaMax=max(lumaM,max(max(lumaNW,lumaNE),max(lumaSW,lumaSE)));mediump vec2 dir;dir.x=-((lumaNW+lumaNE)-(lumaSW+lumaSE));dir.y=((lumaNW+lumaSW)-(lumaNE+lumaSE));float dirReduce=max((lumaNW+lumaNE+lumaSW+lumaSE)*(0.25*1.0/8.0),1.0/128.0);float rcpDirMin=1.0/(min(abs(dir.x),abs(dir.y))+dirReduce);dir=min(vec2(8.0,8.0),max(vec2(-8.0,-8.0),dir*rcpDirMin))*inverseVP;vec3 rgbA=0.5*(texture2D(tex,fragCoord*inverseVP+dir*(1.0/3.0-0.5)).xyz+texture2D(tex,fragCoord*inverseVP+dir*(2.0/3.0-0.5)).xyz);vec3 rgbB=rgbA*0.5+0.25*(texture2D(tex,fragCoord*inverseVP+dir*-0.5).xyz+texture2D(tex,fragCoord*inverseVP+dir*0.5).xyz);float lumaB=dot(rgbB,luma);if((lumaB<lumaMin)||(lumaB>lumaMax)){color=vec4(rgbA,texColor.a);}else{color=vec4(rgbB,texColor.a);}return color;}void texcoords_3_1(vec2 fragCoord,vec2 resolution,out vec2 v_rgbNW,out vec2 v_rgbNE,out vec2 v_rgbSW,out vec2 v_rgbSE,out vec2 v_rgbM){vec2 inverseVP=1.0/resolution.xy;v_rgbNW=(fragCoord+vec2(-1.0,-1.0))*inverseVP;v_rgbNE=(fragCoord+vec2(1.0,-1.0))*inverseVP;v_rgbSW=(fragCoord+vec2(-1.0,1.0))*inverseVP;v_rgbSE=(fragCoord+vec2(1.0,1.0))*inverseVP;v_rgbM=vec2(fragCoord*inverseVP);}vec4 apply_1_2(sampler2D tex,vec2 fragCoord,vec2 resolution){mediump vec2 v_rgbNW;mediump vec2 v_rgbNE;mediump vec2 v_rgbSW;mediump vec2 v_rgbSE;mediump vec2 v_rgbM;texcoords_3_1(fragCoord,resolution,v_rgbNW,v_rgbNE,v_rgbSW,v_rgbSE,v_rgbM);return fxaa_2_0(tex,fragCoord,resolution,v_rgbNW,v_rgbNE,v_rgbSW,v_rgbSE,v_rgbM);}void main(void){vec2 fragCoord=vTextureCoord*canvasSize;gl_FragColor=apply_1_2(uSampler,fragCoord,canvasSize);}"
        })), this.programSample;
      } }, { key: "render", value: function(t) {
        var e = t.gl;
        t = t.texture, this.getOptions(), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
        var a = this.getProgram(e);
        e.useProgram(a.program);
        var n = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, n), e.bufferData(e.ARRAY_BUFFER, new Float32Array(this.vertex), e.STATIC_DRAW), e.enableVertexAttribArray(a.attributes.aPos), e.vertexAttribPointer(a.attributes.aPos, 3, e.FLOAT, !1, 0, 0), n = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, n), e.bufferData(
          e.ARRAY_BUFFER,
          new Float32Array(this.sampleCoord),
          e.STATIC_DRAW
        ), e.enableVertexAttribArray(a.attributes.aTextureCoord), e.vertexAttribPointer(a.attributes.aTextureCoord, 2, e.FLOAT, !1, 0, 0), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, t), e.uniform1i(a.uniforms.uSampler, 1), e.uniform2fv(a.uniforms.canvasSize, [e.canvas.width, e.canvas.height]), e.drawArrays(e.TRIANGLES, 0, this.vertex.length / 3), e.bindBuffer(e.ARRAY_BUFFER, null), e.useProgram(null);
      } }]), i;
    }(fi), td = function(r) {
      function i(t) {
        return ft(this, i), Pt(
          this,
          (i.__proto__ || yt(i)).call(this, t)
        );
      }
      return Lt(i, r), ct(i, [
        { key: "getProgram", value: function(t) {
          if (this.program1 || (this.program1 = new Ft(t, {
            vertexShader: "attribute vec3 position;attribute vec2 uv;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];void SMAAEdgeDetectionVS(vec2 texcoord){vOffset[0]=texcoord.xyxy+resolution.xyxy*vec4(-1.0,0.0,0.0,1.0);vOffset[1]=texcoord.xyxy+resolution.xyxy*vec4(1.0,0.0,0.0,-1.0);vOffset[2]=texcoord.xyxy+resolution.xyxy*vec4(-2.0,0.0,0.0,2.0);}void main(){vUv=uv;SMAAEdgeDetectionVS(vUv);gl_Position=vec4(position,1.0);}",
            fragmentShader: `precision highp float;
#define SMAA_THRESHOLD 0.1
uniform sampler2D tDiffuse;varying vec2 vUv;varying vec4 vOffset[3];vec4 SMAAColorEdgeDetectionPS(vec2 texcoord,vec4 offset[3],sampler2D colorTex){vec2 threshold=vec2(SMAA_THRESHOLD,SMAA_THRESHOLD);vec4 delta;vec3 C=texture2D(colorTex,texcoord).rgb;vec3 Cleft=texture2D(colorTex,offset[0].xy).rgb;vec3 t=abs(C-Cleft);delta.x=max(max(t.r,t.g),t.b);vec3 Ctop=texture2D(colorTex,offset[0].zw).rgb;t=abs(C-Ctop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0,1.0))==0.0)discard;vec3 Cright=texture2D(colorTex,offset[1].xy).rgb;t=abs(C-Cright);delta.z=max(max(t.r,t.g),t.b);vec3 Cbottom=texture2D(colorTex,offset[1].zw).rgb;t=abs(C-Cbottom);delta.w=max(max(t.r,t.g),t.b);float maxDelta=max(max(max(delta.x,delta.y),delta.z),delta.w);vec3 Cleftleft=texture2D(colorTex,offset[2].xy).rgb;t=abs(C-Cleftleft);delta.z=max(max(t.r,t.g),t.b);vec3 Ctoptop=texture2D(colorTex,offset[2].zw).rgb;t=abs(C-Ctoptop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(max(maxDelta,delta.z),delta.w);edges.xy*=step(0.5*maxDelta,delta.xy);return vec4(edges,0.0,0.0);}void main(){gl_FragColor=SMAAColorEdgeDetectionPS(vUv,vOffset,tDiffuse);}`
          })), this.program2 || (this.program2 = new Ft(t, {
            vertexShader: `precision highp float;
#define SMAA_MAX_SEARCH_STEPS 8
#define SMAA_AREATEX_MAX_DISTANCE 16
#define SMAA_AREATEX_PIXEL_SIZE ( 1.0 / vec2( 160.0, 560.0 ) )
#define SMAA_AREATEX_SUBTEX_SIZE ( 1.0 / 7.0 )
attribute vec3 position;attribute vec2 uv;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixcoord;void SMAABlendingWeightCalculationVS(vec2 texcoord){vPixcoord=texcoord/resolution;vOffset[0]=texcoord.xyxy+resolution.xyxy*vec4(-0.25,0.125,1.25,0.125);vOffset[1]=texcoord.xyxy+resolution.xyxy*vec4(-0.125,0.25,-0.125,-1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*resolution.xxyy*float(SMAA_MAX_SEARCH_STEPS);}void main(){vUv=uv;SMAABlendingWeightCalculationVS(vUv);gl_Position=vec4(position,1.0);}`,
            fragmentShader: `precision highp float;
#define SMAA_MAX_SEARCH_STEPS 8
#define SMAA_AREATEX_MAX_DISTANCE 16
#define SMAA_AREATEX_PIXEL_SIZE ( 1.0 / vec2( 160.0, 560.0 ) )
#define SMAA_AREATEX_SUBTEX_SIZE ( 1.0 / 7.0 )
#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )
uniform sampler2D tDiffuse;uniform sampler2D tArea;uniform sampler2D tSearch;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixcoord;vec2 round(vec2 x){return sign(x)*floor(abs(x)+0.5);}float SMAASearchLength(sampler2D searchTex,vec2 e,float bias,float scale){e.r=bias+e.r*scale;return 255.0*texture2D(searchTex,e,0.0).r;}float SMAASearchXLeft(sampler2D edgesTex,sampler2D searchTex,vec2 texcoord,float end){/***@PSEUDO_GATHER4*This texcoord has been offset by(-0.25,-0.125)in the vertex shader to*sample between edge,thus fetching four edges in a row.*Sampling with different offsets in each direction allows to disambiguate*which edges are active from the four fetched ones.*/vec2 e=vec2(0.0,1.0);for(int i=0;i<SMAA_MAX_SEARCH_STEPS;i++){e=texture2D(edgesTex,texcoord,0.0).rg;texcoord-=vec2(2.0,0.0)*resolution;if(!(texcoord.x>end&&e.g>0.8281&&e.r==0.0))break;}texcoord.x+=0.25*resolution.x;texcoord.x+=resolution.x;texcoord.x+=2.0*resolution.x;texcoord.x-=resolution.x*SMAASearchLength(searchTex,e,0.0,0.5);return texcoord.x;}float SMAASearchXRight(sampler2D edgesTex,sampler2D searchTex,vec2 texcoord,float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<SMAA_MAX_SEARCH_STEPS;i++){e=texture2D(edgesTex,texcoord,0.0).rg;texcoord+=vec2(2.0,0.0)*resolution;if(!(texcoord.x<end&&e.g>0.8281&&e.r==0.0))break;}texcoord.x-=0.25*resolution.x;texcoord.x-=resolution.x;texcoord.x-=2.0*resolution.x;texcoord.x+=resolution.x*SMAASearchLength(searchTex,e,0.5,0.5);return texcoord.x;}float SMAASearchYUp(sampler2D edgesTex,sampler2D searchTex,vec2 texcoord,float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<SMAA_MAX_SEARCH_STEPS;i++){e=texture2D(edgesTex,texcoord,0.0).rg;texcoord+=vec2(0.0,2.0)*resolution;if(!(texcoord.y>end&&e.r>0.8281&&e.g==0.0))break;}texcoord.y-=0.25*resolution.y;texcoord.y-=resolution.y;texcoord.y-=2.0*resolution.y;texcoord.y+=resolution.y*SMAASearchLength(searchTex,e.gr,0.0,0.5);return texcoord.y;}float SMAASearchYDown(sampler2D edgesTex,sampler2D searchTex,vec2 texcoord,float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<SMAA_MAX_SEARCH_STEPS;i++){e=texture2D(edgesTex,texcoord,0.0).rg;texcoord-=vec2(0.0,2.0)*resolution;if(!(texcoord.y<end&&e.r>0.8281&&e.g==0.0))break;}texcoord.y+=0.25*resolution.y;texcoord.y+=resolution.y;texcoord.y+=2.0*resolution.y;texcoord.y-=resolution.y*SMAASearchLength(searchTex,e.gr,0.5,0.5);return texcoord.y;}vec2 SMAAArea(sampler2D areaTex,vec2 dist,float e1,float e2,float offset){vec2 texcoord=float(SMAA_AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texcoord=SMAA_AREATEX_PIXEL_SIZE*texcoord+(0.5*SMAA_AREATEX_PIXEL_SIZE);texcoord.y+=SMAA_AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTex,texcoord,0.0).rg;}vec4 SMAABlendingWeightCalculationPS(vec2 texcoord,vec2 pixcoord,vec4 offset[3],sampler2D edgesTex,sampler2D areaTex,sampler2D searchTex,ivec4 subsampleIndices){vec4 weights=vec4(0.0,0.0,0.0,0.0);vec2 e=texture2D(edgesTex,texcoord).rg;if(e.g>0.0){vec2 d;vec2 coords;coords.x=SMAASearchXLeft(edgesTex,searchTex,offset[0].xy,offset[2].x);coords.y=offset[1].y;d.x=coords.x;float e1=texture2D(edgesTex,coords,0.0).r;coords.x=SMAASearchXRight(edgesTex,searchTex,offset[0].zw,offset[2].y);d.y=coords.x;d=d/resolution.x-pixcoord.x;vec2 sqrt_d=sqrt(abs(d));coords.y-=1.0*resolution.y;float e2=SMAASampleLevelZeroOffset(edgesTex,coords,ivec2(1,0)).r;weights.rg=SMAAArea(areaTex,sqrt_d,e1,e2,float(subsampleIndices.y));}if(e.r>0.0){vec2 d;vec2 coords;coords.y=SMAASearchYUp(edgesTex,searchTex,offset[1].xy,offset[2].z);coords.x=offset[0].x;d.x=coords.y;float e1=texture2D(edgesTex,coords,0.0).g;coords.y=SMAASearchYDown(edgesTex,searchTex,offset[1].zw,offset[2].w);d.y=coords.y;d=d/resolution.y-pixcoord.y;vec2 sqrt_d=sqrt(abs(d));coords.y-=1.0*resolution.y;float e2=SMAASampleLevelZeroOffset(edgesTex,coords,ivec2(0,1)).g;weights.ba=SMAAArea(areaTex,sqrt_d,e1,e2,float(subsampleIndices.x));}return weights;}void main(){gl_FragColor=SMAABlendingWeightCalculationPS(vUv,vPixcoord,vOffset,tDiffuse,tArea,tSearch,ivec4(0.0));}`
          })), this.program3 || (this.program3 = new Ft(t, { vertexShader: "precision highp float;uniform vec2 resolution;attribute vec3 position;attribute vec2 uv;varying vec2 vUv;varying vec4 vOffset[2];void SMAANeighborhoodBlendingVS(vec2 texcoord){vOffset[0]=texcoord.xyxy+resolution.xyxy*vec4(-1.0,0.0,0.0,1.0);vOffset[1]=texcoord.xyxy+resolution.xyxy*vec4(1.0,0.0,0.0,-1.0);}void main(){vUv=uv;SMAANeighborhoodBlendingVS(vUv);gl_Position=vec4(position,1.0);}", fragmentShader: "precision highp float;uniform sampler2D tDiffuse;uniform sampler2D tColor;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[2];vec4 SMAANeighborhoodBlendingPS(vec2 texcoord,vec4 offset[2],sampler2D colorTex,sampler2D blendTex){vec4 a;a.xz=texture2D(blendTex,texcoord).xz;a.y=texture2D(blendTex,offset[1].zw).g;a.w=texture2D(blendTex,offset[1].xy).a;if(dot(a,vec4(1.0,1.0,1.0,1.0))<1e-5){return texture2D(colorTex,texcoord,0.0);}else{vec2 offset;offset.x=a.a>a.b ? a.a :-a.b;offset.y=a.g>a.r ?-a.g : a.r;if(abs(offset.x)>abs(offset.y)){offset.y=0.0;}else{offset.x=0.0;}vec4 C=texture2D(colorTex,texcoord,0.0);texcoord+=sign(offset)*resolution;vec4 Cop=texture2D(colorTex,texcoord,0.0);float s=abs(offset.x)>abs(offset.y)? abs(offset.x): abs(offset.y);C.xyz=pow(C.xyz,vec3(2.2));Cop.xyz=pow(Cop.xyz,vec3(2.2));vec4 mixed=mix(C,Cop,s);mixed.xyz=pow(mixed.xyz,vec3(1.0/2.2));return mixed;}}void main(){gl_FragColor=SMAANeighborhoodBlendingPS(vUv,vOffset,tColor,tDiffuse);}" })), !this.vertexBuffer || !this.sampleBuffer) {
            this.vertexBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.sampleBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.vertexBuffer.updateData(new Float32Array(this.vertex)), this.sampleBuffer.updateData(new Float32Array(this.sampleCoord));
            var e = [{ stride: 12, name: "position", buffer: this.vertexBuffer, size: 3, type: "FLOAT", offset: 0 }, { stride: 8, name: "uv", buffer: this.sampleBuffer, size: 2, type: "FLOAT", offset: 0 }];
            this.vertexArray1 = new Qt({
              gl: t,
              program: this.program1,
              attributes: e
            }), this.vertexArray2 = new Qt({ gl: t, program: this.program2, attributes: e }), this.vertexArray3 = new Qt({ gl: t, program: this.program3, attributes: e });
          }
          return { program1: this.program1, program2: this.program2, program3: this.program3 };
        } },
        { key: "onResize", value: function(t) {
          this.collectBrightBuffer = new _e(t), this.bloomBuffer = new _e(t);
        } },
        { key: "getExtraFbo", value: function(t) {
          return this.collectBrightBuffer || (this.collectBrightBuffer = new _e(t)), this.bloomBuffer || (this.bloomBuffer = new _e(t)), {
            collectBrightBuffer: this.collectBrightBuffer.framebuffer,
            bloomBuffer: this.bloomBuffer.framebuffer
          };
        } },
        { key: "render", value: function(t) {
          var e = t.gl, a = t.texture;
          t = t.fbo, this.getOptions(), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
          var n = this.getProgram(e), s = n.program1, o = n.program2;
          n = n.program3;
          var u = this.getExtraFbo(e), c = u.collectBrightBuffer;
          u = u.bloomBuffer;
          var v = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, v), e.bufferData(e.ARRAY_BUFFER, new Float32Array(this.vertex), e.STATIC_DRAW), e.enableVertexAttribArray(s.attributes.position), e.vertexAttribPointer(
            s.attributes.position,
            3,
            e.FLOAT,
            !1,
            0,
            0
          ), e.enableVertexAttribArray(o.attributes.position), e.vertexAttribPointer(o.attributes.position, 3, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(n.attributes.position), e.vertexAttribPointer(n.attributes.position, 3, e.FLOAT, !1, 0, 0), v = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, v), e.bufferData(e.ARRAY_BUFFER, new Float32Array(this.sampleCoord), e.STATIC_DRAW), e.enableVertexAttribArray(s.attributes.uv), e.vertexAttribPointer(s.attributes.uv, 2, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(o.attributes.uv), e.vertexAttribPointer(o.attributes.uv, 2, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(n.attributes.uv), e.vertexAttribPointer(n.attributes.uv, 2, e.FLOAT, !1, 0, 0), e.useProgram(s.program), e.bindFramebuffer(e.FRAMEBUFFER, c), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.activeTexture(e.TEXTURE2), e.bindTexture(e.TEXTURE_2D, a), e.uniform1i(s.uniforms.tDiffuse, 2), e.uniform2fv(s.uniforms.resolution, [e.canvas.width, e.canvas.height]), e.drawArrays(e.TRIANGLES, 0, this.vertex.length / 3), e.useProgram(o.program), e.bindFramebuffer(e.FRAMEBUFFER, u), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.activeTexture(e.TEXTURE2), e.bindTexture(e.TEXTURE_2D, c.texture), e.uniform1i(o.uniforms.uSampler, 2), e.uniform2fv(o.uniforms.resolution, [e.canvas.width, e.canvas.height]), e.drawArrays(e.TRIANGLES, 0, this.vertex.length / 3), e.useProgram(n.program), e.bindFramebuffer(e.FRAMEBUFFER, t), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.activeTexture(e.TEXTURE2), e.bindTexture(
            e.TEXTURE_2D,
            a
          ), e.uniform1i(n.uniforms.tDiffuse, 2), e.activeTexture(e.TEXTURE3), e.bindTexture(e.TEXTURE_2D, u.texture), e.uniform1i(n.uniforms.tColor, 3), e.uniform2fv(n.uniforms.resolution, [e.canvas.width, e.canvas.height]), e.drawArrays(e.TRIANGLES, 0, this.vertex.length / 3), e.bindBuffer(e.ARRAY_BUFFER, null), e.useProgram(null);
        } },
        { key: "getAreaTexture", value: function() {
          return "data:image/png;base64,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";
        } },
        { key: "getSearchTexture", value: function() {
          return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAIAAADiVupLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFZJREFUeNrs00EKgAAIRNEZ739mTQoiwmhRi4L/FiKiu9ERISkzbXdTVV3H4WhfOG6ehl1rNR7qDSF8hwkVcJXt+3A//I0Nv0GoCBUAAAAAAMA/LAIMAB+Dcg2OE2zsAAAAAElFTkSuQmCC";
        } }
      ]), i;
    }(fi), ed = function(r) {
      function i(t) {
        return ft(this, i), Pt(this, (i.__proto__ || yt(i)).call(this, t));
      }
      return Lt(i, r), ct(i, [{ key: "getProgram", value: function(t) {
        return this.programSample || (this.programSample = new Ft(t, { vertexShader: "attribute vec3 aPos;attribute vec2 aTextureCoord;varying vec2 vTextureCoord;void main(){vTextureCoord=aTextureCoord;gl_Position=vec4(aPos,1.0);}", fragmentShader: "precision mediump float;uniform sampler2D uSampler;varying vec2 vTextureCoord;void main(){float fStep=1.0/512.0;vec4 sample11=texture2D(uSampler,vec2(vTextureCoord.s-1.0*fStep,vTextureCoord.t+1.0*fStep));vec4 sample12=texture2D(uSampler,vec2(vTextureCoord.s,vTextureCoord.t+1.0*fStep));vec4 sample13=texture2D(uSampler,vec2(vTextureCoord.s+1.0*fStep,vTextureCoord.t+1.0*fStep));vec4 sample21=texture2D(uSampler,vec2(vTextureCoord.s-1.0*fStep,vTextureCoord.t));vec4 sample22=texture2D(uSampler,vec2(vTextureCoord.s,vTextureCoord.t));vec4 sample23=texture2D(uSampler,vec2(vTextureCoord.s+1.0*fStep,vTextureCoord.t));vec4 sample31=texture2D(uSampler,vec2(vTextureCoord.s-1.0*fStep,vTextureCoord.t-1.0*fStep));vec4 sample32=texture2D(uSampler,vec2(vTextureCoord.s,vTextureCoord.t-1.0*fStep));vec4 sample33=texture2D(uSampler,vec2(vTextureCoord.s+1.0*fStep,vTextureCoord.t-1.0*fStep));vec4 blurSample=(sample11+sample12+sample13+sample21+2.0*sample22+sample23+sample31+sample32+sample33)/10.0;gl_FragColor=blurSample;}" }), this.vertexBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.sampleBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.vertexBuffer.updateData(new Float32Array(this.vertex)), this.sampleBuffer.updateData(new Float32Array(this.sampleCoord)), this.vertexArray = new Qt({ gl: t, program: this.programSample, attributes: [{ stride: 12, name: "aPos", buffer: this.vertexBuffer, size: 3, type: "FLOAT", offset: 0 }, { stride: 8, name: "aTextureCoord", buffer: this.sampleBuffer, size: 2, type: "FLOAT", offset: 0 }] })), this.programSample;
      } }, { key: "render", value: function(t) {
        var e = t.gl;
        t = t.texture, e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
        var a = this.getProgram(e);
        a.use(e), this.vertexArray.bind(), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, t), e.uniform1i(a.uniforms.uSampler, 1), e.drawArrays(e.TRIANGLES, 0, this.vertex.length / 3);
      } }]), i;
    }(fi), rd = function(r) {
      function i(t) {
        return ft(this, i), Pt(this, (i.__proto__ || yt(i)).call(this, t));
      }
      return Lt(i, r), ct(i, [{ key: "getProgram", value: function(t) {
        return this.programBright || (this.programBright = new Ft(t, { vertexShader: "attribute vec3 aPos;attribute vec2 aTextureCoord;varying vec2 vTextureCoord;void main(){vTextureCoord=aTextureCoord;gl_Position=vec4(aPos,1.0);}", fragmentShader: "precision mediump float;uniform sampler2D uSampler;uniform float threshold;varying vec2 vTextureCoord;void main(){vec4 color=texture2D(uSampler,vTextureCoord);vec4 lightColor=max(vec4(0.0),(color-(1.0-threshold)/5.0));float brightness=dot(color.rgb,vec3(0.2126,0.7152,0.0722));if(brightness>threshold){color=lightColor;}else{color=vec4(0.0);}gl_FragColor=color;}" })), this.programBloom || (this.programBloom = new Ft(t, { vertexShader: "attribute vec3 aPos;attribute vec2 aTextureCoord;varying vec2 vTextureCoord;void main(){vTextureCoord=aTextureCoord;gl_Position=vec4(aPos,1.0);}", fragmentShader: "precision mediump float;uniform sampler2D uSampler;uniform bool isVertical;uniform vec2 canvasSize;uniform float blurSize;uniform float devicePixelRatio;varying vec2 vTextureCoord;void main(){float weight[10];weight[0]=0.2270270270;weight[1]=0.1945945946;weight[2]=0.1216216216;weight[3]=0.1135135135;weight[4]=0.0972972973;weight[5]=0.0608108108;weight[6]=0.0540540541;weight[7]=0.0270270270;weight[8]=0.0162162162;weight[9]=0.0081081081;vec2 offset=vec2(blurSize/canvasSize.x,blurSize/canvasSize.y)*devicePixelRatio;vec4 result=texture2D(uSampler,vTextureCoord)*weight[0];if(isVertical){for(int i=1;i<10;++i){result+=texture2D(uSampler,vTextureCoord+vec2(0.0,offset.y*float(i)))*weight[i];result+=texture2D(uSampler,vTextureCoord-vec2(0.0,offset.y*float(i)))*weight[i];}}else{for(int i=1;i<10;++i){result+=texture2D(uSampler,vTextureCoord+vec2(offset.x*float(i),0.0))*weight[i];result+=texture2D(uSampler,vTextureCoord-vec2(offset.x*float(i),0.0))*weight[i];}}gl_FragColor=result;}" })), this.programResult || (this.programResult = new Ft(t, { vertexShader: "attribute vec3 aPos;attribute vec2 aTextureCoord;varying vec2 vTextureCoord;void main(){vTextureCoord=aTextureCoord;gl_Position=vec4(aPos,1.0);}", fragmentShader: "precision mediump float;uniform sampler2D originalTexture;uniform sampler2D bloomTexture;varying vec2 vTextureCoord;void main(){vec4 color=texture2D(originalTexture,vTextureCoord);vec4 bloomColor=texture2D(bloomTexture,vTextureCoord);color+=bloomColor;gl_FragColor=color;}" })), { programBright: this.programBright, programBloom: this.programBloom, programResult: this.programResult };
      } }, { key: "onResize", value: function(t) {
        this.collectBrightBuffer = new _e(t), this.bloomBuffer = new _e(t);
      } }, { key: "getExtraFbo", value: function(t) {
        return this.collectBrightBuffer || (this.collectBrightBuffer = new _e(t)), this.bloomBuffer || (this.bloomBuffer = new _e(t)), { collectBrightBuffer: this.collectBrightBuffer.framebuffer, bloomBuffer: this.bloomBuffer.framebuffer };
      } }, { key: "render", value: function(t) {
        var e = t.gl, a = t.texture;
        t = t.fbo;
        var n = this.getOptions();
        e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
        var s = this.getProgram(e), o = s.programBright, u = s.programBloom;
        s = s.programResult;
        var c = this.getExtraFbo(e), v = c.collectBrightBuffer;
        c = c.bloomBuffer;
        var l = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, l), e.bufferData(e.ARRAY_BUFFER, new Float32Array(this.vertex), e.STATIC_DRAW), e.enableVertexAttribArray(o.attributes.aPos), e.vertexAttribPointer(o.attributes.aPos, 3, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(u.attributes.aPos), e.vertexAttribPointer(u.attributes.aPos, 3, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(s.attributes.aPos), e.vertexAttribPointer(s.attributes.aPos, 3, e.FLOAT, !1, 0, 0), l = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, l), e.bufferData(e.ARRAY_BUFFER, new Float32Array(this.sampleCoord), e.STATIC_DRAW), e.enableVertexAttribArray(o.attributes.aTextureCoord), e.vertexAttribPointer(o.attributes.aTextureCoord, 2, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(u.attributes.aTextureCoord), e.vertexAttribPointer(
          u.attributes.aTextureCoord,
          2,
          e.FLOAT,
          !1,
          0,
          0
        ), e.enableVertexAttribArray(s.attributes.aTextureCoord), e.vertexAttribPointer(s.attributes.aTextureCoord, 2, e.FLOAT, !1, 0, 0), e.useProgram(o.program), e.bindFramebuffer(e.FRAMEBUFFER, v), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, a), e.uniform1i(o.uniforms.uSampler, 1), e.uniform1f(o.uniforms.threshold, n.threshold || 0), e.drawArrays(e.TRIANGLES, 0, this.vertex.length / 3), e.useProgram(u.program), e.bindFramebuffer(
          e.FRAMEBUFFER,
          c
        ), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, v.texture), e.uniform1i(u.uniforms.uSampler, 1), e.uniform1i(u.uniforms.isVertical, !0), e.uniform1f(u.uniforms.blurSize, n.blurSize || 2), e.uniform1f(u.uniforms.devicePixelRatio, window.devicePixelRatio), e.uniform2fv(u.uniforms.canvasSize, [e.canvas.width, e.canvas.height]), e.drawArrays(e.TRIANGLES, 0, this.vertex.length / 3), e.useProgram(u.program), e.bindFramebuffer(e.FRAMEBUFFER, v), e.clearColor(
          0,
          0,
          0,
          0
        ), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, c.texture), e.uniform1i(u.uniforms.uSampler, 1), e.uniform1i(u.uniforms.isVertical, !1), e.uniform1f(u.uniforms.blurSize, n.blurSize || 2), e.uniform1f(u.uniforms.devicePixelRatio, window.devicePixelRatio), e.uniform2fv(u.uniforms.canvasSize, [e.canvas.width, e.canvas.height]), e.drawArrays(e.TRIANGLES, 0, this.vertex.length / 3), e.useProgram(s.program), e.bindFramebuffer(e.FRAMEBUFFER, t), e.clearColor(
          0,
          0,
          0,
          0
        ), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, a), e.uniform1i(s.uniforms.originalTexture, 1), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, v.texture), e.uniform1i(s.uniforms.bloomTexture, 0), e.drawArrays(e.TRIANGLES, 0, this.vertex.length / 3), e.bindBuffer(e.ARRAY_BUFFER, null), e.useProgram(null);
      } }]), i;
    }(fi), id = function(r) {
      function i(t) {
        return ft(this, i), Pt(this, (i.__proto__ || yt(i)).call(this, t));
      }
      return Lt(i, r), ct(i, [{ key: "getProgram", value: function(t) {
        return this.programBright || (this.programBright = new Ft(t, { vertexShader: "attribute vec3 aPos;attribute vec2 aTextureCoord;varying vec2 vTextureCoord;void main(){vTextureCoord=aTextureCoord;gl_Position=vec4(aPos,1.0);}", fragmentShader: "precision mediump float;uniform sampler2D uSampler;uniform float threshold;varying vec2 vTextureCoord;void main(){vec4 color=texture2D(uSampler,vTextureCoord);vec4 lightColor=max(vec4(0.0),(color-threshold));gl_FragColor=lightColor;}" })), this.programBloom || (this.programBloom = new Ft(t, {
          vertexShader: "attribute vec3 aPos;attribute vec2 aTextureCoord;varying vec2 vTextureCoord;void main(){vTextureCoord=aTextureCoord;gl_Position=vec4(aPos,1.0);}",
          fragmentShader: "precision mediump float;uniform sampler2D uSampler;uniform bool isVertical;uniform vec2 canvasSize;uniform float blurSize;uniform float devicePixelRatio;varying vec2 vTextureCoord;void main(){float weight[10];weight[0]=0.2270270270;weight[1]=0.1945945946;weight[2]=0.1216216216;weight[3]=0.1135135135;weight[4]=0.0972972973;weight[5]=0.0608108108;weight[6]=0.0540540541;weight[7]=0.0270270270;weight[8]=0.0162162162;weight[9]=0.0081081081;vec2 offset=vec2(blurSize/canvasSize.x,blurSize/canvasSize.y)*devicePixelRatio;vec4 result=texture2D(uSampler,vTextureCoord)*weight[0];if(isVertical){for(int i=1;i<10;++i){result+=texture2D(uSampler,vTextureCoord+vec2(0.0,offset.y*float(i)))*weight[i];result+=texture2D(uSampler,vTextureCoord-vec2(0.0,offset.y*float(i)))*weight[i];}}else{for(int i=1;i<10;++i){result+=texture2D(uSampler,vTextureCoord+vec2(offset.x*float(i),0.0))*weight[i];result+=texture2D(uSampler,vTextureCoord-vec2(offset.x*float(i),0.0))*weight[i];}}gl_FragColor=result;}"
        })), this.programResult || (this.programResult = new Ft(t, { vertexShader: "attribute vec3 aPos;attribute vec2 aTextureCoord;varying vec2 vTextureCoord;void main(){vTextureCoord=aTextureCoord;gl_Position=vec4(aPos,1.0);}", fragmentShader: "precision mediump float;uniform sampler2D originalTexture;uniform sampler2D bloomTexture;uniform float toneScale;varying vec2 vTextureCoord;void main(){vec4 color=texture2D(originalTexture,vTextureCoord)*toneScale;vec4 bloomColor=texture2D(bloomTexture,vTextureCoord);color+=bloomColor;gl_FragColor=color;}" })), { programBright: this.programBright, programBloom: this.programBloom, programResult: this.programResult };
      } }, { key: "onResize", value: function(t) {
        this.collectBrightBuffer = new _e(t), this.bloomBuffer = new _e(t);
      } }, { key: "getExtraFbo", value: function(t) {
        return this.collectBrightBuffer || (this.collectBrightBuffer = new _e(t)), this.bloomBuffer || (this.bloomBuffer = new _e(t)), { collectBrightBuffer: this.collectBrightBuffer.framebuffer, bloomBuffer: this.bloomBuffer.framebuffer };
      } }, { key: "render", value: function(t) {
        var e = t.gl, a = t.texture;
        t = t.fbo;
        var n = this.getOptions(), s = "clarity" in n ? n.clarity : 1;
        s = Math.max(0, s), s = Math.min(1, s), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
        var o = this.getProgram(e), u = o.programBright, c = o.programBloom;
        o = o.programResult;
        var v = this.getExtraFbo(e), l = v.collectBrightBuffer;
        v = v.bloomBuffer;
        var f = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, f), e.bufferData(e.ARRAY_BUFFER, new Float32Array(this.vertex), e.STATIC_DRAW), e.enableVertexAttribArray(u.attributes.aPos), e.vertexAttribPointer(
          u.attributes.aPos,
          3,
          e.FLOAT,
          !1,
          0,
          0
        ), e.enableVertexAttribArray(c.attributes.aPos), e.vertexAttribPointer(c.attributes.aPos, 3, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(o.attributes.aPos), e.vertexAttribPointer(o.attributes.aPos, 3, e.FLOAT, !1, 0, 0), f = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, f), e.bufferData(e.ARRAY_BUFFER, new Float32Array(this.sampleCoord), e.STATIC_DRAW), e.enableVertexAttribArray(u.attributes.aTextureCoord), e.vertexAttribPointer(u.attributes.aTextureCoord, 2, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(c.attributes.aTextureCoord), e.vertexAttribPointer(c.attributes.aTextureCoord, 2, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(o.attributes.aTextureCoord), e.vertexAttribPointer(o.attributes.aTextureCoord, 2, e.FLOAT, !1, 0, 0), e.useProgram(u.program), e.bindFramebuffer(e.FRAMEBUFFER, l), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, a), e.uniform1i(u.uniforms.uSampler, 1), e.uniform1f(u.uniforms.threshold, n.threshold || 0), e.drawArrays(e.TRIANGLES, 0, this.vertex.length / 3), e.useProgram(c.program), e.bindFramebuffer(e.FRAMEBUFFER, v), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, l.texture), e.uniform1i(c.uniforms.uSampler, 1), e.uniform1i(c.uniforms.isVertical, !0), e.uniform1f(c.uniforms.blurSize, n.blurSize || 2), e.uniform1f(c.uniforms.devicePixelRatio, window.devicePixelRatio), e.uniform2fv(c.uniforms.canvasSize, [e.canvas.width, e.canvas.height]), e.drawArrays(e.TRIANGLES, 0, this.vertex.length / 3), e.useProgram(c.program), e.bindFramebuffer(e.FRAMEBUFFER, l), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, v.texture), e.uniform1i(c.uniforms.uSampler, 1), e.uniform1i(c.uniforms.isVertical, !1), e.uniform1f(c.uniforms.blurSize, n.blurSize || 2), e.uniform1f(c.uniforms.devicePixelRatio, window.devicePixelRatio), e.uniform2fv(c.uniforms.canvasSize, [e.canvas.width, e.canvas.height]), e.drawArrays(e.TRIANGLES, 0, this.vertex.length / 3), e.useProgram(o.program), e.bindFramebuffer(
          e.FRAMEBUFFER,
          t
        ), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, a), e.uniform1i(o.uniforms.originalTexture, 1), e.uniform1f(o.uniforms.toneScale, s), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, l.texture), e.uniform1i(o.uniforms.bloomTexture, 0), e.drawArrays(e.TRIANGLES, 0, this.vertex.length / 3), e.bindBuffer(e.ARRAY_BUFFER, null), e.useProgram(null);
      } }]), i;
    }(fi), nd = function(r) {
      function i(t) {
        return ft(this, i), Pt(this, (i.__proto__ || yt(i)).call(
          this,
          t
        ));
      }
      return Lt(i, r), ct(i, [{ key: "getProgram", value: function(t) {
        return this.programSample || (this.programSample = new Ft(t, { vertexShader: "attribute vec3 aPos;attribute vec2 aTextureCoord;varying vec2 vTextureCoord;void main(){vTextureCoord=aTextureCoord;gl_Position=vec4(aPos,1.0);}", fragmentShader: "precision mediump float;uniform sampler2D uSampler;uniform vec2 canvasSize;varying vec2 vTextureCoord;void main(){float fStep=1.0/312.0;vec4 sample11=texture2D(uSampler,vec2(vTextureCoord.s-1.0*fStep,vTextureCoord.t+1.0*fStep));vec4 sample12=texture2D(uSampler,vec2(vTextureCoord.s,vTextureCoord.t+1.0*fStep));vec4 sample13=texture2D(uSampler,vec2(vTextureCoord.s+1.0*fStep,vTextureCoord.t+1.0*fStep));vec4 sample21=texture2D(uSampler,vec2(vTextureCoord.s-1.0*fStep,vTextureCoord.t));vec4 sample22=texture2D(uSampler,vec2(vTextureCoord.s,vTextureCoord.t));vec4 sample23=texture2D(uSampler,vec2(vTextureCoord.s+1.0*fStep,vTextureCoord.t));vec4 sample31=texture2D(uSampler,vec2(vTextureCoord.s-1.0*fStep,vTextureCoord.t-1.0*fStep));vec4 sample32=texture2D(uSampler,vec2(vTextureCoord.s,vTextureCoord.t-1.0*fStep));vec4 sample33=texture2D(uSampler,vec2(vTextureCoord.s+1.0*fStep,vTextureCoord.t-1.0*fStep));vec4 blurSample=(sample11+sample12+sample13+sample21+2.0*sample22+sample23+sample31+sample32+sample33)/10.0;float desX=abs((gl_FragCoord.x-canvasSize.x/2.0)/(canvasSize.x/2.0));float desY=abs((gl_FragCoord.y-canvasSize.y/2.0)/(canvasSize.y/2.0));float factor=max(desX,desY);gl_FragColor=(sample22*(1.0-factor)+blurSample*factor);}" })), this.programSample;
      } }, { key: "render", value: function(t) {
        var e = t.gl;
        t = t.texture;
        var a = this.getProgram(e);
        e.useProgram(a.program);
        var n = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, n), e.bufferData(e.ARRAY_BUFFER, new Float32Array(this.vertex), e.STATIC_DRAW), e.enableVertexAttribArray(a.attributes.aPos), e.vertexAttribPointer(a.attributes.aPos, 3, e.FLOAT, !1, 0, 0), n = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, n), e.bufferData(e.ARRAY_BUFFER, new Float32Array(this.sampleCoord), e.STATIC_DRAW), e.enableVertexAttribArray(a.attributes.aTextureCoord), e.vertexAttribPointer(a.attributes.aTextureCoord, 2, e.FLOAT, !1, 0, 0), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, t), e.uniform1i(a.uniforms.uSampler, 1), e.uniform2fv(a.uniforms.canvasSize, [e.canvas.width, e.canvas.height]), e.drawArrays(e.TRIANGLES, 0, this.vertex.length / 3);
      } }]), i;
    }(fi), Ju = function() {
      function r(i) {
        ft(this, r), this.gl = i, this.effects = [], this.initFbo();
      }
      return ct(r, [{ key: "addEffect", value: function(i) {
        this.effects.push(i);
      } }, { key: "removeEffect", value: function(i) {
      } }, { key: "setEffects", value: function(i) {
        this.effects = i;
      } }, { key: "onResize", value: function() {
        this.initFbo();
        var i = this.gl, t = this.effects;
        if (t && 1 < t.length)
          for (var e = 1; e < t.length; e++) {
            var a = t[e];
            a.onResize && a.onResize(i);
          }
      } }, { key: "initFbo", value: function() {
        var i = this.gl;
        i && (this.fbo = [new _e(i), new _e(i)]);
      } }, { key: "destroy", value: function() {
        this.effects = [], this.fbo = [], this.gl = null;
      } }, { key: "render", value: function() {
        var i = this.gl, t = this.effects;
        if (t && 0 < t.length)
          for (var e = {}, a = 0; a < t.length; a++) {
            var n = this.fbo[a % 2].framebuffer;
            a === t.length - 1 && (n = null), i.bindFramebuffer(
              i.FRAMEBUFFER,
              n
            );
            var s = [0, 0, 0, 0];
            i.clearColor(s[0], s[1], s[2], s[3]), i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT), t[a].render({ isPickRender: !1, gl: i, texture: e.texture, fbo: n }), e = n;
          }
      } }]), r;
    }(), an = function() {
      function r(i, t) {
        ft(this, r), this.map = i, this.options = t || {}, this.eventMap = {};
      }
      return ct(r, [{ key: "onResize", value: function(i) {
      } }, { key: "onUpdate", value: function(i) {
        throw "未实现onUpdate方法";
      } }, { key: "getContainer", value: function() {
        throw "未实现getContainer方法";
      } }, { key: "getSize", value: function() {
        throw "未实现getSize方法";
      } }, { key: "getTilt", value: function() {
        throw "未实现getTilt方法";
      } }, { key: "getHeading", value: function() {
        throw "未实现getHeading方法";
      } }, { key: "getZoomUnits", value: function() {
        throw "未实现getZoomUnits方法";
      } }, { key: "getCenter", value: function() {
        throw "未实现getCenter方法";
      } }, { key: "getMapType", value: function() {
        throw "未实现getMapType方法";
      } }, { key: "lnglatToMercator", value: function(i, t) {
        return this.options.coordinateSystem === "gcj02" ? (t = t * Math.PI / 180, t = 31890685e-1 * Math.log((1 + Math.sin(t)) / (1 - Math.sin(t))), [parseFloat((i * Math.PI / 180 * 6378137).toFixed(2)), parseFloat(t.toFixed(2))]) : (i = q.convertLL2MC({ lng: i, lat: t }), [i.lng, i.lat]);
      } }]), r;
    }(), od = function(r) {
      function i(t) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t)), t.eventMap = {}, t;
      }
      return Lt(i, r), ct(i, [
        { key: "onResize", value: function(t) {
          this.map.addEventListener("resize", t), this.eventMap.resize = t;
        } },
        { key: "onMousemove", value: function(t) {
          t = this.extendCallback(t), this.map.addEventListener(
            "mousemove",
            t
          ), this.eventMap.mousemove = t;
        } },
        { key: "onClick", value: function(t) {
          t = this.extendCallback(t), this.map.addEventListener("click", t), this.eventMap.click = t;
        } },
        { key: "onDblClick", value: function(t) {
          t = this.extendCallback(t), this.map.addEventListener("dblclick", t), this.eventMap.dblclick = t;
        } },
        { key: "onRightClick", value: function(t) {
          t = this.extendCallback(t), this.map.addEventListener("rightclick", t), this.eventMap.rightclick = t;
        } },
        { key: "onUpdate", value: function(t) {
          this.map.addEventListener("update", t), this.map.addEventListener(
            "onearthstatuschange",
            t
          ), this.eventMap.update = t, this.eventMap.onearthstatuschange = t;
        } },
        { key: "extendCallback", value: function(t) {
          return function(e) {
            t(Rt(e, { x: e.x, y: e.y }));
          };
        } },
        { key: "unbind", value: function(t) {
          var e = this;
          this.eventMap[t] ? (this.map.removeEventListener(t, this.eventMap[t]), delete this.eventMap[t]) : (de(this.eventMap).forEach(function(a) {
            e.map.removeEventListener(a, e.eventMap[a]);
          }), this.eventMap = {});
        } },
        { key: "getContainer", value: function() {
          return this.map.getContainer();
        } },
        { key: "getSize", value: function() {
          return this.map.getSize();
        } },
        { key: "getBounds", value: function() {
          return this.map.getBounds();
        } },
        { key: "getTilt", value: function() {
          return this.map.getTilt();
        } },
        { key: "getHeading", value: function() {
          return this.map.getHeading();
        } },
        { key: "getZoomUnits", value: function() {
          return this.map.getZoomUnits();
        } },
        { key: "getZoom", value: function() {
          return this.map.getZoom();
        } },
        { key: "getCenter", value: function() {
          var t = this.map.getCenter();
          return -180 <= t.lng && 180 >= t.lng && (t = this.map.lnglatToMercator(t.lng, t.lat), t = { lng: t[0], lat: t[1] }), t;
        } },
        { key: "getMapType", value: function() {
          return this.map.getMapType();
        } },
        { key: "lnglatToMercator", value: function(t, e) {
          return this.map.lnglatToMercator(t, e);
        } },
        { key: "mercatorToLnglat", value: function(t, e) {
          return this.map.mercatorToLnglat(t, e);
        } },
        { key: "pixelToPointIn", value: function(t) {
          return t = this.map.pixelToPointIn(t), this.mercatorToLnglat(t.lng, t.lat);
        } }
      ]), i;
    }(an), ad = function(r) {
      function i(t) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t)), t.div = document.createElement("div"), t.div.style.position = "absolute", t.div.style.userSelect = "none", t.map.getPanes().mapPane.appendChild(t.div), t.eventMap = {}, t;
      }
      return Lt(i, r), ct(i, [
        { key: "onResize", value: function(t) {
          this.map.addEventListener("resize", t), this.eventMap.resize = t;
        } },
        { key: "onMousemove", value: function(t) {
          t = this.extendCallback(t), this.map.addEventListener("mousemove", t), this.eventMap.mousemove = t;
        } },
        { key: "onClick", value: function(t) {
          t = this.extendCallback(t), au ? (this.map.addEventListener("touchend", t), this.eventMap.touchend = t) : (this.map.addEventListener("click", t), this.eventMap.click = t);
        } },
        { key: "onDblClick", value: function(t) {
          t = this.extendCallback(t), this.map.addEventListener("dblclick", t), this.eventMap.dblclick = t;
        } },
        { key: "onRightClick", value: function(t) {
          t = this.extendCallback(t), this.map.addEventListener("rightclick", t), this.eventMap.rightclick = t;
        } },
        { key: "changeCanvas", value: function() {
          var t = this.map, e = t.getSize(), a = t.getCenter();
          t = t.pointToOverlayPixel(a), this.div.style.left = t.x - e.width / 2 + "px", this.div.style.top = t.y - e.height / 2 + "px";
        } },
        { key: "onUpdate", value: function(t) {
          var e = this, a = function() {
            e.changeCanvas(), t();
          };
          this.map.addEventListener(
            "moveend",
            a
          ), this.map.addEventListener("moving", a), this.map.addEventListener("zoomend", a), this.eventMap.moveend = a, this.eventMap.moving = a, this.eventMap.zoomend = a;
        } },
        { key: "extendCallback", value: function(t) {
          return function(e) {
            t(Rt(e, { x: e.pixel.x, y: e.pixel.y }));
          };
        } },
        { key: "unbind", value: function() {
          var t = this;
          de(this.eventMap).forEach(function(e) {
            t.map.removeEventListener(e, t.eventMap[e]);
          }), this.eventMap = {};
        } },
        { key: "getContainer", value: function() {
          return this.div;
        } },
        { key: "getSize", value: function() {
          return this.map.getSize();
        } },
        { key: "getBounds", value: function() {
          return this.map.getBounds();
        } },
        { key: "getTilt", value: function() {
          return 0;
        } },
        { key: "getHeading", value: function() {
          return 0;
        } },
        { key: "getZoom", value: function() {
          return this.map.getZoom();
        } },
        { key: "getZoomUnits", value: function() {
          var t = this.getZoom();
          return this.map.getMapType().getZoomUnits ? this.map.getMapType().getZoomUnits(t) : Math.pow(2, 18 - t);
        } },
        { key: "getCenter", value: function() {
          var t = this.map.getMapType().getProjection().lngLatToPoint(this.map.getCenter());
          return { lng: t.x, lat: t.y };
        } },
        { key: "lnglatToMercator", value: function(t, e) {
          return t = this.map.getMapType().getProjection().lngLatToPoint({ lng: t, lat: e }), [t.x, t.y];
        } },
        { key: "mercatorToLnglat", value: function(t, e) {
          return t = this.map.getMapType().getProjection().pointToLngLat({ lng: t, lat: e }), [t.lng, t.lat];
        } }
      ]), i;
    }(an), sd = function(r) {
      function i(t) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t)), t.eventMap = {}, t;
      }
      return Lt(i, r), ct(i, [{ key: "onResize", value: function(t) {
        window.addEventListener("resize", t), this.eventMap.resize = t;
      } }, {
        key: "onUpdate",
        value: function(t) {
        }
      }, { key: "unbind", value: function() {
        var t = this;
        de(this.eventMap).forEach(function(e) {
          window.removeEventListener(e, t.eventMap[e]);
        }), this.eventMap = {};
      } }, { key: "getContainer", value: function() {
        return this.map.container.getElementsByClassName("cesium-widget")[0];
      } }, { key: "getSize", value: function() {
        var t = this.map;
        return { width: t.canvas.clientWidth, height: t.canvas.clientHeight };
      } }, { key: "getTilt", value: function() {
        return 180 * this.map.camera.pitch / Math.PI + 90;
      } }, { key: "getHeading", value: function() {
        return 360 - 180 * this.map.camera.heading / Math.PI;
      } }, { key: "getZoomUnits", value: function() {
        var t = this.map;
        return 6.8 * t.scene.globe.ellipsoid.cartesianToCartographic(t.camera.position).height / 6500;
      } }, { key: "getZoom", value: function() {
        return 10;
      } }, { key: "getCenter", value: function() {
        var t = this.map;
        return t = t.camera.pickEllipsoid(new Cesium.Cartesian2(t.canvas.clientWidth / 2, t.canvas.clientHeight / 2)), t = Cesium.Ellipsoid.WGS84.cartesianToCartographic(t), t = this.getMercator([180 * t.longitude / Math.PI, 180 * t.latitude / Math.PI]), {
          lng: t[0],
          lat: t[1]
        };
      } }, { key: "getMercator", value: function(t) {
        var e = [];
        return e[0] = t[0] * Math.PI / 180 * 6378137, t = t[1] * Math.PI / 180, e[1] = 31890685e-1 * Math.log((1 + Math.sin(t)) / (1 - Math.sin(t))), e;
      } }]), i;
    }(an), ud = function(r) {
      function i(t) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t)), t.eventMap = {}, t;
      }
      return Lt(i, r), ct(i, [{ key: "onResize", value: function(t) {
        window.addEventListener("resize", t), this.eventMap.resize = t;
      } }, { key: "onUpdate", value: function(t) {
      } }, { key: "unbind", value: function() {
        var t = this;
        de(this.eventMap).forEach(function(e) {
          window.removeEventListener(
            e,
            t.eventMap[e]
          );
        }), this.eventMap = {};
      } }, { key: "getContainer", value: function() {
        return this.map.container;
      } }, { key: "getSize", value: function() {
        return { width: this.map.container.clientWidth, height: this.map.container.clientHeight };
      } }, { key: "getTilt", value: function() {
        return this.map.tilt;
      } }, { key: "getHeading", value: function() {
        return this.map.heading;
      } }, { key: "getZoomUnits", value: function() {
        return this.map.zoomUnits;
      } }, { key: "getZoom", value: function() {
        return this.map.zoom;
      } }, { key: "getCenter", value: function() {
        return this.map.center;
      } }]), i;
    }(an), ld = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.eventMap = {}, t;
      }
      return Lt(i, r), ct(i, [{ key: "onResize", value: function(t) {
        window.addEventListener("resize", t), this.eventMap.resize = t;
      } }, { key: "onUpdate", value: function(t) {
      } }, { key: "unbind", value: function() {
        var t = this;
        de(this.eventMap).forEach(function(e) {
          window.removeEventListener(e, t.eventMap[e]);
        }), this.eventMap = {};
      } }, { key: "getContainer", value: function() {
        return this.map.container;
      } }, { key: "getSize", value: function() {
        return {
          width: this.map.container.clientWidth,
          height: this.map.container.clientHeight
        };
      } }, { key: "getTilt", value: function() {
        return this.map.tilt;
      } }, { key: "getHeading", value: function() {
        return this.map.heading;
      } }, { key: "getZoomUnits", value: function() {
        return this.map.zoomUnits;
      } }, { key: "getCenter", value: function() {
        return this.map.center;
      } }]), i;
    }(an), Qu = function() {
      function r(i, t) {
        var e = this;
        ft(this, r), t = t || {}, t.mapType === "bmap" ? this.map = new ad(i, t) : t.mapType === "blank" ? this.map = new ud(i, t) : t.mapType === "cesium" ? this.map = new sd(i, t) : t.mapType === "three" ? this.map = new ld(i, t) : (t.mapType = "bmapgl", this.map = new od(i, t)), this.map.type = t.mapType, this._dpr = window.devicePixelRatio, t.mapType === "bmapgl" && (this._dpr = this.map.map.config.ratio), this.options = t || {}, this.renderArr = [], (i = t.canvas) || (i = document.createElement("canvas")), this.canvas = i, this.gl = t.gl ? t.gl : Xt(i, t), ["OES_texture_float", "OES_element_index_uint", "WEBGL_color_buffer_float", "EXT_float_blend"].forEach(function(a) {
          e.gl.getExtension(a);
        }), this.changeSize(), this.projectionMatrix = pt.create(Float64Array), this.orthoMatrix = pt.create(Float64Array), this.matrix = pt.create(Float64Array), this.viewMatrix = pt.create(Float64Array), this.pointToPixelMatrix = pt.create(Float64Array), this.pixelToViewMatrix = pt.create(Float64Array), this.fovy = 35, this.fps = Math.min(t.fps, 60) || 60, this.renderTime = (/* @__PURE__ */ new Date()).valueOf(), this._animation = this.animation.bind(this), this._update = this.update.bind(this), this.onInitialize(this.options.onInitialize), this.options.onRender && this.renderArr.push(this.options.onRender), this.stateManager = new Zu({ gl: this.gl }), this.pickFBO = new _e(this.gl), this.transferOptions = {}, this.bind();
      }
      return ct(r, [
        { key: "bind", value: function() {
          var i = this, t = this.map;
          t.onResize(function() {
            i.changeSize(), i.render();
          }), t.onUpdate(this._update), t.onClick && t.onClick(function(e) {
            i.onClick && i.onClick(e);
          }), t.onDblClick && t.onDblClick(function(e) {
            i.onDblClick && i.onDblClick(e);
          }), t.onRightClick && t.onRightClick(function(e) {
            i.onRightClick && i.onRightClick(e);
          }), t.onMousemove && t.onMousemove(function(e) {
            i.onMousemove && i.onMousemove(e);
          }), this.options.canvas || t.getContainer().appendChild(this.canvas);
        } },
        { key: "unbind", value: function() {
          var i = this.map;
          i.unbind && i.unbind();
        } },
        { key: "setOptions", value: function(i) {
          this.options = i;
        } },
        { key: "onInitialize", value: function(i) {
          i && (this.transferOptions = i.bind(this)(this.gl) || {});
        } },
        { key: "bindFramebuffer", value: function(i) {
          var t = this.gl;
          i ? t.bindFramebuffer(t.FRAMEBUFFER, i.framebuffer) : t.bindFramebuffer(t.FRAMEBUFFER, null);
        } },
        { key: "saveFramebuffer", value: function() {
          var i = this.gl;
          this.preFramebuffer = i.getParameter(i.FRAMEBUFFER_BINDING);
        } },
        { key: "restoreFramebuffer", value: function() {
          var i = this.gl;
          i.bindFramebuffer(i.FRAMEBUFFER, this.preFramebuffer);
        } },
        { key: "onRender", value: function(i) {
          this.renderArr.push(i);
        } },
        { key: "changeSize", value: function() {
          var i = this.canvas, t = this.options;
          if (i) {
            var e = i.style, a = this.map.getSize(), n = this._dpr;
            i.width = a.width * n, i.height = a.height * n, e.cssText = "position: absolute;left:0;top:0;width:" + a.width + "px;height:" + a.height + "px;z-index:2;", t.mapType !== "cesium" || t.canvas || (e.pointerEvents = "none"), this.gl.viewport(0, 0, i.width, i.height);
          }
        } },
        { key: "update", value: function() {
          this.options.autoUpdate === !1 || this.isAnimation && 60 <= this.fps || this.render();
        } },
        { key: "pixelToPointIn", value: function(i) {
          return this.map.pixelToPointIn(i);
        } },
        { key: "render", value: function() {
          if (this.map && this.gl) {
            var i = this.options, t = this.projectionMatrix, e = this.viewMatrix;
            if (i.mapType === "three")
              e = this.map.map.camera, t = e.projectionMatrix.elements, e = e.matrixWorldInverse.elements;
            else if (i.mapType === "cesium") {
              e = this.map.map;
              var a = e.camera.frustum.projectionMatrix;
              t = new Float32Array([
                a[0],
                a[1],
                a[2],
                a[3],
                a[4],
                a[5],
                a[6],
                a[7],
                a[8],
                a[9],
                a[10],
                a[11],
                a[12],
                a[13],
                a[14],
                a[15]
              ]), a = e.camera.viewMatrix, e = new Float32Array([a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]]);
            } else
              this.map.map.mapType === "B_EARTH_MAP" ? (t = this.map.map.getEarth().scene._camera.getProjectionMatrix(), e = this.map.map.getEarth().scene._camera.getModelViewMatrix()) : (this.updateProjectionMatrix(), this.updateModelViewMatrix());
            for (a = pt.multiply(this.matrix, t, e), Rt(this.transferOptions, {
              gl: this.gl,
              matrix: a,
              pointToPixelMatrix: this.pointToPixelMatrix,
              pixelToViewMatrix: this.pixelToViewMatrix,
              projectionMatrix: t,
              orthoMatrix: this.orthoMatrix,
              viewMatrix: e,
              stateManager: this.stateManager
            }), i.mapType !== "three" && i.mapType !== "cesium" && i.autoUpdate !== !1 && this.clear(), i = 0; i < this.renderArr.length; i++)
              this.renderArr[i] && this.renderArr[i].bind(this)(this.transferOptions);
          }
        } },
        { key: "clear", value: function(i) {
          var t = this.gl, e = this.options.clearColor || [0, 0, 0, 0];
          t.clearColor(e[0], e[1], e[2], e[3]), i && (i instanceof Array || (i = V(i).unitArray()), t.clearColor(
            i[0],
            i[1],
            i[2],
            i[3]
          )), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT);
        } },
        { key: "updateProjectionMatrix", value: function() {
          var i = this.gl.canvas.width / this.gl.canvas.height, t = this.options.cameraNear || 1, e = this.options.cameraFar || 4e3;
          pt.perspective(this.projectionMatrix, D(this.fovy), i, t, e), i = this.map.getSize(), pt.ortho(this.orthoMatrix, -i.width / 2, i.width / 2, -i.height / 2, i.height / 2, t, e);
        } },
        { key: "updateModelViewMatrix", value: function() {
          var i = this.map, t = this.viewMatrix, e = this.pointToPixelMatrix, a = this.pixelToViewMatrix;
          pt.identity(t), pt.identity(e), pt.identity(a);
          var n = i.getSize();
          n = Math.round(-n.height / (2 * Math.tan(D(this.fovy) / 2))), pt.translate(a, a, [0, 0, n]), pt.rotate(a, a, D(i.getTilt()), [-1, 0, 0]), pt.rotate(a, a, D(i.getHeading()), [0, 0, -1]), n = i.getCenter();
          var s = this.options.pointOffset || [0, 0];
          i = i.getZoomUnits(), pt.translate(e, e, [(s[0] - n.lng) / i, (s[1] - n.lat) / i, 0]), i = 1 / i, pt.scale(e, e, [i, i, i]), pt.multiply(t, a, e);
        } },
        { key: "destroy", value: function() {
          this.stopAnimation(), this.unbind();
          var i = this.gl.getExtension("WEBGL_lose_context");
          i && i.loseContext(), this.canvas.remove(), this.gl = this.canvas = null;
        } },
        { key: "animation", value: function() {
          if (this.isAnimation) {
            if (60 <= this.fps)
              this.render();
            else {
              var i = (/* @__PURE__ */ new Date()).valueOf(), t = Math.floor(1e3 / this.fps), e = i - this.renderTime;
              e > t && (this.render(), this.renderTime = i - e % t);
            }
            window.requestAnimationFrame(this._animation);
          }
        } },
        { key: "startAnimation", value: function() {
          this.isAnimation || (this.isAnimation = !0, window.requestAnimationFrame(this._animation));
        } },
        { key: "stopAnimation", value: function() {
          this.isAnimation = !1;
        } }
      ]), r;
    }(), fd = function() {
      function r(i) {
        ft(this, r), this.layers = [], this.options = i, this.webglLayer = i.webglLayer;
      }
      return ct(r, [
        { key: "addLayer", value: function(i) {
          for (var t = !1, e = 0; e < this.layers.length; e++)
            if (this.layers[e] === i) {
              t = !0;
              break;
            }
          t || (i.map = this.webglLayer.map, i.layerType === "threeLayer" ? (i.setWebglLayer(this.webglLayer), t = i.getThreeLayer(), this.addLayer(t), i.initialize && i.initialize(t)) : (i.setWebglLayer(this.webglLayer), i.commonInitialize && i.commonInitialize(this.webglLayer.gl), i.initialize && i.initialize(this.webglLayer.gl), i.onOptionsChanged(i.getOptions(), {}), i.onDataChanged(i.getData()), i.onChanged(i.getOptions(), i.getData())), this.putInLayer(i)), this.options.autoUpdate && (this.isRequestAnimation() ? this.webglLayer.startAnimation() : this.webglLayer.stopAnimation()), this.webglLayer.render();
        } },
        { key: "putInLayer", value: function(i) {
          i.options.renderOrder === void 0 && (i.options.renderOrder = this.layers.length), this.layers.push(i), this.layers = this.layers.sort(function(t, e) {
            return t.options.renderOrder - e.options.renderOrder;
          });
        } },
        { key: "removeLayer", value: function(i) {
          for (var t = 0; t < this.layers.length; t++)
            this.layers[t] === i && this.layers.splice(t, 1);
          this.options.autoUpdate && (this.isRequestAnimation() ? this.webglLayer.startAnimation() : this.webglLayer.stopAnimation()), this.webglLayer.render();
        } },
        { key: "showLayer", value: function(i) {
          for (var t = 0; t < this.layers.length; t++)
            this.layers[t] === i && i.show();
          this.options.autoUpdate && (this.isRequestAnimation() ? this.webglLayer.startAnimation() : this.webglLayer.stopAnimation()), this.webglLayer.render();
        } },
        { key: "hideLayer", value: function(i) {
          for (var t = 0; t < this.layers.length; t++)
            this.layers[t] === i && i.hide();
          this.options.autoUpdate && (this.isRequestAnimation() ? this.webglLayer.startAnimation() : this.webglLayer.stopAnimation()), this.webglLayer.render();
        } },
        { key: "removeAllLayers", value: function() {
          this.layers = [], this.webglLayer.stopAnimation(), this.webglLayer.render();
        } },
        { key: "destroyAllLayers", value: function() {
          for (var i = 0; i < this.layers.length; i++) {
            var t = this.layers[i];
            t.destroy && t.destroy();
          }
        } },
        {
          key: "getAllLayers",
          value: function() {
            return this.layers;
          }
        },
        { key: "getAllThreeLayers", value: function() {
          for (var i = [], t = 0; t < this.layers.length; t++) {
            var e = this.layers[t];
            e.layerType === "ThreeLayer" && i.push(e);
          }
          return i;
        } },
        { key: "isRequestAnimation", value: function() {
          for (var i = !1, t = 0; t < this.layers.length; t++)
            if (this.layers[t].isRequestAnimation()) {
              i = !0;
              break;
            }
          return i;
        } },
        { key: "beforeRender", value: function(i) {
          i.gl && this.webglLayer.stateManager.setDefaultState();
        } },
        { key: "afterRender", value: function(i) {
          (i = i.gl) && (i.bindBuffer(
            i.ARRAY_BUFFER,
            null
          ), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, null), i.useProgram(null));
        } },
        { key: "renderGLLayers", value: function(i) {
          this.webglLayer.stateManager.save();
          for (var t = 0; t < this.layers.length; t++) {
            var e = this.layers[t];
            if (e._visible === !0 && e.layerType !== "threeLayer" && e.layerType !== "ThreeLayer") {
              var a = e.map.getZoom(), n = e.getOptions().zoomThreshold;
              n && (a < n[0] || a >= n[1]) || (this.beforeRender(i), e.render(i), this.afterRender(i));
            }
          }
          this.webglLayer.stateManager.restore();
        } },
        { key: "renderThreeLayer", value: function(i) {
          this.webglLayer.stateManager.save(), this.webglLayer.stateManager.setState({ blendFunc: [i.gl.SRC_ALPHA, i.gl.ONE], depthMask: !1, depthTest: !0, depthFunc: i.gl.LESS, cullFace: !1 });
          for (var t = 0; t < this.layers.length; t++) {
            var e = this.layers[t];
            if (e._visible === !0 && e.layerType === "ThreeLayer") {
              var a = e.map.getZoom(), n = e.getOptions().zoomThreshold;
              n && (a < n[0] || a >= n[1]) || e.render(i);
            }
          }
          this.webglLayer.stateManager.restore();
        } },
        { key: "renderThreeLayers", value: function(i) {
          this.webglLayer.stateManager.save(), this.webglLayer.stateManager.setState({ blendFunc: [
            i.gl.SRC_ALPHA,
            i.gl.ONE
          ], depthMask: !1, depthTest: !0, depthFunc: i.gl.LESS, cullFace: !1 });
          for (var t = 0; t < this.layers.length; t++) {
            var e = this.layers[t];
            if (e._visible === !0 && e.layerType === "threeLayer") {
              var a = e.map.getZoom(), n = e.getOptions().zoomThreshold;
              n && (a < n[0] || a >= n[1]) || e.render(i);
            }
          }
          this.webglLayer.stateManager.restore();
        } },
        { key: "onClick", value: function(i) {
          for (var t = 0; t < this.layers.length; t++) {
            var e = this.layers[t];
            if (e._visible === !0 && e.layerType !== "threeLayer" && e.layerType !== "ThreeLayer") {
              var a = e.map.getZoom(), n = e.getOptions().zoomThreshold;
              n && (a <= n[0] || a >= n[1]) || !e.options.enablePicked || !e.options.onClick || !e.pick || (a = e.pick(i.x, i.y, "onClick"), e.options.onClick(a, i), e.options.autoSelect && this.webglLayer.render());
            }
          }
        } },
        { key: "onDblClick", value: function(i) {
          for (var t = 0; t < this.layers.length; t++) {
            var e = this.layers[t];
            if (e._visible === !0 && e.layerType !== "threeLayer" && e.layerType !== "ThreeLayer") {
              var a = e.map.getZoom(), n = e.getOptions().zoomThreshold;
              n && (a <= n[0] || a >= n[1]) || !e.options.enablePicked || !e.options.onDblClick || !e.pick || (a = e.pick(
                i.x,
                i.y,
                "onDblClick"
              ), e.options.onDblClick(a, i), e.options.autoSelect && this.webglLayer.render());
            }
          }
        } },
        { key: "onRightClick", value: function(i) {
          for (var t = 0; t < this.layers.length; t++) {
            var e = this.layers[t];
            if (e._visible === !0 && e.layerType !== "threeLayer" && e.layerType !== "ThreeLayer") {
              var a = e.map.getZoom(), n = e.getOptions().zoomThreshold;
              n && (a <= n[0] || a >= n[1]) || !e.options.enablePicked || !e.options.onRightClick || !e.pick || (a = e.pick(i.x, i.y, "onRightClick"), e.options.onRightClick(a, i), e.options.autoSelect && this.webglLayer.render());
            }
          }
        } },
        { key: "onMousemove", value: function(i) {
          for (var t = !1, e = 0; e < this.layers.length; e++) {
            var a = this.layers[e];
            if (a._visible === !0 && a.layerType !== "threeLayer" && a.layerType !== "ThreeLayer") {
              var n = a.map.getZoom(), s = a.getOptions().zoomThreshold;
              (!s || !(n <= s[0] || n >= s[1])) && a.options.enablePicked && a.pick && (a.options.onMousemove || a.options.autoSelect) && (n = a.pick(i.x, i.y, "onMousemove"), this.webglLayer.map.map.platform.style.cursor = n.dataIndex === -1 ? "default" : "pointer", a.options.onMousemove && a.options.onMousemove(
                n,
                i
              ), a.options.autoSelect && (t = !0));
            }
          }
          t && (this.webglLayer.isAnimation || this.webglLayer.render());
        } },
        { key: "destroy", value: function() {
          this.destroyAllLayers(), this.removeAllLayers();
        } }
      ]), r;
    }(), ua = function() {
      function r(i) {
        var t = this;
        ft(this, r), this.options = { autoUpdate: !0 }, this._visible = !0, Rt(this.options, i);
        var e = i.pointOffset;
        this.webglLayer = i.webglLayer || new Qu(i.map, this.options), this.layerManager = new fd({ autoUpdate: this.options.autoUpdate, webglLayer: this.webglLayer }), this.effectManager = new Ju(this.webglLayer.gl), this.webglRender = { render: function() {
        } }, this.options.effects && this.effectManager.setEffects([this.webglRender].concat(this.options.effects)), this.webglLayer.onRender(function(a) {
          t._render(a);
        }), this.webglLayer.onClick = function(a) {
          t._visible && t.layerManager.onClick(a);
        }, this.webglLayer.onDblClick = function(a) {
          t._visible && t.layerManager.onDblClick(a);
        }, this.webglLayer.onRightClick = function(a) {
          t._visible && t.layerManager.onRightClick(a);
        }, this.webglLayer.onMousemove = function(a) {
          t._visible && t.layerManager.onMousemove(a);
        }, e || this.webglLayer.options.mapType === "cesium" || (e = this.webglLayer.map.getCenter(), this.webglLayer.options.pointOffset = [e.lng, e.lat]), this.webglLayer.map.onResize(function() {
          t.effectManager.onResize();
        }), (this.postProcessing = i.postProcessing) && (this.postProcessing.setWebglLayer(this.webglLayer), i = this.postProcessing.getThreeLayer(), this.addLayer(i), this.postProcessing.initialize(i), i.postProcessing = this.postProcessing);
      }
      return ct(r, [
        { key: "renderCanvas", value: function(i) {
          var t = this;
          this.postProcessing ? this.postProcessing.addRender(function() {
            t.layerManager.renderGLLayers(i);
          }) : this.layerManager.renderGLLayers(i), this.layerManager.renderThreeLayers(i), this.layerManager.renderThreeLayer(i);
        } },
        { key: "render", value: function() {
          this.webglLayer && this.webglLayer.render();
        } },
        { key: "_render", value: function(i) {
          var t = this;
          if (this._visible) {
            var e = this.options.effects;
            e && 0 < e.length ? (this.webglRender.render = function() {
              t.renderCanvas(i);
            }, this.effectManager.render()) : (this.webglLayer.saveFramebuffer(), this.renderCanvas(i), this.webglLayer.restoreFramebuffer());
          }
        } },
        { key: "onRender", value: function(i) {
          this.webglLayer.onRender(i);
        } },
        { key: "destroy", value: function() {
          this.stopAnimation(), this.layerManager.destroy(), this.effectManager.destroy(), this.webglLayer.destroy();
        } },
        { key: "isRequestAnimation", value: function() {
          return this.layerManager.isRequestAnimation();
        } },
        { key: "startAnimation", value: function() {
          this.webglLayer.startAnimation();
        } },
        { key: "stopAnimation", value: function() {
          this.webglLayer.stopAnimation();
        } },
        { key: "show", value: function() {
          this._visible !== !0 && (this._visible = !0, this.webglLayer.render(), this.isRequestAnimation() && this.startAnimation());
        } },
        { key: "hide", value: function() {
          this._visible !== !1 && (this._visible = !1, this.stopAnimation(), this.webglLayer.clear());
        } },
        { key: "showLayer", value: function(i) {
          this.layerManager.showLayer(i);
        } },
        { key: "hideLayer", value: function(i) {
          this.layerManager.hideLayer(i);
        } },
        { key: "add", value: function(i) {
          this.addLayer(i);
        } },
        { key: "remove", value: function(i) {
          this.removeLayer(i);
        } },
        { key: "addLayer", value: function(i) {
          this.layerManager.addLayer(i);
        } },
        { key: "removeLayer", value: function(i) {
          this.layerManager.removeLayer(i);
        } },
        {
          key: "removeAllLayers",
          value: function() {
            this.layerManager.removeAllLayers();
          }
        },
        { key: "getAllLayers", value: function() {
          return this.layerManager.getAllLayers();
        } },
        { key: "getAllThreeLayers", value: function() {
          return this.layerManager.getAllThreeLayers();
        } }
      ]), r;
    }(), la = function() {
      function r(i) {
        ft(this, r), this._visible = !0, this.options = this.getCommonDefaultOptions(), this.options = Rt(this.options, this.getDefaultOptions()), this.autoUpdate = !1, this.options = Rt(this.options, i), this.options.data && (this.data = this.options.data, delete this.options.data);
      }
      return ct(r, [{ key: "getCommonDefaultOptions", value: function() {
        return {};
      } }, { key: "getDefaultOptions", value: function() {
        return {};
      } }, { key: "initialize", value: function(i) {
      } }, { key: "destroy", value: function() {
        this.onDestroy && this.onDestroy();
      } }, { key: "show", value: function() {
        this._visible = !0;
      } }, { key: "hide", value: function() {
        this._visible = !1;
      } }, { key: "render", value: function() {
      } }, { key: "clear", value: function() {
        this.setData([]);
      } }, { key: "setData", value: function(i, t) {
        t = t || {}, this.data = i, this.onDataChanged && this.onDataChanged(this.getData()), this.onChanged && this.onChanged(this.getOptions(), this.getData(), t), t.autoRender !== !1 && this.webglLayer && this.webglLayer.render();
      } }, { key: "getData", value: function() {
        return this.data || [];
      } }, { key: "setOptions", value: function(i, t) {
        i = i || {}, t = t || {};
        var e = Rt({}, this.getOptions());
        Rt(this.options, i), this.onOptionsChanged && this.onOptionsChanged(this.getOptions(), e), this.onChanged && this.onChanged(this.getOptions(), this.getData(), t), i.data ? (this.setData(i.data, t), delete i.data) : t.autoRender !== !1 && this.webglLayer && this.webglLayer.render();
      } }, { key: "getOptions", value: function() {
        return this.options || {};
      } }, { key: "onOptionsChanged", value: function(i, t) {
      } }, { key: "onDataChanged", value: function(i) {
      } }, { key: "onChanged", value: function(i, t) {
      } }, { key: "onDestroy", value: function() {
      } }, { key: "lnglatToMercator", value: function(i, t) {
      } }, { key: "setWebglLayer", value: function(i) {
        this.webglLayer = i;
      } }, { key: "getWebglLayer", value: function() {
        return this.webglLayer;
      } }, { key: "isRequestAnimation", value: function() {
        return this.autoUpdate;
      } }]), r;
    }(), jt = function(r) {
      function i(t) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t)), t.pickedColor = [-1, -1, -1], t;
      }
      return Lt(i, r), ct(i, [
        { key: "getCommonDefaultOptions", value: function() {
          return { pickWidth: 1, pickHeight: 1, blend: "default", zIndex: 0, zoomThreshold: [0, 30], repeat: !1, enablePicked: !1, autoSelect: !1, selectedIndex: -1, selectedColor: "rgba(20, 20, 200, 1.0)" };
        } },
        { key: "commonInitialize", value: function(t) {
          var e = this.getOptions();
          this.gl = t, e.enablePicked && (this.pickBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }));
        } },
        { key: "getCommonAttributes", value: function() {
          var t = [];
          return this.getOptions().enablePicked && t.push({ name: "aPickColor", buffer: this.pickBuffer, size: 3, type: "FLOAT", stride: 12, offset: 0 }), t;
        } },
        { key: "getProperty", value: function(t, e, a) {
          return Object.prototype.toString.call(e) === "[object Function]" ? e(a) : (e = a[t] || e, "properties" in a && t in a.properties && (e = a.properties[t]), e);
        } },
        { key: "normizedColor", value: function(t) {
          var e = t;
          return t instanceof Array || (e = V(t).unitArray()), e[3] === void 0 && (e[3] = 1), e;
        } },
        {
          key: "normizedPoint",
          value: function(t) {
            var e = this.getPointOffset();
            if (!t || !t[0] || !t[1])
              return [e[0], e[1], 0];
            var a = Number(t[0]), n = Number(t[1]);
            -180 <= a && 180 >= a && -90 <= n && 90 >= n && (n = this.webglLayer.map.lnglatToMercator(a, n), a = n[0], n = n[1]);
            var s = Number(t[2]) || 0;
            return this.webglLayer && this.webglLayer.options.mapType === "cesium" && window.Cesium ? (a = this.convertLngLat([a, n]), s = window.Cesium.Cartesian3.fromDegrees(a[0], a[1], s), a = s.x, n = s.y, s = s.z) : this.webglLayer && this.webglLayer.options.mapType === "bmapgl" && this.webglLayer.map.map.mapType === "B_EARTH_MAP" && (a = this.convertLngLat([a, n]), s = this.webglLayer.map.map.getEarth().scene.fromLatLngToXYZ({ lng: a[0], lat: a[1] }), a = s.x, n = s.y, s = s.z), 3 < t.length ? [a - e[0], n - e[1], s].concat(bt(t.slice(3))) : [a - e[0], n - e[1], s];
          }
        },
        { key: "convertLngLat", value: function(t) {
          return [t[0] / 2003750834e-2 * 180, 180 / Math.PI * (2 * Math.atan(Math.exp(t[1] / 2003750834e-2 * 180 * Math.PI / 180)) - Math.PI / 2)];
        } },
        { key: "getPointOffset", value: function() {
          var t = [0, 0], e = this.getOptions();
          return this.webglLayer && this.webglLayer.options.pointOffset ? t = this.webglLayer.options.pointOffset : e.pointOffset && (t = e.pointOffset), t;
        } },
        { key: "indexToRgb", value: function(t) {
          t++;
          var e = Math.floor(t / 65536);
          t -= 65536 * e;
          var a = Math.floor(t / 256);
          return [t - 256 * a, a, e];
        } },
        { key: "rgbToIndex", value: function(t) {
          for (var e = t.length / 4, a = Math.floor(e / 2), n = function(v) {
            return t[v] + 256 * t[v + 1] + 65536 * t[v + 2] - 1;
          }, s = 0; ; s++) {
            var o = a + s, u = a - s;
            if (o === u) {
              if (o = n(4 * o), -1 < o)
                return o;
            } else {
              if (o < e) {
                var c = n(4 * o);
                if (-1 < c)
                  return c;
              }
              if (0 <= u && (c = n(4 * u), -1 < c))
                return c;
              if (o >= e && 0 > u)
                break;
            }
          }
          return -1;
        } },
        { key: "getCommonUniforms", value: function(t) {
          t = t.isPickRender;
          var e = this.getOptions(), a = {};
          if (e.enablePicked) {
            var n = 0 <= e.selectedIndex ? e.selectedIndex : -1;
            n = e.autoSelect ? this.pickedColor : this.indexToRgb(n), a = Rt(a, { uSelectedColor: this.normizedColor(e.selectedColor), uEnablePicked: e.enablePicked, uPickedColor: n.map(function(s) {
              return s / 255;
            }), uIsPickRender: !!t });
          }
          return a;
        } },
        { key: "pick", value: function(t, e, a) {
          var n = this.getOptions(), s = this.gl, o = this.webglLayer._dpr;
          this.webglLayer.saveFramebuffer(), this.webglLayer.bindFramebuffer(this.webglLayer.pickFBO), this.webglLayer.clear(), this.render({ gl: s, isPickRender: !0, matrix: this.webglLayer.matrix, projectionMatrix: this.webglLayer.projectionMatrix, viewMatrix: this.webglLayer.viewMatrix, orthoMatrix: this.webglLayer.orthoMatrix });
          var u = new Uint8Array(4 * n.pickWidth * n.pickHeight);
          return s.readPixels(t * o - Math.floor(n.pickWidth / 2), s.canvas.height - e * o - Math.floor(n.pickHeight / 2), n.pickWidth, n.pickHeight, s.RGBA, s.UNSIGNED_BYTE, u), t = this.rgbToIndex(u), this.pickAfter && (t = this.pickAfter(u, t + 1)), this.setPickedIndex && this.setPickedIndex(
            t,
            a
          ), a = this.getData(), this.pickedColor = [u[0], u[1], u[2]], this.webglLayer.restoreFramebuffer(), { dataIndex: t, dataItem: a[t] };
        } },
        { key: "setGLState", value: function(t) {
          this.webglLayer.stateManager.setState(t, this.options);
        } },
        { key: "addMultipleCoords", value: function(t, e, a) {
          if (!this.options.repeat || !this.webglLayer || this.webglLayer.options.mapType !== "bmapgl" || this.webglLayer.map.map.mapType === "B_EARTH_MAP")
            return [t];
          var n = this.webglLayer.map.map;
          e = e || n.getZoom();
          var s = a ? n.worldSize(e) : 4007545274461451e-8;
          if (e = function(p) {
            return [[p[0] - s, p[1], p[2] || 0], [p[0] + s, p[1], p[2] || 0]];
          }, t instanceof Array && !(t[0] instanceof Array))
            return e = e(t), e = Vt(e, 2), [t, e[0], e[1]];
          if (t instanceof Array && t[0] instanceof Array && !(t[0][0] instanceof Array)) {
            a = [], n = [];
            for (var o = 0; o < t.length; o++) {
              var u = e(t[o]);
              u = Vt(u, 2);
              var c = u[1];
              a.push(u[0]), n.push(c);
            }
            return [t, a, n];
          }
          for (a = [], n = [], o = 0; o < t.length; o++) {
            u = [], c = [];
            for (var v = 0; v < t[o].length; v++) {
              var l = e(t[o][v]);
              l = Vt(l, 2);
              var f = l[1];
              u.push(l[0]), c.push(f);
            }
            a.push(u), n.push(c);
          }
          return [
            t,
            a,
            n
          ];
        } }
      ]), i;
    }(la), hd = function(r) {
      function i(t) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t)), t.name = "CircleLayer", t.bufferData = [], t.initializeTime = /* @__PURE__ */ new Date(), t;
      }
      return Lt(i, r), ct(i, [
        { key: "getDefaultOptions", value: function() {
          return { depthWrite: !0, depthTest: !0, size: 10, unit: "px", color: "blue", borderWidth: 0, borderColor: "#000000", antialias: !0 };
        } },
        { key: "initialize", value: function(t) {
          this.gl = t;
          var e = this.getOptions();
          this.program = new Ft(this.gl, {
            vertexShader: `attribute vec3 aPos;attribute float aSize;attribute float aIndex;attribute vec4 aColor;attribute float aBorderWidth;attribute vec4 aBorderColor;varying vec4 vColor;varying vec3 vPosition;varying vec3 vFragPosition;varying float vSize;varying float vBorderWidth;varying vec4 vBorderColor;uniform mat4 uMatrix;uniform float uZoomUnits;uniform vec4 uSelectedColor;void main(){vColor=aColor;vBorderWidth=aBorderWidth*uZoomUnits;vBorderColor=aBorderColor;float x=aPos.x;float y=aPos.y;float z=aPos.z*uZoomUnits;vSize=aSize*uZoomUnits+vBorderWidth;if(aIndex==1.0){x+=vSize;y-=vSize;}else if(aIndex==2.0){x-=vSize;y+=vSize;}else if(aIndex==3.0){x+=vSize;y+=vSize;}else{x-=vSize;y-=vSize;}vPosition=aPos;vFragPosition=vec3(x,y,z);gl_Position=uMatrix*vec4(vFragPosition,1.0);
#if defined(PICK)
if(mapvIsPicked()){vColor=uSelectedColor;}
#endif
}`,
            fragmentShader: "varying vec3 vPosition;varying float vSize;varying vec3 vFragPosition;varying vec4 vColor;varying float vBorderWidth;varying vec4 vBorderColor;uniform mat4 uMatrix;uniform float uTime;uniform float duration;uniform float trail;uniform float lineWidth;uniform float uAntiAliasing;void main(){float d=distance(vFragPosition.xy,vPosition.xy);if(d>vSize){discard;}vec4 color=vColor;float r=vSize-vBorderWidth;if(vBorderWidth>0.0){if(d>r){color=vBorderColor;}else if(uAntiAliasing==1.0&&d>0.95*r){color=vBorderColor;float st=1.0-smoothstep(0.95*r,r,d);color.r+=(vColor.r-vBorderColor.r)*st;color.g+=(vColor.g-vBorderColor.g)*st;color.b+=(vColor.b-vBorderColor.b)*st;color.a+=(vColor.a-vBorderColor.a)*st;}}if(uAntiAliasing==1.0&&d>0.95*vSize&&d<=vSize){color.a*=1.0-smoothstep(0.95*vSize,vSize,d);}gl_FragColor=color;}",
            defines: e.enablePicked ? ["PICK"] : []
          }, this), this.buffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.indexBuffer = new dt({ gl: t, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" }), e = Float32Array.BYTES_PER_ELEMENT;
          var a = 14 * e;
          e = [{ stride: a, name: "aPos", buffer: this.buffer, size: 3, type: "FLOAT", offset: 0 }, { stride: a, name: "aSize", buffer: this.buffer, size: 1, type: "FLOAT", offset: 3 * e }, { stride: a, name: "aIndex", buffer: this.buffer, size: 1, type: "FLOAT", offset: 4 * e }, {
            stride: a,
            name: "aColor",
            buffer: this.buffer,
            size: 4,
            type: "FLOAT",
            offset: 5 * e
          }, { stride: a, name: "aBorderWidth", buffer: this.buffer, size: 1, type: "FLOAT", offset: 9 * e }, { stride: a, name: "aBorderColor", buffer: this.buffer, size: 4, type: "FLOAT", offset: 10 * e }], e = e.concat(this.getCommonAttributes()), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: e });
        } },
        { key: "onChanged", value: function(t, e) {
          this.gl && e && (this.uniforms = {}, this.data = e, this.processData(), t.enablePicked && this.parsePickData(e));
        } },
        { key: "processData", value: function() {
          var t = this, e = [], a = [];
          this.data.forEach(function(n, s) {
            var o = n.properties || {}, u = function(d) {
              return n[d] || o[d] || t.options[d];
            }, c = u("color"), v = u("size"), l = u("borderWidth");
            u = u("borderColor"), c = t.normizedColor(c), u = t.normizedColor(u);
            for (var f = t.normizedPoint(n.geometry.coordinates), p = 0; 4 > p; p++)
              e.push(f[0], f[1], f[2] || 0, v, p), e.push(c[0], c[1], c[2], c[3]), e.push(l, u[0], u[1], u[2], u[3]);
            c = 4 * s, 0 < s && a.push(c - 1, c), a.push(c, c + 1, c + 2, c + 3);
          }), this.bufferData = e, this.indexData = a, this.buffer.updateData(new Float32Array(e)), this.indexBuffer.updateData(new Uint32Array(a));
        } },
        { key: "parsePickData", value: function(t) {
          var e = [];
          if (this.getOptions().enablePicked) {
            for (var a = 0; a < t.length; a++) {
              var n = this.indexToRgb(a);
              e.push(n[0] / 255, n[1] / 255, n[2] / 255), e.push(n[0] / 255, n[1] / 255, n[2] / 255), e.push(n[0] / 255, n[1] / 255, n[2] / 255), e.push(n[0] / 255, n[1] / 255, n[2] / 255);
            }
            this.pickBuffer.updateData(new Float32Array(e));
          }
        } },
        { key: "render", value: function(t) {
          var e = this.getOptions(), a = this.program, n = t.gl, s = t.matrix;
          this.setGLState({
            blend: !0,
            blendEquation: n.FUNC_ADD,
            blendFunc: ie(n, e.blend || "lighter"),
            depthTest: e.depthTest,
            depthMask: e.depthWrite
          }), a.use(n), this.vertexArray.bind(), this.indexBuffer.bind(), e = this.map.getZoomUnits(), Rt(this.uniforms, this.getCommonUniforms(t), { uZoomUnits: this.options.unit === "px" ? e : 1, uMatrix: s, uAntiAliasing: this.options.antialias ? 1 : 0 }), a.setUniforms(this.uniforms), n.drawElements(n.TRIANGLE_STRIP, this.indexData.length, n.UNSIGNED_INT, 0);
        } }
      ]), i;
    }(jt), Ku = {
      wave: "varying vec4 vPosition;varying float vSize;varying vec4 vFragPosition;varying vec4 vColor;varying float vStartTime;varying float vRadius;uniform mat4 uMatrix;uniform float uTime;uniform float duration;uniform float trail;uniform float uAntiAliasing;varying float vWidth;void main(){float d=distance(vFragPosition.xy,vPosition.xy);if(d>=vRadius){discard;}vec4 color=vColor;float R=vRadius;float center=vSize;float time=vStartTime+uTime;float alpha=sin((R-d)/R*trail*2.0*3.14+time/duration);if(d<=center){if(uAntiAliasing==1.0&&d>0.9*center&&d<=center){if(alpha>=0.5){color.a=0.9;}else{color.a=1.0-smoothstep(0.9*center,center,d);}}}else{if(alpha>=0.5){color.a=0.9;if(uAntiAliasing==1.0){if(alpha>=0.5&&alpha<=0.6){color.a*=smoothstep(0.0,0.1,alpha-0.5);}if(d>=0.98*R&&d<=R){color.a*=1.0-smoothstep(0.98,1.0,d/R);}}}else{color.a=0.0;}}gl_FragColor=color;}",
      bubble: "varying vec4 vPosition;varying float vSize;varying vec4 vFragPosition;varying vec4 vColor;varying float vStartTime;varying float vRadius;uniform mat4 uMatrix;uniform float uTime;uniform float duration;uniform float trail;uniform float uAntiAliasing;varying float vWidth;void main(){float d=distance(vFragPosition.xy,vPosition.xy);if(d>=vRadius){discard;}float time=vStartTime+uTime;float range=mod(time,(duration+trail));float percent=0.0;if(range<=duration){percent=range/duration;}else{percent=1.0;}float center=vSize;float R=vRadius;float r=R*percent;vec4 color=vColor;if(d<=center){if(uAntiAliasing==1.0&&d>0.9*center&&d<=center){color.a=1.0-smoothstep(0.9*center,center,d);}}else{if(d<r){color.a=smoothstep(0.1,0.9,pow(d/r,2.0)*0.9);if(uAntiAliasing==1.0&&d>=0.9*r&&d<=r){color.a*=1.0-smoothstep(0.9,1.0,d/r);}if(range>duration){color.a*=1.0-(range-duration)/trail;}}else{color.a=0.0;}}gl_FragColor=color;}",
      breath: "varying vec4 vPosition;varying vec4 vFragPosition;varying vec4 vColor;varying float vStartTime;varying float vRadius;uniform float uTime;uniform float duration;uniform float trail;uniform float uAntiAliasing;void main(){float d=distance(vFragPosition.xy,vPosition.xy);if(d>=vRadius){discard;}vec4 color=vColor;if(uAntiAliasing==1.0&&d>0.9*vRadius&&d<=vRadius){color.a=1.0-smoothstep(0.9*vRadius,vRadius,d);}float time=vStartTime+uTime;float range=mod(time,(duration+trail));float percent=0.0;if(range<=duration){percent=range/duration;}else{percent=1.0;}color.a*=abs(1.0-percent*2.0)+0.2;gl_FragColor=color;}",
      radar: "varying vec4 vPosition;varying float vSize;varying vec4 vFragPosition;varying vec4 vColor;varying float vStartTime;varying float vRadius;uniform mat4 uMatrix;uniform float uTime;uniform float duration;uniform float trail;uniform float uAntiAliasing;varying float vWidth;void main(){float d=distance(vFragPosition.xy,vPosition.xy);if(d>=vRadius){discard;}float time=vStartTime+uTime;float range=mod(time,duration);float percent=range/duration;float center=vSize;float startDeg=360.0*percent;vec4 color=vColor;float deltaX=vFragPosition.x-vPosition.x;float deltaY=vFragPosition.y-vPosition.y;float currDeg=degrees(atan(deltaX/deltaY));if(deltaX>=0.0&&deltaY<=0.0){currDeg=180.0+currDeg;}if(deltaX<=0.0&&deltaY<=0.0){currDeg=180.0+currDeg;}if(deltaX<=0.0&&deltaY>=0.0){currDeg=360.0+currDeg;}float maxDeg=trail;if(trail<0.0){currDeg=-currDeg;maxDeg=-trail;}float modDeg=mod((currDeg-startDeg),360.0);if(modDeg<maxDeg){color.a=modDeg/maxDeg;}else{color.a=0.0;}if(uAntiAliasing==1.0&&d>0.95*vRadius&&d<=vRadius){color.a=color.a-smoothstep(0.95*vRadius,vRadius,d);}gl_FragColor=color;}"
    }, cd = function(r) {
      function i(t) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t)), t.name = "RippleCircleLayer", t.autoUpdate = !0, t.bufferData = [], t.initializeTime = /* @__PURE__ */ new Date(), t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        var t = 1;
        return this.options.type === "radar" && (t = 120), { depthWrite: !1, depthTest: !0, type: "bubble", size: 10, duration: 1, trail: t, unit: "px", random: !0, color: "blue", antialias: !0, radius: function(e) {
          return 2 * e;
        } };
      } }, { key: "initialize", value: function(t) {
        this.gl = t, this.program = new Ft(
          this.gl,
          {
            vertexShader: `attribute vec3 aPos;attribute float aSize;attribute float aIndex;attribute vec4 aColor;attribute float aStartTime;attribute float aRadius;varying vec4 vColor;varying vec4 vPosition;varying vec4 vFragPosition;varying float vSize;varying float vWidth;varying float vStartTime;varying float vRadius;uniform mat4 uMatrix;uniform float uZoomUnits;uniform vec4 uSelectedColor;void main(){vColor=aColor;vStartTime=aStartTime;vSize=aSize*uZoomUnits;vRadius=aRadius*uZoomUnits;float x=aPos.x;float y=aPos.y;float z=aPos.z*uZoomUnits;float R=vRadius;if(aIndex==1.0){x+=R;y-=R;}else if(aIndex==2.0){x-=R;y+=R;}else if(aIndex==3.0){x+=R;y+=R;}else{x-=R;y-=R;}vPosition=vec4(aPos.xy,z,1.0);vFragPosition=vec4(x,y,z,1.0);gl_Position=uMatrix*vFragPosition;
#if defined(PICK)
if(mapvIsPicked()){vColor=uSelectedColor;}
#endif
}`,
            fragmentShader: Ku[this.options.type] || "bubble",
            defines: this.options.enablePicked ? ["PICK"] : []
          },
          this
        ), this.buffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.indexBuffer = new dt({ gl: t, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" });
        var e = [{ stride: 44, name: "aPos", buffer: this.buffer, size: 3, type: "FLOAT", offset: 0 }, { stride: 44, name: "aSize", buffer: this.buffer, size: 1, type: "FLOAT", offset: 12 }, { stride: 44, name: "aIndex", buffer: this.buffer, size: 1, type: "FLOAT", offset: 16 }, {
          stride: 44,
          name: "aColor",
          buffer: this.buffer,
          size: 4,
          type: "FLOAT",
          offset: 20
        }, { stride: 44, name: "aRadius", buffer: this.buffer, size: 1, type: "FLOAT", offset: 36 }, { stride: 44, name: "aStartTime", buffer: this.buffer, size: 1, type: "FLOAT", offset: 40 }];
        e = e.concat(this.getCommonAttributes()), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: e });
      } }, { key: "onChanged", value: function(t, e) {
        this.gl && e && (this.uniforms = { duration: t.duration, trail: t.trail }, this.data = e, this.processData(), t.enablePicked && this.parsePickData(e));
      } }, {
        key: "processData",
        value: function() {
          var t = this, e = [], a = [];
          this.data.forEach(function(n, s) {
            var o = n.size || t.options.size, u = n.radius || t.options.radius || 1.618 * o;
            typeof u == "function" && (u = u(o));
            var c = n.color || t.options.color;
            c = t.normizedColor(c), n = t.normizedPoint(n.geometry.coordinates);
            for (var v = t.options.random ? Math.random() * t.data.length * 9999 : 0, l = 0; 4 > l; l++)
              e.push(n[0], n[1], n[2] || 0, o, l), e.push(c[0], c[1], c[2], c[3]), e.push(u), e.push(v);
            o = 4 * s, 0 < s && a.push(o - 1, o), a.push(o, o + 1, o + 2, o + 3);
          }), this.bufferData = e, this.indexData = a, this.buffer.updateData(new Float32Array(e)), this.indexBuffer.updateData(new Uint32Array(a));
        }
      }, { key: "parsePickData", value: function(t) {
        var e = [];
        if (this.getOptions().enablePicked) {
          for (var a = 0; a < t.length; a++) {
            var n = this.indexToRgb(a);
            e.push(n[0] / 255, n[1] / 255, n[2] / 255), e.push(n[0] / 255, n[1] / 255, n[2] / 255), e.push(n[0] / 255, n[1] / 255, n[2] / 255), e.push(n[0] / 255, n[1] / 255, n[2] / 255);
          }
          this.pickBuffer.updateData(new Float32Array(e));
        }
      } }, { key: "render", value: function(t) {
        var e = this.getOptions(), a = this.program, n = t.gl, s = t.matrix;
        a.use(n);
        var o = this.map.getZoomUnits();
        Rt(this.uniforms, this.getCommonUniforms(t), { uTime: (/* @__PURE__ */ new Date() - this.initializeTime) / 1e3, uZoomUnits: e.unit === "m" ? 1 : o, uMatrix: s, uAntiAliasing: e.antialias ? 1 : 0 }), a.setUniforms(this.uniforms), this.setGLState({ blend: !0, blendEquation: n.FUNC_ADD, blendFunc: [n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA], depthTest: e.depthTest, depthMask: e.depthWrite }), 0 < this.indexData.length && (this.vertexArray.bind(), this.indexBuffer.bind(), n.drawElements(n.TRIANGLE_STRIP, this.indexData.length, n.UNSIGNED_INT, 0));
      } }]), i;
    }(jt), dd = de(Ku), pd = S(function(r, i) {
      i.__esModule = !0;
      var t = bi && bi.__esModule ? bi : { default: bi }, e = ji && ji.__esModule ? ji : { default: ji };
      i.default = function a(n, s, o) {
        n === null && (n = Function.prototype);
        var u = (0, e.default)(n, s);
        if (u === void 0) {
          if (n = (0, t.default)(n), n !== null)
            return a(n, s, o);
        } else
          return "value" in u ? u.value : (s = u.get, s === void 0 ? void 0 : s.call(o));
      };
    }), ur = L(pd);
    le.deviation = function(r, i, t, e) {
      var a = i && i.length, n = Math.abs(Ao(r, 0, a ? i[0] * t : r.length, t));
      if (a) {
        a = 0;
        for (var s = i.length; a < s; a++)
          n -= Math.abs(Ao(r, i[a] * t, a < s - 1 ? i[a + 1] * t : r.length, t));
      }
      for (a = i = 0; a < e.length; a += 3) {
        s = e[a] * t;
        var o = e[a + 1] * t, u = e[a + 2] * t;
        i += Math.abs((r[s] - r[u]) * (r[o + 1] - r[s + 1]) - (r[s] - r[o]) * (r[u + 1] - r[s + 1]));
      }
      return n === 0 && i === 0 ? 0 : Math.abs((i - n) / n);
    }, le.flatten = function(r) {
      for (var i = r[0][0].length, t = { vertices: [], holes: [], dimensions: i }, e = 0, a = 0; a < r.length; a++) {
        for (var n = 0; n < r[a].length; n++)
          for (var s = 0; s < i; s++)
            t.vertices.push(r[a][n][s]);
        0 < a && (e += r[a - 1].length, t.holes.push(e));
      }
      return t;
    }, le.default = le;
    var qu = typeof Js > "u" ? "__target" : Js(), vd = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, Kn = window.URL || window.webkitURL, hi = window.Worker;
    if (hi) {
      var $u = ds("self.onmessage = function () {}"), tl = new Uint8Array(1);
      try {
        if (/(?:Trident|Edge)\/(?:[567]|12)/i.test(navigator.userAgent))
          throw Error("Not available");
        var fa = new hi($u);
        fa.postMessage(tl, [tl.buffer]);
      } catch {
        hi = null;
      } finally {
        Kn.revokeObjectURL($u), fa && fa.terminate();
      }
    }
    var gd = new function(r, i) {
      return function(t) {
        var e = this;
        if (i) {
          if (hi && !t)
            return t = ("" + i).replace(
              /^function.+?{/,
              ""
            ).slice(0, -1), t = ds(t), this[qu] = new hi(t), Kn.revokeObjectURL(t), this[qu];
          var a = { postMessage: function(n) {
            e.onmessage && setTimeout(function() {
              return e.onmessage({ data: n, target: a });
            });
          } };
          i.call(a), this.postMessage = function(n) {
            setTimeout(function() {
              return a.onmessage({ data: n, target: e });
            });
          }, this.isThisThread = !0;
        } else
          return new hi(r);
      };
    }("./worker.js", function(r, i) {
    }), el = { window: 1, windowAnimation: 2, gradual: 3, ripple: 4, water: 6, repeat: 7 }, qn = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(
          this,
          t,
          e
        )), t.name = "ShapeLayer", t._isShow = !0, e = t.getOptions(), (e.style === "windowAnimation" || e.style === "ripple" || 0 < e.riseTime) && (t.autoUpdate = !0), t.selectedColor = [-1, -1, -1], t.textureCache = {}, t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return { color: "rgba(50, 50, 230, 1.0)", opacity: 0.8, height: 0, isTextureFull: !1, topColor: "rgba(76, 76, 76, 0.8)", textureRotate: 0, textureScale: 1, useLight: !0, useTopColor: !1, riseTime: 0, polygonOffset: [0, 0], depthTest: !0, zIndex: 0, zFightFactor: 0 };
      } }, { key: "initialize", value: function(t) {
        this.gl = t;
        var e = this.getOptions();
        this.dataMgr = new Hr(this, this.gl), this.texture = null, this.isUseTexture = !1;
        var a = [];
        e.enablePicked && a.push("PICK"), e.texture && a.push("USE_TEXTURE"), this.program = new Ft(this.gl, {
          vertexShader: `precision highp float;uniform vec4 uSelectedColor;attribute vec4 a_pos;attribute vec3 a_normal;attribute vec4 a_color;attribute vec4 a_pre_color;attribute float a_height;attribute float a_pre_height;attribute float a_block_index;
#if defined(USE_TEXTURE)
attribute vec2 a_texture_coord;
#endif
uniform mat4 u_proj_matrix;uniform mat4 u_mv_matrix;uniform mat4 u_normal_matrix;uniform vec3 u_side_light_dir;uniform bool u_use_lighting;uniform bool u_use_texture;uniform vec3 u_ripple_center;uniform float u_radius;uniform float style;uniform float alpha;uniform float time;uniform float dataTime;uniform float riseTime;uniform vec2 uMapCenter;uniform float uMapZoom;uniform float u_zIndex;uniform float u_zFightFactor;varying float v_height;varying vec4 v_color;varying vec3 v_position;varying vec2 v_texture_coord;const vec3 point_color=vec3(0.06,0.06,0.06);const vec3 light_color=vec3(0.53,0.53,0.53);const vec3 light_color_2=vec3(0.4,0.4,0.4);const vec3 uAmbientColor=vec3(0.8,0.8,0.8);const vec3 uLightingDirection=vec3(0.0,1.0,1.0);const vec3 uDirectionalColor=vec3(1.0,1.0,1.0);float getTransitionValue(float pre_value,float to_value,float dataTime,float riseTime){float result=0.0;if(pre_value==to_value){result=to_value;}else{if(riseTime>0.0&&dataTime<riseTime){result=(pre_value+(to_value-pre_value)*(dataTime/riseTime));}else{result=to_value;}}return result;}void main(){vec4 pos=a_pos;pos.z=pos.z+pos.w*getTransitionValue(a_pre_height,a_height,dataTime,riseTime);v_position=pos.xyz;v_height=a_height;
#if defined(USE_TEXTURE)
if(u_use_texture){v_texture_coord=a_texture_coord;}
#endif
pos.z+=u_zIndex;vec4 position=u_proj_matrix*u_mv_matrix*vec4(pos.xyz,1.0);gl_Position=position;if(u_zFightFactor>0.){float v_z_offset=-a_block_index/u_zFightFactor;gl_Position.z=gl_Position.z+v_z_offset;}vec4 icolor=a_color;
#if defined(PICK)
if(mapvIsPicked()){icolor=uSelectedColor;}
#endif
if(u_use_lighting){vec3 N=normalize(vec3(u_normal_matrix*vec4(a_normal,1.0)));vec4 point_dir=u_mv_matrix*vec4(0,1,0,0);vec3 L_point=normalize(point_dir.xyz);float lambert_point=max(0.0,dot(N,-L_point));vec4 light_dir=u_mv_matrix*vec4(u_side_light_dir,0);vec3 L=normalize(light_dir.xyz);float lambert=max(0.0,dot(N,-L));if(pos.z<5.0){float deepGradientColor=(5.0-pos.z)/8.0;lambert=lambert-deepGradientColor;}vec4 light_dir_2=u_mv_matrix*vec4(0,0,-1,0);vec3 L2=normalize(light_dir_2.xyz);float lambert_2=max(0.0,dot(N,-L2));if(a_pre_color.r==a_color.r&&a_pre_color.g==a_color.g&&a_pre_color.b==a_color.b){}else{if(riseTime>0.0&&dataTime<riseTime){icolor.r=a_pre_color.r+(a_color.r-a_pre_color.r)*(dataTime/riseTime);icolor.g=a_pre_color.g+(a_color.g-a_pre_color.g)*(dataTime/riseTime);icolor.b=a_pre_color.b+(a_color.b-a_pre_color.b)*(dataTime/riseTime);}}v_color.rgb=icolor.rgb+icolor.rgb*light_color*lambert+icolor.rgb*light_color_2*lambert_2+icolor.rgb*point_color*lambert_point;v_color.a=icolor.a;if(u_use_texture){mat3 normalMatrix=mat3(u_normal_matrix);vec3 transformedNormal=normalMatrix*a_normal;vec3 dir=uLightingDirection;dir=vec3(normalMatrix*vec3(0.0,-1.0,2.0));float directionalLightWeighting=max(dot(normalize(transformedNormal),normalize(dir)),0.0);vec4 vLightWeighting;vLightWeighting=vec4(uAmbientColor+uDirectionalColor*directionalLightWeighting,1.0);v_color=vLightWeighting;}}else{v_color=icolor;}}`,
          fragmentShader: "precision highp float;varying vec4 v_color;varying vec3 v_position;varying float v_height;varying vec2 v_texture_coord;uniform vec3 u_ripple_center;uniform vec4 top_color;uniform float u_zoom_units;uniform float u_radius;uniform float style;uniform float alpha;uniform float time;uniform sampler2D u_sampler;uniform bool u_use_lighting;uniform bool u_use_texture;uniform bool u_use_top_color;void main(){vec4 color=vec4(v_color);vec4 textureColor=vec4(1.0,1.0,1.0,1.0);if(u_use_texture){if(style==6.0){float x=v_texture_coord.s;float y=v_texture_coord.t;vec2 cPos=-1.0+2.0*gl_FragCoord.xy/MAPV_resolution;float cLength=length(cPos);vec2 uv=gl_FragCoord.xy/MAPV_resolution+(cPos/cLength)*cos(cLength*12.0-time/1000.0*4.0)*0.03;textureColor=texture2D(u_sampler,uv/2.0+vec2(x,y));}else if(style==7.0){float tWidth=1.*u_zoom_units;float deltaX=mod(v_texture_coord.x,tWidth);float deltaY=mod(v_texture_coord.y,tWidth);if(deltaX>=0.&&deltaX<=tWidth){vec2 uv=vec2(deltaX,deltaY)/tWidth;vec4 texture=texture2D(u_sampler,uv);textureColor=texture.a>=0.1 ? texture : vec4(0.,0.,0.,0.);}}else{textureColor=texture2D(u_sampler,vec2(v_texture_coord.s,v_texture_coord.t));}if(u_use_lighting){color=vec4(textureColor*v_color*1.1);}else{color=textureColor;}}if(u_use_top_color&&v_position.z>=v_height){color=top_color;}if(style==1.0||style==2.0){float t=time/1000.0;float diffDistance=5.0;float modX=mod(v_position.x,diffDistance*2.0);float modZ=mod(v_position.z,diffDistance*2.0);if(modX<diffDistance&&modZ<diffDistance&&v_position.z<v_height){color*=1.05;if(time>0.0&&style==2.0){float iX=ceil(v_position.x/diffDistance);float iZ=ceil(v_position.z/diffDistance);float timeDistance=8.0;t+=tan(sin(iZ));color*=(1.0+mod(t,timeDistance)/timeDistance);}}color.a=alpha;}else if(style==5.0){float t=time/1000.0;float diffDistance=10.0;float modZ=mod(v_position.z-t*40.0,diffDistance*2.0);color.a=1.0-pow(v_position.z/v_height,0.5);if(v_position.z/v_height<0.3){color.r+=0.2;color.g+=0.2;color.b+=0.2;}if(modZ<diffDistance*2.0-4.0){discard;}}else if(style==3.0){float diffDistance=10.0;float modX=mod(v_position.x,diffDistance*2.0);color.a=1.0-pow(v_position.z/v_height,0.3);}else if(style==4.0){float dis=distance(u_ripple_center,v_position);float rSize=400.0;if(v_position.z>=v_height){color=top_color;}if(dis>u_radius-rSize&&dis<u_radius+rSize){color*=(1.0-abs(dis-u_radius)/rSize)*2.0+1.0;}}else if(style==6.0){}gl_FragColor=color;}",
          defines: a
        }, this), this.vertexBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.colorBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.heightBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.textureBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.indexBuffer = new dt({ gl: t, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" }), a = [{ name: "a_pos", buffer: this.vertexBuffer, stride: 28, size: 4, type: "FLOAT", offset: 0 }, {
          name: "a_normal",
          buffer: this.vertexBuffer,
          size: 3,
          stride: 28,
          type: "FLOAT",
          offset: 16
        }, { name: "a_color", buffer: this.colorBuffer, size: 4, stride: 32, type: "FLOAT", offset: 0 }, { name: "a_pre_color", buffer: this.colorBuffer, size: 4, stride: 32, type: "FLOAT", offset: 16 }, { name: "a_height", buffer: this.heightBuffer, size: 1, stride: 12, type: "FLOAT", offset: 0 }, { name: "a_pre_height", buffer: this.heightBuffer, size: 1, stride: 12, type: "FLOAT", offset: 4 }, { name: "a_block_index", buffer: this.heightBuffer, size: 1, stride: 12, type: "FLOAT", offset: 8 }], e.texture && a.push({
          name: "a_texture_coord",
          buffer: this.textureBuffer,
          size: 2,
          stride: 8,
          type: "FLOAT",
          offset: 0
        }), a = a.concat(this.getCommonAttributes()), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: a }), this.initializeTime = /* @__PURE__ */ new Date(), this.normalMatrix = pt.create();
      } }, { key: "onDestroy", value: function() {
      } }, { key: "onChanged", value: function(t, e) {
        var a = this;
        this.gl && (this.loadTextureTime && clearTimeout(this.loadTextureTime), this.loadTextureTime = setTimeout(
          function() {
            a.loadTexture(function() {
              a.dataMgr.parseData(e), a.dataTime = /* @__PURE__ */ new Date(), a.webglLayer.render();
            });
          },
          0
        ));
      } }, { key: "render", value: function(t) {
        var e = t.gl, a = t.projectionMatrix, n = t.viewMatrix;
        if (this._isShow) {
          var s = this.getData();
          if (s && !(0 >= s.length)) {
            s = this.getOptions();
            var o = this.program;
            if (o.use(e), !s.texture || this.texture) {
              var u = 0;
              s.style && el[s.style] && (u = el[s.style]);
              var c = [e.ONE, e.ZERO];
              if (s.blend && (c = ie(e, s.blend)), (s.height === 0 || s.style === "gradual") && (c = [e.ONE, e.ONE_MINUS_SRC_ALPHA]), this.setGLState({
                cullFace: !1,
                blend: !0,
                blendEquation: e.FUNC_ADD,
                blendFunc: c,
                polygonOffset: s.polygonOffset,
                depthTest: s.depthTest,
                depthMask: s.style !== "gradual"
              }), c = this.normizedColor(s.topColor), s.style === "ripple" && s.rippleLayer && s.rippleLayer.data && s.rippleLayer.data[0]) {
                var v = this.normizedPoint(s.rippleLayer.data[0].geometry.coordinates);
                o.setUniforms({ u_ripple_center: [v[0], v[1], 0], u_radius: s.rippleLayer.options.size * s.rippleLayer.currentScale });
              }
              v = Mt.fromValues(0, -1, 2), s.lightDir && (v = Mt.fromValues(s.lightDir[0], s.lightDir[1], s.lightDir[2]));
              var l = this.normalMatrix;
              pt.invert(l, n), pt.transpose(l, l), o.setUniforms(Rt(
                this.getCommonUniforms(t),
                { u_normal_matrix: l, u_sampler: this.texture, u_proj_matrix: a, u_mv_matrix: n, u_zoom_units: this.map.getZoomUnits(), style: u, u_use_top_color: s.useTopColor, top_color: c, u_use_lighting: s.useLight, u_use_texture: this.isUseTexture, alpha: s.opacity === void 0 ? 0.8 : parseFloat(s.opacity), time: /* @__PURE__ */ new Date() - this.initializeTime, dataTime: /* @__PURE__ */ new Date() - this.dataTime, riseTime: s.riseTime, u_side_light_dir: v, u_zIndex: s.zIndex, u_zFightFactor: s.zFightFactor }
              )), t = this.dataMgr.getData(), 0 < t.vertex.length && (this.vertexArray.bind(), this.indexBuffer.bind(), e.drawElements(e.TRIANGLES, t.index.length, e.UNSIGNED_INT, 0));
            }
          }
        } else
          this.webglLayer.clear();
      } }, { key: "loadTexture", value: function(t) {
        var e = this, a = this.getOptions();
        a.texture ? (this.isUseTexture = !0, Ot(this.gl, a.texture, function(n, s) {
          e.image = s, e.texture = n, t && t(), e.webglLayer.render();
        })) : (this.isUseTexture = !1, this.image = this.texture = null, t && t());
      } }]), i;
    }(jt);
    Hr.prototype.initData = function() {
      this.outBuilding3d = { pickColorVertex: [], vertex: [], texture: [], color: [], height: [], index: [] };
    }, Hr.prototype.getData = function() {
      return this.outBuilding3d;
    }, Hr.prototype.initWorker = function() {
      this.worker = new gd(), this.worker.onmessage = function(r) {
      };
    }, Hr.prototype.parseData = function(r) {
      var i = this;
      this.initData();
      for (var t = this.shapeLayer.getOptions(), e = 0; e < r.length; e++) {
        var a = r[e], n = a.height || t.height;
        "properties" in a && "height" in a.properties && (n = a.properties.height), n *= 1;
        var s = a.color || t.color;
        "properties" in a && "color" in a.properties && (s = a.properties.color), "properties" in a && "fillColor" in a.properties && (s = a.properties.fillColor), Object.prototype.toString.call(s) === "[object Function]" && (s = s(a)), s = this.shapeLayer.normizedColor(s);
        var o = this.shapeLayer.getProperty("angle", t.textureRotate, a), u = void 0;
        t.enablePicked && (u = this.shapeLayer.indexToRgb(e));
        var c = void 0, v = void 0;
        if (t.riseTime && (v = a.preColor, "properties" in a && "preColor" in a.properties && (v = a.properties.preColor), c = a.preHeight, "properties" in a && "preHeight" in a.properties && (c = a.properties.preHeight), c === void 0 && (c = 0)), a.geometry.coordinates) {
          if (a.geometry.type === "LineString") {
            var l = a.geometry.coordinates.map(function(_) {
              return i.shapeLayer.normizedPoint(_);
            }), f = le.flatten([l]);
            l = f.vertices, f = f.holes;
            for (var p = [], d = [], g = 0; g < l.length; g += 3)
              p.push(l[g + 0], l[g + 1]), d.push(l[g + 2]);
            this.parseBuilding3d(this.outBuilding3d, p, d, c, n, v, s, u, o, f, e);
          }
          if (a.geometry.type === "MultiPolygon") {
            for (l = a.geometry.coordinates, a = [], f = 0; f < l.length; f++)
              a.push(l[f].map(function(_) {
                return _.map(function(M) {
                  return i.shapeLayer.normizedPoint(M);
                });
              }));
            for (l = 0; l < a.length; l++) {
              f = [], p = [], g = le.flatten(a[l]), d = g.vertices, g = g.holes;
              for (var A = 0; A < d.length; A += 3)
                f.push(d[A + 0], d[A + 1]), p.push(d[A + 2]);
              this.parseBuilding3d(this.outBuilding3d, f, p, c, n, v, s, u, o, g, e);
            }
          } else {
            for (l = [], f = 0; f < a.geometry.coordinates.length; f++)
              l.push(a.geometry.coordinates[f].map(function(_) {
                return i.shapeLayer.normizedPoint(_);
              }));
            for (l = le.flatten(l), a = l.vertices, l = l.holes, f = [], p = [], d = 0; d < a.length; d += 3)
              f.push(a[d + 0], a[d + 1]), p.push(a[d + 2]);
            this.parseBuilding3d(this.outBuilding3d, f, p, c, n, v, s, u, o, l, e);
          }
        }
      }
      this.shapeLayer.vertexBuffer.updateData(new Float32Array(this.outBuilding3d.vertex)), this.shapeLayer.colorBuffer.updateData(new Float32Array(this.outBuilding3d.color)), this.shapeLayer.heightBuffer.updateData(new Float32Array(this.outBuilding3d.height)), this.shapeLayer.textureBuffer.updateData(new Float32Array(this.outBuilding3d.texture)), this.shapeLayer.indexBuffer.updateData(new Uint32Array(this.outBuilding3d.index)), t.enablePicked && this.shapeLayer.pickBuffer.updateData(new Float32Array(this.outBuilding3d.pickColorVertex));
    }, Hr.prototype.getBounds = function(r, i) {
      for (var t = r[0], e = r[1], a = r[0], n = r[1], s = 0; s < r.length; s += 2)
        t = Math.min(r[s], t), e = Math.min(r[s + 1], e), a = Math.max(r[s], a), n = Math.max(r[s + 1], n);
      if (s = [(a - t) / 2 + t, (n - e) / 2 + e], i === 0 || !i)
        return { minX: t, minY: e, maxX: a, maxY: n, width: a - t, height: n - e, center: s };
      for (t = r.slice(0), e = 0; e < t.length; e += 2)
        a = ps(r[e], r[e + 1], s, i), t[e] = a[0], t[e + 1] = a[1];
      return this.getBounds(t, 0);
    }, Hr.prototype.parseBuilding3d = function(r, i, t, e, a, n, s, o, u, c, v) {
      e === void 0 && (e = a);
      var l = this.shapeLayer.options, f = r.vertex, p = r.texture, d = r.color, g = r.height, A = r.pickColorVertex;
      r = r.index, n === void 0 && (n = s);
      var _ = 0, M = 0;
      if (this.shapeLayer.image && (_ = this.shapeLayer.image.width * l.textureScale, M = this.shapeLayer.image.height * l.textureScale), l.style !== "gradual") {
        c = c && c.length ? le(i, c, 2) : le(i);
        var P = c[0], R = c[1], B = c[2];
        P = [i[2 * P], i[2 * P + 1], 1], R = [i[2 * R], i[2 * R + 1], 1];
        var F = [i[2 * B], i[2 * B + 1], 1];
        B = [], Mt.cross(B, [F[0] - R[0], F[1] - R[1], F[2] - R[2]], [P[0] - R[0], P[1] - R[1], P[2] - R[2]]), R = f.length / 7;
        var I;
        l.texture && (I = this.getBounds(i, u)), P = l.isTextureFull, F = 0;
        for (var U = i.length; F < U; F += 2) {
          if (f.push(i[F], i[F + 1], t[F / 2], 1, B[0], B[1], B[2]), d.push(s[0], s[1], s[2], s[3], n[0], n[1], n[2], n[3]), g.push(a, e, v), l.texture) {
            var G = ps(i[F], i[F + 1], I.center, u), Z = Vt(G, 2);
            G = Z[0], Z = Z[1], P ? (G = (G - I.minX) / I.width, Z = (Z - I.minY) / I.height) : (G = (G - I.minX) / _, Z = (Z - I.minY) / M), p.push(G, Z);
          }
          o && A.push(o[0] / 255, o[1] / 255, o[2] / 255);
        }
        for (u = 0, I = c.length; u < I; u++)
          r.push(c[u] + R);
      }
      if (!(a === e && 0 >= a))
        for (u = 0, c = i.length; u < c; u += 2)
          I = f.length / 7, U = i[u], G = i[u + 1], B = [U, G, t[u / 2], 0], R = [U, G, t[u / 2], 1], F = u + 2, Z = u + 3, u === c - 2 && (F = 0, Z = 1), F = i[F], Z = i[Z], U = Math.sqrt(Math.pow(F - U, 2), Math.pow(Z - G, 2)), G = [F, Z, t[u / 2], 0], F = [F, Z, t[u / 2], 1], Z = [], Mt.cross(Z, [G[0] - B[0], G[1] - B[1], G[2] - B[2]], [R[0] - B[0], R[1] - B[1], R[2] - B[2]]), f.push(B[0], B[1], B[2], B[3]), f.push(Z[0], Z[1], Z[2]), f.push(R[0], R[1], R[2], R[3]), f.push(Z[0], Z[1], Z[2]), f.push(G[0], G[1], G[2], G[3]), f.push(Z[0], Z[1], Z[2]), f.push(F[0], F[1], F[2], F[3]), f.push(Z[0], Z[1], Z[2]), d.push(s[0], s[1], s[2], s[3]), d.push(n[0], n[1], n[2], n[3]), d.push(s[0], s[1], s[2], s[3]), d.push(n[0], n[1], n[2], n[3]), d.push(s[0], s[1], s[2], s[3]), d.push(
            n[0],
            n[1],
            n[2],
            n[3]
          ), d.push(s[0], s[1], s[2], s[3]), d.push(n[0], n[1], n[2], n[3]), g.push(a), g.push(e), g.push(v), g.push(a), g.push(e), g.push(v), g.push(a), g.push(e), g.push(v), g.push(a), g.push(e), g.push(v), l.texture && (P ? (p.push(0, 0), p.push(0, 1), p.push(1, 0), p.push(1, 1)) : (p.push(0, 0), p.push(0, a / M), p.push(U / _, 0), p.push(U / _, a / M))), o && (A.push(o[0] / 255, o[1] / 255, o[2] / 255), A.push(o[0] / 255, o[1] / 255, o[2] / 255), A.push(o[0] / 255, o[1] / 255, o[2] / 255), A.push(o[0] / 255, o[1] / 255, o[2] / 255)), r.push(I, I + 2, I + 3, I, I + 3, I + 1);
    };
    var ci = S(function(r, i) {
      (function(t, e) {
        r.exports = e();
      })(_s, function() {
        function t(_, M, P, R, B) {
          for (; R > P; ) {
            if (600 < R - P) {
              var F = R - P + 1, I = M - P + 1, U = Math.log(F), G = 0.5 * Math.exp(2 * U / 3);
              U = 0.5 * Math.sqrt(U * G * (F - G) / F) * (0 > I - F / 2 ? -1 : 1), t(_, M, Math.max(P, Math.floor(M - I * G / F + U)), Math.min(R, Math.floor(M + (F - I) * G / F + U)), B);
            }
            for (F = _[M], I = P, G = R, e(_, P, M), 0 < B(_[R], F) && e(_, P, R); I < G; ) {
              for (e(_, I, G), I++, G--; 0 > B(_[I], F); )
                I++;
              for (; 0 < B(_[G], F); )
                G--;
            }
            B(_[P], F) === 0 ? e(_, P, G) : (G++, e(_, G, R)), G <= M && (P = G + 1), M <= G && (R = G - 1);
          }
        }
        function e(_, M, P) {
          var R = _[M];
          _[M] = _[P], _[P] = R;
        }
        function a(_, M) {
          return _ < M ? -1 : _ > M ? 1 : 0;
        }
        function n(_, M) {
          s(_, 0, _.children.length, M, _);
        }
        function s(_, M, P, R, B) {
          for (B || (B = d(null)), B.minX = 1 / 0, B.minY = 1 / 0, B.maxX = -1 / 0, B.maxY = -1 / 0; M < P; M++) {
            var F = _.children[M];
            o(B, _.leaf ? R(F) : F);
          }
          return B;
        }
        function o(_, M) {
          return _.minX = Math.min(_.minX, M.minX), _.minY = Math.min(_.minY, M.minY), _.maxX = Math.max(_.maxX, M.maxX), _.maxY = Math.max(_.maxY, M.maxY), _;
        }
        function u(_, M) {
          return _.minX - M.minX;
        }
        function c(_, M) {
          return _.minY - M.minY;
        }
        function v(_) {
          return (_.maxX - _.minX) * (_.maxY - _.minY);
        }
        function l(_) {
          return _.maxX - _.minX + (_.maxY - _.minY);
        }
        function f(_, M) {
          return _.minX <= M.minX && _.minY <= M.minY && M.maxX <= _.maxX && M.maxY <= _.maxY;
        }
        function p(_, M) {
          return M.minX <= _.maxX && M.minY <= _.maxY && M.maxX >= _.minX && M.maxY >= _.minY;
        }
        function d(_) {
          return { children: _, height: 1, leaf: !0, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
        }
        function g(_, M, P, R, B) {
          for (var F = [M, P]; F.length; )
            if (P = F.pop(), M = F.pop(), !(P - M <= R)) {
              var I = M + Math.ceil((P - M) / R / 2) * R;
              t(_, I, M || 0, P || _.length - 1, B || a), F.push(M, I, I, P);
            }
        }
        var A = function(_) {
          _ === void 0 && (_ = 9), this._maxEntries = Math.max(4, _), this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries)), this.clear();
        };
        return A.prototype.all = function() {
          return this._all(this.data, []);
        }, A.prototype.search = function(_) {
          var M = this.data, P = [];
          if (!p(_, M))
            return P;
          for (var R = this.toBBox, B = []; M; ) {
            for (var F = 0; F < M.children.length; F++) {
              var I = M.children[F], U = M.leaf ? R(I) : I;
              p(_, U) && (M.leaf ? P.push(I) : f(_, U) ? this._all(I, P) : B.push(I));
            }
            M = B.pop();
          }
          return P;
        }, A.prototype.collides = function(_) {
          var M = this.data;
          if (!p(_, M))
            return !1;
          for (var P = []; M; ) {
            for (var R = 0; R < M.children.length; R++) {
              var B = M.children[R], F = M.leaf ? this.toBBox(B) : B;
              if (p(_, F)) {
                if (M.leaf || f(_, F))
                  return !0;
                P.push(B);
              }
            }
            M = P.pop();
          }
          return !1;
        }, A.prototype.load = function(_) {
          if (!_ || !_.length)
            return this;
          if (_.length < this._minEntries) {
            for (var M = 0; M < _.length; M++)
              this.insert(_[M]);
            return this;
          }
          return _ = this._build(_.slice(), 0, _.length - 1, 0), this.data.children.length ? this.data.height === _.height ? this._splitRoot(this.data, _) : (this.data.height < _.height && (M = this.data, this.data = _, _ = M), this._insert(_, this.data.height - _.height - 1, !0)) : this.data = _, this;
        }, A.prototype.insert = function(_) {
          return _ && this._insert(_, this.data.height - 1), this;
        }, A.prototype.clear = function() {
          return this.data = d([]), this;
        }, A.prototype.remove = function(_, M) {
          if (!_)
            return this;
          for (var P = this.data, R = this.toBBox(_), B = [], F = [], I, U, G; P || B.length; ) {
            if (P || (P = B.pop(), U = B[B.length - 1], I = F.pop(), G = !0), P.leaf) {
              t: {
                var Z = _, Q = P.children, it = M;
                if (it) {
                  for (var et = 0; et < Q.length; et++)
                    if (it(Z, Q[et])) {
                      Z = et;
                      break t;
                    }
                  Z = -1;
                } else
                  Z = Q.indexOf(Z);
              }
              if (Z !== -1) {
                P.children.splice(Z, 1), B.push(P), this._condense(B);
                break;
              }
            }
            G || P.leaf || !f(P, R) ? U ? (I++, P = U.children[I], G = !1) : P = null : (B.push(P), F.push(I), I = 0, U = P, P = P.children[0]);
          }
          return this;
        }, A.prototype.toBBox = function(_) {
          return _;
        }, A.prototype.compareMinX = function(_, M) {
          return _.minX - M.minX;
        }, A.prototype.compareMinY = function(_, M) {
          return _.minY - M.minY;
        }, A.prototype.toJSON = function() {
          return this.data;
        }, A.prototype.fromJSON = function(_) {
          return this.data = _, this;
        }, A.prototype._all = function(_, M) {
          for (var P = []; _; )
            _.leaf ? M.push.apply(M, _.children) : P.push.apply(
              P,
              _.children
            ), _ = P.pop();
          return M;
        }, A.prototype._build = function(_, M, P, R) {
          var B = P - M + 1, F = this._maxEntries;
          if (B <= F) {
            var I = d(_.slice(M, P + 1));
            return n(I, this.toBBox), I;
          }
          for (R || (R = Math.ceil(Math.log(B) / Math.log(F)), F = Math.ceil(B / Math.pow(F, R - 1))), I = d([]), I.leaf = !1, I.height = R, B = Math.ceil(B / F), F = B * Math.ceil(Math.sqrt(F)), g(_, M, P, F, this.compareMinX); M <= P; M += F) {
            var U = Math.min(M + F - 1, P);
            g(_, M, U, B, this.compareMinY);
            for (var G = M; G <= U; G += B)
              I.children.push(this._build(_, G, Math.min(G + B - 1, U), R - 1));
          }
          return n(I, this.toBBox), I;
        }, A.prototype._chooseSubtree = function(_, M, P, R) {
          for (; R.push(M), !(M.leaf || R.length - 1 === P); ) {
            for (var B = 1 / 0, F = 1 / 0, I = void 0, U = 0; U < M.children.length; U++) {
              var G = M.children[U], Z = v(G), Q = (Math.max(G.maxX, _.maxX) - Math.min(G.minX, _.minX)) * (Math.max(G.maxY, _.maxY) - Math.min(G.minY, _.minY)) - Z;
              Q < F ? (F = Q, B = Z < B ? Z : B, I = G) : Q === F && Z < B && (B = Z, I = G);
            }
            M = I || M.children[0];
          }
          return M;
        }, A.prototype._insert = function(_, M, P) {
          P = P ? _ : this.toBBox(_);
          var R = [], B = this._chooseSubtree(P, this.data, M, R);
          for (B.children.push(_), o(
            B,
            P
          ); 0 <= M && R[M].children.length > this._maxEntries; )
            this._split(R, M), M--;
          this._adjustParentBBoxes(P, R, M);
        }, A.prototype._split = function(_, M) {
          var P = _[M], R = P.children.length, B = this._minEntries;
          this._chooseSplitAxis(P, B, R), R = this._chooseSplitIndex(P, B, R), R = d(P.children.splice(R, P.children.length - R)), R.height = P.height, R.leaf = P.leaf, n(P, this.toBBox), n(R, this.toBBox), M ? _[M - 1].children.push(R) : this._splitRoot(P, R);
        }, A.prototype._splitRoot = function(_, M) {
          this.data = d([_, M]), this.data.height = _.height + 1, this.data.leaf = !1, n(this.data, this.toBBox);
        }, A.prototype._chooseSplitIndex = function(_, M, P) {
          for (var R, B = 1 / 0, F = 1 / 0, I = M; I <= P - M; I++) {
            var U = s(_, 0, I, this.toBBox), G = s(_, I, P, this.toBBox), Z = Math.max(0, Math.min(U.maxX, G.maxX) - Math.max(U.minX, G.minX)) * Math.max(0, Math.min(U.maxY, G.maxY) - Math.max(U.minY, G.minY));
            U = v(U) + v(G), Z < B ? (B = Z, R = I, F = U < F ? U : F) : Z === B && U < F && (F = U, R = I);
          }
          return R || P - M;
        }, A.prototype._chooseSplitAxis = function(_, M, P) {
          var R = _.leaf ? this.compareMinX : u, B = _.leaf ? this.compareMinY : c, F = this._allDistMargin(
            _,
            M,
            P,
            R
          );
          M = this._allDistMargin(_, M, P, B), F < M && _.children.sort(R);
        }, A.prototype._allDistMargin = function(_, M, P, R) {
          _.children.sort(R), R = this.toBBox;
          for (var B = s(_, 0, M, R), F = s(_, P - M, P, R), I = l(B) + l(F), U = M; U < P - M; U++) {
            var G = _.children[U];
            o(B, _.leaf ? R(G) : G), I += l(B);
          }
          for (P = P - M - 1; P >= M; P--)
            B = _.children[P], o(F, _.leaf ? R(B) : B), I += l(F);
          return I;
        }, A.prototype._adjustParentBBoxes = function(_, M, P) {
          for (; 0 <= P; P--)
            o(M[P], _);
        }, A.prototype._condense = function(_) {
          for (var M = _.length - 1, P; 0 <= M; M--)
            _[M].children.length === 0 ? 0 < M ? (P = _[M - 1].children, P.splice(P.indexOf(_[M]), 1)) : this.clear() : n(_[M], this.toBBox);
        }, A;
      });
    }), di = function(r) {
      function i(t) {
        ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t)), t.name = "TextLayer";
        var e = t.canvas = document.createElement("canvas");
        return e = t.ctx = e.getContext("2d"), e.textAlign = "start", e.textBaseline = "top", t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return { depthWrite: !1, depthTest: !0, color: "#fff", fontFamily: "Microsoft Yahei", fontSize: 14, flat: !1, collides: !0, unit: "px", angle: 0, offset: [0, 0], padding: [
          2,
          2
        ], margin: [0, 0], polygonOffset: [0, 0], shadow: {}, stroke: { color: "#000" } };
      } }, { key: "initialize", value: function(t) {
        this.gl = t;
        var e = this.getOptions();
        this.texture = null, this.lastUpdateTime = 0, this.program = new Ft(this.gl, {
          vertexShader: "precision highp float;uniform mat4 matrix;uniform bool uFlat;uniform bool uUnitPx;uniform float zoomUnits;uniform float devicePixelRatio;uniform float zIndex;uniform vec2 offset;attribute vec3 position;attribute float corner;attribute float scale;attribute float rotation;attribute vec2 size;attribute vec2 aTextCoord;varying vec2 vTextCoord;/***点A(x,y)，绕原点顺时针旋转角度a新坐标的计算公式*x1=x*cos(a)+y*sin(a)*y1=y*cos(a)-x*sin(a)*/vec3 transformCoord(vec3 coord,vec2 size,float corner){float x=coord.x;float y=coord.y;if(corner==1.0){x+=-size.x*cos(rotation)+size.y*sin(rotation);y+=size.y*cos(rotation)+size.x*sin(rotation);}else if(corner==2.0){x+=size.x*cos(rotation)+size.y*sin(rotation);y+=size.y*cos(rotation)-size.x*sin(rotation);}else if(corner==3.0){x+=size.x*cos(rotation)-size.y*sin(rotation);y+=-size.y*cos(rotation)-size.x*sin(rotation);}else{x+=-size.x*cos(rotation)-size.y*sin(rotation);y+=-size.y*cos(rotation)+size.x*sin(rotation);}return vec3(x,y,coord.z);}void main(){vTextCoord=aTextCoord;if(uFlat){vec2 pixelOffset=offset;vec2 halfSize=size/2.0*scale;if(uUnitPx){halfSize*=zoomUnits;pixelOffset*=zoomUnits;}vec3 current=transformCoord(position,halfSize,corner);current.z+=zIndex;gl_Position=matrix*vec4(current.x+pixelOffset[0],current.y-pixelOffset[1],current.z,1.0);}else{vec4 pos=matrix*vec4(position,1.0);vec3 screen=pos.xyz/pos.w;vec2 halfSize=size/MAPV_resolution*devicePixelRatio*scale;vec2 positionOffset=offset*2./MAPV_resolution*devicePixelRatio;if(!uUnitPx){halfSize/=zoomUnits;positionOffset/=zoomUnits;}vec3 current=transformCoord(screen,halfSize,corner);current.xy=current.xy-positionOffset;current.z+=zIndex;gl_Position=vec4(current,1.0);}}",
          fragmentShader: `precision highp float;uniform sampler2D textureImage;uniform vec4 uSelectedColor;varying vec2 vTextCoord;void main(){gl_FragColor=texture2D(textureImage,vec2(vTextCoord.x,1.0-vTextCoord.y));
#if defined(PICK)
if(mapvIsPicked()){gl_FragColor=vec4(uSelectedColor.rgb,gl_FragColor.a);}
#endif
}`,
          defines: e.enablePicked ? ["PICK"] : []
        }, this), this.vertexBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.uvBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.indexBuffer = new dt({ gl: t, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" }), e = [{ name: "position", buffer: this.vertexBuffer, size: 3, stride: 32, type: "FLOAT", offset: 0 }, { name: "corner", buffer: this.vertexBuffer, size: 1, stride: 32, type: "FLOAT", offset: 12 }, { name: "size", buffer: this.vertexBuffer, size: 2, stride: 32, type: "FLOAT", offset: 16 }, { name: "scale", buffer: this.vertexBuffer, size: 1, stride: 32, type: "FLOAT", offset: 24 }, { name: "rotation", buffer: this.vertexBuffer, size: 1, stride: 32, type: "FLOAT", offset: 28 }, {
          name: "aTextCoord",
          buffer: this.uvBuffer,
          size: 2,
          stride: 8,
          type: "FLOAT",
          offset: 0
        }], e = e.concat(this.getCommonAttributes()), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: e });
      } }, { key: "onDestroy", value: function() {
      } }, { key: "onChanged", value: function(t, e) {
        this.gl && this.processCache(t, e);
      } }, { key: "processCache", value: function(t, e) {
        this.cachedData = [];
        for (var a = 0; a < e.length; a++) {
          var n = this.normizedPoint(e[a].geometry.coordinates), s = e[a].text;
          "properties" in e[a] && "text" in e[a].properties && (s = e[a].properties.text);
          var o = this.getProperty(
            "angle",
            t.angle,
            e[a]
          ), u = this.getProperty("color", t.color, e[a]);
          n && s !== void 0 && this.cachedData.push({ point: n, text: s, angle: o, color: u, index: a });
        }
      } }, { key: "render", value: function(t) {
        if (this.cachedData && this.cachedData.length && this.map) {
          var e = t.gl, a = t.matrix, n = this.getOptions(), s = this.program;
          s.use(e), this.throttleUpdate(t), this.setGLState({ blend: !0, blendEquation: e.FUNC_ADD, blendFunc: [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA], polygonOffset: n.polygonOffset, depthTest: n.depthTest, depthMask: n.depthWrite });
          var o = this.map.getZoomUnits();
          s.setUniforms(Rt(this.getCommonUniforms(t), { matrix: a, devicePixelRatio: 1 < (window.BMAPGL_FORCE_RATIO || window.devicePixelRatio) ? 2 : 1, textureImage: this.texture, uFlat: n.flat, offset: n.offset, zoomUnits: o, zIndex: n.zIndex, uUnitPx: n.unit === "px" })), 0 < this.index.length && (this.indexBuffer.bind(), this.vertexArray.bind(), e.drawElements(e.TRIANGLES, this.index.length, e.UNSIGNED_INT, 0));
        }
      } }, { key: "throttleUpdate", value: function(t) {
        this.updateText(t);
      } }, { key: "updateText", value: function(t) {
        var e = t.gl, a = t.matrix, n = this.getOptions();
        t = n.fontSize;
        var s = n.fontFamily, o = n.padding, u = n.margin, c = n.collides, v = n.enablePicked, l = n.shadow, f = e.canvas.width / window.devicePixelRatio, p = e.canvas.height / window.devicePixelRatio, d = this.canvas;
        e = this.ctx, e.save(), e.scale(window.devicePixelRatio, window.devicePixelRatio), e.textBaseline = "top", e.font = "20px " + s;
        var g = new ci();
        n = [];
        for (var A = 0; A < this.cachedData.length; A++) {
          var _ = this.cachedData[A], M = _.point, P = _.text, R = _.angle, B = _.color;
          _ = _.index;
          var F = Vt(M, 3), I = ue.clone([F[0], F[1], F[2], 1]);
          ue.transformMat4(
            I,
            I,
            a
          ), ue.scale(I, I, 1 / I[3]);
          var U = this.map.getHeading() % 360;
          F = (I[0] + 1) / 2 * f, I = (-I[1] + 1) / 2 * p;
          var G = F * Math.cos(U * Math.PI / 180) - I * Math.sin(U * Math.PI / 180), Z = F * Math.sin(U * Math.PI / 180) + I * Math.cos(U * Math.PI / 180), Q = e.measureText(P);
          U = Q.width + 2 * o[0];
          var it = 20;
          Q.actualBoundingBoxAscent && Q.actualBoundingBoxDescent && (it = Q.actualBoundingBoxDescent - Q.actualBoundingBoxAscent), it += 2 * o[1], Q = U + u[0];
          var et = it + u[1];
          G -= Q / 2, Z -= et / 2;
          var vt = G + Q, Tt = Z + et;
          if (!(0 > F + Q / 2 || 0 > I + et / 2 || F - Q / 2 > f || I - et / 2 > p)) {
            if (c) {
              if (F = { minX: G, maxX: vt, minY: Z, maxY: Tt }, g.collides(F))
                continue;
              g.insert(F);
            }
            n.push({ w: U, h: it, point: M, text: P, angle: R, color: B, dataIndex: _ });
          }
        }
        for (e.restore(), u = Er(n), a = u.w, u = u.h, 0 >= a && (a = 1), 0 >= u && (u = 1), d.width = 2 * a, d.height = 2 * u, e.save(), e.scale(2, 2), e.textBaseline = "top", e.font = "20px " + s, e.shadowColor = l && l.color, e.shadowOffsetX = l && l.offsetX, e.shadowOffsetY = l && l.offsetY, e.shadowBlur = l && l.blur, s = [], l = [], d = [], c = [], f = 0, p = n.length; f < p; ++f) {
          for (g = n[f], e.fillStyle = g.color, e.fillText(g.text, g.x + o[0], g.y + o[1]), P = Vt(g.point, 3), A = P[0], M = P[1], P = P[2], R = 0; 4 > R; R++)
            s.push(A, M, P), s.push(R), s.push(g.w, g.h), s.push(t / 20, g.angle * Math.PI / 180);
          A = g.x / a, M = (g.x + g.w) / a, P = (g.y + g.h) / u, R = g.y / u, l.push(A, P, A, R, M, R, M, P), A = 4 * f, d.push(A, A + 2, A + 1, A, A + 3, A + 2), v && (g = this.indexToRgb(g.dataIndex), c.push(g[0] / 255, g[1] / 255, g[2] / 255), c.push(g[0] / 255, g[1] / 255, g[2] / 255), c.push(g[0] / 255, g[1] / 255, g[2] / 255), c.push(g[0] / 255, g[1] / 255, g[2] / 255));
        }
        e.restore(), this.loadTexture(), this.index = d, this.vertexBuffer.updateData(new Float32Array(s)), this.uvBuffer.updateData(new Float32Array(l)), this.indexBuffer.updateData(new Uint32Array(d)), v && this.pickBuffer.updateData(new Float32Array(c));
      } }, { key: "loadTexture", value: function() {
        var t = this;
        this.canvas ? Ot(this.gl, this.canvas, function(e) {
          t.texture = e;
        }, { TEXTURE_WRAP_S: "CLAMP_TO_EDGE", TEXTURE_WRAP_T: "CLAMP_TO_EDGE" }) : this.texture = null;
      } }]), i;
    }(jt), lr = function(r) {
      function i(t) {
        return ft(this, i), Pt(this, (i.__proto__ || yt(i)).call(this, t));
      }
      return Lt(i, r), ct(i, [
        { key: "initialize", value: function(t) {
          var e = this;
          this.children && this.children.forEach(function(a) {
            a.map = e.map, a.setWebglLayer(e.getWebglLayer()), a.commonInitialize && a.commonInitialize(t), a.initialize && a.initialize(t), a.onOptionsChanged(a.getOptions()), a.onDataChanged(a.getData()), a.onChanged(a.getOptions(), a.getData());
          });
        } },
        { key: "isRequestAnimation", value: function() {
          if (this.autoUpdate !== void 0)
            return ur(i.prototype.__proto__ || yt(i.prototype), "isRequestAnimation", this).call(this);
          for (var t = !1, e = 0; e < this.children.length; e++)
            if (this.children[e].isRequestAnimation()) {
              t = !0;
              break;
            }
          return t;
        } },
        { key: "render", value: function(t) {
          this.children && this.children.forEach(function(e) {
            e.render(t);
          });
        } },
        { key: "onDestroy", value: function(t) {
          this.children && this.children.forEach(function(e) {
            e.onDestroy(t);
          });
        } }
      ]), i;
    }(la), md = function(r) {
      function i(t) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t)), t.preHeightMapper = {}, t.preColorMapper = {}, t;
      }
      return Lt(i, r), ct(i, [
        { key: "getDefaultOptions", value: function() {
          return Rt(ur(i.prototype.__proto__ || yt(i.prototype), "getDefaultOptions", this).call(this), { style: "grid", gridSize: 500, gridGap: 5, height: function() {
            return 1e3;
          }, color: function() {
            return "rgb(200, 200, 20)";
          } });
        } },
        { key: "generateGrid", value: function(t, e) {
          var a = e.gridSize, n = [], s = {};
          e = t.length;
          for (var o = this.getPointOffset(), u = 0; u < e; u++) {
            var c = this.normizedPoint(t[u].geometry.coordinates);
            c = ~~((c[0] + o[0]) / a) + "_" + ~~((c[1] + o[1]) / a), s[c] === void 0 && (s[c] = 0);
            var v = ~~t[u].count || 1;
            "properties" in t[u] && "count" in t[u].properties && (v = ~~t[u].properties.count), s[c] += v;
          }
          return de(s).forEach(function(l) {
            var f = l.split("_");
            n.push([f[0] * a + a / 2, f[1] * a + a / 2, s[l]]);
          }), n;
        } },
        { key: "onChanged", value: function(t, e) {
          e = this.processData(e), ur(i.prototype.__proto__ || yt(i.prototype), "onChanged", this).call(this, t, e);
        } },
        { key: "getGridDataRange", value: function() {
          var t = this.gridData, e = void 0, a = void 0;
          t[0] && (e = t[0][2], a = t[0][2]);
          for (var n = t.length, s = 0; s < n; s++) {
            var o = t[s];
            e = Math.max(o[2], e), a = Math.min(o[2], a);
          }
          return { max: e / 2, min: a };
        } },
        { key: "processData", value: function(t) {
          var e = this.getOptions(), a = e.gridSize, n = [];
          if (e.style === "normal")
            for (var s = this.getPointOffset(), o = 0; o < t.length; o++) {
              var u = this.normizedPoint(t[o].geometry.coordinates), c = u[0] + s[0];
              u = u[1] + s[1];
              var v = ~~t[o].count || 1;
              "properties" in t[o] && "count" in t[o].properties && (v = ~~t[o].properties.count);
              var l = t[o].color;
              "properties" in t[o] && "color" in t[o].properties && (l = ~~t[o].properties.color), n.push([c, u, v, l]);
            }
          else
            n = this.generateGrid(t, e);
          for (t = [], this._preHeightMapper = {}, this._preColorMapper = {}, s = 0; s < n.length; s++)
            o = n[s], o[0] = o[0], o[1] = o[1], c = o[2], e.height && (c = typeof e.height == "function" ? e.height({ count: o[2], coordinates: [o[0], o[1]] }) : e.height), u = a / 2 - e.gridGap, v = o[3], e.color && (v = typeof e.color == "function" ? e.color({ count: o[2], color: o[3] }) : V(v || e.color).unitArray()), l = "p" + o[0] + o[1], t.push({ geometry: { type: "Polygon", coordinates: [[[o[0] - u, o[1] - u], [o[0] - u, o[1] + u], [o[0] + u, o[1] + u], [o[0] + u, o[1] - u]]] }, color: v, origin: o, count: o[2], preHeight: this.preHeightMapper[l], preColor: this.preColorMapper[l], height: c }), this._preHeightMapper[l] = c, this._preColorMapper[l] = v;
          return this.preHeightMapper = this._preHeightMapper, this.preColorMapper = this._preColorMapper, this.gridData = t;
        } }
      ]), i;
    }(qn), rl = function(r) {
      function i(t) {
        ft(
          this,
          i
        );
        var e = Pt(this, (i.__proto__ || yt(i)).call(this, t));
        return e.gridLayer = new md(t), e.options.textOptions = Rt({ show: !1, flat: !0, unit: "m", fontSize: 100, collides: !1 }, t.textOptions || {}), e.textLayer = new di(e.options.textOptions), e.children = [e.gridLayer, e.textLayer], e;
      }
      return Lt(i, r), ct(i, [
        { key: "pick", value: function(t, e) {
          return this.gridLayer.pick(t, e);
        } },
        { key: "setData", value: function(t) {
          this.gridLayer.setData(t), this.options.textOptions.show && this.setTextData();
        } },
        { key: "setTextData", value: function() {
          var t = this.gridLayer.gridData.map(function(e) {
            return { geometry: {
              type: "Point",
              coordinates: [e.origin[0], e.origin[1], e.height + 5]
            }, properties: { text: e.count } };
          });
          this.textLayer.setData(t);
        } },
        { key: "setOptions", value: function() {
          var t = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, e = this.options.textOptions;
          Rt(this.options, t), this.gridLayer.setOptions(this.options), t.textOptions && (this.options.textOptions.show && this.setTextData(), this.options.textOptions = Rt(e || {}, t.textOptions), this.textLayer.setOptions(this.options.textOptions));
        } },
        { key: "getData", value: function() {
          return this.gridLayer.getData();
        } },
        { key: "render", value: function(t) {
          this.gridLayer.render(t), this.options.textOptions.show && this.textLayer.render(t);
        } }
      ]), i;
    }(lr), yd = function(r) {
      function i(t) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t)), t.gridLayer = new rl(t.getGridOptions()), t.children = [t.gridLayer], t.options.riseTime && (t.autoUpdate = !0), t;
      }
      return Lt(i, r), ct(i, [
        { key: "pick", value: function(t, e) {
          return this.gridLayer.pick(t, e);
        } },
        { key: "onDataChanged", value: function(t) {
          this.gridLayer.setData(t);
        } },
        { key: "getGridOptions", value: function() {
          var t = this.getOptions(), e = t.max, a = t.min;
          e === void 0 && (a = this.gridLayer.getGridDataRange(), e = a.max, a = a.min);
          var n = new gt({ max: e, min: a, gradient: t.gradient, maxSize: t.maxHeight, minSize: t.minHeight });
          return t.height = function(s) {
            var o = n.getSize(s.count);
            return "properties" in s && "count" in s.properties && (o = n.getSize(s.properties.count)), o;
          }, t.color = function(s) {
            var o = n.getImageData(s.count);
            return "properties" in s && "count" in s.properties && (o = n.getImageData(s.properties.count)), [o[0] / 255, o[1] / 255, o[2] / 255, o[3] / 255];
          }, t;
        } },
        { key: "onOptionsChanged", value: function(t) {
          this.gridLayer.setOptions(this.getGridOptions());
        } },
        { key: "getDefaultOptions", value: function() {
          return { enablePicked: !1, selectedIndex: -1, selectedColor: "#ff0000", autoSelect: !0, style: "grid", gridSize: 500, maxHeight: 8e3, minHeight: 200, gradient: { 0: "rgb(50, 50, 256)", "0.1": "rgb(50, 250, 56)", "0.5": "rgb(250, 250, 56)", 1: "rgb(250, 50, 56)" } };
        } }
      ]), i;
    }(lr), il = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.name = "SimpleLineLayer", t.bufferData = [], t;
      }
      return Lt(i, r), ct(i, [{ key: "initialize", value: function(t) {
        this.gl = t;
        var e = this.getOptions();
        this.program = new Ft(this.gl, {
          vertexShader: `uniform mat4 u_matrix;attribute vec3 aPos;attribute vec4 aColor;varying vec4 vColor;
#if defined(DASH)
varying vec3 vPos;
#endif
void main(){if(aColor.w>=0.0&&aColor.w<=1.0){vColor=aColor;}else{vColor=vec4(aColor.xyz,1.0);}gl_Position=u_matrix*vec4(aPos,1.0);
#if defined(DASH)
vPos=aPos;
#endif
}`,
          fragmentShader: `precision highp float;varying vec4 vColor;varying vec3 vPos;void main(){
#if defined(DASH)
if(mod(vPos.x,3.0)<1.5){discard;}
#endif
gl_FragColor=vColor;}`,
          defines: e.useDash ? ["DASH"] : ""
        }, this), this.buffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: [{ stride: 28, name: "aPos", buffer: this.buffer, size: 3, type: "FLOAT", offset: 0 }, { stride: 28, name: "aColor", buffer: this.buffer, size: 4, type: "FLOAT", offset: 12 }] });
      } }, { key: "onDestroy", value: function() {
        this.bufferData = [];
      } }, { key: "onChanged", value: function(t, e) {
        var a = this;
        if (this.gl) {
          var n = [], s = function(l, f) {
            if (l)
              for (var p = 0; p < l.length - 1; p++) {
                var d = a.normizedPoint(l[p]);
                n.push(d[0]), n.push(d[1]), n.push(d[2]), n.push(f[0], f[1], f[2], f[3]), d = a.normizedPoint(l[p + 1]), n.push(d[0]), n.push(d[1]), n.push(d[2]), n.push(f[0], f[1], f[2], f[3]);
              }
          };
          t = t.color;
          for (var o = 0; o < e.length; o++) {
            var u = this.getProperty("color", t, e[o]);
            u = this.normizedColor(u);
            var c = e[o].geometry, v = c.coordinates;
            if (c.type === "MultiPolygon") {
              if (v)
                for (c = 0; c < v.length; c++)
                  s(v[c][0], u);
            } else if (c.type === "Polygon")
              v && s(v[0], u);
            else if (c.type === "MultiLineString") {
              if (v)
                for (c = 0; c < v.length; c++)
                  s(
                    v[c],
                    u
                  );
            } else
              s(v, u);
          }
          this.bufferData = n, this.buffer.updateData(new Float32Array(n));
        }
      } }, { key: "render", value: function(t) {
        var e = t.gl;
        if (t = t.matrix, this.bufferData && !(0 >= this.bufferData.length)) {
          var a = this.program;
          a.use(e), this.vertexArray.bind(), a.setUniforms({ u_matrix: t }), t = this.getOptions(), this.setGLState({ blend: !0, blendFunc: t.blend === "lighter" ? [e.SRC_ALPHA, e.ONE] : [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA], blendEquation: e.FUNC_ADD }), e.drawArrays(e.LINES, 0, this.bufferData.length / 7);
        }
      } }]), i;
    }(jt), xd = bn.f("species"), _d = S(function(r) {
      r.exports = { default: xd, __esModule: !0 };
    });
    L(_d);
    var ha = { normal: null, road: ys() }, Ad = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.name = "LineLayer3D", t.initData(), t;
      }
      return Lt(i, r), ct(i, [{
        key: "getDefaultOptions",
        value: function() {
          return { color: "rgba(25, 25, 250, 1)", offset: 0, blend: "normal", width: 4, unit: "px", flat: !1, antialias: !1, style: "normal", dashArray: [0, 0], dashOffset: 0, polygonOffset: [0, 0] };
        }
      }, { key: "initData", value: function() {
        this.dataMgr = { position: [], prev: [], next: [], direction: [], color: [], index: [], counter: [], uv: [] };
      } }, { key: "initialize", value: function(t) {
        this.gl = t;
        var e = this.getOptions(), a = [];
        e.enablePicked && a.push("PICK"), ha[e.style] && (this.isUseTexture = !0, a.push("USE_TEXTURE")), this.program = new Ft(this.gl, {
          vertexShader: `precision highp float;uniform vec4 uSelectedColor;uniform mat4 uMatrix;uniform bool uFlat;uniform bool uUnitPx;uniform vec2 uDashArray;uniform float thickness;uniform float zoomUnits;uniform float devicePixelRatio;uniform float uOffset;attribute vec3 position;attribute vec3 next;attribute vec3 previous;attribute float direction;attribute vec4 aColor;attribute float aDistance;attribute float aTotalDistance;
#if defined(USE_TEXTURE)
attribute vec2 uv;
#endif
varying vec4 vColor;varying vec2 vNormal;varying vec2 vUV;varying vec2 vDashArray;varying float vTotalDistance;varying float vCounter;vec2 project(vec4 coord){vec3 screen=coord.xyz/coord.w;vec2 clip=(screen.xy+1.0)/2.0;return clip*MAPV_resolution;}vec4 unproject(vec2 projected,float z,float w){vec2 clip=projected/MAPV_resolution;vec2 screen=clip*2.0-1.0;return vec4(screen*w,z,w);}vec3 getNormalAndWidth(vec2 currentScreen,vec2 previousScreen,vec2 nextScreen,float thickness){vec2 dir=vec2(0.0);if(currentScreen==previousScreen){dir=normalize(nextScreen-currentScreen);}else if(currentScreen==nextScreen){dir=normalize(currentScreen-previousScreen);}else{vec2 dirA=normalize((currentScreen-previousScreen));vec2 dirB=normalize((nextScreen-currentScreen));vec2 tangent=normalize(dirA+dirB);vec2 perp=vec2(-dirA.y,dirA.x);vec2 miter=vec2(-tangent.y,tangent.x);dir=tangent;float angle=40.0;if(dot(dirA,dirB)>cos(radians(angle))){thickness=thickness/dot(miter,perp);}}vec2 normal=vec2(-dir.y,dir.x);return vec3(normal,thickness);}void main(){vColor=aColor;vCounter=aDistance/aTotalDistance;vDashArray=uDashArray/aTotalDistance;if(uUnitPx){vDashArray*=zoomUnits;}vTotalDistance=aTotalDistance;
#if defined(USE_TEXTURE)
vUV=uv;
#endif
#if defined(PICK)
if(mapvIsPicked()){vColor=uSelectedColor;}
#endif
if(uFlat){float width=thickness;if(uUnitPx){width*=zoomUnits;}vec3 nw=getNormalAndWidth(position.xy,previous.xy,next.xy,width);width=nw.z;vec2 normal=nw.xy;vNormal=normal*direction;normal*=width/2.0;float offsetXy=uOffset;float offsetHeight=uOffset/100.0;if(uUnitPx){offsetXy/=zoomUnits;offsetHeight*=zoomUnits;}gl_Position=uMatrix*vec4(position.xy+normal*(direction+offsetXy),position.z+offsetHeight,1.0);}else{vec4 previousProjected=uMatrix*vec4(previous,1.0);vec4 currentProjected=uMatrix*vec4(position,1.0);vec4 nextProjected=uMatrix*vec4(next,1.0);vec2 currentScreen=project(currentProjected);vec2 previousScreen=project(previousProjected);vec2 nextScreen=project(nextProjected);float width=thickness*devicePixelRatio;if(!uUnitPx){width/=zoomUnits;}vec3 nw=getNormalAndWidth(currentScreen,previousScreen,nextScreen,width);width=nw.z;vec2 normal=nw.xy;vNormal=normal*direction;normal*=width/2.0;vec2 pos=currentScreen+normal*direction;vec4 finalPos=unproject(pos,currentProjected.z,currentProjected.w);gl_Position=finalPos;}}`,
          fragmentShader: `precision highp float;varying vec4 vColor;varying vec2 vNormal;varying vec2 vUV;varying vec2 vDashArray;varying float vCounter;varying float vTotalDistance;uniform bool uAntialias;uniform float uDashOffset;uniform float zoomUnits;uniform float thickness;
#if defined(USE_TEXTURE)
uniform float uTextureMargin;uniform sampler2D textureImage;
#endif
void main(){vec4 color=vColor;if(uAntialias){float blur=1.0;blur=1.0-smoothstep(0.8,1.0,length(vNormal));color.a*=blur;}
#if defined(USE_TEXTURE)
float segLen=uTextureMargin*zoomUnits;float textureLen=thickness*zoomUnits;float deltaX=mod(vUV.x,segLen);float middle=segLen/2.0;if(deltaX>=middle&&deltaX<=middle+textureLen){float uvx=(deltaX-middle)/textureLen;vec4 texture=texture2D(textureImage,vec2(uvx,vUV.y));color=texture.a>=0.5 ? texture : color;}
#endif
if(vDashArray.y>0.0){float offset=uDashOffset*zoomUnits/vTotalDistance;color.a*=(1.0-step(vDashArray.x,mod(vCounter+offset,vDashArray.x+vDashArray.y)));}gl_FragColor=color;}`,
          defines: a
        }, this), this.prevBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.currentBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.nextBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.directionBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.colorBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.counterBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.uvBuffer = new dt({
          gl: t,
          target: "ARRAY_BUFFER",
          usage: "STATIC_DRAW"
        }), this.indexBuffer = new dt({ gl: t, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" }), a = [
          { stride: 12, name: "previous", buffer: this.prevBuffer, size: 3, type: "FLOAT", offset: 0 },
          { stride: 12, name: "position", buffer: this.currentBuffer, size: 3, type: "FLOAT", offset: 0 },
          { stride: 12, name: "next", buffer: this.nextBuffer, size: 3, type: "FLOAT", offset: 0 },
          { stride: 4, name: "direction", buffer: this.directionBuffer, size: 1, type: "FLOAT", offset: 0 },
          { stride: 16, name: "aColor", buffer: this.colorBuffer, size: 4, type: "FLOAT", offset: 0 },
          { stride: 8, name: "aDistance", buffer: this.counterBuffer, size: 1, type: "FLOAT", offset: 0 },
          { stride: 8, name: "aTotalDistance", buffer: this.counterBuffer, size: 1, type: "FLOAT", offset: 4 }
        ], a = a.concat(this.getCommonAttributes()), ha[e.style] && (a.push({ stride: 8, name: "uv", buffer: this.uvBuffer, size: 2, type: "FLOAT", offset: 0 }), this.setOptions({ texture: ha[e.style] }), this.loadTexture()), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: a });
      } }, { key: "onDestroy", value: function() {
      } }, { key: "onChanged", value: function(t, e) {
        var a = this;
        if (this.gl) {
          this.initData();
          for (var n = t.color, s = [], o = 0; o < e.length; o++) {
            var u = [], c = e[o].geometry.coordinates;
            c && 0 < c.length && (u = e[o].geometry.type === "MultiPolygon" ? c.reduce(function(f, p) {
              return f.concat(p);
            })[0].map(function(f) {
              return a.normizedPoint(f);
            }) : e[o].geometry.type === "Polygon" || e[o].geometry.type === "MultiLineString" ? c[0].map(function(f) {
              return a.normizedPoint(f);
            }) : c.map(function(f) {
              return a.normizedPoint(f);
            })), c = this.getProperty("color", n, e[o]), c = this.getProperty(
              "lineColor",
              n,
              e[o]
            ), c = this.normizedColor(c);
            for (var v = this.addMultipleCoords(u), l = 0; l < v.length; l++)
              this.processData(this.dataMgr, v[l], c);
            if (t.enablePicked)
              for (c = this.indexToRgb(o), v = 0; v < u.length; v++)
                s.push(c[0] / 255, c[1] / 255, c[2] / 255), s.push(c[0] / 255, c[1] / 255, c[2] / 255), t.repeat && (s.push(c[0] / 255, c[1] / 255, c[2] / 255), s.push(c[0] / 255, c[1] / 255, c[2] / 255), s.push(c[0] / 255, c[1] / 255, c[2] / 255), s.push(c[0] / 255, c[1] / 255, c[2] / 255));
          }
          this.counterBuffer.updateData(new Float32Array(this.dataMgr.counter)), this.currentBuffer.updateData(new Float32Array(this.dataMgr.position)), this.prevBuffer.updateData(new Float32Array(this.dataMgr.prev)), this.nextBuffer.updateData(new Float32Array(this.dataMgr.next)), this.directionBuffer.updateData(new Float32Array(this.dataMgr.direction)), this.colorBuffer.updateData(new Float32Array(this.dataMgr.color)), this.indexBuffer.updateData(new Uint32Array(this.dataMgr.index)), this.isUseTexture && this.uvBuffer.updateData(new Float32Array(this.dataMgr.uv)), t.enablePicked && this.pickBuffer.updateData(new Float32Array(s));
        }
      } }, { key: "processData", value: function(t, e, a) {
        var n, s, o, u, c, v, l, f, p = e.length, d = t.position.length / 6, g = gs(e), A = g.arr, _ = g.total;
        g = We(A.map(function(F) {
          return [F, _];
        })), A = A.map(function(F) {
          return [F, 0, F, 1];
        });
        var M = We(e.map(function(F) {
          return -1;
        }), !0), P = We(e), R = We(e.map(Tn(-1))), B = We(e.map(Tn(1)));
        e = We(e.map(function(F) {
          return a;
        })), p = vs(p, d), (n = t.uv).push.apply(n, bt(ir(A))), (s = t.counter).push.apply(s, bt(ir(g))), (o = t.position).push.apply(o, bt(ir(P))), (u = t.prev).push.apply(u, bt(ir(R))), (c = t.next).push.apply(c, bt(ir(B))), (v = t.direction).push.apply(v, bt(M)), (l = t.color).push.apply(l, bt(ir(e))), (f = t.index).push.apply(f, bt(p));
      } }, { key: "render", value: function(t) {
        var e = t.gl, a = t.matrix, n = this.dataMgr;
        if (n && !(0 >= n.index.length) && this.map) {
          var s = this.getOptions(), o = this.program;
          o.use(e), t = Rt(this.getCommonUniforms(t), { uMatrix: a, uFlat: s.flat, uUnitPx: s.unit === "px", zoomUnits: this.map.getZoomUnits(), devicePixelRatio: window.devicePixelRatio, thickness: s.width, uDashArray: s.dashArray, uDashOffset: s.dashOffset, uAntialias: s.antialias, uOffset: s.offset }), this.isUseTexture && (t = Rt(t, { uTextureMargin: 140, textureImage: this.texture })), o.setUniforms(t), this.setGLState({ blend: !0, blendEquation: e.FUNC_ADD, blendFunc: s.blend === "lighter" ? [e.SRC_ALPHA, e.ONE] : [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA], polygonOffset: s.polygonOffset }), this.indexBuffer.bind(), this.vertexArray.bind(), e.drawElements(e.TRIANGLES, n.index.length, e.UNSIGNED_INT, 0);
        }
      } }, { key: "loadTexture", value: function(t) {
        var e = this, a = this.getOptions();
        a.texture ? Ot(this.gl, a.texture, function(n, s) {
          e.image = s, e.texture = n, t && t(), e.webglLayer.render();
        }) : (this.image = this.texture = null, t && t());
      } }]), i;
    }(jt), wd = function() {
      function r(i) {
        ft(this, r), this.join = i.join || "miter", this.cap = i.cap || "butt", this.thickness = i.thickness || 4, this.miterLimit = i.miterLimit || 2 * this.thickness, this.dash = i.dash || !1, this.complex = { positions: [], indices: [], normals: [], colors: [], uvs: [], startIndex: 0, maxDistance: 0 }, this._lastFlip = -1, this._started = !1, this._normal = null, this._totalDistance = 0, this._colorFlag = !1, this._count = 0;
      }
      return ct(r, [{ key: "extrude", value: function(i, t, e, a) {
        var n = this.complex;
        if (1 >= i.length)
          return n;
        this._lastFlip = -1, this._started = !1, this._normal = null, this._totalDistance = 0;
        for (var s = i.length, o = n.startIndex, u = null, c = 1; c < s; c++) {
          var v = u || i[c - 1], l = i[c], f = c < s - 1 ? i[c + 1] : null;
          f && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] ? u = v : (v = this._segment(n, o, v, l, f, t, e, a), v !== -1 && (o += v, u = null));
        }
        return this.dash && (n.maxDistance = Math.max(this._totalDistance, n.maxDistance)), n.startIndex = n.positions.length / 7, n;
      } }, { key: "_segment", value: function(i, t, e, a, n, s, o, u) {
        u[0] instanceof Array && (this._colorFlag = !0);
        var c = 0, v = It.create(), l = It.create(), f = It.create(), p = It.create(), d = i.indices, g = i.positions, A = i.normals, _ = i.colors;
        i = i.uvs;
        var M = this.cap === "square", P = this.cap === "round", R = this.join === "bevel", B = this.join === "round", F = [a[0], a[1]], I = [e[0], e[1]];
        xs(l, F, I);
        var U = 0;
        if (this.dash && (U = this._calcDistance(F, I), this._totalDistance += U), this._normal || (this._normal = It.create(), En(this._normal, l)), !this._started)
          if (this._started = !0, M) {
            I = It.create();
            var G = It.create();
            It.add(I, this._normal, l), It.sub(G, this._normal, l), A.push(
              G[0],
              G[1],
              0
            ), A.push(I[0], I[1], 0), g.push(e[0], e[1], e[2], this._totalDistance - U, s, o, 0), g.push(e[0], e[1], e[2], this._totalDistance - U, -s, o, 0), i.push(this._totalDistance - U, 0, this._totalDistance - U, 1), this._colorFlag ? (_.push(u[0][0], u[0][1], u[0][2], u[0][3]), _.push(u[0][0], u[0][1], u[0][2], u[0][3])) : (_.push(u[0], u[1], u[2], u[3]), _.push(u[0], u[1], u[2], u[3]));
          } else if (P) {
            I = It.fromValues(-l[0], -l[1]), G = It.create(), It.sub(G, this._normal, l), It.normalize(G, G);
            var Z = It.create();
            It.add(Z, this._normal, l), It.normalize(Z, Z);
            var Q = It.fromValues(
              this._normal[0],
              this._normal[1]
            ), it = It.fromValues(-this._normal[0], -this._normal[1]);
            for (A.push(I[0], I[1], 0), A.push(G[0], G[1], 0), A.push(-Z[0], -Z[1], 0), A.push(Q[0], Q[1], 0), A.push(it[0], it[1], 0), I = 0; 5 > I; I++)
              g.push(e[0], e[1], e[2], this._totalDistance - U, s, o, 0), i.push(this._totalDistance - U, 0), this._colorFlag ? _.push(u[0][0], u[0][1], u[0][2], u[0][3]) : _.push(u[0], u[1], u[2], u[3]);
            d.push(t + 0, t + 2, t + 1, t + 1, t + 2, t + 3, t + 3, t + 2, t + 4), c += 3, t += 3;
          } else
            this._extrusions(g, A, i, _, e, this._normal, s, this._totalDistance - U, o, u, 0);
        if (d.push.apply(d, bt(this._lastFlip === -1 ? [t + 0, t + 1, t + 2] : [t + 1, t + 0, t + 2])), n)
          xs(f, [n[0], n[1]], F), this._count++, It.create(), It.add(p, l, f), It.normalize(p, p), P = It.fromValues(-p[1], p[0]), l = It.fromValues(-l[1], l[0]), l = [s / It.dot(P, l), P], l = Vt(l, 2), P = l[0], l = l[1], p = 0 < It.dot(p, this._normal) ? -1 : 1, R || this.join !== "miter" || Math.abs(P) > this.miterLimit && (R = !0), R ? (B = Math.min(2 * s, Math.abs(P)), A.push(this._normal[0], this._normal[1], 0), A.push(l[0], l[1], 0), g.push(a[0], a[1], a[2], this._totalDistance, s * p, o, 0), g.push(a[0], a[1], a[2], this._totalDistance, -B * p, o, 0), d.push.apply(d, bt(this._lastFlip === -p ? [t + 2, t + 1, t + 3] : [t + 0, t + 2, t + 3])), En(v, f), It.copy(this._normal, v), A.push(this._normal[0], this._normal[1], 0), g.push(a[0], a[1], a[2], this._totalDistance, s * p, o, 0), d.push.apply(d, bt(p === 1 ? [t + 2, t + 3, t + 4] : [t + 3, t + 2, t + 4])), this._flipedUV(i, this._totalDistance, p, !0), this._colorFlag ? (_.push(u[this._count][0], u[this._count][1], u[this._count][2], u[this._count][3]), _.push(u[this._count][0], u[this._count][1], u[this._count][2], u[this._count][3]), _.push(
            u[this._count][0],
            u[this._count][1],
            u[this._count][2],
            u[this._count][3]
          )) : (_.push(u[0], u[1], u[2], u[3]), _.push(u[0], u[1], u[2], u[3]), _.push(u[0], u[1], u[2], u[3])), c += 3) : B ? (B = Math.min(2 * s, Math.abs(P)), A.push(this._normal[0], this._normal[1], 0), A.push(l[0], l[1], 0), A.push(l[0], l[1], 0), g.push(a[0], a[1], a[2], this._totalDistance, s * p, o, 0), g.push(a[0], a[1], a[2], this._totalDistance, s * p, o, 0), g.push(a[0], a[1], a[2], this._totalDistance, -B * p, o, 0), d.push.apply(d, bt(this._lastFlip === -p ? [t + 2, t + 1, t + 4, t + 2, t + 4, t + 3] : [t + 0, t + 2, t + 4, t + 2, t + 3, t + 4])), En(v, f), It.copy(
            this._normal,
            v
          ), A.push(this._normal[0], this._normal[1], 0), g.push(a[0], a[1], a[2], this._totalDistance, s * p, o, 0), d.push.apply(d, bt(p === 1 ? [t + 4, t + 3, t + 5] : [t + 3, t + 4, t + 5])), this._flipedUV(i, this._totalDistance, p, !1), this._colorFlag ? (_.push(u[this._count][0], u[this._count][1], u[this._count][2], u[this._count][3]), _.push(u[this._count][0], u[this._count][1], u[this._count][2], u[this._count][3]), _.push(u[this._count][0], u[this._count][1], u[this._count][2], u[this._count][3]), _.push(
            u[this._count][0],
            u[this._count][1],
            u[this._count][2],
            u[this._count][3]
          )) : (_.push(u[0], u[1], u[2], u[3]), _.push(u[0], u[1], u[2], u[3]), _.push(u[0], u[1], u[2], u[3]), _.push(u[0], u[1], u[2], u[3])), c += 4) : (this._extrusions(g, A, i, _, a, l, P, this._totalDistance, o, u, this._count), d.push.apply(d, bt(this._lastFlip === -1 ? [t + 2, t + 1, t + 3] : [t + 2, t + 0, t + 3])), p = -1, It.copy(this._normal, l), c += 2), this._lastFlip = p;
        else if (En(this._normal, l), v = u.length - 1, M ? (f = It.create(), B = It.create(), It.add(f, l, this._normal), It.sub(B, l, this._normal), A.push(f[0], f[1], 0), A.push(B[0], B[1], 0), g.push(
          a[0],
          a[1],
          a[2],
          this._totalDistance,
          s,
          o,
          0
        ), g.push(a[0], a[1], a[2], this._totalDistance, s, o, 0), i.push(this._totalDistance, 0, this._totalDistance, 1), this._colorFlag ? (_.push(u[v][0], u[v][1], u[v][2], u[v][3]), _.push(u[v][0], u[v][1], u[v][2], u[v][3])) : (_.push(u[0], u[1], u[2], u[3]), _.push(u[0], u[1], u[2], u[3]))) : this._extrusions(g, A, i, _, a, this._normal, s, this._totalDistance, o, u, v), d.push.apply(d, bt(this._lastFlip === -1 ? [t + 2, t + 1, t + 3] : [t + 2, t + 0, t + 3])), c += 2, P) {
          for (f = It.create(), It.add(f, l, this._normal), It.normalize(f, f), B = It.create(), It.sub(B, l, this._normal), It.normalize(B, B), l = It.fromValues(l[0], l[1]), A.push(f[0], f[1], 0), A.push(B[0], B[1], 0), A.push(l[0], l[1], 0), A = 0; 3 > A; A++)
            g.push(a[0], a[1], a[2], this._totalDistance, s, o, 0), i.push(this._totalDistance, 0), this._colorFlag ? _.push(u[v][0], u[v][1], u[v][2], u[v][3]) : _.push(u[0], u[1], u[2], u[3]);
          d.push(t + 2, t + 3, t + 4, t + 4, t + 3, t + 5, t + 4, t + 5, t + 6), c += 3;
        }
        return c;
      } }, { key: "_extrusions", value: function(i, t, e, a, n, s, o, u, c, v, l) {
        t.push(s[0], s[1], 0), t.push(s[0], s[1], 0), i.push(n[0], n[1], n[2], u, o, c, 0), i.push(
          n[0],
          n[1],
          n[2],
          u,
          -o,
          c,
          0
        ), e.push(u, 0, u, 1), this._colorFlag ? (a.push(v[l][0], v[l][1], v[l][2], v[l][3]), a.push(v[l][0], v[l][1], v[l][2], v[l][3])) : (a.push(v[0], v[1], v[2], v[3]), a.push(v[0], v[1], v[2], v[3]));
      } }, { key: "_calcDistance", value: function(i, t) {
        return Math.sqrt(Math.pow(i[0] - t[0], 2) + Math.pow(i[1] - t[1], 2));
      } }, { key: "_flipedUV", value: function(i, t, e, a) {
        a ? e === -1 ? i.push(t, 0, t, 1, t, 0) : i.push(t, 1, t, 0, t, 1) : e === -1 ? i.push(t, 0, t, 0, t, 1, t, 0) : i.push(t, 1, t, 1, t, 0, t, 1);
      } }]), r;
    }(), ca = { normal: null, road: ys, arrow: function() {
      var r = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, i = r.width;
      r = r.color;
      var t = ms(), e = t.canvas;
      return t = t.ctx, t.save(), t.moveTo(5, 0), t.lineTo(32, 16), t.lineTo(5, 32), t.strokeStyle = r || "#fff", t.lineWidth = i || 8, t.stroke(), t.restore(), e;
    } }, da = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.name = "LineLayer", t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return {
          style: "normal",
          styleOptions: {},
          color: "rgba(25, 25, 250, 1)",
          blend: "default",
          lineJoin: "miter",
          lineCap: "butt",
          unit: "px",
          width: 4,
          offset: 0,
          antialias: !1,
          dashArray: [0, 0],
          dashOffset: 0,
          animation: !1,
          interval: 0.1,
          duration: 2,
          trailLength: 0.5,
          minZoom: 2,
          maxZoom: 25,
          polygonOffset: [0, 0],
          depthTest: !0,
          depthWrite: !0
        };
      } }, { key: "initialize", value: function(t) {
        this.gl = t;
        var e = this.getOptions(), a = [];
        e.enablePicked && a.push("PICK"), ca[e.style] && (this.isUseTexture = !0, this.prevStyle = e.style, this.prevStyleOptions = e.styleOptions, a.push("USE_TEXTURE")), e.animation === !0 && (this.isAnimateLine = !0, this.date = /* @__PURE__ */ new Date(), this.autoUpdate = !0, a.push("USE_LINE_ANIMATION")), e.useDash === !0 && a.push("USE_SIMPLE_DASH"), this.program = new Ft(this.gl, {
          vertexShader: `precision highp float;uniform vec4 uSelectedColor;uniform mat4 u_matrix;uniform vec2 u_dash_array;uniform float u_zoom_units;uniform float u_zIndex;uniform bool u_unit_px;attribute vec4 a_color;attribute vec3 a_position;attribute vec3 a_normal;attribute float a_distance;attribute float a_total_distance;attribute float a_width;attribute float a_offset;
#if defined(USE_TEXTURE)
attribute vec2 uv;
#endif
varying vec4 v_color;varying vec2 v_normal;varying vec2 v_uv;varying vec2 v_dash_array;varying float v_total_distance;varying float v_counter;varying float v_width;
#if defined(USE_SIMPLE_DASH)
varying vec3 v_position;
#endif
void main(){v_width=a_width;v_color=a_color;v_counter=a_distance/a_total_distance;v_dash_array=u_dash_array/a_total_distance;if(u_unit_px){v_dash_array*=u_zoom_units;}v_total_distance=a_total_distance;v_normal=vec2(normalize(a_normal.xy)*sign(a_width));
#if defined(USE_TEXTURE)
v_uv=uv;
#endif
#if defined(PICK)
if(mapvIsPicked()){v_color=uSelectedColor;}
#endif
vec2 extrude=a_normal.xy*a_width/2.0;if(u_unit_px){extrude*=u_zoom_units;}vec2 offsetXY=a_normal.xy*-a_offset;float offsetZ=a_offset/100.0+u_zIndex;if(u_unit_px){offsetXY*=u_zoom_units;offsetZ*=u_zoom_units;}
#if defined(USE_SIMPLE_DASH)
v_position=a_position;
#endif
gl_Position=u_matrix*vec4(a_position.xy+extrude+offsetXY,a_position.z+offsetZ,1.0);}`,
          fragmentShader: `precision highp float;varying vec4 v_color;varying vec2 v_normal;varying vec2 v_uv;varying vec2 v_dash_array;varying float v_counter;varying float v_total_distance;varying float v_width;
#if defined(USE_SIMPLE_DASH)
varying vec3 v_position;
#endif
uniform bool u_antialias;uniform float u_dash_offset;uniform float u_zoom_units;
#if defined(USE_LINE_ANIMATION)
uniform bool u_animate;uniform float u_time;uniform float u_duration;uniform float u_interval;uniform float u_trail_length;
#endif
#if defined(USE_TEXTURE)
uniform float u_texture_width;uniform float u_texture_margin;uniform sampler2D u_sampler;
#endif
void main(){vec4 color=v_color;
#if defined(USE_SIMPLE_DASH)
if(mod(v_position.x,5.0)<3.0){discard;}
#endif
if(u_antialias){float blur=1.0;blur=1.0-smoothstep(0.8,1.0,length(v_normal));color.a*=blur;}
#if defined(USE_LINE_ANIMATION)
if(u_animate){float alpha=1.0-fract(mod(1.0-v_counter,u_interval)*(1.0/u_interval)+u_time/u_duration);alpha=(alpha+u_trail_length-1.0)/u_trail_length;color.a*=alpha;gl_FragColor=color;return;}
#endif
#if defined(USE_TEXTURE)
float margin_width=u_texture_margin*u_zoom_units;float margin_width_half=margin_width/2.0;float texture_width=u_texture_width*u_zoom_units;float delta=mod(v_uv.x,texture_width+margin_width);if(delta>=margin_width_half&&delta<=margin_width_half+texture_width){float uvx=(delta-margin_width_half)/texture_width;vec4 texture=texture2D(u_sampler,vec2(uvx,v_uv.y));color=texture.a>=0.5 ? texture : color;}
#endif
if(v_dash_array.y>0.0){float offset=u_dash_offset*u_zoom_units/v_total_distance;color.a*=(1.0-step(v_dash_array.x,mod(v_counter+offset,v_dash_array.x+v_dash_array.y)));}gl_FragColor=color;}`,
          defines: a
        }, this), this.positionBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.colorBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.normalBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.indexBuffer = new dt({ gl: t, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" }), a = [{ stride: 28, name: "a_position", buffer: this.positionBuffer, size: 3, type: "FLOAT", offset: 0 }, { stride: 28, name: "a_distance", buffer: this.positionBuffer, size: 1, type: "FLOAT", offset: 12 }, {
          stride: 28,
          name: "a_width",
          buffer: this.positionBuffer,
          size: 1,
          type: "FLOAT",
          offset: 16
        }, { stride: 28, name: "a_offset", buffer: this.positionBuffer, size: 1, type: "FLOAT", offset: 20 }, { stride: 28, name: "a_total_distance", buffer: this.positionBuffer, size: 1, type: "FLOAT", offset: 24 }, { stride: 12, name: "a_normal", buffer: this.normalBuffer, size: 3, type: "FLOAT", offset: 0 }, { stride: 16, name: "a_color", buffer: this.colorBuffer, size: 4, type: "FLOAT", offset: 0 }], a = a.concat(this.getCommonAttributes()), this.isUseTexture && (this.uvBuffer = new dt({
          gl: t,
          target: "ARRAY_BUFFER",
          usage: "STATIC_DRAW"
        }), a.push({ stride: 8, name: "uv", buffer: this.uvBuffer, size: 2, type: "FLOAT", offset: 0 }), e = (0, ca[e.style])(e.styleOptions), this.setOptions({ texture: e }), this.loadTexture()), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: a });
      } }, { key: "onDestroy", value: function() {
      } }, { key: "onChanged", value: function(t, e) {
        var a = this, n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {};
        if (this.gl)
          if (!this.isUseTexture || this.prevStyle === t.style && Gi(this.prevStyleOptions) === Gi(t.styleOptions))
            this.parseData(
              t,
              e,
              n
            );
          else {
            this.prevStyle = t.style, this.prevStyleOptions = t.styleOptions;
            var s = (0, ca[t.style])(t.styleOptions);
            this.setOptions({ texture: s }), this.loadTextureTime && clearTimeout(this.loadTextureTime), this.loadTextureTime = setTimeout(function() {
              a.loadTexture(function() {
                a.parseData(t, e, n);
              });
            }, 0);
          }
      } }, { key: "onParseProperties", value: function(t) {
        return this.normizedColor(t);
      } }, { key: "parseData", value: function(t, e, a) {
        var n = this, s = t.dashArray, o = t.width, u = t.color, c = t.offset;
        s = !!this.isUseTexture || !!s[1] || !!this.isAnimateLine;
        for (var v = new wd({ dash: s, cap: t.lineCap, join: t.lineJoin, miterLimit: t.miterLimit, thickness: o }), l = [], f = function(d) {
          var g = e[d].geometry.coordinates;
          g && 0 < g.length && (e[d].geometry.type === "MultiPolygon" ? g = g.reduce(function(B, F) {
            return B.concat(F);
          }) : e[d].geometry.type === "LineString" && (g = [g]), g = g.map(function(B) {
            return B = B.map(function(F) {
              return n.normizedPoint(F);
            }), a.closePath === !0 && B[0].toString() !== B[B.length - 1].toString() && B.push(B[0]), B;
          }));
          var A = n.getProperty("color", u, e[d]);
          A = n.getProperty(
            "lineColor",
            A,
            e[d]
          ), A = n.onParseProperties(A, e[0].geometry.coordinates.length);
          var _ = n.getProperty("width", o, e[d]);
          _ = Number(_);
          var M = n.getProperty("offset", c, e[d]);
          M = Number(M);
          var P = v.complex.startIndex;
          g = n.addMultipleCoords(g);
          for (var R = 0; R < g.length; R++)
            g[R].forEach(function(B) {
              v.extrude(B, _, M, A);
            });
          if (t.enablePicked)
            for (d = n.indexToRgb(d), g = v.complex.startIndex; P < g; P++)
              l.push(d[0] / 255, d[1] / 255, d[2] / 255), t.repeat && (l.push(d[0] / 255, d[1] / 255, d[2] / 255), l.push(d[0] / 255, d[1] / 255, d[2] / 255));
        }, p = 0; p < e.length; p++)
          f(p);
        if (f = v.complex, s)
          for (p = 0; p < f.positions.length / 7; p++)
            f.positions[7 * p + 6] = f.maxDistance;
        this.lineData = f, this.positionBuffer.updateData(new Float32Array(f.positions)), this.normalBuffer.updateData(new Float32Array(f.normals)), this.colorBuffer.updateData(new Float32Array(f.colors)), this.indexBuffer.updateData(new Uint32Array(f.indices)), this.isUseTexture && this.uvBuffer.updateData(new Float32Array(f.uvs)), t.enablePicked && this.pickBuffer.updateData(new Float32Array(l));
      } }, { key: "render", value: function(t) {
        var e = t.gl, a = t.matrix, n = this.lineData;
        if (n && !(0 >= n.indices.length) && this.map) {
          var s = this.getOptions(), o = this.program;
          o.use(e), t = Rt(this.getCommonUniforms(t), { u_matrix: a, u_zoom_units: this.map.getZoomUnits(), u_dash_array: s.dashArray, u_dash_offset: s.dashOffset, u_antialias: s.antialias, u_unit_px: s.unit === "px", u_zIndex: s.zIndex }), this.isUseTexture && (t = Rt(t, { u_texture_width: s.width, u_texture_margin: 140, u_sampler: this.texture })), this.isAnimateLine && (a = this.map.getZoom(), t = Rt(t, { u_time: (/* @__PURE__ */ new Date() - this.date) / 1e3, u_animate: !!(a >= s.minZoom && a <= s.maxZoom && this.autoUpdate), u_duration: s.duration, u_interval: s.interval, u_trail_length: s.trailLength })), o.setUniforms(t), this.setGLState({ blend: !0, blendEquation: e.FUNC_ADD, blendFunc: ie(e, s.blend), polygonOffset: s.polygonOffset, depthTest: s.depthTest, depthMask: s.depthWrite }), this.indexBuffer.bind(), this.vertexArray.bind(), e.drawElements(e.TRIANGLES, n.indices.length, e.UNSIGNED_INT, 0);
        }
      } }, { key: "loadTexture", value: function(t) {
        var e = this, a = this.getOptions();
        a.texture ? Ot(
          this.gl,
          a.texture,
          function(n, s) {
            e.image = s, e.texture = n, t && t(), e.webglLayer.render();
          }
        ) : (this.image = this.texture = null, t && t());
      } }]), i;
    }(jt), Td = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.name = "LineRainbowLayer", t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return {
          style: "normal",
          styleOptions: {},
          color: "rgba(25, 25, 250, 1)",
          blend: "normal",
          lineJoin: "miter",
          lineCap: "butt",
          unit: "px",
          width: 4,
          offset: 0,
          antialias: !1,
          dashArray: [0, 0],
          dashOffset: 0,
          animation: !1,
          interval: 0.1,
          duration: 2,
          trailLength: 0.5,
          minZoom: 2,
          maxZoom: 25,
          polygonOffset: [0, 0],
          depthTest: !0,
          depthWrite: !0
        };
      } }, { key: "onDestroy", value: function() {
        this.options && this.options.enablePicked && (this.pickBuffer = null), this.options = this.data = this.indexBuffer = this.normalBuffer = this.colorBuffer = this.positionBuffer = this.program = this.vertexArray = null;
      } }, { key: "onParseProperties", value: function(t, e) {
        var a = t.length;
        if (t instanceof Array) {
          var n = [];
          if (a < e) {
            var s = Math.floor(e / a);
            e %= a;
            for (var o = 0, u = 0; o < a; o++, u++)
              for (var c = u < e ? s + 1 : s, v = 0; v < c; v++)
                n.push(t[o]);
            t = n;
          }
          for (a = [], s = 0; s < t.length; s++)
            a.push(this.normizedColor(t[s]));
        } else
          a = this.normizedColor(t);
        return a;
      } }]), i;
    }(da), Ed = function() {
      function r(i, t) {
        ft(this, r), this.layer = i, this.gl = t, this.initData();
      }
      return ct(r, [{ key: "initData", value: function() {
        this.outWall3d = { vertex: [], vertexBuffer: [], index: [], indexBuffer: [] }, this.maxLength = 0;
      } }, { key: "getData", value: function() {
        return this.outWall3d;
      } }, { key: "getMaxDataLength", value: function() {
        return this.maxLength;
      } }, { key: "onLayerChange", value: function(i, t) {
        this.initData();
        var e = i.color, a = i.height, n = i.gradient;
        i = this.gl;
        for (var s = 0; s < t.length; s++) {
          var o = t[s].geometry.coordinates, u = o.length;
          this.maxLength = u > this.maxLength ? u : this.maxLength;
          for (var c = [], v = 0; v < u; v++) {
            var l = this.layer.normizedPoint(o[v]);
            c.push(l);
          }
          u = t[s].color || e, "properties" in t[s] && "color" in t[s].properties && (u = t[s].properties.color), n || Object.prototype.toString.call(u) !== "[object Function]" || (u = u(t[s])), o = this.layer.normizedColor(n ? n[0] : u), u = this.layer.normizedColor(n ? n[1] : u), v = t[s].height || a, "properties" in t[s] && "height" in t[s].properties && (v = t[s].properties.height), Object.prototype.toString.call(v) === "[object Function]" && (v = v(t[s])), this.processData(this.outWall3d, c, o, u, v);
        }
        for (t = 0; t < this.outWall3d.vertex.length; t++) {
          for (e = [], a = this.outWall3d.vertex[t].length, n = 0; n < a; n++)
            e.push.apply(e, bt(this.outWall3d.vertex[t][n]));
          a = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, a), i.bufferData(i.ARRAY_BUFFER, new Float32Array(e), i.STATIC_DRAW), this.outWall3d.vertexBuffer[t] = a, i.bindBuffer(
            i.ARRAY_BUFFER,
            null
          ), a = i.createBuffer(), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, a), i.bufferData(i.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.outWall3d.index[t]), i.STATIC_DRAW), this.outWall3d.indexBuffer[t] = a, i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, null);
        }
      } }, { key: "processData", value: function(i, t, e, a, n) {
        var s = i.vertex[i.vertex.length - 1], o = i.index[i.index.length - 1], u = t.length;
        (!o || 65536 <= o.length + 2 * u + 2) && (s = [], o = [], i.vertex.push(s), i.index.push(o)), (i = s.length) && o.push(i - 1, i);
        for (var c = i = 0; c < u; c++) {
          var v = [], l = [], f = t[c];
          v.push(
            f[0],
            f[1]
          ), v.push(f[2] ? Number(f[2]) + n : n), v.push(f[3] ? Number(f[3]) : c), v.push(i), v.push(e[0], e[1], e[2], e[3]), l.push(f[0], f[1]), l.push(f[2] ? Number(f[2]) : 0), l.push(f[3] ? Number(f[3]) : c), l.push(i), l.push(a[0], a[1], a[2], a[3]), f = s.length, s.push(v, l), o.push(f, f + 1), c < u - 1 && (i += this.getDistance(t[c], t[c + 1]));
        }
      } }, { key: "getDistance", value: function(i, t) {
        return Math.sqrt(Math.pow(Math.abs(i[0] - t[0]), 2) + Math.pow(Math.abs(i[1] - t[1]), 2));
      } }]), r;
    }(), Md = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(
          this,
          t,
          e
        )), t.startTime = t.options.startTime || 0, t.endTime = t.options.endTime, t.time = t.startTime, t.autoUpdate = !0, t;
      }
      return Lt(i, r), ct(i, [
        { key: "getDefaultOptions", value: function() {
          return { height: 100, color: [1, 1, 1, 1], trailLength: 3, step: 0.1 };
        } },
        { key: "initialize", value: function(t) {
          this.gl = t, this.dataMgr = new Ed(this, this.gl), this.program = new Ft(this.gl, {
            vertexShader: "uniform mat4 u_matrix;uniform float currentTime;uniform float trailLength;attribute vec4 aPos;attribute float aDistance;attribute vec4 aColor;varying vec4 vColor;varying float vHeight;varying float vTime;varying float vDistance;void main(){vTime=1.0-((currentTime-aPos.w)/trailLength);vHeight=aPos.z;vColor=aColor;vDistance=aDistance;gl_Position=u_matrix*vec4(aPos.xyz,1.0);}",
            fragmentShader: "precision highp float;varying vec4 vColor;varying float vTime;varying float vDistance;varying float vHeight;uniform float currentTime;void main(){if(vTime>1.0||vTime<0.0){}float radius=2.5;float distance=vDistance+currentTime*20.0;float modDistance=mod(distance,9.0);float alpha=1.0;if(modDistance>radius*2.0){discard;}else{float x=abs(modDistance-radius);float y=abs(vHeight-radius);float dis=sqrt(pow(x,2.0)+pow(y,2.0));if(dis>radius){discard;}alpha=dis/radius;}gl_FragColor=vec4(vColor.rgb,1.0-alpha);}"
          });
        } },
        { key: "onChanged", value: function(t, e) {
          this.gl && (this.dataMgr.onLayerChange(t, e), t.endTime === void 0 && (this.endTime = this.dataMgr.getMaxDataLength()));
        } },
        { key: "render", value: function(t) {
          var e = t.gl, a = t.matrix;
          if ((t = this.dataMgr.getData()) && !(0 >= t.vertex.length)) {
            var n = this.getOptions(), s = this.program;
            for (e.useProgram(s.program), this.setGLState({ blend: !0, blendEquation: e.FUNC_ADD, blendFunc: [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA] }), e.enableVertexAttribArray(s.attributes.aPos), e.enableVertexAttribArray(s.attributes.aDistance), e.enableVertexAttribArray(s.attributes.aColor), e.uniformMatrix4fv(s.uniforms.u_matrix, !1, a), e.uniform1f(s.uniforms.currentTime, this.time), e.uniform1f(s.uniforms.trailLength, n.trailLength), a = 0; a < t.vertex.length; a++)
              if (!(0 >= t.vertex[a].length)) {
                var o = t.vertex[a], u = new Float32Array(o[0]).BYTES_PER_ELEMENT;
                o = u * o[0].length, e.bindBuffer(e.ARRAY_BUFFER, t.vertexBuffer[a]), e.vertexAttribPointer(s.attributes.aPos, 4, e.FLOAT, !1, o, 0), e.vertexAttribPointer(s.attributes.aDistance, 1, e.FLOAT, !1, o, 4 * u), e.vertexAttribPointer(
                  s.attributes.aColor,
                  4,
                  e.FLOAT,
                  !1,
                  o,
                  5 * u
                ), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.indexBuffer[a]), e.drawElements(e.TRIANGLE_STRIP, t.index[a].length, e.UNSIGNED_SHORT, 0), e.bindBuffer(e.ARRAY_BUFFER, null), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null);
              }
            this.time += n.step, this.time > this.endTime && (this.time = this.startTime);
          }
        } }
      ]), i;
    }(jt), $n = function(r, i, t, e) {
      if (!(r instanceof i) || e !== void 0 && e in r)
        throw TypeError(t + ": incorrect invocation!");
      return r;
    }, $r = S(function(r) {
      var i = {}, t = {};
      r = r.exports = function(e, a, n, s, o) {
        o = o ? function() {
          return e;
        } : Ho(e), n = ye(n, s, a ? 2 : 1), s = 0;
        var u, c;
        if (typeof o != "function")
          throw TypeError(e + " is not iterable!");
        if (o === void 0 || or.Array !== o && tu[$s] !== o) {
          for (s = o.call(e); !(c = s.next()).done; )
            if (o = qs(s, n, c.value, a), o === i || o === t)
              return o;
        } else
          for (u = Pn(e.length); u > s; s++)
            if (o = a ? n(Oe(c = e[s])[0], c[1]) : n(e[s]), o === i || o === t)
              return o;
      }, r.BREAK = i, r.RETURN = t;
    }), Pd = me("species"), nl = function(r, i) {
      r = Oe(r).constructor;
      var t;
      return r === void 0 || (t = Oe(r)[Pd]) == null ? i : jr(t);
    }, Ld = function(r, i, t) {
      var e = t === void 0;
      switch (i.length) {
        case 0:
          return e ? r() : r.call(t);
        case 1:
          return e ? r(i[0]) : r.call(t, i[0]);
        case 2:
          return e ? r(i[0], i[1]) : r.call(t, i[0], i[1]);
        case 3:
          return e ? r(i[0], i[1], i[2]) : r.call(t, i[0], i[1], i[2]);
        case 4:
          return e ? r(i[0], i[1], i[2], i[3]) : r.call(t, i[0], i[1], i[2], i[3]);
      }
      return r.apply(t, i);
    }, ol = kt.process, pa = kt.setImmediate, al = kt.clearImmediate, sl = kt.MessageChannel, va = kt.Dispatch, ga = 0, sn = {}, un = function() {
      var r = +this;
      if (sn.hasOwnProperty(r)) {
        var i = sn[r];
        delete sn[r], i();
      }
    }, ul = function(r) {
      un.call(r.data);
    };
    if (!pa || !al)
      if (pa = function(r) {
        for (var i = [], t = 1; arguments.length > t; )
          i.push(arguments[t++]);
        return sn[++ga] = function() {
          Ld(typeof r == "function" ? r : Function(r), i);
        }, ln(ga), ga;
      }, al = function(r) {
        delete sn[r];
      }, Gr(ol) == "process")
        var ln = function(r) {
          ol.nextTick(ye(un, r, 1));
        };
      else if (va && va.now)
        ln = function(r) {
          va.now(ye(un, r, 1));
        };
      else if (sl) {
        var ll = new sl(), fl = ll.port2;
        ll.port1.onmessage = ul, ln = ye(fl.postMessage, fl, 1);
      } else
        kt.addEventListener && typeof postMessage == "function" && !kt.importScripts ? (ln = function(r) {
          kt.postMessage(r + "", "*");
        }, kt.addEventListener(
          "message",
          ul,
          !1
        )) : ln = "onreadystatechange" in (Sn ? ni.createElement("script") : {}) ? function(r) {
          Lo.appendChild(Sn ? ni.createElement("script") : {}).onreadystatechange = function() {
            Lo.removeChild(this), un.call(r);
          };
        } : function(r) {
          setTimeout(ye(un, r, 1), 0);
        };
    var ma = pa, hl = kt.MutationObserver || kt.WebKitMutationObserver, ya = kt.process, xa = kt.Promise, cl = Gr(ya) == "process", to = { f: function(r) {
      return new Xf(r);
    } }, eo = function(r) {
      try {
        return { e: !1, v: r() };
      } catch (i) {
        return { e: !0, v: i };
      }
    }, dl = kt.navigator, Cd = dl && dl.userAgent || "", _a = function(r, i) {
      if (Oe(r), Le(i) && i.constructor === r)
        return i;
      r = to.f(r);
      var t = r.resolve;
      return t(i), r.promise;
    }, Aa = function(r, i, t) {
      for (var e in i)
        t && r[e] ? r[e] = i[e] : dr(r, e, i[e]);
      return r;
    }, pl = me("species"), vl = function(r) {
      r = typeof Jt[r] == "function" ? Jt[r] : kt[r], Xe && r && !r[pl] && Ue.f(r, pl, { configurable: !0, get: function() {
        return this;
      } });
    }, gl = function() {
      var r, i, t = function() {
        var o;
        for (cl && (o = ya.domain) && o.exit(); r; ) {
          var u = r.fn;
          r = r.next;
          try {
            u();
          } catch (c) {
            throw r ? e() : i = void 0, c;
          }
        }
        i = void 0, o && o.enter();
      };
      if (cl)
        var e = function() {
          ya.nextTick(t);
        };
      else if (!hl || kt.navigator && kt.navigator.standalone)
        if (xa && xa.resolve) {
          var a = xa.resolve(void 0);
          e = function() {
            a.then(t);
          };
        } else
          e = function() {
            ma.call(kt, t);
          };
      else {
        var n = !0, s = document.createTextNode("");
        new hl(t).observe(s, { characterData: !0 }), e = function() {
          s.data = n = !n;
        };
      }
      return function(o) {
        o = { fn: o, next: void 0 }, i && (i.next = o), r || (r = o, e()), i = o;
      };
    }(), ml = kt.TypeError, pi = kt.process, yl = pi && pi.versions, Sd = yl && yl.v8 || "", fr = kt.Promise, fn = Un(pi) == "process", ro = function() {
    }, xl, hn = xl = to.f, io = !!function() {
      try {
        var r = fr.resolve(1), i = (r.constructor = {})[me("species")] = function(t) {
          t(ro, ro);
        };
        return (fn || typeof PromiseRejectionEvent == "function") && r.then(ro) instanceof i && Sd.indexOf("6.6") !== 0 && Cd.indexOf("Chrome/66") === -1;
      } catch {
      }
    }(), _l = function(r) {
      var i;
      return Le(r) && typeof (i = r.then) == "function" ? i : !1;
    }, wa = function(r, i) {
      if (!r._n) {
        r._n = !0;
        var t = r._c;
        gl(function() {
          for (var e = r._v, a = r._s == 1, n = 0; t.length > n; ) {
            var s = void 0, o = void 0, u = void 0, c = t[n++], v = a ? c.ok : c.fail, l = c.resolve, f = c.reject, p = c.domain;
            try {
              v ? (a || (r._h == 2 && Od(r), r._h = 1), v === !0 ? u = e : (p && p.enter(), u = v(e), p && (p.exit(), s = !0)), u === c.promise ? f(ml("Promise-chain cycle")) : (o = _l(u)) ? o.call(u, l, f) : l(u)) : f(e);
            } catch (d) {
              p && !s && p.exit(), f(d);
            }
          }
          r._c = [], r._n = !1, i && !r._h && Rd(r);
        });
      }
    }, Rd = function(r) {
      ma.call(kt, function() {
        var i = r._v, t = r._h !== 1 && (r._a || r._c).length === 0, e, a;
        if (t) {
          var n = eo(function() {
            fn ? pi.emit("unhandledRejection", i, r) : (e = kt.onunhandledrejection) ? e({ promise: r, reason: i }) : (a = kt.console) && a.error && a.error("Unhandled promise rejection", i);
          });
          r._h = fn || r._h !== 1 && (r._a || r._c).length === 0 ? 2 : 1;
        }
        if (r._a = void 0, t && n.e)
          throw n.v;
      });
    }, Od = function(r) {
      ma.call(kt, function() {
        var i;
        fn ? pi.emit("rejectionHandled", r) : (i = kt.onrejectionhandled) && i({ promise: r, reason: r._v });
      });
    }, vi = function(r) {
      var i = this;
      i._d || (i._d = !0, i = i._w || i, i._v = r, i._s = 2, i._a || (i._a = i._c.slice()), wa(i, !0));
    }, Ta = function(r) {
      var i = this, t;
      if (!i._d) {
        i._d = !0, i = i._w || i;
        try {
          if (i === r)
            throw ml("Promise can't be resolved itself");
          (t = _l(r)) ? gl(function() {
            var e = { _w: i, _d: !1 };
            try {
              t.call(r, ye(Ta, e, 1), ye(vi, e, 1));
            } catch (a) {
              vi.call(e, a);
            }
          }) : (i._v = r, i._s = 1, wa(i, !1));
        } catch (e) {
          vi.call({ _w: i, _d: !1 }, e);
        }
      }
    };
    if (!io) {
      fr = function(r) {
        $n(this, fr, "Promise", "_h"), jr(r), Ea.call(this);
        try {
          r(ye(Ta, this, 1), ye(vi, this, 1));
        } catch (i) {
          vi.call(this, i);
        }
      };
      var Ea = function(r) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
      };
      Ea.prototype = Aa(fr.prototype, { then: function(r, i) {
        var t = hn(nl(this, fr));
        return t.ok = typeof r == "function" ? r : !0, t.fail = typeof i == "function" && i, t.domain = fn ? pi.domain : void 0, this._c.push(t), this._a && this._a.push(t), this._s && wa(
          this,
          !1
        ), t.promise;
      }, catch: function(r) {
        return this.then(void 0, r);
      } });
      var Bd = function() {
        var r = new Ea();
        this.promise = r, this.resolve = ye(Ta, r, 1), this.reject = ye(vi, r, 1);
      };
      to.f = hn = function(r) {
        return r === fr || r === Al ? new Bd(r) : xl(r);
      };
    }
    wt(wt.G + wt.W + wt.F * !io, { Promise: fr }), Wr(fr, "Promise"), vl("Promise");
    var Al = Jt.Promise;
    wt(wt.S + wt.F * !io, "Promise", { reject: function(r) {
      var i = hn(this), t = i.reject;
      return t(r), i.promise;
    } }), wt(wt.S + 1 * wt.F, "Promise", { resolve: function(r) {
      return _a(this === Al ? fr : this, r);
    } }), wt(
      wt.S + wt.F * !(io && ru(function(r) {
        fr.all(r).catch(ro);
      })),
      "Promise",
      { all: function(r) {
        var i = this, t = hn(i), e = t.resolve, a = t.reject, n = eo(function() {
          var s = [], o = 0, u = 1;
          $r(r, !1, function(c) {
            var v = o++, l = !1;
            s.push(void 0), u++, i.resolve(c).then(function(f) {
              l || (l = !0, s[v] = f, --u || e(s));
            }, a);
          }), --u || e(s);
        });
        return n.e && a(n.v), t.promise;
      }, race: function(r) {
        var i = this, t = hn(i), e = t.reject, a = eo(function() {
          $r(r, !1, function(n) {
            i.resolve(n).then(t.resolve, e);
          });
        });
        return a.e && e(a.v), t.promise;
      } }
    ), wt(wt.P + wt.R, "Promise", { finally: function(r) {
      var i = nl(this, Jt.Promise || kt.Promise), t = typeof r == "function";
      return this.then(t ? function(e) {
        return _a(i, r()).then(function() {
          return e;
        });
      } : r, t ? function(e) {
        return _a(i, r()).then(function() {
          throw e;
        });
      } : r);
    } }), wt(wt.S, "Promise", { try: function(r) {
      var i = to.f(this);
      return r = eo(r), (r.e ? i.reject : i.resolve)(r.v), i.promise;
    } });
    var Dd = Jt.Promise, bd = S(function(r) {
      r.exports = { default: Dd, __esModule: !0 };
    }), zr = L(bd), kr = function(r, i) {
      if (!Le(r) || r._t !== i)
        throw TypeError("Incompatible receiver, " + i + " required!");
      return r;
    }, Fd = Ue.f, wl = Fn.fastKey, cn = Xe ? "_s" : "size", no = function(r, i) {
      var t = wl(i);
      if (t !== "F")
        return r._i[t];
      for (r = r._f; r; r = r.n)
        if (r.k == i)
          return r;
    }, Ma = { getConstructor: function(r, i, t, e) {
      var a = r(function(n, s) {
        $n(n, a, i, "_i"), n._t = i, n._i = Cr(null), n._f = void 0, n._l = void 0, n[cn] = 0, s != null && $r(s, t, n[e], n);
      });
      return Aa(a.prototype, { clear: function() {
        for (var n = kr(this, i), s = n._i, o = n._f; o; o = o.n)
          o.r = !0, o.p && (o.p = o.p.n = void 0), delete s[o.i];
        n._f = n._l = void 0, n[cn] = 0;
      }, delete: function(n) {
        var s = kr(this, i);
        if (n = no(s, n)) {
          var o = n.n, u = n.p;
          delete s._i[n.i], n.r = !0, u && (u.n = o), o && (o.p = u), s._f == n && (s._f = o), s._l == n && (s._l = u), s[cn]--;
        }
        return !!n;
      }, forEach: function(n) {
        kr(this, i);
        for (var s = ye(n, 1 < arguments.length ? arguments[1] : void 0, 3), o; o = o ? o.n : this._f; )
          for (s(o.v, o.k, this); o && o.r; )
            o = o.p;
      }, has: function(n) {
        return !!no(kr(this, i), n);
      } }), Xe && Fd(a.prototype, "size", { get: function() {
        return kr(this, i)[cn];
      } }), a;
    }, def: function(r, i, t) {
      var e = no(r, i), a;
      return e ? e.v = t : (r._l = e = { i: a = wl(i, !0), k: i, v: t, p: i = r._l, n: void 0, r: !1 }, r._f || (r._f = e), i && (i.n = e), r[cn]++, a !== "F" && (r._i[a] = e)), r;
    }, getEntry: no, setStrong: function(r, i, t) {
      Oo(r, i, function(e, a) {
        this._t = kr(e, i), this._k = a, this._l = void 0;
      }, function() {
        for (var e = this._k, a = this._l; a && a.r; )
          a = a.p;
        return this._t && (this._l = a = a ? a.n : this._t._f) ? e == "keys" ? Sr(0, a.k) : e == "values" ? Sr(0, a.v) : Sr(0, [a.k, a.v]) : (this._t = void 0, Sr(1));
      }, t ? "entries" : "values", !t, !0), vl(i);
    } }, Id = me("species"), zd = function(r, i) {
      if (Io(r)) {
        var t = r.constructor;
        typeof t != "function" || t !== Array && !Io(t.prototype) || (t = void 0), Le(t) && (t = t[Id], t === null && (t = void 0));
      }
      return new (t === void 0 ? Array : t)(i);
    }, kd = Ue.f, Nd = function(r, i) {
      var t = r == 1, e = r == 2, a = r == 3, n = r == 4, s = r == 6, o = r == 5 || s, u = i || zd;
      return function(c, v, l) {
        var f = Object(Mr(c)), p = To(f);
        v = ye(v, l, 3), l = Pn(p.length);
        var d = 0;
        c = t ? u(c, l) : e ? u(c, 0) : void 0;
        for (var g, A; l > d; d++)
          if ((o || d in p) && (g = p[d], A = v(g, d, f), r)) {
            if (t)
              c[d] = A;
            else if (A)
              switch (r) {
                case 3:
                  return !0;
                case 5:
                  return g;
                case 6:
                  return d;
                case 2:
                  c.push(g);
              }
            else if (n)
              return !1;
          }
        return s ? -1 : a || n ? n : c;
      };
    }(0);
    (function(r, i, t, e, a, n) {
      var s = kt[r], o = s, u = a ? "set" : "add", c = o && o.prototype, v = {};
      return Xe && typeof o == "function" && (n || c.forEach && !Pr(function() {
        new o().entries().next();
      })) ? (o = i(function(l, f) {
        $n(l, o, r, "_c"), l._c = new s(), f != null && $r(f, a, l[u], l);
      }), Nd("add clear delete forEach get has set keys values entries toJSON".split(" "), function(l) {
        var f = l == "add" || l == "set";
        l in c && (!n || l != "clear") && dr(o.prototype, l, function(p, d) {
          return $n(this, o, l), !f && n && !Le(p) ? l == "get" ? void 0 : !1 : (p = this._c[l](p === 0 ? 0 : p, d), f ? this : p);
        });
      }), n || kd(o.prototype, "size", { get: function() {
        return this._c.size;
      } })) : (o = e.getConstructor(i, r, a, u), Aa(o.prototype, t), Fn.NEED = !0), Wr(o, r), v[r] = o, wt(
        wt.G + wt.W + wt.F,
        v
      ), n || e.setStrong(o, r, a), o;
    })("Map", function(r) {
      return function() {
        return r(this, 0 < arguments.length ? arguments[0] : void 0);
      };
    }, { get: function(r) {
      return (r = Ma.getEntry(kr(this, "Map"), r)) && r.v;
    }, set: function(r, i) {
      return Ma.def(kr(this, "Map"), r === 0 ? 0 : r, i);
    } }, Ma, !0), wt(wt.P + wt.R, "Map", { toJSON: function(r) {
      return function() {
        if (Un(this) != r)
          throw TypeError(r + "#toJSON isn't generic");
        var i = [];
        return $r(this, !1, i.push, i, void 0), i;
      };
    }("Map") }), function(r) {
      wt(wt.S, r, { of: function() {
        for (var i = arguments.length, t = Array(i); i--; )
          t[i] = arguments[i];
        return new this(t);
      } });
    }("Map"), function(r) {
      wt(wt.S, r, { from: function(i, t, e) {
        var a;
        if (jr(this), (a = t !== void 0) && jr(t), i == null)
          return new this();
        var n = [];
        if (a) {
          var s = 0, o = ye(t, e, 2);
          $r(i, !1, function(u) {
            n.push(o(u, s++));
          });
        } else
          $r(i, !1, n.push, n);
        return new this(n);
      } });
    }("Map");
    var Ud = Jt.Map, Hd = S(function(r) {
      r.exports = { default: Ud, __esModule: !0 };
    }), Nr = L(Hd), Gd = S(function(r, i) {
      i.__esModule = !0;
      var t = pr && pr.__esModule ? pr : { default: pr };
      i.default = function(e, a, n) {
        return a in e ? (0, t.default)(e, a, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[a] = n, e;
      };
    }), gi = L(Gd), dn, pn, jd = (dn = {}, gi(dn, 1, 1), gi(dn, 2, 1), gi(dn, 3, 1), dn), Wd = (pn = {}, gi(pn, 1, 1), gi(pn, 2, 1), gi(pn, 3, 1), pn), ti = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.vertCount = 0, t.bufferMap = {}, t.bufferData = [], t.autoUpdate = !0, e = t.canvas = document.createElement("canvas"), t.ctx = e.getContext("2d"), t.iconHash = new Nr(), t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return {
          color: [1, 1, 1, 0.8],
          speed: 1,
          size: 5,
          pointFade: !0,
          pointFadeBuffer: 1,
          minLineLength: 2,
          animationType: 2,
          shapeType: 2,
          depthTest: !1,
          delay: 0,
          unit: "px",
          padding: 0
        };
      } }, { key: "initialize", value: function(t) {
        this.gl = t, this.texture = null, this.isUseTexture = !1;
        var e = this.getOptions();
        this.updateUniformsFromOptions(e), this.program = new Ft(this.gl, {
          vertexShader: "precision highp float;attribute vec3 aPos;attribute vec3 aNextPos;attribute vec4 aColor;attribute float aIndex;attribute float aNextIndex;attribute float aLength;attribute float aSpeed;attribute float aDelay;attribute vec3 aUV;uniform float uSize;uniform mat4 u_matrix;uniform float uOriginSpeed;uniform float uElapsedSteps;uniform int uAnimationType;uniform int uPointFade;uniform float uPointFadeBuffer;uniform float uZoomUnits;varying float vAddOpacity;varying vec3 vUV;varying vec4 vColor;void main(){vColor=aColor;if(uAnimationType==1){if(abs(aIndex-mod(uElapsedSteps,aLength))>.1){gl_Position=vec4(-2.,-2.,0,1.0);return;}gl_Position=u_matrix*vec4(aPos.xyz,1.0);vAddOpacity=1.;}else if(uAnimationType==2){float lineLength=aLength-1.;float cIndex=mod(uElapsedSteps,lineLength);float rest=cIndex-aIndex;if(rest<1.&&rest>=0.){if(uPointFade==1){if(cIndex<uPointFadeBuffer){vAddOpacity=cIndex/uPointFadeBuffer;}else if(cIndex>lineLength-uPointFadeBuffer){vAddOpacity=(lineLength-cIndex)/uPointFadeBuffer;}else{vAddOpacity=1.;}}else{vAddOpacity=1.;}gl_Position=u_matrix*vec4(aPos.x+(aNextPos.x-aPos.x)*rest,aPos.y+(aNextPos.y-aPos.y)*rest,aPos.z+(aNextPos.z-aPos.z)*rest,1.0);}else{gl_Position=vec4(-2.,-2.,0,1.0);return;}}else if(uAnimationType==3){float speedRatio=aSpeed/uOriginSpeed;float percent=mod(mod(uElapsedSteps*aSpeed,aLength)/aLength-aDelay,1.0);if(percent<=aNextIndex&&percent>=aIndex){if(uPointFade==1){float fadePercent=uPointFadeBuffer*1000./aLength;if(percent<fadePercent){vAddOpacity=percent/fadePercent;}else if(percent>1.-fadePercent){vAddOpacity=(1.-percent)/fadePercent;}else{vAddOpacity=1.;}}else{vAddOpacity=1.;}float rest=(percent-aIndex)/(aNextIndex-aIndex);gl_Position=u_matrix*vec4(aPos.x+(aNextPos.x-aPos.x)*rest,aPos.y+(aNextPos.y-aPos.y)*rest,aPos.z+(aNextPos.z-aPos.z)*rest,1.0);}else{gl_Position=vec4(-2.,-2.,0,1.0);return;}}vUV=aUV;gl_PointSize=uSize/uZoomUnits;}",
          fragmentShader: "precision highp float;uniform int ushapeType;uniform bool uUseTexture;uniform sampler2D uSampler;varying float vAddOpacity;varying vec4 vColor;varying vec3 vUV;void main(){if(ushapeType==2){float d=distance(gl_PointCoord,vec2(0.5,0.5));if(d>0.5){discard;}gl_FragColor=vec4(vColor.rgb,vColor.a*vAddOpacity);}else if(ushapeType==3){float d=distance(gl_PointCoord,vec2(0.5,0.5));if(d>0.5){discard;}gl_FragColor=vec4(vColor.rgb,vColor.a*smoothstep(1.0,0.0,d*2.)*vAddOpacity);}else{gl_FragColor=vec4(vColor.rgb,vColor.a*vAddOpacity);}if(uUseTexture){float ratio=vUV.z;vec2 uv=vUV.xy;gl_FragColor=texture2D(uSampler,vec2(gl_PointCoord.x*ratio+uv.x,1.0-(uv.y+gl_PointCoord.y*ratio)));}}"
        }), this.buffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, this.buffer);
      } }, { key: "bindAttributeBufferData", value: function(t, e, a, n) {
        var s = t.createBuffer();
        t.bindBuffer(t.ARRAY_BUFFER, s), a = new Float32Array(a), t.bufferData(t.ARRAY_BUFFER, a, t.STATIC_DRAW), this.bufferMap[e] = { buffer: s, data: a, elementSize: n };
      } }, { key: "onChanged", value: function(t, e) {
        var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {};
        this.gl && (Array.isArray(e) || (e = []), this.processCache(t, e, a));
      } }, { key: "processCache", value: function(t, e, a) {
        var n = this;
        this.cachedData = [];
        for (var s = t.icon, o = t.speed, u = t.color, c = 0; c < e.length; c++) {
          var v = e[c].geometry.coordinates, l = this.getProperty("color", u, e[c]);
          l = this.normizedColor(l);
          var f = this.getProperty("icon", s, e[c]), p = this.getProperty("speed", o, e[c]), d = this.getProperty("delay", 0, e[c]);
          v && (this.cachedData.push({ coordinates: v, color: l, icon: f, speed: p, delay: d }), this.iconHash.get(f) || this.iconHash.set(f, f));
        }
        e = Hn(this.iconHash.entries()).filter(function(g) {
          return typeof g[1] == "string";
        }).map(function(g) {
          var A = Vt(g, 2)[0];
          return new zr(function(_, M) {
            n.url2canvas(A, function(P) {
              n.iconHash.set(A, P), _();
            });
          });
        }), zr.all(e).then(function(g) {
          n.buildSprite(t), a.autoRender !== !1 && n.webglLayer && n.webglLayer.render();
        });
      } }, { key: "buildSprite", value: function(t) {
        var e = t.padding, a = this.canvas, n = this.ctx, s = 0, o = [], u = new Nr();
        if (t.icon) {
          s = !0;
          var c = !1, v = void 0;
          try {
            for (var l = si(this.iconHash), f; !(s = (f = l.next()).done); s = !0) {
              var p = Vt(f.value, 2), d = p[1];
              if (typeof d != "string") {
                var g = d.width, A = g + e;
                o.push({ w: A, h: A, width: g, key: p[0], icon: d });
              }
            }
          } catch (_) {
            c = !0, v = _;
          } finally {
            try {
              !s && l.return && l.return();
            } finally {
              if (c)
                throw v;
            }
          }
          for (l = Er(o), f = 0; f < o.length; f++)
            p = o[f], u.get(p.key) || u.set(p.key, p);
          for (s = Math.max(b(l.w), b(l.h)), a.width = s || 1, a.height = s || 1, n.save(), a = 0; a < o.length; a++)
            l = o[a], n.drawImage(l.icon, l.x + e, l.y + e, l.width, l.width);
          n.restore();
        }
        this.loadTexture(), this.buildVertex(t, u, s);
      } }, { key: "buildVertex", value: function(t, e, a) {
        var n = this.gl;
        this.updateUniformsFromOptions(t);
        for (var s = [], o = [], u = [], c = [], v = [], l = [], f = [], p = [], d = [], g = t.minLineLength, A = 0; A < this.cachedData.length; A++) {
          var _ = this.cachedData[A], M = _.coordinates, P = _.icon, R = _.speed, B = _.delay;
          _ = _.color;
          var F = M.length, I = [];
          if (!(F < g)) {
            for (t.icon && (I = (I = e.get(P)) ? [I.x / a, I.y / a, I.w / a] : [0, 0, 0]), P = 0; P < F; ++P) {
              var U = this.normizedPoint(M[P]);
              s.push(U[0]), s.push(U[1]), s.push(U[2] || 0), o.push.apply(o, bt(_)), d.push.apply(d, bt(I)), this.animationType !== 3 && (u.push(P), v.push(F));
            }
            if (this.animationType !== 1) {
              for (I = s.length - 3 * F + 3, F = s.length, M = I; M < F; ++M)
                l.push(s[M]);
              if (s.splice(F - 3, 3), d.splice(F - 3, 2), o.splice(F - 3, 4), this.animationType === 2)
                u.pop(), v.pop();
              else if (this.animationType === 3) {
                for (I -= 3, F = s.length - 3, M = 0, _ = [], P = I; P <= F; P += 3)
                  I = Math.sqrt(Math.pow(l[P] - s[P], 2) + Math.pow(l[P + 1] - s[P + 1], 2) + Math.pow(l[P + 2] - s[P + 2], 2)), M += I, _.push(I);
                for (u.push(0), f.push(R), B /= M / R, p.push(B), P = F = 0, U = _.length - 1; P < U; ++P)
                  F += _[P], I = F / M, u.push(I), c.push(I), v.push(M), f.push(R), p.push(B);
                c.push(1), v.push(M);
              }
            }
          }
        }
        this.bindAttributeBufferData(n, "aPos", s, 3), this.bindAttributeBufferData(n, "aIndex", u, 1), this.bindAttributeBufferData(n, "aLength", v, 1), this.bindAttributeBufferData(
          n,
          "aColor",
          o,
          4
        ), this.animationType !== 1 && (this.bindAttributeBufferData(n, "aNextPos", l, 3), this.animationType === 3 && (this.bindAttributeBufferData(n, "aNextIndex", c, 1), this.bindAttributeBufferData(n, "aSpeed", f, 1), this.bindAttributeBufferData(n, "aDelay", p, 1))), t.icon && this.bindAttributeBufferData(n, "aUV", d, 3), this.vertCount = s.length / 3;
      } }, { key: "updateUniformsFromOptions", value: function(t) {
        this.startTime = (/* @__PURE__ */ new Date()).getTime(), jd[t.animationType] || (t.animationType = 2), Wd[t.shapeType] || (t.shapeType = 2), (isNaN(t.minLineLength) || 2 > t.minLineLength) && (t.minLineLength = 2), this.animationType = t.animationType;
      } }, { key: "renderAttributeArr", value: function(t, e, a) {
        if (e.attributes[a] !== void 0) {
          var n = this.bufferMap[a];
          n && (t.bindBuffer(t.ARRAY_BUFFER, n.buffer), t.enableVertexAttribArray(e.attributes[a]), t.vertexAttribPointer(e.attributes[a], n.elementSize, t.FLOAT, !1, n.data.BYTES_PER_ELEMENT * n.elementSize, 0));
        }
      } }, { key: "render", value: function(t) {
        var e = t.gl;
        if (t = t.matrix, !(0 >= this.vertCount)) {
          var a = this.getOptions(), n = this.program;
          e.useProgram(n.program), this.renderAttributeArr(e, n, "aPos"), this.renderAttributeArr(e, n, "aIndex"), this.renderAttributeArr(e, n, "aLength"), this.renderAttributeArr(e, n, "aColor"), this.animationType !== 1 && (this.renderAttributeArr(e, n, "aNextPos"), this.animationType === 3 && (this.renderAttributeArr(e, n, "aNextIndex"), this.renderAttributeArr(e, n, "aSpeed"), this.renderAttributeArr(e, n, "aDelay"))), a.icon && this.texture && (this.renderAttributeArr(e, n, "aUV"), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, this.texture), e.uniform1i(
            n.uniforms.uSampler,
            0
          )), e.uniform1i(n.uniforms.uUseTexture, this.isUseTexture);
          var s = (/* @__PURE__ */ new Date()).getTime() - this.startTime;
          s < this.options.delay ? s = 0 : (s -= this.options.delay, s = this.animationType === 1 ? Math.round(s / 1e3 * this.options.speed * 20) : this.animationType === 3 ? s / 1e3 * this.options.speed * 1e3 : s / 1e3 * this.options.speed);
          var o = this.options.size;
          if (Array.isArray(o)) {
            var u = this.map.map.getMaxZoom(), c = this.map.map.getMinZoom();
            o = o[0] + (this.map.getZoom() - c) / (u - c) * (o[1] - o[0]);
          }
          e.uniformMatrix4fv(n.uniforms.u_matrix, !1, t), e.uniform1f(
            n.uniforms.uSize,
            o
          ), e.uniform1f(n.uniforms.uElapsedSteps, s), e.uniform1f(n.uniforms.uOriginSpeed, this.options.speed), e.uniform1i(n.uniforms.uAnimationType, this.animationType), e.uniform1i(n.uniforms.ushapeType, this.options.shapeType), e.uniform1i(n.uniforms.uPointFade, this.options.pointFade ? 1 : 0), e.uniform1f(n.uniforms.uPointFadeBuffer, this.options.pointFadeBuffer), e.uniform1f(n.uniforms.uZoomUnits, this.options.unit === "m" ? this.map.getZoomUnits() : 1), this.setGLState({ blend: !0, blendEquation: e.FUNC_ADD, blendFunc: a.blend === "lighter" ? [e.SRC_ALPHA, e.ONE] : [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA], depthTest: !!a.depthTest }), e.drawArrays(e.POINTS, 0, this.vertCount);
        }
      } }, { key: "url2canvas", value: function(t, e) {
        if ((typeof t > "u" ? "undefined" : be(t)) === "object")
          e(t);
        else {
          var a = new Image();
          a.crossOrigin = "anonymous", a.onload = function() {
            var n = document.createElement("canvas");
            n.width = 128, n.height = 128, n.getContext("2d").drawImage(a, 0, 0, 128, 128), e(n);
          }, a.src = t;
        }
      } }, { key: "loadTexture", value: function() {
        var t = this;
        this.canvas && this.getOptions().icon ? Ot(this.gl, this.canvas, function(e) {
          t.isUseTexture = !0, t.texture = e;
        }) : (this.isUseTexture = !1, this.texture = null);
      } }]), i;
    }(jt);
    ti.ANIMATION_TYPE_LEAP = 1, ti.ANIMATION_TYPE_SMOOTH = 2, ti.ANIMATION_TYPE_UNIFORM_SPEED = 3, ti.SHAPE_TYPE_SQUARE = 1, ti.SHAPE_TYPE_CIRCLE = 2, ti.SHAPE_TYPE_CIRCLE_GRADIENT = 3;
    var Xd = function() {
      function r(i, t) {
        ft(this, r), this.layer = i, this.gl = t, this.initData();
      }
      return ct(r, [
        { key: "initData", value: function() {
          this.outWall3d = { vertex: [], vertexBuffer: [], index: [], indexBuffer: [] };
        } },
        { key: "getData", value: function() {
          return this.outWall3d;
        } },
        { key: "onLayerChange", value: function(i, t) {
          this.initData();
          for (var e = i.color, a = i.height, n = i.gradient, s = i.enablePreciseMap, o = i.repeatMap, u = i.closePath, c = this.gl, v = 0; v < t.length; v++) {
            var l = t[v], f = l.color || e;
            "properties" in l && "color" in l.properties && (f = l.properties.color), n || Object.prototype.toString.call(f) !== "[object Function]" || (f = f(l));
            var p = this.layer.normizedColor(n ? n[0] : f);
            f = this.layer.normizedColor(n ? n[1] : f);
            var d = l.height || a;
            if ("properties" in l && "height" in l.properties && (d = l.properties.height), Object.prototype.toString.call(d) === "[object Function]" && (d = d(l)), l.geometry.type === "MultiLineString" || l.geometry.type === "Polygon")
              for (var g = 0; g < l.geometry.coordinates.length; g++) {
                var A = l.geometry.coordinates[g];
                u && !W(A) && A.push(A[0]);
                for (var _ = [], M = [], P = 0, R = 0; R < A.length; R++) {
                  var B = this.layer.normizedPoint(A[R]);
                  if (0 < R && (s || o)) {
                    var F = this.layer.normizedPoint(A[R - 1]);
                    P += Math.sqrt(Math.pow(B[0] - F[0], 2) + Math.pow(B[1] - F[1], 2));
                  }
                  _.push(B), M.push(P);
                }
                this.processData(this.outWall3d, i, _, M, p, f, d);
              }
            else {
              for (l = l.geometry.coordinates, u && !W(l) && l.push(l[0]), g = [], A = [], M = _ = 0; M < l.length; M++)
                P = this.layer.normizedPoint(l[M]), 0 < M && (s || o) && (R = this.layer.normizedPoint(l[M - 1]), _ += Math.sqrt(Math.pow(P[0] - R[0], 2) + Math.pow(P[1] - R[1], 2))), g.push(P), A.push(_);
              this.processData(this.outWall3d, i, g, A, p, f, d);
            }
          }
          for (i = 0; i < this.outWall3d.vertex.length; i++) {
            for (t = [], e = this.outWall3d.vertex[i].length, a = 0; a < e; a++)
              t.push.apply(t, bt(this.outWall3d.vertex[i][a]));
            e = c.createBuffer(), c.bindBuffer(c.ARRAY_BUFFER, e), c.bufferData(
              c.ARRAY_BUFFER,
              new Float32Array(t),
              c.STATIC_DRAW
            ), this.outWall3d.vertexBuffer[i] = e, c.bindBuffer(c.ARRAY_BUFFER, null), e = c.createBuffer(), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, e), c.bufferData(c.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.outWall3d.index[i]), c.STATIC_DRAW), this.outWall3d.indexBuffer[i] = e, c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, null);
          }
        } },
        { key: "processData", value: function(i, t, e, a, n, s, o) {
          var u = a[a.length - 1], c = i.vertex[i.vertex.length - 1], v = i.index[i.index.length - 1], l = e.length;
          for ((!v || 65536 <= v.length + 2 * l + 2) && (c = [], v = [], i.vertex.push(c), i.index.push(v)), (i = c.length) && v.push(i - 1, i), i = 0; i < l; i++) {
            var f = [], p = [], d = e[i];
            f.push(d[0], d[1], d[2] + o), f.push(n[0], n[1], n[2], n[3]), p.push(d[0], d[1], d[2]), p.push(s[0], s[1], s[2], s[3]), t.texture && (d = a[i], t.enablePreciseMap || t.repeatMap ? (f.push(d, 1, u), p.push(d, 0, u)) : (f.push(i, 1, l - 1), p.push(i, 0, l - 1))), d = c.length, c.push(f, p), v.push(d, d + 1);
          }
        } }
      ]), r;
    }(), Vd = function(r) {
      function i(t, e) {
        return ft(this, i), Pt(this, (i.__proto__ || yt(i)).call(this, t, e));
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return {
          texture: null,
          enablePreciseMap: !1,
          repeatMap: 0,
          height: 100,
          closePath: !1,
          color: [1, 1, 1, 1]
        };
      } }, { key: "initialize", value: function(t) {
        this.gl = t, this.dataMgr = new Xd(this, this.gl), this.texture = null, this.isUseTexture = !1, this.vertexLength = 10, this.program = new Ft(this.gl, {
          vertexShader: "uniform mat4 u_matrix;uniform bool uUseTexture;attribute vec3 aPos;attribute vec4 aColor;attribute vec2 aTextureCoords;attribute float aTotalDistance;varying vec2 vTextureCoords;varying float vTotalDistance;varying vec4 vColor;void main(){if(aColor.w>=0.0&&aColor.w<=1.0){vColor=aColor;}else{vColor=vec4(aColor.xyz,1.0);}if(uUseTexture){vTextureCoords=aTextureCoords;vTotalDistance=aTotalDistance;}gl_Position=u_matrix*vec4(aPos,1.0);}",
          fragmentShader: "precision highp float;uniform bool uUseTexture;uniform float uDistance;uniform sampler2D uSampler;varying vec2 vTextureCoords;varying float vTotalDistance;varying vec4 vColor;void main(){if(uUseTexture){float uvx=vTextureCoords.x/vTotalDistance;if(uDistance>0.0){uvx=mod(vTextureCoords.x,uDistance)/uDistance;}gl_FragColor=vec4(1.0,1.0,1.0,1.0)*texture2D(uSampler,vec2(uvx,vTextureCoords.y));}else{gl_FragColor=vColor;}}"
        }), this.loadTexture();
      } }, { key: "onChanged", value: function(t, e) {
        var a = this;
        this.gl && (this.loadTextureTime && clearTimeout(this.loadTextureTime), this.loadTextureTime = setTimeout(function() {
          a.loadTexture(function() {
            a.dataMgr.onLayerChange(t, e), a.webglLayer.render();
          });
        }, 0));
      } }, { key: "render", value: function(t) {
        var e = t.gl, a = t.matrix;
        if ((t = this.dataMgr.getData()) && !(0 >= t.vertex.length)) {
          var n = this.getOptions(), s = this.program;
          if (e.useProgram(s.program), n.texture) {
            if (!this.texture)
              return;
            e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, this.texture), e.uniform1i(
              s.uniforms.uSampler,
              0
            );
          }
          for (this.setGLState({ blend: !0, blendEquation: e.FUNC_ADD, blendFunc: [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA], depthMask: !!n.texture, depthFunc: n.texture ? e.LESS : e.LEQUAL }), n.texture ? e.enableVertexAttribArray(s.attributes.aTextureCoords) : e.disableVertexAttribArray(s.attributes.aTextureCoords), e.enableVertexAttribArray(s.attributes.aPos), e.enableVertexAttribArray(s.attributes.aColor), e.uniformMatrix4fv(s.uniforms.u_matrix, !1, a), e.uniform1i(s.uniforms.uUseTexture, this.isUseTexture), e.uniform1f(
            s.uniforms.uDistance,
            n.repeatMap
          ), a = 0; a < t.vertex.length; a++)
            if (!(0 >= t.vertex[a].length)) {
              var o = t.vertex[a], u = new Float32Array(o[0]).BYTES_PER_ELEMENT;
              o = u * o[0].length, e.bindBuffer(e.ARRAY_BUFFER, t.vertexBuffer[a]), e.vertexAttribPointer(s.attributes.aPos, 3, e.FLOAT, !1, o, 0), e.vertexAttribPointer(s.attributes.aColor, 4, e.FLOAT, !1, o, 3 * u), n.texture && (e.vertexAttribPointer(s.attributes.aTextureCoords, 2, e.FLOAT, !1, o, 7 * u), e.vertexAttribPointer(s.attributes.aTotalDistance, 1, e.FLOAT, !1, o, 9 * u)), e.bindBuffer(
                e.ELEMENT_ARRAY_BUFFER,
                t.indexBuffer[a]
              ), e.drawElements(e.TRIANGLE_STRIP, t.index[a].length, e.UNSIGNED_SHORT, 0), e.bindBuffer(e.ARRAY_BUFFER, null), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null);
            }
        }
      } }, { key: "loadTexture", value: function(t) {
        var e = this, a = this.getOptions();
        a.texture ? (this.isUseTexture = !0, Ot(this.gl, a.texture, function(n, s) {
          e.image = s, e.texture = n, t && t(), e.webglLayer.render();
        })) : (this.isUseTexture = !1, this.image = this.texture = null, t && t());
      } }]), i;
    }(jt), Yd = function() {
      function r(i, t) {
        ft(this, r), this.layer = i, this.gl = t, this.initData();
      }
      return ct(r, [
        { key: "initData", value: function() {
          this.outWall3d = { vertex: [], vertexBuffer: [], index: [], indexBuffer: [] }, this.maxLength = 0;
        } },
        { key: "getData", value: function() {
          return this.outWall3d;
        } },
        { key: "getMaxDataLength", value: function() {
          return this.maxLength;
        } },
        { key: "onLayerChange", value: function(i, t) {
          this.initData();
          var e = i.color, a = i.height, n = i.gradient;
          i = this.gl;
          for (var s = 0; s < t.length; s++) {
            var o = t[s].geometry.coordinates, u = o.length;
            this.maxLength = u > this.maxLength ? u : this.maxLength;
            for (var c = [], v = 0; v < u; v++) {
              var l = this.layer.normizedPoint(o[v]);
              c.push(l);
            }
            u = t[s].color || e, "properties" in t[s] && "color" in t[s].properties && (u = t[s].properties.color), n || Object.prototype.toString.call(u) !== "[object Function]" || (u = u(t[s])), o = this.layer.normizedColor(n ? n[0] : u), u = this.layer.normizedColor(n ? n[1] : u), v = t[s].height || a, "properties" in t[s] && "height" in t[s].properties && (v = t[s].properties.height), Object.prototype.toString.call(v) === "[object Function]" && (v = v(t[s])), this.processData(this.outWall3d, c, o, u, v);
          }
          for (t = 0; t < this.outWall3d.vertex.length; t++) {
            for (e = [], a = this.outWall3d.vertex[t].length, n = 0; n < a; n++)
              e.push.apply(e, bt(this.outWall3d.vertex[t][n]));
            a = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, a), i.bufferData(i.ARRAY_BUFFER, new Float32Array(e), i.STATIC_DRAW), this.outWall3d.vertexBuffer[t] = a, i.bindBuffer(i.ARRAY_BUFFER, null), a = i.createBuffer(), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, a), i.bufferData(i.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.outWall3d.index[t]), i.STATIC_DRAW), this.outWall3d.indexBuffer[t] = a, i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, null);
          }
        } },
        { key: "processData", value: function(i, t, e, a, n) {
          var s = i.vertex[i.vertex.length - 1], o = i.index[i.index.length - 1], u = t.length;
          for ((!o || 65536 <= o.length + 2 * u + 2) && (s = [], o = [], i.vertex.push(s), i.index.push(o)), (i = s.length) && o.push(i - 1, i), i = 0; i < u; i++) {
            var c = [], v = [], l = t[i];
            c.push(l[0], l[1]), c.push(l[2] ? Number(l[2]) + n : n), c.push(l[3] ? Number(l[3]) : i), c.push(e[0], e[1], e[2], e[3]), v.push(l[0], l[1]), v.push(l[2] ? Number(l[2]) : 0), v.push(l[3] ? Number(l[3]) : i), v.push(a[0], a[1], a[2], a[3]), l = s.length, s.push(c, v), o.push(l, l + 1);
          }
        } }
      ]), r;
    }(), Zd = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.startTime = t.options.startTime || 0, t.endTime = t.options.endTime, t.time = t.startTime, t.autoUpdate = !0, t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return { height: 100, color: [1, 1, 1, 1], trailLength: 3, step: 0.1 };
      } }, { key: "initialize", value: function(t) {
        this.gl = t, this.dataMgr = new Yd(this, this.gl), this.program = new Ft(this.gl, {
          vertexShader: "uniform mat4 u_matrix;uniform float currentTime;uniform float trailLength;attribute vec4 aPos;attribute vec4 aColor;varying vec4 vColor;varying float vTime;void main(){vTime=1.0-((currentTime-aPos.w)/trailLength);vColor=aColor;gl_Position=u_matrix*vec4(aPos.xyz,1.0);}",
          fragmentShader: "precision highp float;varying vec4 vColor;varying float vTime;void main(){if(vTime>1.0||vTime<0.0){discard;}gl_FragColor=vec4(vColor.rgb,1.0*vTime);}"
        });
      } }, { key: "onChanged", value: function(t, e) {
        this.gl && (this.dataMgr.onLayerChange(t, e), t.endTime === void 0 && (this.endTime = this.dataMgr.getMaxDataLength()));
      } }, { key: "render", value: function(t) {
        var e = t.gl, a = t.matrix;
        if ((t = this.dataMgr.getData()) && !(0 >= t.vertex.length)) {
          var n = this.getOptions(), s = this.program;
          for (e.useProgram(s.program), this.setGLState({
            blend: !0,
            blendEquation: e.FUNC_ADD,
            blendFunc: [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA]
          }), e.enableVertexAttribArray(s.attributes.aPos), e.enableVertexAttribArray(s.attributes.aColor), e.uniformMatrix4fv(s.uniforms.u_matrix, !1, a), e.uniform1f(s.uniforms.currentTime, this.time), e.uniform1f(s.uniforms.trailLength, n.trailLength), a = 0; a < t.vertex.length; a++)
            if (!(0 >= t.vertex[a].length)) {
              var o = t.vertex[a], u = new Float32Array(o[0]).BYTES_PER_ELEMENT;
              o = u * o[0].length, e.bindBuffer(e.ARRAY_BUFFER, t.vertexBuffer[a]), e.vertexAttribPointer(
                s.attributes.aPos,
                4,
                e.FLOAT,
                !1,
                o,
                0
              ), e.vertexAttribPointer(s.attributes.aColor, 4, e.FLOAT, !1, o, 4 * u), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.indexBuffer[a]), e.drawElements(e.TRIANGLE_STRIP, t.index[a].length, e.UNSIGNED_SHORT, 0), e.bindBuffer(e.ARRAY_BUFFER, null), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null);
            }
          this.time += n.step, this.time > this.endTime && (this.time = this.startTime);
        }
      } }]), i;
    }(jt), Jd = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.simpleLineLayer = new il(t.getHeatOptions()), t.children = [t.simpleLineLayer], t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return { blend: "normal", gradient: { 0: "rgb(50, 50, 256)", "0.1": "rgb(50, 250, 56)", "0.5": "rgb(250, 250, 56)", 1: "rgb(250, 50, 56)" } };
      } }, { key: "onDataChanged", value: function(t) {
        this.simpleLineLayer.setData(t);
      } }, { key: "onOptionsChanged", value: function(t) {
        this.simpleLineLayer.setOptions(this.getHeatOptions());
      } }, { key: "getHeatOptions", value: function() {
        var t = this.getOptions(), e = t.max, a = t.min;
        e === void 0 && (a = this.getDataRange(), e = a.max, a = a.min);
        var n = new gt({ max: e, min: a, gradient: t.gradient });
        return t.color = function(s) {
          var o = ~~s.count || 1;
          return "properties" in s && "count" in s.properties && (o = ~~s.properties.count), s = n.getImageData(o), [s[0] / 255, s[1] / 255, s[2] / 255, s[3] / 255];
        }, t;
      } }, { key: "getDataRange", value: function() {
        var t = this.getData(), e = 0, a = 0;
        t[0] && (e = ~~t[0].count || 1, a = ~~t[0].count || 1), "properties" in t[0] && "count" in t[0].properties && (e = ~~t[0].properties.count, a = ~~t[0].properties.count);
        for (var n = t.length, s = 0; s < n; s++) {
          var o = ~~t[s].count || 1;
          "properties" in t[s] && "count" in t[s].properties && (o = ~~t[s].properties.count), e = Math.max(o, e), a = Math.min(o, a);
        }
        return { max: e / 2, min: a };
      } }]), i;
    }(lr), Pa = S(function(r, i) {
      (function(t, e) {
        r.exports = e();
      })(_s, function() {
        function t(M, P, R, B, F, I) {
          if (!(F - B <= R)) {
            var U = B + F >> 1;
            e(M, P, U, B, F, I % 2), t(M, P, R, B, U - 1, I + 1), t(M, P, R, U + 1, F, I + 1);
          }
        }
        function e(M, P, R, B, F, I) {
          for (; F > B; ) {
            if (600 < F - B) {
              var U = F - B + 1, G = R - B + 1, Z = Math.log(U), Q = 0.5 * Math.exp(2 * Z / 3);
              Z = 0.5 * Math.sqrt(Z * Q * (U - Q) / U) * (0 > G - U / 2 ? -1 : 1), e(M, P, R, Math.max(B, Math.floor(R - G * Q / U + Z)), Math.min(F, Math.floor(R + (U - G) * Q / U + Z)), I);
            }
            for (U = P[2 * R + I], G = B, Q = F, a(M, P, B, R), P[2 * F + I] > U && a(M, P, B, F); G < Q; ) {
              for (a(M, P, G, Q), G++, Q--; P[2 * G + I] < U; )
                G++;
              for (; P[2 * Q + I] > U; )
                Q--;
            }
            P[2 * B + I] === U ? a(M, P, B, Q) : (Q++, a(M, P, Q, F)), Q <= R && (B = Q + 1), R <= Q && (F = Q - 1);
          }
        }
        function a(M, P, R, B) {
          n(M, R, B), n(P, 2 * R, 2 * B), n(P, 2 * R + 1, 2 * B + 1);
        }
        function n(M, P, R) {
          var B = M[P];
          M[P] = M[R], M[R] = B;
        }
        function s(M, P) {
          return M = M.geometry.coordinates, { x: M[0] / 360 + 0.5, y: c(M[1]), zoom: 1 / 0, index: P, parentId: -1 };
        }
        function o(M) {
          var P = M.id, R = u(M);
          return {
            type: "Feature",
            id: P,
            properties: R,
            geometry: { type: "Point", coordinates: [360 * (M.x - 0.5), 360 * Math.atan(Math.exp((180 - 360 * M.y) * Math.PI / 180)) / Math.PI - 90] }
          };
        }
        function u(M) {
          var P = M.numPoints, R = 1e4 <= P ? Math.round(P / 1e3) + "k" : 1e3 <= P ? Math.round(P / 100) / 10 + "k" : P;
          return v(v({}, M.properties), { cluster: !0, cluster_id: M.id, point_count: P, point_count_abbreviated: R });
        }
        function c(M) {
          return M = Math.sin(M * Math.PI / 180), M = 0.5 - 0.25 * Math.log((1 + M) / (1 - M)) / Math.PI, 0 > M ? 0 : 1 < M ? 1 : M;
        }
        function v(M, P) {
          for (var R in P)
            M[R] = P[R];
          return M;
        }
        function l(M) {
          return M.x;
        }
        function f(M) {
          return M.y;
        }
        var p = function(M) {
          return M[0];
        }, d = function(M) {
          return M[1];
        }, g = function(M, P, R, B, F) {
          P === void 0 && (P = p), R === void 0 && (R = d), B === void 0 && (B = 64), F === void 0 && (F = Float64Array), this.nodeSize = B, this.points = M;
          var I = this.ids = new (65536 > M.length ? Uint16Array : Uint32Array)(M.length);
          F = this.coords = new F(2 * M.length);
          for (var U = 0; U < M.length; U++)
            I[U] = U, F[2 * U] = P(M[U]), F[2 * U + 1] = R(M[U]);
          t(I, F, B, 0, I.length - 1, 0);
        };
        g.prototype.range = function(M, P, R, B) {
          for (var F = this.ids, I = this.coords, U = this.nodeSize, G = [
            0,
            F.length - 1,
            0
          ], Z = [], Q, it; G.length; ) {
            var et = G.pop(), vt = G.pop(), Tt = G.pop();
            if (vt - Tt <= U)
              for (et = Tt; et <= vt; et++)
                Q = I[2 * et], it = I[2 * et + 1], Q >= M && Q <= R && it >= P && it <= B && Z.push(F[et]);
            else {
              var K = Math.floor((Tt + vt) / 2);
              Q = I[2 * K], it = I[2 * K + 1], Q >= M && Q <= R && it >= P && it <= B && Z.push(F[K]);
              var ut = (et + 1) % 2;
              (et === 0 ? M <= Q : P <= it) && (G.push(Tt), G.push(K - 1), G.push(ut)), (et === 0 ? R >= Q : B >= it) && (G.push(K + 1), G.push(vt), G.push(ut));
            }
          }
          return Z;
        }, g.prototype.within = function(M, P, R) {
          for (var B = this.ids, F = this.coords, I = this.nodeSize, U = [0, B.length - 1, 0], G = [], Z = R * R; U.length; ) {
            var Q = U.pop(), it = U.pop(), et = U.pop();
            if (it - et <= I)
              for (Q = et; Q <= it; Q++) {
                et = F[2 * Q] - M;
                var vt = F[2 * Q + 1] - P;
                et * et + vt * vt <= Z && G.push(B[Q]);
              }
            else {
              vt = Math.floor((et + it) / 2);
              var Tt = F[2 * vt], K = F[2 * vt + 1], ut = Tt - M, St = K - P;
              ut * ut + St * St <= Z && G.push(B[vt]), ut = (Q + 1) % 2, (Q === 0 ? M - R <= Tt : P - R <= K) && (U.push(et), U.push(vt - 1), U.push(ut)), (Q === 0 ? M + R >= Tt : P + R >= K) && (U.push(vt + 1), U.push(it), U.push(ut));
            }
          }
          return G;
        };
        var A = { minZoom: 0, maxZoom: 16, minPoints: 2, radius: 40, extent: 512, nodeSize: 64, log: !1, generateId: !1, reduce: null, map: function(M) {
          return M;
        } }, _ = function(M) {
          this.options = v(Wh(A), M), this.trees = Array(this.options.maxZoom + 1);
        };
        return _.prototype.load = function(M) {
          var P = this.options, R = P.minZoom, B = P.maxZoom;
          P = P.nodeSize, this.points = M;
          for (var F = [], I = 0; I < M.length; I++)
            M[I].geometry && F.push(s(M[I], I));
          for (this.trees[B + 1] = new g(F, l, f, P, Float32Array), M = B; M >= R; M--)
            F = this._cluster(F, M), this.trees[M] = new g(F, l, f, P, Float32Array);
          return this;
        }, _.prototype.getClusters = function(M, P) {
          var R = ((M[0] + 180) % 360 + 360) % 360 - 180, B = Math.max(-90, Math.min(90, M[1])), F = M[2] === 180 ? 180 : ((M[2] + 180) % 360 + 360) % 360 - 180, I = Math.max(-90, Math.min(
            90,
            M[3]
          ));
          if (360 <= M[2] - M[0])
            R = -180, F = 180;
          else if (R > F)
            return R = this.getClusters([R, B, 180, I], P), B = this.getClusters([-180, B, F, I], P), R.concat(B);
          P = this.trees[this._limitZoom(P)], M = [];
          var U = 0;
          for (B = P.range(R / 360 + 0.5, c(I), F / 360 + 0.5, c(B)); U < B.length; U += 1)
            F = P.points[B[U]], M.push(F.numPoints ? o(F) : this.points[F.index]);
          return M;
        }, _.prototype.getChildren = function(M) {
          var P = this._getOriginId(M), R = this._getOriginZoom(M), B = this.trees[R];
          if (!B)
            throw Error("No cluster with the specified id.");
          var F = B.points[P];
          if (!F)
            throw Error("No cluster with the specified id.");
          P = [];
          var I = 0;
          for (R = B.within(F.x, F.y, this.options.radius / (this.options.extent * Math.pow(2, R - 1))); I < R.length; I += 1)
            F = B.points[R[I]], F.parentId === M && P.push(F.numPoints ? o(F) : this.points[F.index]);
          if (P.length === 0)
            throw Error("No cluster with the specified id.");
          return P;
        }, _.prototype.getLeaves = function(M, P, R) {
          var B = [];
          return this._appendLeaves(B, M, P || 10, R || 0, 0), B;
        }, _.prototype.getTile = function(M, P, R) {
          var B = this.trees[this._limitZoom(M)];
          M = Math.pow(2, M);
          var F = this.options;
          F = F.radius / F.extent;
          var I = (R - F) / M, U = (R + 1 + F) / M, G = { features: [] };
          return this._addTileFeatures(B.range((P - F) / M, I, (P + 1 + F) / M, U), B.points, P, R, M, G), P === 0 && this._addTileFeatures(B.range(1 - F / M, I, 1, U), B.points, M, R, M, G), P === M - 1 && this._addTileFeatures(B.range(0, I, F / M, U), B.points, -1, R, M, G), G.features.length ? G : null;
        }, _.prototype.getClusterExpansionZoom = function(M) {
          for (var P = this._getOriginZoom(M) - 1; P <= this.options.maxZoom && (M = this.getChildren(M), P++, M.length === 1); )
            M = M[0].properties.cluster_id;
          return P;
        }, _.prototype._appendLeaves = function(M, P, R, B, F) {
          var I = 0;
          for (P = this.getChildren(P); I < P.length; I += 1) {
            var U = P[I], G = U.properties;
            if (G && G.cluster ? F = F + G.point_count <= B ? F + G.point_count : this._appendLeaves(M, G.cluster_id, R, B, F) : F < B ? F++ : M.push(U), M.length === R)
              break;
          }
          return F;
        }, _.prototype._addTileFeatures = function(M, P, R, B, F, I) {
          for (var U = 0; U < M.length; U += 1) {
            var G = P[M[U]], Z = G.numPoints, Q = { type: 1, geometry: [[Math.round(this.options.extent * (G.x * F - R)), Math.round(this.options.extent * (G.y * F - B))]], tags: Z ? u(G) : this.points[G.index].properties }, it = void 0;
            Z ? it = G.id : this.options.generateId ? it = G.index : this.points[G.index].id && (it = this.points[G.index].id), it !== void 0 && (Q.id = it), I.features.push(Q);
          }
        }, _.prototype._limitZoom = function(M) {
          return Math.max(this.options.minZoom, Math.min(+M, this.options.maxZoom + 1));
        }, _.prototype._cluster = function(M, P) {
          var R = [], B = this.options, F = B.reduce, I = B.minPoints;
          B = B.radius / (B.extent * Math.pow(2, P));
          for (var U = 0; U < M.length; U++) {
            var G = M[U];
            if (!(G.zoom <= P)) {
              G.zoom = P;
              for (var Z = this.trees[P + 1], Q = Z.within(G.x, G.y, B), it = G.numPoints || 1, et = it, vt = 0, Tt = Q; vt < Tt.length; vt += 1) {
                var K = Z.points[Tt[vt]];
                K.zoom > P && (et += K.numPoints || 1);
              }
              if (et >= I) {
                vt = G.x * it, Tt = G.y * it, it = F && 1 < it ? this._map(G, !0) : null, K = (U << 5) + (P + 1) + this.points.length;
                for (var ut = 0; ut < Q.length; ut += 1) {
                  var St = Z.points[Q[ut]];
                  if (!(St.zoom <= P)) {
                    St.zoom = P;
                    var Ct = St.numPoints || 1;
                    vt += St.x * Ct, Tt += St.y * Ct, St.parentId = K, F && (it || (it = this._map(G, !0)), F(it, this._map(St)));
                  }
                }
                G.parentId = K, R.push({ x: vt / et, y: Tt / et, zoom: 1 / 0, id: K, parentId: -1, numPoints: et, properties: it });
              } else if (R.push(G), 1 < et)
                for (G = 0, et = Q; G < et.length; G += 1)
                  Q = Z.points[et[G]], Q.zoom <= P || (Q.zoom = P, R.push(Q));
            }
          }
          return R;
        }, _.prototype._getOriginId = function(M) {
          return M - this.points.length >> 5;
        }, _.prototype._getOriginZoom = function(M) {
          return (M - this.points.length) % 32;
        }, _.prototype._map = function(M, P) {
          if (M.numPoints)
            return P ? v({}, M.properties) : M.properties;
          M = this.points[M.index].properties;
          var R = this.options.map(M);
          return P && R === M ? v({}, R) : R;
        }, _;
      });
    }), Qd = function(r) {
      function i(t) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t)), t.shapeLayer = new qn(t.options), t.textLayer = new di(t.options.textOptions), t.children = [t.shapeLayer, t.textLayer], t.max = [], t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return { size: 50, height: 0, maxZoom: 19, minZoom: 5, gradient: { 0: "rgb(50, 50, 256)", "0.1": "rgb(50, 250, 56)", "0.5": "rgb(250, 250, 56)", 1: "rgb(250, 50, 56)" }, enableCluster: !1, showText: !0, textOptions: { fontSize: 13, color: "white" } };
      } }, { key: "onOptionsChanged", value: function(t) {
        this.textLayer.setOptions(t.textOptions);
      } }, { key: "setOptions", value: function() {
        var t = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, e = this.options.textOptions;
        t.textOptions && Rt(e, t.textOptions);
        var a = t.minZoom, n = t.maxZoom, s = t.size;
        a = n && n !== this.options.maxZoom || a && a !== this.options.minZoom || s && s !== this.options.size, Rt(this.options, t, { textOptions: e }), a ? this.onChanged(this.options, this.data) : this.refreshLayer(), this.onOptionsChanged(this.getOptions());
      } }, { key: "onChanged", value: function(t, e) {
        if (e && e.length) {
          this.zoom = Math.floor(this.map.getZoom());
          var a = t.maxZoom, n = t.minZoom, s = t.enableCluster;
          t = t.size, this.zoom > a ? this.zoom = a : this.zoom < n && (this.zoom = n), s && (this.supercluster = new Pa({ maxZoom: a, minZoom: n, radius: t / 2 }), this.supercluster.load(e)), this.refreshLayer();
        }
      } }, { key: "refreshLayer", value: function() {
        var t = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this.options, e = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : this.data, a = this.map, n = this.zoom;
        if (t.enableCluster && this.supercluster && (e = this.getClusterData(t)), e && e.length) {
          var s = t.gradient, o = t.showText, u = t.textOptions, c = t.height, v = t.size;
          v *= Math.pow(
            2,
            18 - n
          ), e = Yf(e, v, function(p) {
            var d = Vt(p, 2), g = d[0];
            return d = d[1], -180 <= g && 180 >= g && -90 <= d && 90 >= d && (d = a.lnglatToMercator(g, d), g = d[0], d = d[1]), p[0] = g, p[1] = d, p;
          }), this.max[n] = Math.max(this.max[n] || 0, e.max);
          var l = new gt({ max: this.max[n], min: 0, maxSize: c * Math.pow(2, 18 - n), minSize: 0, gradient: s });
          if (s = [], o) {
            var f = u && u.format;
            f = typeof f == "function" ? f : null, s = e.map(function(p) {
              return { geometry: { coordinates: [p.center.x, p.center.y, l.getSize(p.count) + u.fontSize / 2 * Math.pow(2, 18 - n)] }, text: f ? f(p.count) : p.count };
            });
          }
          this.textLayer.setData(s), o = e.map(function(p) {
            for (var d = p.center, g = e.r, A = [], _ = 0; 6 > _; _++)
              A.push(Vf({ x: d.x, y: d.y }, g, _));
            return { geometry: { type: "Polygon", coordinates: [A] }, properties: { height: l.getSize(p.count), color: l.getColor(p.count) } };
          }), this.shapeLayer.setData(o), t.enablePicked && t.autoSelect && this.pick(-1, -1);
        }
      } }, { key: "getClusterData", value: function() {
        var t = this.map, e = t.getBounds(), a = e.ne;
        e = e.sw, this.ne = a, this.sw = e;
        var n = a, s = n.lng;
        n = n.lat;
        var o = [];
        return -180 <= s && 180 >= s && -90 <= n && 90 >= n ? o = [e.lng, e.lat, a.lng, a.lat] : (a = t.mercatorToLnglat(
          this.ne.lng,
          this.ne.lat
        ), e = t.mercatorToLnglat(this.sw.lng, this.sw.lat), o = e.concat(a)), this.supercluster.getClusters(o, this.zoom).map(function(u) {
          var c = 0;
          return u.properties && u.properties.point_count && (c = u.properties.point_count), { geometry: u.geometry, count: c };
        });
      } }, { key: "pick", value: function(t, e) {
        return this.shapeLayer.pick(t, e);
      } }, { key: "shouldUpdate", value: function() {
        if (!this.data)
          return !1;
        var t = this.map, e = Math.floor(t.getZoom()), a = this.options, n = a.maxZoom;
        if (a = a.minZoom, e > n ? e = n : e < a && (e = a), this.zoom !== e)
          return this.zoom = e, !0;
        if (!this.options.enableCluster || (e = t.getBounds(), t = e.ne, e = e.sw, !(t && e && this.ne && this.sw)))
          return !1;
        if (this.ne.lng !== t.lng || this.ne.lat !== t.lat || this.sw.lng !== e.lng || this.sw.lat !== e.lat)
          return !0;
      } }, { key: "render", value: function(t) {
        this.shouldUpdate() ? this.refreshLayer() : ur(i.prototype.__proto__ || yt(i.prototype), "render", this).call(this, t);
      } }]), i;
    }(lr), vn = function(r) {
      function i(t) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t)), t.name = "PointLayer", t.bufferData = [], t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return { color: [0.1, 0.1, 0.9, 1], blend: "default", shape: "circle", size: 5, unit: "px", borderWidth: 0, borderColor: [1, 1, 1, 0.9], polygonOffset: [0, 0], depthTest: !0 };
      } }, { key: "initialize", value: function(t) {
        this.gl = t;
        var e = this.getOptions(), a = [];
        e.enablePicked && a.push("PICK"), e.shape && e.shape === "circle" && a.push("SHAPE_CIRCLE"), this.program = new Ft(this.gl, {
          vertexShader: `attribute vec3 aPos;attribute vec4 aColor;attribute float aSize;attribute float aBorderWidth;attribute vec4 aBorderColor;uniform mat4 uMatrix;uniform vec4 uSelectedColor;uniform bool uUnitPx;uniform float zoomUnits;uniform float devicePixelRatio;varying vec4 vColor;varying float vSize;varying float vBorderWidth;varying vec4 vBorderColor;void main(void){if(aColor.w>=0.0&&aColor.w<=1.0){vColor=aColor;}else{vColor=vec4(aColor.xyz,1.0);}float size=aSize*devicePixelRatio;float borderWidth=aBorderWidth*devicePixelRatio;gl_Position=uMatrix*vec4(aPos.xyz,1.0);gl_PointSize=uUnitPx ? size : size/zoomUnits;vSize=size;vBorderWidth=borderWidth;vBorderColor=aBorderColor;
#if defined(PICK)
if(mapvIsPicked()){vColor=uSelectedColor;}
#endif
}`,
          fragmentShader: `varying vec4 vColor;varying float vSize;varying float vBorderWidth;varying vec4 vBorderColor;void main(void){vec4 color=vColor;
#if defined(SHAPE_CIRCLE)
float d=distance(gl_PointCoord,vec2(0.5,0.5));float ratio=1.0-vBorderWidth/vSize*2.0;if(d>0.5){discard;}if(d>ratio*0.5){color=vBorderColor;}float blur=1.0;blur=1.0-smoothstep(0.49,0.5,d);color.a*=blur;
#else
float ratio=vBorderWidth/vSize;if(gl_PointCoord.x<ratio||gl_PointCoord.x>1.0-ratio||gl_PointCoord.y<ratio||gl_PointCoord.y>1.0-ratio){color=vBorderColor;}
#endif
gl_FragColor=color;}`,
          defines: a
        }, this), this.buffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), e = [{ stride: 52, name: "aPos", buffer: this.buffer, size: 3, type: "FLOAT", offset: 0 }, { stride: 52, name: "aColor", buffer: this.buffer, size: 4, type: "FLOAT", offset: 12 }, { stride: 52, name: "aSize", buffer: this.buffer, size: 1, type: "FLOAT", offset: 28 }, { stride: 52, name: "aBorderWidth", buffer: this.buffer, size: 1, type: "FLOAT", offset: 32 }, { stride: 52, name: "aBorderColor", buffer: this.buffer, size: 4, type: "FLOAT", offset: 36 }], e = e.concat(this.getCommonAttributes()), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: e });
      } }, { key: "onDestroy", value: function() {
        this.bufferData = [];
      } }, { key: "onChanged", value: function(t, e) {
        if (this.gl) {
          for (var a = [], n = t.color, s = t.size, o = t.borderWidth, u = t.borderColor, c = 0; c < e.length; c++) {
            var v = this.normizedPoint(e[c].geometry.coordinates), l = this.getProperty("color", n, e[c]);
            l = this.normizedColor(l);
            var f = this.getProperty("size", s, e[c]);
            f = Number(f);
            var p = this.getProperty("borderWidth", o, e[c]);
            p = Number(p);
            var d = this.getProperty(
              "borderColor",
              u,
              e[c]
            );
            d = this.normizedColor(d), v = this.addMultipleCoords(v);
            for (var g = 0; g < v.length; g++) {
              var A = v[g];
              a.push(A[0], A[1], Number(A[2] || 0)), a.push(l[0], l[1], l[2], l[3]), a.push(f), a.push(p, d[0], d[1], d[2], d[3]);
            }
          }
          this.bufferData = a, this.buffer.updateData(new Float32Array(a)), t.enablePicked && this.parsePickData(e);
        }
      } }, { key: "parsePickData", value: function(t) {
        var e = this.getOptions(), a = [];
        if (e.enablePicked)
          for (var n = 0; n < t.length; n++) {
            var s = this.indexToRgb(n);
            a.push(s[0] / 255, s[1] / 255, s[2] / 255), e.repeat && (a.push(s[0] / 255, s[1] / 255, s[2] / 255), a.push(s[0] / 255, s[1] / 255, s[2] / 255));
          }
        e.enablePicked && this.pickBuffer.updateData(new Float32Array(a));
      } }, { key: "render", value: function(t) {
        var e = t.gl, a = t.matrix, n = t.isPickRender;
        if (!(0 >= this.bufferData.length)) {
          var s = this.getOptions(), o = this.program;
          o.use(e), t = this.getCommonUniforms(t), t = Rt(t, { uMatrix: a, uUnitPx: s.unit === "px", zoomUnits: this.map.getZoomUnits(), devicePixelRatio: window.devicePixelRatio }), o.setUniforms(t), this.setGLState({
            blend: !n,
            blendFunc: ie(e, s.blend),
            blendEquation: e.FUNC_ADD,
            polygonOffset: s.polygonOffset,
            depthTest: s.depthTest
          }), this.vertexArray.bind(), e.drawArrays(e.POINTS, 0, this.bufferData.length / 13);
        }
      } }]), i;
    }(jt), Kd = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.name = "GroundRippleLayer", t.bufferDataArr = [], t.indexDataArr = [], t.vertexBuffer = [], t.indexBuffer = [], t.position = [], t.opacity = 1, t.currentScale = 1, t.autoUpdate = !0, t;
      }
      return Lt(i, r), ct(i, [
        { key: "getDefaultOptions", value: function() {
          return {
            color: [0.1, 0.1, 0.9, 1],
            size: 5,
            segs: 32,
            scale: 2,
            unit: "m",
            step: 0.1
          };
        } },
        { key: "initialize", value: function(t) {
          this.gl = t, this.program = new Ft(this.gl, { vertexShader: "uniform mat4 u_projectionMatrix;uniform mat4 u_modelViewMatrix;uniform mat4 u_modelMatrix;uniform float u_opacity;attribute vec4 aPos;attribute vec4 aColor;varying vec4 vColor;void main(){vColor=aColor;vColor.a=u_opacity;gl_Position=u_projectionMatrix*u_modelViewMatrix*u_modelMatrix*vec4(aPos.xyz,1.0);}", fragmentShader: "precision highp float;varying vec4 vColor;void main(){if(vColor.a==0.0){discard;}gl_FragColor=vColor;}" });
        } },
        { key: "onDestroy", value: function() {
          this.bufferDataArr = [], this.indexDataArr = [], this.vertexBuffer = [], this.indexBuffer = [];
        } },
        { key: "onChanged", value: function(t, e) {
          var a = this.gl;
          if (a && (this.currentScale = this.opacity = 1, (this.data = e) && e.length)) {
            var n = t.color, s = t.segs;
            t = t.size;
            for (var o = 360 / s, u = 0; u < e.length; u++) {
              var c = [], v = [], l = this.normizedPoint(e[u].geometry.coordinates), f = n;
              Object.prototype.toString.call(f) === "[object Function]" ? f = f(e[u]) : (f = e[u].color || n, "properties" in e[u] && "color" in e[u].properties && (f = e[u].properties.color)), f = this.normizedColor(f);
              var p = Object.prototype.toString.call(t) === "[object Function]" ? t(e[u]) : Number(t), d = l[0], g = l[1];
              c.push(0, 0, -0.5), c.push(f[0], f[1], f[2], 0);
              for (var A = 1, _ = 0; A <= s; A++, _ += o)
                c.push(l[0] - d + Math.cos(Math.PI / 180 * _) * p, l[1] - g + Math.sin(Math.PI / 180 * _) * p, -0.5), c.push(f[0], f[1], f[2], this.opacity), A === s ? v.push(0, 0 + A, 1) : v.push(0, 0 + A, 0 + A + 1);
              f = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, f), a.bufferData(a.ARRAY_BUFFER, new Float32Array(c), a.STATIC_DRAW), this.vertexBuffer[u] = f, this.bufferDataArr[u] = c, a.bindBuffer(a.ARRAY_BUFFER, null), c = a.createBuffer(), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, c), a.bufferData(a.ELEMENT_ARRAY_BUFFER, new Uint16Array(v), a.STATIC_DRAW), this.indexBuffer[u] = c, this.indexDataArr[u] = v, a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null), this.position[u] = [l[0], l[1]];
            }
            this.webglLayer && this.webglLayer.render();
          }
        } },
        { key: "render", value: function(t) {
          var e = t.gl, a = t.projectionMatrix, n = t.viewMatrix;
          for (t = this.program, e.useProgram(t.program), e.uniformMatrix4fv(
            t.uniforms.u_projectionMatrix,
            !1,
            a
          ), e.uniformMatrix4fv(t.uniforms.u_modelViewMatrix, !1, n), a = this.opacity, this.options.opacity !== void 0 && (a = this.options.opacity), e.uniform1f(t.uniforms.u_opacity, a), this.setGLState({ blend: !0, blendEquation: e.FUNC_ADD, blendFunc: [e.SRC_ALPHA, e.DST_ALPHA] }), e.enableVertexAttribArray(t.attributes.aPos), e.enableVertexAttribArray(t.attributes.aColor), a = 0; a < this.bufferDataArr.length; a++)
            if (!(0 >= this.bufferDataArr[a].length)) {
              n = new Float32Array(this.bufferDataArr[a]).BYTES_PER_ELEMENT, e.bindBuffer(
                e.ARRAY_BUFFER,
                this.vertexBuffer[a]
              ), e.vertexAttribPointer(t.attributes.aColor, 4, e.FLOAT, !1, 7 * n, 3 * n), e.vertexAttribPointer(t.attributes.aPos, 3, e.FLOAT, !1, 7 * n, 0), n = this.position[a];
              var s = pt.create(), o = [this.currentScale, this.currentScale, this.currentScale];
              this.options.unit === "px" && this.map && (o = this.map.getZoomUnits(), o = [this.currentScale * o, this.currentScale * o, this.currentScale]), pt.identity(s), pt.translate(s, s, [n[0], n[1], 0]), pt.scale(s, s, o), e.uniformMatrix4fv(t.uniforms.u_modelMatrix, !1, s), e.bindBuffer(
                e.ELEMENT_ARRAY_BUFFER,
                this.indexBuffer[a]
              ), e.drawElements(e.TRIANGLES, this.indexDataArr[a].length, e.UNSIGNED_SHORT, 0), e.bindBuffer(e.ARRAY_BUFFER, null), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null);
            }
          t = this.getOptions(), e = t.scale, t = t.step, this.opacity -= t / 10, this.currentScale += e * t, 0 > this.opacity && (this.currentScale = this.opacity = 1);
        } }
      ]), i;
    }(jt), qd = function(r) {
      function i(t) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t)), t.name = "RippleLayer", t.bufferData = [], t.date = /* @__PURE__ */ new Date(), t.autoUpdate = !0, t;
      }
      return Lt(i, r), ct(i, [{
        key: "getDefaultOptions",
        value: function() {
          return { depthTest: !0, polygonOffset: [0, 0], color: [0.1, 0.1, 0.9, 1], blend: "normal", size: 20, unit: "px", duration: 2 };
        }
      }, { key: "initialize", value: function(t) {
        this.gl = t;
        var e = this.getOptions();
        this.program = new Ft(this.gl, {
          vertexShader: `attribute vec3 aPos;attribute vec4 aColor;attribute float aSize;uniform mat4 uMatrix;uniform vec4 uSelectedColor;uniform float uTime;uniform float duration;uniform float zoomUnits;varying vec4 vColor;void main(void){if(aColor.w>=0.0&&aColor.w<=1.0){vColor=aColor;}else{vColor=vec4(aColor.xyz,1.0);}float percent=mod(uTime,duration)/duration;vColor.a=1.-percent;gl_Position=uMatrix*vec4(aPos.xyz,1.0);gl_PointSize=aSize/zoomUnits*percent;
#if defined(PICK)
if(mapvIsPicked()){vColor=uSelectedColor;}
#endif
}`,
          fragmentShader: "varying vec4 vColor;void main(void){vec4 color=vColor;float d=distance(gl_PointCoord,vec2(0.5,0.5));if(d>0.5){discard;}float blur=1.0;blur=1.0-smoothstep(0.49,0.5,d);color.a*=blur;gl_FragColor=color;}",
          defines: e.enablePicked ? ["PICK"] : []
        }, this), this.buffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), e = [{ stride: 32, name: "aPos", buffer: this.buffer, size: 3, type: "FLOAT", offset: 0 }, { stride: 32, name: "aColor", buffer: this.buffer, size: 4, type: "FLOAT", offset: 12 }, {
          stride: 32,
          name: "aSize",
          buffer: this.buffer,
          size: 1,
          type: "FLOAT",
          offset: 28
        }], e = e.concat(this.getCommonAttributes()), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: e });
      } }, { key: "onDestroy", value: function() {
        this.bufferData = [];
      } }, { key: "onChanged", value: function(t, e) {
        if (this.gl) {
          for (var a = [], n = t.color, s = t.size, o = 0; o < e.length; o++) {
            var u = e[o].geometry.coordinates, c = n;
            Object.prototype.toString.call(c) === "[object Function]" ? c = c(e[o]) : (c = e[o].color || n, "properties" in e[o] && "color" in e[o].properties && (c = e[o].properties.color)), c = this.normizedColor(c), u = this.normizedPoint(u);
            var v = e[o].size || s;
            "properties" in e[o] && "size" in e[o].properties && (v = e[o].properties.size), v = Object.prototype.toString.call(v) === "[object Function]" ? v(e[o]) : Number(v), a.push(u[0], u[1], Number(u[2] || 0)), a.push(c[0], c[1], c[2], c[3]), a.push(v * window.devicePixelRatio);
          }
          this.bufferData = a, this.buffer.updateData(new Float32Array(a)), t.enablePicked && this.parsePickData(e);
        }
      } }, { key: "parsePickData", value: function(t) {
        var e = this.getOptions(), a = [];
        if (e.enablePicked)
          for (var n = 0; n < t.length; n++) {
            var s = this.indexToRgb(n);
            a.push(s[0] / 255, s[1] / 255, s[2] / 255);
          }
        e.enablePicked && this.pickBuffer.updateData(new Float32Array(a));
      } }, { key: "render", value: function(t) {
        var e = t.gl, a = t.matrix, n = t.isPickRender;
        if (!(0 >= this.bufferData.length)) {
          var s = this.getOptions(), o = this.program;
          o.use(e), this.vertexArray.bind(), t = this.getCommonUniforms(t);
          var u = 1;
          s.unit === "m" && this.map && (u = this.map.getZoomUnits()), t = Rt(t, { zoomUnits: u, uTime: (/* @__PURE__ */ new Date() - this.date) / 1e3, duration: s.duration, uMatrix: a }), o.setUniforms(t), this.setGLState({ blend: !n, blendFunc: s.blend === "lighter" ? [e.SRC_ALPHA, e.ONE] : [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA], blendEquation: e.FUNC_ADD, polygonOffset: s.polygonOffset, depthTest: s.depthTest }), e.drawArrays(e.POINTS, 0, this.bufferData.length / 8);
        }
      } }]), i;
    }(jt), $d = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.name = "SparkLayer", t.bufferData = [], t.startTime = Number(t.options.startTime) || 0, t.endTime = Number(t.options.endTime), t.time = t.startTime, t.segs = Number(t.options.segs) || 10, t.autoUpdate = !0, t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return { color: [0.9, 0.1, 0.1, 1], trailLength: 3, height: 100, step: 0.1, segs: 10, polygonOffset: [0, 0] };
      } }, { key: "setTime", value: function(t) {
        this.time = t;
      } }, { key: "initialize", value: function(t) {
        this.gl = t, this.program = new Ft(this.gl, {
          vertexShader: "precision mediump float;attribute vec4 aPos;uniform mat4 u_matrix;uniform float currentTime;uniform float trailLength;varying float vTime;void main(){gl_Position=u_matrix*vec4(aPos.xyz,1.0);vTime=1.0-((currentTime-aPos.w)/trailLength);}",
          fragmentShader: "precision mediump float;uniform vec3 uFragColor;varying float vTime;void main(){if(vTime>1.0||vTime<0.0){discard;}gl_FragColor=vec4(uFragColor,1.0*vTime);}"
        }), this.buffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, this.buffer);
      } }, { key: "onDestroy", value: function() {
        this.bufferData = [];
      } }, { key: "onChanged", value: function(t, e) {
        var a = this.gl;
        if (a) {
          this.buffer = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.buffer);
          for (var n = [], s = t.height, o = 0; o < e.length; o++)
            for (var u = e[o].geometry.coordinates, c = Object.prototype.toString.call(s) === "[object Function]" ? s(e[o]) : Number(s), v = 0, l = 0; l < this.segs; l++) {
              var f = this.normizedPoint(u);
              n.push(f[0], f[1], v), u[2] === void 0 ? n.push(l) : n.push(Number(u[2])), v += c / this.segs, n.push(f[0], f[1], v), u[2] === void 0 ? n.push(l + 1) : n.push(Number(u[2]));
            }
          t.endTime === void 0 && (this.endTime = this.segs), this.bufferData = n, a.bufferData(a.ARRAY_BUFFER, new Float32Array(n), a.STATIC_DRAW), this.webglLayer && this.webglLayer.render();
        }
      } }, { key: "render", value: function(t) {
        var e = t.gl, a = t.matrix;
        t = this.program, e.useProgram(t.program), e.uniformMatrix4fv(t.uniforms.u_matrix, !1, a), e.bindBuffer(e.ARRAY_BUFFER, this.buffer), e.enableVertexAttribArray(t.attributes.aPos), e.vertexAttribPointer(t.attributes.aPos, 4, e.FLOAT, !1, 0, 0), a = this.normizedColor(this.options.color), e.uniform3f(t.uniforms.uFragColor, a[0], a[1], a[2]), e.uniform1f(t.uniforms.currentTime, this.time), e.uniform1f(t.uniforms.trailLength, this.options.trailLength), this.setGLState({
          blend: !0,
          blendFunc: [e.SRC_ALPHA, e.ONE],
          blendEquation: e.FUNC_ADD,
          polygonOffset: this.options.polygonOffset
        }), e.drawArrays(e.LINES, 0, this.bufferData.length / 4), this.time += Number(this.options.step), this.time > 1.5 * this.endTime && (this.time = this.startTime);
      } }]), i;
    }(jt), La = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.name = "IconLayer", t.index = [], e = t.canvas = document.createElement("canvas"), t.ctx = e.getContext("2d"), t.iconHash = new Nr(), t;
      }
      return Lt(i, r), ct(i, [
        { key: "getDefaultOptions", value: function() {
          return {
            depthWrite: !0,
            depthTest: !0,
            blend: "default",
            flat: !1,
            unit: "px",
            scale: 1,
            angle: 0,
            opacity: 1,
            offset: [0, 0],
            padding: [0, 0],
            polygonOffset: [0, 0]
          };
        } },
        { key: "initialize", value: function(t) {
          this.gl = t;
          var e = this.getOptions();
          this.texture = null, this.program = new Ft(this.gl, {
            vertexShader: "precision highp float;attribute vec3 a_pos;attribute float a_corner;attribute float a_rotation;attribute vec2 a_size;attribute vec2 a_offset;attribute vec2 a_texture_coord;uniform mat4 u_matrix;uniform vec2 u_size;uniform float devicePixelRatio;uniform float u_zoom_units;uniform float u_zIndex;uniform float u_scale;uniform bool u_unit_px;uniform bool u_flat;varying vec2 v_texture_coord;/***点A(x,y)，绕原点顺时针旋转角度a新坐标的计算公式*x1=x*cos(a)+y*sin(a)*y1=y*cos(a)-x*sin(a)*/vec3 transformCoord(vec3 coord,vec2 size,float corner){float x=coord.x;float y=coord.y;if(corner==1.0){x+=-size.x*cos(a_rotation)+size.y*sin(a_rotation);y+=size.y*cos(a_rotation)+size.x*sin(a_rotation);}else if(corner==2.0){x+=size.x*cos(a_rotation)+size.y*sin(a_rotation);y+=size.y*cos(a_rotation)-size.x*sin(a_rotation);}else if(corner==3.0){x+=size.x*cos(a_rotation)-size.y*sin(a_rotation);y+=-size.y*cos(a_rotation)-size.x*sin(a_rotation);}else{x+=-size.x*cos(a_rotation)-size.y*sin(a_rotation);y+=-size.y*cos(a_rotation)+size.x*sin(a_rotation);}return vec3(x,y,coord.z);}void main(){v_texture_coord=a_texture_coord;if(u_flat){vec2 offset=a_offset;vec2 halfSize=a_size/2.0*u_scale;if(u_unit_px){halfSize*=u_zoom_units;offset*=u_zoom_units;}vec3 current=transformCoord(a_pos,halfSize,a_corner);current.z+=u_zIndex;gl_Position=u_matrix*vec4(current.x+offset[0],current.y-offset[1],current.z,1.0);}else{vec4 position=u_matrix*vec4(a_pos,1.0);vec3 screen=position.xyz/position.w;vec2 halfSize=a_size/MAPV_resolution*devicePixelRatio*u_scale;vec2 offset=a_offset*2./MAPV_resolution*devicePixelRatio;if(!u_unit_px){halfSize/=u_zoom_units;offset/=u_zoom_units;}vec3 current=transformCoord(screen,halfSize,a_corner);current.xy=current.xy-offset;current.z+=u_zIndex;gl_Position=vec4(current,1.0);}}",
            fragmentShader: `precision highp float;varying vec2 v_texture_coord;uniform sampler2D u_icon;uniform float u_opacity;uniform vec4 uSelectedColor;void main(){vec4 textureColor=texture2D(u_icon,vec2(v_texture_coord.x,1.0-v_texture_coord.y));if(textureColor.a==0.0&&uIsPickRender==false){discard;}textureColor.a*=u_opacity;gl_FragColor=textureColor;
#if defined(PICK)
if(mapvIsPicked()){gl_FragColor=vec4(uSelectedColor.rgb,gl_FragColor.a);}
#endif
}`,
            defines: e.enablePicked ? ["PICK"] : []
          }, this), this.vertexBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.uvBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.indexBuffer = new dt({ gl: t, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" }), e = [{ name: "a_pos", buffer: this.vertexBuffer, size: 3, stride: 36, type: "FLOAT", offset: 0 }, { name: "a_corner", buffer: this.vertexBuffer, size: 1, stride: 36, type: "FLOAT", offset: 12 }, { name: "a_size", buffer: this.vertexBuffer, size: 2, stride: 36, type: "FLOAT", offset: 16 }, {
            name: "a_offset",
            buffer: this.vertexBuffer,
            size: 2,
            stride: 36,
            type: "FLOAT",
            offset: 24
          }, { name: "a_rotation", buffer: this.vertexBuffer, size: 1, stride: 36, type: "FLOAT", offset: 32 }, { name: "a_texture_coord", buffer: this.uvBuffer, size: 2, stride: 8, type: "FLOAT", offset: 0 }], e = e.concat(this.getCommonAttributes()), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: e });
        } },
        { key: "onDestroy", value: function() {
        } },
        { key: "onChanged", value: function(t, e) {
          this.gl && this.processCache(t, e, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {});
        } },
        { key: "processCache", value: function(t, e, a) {
          var n = this;
          this.cachedData = [];
          for (var s = t.icon, o = t.width, u = t.height, c = t.offset, v = t.angle, l = 0; l < e.length; l++) {
            var f = this.normizedPoint(e[l].geometry.coordinates), p = this.getProperty("icon", s, e[l]), d = this.getProperty("width", o, e[l]), g = this.getProperty("height", u, e[l]), A = this.getProperty("offset", c, e[l]), _ = this.getProperty("angle", v, e[l]);
            f && p && (this.cachedData.push({ point: f, icon: p, width: d, height: g, offset: A, angle: _, index: l }), this.iconHash.get(p) || this.iconHash.set(p, p));
          }
          e = Hn(this.iconHash.entries()).filter(function(M) {
            return typeof M[1] == "string";
          }).map(function(M) {
            var P = Vt(M, 2)[0];
            return new zr(function(R, B) {
              n.url2canvas(P, function(F) {
                n.iconHash.set(P, F), R();
              });
            });
          }), zr.all(e).then(function(M) {
            n.buildSprite(t), a.autoRender !== !1 && n.webglLayer && n.webglLayer.render();
          });
        } },
        { key: "buildSprite", value: function(t) {
          var e = t.padding, a = this.canvas, n = this.ctx, s = [], o = new Nr(), u = !0, c = !1, v = void 0;
          try {
            for (var l = si(this.iconHash), f; !(u = (f = l.next()).done); u = !0) {
              var p = Vt(f.value, 2), d = p[1];
              if (typeof d != "string") {
                var g = d.width, A = d.height;
                s.push({
                  w: g + e[0],
                  h: A + e[0],
                  width: g,
                  height: A,
                  key: p[0],
                  icon: d
                });
              }
            }
          } catch (_) {
            c = !0, v = _;
          } finally {
            try {
              !u && l.return && l.return();
            } finally {
              if (c)
                throw v;
            }
          }
          for (c = Er(s), u = 0; u < s.length; u++)
            v = s[u], o.get(v.key) || o.set(v.key, v);
          for (u = b(c.w), c = b(c.h), a.width = u || 1, a.height = c || 1, n.save(), a = 0; a < s.length; a++)
            v = s[a], n.drawImage(v.icon, v.x + e[0], v.y + e[1], v.width, v.height);
          n.restore(), this.loadTexture(), this.buildVertex(t, o, u, c);
        } },
        { key: "buildVertex", value: function(t, e, a, n) {
          t = t.enablePicked;
          for (var s = [], o = [], u = [], c = [], v = 0; v < this.cachedData.length; v++) {
            var l = this.cachedData[v], f = l.point, p = l.width, d = l.height, g = l.offset, A = l.angle, _ = l.index;
            if (l = e.get(l.icon)) {
              p = p || l.icon.width, d = d || l.icon.height;
              var M = Vt(f, 3);
              f = M[0];
              var P = M[1];
              M = M[2];
              for (var R = 0; 4 > R; R++)
                s.push(f, P, M), s.push(R), s.push(p, d), s.push.apply(s, bt(g)), s.push(A * Math.PI / 180);
              p = l.x / a, d = (l.x + l.w) / a, g = (l.y + l.h) / n, l = l.y / n, o.push(p, g, p, l, d, l, d, g), l = 4 * v, u.push(l, l + 2, l + 1, l, l + 3, l + 2), t && (_ = this.indexToRgb(_), c.push(_[0] / 255, _[1] / 255, _[2] / 255), c.push(_[0] / 255, _[1] / 255, _[2] / 255), c.push(_[0] / 255, _[1] / 255, _[2] / 255), c.push(_[0] / 255, _[1] / 255, _[2] / 255));
            }
          }
          this.index = u, this.vertexBuffer.updateData(new Float32Array(s)), this.uvBuffer.updateData(new Float32Array(o)), this.indexBuffer.updateData(new Uint32Array(u)), t && this.pickBuffer.updateData(new Float32Array(c));
        } },
        { key: "render", value: function(t) {
          if (this.cachedData && this.cachedData.length && this.iconHash && this.texture) {
            var e = t.gl, a = t.matrix, n = this.getOptions(), s = this.program;
            s.use(e);
            var o = t.isPickRender ? ie(e, null) : ie(e, n.blend);
            this.setGLState({
              blend: !0,
              blendFunc: o,
              polygonOffset: n.polygonOffset,
              depthTest: n.depthTest,
              depthMask: n.depthWrite
            }), s.setUniforms(Rt(this.getCommonUniforms(t), { u_icon: this.texture, u_matrix: a, u_flat: n.flat, u_unit_px: n.unit === "px", u_zoom_units: this.map.getZoomUnits(), u_scale: n.scale, u_opacity: n.opacity, u_zIndex: n.zIndex, devicePixelRatio: 1 < (window.BMAPGL_FORCE_RATIO || window.devicePixelRatio) ? 2 : 1 })), 0 < this.index.length && (this.indexBuffer.bind(), this.vertexArray.bind(), e.drawElements(e.TRIANGLES, this.index.length, e.UNSIGNED_INT, 0));
          }
        } },
        {
          key: "url2canvas",
          value: function(t, e) {
            if ((typeof t > "u" ? "undefined" : be(t)) === "object")
              e(t);
            else {
              var a = new Image();
              a.crossOrigin = "anonymous", a.onload = function() {
                var n = a.width, s = a.height, o = document.createElement("canvas");
                o.width = n, o.height = s, o.getContext("2d").drawImage(a, 0, 0, n, s), e(o);
              }, a.onerror = function() {
                var n = document.createElement("canvas");
                n.width = 20, n.height = 40;
                var s = n.getContext("2d");
                s.fillStyle = "red", s.beginPath(), s.lineTo(0, 0), s.lineTo(20, 0), s.lineTo(10, 40), s.closePath(), s.fill(), e(n);
              }, a.src = t;
            }
          }
        },
        { key: "loadTexture", value: function() {
          var t = this;
          this.canvas ? Ot(this.gl, this.canvas, function(e) {
            t.texture = e;
          }) : this.texture = null;
        } }
      ]), i;
    }(jt), tp = function(r) {
      function i(t) {
        ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t));
        var e = Rt({ blend: "default" }, t.options);
        return t.pointLayer = new vn(e), t.options.textOptions = Rt({ depthTest: !1, collides: !1 }, t.options.textOptions), t.textLayer = new di(t.options.textOptions), e = Rt({}, t.options, t.options.iconOptions), t.iconLayer = new La(e), t.children = [
          t.pointLayer,
          t.textLayer,
          t.iconLayer
        ], t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return { minSize: 25, maxSize: 40, clusterRadius: 200, minPoints: 2, extent: 400, showText: !0, maxZoom: 19, minZoom: 4, gradient: { 0: "rgb(50, 50, 256)", "0.1": "rgb(50, 250, 56)", "0.5": "rgb(250, 250, 56)", 1: "rgb(250, 50, 56)" }, textOptions: { fontSize: 12, color: "white" }, iconOptions: {} };
      } }, { key: "onOptionsChanged", value: function(t) {
        this.textLayer.setOptions(t.textOptions);
      } }, { key: "setOptions", value: function() {
        var t = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, e = this.options.textOptions;
        t.textOptions && Rt(e, t.textOptions);
        var a = t.minZoom, n = t.maxZoom, s = t.clusterRadius;
        a = n && n !== this.options.maxZoom || a && a !== this.options.minZoom || s && s !== this.options.clusterRadius, Rt(this.options, t, { textOptions: e }), a ? this.onChanged(this.options, this.data) : this.refreshCluster(), this.onOptionsChanged(this.getOptions());
      } }, { key: "onChanged", value: function(t, e) {
        var a = this;
        e && e.length ? (e.forEach(function(n) {
          var s = Vt(n.geometry.coordinates, 2), o = s[0];
          s = s[1], -180 <= o && 180 >= o && -90 <= s && 90 >= s || (o = a.map.mercatorToLnglat(o, s), n.geometry.coordinates[0] = o[0], n.geometry.coordinates[1] = o[1]);
        }), this.supercluster = new Pa({ maxZoom: t.maxZoom, minZoom: t.minZoom, radius: t.clusterRadius, minPoints: t.minPoints, extent: t.extent }), this.supercluster.load(e), this.supercluster.trees.forEach(function(n) {
          var s = 0, o = 1 / 0;
          n.points.forEach(function(u) {
            s = Math.max(u.numPoints || 0, s), o = Math.min(u.numPoints || 1 / 0, o);
          }), n.max = s, n.min = o;
        }), this.refreshCluster()) : (this.supercluster = null, this.pointLayer.setData([]), this.iconLayer.setData([]), this.textLayer.setData([]));
      } }, { key: "refreshCluster", value: function() {
        var t = this, e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this.options;
        if (this.supercluster) {
          var a = this.getClusterData(e);
          if (a && a.length)
            if (typeof e.beforeRender == "function" && e.beforeRender(a) === !1)
              this.pointLayer.setData([]), this.iconLayer.setData([]), this.textLayer.setData([]);
            else {
              var n = [], s = [], o = [];
              a.forEach(function(u) {
                u.properties.cluster ? (n.push(u), o.push({ geometry: u.geometry, properties: { text: u.properties.text } })) : u.properties.icon || t.options.iconOptions.icon ? s.push(u) : n.push(u);
              }), this.pointLayer.setData(n), this.iconLayer.setData(s), this.textLayer.setData(e.showText ? o : []), e.enablePicked && e.autoSelect && this.pick(-1, -1);
            }
        }
      } }, { key: "getClusterData", value: function() {
        var t = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this.options, e = this.map.getBounds(), a = this.ne = e.getNorthEast();
        e = this.sw = e.getSouthWest();
        var n = a, s = n.lng;
        return n = n.lat, -180 <= s && 180 >= s && -90 <= n && 90 >= n ? e = [e.lng, e.lat, a.lng, a.lat] : (a = this.map.mercatorToLnglat(
          this.ne.lng,
          this.ne.lat
        ), e = this.map.mercatorToLnglat(this.sw.lng, this.sw.lat), e = e.concat(a)), a = Math.floor(this.map.getZoom()), e = this.supercluster.getClusters(e, a), this.zoom !== a && 0 < e.length && (this.zoom = a, n = this.supercluster.trees, s = n[a] && n[a].max || this.max, a = n[a] && n[a].min || this.min, s !== a && (this.max = s, this.min = a)), this.processData(e, t);
      } }, { key: "processData", value: function(t, e) {
        var a = e.defaultColor, n = e.defaultSize, s = e.gradient, o = e.minSize, u = e.textOptions, c = new gt({ max: this.max, min: ~~this.min || 1, minSize: o || 8, maxSize: e.maxSize || 30, gradient: s });
        a = a || s[0] || "black", n = n || 0.5 * o || 5;
        var v = u && u.format;
        return v = typeof v == "function" ? v : null, t.map(function(l) {
          var f = n, p = a, d = "";
          return l.properties && l.properties.point_count && (d = l.properties.point_count, f = c.getSize(d) || f, p = c.getColor(d), d = v ? v(d) : d), f = Rt({}, l.properties, { text: d, size: f, color: p }), Rt({}, l, { properties: f, children: l.id });
        });
      } }, { key: "pick", value: function(t, e) {
        var a = this.pointLayer.pick(t, e);
        return 0 > a.dataIndex && (a = this.iconLayer.pick(t, e)), (t = a.dataItem) && typeof t.children == "number" && (t.children = this.getClusterPoints(t.children)), a;
      } }, { key: "getClusterPoints", value: function(t) {
        var e = this;
        return t ? this.supercluster.getChildren(t).map(function(a) {
          return a.type === "Feature" ? e.getClusterPoints(a.id) : a;
        }).flat() : [];
      } }, { key: "shouldUpdate", value: function() {
        if (!this.data || !this.supercluster)
          return !1;
        if (this.zoom !== Math.floor(this.map.getZoom()))
          return !0;
        var t = this.map.getBounds(), e = t.getNorthEast();
        if (t = t.getSouthWest(), this.ne.lng !== e.lng || this.ne.lat !== e.lat || this.sw.lng !== t.lng || this.sw.lat !== t.lat)
          return !0;
      } }, { key: "render", value: function(t) {
        this.shouldUpdate() ? this.refreshCluster() : ur(i.prototype.__proto__ || yt(i.prototype), "render", this).call(this, t);
      } }]), i;
    }(lr), ep = function(r) {
      function i(t) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t)), t.options.textOptions = Rt({ collides: !1, depthWrite: !0 }, t.options.textOptions), t.textLayer = new di(t.options.textOptions), t.options.iconOptions = Rt({}, t.options, t.options.iconOptions), t.iconLayer = new La(t.options.iconOptions), t.children = [t.iconLayer, t.textLayer], t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return { clusterRadius: 200, minPoints: 2, showText: !0, maxZoom: 19, minZoom: 4, extent: 400, textOptions: { fontSize: 12, color: "white" }, iconOptions: {} };
      } }, { key: "setOptions", value: function() {
        var t = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, e = this.options.textOptions, a = this.options.iconOptions;
        t.textOptions && Rt(e, t.textOptions), t.iconOptions && Rt(a, t.textOptions), a = t.minZoom;
        var n = t.maxZoom, s = t.clusterRadius;
        a = n && n !== this.options.maxZoom || a && a !== this.options.minZoom || s && s !== this.options.clusterRadius, Rt(this.options, t, { textOptions: e }), a ? this.onChanged(this.options, this.data) : this.refreshCluster(), this.onOptionsChanged(this.getOptions());
      } }, { key: "onChanged", value: function(t, e) {
        var a = this;
        e && e.length ? (e.forEach(function(n) {
          var s = Vt(n.geometry.coordinates, 2), o = s[0];
          s = s[1], -180 <= o && 180 >= o && -90 <= s && 90 >= s || (o = a.map.mercatorToLngLat(o, s), n.geometry.coordinates[0] = o[0], n.geometry.coordinates[1] = o[1]);
        }), this.supercluster = new Pa({ maxZoom: t.maxZoom, minZoom: t.minZoom, minPoints: t.minPoints, radius: t.clusterRadius, extent: t.extent }), this.supercluster.load(e), this.supercluster.trees.forEach(function(n) {
          var s = 0, o = 1 / 0;
          n.points.forEach(function(u) {
            s = Math.max(u.numPoints || 0, s), o = Math.min(u.numPoints || 1 / 0, o);
          }), n.max = s, n.min = o;
        }), this.refreshCluster()) : (this.supercluster = null, this.textLayer.setData([]), this.iconLayer.setData([]));
      } }, { key: "refreshCluster", value: function() {
        var t = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this.options;
        if (this.supercluster) {
          var e = this.getClusterData(t);
          if (e && e.length)
            if (typeof t.beforeRender == "function" && t.beforeRender(t) === !1)
              this.textLayer.setData([]), this.iconLayer.setData([]);
            else {
              var a = [], n = [];
              e.forEach(function(s) {
                s.properties.cluster && a.push({ geometry: s.geometry, properties: { text: s.properties.text } }), n.push(s);
              }), this.textLayer.setData(t.showText ? a : []), this.iconLayer.setData(n), t.enablePicked && t.autoSelect && this.pick(-1, -1);
            }
        }
      } }, { key: "getClusterData", value: function(t) {
        var e = this.map.getBounds(), a = this.ne = e.getNorthEast();
        e = this.sw = e.getSouthWest();
        var n = a, s = n.lng;
        return n = n.lat, -180 <= s && 180 >= s && -90 <= n && 90 >= n ? e = [e.lng, e.lat, a.lng, a.lat] : (a = this.map.mercatorToLnglat(this.ne.lng, this.ne.lat), e = this.map.mercatorToLnglat(this.sw.lng, this.sw.lat), e = e.concat(a)), a = Math.floor(this.map.getZoom()), e = this.supercluster.getClusters(e, a), this.zoom !== a && 0 < e.length && (this.zoom = a, n = this.supercluster.trees, s = n[a] && n[a].max || this.max, a = n[a] && n[a].min || this.min, s !== a && (this.max = s, this.min = a)), this.processData(e, t);
      } }, { key: "processData", value: function(t, e) {
        var a = this, n = (e = e.textOptions) && e.format;
        return n = typeof n == "function" ? n : null, t.map(function(s) {
          var o;
          if ((o = s.properties) && s.properties.point_count) {
            o = s.properties.point_count;
            var u = a.getClusterIcon(o);
            o = n && n(o), o = Rt({}, s.properties, { text: o, icon: u });
          }
          return Rt({}, s, { properties: o, children: s.id });
        });
      } }, { key: "getClusterIcon", value: function(t) {
        var e = this.options.iconExtent, a = de(e).map(function(c) {
          return +c;
        }), n = a.length;
        if (n !== 0) {
          for (var s = 1, o = void 0, u = a[0]; s < n; ) {
            if (o = u, u = a[s], o <= t && u > t)
              return e[o];
            s++;
          }
          if (t > u)
            return e[u];
        }
      } }, { key: "pick", value: function(t, e) {
        return t = this.iconLayer.pick(t, e), (e = t.dataItem) && typeof e.children == "number" && (e.children = this.getClusterPoints(e.children)), t;
      } }, { key: "getClusterPoints", value: function(t) {
        var e = this;
        return t ? this.supercluster.getChildren(t).map(function(a) {
          return a.type === "Feature" ? e.getClusterPoints(a.id) : a;
        }).flat() : [];
      } }, { key: "shouldUpdate", value: function() {
        if (!this.data || !this.supercluster)
          return !1;
        if (this.zoom !== Math.floor(this.map.getZoom()))
          return !0;
        var t = this.map.getBounds(), e = t.getNorthEast();
        if (t = t.getSouthWest(), this.ne.lng !== e.lng || this.ne.lat !== e.lat || this.sw.lng !== t.lng || this.sw.lat !== t.lat)
          return !0;
      } }, { key: "render", value: function(t) {
        this.shouldUpdate() ? this.refreshCluster() : ur(i.prototype.__proto__ || yt(i.prototype), "render", this).call(this, t);
      } }]), i;
    }(lr), rp = function(r) {
      function i(t, e) {
        return ft(this, i), Pt(this, (i.__proto__ || yt(i)).call(this, t, e));
      }
      return Lt(i, r), ct(i, [{
        key: "getDefaultOptions",
        value: function() {
          return Rt(ur(i.prototype.__proto__ || yt(i.prototype), "getDefaultOptions", this).call(this), { style: "grid", gridSize: 500, gradient: { 0: "rgb(50, 50, 256)", "0.1": "rgb(50, 250, 56)", "0.5": "rgb(250, 250, 56)", 1: "rgb(250, 50, 56)" } });
        }
      }, { key: "onChanged", value: function(t, e) {
        this.gl && (e = this.processData(e, t), ur(i.prototype.__proto__ || yt(i.prototype), "onChanged", this).call(this, t, e));
      } }, { key: "generateGrid", value: function(t, e) {
        var a = e.gridSize, n = [], s = {};
        e = t.length;
        for (var o = this.getPointOffset(), u = 0; u < e; u++) {
          var c = this.normizedPoint(t[u].geometry.coordinates), v = c[2];
          c = ~~((c[0] + o[0]) / a) + "_" + ~~((c[1] + o[1]) / a), s[c] === void 0 && (s[c] = { count: 0, num: 0, z: 0 });
          var l = ~~t[u].count || 1;
          "properties" in t[u] && "count" in t[u].properties && (l = ~~t[u].properties.count), s[c].count += l, s[c].num += 1, s[c].z += v;
        }
        return de(s).forEach(function(f) {
          var p = f.split("_");
          n.push([p[0] * a + a / 2, p[1] * a + a / 2, s[f].z / s[f].num, s[f].count]);
        }), n;
      } }, { key: "processData", value: function(t, e) {
        var a = [];
        if (e.style === "normal")
          for (var n = this.getPointOffset(), s = 0; s < t.length; s++) {
            var o = this.normizedPoint(t[s].geometry.coordinates), u = o[0] + n[0], c = o[1] + n[1];
            o = o[2];
            var v = ~~t[s].count || 1;
            "properties" in t[s] && "count" in t[s].properties && (v = ~~t[s].properties.count), a.push([u, c, o, v]);
          }
        else
          a = this.generateGrid(t, e);
        if (n = t = 0, e.max !== void 0 && e.min !== void 0)
          t = e.max, n = e.min;
        else {
          for (a[0] && (t = a[0][3], n = a[0][3]), s = a.length, u = 0; u < s; u++)
            c = a[u], t = Math.max(c[3], t), n = Math.min(c[3], n);
          t /= 2;
        }
        for (e = new gt({ max: ~~t, min: n, gradient: e.gradient }), t = [], n = 0; n < a.length; n++)
          s = a[n], s[0] = s[0], s[1] = s[1], u = e.getImageData(s[3]), t.push({ geometry: { type: "Point", coordinates: [s[0], s[1], s[2]] }, color: [u[0] / 255, u[1] / 255, u[2] / 255, u[3] / 255] });
        return t;
      } }]), i;
    }(vn), ip = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.bufferData = [], t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return { color: [1, 0.05, 0.05, 1] };
      } }, { key: "onChanged", value: function(t, e) {
        var a = this;
        if (t = this.gl) {
          this.buffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, this.buffer);
          for (var n = [], s = function(u) {
            var c = 5 * u;
            for (u = 0; u < e.length; u++)
              e[u].geometry.coordinates.forEach(function(v) {
                for (var l = 0; l < v.length - 1; l++) {
                  var f = a.normizedPoint(v[l]);
                  n.push(f[0]), n.push(f[1]), n.push(Number(c)), f = a.normizedPoint(v[l + 1]), n.push(f[0]), n.push(f[1]), n.push(Number(c));
                }
              });
          }, o = 0; 20 > o; o++)
            s(o);
          t.bufferData(t.ARRAY_BUFFER, new Float32Array(n), t.STATIC_DRAW), this.bufferData = n, t.bindBuffer(t.ARRAY_BUFFER, null);
        }
      } }, { key: "initialize", value: function(t) {
        this.gl = t, this.program = new Ft(t, {
          vertexShader: "uniform mat4 uMatrix;attribute vec3 aPos;void main(){gl_PointSize=10.0;gl_Position=uMatrix*vec4(aPos,1.0);}",
          fragmentShader: "precision mediump float;uniform vec4 uFragColor;void main(){gl_FragColor=uFragColor;}"
        }), this.buffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, this.buffer);
      } }, { key: "render", value: function(t) {
        var e = t.gl;
        t = t.matrix;
        var a = this.program;
        e.useProgram(a.program);
        var n = this.normizedColor(this.options.color);
        e.uniform4f(a.uniforms.uFragColor, n[0], n[1], n[2], n[3]), e.uniformMatrix4fv(a.uniforms.uMatrix, !1, t), e.bindBuffer(e.ARRAY_BUFFER, this.buffer), e.enableVertexAttribArray(a.attributes.aPos), e.vertexAttribPointer(a.attributes.aPos, 3, e.FLOAT, !1, 0, 0), this.setGLState({ blend: !0, blendEquation: e.FUNC_ADD, blendFunc: [e.ONE, e.ONE] }), e.drawArrays(e.LINES, 0, this.bufferData.length / 3);
      } }]), i;
    }(jt), Tl = { circle: 1, square: 2 }, np = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.bufferData = [], t.startTime = t.options.startTime || 0, t.endTime = t.options.endTime, t.time = t.startTime, t.autoUpdate = !0, t;
      }
      return Lt(i, r), ct(i, [{ key: "initialize", value: function(t) {
        this.gl = t, this.program = new Ft(this.gl, { vertexShader: "attribute vec4 aPos;attribute vec4 aColor;attribute float aSize;uniform mat4 u_matrix;varying vec4 vColor;uniform float currentTime;uniform float trailLength;varying float vTime;void main(void){if(aColor.w>=0.0&&aColor.w<=1.0){vColor=aColor;}else{vColor=vec4(aColor.xyz,1.0);}gl_Position=u_matrix*vec4(aPos.xyz,1.0);gl_PointSize=aSize;vTime=1.0-((currentTime-aPos.w)/trailLength);}", fragmentShader: "precision highp float;varying vec4 vColor;uniform int uShape;varying float vTime;void main(void){if(vTime>1.0||vTime<0.0){discard;}if(uShape==1){float d=distance(gl_PointCoord,vec2(0.5,0.5));if(d<0.5){gl_FragColor=vColor;}else{discard;}}else{gl_FragColor=vec4(vColor.rgb,vColor.a*vTime);}}" }), this.f32BufferData = new Float32Array(), this.buffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, this.buffer);
      } }, { key: "onChanged", value: function(t, e) {
        var a = this.gl;
        if (a) {
          this.buffer = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.buffer);
          for (var n = [], s = t.color || [0.1, 0.1, 0.9, 1], o = t.size || 5, u = 0; u < e.length; u++) {
            var c = e[u].geometry.coordinates, v = s;
            Object.prototype.toString.call(v) === "[object Function]" ? v = v(e[u]) : (v = e[u].color || s, "properties" in e[u] && "color" in e[u].properties && (v = e[u].properties.color)), v = this.normizedColor(v);
            var l = this.normizedPoint(c), f = o;
            f = Object.prototype.toString.call(f) === "[object Function]" ? f(e[u]) : Number(f);
            var p = e[u].time || u;
            "properties" in e[u] && "time" in e[u].properties && (p = e[u].properties.time), n.push(l[0], l[1], Number(c[2] || 0), p), n.push(v[0], v[1], v[2], v[3]), n.push(f * window.devicePixelRatio);
          }
          t.endTime === void 0 && (this.endTime = e.length), this.bufferData = n, this.f32BufferData = new Float32Array(n), a.bufferData(a.ARRAY_BUFFER, this.f32BufferData, a.STATIC_DRAW);
        }
      } }, { key: "render", value: function(t) {
        var e = t.gl, a = t.matrix;
        0 >= this.bufferData.length || (t = this.program, e.useProgram(t.program), e.uniformMatrix4fv(t.uniforms.u_matrix, !1, a), e.bindBuffer(e.ARRAY_BUFFER, this.buffer), a = this.f32BufferData.BYTES_PER_ELEMENT, e.enableVertexAttribArray(t.attributes.aPos), e.vertexAttribPointer(t.attributes.aPos, 4, e.FLOAT, !1, 9 * a, 0), e.enableVertexAttribArray(t.attributes.aColor), e.vertexAttribPointer(t.attributes.aColor, 4, e.FLOAT, !1, 9 * a, 4 * a), e.enableVertexAttribArray(t.attributes.aSize), e.vertexAttribPointer(
          t.attributes.aSize,
          1,
          e.FLOAT,
          !1,
          9 * a,
          8 * a
        ), e.uniform1f(t.uniforms.currentTime, this.time), e.uniform1f(t.uniforms.trailLength, this.options.trailLength || 3), a = 1, this.options.shape && Tl[this.options.shape] && (a = Tl[this.options.shape]), e.uniform1i(t.uniforms.uShape, a), this.setGLState({ blend: !0, blendEquation: e.FUNC_ADD, blendFunc: this.options.blend === "lighter" ? [e.SRC_ALPHA, e.ONE] : [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA] }), e.drawArrays(e.POINTS, 0, this.bufferData.length / 9), this.time += this.options.step || 0.1, this.time > this.endTime && (this.time = this.startTime));
      } }]), i;
    }(jt), op = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.bufferData = [], t.startTime = t.options.startTime || 0, t.endTime = t.options.endTime, t.time = t.startTime, t.autoUpdate = !0, t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return { color: [1, 0.05, 0.05, 1], trailLength: 3, step: 0.1, polygonOffset: [0, 0] };
      } }, { key: "initialize", value: function(t) {
        this.gl = t, this.program = new Ft(this.gl, {
          vertexShader: "precision highp float;attribute vec4 aPos;attribute vec4 aColor;uniform mat4 u_matrix;uniform float currentTime;uniform float trailLength;varying float vTime;varying vec4 vColor;void main(){gl_Position=u_matrix*vec4(aPos.xyz,1.0);vColor=aColor;vTime=1.0-((currentTime-aPos.w)/trailLength);}",
          fragmentShader: "precision highp float;uniform vec3 uFragColor;varying vec4 vColor;varying float vTime;void main(){if(vTime>1.0||vTime<0.0){discard;}gl_FragColor=vec4(vColor.rgb,1.0*vTime);}"
        }, this), this.buffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, this.buffer);
      } }, { key: "setTime", value: function(t) {
        this.time = t;
      } }, { key: "onChanged", value: function(t, e) {
        var a = this.gl;
        if (a) {
          this.buffer = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.buffer);
          for (var n = [], s = 0, o = this.options.color, u = 0; u < e.length; u++) {
            var c = e[u].geometry.coordinates;
            e[u].color && (o = e[u].color), "properties" in e[u] && "color" in e[u].properties && (o = e[u].properties.color), Object.prototype.toString.call(o) === "[object Function]" && (o = o(e[u])), o = this.normizedColor(o), c.length > s && (s = c.length);
            for (var v = 0; v < c.length - 1; v++) {
              var l = this.normizedPoint(c[v]);
              n.push(l[0]), n.push(l[1]), n.push(l[2]), c[v][3] === void 0 ? n.push(v) : n.push(Number(c[v][3])), n.push(o[0]), n.push(o[1]), n.push(o[2]), n.push(o[3]), l = this.normizedPoint(c[v + 1]), n.push(l[0]), n.push(l[1]), n.push(l[2]), c[v + 1][3] === void 0 ? n.push(v + 1) : n.push(Number(c[v + 1][3])), n.push(o[0]), n.push(o[1]), n.push(o[2]), n.push(o[3]);
            }
          }
          t.endTime === void 0 && (this.endTime = s), this.bufferData = n, this.f32BufferData = new Float32Array(n), a.bufferData(a.ARRAY_BUFFER, this.f32BufferData, a.STATIC_DRAW);
        }
      } }, { key: "render", value: function(t) {
        var e = t.gl, a = t.matrix;
        t = this.getOptions();
        var n = this.program;
        n.use(e), e.uniformMatrix4fv(n.uniforms.u_matrix, !1, a), e.bindBuffer(e.ARRAY_BUFFER, this.buffer), a = this.f32BufferData.BYTES_PER_ELEMENT, e.enableVertexAttribArray(n.attributes.aPos), e.vertexAttribPointer(n.attributes.aPos, 4, e.FLOAT, !1, 8 * a, 0), e.enableVertexAttribArray(n.attributes.aColor), e.vertexAttribPointer(n.attributes.aColor, 4, e.FLOAT, !1, 8 * a, 4 * a), a = this.normizedColor(t.color), e.uniform3f(n.uniforms.uFragColor, a[0], a[1], a[2]), e.uniform1f(n.uniforms.currentTime, this.time), e.uniform1f(n.uniforms.trailLength, t.trailLength), this.setGLState({
          blend: !0,
          blendEquation: e.FUNC_ADD,
          blendFunc: t.blend === "lighter" ? [e.ONE, e.ONE] : [e.SRC_ALPHA, e.ONE],
          polygonOffset: t.polygonOffset,
          depthMask: !1
        }), e.drawArrays(e.LINES, 0, this.bufferData.length / 8), this.time += t.step, this.time > this.endTime && (this.time = this.startTime);
      } }]), i;
    }(jt), ap = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.name = "IconCollidesLayer", t.index = [], e = t.canvas = document.createElement("canvas"), t.ctx = e.getContext("2d"), t.iconHash = new Nr(), t.boxHash = new Nr(), t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return {
          flat: !1,
          unit: "px",
          scale: 1,
          angle: 0,
          offset: [0, 0],
          padding: [0, 0]
        };
      } }, { key: "initialize", value: function(t) {
        this.gl = t;
        var e = this.getOptions();
        this.texture = null, this.lastUpdateTime = 0, this.program = new Ft(this.gl, {
          vertexShader: "precision highp float;attribute vec3 a_pos;attribute float a_corner;attribute float a_rotation;attribute vec2 a_size;attribute vec2 a_offset;attribute vec2 a_texture_coord;uniform mat4 u_matrix;uniform vec2 u_size;uniform float devicePixelRatio;uniform float u_zoom_units;uniform float u_zIndex;uniform float u_scale;uniform bool u_unit_px;uniform bool u_flat;varying vec2 v_texture_coord;/***点A(x,y)，绕原点顺时针旋转角度a新坐标的计算公式*x1=x*cos(a)+y*sin(a)*y1=y*cos(a)-x*sin(a)*/vec3 transformCoord(vec3 coord,vec2 size,float corner){float x=coord.x;float y=coord.y;if(corner==1.0){x+=-size.x*cos(a_rotation)+size.y*sin(a_rotation);y+=size.y*cos(a_rotation)+size.x*sin(a_rotation);}else if(corner==2.0){x+=size.x*cos(a_rotation)+size.y*sin(a_rotation);y+=size.y*cos(a_rotation)-size.x*sin(a_rotation);}else if(corner==3.0){x+=size.x*cos(a_rotation)-size.y*sin(a_rotation);y+=-size.y*cos(a_rotation)-size.x*sin(a_rotation);}else{x+=-size.x*cos(a_rotation)-size.y*sin(a_rotation);y+=-size.y*cos(a_rotation)+size.x*sin(a_rotation);}return vec3(x,y,coord.z);}void main(){v_texture_coord=a_texture_coord;if(u_flat){vec2 offset=a_offset;vec2 halfSize=a_size/2.0*u_scale;if(u_unit_px){halfSize*=u_zoom_units;offset*=u_zoom_units;}vec3 current=transformCoord(a_pos,halfSize,a_corner);current.z+=u_zIndex;gl_Position=u_matrix*vec4(current.x+offset[0],current.y-offset[1],current.z,1.0);}else{vec4 position=u_matrix*vec4(a_pos,1.0);vec3 screen=position.xyz/position.w;vec2 halfSize=a_size/MAPV_resolution*devicePixelRatio*u_scale;vec2 offset=a_offset*2./MAPV_resolution*devicePixelRatio;if(!u_unit_px){halfSize/=u_zoom_units;offset/=u_zoom_units;}vec3 current=transformCoord(screen,halfSize,a_corner);current.xy=current.xy-offset;current.z+=u_zIndex;gl_Position=vec4(current,1.0);}}",
          fragmentShader: `precision highp float;varying vec2 v_texture_coord;uniform sampler2D u_icon;uniform vec4 uSelectedColor;void main(){vec4 textureColor=texture2D(u_icon,vec2(v_texture_coord.x,1.0-v_texture_coord.y));if(textureColor.a==0.0&&uIsPickRender==false){discard;}gl_FragColor=textureColor;
#if defined(PICK)
if(mapvIsPicked()){gl_FragColor=vec4(uSelectedColor.rgb,gl_FragColor.a);}
#endif
}`,
          defines: e.enablePicked ? ["PICK"] : []
        }, this), this.vertexBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.uvBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.indexBuffer = new dt({ gl: t, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" }), e = [{ name: "a_pos", buffer: this.vertexBuffer, size: 3, stride: 36, type: "FLOAT", offset: 0 }, { name: "a_corner", buffer: this.vertexBuffer, size: 1, stride: 36, type: "FLOAT", offset: 12 }, { name: "a_size", buffer: this.vertexBuffer, size: 2, stride: 36, type: "FLOAT", offset: 16 }, { name: "a_offset", buffer: this.vertexBuffer, size: 2, stride: 36, type: "FLOAT", offset: 24 }, {
          name: "a_rotation",
          buffer: this.vertexBuffer,
          size: 1,
          stride: 36,
          type: "FLOAT",
          offset: 32
        }, { name: "a_texture_coord", buffer: this.uvBuffer, size: 2, stride: 8, type: "FLOAT", offset: 0 }], e = e.concat(this.getCommonAttributes()), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: e });
      } }, { key: "onDestroy", value: function() {
      } }, { key: "onChanged", value: function(t, e) {
        var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {};
        this.gl && (this.cachedData = [], this.boxHash.clear(), this.processCache(t, e, a));
      } }, { key: "processCache", value: function(t, e, a) {
        for (var n = this, s = t.icon, o = t.width, u = t.height, c = t.offset, v = t.angle, l = 0; l < e.length; l++) {
          var f = this.normizedPoint(e[l].geometry.coordinates), p = this.getProperty("icon", s, e[l]), d = this.getProperty("width", o, e[l]), g = this.getProperty("height", u, e[l]), A = this.getProperty("offset", c, e[l]), _ = this.getProperty("angle", v, e[l]);
          f && p && (this.cachedData.push({ point: f, icon: p, width: d, height: g, offset: A, angle: _, dataIndex: l }), this.iconHash.get(p) || this.iconHash.set(p, p));
        }
        e = Hn(this.iconHash.entries()).filter(function(M) {
          return typeof M[1] == "string";
        }).map(function(M) {
          var P = Vt(M, 2)[0];
          return new zr(function(R, B) {
            n.url2canvas(P, function(F) {
              n.iconHash.set(P, F), R();
            });
          });
        }), zr.all(e).then(function(M) {
          n.buildSprite(t), a.autoRender !== !1 && n.webglLayer && n.webglLayer.render();
        });
      } }, { key: "buildSprite", value: function(t) {
        t = t.padding;
        var e = this.canvas, a = this.ctx, n = [], s = !0, o = !1, u = void 0;
        try {
          for (var c = si(this.iconHash), v; !(s = (v = c.next()).done); s = !0) {
            var l = Vt(v.value, 2), f = l[1];
            if (typeof f != "string") {
              var p = f.width, d = f.height;
              n.push({
                w: p + t[0],
                h: d + t[0],
                width: p,
                height: d,
                key: l[0],
                icon: f
              });
            }
          }
        } catch (g) {
          o = !0, u = g;
        } finally {
          try {
            !s && c.return && c.return();
          } finally {
            if (o)
              throw u;
          }
        }
        for (c = Er(n), v = 0; v < n.length; v++)
          l = n[v], this.boxHash.get(l.key) || this.boxHash.set(l.key, l);
        for (v = b(c.w) || 1, c = b(c.h) || 1, e.width = v, e.height = c, a.save(), e = 0; e < n.length; e++)
          c = n[e], a.drawImage(c.icon, c.x + t[0], c.y + t[1], c.width, c.height);
        a.restore(), this.loadTexture();
      } }, { key: "render", value: function(t) {
        if (this.cachedData && this.cachedData.length && this.texture) {
          var e = t.gl, a = t.matrix, n = this.getOptions(), s = this.program;
          s.use(e), this.throttleUpdate(t), this.setGLState({ blend: !0, blendFunc: [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA] }), s.setUniforms(Rt(this.getCommonUniforms(t), { u_icon: this.texture, u_matrix: a, u_flat: n.flat, u_unit_px: n.unit === "px", u_zoom_units: this.map.getZoomUnits(), u_scale: n.scale, u_zIndex: n.zIndex, devicePixelRatio: window.devicePixelRatio })), 0 < this.index.length && (this.indexBuffer.bind(), this.vertexArray.bind(), e.drawElements(e.TRIANGLES, this.index.length, e.UNSIGNED_INT, 0));
        }
      } }, {
        key: "throttleUpdate",
        value: function(t) {
          this.updateIcon(t);
        }
      }, { key: "updateIcon", value: function(t) {
        if (this.iconHash.size && this.boxHash.size) {
          var e = this.getOptions(), a = t.gl;
          t = t.matrix, e = e.enablePicked;
          var n = [], s = [], o = [], u = [], c = this.canvas.width, v = this.canvas.height, l = a.canvas.width / window.devicePixelRatio;
          a = a.canvas.height / window.devicePixelRatio;
          for (var f = new ci(), p = 0, d = 0; d < this.cachedData.length; d++) {
            var g = this.cachedData[d], A = g.point, _ = g.width, M = g.height, P = g.offset, R = g.angle, B = g.dataIndex;
            if (g = this.boxHash.get(g.icon)) {
              _ = _ || g.icon.width, M = M || g.icon.height;
              var F = Vt(A, 3);
              A = F[0];
              var I = F[1];
              F = F[2];
              var U = ue.clone([A, I, F, 1]);
              ue.transformMat4(U, U, t), ue.scale(U, U, 1 / U[3]);
              var G = (U[0] + 1) / 2 * l - _ / 2;
              U = (-U[1] + 1) / 2 * a - M / 2;
              var Z = G + _, Q = U + M;
              if (!(0 > Z || 0 > Q || G > l || U > a || (G = { minX: G, maxX: Z, minY: U, maxY: Q }, f.collides(G)))) {
                for (f.insert(G), G = 0; 4 > G; G++)
                  n.push(A, I, F), n.push(G), n.push(_, M), n.push.apply(n, bt(P)), n.push(R * Math.PI / 180);
                _ = g.x / c, M = (g.x + g.w) / c, P = (g.y + g.h) / v, g = g.y / v, s.push(_, P, _, g, M, g, M, P), g = 4 * p, o.push(g, g + 2, g + 1, g, g + 3, g + 2), e && (B = this.indexToRgb(B), u.push(B[0] / 255, B[1] / 255, B[2] / 255), u.push(B[0] / 255, B[1] / 255, B[2] / 255), u.push(B[0] / 255, B[1] / 255, B[2] / 255), u.push(B[0] / 255, B[1] / 255, B[2] / 255)), p += 1;
              }
            }
          }
          this.index = o, this.vertexBuffer.updateData(new Float32Array(n)), this.uvBuffer.updateData(new Float32Array(s)), this.indexBuffer.updateData(new Uint32Array(o)), e && this.pickBuffer.updateData(new Float32Array(u));
        }
      } }, { key: "url2canvas", value: function(t, e) {
        if ((typeof t > "u" ? "undefined" : be(t)) === "object")
          e(t);
        else {
          var a = new Image();
          a.crossOrigin = "anonymous", a.onload = function() {
            var n = a.width, s = a.height, o = document.createElement("canvas");
            o.width = n, o.height = s, o.getContext("2d").drawImage(a, 0, 0, n, s), e(o);
          }, a.onerror = function() {
            var n = document.createElement("canvas");
            n.width = 20, n.height = 40;
            var s = n.getContext("2d");
            s.fillStyle = "red", s.beginPath(), s.lineTo(0, 0), s.lineTo(20, 0), s.lineTo(10, 40), s.closePath(), s.fill(), e(n);
          }, a.src = t;
        }
      } }, { key: "loadTexture", value: function() {
        var t = this;
        this.canvas ? Ot(this.gl, this.canvas, function(e) {
          t.texture = e;
        }) : this.texture = null;
      } }]), i;
    }(jt), El = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.name = "LineFlowLayer", t.initData(), t.date = /* @__PURE__ */ new Date(), t.autoUpdate = !0, t;
      }
      return Lt(i, r), ct(i, [
        { key: "getDefaultOptions", value: function() {
          return { color: "rgba(25, 25, 250, 1)", blend: "normal", width: 2, antialias: !1, interval: 0.1, duration: 2, trailLength: 0.5, minZoom: 2, maxZoom: 25, polygonOffset: [0, 0] };
        } },
        { key: "initData", value: function() {
          this.dataMgr = { position: [], prev: [], next: [], direction: [], color: [], index: [], counter: [] };
        } },
        { key: "initialize", value: function(t) {
          this.gl = t;
          var e = this.getOptions();
          this.program = new Ft(this.gl, {
            vertexShader: `uniform mat4 u_matrix;uniform float thickness;uniform vec4 uSelectedColor;attribute vec3 position;attribute vec3 next;attribute vec3 previous;attribute float direction;attribute vec4 aColor;attribute float aCounter;attribute vec2 uv;varying vec4 vColor;varying vec2 vNormal;varying float vCounter;vec2 project(vec4 coord){vec3 screen=coord.xyz/coord.w;vec2 clip=(screen.xy+1.0)/2.0;return clip*MAPV_resolution;}vec4 unproject(vec2 projected,float z,float w){vec2 clip=projected/MAPV_resolution;vec2 screen=clip*2.0-1.0;return vec4(screen*w,z,w);}void main(){vColor=aColor;vCounter=aCounter;
#if defined(PICK)
if(mapvIsPicked()){vColor=uSelectedColor;}
#endif
vec4 previousProjected=u_matrix*vec4(previous,1.0);vec4 currentProjected=u_matrix*vec4(position,1.0);vec4 nextProjected=u_matrix*vec4(next,1.0);vec2 currentScreen=project(currentProjected);vec2 previousScreen=project(previousProjected);vec2 nextScreen=project(nextProjected);float len=thickness;float orientation=direction;vec2 dir=vec2(0.0);if(currentScreen==previousScreen){dir=normalize(nextScreen-currentScreen);}else if(currentScreen==nextScreen){dir=normalize(currentScreen-previousScreen);}else{vec2 dirA=normalize((currentScreen-previousScreen));vec2 dirB=normalize((nextScreen-currentScreen));vec2 tangent=normalize(dirA+dirB);vec2 perp=vec2(-dirA.y,dirA.x);vec2 miter=vec2(-tangent.y,tangent.x);dir=tangent;float angle=40.0;if(dot(dirA,dirB)>cos(radians(angle))){len=thickness/dot(miter,perp);}}vec2 normal=vec2(-dir.y,dir.x);vNormal=normal*orientation;normal*=len/2.0;vec2 pos=currentScreen+normal*orientation;vec4 finalPos=unproject(pos,currentProjected.z,currentProjected.w);gl_Position=finalPos;}`,
            fragmentShader: "precision highp float;uniform bool uAntialias;uniform bool uAnimate;uniform float uTime;uniform float duration;uniform float interval;uniform float trailLength;varying vec4 vColor;varying vec2 vNormal;varying float vCounter;void main(){vec4 color=vColor;if(uAntialias){float blur=1.0;blur=1.0-smoothstep(0.98,1.0,length(vNormal));color.a*=blur;}if(uAnimate){float alpha=1.0-fract(mod(1.0-vCounter,interval)*(1.0/interval)+uTime/duration);alpha=(alpha+trailLength-1.0)/trailLength;color.a*=alpha;}gl_FragColor=color;}",
            defines: e.enablePicked ? ["PICK"] : []
          }, this), this.prevBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.currentBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.nextBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.directionBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.colorBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.counterBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.indexBuffer = new dt({ gl: t, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" }), e = [{ stride: 12, name: "previous", buffer: this.prevBuffer, size: 3, type: "FLOAT", offset: 0 }, { stride: 12, name: "position", buffer: this.currentBuffer, size: 3, type: "FLOAT", offset: 0 }, { stride: 12, name: "next", buffer: this.nextBuffer, size: 3, type: "FLOAT", offset: 0 }, { stride: 4, name: "direction", buffer: this.directionBuffer, size: 1, type: "FLOAT", offset: 0 }, { stride: 16, name: "aColor", buffer: this.colorBuffer, size: 4, type: "FLOAT", offset: 0 }, {
            stride: 4,
            name: "aCounter",
            buffer: this.counterBuffer,
            size: 1,
            type: "FLOAT",
            offset: 0
          }], e = e.concat(this.getCommonAttributes()), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: e });
        } },
        { key: "onDestroy", value: function() {
        } },
        { key: "onChanged", value: function(t, e) {
          var a = this;
          if (this.gl) {
            this.initData();
            for (var n = 1, s = [], o = 0; o < e.length; o++) {
              var u = [], c = e[o].geometry.coordinates;
              c && 0 < c.length && (u = e[o].geometry.type === "Polygon" ? c[0].map(function(d) {
                return a.normizedPoint(d);
              }) : c.map(function(d) {
                return a.normizedPoint(d);
              })), u = gs(u), c = u.total, s[o] = u.arr, n = Math.max(c, n);
            }
            for (o = [], u = t.color, c = 0; c < e.length; c++) {
              var v = [], l = e[c].geometry.coordinates;
              l && 0 < l.length && (v = e[c].geometry.type === "Polygon" ? l[0].map(function(d) {
                return a.normizedPoint(d);
              }) : l.map(function(d) {
                return a.normizedPoint(d);
              })), l = u, Object.prototype.toString.call(l) === "[object Function]" ? l = l(e[c]) : (l = e[c].color || u, "properties" in e[c] && "color" in e[c].properties && (l = e[c].properties.color)), l = this.normizedColor(l);
              for (var f = this.addMultipleCoords(v), p = 0; p < f.length; p++)
                this.processData(
                  this.dataMgr,
                  f[p],
                  s[c],
                  n,
                  l
                );
              if (t.enablePicked)
                for (l = this.indexToRgb(c), f = 0; f < v.length; f++)
                  o.push(l[0] / 255, l[1] / 255, l[2] / 255), o.push(l[0] / 255, l[1] / 255, l[2] / 255), t.repeat && (o.push(l[0] / 255, l[1] / 255, l[2] / 255), o.push(l[0] / 255, l[1] / 255, l[2] / 255), o.push(l[0] / 255, l[1] / 255, l[2] / 255), o.push(l[0] / 255, l[1] / 255, l[2] / 255));
            }
            this.counterBuffer.updateData(new Float32Array(this.dataMgr.counter)), this.currentBuffer.updateData(new Float32Array(this.dataMgr.position)), this.prevBuffer.updateData(new Float32Array(this.dataMgr.prev)), this.nextBuffer.updateData(new Float32Array(this.dataMgr.next)), this.directionBuffer.updateData(new Float32Array(this.dataMgr.direction)), this.colorBuffer.updateData(new Float32Array(this.dataMgr.color)), this.indexBuffer.updateData(new Uint32Array(this.dataMgr.index)), t.enablePicked && this.pickBuffer.updateData(new Float32Array(o));
          }
        } },
        { key: "processData", value: function(t, e, a, n, s) {
          var o, u, c, v, l, f, p, d = e.length, g = t.position.length / 6;
          a = We(a.map(function(R) {
            return R / n;
          }));
          var A = We(
            e.map(function(R) {
              return -1;
            }),
            !0
          ), _ = We(e), M = We(e.map(Tn(-1))), P = We(e.map(Tn(1)));
          e = We(e.map(function(R) {
            return s;
          })), d = vs(d, g), (o = t.counter).push.apply(o, bt(a)), (u = t.position).push.apply(u, bt(ir(_))), (c = t.prev).push.apply(c, bt(ir(M))), (v = t.next).push.apply(v, bt(ir(P))), (l = t.direction).push.apply(l, bt(A)), (f = t.color).push.apply(f, bt(ir(e))), (p = t.index).push.apply(p, bt(d));
        } },
        { key: "render", value: function(t) {
          var e = t.gl, a = t.matrix, n = this.dataMgr;
          if (n && !(0 >= n.index.length)) {
            var s = this.getOptions(), o = this.program;
            if (o.use(e), this.map) {
              var u = this.map.getZoom();
              u = !!(u >= s.minZoom && u <= s.maxZoom && this.autoUpdate);
            } else
              u = !0;
            o.setUniforms(Rt(this.getCommonUniforms(t), { u_matrix: a, thickness: s.width, uAntialias: s.antialias, uTime: (/* @__PURE__ */ new Date() - this.date) / 1e3, uAnimate: u, duration: s.duration, interval: s.interval, trailLength: s.trailLength })), this.setGLState({ blend: !0, blendEquation: e.FUNC_ADD, blendFunc: s.blend === "lighter" ? [e.SRC_ALPHA, e.ONE] : [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA], polygonOffset: s.polygonOffset }), this.indexBuffer.bind(), this.vertexArray.bind(), e.drawElements(e.TRIANGLES, n.index.length, e.UNSIGNED_INT, 0);
          }
        } }
      ]), i;
    }(jt), sp = function(r) {
      function i(t, e) {
        return ft(this, i), Pt(this, (i.__proto__ || yt(i)).call(this, t, e));
      }
      return Lt(i, r), ct(i, [
        { key: "getDefaultOptions", value: function() {
          return {};
        } },
        { key: "initialize", value: function(t) {
          this.gl = t;
          var e = this.getOptions();
          this.texture = null, this.program = new Ft(this.gl, {
            vertexShader: `precision highp float;attribute vec3 a_pos;attribute vec2 a_texture_coord;uniform sampler2D uTerrain;uniform mat4 u_proj_matrix;uniform mat4 u_mv_matrix;varying vec2 v_texture_coord;void main(){v_texture_coord=a_texture_coord;vec3 pos=a_pos.xyz;
#if defined(TERRAIN)
vec4 terrainColor=texture2D(uTerrain,vec2(v_texture_coord.s,v_texture_coord.t));vec3 rgb=terrainColor.rgb*256.0;pos.z=-10000.0+((rgb.r*256.0*256.0+rgb.g*256.0+rgb.b)*0.1);pos.z=pos.z-60.0;
#endif
vec4 position=u_proj_matrix*u_mv_matrix*vec4(pos,1.0);gl_Position=position;}`,
            fragmentShader: "precision highp float;varying vec2 v_texture_coord;uniform sampler2D uTile;uniform bool uUseFilter;uniform vec4 uFilterColor;void main(){vec4 textureColor=texture2D(uTile,vec2(v_texture_coord.s,v_texture_coord.t));if(uUseFilter){textureColor=textureColor*uFilterColor;}gl_FragColor=textureColor;}",
            defines: e.terrain ? ["TERRAIN"] : ""
          }, this), this.vertexBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.indexBuffer = new dt({ gl: t, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: [{ name: "a_pos", buffer: this.vertexBuffer, stride: 20, size: 3, type: "FLOAT", offset: 0 }, { name: "a_texture_coord", buffer: this.vertexBuffer, size: 2, stride: 20, type: "FLOAT", offset: 12 }] });
        } },
        { key: "onChanged", value: function(t, e) {
          var a = this;
          this.gl && (this.loadTextureTime && clearTimeout(this.loadTextureTime), this.loadTextureTime = setTimeout(function() {
            a.loadTexture(function() {
              a.parseData(e), a.dataTime = /* @__PURE__ */ new Date(), a.webglLayer.render();
            });
          }, 0));
        } },
        { key: "render", value: function(t) {
          var e = t.gl, a = t.projectionMatrix;
          t = t.viewMatrix;
          var n = this.getOptions(), s = this.program, o = s.uniforms;
          s.use(e), this.texture && (e.activeTexture(e.TEXTURE0), e.uniform1i(o.uTile, 0), e.bindTexture(e.TEXTURE_2D, this.texture), e.activeTexture(e.TEXTURE1), e.uniform1i(o.uTerrain, 1), e.bindTexture(e.TEXTURE_2D, this.terrainSampler), this.setGLState({ cullFace: !1 }), s.setUniforms({ u_proj_matrix: a, uUseFilter: !!n.filterColor, uFilterColor: this.normizedColor(n.filterColor || "rgba(0, 0, 100, 1.0)"), u_mv_matrix: t }), 0 < this.index.length && (this.indexBuffer.bind(), this.vertexArray.bind(), e.drawElements(e.TRIANGLES, this.index.length, e.UNSIGNED_INT, 0)));
        } },
        { key: "loadTexture", value: function(t) {
          var e = this, a = this.getOptions();
          a.tile ? a.terrain ? Ot(this.gl, a.terrain, function(n, s) {
            e.terrainSampler = n, Ot(e.gl, a.tile, function(o, u) {
              e.texture = o, t && t(), e.webglLayer.render();
            });
          }, { TEXTURE_WRAP_S: "MIRRORED_REPEAT", TEXTURE_WRAP_T: "MIRRORED_REPEAT" }) : Ot(this.gl, a.tile, function(n, s) {
            e.texture = n, t && t(), e.webglLayer.render();
          }) : (this.texture = null, t && t());
        } },
        { key: "parseData", value: function(t) {
          var e = this, a = [], n = [];
          if (t && t[0]) {
            var s = t[0].geometry.coordinates[0];
            s = s.map(function(d) {
              return e.normizedPoint(d);
            }), t = s[0][0];
            var o = s[0][1], u = s[0][2], c = (s[2][0] - t) / 16;
            s = (s[2][1] - o) / 16;
            for (var v = 0; 16 >= v; v++)
              for (var l = 0; 16 >= l; l++)
                if (a.push(t + c * l, o + s * v, u), a.push(l / 16, v / 16), 16 > l && 16 > v) {
                  var f = 17 * v + l, p = 17 * (v + 1) + l;
                  n.push(f, p + 1, f + 1), n.push(f, p, p + 1);
                }
          }
          this.index = n, this.vertexBuffer.updateData(new Float32Array(a)), this.indexBuffer.updateData(new Uint32Array(n));
        } }
      ]), i;
    }(jt), up = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.name = "BoardLayer", t.index = [], e = t.canvas = document.createElement("canvas"), t.ctx = e.getContext("2d"), t.iconHash = new Nr(), t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return { unit: "px", scale: 1, angle: 0, offsetZ: 0, padding: [0, 0], polygonOffset: [0, 0], enableColorMix: !1, mixColor: "#fff", mixAmount: 0.5 };
      } }, { key: "initialize", value: function(t) {
        this.gl = t;
        var e = this.getOptions();
        this.texture = null, this.vertexBuffer = new dt({
          gl: t,
          target: "ARRAY_BUFFER",
          usage: "STATIC_DRAW"
        }), this.uvBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.indexBuffer = new dt({ gl: t, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" });
        var a = [{ name: "a_pos", buffer: this.vertexBuffer, size: 3, stride: 32, type: "FLOAT", offset: 0 }, { name: "a_corner", buffer: this.vertexBuffer, size: 1, stride: 32, type: "FLOAT", offset: 12 }, { name: "a_size", buffer: this.vertexBuffer, size: 2, stride: 32, type: "FLOAT", offset: 16 }, {
          name: "a_offsetZ",
          buffer: this.vertexBuffer,
          size: 1,
          stride: 32,
          type: "FLOAT",
          offset: 24
        }, { name: "a_rotation", buffer: this.vertexBuffer, size: 1, stride: 32, type: "FLOAT", offset: 28 }, { name: "a_texture_coord", buffer: this.uvBuffer, size: 2, stride: 8, type: "FLOAT", offset: 0 }];
        a = a.concat(this.getCommonAttributes());
        var n = [];
        e.enablePicked && n.push("PICK"), this.options.enableColorMix && (this.colorBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), a.push({ stride: 16, name: "a_color", buffer: this.colorBuffer, size: 4, type: "FLOAT", offset: 0 }), n.push("USE_COLOR_MIX")), this.program = new Ft(this.gl, {
          vertexShader: `precision highp float;attribute vec3 a_pos;attribute float a_corner;attribute float a_rotation;attribute float a_offsetZ;attribute vec2 a_size;attribute vec2 a_texture_coord;
#if defined(USE_COLOR_MIX)
attribute vec4 a_color;
#endif
uniform mat4 u_matrix;uniform vec2 u_size;uniform float u_zoom_units;uniform float u_scale;uniform bool u_unit_px;varying vec2 v_texture_coord;varying vec4 v_color;/***三维空间内，绕Z轴旋转的矩阵，右手坐标系下*[x'][cos0-sin0  0  0]*[y']=[sin0 cos0   0  0]*[z'][0     0     1  0]*[1][0     0     0  1]*/mat3 rotateZ(float angle){float cos0=cos(angle);float sin0=sin(angle);return mat3(cos0,sin0,0.,-sin0,cos0,0.,0.,0.,1.);}vec3 transformCoord(vec3 coord,vec2 size,float corner){float x=coord.x;float y=coord.y;float z=coord.z;mat3 mat=rotateZ(a_rotation);vec3 rotated=vec3(size[0],0.0,size[1]);if(corner==1.0){rotated=mat*vec3(-size[0],0.0,size[1]);}else if(corner==2.0){rotated=mat*vec3(size[0],0.0,size[1]);}else if(corner==3.0){rotated=mat*vec3(size[0],0.0,-size[1]);}else{rotated=mat*vec3(-size[0],0.0,-size[1]);}x+=rotated.x;y+=rotated.y;z+=rotated.z;return vec3(x,y,z);}void main(){
#if defined(USE_COLOR_MIX)
v_color=a_color;
#endif
v_texture_coord=a_texture_coord;vec2 halfSize=a_size/2.0*u_scale;if(u_unit_px){halfSize*=u_zoom_units;}vec3 current=transformCoord(a_pos,halfSize,a_corner);current.z+=a_offsetZ;gl_Position=u_matrix*vec4(current,1.0);}`,
          fragmentShader: `precision highp float;varying vec2 v_texture_coord;varying vec4 v_color;uniform sampler2D u_icon;uniform vec4 uSelectedColor;
#if defined(USE_COLOR_MIX)
uniform float u_mix_amount;
#endif
void main(){vec4 textureColor=texture2D(u_icon,vec2(v_texture_coord.x,1.0-v_texture_coord.y));if(textureColor.a==0.0&&uIsPickRender==false){discard;}gl_FragColor=textureColor;
#if defined(USE_COLOR_MIX)
gl_FragColor=mix(gl_FragColor,v_color,u_mix_amount);
#endif
#if defined(PICK)
if(mapvIsPicked()){gl_FragColor=vec4(uSelectedColor.rgb,gl_FragColor.a);}
#endif
}`,
          defines: n
        }, this), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: a });
      } }, { key: "onDestroy", value: function() {
      } }, { key: "onChanged", value: function(t, e) {
        this.gl && this.processCache(t, e);
      } }, { key: "forceUpdate", value: function() {
        this.gl && this.processCache(this.options, this.data);
      } }, { key: "processCache", value: function(t, e) {
        var a = this;
        this.cachedData = [];
        for (var n = t.icon, s = t.width, o = t.height, u = t.offsetZ, c = t.angle, v = t.mixColor, l = 0; l < e.length; l++) {
          var f = this.normizedPoint(e[l].geometry.coordinates), p = this.getProperty(
            "icon",
            n,
            e[l]
          ), d = this.getProperty("width", s, e[l]), g = this.getProperty("height", o, e[l]), A = this.getProperty("angle", c, e[l]), _ = this.getProperty("offsetZ", u, e[l]), M = this.normizedColor(this.getProperty("mixColor", v, e[l]));
          f && p && (this.cachedData.push({ point: f, icon: p, width: d, height: g, offsetZ: _, angle: A, mixColor: M, index: l }), this.iconHash.get(p) || this.iconHash.set(p, p));
        }
        e = Hn(this.iconHash.entries()).filter(function(P) {
          return typeof P[1] == "string";
        }).map(function(P) {
          var R = Vt(P, 2)[0];
          return new zr(function(B, F) {
            a.url2canvas(
              R,
              function(I) {
                a.iconHash.set(R, I), B();
              }
            );
          });
        }), zr.all(e).then(function(P) {
          a.buildSprite(t), a.webglLayer.render();
        });
      } }, { key: "buildSprite", value: function(t) {
        var e = t.padding, a = this.canvas, n = this.ctx, s = [], o = new Nr(), u = !0, c = !1, v = void 0;
        try {
          for (var l = si(this.iconHash), f; !(u = (f = l.next()).done); u = !0) {
            var p = Vt(f.value, 2), d = p[1];
            if (typeof d != "string") {
              var g = d.width, A = d.height;
              s.push({ w: g + e[0], h: A + e[0], width: g, height: A, key: p[0], icon: d });
            }
          }
        } catch (_) {
          c = !0, v = _;
        } finally {
          try {
            !u && l.return && l.return();
          } finally {
            if (c)
              throw v;
          }
        }
        for (c = Er(s), u = 0; u < s.length; u++)
          v = s[u], o.get(v.key) || o.set(v.key, v);
        for (u = b(c.w), c = b(c.h), a.width = u || 1, a.height = c || 1, n.save(), a = 0; a < s.length; a++)
          v = s[a], n.drawImage(v.icon, v.x + e[0], v.y + e[1], v.width, v.height);
        n.restore(), this.loadTexture(), this.buildVertex(t, o, u, c);
      } }, { key: "buildVertex", value: function(t, e, a, n) {
        var s = t.enablePicked;
        t = t.enableColorMix;
        for (var o = [], u = [], c = [], v = [], l = [], f = 0; f < this.cachedData.length; f++) {
          var p = this.cachedData[f], d = p.point, g = p.width, A = p.height, _ = p.offsetZ, M = p.angle, P = p.mixColor, R = p.index;
          if (p = e.get(p.icon)) {
            g = g || p.icon.width, A = A || p.icon.height;
            var B = Vt(d, 3);
            d = B[0];
            var F = B[1];
            B = B[2];
            for (var I = 0; 4 > I; I++)
              o.push(d, F, B), o.push(I), o.push(g, A), o.push(_), o.push(M * Math.PI / 180);
            g = p.x / a, A = (p.x + p.w) / a, _ = (p.y + p.h) / n, p = p.y / n, u.push(g, _, g, p, A, p, A, _), p = 4 * f, c.push(p, p + 2, p + 1, p, p + 3, p + 2), s && (R = this.indexToRgb(R), v.push(R[0] / 255, R[1] / 255, R[2] / 255), v.push(R[0] / 255, R[1] / 255, R[2] / 255), v.push(R[0] / 255, R[1] / 255, R[2] / 255), v.push(R[0] / 255, R[1] / 255, R[2] / 255)), t && (l.push.apply(l, bt(P)), l.push.apply(
              l,
              bt(P)
            ), l.push.apply(l, bt(P)), l.push.apply(l, bt(P)));
          }
        }
        this.index = c, this.vertexBuffer.updateData(new Float32Array(o)), this.uvBuffer.updateData(new Float32Array(u)), this.indexBuffer.updateData(new Uint32Array(c)), s && this.pickBuffer.updateData(new Float32Array(v)), t && this.colorBuffer.updateData(new Float32Array(l));
      } }, { key: "render", value: function(t) {
        if (this.cachedData && this.cachedData.length && this.iconHash && this.texture) {
          var e = t.gl, a = t.matrix, n = this.getOptions(), s = this.program;
          s.use(e), this.setGLState({
            blend: !0,
            blendFunc: ie(e, n.blend),
            polygonOffset: n.polygonOffset
          }), t = Rt(this.getCommonUniforms(t), { u_icon: this.texture, u_matrix: a, u_unit_px: n.unit === "px", u_zoom_units: this.map.getZoomUnits(), u_scale: n.scale }), n.enableColorMix && (t = Rt(t, { u_mix_amount: n.mixAmount })), s.setUniforms(t), 0 < this.index.length && (this.indexBuffer.bind(), this.vertexArray.bind(), e.drawElements(e.TRIANGLES, this.index.length, e.UNSIGNED_INT, 0));
        }
      } }, { key: "url2canvas", value: function(t, e) {
        if ((typeof t > "u" ? "undefined" : be(t)) === "object")
          e(t);
        else {
          var a = new Image();
          a.crossOrigin = "anonymous", a.onload = function() {
            var n = a.width, s = a.height, o = document.createElement("canvas");
            o.width = n, o.height = s, o.getContext("2d").drawImage(a, 0, 0, n, s), e(o);
          }, a.onerror = function() {
            var n = document.createElement("canvas");
            n.width = 20, n.height = 40;
            var s = n.getContext("2d");
            s.fillStyle = "red", s.beginPath(), s.lineTo(0, 0), s.lineTo(20, 0), s.lineTo(10, 40), s.closePath(), s.fill(), e(n);
          }, a.src = t;
        }
      } }, { key: "loadTexture", value: function() {
        var t = this;
        this.canvas ? Ot(
          this.gl,
          this.canvas,
          function(e) {
            t.texture = e;
          }
        ) : this.texture = null;
      } }]), i;
    }(jt), lp = function(r) {
      function i(t) {
        ft(this, i);
        var e = Pt(this, (i.__proto__ || yt(i)).call(this, t));
        return t = e.getOptions(), e.shapeLayer = new qn({ enablePicked: t.enablePicked }), e.lineLayer = new da(), e.children = [e.shapeLayer, e.lineLayer], e;
      }
      return Lt(i, r), ct(i, [{ key: "pick", value: function(t, e) {
        return this.shapeLayer.pick(t, e);
      } }, { key: "onOptionsChanged", value: function(t) {
        this.shapeLayer.setOptions({
          onClick: function(e) {
            t.onClick && t.onClick(e);
          },
          selectedIndex: t.selectedIndex,
          selectedColor: t.selectedColor,
          height: 0,
          polygonOffset: [2, 2],
          depthTest: t.depthTest,
          autoSelect: t.autoSelect,
          color: t.fillColor,
          opacity: t.fillOpacity,
          topColor: t.fillColor,
          useLight: !1,
          blend: t.blend
        }), this.lineLayer.setOptions({ depthTest: t.depthTest, dashArray: t.dashArray, color: t.lineColor, width: t.lineWidth, lineJoin: t.lineJoin, blend: t.blend });
      } }, { key: "onDataChanged", value: function(t) {
        this.shapeLayer.setData(t), this.lineLayer.setData(t, { closePath: !0 });
      } }, { key: "getDefaultOptions", value: function() {
        return {
          enablePicked: !1,
          selectedIndex: -1,
          selectedColor: "#ff0000",
          autoSelect: !0,
          dashArray: [0, 0],
          lineColor: "rgba(250, 250, 25, 1)",
          depthTest: !0,
          lineWidth: 2,
          lineJoin: "miter",
          fillColor: "rgba(25, 25, 250, 1)",
          fillOpacity: 1,
          blend: "default"
        };
      } }]), i;
    }(lr), ne = ne || {}, Ml = 0, tr = null, fp = ne.Scene = function(r, i) {
      this.name = i.name !== void 0 ? i.name : null, this.nodes = Array(i.nodes.length);
      for (var t = 0, e = i.nodes.length; t < e; t++)
        this.nodes[t] = r.nodes[i.nodes[t]];
      this.extensions = i.extensions !== void 0 ? i.extensions : null, this.extras = i.extras !== void 0 ? i.extras : null, this.boundingBox = null;
    }, xr = ne.BoundingBox = function(r, i, t) {
      r = r || Mt.fromValues(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), i = i || Mt.fromValues(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY), t === void 0 || t === !0 ? (this.min = Mt.clone(r), this.max = Mt.clone(i)) : (this.min = r, this.max = i), this.transform = pt.create();
    };
    xr.prototype.updateBoundingBox = function(r) {
      Mt.min(this.min, this.min, r.min), Mt.max(this.max, this.max, r.max);
    }, xr.prototype.calculateTransform = function() {
      this.transform[0] = this.max[0] - this.min[0], this.transform[5] = this.max[1] - this.min[1], this.transform[10] = this.max[2] - this.min[2], this.transform[12] = this.min[0], this.transform[13] = this.min[1], this.transform[14] = this.min[2];
    }, xr.getAABBFromOBB = function() {
      var r = Mt.create(), i = Mt.create(), t = Mt.create(), e = Mt.create(), a = Mt.create();
      return function(n, s) {
        Mt.set(r, s[0], s[1], s[2]), Mt.set(i, s[4], s[5], s[6]), Mt.set(t, s[8], s[9], s[10]), s = Mt.fromValues(s[12], s[13], s[14]);
        var o = Mt.clone(s);
        return Mt.scale(e, r, n.min[0]), Mt.scale(
          a,
          r,
          n.max[0]
        ), Mt.min(r, e, a), Mt.add(s, s, r), Mt.max(r, e, a), Mt.add(o, o, r), Mt.scale(e, i, n.min[1]), Mt.scale(a, i, n.max[1]), Mt.min(i, e, a), Mt.add(s, s, i), Mt.max(i, e, a), Mt.add(o, o, i), Mt.scale(e, t, n.min[2]), Mt.scale(a, t, n.max[2]), Mt.min(t, e, a), Mt.add(s, s, t), Mt.max(t, e, a), Mt.add(o, o, t), n = new xr(s, o, !1), n.calculateTransform(), n;
      };
    }();
    var Pl = ne.Accessor = function(r, i) {
      this.bufferView = i, this.componentType = r.componentType, this.byteOffset = r.byteOffset !== void 0 ? r.byteOffset : 0, this.byteStride = i.byteStride, this.normalized = r.normalized !== void 0 ? r.normalized : !1, this.count = r.count, this.type = r.type, this.size = Ra[this.type], this.min = r.min, this.max = r.max, this.extensions = r.extensions !== void 0 ? r.extensions : null, this.extras = r.extras !== void 0 ? r.extras : null;
    };
    Pl.prototype.prepareVertexAttrib = function(r, i) {
      i.vertexAttribPointer(r, this.size, this.componentType, this.normalized, this.byteStride, this.byteOffset), i.enableVertexAttribArray(r);
    };
    var Ca = ne.BufferView = function(r, i) {
      this.byteLength = r.byteLength, this.byteOffset = r.byteOffset !== void 0 ? r.byteOffset : 0, this.byteStride = r.byteStride !== void 0 ? r.byteStride : 0, this.target = r.target !== void 0 ? r.target : null, this.data = i.slice(this.byteOffset, this.byteOffset + this.byteLength), this.extensions = r.extensions !== void 0 ? r.extensions : null, this.extras = r.extras !== void 0 ? r.extras : null, this.buffer = null;
    };
    Ca.prototype.createBuffer = function(r) {
      this.buffer = r.createBuffer();
    }, Ca.prototype.bindData = function(r) {
      return this.target ? (r.bindBuffer(this.target, this.buffer), r.bufferData(this.target, this.data, r.STATIC_DRAW), r.bindBuffer(this.target, null), !0) : !1;
    };
    var hp = ne.Camera = function(r) {
      this.name = r.name !== void 0 ? r.name : null, this.type = r.type, this.othographic = r.othographic === void 0 ? null : r.othographic, this.perspective = r.perspective === void 0 ? null : { yfov: r.perspective.yfov, znear: r.perspective.znear, zfar: r.perspective.zfar !== void 0 ? r.perspective.zfar : null, aspectRatio: r.perspective.aspectRatio !== void 0 ? r.perspective.aspectRatio : null }, this.extensions = r.extensions !== void 0 ? r.extensions : null, this.extras = r.extras !== void 0 ? r.extras : null;
    }, mi = ne.Node = function(r, i) {
      if (this.name = r.name !== void 0 ? r.name : null, this.nodeID = i, this.camera = r.camera !== void 0 ? r.camera : null, this.matrix = pt.create(), r.hasOwnProperty("matrix")) {
        for (i = 0; 16 > i; ++i)
          this.matrix[i] = r.matrix[i];
        this.translation = Mt.create(), pt.getTranslation(this.translation, this.matrix), this.rotation = Qn.create(), pt.getRotation(this.rotation, this.matrix), this.scale = Mt.create(), pt.getScaling(this.scale, this.matrix);
      } else
        this.getTransformMatrixFromTRS(r.translation, r.rotation, r.scale);
      this.children = r.children || [], this.mesh = r.mesh !== void 0 ? tr.glTF.meshes[r.mesh] : null, this.skin = r.skin !== void 0 ? r.skin : null, r.extensions !== void 0 && r.extensions.gl_avatar !== void 0 && tr.enableGLAvatar === !0 && (this.skin = new yp(tr.glTF, tr.skeletonGltf.skins[tr.skeletonGltf.json.extensions.gl_avatar.skins[r.extensions.gl_avatar.skin.name]], r.extensions.gl_avatar.skin.inverseBindMatrices)), this.weights = r.weights !== void 0 ? r.weights : null, this.extensions = r.extensions !== void 0 ? r.extensions : null, this.extras = r.extras !== void 0 ? r.extras : null, this.aabb = null, this.bvh = new xr();
    };
    mi.prototype.traverse = function(r, i) {
      i(this, r), r = 0;
      for (var t = this.children.length; r < t; r++)
        this.children[r].traverse(this, i);
    }, mi.prototype.traversePostOrder = function(r, i) {
      for (var t = 0, e = this.children.length; t < e; t++)
        this.children[t].traversePostOrder(this, i);
      i(this, r);
    }, mi.prototype.traverseTwoExecFun = function(r, i, t) {
      i(this, r);
      for (var e = 0, a = this.children.length; e < a; e++)
        this.children[e].traverseTwoExecFun(this, i, t);
      t(this, r);
    };
    var Ll = pt.create();
    mi.prototype.getTransformMatrixFromTRS = function(r, i, t) {
      this.translation = r !== void 0 ? Mt.fromValues(r[0], r[1], r[2]) : Mt.fromValues(0, 0, 0), this.rotation = i !== void 0 ? ue.fromValues(i[0], i[1], i[2], i[3]) : ue.fromValues(0, 0, 0, 1), this.scale = t !== void 0 ? Mt.fromValues(t[0], t[1], t[2]) : Mt.fromValues(1, 1, 1), this.updateMatrixFromTRS();
    }, mi.prototype.updateMatrixFromTRS = function() {
      pt.fromRotationTranslation(Ll, this.rotation, this.translation), pt.scale(this.matrix, Ll, this.scale);
    };
    var cp = ne.Mesh = function(r, i) {
      this.meshID = i, this.name = r.name !== void 0 ? r.name : null, this.primitives = [], this.boundingBox = null, i = 0;
      for (var t = r.primitives.length; i < t; ++i) {
        var e = r.primitives[i];
        e = new dp(tr.glTF, e), this.primitives.push(e), e.boundingBox && (this.boundingBox || (this.boundingBox = new xr()), this.boundingBox.updateBoundingBox(e.boundingBox));
      }
      this.boundingBox && this.boundingBox.calculateTransform(), this.weights = r.weights !== void 0 ? r.weights : null, this.extensions = r.extensions !== void 0 ? r.extensions : null, this.extras = r.extras !== void 0 ? r.extras : null;
    }, dp = ne.Primitive = function(r, i) {
      this.attributes = i.attributes, this.indices = i.indices !== void 0 ? i.indices : null;
      var t;
      if (i.extensions !== void 0 && i.extensions.gl_avatar !== void 0 && tr.enableGLAvatar === !0 && i.extensions.gl_avatar.attributes)
        for (t in i.extensions.gl_avatar.attributes)
          this.attributes[t] = i.extensions.gl_avatar.attributes[t];
      this.indices !== null ? (this.indicesComponentType = r.json.accessors[this.indices].componentType, this.indicesLength = r.json.accessors[this.indices].count, this.indicesOffset = r.json.accessors[this.indices].byteOffset || 0) : (this.drawArraysCount = r.json.accessors[this.attributes.POSITION].count, this.drawArraysOffset = r.json.accessors[this.attributes.POSITION].byteOffset || 0);
      for (t in this.attributes)
        this.attributes[t] = r.accessors[this.attributes[t]];
      this.material = i.material !== void 0 ? r.materials[i.material] : null, this.mode = i.mode !== void 0 ? i.mode : 4, this.targets = i.targets, this.extensions = i.extensions !== void 0 ? i.extensions : null, this.extras = i.extras !== void 0 ? i.extras : null, this.boundingBox = this.shader = this.indexBuffer = this.vertexBuffer = this.vertexArray = null, this.attributes.POSITION !== void 0 && (r = this.attributes.POSITION, r.max && r.type === "VEC3" && (this.boundingBox = new xr(Mt.fromValues(r.min[0], r.min[1], r.min[2]), Mt.fromValues(r.max[0], r.max[1], r.max[2]), !1), this.boundingBox.calculateTransform()));
    }, Cl = ne.Texture = function(r) {
      this.name = r.name !== void 0 ? r.name : null, this.sampler = r.sampler !== void 0 ? tr.glTF.samplers[r.sampler] : null, this.source = r.source !== void 0 ? tr.glTF.images[r.source] : null, this.extensions = r.extensions !== void 0 ? r.extensions : null, this.extras = r.extras !== void 0 ? r.extras : null, this.texture = null;
    };
    Cl.prototype.createTexture = function(r) {
      this.texture = r.createTexture(), r.bindTexture(r.TEXTURE_2D, this.texture), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, this.source), r.generateMipmap(r.TEXTURE_2D), r.bindTexture(r.TEXTURE_2D, null);
    };
    var Sl = ne.Sampler = function(r) {
      this.name = r.name !== void 0 ? r.name : null, this.magFilter = r.magFilter !== void 0 ? r.magFilter : null, this.minFilter = r.minFilter !== void 0 ? r.minFilter : null, this.wrapS = r.wrapS !== void 0 ? r.wrapS : 10497, this.wrapT = r.wrapT !== void 0 ? r.wrapT : 10497, this.extensions = r.extensions !== void 0 ? r.extensions : null, this.extras = r.extras !== void 0 ? r.extras : null, this.sampler = null;
    };
    Sl.prototype.createSampler = function(r) {
      this.sampler = r.createSampler(), this.minFilter ? r.samplerParameteri(this.sampler, r.TEXTURE_MIN_FILTER, this.minFilter) : r.samplerParameteri(this.sampler, r.TEXTURE_MIN_FILTER, r.NEAREST_MIPMAP_LINEAR), this.magFilter ? r.samplerParameteri(this.sampler, r.TEXTURE_MAG_FILTER, this.magFilter) : r.samplerParameteri(
        this.sampler,
        r.TEXTURE_MAG_FILTER,
        r.LINEAR
      ), r.samplerParameteri(this.sampler, r.TEXTURE_WRAP_S, this.wrapS), r.samplerParameteri(this.sampler, r.TEXTURE_WRAP_T, this.wrapT);
    };
    var Sa = ne.TextureInfo = function(r) {
      this.index = r.index, this.texCoord = r.texCoord !== void 0 ? r.texCoord : 0, this.extensions = r.extensions !== void 0 ? r.extensions : null, this.extras = r.extras !== void 0 ? r.extras : null;
    }, Rl = ne.PbrMetallicRoughness = function(r) {
      this.baseColorFactor = r.baseColorFactor !== void 0 ? r.baseColorFactor : [1, 1, 1, 1], this.baseColorTexture = r.baseColorTexture !== void 0 ? new Sa(r.baseColorTexture) : null, this.metallicFactor = r.metallicFactor !== void 0 ? r.metallicFactor : 1, this.roughnessFactor = r.roughnessFactor !== void 0 ? r.roughnessFactor : 1, this.metallicRoughnessTexture = r.metallicRoughnessTexture !== void 0 ? new Sa(r.metallicRoughnessTexture) : null, this.extensions = r.extensions !== void 0 ? r.extensions : null, this.extras = r.extras !== void 0 ? r.extras : null;
    }, pp = ne.NormalTextureInfo = function(r) {
      this.index = r.index, this.texCoord = r.texCoord !== void 0 ? r.texCoord : 0, this.scale = r.scale !== void 0 ? r.scale : 1, this.extensions = r.extensions !== void 0 ? r.extensions : null, this.extras = r.extras !== void 0 ? r.extras : null;
    }, vp = ne.OcclusionTextureInfo = function(r) {
      this.index = r.index, this.texCoord = r.texCoord !== void 0 ? r.texCoord : 0, this.strength = r.strength !== void 0 ? r.strength : 1, this.extensions = r.extensions !== void 0 ? r.extensions : null, this.extras = r.extras !== void 0 ? r.extras : null;
    }, gp = ne.Material = function(r) {
      this.name = r.name !== void 0 ? r.name : null, this.pbrMetallicRoughness = r.pbrMetallicRoughness !== void 0 ? new Rl(r.pbrMetallicRoughness) : new Rl({ baseColorFactor: [1, 1, 1, 1], metallicFactor: 1, metallicRoughnessTexture: 1 }), this.normalTexture = r.normalTexture !== void 0 ? new pp(r.normalTexture) : null, this.occlusionTexture = r.occlusionTexture !== void 0 ? new vp(r.occlusionTexture) : null, this.emissiveTexture = r.emissiveTexture !== void 0 ? new Sa(r.emissiveTexture) : null, this.emissiveFactor = r.emissiveFactor !== void 0 ? r.emissiveFactor : [0, 0, 0], this.alphaMode = r.alphaMode !== void 0 ? r.alphaMode : "OPAQUE", this.alphaCutoff = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5, this.doubleSided = r.doubleSided || !1, this.extensions = r.extensions !== void 0 ? r.extensions : null, this.extras = r.extras !== void 0 ? r.extras : null;
    }, mp = ne.Skin = function(r, i, t) {
      this.name = i.name !== void 0 ? i.name : null, this.skinID = t, this.joints = Array(i.joints.length);
      var e;
      for (t = 0, e = this.joints.length; t < e; t++)
        this.joints[t] = r.nodes[i.joints[t]];
      if (this.skeleton = i.skeleton !== void 0 ? r.nodes[i.skeleton] : null, this.inverseBindMatrices = i.inverseBindMatrices !== void 0 ? r.accessors[i.inverseBindMatrices] : null, this.extensions = i.extensions !== void 0 ? i.extensions : null, this.extras = i.extras !== void 0 ? i.extras : null, this.uniformBlockID = Ml++, this.inverseBindMatrices)
        for (this.inverseBindMatricesData = Mn(this.inverseBindMatrices), this.inverseBindMatrix = [], this.jointMatrixUniformBuffer = null, this.jointMatrixUnidormBufferData = new Float32Array(1040), t = 0, e = this.inverseBindMatricesData.length; t < e; t += 16)
          this.inverseBindMatrix.push(pt.fromValues(this.inverseBindMatricesData[t], this.inverseBindMatricesData[t + 1], this.inverseBindMatricesData[t + 2], this.inverseBindMatricesData[t + 3], this.inverseBindMatricesData[t + 4], this.inverseBindMatricesData[t + 5], this.inverseBindMatricesData[t + 6], this.inverseBindMatricesData[t + 7], this.inverseBindMatricesData[t + 8], this.inverseBindMatricesData[t + 9], this.inverseBindMatricesData[t + 10], this.inverseBindMatricesData[t + 11], this.inverseBindMatricesData[t + 12], this.inverseBindMatricesData[t + 13], this.inverseBindMatricesData[t + 14], this.inverseBindMatricesData[t + 15]));
    }, yp = ne.SkinLink = function(r, i, t) {
      if (this.isLink = !0, r.skins || (r.skins = []), r.skins.push(this), this.name = i.name, this.skinID = r.skins.length - 1, this.joints = i.joints, this.skeleton = i.skeleton, this.inverseBindMatrices = t !== void 0 ? r.accessors[t] : null, this.uniformBlockID = Ml++, this.inverseBindMatrices)
        for (this.inverseBindMatricesData = Mn(this.inverseBindMatrices), this.inverseBindMatrix = [], this.jointMatrixUniformBuffer = null, this.jointMatrixUnidormBufferData = new Float32Array(1040), r = 0, i = this.inverseBindMatricesData.length; r < i; r += 16)
          this.inverseBindMatrix.push(pt.fromValues(
            this.inverseBindMatricesData[r],
            this.inverseBindMatricesData[r + 1],
            this.inverseBindMatricesData[r + 2],
            this.inverseBindMatricesData[r + 3],
            this.inverseBindMatricesData[r + 4],
            this.inverseBindMatricesData[r + 5],
            this.inverseBindMatricesData[r + 6],
            this.inverseBindMatricesData[r + 7],
            this.inverseBindMatricesData[r + 8],
            this.inverseBindMatricesData[r + 9],
            this.inverseBindMatricesData[r + 10],
            this.inverseBindMatricesData[r + 11],
            this.inverseBindMatricesData[r + 12],
            this.inverseBindMatricesData[r + 13],
            this.inverseBindMatricesData[r + 14],
            this.inverseBindMatricesData[r + 15]
          ));
    }, xp = ne.Target = function(r) {
      this.nodeID = r.node !== void 0 ? r.node : null, this.path = r.path, this.extensions = r.extensions !== void 0 ? r.extensions : null, this.extras = r.extras !== void 0 ? r.extras : null;
    }, _p = ne.Channel = function(r, i) {
      this.sampler = i.samplers[r.sampler], this.target = new xp(r.target), this.extensions = r.extensions !== void 0 ? r.extensions : null, this.extras = r.extras !== void 0 ? r.extras : null;
    }, Ol = ne.AnimationSampler = function(r, i) {
      this.input = r.accessors[i.input], this.output = r.accessors[i.output], this.inputTypedArray = Mn(this.input), this.outputTypedArray = Mn(this.output), this.interpolation = i.interpolation !== void 0 ? i.interpolation : "LINEAR", this.extensions = i.extensions !== void 0 ? i.extensions : null, this.extras = i.extras !== void 0 ? i.extras : null, this.curIdx = 0, this.curValue = ue.create(), this.endT = this.inputTypedArray[this.inputTypedArray.length - 1], this.inputMax = this.endT - this.inputTypedArray[0];
    }, Bl = ue.create(), Dl = ue.create();
    Ol.prototype.getValue = function(r) {
      r > this.endT && (r -= this.inputMax * Math.ceil((r - this.endT) / this.inputMax), this.curIdx = 0);
      for (var i = this.inputTypedArray.length; this.curIdx <= i - 2 && r >= this.inputTypedArray[this.curIdx + 1]; )
        this.curIdx++;
      this.curIdx >= i - 1 && (r -= this.inputMax, this.curIdx = 0), i = Ra[this.output.type];
      var t = i === 4 ? Qn.slerp : ue.lerp, e = this.curIdx, a = e * i, n = a + i;
      for (r = Math.max(0, r - this.inputTypedArray[e]) / (this.inputTypedArray[e + 1] - this.inputTypedArray[e]), e = 0; e < i; e++)
        Bl[e] = this.outputTypedArray[a + e], Dl[e] = this.outputTypedArray[n + e];
      switch (this.interpolation) {
        case "LINEAR":
          t(this.curValue, Bl, Dl, r);
      }
    };
    var Ap = ne.Animation = function(r, i) {
      this.name = i.name !== void 0 ? i.name : null;
      var t;
      this.samplers = [];
      var e = 0;
      for (t = i.samplers.length; e < t; e++)
        this.samplers[e] = new Ol(r, i.samplers[e]);
      for (this.channels = [], e = 0, t = i.channels.length; e < t; e++)
        this.channels[e] = new _p(i.channels[e], this);
      this.extensions = i.extensions !== void 0 ? i.extensions : null, this.extras = i.extras !== void 0 ? i.extras : null;
    }, wp = ne.glTFModel = function(r) {
      this.json = r, this.defaultScene = r.scene !== void 0 ? r.scene : 0, this.version = Number(r.asset.version), r.accessors && (this.accessors = Array(r.accessors.length)), r.bufferViews && (this.bufferViews = Array(r.bufferViews.length)), r.scenes && (this.scenes = Array(r.scenes.length)), r.nodes && (this.nodes = Array(r.nodes.length)), r.meshes && (this.meshes = Array(r.meshes.length)), r.materials && (this.materials = Array(r.materials.length)), r.textures && (this.textures = Array(r.textures.length)), r.samplers && (this.samplers = Array(r.samplers.length)), r.images && (this.images = Array(r.images.length)), r.skins && (this.skins = Array(r.skins.length)), r.animations && (this.animations = Array(r.animations.length)), r.cameras && (this.cameras = Array(r.cameras.length)), this.extensions = r.extensions !== void 0 ? r.extensions : null, this.extras = r.extras !== void 0 ? r.extras : null;
    }, yi = ne.glTFLoader = function(r) {
      this._init(), this.glTF = null, this.enableGLAvatar = !1, this.linkSkeletonGltf = null;
    };
    yi.prototype._init = function() {
      this._loadDone = !1, this._bufferLoaded = this._bufferRequested = 0, this._buffers = [], this._bufferTasks = {}, this._finishedPendingTasks = this._pendingTasks = this._imageLoaded = this._imageRequested = this._shaderLoaded = this._shaderRequested = 0, this.onload = null, tr = this;
    }, yi.prototype._checkComplete = function() {
      this._bufferRequested == this._bufferLoaded && this._imageRequested == this._imageLoaded && (this._loadDone = !0), this._loadDone && this._pendingTasks == this._finishedPendingTasks && (this._postprocess(), this.onload(this.glTF));
    }, yi.prototype.loadGLTF_GL_Avatar_Skin = function(r, i, t) {
      this.enableGLAvatar = !0, this.skeletonGltf = i, this.loadGLTF(r, t);
    }, yi.prototype.loadGLTF = function(r, i) {
      this._init(), this.onload = i || function(e) {
      }, this.baseUri = Jf(r);
      var t = this;
      Qf(r, function(e) {
        e = JSON.parse(e), t.glTF = new wp(e);
        var a, n = function(u) {
          if (t._buffers[a] = u, t._bufferLoaded++, t._bufferTasks[a]) {
            var c, v = 0;
            for (c = t._bufferTasks[a].length; v < c; ++v)
              t._bufferTasks[a][v](u);
          }
          t._checkComplete();
        };
        if (e.buffers)
          for (a in e.buffers) {
            t._bufferRequested++;
            var s = e.buffers[a].uri;
            s.indexOf("base64") === -1 && (s = t.baseUri + s), Kf(s, n);
          }
        n = function(u, c) {
          t._imageLoaded++, t.glTF.images[c] = u, t._checkComplete();
        };
        var o;
        if (e.images)
          for (o in e.images)
            t._imageRequested++, qf(t.baseUri + e.images[o].uri, o, n);
        t._checkComplete();
      });
    }, yi.prototype._postprocess = function() {
      function r(v, l) {
        var f = u[v.nodeID];
        l !== null ? pt.mul(f, u[l.nodeID], v.matrix) : pt.copy(f, v.matrix);
      }
      function i(v, l) {
        var f = u[v.nodeID];
        l = l !== null ? l.bvh : c.boundingBox, v.mesh && (a = v.mesh, a.boundingBox && (v.aabb = xr.getAABBFromOBB(a.boundingBox, f), v.children.length === 0 && (Mt.copy(v.bvh.min, v.aabb.min), Mt.copy(v.bvh.max, v.aabb.max)))), Mt.min(l.min, l.min, v.bvh.min), Mt.max(l.max, l.max, v.bvh.max);
      }
      tr = this;
      var t, e, a;
      if (this.glTF.cameras) {
        var n = 0;
        for (t = this.glTF.cameras.length; n < t; n++)
          this.glTF.cameras[n] = new hp(this.glTF.json.cameras[n]);
      }
      if (this.glTF.bufferViews)
        for (n = 0, t = this.glTF.bufferViews.length; n < t; n++)
          this.glTF.bufferViews[n] = new Ca(this.glTF.json.bufferViews[n], this._buffers[this.glTF.json.bufferViews[n].buffer]);
      if (this.glTF.accessors)
        for (n = 0, t = this.glTF.accessors.length; n < t; n++)
          this.glTF.accessors[n] = new Pl(this.glTF.json.accessors[n], this.glTF.bufferViews[this.glTF.json.accessors[n].bufferView]);
      if (this.glTF.materials)
        for (n = 0, t = this.glTF.materials.length; n < t; n++)
          this.glTF.materials[n] = new gp(this.glTF.json.materials[n]);
      if (this.glTF.samplers)
        for (n = 0, t = this.glTF.samplers.length; n < t; n++)
          this.glTF.samplers[n] = new Sl(this.glTF.json.samplers[n]);
      if (this.glTF.textures)
        for (n = 0, t = this.glTF.textures.length; n < t; n++)
          this.glTF.textures[n] = new Cl(this.glTF.json.textures[n]);
      for (n = 0, t = this.glTF.meshes.length; n < t; n++)
        this.glTF.meshes[n] = new cp(this.glTF.json.meshes[n], n);
      for (n = 0, t = this.glTF.nodes.length; n < t; n++)
        this.glTF.nodes[n] = new mi(this.glTF.json.nodes[n], n);
      for (n = 0, t = this.glTF.nodes.length; n < t; n++) {
        var s = this.glTF.nodes[n], o = 0;
        for (e = s.children.length; o < e; o++)
          s.children[o] = this.glTF.nodes[s.children[o]];
      }
      var u = Array(this.glTF.nodes.length);
      for (n = 0, t = u.length; n < t; n++)
        u[n] = pt.create();
      for (n = 0, t = this.glTF.scenes.length; n < t; n++) {
        var c = this.glTF.scenes[n] = new fp(this.glTF, this.glTF.json.scenes[n]);
        for (c.boundingBox = new xr(), o = 0, e = c.nodes.length; o < e; o++)
          s = c.nodes[o], s.traverseTwoExecFun(null, r, i);
        c.boundingBox.calculateTransform();
      }
      for (o = 0, e = this.glTF.nodes.length; o < e; o++)
        s = this.glTF.nodes[o], s.bvh !== null && s.bvh.calculateTransform();
      if (this.glTF.animations)
        for (n = 0, t = this.glTF.animations.length; n < t; n++)
          this.glTF.animations[n] = new Ap(this.glTF, this.glTF.json.animations[n]);
      if (this.glTF.json.skins)
        for (n = 0, t = this.glTF.skins.length; n < t; n++)
          for (this.glTF.skins[n] = new mp(this.glTF, this.glTF.json.skins[n], n), s = this.glTF.skins[n].joints, o = 0, e = s.length; o < e; o++)
            s[o].jointID = o;
      for (n = 0, t = this.glTF.nodes.length; n < t; n++)
        s = this.glTF.nodes[n], s.skin !== null && typeof s.skin == "number" && (s.skin = this.glTF.skins[s.skin]);
    };
    var Ra = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, bl = function(r) {
      function i(t, e) {
        return ft(this, i), Pt(this, (i.__proto__ || yt(i)).call(this, t, e));
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return { scale: 1 };
      } }, { key: "initialize", value: function(t) {
        var e = this;
        this.gl = t;
        var a = this.getOptions();
        this.gltfObj = $f({ gl: t, options: a }), new yi().loadGLTF(a.url, function(n) {
          e.gltfObj.setupScene(n), e.webglLayer.render();
        });
      } }, {
        key: "onChanged",
        value: function(t, e) {
        }
      }, { key: "render", value: function(t) {
        var e = t.gl;
        t = t.matrix;
        var a = this.getData(), n = this.getOptions(), s = n.scale, o = [s, s, s];
        for (n.unit === "px" && this.map && (o = this.map.getZoomUnits(), o = [s * o, s * o, s * o]), s = 0; s < a.length; s++) {
          var u = a[s].geometry.coordinates;
          n = pt.create();
          var c = pt.create();
          u = this.normizedPoint(u), pt.identity(n), pt.translate(n, n, [u[0], u[1], u[2]]), pt.rotateX(n, n, Math.PI / 2), pt.rotateY(n, n, (a[s].angle || 0) * Math.PI / 180), pt.scale(n, n, o), pt.mul(c, t, n), this.gltfObj.render({ gl: e, matrix: c });
        }
      } }]), i;
    }(jt), xi = xi || {};
    (function() {
      function r(t, e, a) {
        return a = t.createShader(a), t.shaderSource(a, e), t.compileShader(a), a;
      }
      xi.getShaderSource = function(t) {
        return document.getElementById(t).textContent.replace(/^\s+|\s+$/g, "");
      }, xi.createProgram = function(t, e, a) {
        var n = t.createProgram();
        return e = r(t, e, t.VERTEX_SHADER), a = r(t, a, t.FRAGMENT_SHADER), t.attachShader(n, e), t.deleteShader(e), t.attachShader(n, a), t.deleteShader(a), t.linkProgram(n), t.getProgramInfoLog(n), t.getShaderInfoLog(e), t.getShaderInfoLog(a), n;
      };
      var i = xi.loadImage = function(t, e) {
        var a = new Image();
        return a.crossOrigin = "Anonymous", a.src = t, a.onload = e, a;
      };
      xi.loadImages = function(t, e) {
        function a() {
          0 >= --s && e(n);
        }
        for (var n = [], s = t.length, o = 0; o < s; ++o)
          n.push(i(t[o], a));
      };
    })();
    var Tp = function(r) {
      function i(t) {
        ft(this, i);
        var e = Pt(this, (i.__proto__ || yt(i)).call(this, t));
        return t = e.getOptions(), e.gltfLayer = new bl({ url: t.url, scale: t.scale }), e.children = [e.gltfLayer], e.autoUpdate = !0, e.index = [], e.newData = [], e.isStarted = t.autoPlay !== !1, e;
      }
      return Lt(i, r), ct(i, [
        {
          key: "getDefaultOptions",
          value: function() {
            return { url: "https://mapv-website.bj.bcebos.com/gl/examples/model/car.gltf", scale: 1, step: 1, defaultAngle: 90 };
          }
        },
        { key: "onOptionsChanged", value: function(t) {
          this.gltfLayer.setOptions({});
        } },
        { key: "onDataChanged", value: function(t) {
          var e = this;
          this.index = [], this.newData = [];
          for (var a = 0; a < t.length; a++) {
            this.index.push(0);
            var n = t[a].geometry.coordinates;
            t[a].geometry.type === "LineString" ? this.newData.push(this._addPath(n)) : n.forEach(function(s) {
              e.newData.push(e._addPath(s));
            });
          }
          this.updatePoints();
        } },
        { key: "lnglatToMercator", value: function(t, e) {
          return e = e * Math.PI / 180, e = 31890685e-1 * Math.log((1 + Math.sin(e)) / (1 - Math.sin(e))), [parseFloat((t * Math.PI / 180 * 6378137).toFixed(2)), parseFloat(e.toFixed(2))];
        } },
        { key: "getDeg", value: function(t, e) {
          -180 < t[0] && 180 > t[0] && (t = this.lnglatToMercator(t[0], t[1]), e = this.lnglatToMercator(e[0], e[1]));
          var a = 180 * Math.atan((e[1] - t[1]) / (e[0] - t[0])) / Math.PI;
          return e[0] > t[0] && (a -= 180), a;
        } },
        { key: "getPoint", value: function(t, e, a) {
          return [t[0] + (e[0] - t[0]) * a, t[1] + (e[1] - t[1]) * a, t[2] && e[2] ? t[2] + (e[2] - t[2]) * a : 0];
        } },
        { key: "updatePoints", value: function() {
          for (var t = this.getOptions(), e = this.newData, a = [], n = 0; n < e.length; n++) {
            for (var s = e[n], o = Math.floor(this.index[n]), u = o + 1; s[u] && s[u][0] === s[o][0] && s[u][1] === s[o][1]; )
              u++;
            u >= s.length - 1 && (u = --o), u = this.getDeg(s[o], s[u]), a.push({ geometry: { type: "Point", coordinates: this.getPoint(s[o], s[o + 1], this.index[n] % 1) }, angle: u - t.defaultAngle });
          }
          this.pointData = a, this.gltfLayer.setData(a, { autoRender: !1 });
        } },
        { key: "getCurrentPoint", value: function() {
          return this.pointData;
        } },
        { key: "getDistance", value: function(t, e) {
          var a = t[1] * Math.PI / 180, n = e[1] * Math.PI / 180;
          return t = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin((a - n) / 2), 2) + Math.cos(a) * Math.cos(n) * Math.pow(Math.sin((t[0] * Math.PI / 180 - e[0] * Math.PI / 180) / 2), 2))), t = Math.round(6378137e4 * t) / 1e4;
        } },
        { key: "_addPath", value: function(t) {
          for (var e = t.length, a = 0, n = [], s = [], o = 1; o < e; o++) {
            var u = this.getDistance(t[o - 1], t[o]);
            n.push(u), a += u;
          }
          for (u = [0], o = 1; o < e; o++) {
            var c = (n[o - 1] / a).toFixed(2);
            u[o] = u[o - 1] + parseFloat(c, 10), s = s.concat(this._getPath(
              t[o - 1],
              t[o],
              1e3 * c
            ));
          }
          return this._pathPercents = u, s;
        } },
        { key: "_getPath", value: function(t, e, a) {
          if (a === 0)
            return [t];
          for (var n = [], s = 0; s <= a; s++)
            n.push([(e[0] - t[0]) / a * s + t[0], (e[1] - t[1]) / a * s + t[1], e[2] && t[2] ? (e[2] - t[2]) / a * s + t[2] : 0]);
          return n;
        } },
        { key: "start", value: function() {
          this.isStarted = !0;
        } },
        { key: "stop", value: function() {
          this.isStarted = !1;
        } },
        { key: "render", value: function(t) {
          if (ur(i.prototype.__proto__ || yt(i.prototype), "render", this).call(this, t), t = this.getOptions(), this.isStarted)
            for (var e = this.newData, a = 0; a < this.index.length; a++)
              this.index[a] += t.step, this.index[a] > e[a].length - 2 && (this.index[a] = 0);
          this.updatePoints();
        } }
      ]), i;
    }(lr), Ep = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.name = "BoardTextLayer", e = t.canvas = document.createElement("canvas"), e = t.ctx = e.getContext("2d"), e.textAlign = "start", e.textBaseline = "top", t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return {
          depthWrite: !1,
          depthTest: !0,
          color: "#fff",
          fontFamily: "Microsoft Yahei",
          fontSize: 14,
          collides: !0,
          unit: "px",
          angle: 0,
          translateX: 0,
          offset: [0, 0],
          padding: [2, 2],
          margin: [0, 0],
          polygonOffset: [0, 0],
          shadow: {},
          maxHeightLine: 20,
          lineBreak: `
`
        };
      } }, { key: "initialize", value: function(t) {
        this.gl = t;
        var e = this.getOptions();
        this.texture = null, this.lastUpdateTime = 0, this.program = new Ft(this.gl, {
          vertexShader: "precision highp float;uniform mat4 matrix;uniform bool uUnitPx;uniform float zoomUnits;uniform float zIndex;uniform vec2 offset;attribute vec3 position;attribute float corner;attribute float scale;attribute float rotation;attribute vec2 size;attribute vec2 aTextCoord;varying vec2 vTextCoord;/***点A(x,y)，绕原点顺时针旋转角度a新坐标的计算公式*x1=x*cos(a)+y*sin(a)*y1=y*cos(a)-x*sin(a)*/mat3 rotateZ(float angle){float cos0=cos(angle);float sin0=sin(angle);return mat3(cos0,sin0,0.,-sin0,cos0,0.,0.,0.,1.);}vec3 transformCoord(vec3 coord,vec2 size,float corner){float x=coord.x;float y=coord.y;float z=coord.z;mat3 mat=rotateZ(rotation);vec3 rotated=vec3(size[0],0.0,size[1]);if(corner==1.0){rotated=mat*vec3(-size[0],0.0,size[1]);}else if(corner==2.0){rotated=mat*vec3(size[0],0.0,size[1]);}else if(corner==3.0){rotated=mat*vec3(size[0],0.0,-size[1]);}else{rotated=mat*vec3(-size[0],0.0,-size[1]);}x+=rotated.x;y+=rotated.y;z+=rotated.z;return vec3(x,y,z);}void main(){vTextCoord=aTextCoord;vec2 pixelOffset=offset;vec2 halfSize=size/2.0*scale;if(uUnitPx){halfSize*=zoomUnits;pixelOffset*=zoomUnits;}vec3 current=transformCoord(position,halfSize,corner);current.z+=zIndex;gl_Position=matrix*vec4(current.x+pixelOffset[0],current.y-pixelOffset[1],current.z,1.0);}",
          fragmentShader: `precision highp float;uniform sampler2D textureImage;uniform vec4 uSelectedColor;varying vec2 vTextCoord;void main(){vec4 textureColor=texture2D(textureImage,vec2(vTextCoord.x,1.0-vTextCoord.y));if(textureColor.a<=0.1&&uIsPickRender==false){discard;}gl_FragColor=textureColor;
#if defined(PICK)
if(mapvIsPicked()){gl_FragColor=vec4(uSelectedColor.rgb,gl_FragColor.a);}
#endif
}`,
          defines: e.enablePicked ? ["PICK"] : []
        }, this), this.vertexBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.uvBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.indexBuffer = new dt({ gl: t, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" }), e = [{ name: "position", buffer: this.vertexBuffer, size: 3, stride: 32, type: "FLOAT", offset: 0 }, { name: "corner", buffer: this.vertexBuffer, size: 1, stride: 32, type: "FLOAT", offset: 12 }, { name: "size", buffer: this.vertexBuffer, size: 2, stride: 32, type: "FLOAT", offset: 16 }, { name: "scale", buffer: this.vertexBuffer, size: 1, stride: 32, type: "FLOAT", offset: 24 }, {
          name: "rotation",
          buffer: this.vertexBuffer,
          size: 1,
          stride: 32,
          type: "FLOAT",
          offset: 28
        }, { name: "aTextCoord", buffer: this.uvBuffer, size: 2, stride: 8, type: "FLOAT", offset: 0 }], e = e.concat(this.getCommonAttributes()), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: e });
      } }, { key: "onDestroy", value: function() {
      } }, { key: "onChanged", value: function(t, e) {
        this.gl && this.processCache(t, e);
      } }, { key: "processCache", value: function(t, e) {
        this.cachedData = [];
        for (var a = 0; a < e.length; a++) {
          var n = this.normizedPoint(e[a].geometry.coordinates), s = e[a].text;
          "properties" in e[a] && "text" in e[a].properties && (s = e[a].properties.text);
          var o = this.getProperty("angle", t.angle, e[a]), u = this.getProperty("color", t.color, e[a]), c = this.getProperty("maxHeightLine", t.maxHeightLine, e[a]);
          n && s !== void 0 && this.cachedData.push({ point: n, text: s, angle: o, color: u, maxHeightLine: c, index: a });
        }
      } }, { key: "render", value: function(t) {
        if (this.cachedData && this.cachedData.length && this.map) {
          var e = t.gl, a = t.matrix, n = this.getOptions(), s = this.program;
          s.use(e), this.throttleUpdate(t), this.setGLState({
            blend: !0,
            blendEquation: e.FUNC_ADD,
            blendFunc: ie(e, n.blend),
            polygonOffset: n.polygonOffset,
            depthTest: n.depthTest,
            depthMask: n.depthWrite
          });
          var o = this.map.getZoomUnits();
          s.setUniforms(Rt(this.getCommonUniforms(t), { matrix: a, textureImage: this.texture, offset: n.offset, zoomUnits: o, zIndex: n.zIndex, uUnitPx: n.unit === "px" })), 0 < this.index.length && (this.indexBuffer.bind(), this.vertexArray.bind(), e.drawElements(e.TRIANGLES, this.index.length, e.UNSIGNED_INT, 0));
        }
      } }, { key: "throttleUpdate", value: function(t) {
        this.updateText(t);
      } }, { key: "updateText", value: function(t) {
        var e = t.gl, a = t.matrix, n = this.getOptions();
        t = n.fontSize;
        var s = n.fontFamily, o = n.translateX, u = n.padding, c = n.margin, v = n.collides, l = n.enablePicked, f = n.shadow;
        n = n.lineBreak;
        var p = e.canvas.width / window.devicePixelRatio, d = e.canvas.height / window.devicePixelRatio, g = this.canvas, A = this.ctx;
        A.save(), A.scale(window.devicePixelRatio, window.devicePixelRatio), A.textBaseline = "top", A.font = "normal bold 20px " + s;
        var _ = new ci();
        e = [];
        for (var M = 0; M < this.cachedData.length; M++) {
          var P = this.cachedData[M], R = P.point, B = P.text, F = P.angle, I = P.index, U = P.color;
          P = P.maxHeightLine;
          var G = Vt(R, 3), Z = ue.clone([G[0], G[1], G[2], 1]);
          ue.transformMat4(Z, Z, a), ue.scale(Z, Z, 1 / Z[3]), G = (Z[0] + 1) / 2 * p, Z = (-Z[1] + 1) / 2 * d;
          var Q = A.measureText(B), it = B.split(n), et = it.map(function(K) {
            return A.measureText(K).width;
          });
          et = Math.max.apply(Math, bt(et));
          for (var vt = 20, Tt = 0; Tt < it.length - 1; Tt++)
            vt += P;
          if (it = vt, Q = Math.min(Q.width, et) + 1, Q += 2 * u[0] + o, it += 2 * u[1], vt = Q + c[0], et = it + c[1], G -= vt / 2, Z -= et / 2, vt = G + vt, et = Z + et, !(0 > vt || 0 > et || G > p || Z > d)) {
            if (v) {
              if (G = { minX: G, maxX: vt, minY: Z, maxY: et }, _.collides(G))
                continue;
              _.insert(G);
            }
            e.push({
              w: Q,
              h: it,
              point: R,
              text: B,
              color: U,
              angle: F,
              maxHeightLine: P,
              dataIndex: I
            });
          }
        }
        for (A.restore(), a = [], c = [], v = [], p = [], _ = Er(e), d = _.w, _ = _.h, 0 >= d && (d = 1), 0 >= _ && (_ = 1), g.width = d * window.devicePixelRatio, g.height = _ * window.devicePixelRatio, A.save(), A.scale(window.devicePixelRatio, window.devicePixelRatio), A.textBaseline = "top", A.font = "normal bold 20px " + s, A.shadowColor = f && f.color, A.shadowOffsetX = f && f.offsetX, A.shadowOffsetY = f && f.offsetY, A.shadowBlur = f && f.blur, s = 0, f = e.length; s < f; ++s) {
          for (g = e[s], A.fillStyle = g.color, th(A, g.text, g.x + u[0] + o, g.y + u[1], g.maxHeightLine, n), B = Vt(g.point, 3), M = B[0], R = B[1], B = B[2], F = 0; 4 > F; F++)
            a.push(M, R, B), a.push(F), a.push(g.w, g.h), a.push(t / 20, g.angle * Math.PI / 180);
          M = g.x / d, R = (g.x + g.w) / d, B = (g.y + g.h) / _, F = g.y / _, c.push(M, B, M, F, R, F, R, B), M = 4 * s, v.push(M, M + 2, M + 1, M, M + 3, M + 2), l && (g = this.indexToRgb(g.dataIndex), p.push(g[0] / 255, g[1] / 255, g[2] / 255), p.push(g[0] / 255, g[1] / 255, g[2] / 255), p.push(g[0] / 255, g[1] / 255, g[2] / 255), p.push(g[0] / 255, g[1] / 255, g[2] / 255));
        }
        A.restore(), this.loadTexture(), this.index = v, this.vertexBuffer.updateData(new Float32Array(a)), this.uvBuffer.updateData(new Float32Array(c)), this.indexBuffer.updateData(new Uint32Array(v)), l && this.pickBuffer.updateData(new Float32Array(p));
      } }, { key: "loadTexture", value: function() {
        var t = this;
        this.canvas ? Ot(this.gl, this.canvas, function(e) {
          t.texture = e;
        }, { TEXTURE_WRAP_S: "CLAMP_TO_EDGE", TEXTURE_WRAP_T: "CLAMP_TO_EDGE" }) : this.texture = null;
      } }]), i;
    }(jt), Mp = function(r) {
      function i(t) {
        ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t)), t.name = "LabelLayer", t.pickedIndex = null;
        var e = t.canvas = document.createElement("canvas");
        return t.ctx = e.getContext("2d"), t.arrowHeight = 8, t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return { depthWrite: !1, depthTest: !0, textColor: "#0f0", borderColor: "#f00", backgroundColor: "#fff", pickedTextColor: "#fff", pickedBorderColor: "#666", pickedBackgroundColor: "#666", fontFamily: "Microsoft Yahei", fontSize: 14, lineHeight: 20, textAlign: "left", collides: !1, offset: [0, 0], padding: [2, 2], polygonOffset: [0, 0], borderRadius: 5 };
      } }, { key: "initialize", value: function(t) {
        this.gl = t;
        var e = this.getOptions();
        this.texture = null, this.lastUpdateTime = 0, this.program = new Ft(this.gl, {
          vertexShader: "precision highp float;uniform mat4 matrix;uniform float zoomUnits;uniform float devicePixelRatio;uniform float zIndex;uniform vec2 offset;attribute vec3 position;attribute float corner;attribute vec2 size;attribute vec2 aTextCoord;varying vec2 vTextCoord;/***点A(x,y)，绕原点顺时针旋转角度a新坐标的计算公式*x1=x*cos(a)+y*sin(a)*y1=y*cos(a)-x*sin(a)*/vec3 transformCoord(vec3 coord,vec2 size,float corner){float x=coord.x;float y=coord.y;if(corner==1.0){x+=-size.x;y+=size.y;}else if(corner==2.0){x+=size.x;y+=size.y;}else if(corner==3.0){x+=size.x;y+=-size.y;}else{x+=-size.x;y+=-size.y;}return vec3(x,y+size.y,coord.z);}void main(){vTextCoord=aTextCoord;vec2 pixelOffset=offset*zoomUnits;vec4 projection=matrix*vec4(position.x+pixelOffset[0],position.y-pixelOffset[1],position.z+zIndex,1.0);vec3 screen=projection.xyz/projection.w;vec2 halfSize=size/MAPV_resolution*devicePixelRatio;vec3 current=transformCoord(screen,halfSize,corner);gl_Position=vec4(current,1.0);}",
          fragmentShader: "precision highp float;uniform sampler2D textureImage;varying vec2 vTextCoord;void main(){gl_FragColor=texture2D(textureImage,vec2(vTextCoord.x,1.0-vTextCoord.y));}",
          defines: e.enablePicked ? ["PICK"] : []
        }, this), this.vertexBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.uvBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.indexBuffer = new dt({ gl: t, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" }), e = [{
          name: "position",
          buffer: this.vertexBuffer,
          size: 3,
          stride: 24,
          type: "FLOAT",
          offset: 0
        }, { name: "corner", buffer: this.vertexBuffer, size: 1, stride: 24, type: "FLOAT", offset: 12 }, { name: "size", buffer: this.vertexBuffer, size: 2, stride: 24, type: "FLOAT", offset: 16 }, { name: "aTextCoord", buffer: this.uvBuffer, size: 2, stride: 8, type: "FLOAT", offset: 0 }], e = e.concat(this.getCommonAttributes()), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: e });
      } }, { key: "onDestroy", value: function() {
      } }, { key: "onChanged", value: function(t, e) {
        this.gl && this.processCache(t, e);
      } }, { key: "processCache", value: function(t, e) {
        for (this.cachedData = [], this.pickedIndex = null, t = 0; t < e.length; t++) {
          var a = e[t], n = this.normizedPoint(a.geometry.coordinates);
          n && this.cachedData.push({ point: n, item: a, index: t });
        }
      } }, { key: "setPickedIndex", value: function(t, e) {
        var a = this;
        e !== "onMousemove" ? 0 <= t && (this.pickedIndex = t, setTimeout(function() {
          a.webglLayer.render();
        })) : this.pickedIndex = t;
      } }, { key: "render", value: function(t) {
        if (this.cachedData && this.cachedData.length && this.map) {
          var e = t.gl, a = t.matrix, n = this.getOptions(), s = this.program;
          s.use(e), this.updateText(t), this.setGLState({ blend: !0, blendEquation: e.FUNC_ADD, blendFunc: [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA], polygonOffset: n.polygonOffset, depthTest: n.depthTest, depthMask: n.depthWrite });
          var o = this.map.getZoomUnits();
          t = Rt(this.getCommonUniforms(t), { matrix: a, devicePixelRatio: window.devicePixelRatio, textureImage: this.texture, offset: n.offset, zoomUnits: o, zIndex: n.zIndex }), delete t.uSelectedColor, s.setUniforms(t), 0 < this.index.length && (this.indexBuffer.bind(), this.vertexArray.bind(), e.drawElements(
            e.TRIANGLES,
            this.index.length,
            e.UNSIGNED_INT,
            0
          ));
        }
      } }, { key: "updateText", value: function(t) {
        var e = this, a = t.gl, n = t.matrix, s = this.getOptions().enablePicked;
        t = this.canvas;
        var o = this.ctx;
        a = this.createMapbox(o, a, n), n = Er(a);
        var u = n.w, c = n.h;
        0 >= u && (u = 1), 0 >= c && (c = 1), t.width = u * window.devicePixelRatio, t.height = c * window.devicePixelRatio;
        var v = [], l = [], f = [], p = [];
        a.forEach(function(d, g) {
          e.drawItem(o, d);
          var A = Vt(d.point, 3), _ = A[0], M = A[1];
          A = A[2];
          for (var P = 0; 4 > P; P++)
            v.push(_, M, A), v.push(P), v.push(d.w, d.h);
          _ = d.x / u, M = (d.x + d.w) / u, A = (d.y + d.h) / c, P = d.y / c, l.push(_, A, _, P, M, P, M, A), g *= 4, f.push(g, g + 2, g + 1, g, g + 3, g + 2), s && (d = e.indexToRgb(d.dataIndex), p.push(d[0] / 255, d[1] / 255, d[2] / 255), p.push(d[0] / 255, d[1] / 255, d[2] / 255), p.push(d[0] / 255, d[1] / 255, d[2] / 255), p.push(d[0] / 255, d[1] / 255, d[2] / 255));
        }), this.loadTexture(), this.index = f, this.vertexBuffer.updateData(new Float32Array(v)), this.uvBuffer.updateData(new Float32Array(l)), this.indexBuffer.updateData(new Uint32Array(f)), s && this.pickBuffer.updateData(new Float32Array(p));
      } }, { key: "createMapbox", value: function(t, e, a) {
        function n(g) {
          var A = g.point, _ = g.item;
          g = g.index;
          var M = Vt(A, 3);
          M = ue.clone([M[0], M[1], M[2], 1]), ue.transformMat4(M, M, a), ue.scale(M, M, 1 / M[3]);
          var P = (M[0] + 1) / 2 * l, R = (-M[1] + 1) / 2 * f;
          M = this.computeTextWH(_, t, u, v);
          var B = Vt(M, 2);
          M = B[0], B = B[1], P -= M / 2, R -= B / 2;
          var F = P + M, I = R + B;
          if (!(0 > F || 0 > I || P > l || R > f)) {
            if (c) {
              if (P = { minX: P, maxX: F, minY: R, maxY: I }, p.collides(P))
                return;
              p.insert(P);
            }
            d.push({ w: M, h: B + this.arrowHeight, point: A, item: _, dataIndex: g });
          }
        }
        var s = this, o = this.getOptions(), u = o.padding, c = o.collides, v = o.fontSize, l = e.canvas.width / window.devicePixelRatio, f = e.canvas.height / window.devicePixelRatio, p = new ci(), d = [];
        return this.cachedData[this.pickedIndex] && n.bind(this)(this.cachedData[this.pickedIndex]), this.cachedData.forEach(function(g) {
          s.pickedIndex !== g.index && n.bind(s)(g);
        }), d;
      } }, { key: "computeTextWH", value: function(t, e) {
        var a = this.getOptions(), n = a.padding, s = a.fontSize, o = a.borderRadius, u = a.fontFamily;
        return a = a.lineHeight, e.save(), e.scale(window.devicePixelRatio, window.devicePixelRatio), e.font = s + "px " + u, t = t.properties.text.split(`
`), s = t.reduce(function(c, v) {
          return c.length < v.length ? v : c;
        }, ""), s = e.measureText(s), e.restore(), [s.width + 2 * (n[1] + o), 2 * (n[0] + o) + a * t.length];
      } }, { key: "drawItem", value: function(t, e) {
        var a = this.getOptions(), n = a.padding, s = a.backgroundColor, o = a.textColor, u = a.fontSize, c = a.borderColor, v = a.borderRadius, l = a.fontFamily, f = a.lineHeight, p = a.textAlign, d = a.pickedTextColor, g = a.pickedBorderColor, A = a.pickedBackgroundColor, _ = v - 1, M = e.x, P = e.y;
        a = e.w;
        var R = e.h, B = e.item;
        e = e.dataIndex;
        var F = "";
        be(B.properties) === "object" && (F = B.properties.text || "", o = B.properties.textColor || o, c = B.properties.borderColor || c, s = B.properties.backgroundColor || s), this.pickedIndex === e && (o = d, c = g, s = A), d = F.split(`
`), g = R - this.arrowHeight, t.save(), t.scale(window.devicePixelRatio, window.devicePixelRatio), t.textBaseline = "top", t.font = u + "px " + l, t.translate(M, P), t.fillStyle = s, t.strokeStyle = c, t.beginPath(), t.arc(v, v, _, Math.PI, 1.5 * Math.PI), t.lineTo(a - v, 1), t.arc(a - v, v, _, 1.5 * Math.PI, 0), t.lineTo(a - 1, g - v), t.arc(a - v, g - v, _, 0 * Math.PI, 0.5 * Math.PI), t.lineTo(v, g - 1), t.arc(v, g - v, _, 0.5 * Math.PI, 1 * Math.PI), t.lineTo(
          1,
          v
        ), t.closePath(), t.fill(), t.stroke(), t.beginPath(), s = this.arrowHeight, l = a / 2, _ = s / 2, t.moveTo(l - _, g - 1), t.lineTo(l + _, g - 1), t.lineTo(l, g + 0.8 * s), t.fillStyle = c, t.fill(), t.fillStyle = o;
        var I = p === "center" ? l : p === "right" ? a - v - n[1] : v + n[1];
        t.textAlign = p, d.forEach(function(U, G) {
          t.fillText(U, I, v + n[0] + (G + 0.5) * f - 0.5 * u);
        }), t.restore();
      } }, { key: "loadTexture", value: function() {
        var t = this;
        this.canvas ? Ot(this.gl, this.canvas, function(e) {
          t.texture = e;
        }, { TEXTURE_WRAP_S: "CLAMP_TO_EDGE", TEXTURE_WRAP_T: "CLAMP_TO_EDGE" }) : this.texture = null;
      } }]), i;
    }(jt);
    he.prototype.parseColors = function(r) {
      this.arrFeatureStyles = [[2, r[0] || "rgba(79,210,125,1)", 2, 2, 0, [], 0, 0], [2, r[0] || "rgba(79,210,125,1)", 3, 2, 0, [], 0, 0], [2, r[0] || "rgba(79,210,125,1)", 3, 2, 0, [], 0, 0], [2, r[0] || "rgba(79,210,125,1)", 5, 2, 0, [], 0, 0], [2, r[0] || "rgba(79,210,125,1)", 6, 2, 0, [], 0, 0], [2, r[2] || "rgba(255,208,69,1)", 2, 2, 0, [], 0, 0], [2, r[2] || "rgba(255,208,69,1)", 3, 2, 0, [], 0, 0], [2, r[2] || "rgba(255,208,69,1)", 3, 2, 0, [], 0, 0], [2, r[2] || "rgba(255,208,69,1)", 5, 2, 0, [], 0, 0], [
        2,
        r[2] || "rgba(255,208,69,1)",
        6,
        2,
        0,
        [],
        0,
        0
      ], [2, r[1] || "rgba(232,14,14,1)", 2, 2, 0, [], 0, 0], [2, r[1] || "rgba(232,14,14,1)", 3, 2, 0, [], 0, 0], [2, r[1] || "rgba(232,14,14,1)", 3, 2, 0, [], 0, 0], [2, r[1] || "rgba(232,14,14,1)", 5, 2, 0, [], 0, 0], [2, r[1] || "rgba(232,14,14,1)", 6, 2, 0, [], 0, 0], [2, r[3] || "rgba(181,0,0,1)", 2, 2, 0, [], 0, 0], [2, r[3] || "rgba(181,0,0,1)", 3, 2, 0, [], 0, 0], [2, r[3] || "rgba(181,0,0,1)", 3, 2, 0, [], 0, 0], [2, r[3] || "rgba(181,0,0,1)", 5, 2, 0, [], 0, 0], [2, r[3] || "rgba(181,0,0,1)", 6, 2, 0, [], 0, 0], [2, "rgba(255,255,255,1)", 4, 0, 0, [], 0, 0], [
        2,
        "rgba(255,255,255,1)",
        5.5,
        0,
        0,
        [],
        0,
        0
      ], [2, "rgba(255,255,255,1)", 7, 0, 0, [], 0, 0], [2, "rgba(255,255,255,1)", 8.5, 0, 0, [], 0, 0], [2, "rgba(255,255,255,1)", 10, 0, 0, [], 0, 0]];
    }, he.prototype.setColors = function(r) {
      this.parseColors(r);
    }, he.prototype.initialize = function(r) {
      this._initialize || (this._initialize = !0);
    }, he.prototype.clearCache = function(r) {
      this.cache = {};
    }, he.prototype.setMap = function(r) {
      r ? (this.map = r, this._initialize ? this.canvaslayer.show() : this.initialize(r)) : this.canvaslayer.hide();
    }, he.prototype.draw = function(r) {
      r = r || {}, r.clearCache && this.clearCache(), this.canvaslayer.draw();
    }, he.prototype.clear = function() {
    }, he.prototype.update = function() {
      var r = this.map, i = this.getDataZoom(), t = Math.pow(2, 18 - i), e = 256 * t, a = q.convertLL2MC(r.getCenter()), n = Math.ceil(a.lng / e), s = Math.ceil(a.lat / e), o = this.tileSize, u = i - Math.round(r.getZoom());
      for (0 < u && (o /= Math.pow(2, u)), e = [n, s, (a.lng - n * e) / e * o, (a.lat - s * e) / e * o], n = r.getBounds(), a = n.getNorthEast(), n = n.getSouthWest(), r.getSize(), r.getSize(), r = (a.lng - n.lng) / t, t = (a.lat - n.lat) / t, a = e[1] - Math.ceil((t / 2 - e[3]) / o), n = e[0] + Math.ceil((r / 2 + e[2]) / o), s = e[1] + Math.ceil((t / 2 + e[3]) / o), t = [], o = e[0] - Math.ceil((r / 2 - e[2]) / o); o < n; o++)
        for (e = a; e < s; e++)
          t.push([o, e, i]);
      for (this.tilesOrder = t, this._loadCount = {}, o = 0; o < t.length; o++)
        e = t[o][0], r = t[o][1], this._loadCount[e + "_" + r + "_" + t[o][2]] = !1;
      for (o = 0; o < t.length; o++)
        e = t[o][0], r = t[o][1], this.showTile(e, r, i);
    }, he.prototype.showTile = function(r, i, t) {
      this._parseDataAndDraw(r, i, t);
    }, he.prototype.drawCurrentData = function() {
      this.clear();
      for (var r = [], i = 0; i < this.tilesOrder.length; i++) {
        var t = this.tilesOrder[i][0], e = this.tilesOrder[i][1], a = this.tilesOrder[i][2], n = this.cache[this.getCacheKey(t, e, a)];
        if (n)
          for (t = this._drawFeatures(n, t, e, a), e = 0; e < t.length; e++)
            r.push(t[e]);
      }
      this.lineLayer.setData(r);
    }, he.prototype.isAllLoaded = function() {
      var r = !0, i;
      for (i in this._loadCount)
        if (!this._loadCount[i]) {
          r = !1;
          break;
        }
      return r;
    }, he.prototype.getCacheKey = function(r, i, t) {
      return r + "_" + i + "_" + t;
    }, he.prototype.getDataZoom = function() {
      var r = Math.round(this.map.getZoom());
      return 19 < r && (r = 19), r;
    }, he.prototype._parseDataAndDraw = function(r, i, t) {
      var e = this, a = e.map, n = a.getCenter(), s = Math.round(a.getZoom()), o = this.getCacheKey(r, i, t), u = "_cbk" + (1e5 * Math.random()).toFixed(0), c = this.getTileUrl(r, i, t, "BMapGL." + u);
      BMapGL[u] = function(v) {
        e._loadCount[r + "_" + i + "_" + t] = !0;
        var l = a.getCenter(), f = Math.round(a.getZoom());
        l.equals(n) && f === s ? (l = v.content && v.content.tf, v.data && (l = v.data), e.cache[o] = l ? { traffic: l, precision: v.precision } : null, e.drawTogether && e.isAllLoaded() && e.drawCurrentData()) : f !== s && e.clear(), delete BMapGL[u];
      }, e.cache[o] !== void 0 ? (e._loadCount[r + "_" + i + "_" + t] = !0, e.drawTogether && e.isAllLoaded() && e.drawCurrentData()) : this.request(c);
    }, he.prototype.getTileUrl = function(r, i, t, e) {
      return "https://sp3.baidu.com/7_AZsjOpB1gCo2Kml5_Y_DAcsMJiwa/traffic/?qt=vtraffic&x=" + r + "&y=" + i + "&z=" + t + "&fn=" + e + "&t=" + (/* @__PURE__ */ new Date()).getTime();
    }, he.prototype._drawFeatures = function(r, i, t, e) {
      var a = 10;
      e = Math.pow(2, 18 - e), this.map.getCenter();
      var n = this.tileSize;
      if (i = [i * n * e, (t + 1) * n * e], t = [], r && r.traffic) {
        a *= r.precision, r = r.traffic, n = 0;
        for (var s = r.length; n < s; n++) {
          var o = r[n], u = o[1];
          o = this.arrFeatureStyles[o[3]];
          var c = u[0] / a, v = -u[1] / a, l = [];
          l.push([i[0] + c * e, i[1] + v * e, 1]);
          for (var f = 2, p = u.length; f < p; f += 2)
            c += u[f] / a, v -= u[f + 1] / a, l.push([i[0] + c * e, i[1] + v * e, 1]);
          t.push({ color: o[1], geometry: { type: "LineString", coordinates: l } });
        }
      }
      return t;
    }, he.prototype.request = function(r, i) {
      if (i) {
        var t = (1e5 * Math.random()).toFixed(0);
        BMapGL._rd["_cbk" + t] = function(a) {
          i && i(a), delete BMapGL._rd["_cbk" + t];
        }, r += "&callback=BMapGL._rd._cbk" + t;
      }
      var e = document.createElement("script");
      e.type = "text/javascript", e.charset = "utf-8", e.src = r, e.addEventListener ? e.addEventListener("load", function(a) {
        a = a.target, a.parentNode.removeChild(a);
      }, !1) : e.attachEvent && e.attachEvent("onreadystatechange", function(a) {
        a = window.event.srcElement, !a || a.readyState !== "loaded" && a.readyState !== "complete" || a.parentNode.removeChild(a);
      }), setTimeout(function() {
        document.getElementsByTagName("head")[0].appendChild(e), e = null;
      }, 1);
    }, he.prototype.getRGBA = function(r) {
      return r >>>= 0, "rgba(" + (r >> 24 & 255) + "," + (r >> 16 & 255) + "," + (r >> 8 & 255) + "," + (r & 255) / 256 + ")";
    }, he.prototype.getLineCap = function(r) {
      return ["butt", "square", "round"][r];
    }, he.prototype.getLineJoin = function(r) {
      return ["miter", "bevel", "round"][r];
    };
    var Pp = function(r) {
      function i(t) {
        ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t)), t.autoUpdate = !0, t.getOptions();
        var e = new El({ color: "rgba(257, 254, 47, 0.9)", minZoom: 18, duration: 0.8, interval: 0.2, trailLength: 0.4 });
        return t.lineLayer = e, t.children = [e], t;
      }
      return Lt(i, r), ct(i, [{ key: "initialize", value: function(t) {
        ur(i.prototype.__proto__ || yt(i.prototype), "initialize", this).call(this, t), t = this.map.map;
        var e = new he({});
        e.lineLayer = this.lineLayer, this.trafficTileManager = e, e.setMap(t), e.update(), t.addEventListener("moveend", function() {
          e.update();
        }), t.addEventListener("zoomend", function() {
          e.update();
        }), t.addEventListener("ondraw", function() {
        });
      } }, { key: "onOptionsChanged", value: function(t) {
      } }, { key: "onDataChanged", value: function(t) {
      } }, { key: "getDefaultOptions", value: function() {
        return {};
      } }]), i;
    }(lr), Lp = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.name = "HeatmapLayer", t.bufferData = [], t;
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return { size: 13, unit: "px", height: 0, max: 100, min: 0, opacity: 1, minOpacity: 0, maxOpacity: 1, blend: "normal" };
      } }, { key: "initialize", value: function(t) {
        var e = this;
        this.gl = t;
        var a = this.getOptions();
        this.inverseMatrix = pt.create(Float64Array), this.frameBuffer = new _e(t), this.webglLayer.map.onResize(function() {
          e.frameBuffer = new _e(t);
        }), this.circle = eh(64), this.circleTexture = Zt(t, this.circle, {
          TEXTURE_MAG_FILTER: "LINEAR",
          TEXTURE_MIN_FILTER: "LINEAR",
          TEXTURE_WRAP_S: "CLAMP_TO_EDGE",
          TEXTURE_WRAP_T: "CLAMP_TO_EDGE"
        }).texture, this.intensity = new gt({ gradient: a.gradient }), this.paletteTexture = Zt(t, this.intensity.paletteCtx.canvas, { TEXTURE_MAG_FILTER: "LINEAR", TEXTURE_MIN_FILTER: "LINEAR", TEXTURE_WRAP_S: "CLAMP_TO_EDGE", TEXTURE_WRAP_T: "CLAMP_TO_EDGE" }).texture, this.offlineProgram = new Ft(this.gl, {
          vertexShader: "uniform mat4 u_matrix;uniform mat4 pointToPixelMatrix;uniform mat4 pixelToViewMatrix;uniform mat4 projectionMatrix;uniform int unit;uniform float size;uniform float max;uniform float min;attribute vec3 aPos;attribute vec2 aOffset;attribute float aCount;varying vec2 vOffset;varying float vCount;varying vec3 vPosition;void main(){vOffset=aOffset;vCount=(aCount-min)/(max-min);if(unit==1){vec2 pos=(pointToPixelMatrix*vec4(aPos.xy,0.0,1.0)).xy+aOffset.xy*size/2.0;gl_Position=projectionMatrix*pixelToViewMatrix*vec4(pos,0.0,1.0);}else{vec2 pos=aPos.xy+aOffset.xy*size;gl_Position=u_matrix*vec4(pos,0.0,1.0);}vPosition=vec3(gl_Position.z/gl_Position.w);}",
          fragmentShader: "varying vec2 vOffset;varying float vCount;varying vec3 vPosition;uniform sampler2D uCircle;void main(){vec4 circle=texture2D(uCircle,(vOffset+1.0)/2.0);float intensity=circle.a*vCount;if(intensity<=0.0){discard;}gl_FragColor=vec4(vPosition,intensity);}"
        }, this), this.offlineBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.offlineIndexBuffer = new dt({ gl: t, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.offlineVertexArray = new Qt({
          gl: t,
          program: this.offlineProgram,
          attributes: [{ stride: 24, name: "aPos", buffer: this.offlineBuffer, size: 3, type: "FLOAT", offset: 0 }, { stride: 24, name: "aOffset", buffer: this.offlineBuffer, size: 2, type: "FLOAT", offset: 12 }, { stride: 24, name: "aCount", buffer: this.offlineBuffer, size: 1, type: "FLOAT", offset: 20 }]
        }), this.indexBuffer = new dt({ gl: t, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.program = new Ft(
          this.gl,
          {
            vertexShader: "attribute vec2 aPos;varying vec2 vPos;uniform float uHeight;uniform mat4 pixelToViewMatrix;uniform mat4 projectionMatrix;uniform sampler2D u_sampler;uniform mat4 inverseMatrix;void main(){vPos=aPos;if(uHeight<=0.0){gl_Position=vec4(aPos,0.0,1.0);}else{vec4 gray=texture2D(u_sampler,(aPos+1.0)/2.0);vec4 m0=inverseMatrix*vec4(aPos.xy,0.0,1.0);vec4 m1=inverseMatrix*vec4(aPos.xy,1.0,1.0);m0/=m0.w;m1/=m1.w;vec4 pixel=m0+(-m0.z/(m1.z-m0.z))*(m1-m0);pixel.z=uHeight*gray.a;gl_Position=projectionMatrix*pixelToViewMatrix*vec4(pixel.xyz,1.0);}}",
            fragmentShader: "uniform sampler2D u_sampler;uniform sampler2D u_samplerPalette;uniform float uHeight;uniform float opacity;uniform float minOpacity;uniform float maxOpacity;uniform bool u_strict;varying vec2 vPos;void main(){vec4 gray=texture2D(u_sampler,(vPos+1.0)/2.0);float grayAlpha=gray.a;if(grayAlpha<=0.0){discard;}gl_FragColor=texture2D(u_samplerPalette,vec2(grayAlpha,1.0));float addAlpha=1.0;if(gray.a<0.3){addAlpha=gray.a*3.3;}gl_FragColor.a*=addAlpha;gl_FragColor.a=max(gl_FragColor.a,minOpacity);gl_FragColor.a=min(gl_FragColor.a,maxOpacity);gl_FragColor.a*=opacity;}"
          },
          this
        ), this.buffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: [{ stride: 8, name: "aPos", buffer: this.buffer, size: 2, type: "FLOAT", offset: 0 }] }), a = [];
        for (var n = [], s = Math.floor(t.canvas.width / 4), o = Math.floor(t.canvas.height / 4), u = s + 1, c = 0; c <= o; c++)
          for (var v = 0; v <= s; v++)
            if (a.push(2 * v / s - 1, 2 * c / o - 1), v < s && c < o) {
              var l = u * c + v, f = u * (c + 1) + v;
              n.push(l, l + 1, f + 1), n.push(l, f + 1, f);
            }
        this.bufferData = a, this.buffer.updateData(new Float32Array(a)), this.indexData = n, this.indexBuffer.updateData(new Uint32Array(n));
      } }, { key: "onDestroy", value: function() {
        this.bufferData = [];
      } }, { key: "onOptionsChanged", value: function(t, e) {
        var a = this.gl;
        a && t.gradient !== e.gradient && (this.intensity = new gt({ gradient: t.gradient }), this.paletteTexture = Zt(a, this.intensity.paletteCtx.canvas, { TEXTURE_MAG_FILTER: "LINEAR", TEXTURE_MIN_FILTER: "LINEAR", TEXTURE_WRAP_S: "CLAMP_TO_EDGE", TEXTURE_WRAP_T: "CLAMP_TO_EDGE" }).texture);
      } }, { key: "onDataChanged", value: function(t) {
        if (this.gl) {
          var e = [], a = [];
          this.getOptions();
          for (var n = 0; n < t.length; n++) {
            var s = t[n], o = this.normizedPoint(t[n].geometry.coordinates), u = s.count === void 0 ? 1 : s.count;
            "properties" in s && "count" in s.properties && (u = s.properties.count), e.push(o[0], o[1], o[2]), e.push(-1, -1), e.push(u), e.push(o[0], o[1], o[2]), e.push(-1, 1), e.push(u), e.push(o[0], o[1], o[2]), e.push(1, 1), e.push(u), e.push(o[0], o[1], o[2]), e.push(1, -1), e.push(u), s = 4 * n, a.push(s + 0, s + 2, s + 1), a.push(s + 0, s + 3, s + 2);
          }
          this.offlineBufferData = e, this.offlineIndexData = a, this.offlineBuffer.updateData(new Float32Array(e)), this.offlineIndexBuffer.updateData(new Uint32Array(a));
        }
      } }, { key: "render", value: function(t) {
        var e = t.gl, a = t.matrix, n = t.pointToPixelMatrix, s = t.pixelToViewMatrix;
        if (t = t.projectionMatrix, this.offlineBufferData && !(0 >= this.offlineBufferData.length)) {
          var o = this.getOptions();
          this.setGLState({ blend: !0, blendFunc: [e.ONE, e.ONE], depthTest: !1 }), e.bindFramebuffer(e.FRAMEBUFFER, this.frameBuffer.framebuffer), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), this.offlineProgram.use(e), this.offlineProgram.setUniforms({
            u_matrix: a,
            uCircle: this.circleTexture,
            pointToPixelMatrix: n,
            pixelToViewMatrix: s,
            projectionMatrix: t,
            unit: o.unit === "px" ? 1 : 0,
            size: o.size,
            max: o.max,
            min: o.min
          }), this.offlineVertexArray.bind(), this.offlineIndexBuffer.bind(), e.drawElements(e.TRIANGLES, this.offlineIndexData.length, e.UNSIGNED_INT, 0), e.bindFramebuffer(e.FRAMEBUFFER, null), this.program.use(e), this.vertexArray.bind(), a = this.inverseMatrix, pt.identity(a), pt.multiply(a, t, s), pt.invert(a, a), this.setGLState({ blend: !0, blendFunc: ie(e, o.blend), depthTest: !!o.height }), this.program.setUniforms({ u_sampler: this.frameBuffer.framebuffer.texture, u_samplerPalette: this.paletteTexture, uHeight: o.height, opacity: o.opacity, minOpacity: o.minOpacity, maxOpacity: o.maxOpacity, pixelToViewMatrix: s, inverseMatrix: a, projectionMatrix: t }), this.indexBuffer.bind(), e.drawElements(e.TRIANGLES, this.indexData.length, e.UNSIGNED_INT, 0);
        }
      } }]), i;
    }(jt), Cp = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.name = "BarLayer", t.selectedColor = [-1, -1, -1], t.textureCache = {}, t;
      }
      return Lt(i, r), ct(i, [
        { key: "getDefaultOptions", value: function() {
          return { color: "rgba(0, 180, 0, 1.0)", edgeCount: 4, unit: "m", height: 1e5, type: "normal", size: 5e4 };
        } },
        { key: "initialize", value: function(t) {
          this.gl = t;
          var e = this.getOptions(), a = { normal: [
            `attribute vec3 aPos;attribute vec4 aColor;attribute float aSize;attribute float aEdgeIndex;attribute float aPointIndex;attribute float aEdgeCount;varying vec4 vColor;varying vec4 vPosition;varying vec4 vFragPosition;varying float vSize;varying float vEdgeIndex;varying float vPointIndex;varying float vEdgeCount;uniform mat4 uMatrix;uniform float uZoomUnits;uniform vec4 uSelectedColor;void main(){vColor=aColor;vEdgeIndex=aEdgeIndex;vEdgeCount=aEdgeCount;vPointIndex=aPointIndex;float z=aPos.z*uZoomUnits;float x=aPos.x;float y=aPos.y;vSize=aSize*uZoomUnits;float a=radians(360.0/aEdgeCount);float b=a/2.0;float r=vSize/cos(b);if(aEdgeIndex<0.0){float index=aPointIndex;float angle=0.0;if(mod(index,2.0)==0.0){angle=a*(index/2.0)-b;}else{angle=-a*((index-1.0)/2.0)-b;}y=y+r*sin(angle);x=x+r*cos(angle);}else{float i=aEdgeIndex-1.0;float j=aPointIndex;float angle=a*i+b;y=y+r*sin(angle);x=x+r*cos(angle);}vPosition=vec4(aPos,1.0);vFragPosition=vec4(x,y,z,1.0);gl_Position=uMatrix*vFragPosition;if(aEdgeIndex==1.0&&aPointIndex==1.0){gl_PointSize=20.0;}else{gl_PointSize=10.0;}
#if defined(PICK)
if(mapvIsPicked()){vColor=uSelectedColor;}
#endif
}`,
            "varying vec4 vColor;varying float vEdgeIndex;varying float vPointIndex;varying float vEdgeCount;varying vec4 vPosition;varying vec4 vFragPosition;uniform mat4 uMatrix;void main(){vec4 color=vColor;if(vEdgeIndex<0.0){color.r+=0.2;color.g+=0.2;color.b+=0.2;}else{float i=ceil(vEdgeIndex);;float d=i/vEdgeCount*0.5;if(i<=vEdgeCount/2.0){d=0.2*(i/vEdgeCount*0.5)-0.1;}else{d=0.2*(vEdgeCount-i)/vEdgeCount*0.5-0.1;}color.r+=d;color.g+=d;color.b+=d;}gl_FragColor=color;}"
          ], light: [
            `attribute vec3 aPos;attribute vec4 aColor;attribute float aSize;attribute float aEdgeIndex;attribute float aPointIndex;attribute float aEdgeCount;varying vec4 vColor;varying vec4 vPosition;varying vec4 vFragPosition;varying float vSize;varying float vEdgeIndex;varying float vPointIndex;varying float vEdgeCount;uniform mat4 uMatrix;uniform float uZoomUnits;uniform vec4 uSelectedColor;void main(){vColor=aColor;vEdgeIndex=aEdgeIndex;vEdgeCount=aEdgeCount;vPointIndex=aPointIndex;float z=aPos.z*uZoomUnits;float x=aPos.x;float y=aPos.y;vSize=aSize*uZoomUnits;float a=radians(360.0/aEdgeCount);float b=a/2.0;float i=aEdgeIndex;float j=aPointIndex;float angle=a*(i-1.0)+b;float r=vSize/cos(b);y=y+r*sin(angle);x=x+r*cos(angle);if(j==1.0){z=0.0;}vPosition=vec4(aPos.xyz,1.0);vFragPosition=vec4(x,y,z,1.0);gl_Position=uMatrix*vFragPosition;
#if defined(PICK)
if(mapvIsPicked()){vColor=uSelectedColor;}
#endif
}`,
            "varying vec4 vColor;varying float vEdgeIndex;varying float vPointIndex;varying float vEdgeCount;varying vec4 vPosition;varying vec4 vFragPosition;uniform mat4 uMatrix;void main(){vec4 color=vColor;color.a=1.0-vFragPosition.z/vPosition.z;gl_FragColor=color;}"
          ] };
          a = a[e.type] || a.normal, this.program = new Ft(this.gl, { vertexShader: a[0], fragmentShader: a[1], defines: e.enablePicked ? ["PICK"] : [] }, this), this.buffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.indexBuffer = new dt({
            gl: t,
            target: "ELEMENT_ARRAY_BUFFER",
            usage: "STATIC_DRAW"
          }), e = [{ stride: 44, name: "aPos", buffer: this.buffer, size: 3, type: "FLOAT", offset: 0 }, { stride: 44, name: "aSize", buffer: this.buffer, size: 1, type: "FLOAT", offset: 12 }, { stride: 44, name: "aEdgeIndex", buffer: this.buffer, size: 1, type: "FLOAT", offset: 16 }, { stride: 44, name: "aPointIndex", buffer: this.buffer, size: 1, type: "FLOAT", offset: 20 }, { stride: 44, name: "aEdgeCount", buffer: this.buffer, size: 1, type: "FLOAT", offset: 24 }, { stride: 44, name: "aColor", buffer: this.buffer, size: 4, type: "FLOAT", offset: 28 }], e = e.concat(this.getCommonAttributes()), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: e });
        } },
        { key: "onChanged", value: function(t, e) {
          this.gl && e && (this.uniforms = {}, this.data = e, this.options = t, this.processData(), t.enablePicked && this.parsePickData(e));
        } },
        { key: "processData", value: function() {
          var t = [], e = [];
          this.options.type === "light" ? this.createLightBuffer(this.data, t, e) : this.createNormalBuffer(this.data, t, e), this.bufferData = t, this.indexData = e, this.buffer.updateData(new Float32Array(t)), this.indexBuffer.updateData(new Uint32Array(e));
        } },
        { key: "createNormalBuffer", value: function(t, e, a) {
          var n = this, s = parseInt(this.options.edgeCount, 10) || 4;
          t.forEach(function(o, u) {
            var c = o.color || n.options.color, v = o.size || n.options.size, l = Array.isArray(o.value) ? o.value : typeof o.value == "number" ? [o.value] : [1], f = n.normizedPoint(o.geometry.coordinates), p = o.height || n.options.height, d = l.reduce(function(_, M) {
              return Number(_) + Number(M);
            }), g = 0, A = "blue";
            for (l.forEach(function(_, M) {
              A = n.normizedColor(typeof c == "function" ? c(_, M, l) : Array.isArray(c) ? c[M] : c), _ = typeof p == "function" ? p(_, M, l) : Array.isArray(p) ? p[M] : p / d * _;
              var P = a[a.length - 1], R = e.length / 11;
              for (0 < R && (s % 2 === 1 && M === 0 ? a.push(P, P, R) : a.push(P, R)), M = 1; M <= 2 * s; M++)
                M % 2 === 0 ? e.push.apply(e, [f[0], f[1], g, v, M / 2, 2, s].concat(bt(A))) : e.push.apply(e, [f[0], f[1], g + _, v, (M + 1) / 2, 1, s].concat(bt(A))), a.push(R + M - 1), M === 2 * s && (e.push.apply(e, [f[0], f[1], g + _, v, M / 2 + 1, 1, s].concat(bt(A))), e.push.apply(e, [f[0], f[1], g, v, M / 2 + 1, 2, s].concat(bt(A))), a.push(R + M, R + M + 1));
              g += _;
            }), u = a[a.length - 1], o = e.length / 11, 0 < o && a.push(u, o), u = 1; u <= s; u++)
              e.push.apply(
                e,
                [f[0], f[1], g, v, -1, u, s].concat(bt(A))
              ), a.push(o + u - 1);
          });
        } },
        { key: "createLightBuffer", value: function(t, e, a) {
          var n = this, s = parseInt(this.options.edgeCount, 10) || 4;
          t.forEach(function(o, u) {
            u = o.color || n.options.color, u = n.normizedColor(typeof u == "function" ? u(o.value) : typeof u == "string" ? u : "blue");
            var c = o.size || n.options.size, v = n.normizedPoint(o.geometry.coordinates), l = o.height || n.options.height;
            for (l = typeof l == "function" ? l(o.value) : l, o = 1; o <= s; o++) {
              var f = a[a.length - 1], p = e.length / 11;
              for (0 < p && a.push(f, p), f = 1; f <= 2 * s; f++)
                f % 2 === 0 ? e.push.apply(e, [v[0], v[1], l, c, f / 2, 1, s].concat(bt(u))) : e.push.apply(e, [v[0], v[1], l, c, (f + 1) / 2, 2, s].concat(bt(u))), a.push(p + f - 1), f === 2 * s && a.push(p, p + 1);
            }
          });
        } },
        { key: "render", value: function(t) {
          var e = this.program, a = t.gl, n = t.matrix;
          this.setGLState({ cullFace: this.options.type === "normal" }), e.use(a), this.vertexArray.bind(), this.indexBuffer.bind();
          var s = this.map.getZoomUnits();
          Rt(this.uniforms, this.getCommonUniforms(t), { uZoomUnits: this.options.unit === "px" ? s : 1, uMatrix: n }), e.setUniforms(this.uniforms), a.drawElements(a.TRIANGLE_STRIP, this.indexData.length, a.UNSIGNED_INT, 0);
        } }
      ]), i;
    }(jt), Sp = function(r) {
      function i(t) {
        ft(this, i);
        var e = Pt(this, (i.__proto__ || yt(i)).call(this, t));
        return t = e.getOptions(), e.fillPoint = new vn({ enablePicked: t.enablePicked, autoSelect: t.autoSelect }), e.shadowPoint = new vn(), e.textPoint = new di(), e.children = [e.shadowPoint, e.fillPoint, e.textPoint], e;
      }
      return Lt(i, r), ct(i, [{ key: "pick", value: function(t, e) {
        return this.fillPoint.pick(t, e);
      } }, { key: "onOptionsChanged", value: function(t) {
        this.shadowPoint.setOptions({
          depthTest: !1,
          polygonOffset: [1, 1],
          color: t.shadowColor,
          size: t.shadowSize,
          borderWidth: t.shadowBorderWidth,
          borderColor: t.shadowBorderColor
        }), this.fillPoint.setOptions({ onClick: function(e) {
          t.onClick && t.onClick(e);
        }, selectedIndex: t.selectedIndex, selectedColor: t.selectedColor, depthTest: !1, color: t.fillColor, size: t.fillSize, borderWidth: t.fillBorderWidth, borderColor: t.fillBorderColor }), this.textPoint.setOptions({ collides: !1, polygonOffset: [-1, -1], color: t.fontColor, fontFamily: t.fontFamily, fontSize: t.fontSize });
      } }, {
        key: "onDataChanged",
        value: function(t) {
          var e = this, a = this.getOptions(), n = JSON.parse(Gi(t)).map(function(o) {
            return o.properties.size = e.getProperty("shadowSize", a.shadowSize, o), o.properties.color = e.getProperty("shadowColor", a.shadowColor, o), o.properties.borderColor = e.getProperty("shadowBorderColor", a.shadowBorderColor, o), o.properties.borderWidth = e.getProperty("shadowBorderWidth", a.shadowBorderWidth, o), o;
          }), s = JSON.parse(Gi(t)).map(function(o) {
            return o.properties.size = e.getProperty("fillSize", a.fillSize, o), o.properties.color = e.getProperty(
              "fillColor",
              a.fillColor,
              o
            ), o.properties.borderColor = e.getProperty("fillBorderColor", a.fillBorderColor, o), o.properties.borderWidth = e.getProperty("fillBorderWidth", a.fillBorderWidth, o), o;
          });
          this.shadowPoint.setData(n), this.fillPoint.setData(s), this.textPoint.setData(t);
        }
      }, { key: "getProperty", value: function(t, e, a) {
        return Object.prototype.toString.call(e) === "[object Function]" ? e(a) : (e = a[t] || e, "properties" in a && t in a.properties && (e = a.properties[t]), e);
      } }, { key: "getDefaultOptions", value: function() {
        return {
          enablePicked: !1,
          selectedIndex: -1,
          selectedColor: "#ffff00",
          autoSelect: !0,
          fillColor: "rgba(255, 50, 10, 1)",
          fillSize: 20,
          fillBorderColor: "#ffffff",
          fillBorderWidth: 1.2,
          shadowColor: "rgba(255, 80, 110, 0.7)",
          shadowSize: 40,
          shadowBorderColor: "rgba(255, 80, 110, 1)",
          shadowBorderWidth: 1.2,
          fontSize: 12,
          fontFamily: "Microsoft Yahei",
          fontColor: "#ffffff"
        };
      } }]), i;
    }(lr), Rp = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.name = "MaskLayer", t.bufferData = [], t.indices = [], t;
      }
      return Lt(i, r), ct(i, [{
        key: "getDefaultOptions",
        value: function() {
          return { blend: "deeper", color: "rgba(100, 100, 100, 0.6)", height: 0, polygonOffset: [0, 0], depthTest: !1, depthWrite: !1 };
        }
      }, { key: "initialize", value: function(t) {
        this.gl = t, this.program = new Ft(
          this.gl,
          { vertexShader: "precision highp float;attribute vec2 a_position;uniform mat4 u_matrix;uniform float u_height;void main(){vec4 position=u_matrix*vec4(a_position.xy,u_height,1.0);gl_Position=position;}", fragmentShader: "precision highp float;uniform vec4 u_color;void main(){gl_FragColor=u_color;}", defines: [] },
          this
        ), this.vertexBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.indexBuffer = new dt({ gl: t, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" });
        var e = [{ stride: 8, name: "a_position", buffer: this.vertexBuffer, size: 2, type: "FLOAT", offset: 0 }];
        e = e.concat(this.getCommonAttributes()), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: e });
      } }, { key: "onDestroy", value: function() {
        this.bufferData = [], this.index = [];
      } }, { key: "onChanged", value: function(t, e) {
        var a = this;
        if (this.gl) {
          t = [];
          for (var n = [], s = 0; s < e.length; s++)
            if (e[s].geometry.coordinates) {
              var o = [[this.normizedPoint([-180, -90]), this.normizedPoint([180, -90]), this.normizedPoint([180, 90]), this.normizedPoint([-180, 90])]], u = [];
              if (e[s].geometry.type === "LineString" && (u = [e[s].geometry.coordinates.map(function(l) {
                return a.normizedPoint(l);
              })]), e[s].geometry.type === "MultiPolygon")
                for (var c = e[s].geometry.coordinates, v = 0; v < c.length; v++)
                  u = u.concat(c[v].map(function(l) {
                    return l.map(function(f) {
                      return a.normizedPoint(f);
                    });
                  }));
              else
                for (c = 0; c < e[s].geometry.coordinates.length; c++)
                  u.push(e[s].geometry.coordinates[c].map(function(l) {
                    return a.normizedPoint(l);
                  }));
              for (u = le.flatten(o.concat(u)), o = u.vertices, u = u.holes, c = [], v = 0; v < o.length; v += 3)
                c.push(o[v + 0], o[v + 1]);
              this.parseBufferData(t, n, c, u);
            }
          this.bufferData = t, this.index = n, this.vertexBuffer.updateData(new Float32Array(t)), this.indexBuffer.updateData(new Uint32Array(n));
        }
      } }, { key: "parseBufferData", value: function(t, e, a, n) {
        var s = t.length / 2;
        for (n = n && n.length ? le(a, n, 2) : le(a), t.push.apply(t, bt(a)), t = 0; t < n.length; t++)
          e.push(n[t] + s);
      } }, { key: "render", value: function(t) {
        if (this.index && this.index.length) {
          var e = t.gl, a = t.matrix, n = this.getOptions(), s = this.program;
          s.use(e), t = Rt(this.getCommonUniforms(t), { u_matrix: a, u_height: n.height, u_color: this.normizedColor(n.color) }), s.setUniforms(t), this.setGLState({ blend: !0, blendFunc: ie(e, n.blend), polygonOffset: n.polygonOffset, depthTest: n.depthTest, depthMask: n.depthWrite }), this.indexBuffer.bind(), this.vertexArray.bind(), e.drawElements(e.TRIANGLES, this.index.length, e.UNSIGNED_INT, 0);
        }
      } }]), i;
    }(jt), Op = function(r) {
      function i() {
        return ft(this, i), Pt(this, (i.__proto__ || yt(i)).apply(this, arguments));
      }
      return Lt(i, r), ct(i, [{ key: "toBBox", value: function(t) {
        var e = Vt(t.item.geometry.coordinates, 2);
        return t = e[0], e = e[1], { minX: t, minY: e, maxX: t, maxY: e };
      } }, { key: "compareMinX", value: function(t, e) {
        return t.item.geometry.coordinates[0] - e.item.geometry.coordinates[0];
      } }, { key: "compareMinY", value: function(t, e) {
        return t.item.geometry.coordinates[1] - e.item.geometry.coordinates[1];
      } }]), i;
    }(ci), Bp = function(r) {
      function i(t, e) {
        return ft(this, i), t = Pt(this, (i.__proto__ || yt(i)).call(this, t, e)), t.name = "PointCanvasCustomLayer", e = t.canvas = document.createElement("canvas"), t.ctx = e.getContext("2d"), t.geoRBush = new Op(), t;
      }
      return Lt(i, r), ct(i, [
        { key: "getDefaultOptions", value: function() {
          return { depthWrite: !1, depthTest: !0, color: "#fff", fontFamily: "Microsoft Yahei", fontSize: 14, flat: !1, collides: !0, unit: "px", angle: 0, offset: [0, 0], padding: [2, 2], margin: [0, 0], polygonOffset: [0, 0], itemDimension: [20, 20], renderItem: this.defaultOptionRenderItem };
        } },
        { key: "defaultOptionRenderItem", value: function(t, e, a) {
          a.fillStyle = "red", a.fillRect(e.x, e.y, e.w, e.h);
        } },
        {
          key: "initialize",
          value: function(t) {
            this.gl = t;
            var e = this.getOptions();
            this.texture = null, this.lastUpdateTime = 0, this.program = new Ft(this.gl, {
              vertexShader: "precision highp float;uniform mat4 matrix;uniform bool uFlat;uniform bool uUnitPx;uniform float zoomUnits;uniform float devicePixelRatio;uniform float zIndex;uniform vec2 offset;attribute vec3 position;attribute float corner;attribute float scale;attribute float rotation;attribute vec2 size;attribute vec2 aTextCoord;varying vec2 vTextCoord;/***点A(x,y)，绕原点顺时针旋转角度a新坐标的计算公式*x1=x*cos(a)+y*sin(a)*y1=y*cos(a)-x*sin(a)*/vec3 transformCoord(vec3 coord,vec2 size,float corner){float x=coord.x;float y=coord.y;if(corner==1.0){x+=-size.x*cos(rotation)+size.y*sin(rotation);y+=size.y*cos(rotation)+size.x*sin(rotation);}else if(corner==2.0){x+=size.x*cos(rotation)+size.y*sin(rotation);y+=size.y*cos(rotation)-size.x*sin(rotation);}else if(corner==3.0){x+=size.x*cos(rotation)-size.y*sin(rotation);y+=-size.y*cos(rotation)-size.x*sin(rotation);}else{x+=-size.x*cos(rotation)-size.y*sin(rotation);y+=-size.y*cos(rotation)+size.x*sin(rotation);}return vec3(x,y,coord.z);}void main(){vTextCoord=aTextCoord;if(uFlat){vec2 pixelOffset=offset;vec2 halfSize=size/2.0*scale;if(uUnitPx){halfSize*=zoomUnits;pixelOffset*=zoomUnits;}vec3 current=transformCoord(position,halfSize,corner);current.z+=zIndex;gl_Position=matrix*vec4(current.x+pixelOffset[0],current.y-pixelOffset[1],current.z,1.0);}else{vec2 pixelOffset=offset*zoomUnits;vec4 projection=matrix*vec4(position.x+pixelOffset[0],position.y-pixelOffset[1],position.z,1.0);vec3 screen=projection.xyz/projection.w;vec2 halfSize=size/MAPV_resolution*devicePixelRatio*scale;vec3 current=transformCoord(screen,halfSize,corner);current.z+=zIndex;gl_Position=vec4(current,1.0);}}",
              fragmentShader: `precision highp float;uniform sampler2D textureImage;uniform vec4 uSelectedColor;varying vec2 vTextCoord;void main(){gl_FragColor=texture2D(textureImage,vec2(vTextCoord.x,1.0-vTextCoord.y));
#if defined(PICK)
if(mapvIsPicked()){gl_FragColor=vec4(uSelectedColor.rgb,gl_FragColor.a);}
#endif
}`,
              defines: e.enablePicked ? ["PICK"] : []
            }, this), this.vertexBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.uvBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.indexBuffer = new dt({ gl: t, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" }), e = [{ name: "position", buffer: this.vertexBuffer, size: 3, stride: 32, type: "FLOAT", offset: 0 }, { name: "corner", buffer: this.vertexBuffer, size: 1, stride: 32, type: "FLOAT", offset: 12 }, { name: "size", buffer: this.vertexBuffer, size: 2, stride: 32, type: "FLOAT", offset: 16 }, { name: "scale", buffer: this.vertexBuffer, size: 1, stride: 32, type: "FLOAT", offset: 24 }, { name: "rotation", buffer: this.vertexBuffer, size: 1, stride: 32, type: "FLOAT", offset: 28 }, {
              name: "aTextCoord",
              buffer: this.uvBuffer,
              size: 2,
              stride: 8,
              type: "FLOAT",
              offset: 0
            }], e = e.concat(this.getCommonAttributes()), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: e });
          }
        },
        { key: "onDestroy", value: function() {
        } },
        { key: "onChanged", value: function(t, e) {
          this.gl && this.processCache(t, e);
        } },
        { key: "processCache", value: function(t, e) {
          for (this.cachedData = [], this.geoRBush.clear(), t = 0; t < e.length; t++) {
            var a = e[t], n = this.normizedPoint(a.geometry.coordinates);
            n && this.cachedData.push({ point: n, item: a, extra: {}, index: t });
          }
          this.geoRBush.load(this.cachedData);
        } },
        { key: "render", value: function(t) {
          if (this.cachedData && this.cachedData.length && this.map) {
            var e = t.gl, a = t.matrix, n = this.getOptions(), s = this.program;
            s.use(e), this.throttleUpdate(t), this.setGLState({ blend: !0, blendEquation: e.FUNC_ADD, blendFunc: [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA], polygonOffset: n.polygonOffset, depthTest: n.depthTest, depthMask: n.depthWrite });
            var o = this.map.getZoomUnits();
            s.setUniforms(Rt(this.getCommonUniforms(t), {
              matrix: a,
              devicePixelRatio: window.devicePixelRatio,
              textureImage: this.texture,
              uFlat: n.flat,
              offset: n.offset,
              zoomUnits: o,
              zIndex: n.zIndex,
              uUnitPx: n.unit === "px"
            })), 0 < this.index.length && (this.indexBuffer.bind(), this.vertexArray.bind(), e.drawElements(e.TRIANGLES, this.index.length, e.UNSIGNED_INT, 0));
          }
        } },
        { key: "throttleUpdate", value: function(t) {
          this.updateText(t);
        } },
        { key: "updateText", value: function(t) {
          var e = t.gl, a = t.matrix, n = this.getOptions(), s = n.padding, o = n.margin, u = n.collides;
          t = n.enablePicked;
          var c = n.itemDimension, v = n.beforeRenderAll, l = n.beforeComputeDimension;
          n = n.renderItem;
          var f = this.map.getBounds(), p = e.canvas.width / window.devicePixelRatio, d = e.canvas.height / window.devicePixelRatio, g = this.canvas;
          e = this.ctx, e.save(), e.scale(window.devicePixelRatio, window.devicePixelRatio), l && l(e), f = this.geoRBush.search({ minX: f.sw.lng, minY: f.sw.lat, maxX: f.ne.lng, maxY: f.ne.lat });
          var A = new ci();
          l = [];
          for (var _ = 0; _ < f.length; _++) {
            var M = f[_], P = M.point, R = M.item, B = M.extra;
            M = M.index;
            var F = Vt(P, 3);
            F = ue.clone([F[0], F[1], F[2], 1]), ue.transformMat4(F, F, a), ue.scale(F, F, 1 / F[3]);
            var I = (F[0] + 1) / 2 * p, U = (-F[1] + 1) / 2 * d, G = Array.isArray(c) ? c : c(R, e, B);
            F = G[0] + 2 * s[0], G = G[1] + 2 * s[1];
            var Z = F + o[0], Q = G + o[1];
            if (I -= Z / 2, U -= Q / 2, Z = I + Z, Q = U + Q, !(0 > Z || 0 > Q || I > p || U > d)) {
              if (u) {
                if (Q = { minX: I, maxX: Z, minY: U, maxY: Q }, A.collides(Q))
                  continue;
                A.insert(Q);
              }
              l.push({ w: F, h: G, point: P, item: R, extra: B, dataIndex: M });
            }
          }
          for (e.restore(), s = Er(l), a = s.w, s = s.h, 0 >= a && (a = 1), 0 >= s && (s = 1), g.width = a * window.devicePixelRatio, g.height = s * window.devicePixelRatio, e.save(), e.scale(window.devicePixelRatio, window.devicePixelRatio), v && v(e), v = [], g = [], o = [], u = [], c = 0, p = l.length; c < p; ++c) {
            for (d = l[c], n(
              d.item,
              d,
              e,
              d.extra
            ), _ = Vt(d.point, 3), f = _[0], A = _[1], _ = _[2], P = 0; 4 > P; P++)
              v.push(f, A, _), v.push(P), v.push(d.w, d.h), v.push(1, 0);
            f = d.x / a, A = (d.x + d.w) / a, _ = (d.y + d.h) / s, P = d.y / s, g.push(f, _, f, P, A, P, A, _), f = 4 * c, o.push(f, f + 2, f + 1, f, f + 3, f + 2), t && (d = this.indexToRgb(d.dataIndex), u.push(d[0] / 255, d[1] / 255, d[2] / 255), u.push(d[0] / 255, d[1] / 255, d[2] / 255), u.push(d[0] / 255, d[1] / 255, d[2] / 255), u.push(d[0] / 255, d[1] / 255, d[2] / 255));
          }
          e.restore(), this.loadTexture(), this.index = o, this.vertexBuffer.updateData(new Float32Array(v)), this.uvBuffer.updateData(new Float32Array(g)), this.indexBuffer.updateData(new Uint32Array(o)), t && this.pickBuffer.updateData(new Float32Array(u));
        } },
        { key: "loadTexture", value: function() {
          var t = this;
          this.canvas ? Ot(this.gl, this.canvas, function(e) {
            t.texture = e;
          }, { TEXTURE_WRAP_S: "CLAMP_TO_EDGE", TEXTURE_WRAP_T: "CLAMP_TO_EDGE" }) : this.texture = null;
        } }
      ]), i;
    }(jt), Dp = function() {
      function r(i, t) {
        ft(this, r), this.name = "Mask", this.webglLayer = i, this.options = t || {}, this.bufferData = [], this.indices = [];
      }
      return ct(r, [
        { key: "initialize", value: function(i) {
          return this.gl = i, this.program = new Ft(this.gl, { vertexShader: "precision highp float;attribute vec2 a_position;uniform mat4 u_matrix;uniform float u_height;void main(){vec4 position=u_matrix*vec4(a_position.xy,u_height,1.0);gl_Position=position;}", fragmentShader: "precision highp float;uniform vec4 u_color;void main(){gl_FragColor=u_color;}", defines: [] }, this), this.vertexBuffer = new dt({ gl: i, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.indexBuffer = new dt({ gl: i, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.vertexArray = new Qt({
            gl: i,
            program: this.program,
            attributes: [{ stride: 8, name: "a_position", buffer: this.vertexBuffer, size: 2, type: "FLOAT", offset: 0 }]
          }), this;
        } },
        { key: "onDestroy", value: function() {
          this.bufferData = [], this.index = [];
        } },
        { key: "setData", value: function(i) {
          var t = this;
          if (this.gl) {
            for (var e = [], a = [], n = 0; n < i.length; n++)
              if (i[n].geometry.coordinates) {
                var s = [];
                if (i[n].geometry.type === "LineString" && (s = [i[n].geometry.coordinates.map(function(v) {
                  return t.normizedPoint(v);
                })]), i[n].geometry.type === "MultiPolygon")
                  for (var o = i[n].geometry.coordinates, u = 0; u < o.length; u++)
                    s = s.concat(o[u].map(function(v) {
                      return v.map(function(l) {
                        return t.normizedPoint(l);
                      });
                    }));
                else
                  for (o = 0; o < i[n].geometry.coordinates.length; o++)
                    s.push(i[n].geometry.coordinates[o].map(function(v) {
                      return t.normizedPoint(v);
                    }));
                o = le.flatten(s), s = o.vertices, o = o.holes, u = [];
                for (var c = 0; c < s.length; c += 3)
                  u.push(s[c + 0], s[c + 1]);
                this.parseBufferData(e, a, u, o);
              }
            return this.bufferData = e, this.index = a, this.vertexBuffer.updateData(new Float32Array(e)), this.indexBuffer.updateData(new Uint32Array(a)), this;
          }
        } },
        { key: "parseBufferData", value: function(i, t, e, a) {
          var n = i.length / 2;
          for (a = a && a.length ? le(e, a, 2) : le(e), i.push.apply(i, bt(e)), i = 0; i < a.length; i++)
            t.push(a[i] + n);
        } },
        { key: "render", value: function(i) {
          if (this.index && this.index.length) {
            var t = i.gl, e = i.matrix, a = this.options;
            i = this.program, i.use(t), e = { u_matrix: e, u_height: a.height || 0, u_color: this.normizedColor(a.color) }, i.setUniforms(e), this.indexBuffer.bind(), this.vertexArray.bind(), t.drawElements(t.TRIANGLES, this.index.length, t.UNSIGNED_INT, 0);
          }
        } },
        {
          key: "normizedColor",
          value: function(i) {
            var t = i;
            return i instanceof Array || (t = V(i).unitArray()), t[3] === void 0 && (t[3] = 1), t;
          }
        },
        { key: "normizedPoint", value: function(i) {
          var t = this.getPointOffset();
          if (!i || !i[0] || !i[1])
            return [t[0], t[1], 0];
          var e = Number(i[0]), a = Number(i[1]);
          -180 <= e && 180 >= e && -90 <= a && 90 >= a && (a = this.webglLayer.map.lnglatToMercator(e, a), e = a[0], a = a[1]);
          var n = Number(i[2]) || 0;
          return this.webglLayer && this.webglLayer.options.mapType === "cesium" && window.Cesium ? (e = this.convertLngLat([e, a]), n = window.Cesium.Cartesian3.fromDegrees(
            e[0],
            e[1],
            n
          ), e = n.x, a = n.y, n = n.z) : this.webglLayer && this.webglLayer.options.mapType === "bmapgl" && this.webglLayer.map.map.mapType === "B_EARTH_MAP" && (e = this.convertLngLat([e, a]), n = this.webglLayer.map.map.getEarth().scene.fromLatLngToXYZ({ lng: e[0], lat: e[1] }), e = n.x, a = n.y, n = n.z), 3 < i.length ? [e - t[0], a - t[1], n].concat(bt(i.slice(3))) : [e - t[0], a - t[1], n];
        } },
        { key: "convertLngLat", value: function(i) {
          return [i[0] / 2003750834e-2 * 180, 180 / Math.PI * (2 * Math.atan(Math.exp(i[1] / 2003750834e-2 * 180 * Math.PI / 180)) - Math.PI / 2)];
        } },
        {
          key: "getPointOffset",
          value: function() {
            var i = [0, 0], t = this.options;
            return this.webglLayer && this.webglLayer.options.pointOffset ? i = this.webglLayer.options.pointOffset : t.pointOffset && (i = t.pointOffset), i;
          }
        }
      ]), r;
    }(), bp = function(r) {
      function i(t, e) {
        return ft(this, i), Pt(this, (i.__proto__ || yt(i)).call(this, t, e));
      }
      return Lt(i, r), ct(i, [{ key: "getDefaultOptions", value: function() {
        return {};
      } }, { key: "initialize", value: function(t) {
        var e = this.getOptions();
        if (e.source && e.source.image && e.domain && (typeof e.source.image == "string" || e.source.width && e.source.height)) {
          var a = e.refColors, n = e.refImage;
          if ((a || n) && (!a || a.colors && a.positions) && (!n || typeof n.url == "string")) {
            this.gl = t;
            var s = [];
            a ? this.imageData = rr(a.colors, a.positions, a.clamp, a.color, a.height) : (this.imageData = { data: n.url }, s.push("USE_IMAGE_TEXTURE"), this.imageTexture = !0), e.isTerrain && (this.isTerrain = e.isTerrain, s.push("USE_TERRAIN"), this.gridRowMax = 1600, e.gridRowMax && (this.gridRowMax = e.gridRowMax), this.gridColMax = 1600, e.gridColMax && (this.gridColMax = e.gridColMax)), this.texture = null, a = `
        float generateValue(vec4 rgba){
            return rgba.r;
        }`, e.fomularC && (a = e.fomularC), e = `precision highp float;attribute vec3 a_pos;attribute vec2 a_texture_coord;uniform mat4 u_proj_matrix;uniform mat4 u_mv_matrix;uniform sampler2D uTile;uniform float u_baseLine;uniform float u_elevationScale;varying vec2 v_texture_coord;void main(){v_texture_coord=a_texture_coord;vec3 pos=a_pos.xyz;
#if defined(USE_TERRAIN)
vec4 terrainColor=texture2D(uTile,vec2(a_texture_coord.s,a_texture_coord.t));float value=generateValue(terrainColor);float h=(value-u_baseLine)*u_elevationScale;pos.z=max(0.,h);
#endif
vec4 position=u_proj_matrix*u_mv_matrix*vec4(pos,1.0);gl_Position=position;}`.replace(
              "void main()",
              a + `
void main()`
            ), a = `precision highp float;varying vec2 v_texture_coord;uniform sampler2D uTile;uniform sampler2D uColorRamp;uniform bool uUseFilter;uniform vec4 uFilterColor;uniform float u_opacity;uniform float u_noData;uniform vec3 u_noTextureData;uniform vec2 u_clamp;uniform vec2 u_domain;uniform vec3 u_linearOpacity;uniform bool u_isOneBand;uniform float u_brightness;uniform float u_contrast;uniform float u_exposure;uniform float u_saturation;vec4 indexToRgba(float value){float index=value;float b=floor(index/65536.);index-=b*65536.;float g=floor(index/256.);index-=g*256.;float r=index;return vec4(r,g,b,255.);}vec3 adjustBrightness(vec3 color,float value){return color+value;}vec3 adjustContrast(vec3 color,float value){return 0.5+(1.0+value)*(color-0.5);}vec3 adjustExposure(vec3 color,float value){return color*(1.0+value);}vec3 adjustSaturation(vec3 color,float value){const vec3 luminosityFactor=vec3(0.2126,0.7152,0.0722);vec3 grayscale=vec3(dot(color,luminosityFactor));return mix(grayscale,color,1.0+value);}void main(){vec4 data=texture2D(uTile,vec2(v_texture_coord.s,v_texture_coord.t));float value=generateValue(data);vec4 textureColor=vec4(0,0,0,0);if(value>=u_clamp.s&&value<=u_clamp.t){float normalisedValue=(value-u_domain.s)/(u_domain.t-u_domain.s);
#if defined(USE_IMAGE_TEXTURE)
vec4 color=texture2D(uColorRamp,vec2(v_texture_coord.s,v_texture_coord.t));if(vec3(color.rgb)==u_noTextureData){color=vec4(0,0,0,0);}
#else
vec4 color=texture2D(uColorRamp,vec2(normalisedValue,0));
#endif
color.a=smoothstep(u_linearOpacity.s,u_linearOpacity.t,color.a*normalisedValue)+u_linearOpacity.p;textureColor=color;textureColor.a=textureColor.a*u_opacity;vec3 mixColor=adjustBrightness(textureColor.rgb,u_brightness);mixColor=adjustContrast(mixColor,u_contrast);mixColor=adjustExposure(mixColor,u_exposure);mixColor=adjustSaturation(mixColor,u_saturation);textureColor=vec4(mixColor,textureColor.a);if(uIsPickRender&&u_isOneBand){textureColor=indexToRgba(value)/255.;}if(uIsPickRender&&!u_isOneBand){textureColor=data;}}if(value==u_noData){textureColor=vec4(0,0,0,0);}if(uUseFilter){textureColor=textureColor*uFilterColor;}gl_FragColor=textureColor;}`.replace(
              "void main()",
              a + `
void main()`
            ), this.program = new Ft(this.gl, { vertexShader: e, fragmentShader: a, defines: s }, this), this.vertexBuffer = new dt({ gl: t, target: "ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.indexBuffer = new dt({ gl: t, target: "ELEMENT_ARRAY_BUFFER", usage: "STATIC_DRAW" }), this.vertexArray = new Qt({ gl: t, program: this.program, attributes: [{ name: "a_pos", buffer: this.vertexBuffer, stride: 20, size: 3, type: "FLOAT", offset: 0 }, { name: "a_texture_coord", buffer: this.vertexBuffer, size: 2, stride: 20, type: "FLOAT", offset: 12 }] });
          }
        }
      } }, {
        key: "onChanged",
        value: function(t, e) {
          var a = this;
          this.gl && (this.loadDataTexture && clearTimeout(this.loadDataTexture), this.loadDataTexture = setTimeout(function() {
            a.loadTexture(function() {
              a.parseData(e), a.webglLayer.render();
            });
          }, 0));
        }
      }, { key: "drawMask", value: function(t) {
        var e = t.gl, a = t.matrix, n = t.projectionMatrix, s = t.viewMatrix;
        if (t = t.polygons) {
          var o = new Dp(this.webglLayer, { color: "rgba(19, 14, 7, 0.8)" });
          this.setGLState({ stencilTest: !0, depthTest: !1, depthMask: !1 }), e.clear(e.STENCIL_BUFFER_BIT), e.stencilFunc(e.ALWAYS, 1, 255), e.stencilOp(e.KEEP, e.KEEP, e.REPLACE), e.colorMask(!1, !1, !1, !1), o.initialize(e).setData(t).render({ gl: e, matrix: a, projectionMatrix: n, viewMatrix: s });
        }
      } }, { key: "onOptionsChanged", value: function(t, e) {
        this.gl && (this.initialize(this.gl), this.loadTexture(), this.webglLayer.render());
      } }, { key: "render", value: function(t) {
        var e = t.gl, a = t.matrix, n = t.projectionMatrix, s = t.viewMatrix, o = t.isPickRender;
        t = this.getOptions();
        var u = this.program;
        (u || this.texture) && (t.stencilData && this.drawMask({
          gl: e,
          matrix: a,
          projectionMatrix: n,
          viewMatrix: s,
          polygons: t.stencilData
        }), this.setGLState({ blend: !0, blendEquation: e.FUNC_ADD, blendFunc: [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA], stencilTest: !!t.stencilData, depthTest: t.depthTest, depthMask: t.depthMask }), u.use(e), t.stencilData && (e.stencilFunc(e.EQUAL, 1, 1), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.colorMask(!0, !0, !0, !0)), this.colorRamp && this.texture && (a = [0, 0, 0], t.linearOpacity && this.formaLinear(t.linearOpacity, a), n = {
          uColorRamp: this.colorRamp,
          uTile: this.texture,
          u_proj_matrix: n,
          uUseFilter: !!t.filterColor,
          uFilterColor: this.normizedColor(t.filterColor || "rgba(0, 0, 100, 1.0)"),
          u_mv_matrix: s,
          uIsPickRender: !!o,
          u_noData: t.noData || -99999,
          u_domain: t.domain,
          u_clamp: t.clamp ? t.clamp : t.domain,
          u_linearOpacity: a,
          u_opacity: t.opacity || 1,
          u_isOneBand: !!this.isOneBand,
          u_brightness: t.brightness || 0,
          u_contrast: t.contrast || 0,
          u_exposure: t.exposure || 0,
          u_saturation: t.saturation || 0
        }, this.isTerrain && (n.u_baseLine = t.baseLine || 0, n.u_elevationScale = t.elevationScale || 1), this.imageTexture && (n.u_noTextureData = t.baseLine || 0), u.setUniforms(n), this.index && 0 < this.index.length && (this.indexBuffer.bind(), this.vertexArray.bind(), e.drawElements(e.TRIANGLES, this.index.length, e.UNSIGNED_INT, 0)), t.stencilData && !t.stencilAfter && (e.clear(e.STENCIL_BUFFER_BIT), e.stencilMask(255), e.stencilFunc(e.ALWAYS, 1, 255))));
      } }, { key: "onDestroy", value: function() {
        this.texturePixels = this.texture = this.colorRamp = this.indexBuffer = this.vertexBuffer = this.index = this.program = null;
      } }, { key: "pickAfter", value: function(t, e) {
        var a, n;
        return this.isOneBand ? (e = a = n = e, t = 1) : (e = t[0], a = t[1], n = t[2], t = t[3]), this.getOptions().fomularJS ? this.getOptions().fomularJS({ r: e, g: a, b: n, a: t }) : e;
      } }, { key: "formaLinear", value: function(t, e) {
        t.start && (e[0] = t.start || 0), t.end && (e[1] = t.end || 0), t.base && (e[2] = t.base || 0);
      } }, { key: "loadTexture", value: function(t) {
        var e = this, a = this.getOptions();
        a.source.image && this.imageData ? Ot(this.gl, this.imageData.data, function(n, s) {
          e.colorRamp = n, be(a.source.image) === "object" ? (e.isOneBand = !0, Ot(e.gl, a.source.image, function(o, u, c) {
            e.texture = o, e.texturePixels = c, e.textureWidth = c.width, e.textureHeight = c.height, t && t(), e.webglLayer.render();
          }, { TEXTURE_MIN_FILTER: "NEAREST", TEXTURE_MAG_FILTER: "NEAREST", TEXTURE_WRAP_S: "CLAMP_TO_EDGE", TEXTURE_WRAP_T: "CLAMP_TO_EDGE" }, { width: a.source.width, height: a.source.height, format: "LUMINANCE", type: "FLOAT" })) : (e.isOneBand = !1, Ot(e.gl, a.source.image, function(o, u, c) {
            e.texture = o, e.texturePixels = c, e.textureWidth = c.width, e.textureHeight = c.height, t && t(), e.webglLayer.render();
          }, { TEXTURE_WRAP_S: "CLAMP_TO_EDGE", TEXTURE_WRAP_T: "CLAMP_TO_EDGE" }));
        }, {
          TEXTURE_WRAP_S: "CLAMP_TO_EDGE",
          TEXTURE_WRAP_T: "CLAMP_TO_EDGE"
        }, { width: this.imageData.width, height: this.imageData.height, flipY: !0, format: "RGBA", type: "UNSIGNED_BYTE" }) : (this.texture = null, t && t());
      } }, { key: "parseData", value: function(t) {
        var e = this;
        if (this.vertexBuffer) {
          var a = [], n = [];
          if (t && t[0]) {
            var s = t[0].geometry.coordinates[0];
            s = s.map(function(A) {
              return e.normizedPoint(A);
            }), t = s[0][0];
            var o = s[0][1], u = s[2][0], c = s[2][1];
            this.bound = [t, o, u, c], this.gridRowMax > this.textureHeight && (this.gridRowMax = this.textureHeight), this.gridColMax > this.textureWidth && (this.gridColMax = this.textureWidth), s = this.isTerrain ? this.gridColMax : 1;
            var v = this.isTerrain ? this.gridRowMax : 1, l = s + 1;
            u = (u - t) / s, c = (c - o) / v;
            for (var f = 0; f <= v; f++)
              for (var p = 0; p <= s; p++)
                if (a.push(t + u * p, o + c * f, 0), a.push(p / s, f / v), p < s && f < v) {
                  var d = l * f + p, g = l * (f + 1) + p;
                  n.push(d, g + 1, d + 1), n.push(d, g, g + 1);
                }
          }
          this.index = n, this.vertexBuffer.updateData(new Float32Array(a)), this.indexBuffer.updateData(new Uint32Array(n));
        }
      } }, { key: "getValue", value: function(t, e) {
        return this.isTerrain && t && this.bound && (t = this.normizedPoint(t), this.containsPoint(t, this.bound) && (t = this.uvPoint(t, this.bound), e = this.pixelByUV(t, e, this.getOptions().fomularJS), e.result)) ? e : 0;
      } }, { key: "containsPoint", value: function(t, e) {
        if (t)
          return t[0] >= e[0] && t[0] <= e[2] && t[1] >= e[1] && t[1] <= e[3];
      } }, { key: "uvPoint", value: function(t, e) {
        if (t)
          return [(t[0] - e[0]) / (e[2] - e[0]), (e[3] - t[1]) / (e[3] - e[1])];
      } }, { key: "pixelByUV", value: function(t, e, a) {
        if (this.texturePixels) {
          var n = this.texturePixels, s = n.width, o = n.height, u = n.data, c = Math.floor(t[0] * (s - 1));
          t = Math.floor(t[1] * (o - 1));
          var v = 1;
          return n.type === "RGBA" && (v = 4), this._getPixelBound(c, t, e, s, o, u, v, a);
        }
        return null;
      } }, { key: "_getPixelBound", value: function(t, e, a, n, s, o, u, c) {
        var v = t - a;
        0 > v && (v = 0), t += a, t > n - 1 && (t = n - 1);
        var l = e - a;
        0 > l && (l = 0), e += a, e > s - 1 && (e = s - 1), a = s = 0;
        for (var f = [0, 0, 0, 1], p = v; p <= t; p++)
          for (var d = l; d <= e; d++) {
            var g = (d * n + p) * u, A = o[g], _ = o[g + this.min(0, u - 3)], M = o[g + this.min(0, u - 2)];
            g = u === 4 ? o[g + 3] : 1;
            var P = c ? c({ r: A, g: _, b: M, a: g }) : A;
            P > s && (s = P, f = [A, _, M, g]), a += P;
          }
        return { result: a / ((t - v + 1) * (e - l + 1)), pixel: f, max: s };
      } }, { key: "min", value: function(t, e) {
        return e < t ? t : e;
      } }]), i;
    }(jt);
    window._hmt_private || (window._hmt = window._hmt || [], function() {
      var r = document.createElement("script");
      r.src = "https://hm.baidu.com/hm.js?e8002ef3d9e0d8274b5b74cc4a027d08";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(r, i);
    }()), m.version = "1.0.0-beta.175", m.View = ua, m.CanvasLayer = C, m.CircleLayer = function r() {
      var i = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
      return ft(this, r), dd.includes(i.type) ? new cd(i) : new hd(i);
    }, m.GridLayer = rl, m.HeatGridLayer = yd, m.ShapeLayer = qn, m.SimpleLineLayer = il, m.LineLayer3D = Ad, m.LineLayer = da, m.LineRainbowLayer = Td, m.WallSpriteLayer = Md, m.LinePointLayer = ti, m.WallLayer = Vd, m.WallTripLayer = Zd, m.HeatLineLayer = Jd, m.HoneycombLayer = Qd, m.WebglLayer = Qu, m.PointLayer = vn, m.GroundRippleLayer = Kd, m.RippleLayer = qd, m.SparkLayer = $d, m.ClusterLayer = tp, m.IconClusterLayer = ep, m.HeatPointLayer = rp, m.ShapeLineLayer = ip, m.PointTripLayer = np, m.LineTripLayer = op, m.IconCollidesLayer = ap, m.LineFlowLayer = El, m.TileLayer = sp, m.IconLayer = La, m.BoardLayer = up, m.PolygonLayer = lp, m.CarLineLayer = Tp, m.Layer = jt, m.TextLayer = di, m.BoardTextLayer = Ep, m.LabelLayer = Mp, m.TrafficLayer = Pp, m.GltfLayer = bl, m.HeatmapLayer = Lp, m.BarLayer = Cp, m.MarkerListLayer = Sp, m.MaskLayer = Rp, m.PointCanvasCustomLayer = Bp, m.PixelLayer = bp, m.FXAA = $c, m.SMAA = td, m.BlurEffect = ed, m.BloomEffect = rd, m.BrightEffect = id, m.DepthEffect = nd, m.EffectManager = Ju, m.getContext = Xt, m.createTexture = Zt, m.loadTextureImage = Ot, m.getBlend = ie, m.FrameBufferObject = _e, m.Program = Ft, m.StateManager = Zu, m.Buffer = dt, m.VertexArray = Qt, m.CommonLayer = la, m.MercatorProjection = q, m.Canvas = mt, m.Intensity = gt, m.BezierCurve = ht, m.GeodesicCurve = ot, m.OdCurve = fc, m.utilCity = { getProvinceNameByCityName: function(r) {
      for (var i = 0; i < Yr.length; i++)
        for (var t = Yr[i].n, e = Yr[i].cities, a = 0; a < e.length; a++)
          if (e[a].n == r)
            return t;
      return null;
    }, getCenterByCityName: function(r) {
      r = r.replace("市", "");
      for (var i = 0; i < Xo.length; i++)
        if (Xo[i].n == r)
          return _t(Xo[i].g);
      for (i = 0; i < Vo.length; i++)
        if (Vo[i].n == r)
          return _t(Vo[i].g);
      for (i = 0; i < Yr.length; i++) {
        if (Yr[i].n == r)
          return _t(Yr[i].g);
        for (var t = Yr[i].cities, e = 0; e < t.length; e++)
          if (t[e].n == r)
            return _t(t[e].g);
      }
      return null;
    } }, m.isMobile = au, m.isIOSMobile = su, m.Encryptor = { encode: function(r) {
      r = ju.deflateRaw(r);
      for (var i = [], t = 0; t < r.length; t++)
        i.push(r[t] ^ 23);
      return new Uint8Array(i);
    }, decode: function(r) {
      r = new Uint8Array(r);
      for (var i = [], t = 0; t < r.length; t++)
        i.push(r[t] ^ 23);
      r = new Uint8Array(i);
      try {
        var e = window.flate.deflate_decode_raw(r);
        return new TextDecoder("utf-8").decode(e);
      } catch {
        return console.warn("inflate by pako!"), ju.inflateRaw(r, { to: "string" });
      }
    }, download: function(r, i) {
      var t = new Blob([r], { type: "application/octet-binary" });
      r = document.createElement("a"), t = window.URL.createObjectURL(t), r.href = t, r.download = i || "mapvgl_download", r.click();
    } }, m.createFusionView = function(r, i) {
      var t = void 0, e = !1;
      r.addEventListener("glmoduleloaded", function(a) {
        e || (e = !0, setTimeout(function() {
          t = new ua({ cameraNear: 10, cameraFar: 4e3, gl: r._webglPainter.gl, canvas: r._webglPainter.gl.canvas, autoUpdate: !1, map: r }), t.webglLayer.canvas.style.zIndex = 1;
          var n = t.webglLayer.stateManager;
          r.insertRender = function() {
            n.setState({ blend: !0, depthTest: !1 }), t.render();
          }, i && i(t);
        }, 3e3));
      }), setTimeout(
        function() {
          if (!e && r._webglMapScene && r._webglPainter && r._webglPainter.gl && r._webglPainter.gl.canvas) {
            e = !0, t = new ua({ cameraNear: 10, cameraFar: 4e3, gl: r._webglPainter.gl, canvas: r._webglPainter.gl.canvas, autoUpdate: !1, map: r }), t.webglLayer.canvas.style.zIndex = 1;
            var a = t.webglLayer.stateManager;
            r.insertRender = function() {
              a.setState({ blend: !0, depthTest: !1 }), t.render();
            }, i && i(t);
          }
        },
        4e3
      );
    }, m.toRadian = D, m.toAngle = z, m.ceilPowerOfTwo = b, m.floorPowerOfTwo = j, m.approximatelyEqual = k, m.isClosed = W, m.generateColorRamp = rr, m.__moduleExports = Ye, m.vec4 = ue, m.vec3 = Mt, m.vec2 = It, m.quat2 = Yc, m.quat = Qn, m.mat4 = pt, m.mat3 = Zc, m.mat2d = Jc, m.mat2 = Qc, m.glMatrix = Kc, Object.defineProperty(m, "__esModule", { value: !0 });
  });
})(Up, je);
class Hp {
  constructor(T) {
    Ut(this, "view");
    const { map: m } = T;
    this.view = new je.View({
      ...T,
      map: m.baseMap
    });
  }
  add(T) {
    return this.view.addLayer(T), T;
  }
  remove(T) {
    this.view.removeLayer(T);
  }
  clear() {
    this.view.removeAllLayers();
  }
  getAll() {
    return this.view.getAllLayers();
  }
  destroy() {
    this.view.destroy();
  }
}
function Ar(E, T) {
  const m = Object.assign(E, T);
  if (typeof T.onClick == "function") {
    const C = T.onClick;
    m.onClick = (L, S) => {
      L.dataItem && C(L.dataItem);
    };
  }
  if (typeof T.onMousemove == "function") {
    const C = T.onMousemove;
    m.onMousemove = (L, S) => {
      L.dataItem && C(L.dataItem);
    };
  }
  return m;
}
function wr(E, T) {
  return E.map((m) => {
    const { coordinates: C, style: L, extra: S } = m, Y = {
      geometry: {
        type: T === "Label" ? "Point" : T,
        coordinates: C
      },
      ...L
    };
    return T === "Polygon" && L ? (L.width = L.lineWidth, Y.properties = L) : T === "Label" && L && (Y.properties = L), m.count !== void 0 && (Y.count = m.count), S && (Y.extra = S), Y;
  });
}
const Gp = {
  borderWidth: 0,
  borderColor: "black",
  size: 10,
  color: "blue",
  shape: "circle",
  collides: !1,
  enablePicked: !0,
  // 是否可以拾取
  selectedIndex: -1,
  // 选中数据项索引
  selectedColor: "#ff0000",
  // 选中项颜色
  autoSelect: !0
  // 根据鼠标位置来自动设置选中项
};
class jp extends je.PointLayer {
  constructor(m) {
    super(Ar(Gp, m));
    Ut(this, "originData", []);
  }
  setData(m) {
    this.originData = m;
    const C = wr(m, "Point");
    super.setData(C);
  }
  setConfig(m) {
    super.setOptions(m);
  }
  flyToViewport(m) {
    const C = this.originData, L = [];
    for (const S of C)
      S.coordinates && S.coordinates.length >= 2 && L.push(new BMapGL.Point(S.coordinates[0], S.coordinates[1]));
    this.map.map.setViewport(L, m);
  }
  show() {
    super.show(), this.webglLayer.render();
  }
  hide() {
    super.hide(), this.webglLayer.render();
  }
}
const Wp = {
  width: 2,
  color: "blue",
  lineJoin: "round",
  enablePicked: !0,
  // 是否可以拾取
  selectedIndex: -1,
  // 选中数据项索引
  selectedColor: "#ff0000",
  // 选中项颜色
  autoSelect: !0
  // 根据鼠标位置来自动设置选中项
};
class Xp extends je.LineLayer {
  constructor(m) {
    super(Ar(Wp, m));
    Ut(this, "originData", []);
  }
  setData(m) {
    this.originData = m;
    const C = wr(m, "LineString");
    super.setData(C);
  }
  setConfig(m) {
    super.setOptions(m);
  }
  flyToViewport(m) {
    var S;
    const C = this.originData, L = [];
    for (const N of C)
      if ((S = N.coordinates) != null && S.length)
        for (const Y of N.coordinates)
          L.push(new BMapGL.Point(Y[0], Y[1]));
    this.map.map.setViewport(L, m);
  }
  show() {
    super.show(), this.webglLayer.render();
  }
  hide() {
    super.hide(), this.webglLayer.render();
  }
}
const Vp = {
  blend: "deeper",
  lineColor: "#2468F2",
  lineWidth: 2,
  lineJoin: "round",
  fillColor: "#2468F255",
  enablePicked: !0,
  // 是否可以拾取
  // selectedIndex: -1, // 选中数据项索引
  // selectedColor: 'rgba(25, 25, 250, 0.5)', // 选中项颜色
  autoSelect: !1
  // 根据鼠标位置来自动设置选中;
};
class Yp extends je.PolygonLayer {
  constructor(m) {
    super(Ar(Vp, m));
    Ut(this, "originData", []);
  }
  setData(m) {
    this.originData = m;
    const C = wr(m, "Polygon");
    super.setData(C);
  }
  setConfig(m) {
    super.setOptions(m);
  }
  flyToViewport(m) {
    var S;
    const C = this.originData, L = [];
    for (const N of C)
      if ((S = N.coordinates) != null && S.length) {
        const Y = N.coordinates.flat(1);
        for (const H of Y)
          L.push(new BMapGL.Point(H[0], H[1]));
      }
    this.map.map.setViewport(L, m);
  }
  show() {
    super.show(), this.webglLayer.render();
  }
  hide() {
    super.hide(), this.webglLayer.render();
  }
}
const Zp = {
  width: 20,
  height: 20,
  offset: [0, 0],
  opacity: 1,
  enablePicked: !0,
  // 是否可以拾取
  // selectedIndex: -1, // 选中项
  // selectedColor: '#ff0000', // 选中项颜色
  autoSelect: !1
  // 根据鼠标位置来自动设置选中项
};
class Jp extends je.IconLayer {
  constructor(m) {
    super(Ar(Zp, m));
    Ut(this, "originData", []);
  }
  setData(m) {
    this.originData = m;
    const C = wr(m, "Point");
    super.setData(C);
  }
  setConfig(m) {
    super.setOptions(m);
  }
  flyToViewport(m) {
    const C = this.originData, L = [];
    for (const S of C)
      S.coordinates && S.coordinates.length >= 2 && L.push(new BMapGL.Point(S.coordinates[0], S.coordinates[1]));
    this.map.map.setViewport(L, m);
  }
  show() {
    super.show(), this.webglLayer.render();
  }
  hide() {
    super.hide(), this.webglLayer.render();
  }
}
const Qp = {
  fontSize: 14,
  offset: [0, 0],
  color: "black",
  fontFamily: "Microsoft Yahei",
  flat: !1,
  angle: 0,
  collides: !1,
  enablePicked: !0,
  // 是否可以拾取
  selectedIndex: -1,
  // 选中数据项索引
  selectedColor: "#ff0000",
  // 选中项颜色
  autoSelect: !1
  // 根据鼠标位置来自动设置选中项
};
class Kp extends je.TextLayer {
  constructor(m) {
    super(Ar(Qp, m));
    Ut(this, "originData", []);
  }
  setData(m) {
    this.originData = m;
    const C = wr(m, "Point");
    super.setData(C);
  }
  setConfig(m) {
    super.setOptions(m);
  }
  flyToViewport(m) {
    const C = this.originData, L = [];
    for (const S of C)
      S.coordinates && S.coordinates.length >= 2 && L.push(new BMapGL.Point(S.coordinates[0], S.coordinates[1]));
    this.map.map.setViewport(L, m);
  }
  show() {
    super.show(), this.webglLayer.render();
  }
  hide() {
    super.hide(), this.webglLayer.render();
  }
}
const qp = {
  textColor: "#0f0",
  borderColor: "#f00",
  backgroundColor: "#fff",
  pickedTextColor: "#fff",
  pickedBorderColor: "#666",
  pickedBackgroundColor: "#666",
  fontFamily: "Microsoft Yahei",
  fontSize: 14,
  lineHeight: 20,
  textAlign: "left",
  collides: !1,
  offset: [0, 0],
  padding: [2, 2],
  borderRadius: 5
};
class $p extends je.LabelLayer {
  constructor(m) {
    super(Ar(qp, m));
    Ut(this, "originData", []);
  }
  setData(m) {
    this.originData = m;
    const C = wr(m, "Label");
    super.setData(C);
  }
  setConfig(m) {
    super.setOptions(m);
  }
  flyToViewport(m) {
    const C = this.originData, L = [];
    for (const S of C)
      S.coordinates && S.coordinates.length >= 2 && L.push(new BMapGL.Point(S.coordinates[0], S.coordinates[1]));
    this.map.map.setViewport(L, m);
  }
  show() {
    super.show(), this.webglLayer.render();
  }
  hide() {
    super.hide(), this.webglLayer.render();
  }
}
const t0 = {
  defaultSize: 10,
  // 非聚合点的默认大小
  defaultColor: "#f00",
  // 非聚合点的默认颜色
  minSize: 20,
  // 聚合点显示的最小直径
  maxSize: 50,
  // 聚合点显示的最大直径
  clusterRadius: 150,
  // 聚合范围半径
  gradient: { 0: "blue", 0.5: "green", 1: "red" },
  // 聚合点颜色梯度
  maxZoom: 15,
  // 聚合的最大级别，当地图放大级别高于此值将不再聚合
  minZoom: 0,
  // 聚合的最小级别，当地图放大级别低于此值将不再聚合
  // 是否显示文字
  showText: !0,
  // 开始聚合的最少点数，点数多于此值才会被聚合
  minPoints: 5,
  // 设置文字样式
  textOptions: {
    fontSize: 12,
    color: "white",
    // 格式化数字显示
    format: (E) => E
  }
};
class e0 extends je.ClusterLayer {
  constructor(m) {
    super(Ar(t0, m));
    Ut(this, "originData", []);
  }
  setData(m) {
    this.originData = m;
    const C = wr(m, "Point");
    super.setData(C);
  }
  setConfig(m) {
    super.setOptions(m);
  }
  flyToViewport(m) {
    const C = this.originData, L = [];
    for (const S of C)
      S.coordinates && S.coordinates.length >= 2 && L.push(new BMapGL.Point(S.coordinates[0], S.coordinates[1]));
    this.map.map.setViewport(L, m);
  }
  show() {
    super.show(), this.webglLayer.render();
  }
  hide() {
    super.hide(), this.webglLayer.render();
  }
}
const r0 = {
  size: 10,
  // 单个点绘制大小
  unit: "px",
  // 单位，m:米，px: 像素
  height: 0,
  // 最大高度，默认为0
  max: 100,
  // 最大阈值
  min: 0,
  // 最小阈值
  minOpacity: 0,
  // 最小阈值透明度
  maxOpacity: 1,
  // 最大阈值透明度
  blend: "normal",
  gradient: {
    // 对应比例渐变色
    0.25: "rgba(89, 233, 179, 1)",
    0.55: "rgba(182, 243, 147, 1)",
    0.85: "rgba(254, 255, 140, 1)",
    0.9: "rgba(217, 29, 28, 1)"
  }
};
class i0 extends je.HeatmapLayer {
  constructor(m) {
    super(Ar(r0, m));
    Ut(this, "originData", []);
  }
  setData(m) {
    this.originData = m;
    const C = wr(m, "Point");
    super.setData(C);
  }
  setConfig(m) {
    super.setOptions(m);
  }
  flyToViewport(m) {
    const C = this.originData, L = [];
    for (const S of C)
      S.coordinates && S.coordinates.length >= 2 && L.push(new BMapGL.Point(S.coordinates[0], S.coordinates[1]));
    this.map.map.setViewport(L, m);
  }
  show() {
    super.show(), this.webglLayer.render();
  }
  hide() {
    super.hide(), this.webglLayer.render();
  }
}
const n0 = {
  style: "grid",
  gridSize: 500,
  gridGap: 5,
  color: "#00f",
  height: 1,
  textOptions: {
    show: !1,
    flat: !0,
    unit: "px",
    fontSize: 12,
    collides: !1
  }
};
class o0 extends je.GridLayer {
  constructor(m) {
    super(Ar(n0, m));
    Ut(this, "originData", []);
  }
  setData(m) {
    this.originData = m;
    const C = wr(m, "Point");
    super.setData(C);
  }
  setConfig(m) {
    super.setOptions(m);
  }
  flyToViewport(m) {
    const C = this.originData, L = [];
    for (const S of C)
      S.coordinates && S.coordinates.length >= 2 && L.push(new BMapGL.Point(S.coordinates[0], S.coordinates[1]));
    this.map.map.setViewport(L, m);
  }
  show() {
    super.show(), this.webglLayer.render();
  }
  hide() {
    super.hide(), this.webglLayer.render();
  }
}
const ge = (
  /**
   * GeoUtils类，静态类，勿需实例化即可使用
   * @class GeoUtils类的<b>入口</b>。
   * 该类提供的都是静态方法，勿需实例化即可使用。
   */
  function() {
  }
), a0 = 637099681e-2;
ge.isPointInRect = function(E, T) {
  if (!(E.toString() === "Point" || E.toString() === "LatLng") || !(T instanceof BMapGL.Bounds))
    return !1;
  const m = T.getSouthWest(), C = T.getNorthEast();
  return E.lng >= m.lng && E.lng <= C.lng && E.lat >= m.lat && E.lat <= C.lat;
};
ge.isPointInCircle = function(E, T) {
  if (!(E.toString() === "Point" || E.toString() === "LatLng") || !(T instanceof BMapGL.Circle))
    return !1;
  const m = T.getCenter(), C = T.getRadius();
  return ge.getDistance(E, m) <= C;
};
ge.isPointOnPolyline = function(E, T) {
  if (!(E.toString() === "Point" || E.toString() === "LatLng") || !(T instanceof BMapGL.Polyline))
    return !1;
  const m = T.getBounds();
  if (!this.isPointInRect(E, m))
    return !1;
  const C = T.getPath();
  for (let L = 0; L < C.length - 1; L++) {
    const S = C[L], N = C[L + 1];
    if (E.lng >= Math.min(S.lng, N.lng) && E.lng <= Math.max(S.lng, N.lng) && E.lat >= Math.min(S.lat, N.lat) && E.lat <= Math.max(S.lat, N.lat)) {
      const Y = (S.lng - E.lng) * (N.lat - E.lat) - (N.lng - E.lng) * (S.lat - E.lat);
      if (Y < 2e-9 && Y > -2e-9)
        return !0;
    }
  }
  return !1;
};
ge.isPointInPolygon = function(E, T) {
  if (!(E.toString() === "Point" || E.toString() === "LatLng") || !(T instanceof BMapGL.Polygon))
    return !1;
  const m = T.getBounds();
  if (!this.isPointInRect(E, m))
    return !1;
  const C = T.getPath(), L = C.length, S = !0;
  let N = 0;
  const Y = 2e-10;
  let H, V;
  const J = E;
  H = C[0];
  for (let rt = 1; rt <= L; ++rt) {
    if (J.equals(H))
      return S;
    if (V = C[rt % L], J.lat < Math.min(H.lat, V.lat) || J.lat > Math.max(H.lat, V.lat)) {
      H = V;
      continue;
    }
    if (J.lat > Math.min(H.lat, V.lat) && J.lat < Math.max(H.lat, V.lat)) {
      if (J.lng <= Math.max(H.lng, V.lng)) {
        if (H.lat == V.lat && J.lng >= Math.min(H.lng, V.lng))
          return S;
        if (H.lng == V.lng) {
          if (H.lng == J.lng)
            return S;
          ++N;
        } else {
          const tt = (J.lat - H.lat) * (V.lng - H.lng) / (V.lat - H.lat) + H.lng;
          if (Math.abs(J.lng - tt) < Y)
            return S;
          J.lng < tt && ++N;
        }
      }
    } else if (J.lat == V.lat && J.lng <= V.lng) {
      const tt = C[(rt + 1) % L];
      J.lat >= Math.min(H.lat, tt.lat) && J.lat <= Math.max(H.lat, tt.lat) ? ++N : N += 2;
    }
    H = V;
  }
  return N % 2 != 0;
};
ge.degreeToRad = function(E) {
  return Math.PI * E / 180;
};
ge.radToDegree = function(E) {
  return 180 * E / Math.PI;
};
function Fl(E, T, m) {
  return T != null && (E = Math.max(E, T)), m != null && (E = Math.min(E, m)), E;
}
function Il(E, T, m) {
  for (; E > m; )
    E -= m - T;
  for (; E < T; )
    E += m - T;
  return E;
}
ge.getDistance = function(E, T) {
  if (!(E.toString() === "Point" || E.toString() === "LatLng" || T.toString() === "Point" || T.toString() === "LatLng"))
    return 0;
  E.lng = Il(E.lng, -180, 180), E.lat = Fl(E.lat, -74, 74), T.lng = Il(T.lng, -180, 180), T.lat = Fl(T.lat, -74, 74);
  let m, C, L, S;
  return m = ge.degreeToRad(E.lng), L = ge.degreeToRad(E.lat), C = ge.degreeToRad(T.lng), S = ge.degreeToRad(T.lat), a0 * Math.acos(Math.sin(L) * Math.sin(S) + Math.cos(L) * Math.cos(S) * Math.cos(C - m));
};
ge.getPolylineDistance = function(E) {
  if (E instanceof BMapGL.Polyline || E instanceof Array) {
    let T;
    if (E instanceof BMapGL.Polyline ? T = E.getPath() : T = E, T.length < 2)
      return 0;
    let m = 0;
    for (let C = 0; C < T.length - 1; C++) {
      const L = T[C], S = T[C + 1], N = ge.getDistance(L, S);
      m += N;
    }
    return m;
  } else
    return 0;
};
ge.getPolygonArea = function(E) {
  if (!(E instanceof BMapGL.Polygon) && !(E instanceof Array))
    return 0;
  let T;
  return E instanceof BMapGL.Polygon ? T = E.getPath() : T = E, T = T.map((m) => [m.lng, m.lat]), s0([T]);
};
function s0(E) {
  var T = 0;
  if (E && E.length > 0) {
    T += Math.abs(kl(E[0]));
    for (var m = 1; E.length > m; m++)
      T -= Math.abs(kl(E[m]));
  }
  return T;
}
var zl = 6378137;
function kl(E) {
  var T, m, C, L, S, N, Y = 0, H = E.length;
  if (H > 2) {
    for (N = 0; H > N; N++)
      N === H - 2 ? (C = H - 2, L = H - 1, S = 0) : N === H - 1 ? (C = H - 1, L = 0, S = 1) : (C = N, L = N + 1, S = N + 2), T = E[C], m = E[L], Y += (ba(E[S][0]) - ba(T[0])) * Math.sin(ba(m[1]));
    Y = Y * zl * zl / 2;
  }
  return Y;
}
function ba(E) {
  return E * Math.PI / 180;
}
ge.isPolylineIntersectArea = function(E, T) {
  const m = function(S, N, Y, H) {
    const V = S.lng, J = S.lat, rt = N.lng, tt = N.lat, st = Y.lng, D = Y.lat, z = H.lng, b = H.lat;
    if (!(Math.min(V, rt) <= Math.max(st, z) && Math.min(D, b) <= Math.max(J, tt) && Math.min(st, z) <= Math.max(V, rt) && Math.min(J, tt) <= Math.max(D, b)))
      return !1;
    let j, k, W, q;
    return j = (st - V) * (tt - J) - (rt - V) * (D - J), k = (z - V) * (tt - J) - (rt - V) * (b - J), W = (V - st) * (b - D) - (z - st) * (J - D), q = (rt - st) * (b - D) - (z - st) * (tt - D), j * k <= 2e-10 && W * q <= 2e-10;
  };
  if (!(E instanceof BMapGL.Polyline && T instanceof BMapGL.Polygon) || (E = E.getPath().map((S) => ({ lng: S.lng, lat: S.lat })), T = T.getPath().map((S) => ({ lng: S.lng, lat: S.lat })), E.length < 1 || T.length <= 2))
    return console.error("参数出错,传入值非折线和多边形"), !1;
  const C = [], L = [];
  for (let S = 0; S < E.length; S++)
    if (ge.isPointInPolygon(E[S], T))
      return !0;
  for (let S = 1; S < E.length; S++)
    C.push([E[S - 1], E[S]]);
  for (let S = 1; S < T.length; S++)
    L.push([T[S - 1], T[S]]);
  L.push([T[T.length - 1], T[0]]);
  for (let S = 0; S < C.length; S++)
    for (let N = 0; N < L.length; N++)
      if (m(C[S][0], C[S][1], L[N][0], L[N][1]))
        return !0;
  return !1;
};
function Me(E) {
  return Array.isArray(E) ? new BMapGL.Point(E[0], E[1]) : E;
}
function pf(E, T) {
  const m = Me(E);
  return new BMapGL.Marker(m, T);
}
function vf(E, T) {
  const m = Me(E);
  let C = null;
  if (T.url) {
    const S = T.size || [];
    C = new BMapGL.Icon(T.url, new BMapGL.Size(S[0], S[1]), T);
  }
  return new BMapGL.Marker(m, {
    ...T,
    icon: C || void 0
  });
}
function gf(E, T, m) {
  const C = Me(E);
  return new BMapGL.Circle(C, T, m);
}
function mf(E, T) {
  const m = E == null ? void 0 : E.map(Me);
  return new BMapGL.Polyline(m, T);
}
function yf(E, T) {
  const m = E == null ? void 0 : E.map(Me);
  return new BMapGL.Polygon(m, T);
}
function es(E, T, m = {}) {
  const C = Me(E), L = typeof T == "function" ? T : () => T;
  return new BMapGL.CustomOverlay(L, {
    point: C,
    ...m
  });
}
var X = X || {};
X.util = {};
X.geometry = {};
function Re(E, T) {
  var m;
  for (m in E)
    if (typeof T[m] > "u")
      return !1;
  for (m in E)
    if (E[m])
      switch (typeof E[m]) {
        case "object":
          if (!Re(E[m], T[m]))
            return !1;
          break;
        case "function":
          if (typeof T[m] > "u" || m != "equals" && E[m].toString() != T[m].toString())
            return !1;
          break;
        default:
          if (E[m] != T[m])
            return !1;
      }
    else if (T[m])
      return !1;
  for (m in T)
    if (typeof E[m] > "u")
      return !1;
  return !0;
}
var ze = function(E, T) {
  this.x = E, this.y = T;
};
X.Point = ze;
X.util.ArrayHelper = function() {
};
var ae = X.util.ArrayHelper;
ae.create2DArray = function(E, T) {
  for (var m = [], C = 0; C < E; C++)
    m[C] = [];
  return m;
};
ae.valueEqual = function(E, T) {
  return !!(E == T || Re(E, T));
};
ae.sortPointsClockwise = function(E) {
  var T = !1;
  E instanceof xn && (E = E.toArray(), T = !0);
  for (var m = null, C = null, L = null, S = null, N, Y = E, H = 0; H < E.length; H++) {
    var V = E[H];
    (m == null || m.y > V.y || m.y == V.y && V.x < m.x) && (m = V), (C == null || C.y < V.y || C.y == V.y && V.x > C.x) && (C = V), (L == null || L.x > V.x || L.x == V.x && V.y > L.y) && (L = V, N = H), (S == null || S.x < V.x || S.x == V.x && V.y < S.y) && (S = V);
  }
  if (N > 0) {
    Y = [];
    for (var J = 0, H = N; H < E.length; H++)
      Y[J++] = E[H];
    for (var H = 0; H < N; H++)
      Y[J++] = E[H];
    E = Y;
  }
  for (var rt = !1, H = 0; H < E.length; H++) {
    var V = E[H];
    if (Re(V, C)) {
      rt = !0;
      break;
    } else if (Re(V, m))
      break;
  }
  if (rt) {
    Y = [], Y[0] = E[0];
    for (var J = 1, H = E.length - 1; H > 0; H--)
      Y[J++] = E[H];
    E = Y;
  }
  return T ? new xn(E) : E;
};
var po = X.util.ArrayHelper;
X.util.ArrayList = function(E) {
  this._array = [], E != null && (this._array = E);
};
var Tr = X.util.ArrayList.prototype;
Tr.add = function(E) {
  this._array.push(E);
};
Tr.get = function(E) {
  return this._array[E];
};
Tr.size = function() {
  return this._array.length;
};
Tr.clear = function() {
  this._array = [];
};
Tr.equals = function(E) {
  if (this._array.length != E.size())
    return !1;
  for (var T = 0; T < this._array.length; T++) {
    var m = this._array[T], C = E.get(T);
    if (!po.valueEqual(m, C))
      return !1;
  }
  return !0;
};
Tr.hashCode = function() {
  return 0;
};
Tr.isEmpty = function() {
  return this._array.length == 0;
};
Tr.toArray = function() {
  return this._array;
};
X.geometry.Clip = function() {
};
X.geometry.Clip.DEBUG = !1;
X.geometry.Clip.GPC_EPSILON = 2220446049250313e-31;
X.geometry.Clip.GPC_VERSION = "2.31";
X.geometry.Clip.LEFT = 0;
X.geometry.Clip.RIGHT = 1;
X.geometry.Clip.ABOVE = 0;
X.geometry.Clip.BELOW = 1;
X.geometry.Clip.CLIP = 0;
X.geometry.Clip.SUBJ = 1;
var Tr = X.geometry.Clip.prototype, ae = X.geometry.Clip;
ae.intersection = function(E, T, m) {
  return (m == null || m == null) && (m = "PolyDefault"), O.clip(fe.GPC_INT, E, T, m);
};
ae.union = function(E, T, m) {
  return (m == null || m == null) && (m = "PolyDefault"), O.clip(fe.GPC_UNION, E, T, m);
};
ae.xor = function(E, T, m) {
  return (m == null || m == null) && (m = "PolyDefault"), O.clip(fe.GPC_XOR, E, T, m);
};
ae.difference = function(E, T, m) {
  return (m == null || m == null) && (m = "PolyDefault"), O.clip(fe.GPC_DIFF, T, E, m);
};
ae.intersection = function(E, T) {
  return O.clip(fe.GPC_INT, E, T, "PolyDefault.class");
};
ae.createNewPoly = function(E) {
  return E == "PolySimple" ? new Pi() : E == "PolyDefault" ? new qa() : E == "PolyDefault.class" ? new qa() : null;
};
ae.clip = function(E, T, m, C) {
  var L = O.createNewPoly(C);
  if (T.isEmpty() && m.isEmpty() || T.isEmpty() && (E == fe.GPC_INT || E == fe.GPC_DIFF) || m.isEmpty() && E == fe.GPC_INT)
    return L;
  (E == fe.GPC_INT || E == fe.GPC_DIFF) && !T.isEmpty() && !m.isEmpty() && O.minimax_test(T, m, E);
  var S = new u0(), N = new l0();
  if (T.isEmpty() || O.build_lmt(S, N, T, O.SUBJ, E), O.DEBUG && S.print(), m.isEmpty() || O.build_lmt(S, N, m, O.CLIP, E), O.DEBUG && S.print(), S.top_node == null)
    return L;
  var Y = N.build_sbt(), H = [];
  H[0] = O.LEFT, H[1] = O.LEFT, E == fe.GPC_DIFF && (H[O.CLIP] = O.RIGHT), O.DEBUG;
  for (var V = S.top_node, J = new h0(), rt = new c0(), tt = 0; tt < Y.length; ) {
    var st = Y[tt++], D = 0, z = 0;
    if (tt < Y.length && (D = Y[tt], z = D - st), V != null && V.y == st) {
      for (var b = V.first_bound; b != null; b = b.next_bound)
        O.add_edge_to_aet(rt, b);
      V = V.next;
    }
    O.DEBUG && rt.print();
    var j = -Number.MAX_VALUE, k = rt.top_node, W = rt.top_node;
    rt.top_node.bundle[O.ABOVE][rt.top_node.type] = rt.top_node.top.y != st ? 1 : 0, rt.top_node.bundle[O.ABOVE][rt.top_node.type == 0 ? 1 : 0] = 0, rt.top_node.bstate[O.ABOVE] = Ie.UNBUNDLED;
    for (var q = rt.top_node.next; q != null; q = q.next) {
      var $ = q.type, nt = q.type == 0 ? 1 : 0;
      q.bundle[O.ABOVE][$] = q.top.y != st ? 1 : 0, q.bundle[O.ABOVE][nt] = 0, q.bstate[O.ABOVE] = Ie.UNBUNDLED, q.bundle[O.ABOVE][$] == 1 && (O.EQ(k.xb, q.xb) && O.EQ(k.dx, q.dx) && k.top.y != st && (q.bundle[O.ABOVE][$] ^= k.bundle[O.ABOVE][$], q.bundle[O.ABOVE][nt] = k.bundle[O.ABOVE][nt], q.bstate[O.ABOVE] = Ie.BUNDLE_HEAD, k.bundle[O.ABOVE][O.CLIP] = 0, k.bundle[O.ABOVE][O.SUBJ] = 0, k.bstate[O.ABOVE] = Ie.BUNDLE_TAIL), k = q);
    }
    var At = [];
    At[O.CLIP] = Se.NH, At[O.SUBJ] = Se.NH;
    var mt = [];
    mt[O.CLIP] = 0, mt[O.SUBJ] = 0;
    for (var gt = null, b = rt.top_node; b != null; b = b.next) {
      if (mt[O.CLIP] = b.bundle[O.ABOVE][O.CLIP] + (b.bundle[O.BELOW][O.CLIP] << 1), mt[O.SUBJ] = b.bundle[O.ABOVE][O.SUBJ] + (b.bundle[O.BELOW][O.SUBJ] << 1), mt[O.CLIP] != 0 || mt[O.SUBJ] != 0) {
        b.bside[O.CLIP] = H[O.CLIP], b.bside[O.SUBJ] = H[O.SUBJ];
        var ht = !1, xt = 0, ot = 0, at = 0, _t = 0;
        if (E == fe.GPC_DIFF || E == fe.GPC_INT ? (ht = mt[O.CLIP] != 0 && (H[O.SUBJ] != 0 || At[O.SUBJ] != 0) || mt[O.SUBJ] != 0 && (H[O.CLIP] != 0 || At[O.CLIP] != 0) || mt[O.CLIP] != 0 && mt[O.SUBJ] != 0 && H[O.CLIP] == H[O.SUBJ], xt = H[O.CLIP] != 0 && H[O.SUBJ] != 0 ? 1 : 0, ot = H[O.CLIP] ^ b.bundle[O.ABOVE][O.CLIP] && H[O.SUBJ] ^ b.bundle[O.ABOVE][O.SUBJ] ? 1 : 0, at = H[O.CLIP] ^ (At[O.CLIP] != Se.NH ? 1 : 0) && H[O.SUBJ] ^ (At[O.SUBJ] != Se.NH ? 1 : 0) ? 1 : 0, _t = H[O.CLIP] ^ (At[O.CLIP] != Se.NH ? 1 : 0) ^ b.bundle[O.BELOW][O.CLIP] && H[O.SUBJ] ^ (At[O.SUBJ] != Se.NH ? 1 : 0) ^ b.bundle[O.BELOW][O.SUBJ] ? 1 : 0) : E == fe.GPC_XOR ? (ht = mt[O.CLIP] != 0 || mt[O.SUBJ] != 0, xt = H[O.CLIP] ^ H[O.SUBJ], ot = H[O.CLIP] ^ b.bundle[O.ABOVE][O.CLIP] ^ (H[O.SUBJ] ^ b.bundle[O.ABOVE][O.SUBJ]), at = H[O.CLIP] ^ (At[O.CLIP] != Se.NH ? 1 : 0) ^ (H[O.SUBJ] ^ (At[O.SUBJ] != Se.NH ? 1 : 0)), _t = H[O.CLIP] ^ (At[O.CLIP] != Se.NH ? 1 : 0) ^ b.bundle[O.BELOW][O.CLIP] ^ (H[O.SUBJ] ^ (At[O.SUBJ] != Se.NH ? 1 : 0) ^ b.bundle[O.BELOW][O.SUBJ])) : E == fe.GPC_UNION && (ht = mt[O.CLIP] != 0 && (H[O.SUBJ] == 0 || At[O.SUBJ] != 0) || mt[O.SUBJ] != 0 && (H[O.CLIP] == 0 || At[O.CLIP] != 0) || mt[O.CLIP] != 0 && mt[O.SUBJ] != 0 && H[O.CLIP] == H[O.SUBJ], xt = H[O.CLIP] != 0 || H[O.SUBJ] != 0 ? 1 : 0, ot = H[O.CLIP] ^ b.bundle[O.ABOVE][O.CLIP] || H[O.SUBJ] ^ b.bundle[O.ABOVE][O.SUBJ] ? 1 : 0, at = H[O.CLIP] ^ (At[O.CLIP] != Se.NH ? 1 : 0) || H[O.SUBJ] ^ (At[O.SUBJ] != Se.NH ? 1 : 0) ? 1 : 0, _t = H[O.CLIP] ^ (At[O.CLIP] != Se.NH ? 1 : 0) ^ b.bundle[O.BELOW][O.CLIP] || H[O.SUBJ] ^ (At[O.SUBJ] != Se.NH ? 1 : 0) ^ b.bundle[O.BELOW][O.SUBJ] ? 1 : 0), H[O.CLIP] ^= b.bundle[O.ABOVE][O.CLIP], H[O.SUBJ] ^= b.bundle[O.ABOVE][O.SUBJ], mt[O.CLIP] != 0 && (At[O.CLIP] = Se.next_h_state[At[O.CLIP]][(mt[O.CLIP] - 1 << 1) + H[O.CLIP]]), mt[O.SUBJ] != 0 && (At[O.SUBJ] = Se.next_h_state[At[O.SUBJ]][(mt[O.SUBJ] - 1 << 1) + H[O.SUBJ]]), ht) {
          var Et = b.xb, Wt = oe.getType(at, _t, xt, ot);
          switch (Wt) {
            case oe.EMN:
            case oe.IMN:
              b.outp[O.ABOVE] = J.add_local_min(Et, st), j = Et, gt = b.outp[O.ABOVE];
              break;
            case oe.ERI:
              Et != j && (gt.add_right(Et, st), j = Et), b.outp[O.ABOVE] = gt, gt = null;
              break;
            case oe.ELI:
              b.outp[O.BELOW].add_left(Et, st), j = Et, gt = b.outp[O.BELOW];
              break;
            case oe.EMX:
              Et != j && (gt.add_left(Et, st), j = Et), J.merge_right(gt, b.outp[O.BELOW]), gt = null;
              break;
            case oe.ILI:
              Et != j && (gt.add_left(Et, st), j = Et), b.outp[O.ABOVE] = gt, gt = null;
              break;
            case oe.IRI:
              b.outp[O.BELOW].add_right(Et, st), j = Et, gt = b.outp[O.BELOW], b.outp[O.BELOW] = null;
              break;
            case oe.IMX:
              Et != j && (gt.add_right(Et, st), j = Et), J.merge_left(gt, b.outp[O.BELOW]), gt = null, b.outp[O.BELOW] = null;
              break;
            case oe.IMM:
              Et != j && (gt.add_right(Et, st), j = Et), J.merge_left(gt, b.outp[O.BELOW]), b.outp[O.BELOW] = null, b.outp[O.ABOVE] = J.add_local_min(Et, st), gt = b.outp[O.ABOVE];
              break;
            case oe.EMM:
              Et != j && (gt.add_left(Et, st), j = Et), J.merge_right(gt, b.outp[O.BELOW]), b.outp[O.BELOW] = null, b.outp[O.ABOVE] = J.add_local_min(Et, st), gt = b.outp[O.ABOVE];
              break;
            case oe.LED:
              b.bot.y == st && b.outp[O.BELOW].add_left(Et, st), b.outp[O.ABOVE] = b.outp[O.BELOW], j = Et;
              break;
            case oe.RED:
              b.bot.y == st && b.outp[O.BELOW].add_right(Et, st), b.outp[O.ABOVE] = b.outp[O.BELOW], j = Et;
              break;
          }
        }
      }
      O.DEBUG && J.print(), J.print();
    }
    for (var b = rt.top_node; b != null; b = b.next)
      if (b.top.y == st) {
        var zt = b.prev, q = b.next;
        zt != null ? zt.next = q : rt.top_node = q, q != null && (q.prev = zt), b.bstate[O.BELOW] == Ie.BUNDLE_HEAD && zt != null && zt.bstate[O.BELOW] == Ie.BUNDLE_TAIL && (zt.outp[O.BELOW] = b.outp[O.BELOW], zt.bstate[O.BELOW] = Ie.UNBUNDLED, zt.prev != null && zt.prev.bstate[O.BELOW] == Ie.BUNDLE_TAIL && (zt.bstate[O.BELOW] = Ie.BUNDLE_HEAD));
      } else
        b.top.y == D ? b.xt = b.top.x : b.xt = b.bot.x + b.dx * (D - b.bot.y);
    if (tt < N.sbt_entries) {
      var Kt = new p0();
      Kt.build_intersection_table(rt, z);
      for (var qt = Kt.top_node; qt != null; qt = qt.next) {
        if (k = qt.ie[0], W = qt.ie[1], (k.bundle[O.ABOVE][O.CLIP] != 0 || k.bundle[O.ABOVE][O.SUBJ] != 0) && (W.bundle[O.ABOVE][O.CLIP] != 0 || W.bundle[O.ABOVE][O.SUBJ] != 0)) {
          var Nt = k.outp[O.ABOVE], $t = W.outp[O.ABOVE], Bt = qt.point.x, Yt = qt.point.y + st, Ht = k.bundle[O.ABOVE][O.CLIP] != 0 && k.bside[O.CLIP] == 0 || W.bundle[O.ABOVE][O.CLIP] != 0 && W.bside[O.CLIP] != 0 || k.bundle[O.ABOVE][O.CLIP] == 0 && W.bundle[O.ABOVE][O.CLIP] == 0 && k.bside[O.CLIP] != 0 && W.bside[O.CLIP] != 0 ? 1 : 0, Xt = k.bundle[O.ABOVE][O.SUBJ] != 0 && k.bside[O.SUBJ] == 0 || W.bundle[O.ABOVE][O.SUBJ] != 0 && W.bside[O.SUBJ] != 0 || k.bundle[O.ABOVE][O.SUBJ] == 0 && W.bundle[O.ABOVE][O.SUBJ] == 0 && k.bside[O.SUBJ] != 0 && W.bside[O.SUBJ] != 0 ? 1 : 0, at = 0, _t = 0, xt = 0, ot = 0;
          E == fe.GPC_DIFF || E == fe.GPC_INT ? (at = Ht != 0 && Xt != 0 ? 1 : 0, _t = Ht ^ W.bundle[O.ABOVE][O.CLIP] && Xt ^ W.bundle[O.ABOVE][O.SUBJ] ? 1 : 0, xt = Ht ^ k.bundle[O.ABOVE][O.CLIP] && Xt ^ k.bundle[O.ABOVE][O.SUBJ] ? 1 : 0, ot = Ht ^ W.bundle[O.ABOVE][O.CLIP] ^ k.bundle[O.ABOVE][O.CLIP] && Xt ^ W.bundle[O.ABOVE][O.SUBJ] ^ k.bundle[O.ABOVE][O.SUBJ] ? 1 : 0) : E == fe.GPC_XOR ? (at = Ht ^ Xt, _t = Ht ^ W.bundle[O.ABOVE][O.CLIP] ^ (Xt ^ W.bundle[O.ABOVE][O.SUBJ]), xt = Ht ^ k.bundle[O.ABOVE][O.CLIP] ^ (Xt ^ k.bundle[O.ABOVE][O.SUBJ]), ot = Ht ^ W.bundle[O.ABOVE][O.CLIP] ^ k.bundle[O.ABOVE][O.CLIP] ^ (Xt ^ W.bundle[O.ABOVE][O.SUBJ] ^ k.bundle[O.ABOVE][O.SUBJ])) : E == fe.GPC_UNION && (at = Ht != 0 || Xt != 0 ? 1 : 0, _t = Ht ^ W.bundle[O.ABOVE][O.CLIP] || Xt ^ W.bundle[O.ABOVE][O.SUBJ] ? 1 : 0, xt = Ht ^ k.bundle[O.ABOVE][O.CLIP] || Xt ^ k.bundle[O.ABOVE][O.SUBJ] ? 1 : 0, ot = Ht ^ W.bundle[O.ABOVE][O.CLIP] ^ k.bundle[O.ABOVE][O.CLIP] || Xt ^ W.bundle[O.ABOVE][O.SUBJ] ^ k.bundle[O.ABOVE][O.SUBJ] ? 1 : 0);
          var Wt = oe.getType(at, _t, xt, ot);
          switch (Wt) {
            case oe.EMN:
              k.outp[O.ABOVE] = J.add_local_min(Bt, Yt), W.outp[O.ABOVE] = k.outp[O.ABOVE];
              break;
            case oe.ERI:
              Nt != null && (Nt.add_right(Bt, Yt), W.outp[O.ABOVE] = Nt, k.outp[O.ABOVE] = null);
              break;
            case oe.ELI:
              $t != null && ($t.add_left(Bt, Yt), k.outp[O.ABOVE] = $t, W.outp[O.ABOVE] = null);
              break;
            case oe.EMX:
              Nt != null && $t != null && (Nt.add_left(Bt, Yt), J.merge_right(Nt, $t), k.outp[O.ABOVE] = null, W.outp[O.ABOVE] = null);
              break;
            case oe.IMN:
              k.outp[O.ABOVE] = J.add_local_min(Bt, Yt), W.outp[O.ABOVE] = k.outp[O.ABOVE];
              break;
            case oe.ILI:
              Nt != null && (Nt.add_left(Bt, Yt), W.outp[O.ABOVE] = Nt, k.outp[O.ABOVE] = null);
              break;
            case oe.IRI:
              $t != null && ($t.add_right(Bt, Yt), k.outp[O.ABOVE] = $t, W.outp[O.ABOVE] = null);
              break;
            case oe.IMX:
              Nt != null && $t != null && (Nt.add_right(Bt, Yt), J.merge_left(Nt, $t), k.outp[O.ABOVE] = null, W.outp[O.ABOVE] = null);
              break;
            case oe.IMM:
              Nt != null && $t != null && (Nt.add_right(Bt, Yt), J.merge_left(Nt, $t), k.outp[O.ABOVE] = J.add_local_min(Bt, Yt), W.outp[O.ABOVE] = k.outp[O.ABOVE]);
              break;
            case oe.EMM:
              Nt != null && $t != null && (Nt.add_left(Bt, Yt), J.merge_right(Nt, $t), k.outp[O.ABOVE] = J.add_local_min(Bt, Yt), W.outp[O.ABOVE] = k.outp[O.ABOVE]);
              break;
          }
        }
        k.bundle[O.ABOVE][O.CLIP] != 0 && (W.bside[O.CLIP] = W.bside[O.CLIP] == 0 ? 1 : 0), W.bundle[O.ABOVE][O.CLIP] != 0 && (k.bside[O.CLIP] = k.bside[O.CLIP] == 0 ? 1 : 0), k.bundle[O.ABOVE][O.SUBJ] != 0 && (W.bside[O.SUBJ] = W.bside[O.SUBJ] == 0 ? 1 : 0), W.bundle[O.ABOVE][O.SUBJ] != 0 && (k.bside[O.SUBJ] = k.bside[O.SUBJ] == 0 ? 1 : 0);
        var zt = k.prev, q = W.next;
        if (q != null && (q.prev = k), k.bstate[O.ABOVE] == Ie.BUNDLE_HEAD)
          for (var Zt = !0; Zt; )
            zt = zt.prev, zt != null ? zt.bstate[O.ABOVE] != Ie.BUNDLE_TAIL && (Zt = !1) : Zt = !1;
        zt == null ? (rt.top_node.prev = W, W.next = rt.top_node, rt.top_node = k.next) : (zt.next.prev = W, W.next = zt.next, zt.next = k.next), k.next.prev = zt, W.next.prev = W, k.next = q, O.DEBUG && J.print();
      }
      for (var b = rt.top_node; b != null; b = b.next) {
        var q = b.next, Ot = b.succ;
        if (b.top.y == D && Ot != null) {
          Ot.outp[O.BELOW] = b.outp[O.ABOVE], Ot.bstate[O.BELOW] = b.bstate[O.ABOVE], Ot.bundle[O.BELOW][O.CLIP] = b.bundle[O.ABOVE][O.CLIP], Ot.bundle[O.BELOW][O.SUBJ] = b.bundle[O.ABOVE][O.SUBJ];
          var zt = b.prev;
          zt != null ? zt.next = Ot : rt.top_node = Ot, q != null && (q.prev = Ot), Ot.prev = zt, Ot.next = q;
        } else
          b.outp[O.BELOW] = b.outp[O.ABOVE], b.bstate[O.BELOW] = b.bstate[O.ABOVE], b.bundle[O.BELOW][O.CLIP] = b.bundle[O.ABOVE][O.CLIP], b.bundle[O.BELOW][O.SUBJ] = b.bundle[O.ABOVE][O.SUBJ], b.xb = b.xt;
        b.outp[O.ABOVE] = null;
      }
    }
  }
  return L = J.getResult(C), L;
};
ae.EQ = function(E, T) {
  return Math.abs(E - T) <= O.GPC_EPSILON;
};
ae.PREV_INDEX = function(E, T) {
  return (E - 1 + T) % T;
};
ae.NEXT_INDEX = function(E, T) {
  return (E + 1) % T;
};
ae.OPTIMAL = function(E, T) {
  return E.getY(O.PREV_INDEX(T, E.getNumPoints())) != E.getY(T) || E.getY(O.NEXT_INDEX(T, E.getNumPoints())) != E.getY(T);
};
ae.create_contour_bboxes = function(E) {
  for (var T = [], m = 0; m < E.getNumInnerPoly(); m++) {
    var C = E.getInnerPoly(m);
    T[m] = C.getBounds();
  }
  return T;
};
ae.minimax_test = function(E, T, m) {
  for (var C = O.create_contour_bboxes(E), L = O.create_contour_bboxes(T), S = E.getNumInnerPoly(), N = T.getNumInnerPoly(), Y = po.create2DArray(S, N), H = 0; H < S; H++)
    for (var V = 0; V < N; V++)
      Y[H][V] = !(C[H].getMaxX() < L[V].getMinX() || C[H].getMinX() > L[V].getMaxX()) && !(C[H].getMaxY() < L[V].getMinY() || C[H].getMinY() > L[V].getMaxY());
  for (var V = 0; V < N; V++) {
    for (var J = !1, H = 0; !J && H < S; H++)
      J = Y[H][V];
    J || T.setContributing(V, !1);
  }
  if (m == fe.GPC_INT)
    for (var H = 0; H < S; H++) {
      for (var J = !1, V = 0; !J && V < N; V++)
        J = Y[H][V];
      J || E.setContributing(H, !1);
    }
};
ae.bound_list = function(E, T) {
  if (E.top_node == null)
    return E.top_node = new Ia(T), E.top_node;
  for (var m = null, C = E.top_node, L = !1; !L; )
    if (T < C.y) {
      var S = C;
      C = new Ia(T), C.next = S, m == null ? E.top_node = C : m.next = C, L = !0;
    } else
      T > C.y ? C.next == null ? (C.next = new Ia(T), C = C.next, L = !0) : (m = C, C = C.next) : L = !0;
  return C;
};
ae.insert_bound = function(E, T) {
  if (E.first_bound == null)
    E.first_bound = T;
  else
    for (var m = !1, C = null, L = E.first_bound; !m; )
      T.bot.x < L.bot.x || T.bot.x == L.bot.x && T.dx < L.dx ? (C == null ? E.first_bound = T : C.next_bound = T, T.next_bound = L, m = !0) : L.next_bound == null ? (L.next_bound = T, m = !0) : (C = L, L = L.next_bound);
};
ae.add_edge_to_aet = function(E, T) {
  if (E.top_node == null)
    E.top_node = T, T.prev = null, T.next = null;
  else
    for (var m = E.top_node, C = null, L = !1; !L; )
      T.xb < m.xb || T.xb == m.xb && T.dx < m.dx ? (T.prev = C, T.next = m, m.prev = T, C == null ? E.top_node = T : C.next = T, L = !0) : (C = m, m.next == null ? (m.next = T, T.prev = m, T.next = null, L = !0) : m = m.next);
};
ae.add_to_sbtree = function(E, T) {
  if (E.sb_tree == null) {
    E.sb_tree = new Fa(T), E.sbt_entries++;
    return;
  }
  for (var m = E.sb_tree, C = !1; !C; )
    m.y > T ? m.less == null ? (m.less = new Fa(T), E.sbt_entries++, C = !0) : m = m.less : m.y < T ? m.more == null ? (m.more = new Fa(T), E.sbt_entries++, C = !0) : m = m.more : C = !0;
};
ae.build_lmt = function(E, T, m, C, L) {
  for (var S = new Nl(), N = 0; N < m.getNumInnerPoly(); N++) {
    var Y = m.getInnerPoly(N);
    if (!Y.isContributing(0))
      Y.setContributing(0, !0);
    else {
      var H = 0, V = 0;
      S = new Nl();
      for (var J = 0; J < Y.getNumPoints(); J++)
        if (O.OPTIMAL(Y, J)) {
          var rt = Y.getX(J), tt = Y.getY(J);
          S.addNode(rt, tt), O.add_to_sbtree(T, Y.getY(J)), H++;
        }
      for (var st = 0; st < H; st++)
        if (S.FWD_MIN(st)) {
          for (var D = 1, z = O.NEXT_INDEX(st, H); S.NOT_FMAX(z); )
            D++, z = O.NEXT_INDEX(z, H);
          var b = st, j = S.getNode(V);
          j.bstate[O.BELOW] = Ie.UNBUNDLED, j.bundle[O.BELOW][O.CLIP] = 0, j.bundle[O.BELOW][O.SUBJ] = 0;
          for (var J = 0; J < D; J++) {
            var k = S.getNode(V + J), W = S.getNode(b);
            k.xb = W.vertex.x, k.bot.x = W.vertex.x, k.bot.y = W.vertex.y, b = O.NEXT_INDEX(b, H), W = S.getNode(b), k.top.x = W.vertex.x, k.top.y = W.vertex.y, k.dx = (W.vertex.x - k.bot.x) / (k.top.y - k.bot.y), k.type = C, k.outp[O.ABOVE] = null, k.outp[O.BELOW] = null, k.next = null, k.prev = null, k.succ = D > 1 && J < D - 1 ? S.getNode(V + J + 1) : null, k.pred = D > 1 && J > 0 ? S.getNode(V + J - 1) : null, k.next_bound = null, k.bside[O.CLIP] = L == fe.GPC_DIFF ? O.RIGHT : O.LEFT, k.bside[O.SUBJ] = O.LEFT;
          }
          O.insert_bound(O.bound_list(E, S.getNode(st).vertex.y), j), O.DEBUG && E.print(), V += D;
        }
      for (var st = 0; st < H; st++)
        if (S.REV_MIN(st)) {
          for (var D = 1, z = O.PREV_INDEX(st, H); S.NOT_RMAX(z); )
            D++, z = O.PREV_INDEX(z, H);
          var b = st, j = S.getNode(V);
          j.bstate[O.BELOW] = Ie.UNBUNDLED, j.bundle[O.BELOW][O.CLIP] = 0, j.bundle[O.BELOW][O.SUBJ] = 0;
          for (var J = 0; J < D; J++) {
            var k = S.getNode(V + J), W = S.getNode(b);
            k.xb = W.vertex.x, k.bot.x = W.vertex.x, k.bot.y = W.vertex.y, b = O.PREV_INDEX(b, H), W = S.getNode(b), k.top.x = W.vertex.x, k.top.y = W.vertex.y, k.dx = (W.vertex.x - k.bot.x) / (k.top.y - k.bot.y), k.type = C, k.outp[O.ABOVE] = null, k.outp[O.BELOW] = null, k.next = null, k.prev = null, k.succ = D > 1 && J < D - 1 ? S.getNode(V + J + 1) : null, k.pred = D > 1 && J > 0 ? S.getNode(V + J - 1) : null, k.next_bound = null, k.bside[O.CLIP] = L == fe.GPC_DIFF ? O.RIGHT : O.LEFT, k.bside[O.SUBJ] = O.LEFT;
          }
          O.insert_bound(O.bound_list(E, S.getNode(st).vertex.y), j), O.DEBUG && E.print(), V += D;
        }
    }
  }
  return S;
};
ae.add_st_edge = function(E, T, m, C) {
  if (E == null)
    E = new Ul(m, null);
  else {
    var L = E.xt - E.xb - (m.xt - m.xb);
    if (m.xt >= E.xt || m.dx == E.dx || Math.abs(L) <= O.GPC_EPSILON) {
      var S = E;
      E = new Ul(m, S);
    } else {
      var N = (m.xb - E.xb) / L, Y = E.xb + N * (E.xt - E.xb), H = N * C;
      T.top_node = O.add_intersection(T.top_node, E.edge, m, Y, H), E.prev = O.add_st_edge(E.prev, T, m, C);
    }
  }
  return E;
};
ae.add_intersection = function(E, T, m, C, L) {
  if (E == null)
    E = new Hl(T, m, C, L, null);
  else if (E.point.y > L) {
    var S = E;
    E = new Hl(T, m, C, L, S);
  } else
    E.next = O.add_intersection(E.next, T, m, C, L);
  return E;
};
X.geometry.AetTree = function() {
  this.top_node = null;
};
X.geometry.AetTree.prototype.print = function() {
  for (var E = this.top_node; E != null; E = E.next)
    ;
};
X.geometry.BundleState = function(E) {
  this.m_State = E;
};
X.geometry.BundleState.UNBUNDLED = new X.geometry.BundleState("UNBUNDLED");
X.geometry.BundleState.BUNDLE_HEAD = new X.geometry.BundleState("BUNDLE_HEAD");
X.geometry.BundleState.BUNDLE_TAIL = new X.geometry.BundleState("BUNDLE_TAIL");
X.geometry.BundleState.prototype.toString = function() {
  return this.m_State;
};
X.geometry.EdgeNode = function() {
  this.vertex = new ze(), this.bot = new ze(), this.top = new ze(), this.xb, this.xt, this.dx, this.type, this.bundle = po.create2DArray(2, 2), this.bside = [], this.bstate = [], this.outp = [], this.prev, this.next, this.pred, this.succ, this.next_bound;
};
X.geometry.EdgeTable = function() {
  this.m_List = new xn();
};
X.geometry.EdgeTable.prototype.addNode = function(E, T) {
  var m = new f0();
  m.vertex.x = E, m.vertex.y = T, this.m_List.add(m);
};
X.geometry.EdgeTable.prototype.getNode = function(E) {
  return this.m_List.get(E);
};
X.geometry.EdgeTable.prototype.FWD_MIN = function(E) {
  var T = this.m_List, m = T.get(O.PREV_INDEX(E, T.size())), C = T.get(O.NEXT_INDEX(E, T.size())), L = T.get(E);
  return m.vertex.y >= L.vertex.y && C.vertex.y > L.vertex.y;
};
X.geometry.EdgeTable.prototype.NOT_FMAX = function(E) {
  var T = this.m_List, m = T.get(O.NEXT_INDEX(E, T.size())), C = T.get(E);
  return m.vertex.y > C.vertex.y;
};
X.geometry.EdgeTable.prototype.REV_MIN = function(E) {
  var T = this.m_List, m = T.get(O.PREV_INDEX(E, T.size())), C = T.get(O.NEXT_INDEX(E, T.size())), L = T.get(E);
  return m.vertex.y > L.vertex.y && C.vertex.y >= L.vertex.y;
};
X.geometry.EdgeTable.prototype.NOT_RMAX = function(E) {
  var T = this.m_List, m = T.get(O.PREV_INDEX(E, T.size())), C = T.get(E);
  return m.vertex.y > C.vertex.y;
};
X.geometry.HState = function() {
};
X.geometry.HState.NH = 0;
X.geometry.HState.BH = 1;
X.geometry.HState.TH = 2;
var hr = X.geometry.HState.NH, oo = X.geometry.HState.BH, ao = X.geometry.HState.TH;
X.geometry.HState.next_h_state = [
  /*        ABOVE     BELOW     CROSS */
  /*        L   R     L   R     L   R */
  /* NH */
  [oo, ao, ao, oo, hr, hr],
  /* BH */
  [hr, hr, hr, hr, ao, ao],
  /* TH */
  [hr, hr, hr, hr, oo, oo]
];
X.geometry.IntersectionPoint = function(E, T, m) {
  this.polygonPoint1 = E, this.polygonPoint2 = T, this.intersectionPoint = m;
};
X.geometry.IntersectionPoint.prototype.toString = function() {
  return "P1 :" + polygonPoint1.toString() + " P2:" + polygonPoint2.toString() + " IP:" + intersectionPoint.toString();
};
X.geometry.ItNode = function(E, T, m, C, L) {
  this.ie = [], this.point = new ze(m, C), this.next = L, this.ie[0] = E, this.ie[1] = T;
};
X.geometry.ItNodeTable = function() {
  this.top_node;
};
X.geometry.ItNodeTable.prototype.build_intersection_table = function(E, T) {
  for (var m = null, C = E.top_node; C != null; C = C.next)
    (C.bstate[O.ABOVE] == Ie.BUNDLE_HEAD || C.bundle[O.ABOVE][O.CLIP] != 0 || C.bundle[O.ABOVE][O.SUBJ] != 0) && (m = O.add_st_edge(m, this, C, T));
};
X.geometry.Line = function() {
  this.start, this.end;
};
X.geometry.LineHelper = function() {
};
X.geometry.LineHelper.equalPoint = function(E, T) {
  return E[0] == T[0] && E[1] == T[1];
};
X.geometry.LineHelper.equalVertex = function(E, T, m, C) {
  return X.geometry.LineHelper.equalPoint(E, m) && X.geometry.LineHelper.equalPoint(T, C) || X.geometry.LineHelper.equalPoint(E, C) && X.geometry.LineHelper.equalPoint(T, m);
};
X.geometry.LineHelper.distancePoints = function(E, T) {
  return Math.sqrt((T[0] - E[0]) * (T[0] - E[0]) + (T[1] - E[1]) * (T[1] - E[1]));
};
X.geometry.LineHelper.clonePoint = function(E) {
  return [E[0], E[1]];
};
X.geometry.LineHelper.cloneLine = function(E) {
  for (var T = [], m = 0; m < E.length; m++)
    T[m] = [E[m][0], E[m][1]];
  return T;
};
X.geometry.LineHelper.addLineToLine = function(E, T) {
  for (var m = 0; m < T.length; m++)
    E.push(clonePoint(T[m]));
};
X.geometry.LineHelper.roundPoint = function(E) {
  E[0] = Math.round(E[0]), E[1] = Math.round(E[1]);
};
X.geometry.LineHelper.lineIntersectLine = function(E, T, m, C, L) {
  L == null && (L = !0);
  var S, N, Y, H, V, J, rt;
  N = T.y - E.y, H = E.x - T.x, J = T.x * E.y - E.x * T.y, Y = C.y - m.y, V = m.x - C.x, rt = C.x * m.y - m.x * C.y;
  var tt = N * V - Y * H;
  return tt == 0 || (S = new ze(), S.x = (H * rt - V * J) / tt, S.y = (Y * J - N * rt) / tt, L && (Math.pow(S.x - T.x + (S.y - T.y), 2) > Math.pow(E.x - T.x + (E.y - T.y), 2) || Math.pow(S.x - E.x + (S.y - E.y), 2) > Math.pow(E.x - T.x + (E.y - T.y), 2) || Math.pow(S.x - C.x + (S.y - C.y), 2) > Math.pow(m.x - C.x + (m.y - C.y), 2) || Math.pow(S.x - m.x + (S.y - m.y), 2) > Math.pow(m.x - C.x + (m.y - C.y), 2))) ? null : new ze(Math.round(S.x), Math.round(S.y));
};
X.geometry.LineIntersection = function() {
};
X.geometry.LineIntersection.iteratePoints = function(E, T, m, C, L) {
  var S = !0, N = E.length, Y = E.indexOf(T), H = E.indexOf(m), V = Y;
  H > Y && (S = !1);
  var J = [], rt;
  if (S)
    for (var tt = 0; tt < N && (rt = tt + V < N ? E[tt + V] : E[tt + V - N], J.push(rt), !(Re(rt, C) || Re(rt, L))); tt++)
      ;
  else
    for (var tt = N; tt >= 0 && (rt = tt + V < N ? E[tt + V] : E[tt + V - N], J.push(rt), !(Re(rt, C) || Re(rt, L))); tt--)
      ;
  return J;
};
X.geometry.LineIntersection.intersectPoly = function(E, T) {
  for (var m = E.getNumPoints(), C, L, S, N, Y, H = null, V = null, J = -1, rt = -1, tt = !1, st = 1; st < T.length; st++) {
    L = T[st - 1], S = T[st];
    for (var D = 0, z = Number.MAX_VALUE, b = -1, j = 0; j < m; j++)
      N = E.getPoint(j == 0 ? m - 1 : j - 1), Y = E.getPoint(j), (C = LineHelper.lineIntersectLine(L, S, N, Y)) != null && (b = ze.distance(C, S), b > D && !tt && (D = b, H = new IntersectionPoint(N, Y, C), J = st), b < z && (z = b, V = new IntersectionPoint(N, Y, C), rt = st - 1));
    tt = H != null;
  }
  if (H != null && V != null) {
    var k = [];
    k[0] = H.intersectionPoint;
    for (var j = 1, st = J; st <= rt; st++)
      k[j++] = T[st];
    if (k[k.length - 1] = V.intersectionPoint, Re(H.polygonPoint1, V.polygonPoint1) && Re(H.polygonPoint2, V.polygonPoint2) || Re(H.polygonPoint1, V.polygonPoint2) && Re(H.polygonPoint2, V.polygonPoint1)) {
      var W = new Pi();
      W.add(k);
      var q = E.intersection(W), $ = E.xor(W);
      if (checkPoly(q) && checkPoly($))
        return [q, $];
    } else {
      var nt = iteratePoints(
        E.getPoints(),
        H.polygonPoint1,
        H.polygonPoint2,
        V.polygonPoint1,
        V.polygonPoint2
      );
      nt = nt.concat(k.reverse());
      var At = iteratePoints(
        E.getPoints(),
        H.polygonPoint2,
        H.polygonPoint1,
        V.polygonPoint1,
        V.polygonPoint2
      );
      At = At.concat(k);
      var W = new Pi();
      W.add(nt);
      var mt = new Pi();
      mt.add(At);
      var q = E.intersection(W), $ = E.intersection(mt);
      if (checkPoly(q) && checkPoly($))
        return [q, $];
    }
  }
  return null;
};
X.geometry.LineIntersection.checkPoly = function(E) {
  for (var T = 0, m = 0; m < E.getNumInnerPoly(); m++) {
    var C = E.getInnerPoly(m);
    if (C.isHole() || (T++, T > 1))
      return !1;
  }
  return !0;
};
X.geometry.LmtNode = function(E) {
  this.y = E, this.first_bound, this.next;
};
X.geometry.LmtTable = function() {
  this.top_node;
};
X.geometry.LmtTable.prototype.print = function() {
  for (var E = this.top_node; E != null; ) {
    for (var T = E.first_bound; T != null; T = T.next_bound)
      ;
    E = E.next;
  }
};
X.geometry.OperationType = function(E) {
  this.m_Type = E;
};
X.geometry.OperationType.GPC_DIFF = new X.geometry.OperationType("Difference");
X.geometry.OperationType.GPC_INT = new X.geometry.OperationType("Intersection");
X.geometry.OperationType.GPC_XOR = new X.geometry.OperationType("Exclusive or");
X.geometry.OperationType.GPC_UNION = new X.geometry.OperationType("Union");
X.geometry.PolyDefault = function(E) {
  E == null && (E = !1), this.m_IsHole = E, this.m_List = new xn();
};
X.geometry.PolyDefault.prototype.equals = function(E) {
  if (!(E instanceof qa))
    return !1;
  var T = E;
  return !(this.m_IsHole != T.m_IsHole || !Re(this.m_List, T.m_List));
};
X.geometry.PolyDefault.prototype.hashCode = function() {
  var E = this.m_List, T = 17;
  return T = 37 * T + E.hashCode(), T;
};
X.geometry.PolyDefault.prototype.clear = function() {
  this.m_List.clear();
};
X.geometry.PolyDefault.prototype.add = function(E, T) {
  var m = [];
  if (m[0] = E, T && (m[1] = T), m.length == 2)
    this.addPointXY(m[0], m[1]);
  else if (m.length == 1) {
    if (m[0] instanceof ze)
      this.addPoint(m[0]);
    else if (m[0] instanceof X.geometry.PolySimple)
      this.addPoly(m[0]);
    else if (m[0] instanceof Array) {
      var C = m[0];
      if (C.length == 2 && C[0] instanceof Number && C[1] instanceof Number)
        this.add(C[0], C[1]);
      else
        for (var L = 0; L < m[0].length; L++)
          this.add(m[0][L]);
    }
  }
};
X.geometry.PolyDefault.prototype.addPointXY = function(E, T) {
  this.addPoint(new ze(E, T));
};
X.geometry.PolyDefault.prototype.addPoint = function(E) {
  var T = this.m_List;
  T.size() == 0 && T.add(new Pi()), T.get(0).addPoint(E);
};
X.geometry.PolyDefault.prototype.addPoly = function(E) {
  var T = this.m_IsHole, m = this.m_List;
  m.size() > 0 && T && alert("ERROR : Cannot add polys to something designated as a hole."), m.add(E);
};
X.geometry.PolyDefault.prototype.isEmpty = function() {
  return this.m_List.isEmpty();
};
X.geometry.PolyDefault.prototype.getBounds = function() {
  var E = this.m_List;
  if (E.size() == 0)
    return new xf();
  if (E.size() == 1) {
    var T = this.getInnerPoly(0);
    return T.getBounds();
  } else
    console.log("getBounds not supported on complex poly.");
};
X.geometry.PolyDefault.prototype.getInnerPoly = function(E) {
  return this.m_List.get(E);
};
X.geometry.PolyDefault.prototype.getNumInnerPoly = function() {
  var E = this.m_List;
  return E.size();
};
X.geometry.PolyDefault.prototype.getNumPoints = function() {
  return this.m_List.get(0).getNumPoints();
};
X.geometry.PolyDefault.prototype.getX = function(E) {
  return this.m_List.get(0).getX(E);
};
X.geometry.PolyDefault.prototype.getPoint = function(E) {
  return this.m_List.get(0).getPoint(E);
};
X.geometry.PolyDefault.prototype.getPoints = function() {
  return this.m_List.get(0).getPoints();
};
X.geometry.PolyDefault.prototype.isPointInside = function(E) {
  var T = this.m_List;
  if (!T.get(0).isPointInside(E))
    return !1;
  for (var m = 0; m < T.size(); m++) {
    var C = T.get(m);
    if (C.isHole() && C.isPointInside(E))
      return !1;
  }
  return !0;
};
X.geometry.PolyDefault.prototype.getY = function(E) {
  var T = this.m_List;
  return T.get(0).getY(E);
};
X.geometry.PolyDefault.prototype.isHole = function() {
  var E = this.m_List, T = this.m_IsHole;
  return E.size() > 1 && alert("Cannot call on a poly made up of more than one poly."), T;
};
X.geometry.PolyDefault.prototype.setIsHole = function(E) {
  var T = this.m_List;
  T.size() > 1 && alert("Cannot call on a poly made up of more than one poly."), this.m_IsHole = E;
};
X.geometry.PolyDefault.prototype.isContributing = function(E) {
  var T = this.m_List;
  return T.get(E).isContributing(0);
};
X.geometry.PolyDefault.prototype.setContributing = function(E, T) {
  var m = this.m_List;
  m.size() != 1 && alert("Only applies to polys of size 1"), m.get(E).setContributing(0, T);
};
X.geometry.PolyDefault.prototype.intersection = function(E) {
  return O.intersection(E, this, "PolyDefault");
};
X.geometry.PolyDefault.prototype.union = function(E) {
  return O.union(E, this, "PolyDefault");
};
X.geometry.PolyDefault.prototype.xor = function(E) {
  return O.xor(E, this, "PolyDefault");
};
X.geometry.PolyDefault.prototype.difference = function(E) {
  return O.difference(E, this, "PolyDefault");
};
X.geometry.PolyDefault.prototype.getArea = function() {
  for (var E = 0, T = 0; T < getNumInnerPoly(); T++) {
    var m = getInnerPoly(T), C = m.getArea() * (m.isHole() ? -1 : 1);
    E += C;
  }
  return E;
};
X.geometry.PolyDefault.prototype.toString = function() {
  for (var E = "", T = this.m_List, m = 0; m < T.size(); m++) {
    var C = this.getInnerPoly(m);
    E += "InnerPoly(" + m + ").hole=" + C.isHole();
    for (var L = [], S = 0; S < C.getNumPoints(); S++)
      L.push(new ze(C.getX(S), C.getY(S)));
    L = po.sortPointsClockwise(L);
    for (var N = 0; N < L.length; N++)
      E += L[N].toString();
  }
  return E;
};
X.geometry.Polygon = function() {
  this.maxTop, this.maxBottom, this.maxLeft, this.maxRight, this.vertices;
};
X.geometry.Polygon.prototype.fromArray = function(E) {
  this.vertices = [];
  for (var T = 0; T < E.length; T++) {
    var m = E[T];
    this.vertices.push(new ze(m[0], m[1]));
  }
};
X.geometry.Polygon.prototype.normalize = function() {
  for (var E, T = this.vertices, m = this.vertices, C = 0; C < T.length; C++) {
    var L = T[C];
    (maxTop == null || maxTop.y > L.y || maxTop.y == L.y && L.x < maxTop.x) && (maxTop = L), (maxBottom == null || maxBottom.y < L.y || maxBottom.y == L.y && L.x > maxBottom.x) && (maxBottom = L), (maxLeft == null || maxLeft.x > L.x || maxLeft.x == L.x && L.y > maxLeft.y) && (maxLeft = L, E = C), (maxRight == null || maxRight.x < L.x || maxRight.x == L.x && L.y < maxRight.y) && (maxRight = L);
  }
  if (E > 0) {
    m = [];
    for (var S = 0, C = E; C < T.length; C++)
      m[S++] = this.vertices[C];
    for (var C = 0; C < E; C++)
      m[S++] = this.vertices[C];
    T = m;
  }
  for (var N = !1, Y = 0; Y < this.vertices.length; Y++) {
    var L = this.vertices[Y];
    if (Re(L, maxBottom)) {
      N = !0;
      break;
    } else if (Re(L, maxTop))
      break;
  }
  if (N) {
    m = [], m[0] = T[0];
    for (var S = 1, C = T.length - 1; C > 0; C--)
      m[S++] = this.vertices[C];
    T = m;
  }
};
X.geometry.Polygon.prototype.getVertexIndex = function(E) {
  for (var T = 0; T < this.vertices.length; T++)
    if (Re(vertices[T], E))
      return T;
  return -1;
};
X.geometry.Polygon.prototype.insertVertex = function(E, T, m) {
  var C = getVertexIndex(E), L = getVertexIndex(T);
  if (C == -1 || L == -1)
    return !1;
  if (L < C) {
    var S = C;
    C = L, L = S;
  }
  if (L == C + 1) {
    for (var N = [], S = 0; S <= C; S++)
      N[S] = this.vertices[S];
    N[L] = m;
    for (var S = L; S < this.vertices.length; S++)
      N[S + 1] = this.vertices[S];
    this.vertices = N;
  } else
    L == vertices.length - 1 && C == 0 && this.vertices.push(m);
  return !0;
};
X.geometry.Polygon.prototype.clone = function() {
  var E = new Polygon();
  return E.vertices = vertices.slice(this.vertices.length - 1), E;
};
X.geometry.Polygon.prototype.toString = function() {
  for (var E = this.vertices, T = "[", m = 0; m < E.length; m++) {
    var C = E[m];
    T += (m > 0 ? "," : "") + "[" + C.x + "," + C.y + "]";
  }
  return T += "]", T;
};
X.geometry.PolygonNode = function(E, T, m) {
  this.active, this.hole, this.v = [], this.next, this.proxy;
  var C = new rs(T, m);
  this.v[O.LEFT] = C, this.v[O.RIGHT] = C, this.next = E, this.proxy = this, this.active = 1;
};
X.geometry.PolygonNode.prototype.add_right = function(E, T) {
  var m = new rs(E, T);
  this.proxy.v[O.RIGHT].next = m, this.proxy.v[O.RIGHT] = m;
};
X.geometry.PolygonNode.prototype.add_left = function(E, T) {
  var m = this.proxy, C = new rs(E, T);
  C.next = m.v[O.LEFT], m.v[O.LEFT] = C;
};
X.geometry.PolySimple = function() {
  this.m_List = new xn(), this.m_Contributes = !0;
};
X.geometry.PolySimple.prototype.equals = function(E) {
  if (!(E instanceof Pi))
    return !1;
  var T = E, m = this.m_List.size(), C = T.m_List.size();
  if (m != C)
    return !1;
  if (m > 0) {
    for (var L = this.getX(0), S = this.getY(0), N = -1, V = 0; N == -1 && V < C; V++) {
      var Y = T.getX(V), H = T.getY(V);
      L == Y && S == H && (N = V);
    }
    if (N == -1)
      return !1;
    for (var V = N, J = 0; J < m; J++) {
      L = this.getX(J), S = this.getY(J);
      var Y = T.getX(V), H = T.getY(V);
      if (L != Y || S != H)
        return !1;
      V++, V >= C && (V = 0);
    }
  }
  return !0;
};
X.geometry.PolySimple.prototype.hashCode = function() {
  var E = 17;
  return E = 37 * E + this.m_List.hashCode(), E;
};
X.geometry.PolySimple.prototype.toString = function() {
  return "PolySimple: num_points=" + getNumPoints();
};
X.geometry.PolySimple.prototype.clear = function() {
  this.m_List.clear();
};
X.geometry.PolySimple.prototype.add = function(E, T) {
  var m = [];
  if (m[0] = E, T && (m[1] = T), m.length == 2)
    this.addPointXY(m[0], m[1]);
  else if (m.length == 1) {
    if (m[0] instanceof ze)
      this.addPoint(m[0]);
    else if (m[0] instanceof Poly)
      this.addPoly(m[0]);
    else if (m[0] instanceof Array)
      for (var C = 0; C < m[0].length; C++) {
        var L = m[0][C];
        this.add(L);
      }
  }
};
X.geometry.PolySimple.prototype.addPointXY = function(E, T) {
  this.addPoint(new ze(E, T));
};
X.geometry.PolySimple.prototype.addPoint = function(E) {
  this.m_List.add(E);
};
X.geometry.PolySimple.prototype.addPoly = function(E) {
  alert("Cannot add poly to a simple poly.");
};
X.geometry.PolySimple.prototype.isEmpty = function() {
  return this.m_List.isEmpty();
};
X.geometry.PolySimple.prototype.getBounds = function() {
  for (var E = Number.MAX_VALUE, T = Number.MAX_VALUE, m = -Number.MAX_VALUE, C = -Number.MAX_VALUE, L = 0; L < this.m_List.size(); L++) {
    var S = this.getX(L), N = this.getY(L);
    S < E && (E = S), S > m && (m = S), N < T && (T = N), N > C && (C = N);
  }
  return new xf(E, T, m - E, C - T);
};
X.geometry.PolySimple.prototype.getInnerPoly = function(E) {
  return E != 0 && alert("PolySimple only has one poly"), this;
};
X.geometry.PolySimple.prototype.getNumInnerPoly = function() {
  return 1;
};
X.geometry.PolySimple.prototype.getNumPoints = function() {
  return this.m_List.size();
};
X.geometry.PolySimple.prototype.getX = function(E) {
  return this.m_List.get(E).x;
};
X.geometry.PolySimple.prototype.getY = function(E) {
  return this.m_List.get(E).y;
};
X.geometry.PolySimple.prototype.getPoint = function(E) {
  return this.m_List.get(E);
};
X.geometry.PolySimple.prototype.getPoints = function() {
  return this.m_List.toArray();
};
X.geometry.PolySimple.prototype.isPointInside = function(E) {
  for (var T = this.getPoints(), m = T.length - 1, C = !1, L = 0; L < T.length; L++)
    (T[L].y < E.y && T[m].y >= E.y || T[m].y < E.y && T[L].y >= E.y) && T[L].x + (E.y - T[L].y) / (T[m].y - T[L].y) * (T[m].x - T[L].x) < E.x && (C = !C), m = L;
  return C;
};
X.geometry.PolySimple.prototype.isHole = function() {
  return !1;
};
X.geometry.PolySimple.prototype.setIsHole = function(E) {
  alert("PolySimple cannot be a hole");
};
X.geometry.PolySimple.prototype.isContributing = function(E) {
  return E != 0 && alert("PolySimple only has one poly"), this.m_Contributes;
};
X.geometry.PolySimple.prototype.setContributing = function(E, T) {
  E != 0 && alert("PolySimple only has one poly"), this.m_Contributes = T;
};
X.geometry.PolySimple.prototype.intersection = function(E) {
  return O.intersection(this, E, "PolySimple");
};
X.geometry.PolySimple.prototype.union = function(E) {
  return O.union(this, E, "PolySimple");
};
X.geometry.PolySimple.prototype.xor = function(E) {
  return O.xor(E, this, "PolySimple");
};
X.geometry.PolySimple.prototype.difference = function(E) {
  return O.difference(E, this, "PolySimple");
};
X.geometry.PolySimple.prototype.getArea = function() {
  if (this.getNumPoints() < 3)
    return 0;
  for (var E = this.getX(0), T = this.getY(0), m = 0, C = 1; C < this.getNumPoints() - 1; C++) {
    var L = this.getX(C), S = this.getY(C), N = this.getX(C + 1), Y = this.getY(C + 1), H = (N - L) * (T - S) - (E - L) * (Y - S);
    m += H;
  }
  return m = 0.5 * Math.abs(m), m;
};
X.geometry.Rectangle = function(E, T, m, C) {
  this.x = E, this.y = T, this.w = m, this.h = C;
};
X.geometry.Rectangle.prototype.getMaxY = function() {
  return this.y + this.h;
};
X.geometry.Rectangle.prototype.getMinY = function() {
  return this.y;
};
X.geometry.Rectangle.prototype.getMaxX = function() {
  return this.x + this.w;
};
X.geometry.Rectangle.prototype.getMinX = function() {
  return this.x;
};
X.geometry.Rectangle.prototype.toString = function() {
  return "[" + x.toString() + " " + y.toString() + " " + w.toString() + " " + h.toString() + "]";
};
X.geometry.ScanBeamTree = function(E) {
  this.y = E, this.less, this.more;
};
X.geometry.ScanBeamTreeEntries = function() {
  this.sbt_entries = 0, this.sb_tree;
};
X.geometry.ScanBeamTreeEntries.prototype.build_sbt = function() {
  var E = [], T = 0;
  return T = this.inner_build_sbt(T, E, this.sb_tree), T != this.sbt_entries, E;
};
X.geometry.ScanBeamTreeEntries.prototype.inner_build_sbt = function(E, T, m) {
  return m.less != null && (E = this.inner_build_sbt(E, T, m.less)), T[E] = m.y, E++, m.more != null && (E = this.inner_build_sbt(E, T, m.more)), E;
};
X.geometry.StNode = function(E, T) {
  this.edge, this.xb, this.xt, this.dx, this.prev, this.edge = E, this.xb = E.xb, this.xt = E.xt, this.dx = E.dx, this.prev = T;
};
X.geometry.TopPolygonNode = function() {
  this.top_node;
};
X.geometry.TopPolygonNode.prototype.add_local_min = function(E, T) {
  var m = this.top_node;
  return this.top_node = new d0(m, E, T), this.top_node;
};
X.geometry.TopPolygonNode.prototype.merge_left = function(E, T) {
  T.proxy.hole = !0;
  var m = this.top_node;
  if (E.proxy != T.proxy) {
    E.proxy.v[O.RIGHT].next = T.proxy.v[O.LEFT], T.proxy.v[O.LEFT] = E.proxy.v[O.LEFT];
    for (var C = E.proxy, L = m; L != null; L = L.next)
      L.proxy == C && (L.active = 0, L.proxy = T.proxy);
  }
};
X.geometry.TopPolygonNode.prototype.merge_right = function(E, T) {
  var m = this.top_node;
  if (T.proxy.hole = !1, E.proxy != T.proxy) {
    T.proxy.v[O.RIGHT].next = E.proxy.v[O.LEFT], T.proxy.v[O.RIGHT] = E.proxy.v[O.RIGHT];
    for (var C = E.proxy, L = m; L != null; L = L.next)
      L.proxy == C && (L.active = 0, L.proxy = T.proxy);
  }
};
X.geometry.TopPolygonNode.prototype.count_contours = function() {
  for (var E = 0, T = this.top_node; T != null; T = T.next)
    if (T.active != 0) {
      for (var m = 0, C = T.proxy.v[O.LEFT]; C != null; C = C.next)
        m++;
      m > 2 ? (T.active = m, E++) : T.active = 0;
    }
  return E;
};
X.geometry.TopPolygonNode.prototype.getResult = function(E) {
  var T = this.top_node, m = O.createNewPoly(E), C = this.count_contours();
  if (C > 0) {
    for (var L = null, S = T; S != null; S = L)
      if (L = S.next, S.active != 0) {
        var N = m;
        C > 1 && (N = O.createNewPoly(E)), S.proxy.hole && N.setIsHole(S.proxy.hole);
        for (var Y = S.proxy.v[O.LEFT]; Y != null; Y = Y.next)
          N.add(Y.x, Y.y);
        C > 1 && m.addPoly(N);
      }
    var H = m;
    m = O.createNewPoly(E);
    for (var V = 0; V < H.getNumInnerPoly(); V++) {
      var J = H.getInnerPoly(V);
      J.isHole() || m.addPoly(J);
    }
    for (var V = 0; V < H.getNumInnerPoly(); V++) {
      var J = H.getInnerPoly(V);
      J.isHole() && m.addPoly(J);
    }
  }
  return m;
};
X.geometry.TopPolygonNode.prototype.print = function() {
  for (var E = this.top_node, T = null, m = E; m != null; m = T)
    if (T = m.next, m.active != 0)
      for (var C = m.proxy.v[O.LEFT]; C != null; C = C.next)
        ;
};
X.geometry.VertexNode = function(E, T) {
  this.x, this.y, this.next, this.x = E, this.y = T, this.next = null;
};
X.geometry.VertexType = function() {
};
X.geometry.VertexType.NUL = 0;
X.geometry.VertexType.EMX = 1;
X.geometry.VertexType.ELI = 2;
X.geometry.VertexType.TED = 3;
X.geometry.VertexType.ERI = 4;
X.geometry.VertexType.RED = 5;
X.geometry.VertexType.IMM = 6;
X.geometry.VertexType.IMN = 7;
X.geometry.VertexType.EMN = 8;
X.geometry.VertexType.EMM = 9;
X.geometry.VertexType.LED = 10;
X.geometry.VertexType.ILI = 11;
X.geometry.VertexType.BED = 12;
X.geometry.VertexType.IRI = 13;
X.geometry.VertexType.IMX = 14;
X.geometry.VertexType.FUL = 15;
X.geometry.VertexType.getType = function(E, T, m, C) {
  return E + (T << 1) + (m << 2) + (C << 3);
};
X.geometry.WeilerAtherton = function() {
};
X.geometry.WeilerAtherton.prototype.merge = function(E, T) {
  E = E.clone(), T = T.clone();
};
var qa = X.geometry.PolyDefault, xn = X.util.ArrayList, Pi = X.geometry.PolySimple, O = X.geometry.Clip, fe = X.geometry.OperationType, u0 = X.geometry.LmtTable, l0 = X.geometry.ScanBeamTreeEntries, Nl = X.geometry.EdgeTable, f0 = X.geometry.EdgeNode, Fa = X.geometry.ScanBeamTree, xf = X.geometry.Rectangle, Ie = X.geometry.BundleState, Ia = X.geometry.LmtNode, h0 = X.geometry.TopPolygonNode, c0 = X.geometry.AetTree, Se = X.geometry.HState, oe = X.geometry.VertexType, rs = X.geometry.VertexNode, d0 = X.geometry.PolygonNode, p0 = X.geometry.ItNodeTable, Ul = X.geometry.StNode, Hl = X.geometry.ItNode, Je = window.BMapGLLib = Je || {}, Ti = "marker", Ei = "polyline", mn = "circle", yn = "rectangle", Mi = "polygon";
Je.initialize = function() {
  Je.GeoUtils = ge;
  var T = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAs1JREFUWAnNmb9v01AQx989SzVI8dIBJNZ27Mb/QRpExMiOKAW1Mw3MRVCB2BlRECF/CBtjuwbBwGJL1JXs474vtuU4Tkho4tyTGr9ffvfxvV93VzL/mfYPLndSumqT4buG6Y4MI3+MpyQayc/IEI/Y0DfLW8Ov725cuKYlf2iZ/p3j8FZylT4hQx1m3lvmXSL6zoYH3pZ9PzgNfi367kKA3R634t/REXF6zMa0Fh28rp8IjJjsqb/det3vUVTXp1z3T8DOs/B+kvIHw3y7/OK180Q/PUuPB2+DL/PGsrMaZQrp3tPwJEn488rhIFQ+GGNDBmTN4qht6D7nm3ESfpRBurNeXGk9Ud/3gkf9N/SnOu6UBvE1jcKBSBQBmXWanAJsH0YvGtNcWV0C6WSX6yQ/McVuQ2DNycFW6ddQkdjz6EF54xQg46MkPMfibYimXozsbn872M2PoGKKcc5tHA7IoiDHkuE7DeKGSOP04rqHcL1Klq8VqMj6dgc3jtMgx+mBFjh8DlhwpSI/BiTaR0FTwn0PHnJWiYnPNcHlLNb4uxYmU16h7Qk26+w5bWQZD9hsZmzqRBRDGJsks4JVMgIwN9M1ArIAykRrRHNMwoY1+EMtoLBhDcID05pGMsWsF1DYLPxWrepzPjWcaq2AYLPw+OFUa4MEE9jG1ox4/NoAEYUAkwNEOAJGohZIsICpAITlinCEFkCw5PEbp0GAIVZixGHZOKRzmoQlSwUgvCjESsSG3eDVJ26nMOQeHRgLQBScP0r0EvmNJJFd9onBIOtxMiH80D4MPzUeXZD4zPAseCjHy8QMTmgQqOiAQI5k+pPoayxlwaMqnOOZJXasSRenOVlfKES0JdM6PGu9qoObC5iDqw1g5oBYtIiVGLK9VRzmbgwZC2NWN0Qus/yc2iTlxmoeIRIXhRBHX5bAXrV9XlmmcH1B9DrBTf0b4i99lUEMOuku/wAAAABJRU5ErkJggg==", m = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAd9JREFUOBGtVc8rRFEUPufOvELMguTHwkbKjxRlo9gqNpjyFyhTit3I8i1ldpQa5S9QmA1lS9koSn6UZmMxSCyGkPlx3O+9mTe8Zl4zw7eZ7rnn++aee893HlMRzEXFeLh6m2LJTpHwEJG022mcIJZTYbXX2lu/txnilJvO7sDkYnJaC0REqNO993PNTHEiDsfWAru/4vmFaYo6e35dEZIwYh1tPhobNmig20/NjcpKe3rJ0vlNmg5PUnR3n7FiTBwZbGpYNk3OIuCccHIhuQoxv49lNljD4yMG6VMUhT49HRynaGvnU9IZ0Wkcia0HlhxBlCkiOxAz5+u4v8tXVMgdvLjNkLnxbosyB1E+4wEeL5PXuLPQTC1NjBpunud6/yhF0e0PVBNv6Qv0KLwmxHBnKLNSgAMuNKClrNbQKniAUnfm9SfggAtAS9l9RtZrehG99tAJFnTP6n6wmzbfGl7EUnsFrrTbDVYqs4q4FtR20kDTVosClxMK3oQQHFAtHK7WUjA6hGAnOKBSgAMuAC2FqYGmhDdhp0oBDrjQgJayRxBbAwHehJ3KBXLBsfM5DC3H/v81HHIdSYQRpMcX6ekRhjcPjr/KGV+6Unt8xXJlOSfMl/lvAzYviN+/fAK+AW5jAVefzjWGAAAAAElFTkSuQmCC", C = "data:image/png;base64,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", L = L || { guid: "$BAIDU$" };
  (function() {
    window[L.guid] = {}, L.extend = function(D, z) {
      for (var b in z)
        z.hasOwnProperty(b) && (D[b] = z[b]);
      return D;
    }, L.lang = L.lang || {}, L.lang.guid = function() {
      return "TANGRAM__" + (window[L.guid]._counter++).toString(36);
    }, window[L.guid]._counter = window[L.guid]._counter || 1, window[L.guid]._instances = window[L.guid]._instances || {}, L.lang.Class = function(D) {
      this.guid = D || L.lang.guid(), window[L.guid]._instances[this.guid] = this;
    }, window[L.guid]._instances = window[L.guid]._instances || {}, L.lang.isString = function(D) {
      return Object.prototype.toString.call(D) == "[object String]";
    }, L.lang.isFunction = function(D) {
      return Object.prototype.toString.call(D) == "[object Function]";
    }, L.lang.Class.prototype.toString = function() {
      return "[object " + (this._className || "Object") + "]";
    }, L.lang.Class.prototype.dispose = function() {
      delete window[L.guid]._instances[this.guid];
      for (var D in this)
        L.lang.isFunction(this[D]) || delete this[D];
      this.disposed = !0;
    }, L.lang.Event = function(D, z) {
      this.type = D, this.returnValue = !0, this.target = z || null, this.currentTarget = null;
    }, L.lang.Class.prototype.addEventListener = function(D, z, b) {
      if (L.lang.isFunction(z)) {
        !this.__listeners && (this.__listeners = {});
        var j = this.__listeners, k;
        if (typeof b == "string" && b) {
          if (/[^\w\-]/.test(b))
            throw "nonstandard key:" + b;
          z.hashCode = b, k = b;
        }
        D.indexOf("on") != 0 && (D = "on" + D), typeof j[D] != "object" && (j[D] = {}), k = k || L.lang.guid(), z.hashCode = k, j[D][k] = z;
      }
    }, L.lang.Class.prototype.removeEventListener = function(D, z) {
      if (L.lang.isFunction(z))
        z = z.hashCode;
      else if (!L.lang.isString(z))
        return;
      !this.__listeners && (this.__listeners = {}), D.indexOf("on") != 0 && (D = "on" + D);
      var b = this.__listeners;
      b[D] && b[D][z] && delete b[D][z];
    }, L.lang.Class.prototype.dispatchEvent = function(D, z) {
      L.lang.isString(D) && (D = new L.lang.Event(D)), !this.__listeners && (this.__listeners = {}), z = z || {};
      for (var b in z)
        D[b] = z[b];
      var b, j = this.__listeners, k = D.type;
      if (k.indexOf("on") != 0 && (k = "on" + k), L.lang.isFunction(this[k]) && this[k].apply(this, arguments), typeof j[k] == "object")
        for (b in j[k])
          j[k][b].apply(this, arguments);
      return D.returnValue;
    }, L.lang.inherits = function(D, z, b) {
      var j, k, W = D.prototype, q = new Function();
      q.prototype = z.prototype, k = D.prototype = new q();
      for (j in W)
        k[j] = W[j];
      D.prototype.constructor = D, D.superClass = z.prototype, typeof b == "string" && (k._className = b);
    }, L.dom = L.dom || {}, L._g = L.dom._g = function(D) {
      return L.lang.isString(D) ? document.getElementById(D) : D;
    }, L.g = L.dom.g = function(D) {
      return typeof D == "string" || D instanceof String ? document.getElementById(D) : D && D.nodeName && (D.nodeType == 1 || D.nodeType == 9) ? D : null;
    }, L.insertHTML = L.dom.insertHTML = function(D, z, b) {
      D = L.dom.g(D);
      var j, k;
      return D.insertAdjacentHTML ? D.insertAdjacentHTML(z, b) : (j = D.ownerDocument.createRange(), z = z.toUpperCase(), z == "AFTERBEGIN" || z == "BEFOREEND" ? (j.selectNodeContents(D), j.collapse(z == "AFTERBEGIN")) : (k = z == "BEFOREBEGIN", j[k ? "setStartBefore" : "setEndAfter"](D), j.collapse(k)), j.insertNode(j.createContextualFragment(b))), D;
    }, L.ac = L.dom.addClass = function(D, z) {
      D = L.dom.g(D);
      for (var b = z.split(/\s+/), j = D.className, k = " " + j + " ", W = 0, q = b.length; W < q; W++)
        k.indexOf(" " + b[W] + " ") < 0 && (j += (j ? " " : "") + b[W]);
      return D.className = j, D;
    }, L.event = L.event || {}, L.event._listeners = L.event._listeners || [], L.on = L.event.on = function(D, z, b) {
      z = z.replace(/^on/i, ""), D = L._g(D);
      var j = function(nt) {
        b.call(D, nt);
      }, k = L.event._listeners, W = L.event._eventFilter, q, $ = z;
      return z = z.toLowerCase(), W && W[z] && (q = W[z](D, z, j), $ = q.type, j = q.listener), D.addEventListener ? D.addEventListener($, j, !1) : D.attachEvent && D.attachEvent("on" + $, j), k[k.length] = [D, z, b, j, $], D;
    }, L.un = L.event.un = function(D, z, b) {
      D = L._g(D), z = z.replace(/^on/i, "").toLowerCase();
      for (var j = L.event._listeners, k = j.length, W = !b, q, $, nt; k--; )
        q = j[k], q[1] === z && q[0] === D && (W || q[2] === b) && ($ = q[4], nt = q[3], D.removeEventListener ? D.removeEventListener($, nt, !1) : D.detachEvent && D.detachEvent("on" + $, nt), j.splice(k, 1));
      return D;
    }, L.getEvent = L.event.getEvent = function(D) {
      return window.event || D;
    }, L.getTarget = L.event.getTarget = function(z) {
      var z = L.getEvent(z);
      return z.target || z.srcElement;
    }, L.preventDefault = L.event.preventDefault = function(z) {
      var z = L.getEvent(z);
      z.preventDefault ? z.preventDefault() : z.returnValue = !1;
    }, L.stopBubble = L.event.stopBubble = function(D) {
      D = L.getEvent(D), D.stopPropagation ? D.stopPropagation() : D.cancelBubble = !0;
    }, L.browser = L.browser || {}, /msie (\d+\.\d)/i.test(navigator.userAgent) && (L.browser.ie = L.ie = document.documentMode || +RegExp.$1);
  })();
  var S = (
    /**
     * DrawingManager类的构造函数
     * @class 鼠标绘制管理类，实现鼠标绘制管理的<b>入口</b>。
     * 实例化该类后，即可调用该类提供的open
     * 方法开启绘制模式状态。
     * 也可加入工具栏进行选择操作。
     *
     * @constructor
     * @param {Map} map Baidu map的实例对象
     * @param {Json Object} opts 可选的输入参数，非必填项。可输入选项包括：<br />
     * {"<b>isOpen</b>" : {Boolean} 是否开启绘制模式
     * <br />"<b>enableDrawingTool</b>" : {Boolean} 是否添加绘制工具栏控件，默认不添加
     * <br />"<b>drawingToolOptions</b>" : {Json Object} 可选的输入参数，非必填项。可输入选项包括
     * <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<b>anchor</b>" : {ControlAnchor} 停靠位置、默认左上角
     * <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<b>offset</b>" : {Size} 偏移值。
     * <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<b>scale</b>" : {Number} 工具栏的缩放比例,默认为1
     * <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<b>drawingModes</b>" : {DrawingType<Array>} 工具栏上可以选择出现的绘制模式,将需要显示的DrawingType以数组型形式传入，如[BMAP_DRAWING_MARKER, BMAP_DRAWING_CIRCLE] 将只显示画点和画圆的选项
     * <br />"<b>enableSorption</b>" : {Boolean} 是否开启边界吸附功能
     * <br />"<b>sorptiondistance</b>" : {Number} 边界吸附距离
     * <br />"<b>enableCalculate</b>" : {Boolean} 绘制是否进行测距(画线时候)、测面(画圆、多边形、矩形)
     * <br />"<b>markerOptions</b>" : {MarkerOptions} 所画的点的可选参数，参考api中的<a href="http://developer.baidu.com/map/reference/index.php?title=Class:%E6%80%BB%E7%B1%BB/%E8%A6%86%E7%9B%96%E7%89%A9%E7%B1%BB">对应类</a>
     * <br />"<b>circleOptions</b>" : {CircleOptions} 所画的圆的可选参数，参考api中的<a href="http://developer.baidu.com/map/reference/index.php?title=Class:%E6%80%BB%E7%B1%BB/%E8%A6%86%E7%9B%96%E7%89%A9%E7%B1%BB">对应类</a>
     * <br />"<b>polylineOptions</b>" : {PolylineOptions} 所画的线的可选参数，参考api中的<a href="http://developer.baidu.com/map/reference/index.php?title=Class:%E6%80%BB%E7%B1%BB/%E8%A6%86%E7%9B%96%E7%89%A9%E7%B1%BB">对应类</a>
     * <br />"<b>polygonOptions</b>" : {PolygonOptions} 所画的多边形的可选参数，参考api中的<a href="http://developer.baidu.com/map/reference/index.php?title=Class:%E6%80%BB%E7%B1%BB/%E8%A6%86%E7%9B%96%E7%89%A9%E7%B1%BB">对应类</a>
     * <br />"<b>rectangleOptions</b>" : {PolygonOptions} 所画的矩形的可选参数，参考api中的<a href="http://developer.baidu.com/map/reference/index.php?title=Class:%E6%80%BB%E7%B1%BB/%E8%A6%86%E7%9B%96%E7%89%A9%E7%B1%BB">对应类</a>
     *
     * @example <b>参考示例：</b><br />
     * var map = new BMap.Map("container");<br />map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);<br />
     * var myDrawingManagerObject = new BMapGLLib.DrawingManager(map, {isOpen: true,
     *     drawingType: BMAP_DRAWING_MARKER, enableDrawingTool: true,
     *     enableCalculate: false,
     *     drawingToolOptions: {
     *         anchor: BMAP_ANCHOR_TOP_LEFT,
     *         offset: new BMap.Size(5, 5),
     *         drawingModes : [
     *             BMAP_DRAWING_MARKER,
     *             BMAP_DRAWING_CIRCLE,
     *             BMAP_DRAWING_POLYLINE,
     *             BMAP_DRAWING_POLYGON,
     *             BMAP_DRAWING_RECTANGLE
     *          ]
     *     },
     *     polylineOptions: {
     *         strokeColor: "#333"
     *     });
     */
    Je.DrawingManager = function(D, z) {
      D && (rt.push(this), z = z || {}, this.overlays = [], this._initialize(D, z));
    }
  );
  L.lang.inherits(S, L.lang.Class, "DrawingManager"), S.prototype.open = function() {
    if (this._isOpen == !0)
      return !0;
    tt(this), this._open();
  }, S.prototype.close = function() {
    if (this._isOpen == !1)
      return !0;
    var D = this;
    this._close(), D._map.removeOverlay(N), setTimeout(function() {
      D._map.enableDoubleClickZoom();
    }, 2e3);
  }, S.prototype.setDrawingMode = function(D) {
    this._drawingType != D && (tt(this), this._setDrawingMode(D));
  }, S.prototype.getDrawingMode = function() {
    return this._drawingType;
  }, S.prototype.enableCalculate = function() {
    this._enableCalculate = !0, this._addGeoUtilsLibrary();
  }, S.prototype.disableCalculate = function() {
    this._enableCalculate = !1;
  }, S.prototype.enableSorption = function() {
    this._enableSorption = !0;
  }, S.prototype.disableSorption = function() {
    this._enableSorption = !1;
  }, S.prototype.enableGpc = function() {
    this._enableGpc = !0, this._addGPCLibrary();
  }, S.prototype.disableGpc = function() {
    this._enableGpc = !1;
  }, S.prototype.getOverlays = function() {
    return this.overlays;
  }, S.prototype.addOverlayData = function(D) {
    return this.overlays.push(D);
  }, S.prototype.setOverlaysData = function(D) {
    return this.overlays = D;
  }, S.prototype.clearOverlayData = function(D) {
    this._map;
    for (var z = 0; z < this.overlays.length; z++)
      if (this.overlays[z] === D)
        return this.overlays.splice(z, 1), D;
  }, S.prototype.clearOverlay = function(b) {
    var z = this._map, b = this.clearOverlayData(b);
    b && z.removeOverlay(b);
  }, S.prototype.clearOverlays = function() {
    var D = this._map;
    this.overlays.forEach(function(z) {
      D.removeOverlay(z);
    }), this.overlays.length = 0;
  }, S.prototype._initialize = function(D, z) {
    if (this._map = D, this._opts = z, this._drawingType = z.drawingMode || Ti, z.enableDrawingTool && this.enableDrawingTool(), z.sorptionDistance !== void 0 && this.setSorptionDistance(z.sorptionDistance), z.enableCalculate === !0 ? this.enableCalculate() : this.disableCalculate(), z.enableLimit === !0) {
      var b = z.limitOptions;
      this.limit = b;
    }
    z.enableSorption === !0 ? this.enableSorption() : this.disableSorption(), z.enableGpc === !0 ? this.enableGpc() : this.disableGpc(), this._isOpen = z.isOpen === !0, this._isOpen && this._open(), this.setPolygonOptions(z.polygonOptions), this.setMarkerOptions(z.markerOptions), this.setCircleOptions(z.circleOptions), this.setPolylineOptions(z.polylineOptions), this.setRectangleOptions(z.rectangleOptions), this.setLabelOptions(z.labelOptions), this.controlButton = z.controlButton == "right" ? "right" : "left", this.skipEditing = z.skipEditing === void 0 ? !1 : z.skipEditing;
  }, S.prototype.enableDrawingTool = function() {
    var D = this._opts;
    if (!this._drawingTool) {
      var z = new J(this, D.drawingToolOptions);
      this._drawingTool = z;
    }
    this._map.addControl(this._drawingTool);
  }, S.prototype.disableDrawingTool = function() {
    this._drawingTool && this._map.removeControl(this._drawingTool);
  }, S.prototype.setSorptionDistance = function(D) {
    this._sorptionDistance = D || 0;
  }, S.prototype.setPolygonOptions = function(D) {
    this.polygonOptions = D || {};
  }, S.prototype.setMarkerOptions = function(D) {
    this.markerOptions = D || {};
  }, S.prototype.setCircleOptions = function(D) {
    this.circleOptions = D || {};
  }, S.prototype.setPolylineOptions = function(D) {
    this.polylineOptions = D || {};
  }, S.prototype.setRectangleOptions = function(D) {
    this.rectangleOptions = D || {};
  }, S.prototype.setLabelOptions = function(D) {
    this.labelOptions = D || {};
  }, S.prototype._open = function() {
    this._isOpen = !0, this.dispatchEvent("overlay_start", this._drawingType), this._mask || (this._mask = new V()), this._map.addOverlay(this._mask), this._setDrawingMode(this._drawingType);
  }, S.prototype._setDrawingMode = function(D) {
    if (this._drawingType = D, this._isOpen)
      switch (this._mask.__listeners = {}, D) {
        case Ti:
          this._bindMarker();
          break;
        case mn:
          this._bindCircle();
          break;
        case Ei:
        case Mi:
          this._bindPolylineOrPolygon();
          break;
        case yn:
          this._bindRectangle();
          break;
      }
    this._drawingTool && this._isOpen && this._drawingTool.setStyleByDrawingMode(D);
  }, S.prototype._close = function() {
    this._isOpen = !1, this._mask && this._map.removeOverlay(this._mask), this._drawingTool && this._drawingTool.setStyleByDrawingMode("hander");
  }, S.prototype._skipEditing = function() {
    var D = this[this._drawingType + "Options"], z = this.skipEditing, b = null;
    D && (b = D.skipEditing === void 0 ? b : D.skipEditing), (b || z) && b !== !1 && document.getElementById("confirmOperate").click();
  };
  var N = null;
  S.prototype._bindMarker = function() {
    var D = this, z = this._map, b = this._mask, j = null, k = function(q) {
      j = new BMapGL.Marker(q.point, D.markerOptions), D.overlays.push(j), z.addOverlay(j), D._dispatchOverlayComplete(j);
    }, W = function(q) {
      z.removeOverlay(N), N = new BMapGL.Label(
        "<span>单击左键确认，右键取消</span><div>" + q.point.lng + ", " + q.point.lat + "</div>",
        {
          position: q.point,
          // 指定文本标注所在的地理位置
          offset: new BMapGL.Size(10, 10)
          // 设置文本偏移量
        }
      ), N.setStyle(D.labelOptions), z.addOverlay(N);
    };
    b.addEventListener("mousemove", W), this.cancelDrawing = function() {
      z.removeOverlay(j), this._dispatchOverlayCancel({ overlay: j }), this.close();
    }, b.addEventListener("click", k), b.addEventListener("mouseup", (q) => {
      q.button === 2 && this.cancelDrawing();
    });
  }, S.prototype._bindCircle = function() {
    var D = this, z = this._map, b = this._mask, j = null, k = [], W = null, q = !1, $ = 1, nt = null, At = null, mt = null, gt = null, ht = {
      strokeColor: "#4E6DF1",
      // 边线颜色。
      strokeWeight: 2
      // 边线的宽度，以像素为单位。
    }, xt = new BMapGL.Icon(T, new BMapGL.Size(20, 20)), ot = new BMapGL.Icon(C, new BMapGL.Size(40, 20), {
      imageOffset: new BMapGL.Size(0, 10)
    });
    this.cancelDrawing = function() {
      z.removeOverlay(j), this._dispatchOverlayCancel({ overlay: j }), this.close();
    }, b.addEventListener("mouseup", (Bt) => {
      Bt.button === 2 && this.cancelDrawing();
    });
    var at = null, _t = function(Bt) {
      D.controlButton == "right" && (Bt.button == 1 || Bt.button == 0) || (W = Bt.point, at = new BMapGL.Marker(W), xt.setImageSize(new BMapGL.Size(20, 20)), at.setIcon(xt), at.enableDragging(), at.addEventListener("dragstart", qt), at.addEventListener("dragging", Nt), at.addEventListener("dragend", $t), z.addOverlay(at), k.push(at), j = new BMapGL.Circle(W, $, D.circleOptions), z.addOverlay(j), b.enableEdgeMove(), b.addEventListener("mousemove", Et), L.on(document, "mouseup", Wt));
    }, Et = function(Bt) {
      $ = D._map.getDistance(W, Bt.point).toFixed(0), $ = $ >= 1 ? $ : 1, j.setRadius($), z.removeOverlay(N), N = new BMapGL.Label("半径：" + $ + "米<br>松开完成绘制", {
        position: Bt.point,
        // 指定文本标注所在的地理位置
        offset: new BMapGL.Size(10, 10)
        // 设置文本偏移量
      }), N.setStyle(D.labelOptions), z.addOverlay(N);
    }, Wt = function(Bt) {
      if (q)
        z.addOverlay(at), k.push(at);
      else {
        var Yt = z.getViewport(j.getBounds());
        Yt.zoom -= 1, z.setViewport(Yt), z.removeOverlay(N);
      }
      var Ht = new BMapGL.Point(j.getBounds().getNorthEast().lng, W.lat);
      b.hide(), nt = new BMapGL.Marker(Ht), nt.setIcon(ot), nt.enableDragging(), At = new BMapGL.Polyline([W, Ht], ht);
      var Xt = new BMapGL.Point(
        (j.getBounds().getNorthEast().lng + W.lng) / 2,
        W.lat
      );
      mt = new H("circle", Xt, $, j, D), k = k.concat([nt, At, mt]);
      var Zt = null;
      D.limit && (Zt = D.limit.area);
      var Ot = {
        limit: Zt,
        type: "circle",
        point: Ht,
        overlay: j,
        overlays: k
      };
      gt = new Y(Ot, D), z.addOverlay(nt), z.addOverlay(At), z.addOverlay(mt), z.addOverlay(gt), D._skipEditing(), mt.addEventListener("radiuschange", function(ie, rr) {
        $ = rr.radius, j.setRadius($);
        var le = st(W, $, "east"), Ne = new BMapGL.Point(le.lng, W.lat), we = le.lng > W.lng ? (j.getBounds().getNorthEast().lng + W.lng) / 2 : (j.getBounds().getSouthWest().lng + W.lng) / 2, cr = new BMapGL.Point(we, W.lat);
        nt.setPosition(Ne), mt.setInfo(cr, $), gt.setPosition(Ne, !0), gt.updateWindow(), At.setPath([W, Ne]);
      }), nt.addEventListener("dragging", function(ie) {
        var rr = new BMapGL.Point(ie.latLng.lng, W.lat), le = ie.latLng.lng > W.lng ? (j.getBounds().getNorthEast().lng + W.lng) / 2 : (j.getBounds().getSouthWest().lng + W.lng) / 2, Ne = ie.latLng.lng > W.lng, we = new BMapGL.Point(le, W.lat);
        $ = D._map.getDistance(W, { lat: W.lat, lng: ie.latLng.lng }).toFixed(0), !($ < 1) && (ie.target.setPosition({ lat: W.lat, lng: rr.lng }), mt.setInfo(we, $), gt.setPosition(rr, Ne), At.setPath([W, rr]), j.setRadius($));
      }), nt.addEventListener("dragend", function(ie) {
        gt.updateWindow();
      }), b.disableEdgeMove(), b.removeEventListener("mousemove", Et), b.removeEventListener("mousemove", zt), L.un(document, "mouseup", Wt), z.removeOverlay(b);
    };
    this.reEditCircle = function(Bt) {
      this._isOpen = !0, j = Bt, q = !0, Wt();
    };
    var zt = function(Bt) {
      L.preventDefault(Bt), L.stopBubble(Bt), !(D.controlButton == "right" && Bt.button == 1 || Bt.button === 2) && W == null && _t(Bt);
    }, Kt = function(Bt) {
      L.preventDefault(Bt), L.stopBubble(Bt), z.removeOverlay(N), N = new BMapGL.Label("按下确认中心点，拖拽确认半径", {
        position: Bt.point,
        // 指定文本标注所在的地理位置
        offset: new BMapGL.Size(10, 10)
        // 设置文本偏移量
      }), N.setStyle(D.labelOptions), z.addOverlay(N);
    }, qt = function(Bt) {
      z.removeOverlay(nt), z.removeOverlay(At), z.removeOverlay(mt), z.removeOverlay(gt);
    }, Nt = function(Bt) {
      W = Bt.latLng, j.setCenter(Bt.latLng);
    }, $t = function(Bt) {
      W = Bt.latLng, Wt();
    };
    b.addEventListener("mousedown", zt), b.addEventListener("mousemove", Kt);
  }, S.prototype._bindPolylineOrPolygon = function() {
    var D = this, z = this._map, b = this._mask, j = [], k = null, W = null, q = null, $ = !1, nt = !1;
    this.cancelDrawing = function() {
      z.removeOverlay(W), this._dispatchOverlayCancel({ overlay: W }), this.close();
    }, b.addEventListener("mouseup", (ot) => {
      ot.button === 2 && this.cancelDrawing();
    });
    function At() {
      for (var ot = arguments[0], at = 0, _t = 0, Et = 0; Et < ot.length; Et++)
        at < ot[Et].lng && (at = ot[Et].lng, _t = Et);
      return ot[_t];
    }
    var mt = function(ot) {
      if (!(D.controlButton === "right" && (ot.button === 1 || ot.button === 0) || ot.button === 2)) {
        var at = ot.point;
        q && (at = q), j.push(at), k = j.concat(j[j.length - 1]), j.length == 1 ? (D._drawingType == Ei ? W = new BMapGL.Polyline(k, D.polylineOptions) : D._drawingType == Mi && (W = new BMapGL.Polygon(k, D.polygonOptions)), z.addOverlay(W)) : W.setPath(k), $ || ($ = !0, b.enableEdgeMove(), b.removeEventListener("mousemove", xt), b.addEventListener("mousemove", gt), b.addEventListener("dblclick", ht));
      }
    }, gt = function(ot) {
      var at = ot.point;
      if (D._enableSorption) {
        var _t = D.getSorptionMatch(at, D.overlays, D._sorptionDistance);
        if (_t && _t.length > 0) {
          q = _t[0].point, W.setPositionAt(k.length - 1, _t[0].point);
          return;
        }
      }
      q = null, W.setPositionAt(k.length - 1, ot.point), z.removeOverlay(N), N = new BMapGL.Label("左键单击继续绘制，双击完成绘制", {
        position: ot.point,
        // 指定文本标注所在的地理位置
        offset: new BMapGL.Size(10, 10)
        // 设置文本偏移量
      }), N.setStyle(D.labelOptions), z.addOverlay(N);
    }, ht = function(ot) {
      if (!nt) {
        L.stopBubble(ot), $ = !1, z.removeOverlay(N), b.disableEdgeMove(), b.removeEventListener("mousedown", mt), b.removeEventListener("mousemove", gt), b.removeEventListener("mousemove", xt), b.removeEventListener("dblclick", ht), D.controlButton == "right" ? j.push(ot.point) : L.ie <= 8 || j.pop();
        try {
          if (D._enableGpc && X && D._drawingType === "polygon") {
            for (var at = new X.geometry.PolyDefault(), _t = 0; _t < j.length; _t++)
              at.addPoint(new X.Point(j[_t].lng, j[_t].lat));
            for (var Et = 0; Et < D.overlays.length; Et++) {
              for (var Wt = D.overlays[Et].getPath(), zt = new X.geometry.PolyDefault(), _t = 0; _t < Wt.length; _t++)
                zt.addPoint(new X.Point(Wt[_t].lng, Wt[_t].lat));
              for (var Kt = at.difference(zt), qt = Kt.getPoints(), Nt = [], _t = 0; _t < qt.length; _t++)
                Nt.push(new BMapGL.Point(qt[_t].x, qt[_t].y));
              at = new X.geometry.PolyDefault();
              for (var _t = 0; _t < qt.length; _t++)
                at.addPoint(new X.Point(qt[_t].x, qt[_t].y));
              j = Nt;
            }
          }
        } catch {
        }
        W.setPath(j);
        var $t = z.getViewport(j);
        $t.zoom -= 1, z.setViewport($t);
      }
      W.enableEditing();
      var Bt = null;
      D.limit && (Bt = D._drawingType === "polygon" ? D.limit.area : D.limit.distance);
      var Yt = {
        limit: Bt,
        type: D._drawingType,
        point: At(j),
        overlay: W,
        overlays: []
      }, Ht = new Y(Yt, D);
      z.addOverlay(Ht), D._skipEditing(), W.addEventListener("lineupdate", function(Xt) {
        var Zt = At(Xt.currentTarget.getPath());
        Ht.setPosition(Zt, !0), Ht.updateWindow();
      }), j.length = 0, k.length = 0, z.removeOverlay(b);
    };
    this.reEditPolygon = function(ot) {
      this._isOpen = !0, nt = !0, j = ot.getPath(), W = ot, ht();
    };
    var xt = function(ot) {
      L.preventDefault(ot), L.stopBubble(ot), z.removeOverlay(N), N = new BMapGL.Label("左键确认起点，右键取消绘制", {
        position: ot.point,
        // 指定文本标注所在的地理位置
        offset: new BMapGL.Size(10, 10)
        // 设置文本偏移量
      }), N.setStyle(D.labelOptions), z.addOverlay(N);
    };
    b.addEventListener("mousemove", xt), b.addEventListener("mousedown", mt), b.addEventListener("dblclick", function(ot) {
      L.stopBubble(ot);
    });
  }, S.prototype._bindRectangle = function() {
    var D = this, z = this._map, b = this._mask, j = null, k = null, W = !1;
    this.cancelDrawing = function() {
      z.removeOverlay(j), this._dispatchOverlayCancel({ overlay: j }), this.close();
    }, b.addEventListener("mouseup", (ht) => {
      ht.button === 2 && this.cancelDrawing();
    });
    function q(ht, xt) {
      var ot = new BMapGL.Point(ht.lng, ht.lat), at = new BMapGL.Point(xt.lng, ht.lat), _t = new BMapGL.Point(xt.lng, xt.lat), Et = new BMapGL.Point(ht.lng, xt.lat), Wt = new BMapGL.Point((ht.lng + xt.lng) / 2, ht.lat), zt = new BMapGL.Point(xt.lng, (ht.lat + xt.lat) / 2), Kt = new BMapGL.Point((ht.lng + xt.lng) / 2, xt.lat), qt = new BMapGL.Point(ht.lng, (ht.lat + xt.lat) / 2);
      return [ot, Wt, at, zt, _t, Kt, Et, qt];
    }
    var $ = new BMapGL.Icon(m, new BMapGL.Size(10, 10));
    $.setImageSize(new BMapGL.Size(10, 10));
    var nt = function(ht) {
      if (L.stopBubble(ht), L.preventDefault(ht), !(D.controlButton == "right" && (ht.button == 1 || ht.button == 0) || ht.button === 2)) {
        k = ht.point;
        var xt = k;
        j = new BMapGL.Polygon(D._getRectanglePoint(k, xt), D.rectangleOptions), z.addOverlay(j), b.enableEdgeMove(), b.addEventListener("mousemove", At), L.on(document, "mouseup", mt);
      }
    }, At = function(ht) {
      z.removeOverlay(N), j.setPath(D._getRectanglePoint(k, ht.point));
      var xt = q(k, ht.point), ot = D._map.getDistance(k, xt[2]).toFixed(0), at = D._map.getDistance(k, xt[6]).toFixed(0);
      N = new BMapGL.Label("尺寸：" + ot + "米 x " + at + "米<br>松开结束绘制", {
        position: ht.point,
        // 指定文本标注所在的地理位置
        offset: new BMapGL.Size(10, 10)
        // 设置文本偏移量
      }), N.setStyle(D.labelOptions), z.addOverlay(N);
    }, mt = function(ht) {
      b.hide();
      var xt = null, ot = [], at = q(k, ht.point), _t = [];
      if (!W) {
        var Et = z.getViewport(at);
        Et.zoom -= 1, z.setViewport(Et), z.removeOverlay(N);
      }
      for (var Wt = D._map.getDistance(k, at[2]).toFixed(0), zt = D._map.getDistance(k, at[6]).toFixed(0), Kt = new H(
        "rectangle",
        at[0],
        {
          width: Wt,
          height: zt
        },
        j,
        D
      ), qt = 0; qt < at.length; qt++) {
        var Nt = new BMapGL.Marker(at[qt]);
        Nt.setIcon($), Nt.enableDragging(), ot.push(Nt), z.addOverlay(Nt), _t[qt] = D.mc2ll(Nt.point), Nt.addEventListener("mousedown", function(Xt) {
          xt = D.mc2ll(Xt.target.point);
        }), Nt.addEventListener("dragging", function(Xt) {
          for (var Zt = Xt.latLng, Ot = 0; Ot < _t.length; Ot++)
            xt.lng == _t[Ot].lng && (at[Ot].lng = Zt.lng), xt.lat == _t[Ot].lat && (at[Ot].lat = Zt.lat);
          at = q(at[0], at[4]);
          for (var Ot = 0; Ot < ot.length; Ot++)
            ot[Ot].setPosition(at[Ot]);
          Wt = D._map.getDistance(at[0], at[2]).toFixed(0), zt = D._map.getDistance(at[0], at[6]).toFixed(0), Kt.setInfo(at[0], {
            width: Wt,
            height: zt
          }), Ht.setPosition(at[3], !0), j.setPath(at);
        }), Nt.addEventListener("dragend", function(Xt) {
          for (var Zt = 0; Zt < ot.length; Zt++) {
            var Ot = ot[Zt];
            _t[Zt] = D.mc2ll(Ot.point);
          }
          Ht.updateWindow();
        });
      }
      Kt.addEventListener("rectwhchange", function(Xt, Zt) {
        var Ot = Zt.width, ie = Zt.height, rr = st(at[0], Ot, "east"), le = st(at[0], ie, "south");
        at[4].lng = rr.lng, at[4].lat = le.lat, at = q(at[0], at[4]);
        for (var Ne = 0; Ne < ot.length; Ne++)
          ot[Ne].setPosition(at[Ne]);
        Kt.setInfo(at[0], {
          width: Ot,
          height: ie
        }), Ht.setPosition(at[3], !0), j.setPath(at);
        for (var we = 0; we < ot.length; we++) {
          var cr = ot[we];
          _t[we] = D.mc2ll(cr.point);
        }
        Ht.updateWindow();
      });
      var $t = [ot, Kt], Bt = null;
      D.limit && (Bt = D.limit.area);
      var Yt = {
        limit: Bt,
        type: "rectangle",
        point: at[3],
        overlay: j,
        overlays: $t
      }, Ht = new Y(Yt, D);
      z.addOverlay(Ht), z.addOverlay(Kt), b.disableEdgeMove(), b.removeEventListener("mousemove", At), b.removeEventListener("mousemove", gt), D._skipEditing(), L.un(document, "mouseup", mt), z.removeOverlay(b);
    };
    this.reEditRectangle = function(ht) {
      this._isOpen = !0, W = !0, j = ht;
      var xt = ht.getBounds();
      mt({ point: { lng: xt.ne.lng, lat: xt.sw.lat } });
    };
    var gt = function(ht) {
      L.preventDefault(ht), L.stopBubble(ht), z.removeOverlay(N), N = new BMapGL.Label("按住确认起点，拖拽进行绘制", {
        position: ht.point,
        // 指定文本标注所在的地理位置
        offset: new BMapGL.Size(10, 10)
        // 设置文本偏移量
      }), N.setStyle(D.labelOptions), z.addOverlay(N);
    };
    b.addEventListener("mousedown", nt), b.addEventListener("mousemove", gt);
  }, S.prototype._calculate = function(D, z) {
    var b = {
      data: 0,
      // 计算出来的长度或面积
      label: null
      // 显示长度或面积的label对象
    };
    if (this._enableCalculate && Je.GeoUtils) {
      var j = D.toString();
      switch (j) {
        case "Polyline":
          b.data = Je.GeoUtils.getPolylineDistance(D);
          break;
        case "Polygon":
          b.data = Je.GeoUtils.getPolygonArea(D);
          break;
        case "Circle":
          var k = D.getRadius();
          b.data = Math.PI * k * k;
          break;
      }
      !b.data || b.data < 0 ? b.data = 0 : b.data = b.data.toFixed(2);
    }
    return b;
  }, S.prototype._addGeoUtilsLibrary = function() {
    Je.GeoUtils || (Je.GeoUtils = ge);
  }, S.prototype._addGPCLibrary = function() {
  }, S.prototype._addLabel = function(D, z) {
    var b = new BMapGL.Label(z, {
      position: D
    });
    return this._map.addOverlay(b), b;
  }, S.prototype._getRectanglePoint = function(D, z) {
    return [
      new BMapGL.Point(D.lng, D.lat),
      new BMapGL.Point(z.lng, D.lat),
      new BMapGL.Point(z.lng, z.lat),
      new BMapGL.Point(D.lng, z.lat)
    ];
  }, S.prototype._dispatchOverlayComplete = function(D, z) {
    var b = {
      overlay: D,
      drawingMode: this._drawingType
    };
    z && (b.calculate = z.data || null, b.label = z.label || null), this.dispatchEvent(this._drawingType + "complete", D), this.dispatchEvent("overlaycomplete", b);
  }, S.prototype._dispatchOverlayCancel = function(D) {
    var z = {
      overlay: D,
      drawingMode: this._drawingType
    };
    this.dispatchEvent(this._drawingType + "cancel", D), this.dispatchEvent("overlaycancel", z);
  }, S.prototype.getSorptionMatch = function(D, z, b) {
    b = b || 20;
    for (var j = this._map, k = j.pointToPixel(D), W = [], q = 0; q < z.length; q++) {
      var $ = z[q].getPath(), nt = $[0], At = $[$.length - 1];
      nt.equals(At) || $.push($[0]);
      for (var mt = 1; mt < $.length; mt++) {
        var gt = j.pointToPixel($[mt - 1]), ht = j.pointToPixel($[mt]), xt = [k.x - gt.x, k.y - gt.y], ot = [ht.x - gt.x, ht.y - gt.y], at = [ht.x - k.x, ht.y - k.y], _t = xt[0] * ot[0] + xt[1] * ot[1], Et = Math.sqrt(Math.pow(xt[0], 2) + Math.pow(xt[1], 2)) * Math.sqrt(Math.pow(ot[0], 2) + Math.pow(ot[1], 2)), Wt = Math.acos(_t / Et), zt = ot[0] * at[0] + ot[1] * at[1], Kt = Math.sqrt(Math.pow(ot[0], 2) + Math.pow(ot[1], 2)) * Math.sqrt(Math.pow(at[0], 2) + Math.pow(at[1], 2)), qt = Math.acos(zt / Kt);
        if (Wt < Math.PI / 2 && qt < Math.PI / 2) {
          var Nt = Math.sqrt(Math.pow(xt[0], 2) + Math.pow(xt[1], 2)), $t = Math.sqrt(Math.pow(ot[0], 2) + Math.pow(ot[1], 2)), Bt = Math.cos(Wt) * Nt, Yt = Bt / $t, Ht = Math.sin(Wt) * Nt, Xt = [gt.x + ot[0] * Yt, gt.y + ot[1] * Yt];
          Ht < b && W.push({
            point: j.pixelToPoint({
              x: Xt[0],
              y: Xt[1]
            }),
            length: Ht
          });
        }
      }
    }
    W.sort(function(Ot, ie) {
      return Ot.length - ie.length;
    });
    var Zt = W.length > 0 ? W : null;
    return Zt;
  }, S.prototype.mc2ll = function(D) {
    var z = this._map, b = z.mercatorToLnglat(D.lng, D.lat);
    return new BMapGL.Point(b[0], b[1]);
  }, S.prototype.ll2mc = function(D) {
    var z = this._map, b = z.lnglatToMercator(D.lng, D.lat);
    return new BMapGL.Point(b[0], b[1]);
  };
  function Y(D, z) {
    this.limit = D.limit, this.type = D.type, this.point = D.point, this.overlay = D.overlay, this.overlays = D.overlays, this.DrawingManager = z;
  }
  Je.Operate = Y, Y.prototype = new BMapGL.Overlay(), Y.prototype.dispatchEvent = L.lang.Class.prototype.dispatchEvent, Y.prototype.addEventListener = L.lang.Class.prototype.addEventListener, Y.prototype.removeEventListener = L.lang.Class.prototype.removeEventListener, Y.prototype.initialize = function(D) {
    this._map = D;
    var z = this.type === "polyline" ? "长度" : "面积", b = this.type === "polyline" ? "万米" : "万平方米", j = this.div = document.createElement("div");
    j.className = "operateWindow";
    var k = function(q) {
      return '<div><span id="confirmOperate" onclick="event.stopPropagation();"></span><span id="cancelOperate" onclick="event.stopPropagation();"></span><span id="warnOperate">' + q + "！</span></div>";
    }, W = k(z + "不超过" + this.limit / 1e4 + b);
    return j.innerHTML = W, this._map.getPanes().markerPane.appendChild(j), this.updateWindow(), this._bind(), j;
  }, Y.prototype._bind = function() {
    var D = this, z = this._map, b = this.overlay;
    b.operateOption = {
      limit: this.limit,
      type: this.type,
      point: this.point,
      overlay: this.overlay,
      overlays: this.overlays
    };
    var j = this.overlays;
    document.getElementById("confirmOperate").addEventListener("click", function(k) {
      z.removeOverlay(D);
      var W = null;
      D.type == "rectangle" ? W = D.DrawingManager._calculate(b, b.getPath()) : D.type == "circle" ? W = D.DrawingManager._calculate(b, D.point) : (D.type == "polygon" || D.type == "polyline") && (W = D.DrawingManager._calculate(b, b.getPath()), b.disableEditing()), D.DrawingManager.overlays.push(b), D.DrawingManager._dispatchOverlayComplete(b, W);
      for (var q = 0; q < j.length; q++)
        if (Array.isArray(j[q]))
          for (var $ in j[q])
            z.removeOverlay(j[q][$]);
        else
          z.removeOverlay(j[q]);
      D.DrawingManager.close();
    }), document.getElementById("cancelOperate").addEventListener("click", function(k) {
      z.removeOverlay(D);
      for (var W = 0; W < j.length; W++)
        if (Array.isArray(j[W]))
          for (var q in j[W])
            z.removeOverlay(j[W][q]);
        else
          z.removeOverlay(j[W]);
      z.removeOverlay(b), D.DrawingManager._dispatchOverlayCancel(b), D.DrawingManager.close();
    });
  }, Y.prototype.updateWindow = function() {
    if (this.domElement !== null) {
      var D = this.overlay, z = this.limit, b;
      this.type == "rectangle" ? b = this.DrawingManager._calculate(D, D.getPath()) : this.type == "circle" ? b = this.DrawingManager._calculate(D, this.point) : this.type == "polygon" ? b = this.DrawingManager._calculate(D, D.getPath()) : this.type == "polyline" && (b = this.DrawingManager._calculate(D, D.getPath())), z > 0 && b.data > z ? (document.getElementById("confirmOperate").style.display = "none", document.getElementById("warnOperate").style.display = "block") : (document.getElementById("confirmOperate").style.display = "block", document.getElementById("warnOperate").style.display = "none");
    }
  }, Y.prototype.setPosition = function(D, z) {
    this.point = D;
    var b = this._map, j = b.pointToOverlayPixel(this.point);
    z ? (this.div.classList.remove("operateLeft"), this.div.style.left = j.x + 15 + "px") : (this.div.classList.add("operateLeft"), this.div.style.left = j.x - 150 + "px"), this.div.style.top = j.y - 16 + "px";
  }, Y.prototype.draw = function() {
    var D = this._map, z = D.pointToOverlayPixel(this.point);
    this.div.style.left = z.x + 15 + "px", this.div.style.top = z.y - 16 + "px";
  };
  function H(D, z, b, j, k) {
    this.type = D, this.point = z, this.number = b, this.overlay = j, this.DrawingManager = k;
  }
  H.prototype = new BMapGL.Overlay(), H.prototype.dispatchEvent = L.lang.Class.prototype.dispatchEvent, H.prototype.addEventListener = L.lang.Class.prototype.addEventListener, H.prototype.removeEventListener = L.lang.Class.prototype.removeEventListener, H.prototype.initialize = function(D) {
    this._map = D;
    var z = this.div = document.createElement("div");
    if (z.className = "screenshot", z.addEventListener("dblclick", (j) => {
      j.stopPropagation();
    }), this.type == "circle")
      var b = '<div class="circlShot" ><span id="screenshotNum">' + this.number + '</span><input id="circleInput" type="number" min="1" step="1" /><span class="unit">米</span></div>';
    else if (this.type == "rectangle")
      var b = '<div class="rectWH"><div class="wh"><span id="rectWidth">' + this.number.width + '</span><input id="rectWidthInput" type="number" min="1" step="1" /></div><span class="multiple">x</span><div class="wh"><span id="rectHeight">' + this.number.height + '</span><input id="rectHeightInput" type="number" min="1" step="1" /></div><span class="unit">米</span></div>';
    return z.innerHTML = b, this._map.getPanes().markerPane.appendChild(z), this._bind(), z;
  }, H.prototype._bind = function() {
    this.setNumber(this.number), this.type == "circle" ? this.bindCircleEvent() : this.bindRectEvent();
  }, H.prototype.bindCircleEvent = function() {
    var D = this, z = document.getElementById("screenshotNum"), b = document.getElementById("circleInput");
    z.addEventListener("click", function(j) {
      var k = z.innerText;
      z.style.display = "none", b.value = k, b.style.display = "inline-block", b.focus();
    }), b.addEventListener("click", function(j) {
      b.focus();
    }), b.addEventListener("keydown", function(j) {
      if (j.keyCode === 13) {
        var k = b.value;
        b.style.display = "none", z.style.display = "inline-block", z.innerText = k;
        var W = {
          radius: k,
          overlay: D.overlay
        };
        D._dispatchRadiusChange(W);
      }
    }), b.addEventListener("blur", function(j) {
      var k = b.value;
      b.style.display = "none", z.style.display = "inline-block", z.innerText = k;
      var W = {
        radius: k,
        overlay: D.overlay
      };
      D._dispatchRadiusChange(W);
    });
  }, H.prototype.bindRectEvent = function() {
    var D = this, z = document.getElementById("rectWidth"), b = document.getElementById("rectWidthInput"), j = document.getElementById("rectHeight"), k = document.getElementById("rectHeightInput");
    b.value = z.innerText, k.value = j.innerText, z.addEventListener("click", function($) {
      var nt = z.innerText;
      z.style.display = "none", b.value = nt, b.style.display = "inline-block", b.focus();
    }), j.addEventListener("click", function($) {
      var nt = j.innerText;
      j.style.display = "none", k.value = nt, k.style.display = "inline-block", k.focus();
    }), b.addEventListener("click", function($) {
      b.focus();
    }), k.addEventListener("click", function($) {
      k.focus();
    });
    function W() {
      var $ = b.value, nt = k.value;
      b.style.display = "none", k.style.display = "none", z.style.display = "inline-block", j.style.display = "inline-block", z.innerText = $, j.innerText = nt;
      var At = {
        width: $,
        height: nt,
        overlay: D.overlay
      };
      D._dispatchRectWHChange(At);
    }
    b.addEventListener("keydown", function($) {
      $.keyCode === 13 && W();
    }), b.addEventListener("blur", W);
    function q() {
      var $ = b.value, nt = k.value;
      b.style.display = "none", k.style.display = "none", z.style.display = "inline-block", j.style.display = "inline-block", z.innerText = $, j.innerText = nt;
      var At = {
        width: $,
        height: nt,
        overlay: D.overlay
      };
      D._dispatchRectWHChange(At);
    }
    k.addEventListener("keydown", function($) {
      $.keyCode === 13 && q();
    }), k.addEventListener("blur", q);
  }, H.prototype.setInfo = function(D, z) {
    this.setNumber(z), this.setPosition(D);
  }, H.prototype.setNumber = function(D) {
    this.type == "circle" ? document.getElementById("screenshotNum").textContent = D : (document.getElementById("rectWidth").textContent = D.width, document.getElementById("rectHeight").textContent = D.height);
  }, H.prototype.setPosition = function(D) {
    this.point = D;
    var z = this._map, b = this.type, j = z.pointToOverlayPixel(this.point);
    b == "circle" ? (this.div.style.left = j.x - 30 + "px", this.div.style.top = j.y - 40 + "px") : b == "rectangle" && (this.div.style.left = j.x + "px", this.div.style.top = j.y - 45 + "px");
  }, H.prototype.draw = function() {
    var D = this._map, z = this.type, b = D.pointToOverlayPixel(this.point);
    z == "circle" ? (this.div.style.left = b.x - 30 + "px", this.div.style.top = b.y - 40 + "px") : z == "rectangle" && (this.div.style.left = b.x + "px", this.div.style.top = b.y - 45 + "px");
  }, H.prototype._dispatchRadiusChange = function(D) {
    this.dispatchEvent("radiuschange", D);
  }, H.prototype._dispatchRectWHChange = function(D) {
    this.dispatchEvent("rectwhchange", D);
  };
  function V() {
    this._enableEdgeMove = !1;
  }
  V.prototype = new BMapGL.Overlay(), V.prototype.dispatchEvent = L.lang.Class.prototype.dispatchEvent, V.prototype.addEventListener = L.lang.Class.prototype.addEventListener, V.prototype.removeEventListener = L.lang.Class.prototype.removeEventListener, V.prototype.initialize = function(D) {
    var z = this;
    this._map = D;
    var b = this.container = document.createElement("div"), j = this._map.getSize();
    return b.style.cssText = "position:absolute;background:transparent;cursor:crosshair;width:" + j.width + "px;height:" + j.height + "px", this._map.addEventListener("resize", function(k) {
      z._adjustSize(k.size);
    }), this._map.getPanes().floatPane.appendChild(b), this._bind(), b;
  }, V.prototype.draw = function() {
    var D = this._map, z = D.pixelToPoint(new BMapGL.Pixel(0, 0)), b = D.pointToOverlayPixel(z);
    this.container.style.left = b.x + "px", this.container.style.top = b.y + "px";
  }, V.prototype.enableEdgeMove = function() {
    this._enableEdgeMove = !0;
  }, V.prototype.disableEdgeMove = function() {
    clearInterval(this._edgeMoveTimer), this._enableEdgeMove = !1;
  }, V.prototype._bind = function() {
    var D = this;
    this._map;
    for (var z = this.container, b = null, j = null, k = function(nt) {
      return {
        x: nt.clientX,
        y: nt.clientY
      };
    }, W = function(nt) {
      var At = nt.type;
      nt = L.getEvent(nt);
      var mt = D.getDrawPoint(nt), gt = function(xt) {
        nt.point = mt, D.dispatchEvent(nt);
      };
      At == "mousedown" && (b = k(nt));
      var ht = k(nt);
      At == "click" ? Math.abs(ht.x - b.x) < 5 && Math.abs(ht.y - b.y) < 5 && (!j || !(Math.abs(ht.x - j.x) < 5 && Math.abs(ht.y - j.y) < 5) ? (gt(), j = k(nt)) : j = null) : gt();
    }, q = ["click", "mousedown", "mousemove", "mouseup", "dblclick"], $ = q.length; $--; )
      L.on(z, q[$], W);
    L.on(z, "mousemove", function(nt) {
      D._enableEdgeMove && D.mousemoveAction(nt);
    });
  }, V.prototype.mousemoveAction = function(D) {
    function z(nt) {
      var At = nt.clientX, mt = nt.clientY;
      return nt.changedTouches && (At = nt.changedTouches[0].clientX, mt = nt.changedTouches[0].clientY), new BMapGL.Pixel(At, mt);
    }
    var b = this._map, j = this, k = b.pointToPixel(this.getDrawPoint(D)), W = z(D), q = W.x - k.x, $ = W.y - k.y;
    k = new BMapGL.Pixel(W.x - q, W.y - $), this._draggingMovePixel = k, b.pixelToPoint(k), this._panByX = this._panByY = 0, k.x <= 20 || k.x >= b.width - 20 || k.y <= 50 || k.y >= b.height - 10 ? (k.x <= 20 ? this._panByX = 8 : k.x >= b.width - 20 && (this._panByX = -8), k.y <= 50 ? this._panByY = 8 : k.y >= b.height - 10 && (this._panByY = -8), this._edgeMoveTimer || (this._edgeMoveTimer = setInterval(function() {
      b.panBy(j._panByX, j._panByY, {
        noAnimation: !0
      });
    }, 30))) : this._edgeMoveTimer && (clearInterval(this._edgeMoveTimer), this._edgeMoveTimer = null);
  }, V.prototype._adjustSize = function(D) {
    this.container.style.width = D.width + "px", this.container.style.height = D.height + "px";
  }, V.prototype.getDrawPoint = function(D) {
    var z = this._map, b = L.getTarget(D), j = D.offsetX || D.layerX || 0, k = D.offsetY || D.layerY || 0;
    for (b.nodeType != 1 && (b = b.parentNode); b && b != z.getContainer(); )
      b.clientWidth == 0 && b.clientHeight == 0 && b.offsetParent && b.offsetParent.nodeName == "TD" || (j += b.offsetLeft || 0, k += b.offsetTop || 0), b = b.offsetParent;
    var W = new BMapGL.Pixel(j, k), q = z.pixelToPoint(W);
    return q;
  };
  function J(D, z) {
    this.drawingManager = D, z = this.drawingToolOptions = z || {}, this._opts = {}, this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT, this.defaultOffset = new BMapGL.Size(10, 10), this.defaultDrawingModes = [
      Ti,
      mn,
      Ei,
      Mi,
      yn
    ], z.drawingModes ? this.drawingModes = z.drawingModes : this.drawingModes = this.defaultDrawingModes, z.anchor && this.setAnchor(z.anchor);
    const b = z.offset;
    b && this.setOffset(Array.isArray(b) ? new BMapGL.Size(b[0], b[1]) : b);
  }
  J.prototype = new BMapGL.Control(), J.prototype.initialize = function(D) {
    var z = this.container = document.createElement("div");
    z.className = "BMapGLLib_Drawing";
    var b = this.panel = document.createElement("div");
    b.className = "BMapGLLib_Drawing_panel", this.drawingToolOptions && this.drawingToolOptions.scale && this._setScale(this.drawingToolOptions.scale), z.appendChild(b);
    var j = this._generalHtml();
    b.appendChild(j);
    var k = this.tip = document.createElement("div");
    return k.className = "BMapGLLib_tip", k.innerHTML = '<p class="BMapGLLib_tip_title"></p><p class="BMapGLLib_tip_text"></p>', this.drawingToolOptions.enableTips === !0 && b.appendChild(k), this._bind(b), this.drawingToolOptions.customContainer ? L.g(this.drawingToolOptions.customContainer).appendChild(z) : D.getContainer().appendChild(z), z;
  }, J.prototype._generalHtml = function(D) {
    var z = this, b = {};
    b.hander = "拖动地图", b[Ti] = "画点", b[mn] = "圆形工具", b[Ei] = "画折线", b[Mi] = "多边形工具", b[yn] = "矩形工具";
    for (var j = function(nt, At) {
      var mt = document.createElement("a");
      return mt.className = nt, mt.href = "javascript:void(0)", mt.setAttribute("drawingType", At), mt.setAttribute("onfocus", "this.blur()"), mt.addEventListener("mouseenter", function(gt) {
        var ht = gt.target.getAttribute("drawingType"), xt = b[ht];
        ht === "hander" ? (z.tip.children[0].innerText = xt, z.tip.children[1].innerText = "使用鼠标拖动地图") : (z.tip.className += " " + ht, z.tip.children[0].innerText = xt, z.tip.children[1].innerText = "使用" + xt + "选出目标区域"), z.tip.style.display = "block";
      }), mt.addEventListener("mouseleave", function(gt) {
        for (var ht = gt.target.getAttribute("drawingType"), xt = " " + z.tip.className.replace(/[\t\r\n]/g, "") + " "; xt.indexOf(" " + ht + " ") >= 0; )
          xt = xt.replace(" " + ht + " ", " ");
        z.tip.className = xt.replace(/^\s+|\s+$/g, ""), z.tip.style.display = "none";
      }), mt;
    }, k = document.createDocumentFragment(), W = 0, q = this.drawingModes.length; W < q; W++) {
      var $ = "BMapGLLib_box BMapGLLib_" + this.drawingModes[W];
      W == q - 1 && ($ += " BMapGLLib_last"), k.appendChild(j($, this.drawingModes[W]));
    }
    return k;
  }, J.prototype._setScale = function(D) {
    var z = 390, b = 50, j = -parseInt((z - z * D) / 2, 10), k = -parseInt((b - b * D) / 2, 10);
    this.container.style.cssText = [
      "-moz-transform: scale(" + D + ");",
      "-o-transform: scale(" + D + ");",
      "-webkit-transform: scale(" + D + ");",
      "transform: scale(" + D + ");",
      "margin-left:" + j + "px;",
      "margin-top:" + k + "px;",
      "*margin-left:0px;",
      // ie6、7
      "*margin-top:0px;",
      // ie6、7
      "margin-left:0px\\0;",
      // ie8
      "margin-top:0px\\0;",
      // ie8
      // ie下使用滤镜
      "filter: progid:DXImageTransform.Microsoft.Matrix(",
      "M11=" + D + ",",
      "M12=0,",
      "M21=0,",
      "M22=" + D + ",",
      "SizingMethod='auto expand');"
    ].join("");
  }, J.prototype._bind = function(D) {
    var z = this;
    L.on(this.panel, "click", function(b) {
      var j = L.getTarget(b), k = j.getAttribute("drawingType");
      z.setStyleByDrawingMode(k), z._bindEventByDraingMode(k);
    });
  }, J.prototype.setStyleByDrawingMode = function(D) {
    if (D)
      for (var z = this.panel.getElementsByTagName("a"), b = 0, j = z.length; b < j; b++) {
        var k = z[b];
        if (k.getAttribute("drawingType") == D) {
          var W = "BMapGLLib_box BMapGLLib_" + D + "_hover";
          b == j - 1 && (W += " BMapGLLib_last"), k.className = W;
        } else
          k.className = k.className.replace(/_hover/, "");
      }
  }, J.prototype._bindEventByDraingMode = function(D) {
    var z = this.drawingManager;
    z._isOpen && z.getDrawingMode() === D ? (z.close(), z._map.enableDoubleClickZoom()) : (z.setDrawingMode(D), z.open(), z._map.disableDoubleClickZoom());
  };
  var rt = [];
  function tt(D) {
    for (var z = rt.length; z--; )
      rt[z] != D && rt[z].close();
  }
  function st(D, z, b) {
    var j = D.lng, k = D.lat, W = z / 6378800, q = Math.PI / 180 * k, $ = Math.PI / 180 * j, nt, At, mt;
    switch (b) {
      case "North":
      case "north":
      case "N":
      case "n":
        nt = 0, At = D.lng;
        break;
      case "West":
      case "west":
      case "W":
      case "w":
        nt = 90, mt = D.lat;
        break;
      case "South":
      case "south":
      case "S":
      case "s":
        nt = 180, At = D.lng;
        break;
      case "East":
      case "east":
      case "E":
      case "e":
        nt = 270, mt = D.lat;
        break;
      default:
        nt = ~~b;
        break;
    }
    var gt = Math.PI / 180 * nt, ht = Math.asin(Math.sin(q) * Math.cos(W) + Math.cos(q) * Math.sin(W) * Math.cos(gt)), xt = Math.atan2(Math.sin(gt) * Math.sin(W) * Math.cos(q), Math.cos(W) - Math.sin(q) * Math.sin(ht)), ot = ($ - xt + Math.PI) % (2 * Math.PI) - Math.PI, at = new BMapGL.Point(At || ot * (180 / Math.PI), mt || ht * (180 / Math.PI));
    return at.lng = parseFloat(at.lng.toFixed(6)), at.lat = parseFloat(at.lat.toFixed(6)), at;
  }
};
const so = {
  strokeColor: "#2468F2",
  // 边线颜色。
  fillColor: "#2468F2",
  // 填充颜色。当参数为空时，圆形将没有填充效果。
  strokeWeight: 2,
  // 边线的宽度，以像素为单位。
  strokeOpacity: 1,
  // 边线透明度，取值范围0 - 1。
  fillOpacity: 0.3
  // 填充的透明度，取值范围0 - 1。
}, v0 = {
  borderRadius: "4px",
  background: "rgba(7,12,20,0.85)",
  boxShadow: "0 2px 8px 0 rgba(7,12,20,0.12)",
  color: "#ffffff",
  fontSize: "14px",
  fonstFamily: "PingFangSC-Regular",
  padding: "10px"
}, Ee = {
  marker: Ti,
  polyline: Ei,
  rectangle: yn,
  polygon: Mi,
  circle: mn
};
class g0 {
  constructor(T, m = {}) {
    Ut(this, "drawer");
    Ut(this, "drawMode", "");
    Ut(this, "enableEdit", !1);
    // 是否启用二次编辑
    Ut(this, "isEditing", !1);
    // 是否正在编辑
    Ut(this, "map");
    Ut(this, "circleCenterMarker");
    Ut(this, "overlays", []);
    // 存储已绘制的ovelay
    Ut(this, "currLayer");
    // 当前hover的overlay
    Ut(this, "editorBtn");
    Ut(this, "editorBtnDiv");
    this.map = T, this.enableEdit = m.enableEdit !== !1, Je.initialize(), this.drawer = new Je.DrawingManager(
      this.map,
      Object.assign(
        {},
        {
          // isOpen: true, //是否开启绘制模式
          enableDrawingTool: !1,
          // 是否显示工具栏
          drawingToolOptions: {
            anchor: BMAP_ANCHOR_TOP_RIGHT,
            scale: 0.75,
            offset: new BMapGL.Size(15, 5),
            drawingModes: [
              Ti,
              mn,
              Ei,
              Mi,
              yn
            ]
          },
          enableCalculate: !0,
          // 绘制是否进行测距(画线时候)、测面(画圆、多边形、矩形)
          enableSorption: !0,
          // 是否开启边界吸附功能
          sorptionDistance: 20,
          // 边界吸附距离
          enableGpc: !1,
          // 是否开启延边裁剪功能
          enableLimit: !1,
          // 是否开启超限提示
          // limitOptions: {
          //     area: 5000e4, // 面积超限值
          //     distance: 30000,
          // },
          circleOptions: so,
          // 圆的样式
          polylineOptions: so,
          // 线的样式
          polygonOptions: so,
          // 多边形的样式
          rectangleOptions: so,
          // 矩形的样式
          labelOptions: v0
          // label的样式
        },
        m
      )
    ), this.editorBtn = es([116.387112, 39.920977], this.createEditBtn()), this.initEventListener();
  }
  initEventListener() {
    this.drawer.addEventListener("overlaycomplete", (T, m) => {
      if (m.clearSelf = () => {
        this.drawer.clearOverlay(m.overlay), m.drawingMode === Ee.circle && this.circleCenterMarker && this.map.removeOverlay(this.circleCenterMarker);
      }, m.drawingMode === Ee.marker) {
        this.overlays.push(m), this.onOverlayChange(this.overlays.slice(), this.map), this.drawMode = "", this.close();
        return;
      }
      const C = this.overlays.findIndex((S) => S.overlay === m.overlay);
      C > -1 ? this.overlays[C] = m : this.overlays.push(m);
      const L = m0(m);
      m.center = L, m.drawingMode === Ee.polyline || m.drawingMode === Ee.polygon ? this.setEditorOffset([0, 0]) : this.setEditorOffset([0, 0]), m.overlay.addEventListener("mouseover", (S) => {
        this.enableEdit && (this.isOpen() || this.isEditing || (this.onOverlayHover(!0, m), this.setEditorPos([S.latLng.lng, S.latLng.lat]), this.currLayer = m, this.overlays.forEach((N) => {
          N !== m && this.setOverlayColor(0, N);
        }), this.setOverlayColor(1, m)));
      }), m.overlay.addEventListener("mouseout", (S) => {
        this.onOverlayHover(!1, m), !this.isEditing && (this.setEditorPos(null), this.setOverlayColor(0, m));
      }), this.onOverlayChange(this.overlays.slice(), this.map), this.drawMode = "", this.currLayer = null, this.isEditing = !1, m.overlay.setFillColor("#2468F2"), this.onComplete(m);
    }), this.drawer.addEventListener("overlaycancel", (T, m) => {
      this.onCancel(m), this.onDrawing(!1, m), this.isEditing = !1;
      const C = this.overlays.findIndex((L) => L.overlay === m.overlay);
      C > -1 && (this.overlays.splice(C, 1), this.onOverlayChange(this.overlays.slice(), this.map)), this.drawMode = "", this.currLayer = null;
    }), this.drawer.addEventListener("overlay_start", (T, m) => {
      this.onStart(m);
    });
  }
  onStart(T) {
  }
  onCancel(T) {
  }
  onComplete(T) {
  }
  // 创建二次编辑按钮
  createEditBtn() {
    const T = document.createElement("div");
    return T.style.cssText = `
            position: relative;
            padding: 3px;
            background: #fff;
            border: 1px solid #2468f2;
            cursor: pointer;
            white-space: nowrap;
            font-size: 12px;`, T.innerText = "编辑", T.addEventListener("click", (m) => {
      console.log(m), this.reEdit();
    }), this.editorBtnDiv = T, T;
  }
  // 进入二次编辑
  reEdit() {
    if (!this.currLayer)
      return;
    this.isEditing = !0, this.setEditorPos(null);
    const T = this.currLayer;
    this.drawMode = "", T.drawingMode === Ee.rectangle ? this.drawer.reEditRectangle(T.overlay) : T.drawingMode === Ee.circle && this.circleCenterMarker ? (this.map.removeOverlay(this.circleCenterMarker), this.drawer.reEditCircle(T.overlay)) : (T.drawingMode === Ee.polygon || T.drawingMode === Ee.polyline) && this.drawer.reEditPolygon(T.overlay);
  }
  // 设置二次编辑按钮偏移量
  setEditorOffset(T) {
    this.editorBtnDiv && (this.editorBtnDiv.style.left = String(T[0]) + "px", this.editorBtnDiv.style.right = String(T[1]) + "px");
  }
  // 设置二次编辑按钮位置
  setEditorPos(T) {
    this.map.removeOverlay(this.editorBtn), T && (this.map.addOverlay(this.editorBtn), this.editorBtn.setPoint(Me(T)));
  }
  // 正在绘制回调
  onDrawing(T, m) {
  }
  // hover回调
  onOverlayHover(T, m) {
  }
  // overlay变化
  onOverlayChange(T, m) {
  }
  // 是否开启绘制
  isOpen() {
    return this.drawer._isOpen;
  }
  // 关闭绘制
  close() {
    this.drawer.close();
  }
  // 绘制过程中取消
  cancel() {
    this.isOpen() && this.drawer.cancelDrawing();
  }
  // 设置overlay颜色,type为0普通状态，为1激活状态
  setOverlayColor(T, m) {
    T === 1 ? m.drawingMode === Ee.polyline ? m.overlay.setStrokeColor("#ffa000") : m.overlay.setFillColor("#fff000") : T === 0 && (m.drawingMode === Ee.polyline ? m.overlay.setStrokeColor("#2468F2") : m.overlay.setFillColor("#2468F2"));
  }
  draw(T) {
    var C, L, S;
    const m = this.drawer;
    if (!(T in Ee)) {
      (C = document.getElementById("cancelOperate")) == null || C.click(), this.close(), this.drawMode = "";
      return;
    }
    if (this.isEditing && (this.isEditing = !1, (L = document.getElementById("cancelOperate")) == null || L.click(), this.close()), this.isOpen() && (m.cancelDrawing(), (S = document.getElementById("cancelOperate")) == null || S.click(), this.close(), m.getDrawingMode() === T)) {
      this.drawMode = "";
      return;
    }
    this.drawMode = T, m.setDrawingMode(T), m.open();
  }
  drawMarker() {
    this.draw(Ee.marker);
  }
  drawPolyline() {
    this.draw(Ee.polyline);
  }
  drawPolygon() {
    this.draw(Ee.polygon);
  }
  drawCircle() {
    this.draw(Ee.circle);
  }
  drawRectangle() {
    this.draw(Ee.rectangle);
  }
  // 清空覆盖物
  clear() {
    this.overlays.forEach((T) => {
      T == null || T.clearSelf();
    }), this.overlays = [];
  }
}
function m0(E) {
  if (E.drawingMode === "circle") {
    const T = E.overlay.getCenter();
    return [T.lng, T.lat];
  } else if (E.drawingMode === "rectangle" || E.drawingMode === "polygon") {
    const T = E.overlay.getBounds();
    return [(T.ne.lng + T.sw.lng) / 2, (T.ne.lat + T.sw.lat) / 2];
  }
  return [];
}
function y0(E, T) {
  T && (T.cityList && T.cityList.show !== !1 && x0(E, T.cityList), T.navigation && T.navigation.show !== !1 && _0(E, T.navigation), T.zoom && T.zoom.show !== !1 && A0(E, T.zoom));
}
function x0(E, { offset: T = [0, 0], anchor: m = BMAP_ANCHOR_TOP_LEFT }) {
  const C = new BMapGL.CityListControl({
    anchor: m,
    offset: new BMapGL.Size(T[0], T[1])
  });
  E.addControl(C);
}
function _0(E, { anchor: T = BMAP_ANCHOR_BOTTOM_RIGHT, offset: m = [0, 0] }) {
  E.addControl(
    new BMapGL.NavigationControl3D({
      anchor: T,
      offset: new BMapGL.Size(m[0], m[1])
    })
  );
}
function A0(E, { anchor: T = BMAP_ANCHOR_BOTTOM_RIGHT, offset: m = [0, 0] }) {
  E.addControl(
    new BMapGL.ZoomControl({
      anchor: T,
      offset: new BMapGL.Size(m[0], m[1])
    })
  );
}
class _f {
  // 是否可以在覆盖物位置拖拽地图
  constructor(T, m, C) {
    Ut(this, "_point");
    Ut(this, "_content");
    Ut(this, "_map");
    Ut(this, "container");
    Ut(this, "style");
    Ut(this, "enableMassClear", !1);
    // 是否能被统一清除掉覆盖物
    Ut(this, "enableDraggingMap", !1);
    this._point = Me(T), this._content = m, this.style = C;
    const L = new BMapGL.Overlay(), S = Object.getPrototypeOf(L), N = Object.getPrototypeOf(this);
    Object.setPrototypeOf(N, S);
  }
  initialize(T) {
    this._map = T;
    const m = T.getPanes().labelPane;
    if (!m)
      throw new Error("地图容器还未就绪");
    const C = document.createElement("div");
    return C.style.position = "absolute", typeof this.style == "object" && Object.keys(this.style).forEach((L) => {
      C.style[L] = this.style[L];
    }), this.container = C, typeof this._content == "string" ? C.innerText = this._content : this._content instanceof HTMLElement && C.appendChild(this._content), m.appendChild(C), C;
  }
  draw() {
    const m = this._map.pointToOverlayPixel(this._point);
    this.container.style.left = String(m.x) + "px", this.container.style.top = String(m.y) + "px", this.container.style.transform = "translate(-50%, -100%)";
  }
}
class Af {
  constructor() {
    Ut(this, "route");
  }
  onSearchComplete(T) {
    throw new Error("Method not implemented.");
  }
  _search(T, m) {
    return new Promise((C, L) => {
      this.onSearchComplete = (S) => {
        const N = [], Y = S.getNumPlans();
        for (let H = 0; H < Y; H++) {
          const V = S.getPlan(H), J = V.getNumRoutes(), rt = [];
          for (let tt = 0; tt < J; tt++)
            rt.push(V.getRoute(tt));
          N.push({
            paths: rt,
            distance: V.getDistance(),
            duration: V.getDuration()
          });
        }
        C(N);
      }, this.route.search(Me(T), Me(m));
    });
  }
  search(T, m) {
    return new Promise((C, L) => {
      this.onSearchComplete = (S) => {
        const N = S.getNumPlans();
        if (console.log(S, N), N > 0) {
          const Y = S.getPlan(0), H = Y.getRoute(0);
          C({
            path: H ? H.getPath() : [],
            distance: Y.getDistance(!1),
            duration: Y.getDuration(!1)
          });
        } else
          C(null);
      }, this.route.search(Me(T), Me(m));
    });
  }
  async multiSearch(T) {
    try {
      let m = 0, C = 0, L = [];
      for (let S = 0; S < T.length - 1; S++) {
        const N = await this.search(T[S], T[S + 1]);
        N && (m += N.distance, C += N.distance, L = L.concat(N.path));
      }
      return {
        path: L,
        distance: m,
        duration: C
      };
    } catch (m) {
      console.error(m);
    }
  }
}
class w0 extends Af {
  constructor(m) {
    super();
    Ut(this, "route");
    this.route = new BMapGL.DrivingRoute(m, {
      onSearchComplete: (C) => {
        this.onSearchComplete(C);
      }
    });
  }
}
class T0 extends Af {
  constructor(m) {
    super();
    Ut(this, "route");
    this.route = new BMapGL.WalkingRoute(m, {
      onSearchComplete: (C) => {
        this.onSearchComplete(C);
      }
    });
  }
}
let E0 = class {
  // 基础地图对像
  constructor(T, m) {
    Ut(this, "params");
    // 初始化参数
    Ut(this, "baseMap");
    if (typeof BMapGL != "object")
      throw new Error("地图脚本未加载，请先调用初始化方法");
    if (typeof T != "string")
      throw new Error("未指定正确的目标容器");
    this.params = m;
    const C = Object.assign(m.mapOptions || {}, {
      // 地图poi是否允许点击
      enableIconClick: m.enableIconClick,
      displayOptions: {
        // 是否显示室内图楼层切换控件
        indoor: m.showIndoor,
        // 是否显示建筑物
        building: m.showBuilding
      }
    });
    m.showIndoor && (C.showControls = !0);
    const L = new BMapGL.Map(T, C);
    this.baseMap = L;
    const S = m.center || [116.404, 39.915];
    L.centerAndZoom(new BMapGL.Point(S[0], S[1]), m.zoom || 8), m.enableKeyboard && L.enableKeyboard(), m.enableScrollWheelZoom && L.enableScrollWheelZoom(), m.controls && y0(L, m.controls);
  }
  // 底图样式设置
  setMapStyleV2(T) {
    this.baseMap.setMapStyleV2(T);
  }
  // 覆盖物
  addOverlay(T) {
    this.baseMap.addOverlay(T);
  }
  removeOverlay(T) {
    this.baseMap.removeOverlay(T);
  }
  getOverlays() {
    return this.baseMap.getOverlays();
  }
  clearOverlays() {
    this.baseMap.clearOverlays();
  }
  drawMarker(T, m) {
    const C = pf(T, m);
    return this.addOverlay(C), C;
  }
  drawIcon(T, m) {
    const C = vf(T, m);
    return this.addOverlay(C), C;
  }
  drawLabel(T, m, C = {}) {
    const { offset: L = [0, 0], style: S = {} } = C, N = new BMapGL.Label(T, {
      position: Me(m),
      // 指定文本标注所在的地理位置
      offset: new BMapGL.Size(L[0], L[1])
      // 设置文本偏移量
    });
    return N.setStyle(S), this.addOverlay(N), N;
  }
  drawCircle(T, m, C) {
    const L = gf(T, m, C);
    return this.addOverlay(L), L;
  }
  drawPolyline(T, m) {
    const C = mf(T, m);
    return this.addOverlay(C), C;
  }
  drawPolygon(T, m) {
    const C = yf(T, m);
    return this.addOverlay(C), C;
  }
  drawCustomOverlay(T, m, C) {
    const L = new _f(T, m, C);
    return this.addOverlay(L), L;
  }
  drawHtml(T, m, C) {
    const L = es(T, m, C);
    return this.addOverlay(L), L;
  }
  // 创建信息窗
  createInfoWindow(T, m) {
    return new BMapGL.InfoWindow(T, m);
  }
  // 打开目标信息框
  openInfoWindow(T, m) {
    this.baseMap.openInfoWindow(T, Me(m));
  }
  // 关闭信息框
  closeInfoWindow() {
    this.baseMap.closeInfoWindow();
  }
  // 地图状态
  setZoom(T) {
    this.baseMap.setZoom(T);
  }
  setCenter(T) {
    T instanceof BMapGL.Point ? this.baseMap.setCenter(T) : this.baseMap.setCenter(new BMapGL.Point(T[0], T[1]));
  }
  setViewport(T, m) {
    const C = T == null ? void 0 : T.map((L) => Me(L));
    C && this.baseMap.setViewport(C, m);
  }
  setCenterAndZoom(T, m) {
    this.baseMap.centerAndZoom(Array.isArray(T) ? new BMapGL.Point(T[0], T[1]) : T, m);
  }
  setDisplayOptions(T) {
    this.baseMap.setDisplayOptions(T);
  }
  getZoom() {
    return this.baseMap.getZoom();
  }
  getZoomUnits() {
    return this.baseMap.getZoomUnits();
  }
  getCenter() {
    return this.baseMap.getCenter();
  }
  getBounds() {
    return this.baseMap.getBounds();
  }
  // 事件
  on(T, m) {
    this.baseMap.addEventListener(T, m);
  }
  addEventListener(T, m) {
    this.baseMap.addEventListener(T, m);
  }
  removeEventListener(T, m) {
    this.baseMap.removeEventListener(T, m);
  }
  // 室内图
  getIndoorManager() {
    return this.baseMap._indoorMgr;
  }
  getIndoorInfo() {
    const T = this.getIndoorManager();
    return T.currentUid ? T.getIndoorData(T.currentUid) : null;
  }
  showIndoor(T, m) {
    this.baseMap.showIndoor(T, m);
  }
  setIndoorFloor(T) {
    const m = this.getIndoorInfo();
    if (typeof T == "string")
      if (m != null && m.floors) {
        const C = m.floors.findIndex((L) => L.floorName === T);
        this.showIndoor(m.uid, C);
      } else
        console.error("未找到该楼层");
    else
      m != null && m.floors && m.floors[T] ? this.showIndoor(m.uid, T) : console.error("未找到该楼层");
  }
  // 路径规划
  /**
   * @description 创建步行规划实例
   */
  createWalkRoute() {
    return new T0(this.baseMap);
  }
  createDrivingRoute() {
    return new w0(this.baseMap);
  }
  /**
   * @description 获取绘制工具示例
   */
  createMapDraw(T) {
    return new g0(this.baseMap, T);
  }
  /**
   * @description 根据位置获取地图poi信息
   */
  getIconByClickPosition(T) {
    return this.baseMap.getIconByClickPosition(T);
  }
  // 坐标转换
  /**
   * @description 经纬度转墨卡托
   * @returns mercator number[]
   */
  lnglatToMercator(T, m) {
    return this.baseMap.lnglatToMercator(T, m);
  }
  /**
   * @description 墨卡托转经纬度
   * @returns lnglat number[]
   */
  mercatorToLnglat(T, m) {
    return this.baseMap.mercatorToLnglat(T, m);
  }
  /**
   * @description 屏幕像素位置转换为地图坐标
   * @returns BMapGL.Point
   */
  pixelToPoint(T, m) {
    return this.baseMap.pixelToPoint(new BMapGL.Pixel(T, m));
  }
  /**
   * @description 地图坐标转换为屏幕像素位置
   * @returns BMapGL.Pixel
   */
  pointToPixel(T, m) {
    return this.baseMap.pointToPixel(new BMapGL.Point(T, m));
  }
};
const M0 = (E) => new Promise((T, m) => {
  if (typeof window.BMapGL == "object")
    return T(window.BMapGL);
  const C = document.createElement("script");
  C.type = "text/javascript";
  const { ak: L, baseUrl: S } = E;
  C.src = S || `//api.map.baidu.com/api?type=webgl&v=1.0&ak=${L}&callback=_mapInit`, window._mapInit = () => {
    T(window.BMapGL);
  }, document.body.appendChild(C);
});
var $a = {}, P0 = {
  get exports() {
    return $a;
  },
  set exports(E) {
    $a = E;
  }
}, fo = {}, L0 = {
  get exports() {
    return fo;
  },
  set exports(E) {
    fo = E;
  }
}, wf = function(T, m) {
  return function() {
    for (var L = new Array(arguments.length), S = 0; S < L.length; S++)
      L[S] = arguments[S];
    return T.apply(m, L);
  };
}, C0 = wf, is = Object.prototype.toString, ns = function(E) {
  return function(T) {
    var m = is.call(T);
    return E[m] || (E[m] = m.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function ei(E) {
  return E = E.toLowerCase(), function(m) {
    return ns(m) === E;
  };
}
function os(E) {
  return Array.isArray(E);
}
function ho(E) {
  return typeof E > "u";
}
function S0(E) {
  return E !== null && !ho(E) && E.constructor !== null && !ho(E.constructor) && typeof E.constructor.isBuffer == "function" && E.constructor.isBuffer(E);
}
var Tf = ei("ArrayBuffer");
function R0(E) {
  var T;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? T = ArrayBuffer.isView(E) : T = E && E.buffer && Tf(E.buffer), T;
}
function O0(E) {
  return typeof E == "string";
}
function B0(E) {
  return typeof E == "number";
}
function Ef(E) {
  return E !== null && typeof E == "object";
}
function uo(E) {
  if (ns(E) !== "object")
    return !1;
  var T = Object.getPrototypeOf(E);
  return T === null || T === Object.prototype;
}
var D0 = ei("Date"), b0 = ei("File"), F0 = ei("Blob"), I0 = ei("FileList");
function as(E) {
  return is.call(E) === "[object Function]";
}
function z0(E) {
  return Ef(E) && as(E.pipe);
}
function k0(E) {
  var T = "[object FormData]";
  return E && (typeof FormData == "function" && E instanceof FormData || is.call(E) === T || as(E.toString) && E.toString() === T);
}
var N0 = ei("URLSearchParams");
function U0(E) {
  return E.trim ? E.trim() : E.replace(/^\s+|\s+$/g, "");
}
function H0() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function ss(E, T) {
  if (!(E === null || typeof E > "u"))
    if (typeof E != "object" && (E = [E]), os(E))
      for (var m = 0, C = E.length; m < C; m++)
        T.call(null, E[m], m, E);
    else
      for (var L in E)
        Object.prototype.hasOwnProperty.call(E, L) && T.call(null, E[L], L, E);
}
function ts() {
  var E = {};
  function T(L, S) {
    uo(E[S]) && uo(L) ? E[S] = ts(E[S], L) : uo(L) ? E[S] = ts({}, L) : os(L) ? E[S] = L.slice() : E[S] = L;
  }
  for (var m = 0, C = arguments.length; m < C; m++)
    ss(arguments[m], T);
  return E;
}
function G0(E, T, m) {
  return ss(T, function(L, S) {
    m && typeof L == "function" ? E[S] = C0(L, m) : E[S] = L;
  }), E;
}
function j0(E) {
  return E.charCodeAt(0) === 65279 && (E = E.slice(1)), E;
}
function W0(E, T, m, C) {
  E.prototype = Object.create(T.prototype, C), E.prototype.constructor = E, m && Object.assign(E.prototype, m);
}
function X0(E, T, m) {
  var C, L, S, N = {};
  T = T || {};
  do {
    for (C = Object.getOwnPropertyNames(E), L = C.length; L-- > 0; )
      S = C[L], N[S] || (T[S] = E[S], N[S] = !0);
    E = Object.getPrototypeOf(E);
  } while (E && (!m || m(E, T)) && E !== Object.prototype);
  return T;
}
function V0(E, T, m) {
  E = String(E), (m === void 0 || m > E.length) && (m = E.length), m -= T.length;
  var C = E.indexOf(T, m);
  return C !== -1 && C === m;
}
function Y0(E) {
  if (!E)
    return null;
  var T = E.length;
  if (ho(T))
    return null;
  for (var m = new Array(T); T-- > 0; )
    m[T] = E[T];
  return m;
}
var Z0 = function(E) {
  return function(T) {
    return E && T instanceof E;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Pe = {
  isArray: os,
  isArrayBuffer: Tf,
  isBuffer: S0,
  isFormData: k0,
  isArrayBufferView: R0,
  isString: O0,
  isNumber: B0,
  isObject: Ef,
  isPlainObject: uo,
  isUndefined: ho,
  isDate: D0,
  isFile: b0,
  isBlob: F0,
  isFunction: as,
  isStream: z0,
  isURLSearchParams: N0,
  isStandardBrowserEnv: H0,
  forEach: ss,
  merge: ts,
  extend: G0,
  trim: U0,
  stripBOM: j0,
  inherits: W0,
  toFlatObject: X0,
  kindOf: ns,
  kindOfTest: ei,
  endsWith: V0,
  toArray: Y0,
  isTypedArray: Z0,
  isFileList: I0
}, _i = Pe;
function Gl(E) {
  return encodeURIComponent(E).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Mf = function(T, m, C) {
  if (!m)
    return T;
  var L;
  if (C)
    L = C(m);
  else if (_i.isURLSearchParams(m))
    L = m.toString();
  else {
    var S = [];
    _i.forEach(m, function(H, V) {
      H === null || typeof H > "u" || (_i.isArray(H) ? V = V + "[]" : H = [H], _i.forEach(H, function(rt) {
        _i.isDate(rt) ? rt = rt.toISOString() : _i.isObject(rt) && (rt = JSON.stringify(rt)), S.push(Gl(V) + "=" + Gl(rt));
      }));
    }), L = S.join("&");
  }
  if (L) {
    var N = T.indexOf("#");
    N !== -1 && (T = T.slice(0, N)), T += (T.indexOf("?") === -1 ? "?" : "&") + L;
  }
  return T;
}, J0 = Pe;
function vo() {
  this.handlers = [];
}
vo.prototype.use = function(T, m, C) {
  return this.handlers.push({
    fulfilled: T,
    rejected: m,
    synchronous: C ? C.synchronous : !1,
    runWhen: C ? C.runWhen : null
  }), this.handlers.length - 1;
};
vo.prototype.eject = function(T) {
  this.handlers[T] && (this.handlers[T] = null);
};
vo.prototype.forEach = function(T) {
  J0.forEach(this.handlers, function(C) {
    C !== null && T(C);
  });
};
var Q0 = vo, K0 = Pe, q0 = function(T, m) {
  K0.forEach(T, function(L, S) {
    S !== m && S.toUpperCase() === m.toUpperCase() && (T[m] = L, delete T[S]);
  });
}, Pf = Pe;
function Li(E, T, m, C, L) {
  Error.call(this), this.message = E, this.name = "AxiosError", T && (this.code = T), m && (this.config = m), C && (this.request = C), L && (this.response = L);
}
Pf.inherits(Li, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var Lf = Li.prototype, Cf = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
  // eslint-disable-next-line func-names
].forEach(function(E) {
  Cf[E] = { value: E };
});
Object.defineProperties(Li, Cf);
Object.defineProperty(Lf, "isAxiosError", { value: !0 });
Li.from = function(E, T, m, C, L, S) {
  var N = Object.create(Lf);
  return Pf.toFlatObject(E, N, function(H) {
    return H !== Error.prototype;
  }), Li.call(N, E.message, T, m, C, L), N.name = E.name, S && Object.assign(N, S), N;
};
var Si = Li, Sf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, er = Pe;
function $0(E, T) {
  T = T || new FormData();
  var m = [];
  function C(S) {
    return S === null ? "" : er.isDate(S) ? S.toISOString() : er.isArrayBuffer(S) || er.isTypedArray(S) ? typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S;
  }
  function L(S, N) {
    if (er.isPlainObject(S) || er.isArray(S)) {
      if (m.indexOf(S) !== -1)
        throw Error("Circular reference detected in " + N);
      m.push(S), er.forEach(S, function(H, V) {
        if (!er.isUndefined(H)) {
          var J = N ? N + "." + V : V, rt;
          if (H && !N && typeof H == "object") {
            if (er.endsWith(V, "{}"))
              H = JSON.stringify(H);
            else if (er.endsWith(V, "[]") && (rt = er.toArray(H))) {
              rt.forEach(function(tt) {
                !er.isUndefined(tt) && T.append(J, C(tt));
              });
              return;
            }
          }
          L(H, J);
        }
      }), m.pop();
    } else
      T.append(N, C(S));
  }
  return L(E), T;
}
var Rf = $0, za, jl;
function tv() {
  if (jl)
    return za;
  jl = 1;
  var E = Si;
  return za = function(m, C, L) {
    var S = L.config.validateStatus;
    !L.status || !S || S(L.status) ? m(L) : C(new E(
      "Request failed with status code " + L.status,
      [E.ERR_BAD_REQUEST, E.ERR_BAD_RESPONSE][Math.floor(L.status / 100) - 4],
      L.config,
      L.request,
      L
    ));
  }, za;
}
var ka, Wl;
function ev() {
  if (Wl)
    return ka;
  Wl = 1;
  var E = Pe;
  return ka = E.isStandardBrowserEnv() ? (
    // Standard browser envs support document.cookie
    function() {
      return {
        write: function(C, L, S, N, Y, H) {
          var V = [];
          V.push(C + "=" + encodeURIComponent(L)), E.isNumber(S) && V.push("expires=" + new Date(S).toGMTString()), E.isString(N) && V.push("path=" + N), E.isString(Y) && V.push("domain=" + Y), H === !0 && V.push("secure"), document.cookie = V.join("; ");
        },
        read: function(C) {
          var L = document.cookie.match(new RegExp("(^|;\\s*)(" + C + ")=([^;]*)"));
          return L ? decodeURIComponent(L[3]) : null;
        },
        remove: function(C) {
          this.write(C, "", Date.now() - 864e5);
        }
      };
    }()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    function() {
      return {
        write: function() {
        },
        read: function() {
          return null;
        },
        remove: function() {
        }
      };
    }()
  ), ka;
}
var rv = function(T) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(T);
}, iv = function(T, m) {
  return m ? T.replace(/\/+$/, "") + "/" + m.replace(/^\/+/, "") : T;
}, nv = rv, ov = iv, Of = function(T, m) {
  return T && !nv(m) ? ov(T, m) : m;
}, Na, Xl;
function av() {
  if (Xl)
    return Na;
  Xl = 1;
  var E = Pe, T = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return Na = function(C) {
    var L = {}, S, N, Y;
    return C && E.forEach(C.split(`
`), function(V) {
      if (Y = V.indexOf(":"), S = E.trim(V.substr(0, Y)).toLowerCase(), N = E.trim(V.substr(Y + 1)), S) {
        if (L[S] && T.indexOf(S) >= 0)
          return;
        S === "set-cookie" ? L[S] = (L[S] ? L[S] : []).concat([N]) : L[S] = L[S] ? L[S] + ", " + N : N;
      }
    }), L;
  }, Na;
}
var Ua, Vl;
function sv() {
  if (Vl)
    return Ua;
  Vl = 1;
  var E = Pe;
  return Ua = E.isStandardBrowserEnv() ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function() {
      var m = /(msie|trident)/i.test(navigator.userAgent), C = document.createElement("a"), L;
      function S(N) {
        var Y = N;
        return m && (C.setAttribute("href", Y), Y = C.href), C.setAttribute("href", Y), {
          href: C.href,
          protocol: C.protocol ? C.protocol.replace(/:$/, "") : "",
          host: C.host,
          search: C.search ? C.search.replace(/^\?/, "") : "",
          hash: C.hash ? C.hash.replace(/^#/, "") : "",
          hostname: C.hostname,
          port: C.port,
          pathname: C.pathname.charAt(0) === "/" ? C.pathname : "/" + C.pathname
        };
      }
      return L = S(window.location.href), function(Y) {
        var H = E.isString(Y) ? S(Y) : Y;
        return H.protocol === L.protocol && H.host === L.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    function() {
      return function() {
        return !0;
      };
    }()
  ), Ua;
}
var Ha, Yl;
function go() {
  if (Yl)
    return Ha;
  Yl = 1;
  var E = Si, T = Pe;
  function m(C) {
    E.call(this, C ?? "canceled", E.ERR_CANCELED), this.name = "CanceledError";
  }
  return T.inherits(m, E, {
    __CANCEL__: !0
  }), Ha = m, Ha;
}
var Ga, Zl;
function uv() {
  return Zl || (Zl = 1, Ga = function(T) {
    var m = /^([-+\w]{1,25})(:?\/\/|:)/.exec(T);
    return m && m[1] || "";
  }), Ga;
}
var ja, Jl;
function Ql() {
  if (Jl)
    return ja;
  Jl = 1;
  var E = Pe, T = tv(), m = ev(), C = Mf, L = Of, S = av(), N = sv(), Y = Sf, H = Si, V = go(), J = uv();
  return ja = function(tt) {
    return new Promise(function(D, z) {
      var b = tt.data, j = tt.headers, k = tt.responseType, W;
      function q() {
        tt.cancelToken && tt.cancelToken.unsubscribe(W), tt.signal && tt.signal.removeEventListener("abort", W);
      }
      E.isFormData(b) && E.isStandardBrowserEnv() && delete j["Content-Type"];
      var $ = new XMLHttpRequest();
      if (tt.auth) {
        var nt = tt.auth.username || "", At = tt.auth.password ? unescape(encodeURIComponent(tt.auth.password)) : "";
        j.Authorization = "Basic " + btoa(nt + ":" + At);
      }
      var mt = L(tt.baseURL, tt.url);
      $.open(tt.method.toUpperCase(), C(mt, tt.params, tt.paramsSerializer), !0), $.timeout = tt.timeout;
      function gt() {
        if ($) {
          var ot = "getAllResponseHeaders" in $ ? S($.getAllResponseHeaders()) : null, at = !k || k === "text" || k === "json" ? $.responseText : $.response, _t = {
            data: at,
            status: $.status,
            statusText: $.statusText,
            headers: ot,
            config: tt,
            request: $
          };
          T(function(Wt) {
            D(Wt), q();
          }, function(Wt) {
            z(Wt), q();
          }, _t), $ = null;
        }
      }
      if ("onloadend" in $ ? $.onloadend = gt : $.onreadystatechange = function() {
        !$ || $.readyState !== 4 || $.status === 0 && !($.responseURL && $.responseURL.indexOf("file:") === 0) || setTimeout(gt);
      }, $.onabort = function() {
        $ && (z(new H("Request aborted", H.ECONNABORTED, tt, $)), $ = null);
      }, $.onerror = function() {
        z(new H("Network Error", H.ERR_NETWORK, tt, $, $)), $ = null;
      }, $.ontimeout = function() {
        var at = tt.timeout ? "timeout of " + tt.timeout + "ms exceeded" : "timeout exceeded", _t = tt.transitional || Y;
        tt.timeoutErrorMessage && (at = tt.timeoutErrorMessage), z(new H(
          at,
          _t.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED,
          tt,
          $
        )), $ = null;
      }, E.isStandardBrowserEnv()) {
        var ht = (tt.withCredentials || N(mt)) && tt.xsrfCookieName ? m.read(tt.xsrfCookieName) : void 0;
        ht && (j[tt.xsrfHeaderName] = ht);
      }
      "setRequestHeader" in $ && E.forEach(j, function(at, _t) {
        typeof b > "u" && _t.toLowerCase() === "content-type" ? delete j[_t] : $.setRequestHeader(_t, at);
      }), E.isUndefined(tt.withCredentials) || ($.withCredentials = !!tt.withCredentials), k && k !== "json" && ($.responseType = tt.responseType), typeof tt.onDownloadProgress == "function" && $.addEventListener("progress", tt.onDownloadProgress), typeof tt.onUploadProgress == "function" && $.upload && $.upload.addEventListener("progress", tt.onUploadProgress), (tt.cancelToken || tt.signal) && (W = function(ot) {
        $ && (z(!ot || ot && ot.type ? new V() : ot), $.abort(), $ = null);
      }, tt.cancelToken && tt.cancelToken.subscribe(W), tt.signal && (tt.signal.aborted ? W() : tt.signal.addEventListener("abort", W))), b || (b = null);
      var xt = J(mt);
      if (xt && ["http", "https", "file"].indexOf(xt) === -1) {
        z(new H("Unsupported protocol " + xt + ":", H.ERR_BAD_REQUEST, tt));
        return;
      }
      $.send(b);
    });
  }, ja;
}
var Wa, Kl;
function lv() {
  return Kl || (Kl = 1, Wa = null), Wa;
}
var Ae = Pe, ql = q0, $l = Si, fv = Sf, hv = Rf, cv = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function tf(E, T) {
  !Ae.isUndefined(E) && Ae.isUndefined(E["Content-Type"]) && (E["Content-Type"] = T);
}
function dv() {
  var E;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (E = Ql()), E;
}
function pv(E, T, m) {
  if (Ae.isString(E))
    try {
      return (T || JSON.parse)(E), Ae.trim(E);
    } catch (C) {
      if (C.name !== "SyntaxError")
        throw C;
    }
  return (m || JSON.stringify)(E);
}
var mo = {
  transitional: fv,
  adapter: dv(),
  transformRequest: [function(T, m) {
    if (ql(m, "Accept"), ql(m, "Content-Type"), Ae.isFormData(T) || Ae.isArrayBuffer(T) || Ae.isBuffer(T) || Ae.isStream(T) || Ae.isFile(T) || Ae.isBlob(T))
      return T;
    if (Ae.isArrayBufferView(T))
      return T.buffer;
    if (Ae.isURLSearchParams(T))
      return tf(m, "application/x-www-form-urlencoded;charset=utf-8"), T.toString();
    var C = Ae.isObject(T), L = m && m["Content-Type"], S;
    if ((S = Ae.isFileList(T)) || C && L === "multipart/form-data") {
      var N = this.env && this.env.FormData;
      return hv(S ? { "files[]": T } : T, N && new N());
    } else if (C || L === "application/json")
      return tf(m, "application/json"), pv(T);
    return T;
  }],
  transformResponse: [function(T) {
    var m = this.transitional || mo.transitional, C = m && m.silentJSONParsing, L = m && m.forcedJSONParsing, S = !C && this.responseType === "json";
    if (S || L && Ae.isString(T) && T.length)
      try {
        return JSON.parse(T);
      } catch (N) {
        if (S)
          throw N.name === "SyntaxError" ? $l.from(N, $l.ERR_BAD_RESPONSE, this, null, this.response) : N;
      }
    return T;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: lv()
  },
  validateStatus: function(T) {
    return T >= 200 && T < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
Ae.forEach(["delete", "get", "head"], function(T) {
  mo.headers[T] = {};
});
Ae.forEach(["post", "put", "patch"], function(T) {
  mo.headers[T] = Ae.merge(cv);
});
var us = mo, vv = Pe, gv = us, mv = function(T, m, C) {
  var L = this || gv;
  return vv.forEach(C, function(N) {
    T = N.call(L, T, m);
  }), T;
}, Xa, ef;
function Bf() {
  return ef || (ef = 1, Xa = function(T) {
    return !!(T && T.__CANCEL__);
  }), Xa;
}
var rf = Pe, Va = mv, yv = Bf(), xv = us, _v = go();
function Ya(E) {
  if (E.cancelToken && E.cancelToken.throwIfRequested(), E.signal && E.signal.aborted)
    throw new _v();
}
var Av = function(T) {
  Ya(T), T.headers = T.headers || {}, T.data = Va.call(
    T,
    T.data,
    T.headers,
    T.transformRequest
  ), T.headers = rf.merge(
    T.headers.common || {},
    T.headers[T.method] || {},
    T.headers
  ), rf.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(L) {
      delete T.headers[L];
    }
  );
  var m = T.adapter || xv.adapter;
  return m(T).then(function(L) {
    return Ya(T), L.data = Va.call(
      T,
      L.data,
      L.headers,
      T.transformResponse
    ), L;
  }, function(L) {
    return yv(L) || (Ya(T), L && L.response && (L.response.data = Va.call(
      T,
      L.response.data,
      L.response.headers,
      T.transformResponse
    ))), Promise.reject(L);
  });
}, Ge = Pe, Df = function(T, m) {
  m = m || {};
  var C = {};
  function L(J, rt) {
    return Ge.isPlainObject(J) && Ge.isPlainObject(rt) ? Ge.merge(J, rt) : Ge.isPlainObject(rt) ? Ge.merge({}, rt) : Ge.isArray(rt) ? rt.slice() : rt;
  }
  function S(J) {
    if (Ge.isUndefined(m[J])) {
      if (!Ge.isUndefined(T[J]))
        return L(void 0, T[J]);
    } else
      return L(T[J], m[J]);
  }
  function N(J) {
    if (!Ge.isUndefined(m[J]))
      return L(void 0, m[J]);
  }
  function Y(J) {
    if (Ge.isUndefined(m[J])) {
      if (!Ge.isUndefined(T[J]))
        return L(void 0, T[J]);
    } else
      return L(void 0, m[J]);
  }
  function H(J) {
    if (J in m)
      return L(T[J], m[J]);
    if (J in T)
      return L(void 0, T[J]);
  }
  var V = {
    url: N,
    method: N,
    data: N,
    baseURL: Y,
    transformRequest: Y,
    transformResponse: Y,
    paramsSerializer: Y,
    timeout: Y,
    timeoutMessage: Y,
    withCredentials: Y,
    adapter: Y,
    responseType: Y,
    xsrfCookieName: Y,
    xsrfHeaderName: Y,
    onUploadProgress: Y,
    onDownloadProgress: Y,
    decompress: Y,
    maxContentLength: Y,
    maxBodyLength: Y,
    beforeRedirect: Y,
    transport: Y,
    httpAgent: Y,
    httpsAgent: Y,
    cancelToken: Y,
    socketPath: Y,
    responseEncoding: Y,
    validateStatus: H
  };
  return Ge.forEach(Object.keys(T).concat(Object.keys(m)), function(rt) {
    var tt = V[rt] || S, st = tt(rt);
    Ge.isUndefined(st) && tt !== H || (C[rt] = st);
  }), C;
}, Za, nf;
function bf() {
  return nf || (nf = 1, Za = {
    version: "0.27.2"
  }), Za;
}
var wv = bf().version, Ur = Si, ls = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(E, T) {
  ls[E] = function(C) {
    return typeof C === E || "a" + (T < 1 ? "n " : " ") + E;
  };
});
var of = {};
ls.transitional = function(T, m, C) {
  function L(S, N) {
    return "[Axios v" + wv + "] Transitional option '" + S + "'" + N + (C ? ". " + C : "");
  }
  return function(S, N, Y) {
    if (T === !1)
      throw new Ur(
        L(N, " has been removed" + (m ? " in " + m : "")),
        Ur.ERR_DEPRECATED
      );
    return m && !of[N] && (of[N] = !0, console.warn(
      L(
        N,
        " has been deprecated since v" + m + " and will be removed in the near future"
      )
    )), T ? T(S, N, Y) : !0;
  };
};
function Tv(E, T, m) {
  if (typeof E != "object")
    throw new Ur("options must be an object", Ur.ERR_BAD_OPTION_VALUE);
  for (var C = Object.keys(E), L = C.length; L-- > 0; ) {
    var S = C[L], N = T[S];
    if (N) {
      var Y = E[S], H = Y === void 0 || N(Y, S, E);
      if (H !== !0)
        throw new Ur("option " + S + " must be " + H, Ur.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (m !== !0)
      throw new Ur("Unknown option " + S, Ur.ERR_BAD_OPTION);
  }
}
var Ev = {
  assertOptions: Tv,
  validators: ls
}, Ff = Pe, Mv = Mf, af = Q0, sf = Av, yo = Df, Pv = Of, If = Ev, Ai = If.validators;
function Ci(E) {
  this.defaults = E, this.interceptors = {
    request: new af(),
    response: new af()
  };
}
Ci.prototype.request = function(T, m) {
  typeof T == "string" ? (m = m || {}, m.url = T) : m = T || {}, m = yo(this.defaults, m), m.method ? m.method = m.method.toLowerCase() : this.defaults.method ? m.method = this.defaults.method.toLowerCase() : m.method = "get";
  var C = m.transitional;
  C !== void 0 && If.assertOptions(C, {
    silentJSONParsing: Ai.transitional(Ai.boolean),
    forcedJSONParsing: Ai.transitional(Ai.boolean),
    clarifyTimeoutError: Ai.transitional(Ai.boolean)
  }, !1);
  var L = [], S = !0;
  this.interceptors.request.forEach(function(st) {
    typeof st.runWhen == "function" && st.runWhen(m) === !1 || (S = S && st.synchronous, L.unshift(st.fulfilled, st.rejected));
  });
  var N = [];
  this.interceptors.response.forEach(function(st) {
    N.push(st.fulfilled, st.rejected);
  });
  var Y;
  if (!S) {
    var H = [sf, void 0];
    for (Array.prototype.unshift.apply(H, L), H = H.concat(N), Y = Promise.resolve(m); H.length; )
      Y = Y.then(H.shift(), H.shift());
    return Y;
  }
  for (var V = m; L.length; ) {
    var J = L.shift(), rt = L.shift();
    try {
      V = J(V);
    } catch (tt) {
      rt(tt);
      break;
    }
  }
  try {
    Y = sf(V);
  } catch (tt) {
    return Promise.reject(tt);
  }
  for (; N.length; )
    Y = Y.then(N.shift(), N.shift());
  return Y;
};
Ci.prototype.getUri = function(T) {
  T = yo(this.defaults, T);
  var m = Pv(T.baseURL, T.url);
  return Mv(m, T.params, T.paramsSerializer);
};
Ff.forEach(["delete", "get", "head", "options"], function(T) {
  Ci.prototype[T] = function(m, C) {
    return this.request(yo(C || {}, {
      method: T,
      url: m,
      data: (C || {}).data
    }));
  };
});
Ff.forEach(["post", "put", "patch"], function(T) {
  function m(C) {
    return function(S, N, Y) {
      return this.request(yo(Y || {}, {
        method: T,
        headers: C ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: S,
        data: N
      }));
    };
  }
  Ci.prototype[T] = m(), Ci.prototype[T + "Form"] = m(!0);
});
var Lv = Ci, Ja, uf;
function Cv() {
  if (uf)
    return Ja;
  uf = 1;
  var E = go();
  function T(m) {
    if (typeof m != "function")
      throw new TypeError("executor must be a function.");
    var C;
    this.promise = new Promise(function(N) {
      C = N;
    });
    var L = this;
    this.promise.then(function(S) {
      if (L._listeners) {
        var N, Y = L._listeners.length;
        for (N = 0; N < Y; N++)
          L._listeners[N](S);
        L._listeners = null;
      }
    }), this.promise.then = function(S) {
      var N, Y = new Promise(function(H) {
        L.subscribe(H), N = H;
      }).then(S);
      return Y.cancel = function() {
        L.unsubscribe(N);
      }, Y;
    }, m(function(N) {
      L.reason || (L.reason = new E(N), C(L.reason));
    });
  }
  return T.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, T.prototype.subscribe = function(C) {
    if (this.reason) {
      C(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(C) : this._listeners = [C];
  }, T.prototype.unsubscribe = function(C) {
    if (this._listeners) {
      var L = this._listeners.indexOf(C);
      L !== -1 && this._listeners.splice(L, 1);
    }
  }, T.source = function() {
    var C, L = new T(function(N) {
      C = N;
    });
    return {
      token: L,
      cancel: C
    };
  }, Ja = T, Ja;
}
var Qa, lf;
function Sv() {
  return lf || (lf = 1, Qa = function(T) {
    return function(C) {
      return T.apply(null, C);
    };
  }), Qa;
}
var Ka, ff;
function Rv() {
  if (ff)
    return Ka;
  ff = 1;
  var E = Pe;
  return Ka = function(m) {
    return E.isObject(m) && m.isAxiosError === !0;
  }, Ka;
}
var hf = Pe, Ov = wf, lo = Lv, Bv = Df, Dv = us;
function zf(E) {
  var T = new lo(E), m = Ov(lo.prototype.request, T);
  return hf.extend(m, lo.prototype, T), hf.extend(m, T), m.create = function(L) {
    return zf(Bv(E, L));
  }, m;
}
var ke = zf(Dv);
ke.Axios = lo;
ke.CanceledError = go();
ke.CancelToken = Cv();
ke.isCancel = Bf();
ke.VERSION = bf().version;
ke.toFormData = Rf;
ke.AxiosError = Si;
ke.Cancel = ke.CanceledError;
ke.all = function(T) {
  return Promise.all(T);
};
ke.spread = Sv();
ke.isAxiosError = Rv();
L0.exports = ke;
fo.default = ke;
(function(E) {
  E.exports = fo;
})(P0);
const bv = /* @__PURE__ */ Np($a);
class kf {
  constructor(T = {}) {
    Ut(this, "instance");
    this.instance = bv.create({
      timeout: 6e4,
      baseURL: T.baseUrl
    }), this.instance.interceptors.request.use(
      (m) => {
        const C = window.sessionStorage.getItem("map-cloud-jwt");
        return C && (m.headers["map-cloud-jwt"] = C), m;
      },
      (m) => Promise.reject(m)
    ), this.instance.interceptors.response.use(
      (m) => {
        const C = m.data;
        return m.headers["map-cloud-jwt"] && window.sessionStorage.setItem("map-cloud-jwt", m.headers["map-cloud-jwt"]), m.status === 200 && m.data.code === 0 ? Promise.resolve(C) : Promise.reject(new Error((C == null ? void 0 : C.msg) || "请求失败"));
      },
      (m) => Promise.reject(m)
    );
  }
  get(T, m) {
    return this.instance.get(T, m);
  }
  post(T, m, C) {
    return this.instance.post(T, m, C);
  }
}
const wi = new kf(), _r = {
  baseUrl: "http://marketmap.baidu-int.com",
  // 用户校验逻辑，登录图聚后台获取tocken
  getTocken(E) {
    return wi.post(_r.baseUrl + "/openapi/open/v1/init", E);
  },
  // 获取地图图层列表
  getLayerListByMapId(E) {
    return wi.post(_r.baseUrl + "/openapi/v1/release/layer/list", { mapId: E });
  },
  // 获取指定图层的数据
  getLayerData(E) {
    return wi.post(_r.baseUrl + "/openapi/v1/release/layer/data/all", E);
  },
  // 获取指定图层的样式, 数组形式
  async getLayerStyle(E) {
    var C;
    const T = await wi.post(_r.baseUrl + "/openapi/v1/release/layer/style/list", E), m = [];
    return T.code === 0 && ((C = T.data) == null ? void 0 : C.length) > 0 && T.data.forEach((L) => {
      let S = {};
      if (L.styleConfigJsonString && (S = JSON.parse(L.styleConfigJsonString)), L.labelConfigVo) {
        const N = L.labelConfigVo;
        S.labelConfig = N, N.configJsonString && (S.labelConfig.data = JSON.parse(N.configJsonString));
      }
    }), m;
  },
  // 空间查询，框选
  searchBox(E) {
    return wi.post(_r.baseUrl + "/openapi/v1/search/box", E);
  },
  // 获取室内导航数据
  getIndoorRoutes(E, T, m) {
    return wi.post((m || _r.baseUrl) + "/openapi/open/v1/dataTools/indoorNavi", {
      beginbXyFloor: `${E.x},${E.y}|${E.floor}`,
      endXyFloor: `${T.x},${T.y}|${T.floor}`
    });
  }
};
async function Fv(E) {
  const { ak: T, baseUrl: m, authConfig: C } = E;
  try {
    if (C)
      try {
        await _r.getTocken(C);
      } catch (L) {
        console.error(L);
      }
    if (T || m)
      return await M0({ ak: T, baseUrl: m }), BMapGL;
    throw new Error("参数错误，ak或者baseUrl至少传入一个！");
  } catch (L) {
    throw console.error(L), new Error("初始化失败");
  }
}
class Iv {
  constructor(T, m) {
    Ut(this, "map");
    Ut(this, "server");
    this.map = T, this.server = (m == null ? void 0 : m.server) || "";
  }
  async search(T, m) {
    var S, N, Y;
    let C = Me(T.point);
    const L = this.map.lnglatToMercator(C.lng, C.lat);
    C = Me(m.point);
    try {
      const H = this.map.lnglatToMercator(C.lng, C.lat), J = (Y = (N = (S = (await _r.getIndoorRoutes(
        { x: L[0], y: L[1], floor: T.floor },
        { x: H[0], y: H[1], floor: m.floor },
        this.server
      )).data.routeList) == null ? void 0 : S[0]) == null ? void 0 : N.legs) == null ? void 0 : Y[0];
      if (J) {
        const rt = J.steps.map((st) => {
          const D = this.map.mercatorToLnglat(st.sstartLocation[0], st.sstartLocation[1]), z = this.map.mercatorToLnglat(st.sendLocation[0], st.sendLocation[1]), b = [];
          let j = Number(st.spath[5]), k = Number(st.spath[6]);
          b.push(this.map.mercatorToLnglat(j, k));
          for (let W = 7; W < st.spath.length; W += 2)
            j = j + Number(st.spath[W]), k = k + Number(st.spath[W + 1]), b.push(this.map.mercatorToLnglat(j, k));
          return {
            start: D,
            end: z,
            path: b,
            floor: JSON.parse(st.floorid)
          };
        });
        return {
          distance: J.distance,
          duration: J.duration,
          steps: rt
        };
      } else
        return null;
    } catch (H) {
      return console.error(H), null;
    }
  }
}
class zv extends E0 {
  constructor(T, m = {}) {
    super(T, m);
  }
  /** 创建室内导航
   * @returns IndoorRoute实例
   */
  createIndoorRoute(T) {
    return new Iv(this.baseMap, T);
  }
}
const kv = {
  POINT: 1,
  LINE: 2,
  POLYGON: 3,
  ICON: 4,
  TEXT: 5,
  LABEL: 6,
  CLUSTER: 7,
  HEATMAP: 8,
  GRID: 9,
  HONEYCOMB: 10
};
var co = {}, Nv = {
  get exports() {
    return co;
  },
  set exports(E) {
    co = E;
  }
};
Nv.exports = Nf;
var Uv = co.parse = Nf;
co.stringify = Uf;
var cf = /[-+]?([0-9]*\.[0-9]+|[0-9]+)([eE][-+]?[0-9]+)?/, df = new RegExp("^" + cf.source + "(\\s" + cf.source + "){1,}");
function Nf(E) {
  var T = E.split(";"), m = T.pop(), C = (T.shift() || "").split("=").pop(), L = 0;
  function S(k) {
    var W = m.substring(L).match(k);
    return W ? (L += W[0].length, W[0]) : null;
  }
  function N(k) {
    return k && C.match(/\d+/) && (k.crs = {
      type: "name",
      properties: {
        name: "urn:ogc:def:crs:EPSG::" + C
      }
    }), k;
  }
  function Y() {
    S(/^\s*/);
  }
  function H() {
    Y();
    for (var k = 0, W = [], q = [W], $ = W, nt; nt = S(/^(\()/) || S(/^(\))/) || S(/^(,)/) || S(df); ) {
      if (nt === "(")
        q.push($), $ = [], q[q.length - 1].push($), k++;
      else if (nt === ")") {
        if ($.length === 0 || ($ = q.pop(), !$))
          return null;
        if (k--, k === 0)
          break;
      } else if (nt === ",")
        $ = [], q[q.length - 1].push($);
      else if (!nt.split(/\s/g).some(isNaN))
        Array.prototype.push.apply($, nt.split(/\s/g).map(parseFloat));
      else
        return null;
      Y();
    }
    return k !== 0 ? null : W;
  }
  function V() {
    for (var k = [], W, q; q = S(df) || S(/^(,)/); )
      q === "," ? (k.push(W), W = []) : q.split(/\s/g).some(isNaN) || (W || (W = []), Array.prototype.push.apply(W, q.split(/\s/g).map(parseFloat))), Y();
    if (W)
      k.push(W);
    else
      return null;
    return k.length ? k : null;
  }
  function J() {
    if (!S(/^(point(\sz)?)/i) || (Y(), !S(/^(\()/)))
      return null;
    var k = V();
    return !k || (Y(), !S(/^(\))/)) ? null : {
      type: "Point",
      coordinates: k[0]
    };
  }
  function rt() {
    if (!S(/^(multipoint)/i))
      return null;
    Y();
    var k = m.substring(m.indexOf("(") + 1, m.length - 1).replace(/\(/g, "").replace(/\)/g, "");
    m = "MULTIPOINT (" + k + ")";
    var W = H();
    return W ? (Y(), {
      type: "MultiPoint",
      coordinates: W
    }) : null;
  }
  function tt() {
    if (!S(/^(multilinestring)/i))
      return null;
    Y();
    var k = H();
    return k ? (Y(), {
      type: "MultiLineString",
      coordinates: k
    }) : null;
  }
  function st() {
    if (!S(/^(linestring(\sz)?)/i) || (Y(), !S(/^(\()/)))
      return null;
    var k = V();
    return !k || !S(/^(\))/) ? null : {
      type: "LineString",
      coordinates: k
    };
  }
  function D() {
    if (!S(/^(polygon(\sz)?)/i))
      return null;
    Y();
    var k = H();
    return k ? {
      type: "Polygon",
      coordinates: k
    } : null;
  }
  function z() {
    if (!S(/^(multipolygon)/i))
      return null;
    Y();
    var k = H();
    return k ? {
      type: "MultiPolygon",
      coordinates: k
    } : null;
  }
  function b() {
    var k = [], W;
    if (!S(/^(geometrycollection)/i) || (Y(), !S(/^(\()/)))
      return null;
    for (; W = j(); )
      k.push(W), Y(), S(/^(,)/), Y();
    return S(/^(\))/) ? {
      type: "GeometryCollection",
      geometries: k
    } : null;
  }
  function j() {
    return J() || st() || D() || rt() || tt() || z() || b();
  }
  return N(j());
}
function Uf(E) {
  E.type === "Feature" && (E = E.geometry);
  function T(N) {
    return N.join(" ");
  }
  function m(N) {
    return N.map(T).join(", ");
  }
  function C(N) {
    return N.map(m).map(S).join(", ");
  }
  function L(N) {
    return N.map(C).map(S).join(", ");
  }
  function S(N) {
    return "(" + N + ")";
  }
  switch (E.type) {
    case "Point":
      return "POINT (" + T(E.coordinates) + ")";
    case "LineString":
      return "LINESTRING (" + m(E.coordinates) + ")";
    case "Polygon":
      return "POLYGON (" + C(E.coordinates) + ")";
    case "MultiPoint":
      return "MULTIPOINT (" + m(E.coordinates) + ")";
    case "MultiPolygon":
      return "MULTIPOLYGON (" + L(E.coordinates) + ")";
    case "MultiLineString":
      return "MULTILINESTRING (" + C(E.coordinates) + ")";
    case "GeometryCollection":
      return "GEOMETRYCOLLECTION (" + E.geometries.map(Uf).join(", ") + ")";
    default:
      throw new Error("stringify requires a valid GeoJSON Feature or geometry object as input");
  }
}
function Hv(E) {
  return E ? Uv(E) : null;
}
const Wv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  API: _r,
  ClusterLayer: e0,
  CustomOverlay: _f,
  DRAWTYPES: Ee,
  GeoUtils: ge,
  GridLayer: o0,
  HeatmapLayer: i0,
  IconLayer: Jp,
  LabelLayer: $p,
  LayerType: kp,
  LayerTypes: kv,
  LineLayer: Xp,
  Map: zv,
  PointLayer: jp,
  PolygonLayer: Yp,
  Request: kf,
  TextLayer: Kp,
  Viewer: Hp,
  createCircle: gf,
  createHtmlOverlay: es,
  createIcon: vf,
  createMarker: pf,
  createPolygon: yf,
  createPolyline: mf,
  init: Fv,
  wktToGeojson: Hv
}, Symbol.toStringTag, { value: "Module" }));
export {
  Wv as default
};
