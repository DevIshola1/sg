"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6764], {
        50499: function(t, e, r) {
            let i, n;
            r.d(e, {
                $0m: function() {
                    return Y
                },
                AWt: function() {
                    return ip
                },
                Au2: function() {
                    return iA
                },
                B95: function() {
                    return nd
                },
                Bvr: function() {
                    return iH
                },
                BwD: function() {
                    return to
                },
                D6H: function() {
                    return iX
                },
                DJo: function() {
                    return r9
                },
                DQe: function() {
                    return R
                },
                DaH: function() {
                    return G
                },
                DdM: function() {
                    return i7
                },
                E0T: function() {
                    return ts
                },
                E12: function() {
                    return iG
                },
                EJd: function() {
                    return ns
                },
                ENt: function() {
                    return ix
                },
                Ggh: function() {
                    return nv
                },
                GqV: function() {
                    return tr
                },
                H1S: function() {
                    return Z
                },
                H4H: function() {
                    return nu
                },
                HIp: function() {
                    return iS
                },
                HhN: function() {
                    return tf
                },
                IPd: function() {
                    return X
                },
                Ih8: function() {
                    return i3
                },
                IkP: function() {
                    return iu
                },
                JTI: function() {
                    return nh
                },
                KCv: function() {
                    return W
                },
                L5o: function() {
                    return i$
                },
                Llj: function() {
                    return iB
                },
                M_r: function() {
                    return i1
                },
                Maj: function() {
                    return iJ
                },
                NbI: function() {
                    return i_
                },
                NmC: function() {
                    return it
                },
                O6B: function() {
                    return nw
                },
                ONw: function() {
                    return ng
                },
                PMr: function() {
                    return nn
                },
                Q01: function() {
                    return no
                },
                Q8x: function() {
                    return iC
                },
                UGU: function() {
                    return j
                },
                WGe: function() {
                    return iE
                },
                X_B: function() {
                    return J
                },
                Y31: function() {
                    return ia
                },
                YmJ: function() {
                    return iw
                },
                Z26: function() {
                    return ni
                },
                Z42: function() {
                    return te
                },
                _HE: function() {
                    return iO
                },
                alS: function() {
                    return nc
                },
                bW6: function() {
                    return th
                },
                c4l: function() {
                    return ie
                },
                cOS: function() {
                    return iR
                },
                eGA: function() {
                    return tu
                },
                gn4: function() {
                    return tn
                },
                gpE: function() {
                    return iQ
                },
                guN: function() {
                    return k
                },
                h1R: function() {
                    return i5
                },
                hA9: function() {
                    return ic
                },
                hFY: function() {
                    return $
                },
                hHR: function() {
                    return nf
                },
                heJ: function() {
                    return ij
                },
                iPz: function() {
                    return ti
                },
                ing: function() {
                    return nr
                },
                jUY: function() {
                    return K
                },
                jdp: function() {
                    return iy
                },
                jvJ: function() {
                    return i8
                },
                k$y: function() {
                    return ta
                },
                kCb: function() {
                    return iW
                },
                m$A: function() {
                    return ib
                },
                naP: function() {
                    return ne
                },
                nfW: function() {
                    return na
                },
                o8e: function() {
                    return i0
                },
                ouN: function() {
                    return il
                },
                p8o: function() {
                    return nl
                },
                peR: function() {
                    return iI
                },
                qJM: function() {
                    return ih
                },
                qt8: function() {
                    return iZ
                },
                rFo: function() {
                    return np
                },
                rVF: function() {
                    return iv
                },
                rjm: function() {
                    return iM
                },
                uwg: function() {
                    return ny
                },
                vBi: function() {
                    return iN
                },
                wvx: function() {
                    return ir
                },
                xWS: function() {
                    return i4
                }
            });
            var o, s, u, f, h, a, l, c, d, p, m, g = r(52159),
                v = r(54574),
                A = r(25527),
                y = r(70053),
                b = r(61179),
                w = r(23518),
                M = r(67878),
                E = r(24861),
                S = r(67929),
                I = r(89414),
                N = r(39613),
                B = r(79641),
                x = r(16492),
                C = r(57711),
                _ = r(25566),
                O = r(9109).Buffer;

            function R(t) {
                let [e, r] = t.split(":");
                return {
                    namespace: e,
                    reference: r
                }
            }

            function k(t, e = []) {
                let r = [];
                return Object.keys(t).forEach(i => {
                    if (e.length && !e.includes(i)) return;
                    let n = t[i];
                    r.push(...n.accounts)
                }), r
            }

            function P(t, e) {
                return t.includes(":") ? [t] : e.chains || []
            }
            var U = Object.defineProperty,
                D = Object.getOwnPropertySymbols,
                T = Object.prototype.hasOwnProperty,
                F = Object.prototype.propertyIsEnumerable,
                L = (t, e, r) => e in t ? U(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                q = (t, e) => {
                    for (var r in e || (e = {})) T.call(e, r) && L(t, r, e[r]);
                    if (D)
                        for (var r of D(e)) F.call(e, r) && L(t, r, e[r]);
                    return t
                };
            let z = {
                reactNative: "react-native",
                node: "node",
                browser: "browser",
                unknown: "unknown"
            };

            function j() {
                return "u" > typeof _ && "u" > typeof _.versions && "u" > typeof _.versions.node
            }

            function H() {
                return !(0, A.getDocument)() && !!(0, A.getNavigator)() && "ReactNative" === navigator.product
            }

            function K() {
                return !j() && !!(0, A.getNavigator)() && !!(0, A.getDocument)()
            }

            function Q() {
                return H() ? z.reactNative : j() ? z.node : K() ? z.browser : z.unknown
            }

            function J() {
                var t;
                try {
                    return H() && "u" > typeof r.g && "u" > typeof(null == r.g ? void 0 : r.g.Application) ? null == (t = r.g.Application) ? void 0 : t.applicationId : void 0
                } catch {
                    return
                }
            }

            function G() {
                return (0, y.D)() || {
                    name: "",
                    description: "",
                    url: "",
                    icons: [""]
                }
            }

            function Y({
                protocol: t,
                version: e,
                relayUrl: i,
                sdkVersion: n,
                auth: o,
                projectId: s,
                useOnCloseEvent: u,
                bundleId: f
            }) {
                var h, a;
                let l;
                let c = i.split("?"),
                    d = function(t, e, i) {
                        let n = function() {
                                if (Q() === z.reactNative && "u" > typeof r.g && "u" > typeof(null == r.g ? void 0 : r.g.Platform)) {
                                    let {
                                        OS: t,
                                        Version: e
                                    } = r.g.Platform;
                                    return [t, e].join("-")
                                }
                                let t = (0, g.qY)();
                                if (null === t) return "unknown";
                                let e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
                                return "browser" === t.type ? [e, t.name, t.version].join("-") : [e, t.version].join("-")
                            }(),
                            o = function() {
                                var t;
                                let e = Q();
                                return e === z.browser ? [e, (null == (t = (0, A.getLocation)()) ? void 0 : t.host) || "unknown"].join(":") : e
                            }();
                        return [
                            [t, e].join("-"), ["js", i].join("-"), n, o
                        ].join("/")
                    }(t, e, n),
                    p = (h = c[1] || "", a = {
                        auth: o,
                        ua: d,
                        projectId: s,
                        useOnCloseEvent: u || void 0,
                        origin: f || void 0
                    }, l = q(q({}, l = b.parse(h)), a), h = b.stringify(l));
                return c[0] + "?" + p
            }

            function V(t, e) {
                return t.filter(t => e.includes(t)).length === t.length
            }

            function W(t) {
                return Object.fromEntries(t.entries())
            }

            function X(t) {
                return new Map(Object.entries(t))
            }

            function Z(t = v.FIVE_MINUTES, e) {
                let r, i, n;
                let o = (0, v.toMiliseconds)(t || v.FIVE_MINUTES);
                return {
                    resolve: t => {
                        n && r && (clearTimeout(n), r(t))
                    },
                    reject: t => {
                        n && i && (clearTimeout(n), i(t))
                    },
                    done: () => new Promise((t, s) => {
                        n = setTimeout(() => {
                            s(Error(e))
                        }, o), r = t, i = s
                    })
                }
            }

            function $(t, e, r) {
                return new Promise(async (i, n) => {
                    let o = setTimeout(() => n(Error(r)), e);
                    try {
                        let e = await t;
                        i(e)
                    } catch (t) {
                        n(t)
                    }
                    clearTimeout(o)
                })
            }

            function tt(t, e) {
                if ("string" == typeof e && e.startsWith(`${t}:`)) return e;
                if ("topic" === t.toLowerCase()) {
                    if ("string" != typeof e) throw Error('Value must be "string" for expirer target type: topic');
                    return `topic:${e}`
                }
                if ("id" === t.toLowerCase()) {
                    if ("number" != typeof e) throw Error('Value must be "number" for expirer target type: id');
                    return `id:${e}`
                }
                throw Error(`Unknown expirer target type: ${t}`)
            }

            function te(t) {
                return tt("topic", t)
            }

            function tr(t) {
                return tt("id", t)
            }

            function ti(t) {
                let [e, r] = t.split(":"), i = {
                    id: void 0,
                    topic: void 0
                };
                if ("topic" === e && "string" == typeof r) i.topic = r;
                else if ("id" === e && Number.isInteger(Number(r))) i.id = Number(r);
                else throw Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
                return i
            }

            function tn(t, e) {
                return (0, v.fromMiliseconds)((e || Date.now()) + (0, v.toMiliseconds)(t))
            }

            function to(t) {
                return Date.now() >= (0, v.toMiliseconds)(t)
            }

            function ts(t, e) {
                return `${t}${e?`:${e}`:""}`
            }

            function tu(t = [], e = []) {
                return [...new Set([...t, ...e])]
            }
            async function tf({
                id: t,
                topic: e,
                wcDeepLink: i
            }) {
                var n;
                try {
                    if (!i) return;
                    let o = "string" == typeof i ? JSON.parse(i) : i,
                        s = o ? .href;
                    if ("string" != typeof s) return;
                    s.endsWith("/") && (s = s.slice(0, -1));
                    let u = `${s}/wc?requestId=${t}&sessionTopic=${e}`,
                        f = Q();
                    if (f === z.browser) {
                        if (!(null != (n = (0, A.getDocument)()) && n.hasFocus())) {
                            console.warn("Document does not have focus, skipping deeplink.");
                            return
                        }
                        u.startsWith("https://") || u.startsWith("http://") ? window.open(u, "_blank", "noreferrer noopener") : window.open(u, "_self", "noreferrer noopener")
                    } else f === z.reactNative && "u" > typeof(null == r.g ? void 0 : r.g.Linking) && await r.g.Linking.openURL(u)
                } catch (t) {
                    console.error(t)
                }
            }
            async function th(t, e) {
                try {
                    return await t.getItem(e) || (K() ? localStorage.getItem(e) : void 0)
                } catch (t) {
                    console.error(t)
                }
            }

            function ta() {
                return "u" > typeof crypto && null != crypto && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, t => {
                    let e = 16 * Math.random() | 0;
                    return ("x" === t ? e : 3 & e | 8).toString(16)
                })
            }
            var tl = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {},
                tc = {
                    exports: {}
                };
            ! function() {
                var t = "input is invalid type",
                    e = "object" == typeof window,
                    r = e ? window : {};
                r.JS_SHA3_NO_WINDOW && (e = !1);
                var i = !e && "object" == typeof self;
                !r.JS_SHA3_NO_NODE_JS && "object" == typeof _ && _.versions && _.versions.node ? r = tl : i && (r = self);
                var n = !r.JS_SHA3_NO_COMMON_JS && tc.exports,
                    o = !r.JS_SHA3_NO_ARRAY_BUFFER && "u" > typeof ArrayBuffer,
                    s = "0123456789abcdef".split(""),
                    u = [4, 1024, 262144, 67108864],
                    f = [0, 8, 16, 24],
                    h = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                    a = [224, 256, 384, 512],
                    l = [128, 256],
                    c = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                    d = {
                        128: 168,
                        256: 136
                    };
                (r.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }), o && (r.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(t) {
                    return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                });
                for (var p = function(t, e, r) {
                        return function(i) {
                            return new C(t, e, t).update(i)[r]()
                        }
                    }, m = function(t, e, r) {
                        return function(i, n) {
                            return new C(t, e, n).update(i)[r]()
                        }
                    }, g = function(t, e, r) {
                        return function(e, i, n, o) {
                            return w["cshake" + t].update(e, i, n, o)[r]()
                        }
                    }, v = function(t, e, r) {
                        return function(e, i, n, o) {
                            return w["kmac" + t].update(e, i, n, o)[r]()
                        }
                    }, A = function(t, e, r, i) {
                        for (var n = 0; n < c.length; ++n) {
                            var o = c[n];
                            t[o] = e(r, i, o)
                        }
                        return t
                    }, y = function(t, e) {
                        var r = p(t, e, "hex");
                        return r.create = function() {
                            return new C(t, e, t)
                        }, r.update = function(t) {
                            return r.create().update(t)
                        }, A(r, p, t, e)
                    }, b = [{
                        name: "keccak",
                        padding: [1, 256, 65536, 16777216],
                        bits: a,
                        createMethod: y
                    }, {
                        name: "sha3",
                        padding: [6, 1536, 393216, 100663296],
                        bits: a,
                        createMethod: y
                    }, {
                        name: "shake",
                        padding: [31, 7936, 2031616, 520093696],
                        bits: l,
                        createMethod: function(t, e) {
                            var r = m(t, e, "hex");
                            return r.create = function(r) {
                                return new C(t, e, r)
                            }, r.update = function(t, e) {
                                return r.create(e).update(t)
                            }, A(r, m, t, e)
                        }
                    }, {
                        name: "cshake",
                        padding: u,
                        bits: l,
                        createMethod: function(t, e) {
                            var r = d[t],
                                i = g(t, e, "hex");
                            return i.create = function(i, n, o) {
                                return n || o ? new C(t, e, i).bytepad([n, o], r) : w["shake" + t].create(i)
                            }, i.update = function(t, e, r, n) {
                                return i.create(e, r, n).update(t)
                            }, A(i, g, t, e)
                        }
                    }, {
                        name: "kmac",
                        padding: u,
                        bits: l,
                        createMethod: function(t, e) {
                            var r = d[t],
                                i = v(t, e, "hex");
                            return i.create = function(i, n, o) {
                                return new O(t, e, n).bytepad(["KMAC", o], r).bytepad([i], r)
                            }, i.update = function(t, e, r, n) {
                                return i.create(t, r, n).update(e)
                            }, A(i, v, t, e)
                        }
                    }], w = {}, M = [], E = 0; E < b.length; ++E)
                    for (var S = b[E], I = S.bits, N = 0; N < I.length; ++N) {
                        var B = S.name + "_" + I[N];
                        if (M.push(B), w[B] = S.createMethod(I[N], S.padding), "sha3" !== S.name) {
                            var x = S.name + I[N];
                            M.push(x), w[x] = w[B]
                        }
                    }

                function C(t, e, r) {
                    this.blocks = [], this.s = [], this.padding = e, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
                    for (var i = 0; i < 50; ++i) this.s[i] = 0
                }

                function O(t, e, r) {
                    C.call(this, t, e, r)
                }
                C.prototype.update = function(e) {
                    if (this.finalized) throw Error("finalize already called");
                    var r, i = typeof e;
                    if ("string" !== i) {
                        if ("object" === i) {
                            if (null === e) throw Error(t);
                            if (o && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                            else if (!Array.isArray(e) && (!o || !ArrayBuffer.isView(e))) throw Error(t)
                        } else throw Error(t);
                        r = !0
                    }
                    for (var n, s, u = this.blocks, h = this.byteCount, a = e.length, l = this.blockCount, c = 0, d = this.s; c < a;) {
                        if (this.reset)
                            for (this.reset = !1, u[0] = this.block, n = 1; n < l + 1; ++n) u[n] = 0;
                        if (r)
                            for (n = this.start; c < a && n < h; ++c) u[n >> 2] |= e[c] << f[3 & n++];
                        else
                            for (n = this.start; c < a && n < h; ++c)(s = e.charCodeAt(c)) < 128 ? u[n >> 2] |= s << f[3 & n++] : (s < 2048 ? u[n >> 2] |= (192 | s >> 6) << f[3 & n++] : (s < 55296 || s >= 57344 ? u[n >> 2] |= (224 | s >> 12) << f[3 & n++] : (s = 65536 + ((1023 & s) << 10 | 1023 & e.charCodeAt(++c)), u[n >> 2] |= (240 | s >> 18) << f[3 & n++], u[n >> 2] |= (128 | s >> 12 & 63) << f[3 & n++]), u[n >> 2] |= (128 | s >> 6 & 63) << f[3 & n++]), u[n >> 2] |= (128 | 63 & s) << f[3 & n++]);
                        if (this.lastByteIndex = n, n >= h) {
                            for (this.start = n - h, this.block = u[l], n = 0; n < l; ++n) d[n] ^= u[n];
                            R(d), this.reset = !0
                        } else this.start = n
                    }
                    return this
                }, C.prototype.encode = function(t, e) {
                    var r = 255 & t,
                        i = 1,
                        n = [r];
                    for (t >>= 8, r = 255 & t; r > 0;) n.unshift(r), t >>= 8, r = 255 & t, ++i;
                    return e ? n.push(i) : n.unshift(i), this.update(n), n.length
                }, C.prototype.encodeString = function(e) {
                    var r, i = typeof e;
                    if ("string" !== i) {
                        if ("object" === i) {
                            if (null === e) throw Error(t);
                            if (o && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                            else if (!Array.isArray(e) && (!o || !ArrayBuffer.isView(e))) throw Error(t)
                        } else throw Error(t);
                        r = !0
                    }
                    var n = 0,
                        s = e.length;
                    if (r) n = s;
                    else
                        for (var u = 0; u < e.length; ++u) {
                            var f = e.charCodeAt(u);
                            f < 128 ? n += 1 : f < 2048 ? n += 2 : f < 55296 || f >= 57344 ? n += 3 : (f = 65536 + ((1023 & f) << 10 | 1023 & e.charCodeAt(++u)), n += 4)
                        }
                    return n += this.encode(8 * n), this.update(e), n
                }, C.prototype.bytepad = function(t, e) {
                    for (var r = this.encode(e), i = 0; i < t.length; ++i) r += this.encodeString(t[i]);
                    var n = e - r % e,
                        o = [];
                    return o.length = n, this.update(o), this
                }, C.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var t = this.blocks,
                            e = this.lastByteIndex,
                            r = this.blockCount,
                            i = this.s;
                        if (t[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount)
                            for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0;
                        for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) i[e] ^= t[e];
                        R(i)
                    }
                }, C.prototype.toString = C.prototype.hex = function() {
                    this.finalize();
                    for (var t, e = this.blockCount, r = this.s, i = this.outputBlocks, n = this.extraBytes, o = 0, u = 0, f = ""; u < i;) {
                        for (o = 0; o < e && u < i; ++o, ++u) f += s[(t = r[o]) >> 4 & 15] + s[15 & t] + s[t >> 12 & 15] + s[t >> 8 & 15] + s[t >> 20 & 15] + s[t >> 16 & 15] + s[t >> 28 & 15] + s[t >> 24 & 15];
                        u % e == 0 && (R(r), o = 0)
                    }
                    return n && (f += s[(t = r[o]) >> 4 & 15] + s[15 & t], n > 1 && (f += s[t >> 12 & 15] + s[t >> 8 & 15]), n > 2 && (f += s[t >> 20 & 15] + s[t >> 16 & 15])), f
                }, C.prototype.arrayBuffer = function() {
                    this.finalize();
                    var t, e = this.blockCount,
                        r = this.s,
                        i = this.outputBlocks,
                        n = this.extraBytes,
                        o = 0,
                        s = 0,
                        u = this.outputBits >> 3;
                    t = new ArrayBuffer(n ? i + 1 << 2 : u);
                    for (var f = new Uint32Array(t); s < i;) {
                        for (o = 0; o < e && s < i; ++o, ++s) f[s] = r[o];
                        s % e == 0 && R(r)
                    }
                    return n && (f[o] = r[o], t = t.slice(0, u)), t
                }, C.prototype.buffer = C.prototype.arrayBuffer, C.prototype.digest = C.prototype.array = function() {
                    this.finalize();
                    for (var t, e, r = this.blockCount, i = this.s, n = this.outputBlocks, o = this.extraBytes, s = 0, u = 0, f = []; u < n;) {
                        for (s = 0; s < r && u < n; ++s, ++u) t = u << 2, e = i[s], f[t] = 255 & e, f[t + 1] = e >> 8 & 255, f[t + 2] = e >> 16 & 255, f[t + 3] = e >> 24 & 255;
                        u % r == 0 && R(i)
                    }
                    return o && (t = u << 2, e = i[s], f[t] = 255 & e, o > 1 && (f[t + 1] = e >> 8 & 255), o > 2 && (f[t + 2] = e >> 16 & 255)), f
                }, O.prototype = new C, O.prototype.finalize = function() {
                    return this.encode(this.outputBits, !0), C.prototype.finalize.call(this)
                };
                var R = function(t) {
                    var e, r, i, n, o, s, u, f, a, l, c, d, p, m, g, v, A, y, b, w, M, E, S, I, N, B, x, C, _, O, R, k, P, U, D, T, F, L, q, z, j, H, K, Q, J, G, Y, V, W, X, Z, $, tt, te, tr, ti, tn, to, ts, tu, tf, th, ta;
                    for (i = 0; i < 48; i += 2) n = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], u = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], f = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], a = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], l = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], c = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], d = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48], p = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49], e = d ^ (s << 1 | u >>> 31), r = p ^ (u << 1 | s >>> 31), t[0] ^= e, t[1] ^= r, t[10] ^= e, t[11] ^= r, t[20] ^= e, t[21] ^= r, t[30] ^= e, t[31] ^= r, t[40] ^= e, t[41] ^= r, e = n ^ (f << 1 | a >>> 31), r = o ^ (a << 1 | f >>> 31), t[2] ^= e, t[3] ^= r, t[12] ^= e, t[13] ^= r, t[22] ^= e, t[23] ^= r, t[32] ^= e, t[33] ^= r, t[42] ^= e, t[43] ^= r, e = s ^ (l << 1 | c >>> 31), r = u ^ (c << 1 | l >>> 31), t[4] ^= e, t[5] ^= r, t[14] ^= e, t[15] ^= r, t[24] ^= e, t[25] ^= r, t[34] ^= e, t[35] ^= r, t[44] ^= e, t[45] ^= r, e = f ^ (d << 1 | p >>> 31), r = a ^ (p << 1 | d >>> 31), t[6] ^= e, t[7] ^= r, t[16] ^= e, t[17] ^= r, t[26] ^= e, t[27] ^= r, t[36] ^= e, t[37] ^= r, t[46] ^= e, t[47] ^= r, e = l ^ (n << 1 | o >>> 31), r = c ^ (o << 1 | n >>> 31), t[8] ^= e, t[9] ^= r, t[18] ^= e, t[19] ^= r, t[28] ^= e, t[29] ^= r, t[38] ^= e, t[39] ^= r, t[48] ^= e, t[49] ^= r, m = t[0], g = t[1], G = t[11] << 4 | t[10] >>> 28, Y = t[10] << 4 | t[11] >>> 28, C = t[20] << 3 | t[21] >>> 29, _ = t[21] << 3 | t[20] >>> 29, tu = t[31] << 9 | t[30] >>> 23, tf = t[30] << 9 | t[31] >>> 23, H = t[40] << 18 | t[41] >>> 14, K = t[41] << 18 | t[40] >>> 14, U = t[2] << 1 | t[3] >>> 31, D = t[3] << 1 | t[2] >>> 31, v = t[13] << 12 | t[12] >>> 20, A = t[12] << 12 | t[13] >>> 20, V = t[22] << 10 | t[23] >>> 22, W = t[23] << 10 | t[22] >>> 22, O = t[33] << 13 | t[32] >>> 19, R = t[32] << 13 | t[33] >>> 19, th = t[42] << 2 | t[43] >>> 30, ta = t[43] << 2 | t[42] >>> 30, te = t[5] << 30 | t[4] >>> 2, tr = t[4] << 30 | t[5] >>> 2, T = t[14] << 6 | t[15] >>> 26, F = t[15] << 6 | t[14] >>> 26, y = t[25] << 11 | t[24] >>> 21, b = t[24] << 11 | t[25] >>> 21, X = t[34] << 15 | t[35] >>> 17, Z = t[35] << 15 | t[34] >>> 17, k = t[45] << 29 | t[44] >>> 3, P = t[44] << 29 | t[45] >>> 3, I = t[6] << 28 | t[7] >>> 4, N = t[7] << 28 | t[6] >>> 4, ti = t[17] << 23 | t[16] >>> 9, tn = t[16] << 23 | t[17] >>> 9, L = t[26] << 25 | t[27] >>> 7, q = t[27] << 25 | t[26] >>> 7, w = t[36] << 21 | t[37] >>> 11, M = t[37] << 21 | t[36] >>> 11, $ = t[47] << 24 | t[46] >>> 8, tt = t[46] << 24 | t[47] >>> 8, Q = t[8] << 27 | t[9] >>> 5, J = t[9] << 27 | t[8] >>> 5, B = t[18] << 20 | t[19] >>> 12, x = t[19] << 20 | t[18] >>> 12, to = t[29] << 7 | t[28] >>> 25, ts = t[28] << 7 | t[29] >>> 25, z = t[38] << 8 | t[39] >>> 24, j = t[39] << 8 | t[38] >>> 24, E = t[48] << 14 | t[49] >>> 18, S = t[49] << 14 | t[48] >>> 18, t[0] = m ^ ~v & y, t[1] = g ^ ~A & b, t[10] = I ^ ~B & C, t[11] = N ^ ~x & _, t[20] = U ^ ~T & L, t[21] = D ^ ~F & q, t[30] = Q ^ ~G & V, t[31] = J ^ ~Y & W, t[40] = te ^ ~ti & to, t[41] = tr ^ ~tn & ts, t[2] = v ^ ~y & w, t[3] = A ^ ~b & M, t[12] = B ^ ~C & O, t[13] = x ^ ~_ & R, t[22] = T ^ ~L & z, t[23] = F ^ ~q & j, t[32] = G ^ ~V & X, t[33] = Y ^ ~W & Z, t[42] = ti ^ ~to & tu, t[43] = tn ^ ~ts & tf, t[4] = y ^ ~w & E, t[5] = b ^ ~M & S, t[14] = C ^ ~O & k, t[15] = _ ^ ~R & P, t[24] = L ^ ~z & H, t[25] = q ^ ~j & K, t[34] = V ^ ~X & $, t[35] = W ^ ~Z & tt, t[44] = to ^ ~tu & th, t[45] = ts ^ ~tf & ta, t[6] = w ^ ~E & m, t[7] = M ^ ~S & g, t[16] = O ^ ~k & I, t[17] = R ^ ~P & N, t[26] = z ^ ~H & U, t[27] = j ^ ~K & D, t[36] = X ^ ~$ & Q, t[37] = Z ^ ~tt & J, t[46] = tu ^ ~th & te, t[47] = tf ^ ~ta & tr, t[8] = E ^ ~m & v, t[9] = S ^ ~g & A, t[18] = k ^ ~I & B, t[19] = P ^ ~N & x, t[28] = H ^ ~U & T, t[29] = K ^ ~D & F, t[38] = $ ^ ~Q & G, t[39] = tt ^ ~J & Y, t[48] = th ^ ~te & ti, t[49] = ta ^ ~tr & tn, t[0] ^= h[i], t[1] ^= h[i + 1]
                };
                if (n) tc.exports = w;
                else
                    for (E = 0; E < M.length; ++E) r[M[E]] = w[M[E]]
            }();
            var td = tc.exports;
            let tp = !1,
                tm = !1,
                tg = {
                    debug: 1,
                    default: 2,
                    info: 2,
                    warning: 3,
                    error: 4,
                    off: 5
                },
                tv = tg.default,
                tA = null,
                ty = function() {
                    try {
                        let t = [];
                        if (["NFD", "NFC", "NFKD", "NFKC"].forEach(e => {
                                try {
                                    if ("test" !== "test".normalize(e)) throw Error("bad normalize")
                                } catch {
                                    t.push(e)
                                }
                            }), t.length) throw Error("missing " + t.join(", "));
                        if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw Error("broken implementation")
                    } catch (t) {
                        return t.message
                    }
                    return null
                }();
            (s = l || (l = {})).DEBUG = "DEBUG", s.INFO = "INFO", s.WARNING = "WARNING", s.ERROR = "ERROR", s.OFF = "OFF", (u = c || (c = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR", u.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", u.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", u.NETWORK_ERROR = "NETWORK_ERROR", u.SERVER_ERROR = "SERVER_ERROR", u.TIMEOUT = "TIMEOUT", u.BUFFER_OVERRUN = "BUFFER_OVERRUN", u.NUMERIC_FAULT = "NUMERIC_FAULT", u.MISSING_NEW = "MISSING_NEW", u.INVALID_ARGUMENT = "INVALID_ARGUMENT", u.MISSING_ARGUMENT = "MISSING_ARGUMENT", u.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", u.CALL_EXCEPTION = "CALL_EXCEPTION", u.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", u.NONCE_EXPIRED = "NONCE_EXPIRED", u.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", u.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", u.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", u.ACTION_REJECTED = "ACTION_REJECTED";
            let tb = "0123456789abcdef";
            class tw {
                constructor(t) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: t,
                        writable: !1
                    })
                }
                _log(t, e) {
                    let r = t.toLowerCase();
                    null == tg[r] && this.throwArgumentError("invalid log level name", "logLevel", t), tv > tg[r] || console.log.apply(console, e)
                }
                debug(...t) {
                    this._log(tw.levels.DEBUG, t)
                }
                info(...t) {
                    this._log(tw.levels.INFO, t)
                }
                warn(...t) {
                    this._log(tw.levels.WARNING, t)
                }
                makeError(t, e, r) {
                    if (tm) return this.makeError("censored error", e, {});
                    e || (e = tw.errors.UNKNOWN_ERROR), r || (r = {});
                    let i = [];
                    Object.keys(r).forEach(t => {
                        let e = r[t];
                        try {
                            if (e instanceof Uint8Array) {
                                let r = "";
                                for (let t = 0; t < e.length; t++) r += tb[e[t] >> 4] + tb[15 & e[t]];
                                i.push(t + "=Uint8Array(0x" + r + ")")
                            } else i.push(t + "=" + JSON.stringify(e))
                        } catch {
                            i.push(t + "=" + JSON.stringify(r[t].toString()))
                        }
                    }), i.push(`code=${e}`), i.push(`version=${this.version}`);
                    let n = t,
                        o = "";
                    switch (e) {
                        case c.NUMERIC_FAULT:
                            {
                                o = "NUMERIC_FAULT";
                                let e = t;
                                switch (e) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        o += "-" + e;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        o += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        o += "-unbound-result"
                                }
                                break
                            }
                        case c.CALL_EXCEPTION:
                        case c.INSUFFICIENT_FUNDS:
                        case c.MISSING_NEW:
                        case c.NONCE_EXPIRED:
                        case c.REPLACEMENT_UNDERPRICED:
                        case c.TRANSACTION_REPLACED:
                        case c.UNPREDICTABLE_GAS_LIMIT:
                            o = e
                    }
                    o && (t += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"), i.length && (t += " (" + i.join(", ") + ")");
                    let s = Error(t);
                    return s.reason = n, s.code = e, Object.keys(r).forEach(function(t) {
                        s[t] = r[t]
                    }), s
                }
                throwError(t, e, r) {
                    throw this.makeError(t, e, r)
                }
                throwArgumentError(t, e, r) {
                    return this.throwError(t, tw.errors.INVALID_ARGUMENT, {
                        argument: e,
                        value: r
                    })
                }
                assert(t, e, r, i) {
                    t || this.throwError(e, r, i)
                }
                assertArgument(t, e, r, i) {
                    t || this.throwArgumentError(e, r, i)
                }
                checkNormalize(t) {
                    ty && this.throwError("platform missing String.prototype.normalize", tw.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: ty
                    })
                }
                checkSafeUint53(t, e) {
                    "number" == typeof t && (null == e && (e = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(e, tw.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: t
                    }), t % 1 && this.throwError(e, tw.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: t
                    }))
                }
                checkArgumentCount(t, e, r) {
                    r = r ? ": " + r : "", t < e && this.throwError("missing argument" + r, tw.errors.MISSING_ARGUMENT, {
                        count: t,
                        expectedCount: e
                    }), t > e && this.throwError("too many arguments" + r, tw.errors.UNEXPECTED_ARGUMENT, {
                        count: t,
                        expectedCount: e
                    })
                }
                checkNew(t, e) {
                    (t === Object || null == t) && this.throwError("missing new", tw.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                checkAbstract(t, e) {
                    t === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", tw.errors.UNSUPPORTED_OPERATION, {
                        name: t.name,
                        operation: "new"
                    }) : (t === Object || null == t) && this.throwError("missing new", tw.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                static globalLogger() {
                    return tA || (tA = new tw("logger/5.7.0")), tA
                }
                static setCensorship(t, e) {
                    if (!t && e && this.globalLogger().throwError("cannot permanently disable censorship", tw.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), tp) {
                        if (!t) return;
                        this.globalLogger().throwError("error censorship permanent", tw.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    tm = !!t, tp = !!e
                }
                static setLogLevel(t) {
                    let e = tg[t.toLowerCase()];
                    if (null == e) {
                        tw.globalLogger().warn("invalid log level - " + t);
                        return
                    }
                    tv = e
                }
                static from(t) {
                    return new tw(t)
                }
            }
            tw.errors = c, tw.levels = l;
            let tM = new tw("bytes/5.7.0");

            function tE(t) {
                return !!t.toHexString
            }

            function tS(t) {
                return t.slice || (t.slice = function() {
                    let e = Array.prototype.slice.call(arguments);
                    return tS(new Uint8Array(Array.prototype.slice.apply(t, e)))
                }), t
            }

            function tI(t) {
                return "number" == typeof t && t == t && t % 1 == 0
            }

            function tN(t) {
                if (null == t) return !1;
                if (t.constructor === Uint8Array) return !0;
                if ("string" == typeof t || !tI(t.length) || t.length < 0) return !1;
                for (let e = 0; e < t.length; e++) {
                    let r = t[e];
                    if (!tI(r) || r < 0 || r >= 256) return !1
                }
                return !0
            }

            function tB(t, e) {
                if (e || (e = {}), "number" == typeof t) {
                    tM.checkSafeUint53(t, "invalid arrayify value");
                    let e = [];
                    for (; t;) e.unshift(255 & t), t = parseInt(String(t / 256));
                    return 0 === e.length && e.push(0), tS(new Uint8Array(e))
                }
                if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), tE(t) && (t = t.toHexString()), tx(t)) {
                    let r = t.substring(2);
                    r.length % 2 && ("left" === e.hexPad ? r = "0" + r : "right" === e.hexPad ? r += "0" : tM.throwArgumentError("hex data is odd-length", "value", t));
                    let i = [];
                    for (let t = 0; t < r.length; t += 2) i.push(parseInt(r.substring(t, t + 2), 16));
                    return tS(new Uint8Array(i))
                }
                return tN(t) ? tS(new Uint8Array(t)) : tM.throwArgumentError("invalid arrayify value", "value", t)
            }

            function tx(t, e) {
                return !("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/) || e && t.length !== 2 + 2 * e)
            }
            let tC = "0123456789abcdef";

            function t_(t, e) {
                if (e || (e = {}), "number" == typeof t) {
                    tM.checkSafeUint53(t, "invalid hexlify value");
                    let e = "";
                    for (; t;) e = tC[15 & t] + e, t = Math.floor(t / 16);
                    return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00"
                }
                if ("bigint" == typeof t) return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
                if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), tE(t)) return t.toHexString();
                if (tx(t)) return t.length % 2 && ("left" === e.hexPad ? t = "0x0" + t.substring(2) : "right" === e.hexPad ? t += "0" : tM.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
                if (tN(t)) {
                    let e = "0x";
                    for (let r = 0; r < t.length; r++) {
                        let i = t[r];
                        e += tC[(240 & i) >> 4] + tC[15 & i]
                    }
                    return e
                }
                return tM.throwArgumentError("invalid hexlify value", "value", t)
            }

            function tO(t, e, r) {
                return "string" != typeof t ? t = t_(t) : (!tx(t) || t.length % 2) && tM.throwArgumentError("invalid hexData", "value", t), e = 2 + 2 * e, null != r ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e)
            }

            function tR(t, e) {
                for ("string" != typeof t ? t = t_(t) : tx(t) || tM.throwArgumentError("invalid hex string", "value", t), t.length > 2 * e + 2 && tM.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * e + 2;) t = "0x0" + t.substring(2);
                return t
            }

            function tk(t) {
                let e = {
                    r: "0x",
                    s: "0x",
                    _vs: "0x",
                    recoveryParam: 0,
                    v: 0,
                    yParityAndS: "0x",
                    compact: "0x"
                };
                if (tx(t) && !(t.length % 2) || tN(t)) {
                    let r = tB(t);
                    64 === r.length ? (e.v = 27 + (r[32] >> 7), r[32] &= 127, e.r = t_(r.slice(0, 32)), e.s = t_(r.slice(32, 64))) : 65 === r.length ? (e.r = t_(r.slice(0, 32)), e.s = t_(r.slice(32, 64)), e.v = r[64]) : tM.throwArgumentError("invalid signature string", "signature", t), e.v < 27 && (0 === e.v || 1 === e.v ? e.v += 27 : tM.throwArgumentError("signature invalid v byte", "signature", t)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (r[32] |= 128), e._vs = t_(r.slice(32, 64))
                } else {
                    if (e.r = t.r, e.s = t.s, e.v = t.v, e.recoveryParam = t.recoveryParam, e._vs = t._vs, null != e._vs) {
                        let r = function(t, e) {
                            (t = tB(t)).length > e && tM.throwArgumentError("value out of range", "value", arguments[0]);
                            let r = new Uint8Array(e);
                            return r.set(t, e - t.length), tS(r)
                        }(tB(e._vs), 32);
                        e._vs = t_(r);
                        let i = r[0] >= 128 ? 1 : 0;
                        null == e.recoveryParam ? e.recoveryParam = i : e.recoveryParam !== i && tM.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), r[0] &= 127;
                        let n = t_(r);
                        null == e.s ? e.s = n : e.s !== n && tM.throwArgumentError("signature v mismatch _vs", "signature", t)
                    }
                    if (null == e.recoveryParam) null == e.v ? tM.throwArgumentError("signature missing v and recoveryParam", "signature", t) : 0 === e.v || 1 === e.v ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2;
                    else if (null == e.v) e.v = 27 + e.recoveryParam;
                    else {
                        let r = 0 === e.v || 1 === e.v ? e.v : 1 - e.v % 2;
                        e.recoveryParam !== r && tM.throwArgumentError("signature recoveryParam mismatch v", "signature", t)
                    }
                    null != e.r && tx(e.r) ? e.r = tR(e.r, 32) : tM.throwArgumentError("signature missing or invalid r", "signature", t), null != e.s && tx(e.s) ? e.s = tR(e.s, 32) : tM.throwArgumentError("signature missing or invalid s", "signature", t);
                    let r = tB(e.s);
                    r[0] >= 128 && tM.throwArgumentError("signature s out of range", "signature", t), e.recoveryParam && (r[0] |= 128);
                    let i = t_(r);
                    e._vs && (tx(e._vs) || tM.throwArgumentError("signature invalid _vs", "signature", t), e._vs = tR(e._vs, 32)), null == e._vs ? e._vs = i : e._vs !== i && tM.throwArgumentError("signature _vs mismatch v and s", "signature", t)
                }
                return e.yParityAndS = e._vs, e.compact = e.r + e.yParityAndS.substring(2), e
            }

            function tP(t) {
                return "0x" + td.keccak_256(tB(t))
            }
            var tU = {
                    exports: {}
                },
                tD = function(t) {
                    var e = t.default;
                    if ("function" == typeof e) {
                        var r = function() {
                            return e.apply(this, arguments)
                        };
                        r.prototype = e.prototype
                    } else r = {};
                    return Object.defineProperty(r, "__esModule", {
                        value: !0
                    }), Object.keys(t).forEach(function(e) {
                        var i = Object.getOwnPropertyDescriptor(t, e);
                        Object.defineProperty(r, e, i.get ? i : {
                            enumerable: !0,
                            get: function() {
                                return t[e]
                            }
                        })
                    }), r
                }(Object.freeze({
                    __proto__: null,
                    default: {}
                }));
            ! function(t, e) {
                function r(t, e) {
                    if (!t) throw Error(e || "Assertion failed")
                }

                function i(t, e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }

                function n(t, e, r) {
                    if (n.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && (("le" === e || "be" === e) && (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                }
                "object" == typeof t ? t.exports = n : e.BN = n, n.BN = n, n.wordSize = 26;
                try {
                    a = "u" > typeof window && "u" > typeof window.Buffer ? window.Buffer : tD.Buffer
                } catch {}

                function o(t, e) {
                    var i = t.charCodeAt(e);
                    return i >= 48 && i <= 57 ? i - 48 : i >= 65 && i <= 70 ? i - 55 : i >= 97 && i <= 102 ? i - 87 : void r(!1, "Invalid character in " + t)
                }

                function s(t, e, r) {
                    var i = o(t, r);
                    return r - 1 >= e && (i |= o(t, r - 1) << 4), i
                }

                function u(t, e, i, n) {
                    for (var o = 0, s = 0, u = Math.min(t.length, i), f = e; f < u; f++) {
                        var h = t.charCodeAt(f) - 48;
                        o *= n, s = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h, r(h >= 0 && s < n, "Invalid character"), o += s
                    }
                    return o
                }

                function f(t, e) {
                    t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                }
                if (n.isBN = function(t) {
                        return t instanceof n || null !== t && "object" == typeof t && t.constructor.wordSize === n.wordSize && Array.isArray(t.words)
                    }, n.max = function(t, e) {
                        return t.cmp(e) > 0 ? t : e
                    }, n.min = function(t, e) {
                        return 0 > t.cmp(e) ? t : e
                    }, n.prototype._init = function(t, e, i) {
                        if ("number" == typeof t) return this._initNumber(t, e, i);
                        if ("object" == typeof t) return this._initArray(t, e, i);
                        "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
                        var n = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === e ? this._parseHex(t, n, i) : (this._parseBase(t, e, n), "le" === i && this._initArray(this.toArray(), e, i)))
                    }, n.prototype._initNumber = function(t, e, i) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === i && this._initArray(this.toArray(), e, i)
                    }, n.prototype._initArray = function(t, e, i) {
                        if (r("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = Array(this.length);
                        for (var n = 0; n < this.length; n++) this.words[n] = 0;
                        var o, s, u = 0;
                        if ("be" === i)
                            for (n = t.length - 1, o = 0; n >= 0; n -= 3) s = t[n] | t[n - 1] << 8 | t[n - 2] << 16, this.words[o] |= s << u & 67108863, this.words[o + 1] = s >>> 26 - u & 67108863, (u += 24) >= 26 && (u -= 26, o++);
                        else if ("le" === i)
                            for (n = 0, o = 0; n < t.length; n += 3) s = t[n] | t[n + 1] << 8 | t[n + 2] << 16, this.words[o] |= s << u & 67108863, this.words[o + 1] = s >>> 26 - u & 67108863, (u += 24) >= 26 && (u -= 26, o++);
                        return this._strip()
                    }, n.prototype._parseHex = function(t, e, r) {
                        this.length = Math.ceil((t.length - e) / 6), this.words = Array(this.length);
                        for (var i = 0; i < this.length; i++) this.words[i] = 0;
                        var n, o = 0,
                            u = 0;
                        if ("be" === r)
                            for (i = t.length - 1; i >= e; i -= 2) n = s(t, e, i) << o, this.words[u] |= 67108863 & n, o >= 18 ? (o -= 18, u += 1, this.words[u] |= n >>> 26) : o += 8;
                        else
                            for (i = (t.length - e) % 2 == 0 ? e + 1 : e; i < t.length; i += 2) n = s(t, e, i) << o, this.words[u] |= 67108863 & n, o >= 18 ? (o -= 18, u += 1, this.words[u] |= n >>> 26) : o += 8;
                        this._strip()
                    }, n.prototype._parseBase = function(t, e, r) {
                        this.words = [0], this.length = 1;
                        for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
                        i--, n = n / e | 0;
                        for (var o = t.length - r, s = o % i, f = Math.min(o, o - s) + r, h = 0, a = r; a < f; a += i) h = u(t, a, a + i, e), this.imuln(n), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
                        if (0 !== s) {
                            var l = 1;
                            for (h = u(t, a, t.length, e), a = 0; a < s; a++) l *= e;
                            this.imuln(l), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h)
                        }
                        this._strip()
                    }, n.prototype.copy = function(t) {
                        t.words = Array(this.length);
                        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, n.prototype._move = function(t) {
                        f(t, this)
                    }, n.prototype.clone = function() {
                        var t = new n(null);
                        return this.copy(t), t
                    }, n.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, n.prototype._strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, n.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, "u" > typeof Symbol && "function" == typeof Symbol.for) try {
                    n.prototype[Symbol.for("nodejs.util.inspect.custom")] = h
                } catch {
                    n.prototype.inspect = h
                } else n.prototype.inspect = h;

                function h() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                }
                var a, l = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    c = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    d = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function p(t, e, r) {
                    r.negative = e.negative ^ t.negative;
                    var i = t.length + e.length | 0;
                    r.length = i, i = i - 1 | 0;
                    var n = 0 | t.words[0],
                        o = 0 | e.words[0],
                        s = n * o,
                        u = 67108863 & s,
                        f = s / 67108864 | 0;
                    r.words[0] = u;
                    for (var h = 1; h < i; h++) {
                        for (var a = f >>> 26, l = 67108863 & f, c = Math.min(h, e.length - 1), d = Math.max(0, h - t.length + 1); d <= c; d++) {
                            var p = h - d | 0;
                            a += (s = (n = 0 | t.words[p]) * (o = 0 | e.words[d]) + l) / 67108864 | 0, l = 67108863 & s
                        }
                        r.words[h] = 0 | l, f = 0 | a
                    }
                    return 0 !== f ? r.words[h] = 0 | f : r.length--, r._strip()
                }
                n.prototype.toString = function(t, e) {
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        i = "";
                        for (var i, n = 0, o = 0, s = 0; s < this.length; s++) {
                            var u = this.words[s],
                                f = ((u << n | o) & 16777215).toString(16);
                            o = u >>> 24 - n & 16777215, (n += 2) >= 26 && (n -= 26, s--), i = 0 !== o || s !== this.length - 1 ? l[6 - f.length] + f + i : f + i
                        }
                        for (0 !== o && (i = o.toString(16) + i); i.length % e != 0;) i = "0" + i;
                        return 0 !== this.negative && (i = "-" + i), i
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var h = c[t],
                            a = d[t];
                        i = "";
                        var p = this.clone();
                        for (p.negative = 0; !p.isZero();) {
                            var m = p.modrn(a).toString(t);
                            i = (p = p.idivn(a)).isZero() ? m + i : l[h - m.length] + m + i
                        }
                        for (this.isZero() && (i = "0" + i); i.length % e != 0;) i = "0" + i;
                        return 0 !== this.negative && (i = "-" + i), i
                    }
                    r(!1, "Base should be between 2 and 36")
                }, n.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, n.prototype.toJSON = function() {
                    return this.toString(16, 2)
                }, a && (n.prototype.toBuffer = function(t, e) {
                    return this.toArrayLike(a, t, e)
                }), n.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                }, n.prototype.toArrayLike = function(t, e, i) {
                    this._strip();
                    var n = this.byteLength(),
                        o = i || Math.max(1, n);
                    r(n <= o, "byte array longer than desired length"), r(o > 0, "Requested array length <= 0");
                    var s = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
                    return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, n), s
                }, n.prototype._toArrayLikeLE = function(t, e) {
                    for (var r = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
                        var s = this.words[n] << o | i;
                        t[r++] = 255 & s, r < t.length && (t[r++] = s >> 8 & 255), r < t.length && (t[r++] = s >> 16 & 255), 6 === o ? (r < t.length && (t[r++] = s >> 24 & 255), i = 0, o = 0) : (i = s >>> 24, o += 2)
                    }
                    if (r < t.length)
                        for (t[r++] = i; r < t.length;) t[r++] = 0
                }, n.prototype._toArrayLikeBE = function(t, e) {
                    for (var r = t.length - 1, i = 0, n = 0, o = 0; n < this.length; n++) {
                        var s = this.words[n] << o | i;
                        t[r--] = 255 & s, r >= 0 && (t[r--] = s >> 8 & 255), r >= 0 && (t[r--] = s >> 16 & 255), 6 === o ? (r >= 0 && (t[r--] = s >> 24 & 255), i = 0, o = 0) : (i = s >>> 24, o += 2)
                    }
                    if (r >= 0)
                        for (t[r--] = i; r >= 0;) t[r--] = 0
                }, Math.clz32 ? n.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : n.prototype._countBits = function(t) {
                    var e = t,
                        r = 0;
                    return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                }, n.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        r = 0;
                    return 8191 & e || (r += 13, e >>>= 13), 127 & e || (r += 7, e >>>= 7), 15 & e || (r += 4, e >>>= 4), 3 & e || (r += 2, e >>>= 2), 1 & e || r++, r
                }, n.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return (this.length - 1) * 26 + e
                }, n.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var r = this._zeroBits(this.words[e]);
                        if (t += r, 26 !== r) break
                    }
                    return t
                }, n.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, n.prototype.toTwos = function(t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }, n.prototype.fromTwos = function(t) {
                    return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }, n.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, n.prototype.neg = function() {
                    return this.clone().ineg()
                }, n.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, n.prototype.iuor = function(t) {
                    for (; this.length < t.length;) this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                    return this._strip()
                }, n.prototype.ior = function(t) {
                    return r((this.negative | t.negative) == 0), this.iuor(t)
                }, n.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, n.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, n.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                    return this.length = e.length, this._strip()
                }, n.prototype.iand = function(t) {
                    return r((this.negative | t.negative) == 0), this.iuand(t)
                }, n.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, n.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, n.prototype.iuxor = function(t) {
                    var e, r;
                    this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                    for (var i = 0; i < r.length; i++) this.words[i] = e.words[i] ^ r.words[i];
                    if (this !== e)
                        for (; i < e.length; i++) this.words[i] = e.words[i];
                    return this.length = e.length, this._strip()
                }, n.prototype.ixor = function(t) {
                    return r((this.negative | t.negative) == 0), this.iuxor(t)
                }, n.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, n.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, n.prototype.inotn = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        i = t % 26;
                    this._expand(e), i > 0 && e--;
                    for (var n = 0; n < e; n++) this.words[n] = 67108863 & ~this.words[n];
                    return i > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - i), this._strip()
                }, n.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, n.prototype.setn = function(t, e) {
                    r("number" == typeof t && t >= 0);
                    var i = t / 26 | 0,
                        n = t % 26;
                    return this._expand(i + 1), e ? this.words[i] = this.words[i] | 1 << n : this.words[i] = this.words[i] & ~(1 << n), this._strip()
                }, n.prototype.iadd = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (r = this, i = t) : (r = t, i = this);
                    for (var e, r, i, n = 0, o = 0; o < i.length; o++) e = (0 | r.words[o]) + (0 | i.words[o]) + n, this.words[o] = 67108863 & e, n = e >>> 26;
                    for (; 0 !== n && o < r.length; o++) e = (0 | r.words[o]) + n, this.words[o] = 67108863 & e, n = e >>> 26;
                    if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o];
                    return this
                }, n.prototype.add = function(t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                }, n.prototype.isub = function(t) {
                    if (0 !== t.negative) {
                        t.negative = 0;
                        var e, r, i = this.iadd(t);
                        return t.negative = 1, i._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                    var n = this.cmp(t);
                    if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    n > 0 ? (e = this, r = t) : (e = t, r = this);
                    for (var o = 0, s = 0; s < r.length; s++) o = (i = (0 | e.words[s]) - (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & i;
                    for (; 0 !== o && s < e.length; s++) o = (i = (0 | e.words[s]) + o) >> 26, this.words[s] = 67108863 & i;
                    if (0 === o && s < e.length && e !== this)
                        for (; s < e.length; s++) this.words[s] = e.words[s];
                    return this.length = Math.max(this.length, s), e !== this && (this.negative = 1), this._strip()
                }, n.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var m = function(t, e, r) {
                    var i, n, o, s = t.words,
                        u = e.words,
                        f = r.words,
                        h = 0,
                        a = 0 | s[0],
                        l = 8191 & a,
                        c = a >>> 13,
                        d = 0 | s[1],
                        p = 8191 & d,
                        m = d >>> 13,
                        g = 0 | s[2],
                        v = 8191 & g,
                        A = g >>> 13,
                        y = 0 | s[3],
                        b = 8191 & y,
                        w = y >>> 13,
                        M = 0 | s[4],
                        E = 8191 & M,
                        S = M >>> 13,
                        I = 0 | s[5],
                        N = 8191 & I,
                        B = I >>> 13,
                        x = 0 | s[6],
                        C = 8191 & x,
                        _ = x >>> 13,
                        O = 0 | s[7],
                        R = 8191 & O,
                        k = O >>> 13,
                        P = 0 | s[8],
                        U = 8191 & P,
                        D = P >>> 13,
                        T = 0 | s[9],
                        F = 8191 & T,
                        L = T >>> 13,
                        q = 0 | u[0],
                        z = 8191 & q,
                        j = q >>> 13,
                        H = 0 | u[1],
                        K = 8191 & H,
                        Q = H >>> 13,
                        J = 0 | u[2],
                        G = 8191 & J,
                        Y = J >>> 13,
                        V = 0 | u[3],
                        W = 8191 & V,
                        X = V >>> 13,
                        Z = 0 | u[4],
                        $ = 8191 & Z,
                        tt = Z >>> 13,
                        te = 0 | u[5],
                        tr = 8191 & te,
                        ti = te >>> 13,
                        tn = 0 | u[6],
                        to = 8191 & tn,
                        ts = tn >>> 13,
                        tu = 0 | u[7],
                        tf = 8191 & tu,
                        th = tu >>> 13,
                        ta = 0 | u[8],
                        tl = 8191 & ta,
                        tc = ta >>> 13,
                        td = 0 | u[9],
                        tp = 8191 & td,
                        tm = td >>> 13;
                    r.negative = t.negative ^ e.negative, r.length = 19, i = Math.imul(l, z), n = (n = Math.imul(l, j)) + Math.imul(c, z) | 0, o = Math.imul(c, j);
                    var tg = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tg >>> 26) | 0, tg &= 67108863, i = Math.imul(p, z), n = (n = Math.imul(p, j)) + Math.imul(m, z) | 0, o = Math.imul(m, j), i = i + Math.imul(l, K) | 0, n = (n = n + Math.imul(l, Q) | 0) + Math.imul(c, K) | 0, o = o + Math.imul(c, Q) | 0;
                    var tv = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tv >>> 26) | 0, tv &= 67108863, i = Math.imul(v, z), n = (n = Math.imul(v, j)) + Math.imul(A, z) | 0, o = Math.imul(A, j), i = i + Math.imul(p, K) | 0, n = (n = n + Math.imul(p, Q) | 0) + Math.imul(m, K) | 0, o = o + Math.imul(m, Q) | 0, i = i + Math.imul(l, G) | 0, n = (n = n + Math.imul(l, Y) | 0) + Math.imul(c, G) | 0, o = o + Math.imul(c, Y) | 0;
                    var tA = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tA >>> 26) | 0, tA &= 67108863, i = Math.imul(b, z), n = (n = Math.imul(b, j)) + Math.imul(w, z) | 0, o = Math.imul(w, j), i = i + Math.imul(v, K) | 0, n = (n = n + Math.imul(v, Q) | 0) + Math.imul(A, K) | 0, o = o + Math.imul(A, Q) | 0, i = i + Math.imul(p, G) | 0, n = (n = n + Math.imul(p, Y) | 0) + Math.imul(m, G) | 0, o = o + Math.imul(m, Y) | 0, i = i + Math.imul(l, W) | 0, n = (n = n + Math.imul(l, X) | 0) + Math.imul(c, W) | 0, o = o + Math.imul(c, X) | 0;
                    var ty = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (ty >>> 26) | 0, ty &= 67108863, i = Math.imul(E, z), n = (n = Math.imul(E, j)) + Math.imul(S, z) | 0, o = Math.imul(S, j), i = i + Math.imul(b, K) | 0, n = (n = n + Math.imul(b, Q) | 0) + Math.imul(w, K) | 0, o = o + Math.imul(w, Q) | 0, i = i + Math.imul(v, G) | 0, n = (n = n + Math.imul(v, Y) | 0) + Math.imul(A, G) | 0, o = o + Math.imul(A, Y) | 0, i = i + Math.imul(p, W) | 0, n = (n = n + Math.imul(p, X) | 0) + Math.imul(m, W) | 0, o = o + Math.imul(m, X) | 0, i = i + Math.imul(l, $) | 0, n = (n = n + Math.imul(l, tt) | 0) + Math.imul(c, $) | 0, o = o + Math.imul(c, tt) | 0;
                    var tb = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tb >>> 26) | 0, tb &= 67108863, i = Math.imul(N, z), n = (n = Math.imul(N, j)) + Math.imul(B, z) | 0, o = Math.imul(B, j), i = i + Math.imul(E, K) | 0, n = (n = n + Math.imul(E, Q) | 0) + Math.imul(S, K) | 0, o = o + Math.imul(S, Q) | 0, i = i + Math.imul(b, G) | 0, n = (n = n + Math.imul(b, Y) | 0) + Math.imul(w, G) | 0, o = o + Math.imul(w, Y) | 0, i = i + Math.imul(v, W) | 0, n = (n = n + Math.imul(v, X) | 0) + Math.imul(A, W) | 0, o = o + Math.imul(A, X) | 0, i = i + Math.imul(p, $) | 0, n = (n = n + Math.imul(p, tt) | 0) + Math.imul(m, $) | 0, o = o + Math.imul(m, tt) | 0, i = i + Math.imul(l, tr) | 0, n = (n = n + Math.imul(l, ti) | 0) + Math.imul(c, tr) | 0, o = o + Math.imul(c, ti) | 0;
                    var tw = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tw >>> 26) | 0, tw &= 67108863, i = Math.imul(C, z), n = (n = Math.imul(C, j)) + Math.imul(_, z) | 0, o = Math.imul(_, j), i = i + Math.imul(N, K) | 0, n = (n = n + Math.imul(N, Q) | 0) + Math.imul(B, K) | 0, o = o + Math.imul(B, Q) | 0, i = i + Math.imul(E, G) | 0, n = (n = n + Math.imul(E, Y) | 0) + Math.imul(S, G) | 0, o = o + Math.imul(S, Y) | 0, i = i + Math.imul(b, W) | 0, n = (n = n + Math.imul(b, X) | 0) + Math.imul(w, W) | 0, o = o + Math.imul(w, X) | 0, i = i + Math.imul(v, $) | 0, n = (n = n + Math.imul(v, tt) | 0) + Math.imul(A, $) | 0, o = o + Math.imul(A, tt) | 0, i = i + Math.imul(p, tr) | 0, n = (n = n + Math.imul(p, ti) | 0) + Math.imul(m, tr) | 0, o = o + Math.imul(m, ti) | 0, i = i + Math.imul(l, to) | 0, n = (n = n + Math.imul(l, ts) | 0) + Math.imul(c, to) | 0, o = o + Math.imul(c, ts) | 0;
                    var tM = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tM >>> 26) | 0, tM &= 67108863, i = Math.imul(R, z), n = (n = Math.imul(R, j)) + Math.imul(k, z) | 0, o = Math.imul(k, j), i = i + Math.imul(C, K) | 0, n = (n = n + Math.imul(C, Q) | 0) + Math.imul(_, K) | 0, o = o + Math.imul(_, Q) | 0, i = i + Math.imul(N, G) | 0, n = (n = n + Math.imul(N, Y) | 0) + Math.imul(B, G) | 0, o = o + Math.imul(B, Y) | 0, i = i + Math.imul(E, W) | 0, n = (n = n + Math.imul(E, X) | 0) + Math.imul(S, W) | 0, o = o + Math.imul(S, X) | 0, i = i + Math.imul(b, $) | 0, n = (n = n + Math.imul(b, tt) | 0) + Math.imul(w, $) | 0, o = o + Math.imul(w, tt) | 0, i = i + Math.imul(v, tr) | 0, n = (n = n + Math.imul(v, ti) | 0) + Math.imul(A, tr) | 0, o = o + Math.imul(A, ti) | 0, i = i + Math.imul(p, to) | 0, n = (n = n + Math.imul(p, ts) | 0) + Math.imul(m, to) | 0, o = o + Math.imul(m, ts) | 0, i = i + Math.imul(l, tf) | 0, n = (n = n + Math.imul(l, th) | 0) + Math.imul(c, tf) | 0, o = o + Math.imul(c, th) | 0;
                    var tE = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tE >>> 26) | 0, tE &= 67108863, i = Math.imul(U, z), n = (n = Math.imul(U, j)) + Math.imul(D, z) | 0, o = Math.imul(D, j), i = i + Math.imul(R, K) | 0, n = (n = n + Math.imul(R, Q) | 0) + Math.imul(k, K) | 0, o = o + Math.imul(k, Q) | 0, i = i + Math.imul(C, G) | 0, n = (n = n + Math.imul(C, Y) | 0) + Math.imul(_, G) | 0, o = o + Math.imul(_, Y) | 0, i = i + Math.imul(N, W) | 0, n = (n = n + Math.imul(N, X) | 0) + Math.imul(B, W) | 0, o = o + Math.imul(B, X) | 0, i = i + Math.imul(E, $) | 0, n = (n = n + Math.imul(E, tt) | 0) + Math.imul(S, $) | 0, o = o + Math.imul(S, tt) | 0, i = i + Math.imul(b, tr) | 0, n = (n = n + Math.imul(b, ti) | 0) + Math.imul(w, tr) | 0, o = o + Math.imul(w, ti) | 0, i = i + Math.imul(v, to) | 0, n = (n = n + Math.imul(v, ts) | 0) + Math.imul(A, to) | 0, o = o + Math.imul(A, ts) | 0, i = i + Math.imul(p, tf) | 0, n = (n = n + Math.imul(p, th) | 0) + Math.imul(m, tf) | 0, o = o + Math.imul(m, th) | 0, i = i + Math.imul(l, tl) | 0, n = (n = n + Math.imul(l, tc) | 0) + Math.imul(c, tl) | 0, o = o + Math.imul(c, tc) | 0;
                    var tS = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tS >>> 26) | 0, tS &= 67108863, i = Math.imul(F, z), n = (n = Math.imul(F, j)) + Math.imul(L, z) | 0, o = Math.imul(L, j), i = i + Math.imul(U, K) | 0, n = (n = n + Math.imul(U, Q) | 0) + Math.imul(D, K) | 0, o = o + Math.imul(D, Q) | 0, i = i + Math.imul(R, G) | 0, n = (n = n + Math.imul(R, Y) | 0) + Math.imul(k, G) | 0, o = o + Math.imul(k, Y) | 0, i = i + Math.imul(C, W) | 0, n = (n = n + Math.imul(C, X) | 0) + Math.imul(_, W) | 0, o = o + Math.imul(_, X) | 0, i = i + Math.imul(N, $) | 0, n = (n = n + Math.imul(N, tt) | 0) + Math.imul(B, $) | 0, o = o + Math.imul(B, tt) | 0, i = i + Math.imul(E, tr) | 0, n = (n = n + Math.imul(E, ti) | 0) + Math.imul(S, tr) | 0, o = o + Math.imul(S, ti) | 0, i = i + Math.imul(b, to) | 0, n = (n = n + Math.imul(b, ts) | 0) + Math.imul(w, to) | 0, o = o + Math.imul(w, ts) | 0, i = i + Math.imul(v, tf) | 0, n = (n = n + Math.imul(v, th) | 0) + Math.imul(A, tf) | 0, o = o + Math.imul(A, th) | 0, i = i + Math.imul(p, tl) | 0, n = (n = n + Math.imul(p, tc) | 0) + Math.imul(m, tl) | 0, o = o + Math.imul(m, tc) | 0, i = i + Math.imul(l, tp) | 0, n = (n = n + Math.imul(l, tm) | 0) + Math.imul(c, tp) | 0, o = o + Math.imul(c, tm) | 0;
                    var tI = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tI >>> 26) | 0, tI &= 67108863, i = Math.imul(F, K), n = (n = Math.imul(F, Q)) + Math.imul(L, K) | 0, o = Math.imul(L, Q), i = i + Math.imul(U, G) | 0, n = (n = n + Math.imul(U, Y) | 0) + Math.imul(D, G) | 0, o = o + Math.imul(D, Y) | 0, i = i + Math.imul(R, W) | 0, n = (n = n + Math.imul(R, X) | 0) + Math.imul(k, W) | 0, o = o + Math.imul(k, X) | 0, i = i + Math.imul(C, $) | 0, n = (n = n + Math.imul(C, tt) | 0) + Math.imul(_, $) | 0, o = o + Math.imul(_, tt) | 0, i = i + Math.imul(N, tr) | 0, n = (n = n + Math.imul(N, ti) | 0) + Math.imul(B, tr) | 0, o = o + Math.imul(B, ti) | 0, i = i + Math.imul(E, to) | 0, n = (n = n + Math.imul(E, ts) | 0) + Math.imul(S, to) | 0, o = o + Math.imul(S, ts) | 0, i = i + Math.imul(b, tf) | 0, n = (n = n + Math.imul(b, th) | 0) + Math.imul(w, tf) | 0, o = o + Math.imul(w, th) | 0, i = i + Math.imul(v, tl) | 0, n = (n = n + Math.imul(v, tc) | 0) + Math.imul(A, tl) | 0, o = o + Math.imul(A, tc) | 0, i = i + Math.imul(p, tp) | 0, n = (n = n + Math.imul(p, tm) | 0) + Math.imul(m, tp) | 0, o = o + Math.imul(m, tm) | 0;
                    var tN = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tN >>> 26) | 0, tN &= 67108863, i = Math.imul(F, G), n = (n = Math.imul(F, Y)) + Math.imul(L, G) | 0, o = Math.imul(L, Y), i = i + Math.imul(U, W) | 0, n = (n = n + Math.imul(U, X) | 0) + Math.imul(D, W) | 0, o = o + Math.imul(D, X) | 0, i = i + Math.imul(R, $) | 0, n = (n = n + Math.imul(R, tt) | 0) + Math.imul(k, $) | 0, o = o + Math.imul(k, tt) | 0, i = i + Math.imul(C, tr) | 0, n = (n = n + Math.imul(C, ti) | 0) + Math.imul(_, tr) | 0, o = o + Math.imul(_, ti) | 0, i = i + Math.imul(N, to) | 0, n = (n = n + Math.imul(N, ts) | 0) + Math.imul(B, to) | 0, o = o + Math.imul(B, ts) | 0, i = i + Math.imul(E, tf) | 0, n = (n = n + Math.imul(E, th) | 0) + Math.imul(S, tf) | 0, o = o + Math.imul(S, th) | 0, i = i + Math.imul(b, tl) | 0, n = (n = n + Math.imul(b, tc) | 0) + Math.imul(w, tl) | 0, o = o + Math.imul(w, tc) | 0, i = i + Math.imul(v, tp) | 0, n = (n = n + Math.imul(v, tm) | 0) + Math.imul(A, tp) | 0, o = o + Math.imul(A, tm) | 0;
                    var tB = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tB >>> 26) | 0, tB &= 67108863, i = Math.imul(F, W), n = (n = Math.imul(F, X)) + Math.imul(L, W) | 0, o = Math.imul(L, X), i = i + Math.imul(U, $) | 0, n = (n = n + Math.imul(U, tt) | 0) + Math.imul(D, $) | 0, o = o + Math.imul(D, tt) | 0, i = i + Math.imul(R, tr) | 0, n = (n = n + Math.imul(R, ti) | 0) + Math.imul(k, tr) | 0, o = o + Math.imul(k, ti) | 0, i = i + Math.imul(C, to) | 0, n = (n = n + Math.imul(C, ts) | 0) + Math.imul(_, to) | 0, o = o + Math.imul(_, ts) | 0, i = i + Math.imul(N, tf) | 0, n = (n = n + Math.imul(N, th) | 0) + Math.imul(B, tf) | 0, o = o + Math.imul(B, th) | 0, i = i + Math.imul(E, tl) | 0, n = (n = n + Math.imul(E, tc) | 0) + Math.imul(S, tl) | 0, o = o + Math.imul(S, tc) | 0, i = i + Math.imul(b, tp) | 0, n = (n = n + Math.imul(b, tm) | 0) + Math.imul(w, tp) | 0, o = o + Math.imul(w, tm) | 0;
                    var tx = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tx >>> 26) | 0, tx &= 67108863, i = Math.imul(F, $), n = (n = Math.imul(F, tt)) + Math.imul(L, $) | 0, o = Math.imul(L, tt), i = i + Math.imul(U, tr) | 0, n = (n = n + Math.imul(U, ti) | 0) + Math.imul(D, tr) | 0, o = o + Math.imul(D, ti) | 0, i = i + Math.imul(R, to) | 0, n = (n = n + Math.imul(R, ts) | 0) + Math.imul(k, to) | 0, o = o + Math.imul(k, ts) | 0, i = i + Math.imul(C, tf) | 0, n = (n = n + Math.imul(C, th) | 0) + Math.imul(_, tf) | 0, o = o + Math.imul(_, th) | 0, i = i + Math.imul(N, tl) | 0, n = (n = n + Math.imul(N, tc) | 0) + Math.imul(B, tl) | 0, o = o + Math.imul(B, tc) | 0, i = i + Math.imul(E, tp) | 0, n = (n = n + Math.imul(E, tm) | 0) + Math.imul(S, tp) | 0, o = o + Math.imul(S, tm) | 0;
                    var tC = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tC >>> 26) | 0, tC &= 67108863, i = Math.imul(F, tr), n = (n = Math.imul(F, ti)) + Math.imul(L, tr) | 0, o = Math.imul(L, ti), i = i + Math.imul(U, to) | 0, n = (n = n + Math.imul(U, ts) | 0) + Math.imul(D, to) | 0, o = o + Math.imul(D, ts) | 0, i = i + Math.imul(R, tf) | 0, n = (n = n + Math.imul(R, th) | 0) + Math.imul(k, tf) | 0, o = o + Math.imul(k, th) | 0, i = i + Math.imul(C, tl) | 0, n = (n = n + Math.imul(C, tc) | 0) + Math.imul(_, tl) | 0, o = o + Math.imul(_, tc) | 0, i = i + Math.imul(N, tp) | 0, n = (n = n + Math.imul(N, tm) | 0) + Math.imul(B, tp) | 0, o = o + Math.imul(B, tm) | 0;
                    var t_ = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (t_ >>> 26) | 0, t_ &= 67108863, i = Math.imul(F, to), n = (n = Math.imul(F, ts)) + Math.imul(L, to) | 0, o = Math.imul(L, ts), i = i + Math.imul(U, tf) | 0, n = (n = n + Math.imul(U, th) | 0) + Math.imul(D, tf) | 0, o = o + Math.imul(D, th) | 0, i = i + Math.imul(R, tl) | 0, n = (n = n + Math.imul(R, tc) | 0) + Math.imul(k, tl) | 0, o = o + Math.imul(k, tc) | 0, i = i + Math.imul(C, tp) | 0, n = (n = n + Math.imul(C, tm) | 0) + Math.imul(_, tp) | 0, o = o + Math.imul(_, tm) | 0;
                    var tO = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tO >>> 26) | 0, tO &= 67108863, i = Math.imul(F, tf), n = (n = Math.imul(F, th)) + Math.imul(L, tf) | 0, o = Math.imul(L, th), i = i + Math.imul(U, tl) | 0, n = (n = n + Math.imul(U, tc) | 0) + Math.imul(D, tl) | 0, o = o + Math.imul(D, tc) | 0, i = i + Math.imul(R, tp) | 0, n = (n = n + Math.imul(R, tm) | 0) + Math.imul(k, tp) | 0, o = o + Math.imul(k, tm) | 0;
                    var tR = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tR >>> 26) | 0, tR &= 67108863, i = Math.imul(F, tl), n = (n = Math.imul(F, tc)) + Math.imul(L, tl) | 0, o = Math.imul(L, tc), i = i + Math.imul(U, tp) | 0, n = (n = n + Math.imul(U, tm) | 0) + Math.imul(D, tp) | 0, o = o + Math.imul(D, tm) | 0;
                    var tk = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tk >>> 26) | 0, tk &= 67108863, i = Math.imul(F, tp), n = (n = Math.imul(F, tm)) + Math.imul(L, tp) | 0, o = Math.imul(L, tm);
                    var tP = (h + i | 0) + ((8191 & n) << 13) | 0;
                    return h = (o + (n >>> 13) | 0) + (tP >>> 26) | 0, tP &= 67108863, f[0] = tg, f[1] = tv, f[2] = tA, f[3] = ty, f[4] = tb, f[5] = tw, f[6] = tM, f[7] = tE, f[8] = tS, f[9] = tI, f[10] = tN, f[11] = tB, f[12] = tx, f[13] = tC, f[14] = t_, f[15] = tO, f[16] = tR, f[17] = tk, f[18] = tP, 0 !== h && (f[19] = h, r.length++), r
                };

                function g(t, e, r) {
                    r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                    for (var i = 0, n = 0, o = 0; o < r.length - 1; o++) {
                        var s = n;
                        n = 0;
                        for (var u = 67108863 & i, f = Math.min(o, e.length - 1), h = Math.max(0, o - t.length + 1); h <= f; h++) {
                            var a = o - h,
                                l = (0 | t.words[a]) * (0 | e.words[h]),
                                c = 67108863 & l;
                            s = s + (l / 67108864 | 0) | 0, u = 67108863 & (c = c + u | 0), n += (s = s + (c >>> 26) | 0) >>> 26, s &= 67108863
                        }
                        r.words[o] = u, i = s, s = n
                    }
                    return 0 !== i ? r.words[o] = i : r.length--, r._strip()
                }
                Math.imul || (m = p), n.prototype.mulTo = function(t, e) {
                    var r, i = this.length + t.length;
                    return 10 === this.length && 10 === t.length ? m(this, t, e) : i < 63 ? p(this, t, e) : g(this, t, e)
                }, n.prototype.mul = function(t) {
                    var e = new n(null);
                    return e.words = Array(this.length + t.length), this.mulTo(t, e)
                }, n.prototype.mulf = function(t) {
                    var e = new n(null);
                    return e.words = Array(this.length + t.length), g(this, t, e)
                }, n.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, n.prototype.imuln = function(t) {
                    var e = t < 0;
                    e && (t = -t), r("number" == typeof t), r(t < 67108864);
                    for (var i = 0, n = 0; n < this.length; n++) {
                        var o = (0 | this.words[n]) * t,
                            s = (67108863 & o) + (67108863 & i);
                        i >>= 26, i += (o / 67108864 | 0) + (s >>> 26), this.words[n] = 67108863 & s
                    }
                    return 0 !== i && (this.words[n] = i, this.length++), e ? this.ineg() : this
                }, n.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, n.prototype.sqr = function() {
                    return this.mul(this)
                }, n.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, n.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                            var i = r / 26 | 0,
                                n = r % 26;
                            e[r] = t.words[i] >>> n & 1
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new n(1);
                    for (var r = this, i = 0; i < e.length && 0 === e[i]; i++, r = r.sqr());
                    if (++i < e.length)
                        for (var o = r.sqr(); i < e.length; i++, o = o.sqr()) 0 !== e[i] && (r = r.mul(o));
                    return r
                }, n.prototype.iushln = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e, i = t % 26,
                        n = (t - i) / 26,
                        o = 67108863 >>> 26 - i << 26 - i;
                    if (0 !== i) {
                        var s = 0;
                        for (e = 0; e < this.length; e++) {
                            var u = this.words[e] & o,
                                f = (0 | this.words[e]) - u << i;
                            this.words[e] = f | s, s = u >>> 26 - i
                        }
                        s && (this.words[e] = s, this.length++)
                    }
                    if (0 !== n) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + n] = this.words[e];
                        for (e = 0; e < n; e++) this.words[e] = 0;
                        this.length += n
                    }
                    return this._strip()
                }, n.prototype.ishln = function(t) {
                    return r(0 === this.negative), this.iushln(t)
                }, n.prototype.iushrn = function(t, e, i) {
                    r("number" == typeof t && t >= 0), n = e ? (e - e % 26) / 26 : 0;
                    var n, o = t % 26,
                        s = Math.min((t - o) / 26, this.length),
                        u = 67108863 ^ 67108863 >>> o << o;
                    if (n -= s, n = Math.max(0, n), i) {
                        for (var f = 0; f < s; f++) i.words[f] = this.words[f];
                        i.length = s
                    }
                    if (0 !== s) {
                        if (this.length > s)
                            for (this.length -= s, f = 0; f < this.length; f++) this.words[f] = this.words[f + s];
                        else this.words[0] = 0, this.length = 1
                    }
                    var h = 0;
                    for (f = this.length - 1; f >= 0 && (0 !== h || f >= n); f--) {
                        var a = 0 | this.words[f];
                        this.words[f] = h << 26 - o | a >>> o, h = a & u
                    }
                    return i && 0 !== h && (i.words[i.length++] = h), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                }, n.prototype.ishrn = function(t, e, i) {
                    return r(0 === this.negative), this.iushrn(t, e, i)
                }, n.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, n.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, n.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, n.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, n.prototype.testn = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e = t % 26,
                        i = (t - e) / 26;
                    return !(this.length <= i) && !!(this.words[i] & 1 << e)
                }, n.prototype.imaskn = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e = t % 26,
                        i = (t - e) / 26;
                    return (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= i) ? this : (0 !== e && i++, this.length = Math.min(i, this.length), 0 !== e && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> e << e), this._strip())
                }, n.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, n.prototype.iaddn = function(t) {
                    return r("number" == typeof t), r(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(t), this.negative = 1), this) : this._iaddn(t)
                }, n.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, n.prototype.isubn = function(t) {
                    if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                    if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                    return this._strip()
                }, n.prototype.addn = function(t) {
                    return this.clone().iaddn(t)
                }, n.prototype.subn = function(t) {
                    return this.clone().isubn(t)
                }, n.prototype.iabs = function() {
                    return this.negative = 0, this
                }, n.prototype.abs = function() {
                    return this.clone().iabs()
                }, n.prototype._ishlnsubmul = function(t, e, i) {
                    var n, o = t.length + i;
                    this._expand(o);
                    var s, u = 0;
                    for (n = 0; n < t.length; n++) {
                        s = (0 | this.words[n + i]) + u;
                        var f = (0 | t.words[n]) * e;
                        s -= 67108863 & f, u = (s >> 26) - (f / 67108864 | 0), this.words[n + i] = 67108863 & s
                    }
                    for (; n < this.length - i; n++) u = (s = (0 | this.words[n + i]) + u) >> 26, this.words[n + i] = 67108863 & s;
                    if (0 === u) return this._strip();
                    for (r(-1 === u), u = 0, n = 0; n < this.length; n++) u = (s = -(0 | this.words[n]) + u) >> 26, this.words[n] = 67108863 & s;
                    return this.negative = 1, this._strip()
                }, n.prototype._wordDiv = function(t, e) {
                    var r = this.length - t.length,
                        i = this.clone(),
                        o = t,
                        s = 0 | o.words[o.length - 1];
                    0 != (r = 26 - this._countBits(s)) && (o = o.ushln(r), i.iushln(r), s = 0 | o.words[o.length - 1]);
                    var u, f = i.length - o.length;
                    if ("mod" !== e) {
                        (u = new n(null)).length = f + 1, u.words = Array(u.length);
                        for (var h = 0; h < u.length; h++) u.words[h] = 0
                    }
                    var a = i.clone()._ishlnsubmul(o, 1, f);
                    0 === a.negative && (i = a, u && (u.words[f] = 1));
                    for (var l = f - 1; l >= 0; l--) {
                        var c = (0 | i.words[o.length + l]) * 67108864 + (0 | i.words[o.length + l - 1]);
                        for (c = Math.min(c / s | 0, 67108863), i._ishlnsubmul(o, c, l); 0 !== i.negative;) c--, i.negative = 0, i._ishlnsubmul(o, 1, l), i.isZero() || (i.negative ^= 1);
                        u && (u.words[l] = c)
                    }
                    return u && u._strip(), i._strip(), "div" !== e && 0 !== r && i.iushrn(r), {
                        div: u || null,
                        mod: i
                    }
                }, n.prototype.divmod = function(t, e, i) {
                    var o, s, u;
                    return (r(!t.isZero()), this.isZero()) ? {
                        div: new n(0),
                        mod: new n(0)
                    } : 0 !== this.negative && 0 === t.negative ? (u = this.neg().divmod(t, e), "mod" !== e && (o = u.div.neg()), "div" !== e && (s = u.mod.neg(), i && 0 !== s.negative && s.iadd(t)), {
                        div: o,
                        mod: s
                    }) : 0 === this.negative && 0 !== t.negative ? (u = this.divmod(t.neg(), e), "mod" !== e && (o = u.div.neg()), {
                        div: o,
                        mod: u.mod
                    }) : this.negative & t.negative ? (u = this.neg().divmod(t.neg(), e), "div" !== e && (s = u.mod.neg(), i && 0 !== s.negative && s.isub(t)), {
                        div: u.div,
                        mod: s
                    }) : t.length > this.length || 0 > this.cmp(t) ? {
                        div: new n(0),
                        mod: this
                    } : 1 === t.length ? "div" === e ? {
                        div: this.divn(t.words[0]),
                        mod: null
                    } : "mod" === e ? {
                        div: null,
                        mod: new n(this.modrn(t.words[0]))
                    } : {
                        div: this.divn(t.words[0]),
                        mod: new n(this.modrn(t.words[0]))
                    } : this._wordDiv(t, e)
                }, n.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, n.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, n.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, n.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        i = t.ushrn(1),
                        n = t.andln(1),
                        o = r.cmp(i);
                    return o < 0 || 1 === n && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, n.prototype.modrn = function(t) {
                    var e = t < 0;
                    e && (t = -t), r(t <= 67108863);
                    for (var i = 67108864 % t, n = 0, o = this.length - 1; o >= 0; o--) n = (i * n + (0 | this.words[o])) % t;
                    return e ? -n : n
                }, n.prototype.modn = function(t) {
                    return this.modrn(t)
                }, n.prototype.idivn = function(t) {
                    var e = t < 0;
                    e && (t = -t), r(t <= 67108863);
                    for (var i = 0, n = this.length - 1; n >= 0; n--) {
                        var o = (0 | this.words[n]) + 67108864 * i;
                        this.words[n] = o / t | 0, i = o % t
                    }
                    return this._strip(), e ? this.ineg() : this
                }, n.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, n.prototype.egcd = function(t) {
                    r(0 === t.negative), r(!t.isZero());
                    var e = this,
                        i = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var o = new n(1), s = new n(0), u = new n(0), f = new n(1), h = 0; e.isEven() && i.isEven();) e.iushrn(1), i.iushrn(1), ++h;
                    for (var a = i.clone(), l = e.clone(); !e.isZero();) {
                        for (var c = 0, d = 1; !(e.words[0] & d) && c < 26; ++c, d <<= 1);
                        if (c > 0)
                            for (e.iushrn(c); c-- > 0;)(o.isOdd() || s.isOdd()) && (o.iadd(a), s.isub(l)), o.iushrn(1), s.iushrn(1);
                        for (var p = 0, m = 1; !(i.words[0] & m) && p < 26; ++p, m <<= 1);
                        if (p > 0)
                            for (i.iushrn(p); p-- > 0;)(u.isOdd() || f.isOdd()) && (u.iadd(a), f.isub(l)), u.iushrn(1), f.iushrn(1);
                        e.cmp(i) >= 0 ? (e.isub(i), o.isub(u), s.isub(f)) : (i.isub(e), u.isub(o), f.isub(s))
                    }
                    return {
                        a: u,
                        b: f,
                        gcd: i.iushln(h)
                    }
                }, n.prototype._invmp = function(t) {
                    r(0 === t.negative), r(!t.isZero());
                    var e, i = this,
                        o = t.clone();
                    i = 0 !== i.negative ? i.umod(t) : i.clone();
                    for (var s = new n(1), u = new n(0), f = o.clone(); i.cmpn(1) > 0 && o.cmpn(1) > 0;) {
                        for (var h = 0, a = 1; !(i.words[0] & a) && h < 26; ++h, a <<= 1);
                        if (h > 0)
                            for (i.iushrn(h); h-- > 0;) s.isOdd() && s.iadd(f), s.iushrn(1);
                        for (var l = 0, c = 1; !(o.words[0] & c) && l < 26; ++l, c <<= 1);
                        if (l > 0)
                            for (o.iushrn(l); l-- > 0;) u.isOdd() && u.iadd(f), u.iushrn(1);
                        i.cmp(o) >= 0 ? (i.isub(o), s.isub(u)) : (o.isub(i), u.isub(s))
                    }
                    return 0 > (e = 0 === i.cmpn(1) ? s : u).cmpn(0) && e.iadd(t), e
                }, n.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                        r = t.clone();
                    e.negative = 0, r.negative = 0;
                    for (var i = 0; e.isEven() && r.isEven(); i++) e.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var n = e.cmp(r);
                        if (n < 0) {
                            var o = e;
                            e = r, r = o
                        } else if (0 === n || 0 === r.cmpn(1)) break;
                        e.isub(r)
                    }
                    return r.iushln(i)
                }, n.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, n.prototype.isEven = function() {
                    return (1 & this.words[0]) == 0
                }, n.prototype.isOdd = function() {
                    return (1 & this.words[0]) == 1
                }, n.prototype.andln = function(t) {
                    return this.words[0] & t
                }, n.prototype.bincn = function(t) {
                    r("number" == typeof t);
                    var e = t % 26,
                        i = (t - e) / 26,
                        n = 1 << e;
                    if (this.length <= i) return this._expand(i + 1), this.words[i] |= n, this;
                    for (var o = n, s = i; 0 !== o && s < this.length; s++) {
                        var u = 0 | this.words[s];
                        u += o, o = u >>> 26, u &= 67108863, this.words[s] = u
                    }
                    return 0 !== o && (this.words[s] = o, this.length++), this
                }, n.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, n.prototype.cmpn = function(t) {
                    var e, i = t < 0;
                    if (0 !== this.negative && !i) return -1;
                    if (0 === this.negative && i) return 1;
                    if (this._strip(), this.length > 1) e = 1;
                    else {
                        i && (t = -t), r(t <= 67108863, "Number is too big");
                        var n = 0 | this.words[0];
                        e = n === t ? 0 : n < t ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -e : e
                }, n.prototype.cmp = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e
                }, n.prototype.ucmp = function(t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var i = 0 | this.words[r],
                            n = 0 | t.words[r];
                        if (i !== n) {
                            i < n ? e = -1 : i > n && (e = 1);
                            break
                        }
                    }
                    return e
                }, n.prototype.gtn = function(t) {
                    return 1 === this.cmpn(t)
                }, n.prototype.gt = function(t) {
                    return 1 === this.cmp(t)
                }, n.prototype.gten = function(t) {
                    return this.cmpn(t) >= 0
                }, n.prototype.gte = function(t) {
                    return this.cmp(t) >= 0
                }, n.prototype.ltn = function(t) {
                    return -1 === this.cmpn(t)
                }, n.prototype.lt = function(t) {
                    return -1 === this.cmp(t)
                }, n.prototype.lten = function(t) {
                    return 0 >= this.cmpn(t)
                }, n.prototype.lte = function(t) {
                    return 0 >= this.cmp(t)
                }, n.prototype.eqn = function(t) {
                    return 0 === this.cmpn(t)
                }, n.prototype.eq = function(t) {
                    return 0 === this.cmp(t)
                }, n.red = function(t) {
                    return new E(t)
                }, n.prototype.toRed = function(t) {
                    return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, n.prototype.fromRed = function() {
                    return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, n.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, n.prototype.forceRed = function(t) {
                    return r(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, n.prototype.redAdd = function(t) {
                    return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, n.prototype.redIAdd = function(t) {
                    return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, n.prototype.redSub = function(t) {
                    return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, n.prototype.redISub = function(t) {
                    return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, n.prototype.redShl = function(t) {
                    return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, n.prototype.redMul = function(t) {
                    return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, n.prototype.redIMul = function(t) {
                    return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, n.prototype.redSqr = function() {
                    return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, n.prototype.redISqr = function() {
                    return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, n.prototype.redSqrt = function() {
                    return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, n.prototype.redInvm = function() {
                    return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, n.prototype.redNeg = function() {
                    return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, n.prototype.redPow = function(t) {
                    return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var v = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function A(t, e) {
                    this.name = t, this.p = new n(e, 16), this.n = this.p.bitLength(), this.k = new n(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function y() {
                    A.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function b() {
                    A.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function w() {
                    A.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function M() {
                    A.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function E(t) {
                    if ("string" == typeof t) {
                        var e = n._prime(t);
                        this.m = e.p, this.prime = e
                    } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function S(t) {
                    E.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new n(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                A.prototype._tmp = function() {
                    var t = new n(null);
                    return t.words = Array(Math.ceil(this.n / 13)), t
                }, A.prototype.ireduce = function(t) {
                    var e, r = t;
                    do this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength(); while (e > this.n);
                    var i = e < this.n ? -1 : r.ucmp(this.p);
                    return 0 === i ? (r.words[0] = 0, r.length = 1) : i > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, A.prototype.split = function(t, e) {
                    t.iushrn(this.n, 0, e)
                }, A.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, i(y, A), y.prototype.split = function(t, e) {
                    for (var r = Math.min(t.length, 9), i = 0; i < r; i++) e.words[i] = t.words[i];
                    if (e.length = r, t.length <= 9) {
                        t.words[0] = 0, t.length = 1;
                        return
                    }
                    var n = t.words[9];
                    for (e.words[e.length++] = 4194303 & n, i = 10; i < t.length; i++) {
                        var o = 0 | t.words[i];
                        t.words[i - 10] = (4194303 & o) << 4 | n >>> 22, n = o
                    }
                    n >>>= 22, t.words[i - 10] = n, 0 === n && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, y.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var i = 0 | t.words[r];
                        e += 977 * i, t.words[r] = 67108863 & e, e = 64 * i + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, i(b, A), i(w, A), i(M, A), M.prototype.imulK = function(t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var i = (0 | t.words[r]) * 19 + e,
                            n = 67108863 & i;
                        i >>>= 26, t.words[r] = n, e = i
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, n._prime = function(t) {
                    var e;
                    if (v[t]) return v[t];
                    if ("k256" === t) e = new y;
                    else if ("p224" === t) e = new b;
                    else if ("p192" === t) e = new w;
                    else if ("p25519" === t) e = new M;
                    else throw Error("Unknown prime " + t);
                    return v[t] = e, e
                }, E.prototype._verify1 = function(t) {
                    r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers")
                }, E.prototype._verify2 = function(t, e) {
                    r((t.negative | e.negative) == 0, "red works only with positives"), r(t.red && t.red === e.red, "red works only with red numbers")
                }, E.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : (f(t, t.umod(this.m)._forceRed(this)), t)
                }, E.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, E.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, E.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, E.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this)
                }, E.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r
                }, E.prototype.shl = function(t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, E.prototype.imul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, E.prototype.mul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, E.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, E.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, E.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (r(e % 2 == 1), 3 === e) {
                        var i = this.m.add(new n(1)).iushrn(2);
                        return this.pow(t, i)
                    }
                    for (var o = this.m.subn(1), s = 0; !o.isZero() && 0 === o.andln(1);) s++, o.iushrn(1);
                    r(!o.isZero());
                    var u = new n(1).toRed(this),
                        f = u.redNeg(),
                        h = this.m.subn(1).iushrn(1),
                        a = this.m.bitLength();
                    for (a = new n(2 * a * a).toRed(this); 0 !== this.pow(a, h).cmp(f);) a.redIAdd(f);
                    for (var l = this.pow(a, o), c = this.pow(t, o.addn(1).iushrn(1)), d = this.pow(t, o), p = s; 0 !== d.cmp(u);) {
                        for (var m = d, g = 0; 0 !== m.cmp(u); g++) m = m.redSqr();
                        r(g < p);
                        var v = this.pow(l, new n(1).iushln(p - g - 1));
                        c = c.redMul(v), l = v.redSqr(), d = d.redMul(l), p = g
                    }
                    return c
                }, E.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, E.prototype.pow = function(t, e) {
                    if (e.isZero()) return new n(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = Array(16);
                    r[0] = new n(1).toRed(this), r[1] = t;
                    for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], t);
                    var o = r[0],
                        s = 0,
                        u = 0,
                        f = e.bitLength() % 26;
                    for (0 === f && (f = 26), i = e.length - 1; i >= 0; i--) {
                        for (var h = e.words[i], a = f - 1; a >= 0; a--) {
                            var l = h >> a & 1;
                            if (o !== r[0] && (o = this.sqr(o)), 0 === l && 0 === s) {
                                u = 0;
                                continue
                            }
                            s <<= 1, s |= l, 4 != ++u && (0 !== i || 0 !== a) || (o = this.mul(o, r[s]), u = 0, s = 0)
                        }
                        f = 26
                    }
                    return o
                }, E.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, E.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, n.mont = function(t) {
                    return new S(t)
                }, i(S, E), S.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, S.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, S.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var r = t.imul(e),
                        i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        n = r.isub(i).iushrn(this.shift),
                        o = n;
                    return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : 0 > n.cmpn(0) && (o = n.iadd(this.m)), o._forceRed(this)
                }, S.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new n(0)._forceRed(this);
                    var r = t.mul(e),
                        i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        o = r.isub(i).iushrn(this.shift),
                        s = o;
                    return o.cmp(this.m) >= 0 ? s = o.isub(this.m) : 0 > o.cmpn(0) && (s = o.iadd(this.m)), s._forceRed(this)
                }, S.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(tU, tl);
            var tT = tU.exports;
            let tF = "bignumber/5.7.0";
            var tL = tT.BN;
            let tq = new tw(tF),
                tz = {},
                tj = !1;
            class tH {
                constructor(t, e) {
                    t !== tz && tq.throwError("cannot call constructor directly; use BigNumber.from", tw.errors.UNSUPPORTED_OPERATION, {
                        operation: "new (BigNumber)"
                    }), this._hex = e, this._isBigNumber = !0, Object.freeze(this)
                }
                fromTwos(t) {
                    return tQ(tJ(this).fromTwos(t))
                }
                toTwos(t) {
                    return tQ(tJ(this).toTwos(t))
                }
                abs() {
                    return "-" === this._hex[0] ? tH.from(this._hex.substring(1)) : this
                }
                add(t) {
                    return tQ(tJ(this).add(tJ(t)))
                }
                sub(t) {
                    return tQ(tJ(this).sub(tJ(t)))
                }
                div(t) {
                    return tH.from(t).isZero() && tG("division-by-zero", "div"), tQ(tJ(this).div(tJ(t)))
                }
                mul(t) {
                    return tQ(tJ(this).mul(tJ(t)))
                }
                mod(t) {
                    let e = tJ(t);
                    return e.isNeg() && tG("division-by-zero", "mod"), tQ(tJ(this).umod(e))
                }
                pow(t) {
                    let e = tJ(t);
                    return e.isNeg() && tG("negative-power", "pow"), tQ(tJ(this).pow(e))
                }
                and(t) {
                    let e = tJ(t);
                    return (this.isNegative() || e.isNeg()) && tG("unbound-bitwise-result", "and"), tQ(tJ(this).and(e))
                }
                or(t) {
                    let e = tJ(t);
                    return (this.isNegative() || e.isNeg()) && tG("unbound-bitwise-result", "or"), tQ(tJ(this).or(e))
                }
                xor(t) {
                    let e = tJ(t);
                    return (this.isNegative() || e.isNeg()) && tG("unbound-bitwise-result", "xor"), tQ(tJ(this).xor(e))
                }
                mask(t) {
                    return (this.isNegative() || t < 0) && tG("negative-width", "mask"), tQ(tJ(this).maskn(t))
                }
                shl(t) {
                    return (this.isNegative() || t < 0) && tG("negative-width", "shl"), tQ(tJ(this).shln(t))
                }
                shr(t) {
                    return (this.isNegative() || t < 0) && tG("negative-width", "shr"), tQ(tJ(this).shrn(t))
                }
                eq(t) {
                    return tJ(this).eq(tJ(t))
                }
                lt(t) {
                    return tJ(this).lt(tJ(t))
                }
                lte(t) {
                    return tJ(this).lte(tJ(t))
                }
                gt(t) {
                    return tJ(this).gt(tJ(t))
                }
                gte(t) {
                    return tJ(this).gte(tJ(t))
                }
                isNegative() {
                    return "-" === this._hex[0]
                }
                isZero() {
                    return tJ(this).isZero()
                }
                toNumber() {
                    try {
                        return tJ(this).toNumber()
                    } catch {
                        tG("overflow", "toNumber", this.toString())
                    }
                    return null
                }
                toBigInt() {
                    try {
                        return BigInt(this.toString())
                    } catch {}
                    return tq.throwError("this platform does not support BigInt", tw.errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? tj || (tj = !0, tq.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? tq.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", tw.errors.UNEXPECTED_ARGUMENT, {}) : tq.throwError("BigNumber.toString does not accept parameters", tw.errors.UNEXPECTED_ARGUMENT, {})), tJ(this).toString(10)
                }
                toHexString() {
                    return this._hex
                }
                toJSON(t) {
                    return {
                        type: "BigNumber",
                        hex: this.toHexString()
                    }
                }
                static from(t) {
                    if (t instanceof tH) return t;
                    if ("string" == typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new tH(tz, tK(t)) : t.match(/^-?[0-9]+$/) ? new tH(tz, tK(new tL(t))) : tq.throwArgumentError("invalid BigNumber string", "value", t);
                    if ("number" == typeof t) return t % 1 && tG("underflow", "BigNumber.from", t), (t >= 9007199254740991 || t <= -9007199254740991) && tG("overflow", "BigNumber.from", t), tH.from(String(t));
                    if ("bigint" == typeof t) return tH.from(t.toString());
                    if (tN(t)) return tH.from(t_(t));
                    if (t) {
                        if (t.toHexString) {
                            let e = t.toHexString();
                            if ("string" == typeof e) return tH.from(e)
                        } else {
                            let e = t._hex;
                            if (null == e && "BigNumber" === t.type && (e = t.hex), "string" == typeof e && (tx(e) || "-" === e[0] && tx(e.substring(1)))) return tH.from(e)
                        }
                    }
                    return tq.throwArgumentError("invalid BigNumber value", "value", t)
                }
                static isBigNumber(t) {
                    return !!(t && t._isBigNumber)
                }
            }

            function tK(t) {
                if ("string" != typeof t) return tK(t.toString(16));
                if ("-" === t[0]) return "-" === (t = t.substring(1))[0] && tq.throwArgumentError("invalid hex", "value", t), "0x00" === (t = tK(t)) ? t : "-" + t;
                if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
                for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4);) t = "0x" + t.substring(4);
                return t
            }

            function tQ(t) {
                return tH.from(tK(t))
            }

            function tJ(t) {
                let e = tH.from(t).toHexString();
                return "-" === e[0] ? new tL("-" + e.substring(3), 16) : new tL(e.substring(2), 16)
            }

            function tG(t, e, r) {
                let i = {
                    fault: t,
                    operation: e
                };
                return null != r && (i.value = r), tq.throwError(t, tw.errors.NUMERIC_FAULT, i)
            }
            let tY = new tw(tF),
                tV = {},
                tW = tH.from(0),
                tX = tH.from(-1);

            function tZ(t, e, r, i) {
                let n = {
                    fault: e,
                    operation: r
                };
                return void 0 !== i && (n.value = i), tY.throwError(t, tw.errors.NUMERIC_FAULT, n)
            }
            let t$ = "0";
            for (; t$.length < 256;) t$ += t$;

            function t0(t) {
                if ("number" != typeof t) try {
                    t = tH.from(t).toNumber()
                } catch {}
                return "number" == typeof t && t >= 0 && t <= 256 && !(t % 1) ? "1" + t$.substring(0, t) : tY.throwArgumentError("invalid decimal size", "decimals", t)
            }

            function t1(t, e) {
                null == e && (e = 0);
                let r = t0(e),
                    i = (t = tH.from(t)).lt(tW);
                i && (t = t.mul(tX));
                let n = t.mod(r).toString();
                for (; n.length < r.length - 1;) n = "0" + n;
                n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
                let o = t.div(r).toString();
                return t = 1 === r.length ? o : o + "." + n, i && (t = "-" + t), t
            }

            function t2(t, e) {
                null == e && (e = 0);
                let r = t0(e);
                "string" == typeof t && t.match(/^-?[0-9.]+$/) || tY.throwArgumentError("invalid decimal value", "value", t);
                let i = "-" === t.substring(0, 1);
                i && (t = t.substring(1)), "." === t && tY.throwArgumentError("missing value", "value", t);
                let n = t.split(".");
                n.length > 2 && tY.throwArgumentError("too many decimal points", "value", t);
                let o = n[0],
                    s = n[1];
                for (o || (o = "0"), s || (s = "0");
                    "0" === s[s.length - 1];) s = s.substring(0, s.length - 1);
                for (s.length > r.length - 1 && tZ("fractional component exceeds decimals", "underflow", "parseFixed"), "" === s && (s = "0"); s.length < r.length - 1;) s += "0";
                let u = tH.from(o),
                    f = tH.from(s),
                    h = u.mul(r).add(f);
                return i && (h = h.mul(tX)), h
            }
            class t3 {
                constructor(t, e, r, i) {
                    t !== tV && tY.throwError("cannot use FixedFormat constructor; use FixedFormat.from", tw.errors.UNSUPPORTED_OPERATION, {
                        operation: "new FixedFormat"
                    }), this.signed = e, this.width = r, this.decimals = i, this.name = (e ? "" : "u") + "fixed" + String(r) + "x" + String(i), this._multiplier = t0(i), Object.freeze(this)
                }
                static from(t) {
                    if (t instanceof t3) return t;
                    "number" == typeof t && (t = `fixed128x${t}`);
                    let e = !0,
                        r = 128,
                        i = 18;
                    if ("string" == typeof t) {
                        if ("fixed" !== t) {
                            if ("ufixed" === t) e = !1;
                            else {
                                let n = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                                n || tY.throwArgumentError("invalid fixed format", "format", t), e = "u" !== n[1], r = parseInt(n[2]), i = parseInt(n[3])
                            }
                        }
                    } else if (t) {
                        let n = (e, r, i) => null == t[e] ? i : (typeof t[e] !== r && tY.throwArgumentError("invalid fixed format (" + e + " not " + r + ")", "format." + e, t[e]), t[e]);
                        e = n("signed", "boolean", e), r = n("width", "number", r), i = n("decimals", "number", i)
                    }
                    return r % 8 && tY.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", r), i > 80 && tY.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", i), new t3(tV, e, r, i)
                }
            }
            class t6 {
                constructor(t, e, r, i) {
                    t !== tV && tY.throwError("cannot use FixedNumber constructor; use FixedNumber.from", tw.errors.UNSUPPORTED_OPERATION, {
                        operation: "new FixedFormat"
                    }), this.format = i, this._hex = e, this._value = r, this._isFixedNumber = !0, Object.freeze(this)
                }
                _checkFormat(t) {
                    this.format.name !== t.format.name && tY.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t)
                }
                addUnsafe(t) {
                    this._checkFormat(t);
                    let e = t2(this._value, this.format.decimals),
                        r = t2(t._value, t.format.decimals);
                    return t6.fromValue(e.add(r), this.format.decimals, this.format)
                }
                subUnsafe(t) {
                    this._checkFormat(t);
                    let e = t2(this._value, this.format.decimals),
                        r = t2(t._value, t.format.decimals);
                    return t6.fromValue(e.sub(r), this.format.decimals, this.format)
                }
                mulUnsafe(t) {
                    this._checkFormat(t);
                    let e = t2(this._value, this.format.decimals),
                        r = t2(t._value, t.format.decimals);
                    return t6.fromValue(e.mul(r).div(this.format._multiplier), this.format.decimals, this.format)
                }
                divUnsafe(t) {
                    this._checkFormat(t);
                    let e = t2(this._value, this.format.decimals),
                        r = t2(t._value, t.format.decimals);
                    return t6.fromValue(e.mul(this.format._multiplier).div(r), this.format.decimals, this.format)
                }
                floor() {
                    let t = this.toString().split(".");
                    1 === t.length && t.push("0");
                    let e = t6.from(t[0], this.format),
                        r = !t[1].match(/^(0*)$/);
                    return this.isNegative() && r && (e = e.subUnsafe(t8.toFormat(e.format))), e
                }
                ceiling() {
                    let t = this.toString().split(".");
                    1 === t.length && t.push("0");
                    let e = t6.from(t[0], this.format),
                        r = !t[1].match(/^(0*)$/);
                    return !this.isNegative() && r && (e = e.addUnsafe(t8.toFormat(e.format))), e
                }
                round(t) {
                    null == t && (t = 0);
                    let e = this.toString().split(".");
                    if (1 === e.length && e.push("0"), (t < 0 || t > 80 || t % 1) && tY.throwArgumentError("invalid decimal count", "decimals", t), e[1].length <= t) return this;
                    let r = t6.from("1" + t$.substring(0, t), this.format),
                        i = t4.toFormat(this.format);
                    return this.mulUnsafe(r).addUnsafe(i).floor().divUnsafe(r)
                }
                isZero() {
                    return "0.0" === this._value || "0" === this._value
                }
                isNegative() {
                    return "-" === this._value[0]
                }
                toString() {
                    return this._value
                }
                toHexString(t) {
                    return null == t ? this._hex : (t % 8 && tY.throwArgumentError("invalid byte width", "width", t), tR(tH.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString(), t / 8))
                }
                toUnsafeFloat() {
                    return parseFloat(this.toString())
                }
                toFormat(t) {
                    return t6.fromString(this._value, t)
                }
                static fromValue(t, e, r) {
                    var i;
                    return null != r || null == e || null != (i = e) && (tH.isBigNumber(i) || "number" == typeof i && i % 1 == 0 || "string" == typeof i && i.match(/^-?[0-9]+$/) || tx(i) || "bigint" == typeof i || tN(i)) || (r = e, e = null), null == e && (e = 0), null == r && (r = "fixed"), t6.fromString(t1(t, e), t3.from(r))
                }
                static fromString(t, e) {
                    null == e && (e = "fixed");
                    let r = t3.from(e),
                        i = t2(t, r.decimals);
                    !r.signed && i.lt(tW) && tZ("unsigned value cannot be negative", "overflow", "value", t);
                    let n = null;
                    return new t6(tV, r.signed ? i.toTwos(r.width).toHexString() : tR(i.toHexString(), r.width / 8), t1(i, r.decimals), r)
                }
                static fromBytes(t, e) {
                    null == e && (e = "fixed");
                    let r = t3.from(e);
                    if (tB(t).length > r.width / 8) throw Error("overflow");
                    let i = tH.from(t);
                    return r.signed && (i = i.fromTwos(r.width)), new t6(tV, i.toTwos((r.signed ? 0 : 1) + r.width).toHexString(), t1(i, r.decimals), r)
                }
                static from(t, e) {
                    if ("string" == typeof t) return t6.fromString(t, e);
                    if (tN(t)) return t6.fromBytes(t, e);
                    try {
                        return t6.fromValue(t, 0, e)
                    } catch (t) {
                        if (t.code !== tw.errors.INVALID_ARGUMENT) throw t
                    }
                    return tY.throwArgumentError("invalid FixedNumber value", "value", t)
                }
                static isFixedNumber(t) {
                    return !!(t && t._isFixedNumber)
                }
            }
            let t8 = t6.from(1),
                t4 = t6.from("0.5"),
                t5 = new tw("strings/5.7.0");

            function t7(t, e, r, i, n) {
                if (t === p.BAD_PREFIX || t === p.UNEXPECTED_CONTINUE) {
                    let t = 0;
                    for (let i = e + 1; i < r.length && r[i] >> 6 == 2; i++) t++;
                    return t
                }
                return t === p.OVERRUN ? r.length - e - 1 : 0
            }

            function t9(t, e = d.current) {
                e != d.current && (t5.checkNormalize(), t = t.normalize(e));
                let r = [];
                for (let e = 0; e < t.length; e++) {
                    let i = t.charCodeAt(e);
                    if (i < 128) r.push(i);
                    else if (i < 2048) r.push(i >> 6 | 192), r.push(63 & i | 128);
                    else if ((64512 & i) == 55296) {
                        e++;
                        let n = t.charCodeAt(e);
                        if (e >= t.length || (64512 & n) != 56320) throw Error("invalid utf-8 string");
                        let o = 65536 + ((1023 & i) << 10) + (1023 & n);
                        r.push(o >> 18 | 240), r.push(o >> 12 & 63 | 128), r.push(o >> 6 & 63 | 128), r.push(63 & o | 128)
                    } else r.push(i >> 12 | 224), r.push(i >> 6 & 63 | 128), r.push(63 & i | 128)
                }
                return tB(r)
            }

            function et(t, e) {
                e || (e = function(t) {
                    return [parseInt(t, 16)]
                });
                let r = 0,
                    i = {};
                return t.split(",").forEach(t => {
                    let n = t.split(":");
                    i[r += parseInt(n[0], 16)] = e(n[1])
                }), i
            }

            function ee(t) {
                let e = 0;
                return t.split(",").map(t => {
                    let r = t.split("-");
                    return 1 === r.length ? r[1] = "0" : "" === r[1] && (r[1] = "1"), {
                        l: e + parseInt(r[0], 16),
                        h: e = parseInt(r[1], 16)
                    }
                })
            }(f = d || (d = {})).current = "", f.NFC = "NFC", f.NFD = "NFD", f.NFKC = "NFKC", f.NFKD = "NFKD", (h = p || (p = {})).UNEXPECTED_CONTINUE = "unexpected continuation byte", h.BAD_PREFIX = "bad codepoint prefix", h.OVERRUN = "string overrun", h.MISSING_CONTINUE = "missing continuation byte", h.OUT_OF_RANGE = "out of UTF-8 range", h.UTF16_SURROGATE = "UTF-16 surrogate", h.OVERLONG = "overlong representation", Object.freeze({
                error: function(t, e, r, i, n) {
                    return t5.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`, "bytes", r)
                },
                ignore: t7,
                replace: function(t, e, r, i, n) {
                    return t === p.OVERLONG ? (i.push(n), 0) : (i.push(65533), t7(t, e, r))
                }
            }), ee("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map(t => parseInt(t, 16)), et("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), et("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), et("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", function(t) {
                if (t.length % 4 != 0) throw Error("bad data");
                let e = [];
                for (let r = 0; r < t.length; r += 4) e.push(parseInt(t.substring(r, r + 4), 16));
                return e
            }), ee("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
            let er = "hash/5.7.0";

            function ei(t, e) {
                null == e && (e = 1);
                let r = [],
                    i = r.forEach,
                    n = function(t, e) {
                        i.call(t, function(t) {
                            e > 0 && Array.isArray(t) ? n(t, e - 1) : r.push(t)
                        })
                    };
                return n(t, e), r
            }

            function en(t, e) {
                let r = Array(t);
                for (let i = 0, n = -1; i < t; i++) r[i] = n += 1 + e();
                return r
            }

            function eo(t, e) {
                let r = en(t(), t),
                    i = t(),
                    n = en(i, t),
                    o = function(t, e) {
                        let r = Array(t);
                        for (let i = 0; i < t; i++) r[i] = 1 + e();
                        return r
                    }(i, t);
                for (let t = 0; t < i; t++)
                    for (let e = 0; e < o[t]; e++) r.push(n[t] + e);
                return e ? r.map(t => e[t]) : r
            }

            function es(t, e, r) {
                let i = Array(t).fill(void 0).map(() => []);
                for (let n = 0; n < e; n++)(function(t, e) {
                    let r = Array(t);
                    for (let n = 0, o = 0; n < t; n++) {
                        var i;
                        r[n] = o += 1 & (i = e()) ? ~i >> 1 : i >> 1
                    }
                    return r
                })(t, r).forEach((t, e) => i[e].push(t));
                return i
            }
            let eu = (o = function(t) {
                let e = 0;

                function r() {
                    return t[e++] << 8 | t[e++]
                }
                let i = r(),
                    n = 1,
                    o = [0, 1];
                for (let t = 1; t < i; t++) o.push(n += r());
                let s = r(),
                    u = e;
                e += s;
                let f = 0,
                    h = 0;

                function a() {
                    return 0 == f && (h = h << 8 | t[e++], f = 8), h >> --f & 1
                }
                let l = 0;
                for (let t = 0; t < 31; t++) l = l << 1 | a();
                let c = [],
                    d = 0,
                    p = 2147483648;
                for (;;) {
                    let t = Math.floor(((l - d + 1) * n - 1) / p),
                        e = 0,
                        r = i;
                    for (; r - e > 1;) {
                        let i = e + r >>> 1;
                        t < o[i] ? r = i : e = i
                    }
                    if (0 == e) break;
                    c.push(e);
                    let s = d + Math.floor(p * o[e] / n),
                        u = d + Math.floor(p * o[e + 1] / n) - 1;
                    for (; !((s ^ u) & 1073741824);) l = l << 1 & 2147483647 | a(), s = s << 1 & 2147483647, u = u << 1 & 2147483647 | 1;
                    for (; s & ~u & 536870912;) l = 1073741824 & l | l << 1 & 1073741823 | a(), s = s << 1 ^ 1073741824, u = (1073741824 ^ u) << 1 | 1073741824 | 1;
                    d = s, p = 1 + u - s
                }
                let m = i - 4;
                return c.map(e => {
                    switch (e - m) {
                        case 3:
                            return m + 65792 + (t[u++] << 16 | t[u++] << 8 | t[u++]);
                        case 2:
                            return m + 256 + (t[u++] << 8 | t[u++]);
                        case 1:
                            return m + t[u++];
                        default:
                            return e - 1
                    }
                })
            }(function(t) {
                t = atob(t);
                let e = [];
                for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
                return tB(e)
            }("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")), n = 0, () => o[n++]);
            eo(eu), eo(eu),
                function(t) {
                    let e = [];
                    for (;;) {
                        let r = t();
                        if (0 == r) break;
                        e.push(function(t, e) {
                            let r = 1 + e(),
                                i = e(),
                                n = function(t) {
                                    let e = [];
                                    for (;;) {
                                        let r = t();
                                        if (0 == r) break;
                                        e.push(r)
                                    }
                                    return e
                                }(e);
                            return ei(es(n.length, 1 + t, e).map((t, e) => {
                                let o = t[0],
                                    s = t.slice(1);
                                return Array(n[e]).fill(void 0).map((t, e) => {
                                    let n = e * i;
                                    return [o + e * r, s.map(t => t + n)]
                                })
                            }))
                        }(r, t))
                    }
                    for (;;) {
                        let r = t() - 1;
                        if (r < 0) break;
                        e.push(es(1 + t(), 1 + r, t).map(t => [t[0], t.slice(1)]))
                    }(function(t) {
                        let e = {};
                        for (let r = 0; r < t.length; r++) {
                            let i = t[r];
                            e[i[0]] = i[1]
                        }
                    })(ei(e))
                }(eu), i = eo(eu).sort((t, e) => t - e),
                function t() {
                    let e = [];
                    for (;;) {
                        let r = eo(eu, i);
                        if (0 == r.length) break;
                        e.push({
                            set: new Set(r),
                            node: t()
                        })
                    }
                    e.sort((t, e) => e.set.size - t.set.size);
                    let r = eu();
                    return {
                        branches: e,
                        valid: r % 3,
                        fe0f: !!(1 & (r = r / 3 | 0)),
                        save: 1 == (r >>= 1),
                        check: 2 == r
                    }
                }(), new tw(er), new Uint8Array(32).fill(0);
            let ef = `Ethereum Signed Message:
`;

            function eh(t) {
                return "string" == typeof t && (t = t9(t)), tP(function(t) {
                    let e = t.map(t => tB(t)),
                        r = new Uint8Array(e.reduce((t, e) => t + e.length, 0));
                    return e.reduce((t, e) => (r.set(e, t), t + e.length), 0), tS(r)
                }([t9(ef), t9(String(t.length)), t]))
            }
            new tw("rlp/5.7.0");
            let ea = new tw("address/5.7.0");

            function el(t) {
                tx(t, 20) || ea.throwArgumentError("invalid address", "address", t);
                let e = (t = t.toLowerCase()).substring(2).split(""),
                    r = new Uint8Array(40);
                for (let t = 0; t < 40; t++) r[t] = e[t].charCodeAt(0);
                let i = tB(tP(r));
                for (let t = 0; t < 40; t += 2) i[t >> 1] >> 4 >= 8 && (e[t] = e[t].toUpperCase()), (15 & i[t >> 1]) >= 8 && (e[t + 1] = e[t + 1].toUpperCase());
                return "0x" + e.join("")
            }
            let ec = {};
            for (let t = 0; t < 10; t++) ec[String(t)] = String(t);
            for (let t = 0; t < 26; t++) ec[String.fromCharCode(65 + t)] = String(10 + t);
            let ed = Math.floor(Math.log10 ? Math.log10(9007199254740991) : Math.log(9007199254740991) / Math.LN10);

            function ep(t, e, r) {
                Object.defineProperty(t, e, {
                    enumerable: !0,
                    value: r,
                    writable: !1
                })
            }
            new tw("properties/5.7.0"), new tw(er), new Uint8Array(32).fill(0), tH.from(-1);
            let em = tH.from(0),
                eg = tH.from(1);
            tH.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), tR(eg.toHexString(), 32), tR(em.toHexString(), 32);
            var ev = {},
                eA = {};

            function ey(t, e) {
                if (!t) throw Error(e || "Assertion failed")
            }
            ey.equal = function(t, e, r) {
                if (t != e) throw Error(r || "Assertion failed: " + t + " != " + e)
            };
            var eb = {
                exports: {}
            };
            "function" == typeof Object.create ? eb.exports = function(t, e) {
                e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : eb.exports = function(t, e) {
                if (e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }
            };
            var ew = eb.exports;

            function eM(t) {
                return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
            }

            function eE(t) {
                return 1 === t.length ? "0" + t : t
            }

            function eS(t) {
                return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t
            }
            eA.inherits = ew, eA.toArray = function(t, e) {
                if (Array.isArray(t)) return t.slice();
                if (!t) return [];
                var r = [];
                if ("string" == typeof t) {
                    if (e) {
                        if ("hex" === e)
                            for ((t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (t = "0" + t), n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16))
                    } else
                        for (var i = 0, n = 0; n < t.length; n++) {
                            var o, s, u = t.charCodeAt(n);
                            u < 128 ? r[i++] = u : (u < 2048 ? r[i++] = u >> 6 | 192 : ((o = t, s = n, (64512 & o.charCodeAt(s)) != 55296 || s < 0 || s + 1 >= o.length || (64512 & o.charCodeAt(s + 1)) != 56320) ? r[i++] = u >> 12 | 224 : (u = 65536 + ((1023 & u) << 10) + (1023 & t.charCodeAt(++n)), r[i++] = u >> 18 | 240, r[i++] = u >> 12 & 63 | 128), r[i++] = u >> 6 & 63 | 128), r[i++] = 63 & u | 128)
                        }
                } else
                    for (n = 0; n < t.length; n++) r[n] = 0 | t[n];
                return r
            }, eA.toHex = function(t) {
                for (var e = "", r = 0; r < t.length; r++) e += eE(t[r].toString(16));
                return e
            }, eA.htonl = eM, eA.toHex32 = function(t, e) {
                for (var r = "", i = 0; i < t.length; i++) {
                    var n = t[i];
                    "little" === e && (n = eM(n)), r += eS(n.toString(16))
                }
                return r
            }, eA.zero2 = eE, eA.zero8 = eS, eA.join32 = function(t, e, r, i) {
                var n, o = r - e;
                ey(o % 4 == 0);
                for (var s = Array(o / 4), u = 0, f = e; u < s.length; u++, f += 4) n = "big" === i ? t[f] << 24 | t[f + 1] << 16 | t[f + 2] << 8 | t[f + 3] : t[f + 3] << 24 | t[f + 2] << 16 | t[f + 1] << 8 | t[f], s[u] = n >>> 0;
                return s
            }, eA.split32 = function(t, e) {
                for (var r = Array(4 * t.length), i = 0, n = 0; i < t.length; i++, n += 4) {
                    var o = t[i];
                    "big" === e ? (r[n] = o >>> 24, r[n + 1] = o >>> 16 & 255, r[n + 2] = o >>> 8 & 255, r[n + 3] = 255 & o) : (r[n + 3] = o >>> 24, r[n + 2] = o >>> 16 & 255, r[n + 1] = o >>> 8 & 255, r[n] = 255 & o)
                }
                return r
            }, eA.rotr32 = function(t, e) {
                return t >>> e | t << 32 - e
            }, eA.rotl32 = function(t, e) {
                return t << e | t >>> 32 - e
            }, eA.sum32 = function(t, e) {
                return t + e >>> 0
            }, eA.sum32_3 = function(t, e, r) {
                return t + e + r >>> 0
            }, eA.sum32_4 = function(t, e, r, i) {
                return t + e + r + i >>> 0
            }, eA.sum32_5 = function(t, e, r, i, n) {
                return t + e + r + i + n >>> 0
            }, eA.sum64 = function(t, e, r, i) {
                var n = t[e],
                    o = i + t[e + 1] >>> 0;
                t[e] = (o < i ? 1 : 0) + r + n >>> 0, t[e + 1] = o
            }, eA.sum64_hi = function(t, e, r, i) {
                return (e + i >>> 0 < e ? 1 : 0) + t + r >>> 0
            }, eA.sum64_lo = function(t, e, r, i) {
                return e + i >>> 0
            }, eA.sum64_4_hi = function(t, e, r, i, n, o, s, u) {
                var f, h = e;
                return t + r + n + s + (0 + ((h = h + i >>> 0) < e ? 1 : 0) + ((h = h + o >>> 0) < o ? 1 : 0) + ((h = h + u >>> 0) < u ? 1 : 0)) >>> 0
            }, eA.sum64_4_lo = function(t, e, r, i, n, o, s, u) {
                return e + i + o + u >>> 0
            }, eA.sum64_5_hi = function(t, e, r, i, n, o, s, u, f, h) {
                var a, l = e;
                return t + r + n + s + f + (0 + ((l = l + i >>> 0) < e ? 1 : 0) + ((l = l + o >>> 0) < o ? 1 : 0) + ((l = l + u >>> 0) < u ? 1 : 0) + ((l = l + h >>> 0) < h ? 1 : 0)) >>> 0
            }, eA.sum64_5_lo = function(t, e, r, i, n, o, s, u, f, h) {
                return e + i + o + u + h >>> 0
            }, eA.rotr64_hi = function(t, e, r) {
                return (e << 32 - r | t >>> r) >>> 0
            }, eA.rotr64_lo = function(t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }, eA.shr64_hi = function(t, e, r) {
                return t >>> r
            }, eA.shr64_lo = function(t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            };
            var eI = {};

            function eN() {
                this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
            }
            eI.BlockHash = eN, eN.prototype.update = function(t, e) {
                if (t = eA.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
                    var r = (t = this.pending).length % this._delta8;
                    this.pending = t.slice(t.length - r, t.length), 0 === this.pending.length && (this.pending = null), t = eA.join32(t, 0, t.length - r, this.endian);
                    for (var i = 0; i < t.length; i += this._delta32) this._update(t, i, i + this._delta32)
                }
                return this
            }, eN.prototype.digest = function(t) {
                return this.update(this._pad()), ey(null === this.pending), this._digest(t)
            }, eN.prototype._pad = function() {
                var t = this.pendingTotal,
                    e = this._delta8,
                    r = e - (t + this.padLength) % e,
                    i = Array(r + this.padLength);
                i[0] = 128;
                for (var n = 1; n < r; n++) i[n] = 0;
                if (t <<= 3, "big" === this.endian) {
                    for (var o = 8; o < this.padLength; o++) i[n++] = 0;
                    i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = t >>> 24 & 255, i[n++] = t >>> 16 & 255, i[n++] = t >>> 8 & 255, i[n++] = 255 & t
                } else
                    for (i[n++] = 255 & t, i[n++] = t >>> 8 & 255, i[n++] = t >>> 16 & 255, i[n++] = t >>> 24 & 255, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, o = 8; o < this.padLength; o++) i[n++] = 0;
                return i
            };
            var eB = {},
                ex = {},
                eC = eA.rotr32;

            function e_(t, e, r) {
                return t & e ^ t & r ^ e & r
            }
            ex.ft_1 = function(t, e, r, i) {
                return 0 === t ? e & r ^ ~e & i : 1 === t || 3 === t ? e ^ r ^ i : 2 === t ? e_(e, r, i) : void 0
            }, ex.ch32 = function(t, e, r) {
                return t & e ^ ~t & r
            }, ex.maj32 = e_, ex.p32 = function(t, e, r) {
                return t ^ e ^ r
            }, ex.s0_256 = function(t) {
                return eC(t, 2) ^ eC(t, 13) ^ eC(t, 22)
            }, ex.s1_256 = function(t) {
                return eC(t, 6) ^ eC(t, 11) ^ eC(t, 25)
            }, ex.g0_256 = function(t) {
                return eC(t, 7) ^ eC(t, 18) ^ t >>> 3
            }, ex.g1_256 = function(t) {
                return eC(t, 17) ^ eC(t, 19) ^ t >>> 10
            };
            var eO = eA.rotl32,
                eR = eA.sum32,
                ek = eA.sum32_5,
                eP = ex.ft_1,
                eU = eI.BlockHash,
                eD = [1518500249, 1859775393, 2400959708, 3395469782];

            function eT() {
                if (!(this instanceof eT)) return new eT;
                eU.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = Array(80)
            }
            eA.inherits(eT, eU), eT.blockSize = 512, eT.outSize = 160, eT.hmacStrength = 80, eT.padLength = 64, eT.prototype._update = function(t, e) {
                for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
                for (; i < r.length; i++) r[i] = eO(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
                var n = this.h[0],
                    o = this.h[1],
                    s = this.h[2],
                    u = this.h[3],
                    f = this.h[4];
                for (i = 0; i < r.length; i++) {
                    var h = ~~(i / 20),
                        a = ek(eO(n, 5), eP(h, o, s, u), f, r[i], eD[h]);
                    f = u, u = s, s = eO(o, 30), o = n, n = a
                }
                this.h[0] = eR(this.h[0], n), this.h[1] = eR(this.h[1], o), this.h[2] = eR(this.h[2], s), this.h[3] = eR(this.h[3], u), this.h[4] = eR(this.h[4], f)
            }, eT.prototype._digest = function(t) {
                return "hex" === t ? eA.toHex32(this.h, "big") : eA.split32(this.h, "big")
            };
            var eF = eA.sum32,
                eL = eA.sum32_4,
                eq = eA.sum32_5,
                ez = ex.ch32,
                ej = ex.maj32,
                eH = ex.s0_256,
                eK = ex.s1_256,
                eQ = ex.g0_256,
                eJ = ex.g1_256,
                eG = eI.BlockHash,
                eY = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

            function eV() {
                if (!(this instanceof eV)) return new eV;
                eG.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = eY, this.W = Array(64)
            }

            function eW() {
                if (!(this instanceof eW)) return new eW;
                eV.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
            }
            eA.inherits(eV, eG), eV.blockSize = 512, eV.outSize = 256, eV.hmacStrength = 192, eV.padLength = 64, eV.prototype._update = function(t, e) {
                for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
                for (; i < r.length; i++) r[i] = eL(eJ(r[i - 2]), r[i - 7], eQ(r[i - 15]), r[i - 16]);
                var n = this.h[0],
                    o = this.h[1],
                    s = this.h[2],
                    u = this.h[3],
                    f = this.h[4],
                    h = this.h[5],
                    a = this.h[6],
                    l = this.h[7];
                for (ey(this.k.length === r.length), i = 0; i < r.length; i++) {
                    var c = eq(l, eK(f), ez(f, h, a), this.k[i], r[i]),
                        d = eF(eH(n), ej(n, o, s));
                    l = a, a = h, h = f, f = eF(u, c), u = s, s = o, o = n, n = eF(c, d)
                }
                this.h[0] = eF(this.h[0], n), this.h[1] = eF(this.h[1], o), this.h[2] = eF(this.h[2], s), this.h[3] = eF(this.h[3], u), this.h[4] = eF(this.h[4], f), this.h[5] = eF(this.h[5], h), this.h[6] = eF(this.h[6], a), this.h[7] = eF(this.h[7], l)
            }, eV.prototype._digest = function(t) {
                return "hex" === t ? eA.toHex32(this.h, "big") : eA.split32(this.h, "big")
            }, eA.inherits(eW, eV), eW.blockSize = 512, eW.outSize = 224, eW.hmacStrength = 192, eW.padLength = 64, eW.prototype._digest = function(t) {
                return "hex" === t ? eA.toHex32(this.h.slice(0, 7), "big") : eA.split32(this.h.slice(0, 7), "big")
            };
            var eX = eA.rotr64_hi,
                eZ = eA.rotr64_lo,
                e$ = eA.shr64_hi,
                e0 = eA.shr64_lo,
                e1 = eA.sum64,
                e2 = eA.sum64_hi,
                e3 = eA.sum64_lo,
                e6 = eA.sum64_4_hi,
                e8 = eA.sum64_4_lo,
                e4 = eA.sum64_5_hi,
                e5 = eA.sum64_5_lo,
                e7 = eI.BlockHash,
                e9 = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

            function rt() {
                if (!(this instanceof rt)) return new rt;
                e7.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = e9, this.W = Array(160)
            }

            function re() {
                if (!(this instanceof re)) return new re;
                rt.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
            }
            eA.inherits(rt, e7), rt.blockSize = 1024, rt.outSize = 512, rt.hmacStrength = 192, rt.padLength = 128, rt.prototype._prepareBlock = function(t, e) {
                for (var r = this.W, i = 0; i < 32; i++) r[i] = t[e + i];
                for (; i < r.length; i += 2) {
                    var n = function(t, e) {
                            var r = eX(t, e, 19) ^ eX(e, t, 29) ^ e$(t, e, 6);
                            return r < 0 && (r += 4294967296), r
                        }(r[i - 4], r[i - 3]),
                        o = function(t, e) {
                            var r = eZ(t, e, 19) ^ eZ(e, t, 29) ^ e0(t, e, 6);
                            return r < 0 && (r += 4294967296), r
                        }(r[i - 4], r[i - 3]),
                        s = r[i - 14],
                        u = r[i - 13],
                        f = function(t, e) {
                            var r = eX(t, e, 1) ^ eX(t, e, 8) ^ e$(t, e, 7);
                            return r < 0 && (r += 4294967296), r
                        }(r[i - 30], r[i - 29]),
                        h = function(t, e) {
                            var r = eZ(t, e, 1) ^ eZ(t, e, 8) ^ e0(t, e, 7);
                            return r < 0 && (r += 4294967296), r
                        }(r[i - 30], r[i - 29]),
                        a = r[i - 32],
                        l = r[i - 31];
                    r[i] = e6(n, o, s, u, f, h, a, l), r[i + 1] = e8(n, o, s, u, f, h, a, l)
                }
            }, rt.prototype._update = function(t, e) {
                this._prepareBlock(t, e);
                var r = this.W,
                    i = this.h[0],
                    n = this.h[1],
                    o = this.h[2],
                    s = this.h[3],
                    u = this.h[4],
                    f = this.h[5],
                    h = this.h[6],
                    a = this.h[7],
                    l = this.h[8],
                    c = this.h[9],
                    d = this.h[10],
                    p = this.h[11],
                    m = this.h[12],
                    g = this.h[13],
                    v = this.h[14],
                    A = this.h[15];
                ey(this.k.length === r.length);
                for (var y = 0; y < r.length; y += 2) {
                    var b = v,
                        w = A,
                        M = function(t, e) {
                            var r = eX(t, e, 14) ^ eX(t, e, 18) ^ eX(e, t, 9);
                            return r < 0 && (r += 4294967296), r
                        }(l, c),
                        E = function(t, e) {
                            var r = eZ(t, e, 14) ^ eZ(t, e, 18) ^ eZ(e, t, 9);
                            return r < 0 && (r += 4294967296), r
                        }(l, c),
                        S = function(t, e, r, i, n) {
                            var o = t & r ^ ~t & n;
                            return o < 0 && (o += 4294967296), o
                        }(l, 0, d, 0, m),
                        I = function(t, e, r, i, n, o) {
                            var s = e & i ^ ~e & o;
                            return s < 0 && (s += 4294967296), s
                        }(0, c, 0, p, 0, g),
                        N = this.k[y],
                        B = this.k[y + 1],
                        x = r[y],
                        C = r[y + 1],
                        _ = e4(b, w, M, E, S, I, N, B, x, C),
                        O = e5(b, w, M, E, S, I, N, B, x, C);
                    b = function(t, e) {
                        var r = eX(t, e, 28) ^ eX(e, t, 2) ^ eX(e, t, 7);
                        return r < 0 && (r += 4294967296), r
                    }(i, n);
                    var R = e2(b, w = function(t, e) {
                            var r = eZ(t, e, 28) ^ eZ(e, t, 2) ^ eZ(e, t, 7);
                            return r < 0 && (r += 4294967296), r
                        }(i, n), M = function(t, e, r, i, n) {
                            var o = t & r ^ t & n ^ r & n;
                            return o < 0 && (o += 4294967296), o
                        }(i, 0, o, 0, u), E = function(t, e, r, i, n, o) {
                            var s = e & i ^ e & o ^ i & o;
                            return s < 0 && (s += 4294967296), s
                        }(0, n, 0, s, 0, f)),
                        k = e3(b, w, M, E);
                    v = m, A = g, m = d, g = p, d = l, p = c, l = e2(h, a, _, O), c = e3(a, a, _, O), h = u, a = f, u = o, f = s, o = i, s = n, i = e2(_, O, R, k), n = e3(_, O, R, k)
                }
                e1(this.h, 0, i, n), e1(this.h, 2, o, s), e1(this.h, 4, u, f), e1(this.h, 6, h, a), e1(this.h, 8, l, c), e1(this.h, 10, d, p), e1(this.h, 12, m, g), e1(this.h, 14, v, A)
            }, rt.prototype._digest = function(t) {
                return "hex" === t ? eA.toHex32(this.h, "big") : eA.split32(this.h, "big")
            }, eA.inherits(re, rt), re.blockSize = 1024, re.outSize = 384, re.hmacStrength = 192, re.padLength = 128, re.prototype._digest = function(t) {
                return "hex" === t ? eA.toHex32(this.h.slice(0, 12), "big") : eA.split32(this.h.slice(0, 12), "big")
            }, eB.sha1 = eT, eB.sha224 = eW, eB.sha256 = eV, eB.sha384 = re, eB.sha512 = rt;
            var rr = {},
                ri = eA.rotl32,
                rn = eA.sum32,
                ro = eA.sum32_3,
                rs = eA.sum32_4,
                ru = eI.BlockHash;

            function rf() {
                if (!(this instanceof rf)) return new rf;
                ru.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
            }

            function rh(t, e, r, i) {
                return t <= 15 ? e ^ r ^ i : t <= 31 ? e & r | ~e & i : t <= 47 ? (e | ~r) ^ i : t <= 63 ? e & i | r & ~i : e ^ (r | ~i)
            }
            eA.inherits(rf, ru), rr.ripemd160 = rf, rf.blockSize = 512, rf.outSize = 160, rf.hmacStrength = 192, rf.padLength = 64, rf.prototype._update = function(t, e) {
                for (var r = this.h[0], i = this.h[1], n = this.h[2], o = this.h[3], s = this.h[4], u = r, f = i, h = n, a = o, l = s, c = 0; c < 80; c++) {
                    var d, p, m = rn(ri(rs(r, rh(c, i, n, o), t[ra[c] + e], (d = c) <= 15 ? 0 : d <= 31 ? 1518500249 : d <= 47 ? 1859775393 : d <= 63 ? 2400959708 : 2840853838), rc[c]), s);
                    r = s, s = o, o = ri(n, 10), n = i, i = m, m = rn(ri(rs(u, rh(79 - c, f, h, a), t[rl[c] + e], (p = c) <= 15 ? 1352829926 : p <= 31 ? 1548603684 : p <= 47 ? 1836072691 : p <= 63 ? 2053994217 : 0), rd[c]), l), u = l, l = a, a = ri(h, 10), h = f, f = m
                }
                m = ro(this.h[1], n, a), this.h[1] = ro(this.h[2], o, l), this.h[2] = ro(this.h[3], s, u), this.h[3] = ro(this.h[4], r, f), this.h[4] = ro(this.h[0], i, h), this.h[0] = m
            }, rf.prototype._digest = function(t) {
                return "hex" === t ? eA.toHex32(this.h, "little") : eA.split32(this.h, "little")
            };
            var ra = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                rl = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                rc = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                rd = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];

            function rp(t, e, r) {
                if (!(this instanceof rp)) return new rp(t, e, r);
                this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(eA.toArray(e, r))
            }

            function rm(t, e, r) {
                return t(r = {
                    path: e,
                    exports: {},
                    require: function(t, e) {
                        return function() {
                            throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                        }(t, e ? ? r.path)
                    }
                }, r.exports), r.exports
            }
            rp.prototype._init = function(t) {
                t.length > this.blockSize && (t = new this.Hash().update(t).digest()), ey(t.length <= this.blockSize);
                for (var e = t.length; e < this.blockSize; e++) t.push(0);
                for (e = 0; e < t.length; e++) t[e] ^= 54;
                for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++) t[e] ^= 106;
                this.outer = new this.Hash().update(t)
            }, rp.prototype.update = function(t, e) {
                return this.inner.update(t, e), this
            }, rp.prototype.digest = function(t) {
                return this.outer.update(this.inner.digest()), this.outer.digest(t)
            }, ev.utils = eA, ev.common = eI, ev.sha = eB, ev.ripemd = rr, ev.hmac = rp, ev.sha1 = ev.sha.sha1, ev.sha256 = ev.sha.sha256, ev.sha224 = ev.sha.sha224, ev.sha384 = ev.sha.sha384, ev.sha512 = ev.sha.sha512, ev.ripemd160 = ev.ripemd.ripemd160;
            var rg = rv;

            function rv(t, e) {
                if (!t) throw Error(e || "Assertion failed")
            }
            rv.equal = function(t, e, r) {
                if (t != e) throw Error(r || "Assertion failed: " + t + " != " + e)
            };
            var rA = rm(function(t, e) {
                    function r(t) {
                        return 1 === t.length ? "0" + t : t
                    }

                    function i(t) {
                        for (var e = "", i = 0; i < t.length; i++) e += r(t[i].toString(16));
                        return e
                    }
                    e.toArray = function(t, e) {
                        if (Array.isArray(t)) return t.slice();
                        if (!t) return [];
                        var r = [];
                        if ("string" != typeof t) {
                            for (var i = 0; i < t.length; i++) r[i] = 0 | t[i];
                            return r
                        }
                        if ("hex" === e) {
                            (t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (t = "0" + t);
                            for (var i = 0; i < t.length; i += 2) r.push(parseInt(t[i] + t[i + 1], 16))
                        } else
                            for (var i = 0; i < t.length; i++) {
                                var n = t.charCodeAt(i),
                                    o = n >> 8,
                                    s = 255 & n;
                                o ? r.push(o, s) : r.push(s)
                            }
                        return r
                    }, e.zero2 = r, e.toHex = i, e.encode = function(t, e) {
                        return "hex" === e ? i(t) : t
                    }
                }),
                ry = rm(function(t, e) {
                    e.assert = rg, e.toArray = rA.toArray, e.zero2 = rA.zero2, e.toHex = rA.toHex, e.encode = rA.encode, e.getNAF = function(t, e, r) {
                        var i = Array(Math.max(t.bitLength(), r) + 1);
                        i.fill(0);
                        for (var n = 1 << e + 1, o = t.clone(), s = 0; s < i.length; s++) {
                            var u, f = o.andln(n - 1);
                            o.isOdd() ? (u = f > (n >> 1) - 1 ? (n >> 1) - f : f, o.isubn(u)) : u = 0, i[s] = u, o.iushrn(1)
                        }
                        return i
                    }, e.getJSF = function(t, e) {
                        var r = [
                            [],
                            []
                        ];
                        t = t.clone(), e = e.clone();
                        for (var i, n = 0, o = 0; t.cmpn(-n) > 0 || e.cmpn(-o) > 0;) {
                            var s, u, f = t.andln(3) + n & 3,
                                h = e.andln(3) + o & 3;
                            3 === f && (f = -1), 3 === h && (h = -1), s = 1 & f ? (3 == (i = t.andln(7) + n & 7) || 5 === i) && 2 === h ? -f : f : 0, r[0].push(s), u = 1 & h ? (3 == (i = e.andln(7) + o & 7) || 5 === i) && 2 === f ? -h : h : 0, r[1].push(u), 2 * n === s + 1 && (n = 1 - n), 2 * o === u + 1 && (o = 1 - o), t.iushrn(1), e.iushrn(1)
                        }
                        return r
                    }, e.cachedProperty = function(t, e, r) {
                        var i = "_" + e;
                        t.prototype[e] = function() {
                            return void 0 !== this[i] ? this[i] : this[i] = r.call(this)
                        }
                    }, e.parseBytes = function(t) {
                        return "string" == typeof t ? e.toArray(t, "hex") : t
                    }, e.intFromLE = function(t) {
                        return new tT(t, "hex", "le")
                    }
                }),
                rb = ry.getNAF,
                rw = ry.getJSF,
                rM = ry.assert;

            function rE(t, e) {
                this.type = t, this.p = new tT(e.p, 16), this.red = e.prime ? tT.red(e.prime) : tT.mont(this.p), this.zero = new tT(0).toRed(this.red), this.one = new tT(1).toRed(this.red), this.two = new tT(2).toRed(this.red), this.n = e.n && new tT(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = [, , , , ], this._wnafT2 = [, , , , ], this._wnafT3 = [, , , , ], this._wnafT4 = [, , , , ], this._bitLength = this.n ? this.n.bitLength() : 0;
                var r = this.n && this.p.div(this.n);
                !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
            }

            function rS(t, e) {
                this.curve = t, this.type = e, this.precomputed = null
            }
            rE.prototype.point = function() {
                throw Error("Not implemented")
            }, rE.prototype.validate = function() {
                throw Error("Not implemented")
            }, rE.prototype._fixedNafMul = function(t, e) {
                rM(t.precomputed);
                var r = t._getDoubles(),
                    i = rb(e, 1, this._bitLength),
                    n = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
                n /= 3;
                var o, s, u = [];
                for (o = 0; o < i.length; o += r.step) {
                    s = 0;
                    for (var f = o + r.step - 1; f >= o; f--) s = (s << 1) + i[f];
                    u.push(s)
                }
                for (var h = this.jpoint(null, null, null), a = this.jpoint(null, null, null), l = n; l > 0; l--) {
                    for (o = 0; o < u.length; o++)(s = u[o]) === l ? a = a.mixedAdd(r.points[o]) : s === -l && (a = a.mixedAdd(r.points[o].neg()));
                    h = h.add(a)
                }
                return h.toP()
            }, rE.prototype._wnafMul = function(t, e) {
                var r = 4,
                    i = t._getNAFPoints(r);
                r = i.wnd;
                for (var n = i.points, o = rb(e, r, this._bitLength), s = this.jpoint(null, null, null), u = o.length - 1; u >= 0; u--) {
                    for (var f = 0; u >= 0 && 0 === o[u]; u--) f++;
                    if (u >= 0 && f++, s = s.dblp(f), u < 0) break;
                    var h = o[u];
                    rM(0 !== h), s = "affine" === t.type ? h > 0 ? s.mixedAdd(n[h - 1 >> 1]) : s.mixedAdd(n[-h - 1 >> 1].neg()) : h > 0 ? s.add(n[h - 1 >> 1]) : s.add(n[-h - 1 >> 1].neg())
                }
                return "affine" === t.type ? s.toP() : s
            }, rE.prototype._wnafMulAdd = function(t, e, r, i, n) {
                var o, s, u, f = this._wnafT1,
                    h = this._wnafT2,
                    a = this._wnafT3,
                    l = 0;
                for (o = 0; o < i; o++) {
                    var c = (u = e[o])._getNAFPoints(t);
                    f[o] = c.wnd, h[o] = c.points
                }
                for (o = i - 1; o >= 1; o -= 2) {
                    var d = o - 1,
                        p = o;
                    if (1 !== f[d] || 1 !== f[p]) {
                        a[d] = rb(r[d], f[d], this._bitLength), a[p] = rb(r[p], f[p], this._bitLength), l = Math.max(a[d].length, l), l = Math.max(a[p].length, l);
                        continue
                    }
                    var m = [e[d], null, null, e[p]];
                    0 === e[d].y.cmp(e[p].y) ? (m[1] = e[d].add(e[p]), m[2] = e[d].toJ().mixedAdd(e[p].neg())) : 0 === e[d].y.cmp(e[p].y.redNeg()) ? (m[1] = e[d].toJ().mixedAdd(e[p]), m[2] = e[d].add(e[p].neg())) : (m[1] = e[d].toJ().mixedAdd(e[p]), m[2] = e[d].toJ().mixedAdd(e[p].neg()));
                    var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                        v = rw(r[d], r[p]);
                    for (l = Math.max(v[0].length, l), a[d] = Array(l), a[p] = Array(l), s = 0; s < l; s++) {
                        var A = 0 | v[0][s],
                            y = 0 | v[1][s];
                        a[d][s] = g[(A + 1) * 3 + (y + 1)], a[p][s] = 0, h[d] = m
                    }
                }
                var b = this.jpoint(null, null, null),
                    w = this._wnafT4;
                for (o = l; o >= 0; o--) {
                    for (var M = 0; o >= 0;) {
                        var E = !0;
                        for (s = 0; s < i; s++) w[s] = 0 | a[s][o], 0 !== w[s] && (E = !1);
                        if (!E) break;
                        M++, o--
                    }
                    if (o >= 0 && M++, b = b.dblp(M), o < 0) break;
                    for (s = 0; s < i; s++) {
                        var S = w[s];
                        0 !== S && (S > 0 ? u = h[s][S - 1 >> 1] : S < 0 && (u = h[s][-S - 1 >> 1].neg()), b = "affine" === u.type ? b.mixedAdd(u) : b.add(u))
                    }
                }
                for (o = 0; o < i; o++) h[o] = null;
                return n ? b : b.toP()
            }, rE.BasePoint = rS, rS.prototype.eq = function() {
                throw Error("Not implemented")
            }, rS.prototype.validate = function() {
                return this.curve.validate(this)
            }, rE.prototype.decodePoint = function(t, e) {
                t = ry.toArray(t, e);
                var r = this.p.byteLength();
                if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r) return 6 === t[0] ? rM(t[t.length - 1] % 2 == 0) : 7 === t[0] && rM(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
                if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
                throw Error("Unknown point format")
            }, rS.prototype.encodeCompressed = function(t) {
                return this.encode(t, !0)
            }, rS.prototype._encode = function(t) {
                var e = this.curve.p.byteLength(),
                    r = this.getX().toArray("be", e);
                return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e))
            }, rS.prototype.encode = function(t, e) {
                return ry.encode(this._encode(e), t)
            }, rS.prototype.precompute = function(t) {
                if (this.precomputed) return this;
                var e = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this
            }, rS.prototype._hasDoubles = function(t) {
                if (!this.precomputed) return !1;
                var e = this.precomputed.doubles;
                return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
            }, rS.prototype._getDoubles = function(t, e) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var r = [this], i = this, n = 0; n < e; n += t) {
                    for (var o = 0; o < t; o++) i = i.dbl();
                    r.push(i)
                }
                return {
                    step: t,
                    points: r
                }
            }, rS.prototype._getNAFPoints = function(t) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var e = [this], r = (1 << t) - 1, i = 1 === r ? null : this.dbl(), n = 1; n < r; n++) e[n] = e[n - 1].add(i);
                return {
                    wnd: t,
                    points: e
                }
            }, rS.prototype._getBeta = function() {
                return null
            }, rS.prototype.dblp = function(t) {
                for (var e = this, r = 0; r < t; r++) e = e.dbl();
                return e
            };
            var rI = rm(function(t) {
                    "function" == typeof Object.create ? t.exports = function(t, e) {
                        e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }))
                    } : t.exports = function(t, e) {
                        if (e) {
                            t.super_ = e;
                            var r = function() {};
                            r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                        }
                    }
                }),
                rN = ry.assert;

            function rB(t) {
                rE.call(this, "short", t), this.a = new tT(t.a, 16).toRed(this.red), this.b = new tT(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = [, , , , ], this._endoWnafT2 = [, , , , ]
            }

            function rx(t, e, r, i) {
                rE.BasePoint.call(this, t, "affine"), null === e && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new tT(e, 16), this.y = new tT(r, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function rC(t, e, r, i) {
                rE.BasePoint.call(this, t, "jacobian"), null === e && null === r && null === i ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new tT(0)) : (this.x = new tT(e, 16), this.y = new tT(r, 16), this.z = new tT(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }
            rI(rB, rE), rB.prototype._getEndomorphism = function(t) {
                if (!(!this.zeroA || !this.g || !this.n || 1 !== this.p.modn(3))) {
                    if (t.beta) e = new tT(t.beta, 16).toRed(this.red);
                    else {
                        var e, r, i, n = this._getEndoRoots(this.p);
                        e = (e = 0 > n[0].cmp(n[1]) ? n[0] : n[1]).toRed(this.red)
                    }
                    if (t.lambda) r = new tT(t.lambda, 16);
                    else {
                        var o = this._getEndoRoots(this.n);
                        0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e)) ? r = o[0] : (r = o[1], rN(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
                    }
                    return i = t.basis ? t.basis.map(function(t) {
                        return {
                            a: new tT(t.a, 16),
                            b: new tT(t.b, 16)
                        }
                    }) : this._getEndoBasis(r), {
                        beta: e,
                        lambda: r,
                        basis: i
                    }
                }
            }, rB.prototype._getEndoRoots = function(t) {
                var e = t === this.p ? this.red : tT.mont(t),
                    r = new tT(2).toRed(e).redInvm(),
                    i = r.redNeg(),
                    n = new tT(3).toRed(e).redNeg().redSqrt().redMul(r);
                return [i.redAdd(n).fromRed(), i.redSub(n).fromRed()]
            }, rB.prototype._getEndoBasis = function(t) {
                for (var e, r, i, n, o, s, u, f, h, a = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), l = t, c = this.n.clone(), d = new tT(1), p = new tT(0), m = new tT(0), g = new tT(1), v = 0; 0 !== l.cmpn(0);) {
                    var A = c.div(l);
                    f = c.sub(A.mul(l)), h = m.sub(A.mul(d));
                    var y = g.sub(A.mul(p));
                    if (!i && 0 > f.cmp(a)) e = u.neg(), r = d, i = f.neg(), n = h;
                    else if (i && 2 == ++v) break;
                    u = f, c = l, l = f, m = d, d = h, g = p, p = y
                }
                o = f.neg(), s = h;
                var b = i.sqr().add(n.sqr());
                return o.sqr().add(s.sqr()).cmp(b) >= 0 && (o = e, s = r), i.negative && (i = i.neg(), n = n.neg()), o.negative && (o = o.neg(), s = s.neg()), [{
                    a: i,
                    b: n
                }, {
                    a: o,
                    b: s
                }]
            }, rB.prototype._endoSplit = function(t) {
                var e = this.endo.basis,
                    r = e[0],
                    i = e[1],
                    n = i.b.mul(t).divRound(this.n),
                    o = r.b.neg().mul(t).divRound(this.n),
                    s = n.mul(r.a),
                    u = o.mul(i.a),
                    f = n.mul(r.b),
                    h = o.mul(i.b);
                return {
                    k1: t.sub(s).sub(u),
                    k2: f.add(h).neg()
                }
            }, rB.prototype.pointFromX = function(t, e) {
                (t = new tT(t, 16)).red || (t = t.toRed(this.red));
                var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
                    i = r.redSqrt();
                if (0 !== i.redSqr().redSub(r).cmp(this.zero)) throw Error("invalid point");
                var n = i.fromRed().isOdd();
                return (e && !n || !e && n) && (i = i.redNeg()), this.point(t, i)
            }, rB.prototype.validate = function(t) {
                if (t.inf) return !0;
                var e = t.x,
                    r = t.y,
                    i = this.a.redMul(e),
                    n = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
                return 0 === r.redSqr().redISub(n).cmpn(0)
            }, rB.prototype._endoWnafMulAdd = function(t, e, r) {
                for (var i = this._endoWnafT1, n = this._endoWnafT2, o = 0; o < t.length; o++) {
                    var s = this._endoSplit(e[o]),
                        u = t[o],
                        f = u._getBeta();
                    s.k1.negative && (s.k1.ineg(), u = u.neg(!0)), s.k2.negative && (s.k2.ineg(), f = f.neg(!0)), i[2 * o] = u, i[2 * o + 1] = f, n[2 * o] = s.k1, n[2 * o + 1] = s.k2
                }
                for (var h = this._wnafMulAdd(1, i, n, 2 * o, r), a = 0; a < 2 * o; a++) i[a] = null, n[a] = null;
                return h
            }, rI(rx, rE.BasePoint), rB.prototype.point = function(t, e, r) {
                return new rx(this, t, e, r)
            }, rB.prototype.pointFromJSON = function(t, e) {
                return rx.fromJSON(this, t, e)
            }, rx.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var t = this.precomputed;
                    if (t && t.beta) return t.beta;
                    var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (t) {
                        var r = this.curve,
                            i = function(t) {
                                return r.point(t.x.redMul(r.endo.beta), t.y)
                            };
                        t.beta = e, e.precomputed = {
                            beta: null,
                            naf: t.naf && {
                                wnd: t.naf.wnd,
                                points: t.naf.points.map(i)
                            },
                            doubles: t.doubles && {
                                step: t.doubles.step,
                                points: t.doubles.points.map(i)
                            }
                        }
                    }
                    return e
                }
            }, rx.prototype.toJSON = function() {
                return this.precomputed ? [this.x, this.y, this.precomputed && {
                    doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1)
                    },
                    naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1)
                    }
                }] : [this.x, this.y]
            }, rx.fromJSON = function(t, e, r) {
                "string" == typeof e && (e = JSON.parse(e));
                var i = t.point(e[0], e[1], r);
                if (!e[2]) return i;

                function n(e) {
                    return t.point(e[0], e[1], r)
                }
                var o = e[2];
                return i.precomputed = {
                    beta: null,
                    doubles: o.doubles && {
                        step: o.doubles.step,
                        points: [i].concat(o.doubles.points.map(n))
                    },
                    naf: o.naf && {
                        wnd: o.naf.wnd,
                        points: [i].concat(o.naf.points.map(n))
                    }
                }, i
            }, rx.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }, rx.prototype.isInfinity = function() {
                return this.inf
            }, rx.prototype.add = function(t) {
                if (this.inf) return t;
                if (t.inf) return this;
                if (this.eq(t)) return this.dbl();
                if (this.neg().eq(t) || 0 === this.x.cmp(t.x)) return this.curve.point(null, null);
                var e = this.y.redSub(t.y);
                0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
                var r = e.redSqr().redISub(this.x).redISub(t.x),
                    i = e.redMul(this.x.redSub(r)).redISub(this.y);
                return this.curve.point(r, i)
            }, rx.prototype.dbl = function() {
                if (this.inf) return this;
                var t = this.y.redAdd(this.y);
                if (0 === t.cmpn(0)) return this.curve.point(null, null);
                var e = this.curve.a,
                    r = this.x.redSqr(),
                    i = t.redInvm(),
                    n = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(i),
                    o = n.redSqr().redISub(this.x.redAdd(this.x)),
                    s = n.redMul(this.x.redSub(o)).redISub(this.y);
                return this.curve.point(o, s)
            }, rx.prototype.getX = function() {
                return this.x.fromRed()
            }, rx.prototype.getY = function() {
                return this.y.fromRed()
            }, rx.prototype.mul = function(t) {
                return t = new tT(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
            }, rx.prototype.mulAdd = function(t, e, r) {
                var i = [this, e],
                    n = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(i, n) : this.curve._wnafMulAdd(1, i, n, 2)
            }, rx.prototype.jmulAdd = function(t, e, r) {
                var i = [this, e],
                    n = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(i, n, !0) : this.curve._wnafMulAdd(1, i, n, 2, !0)
            }, rx.prototype.eq = function(t) {
                return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
            }, rx.prototype.neg = function(t) {
                if (this.inf) return this;
                var e = this.curve.point(this.x, this.y.redNeg());
                if (t && this.precomputed) {
                    var r = this.precomputed,
                        i = function(t) {
                            return t.neg()
                        };
                    e.precomputed = {
                        naf: r.naf && {
                            wnd: r.naf.wnd,
                            points: r.naf.points.map(i)
                        },
                        doubles: r.doubles && {
                            step: r.doubles.step,
                            points: r.doubles.points.map(i)
                        }
                    }
                }
                return e
            }, rx.prototype.toJ = function() {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }, rI(rC, rE.BasePoint), rB.prototype.jpoint = function(t, e, r) {
                return new rC(this, t, e, r)
            }, rC.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var t = this.z.redInvm(),
                    e = t.redSqr(),
                    r = this.x.redMul(e),
                    i = this.y.redMul(e).redMul(t);
                return this.curve.point(r, i)
            }, rC.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, rC.prototype.add = function(t) {
                if (this.isInfinity()) return t;
                if (t.isInfinity()) return this;
                var e = t.z.redSqr(),
                    r = this.z.redSqr(),
                    i = this.x.redMul(e),
                    n = t.x.redMul(r),
                    o = this.y.redMul(e.redMul(t.z)),
                    s = t.y.redMul(r.redMul(this.z)),
                    u = i.redSub(n),
                    f = o.redSub(s);
                if (0 === u.cmpn(0)) return 0 !== f.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var h = u.redSqr(),
                    a = h.redMul(u),
                    l = i.redMul(h),
                    c = f.redSqr().redIAdd(a).redISub(l).redISub(l),
                    d = f.redMul(l.redISub(c)).redISub(o.redMul(a)),
                    p = this.z.redMul(t.z).redMul(u);
                return this.curve.jpoint(c, d, p)
            }, rC.prototype.mixedAdd = function(t) {
                if (this.isInfinity()) return t.toJ();
                if (t.isInfinity()) return this;
                var e = this.z.redSqr(),
                    r = this.x,
                    i = t.x.redMul(e),
                    n = this.y,
                    o = t.y.redMul(e).redMul(this.z),
                    s = r.redSub(i),
                    u = n.redSub(o);
                if (0 === s.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var f = s.redSqr(),
                    h = f.redMul(s),
                    a = r.redMul(f),
                    l = u.redSqr().redIAdd(h).redISub(a).redISub(a),
                    c = u.redMul(a.redISub(l)).redISub(n.redMul(h)),
                    d = this.z.redMul(s);
                return this.curve.jpoint(l, c, d)
            }, rC.prototype.dblp = function(t) {
                if (0 === t || this.isInfinity()) return this;
                if (!t) return this.dbl();
                if (this.curve.zeroA || this.curve.threeA) {
                    var e, r = this;
                    for (e = 0; e < t; e++) r = r.dbl();
                    return r
                }
                var i = this.curve.a,
                    n = this.curve.tinv,
                    o = this.x,
                    s = this.y,
                    u = this.z,
                    f = u.redSqr().redSqr(),
                    h = s.redAdd(s);
                for (e = 0; e < t; e++) {
                    var a = o.redSqr(),
                        l = h.redSqr(),
                        c = l.redSqr(),
                        d = a.redAdd(a).redIAdd(a).redIAdd(i.redMul(f)),
                        p = o.redMul(l),
                        m = d.redSqr().redISub(p.redAdd(p)),
                        g = p.redISub(m),
                        v = d.redMul(g);
                    v = v.redIAdd(v).redISub(c);
                    var A = h.redMul(u);
                    e + 1 < t && (f = f.redMul(c)), o = m, u = A, h = v
                }
                return this.curve.jpoint(o, h.redMul(n), u)
            }, rC.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, rC.prototype._zeroDbl = function() {
                var t, e, r;
                if (this.zOne) {
                    var i = this.x.redSqr(),
                        n = this.y.redSqr(),
                        o = n.redSqr(),
                        s = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
                    s = s.redIAdd(s);
                    var u = i.redAdd(i).redIAdd(i),
                        f = u.redSqr().redISub(s).redISub(s),
                        h = o.redIAdd(o);
                    h = (h = h.redIAdd(h)).redIAdd(h), t = f, e = u.redMul(s.redISub(f)).redISub(h), r = this.y.redAdd(this.y)
                } else {
                    var a = this.x.redSqr(),
                        l = this.y.redSqr(),
                        c = l.redSqr(),
                        d = this.x.redAdd(l).redSqr().redISub(a).redISub(c);
                    d = d.redIAdd(d);
                    var p = a.redAdd(a).redIAdd(a),
                        m = p.redSqr(),
                        g = c.redIAdd(c);
                    g = (g = g.redIAdd(g)).redIAdd(g), t = m.redISub(d).redISub(d), e = p.redMul(d.redISub(t)).redISub(g), r = (r = this.y.redMul(this.z)).redIAdd(r)
                }
                return this.curve.jpoint(t, e, r)
            }, rC.prototype._threeDbl = function() {
                var t, e, r;
                if (this.zOne) {
                    var i = this.x.redSqr(),
                        n = this.y.redSqr(),
                        o = n.redSqr(),
                        s = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
                    s = s.redIAdd(s);
                    var u = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
                        f = u.redSqr().redISub(s).redISub(s);
                    t = f;
                    var h = o.redIAdd(o);
                    h = (h = h.redIAdd(h)).redIAdd(h), e = u.redMul(s.redISub(f)).redISub(h), r = this.y.redAdd(this.y)
                } else {
                    var a = this.z.redSqr(),
                        l = this.y.redSqr(),
                        c = this.x.redMul(l),
                        d = this.x.redSub(a).redMul(this.x.redAdd(a));
                    d = d.redAdd(d).redIAdd(d);
                    var p = c.redIAdd(c),
                        m = (p = p.redIAdd(p)).redAdd(p);
                    t = d.redSqr().redISub(m), r = this.y.redAdd(this.z).redSqr().redISub(l).redISub(a);
                    var g = l.redSqr();
                    g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g), e = d.redMul(p.redISub(t)).redISub(g)
                }
                return this.curve.jpoint(t, e, r)
            }, rC.prototype._dbl = function() {
                var t = this.curve.a,
                    e = this.x,
                    r = this.y,
                    i = this.z,
                    n = i.redSqr().redSqr(),
                    o = e.redSqr(),
                    s = r.redSqr(),
                    u = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(n)),
                    f = e.redAdd(e),
                    h = (f = f.redIAdd(f)).redMul(s),
                    a = u.redSqr().redISub(h.redAdd(h)),
                    l = h.redISub(a),
                    c = s.redSqr();
                c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
                var d = u.redMul(l).redISub(c),
                    p = r.redAdd(r).redMul(i);
                return this.curve.jpoint(a, d, p)
            }, rC.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var t = this.x.redSqr(),
                    e = this.y.redSqr(),
                    r = this.z.redSqr(),
                    i = e.redSqr(),
                    n = t.redAdd(t).redIAdd(t),
                    o = n.redSqr(),
                    s = this.x.redAdd(e).redSqr().redISub(t).redISub(i),
                    u = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),
                    f = i.redIAdd(i);
                f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
                var h = n.redIAdd(s).redSqr().redISub(o).redISub(u).redISub(f),
                    a = e.redMul(h);
                a = (a = a.redIAdd(a)).redIAdd(a);
                var l = this.x.redMul(u).redISub(a);
                l = (l = l.redIAdd(l)).redIAdd(l);
                var c = this.y.redMul(h.redMul(f.redISub(h)).redISub(s.redMul(u)));
                c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
                var d = this.z.redAdd(s).redSqr().redISub(r).redISub(u);
                return this.curve.jpoint(l, c, d)
            }, rC.prototype.mul = function(t, e) {
                return t = new tT(t, e), this.curve._wnafMul(this, t)
            }, rC.prototype.eq = function(t) {
                if ("affine" === t.type) return this.eq(t.toJ());
                if (this === t) return !0;
                var e = this.z.redSqr(),
                    r = t.z.redSqr();
                if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
                var i = e.redMul(this.z),
                    n = r.redMul(t.z);
                return 0 === this.y.redMul(n).redISub(t.y.redMul(i)).cmpn(0)
            }, rC.prototype.eqXToP = function(t) {
                var e = this.z.redSqr(),
                    r = t.toRed(this.curve.red).redMul(e);
                if (0 === this.x.cmp(r)) return !0;
                for (var i = t.clone(), n = this.curve.redN.redMul(e);;) {
                    if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1;
                    if (r.redIAdd(n), 0 === this.x.cmp(r)) return !0
                }
            }, rC.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, rC.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            };
            var r_ = rm(function(t, e) {
                    e.base = rE, e.short = rB, e.mont = null, e.edwards = null
                }),
                rO = rm(function(t, e) {
                    var r, i = ry.assert;

                    function n(t) {
                        "short" === t.type ? this.curve = new r_.short(t) : "edwards" === t.type ? this.curve = new r_.edwards(t) : this.curve = new r_.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                    }

                    function o(t, r) {
                        Object.defineProperty(e, t, {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                var i = new n(r);
                                return Object.defineProperty(e, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: i
                                }), i
                            }
                        })
                    }
                    e.PresetCurve = n, o("p192", {
                        type: "short",
                        prime: "p192",
                        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                        hash: ev.sha256,
                        gRed: !1,
                        g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                    }), o("p224", {
                        type: "short",
                        prime: "p224",
                        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                        hash: ev.sha256,
                        gRed: !1,
                        g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                    }), o("p256", {
                        type: "short",
                        prime: null,
                        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                        hash: ev.sha256,
                        gRed: !1,
                        g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                    }), o("p384", {
                        type: "short",
                        prime: null,
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                        hash: ev.sha384,
                        gRed: !1,
                        g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                    }), o("p521", {
                        type: "short",
                        prime: null,
                        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                        hash: ev.sha512,
                        gRed: !1,
                        g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                    }), o("curve25519", {
                        type: "mont",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "76d06",
                        b: "1",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: ev.sha256,
                        gRed: !1,
                        g: ["9"]
                    }), o("ed25519", {
                        type: "edwards",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "-1",
                        c: "1",
                        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: ev.sha256,
                        gRed: !1,
                        g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                    });
                    try {
                        r = null.crash()
                    } catch {
                        r = void 0
                    }
                    o("secp256k1", {
                        type: "short",
                        prime: "k256",
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                        a: "0",
                        b: "7",
                        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                        h: "1",
                        hash: ev.sha256,
                        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                        lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                        basis: [{
                            a: "3086d221a7d46bcde86c90e49284eb15",
                            b: "-e4437ed6010e88286f547fa90abfe4c3"
                        }, {
                            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                            b: "3086d221a7d46bcde86c90e49284eb15"
                        }],
                        gRed: !1,
                        g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
                    })
                });

            function rR(t) {
                if (!(this instanceof rR)) return new rR(t);
                this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                var e = rA.toArray(t.entropy, t.entropyEnc || "hex"),
                    r = rA.toArray(t.nonce, t.nonceEnc || "hex"),
                    i = rA.toArray(t.pers, t.persEnc || "hex");
                rg(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, i)
            }
            rR.prototype._init = function(t, e, r) {
                var i = t.concat(e).concat(r);
                this.K = Array(this.outLen / 8), this.V = Array(this.outLen / 8);
                for (var n = 0; n < this.V.length; n++) this.K[n] = 0, this.V[n] = 1;
                this._update(i), this._reseed = 1, this.reseedInterval = 281474976710656
            }, rR.prototype._hmac = function() {
                return new ev.hmac(this.hash, this.K)
            }, rR.prototype._update = function(t) {
                var e = this._hmac().update(this.V).update([0]);
                t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
            }, rR.prototype.reseed = function(t, e, r, i) {
                "string" != typeof e && (i = r, r = e, e = null), t = rA.toArray(t, e), r = rA.toArray(r, i), rg(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(r || [])), this._reseed = 1
            }, rR.prototype.generate = function(t, e, r, i) {
                if (this._reseed > this.reseedInterval) throw Error("Reseed is required");
                "string" != typeof e && (i = r, r = e, e = null), r && (r = rA.toArray(r, i || "hex"), this._update(r));
                for (var n = []; n.length < t;) this.V = this._hmac().update(this.V).digest(), n = n.concat(this.V);
                var o = n.slice(0, t);
                return this._update(r), this._reseed++, rA.encode(o, e)
            };
            var rk = ry.assert;

            function rP(t, e) {
                this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
            }
            rP.fromPublic = function(t, e, r) {
                return e instanceof rP ? e : new rP(t, {
                    pub: e,
                    pubEnc: r
                })
            }, rP.fromPrivate = function(t, e, r) {
                return e instanceof rP ? e : new rP(t, {
                    priv: e,
                    privEnc: r
                })
            }, rP.prototype.validate = function() {
                var t = this.getPublic();
                return t.isInfinity() ? {
                    result: !1,
                    reason: "Invalid public key"
                } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
                    result: !0,
                    reason: null
                } : {
                    result: !1,
                    reason: "Public key * N != O"
                } : {
                    result: !1,
                    reason: "Public key is not a point"
                }
            }, rP.prototype.getPublic = function(t, e) {
                return "string" == typeof t && (e = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, t) : this.pub
            }, rP.prototype.getPrivate = function(t) {
                return "hex" === t ? this.priv.toString(16, 2) : this.priv
            }, rP.prototype._importPrivate = function(t, e) {
                this.priv = new tT(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n)
            }, rP.prototype._importPublic = function(t, e) {
                if (t.x || t.y) {
                    "mont" === this.ec.curve.type ? rk(t.x, "Need x coordinate") : ("short" === this.ec.curve.type || "edwards" === this.ec.curve.type) && rk(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
                    return
                }
                this.pub = this.ec.curve.decodePoint(t, e)
            }, rP.prototype.derive = function(t) {
                return t.validate() || rk(t.validate(), "public point not validated"), t.mul(this.priv).getX()
            }, rP.prototype.sign = function(t, e, r) {
                return this.ec.sign(t, this, e, r)
            }, rP.prototype.verify = function(t, e) {
                return this.ec.verify(t, e, this)
            }, rP.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            };
            var rU = ry.assert;

            function rD(t, e) {
                if (t instanceof rD) return t;
                this._importDER(t, e) || (rU(t.r && t.s, "Signature without r or s"), this.r = new tT(t.r, 16), this.s = new tT(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
            }

            function rT() {
                this.place = 0
            }

            function rF(t, e) {
                var r = t[e.place++];
                if (!(128 & r)) return r;
                var i = 15 & r;
                if (0 === i || i > 4) return !1;
                for (var n = 0, o = 0, s = e.place; o < i; o++, s++) n <<= 8, n |= t[s], n >>>= 0;
                return !(n <= 127) && (e.place = s, n)
            }

            function rL(t) {
                for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r;) e++;
                return 0 === e ? t : t.slice(e)
            }

            function rq(t, e) {
                if (e < 128) {
                    t.push(e);
                    return
                }
                var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
                for (t.push(128 | r); --r;) t.push(e >>> (r << 3) & 255);
                t.push(e)
            }
            rD.prototype._importDER = function(t, e) {
                t = ry.toArray(t, e);
                var r = new rT;
                if (48 !== t[r.place++]) return !1;
                var i = rF(t, r);
                if (!1 === i || i + r.place !== t.length || 2 !== t[r.place++]) return !1;
                var n = rF(t, r);
                if (!1 === n) return !1;
                var o = t.slice(r.place, n + r.place);
                if (r.place += n, 2 !== t[r.place++]) return !1;
                var s = rF(t, r);
                if (!1 === s || t.length !== s + r.place) return !1;
                var u = t.slice(r.place, s + r.place);
                if (0 === o[0]) {
                    if (!(128 & o[1])) return !1;
                    o = o.slice(1)
                }
                if (0 === u[0]) {
                    if (!(128 & u[1])) return !1;
                    u = u.slice(1)
                }
                return this.r = new tT(o), this.s = new tT(u), this.recoveryParam = null, !0
            }, rD.prototype.toDER = function(t) {
                var e = this.r.toArray(),
                    r = this.s.toArray();
                for (128 & e[0] && (e = [0].concat(e)), 128 & r[0] && (r = [0].concat(r)), e = rL(e), r = rL(r); !r[0] && !(128 & r[1]);) r = r.slice(1);
                var i = [2];
                rq(i, e.length), (i = i.concat(e)).push(2), rq(i, r.length);
                var n = i.concat(r),
                    o = [48];
                return rq(o, n.length), o = o.concat(n), ry.encode(o, t)
            };
            var rz = function() {
                    throw Error("unsupported")
                },
                rj = ry.assert;

            function rH(t) {
                if (!(this instanceof rH)) return new rH(t);
                "string" == typeof t && (rj(Object.prototype.hasOwnProperty.call(rO, t), "Unknown curve " + t), t = rO[t]), t instanceof rO.PresetCurve && (t = {
                    curve: t
                }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
            }
            rH.prototype.keyPair = function(t) {
                return new rP(this, t)
            }, rH.prototype.keyFromPrivate = function(t, e) {
                return rP.fromPrivate(this, t, e)
            }, rH.prototype.keyFromPublic = function(t, e) {
                return rP.fromPublic(this, t, e)
            }, rH.prototype.genKeyPair = function(t) {
                t || (t = {});
                for (var e = new rR({
                        hash: this.hash,
                        pers: t.pers,
                        persEnc: t.persEnc || "utf8",
                        entropy: t.entropy || rz(this.hash.hmacStrength),
                        entropyEnc: t.entropy && t.entropyEnc || "utf8",
                        nonce: this.n.toArray()
                    }), r = this.n.byteLength(), i = this.n.sub(new tT(2));;) {
                    var n = new tT(e.generate(r));
                    if (!(n.cmp(i) > 0)) return n.iaddn(1), this.keyFromPrivate(n)
                }
            }, rH.prototype._truncateToN = function(t, e) {
                var r = 8 * t.byteLength() - this.n.bitLength();
                return r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
            }, rH.prototype.sign = function(t, e, r, i) {
                "object" == typeof r && (i = r, r = null), i || (i = {}), e = this.keyFromPrivate(e, r), t = this._truncateToN(new tT(t, 16));
                for (var n = this.n.byteLength(), o = e.getPrivate().toArray("be", n), s = t.toArray("be", n), u = new rR({
                        hash: this.hash,
                        entropy: o,
                        nonce: s,
                        pers: i.pers,
                        persEnc: i.persEnc || "utf8"
                    }), f = this.n.sub(new tT(1)), h = 0;; h++) {
                    var a = i.k ? i.k(h) : new tT(u.generate(this.n.byteLength()));
                    if (!(0 >= (a = this._truncateToN(a, !0)).cmpn(1) || a.cmp(f) >= 0)) {
                        var l = this.g.mul(a);
                        if (!l.isInfinity()) {
                            var c = l.getX(),
                                d = c.umod(this.n);
                            if (0 !== d.cmpn(0)) {
                                var p = a.invm(this.n).mul(d.mul(e.getPrivate()).iadd(t));
                                if (0 !== (p = p.umod(this.n)).cmpn(0)) {
                                    var m = (l.getY().isOdd() ? 1 : 0) | (0 !== c.cmp(d) ? 2 : 0);
                                    return i.canonical && p.cmp(this.nh) > 0 && (p = this.n.sub(p), m ^= 1), new rD({
                                        r: d,
                                        s: p,
                                        recoveryParam: m
                                    })
                                }
                            }
                        }
                    }
                }
            }, rH.prototype.verify = function(t, e, r, i) {
                t = this._truncateToN(new tT(t, 16)), r = this.keyFromPublic(r, i);
                var n = (e = new rD(e, "hex")).r,
                    o = e.s;
                if (0 > n.cmpn(1) || n.cmp(this.n) >= 0 || 0 > o.cmpn(1) || o.cmp(this.n) >= 0) return !1;
                var s, u = o.invm(this.n),
                    f = u.mul(t).umod(this.n),
                    h = u.mul(n).umod(this.n);
                return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(f, r.getPublic(), h)).isInfinity() && s.eqXToP(n) : !(s = this.g.mulAdd(f, r.getPublic(), h)).isInfinity() && 0 === s.getX().umod(this.n).cmp(n)
            }, rH.prototype.recoverPubKey = function(t, e, r, i) {
                rj((3 & r) === r, "The recovery param is more than two bits"), e = new rD(e, i);
                var n = this.n,
                    o = new tT(t),
                    s = e.r,
                    u = e.s,
                    f = 1 & r,
                    h = r >> 1;
                if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h) throw Error("Unable to find sencond key candinate");
                s = h ? this.curve.pointFromX(s.add(this.curve.n), f) : this.curve.pointFromX(s, f);
                var a = e.r.invm(n),
                    l = n.sub(o).mul(a).umod(n),
                    c = u.mul(a).umod(n);
                return this.g.mulAdd(l, s, c)
            }, rH.prototype.getKeyRecoveryParam = function(t, e, r, i) {
                if (null !== (e = new rD(e, i)).recoveryParam) return e.recoveryParam;
                for (var n, o = 0; o < 4; o++) {
                    try {
                        n = this.recoverPubKey(t, e, o)
                    } catch {
                        continue
                    }
                    if (n.eq(r)) return o
                }
                throw Error("Unable to find valid recovery factor")
            };
            var rK = rm(function(t, e) {
                e.version = "6.5.4", e.utils = ry, e.rand = function() {
                    throw Error("unsupported")
                }, e.curve = r_, e.curves = rO, e.ec = rH, e.eddsa = null
            }).ec;
            let rQ = new tw("signing-key/5.7.0"),
                rJ = null;

            function rG() {
                return rJ || (rJ = new rK("secp256k1")), rJ
            }
            class rY {
                constructor(t) {
                    ep(this, "curve", "secp256k1"), ep(this, "privateKey", t_(t)), 32 !== function(t) {
                        if ("string" != typeof t) t = t_(t);
                        else if (!tx(t) || t.length % 2) return null;
                        return (t.length - 2) / 2
                    }(this.privateKey) && rQ.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
                    let e = rG().keyFromPrivate(tB(this.privateKey));
                    ep(this, "publicKey", "0x" + e.getPublic(!1, "hex")), ep(this, "compressedPublicKey", "0x" + e.getPublic(!0, "hex")), ep(this, "_isSigningKey", !0)
                }
                _addPoint(t) {
                    let e = rG().keyFromPublic(tB(this.publicKey)),
                        r = rG().keyFromPublic(tB(t));
                    return "0x" + e.pub.add(r.pub).encodeCompressed("hex")
                }
                signDigest(t) {
                    let e = rG().keyFromPrivate(tB(this.privateKey)),
                        r = tB(t);
                    32 !== r.length && rQ.throwArgumentError("bad digest length", "digest", t);
                    let i = e.sign(r, {
                        canonical: !0
                    });
                    return tk({
                        recoveryParam: i.recoveryParam,
                        r: tR("0x" + i.r.toString(16), 32),
                        s: tR("0x" + i.s.toString(16), 32)
                    })
                }
                computeSharedSecret(t) {
                    let e = rG().keyFromPrivate(tB(this.privateKey)),
                        r = rG().keyFromPublic(tB(rV(t)));
                    return tR("0x" + e.derive(r.getPublic()).toString(16), 32)
                }
                static isSigningKey(t) {
                    return !!(t && t._isSigningKey)
                }
            }

            function rV(t, e) {
                let r = tB(t);
                if (32 === r.length) {
                    let t = new rY(r);
                    return e ? "0x" + rG().keyFromPrivate(r).getPublic(!0, "hex") : t.publicKey
                }
                return 33 === r.length ? e ? t_(r) : "0x" + rG().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? e ? "0x" + rG().keyFromPublic(r).getPublic(!0, "hex") : t_(r) : rQ.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
            }
            async function rW(t, e, r, i, n, o) {
                switch (r.t) {
                    case "eip191":
                        var s;
                        return s = r.s, (function(t) {
                            let e = null;
                            if ("string" != typeof t && ea.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), e = el(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== t && ea.throwArgumentError("bad address checksum", "address", t);
                            else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                                for (t.substring(2, 4) !== function(t) {
                                        let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map(t => ec[t]).join("");
                                        for (; e.length >= ed;) {
                                            let t = e.substring(0, ed);
                                            e = parseInt(t, 10) % 97 + e.substring(t.length)
                                        }
                                        let r = String(98 - parseInt(e, 10) % 97);
                                        for (; r.length < 2;) r = "0" + r;
                                        return r
                                    }(t) && ea.throwArgumentError("bad icap checksum", "address", t), e = new tL(t.substring(4), 36).toString(16); e.length < 40;) e = "0" + e;
                                e = el("0x" + e)
                            } else ea.throwArgumentError("invalid address", "address", t);
                            return e
                        })(tO(tP(tO(rV(function(t, e) {
                            let r = tk(e),
                                i = {
                                    r: tB(r.r),
                                    s: tB(r.s)
                                };
                            return "0x" + rG().recoverPubKey(tB(t), i, r.recoveryParam).encode("hex", !1)
                        }(tB(eh(e)), s)), 1)), 12)).toLowerCase() === t.toLowerCase();
                    case "eip1271":
                        return await rX(t, e, r.s, i, n, o);
                    default:
                        throw Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`)
                }
            }
            async function rX(t, e, r, i, n, o) {
                try {
                    let s = "0x1626ba7e",
                        u = r.substring(2),
                        f = eh(e).substring(2),
                        h = await fetch(`${o||"https://rpc.walletconnect.com/v1"}/?chainId=${i}&projectId=${n}`, {
                            method: "POST",
                            body: JSON.stringify({
                                id: Date.now() + Math.floor(1e3 * Math.random()),
                                jsonrpc: "2.0",
                                method: "eth_call",
                                params: [{
                                    to: t,
                                    data: s + f + "00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041" + u
                                }, "latest"]
                            })
                        }),
                        {
                            result: a
                        } = await h.json();
                    return !!a && a.slice(0, s.length).toLowerCase() === s.toLowerCase()
                } catch (t) {
                    return console.error("isValidEip1271Signature: ", t), !1
                }
            }
            new tw("transactions/5.7.0"), (a = m || (m = {}))[a.legacy = 0] = "legacy", a[a.eip2930 = 1] = "eip2930", a[a.eip1559 = 2] = "eip1559";
            var rZ = Object.defineProperty,
                r$ = Object.defineProperties,
                r0 = Object.getOwnPropertyDescriptors,
                r1 = Object.getOwnPropertySymbols,
                r2 = Object.prototype.hasOwnProperty,
                r3 = Object.prototype.propertyIsEnumerable,
                r6 = (t, e, r) => e in t ? rZ(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                r8 = (t, e) => {
                    for (var r in e || (e = {})) r2.call(e, r) && r6(t, r, e[r]);
                    if (r1)
                        for (var r of r1(e)) r3.call(e, r) && r6(t, r, e[r]);
                    return t
                },
                r4 = (t, e) => r$(t, r0(e));
            let r5 = t => t ? .split(":"),
                r7 = t => {
                    let e = t && r5(t);
                    if (e) return t.includes("did:pkh:") ? e[3] : e[1]
                },
                r9 = t => {
                    let e = t && r5(t);
                    if (e) return e[2] + ":" + e[3]
                },
                it = t => {
                    let e = t && r5(t);
                    if (e) return e.pop()
                };
            async function ie(t) {
                let {
                    cacao: e,
                    projectId: r
                } = t, {
                    s: i,
                    p: n
                } = e, o = ir(n, n.iss), s = it(n.iss);
                return await rW(s, o, i, r7(n.iss), r)
            }
            let ir = (t, e) => {
                let r = `${t.domain} wants you to sign in with your Ethereum account:`,
                    i = it(e);
                if (!t.aud && !t.uri) throw Error("Either `aud` or `uri` is required to construct the message");
                let n = t.statement || void 0,
                    o = `URI: ${t.aud||t.uri}`,
                    s = `Version: ${t.version}`,
                    u = `Chain ID: ${r7(e)}`,
                    f = `Nonce: ${t.nonce}`,
                    h = `Issued At: ${t.iat}`,
                    a = t.exp ? `Expiration Time: ${t.exp}` : void 0,
                    l = t.nbf ? `Not Before: ${t.nbf}` : void 0,
                    c = t.requestId ? `Request ID: ${t.requestId}` : void 0,
                    d = t.resources ? `Resources:${t.resources.map(t=>`
- ${t}`).join("")}` : void 0,
                    p = ic(t.resources);
                return p && (n = function(t = "", e) {
                    ii(e);
                    let r = "I further authorize the stated URI to perform the following actions on my behalf: ";
                    if (t.includes(r)) return t;
                    let i = [],
                        n = 0;
                    Object.keys(e.att).forEach(t => {
                        let r = Object.keys(e.att[t]).map(t => ({
                            ability: t.split("/")[0],
                            action: t.split("/")[1]
                        }));
                        r.sort((t, e) => t.action.localeCompare(e.action));
                        let o = {};
                        r.forEach(t => {
                            o[t.ability] || (o[t.ability] = []), o[t.ability].push(t.action)
                        });
                        let s = Object.keys(o).map(e => (n++, `(${n}) '${e}': '${o[e].join("', '")}' for '${t}'.`));
                        i.push(s.join(", ").replace(".,", "."))
                    });
                    let o = i.join(" "),
                        s = `${r}${o}`;
                    return `${t?t+" ":""}${s}`
                }(n, is(p))), [r, i, "", n, "", o, s, u, f, h, a, l, c, d].filter(t => null != t).join(`
`)
            };

            function ii(t) {
                if (!t) throw Error("No recap provided, value is undefined");
                if (!t.att) throw Error("No `att` property found");
                let e = Object.keys(t.att);
                if (!(null != e && e.length)) throw Error("No resources found in `att` property");
                e.forEach(e => {
                    let r = t.att[e];
                    if (Array.isArray(r) || "object" != typeof r) throw Error(`Resource must be an object: ${e}`);
                    if (!Object.keys(r).length) throw Error(`Resource object is empty: ${e}`);
                    Object.keys(r).forEach(t => {
                        let e = r[t];
                        if (!Array.isArray(e)) throw Error(`Ability limits ${t} must be an array of objects, found: ${e}`);
                        if (!e.length) throw Error(`Value of ${t} is empty array, must be an array with objects`);
                        e.forEach(e => {
                            if ("object" != typeof e) throw Error(`Ability limits (${t}) must be an array of objects, found: ${e}`)
                        })
                    })
                })
            }

            function io(t) {
                return ii(t), `urn:recap:${O.from(JSON.stringify(t)).toString("base64").replace(/=/g,"")}`
            }

            function is(t) {
                var e;
                let r = (e = t.replace("urn:recap:", ""), JSON.parse(O.from(e, "base64").toString("utf-8")));
                return ii(r), r
            }

            function iu(t, e, r) {
                return io(function(t, e, r, i = {}) {
                    return r ? .sort((t, e) => t.localeCompare(e)), {
                        att: {
                            [t]: function(t, e, r = {}) {
                                return Object.assign({}, ...(e = e ? .sort((t, e) => t.localeCompare(e))).map(e => ({
                                    [`${t}/${e}`]: [r]
                                })))
                            }(e, r, i)
                        }
                    }
                }(t, e, r))
            }

            function ih(t, e) {
                return io(function(t, e) {
                    ii(t), ii(e);
                    let r = Object.keys(t.att).concat(Object.keys(e.att)).sort((t, e) => t.localeCompare(e)),
                        i = {
                            att: {}
                        };
                    return r.forEach(r => {
                        var n, o;
                        Object.keys((null == (n = t.att) ? void 0 : n[r]) || {}).concat(Object.keys((null == (o = e.att) ? void 0 : o[r]) || {})).sort((t, e) => t.localeCompare(e)).forEach(n => {
                            var o, s;
                            i.att[r] = r4(r8({}, i.att[r]), {
                                [n]: (null == (o = t.att[r]) ? void 0 : o[n]) || (null == (s = e.att[r]) ? void 0 : s[n])
                            })
                        })
                    }), i
                }(is(t), is(e)))
            }

            function ia(t) {
                var e;
                let r = is(t);
                ii(r);
                let i = null == (e = r.att) ? void 0 : e.eip155;
                return i ? Object.keys(i).map(t => t.split("/")[1]) : []
            }

            function il(t) {
                let e = is(t);
                ii(e);
                let r = [];
                return Object.values(e.att).forEach(t => {
                    Object.values(t).forEach(t => {
                        var e;
                        null != (e = t ? .[0]) && e.chains && r.push(t[0].chains)
                    })
                }), [...new Set(r.flat())]
            }

            function ic(t) {
                if (!t) return;
                let e = t ? .[t.length - 1];
                return e && e.includes("urn:recap:") ? e : void 0
            }
            let id = "base10",
                ip = "base16",
                im = "base64pad",
                ig = "utf8",
                iv = 1;

            function iA() {
                let t = I.Au();
                return {
                    privateKey: (0, N.BB)(t.secretKey, ip),
                    publicKey: (0, N.BB)(t.publicKey, ip)
                }
            }

            function iy() {
                let t = (0, E.randomBytes)(32);
                return (0, N.BB)(t, ip)
            }

            function ib(t, e) {
                let r = I.gi((0, N.mL)(t, ip), (0, N.mL)(e, ip), !0),
                    i = new M.t(S.mE, r).expand(32);
                return (0, N.BB)(i, ip)
            }

            function iw(t) {
                let e = (0, S.vp)((0, N.mL)(t, ip));
                return (0, N.BB)(e, ip)
            }

            function iM(t) {
                let e = (0, S.vp)((0, N.mL)(t, ig));
                return (0, N.BB)(e, ip)
            }

            function iE(t) {
                return Number((0, N.BB)(t, id))
            }

            function iS(t) {
                var e;
                let r = (e = "u" > typeof t.type ? t.type : 0, (0, N.mL)(`${e}`, id));
                if (iE(r) === iv && typeof t.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
                let i = "u" > typeof t.senderPublicKey ? (0, N.mL)(t.senderPublicKey, ip) : void 0,
                    n = "u" > typeof t.iv ? (0, N.mL)(t.iv, ip) : (0, E.randomBytes)(12);
                return function(t) {
                    if (iE(t.type) === iv) {
                        if (typeof t.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
                        return (0, N.BB)((0, N.zo)([t.type, t.senderPublicKey, t.iv, t.sealed]), im)
                    }
                    return (0, N.BB)((0, N.zo)([t.type, t.iv, t.sealed]), im)
                }({
                    type: r,
                    sealed: new w.OK((0, N.mL)(t.symKey, ip)).seal(n, (0, N.mL)(t.message, ig)),
                    iv: n,
                    senderPublicKey: i
                })
            }

            function iI(t) {
                let e = new w.OK((0, N.mL)(t.symKey, ip)),
                    {
                        sealed: r,
                        iv: i
                    } = iN(t.encoded),
                    n = e.open(i, r);
                if (null === n) throw Error("Failed to decrypt");
                return (0, N.BB)(n, ig)
            }

            function iN(t) {
                let e = (0, N.mL)(t, im),
                    r = e.slice(0, 1);
                if (iE(r) === iv) {
                    let t = e.slice(1, 33),
                        i = e.slice(33, 45);
                    return {
                        type: r,
                        sealed: e.slice(45),
                        iv: i,
                        senderPublicKey: t
                    }
                }
                let i = e.slice(1, 13);
                return {
                    type: r,
                    sealed: e.slice(13),
                    iv: i
                }
            }

            function iB(t, e) {
                let r = iN(t);
                return ix({
                    type: iE(r.type),
                    senderPublicKey: "u" > typeof r.senderPublicKey ? (0, N.BB)(r.senderPublicKey, ip) : void 0,
                    receiverPublicKey: e ? .receiverPublicKey
                })
            }

            function ix(t) {
                let e = t ? .type || 0;
                if (e === iv) {
                    if (typeof t ? .senderPublicKey > "u") throw Error("missing sender public key");
                    if (typeof t ? .receiverPublicKey > "u") throw Error("missing receiver public key")
                }
                return {
                    type: e,
                    senderPublicKey: t ? .senderPublicKey,
                    receiverPublicKey: t ? .receiverPublicKey
                }
            }

            function iC(t) {
                return t.type === iv && "string" == typeof t.senderPublicKey && "string" == typeof t.receiverPublicKey
            }

            function i_(t, e) {
                let [r, i, n] = t.split("."), o = O.from(function(t) {
                    let e = t.replace(/-/g, "+").replace(/_/g, "/"),
                        r = e.length % 4;
                    return r > 0 && (e += "=".repeat(4 - r)), e
                }(n), "base64");
                if (64 !== o.length) throw Error("Invalid signature length");
                let s = o.slice(0, 32).toString("hex"),
                    u = o.slice(32, 64).toString("hex"),
                    f = `${r}.${i}`,
                    h = new S.mE().update(O.from(f)).digest(),
                    a = new B.ec("p256").keyFromPublic({
                        x: O.from(e.x, "base64").toString("hex"),
                        y: O.from(e.y, "base64").toString("hex")
                    }, "hex"),
                    l = O.from(h).toString("hex");
                if (!a.verify(l, {
                        r: s,
                        s: u
                    })) throw Error("Invalid signature");
                return (0, x.decodeJWT)(t).payload
            }

            function iO(t) {
                return t ? .relay || {
                    protocol: "irn"
                }
            }

            function iR(t) {
                let e = C.iO[t];
                if (typeof e > "u") throw Error(`Relay Protocol not supported: ${t}`);
                return e
            }
            var ik = Object.defineProperty,
                iP = Object.defineProperties,
                iU = Object.getOwnPropertyDescriptors,
                iD = Object.getOwnPropertySymbols,
                iT = Object.prototype.hasOwnProperty,
                iF = Object.prototype.propertyIsEnumerable,
                iL = (t, e, r) => e in t ? ik(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                iq = (t, e) => {
                    for (var r in e || (e = {})) iT.call(e, r) && iL(t, r, e[r]);
                    if (iD)
                        for (var r of iD(e)) iF.call(e, r) && iL(t, r, e[r]);
                    return t
                },
                iz = (t, e) => iP(t, iU(e));

            function ij(t) {
                var e;
                let r = (t = (t = t.includes("wc://") ? t.replace("wc://", "") : t).includes("wc:") ? t.replace("wc:", "") : t).indexOf(":"),
                    i = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0,
                    n = t.substring(0, r),
                    o = t.substring(r + 1, i).split("@"),
                    s = "u" > typeof i ? t.substring(i) : "",
                    u = b.parse(s),
                    f = "string" == typeof u.methods ? u.methods.split(",") : void 0;
                return {
                    protocol: n,
                    topic: (e = o[0]).startsWith("//") ? e.substring(2) : e,
                    version: parseInt(o[1], 10),
                    symKey: u.symKey,
                    relay: function(t, e = "-") {
                        let r = {},
                            i = "relay" + e;
                        return Object.keys(t).forEach(e => {
                            if (e.startsWith(i)) {
                                let n = e.replace(i, ""),
                                    o = t[e];
                                r[n] = o
                            }
                        }), r
                    }(u),
                    methods: f,
                    expiryTimestamp: u.expiryTimestamp ? parseInt(u.expiryTimestamp, 10) : void 0
                }
            }

            function iH(t) {
                return `${t.protocol}:${t.topic}@${t.version}?` + b.stringify(iq(iz(iq({
                    symKey: t.symKey
                }, function(t, e = "-") {
                    let r = {};
                    return Object.keys(t).forEach(i => {
                        t[i] && (r["relay" + e + i] = t[i])
                    }), r
                }(t.relay)), {
                    expiryTimestamp: t.expiryTimestamp
                }), t.methods ? {
                    methods: t.methods.join(",")
                } : {}))
            }

            function iK(t) {
                let e = [];
                return t.forEach(t => {
                    let [r, i] = t.split(":");
                    e.push(`${r}:${i}`)
                }), e
            }

            function iQ(t) {
                return t.includes(":")
            }

            function iJ(t) {
                return iQ(t) ? t.split(":")[0] : t
            }

            function iG(t, e) {
                let r = function(t) {
                    let e = {};
                    return t ? .forEach(t => {
                        let [r, i] = t.split(":");
                        e[r] || (e[r] = {
                            accounts: [],
                            chains: [],
                            events: []
                        }), e[r].accounts.push(t), e[r].chains.push(`${r}:${i}`)
                    }), e
                }(e = e.map(t => t.replace("did:pkh:", "")));
                for (let [e, i] of Object.entries(r)) i.methods ? i.methods = tu(i.methods, t) : i.methods = t, i.events = ["chainChanged", "accountsChanged"];
                return r
            }
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            let iY = {
                    INVALID_METHOD: {
                        message: "Invalid method.",
                        code: 1001
                    },
                    INVALID_EVENT: {
                        message: "Invalid event.",
                        code: 1002
                    },
                    INVALID_UPDATE_REQUEST: {
                        message: "Invalid update request.",
                        code: 1003
                    },
                    INVALID_EXTEND_REQUEST: {
                        message: "Invalid extend request.",
                        code: 1004
                    },
                    INVALID_SESSION_SETTLE_REQUEST: {
                        message: "Invalid session settle request.",
                        code: 1005
                    },
                    UNAUTHORIZED_METHOD: {
                        message: "Unauthorized method.",
                        code: 3001
                    },
                    UNAUTHORIZED_EVENT: {
                        message: "Unauthorized event.",
                        code: 3002
                    },
                    UNAUTHORIZED_UPDATE_REQUEST: {
                        message: "Unauthorized update request.",
                        code: 3003
                    },
                    UNAUTHORIZED_EXTEND_REQUEST: {
                        message: "Unauthorized extend request.",
                        code: 3004
                    },
                    USER_REJECTED: {
                        message: "User rejected.",
                        code: 5e3
                    },
                    USER_REJECTED_CHAINS: {
                        message: "User rejected chains.",
                        code: 5001
                    },
                    USER_REJECTED_METHODS: {
                        message: "User rejected methods.",
                        code: 5002
                    },
                    USER_REJECTED_EVENTS: {
                        message: "User rejected events.",
                        code: 5003
                    },
                    UNSUPPORTED_CHAINS: {
                        message: "Unsupported chains.",
                        code: 5100
                    },
                    UNSUPPORTED_METHODS: {
                        message: "Unsupported methods.",
                        code: 5101
                    },
                    UNSUPPORTED_EVENTS: {
                        message: "Unsupported events.",
                        code: 5102
                    },
                    UNSUPPORTED_ACCOUNTS: {
                        message: "Unsupported accounts.",
                        code: 5103
                    },
                    UNSUPPORTED_NAMESPACE_KEY: {
                        message: "Unsupported namespace key.",
                        code: 5104
                    },
                    USER_DISCONNECTED: {
                        message: "User disconnected.",
                        code: 6e3
                    },
                    SESSION_SETTLEMENT_FAILED: {
                        message: "Session settlement failed.",
                        code: 7e3
                    },
                    WC_METHOD_UNSUPPORTED: {
                        message: "Unsupported wc_ method.",
                        code: 10001
                    }
                },
                iV = {
                    NOT_INITIALIZED: {
                        message: "Not initialized.",
                        code: 1
                    },
                    NO_MATCHING_KEY: {
                        message: "No matching key.",
                        code: 2
                    },
                    RESTORE_WILL_OVERRIDE: {
                        message: "Restore will override.",
                        code: 3
                    },
                    RESUBSCRIBED: {
                        message: "Resubscribed.",
                        code: 4
                    },
                    MISSING_OR_INVALID: {
                        message: "Missing or invalid.",
                        code: 5
                    },
                    EXPIRED: {
                        message: "Expired.",
                        code: 6
                    },
                    UNKNOWN_TYPE: {
                        message: "Unknown type.",
                        code: 7
                    },
                    MISMATCHED_TOPIC: {
                        message: "Mismatched topic.",
                        code: 8
                    },
                    NON_CONFORMING_NAMESPACES: {
                        message: "Non conforming namespaces.",
                        code: 9
                    }
                };

            function iW(t, e) {
                let {
                    message: r,
                    code: i
                } = iV[t];
                return {
                    message: e ? `${r} ${e}` : r,
                    code: i
                }
            }

            function iX(t, e) {
                let {
                    message: r,
                    code: i
                } = iY[t];
                return {
                    message: e ? `${r} ${e}` : r,
                    code: i
                }
            }

            function iZ(t, e) {
                return !!Array.isArray(t) && (!("u" > typeof e) || !t.length || t.every(e))
            }

            function i$(t) {
                return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length
            }

            function i0(t) {
                return typeof t > "u"
            }

            function i1(t, e) {
                return !!(e && i0(t)) || "string" == typeof t && !!t.trim().length
            }

            function i2(t, e) {
                return !!(e && i0(t)) || "number" == typeof t && !isNaN(t)
            }

            function i3(t, e) {
                let {
                    requiredNamespaces: r
                } = e, i = Object.keys(t.namespaces), n = Object.keys(r), o = !0;
                return !!V(n, i) && (i.forEach(e => {
                    let {
                        accounts: i,
                        methods: n,
                        events: s
                    } = t.namespaces[e], u = iK(i), f = r[e];
                    V(P(e, f), u) && V(f.methods, n) && V(f.events, s) || (o = !1)
                }), o)
            }

            function i6(t) {
                return !!(i1(t, !1) && t.includes(":")) && 2 === t.split(":").length
            }

            function i8(t) {
                if (i1(t, !1)) try {
                    return "u" > typeof new URL(t)
                } catch {}
                return !1
            }

            function i4(t) {
                var e;
                return null == (e = t ? .proposer) ? void 0 : e.publicKey
            }

            function i5(t) {
                return t ? .topic
            }

            function i7(t, e) {
                let r = null;
                return i1(t ? .publicKey, !1) || (r = iW("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r
            }

            function i9(t) {
                let e = !0;
                return iZ(t) ? t.length && (e = t.every(t => i1(t, !1))) : e = !1, e
            }

            function nt(t, e) {
                let r = null;
                return Object.values(t).forEach(t => {
                    var i;
                    let n;
                    if (r) return;
                    let o = (i = `${e}, namespace`, n = null, i9(t ? .methods) ? i9(t ? .events) || (n = iX("UNSUPPORTED_EVENTS", `${i}, events should be an array of strings or empty array for no events`)) : n = iX("UNSUPPORTED_METHODS", `${i}, methods should be an array of strings or empty array for no methods`), n);
                    o && (r = o)
                }), r
            }

            function ne(t, e, r) {
                let i = null;
                if (t && i$(t)) {
                    let n;
                    let o = nt(t, e);
                    o && (i = o);
                    let s = (n = null, Object.entries(t).forEach(([t, i]) => {
                        var o, s;
                        let u;
                        if (n) return;
                        let f = (o = P(t, i), s = `${e} ${r}`, u = null, iZ(o) && o.length ? o.forEach(t => {
                            u || i6(t) || (u = iX("UNSUPPORTED_CHAINS", `${s}, chain ${t} should be a string and conform to "namespace:chainId" format`))
                        }) : i6(t) || (u = iX("UNSUPPORTED_CHAINS", `${s}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), u);
                        f && (n = f)
                    }), n);
                    s && (i = s)
                } else i = iW("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
                return i
            }

            function nr(t, e) {
                let r = null;
                if (t && i$(t)) {
                    let i;
                    let n = nt(t, e);
                    n && (r = n);
                    let o = (i = null, Object.values(t).forEach(t => {
                        var r, n;
                        let o;
                        if (i) return;
                        let s = (r = t ? .accounts, n = `${e} namespace`, o = null, iZ(r) ? r.forEach(t => {
                            o || function(t) {
                                if (i1(t, !1) && t.includes(":")) {
                                    let e = t.split(":");
                                    if (3 === e.length) {
                                        let t = e[0] + ":" + e[1];
                                        return !!e[2] && i6(t)
                                    }
                                }
                                return !1
                            }(t) || (o = iX("UNSUPPORTED_ACCOUNTS", `${n}, account ${t} should be a string and conform to "namespace:chainId:address" format`))
                        }) : o = iX("UNSUPPORTED_ACCOUNTS", `${n}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), o);
                        s && (i = s)
                    }), i);
                    o && (r = o)
                } else r = iW("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
                return r
            }

            function ni(t) {
                return i1(t.protocol, !0)
            }

            function nn(t, e) {
                let r = !1;
                return e && !t ? r = !0 : t && iZ(t) && t.length && t.forEach(t => {
                    r = ni(t)
                }), r
            }

            function no(t) {
                return "number" == typeof t
            }

            function ns(t) {
                return "u" > typeof t
            }

            function nu(t) {
                return !(!t || "object" != typeof t || !t.code || !i2(t.code, !1) || !t.message || !i1(t.message, !1))
            }

            function nf(t) {
                return !(i0(t) || !i1(t.method, !1))
            }

            function nh(t) {
                return !(i0(t) || i0(t.result) && i0(t.error) || !i2(t.id, !1) || !i1(t.jsonrpc, !1))
            }

            function na(t) {
                return !(i0(t) || !i1(t.name, !1))
            }

            function nl(t, e) {
                return !(!i6(e) || !(function(t) {
                    let e = [];
                    return Object.values(t).forEach(t => {
                        e.push(...iK(t.accounts))
                    }), e
                })(t).includes(e))
            }

            function nc(t, e, r) {
                return !!i1(r, !1) && (function(t, e) {
                    let r = [];
                    return Object.values(t).forEach(t => {
                        iK(t.accounts).includes(e) && r.push(...t.methods)
                    }), r
                })(t, e).includes(r)
            }

            function nd(t, e, r) {
                return !!i1(r, !1) && (function(t, e) {
                    let r = [];
                    return Object.values(t).forEach(t => {
                        iK(t.accounts).includes(e) && r.push(...t.events)
                    }), r
                })(t, e).includes(r)
            }

            function np(t, e, r) {
                let i = null,
                    n = function(t) {
                        let e = {};
                        return Object.keys(t).forEach(r => {
                            var i;
                            r.includes(":") ? e[r] = t[r] : null == (i = t[r].chains) || i.forEach(i => {
                                e[i] = {
                                    methods: t[r].methods,
                                    events: t[r].events
                                }
                            })
                        }), e
                    }(t),
                    o = function(t) {
                        let e = {};
                        return Object.keys(t).forEach(r => {
                            if (r.includes(":")) e[r] = t[r];
                            else {
                                let i = iK(t[r].accounts);
                                i ? .forEach(i => {
                                    e[i] = {
                                        accounts: t[r].accounts.filter(t => t.includes(`${i}:`)),
                                        methods: t[r].methods,
                                        events: t[r].events
                                    }
                                })
                            }
                        }), e
                    }(e),
                    s = Object.keys(n),
                    u = Object.keys(o),
                    f = nm(Object.keys(t)),
                    h = nm(Object.keys(e)),
                    a = f.filter(t => !h.includes(t));
                return a.length && (i = iW("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${a.toString()}
      Received: ${Object.keys(e).toString()}`)), V(s, u) || (i = iW("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${s.toString()}
      Approved: ${u.toString()}`)), Object.keys(e).forEach(t => {
                    if (!t.includes(":") || i) return;
                    let n = iK(e[t].accounts);
                    n.includes(t) || (i = iW("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${t}
        Required: ${t}
        Approved: ${n.toString()}`))
                }), s.forEach(t => {
                    i || (V(n[t].methods, o[t].methods) ? V(n[t].events, o[t].events) || (i = iW("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${t}`)) : i = iW("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${t}`))
                }), i
            }

            function nm(t) {
                return [...new Set(t.map(t => t.includes(":") ? t.split(":")[0] : t))]
            }

            function ng(t, e) {
                return i2(t, !1) && t <= e.max && t >= e.min
            }

            function nv() {
                let t = Q();
                return new Promise(e => {
                    switch (t) {
                        case z.browser:
                            e(K() && navigator ? .onLine);
                            break;
                        case z.reactNative:
                            e(nA());
                            break;
                        case z.node:
                        default:
                            e(!0)
                    }
                })
            }
            async function nA() {
                if (H() && "u" > typeof r.g && null != r.g && r.g.NetInfo) {
                    let t = await (null == r.g ? void 0 : r.g.NetInfo.fetch());
                    return t ? .isConnected
                }
                return !0
            }

            function ny(t) {
                switch (Q()) {
                    case z.browser:
                        !H() && K() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
                        break;
                    case z.reactNative:
                        H() && "u" > typeof r.g && null != r.g && r.g.NetInfo && r.g ? .NetInfo.addEventListener(e => t(e ? .isConnected));
                    case z.node:
                }
            }
            let nb = {};
            class nw {
                static get(t) {
                    return nb[t]
                }
                static set(t, e) {
                    nb[t] = e
                }
                static delete(t) {
                    delete nb[t]
                }
            }
        }
    }
]);