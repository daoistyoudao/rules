( () => {
    var e = {
        53: e => {
            !function() {
                const t = e => (new TextEncoder).encode(e);
                function n(e, n) {
                    let o, i, a, r, s, c, l, d;
                    for ("string" == typeof e && (e = t(e)),
                    o = 3 & e.length,
                    i = e.length - o,
                    a = n,
                    s = 3432918353,
                    c = 461845907,
                    d = 0; d < i; )
                        l = 255 & e[d] | (255 & e[++d]) << 8 | (255 & e[++d]) << 16 | (255 & e[++d]) << 24,
                        ++d,
                        l = (65535 & l) * s + (((l >>> 16) * s & 65535) << 16) & 4294967295,
                        l = l << 15 | l >>> 17,
                        l = (65535 & l) * c + (((l >>> 16) * c & 65535) << 16) & 4294967295,
                        a ^= l,
                        a = a << 13 | a >>> 19,
                        r = 5 * (65535 & a) + ((5 * (a >>> 16) & 65535) << 16) & 4294967295,
                        a = 27492 + (65535 & r) + ((58964 + (r >>> 16) & 65535) << 16);
                    switch (l = 0,
                    o) {
                    case 3:
                        l ^= (255 & e[d + 2]) << 16;
                    case 2:
                        l ^= (255 & e[d + 1]) << 8;
                    case 1:
                        l ^= 255 & e[d],
                        l = (65535 & l) * s + (((l >>> 16) * s & 65535) << 16) & 4294967295,
                        l = l << 15 | l >>> 17,
                        l = (65535 & l) * c + (((l >>> 16) * c & 65535) << 16) & 4294967295,
                        a ^= l
                    }
                    return a ^= e.length,
                    a ^= a >>> 16,
                    a = 2246822507 * (65535 & a) + ((2246822507 * (a >>> 16) & 65535) << 16) & 4294967295,
                    a ^= a >>> 13,
                    a = 3266489909 * (65535 & a) + ((3266489909 * (a >>> 16) & 65535) << 16) & 4294967295,
                    a ^= a >>> 16,
                    a >>> 0
                }
                const o = n;
                o.v2 = function(e, n) {
                    "string" == typeof e && (e = t(e));
                    let o, i = e.length, a = n ^ i, r = 0;
                    for (; i >= 4; )
                        o = 255 & e[r] | (255 & e[++r]) << 8 | (255 & e[++r]) << 16 | (255 & e[++r]) << 24,
                        o = 1540483477 * (65535 & o) + ((1540483477 * (o >>> 16) & 65535) << 16),
                        o ^= o >>> 24,
                        o = 1540483477 * (65535 & o) + ((1540483477 * (o >>> 16) & 65535) << 16),
                        a = 1540483477 * (65535 & a) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ o,
                        i -= 4,
                        ++r;
                    switch (i) {
                    case 3:
                        a ^= (255 & e[r + 2]) << 16;
                    case 2:
                        a ^= (255 & e[r + 1]) << 8;
                    case 1:
                        a ^= 255 & e[r],
                        a = 1540483477 * (65535 & a) + ((1540483477 * (a >>> 16) & 65535) << 16)
                    }
                    return a ^= a >>> 13,
                    a = 1540483477 * (65535 & a) + ((1540483477 * (a >>> 16) & 65535) << 16),
                    a ^= a >>> 15,
                    a >>> 0
                }
                ,
                o.v3 = n,
                e.exports = o
            }()
        }
        ,
        861: (e, t, n) => {
            "use strict";
            n.r(t),
            n.d(t, {
                invalidURLTest: () => r
            });
            const {round2: o, now: i} = n(162);
            function a(e, t=5) {
                return new Promise((n => {
                    let o = [];
                    for (let a = 0; a < t; a++) {
                        let r = i()
                          , s = e + (44435 + a) + "/" + Date.now() + ".png";
                        fetch(s).then((e => {}
                        )).catch((e => {
                            let a = i() - r;
                            o.push(parseFloat(a.toFixed(3))),
                            o.length === t && n(o)
                        }
                        ))
                    }
                }
                ))
            }
            async function r(e) {
                let t = i()
                  , n = {
                    "0.0.0.0": [],
                    "127.0.0.1": [],
                    "167.99.241.135": [],
                    perf: null
                }
                  , r = {
                    "0.0.0.0": "https://0.0.0.0:",
                    "127.0.0.1": "https://127.0.0.1:",
                    "167.99.241.135": "https://167.99.241.135:"
                };
                var s = [];
                for (let t in r)
                    s.push(a(r[t], e.invalidURLTestSamples).then((e => {
                        n[t] = e
                    }
                    )));
                return await Promise.all(s),
                n.perf = o(i() - t),
                n
            }
        }
        ,
        432: (e, t, n) => {
            "use strict";
            n.r(t),
            n.d(t, {
                getLatencyWebSocket: () => a,
                getWsLatencies: () => r,
                measureImageLatency: () => c
            });
            const {round2: o, now: i} = n(162);
            function a(e) {
                return new Promise((async function(t, n) {
                    let a = i()
                      , s = [];
                    for (const t of e.config.wsPorts)
                        s.push(r(e.config.wsEndpoint, t, e.config.latencyMeasurements, e.config.uuid));
                    Promise.all(s).then((e => {
                        t({
                            perf: o(i() - a),
                            latency_method: "ws"
                        })
                    }
                    )).catch((e => {
                        n({
                            error: e.name,
                            message: e.message
                        })
                    }
                    ))
                }
                ))
            }
            function r(e, t, n, o) {
                return new Promise((function(i) {
                    try {
                        let a = 0;
                        const r = new WebSocket(e + t);
                        r.onerror = function(e) {
                            i(!1)
                        }
                        ,
                        r.onopen = function() {
                            r.send(JSON.stringify({
                                uuid: o
                            }))
                        }
                        ,
                        r.onmessage = function(e) {
                            a <= n ? (r.send(JSON.stringify({
                                uuid: o
                            })),
                            a++) : i(!0)
                        }
                    } catch (e) {
                        i(!1)
                    }
                }
                ))
            }
            function s(e, t) {
                return new Promise((function(n) {
                    let i = Math.random().toString(36).replace("0.", "")
                      , a = new Image
                      , r = Date.now();
                    a.src = `${t.config.endpoint}/images/small.png?n=` + e + "&r=" + i,
                    a.onload = function(e) {
                        n(o(Date.now() - r))
                    }
                    ,
                    a.onerror = function(e) {
                        n(o(Date.now() - r))
                    }
                }
                ))
            }
            function c(e) {
                return new Promise((function(t) {
                    setTimeout((function() {
                        let n = [];
                        for (let t = 0; t <= e.config.imagesToLoad; t++)
                            n.push(s(t, e));
                        Promise.all(n).then((e => {
                            t(e)
                        }
                        ))
                    }
                    ), e.config.imageLatencyDelay)
                }
                ))
            }
        }
        ,
        372: (e, t, n) => {
            "use strict";
            n.r(t),
            n.d(t, {
                scanCommonPorts: () => s
            });
            const {round2: o, now: i} = n(162);
            var a = [];
            const r = function(e, t) {
                return new Promise((n => {
                    var o = 13;
                    ["localhost", "127.0.0.1"].includes(e.trim()) || (o = 5);
                    var r = function(t) {
                        return new Promise((n => {
                            var o = i()
                              , a = Math.random().toString().replace("0.", "").slice(0, 7)
                              , r = new Image;
                            r.onerror = function() {
                                var e = i() - o;
                                n(parseFloat(e.toFixed(3)))
                            }
                            ,
                            r.src = "https://" + e + ":" + t + "/" + a + ".png"
                        }
                        ))
                    };
                    (async () => {
                        var e = [];
                        if (a.length != o)
                            for (var i = 0; i < o; i++)
                                a.push(await r(37857));
                        for (i = 0; i < o; i++)
                            if (e.push(await r(t)),
                            e.length > 3 && e[0] > 1e3 && e[1] > 1e3 && e[2] > 1e3 && e[3] > 1e3) {
                                for (var s = i; s < o; s++)
                                    e.push(e[0]);
                                break
                            }
                        n({
                            test_timings: e
                        })
                    }
                    )()
                }
                ))
            };
            async function s() {
                let e = i();
                var t = {};
                for (var n of ["80", "443", "8080", "9222", "9050", "8888", "1080", "3128"])
                    t[n] = await r("localhost", n);
                return t.timings_closed = a,
                t.perf = o(i() - e),
                t
            }
        }
        ,
        611: (e, t, n) => {
            "use strict";
            function o() {
                return new Promise((async e => {
                    const t = /\((khtml|unlike|vizio|like gec|internal dummy|org\.eclipse|openssl|ipv6|via translate|safari|cardamon).+|xt\d+\)/gi
                      , n = /\((.+)\)/
                      , o = /((android).+)/i
                      , i = /^(linux|[a-z]|wv|mobile|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|windows|(rv:|trident|webview|iemobile).+/i
                      , a = /build\/.+\s|\sbuild\/.+/i
                      , r = /android( |-)\d+/i
                      , s = /((windows).+)/i
                      , c = /^(windows|ms(-|)office|microsoft|compatible|[a-z]|x64|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|outlook|ms(-|)office|microsoft|trident|\.net|msie|httrack|media center|infopath|aol|opera|iemobile|webbrowser).+/i
                      , l = /w(ow|in)64/i
                      , d = /cros/i
                      , u = /^([a-z]|x11|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|trident).+/i
                      , g = /\d+\.\d+\.\d+/i
                      , m = /linux|x11|ubuntu|debian/i
                      , p = /^([a-z]|x11|unknown|compatible|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|java|oracle|\+http|http|unknown|mozilla|konqueror|valve).+/i
                      , f = /(cpu iphone|cpu os|iphone os|mac os|macos|intel os|ppc mac).+/i
                      , w = /^([a-z]|macintosh|compatible|mimic|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2}|rv|\d+\.\d+)$|(rv:|silk|valve).+/i
                      , h = /(ppc |intel |)(mac|mac |)os (x |x|)(\d{2}(_|\.)\d{1,2}|\d{2,})/i
                      , v = /((symbianos|nokia|blackberry|morphos|mac).+)|\/linux|freebsd|symbos|series \d+|win\d+|unix|hp-ux|bsdi|bsd|x86_64/i
                      , y = (e, t) => e.filter((e => t.test(e))).length
                      , b = e => {
                        try {
                            const t = e ? e.getExtension("WEBGL_debug_renderer_info") : null;
                            if (!t)
                                return;
                            return e.getParameter(t.UNMASKED_RENDERER_WEBGL)
                        } catch (e) {
                            return
                        }
                    }
                      , {userAgent: S, platform: T, hardwareConcurrency: D, deviceMemory: C, maxTouchPoints: P} = navigator
                      , x = ( ({userAgent: e, excludeBuild: b=!0}) => {
                        if (!e)
                            return;
                        const {platformLie: S, touchLie: T, core: D} = ( () => {
                            const {userAgent: e, platform: t, maxTouchPoints: n} = navigator
                              , o = /win(dows|16|32|64|95|98|nt)|wow64/gi.test(e) ? "Windows" : /android|linux|cros/gi.test(e) ? "Linux" : /i(os|p(ad|hone|od))/gi.test(e) ? "iOS" : /mac/gi.test(e) ? "Mac" : "Other"
                              , i = /win/gi.test(t) ? "Windows" : /android|arm|linux/i.test(t) ? "Linux" : /i(os|p(ad|hone|od))/gi.test(t) ? "iOS" : /mac/i.test(t) ? "Mac" : "Other"
                              , a = /w(in|ow)64/gi.test(e) && /win16/gi.test(t) || /win(16|32)/gi.test(e) && !/win(16|32)/gi.test(t);
                            return {
                                core: o,
                                platformLie: o != i || a,
                                touchLie: !!n && (/NT\s(6.0|5.(0|1|2)|4.0)/gi.test(e) || /mac/gi.test(e) && !/like mac/gi.test(e) || /mac|win16/gi.test(t))
                            }
                        }
                        )()
                          , C = {
                            core: D,
                            platformLie: S,
                            touchLie: T,
                            trimmed: e.trim().replace(/\s{2,}/, " ")
                        };
                        if (C.compressed = C.trimmed.replace(t, "").trim(),
                        n.test(C.compressed)) {
                            if (C.platform = C.compressed.match(n)[0],
                            C.identifiers = C.platform.slice(1, -1).replace(/,/g, ";").split(";").map((e => e.trim())),
                            y(C.identifiers, o))
                                return C.parsed = C.identifiers.map((e => r.test(e) ? r.exec(e)[0].replace("-", " ") : e)).filter((e => !i.test(e))).join(" ").replace(b ? a : "", "").trim().replace(/\s{2,}/, " "),
                                C;
                            if (y(C.identifiers, s))
                                return C.parsed = C.identifiers.filter((e => !c.test(e))).join(" ").replace(/\sNT (\d+\.\d+)/, ( (e, t) => "10.0" == t ? " 10" : "6.3" == t ? " 8.1" : "6.2" == t ? " 8" : "6.1" == t ? " 7" : "6.0" == t ? " Vista" : "5.2" == t ? " XP Pro" : "5.1" == t ? " XP" : "5.0" == t ? " 2000" : "4.0" == t ? e : " " + t)).replace(l, "(64-bit)").trim().replace(/\s{2,}/, " "),
                                C;
                            if (y(C.identifiers, d))
                                return C.parsed = C.identifiers.filter((e => !u.test(e))).join(" ").replace(b ? g : "", "").trim().replace(/\s{2,}/, " "),
                                C;
                            if (y(C.identifiers, m))
                                return C.parsed = C.identifiers.filter((e => !p.test(e))).join(" ").trim().replace(/\s{2,}/, " "),
                                C;
                            if (y(C.identifiers, f))
                                return C.parsed = C.identifiers.map((e => {
                                    if (h.test(e)) {
                                        const t = h.exec(e)[0]
                                          , n = {
                                            "10_7": "Lion",
                                            "10_8": "Mountain Lion",
                                            "10_9": "Mavericks",
                                            "10_10": "Yosemite",
                                            "10_11": "El Capitan",
                                            "10_12": "Sierra",
                                            "10_13": "High Sierra",
                                            "10_14": "Mojave",
                                            "10_15": "Catalina",
                                            11: "Big Sur",
                                            12: "Monterey"
                                        }
                                          , o = ((/(\d{2}(_|\.)\d{1,2}|\d{2,})/.exec(t) || [])[0] || "").replace(/\./g, "_")
                                          , i = n[/^10/.test(o) ? o : (/^\d{2,}/.exec(o) || [])[0]];
                                        return i ? `macOS ${i}` : t
                                    }
                                    return e
                                }
                                )).filter((e => !w.test(e))).join(" ").replace(/\slike mac.+/gi, "").trim().replace(/\s{2,}/, " "),
                                C;
                            {
                                const e = C.identifiers.filter((e => v.test(e)));
                                return e.length ? (C.parsed = e.join(" ").trim().replace(/\s{2,}/, " "),
                                C) : (C.parsed = C.identifiers.join(" "),
                                C)
                            }
                        }
                    }
                    )({
                        userAgent: S,
                        excludeBuild: !0
                    }) || {}
                      , k = ( () => {
                        const {userAgent: e} = navigator;
                        if (e)
                            return /windows phone/gi.test(e) ? "Windows Phone" : /win(dows|16|32|64|95|98|nt)|wow64/gi.test(e) ? "Windows" : /android/gi.test(e) ? "Android" : /cros/gi.test(e) ? "Chrome OS" : /linux/gi.test(e) ? "Linux" : /ipad/gi.test(e) ? "iPad" : /iphone/gi.test(e) ? "iPhone" : /ipod/gi.test(e) ? "iPod" : /ios/gi.test(e) ? "iOS" : /mac/gi.test(e) ? "Mac" : "Other"
                    }
                    )()
                      , L = await new Promise((async e => {
                        try {
                            if (!("speechSynthesis"in window))
                                return e();
                            let t = !1;
                            const n = () => {
                                const n = speechSynthesis.getVoices();
                                if (!n.length)
                                    return;
                                t = !0;
                                const o = n.map(( ({name: e, lang: t}) => ({
                                    name: e,
                                    lang: t
                                })));
                                return e(o.find((e => /lekha/i.test(e.name))) ? "Mac" : o.find((e => /microsoft/i.test(e.name))) ? "Windows" : o.find((e => /chrome os/i.test(e.name))) ? "Chrome OS" : o.find((e => /android/i.test(e.name))) ? "Android" : void 0)
                            }
                            ;
                            n(),
                            speechSynthesis.onvoiceschanged = n,
                            setTimeout(( () => t ? void 0 : e()), 100)
                        } catch (t) {
                            return e()
                        }
                    }
                    ))
                      , M = L && (/Mac|iOS/.test(x.core) && "Mac" != L || !/Mac|iOS/.test(x.core) && L != k)
                      , O = (e, t, n=8) => e > n && t && /Windows Phone|Android/.test(t)
                      , R = O(C, k)
                      , _ = O(D, k)
                      , B = "iOS" == x.core && void 0 !== C
                      , E = ( () => {
                        let e, t;
                        "OffscreenCanvas"in window && (e = new OffscreenCanvas(256,256),
                        t = new OffscreenCanvas(256,256));
                        const n = document.createElement("canvas")
                          , o = document.createElement("canvas")
                          , i = (e, t) => {
                            try {
                                return "webgl2" == t ? e.getContext("webgl2") || e.getContext("experimental-webgl2") : e.getContext("webgl") || e.getContext("experimental-webgl") || e.getContext("moz-webgl") || e.getContext("webkit-3d")
                            } catch (e) {
                                return "blocked"
                            }
                        }
                          , a = new Set([b(i(e, "webgl")), b(i(t, "webgl2")), b(i(n, "webgl")), b(i(o, "webgl2"))]);
                        return a.delete(void 0),
                        [...a]
                    }
                    )()
                      , z = E.length > 1
                      , $ = "" + E[0]
                      , A = !z && "iOS" == x.core && !/apple/i.test($) && !/gpu/i.test($)
                      , V = {
                        ua_identifiers: [!x.identifiers || !x.identifiers.length, x.identifiers],
                        core: [!x.core, x.core],
                        system: [!k, k],
                        device: [!x.parsed, x.parsed],
                        platform: [x.platformLie, T],
                        speechSynthesis: [M, L],
                        deviceMemory: [C < 1 || R || B, C],
                        hardwareConcurrency: [D < 1 || _, D],
                        gpu: [z || A, z ? E : E[0] || "undefined"]
                    };
                    e(Object.fromEntries(Object.entries(V).map((e => {
                        const t = 1 == e[1][0];
                        return [e[0], t ? e[1][1] : t]
                    }
                    ))))
                }
                ))
            }
            n.r(t),
            n.d(t, {
                getMachineDetails: () => o
            })
        }
        ,
        65: (e, t, n) => {
            "use strict";
            n.r(t),
            n.d(t, {
                canLoadScriptFromUncommonPort: () => s,
                dnsResolving: () => r
            });
            const {now: o, round2: i, random: a} = n(162);
            function r(e) {
                return new Promise((function(t) {
                    let n = o();
                    const r = `https://k56sj76s${Date.now().toString().slice(-5)}k3ds.com?b=` + a();
                    fetch(r).then((e => t({
                        res: 1,
                        perf: i(o() - n)
                    }))).catch((e => t({
                        res: 0,
                        perf: i(o() - n)
                    }))),
                    setTimeout((function() {
                        t({
                            res: -1,
                            perf: i(o() - n)
                        })
                    }
                    ), e.config.maxNetTestsTimeout)
                }
                ))
            }
            function s(e) {
                return new Promise((t => {
                    let n = o()
                      , a = {
                        res: 0,
                        perf: null
                    };
                    var r = document.createElement("script");
                    r.setAttribute("src", e.config.canLoadJsUrl),
                    document.head.appendChild(r),
                    r.onload = function() {
                        let e = document.getElementById("q7a3bil64v7ba2x");
                        a.res = e ? 1 : 0,
                        a.perf = i(o() - n),
                        e && e.parentNode.removeChild(e),
                        t(a)
                    }
                    ,
                    r.onerror = function() {
                        a.perf = i(o() - n),
                        t(a)
                    }
                }
                ))
            }
        }
        ,
        119: (e, t, n) => {
            "use strict";
            function o() {
                let e = new Date
                  , t = null;
                try {
                    t = Intl.DateTimeFormat().resolvedOptions().timeZone
                } catch (e) {}
                return {
                    timestamp: e.getTime(),
                    time_str: e.toString(),
                    time_zone: t
                }
            }
            function i() {
                return new Promise((e => {
                    const t = (e, t=1) => 2 == t ? (e / 1e3).toFixed(3).slice(2, 5) : (e / 100).toFixed(2).slice(2, 4)
                      , {timeZone: n} = Intl.DateTimeFormat().resolvedOptions()
                      , o = ( ({year: e, city: t}) => {
                        const n = {
                            timeZone: t,
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric"
                        }
                          , o = new Intl.DateTimeFormat("en",n);
                        return +new Date(o.format(new Date(`7/1/${e}`)))
                    }
                    )({
                        year: 1113,
                        city: n
                    })
                      , i = +new Date(new Date("7/1/1113"))
                      , a = ("" + new Date).replace(/.*\(|\).*/g, "")
                      , r = (0,
                    23,
                    0 + ~~(24 * Math.random()));
                    const {methods: s, stringify: c, toJSON: l, toISOString: d} = ( () => {
                        const e = new Date
                          , n = e.getUTCFullYear()
                          , o = e.getUTCMonth() + 1
                          , i = e.getUTCDate()
                          , a = e.getUTCHours()
                          , r = e.getUTCMinutes()
                          , s = e.getUTCSeconds()
                          , c = e.getUTCMilliseconds();
                        return {
                            methods: `${n}-${t(o)}-${t(i)}T${t(a)}:${t(r)}:${t(s)}.${t(c, 2)}Z`,
                            stringify: JSON.stringify(e).slice(1, -1),
                            toISOString: e.toISOString(),
                            toJSON: e.toJSON()
                        }
                    }
                    )()
                      , {now: u, dateValue: g, valueOf: m, getTime: p} = ( () => {
                        const e = new Date;
                        return {
                            now: Date.now(),
                            dateValue: +e,
                            valueOf: e.getTime(),
                            getTime: e.valueOf()
                        }
                    }
                    )()
                      , f = new Date
                      , w = new Date("07/01/1970")
                      , h = ( () => {
                        const [e,t,n] = JSON.stringify(new Date).slice(1, 11).split("-")
                          , o = `${t}/${n}/${e}`
                          , i = `${e}-${t}-${n}`;
                        return {
                            computed: ~~(+(+new Date(o) - +new Date(i)) / 6e4),
                            key: ~~new Date(o).getTimezoneOffset()
                        }
                    }
                    )()
                      , v = "" + f.getHours()
                      , y = `${v > 12 ? v - 12 : v}:${"" + t(f.getMinutes())}:${"" + t(f.getSeconds())} ${v < 12 ? "AM" : "PM"}`;
                    f.setHours(r),
                    f.setMinutes(r),
                    f.setSeconds(r),
                    e({
                        valid: {
                            time: f.getHours() == r && f.getMinutes() == r && f.getSeconds() == r,
                            clock: 0 == w.getHours() && 0 == w.getMinutes() && 0 == w.getSeconds() && 0 == w.getMilliseconds(),
                            date: /^function Date\(\) {(\n    | )\[native code\](\n| )}$/.test(Date + "") && 7 == Date.length && "Date" == Date.name && new Date == Date() && "" + new Date(Date.parse(new Date)) == "" + new Date,
                            invalidDate: /^Invalid Date$/.test(new Date(1e25)),
                            offset: ( () => {
                                try {
                                    return new Date.prototype.getTimezoneOffset,
                                    !1
                                } catch (e) {
                                    const {name: t, message: n} = e;
                                    return !("TypeError" != t || !/not a constructor/.test(n) || !/^function getTimezoneOffset\(\) {(\n    | )\[native code\](\n| )}$/.test(Date.prototype.getTimezoneOffset + ""))
                                }
                            }
                            )(),
                            matchingOffset: h.key == h.computed,
                            nowTime: g == p && g == u && g == m,
                            utcTime: s == c && s == l && s == d
                        },
                        date: `${new Date}`,
                        time: y,
                        zone: a,
                        reported_offset: h.key,
                        computed_offset: h.computed,
                        reported_location: n,
                        resolvedOptionsEpoch: o,
                        systemEpoch: i
                    })
                }
                ))
            }
            n.r(t),
            n.d(t, {
                getTimezoneDetails: () => i,
                timezoneTest: () => o
            })
        }
        ,
        162: (e, t, n) => {
            "use strict";
            function o() {
                return Math.random().toString().replace("0.", "")
            }
            function i() {
                return "performance"in window ? a(performance.now()) : Date.now()
            }
            function a(e) {
                return null === e ? null : +(Math.round(e + "e+2") + "e-2")
            }
            function r(e, t) {
                const n = Math.pow(10, t);
                return Math.round(e * n) / n
            }
            function s(e) {
                if (0 === e.length)
                    return 0;
                e.sort((function(e, t) {
                    return e - t
                }
                ));
                var t = Math.floor(e.length / 2);
                return e.length % 2 ? e[t] : (e[t - 1] + e[t]) / 2
            }
            function c(e) {
                return Array.isArray(e) && 0 !== e.length ? e.reduce(( (e, t) => e + t)) / e.length : 0
            }
            function l(e) {
                if (!e || 0 === e.length)
                    return 0;
                const t = e.length
                  , n = e.reduce(( (e, t) => e + t)) / t;
                return Math.sqrt(e.map((e => Math.pow(e - n, 2))).reduce(( (e, t) => e + t)) / t)
            }
            n.r(t),
            n.d(t, {
                getStandardDeviation: () => l,
                mean: () => c,
                median: () => s,
                now: () => i,
                random: () => o,
                round: () => r,
                round2: () => a
            })
        }
        ,
        829: (e, t, n) => {
            "use strict";
            n.r(t),
            n.d(t, {
                getWebRTC: () => r,
                webrtcTest: () => a
            });
            const {now: o, round: i} = n(162);
            function a(e) {
                return new Promise((function(t) {
                    const n = o();
                    let a = {
                        cands: []
                    }
                      , r = new (window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection)({
                        iceServers: [{
                            urls: e.config.stunServer
                        }]
                    },{
                        optional: [{
                            RtpDataChannels: !0
                        }]
                    })
                      , s = function() {};
                    function c(s) {
                        if (a.finishEvent = s,
                        a.elapsed = i(o() - n, 2),
                        e.config.collectWebRTCMeta) {
                            try {
                                a.sdp = r.localDescription.sdp
                            } catch (e) {}
                            try {
                                a.signalingState = r.signalingState
                            } catch (e) {}
                            try {
                                a.connectionState = r.connectionState
                            } catch (e) {}
                            try {
                                a.iceGatheringState = r.iceGatheringState
                            } catch (e) {}
                            try {
                                a.canTrickleIceCandidates = r.canTrickleIceCandidates
                            } catch (e) {}
                        }
                        e.config.collectWebRTCStats && r.getStats ? r.getStats().then((e => {
                            a.stats = [];
                            for (let t of e)
                                a.stats.push(t)
                        }
                        )).finally(( () => {
                            a.elapsed2 = i(o() - n, 2),
                            t(a)
                        }
                        )) : t(a)
                    }
                    r.createDataChannel(""),
                    r.createOffer((function(e) {
                        r.setLocalDescription(e, s, s)
                    }
                    ), s),
                    r.onicecandidate = function(e) {
                        e.candidate && e.candidate.candidate && a.cands.push(e.candidate.candidate)
                    }
                    ,
                    r.onicecandidateerror = function(e) {
                        try {
                            a.error = {
                                address: e.address,
                                errorCode: e.errorCode,
                                errorText: e.errorText,
                                port: e.port,
                                url: e.url
                            }
                        } catch (e) {}
                    }
                    ,
                    r.onicegatheringstatechange = function(e) {
                        switch (e.target.iceGatheringState) {
                        case "gathering":
                            break;
                        case "complete":
                            c("complete")
                        }
                    }
                    ,
                    setTimeout((function() {
                        c(`timeout: ${e.config.webRTCTimeout}`)
                    }
                    ), e.config.webRTCTimeout)
                }
                ))
            }
            const r = e => new Promise((t => {
                const n = o();
                let a = {
                    ips: [],
                    finishEvent: ""
                };
                if (setTimeout((function() {
                    a.finishEvent = `timeout: ${e.config.webRTCTimeout}`,
                    a.elapsed = i(o() - n, 2),
                    t(a)
                }
                ), e.config.webRTCTimeout),
                navigator.getUserMedia) {
                    const e = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
                    let r = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
                    if (!r) {
                        const e = document.createElement("iframe");
                        document.body.appendChild(e),
                        e.style.display = "none";
                        const t = e.contentWindow;
                        r = t.RTCPeerConnection || t.mozRTCPeerConnection || t.webkitRTCPeerConnection
                    }
                    const s = new r({
                        iceServers: [{
                            urls: "stun:stun.l.google.com:19302"
                        }]
                    },{
                        optional: [{
                            RtpDataChannels: !0
                        }]
                    });
                    let c = [];
                    s.onicecandidate = t => {
                        if (t.candidate) {
                            const n = e.exec(t.candidate.candidate);
                            null !== n && n.length > 1 && c.push(n[1])
                        }
                    }
                    ,
                    s.createDataChannel(""),
                    s.createOffer((e => {
                        s.setLocalDescription(e, ( () => {}
                        ), ( () => {}
                        ))
                    }
                    ), ( () => {}
                    ));
                    const l = async () => {
                        s.localDescription ? (s.localDescription.sdp.split("\n").forEach((t => {
                            if (0 === t.indexOf("a=candidate:")) {
                                const n = e.exec(t);
                                null !== n && n.length > 1 && c.push(n[1])
                            }
                        }
                        )),
                        c = [...new Set(c)],
                        a.ips = c,
                        a.finishEvent = "complete",
                        a.elapsed = i(o() - n, 2),
                        t(a)) : setTimeout(l, 250)
                    }
                    ;
                    l()
                } else
                    a.finishEvent = "notSupported",
                    a.elapsed = i(o() - n, 2),
                    t(a)
            }
            ))
        }
        ,
        868: (e, t, n) => {
            "use strict";
            n.r(t),
            n.d(t, {
                detectProxies: () => v
            });
            const {webrtcTest: o, getWebRTC: i} = n(829)
              , {timezoneTest: a, getTimezoneDetails: r} = n(119)
              , {invalidURLTest: s} = n(861)
              , {getLatencyWebSocket: c, measureImageLatency: l} = n(432)
              , {scanCommonPorts: d} = n(372)
              , {dnsResolving: u, canLoadScriptFromUncommonPort: g} = n(65)
              , {now: m, round2: p} = n(162)
              , {getMachineDetails: f} = n(611)
              , w = n(53);
            function h(e) {
                const t = window.location.search;
                return new URLSearchParams(t).get(e)
            }
            function v() {
                let e = {
                    mode: window.pd_mode || "prod",
                    debug: h("debug") || !1,
                    runTests: !0,
                    dataSent: !1,
                    uuid: "c84f7db3b1d4139d",
                    rip: "154.26.238.242",
                    endpoint: "https://pd-us-east.incolumitas.com",
                    latencyMeasurements: "5",
                    wsEndpoint: "wss://pd-us-east.incolumitas.com:",
                    wsPorts: [7630],
                    canLoadJsUrl: "https://pd-us-east.incolumitas.com:22379/canLoadJS",
                    maxNetTestsTimeout: 3e3,
                    imagesToLoad: 2,
                    imageLatencyDelay: 0,
                    waitForImageLatency: false,
                    webRTCTimeout: 1500,
                    stunServer: "stun:stun.l.google.com:19302",
                    collectMoreSignals: false,
                    collectWebRTCStats: false,
                    collectWebRTCMeta: !1,
                    invalidURLTestSamples: 5,
                    enableGeoLatency: false,
                    forceSingleCallback: true
                }
                  , t = h("stop") || !1;
                t && "1" === t && (e.runTests = !1);
                let n = {
                    config: e,
                    clientData: {
                        uuid: e.uuid,
                        pdKey: undefined,
                        pdVal: undefined,
                        idx: 1,
                        loaded: m(),
                        elapsed: null,
                        location: window.location.href,
                        userAgent: navigator.userAgent
                    },
                    testResults: {
                        "vpn": {
                            "active": false
                        },
                        "high_latencies": {
                            "active": true
                        },
                        "proxy_ai": {
                            "active": false
                        },
                        "flow_pattern": {
                            "active": true
                        },
                        "vpn_ai": {
                            "active": false
                        },
                        "blocklist": {
                            "active": true
                        },
                        "webrtc": {
                            "active": true
                        },
                        "tcpip_fp": {
                            "active": true
                        },
                        "headers": {
                            "active": true
                        },
                        "timezone": {
                            "active": true
                        },
                        "datacenter": {
                            "active": true
                        },
                        "invalid_url": {
                            "active": false
                        },
                        "latency": {
                            "active": true
                        },
                        "net": {
                            "active": true
                        },
                        "browser_portscan": {
                            "active": false
                        },
                        "portscan": {
                            "active": false
                        }
                    },
                    secondCallback: {
                        uuid: e.uuid,
                        pdKey: undefined,
                        pdVal: undefined,
                        idx: 2,
                        loaded: m(),
                        elapsed: null
                    }
                };
                "visual" === e.mode ? window.addEventListener("load", (function() {
                    C(n)
                }
                )) : C(n)
            }
            const y = async () => new Promise((e => {
                if (!navigator.userAgentData)
                    return e("not supported");
                navigator.userAgentData.getHighEntropyValues(["architecture", "model", "platformVersion", "fullVersionList"]).then((t => {
                    e(t)
                }
                )).catch((t => {
                    e(t.message)
                }
                ))
            }
            ))
              , b = async (e=500) => new Promise((t => {
                try {
                    if (!("speechSynthesis"in window))
                        return t("not supported");
                    window.speechSynthesis.onvoiceschanged = () => {
                        const e = window.speechSynthesis.getVoices();
                        t(e.length)
                    }
                    ;
                    try {
                        const e = window.speechSynthesis.getVoices();
                        t(e.length)
                    } catch (e) {}
                    setTimeout((function() {
                        t("timeout" + e)
                    }
                    ), e)
                } catch (e) {
                    t(e.message)
                }
            }
            ))
              , S = async () => {
                let e = {
                    HEV: await y(),
                    voiceCount: await b(),
                    time: (new Date).toString(),
                    pdfViewerEnabled: navigator.pdfViewerEnabled
                };
                try {
                    Object.assign(e, {
                        tUAD: typeof navigator.userAgentData,
                        tHEV: typeof navigator?.userAgentData?.getHighEntropyValues,
                        sHEV: navigator?.userAgentData?.getHighEntropyValues?.toString(),
                        pHEV: navigator?.userAgentData?.getHighEntropyValues?.__proto__?.toString()
                    })
                } catch (e) {}
                return e
            }
            ;
            function T(e, t) {
                if (navigator && navigator.sendBeacon)
                    return navigator.sendBeacon(e.config.endpoint + "/s", JSON.stringify(t));
                t.xml_http_req = !0;
                var n = new XMLHttpRequest;
                return n.open("POST", e.config.endpoint + "/s", !1),
                n.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"),
                n.send(JSON.stringify(t)),
                !0
            }
            function D(e) {
                e.config.dataSent || (e.clientData.fp = function() {
                    let e = null;
                    try {
                        let t = {
                            booleanFingerprint: Boolean(navigator.credentials) + (Boolean(navigator.appMinorVersion) << 1) + (Boolean(navigator.bluetooth) << 2) + (Boolean(navigator.storage) << 3) + (Boolean(Math.imul) << 4) + (Boolean(navigator.getGamepads) << 5) + (Boolean(navigator.getStorageUpdates) << 6) + (Boolean(navigator.hardwareConcurrency) << 7) + (Boolean(navigator.mediaDevices) << 8) + (Boolean(navigator.mozAlarms) << 9) + (Boolean(navigator.mozConnection) << 10) + (Boolean(navigator.mozIsLocallyAvailable) << 11) + (Boolean(navigator.mozPhoneNumberService) << 12) + (Boolean(navigator.msManipulationViewsEnabled) << 13) + (Boolean(navigator.permissions) << 14) + (Boolean(navigator.registerProtocolHandler) << 15) + (Boolean(navigator.requestMediaKeySystemAccess) << 16) + (Boolean(navigator.requestWakeLock) << 17) + (Boolean(navigator.sendBeacon) << 18) + (Boolean(navigator.serviceWorker) << 19) + (Boolean(navigator.storeWebWideTrackingException) << 20) + (Boolean(navigator.webkitGetGamepads) << 21) + (Boolean(navigator.webkitTemporaryStorage) << 22) + (Boolean(Number.parseInt) << 23) + (Boolean(Math.hypot) << 24) || "",
                            hardwareConcurrency: navigator.hardwareConcurrency || "",
                            deviceMemory: navigator.deviceMemory || "",
                            platform: navigator.platform || "",
                            oscpu: navigator.oscpu || "",
                            cpuClass: navigator.cpuClass || "",
                            vendor: navigator.vendor || "",
                            buildID: navigator.buildID || "",
                            product: navigator.product || "",
                            productSub: navigator.productSub || "",
                            pluginsSupport: void 0 !== navigator.plugins,
                            maxTouchPoints: navigator.maxTouchPoints || navigator.msMaxTouchPoints || "",
                            language: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage,
                            languages: String(navigator.languages),
                            sessionStorage: !!window.sessionStorage,
                            localStorage: !!window.localStorage,
                            indexedDB: !!window.indexedDB,
                            openDatabase: !!window.openDatabase,
                            navigatorCookieEnabled: navigator.cookieEnabled || "",
                            doNotTrack: !!(navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack),
                            sayswho: navigator.sayswho || "",
                            loadPurpose: navigator.loadPurpose || "",
                            webdriver: navigator.webdriver || "",
                            dimensions: String([screen.width, screen.height]),
                            geolocation: Boolean(navigator.geolocation),
                            vibrate: Boolean(navigator.vibrate),
                            getBattery: Boolean(navigator.getBattery),
                            webrtcKey: "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection,
                            _phantom: Boolean(window._phantom),
                            webdriver: Boolean(window.webdriver),
                            domAutomation: Boolean(window.domAutomation),
                            auto: Boolean(window.$cdc_asdjflasutopfhvcZLmcfl_ || document.$cdc_asdjflasutopfhvcZLmcfl_),
                            wd1: Boolean(null != window.document.documentElement.getAttribute("webdriver")),
                            XPathResult: Boolean(0 !== window.XPathResult || void 0 !== document.XPathResult),
                            wd2: Boolean(null != window.document.documentElement.getAttribute("driver")),
                            selenium: Boolean(null != window.document.documentElement.getAttribute("selenium"))
                        }
                          , n = "";
                        for (let e in t)
                            n += e + ":" + t[e] + ";";
                        e = w.v3(n)
                    } catch (t) {
                        e = t.toString()
                    }
                    return e
                }(),
                e.clientData.elapsed = m(),
                T(e, e.clientData))
            }
            function C(e) {
                try {
                    if (!e.config.runTests)
                        return;
                    if ("visual" === e.config.mode) {
                        const t = new CustomEvent("pdStart",{
                            detail: e
                        });
                        window.dispatchEvent(t)
                    }
                    let t = []
                      , n = []
                      , o = f();
                    if (o.then((t => {
                        e.clientData.machine = t
                    }
                    )),
                    t.push(o),
                    e.config.collectMoreSignals) {
                        let n = S();
                        n.then((t => {
                            e.clientData.more = t
                        }
                        )),
                        t.push(n)
                    }
                    if (!0 === e.testResults.latency.active && c(e),
                    e.config.imagesToLoad) {
                        let n = l(e);
                        e.config.waitForImageLatency && (n.then((t => {
                            e.clientData.imageLatencies = t
                        }
                        )),
                        t.push(n))
                    }
                    if (!0 === e.testResults.timezone.active) {
                        e.clientData.time = a(e);
                        let n = r();
                        n.then((t => {
                            e.clientData.timezoneDetails = t
                        }
                        )),
                        t.push(n)
                    }
                    if (!0 === e.testResults.webrtc.active) {
                        let t = i(e).then((t => {
                            e.clientData.webrtc = t,
                            e.secondCallback.webrtc = t
                        }
                        ));
                        n.push(t)
                    }
                    if (!0 === e.testResults.invalid_url.active) {
                        let n = s(e).then((t => {
                            e.clientData.urlLatency = t
                        }
                        ));
                        t.push(n)
                    }
                    if (!0 === e.testResults.net.active) {
                        e.clientData.net = {};
                        let n = u(e)
                          , o = g(e);
                        n.then((t => {
                            e.clientData.net.dnsResolving = t
                        }
                        )),
                        o.then((t => {
                            e.clientData.net.canLoadScriptFromUncommonPort = t
                        }
                        ));
                        for (let e of [n, o])
                            t.push(e)
                    }
                    !0 === e.testResults.browser_portscan.active && t.push(d().then((t => {
                        e.clientData.browserPortscan = t
                    }
                    ))),
                    e.config.forceSingleCallback && (t = t.concat(n)),
                    Promise.all(t).then((t => {
                        if (D(e),
                        e.config.dataSent = !0,
                        "visual" === e.config.mode) {
                            const t = new CustomEvent("pdPoll",{
                                detail: e
                            });
                            window.dispatchEvent(t)
                        }
                    }
                    )).catch((t => {
                        console.error(t),
                        e.clientData.error = t.toString(),
                        D(e)
                    }
                    )),
                    e.config.forceSingleCallback || Promise.all(n).then((t => {
                        e?.clientData?.webrtc || (e.secondCallback.elapsed = m(),
                        T(e, e.secondCallback))
                    }
                    ))
                } catch (t) {
                    e.clientData.error = t.toString(),
                    e.clientData.errorStack = t.stack,
                    D(e),
                    e.config.dataSent = !0
                }
            }
        }
    }
      , t = {};
    function n(o) {
        var i = t[o];
        if (void 0 !== i)
            return i.exports;
        var a = t[o] = {
            exports: {}
        };
        return e[o](a, a.exports, n),
        a.exports
    }
    n.d = (e, t) => {
        for (var o in t)
            n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
            })
    }
    ,
    n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    ( () => {
        const {detectProxies: e} = n(868);
        e()
    }
    )()
}
)();
