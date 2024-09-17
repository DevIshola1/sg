(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7968], {
        58412: function(e, t, n) {
            "use strict";

            function r(e) {
                var t = e.match(/^var\((.*)\)$/);
                return t ? t[1] : e
            }

            function i(e, t) {
                var n = {};
                if ("object" == typeof t) ! function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        i = {};
                    for (var o in t) {
                        var s = t[o],
                            a = [...r, o];
                        "string" == typeof s || "number" == typeof s || null == s ? i[o] = n(s, a) : "object" != typeof s || Array.isArray(s) ? console.warn('Skipping invalid key "'.concat(a.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(s) ? "Array" : typeof s, '"')) : i[o] = e(s, n, a)
                    }
                    return i
                }(t, (t, i) => {
                    null != t && (n[r(function(e, t) {
                        var n = e;
                        for (var r of t) {
                            if (!(r in n)) throw Error("Path ".concat(t.join(" -> "), " does not exist in object"));
                            n = n[r]
                        }
                        return n
                    }(e, i))] = String(t))
                });
                else
                    for (var i in e) {
                        var o = e[i];
                        null != o && (n[r(i)] = o)
                    }
                return Object.defineProperty(n, "toString", {
                    value: function() {
                        return Object.keys(this).map(e => "".concat(e, ":").concat(this[e])).join(";")
                    },
                    writable: !1
                }), n
            }
            n.d(t, {
                L: function() {
                    return i
                }
            })
        },
        35996: function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach(function(t) {
                        ! function(e, t, n) {
                            var r;
                            (t = "symbol" == typeof(r = function(e, t) {
                                if ("object" != typeof e || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, t || "default");
                                    if ("object" != typeof r) return r;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(t, "string")) ? r : String(r)) in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n
                        }(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            n.d(t, {
                $: function() {
                    return a
                }
            });
            var o = e => function() {
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    var o = Object.assign({}, ...n.map(e => e.styles)),
                        s = Object.keys(o),
                        a = s.filter(e => "mappings" in o[e]);
                    return Object.assign(t => {
                        var n = [],
                            r = {},
                            s = i({}, t),
                            c = !1;
                        for (var u of a) {
                            var l = t[u];
                            if (null != l)
                                for (var d of (c = !0, o[u].mappings)) r[d] = l, null == s[d] && delete s[d]
                        }
                        var f = c ? i(i({}, r), s) : t;
                        for (var h in f)
                            if ("continue" === function() {
                                    var e = f[h],
                                        t = o[h];
                                    try {
                                        if (t.mappings) return "continue";
                                        if ("string" == typeof e || "number" == typeof e) n.push(t.values[e].defaultClass);
                                        else if (Array.isArray(e))
                                            for (var r = 0; r < e.length; r++) {
                                                var i = e[r];
                                                if (null != i) {
                                                    var s = t.responsiveArray[r];
                                                    n.push(t.values[i].conditions[s])
                                                }
                                            } else
                                                for (var a in e) {
                                                    var c = e[a];
                                                    null != c && n.push(t.values[c].conditions[a])
                                                }
                                    } catch (e) {
                                        throw e
                                    }
                                }()) continue;
                        return e(n.join(" "))
                    }, {
                        properties: new Set(s)
                    })
                },
                s = e => e,
                a = function() {
                    return o(s)(...arguments)
                }
        },
        42337: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return o
                },
                M: function() {
                    return i
                }
            });
            var r = function(e, t) {
                return Object.defineProperty(e, "__recipe__", {
                    value: t,
                    writable: !1
                }), e
            };

            function i(e) {
                var {
                    conditions: t
                } = e;
                if (!t) throw Error("Styles have no conditions");
                return r(function(e) {
                    if ("string" == typeof e || "number" == typeof e || "boolean" == typeof e) {
                        if (!t.defaultCondition) throw Error("No default condition");
                        return {
                            [t.defaultCondition]: e
                        }
                    }
                    if (Array.isArray(e)) {
                        if (!("responsiveArray" in t)) throw Error("Responsive arrays are not supported");
                        var n = {};
                        for (var r in t.responsiveArray) null != e[r] && (n[t.responsiveArray[r]] = e[r]);
                        return n
                    }
                    return e
                }, {
                    importPath: "@vanilla-extract/sprinkles/createUtils",
                    importName: "createNormalizeValueFn",
                    args: [{
                        conditions: e.conditions
                    }]
                })
            }

            function o(e) {
                var {
                    conditions: t
                } = e;
                if (!t) throw Error("Styles have no conditions");
                var n = i(e);
                return r(function(e, r) {
                    if ("string" == typeof e || "number" == typeof e || "boolean" == typeof e) {
                        if (!t.defaultCondition) throw Error("No default condition");
                        return r(e, t.defaultCondition)
                    }
                    var i = Array.isArray(e) ? n(e) : e,
                        o = {};
                    for (var s in i) null != i[s] && (o[s] = r(i[s], s));
                    return o
                }, {
                    importPath: "@vanilla-extract/sprinkles/createUtils",
                    importName: "createMapValueFn",
                    args: [{
                        conditions: e.conditions
                    }]
                })
            }
        },
        52892: function(e) {
            "use strict";
            var t = {
                single_source_shortest_paths: function(e, n, r) {
                    var i, o, s, a, c, u, l, d = {},
                        f = {};
                    f[n] = 0;
                    var h = t.PriorityQueue.make();
                    for (h.push(n, 0); !h.empty();)
                        for (s in o = (i = h.pop()).value, a = i.cost, c = e[o] || {}) c.hasOwnProperty(s) && (u = a + c[s], l = f[s], (void 0 === f[s] || l > u) && (f[s] = u, h.push(s, u), d[s] = o));
                    if (void 0 !== r && void 0 === f[r]) throw Error(["Could not find a path from ", n, " to ", r, "."].join(""));
                    return d
                },
                extract_shortest_path_from_predecessor_list: function(e, t) {
                    for (var n = [], r = t; r;) n.push(r), e[r], r = e[r];
                    return n.reverse(), n
                },
                find_path: function(e, n, r) {
                    var i = t.single_source_shortest_paths(e, n, r);
                    return t.extract_shortest_path_from_predecessor_list(i, r)
                },
                PriorityQueue: {
                    make: function(e) {
                        var n, r = t.PriorityQueue,
                            i = {};
                        for (n in e = e || {}, r) r.hasOwnProperty(n) && (i[n] = r[n]);
                        return i.queue = [], i.sorter = e.sorter || r.default_sorter, i
                    },
                    default_sorter: function(e, t) {
                        return e.cost - t.cost
                    },
                    push: function(e, t) {
                        this.queue.push({
                            value: e,
                            cost: t
                        }), this.queue.sort(this.sorter)
                    },
                    pop: function() {
                        return this.queue.shift()
                    },
                    empty: function() {
                        return 0 === this.queue.length
                    }
                }
            };
            e.exports = t
        },
        47059: function(e) {
            "use strict";
            e.exports = function(e) {
                for (var t = [], n = e.length, r = 0; r < n; r++) {
                    var i = e.charCodeAt(r);
                    if (i >= 55296 && i <= 56319 && n > r + 1) {
                        var o = e.charCodeAt(r + 1);
                        o >= 56320 && o <= 57343 && (i = (i - 55296) * 1024 + o - 56320 + 65536, r += 1)
                    }
                    if (i < 128) {
                        t.push(i);
                        continue
                    }
                    if (i < 2048) {
                        t.push(i >> 6 | 192), t.push(63 & i | 128);
                        continue
                    }
                    if (i < 55296 || i >= 57344 && i < 65536) {
                        t.push(i >> 12 | 224), t.push(i >> 6 & 63 | 128), t.push(63 & i | 128);
                        continue
                    }
                    if (i >= 65536 && i <= 1114111) {
                        t.push(i >> 18 | 240), t.push(i >> 12 & 63 | 128), t.push(i >> 6 & 63 | 128), t.push(63 & i | 128);
                        continue
                    }
                    t.push(239, 191, 189)
                }
                return new Uint8Array(t).buffer
            }
        },
        37836: function(e) {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                n = "~";

            function r() {}

            function i(e, t, n) {
                this.fn = e, this.context = t, this.once = n || !1
            }

            function o(e, t, r, o, s) {
                if ("function" != typeof r) throw TypeError("The listener must be a function");
                var a = new i(r, o || e, s),
                    c = n ? n + t : t;
                return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], a] : e._events[c].push(a) : (e._events[c] = a, e._eventsCount++), e
            }

            function s(e, t) {
                0 == --e._eventsCount ? e._events = new r : delete e._events[t]
            }

            function a() {
                this._events = new r, this._eventsCount = 0
            }
            Object.create && (r.prototype = Object.create(null), new r().__proto__ || (n = !1)), a.prototype.eventNames = function() {
                var e, r, i = [];
                if (0 === this._eventsCount) return i;
                for (r in e = this._events) t.call(e, r) && i.push(n ? r.slice(1) : r);
                return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
            }, a.prototype.listeners = function(e) {
                var t = n ? n + e : e,
                    r = this._events[t];
                if (!r) return [];
                if (r.fn) return [r.fn];
                for (var i = 0, o = r.length, s = Array(o); i < o; i++) s[i] = r[i].fn;
                return s
            }, a.prototype.listenerCount = function(e) {
                var t = n ? n + e : e,
                    r = this._events[t];
                return r ? r.fn ? 1 : r.length : 0
            }, a.prototype.emit = function(e, t, r, i, o, s) {
                var a = n ? n + e : e;
                if (!this._events[a]) return !1;
                var c, u, l = this._events[a],
                    d = arguments.length;
                if (l.fn) {
                    switch (l.once && this.removeListener(e, l.fn, void 0, !0), d) {
                        case 1:
                            return l.fn.call(l.context), !0;
                        case 2:
                            return l.fn.call(l.context, t), !0;
                        case 3:
                            return l.fn.call(l.context, t, r), !0;
                        case 4:
                            return l.fn.call(l.context, t, r, i), !0;
                        case 5:
                            return l.fn.call(l.context, t, r, i, o), !0;
                        case 6:
                            return l.fn.call(l.context, t, r, i, o, s), !0
                    }
                    for (u = 1, c = Array(d - 1); u < d; u++) c[u - 1] = arguments[u];
                    l.fn.apply(l.context, c)
                } else {
                    var f, h = l.length;
                    for (u = 0; u < h; u++) switch (l[u].once && this.removeListener(e, l[u].fn, void 0, !0), d) {
                        case 1:
                            l[u].fn.call(l[u].context);
                            break;
                        case 2:
                            l[u].fn.call(l[u].context, t);
                            break;
                        case 3:
                            l[u].fn.call(l[u].context, t, r);
                            break;
                        case 4:
                            l[u].fn.call(l[u].context, t, r, i);
                            break;
                        default:
                            if (!c)
                                for (f = 1, c = Array(d - 1); f < d; f++) c[f - 1] = arguments[f];
                            l[u].fn.apply(l[u].context, c)
                    }
                }
                return !0
            }, a.prototype.on = function(e, t, n) {
                return o(this, e, t, n, !1)
            }, a.prototype.once = function(e, t, n) {
                return o(this, e, t, n, !0)
            }, a.prototype.removeListener = function(e, t, r, i) {
                var o = n ? n + e : e;
                if (!this._events[o]) return this;
                if (!t) return s(this, o), this;
                var a = this._events[o];
                if (a.fn) a.fn !== t || i && !a.once || r && a.context !== r || s(this, o);
                else {
                    for (var c = 0, u = [], l = a.length; c < l; c++)(a[c].fn !== t || i && !a[c].once || r && a[c].context !== r) && u.push(a[c]);
                    u.length ? this._events[o] = 1 === u.length ? u[0] : u : s(this, o)
                }
                return this
            }, a.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = n ? n + e : e, this._events[t] && s(this, t)) : (this._events = new r, this._eventsCount = 0), this
            }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n, a.EventEmitter = a, e.exports = a
        },
        60291: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = n(99920)._(n(2265)).default.createContext(null)
        },
        19783: function(e, t, n) {
            let r = n(87936),
                i = n(23364),
                o = n(64811),
                s = n(65773);

            function a(e, t, n, o, s) {
                let a = [].slice.call(arguments, 1),
                    c = a.length,
                    u = "function" == typeof a[c - 1];
                if (!u && !r()) throw Error("Callback required as last argument");
                if (u) {
                    if (c < 2) throw Error("Too few arguments provided");
                    2 === c ? (s = n, n = t, t = o = void 0) : 3 === c && (t.getContext && void 0 === s ? (s = o, o = void 0) : (s = o, o = n, n = t, t = void 0))
                } else {
                    if (c < 1) throw Error("Too few arguments provided");
                    return 1 === c ? (n = t, t = o = void 0) : 2 !== c || t.getContext || (o = n, n = t, t = void 0), new Promise(function(r, s) {
                        try {
                            let s = i.create(n, o);
                            r(e(s, t, o))
                        } catch (e) {
                            s(e)
                        }
                    })
                }
                try {
                    let r = i.create(n, o);
                    s(null, e(r, t, o))
                } catch (e) {
                    s(e)
                }
            }
            t.create = i.create, t.toCanvas = a.bind(null, o.render), t.toDataURL = a.bind(null, o.renderToDataURL), t.toString = a.bind(null, function(e, t, n) {
                return s.render(e, n)
            })
        },
        87936: function(e) {
            e.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        80532: function(e, t, n) {
            let r = n(2601).getSymbolSize;
            t.getRowColCoords = function(e) {
                if (1 === e) return [];
                let t = Math.floor(e / 7) + 2,
                    n = r(e),
                    i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
                    o = [n - 7];
                for (let e = 1; e < t - 1; e++) o[e] = o[e - 1] - i;
                return o.push(6), o.reverse()
            }, t.getPositions = function(e) {
                let n = [],
                    r = t.getRowColCoords(e),
                    i = r.length;
                for (let e = 0; e < i; e++)
                    for (let t = 0; t < i; t++)(0 !== e || 0 !== t) && (0 !== e || t !== i - 1) && (e !== i - 1 || 0 !== t) && n.push([r[e], r[t]]);
                return n
            }
        },
        62971: function(e, t, n) {
            let r = n(58257),
                i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function o(e) {
                this.mode = r.ALPHANUMERIC, this.data = e
            }
            o.getBitsLength = function(e) {
                return 11 * Math.floor(e / 2) + e % 2 * 6
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(e) {
                let t;
                for (t = 0; t + 2 <= this.data.length; t += 2) {
                    let n = 45 * i.indexOf(this.data[t]);
                    n += i.indexOf(this.data[t + 1]), e.put(n, 11)
                }
                this.data.length % 2 && e.put(i.indexOf(this.data[t]), 6)
            }, e.exports = o
        },
        86423: function(e) {
            function t() {
                this.buffer = [], this.length = 0
            }
            t.prototype = {
                get: function(e) {
                    return (this.buffer[Math.floor(e / 8)] >>> 7 - e % 8 & 1) == 1
                },
                put: function(e, t) {
                    for (let n = 0; n < t; n++) this.putBit((e >>> t - n - 1 & 1) == 1)
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(e) {
                    let t = Math.floor(this.length / 8);
                    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                }
            }, e.exports = t
        },
        43143: function(e) {
            function t(e) {
                if (!e || e < 1) throw Error("BitMatrix size must be defined and greater than 0");
                this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e)
            }
            t.prototype.set = function(e, t, n, r) {
                let i = e * this.size + t;
                this.data[i] = n, r && (this.reservedBit[i] = !0)
            }, t.prototype.get = function(e, t) {
                return this.data[e * this.size + t]
            }, t.prototype.xor = function(e, t, n) {
                this.data[e * this.size + t] ^= n
            }, t.prototype.isReserved = function(e, t) {
                return this.reservedBit[e * this.size + t]
            }, e.exports = t
        },
        23841: function(e, t, n) {
            let r = n(47059),
                i = n(58257);

            function o(e) {
                this.mode = i.BYTE, "string" == typeof e && (e = r(e)), this.data = new Uint8Array(e)
            }
            o.getBitsLength = function(e) {
                return 8 * e
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(e) {
                for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
            }, e.exports = o
        },
        34270: function(e, t, n) {
            let r = n(38428),
                i = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                o = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            t.getBlocksCount = function(e, t) {
                switch (t) {
                    case r.L:
                        return i[(e - 1) * 4 + 0];
                    case r.M:
                        return i[(e - 1) * 4 + 1];
                    case r.Q:
                        return i[(e - 1) * 4 + 2];
                    case r.H:
                        return i[(e - 1) * 4 + 3];
                    default:
                        return
                }
            }, t.getTotalCodewordsCount = function(e, t) {
                switch (t) {
                    case r.L:
                        return o[(e - 1) * 4 + 0];
                    case r.M:
                        return o[(e - 1) * 4 + 1];
                    case r.Q:
                        return o[(e - 1) * 4 + 2];
                    case r.H:
                        return o[(e - 1) * 4 + 3];
                    default:
                        return
                }
            }
        },
        38428: function(e, t) {
            t.L = {
                bit: 1
            }, t.M = {
                bit: 0
            }, t.Q = {
                bit: 3
            }, t.H = {
                bit: 2
            }, t.isValid = function(e) {
                return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
            }, t.from = function(e, n) {
                if (t.isValid(e)) return e;
                try {
                    return function(e) {
                        if ("string" != typeof e) throw Error("Param is not a string");
                        switch (e.toLowerCase()) {
                            case "l":
                            case "low":
                                return t.L;
                            case "m":
                            case "medium":
                                return t.M;
                            case "q":
                            case "quartile":
                                return t.Q;
                            case "h":
                            case "high":
                                return t.H;
                            default:
                                throw Error("Unknown EC Level: " + e)
                        }
                    }(e)
                } catch (e) {
                    return n
                }
            }
        },
        16123: function(e, t, n) {
            let r = n(2601).getSymbolSize;
            t.getPositions = function(e) {
                let t = r(e);
                return [
                    [0, 0],
                    [t - 7, 0],
                    [0, t - 7]
                ]
            }
        },
        59906: function(e, t, n) {
            let r = n(2601),
                i = r.getBCHDigit(1335);
            t.getEncodedBits = function(e, t) {
                let n = e.bit << 3 | t,
                    o = n << 10;
                for (; r.getBCHDigit(o) - i >= 0;) o ^= 1335 << r.getBCHDigit(o) - i;
                return (n << 10 | o) ^ 21522
            }
        },
        61011: function(e, t) {
            let n = new Uint8Array(512),
                r = new Uint8Array(256);
            ! function() {
                let e = 1;
                for (let t = 0; t < 255; t++) n[t] = e, r[e] = t, 256 & (e <<= 1) && (e ^= 285);
                for (let e = 255; e < 512; e++) n[e] = n[e - 255]
            }(), t.log = function(e) {
                if (e < 1) throw Error("log(" + e + ")");
                return r[e]
            }, t.exp = function(e) {
                return n[e]
            }, t.mul = function(e, t) {
                return 0 === e || 0 === t ? 0 : n[r[e] + r[t]]
            }
        },
        62558: function(e, t, n) {
            let r = n(58257),
                i = n(2601);

            function o(e) {
                this.mode = r.KANJI, this.data = e
            }
            o.getBitsLength = function(e) {
                return 13 * e
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(e) {
                let t;
                for (t = 0; t < this.data.length; t++) {
                    let n = i.toSJIS(this.data[t]);
                    if (n >= 33088 && n <= 40956) n -= 33088;
                    else if (n >= 57408 && n <= 60351) n -= 49472;
                    else throw Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
                    n = (n >>> 8 & 255) * 192 + (255 & n), e.put(n, 13)
                }
            }, e.exports = o
        },
        42903: function(e, t) {
            t.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            let n = {
                N1: 3,
                N2: 3,
                N3: 40,
                N4: 10
            };
            t.isValid = function(e) {
                return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
            }, t.from = function(e) {
                return t.isValid(e) ? parseInt(e, 10) : void 0
            }, t.getPenaltyN1 = function(e) {
                let t = e.size,
                    r = 0,
                    i = 0,
                    o = 0,
                    s = null,
                    a = null;
                for (let c = 0; c < t; c++) {
                    i = o = 0, s = a = null;
                    for (let u = 0; u < t; u++) {
                        let t = e.get(c, u);
                        t === s ? i++ : (i >= 5 && (r += n.N1 + (i - 5)), s = t, i = 1), (t = e.get(u, c)) === a ? o++ : (o >= 5 && (r += n.N1 + (o - 5)), a = t, o = 1)
                    }
                    i >= 5 && (r += n.N1 + (i - 5)), o >= 5 && (r += n.N1 + (o - 5))
                }
                return r
            }, t.getPenaltyN2 = function(e) {
                let t = e.size,
                    r = 0;
                for (let n = 0; n < t - 1; n++)
                    for (let i = 0; i < t - 1; i++) {
                        let t = e.get(n, i) + e.get(n, i + 1) + e.get(n + 1, i) + e.get(n + 1, i + 1);
                        (4 === t || 0 === t) && r++
                    }
                return r * n.N2
            }, t.getPenaltyN3 = function(e) {
                let t = e.size,
                    r = 0,
                    i = 0,
                    o = 0;
                for (let n = 0; n < t; n++) {
                    i = o = 0;
                    for (let s = 0; s < t; s++) i = i << 1 & 2047 | e.get(n, s), s >= 10 && (1488 === i || 93 === i) && r++, o = o << 1 & 2047 | e.get(s, n), s >= 10 && (1488 === o || 93 === o) && r++
                }
                return r * n.N3
            }, t.getPenaltyN4 = function(e) {
                let t = 0,
                    r = e.data.length;
                for (let n = 0; n < r; n++) t += e.data[n];
                return Math.abs(Math.ceil(100 * t / r / 5) - 10) * n.N4
            }, t.applyMask = function(e, n) {
                let r = n.size;
                for (let i = 0; i < r; i++)
                    for (let o = 0; o < r; o++) n.isReserved(o, i) || n.xor(o, i, function(e, n, r) {
                        switch (e) {
                            case t.Patterns.PATTERN000:
                                return (n + r) % 2 == 0;
                            case t.Patterns.PATTERN001:
                                return n % 2 == 0;
                            case t.Patterns.PATTERN010:
                                return r % 3 == 0;
                            case t.Patterns.PATTERN011:
                                return (n + r) % 3 == 0;
                            case t.Patterns.PATTERN100:
                                return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                            case t.Patterns.PATTERN101:
                                return n * r % 2 + n * r % 3 == 0;
                            case t.Patterns.PATTERN110:
                                return (n * r % 2 + n * r % 3) % 2 == 0;
                            case t.Patterns.PATTERN111:
                                return (n * r % 3 + (n + r) % 2) % 2 == 0;
                            default:
                                throw Error("bad maskPattern:" + e)
                        }
                    }(e, o, i))
            }, t.getBestMask = function(e, n) {
                let r = Object.keys(t.Patterns).length,
                    i = 0,
                    o = 1 / 0;
                for (let s = 0; s < r; s++) {
                    n(s), t.applyMask(s, e);
                    let r = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
                    t.applyMask(s, e), r < o && (o = r, i = s)
                }
                return i
            }
        },
        58257: function(e, t, n) {
            let r = n(66477),
                i = n(36276);
            t.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, t.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, t.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, t.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, t.MIXED = {
                bit: -1
            }, t.getCharCountIndicator = function(e, t) {
                if (!e.ccBits) throw Error("Invalid mode: " + e);
                if (!r.isValid(t)) throw Error("Invalid version: " + t);
                return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
            }, t.getBestModeForData = function(e) {
                return i.testNumeric(e) ? t.NUMERIC : i.testAlphanumeric(e) ? t.ALPHANUMERIC : i.testKanji(e) ? t.KANJI : t.BYTE
            }, t.toString = function(e) {
                if (e && e.id) return e.id;
                throw Error("Invalid mode")
            }, t.isValid = function(e) {
                return e && e.bit && e.ccBits
            }, t.from = function(e, n) {
                if (t.isValid(e)) return e;
                try {
                    return function(e) {
                        if ("string" != typeof e) throw Error("Param is not a string");
                        switch (e.toLowerCase()) {
                            case "numeric":
                                return t.NUMERIC;
                            case "alphanumeric":
                                return t.ALPHANUMERIC;
                            case "kanji":
                                return t.KANJI;
                            case "byte":
                                return t.BYTE;
                            default:
                                throw Error("Unknown mode: " + e)
                        }
                    }(e)
                } catch (e) {
                    return n
                }
            }
        },
        6078: function(e, t, n) {
            let r = n(58257);

            function i(e) {
                this.mode = r.NUMERIC, this.data = e.toString()
            }
            i.getBitsLength = function(e) {
                return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(e) {
                let t, n;
                for (t = 0; t + 3 <= this.data.length; t += 3) n = parseInt(this.data.substr(t, 3), 10), e.put(n, 10);
                let r = this.data.length - t;
                r > 0 && (n = parseInt(this.data.substr(t), 10), e.put(n, 3 * r + 1))
            }, e.exports = i
        },
        80958: function(e, t, n) {
            let r = n(61011);
            t.mul = function(e, t) {
                let n = new Uint8Array(e.length + t.length - 1);
                for (let i = 0; i < e.length; i++)
                    for (let o = 0; o < t.length; o++) n[i + o] ^= r.mul(e[i], t[o]);
                return n
            }, t.mod = function(e, t) {
                let n = new Uint8Array(e);
                for (; n.length - t.length >= 0;) {
                    let e = n[0];
                    for (let i = 0; i < t.length; i++) n[i] ^= r.mul(t[i], e);
                    let i = 0;
                    for (; i < n.length && 0 === n[i];) i++;
                    n = n.slice(i)
                }
                return n
            }, t.generateECPolynomial = function(e) {
                let n = new Uint8Array([1]);
                for (let i = 0; i < e; i++) n = t.mul(n, new Uint8Array([1, r.exp(i)]));
                return n
            }
        },
        23364: function(e, t, n) {
            let r = n(2601),
                i = n(38428),
                o = n(86423),
                s = n(43143),
                a = n(80532),
                c = n(16123),
                u = n(42903),
                l = n(34270),
                d = n(84001),
                f = n(11888),
                h = n(59906),
                p = n(58257),
                m = n(25051);

            function g(e, t, n) {
                let r, i;
                let o = e.size,
                    s = h.getEncodedBits(t, n);
                for (r = 0; r < 15; r++) i = (s >> r & 1) == 1, r < 6 ? e.set(r, 8, i, !0) : r < 8 ? e.set(r + 1, 8, i, !0) : e.set(o - 15 + r, 8, i, !0), r < 8 ? e.set(8, o - r - 1, i, !0) : r < 9 ? e.set(8, 15 - r - 1 + 1, i, !0) : e.set(8, 15 - r - 1, i, !0);
                e.set(o - 8, 8, 1, !0)
            }
            t.create = function(e, t) {
                let n, h;
                if (void 0 === e || "" === e) throw Error("No input text");
                let y = i.M;
                return void 0 !== t && (y = i.from(t.errorCorrectionLevel, i.M), n = f.from(t.version), h = u.from(t.maskPattern), t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)),
                    function(e, t, n, i) {
                        let h;
                        if (Array.isArray(e)) h = m.fromArray(e);
                        else if ("string" == typeof e) {
                            let r = t;
                            if (!r) {
                                let t = m.rawSplit(e);
                                r = f.getBestVersionForData(t, n)
                            }
                            h = m.fromString(e, r || 40)
                        } else throw Error("Invalid data");
                        let y = f.getBestVersionForData(h, n);
                        if (!y) throw Error("The amount of data is too big to be stored in a QR Code");
                        if (t) {
                            if (t < y) throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + y + ".\n")
                        } else t = y;
                        let b = function(e, t, n) {
                                let i = new o;
                                n.forEach(function(t) {
                                    i.put(t.mode.bit, 4), i.put(t.getLength(), p.getCharCountIndicator(t.mode, e)), t.write(i)
                                });
                                let s = (r.getSymbolTotalCodewords(e) - l.getTotalCodewordsCount(e, t)) * 8;
                                for (i.getLengthInBits() + 4 <= s && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(0);
                                let a = (s - i.getLengthInBits()) / 8;
                                for (let e = 0; e < a; e++) i.put(e % 2 ? 17 : 236, 8);
                                return function(e, t, n) {
                                    let i, o;
                                    let s = r.getSymbolTotalCodewords(t),
                                        a = s - l.getTotalCodewordsCount(t, n),
                                        c = l.getBlocksCount(t, n),
                                        u = s % c,
                                        f = c - u,
                                        h = Math.floor(s / c),
                                        p = Math.floor(a / c),
                                        m = p + 1,
                                        g = h - p,
                                        y = new d(g),
                                        b = 0,
                                        w = Array(c),
                                        v = Array(c),
                                        A = 0,
                                        C = new Uint8Array(e.buffer);
                                    for (let e = 0; e < c; e++) {
                                        let t = e < f ? p : m;
                                        w[e] = C.slice(b, b + t), v[e] = y.encode(w[e]), b += t, A = Math.max(A, t)
                                    }
                                    let E = new Uint8Array(s),
                                        x = 0;
                                    for (i = 0; i < A; i++)
                                        for (o = 0; o < c; o++) i < w[o].length && (E[x++] = w[o][i]);
                                    for (i = 0; i < g; i++)
                                        for (o = 0; o < c; o++) E[x++] = v[o][i];
                                    return E
                                }(i, e, t)
                            }(t, n, h),
                            w = new s(r.getSymbolSize(t));
                        return function(e, t) {
                                let n = e.size,
                                    r = c.getPositions(t);
                                for (let t = 0; t < r.length; t++) {
                                    let i = r[t][0],
                                        o = r[t][1];
                                    for (let t = -1; t <= 7; t++)
                                        if (!(i + t <= -1) && !(n <= i + t))
                                            for (let r = -1; r <= 7; r++) o + r <= -1 || n <= o + r || (t >= 0 && t <= 6 && (0 === r || 6 === r) || r >= 0 && r <= 6 && (0 === t || 6 === t) || t >= 2 && t <= 4 && r >= 2 && r <= 4 ? e.set(i + t, o + r, !0, !0) : e.set(i + t, o + r, !1, !0))
                                }
                            }(w, t),
                            function(e) {
                                let t = e.size;
                                for (let n = 8; n < t - 8; n++) {
                                    let t = n % 2 == 0;
                                    e.set(n, 6, t, !0), e.set(6, n, t, !0)
                                }
                            }(w),
                            function(e, t) {
                                let n = a.getPositions(t);
                                for (let t = 0; t < n.length; t++) {
                                    let r = n[t][0],
                                        i = n[t][1];
                                    for (let t = -2; t <= 2; t++)
                                        for (let n = -2; n <= 2; n++) - 2 === t || 2 === t || -2 === n || 2 === n || 0 === t && 0 === n ? e.set(r + t, i + n, !0, !0) : e.set(r + t, i + n, !1, !0)
                                }
                            }(w, t), g(w, n, 0), t >= 7 && function(e, t) {
                                let n, r, i;
                                let o = e.size,
                                    s = f.getEncodedBits(t);
                                for (let t = 0; t < 18; t++) n = Math.floor(t / 3), r = t % 3 + o - 8 - 3, i = (s >> t & 1) == 1, e.set(n, r, i, !0), e.set(r, n, i, !0)
                            }(w, t),
                            function(e, t) {
                                let n = e.size,
                                    r = -1,
                                    i = n - 1,
                                    o = 7,
                                    s = 0;
                                for (let a = n - 1; a > 0; a -= 2)
                                    for (6 === a && a--;;) {
                                        for (let n = 0; n < 2; n++)
                                            if (!e.isReserved(i, a - n)) {
                                                let r = !1;
                                                s < t.length && (r = (t[s] >>> o & 1) == 1), e.set(i, a - n, r), -1 == --o && (s++, o = 7)
                                            }
                                        if ((i += r) < 0 || n <= i) {
                                            i -= r, r = -r;
                                            break
                                        }
                                    }
                            }(w, b), isNaN(i) && (i = u.getBestMask(w, g.bind(null, w, n))), u.applyMask(i, w), g(w, n, i), {
                                modules: w,
                                version: t,
                                errorCorrectionLevel: n,
                                maskPattern: i,
                                segments: h
                            }
                    }(e, n, y, h)
            }
        },
        84001: function(e, t, n) {
            let r = n(80958);

            function i(e) {
                this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
            }
            i.prototype.initialize = function(e) {
                this.degree = e, this.genPoly = r.generateECPolynomial(this.degree)
            }, i.prototype.encode = function(e) {
                if (!this.genPoly) throw Error("Encoder not initialized");
                let t = new Uint8Array(e.length + this.degree);
                t.set(e);
                let n = r.mod(t, this.genPoly),
                    i = this.degree - n.length;
                if (i > 0) {
                    let e = new Uint8Array(this.degree);
                    return e.set(n, i), e
                }
                return n
            }, e.exports = i
        },
        36276: function(e, t) {
            let n = "[0-9]+",
                r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
                i = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (r = r.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
            t.KANJI = RegExp(r, "g"), t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = RegExp(i, "g"), t.NUMERIC = RegExp(n, "g"), t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g");
            let o = RegExp("^" + r + "$"),
                s = RegExp("^" + n + "$"),
                a = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            t.testKanji = function(e) {
                return o.test(e)
            }, t.testNumeric = function(e) {
                return s.test(e)
            }, t.testAlphanumeric = function(e) {
                return a.test(e)
            }
        },
        25051: function(e, t, n) {
            let r = n(58257),
                i = n(6078),
                o = n(62971),
                s = n(23841),
                a = n(62558),
                c = n(36276),
                u = n(2601),
                l = n(52892);

            function d(e) {
                return unescape(encodeURIComponent(e)).length
            }

            function f(e, t, n) {
                let r;
                let i = [];
                for (; null !== (r = e.exec(n));) i.push({
                    data: r[0],
                    index: r.index,
                    mode: t,
                    length: r[0].length
                });
                return i
            }

            function h(e) {
                let t, n;
                let i = f(c.NUMERIC, r.NUMERIC, e),
                    o = f(c.ALPHANUMERIC, r.ALPHANUMERIC, e);
                return u.isKanjiModeEnabled() ? (t = f(c.BYTE, r.BYTE, e), n = f(c.KANJI, r.KANJI, e)) : (t = f(c.BYTE_KANJI, r.BYTE, e), n = []), i.concat(o, t, n).sort(function(e, t) {
                    return e.index - t.index
                }).map(function(e) {
                    return {
                        data: e.data,
                        mode: e.mode,
                        length: e.length
                    }
                })
            }

            function p(e, t) {
                switch (t) {
                    case r.NUMERIC:
                        return i.getBitsLength(e);
                    case r.ALPHANUMERIC:
                        return o.getBitsLength(e);
                    case r.KANJI:
                        return a.getBitsLength(e);
                    case r.BYTE:
                        return s.getBitsLength(e)
                }
            }

            function m(e, t) {
                let n;
                let c = r.getBestModeForData(e);
                if ((n = r.from(t, c)) !== r.BYTE && n.bit < c.bit) throw Error('"' + e + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(c));
                switch (n !== r.KANJI || u.isKanjiModeEnabled() || (n = r.BYTE), n) {
                    case r.NUMERIC:
                        return new i(e);
                    case r.ALPHANUMERIC:
                        return new o(e);
                    case r.KANJI:
                        return new a(e);
                    case r.BYTE:
                        return new s(e)
                }
            }
            t.fromArray = function(e) {
                return e.reduce(function(e, t) {
                    return "string" == typeof t ? e.push(m(t, null)) : t.data && e.push(m(t.data, t.mode)), e
                }, [])
            }, t.fromString = function(e, n) {
                let i = function(e, t) {
                        let n = {},
                            i = {
                                start: {}
                            },
                            o = ["start"];
                        for (let s = 0; s < e.length; s++) {
                            let a = e[s],
                                c = [];
                            for (let e = 0; e < a.length; e++) {
                                let u = a[e],
                                    l = "" + s + e;
                                c.push(l), n[l] = {
                                    node: u,
                                    lastCount: 0
                                }, i[l] = {};
                                for (let e = 0; e < o.length; e++) {
                                    let s = o[e];
                                    n[s] && n[s].node.mode === u.mode ? (i[s][l] = p(n[s].lastCount + u.length, u.mode) - p(n[s].lastCount, u.mode), n[s].lastCount += u.length) : (n[s] && (n[s].lastCount = u.length), i[s][l] = p(u.length, u.mode) + 4 + r.getCharCountIndicator(u.mode, t))
                                }
                            }
                            o = c
                        }
                        for (let e = 0; e < o.length; e++) i[o[e]].end = 0;
                        return {
                            map: i,
                            table: n
                        }
                    }(function(e) {
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                            let i = e[n];
                            switch (i.mode) {
                                case r.NUMERIC:
                                    t.push([i, {
                                        data: i.data,
                                        mode: r.ALPHANUMERIC,
                                        length: i.length
                                    }, {
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: i.length
                                    }]);
                                    break;
                                case r.ALPHANUMERIC:
                                    t.push([i, {
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: i.length
                                    }]);
                                    break;
                                case r.KANJI:
                                    t.push([i, {
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: d(i.data)
                                    }]);
                                    break;
                                case r.BYTE:
                                    t.push([{
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: d(i.data)
                                    }])
                            }
                        }
                        return t
                    }(h(e, u.isKanjiModeEnabled())), n),
                    o = l.find_path(i.map, "start", "end"),
                    s = [];
                for (let e = 1; e < o.length - 1; e++) s.push(i.table[o[e]].node);
                return t.fromArray(s.reduce(function(e, t) {
                    let n = e.length - 1 >= 0 ? e[e.length - 1] : null;
                    return n && n.mode === t.mode ? e[e.length - 1].data += t.data : e.push(t), e
                }, []))
            }, t.rawSplit = function(e) {
                return t.fromArray(h(e, u.isKanjiModeEnabled()))
            }
        },
        2601: function(e, t) {
            let n;
            let r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            t.getSymbolSize = function(e) {
                if (!e) throw Error('"version" cannot be null or undefined');
                if (e < 1 || e > 40) throw Error('"version" should be in range from 1 to 40');
                return 4 * e + 17
            }, t.getSymbolTotalCodewords = function(e) {
                return r[e]
            }, t.getBCHDigit = function(e) {
                let t = 0;
                for (; 0 !== e;) t++, e >>>= 1;
                return t
            }, t.setToSJISFunction = function(e) {
                if ("function" != typeof e) throw Error('"toSJISFunc" is not a valid function.');
                n = e
            }, t.isKanjiModeEnabled = function() {
                return void 0 !== n
            }, t.toSJIS = function(e) {
                return n(e)
            }
        },
        66477: function(e, t) {
            t.isValid = function(e) {
                return !isNaN(e) && e >= 1 && e <= 40
            }
        },
        11888: function(e, t, n) {
            let r = n(2601),
                i = n(34270),
                o = n(38428),
                s = n(58257),
                a = n(66477),
                c = r.getBCHDigit(7973);

            function u(e, t) {
                return s.getCharCountIndicator(e, t) + 4
            }
            t.from = function(e, t) {
                return a.isValid(e) ? parseInt(e, 10) : t
            }, t.getCapacity = function(e, t, n) {
                if (!a.isValid(e)) throw Error("Invalid QR Code version");
                void 0 === n && (n = s.BYTE);
                let o = (r.getSymbolTotalCodewords(e) - i.getTotalCodewordsCount(e, t)) * 8;
                if (n === s.MIXED) return o;
                let c = o - u(n, e);
                switch (n) {
                    case s.NUMERIC:
                        return Math.floor(c / 10 * 3);
                    case s.ALPHANUMERIC:
                        return Math.floor(c / 11 * 2);
                    case s.KANJI:
                        return Math.floor(c / 13);
                    case s.BYTE:
                    default:
                        return Math.floor(c / 8)
                }
            }, t.getBestVersionForData = function(e, n) {
                let r;
                let i = o.from(n, o.M);
                if (Array.isArray(e)) {
                    if (e.length > 1) return function(e, n) {
                        for (let r = 1; r <= 40; r++)
                            if (function(e, t) {
                                    let n = 0;
                                    return e.forEach(function(e) {
                                        let r = u(e.mode, t);
                                        n += r + e.getBitsLength()
                                    }), n
                                }(e, r) <= t.getCapacity(r, n, s.MIXED)) return r
                    }(e, i);
                    if (0 === e.length) return 1;
                    r = e[0]
                } else r = e;
                return function(e, n, r) {
                    for (let i = 1; i <= 40; i++)
                        if (n <= t.getCapacity(i, r, e)) return i
                }(r.mode, r.getLength(), i)
            }, t.getEncodedBits = function(e) {
                if (!a.isValid(e) || e < 7) throw Error("Invalid QR Code version");
                let t = e << 12;
                for (; r.getBCHDigit(t) - c >= 0;) t ^= 7973 << r.getBCHDigit(t) - c;
                return e << 12 | t
            }
        },
        64811: function(e, t, n) {
            let r = n(59472);
            t.render = function(e, t, n) {
                var i;
                let o = n,
                    s = t;
                void 0 !== o || t && t.getContext || (o = t, t = void 0), t || (s = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (e) {
                        throw Error("You need to specify a canvas element")
                    }
                }()), o = r.getOptions(o);
                let a = r.getImageWidth(e.modules.size, o),
                    c = s.getContext("2d"),
                    u = c.createImageData(a, a);
                return r.qrToImageData(u.data, e, o), i = s, c.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = a, i.width = a, i.style.height = a + "px", i.style.width = a + "px", c.putImageData(u, 0, 0), s
            }, t.renderToDataURL = function(e, n, r) {
                let i = r;
                void 0 !== i || n && n.getContext || (i = n, n = void 0), i || (i = {});
                let o = t.render(e, n, i),
                    s = i.type || "image/png",
                    a = i.rendererOpts || {};
                return o.toDataURL(s, a.quality)
            }
        },
        65773: function(e, t, n) {
            let r = n(59472);

            function i(e, t) {
                let n = e.a / 255,
                    r = t + '="' + e.hex + '"';
                return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
            }

            function o(e, t, n) {
                let r = e + t;
                return void 0 !== n && (r += " " + n), r
            }
            t.render = function(e, t, n) {
                let s = r.getOptions(t),
                    a = e.modules.size,
                    c = e.modules.data,
                    u = a + 2 * s.margin,
                    l = s.color.light.a ? "<path " + i(s.color.light, "fill") + ' d="M0 0h' + u + "v" + u + 'H0z"/>' : "",
                    d = "<path " + i(s.color.dark, "stroke") + ' d="' + function(e, t, n) {
                        let r = "",
                            i = 0,
                            s = !1,
                            a = 0;
                        for (let c = 0; c < e.length; c++) {
                            let u = Math.floor(c % t),
                                l = Math.floor(c / t);
                            u || s || (s = !0), e[c] ? (a++, c > 0 && u > 0 && e[c - 1] || (r += s ? o("M", u + n, .5 + l + n) : o("m", i, 0), i = 0, s = !1), u + 1 < t && e[c + 1] || (r += o("h", a), a = 0)) : i++
                        }
                        return r
                    }(c, a, s.margin) + '"/>',
                    f = '<svg xmlns="http://www.w3.org/2000/svg" ' + (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") + ('viewBox="0 0 ' + u) + " " + u + '" shape-rendering="crispEdges">' + l + d + "</svg>\n";
                return "function" == typeof n && n(null, f), f
            }
        },
        59472: function(e, t) {
            function n(e) {
                if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw Error("Color should be defined as hex string");
                let t = e.slice().replace("#", "").split("");
                if (t.length < 3 || 5 === t.length || t.length > 8) throw Error("Invalid hex color: " + e);
                (3 === t.length || 4 === t.length) && (t = Array.prototype.concat.apply([], t.map(function(e) {
                    return [e, e]
                }))), 6 === t.length && t.push("F", "F");
                let n = parseInt(t.join(""), 16);
                return {
                    r: n >> 24 & 255,
                    g: n >> 16 & 255,
                    b: n >> 8 & 255,
                    a: 255 & n,
                    hex: "#" + t.slice(0, 6).join("")
                }
            }
            t.getOptions = function(e) {
                e || (e = {}), e.color || (e.color = {});
                let t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
                    r = e.width && e.width >= 21 ? e.width : void 0,
                    i = e.scale || 4;
                return {
                    width: r,
                    scale: r ? 4 : i,
                    margin: t,
                    color: {
                        dark: n(e.color.dark || "#000000ff"),
                        light: n(e.color.light || "#ffffffff")
                    },
                    type: e.type,
                    rendererOpts: e.rendererOpts || {}
                }
            }, t.getScale = function(e, t) {
                return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
            }, t.getImageWidth = function(e, n) {
                let r = t.getScale(e, n);
                return Math.floor((e + 2 * n.margin) * r)
            }, t.qrToImageData = function(e, n, r) {
                let i = n.modules.size,
                    o = n.modules.data,
                    s = t.getScale(i, r),
                    a = Math.floor((i + 2 * r.margin) * s),
                    c = r.margin * s,
                    u = [r.color.light, r.color.dark];
                for (let t = 0; t < a; t++)
                    for (let n = 0; n < a; n++) {
                        let l = (t * a + n) * 4,
                            d = r.color.light;
                        t >= c && n >= c && t < a - c && n < a - c && (d = u[o[Math.floor((t - c) / s) * i + Math.floor((n - c) / s)] ? 1 : 0]), e[l++] = d.r, e[l++] = d.g, e[l++] = d.b, e[l] = d.a
                    }
            }
        },
        17590: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return Z
                }
            });
            var r, i, o, s, a, c, u, l = n(11735),
                d = n(2265),
                f = "right-scroll-bar-position",
                h = "width-before-scroll-bar";

            function p(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e
            }
            var m = "undefined" != typeof window ? d.useLayoutEffect : d.useEffect,
                g = new WeakMap,
                y = (void 0 === r && (r = {}), (void 0 === i && (i = function(e) {
                    return e
                }), o = [], s = !1, a = {
                    read: function() {
                        if (s) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return o.length ? o[o.length - 1] : null
                    },
                    useMedium: function(e) {
                        var t = i(e, s);
                        return o.push(t),
                            function() {
                                o = o.filter(function(e) {
                                    return e !== t
                                })
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (s = !0; o.length;) {
                            var t = o;
                            o = [], t.forEach(e)
                        }
                        o = {
                            push: function(t) {
                                return e(t)
                            },
                            filter: function() {
                                return o
                            }
                        }
                    },
                    assignMedium: function(e) {
                        s = !0;
                        var t = [];
                        if (o.length) {
                            var n = o;
                            o = [], n.forEach(e), t = o
                        }
                        var r = function() {
                                var n = t;
                                t = [], n.forEach(e)
                            },
                            i = function() {
                                return Promise.resolve().then(r)
                            };
                        i(), o = {
                            push: function(e) {
                                t.push(e), i()
                            },
                            filter: function(e) {
                                return t = t.filter(e), o
                            }
                        }
                    }
                }).options = (0, l.__assign)({
                    async: !0,
                    ssr: !1
                }, r), a),
                b = function() {},
                w = d.forwardRef(function(e, t) {
                    var n, r, i, o, s = d.useRef(null),
                        a = d.useState({
                            onScrollCapture: b,
                            onWheelCapture: b,
                            onTouchMoveCapture: b
                        }),
                        c = a[0],
                        u = a[1],
                        f = e.forwardProps,
                        h = e.children,
                        w = e.className,
                        v = e.removeScrollBar,
                        A = e.enabled,
                        C = e.shards,
                        E = e.sideCar,
                        x = e.noIsolation,
                        I = e.inert,
                        B = e.allowPinchZoom,
                        k = e.as,
                        P = e.gapMode,
                        M = (0, l.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        O = (n = [s, t], r = function(e) {
                            return n.forEach(function(t) {
                                return p(t, e)
                            })
                        }, (i = (0, d.useState)(function() {
                            return {
                                value: null,
                                callback: r,
                                facade: {
                                    get current() {
                                        return i.value
                                    },
                                    set current(value) {
                                        var e = i.value;
                                        e !== value && (i.value = value, i.callback(value, e))
                                    }
                                }
                            }
                        })[0]).callback = r, o = i.facade, m(function() {
                            var e = g.get(o);
                            if (e) {
                                var t = new Set(e),
                                    r = new Set(n),
                                    i = o.current;
                                t.forEach(function(e) {
                                    r.has(e) || p(e, null)
                                }), r.forEach(function(e) {
                                    t.has(e) || p(e, i)
                                })
                            }
                            g.set(o, n)
                        }, [n]), o),
                        S = (0, l.__assign)((0, l.__assign)({}, M), c);
                    return d.createElement(d.Fragment, null, A && d.createElement(E, {
                        sideCar: y,
                        removeScrollBar: v,
                        shards: C,
                        noIsolation: x,
                        inert: I,
                        setCallbacks: u,
                        allowPinchZoom: !!B,
                        lockRef: s,
                        gapMode: P
                    }), f ? d.cloneElement(d.Children.only(h), (0, l.__assign)((0, l.__assign)({}, S), {
                        ref: O
                    })) : d.createElement(void 0 === k ? "div" : k, (0, l.__assign)({}, S, {
                        className: w,
                        ref: O
                    }), h))
                });
            w.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, w.classNames = {
                fullWidth: h,
                zeroRight: f
            };
            var v = function(e) {
                var t = e.sideCar,
                    n = (0, l.__rest)(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var r = t.read();
                if (!r) throw Error("Sidecar medium not found");
                return d.createElement(r, (0, l.__assign)({}, n))
            };
            v.isSideCarExport = !0;
            var A = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(r) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = u || n.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var i, o;
                                (i = t).styleSheet ? i.styleSheet.cssText = r : i.appendChild(document.createTextNode(r)), o = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(o)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                C = function() {
                    var e = A();
                    return function(t, n) {
                        d.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && n])
                    }
                },
                E = function() {
                    var e = C();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                x = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                I = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                B = function(e) {
                    var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = t["padding" === e ? "paddingTop" : "marginTop"],
                        i = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [I(n), I(r), I(i)]
                },
                k = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return x;
                    var t = B(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, r - n + t[2] - t[0])
                    }
                },
                P = E(),
                M = "data-scroll-locked",
                O = function(e, t, n, r) {
                    var i = e.left,
                        o = e.top,
                        s = e.right,
                        a = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(a, "px ").concat(r, ";\n  }\n  body[").concat(M, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(i, "px;\n    padding-top: ").concat(o, "px;\n    padding-right: ").concat(s, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(f, " {\n    right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(h, " {\n    margin-right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(f, " .").concat(f, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(h, " .").concat(h, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(M, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(a, "px;\n  }\n")
                },
                S = function() {
                    var e = parseInt(document.body.getAttribute(M) || "0", 10);
                    return isFinite(e) ? e : 0
                },
                R = function() {
                    d.useEffect(function() {
                        return document.body.setAttribute(M, (S() + 1).toString()),
                            function() {
                                var e = S() - 1;
                                e <= 0 ? document.body.removeAttribute(M) : document.body.setAttribute(M, e.toString())
                            }
                    }, [])
                },
                T = function(e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        r = e.gapMode,
                        i = void 0 === r ? "margin" : r;
                    R();
                    var o = d.useMemo(function() {
                        return k(i)
                    }, [i]);
                    return d.createElement(P, {
                        styles: O(o, !t, i, n ? "" : "!important")
                    })
                },
                N = !1;
            if ("undefined" != typeof window) try {
                var F = Object.defineProperty({}, "passive", {
                    get: function() {
                        return N = !0, !0
                    }
                });
                window.addEventListener("test", F, F), window.removeEventListener("test", F, F)
            } catch (e) {
                N = !1
            }
            var D = !!N && {
                    passive: !1
                },
                U = function(e, t) {
                    var n = window.getComputedStyle(e);
                    return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
                },
                L = function(e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), q(e, r)) {
                            var i = Q(e, r);
                            if (i[1] > i[2]) return !0
                        }
                        r = r.parentNode
                    } while (r && r !== n.body);
                    return !1
                },
                q = function(e, t) {
                    return "v" === e ? U(t, "overflowY") : U(t, "overflowX")
                },
                Q = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                j = function(e, t, n, r, i) {
                    var o, s = (o = window.getComputedStyle(t).direction, "h" === e && "rtl" === o ? -1 : 1),
                        a = s * r,
                        c = n.target,
                        u = t.contains(c),
                        l = !1,
                        d = a > 0,
                        f = 0,
                        h = 0;
                    do {
                        var p = Q(e, c),
                            m = p[0],
                            g = p[1] - p[2] - s * m;
                        (m || g) && q(e, c) && (f += g, h += m), c instanceof ShadowRoot ? c = c.host : c = c.parentNode
                    } while (!u && c !== document.body || u && (t.contains(c) || t === c));
                    return d && (i && 1 > Math.abs(f) || !i && a > f) ? l = !0 : !d && (i && 1 > Math.abs(h) || !i && -a > h) && (l = !0), l
                },
                G = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                z = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                W = function(e) {
                    return e && "current" in e ? e.current : e
                },
                _ = 0,
                H = [],
                K = (c = function(e) {
                    var t = d.useRef([]),
                        n = d.useRef([0, 0]),
                        r = d.useRef(),
                        i = d.useState(_++)[0],
                        o = d.useState(E)[0],
                        s = d.useRef(e);
                    d.useEffect(function() {
                        s.current = e
                    }, [e]), d.useEffect(function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(i));
                            var t = (0, l.__spreadArray)([e.lockRef.current], (e.shards || []).map(W), !0).filter(Boolean);
                            return t.forEach(function(e) {
                                    return e.classList.add("allow-interactivity-".concat(i))
                                }),
                                function() {
                                    document.body.classList.remove("block-interactivity-".concat(i)), t.forEach(function(e) {
                                        return e.classList.remove("allow-interactivity-".concat(i))
                                    })
                                }
                        }
                    }, [e.inert, e.lockRef.current, e.shards]);
                    var a = d.useCallback(function(e, t) {
                            if ("touches" in e && 2 === e.touches.length) return !s.current.allowPinchZoom;
                            var i, o = G(e),
                                a = n.current,
                                c = "deltaX" in e ? e.deltaX : a[0] - o[0],
                                u = "deltaY" in e ? e.deltaY : a[1] - o[1],
                                l = e.target,
                                d = Math.abs(c) > Math.abs(u) ? "h" : "v";
                            if ("touches" in e && "h" === d && "range" === l.type) return !1;
                            var f = L(d, l);
                            if (!f) return !0;
                            if (f ? i = d : (i = "v" === d ? "h" : "v", f = L(d, l)), !f) return !1;
                            if (!r.current && "changedTouches" in e && (c || u) && (r.current = i), !i) return !0;
                            var h = r.current || i;
                            return j(h, t, e, "h" === h ? c : u, !0)
                        }, []),
                        c = d.useCallback(function(e) {
                            if (H.length && H[H.length - 1] === o) {
                                var n = "deltaY" in e ? z(e) : G(e),
                                    r = t.current.filter(function(t) {
                                        var r;
                                        return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta)[0] === n[0] && r[1] === n[1]
                                    })[0];
                                if (r && r.should) {
                                    e.cancelable && e.preventDefault();
                                    return
                                }
                                if (!r) {
                                    var i = (s.current.shards || []).map(W).filter(Boolean).filter(function(t) {
                                        return t.contains(e.target)
                                    });
                                    (i.length > 0 ? a(e, i[0]) : !s.current.noIsolation) && e.cancelable && e.preventDefault()
                                }
                            }
                        }, []),
                        u = d.useCallback(function(e, n, r, i) {
                            var o = {
                                name: e,
                                delta: n,
                                target: r,
                                should: i,
                                shadowParent: function(e) {
                                    for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                                    return t
                                }(r)
                            };
                            t.current.push(o), setTimeout(function() {
                                t.current = t.current.filter(function(e) {
                                    return e !== o
                                })
                            }, 1)
                        }, []),
                        f = d.useCallback(function(e) {
                            n.current = G(e), r.current = void 0
                        }, []),
                        h = d.useCallback(function(t) {
                            u(t.type, z(t), t.target, a(t, e.lockRef.current))
                        }, []),
                        p = d.useCallback(function(t) {
                            u(t.type, G(t), t.target, a(t, e.lockRef.current))
                        }, []);
                    d.useEffect(function() {
                        return H.push(o), e.setCallbacks({
                                onScrollCapture: h,
                                onWheelCapture: h,
                                onTouchMoveCapture: p
                            }), document.addEventListener("wheel", c, D), document.addEventListener("touchmove", c, D), document.addEventListener("touchstart", f, D),
                            function() {
                                H = H.filter(function(e) {
                                    return e !== o
                                }), document.removeEventListener("wheel", c, D), document.removeEventListener("touchmove", c, D), document.removeEventListener("touchstart", f, D)
                            }
                    }, []);
                    var m = e.removeScrollBar,
                        g = e.inert;
                    return d.createElement(d.Fragment, null, g ? d.createElement(o, {
                        styles: "\n  .block-interactivity-".concat(i, " {pointer-events: none;}\n  .allow-interactivity-").concat(i, " {pointer-events: all;}\n")
                    }) : null, m ? d.createElement(T, {
                        gapMode: e.gapMode
                    }) : null)
                }, y.useMedium(c), v),
                V = d.forwardRef(function(e, t) {
                    return d.createElement(w, (0, l.__assign)({}, e, {
                        ref: t,
                        sideCar: K
                    }))
                });
            V.classNames = w.classNames;
            var Z = V
        },
        26088: function(e, t, n) {
            var r;
            ! function(i, o) {
                "use strict";
                var s = "function",
                    a = "undefined",
                    c = "object",
                    u = "string",
                    l = "major",
                    d = "model",
                    f = "name",
                    h = "type",
                    p = "vendor",
                    m = "version",
                    g = "architecture",
                    y = "console",
                    b = "mobile",
                    w = "tablet",
                    v = "smarttv",
                    A = "wearable",
                    C = "embedded",
                    E = "Amazon",
                    x = "Apple",
                    I = "ASUS",
                    B = "BlackBerry",
                    k = "Browser",
                    P = "Chrome",
                    M = "Firefox",
                    O = "Google",
                    S = "Huawei",
                    R = "Microsoft",
                    T = "Motorola",
                    N = "Opera",
                    F = "Samsung",
                    D = "Sharp",
                    U = "Sony",
                    L = "Xiaomi",
                    q = "Zebra",
                    Q = "Facebook",
                    j = "Chromium OS",
                    G = "Mac OS",
                    z = function(e, t) {
                        var n = {};
                        for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                        return n
                    },
                    W = function(e) {
                        for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                        return t
                    },
                    _ = function(e, t) {
                        return typeof e === u && -1 !== H(t).indexOf(H(e))
                    },
                    H = function(e) {
                        return e.toLowerCase()
                    },
                    K = function(e, t) {
                        if (typeof e === u) return e = e.replace(/^\s\s*/, ""), typeof t === a ? e : e.substring(0, 500)
                    },
                    V = function(e, t) {
                        for (var n, r, i, a, u, l, d = 0; d < t.length && !u;) {
                            var f = t[d],
                                h = t[d + 1];
                            for (n = r = 0; n < f.length && !u && f[n];)
                                if (u = f[n++].exec(e))
                                    for (i = 0; i < h.length; i++) l = u[++r], typeof(a = h[i]) === c && a.length > 0 ? 2 === a.length ? typeof a[1] == s ? this[a[0]] = a[1].call(this, l) : this[a[0]] = a[1] : 3 === a.length ? typeof a[1] !== s || a[1].exec && a[1].test ? this[a[0]] = l ? l.replace(a[1], a[2]) : void 0 : this[a[0]] = l ? a[1].call(this, l, a[2]) : void 0 : 4 === a.length && (this[a[0]] = l ? a[3].call(this, l.replace(a[1], a[2])) : void 0) : this[a] = l || o;
                            d += 2
                        }
                    },
                    Z = function(e, t) {
                        for (var n in t)
                            if (typeof t[n] === c && t[n].length > 0) {
                                for (var r = 0; r < t[n].length; r++)
                                    if (_(t[n][r], e)) return "?" === n ? o : n
                            } else if (_(t[n], e)) return "?" === n ? o : n;
                        return e
                    },
                    J = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        "8.1": "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    $ = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [m, [f, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [m, [f, "Edge"]],
                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                            [f, m],
                            [/opios[\/ ]+([\w\.]+)/i],
                            [m, [f, N + " Mini"]],
                            [/\bop(?:rg)?x\/([\w\.]+)/i],
                            [m, [f, N + " GX"]],
                            [/\bopr\/([\w\.]+)/i],
                            [m, [f, N]],
                            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                            [m, [f, "Baidu"]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [f, m],
                            [/\bddg\/([\w\.]+)/i],
                            [m, [f, "DuckDuckGo"]],
                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                            [m, [f, "UC" + k]],
                            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                            [m, [f, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [m, [f, "Konqueror"]],
                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                            [m, [f, "IE"]],
                            [/ya(?:search)?browser\/([\w\.]+)/i],
                            [m, [f, "Yandex"]],
                            [/slbrowser\/([\w\.]+)/i],
                            [m, [f, "Smart Lenovo " + k]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [f, /(.+)/, "$1 Secure " + k], m
                            ],
                            [/\bfocus\/([\w\.]+)/i],
                            [m, [f, M + " Focus"]],
                            [/\bopt\/([\w\.]+)/i],
                            [m, [f, N + " Touch"]],
                            [/coc_coc\w+\/([\w\.]+)/i],
                            [m, [f, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [m, [f, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [m, [f, N + " Coast"]],
                            [/miuibrowser\/([\w\.]+)/i],
                            [m, [f, "MIUI " + k]],
                            [/fxios\/([-\w\.]+)/i],
                            [m, [f, M]],
                            [/\bqihu|(qi?ho?o?|360)browser/i],
                            [
                                [f, "360 " + k]
                            ],
                            [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                            [
                                [f, /(.+)/, "$1 " + k], m
                            ],
                            [/samsungbrowser\/([\w\.]+)/i],
                            [m, [f, F + " Internet"]],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [f, /_/g, " "], m
                            ],
                            [/metasr[\/ ]?([\d\.]+)/i],
                            [m, [f, "Sogou Explorer"]],
                            [/(sogou)mo\w+\/([\d\.]+)/i],
                            [
                                [f, "Sogou Mobile"], m
                            ],
                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                            [f, m],
                            [/(lbbrowser)/i, /\[(linkedin)app\]/i],
                            [f],
                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                            [
                                [f, Q], m
                            ],
                            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                            [f, m],
                            [/\bgsa\/([\w\.]+) .*safari\//i],
                            [m, [f, "GSA"]],
                            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                            [m, [f, "TikTok"]],
                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                            [m, [f, P + " Headless"]],
                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [f, P + " WebView"], m
                            ],
                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                            [m, [f, "Android " + k]],
                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                            [f, m],
                            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                            [m, [f, "Mobile Safari"]],
                            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                            [m, f],
                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                            [f, [m, Z, {
                                "1.0": "/8",
                                "1.2": "/1",
                                "1.3": "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [f, m],
                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                            [
                                [f, "Netscape"], m
                            ],
                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                            [m, [f, M + " Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                            [f, m],
                            [/(cobalt)\/([\w\.]+)/i],
                            [f, [m, /master.|lts./, ""]]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                            [
                                [g, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [g, H]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [g, "ia32"]
                            ],
                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                            [
                                [g, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [g, "armhf"]
                            ],
                            [/windows (ce|mobile); ppc;/i],
                            [
                                [g, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                            [
                                [g, /ower/, "", H]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [g, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [g, H]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                            [d, [p, F],
                                [h, w]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                            [d, [p, F],
                                [h, b]
                            ],
                            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                            [d, [p, x],
                                [h, b]
                            ],
                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [d, [p, x],
                                [h, w]
                            ],
                            [/(macintosh);/i],
                            [d, [p, x]],
                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                            [d, [p, D],
                                [h, b]
                            ],
                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                            [d, [p, S],
                                [h, w]
                            ],
                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                            [d, [p, S],
                                [h, b]
                            ],
                            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                            [
                                [d, /_/g, " "],
                                [p, L],
                                [h, b]
                            ],
                            [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                            [
                                [d, /_/g, " "],
                                [p, L],
                                [h, w]
                            ],
                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                            [d, [p, "OPPO"],
                                [h, b]
                            ],
                            [/\b(opd2\d{3}a?) bui/i],
                            [d, [p, "OPPO"],
                                [h, w]
                            ],
                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                            [d, [p, "Vivo"],
                                [h, b]
                            ],
                            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                            [d, [p, "Realme"],
                                [h, b]
                            ],
                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                            [d, [p, T],
                                [h, b]
                            ],
                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                            [d, [p, T],
                                [h, w]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                            [d, [p, "LG"],
                                [h, w]
                            ],
                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                            [d, [p, "LG"],
                                [h, b]
                            ],
                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                            [d, [p, "Lenovo"],
                                [h, w]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                            [
                                [d, /_/g, " "],
                                [p, "Nokia"],
                                [h, b]
                            ],
                            [/(pixel c)\b/i],
                            [d, [p, O],
                                [h, w]
                            ],
                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                            [d, [p, O],
                                [h, b]
                            ],
                            [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [d, [p, U],
                                [h, b]
                            ],
                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                            [
                                [d, "Xperia Tablet"],
                                [p, U],
                                [h, w]
                            ],
                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                            [d, [p, "OnePlus"],
                                [h, b]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                            [d, [p, E],
                                [h, w]
                            ],
                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                            [
                                [d, /(.+)/g, "Fire Phone $1"],
                                [p, E],
                                [h, b]
                            ],
                            [/(playbook);[-\w\),; ]+(rim)/i],
                            [d, p, [h, w]],
                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                            [d, [p, B],
                                [h, b]
                            ],
                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                            [d, [p, I],
                                [h, w]
                            ],
                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                            [d, [p, I],
                                [h, b]
                            ],
                            [/(nexus 9)/i],
                            [d, [p, "HTC"],
                                [h, w]
                            ],
                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                            [p, [d, /_/g, " "],
                                [h, b]
                            ],
                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                            [d, [p, "Acer"],
                                [h, w]
                            ],
                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                            [d, [p, "Meizu"],
                                [h, b]
                            ],
                            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                            [d, [p, "Ulefone"],
                                [h, b]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                            [p, d, [h, b]],
                            [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                            [p, d, [h, w]],
                            [/(surface duo)/i],
                            [d, [p, R],
                                [h, w]
                            ],
                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                            [d, [p, "Fairphone"],
                                [h, b]
                            ],
                            [/(u304aa)/i],
                            [d, [p, "AT&T"],
                                [h, b]
                            ],
                            [/\bsie-(\w*)/i],
                            [d, [p, "Siemens"],
                                [h, b]
                            ],
                            [/\b(rct\w+) b/i],
                            [d, [p, "RCA"],
                                [h, w]
                            ],
                            [/\b(venue[\d ]{2,7}) b/i],
                            [d, [p, "Dell"],
                                [h, w]
                            ],
                            [/\b(q(?:mv|ta)\w+) b/i],
                            [d, [p, "Verizon"],
                                [h, w]
                            ],
                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                            [d, [p, "Barnes & Noble"],
                                [h, w]
                            ],
                            [/\b(tm\d{3}\w+) b/i],
                            [d, [p, "NuVision"],
                                [h, w]
                            ],
                            [/\b(k88) b/i],
                            [d, [p, "ZTE"],
                                [h, w]
                            ],
                            [/\b(nx\d{3}j) b/i],
                            [d, [p, "ZTE"],
                                [h, b]
                            ],
                            [/\b(gen\d{3}) b.+49h/i],
                            [d, [p, "Swiss"],
                                [h, b]
                            ],
                            [/\b(zur\d{3}) b/i],
                            [d, [p, "Swiss"],
                                [h, w]
                            ],
                            [/\b((zeki)?tb.*\b) b/i],
                            [d, [p, "Zeki"],
                                [h, w]
                            ],
                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                            [
                                [p, "Dragon Touch"], d, [h, w]
                            ],
                            [/\b(ns-?\w{0,9}) b/i],
                            [d, [p, "Insignia"],
                                [h, w]
                            ],
                            [/\b((nxa|next)-?\w{0,9}) b/i],
                            [d, [p, "NextBook"],
                                [h, w]
                            ],
                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                            [
                                [p, "Voice"], d, [h, b]
                            ],
                            [/\b(lvtel\-)?(v1[12]) b/i],
                            [
                                [p, "LvTel"], d, [h, b]
                            ],
                            [/\b(ph-1) /i],
                            [d, [p, "Essential"],
                                [h, b]
                            ],
                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                            [d, [p, "Envizen"],
                                [h, w]
                            ],
                            [/\b(trio[-\w\. ]+) b/i],
                            [d, [p, "MachSpeed"],
                                [h, w]
                            ],
                            [/\btu_(1491) b/i],
                            [d, [p, "Rotor"],
                                [h, w]
                            ],
                            [/(shield[\w ]+) b/i],
                            [d, [p, "Nvidia"],
                                [h, w]
                            ],
                            [/(sprint) (\w+)/i],
                            [p, d, [h, b]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [d, /\./g, " "],
                                [p, R],
                                [h, b]
                            ],
                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [d, [p, q],
                                [h, w]
                            ],
                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [d, [p, q],
                                [h, b]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [p, [h, v]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [d, /^/, "SmartTV"],
                                [p, F],
                                [h, v]
                            ],
                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                            [
                                [p, "LG"],
                                [h, v]
                            ],
                            [/(apple) ?tv/i],
                            [p, [d, x + " TV"],
                                [h, v]
                            ],
                            [/crkey/i],
                            [
                                [d, P + "cast"],
                                [p, O],
                                [h, v]
                            ],
                            [/droid.+aft(\w+)( bui|\))/i],
                            [d, [p, E],
                                [h, v]
                            ],
                            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                            [d, [p, D],
                                [h, v]
                            ],
                            [/(bravia[\w ]+)( bui|\))/i],
                            [d, [p, U],
                                [h, v]
                            ],
                            [/(mitv-\w{5}) bui/i],
                            [d, [p, L],
                                [h, v]
                            ],
                            [/Hbbtv.*(technisat) (.*);/i],
                            [p, d, [h, v]],
                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                            [
                                [p, K],
                                [d, K],
                                [h, v]
                            ],
                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                            [
                                [h, v]
                            ],
                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                            [p, d, [h, y]],
                            [/droid.+; (shield) bui/i],
                            [d, [p, "Nvidia"],
                                [h, y]
                            ],
                            [/(playstation [345portablevi]+)/i],
                            [d, [p, U],
                                [h, y]
                            ],
                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                            [d, [p, R],
                                [h, y]
                            ],
                            [/((pebble))app/i],
                            [p, d, [h, A]],
                            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                            [d, [p, x],
                                [h, A]
                            ],
                            [/droid.+; (glass) \d/i],
                            [d, [p, O],
                                [h, A]
                            ],
                            [/droid.+; (wt63?0{2,3})\)/i],
                            [d, [p, q],
                                [h, A]
                            ],
                            [/(quest( \d| pro)?)/i],
                            [d, [p, Q],
                                [h, A]
                            ],
                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                            [p, [h, C]],
                            [/(aeobc)\b/i],
                            [d, [p, E],
                                [h, C]
                            ],
                            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                            [d, [h, b]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                            [d, [h, w]],
                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                            [
                                [h, w]
                            ],
                            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                            [
                                [h, b]
                            ],
                            [/(android[-\w\. ]{0,9});.+buil/i],
                            [d, [p, "Generic"]]
                        ],
                        engine: [
                            [/windows.+ edge\/([\w\.]+)/i],
                            [m, [f, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [m, [f, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                            [f, m],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [m, f]
                        ],
                        os: [
                            [/microsoft (windows) (vista|xp)/i],
                            [f, m],
                            [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                            [f, [m, Z, J]],
                            [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                            [
                                [m, Z, J],
                                [f, "Windows"]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                            [
                                [m, /_/g, "."],
                                [f, "iOS"]
                            ],
                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                            [
                                [f, G],
                                [m, /_/g, "."]
                            ],
                            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                            [m, f],
                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                            [f, m],
                            [/\(bb(10);/i],
                            [m, [f, B]],
                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                            [m, [f, "Symbian"]],
                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                            [m, [f, M + " OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [m, [f, "webOS"]],
                            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                            [m, [f, "watchOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [m, [f, P + "cast"]],
                            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                            [
                                [f, j], m
                            ],
                            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                            [f, m],
                            [/(sunos) ?([\w\.\d]*)/i],
                            [
                                [f, "Solaris"], m
                            ],
                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                            [f, m]
                        ]
                    },
                    Y = function(e, t) {
                        if (typeof e === c && (t = e, e = o), !(this instanceof Y)) return new Y(e, t).getResult();
                        var n = typeof i !== a && i.navigator ? i.navigator : o,
                            r = e || (n && n.userAgent ? n.userAgent : ""),
                            y = n && n.userAgentData ? n.userAgentData : o,
                            v = t ? z($, t) : $,
                            A = n && n.userAgent == r;
                        return this.getBrowser = function() {
                            var e, t = {};
                            return t[f] = o, t[m] = o, V.call(t, r, v.browser), t[l] = typeof(e = t[m]) === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, A && n && n.brave && typeof n.brave.isBrave == s && (t[f] = "Brave"), t
                        }, this.getCPU = function() {
                            var e = {};
                            return e[g] = o, V.call(e, r, v.cpu), e
                        }, this.getDevice = function() {
                            var e = {};
                            return e[p] = o, e[d] = o, e[h] = o, V.call(e, r, v.device), A && !e[h] && y && y.mobile && (e[h] = b), A && "Macintosh" == e[d] && n && typeof n.standalone !== a && n.maxTouchPoints && n.maxTouchPoints > 2 && (e[d] = "iPad", e[h] = w), e
                        }, this.getEngine = function() {
                            var e = {};
                            return e[f] = o, e[m] = o, V.call(e, r, v.engine), e
                        }, this.getOS = function() {
                            var e = {};
                            return e[f] = o, e[m] = o, V.call(e, r, v.os), A && !e[f] && y && y.platform && "Unknown" != y.platform && (e[f] = y.platform.replace(/chrome os/i, j).replace(/macos/i, G)), e
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return r
                        }, this.setUA = function(e) {
                            return r = typeof e === u && e.length > 500 ? K(e, 500) : e, this
                        }, this.setUA(r), this
                    };
                Y.VERSION = "1.0.38", Y.BROWSER = W([f, m, l]), Y.CPU = W([g]), Y.DEVICE = W([d, p, h, y, b, v, w, A, C]), Y.ENGINE = Y.OS = W([f, m]), typeof t !== a ? (e.exports && (t = e.exports = Y), t.UAParser = Y) : n.amdO ? o !== (r = (function() {
                    return Y
                }).call(t, n, t, e)) && (e.exports = r) : typeof i !== a && (i.UAParser = Y);
                var X = typeof i !== a && (i.jQuery || i.Zepto);
                if (X && !X.ua) {
                    var ee = new Y;
                    X.ua = ee.getResult(), X.ua.get = function() {
                        return ee.getUA()
                    }, X.ua.set = function(e) {
                        ee.setUA(e);
                        var t = ee.getResult();
                        for (var n in t) X.ua[n] = t[n]
                    }
                }
            }("object" == typeof window ? window : this)
        },
        34492: function(e, t, n) {
            "use strict";
            var r = n(2265),
                i = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                o = r.useState,
                s = r.useEffect,
                a = r.useLayoutEffect,
                c = r.useDebugValue;

            function u(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !i(e, n)
                } catch (e) {
                    return !0
                }
            }
            var l = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var n = t(),
                    r = o({
                        inst: {
                            value: n,
                            getSnapshot: t
                        }
                    }),
                    i = r[0].inst,
                    l = r[1];
                return a(function() {
                    i.value = n, i.getSnapshot = t, u(i) && l({
                        inst: i
                    })
                }, [e, n, t]), s(function() {
                    return u(i) && l({
                        inst: i
                    }), e(function() {
                        u(i) && l({
                            inst: i
                        })
                    })
                }, [e]), c(n), n
            };
            t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l
        },
        85107: function(e, t, n) {
            "use strict";
            var r = n(2265),
                i = n(10554),
                o = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                s = i.useSyncExternalStore,
                a = r.useRef,
                c = r.useEffect,
                u = r.useMemo,
                l = r.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
                var d = a(null);
                if (null === d.current) {
                    var f = {
                        hasValue: !1,
                        value: null
                    };
                    d.current = f
                } else f = d.current;
                var h = s(e, (d = u(function() {
                    function e(e) {
                        if (!c) {
                            if (c = !0, s = e, e = r(e), void 0 !== i && f.hasValue) {
                                var t = f.value;
                                if (i(t, e)) return a = t
                            }
                            return a = e
                        }
                        if (t = a, o(s, e)) return t;
                        var n = r(e);
                        return void 0 !== i && i(t, n) ? t : (s = e, a = n)
                    }
                    var s, a, c = !1,
                        u = void 0 === n ? null : n;
                    return [function() {
                        return e(t())
                    }, null === u ? void 0 : function() {
                        return e(u())
                    }]
                }, [t, n, r, i]))[0], d[1]);
                return c(function() {
                    f.hasValue = !0, f.value = h
                }, [h]), l(h), h
            }
        },
        10554: function(e, t, n) {
            "use strict";
            e.exports = n(34492)
        },
        35006: function(e, t, n) {
            "use strict";
            e.exports = n(85107)
        },
        25566: function(e) {
            var t, n, r, i = e.exports = {};

            function o() {
                throw Error("setTimeout has not been defined")
            }

            function s() {
                throw Error("clearTimeout has not been defined")
            }

            function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (n) {
                    try {
                        return t.call(null, e, 0)
                    } catch (n) {
                        return t.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : o
                } catch (e) {
                    t = o
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : s
                } catch (e) {
                    n = s
                }
            }();
            var c = [],
                u = !1,
                l = -1;

            function d() {
                u && r && (u = !1, r.length ? c = r.concat(c) : l = -1, c.length && f())
            }

            function f() {
                if (!u) {
                    var e = a(d);
                    u = !0;
                    for (var t = c.length; t;) {
                        for (r = c, c = []; ++l < t;) r && r[l].run();
                        l = -1, t = c.length
                    }
                    r = null, u = !1,
                        function(e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                            try {
                                n(e)
                            } catch (t) {
                                try {
                                    return n.call(null, e)
                                } catch (t) {
                                    return n.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function h(e, t) {
                this.fun = e, this.array = t
            }

            function p() {}
            i.nextTick = function(e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                c.push(new h(e, t)), 1 !== c.length || u || a(f)
            }, h.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function(e) {
                return []
            }, i.binding = function(e) {
                throw Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(e) {
                throw Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        },
        91678: function(e, t, n) {
            "use strict";
            n.d(t, {
                FF: function() {
                    return I
                },
                S5: function() {
                    return g
                },
                Wd: function() {
                    return w
                },
                _t: function() {
                    return o
                },
                bytesToNumberBE: function() {
                    return h
                },
                ci: function() {
                    return c
                },
                dQ: function() {
                    return v
                },
                eV: function() {
                    return b
                },
                gk: function() {
                    return s
                },
                hexToBytes: function() {
                    return f
                },
                n$: function() {
                    return E
                },
                ql: function() {
                    return y
                },
                tL: function() {
                    return m
                },
                ty: function() {
                    return p
                }
            }), BigInt(0);
            let r = BigInt(1),
                i = BigInt(2);

            function o(e) {
                return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name
            }

            function s(e) {
                if (!o(e)) throw Error("Uint8Array expected")
            }
            let a = Array.from({
                length: 256
            }, (e, t) => t.toString(16).padStart(2, "0"));

            function c(e) {
                s(e);
                let t = "";
                for (let n = 0; n < e.length; n++) t += a[e[n]];
                return t
            }

            function u(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                return BigInt("" === e ? "0" : `0x${e}`)
            }
            let l = {
                _0: 48,
                _9: 57,
                _A: 65,
                _F: 70,
                _a: 97,
                _f: 102
            };

            function d(e) {
                return e >= l._0 && e <= l._9 ? e - l._0 : e >= l._A && e <= l._F ? e - (l._A - 10) : e >= l._a && e <= l._f ? e - (l._a - 10) : void 0
            }

            function f(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                let t = e.length,
                    n = t / 2;
                if (t % 2) throw Error("padded hex string expected, got unpadded hex of length " + t);
                let r = new Uint8Array(n);
                for (let t = 0, i = 0; t < n; t++, i += 2) {
                    let n = d(e.charCodeAt(i)),
                        o = d(e.charCodeAt(i + 1));
                    if (void 0 === n || void 0 === o) throw Error('hex string expected, got non-hex character "' + (e[i] + e[i + 1]) + '" at index ' + i);
                    r[t] = 16 * n + o
                }
                return r
            }

            function h(e) {
                return u(c(e))
            }

            function p(e) {
                return s(e), u(c(Uint8Array.from(e).reverse()))
            }

            function m(e, t) {
                return f(e.toString(16).padStart(2 * t, "0"))
            }

            function g(e, t) {
                return m(e, t).reverse()
            }

            function y(e, t, n) {
                let r;
                if ("string" == typeof t) try {
                        r = f(t)
                    } catch (n) {
                        throw Error(`${e} must be valid hex string, got "${t}". Cause: ${n}`)
                    } else if (o(t)) r = Uint8Array.from(t);
                    else throw Error(`${e} must be hex string or Uint8Array`);
                let i = r.length;
                if ("number" == typeof n && i !== n) throw Error(`${e} expected ${n} bytes, got ${i}`);
                return r
            }

            function b(...e) {
                let t = 0;
                for (let n = 0; n < e.length; n++) {
                    let r = e[n];
                    s(r), t += r.length
                }
                let n = new Uint8Array(t);
                for (let t = 0, r = 0; t < e.length; t++) {
                    let i = e[t];
                    n.set(i, r), r += i.length
                }
                return n
            }

            function w(e, t) {
                if (e.length !== t.length) return !1;
                let n = 0;
                for (let r = 0; r < e.length; r++) n |= e[r] ^ t[r];
                return 0 === n
            }
            let v = e => (i << BigInt(e - 1)) - r,
                A = e => new Uint8Array(e),
                C = e => Uint8Array.from(e);

            function E(e, t, n) {
                if ("number" != typeof e || e < 2) throw Error("hashLen must be a number");
                if ("number" != typeof t || t < 2) throw Error("qByteLen must be a number");
                if ("function" != typeof n) throw Error("hmacFn must be a function");
                let r = A(e),
                    i = A(e),
                    o = 0,
                    s = () => {
                        r.fill(1), i.fill(0), o = 0
                    },
                    a = (...e) => n(i, r, ...e),
                    c = (e = A()) => {
                        i = a(C([0]), e), r = a(), 0 !== e.length && (i = a(C([1]), e), r = a())
                    },
                    u = () => {
                        if (o++ >= 1e3) throw Error("drbg: tried 1000 values");
                        let e = 0,
                            n = [];
                        for (; e < t;) {
                            let t = (r = a()).slice();
                            n.push(t), e += r.length
                        }
                        return b(...n)
                    };
                return (e, t) => {
                    let n;
                    for (s(), c(e); !(n = t(u()));) c();
                    return s(), n
                }
            }
            let x = {
                bigint: e => "bigint" == typeof e,
                function: e => "function" == typeof e,
                boolean: e => "boolean" == typeof e,
                string: e => "string" == typeof e,
                stringOrUint8Array: e => "string" == typeof e || o(e),
                isSafeInteger: e => Number.isSafeInteger(e),
                array: e => Array.isArray(e),
                field: (e, t) => t.Fp.isValid(e),
                hash: e => "function" == typeof e && Number.isSafeInteger(e.outputLen)
            };

            function I(e, t, n = {}) {
                let r = (t, n, r) => {
                    let i = x[n];
                    if ("function" != typeof i) throw Error(`Invalid validator "${n}", expected function`);
                    let o = e[t];
                    if ((!r || void 0 !== o) && !i(o, e)) throw Error(`Invalid param ${String(t)}=${o} (${typeof o}), expected ${n}`)
                };
                for (let [e, n] of Object.entries(t)) r(e, n, !1);
                for (let [e, t] of Object.entries(n)) r(e, t, !0);
                return e
            }
        },
        26335: function(e, t, n) {
            "use strict";
            n.d(t, {
                secp256k1: function() {
                    return L
                }
            });
            var r = n(80543),
                i = n(91678);
            let o = BigInt(0),
                s = BigInt(1),
                a = BigInt(2),
                c = BigInt(3),
                u = BigInt(4),
                l = BigInt(5),
                d = BigInt(8);

            function f(e, t) {
                let n = e % t;
                return n >= o ? n : t + n
            }

            function h(e, t, n) {
                let r = e;
                for (; t-- > o;) r *= r, r %= n;
                return r
            }

            function p(e, t) {
                if (e === o || t <= o) throw Error(`invert: expected positive integers, got n=${e} mod=${t}`);
                let n = f(e, t),
                    r = t,
                    i = o,
                    a = s,
                    c = s,
                    u = o;
                for (; n !== o;) {
                    let e = r / n,
                        t = r % n,
                        o = i - c * e,
                        s = a - u * e;
                    r = n, n = t, i = c, a = u, c = o, u = s
                }
                if (r !== s) throw Error("invert: does not exist");
                return f(i, t)
            }
            BigInt(9), BigInt(16);
            let m = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

            function g(e, t) {
                let n = void 0 !== t ? t : e.toString(2).length;
                return {
                    nBitLength: n,
                    nByteLength: Math.ceil(n / 8)
                }
            }

            function y(e) {
                if ("bigint" != typeof e) throw Error("field order must be bigint");
                return Math.ceil(e.toString(2).length / 8)
            }

            function b(e) {
                let t = y(e);
                return t + Math.ceil(t / 2)
            }
            var w = n(65376),
                v = n(68104);
            class A extends v.kb {
                constructor(e, t) {
                    super(), this.finished = !1, this.destroyed = !1, (0, w.vp)(e);
                    let n = (0, v.O0)(t);
                    if (this.iHash = e.create(), "function" != typeof this.iHash.update) throw Error("Expected instance of class which extends utils.Hash");
                    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
                    let r = this.blockLen,
                        i = new Uint8Array(r);
                    i.set(n.length > r ? e.create().update(n).digest() : n);
                    for (let e = 0; e < i.length; e++) i[e] ^= 54;
                    this.iHash.update(i), this.oHash = e.create();
                    for (let e = 0; e < i.length; e++) i[e] ^= 106;
                    this.oHash.update(i), i.fill(0)
                }
                update(e) {
                    return (0, w.Gg)(this), this.iHash.update(e), this
                }
                digestInto(e) {
                    (0, w.Gg)(this), (0, w.aI)(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy()
                }
                digest() {
                    let e = new Uint8Array(this.oHash.outputLen);
                    return this.digestInto(e), e
                }
                _cloneInto(e) {
                    e || (e = Object.create(Object.getPrototypeOf(this), {}));
                    let {
                        oHash: t,
                        iHash: n,
                        finished: r,
                        destroyed: i,
                        blockLen: o,
                        outputLen: s
                    } = this;
                    return e.finished = r, e.destroyed = i, e.blockLen = o, e.outputLen = s, e.oHash = t._cloneInto(e.oHash), e.iHash = n._cloneInto(e.iHash), e
                }
                destroy() {
                    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
                }
            }
            let C = (e, t, n) => new A(e, t).update(n).digest();
            C.create = (e, t) => new A(e, t);
            let E = BigInt(0),
                x = BigInt(1);

            function I(e) {
                return ! function(e) {
                    let t = m.reduce((e, t) => (e[t] = "function", e), {
                        ORDER: "bigint",
                        MASK: "bigint",
                        BYTES: "isSafeInteger",
                        BITS: "isSafeInteger"
                    });
                    (0, i.FF)(e, t)
                }(e.Fp), (0, i.FF)(e, {
                    n: "bigint",
                    h: "bigint",
                    Gx: "field",
                    Gy: "field"
                }, {
                    nBitLength: "isSafeInteger",
                    nByteLength: "isSafeInteger"
                }), Object.freeze({ ...g(e.n, e.nBitLength),
                    ...e,
                    p: e.Fp.ORDER
                })
            }
            let {
                bytesToNumberBE: B,
                hexToBytes: k
            } = i, P = {
                Err: class extends Error {
                    constructor(e = "") {
                        super(e)
                    }
                },
                _parseInt(e) {
                    let {
                        Err: t
                    } = P;
                    if (e.length < 2 || 2 !== e[0]) throw new t("Invalid signature integer tag");
                    let n = e[1],
                        r = e.subarray(2, n + 2);
                    if (!n || r.length !== n) throw new t("Invalid signature integer: wrong length");
                    if (128 & r[0]) throw new t("Invalid signature integer: negative");
                    if (0 === r[0] && !(128 & r[1])) throw new t("Invalid signature integer: unnecessary leading zero");
                    return {
                        d: B(r),
                        l: e.subarray(n + 2)
                    }
                },
                toSig(e) {
                    let {
                        Err: t
                    } = P, n = "string" == typeof e ? k(e) : e;
                    i.gk(n);
                    let r = n.length;
                    if (r < 2 || 48 != n[0]) throw new t("Invalid signature tag");
                    if (n[1] !== r - 2) throw new t("Invalid signature: incorrect length");
                    let {
                        d: o,
                        l: s
                    } = P._parseInt(n.subarray(2)), {
                        d: a,
                        l: c
                    } = P._parseInt(s);
                    if (c.length) throw new t("Invalid signature: left bytes after parsing");
                    return {
                        r: o,
                        s: a
                    }
                },
                hexFromSig(e) {
                    let t = e => 8 & Number.parseInt(e[0], 16) ? "00" + e : e,
                        n = e => {
                            let t = e.toString(16);
                            return 1 & t.length ? `0${t}` : t
                        },
                        r = t(n(e.s)),
                        i = t(n(e.r)),
                        o = r.length / 2,
                        s = i.length / 2,
                        a = n(o),
                        c = n(s);
                    return `30${n(s+o+4)}02${c}${i}02${a}${r}`
                }
            }, M = BigInt(0), O = BigInt(1), S = (BigInt(2), BigInt(3));
            BigInt(4);
            let R = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
                T = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                N = BigInt(1),
                F = BigInt(2),
                D = (e, t) => (e + t / F) / t,
                U = function(e, t, n = !1, r = {}) {
                    if (e <= o) throw Error(`Expected Field ORDER > 0, got ${e}`);
                    let {
                        nBitLength: h,
                        nByteLength: m
                    } = g(e, t);
                    if (m > 2048) throw Error("Field lengths over 2048 bytes are not supported");
                    let y = function(e) {
                            if (e % u === c) {
                                let t = (e + s) / u;
                                return function(e, n) {
                                    let r = e.pow(n, t);
                                    if (!e.eql(e.sqr(r), n)) throw Error("Cannot find square root");
                                    return r
                                }
                            }
                            if (e % d === l) {
                                let t = (e - l) / d;
                                return function(e, n) {
                                    let r = e.mul(n, a),
                                        i = e.pow(r, t),
                                        o = e.mul(n, i),
                                        s = e.mul(e.mul(o, a), i),
                                        c = e.mul(o, e.sub(s, e.ONE));
                                    if (!e.eql(e.sqr(c), n)) throw Error("Cannot find square root");
                                    return c
                                }
                            }
                            return function(e) {
                                let t, n, r;
                                let i = (e - s) / a;
                                for (t = e - s, n = 0; t % a === o; t /= a, n++);
                                for (r = a; r < e && function(e, t, n) {
                                        if (n <= o || t < o) throw Error("Expected power/modulo > 0");
                                        if (n === s) return o;
                                        let r = s;
                                        for (; t > o;) t & s && (r = r * e % n), e = e * e % n, t >>= s;
                                        return r
                                    }(r, i, e) !== e - s; r++);
                                if (1 === n) {
                                    let t = (e + s) / u;
                                    return function(e, n) {
                                        let r = e.pow(n, t);
                                        if (!e.eql(e.sqr(r), n)) throw Error("Cannot find square root");
                                        return r
                                    }
                                }
                                let c = (t + s) / a;
                                return function(e, o) {
                                    if (e.pow(o, i) === e.neg(e.ONE)) throw Error("Cannot find square root");
                                    let a = n,
                                        u = e.pow(e.mul(e.ONE, r), t),
                                        l = e.pow(o, c),
                                        d = e.pow(o, t);
                                    for (; !e.eql(d, e.ONE);) {
                                        if (e.eql(d, e.ZERO)) return e.ZERO;
                                        let t = 1;
                                        for (let n = e.sqr(d); t < a && !e.eql(n, e.ONE); t++) n = e.sqr(n);
                                        let n = e.pow(u, s << BigInt(a - t - 1));
                                        u = e.sqr(n), l = e.mul(l, n), d = e.mul(d, u), a = t
                                    }
                                    return l
                                }
                            }(e)
                        }(e),
                        b = Object.freeze({
                            ORDER: e,
                            BITS: h,
                            BYTES: m,
                            MASK: (0, i.dQ)(h),
                            ZERO: o,
                            ONE: s,
                            create: t => f(t, e),
                            isValid: t => {
                                if ("bigint" != typeof t) throw Error(`Invalid field element: expected bigint, got ${typeof t}`);
                                return o <= t && t < e
                            },
                            is0: e => e === o,
                            isOdd: e => (e & s) === s,
                            neg: t => f(-t, e),
                            eql: (e, t) => e === t,
                            sqr: t => f(t * t, e),
                            add: (t, n) => f(t + n, e),
                            sub: (t, n) => f(t - n, e),
                            mul: (t, n) => f(t * n, e),
                            pow: (e, t) => (function(e, t, n) {
                                if (n < o) throw Error("Expected power > 0");
                                if (n === o) return e.ONE;
                                if (n === s) return t;
                                let r = e.ONE,
                                    i = t;
                                for (; n > o;) n & s && (r = e.mul(r, i)), i = e.sqr(i), n >>= s;
                                return r
                            })(b, e, t),
                            div: (t, n) => f(t * p(n, e), e),
                            sqrN: e => e * e,
                            addN: (e, t) => e + t,
                            subN: (e, t) => e - t,
                            mulN: (e, t) => e * t,
                            inv: t => p(t, e),
                            sqrt: r.sqrt || (e => y(b, e)),
                            invertBatch: e => (function(e, t) {
                                let n = Array(t.length),
                                    r = t.reduce((t, r, i) => e.is0(r) ? t : (n[i] = t, e.mul(t, r)), e.ONE),
                                    i = e.inv(r);
                                return t.reduceRight((t, r, i) => e.is0(r) ? t : (n[i] = e.mul(t, n[i]), e.mul(t, r)), i), n
                            })(b, e),
                            cmov: (e, t, n) => n ? t : e,
                            toBytes: e => n ? (0, i.S5)(e, m) : (0, i.tL)(e, m),
                            fromBytes: e => {
                                if (e.length !== m) throw Error(`Fp.fromBytes: expected ${m}, got ${e.length}`);
                                return n ? (0, i.ty)(e) : (0, i.bytesToNumberBE)(e)
                            }
                        });
                    return Object.freeze(b)
                }(R, void 0, void 0, {
                    sqrt: function(e) {
                        let t = BigInt(3),
                            n = BigInt(6),
                            r = BigInt(11),
                            i = BigInt(22),
                            o = BigInt(23),
                            s = BigInt(44),
                            a = BigInt(88),
                            c = e * e * e % R,
                            u = c * c * e % R,
                            l = h(u, t, R) * u % R,
                            d = h(l, t, R) * u % R,
                            f = h(d, F, R) * c % R,
                            p = h(f, r, R) * f % R,
                            m = h(p, i, R) * p % R,
                            g = h(m, s, R) * m % R,
                            y = h(g, a, R) * g % R,
                            b = h(y, s, R) * m % R,
                            w = h(b, t, R) * u % R,
                            v = h(w, o, R) * p % R,
                            A = h(v, n, R) * c % R,
                            C = h(A, F, R);
                        if (!U.eql(U.sqr(C), e)) throw Error("Cannot find square root");
                        return C
                    }
                }),
                L = function(e, t) {
                    let n = t => (function(e) {
                        let t = function(e) {
                                let t = I(e);
                                return i.FF(t, {
                                    hash: "hash",
                                    hmac: "function",
                                    randomBytes: "function"
                                }, {
                                    bits2int: "function",
                                    bits2int_modN: "function",
                                    lowS: "boolean"
                                }), Object.freeze({
                                    lowS: !0,
                                    ...t
                                })
                            }(e),
                            {
                                Fp: n,
                                n: r
                            } = t,
                            o = n.BYTES + 1,
                            a = 2 * n.BYTES + 1;

                        function c(e) {
                            return f(e, r)
                        }
                        let {
                            ProjectivePoint: u,
                            normPrivateKeyToScalar: l,
                            weierstrassEquation: d,
                            isWithinCurveOrder: h
                        } = function(e) {
                            let t = function(e) {
                                    let t = I(e);
                                    i.FF(t, {
                                        a: "field",
                                        b: "field"
                                    }, {
                                        allowedPrivateKeyLengths: "array",
                                        wrapPrivateKey: "boolean",
                                        isTorsionFree: "function",
                                        clearCofactor: "function",
                                        allowInfinityPoint: "boolean",
                                        fromBytes: "function",
                                        toBytes: "function"
                                    });
                                    let {
                                        endo: n,
                                        Fp: r,
                                        a: o
                                    } = t;
                                    if (n) {
                                        if (!r.eql(o, r.ZERO)) throw Error("Endomorphism can only be defined for Koblitz curves that have a=0");
                                        if ("object" != typeof n || "bigint" != typeof n.beta || "function" != typeof n.splitScalar) throw Error("Expected endomorphism with beta: bigint and splitScalar: function")
                                    }
                                    return Object.freeze({ ...t
                                    })
                                }(e),
                                {
                                    Fp: n
                                } = t,
                                r = t.toBytes || ((e, t, r) => {
                                    let o = t.toAffine();
                                    return i.eV(Uint8Array.from([4]), n.toBytes(o.x), n.toBytes(o.y))
                                }),
                                o = t.fromBytes || (e => {
                                    let t = e.subarray(1);
                                    return {
                                        x: n.fromBytes(t.subarray(0, n.BYTES)),
                                        y: n.fromBytes(t.subarray(n.BYTES, 2 * n.BYTES))
                                    }
                                });

                            function s(e) {
                                let {
                                    a: r,
                                    b: i
                                } = t, o = n.sqr(e), s = n.mul(o, e);
                                return n.add(n.add(s, n.mul(e, r)), i)
                            }
                            if (!n.eql(n.sqr(t.Gy), s(t.Gx))) throw Error("bad generator point: equation left != right");

                            function a(e) {
                                return "bigint" == typeof e && M < e && e < t.n
                            }

                            function c(e) {
                                if (!a(e)) throw Error("Expected valid bigint: 0 < bigint < curve.n")
                            }

                            function u(e) {
                                let n;
                                let {
                                    allowedPrivateKeyLengths: r,
                                    nByteLength: o,
                                    wrapPrivateKey: s,
                                    n: a
                                } = t;
                                if (r && "bigint" != typeof e) {
                                    if (i._t(e) && (e = i.ci(e)), "string" != typeof e || !r.includes(e.length)) throw Error("Invalid key");
                                    e = e.padStart(2 * o, "0")
                                }
                                try {
                                    n = "bigint" == typeof e ? e : i.bytesToNumberBE((0, i.ql)("private key", e, o))
                                } catch (t) {
                                    throw Error(`private key must be ${o} bytes, hex or bigint, not ${typeof e}`)
                                }
                                return s && (n = f(n, a)), c(n), n
                            }
                            let l = new Map;

                            function d(e) {
                                if (!(e instanceof h)) throw Error("ProjectivePoint expected")
                            }
                            class h {
                                constructor(e, t, r) {
                                    if (this.px = e, this.py = t, this.pz = r, null == e || !n.isValid(e)) throw Error("x required");
                                    if (null == t || !n.isValid(t)) throw Error("y required");
                                    if (null == r || !n.isValid(r)) throw Error("z required")
                                }
                                static fromAffine(e) {
                                    let {
                                        x: t,
                                        y: r
                                    } = e || {};
                                    if (!e || !n.isValid(t) || !n.isValid(r)) throw Error("invalid affine point");
                                    if (e instanceof h) throw Error("projective point not allowed");
                                    let i = e => n.eql(e, n.ZERO);
                                    return i(t) && i(r) ? h.ZERO : new h(t, r, n.ONE)
                                }
                                get x() {
                                    return this.toAffine().x
                                }
                                get y() {
                                    return this.toAffine().y
                                }
                                static normalizeZ(e) {
                                    let t = n.invertBatch(e.map(e => e.pz));
                                    return e.map((e, n) => e.toAffine(t[n])).map(h.fromAffine)
                                }
                                static fromHex(e) {
                                    let t = h.fromAffine(o((0, i.ql)("pointHex", e)));
                                    return t.assertValidity(), t
                                }
                                static fromPrivateKey(e) {
                                    return h.BASE.multiply(u(e))
                                }
                                _setWindowSize(e) {
                                    this._WINDOW_SIZE = e, l.delete(this)
                                }
                                assertValidity() {
                                    if (this.is0()) {
                                        if (t.allowInfinityPoint && !n.is0(this.py)) return;
                                        throw Error("bad point: ZERO")
                                    }
                                    let {
                                        x: e,
                                        y: r
                                    } = this.toAffine();
                                    if (!n.isValid(e) || !n.isValid(r)) throw Error("bad point: x or y not FE");
                                    let i = n.sqr(r),
                                        o = s(e);
                                    if (!n.eql(i, o)) throw Error("bad point: equation left != right");
                                    if (!this.isTorsionFree()) throw Error("bad point: not in prime-order subgroup")
                                }
                                hasEvenY() {
                                    let {
                                        y: e
                                    } = this.toAffine();
                                    if (n.isOdd) return !n.isOdd(e);
                                    throw Error("Field doesn't support isOdd")
                                }
                                equals(e) {
                                    d(e);
                                    let {
                                        px: t,
                                        py: r,
                                        pz: i
                                    } = this, {
                                        px: o,
                                        py: s,
                                        pz: a
                                    } = e, c = n.eql(n.mul(t, a), n.mul(o, i)), u = n.eql(n.mul(r, a), n.mul(s, i));
                                    return c && u
                                }
                                negate() {
                                    return new h(this.px, n.neg(this.py), this.pz)
                                }
                                double() {
                                    let {
                                        a: e,
                                        b: r
                                    } = t, i = n.mul(r, S), {
                                        px: o,
                                        py: s,
                                        pz: a
                                    } = this, c = n.ZERO, u = n.ZERO, l = n.ZERO, d = n.mul(o, o), f = n.mul(s, s), p = n.mul(a, a), m = n.mul(o, s);
                                    return m = n.add(m, m), l = n.mul(o, a), l = n.add(l, l), c = n.mul(e, l), u = n.mul(i, p), u = n.add(c, u), c = n.sub(f, u), u = n.add(f, u), u = n.mul(c, u), c = n.mul(m, c), l = n.mul(i, l), p = n.mul(e, p), m = n.sub(d, p), m = n.mul(e, m), m = n.add(m, l), l = n.add(d, d), d = n.add(l, d), d = n.add(d, p), d = n.mul(d, m), u = n.add(u, d), p = n.mul(s, a), p = n.add(p, p), d = n.mul(p, m), c = n.sub(c, d), l = n.mul(p, f), l = n.add(l, l), new h(c, u, l = n.add(l, l))
                                }
                                add(e) {
                                    d(e);
                                    let {
                                        px: r,
                                        py: i,
                                        pz: o
                                    } = this, {
                                        px: s,
                                        py: a,
                                        pz: c
                                    } = e, u = n.ZERO, l = n.ZERO, f = n.ZERO, p = t.a, m = n.mul(t.b, S), g = n.mul(r, s), y = n.mul(i, a), b = n.mul(o, c), w = n.add(r, i), v = n.add(s, a);
                                    w = n.mul(w, v), v = n.add(g, y), w = n.sub(w, v), v = n.add(r, o);
                                    let A = n.add(s, c);
                                    return v = n.mul(v, A), A = n.add(g, b), v = n.sub(v, A), A = n.add(i, o), u = n.add(a, c), A = n.mul(A, u), u = n.add(y, b), A = n.sub(A, u), f = n.mul(p, v), u = n.mul(m, b), f = n.add(u, f), u = n.sub(y, f), f = n.add(y, f), l = n.mul(u, f), y = n.add(g, g), y = n.add(y, g), b = n.mul(p, b), v = n.mul(m, v), y = n.add(y, b), b = n.sub(g, b), b = n.mul(p, b), v = n.add(v, b), g = n.mul(y, v), l = n.add(l, g), g = n.mul(A, v), u = n.mul(w, u), u = n.sub(u, g), g = n.mul(w, y), f = n.mul(A, f), new h(u, l, f = n.add(f, g))
                                }
                                subtract(e) {
                                    return this.add(e.negate())
                                }
                                is0() {
                                    return this.equals(h.ZERO)
                                }
                                wNAF(e) {
                                    return m.wNAFCached(this, l, e, e => {
                                        let t = n.invertBatch(e.map(e => e.pz));
                                        return e.map((e, n) => e.toAffine(t[n])).map(h.fromAffine)
                                    })
                                }
                                multiplyUnsafe(e) {
                                    let r = h.ZERO;
                                    if (e === M) return r;
                                    if (c(e), e === O) return this;
                                    let {
                                        endo: i
                                    } = t;
                                    if (!i) return m.unsafeLadder(this, e);
                                    let {
                                        k1neg: o,
                                        k1: s,
                                        k2neg: a,
                                        k2: u
                                    } = i.splitScalar(e), l = r, d = r, f = this;
                                    for (; s > M || u > M;) s & O && (l = l.add(f)), u & O && (d = d.add(f)), f = f.double(), s >>= O, u >>= O;
                                    return o && (l = l.negate()), a && (d = d.negate()), d = new h(n.mul(d.px, i.beta), d.py, d.pz), l.add(d)
                                }
                                multiply(e) {
                                    let r, i;
                                    c(e);
                                    let {
                                        endo: o
                                    } = t;
                                    if (o) {
                                        let {
                                            k1neg: t,
                                            k1: s,
                                            k2neg: a,
                                            k2: c
                                        } = o.splitScalar(e), {
                                            p: u,
                                            f: l
                                        } = this.wNAF(s), {
                                            p: d,
                                            f: f
                                        } = this.wNAF(c);
                                        u = m.constTimeNegate(t, u), d = m.constTimeNegate(a, d), d = new h(n.mul(d.px, o.beta), d.py, d.pz), r = u.add(d), i = l.add(f)
                                    } else {
                                        let {
                                            p: t,
                                            f: n
                                        } = this.wNAF(e);
                                        r = t, i = n
                                    }
                                    return h.normalizeZ([r, i])[0]
                                }
                                multiplyAndAddUnsafe(e, t, n) {
                                    let r = h.BASE,
                                        i = (e, t) => t !== M && t !== O && e.equals(r) ? e.multiply(t) : e.multiplyUnsafe(t),
                                        o = i(this, t).add(i(e, n));
                                    return o.is0() ? void 0 : o
                                }
                                toAffine(e) {
                                    let {
                                        px: t,
                                        py: r,
                                        pz: i
                                    } = this, o = this.is0();
                                    null == e && (e = o ? n.ONE : n.inv(i));
                                    let s = n.mul(t, e),
                                        a = n.mul(r, e),
                                        c = n.mul(i, e);
                                    if (o) return {
                                        x: n.ZERO,
                                        y: n.ZERO
                                    };
                                    if (!n.eql(c, n.ONE)) throw Error("invZ was invalid");
                                    return {
                                        x: s,
                                        y: a
                                    }
                                }
                                isTorsionFree() {
                                    let {
                                        h: e,
                                        isTorsionFree: n
                                    } = t;
                                    if (e === O) return !0;
                                    if (n) return n(h, this);
                                    throw Error("isTorsionFree() has not been declared for the elliptic curve")
                                }
                                clearCofactor() {
                                    let {
                                        h: e,
                                        clearCofactor: n
                                    } = t;
                                    return e === O ? this : n ? n(h, this) : this.multiplyUnsafe(t.h)
                                }
                                toRawBytes(e = !0) {
                                    return this.assertValidity(), r(h, this, e)
                                }
                                toHex(e = !0) {
                                    return i.ci(this.toRawBytes(e))
                                }
                            }
                            h.BASE = new h(t.Gx, t.Gy, n.ONE), h.ZERO = new h(n.ZERO, n.ONE, n.ZERO);
                            let p = t.nBitLength,
                                m = function(e, t) {
                                    let n = (e, t) => {
                                            let n = t.negate();
                                            return e ? n : t
                                        },
                                        r = e => ({
                                            windows: Math.ceil(t / e) + 1,
                                            windowSize: 2 ** (e - 1)
                                        });
                                    return {
                                        constTimeNegate: n,
                                        unsafeLadder(t, n) {
                                            let r = e.ZERO,
                                                i = t;
                                            for (; n > E;) n & x && (r = r.add(i)), i = i.double(), n >>= x;
                                            return r
                                        },
                                        precomputeWindow(e, t) {
                                            let {
                                                windows: n,
                                                windowSize: i
                                            } = r(t), o = [], s = e, a = s;
                                            for (let e = 0; e < n; e++) {
                                                a = s, o.push(a);
                                                for (let e = 1; e < i; e++) a = a.add(s), o.push(a);
                                                s = a.double()
                                            }
                                            return o
                                        },
                                        wNAF(t, i, o) {
                                            let {
                                                windows: s,
                                                windowSize: a
                                            } = r(t), c = e.ZERO, u = e.BASE, l = BigInt(2 ** t - 1), d = 2 ** t, f = BigInt(t);
                                            for (let e = 0; e < s; e++) {
                                                let t = e * a,
                                                    r = Number(o & l);
                                                o >>= f, r > a && (r -= d, o += x);
                                                let s = t + Math.abs(r) - 1,
                                                    h = e % 2 != 0,
                                                    p = r < 0;
                                                0 === r ? u = u.add(n(h, i[t])) : c = c.add(n(p, i[s]))
                                            }
                                            return {
                                                p: c,
                                                f: u
                                            }
                                        },
                                        wNAFCached(e, t, n, r) {
                                            let i = e._WINDOW_SIZE || 1,
                                                o = t.get(e);
                                            return o || (o = this.precomputeWindow(e, i), 1 !== i && t.set(e, r(o))), this.wNAF(i, o, n)
                                        }
                                    }
                                }(h, t.endo ? Math.ceil(p / 2) : p);
                            return {
                                CURVE: t,
                                ProjectivePoint: h,
                                normPrivateKeyToScalar: u,
                                weierstrassEquation: s,
                                isWithinCurveOrder: a
                            }
                        }({ ...t,
                            toBytes(e, t, r) {
                                let o = t.toAffine(),
                                    s = n.toBytes(o.x),
                                    a = i.eV;
                                return r ? a(Uint8Array.from([t.hasEvenY() ? 2 : 3]), s) : a(Uint8Array.from([4]), s, n.toBytes(o.y))
                            },
                            fromBytes(e) {
                                let t = e.length,
                                    r = e[0],
                                    s = e.subarray(1);
                                if (t === o && (2 === r || 3 === r)) {
                                    let e;
                                    let t = i.bytesToNumberBE(s);
                                    if (!(M < t && t < n.ORDER)) throw Error("Point is not on curve");
                                    let o = d(t);
                                    try {
                                        e = n.sqrt(o)
                                    } catch (e) {
                                        throw Error("Point is not on curve" + (e instanceof Error ? ": " + e.message : ""))
                                    }
                                    return (1 & r) == 1 != ((e & O) === O) && (e = n.neg(e)), {
                                        x: t,
                                        y: e
                                    }
                                }
                                if (t === a && 4 === r) return {
                                    x: n.fromBytes(s.subarray(0, n.BYTES)),
                                    y: n.fromBytes(s.subarray(n.BYTES, 2 * n.BYTES))
                                };
                                throw Error(`Point of length ${t} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)
                            }
                        }), m = e => i.ci(i.tL(e, t.nByteLength)), g = (e, t, n) => i.bytesToNumberBE(e.slice(t, n));
                        class w {
                            constructor(e, t, n) {
                                this.r = e, this.s = t, this.recovery = n, this.assertValidity()
                            }
                            static fromCompact(e) {
                                let n = t.nByteLength;
                                return new w(g(e = (0, i.ql)("compactSignature", e, 2 * n), 0, n), g(e, n, 2 * n))
                            }
                            static fromDER(e) {
                                let {
                                    r: t,
                                    s: n
                                } = P.toSig((0, i.ql)("DER", e));
                                return new w(t, n)
                            }
                            assertValidity() {
                                if (!h(this.r)) throw Error("r must be 0 < r < CURVE.n");
                                if (!h(this.s)) throw Error("s must be 0 < s < CURVE.n")
                            }
                            addRecoveryBit(e) {
                                return new w(this.r, this.s, e)
                            }
                            recoverPublicKey(e) {
                                let {
                                    r: o,
                                    s,
                                    recovery: a
                                } = this, l = C((0, i.ql)("msgHash", e));
                                if (null == a || ![0, 1, 2, 3].includes(a)) throw Error("recovery id invalid");
                                let d = 2 === a || 3 === a ? o + t.n : o;
                                if (d >= n.ORDER) throw Error("recovery id 2 or 3 invalid");
                                let f = (1 & a) == 0 ? "02" : "03",
                                    h = u.fromHex(f + m(d)),
                                    g = p(d, r),
                                    y = c(-l * g),
                                    b = c(s * g),
                                    w = u.BASE.multiplyAndAddUnsafe(h, y, b);
                                if (!w) throw Error("point at infinify");
                                return w.assertValidity(), w
                            }
                            hasHighS() {
                                return this.s > r >> O
                            }
                            normalizeS() {
                                return this.hasHighS() ? new w(this.r, c(-this.s), this.recovery) : this
                            }
                            toDERRawBytes() {
                                return i.hexToBytes(this.toDERHex())
                            }
                            toDERHex() {
                                return P.hexFromSig({
                                    r: this.r,
                                    s: this.s
                                })
                            }
                            toCompactRawBytes() {
                                return i.hexToBytes(this.toCompactHex())
                            }
                            toCompactHex() {
                                return m(this.r) + m(this.s)
                            }
                        }

                        function v(e) {
                            let t = i._t(e),
                                n = "string" == typeof e,
                                r = (t || n) && e.length;
                            return t ? r === o || r === a : n ? r === 2 * o || r === 2 * a : e instanceof u
                        }
                        let A = t.bits2int || function(e) {
                                let n = i.bytesToNumberBE(e),
                                    r = 8 * e.length - t.nBitLength;
                                return r > 0 ? n >> BigInt(r) : n
                            },
                            C = t.bits2int_modN || function(e) {
                                return c(A(e))
                            },
                            B = i.dQ(t.nBitLength);

                        function k(e) {
                            if ("bigint" != typeof e) throw Error("bigint expected");
                            if (!(M <= e && e < B)) throw Error(`bigint expected < 2^${t.nBitLength}`);
                            return i.tL(e, t.nByteLength)
                        }
                        let R = {
                                lowS: t.lowS,
                                prehash: !1
                            },
                            T = {
                                lowS: t.lowS,
                                prehash: !1
                            };
                        return u.BASE._setWindowSize(8), {
                            CURVE: t,
                            getPublicKey: function(e, t = !0) {
                                return u.fromPrivateKey(e).toRawBytes(t)
                            },
                            getSharedSecret: function(e, t, n = !0) {
                                if (v(e)) throw Error("first arg must be private key");
                                if (!v(t)) throw Error("second arg must be public key");
                                return u.fromHex(t).multiply(l(e)).toRawBytes(n)
                            },
                            sign: function(e, o, s = R) {
                                let {
                                    seed: a,
                                    k2sig: d
                                } = function(e, o, s = R) {
                                    if (["recovered", "canonical"].some(e => e in s)) throw Error("sign() legacy options not supported");
                                    let {
                                        hash: a,
                                        randomBytes: d
                                    } = t, {
                                        lowS: f,
                                        prehash: m,
                                        extraEntropy: g
                                    } = s;
                                    null == f && (f = !0), e = (0, i.ql)("msgHash", e), m && (e = (0, i.ql)("prehashed msgHash", a(e)));
                                    let y = C(e),
                                        b = l(o),
                                        v = [k(b), k(y)];
                                    if (null != g && !1 !== g) {
                                        let e = !0 === g ? d(n.BYTES) : g;
                                        v.push((0, i.ql)("extraEntropy", e))
                                    }
                                    return {
                                        seed: i.eV(...v),
                                        k2sig: function(e) {
                                            let t = A(e);
                                            if (!h(t)) return;
                                            let n = p(t, r),
                                                i = u.BASE.multiply(t).toAffine(),
                                                o = c(i.x);
                                            if (o === M) return;
                                            let s = c(n * c(y + o * b));
                                            if (s === M) return;
                                            let a = (i.x === o ? 0 : 2) | Number(i.y & O),
                                                l = s;
                                            if (f && s > r >> O) l = s > r >> O ? c(-s) : s, a ^= 1;
                                            return new w(o, l, a)
                                        }
                                    }
                                }(e, o, s);
                                return i.n$(t.hash.outputLen, t.nByteLength, t.hmac)(a, d)
                            },
                            verify: function(e, n, o, s = T) {
                                let a, l;
                                if (n = (0, i.ql)("msgHash", n), o = (0, i.ql)("publicKey", o), "strict" in s) throw Error("options.strict was renamed to lowS");
                                let {
                                    lowS: d,
                                    prehash: f
                                } = s;
                                try {
                                    if ("string" == typeof e || i._t(e)) try {
                                        l = w.fromDER(e)
                                    } catch (t) {
                                        if (!(t instanceof P.Err)) throw t;
                                        l = w.fromCompact(e)
                                    } else if ("object" == typeof e && "bigint" == typeof e.r && "bigint" == typeof e.s) {
                                        let {
                                            r: t,
                                            s: n
                                        } = e;
                                        l = new w(t, n)
                                    } else throw Error("PARSE");
                                    a = u.fromHex(o)
                                } catch (e) {
                                    if ("PARSE" === e.message) throw Error("signature must be Signature instance, Uint8Array or hex string");
                                    return !1
                                }
                                if (d && l.hasHighS()) return !1;
                                f && (n = t.hash(n));
                                let {
                                    r: h,
                                    s: m
                                } = l, g = C(n), y = p(m, r), b = c(g * y), v = c(h * y), A = u.BASE.multiplyAndAddUnsafe(a, b, v) ? .toAffine();
                                return !!A && c(A.x) === h
                            },
                            ProjectivePoint: u,
                            Signature: w,
                            utils: {
                                isValidPrivateKey(e) {
                                    try {
                                        return l(e), !0
                                    } catch (e) {
                                        return !1
                                    }
                                },
                                normPrivateKeyToScalar: l,
                                randomPrivateKey: () => {
                                    let e = b(t.n);
                                    return function(e, t, n = !1) {
                                        let r = e.length,
                                            o = y(t),
                                            a = b(t);
                                        if (r < 16 || r < a || r > 1024) throw Error(`expected ${a}-1024 bytes of input, got ${r}`);
                                        let c = f(n ? (0, i.bytesToNumberBE)(e) : (0, i.ty)(e), t - s) + s;
                                        return n ? (0, i.S5)(c, o) : (0, i.tL)(c, o)
                                    }(t.randomBytes(e), t.n)
                                },
                                precompute: (e = 8, t = u.BASE) => (t._setWindowSize(e), t.multiply(BigInt(3)), t)
                            }
                        }
                    })({ ...e,
                        hash: t,
                        hmac: (e, ...n) => C(t, e, (0, v.eV)(...n)),
                        randomBytes: v.O6
                    });
                    return Object.freeze({ ...n(t),
                        create: n
                    })
                }({
                    a: BigInt(0),
                    b: BigInt(7),
                    Fp: U,
                    n: T,
                    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
                    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
                    h: BigInt(1),
                    lowS: !0,
                    endo: {
                        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
                        splitScalar: e => {
                            let t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                                n = -N * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                                r = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                                i = BigInt("0x100000000000000000000000000000000"),
                                o = D(t * e, T),
                                s = D(-n * e, T),
                                a = f(e - o * t - s * r, T),
                                c = f(-o * n - s * t, T),
                                u = a > i,
                                l = c > i;
                            if (u && (a = T - a), l && (c = T - c), a > i || c > i) throw Error("splitScalar: Endomorphism failed, k=" + e);
                            return {
                                k1neg: u,
                                k1: a,
                                k2neg: l,
                                k2: c
                            }
                        }
                    }
                }, r.J);
            BigInt(0), L.ProjectivePoint
        },
        65376: function(e, t, n) {
            "use strict";

            function r(e) {
                if (!Number.isSafeInteger(e) || e < 0) throw Error(`positive integer expected, not ${e}`)
            }

            function i(e, ...t) {
                if (!(e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name)) throw Error("Uint8Array expected");
                if (t.length > 0 && !t.includes(e.length)) throw Error(`Uint8Array expected of length ${t}, not of length=${e.length}`)
            }

            function o(e) {
                if ("function" != typeof e || "function" != typeof e.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
                r(e.outputLen), r(e.blockLen)
            }

            function s(e, t = !0) {
                if (e.destroyed) throw Error("Hash instance has been destroyed");
                if (t && e.finished) throw Error("Hash#digest() has already been called")
            }

            function a(e, t) {
                i(e);
                let n = t.outputLen;
                if (e.length < n) throw Error(`digestInto() expects output buffer of length at least ${n}`)
            }
            n.d(t, {
                Gg: function() {
                    return s
                },
                J8: function() {
                    return a
                },
                Rx: function() {
                    return r
                },
                aI: function() {
                    return i
                },
                vp: function() {
                    return o
                }
            })
        },
        80543: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return f
                }
            });
            var r = n(65376),
                i = n(68104);
            let o = (e, t, n) => e & t ^ ~e & n,
                s = (e, t, n) => e & t ^ e & n ^ t & n;
            class a extends i.kb {
                constructor(e, t, n, r) {
                    super(), this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = (0, i.GL)(this.buffer)
                }
                update(e) {
                    (0, r.Gg)(this);
                    let {
                        view: t,
                        buffer: n,
                        blockLen: o
                    } = this, s = (e = (0, i.O0)(e)).length;
                    for (let r = 0; r < s;) {
                        let a = Math.min(o - this.pos, s - r);
                        if (a === o) {
                            let t = (0, i.GL)(e);
                            for (; o <= s - r; r += o) this.process(t, r);
                            continue
                        }
                        n.set(e.subarray(r, r + a), this.pos), this.pos += a, r += a, this.pos === o && (this.process(t, 0), this.pos = 0)
                    }
                    return this.length += e.length, this.roundClean(), this
                }
                digestInto(e) {
                    (0, r.Gg)(this), (0, r.J8)(e, this), this.finished = !0;
                    let {
                        buffer: t,
                        view: n,
                        blockLen: o,
                        isLE: s
                    } = this, {
                        pos: a
                    } = this;
                    t[a++] = 128, this.buffer.subarray(a).fill(0), this.padOffset > o - a && (this.process(n, 0), a = 0);
                    for (let e = a; e < o; e++) t[e] = 0;
                    ! function(e, t, n, r) {
                        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, n, r);
                        let i = BigInt(32),
                            o = BigInt(4294967295),
                            s = Number(n >> i & o),
                            a = Number(n & o),
                            c = r ? 4 : 0,
                            u = r ? 0 : 4;
                        e.setUint32(t + c, s, r), e.setUint32(t + u, a, r)
                    }(n, o - 8, BigInt(8 * this.length), s), this.process(n, 0);
                    let c = (0, i.GL)(e),
                        u = this.outputLen;
                    if (u % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
                    let l = u / 4,
                        d = this.get();
                    if (l > d.length) throw Error("_sha2: outputLen bigger than state");
                    for (let e = 0; e < l; e++) c.setUint32(4 * e, d[e], s)
                }
                digest() {
                    let {
                        buffer: e,
                        outputLen: t
                    } = this;
                    this.digestInto(e);
                    let n = e.slice(0, t);
                    return this.destroy(), n
                }
                _cloneInto(e) {
                    e || (e = new this.constructor), e.set(...this.get());
                    let {
                        blockLen: t,
                        buffer: n,
                        length: r,
                        finished: i,
                        destroyed: o,
                        pos: s
                    } = this;
                    return e.length = r, e.pos = s, e.finished = i, e.destroyed = o, r % t && e.buffer.set(n), e
                }
            }
            let c = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                u = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                l = new Uint32Array(64);
            class d extends a {
                constructor() {
                    super(64, 32, 8, !1), this.A = 0 | u[0], this.B = 0 | u[1], this.C = 0 | u[2], this.D = 0 | u[3], this.E = 0 | u[4], this.F = 0 | u[5], this.G = 0 | u[6], this.H = 0 | u[7]
                }
                get() {
                    let {
                        A: e,
                        B: t,
                        C: n,
                        D: r,
                        E: i,
                        F: o,
                        G: s,
                        H: a
                    } = this;
                    return [e, t, n, r, i, o, s, a]
                }
                set(e, t, n, r, i, o, s, a) {
                    this.A = 0 | e, this.B = 0 | t, this.C = 0 | n, this.D = 0 | r, this.E = 0 | i, this.F = 0 | o, this.G = 0 | s, this.H = 0 | a
                }
                process(e, t) {
                    for (let n = 0; n < 16; n++, t += 4) l[n] = e.getUint32(t, !1);
                    for (let e = 16; e < 64; e++) {
                        let t = l[e - 15],
                            n = l[e - 2],
                            r = (0, i.np)(t, 7) ^ (0, i.np)(t, 18) ^ t >>> 3,
                            o = (0, i.np)(n, 17) ^ (0, i.np)(n, 19) ^ n >>> 10;
                        l[e] = o + l[e - 7] + r + l[e - 16] | 0
                    }
                    let {
                        A: n,
                        B: r,
                        C: a,
                        D: u,
                        E: d,
                        F: f,
                        G: h,
                        H: p
                    } = this;
                    for (let e = 0; e < 64; e++) {
                        let t = p + ((0, i.np)(d, 6) ^ (0, i.np)(d, 11) ^ (0, i.np)(d, 25)) + o(d, f, h) + c[e] + l[e] | 0,
                            m = ((0, i.np)(n, 2) ^ (0, i.np)(n, 13) ^ (0, i.np)(n, 22)) + s(n, r, a) | 0;
                        p = h, h = f, f = d, d = u + t | 0, u = a, a = r, r = n, n = t + m | 0
                    }
                    n = n + this.A | 0, r = r + this.B | 0, a = a + this.C | 0, u = u + this.D | 0, d = d + this.E | 0, f = f + this.F | 0, h = h + this.G | 0, p = p + this.H | 0, this.set(n, r, a, u, d, f, h, p)
                }
                roundClean() {
                    l.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            let f = (0, i.hE)(() => new d)
        },
        68104: function(e, t, n) {
            "use strict";
            n.d(t, {
                kb: function() {
                    return h
                },
                l1: function() {
                    return l
                },
                eV: function() {
                    return f
                },
                GL: function() {
                    return s
                },
                iA: function() {
                    return c
                },
                O6: function() {
                    return m
                },
                np: function() {
                    return a
                },
                O0: function() {
                    return d
                },
                Jq: function() {
                    return o
                },
                hE: function() {
                    return p
                }
            });
            let r = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0;
            var i = n(65376);
            let o = e => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
                s = e => new DataView(e.buffer, e.byteOffset, e.byteLength),
                a = (e, t) => e << 32 - t | e >>> t,
                c = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0],
                u = e => e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;

            function l(e) {
                for (let t = 0; t < e.length; t++) e[t] = u(e[t])
            }

            function d(e) {
                return "string" == typeof e && (e = function(e) {
                    if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
                    return new Uint8Array(new TextEncoder().encode(e))
                }(e)), (0, i.aI)(e), e
            }

            function f(...e) {
                let t = 0;
                for (let n = 0; n < e.length; n++) {
                    let r = e[n];
                    (0, i.aI)(r), t += r.length
                }
                let n = new Uint8Array(t);
                for (let t = 0, r = 0; t < e.length; t++) {
                    let i = e[t];
                    n.set(i, r), r += i.length
                }
                return n
            }
            class h {
                clone() {
                    return this._cloneInto()
                }
            }

            function p(e) {
                let t = t => e().update(d(t)).digest(),
                    n = e();
                return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t
            }

            function m(e = 32) {
                if (r && "function" == typeof r.getRandomValues) return r.getRandomValues(new Uint8Array(e));
                throw Error("crypto.getRandomValues must be defined")
            }
        },
        38413: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return s
                }
            });
            var r = n(75217),
                i = {
                    blue: {
                        accentColor: "#0E76FD",
                        accentColorForeground: "#FFF"
                    },
                    green: {
                        accentColor: "#1DB847",
                        accentColorForeground: "#FFF"
                    },
                    orange: {
                        accentColor: "#FF801F",
                        accentColorForeground: "#FFF"
                    },
                    pink: {
                        accentColor: "#FF5CA0",
                        accentColorForeground: "#FFF"
                    },
                    purple: {
                        accentColor: "#5F5AFA",
                        accentColorForeground: "#FFF"
                    },
                    red: {
                        accentColor: "#FA423C",
                        accentColorForeground: "#FFF"
                    }
                },
                o = i.blue,
                s = function() {
                    let {
                        accentColor: e = o.accentColor,
                        accentColorForeground: t = o.accentColorForeground,
                        ...n
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return { ...(0, r.w)(n),
                        colors: {
                            accentColor: e,
                            accentColorForeground: t,
                            actionButtonBorder: "rgba(0, 0, 0, 0.04)",
                            actionButtonBorderMobile: "rgba(0, 0, 0, 0.06)",
                            actionButtonSecondaryBackground: "rgba(0, 0, 0, 0.06)",
                            closeButton: "rgba(60, 66, 66, 0.8)",
                            closeButtonBackground: "rgba(0, 0, 0, 0.06)",
                            connectButtonBackground: "#FFF",
                            connectButtonBackgroundError: "#FF494A",
                            connectButtonInnerBackground: "linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",
                            connectButtonText: "#25292E",
                            connectButtonTextError: "#FFF",
                            connectionIndicator: "#30E000",
                            downloadBottomCardBackground: "linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",
                            downloadTopCardBackground: "linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",
                            error: "#FF494A",
                            generalBorder: "rgba(0, 0, 0, 0.06)",
                            generalBorderDim: "rgba(0, 0, 0, 0.03)",
                            menuItemBackground: "rgba(60, 66, 66, 0.1)",
                            modalBackdrop: "rgba(0, 0, 0, 0.3)",
                            modalBackground: "#FFF",
                            modalBorder: "transparent",
                            modalText: "#25292E",
                            modalTextDim: "rgba(60, 66, 66, 0.3)",
                            modalTextSecondary: "rgba(60, 66, 66, 0.6)",
                            profileAction: "#FFF",
                            profileActionHover: "rgba(255, 255, 255, 0.5)",
                            profileForeground: "rgba(60, 66, 66, 0.06)",
                            selectedOptionBorder: "rgba(60, 66, 66, 0.1)",
                            standby: "#FFD641"
                        },
                        shadows: {
                            connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                            dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
                            profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
                            selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
                            selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.12)",
                            walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)"
                        }
                    }
                };
            s.accentColors = i
        },
        75217: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return a
                }
            });
            var r = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                i = {
                    rounded: 'SFRounded, ui-rounded, "SF Pro Rounded", '.concat(r),
                    system: r
                },
                o = {
                    large: {
                        actionButton: "9999px",
                        connectButton: "12px",
                        modal: "24px",
                        modalMobile: "28px"
                    },
                    medium: {
                        actionButton: "10px",
                        connectButton: "8px",
                        modal: "16px",
                        modalMobile: "18px"
                    },
                    none: {
                        actionButton: "0px",
                        connectButton: "0px",
                        modal: "0px",
                        modalMobile: "0px"
                    },
                    small: {
                        actionButton: "4px",
                        connectButton: "4px",
                        modal: "8px",
                        modalMobile: "8px"
                    }
                },
                s = {
                    large: {
                        modalOverlay: "blur(20px)"
                    },
                    none: {
                        modalOverlay: "blur(0px)"
                    },
                    small: {
                        modalOverlay: "blur(4px)"
                    }
                },
                a = e => {
                    let {
                        borderRadius: t = "large",
                        fontStack: n = "rounded",
                        overlayBlur: r = "none"
                    } = e;
                    return {
                        blurs: {
                            modalOverlay: s[r].modalOverlay
                        },
                        fonts: {
                            body: i[n]
                        },
                        radii: {
                            actionButton: o[t].actionButton,
                            connectButton: o[t].connectButton,
                            menuButton: o[t].connectButton,
                            modal: o[t].modal,
                            modalMobile: o[t].modalMobile
                        }
                    }
                }
        },
        79827: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return r
                }
            });
            var r = '{\n  "connect_wallet": {\n    "label": "Connect Wallet",\n    "wrong_network": {\n      "label": "Wrong network"\n    }\n  },\n\n  "intro": {\n    "title": "What is a Wallet?",\n    "description": "A wallet is used to send, receive, store, and display digital assets. It\'s also a new way to log in, without needing to create new accounts and passwords on every website.",\n    "digital_asset": {\n      "title": "A Home for your Digital Assets",\n      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."\n    },\n    "login": {\n      "title": "A New Way to Log In",\n      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."\n    },\n    "get": {\n      "label": "Get a Wallet"\n    },\n    "learn_more": {\n      "label": "Learn More"\n    }\n  },\n\n  "sign_in": {\n    "label": "Verify your account",\n    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",\n    "message": {\n      "send": "Sign message",\n      "preparing": "Preparing message...",\n      "cancel": "Cancel",\n      "preparing_error": "Error preparing message, please retry!"\n    },\n    "signature": {\n      "waiting": "Waiting for signature...",\n      "verifying": "Verifying signature...",\n      "signing_error": "Error signing message, please retry!",\n      "verifying_error": "Error verifying signature, please retry!",\n      "oops_error": "Oops, something went wrong!"\n    }\n  },\n\n  "connect": {\n    "label": "Connect",\n    "title": "Connect a Wallet",\n    "new_to_ethereum": {\n      "description": "New to Ethereum wallets?",\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "learn_more": {\n      "label": "Learn more"\n    },\n    "recent": "Recent",\n    "status": {\n      "opening": "Opening %{wallet}...",\n      "connecting": "Connecting",\n      "connect_mobile": "Continue in %{wallet}",\n      "not_installed": "%{wallet} is not installed",\n      "not_available": "%{wallet} is not available",\n      "confirm": "Confirm connection in the extension",\n      "confirm_mobile": "Accept connection request in the wallet"\n    },\n    "secondary_action": {\n      "get": {\n        "description": "Don\'t have %{wallet}?",\n        "label": "GET"\n      },\n      "install": {\n        "label": "INSTALL"\n      },\n      "retry": {\n        "label": "RETRY"\n      }\n    },\n    "walletconnect": {\n      "description": {\n        "full": "Need the official WalletConnect modal?",\n        "compact": "Need the WalletConnect modal?"\n      },\n      "open": {\n        "label": "OPEN"\n      }\n    }\n  },\n\n  "connect_scan": {\n    "title": "Scan with %{wallet}",\n    "fallback_title": "Scan with your phone"\n  },\n\n  "connector_group": {\n    "installed": "Installed",\n    "recommended": "Recommended",\n    "other": "Other",\n    "popular": "Popular",\n    "more": "More",\n    "others": "Others"\n  },\n\n  "get": {\n    "title": "Get a Wallet",\n    "action": {\n      "label": "GET"\n    },\n    "mobile": {\n      "description": "Mobile Wallet"\n    },\n    "extension": {\n      "description": "Browser Extension"\n    },\n    "mobile_and_extension": {\n      "description": "Mobile Wallet and Extension"\n    },\n    "mobile_and_desktop": {\n      "description": "Mobile and Desktop Wallet"\n    },\n    "looking_for": {\n      "title": "Not what you\'re looking for?",\n      "mobile": {\n        "description": "Select a wallet on the main screen to get started with a different wallet provider."\n      },\n      "desktop": {\n        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",\n        "wide_description": "Select a wallet on the left to get started with a different wallet provider."\n      }\n    }\n  },\n\n  "get_options": {\n    "title": "Get started with %{wallet}",\n    "short_title": "Get %{wallet}",\n    "mobile": {\n      "title": "%{wallet} for Mobile",\n      "description": "Use the mobile wallet to explore the world of Ethereum.",\n      "download": {\n        "label": "Get the app"\n      }\n    },\n    "extension": {\n      "title": "%{wallet} for %{browser}",\n      "description": "Access your wallet right from your favorite web browser.",\n      "download": {\n        "label": "Add to %{browser}"\n      }\n    },\n    "desktop": {\n      "title": "%{wallet} for %{platform}",\n      "description": "Access your wallet natively from your powerful desktop.",\n      "download": {\n        "label": "Add to %{platform}"\n      }\n    }\n  },\n\n  "get_mobile": {\n    "title": "Install %{wallet}",\n    "description": "Scan with your phone to download on iOS or Android",\n    "continue": {\n      "label": "Continue"\n    }\n  },\n\n  "get_instructions": {\n    "mobile": {\n      "connect": {\n        "label": "Connect"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "extension": {\n      "refresh": {\n        "label": "Refresh"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "desktop": {\n      "connect": {\n        "label": "Connect"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    }\n  },\n\n  "chains": {\n    "title": "Switch Networks",\n    "wrong_network": "Wrong network detected, switch or disconnect to continue.",\n    "confirm": "Confirm in Wallet",\n    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",\n    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",\n    "disconnect": "Disconnect",\n    "connected": "Connected"\n  },\n\n  "profile": {\n    "disconnect": {\n      "label": "Disconnect"\n    },\n    "copy_address": {\n      "label": "Copy Address",\n      "copied": "Copied!"\n    },\n    "explorer": {\n      "label": "View more on explorer"\n    },\n    "transactions": {\n      "description": "%{appName} transactions will appear here...",\n      "description_fallback": "Your transactions will appear here...",\n      "recent": {\n        "title": "Recent Transactions"\n      },\n      "clear": {\n        "label": "Clear All"\n      }\n    }\n  },\n\n  "wallet_connectors": {\n    "argent": {\n      "qr_code": {\n        "step1": {\n          "description": "Put Argent on your home screen for faster access to your wallet.",\n          "title": "Open the Argent app"\n        },\n        "step2": {\n          "description": "Create a wallet and username, or import an existing wallet.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "bifrost": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",\n          "title": "Open the Bifrost Wallet app"\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "bitget": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",\n          "title": "Open the Bitget Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Bitget Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "bitski": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",\n          "title": "Install the Bitski extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "bitverse": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Bitverse Wallet app",\n          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "bloom": {\n      "desktop": {\n        "step1": {\n          "title": "Open the Bloom Wallet app",\n          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",\n          "title": "Click on Connect"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Bloom Wallet app",\n          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",\n          "title": "Click on Connect"\n        }\n      }\n    },\n\n    "bybit": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",\n          "title": "Open the Bybit app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",\n          "title": "Install the Bybit Wallet extension"\n        },\n        "step2": {\n          "description": "Create a new wallet or import an existing one.",\n          "title": "Create or Import a wallet"\n        },\n        "step3": {\n          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "binance": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",\n          "title": "Open the Binance app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      }\n    },\n\n    "coin98": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",\n          "title": "Open the Coin98 Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",\n          "title": "Install the Coin98 Wallet extension"\n        },\n        "step2": {\n          "description": "Create a new wallet or import an existing one.",\n          "title": "Create or Import a wallet"\n        },\n        "step3": {\n          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "coinbase": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",\n          "title": "Open the Coinbase Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using the cloud backup feature.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Coinbase Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "compass": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Compass Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "core": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Core on your home screen for faster access to your wallet.",\n          "title": "Open the Core app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",\n          "title": "Install the Core extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "fox": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting FoxWallet on your home screen for quicker access.",\n          "title": "Open the FoxWallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "frontier": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",\n          "title": "Open the Frontier Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Frontier Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "im_token": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the imToken app",\n          "description": "Put imToken app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "iopay": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",\n          "title": "Open the ioPay app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      }\n    },\n\n    "kaikas": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",\n          "title": "Install the Kaikas extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kaikas app",\n          "description": "Put Kaikas app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kaia": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",\n          "title": "Install the Kaia extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kaia app",\n          "description": "Put Kaia app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kraken": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kraken Wallet app",\n          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kresus": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kresus Wallet app",\n          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "magicEden": {\n      "extension": {\n        "step1": {\n          "title": "Install the Magic Eden extension",\n          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "metamask": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the MetaMask app",\n          "description": "We recommend putting MetaMask on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the MetaMask extension",\n          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "nestwallet": {\n      "extension": {\n        "step1": {\n          "title": "Install the NestWallet extension",\n          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "okx": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the OKX Wallet app",\n          "description": "We recommend putting OKX Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the OKX Wallet extension",\n          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "omni": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Omni app",\n          "description": "Add Omni to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "1inch": {\n      "qr_code": {\n        "step1": {\n          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",\n          "title": "Open the 1inch Wallet app"\n        },\n        "step2": {\n          "description": "Create a wallet and username, or import an existing wallet.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "token_pocket": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the TokenPocket app",\n          "description": "We recommend putting TokenPocket on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the TokenPocket extension",\n          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "trust": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Trust Wallet app",\n          "description": "Put Trust Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the Trust Wallet extension",\n          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."\n        },\n        "step2": {\n          "title": "Create or Import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "uniswap": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Uniswap app",\n          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "zerion": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Zerion app",\n          "description": "We recommend putting Zerion on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the Zerion extension",\n          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "rainbow": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Rainbow app",\n          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "You can easily backup your wallet using our backup feature on your phone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "enkrypt": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Enkrypt Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "frame": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",\n          "title": "Install Frame & the companion extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "one_key": {\n      "extension": {\n        "step1": {\n          "title": "Install the OneKey Wallet extension",\n          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "phantom": {\n      "extension": {\n        "step1": {\n          "title": "Install the Phantom extension",\n          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "rabby": {\n      "extension": {\n        "step1": {\n          "title": "Install the Rabby extension",\n          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "ronin": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",\n          "title": "Open the Ronin Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Ronin Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "ramper": {\n      "extension": {\n        "step1": {\n          "title": "Install the Ramper extension",\n          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "safeheron": {\n      "extension": {\n        "step1": {\n          "title": "Install the Core extension",\n          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "taho": {\n      "extension": {\n        "step1": {\n          "title": "Install the Taho extension",\n          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "talisman": {\n      "extension": {\n        "step1": {\n          "title": "Install the Talisman extension",\n          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import an Ethereum Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "xdefi": {\n      "extension": {\n        "step1": {\n          "title": "Install the XDEFI Wallet extension",\n          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "zeal": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Zeal app",\n          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      },\n      "extension": {\n        "step1": {\n          "title": "Install the Zeal extension",\n          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "safepal": {\n      "extension": {\n        "step1": {\n          "title": "Install the SafePal Wallet extension",\n          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."\n        },\n        "step2": {\n          "title": "Create or Import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the SafePal Wallet app",\n          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "desig": {\n      "extension": {\n        "step1": {\n          "title": "Install the Desig extension",\n          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "subwallet": {\n      "extension": {\n        "step1": {\n          "title": "Install the SubWallet extension",\n          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the SubWallet app",\n          "description": "We recommend putting SubWallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "clv": {\n      "extension": {\n        "step1": {\n          "title": "Install the CLV Wallet extension",\n          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the CLV Wallet app",\n          "description": "We recommend putting CLV Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "okto": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Okto app",\n          "description": "Add Okto to your home screen for quick access"\n        },\n        "step2": {\n          "title": "Create an MPC Wallet",\n          "description": "Create an account and generate a wallet"\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "ledger": {\n      "desktop": {\n        "step1": {\n          "title": "Open the Ledger Live app",\n          "description": "We recommend putting Ledger Live on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Set up your Ledger",\n          "description": "Set up a new Ledger or connect to an existing one."\n        },\n        "step3": {\n          "title": "Connect",\n          "description": "A connection prompt will appear for you to connect your wallet."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Ledger Live app",\n          "description": "We recommend putting Ledger Live on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Set up your Ledger",\n          "description": "You can either sync with the desktop app or connect your Ledger."\n        },\n        "step3": {\n          "title": "Scan the code",\n          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    }\n  }\n}\n'
        },
        20488: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return a
                }
            });
            var r = n(75217),
                i = "#1A1B1F",
                o = {
                    blue: {
                        accentColor: "#3898FF",
                        accentColorForeground: "#FFF"
                    },
                    green: {
                        accentColor: "#4BD166",
                        accentColorForeground: i
                    },
                    orange: {
                        accentColor: "#FF983D",
                        accentColorForeground: i
                    },
                    pink: {
                        accentColor: "#FF7AB8",
                        accentColorForeground: i
                    },
                    purple: {
                        accentColor: "#7A70FF",
                        accentColorForeground: "#FFF"
                    },
                    red: {
                        accentColor: "#FF6257",
                        accentColorForeground: "#FFF"
                    }
                },
                s = o.blue,
                a = function() {
                    let {
                        accentColor: e = s.accentColor,
                        accentColorForeground: t = s.accentColorForeground,
                        ...n
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return { ...(0, r.w)(n),
                        colors: {
                            accentColor: e,
                            accentColorForeground: t,
                            actionButtonBorder: "rgba(255, 255, 255, 0.04)",
                            actionButtonBorderMobile: "rgba(255, 255, 255, 0.08)",
                            actionButtonSecondaryBackground: "rgba(255, 255, 255, 0.08)",
                            closeButton: "rgba(224, 232, 255, 0.6)",
                            closeButtonBackground: "rgba(255, 255, 255, 0.08)",
                            connectButtonBackground: i,
                            connectButtonBackgroundError: "#FF494A",
                            connectButtonInnerBackground: "linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))",
                            connectButtonText: "#FFF",
                            connectButtonTextError: "#FFF",
                            connectionIndicator: "#30E000",
                            downloadBottomCardBackground: "linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.2) 71.04%), #1A1B1F",
                            downloadTopCardBackground: "linear-gradient(126deg, rgba(120, 120, 120, 0.2) 9.49%, rgba(0, 0, 0, 0) 71.04%), #1A1B1F",
                            error: "#FF494A",
                            generalBorder: "rgba(255, 255, 255, 0.08)",
                            generalBorderDim: "rgba(255, 255, 255, 0.04)",
                            menuItemBackground: "rgba(224, 232, 255, 0.1)",
                            modalBackdrop: "rgba(0, 0, 0, 0.5)",
                            modalBackground: "#1A1B1F",
                            modalBorder: "rgba(255, 255, 255, 0.08)",
                            modalText: "#FFF",
                            modalTextDim: "rgba(224, 232, 255, 0.3)",
                            modalTextSecondary: "rgba(255, 255, 255, 0.6)",
                            profileAction: "rgba(224, 232, 255, 0.1)",
                            profileActionHover: "rgba(224, 232, 255, 0.2)",
                            profileForeground: "rgba(224, 232, 255, 0.05)",
                            selectedOptionBorder: "rgba(224, 232, 255, 0.1)",
                            standby: "#FFD641"
                        },
                        shadows: {
                            connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                            dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
                            profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
                            selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
                            selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.24)",
                            walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)"
                        }
                    }
                };
            a.accentColors = o
        },
        24978: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return f
                }
            });
            var r = n(86417),
                i = n(50571),
                o = n(85770),
                s = n(99112),
                a = n(96329),
                c = n(95046);

            function u(e) {
                let t, l, d, f, h, p, m, g;
                let y = e.isNewChainsStale ? ? !0;
                return (0, r.K)(r => ({
                    id: "walletConnect",
                    name: "WalletConnect",
                    type: u.type,
                    async setup() {
                        let e = await this.getProvider().catch(() => null);
                        e && (h || (h = this.onConnect.bind(this), e.on("connect", h)), m || (m = this.onSessionDelete.bind(this), e.on("session_delete", m)))
                    },
                    async connect({
                        chainId: e,
                        ...t
                    } = {}) {
                        try {
                            let n = await this.getProvider();
                            if (!n) throw new i.M;
                            p || (p = this.onDisplayUri, n.on("display_uri", p));
                            let o = e;
                            if (!o) {
                                let e = await r.storage ? .getItem("state") ? ? {};
                                o = r.chains.some(t => t.id === e.chainId) ? e.chainId : r.chains[0] ? .id
                            }
                            if (!o) throw Error("No chains found on connector.");
                            let a = await this.isChainsStale();
                            if (n.session && a && await n.disconnect(), !n.session || a) {
                                let e = r.chains.filter(e => e.id !== o).map(e => e.id);
                                await n.connect({
                                    optionalChains: [o, ...e],
                                    ..."pairingTopic" in t ? {
                                        pairingTopic: t.pairingTopic
                                    } : {}
                                }), this.setRequestedChainsIds(r.chains.map(e => e.id))
                            }
                            let c = (await n.enable()).map(e => (0, s.K)(e)),
                                u = await this.getChainId();
                            return p && (n.removeListener("display_uri", p), p = void 0), h && (n.removeListener("connect", h), h = void 0), d || (d = this.onAccountsChanged.bind(this), n.on("accountsChanged", d)), f || (f = this.onChainChanged.bind(this), n.on("chainChanged", f)), g || (g = this.onDisconnect.bind(this), n.on("disconnect", g)), m || (m = this.onSessionDelete.bind(this), n.on("session_delete", m)), {
                                accounts: c,
                                chainId: u
                            }
                        } catch (e) {
                            if (/(user rejected|connection request reset)/i.test(e ? .message)) throw new a.ab(e);
                            throw e
                        }
                    },
                    async disconnect() {
                        let e = await this.getProvider();
                        try {
                            await e ? .disconnect()
                        } catch (e) {
                            if (!/No matching key/i.test(e.message)) throw e
                        } finally {
                            f && (e ? .removeListener("chainChanged", f), f = void 0), g && (e ? .removeListener("disconnect", g), g = void 0), h || (h = this.onConnect.bind(this), e ? .on("connect", h)), d && (e ? .removeListener("accountsChanged", d), d = void 0), m && (e ? .removeListener("session_delete", m), m = void 0), this.setRequestedChainsIds([])
                        }
                    },
                    async getAccounts() {
                        return (await this.getProvider()).accounts.map(e => (0, s.K)(e))
                    },
                    async getProvider({
                        chainId: i
                    } = {}) {
                        async function o() {
                            let t = r.chains.map(e => e.id);
                            if (!t.length) return;
                            let {
                                EthereumProvider: i
                            } = await Promise.all([n.e(6764), n.e(9109), n.e(1997), n.e(2739)]).then(n.bind(n, 37036));
                            return await i.init({ ...e,
                                disableProviderPing: !0,
                                optionalChains: t,
                                projectId: e.projectId,
                                rpcMap: Object.fromEntries(r.chains.map(e => {
                                    let [t] = function(e) {
                                        let {
                                            chain: t
                                        } = e, n = t.rpcUrls.default.http[0];
                                        if (!e.transports) return [n];
                                        let r = e.transports ? .[t.id] ? .({
                                            chain: t
                                        });
                                        return (r ? .value ? .transports || [r]).map(({
                                            value: e
                                        }) => e ? .url || n)
                                    }({
                                        chain: e,
                                        transports: r.transports
                                    });
                                    return [e.id, t]
                                })),
                                showQrModal: e.showQrModal ? ? !0
                            })
                        }
                        return t || (l || (l = o()), t = await l, t ? .events.setMaxListeners(Number.POSITIVE_INFINITY)), i && await this.switchChain ? .({
                            chainId: i
                        }), t
                    },
                    async getChainId() {
                        return (await this.getProvider()).chainId
                    },
                    async isAuthorized() {
                        try {
                            let [e, t] = await Promise.all([this.getAccounts(), this.getProvider()]);
                            if (!e.length) return !1;
                            if (await this.isChainsStale() && t.session) return await t.disconnect().catch(() => {}), !1;
                            return !0
                        } catch {
                            return !1
                        }
                    },
                    async switchChain({
                        addEthereumChainParameter: e,
                        chainId: t
                    }) {
                        let n = await this.getProvider();
                        if (!n) throw new i.M;
                        let s = r.chains.find(e => e.id === t);
                        if (!s) throw new a.x3(new o.X4);
                        try {
                            await Promise.all([new Promise(e => {
                                let n = ({
                                    chainId: i
                                }) => {
                                    i === t && (r.emitter.off("change", n), e())
                                };
                                r.emitter.on("change", n)
                            }), n.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: (0, c.eC)(t)
                                }]
                            })]);
                            let e = await this.getRequestedChainsIds();
                            return this.setRequestedChainsIds([...e, t]), s
                        } catch (r) {
                            if (/(user rejected)/i.test(r.message)) throw new a.ab(r);
                            try {
                                let r, i;
                                r = e ? .blockExplorerUrls ? e.blockExplorerUrls : s.blockExplorers ? .default.url ? [s.blockExplorers ? .default.url] : [], i = e ? .rpcUrls ? .length ? e.rpcUrls : [...s.rpcUrls.default.http];
                                let o = {
                                    blockExplorerUrls: r,
                                    chainId: (0, c.eC)(t),
                                    chainName: e ? .chainName ? ? s.name,
                                    iconUrls: e ? .iconUrls,
                                    nativeCurrency: e ? .nativeCurrency ? ? s.nativeCurrency,
                                    rpcUrls: i
                                };
                                await n.request({
                                    method: "wallet_addEthereumChain",
                                    params: [o]
                                });
                                let a = await this.getRequestedChainsIds();
                                return this.setRequestedChainsIds([...a, t]), s
                            } catch (e) {
                                throw new a.ab(e)
                            }
                        }
                    },
                    onAccountsChanged(e) {
                        0 === e.length ? this.onDisconnect() : r.emitter.emit("change", {
                            accounts: e.map(e => (0, s.K)(e))
                        })
                    },
                    onChainChanged(e) {
                        let t = Number(e);
                        r.emitter.emit("change", {
                            chainId: t
                        })
                    },
                    async onConnect(e) {
                        let t = Number(e.chainId),
                            n = await this.getAccounts();
                        r.emitter.emit("connect", {
                            accounts: n,
                            chainId: t
                        })
                    },
                    async onDisconnect(e) {
                        this.setRequestedChainsIds([]), r.emitter.emit("disconnect");
                        let t = await this.getProvider();
                        d && (t.removeListener("accountsChanged", d), d = void 0), f && (t.removeListener("chainChanged", f), f = void 0), g && (t.removeListener("disconnect", g), g = void 0), m && (t.removeListener("session_delete", m), m = void 0), h || (h = this.onConnect.bind(this), t.on("connect", h))
                    },
                    onDisplayUri(e) {
                        r.emitter.emit("message", {
                            type: "display_uri",
                            data: e
                        })
                    },
                    onSessionDelete() {
                        this.onDisconnect()
                    },
                    getNamespaceChainsIds: () => t ? t.session ? .namespaces.eip155 ? .accounts ? .map(e => Number.parseInt(e.split(":")[1] || "")) ? ? [] : [],
                    async getRequestedChainsIds() {
                        return await r.storage ? .getItem(this.requestedChainsStorageKey) ? ? []
                    },
                    async isChainsStale() {
                        if (!y) return !1;
                        let e = r.chains.map(e => e.id),
                            t = this.getNamespaceChainsIds();
                        if (t.length && !t.some(t => e.includes(t))) return !1;
                        let n = await this.getRequestedChainsIds();
                        return !e.every(e => n.includes(e))
                    },
                    async setRequestedChainsIds(e) {
                        await r.storage ? .setItem(this.requestedChainsStorageKey, e)
                    },
                    get requestedChainsStorageKey() {
                        return `${this.id}.requestedChains`
                    }
                }))
            }
            u.type = "walletConnect";
            var l = new Map,
                d = e => {
                    let {
                        projectId: t,
                        walletConnectParameters: n,
                        rkDetailsShowQrModal: r
                    } = e, i = { ...n || {},
                        projectId: t,
                        showQrModal: !1
                    };
                    r && (i = { ...i,
                        showQrModal: !0
                    });
                    let o = JSON.stringify(i),
                        s = l.get(o);
                    if (s) return s;
                    let a = u(i);
                    return l.set(o, a), a
                };

            function f(e) {
                let {
                    projectId: t,
                    walletConnectParameters: n
                } = e;
                if (!t || "" === t) throw Error("No projectId found. Every dApp must now provide a WalletConnect Cloud projectId to enable WalletConnect v2 https://www.rainbowkit.com/docs/installation#configure");
                return "YOUR_PROJECT_ID" === t && (t = "21fef48091f12692cad574a6f7753643"), e => (function(e) {
                    let {
                        projectId: t,
                        walletDetails: n,
                        walletConnectParameters: i
                    } = e;
                    return (0, r.K)(e => ({ ...d({
                            projectId: t,
                            walletConnectParameters: i,
                            rkDetailsShowQrModal: n.rkDetails.showQrModal
                        })(e),
                        ...n
                    }))
                })({
                    projectId: t,
                    walletDetails: e,
                    walletConnectParameters: n
                })
            }
        },
        76624: function(e, t, n) {
            "use strict";
            n.d(t, {
                p: function() {
                    return s
                }
            });
            var r = n(47575),
                i = n(92839),
                o = n(24978),
                s = e => {
                    let t, {
                            projectId: s,
                            walletConnectParameters: a
                        } = e,
                        c = (0, i.tq)() ? (0, r.B)({
                            flag: "isTrust"
                        }) : (0, r.B)({
                            flag: "isTrustWallet"
                        }),
                        u = !c;
                    return u && (t = {
                        getUri: e => e,
                        instructions: {
                            learnMoreUrl: "https://trustwallet.com/",
                            steps: [{
                                description: "wallet_connectors.trust.qr_code.step1.description",
                                step: "install",
                                title: "wallet_connectors.trust.qr_code.step1.title"
                            }, {
                                description: "wallet_connectors.trust.qr_code.step2.description",
                                step: "create",
                                title: "wallet_connectors.trust.qr_code.step2.title"
                            }, {
                                description: "wallet_connectors.trust.qr_code.step3.description",
                                step: "scan",
                                title: "wallet_connectors.trust.qr_code.step3.title"
                            }]
                        }
                    }), {
                        id: "trust",
                        name: "Trust Wallet",
                        rdns: "com.trustwallet.app",
                        iconUrl: async () => (await n.e(9738).then(n.bind(n, 99738))).default,
                        installed: c || void 0,
                        iconAccent: "#3375BB",
                        iconBackground: "#fff",
                        downloadUrls: {
                            android: "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",
                            ios: "https://apps.apple.com/us/app/trust-crypto-bitcoin-wallet/id1288339409",
                            mobile: "https://trustwallet.com/download",
                            qrCode: "https://trustwallet.com/download",
                            chrome: "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph",
                            browserExtension: "https://trustwallet.com/browser-extension"
                        },
                        mobile: {
                            getUri: u ? e => "trust://wc?uri=".concat(encodeURIComponent(e)) : void 0
                        },
                        qrCode: t,
                        extension: {
                            instructions: {
                                learnMoreUrl: "https://trustwallet.com/browser-extension",
                                steps: [{
                                    description: "wallet_connectors.trust.extension.step1.description",
                                    step: "install",
                                    title: "wallet_connectors.trust.extension.step1.title"
                                }, {
                                    description: "wallet_connectors.trust.extension.step2.description",
                                    step: "create",
                                    title: "wallet_connectors.trust.extension.step2.title"
                                }, {
                                    description: "wallet_connectors.trust.extension.step3.description",
                                    step: "refresh",
                                    title: "wallet_connectors.trust.extension.step3.title"
                                }]
                            }
                        },
                        createConnector: u ? (0, o.d)({
                            projectId: s,
                            walletConnectParameters: a
                        }) : (0, i.tq)() ? (0, r.K)({
                            flag: "isTrust"
                        }) : (0, r.K)({
                            flag: "isTrustWallet"
                        })
                    }
                }
        },
        47575: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return a
                },
                K: function() {
                    return c
                }
            });
            var r = n(86417),
                i = n(40859);

            function o(e) {
                let t = "undefined" != typeof window ? window : void 0;
                if (void 0 === t || void 0 === t.ethereum) return;
                let n = t.ethereum.providers;
                return n ? n.find(t => t[e]) : t.ethereum[e] ? t.ethereum : void 0
            }

            function s(e) {
                let t = (e, n) => {
                    let [r, ...i] = n.split("."), o = e[r];
                    if (o) return 0 === i.length ? o : t(o, i.join("."))
                };
                if ("undefined" != typeof window) return t(window, e)
            }

            function a(e) {
                let {
                    flag: t,
                    namespace: n
                } = e;
                return !!n && void 0 !== s(n) || !!t && void 0 !== o(t)
            }

            function c(e) {
                var t;
                let {
                    flag: n,
                    namespace: a,
                    target: c
                } = e;
                return t = c || function(e) {
                    var t;
                    let {
                        flag: n,
                        namespace: r
                    } = e, i = "undefined" != typeof window ? window : void 0;
                    if (void 0 === i) return;
                    if (r) {
                        let e = s(r);
                        if (e) return e
                    }
                    let a = null === (t = i.ethereum) || void 0 === t ? void 0 : t.providers;
                    if (n) {
                        let e = o(n);
                        if (e) return e
                    }
                    return void 0 !== a && a.length > 0 ? a[0] : i.ethereum
                }({
                    flag: n,
                    namespace: a
                }), e => {
                    let n = t ? {
                        target: () => ({
                            id: e.rkDetails.id,
                            name: e.rkDetails.name,
                            provider: t
                        })
                    } : {};
                    return (0, r.K)(t => ({ ...(0, i.L)(n)(t),
                        ...e
                    }))
                }
            }
        },
        16537: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return i
                }
            });
            var r = n(24978),
                i = e => {
                    let {
                        projectId: t,
                        options: i
                    } = e;
                    return {
                        id: "walletConnect",
                        name: "WalletConnect",
                        installed: void 0,
                        iconUrl: async () => (await n.e(4283).then(n.bind(n, 24283))).default,
                        iconBackground: "#3b99fc",
                        qrCode: {
                            getUri: e => e
                        },
                        createConnector: (0, r.d)({
                            projectId: t,
                            walletConnectParameters: i
                        })
                    }
                }
        },
        59748: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return l
                }
            });
            var r = n(92839),
                i = n(86417),
                o = n(85770),
                s = n(99112),
                a = n(96329),
                c = n(95046);

            function u(e = {}) {
                let t, r, l, d, f, h, p, m, g;
                return "3" === e.version || e.headlessMode ? (0, i.K)(i => ({
                    id: "coinbaseWalletSDK",
                    name: "Coinbase Wallet",
                    supportsSimulation: !0,
                    type: u.type,
                    async connect({
                        chainId: e
                    } = {}) {
                        try {
                            let t = await this.getProvider(),
                                n = (await t.request({
                                    method: "eth_requestAccounts"
                                })).map(e => (0, s.K)(e));
                            l || (l = this.onAccountsChanged.bind(this), t.on("accountsChanged", l)), d || (d = this.onChainChanged.bind(this), t.on("chainChanged", d)), f || (f = this.onDisconnect.bind(this), t.on("disconnect", f));
                            let r = await this.getChainId();
                            if (e && r !== e) {
                                let t = await this.switchChain({
                                    chainId: e
                                }).catch(e => {
                                    if (e.code === a.ab.code) throw e;
                                    return {
                                        id: r
                                    }
                                });
                                r = t ? .id ? ? r
                            }
                            return {
                                accounts: n,
                                chainId: r
                            }
                        } catch (e) {
                            if (/(user closed modal|accounts received is empty|user denied account)/i.test(e.message)) throw new a.ab(e);
                            throw e
                        }
                    },
                    async disconnect() {
                        let e = await this.getProvider();
                        l && (e.removeListener("accountsChanged", l), l = void 0), d && (e.removeListener("chainChanged", d), d = void 0), f && (e.removeListener("disconnect", f), f = void 0), e.disconnect(), e.close()
                    },
                    async getAccounts() {
                        let e = await this.getProvider();
                        return (await e.request({
                            method: "eth_accounts"
                        })).map(e => (0, s.K)(e))
                    },
                    async getChainId() {
                        let e = await this.getProvider();
                        return Number(await e.request({
                            method: "eth_chainId"
                        }))
                    },
                    async getProvider() {
                        if (!r) {
                            t = new(await (async () => {
                                let {
                                    default: e
                                } = await Promise.all([n.e(9109), n.e(4722), n.e(9381), n.e(2753)]).then(n.t.bind(n, 9381, 19));
                                return "function" != typeof e && "function" == typeof e.default ? e.default : e
                            })())({ ...e,
                                reloadOnDisconnect: !1
                            });
                            let o = t.walletExtension ? .getChainId(),
                                s = i.chains.find(t => e.chainId ? t.id === e.chainId : t.id === o) || i.chains[0],
                                a = e.chainId || s ? .id,
                                c = e.jsonRpcUrl || s ? .rpcUrls.default.http[0];
                            r = t.makeWeb3Provider(c, a)
                        }
                        return r
                    },
                    async isAuthorized() {
                        try {
                            return !!(await this.getAccounts()).length
                        } catch {
                            return !1
                        }
                    },
                    async switchChain({
                        addEthereumChainParameter: e,
                        chainId: t
                    }) {
                        let n = i.chains.find(e => e.id === t);
                        if (!n) throw new a.x3(new o.X4);
                        let r = await this.getProvider();
                        try {
                            return await r.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: (0, c.eC)(n.id)
                                }]
                            }), n
                        } catch (i) {
                            if (4902 === i.code) try {
                                let i, o;
                                i = e ? .blockExplorerUrls ? e.blockExplorerUrls : n.blockExplorers ? .default.url ? [n.blockExplorers ? .default.url] : [], o = e ? .rpcUrls ? .length ? e.rpcUrls : [n.rpcUrls.default ? .http[0] ? ? ""];
                                let s = {
                                    blockExplorerUrls: i,
                                    chainId: (0, c.eC)(t),
                                    chainName: e ? .chainName ? ? n.name,
                                    iconUrls: e ? .iconUrls,
                                    nativeCurrency: e ? .nativeCurrency ? ? n.nativeCurrency,
                                    rpcUrls: o
                                };
                                return await r.request({
                                    method: "wallet_addEthereumChain",
                                    params: [s]
                                }), n
                            } catch (e) {
                                throw new a.ab(e)
                            }
                            throw new a.x3(i)
                        }
                    },
                    onAccountsChanged(e) {
                        0 === e.length ? this.onDisconnect() : i.emitter.emit("change", {
                            accounts: e.map(e => (0, s.K)(e))
                        })
                    },
                    onChainChanged(e) {
                        let t = Number(e);
                        i.emitter.emit("change", {
                            chainId: t
                        })
                    },
                    async onDisconnect(e) {
                        i.emitter.emit("disconnect");
                        let t = await this.getProvider();
                        l && (t.removeListener("accountsChanged", l), l = void 0), d && (t.removeListener("chainChanged", d), d = void 0), f && (t.removeListener("disconnect", f), f = void 0)
                    }
                })) : (0, i.K)(t => ({
                    id: "coinbaseWalletSDK",
                    name: "Coinbase Wallet",
                    supportsSimulation: !0,
                    type: u.type,
                    async connect({
                        chainId: e
                    } = {}) {
                        try {
                            let t = await this.getProvider(),
                                n = (await t.request({
                                    method: "eth_requestAccounts"
                                })).map(e => (0, s.K)(e));
                            p || (p = this.onAccountsChanged.bind(this), t.on("accountsChanged", p)), m || (m = this.onChainChanged.bind(this), t.on("chainChanged", m)), g || (g = this.onDisconnect.bind(this), t.on("disconnect", g));
                            let r = await this.getChainId();
                            if (e && r !== e) {
                                let t = await this.switchChain({
                                    chainId: e
                                }).catch(e => {
                                    if (e.code === a.ab.code) throw e;
                                    return {
                                        id: r
                                    }
                                });
                                r = t ? .id ? ? r
                            }
                            return {
                                accounts: n,
                                chainId: r
                            }
                        } catch (e) {
                            if (/(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(e.message)) throw new a.ab(e);
                            throw e
                        }
                    },
                    async disconnect() {
                        let e = await this.getProvider();
                        p && (e.removeListener("accountsChanged", p), p = void 0), m && (e.removeListener("chainChanged", m), m = void 0), g && (e.removeListener("disconnect", g), g = void 0), e.disconnect(), e.close ? .()
                    },
                    async getAccounts() {
                        let e = await this.getProvider();
                        return (await e.request({
                            method: "eth_accounts"
                        })).map(e => (0, s.K)(e))
                    },
                    async getChainId() {
                        let e = await this.getProvider();
                        return Number(await e.request({
                            method: "eth_chainId"
                        }))
                    },
                    getProvider: async () => (h || (h = new(await (async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e(9109), n.e(4722), n.e(6080), n.e(4726)]).then(n.t.bind(n, 86080, 19));
                        return "function" != typeof e && "function" == typeof e.default ? e.default : e
                    })())({ ...e,
                        appChainIds: t.chains.map(e => e.id)
                    }).makeWeb3Provider({ ...e,
                        options: e.preference ? ? "all"
                    })), h),
                    async isAuthorized() {
                        try {
                            return !!(await this.getAccounts()).length
                        } catch {
                            return !1
                        }
                    },
                    async switchChain({
                        addEthereumChainParameter: e,
                        chainId: n
                    }) {
                        let r = t.chains.find(e => e.id === n);
                        if (!r) throw new a.x3(new o.X4);
                        let i = await this.getProvider();
                        try {
                            return await i.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: (0, c.eC)(r.id)
                                }]
                            }), r
                        } catch (t) {
                            if (4902 === t.code) try {
                                let t, o;
                                t = e ? .blockExplorerUrls ? e.blockExplorerUrls : r.blockExplorers ? .default.url ? [r.blockExplorers ? .default.url] : [], o = e ? .rpcUrls ? .length ? e.rpcUrls : [r.rpcUrls.default ? .http[0] ? ? ""];
                                let s = {
                                    blockExplorerUrls: t,
                                    chainId: (0, c.eC)(n),
                                    chainName: e ? .chainName ? ? r.name,
                                    iconUrls: e ? .iconUrls,
                                    nativeCurrency: e ? .nativeCurrency ? ? r.nativeCurrency,
                                    rpcUrls: o
                                };
                                return await i.request({
                                    method: "wallet_addEthereumChain",
                                    params: [s]
                                }), r
                            } catch (e) {
                                throw new a.ab(e)
                            }
                            throw new a.x3(t)
                        }
                    },
                    onAccountsChanged(e) {
                        0 === e.length ? this.onDisconnect() : t.emitter.emit("change", {
                            accounts: e.map(e => (0, s.K)(e))
                        })
                    },
                    onChainChanged(e) {
                        let n = Number(e);
                        t.emitter.emit("change", {
                            chainId: n
                        })
                    },
                    async onDisconnect(e) {
                        t.emitter.emit("disconnect");
                        let n = await this.getProvider();
                        p && (n.removeListener("accountsChanged", p), p = void 0), m && (n.removeListener("chainChanged", m), m = void 0), g && (n.removeListener("disconnect", g), g = void 0)
                    }
                }))
            }
            u.type = "coinbaseWallet";
            var l = e => {
                let {
                    appName: t,
                    appIcon: o
                } = e;
                return {
                    id: "coinbase",
                    name: "Coinbase Wallet",
                    shortName: "Coinbase",
                    rdns: "com.coinbase.wallet",
                    iconUrl: async () => (await n.e(8481).then(n.bind(n, 18481))).default,
                    iconAccent: "#2c5ff6",
                    iconBackground: "#2c5ff6",
                    installed: !0,
                    downloadUrls: {
                        android: "https://play.google.com/store/apps/details?id=org.toshi",
                        ios: "https://apps.apple.com/us/app/coinbase-wallet-store-crypto/id1278383455",
                        mobile: "https://coinbase.com/wallet/downloads",
                        qrCode: "https://coinbase-wallet.onelink.me/q5Sx/fdb9b250",
                        chrome: "https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad",
                        browserExtension: "https://coinbase.com/wallet"
                    },
                    ...(0, r.gn)() ? {} : {
                        qrCode: {
                            getUri: e => e,
                            instructions: {
                                learnMoreUrl: "https://coinbase.com/wallet/articles/getting-started-mobile",
                                steps: [{
                                    description: "wallet_connectors.coinbase.qr_code.step1.description",
                                    step: "install",
                                    title: "wallet_connectors.coinbase.qr_code.step1.title"
                                }, {
                                    description: "wallet_connectors.coinbase.qr_code.step2.description",
                                    step: "create",
                                    title: "wallet_connectors.coinbase.qr_code.step2.title"
                                }, {
                                    description: "wallet_connectors.coinbase.qr_code.step3.description",
                                    step: "scan",
                                    title: "wallet_connectors.coinbase.qr_code.step3.title"
                                }]
                            }
                        },
                        extension: {
                            instructions: {
                                learnMoreUrl: "https://coinbase.com/wallet/articles/getting-started-extension",
                                steps: [{
                                    description: "wallet_connectors.coinbase.extension.step1.description",
                                    step: "install",
                                    title: "wallet_connectors.coinbase.extension.step1.title"
                                }, {
                                    description: "wallet_connectors.coinbase.extension.step2.description",
                                    step: "create",
                                    title: "wallet_connectors.coinbase.extension.step2.title"
                                }, {
                                    description: "wallet_connectors.coinbase.extension.step3.description",
                                    step: "refresh",
                                    title: "wallet_connectors.coinbase.extension.step3.title"
                                }]
                            }
                        }
                    },
                    createConnector: e => {
                        let n = u({
                            appName: t,
                            appLogoUrl: o,
                            preference: l.preference
                        });
                        return (0, i.K)(t => ({ ...n(t),
                            ...e
                        }))
                    }
                }
            }
        },
        92839: function(e, t, n) {
            "use strict";

            function r() {
                return "undefined" != typeof navigator && /android/i.test(navigator.userAgent)
            }

            function i() {
                return "undefined" != typeof navigator && /iPhone|iPod/.test(navigator.userAgent) || "undefined" != typeof navigator && (/iPad/.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1)
            }

            function o() {
                return r() || i()
            }
            n.d(t, {
                Dt: function() {
                    return r
                },
                gn: function() {
                    return i
                },
                tq: function() {
                    return o
                }
            })
        },
        34105: function(e, t, n) {
            "use strict";
            n.d(t, {
                P: function() {
                    return a
                }
            });
            var r = n(47575),
                i = n(92839),
                o = n(24978);

            function s(e) {
                return !!(null == e ? void 0 : e.isMetaMask) && (!e.isBraveWallet || !!e._events || !!e._state) && !e.isApexWallet && !e.isAvalanche && !e.isBackpack && !e.isBifrost && !e.isBitKeep && !e.isBitski && !e.isBlockWallet && !e.isCoinbaseWallet && !e.isDawn && !e.isEnkrypt && !e.isExodus && !e.isFrame && !e.isFrontier && !e.isGamestop && !e.isHyperPay && !e.isImToken && !e.isKuCoinWallet && !e.isMathWallet && !e.isNestWallet && !e.isOkxWallet && !e.isOKExWallet && !e.isOneInchIOSWallet && !e.isOneInchAndroidWallet && !e.isOpera && !e.isPhantom && !e.isPortal && !e.isRabby && !e.isRainbow && !e.isStatus && !e.isTalisman && !e.isTally && !e.isTokenPocket && !e.isTokenary && !e.isTrust && !e.isTrustWallet && !e.isXDEFI && !e.isZeal && !e.isZerion && !e.__seif
            }
            var a = e => {
                var t, a, c;
                let {
                    projectId: u,
                    walletConnectParameters: l
                } = e, d = (0, r.B)({
                    flag: "isMetaMask"
                }), f = !d, h = e => (0, i.Dt)() ? e : (0, i.gn)() ? "metamask://wc?uri=".concat(encodeURIComponent(e)) : "https://metamask.app.link/wc?uri=".concat(encodeURIComponent(e));
                return {
                    id: "metaMask",
                    name: "MetaMask",
                    rdns: "io.metamask",
                    iconUrl: async () => (await n.e(9026).then(n.bind(n, 29026))).default,
                    iconAccent: "#f6851a",
                    iconBackground: "#fff",
                    installed: f ? void 0 : d,
                    downloadUrls: {
                        android: "https://play.google.com/store/apps/details?id=io.metamask",
                        ios: "https://apps.apple.com/us/app/metamask/id1438144202",
                        mobile: "https://metamask.io/download",
                        qrCode: "https://metamask.io/download",
                        chrome: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
                        edge: "https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm",
                        firefox: "https://addons.mozilla.org/firefox/addon/ether-metamask",
                        opera: "https://addons.opera.com/extensions/details/metamask-10",
                        browserExtension: "https://metamask.io/download"
                    },
                    mobile: {
                        getUri: f ? h : void 0
                    },
                    qrCode: f ? {
                        getUri: h,
                        instructions: {
                            learnMoreUrl: "https://metamask.io/faqs/",
                            steps: [{
                                description: "wallet_connectors.metamask.qr_code.step1.description",
                                step: "install",
                                title: "wallet_connectors.metamask.qr_code.step1.title"
                            }, {
                                description: "wallet_connectors.metamask.qr_code.step2.description",
                                step: "create",
                                title: "wallet_connectors.metamask.qr_code.step2.title"
                            }, {
                                description: "wallet_connectors.metamask.qr_code.step3.description",
                                step: "refresh",
                                title: "wallet_connectors.metamask.qr_code.step3.title"
                            }]
                        }
                    } : void 0,
                    extension: {
                        instructions: {
                            learnMoreUrl: "https://metamask.io/faqs/",
                            steps: [{
                                description: "wallet_connectors.metamask.extension.step1.description",
                                step: "install",
                                title: "wallet_connectors.metamask.extension.step1.title"
                            }, {
                                description: "wallet_connectors.metamask.extension.step2.description",
                                step: "create",
                                title: "wallet_connectors.metamask.extension.step2.title"
                            }, {
                                description: "wallet_connectors.metamask.extension.step3.description",
                                step: "refresh",
                                title: "wallet_connectors.metamask.extension.step3.title"
                            }]
                        }
                    },
                    createConnector: f ? (0, o.d)({
                        projectId: u,
                        walletConnectParameters: l
                    }) : (0, r.K)({
                        target: "undefined" != typeof window ? null !== (c = null === (a = window.ethereum) || void 0 === a ? void 0 : null === (t = a.providers) || void 0 === t ? void 0 : t.find(s)) && void 0 !== c ? c : window.ethereum : void 0
                    })
                }
            }
        },
        34939: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return o
                }
            });
            var r = n(49010),
                i = n(56298),
                o = new class extends r.l {#
                    e;#
                    t;#
                    n;
                    constructor() {
                        super(), this.#n = e => {
                            if (!i.sk && window.addEventListener) {
                                let t = () => e();
                                return window.addEventListener("visibilitychange", t, !1), () => {
                                    window.removeEventListener("visibilitychange", t)
                                }
                            }
                        }
                    }
                    onSubscribe() {
                        this.#t || this.setEventListener(this.#n)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || (this.#t ? .(), this.#t = void 0)
                    }
                    setEventListener(e) {
                        this.#n = e, this.#t ? .(), this.#t = e(e => {
                            "boolean" == typeof e ? this.setFocused(e) : this.onFocus()
                        })
                    }
                    setFocused(e) {
                        this.#e !== e && (this.#e = e, this.onFocus())
                    }
                    onFocus() {
                        let e = this.isFocused();
                        this.listeners.forEach(t => {
                            t(e)
                        })
                    }
                    isFocused() {
                        return "boolean" == typeof this.#e ? this.#e : globalThis.document ? .visibilityState !== "hidden"
                    }
                }
        },
        92812: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return a
                },
                m: function() {
                    return s
                }
            });
            var r = n(69948),
                i = n(43494),
                o = n(30924),
                s = class extends i.F {#
                    r;#
                    i;#
                    o;
                    constructor(e) {
                        super(), this.mutationId = e.mutationId, this.#i = e.mutationCache, this.#r = [], this.state = e.state || a(), this.setOptions(e.options), this.scheduleGc()
                    }
                    setOptions(e) {
                        this.options = e, this.updateGcTime(this.options.gcTime)
                    }
                    get meta() {
                        return this.options.meta
                    }
                    addObserver(e) {
                        this.#r.includes(e) || (this.#r.push(e), this.clearGcTimeout(), this.#i.notify({
                            type: "observerAdded",
                            mutation: this,
                            observer: e
                        }))
                    }
                    removeObserver(e) {
                        this.#r = this.#r.filter(t => t !== e), this.scheduleGc(), this.#i.notify({
                            type: "observerRemoved",
                            mutation: this,
                            observer: e
                        })
                    }
                    optionalRemove() {
                        this.#r.length || ("pending" === this.state.status ? this.scheduleGc() : this.#i.remove(this))
                    }
                    continue () {
                        return this.#o ? .continue() ? ? this.execute(this.state.variables)
                    }
                    async execute(e) {
                        this.#o = (0, o.Mz)({
                            fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(Error("No mutationFn found")),
                            onFail: (e, t) => {
                                this.#s({
                                    type: "failed",
                                    failureCount: e,
                                    error: t
                                })
                            },
                            onPause: () => {
                                this.#s({
                                    type: "pause"
                                })
                            },
                            onContinue: () => {
                                this.#s({
                                    type: "continue"
                                })
                            },
                            retry: this.options.retry ? ? 0,
                            retryDelay: this.options.retryDelay,
                            networkMode: this.options.networkMode,
                            canRun: () => this.#i.canRun(this)
                        });
                        let t = "pending" === this.state.status,
                            n = !this.#o.canStart();
                        try {
                            if (!t) {
                                this.#s({
                                    type: "pending",
                                    variables: e,
                                    isPaused: n
                                }), await this.#i.config.onMutate ? .(e, this);
                                let t = await this.options.onMutate ? .(e);
                                t !== this.state.context && this.#s({
                                    type: "pending",
                                    context: t,
                                    variables: e,
                                    isPaused: n
                                })
                            }
                            let r = await this.#o.start();
                            return await this.#i.config.onSuccess ? .(r, e, this.state.context, this), await this.options.onSuccess ? .(r, e, this.state.context), await this.#i.config.onSettled ? .(r, null, this.state.variables, this.state.context, this), await this.options.onSettled ? .(r, null, e, this.state.context), this.#s({
                                type: "success",
                                data: r
                            }), r
                        } catch (t) {
                            try {
                                throw await this.#i.config.onError ? .(t, e, this.state.context, this), await this.options.onError ? .(t, e, this.state.context), await this.#i.config.onSettled ? .(void 0, t, this.state.variables, this.state.context, this), await this.options.onSettled ? .(void 0, t, e, this.state.context), t
                            } finally {
                                this.#s({
                                    type: "error",
                                    error: t
                                })
                            }
                        } finally {
                            this.#i.runNext(this)
                        }
                    }#
                    s(e) {
                        this.state = (t => {
                            switch (e.type) {
                                case "failed":
                                    return { ...t,
                                        failureCount: e.failureCount,
                                        failureReason: e.error
                                    };
                                case "pause":
                                    return { ...t,
                                        isPaused: !0
                                    };
                                case "continue":
                                    return { ...t,
                                        isPaused: !1
                                    };
                                case "pending":
                                    return { ...t,
                                        context: e.context,
                                        data: void 0,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        isPaused: e.isPaused,
                                        status: "pending",
                                        variables: e.variables,
                                        submittedAt: Date.now()
                                    };
                                case "success":
                                    return { ...t,
                                        data: e.data,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        status: "success",
                                        isPaused: !1
                                    };
                                case "error":
                                    return { ...t,
                                        data: void 0,
                                        error: e.error,
                                        failureCount: t.failureCount + 1,
                                        failureReason: e.error,
                                        isPaused: !1,
                                        status: "error"
                                    }
                            }
                        })(this.state), r.V.batch(() => {
                            this.#r.forEach(t => {
                                t.onMutationUpdate(e)
                            }), this.#i.notify({
                                mutation: this,
                                type: "updated",
                                action: e
                            })
                        })
                    }
                };

            function a() {
                return {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    failureReason: null,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0,
                    submittedAt: 0
                }
            }
        },
        69948: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return r
                }
            });
            var r = function() {
                let e = [],
                    t = 0,
                    n = e => {
                        e()
                    },
                    r = e => {
                        e()
                    },
                    i = e => setTimeout(e, 0),
                    o = r => {
                        t ? e.push(r) : i(() => {
                            n(r)
                        })
                    },
                    s = () => {
                        let t = e;
                        e = [], t.length && i(() => {
                            r(() => {
                                t.forEach(e => {
                                    n(e)
                                })
                            })
                        })
                    };
                return {
                    batch: e => {
                        let n;
                        t++;
                        try {
                            n = e()
                        } finally {
                            --t || s()
                        }
                        return n
                    },
                    batchCalls: e => (...t) => {
                        o(() => {
                            e(...t)
                        })
                    },
                    schedule: o,
                    setNotifyFunction: e => {
                        n = e
                    },
                    setBatchNotifyFunction: e => {
                        r = e
                    },
                    setScheduler: e => {
                        i = e
                    }
                }
            }()
        },
        49937: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return o
                }
            });
            var r = n(49010),
                i = n(56298),
                o = new class extends r.l {#
                    a = !0;#
                    t;#
                    n;
                    constructor() {
                        super(), this.#n = e => {
                            if (!i.sk && window.addEventListener) {
                                let t = () => e(!0),
                                    n = () => e(!1);
                                return window.addEventListener("online", t, !1), window.addEventListener("offline", n, !1), () => {
                                    window.removeEventListener("online", t), window.removeEventListener("offline", n)
                                }
                            }
                        }
                    }
                    onSubscribe() {
                        this.#t || this.setEventListener(this.#n)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || (this.#t ? .(), this.#t = void 0)
                    }
                    setEventListener(e) {
                        this.#n = e, this.#t ? .(), this.#t = e(this.setOnline.bind(this))
                    }
                    setOnline(e) {
                        this.#a !== e && (this.#a = e, this.listeners.forEach(t => {
                            t(e)
                        }))
                    }
                    isOnline() {
                        return this.#a
                    }
                }
        },
        2459: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return a
                },
                z: function() {
                    return c
                }
            });
            var r = n(56298),
                i = n(69948),
                o = n(30924),
                s = n(43494),
                a = class extends s.F {#
                    c;#
                    u;#
                    l;#
                    o;#
                    d;#
                    f;
                    constructor(e) {
                        super(), this.#f = !1, this.#d = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#l = e.cache, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#c = function(e) {
                            let t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
                                n = void 0 !== t,
                                r = n ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
                            return {
                                data: t,
                                dataUpdateCount: 0,
                                dataUpdatedAt: n ? r ? ? Date.now() : 0,
                                error: null,
                                errorUpdateCount: 0,
                                errorUpdatedAt: 0,
                                fetchFailureCount: 0,
                                fetchFailureReason: null,
                                fetchMeta: null,
                                isInvalidated: !1,
                                status: n ? "success" : "pending",
                                fetchStatus: "idle"
                            }
                        }(this.options), this.state = e.state ? ? this.#c, this.scheduleGc()
                    }
                    get meta() {
                        return this.options.meta
                    }
                    get promise() {
                        return this.#o ? .promise
                    }
                    setOptions(e) {
                        this.options = { ...this.#d,
                            ...e
                        }, this.updateGcTime(this.options.gcTime)
                    }
                    optionalRemove() {
                        this.observers.length || "idle" !== this.state.fetchStatus || this.#l.remove(this)
                    }
                    setData(e, t) {
                        let n = (0, r.oE)(this.state.data, e, this.options);
                        return this.#s({
                            data: n,
                            type: "success",
                            dataUpdatedAt: t ? .updatedAt,
                            manual: t ? .manual
                        }), n
                    }
                    setState(e, t) {
                        this.#s({
                            type: "setState",
                            state: e,
                            setStateOptions: t
                        })
                    }
                    cancel(e) {
                        let t = this.#o ? .promise;
                        return this.#o ? .cancel(e), t ? t.then(r.ZT).catch(r.ZT) : Promise.resolve()
                    }
                    destroy() {
                        super.destroy(), this.cancel({
                            silent: !0
                        })
                    }
                    reset() {
                        this.destroy(), this.setState(this.#c)
                    }
                    isActive() {
                        return this.observers.some(e => !1 !== (0, r.Nc)(e.options.enabled, this))
                    }
                    isDisabled() {
                        return this.getObserversCount() > 0 && !this.isActive()
                    }
                    isStale() {
                        return !!this.state.isInvalidated || (this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : void 0 === this.state.data)
                    }
                    isStaleByTime(e = 0) {
                        return this.state.isInvalidated || void 0 === this.state.data || !(0, r.Kp)(this.state.dataUpdatedAt, e)
                    }
                    onFocus() {
                        let e = this.observers.find(e => e.shouldFetchOnWindowFocus());
                        e ? .refetch({
                            cancelRefetch: !1
                        }), this.#o ? .continue()
                    }
                    onOnline() {
                        let e = this.observers.find(e => e.shouldFetchOnReconnect());
                        e ? .refetch({
                            cancelRefetch: !1
                        }), this.#o ? .continue()
                    }
                    addObserver(e) {
                        this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#l.notify({
                            type: "observerAdded",
                            query: this,
                            observer: e
                        }))
                    }
                    removeObserver(e) {
                        this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.#o && (this.#f ? this.#o.cancel({
                            revert: !0
                        }) : this.#o.cancelRetry()), this.scheduleGc()), this.#l.notify({
                            type: "observerRemoved",
                            query: this,
                            observer: e
                        }))
                    }
                    getObserversCount() {
                        return this.observers.length
                    }
                    invalidate() {
                        this.state.isInvalidated || this.#s({
                            type: "invalidate"
                        })
                    }
                    fetch(e, t) {
                        if ("idle" !== this.state.fetchStatus) {
                            if (void 0 !== this.state.data && t ? .cancelRefetch) this.cancel({
                                silent: !0
                            });
                            else if (this.#o) return this.#o.continueRetry(), this.#o.promise
                        }
                        if (e && this.setOptions(e), !this.options.queryFn) {
                            let e = this.observers.find(e => e.options.queryFn);
                            e && this.setOptions(e.options)
                        }
                        let n = new AbortController,
                            i = e => {
                                Object.defineProperty(e, "signal", {
                                    enumerable: !0,
                                    get: () => (this.#f = !0, n.signal)
                                })
                            },
                            s = {
                                fetchOptions: t,
                                options: this.options,
                                queryKey: this.queryKey,
                                state: this.state,
                                fetchFn: () => {
                                    let e = (0, r.cG)(this.options, t),
                                        n = {
                                            queryKey: this.queryKey,
                                            meta: this.meta
                                        };
                                    return (i(n), this.#f = !1, this.options.persister) ? this.options.persister(e, n, this) : e(n)
                                }
                            };
                        i(s), this.options.behavior ? .onFetch(s, this), this.#u = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== s.fetchOptions ? .meta) && this.#s({
                            type: "fetch",
                            meta: s.fetchOptions ? .meta
                        });
                        let a = e => {
                            (0, o.DV)(e) && e.silent || this.#s({
                                type: "error",
                                error: e
                            }), (0, o.DV)(e) || (this.#l.config.onError ? .(e, this), this.#l.config.onSettled ? .(this.state.data, e, this)), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                        };
                        return this.#o = (0, o.Mz)({
                            initialPromise: t ? .initialPromise,
                            fn: s.fetchFn,
                            abort: n.abort.bind(n),
                            onSuccess: e => {
                                if (void 0 === e) {
                                    a(Error(`${this.queryHash} data is undefined`));
                                    return
                                }
                                try {
                                    this.setData(e)
                                } catch (e) {
                                    a(e);
                                    return
                                }
                                this.#l.config.onSuccess ? .(e, this), this.#l.config.onSettled ? .(e, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                            },
                            onError: a,
                            onFail: (e, t) => {
                                this.#s({
                                    type: "failed",
                                    failureCount: e,
                                    error: t
                                })
                            },
                            onPause: () => {
                                this.#s({
                                    type: "pause"
                                })
                            },
                            onContinue: () => {
                                this.#s({
                                    type: "continue"
                                })
                            },
                            retry: s.options.retry,
                            retryDelay: s.options.retryDelay,
                            networkMode: s.options.networkMode,
                            canRun: () => !0
                        }), this.#o.start()
                    }#
                    s(e) {
                        this.state = (t => {
                            switch (e.type) {
                                case "failed":
                                    return { ...t,
                                        fetchFailureCount: e.failureCount,
                                        fetchFailureReason: e.error
                                    };
                                case "pause":
                                    return { ...t,
                                        fetchStatus: "paused"
                                    };
                                case "continue":
                                    return { ...t,
                                        fetchStatus: "fetching"
                                    };
                                case "fetch":
                                    return { ...t,
                                        ...c(t.data, this.options),
                                        fetchMeta: e.meta ? ? null
                                    };
                                case "success":
                                    return { ...t,
                                        data: e.data,
                                        dataUpdateCount: t.dataUpdateCount + 1,
                                        dataUpdatedAt: e.dataUpdatedAt ? ? Date.now(),
                                        error: null,
                                        isInvalidated: !1,
                                        status: "success",
                                        ...!e.manual && {
                                            fetchStatus: "idle",
                                            fetchFailureCount: 0,
                                            fetchFailureReason: null
                                        }
                                    };
                                case "error":
                                    let n = e.error;
                                    if ((0, o.DV)(n) && n.revert && this.#u) return { ...this.#u,
                                        fetchStatus: "idle"
                                    };
                                    return { ...t,
                                        error: n,
                                        errorUpdateCount: t.errorUpdateCount + 1,
                                        errorUpdatedAt: Date.now(),
                                        fetchFailureCount: t.fetchFailureCount + 1,
                                        fetchFailureReason: n,
                                        fetchStatus: "idle",
                                        status: "error"
                                    };
                                case "invalidate":
                                    return { ...t,
                                        isInvalidated: !0
                                    };
                                case "setState":
                                    return { ...t,
                                        ...e.state
                                    }
                            }
                        })(this.state), i.V.batch(() => {
                            this.observers.forEach(e => {
                                e.onQueryUpdate()
                            }), this.#l.notify({
                                query: this,
                                type: "updated",
                                action: e
                            })
                        })
                    }
                };

            function c(e, t) {
                return {
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchStatus: (0, o.Kw)(t.networkMode) ? "fetching" : "paused",
                    ...void 0 === e && {
                        error: null,
                        status: "pending"
                    }
                }
            }
        },
        66094: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return p
                }
            });
            var r = n(56298),
                i = n(2459),
                o = n(69948),
                s = n(49010),
                a = class extends s.l {
                    constructor(e = {}) {
                        super(), this.config = e, this.#h = new Map
                    }#
                    h;
                    build(e, t, n) {
                        let o = t.queryKey,
                            s = t.queryHash ? ? (0, r.Rm)(o, t),
                            a = this.get(s);
                        return a || (a = new i.A({
                            cache: this,
                            queryKey: o,
                            queryHash: s,
                            options: e.defaultQueryOptions(t),
                            state: n,
                            defaultOptions: e.getQueryDefaults(o)
                        }), this.add(a)), a
                    }
                    add(e) {
                        this.#h.has(e.queryHash) || (this.#h.set(e.queryHash, e), this.notify({
                            type: "added",
                            query: e
                        }))
                    }
                    remove(e) {
                        let t = this.#h.get(e.queryHash);
                        t && (e.destroy(), t === e && this.#h.delete(e.queryHash), this.notify({
                            type: "removed",
                            query: e
                        }))
                    }
                    clear() {
                        o.V.batch(() => {
                            this.getAll().forEach(e => {
                                this.remove(e)
                            })
                        })
                    }
                    get(e) {
                        return this.#h.get(e)
                    }
                    getAll() {
                        return [...this.#h.values()]
                    }
                    find(e) {
                        let t = {
                            exact: !0,
                            ...e
                        };
                        return this.getAll().find(e => (0, r._x)(t, e))
                    }
                    findAll(e = {}) {
                        let t = this.getAll();
                        return Object.keys(e).length > 0 ? t.filter(t => (0, r._x)(e, t)) : t
                    }
                    notify(e) {
                        o.V.batch(() => {
                            this.listeners.forEach(t => {
                                t(e)
                            })
                        })
                    }
                    onFocus() {
                        o.V.batch(() => {
                            this.getAll().forEach(e => {
                                e.onFocus()
                            })
                        })
                    }
                    onOnline() {
                        o.V.batch(() => {
                            this.getAll().forEach(e => {
                                e.onOnline()
                            })
                        })
                    }
                },
                c = n(92812),
                u = class extends s.l {
                    constructor(e = {}) {
                        super(), this.config = e, this.#p = new Map, this.#m = Date.now()
                    }#
                    p;#
                    m;
                    build(e, t, n) {
                        let r = new c.m({
                            mutationCache: this,
                            mutationId: ++this.#m,
                            options: e.defaultMutationOptions(t),
                            state: n
                        });
                        return this.add(r), r
                    }
                    add(e) {
                        let t = l(e),
                            n = this.#p.get(t) ? ? [];
                        n.push(e), this.#p.set(t, n), this.notify({
                            type: "added",
                            mutation: e
                        })
                    }
                    remove(e) {
                        let t = l(e);
                        if (this.#p.has(t)) {
                            let n = this.#p.get(t) ? .filter(t => t !== e);
                            n && (0 === n.length ? this.#p.delete(t) : this.#p.set(t, n))
                        }
                        this.notify({
                            type: "removed",
                            mutation: e
                        })
                    }
                    canRun(e) {
                        let t = this.#p.get(l(e)) ? .find(e => "pending" === e.state.status);
                        return !t || t === e
                    }
                    runNext(e) {
                        let t = this.#p.get(l(e)) ? .find(t => t !== e && t.state.isPaused);
                        return t ? .continue() ? ? Promise.resolve()
                    }
                    clear() {
                        o.V.batch(() => {
                            this.getAll().forEach(e => {
                                this.remove(e)
                            })
                        })
                    }
                    getAll() {
                        return [...this.#p.values()].flat()
                    }
                    find(e) {
                        let t = {
                            exact: !0,
                            ...e
                        };
                        return this.getAll().find(e => (0, r.X7)(t, e))
                    }
                    findAll(e = {}) {
                        return this.getAll().filter(t => (0, r.X7)(e, t))
                    }
                    notify(e) {
                        o.V.batch(() => {
                            this.listeners.forEach(t => {
                                t(e)
                            })
                        })
                    }
                    resumePausedMutations() {
                        let e = this.getAll().filter(e => e.state.isPaused);
                        return o.V.batch(() => Promise.all(e.map(e => e.continue().catch(r.ZT))))
                    }
                };

            function l(e) {
                return e.options.scope ? .id ? ? String(e.mutationId)
            }
            var d = n(34939),
                f = n(49937);

            function h(e, {
                pages: t,
                pageParams: n
            }) {
                let r = t.length - 1;
                return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
            }
            var p = class {#
                g;#
                i;#
                d;#
                y;#
                b;#
                w;#
                v;#
                A;
                constructor(e = {}) {
                    this.#g = e.queryCache || new a, this.#i = e.mutationCache || new u, this.#d = e.defaultOptions || {}, this.#y = new Map, this.#b = new Map, this.#w = 0
                }
                mount() {
                    this.#w++, 1 === this.#w && (this.#v = d.j.subscribe(async e => {
                        e && (await this.resumePausedMutations(), this.#g.onFocus())
                    }), this.#A = f.N.subscribe(async e => {
                        e && (await this.resumePausedMutations(), this.#g.onOnline())
                    }))
                }
                unmount() {
                    this.#w--, 0 === this.#w && (this.#v ? .(), this.#v = void 0, this.#A ? .(), this.#A = void 0)
                }
                isFetching(e) {
                    return this.#g.findAll({ ...e,
                        fetchStatus: "fetching"
                    }).length
                }
                isMutating(e) {
                    return this.#i.findAll({ ...e,
                        status: "pending"
                    }).length
                }
                getQueryData(e) {
                    let t = this.defaultQueryOptions({
                        queryKey: e
                    });
                    return this.#g.get(t.queryHash) ? .state.data
                }
                ensureQueryData(e) {
                    let t = this.getQueryData(e.queryKey);
                    if (void 0 === t) return this.fetchQuery(e); {
                        let n = this.defaultQueryOptions(e),
                            i = this.#g.build(this, n);
                        return e.revalidateIfStale && i.isStaleByTime((0, r.KC)(n.staleTime, i)) && this.prefetchQuery(n), Promise.resolve(t)
                    }
                }
                getQueriesData(e) {
                    return this.#g.findAll(e).map(({
                        queryKey: e,
                        state: t
                    }) => [e, t.data])
                }
                setQueryData(e, t, n) {
                    let i = this.defaultQueryOptions({
                            queryKey: e
                        }),
                        o = this.#g.get(i.queryHash),
                        s = o ? .state.data,
                        a = (0, r.SE)(t, s);
                    if (void 0 !== a) return this.#g.build(this, i).setData(a, { ...n,
                        manual: !0
                    })
                }
                setQueriesData(e, t, n) {
                    return o.V.batch(() => this.#g.findAll(e).map(({
                        queryKey: e
                    }) => [e, this.setQueryData(e, t, n)]))
                }
                getQueryState(e) {
                    let t = this.defaultQueryOptions({
                        queryKey: e
                    });
                    return this.#g.get(t.queryHash) ? .state
                }
                removeQueries(e) {
                    let t = this.#g;
                    o.V.batch(() => {
                        t.findAll(e).forEach(e => {
                            t.remove(e)
                        })
                    })
                }
                resetQueries(e, t) {
                    let n = this.#g,
                        r = {
                            type: "active",
                            ...e
                        };
                    return o.V.batch(() => (n.findAll(e).forEach(e => {
                        e.reset()
                    }), this.refetchQueries(r, t)))
                }
                cancelQueries(e = {}, t = {}) {
                    let n = {
                        revert: !0,
                        ...t
                    };
                    return Promise.all(o.V.batch(() => this.#g.findAll(e).map(e => e.cancel(n)))).then(r.ZT).catch(r.ZT)
                }
                invalidateQueries(e = {}, t = {}) {
                    return o.V.batch(() => {
                        if (this.#g.findAll(e).forEach(e => {
                                e.invalidate()
                            }), "none" === e.refetchType) return Promise.resolve();
                        let n = { ...e,
                            type: e.refetchType ? ? e.type ? ? "active"
                        };
                        return this.refetchQueries(n, t)
                    })
                }
                refetchQueries(e = {}, t) {
                    let n = { ...t,
                        cancelRefetch: t ? .cancelRefetch ? ? !0
                    };
                    return Promise.all(o.V.batch(() => this.#g.findAll(e).filter(e => !e.isDisabled()).map(e => {
                        let t = e.fetch(void 0, n);
                        return n.throwOnError || (t = t.catch(r.ZT)), "paused" === e.state.fetchStatus ? Promise.resolve() : t
                    }))).then(r.ZT)
                }
                fetchQuery(e) {
                    let t = this.defaultQueryOptions(e);
                    void 0 === t.retry && (t.retry = !1);
                    let n = this.#g.build(this, t);
                    return n.isStaleByTime((0, r.KC)(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
                }
                prefetchQuery(e) {
                    return this.fetchQuery(e).then(r.ZT).catch(r.ZT)
                }
                fetchInfiniteQuery(e) {
                    var t;
                    return e.behavior = (t = e.pages, {
                        onFetch: (e, n) => {
                            let i = async () => {
                                let n;
                                let i = e.options,
                                    o = e.fetchOptions ? .meta ? .fetchMore ? .direction,
                                    s = e.state.data ? .pages || [],
                                    a = e.state.data ? .pageParams || [],
                                    c = !1,
                                    u = t => {
                                        Object.defineProperty(t, "signal", {
                                            enumerable: !0,
                                            get: () => (e.signal.aborted ? c = !0 : e.signal.addEventListener("abort", () => {
                                                c = !0
                                            }), e.signal)
                                        })
                                    },
                                    l = (0, r.cG)(e.options, e.fetchOptions),
                                    d = async (t, n, i) => {
                                        if (c) return Promise.reject();
                                        if (null == n && t.pages.length) return Promise.resolve(t);
                                        let o = {
                                            queryKey: e.queryKey,
                                            pageParam: n,
                                            direction: i ? "backward" : "forward",
                                            meta: e.options.meta
                                        };
                                        u(o);
                                        let s = await l(o),
                                            {
                                                maxPages: a
                                            } = e.options,
                                            d = i ? r.Ht : r.VX;
                                        return {
                                            pages: d(t.pages, s, a),
                                            pageParams: d(t.pageParams, n, a)
                                        }
                                    };
                                if (o && s.length) {
                                    let e = "backward" === o,
                                        t = {
                                            pages: s,
                                            pageParams: a
                                        },
                                        r = (e ? function(e, {
                                            pages: t,
                                            pageParams: n
                                        }) {
                                            return t.length > 0 ? e.getPreviousPageParam ? .(t[0], t, n[0], n) : void 0
                                        } : h)(i, t);
                                    n = await d(t, r, e)
                                } else {
                                    n = await d({
                                        pages: [],
                                        pageParams: []
                                    }, a[0] ? ? i.initialPageParam);
                                    let e = t ? ? s.length;
                                    for (let t = 1; t < e; t++) {
                                        let e = h(i, n);
                                        if (null == e) break;
                                        n = await d(n, e)
                                    }
                                }
                                return n
                            };
                            e.options.persister ? e.fetchFn = () => e.options.persister ? .(i, {
                                queryKey: e.queryKey,
                                meta: e.options.meta,
                                signal: e.signal
                            }, n) : e.fetchFn = i
                        }
                    }), this.fetchQuery(e)
                }
                prefetchInfiniteQuery(e) {
                    return this.fetchInfiniteQuery(e).then(r.ZT).catch(r.ZT)
                }
                resumePausedMutations() {
                    return f.N.isOnline() ? this.#i.resumePausedMutations() : Promise.resolve()
                }
                getQueryCache() {
                    return this.#g
                }
                getMutationCache() {
                    return this.#i
                }
                getDefaultOptions() {
                    return this.#d
                }
                setDefaultOptions(e) {
                    this.#d = e
                }
                setQueryDefaults(e, t) {
                    this.#y.set((0, r.Ym)(e), {
                        queryKey: e,
                        defaultOptions: t
                    })
                }
                getQueryDefaults(e) {
                    let t = [...this.#y.values()],
                        n = {};
                    return t.forEach(t => {
                        (0, r.to)(e, t.queryKey) && (n = { ...n,
                            ...t.defaultOptions
                        })
                    }), n
                }
                setMutationDefaults(e, t) {
                    this.#b.set((0, r.Ym)(e), {
                        mutationKey: e,
                        defaultOptions: t
                    })
                }
                getMutationDefaults(e) {
                    let t = [...this.#b.values()],
                        n = {};
                    return t.forEach(t => {
                        (0, r.to)(e, t.mutationKey) && (n = { ...n,
                            ...t.defaultOptions
                        })
                    }), n
                }
                defaultQueryOptions(e) {
                    if (e._defaulted) return e;
                    let t = { ...this.#d.queries,
                        ...this.getQueryDefaults(e.queryKey),
                        ...e,
                        _defaulted: !0
                    };
                    return t.queryHash || (t.queryHash = (0, r.Rm)(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), !0 !== t.enabled && t.queryFn === r.CN && (t.enabled = !1), t
                }
                defaultMutationOptions(e) {
                    return e ? ._defaulted ? e : { ...this.#d.mutations,
                        ...e ? .mutationKey && this.getMutationDefaults(e.mutationKey),
                        ...e,
                        _defaulted : !0
                    }
                }
                clear() {
                    this.#g.clear(), this.#i.clear()
                }
            }
        },
        43494: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return i
                }
            });
            var r = n(56298),
                i = class {#
                    C;
                    destroy() {
                        this.clearGcTimeout()
                    }
                    scheduleGc() {
                        this.clearGcTimeout(), (0, r.PN)(this.gcTime) && (this.#C = setTimeout(() => {
                            this.optionalRemove()
                        }, this.gcTime))
                    }
                    updateGcTime(e) {
                        this.gcTime = Math.max(this.gcTime || 0, e ? ? (r.sk ? 1 / 0 : 3e5))
                    }
                    clearGcTimeout() {
                        this.#C && (clearTimeout(this.#C), this.#C = void 0)
                    }
                }
        },
        30924: function(e, t, n) {
            "use strict";
            n.d(t, {
                DV: function() {
                    return u
                },
                Kw: function() {
                    return a
                },
                Mz: function() {
                    return l
                }
            });
            var r = n(34939),
                i = n(49937),
                o = n(56298);

            function s(e) {
                return Math.min(1e3 * 2 ** e, 3e4)
            }

            function a(e) {
                return (e ? ? "online") !== "online" || i.N.isOnline()
            }
            var c = class extends Error {
                constructor(e) {
                    super("CancelledError"), this.revert = e ? .revert, this.silent = e ? .silent
                }
            };

            function u(e) {
                return e instanceof c
            }

            function l(e) {
                let t, n, u, l = !1,
                    d = 0,
                    f = !1,
                    h = new Promise((e, t) => {
                        n = e, u = t
                    }),
                    p = () => r.j.isFocused() && ("always" === e.networkMode || i.N.isOnline()) && e.canRun(),
                    m = () => a(e.networkMode) && e.canRun(),
                    g = r => {
                        f || (f = !0, e.onSuccess ? .(r), t ? .(), n(r))
                    },
                    y = n => {
                        f || (f = !0, e.onError ? .(n), t ? .(), u(n))
                    },
                    b = () => new Promise(n => {
                        t = e => {
                            (f || p()) && n(e)
                        }, e.onPause ? .()
                    }).then(() => {
                        t = void 0, f || e.onContinue ? .()
                    }),
                    w = () => {
                        let t;
                        if (f) return;
                        let n = 0 === d ? e.initialPromise : void 0;
                        try {
                            t = n ? ? e.fn()
                        } catch (e) {
                            t = Promise.reject(e)
                        }
                        Promise.resolve(t).then(g).catch(t => {
                            if (f) return;
                            let n = e.retry ? ? (o.sk ? 0 : 3),
                                r = e.retryDelay ? ? s,
                                i = "function" == typeof r ? r(d, t) : r,
                                a = !0 === n || "number" == typeof n && d < n || "function" == typeof n && n(d, t);
                            if (l || !a) {
                                y(t);
                                return
                            }
                            d++, e.onFail ? .(d, t), (0, o._v)(i).then(() => p() ? void 0 : b()).then(() => {
                                l ? y(t) : w()
                            })
                        })
                    };
                return {
                    promise: h,
                    cancel: t => {
                        f || (y(new c(t)), e.abort ? .())
                    },
                    continue: () => (t ? .(), h),
                    cancelRetry: () => {
                        l = !0
                    },
                    continueRetry: () => {
                        l = !1
                    },
                    canStart: m,
                    start: () => (m() ? w() : b().then(w), h)
                }
            }
        },
        49010: function(e, t, n) {
            "use strict";
            n.d(t, {
                l: function() {
                    return r
                }
            });
            var r = class {
                constructor() {
                    this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
                }
                subscribe(e) {
                    return this.listeners.add(e), this.onSubscribe(), () => {
                        this.listeners.delete(e), this.onUnsubscribe()
                    }
                }
                hasListeners() {
                    return this.listeners.size > 0
                }
                onSubscribe() {}
                onUnsubscribe() {}
            }
        },
        56298: function(e, t, n) {
            "use strict";
            n.d(t, {
                CN: function() {
                    return x
                },
                Ht: function() {
                    return E
                },
                KC: function() {
                    return c
                },
                Kp: function() {
                    return a
                },
                Nc: function() {
                    return u
                },
                PN: function() {
                    return s
                },
                Q$: function() {
                    return m
                },
                Rm: function() {
                    return f
                },
                SE: function() {
                    return o
                },
                VS: function() {
                    return g
                },
                VX: function() {
                    return C
                },
                X7: function() {
                    return d
                },
                Ym: function() {
                    return h
                },
                ZT: function() {
                    return i
                },
                _v: function() {
                    return v
                },
                _x: function() {
                    return l
                },
                cG: function() {
                    return I
                },
                oE: function() {
                    return A
                },
                sk: function() {
                    return r
                },
                to: function() {
                    return p
                }
            });
            var r = "undefined" == typeof window || "Deno" in globalThis;

            function i() {}

            function o(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function s(e) {
                return "number" == typeof e && e >= 0 && e !== 1 / 0
            }

            function a(e, t) {
                return Math.max(e + (t || 0) - Date.now(), 0)
            }

            function c(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function u(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function l(e, t) {
                let {
                    type: n = "all",
                    exact: r,
                    fetchStatus: i,
                    predicate: o,
                    queryKey: s,
                    stale: a
                } = e;
                if (s) {
                    if (r) {
                        if (t.queryHash !== f(s, t.options)) return !1
                    } else if (!p(t.queryKey, s)) return !1
                }
                if ("all" !== n) {
                    let e = t.isActive();
                    if ("active" === n && !e || "inactive" === n && e) return !1
                }
                return ("boolean" != typeof a || t.isStale() === a) && (!i || i === t.state.fetchStatus) && (!o || !!o(t))
            }

            function d(e, t) {
                let {
                    exact: n,
                    status: r,
                    predicate: i,
                    mutationKey: o
                } = e;
                if (o) {
                    if (!t.options.mutationKey) return !1;
                    if (n) {
                        if (h(t.options.mutationKey) !== h(o)) return !1
                    } else if (!p(t.options.mutationKey, o)) return !1
                }
                return (!r || t.state.status === r) && (!i || !!i(t))
            }

            function f(e, t) {
                return (t ? .queryKeyHashFn || h)(e)
            }

            function h(e) {
                return JSON.stringify(e, (e, t) => b(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t)
            }

            function p(e, t) {
                return e === t || typeof e == typeof t && !!e && !!t && "object" == typeof e && "object" == typeof t && !Object.keys(t).some(n => !p(e[n], t[n]))
            }

            function m(e, t) {
                if (e === t) return e;
                let n = y(e) && y(t);
                if (n || b(e) && b(t)) {
                    let r = n ? e : Object.keys(e),
                        i = r.length,
                        o = n ? t : Object.keys(t),
                        s = o.length,
                        a = n ? [] : {},
                        c = 0;
                    for (let i = 0; i < s; i++) {
                        let s = n ? i : o[i];
                        (!n && r.includes(s) || n) && void 0 === e[s] && void 0 === t[s] ? (a[s] = void 0, c++) : (a[s] = m(e[s], t[s]), a[s] === e[s] && void 0 !== e[s] && c++)
                    }
                    return i === s && c === i ? e : a
                }
                return t
            }

            function g(e, t) {
                if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
                for (let n in e)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function y(e) {
                return Array.isArray(e) && e.length === Object.keys(e).length
            }

            function b(e) {
                if (!w(e)) return !1;
                let t = e.constructor;
                if (void 0 === t) return !0;
                let n = t.prototype;
                return !!(w(n) && n.hasOwnProperty("isPrototypeOf")) && Object.getPrototypeOf(e) === Object.prototype
            }

            function w(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function v(e) {
                return new Promise(t => {
                    setTimeout(t, e)
                })
            }

            function A(e, t, n) {
                return "function" == typeof n.structuralSharing ? n.structuralSharing(e, t) : !1 !== n.structuralSharing ? m(e, t) : t
            }

            function C(e, t, n = 0) {
                let r = [...e, t];
                return n && r.length > n ? r.slice(1) : r
            }

            function E(e, t, n = 0) {
                let r = [t, ...e];
                return n && r.length > n ? r.slice(0, -1) : r
            }
            var x = Symbol();

            function I(e, t) {
                return !e.queryFn && t ? .initialPromise ? () => t.initialPromise : e.queryFn && e.queryFn !== x ? e.queryFn : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
            }
        },
        93191: function(e, t, n) {
            "use strict";
            n.d(t, {
                NL: function() {
                    return s
                },
                aH: function() {
                    return a
                }
            });
            var r = n(2265),
                i = n(57437),
                o = r.createContext(void 0),
                s = e => {
                    let t = r.useContext(o);
                    if (e) return e;
                    if (!t) throw Error("No QueryClient set, use QueryClientProvider to set one");
                    return t
                },
                a = e => {
                    let {
                        client: t,
                        children: n
                    } = e;
                    return r.useEffect(() => (t.mount(), () => {
                        t.unmount()
                    }), [t]), (0, i.jsx)(o.Provider, {
                        value: t,
                        children: n
                    })
                }
        },
        25524: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return d
                }
            });
            var r = n(2265),
                i = n(92812),
                o = n(69948),
                s = n(49010),
                a = n(56298),
                c = class extends s.l {#
                    E;#
                    x = void 0;#
                    I;#
                    B;
                    constructor(e, t) {
                        super(), this.#E = e, this.setOptions(t), this.bindMethods(), this.#k()
                    }
                    bindMethods() {
                        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                    }
                    setOptions(e) {
                        let t = this.options;
                        this.options = this.#E.defaultMutationOptions(e), (0, a.VS)(this.options, t) || this.#E.getMutationCache().notify({
                            type: "observerOptionsUpdated",
                            mutation: this.#I,
                            observer: this
                        }), t ? .mutationKey && this.options.mutationKey && (0, a.Ym)(t.mutationKey) !== (0, a.Ym)(this.options.mutationKey) ? this.reset() : this.#I ? .state.status === "pending" && this.#I.setOptions(this.options)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.#I ? .removeObserver(this)
                    }
                    onMutationUpdate(e) {
                        this.#k(), this.#P(e)
                    }
                    getCurrentResult() {
                        return this.#x
                    }
                    reset() {
                        this.#I ? .removeObserver(this), this.#I = void 0, this.#k(), this.#P()
                    }
                    mutate(e, t) {
                        return this.#B = t, this.#I ? .removeObserver(this), this.#I = this.#E.getMutationCache().build(this.#E, this.options), this.#I.addObserver(this), this.#I.execute(e)
                    }#
                    k() {
                        let e = this.#I ? .state ? ? (0, i.R)();
                        this.#x = { ...e,
                            isPending: "pending" === e.status,
                            isSuccess: "success" === e.status,
                            isError: "error" === e.status,
                            isIdle: "idle" === e.status,
                            mutate: this.mutate,
                            reset: this.reset
                        }
                    }#
                    P(e) {
                        o.V.batch(() => {
                            if (this.#B && this.hasListeners()) {
                                let t = this.#x.variables,
                                    n = this.#x.context;
                                e ? .type === "success" ? (this.#B.onSuccess ? .(e.data, t, n), this.#B.onSettled ? .(e.data, null, t, n)) : e ? .type === "error" && (this.#B.onError ? .(e.error, t, n), this.#B.onSettled ? .(void 0, e.error, t, n))
                            }
                            this.listeners.forEach(e => {
                                e(this.#x)
                            })
                        })
                    }
                },
                u = n(93191),
                l = n(37832);

            function d(e, t) {
                let n = (0, u.NL)(t),
                    [i] = r.useState(() => new c(n, e));
                r.useEffect(() => {
                    i.setOptions(e)
                }, [i, e]);
                let s = r.useSyncExternalStore(r.useCallback(e => i.subscribe(o.V.batchCalls(e)), [i]), () => i.getCurrentResult(), () => i.getCurrentResult()),
                    a = r.useCallback((e, t) => {
                        i.mutate(e, t).catch(l.Z)
                    }, [i]);
                if (s.error && (0, l.L)(i.options.throwOnError, [s.error])) throw s.error;
                return { ...s,
                    mutate: a,
                    mutateAsync: s.mutate
                }
            }
        },
        40932: function(e, t, n) {
            "use strict";
            let r;
            n.d(t, {
                a: function() {
                    return k
                }
            });
            var i = n(56298),
                o = n(69948),
                s = n(34939),
                a = n(49010),
                c = n(2459),
                u = class extends a.l {
                    constructor(e, t) {
                        super(), this.options = t, this.#E = e, this.#M = null, this.bindMethods(), this.setOptions(t)
                    }#
                    E;#
                    O = void 0;#
                    S = void 0;#
                    x = void 0;#
                    R;#
                    T;#
                    M;#
                    N;#
                    F;#
                    D;#
                    U;#
                    L;#
                    q;#
                    Q = new Set;
                    bindMethods() {
                        this.refetch = this.refetch.bind(this)
                    }
                    onSubscribe() {
                        1 === this.listeners.size && (this.#O.addObserver(this), l(this.#O, this.options) ? this.#j() : this.updateResult(), this.#G())
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.destroy()
                    }
                    shouldFetchOnReconnect() {
                        return d(this.#O, this.options, this.options.refetchOnReconnect)
                    }
                    shouldFetchOnWindowFocus() {
                        return d(this.#O, this.options, this.options.refetchOnWindowFocus)
                    }
                    destroy() {
                        this.listeners = new Set, this.#z(), this.#W(), this.#O.removeObserver(this)
                    }
                    setOptions(e, t) {
                        let n = this.options,
                            r = this.#O;
                        if (this.options = this.#E.defaultQueryOptions(e), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled && "function" != typeof this.options.enabled && "boolean" != typeof(0, i.Nc)(this.options.enabled, this.#O)) throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
                        this.#_(), this.#O.setOptions(this.options), n._defaulted && !(0, i.VS)(this.options, n) && this.#E.getQueryCache().notify({
                            type: "observerOptionsUpdated",
                            query: this.#O,
                            observer: this
                        });
                        let o = this.hasListeners();
                        o && f(this.#O, r, this.options, n) && this.#j(), this.updateResult(t), o && (this.#O !== r || (0, i.Nc)(this.options.enabled, this.#O) !== (0, i.Nc)(n.enabled, this.#O) || (0, i.KC)(this.options.staleTime, this.#O) !== (0, i.KC)(n.staleTime, this.#O)) && this.#H();
                        let s = this.#K();
                        o && (this.#O !== r || (0, i.Nc)(this.options.enabled, this.#O) !== (0, i.Nc)(n.enabled, this.#O) || s !== this.#q) && this.#V(s)
                    }
                    getOptimisticResult(e) {
                        let t = this.#E.getQueryCache().build(this.#E, e),
                            n = this.createResult(t, e);
                        return (0, i.VS)(this.getCurrentResult(), n) || (this.#x = n, this.#T = this.options, this.#R = this.#O.state), n
                    }
                    getCurrentResult() {
                        return this.#x
                    }
                    trackResult(e, t) {
                        let n = {};
                        return Object.keys(e).forEach(r => {
                            Object.defineProperty(n, r, {
                                configurable: !1,
                                enumerable: !0,
                                get: () => (this.trackProp(r), t ? .(r), e[r])
                            })
                        }), n
                    }
                    trackProp(e) {
                        this.#Q.add(e)
                    }
                    getCurrentQuery() {
                        return this.#O
                    }
                    refetch({ ...e
                    } = {}) {
                        return this.fetch({ ...e
                        })
                    }
                    fetchOptimistic(e) {
                        let t = this.#E.defaultQueryOptions(e),
                            n = this.#E.getQueryCache().build(this.#E, t);
                        return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, t))
                    }
                    fetch(e) {
                        return this.#j({ ...e,
                            cancelRefetch: e.cancelRefetch ? ? !0
                        }).then(() => (this.updateResult(), this.#x))
                    }#
                    j(e) {
                        this.#_();
                        let t = this.#O.fetch(this.options, e);
                        return e ? .throwOnError || (t = t.catch(i.ZT)), t
                    }#
                    H() {
                        this.#z();
                        let e = (0, i.KC)(this.options.staleTime, this.#O);
                        if (i.sk || this.#x.isStale || !(0, i.PN)(e)) return;
                        let t = (0, i.Kp)(this.#x.dataUpdatedAt, e);
                        this.#U = setTimeout(() => {
                            this.#x.isStale || this.updateResult()
                        }, t + 1)
                    }#
                    K() {
                        return ("function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.#O) : this.options.refetchInterval) ? ? !1
                    }#
                    V(e) {
                        this.#W(), this.#q = e, !i.sk && !1 !== (0, i.Nc)(this.options.enabled, this.#O) && (0, i.PN)(this.#q) && 0 !== this.#q && (this.#L = setInterval(() => {
                            (this.options.refetchIntervalInBackground || s.j.isFocused()) && this.#j()
                        }, this.#q))
                    }#
                    G() {
                        this.#H(), this.#V(this.#K())
                    }#
                    z() {
                        this.#U && (clearTimeout(this.#U), this.#U = void 0)
                    }#
                    W() {
                        this.#L && (clearInterval(this.#L), this.#L = void 0)
                    }
                    createResult(e, t) {
                        let n;
                        let r = this.#O,
                            o = this.options,
                            s = this.#x,
                            a = this.#R,
                            u = this.#T,
                            d = e !== r ? e.state : this.#S,
                            {
                                state: p
                            } = e,
                            m = { ...p
                            },
                            g = !1;
                        if (t._optimisticResults) {
                            let n = this.hasListeners(),
                                i = !n && l(e, t),
                                s = n && f(e, r, t, o);
                            (i || s) && (m = { ...m,
                                ...(0, c.z)(p.data, e.options)
                            }), "isRestoring" === t._optimisticResults && (m.fetchStatus = "idle")
                        }
                        let {
                            error: y,
                            errorUpdatedAt: b,
                            status: w
                        } = m;
                        if (t.select && void 0 !== m.data) {
                            if (s && m.data === a ? .data && t.select === this.#N) n = this.#F;
                            else try {
                                this.#N = t.select, n = t.select(m.data), n = (0, i.oE)(s ? .data, n, t), this.#F = n, this.#M = null
                            } catch (e) {
                                this.#M = e
                            }
                        } else n = m.data;
                        if (void 0 !== t.placeholderData && void 0 === n && "pending" === w) {
                            let e;
                            if (s ? .isPlaceholderData && t.placeholderData === u ? .placeholderData) e = s.data;
                            else if (e = "function" == typeof t.placeholderData ? t.placeholderData(this.#D ? .state.data, this.#D) : t.placeholderData, t.select && void 0 !== e) try {
                                e = t.select(e), this.#M = null
                            } catch (e) {
                                this.#M = e
                            }
                            void 0 !== e && (w = "success", n = (0, i.oE)(s ? .data, e, t), g = !0)
                        }
                        this.#M && (y = this.#M, n = this.#F, b = Date.now(), w = "error");
                        let v = "fetching" === m.fetchStatus,
                            A = "pending" === w,
                            C = "error" === w,
                            E = A && v,
                            x = void 0 !== n;
                        return {
                            status: w,
                            fetchStatus: m.fetchStatus,
                            isPending: A,
                            isSuccess: "success" === w,
                            isError: C,
                            isInitialLoading: E,
                            isLoading: E,
                            data: n,
                            dataUpdatedAt: m.dataUpdatedAt,
                            error: y,
                            errorUpdatedAt: b,
                            failureCount: m.fetchFailureCount,
                            failureReason: m.fetchFailureReason,
                            errorUpdateCount: m.errorUpdateCount,
                            isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
                            isFetchedAfterMount: m.dataUpdateCount > d.dataUpdateCount || m.errorUpdateCount > d.errorUpdateCount,
                            isFetching: v,
                            isRefetching: v && !A,
                            isLoadingError: C && !x,
                            isPaused: "paused" === m.fetchStatus,
                            isPlaceholderData: g,
                            isRefetchError: C && x,
                            isStale: h(e, t),
                            refetch: this.refetch
                        }
                    }
                    updateResult(e) {
                        let t = this.#x,
                            n = this.createResult(this.#O, this.options);
                        if (this.#R = this.#O.state, this.#T = this.options, void 0 !== this.#R.data && (this.#D = this.#O), (0, i.VS)(n, t)) return;
                        this.#x = n;
                        let r = {};
                        e ? .listeners !== !1 && (() => {
                            if (!t) return !0;
                            let {
                                notifyOnChangeProps: e
                            } = this.options, n = "function" == typeof e ? e() : e;
                            if ("all" === n || !n && !this.#Q.size) return !0;
                            let r = new Set(n ? ? this.#Q);
                            return this.options.throwOnError && r.add("error"), Object.keys(this.#x).some(e => this.#x[e] !== t[e] && r.has(e))
                        })() && (r.listeners = !0), this.#P({ ...r,
                            ...e
                        })
                    }#
                    _() {
                        let e = this.#E.getQueryCache().build(this.#E, this.options);
                        if (e === this.#O) return;
                        let t = this.#O;
                        this.#O = e, this.#S = e.state, this.hasListeners() && (t ? .removeObserver(this), e.addObserver(this))
                    }
                    onQueryUpdate() {
                        this.updateResult(), this.hasListeners() && this.#G()
                    }#
                    P(e) {
                        o.V.batch(() => {
                            e.listeners && this.listeners.forEach(e => {
                                e(this.#x)
                            }), this.#E.getQueryCache().notify({
                                query: this.#O,
                                type: "observerResultsUpdated"
                            })
                        })
                    }
                };

            function l(e, t) {
                return !1 !== (0, i.Nc)(t.enabled, e) && void 0 === e.state.data && !("error" === e.state.status && !1 === t.retryOnMount) || void 0 !== e.state.data && d(e, t, t.refetchOnMount)
            }

            function d(e, t, n) {
                if (!1 !== (0, i.Nc)(t.enabled, e)) {
                    let r = "function" == typeof n ? n(e) : n;
                    return "always" === r || !1 !== r && h(e, t)
                }
                return !1
            }

            function f(e, t, n, r) {
                return (e !== t || !1 === (0, i.Nc)(r.enabled, e)) && (!n.suspense || "error" !== e.state.status) && h(e, n)
            }

            function h(e, t) {
                return !1 !== (0, i.Nc)(t.enabled, e) && e.isStaleByTime((0, i.KC)(t.staleTime, e))
            }
            var p = n(2265);
            n(57437);
            var m = p.createContext((r = !1, {
                    clearReset: () => {
                        r = !1
                    },
                    reset: () => {
                        r = !0
                    },
                    isReset: () => r
                })),
                g = () => p.useContext(m),
                y = n(93191),
                b = p.createContext(!1),
                w = () => p.useContext(b);
            b.Provider;
            var v = n(37832),
                A = (e, t) => {
                    (e.suspense || e.throwOnError) && !t.isReset() && (e.retryOnMount = !1)
                },
                C = e => {
                    p.useEffect(() => {
                        e.clearReset()
                    }, [e])
                },
                E = e => {
                    let {
                        result: t,
                        errorResetBoundary: n,
                        throwOnError: r,
                        query: i
                    } = e;
                    return t.isError && !n.isReset() && !t.isFetching && i && (0, v.L)(r, [t.error, i])
                },
                x = e => {
                    e.suspense && ("number" != typeof e.staleTime && (e.staleTime = 1e3), "number" == typeof e.gcTime && (e.gcTime = Math.max(e.gcTime, 1e3)))
                },
                I = (e, t) => e ? .suspense && t.isPending,
                B = (e, t, n) => t.fetchOptimistic(e).catch(() => {
                    n.clearReset()
                });

            function k(e, t) {
                return function(e, t, n) {
                    var r, i, s, a;
                    let c = (0, y.NL)(n),
                        u = w(),
                        l = g(),
                        d = c.defaultQueryOptions(e);
                    null === (i = c.getDefaultOptions().queries) || void 0 === i || null === (r = i._experimental_beforeQuery) || void 0 === r || r.call(i, d), d._optimisticResults = u ? "isRestoring" : "optimistic", x(d), A(d, l), C(l);
                    let [f] = p.useState(() => new t(c, d)), h = f.getOptimisticResult(d);
                    if (p.useSyncExternalStore(p.useCallback(e => {
                            let t = u ? () => void 0 : f.subscribe(o.V.batchCalls(e));
                            return f.updateResult(), t
                        }, [f, u]), () => f.getCurrentResult(), () => f.getCurrentResult()), p.useEffect(() => {
                            f.setOptions(d, {
                                listeners: !1
                            })
                        }, [d, f]), I(d, h)) throw B(d, f, l);
                    if (E({
                            result: h,
                            errorResetBoundary: l,
                            throwOnError: d.throwOnError,
                            query: c.getQueryCache().get(d.queryHash)
                        })) throw h.error;
                    return null === (a = c.getDefaultOptions().queries) || void 0 === a || null === (s = a._experimental_afterQuery) || void 0 === s || s.call(a, d, h), d.notifyOnChangeProps ? h : f.trackResult(h)
                }(e, u, t)
            }
        },
        37832: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return "function" == typeof e ? e(...t) : !!e
            }

            function i() {}
            n.d(t, {
                L: function() {
                    return r
                },
                Z: function() {
                    return i
                }
            })
        },
        79886: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = e.state.current,
                    n = e.state.connections.get(t),
                    r = n ? .accounts,
                    i = r ? .[0],
                    o = e.chains.find(e => e.id === n ? .chainId),
                    s = e.state.status;
                switch (s) {
                    case "connected":
                        return {
                            address: i,
                            addresses: r,
                            chain: o,
                            chainId: n ? .chainId,
                            connector: n ? .connector,
                            isConnected: !0,
                            isConnecting: !1,
                            isDisconnected: !1,
                            isReconnecting: !1,
                            status: s
                        };
                    case "reconnecting":
                        return {
                            address: i,
                            addresses: r,
                            chain: o,
                            chainId: n ? .chainId,
                            connector: n ? .connector,
                            isConnected: !!i,
                            isConnecting: !1,
                            isDisconnected: !1,
                            isReconnecting: !0,
                            status: s
                        };
                    case "connecting":
                        return {
                            address: i,
                            addresses: r,
                            chain: o,
                            chainId: n ? .chainId,
                            connector: n ? .connector,
                            isConnected: !1,
                            isConnecting: !0,
                            isDisconnected: !1,
                            isReconnecting: !1,
                            status: s
                        };
                    case "disconnected":
                        return {
                            address: void 0,
                            addresses: void 0,
                            chain: void 0,
                            chainId: void 0,
                            connector: void 0,
                            isConnected: !1,
                            isConnecting: !1,
                            isDisconnected: !0,
                            isReconnecting: !1,
                            status: s
                        }
                }
            }
            n.d(t, {
                D: function() {
                    return r
                }
            })
        },
        33281: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return c
                }
            });
            var r = n(72688),
                i = n(93423),
                o = n(96104),
                s = n(99112),
                a = n(85770);
            async function c(e, t = {}) {
                let n;
                if (t.connector) {
                    let {
                        connector: e
                    } = t, [r, i] = await Promise.all([e.getAccounts(), e.getChainId()]);
                    n = {
                        accounts: r,
                        chainId: i,
                        connector: e
                    }
                } else n = e.state.connections.get(e.state.current);
                if (!n) throw new a.aH;
                let c = t.chainId ? ? n.chainId,
                    u = await n.connector.getChainId();
                if (u !== n.chainId) throw new a.XZ({
                    connectionChainId: n.chainId,
                    connectorChainId: u
                });
                let l = n.connector;
                if (l.getClient) return l.getClient({
                    chainId: c
                });
                let d = (0, o.T)(t.account ? ? n.accounts[0]);
                d.address = (0, s.K)(d.address);
                let f = e.chains.find(e => e.id === c),
                    h = await n.connector.getProvider({
                        chainId: c
                    });
                if (t.account && !n.accounts.some(e => e.toLowerCase() === d.address.toLowerCase())) throw new a.JK({
                    address: d.address,
                    connector: l
                });
                return (0, r.e)({
                    account: d,
                    chain: f,
                    name: "Connector Client",
                    transport: e => (function(e, t = {}) {
                        let {
                            key: n = "custom",
                            name: r = "Custom Provider",
                            retryDelay: o
                        } = t;
                        return ({
                            retryCount: s
                        }) => (0, i.q)({
                            key: n,
                            name: r,
                            request: e.request.bind(e),
                            retryCount: t.retryCount ? ? s,
                            retryDelay: o,
                            type: "custom"
                        })
                    })(h)({ ...e,
                        retryCount: 0
                    })
                })
            }
        },
        10878: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return c
                }
            });
            var r = n(58591),
                i = n(6577),
                o = n(61954);
            async function s(e, t) {
                let {
                    allowFailure: n = !0,
                    chainId: r,
                    contracts: s,
                    ...a
                } = t, c = e.getClient({
                    chainId: r
                });
                return (0, o.s)(c, i.A, "multicall")({
                    allowFailure: n,
                    contracts: s,
                    ...a
                })
            }
            var a = n(3796);
            async function c(e, t) {
                let {
                    allowFailure: n = !0,
                    blockNumber: i,
                    blockTag: c,
                    ...u
                } = t, l = t.contracts;
                try {
                    let t = {};
                    for (let [n, r] of l.entries()) {
                        let i = r.chainId ? ? e.state.chainId;
                        t[i] || (t[i] = []), t[i] ? .push({
                            contract: r,
                            index: n
                        })
                    }
                    let r = (await Promise.all(Object.entries(t).map(([t, r]) => s(e, { ...u,
                            allowFailure: n,
                            blockNumber: i,
                            blockTag: c,
                            chainId: Number.parseInt(t),
                            contracts: r.map(({
                                contract: e
                            }) => e)
                        })))).flat(),
                        o = Object.values(t).flatMap(e => e.map(({
                            index: e
                        }) => e));
                    return r.reduce((e, t, n) => (e && (e[o[n]] = t), e), [])
                } catch (s) {
                    if (s instanceof r.uq) throw s;
                    let t = () => l.map(t => (function(e, t) {
                        let {
                            chainId: n,
                            ...r
                        } = t, i = e.getClient({
                            chainId: n
                        });
                        return (0, o.s)(i, a.L, "readContract")(r)
                    })(e, { ...t,
                        blockNumber: i,
                        blockTag: c
                    }));
                    if (n) return (await Promise.allSettled(t())).map(e => "fulfilled" === e.status ? {
                        result: e.value,
                        status: "success"
                    } : {
                        error: e.reason,
                        result: void 0,
                        status: "failure"
                    });
                    return await Promise.all(t())
                }
            }
        },
        30807: function(e, t, n) {
            "use strict";
            n.d(t, {
                u: function() {
                    return o
                }
            });
            var r = n(90331),
                i = n(79886);

            function o(e, t) {
                let {
                    onChange: n
                } = t;
                return e.subscribe(() => (0, i.D)(e), n, {
                    equalityFn(e, t) {
                        let {
                            connector: n,
                            ...i
                        } = e, {
                            connector: o,
                            ...s
                        } = t;
                        return (0, r.v)(i, s) && n ? .id === o ? .id && n ? .uid === o ? .uid
                    }
                })
            }
        },
        86417: function(e, t, n) {
            "use strict";

            function r(e) {
                return e
            }
            n.d(t, {
                K: function() {
                    return r
                }
            })
        },
        40859: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return h
                }
            });
            var r = n(99112),
                i = n(96329),
                o = n(13581),
                s = n(55894),
                a = n(95046),
                c = n(85770),
                u = n(50571),
                l = n(86417);
            let d = /(rabby|trustwallet)/,
                f = {
                    coinbaseWallet: {
                        id: "coinbaseWallet",
                        name: "Coinbase Wallet",
                        provider: e => e ? .coinbaseWalletExtension ? e.coinbaseWalletExtension : p(e, "isCoinbaseWallet")
                    },
                    metaMask: {
                        id: "metaMask",
                        name: "MetaMask",
                        provider: e => p(e, e => {
                            if (!e.isMetaMask || e.isBraveWallet && !e._events && !e._state) return !1;
                            for (let t of ["isApexWallet", "isAvalanche", "isBitKeep", "isBlockWallet", "isKuCoinWallet", "isMathWallet", "isOkxWallet", "isOKExWallet", "isOneInchIOSWallet", "isOneInchAndroidWallet", "isOpera", "isPortal", "isRabby", "isTokenPocket", "isTokenary", "isZerion"])
                                if (e[t]) return !1;
                            return !0
                        })
                    },
                    phantom: {
                        id: "phantom",
                        name: "Phantom",
                        provider: e => e ? .phantom ? .ethereum ? e.phantom ? .ethereum : p(e, "isPhantom")
                    }
                };

            function h(e = {}) {
                let t, n, m, g;
                let {
                    shimDisconnect: y = !0,
                    unstable_shimAsyncInject: b
                } = e;

                function w() {
                    let t = e.target;
                    if ("function" == typeof t) {
                        let e = t();
                        if (e) return e
                    }
                    return "object" == typeof t ? t : "string" == typeof t ? { ...f[t] ? ? {
                            id: t,
                            name: `${t[0].toUpperCase()}${t.slice(1)}`,
                            provider: `is${t[0].toUpperCase()}${t.slice(1)}`
                        }
                    } : {
                        id: "injected",
                        name: "Injected",
                        provider: e => e ? .ethereum
                    }
                }
                return (0, l.K)(l => ({
                    get icon() {
                        return w().icon
                    },
                    get id() {
                        return w().id
                    },
                    get name() {
                        return w().name
                    },
                    get supportsSimulation() {
                        return d.test(this.id.toLowerCase())
                    },
                    type: h.type,
                    async setup() {
                        let n = await this.getProvider();
                        n && e.target && (m || (m = this.onConnect.bind(this), n.on("connect", m)), t || (t = this.onAccountsChanged.bind(this), n.on("accountsChanged", t)))
                    },
                    async connect({
                        chainId: o,
                        isReconnecting: s
                    } = {}) {
                        let a = await this.getProvider();
                        if (!a) throw new u.M;
                        let c = [];
                        if (s) c = await this.getAccounts().catch(() => []);
                        else if (y) try {
                            let e = await a.request({
                                method: "wallet_requestPermissions",
                                params: [{
                                    eth_accounts: {}
                                }]
                            });
                            (c = e[0] ? .caveats ? .[0] ? .value ? .map(e => r.K(e))).length > 0 && (c = await this.getAccounts())
                        } catch (e) {
                            if (e.code === i.ab.code) throw new i.ab(e);
                            if (e.code === i.pT.code) throw e
                        }
                        try {
                            c ? .length || s || (c = (await a.request({
                                method: "eth_requestAccounts"
                            })).map(e => (0, r.K)(e))), m && (a.removeListener("connect", m), m = void 0), t || (t = this.onAccountsChanged.bind(this), a.on("accountsChanged", t)), n || (n = this.onChainChanged.bind(this), a.on("chainChanged", n)), g || (g = this.onDisconnect.bind(this), a.on("disconnect", g));
                            let u = await this.getChainId();
                            if (o && u !== o) {
                                let e = await this.switchChain({
                                    chainId: o
                                }).catch(e => {
                                    if (e.code === i.ab.code) throw e;
                                    return {
                                        id: u
                                    }
                                });
                                u = e ? .id ? ? u
                            }
                            return y && await l.storage ? .removeItem(`${this.id}.disconnected`), e.target || await l.storage ? .setItem("injected.connected", !0), {
                                accounts: c,
                                chainId: u
                            }
                        } catch (e) {
                            if (e.code === i.ab.code) throw new i.ab(e);
                            if (e.code === i.pT.code) throw new i.pT(e);
                            throw e
                        }
                    },
                    async disconnect() {
                        let t = await this.getProvider();
                        if (!t) throw new u.M;
                        n && (t.removeListener("chainChanged", n), n = void 0), g && (t.removeListener("disconnect", g), g = void 0), m || (m = this.onConnect.bind(this), t.on("connect", m));
                        try {
                            await (0, o.F)(() => t.request({
                                method: "wallet_revokePermissions",
                                params: [{
                                    eth_accounts: {}
                                }]
                            }), {
                                timeout: 100
                            })
                        } catch {}
                        y && await l.storage ? .setItem(`${this.id}.disconnected`, !0), e.target || await l.storage ? .removeItem("injected.connected")
                    },
                    async getAccounts() {
                        let e = await this.getProvider();
                        if (!e) throw new u.M;
                        return (await e.request({
                            method: "eth_accounts"
                        })).map(e => (0, r.K)(e))
                    },
                    async getChainId() {
                        let e = await this.getProvider();
                        if (!e) throw new u.M;
                        return Number(await e.request({
                            method: "eth_chainId"
                        }))
                    },
                    async getProvider() {
                        let e;
                        if ("undefined" == typeof window) return;
                        let t = w();
                        return (e = "function" == typeof t.provider ? t.provider(window) : "string" == typeof t.provider ? p(window, t.provider) : t.provider) && !e.removeListener && ("off" in e && "function" == typeof e.off ? e.removeListener = e.off : e.removeListener = () => {}), e
                    },
                    async isAuthorized() {
                        try {
                            if (y && await l.storage ? .getItem(`${this.id}.disconnected`) || !e.target && !await l.storage ? .getItem("injected.connected")) return !1;
                            if (!await this.getProvider()) {
                                if (void 0 !== b && !1 !== b) {
                                    let e = async () => ("undefined" != typeof window && window.removeEventListener("ethereum#initialized", e), !!await this.getProvider()),
                                        t = "number" == typeof b ? b : 1e3;
                                    if (await Promise.race([..."undefined" != typeof window ? [new Promise(t => window.addEventListener("ethereum#initialized", () => t(e()), {
                                            once: !0
                                        }))] : [], new Promise(n => setTimeout(() => n(e()), t))])) return !0
                                }
                                throw new u.M
                            }
                            return !!(await (0, s.J)(() => this.getAccounts())).length
                        } catch {
                            return !1
                        }
                    },
                    async switchChain({
                        addEthereumChainParameter: e,
                        chainId: t
                    }) {
                        let n = await this.getProvider();
                        if (!n) throw new u.M;
                        let r = l.chains.find(e => e.id === t);
                        if (!r) throw new i.x3(new c.X4);
                        try {
                            return await Promise.all([n.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: (0, a.eC)(t)
                                }]
                            }).then(async () => {
                                await this.getChainId() === t && l.emitter.emit("change", {
                                    chainId: t
                                })
                            }), new Promise(e => l.emitter.once("change", ({
                                chainId: n
                            }) => {
                                n === t && e()
                            }))]), r
                        } catch (o) {
                            if (4902 === o.code || o ? .data ? .originalError ? .code === 4902) try {
                                let o, s;
                                let {
                                    default: c,
                                    ...u
                                } = r.blockExplorers ? ? {};
                                e ? .blockExplorerUrls ? o = e.blockExplorerUrls : c && (o = [c.url, ...Object.values(u).map(e => e.url)]), s = e ? .rpcUrls ? .length ? e.rpcUrls : [r.rpcUrls.default ? .http[0] ? ? ""];
                                let l = {
                                    blockExplorerUrls: o,
                                    chainId: (0, a.eC)(t),
                                    chainName: e ? .chainName ? ? r.name,
                                    iconUrls: e ? .iconUrls,
                                    nativeCurrency: e ? .nativeCurrency ? ? r.nativeCurrency,
                                    rpcUrls: s
                                };
                                if (await n.request({
                                        method: "wallet_addEthereumChain",
                                        params: [l]
                                    }), await this.getChainId() !== t) throw new i.ab(Error("User rejected switch after adding network."));
                                return r
                            } catch (e) {
                                throw new i.ab(e)
                            }
                            if (o.code === i.ab.code) throw new i.ab(o);
                            throw new i.x3(o)
                        }
                    },
                    async onAccountsChanged(e) {
                        if (0 === e.length) this.onDisconnect();
                        else if (l.emitter.listenerCount("connect")) {
                            let e = (await this.getChainId()).toString();
                            this.onConnect({
                                chainId: e
                            }), y && await l.storage ? .removeItem(`${this.id}.disconnected`)
                        } else l.emitter.emit("change", {
                            accounts: e.map(e => (0, r.K)(e))
                        })
                    },
                    onChainChanged(e) {
                        let t = Number(e);
                        l.emitter.emit("change", {
                            chainId: t
                        })
                    },
                    async onConnect(e) {
                        let r = await this.getAccounts();
                        if (0 === r.length) return;
                        let i = Number(e.chainId);
                        l.emitter.emit("connect", {
                            accounts: r,
                            chainId: i
                        });
                        let o = await this.getProvider();
                        o && (m && (o.removeListener("connect", m), m = void 0), t || (t = this.onAccountsChanged.bind(this), o.on("accountsChanged", t)), n || (n = this.onChainChanged.bind(this), o.on("chainChanged", n)), g || (g = this.onDisconnect.bind(this), o.on("disconnect", g)))
                    },
                    async onDisconnect(e) {
                        let t = await this.getProvider();
                        e && 1013 === e.code && t && (await this.getAccounts()).length || (l.emitter.emit("disconnect"), t && (n && (t.removeListener("chainChanged", n), n = void 0), g && (t.removeListener("disconnect", g), g = void 0), m || (m = this.onConnect.bind(this), t.on("connect", m))))
                    }
                }))
            }

            function p(e, t) {
                function n(e) {
                    return "function" == typeof t ? t(e) : "string" != typeof t || e[t]
                }
                let r = e.ethereum;
                return r ? .providers ? r.providers.find(e => n(e)) : r && n(r) ? r : void 0
            }
            h.type = "injected"
        },
        54463: function(e, t, n) {
            "use strict";
            let r;
            n.d(t, {
                _: function() {
                    return E
                }
            });
            var i = n(72688);
            let o = e => (t, n, r) => {
                    let i = r.subscribe;
                    return r.subscribe = (e, t, n) => {
                        let o = e;
                        if (t) {
                            let i = (null == n ? void 0 : n.equalityFn) || Object.is,
                                s = e(r.getState());
                            o = n => {
                                let r = e(n);
                                if (!i(s, r)) {
                                    let e = s;
                                    t(s = r, e)
                                }
                            }, (null == n ? void 0 : n.fireImmediately) && t(s, s)
                        }
                        return i(o)
                    }, e(t, n, r)
                },
                s = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => s(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => s(t)(e)
                        }
                    }
                },
                a = (e, t) => (n, r, i) => {
                    let o, a, c = {
                            getStorage: () => localStorage,
                            serialize: JSON.stringify,
                            deserialize: JSON.parse,
                            partialize: e => e,
                            version: 0,
                            merge: (e, t) => ({ ...t,
                                ...e
                            }),
                            ...t
                        },
                        u = !1,
                        l = new Set,
                        d = new Set;
                    try {
                        o = c.getStorage()
                    } catch (e) {}
                    if (!o) return e((...e) => {
                        console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`), n(...e)
                    }, r, i);
                    let f = s(c.serialize),
                        h = () => {
                            let e;
                            let t = f({
                                state: c.partialize({ ...r()
                                }),
                                version: c.version
                            }).then(e => o.setItem(c.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return t
                        },
                        p = i.setState;
                    i.setState = (e, t) => {
                        p(e, t), h()
                    };
                    let m = e((...e) => {
                            n(...e), h()
                        }, r, i),
                        g = () => {
                            var e;
                            if (!o) return;
                            u = !1, l.forEach(e => e(r()));
                            let t = (null == (e = c.onRehydrateStorage) ? void 0 : e.call(c, r())) || void 0;
                            return s(o.getItem.bind(o))(c.name).then(e => {
                                if (e) return c.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === c.version) return e.state;
                                    if (c.migrate) return c.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(a = c.merge(e, null != (t = r()) ? t : m), !0), h()
                            }).then(() => {
                                null == t || t(a, void 0), u = !0, d.forEach(e => e(a))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return i.persist = {
                        setOptions: e => {
                            c = { ...c,
                                ...e
                            }, e.getStorage && (o = e.getStorage())
                        },
                        clearStorage: () => {
                            null == o || o.removeItem(c.name)
                        },
                        getOptions: () => c,
                        rehydrate: () => g(),
                        hasHydrated: () => u,
                        onHydrate: e => (l.add(e), () => {
                            l.delete(e)
                        }),
                        onFinishHydration: e => (d.add(e), () => {
                            d.delete(e)
                        })
                    }, g(), a || m
                },
                c = (e, t) => (n, r, i) => {
                    let o, a = {
                            storage: function(e, t) {
                                let n;
                                try {
                                    n = e()
                                } catch (e) {
                                    return
                                }
                                return {
                                    getItem: e => {
                                        var t;
                                        let r = e => null === e ? null : JSON.parse(e, void 0),
                                            i = null != (t = n.getItem(e)) ? t : null;
                                        return i instanceof Promise ? i.then(r) : r(i)
                                    },
                                    setItem: (e, t) => n.setItem(e, JSON.stringify(t, void 0)),
                                    removeItem: e => n.removeItem(e)
                                }
                            }(() => localStorage),
                            partialize: e => e,
                            version: 0,
                            merge: (e, t) => ({ ...t,
                                ...e
                            }),
                            ...t
                        },
                        c = !1,
                        u = new Set,
                        l = new Set,
                        d = a.storage;
                    if (!d) return e((...e) => {
                        console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`), n(...e)
                    }, r, i);
                    let f = () => {
                            let e = a.partialize({ ...r()
                            });
                            return d.setItem(a.name, {
                                state: e,
                                version: a.version
                            })
                        },
                        h = i.setState;
                    i.setState = (e, t) => {
                        h(e, t), f()
                    };
                    let p = e((...e) => {
                            n(...e), f()
                        }, r, i),
                        m = () => {
                            var e, t;
                            if (!d) return;
                            c = !1, u.forEach(e => {
                                var t;
                                return e(null != (t = r()) ? t : p)
                            });
                            let i = (null == (t = a.onRehydrateStorage) ? void 0 : t.call(a, null != (e = r()) ? e : p)) || void 0;
                            return s(d.getItem.bind(d))(a.name).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === a.version) return e.state;
                                    if (a.migrate) return a.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(o = a.merge(e, null != (t = r()) ? t : p), !0), f()
                            }).then(() => {
                                null == i || i(o, void 0), o = r(), c = !0, l.forEach(e => e(o))
                            }).catch(e => {
                                null == i || i(void 0, e)
                            })
                        };
                    return i.persist = {
                        setOptions: e => {
                            a = { ...a,
                                ...e
                            }, e.storage && (d = e.storage)
                        },
                        clearStorage: () => {
                            null == d || d.removeItem(a.name)
                        },
                        getOptions: () => a,
                        rehydrate: () => m(),
                        hasHydrated: () => c,
                        onHydrate: e => (u.add(e), () => {
                            u.delete(e)
                        }),
                        onFinishHydration: e => (l.add(e), () => {
                            l.delete(e)
                        })
                    }, a.skipHydration || m(), o || p
                },
                u = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? (console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), a(e, t)) : c(e, t),
                l = e => {
                    let t;
                    let n = new Set,
                        r = (e, r) => {
                            let i = "function" == typeof e ? e(t) : e;
                            if (!Object.is(i, t)) {
                                let e = t;
                                t = (null != r ? r : "object" != typeof i) ? i : Object.assign({}, t, i), n.forEach(n => n(t, e))
                            }
                        },
                        i = () => t,
                        o = {
                            setState: r,
                            getState: i,
                            subscribe: e => (n.add(e), () => n.delete(e)),
                            destroy: () => {
                                console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear()
                            }
                        };
                    return t = e(r, i, o), o
                },
                d = e => e ? l(e) : l;
            var f = n(40859),
                h = n(37836);
            class p {
                constructor(e) {
                    Object.defineProperty(this, "uid", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    }), Object.defineProperty(this, "_emitter", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: new h
                    })
                }
                on(e, t) {
                    this._emitter.on(e, t)
                }
                once(e, t) {
                    this._emitter.once(e, t)
                }
                off(e, t) {
                    this._emitter.off(e, t)
                }
                emit(e, ...t) {
                    let n = t[0];
                    this._emitter.emit(e, {
                        uid: this.uid,
                        ...n
                    })
                }
                listenerCount(e) {
                    return this._emitter.listenerCount(e)
                }
            }

            function m(e, t) {
                return JSON.parse(e, (e, n) => {
                    let r = n;
                    return r ? .__type === "bigint" && (r = BigInt(r.value)), r ? .__type === "Map" && (r = new Map(r.value)), t ? .(e, r) ? ? r
                })
            }

            function g(e, t) {
                return e.slice(0, t).join(".") || "."
            }

            function y(e, t) {
                let {
                    length: n
                } = e;
                for (let r = 0; r < n; ++r)
                    if (e[r] === t) return r + 1;
                return 0
            }

            function b(e, t, n, r) {
                return JSON.stringify(e, function(e, t) {
                    let n = "function" == typeof e,
                        r = "function" == typeof t,
                        i = [],
                        o = [];
                    return function(s, a) {
                        if ("object" == typeof a) {
                            if (i.length) {
                                let e = y(i, this);
                                0 === e ? i[i.length] = this : (i.splice(e), o.splice(e)), o[o.length] = s;
                                let n = y(i, a);
                                if (0 !== n) return r ? t.call(this, s, a, g(o, n)) : `[ref=${g(o,n)}]`
                            } else i[0] = a, o[0] = s
                        }
                        return n ? e.call(this, s, a) : a
                    }
                }((e, n) => {
                    let r = n;
                    return "bigint" == typeof r && (r = {
                        __type: "bigint",
                        value: n.toString()
                    }), r instanceof Map && (r = {
                        __type: "Map",
                        value: Array.from(n.entries())
                    }), t ? .(e, r) ? ? r
                }, r), n ? ? void 0)
            }
            let w = {
                getItem: () => null,
                setItem: () => {},
                removeItem: () => {}
            };
            var v = n(85770);
            let A = 256;
            var C = n(52520);

            function E(e) {
                let t;
                let {
                    multiInjectedProviderDiscovery: n = !0,
                    storage: s = function(e) {
                        let {
                            deserialize: t = m,
                            key: n = "wagmi",
                            serialize: r = b,
                            storage: i = w
                        } = e;

                        function o(e) {
                            return e instanceof Promise ? e.then(e => e).catch(() => null) : e
                        }
                        return { ...i,
                            key: n,
                            async getItem(e, r) {
                                let s = i.getItem(`${n}.${e}`),
                                    a = await o(s);
                                return a ? t(a) ? ? null : r ? ? null
                            },
                            async setItem(e, t) {
                                let s = `${n}.${e}`;
                                null === t ? await o(i.removeItem(s)) : await o(i.setItem(s, r(t)))
                            },
                            async removeItem(e) {
                                await o(i.removeItem(`${n}.${e}`))
                            }
                        }
                    }({
                        storage: "undefined" != typeof window && window.localStorage ? window.localStorage : w
                    }),
                    syncConnectedChain: a = !0,
                    ssr: c = !1,
                    ...l
                } = e, h = "undefined" != typeof window && n ? function() {
                    let e = new Set,
                        t = [],
                        n = () => (function(e) {
                            if ("undefined" == typeof window) return;
                            let t = t => e(t.detail);
                            return window.addEventListener("eip6963:announceProvider", t), window.dispatchEvent(new CustomEvent("eip6963:requestProvider")), () => window.removeEventListener("eip6963:announceProvider", t)
                        })(n => {
                            t.some(({
                                info: e
                            }) => e.uuid === n.info.uuid) || (t = [...t, n], e.forEach(e => e(t, {
                                added: [n]
                            })))
                        }),
                        r = n();
                    return {
                        _listeners: () => e,
                        clear() {
                            e.forEach(e => e([], {
                                removed: [...t]
                            })), t = []
                        },
                        destroy() {
                            this.clear(), e.clear(), r ? .()
                        },
                        findProvider: ({
                            rdns: e
                        }) => t.find(t => t.info.rdns === e),
                        getProviders: () => t,
                        reset() {
                            this.clear(), r ? .(), r = n()
                        },
                        subscribe: (n, {
                            emitImmediately: r
                        } = {}) => (e.add(n), r && n(t, {
                            added: t
                        }), () => e.delete(n))
                    }
                }() : void 0, g = d(() => l.chains), y = d(() => [...l.connectors ? ? [], ...c ? [] : h ? .getProviders().map(x) ? ? []].map(E));

                function E(e) {
                    let t = new p(function(e = 11) {
                            if (!r || A + e > 512) {
                                r = "", A = 0;
                                for (let e = 0; e < 256; e++) r += (256 + 256 * Math.random() | 0).toString(16).substring(1)
                            }
                            return r.substring(A, A++ + e)
                        }()),
                        n = { ...e({
                                emitter: t,
                                chains: g.getState(),
                                storage: s,
                                transports: l.transports
                            }),
                            emitter: t,
                            uid: t.uid
                        };
                    return t.on("connect", S), n.setup ? .(), n
                }

                function x(e) {
                    let {
                        info: t
                    } = e, n = e.provider;
                    return (0, f.L)({
                        target: { ...t,
                            id: t.rdns,
                            provider: n
                        }
                    })
                }
                let I = new Map;

                function B() {
                    return {
                        chainId: g.getState()[0].id,
                        connections: new Map,
                        current: null,
                        status: "disconnected"
                    }
                }
                let k = "0.0.0-canary-";
                t = C.i.startsWith(k) ? Number.parseInt(C.i.replace(k, "")) : Number.parseInt(C.i.split(".")[0] ? ? "0");
                let P = d(o(s ? u(B, {
                    migrate(e, n) {
                        if (n === t) return e;
                        let r = B(),
                            i = M(e, r.chainId);
                        return { ...r,
                            chainId: i
                        }
                    },
                    name: "store",
                    partialize: e => ({
                        connections: {
                            __type: "Map",
                            value: Array.from(e.connections.entries()).map(([e, t]) => {
                                let {
                                    id: n,
                                    name: r,
                                    type: i,
                                    uid: o
                                } = t.connector;
                                return [e, { ...t,
                                    connector: {
                                        id: n,
                                        name: r,
                                        type: i,
                                        uid: o
                                    }
                                }]
                            })
                        },
                        chainId: e.chainId,
                        current: e.current
                    }),
                    merge(e, t) {
                        "object" == typeof e && e && "status" in e && delete e.status;
                        let n = M(e, t.chainId);
                        return { ...t,
                            ...e,
                            chainId: n
                        }
                    },
                    skipHydration: c,
                    storage: s,
                    version: t
                }) : B));

                function M(e, t) {
                    return e && "object" == typeof e && "chainId" in e && "number" == typeof e.chainId && g.getState().some(t => t.id === e.chainId) ? e.chainId : t
                }

                function O(e) {
                    P.setState(t => {
                        let n = t.connections.get(e.uid);
                        return n ? { ...t,
                            connections: new Map(t.connections).set(e.uid, {
                                accounts: e.accounts ? ? n.accounts,
                                chainId: e.chainId ? ? n.chainId,
                                connector: n.connector
                            })
                        } : t
                    })
                }

                function S(e) {
                    "connecting" !== P.getState().status && "reconnecting" !== P.getState().status && P.setState(t => {
                        let n = y.getState().find(t => t.uid === e.uid);
                        return n ? (n.emitter.listenerCount("connect") && n.emitter.off("connect", O), n.emitter.listenerCount("change") || n.emitter.on("change", O), n.emitter.listenerCount("disconnect") || n.emitter.on("disconnect", R), { ...t,
                            connections: new Map(t.connections).set(e.uid, {
                                accounts: e.accounts,
                                chainId: e.chainId,
                                connector: n
                            }),
                            current: e.uid,
                            status: "connected"
                        }) : t
                    })
                }

                function R(e) {
                    P.setState(t => {
                        let n = t.connections.get(e.uid);
                        if (n) {
                            let e = n.connector;
                            e.emitter.listenerCount("change") && n.connector.emitter.off("change", O), e.emitter.listenerCount("disconnect") && n.connector.emitter.off("disconnect", R), e.emitter.listenerCount("connect") || n.connector.emitter.on("connect", S)
                        }
                        if (t.connections.delete(e.uid), 0 === t.connections.size) return { ...t,
                            connections: new Map,
                            current: null,
                            status: "disconnected"
                        };
                        let r = t.connections.values().next().value;
                        return { ...t,
                            connections: new Map(t.connections),
                            current: r.connector.uid
                        }
                    })
                }
                return a && P.subscribe(({
                    connections: e,
                    current: t
                }) => t ? e.get(t) ? .chainId : void 0, e => {
                    if (g.getState().some(t => t.id === e)) return P.setState(t => ({ ...t,
                        chainId: e ? ? t.chainId
                    }))
                }), h ? .subscribe(e => {
                    let t = new Map;
                    for (let e of y.getState()) t.set(e.id, !0);
                    let n = [];
                    for (let r of e) {
                        let e = E(x(r));
                        t.has(e.id) || n.push(e)
                    }(!s || P.persist.hasHydrated()) && y.setState(e => [...e, ...n], !0)
                }), {
                    get chains() {
                        return g.getState()
                    },
                    get connectors() {
                        return y.getState()
                    },
                    storage: s,
                    getClient: function(e = {}) {
                        let t;
                        let n = e.chainId ? ? P.getState().chainId,
                            r = g.getState().find(e => e.id === n);
                        if (e.chainId && !r) throw new v.X4; {
                            let e = I.get(P.getState().chainId);
                            if (e && !r) return e;
                            if (!r) throw new v.X4
                        } {
                            let e = I.get(n);
                            if (e) return e
                        }
                        if (l.client) t = l.client({
                            chain: r
                        });
                        else {
                            let e = r.id,
                                n = g.getState().map(e => e.id),
                                o = {};
                            for (let [t, r] of Object.entries(l))
                                if ("chains" !== t && "client" !== t && "connectors" !== t && "transports" !== t) {
                                    if ("object" == typeof r) {
                                        if (e in r) o[t] = r[e];
                                        else {
                                            if (n.some(e => e in r)) continue;
                                            o[t] = r
                                        }
                                    } else o[t] = r
                                }
                            t = (0, i.e)({ ...o,
                                chain: r,
                                batch: o.batch ? ? {
                                    multicall: !0
                                },
                                transport: t => l.transports[e]({ ...t,
                                    connectors: y
                                })
                            })
                        }
                        return I.set(n, t), t
                    },
                    get state() {
                        return P.getState()
                    },
                    setState(e) {
                        let t;
                        t = "function" == typeof e ? e(P.getState()) : e;
                        let n = B();
                        "object" != typeof t && (t = n), Object.keys(n).some(e => !(e in t)) && (t = n), P.setState(t, !0)
                    },
                    subscribe: (e, t, n) => P.subscribe(e, t, n ? { ...n,
                        fireImmediately: n.emitImmediately
                    } : void 0),
                    _internal: {
                        mipd: h,
                        store: P,
                        ssr: !!c,
                        syncConnectedChain: a,
                        transports: l.transports,
                        chains: {
                            setState(e) {
                                let t = "function" == typeof e ? e(g.getState()) : e;
                                if (0 !== t.length) return g.setState(t, !0)
                            },
                            subscribe: e => g.subscribe(e)
                        },
                        connectors: {
                            providerDetailToConnector: x,
                            setup: E,
                            setState: e => y.setState("function" == typeof e ? e(y.getState()) : e, !0),
                            subscribe: e => y.subscribe(e)
                        },
                        events: {
                            change: O,
                            connect: S,
                            disconnect: R
                        }
                    }
                }
            }
        },
        66564: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return c
                }
            });
            var r, i, o = n(52520);
            let s = () => `@wagmi/core@${o.i}`;
            var a = function(e, t, n, r) {
                if ("a" === n && !r) throw TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
            };
            class c extends Error {
                get docsBaseUrl() {
                    return "https://wagmi.sh/core"
                }
                get version() {
                    return s()
                }
                constructor(e, t = {}) {
                    super(), r.add(this), Object.defineProperty(this, "details", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "docsPath", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "metaMessages", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "shortMessage", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "WagmiCoreError"
                    });
                    let n = t.cause instanceof c ? t.cause.details : t.cause ? .message ? t.cause.message : t.details,
                        i = t.cause instanceof c && t.cause.docsPath || t.docsPath;
                    this.message = [e || "An error occurred.", "", ...t.metaMessages ? [...t.metaMessages, ""] : [], ...i ? [`Docs: ${this.docsBaseUrl}${i}.html${t.docsSlug?`#${t.docsSlug}`:""}`] : [], ...n ? [`Details: ${n}`] : [], `Version: ${this.version}`].join("\n"), t.cause && (this.cause = t.cause), this.details = n, this.docsPath = i, this.metaMessages = t.metaMessages, this.shortMessage = e
                }
                walk(e) {
                    return a(this, r, "m", i).call(this, this, e)
                }
            }
            r = new WeakSet, i = function e(t, n) {
                return n ? .(t) ? t : t.cause ? a(this, r, "m", e).call(this, t.cause, n) : t
            }
        },
        85770: function(e, t, n) {
            "use strict";
            n.d(t, {
                JK: function() {
                    return a
                },
                X4: function() {
                    return i
                },
                XZ: function() {
                    return c
                },
                aH: function() {
                    return s
                },
                wi: function() {
                    return o
                }
            });
            var r = n(66564);
            class i extends r.G {
                constructor() {
                    super("Chain not configured."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainNotConfiguredError"
                    })
                }
            }
            class o extends r.G {
                constructor() {
                    super("Connector already connected."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ConnectorAlreadyConnectedError"
                    })
                }
            }
            class s extends r.G {
                constructor() {
                    super("Connector not connected."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ConnectorNotConnectedError"
                    })
                }
            }
            class a extends r.G {
                constructor({
                    address: e,
                    connector: t
                }) {
                    super(`Account "${e}" not found for connector "${t.name}".`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ConnectorAccountNotFoundError"
                    })
                }
            }
            class c extends r.G {
                constructor({
                    connectionChainId: e,
                    connectorChainId: t
                }) {
                    super(`The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`, {
                        metaMessages: [`Current Chain ID:  ${t}`, `Expected Chain ID: ${e}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ConnectorChainMismatchError"
                    })
                }
            }
        },
        50571: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return i
                },
                O: function() {
                    return o
                }
            });
            var r = n(66564);
            class i extends r.G {
                constructor() {
                    super("Provider not found."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ProviderNotFoundError"
                    })
                }
            }
            class o extends r.G {
                constructor({
                    connector: e
                }) {
                    super(`"${e.name}" does not support programmatic chain switching.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SwitchChainNotSupportedError"
                    })
                }
            }
        },
        34954: function(e, t, n) {
            "use strict";
            n.d(t, {
                OP: function() {
                    return c
                },
                if: function() {
                    return o
                },
                kq: function() {
                    return s
                }
            });
            var r = n(56298),
                i = n(90331);

            function o(e, t) {
                return (0, i.v)(e, t) ? e : (0, r.Q$)(e, t)
            }

            function s(e) {
                return JSON.stringify(e, (e, t) => ! function(e) {
                    if (!a(e)) return !1;
                    let t = e.constructor;
                    if (void 0 === t) return !0;
                    let n = t.prototype;
                    return !!(a(n) && n.hasOwnProperty("isPrototypeOf"))
                }(t) ? "bigint" == typeof t ? t.toString() : t : Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}))
            }

            function a(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function c(e) {
                let {
                    _defaulted: t,
                    behavior: n,
                    gcTime: r,
                    initialData: i,
                    initialDataUpdatedAt: o,
                    maxPages: s,
                    meta: a,
                    networkMode: c,
                    queryFn: u,
                    queryHash: l,
                    queryKey: d,
                    queryKeyHashFn: f,
                    retry: h,
                    retryDelay: p,
                    structuralSharing: m,
                    getPreviousPageParam: g,
                    getNextPageParam: y,
                    initialPageParam: b,
                    _optimisticResults: w,
                    enabled: v,
                    notifyOnChangeProps: A,
                    placeholderData: C,
                    refetchInterval: E,
                    refetchIntervalInBackground: x,
                    refetchOnMount: I,
                    refetchOnReconnect: B,
                    refetchOnWindowFocus: k,
                    retryOnMount: P,
                    select: M,
                    staleTime: O,
                    suspense: S,
                    throwOnError: R,
                    config: T,
                    connector: N,
                    query: F,
                    ...D
                } = e;
                return D
            }
        },
        90331: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return function e(t, n) {
                        if (t === n) return !0;
                        if (t && n && "object" == typeof t && "object" == typeof n) {
                            let r, i;
                            if (t.constructor !== n.constructor) return !1;
                            if (Array.isArray(t) && Array.isArray(n)) {
                                if ((r = t.length) !== n.length) return !1;
                                for (i = r; 0 != i--;)
                                    if (!e(t[i], n[i])) return !1;
                                return !0
                            }
                            if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
                            if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
                            let o = Object.keys(t);
                            if ((r = o.length) !== Object.keys(n).length) return !1;
                            for (i = r; 0 != i--;)
                                if (!Object.prototype.hasOwnProperty.call(n, o[i])) return !1;
                            for (i = r; 0 != i--;) {
                                let r = o[i];
                                if (r && !e(t[r], n[r])) return !1
                            }
                            return !0
                        }
                        return t != t && n != n
                    }
                }
            })
        },
        61954: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                let r = e[t.name];
                if ("function" == typeof r) return r;
                let i = e[n];
                return "function" == typeof i ? i : n => t(e, n)
            }
            n.d(t, {
                s: function() {
                    return r
                }
            })
        },
        52520: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return r
                }
            });
            let r = "2.13.4"
        },
        43197: function(e, t, n) {
            "use strict";

            function r(e, t) {
                let n = e.exec(t);
                return n ? .groups
            }
            n.d(t, {
                Zw: function() {
                    return r
                },
                cN: function() {
                    return s
                },
                eL: function() {
                    return i
                },
                lh: function() {
                    return o
                }
            });
            let i = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
                o = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
                s = /^\(.+?\).*?$/
        },
        44839: function(e, t, n) {
            "use strict";
            t.Z = function() {
                for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)(e = arguments[n]) && (t = function e(t) {
                    var n, r, i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var o = t.length;
                            for (n = 0; n < o; n++) t[n] && (r = e(t[n])) && (i && (i += " "), i += r)
                        } else
                            for (r in t) t[r] && (i && (i += " "), i += r)
                    }
                    return i
                }(e)) && (r && (r += " "), r += t);
                return r
            }
        },
        95956: function(e, t, n) {
            "use strict";
            n.d(t, {
                Am: function() {
                    return B
                },
                ToastContainer: function() {
                    return N
                }
            });
            var r = n(2265),
                i = n(44839);
            let o = e => "number" == typeof e && !isNaN(e),
                s = e => "string" == typeof e,
                a = e => "function" == typeof e,
                c = e => s(e) || a(e) ? e : null,
                u = e => (0, r.isValidElement)(e) || s(e) || a(e) || o(e);

            function l(e) {
                let {
                    enter: t,
                    exit: n,
                    appendPosition: i = !1,
                    collapse: o = !0,
                    collapseDuration: s = 300
                } = e;
                return function(e) {
                    let {
                        children: a,
                        position: c,
                        preventExitTransition: u,
                        done: l,
                        nodeRef: d,
                        isIn: f,
                        playToast: h
                    } = e, p = i ? "".concat(t, "--").concat(c) : t, m = i ? "".concat(n, "--").concat(c) : n, g = (0, r.useRef)(0);
                    return (0, r.useLayoutEffect)(() => {
                        let e = d.current,
                            t = p.split(" "),
                            n = r => {
                                r.target === d.current && (h(), e.removeEventListener("animationend", n), e.removeEventListener("animationcancel", n), 0 === g.current && "animationcancel" !== r.type && e.classList.remove(...t))
                            };
                        e.classList.add(...t), e.addEventListener("animationend", n), e.addEventListener("animationcancel", n)
                    }, []), (0, r.useEffect)(() => {
                        let e = d.current,
                            t = () => {
                                e.removeEventListener("animationend", t), o ? function(e, t, n) {
                                    void 0 === n && (n = 300);
                                    let {
                                        scrollHeight: r,
                                        style: i
                                    } = e;
                                    requestAnimationFrame(() => {
                                        i.minHeight = "initial", i.height = r + "px", i.transition = "all ".concat(n, "ms"), requestAnimationFrame(() => {
                                            i.height = "0", i.padding = "0", i.margin = "0", setTimeout(t, n)
                                        })
                                    })
                                }(e, l, s) : l()
                            };
                        f || (u ? t() : (g.current = 1, e.className += " ".concat(m), e.addEventListener("animationend", t)))
                    }, [f]), r.createElement(r.Fragment, null, a)
                }
            }

            function d(e, t) {
                return null != e ? {
                    content: e.content,
                    containerId: e.props.containerId,
                    id: e.props.toastId,
                    theme: e.props.theme,
                    type: e.props.type,
                    data: e.props.data || {},
                    isLoading: e.props.isLoading,
                    icon: e.props.icon,
                    status: t
                } : {}
            }
            let f = new Map,
                h = [],
                p = new Set,
                m = e => p.forEach(t => t(e)),
                g = () => f.size > 0;

            function y(e, t) {
                var n;
                if (t) return !(null == (n = f.get(t)) || !n.isToastActive(e));
                let r = !1;
                return f.forEach(t => {
                    t.isToastActive(e) && (r = !0)
                }), r
            }

            function b(e, t) {
                u(e) && (g() || h.push({
                    content: e,
                    options: t
                }), f.forEach(n => {
                    n.buildToast(e, t)
                }))
            }

            function w(e, t) {
                f.forEach(n => {
                    null != t && null != t && t.containerId ? (null == t ? void 0 : t.containerId) === n.id && n.toggle(e, null == t ? void 0 : t.id) : n.toggle(e, null == t ? void 0 : t.id)
                })
            }

            function v(e) {
                let {
                    delay: t,
                    isRunning: n,
                    closeToast: o,
                    type: s = "default",
                    hide: c,
                    className: u,
                    style: l,
                    controlledProgress: d,
                    progress: f,
                    rtl: h,
                    isIn: p,
                    theme: m
                } = e, g = c || d && 0 === f, y = { ...l,
                    animationDuration: "".concat(t, "ms"),
                    animationPlayState: n ? "running" : "paused"
                };
                d && (y.transform = "scaleX(".concat(f, ")"));
                let b = (0, i.Z)("Toastify__progress-bar", d ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", "Toastify__progress-bar-theme--".concat(m), "Toastify__progress-bar--".concat(s), {
                        "Toastify__progress-bar--rtl": h
                    }),
                    w = a(u) ? u({
                        rtl: h,
                        type: s,
                        defaultClassName: b
                    }) : (0, i.Z)(b, u);
                return r.createElement("div", {
                    className: "Toastify__progress-bar--wrp",
                    "data-hidden": g
                }, r.createElement("div", {
                    className: "Toastify__progress-bar--bg Toastify__progress-bar-theme--".concat(m, " Toastify__progress-bar--").concat(s)
                }), r.createElement("div", {
                    role: "progressbar",
                    "aria-hidden": g ? "true" : "false",
                    "aria-label": "notification timer",
                    className: w,
                    style: y,
                    [d && f >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: d && f < 1 ? null : () => {
                        p && o()
                    }
                }))
            }
            let A = 1,
                C = () => "" + A++;

            function E(e, t) {
                return b(e, t), t.toastId
            }

            function x(e, t) {
                return { ...t,
                    type: t && t.type || e,
                    toastId: t && (s(t.toastId) || o(t.toastId)) ? t.toastId : C()
                }
            }

            function I(e) {
                return (t, n) => E(t, x(e, n))
            }

            function B(e, t) {
                return E(e, x("default", t))
            }
            B.loading = (e, t) => E(e, x("default", {
                isLoading: !0,
                autoClose: !1,
                closeOnClick: !1,
                closeButton: !1,
                draggable: !1,
                ...t
            })), B.promise = function(e, t, n) {
                let r, {
                    pending: i,
                    error: o,
                    success: c
                } = t;
                i && (r = s(i) ? B.loading(i, n) : B.loading(i.render, { ...n,
                    ...i
                }));
                let u = {
                        isLoading: null,
                        autoClose: null,
                        closeOnClick: null,
                        closeButton: null,
                        draggable: null
                    },
                    l = (e, t, i) => {
                        if (null == t) return void B.dismiss(r);
                        let o = {
                                type: e,
                                ...u,
                                ...n,
                                data: i
                            },
                            a = s(t) ? {
                                render: t
                            } : t;
                        return r ? B.update(r, { ...o,
                            ...a
                        }) : B(a.render, { ...o,
                            ...a
                        }), i
                    },
                    d = a(e) ? e() : e;
                return d.then(e => l("success", c, e)).catch(e => l("error", o, e)), d
            }, B.success = I("success"), B.info = I("info"), B.error = I("error"), B.warning = I("warning"), B.warn = B.warning, B.dark = (e, t) => E(e, x("default", {
                theme: "dark",
                ...t
            })), B.dismiss = function(e) {
                ! function(e) {
                    var t;
                    if (g()) {
                        if (null == e || s(t = e) || o(t)) f.forEach(t => {
                            t.removeToast(e)
                        });
                        else if (e && ("containerId" in e || "id" in e)) {
                            let t = f.get(e.containerId);
                            t ? t.removeToast(e.id) : f.forEach(t => {
                                t.removeToast(e.id)
                            })
                        }
                    } else h = h.filter(t => null != e && t.options.toastId !== e)
                }(e)
            }, B.clearWaitingQueue = function(e) {
                void 0 === e && (e = {}), f.forEach(t => {
                    !t.props.limit || e.containerId && t.id !== e.containerId || t.clearQueue()
                })
            }, B.isActive = y, B.update = function(e, t) {
                void 0 === t && (t = {});
                let n = ((e, t) => {
                    var n;
                    let {
                        containerId: r
                    } = t;
                    return null == (n = f.get(r || 1)) ? void 0 : n.toasts.get(e)
                })(e, t);
                if (n) {
                    let {
                        props: r,
                        content: i
                    } = n, o = {
                        delay: 100,
                        ...r,
                        ...t,
                        toastId: t.toastId || e,
                        updateId: C()
                    };
                    o.toastId !== e && (o.staleId = e);
                    let s = o.render || i;
                    delete o.render, E(s, o)
                }
            }, B.done = e => {
                B.update(e, {
                    progress: 1
                })
            }, B.onChange = function(e) {
                return p.add(e), () => {
                    p.delete(e)
                }
            }, B.play = e => w(!0, e), B.pause = e => w(!1, e);
            let k = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
                P = e => {
                    let {
                        theme: t,
                        type: n,
                        isLoading: i,
                        ...o
                    } = e;
                    return r.createElement("svg", {
                        viewBox: "0 0 24 24",
                        width: "100%",
                        height: "100%",
                        fill: "colored" === t ? "currentColor" : "var(--toastify-icon-color-".concat(n, ")"),
                        ...o
                    })
                },
                M = {
                    info: function(e) {
                        return r.createElement(P, { ...e
                        }, r.createElement("path", {
                            d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
                        }))
                    },
                    warning: function(e) {
                        return r.createElement(P, { ...e
                        }, r.createElement("path", {
                            d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
                        }))
                    },
                    success: function(e) {
                        return r.createElement(P, { ...e
                        }, r.createElement("path", {
                            d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
                        }))
                    },
                    error: function(e) {
                        return r.createElement(P, { ...e
                        }, r.createElement("path", {
                            d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
                        }))
                    },
                    spinner: function() {
                        return r.createElement("div", {
                            className: "Toastify__spinner"
                        })
                    }
                },
                O = e => {
                    let {
                        isRunning: t,
                        preventExitTransition: n,
                        toastRef: o,
                        eventHandlers: s,
                        playToast: c
                    } = function(e) {
                        var t, n;
                        let [i, o] = (0, r.useState)(!1), [s, a] = (0, r.useState)(!1), c = (0, r.useRef)(null), u = (0, r.useRef)({
                            start: 0,
                            delta: 0,
                            removalDistance: 0,
                            canCloseOnClick: !0,
                            canDrag: !1,
                            didMove: !1
                        }).current, {
                            autoClose: l,
                            pauseOnHover: d,
                            closeToast: h,
                            onClick: p,
                            closeOnClick: m
                        } = e;

                        function g() {
                            o(!0)
                        }

                        function y() {
                            o(!1)
                        }

                        function b(t) {
                            let n = c.current;
                            u.canDrag && n && (u.didMove = !0, i && y(), u.delta = "x" === e.draggableDirection ? t.clientX - u.start : t.clientY - u.start, u.start !== t.clientX && (u.canCloseOnClick = !1), n.style.transform = "translate3d(".concat("x" === e.draggableDirection ? "".concat(u.delta, "px, var(--y)") : "0, calc(".concat(u.delta, "px + var(--y))"), ",0)"), n.style.opacity = "" + (1 - Math.abs(u.delta / u.removalDistance)))
                        }

                        function w() {
                            document.removeEventListener("pointermove", b), document.removeEventListener("pointerup", w);
                            let t = c.current;
                            if (u.canDrag && u.didMove && t) {
                                if (u.canDrag = !1, Math.abs(u.delta) > u.removalDistance) return a(!0), e.closeToast(), void e.collapseAll();
                                t.style.transition = "transform 0.2s, opacity 0.2s", t.style.removeProperty("transform"), t.style.removeProperty("opacity")
                            }
                        }
                        null == (n = f.get((t = {
                            id: e.toastId,
                            containerId: e.containerId,
                            fn: o
                        }).containerId || 1)) || n.setToggle(t.id, t.fn), (0, r.useEffect)(() => {
                            if (e.pauseOnFocusLoss) return document.hasFocus() || y(), window.addEventListener("focus", g), window.addEventListener("blur", y), () => {
                                window.removeEventListener("focus", g), window.removeEventListener("blur", y)
                            }
                        }, [e.pauseOnFocusLoss]);
                        let v = {
                            onPointerDown: function(t) {
                                if (!0 === e.draggable || e.draggable === t.pointerType) {
                                    u.didMove = !1, document.addEventListener("pointermove", b), document.addEventListener("pointerup", w);
                                    let n = c.current;
                                    u.canCloseOnClick = !0, u.canDrag = !0, n.style.transition = "none", "x" === e.draggableDirection ? (u.start = t.clientX, u.removalDistance = n.offsetWidth * (e.draggablePercent / 100)) : (u.start = t.clientY, u.removalDistance = n.offsetHeight * (80 === e.draggablePercent ? 1.5 * e.draggablePercent : e.draggablePercent) / 100)
                                }
                            },
                            onPointerUp: function(t) {
                                let {
                                    top: n,
                                    bottom: r,
                                    left: i,
                                    right: o
                                } = c.current.getBoundingClientRect();
                                "touchend" !== t.nativeEvent.type && e.pauseOnHover && t.clientX >= i && t.clientX <= o && t.clientY >= n && t.clientY <= r ? y() : g()
                            }
                        };
                        return l && d && (v.onMouseEnter = y, e.stacked || (v.onMouseLeave = g)), m && (v.onClick = e => {
                            p && p(e), u.canCloseOnClick && h()
                        }), {
                            playToast: g,
                            pauseToast: y,
                            isRunning: i,
                            preventExitTransition: s,
                            toastRef: c,
                            eventHandlers: v
                        }
                    }(e), {
                        closeButton: u,
                        children: l,
                        autoClose: d,
                        onClick: h,
                        type: p,
                        hideProgressBar: m,
                        closeToast: g,
                        transition: y,
                        position: b,
                        className: w,
                        style: A,
                        bodyClassName: C,
                        bodyStyle: E,
                        progressClassName: x,
                        progressStyle: I,
                        updateId: B,
                        role: k,
                        progress: P,
                        rtl: O,
                        toastId: S,
                        deleteToast: R,
                        isIn: T,
                        isLoading: N,
                        closeOnClick: F,
                        theme: D
                    } = e, U = (0, i.Z)("Toastify__toast", "Toastify__toast-theme--".concat(D), "Toastify__toast--".concat(p), {
                        "Toastify__toast--rtl": O
                    }, {
                        "Toastify__toast--close-on-click": F
                    }), L = a(w) ? w({
                        rtl: O,
                        position: b,
                        type: p,
                        defaultClassName: U
                    }) : (0, i.Z)(U, w), q = function(e) {
                        let {
                            theme: t,
                            type: n,
                            isLoading: i,
                            icon: o
                        } = e, s = null, c = {
                            theme: t,
                            type: n
                        };
                        return !1 === o || (a(o) ? s = o({ ...c,
                            isLoading: i
                        }) : (0, r.isValidElement)(o) ? s = (0, r.cloneElement)(o, c) : i ? s = M.spinner() : n in M && (s = M[n](c))), s
                    }(e), Q = !!P || !d, j = {
                        closeToast: g,
                        type: p,
                        theme: D
                    }, G = null;
                    return !1 === u || (G = a(u) ? u(j) : (0, r.isValidElement)(u) ? (0, r.cloneElement)(u, j) : function(e) {
                        let {
                            closeToast: t,
                            theme: n,
                            ariaLabel: i = "close"
                        } = e;
                        return r.createElement("button", {
                            className: "Toastify__close-button Toastify__close-button--".concat(n),
                            type: "button",
                            onClick: e => {
                                e.stopPropagation(), t(e)
                            },
                            "aria-label": i
                        }, r.createElement("svg", {
                            "aria-hidden": "true",
                            viewBox: "0 0 14 16"
                        }, r.createElement("path", {
                            fillRule: "evenodd",
                            d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
                        })))
                    }(j)), r.createElement(y, {
                        isIn: T,
                        done: R,
                        position: b,
                        preventExitTransition: n,
                        nodeRef: o,
                        playToast: c
                    }, r.createElement("div", {
                        id: S,
                        onClick: h,
                        "data-in": T,
                        className: L,
                        ...s,
                        style: A,
                        ref: o
                    }, r.createElement("div", { ...T && {
                            role: k
                        },
                        className: a(C) ? C({
                            type: p
                        }) : (0, i.Z)("Toastify__toast-body", C),
                        style: E
                    }, null != q && r.createElement("div", {
                        className: (0, i.Z)("Toastify__toast-icon", {
                            "Toastify--animate-icon Toastify__zoom-enter": !N
                        })
                    }, q), r.createElement("div", null, l)), G, r.createElement(v, { ...B && !Q ? {
                            key: "pb-".concat(B)
                        } : {},
                        rtl: O,
                        theme: D,
                        delay: d,
                        isRunning: t,
                        isIn: T,
                        closeToast: g,
                        hide: m,
                        type: p,
                        style: I,
                        className: x,
                        controlledProgress: Q,
                        progress: P || 0
                    })))
                },
                S = function(e, t) {
                    return void 0 === t && (t = !1), {
                        enter: "Toastify--animate Toastify__".concat(e, "-enter"),
                        exit: "Toastify--animate Toastify__".concat(e, "-exit"),
                        appendPosition: t
                    }
                },
                R = l(S("bounce", !0)),
                T = (l(S("slide", !0)), l(S("zoom")), l(S("flip")), {
                    position: "top-right",
                    transition: R,
                    autoClose: 5e3,
                    closeButton: !0,
                    pauseOnHover: !0,
                    pauseOnFocusLoss: !0,
                    draggable: "touch",
                    draggablePercent: 80,
                    draggableDirection: "x",
                    role: "alert",
                    theme: "light"
                });

            function N(e) {
                let t = { ...T,
                        ...e
                    },
                    n = e.stacked,
                    [l, p] = (0, r.useState)(!0),
                    g = (0, r.useRef)(null),
                    {
                        getToastToRender: w,
                        isToastActive: v,
                        count: A
                    } = function(e) {
                        let {
                            subscribe: t,
                            getSnapshot: n,
                            setProps: i
                        } = (0, r.useRef)(function(e) {
                            let t = e.containerId || 1;
                            return {
                                subscribe(n) {
                                    let i = function(e, t, n) {
                                        let i = 1,
                                            l = 0,
                                            f = [],
                                            h = [],
                                            p = [],
                                            m = t,
                                            g = new Map,
                                            y = new Set,
                                            b = () => {
                                                p = Array.from(g.values()), y.forEach(e => e())
                                            },
                                            w = e => {
                                                h = null == e ? [] : h.filter(t => t !== e), b()
                                            },
                                            v = e => {
                                                let {
                                                    toastId: t,
                                                    onOpen: i,
                                                    updateId: o,
                                                    children: s
                                                } = e.props, c = null == o;
                                                e.staleId && g.delete(e.staleId), g.set(t, e), h = [...h, e.props.toastId].filter(t => t !== e.staleId), b(), n(d(e, c ? "added" : "updated")), c && a(i) && i((0, r.isValidElement)(s) && s.props)
                                            };
                                        return {
                                            id: e,
                                            props: m,
                                            observe: e => (y.add(e), () => y.delete(e)),
                                            toggle: (e, t) => {
                                                g.forEach(n => {
                                                    null != t && t !== n.props.toastId || a(n.toggle) && n.toggle(e)
                                                })
                                            },
                                            removeToast: w,
                                            toasts: g,
                                            clearQueue: () => {
                                                l -= f.length, f = []
                                            },
                                            buildToast: (t, h) => {
                                                var p, y;
                                                if ((t => {
                                                        let {
                                                            containerId: n,
                                                            toastId: r,
                                                            updateId: i
                                                        } = t, o = g.has(r) && null == i;
                                                        return (n ? n !== e : 1 !== e) || o
                                                    })(h)) return;
                                                let {
                                                    toastId: A,
                                                    updateId: C,
                                                    data: E,
                                                    staleId: x,
                                                    delay: I
                                                } = h, B = () => {
                                                    w(A)
                                                }, k = null == C;
                                                k && l++;
                                                let P = { ...m,
                                                    style: m.toastStyle,
                                                    key: i++,
                                                    ...Object.fromEntries(Object.entries(h).filter(e => {
                                                        let [t, n] = e;
                                                        return null != n
                                                    })),
                                                    toastId: A,
                                                    updateId: C,
                                                    data: E,
                                                    closeToast: B,
                                                    isIn: !1,
                                                    className: c(h.className || m.toastClassName),
                                                    bodyClassName: c(h.bodyClassName || m.bodyClassName),
                                                    progressClassName: c(h.progressClassName || m.progressClassName),
                                                    autoClose: !h.isLoading && (p = h.autoClose, y = m.autoClose, !1 === p || o(p) && p > 0 ? p : y),
                                                    deleteToast() {
                                                        let e = g.get(A),
                                                            {
                                                                onClose: t,
                                                                children: i
                                                            } = e.props;
                                                        a(t) && t((0, r.isValidElement)(i) && i.props), n(d(e, "removed")), g.delete(A), --l < 0 && (l = 0), f.length > 0 ? v(f.shift()) : b()
                                                    }
                                                };
                                                P.closeButton = m.closeButton, !1 === h.closeButton || u(h.closeButton) ? P.closeButton = h.closeButton : !0 === h.closeButton && (P.closeButton = !u(m.closeButton) || m.closeButton);
                                                let M = t;
                                                (0, r.isValidElement)(t) && !s(t.type) ? M = (0, r.cloneElement)(t, {
                                                    closeToast: B,
                                                    toastProps: P,
                                                    data: E
                                                }) : a(t) && (M = t({
                                                    closeToast: B,
                                                    toastProps: P,
                                                    data: E
                                                }));
                                                let O = {
                                                    content: M,
                                                    props: P,
                                                    staleId: x
                                                };
                                                m.limit && m.limit > 0 && l > m.limit && k ? f.push(O) : o(I) ? setTimeout(() => {
                                                    v(O)
                                                }, I) : v(O)
                                            },
                                            setProps(e) {
                                                m = e
                                            },
                                            setToggle: (e, t) => {
                                                g.get(e).toggle = t
                                            },
                                            isToastActive: e => h.some(t => t === e),
                                            getSnapshot: () => m.newestOnTop ? p.reverse() : p
                                        }
                                    }(t, e, m);
                                    f.set(t, i);
                                    let l = i.observe(n);
                                    return h.forEach(e => b(e.content, e.options)), h = [], () => {
                                        l(), f.delete(t)
                                    }
                                },
                                setProps(e) {
                                    var n;
                                    null == (n = f.get(t)) || n.setProps(e)
                                },
                                getSnapshot() {
                                    var e;
                                    return null == (e = f.get(t)) ? void 0 : e.getSnapshot()
                                }
                            }
                        }(e)).current;
                        i(e);
                        let l = (0, r.useSyncExternalStore)(t, n, n);
                        return {
                            getToastToRender: function(e) {
                                if (!l) return [];
                                let t = new Map;
                                return l.forEach(e => {
                                    let {
                                        position: n
                                    } = e.props;
                                    t.has(n) || t.set(n, []), t.get(n).push(e)
                                }), Array.from(t, t => e(t[0], t[1]))
                            },
                            isToastActive: y,
                            count: null == l ? void 0 : l.length
                        }
                    }(t),
                    {
                        className: C,
                        style: E,
                        rtl: x,
                        containerId: I
                    } = t;

                function P() {
                    n && (p(!0), B.play())
                }
                return k(() => {
                    if (n) {
                        var e;
                        let n = g.current.querySelectorAll('[data-in="true"]'),
                            r = null == (e = t.position) ? void 0 : e.includes("top"),
                            i = 0,
                            o = 0;
                        Array.from(n).reverse().forEach((e, t) => {
                            e.classList.add("Toastify__toast--stacked"), t > 0 && (e.dataset.collapsed = "".concat(l)), e.dataset.pos || (e.dataset.pos = r ? "top" : "bot");
                            let n = i * (l ? .2 : 1) + (l ? 0 : 12 * t);
                            e.style.setProperty("--y", "".concat(r ? n : -1 * n, "px")), e.style.setProperty("--g", "".concat(12)), e.style.setProperty("--s", "" + (1 - (l ? o : 0))), i += e.offsetHeight, o += .025
                        })
                    }
                }, [l, A, n]), r.createElement("div", {
                    ref: g,
                    className: "Toastify",
                    id: I,
                    onMouseEnter: () => {
                        n && (p(!1), B.pause())
                    },
                    onMouseLeave: P
                }, w((e, t) => {
                    let o = t.length ? { ...E
                    } : { ...E,
                        pointerEvents: "none"
                    };
                    return r.createElement("div", {
                        className: function(e) {
                            let t = (0, i.Z)("Toastify__toast-container", "Toastify__toast-container--".concat(e), {
                                "Toastify__toast-container--rtl": x
                            });
                            return a(C) ? C({
                                position: e,
                                rtl: x,
                                defaultClassName: t
                            }) : (0, i.Z)(t, c(C))
                        }(e),
                        style: o,
                        key: "container-".concat(e)
                    }, t.map(e => {
                        let {
                            content: t,
                            props: i
                        } = e;
                        return r.createElement(O, { ...i,
                            stacked: n,
                            collapseAll: P,
                            isIn: v(i.toastId, i.containerId),
                            style: i.style,
                            key: "toast-".concat(i.key)
                        }, t)
                    }))
                }))
            }
        },
        11735: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __addDisposableResource: function() {
                    return N
                },
                __assign: function() {
                    return o
                },
                __asyncDelegator: function() {
                    return I
                },
                __asyncGenerator: function() {
                    return x
                },
                __asyncValues: function() {
                    return B
                },
                __await: function() {
                    return E
                },
                __awaiter: function() {
                    return p
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldIn: function() {
                    return T
                },
                __classPrivateFieldSet: function() {
                    return R
                },
                __createBinding: function() {
                    return g
                },
                __decorate: function() {
                    return a
                },
                __disposeResources: function() {
                    return D
                },
                __esDecorate: function() {
                    return u
                },
                __exportStar: function() {
                    return y
                },
                __extends: function() {
                    return i
                },
                __generator: function() {
                    return m
                },
                __importDefault: function() {
                    return O
                },
                __importStar: function() {
                    return M
                },
                __makeTemplateObject: function() {
                    return k
                },
                __metadata: function() {
                    return h
                },
                __param: function() {
                    return c
                },
                __propKey: function() {
                    return d
                },
                __read: function() {
                    return w
                },
                __rest: function() {
                    return s
                },
                __runInitializers: function() {
                    return l
                },
                __setFunctionName: function() {
                    return f
                },
                __spread: function() {
                    return v
                },
                __spreadArray: function() {
                    return C
                },
                __spreadArrays: function() {
                    return A
                },
                __values: function() {
                    return b
                }
            });
            var r = function(e, t) {
                return (r = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                })(e, t)
            };

            function i(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var o = function() {
                return (o = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function s(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
                return n
            }

            function a(e, t, n, r) {
                var i, o = arguments.length,
                    s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
                return o > 3 && s && Object.defineProperty(t, n, s), s
            }

            function c(e, t) {
                return function(n, r) {
                    t(n, r, e)
                }
            }

            function u(e, t, n, r, i, o) {
                function s(e) {
                    if (void 0 !== e && "function" != typeof e) throw TypeError("Function expected");
                    return e
                }
                for (var a, c = r.kind, u = "getter" === c ? "get" : "setter" === c ? "set" : "value", l = !t && e ? r.static ? e : e.prototype : null, d = t || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}), f = !1, h = n.length - 1; h >= 0; h--) {
                    var p = {};
                    for (var m in r) p[m] = "access" === m ? {} : r[m];
                    for (var m in r.access) p.access[m] = r.access[m];
                    p.addInitializer = function(e) {
                        if (f) throw TypeError("Cannot add initializers after decoration has completed");
                        o.push(s(e || null))
                    };
                    var g = (0, n[h])("accessor" === c ? {
                        get: d.get,
                        set: d.set
                    } : d[u], p);
                    if ("accessor" === c) {
                        if (void 0 === g) continue;
                        if (null === g || "object" != typeof g) throw TypeError("Object expected");
                        (a = s(g.get)) && (d.get = a), (a = s(g.set)) && (d.set = a), (a = s(g.init)) && i.unshift(a)
                    } else(a = s(g)) && ("field" === c ? i.unshift(a) : d[u] = a)
                }
                l && Object.defineProperty(l, r.name, d), f = !0
            }

            function l(e, t, n) {
                for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
                return r ? n : void 0
            }

            function d(e) {
                return "symbol" == typeof e ? e : "".concat(e)
            }

            function f(e, t, n) {
                return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
                    configurable: !0,
                    value: n ? "".concat(n, " ", t) : t
                })
            }

            function h(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function p(e, t, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(s, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                })
            }

            function m(e, t) {
                var n, r, i, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    },
                    s = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return s.next = a(0), s.throw = a(1), s.return = a(2), "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(a) {
                    return function(c) {
                        return function(a) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; s && (s = 0, a[0] && (o = 0)), o;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, r = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1], i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2], o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                a = t.call(e, o)
                            } catch (e) {
                                a = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, c])
                    }
                }
            }
            var g = Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, r, i)
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            };

            function y(e, t) {
                for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || g(t, e, n)
            }

            function b(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function w(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, i, o = n.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return s
            }

            function v() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(w(arguments[t]));
                return e
            }

            function A() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                for (var r = Array(e), i = 0, t = 0; t < n; t++)
                    for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
                return r
            }

            function C(e, t, n) {
                if (n || 2 == arguments.length)
                    for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                return e.concat(r || Array.prototype.slice.call(t))
            }

            function E(e) {
                return this instanceof E ? (this.v = e, this) : new E(e)
            }

            function x(e, t, n) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var r, i = n.apply(e, t || []),
                    o = [];
                return r = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", function(e) {
                    return function(t) {
                        return Promise.resolve(t).then(e, u)
                    }
                }), r[Symbol.asyncIterator] = function() {
                    return this
                }, r;

                function s(e, t) {
                    i[e] && (r[e] = function(t) {
                        return new Promise(function(n, r) {
                            o.push([e, t, n, r]) > 1 || a(e, t)
                        })
                    }, t && (r[e] = t(r[e])))
                }

                function a(e, t) {
                    try {
                        var n;
                        (n = i[e](t)).value instanceof E ? Promise.resolve(n.value.v).then(c, u) : l(o[0][2], n)
                    } catch (e) {
                        l(o[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), o.shift(), o.length && a(o[0][0], o[0][1])
                }
            }

            function I(e) {
                var t, n;
                return t = {}, r("next"), r("throw", function(e) {
                    throw e
                }), r("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function r(r, i) {
                    t[r] = e[r] ? function(t) {
                        return (n = !n) ? {
                            value: E(e[r](t)),
                            done: !1
                        } : i ? i(t) : t
                    } : i
                }
            }

            function B(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, n = e[Symbol.asyncIterator];
                return n ? n.call(e) : (e = b(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function r(n) {
                    t[n] = e[n] && function(t) {
                        return new Promise(function(r, i) {
                            ! function(e, t, n, r) {
                                Promise.resolve(r).then(function(t) {
                                    e({
                                        value: t,
                                        done: n
                                    })
                                }, t)
                            }(r, i, (t = e[n](t)).done, t.value)
                        })
                    }
                }
            }

            function k(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }
            var P = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            };

            function M(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && g(t, e, n);
                return P(t, e), t
            }

            function O(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t, n, r) {
                if ("a" === n && !r) throw TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
            }

            function R(e, t, n, r, i) {
                if ("m" === r) throw TypeError("Private method is not writable");
                if ("a" === r && !i) throw TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
            }

            function T(e, t) {
                if (null === t || "object" != typeof t && "function" != typeof t) throw TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof e ? t === e : e.has(t)
            }

            function N(e, t, n) {
                if (null != t) {
                    var r, i;
                    if ("object" != typeof t && "function" != typeof t) throw TypeError("Object expected.");
                    if (n) {
                        if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
                        r = t[Symbol.asyncDispose]
                    }
                    if (void 0 === r) {
                        if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
                        r = t[Symbol.dispose], n && (i = r)
                    }
                    if ("function" != typeof r) throw TypeError("Object not disposable.");
                    i && (r = function() {
                        try {
                            i.call(this)
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }), e.stack.push({
                        value: t,
                        dispose: r,
                        async: n
                    })
                } else n && e.stack.push({
                    async: !0
                });
                return t
            }
            var F = "function" == typeof SuppressedError ? SuppressedError : function(e, t, n) {
                var r = Error(n);
                return r.name = "SuppressedError", r.error = e, r.suppressed = t, r
            };

            function D(e) {
                function t(t) {
                    e.error = e.hasError ? new F(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
                }
                var n, r = 0;
                return function i() {
                    for (; n = e.stack.pop();) try {
                        if (!n.async && 1 === r) return r = 0, e.stack.push(n), Promise.resolve().then(i);
                        if (n.dispose) {
                            var o = n.dispose.call(n.value);
                            if (n.async) return r |= 2, Promise.resolve(o).then(i, function(e) {
                                return t(e), i()
                            })
                        } else r |= 1
                    } catch (e) {
                        t(e)
                    }
                    if (1 === r) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
                    if (e.hasError) throw e.error
                }()
            }
            t.default = {
                __extends: i,
                __assign: o,
                __rest: s,
                __decorate: a,
                __param: c,
                __metadata: h,
                __awaiter: p,
                __generator: m,
                __createBinding: g,
                __exportStar: y,
                __values: b,
                __read: w,
                __spread: v,
                __spreadArrays: A,
                __spreadArray: C,
                __await: E,
                __asyncGenerator: x,
                __asyncDelegator: I,
                __asyncValues: B,
                __makeTemplateObject: k,
                __importStar: M,
                __importDefault: O,
                __classPrivateFieldGet: S,
                __classPrivateFieldSet: R,
                __classPrivateFieldIn: T,
                __addDisposableResource: N,
                __disposeResources: D
            }
        },
        96104: function(e, t, n) {
            "use strict";

            function r(e) {
                return "string" == typeof e ? {
                    address: e,
                    type: "json-rpc"
                } : e
            }
            n.d(t, {
                T: function() {
                    return r
                }
            })
        },
        48061: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return x
                }
            });
            var r = n(3796),
                i = n(6649);
            class o extends i.G {
                constructor({
                    data: e
                }) {
                    super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
                        metaMessages: ["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.", "", `Provided data: ${JSON.stringify(e)}`],
                        name: "EnsAvatarInvalidMetadataError"
                    })
                }
            }
            class s extends i.G {
                constructor({
                    reason: e
                }) {
                    super(`ENS NFT avatar URI is invalid. ${e}`, {
                        name: "EnsAvatarInvalidNftUriError"
                    })
                }
            }
            class a extends i.G {
                constructor({
                    uri: e
                }) {
                    super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`, {
                        name: "EnsAvatarUriResolutionError"
                    })
                }
            }
            class c extends i.G {
                constructor({
                    namespace: e
                }) {
                    super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`, {
                        name: "EnsAvatarUnsupportedNamespaceError"
                    })
                }
            }
            let u = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
                l = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
                d = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
                f = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
            async function h(e) {
                try {
                    let t = await fetch(e, {
                        method: "HEAD"
                    });
                    if (200 === t.status) {
                        let e = t.headers.get("content-type");
                        return e ? .startsWith("image/")
                    }
                    return !1
                } catch (t) {
                    if ("object" == typeof t && void 0 !== t.response || !globalThis.hasOwnProperty("Image")) return !1;
                    return new Promise(t => {
                        let n = new Image;
                        n.onload = () => {
                            t(!0)
                        }, n.onerror = () => {
                            t(!1)
                        }, n.src = e
                    })
                }
            }

            function p(e, t) {
                return e ? e.endsWith("/") ? e.slice(0, -1) : e : t
            }

            function m({
                uri: e,
                gatewayUrls: t
            }) {
                let n = d.test(e);
                if (n) return {
                    uri: e,
                    isOnChain: !0,
                    isEncoded: n
                };
                let r = p(t ? .ipfs, "https://ipfs.io"),
                    i = p(t ? .arweave, "https://arweave.net"),
                    o = e.match(u),
                    {
                        protocol: s,
                        subpath: c,
                        target: h,
                        subtarget: m = ""
                    } = o ? .groups || {},
                    g = "ipns:/" === s || "ipns/" === c,
                    y = "ipfs:/" === s || "ipfs/" === c || l.test(e);
                if (e.startsWith("http") && !g && !y) {
                    let n = e;
                    return t ? .arweave && (n = e.replace(/https:\/\/arweave.net/g, t ? .arweave)), {
                        uri: n,
                        isOnChain: !1,
                        isEncoded: !1
                    }
                }
                if ((g || y) && h) return {
                    uri: `${r}/${g?"ipns":"ipfs"}/${h}${m}`,
                    isOnChain: !1,
                    isEncoded: !1
                };
                if ("ar:/" === s && h) return {
                    uri: `${i}/${h}${m||""}`,
                    isOnChain: !1,
                    isEncoded: !1
                };
                let b = e.replace(f, "");
                if (b.startsWith("<svg") && (b = `data:image/svg+xml;base64,${btoa(b)}`), b.startsWith("data:") || b.startsWith("{")) return {
                    uri: b,
                    isOnChain: !0,
                    isEncoded: !1
                };
                throw new a({
                    uri: e
                })
            }

            function g(e) {
                if ("object" != typeof e || !("image" in e) && !("image_url" in e) && !("image_data" in e)) throw new o({
                    data: e
                });
                return e.image || e.image_url || e.image_data
            }
            async function y({
                gatewayUrls: e,
                uri: t
            }) {
                try {
                    let n = await fetch(t).then(e => e.json());
                    return await b({
                        gatewayUrls: e,
                        uri: g(n)
                    })
                } catch {
                    throw new a({
                        uri: t
                    })
                }
            }
            async function b({
                gatewayUrls: e,
                uri: t
            }) {
                let {
                    uri: n,
                    isOnChain: r
                } = m({
                    uri: t,
                    gatewayUrls: e
                });
                if (r || await h(n)) return n;
                throw new a({
                    uri: t
                })
            }
            async function w(e, {
                nft: t
            }) {
                if ("erc721" === t.namespace) return (0, r.L)(e, {
                    address: t.contractAddress,
                    abi: [{
                        name: "tokenURI",
                        type: "function",
                        stateMutability: "view",
                        inputs: [{
                            name: "tokenId",
                            type: "uint256"
                        }],
                        outputs: [{
                            name: "",
                            type: "string"
                        }]
                    }],
                    functionName: "tokenURI",
                    args: [BigInt(t.tokenID)]
                });
                if ("erc1155" === t.namespace) return (0, r.L)(e, {
                    address: t.contractAddress,
                    abi: [{
                        name: "uri",
                        type: "function",
                        stateMutability: "view",
                        inputs: [{
                            name: "_id",
                            type: "uint256"
                        }],
                        outputs: [{
                            name: "",
                            type: "string"
                        }]
                    }],
                    functionName: "uri",
                    args: [BigInt(t.tokenID)]
                });
                throw new c({
                    namespace: t.namespace
                })
            }
            async function v(e, {
                gatewayUrls: t,
                record: n
            }) {
                return /eip155:/i.test(n) ? A(e, {
                    gatewayUrls: t,
                    record: n
                }) : b({
                    uri: n,
                    gatewayUrls: t
                })
            }
            async function A(e, {
                gatewayUrls: t,
                record: n
            }) {
                let r = function(e) {
                        let t = e;
                        t.startsWith("did:nft:") && (t = t.replace("did:nft:", "").replace(/_/g, "/"));
                        let [n, r, i] = t.split("/"), [o, a] = n.split(":"), [c, u] = r.split(":");
                        if (!o || "eip155" !== o.toLowerCase()) throw new s({
                            reason: "Only EIP-155 supported"
                        });
                        if (!a) throw new s({
                            reason: "Chain ID not found"
                        });
                        if (!u) throw new s({
                            reason: "Contract address not found"
                        });
                        if (!i) throw new s({
                            reason: "Token ID not found"
                        });
                        if (!c) throw new s({
                            reason: "ERC namespace not found"
                        });
                        return {
                            chainID: Number.parseInt(a),
                            namespace: c.toLowerCase(),
                            contractAddress: u,
                            tokenID: i
                        }
                    }(n),
                    {
                        uri: i,
                        isOnChain: o,
                        isEncoded: a
                    } = m({
                        uri: await w(e, {
                            nft: r
                        }),
                        gatewayUrls: t
                    });
                if (o && (i.includes("data:application/json;base64,") || i.startsWith("{"))) return b({
                    uri: g(JSON.parse(a ? atob(i.replace("data:application/json;base64,", "")) : i)),
                    gatewayUrls: t
                });
                let c = r.tokenID;
                return "erc1155" === r.namespace && (c = c.replace("0x", "").padStart(64, "0")), y({
                    gatewayUrls: t,
                    uri: i.replace(/(?:0x)?{id}/, c)
                })
            }
            var C = n(93413),
                E = n(133);
            async function x(e, {
                blockNumber: t,
                blockTag: n,
                assetGatewayUrls: r,
                name: i,
                gatewayUrls: o,
                strict: s,
                universalResolverAddress: a
            }) {
                let c = await (0, C.s)(e, E.g, "getEnsText")({
                    blockNumber: t,
                    blockTag: n,
                    key: "avatar",
                    name: i,
                    universalResolverAddress: a,
                    gatewayUrls: o,
                    strict: s
                });
                if (!c) return null;
                try {
                    return await v(e, {
                        record: c,
                        gatewayUrls: r
                    })
                } catch {
                    return null
                }
            }
        },
        48729: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return l
                }
            });
            var r = n(21620),
                i = n(18543),
                o = n(95046),
                s = n(25652),
                a = n(68890),
                c = n(93413),
                u = n(3796);
            async function l(e, {
                address: t,
                blockNumber: n,
                blockTag: l,
                gatewayUrls: d,
                strict: f,
                universalResolverAddress: h
            }) {
                let p = h;
                if (!p) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    p = (0, i.L)({
                        blockNumber: n,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                let m = `${t.toLowerCase().substring(2)}.addr.reverse`;
                try {
                    let i = {
                            address: p,
                            abi: r.du,
                            functionName: "reverse",
                            args: [(0, o.NC)((0, a.T)(m))],
                            blockNumber: n,
                            blockTag: l
                        },
                        s = (0, c.s)(e, u.L, "readContract"),
                        [f, h] = d ? await s({ ...i,
                            args: [...i.args, d]
                        }) : await s(i);
                    if (t.toLowerCase() !== h.toLowerCase()) return null;
                    return f
                } catch (e) {
                    if (f) throw e;
                    if ((0, s.c)(e, "reverse")) return null;
                    throw e
                }
            }
        },
        133: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return h
                }
            });
            var r = n(21620),
                i = n(97225),
                o = n(31006),
                s = n(18543),
                a = n(95046),
                c = n(25652),
                u = n(82978),
                l = n(68890),
                d = n(93413),
                f = n(3796);
            async function h(e, {
                blockNumber: t,
                blockTag: n,
                name: h,
                key: p,
                gatewayUrls: m,
                strict: g,
                universalResolverAddress: y
            }) {
                let b = y;
                if (!b) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    b = (0, s.L)({
                        blockNumber: t,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                try {
                    let s = {
                            address: b,
                            abi: r.k3,
                            functionName: "resolve",
                            args: [(0, a.NC)((0, l.T)(h)), (0, o.R)({
                                abi: r.nZ,
                                functionName: "text",
                                args: [(0, u.V)(h), p]
                            })],
                            blockNumber: t,
                            blockTag: n
                        },
                        c = (0, d.s)(e, f.L, "readContract"),
                        g = m ? await c({ ...s,
                            args: [...s.args, m]
                        }) : await c(s);
                    if ("0x" === g[0]) return null;
                    let y = (0, i.k)({
                        abi: r.nZ,
                        functionName: "text",
                        data: g[0]
                    });
                    return "" === y ? null : y
                } catch (e) {
                    if (g) throw e;
                    if ((0, c.c)(e, "resolve")) return null;
                    throw e
                }
            }
        },
        12994: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return ee
                }
            });
            var r = n(43197);
            let i = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/,
                o = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/,
                s = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/,
                a = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/,
                c = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/,
                u = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/,
                l = /^receive\(\) external payable$/,
                d = new Set(["indexed"]),
                f = new Set(["calldata", "memory", "storage"]);
            class h extends Error {
                constructor(e, t = {}) {
                    let n = t.cause instanceof h ? t.cause.details : t.cause ? .message ? t.cause.message : t.details,
                        r = t.cause instanceof h && t.cause.docsPath || t.docsPath;
                    super([e || "An error occurred.", "", ...t.metaMessages ? [...t.metaMessages, ""] : [], ...r ? [`Docs: https://abitype.dev${r}`] : [], ...n ? [`Details: ${n}`] : [], "Version: abitype@1.0.5"].join("\n")), Object.defineProperty(this, "details", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "docsPath", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "metaMessages", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "shortMessage", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiTypeError"
                    }), t.cause && (this.cause = t.cause), this.details = n, this.docsPath = r, this.metaMessages = t.metaMessages, this.shortMessage = e
                }
            }
            class p extends h {
                constructor({
                    type: e
                }) {
                    super("Unknown type.", {
                        metaMessages: [`Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownTypeError"
                    })
                }
            }
            class m extends h {
                constructor({
                    type: e
                }) {
                    super("Unknown type.", {
                        metaMessages: [`Type "${e}" is not a valid ABI type.`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownSolidityTypeError"
                    })
                }
            }
            class g extends h {
                constructor({
                    param: e
                }) {
                    super("Invalid ABI parameter.", {
                        details: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidParameterError"
                    })
                }
            }
            class y extends h {
                constructor({
                    param: e,
                    name: t
                }) {
                    super("Invalid ABI parameter.", {
                        details: e,
                        metaMessages: [`"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SolidityProtectedKeywordError"
                    })
                }
            }
            class b extends h {
                constructor({
                    param: e,
                    type: t,
                    modifier: n
                }) {
                    super("Invalid ABI parameter.", {
                        details: e,
                        metaMessages: [`Modifier "${n}" not allowed${t?` in "${t}" type`:""}.`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidModifierError"
                    })
                }
            }
            class w extends h {
                constructor({
                    param: e,
                    type: t,
                    modifier: n
                }) {
                    super("Invalid ABI parameter.", {
                        details: e,
                        metaMessages: [`Modifier "${n}" not allowed${t?` in "${t}" type`:""}.`, `Data location can only be specified for array, struct, or mapping types, but "${n}" was given.`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidFunctionModifierError"
                    })
                }
            }
            class v extends h {
                constructor({
                    abiParameter: e
                }) {
                    super("Invalid ABI parameter.", {
                        details: JSON.stringify(e, null, 2),
                        metaMessages: ["ABI parameter type is invalid."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidAbiTypeParameterError"
                    })
                }
            }
            class A extends h {
                constructor({
                    signature: e,
                    type: t
                }) {
                    super(`Invalid ${t} signature.`, {
                        details: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidSignatureError"
                    })
                }
            }
            class C extends h {
                constructor({
                    signature: e
                }) {
                    super("Unknown signature.", {
                        details: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownSignatureError"
                    })
                }
            }
            class E extends h {
                constructor({
                    signature: e
                }) {
                    super("Invalid struct signature.", {
                        details: e,
                        metaMessages: ["No properties exist."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidStructSignatureError"
                    })
                }
            }
            class x extends h {
                constructor({
                    type: e
                }) {
                    super("Circular reference detected.", {
                        metaMessages: [`Struct "${e}" is a circular reference.`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "CircularReferenceError"
                    })
                }
            }
            class I extends h {
                constructor({
                    current: e,
                    depth: t
                }) {
                    super("Unbalanced parentheses.", {
                        metaMessages: [`"${e.trim()}" has too many ${t>0?"opening":"closing"} parentheses.`],
                        details: `Depth "${t}"`
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidParenthesisError"
                    })
                }
            }
            let B = new Map([
                    ["address", {
                        type: "address"
                    }],
                    ["bool", {
                        type: "bool"
                    }],
                    ["bytes", {
                        type: "bytes"
                    }],
                    ["bytes32", {
                        type: "bytes32"
                    }],
                    ["int", {
                        type: "int256"
                    }],
                    ["int256", {
                        type: "int256"
                    }],
                    ["string", {
                        type: "string"
                    }],
                    ["uint", {
                        type: "uint256"
                    }],
                    ["uint8", {
                        type: "uint8"
                    }],
                    ["uint16", {
                        type: "uint16"
                    }],
                    ["uint24", {
                        type: "uint24"
                    }],
                    ["uint32", {
                        type: "uint32"
                    }],
                    ["uint64", {
                        type: "uint64"
                    }],
                    ["uint96", {
                        type: "uint96"
                    }],
                    ["uint112", {
                        type: "uint112"
                    }],
                    ["uint160", {
                        type: "uint160"
                    }],
                    ["uint192", {
                        type: "uint192"
                    }],
                    ["uint256", {
                        type: "uint256"
                    }],
                    ["address owner", {
                        type: "address",
                        name: "owner"
                    }],
                    ["address to", {
                        type: "address",
                        name: "to"
                    }],
                    ["bool approved", {
                        type: "bool",
                        name: "approved"
                    }],
                    ["bytes _data", {
                        type: "bytes",
                        name: "_data"
                    }],
                    ["bytes data", {
                        type: "bytes",
                        name: "data"
                    }],
                    ["bytes signature", {
                        type: "bytes",
                        name: "signature"
                    }],
                    ["bytes32 hash", {
                        type: "bytes32",
                        name: "hash"
                    }],
                    ["bytes32 r", {
                        type: "bytes32",
                        name: "r"
                    }],
                    ["bytes32 root", {
                        type: "bytes32",
                        name: "root"
                    }],
                    ["bytes32 s", {
                        type: "bytes32",
                        name: "s"
                    }],
                    ["string name", {
                        type: "string",
                        name: "name"
                    }],
                    ["string symbol", {
                        type: "string",
                        name: "symbol"
                    }],
                    ["string tokenURI", {
                        type: "string",
                        name: "tokenURI"
                    }],
                    ["uint tokenId", {
                        type: "uint256",
                        name: "tokenId"
                    }],
                    ["uint8 v", {
                        type: "uint8",
                        name: "v"
                    }],
                    ["uint256 balance", {
                        type: "uint256",
                        name: "balance"
                    }],
                    ["uint256 tokenId", {
                        type: "uint256",
                        name: "tokenId"
                    }],
                    ["uint256 value", {
                        type: "uint256",
                        name: "value"
                    }],
                    ["event:address indexed from", {
                        type: "address",
                        name: "from",
                        indexed: !0
                    }],
                    ["event:address indexed to", {
                        type: "address",
                        name: "to",
                        indexed: !0
                    }],
                    ["event:uint indexed tokenId", {
                        type: "uint256",
                        name: "tokenId",
                        indexed: !0
                    }],
                    ["event:uint256 indexed tokenId", {
                        type: "uint256",
                        name: "tokenId",
                        indexed: !0
                    }]
                ]),
                k = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
                P = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
                M = /^u?int$/;

            function O(e, t) {
                var n, i, o;
                let s;
                let a = (n = t ? .type) ? `${n}:${e}` : e;
                if (B.has(a)) return B.get(a);
                let c = r.cN.test(e),
                    u = (0, r.Zw)(c ? P : k, e);
                if (!u) throw new g({
                    param: e
                });
                if (u.name && ("address" === (i = u.name) || "bool" === i || "function" === i || "string" === i || "tuple" === i || r.eL.test(i) || r.lh.test(i) || T.test(i))) throw new y({
                    param: e,
                    name: u.name
                });
                let l = u.name ? {
                        name: u.name
                    } : {},
                    d = "indexed" === u.modifier ? {
                        indexed: !0
                    } : {},
                    h = t ? .structs ? ? {},
                    p = {};
                if (c) {
                    s = "tuple";
                    let e = S(u.type),
                        t = [],
                        n = e.length;
                    for (let r = 0; r < n; r++) t.push(O(e[r], {
                        structs: h
                    }));
                    p = {
                        components: t
                    }
                } else if (u.type in h) s = "tuple", p = {
                    components: h[u.type]
                };
                else if (M.test(u.type)) s = `${u.type}256`;
                else if (s = u.type, t ? .type !== "struct" && !R(s)) throw new m({
                    type: s
                });
                if (u.modifier) {
                    if (!t ? .modifiers ? .has ? .(u.modifier)) throw new b({
                        param: e,
                        type: t ? .type,
                        modifier: u.modifier
                    });
                    if (f.has(u.modifier) && (o = s, !u.array && "bytes" !== o && "string" !== o && "tuple" !== o)) throw new w({
                        param: e,
                        type: t ? .type,
                        modifier: u.modifier
                    })
                }
                let v = {
                    type: `${s}${u.array??""}`,
                    ...l,
                    ...d,
                    ...p
                };
                return B.set(a, v), v
            }

            function S(e, t = [], n = "", r = 0) {
                let i = e.trim().length;
                for (let o = 0; o < i; o++) {
                    let i = e[o],
                        s = e.slice(o + 1);
                    switch (i) {
                        case ",":
                            return 0 === r ? S(s, [...t, n.trim()]) : S(s, t, `${n}${i}`, r);
                        case "(":
                            return S(s, t, `${n}${i}`, r + 1);
                        case ")":
                            return S(s, t, `${n}${i}`, r - 1);
                        default:
                            return S(s, t, `${n}${i}`, r)
                    }
                }
                if ("" === n) return t;
                if (0 !== r) throw new I({
                    current: n,
                    depth: r
                });
                return t.push(n.trim()), t
            }

            function R(e) {
                return "address" === e || "bool" === e || "function" === e || "string" === e || r.eL.test(e) || r.lh.test(e)
            }
            let T = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/,
                N = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;

            function F(e) {
                let t = function(e) {
                        let t = {},
                            n = e.length;
                        for (let i = 0; i < n; i++) {
                            let n = e[i];
                            if (!a.test(n)) continue;
                            let o = (0, r.Zw)(a, n);
                            if (!o) throw new A({
                                signature: n,
                                type: "struct"
                            });
                            let s = o.properties.split(";"),
                                c = [],
                                u = s.length;
                            for (let e = 0; e < u; e++) {
                                let t = s[e].trim();
                                if (!t) continue;
                                let n = O(t, {
                                    type: "struct"
                                });
                                c.push(n)
                            }
                            if (!c.length) throw new E({
                                signature: n
                            });
                            t[o.name] = c
                        }
                        let i = {},
                            o = Object.entries(t),
                            s = o.length;
                        for (let e = 0; e < s; e++) {
                            let [n, s] = o[e];
                            i[n] = function e(t, n, i = new Set) {
                                let o = [],
                                    s = t.length;
                                for (let a = 0; a < s; a++) {
                                    let s = t[a];
                                    if (r.cN.test(s.type)) o.push(s);
                                    else {
                                        let t = (0, r.Zw)(N, s.type);
                                        if (!t ? .type) throw new v({
                                            abiParameter: s
                                        });
                                        let {
                                            array: a,
                                            type: c
                                        } = t;
                                        if (c in n) {
                                            if (i.has(c)) throw new x({
                                                type: c
                                            });
                                            o.push({ ...s,
                                                type: `tuple${a??""}`,
                                                components: e(n[c] ? ? [], n, new Set([...i, c]))
                                            })
                                        } else if (R(c)) o.push(s);
                                        else throw new p({
                                            type: c
                                        })
                                    }
                                }
                                return o
                            }(s, t)
                        }
                        return i
                    }(e),
                    n = [],
                    h = e.length;
                for (let p = 0; p < h; p++) {
                    let h = e[p];
                    a.test(h) || n.push(function(e, t = {}) {
                        if (s.test(e)) {
                            let n = (0, r.Zw)(s, e);
                            if (!n) throw new A({
                                signature: e,
                                type: "function"
                            });
                            let i = S(n.parameters),
                                o = [],
                                a = i.length;
                            for (let e = 0; e < a; e++) o.push(O(i[e], {
                                modifiers: f,
                                structs: t,
                                type: "function"
                            }));
                            let c = [];
                            if (n.returns) {
                                let e = S(n.returns),
                                    r = e.length;
                                for (let n = 0; n < r; n++) c.push(O(e[n], {
                                    modifiers: f,
                                    structs: t,
                                    type: "function"
                                }))
                            }
                            return {
                                name: n.name,
                                type: "function",
                                stateMutability: n.stateMutability ? ? "nonpayable",
                                inputs: o,
                                outputs: c
                            }
                        }
                        if (o.test(e)) {
                            let n = (0, r.Zw)(o, e);
                            if (!n) throw new A({
                                signature: e,
                                type: "event"
                            });
                            let i = S(n.parameters),
                                s = [],
                                a = i.length;
                            for (let e = 0; e < a; e++) s.push(O(i[e], {
                                modifiers: d,
                                structs: t,
                                type: "event"
                            }));
                            return {
                                name: n.name,
                                type: "event",
                                inputs: s
                            }
                        }
                        if (i.test(e)) {
                            let n = (0, r.Zw)(i, e);
                            if (!n) throw new A({
                                signature: e,
                                type: "error"
                            });
                            let o = S(n.parameters),
                                s = [],
                                a = o.length;
                            for (let e = 0; e < a; e++) s.push(O(o[e], {
                                structs: t,
                                type: "error"
                            }));
                            return {
                                name: n.name,
                                type: "error",
                                inputs: s
                            }
                        }
                        if (c.test(e)) {
                            let n = (0, r.Zw)(c, e);
                            if (!n) throw new A({
                                signature: e,
                                type: "constructor"
                            });
                            let i = S(n.parameters),
                                o = [],
                                s = i.length;
                            for (let e = 0; e < s; e++) o.push(O(i[e], {
                                structs: t,
                                type: "constructor"
                            }));
                            return {
                                type: "constructor",
                                stateMutability: n.stateMutability ? ? "nonpayable",
                                inputs: o
                            }
                        }
                        if (u.test(e)) return {
                            type: "fallback"
                        };
                        if (l.test(e)) return {
                            type: "receive",
                            stateMutability: "payable"
                        };
                        throw new C({
                            signature: e
                        })
                    }(h, t))
                }
                return n
            }
            var D = n(96104),
                U = n(21620),
                L = n(13955),
                q = n(6649),
                Q = n(89045),
                j = n(58591),
                G = n(97225),
                z = n(32637),
                W = n(31006),
                _ = n(18543),
                H = n(95046),
                K = n(37764),
                V = n(43149),
                Z = n(27031),
                J = n(37669),
                $ = n(10639),
                Y = n(11667),
                X = n(33425);
            async function ee(e, t) {
                let {
                    account: r = e.account,
                    batch: i = !!e.batch ? .multicall,
                    blockNumber: o,
                    blockTag: s = "latest",
                    accessList: a,
                    blobs: c,
                    code: u,
                    data: l,
                    factory: d,
                    factoryData: f,
                    gas: h,
                    gasPrice: p,
                    maxFeePerBlobGas: m,
                    maxFeePerGas: g,
                    maxPriorityFeePerGas: y,
                    nonce: b,
                    to: w,
                    value: v,
                    stateOverride: A,
                    ...C
                } = t, E = r ? (0, D.T)(r) : void 0;
                if (u && (d || f)) throw new q.G("Cannot provide both `code` & `factory`/`factoryData` as parameters.");
                if (u && w) throw new q.G("Cannot provide both `code` & `to` as parameters.");
                let x = u && l,
                    I = d && f && w && l,
                    B = x || I,
                    k = x ? function(e) {
                        let {
                            code: t,
                            data: n
                        } = e;
                        return (0, z.w)({
                            abi: F(["constructor(bytes, bytes)"]),
                            bytecode: L.NO,
                            args: [t, n]
                        })
                    }({
                        code: u,
                        data: l
                    }) : I ? function(e) {
                        let {
                            data: t,
                            factory: n,
                            factoryData: r,
                            to: i
                        } = e;
                        return (0, z.w)({
                            abi: F(["constructor(address, bytes, address, bytes)"]),
                            bytecode: L.pG,
                            args: [i, t, n, r]
                        })
                    }({
                        data: l,
                        factory: d,
                        factoryData: f,
                        to: w
                    }) : l;
                try {
                    (0, X.F)(t);
                    let n = (o ? (0, H.eC)(o) : void 0) || s,
                        r = (0, Y.mF)(A),
                        u = e.chain ? .formatters ? .transactionRequest ? .format,
                        l = (u || J.tG)({ ...(0, Z.K)(C, {
                                format: u
                            }),
                            from: E ? .address,
                            accessList: a,
                            blobs: c,
                            data: k,
                            gas: h,
                            gasPrice: p,
                            maxFeePerBlobGas: m,
                            maxFeePerGas: g,
                            maxPriorityFeePerGas: y,
                            nonce: b,
                            to: B ? void 0 : w,
                            value: v
                        });
                    if (i && function({
                            request: e
                        }) {
                            let {
                                data: t,
                                to: n,
                                ...r
                            } = e;
                            return !(!t || t.startsWith("0x82ad56cb")) && !!n && !(Object.values(r).filter(e => void 0 !== e).length > 0)
                        }({
                            request: l
                        }) && !r) try {
                        return await et(e, { ...l,
                            blockNumber: o,
                            blockTag: s
                        })
                    } catch (e) {
                        if (!(e instanceof Q.pZ) && !(e instanceof Q.mm)) throw e
                    }
                    let d = await e.request({
                        method: "eth_call",
                        params: r ? [l, n, r] : [l, n]
                    });
                    if ("0x" === d) return {
                        data: void 0
                    };
                    return {
                        data: d
                    }
                } catch (s) {
                    let r = function(e) {
                            if (!(e instanceof q.G)) return;
                            let t = e.walk();
                            return "object" == typeof t ? .data ? t.data ? .data : t.data
                        }(s),
                        {
                            offchainLookup: i,
                            offchainLookupSignature: o
                        } = await n.e(5026).then(n.bind(n, 35026));
                    if (!1 !== e.ccipRead && r ? .slice(0, 10) === o && w) return {
                        data: await i(e, {
                            data: r,
                            to: w
                        })
                    };
                    if (B && r ? .slice(0, 10) === "0x101bb98d") throw new j.Mo({
                        factory: d
                    });
                    throw function(e, {
                        docsPath: t,
                        ...n
                    }) {
                        let r = (() => {
                            let t = (0, V.k)(e, n);
                            return t instanceof K.cj ? e : t
                        })();
                        return new j.cg(r, {
                            docsPath: t,
                            ...n
                        })
                    }(s, { ...t,
                        account: E,
                        chain: e.chain
                    })
                }
            }
            async function et(e, t) {
                let {
                    batchSize: n = 1024,
                    wait: r = 0
                } = "object" == typeof e.batch ? .multicall ? e.batch.multicall : {}, {
                    blockNumber: i,
                    blockTag: o = "latest",
                    data: s,
                    multicallAddress: a,
                    to: c
                } = t, u = a;
                if (!u) {
                    if (!e.chain) throw new Q.pZ;
                    u = (0, _.L)({
                        blockNumber: i,
                        chain: e.chain,
                        contract: "multicall3"
                    })
                }
                let l = (i ? (0, H.eC)(i) : void 0) || o,
                    {
                        schedule: d
                    } = (0, $.S)({
                        id: `${e.uid}.${l}`,
                        wait: r,
                        shouldSplitBatch: e => e.reduce((e, {
                            data: t
                        }) => e + (t.length - 2), 0) > 2 * n,
                        fn: async t => {
                            let n = t.map(e => ({
                                    allowFailure: !0,
                                    callData: e.data,
                                    target: e.to
                                })),
                                r = (0, W.R)({
                                    abi: U.F8,
                                    args: [n],
                                    functionName: "aggregate3"
                                }),
                                i = await e.request({
                                    method: "eth_call",
                                    params: [{
                                        data: r,
                                        to: u
                                    }, l]
                                });
                            return (0, G.k)({
                                abi: U.F8,
                                args: [n],
                                functionName: "aggregate3",
                                data: i || "0x"
                            })
                        }
                    }),
                    [{
                        returnData: f,
                        success: h
                    }] = await d({
                        data: s,
                        to: c
                    });
                if (!h) throw new j.VQ({
                    data: f
                });
                return "0x" === f ? {
                    data: void 0
                } : {
                    data: f
                }
            }
        },
        42665: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return u
                },
                X: function() {
                    return c
                }
            });
            var r = n(25511),
                i = n(93413),
                o = n(72127),
                s = n(49235),
                a = n(48206);
            async function c(e, t) {
                return u(e, t)
            }
            async function u(e, t) {
                let {
                    block: n,
                    chain: c = e.chain,
                    request: u,
                    type: l = "eip1559"
                } = t || {}, d = await (async () => "function" == typeof c ? .fees ? .baseFeeMultiplier ? c.fees.baseFeeMultiplier({
                    block: n,
                    client: e,
                    request: u
                }) : c ? .fees ? .baseFeeMultiplier ? ? 1.2)();
                if (d < 1) throw new r.Fz;
                let f = 10 ** (d.toString().split(".")[1] ? .length ? ? 0),
                    h = e => e * BigInt(Math.ceil(d * f)) / BigInt(f),
                    p = n || await (0, i.s)(e, s.Q, "getBlock")({});
                if ("function" == typeof c ? .fees ? .estimateFeesPerGas) {
                    let t = await c.fees.estimateFeesPerGas({
                        block: n,
                        client: e,
                        multiply: h,
                        request: u,
                        type: l
                    });
                    if (null !== t) return t
                }
                if ("eip1559" === l) {
                    if ("bigint" != typeof p.baseFeePerGas) throw new r.e5;
                    let t = "bigint" == typeof u ? .maxPriorityFeePerGas ? u.maxPriorityFeePerGas : await (0, o.h)(e, {
                            block: p,
                            chain: c,
                            request: u
                        }),
                        n = h(p.baseFeePerGas);
                    return {
                        maxFeePerGas: u ? .maxFeePerGas ? ? n + t,
                        maxPriorityFeePerGas: t
                    }
                }
                return {
                    gasPrice: u ? .gasPrice ? ? h(await (0, i.s)(e, a.o, "getGasPrice")({}))
                }
            }
        },
        60730: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return w
                }
            });
            var r = n(96104),
                i = n(6649),
                o = n(84284),
                s = n(95046),
                a = n(85053),
                c = n(49268),
                u = n(97658);
            class l extends i.G {
                constructor(e, {
                    account: t,
                    docsPath: n,
                    chain: r,
                    data: i,
                    gas: o,
                    gasPrice: s,
                    maxFeePerGas: l,
                    maxPriorityFeePerGas: d,
                    nonce: f,
                    to: h,
                    value: p
                }) {
                    super(e.shortMessage, {
                        cause: e,
                        docsPath: n,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Estimate Gas Arguments:", (0, u.xr)({
                            from: t ? .address,
                            to: h,
                            value: void 0 !== p && `${(0,a.d)(p)} ${r?.nativeCurrency?.symbol||"ETH"}`,
                            data: i,
                            gas: o,
                            gasPrice: void 0 !== s && `${(0,c.o)(s)} gwei`,
                            maxFeePerGas: void 0 !== l && `${(0,c.o)(l)} gwei`,
                            maxPriorityFeePerGas: void 0 !== d && `${(0,c.o)(d)} gwei`,
                            nonce: f
                        })].filter(Boolean),
                        name: "EstimateGasExecutionError"
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.cause = e
                }
            }
            var d = n(37764),
                f = n(43149),
                h = n(27031),
                p = n(37669),
                m = n(11667),
                g = n(33425),
                y = n(12062),
                b = n(5106);
            async function w(e, t) {
                let n = t.account ? ? e.account,
                    a = n ? (0, r.T)(n) : void 0;
                try {
                    let {
                        accessList: n,
                        authorizationList: r,
                        blobs: u,
                        blobVersionedHashes: l,
                        blockNumber: d,
                        blockTag: f,
                        data: w,
                        gas: v,
                        gasPrice: A,
                        maxFeePerBlobGas: C,
                        maxFeePerGas: E,
                        maxPriorityFeePerGas: x,
                        nonce: I,
                        value: B,
                        stateOverride: k,
                        ...P
                    } = await (0, y.Z)(e, { ...t,
                        parameters: a ? .type === "local" ? void 0 : ["blobVersionedHashes"]
                    }), M = (d ? (0, s.eC)(d) : void 0) || f, O = (0, m.mF)(k), S = await (async () => P.to ? P.to : r && r.length > 0 ? await (0, o.z)({
                        authorization: r[0]
                    }).catch(() => {
                        throw new i.G("`to` is required. Could not infer from `authorizationList`")
                    }) : void 0)();
                    (0, g.F)(t);
                    let R = e.chain ? .formatters ? .transactionRequest ? .format,
                        T = (R || p.tG)({ ...(0, h.K)(P, {
                                format: R
                            }),
                            from: a ? .address,
                            accessList: n,
                            authorizationList: r,
                            blobs: u,
                            blobVersionedHashes: l,
                            data: w,
                            gas: v,
                            gasPrice: A,
                            maxFeePerBlobGas: C,
                            maxFeePerGas: E,
                            maxPriorityFeePerGas: x,
                            nonce: I,
                            to: S,
                            value: B
                        });

                    function c(t) {
                        let {
                            block: n,
                            request: r,
                            rpcStateOverride: i
                        } = t;
                        return e.request({
                            method: "eth_estimateGas",
                            params: i ? [r, n ? ? "latest", i] : n ? [r, n] : [r]
                        })
                    }
                    let N = BigInt(await c({
                        block: M,
                        request: T,
                        rpcStateOverride: O
                    }));
                    if (r) {
                        let t = await (0, b.s)(e, {
                                address: T.from
                            }),
                            n = await Promise.all(r.map(async e => {
                                let {
                                    contractAddress: n
                                } = e, r = await c({
                                    block: M,
                                    request: {
                                        authorizationList: void 0,
                                        data: w,
                                        from: a ? .address,
                                        to: n,
                                        value: (0, s.eC)(t)
                                    },
                                    rpcStateOverride: O
                                }).catch(() => 100000 n);
                                return 2 n * BigInt(r)
                            }));
                        N += n.reduce((e, t) => e + t, 0 n)
                    }
                    return N
                } catch (n) {
                    throw function(e, {
                        docsPath: t,
                        ...n
                    }) {
                        return new l((() => {
                            let t = (0, f.k)(e, n);
                            return t instanceof d.cj ? e : t
                        })(), {
                            docsPath: t,
                            ...n
                        })
                    }(n, { ...t,
                        account: a,
                        chain: e.chain
                    })
                }
            }
        },
        72127: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return c
                },
                h: function() {
                    return u
                }
            });
            var r = n(25511),
                i = n(21019),
                o = n(93413),
                s = n(49235),
                a = n(48206);
            async function c(e, t) {
                return u(e, t)
            }
            async function u(e, t) {
                let {
                    block: n,
                    chain: c = e.chain,
                    request: u
                } = t || {};
                try {
                    let t = c ? .fees ? .maxPriorityFeePerGas ? ? c ? .fees ? .defaultPriorityFee;
                    if ("function" == typeof t) {
                        let r = n || await (0, o.s)(e, s.Q, "getBlock")({}),
                            i = await t({
                                block: r,
                                client: e,
                                request: u
                            });
                        if (null === i) throw Error();
                        return i
                    }
                    if (void 0 !== t) return t;
                    let r = await e.request({
                        method: "eth_maxPriorityFeePerGas"
                    });
                    return (0, i.y_)(r)
                } catch {
                    let [t, i] = await Promise.all([n ? Promise.resolve(n) : (0, o.s)(e, s.Q, "getBlock")({}), (0, o.s)(e, a.o, "getGasPrice")({})]);
                    if ("bigint" != typeof t.baseFeePerGas) throw new r.e5;
                    let c = i - t.baseFeePerGas;
                    if (c < 0 n) return 0 n;
                    return c
                }
            }
        },
        5106: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return i
                }
            });
            var r = n(95046);
            async function i(e, {
                address: t,
                blockNumber: n,
                blockTag: i = "latest"
            }) {
                let o = n ? (0, r.eC)(n) : void 0;
                return BigInt(await e.request({
                    method: "eth_getBalance",
                    params: [t, o || i]
                }))
            }
        },
        49235: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return s
                }
            });
            var r = n(87655),
                i = n(95046),
                o = n(20621);
            async function s(e, {
                blockHash: t,
                blockNumber: n,
                blockTag: s,
                includeTransactions: a
            } = {}) {
                let c = a ? ? !1,
                    u = void 0 !== n ? (0, i.eC)(n) : void 0,
                    l = null;
                if (!(l = t ? await e.request({
                        method: "eth_getBlockByHash",
                        params: [t, c]
                    }, {
                        dedupe: !0
                    }) : await e.request({
                        method: "eth_getBlockByNumber",
                        params: [u || (s ? ? "latest"), c]
                    }, {
                        dedupe: !!u
                    }))) throw new r.f({
                    blockHash: t,
                    blockNumber: n
                });
                return (e.chain ? .formatters ? .block ? .format || o.Z)(l)
            }
        },
        75304: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return a
                }
            });
            let r = new Map,
                i = new Map;
            async function o(e, {
                cacheKey: t,
                cacheTime: n = Number.POSITIVE_INFINITY
            }) {
                let o = function(e) {
                        let t = (e, t) => ({
                                clear: () => t.delete(e),
                                get: () => t.get(e),
                                set: n => t.set(e, n)
                            }),
                            n = t(e, r),
                            o = t(e, i);
                        return {
                            clear: () => {
                                n.clear(), o.clear()
                            },
                            promise: n,
                            response: o
                        }
                    }(t),
                    s = o.response.get();
                if (s && n > 0 && new Date().getTime() - s.created.getTime() < n) return s.data;
                let a = o.promise.get();
                a || (a = e(), o.promise.set(a));
                try {
                    let e = await a;
                    return o.response.set({
                        created: new Date,
                        data: e
                    }), e
                } finally {
                    o.promise.clear()
                }
            }
            let s = e => `blockNumber.${e}`;
            async function a(e, {
                cacheTime: t = e.cacheTime
            } = {}) {
                return BigInt(await o(() => e.request({
                    method: "eth_blockNumber"
                }), {
                    cacheKey: s(e.uid),
                    cacheTime: t
                }))
            }
        },
        16416: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return i
                }
            });
            var r = n(21019);
            async function i(e) {
                let t = await e.request({
                    method: "eth_chainId"
                }, {
                    dedupe: !0
                });
                return (0, r.ly)(t)
            }
        },
        48206: function(e, t, n) {
            "use strict";
            async function r(e) {
                return BigInt(await e.request({
                    method: "eth_gasPrice"
                }))
            }
            n.d(t, {
                o: function() {
                    return r
                }
            })
        },
        85753: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return s
                }
            });
            var r = n(97658),
                i = n(95046),
                o = n(16719);
            async function s(e, {
                blockHash: t,
                blockNumber: n,
                blockTag: s,
                hash: a,
                index: c
            }) {
                let u = s || "latest",
                    l = void 0 !== n ? (0, i.eC)(n) : void 0,
                    d = null;
                if (a ? d = await e.request({
                        method: "eth_getTransactionByHash",
                        params: [a]
                    }, {
                        dedupe: !0
                    }) : t ? d = await e.request({
                        method: "eth_getTransactionByBlockHashAndIndex",
                        params: [t, (0, i.eC)(c)]
                    }, {
                        dedupe: !0
                    }) : (l || u) && (d = await e.request({
                        method: "eth_getTransactionByBlockNumberAndIndex",
                        params: [l || u, (0, i.eC)(c)]
                    }, {
                        dedupe: !!l
                    })), !d) throw new r.Bh({
                    blockHash: t,
                    blockNumber: n,
                    blockTag: u,
                    hash: a,
                    index: c
                });
                return (e.chain ? .formatters ? .transaction ? .format || o.Tr)(d)
            }
        },
        33208: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return o
                }
            });
            var r = n(21019),
                i = n(95046);
            async function o(e, {
                address: t,
                blockTag: n = "latest",
                blockNumber: o
            }) {
                let s = await e.request({
                    method: "eth_getTransactionCount",
                    params: [t, o ? (0, i.eC)(o) : n]
                }, {
                    dedupe: !!o
                });
                return (0, r.ly)(s)
            }
        },
        93672: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return c
                }
            });
            var r = n(97658),
                i = n(21019),
                o = n(21677),
                s = n(16719);
            let a = {
                "0x0": "reverted",
                "0x1": "success"
            };
            async function c(e, {
                hash: t
            }) {
                let n = await e.request({
                    method: "eth_getTransactionReceipt",
                    params: [t]
                }, {
                    dedupe: !0
                });
                if (!n) throw new r.Yb({
                    hash: t
                });
                return (e.chain ? .formatters ? .transactionReceipt ? .format || function(e) {
                    let t = { ...e,
                        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                        contractAddress: e.contractAddress ? e.contractAddress : null,
                        cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
                        effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
                        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
                        logs: e.logs ? e.logs.map(e => (0, o.U)(e)) : null,
                        to: e.to ? e.to : null,
                        transactionIndex: e.transactionIndex ? (0, i.ly)(e.transactionIndex) : null,
                        status: e.status ? a[e.status] : null,
                        type: e.type ? s.c8[e.type] || e.type : null
                    };
                    return e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)), e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)), t
                })(n)
            }
        },
        6577: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return h
                }
            });
            var r = n(21620),
                i = n(52186),
                o = n(6649),
                s = n(58591),
                a = n(97225),
                c = n(31006),
                u = n(18543),
                l = n(92915),
                d = n(93413),
                f = n(3796);
            async function h(e, t) {
                let {
                    allowFailure: n = !0,
                    batchSize: h,
                    blockNumber: p,
                    blockTag: m,
                    multicallAddress: g,
                    stateOverride: y
                } = t, b = t.contracts, w = h ? ? ("object" == typeof e.batch ? .multicall && e.batch.multicall.batchSize || 1024), v = g;
                if (!v) {
                    if (!e.chain) throw Error("client chain not configured. multicallAddress is required.");
                    v = (0, u.L)({
                        blockNumber: p,
                        chain: e.chain,
                        contract: "multicall3"
                    })
                }
                let A = [
                        []
                    ],
                    C = 0,
                    E = 0;
                for (let e = 0; e < b.length; e++) {
                    let {
                        abi: t,
                        address: r,
                        args: i,
                        functionName: o
                    } = b[e];
                    try {
                        let e = (0, c.R)({
                            abi: t,
                            args: i,
                            functionName: o
                        });
                        E += (e.length - 2) / 2, w > 0 && E > w && A[C].length > 0 && (C++, E = (e.length - 2) / 2, A[C] = []), A[C] = [...A[C], {
                            allowFailure: !0,
                            callData: e,
                            target: r
                        }]
                    } catch (s) {
                        let e = (0, l.S)(s, {
                            abi: t,
                            address: r,
                            args: i,
                            docsPath: "/docs/contract/multicall",
                            functionName: o
                        });
                        if (!n) throw e;
                        A[C] = [...A[C], {
                            allowFailure: !0,
                            callData: "0x",
                            target: r
                        }]
                    }
                }
                let x = await Promise.allSettled(A.map(t => (0, d.s)(e, f.L, "readContract")({
                        abi: r.F8,
                        address: v,
                        args: [t],
                        blockNumber: p,
                        blockTag: m,
                        functionName: "aggregate3",
                        stateOverride: y
                    }))),
                    I = [];
                for (let e = 0; e < x.length; e++) {
                    let t = x[e];
                    if ("rejected" === t.status) {
                        if (!n) throw t.reason;
                        for (let n = 0; n < A[e].length; n++) I.push({
                            status: "failure",
                            error: t.reason,
                            result: void 0
                        });
                        continue
                    }
                    let r = t.value;
                    for (let t = 0; t < r.length; t++) {
                        let {
                            returnData: o,
                            success: c
                        } = r[t], {
                            callData: u
                        } = A[e][t], {
                            abi: d,
                            address: f,
                            functionName: h,
                            args: p
                        } = b[I.length];
                        try {
                            if ("0x" === u) throw new i.wb;
                            if (!c) throw new s.VQ({
                                data: o
                            });
                            let e = (0, a.k)({
                                abi: d,
                                args: p,
                                data: o,
                                functionName: h
                            });
                            I.push(n ? {
                                result: e,
                                status: "success"
                            } : e)
                        } catch (t) {
                            let e = (0, l.S)(t, {
                                abi: d,
                                address: f,
                                args: p,
                                docsPath: "/docs/contract/multicall",
                                functionName: h
                            });
                            if (!n) throw e;
                            I.push({
                                error: e,
                                result: void 0,
                                status: "failure"
                            })
                        }
                    }
                }
                if (I.length !== b.length) throw new o.G("multicall results mismatch");
                return I
            }
        },
        3796: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return c
                }
            });
            var r = n(97225),
                i = n(31006),
                o = n(92915),
                s = n(93413),
                a = n(12994);
            async function c(e, t) {
                let {
                    abi: n,
                    address: c,
                    args: u,
                    functionName: l,
                    ...d
                } = t, f = (0, i.R)({
                    abi: n,
                    args: u,
                    functionName: l
                });
                try {
                    let {
                        data: t
                    } = await (0, s.s)(e, a.R, "call")({ ...d,
                        data: f,
                        to: c
                    });
                    return (0, r.k)({
                        abi: n,
                        args: u,
                        functionName: l,
                        data: t || "0x"
                    })
                } catch (e) {
                    throw (0, o.S)(e, {
                        abi: n,
                        address: c,
                        args: u,
                        docsPath: "/docs/contract/readContract",
                        functionName: l
                    })
                }
            }
        },
        9660: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return u
                }
            });
            var r = n(96104),
                i = n(97225),
                o = n(31006),
                s = n(92915),
                a = n(93413),
                c = n(12994);
            async function u(e, t) {
                let {
                    abi: n,
                    address: u,
                    args: l,
                    dataSuffix: d,
                    functionName: f,
                    ...h
                } = t, p = h.account ? (0, r.T)(h.account) : e.account, m = (0, o.R)({
                    abi: n,
                    args: l,
                    functionName: f
                });
                try {
                    let {
                        data: r
                    } = await (0, a.s)(e, c.R, "call")({
                        batch: !1,
                        data: `${m}${d?d.replace("0x",""):""}`,
                        to: u,
                        ...h,
                        account: p
                    }), o = (0, i.k)({
                        abi: n,
                        args: l,
                        functionName: f,
                        data: r || "0x"
                    }), s = n.filter(e => "name" in e && e.name === t.functionName);
                    return {
                        result: o,
                        request: {
                            abi: s,
                            address: u,
                            args: l,
                            dataSuffix: d,
                            functionName: f,
                            ...h,
                            account: p
                        }
                    }
                } catch (e) {
                    throw (0, s.S)(e, {
                        abi: n,
                        address: u,
                        args: l,
                        docsPath: "/docs/contract/simulateContract",
                        functionName: f,
                        sender: p ? .address
                    })
                }
            }
        },
        95131: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return h
                }
            });
            var r = n(87655),
                i = n(97658),
                o = n(93413),
                s = n(24606),
                a = n(55894),
                c = n(47499),
                u = n(49235),
                l = n(85753),
                d = n(93672),
                f = n(38128);
            async function h(e, {
                confirmations: t = 1,
                hash: n,
                onReplaced: h,
                pollingInterval: p = e.pollingInterval,
                retryCount: m = 6,
                retryDelay: g = ({
                    count: e
                }) => 200 * ~~(1 << e),
                timeout: y
            }) {
                let b, w, v;
                let A = (0, c.P)(["waitForTransactionReceipt", e.uid, n]),
                    C = 0,
                    E = !1;
                return new Promise((c, x) => {
                    y && setTimeout(() => x(new i.mc({
                        hash: n
                    })), y);
                    let I = (0, s.N7)(A, {
                        onReplaced: h,
                        resolve: c,
                        reject: x
                    }, s => {
                        let c = (0, o.s)(e, f.q, "watchBlockNumber")({
                            emitMissed: !0,
                            emitOnBegin: !0,
                            poll: !0,
                            pollingInterval: p,
                            async onBlockNumber(f) {
                                let h = e => {
                                        c(), e(), I()
                                    },
                                    p = f;
                                if (!E) {
                                    C > m && h(() => s.reject(new i.mc({
                                        hash: n
                                    })));
                                    try {
                                        if (v) {
                                            if (t > 1 && (!v.blockNumber || p - v.blockNumber + 1 n < t)) return;
                                            h(() => s.resolve(v));
                                            return
                                        }
                                        if (b || (E = !0, await (0, a.J)(async () => {
                                                (b = await (0, o.s)(e, l.f, "getTransaction")({
                                                    hash: n
                                                })).blockNumber && (p = b.blockNumber)
                                            }, {
                                                delay: g,
                                                retryCount: m
                                            }), E = !1), v = await (0, o.s)(e, d.a, "getTransactionReceipt")({
                                                hash: n
                                            }), t > 1 && (!v.blockNumber || p - v.blockNumber + 1 n < t)) return;
                                        h(() => s.resolve(v))
                                    } catch (n) {
                                        if (n instanceof i.Bh || n instanceof i.Yb) {
                                            if (!b) {
                                                E = !1;
                                                return
                                            }
                                            try {
                                                w = b, E = !0;
                                                let n = await (0, a.J)(() => (0, o.s)(e, u.Q, "getBlock")({
                                                    blockNumber: p,
                                                    includeTransactions: !0
                                                }), {
                                                    delay: g,
                                                    retryCount: m,
                                                    shouldRetry: ({
                                                        error: e
                                                    }) => e instanceof r.f
                                                });
                                                E = !1;
                                                let i = n.transactions.find(({
                                                    from: e,
                                                    nonce: t
                                                }) => e === w.from && t === w.nonce);
                                                if (!i || (v = await (0, o.s)(e, d.a, "getTransactionReceipt")({
                                                        hash: i.hash
                                                    }), t > 1 && (!v.blockNumber || p - v.blockNumber + 1 n < t))) return;
                                                let c = "replaced";
                                                i.to === w.to && i.value === w.value ? c = "repriced" : i.from === i.to && 0 n === i.value && (c = "cancelled"), h(() => {
                                                    s.onReplaced ? .({
                                                        reason: c,
                                                        replacedTransaction: w,
                                                        transaction: i,
                                                        transactionReceipt: v
                                                    }), s.resolve(v)
                                                })
                                            } catch (e) {
                                                h(() => s.reject(e))
                                            }
                                        } else h(() => s.reject(n))
                                    } finally {
                                        C++
                                    }
                                }
                            }
                        })
                    })
                })
            }
        },
        38128: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return u
                }
            });
            var r = n(21019),
                i = n(93413),
                o = n(24606),
                s = n(9338),
                a = n(47499),
                c = n(75304);

            function u(e, {
                emitOnBegin: t = !1,
                emitMissed: n = !1,
                onBlockNumber: u,
                onError: l,
                poll: d,
                pollingInterval: f = e.pollingInterval
            }) {
                let h;
                return (void 0 !== d ? d : "webSocket" !== e.transport.type && ("fallback" !== e.transport.type || "webSocket" !== e.transport.transports[0].config.type)) ? (() => {
                    let r = (0, a.P)(["watchBlockNumber", e.uid, t, n, f]);
                    return (0, o.N7)(r, {
                        onBlockNumber: u,
                        onError: l
                    }, r => (0, s.$)(async () => {
                        try {
                            let t = await (0, i.s)(e, c.z, "getBlockNumber")({
                                cacheTime: 0
                            });
                            if (h) {
                                if (t === h) return;
                                if (t - h > 1 && n)
                                    for (let e = h + 1 n; e < t; e++) r.onBlockNumber(e, h), h = e
                            }(!h || t > h) && (r.onBlockNumber(t, h), h = t)
                        } catch (e) {
                            r.onError ? .(e)
                        }
                    }, {
                        emitOnBegin: t,
                        interval: f
                    }))
                })() : (() => {
                    let i = (0, a.P)(["watchBlockNumber", e.uid, t, n]);
                    return (0, o.N7)(i, {
                        onBlockNumber: u,
                        onError: l
                    }, t => {
                        let n = !0,
                            i = () => n = !1;
                        return (async () => {
                            try {
                                let o = (() => {
                                        if ("fallback" === e.transport.type) {
                                            let t = e.transport.transports.find(e => "webSocket" === e.config.type);
                                            return t ? t.value : e.transport
                                        }
                                        return e.transport
                                    })(),
                                    {
                                        unsubscribe: s
                                    } = await o.subscribe({
                                        params: ["newHeads"],
                                        onData(e) {
                                            if (!n) return;
                                            let i = (0, r.y_)(e.result ? .number);
                                            t.onBlockNumber(i, h), h = i
                                        },
                                        onError(e) {
                                            t.onError ? .(e)
                                        }
                                    });
                                i = s, n || i()
                            } catch (e) {
                                l ? .(e)
                            }
                        })(), () => i()
                    })
                })()
            }
        },
        12062: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return x
                },
                Z: function() {
                    return I
                }
            });
            var r = n(96104),
                i = n(42665),
                o = n(60730),
                s = n(49235),
                a = n(33208),
                c = n(25511),
                u = n(82361),
                l = n(95046);

            function d(e) {
                let {
                    kzg: t
                } = e, n = e.to ? ? ("string" == typeof e.blobs[0] ? "hex" : "bytes"), r = "string" == typeof e.blobs[0] ? e.blobs.map(e => (0, u.nr)(e)) : e.blobs, i = [];
                for (let e of r) i.push(Uint8Array.from(t.blobToKzgCommitment(e)));
                return "bytes" === n ? i : i.map(e => (0, l.ci)(e))
            }

            function f(e) {
                let {
                    kzg: t
                } = e, n = e.to ? ? ("string" == typeof e.blobs[0] ? "hex" : "bytes"), r = "string" == typeof e.blobs[0] ? e.blobs.map(e => (0, u.nr)(e)) : e.blobs, i = "string" == typeof e.commitments[0] ? e.commitments.map(e => (0, u.nr)(e)) : e.commitments, o = [];
                for (let e = 0; e < r.length; e++) {
                    let n = r[e],
                        s = i[e];
                    o.push(Uint8Array.from(t.computeBlobKzgProof(n, s)))
                }
                return "bytes" === n ? o : o.map(e => (0, l.ci)(e))
            }
            var h = n(80543),
                p = n(40369),
                m = n(6649);
            class g extends m.G {
                constructor({
                    maxSize: e,
                    size: t
                }) {
                    super("Blob size is too large.", {
                        metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
                        name: "BlobSizeTooLargeError"
                    })
                }
            }
            class y extends m.G {
                constructor() {
                    super("Blob data must not be empty.", {
                        name: "EmptyBlobError"
                    })
                }
            }
            var b = n(15222),
                w = n(7508),
                v = n(93413),
                A = n(33425),
                C = n(97658),
                E = n(16416);
            let x = ["blobVersionedHashes", "chainId", "fees", "gas", "nonce", "type"];
            async function I(e, t) {
                let n, m;
                let {
                    account: I = e.account,
                    blobs: B,
                    chain: k,
                    gas: P,
                    kzg: M,
                    nonce: O,
                    nonceManager: S,
                    parameters: R = x,
                    type: T
                } = t, N = I ? (0, r.T)(I) : void 0, F = { ...t,
                    ...N ? {
                        from: N ? .address
                    } : {}
                };
                async function D() {
                    return n || (n = await (0, v.s)(e, s.Q, "getBlock")({
                        blockTag: "latest"
                    }))
                }
                async function U() {
                    return m || (k ? k.id : void 0 !== t.chainId ? t.chainId : m = await (0, v.s)(e, E.L, "getChainId")({}))
                }
                if ((R.includes("blobVersionedHashes") || R.includes("sidecars")) && B && M) {
                    let e = d({
                        blobs: B,
                        kzg: M
                    });
                    if (R.includes("blobVersionedHashes")) {
                        let t = function(e) {
                            let {
                                commitments: t,
                                version: n
                            } = e, r = e.to ? ? ("string" == typeof t[0] ? "hex" : "bytes"), i = [];
                            for (let e of t) i.push(function(e) {
                                let {
                                    commitment: t,
                                    version: n = 1
                                } = e, r = e.to ? ? ("string" == typeof t ? "hex" : "bytes"), i = function(e, t) {
                                    let n = (0, h.J)((0, p.v)(e, {
                                        strict: !1
                                    }) ? (0, u.O0)(e) : e);
                                    return "bytes" === (t || "hex") ? n : (0, l.NC)(n)
                                }(t, "bytes");
                                return i.set([n], 0), "bytes" === r ? i : (0, l.ci)(i)
                            }({
                                commitment: e,
                                to: r,
                                version: n
                            }));
                            return i
                        }({
                            commitments: e,
                            to: "hex"
                        });
                        F.blobVersionedHashes = t
                    }
                    if (R.includes("sidecars")) {
                        let t = f({
                                blobs: B,
                                commitments: e,
                                kzg: M
                            }),
                            n = function(e) {
                                let {
                                    data: t,
                                    kzg: n,
                                    to: r
                                } = e, i = e.blobs ? ? function(e) {
                                    let t = e.to ? ? ("string" == typeof e.data ? "hex" : "bytes"),
                                        n = "string" == typeof e.data ? (0, u.nr)(e.data) : e.data,
                                        r = (0, w.d)(n);
                                    if (!r) throw new y;
                                    if (r > 761855) throw new g({
                                        maxSize: 761855,
                                        size: r
                                    });
                                    let i = [],
                                        o = !0,
                                        s = 0;
                                    for (; o;) {
                                        let e = (0, b.q)(new Uint8Array(131072)),
                                            t = 0;
                                        for (; t < 4096;) {
                                            let r = n.slice(s, s + 31);
                                            if (e.pushByte(0), e.pushBytes(r), r.length < 31) {
                                                e.pushByte(128), o = !1;
                                                break
                                            }
                                            t++, s += 31
                                        }
                                        i.push(e)
                                    }
                                    return "bytes" === t ? i.map(e => e.bytes) : i.map(e => (0, l.ci)(e.bytes))
                                }({
                                    data: t,
                                    to: r
                                }), o = e.commitments ? ? d({
                                    blobs: i,
                                    kzg: n,
                                    to: r
                                }), s = e.proofs ? ? f({
                                    blobs: i,
                                    commitments: o,
                                    kzg: n,
                                    to: r
                                }), a = [];
                                for (let e = 0; e < i.length; e++) a.push({
                                    blob: i[e],
                                    commitment: o[e],
                                    proof: s[e]
                                });
                                return a
                            }({
                                blobs: B,
                                commitments: e,
                                proofs: t,
                                to: "hex"
                            });
                        F.sidecars = n
                    }
                }
                if (R.includes("chainId") && (F.chainId = await U()), R.includes("nonce") && void 0 === O && N) {
                    if (S) {
                        let t = await U();
                        F.nonce = await S.consume({
                            address: N.address,
                            chainId: t,
                            client: e
                        })
                    } else F.nonce = await (0, v.s)(e, a.K, "getTransactionCount")({
                        address: N.address,
                        blockTag: "pending"
                    })
                }
                if ((R.includes("fees") || R.includes("type")) && void 0 === T) try {
                    F.type = function(e) {
                        if (e.type) return e.type;
                        if (void 0 !== e.authorizationList) return "eip7702";
                        if (void 0 !== e.blobs || void 0 !== e.blobVersionedHashes || void 0 !== e.maxFeePerBlobGas || void 0 !== e.sidecars) return "eip4844";
                        if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas) return "eip1559";
                        if (void 0 !== e.gasPrice) return void 0 !== e.accessList ? "eip2930" : "legacy";
                        throw new C.j3({
                            transaction: e
                        })
                    }(F)
                } catch {
                    let e = await D();
                    F.type = "bigint" == typeof e ? .baseFeePerGas ? "eip1559" : "legacy"
                }
                if (R.includes("fees")) {
                    if ("legacy" !== F.type && "eip2930" !== F.type) {
                        if (void 0 === F.maxFeePerGas || void 0 === F.maxPriorityFeePerGas) {
                            let n = await D(),
                                {
                                    maxFeePerGas: r,
                                    maxPriorityFeePerGas: o
                                } = await (0, i.C)(e, {
                                    block: n,
                                    chain: k,
                                    request: F
                                });
                            if (void 0 === t.maxPriorityFeePerGas && t.maxFeePerGas && t.maxFeePerGas < o) throw new c.ld({
                                maxPriorityFeePerGas: o
                            });
                            F.maxPriorityFeePerGas = o, F.maxFeePerGas = r
                        }
                    } else {
                        if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas) throw new c.e5;
                        let n = await D(),
                            {
                                gasPrice: r
                            } = await (0, i.C)(e, {
                                block: n,
                                chain: k,
                                request: F,
                                type: "legacy"
                            });
                        F.gasPrice = r
                    }
                }
                return R.includes("gas") && void 0 === P && (F.gas = await (0, v.s)(e, o.Q, "estimateGas")({ ...F,
                    account: N ? {
                        address: N.address,
                        type: "json-rpc"
                    } : void 0
                })), (0, A.F)(F), delete F.parameters, F
            }
        },
        96432: function(e, t, n) {
            "use strict";
            async function r(e, {
                serializedTransaction: t
            }) {
                return e.request({
                    method: "eth_sendRawTransaction",
                    params: [t]
                }, {
                    retryCount: 0
                })
            }
            n.d(t, {
                p: function() {
                    return r
                }
            })
        },
        60283: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return r
                }
            });
            let r = {
                formatters: void 0,
                fees: void 0,
                serializers: void 0,
                id: 1,
                name: "Ethereum",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://cloudflare-eth.com"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Etherscan",
                        url: "https://etherscan.io",
                        apiUrl: "https://api.etherscan.io/api"
                    }
                },
                contracts: {
                    ensRegistry: {
                        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                    },
                    ensUniversalResolver: {
                        address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
                        blockCreated: 19258213
                    },
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 14353601
                    }
                }
            }
        },
        72688: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return o
                }
            });
            var r = n(96104),
                i = n(14851);

            function o(e) {
                let {
                    batch: t,
                    cacheTime: n = e.pollingInterval ? ? 4e3,
                    ccipRead: o,
                    key: s = "base",
                    name: a = "Base Client",
                    pollingInterval: c = 4e3,
                    type: u = "base"
                } = e, l = e.chain, d = e.account ? (0, r.T)(e.account) : void 0, {
                    config: f,
                    request: h,
                    value: p
                } = e.transport({
                    chain: l,
                    pollingInterval: c
                }), m = {
                    account: d,
                    batch: t,
                    cacheTime: n,
                    ccipRead: o,
                    chain: l,
                    key: s,
                    name: a,
                    pollingInterval: c,
                    request: h,
                    transport: { ...f,
                        ...p
                    },
                    type: u,
                    uid: (0, i.h)()
                };
                return Object.assign(m, {
                    extend: function e(t) {
                        return n => {
                            let r = n(t);
                            for (let e in m) delete r[e];
                            let i = { ...t,
                                ...r
                            };
                            return Object.assign(i, {
                                extend: e(i)
                            })
                        }
                    }(m)
                })
            }
        },
        93423: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return f
                }
            });
            var r = n(6649),
                i = n(4456),
                o = n(96329),
                s = n(95046),
                a = n(36494);
            let c = new(n(98992)).k(8192);
            var u = n(55894),
                l = n(47499),
                d = n(14851);

            function f({
                key: e,
                name: t,
                request: n,
                retryCount: f = 3,
                retryDelay: h = 150,
                timeout: p,
                type: m
            }, g) {
                return {
                    config: {
                        key: e,
                        name: t,
                        request: n,
                        retryCount: f,
                        retryDelay: h,
                        timeout: p,
                        type: m
                    },
                    request: function(e, t = {}) {
                        return async (n, d = {}) => {
                            let {
                                dedupe: f = !1,
                                retryDelay: h = 150,
                                retryCount: p = 3,
                                uid: m
                            } = { ...t,
                                ...d
                            }, g = f ? (0, a.w)((0, s.$G)(`${m}.${(0,l.P)(n)}`)) : void 0;
                            return function(e, {
                                enabled: t = !0,
                                id: n
                            }) {
                                if (!t || !n) return e();
                                if (c.get(n)) return c.get(n);
                                let r = e().finally(() => c.delete(n));
                                return c.set(n, r), r
                            }(() => (0, u.J)(async () => {
                                try {
                                    return await e(n)
                                } catch (e) {
                                    switch (e.code) {
                                        case o.s7.code:
                                            throw new o.s7(e);
                                        case o.B.code:
                                            throw new o.B(e);
                                        case o.LX.code:
                                            throw new o.LX(e, {
                                                method: n.method
                                            });
                                        case o.nY.code:
                                            throw new o.nY(e);
                                        case o.XS.code:
                                            throw new o.XS(e);
                                        case o.yR.code:
                                            throw new o.yR(e);
                                        case o.Og.code:
                                            throw new o.Og(e);
                                        case o.pT.code:
                                            throw new o.pT(e);
                                        case o.KB.code:
                                            throw new o.KB(e);
                                        case o.gS.code:
                                            throw new o.gS(e, {
                                                method: n.method
                                            });
                                        case o.Pv.code:
                                            throw new o.Pv(e);
                                        case o.GD.code:
                                            throw new o.GD(e);
                                        case o.ab.code:
                                            throw new o.ab(e);
                                        case o.PE.code:
                                            throw new o.PE(e);
                                        case o.Ts.code:
                                            throw new o.Ts(e);
                                        case o.u5.code:
                                            throw new o.u5(e);
                                        case o.I0.code:
                                            throw new o.I0(e);
                                        case o.x3.code:
                                            throw new o.x3(e);
                                        case 5e3:
                                            throw new o.ab(e);
                                        default:
                                            if (e instanceof r.G) throw e;
                                            throw new o.ir(e)
                                    }
                                }
                            }, {
                                delay: ({
                                    count: e,
                                    error: t
                                }) => {
                                    if (t && t instanceof i.Gg) {
                                        let e = t ? .headers ? .get("Retry-After");
                                        if (e ? .match(/\d/)) return 1e3 * Number.parseInt(e)
                                    }
                                    return ~~(1 << e) * h
                                },
                                retryCount: p,
                                shouldRetry: ({
                                    error: e
                                }) => "code" in e && "number" == typeof e.code ? -1 === e.code || e.code === o.Pv.code || e.code === o.XS.code : !(e instanceof i.Gg) || !e.status || 403 === e.status || 408 === e.status || 413 === e.status || 429 === e.status || 500 === e.status || 502 === e.status || 503 === e.status || 504 === e.status
                            }), {
                                enabled: f,
                                id: g
                            })
                        }
                    }(n, {
                        retryCount: f,
                        retryDelay: h,
                        uid: (0, d.h)()
                    }),
                    value: g
                }
            }
        },
        62536: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return d
                }
            });
            var r = n(4456),
                i = n(6649);
            class o extends i.G {
                constructor() {
                    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
                        docsPath: "/docs/clients/intro",
                        name: "UrlRequiredError"
                    })
                }
            }
            var s = n(10639),
                a = n(13581),
                c = n(47499);
            let u = {
                current: 0,
                take() {
                    return this.current++
                },
                reset() {
                    this.current = 0
                }
            };
            var l = n(93423);

            function d(e, t = {}) {
                let {
                    batch: n,
                    fetchOptions: i,
                    key: d = "http",
                    name: f = "HTTP JSON-RPC",
                    onFetchRequest: h,
                    onFetchResponse: p,
                    retryDelay: m
                } = t;
                return ({
                    chain: g,
                    retryCount: y,
                    timeout: b
                }) => {
                    let {
                        batchSize: w = 1e3,
                        wait: v = 0
                    } = "object" == typeof n ? n : {}, A = t.retryCount ? ? y, C = b ? ? t.timeout ? ? 1e4, E = e || g ? .rpcUrls.default.http[0];
                    if (!E) throw new o;
                    let x = function(e, t = {}) {
                        return {
                            async request(n) {
                                let {
                                    body: i,
                                    onRequest: o = t.onRequest,
                                    onResponse: s = t.onResponse,
                                    timeout: l = t.timeout ? ? 1e4
                                } = n, d = { ...t.fetchOptions ? ? {},
                                    ...n.fetchOptions ? ? {}
                                }, {
                                    headers: f,
                                    method: h,
                                    signal: p
                                } = d;
                                try {
                                    let t;
                                    let n = await (0, a.F)(async ({
                                        signal: t
                                    }) => {
                                        let n = { ...d,
                                                body: Array.isArray(i) ? (0, c.P)(i.map(e => ({
                                                    jsonrpc: "2.0",
                                                    id: e.id ? ? u.take(),
                                                    ...e
                                                }))) : (0, c.P)({
                                                    jsonrpc: "2.0",
                                                    id: i.id ? ? u.take(),
                                                    ...i
                                                }),
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    ...f
                                                },
                                                method: h || "POST",
                                                signal: p || (l > 0 ? t : null)
                                            },
                                            r = new Request(e, n);
                                        return o && await o(r), await fetch(e, n)
                                    }, {
                                        errorInstance: new r.W5({
                                            body: i,
                                            url: e
                                        }),
                                        timeout: l,
                                        signal: !0
                                    });
                                    if (s && await s(n), n.headers.get("Content-Type") ? .startsWith("application/json") ? t = await n.json() : (t = await n.text(), t = JSON.parse(t || "{}")), !n.ok) throw new r.Gg({
                                        body: i,
                                        details: (0, c.P)(t.error) || n.statusText,
                                        headers: n.headers,
                                        status: n.status,
                                        url: e
                                    });
                                    return t
                                } catch (t) {
                                    if (t instanceof r.Gg || t instanceof r.W5) throw t;
                                    throw new r.Gg({
                                        body: i,
                                        cause: t,
                                        url: e
                                    })
                                }
                            }
                        }
                    }(E, {
                        fetchOptions: i,
                        onRequest: h,
                        onResponse: p,
                        timeout: C
                    });
                    return (0, l.q)({
                        key: d,
                        name: f,
                        async request({
                            method: e,
                            params: t
                        }) {
                            let i = {
                                    method: e,
                                    params: t
                                },
                                {
                                    schedule: o
                                } = (0, s.S)({
                                    id: E,
                                    wait: v,
                                    shouldSplitBatch: e => e.length > w,
                                    fn: e => x.request({
                                        body: e
                                    }),
                                    sort: (e, t) => e.id - t.id
                                }),
                                a = async e => n ? o(e) : [await x.request({
                                    body: e
                                })],
                                [{
                                    error: c,
                                    result: u
                                }] = await a(i);
                            if (c) throw new r.bs({
                                body: i,
                                error: c,
                                url: E
                            });
                            return u
                        },
                        retryCount: A,
                        retryDelay: m,
                        timeout: C,
                        type: "http"
                    }, {
                        fetchOptions: i,
                        url: E
                    })
                }
            }
        },
        21620: function(e, t, n) {
            "use strict";
            n.d(t, {
                $o: function() {
                    return u
                },
                F8: function() {
                    return r
                },
                X$: function() {
                    return c
                },
                du: function() {
                    return s
                },
                k3: function() {
                    return o
                },
                nZ: function() {
                    return a
                }
            });
            let r = [{
                    inputs: [{
                        components: [{
                            name: "target",
                            type: "address"
                        }, {
                            name: "allowFailure",
                            type: "bool"
                        }, {
                            name: "callData",
                            type: "bytes"
                        }],
                        name: "calls",
                        type: "tuple[]"
                    }],
                    name: "aggregate3",
                    outputs: [{
                        components: [{
                            name: "success",
                            type: "bool"
                        }, {
                            name: "returnData",
                            type: "bytes"
                        }],
                        name: "returnData",
                        type: "tuple[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }],
                i = [{
                    inputs: [],
                    name: "ResolverNotFound",
                    type: "error"
                }, {
                    inputs: [],
                    name: "ResolverWildcardNotSupported",
                    type: "error"
                }, {
                    inputs: [],
                    name: "ResolverNotContract",
                    type: "error"
                }, {
                    inputs: [{
                        name: "returnData",
                        type: "bytes"
                    }],
                    name: "ResolverError",
                    type: "error"
                }, {
                    inputs: [{
                        components: [{
                            name: "status",
                            type: "uint16"
                        }, {
                            name: "message",
                            type: "string"
                        }],
                        name: "errors",
                        type: "tuple[]"
                    }],
                    name: "HttpError",
                    type: "error"
                }],
                o = [...i, {
                    name: "resolve",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes"
                    }, {
                        name: "data",
                        type: "bytes"
                    }],
                    outputs: [{
                        name: "",
                        type: "bytes"
                    }, {
                        name: "address",
                        type: "address"
                    }]
                }, {
                    name: "resolve",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes"
                    }, {
                        name: "data",
                        type: "bytes"
                    }, {
                        name: "gateways",
                        type: "string[]"
                    }],
                    outputs: [{
                        name: "",
                        type: "bytes"
                    }, {
                        name: "address",
                        type: "address"
                    }]
                }],
                s = [...i, {
                    name: "reverse",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        type: "bytes",
                        name: "reverseName"
                    }],
                    outputs: [{
                        type: "string",
                        name: "resolvedName"
                    }, {
                        type: "address",
                        name: "resolvedAddress"
                    }, {
                        type: "address",
                        name: "reverseResolver"
                    }, {
                        type: "address",
                        name: "resolver"
                    }]
                }, {
                    name: "reverse",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        type: "bytes",
                        name: "reverseName"
                    }, {
                        type: "string[]",
                        name: "gateways"
                    }],
                    outputs: [{
                        type: "string",
                        name: "resolvedName"
                    }, {
                        type: "address",
                        name: "resolvedAddress"
                    }, {
                        type: "address",
                        name: "reverseResolver"
                    }, {
                        type: "address",
                        name: "resolver"
                    }]
                }],
                a = [{
                    name: "text",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes32"
                    }, {
                        name: "key",
                        type: "string"
                    }],
                    outputs: [{
                        name: "",
                        type: "string"
                    }]
                }],
                c = [{
                    name: "addr",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes32"
                    }],
                    outputs: [{
                        name: "",
                        type: "address"
                    }]
                }, {
                    name: "addr",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes32"
                    }, {
                        name: "coinType",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "bytes"
                    }]
                }],
                u = [{
                    inputs: [{
                        name: "_signer",
                        type: "address"
                    }, {
                        name: "_hash",
                        type: "bytes32"
                    }, {
                        name: "_signature",
                        type: "bytes"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }]
        },
        13955: function(e, t, n) {
            "use strict";
            n.d(t, {
                NO: function() {
                    return r
                },
                ST: function() {
                    return o
                },
                pG: function() {
                    return i
                }
            });
            let r = "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
                i = "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
                o = "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"
        },
        47807: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return r
                },
                Up: function() {
                    return i
                },
                hZ: function() {
                    return o
                }
            });
            let r = {
                    1: "An `assert` condition failed.",
                    17: "Arithmetic operation resulted in underflow or overflow.",
                    18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
                    33: "Attempted to convert to an invalid type.",
                    34: "Attempted to access a storage byte array that is incorrectly encoded.",
                    49: "Performed `.pop()` on an empty array",
                    50: "Array index is out of bounds.",
                    65: "Allocated too much memory or created an array which is too large.",
                    81: "Attempted to call a zero-initialized variable of internal function type."
                },
                i = {
                    inputs: [{
                        name: "message",
                        type: "string"
                    }],
                    name: "Error",
                    type: "error"
                },
                o = {
                    inputs: [{
                        name: "reason",
                        type: "uint256"
                    }],
                    name: "Panic",
                    type: "error"
                }
        },
        90408: function(e, t, n) {
            "use strict";
            n.d(t, {
                Bd: function() {
                    return o
                },
                Zn: function() {
                    return i
                },
                ez: function() {
                    return r
                }
            });
            let r = {
                    gwei: 9,
                    wei: 18
                },
                i = {
                    ether: -9,
                    wei: 9
                },
                o = {
                    ether: -18,
                    gwei: -9
                }
        },
        52186: function(e, t, n) {
            "use strict";
            n.d(t, {
                CI: function() {
                    return x
                },
                FM: function() {
                    return p
                },
                Gy: function() {
                    return C
                },
                KY: function() {
                    return v
                },
                M4: function() {
                    return d
                },
                MX: function() {
                    return b
                },
                S4: function() {
                    return w
                },
                SM: function() {
                    return A
                },
                cO: function() {
                    return a
                },
                dh: function() {
                    return E
                },
                fM: function() {
                    return s
                },
                fs: function() {
                    return f
                },
                gr: function() {
                    return l
                },
                hn: function() {
                    return I
                },
                lC: function() {
                    return m
                },
                mv: function() {
                    return g
                },
                wM: function() {
                    return B
                },
                wb: function() {
                    return u
                },
                xB: function() {
                    return c
                },
                xL: function() {
                    return y
                },
                yP: function() {
                    return h
                }
            });
            var r = n(20101),
                i = n(7508),
                o = n(6649);
            class s extends o.G {
                constructor({
                    docsPath: e
                }) {
                    super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.", {
                        docsPath: e,
                        name: "AbiConstructorNotFoundError"
                    })
                }
            }
            class a extends o.G {
                constructor({
                    docsPath: e
                }) {
                    super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.", {
                        docsPath: e,
                        name: "AbiConstructorParamsNotFoundError"
                    })
                }
            }
            class c extends o.G {
                constructor({
                    data: e,
                    params: t,
                    size: n
                }) {
                    super(`Data size of ${n} bytes is too small for given parameters.`, {
                        metaMessages: [`Params: (${(0,r.h)(t,{includeName:!0})})`, `Data:   ${e} (${n} bytes)`],
                        name: "AbiDecodingDataSizeTooSmallError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "params", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "size", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = e, this.params = t, this.size = n
                }
            }
            class u extends o.G {
                constructor() {
                    super('Cannot decode zero data ("0x") with ABI parameters.', {
                        name: "AbiDecodingZeroDataError"
                    })
                }
            }
            class l extends o.G {
                constructor({
                    expectedLength: e,
                    givenLength: t,
                    type: n
                }) {
                    super(`ABI encoding array length mismatch for type ${n}.
Expected length: ${e}
Given length: ${t}`, {
                        name: "AbiEncodingArrayLengthMismatchError"
                    })
                }
            }
            class d extends o.G {
                constructor({
                    expectedSize: e,
                    value: t
                }) {
                    super(`Size of bytes "${t}" (bytes${(0,i.d)(t)}) does not match expected size (bytes${e}).`, {
                        name: "AbiEncodingBytesSizeMismatchError"
                    })
                }
            }
            class f extends o.G {
                constructor({
                    expectedLength: e,
                    givenLength: t
                }) {
                    super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`, {
                        name: "AbiEncodingLengthMismatchError"
                    })
                }
            }
            class h extends o.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`, {
                        docsPath: t,
                        name: "AbiErrorSignatureNotFoundError"
                    }), Object.defineProperty(this, "signature", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.signature = e
                }
            }
            class p extends o.G {
                constructor({
                    docsPath: e
                }) {
                    super("Cannot extract event signature from empty topics.", {
                        docsPath: e,
                        name: "AbiEventSignatureEmptyTopicsError"
                    })
                }
            }
            class m extends o.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`, {
                        docsPath: t,
                        name: "AbiEventSignatureNotFoundError"
                    })
                }
            }
            class g extends o.G {
                constructor(e, {
                    docsPath: t
                } = {}) {
                    super(`Event ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`, {
                        docsPath: t,
                        name: "AbiEventNotFoundError"
                    })
                }
            }
            class y extends o.G {
                constructor(e, {
                    docsPath: t
                } = {}) {
                    super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`, {
                        docsPath: t,
                        name: "AbiFunctionNotFoundError"
                    })
                }
            }
            class b extends o.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`, {
                        docsPath: t,
                        name: "AbiFunctionOutputsNotFoundError"
                    })
                }
            }
            class w extends o.G {
                constructor(e, t) {
                    super("Found ambiguous types in overloaded ABI items.", {
                        metaMessages: [`\`${e.type}\` in \`${(0,r.t)(e.abiItem)}\`, and`, `\`${t.type}\` in \`${(0,r.t)(t.abiItem)}\``, "", "These types encode differently and cannot be distinguished at runtime.", "Remove one of the ambiguous items in the ABI."],
                        name: "AbiItemAmbiguityError"
                    })
                }
            }
            class v extends o.G {
                constructor({
                    expectedSize: e,
                    givenSize: t
                }) {
                    super(`Expected bytes${e}, got bytes${t}.`, {
                        name: "BytesSizeMismatchError"
                    })
                }
            }
            class A extends o.G {
                constructor({
                    abiItem: e,
                    data: t,
                    params: n,
                    size: i
                }) {
                    super(`Data size of ${i} bytes is too small for non-indexed event parameters.`, {
                        metaMessages: [`Params: (${(0,r.h)(n,{includeName:!0})})`, `Data:   ${t} (${i} bytes)`],
                        name: "DecodeLogDataMismatch"
                    }), Object.defineProperty(this, "abiItem", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "params", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "size", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.abiItem = e, this.data = t, this.params = n, this.size = i
                }
            }
            class C extends o.G {
                constructor({
                    abiItem: e,
                    param: t
                }) {
                    super(`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,r.t)(e,{includeName:!0})}".`, {
                        name: "DecodeLogTopicsMismatch"
                    }), Object.defineProperty(this, "abiItem", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.abiItem = e
                }
            }
            class E extends o.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`, {
                        docsPath: t,
                        name: "InvalidAbiEncodingType"
                    })
                }
            }
            class x extends o.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`, {
                        docsPath: t,
                        name: "InvalidAbiDecodingType"
                    })
                }
            }
            class I extends o.G {
                constructor(e) {
                    super(`Value "${e}" is not a valid array.`, {
                        name: "InvalidArrayError"
                    })
                }
            }
            class B extends o.G {
                constructor(e) {
                    super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`, {
                        name: "InvalidDefinitionTypeError"
                    })
                }
            }
        },
        25355: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return o
                },
                o: function() {
                    return i
                }
            });
            var r = n(6649);
            class i extends r.G {
                constructor({
                    docsPath: e
                } = {}) {
                    super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.", {
                        docsPath: e,
                        docsSlug: "account",
                        name: "AccountNotFoundError"
                    })
                }
            }
            class o extends r.G {
                constructor({
                    docsPath: e,
                    metaMessages: t,
                    type: n
                }) {
                    super(`Account type "${n}" is not supported.`, {
                        docsPath: e,
                        metaMessages: t,
                        name: "AccountTypeNotSupportedError"
                    })
                }
            }
        },
        51359: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return i
                }
            });
            var r = n(6649);
            class i extends r.G {
                constructor({
                    address: e
                }) {
                    super(`Address "${e}" is invalid.`, {
                        metaMessages: ["- Address must be a hex value of 20 bytes (40 hex characters).", "- Address must match its checksum counterpart."],
                        name: "InvalidAddressError"
                    })
                }
            }
        },
        6649: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return o
                }
            });
            let r = "2.21.3",
                i = {
                    getDocsUrl: ({
                        docsBaseUrl: e,
                        docsPath: t = "",
                        docsSlug: n
                    }) => t ? `${e??"https://viem.sh"}${t}${n?`#${n}`:""}` : void 0,
                    version: r
                };
            class o extends Error {
                constructor(e, t = {}) {
                    let n = t.cause instanceof o ? t.cause.details : t.cause ? .message ? t.cause.message : t.details,
                        s = t.cause instanceof o && t.cause.docsPath || t.docsPath,
                        a = i.getDocsUrl ? .({ ...t,
                            docsPath: s
                        });
                    super([e || "An error occurred.", "", ...t.metaMessages ? [...t.metaMessages, ""] : [], ...a ? [`Docs: ${a}`] : [], ...n ? [`Details: ${n}`] : [], ...i.version ? [`Version: ${i.version}`] : []].join("\n"), t.cause ? {
                        cause: t.cause
                    } : void 0), Object.defineProperty(this, "details", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "docsPath", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "metaMessages", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "shortMessage", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "version", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "BaseError"
                    }), this.details = n, this.docsPath = s, this.metaMessages = t.metaMessages, this.name = t.name ? ? this.name, this.shortMessage = e, this.version = r
                }
                walk(e) {
                    return function e(t, n) {
                        return n ? .(t) ? t : t && "object" == typeof t && "cause" in t ? e(t.cause, n) : n ? null : t
                    }(this, e)
                }
            }
        },
        87655: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return i
                }
            });
            var r = n(6649);
            class i extends r.G {
                constructor({
                    blockHash: e,
                    blockNumber: t
                }) {
                    let n = "Block";
                    e && (n = `Block at hash "${e}"`), t && (n = `Block at number "${t}"`), super(`${n} could not be found.`, {
                        name: "BlockNotFoundError"
                    })
                }
            }
        },
        89045: function(e, t, n) {
            "use strict";
            n.d(t, {
                Bk: function() {
                    return s
                },
                Yl: function() {
                    return o
                },
                mm: function() {
                    return i
                },
                pZ: function() {
                    return a
                }
            });
            var r = n(6649);
            class i extends r.G {
                constructor({
                    blockNumber: e,
                    chain: t,
                    contract: n
                }) {
                    super(`Chain "${t.name}" does not support contract "${n.name}".`, {
                        metaMessages: ["This could be due to any of the following:", ...e && n.blockCreated && n.blockCreated > e ? [`- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`] : [`- The chain does not have the contract "${n.name}" configured.`]],
                        name: "ChainDoesNotSupportContract"
                    })
                }
            }
            class o extends r.G {
                constructor({
                    chain: e,
                    currentChainId: t
                }) {
                    super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`, {
                        metaMessages: [`Current Chain ID:  ${t}`, `Expected Chain ID: ${e.id} – ${e.name}`],
                        name: "ChainMismatchError"
                    })
                }
            }
            class s extends r.G {
                constructor() {
                    super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.", {
                        name: "ChainNotFoundError"
                    })
                }
            }
            class a extends r.G {
                constructor() {
                    super("No chain was provided to the Client.", {
                        name: "ClientChainNotConfiguredError"
                    })
                }
            }
        },
        58591: function(e, t, n) {
            "use strict";
            n.d(t, {
                cg: function() {
                    return y
                },
                uq: function() {
                    return b
                },
                Lu: function() {
                    return w
                },
                Dk: function() {
                    return v
                },
                Mo: function() {
                    return A
                },
                VQ: function() {
                    return C
                }
            });
            var r = n(96104),
                i = n(47807),
                o = n(71108),
                s = n(20101),
                a = n(47499);

            function c({
                abiItem: e,
                args: t,
                includeFunctionName: n = !0,
                includeName: r = !1
            }) {
                if ("name" in e && "inputs" in e && e.inputs) return `${n?e.name:""}(${e.inputs.map((e,n)=>`${r&&e.name?`${e.name}: `:""}${"object"==typeof t[n]?(0,a.P)(t[n]):t[n]}`).join(", ")})`
            }
            var u = n(18748),
                l = n(85053),
                d = n(49268),
                f = n(52186),
                h = n(6649),
                p = n(75534),
                m = n(97658),
                g = n(87137);
            class y extends h.G {
                constructor(e, {
                    account: t,
                    docsPath: n,
                    chain: i,
                    data: o,
                    gas: s,
                    gasPrice: a,
                    maxFeePerGas: c,
                    maxPriorityFeePerGas: u,
                    nonce: f,
                    to: h,
                    value: g,
                    stateOverride: y
                }) {
                    let b = t ? (0, r.T)(t) : void 0,
                        w = (0, m.xr)({
                            from: b ? .address,
                            to: h,
                            value: void 0 !== g && `${(0,l.d)(g)} ${i?.nativeCurrency?.symbol||"ETH"}`,
                            data: o,
                            gas: s,
                            gasPrice: void 0 !== a && `${(0,d.o)(a)} gwei`,
                            maxFeePerGas: void 0 !== c && `${(0,d.o)(c)} gwei`,
                            maxPriorityFeePerGas: void 0 !== u && `${(0,d.o)(u)} gwei`,
                            nonce: f
                        });
                    y && (w += `
${(0,p.Bj)(y)}`), super(e.shortMessage, {
                        cause: e,
                        docsPath: n,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Raw Call Arguments:", w].filter(Boolean),
                        name: "CallExecutionError"
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.cause = e
                }
            }
            class b extends h.G {
                constructor(e, {
                    abi: t,
                    args: n,
                    contractAddress: r,
                    docsPath: i,
                    functionName: o,
                    sender: a
                }) {
                    let l = (0, u.mE)({
                            abi: t,
                            args: n,
                            name: o
                        }),
                        d = l ? c({
                            abiItem: l,
                            args: n,
                            includeFunctionName: !1,
                            includeName: !1
                        }) : void 0,
                        f = l ? (0, s.t)(l, {
                            includeName: !0
                        }) : void 0,
                        h = (0, m.xr)({
                            address: r && (0, g.C)(r),
                            function: f,
                            args: d && "()" !== d && `${[...Array(o?.length??0).keys()].map(()=>" ").join("")}${d}`,
                            sender: a
                        });
                    super(e.shortMessage || `An unknown error occurred while executing the contract function "${o}".`, {
                        cause: e,
                        docsPath: i,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], h && "Contract Call:", h].filter(Boolean),
                        name: "ContractFunctionExecutionError"
                    }), Object.defineProperty(this, "abi", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "args", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "contractAddress", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "formattedArgs", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "functionName", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "sender", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.abi = t, this.args = n, this.cause = e, this.contractAddress = r, this.functionName = o, this.sender = a
                }
            }
            class w extends h.G {
                constructor({
                    abi: e,
                    data: t,
                    functionName: n,
                    message: r
                }) {
                    let a, u, l, d, h;
                    if (t && "0x" !== t) try {
                        let {
                            abiItem: n,
                            errorName: r,
                            args: a
                        } = h = (0, o.p)({
                            abi: e,
                            data: t
                        });
                        if ("Error" === r) l = a[0];
                        else if ("Panic" === r) {
                            let [e] = a;
                            l = i.$[e]
                        } else {
                            let e = n ? (0, s.t)(n, {
                                    includeName: !0
                                }) : void 0,
                                t = n && a ? c({
                                    abiItem: n,
                                    args: a,
                                    includeFunctionName: !1,
                                    includeName: !1
                                }) : void 0;
                            u = [e ? `Error: ${e}` : "", t && "()" !== t ? `       ${[...Array(r?.length??0).keys()].map(()=>" ").join("")}${t}` : ""]
                        }
                    } catch (e) {
                        a = e
                    } else r && (l = r);
                    a instanceof f.yP && (d = a.signature, u = [`Unable to decode signature "${d}" as it was not found on the provided ABI.`, "Make sure you are using the correct ABI and that the error exists on it.", `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`]), super(l && "execution reverted" !== l || d ? [`The contract function "${n}" reverted with the following ${d?"signature":"reason"}:`, l || d].join("\n") : `The contract function "${n}" reverted.`, {
                        cause: a,
                        metaMessages: u,
                        name: "ContractFunctionRevertedError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "reason", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "signature", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = h, this.reason = l, this.signature = d
                }
            }
            class v extends h.G {
                constructor({
                    functionName: e
                }) {
                    super(`The contract function "${e}" returned no data ("0x").`, {
                        metaMessages: ["This could be due to any of the following:", `  - The contract does not have the function "${e}",`, "  - The parameters passed to the contract function may be invalid, or", "  - The address is not a contract."],
                        name: "ContractFunctionZeroDataError"
                    })
                }
            }
            class A extends h.G {
                constructor({
                    factory: e
                }) {
                    super(`Deployment for counterfactual contract call failed${e?` for factory "${e}".`:""}`, {
                        metaMessages: ["Please ensure:", "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).", "- The `factoryData` is a valid encoded function call for contract deployment function on the factory."],
                        name: "CounterfactualDeploymentFailedError"
                    })
                }
            }
            class C extends h.G {
                constructor({
                    data: e,
                    message: t
                }) {
                    super(t || "", {
                        name: "RawContractError"
                    }), Object.defineProperty(this, "code", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 3
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = e
                }
            }
        },
        19477: function(e, t, n) {
            "use strict";
            n.d(t, {
                KD: function() {
                    return s
                },
                T_: function() {
                    return i
                },
                lQ: function() {
                    return o
                }
            });
            var r = n(6649);
            class i extends r.G {
                constructor({
                    offset: e
                }) {
                    super(`Offset \`${e}\` cannot be negative.`, {
                        name: "NegativeOffsetError"
                    })
                }
            }
            class o extends r.G {
                constructor({
                    length: e,
                    position: t
                }) {
                    super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`, {
                        name: "PositionOutOfBoundsError"
                    })
                }
            }
            class s extends r.G {
                constructor({
                    count: e,
                    limit: t
                }) {
                    super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`, {
                        name: "RecursiveReadLimitExceededError"
                    })
                }
            }
        },
        75057: function(e, t, n) {
            "use strict";
            n.d(t, {
                $s: function() {
                    return o
                },
                W_: function() {
                    return s
                },
                mV: function() {
                    return i
                }
            });
            var r = n(6649);
            class i extends r.G {
                constructor({
                    offset: e,
                    position: t,
                    size: n
                }) {
                    super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${n}).`, {
                        name: "SliceOffsetOutOfBoundsError"
                    })
                }
            }
            class o extends r.G {
                constructor({
                    size: e,
                    targetSize: t,
                    type: n
                }) {
                    super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`, {
                        name: "SizeExceedsPaddingSizeError"
                    })
                }
            }
            class s extends r.G {
                constructor({
                    size: e,
                    targetSize: t,
                    type: n
                }) {
                    super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} is expected to be ${t} ${n} long, but is ${e} ${n} long.`, {
                        name: "InvalidBytesLengthError"
                    })
                }
            }
        },
        74188: function(e, t, n) {
            "use strict";
            n.d(t, {
                J5: function() {
                    return i
                },
                M6: function() {
                    return s
                },
                yr: function() {
                    return o
                }
            });
            var r = n(6649);
            class i extends r.G {
                constructor({
                    max: e,
                    min: t,
                    signed: n,
                    size: r,
                    value: i
                }) {
                    super(`Number "${i}" is not in safe ${r?`${8*r}-bit ${n?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`, {
                        name: "IntegerOutOfRangeError"
                    })
                }
            }
            class o extends r.G {
                constructor(e) {
                    super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
                        name: "InvalidBytesBooleanError"
                    })
                }
            }
            class s extends r.G {
                constructor({
                    givenSize: e,
                    maxSize: t
                }) {
                    super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
                        name: "SizeOverflowError"
                    })
                }
            }
        },
        25511: function(e, t, n) {
            "use strict";
            n.d(t, {
                Fz: function() {
                    return o
                },
                e5: function() {
                    return s
                },
                ld: function() {
                    return a
                }
            });
            var r = n(49268),
                i = n(6649);
            class o extends i.G {
                constructor() {
                    super("`baseFeeMultiplier` must be greater than 1.", {
                        name: "BaseFeeScalarError"
                    })
                }
            }
            class s extends i.G {
                constructor() {
                    super("Chain does not support EIP-1559 fees.", {
                        name: "Eip1559FeesNotSupportedError"
                    })
                }
            }
            class a extends i.G {
                constructor({
                    maxPriorityFeePerGas: e
                }) {
                    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,r.o)(e)} gwei).`, {
                        name: "MaxFeePerGasTooLowError"
                    })
                }
            }
        },
        37764: function(e, t, n) {
            "use strict";
            n.d(t, {
                C_: function() {
                    return d
                },
                G$: function() {
                    return a
                },
                Hh: function() {
                    return s
                },
                M_: function() {
                    return o
                },
                WF: function() {
                    return f
                },
                ZI: function() {
                    return c
                },
                cj: function() {
                    return g
                },
                cs: function() {
                    return m
                },
                dR: function() {
                    return h
                },
                pZ: function() {
                    return p
                },
                se: function() {
                    return l
                },
                vU: function() {
                    return u
                }
            });
            var r = n(49268),
                i = n(6649);
            class o extends i.G {
                constructor({
                    cause: e,
                    message: t
                } = {}) {
                    let n = t ? .replace("execution reverted: ", "") ? .replace("execution reverted", "");
                    super(`Execution reverted ${n?`with reason: ${n}`:"for an unknown reason"}.`, {
                        cause: e,
                        name: "ExecutionRevertedError"
                    })
                }
            }
            Object.defineProperty(o, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 3
            }), Object.defineProperty(o, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /execution reverted/
            });
            class s extends i.G {
                constructor({
                    cause: e,
                    maxFeePerGas: t
                } = {}) {
                    super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,r.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`, {
                        cause: e,
                        name: "FeeCapTooHighError"
                    })
                }
            }
            Object.defineProperty(s, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
            });
            class a extends i.G {
                constructor({
                    cause: e,
                    maxFeePerGas: t
                } = {}) {
                    super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,r.o)(t)}`:""} gwei) cannot be lower than the block base fee.`, {
                        cause: e,
                        name: "FeeCapTooLowError"
                    })
                }
            }
            Object.defineProperty(a, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
            });
            class c extends i.G {
                constructor({
                    cause: e,
                    nonce: t
                } = {}) {
                    super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`, {
                        cause: e,
                        name: "NonceTooHighError"
                    })
                }
            }
            Object.defineProperty(c, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /nonce too high/
            });
            class u extends i.G {
                constructor({
                    cause: e,
                    nonce: t
                } = {}) {
                    super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`, {
                        cause: e,
                        name: "NonceTooLowError"
                    })
                }
            }
            Object.defineProperty(u, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /nonce too low|transaction already imported|already known/
            });
            class l extends i.G {
                constructor({
                    cause: e,
                    nonce: t
                } = {}) {
                    super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`, {
                        cause: e,
                        name: "NonceMaxValueError"
                    })
                }
            }
            Object.defineProperty(l, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /nonce has max value/
            });
            class d extends i.G {
                constructor({
                    cause: e
                } = {}) {
                    super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.", {
                        cause: e,
                        metaMessages: ["This error could arise when the account does not have enough funds to:", " - pay for the total gas fee,", " - pay for the value to send.", " ", "The cost of the transaction is calculated as `gas * gas fee + value`, where:", " - `gas` is the amount of gas needed for transaction to execute,", " - `gas fee` is the gas fee,", " - `value` is the amount of ether to send to the recipient."],
                        name: "InsufficientFundsError"
                    })
                }
            }
            Object.defineProperty(d, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /insufficient funds|exceeds transaction sender account balance/
            });
            class f extends i.G {
                constructor({
                    cause: e,
                    gas: t
                } = {}) {
                    super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`, {
                        cause: e,
                        name: "IntrinsicGasTooHighError"
                    })
                }
            }
            Object.defineProperty(f, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /intrinsic gas too high|gas limit reached/
            });
            class h extends i.G {
                constructor({
                    cause: e,
                    gas: t
                } = {}) {
                    super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`, {
                        cause: e,
                        name: "IntrinsicGasTooLowError"
                    })
                }
            }
            Object.defineProperty(h, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /intrinsic gas too low/
            });
            class p extends i.G {
                constructor({
                    cause: e
                }) {
                    super("The transaction type is not supported for this chain.", {
                        cause: e,
                        name: "TransactionTypeNotSupportedError"
                    })
                }
            }
            Object.defineProperty(p, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /transaction type not valid/
            });
            class m extends i.G {
                constructor({
                    cause: e,
                    maxPriorityFeePerGas: t,
                    maxFeePerGas: n
                } = {}) {
                    super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,r.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n?` = ${(0,r.o)(n)} gwei`:""}).`, {
                        cause: e,
                        name: "TipAboveFeeCapError"
                    })
                }
            }
            Object.defineProperty(m, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
            });
            class g extends i.G {
                constructor({
                    cause: e
                }) {
                    super(`An error occurred while executing: ${e?.shortMessage}`, {
                        cause: e,
                        name: "UnknownNodeError"
                    })
                }
            }
        },
        4456: function(e, t, n) {
            "use strict";
            n.d(t, {
                Gg: function() {
                    return s
                },
                W5: function() {
                    return c
                },
                bs: function() {
                    return a
                }
            });
            var r = n(47499),
                i = n(6649),
                o = n(87137);
            class s extends i.G {
                constructor({
                    body: e,
                    cause: t,
                    details: n,
                    headers: i,
                    status: s,
                    url: a
                }) {
                    super("HTTP request failed.", {
                        cause: t,
                        details: n,
                        metaMessages: [s && `Status: ${s}`, `URL: ${(0,o.G)(a)}`, e && `Request body: ${(0,r.P)(e)}`].filter(Boolean),
                        name: "HttpRequestError"
                    }), Object.defineProperty(this, "body", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "headers", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "status", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "url", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.body = e, this.headers = i, this.status = s, this.url = a
                }
            }
            class a extends i.G {
                constructor({
                    body: e,
                    error: t,
                    url: n
                }) {
                    super("RPC Request failed.", {
                        cause: t,
                        details: t.message,
                        metaMessages: [`URL: ${(0,o.G)(n)}`, `Request body: ${(0,r.P)(e)}`],
                        name: "RpcRequestError"
                    }), Object.defineProperty(this, "code", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.code = t.code
                }
            }
            class c extends i.G {
                constructor({
                    body: e,
                    url: t
                }) {
                    super("The request took too long to respond.", {
                        details: "The request timed out.",
                        metaMessages: [`URL: ${(0,o.G)(t)}`, `Request body: ${(0,r.P)(e)}`],
                        name: "TimeoutError"
                    })
                }
            }
        },
        96329: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return c
                },
                GD: function() {
                    return b
                },
                I0: function() {
                    return E
                },
                KB: function() {
                    return m
                },
                LX: function() {
                    return u
                },
                Og: function() {
                    return h
                },
                PE: function() {
                    return v
                },
                Pv: function() {
                    return y
                },
                Ts: function() {
                    return A
                },
                XS: function() {
                    return d
                },
                ab: function() {
                    return w
                },
                gS: function() {
                    return g
                },
                ir: function() {
                    return I
                },
                nY: function() {
                    return l
                },
                pT: function() {
                    return p
                },
                s7: function() {
                    return a
                },
                u5: function() {
                    return C
                },
                x3: function() {
                    return x
                },
                yR: function() {
                    return f
                }
            });
            var r = n(6649),
                i = n(4456);
            class o extends r.G {
                constructor(e, {
                    code: t,
                    docsPath: n,
                    metaMessages: r,
                    name: o,
                    shortMessage: s
                }) {
                    super(s, {
                        cause: e,
                        docsPath: n,
                        metaMessages: r || e ? .metaMessages,
                        name: o || "RpcError"
                    }), Object.defineProperty(this, "code", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.name = o || e.name, this.code = e instanceof i.bs ? e.code : t ? ? -1
                }
            }
            class s extends o {
                constructor(e, t) {
                    super(e, t), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = t.data
                }
            }
            class a extends o {
                constructor(e) {
                    super(e, {
                        code: a.code,
                        name: "ParseRpcError",
                        shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
                    })
                }
            }
            Object.defineProperty(a, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32700
            });
            class c extends o {
                constructor(e) {
                    super(e, {
                        code: c.code,
                        name: "InvalidRequestRpcError",
                        shortMessage: "JSON is not a valid request object."
                    })
                }
            }
            Object.defineProperty(c, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32600
            });
            class u extends o {
                constructor(e, {
                    method: t
                } = {}) {
                    super(e, {
                        code: u.code,
                        name: "MethodNotFoundRpcError",
                        shortMessage: `The method${t?` "${t}"`:""} does not exist / is not available.`
                    })
                }
            }
            Object.defineProperty(u, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32601
            });
            class l extends o {
                constructor(e) {
                    super(e, {
                        code: l.code,
                        name: "InvalidParamsRpcError",
                        shortMessage: "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."
                    })
                }
            }
            Object.defineProperty(l, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32602
            });
            class d extends o {
                constructor(e) {
                    super(e, {
                        code: d.code,
                        name: "InternalRpcError",
                        shortMessage: "An internal error was received."
                    })
                }
            }
            Object.defineProperty(d, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32603
            });
            class f extends o {
                constructor(e) {
                    super(e, {
                        code: f.code,
                        name: "InvalidInputRpcError",
                        shortMessage: "Missing or invalid parameters.\nDouble check you have provided the correct parameters."
                    })
                }
            }
            Object.defineProperty(f, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32e3
            });
            class h extends o {
                constructor(e) {
                    super(e, {
                        code: h.code,
                        name: "ResourceNotFoundRpcError",
                        shortMessage: "Requested resource not found."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ResourceNotFoundRpcError"
                    })
                }
            }
            Object.defineProperty(h, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32001
            });
            class p extends o {
                constructor(e) {
                    super(e, {
                        code: p.code,
                        name: "ResourceUnavailableRpcError",
                        shortMessage: "Requested resource not available."
                    })
                }
            }
            Object.defineProperty(p, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32002
            });
            class m extends o {
                constructor(e) {
                    super(e, {
                        code: m.code,
                        name: "TransactionRejectedRpcError",
                        shortMessage: "Transaction creation failed."
                    })
                }
            }
            Object.defineProperty(m, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32003
            });
            class g extends o {
                constructor(e, {
                    method: t
                } = {}) {
                    super(e, {
                        code: g.code,
                        name: "MethodNotSupportedRpcError",
                        shortMessage: `Method${t?` "${t}"`:""} is not implemented.`
                    })
                }
            }
            Object.defineProperty(g, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32004
            });
            class y extends o {
                constructor(e) {
                    super(e, {
                        code: y.code,
                        name: "LimitExceededRpcError",
                        shortMessage: "Request exceeds defined limit."
                    })
                }
            }
            Object.defineProperty(y, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32005
            });
            class b extends o {
                constructor(e) {
                    super(e, {
                        code: b.code,
                        name: "JsonRpcVersionUnsupportedError",
                        shortMessage: "Version of JSON-RPC protocol is not supported."
                    })
                }
            }
            Object.defineProperty(b, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32006
            });
            class w extends s {
                constructor(e) {
                    super(e, {
                        code: w.code,
                        name: "UserRejectedRequestError",
                        shortMessage: "User rejected the request."
                    })
                }
            }
            Object.defineProperty(w, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4001
            });
            class v extends s {
                constructor(e) {
                    super(e, {
                        code: v.code,
                        name: "UnauthorizedProviderError",
                        shortMessage: "The requested method and/or account has not been authorized by the user."
                    })
                }
            }
            Object.defineProperty(v, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4100
            });
            class A extends s {
                constructor(e, {
                    method: t
                } = {}) {
                    super(e, {
                        code: A.code,
                        name: "UnsupportedProviderMethodError",
                        shortMessage: `The Provider does not support the requested method${t?` " ${t}"`:""}.`
                    })
                }
            }
            Object.defineProperty(A, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4200
            });
            class C extends s {
                constructor(e) {
                    super(e, {
                        code: C.code,
                        name: "ProviderDisconnectedError",
                        shortMessage: "The Provider is disconnected from all chains."
                    })
                }
            }
            Object.defineProperty(C, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4900
            });
            class E extends s {
                constructor(e) {
                    super(e, {
                        code: E.code,
                        name: "ChainDisconnectedError",
                        shortMessage: "The Provider is not connected to the requested chain."
                    })
                }
            }
            Object.defineProperty(E, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4901
            });
            class x extends s {
                constructor(e) {
                    super(e, {
                        code: x.code,
                        name: "SwitchChainError",
                        shortMessage: "An error occurred when attempting to switch chain."
                    })
                }
            }
            Object.defineProperty(x, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4902
            });
            class I extends o {
                constructor(e) {
                    super(e, {
                        name: "UnknownRpcError",
                        shortMessage: "An unknown RPC error occurred."
                    })
                }
            }
        },
        75534: function(e, t, n) {
            "use strict";
            n.d(t, {
                Bj: function() {
                    return a
                },
                Nc: function() {
                    return i
                },
                Z8: function() {
                    return o
                }
            });
            var r = n(6649);
            class i extends r.G {
                constructor({
                    address: e
                }) {
                    super(`State for account "${e}" is set multiple times.`, {
                        name: "AccountStateConflictError"
                    })
                }
            }
            class o extends r.G {
                constructor() {
                    super("state and stateDiff are set on the same account.", {
                        name: "StateAssignmentConflictError"
                    })
                }
            }

            function s(e) {
                return e.reduce((e, {
                    slot: t,
                    value: n
                }) => `${e}        ${t}: ${n}
`, "")
            }

            function a(e) {
                return e.reduce((e, {
                    address: t,
                    ...n
                }) => {
                    let r = `${e}    ${t}:
`;
                    return n.nonce && (r += `      nonce: ${n.nonce}
`), n.balance && (r += `      balance: ${n.balance}
`), n.code && (r += `      code: ${n.code}
`), n.state && (r += "      state:\n" + s(n.state)), n.stateDiff && (r += "      stateDiff:\n" + s(n.stateDiff)), r
                }, "  State Override:\n").slice(0, -1)
            }
        },
        97658: function(e, t, n) {
            "use strict";
            n.d(t, {
                Bh: function() {
                    return l
                },
                Yb: function() {
                    return d
                },
                j3: function() {
                    return c
                },
                mc: function() {
                    return f
                },
                mk: function() {
                    return u
                },
                xY: function() {
                    return a
                },
                xr: function() {
                    return s
                }
            });
            var r = n(85053),
                i = n(49268),
                o = n(6649);

            function s(e) {
                let t = Object.entries(e).map(([e, t]) => void 0 === t || !1 === t ? null : [e, t]).filter(Boolean),
                    n = t.reduce((e, [t]) => Math.max(e, t.length), 0);
                return t.map(([e, t]) => `  ${`${e}:`.padEnd(n+1)}  ${t}`).join("\n")
            }
            class a extends o.G {
                constructor() {
                    super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.", {
                        name: "FeeConflictError"
                    })
                }
            }
            class c extends o.G {
                constructor({
                    transaction: e
                }) {
                    super("Cannot infer a transaction type from provided transaction.", {
                        metaMessages: ["Provided Transaction:", "{", s(e), "}", "", "To infer the type, either provide:", "- a `type` to the Transaction, or", "- an EIP-1559 Transaction with `maxFeePerGas`, or", "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or", "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or", "- an EIP-7702 Transaction with `authorizationList`, or", "- a Legacy Transaction with `gasPrice`"],
                        name: "InvalidSerializableTransactionError"
                    })
                }
            }
            class u extends o.G {
                constructor(e, {
                    account: t,
                    docsPath: n,
                    chain: o,
                    data: a,
                    gas: c,
                    gasPrice: u,
                    maxFeePerGas: l,
                    maxPriorityFeePerGas: d,
                    nonce: f,
                    to: h,
                    value: p
                }) {
                    super(e.shortMessage, {
                        cause: e,
                        docsPath: n,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Request Arguments:", s({
                            chain: o && `${o?.name} (id: ${o?.id})`,
                            from: t ? .address,
                            to: h,
                            value: void 0 !== p && `${(0,r.d)(p)} ${o?.nativeCurrency?.symbol||"ETH"}`,
                            data: a,
                            gas: c,
                            gasPrice: void 0 !== u && `${(0,i.o)(u)} gwei`,
                            maxFeePerGas: void 0 !== l && `${(0,i.o)(l)} gwei`,
                            maxPriorityFeePerGas: void 0 !== d && `${(0,i.o)(d)} gwei`,
                            nonce: f
                        })].filter(Boolean),
                        name: "TransactionExecutionError"
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.cause = e
                }
            }
            class l extends o.G {
                constructor({
                    blockHash: e,
                    blockNumber: t,
                    blockTag: n,
                    hash: r,
                    index: i
                }) {
                    let o = "Transaction";
                    n && void 0 !== i && (o = `Transaction at block time "${n}" at index "${i}"`), e && void 0 !== i && (o = `Transaction at block hash "${e}" at index "${i}"`), t && void 0 !== i && (o = `Transaction at block number "${t}" at index "${i}"`), r && (o = `Transaction with hash "${r}"`), super(`${o} could not be found.`, {
                        name: "TransactionNotFoundError"
                    })
                }
            }
            class d extends o.G {
                constructor({
                    hash: e
                }) {
                    super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`, {
                        name: "TransactionReceiptNotFoundError"
                    })
                }
            }
            class f extends o.G {
                constructor({
                    hash: e
                }) {
                    super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`, {
                        name: "WaitForTransactionReceiptTimeoutError"
                    })
                }
            }
        },
        87137: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return r
                },
                G: function() {
                    return i
                }
            });
            let r = e => e,
                i = e => e
        },
        84284: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return d
                }
            });
            var r = n(97261),
                i = n(53932),
                o = n(82361),
                s = n(95046),
                a = n(6649),
                c = n(15222);

            function u(e) {
                if (e < 256) return 1;
                if (e < 65536) return 2;
                if (e < 16777216) return 3;
                if (e < 4294967296) return 4;
                throw new a.G("Length is too large.")
            }
            var l = n(36494);
            async function d(e) {
                let {
                    authorization: t,
                    signature: n
                } = e;
                return (0, r.R)({
                    hash: function(e) {
                        let {
                            chainId: t,
                            contractAddress: n,
                            nonce: r,
                            to: a
                        } = e, d = (0, l.w)((0, i.SM)(["0x05", function(e, t = "hex") {
                            let n = function e(t) {
                                    return Array.isArray(t) ? function(e) {
                                        let t = e.reduce((e, t) => e + t.length, 0),
                                            n = u(t);
                                        return {
                                            length: t <= 55 ? 1 + t : 1 + n + t,
                                            encode(r) {
                                                for (let {
                                                        encode: i
                                                    } of (t <= 55 ? r.pushByte(192 + t) : (r.pushByte(247 + n), 1 === n ? r.pushUint8(t) : 2 === n ? r.pushUint16(t) : 3 === n ? r.pushUint24(t) : r.pushUint32(t)), e)) i(r)
                                            }
                                        }
                                    }(t.map(t => e(t))) : function(e) {
                                        let t = "string" == typeof e ? (0, o.nr)(e) : e,
                                            n = u(t.length);
                                        return {
                                            length: 1 === t.length && t[0] < 128 ? 1 : t.length <= 55 ? 1 + t.length : 1 + n + t.length,
                                            encode(e) {
                                                1 === t.length && t[0] < 128 || (t.length <= 55 ? e.pushByte(128 + t.length) : (e.pushByte(183 + n), 1 === n ? e.pushUint8(t.length) : 2 === n ? e.pushUint16(t.length) : 3 === n ? e.pushUint24(t.length) : e.pushUint32(t.length))), e.pushBytes(t)
                                            }
                                        }
                                    }(t)
                                }(e),
                                r = (0, c.q)(new Uint8Array(n.length));
                            return (n.encode(r), "hex" === t) ? (0, s.ci)(r.bytes) : r.bytes
                        }([(0, s.eC)(t), n, (0, s.eC)(r)])]));
                        return "bytes" === a ? (0, o.nr)(d) : d
                    }(t),
                    signature: n ? ? t
                })
            }
        },
        52998: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return m
                }
            });
            var r = n(52186),
                i = n(99112),
                o = n(15222),
                s = n(7508),
                a = n(49014),
                c = n(77955),
                u = n(74188),
                l = n(21019),
                d = n(95046);

            function f(e, t = {}) {
                void 0 !== t.size && (0, l.Yf)(e, {
                    size: t.size
                });
                let n = (0, d.ci)(e, t);
                return (0, l.ly)(n, t)
            }
            var h = n(82361),
                p = n(39480);

            function m(e, t) {
                let n = "string" == typeof t ? (0, h.nr)(t) : t,
                    m = (0, o.q)(n);
                if (0 === (0, s.d)(n) && e.length > 0) throw new r.wb;
                if ((0, s.d)(t) && 32 > (0, s.d)(t)) throw new r.xB({
                    data: "string" == typeof t ? t : (0, d.ci)(t),
                    params: e,
                    size: (0, s.d)(t)
                });
                let y = 0,
                    b = [];
                for (let t = 0; t < e.length; ++t) {
                    let n = e[t];
                    m.setPosition(y);
                    let [o, s] = function e(t, n, {
                        staticPosition: o
                    }) {
                        let s = (0, p.S)(n.type);
                        if (s) {
                            let [r, i] = s;
                            return function(t, n, {
                                length: r,
                                staticPosition: i
                            }) {
                                if (!r) {
                                    let r = i + f(t.readBytes(32)),
                                        o = r + 32;
                                    t.setPosition(r);
                                    let s = f(t.readBytes(32)),
                                        a = g(n),
                                        c = 0,
                                        u = [];
                                    for (let r = 0; r < s; ++r) {
                                        t.setPosition(o + (a ? 32 * r : c));
                                        let [i, s] = e(t, n, {
                                            staticPosition: o
                                        });
                                        c += s, u.push(i)
                                    }
                                    return t.setPosition(i + 32), [u, 32]
                                }
                                if (g(n)) {
                                    let o = i + f(t.readBytes(32)),
                                        s = [];
                                    for (let i = 0; i < r; ++i) {
                                        t.setPosition(o + 32 * i);
                                        let [r] = e(t, n, {
                                            staticPosition: o
                                        });
                                        s.push(r)
                                    }
                                    return t.setPosition(i + 32), [s, 32]
                                }
                                let o = 0,
                                    s = [];
                                for (let a = 0; a < r; ++a) {
                                    let [r, a] = e(t, n, {
                                        staticPosition: i + o
                                    });
                                    o += a, s.push(r)
                                }
                                return [s, o]
                            }(t, { ...n,
                                type: i
                            }, {
                                length: r,
                                staticPosition: o
                            })
                        }
                        if ("tuple" === n.type) return function(t, n, {
                            staticPosition: r
                        }) {
                            let i = 0 === n.components.length || n.components.some(({
                                    name: e
                                }) => !e),
                                o = i ? [] : {},
                                s = 0;
                            if (g(n)) {
                                let a = r + f(t.readBytes(32));
                                for (let r = 0; r < n.components.length; ++r) {
                                    let c = n.components[r];
                                    t.setPosition(a + s);
                                    let [u, l] = e(t, c, {
                                        staticPosition: a
                                    });
                                    s += l, o[i ? r : c ? .name] = u
                                }
                                return t.setPosition(r + 32), [o, 32]
                            }
                            for (let a = 0; a < n.components.length; ++a) {
                                let c = n.components[a],
                                    [u, l] = e(t, c, {
                                        staticPosition: r
                                    });
                                o[i ? a : c ? .name] = u, s += l
                            }
                            return [o, s]
                        }(t, n, {
                            staticPosition: o
                        });
                        if ("address" === n.type) return function(e) {
                            let t = e.readBytes(32);
                            return [(0, i.x)((0, d.ci)((0, a.T4)(t, -20))), 32]
                        }(t);
                        if ("bool" === n.type) return [function(e, t = {}) {
                            let n = e;
                            if (void 0 !== t.size && ((0, l.Yf)(n, {
                                    size: t.size
                                }), n = (0, c.f)(n)), n.length > 1 || n[0] > 1) throw new u.yr(n);
                            return !!n[0]
                        }(t.readBytes(32), {
                            size: 32
                        }), 32];
                        if (n.type.startsWith("bytes")) return function(e, t, {
                            staticPosition: n
                        }) {
                            let [r, i] = t.type.split("bytes");
                            if (!i) {
                                let t = f(e.readBytes(32));
                                e.setPosition(n + t);
                                let r = f(e.readBytes(32));
                                if (0 === r) return e.setPosition(n + 32), ["0x", 32];
                                let i = e.readBytes(r);
                                return e.setPosition(n + 32), [(0, d.ci)(i), 32]
                            }
                            return [(0, d.ci)(e.readBytes(Number.parseInt(i), 32)), 32]
                        }(t, n, {
                            staticPosition: o
                        });
                        if (n.type.startsWith("uint") || n.type.startsWith("int")) return function(e, t) {
                            let n = t.type.startsWith("int"),
                                r = Number.parseInt(t.type.split("int")[1] || "256"),
                                i = e.readBytes(32);
                            return [r > 48 ? function(e, t = {}) {
                                void 0 !== t.size && (0, l.Yf)(e, {
                                    size: t.size
                                });
                                let n = (0, d.ci)(e, t);
                                return (0, l.y_)(n, t)
                            }(i, {
                                signed: n
                            }) : f(i, {
                                signed: n
                            }), 32]
                        }(t, n);
                        if ("string" === n.type) return function(e, {
                            staticPosition: t
                        }) {
                            let n = f(e.readBytes(32));
                            e.setPosition(t + n);
                            let r = f(e.readBytes(32));
                            if (0 === r) return e.setPosition(t + 32), ["", 32];
                            let i = e.readBytes(r, 32),
                                o = function(e, t = {}) {
                                    let n = e;
                                    return void 0 !== t.size && ((0, l.Yf)(n, {
                                        size: t.size
                                    }), n = (0, c.f)(n, {
                                        dir: "right"
                                    })), new TextDecoder().decode(n)
                                }((0, c.f)(i));
                            return e.setPosition(t + 32), [o, 32]
                        }(t, {
                            staticPosition: o
                        });
                        throw new r.CI(n.type, {
                            docsPath: "/docs/contract/decodeAbiParameters"
                        })
                    }(m, n, {
                        staticPosition: 0
                    });
                    y += s, b.push(o)
                }
                return b
            }

            function g(e) {
                let {
                    type: t
                } = e;
                if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
                if ("tuple" === t) return e.components ? .some(g);
                let n = (0, p.S)(e.type);
                return !!(n && g({ ...e,
                    type: n[1]
                }))
            }
        },
        71108: function(e, t, n) {
            "use strict";
            n.d(t, {
                p: function() {
                    return u
                }
            });
            var r = n(47807),
                i = n(52186),
                o = n(49014),
                s = n(87522),
                a = n(52998),
                c = n(20101);

            function u(e) {
                let {
                    abi: t,
                    data: n
                } = e, u = (0, o.tP)(n, 0, 4);
                if ("0x" === u) throw new i.wb;
                let l = [...t || [], r.Up, r.hZ].find(e => "error" === e.type && u === (0, s.C)((0, c.t)(e)));
                if (!l) throw new i.yP(u, {
                    docsPath: "/docs/contract/decodeErrorResult"
                });
                return {
                    abiItem: l,
                    args: "inputs" in l && l.inputs && l.inputs.length > 0 ? (0, a.r)(l.inputs, (0, o.tP)(n, 4)) : void 0,
                    errorName: l.name
                }
            }
        },
        97225: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return a
                }
            });
            var r = n(52186),
                i = n(52998),
                o = n(18748);
            let s = "/docs/contract/decodeFunctionResult";

            function a(e) {
                let {
                    abi: t,
                    args: n,
                    functionName: a,
                    data: c
                } = e, u = t[0];
                if (a) {
                    let e = (0, o.mE)({
                        abi: t,
                        args: n,
                        name: a
                    });
                    if (!e) throw new r.xL(a, {
                        docsPath: s
                    });
                    u = e
                }
                if ("function" !== u.type) throw new r.xL(void 0, {
                    docsPath: s
                });
                if (!u.outputs) throw new r.MX(u.name, {
                    docsPath: s
                });
                let l = (0, i.r)(u.outputs, c);
                return l && l.length > 1 ? l : l && 1 === l.length ? l[0] : void 0
            }
        },
        39480: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return f
                },
                S: function() {
                    return p
                }
            });
            var r = n(52186),
                i = n(51359),
                o = n(6649),
                s = n(64113),
                a = n(53932),
                c = n(88202),
                u = n(7508),
                l = n(49014),
                d = n(95046);

            function f(e, t) {
                if (e.length !== t.length) throw new r.fs({
                    expectedLength: e.length,
                    givenLength: t.length
                });
                let n = h(function({
                    params: e,
                    values: t
                }) {
                    let n = [];
                    for (let f = 0; f < e.length; f++) n.push(function e({
                        param: t,
                        value: n
                    }) {
                        let f = p(t.type);
                        if (f) {
                            let [i, o] = f;
                            return function(t, {
                                length: n,
                                param: i
                            }) {
                                let o = null === n;
                                if (!Array.isArray(t)) throw new r.hn(t);
                                if (!o && t.length !== n) throw new r.gr({
                                    expectedLength: n,
                                    givenLength: t.length,
                                    type: `${i.type}[${n}]`
                                });
                                let s = !1,
                                    c = [];
                                for (let n = 0; n < t.length; n++) {
                                    let r = e({
                                        param: i,
                                        value: t[n]
                                    });
                                    r.dynamic && (s = !0), c.push(r)
                                }
                                if (o || s) {
                                    let e = h(c);
                                    if (o) {
                                        let t = (0, d.eC)(c.length, {
                                            size: 32
                                        });
                                        return {
                                            dynamic: !0,
                                            encoded: c.length > 0 ? (0, a.zo)([t, e]) : t
                                        }
                                    }
                                    if (s) return {
                                        dynamic: !0,
                                        encoded: e
                                    }
                                }
                                return {
                                    dynamic: !1,
                                    encoded: (0, a.zo)(c.map(({
                                        encoded: e
                                    }) => e))
                                }
                            }(n, {
                                length: i,
                                param: { ...t,
                                    type: o
                                }
                            })
                        }
                        if ("tuple" === t.type) return function(t, {
                            param: n
                        }) {
                            let r = !1,
                                i = [];
                            for (let o = 0; o < n.components.length; o++) {
                                let s = n.components[o],
                                    a = Array.isArray(t) ? o : s.name,
                                    c = e({
                                        param: s,
                                        value: t[a]
                                    });
                                i.push(c), c.dynamic && (r = !0)
                            }
                            return {
                                dynamic: r,
                                encoded: r ? h(i) : (0, a.zo)(i.map(({
                                    encoded: e
                                }) => e))
                            }
                        }(n, {
                            param: t
                        });
                        if ("address" === t.type) return function(e) {
                            if (!(0, s.U)(e)) throw new i.b({
                                address: e
                            });
                            return {
                                dynamic: !1,
                                encoded: (0, c.gc)(e.toLowerCase())
                            }
                        }(n);
                        if ("bool" === t.type) return function(e) {
                            if ("boolean" != typeof e) throw new o.G(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);
                            return {
                                dynamic: !1,
                                encoded: (0, c.gc)((0, d.C4)(e))
                            }
                        }(n);
                        if (t.type.startsWith("uint") || t.type.startsWith("int")) return function(e, {
                            signed: t
                        }) {
                            return {
                                dynamic: !1,
                                encoded: (0, d.eC)(e, {
                                    size: 32,
                                    signed: t
                                })
                            }
                        }(n, {
                            signed: t.type.startsWith("int")
                        });
                        if (t.type.startsWith("bytes")) return function(e, {
                            param: t
                        }) {
                            let [, n] = t.type.split("bytes"), i = (0, u.d)(e);
                            if (!n) {
                                let t = e;
                                return i % 32 != 0 && (t = (0, c.gc)(t, {
                                    dir: "right",
                                    size: 32 * Math.ceil((e.length - 2) / 2 / 32)
                                })), {
                                    dynamic: !0,
                                    encoded: (0, a.zo)([(0, c.gc)((0, d.eC)(i, {
                                        size: 32
                                    })), t])
                                }
                            }
                            if (i !== Number.parseInt(n)) throw new r.M4({
                                expectedSize: Number.parseInt(n),
                                value: e
                            });
                            return {
                                dynamic: !1,
                                encoded: (0, c.gc)(e, {
                                    dir: "right"
                                })
                            }
                        }(n, {
                            param: t
                        });
                        if ("string" === t.type) return function(e) {
                            let t = (0, d.$G)(e),
                                n = Math.ceil((0, u.d)(t) / 32),
                                r = [];
                            for (let e = 0; e < n; e++) r.push((0, c.gc)((0, l.tP)(t, 32 * e, (e + 1) * 32), {
                                dir: "right"
                            }));
                            return {
                                dynamic: !0,
                                encoded: (0, a.zo)([(0, c.gc)((0, d.eC)((0, u.d)(t), {
                                    size: 32
                                })), ...r])
                            }
                        }(n);
                        throw new r.dh(t.type, {
                            docsPath: "/docs/contract/encodeAbiParameters"
                        })
                    }({
                        param: e[f],
                        value: t[f]
                    }));
                    return n
                }({
                    params: e,
                    values: t
                }));
                return 0 === n.length ? "0x" : n
            }

            function h(e) {
                let t = 0;
                for (let n = 0; n < e.length; n++) {
                    let {
                        dynamic: r,
                        encoded: i
                    } = e[n];
                    r ? t += 32 : t += (0, u.d)(i)
                }
                let n = [],
                    r = [],
                    i = 0;
                for (let o = 0; o < e.length; o++) {
                    let {
                        dynamic: s,
                        encoded: a
                    } = e[o];
                    s ? (n.push((0, d.eC)(t + i, {
                        size: 32
                    })), r.push(a), i += (0, u.d)(a)) : n.push(a)
                }
                return (0, a.zo)([...n, ...r])
            }

            function p(e) {
                let t = e.match(/^(.*)\[(\d+)?\]$/);
                return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0
            }
        },
        32637: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return a
                }
            });
            var r = n(52186),
                i = n(53932),
                o = n(39480);
            let s = "/docs/contract/encodeDeployData";

            function a(e) {
                let {
                    abi: t,
                    args: n,
                    bytecode: a
                } = e;
                if (!n || 0 === n.length) return a;
                let c = t.find(e => "type" in e && "constructor" === e.type);
                if (!c) throw new r.fM({
                    docsPath: s
                });
                if (!("inputs" in c) || !c.inputs || 0 === c.inputs.length) throw new r.cO({
                    docsPath: s
                });
                let u = (0, o.E)(c.inputs, n);
                return (0, i.SM)([a, u])
            }
        },
        31006: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return l
                }
            });
            var r = n(53932),
                i = n(39480),
                o = n(52186),
                s = n(87522),
                a = n(20101),
                c = n(18748);
            let u = "/docs/contract/encodeFunctionData";

            function l(e) {
                let {
                    args: t
                } = e, {
                    abi: n,
                    functionName: l
                } = 1 === e.abi.length && e.functionName ? .startsWith("0x") ? e : function(e) {
                    let {
                        abi: t,
                        args: n,
                        functionName: r
                    } = e, i = t[0];
                    if (r) {
                        let e = (0, c.mE)({
                            abi: t,
                            args: n,
                            name: r
                        });
                        if (!e) throw new o.xL(r, {
                            docsPath: u
                        });
                        i = e
                    }
                    if ("function" !== i.type) throw new o.xL(void 0, {
                        docsPath: u
                    });
                    return {
                        abi: [i],
                        functionName: (0, s.C)((0, a.t)(i))
                    }
                }(e), d = n[0], f = "inputs" in d && d.inputs ? (0, i.E)(d.inputs, t ? ? []) : void 0;
                return (0, r.SM)([l, f ? ? "0x"])
            }
        },
        20101: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return o
                },
                t: function() {
                    return i
                }
            });
            var r = n(52186);

            function i(e, {
                includeName: t = !1
            } = {}) {
                if ("function" !== e.type && "event" !== e.type && "error" !== e.type) throw new r.wM(e.type);
                return `${e.name}(${o(e.inputs,{includeName:t})})`
            }

            function o(e, {
                includeName: t = !1
            } = {}) {
                return e ? e.map(e => (function(e, {
                    includeName: t
                }) {
                    return e.type.startsWith("tuple") ? `(${o(e.components,{includeName:t})})${e.type.slice(5)}` : e.type + (t && e.name ? ` ${e.name}` : "")
                })(e, {
                    includeName: t
                })).join(t ? ", " : ",") : ""
            }
        },
        18748: function(e, t, n) {
            "use strict";
            n.d(t, {
                mE: function() {
                    return c
                }
            });
            var r = n(52186),
                i = n(40369),
                o = n(64113),
                s = n(53263),
                a = n(87522);

            function c(e) {
                let t;
                let {
                    abi: n,
                    args: c = [],
                    name: u
                } = e, l = (0, i.v)(u, {
                    strict: !1
                }), d = n.filter(e => l ? "function" === e.type ? (0, a.C)(e) === u : "event" === e.type && (0, s.n)(e) === u : "name" in e && e.name === u);
                if (0 !== d.length) {
                    if (1 === d.length) return d[0];
                    for (let e of d)
                        if ("inputs" in e) {
                            if (!c || 0 === c.length) {
                                if (!e.inputs || 0 === e.inputs.length) return e;
                                continue
                            }
                            if (e.inputs && 0 !== e.inputs.length && e.inputs.length === c.length && c.every((t, n) => {
                                    let r = "inputs" in e && e.inputs[n];
                                    return !!r && function e(t, n) {
                                        let r = typeof t,
                                            i = n.type;
                                        switch (i) {
                                            case "address":
                                                return (0, o.U)(t, {
                                                    strict: !1
                                                });
                                            case "bool":
                                                return "boolean" === r;
                                            case "function":
                                            case "string":
                                                return "string" === r;
                                            default:
                                                if ("tuple" === i && "components" in n) return Object.values(n.components).every((n, r) => e(Object.values(t)[r], n));
                                                if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i)) return "number" === r || "bigint" === r;
                                                if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i)) return "string" === r || t instanceof Uint8Array;
                                                if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i)) return Array.isArray(t) && t.every(t => e(t, { ...n,
                                                    type: i.replace(/(\[[0-9]{0,}\])$/, "")
                                                }));
                                                return !1
                                        }
                                    }(t, r)
                                })) {
                                if (t && "inputs" in t && t.inputs) {
                                    let n = function e(t, n, r) {
                                        for (let i in t) {
                                            let s = t[i],
                                                a = n[i];
                                            if ("tuple" === s.type && "tuple" === a.type && "components" in s && "components" in a) return e(s.components, a.components, r[i]);
                                            let c = [s.type, a.type];
                                            if (c.includes("address") && c.includes("bytes20") || (c.includes("address") && c.includes("string") || c.includes("address") && c.includes("bytes")) && (0, o.U)(r[i], {
                                                    strict: !1
                                                })) return c
                                        }
                                    }(e.inputs, t.inputs, c);
                                    if (n) throw new r.S4({
                                        abiItem: e,
                                        type: n[0]
                                    }, {
                                        abiItem: t,
                                        type: n[1]
                                    })
                                }
                                t = e
                            }
                        }
                    return t || d[0]
                }
            }
        },
        99112: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return l
                },
                x: function() {
                    return u
                }
            });
            var r = n(51359),
                i = n(82361),
                o = n(36494),
                s = n(98992),
                a = n(64113);
            let c = new s.k(8192);

            function u(e, t) {
                if (c.has(`${e}.${t}`)) return c.get(`${e}.${t}`);
                let n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
                    r = (0, o.w)((0, i.qX)(n), "bytes"),
                    s = (t ? n.substring(`${t}0x`.length) : n).split("");
                for (let e = 0; e < 40; e += 2) r[e >> 1] >> 4 >= 8 && s[e] && (s[e] = s[e].toUpperCase()), (15 & r[e >> 1]) >= 8 && s[e + 1] && (s[e + 1] = s[e + 1].toUpperCase());
                let a = `0x${s.join("")}`;
                return c.set(`${e}.${t}`, a), a
            }

            function l(e, t) {
                if (!(0, a.U)(e, {
                        strict: !1
                    })) throw new r.b({
                    address: e
                });
                return u(e, t)
            }
        },
        64113: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return a
                }
            });
            var r = n(98992),
                i = n(99112);
            let o = /^0x[a-fA-F0-9]{40}$/,
                s = new r.k(8192);

            function a(e, t) {
                let {
                    strict: n = !0
                } = t ? ? {}, r = `${e}.${n}`;
                if (s.has(r)) return s.get(r);
                let a = !!o.test(e) && (e.toLowerCase() === e || !n || (0, i.x)(e) === e);
                return s.set(r, a), a
            }
        },
        65937: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return o
                }
            });
            var r = n(51359),
                i = n(64113);

            function o(e, t) {
                if (!(0, i.U)(e, {
                        strict: !1
                    })) throw new r.b({
                    address: e
                });
                if (!(0, i.U)(t, {
                        strict: !1
                    })) throw new r.b({
                    address: t
                });
                return e.toLowerCase() === t.toLowerCase()
            }
        },
        18543: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return i
                }
            });
            var r = n(89045);

            function i({
                blockNumber: e,
                chain: t,
                contract: n
            }) {
                let i = t ? .contracts ? .[n];
                if (!i) throw new r.mm({
                    chain: t,
                    contract: {
                        name: n
                    }
                });
                if (e && i.blockCreated && i.blockCreated > e) throw new r.mm({
                    blockNumber: e,
                    chain: t,
                    contract: {
                        name: n,
                        blockCreated: i.blockCreated
                    }
                });
                return i.address
            }
        },
        15222: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return o
                }
            });
            var r = n(19477);
            let i = {
                bytes: new Uint8Array,
                dataView: new DataView(new ArrayBuffer(0)),
                position: 0,
                positionReadCount: new Map,
                recursiveReadCount: 0,
                recursiveReadLimit: Number.POSITIVE_INFINITY,
                assertReadLimit() {
                    if (this.recursiveReadCount >= this.recursiveReadLimit) throw new r.KD({
                        count: this.recursiveReadCount + 1,
                        limit: this.recursiveReadLimit
                    })
                },
                assertPosition(e) {
                    if (e < 0 || e > this.bytes.length - 1) throw new r.lQ({
                        length: this.bytes.length,
                        position: e
                    })
                },
                decrementPosition(e) {
                    if (e < 0) throw new r.T_({
                        offset: e
                    });
                    let t = this.position - e;
                    this.assertPosition(t), this.position = t
                },
                getReadCount(e) {
                    return this.positionReadCount.get(e || this.position) || 0
                },
                incrementPosition(e) {
                    if (e < 0) throw new r.T_({
                        offset: e
                    });
                    let t = this.position + e;
                    this.assertPosition(t), this.position = t
                },
                inspectByte(e) {
                    let t = e ? ? this.position;
                    return this.assertPosition(t), this.bytes[t]
                },
                inspectBytes(e, t) {
                    let n = t ? ? this.position;
                    return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e)
                },
                inspectUint8(e) {
                    let t = e ? ? this.position;
                    return this.assertPosition(t), this.bytes[t]
                },
                inspectUint16(e) {
                    let t = e ? ? this.position;
                    return this.assertPosition(t + 1), this.dataView.getUint16(t)
                },
                inspectUint24(e) {
                    let t = e ? ? this.position;
                    return this.assertPosition(t + 2), (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
                },
                inspectUint32(e) {
                    let t = e ? ? this.position;
                    return this.assertPosition(t + 3), this.dataView.getUint32(t)
                },
                pushByte(e) {
                    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++
                },
                pushBytes(e) {
                    this.assertPosition(this.position + e.length - 1), this.bytes.set(e, this.position), this.position += e.length
                },
                pushUint8(e) {
                    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++
                },
                pushUint16(e) {
                    this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, e), this.position += 2
                },
                pushUint24(e) {
                    this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, e >> 8), this.dataView.setUint8(this.position + 2, 255 & e), this.position += 3
                },
                pushUint32(e) {
                    this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, e), this.position += 4
                },
                readByte() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectByte();
                    return this.position++, e
                },
                readBytes(e, t) {
                    this.assertReadLimit(), this._touch();
                    let n = this.inspectBytes(e);
                    return this.position += t ? ? e, n
                },
                readUint8() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectUint8();
                    return this.position += 1, e
                },
                readUint16() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectUint16();
                    return this.position += 2, e
                },
                readUint24() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectUint24();
                    return this.position += 3, e
                },
                readUint32() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectUint32();
                    return this.position += 4, e
                },
                get remaining() {
                    return this.bytes.length - this.position
                },
                setPosition(e) {
                    let t = this.position;
                    return this.assertPosition(e), this.position = e, () => this.position = t
                },
                _touch() {
                    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
                    let e = this.getReadCount();
                    this.positionReadCount.set(this.position, e + 1), e > 0 && this.recursiveReadCount++
                }
            };

            function o(e, {
                recursiveReadLimit: t = 8192
            } = {}) {
                let n = Object.create(i);
                return n.bytes = e, n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength), n.positionReadCount = new Map, n.recursiveReadLimit = t, n
            }
        },
        53932: function(e, t, n) {
            "use strict";

            function r(e) {
                return "string" == typeof e[0] ? i(e) : function(e) {
                    let t = 0;
                    for (let n of e) t += n.length;
                    let n = new Uint8Array(t),
                        r = 0;
                    for (let t of e) n.set(t, r), r += t.length;
                    return n
                }(e)
            }

            function i(e) {
                return `0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`
            }
            n.d(t, {
                SM: function() {
                    return i
                },
                zo: function() {
                    return r
                }
            })
        },
        40369: function(e, t, n) {
            "use strict";

            function r(e, {
                strict: t = !0
            } = {}) {
                return !!e && "string" == typeof e && (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
            }
            n.d(t, {
                v: function() {
                    return r
                }
            })
        },
        88202: function(e, t, n) {
            "use strict";
            n.d(t, {
                gc: function() {
                    return o
                },
                vk: function() {
                    return i
                }
            });
            var r = n(75057);

            function i(e, {
                dir: t,
                size: n = 32
            } = {}) {
                return "string" == typeof e ? o(e, {
                    dir: t,
                    size: n
                }) : function(e, {
                    dir: t,
                    size: n = 32
                } = {}) {
                    if (null === n) return e;
                    if (e.length > n) throw new r.$s({
                        size: e.length,
                        targetSize: n,
                        type: "bytes"
                    });
                    let i = new Uint8Array(n);
                    for (let r = 0; r < n; r++) {
                        let o = "right" === t;
                        i[o ? r : n - r - 1] = e[o ? r : e.length - r - 1]
                    }
                    return i
                }(e, {
                    dir: t,
                    size: n
                })
            }

            function o(e, {
                dir: t,
                size: n = 32
            } = {}) {
                if (null === n) return e;
                let i = e.replace("0x", "");
                if (i.length > 2 * n) throw new r.$s({
                    size: Math.ceil(i.length / 2),
                    targetSize: n,
                    type: "hex"
                });
                return `0x${i["right"===t?"padEnd":"padStart"](2*n,"0")}`
            }
        },
        7508: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return i
                }
            });
            var r = n(40369);

            function i(e) {
                return (0, r.v)(e, {
                    strict: !1
                }) ? Math.ceil((e.length - 2) / 2) : e.length
            }
        },
        49014: function(e, t, n) {
            "use strict";
            n.d(t, {
                T4: function() {
                    return u
                },
                p5: function() {
                    return l
                },
                tP: function() {
                    return s
                }
            });
            var r = n(75057),
                i = n(40369),
                o = n(7508);

            function s(e, t, n, {
                strict: r
            } = {}) {
                return (0, i.v)(e, {
                    strict: !1
                }) ? l(e, t, n, {
                    strict: r
                }) : u(e, t, n, {
                    strict: r
                })
            }

            function a(e, t) {
                if ("number" == typeof t && t > 0 && t > (0, o.d)(e) - 1) throw new r.mV({
                    offset: t,
                    position: "start",
                    size: (0, o.d)(e)
                })
            }

            function c(e, t, n) {
                if ("number" == typeof t && "number" == typeof n && (0, o.d)(e) !== n - t) throw new r.mV({
                    offset: n,
                    position: "end",
                    size: (0, o.d)(e)
                })
            }

            function u(e, t, n, {
                strict: r
            } = {}) {
                a(e, t);
                let i = e.slice(t, n);
                return r && c(i, t, n), i
            }

            function l(e, t, n, {
                strict: r
            } = {}) {
                a(e, t);
                let i = `0x${e.replace("0x","").slice((t??0)*2,(n??e.length)*2)}`;
                return r && c(i, t, n), i
            }
        },
        77955: function(e, t, n) {
            "use strict";

            function r(e, {
                dir: t = "left"
            } = {}) {
                let n = "string" == typeof e ? e.replace("0x", "") : e,
                    r = 0;
                for (let e = 0; e < n.length - 1 && "0" === n["left" === t ? e : n.length - e - 1].toString(); e++) r++;
                return (n = "left" === t ? n.slice(r) : n.slice(0, n.length - r), "string" == typeof e) ? (1 === n.length && "right" === t && (n = `${n}0`), `0x${n.length%2==1?`0${n}`:n}`) : n
            }
            n.d(t, {
                f: function() {
                    return r
                }
            })
        },
        21019: function(e, t, n) {
            "use strict";
            n.d(t, {
                Yf: function() {
                    return a
                },
                ly: function() {
                    return u
                },
                rR: function() {
                    return l
                },
                y_: function() {
                    return c
                }
            });
            var r = n(74188),
                i = n(7508),
                o = n(77955),
                s = n(82361);

            function a(e, {
                size: t
            }) {
                if ((0, i.d)(e) > t) throw new r.M6({
                    givenSize: (0, i.d)(e),
                    maxSize: t
                })
            }

            function c(e, t = {}) {
                let {
                    signed: n
                } = t;
                t.size && a(e, {
                    size: t.size
                });
                let r = BigInt(e);
                if (!n) return r;
                let i = (e.length - 2) / 2;
                return r <= (1 n << 8 n * BigInt(i) - 1 n) - 1 n ? r : r - BigInt(`0x${"f".padStart(2*i,"f")}`) - 1 n
            }

            function u(e, t = {}) {
                return Number(c(e, t))
            }

            function l(e, t = {}) {
                let n = (0, s.nr)(e);
                return t.size && (a(n, {
                    size: t.size
                }), n = (0, o.f)(n, {
                    dir: "right"
                })), new TextDecoder().decode(n)
            }
        },
        82361: function(e, t, n) {
            "use strict";
            n.d(t, {
                O0: function() {
                    return u
                },
                nr: function() {
                    return f
                },
                qX: function() {
                    return h
                }
            });
            var r = n(6649),
                i = n(40369),
                o = n(88202),
                s = n(21019),
                a = n(95046);
            let c = new TextEncoder;

            function u(e, t = {}) {
                return "number" == typeof e || "bigint" == typeof e ? f((0, a.eC)(e, t)) : "boolean" == typeof e ? function(e, t = {}) {
                    let n = new Uint8Array(1);
                    return (n[0] = Number(e), "number" == typeof t.size) ? ((0, s.Yf)(n, {
                        size: t.size
                    }), (0, o.vk)(n, {
                        size: t.size
                    })) : n
                }(e, t) : (0, i.v)(e) ? f(e, t) : h(e, t)
            }
            let l = {
                zero: 48,
                nine: 57,
                A: 65,
                F: 70,
                a: 97,
                f: 102
            };

            function d(e) {
                return e >= l.zero && e <= l.nine ? e - l.zero : e >= l.A && e <= l.F ? e - (l.A - 10) : e >= l.a && e <= l.f ? e - (l.a - 10) : void 0
            }

            function f(e, t = {}) {
                let n = e;
                t.size && ((0, s.Yf)(n, {
                    size: t.size
                }), n = (0, o.vk)(n, {
                    dir: "right",
                    size: t.size
                }));
                let i = n.slice(2);
                i.length % 2 && (i = `0${i}`);
                let a = i.length / 2,
                    c = new Uint8Array(a);
                for (let e = 0, t = 0; e < a; e++) {
                    let n = d(i.charCodeAt(t++)),
                        o = d(i.charCodeAt(t++));
                    if (void 0 === n || void 0 === o) throw new r.G(`Invalid byte sequence ("${i[t-2]}${i[t-1]}" in "${i}").`);
                    c[e] = 16 * n + o
                }
                return c
            }

            function h(e, t = {}) {
                let n = c.encode(e);
                return "number" == typeof t.size ? ((0, s.Yf)(n, {
                    size: t.size
                }), (0, o.vk)(n, {
                    dir: "right",
                    size: t.size
                })) : n
            }
        },
        95046: function(e, t, n) {
            "use strict";
            n.d(t, {
                $G: function() {
                    return f
                },
                C4: function() {
                    return c
                },
                NC: function() {
                    return a
                },
                ci: function() {
                    return u
                },
                eC: function() {
                    return l
                }
            });
            var r = n(74188),
                i = n(88202),
                o = n(21019);
            let s = Array.from({
                length: 256
            }, (e, t) => t.toString(16).padStart(2, "0"));

            function a(e, t = {}) {
                return "number" == typeof e || "bigint" == typeof e ? l(e, t) : "string" == typeof e ? f(e, t) : "boolean" == typeof e ? c(e, t) : u(e, t)
            }

            function c(e, t = {}) {
                let n = `0x${Number(e)}`;
                return "number" == typeof t.size ? ((0, o.Yf)(n, {
                    size: t.size
                }), (0, i.vk)(n, {
                    size: t.size
                })) : n
            }

            function u(e, t = {}) {
                let n = "";
                for (let t = 0; t < e.length; t++) n += s[e[t]];
                let r = `0x${n}`;
                return "number" == typeof t.size ? ((0, o.Yf)(r, {
                    size: t.size
                }), (0, i.vk)(r, {
                    dir: "right",
                    size: t.size
                })) : r
            }

            function l(e, t = {}) {
                let n;
                let {
                    signed: o,
                    size: s
                } = t, a = BigInt(e);
                s ? n = o ? (1 n << 8 n * BigInt(s) - 1 n) - 1 n : 2 n ** (8 n * BigInt(s)) - 1 n : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
                let c = "bigint" == typeof n && o ? -n - 1 n : 0;
                if (n && a > n || a < c) {
                    let t = "bigint" == typeof e ? "n" : "";
                    throw new r.J5({
                        max: n ? `${n}${t}` : void 0,
                        min: `${c}${t}`,
                        signed: o,
                        size: s,
                        value: `${e}${t}`
                    })
                }
                let u = `0x${(o&&a<0?(1n<<BigInt(8*s))+BigInt(a):a).toString(16)}`;
                return s ? (0, i.vk)(u, {
                    size: s
                }) : u
            }
            let d = new TextEncoder;

            function f(e, t = {}) {
                return u(d.encode(e), t)
            }
        },
        48: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return i
                }
            });
            var r = n(40369);

            function i(e) {
                if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]")) return null;
                let t = `0x${e.slice(1,65)}`;
                return (0, r.v)(t) ? t : null
            }
        },
        25652: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return s
                }
            });
            var r = n(47807),
                i = n(6649),
                o = n(58591);

            function s(e, t) {
                if (!(e instanceof i.G)) return !1;
                let n = e.walk(e => e instanceof o.Lu);
                return n instanceof o.Lu && (!!(n.data ? .errorName === "ResolverNotFound" || n.data ? .errorName === "ResolverWildcardNotSupported" || n.data ? .errorName === "ResolverNotContract" || n.data ? .errorName === "ResolverError" || n.data ? .errorName === "HttpError" || n.reason ? .includes("Wildcard on non-extended resolvers is not supported")) || "reverse" === t && n.reason === r.$[50])
            }
        },
        82978: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return c
                }
            });
            var r = n(53932),
                i = n(82361),
                o = n(95046),
                s = n(36494),
                a = n(48);

            function c(e) {
                let t = new Uint8Array(32).fill(0);
                if (!e) return (0, o.ci)(t);
                let n = e.split(".");
                for (let e = n.length - 1; e >= 0; e -= 1) {
                    let o = (0, a.i)(n[e]),
                        c = o ? (0, i.O0)(o) : (0, s.w)((0, i.qX)(n[e]), "bytes");
                    t = (0, s.w)((0, r.zo)([t, c]), "bytes")
                }
                return (0, o.ci)(t)
            }
        },
        83658: function(e, t, n) {
            "use strict";
            let r, i, o, s, a, c, u, l, d, f, h, p, m, g, y;
            n.d(t, {
                F: function() {
                    return _
                }
            });
            let b = new Map([
                [8217, "apostrophe"],
                [8260, "fraction slash"],
                [12539, "middle dot"]
            ]);

            function w(e) {
                var t;
                let n;
                return t = function(e) {
                    let t = 0;

                    function n() {
                        return e[t++] << 8 | e[t++]
                    }
                    let r = n(),
                        i = 1,
                        o = [0, 1];
                    for (let e = 1; e < r; e++) o.push(i += n());
                    let s = n(),
                        a = t;
                    t += s;
                    let c = 0,
                        u = 0;

                    function l() {
                        return 0 == c && (u = u << 8 | e[t++], c = 8), u >> --c & 1
                    }
                    let d = 2147483648 - 1,
                        f = 0;
                    for (let e = 0; e < 31; e++) f = f << 1 | l();
                    let h = [],
                        p = 0,
                        m = 2147483648;
                    for (;;) {
                        let e = Math.floor(((f - p + 1) * i - 1) / m),
                            t = 0,
                            n = r;
                        for (; n - t > 1;) {
                            let r = t + n >>> 1;
                            e < o[r] ? n = r : t = r
                        }
                        if (0 == t) break;
                        h.push(t);
                        let s = p + Math.floor(m * o[t] / i),
                            a = p + Math.floor(m * o[t + 1] / i) - 1;
                        for (;
                            ((s ^ a) & 1073741824) == 0;) f = f << 1 & d | l(), s = s << 1 & d, a = a << 1 & d | 1;
                        for (; s & ~a & 536870912;) f = 1073741824 & f | f << 1 & d >>> 1 | l(), s = s << 1 ^ 1073741824, a = (1073741824 ^ a) << 1 | 1073741825;
                        p = s, m = 1 + a - s
                    }
                    let g = r - 4;
                    return h.map(t => {
                        switch (t - g) {
                            case 3:
                                return g + 65792 + (e[a++] << 16 | e[a++] << 8 | e[a++]);
                            case 2:
                                return g + 256 + (e[a++] << 8 | e[a++]);
                            case 1:
                                return g + e[a++];
                            default:
                                return t - 1
                        }
                    })
                }(function(e) {
                    let t = [];
                    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((e, n) => t[e.charCodeAt(0)] = n);
                    let n = e.length,
                        r = new Uint8Array(6 * n >> 3);
                    for (let i = 0, o = 0, s = 0, a = 0; i < n; i++) a = a << 6 | t[e.charCodeAt(i)], (s += 6) >= 8 && (r[o++] = a >> (s -= 8));
                    return r
                }(e)), n = 0, () => t[n++]
            }

            function v(e, t = 0) {
                let n = [];
                for (;;) {
                    let r = e(),
                        i = e();
                    if (!i) break;
                    t += r;
                    for (let e = 0; e < i; e++) n.push(t + e);
                    t += i + 1
                }
                return n
            }

            function A(e) {
                return E(() => {
                    let t = v(e);
                    if (t.length) return t
                })
            }

            function C(e) {
                let t = [];
                for (;;) {
                    let n = e();
                    if (0 == n) break;
                    t.push(function(e, t) {
                        let n = 1 + t(),
                            r = t(),
                            i = E(t);
                        return x(i.length, 1 + e, t).flatMap((e, t) => {
                            let [o, ...s] = e;
                            return Array(i[t]).fill().map((e, t) => {
                                let i = t * r;
                                return [o + t * n, s.map(e => e + i)]
                            })
                        })
                    }(n, e))
                }
                for (;;) {
                    let n = e() - 1;
                    if (n < 0) break;
                    t.push(x(1 + e(), 1 + n, e).map(e => [e[0], e.slice(1)]))
                }
                return t.flat()
            }

            function E(e) {
                let t = [];
                for (;;) {
                    let n = e(t.length);
                    if (!n) break;
                    t.push(n)
                }
                return t
            }

            function x(e, t, n) {
                let r = Array(e).fill().map(() => []);
                for (let i = 0; i < t; i++)(function(e, t) {
                    let n = Array(e);
                    for (let i = 0, o = 0; i < e; i++) {
                        var r;
                        n[i] = o += 1 & (r = t()) ? ~r >> 1 : r >> 1
                    }
                    return n
                })(e, n).forEach((e, t) => r[t].push(e));
                return r
            }

            function I(e) {
                return `{${e.toString(16).toUpperCase().padStart(2,"0")}}`
            }

            function B(e) {
                let t = e.length;
                if (t < 4096) return String.fromCodePoint(...e);
                let n = [];
                for (let r = 0; r < t;) n.push(String.fromCodePoint(...e.slice(r, r += 4096)));
                return n.join("")
            }

            function k(e, t) {
                let n = e.length,
                    r = n - t.length;
                for (let i = 0; 0 == r && i < n; i++) r = e[i] - t[i];
                return r
            }

            function P(e) {
                return e >> 24 & 255
            }

            function M(e) {
                return 16777215 & e
            }

            function O(e) {
                return e >= 44032 && e < 55204
            }

            function S(e) {
                r || function() {
                    let e = w("AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g");
                    for (let [t, n] of (r = new Map(A(e).flatMap((e, t) => e.map(e => [e, t + 1 << 24]))), i = new Set(v(e)), o = new Map, s = new Map, C(e))) {
                        if (!i.has(t) && 2 == n.length) {
                            let [e, r] = n, i = s.get(e);
                            i || (i = new Map, s.set(e, i)), i.set(r, t)
                        }
                        o.set(t, n.reverse())
                    }
                }();
                let t = [],
                    n = [],
                    a = !1;

                function c(e) {
                    let n = r.get(e);
                    n && (a = !0, e |= n), t.push(e)
                }
                for (let r of e)
                    for (;;) {
                        if (r < 128) t.push(r);
                        else if (O(r)) {
                            let e = r - 44032,
                                t = e / 588 | 0,
                                n = e % 588 / 28 | 0,
                                i = e % 28;
                            c(4352 + t), c(4449 + n), i > 0 && c(4519 + i)
                        } else {
                            let e = o.get(r);
                            e ? n.push(...e) : c(r)
                        }
                        if (!n.length) break;
                        r = n.pop()
                    }
                if (a && t.length > 1) {
                    let e = P(t[0]);
                    for (let n = 1; n < t.length; n++) {
                        let r = P(t[n]);
                        if (0 == r || e <= r) {
                            e = r;
                            continue
                        }
                        let i = n - 1;
                        for (;;) {
                            let n = t[i + 1];
                            if (t[i + 1] = t[i], t[i] = n, !i || (e = P(t[--i])) <= r) break
                        }
                        e = P(t[n])
                    }
                }
                return t
            }

            function R(e) {
                return function(e) {
                    let t = [],
                        n = [],
                        r = -1,
                        i = 0;
                    for (let o of e) {
                        let e = P(o),
                            a = M(o);
                        if (-1 == r) 0 == e ? r = a : t.push(a);
                        else if (i > 0 && i >= e) 0 == e ? (t.push(r, ...n), n.length = 0, r = a) : n.push(a), i = e;
                        else {
                            let o = function(e, t) {
                                if (e >= 4352 && e < 4371 && t >= 4449 && t < 4470) return 44032 + (e - 4352) * 588 + (t - 4449) * 28;
                                if (O(e) && t > 4519 && t < 4547 && (e - 44032) % 28 == 0) return e + (t - 4519); {
                                    let n = s.get(e);
                                    return n && (n = n.get(t)) ? n : -1
                                }
                            }(r, a);
                            o >= 0 ? r = o : 0 == i && 0 == e ? (t.push(r), r = a) : (n.push(a), i = e)
                        }
                    }
                    return r >= 0 && t.push(r, ...n), t
                }(S(e))
            }
            let T = e => Array.from(e);

            function N(e, t) {
                return e.P.has(t) || e.Q.has(t)
            }
            class F extends Array {
                get is_emoji() {
                    return !0
                }
            }

            function D() {
                let e, t;
                if (a) return;
                let n = w("AEEUdwmgDS8BxQKKAP4BOgDjATAAngDUAIMAoABoAOAAagCOAEQAhABMAHIAOwA9ACsANgAmAGIAHgAuACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGgAeABMAGAUhBe8BFxREN8sF2wC5AK5HAW8ArQkDzQCuhzc3NzcBP68NEfMABQdHBuw5BV8FYAA9MzkI9r4ZBg7QyQAWA9CeOwLNCjcCjqkChuA/lm+RAsXTAoP6ASfnEQDytQFJAjWVCkeXAOsA6godAB/cwdAUE0WlBCN/AQUCQRjFD/MRBjHxDQSJbw0jBzUAswBxme+tnIcAYwabAysG8QAjAEMMmxcDqgPKQyDXCMMxA7kUQwD3NXOrAKmFIAAfBC0D3x4BJQDBGdUFAhEgVD8JnwmQJiNWYUzrg0oAGwAUAB0AFnNcACkAFgBP9h3gPfsDOWDKneY2ChglX1UDYD30ABsAFAAdABZzIGRAnwDD8wAjAEEMzRbDqgMB2sAFYwXqAtCnAsS4AwpUJKRtFHsadUz9AMMVbwLpABM1NJEX0ZkCgYMBEyMAxRVvAukAEzUBUFAtmUwSAy4DBTER33EftQHfSwB5MxJ/AjkWKQLzL8E/cwBB6QH9LQDPDtO9ASNriQC5DQANAwCK21EFI91zHwCoL9kBqQcHBwcHKzUDowBvAQohPvU3fAQgHwCyAc8CKQMA5zMSezr7ULgFmDp/LzVQBgEGAi8FYQVgt8AFcTtlQhpCWEmfe5tmZ6IAExsDzQ8t+X8rBKtTAltbAn0jsy8Bl6utPWMDTR8Ei2kRANkDBrNHNysDBzECQWUAcwFpJ3kAiyUhAJ0BUb8AL3EfAbfNAz81KUsFWwF3YQZtAm0A+VEfAzEJDQBRSQCzAQBlAHsAM70GD/v3IZWHBwARKQAxALsjTwHZAeMPEzmXgIHwABIAGQA8AEUAQDt3gdvIEGcQZAkGTRFMdEIVEwK0D64L7REdDNkq09PgADSxB/MDWwfzA1sDWwfzB/MDWwfzA1sDWwNbA1scEvAi28gQZw9QBHUFlgWTBN4IiyZREYkHMAjaVBV0JhxPA00BBCMtSSQ7mzMTJUpMFE0LCAQ2SmyvfUADTzGzVP2QqgPTMlc5dAkGHnkSqAAyD3skNb1OhnpPcagKU0+2tYdJak5vAsY6sEAACikJm2/Dd1YGRRAfJ6kQ+ww3AbkBPw3xS9wE9QY/BM0fgRkdD9GVoAipLeEM8SbnLqWAXiP5KocF8Uv4POELUVFsD10LaQnnOmeBUgMlAREijwrhDT0IcRD3Cs1vDekRSQc9A9lJngCpBwULFR05FbkmFGKwCw05ewb/GvoLkyazEy17AAXXGiUGUQEtGwMA0y7rhbRaNVwgT2MGBwspI8sUrFAkDSlAu3hMGh8HGSWtApVDdEqLUToelyH6PEENai4XUYAH+TwJGVMLhTyiRq9FEhHWPpE9TCJNTDAEOYMsMyePCdMPiQy9fHYBXQklCbUMdRM1ERs3yQg9Bx0xlygnGQglRplgngT7owP3E9UDDwVDCUUHFwO5HDETMhUtBRGBKNsC9zbZLrcCk1aEARsFzw8pH+MQVEfkDu0InwJpA4cl7wAxFSUAGyKfCEdnAGOP3FMJLs8Iy2pwI3gDaxTrZRF3B5UOWwerHDcVwxzlcMxeD4YMKKezCV8BeQmdAWME5wgNNV+MpCBFZ1eLXBifIGVBQ14AAjUMaRWjRMGHfAKPD28SHwE5AXcHPQ0FAnsR8RFvEJkI74YINbkz/DopBFMhhyAVCisDU2zSCysm/Qz8bQGnEmYDEDRBd/Jnr2C6KBgBBx0yyUFkIfULlk/RDKAaxRhGVDIZ6AfDA/ca9yfuQVsGAwOnBxc6UTPyBMELbQiPCUMATQ6nGwfbGG4KdYzUATWPAbudA1uVhwJzkwY7Bw8Aaw+LBX3pACECqwinAAkA0wNbAD0CsQehAB0AiUUBQQMrMwEl6QKTA5cINc8BmTMB9y0EH8cMGQD7O25OAsO1AoBuZqYF4VwCkgJNOQFRKQQJUktVA7N15QDfAE8GF+NLARmvTs8e50cB43MvAMsA/wAJOQcJRQHRAfdxALsBYws1Caa3uQFR7S0AhwAZbwHbAo0A4QA5AIP1AVcAUQVd/QXXAlNNARU1HC9bZQG/AyMBNwERAH0Gz5GpzQsjBHEH1wIQHxXlAu8yB7kFAyLjE9FCyQK94lkAMhoKPAqrCqpgX2Q3CjV2PVQAEh+sPss/UgVVO1c7XDtXO1w7VztcO1c7XDtXO1wDm8Pmw+YKcF9JYe8Mqg3YRMw6TRPfYFVgNhPMLbsUxRXSJVoZQRrAJwkl6FUNDwgt12Y0CDA0eRfAAEMpbINFY4oeNApPHOtTlVT8LR8AtUumM7MNsBsZREQFS3XxYi4WEgomAmSFAmJGX1GzAV83JAKh+wJonAJmDQKfiDgfDwJmPwJmKgRyBIMDfxcDfpY5Cjl7GzmGOicnAmwhAjI6OA4CbcsCbbLzjgM3a0kvAWsA4gDlAE4JB5wMkQECD8YAEbkCdzMCdqZDAnlPRwJ4viFg30WyRvcCfEMCeswCfQ0CfPRIBEiBZygALxlJXEpfGRtK0ALRBQLQ0EsrA4hTA4fqRMmRNgLypV0HAwOyS9JMMSkH001QTbMCi0MCitzFHwshR2sJuwKOOwKOYESbhQKO3QKOYHxRuFM5AQ5S2FSJApP/ApMQAO0AIFUiVbNV1AosHymZijLleGpFPz0Cl6MC77ZYJawAXSkClpMCloCgAK1ZsFoNhVEAPwKWuQKWUlxIXNUCmc8CmWhczl0LHQKcnznGOqECnBoCn58CnryOACETNS4TAp31Ap6WALlBYThh8wKe1wKgcgGtAp6jIwKeUqljzGQrKS8CJ7MCJoICoP8CoFDbAqYzAqXSAqgDAIECp/ZogGi1AAdNaiBq1QKs5wKssgKtawKtBgJXIQJV4AKx5dsDH1JsmwKywRECsuwbbORtZ21MYwMl0QK2YD9DbpQDKUkCuGICuUsZArkue3A6cOUCvR0DLbYDMhUCvoxyBgMzdQK+HnMmc1MCw88CwwhzhnRPOUl05AM8qwEDPJ4DPcMCxYACxksCxhSNAshtVQLISALJUwLJMgJkoQLd1nh9ZXiyeSlL1AMYp2cGAmH4GfeVKHsPXpZevxUCz28Cz3AzT1fW9xejAMqxAs93AS3uA04Wfk8JAtwrAtuOAtJTA1JgA1NjAQUDVZCAjUMEzxrxZEl5A4LSg5EC2ssC2eKEFIRNp0ADhqkAMwNkEoZ1Xf0AWQLfaQLevHd7AuIz7RgB8zQrAfSfAfLWiwLr9wLpdH0DAur9AuroAP1LAb0C7o0C66CWrpcHAu5DA4XkmH1w5HGlAvMHAG0DjhqZlwL3FwORcgOSiwL3nAL53QL4apogmq+/O5siA52HAv7+AR8APZ8gAZ+3AwWRA6ZuA6bdANXJAwZuoYyiCQ0DDE0BEwEjB3EGZb1rCQC/BG/DFY8etxEAG3k9ACcDNxJRA42DAWcrJQCM8wAlAOanC6OVCLsGI6fJBgCvBRnDBvElRUYFFoAFcD9GSDNCKUK8X3kZX8QAls0FOgCQVCGbwTsuYDoZutcONxjOGJHJ/gVfBWAFXwVgBWsFYAVfBWAFXwVgBV8FYAVfBWBOHQjfjW8KCgoKbF7xMwTRA7kGN8PDAMMEr8MA70gxFroFTj5xPnhCR0K+X30/X/AAWBkzswCNBsxzzASm70aCRS4rDDMeLz49fnXfcsH5GcoscQFz13Y4HwVnBXLJycnACNdRYwgICAqEXoWTxgA7P4kACxbZBu21Kw0AjMsTAwkVAOVtJUUsJ1JCuULESUArXy9gPi9AKwnJRQYKTD9LPoA+iT54PnkCkULEUUpDX9NWV3JVEjQAc1w3A3IBE3YnX+g7QiMJb6MKaiszRCUuQrNCxDPMCcwEX9EWJzYREBEEBwIHKn6l33JCNVIfybPJtAltydPUCmhBZw/tEKsZAJOVJU1CLRuxbUHOQAo7P0s+eEJHHA8SJVRPdGM0NVrpvBoKhfUlM0JHHGUQUhEWO1xLSj8MO0ucNAqJIzVCRxv9EFsqKyA4OQgNj2nwZgp5ZNFgE2A1K3YHS2AhQQojJmC7DgpzGG1WYFUZCQYHZO9gHWCdYIVgu2BTYJlwFh8GvRbcXbG8YgtDHrMBwzPVyQonHQgkCyYBgQJ0Ajc4nVqIAwGSCsBPIgDsK3SWEtIVBa5N8gGjAo+kVwVIZwD/AEUSCDweX4ITrRQsJ8K3TwBXFDwEAB0TvzVcAtoTS20RIwDgVgZ9BBImYgA5AL4Coi8LFnezOkCnIQFjAY4KBAPh9RcGsgZSBsEAJctdsWIRu2kTkQstRw7DAcMBKgpPBGIGMDAwKCYnKTQaLg4AKRSVAFwCdl+YUZ0JdicFD3lPAdt1F9ZZKCGxuE3yBxkFVGcA/wBFEgiCBwAOLHQSjxOtQDg1z7deFRMAZ8QTAGtKb1ApIiPHADkAvgKiLy1DFtYCmBiDAlDDWNB0eo7fpaMO/aEVRRv0ATEQZBIODyMEAc8JQhCbDRgzFD4TAEMAu9YBCgCsAOkAm5I3ABwAYxvONnR+MhXJAxgKQyxL2+kkJhMbhQKDBMkSsvF0AD9BNQ6uQC7WqSQHwxEAEEIu1hkhAH2z4iQPwyJPHNWpdyYBRSpnJALzoBAEVPPsH20MxA0CCEQKRgAFyAtFAlMNwwjEDUQJRArELtapMg7DDZgJIw+TGukEIwvDFkMAqAtDEMMMBhioe+QAO3MMRAACrgnEBSPY9Q0FDnbSBoMAB8MSYxkSxAEJAPIJAAB8FWMOFtMc/HcXwxhDAC7DAvOowwAewwJdKDKHAAHDAALrFUQVwwAbwyvzpWMWv8wA/ABpAy++bcYDUKPD0KhDCwKmJ1MAAmMA5+UZwxAagwipBRL/eADfw6fDGOMCGsOjk3l6BwOpo4sAEsMOGxMAA5sAbcMOAAvDp0MJGkMDwgipnNIPAwfIqUMGAOGDAAPzABXDAAcDAAnDAGmTABrDAA7DChjDjnEWAwABYwAOcwAuUyYABsMAF8MIKQANUgC6wy4AA8MADqMq8wCyYgAcIwAB8wqpAAXOCx0V4wAHowBCwwEKAGnDAAuDAB3DAAjDCakABdIAbqcZ3QCZCCkABdIAAAFDAAfjAB2jCCkABqIACYMAGzMAbSMA5sOIAAhjAAhDABTDBAkpAAbSAOOTAAlDC6kOzPtnAAdDAG6kQFAATwAKwwwAA0MACbUDPwAHIwAZgwACE6cDAAojAApDAAoDp/MGwwAJIwADEwAQQwgAFEMAEXMAD5MADfMADcMAGRMOFiMAFUMAbqMWuwHDAMIAE0MLAGkzEgDhUwACQwAEWgAXgwUjAAbYABjDBSYBgzBaAEFNALcQBxUMegAwMngBrA0IZgJ0KxQHBREPd1N0ZzKRJwaIHAZqNT4DqQq8BwngAB4DAwt2AX56T1ocKQNXAh1GATQGC3tOxYNagkgAMQA5CQADAQEAWxLjAIOYNAEzAH7tFRk6TglSAF8NAAlYAQ+S1ACAQwQorQBiAN4dAJ1wPyeTANVzuQDX3AIeEMp9eyMgXiUAEdkBkJizKltbVVAaRMqRAAEAhyQ/SDEz6BmfVwB6ATEsOClKIRcDOF0E/832AFNt5AByAnkCRxGCOs94NjXdAwINGBonDBwPALW2AwICAgAAAAAAAAYDBQMDARrUAwAtAAAAAgEGBgYGBgYFBQUFBQUEBQYHCAkEBQUFBQQAAAICAAAAIgCNAJAAlT0A6gC7ANwApEQAwgCyAK0AqADuAKYA2gCjAOcBCAEDAMcAgQBiANIA1AEDAN4A8gCQAKkBMQDqAN8A3AsBCQ8yO9ra2tq8xuLT1tRJOB0BUgFcNU0BWgFpAWgBWwFMUUlLbhMBUxsNEAs6PhMOACcUKy0vMj5AQENDQ0RFFEYGJFdXV1dZWVhZL1pbXVxcI2NnZ2ZoZypsbnZ1eHh4eHh4enp6enp6enp6enp8fH18e2IARPIASQCaAHgAMgBm+ACOAFcAVwA3AnbvAIsABfj4AGQAk/IAnwBPAGIAZP//sACFAIUAaQBWALEAJAC2AIMCQAJDAPwA5wD+AP4A6AD/AOkA6QDoAOYALwJ7AVEBQAE+AVQBPgE+AT4BOQE4ATgBOAEcAVgXADEQCAEAUx8SHgsdHhYAjgCWAKYAUQBqIAIxAHYAbwCXAxUDJzIDIUlGTzEAkQJPAMcCVwKkAMAClgKWApYClgKWApYCiwKWApYClgKWApYClgKVApUCmAKgApcClgKWApQClAKUApQCkgKVAnUB1AKXAp8ClgKWApUeAIETBQD+DQOfAmECOh8BVBg9AuIZEjMbAU4/G1WZAXusRAFpYQEFA0FPAQYAmTEeIJdyADFoAHEANgCRA5zMk/C2jGINwjMWygIZCaXdfDILBCs5dAE7YnQBugDlhoiHhoiGiYqKhouOjIaNkI6Ij4qQipGGkoaThpSSlYaWhpeKmIaZhpqGm4aci52QnoqfhuIC4XTpAt90AIp0LHSoAIsAdHQEQwRABEIERQRDBEkERgRBBEcESQRIBEQERgRJAJ5udACrA490ALxuAQ10ANFZdHQA13QCFHQA/mJ0AP4BIQD+APwA/AD9APwDhGZ03ASMK23HAP4A/AD8AP0A/CR0dACRYnQA/gCRASEA/gCRAvQA/gCRA4RmdNwEjCttxyR0AP9idAEhAP4A/gD8APwA/QD8AP8A/AD8AP0A/AOEZnTcBIwrbcckdHQAkWJ0ASEA/gCRAP4AkQL0AP4AkQOEZnTcBIwrbcckdAJLAT50AlIBQXQCU8l0dAJfdHQDpgL0A6YDpgOnA6cDpwOnA4RmdNwEjCttxyR0dACRYnQBIQOmAJEDpgCRAvQDpgCRA4RmdNwEjCttxyR0BDh0AJEEOQCRDpU5dSgCADR03gV2CwArdAEFAM5iCnR0AF1iAAYcOgp0dACRCnQAXAEIwWZ0CnRmdHQAkWZ0CnRmdEXgAFF03gp0dEY0tlT2u3SOAQTwscwhjZZKrhYcBSfFp9XNbKiVDOD2b+cpe4/Z17mQnbtzzhaeQtE2GGj0IDNTjRUSyTxxw/RPHW/+vS7d1NfRt9z9QPZg4X7QFfhCnkvgNPIItOsC2eV6hPannZNHlZ9xrwZXIMOlu3jSoQSq78WEjwLjw1ELSlF1aBvfzwk5ZX7AUvQzjPQKbDuQ+sm4wNOp4A6AdVuRS0t1y/DZpg4R6m7FNjM9HgvW7Bi88zaMjOo6lM8wtBBdj8LP4ylv3zCXPhebMKJc066o9sF71oFW/8JXu86HJbwDID5lzw5GWLR/LhT0Qqnp2JQxNZNfcbLIzPy+YypqRm/lBmGmex+82+PisxUumSeJkALIT6rJezxMH+CTJmQtt5uwTVbL3ptmjDUQzlSIvWi8Tl7ng1NpuRn1Ng4n14Qc+3Iil7OwkvNWogLSPkn3pihIFytyIGmMhOe3n1tWsuMy9BdKyqF4Z3v2SgggTL9KVvMXPnCbRe+oOuFFP3HejBG/w9gvmfNYvg6JuWia2lcSSN1uIjBktzoIazOHPJZ7kKHPz8mRWVdW3lA8WGF9dQF6Bm673boov3BUWDU2JNcahR23GtfHKLOz/viZ+rYnZFaIznXO67CYEJ1fXuTRpZhYZkKe54xeoagkNGLs+NTZHE0rX45/XvQ2RGADX6vcAvdxIUBV27wxGm2zjZo4X3ILgAlrOFheuZ6wtsvaIj4yLY7qqawlliaIcrz2G+c3vscAnCkCuMzMmZvMfu9lLwTvfX+3cVSyPdN9ZwgDZhfjRgNJcLiJ67b9xx8JHswprbiE3v9UphotAPIgnXVIN5KmMc0piXhc6cChPnN+MRhG9adtdttQTTwSIpl8I4/j//d3sz1326qTBTpPRM/Hgh3kzqEXs8ZAk4ErQhNO8hzrQ0DLkWMA/N+91tn2MdOJnWC2FCZehkQrwzwbKOjhvZsbM95QoeL9skYyMf4srVPVJSgg7pOLUtr/n9eT99oe9nLtFRpjA9okV2Kj8h9k5HaC0oivRD8VyXkJ81tcd4fHNXPCfloIQasxsuO18/46dR2jgul/UIet2G0kRvnyONMKhHs6J26FEoqSqd+rfYjeEGwHWVDpX1fh1jBBcKGMqRepju9Y00mDVHC+Xdij/j44rKfvfjGinNs1jO/0F3jB83XCDINN/HB84axlP+3E/klktRo+vl3U/aiyMJbIodE1XSsDn6UAzIoMtUObY2+k/4gY/l+AkZJ5Sj2vQrkyLm3FoxjhDX+31UXBFf9XrAH31fFqoBmDEZvhvvpnZ87N+oZEu7U9O/nnk+QWj3x8uyoRbEnf+O5UMr9i0nHP38IF5AvzrBW8YWBUR0mIAzIvndQq9N3v/Jto3aPjPXUPl8ASdPPyAp7jENf8bk7VMM9ol9XGmlBmeDMuGqt+WzuL6CXAxXjIhCPM5vACchgMJ/8XBGLO/D1isVvGhwwHHr1DLaI5mn2Jr/b1pUD90uciDaS8cXNDzCWvNmT/PhQe5e8nTnnnkt8Ds/SIjibcum/fqDhKopxAY8AkSrPn+IGDEKOO+U3XOP6djFs2H5N9+orhOahiQk5KnEUWa+CzkVzhp8bMHRbg81qhjjXuIKbHjSLSIBKWqockGtKinY+z4/RdBUF6pcc3JmnlxVcNgrI4SEzKUZSwcD2QCyxzKve+gAmg6ZuSRkpPFa6mfThu7LJNu3H5K42uCpNvPAsoedolKV/LHe/eJ+BbaG5MG0NaSGVPRUmNFMFFSSpXEcXwbVh7UETOZZtoVNRGOIbbkig3McEtR68cG0RZAoJevWYo7Dg/lZ1CQzblWeUvVHmr8fY4Nqd9JJiH/zEX24mJviH60fAyFr0A3c4bC1j3yZU60VgJxXn8JgJXLUIsiBnmKmMYz+7yBQFBvqb2eYnuW59joZBf56/wXvWIR4R8wTmV80i1mZy+S4+BUES+hzjk0uXpC///z/IlqHZ1monzlXp8aCfhGKMti73FI1KbL1q6IKO4fuBuZ59gagjn5xU79muMpHXg6S+e+gDM/U9BKLHbl9l6o8czQKl4RUkJJiqftQG2i3BMg/TQlUYFkJDYBOOvAugYuzYSDnZbDDd/aSd9x0Oe6F+bJcHfl9+gp6L5/TgA+BdFFovbfCrQ40s5vMPw8866pNX8zyFGeFWdxIpPVp9Rg1UPOVFbFZrvaFq/YAzHQgqMWpahMYfqHpmwXfHL1/kpYmGuHFwT55mQu0dylfNuq2Oq0hTMCPwqfxnuBIPLXfci4Y1ANy+1CUipQxld/izVh16WyG2Q0CQQ9NqtAnx1HCHwDj7sYxOSB0wopZSnOzxQOcExmxrVTF2BkOthVpGfuhaGECfCJpJKpjnihY+xOT2QJxN61+9K6QSqtv2Shr82I3jgJrqBg0wELFZPjvHpvzTtaJnLK6Vb97Yn933koO/saN7fsjwNKzp4l2lJVx2orjCGzC/4ZL4zCver6aQYtC5sdoychuFE6ufOiog+VWi5UDkbmvmtah/3aArEBIi39s5ILUnlFLgilcGuz9CQshEY7fw2ouoILAYPVT/gyAIq3TFAIwVsl+ktkRz/qGfnCDGrm5gsl/l9QdvCWGsjPz3dU7XuqKfdUrr/6XIgjp4rey6AJBmCmUJMjITHVdFb5m1p+dLMCL8t55zD42cmftmLEJC0Da04YiRCVUBLLa8D071/N5UBNBXDh0LFsmhV/5B5ExOB4j3WVG/S3lfK5o+V6ELHvy6RR9n4ac+VsK4VE4yphPvV+kG9FegTBH4ZRXL2HytUHCduJazB/KykjfetYxOXTLws267aGOd+I+JhKP//+VnXmS90OD/jvLcVu0asyqcuYN1mSb6XTlCkqv1vigZPIYwNF/zpWcT1GR/6aEIRjkh0yhg4LXJfaGobYJTY4JI58KiAKgmmgAKWdl5nYCeLqavRJGQNuYuZtZFGx+IkI4w4NS2xwbetNMunOjBu/hmKCI/w7tfiiyUd//4rbTeWt4izBY8YvGIN6vyKYmP/8X8wHKCeN+WRcKM70+tXKNGyevU9H2Dg5BsljnTf8YbsJ1TmMs74Ce2XlHisleguhyeg44rQOHZuw/6HTkhnnurK2d62q6yS7210SsAIaR+jXMQA+svkrLpsUY+F30Uw89uOdGAR6vo4FIME0EfVVeHTu6eKicfhSqOeXJhbftcd08sWEnNUL1C9fnprTgd83IMut8onVUF0hvqzZfHduPjbjwEXIcoYmy+P6tcJZHmeOv6VrvEdkHDJecjHuHeWANe79VG662qTjA/HCvumVv3qL+LrOcpqGps2ZGwQdFJ7PU4iuyRlBrwfO+xnPyr47s2cXVbWzAyznDiBGjCM3ksxjjqM62GE9C8f5U38kB3VjtabKp/nRdvMESPGDG90bWRLAt1Qk5DyLuazRR1YzdC1c+hZXvAWV8xA72S4A8B67vjVhbba3MMop293FeEXpe7zItMWrJG/LOH9ByOXmYnNJfjmfuX9KbrpgLOba4nZ+fl8Gbdv/ihv+6wFGKHCYrVwmhFC0J3V2bn2tIB1wCc1CST3d3X2OyxhguXcs4sm679UngzofuSeBewMFJboIQHbUh/m2JhW2hG9DIvG2t7yZIzKBTz9wBtnNC+2pCRYhSIuQ1j8xsz5VvqnyUIthvuoyyu7fNIrg/KQUVmGQaqkqZk/Vx5b33/gsEs8yX7SC1J+NV4icz6bvIE7C5G6McBaI8rVg56q5QBJWxn/87Q1sPK4+sQa8fLU5gXo4paaq4cOcQ4wR0VBHPGjKh+UlPCbA1nLXyEUX45qZ8J7/Ln4FPJE2TdzD0Z8MLSNQiykMMmSyOCiFfy84Rq60emYB2vD09KjYwsoIpeDcBDTElBbXxND72yhd9pC/1CMid/5HUMvAL27OtcIJDzNKpRPNqPOpyt2aPGz9QWIs9hQ9LiX5s8m9hjTUu/f7MyIatjjd+tSfQ3ufZxPpmJhTaBtZtKLUcfOCUqADuO+QoH8B9v6U+P0HV1GLQmtoNFTb3s74ivZgjES0qfK+8RdGgBbcCMSy8eBvh98+et1KIFqSe1KQPyXULBMTsIYnysIwiZBJYdI20vseV+wuJkcqGemehKjaAb9L57xZm3g2zX0bZ2xk/fU+bCo7TlnbW7JuF1YdURo/2Gw7VclDG1W7LOtas2LX4upifZ/23rzpsnY/ALfRgrcWP5hYmV9VxVOQA1fZvp9F2UNU+7d7xRyVm5wiLp3/0dlV7vdw1PMiZrbDAYzIVqEjRY2YU03sJhPnlwIPcZUG5ltL6S8XCxU1eYS5cjr34veBmXAvy7yN4ZjArIG0dfD/5UpBNlX1ZPoxJOwyqRi3wQWtOzd4oNKh0LkoTm8cwqgIfKhqqGOhwo71I+zXnMemTv2B2AUzABWyFztGgGULjDDzWYwJUVBTjKCn5K2QGMK1CQT7SzziOjo+BhAmqBjzuc3xYym2eedGeOIRJVyTwDw37iCMe4g5Vbnsb5ZBdxOAnMT7HU4DHpxWGuQ7GeiY30Cpbvzss55+5Km1YsbD5ea3NI9QNYIXol5apgSu9dZ8f8xS5dtHpido5BclDuLWY4lhik0tbJa07yJhH0BOyEut/GRbYTS6RfiTYWGMCkNpfSHi7HvdiTglEVHKZXaVhezH4kkXiIvKopYAlPusftpE4a5IZwvw1x/eLvoDIh/zpo9FiQInsTb2SAkKHV42XYBjpJDg4374XiVb3ws4qM0s9eSQ5HzsMU4OZJKuopFjBM+dAZEl8RUMx5uU2N486Kr141tVsGQfGjORYMCJAMsxELeNT4RmWjRcpdTGBwcx6XN9drWqPmJzcrGrH4+DRc7+n1w3kPZwu0BkNr6hQrqgo7JTB9A5kdJ/H7P4cWBMwsmuixAzJB3yrQpnGIq90lxAXLzDCdn1LPibsRt7rHNjgQBklRgPZ8vTbjXdgXrTWQsK5MdrXXQVPp0Rinq3frzZKJ0qD6Qhc40VzAraUXlob1gvkhK3vpmHgI6FRlQZNx6eRqkp0zy4AQlX813fAPtL3jMRaitGFFjo0zmErloC+h+YYdVQ6k4F/epxAoF0BmqEoKNTt6j4vQZNQ2BoqF9Vj53TOIoNmDiu9Xp15RkIgQIGcoLpfoIbenzpGUAtqFJp5W+LLnx38jHeECTJ/navKY1NWfN0sY1T8/pB8kIH3DU3DX+u6W3YwpypBMYOhbSxGjq84RZ84fWJow8pyHqn4S/9J15EcCMsXqrfwyd9mhiu3+rEo9pPpoJkdZqHjra4NvzFwuThNKy6hao/SlLw3ZADUcUp3w3SRVfW2rhl80zOgTYnKE0Hs2qp1J6H3xqPqIkvUDRMFDYyRbsFI3M9MEyovPk8rlw7/0a81cDVLmBsR2ze2pBuKb23fbeZC0uXoIvDppfTwIDxk1Oq2dGesGc+oJXWJLGkOha3CX+DUnzgAp9HGH9RsPZN63Hn4RMA5eSVhPHO+9RcRb/IOgtW31V1Q5IPGtoxPjC+MEJbVlIMYADd9aHYWUIQKopuPOHmoqSkubnAKnzgKHqgIOfW5RdAgotN6BN+O2ZYHkuemLnvQ8U9THVrS1RtLmKbcC7PeeDsYznvqzeg6VCNwmr0Yyx1wnLjyT84BZz3EJyCptD3yeueAyDWIs0L2qs/VQ3HUyqfrja0V1LdDzqAikeWuV4sc7RLIB69jEIBjCkyZedoUHqCrOvShVzyd73OdrJW0hPOuQv2qOoHDc9xVb6Yu6uq3Xqp2ZaH46A7lzevbxQEmfrzvAYSJuZ4WDk1Hz3QX1LVdiUK0EvlAGAYlG3Md30r7dcPN63yqBCIj25prpvZP0nI4+EgWoFG95V596CurXpKRBGRjQlHCvy5Ib/iW8nZJWwrET3mgd6mEhfP4KCuaLjopWs7h+MdXFdIv8dHQJgg1xi1eYqB0uDYjxwVmri0Sv5XKut/onqapC+FQiC2C1lvYJ9MVco6yDYsS3AANUfMtvtbYI2hfwZatiSsnoUeMZd34GVjkMMKA+XnjJpXgRW2SHTZplVowPmJsvXy6w3cfO1AK2dvtZEKTkC/TY9LFiKHCG0DnrMQdGm2lzlBHM9iEYynH2UcVMhUEjsc0oDBTgo2ZSQ1gzkAHeWeBXYFjYLuuf8yzTCy7/RFR81WDjXMbq2BOH5dURnxo6oivmxL3cKzKInlZkD31nvpHB9Kk7GfcfE1t+1V64b9LtgeJGlpRFxQCAqWJ5DoY77ski8gsOEOr2uywZaoO/NGa0X0y1pNQHBi3b2SUGNpcZxDT7rLbBf1FSnQ8guxGW3W+36BW0gBje4DOz6Ba6SVk0xiKgt+q2JOFyr4SYfnu+Ic1QZYIuwHBrgzr6UvOcSCzPTOo7D6IC4ISeS7zkl4h+2VoeHpnG/uWR3+ysNgPcOIXQbv0n4mr3BwQcdKJxgPSeyuP/z1Jjg4e9nUvoXegqQVIE30EHx5GHv+FAVUNTowYDJgyFhf5IvlYmEqRif6+WN1MkEJmDcQITx9FX23a4mxy1AQRsOHO/+eImX9l8EMJI3oPWzVXxSOeHU1dUWYr2uAA7AMb+vAEZSbU3qob9ibCyXeypEMpZ6863o6QPqlqGHZkuWABSTVNd4cOh9hv3qEpSx2Zy/DJMP6cItEmiBJ5PFqQnDEIt3NrA3COlOSgz43D7gpNFNJ5MBh4oFzhDPiglC2ypsNU4ISywY2erkyb1NC3Qh/IfWj0eDgZI4/ln8WPfBsT3meTjq1Uqt1E7Zl/qftqkx6aM9KueMCekSnMrcHj1CqTWWzEzPsZGcDe3Ue4Ws+XFYVxNbOFF8ezkvQGR6ZOtOLU2lQEnMBStx47vE6Pb7AYMBRj2OOfZXfisjJnpTfSNjo6sZ6qSvNxZNmDeS7Gk3yYyCk1HtKN2UnhMIjOXUzAqDv90lx9O/q/AT1ZMnit5XQe9wmQxnE/WSH0CqZ9/2Hy+Sfmpeg8RwsHI5Z8kC8H293m/LHVVM/BA7HaTJYg5Enk7M/xWpq0192ACfBai2LA/qrCjCr6Dh1BIMzMXINBmX96MJ5Hn2nxln/RXPFhwHxUmSV0EV2V0jm86/dxxuYSU1W7sVkEbN9EzkG0QFwPhyHKyb3t+Fj5WoUUTErcazE/N6EW6Lvp0d//SDPj7EV9UdJN+Amnf3Wwk3A0SlJ9Z00yvXZ7n3z70G47Hfsow8Wq1JXcfwnA+Yxa5mFsgV464KKP4T31wqIgzFPd3eCe3j5ory5fBF2hgCFyVFrLzI9eetNXvM7oQqyFgDo4CTp/hDV9NMX9JDHQ/nyHTLvZLNLF6ftn2OxjGm8+PqOwhxnPHWipkE/8wbtyri80Sr7pMNkQGMfo4ZYK9OcCC4ESVFFbLMIvlxSoRqWie0wxqnLfcLSXMSpMMQEJYDVObYsXIQNv4TGNwjq1kvT1UOkicTrG3IaBZ3XdScS3u8sgeZPVpOLkbiF940FjbCeNRINNvDbd01EPBrTCPpm12m43ze1bBB59Ia6Ovhnur/Nvx3IxwSWol+3H2qfCJR8df6aQf4v6WiONxkK+IqT4pKQrZK/LplgDI/PJZbOep8dtbV7oCr6CgfpWa8NczOkPx81iSHbsNhVSJBOtrLIMrL31LK9TqHqAbAHe0RLmmV806kRLDLNEhUEJfm9u0sxpkL93Zgd6rw+tqBfTMi59xqXHLXSHwSbSBl0EK0+loECOPtrl+/nsaFe197di4yUgoe4jKoAJDXc6DGDjrQOoFDWZJ9HXwt8xDrQP+7aRwWKWI1GF8s8O4KzxWBBcwnl3vnl1Oez3oh6Ea1vjR7/z7DDTrFtqU2W/KAEzAuXDNZ7MY73MF216dzdSbWmUp4lcm7keJfWaMHgut9x5C9mj66Z0lJ+yhsjVvyiWrfk1lzPOTdhG15Y7gQlXtacvI7qv/XNSscDwqkgwHT/gUsD5yB7LdRRvJxQGYINn9hTpodKFVSTPrtGvyQw+HlRFXIkodErAGu9Iy1YpfSPc3jkFh5CX3lPxv7aqjE/JAfTIpEjGb/H7MO0e2vsViSW1qa/Lmi4/n4DEI3g7lYrcanspDfEpKkdV1OjSLOy0BCUqVoECaB55vs06rXl4jqmLsPsFM/7vYJ0vrBhDCm/00A/H81l1uekJ/6Lml3Hb9+NKiLqATJmDpyzfYZFHumEjC662L0Bwkxi7E9U4cQA0XMVDuMYAIeLMPgQaMVOd8fmt5SflFIfuBoszeAw7ow5gXPE2Y/yBc/7jExARUf/BxIHQBF5Sn3i61w4z5xJdCyO1F1X3+3ax+JSvMeZ7S6QSKp1Fp/sjYz6Z+VgCZzibGeEoujryfMulH7Rai5kAft9ebcW50DyJr2uo2z97mTWIu45YsSnNSMrrNUuG1XsYBtD9TDYzQffKB87vWbkM4EbPAFgoBV4GQS+vtFDUqOFAoi1nTtmIOvg38N4hT2Sn8r8clmBCXspBlMBYTnrqFJGBT3wZOzAyJDre9dHH7+x7qaaKDOB4UQALD5ecS0DE4obubQEiuJZ0EpBVpLuYcce8Aa4PYd/V4DLDAJBYKQPCWTcrEaZ5HYbJi11Gd6hjGom1ii18VHYnG28NKpkz2UKVPxlhYSp8uZr367iOmoy7zsxehW9wzcy2zG0a80PBMCRQMb32hnaHeOR8fnNDzZhaNYhkOdDsBUZ3loDMa1YP0uS0cjUP3b/6DBlqmZOeNABDsLl5BI5QJups8uxAuWJdkUB/pO6Zax6tsg7fN5mjjDgMGngO+DPcKqiHIDbFIGudxtPTIyDi9SFMKBDcfdGQRv41q1AqmxgkVfJMnP8w/Bc7N9/TR6C7mGObFqFkIEom8sKi2xYqJLTCHK7cxzaZvqODo22c3wisBCP4HeAgcRbNPAsBkNRhSmD48dHupdBRw4mIvtS5oeF6zeT1KMCyhMnmhpkFAGWnGscoNkwvQ8ZM5lE/vgTHFYL99OuNxdFBxTEDd5v2qLR8y9WkXsWgG6kZNndFG+pO/UAkOCipqIhL3hq7cRSdrCq7YhUsTocEcnaFa6nVkhnSeRYUA1YO0z5itF9Sly3VlxYDw239TJJH6f3EUfYO5lb7bcFcz8Bp7Oo8QmnsUHOz/fagVUBtKEw1iT88j+aKkv8cscKNkMxjYr8344D1kFoZ7/td1W6LCNYN594301tUGRmFjAzeRg5vyoM1F6+bJZ/Q54jN/k8SFd3DxPTYaAUsivsBfgTn7Mx8H2SpPt4GOdYRnEJOH6jHM2p6SgB0gzIRq6fHxGMmSmqaPCmlfwxiuloaVIitLGN8wie2CDWhkzLoCJcODh7KIOAqbHEvXdUxaS4TTTs07Clzj/6GmVs9kiZDerMxEnhUB6QQPlcfqkG9882RqHoLiHGBoHfQuXIsAG8GTAtao2KVwRnvvam8jo1e312GQAKWEa4sUVEAMG4G6ckcONDwRcg1e2D3+ohXgY4UAWF8wHKQMrSnzCgfFpsxh+aHXMGtPQroQasRY4U6UdG0rz1Vjbka0MekOGRZQEvqQFlxseFor8zWFgHek3v29+WqN6gaK5gZOTOMZzpQIC1201LkMCXild3vWXSc5UX9xcFYfbRPzGFa1FDcPfPB/jUEq/FeGt419CI3YmBlVoHsa4KdcwQP5ZSwHHhFJ7/Ph/Rap/4vmG91eDwPP0lDfCDRCLszTqfzM71xpmiKi2HwS4WlqvGNwtvwF5Dqpn6KTq8ax00UMPkxDcZrEEEsIvHiUXXEphdb4GB4FymlPwBz4Gperqq5pW7TQ6/yNRhW8VT5NhuP0udlxo4gILq5ZxAZk8ZGh3g4CqxJlPKY7AQxupfUcVpWT5VItp1+30UqoyP4wWsRo3olRRgkWZZ2ZN6VC3OZFeXB8NbnUrSdikNptD1QiGuKkr8EmSR/AK9Rw+FF3s5uwuPbvHGiPeFOViltMK7AUaOsq9+x9cndk3iJEE5LKZRlWJbKOZweROzmPNVPkjE3K/TyA57Rs68TkZ3MR8akKpm7cFjnjPd/DdkWjgYoKHSr5Wu5ssoBYU4acRs5g2DHxUmdq8VXOXRbunD8QN0LhgkssgahcdoYsNvuXGUK/KXD/7oFb+VGdhqIn02veuM5bLudJOc2Ky0GMaG4W/xWBxIJcL7yliJOXOpx0AkBqUgzlDczmLT4iILXDxxtRR1oZa2JWFgiAb43obrJnG/TZC2KSK2wqOzRZTXavZZFMb1f3bXvVaNaK828w9TO610gk8JNf3gMfETzXXsbcvRGCG9JWQZ6+cDPqc4466Yo2RcKH+PILeKOqtnlbInR3MmBeGG3FH10yzkybuqEC2HSQwpA0An7d9+73BkDUTm30bZmoP/RGbgFN+GrCOfADgqr0WbI1a1okpFms8iHYw9hm0zUvlEMivBRxModrbJJ+9/p3jUdQQ9BCtQdxnOGrT5dzRUmw0593/mbRSdBg0nRvRZM5/E16m7ZHmDEtWhwvfdZCZ8J8M12W0yRMszXamWfQTwIZ4ayYktrnscQuWr8idp3PjT2eF/jmtdhIfcpMnb+IfZY2FebW6UY/AK3jP4u3Tu4zE4qlnQgLFbM19EBIsNf7KhjdbqQ/D6yiDb+NlEi2SKD+ivXVUK8ib0oBo366gXkR8ZxGjpJIDcEgZPa9TcYe0TIbiPl/rPUQDu3XBJ9X/GNq3FAUsKsll57DzaGMrjcT+gctp+9MLYXCq+sqP81eVQ0r9lt+gcQfZbACRbEjvlMskztZG8gbC8Qn9tt26Q7y7nDrbZq/LEz7kR6Jc6pg3N9rVX8Y5MJrGlML9p9lU4jbTkKqCveeZUJjHB03m2KRKR2TytoFkTXOLg7keU1s1lrPMQJpoOKLuAAC+y1HlJucU6ysB5hsXhvSPPLq5J7JtnqHKZ4vYjC4Vy8153QY+6780xDuGARsGbOs1WqzH0QS765rnSKEbbKlkO8oI/VDwUd0is13tKpqILu1mDJFNy/iJAWcvDgjxvusIT+PGz3ST/J9r9Mtfd0jpaGeiLYIqXc7DiHSS8TcjFVksi66PEkxW1z6ujbLLUGNNYnzOWpH8BZGK4bCK7iR+MbIv8ncDAz1u4StN3vTTzewr9IQjk9wxFxn+6N1ddKs0vffJiS08N3a4G1SVrlZ97Q/M+8G9fe5AP6d9/Qq4WRnORVhofPIKEdCr3llspUfE0oKIIYoByBRPh+bX1HLS3JWGJRhIvE1aW4NTd8ePi4Z+kXb+Z8snYfSNcqijhAgVsx4RCM54cXUiYkjeBmmC4ajOHrChoELscJJC7+9jjMjw5BagZKlgRMiSNYz7h7vvZIoQqbtQmspc0cUk1G/73iXtSpROl5wtLgQi0mW2Ex8i3WULhcggx6E1LMVHUsdc9GHI1PH3U2Ko0PyGdn9KdVOLm7FPBui0i9a0HpA60MsewVE4z8CAt5d401Gv6zXlIT5Ybit1VIA0FCs7wtvYreru1fUyW3oLAZ/+aTnZrOcYRNVA8spoRtlRoWflsRClFcgzkqiHOrf0/SVw+EpVaFlJ0g4Kxq1MMOmiQdpMNpte8lMMQqm6cIFXlnGbfJllysKDi+0JJMotkqgIxOSQgU9dn/lWkeVf8nUm3iwX2Nl3WDw9i6AUK3vBAbZZrcJpDQ/N64AVwjT07Jef30GSSmtNu2WlW7YoyW2FlWfZFQUwk867EdLYKk9VG6JgEnBiBxkY7LMo4YLQJJlAo9l/oTvJkSARDF/XtyAzM8O2t3eT/iXa6wDN3WewNmQHdPfsxChU/KtLG2Mn8i4ZqKdSlIaBZadxJmRzVS/o4yA65RTSViq60oa395Lqw0pzY4SipwE0SXXsKV+GZraGSkr/RW08wPRvqvSUkYBMA9lPx4m24az+IHmCbXA+0faxTRE9wuGeO06DIXa6QlKJ3puIyiuAVfPr736vzo2pBirS+Vxel3TMm3JKhz9o2ZoRvaFVpIkykb0Hcm4oHFBMcNSNj7/4GJt43ogonY2Vg4nsDQIWxAcorpXACzgBqQPjYsE/VUpXpwNManEru4NwMCFPkXvMoqvoeLN3qyu/N1eWEHttMD65v19l/0kH2mR35iv/FI+yjoHJ9gPMz67af3Mq/BoWXqu3rphiWMXVkmnPSEkpGpUI2h1MThideGFEOK6YZHPwYzMBvpNC7+ZHxPb7epfefGyIB4JzO9DTNEYnDLVVHdQyvOEVefrk6Uv5kTQYVYWWdqrdcIl7yljwwIWdfQ/y+2QB3eR/qxYObuYyB4gTbo2in4PzarU1sO9nETkmj9/AoxDA+JM3GMqQtJR4jtduHtnoCLxd1gQUscHRB/MoRYIEsP2pDZ9KvHgtlk1iTbWWbHhohwFEYX7y51fUV2nuUmnoUcqnWIQAAgl9LTVX+Bc0QGNEhChxHR4YjfE51PUdGfsSFE6ck7BL3/hTf9jLq4G1IafINxOLKeAtO7quulYvH5YOBc+zX7CrMgWnW47/jfRsWnJjYYoE7xMfWV2HN2iyIqLI"),
                    r = () => v(n),
                    i = () => new Set(r());
                a = new Map(C(n)), c = i(), u = r(), l = new Set(r().map(e => u[e])), u = new Set(u), d = i(), i();
                let o = A(n),
                    s = n(),
                    b = () => new Set(r().flatMap(e => o[e]).concat(r()));
                f = E(e => {
                    let t = E(n).map(e => e + 96);
                    if (t.length) {
                        let r = e >= s;
                        return t[0] -= 32, t = B(t), r && (t = `Restricted[${t}]`), {
                            N: t,
                            P: b(),
                            Q: b(),
                            M: !n(),
                            R: r
                        }
                    }
                }), h = i(), p = new Map;
                let x = r().concat(T(h)).sort((e, t) => e - t);
                for (let {
                        V: e,
                        M: t
                    } of (x.forEach((e, t) => {
                        let r = n(),
                            i = x[t] = r ? x[t - r] : {
                                V: [],
                                M: new Map
                            };
                        i.V.push(e), h.has(e) || p.set(e, i)
                    }), new Set(p.values()))) {
                    let n = [];
                    for (let t of e) {
                        let e = f.filter(e => N(e, t)),
                            r = n.find(({
                                G: t
                            }) => e.some(e => t.has(e)));
                        r || (r = {
                            G: new Set,
                            V: []
                        }, n.push(r)), r.V.push(t), e.forEach(e => r.G.add(e))
                    }
                    let r = n.flatMap(e => T(e.G));
                    for (let {
                            G: e,
                            V: i
                        } of n) {
                        let n = new Set(r.filter(t => !e.has(t)));
                        for (let e of i) t.set(e, n)
                    }
                }
                let I = new Set,
                    P = new Set,
                    O = e => I.has(e) ? P.add(e) : I.add(e);
                for (let e of f) {
                    for (let t of e.P) O(t);
                    for (let t of e.Q) O(t)
                }
                for (let e of I) p.has(e) || P.has(e) || p.set(e, 1);
                for (let r of (m = new Set(T(I).concat(T(S(I).map(M)))), g = (e = [], t = v(n), function t({
                        S: n,
                        B: r
                    }, i, o) {
                        if (!(4 & n) || o !== i[i.length - 1])
                            for (let s of (2 & n && (o = i[i.length - 1]), 1 & n && e.push(i), r))
                                for (let e of s.Q) t(s, [...i, e], o)
                    }(function e(r) {
                        return {
                            S: n(),
                            B: E(() => {
                                let r = v(n).map(e => t[e]);
                                if (r.length) return e(r)
                            }),
                            Q: r
                        }
                    }([]), []), e).map(e => F.from(e)).sort(k), y = new Map, g)) {
                    let e = [y];
                    for (let t of r) {
                        let n = e.map(e => {
                            let n = e.get(t);
                            return n || (n = new Map, e.set(t, n)), n
                        });
                        65039 === t ? e.push(...n) : e = n
                    }
                    for (let t of e) t.V = r
                }
            }

            function U(e) {
                return (Q(e) ? "" : `${L(q([e]))} `) + I(e)
            }

            function L(e) {
                return `"${e}"\u200E`
            }

            function q(e, t = I) {
                var n;
                let r = [];
                n = e[0], D(), u.has(n) && r.push("◌");
                let i = 0,
                    o = e.length;
                for (let n = 0; n < o; n++) {
                    let o = e[n];
                    Q(o) && (r.push(B(e.slice(i, n))), r.push(t(o)), i = n + 1)
                }
                return r.push(B(e.slice(i, o))), r.join("")
            }

            function Q(e) {
                return D(), d.has(e)
            }

            function j(e) {
                return Error(`disallowed character: ${U(e)}`)
            }

            function G(e, t) {
                let n = U(t),
                    r = f.find(e => e.P.has(t));
                return r && (n = `${r.N} ${n}`), Error(`illegal mixture: ${e.N} + ${n}`)
            }

            function z(e) {
                return Error(`illegal placement: ${e}`)
            }

            function W(e) {
                return e.filter(e => 65039 != e)
            }

            function _(e) {
                var t;
                return (t = function(e, t, n) {
                    if (!e) return [];
                    D();
                    let r = 0;
                    return e.split(".").map(e => {
                        let i = function(e) {
                                let t = [];
                                for (let n = 0, r = e.length; n < r;) {
                                    let r = e.codePointAt(n);
                                    n += r < 65536 ? 1 : 2, t.push(r)
                                }
                                return t
                            }(e),
                            o = {
                                input: i,
                                offset: r
                            };
                        r += i.length + 1;
                        try {
                            let e, r = o.tokens = function(e, t, n) {
                                    let r = [],
                                        i = [];
                                    for (e = e.slice().reverse(); e.length;) {
                                        let o = function(e, t) {
                                            let n, r = y,
                                                i = e.length;
                                            for (; i && (r = r.get(e[--i]));) {
                                                let {
                                                    V: t
                                                } = r;
                                                t && (n = t, e.length = i)
                                            }
                                            return n
                                        }(e);
                                        if (o) i.length && (r.push(t(i)), i = []), r.push(n(o));
                                        else {
                                            let t = e.pop();
                                            if (m.has(t)) i.push(t);
                                            else {
                                                let e = a.get(t);
                                                if (e) i.push(...e);
                                                else if (!c.has(t)) throw j(t)
                                            }
                                        }
                                    }
                                    return i.length && r.push(t(i)), r
                                }(i, t, n),
                                s = r.length;
                            if (!s) throw Error("empty label");
                            let d = o.output = r.flat();
                            if (! function(e) {
                                    for (let t = e.lastIndexOf(95); t > 0;)
                                        if (95 !== e[--t]) throw Error("underscore allowed only at start")
                                }(d), !(o.emoji = s > 1 || r[0].is_emoji) && d.every(e => e < 128)) ! function(e) {
                                if (e.length >= 4 && 45 == e[2] && 45 == e[3]) throw Error(`invalid label extension: "${B(e.slice(0,4))}"`)
                            }(d), e = "ASCII";
                            else {
                                let t = r.flatMap(e => e.is_emoji ? [] : e);
                                if (t.length) {
                                    if (u.has(d[0])) throw z("leading combining mark");
                                    for (let e = 1; e < s; e++) {
                                        let t = r[e];
                                        if (!t.is_emoji && u.has(t[0])) throw z(`emoji + combining mark: "${B(r[e-1])} + ${q([t[0]])}"`)
                                    }! function(e) {
                                        let t = e[0],
                                            n = b.get(t);
                                        if (n) throw z(`leading ${n}`);
                                        let r = e.length,
                                            i = -1;
                                        for (let o = 1; o < r; o++) {
                                            t = e[o];
                                            let r = b.get(t);
                                            if (r) {
                                                if (i == o) throw z(`${n} + ${r}`);
                                                i = o + 1, n = r
                                            }
                                        }
                                        if (i == r) throw z(`trailing ${n}`)
                                    }(d);
                                    let n = T(new Set(t)),
                                        [i] = function(e) {
                                            let t = f;
                                            for (let n of e) {
                                                let e = t.filter(e => N(e, n));
                                                if (!e.length) {
                                                    if (f.some(e => N(e, n))) throw G(t[0], n);
                                                    throw j(n)
                                                }
                                                if (t = e, 1 == e.length) break
                                            }
                                            return t
                                        }(n);
                                    (function(e, t) {
                                        for (let n of t)
                                            if (!N(e, n)) throw G(e, n);
                                        if (e.M) {
                                            let e = S(t).map(M);
                                            for (let t = 1, n = e.length; t < n; t++)
                                                if (l.has(e[t])) {
                                                    let r = t + 1;
                                                    for (let i; r < n && l.has(i = e[r]); r++)
                                                        for (let n = t; n < r; n++)
                                                            if (e[n] == i) throw Error(`duplicate non-spacing marks: ${U(i)}`);
                                                    if (r - t > 4) throw Error(`excessive non-spacing marks: ${L(q(e.slice(t-1,r)))} (${r-t}/4)`);
                                                    t = r
                                                }
                                        }
                                    })(i, t),
                                    function(e, t) {
                                        let n;
                                        let r = [];
                                        for (let e of t) {
                                            let t = p.get(e);
                                            if (1 === t) return;
                                            if (t) {
                                                let r = t.M.get(e);
                                                if (!(n = n ? n.filter(e => r.has(e)) : T(r)).length) return
                                            } else r.push(e)
                                        }
                                        if (n) {
                                            for (let t of n)
                                                if (r.every(e => N(t, e))) throw Error(`whole-script confusable: ${e.N}/${t.N}`)
                                        }
                                    }(i, n), e = i.N
                                } else e = "Emoji"
                            }
                            o.type = e
                        } catch (e) {
                            o.error = e
                        }
                        return o
                    })
                }(e, R, W)).map(({
                    input: e,
                    error: n,
                    output: r
                }) => {
                    if (n) {
                        let r = n.message;
                        throw Error(1 == t.length ? r : `Invalid label ${L(q(e))}: ${r}`)
                    }
                    return B(r)
                }).join(".")
            }
        },
        68890: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return a
                }
            });
            var r = n(82361),
                i = n(95046),
                o = n(36494),
                s = n(48);

            function a(e) {
                let t = e.replace(/^\.|\.$/gm, "");
                if (0 === t.length) return new Uint8Array(1);
                let n = new Uint8Array((0, r.qX)(t).byteLength + 2),
                    a = 0,
                    c = t.split(".");
                for (let e = 0; e < c.length; e++) {
                    let t = (0, r.qX)(c[e]);
                    if (t.byteLength > 255) {
                        var u;
                        t = (0, r.qX)((u = function(e) {
                            let t = new Uint8Array(32).fill(0);
                            return e ? (0, s.i)(e) || (0, o.w)((0, r.qX)(e)) : (0, i.ci)(t)
                        }(c[e]), `[${u.slice(2)}]`))
                    }
                    n[a] = t.length, n.set(t, a + 1), a += t.length + 1
                }
                return n.byteLength !== a + 1 ? n.slice(0, a + 1) : n
            }
        },
        92915: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return a
                }
            });
            var r = n(52186),
                i = n(6649),
                o = n(58591),
                s = n(96329);

            function a(e, {
                abi: t,
                address: n,
                args: a,
                docsPath: c,
                functionName: u,
                sender: l
            }) {
                let {
                    code: d,
                    data: f,
                    message: h,
                    shortMessage: p
                } = e instanceof o.VQ ? e : e instanceof i.G ? e.walk(e => "data" in e) || e.walk() : {}, m = e instanceof r.wb ? new o.Dk({
                    functionName: u
                }) : [3, s.XS.code].includes(d) && (f || h || p) ? new o.Lu({
                    abi: t,
                    data: "object" == typeof f ? f.data : f,
                    functionName: u,
                    message: p ? ? h
                }) : e;
                return new o.uq(m, {
                    abi: t,
                    args: a,
                    contractAddress: n,
                    docsPath: c,
                    functionName: u,
                    sender: l
                })
            }
        },
        43149: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return o
                }
            });
            var r = n(6649),
                i = n(37764);

            function o(e, t) {
                let n = (e.details || "").toLowerCase(),
                    o = e instanceof r.G ? e.walk(e => e.code === i.M_.code) : e;
                return o instanceof r.G ? new i.M_({
                    cause: e,
                    message: o.details
                }) : i.M_.nodeMessage.test(n) ? new i.M_({
                    cause: e,
                    message: e.details
                }) : i.Hh.nodeMessage.test(n) ? new i.Hh({
                    cause: e,
                    maxFeePerGas: t ? .maxFeePerGas
                }) : i.G$.nodeMessage.test(n) ? new i.G$({
                    cause: e,
                    maxFeePerGas: t ? .maxFeePerGas
                }) : i.ZI.nodeMessage.test(n) ? new i.ZI({
                    cause: e,
                    nonce: t ? .nonce
                }) : i.vU.nodeMessage.test(n) ? new i.vU({
                    cause: e,
                    nonce: t ? .nonce
                }) : i.se.nodeMessage.test(n) ? new i.se({
                    cause: e,
                    nonce: t ? .nonce
                }) : i.C_.nodeMessage.test(n) ? new i.C_({
                    cause: e
                }) : i.WF.nodeMessage.test(n) ? new i.WF({
                    cause: e,
                    gas: t ? .gas
                }) : i.dR.nodeMessage.test(n) ? new i.dR({
                    cause: e,
                    gas: t ? .gas
                }) : i.pZ.nodeMessage.test(n) ? new i.pZ({
                    cause: e
                }) : i.cs.nodeMessage.test(n) ? new i.cs({
                    cause: e,
                    maxFeePerGas: t ? .maxFeePerGas,
                    maxPriorityFeePerGas: t ? .maxPriorityFeePerGas
                }) : new i.cj({
                    cause: e
                })
            }
        },
        20621: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(16719);

            function i(e) {
                let t = e.transactions ? .map(e => "string" == typeof e ? e : r.Tr(e));
                return { ...e,
                    baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
                    blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
                    difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
                    excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
                    gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
                    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
                    hash: e.hash ? e.hash : null,
                    logsBloom: e.logsBloom ? e.logsBloom : null,
                    nonce: e.nonce ? e.nonce : null,
                    number: e.number ? BigInt(e.number) : null,
                    size: e.size ? BigInt(e.size) : void 0,
                    timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
                    transactions: t,
                    totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null
                }
            }
        },
        27031: function(e, t, n) {
            "use strict";

            function r(e, {
                format: t
            }) {
                if (!t) return {};
                let n = {};
                return ! function t(r) {
                    for (let i of Object.keys(r)) i in e && (n[i] = e[i]), r[i] && "object" == typeof r[i] && !Array.isArray(r[i]) && t(r[i])
                }(t(e || {})), n
            }
            n.d(t, {
                K: function() {
                    return r
                }
            })
        },
        21677: function(e, t, n) {
            "use strict";

            function r(e, {
                args: t,
                eventName: n
            } = {}) {
                return { ...e,
                    blockHash: e.blockHash ? e.blockHash : null,
                    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                    logIndex: e.logIndex ? Number(e.logIndex) : null,
                    transactionHash: e.transactionHash ? e.transactionHash : null,
                    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
                    ...n ? {
                        args: t,
                        eventName: n
                    } : {}
                }
            }
            n.d(t, {
                U: function() {
                    return r
                }
            })
        },
        16719: function(e, t, n) {
            "use strict";
            n.d(t, {
                Tr: function() {
                    return o
                },
                c8: function() {
                    return i
                }
            });
            var r = n(21019);
            let i = {
                "0x0": "legacy",
                "0x1": "eip2930",
                "0x2": "eip1559",
                "0x3": "eip4844",
                "0x4": "eip7702"
            };

            function o(e) {
                let t = { ...e,
                    blockHash: e.blockHash ? e.blockHash : null,
                    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                    chainId: e.chainId ? (0, r.ly)(e.chainId) : void 0,
                    gas: e.gas ? BigInt(e.gas) : void 0,
                    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
                    maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
                    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
                    maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
                    nonce: e.nonce ? (0, r.ly)(e.nonce) : void 0,
                    to: e.to ? e.to : null,
                    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
                    type: e.type ? i[e.type] : void 0,
                    typeHex: e.type ? e.type : void 0,
                    value: e.value ? BigInt(e.value) : void 0,
                    v: e.v ? BigInt(e.v) : void 0
                };
                return e.authorizationList && (t.authorizationList = e.authorizationList.map(e => ({
                    contractAddress: e.address,
                    r: e.r,
                    s: e.s,
                    chainId: Number(e.chainId),
                    nonce: Number(e.nonce),
                    ...void 0 !== e.yParity ? {
                        yParity: Number(e.yParity)
                    } : {},
                    ...void 0 !== e.v && void 0 === e.yParity ? {
                        v: Number(e.v)
                    } : {}
                }))), t.yParity = (() => {
                    if (e.yParity) return Number(e.yParity);
                    if ("bigint" == typeof t.v) {
                        if (0 n === t.v || 27 n === t.v) return 0;
                        if (1 n === t.v || 28 n === t.v) return 1;
                        if (t.v >= 35 n) return t.v % 2 n === 0 n ? 1 : 0
                    }
                })(), "legacy" === t.type && (delete t.accessList, delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas, delete t.yParity), "eip2930" === t.type && (delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas), "eip1559" === t.type && delete t.maxFeePerBlobGas, t
            }
        },
        37669: function(e, t, n) {
            "use strict";
            n.d(t, {
                tG: function() {
                    return o
                }
            });
            var r = n(95046);
            let i = {
                legacy: "0x0",
                eip2930: "0x1",
                eip1559: "0x2",
                eip4844: "0x3",
                eip7702: "0x4"
            };

            function o(e) {
                let t = {};
                return void 0 !== e.authorizationList && (t.authorizationList = e.authorizationList.map(e => ({
                    address: e.contractAddress,
                    r: e.r,
                    s: e.s,
                    chainId: (0, r.eC)(e.chainId),
                    nonce: (0, r.eC)(e.nonce),
                    ...void 0 !== e.yParity ? {
                        yParity: (0, r.eC)(e.yParity)
                    } : {},
                    ...void 0 !== e.v && void 0 === e.yParity ? {
                        v: (0, r.eC)(e.v)
                    } : {}
                }))), void 0 !== e.accessList && (t.accessList = e.accessList), void 0 !== e.blobVersionedHashes && (t.blobVersionedHashes = e.blobVersionedHashes), void 0 !== e.blobs && ("string" != typeof e.blobs[0] ? t.blobs = e.blobs.map(e => (0, r.ci)(e)) : t.blobs = e.blobs), void 0 !== e.data && (t.data = e.data), void 0 !== e.from && (t.from = e.from), void 0 !== e.gas && (t.gas = (0, r.eC)(e.gas)), void 0 !== e.gasPrice && (t.gasPrice = (0, r.eC)(e.gasPrice)), void 0 !== e.maxFeePerBlobGas && (t.maxFeePerBlobGas = (0, r.eC)(e.maxFeePerBlobGas)), void 0 !== e.maxFeePerGas && (t.maxFeePerGas = (0, r.eC)(e.maxFeePerGas)), void 0 !== e.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = (0, r.eC)(e.maxPriorityFeePerGas)), void 0 !== e.nonce && (t.nonce = (0, r.eC)(e.nonce)), void 0 !== e.to && (t.to = e.to), void 0 !== e.type && (t.type = i[e.type]), void 0 !== e.value && (t.value = (0, r.eC)(e.value)), t
            }
        },
        93413: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                let r = e[t.name];
                if ("function" == typeof r) return r;
                let i = e[n];
                return "function" == typeof i ? i : n => t(e, n)
            }
            n.d(t, {
                s: function() {
                    return r
                }
            })
        },
        36494: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return M
                }
            });
            var r = n(65376);
            let i = BigInt(4294967296 - 1),
                o = BigInt(32),
                s = (e, t, n) => e << n | t >>> 32 - n,
                a = (e, t, n) => t << n | e >>> 32 - n,
                c = (e, t, n) => t << n - 32 | e >>> 64 - n,
                u = (e, t, n) => e << n - 32 | t >>> 64 - n;
            var l = n(68104);
            let d = [],
                f = [],
                h = [],
                p = BigInt(0),
                m = BigInt(1),
                g = BigInt(2),
                y = BigInt(7),
                b = BigInt(256),
                w = BigInt(113);
            for (let e = 0, t = m, n = 1, r = 0; e < 24; e++) {
                [n, r] = [r, (2 * n + 3 * r) % 5], d.push(2 * (5 * r + n)), f.push((e + 1) * (e + 2) / 2 % 64);
                let i = p;
                for (let e = 0; e < 7; e++)(t = (t << m ^ (t >> y) * w) % b) & g && (i ^= m << (m << BigInt(e)) - m);
                h.push(i)
            }
            let [v, A] = function(e, t = !1) {
                let n = new Uint32Array(e.length),
                    r = new Uint32Array(e.length);
                for (let s = 0; s < e.length; s++) {
                    let {
                        h: a,
                        l: c
                    } = function(e, t = !1) {
                        return t ? {
                            h: Number(e & i),
                            l: Number(e >> o & i)
                        } : {
                            h: 0 | Number(e >> o & i),
                            l: 0 | Number(e & i)
                        }
                    }(e[s], t);
                    [n[s], r[s]] = [a, c]
                }
                return [n, r]
            }(h, !0), C = (e, t, n) => n > 32 ? c(e, t, n) : s(e, t, n), E = (e, t, n) => n > 32 ? u(e, t, n) : a(e, t, n);
            class x extends l.kb {
                constructor(e, t, n, i = !1, o = 24) {
                    if (super(), this.blockLen = e, this.suffix = t, this.outputLen = n, this.enableXOF = i, this.rounds = o, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, r.Rx)(n), 0 >= this.blockLen || this.blockLen >= 200) throw Error("Sha3 supports only keccak-f1600 function");
                    this.state = new Uint8Array(200), this.state32 = (0, l.Jq)(this.state)
                }
                keccak() {
                    l.iA || (0, l.l1)(this.state32),
                        function(e, t = 24) {
                            let n = new Uint32Array(10);
                            for (let r = 24 - t; r < 24; r++) {
                                for (let t = 0; t < 10; t++) n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                                for (let t = 0; t < 10; t += 2) {
                                    let r = (t + 8) % 10,
                                        i = (t + 2) % 10,
                                        o = n[i],
                                        s = n[i + 1],
                                        a = C(o, s, 1) ^ n[r],
                                        c = E(o, s, 1) ^ n[r + 1];
                                    for (let n = 0; n < 50; n += 10) e[t + n] ^= a, e[t + n + 1] ^= c
                                }
                                let t = e[2],
                                    i = e[3];
                                for (let n = 0; n < 24; n++) {
                                    let r = f[n],
                                        o = C(t, i, r),
                                        s = E(t, i, r),
                                        a = d[n];
                                    t = e[a], i = e[a + 1], e[a] = o, e[a + 1] = s
                                }
                                for (let t = 0; t < 50; t += 10) {
                                    for (let r = 0; r < 10; r++) n[r] = e[t + r];
                                    for (let r = 0; r < 10; r++) e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10]
                                }
                                e[0] ^= v[r], e[1] ^= A[r]
                            }
                            n.fill(0)
                        }(this.state32, this.rounds), l.iA || (0, l.l1)(this.state32), this.posOut = 0, this.pos = 0
                }
                update(e) {
                    (0, r.Gg)(this);
                    let {
                        blockLen: t,
                        state: n
                    } = this, i = (e = (0, l.O0)(e)).length;
                    for (let r = 0; r < i;) {
                        let o = Math.min(t - this.pos, i - r);
                        for (let t = 0; t < o; t++) n[this.pos++] ^= e[r++];
                        this.pos === t && this.keccak()
                    }
                    return this
                }
                finish() {
                    if (this.finished) return;
                    this.finished = !0;
                    let {
                        state: e,
                        suffix: t,
                        pos: n,
                        blockLen: r
                    } = this;
                    e[n] ^= t, (128 & t) != 0 && n === r - 1 && this.keccak(), e[r - 1] ^= 128, this.keccak()
                }
                writeInto(e) {
                    (0, r.Gg)(this, !1), (0, r.aI)(e), this.finish();
                    let t = this.state,
                        {
                            blockLen: n
                        } = this;
                    for (let r = 0, i = e.length; r < i;) {
                        this.posOut >= n && this.keccak();
                        let o = Math.min(n - this.posOut, i - r);
                        e.set(t.subarray(this.posOut, this.posOut + o), r), this.posOut += o, r += o
                    }
                    return e
                }
                xofInto(e) {
                    if (!this.enableXOF) throw Error("XOF is not possible for this instance");
                    return this.writeInto(e)
                }
                xof(e) {
                    return (0, r.Rx)(e), this.xofInto(new Uint8Array(e))
                }
                digestInto(e) {
                    if ((0, r.J8)(e, this), this.finished) throw Error("digest() was already called");
                    return this.writeInto(e), this.destroy(), e
                }
                digest() {
                    return this.digestInto(new Uint8Array(this.outputLen))
                }
                destroy() {
                    this.destroyed = !0, this.state.fill(0)
                }
                _cloneInto(e) {
                    let {
                        blockLen: t,
                        suffix: n,
                        outputLen: r,
                        rounds: i,
                        enableXOF: o
                    } = this;
                    return e || (e = new x(t, n, r, o, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = r, e.enableXOF = o, e.destroyed = this.destroyed, e
                }
            }
            let I = (0, l.hE)(() => new x(136, 1, 32));
            var B = n(40369),
                k = n(82361),
                P = n(95046);

            function M(e, t) {
                let n = I((0, B.v)(e, {
                    strict: !1
                }) ? (0, k.O0)(e) : e);
                return "bytes" === (t || "hex") ? n : (0, P.NC)(n)
            }
        },
        53263: function(e, t, n) {
            "use strict";
            n.d(t, {
                n: function() {
                    return r
                }
            });
            let r = n(99530).r
        },
        87522: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return o
                }
            });
            var r = n(49014),
                i = n(99530);
            let o = e => (0, r.tP)((0, i.r)(e), 0, 4)
        },
        99530: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return d
                }
            });
            var r = n(82361),
                i = n(36494);
            let o = e => (0, i.w)((0, r.O0)(e));
            var s = n(43197);
            let a = /^tuple(?<array>(\[(\d*)\])*)$/;

            function c(e) {
                let t = "",
                    n = e.length;
                for (let r = 0; r < n; r++) t += function e(t) {
                    let n = t.type;
                    if (a.test(t.type) && "components" in t) {
                        n = "(";
                        let r = t.components.length;
                        for (let i = 0; i < r; i++) n += e(t.components[i]), i < r - 1 && (n += ", ");
                        let i = (0, s.Zw)(a, t.type);
                        return n += `)${i?.array??""}`, e({ ...t,
                            type: n
                        })
                    }
                    return ("indexed" in t && t.indexed && (n = `${n} indexed`), t.name) ? `${n} ${t.name}` : n
                }(e[r]), r !== n - 1 && (t += ", ");
                return t
            }
            var u = n(6649);
            let l = e => (function(e) {
                let t = !0,
                    n = "",
                    r = 0,
                    i = "",
                    o = !1;
                for (let s = 0; s < e.length; s++) {
                    let a = e[s];
                    if (["(", ")", ","].includes(a) && (t = !0), "(" === a && r++, ")" === a && r--, t) {
                        if (0 === r) {
                            if (" " === a && ["event", "function", ""].includes(i)) i = "";
                            else if (i += a, ")" === a) {
                                o = !0;
                                break
                            }
                            continue
                        }
                        if (" " === a) {
                            "," !== e[s - 1] && "," !== n && ",(" !== n && (n = "", t = !1);
                            continue
                        }
                        i += a, n += a
                    }
                }
                if (!o) throw new u.G("Unable to normalize signature.");
                return i
            })("string" == typeof e ? e : "function" === e.type ? `function ${e.name}(${c(e.inputs)})${e.stateMutability&&"nonpayable"!==e.stateMutability?` ${e.stateMutability}`:""}${e.outputs.length?` returns (${c(e.outputs)})`:""}` : "event" === e.type ? `event ${e.name}(${c(e.inputs)})` : "error" === e.type ? `error ${e.name}(${c(e.inputs)})` : "constructor" === e.type ? `constructor(${c(e.inputs)})${"payable"===e.stateMutability?" payable":""}` : "fallback" === e.type ? "fallback()" : "receive() external payable");

            function d(e) {
                return o(l(e))
            }
        },
        98992: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return r
                }
            });
            class r extends Map {
                constructor(e) {
                    super(), Object.defineProperty(this, "maxSize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.maxSize = e
                }
                get(e) {
                    let t = super.get(e);
                    return void 0 !== t && (this.delete(e), super.set(e, t)), t
                }
                set(e, t) {
                    return super.set(e, t), this.maxSize && this.size > this.maxSize && this.delete(this.keys().next().value), this
                }
            }
        },
        24606: function(e, t, n) {
            "use strict";
            n.d(t, {
                N7: function() {
                    return s
                }
            });
            let r = new Map,
                i = new Map,
                o = 0;

            function s(e, t, n) {
                let s = ++o,
                    a = () => r.get(e) || [],
                    c = () => {
                        let t = a();
                        r.set(e, t.filter(e => e.id !== s))
                    },
                    u = () => {
                        let t = i.get(e);
                        1 === a().length && t && t(), c()
                    },
                    l = a();
                if (r.set(e, [...l, {
                        id: s,
                        fns: t
                    }]), l && l.length > 0) return u;
                let d = {};
                for (let e in t) d[e] = (...t) => {
                    let n = a();
                    if (0 !== n.length)
                        for (let r of n) r.fns[e] ? .(...t)
                };
                let f = n(d);
                return "function" == typeof f && i.set(e, f), u
            }
        },
        9338: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return i
                }
            });
            var r = n(97317);

            function i(e, {
                emitOnBegin: t,
                initialWaitTime: n,
                interval: i
            }) {
                let o = !0,
                    s = () => o = !1;
                return (async () => {
                    let a;
                    t && (a = await e({
                        unpoll: s
                    }));
                    let c = await n ? .(a) ? ? i;
                    await (0, r.D)(c);
                    let u = async () => {
                        o && (await e({
                            unpoll: s
                        }), await (0, r.D)(i), u())
                    };
                    u()
                })(), s
            }
        },
        10639: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return i
                }
            });
            let r = new Map;

            function i({
                fn: e,
                id: t,
                shouldSplitBatch: n,
                wait: i = 0,
                sort: o
            }) {
                let s = async () => {
                        let t = u();
                        a();
                        let n = t.map(({
                            args: e
                        }) => e);
                        0 !== n.length && e(n).then(e => {
                            o && Array.isArray(e) && e.sort(o);
                            for (let n = 0; n < t.length; n++) {
                                let {
                                    pendingPromise: r
                                } = t[n];
                                r.resolve ? .([e[n], e])
                            }
                        }).catch(e => {
                            for (let n = 0; n < t.length; n++) {
                                let {
                                    pendingPromise: r
                                } = t[n];
                                r.reject ? .(e)
                            }
                        })
                    },
                    a = () => r.delete(t),
                    c = () => u().map(({
                        args: e
                    }) => e),
                    u = () => r.get(t) || [],
                    l = e => r.set(t, [...u(), e]);
                return {
                    flush: a,
                    async schedule(e) {
                        let t = {},
                            r = new Promise((e, n) => {
                                t.resolve = e, t.reject = n
                            });
                        return (n ? .([...c(), e]) && s(), u().length > 0) ? l({
                            args: e,
                            pendingPromise: t
                        }) : (l({
                            args: e,
                            pendingPromise: t
                        }), setTimeout(s, i)), r
                    }
                }
            }
        },
        55894: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return i
                }
            });
            var r = n(97317);

            function i(e, {
                delay: t = 100,
                retryCount: n = 2,
                shouldRetry: i = () => !0
            } = {}) {
                return new Promise((o, s) => {
                    let a = async ({
                        count: c = 0
                    } = {}) => {
                        let u = async ({
                            error: e
                        }) => {
                            let n = "function" == typeof t ? t({
                                count: c,
                                error: e
                            }) : t;
                            n && await (0, r.D)(n), a({
                                count: c + 1
                            })
                        };
                        try {
                            let t = await e();
                            o(t)
                        } catch (e) {
                            if (c < n && await i({
                                    count: c,
                                    error: e
                                })) return u({
                                error: e
                            });
                            s(e)
                        }
                    };
                    a()
                })
            }
        },
        13581: function(e, t, n) {
            "use strict";

            function r(e, {
                errorInstance: t = Error("timed out"),
                timeout: n,
                signal: r
            }) {
                return new Promise((i, o) => {
                    (async () => {
                        let s;
                        try {
                            let a = new AbortController;
                            n > 0 && (s = setTimeout(() => {
                                r ? a.abort() : o(t)
                            }, n)), i(await e({
                                signal: a ? .signal || null
                            }))
                        } catch (e) {
                            e ? .name === "AbortError" && o(t), o(e)
                        } finally {
                            clearTimeout(s)
                        }
                    })()
                })
            }
            n.d(t, {
                F: function() {
                    return r
                }
            })
        },
        97261: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return l
                }
            });
            var r = n(99112),
                i = n(36494),
                o = n(40369),
                s = n(21019),
                a = n(95046);
            async function c({
                hash: e,
                signature: t
            }) {
                let r = (0, o.v)(e) ? e : (0, a.NC)(e),
                    {
                        secp256k1: i
                    } = await Promise.resolve().then(n.bind(n, 26335)),
                    c = (() => {
                        if ("object" == typeof t && "r" in t && "s" in t) {
                            let {
                                r: e,
                                s: n,
                                v: r,
                                yParity: o
                            } = t, a = u(Number(o ? ? r));
                            return new i.Signature((0, s.y_)(e), (0, s.y_)(n)).addRecoveryBit(a)
                        }
                        let e = (0, o.v)(t) ? t : (0, a.NC)(t),
                            n = u((0, s.ly)(`0x${e.slice(130)}`));
                        return i.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(n)
                    })().recoverPublicKey(r.substring(2)).toHex(!1);
                return `0x${c}`
            }

            function u(e) {
                if (0 === e || 1 === e) return e;
                if (27 === e) return 0;
                if (28 === e) return 1;
                throw Error("Invalid yParityOrV value")
            }
            async function l({
                hash: e,
                signature: t
            }) {
                return function(e) {
                    let t = (0, i.w)(`0x${e.substring(4)}`).substring(26);
                    return (0, r.x)(`0x${t}`)
                }(await c({
                    hash: e,
                    signature: t
                }))
            }
        },
        11667: function(e, t, n) {
            "use strict";
            n.d(t, {
                mF: function() {
                    return u
                }
            });
            var r = n(51359),
                i = n(75057),
                o = n(75534),
                s = n(64113),
                a = n(95046);

            function c(e) {
                if (e && 0 !== e.length) return e.reduce((e, {
                    slot: t,
                    value: n
                }) => {
                    if (66 !== t.length) throw new i.W_({
                        size: t.length,
                        targetSize: 66,
                        type: "hex"
                    });
                    if (66 !== n.length) throw new i.W_({
                        size: n.length,
                        targetSize: 66,
                        type: "hex"
                    });
                    return e[t] = n, e
                }, {})
            }

            function u(e) {
                if (!e) return;
                let t = {};
                for (let {
                        address: n,
                        ...i
                    } of e) {
                    if (!(0, s.U)(n, {
                            strict: !1
                        })) throw new r.b({
                        address: n
                    });
                    if (t[n]) throw new o.Nc({
                        address: n
                    });
                    t[n] = function(e) {
                        let {
                            balance: t,
                            nonce: n,
                            state: r,
                            stateDiff: i,
                            code: s
                        } = e, u = {};
                        if (void 0 !== s && (u.code = s), void 0 !== t && (u.balance = (0, a.eC)(t)), void 0 !== n && (u.nonce = (0, a.eC)(n)), void 0 !== r && (u.state = c(r)), void 0 !== i) {
                            if (u.state) throw new o.Z8;
                            u.stateDiff = c(i)
                        }
                        return u
                    }(i)
                }
                return t
            }
        },
        47499: function(e, t, n) {
            "use strict";
            n.d(t, {
                P: function() {
                    return r
                }
            });
            let r = (e, t, n) => JSON.stringify(e, (e, n) => {
                let r = "bigint" == typeof n ? n.toString() : n;
                return "function" == typeof t ? t(e, r) : r
            }, n)
        },
        33425: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return u
                }
            });
            var r = n(96104);
            let i = 2 n ** 256 n - 1 n;
            var o = n(51359),
                s = n(37764),
                a = n(97658),
                c = n(64113);

            function u(e) {
                let {
                    account: t,
                    gasPrice: n,
                    maxFeePerGas: u,
                    maxPriorityFeePerGas: l,
                    to: d
                } = e, f = t ? (0, r.T)(t) : void 0;
                if (f && !(0, c.U)(f.address)) throw new o.b({
                    address: f.address
                });
                if (d && !(0, c.U)(d)) throw new o.b({
                    address: d
                });
                if (void 0 !== n && (void 0 !== u || void 0 !== l)) throw new a.xY;
                if (u && u > i) throw new s.Hh({
                    maxFeePerGas: u
                });
                if (l && u && l > u) throw new s.cs({
                    maxFeePerGas: u,
                    maxPriorityFeePerGas: l
                })
            }
        },
        14851: function(e, t, n) {
            "use strict";
            let r;
            n.d(t, {
                h: function() {
                    return o
                }
            });
            let i = 256;

            function o(e = 11) {
                if (!r || i + e > 512) {
                    r = "", i = 0;
                    for (let e = 0; e < 256; e++) r += (256 + 256 * Math.random() | 0).toString(16).substring(1)
                }
                return r.substring(i, i++ + e)
            }
        },
        85053: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return o
                }
            });
            var r = n(90408),
                i = n(42921);

            function o(e, t = "wei") {
                return (0, i.b)(e, r.ez[t])
            }
        },
        49268: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return o
                }
            });
            var r = n(90408),
                i = n(42921);

            function o(e, t = "wei") {
                return (0, i.b)(e, r.Zn[t])
            }
        },
        42921: function(e, t, n) {
            "use strict";

            function r(e, t) {
                let n = e.toString(),
                    r = n.startsWith("-");
                r && (n = n.slice(1));
                let [i, o] = [(n = n.padStart(t, "0")).slice(0, n.length - t), n.slice(n.length - t)];
                return o = o.replace(/(0+)$/, ""), `${r?"-":""}${i||"0"}${o?`.${o}`:""}`
            }
            n.d(t, {
                b: function() {
                    return r
                }
            })
        },
        97317: function(e, t, n) {
            "use strict";
            async function r(e) {
                return new Promise(t => setTimeout(t, e))
            }
            n.d(t, {
                D: function() {
                    return r
                }
            })
        },
        40181: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return a
                },
                F: function() {
                    return c
                }
            });
            var r = n(2265);
            let i = !1;
            async function o(e, t = {}) {
                let n;
                if (i) return [];
                i = !0, e.setState(e => ({ ...e,
                    status: e.current ? "reconnecting" : "connecting"
                }));
                let r = [];
                if (t.connectors ? .length)
                    for (let n of t.connectors) {
                        let t;
                        t = "function" == typeof n ? e._internal.connectors.setup(n) : n, r.push(t)
                    } else r.push(...e.connectors);
                try {
                    n = await e.storage ? .getItem("recentConnectorId")
                } catch {}
                let o = {};
                for (let [, t] of e.state.connections) o[t.connector.id] = 1;
                n && (o[n] = 0);
                let s = Object.keys(o).length > 0 ? [...r].sort((e, t) => (o[e.id] ? ? 10) - (o[t.id] ? ? 10)) : r,
                    a = !1,
                    c = [],
                    u = [];
                for (let t of s) {
                    let n = await t.getProvider().catch(() => void 0);
                    if (!n || u.some(e => e === n) || !await t.isAuthorized()) continue;
                    let r = await t.connect({
                        isReconnecting: !0
                    }).catch(() => null);
                    r && (t.emitter.off("connect", e._internal.events.connect), t.emitter.on("change", e._internal.events.change), t.emitter.on("disconnect", e._internal.events.disconnect), e.setState(e => {
                        let n = new Map(a ? e.connections : new Map).set(t.uid, {
                            accounts: r.accounts,
                            chainId: r.chainId,
                            connector: t
                        });
                        return { ...e,
                            current: a ? e.current : t.uid,
                            connections: n
                        }
                    }), c.push({
                        accounts: r.accounts,
                        chainId: r.chainId,
                        connector: t
                    }), u.push(n), a = !0)
                }
                return ("reconnecting" === e.state.status || "connecting" === e.state.status) && (a ? e.setState(e => ({ ...e,
                    status: "connected"
                })) : e.setState(e => ({ ...e,
                    connections: new Map,
                    current: null,
                    status: "disconnected"
                }))), i = !1, c
            }

            function s(e) {
                let {
                    children: t,
                    config: n,
                    initialState: i,
                    reconnectOnMount: s = !0
                } = e, {
                    onMount: a
                } = function(e, t) {
                    let {
                        initialState: n,
                        reconnectOnMount: r
                    } = t;
                    return n && !e._internal.store.persist.hasHydrated() && e.setState({ ...n,
                        chainId: e.chains.some(e => e.id === n.chainId) ? n.chainId : e.chains[0].id,
                        connections: r ? n.connections : new Map,
                        status: r ? "reconnecting" : "disconnected"
                    }), {
                        async onMount() {
                            if (e._internal.ssr) {
                                await e._internal.store.persist.rehydrate();
                                let t = e._internal.mipd ? .getProviders().map(e._internal.connectors.providerDetailToConnector).map(e._internal.connectors.setup);
                                e._internal.connectors.setState(e => [...e, ...t ? ? []])
                            }
                            r ? o(e) : e.storage && e.setState(e => ({ ...e,
                                connections: new Map
                            }))
                        }
                    }
                }(n, {
                    initialState: i,
                    reconnectOnMount: s
                });
                n._internal.ssr || a();
                let c = (0, r.useRef)(!0);
                return (0, r.useEffect)(() => {
                    if (c.current && n._internal.ssr) return a(), () => {
                        c.current = !1
                    }
                }, []), t
            }
            let a = (0, r.createContext)(void 0);

            function c(e) {
                let {
                    children: t,
                    config: n
                } = e;
                return (0, r.createElement)(s, e, (0, r.createElement)(a.Provider, {
                    value: n
                }, t))
            }
        },
        26735: function(e, t, n) {
            "use strict";
            n.d(t, {
                m: function() {
                    return l
                }
            });
            var r = n(30807),
                i = n(79886),
                o = n(94956),
                s = n(90331),
                a = n(2265),
                c = n(35006);
            let u = e => "object" == typeof e && !Array.isArray(e);

            function l() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = (0, o.Z)(e);
                return function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.v,
                        i = (0, a.useRef)([]),
                        o = (0, c.useSyncExternalStoreWithSelector)(e, t, n, e => e, (e, t) => {
                            if (u(e) && u(t) && i.current.length) {
                                for (let n of i.current)
                                    if (!r(e[n], t[n])) return !1;
                                return !0
                            }
                            return r(e, t)
                        });
                    if (u(o)) {
                        let e = { ...o
                            },
                            t = {};
                        for (let [n, r] of Object.entries(e)) t = { ...t,
                            [n]: {
                                configurable: !1,
                                enumerable: !0,
                                get: () => (i.current.includes(n) || i.current.push(n), r)
                            }
                        };
                        return Object.defineProperties(e, t), e
                    }
                    return o
                }(e => (0, r.u)(t, {
                    onChange: e
                }), () => (0, i.D)(t))
            }
        },
        59440: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return s
                }
            });
            var r = n(30807),
                i = n(2265),
                o = n(94956);

            function s() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        onConnect: t,
                        onDisconnect: n
                    } = e,
                    s = (0, o.Z)(e);
                (0, i.useEffect)(() => (0, r.u)(s, {
                    onChange(e, r) {
                        if (("reconnecting" === r.status || "connecting" === r.status && void 0 === r.address) && "connected" === e.status) {
                            let {
                                address: n,
                                addresses: i,
                                chain: o,
                                chainId: s,
                                connector: a
                            } = e, c = "reconnecting" === r.status || void 0 === r.status;
                            null == t || t({
                                address: n,
                                addresses: i,
                                chain: o,
                                chainId: s,
                                connector: a,
                                isReconnected: c
                            })
                        } else "connected" === r.status && "disconnected" === e.status && (null == n || n())
                    }
                }), [s, t, n])
            }
        },
        70141: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return b
                }
            });
            var r = n(58591),
                i = n(21019),
                o = n(77955),
                s = n(42921),
                a = n(5106),
                c = n(61954),
                u = n(90408);

            function l(e) {
                return "number" == typeof e ? e : "wei" === e ? 0 : Math.abs(u.Bd[e])
            }
            var d = n(10878);
            async function f(e, t) {
                let {
                    address: n,
                    blockNumber: u,
                    blockTag: d,
                    chainId: f,
                    token: p,
                    unit: m = "ether"
                } = t;
                if (p) try {
                    return h(e, {
                        balanceAddress: n,
                        chainId: f,
                        symbolType: "string",
                        tokenAddress: p
                    })
                } catch (t) {
                    if (t instanceof r.uq) {
                        let t = await h(e, {
                                balanceAddress: n,
                                chainId: f,
                                symbolType: "bytes32",
                                tokenAddress: p
                            }),
                            r = (0, i.rR)((0, o.f)(t.symbol, {
                                dir: "right"
                            }));
                        return { ...t,
                            symbol: r
                        }
                    }
                    throw t
                }
                let g = e.getClient({
                        chainId: f
                    }),
                    y = (0, c.s)(g, a.s, "getBalance"),
                    b = await y(u ? {
                        address: n,
                        blockNumber: u
                    } : {
                        address: n,
                        blockTag: d
                    }),
                    w = e.chains.find(e => e.id === f) ? ? g.chain;
                return {
                    decimals: w.nativeCurrency.decimals,
                    formatted: (0, s.b)(b, l(m)),
                    symbol: w.nativeCurrency.symbol,
                    value: b
                }
            }
            async function h(e, t) {
                let {
                    balanceAddress: n,
                    chainId: r,
                    symbolType: i,
                    tokenAddress: o,
                    unit: a
                } = t, c = {
                    abi: [{
                        type: "function",
                        name: "balanceOf",
                        stateMutability: "view",
                        inputs: [{
                            type: "address"
                        }],
                        outputs: [{
                            type: "uint256"
                        }]
                    }, {
                        type: "function",
                        name: "decimals",
                        stateMutability: "view",
                        inputs: [],
                        outputs: [{
                            type: "uint8"
                        }]
                    }, {
                        type: "function",
                        name: "symbol",
                        stateMutability: "view",
                        inputs: [],
                        outputs: [{
                            type: i
                        }]
                    }],
                    address: o
                }, [u, f, h] = await (0, d.J)(e, {
                    allowFailure: !1,
                    contracts: [{ ...c,
                        functionName: "balanceOf",
                        args: [n],
                        chainId: r
                    }, { ...c,
                        functionName: "decimals",
                        chainId: r
                    }, { ...c,
                        functionName: "symbol",
                        chainId: r
                    }]
                }), p = (0, s.b)(u ? ? "0", l(a ? ? f));
                return {
                    decimals: f,
                    formatted: p,
                    symbol: h,
                    value: u
                }
            }
            var p = n(34954),
                m = n(42086),
                g = n(98286),
                y = n(94956);

            function b() {
                var e, t;
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        address: r,
                        query: i = {}
                    } = n,
                    o = (0, y.Z)(n),
                    s = (0, g.x)({
                        config: o
                    }),
                    a = function(e, t = {}) {
                        return {
                            async queryFn({
                                queryKey: t
                            }) {
                                let {
                                    address: n,
                                    scopeKey: r,
                                    ...i
                                } = t[1];
                                if (!n) throw Error("address is required");
                                return await f(e, { ...i,
                                    address: n
                                }) ? ? null
                            },
                            queryKey: function(e = {}) {
                                return ["balance", (0, p.OP)(e)]
                            }(t)
                        }
                    }(o, { ...n,
                        chainId: null !== (e = n.chainId) && void 0 !== e ? e : s
                    }),
                    c = !!(r && (null === (t = i.enabled) || void 0 === t || t));
                return (0, m.aM)({ ...i,
                    ...a,
                    enabled: c
                })
            }
        },
        98286: function(e, t, n) {
            "use strict";

            function r(e) {
                return e.state.chainId
            }
            n.d(t, {
                x: function() {
                    return s
                }
            });
            var i = n(2265),
                o = n(94956);

            function s() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = (0, o.Z)(e);
                return (0, i.useSyncExternalStore)(e => (function(e, t) {
                    let {
                        onChange: n
                    } = t;
                    return e.subscribe(e => e.chainId, n)
                })(t, {
                    onChange: e
                }), () => r(t), () => r(t))
            }
        },
        94956: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var r = n(2265),
                i = n(40181),
                o = n(66564);
            let s = () => "wagmi@2.12.9";
            class a extends o.G {
                constructor() {
                    super(...arguments), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "WagmiError"
                    })
                }
                get docsBaseUrl() {
                    return "https://wagmi.sh/react"
                }
                get version() {
                    return s()
                }
            }
            class c extends a {
                constructor() {
                    super("`useConfig` must be used within `WagmiProvider`.", {
                        docsPath: "/api/WagmiProvider"
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "WagmiProviderNotFoundError"
                    })
                }
            }

            function u() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = null !== (e = t.config) && void 0 !== e ? e : (0, r.useContext)(i.V);
                if (!n) throw new c;
                return n
            }
        },
        24934: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return d
                }
            });
            var r = n(25524),
                i = n(85770);
            async function o(e, t) {
                let n;
                if ((n = "function" == typeof t.connector ? e._internal.connectors.setup(t.connector) : t.connector).uid === e.state.current) throw new i.wi;
                try {
                    e.setState(e => ({ ...e,
                        status: "connecting"
                    })), n.emitter.emit("message", {
                        type: "connecting"
                    });
                    let r = await n.connect({
                            chainId: t.chainId
                        }),
                        i = r.accounts;
                    return n.emitter.off("connect", e._internal.events.connect), n.emitter.on("change", e._internal.events.change), n.emitter.on("disconnect", e._internal.events.disconnect), await e.storage ? .setItem("recentConnectorId", n.id), e.setState(e => ({ ...e,
                        connections: new Map(e.connections).set(n.uid, {
                            accounts: i,
                            chainId: r.chainId,
                            connector: n
                        }),
                        current: n.uid,
                        status: "connected"
                    })), {
                        accounts: i,
                        chainId: r.chainId
                    }
                } catch (t) {
                    throw e.setState(e => ({ ...e,
                        status: e.current ? "connected" : "disconnected"
                    })), t
                }
            }
            var s = n(2265),
                a = n(94956),
                c = n(90331);
            let u = [];

            function l(e) {
                let t = e.connectors;
                return (0, c.v)(u, t) ? u : (u = t, t)
            }

            function d() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        mutation: t
                    } = e,
                    n = (0, a.Z)(e),
                    {
                        mutate: i,
                        mutateAsync: c,
                        ...u
                    } = (0, r.D)({ ...t,
                        mutationFn: e => o(n, e),
                        mutationKey: ["connect"]
                    });
                return (0, s.useEffect)(() => n.subscribe(e => {
                    let {
                        status: t
                    } = e;
                    return t
                }, (e, t) => {
                    "connected" === t && "disconnected" === e && u.reset()
                }), [n, u.reset]), { ...u,
                    connect: i,
                    connectAsync: c,
                    connectors: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = (0, a.Z)(e);
                        return (0, s.useSyncExternalStore)(e => (function(e, t) {
                            let {
                                onChange: n
                            } = t;
                            return e._internal.connectors.subscribe((e, t) => {
                                n(Object.values(e), t)
                            })
                        })(t, {
                            onChange: e
                        }), () => l(t), () => l(t))
                    }({
                        config: n
                    })
                }
            }
        },
        74703: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return l
                }
            });
            var r = n(25524);
            async function i(e, t = {}) {
                let n;
                if (t.connector) n = t.connector;
                else {
                    let {
                        connections: t,
                        current: r
                    } = e.state, i = t.get(r);
                    n = i ? .connector
                }
                let r = e.state.connections;
                n && (await n.disconnect(), n.emitter.off("change", e._internal.events.change), n.emitter.off("disconnect", e._internal.events.disconnect), n.emitter.on("connect", e._internal.events.connect), r.delete(n.uid)), e.setState(e => {
                    if (0 === r.size) return { ...e,
                        connections: new Map,
                        current: null,
                        status: "disconnected"
                    };
                    let t = r.values().next().value;
                    return { ...e,
                        connections: new Map(r),
                        current: t.connector.uid
                    }
                }); {
                    let t = e.state.current;
                    if (!t) return;
                    let n = e.state.connections.get(t) ? .connector;
                    if (!n) return;
                    await e.storage ? .setItem("recentConnectorId", n.id)
                }
            }
            var o = n(94956),
                s = n(90331);
            let a = [];

            function c(e) {
                let t = [...e.state.connections.values()];
                return "reconnecting" === e.state.status || (0, s.v)(a, t) ? a : (a = t, t)
            }
            var u = n(2265);

            function l() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        mutation: t
                    } = e,
                    n = (0, o.Z)(e),
                    {
                        mutate: a,
                        mutateAsync: l,
                        ...d
                    } = (0, r.D)({ ...t,
                        mutationFn: e => i(n, e),
                        mutationKey: ["disconnect"]
                    });
                return { ...d,
                    connectors: (function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = (0, o.Z)(e);
                        return (0, u.useSyncExternalStore)(e => (function(e, t) {
                            let {
                                onChange: n
                            } = t;
                            return e.subscribe(() => c(e), n, {
                                equalityFn: s.v
                            })
                        })(t, {
                            onChange: e
                        }), () => c(t), () => c(t))
                    })({
                        config: n
                    }).map(e => e.connector),
                    disconnect: a,
                    disconnectAsync: l
                }
            }
        },
        60208: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return u
                }
            });
            var r = n(48061),
                i = n(61954),
                o = n(34954),
                s = n(42086),
                a = n(98286),
                c = n(94956);

            function u() {
                var e, t;
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        name: u,
                        query: l = {}
                    } = n,
                    d = (0, c.Z)(n),
                    f = (0, a.x)({
                        config: d
                    }),
                    h = function(e, t = {}) {
                        return {
                            async queryFn({
                                queryKey: t
                            }) {
                                let {
                                    name: n,
                                    scopeKey: o,
                                    ...s
                                } = t[1];
                                if (!n) throw Error("name is required");
                                return function(e, t) {
                                    let {
                                        chainId: n,
                                        ...o
                                    } = t, s = e.getClient({
                                        chainId: n
                                    });
                                    return (0, i.s)(s, r.r, "getEnsAvatar")(o)
                                }(e, { ...s,
                                    name: n
                                })
                            },
                            queryKey: function(e = {}) {
                                return ["ensAvatar", (0, o.OP)(e)]
                            }(t)
                        }
                    }(d, { ...n,
                        chainId: null !== (e = n.chainId) && void 0 !== e ? e : f
                    }),
                    p = !!(u && (null === (t = l.enabled) || void 0 === t || t));
                return (0, s.aM)({ ...l,
                    ...h,
                    enabled: p
                })
            }
        },
        54713: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return u
                }
            });
            var r = n(48729),
                i = n(61954),
                o = n(34954),
                s = n(42086),
                a = n(98286),
                c = n(94956);

            function u() {
                var e, t;
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        address: u,
                        query: l = {}
                    } = n,
                    d = (0, c.Z)(n),
                    f = (0, a.x)({
                        config: d
                    }),
                    h = function(e, t = {}) {
                        return {
                            async queryFn({
                                queryKey: t
                            }) {
                                let {
                                    address: n,
                                    scopeKey: o,
                                    ...s
                                } = t[1];
                                if (!n) throw Error("address is required");
                                return function(e, t) {
                                    let {
                                        chainId: n,
                                        ...o
                                    } = t, s = e.getClient({
                                        chainId: n
                                    });
                                    return (0, i.s)(s, r.w, "getEnsName")(o)
                                }(e, { ...s,
                                    address: n
                                })
                            },
                            queryKey: function(e = {}) {
                                return ["ensName", (0, o.OP)(e)]
                            }(t)
                        }
                    }(d, { ...n,
                        chainId: null !== (e = n.chainId) && void 0 !== e ? e : f
                    }),
                    p = !!(u && (null === (t = l.enabled) || void 0 === t || t));
                return (0, s.aM)({ ...l,
                    ...h,
                    enabled: p
                })
            }
        },
        49619: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return e3
                }
            });
            var r = n(21620),
                i = n(97225),
                o = n(31006),
                s = n(18543),
                a = n(77955),
                c = n(95046),
                u = n(25652),
                l = n(82978),
                d = n(68890),
                f = n(93413),
                h = n(3796);
            async function p(e, {
                blockNumber: t,
                blockTag: n,
                coinType: p,
                name: m,
                gatewayUrls: g,
                strict: y,
                universalResolverAddress: b
            }) {
                let w = b;
                if (!w) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    w = (0, s.L)({
                        blockNumber: t,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                try {
                    let s = (0, o.R)({
                            abi: r.X$,
                            functionName: "addr",
                            ...null != p ? {
                                args: [(0, l.V)(m), BigInt(p)]
                            } : {
                                args: [(0, l.V)(m)]
                            }
                        }),
                        u = {
                            address: w,
                            abi: r.k3,
                            functionName: "resolve",
                            args: [(0, c.NC)((0, d.T)(m)), s],
                            blockNumber: t,
                            blockTag: n
                        },
                        y = (0, f.s)(e, h.L, "readContract"),
                        b = g ? await y({ ...u,
                            args: [...u.args, g]
                        }) : await y(u);
                    if ("0x" === b[0]) return null;
                    let v = (0, i.k)({
                        abi: r.X$,
                        args: null != p ? [(0, l.V)(m), BigInt(p)] : void 0,
                        functionName: "addr",
                        data: b[0]
                    });
                    if ("0x" === v || "0x00" === (0, a.f)(v)) return null;
                    return v
                } catch (e) {
                    if (y) throw e;
                    if ((0, u.c)(e, "resolve")) return null;
                    throw e
                }
            }
            var m = n(48061),
                g = n(48729);
            async function y(e, {
                blockNumber: t,
                blockTag: n,
                name: r,
                universalResolverAddress: i
            }) {
                let o = i;
                if (!o) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    o = (0, s.L)({
                        blockNumber: t,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                let [a] = await (0, f.s)(e, h.L, "readContract")({
                    address: o,
                    abi: [{
                        inputs: [{
                            type: "bytes"
                        }],
                        name: "findResolver",
                        outputs: [{
                            type: "address"
                        }, {
                            type: "bytes32"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }],
                    functionName: "findResolver",
                    args: [(0, c.NC)((0, d.T)(r))],
                    blockNumber: t,
                    blockTag: n
                });
                return a
            }
            var b = n(133),
                w = n(12994);

            function v(e, {
                method: t
            }) {
                let n = {};
                return "fallback" === e.transport.type && e.transport.onResponse ? .(({
                    method: e,
                    response: r,
                    status: i,
                    transport: o
                }) => {
                    "success" === i && t === e && (n[r] = o.request)
                }), t => n[t] || e.request
            }
            async function A(e) {
                let t = v(e, {
                        method: "eth_newBlockFilter"
                    }),
                    n = await e.request({
                        method: "eth_newBlockFilter"
                    });
                return {
                    id: n,
                    request: t(n),
                    type: "block"
                }
            }
            var C = n(52186),
                E = n(6649);
            class x extends E.G {
                constructor(e) {
                    super(`Filter type "${e}" is not supported.`, {
                        name: "FilterTypeNotSupportedError"
                    })
                }
            }
            var I = n(82361),
                B = n(36494),
                k = n(53263),
                P = n(39480),
                M = n(20101),
                O = n(18748);
            let S = "/docs/contract/encodeEventTopics";

            function R(e) {
                let {
                    abi: t,
                    eventName: n,
                    args: r
                } = e, i = t[0];
                if (n) {
                    let e = (0, O.mE)({
                        abi: t,
                        name: n
                    });
                    if (!e) throw new C.mv(n, {
                        docsPath: S
                    });
                    i = e
                }
                if ("event" !== i.type) throw new C.mv(void 0, {
                    docsPath: S
                });
                let o = (0, M.t)(i),
                    s = (0, k.n)(o),
                    a = [];
                if (r && "inputs" in i) {
                    let e = i.inputs ? .filter(e => "indexed" in e && e.indexed),
                        t = Array.isArray(r) ? r : Object.values(r).length > 0 ? e ? .map(e => r[e.name]) ? ? [] : [];
                    t.length > 0 && (a = e ? .map((e, n) => Array.isArray(t[n]) ? t[n].map((r, i) => T({
                        param: e,
                        value: t[n][i]
                    })) : t[n] ? T({
                        param: e,
                        value: t[n]
                    }) : null) ? ? [])
                }
                return [s, ...a]
            }

            function T({
                param: e,
                value: t
            }) {
                if ("string" === e.type || "bytes" === e.type) return (0, B.w)((0, I.O0)(t));
                if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/)) throw new x(e.type);
                return (0, P.E)([e], [t])
            }
            async function N(e, t) {
                let {
                    address: n,
                    abi: r,
                    args: i,
                    eventName: o,
                    fromBlock: s,
                    strict: a,
                    toBlock: u
                } = t, l = v(e, {
                    method: "eth_newFilter"
                }), d = o ? R({
                    abi: r,
                    args: i,
                    eventName: o
                }) : void 0, f = await e.request({
                    method: "eth_newFilter",
                    params: [{
                        address: n,
                        fromBlock: "bigint" == typeof s ? (0, c.eC)(s) : s,
                        toBlock: "bigint" == typeof u ? (0, c.eC)(u) : u,
                        topics: d
                    }]
                });
                return {
                    abi: r,
                    args: i,
                    eventName: o,
                    id: f,
                    request: l(f),
                    strict: !!a,
                    type: "event"
                }
            }
            async function F(e, {
                address: t,
                args: n,
                event: r,
                events: i,
                fromBlock: o,
                strict: s,
                toBlock: a
            } = {}) {
                let u = i ? ? (r ? [r] : void 0),
                    l = v(e, {
                        method: "eth_newFilter"
                    }),
                    d = [];
                u && (d = [u.flatMap(e => R({
                    abi: [e],
                    eventName: e.name,
                    args: n
                }))], r && (d = d[0]));
                let f = await e.request({
                    method: "eth_newFilter",
                    params: [{
                        address: t,
                        fromBlock: "bigint" == typeof o ? (0, c.eC)(o) : o,
                        toBlock: "bigint" == typeof a ? (0, c.eC)(a) : a,
                        ...d.length ? {
                            topics: d
                        } : {}
                    }]
                });
                return {
                    abi: u,
                    args: n,
                    eventName: r ? r.name : void 0,
                    fromBlock: o,
                    id: f,
                    request: l(f),
                    strict: !!s,
                    toBlock: a,
                    type: "event"
                }
            }
            async function D(e) {
                let t = v(e, {
                        method: "eth_newPendingTransactionFilter"
                    }),
                    n = await e.request({
                        method: "eth_newPendingTransactionFilter"
                    });
                return {
                    id: n,
                    request: t(n),
                    type: "transaction"
                }
            }
            var U = n(96104),
                L = n(92915),
                q = n(60730);
            async function Q(e, t) {
                let {
                    abi: n,
                    address: r,
                    args: i,
                    functionName: s,
                    ...a
                } = t, c = (0, o.R)({
                    abi: n,
                    args: i,
                    functionName: s
                });
                try {
                    return await (0, f.s)(e, q.Q, "estimateGas")({
                        data: c,
                        to: r,
                        ...a
                    })
                } catch (t) {
                    let e = a.account ? (0, U.T)(a.account) : void 0;
                    throw (0, L.S)(t, {
                        abi: n,
                        address: r,
                        args: i,
                        docsPath: "/docs/contract/estimateContractGas",
                        functionName: s,
                        sender: e ? .address
                    })
                }
            }
            var j = n(42665),
                G = n(72127),
                z = n(5106);
            async function W(e) {
                return BigInt(await e.request({
                    method: "eth_blobBaseFee"
                }))
            }
            var _ = n(49235),
                H = n(75304),
                K = n(21019);
            async function V(e, {
                blockHash: t,
                blockNumber: n,
                blockTag: r = "latest"
            } = {}) {
                let i;
                let o = void 0 !== n ? (0, c.eC)(n) : void 0;
                return i = t ? await e.request({
                    method: "eth_getBlockTransactionCountByHash",
                    params: [t]
                }, {
                    dedupe: !0
                }) : await e.request({
                    method: "eth_getBlockTransactionCountByNumber",
                    params: [o || r]
                }, {
                    dedupe: !!o
                }), (0, K.ly)(i)
            }
            var Z = n(16416);
            async function J(e, {
                address: t,
                blockNumber: n,
                blockTag: r = "latest"
            }) {
                let i = void 0 !== n ? (0, c.eC)(n) : void 0,
                    o = await e.request({
                        method: "eth_getCode",
                        params: [t, i || r]
                    }, {
                        dedupe: !!i
                    });
                if ("0x" !== o) return o
            }
            var $ = n(65937),
                Y = n(7508),
                X = n(19477),
                ee = n(52998);
            let et = "/docs/contract/decodeEventLog";

            function en(e) {
                let {
                    abi: t,
                    data: n,
                    strict: r,
                    topics: i
                } = e, o = r ? ? !0, [s, ...a] = i;
                if (!s) throw new C.FM({
                    docsPath: et
                });
                let c = t.find(e => "event" === e.type && s === (0, k.n)((0, M.t)(e)));
                if (!(c && "name" in c) || "event" !== c.type) throw new C.lC(s, {
                    docsPath: et
                });
                let {
                    name: u,
                    inputs: l
                } = c, d = l ? .some(e => !("name" in e && e.name)), f = d ? [] : {}, h = l.filter(e => "indexed" in e && e.indexed);
                for (let e = 0; e < h.length; e++) {
                    let t = h[e],
                        n = a[e];
                    if (!n) throw new C.Gy({
                        abiItem: c,
                        param: t
                    });
                    f[d ? e : t.name || e] = function({
                        param: e,
                        value: t
                    }) {
                        return "string" === e.type || "bytes" === e.type || "tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/) ? t : ((0, ee.r)([e], t) || [])[0]
                    }({
                        param: t,
                        value: n
                    })
                }
                let p = l.filter(e => !("indexed" in e && e.indexed));
                if (p.length > 0) {
                    if (n && "0x" !== n) try {
                        let e = (0, ee.r)(p, n);
                        if (e) {
                            if (d) f = [...f, ...e];
                            else
                                for (let t = 0; t < p.length; t++) f[p[t].name] = e[t]
                        }
                    } catch (e) {
                        if (o) {
                            if (e instanceof C.xB || e instanceof X.lQ) throw new C.SM({
                                abiItem: c,
                                data: n,
                                params: p,
                                size: (0, Y.d)(n)
                            });
                            throw e
                        }
                    } else if (o) throw new C.SM({
                        abiItem: c,
                        data: "0x",
                        params: p,
                        size: 0
                    })
                }
                return {
                    eventName: u,
                    args: Object.values(f).length > 0 ? f : void 0
                }
            }

            function er(e) {
                let {
                    abi: t,
                    args: n,
                    logs: r,
                    strict: i = !0
                } = e, o = (() => {
                    if (e.eventName) return Array.isArray(e.eventName) ? e.eventName : [e.eventName]
                })();
                return r.map(e => {
                    try {
                        let r = (0, O.mE)({
                            abi: t,
                            name: e.topics[0]
                        });
                        if (!r) return null;
                        let s = en({ ...e,
                            abi: [r],
                            strict: i
                        });
                        if (o && !o.includes(s.eventName) || ! function(e) {
                                let {
                                    args: t,
                                    inputs: n,
                                    matchArgs: r
                                } = e;
                                if (!r) return !0;
                                if (!t) return !1;

                                function i(e, t, n) {
                                    try {
                                        if ("address" === e.type) return (0, $.E)(t, n);
                                        if ("string" === e.type || "bytes" === e.type) return (0, B.w)((0, I.O0)(t)) === n;
                                        return t === n
                                    } catch {
                                        return !1
                                    }
                                }
                                return Array.isArray(t) && Array.isArray(r) ? r.every((e, r) => {
                                    if (!e) return !0;
                                    let o = n[r];
                                    return !!o && (Array.isArray(e) ? e : [e]).some(e => i(o, e, t[r]))
                                }) : !("object" != typeof t || Array.isArray(t) || "object" != typeof r || Array.isArray(r)) && Object.entries(r).every(([e, r]) => {
                                    if (!r) return !0;
                                    let o = n.find(t => t.name === e);
                                    return !!o && (Array.isArray(r) ? r : [r]).some(n => i(o, n, t[e]))
                                })
                            }({
                                args: s.args,
                                inputs: r.inputs,
                                matchArgs: n
                            })) return null;
                        return { ...s,
                            ...e
                        }
                    } catch (r) {
                        let t, n;
                        if (r instanceof C.lC) return null;
                        if (r instanceof C.SM || r instanceof C.Gy) {
                            if (i) return null;
                            t = r.abiItem.name, n = r.abiItem.inputs ? .some(e => !("name" in e && e.name))
                        }
                        return { ...e,
                            args: n ? [] : {},
                            eventName: t
                        }
                    }
                }).filter(Boolean)
            }
            var ei = n(21677);
            async function eo(e, {
                address: t,
                blockHash: n,
                fromBlock: r,
                toBlock: i,
                event: o,
                events: s,
                args: a,
                strict: u
            } = {}) {
                let l = s ? ? (o ? [o] : void 0),
                    d = [];
                l && (d = [l.flatMap(e => R({
                    abi: [e],
                    eventName: e.name,
                    args: s ? void 0 : a
                }))], o && (d = d[0]));
                let f = (n ? await e.request({
                    method: "eth_getLogs",
                    params: [{
                        address: t,
                        topics: d,
                        blockHash: n
                    }]
                }) : await e.request({
                    method: "eth_getLogs",
                    params: [{
                        address: t,
                        topics: d,
                        fromBlock: "bigint" == typeof r ? (0, c.eC)(r) : r,
                        toBlock: "bigint" == typeof i ? (0, c.eC)(i) : i
                    }]
                })).map(e => (0, ei.U)(e));
                return l ? er({
                    abi: l,
                    args: a,
                    logs: f,
                    strict: u ? ? !1
                }) : f
            }
            async function es(e, t) {
                let {
                    abi: n,
                    address: r,
                    args: i,
                    blockHash: o,
                    eventName: s,
                    fromBlock: a,
                    toBlock: c,
                    strict: u
                } = t, l = s ? (0, O.mE)({
                    abi: n,
                    name: s
                }) : void 0, d = l ? void 0 : n.filter(e => "event" === e.type);
                return (0, f.s)(e, eo, "getLogs")({
                    address: r,
                    args: i,
                    blockHash: o,
                    event: l,
                    events: d,
                    fromBlock: a,
                    toBlock: c,
                    strict: u
                })
            }
            class ea extends E.G {
                constructor({
                    address: e
                }) {
                    super(`No EIP-712 domain found on contract "${e}".`, {
                        metaMessages: ["Ensure that:", `- The contract is deployed at the address "${e}".`, "- `eip712Domain()` function exists on the contract.", "- `eip712Domain()` function matches signature to ERC-5267 specification."],
                        name: "Eip712DomainNotFoundError"
                    })
                }
            }
            async function ec(e, t) {
                let {
                    address: n,
                    factory: r,
                    factoryData: i
                } = t;
                try {
                    let [t, o, s, a, c, u, l] = await (0, f.s)(e, h.L, "readContract")({
                        abi: eu,
                        address: n,
                        functionName: "eip712Domain",
                        factory: r,
                        factoryData: i
                    });
                    return {
                        domain: {
                            name: o,
                            version: s,
                            chainId: Number(a),
                            verifyingContract: c,
                            salt: u
                        },
                        extensions: l,
                        fields: t
                    }
                } catch (e) {
                    if ("ContractFunctionExecutionError" === e.name && "ContractFunctionZeroDataError" === e.cause.name) throw new ea({
                        address: n
                    });
                    throw e
                }
            }
            let eu = [{
                inputs: [],
                name: "eip712Domain",
                outputs: [{
                    name: "fields",
                    type: "bytes1"
                }, {
                    name: "name",
                    type: "string"
                }, {
                    name: "version",
                    type: "string"
                }, {
                    name: "chainId",
                    type: "uint256"
                }, {
                    name: "verifyingContract",
                    type: "address"
                }, {
                    name: "salt",
                    type: "bytes32"
                }, {
                    name: "extensions",
                    type: "uint256[]"
                }],
                stateMutability: "view",
                type: "function"
            }];
            async function el(e, {
                blockCount: t,
                blockNumber: n,
                blockTag: r = "latest",
                rewardPercentiles: i
            }) {
                var o;
                let s = n ? (0, c.eC)(n) : void 0;
                return {
                    baseFeePerGas: (o = await e.request({
                        method: "eth_feeHistory",
                        params: [(0, c.eC)(t), s || r, i]
                    }, {
                        dedupe: !!s
                    })).baseFeePerGas.map(e => BigInt(e)),
                    gasUsedRatio: o.gasUsedRatio,
                    oldestBlock: BigInt(o.oldestBlock),
                    reward: o.reward ? .map(e => e.map(e => BigInt(e)))
                }
            }
            async function ed(e, {
                filter: t
            }) {
                let n = "strict" in t && t.strict,
                    r = await t.request({
                        method: "eth_getFilterChanges",
                        params: [t.id]
                    });
                if ("string" == typeof r[0]) return r;
                let i = r.map(e => (0, ei.U)(e));
                return "abi" in t && t.abi ? er({
                    abi: t.abi,
                    logs: i,
                    strict: n
                }) : i
            }
            async function ef(e, {
                filter: t
            }) {
                let n = t.strict ? ? !1,
                    r = (await t.request({
                        method: "eth_getFilterLogs",
                        params: [t.id]
                    })).map(e => (0, ei.U)(e));
                return t.abi ? er({
                    abi: t.abi,
                    logs: r,
                    strict: n
                }) : r
            }
            var eh = n(48206);
            async function ep(e, {
                address: t,
                blockNumber: n,
                blockTag: r,
                storageKeys: i
            }) {
                var o;
                let s = void 0 !== n ? (0, c.eC)(n) : void 0;
                return { ...o = await e.request({
                        method: "eth_getProof",
                        params: [t, i, s || (r ? ? "latest")]
                    }),
                    balance: o.balance ? BigInt(o.balance) : void 0,
                    nonce: o.nonce ? (0, K.ly)(o.nonce) : void 0,
                    storageProof: o.storageProof ? o.storageProof.map(e => ({ ...e,
                        value: BigInt(e.value)
                    })) : void 0
                }
            }
            async function em(e, {
                address: t,
                blockNumber: n,
                blockTag: r = "latest",
                slot: i
            }) {
                let o = void 0 !== n ? (0, c.eC)(n) : void 0;
                return await e.request({
                    method: "eth_getStorageAt",
                    params: [t, i, o || r]
                })
            }
            var eg = n(85753);
            async function ey(e, {
                hash: t,
                transactionReceipt: n
            }) {
                let [r, i] = await Promise.all([(0, f.s)(e, H.z, "getBlockNumber")({}), t ? (0, f.s)(e, eg.f, "getTransaction")({
                    hash: t
                }) : void 0]), o = n ? .blockNumber || i ? .blockNumber;
                return o ? r - o + 1 n : 0 n
            }
            var eb = n(33208),
                ew = n(93672),
                ev = n(6577),
                eA = n(9660);
            async function eC(e, {
                filter: t
            }) {
                return t.request({
                    method: "eth_uninstallFilter",
                    params: [t.id]
                })
            }
            var eE = n(53932);

            function ex(e, t) {
                return (0, B.w)(function(e) {
                    let t = "string" == typeof e ? (0, c.$G)(e) : "string" == typeof e.raw ? e.raw : (0, c.ci)(e.raw),
                        n = (0, c.$G)(`\x19Ethereum Signed Message:
${(0,Y.d)(t)}`);
                    return (0, eE.zo)([n, t])
                }(e), t)
            }
            var eI = n(13955),
                eB = n(58591),
                ek = n(32637),
                eP = n(99112),
                eM = n(91678),
                eO = n(40369);
            let eS = "0x6492649264926492649264926492649264926492649264926492649264926492";
            var eR = n(49014),
                eT = n(97261),
                eN = n(26335);
            async function eF(e, t) {
                let {
                    address: n,
                    factory: i,
                    factoryData: o,
                    hash: s,
                    signature: a,
                    ...u
                } = t, l = (0, eO.v)(a) ? a : "object" == typeof a && "r" in a && "s" in a ? function({
                    r: e,
                    s: t,
                    to: n = "hex",
                    v: r,
                    yParity: i
                }) {
                    let o = (() => {
                            if (0 === i || 1 === i) return i;
                            if (r && (27 n === r || 28 n === r || r >= 35 n)) return r % 2 n === 0 n ? 1 : 0;
                            throw Error("Invalid `v` or `yParity` value")
                        })(),
                        s = `0x${new eN.secp256k1.Signature((0,K.y_)(e),(0,K.y_)(t)).toCompactHex()}${0===o?"1b":"1c"}`;
                    return "hex" === n ? s : (0, I.nr)(s)
                }(a) : (0, c.ci)(a), d = await (async () => i || o ? (0, eR.p5)(l, -32) === eS ? l : function(e) {
                    let {
                        address: t,
                        data: n,
                        signature: r,
                        to: i = "hex"
                    } = e, o = (0, eE.SM)([(0, P.E)([{
                        type: "address"
                    }, {
                        type: "bytes"
                    }, {
                        type: "bytes"
                    }], [t, n, r]), eS]);
                    return "hex" === i ? o : (0, I.nr)(o)
                }({
                    address: i,
                    data: o,
                    signature: l
                }) : l)();
                try {
                    let {
                        data: t
                    } = await (0, f.s)(e, w.R, "call")({
                        data: (0, ek.w)({
                            abi: r.$o,
                            args: [n, s, d],
                            bytecode: eI.ST
                        }),
                        ...u
                    });
                    return function(e, t) {
                        let n = (0, eO.v)(e) ? (0, I.O0)(e) : e,
                            r = (0, eO.v)("0x1") ? (0, I.O0)("0x1") : "0x1";
                        return (0, eM.Wd)(n, r)
                    }(t ? ? "0x0", "0x1")
                } catch (e) {
                    try {
                        if ((0, $.E)((0, eP.K)(n), await (0, eT.R)({
                                hash: s,
                                signature: a
                            }))) return !0
                    } catch {}
                    if (e instanceof eB.cg) return !1;
                    throw e
                }
            }
            async function eD(e, {
                address: t,
                message: n,
                factory: r,
                factoryData: i,
                signature: o,
                ...s
            }) {
                return eF(e, {
                    address: t,
                    factory: r,
                    factoryData: i,
                    hash: ex(n),
                    signature: o,
                    ...s
                })
            }
            var eU = n(51359),
                eL = n(64113);
            let eq = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
                eQ = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;

            function ej({
                data: e,
                primaryType: t,
                types: n
            }) {
                let r = function e({
                    data: t,
                    primaryType: n,
                    types: r
                }) {
                    let i = [{
                            type: "bytes32"
                        }],
                        o = [function({
                            primaryType: e,
                            types: t
                        }) {
                            let n = (0, c.NC)(function({
                                primaryType: e,
                                types: t
                            }) {
                                let n = "",
                                    r = function e({
                                        primaryType: t,
                                        types: n
                                    }, r = new Set) {
                                        let i = t.match(/^\w*/u),
                                            o = i ? .[0];
                                        if (r.has(o) || void 0 === n[o]) return r;
                                        for (let t of (r.add(o), n[o])) e({
                                            primaryType: t.type,
                                            types: n
                                        }, r);
                                        return r
                                    }({
                                        primaryType: e,
                                        types: t
                                    });
                                for (let i of (r.delete(e), [e, ...Array.from(r).sort()])) n += `${i}(${t[i].map(({name:e,type:t})=>`
                                $ {
                                    t
                                }
                                $ {
                                    e
                                }
                                `).join(",")})`;
                                return n
                            }({
                                primaryType: e,
                                types: t
                            }));
                            return (0, B.w)(n)
                        }({
                            primaryType: n,
                            types: r
                        })];
                    for (let s of r[n]) {
                        let [n, a] = function t({
                            types: n,
                            name: r,
                            type: i,
                            value: o
                        }) {
                            if (void 0 !== n[i]) return [{
                                type: "bytes32"
                            }, (0, B.w)(e({
                                data: o,
                                primaryType: i,
                                types: n
                            }))];
                            if ("bytes" === i) {
                                let e = o.length % 2 ? "0" : "";
                                return o = `0x${e+o.slice(2)}`, [{
                                    type: "bytes32"
                                }, (0, B.w)(o)]
                            }
                            if ("string" === i) return [{
                                type: "bytes32"
                            }, (0, B.w)((0, c.NC)(o))];
                            if (i.lastIndexOf("]") === i.length - 1) {
                                let e = i.slice(0, i.lastIndexOf("[")),
                                    s = o.map(i => t({
                                        name: r,
                                        type: e,
                                        types: n,
                                        value: i
                                    }));
                                return [{
                                    type: "bytes32"
                                }, (0, B.w)((0, P.E)(s.map(([e]) => e), s.map(([, e]) => e)))]
                            }
                            return [{
                                type: i
                            }, o]
                        }({
                            types: r,
                            name: s.name,
                            type: s.type,
                            value: t[s.name]
                        });
                        i.push(n), o.push(a)
                    }
                    return (0, P.E)(i, o)
                }({
                    data: e,
                    primaryType: t,
                    types: n
                });
                return (0, B.w)(r)
            }
            async function eG(e, t) {
                let {
                    address: n,
                    factory: r,
                    factoryData: i,
                    signature: o,
                    message: s,
                    primaryType: a,
                    types: u,
                    domain: l,
                    ...d
                } = t;
                return eF(e, {
                    address: n,
                    factory: r,
                    factoryData: i,
                    hash: function(e) {
                        let {
                            domain: t = {},
                            message: n,
                            primaryType: r
                        } = e, i = {
                            EIP712Domain: function({
                                domain: e
                            }) {
                                return ["string" == typeof e ? .name && {
                                    name: "name",
                                    type: "string"
                                }, e ? .version && {
                                    name: "version",
                                    type: "string"
                                }, "number" == typeof e ? .chainId && {
                                    name: "chainId",
                                    type: "uint256"
                                }, e ? .verifyingContract && {
                                    name: "verifyingContract",
                                    type: "address"
                                }, e ? .salt && {
                                    name: "salt",
                                    type: "bytes32"
                                }].filter(Boolean)
                            }({
                                domain: t
                            }),
                            ...e.types
                        };
                        ! function(e) {
                            let {
                                domain: t,
                                message: n,
                                primaryType: r,
                                types: i
                            } = e, o = (e, t) => {
                                for (let n of e) {
                                    let {
                                        name: e,
                                        type: r
                                    } = n, s = t[e], a = r.match(eQ);
                                    if (a && ("number" == typeof s || "bigint" == typeof s)) {
                                        let [e, t, n] = a;
                                        (0, c.eC)(s, {
                                            signed: "int" === t,
                                            size: Number.parseInt(n) / 8
                                        })
                                    }
                                    if ("address" === r && "string" == typeof s && !(0, eL.U)(s)) throw new eU.b({
                                        address: s
                                    });
                                    let u = r.match(eq);
                                    if (u) {
                                        let [e, t] = u;
                                        if (t && (0, Y.d)(s) !== Number.parseInt(t)) throw new C.KY({
                                            expectedSize: Number.parseInt(t),
                                            givenSize: (0, Y.d)(s)
                                        })
                                    }
                                    let l = i[r];
                                    l && o(l, s)
                                }
                            };
                            i.EIP712Domain && t && o(i.EIP712Domain, t), "EIP712Domain" !== r && o(i[r], n)
                        }({
                            domain: t,
                            message: n,
                            primaryType: r,
                            types: i
                        });
                        let o = ["0x1901"];
                        return t && o.push(function({
                            domain: e,
                            types: t
                        }) {
                            return ej({
                                data: e,
                                primaryType: "EIP712Domain",
                                types: t
                            })
                        }({
                            domain: t,
                            types: i
                        })), "EIP712Domain" !== r && o.push(ej({
                            data: n,
                            primaryType: r,
                            types: i
                        })), (0, B.w)((0, eE.zo)(o))
                    }({
                        message: s,
                        primaryType: a,
                        types: u,
                        domain: l
                    }),
                    signature: o,
                    ...d
                })
            }
            var ez = n(95131),
                eW = n(38128),
                e_ = n(20621),
                eH = n(24606),
                eK = n(9338),
                eV = n(47499),
                eZ = n(96329);
            let eJ = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
                e$ = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
            async function eY(e, t) {
                let {
                    address: n,
                    domain: r,
                    message: i,
                    nonce: o,
                    scheme: s,
                    signature: a,
                    time: c = new Date,
                    ...u
                } = t, l = function(e) {
                    let {
                        scheme: t,
                        statement: n,
                        ...r
                    } = e.match(eJ) ? .groups ? ? {}, {
                        chainId: i,
                        expirationTime: o,
                        issuedAt: s,
                        notBefore: a,
                        requestId: c,
                        ...u
                    } = e.match(e$) ? .groups ? ? {}, l = e.split("Resources:")[1] ? .split("\n- ").slice(1);
                    return { ...r,
                        ...u,
                        ...i ? {
                            chainId: Number(i)
                        } : {},
                        ...o ? {
                            expirationTime: new Date(o)
                        } : {},
                        ...s ? {
                            issuedAt: new Date(s)
                        } : {},
                        ...a ? {
                            notBefore: new Date(a)
                        } : {},
                        ...c ? {
                            requestId: c
                        } : {},
                        ...l ? {
                            resources: l
                        } : {},
                        ...t ? {
                            scheme: t
                        } : {},
                        ...n ? {
                            statement: n
                        } : {}
                    }
                }(i);
                if (!l.address || ! function(e) {
                        let {
                            address: t,
                            domain: n,
                            message: r,
                            nonce: i,
                            scheme: o,
                            time: s = new Date
                        } = e;
                        if (n && r.domain !== n || i && r.nonce !== i || o && r.scheme !== o || r.expirationTime && s >= r.expirationTime || r.notBefore && s < r.notBefore) return !1;
                        try {
                            if (!r.address || t && !(0, $.E)(r.address, t)) return !1
                        } catch {
                            return !1
                        }
                        return !0
                    }({
                        address: n,
                        domain: r,
                        message: l,
                        nonce: o,
                        scheme: s,
                        time: c
                    })) return !1;
                let d = ex(i);
                return eF(e, {
                    address: l.address,
                    hash: d,
                    signature: a,
                    ...u
                })
            }
            var eX = n(12062),
                e0 = n(96432);

            function e1(e) {
                return {
                    call: t => (0, w.R)(e, t),
                    createBlockFilter: () => A(e),
                    createContractEventFilter: t => N(e, t),
                    createEventFilter: t => F(e, t),
                    createPendingTransactionFilter: () => D(e),
                    estimateContractGas: t => Q(e, t),
                    estimateGas: t => (0, q.Q)(e, t),
                    getBalance: t => (0, z.s)(e, t),
                    getBlobBaseFee: () => W(e),
                    getBlock: t => (0, _.Q)(e, t),
                    getBlockNumber: t => (0, H.z)(e, t),
                    getBlockTransactionCount: t => V(e, t),
                    getBytecode: t => J(e, t),
                    getChainId: () => (0, Z.L)(e),
                    getCode: t => J(e, t),
                    getContractEvents: t => es(e, t),
                    getEip712Domain: t => ec(e, t),
                    getEnsAddress: t => p(e, t),
                    getEnsAvatar: t => (0, m.r)(e, t),
                    getEnsName: t => (0, g.w)(e, t),
                    getEnsResolver: t => y(e, t),
                    getEnsText: t => (0, b.g)(e, t),
                    getFeeHistory: t => el(e, t),
                    estimateFeesPerGas: t => (0, j.X)(e, t),
                    getFilterChanges: t => ed(e, t),
                    getFilterLogs: t => ef(e, t),
                    getGasPrice: () => (0, eh.o)(e),
                    getLogs: t => eo(e, t),
                    getProof: t => ep(e, t),
                    estimateMaxPriorityFeePerGas: t => (0, G._)(e, t),
                    getStorageAt: t => em(e, t),
                    getTransaction: t => (0, eg.f)(e, t),
                    getTransactionConfirmations: t => ey(e, t),
                    getTransactionCount: t => (0, eb.K)(e, t),
                    getTransactionReceipt: t => (0, ew.a)(e, t),
                    multicall: t => (0, ev.A)(e, t),
                    prepareTransactionRequest: t => (0, eX.Z)(e, t),
                    readContract: t => (0, h.L)(e, t),
                    sendRawTransaction: t => (0, e0.p)(e, t),
                    simulateContract: t => (0, eA.a)(e, t),
                    verifyMessage: t => eD(e, t),
                    verifySiweMessage: t => eY(e, t),
                    verifyTypedData: t => eG(e, t),
                    uninstallFilter: t => eC(e, t),
                    waitForTransactionReceipt: t => (0, ez.e)(e, t),
                    watchBlocks: t => (function(e, {
                        blockTag: t = "latest",
                        emitMissed: n = !1,
                        emitOnBegin: r = !1,
                        onBlock: i,
                        onError: o,
                        includeTransactions: s,
                        poll: a,
                        pollingInterval: c = e.pollingInterval
                    }) {
                        let u, l, d;
                        let h = void 0 !== a ? a : "webSocket" !== e.transport.type && ("fallback" !== e.transport.type || "webSocket" !== e.transport.transports[0].config.type),
                            p = s ? ? !1;
                        return h ? (() => {
                            let s = (0, eV.P)(["watchBlocks", e.uid, t, n, r, p, c]);
                            return (0, eH.N7)(s, {
                                onBlock: i,
                                onError: o
                            }, i => (0, eK.$)(async () => {
                                try {
                                    let r = await (0, f.s)(e, _.Q, "getBlock")({
                                        blockTag: t,
                                        includeTransactions: p
                                    });
                                    if (r.number && u ? .number) {
                                        if (r.number === u.number) return;
                                        if (r.number - u.number > 1 && n)
                                            for (let t = u ? .number + 1 n; t < r.number; t++) {
                                                let n = await (0, f.s)(e, _.Q, "getBlock")({
                                                    blockNumber: t,
                                                    includeTransactions: p
                                                });
                                                i.onBlock(n, u), u = n
                                            }
                                    }(!u ? .number || "pending" === t && !r ? .number || r.number && r.number > u.number) && (i.onBlock(r, u), u = r)
                                } catch (e) {
                                    i.onError ? .(e)
                                }
                            }, {
                                emitOnBegin: r,
                                interval: c
                            }))
                        })() : (l = !0, d = () => l = !1, (async () => {
                            try {
                                let t = (() => {
                                        if ("fallback" === e.transport.type) {
                                            let t = e.transport.transports.find(e => "webSocket" === e.config.type);
                                            return t ? t.value : e.transport
                                        }
                                        return e.transport
                                    })(),
                                    {
                                        unsubscribe: n
                                    } = await t.subscribe({
                                        params: ["newHeads"],
                                        onData(t) {
                                            if (!l) return;
                                            let n = (e.chain ? .formatters ? .block ? .format || e_.Z)(t.result);
                                            i(n, u), u = n
                                        },
                                        onError(e) {
                                            o ? .(e)
                                        }
                                    });
                                d = n, l || d()
                            } catch (e) {
                                o ? .(e)
                            }
                        })(), () => d())
                    })(e, t),
                    watchBlockNumber: t => (0, eW.q)(e, t),
                    watchContractEvent: t => (function(e, t) {
                        let {
                            abi: n,
                            address: r,
                            args: i,
                            batch: o = !0,
                            eventName: s,
                            fromBlock: a,
                            onError: c,
                            onLogs: u,
                            poll: l,
                            pollingInterval: d = e.pollingInterval,
                            strict: h
                        } = t;
                        return (void 0 !== l ? l : "bigint" == typeof a || "webSocket" !== e.transport.type && ("fallback" !== e.transport.type || "webSocket" !== e.transport.transports[0].config.type)) ? (() => {
                            let t = h ? ? !1,
                                l = (0, eV.P)(["watchContractEvent", r, i, o, e.uid, s, d, t, a]);
                            return (0, eH.N7)(l, {
                                onLogs: u,
                                onError: c
                            }, c => {
                                let u, l;
                                void 0 !== a && (u = a - 1 n);
                                let h = !1,
                                    p = (0, eK.$)(async () => {
                                        if (!h) {
                                            try {
                                                l = await (0, f.s)(e, N, "createContractEventFilter")({
                                                    abi: n,
                                                    address: r,
                                                    args: i,
                                                    eventName: s,
                                                    strict: t,
                                                    fromBlock: a
                                                })
                                            } catch {}
                                            h = !0;
                                            return
                                        }
                                        try {
                                            let a;
                                            if (l) a = await (0, f.s)(e, ed, "getFilterChanges")({
                                                filter: l
                                            });
                                            else {
                                                let o = await (0, f.s)(e, H.z, "getBlockNumber")({});
                                                a = u && u < o ? await (0, f.s)(e, es, "getContractEvents")({
                                                    abi: n,
                                                    address: r,
                                                    args: i,
                                                    eventName: s,
                                                    fromBlock: u + 1 n,
                                                    toBlock: o,
                                                    strict: t
                                                }) : [], u = o
                                            }
                                            if (0 === a.length) return;
                                            if (o) c.onLogs(a);
                                            else
                                                for (let e of a) c.onLogs([e])
                                        } catch (e) {
                                            l && e instanceof eZ.yR && (h = !1), c.onError ? .(e)
                                        }
                                    }, {
                                        emitOnBegin: !0,
                                        interval: d
                                    });
                                return async () => {
                                    l && await (0, f.s)(e, eC, "uninstallFilter")({
                                        filter: l
                                    }), p()
                                }
                            })
                        })() : (() => {
                            let t = (0, eV.P)(["watchContractEvent", r, i, o, e.uid, s, d, h ? ? !1]),
                                a = !0,
                                l = () => a = !1;
                            return (0, eH.N7)(t, {
                                onLogs: u,
                                onError: c
                            }, t => ((async () => {
                                try {
                                    let o = (() => {
                                            if ("fallback" === e.transport.type) {
                                                let t = e.transport.transports.find(e => "webSocket" === e.config.type);
                                                return t ? t.value : e.transport
                                            }
                                            return e.transport
                                        })(),
                                        c = s ? R({
                                            abi: n,
                                            eventName: s,
                                            args: i
                                        }) : [],
                                        {
                                            unsubscribe: u
                                        } = await o.subscribe({
                                            params: ["logs", {
                                                address: r,
                                                topics: c
                                            }],
                                            onData(e) {
                                                if (!a) return;
                                                let r = e.result;
                                                try {
                                                    let {
                                                        eventName: e,
                                                        args: i
                                                    } = en({
                                                        abi: n,
                                                        data: r.data,
                                                        topics: r.topics,
                                                        strict: h
                                                    }), o = (0, ei.U)(r, {
                                                        args: i,
                                                        eventName: e
                                                    });
                                                    t.onLogs([o])
                                                } catch (o) {
                                                    let e, n;
                                                    if (o instanceof C.SM || o instanceof C.Gy) {
                                                        if (h) return;
                                                        e = o.abiItem.name, n = o.abiItem.inputs ? .some(e => !("name" in e && e.name))
                                                    }
                                                    let i = (0, ei.U)(r, {
                                                        args: n ? [] : {},
                                                        eventName: e
                                                    });
                                                    t.onLogs([i])
                                                }
                                            },
                                            onError(e) {
                                                t.onError ? .(e)
                                            }
                                        });
                                    l = u, a || l()
                                } catch (e) {
                                    c ? .(e)
                                }
                            })(), () => l()))
                        })()
                    })(e, t),
                    watchEvent: t => (function(e, {
                        address: t,
                        args: n,
                        batch: r = !0,
                        event: i,
                        events: o,
                        fromBlock: s,
                        onError: a,
                        onLogs: c,
                        poll: u,
                        pollingInterval: l = e.pollingInterval,
                        strict: d
                    }) {
                        let h, p;
                        let m = void 0 !== u ? u : "bigint" == typeof s || "webSocket" !== e.transport.type && ("fallback" !== e.transport.type || "webSocket" !== e.transport.transports[0].config.type),
                            g = d ? ? !1;
                        return m ? (() => {
                            let u = (0, eV.P)(["watchEvent", t, n, r, e.uid, i, l, s]);
                            return (0, eH.N7)(u, {
                                onLogs: c,
                                onError: a
                            }, a => {
                                let c, u;
                                void 0 !== s && (c = s - 1 n);
                                let d = !1,
                                    h = (0, eK.$)(async () => {
                                        if (!d) {
                                            try {
                                                u = await (0, f.s)(e, F, "createEventFilter")({
                                                    address: t,
                                                    args: n,
                                                    event: i,
                                                    events: o,
                                                    strict: g,
                                                    fromBlock: s
                                                })
                                            } catch {}
                                            d = !0;
                                            return
                                        }
                                        try {
                                            let s;
                                            if (u) s = await (0, f.s)(e, ed, "getFilterChanges")({
                                                filter: u
                                            });
                                            else {
                                                let r = await (0, f.s)(e, H.z, "getBlockNumber")({});
                                                s = c && c !== r ? await (0, f.s)(e, eo, "getLogs")({
                                                    address: t,
                                                    args: n,
                                                    event: i,
                                                    events: o,
                                                    fromBlock: c + 1 n,
                                                    toBlock: r
                                                }) : [], c = r
                                            }
                                            if (0 === s.length) return;
                                            if (r) a.onLogs(s);
                                            else
                                                for (let e of s) a.onLogs([e])
                                        } catch (e) {
                                            u && e instanceof eZ.yR && (d = !1), a.onError ? .(e)
                                        }
                                    }, {
                                        emitOnBegin: !0,
                                        interval: l
                                    });
                                return async () => {
                                    u && await (0, f.s)(e, eC, "uninstallFilter")({
                                        filter: u
                                    }), h()
                                }
                            })
                        })() : (h = !0, p = () => h = !1, (async () => {
                            try {
                                let r = (() => {
                                        if ("fallback" === e.transport.type) {
                                            let t = e.transport.transports.find(e => "webSocket" === e.config.type);
                                            return t ? t.value : e.transport
                                        }
                                        return e.transport
                                    })(),
                                    s = o ? ? (i ? [i] : void 0),
                                    u = [];
                                s && (u = [s.flatMap(e => R({
                                    abi: [e],
                                    eventName: e.name,
                                    args: n
                                }))], i && (u = u[0]));
                                let {
                                    unsubscribe: l
                                } = await r.subscribe({
                                    params: ["logs", {
                                        address: t,
                                        topics: u
                                    }],
                                    onData(e) {
                                        if (!h) return;
                                        let t = e.result;
                                        try {
                                            let {
                                                eventName: e,
                                                args: n
                                            } = en({
                                                abi: s ? ? [],
                                                data: t.data,
                                                topics: t.topics,
                                                strict: g
                                            }), r = (0, ei.U)(t, {
                                                args: n,
                                                eventName: e
                                            });
                                            c([r])
                                        } catch (i) {
                                            let e, n;
                                            if (i instanceof C.SM || i instanceof C.Gy) {
                                                if (d) return;
                                                e = i.abiItem.name, n = i.abiItem.inputs ? .some(e => !("name" in e && e.name))
                                            }
                                            let r = (0, ei.U)(t, {
                                                args: n ? [] : {},
                                                eventName: e
                                            });
                                            c([r])
                                        }
                                    },
                                    onError(e) {
                                        a ? .(e)
                                    }
                                });
                                p = l, h || p()
                            } catch (e) {
                                a ? .(e)
                            }
                        })(), () => p())
                    })(e, t),
                    watchPendingTransactions: t => (function(e, {
                        batch: t = !0,
                        onError: n,
                        onTransactions: r,
                        poll: i,
                        pollingInterval: o = e.pollingInterval
                    }) {
                        let s, a;
                        return (void 0 !== i ? i : "webSocket" !== e.transport.type) ? (() => {
                            let i = (0, eV.P)(["watchPendingTransactions", e.uid, t, o]);
                            return (0, eH.N7)(i, {
                                onTransactions: r,
                                onError: n
                            }, n => {
                                let r;
                                let i = (0, eK.$)(async () => {
                                    try {
                                        if (!r) try {
                                            r = await (0, f.s)(e, D, "createPendingTransactionFilter")({});
                                            return
                                        } catch (e) {
                                            throw i(), e
                                        }
                                        let o = await (0, f.s)(e, ed, "getFilterChanges")({
                                            filter: r
                                        });
                                        if (0 === o.length) return;
                                        if (t) n.onTransactions(o);
                                        else
                                            for (let e of o) n.onTransactions([e])
                                    } catch (e) {
                                        n.onError ? .(e)
                                    }
                                }, {
                                    emitOnBegin: !0,
                                    interval: o
                                });
                                return async () => {
                                    r && await (0, f.s)(e, eC, "uninstallFilter")({
                                        filter: r
                                    }), i()
                                }
                            })
                        })() : (s = !0, a = () => s = !1, (async () => {
                            try {
                                let {
                                    unsubscribe: t
                                } = await e.transport.subscribe({
                                    params: ["newPendingTransactions"],
                                    onData(e) {
                                        if (!s) return;
                                        let t = e.result;
                                        r([t])
                                    },
                                    onError(e) {
                                        n ? .(e)
                                    }
                                });
                                a = t, s || a()
                            } catch (e) {
                                n ? .(e)
                            }
                        })(), () => a())
                    })(e, t)
                }
            }

            function e2(e, t = {}) {
                let n = function(e, t = {}) {
                    let n;
                    try {
                        n = e.getClient(t)
                    } catch {}
                    return n
                }(e, t);
                return n ? .extend(e1)
            }
            var e6 = n(35006),
                e5 = n(94956);

            function e3() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = (0, e5.Z)(e);
                return (0, e6.useSyncExternalStoreWithSelector)(e => (function(e, t) {
                    let {
                        onChange: n
                    } = t;
                    return e.subscribe(() => e2(e), n, {
                        equalityFn: (e, t) => e ? .uid === t ? .uid
                    })
                })(t, {
                    onChange: e
                }), () => e2(t, e), () => e2(t, e), e => e, (e, t) => (null == e ? void 0 : e.uid) === (null == t ? void 0 : t.uid))
            }
        },
        27539: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return f
                }
            });
            var r = n(25524),
                i = n(96104),
                o = n(25355),
                s = n(95046);
            async function a(e, {
                account: t = e.account,
                message: n
            }) {
                if (!t) throw new o.o({
                    docsPath: "/docs/actions/wallet/signMessage"
                });
                let r = (0, i.T)(t);
                if (r.signMessage) return r.signMessage({
                    message: n
                });
                let a = "string" == typeof n ? (0, s.$G)(n) : n.raw instanceof Uint8Array ? (0, s.NC)(n.raw) : n.raw;
                return e.request({
                    method: "personal_sign",
                    params: [a, r.address]
                }, {
                    retryCount: 0
                })
            }
            var c = n(61954),
                u = n(33281);
            async function l(e, t) {
                let n;
                let {
                    account: r,
                    connector: i,
                    ...o
                } = t;
                return n = "object" == typeof r && "local" === r.type ? e.getClient() : await (0, u.e)(e, {
                    account: r,
                    connector: i
                }), (0, c.s)(n, a, "signMessage")({ ...o,
                    ...r ? {
                        account: r
                    } : {}
                })
            }
            var d = n(94956);

            function f() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        mutation: n
                    } = t,
                    i = (e = (0, d.Z)(t), {
                        mutationFn: t => l(e, t),
                        mutationKey: ["signMessage"]
                    }),
                    {
                        mutate: o,
                        mutateAsync: s,
                        ...a
                    } = (0, r.D)({ ...n,
                        ...i
                    });
                return { ...a,
                    signMessage: o,
                    signMessageAsync: s
                }
            }
        },
        26260: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return f
                }
            });
            var r = n(25524),
                i = n(85770),
                o = n(50571);
            async function s(e, t) {
                let {
                    addEthereumChainParameter: n,
                    chainId: r
                } = t, s = e.state.connections.get(t.connector ? .uid ? ? e.state.current);
                if (s) {
                    let e = s.connector;
                    if (!e.switchChain) throw new o.O({
                        connector: e
                    });
                    return await e.switchChain({
                        addEthereumChainParameter: n,
                        chainId: r
                    })
                }
                let a = e.chains.find(e => e.id === r);
                if (!a) throw new i.X4;
                return e.setState(e => ({ ...e,
                    chainId: r
                })), a
            }
            var a = n(90331);
            let c = [];

            function u(e) {
                let t = e.chains;
                return (0, a.v)(c, t) ? c : (c = t, t)
            }
            var l = n(2265),
                d = n(94956);

            function f() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        mutation: t
                    } = e,
                    n = (0, d.Z)(e),
                    {
                        mutate: i,
                        mutateAsync: o,
                        ...a
                    } = (0, r.D)({ ...t,
                        mutationFn: e => s(n, e),
                        mutationKey: ["switchChain"]
                    });
                return { ...a,
                    chains: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = (0, d.Z)(e);
                        return (0, l.useSyncExternalStore)(e => (function(e, t) {
                            let {
                                onChange: n
                            } = t;
                            return e._internal.chains.subscribe((e, t) => {
                                n(e, t)
                            })
                        })(t, {
                            onChange: e
                        }), () => u(t), () => u(t))
                    }({
                        config: n
                    }),
                    switchChain: i,
                    switchChainAsync: o
                }
            }
        },
        42086: function(e, t, n) {
            "use strict";
            n.d(t, {
                aM: function() {
                    return o
                }
            });
            var r = n(40932),
                i = n(34954);

            function o(e) {
                let t = (0, r.a)({ ...e,
                    queryKeyHashFn: i.kq
                });
                return t.queryKey = e.queryKey, t
            }
        }
    }
]);