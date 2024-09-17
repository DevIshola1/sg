(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        62969: function(e, t, n) {
            Promise.resolve().then(n.t.bind(n, 38173, 23)), Promise.resolve().then(n.t.bind(n, 59496, 23)), Promise.resolve().then(n.bind(n, 95956)), Promise.resolve().then(n.t.bind(n, 53054, 23)), Promise.resolve().then(n.t.bind(n, 58488, 23)), Promise.resolve().then(n.t.bind(n, 44193, 23)), Promise.resolve().then(n.bind(n, 82711)), Promise.resolve().then(n.bind(n, 35557)), Promise.resolve().then(n.bind(n, 1990))
        },
        82711: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return b
                },
                default: function() {
                    return C
                }
            });
            var r = n(57437),
                i = n(62655),
                s = n(20488),
                a = n(76624),
                o = n(34105),
                d = n(59748),
                l = n(16537),
                c = n(60283),
                h = n(66094),
                m = n(93191),
                u = n(54463),
                x = n(62536),
                A = n(40181),
                p = n(2265),
                f = () => (0, r.jsxs)("div", {
                    children: [(0, r.jsx)("style", {
                        children: "\n          @keyframes width7435 {\n            from {\n              transform: scaleX(0);\n            }\n            to {\n              transform: scaleX(1);\n            }\n          }\n        "
                    }), (0, r.jsx)("div", {
                        className: "bg-primary/60",
                        style: {
                            width: "12em",
                            height: "1em",
                            borderRadius: "8px"
                        },
                        children: (0, r.jsx)("div", {
                            className: "bg-primary",
                            style: {
                                height: "100%",
                                width: "100%",
                                borderRadius: "8px",
                                animation: "width7435 5s linear infinite",
                                transition: "all"
                            }
                        })
                    })]
                });
            let g = (0, i.a3)([{
                    groupName: "Recommended",
                    wallets: [a.p, o.P, d.D, l.D]
                }], {
                    appName: "SquidGrow",
                    projectId: "0848da886ef67c69bd3d3ec3491e6ef4"
                }),
                b = (0, u._)({
                    chains: [c.R],
                    transports: {
                        [c.R.id]: (0, x.d)()
                    },
                    connectors: g,
                    multiInjectedProviderDiscovery: !1
                }),
                v = new h.S;

            function C(e) {
                let {
                    children: t
                } = e, [n, a] = (0, p.useState)(!1);
                return ((0, p.useEffect)(() => {
                    a(!0)
                }, []), n) ? (0, r.jsx)(A.F, {
                    config: b,
                    children: (0, r.jsx)(m.aH, {
                        client: v,
                        children: (0, r.jsx)(i.pj, {
                            theme: (0, s.$)(),
                            modalSize: "compact",
                            children: t
                        })
                    })
                }) : (0, r.jsx)("div", {
                    className: "flex items-center h-svh justify-center",
                    children: (0, r.jsx)(f, {})
                })
            }
        },
        1990: function(e, t, n) {
            "use strict";
            n.d(t, {
                ConnectWalletButton: function() {
                    return s
                }
            });
            var r = n(57437),
                i = n(62655);
            let s = e => {
                let {
                    isActive: t
                } = e;
                return (0, r.jsx)(i.NL.Custom, {
                    children: e => {
                        let {
                            account: n,
                            chain: i,
                            openAccountModal: s,
                            openChainModal: a,
                            openConnectModal: o,
                            authenticationStatus: d,
                            mounted: l
                        } = e, c = l && "loading" !== d;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [t && !c && (0, r.jsx)("div", {
                                className: "w-full h-full flex items-center justify-center",
                                children: (0, r.jsx)("div", {
                                    role: "status",
                                    children: (0, r.jsxs)("svg", {
                                        "aria-hidden": "true",
                                        className: "w-6 h-6 md:w-8 md:h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-200",
                                        viewBox: "0 0 100 101",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0, r.jsx)("path", {
                                            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                                            fill: "currentColor"
                                        }), (0, r.jsx)("path", {
                                            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                                            fill: "currentFill"
                                        })]
                                    })
                                })
                            }), (0, r.jsx)("div", { ...!c && {
                                    "aria-hidden": !0,
                                    style: {
                                        opacity: 0,
                                        pointerEvents: "none",
                                        userSelect: "none"
                                    }
                                },
                                className: "".concat(t && "d-none"),
                                children: c && n && i && (!d || "authenticated" === d) ? i.unsupported ? (0, r.jsx)("button", {
                                    onClick: a,
                                    className: "px-4 md:px-8 py-2 rounded-xl bg-red-400 text-white font-bold transition duration-200 hover:bg-red-600 hover:text-white border-2 border-transparent flex items-center gap-1 truncate",
                                    children: "Wrong network"
                                }) : (0, r.jsx)("button", {
                                    onClick: s,
                                    className: "px-4 md:px-8 py-2 rounded-xl bg-primary text-white font-bold transition duration-200 hover:bg-primary/60 hover:text-white border-2 border-transparent flex items-center gap-1 truncate",
                                    children: n.displayName
                                }) : (0, r.jsxs)("button", {
                                    onClick: o,
                                    className: "px-4 md:px-8 py-2 rounded-xl bg-primary text-white font-bold transition duration-200 hover:bg-primary/60 hover:text-white border-2 border-transparent flex items-center gap-1",
                                    children: ["Connect", (0, r.jsx)("span", {
                                        className: "hidden md:inline",
                                        children: "Wallet"
                                    })]
                                })
                            })]
                        })
                    }
                })
            }
        },
        53054: function() {},
        35557: function(e, t, n) {
            "use strict";
            n.r(t), t.default = {
                src: "/_next/static/media/SquidGrowLogo.d5053e3c.png",
                height: 1921,
                width: 16361,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAD1BMVEVpV7tfS7j+/v+Wj7f7+/tlgExxAAAABXRSTlNBTU9HQ+Wt9L0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2BmYmFiYGRkAAAAVgAO5/OtmAAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 1
            }
        }
    },
    function(e) {
        e.O(0, [6492, 9141, 9472, 7968, 2581, 2971, 7023, 1744], function() {
            return e(e.s = 62969)
        }), _N_E = e.O()
    }
]);