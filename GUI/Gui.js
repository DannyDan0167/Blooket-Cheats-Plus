(async () => {
      if (console.log("%c Blooket Cheats %c\n\tBy DannyDan0167 on GitHub", "color: #0bc2cf; font-size: 3rem", "color: #8000ff; font-size: 1rem"), console.log("%c\tgui.js", "color: #0bc2cf; font-size: 1rem"), console.log("%c\tStar the github repo!%c  https://github.com/DannyDan0167/Blooket-Cheats", "color: #ffd000; font-size: 1rem", ""), document.querySelector("script[src*='bfs/index.js']") && !window.clearId) {
        for (var e = document.createElement("iframe"), t = (document.body.appendChild(e), window.clearId = window.setInterval(() => {}, 0)); t--;) e.contentWindow.clearInterval.call(window, t);
        e.remove()
    }
    var e, t, a, o, i, r, s, n;

    function l(e, t = {}, ...a) {
        var o = document.createElement(e);
        if ("object" == typeof t.style) {
            let i = "";
            for (let r in t.style) i += `${r.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}: ${t.style[r]}; `;
            t.style = i
        }
        for (let s in t) o[s] = t[s];
        for (let n of a) o.append(n);
        return o
    }
    let c = {
        data: null,
        setItem(e, t) {
            return e.split(".").reduce((e, a, o, i) => (++o == i.length && (e[a] = t), e[a]), this.data), localStorage.setItem("JODGUISettings", JSON.stringify(this.data)), this.data
        },
        deleteItem(e) {
            return e.split(".").reduce((e, t, a, o) => (++a == o.length && delete e[t], e[t]), this.data), localStorage.setItem("JODGUISettings", JSON.stringify(this.data)), this.data
        },
        setData(e) {
            this.data = e, localStorage.setItem("JODGUISettings", JSON.stringify(this.data))
        }
    };
    try {
        for (let d of (c.data = JSON.parse(localStorage.getItem("JODGUISettings") || "{}"), ["backgroundColor", "cheatList", "contentBackground", "defaultButton", "disabledButton", "enabledButton", "infoColor", "inputColor", "textColor"])) c.data[d] && (c.setItem("theme." + d, c.data[d]), c.deleteItem(d))
    } catch {
        c.setData({})
    }
    let p, u, $, m, h, g, y, _, v, b = l("div", {
        id: "JODGUI",
        style: {
            top: Math.max(10, window.innerHeight - 600) / 2 + "px",
            left: Math.max(10, window.innerWidth - 1e3) / 2 + "px",
            transform: `scale(${c.data.scale})`,
            position: "fixed",
            height: "80%",
            width: "80%",
            maxHeight: "600px",
            maxWidth: "1000px",
            zIndex: "999",
            display: "block"
        }
    }, p = l("style", {
        id: "variables",
        innerHTML: `:root {--backgroundColor: ${c.data?.theme?.backgroundColor||"rgb(11, 194, 207)"};--infoColor: ${c.data?.theme?.infoColor||"#9a49aa"};--cheatList: ${c.data?.theme?.cheatList||"#9a49aa"};--defaultButton: ${c.data?.theme?.defaultButton||"#9a49aa"};--disabledButton: ${c.data?.theme?.disabledButton||"#A02626"};--enabledButton: ${c.data?.theme?.enabledButton||"#47A547"};--textColor: ${c.data?.theme?.textColor||"white"};--inputColor: ${c.data?.theme?.inputColor||"#7a039d"};--contentBackground: ${c.data?.theme?.contentBackground||"rgb(64, 17, 95)"};}`
    }), l("style", {
        innerHTML: '.alertList::-webkit-scrollbar{display:none;}.alertList{-ms-overflow-style: none;scrollbar-width: none;}.contentWrapper::-webkit-scrollbar{display:none;}.contentWrapper{-ms-overflow-style: none;scrollbar-width: none;}.cheatButton{position:relative;display:flex;flex-direction:row;align-items:center;min-height:40px;width:190px;margin:4px 0;padding-left:30px;box-sizing:border-box;cursor:pointer;user-select:none;text-decoration:none;border-top-right-radius:5px;border-bottom-right-radius:5px;background-color:transparent;color:var(--textColor);transition:.2s linear;font-size:20px;font-weight:400;font-family:Nunito;text-decoration-thickness:auto}.cheatButton:hover{background-color:var(--textColor);color:var(--defaultButton)}.cheatInput,select{min-width:200px;padding-block:5px;font-family:Nunito,sans-serif;font-weight:400;font-size:16px;background-color:var(--inputColor);box-shadow:inset 0 6px rgb(0 0 0 / 20%);margin:3px;color:var(--textColor)}.bigButton:hover{filter:brightness(110%);transform:translateY(-2px)}.bigButton:active{transform:translateY(2px)}.cheatList::-webkit-scrollbar{width:10px}.cheatList::-webkit-scrollbar-track{background:var(--cheatList)}.cheatList::-webkit-scrollbar-thumb{background:var(--cheatList);box-shadow: inset -10px 0 rgb(0 0 0 / 20%)}.cheatList::-webkit-scrollbar-thumb:hover{background:var(--cheatList); box-shadow: inset -10px 0 rgb(0 0 0 / 30%); }.scriptButton:hover{filter:brightness(120%)}.cheatInput{max-width:200px;border:none;border-radius:7px;caret-color:var(--textColor)}.cheatInput::placeholder{color:var(--textColor)}.cheatInput:focus,select:focus{outline:0}.cheatInput::-webkit-inner-spin-button,.cheatInput::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.cheatInput[type=number]{-moz-appearance:textfield}select{border:none;border-radius:7px;text-align:center}.scriptButton{align-items: center; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; margin: 10px; padding: 5px 5px 11px; position: relative; width: 250px; font-family: Nunito, sans-serif; font-weight: 400; color: var(--textColor); box-shadow: inset 0 -6px rgb(0 0 0 / 20%); border-radius: 7px; cursor: pointer; transition: filter .25s;}.tooltip::after {content: "";position: absolute;width: 10px;height: 10px;background-color: inherit;top: -5px;left: 50%;margin-left: -6px;transform: rotate(135deg)}'
    }), u = l("div", {
        style: {
            width: "100%",
            height: "100%",
            position: "relative",
            outline: "3px solid #3a3a3a",
            borderRadius: "15px",
            overflow: "hidden"
        }
    }, l("div", {
        id: "background",
        style: {
            display: "block",
            top: "0",
            left: "0",
            height: "100%",
            overflowY: "hidden",
            overflowX: "hidden",
            position: "absolute",
            width: "100%",
            background: "var(--backgroundColor)",
            visibility: "visible"
        }
    }, l("div", {
        id: "backgroundImage",
        style: {
            backgroundImage: "url(https://ac.blooket.com/dashboard/65a43218fd1cabe52bdf1cda34613e9e.png)",
            display: "block",
            height: "200%",
            position: "absolute",
            width: "200%",
            top: "50%",
            left: "50%",
            backgroundPositionX: "-100px",
            backgroundPositionY: "-100px",
            backgroundSize: "550px",
            visibility: "visible",
            transform: "translate(-50%,-50%) rotate(15deg)",
            appearance: "none",
            opacity: "0.175"
        }
    })), m = l("div", {
        id: "controls",
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "8px",
            paddingInline: "15px",
            position: "absolute",
            left: "220px",
            top: "0",
            visibility: "visible",
            zIndex: "5",
            height: "52px",
            width: "max-content",
            background: "var(--infoColor)",
            boxShadow: "inset 0 -8px rgb(0 0 0 / 20%), 0 0 4px rgb(0 0 0 / 15%)",
            borderBottomRightRadius: "10px",
            color: "var(--textColor)",
            fontFamily: "Nunito, sans-serif",
            fontWeight: "700",
            userSelect: "text"
        },
        innerText: ([{
            ctrl: e,
            shift: t,
            alt: a,
            key: o
        }, {
            ctrl: i,
            shift: r,
            alt: s,
            key: n
        }] = [c.data.hide || {
            ctrl: !0,
            key: "e"
        }, c.data.close || {
            ctrl: !0,
            key: "x"
        }], `${[e&&"Ctrl",t&&"Shift",a&&"Alt",o&&o.toUpperCase()].filter(Boolean).join(" + ")} to hide | ${[i&&"Ctrl",r&&"Shift",s&&"Alt",n&&n.toUpperCase()].filter(Boolean).join(" + ")} for quick disable Click and drag here`),
        update: ({
            ctrl: e,
            shift: t,
            alt: a,
            key: o
        } = {
            ctrl: !0,
            key: "e"
        }, {
            ctrl: i,
            shift: r,
            alt: s,
            key: n
        } = {
            ctrl: !0,
            key: "x"
        }) => m.innerText = `${[e&&"Ctrl",t&&"Shift",a&&"Alt",o&&o.toUpperCase()].filter(Boolean).join(" + ")} to hide | ${[i&&"Ctrl",r&&"Shift",s&&"Alt",n&&n.toUpperCase()].filter(Boolean).join(" + ")} for quick disable Click and drag here`
    }), l("div", {
        id: "credits",
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "8px",
            position: "absolute",
            right: "0",
            top: "0",
            visibility: "visible",
            zIndex: "5",
            height: "47px",
            width: "280px",
            background: "var(--infoColor)",
            boxShadow: "inset 0 -8px rgb(0 0 0 / 20%), 0 0 4px rgb(0 0 0 / 15%)",
            borderBottomLeftRadius: "10px",
            color: "var(--textColor)",
            fontFamily: "Nunito, sans-serif",
            fontWeight: "700",
            userSelect: "text"
        },
        innerHTML: "GitHub - DannyDan0167",
        onclick: () => window.open("https://github.com/DannyDan0167/Blooket-Cheats", "_blank").focus()
    }), h = l("div", {
        id: "controlButtons",
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: "0",
            bottom: "0",
            visibility: "visible",
            zIndex: "5",
            height: "55px",
            width: "165px",
            background: "#none",
            borderLeft: "3px solid black",
            borderTop: "3px solid black",
            borderTopLeftRadius: "10px",
            color: "white",
            fontFamily: "Nunito, sans-serif",
            fontWeight: "700",
            userSelect: "text",
            overflow: "hidden",
            pointerEvents: "all"
        }
    }, g = l("button", {
        style: {
            height: "55px",
            width: "55px",
            fontFamily: "Nunito",
            color: "white",
            backgroundColor: "#00a0ff",
            border: "none",
            fontSize: "2rem",
            cursor: "move"
        },
        innerHTML: "✥"
    }), l("button", {
        style: {
            height: "55px",
            width: "55px",
            fontFamily: "Nunito",
            color: "white",
            backgroundColor: "grey",
            border: "none",
            fontSize: "2rem",
            fontWeight: "bolder",
            cursor: "pointer"
        },
        innerHTML: "-",
        onclick: function() {
            let e = !1;
            return () => {
                for (var t of [...u.children]) t != h && (e ? t.style.display = t.style._display : (t.style._display = t.style.display, t.style.display = "none"));
                u.style.height = e ? "100%" : "55px", u.style.width = e ? "100%" : "165px", b.style.top = parseInt(b.style.top) + (b.offsetHeight - 55) * (e ? -1 : 1) + "px", b.style.left = parseInt(b.style.left) + (b.offsetWidth - 165) * (e ? -1 : 1) + "px", b.style.pointerEvents = e ? "unset" : "none", e = !e
            }
        }()
    }), l("button", {
        style: {
            height: "55px",
            width: "55px",
            fontFamily: "Nunito",
            color: "white",
            backgroundColor: "red",
            border: "none",
            fontSize: "2rem",
            fontWeight: "bolder",
            cursor: "pointer"
        },
        innerHTML: "X",
        onclick: M
    })), $ = l("div", {
        className: "cheatList",
        style: {
            overflowY: "scroll",
            background: "var(--cheatList)",
            boxShadow: "inset -10px 0 rgb(0 0 0 / 20%)",
            zIndex: "5",
            width: "220px",
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            fontFamily: "Titan One",
            color: "var(--textColor)",
            fontSize: "40px",
            textAlign: "center",
            paddingTop: "20px",
            userSelect: "none",
            padding: "20px 10px 20px 0",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column"
        },
        innerHTML: '<span style="text-shadow: 1px 1px rgb(0 0 0 / 40%)">Cheats</span>'
    }, l("a", {
        className: "bigButton",
        style: {
            cursor: "pointer",
            display: "block",
            fontFamily: "Titan One",
            margin: "20px auto 10px",
            position: "relative",
            transition: ".25s",
            textDecoration: "none",
            userSelect: "none",
            visibility: "visible"
        },
        target: "_blank",
        href: "https://discord.gg/jHjGrrdXP6",
        innerHTML: `<div style="background: rgba(0,0,0,.25); border-radius: 5px; display: block; width: 100%; height: 100%; left: 0; top: 0; position: absolute; transform: translateY(2px); width: 100%; transition: transform .6s cubic-bezier(.3,.7,.4,1)"></div> <div style="background-color: rgb(11, 194, 207); filter: brightness(.7); position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 5px;"></div> <div style="font-weight: 400; background-color: rgb(11, 194, 207); color: white; display: flex; flex-direction: row; align-items: center; justify-content: center; text-align: center; padding: 5px; border-radius: 5px; transform: translateY(-4px); transition: transform .6s cubic-bezier(.3,.7,.4,1)"> <div style="font-family: Titan One, sans-serif; color: white; font-size: 26px; text-shadow: 2px 2px rgb(0 0 0 / 20%); height: 40px; padding: 0 15px; display: flex; flex-direction: row; align-items: center; justify-content: center"> <svg style="filter: drop-shadow(2px 2px 0 rgb(0 0 0 / 20%))" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 -1 21 16"> <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/> </svg> Discord </div> </div>`
    })), l("div", {
        className: "contentWrapper",
        style: {
            position: "absolute",
            left: "220px",
            top: "70px",
            overflowY: "scroll",
            width: "calc(100% - 220px)",
            height: "calc(100% - 70px)",
            borderRadius: "7px"
        }
    }, l("div", {
        id: "content",
        style: {
            position: "absolute",
            inset: "27px 50px 50px 50px"
        }
    }, y = l("div", {
        className: "tooltip",
        style: {
            position: "absolute",
            top: "0",
            left: "0",
            backgroundColor: "black",
            height: "fit-content",
            maxWidth: "300px",
            zIndex: "5",
            borderRadius: "7.5px",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
            paddingInline: "15px",
            pointerEvents: "none",
            opacity: "0",
            textAlign: "center"
        },
        innerText: "description"
    }), _ = l("div", {
        style: {
            alignItems: "center",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            padding: "20px 5px 20px",
            position: "relative",
            width: "100%",
            fontFamily: "Nunito, sans-serif",
            fontWeight: "400",
            color: "var(--textColor)",
            background: "var(--contentBackground)",
            boxShadow: "inset 0 -6px rgb(0 0 0 / 20%)",
            borderRadius: "7px"
        }
    }, v = l("div", {
        className: "headerText",
        style: {
            boxSizing: "border-box",
            display: "block",
            height: "45px",
            left: "-10px",
            padding: "4px 4px 8px",
            position: "absolute",
            top: "-28px",
            backgroundColor: "#ef7426",
            boxShadow: "0 4px rgb(0 0 0 / 20%), inset 0 -4px rgb(0 0 0 / 20%)",
            borderRadius: "7px"
        }
    }, l("div", {
        style: {
            alignItems: "center",
            boxSizing: "border-box",
            display: "flex",
            height: "100%",
            justifyContent: "center",
            padding: "0 15px",
            width: "100%",
            fontFamily: "Titan One, sans-serif",
            fontSize: "26px",
            fontWeight: "400",
            textShadow: "-1px -1px 0 #646464, 1px -1px 0 #646464, -1px 1px 0 #646464, 2px 2px 0 #646464",
            color: "white",
            background: "linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a)",
            borderRadius: "5px"
        }
    })))))));
    for (let f of document.querySelectorAll("#JODGUI")) f.remove();

    function w(e, t, a, o) {
        let i = l("div", {
            className: "cheatButton",
            innerHTML: ("string" == typeof t ? `<img style="height: 30px; margin-right: 5px" src="${t}">` : t || "") + e,
            onclick: () => k(i.innerText, a, o)
        });
        return $.appendChild(i), i.onclick
    }
    async function k(e, t, a) {
        _.innerHTML = "", v.firstChild.innerText = e + (a ? "" : " Cheats"), _.append(v);
        for (let o = 0; o < t.length; o++) {
            let {
                name: i,
                description: r,
                type: s,
                inputs: n,
                enabled: c,
                run: d,
                element: p
            } = t[o];
            if (!p) {
                let u = l("div", {
                    className: "scriptButton",
                    style: {
                        background: "toggle" == s ? c ? "var(--enabledButton)" : "var(--disabledButton)" : "var(--defaultButton)"
                    }
                }, l("div", {
                    className: "cheatName",
                    innerHTML: i
                }));
                if (u.dataset.description = r, u.onclick = (function({
                        target: e,
                        key: t
                    }) {
                        (e == u || e.classList.contains("cheatName") || "Enter" == t && e.classList.contains("cheatInput")) && (t = [...u.children].slice(1), d.apply(this, t.map(e => "number" == e.type ? parseInt("0" + e.value) : "SELECT" == e.nodeName ? JSON.parse(e.value) : e.data || e.value)), "toggle" == s && (u.style.background = this.enabled ? "var(--enabledButton)" : "var(--disabledButton)"), x.alerts?.[0].addLog(`${"toggle"==s?this.enabled?"Enabled":"Disabled":"Ran"} <strong>${this.name}</strong>` + (n?.length ? ` with inputs: (${t.map(e=>"SELECT"==e.nodeName?e.selectedOptions[0].innerText:e.value).join(", ")})` : ""), "toggle" == s ? this.enabled ? "var(--enabledButton)" : "var(--disabledButton)" : null))
                    }).bind(t[o]), n?.length)
                    for (let $ = 0; $ < n.length; $++) {
                        var {
                            name: m,
                            type: h,
                            options: g,
                            min: y,
                            max: b,
                            value: f
                        } = n[$];
                        let w;
                        try {
                            w = await ("function" == typeof g ? g?.() : g)
                        } catch {
                            w = []
                        }
                        if ("options" == h && w?.length) {
                            let k = document.createElement("select");
                            w.forEach(e => {
                                var t = document.createElement("option");
                                t.value = JSON.stringify(e?.value || e), t.innerHTML = e?.name || e, k.appendChild(t)
                            }), u.appendChild(k)
                        } else if ("function" == h) {
                            let C = document.createElement("input");
                            C.classList.add("cheatInput"), C.placeholder = m, C.style.textAlign = "center";
                            let S = (C.readOnly = !0, !1);
                            C.onclick = async () => {
                                S || (C.value = "Waiting for input...", S = !0, C.data = await n[$].function(e => C.value = e + "..."), S = !1, C.value = C.value.slice(0, -3))
                            }, u.appendChild(C)
                        } else(g = document.createElement("input")).classList.add("cheatInput"), "number" == h && (g.type = "number", g.min = y, g.max = b, g.value = f || (null != y ? y : 0)), g.placeholder = m, g.style.textAlign = "center", g.onkeyup = u.onclick, u.appendChild(g)
                    }
                t[o].element = u
            }
            _.appendChild(t[o].element)
        }
    }
    document.body.appendChild(b);
    let x = {
        global: [{
            name: "Auto Answer (Toggle)",
            description: "Toggles auto answer on",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                    var {
                        state: {
                            question: e,
                            stage: t,
                            feedback: a
                        },
                        props: {
                            client: {
                                question: o
                            }
                        }
                    } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                    let i = e || o;
                    try {
                        "typing" != i.qType ? ("feedback" === t || a ? document.querySelector('[class*="feedback"]')?.firstChild : [...document.querySelectorAll('[class*="answerContainer"]')][i.answers.map((e, t) => i.correctAnswers.includes(e) ? t : null).filter(e => null != e)[0]])?.click?.() : Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(i.answers[0])
                    } catch {}
                }, 50))
            }
        }, {
            name: "Highlight Answers",
            description: "Toggles highlight answers on",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                    let {
                        stateNode: {
                            state: e,
                            props: t
                        }
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }())[1].children[0]._owner;
                    [...document.querySelectorAll('[class*="answerContainer"]')].forEach((a, o) => {
                        (e.question || t.client.question).correctAnswers.includes((e.question || t.client.question).answers[o]) ? a.style.backgroundColor = "rgb(0, 207, 119)" : a.style.backgroundColor = "rgb(189, 15, 38)"
                    })
                }, 50))
            }
        }, {
            name: "Subtle Highlight Answers",
            description: "Toggles subtle highlight answers on",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                    let {
                        stateNode: {
                            state: e,
                            props: t
                        }
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }())[1].children[0]._owner;
                    [...document.querySelectorAll('[class*="answerContainer"]')].forEach((a, o) => {
                        (e.question || t.client.question).correctAnswers.includes((e.question || t.client.question).answers[o]) && (a.style.boxShadow = "unset")
                    })
                }, 50))
            }
        }, {
            name: "Freeze Leaderboard", // By Cryptodude3 https://github.com/cryptodude3  Check out his YT https://www.youtube.com/@crypto.7562
    description: "Freezes the leaderboard on the host's screen",
    type: "toggle",
    enabled: false,
    data: null,
    run: function() {
                var stateNode = Object.values((function react(r = document.querySelector("#app")) {
                    return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                })())[1].children[0]._owner.stateNode;
        if (this.enabled) {
            this.enabled = false;
            clearInterval(this.data);
            this.data = null;
            stateNode.props.liveGameController.removeVal(`c/${stateNode.props.client.name}/tat`);
        } else {
            this.enabled = true;
            let freezeGame = () => {
                stateNode.props.liveGameController.setVal({
                    path: `c/${stateNode.props.client.name}/tat/Freeze`,
                    val: "freeze"
                });
            };
            this.data = setInterval(freezeGame, 25);
        }
    }
},{ 
                    name: "Percent Auto Answer",
                    description: "Answers questions correctly or incorrectly depending on the goal grade given (Disable and re-enable to update goal)",
                    inputs: [
                        {
                            name: "Target Grade",
                            type: "number"
                        }
                    ],
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function (target) {
                        if (!this.enabled) {
                            this.enabled = true;
                            const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                            this.data = setInterval(TARGET => {
                                try {
                                    const question = stateNode.state.question || stateNode.props.client.question;
                                    if (stateNode.state.stage == "feedback" || stateNode.state.feedback) return document.querySelector('[class*="feedback"], [id*="feedback"]')?.firstChild?.click?.();
                                    else if (document.querySelector("[class*='answerContainer']") || document.querySelector("[class*='typingAnswerWrapper']")) {
                                        let correct = 0, total = 0;
                                        for (let corrects in stateNode.corrects) correct += stateNode.corrects[corrects];
                                        for (let incorrect in stateNode.incorrects) total += stateNode.incorrects[incorrect];
                                        total += correct;
                                        const yes = total == 0 || Math.abs(correct / (total + 1) - TARGET) >= Math.abs((correct + 1) / (total + 1) - TARGET);
                                        if (stateNode.state.question.qType != "typing") {
                                            const answerContainers = document.querySelectorAll("[class*='answerContainer']");
                                            for (let i = 0; i < answerContainers.length; i++) {
                                                const contains = question.correctAnswers.includes(question.answers[i]);
                                                if (yes && contains || !yes && !contains) return answerContainers[i]?.click?.();
                                            }
                                            answerContainers[0].click();
                                        } else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(yes ? question.answers[0] : Math.random().toString(36).substring(2));
                                    }
                                } catch { }
                            }, 100, (target ?? 100) / 100);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    },
                },
                {
                 name: "Use any Banner", // By Cryptodude3 https://github.com/cryptodude3  Check out his YT https://www.youtube.com/@crypto.7562
    description: "Unlocked all banners",
    inputs: [{
        name: "Banner",
        type: "options",
        options: Object.entries({
            "Starter": "starter",
            "Fire": "fire",
            "Tech Chip": "techChip",
            "Shamrocks": "shamrocks",
            "Orange Ice Pop": "orangeIcePop",
            "End Rainbow": "endRainbow",
            "Slime": "slime",
            "Sushi": "sushi",
            "Falling Blocks": "fallingBlocks",
            "Racetrack": "racetrack",
            "Football Field": "footballField",
            "Ice Cream Sandwich": "iceCreamSandwich",
            "Winter Landscape": "winterLandscape",
            "Leaves": "leaves",
            "Music Class": "musicClass",
            "Science Class": "scienceClass",
            "Art Class": "artClass",
            "Clockwork": "clockwork",
            "Hockey Rink": "hockeyRink",
            "Outer Space": "outerSpace",
            "Soccer Field": "soccerField",
            "Ice": "ice",
            "Toaster Pastry": "toasterPastry",
            "Fish Tank": "fishTank",
            "Theater": "theater",
            "Farm": "farm",
            "Spooky": "spooky",
            "Spiders": "spiders",
            "Coffin": "coffin",
            "Pumpkins": "pumpkins",
            "Christmas Tree": "christmasTree",
            "Chalkboard": "chalkboard",
            "Balloons": "balloons",
            "Skateboard": "skateboard",
            "Sunset": "sunset",
            "Tiger": "tiger",
            "Pirate Map": "pirateMap",
            "Pencil": "pencil",
            "Road Sign": "roadSign",
            "Corn Dog": "cornDog",
            "Leaf": "leaf",
            "Chili Pepper": "chiliPepper",
            "Love Letter": "loveLetter",
            "Gifts": "gifts",
            "Winter Train": "winterTrain",
            "Winter Drive": "winterDrive",
            "Workbench": "workbench",
            "Harvest": "harvest",
            "Chocolate": "chocolate",
            "Fall Picnic": "fallPicnic",
            "Bookshelf": "bookshelf",
            "Easter Pattern": "easterPattern",
            "Carrot": "carrot",
            "Easter Field": "easterField",
            "Garden": "garden",
            "Bakery": "bakery",
            "Gummy Worm": "gummyWorm",
            "Basketball Court": "basketballCourt",
            "Flying Kite": "flyingKite",
            "Hot Dog": "hotDog",
            "Japanese Garden": "japaneseGarden",
            "Sandwich": "sandwich",
            "Ruler": "ruler",
            "Ball Pit": "ballPit",
            "Xylophone": "xylophone",
            "Holiday Lights": "holidayLights",
            "Ice Cream Truck": "iceCreamTruck",
            "Holiday Gift Wrap": "holidayGiftWrap",
            "Winter Sweater": "winterSweater",
            "Holiday Ornaments": "holidayOrnaments",
            "Watermelon": "watermelon",
            "Baguette": "baguette",
            "Rollerblades": "rollerblades",
            "Surfboard": "surfboard",
            "Cookout": "cookout"
        }).map(([name, value]) => ({ name, value }))
    }],
    run: (function(bannerId) {
        var iframe = document.createElement("iframe");
        document.head.appendChild(iframe);
        window.alert = iframe.contentWindow.alert.bind(window);
        window.prompt = iframe.contentWindow.prompt.bind(window);
        iframe.remove();

        function reactHandler() {
            return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
        }

        reactHandler().stateNode.props.liveGameController.setVal({
            path: "c/" + reactHandler().stateNode.props.client.name + "/bg",
            val: bannerId
        });
    })
},{
                    name: "Spam Buy Blooks",
                    description: "Opens a box an amount of times",
                    inputs: [
                        {
                            name: "Box",
                            type: "options",
                            options: () => Array.from(document.querySelectorAll("[class*='packsWrapper'] > div")).reduce((a, b) => {
                                b.querySelector("[class*='blookContainer'] > img") || a.push(b.querySelector("[class*='packImgContainer'] > img").alt);
                                return a;
                            }, [])
                        },
                        {
                            name: "Amount",
                            type: "number"
                        },
                        {
                            name: "Show Unlocks",
                            type: "options",
                            options: [
                                {
                                    name: "Show Unlocks",
                                    value: true
                                },
                                {
                                    name: "Don't Show Unlocks",
                                    value: false
                                }
                            ]
                        }
                    ],
                    run: async function (_box, amountToOpen, alertBlooks) {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        window.confirm = i.contentWindow.confirm.bind(window);
                        i.remove();
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        let prices = Array.from(document.querySelectorAll("[class*='packsWrapper'] > div")).reduce((a, b) => {
                            b.querySelector("[class*='blookContainer'] > img") || (a[b.querySelector("[class*='packImgContainer'] > img").alt] = parseInt(b.querySelector("[class*='packBottom']").textContent));
                            return a;
                        }, {});
                        let box = _box.split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ');
                        const cost = prices[box];
                        if (!cost) return alert("I couldn't find that box!");
        
                        let amount = Math.min(Math.floor(stateNode.state.tokens / cost), amountToOpen);
                        if (amount == 0) return alert("You do not have enough tokens!");
        
                        let blooks = {};
                        let now = Date.now();
        
                        for (let i = 0; i < amount; i++) {
                            await stateNode.buyPack(true, box);
        
                            blooks[stateNode.state.unlockedBlook] ||= 0;
                            blooks[stateNode.state.unlockedBlook]++;
        
                            let before = Date.now();
        
                            now += Date.now() - before;
        
                            stateNode.setState({ canOpen: true, currentPack: "", opening: alertBlooks, doneOpening: alertBlooks, openPack: alertBlooks });
                            clearTimeout(stateNode.canOpenTimeout);
                        }
                        await new Promise(r => setTimeout(r));
                        alert(`(${Date.now() - now}ms) Results:\n${Object.entries(blooks).map(([blook, amount]) => `    ${blook} ${amount}`).join(`\n`)}`);
                    }
                },
                {
            name: "Flood Game",
            description: "Floods a game with a number of fake accounts",
            inputs: [{
                name: "Name",
                type: "string"
            }, {
                name: "Amount",
                type: "number"
            }, {
                name: "Blook",
                type: "options",
		options: ["Chick","Chicken","Cow","Goat","Horse","Pig","Sheep","Duck","Alpaca","Dog","Cat","Rabbit","Goldfish","Hamster","Turtle","Kitten","Puppy","Bear","Moose","Fox","Raccoon","Squirrel","Owl","Hedgehog","Deer","Wolf","Beaver","Tiger","Orangutan","Cockatoo","Parrot","Anaconda","Jaguar","Macaw","Toucan","Panther","Capuchin","Gorilla","Hippo","Rhino","Giraffe","Snowy Owl","Polar Bear","Arctic Fox","Baby Penguin","Penguin","Arctic Hare","Seal","Walrus","Witch","Wizard","Elf","Fairy","Slime Monster","Jester","Dragon","Queen","Unicorn","King","Two of Spades","Eat Me","Drink Me","Alice","Queen of Hearts","Dormouse","White Rabbit","Cheshire Cat","Caterpillar","Mad Hatter","King of Hearts","Toast","Cereal","Yogurt","Breakfast Combo","Orange Juice","Milk","Waffle","Pancakes","French Toast","Pizza","Earth","Meteor","Stars","Alien","Planet","UFO","Spaceship","Astronaut","Lil Bot","Lovely Bot","Angry Bot","Happy Bot","Watson","Buddy Bot","Brainy Bot","Mega Bot","Old Boot","Jellyfish","Clownfish","Frog","Crab","Pufferfish","Blobfish","Octopus","Narwhal","Dolphin","Baby Shark","Megalodon","Panda","Sloth","Tenrec","Flamingo","Zebra","Elephant","Lemur","Peacock","Chameleon","Lion","Amber","Dino Egg","Dino Fossil","Stegosaurus","Velociraptor","Brontosaurus","Triceratops","Tyrannosaurus Rex","Ice Bat","Ice Bug","Ice Elemental","Rock Monster","Dink","Donk","Bush Monster","Yeti","Dingo","Echidna","Koala","Kookaburra","Platypus","Joey","Kangaroo","Crocodile","Sugar Glider","Deckhand","Buccaneer","Swashbuckler","Treasure Map","Seagull","Jolly Pirate","Pirate Ship","Kraken","Captain Blackbeard","Snow Globe","Holiday Gift","Hot Chocolate","Holiday Wreath","Stocking","Gingerbread Man","Gingerbread House","Reindeer","Snowman","Santa Claus","Pumpkin","Swamp Monster","Frankenstein","Vampire","Zombie","Mummy","Caramel Apple","Candy Corn","Werewolf","Ghost","Rainbow Jellyfish","Blizzard Clownfish","Lovely Frog","Lucky Frog","Spring Frog","Poison Dart Frog","Lucky Hamster","Chocolate Rabbit","Spring Rabbit","Lemon Crab","Pirate Pufferfish","Donut Blobfish","Crimson Octopus","Rainbow Narwhal","Frost Wreath","Tropical Globe","New York Snow Globe","London Snow Globe","Japan Snow Globe","Egypt Snow Globe","Paris Snow Globe","Red Sweater Snowman","Blue Sweater Snowman","Elf Sweater Snowman","Santa Claws","Cookies Combo","Chilly Flamingo","Snowy Bush Monster","Nutcracker Koala","Sandwich","Ice Slime","Frozen Fossil","Ice Crab","Rainbow Panda","White Peacock","Tiger Zebra","Teal Platypus","Red Astronaut","Orange Astronaut","Yellow Astronaut","Lime Astronaut","Green Astronaut","Cyan Astronaut","Blue Astronaut","Pink Astronaut","Purple Astronaut","Brown Astronaut","Black Astronaut","Lovely Planet","Lovely Peacock","Haunted Pumpkin","Pumpkin Cookie","Ghost Cookie","Red Gummy Bear","Blue Gummy Bear","Green Gummy Bear","Chick Chicken","Chicken Chick","Raccoon Bandit","Owl Sheriff","Vampire Frog","Pumpkin King","Leprechaun","Anaconda Wizard","Spooky Pumpkin","Spooky Mummy","Agent Owl","Master Elf","Party Pig","Wise Owl","Spooky Ghost","Phantom King","Tim the Alien","Rainbow Astronaut","Hamsta Claus","Light Blue","Black","Red","Purple","Pink","Orange","Lime","Green","Teal","Tan","Maroon","Gray","Mint","Salmon","Burgandy","Baby Blue","Dust","Brown","Dull Blue","Yellow","Blue"].map(e=>{return {name:e,value:e}})
            },{
                name: "Banner",
                type: "options",
                options: Object.entries({
                    Starter: "starter",
                    Chalkboard: "chalkboard",
                    Slime: "slime",
                    Bookshelf: "bookshelf",
                    "Toaster Pastry": "toasterPastry",
                    Theater: "theater",
                    Sushi: "sushi",
                    Workbench: "workbench",
                    Spooky: "spooky",
                    Spiders: "spiders",
                    Coffin: "coffin",
                    Pumpkins: "pumpkins",
                    "Falling Blocks": "fallingBlocks",
                    Racetrack: "racetrack",
                    Harvest: "harvest",
                    Leaves: "leaves",
                    "Fall Picnic": "fallPicnic",
                    "Winter Drive": "winterDrive",
                    "Winter Train": "winterTrain",
                    Ice: "ice",
                    Gifts: "gifts",
                    "Christmas Tree": "christmasTree",
                    "Soccer Field": "soccerField",
                    "Winter Landscape": "winterLandscape",
                    "Football Field": "footballField",
                    "Outer Space": "outerSpace",
                    "Hockey Rink": "hockeyRink",
                    "Music Class": "musicClass",
                    "Ice Cream Sandwich": "iceCreamSandwich",
                    "Science Class": "scienceClass",
                    "Fish Tank": "fishTank",
                    "Art Class": "artClass",
                    Clockwork: "clockwork",
                    "Love Letter": "loveLetter",
                    Farm: "farm",
                    Chocolate: "chocolate",
                    "Tech Chip": "techChip",
                    Fire: "fire",
                    "Orange Ice Pop": "orangeIcePop"
                }).map(([e, t]) => ({
                    name: e,
                    value: t
                }))
            }],
            run: async function(n, a, bl, b) {
let i = document.createElement('iframe')
document.body.append(i)
window.prompt = i.contentWindow.prompt.bind(window);
window.alert = i.contentWindow.alert.bind(window);
i.remove();
function reactHandler(){return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;}
var config = {randomNames:false};
if(!reactHandler().props.liveGameController._liveApp){alert("You must be in a game to use the flooder!");return;}
var firebase = reactHandler().props.liveGameController._liveApp.firebase;
async function connect(gid,name){
const body = await fetch("https://fb.blooket.com/c/firebase/join",{body:JSON.stringify({id:gid,name:name}),credentials:"include",method:"PUT"}).then(e=>e.json());
if(body.success){
const liveApp = firebase.initializeApp({
                        apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                        authDomain: "blooket-2020.firebaseapp.com",
                        projectId: "blooket-2020",
                        storageBucket: "blooket-2020.appspot.com",
                        messagingSenderId: "741533559105",
                        appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                        measurementId: "G-S3H5NGN10Z",
                        databaseURL: body.fbShardURL
                    },name);
                    await liveApp.auth().signInWithCustomToken(body.fbToken);
                    const db = liveApp.database();
		    await db.ref(`${gid}/c/${name}`).set({b:bl,bg:b});
x.alerts[0].addLog(`Bot ${name} joined!`);
}else{alert("Connect error: " + body.msg);}
}
async function hack(){
    if(!reactHandler().props.liveGameController._liveApp){alert("You must be in a game for the flooder to work!");return;}
    var gameid = reactHandler().props.liveGameController._liveGameCode;
    var bn = parseInt(a);
    if(!bn){alert("You must use a valid number!");return;}
    if(!config.randomNames){var botname = n;}
    var name;
    for(var i = 0;i<bn;i++){
    if(config.randomNames){name=genRandom(15);}else{name=botname+Math.floor(Math.random()*4000);}
    await connect(gameid,name);}
}
function genRandom(amt){var rs="";for(var i = 0;i<amt;i++){rs+=String.fromCharCode(65+Math.floor(Math.random()*25));}return rs;}
hack();
            }
        }, {
            name: "Auto Answer",
            description: "Click the correct answer for you",
            run: function() {
                let {
                    state: {
                        question: e,
                        stage: t,
                        feedback: a
                    },
                    props: {
                        client: {
                            question: o
                        }
                    }
                } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                try {
                    "typing" != e.qType ? ("feedback" === t || a ? document.querySelector('[class*="feedback"]')?.firstChild : [...document.querySelectorAll('[class*="answerContainer"]')][(e || o).answers.map((t, a) => (e || o).correctAnswers.includes(t) ? a : null).filter(e => null != e)[0]])?.click?.() : Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(e.answers[0])
                } catch {}
            }
        }, {
            name: "Highlight Answers",
            description: "Colors answers to be red or green highlighting the correct ones",
            run: function() {
                let {
                    stateNode: {
                        state: e,
                        props: t
                    }
                } = Object.values(function e(t = document.querySelector("body>div")) {
                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                }())[1].children[0]._owner;
                [...document.querySelectorAll('[class*="answerContainer"]')].forEach((a, o) => {
                    (e.question || t.client.question).correctAnswers.includes((e.question || t.client.question).answers[o]) ? a.style.backgroundColor = "rgb(0, 207, 119)" : a.style.backgroundColor = "rgb(189, 15, 38)"
                })
            }
        }, {
              name: "Subtle Highlight Answers",
            description: "Removes the shadow from correct answers",
            run: function() {
                let {
                    stateNode: {
                        state: e,
                        props: t
                    }
                } = Object.values(function e(t = document.querySelector("body>div")) {
                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                }())[1].children[0]._owner;
                [...document.querySelectorAll('[class*="answerContainer"]')].forEach((a, o) => {
                    (e.question || t.client.question).correctAnswers.includes((e.question || t.client.question).answers[o]) && (a.style.boxShadow = "unset")
                })
            }
        }, {
                    name: "Get Daily Rewards",
                    description: "Gets max daily tokens and xp",
                    run: async function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        if (!location.href.includes("play.blooket.com")) (alert("This cheat only works on play.blooket.com, opening a new tab."), window.open("https://play.blooket.com/"));
                        else {
                            const { t } = await fetch("https://play.blooket.com/api/playersessions/solo", {
                                body: JSON.stringify({
                                    gameMode: "Factory",
                                    questionSetId: ["60101da869e8c70013913b59", "625db660c6842334835cb4c6", "60268f8861bd520016eae038", "611e6c804abdf900668699e3", "60ba5ff6077eb600221b7145", "642467af9b704783215c1f1b", "605bd360e35779001bf57c5e", "6234cc7add097ff1c9cff3bd", "600b1491d42a140004d5215a", "5db75fa3f1fa190017b61c0c", "5fac96fe2ca0da00042b018f", "600b14d8d42a140004d52165", "5f88953cdb209e00046522c7", "600b153ad42a140004d52172", "5fe260e72a505b00040e2a11", "5fe3d085a529560004cd3076", "5f5fc017aee59500041a1456", "608b0a5863c4f2001eed43f4", "5fad491512c8620004918ace", "5fc91a9b4ea2e200046bd49a", "5c5d06a7deebc70017245da7", "5ff767051b68750004a6fd21", "5fdcacc85d465a0004b021b9", "5fb7eea20bd44300045ba495"][Math.floor(Math.random() * 24)]
                                }),
                                credentials: "include",
                                method: "POST"
                            }).then(x => x.json());
                            await fetch("https://play.blooket.com/api/playersessions/landings", {
                                body: JSON.stringify({ t }),
                                credentials: "include",
                                method: "POST"
                            });
                            await fetch("https://play.blooket.com/api/playersessions/questions?t=" + t, { credentials: "include" });
                            const { name, blook: { name: blookUsed } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.props.user.data;
                            await fetch("https://play.blooket.com/api/users/factorystats", {
                                body: JSON.stringify({
                                    blookUsed, t, name,
                                    cash: Math.floor(Math.random() * 90000000) + 10000000,
                                    correctAnswers: Math.floor(Math.random() * 500) + 500,
                                    upgrades: Math.floor(Math.random() * 300) + 300,
                                    mode: "Time-Solo",
                                    nameUsed: "You",
                                    place: 1,
                                    playersDefeated: 0,
                                }),
                                credentials: "include",
                                method: "PUT"
                            });
                            fetch("https://play.blooket.com/api/users/add-rewards", {
                                body: JSON.stringify({ t, name, addedTokens: 500, addedXp: 300 }),
                                credentials: "include",
                                method: "PUT"
                            }).then(x => x.json())
                                .then(({ dailyReward }) => alert(`Added max tokens and xp, and got ${dailyReward} daily wheel tokens!`))
                                .catch(() => alert('There was an error when adding rewards.'));
                        }
                    }
                },
                {
    name: "Use any Blook",
    description: "Allows you to play as any blook",
    run: (function() {
        (() => {
            let blooks = ["Chick", "Chicken", "Cow", "Goat", "Horse", "Pig", "Sheep", "Duck", "Alpaca", "Dog", "Cat", "Rabbit", "Goldfish", "Hamster", "Turtle", "Kitten", "Puppy", "Bear", "Moose", "Fox", "Raccoon", "Squirrel", "Owl", "Hedgehog", "Deer", "Wolf", "Beaver", "Tiger", "Orangutan", "Cockatoo", "Parrot", "Anaconda", "Jaguar", "Macaw", "Toucan", "Panther", "Capuchin", "Gorilla", "Hippo", "Rhino", "Giraffe", "Snowy Owl", "Polar Bear", "Arctic Fox", "Baby Penguin", "Penguin", "Arctic Hare", "Seal", "Walrus", "Witch", "Wizard", "Elf", "Fairy", "Slime Monster", "Jester", "Dragon", "Queen", "Unicorn", "King", "Two of Spades", "Eat Me", "Drink Me", "Alice", "Queen of Hearts", "Dormouse", "White Rabbit", "Cheshire Cat", "Caterpillar", "Mad Hatter", "King of Hearts", "Toast", "Cereal", "Yogurt", "Breakfast Combo", "Orange Juice", "Milk", "Waffle", "Pancakes", "French Toast", "Pizza", "Earth", "Meteor", "Stars", "Alien", "Planet", "UFO", "Spaceship", "Astronaut", "Lil Bot", "Lovely Bot", "Angry Bot", "Happy Bot", "Watson", "Buddy Bot", "Brainy Bot", "Mega Bot", "Old Boot", "Jellyfish", "Clownfish", "Frog", "Crab", "Pufferfish", "Blobfish", "Octopus", "Narwhal", "Dolphin", "Baby Shark", "Megalodon", "Panda", "Sloth", "Tenrec", "Flamingo", "Zebra", "Elephant", "Lemur", "Peacock", "Chameleon", "Lion", "Amber", "Dino Egg", "Dino Fossil", "Stegosaurus", "Velociraptor", "Brontosaurus", "Triceratops", "Tyrannosaurus Rex", "Ice Bat", "Ice Bug", "Ice Elemental", "Rock Monster", "Dink", "Donk", "Bush Monster", "Yeti", "Dingo", "Echidna", "Koala", "Kookaburra", "Platypus", "Joey", "Kangaroo", "Crocodile", "Sugar Glider", "Deckhand", "Buccaneer", "Swashbuckler", "Treasure Map", "Seagull", "Jolly Pirate", "Pirate Ship", "Kraken", "Captain Blackbeard", "Snow Globe", "Holiday Gift", "Hot Chocolate", "Holiday Wreath", "Stocking", "Gingerbread Man", "Gingerbread House", "Reindeer", "Snowman", "Santa Claus", "Pumpkin", "Swamp Monster", "Frankenstein", "Vampire", "Zombie", "Mummy", "Caramel Apple", "Candy Corn", "Werewolf", "Ghost", "Rainbow Jellyfish", "Blizzard Clownfish", "Lovely Frog", "Lucky Frog", "Spring Frog", "Poison Dart Frog", "Lucky Hamster", "Chocolate Rabbit", "Spring Rabbit", "Lemon Crab", "Pirate Pufferfish", "Donut Blobfish", "Crimson Octopus", "Rainbow Narwhal", "Frost Wreath", "Tropical Globe", "New York Snow Globe", "London Snow Globe", "Japan Snow Globe", "Egypt Snow Globe", "Paris Snow Globe", "Red Sweater Snowman", "Blue Sweater Snowman", "Elf Sweater Snowman", "Santa Claws", "Cookies Combo", "Chilly Flamingo", "Snowy Bush Monster", "Nutcracker Koala", "Sandwich", "Ice Slime", "Frozen Fossil", "Ice Crab", "Rainbow Panda", "White Peacock", "Tiger Zebra", "Teal Platypus", "Red Astronaut", "Orange Astronaut", "Yellow Astronaut", "Lime Astronaut", "Green Astronaut", "Cyan Astronaut", "Blue Astronaut", "Pink Astronaut", "Purple Astronaut", "Brown Astronaut", "Black Astronaut", "Lovely Planet", "Lovely Peacock", "Haunted Pumpkin", "Pumpkin Cookie", "Ghost Cookie", "Red Gummy Bear", "Blue Gummy Bear", "Green Gummy Bear", "Chick Chicken", "Chicken Chick", "Raccoon Bandit", "Owl Sheriff", "Vampire Frog", "Pumpkin King", "Leprechaun", "Anaconda Wizard", "Spooky Pumpkin", "Spooky Mummy", "Agent Owl", "Master Elf", "Party Pig", "Wise Owl", "Spooky Ghost", "Phantom King", "Tim the Alien", "Rainbow Astronaut", "Hamsta Claus", "Light Blue", "Black", "Red", "Purple", "Pink", "Orange", "Lime", "Green", "Teal", "Tan", "Maroon", "Gray", "Mint", "Salmon", "Burgandy", "Baby Blue", "Dust", "Brown", "Dull Blue", "Yellow", "Blue"];
            let blookData = {};
            blooks.forEach(e => {
                blookData[e] = 1;
            });

            const reactComponent = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;

            reactComponent.setState({
                blookData: blookData,
                unlocks: blooks
            });

            function react() {
                return reactComponent;
            }

            var reactState = react().state;
            if (reactState.user) {
                reactState.user.unlocks = blookData;
                react().setState(reactState);
            }
        })();
    })
},{
      name: "Lobbychat",
    description: "A 'chat' with commands to execute",
    run: (function() {
        function reactHandler() {
            return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner
        }
        var j = 0;
        var rx = false;
        var hi = false;
        document.addEventListener("keydown", function(e) {
            if (e.key === "`") {
                hi = !hi;
                c.style.display = hi ? "block" : "none";
            }
        });

        function parseCmd(t) {
            if (t.charAt(0) === "/") {
                var c = t.split(" ");
                var cm = c[0].replace("/", "");
                c.splice(0, 1);
                return {
                    cmd: cm,
                    args: c
                };
            } else {
                return false;
            }
        }

        function setstate(args) {
            var t = {};
            args.forEach(e => {
                var p = e.split(":");
                if (!Number.isNaN(parseInt(p[1]))) {
                    if (parseInt(p[1]).toString() === p[1]) {
                        p[1] = parseInt(p[1]);
                    }
                }
                t[p[0]] = p[1];
            });
            reactHandler().stateNode.setState(t);
            a("Set Successful!");
        }

        function setv(args) {
            reactHandler().stateNode.props.liveGameController.setVal({
                path: "c/" + reactHandler().stateNode.props.client.name + "/" + args[0],
                val: args.slice(1, args.length).join(" ")
            });
        }

        function tsvlog() {
            window.logsv = !window.logsv;
            a("SetVal log set to " + (window.logsv ? "Enabled" : "Disabled"));
        }

        function dumpstate() {
            Object.keys(reactHandler().stateNode.state).map(e => {
                var obj = reactHandler().stateNode.state[e];
                if (obj != null) {
                    if (Array.from(obj) && typeof obj === "object") {
                        obj = "[Array]";
                    }
                    a(e + ":" + obj);
                } else {
                    return "N/A";
                }
            }).join(";");
        }

        function setBlook(b) {
            var blooks = webpackJsonp.push([
                [], {
                    ['1234']: (_, a, b) => {
                        a.webpack = b
                    }
                },
                [
                    ['1234']
                ]
            ]).webpack("MDrD").a;
            b = Object.keys(blooks).find(e => b.toLocaleLowerCase() === e.toLocaleLowerCase());
            if (blooks[b]) {
                a("Setting blook to " + b + "!");
                reactHandler().stateNode.props.liveGameController.setVal({
                    id: reactHandler().stateNode.props.client.hostId,
                    path: "c/" + reactHandler().stateNode.props.client.name,
                    val: {
                        b: b
                    }
                });
                reactHandler().stateNode.props.client.blook = b;
            } else {
                a("No blook with that name was found!");
            }
        }

        function unlockBlook(b) {
            var blooks = webpackJsonp.push([
                [], {
                    ['1234']: (_, a, b) => {
                        a.webpack = b
                    }
                },
                [
                    ['1234']
                ]
            ]).webpack("MDrD").a;
            b = Object.keys(blooks).find(e => b.toLocaleLowerCase() === e.toLocaleLowerCase());
            if (blooks[b]) {
                reactHandler().stateNode.state.unlocks.push(b);
                reactHandler().stateNode.forceUpdate();
            } else {
                a("No blook with that name was found!");
            }
        }

        function list() {
            reactHandler().stateNode.props.liveGameController.getDatabaseVal("c").then(e => {
                a("Current Players(" + Object.keys(e).length + "): " + Object.keys(e).join(","));
            });
        }

        function flist(p) {
            reactHandler().stateNode.props.liveGameController.getDatabaseVal("c/" + p).then(e => {
                if (e != null) {
                    a("Dump: " + JSON.stringify(e));
                } else {
                    a("Player not found!");
                }
            });
        }

        function sendMessage(e) {
            var t = parseCmd(e);
            if (t) {
                switch (t.cmd) {
                    case "cb":
                        setBlook(t.args.join(" "));
                        break;
                    case "clear":
                        b.innerHTML = "";
                        break;
                    case "dumpstate":
                        dumpstate();
                        break;
                    case "list":
                        list();
                        break;
                    case "tlog":
                        tsvlog();
                        break;
                    case "setval":
                        setv(t.args);
                        break;
                    case "setstate":
                        setstate(t.args);
                        break;
                    case "ahelp":
                        a("Advanced Commands: setval(sets val logged by tlog ex /setval b Chicken), tlog(toggles setval log), dumpstate(dumps react state),setstate(sets react state /setstate crypto:5 crypto2:5 etc)");
                        break;
                    case "help":
                        a("Available Commands: help(gives help),ahelp(advanced commands help), cb(changes blook /cb cow), list(lists players connected), dump(dumps all available info about a player, passwords, etc(/dump player)), clear(clears chat), code(gives game code), unlock(unlocks blook on lobby screen)");
                        break;
                    case "dump":
                        flist(t.args.join(" "));
                        break;
                    case "unlock":
                        unlockBlook(t.args.join(" "));
                        break;
                    case "code":
                        a("Game Code: " + reactHandler().stateNode.props.client.hostId);
                        break;
                    default:
                        a("Unrecognized chat command!");
                        break;
                }
            } else {
                reactHandler().stateNode.props.liveGameController.setVal({
                    id: reactHandler().stateNode.props.client.hostId,
                    path: "c/" + reactHandler().stateNode.props.client.name + "/msg",
                    val: {
                        i: j,
                        msg: e
                    }
                }), j++;
            }
        }
        const c = document.createElement("div");
        c.className = "chat-box", document.body.appendChild(c);
        const h = document.createElement("div");
        h.className = "chat-header", h.textContent = "Chat", c.appendChild(h);
        const b = document.createElement("div");
        b.className = "chat-body", c.appendChild(b);
        const i = document.createElement("input");

        function a(e) {
            const t = document.createElement("div");
            t.textContent = e, b.appendChild(t)
        }
        i.type = "text", i.className = "chat-input", i.placeholder = "Type a message...", c.appendChild(i), c.style.position = "fixed", c.style.bottom = "20px", c.style.right = "20px", c.style.width = "300px", c.style.backgroundColor = "#fff", c.style.border = "1px solid #ccc", c.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)", h.addEventListener("click", (() => {
            b.classList.toggle("open")
        })), i.addEventListener("keydown", (function(e) {
            13 === e.keyCode && (sendMessage(e.srcElement.value), e.srcElement.value = "")
        }));
        var da = reactHandler().stateNode.props.liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_;

        function handleChat(e, t) {
            if (t != null) {
                if (e.includes("/msg")) {
                    t?.msg && (console.log(t.msg), a(e.split("/")[2] + ": " + t.msg))
                }
            }
        }
        reactHandler().stateNode.props.liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_ = function(e, t, a, n) {
            console.log(e, t, a, n), handleChat(e, t), da(e, t, a, n)
        };
        window.logsv = false;

        function onsv(e) {
            if (window.logsv) {
                a("Path: " + e.path.split("/").splice(2, 2).join("/") + " Val: " + ((typeof e.val === 'object') ? JSON.stringify(e.val) : e.val));
            }
        }
        var orgsv = reactHandler().stateNode.props.liveGameController.setVal;
        reactHandler().stateNode.props.liveGameController.setVal = function() {
            onsv.apply(this, arguments);
            orgsv.apply(this, arguments);
        };
        reactHandler().stateNode.props.liveGameController._liveApp.database().ref(`${reactHandler().stateNode.props.liveGameController._liveGameCode}`).on("value", e => {});
        a("Lobbychat successfully loaded!");

        function app() {
            c.style.wordWrap = "break-word";
        }
        app();
    })
},{
    name: "Pin Guesser", // By Cryptodude3 https://github.com/cryptodude3  Check out his YT https://www.youtube.com/@crypto.7562
    description: "Brute forces combinations for existing pins",
    run: function() {
        var guess = 0;
        var sleep = 0;
        var display = document.querySelector("div[class*='titleText']");

        function reactHandler() {
            return Object.values((function react(r = document.querySelector("body>div")) {
                return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
            })())[1].children[0]._owner.stateNode;
        };

        function generateRandomId() {
            return Math.floor(Math.random() * 9000000) + 1000000;
        }

        function checkGameExists() {
            const randomId = generateRandomId();
            fetch(`https://fb.blooket.com/c/firebase/id?id=${randomId}`, {
                    method: 'GET',
                    credentials: 'include'
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success === true) {
                        console.log("Game found:", randomId);
                        display.innerHTML = "Game Found!";
                        reactHandler().setState({
                            client: {
                                hostId: randomId.toString()
                            }
                        });
                    } else {
                        console.log("No game found for:", randomId);
                        reactHandler().setState({
                            client: {
                                hostId: randomId.toString()
                            }
                        });
                        guess++;
                        display.innerHTML = "Guesses: " + guess;
                        sleep++;
                        if (sleep > 15) {
                            setTimeout(checkGameExists, 1000);
                            sleep = 0;
                        } else {
                            checkGameExists();
                        }
                    }
                })
                .catch(error => {
                    alert("Error:" + error);
                });
        }

        // Call checkGameExists to start the process
        checkGameExists();
    }
                }, {
    name: "Crash Game", // By Cryptodude3 https://github.com/cryptodude3  Check out his YT https://www.youtube.com/@crypto.7562
    description: "Crashes the host's game",
    run: (function() {
        var stateNode = Object.values((function react(r = document.querySelector("#app")) {
            return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
        })())[1].children[0]._owner.stateNode;
        stateNode.props.liveGameController.setVal({
            path: `c/${stateNode.props.client.name}/b/toString`,
            val: "Crashed"
        });
    })
},{
        name: "Chat", // By Ego menu https://github.com/yeahbread/Ego-Menu-Bookmarklets
    description: "Opens a chatroom",
    run: function() {
        var iframeUrl = 'https://organizations.minnit.chat/420306182754595/c/Lobby?embed&nickname=';
        var windowFeatures = 'width=500,height=500,resizable=yes,scrollbars=yes,status=yes';
        window.open(iframeUrl, '_blank', windowFeatures);
    }
},{
  
            name: "Every Answer Correct",
            description: "Sets every answer to be correct",
            run: function() {
                let {
                    stateNode: e
                } = Object.values(function e(t = document.querySelector("body>div")) {
                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                }())[1].children[0]._owner;
                e.freeQuestions = e.freeQuestions?.map?.(e => ({
                    ...e,
                    correctAnswers: e.answers
                })), e.questions = e.questions?.map?.(e => ({
                    ...e,
                    correctAnswers: e.answers
                })), e.props.client.questions = e.props.client.questions.map(e => ({
                    ...e,
                    correctAnswers: e.answers
                }))
            }
        }, {
            name: "Remove Name Limit",
            description: "Sets the name limit to 120, which is the actual max name length limit",
            run: function() {
                var e = document.createElement("iframe");
                document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), document.querySelector('input[class*="nameInput"]').maxLength = 120, alert("Removed name length limit")
            }
        }, {
            name: "Remove Random Name",
            description: "Allows you to put a custom name",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    isRandom: !1,
                    client: {
                        name: ""
                    }
                }), document.querySelector('[class*="nameInput"]')?.focus?.()
            }
        }, {
            name: "Sell Cheap Duplicates",
            description: "Sells all of your uncommon to epic dupes (not legendaries+)",
            run: function() {
                var e = document.createElement("iframe");
                document.body.append(e), window.alert = e.contentWindow.alert.bind(window), window.confirm = e.contentWindow.confirm.bind(window), e.remove();
                let t = webpackJsonp.push([
                        [], {
                            1234(e, t, a) {
                                t.webpack = a
                            }
                        },
                        [
                            ["1234"]
                        ]
                    ]).webpack,
                    a = Object.values(t.c).find(e => e.exports?.a?.get).exports.a,
                    o = Object.values(t.c).find(e => e.exports.a?.sellBlook).exports.a.sellBlook;
                a.get("https://dashboard.blooket.com/api/users").then(async ({
                    data: {
                        unlocks: e
                    }
                }) => {
                    if (e = Object.entries(e).filter(([e, t]) => 1 < t && !["Legendary", "Chroma", "Mystical"].includes(webpackJsonp.push([
                            [], {
                                1234(e, t, a) {
                                    t.webpack = a
                                }
                            },
                            [
                                ["1234"]
                            ]
                        ]).webpack("MDrD").a[e].rarity)), confirm("Are you sure you want to sell your uncommon to epic dupes?")) {
                        var t, a, i = Date.now();
                        for ([t, a] of e) await o({
                            blook: t,
                            numToSell: a - 1
                        });
                        alert(`(${Date.now()-i}ms) Results: ` + e.map(([e, t]) => `    ${e} ` + (t - 1)).join(` `))
                    }
                }).catch(() => alert("There was an error user data!"))
            }
        }, {
                 name: "Sell Duplicate Blooks",
                    description: "Sell all duplicate blooks leaving you with 1 each",
                    run: async function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        window.confirm = i.contentWindow.confirm.bind(window);
                        i.remove();
                        if (/dashboard.*\/blooks/.test(window.location.href)) {
                            if (confirm(`Are you sure you want to sell your dupes? (Legendaries and rarer will not be sold)`)) {
                                let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                                let now = Date.now(), results = "";
                                for (const blook in stateNode.state.blookData) if (stateNode.state.blookData[blook] > 1) {
                                    stateNode.setState({ blook, numToSell: stateNode.state.blookData[blook] - 1 });
                                    if (["Legendary", "Chroma", "Mystical"].includes(document.querySelector("[class*='highlightedRarity']").innerText.trim())) continue;
                                    results += `    ${blook} ${stateNode.state.blookData[blook] - 1}\n`;
                                    await stateNode.sellBlook({ preventDefault: () => { } }, true);
                                }
                                alert(`(${Date.now() - now}ms) Results:\n${results.trim()}`);
                            }
                        } else alert("This can only be ran in the Blooks page.");
                    }
        }, {
              name: "Bypass Filter",
                  description: "Bypasses the name filter",
                  inputs: [{
                      name: "Text",
                      type: "text",
                      placeholder: "Enter some text"
                  }],
                  run: function(text) {
                      function bypassFilter(str){var s=str.split("");var t = "";for(var i = 0;i<s.length;i++){t+="\u00AD"+s[i];}return t;}
                      function bypass(inputText) {
                          var reversedText = bypassFilter(inputText);
                          let iframe = document.createElement('iframe');
                          document.body.appendChild(iframe);
                          window.alert = iframe.contentWindow.alert.bind(iframe.contentWindow);
                          var textArea = document.createElement('textarea');
                          textArea.value = reversedText;
                          textArea.style.position = 'fixed';
                          textArea.style.top = 0;
                          textArea.style.left = 0;
                          textArea.style.opacity = 0;
                          document.body.appendChild(textArea);
                          textArea.select();
                          document.execCommand('copy');
                          alert("Bypassed text copied to clipboard!");
                          iframe.remove();
                          document.body.removeChild(textArea);
                      }

                      bypass(text);
                  }
              }, {
            name: "Simulate Pack",
            description: "Simulate opening a pack",
            inputs: [{
                name: "Pack",
                type: "options",
                options: async () => Array.from(document.querySelectorAll('[class*="packShadow"]')).map(e => e.alt)
            }],
            run: function() {
                try {
                    let e = webpackJsonp.push([
                            [], {
                                1234(e, t, a) {
                                    t.webpack = a
                                }
                            },
                            [
                                ["1234"]
                            ]
                        ]).webpack,
                        t = Object.values(e.c),
                        a = t.find(e => e.exports?.a?.Chick?.set).exports.a,
                        o = t.find(e => e.exports.a?.Breakfast).exports.a,
                        i = (Object.entries(a).reduce((e, [t, a]) => (o[a.realSet || a.set] && (e[t] = a), e), {}), Object.values(e.c).find(e => e.exports?.Class).exports),
                        r = {};
                    class s extends i.Scene {
                        constructor(e) {
                            super(), this.rarity = e.toLowerCase()
                        }
                        preload() {
                            switch (this.rarity) {
                                case "uncommon":
                                    this.load.svg("uncommon-1", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_green.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("uncommon-2", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_light_green.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("uncommon-3", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/circle_dark_green.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("uncommon-4", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_dark_green.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("uncommon-5", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_light_green.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("uncommon-6", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_light_green.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("uncommon-7", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_green.svg", {
                                        width: 30,
                                        height: 30
                                    });
                                    break;
                                case "rare":
                                    this.load.svg("rare-1", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_light_blue.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("rare-2", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_dark_blue.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("rare-3", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_blue.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("rare-4", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_blue.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("rare-5", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_light_blue.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("rare-6", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_light_blue.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("rare-7", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/circle_dark_blue.svg", {
                                        width: 25,
                                        height: 25
                                    });
                                    break;
                                case "epic":
                                    this.load.svg("epic-1", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/red.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("epic-2", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/light_red.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("epic-3", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_red.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("epic-4", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_dark_red.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("epic-5", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_red.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("epic-6", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_light_red.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("epic-7", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/circle_dark_red.svg", {
                                        width: 25,
                                        height: 25
                                    });
                                    break;
                                case "legendary":
                                    this.load.svg("legendary-1", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_orange.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("legendary-2", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_light_orange.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("legendary-3", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_orange.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("legendary-4", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_orange.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("legendary-5", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_light_orange.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("legendary-6", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_dark_orange.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("legendary-7", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/triangle_dark_orange.svg", {
                                        width: 30,
                                        height: 30
                                    });
                                    break;
                                case "chroma":
                                    this.load.svg("chroma-1", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_turquoise.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("chroma-2", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_light_turquoise.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("chroma-3", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_dark_turquoise.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("chroma-4", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_turquoise.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("chroma-5", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_turquoise.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("chroma-6", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_light_turquoise.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("chroma-7", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/circle_dark_turquoise.svg", {
                                        width: 25,
                                        height: 25
                                    })
                            }
                        }
                        create() {
                            r.scene = this, r.rarity = "", r.particles = this.physics.add.group({
                                classType: new i.Class({
                                    Extends: i.GameObjects.Image,
                                    initialize: function() {
                                        i.GameObjects.Image.call(this, r.scene, 0, 0, "uncommon-1"), this.setDepth(3), this.lifespan = 0
                                    },
                                    spawn: function(e, t, a, o, i, s, n, l, c) {
                                        this.setTexture(c), this.setActive(!0), this.setVisible(!0), this.setPosition(e, t), this.setScale(a), this.targets = [], r.scene.physics.velocityFromAngle(o, i, this.body.velocity), this.body.setGravityY(s), this.body.setAngularVelocity(n), this.lifespan = l
                                    },
                                    update: function(e, t) {
                                        this.lifespan -= t, 0 < this.lifespan || (this.setActive(!1), this.setVisible(!1))
                                    }
                                }),
                                runChildUpdate: !0
                            }), this.nextParticle = 0, this.numExplosions = 0, this.game.events.on("start-particles", e => {
                                r.rarity = e, this.numExplosions = "Uncommon" === e ? 75 : "Rare" === e ? 100 : -1
                            })
                        }
                        update(t, a) {
                            let o = e("74sb");

                            function i(e) {
                                switch (e) {
                                    case "center":
                                        var t = Object(o.l)(-115, -65);
                                        return {
                                            x: r.scene.cameras.main.worldView.width / 2, y: r.scene.cameras.main.worldView.height / 2, scale: Object(o.l)(.7, 1), angle: t, velocity: Object(o.l)(600, 750), gravity: 700, angVelocity: (-90 < t ? 1 : -1) * Object(o.l)(125, 175), lifespan: 2500
                                        };
                                    case "right-bottom":
                                        return {
                                            x: r.scene.cameras.main.worldView.width, y: r.scene.cameras.main.worldView.height, scale: Object(o.l)(.7, 1), angle: Object(o.l)(-160, -110), velocity: Object(o.l)(600, 750), gravity: 500, angVelocity: Object(o.l)(-175, -125), lifespan: 2500
                                        };
                                    case "left-bottom":
                                        return {
                                            x: 0, y: r.scene.cameras.main.worldView.height, scale: Object(o.l)(.7, 1), angle: Object(o.l)(-70, -20), velocity: Object(o.l)(600, 750), gravity: 500, angVelocity: Object(o.l)(125, 175), lifespan: 2500
                                        };
                                    case "top":
                                        return {
                                            x: Object(o.l)(0, r.scene.cameras.main.worldView.width), y: -50, scale: Object(o.l)(.7, 1), angle: 90, velocity: Object(o.l)(0, 50), gravity: 700, angVelocity: Object(o.l)(-150, 150), lifespan: 2500
                                        };
                                    case "right-shower":
                                        return {
                                            x: r.scene.cameras.main.worldView.width, y: Object(o.l)(0, r.scene.cameras.main.worldView.height), scale: Object(o.l)(.7, 1), angle: Object(o.l)(-180, -130), velocity: Object(o.l)(600, 750), gravity: 500, angVelocity: Object(o.l)(-175, -125), lifespan: 2500
                                        };
                                    case "left-shower":
                                        return {
                                            x: 0, y: Object(o.l)(0, r.scene.cameras.main.worldView.height), scale: Object(o.l)(.7, 1), angle: Object(o.l)(-50, 0), velocity: Object(o.l)(600, 750), gravity: 500, angVelocity: Object(o.l)(125, 175), lifespan: 2500
                                        };
                                    case "right-diamond":
                                        return t = Object(o.l)(0, r.scene.cameras.main.worldView.height), {
                                            x: r.scene.cameras.main.worldView.width,
                                            y: t,
                                            scale: Object(o.l)(.7, 1),
                                            angle: t > r.scene.cameras.main.worldView.height / 2 ? -150 : -210,
                                            velocity: Object(o.l)(600, 750),
                                            gravity: 0,
                                            angVelocity: Object(o.l)(-175, -125),
                                            lifespan: 2500
                                        };
                                    case "left-diamond":
                                        return t = Object(o.l)(0, r.scene.cameras.main.worldView.height), {
                                            x: 0,
                                            y: t,
                                            scale: Object(o.l)(.7, 1),
                                            angle: t > r.scene.cameras.main.worldView.height / 2 ? -30 : 30,
                                            velocity: Object(o.l)(600, 750),
                                            gravity: 0,
                                            angVelocity: Object(o.l)(125, 175),
                                            lifespan: 2500
                                        };
                                    default:
                                        return {}
                                }
                            }
                            if (r.rarity && 0 !== this.numExplosions && (this.nextParticle -= a, this.nextParticle <= 0)) {
                                switch (r.rarity) {
                                    case "Uncommon":
                                        for (let s = 0; s < 2; s++) {
                                            var n = r.particles.get();
                                            n && n.spawn.apply(n, Object.values(i("center")).concat("uncommon-" + Object(o.m)(1, 8)))
                                        }
                                        break;
                                    case "Rare":
                                        for (var l = 0; l < 2; l++) {
                                            var c = r.particles.get();
                                            c && c.spawn.apply(c, Object.values(i(l % 2 == 0 ? "left-bottom" : "right-bottom")).concat("rare-" + Object(o.m)(1, 8)))
                                        }
                                        break;
                                    case "Epic":
                                        for (var d = 0; d < 2; d++) {
                                            var p = r.particles.get();
                                            p && p.spawn.apply(p, Object.values(i(d % 2 == 0 ? "left-shower" : "right-shower")).concat("epic-" + Object(o.m)(1, 8)))
                                        }
                                        break;
                                    case "Legendary":
                                        for (var u = 0; u < 3; u++) {
                                            var $ = r.particles.get();
                                            $ && $.spawn.apply($, Object.values(i("top")).concat("legendary-" + Object(o.m)(1, 8)))
                                        }
                                        break;
                                    case "Chroma":
                                        for (var m = 0; m < 3; m++) {
                                            var h = r.particles.get();
                                            h && h.spawn.apply(h, Object.values(i(m % 2 == 0 ? "left-diamond" : "right-diamond")).concat("chroma-" + Object(o.m)(1, 8)))
                                        }
                                }
                                this.nextParticle = 20, 0 < this.numExplosions && (this.numExplosions = Math.max(this.numExplosions - 1, 0))
                            }
                        }
                    }
                    return function(t) {
                        if ("/market" !== window.location.pathname) return alert("This must be ran on the market page");
                        var a, o = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        let r = e("fGzD");
                        (r = Object.keys(r.a).reduce((e, t) => (e.packs.includes(t) && (e.data[t] = Object.fromEntries(r.b(t))), e), {
                            packs: Array.from(document.querySelectorAll('[class*="packShadow"]')).map(e => e.alt),
                            data: {}
                        }).data)[t] ? (t = function(e) {
                            var t = [],
                                a = Object.keys(r[e]);
                            for (let o of a) t.push(r[e][o] + (t[a.indexOf(o) - 1] || 0));
                            let i = t[t.length - 1] * Math.random();
                            return a[t.findIndex(e => e >= i)]
                        }(t), a = Object.values(e.c).find(e => e.exports?.a?.Elephant).exports.a, o.setState({
                            loadingPack: !1,
                            openPack: !0,
                            unlockedBlook: t,
                            tokens: o.state.tokens,
                            newUnlock: !0,
                            game: {
                                type: i.WEBGL,
                                parent: "phaser-market",
                                width: "100%",
                                height: "100%",
                                scale: {
                                    mode: i.Scale.NONE,
                                    autoCenter: i.Scale.CENTER_BOTH
                                },
                                transparent: !0,
                                physics: {
                                    default: "arcade"
                                },
                                scene: new s(a[t].rarity)
                            },
                            canOpen: !0
                        })) : alert("I couldn't find that box!")
                    }
                } catch {}
            }()
        }, {
            name: "Simulate Unlock",
            description: "Simulate unlocking most of the blooks",
            inputs: [{
                name: "Blook",
                type: "options",
                async options() {
                    let e = webpackJsonp.push([
                        [], {
                            1234(e, t, a) {
                                t.webpack = a
                            }
                        },
                        [
                            ["1234"]
                        ]
                    ]).webpack;
                    return Object.keys(Object.entries(Object.values(e.c).find(e => Object.values(e.exports?.a || {})[0]?.set).exports.a).reduce((t, a) => (Object.values(e.c).find(e => 15 == e.exports.a?.Breakfast).exports.a[a[1].realSet || a[1].set] && (t[a[0]] = a[1]), t), {}))
                }
            }],
            run: function() {
                try {
                    let e = webpackJsonp.push([
                            [], {
                                1234(e, t, a) {
                                    t.webpack = a
                                }
                            },
                            [
                                ["1234"]
                            ]
                        ]).webpack,
                        t = Object.values(e.c),
                        a = t.find(e => e.exports?.a?.Chick?.set).exports.a,
                        o = t.find(e => e.exports.a?.Breakfast).exports.a,
                        i = Object.entries(a).reduce((e, [t, a]) => (o[a.realSet || a.set] && (e[t] = a), e), {}),
                        r = Object.values(e.c).find(e => e.exports?.Class).exports,
                        s = {};
                    class n extends r.Scene {
                        constructor(e) {
                            super(), this.rarity = e.toLowerCase()
                        }
                        preload() {
                            switch (this.rarity) {
                                case "uncommon":
                                    this.load.svg("uncommon-1", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_green.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("uncommon-2", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_light_green.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("uncommon-3", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/circle_dark_green.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("uncommon-4", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_dark_green.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("uncommon-5", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_light_green.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("uncommon-6", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_light_green.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("uncommon-7", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_green.svg", {
                                        width: 30,
                                        height: 30
                                    });
                                    break;
                                case "rare":
                                    this.load.svg("rare-1", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_light_blue.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("rare-2", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_dark_blue.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("rare-3", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_blue.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("rare-4", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_blue.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("rare-5", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_light_blue.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("rare-6", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_light_blue.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("rare-7", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/circle_dark_blue.svg", {
                                        width: 25,
                                        height: 25
                                    });
                                    break;
                                case "epic":
                                    this.load.svg("epic-1", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/red.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("epic-2", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/light_red.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("epic-3", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_red.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("epic-4", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_dark_red.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("epic-5", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_red.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("epic-6", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_light_red.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("epic-7", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/circle_dark_red.svg", {
                                        width: 25,
                                        height: 25
                                    });
                                    break;
                                case "legendary":
                                    this.load.svg("legendary-1", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_orange.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("legendary-2", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_light_orange.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("legendary-3", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_orange.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("legendary-4", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_orange.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("legendary-5", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_light_orange.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("legendary-6", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_dark_orange.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("legendary-7", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/triangle_dark_orange.svg", {
                                        width: 30,
                                        height: 30
                                    });
                                    break;
                                case "chroma":
                                    this.load.svg("chroma-1", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_turquoise.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("chroma-2", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_light_turquoise.svg", {
                                        width: 25,
                                        height: 25
                                    }), this.load.svg("chroma-3", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_dark_turquoise.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("chroma-4", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_turquoise.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("chroma-5", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_turquoise.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("chroma-6", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_light_turquoise.svg", {
                                        width: 30,
                                        height: 30
                                    }), this.load.svg("chroma-7", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/circle_dark_turquoise.svg", {
                                        width: 25,
                                        height: 25
                                    })
                            }
                        }
                        create() {
                            s.scene = this, s.rarity = "", s.particles = this.physics.add.group({
                                classType: new r.Class({
                                    Extends: r.GameObjects.Image,
                                    initialize: function() {
                                        r.GameObjects.Image.call(this, s.scene, 0, 0, "uncommon-1"), this.setDepth(3), this.lifespan = 0
                                    },
                                    spawn: function(e, t, a, o, i, r, n, l, c) {
                                        this.setTexture(c), this.setActive(!0), this.setVisible(!0), this.setPosition(e, t), this.setScale(a), this.targets = [], s.scene.physics.velocityFromAngle(o, i, this.body.velocity), this.body.setGravityY(r), this.body.setAngularVelocity(n), this.lifespan = l
                                    },
                                    update: function(e, t) {
                                        this.lifespan -= t, 0 < this.lifespan || (this.setActive(!1), this.setVisible(!1))
                                    }
                                }),
                                runChildUpdate: !0
                            }), this.nextParticle = 0, this.numExplosions = 0, this.game.events.on("start-particles", e => {
                                s.rarity = e, this.numExplosions = "Uncommon" === e ? 75 : "Rare" === e ? 100 : -1
                            })
                        }
                        update(t, a) {
                            let o = e("74sb");

                            function i(e) {
                                switch (e) {
                                    case "center":
                                        var t = Object(o.l)(-115, -65);
                                        return {
                                            x: s.scene.cameras.main.worldView.width / 2, y: s.scene.cameras.main.worldView.height / 2, scale: Object(o.l)(.7, 1), angle: t, velocity: Object(o.l)(600, 750), gravity: 700, angVelocity: (-90 < t ? 1 : -1) * Object(o.l)(125, 175), lifespan: 2500
                                        };
                                    case "right-bottom":
                                        return {
                                            x: s.scene.cameras.main.worldView.width, y: s.scene.cameras.main.worldView.height, scale: Object(o.l)(.7, 1), angle: Object(o.l)(-160, -110), velocity: Object(o.l)(600, 750), gravity: 500, angVelocity: Object(o.l)(-175, -125), lifespan: 2500
                                        };
                                    case "left-bottom":
                                        return {
                                            x: 0, y: s.scene.cameras.main.worldView.height, scale: Object(o.l)(.7, 1), angle: Object(o.l)(-70, -20), velocity: Object(o.l)(600, 750), gravity: 500, angVelocity: Object(o.l)(125, 175), lifespan: 2500
                                        };
                                    case "top":
                                        return {
                                            x: Object(o.l)(0, s.scene.cameras.main.worldView.width), y: -50, scale: Object(o.l)(.7, 1), angle: 90, velocity: Object(o.l)(0, 50), gravity: 700, angVelocity: Object(o.l)(-150, 150), lifespan: 2500
                                        };
                                    case "right-shower":
                                        return {
                                            x: s.scene.cameras.main.worldView.width, y: Object(o.l)(0, s.scene.cameras.main.worldView.height), scale: Object(o.l)(.7, 1), angle: Object(o.l)(-180, -130), velocity: Object(o.l)(600, 750), gravity: 500, angVelocity: Object(o.l)(-175, -125), lifespan: 2500
                                        };
                                    case "left-shower":
                                        return {
                                            x: 0, y: Object(o.l)(0, s.scene.cameras.main.worldView.height), scale: Object(o.l)(.7, 1), angle: Object(o.l)(-50, 0), velocity: Object(o.l)(600, 750), gravity: 500, angVelocity: Object(o.l)(125, 175), lifespan: 2500
                                        };
                                    case "right-diamond":
                                        return t = Object(o.l)(0, s.scene.cameras.main.worldView.height), {
                                            x: s.scene.cameras.main.worldView.width,
                                            y: t,
                                            scale: Object(o.l)(.7, 1),
                                            angle: t > s.scene.cameras.main.worldView.height / 2 ? -150 : -210,
                                            velocity: Object(o.l)(600, 750),
                                            gravity: 0,
                                            angVelocity: Object(o.l)(-175, -125),
                                            lifespan: 2500
                                        };
                                    case "left-diamond":
                                        return t = Object(o.l)(0, s.scene.cameras.main.worldView.height), {
                                            x: 0,
                                            y: t,
                                            scale: Object(o.l)(.7, 1),
                                            angle: t > s.scene.cameras.main.worldView.height / 2 ? -30 : 30,
                                            velocity: Object(o.l)(600, 750),
                                            gravity: 0,
                                            angVelocity: Object(o.l)(125, 175),
                                            lifespan: 2500
                                        };
                                    default:
                                        return {}
                                }
                            }
                            if (s.rarity && 0 !== this.numExplosions && (this.nextParticle -= a, this.nextParticle <= 0)) {
                                switch (s.rarity) {
                                    case "Uncommon":
                                        for (let r = 0; r < 2; r++) {
                                            var n = s.particles.get();
                                            n && n.spawn.apply(n, Object.values(i("center")).concat("uncommon-" + Object(o.m)(1, 8)))
                                        }
                                        break;
                                    case "Rare":
                                        for (var l = 0; l < 2; l++) {
                                            var c = s.particles.get();
                                            c && c.spawn.apply(c, Object.values(i(l % 2 == 0 ? "left-bottom" : "right-bottom")).concat("rare-" + Object(o.m)(1, 8)))
                                        }
                                        break;
                                    case "Epic":
                                        for (var d = 0; d < 2; d++) {
                                            var p = s.particles.get();
                                            p && p.spawn.apply(p, Object.values(i(d % 2 == 0 ? "left-shower" : "right-shower")).concat("epic-" + Object(o.m)(1, 8)))
                                        }
                                        break;
                                    case "Legendary":
                                        for (var u = 0; u < 3; u++) {
                                            var $ = s.particles.get();
                                            $ && $.spawn.apply($, Object.values(i("top")).concat("legendary-" + Object(o.m)(1, 8)))
                                        }
                                        break;
                                    case "Chroma":
                                        for (var m = 0; m < 3; m++) {
                                            var h = s.particles.get();
                                            h && h.spawn.apply(h, Object.values(i(m % 2 == 0 ? "left-diamond" : "right-diamond")).concat("chroma-" + Object(o.m)(1, 8)))
                                        }
                                }
                                this.nextParticle = 20, 0 < this.numExplosions && (this.numExplosions = Math.max(this.numExplosions - 1, 0))
                            }
                        }
                    }
                    return function(e) {
                        var t = document.createElement("iframe");
                        document.body.append(t), window.alert = t.contentWindow.alert.bind(window), window.prompt = t.contentWindow.prompt.bind(window), t.remove(), "/market" == window.location.pathname ? (t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode).setState({
                            loadingPack: !1,
                            openPack: !0,
                            unlockedBlook: e,
                            newUnlock: !0,
                            game: {
                                type: r.WEBGL,
                                parent: "phaser-market",
                                width: "100%",
                                height: "100%",
                                scale: {
                                    mode: r.Scale.NONE,
                                    autoCenter: r.Scale.CENTER_BOTH
                                },
                                transparent: !0,
                                physics: {
                                    default: "arcade"
                                },
                                scene: new n(i[e].rarity)
                            },
                            canOpen: !0
                        }) : alert("This can only be ran on the market page!")
                    }
                } catch {}
            }()
        }, {
            name: "Use Banner IDs", // By Cryptodude3 https://github.com/cryptodude3  Check out his YT https://www.youtube.com/@crypto.7562
    description: "Enter Banner ID to use Banner",
    inputs: [{
        name: "Banner ID",
        type: "text",
        placeholder: "Enter the banner ID"
    }],
    run: function(bannerID) {
        var iframe = document.createElement("iframe");
        document.head.appendChild(iframe);
        window.alert = iframe.contentWindow.alert.bind(window);
        window.prompt = iframe.contentWindow.prompt.bind(window);
        iframe.remove();

        function reactHandler() {
            return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
        }

        reactHandler().stateNode.props.liveGameController.setVal({
            path: "c/" + reactHandler().stateNode.props.client.name + "/bg",
            val: bannerID
        });
    }
},{
            name: "Change Blook Ingame",
            description: "Changes your blook",
            inputs: [{
                name: "Blook",
                type: "options",
                async options() {
                    let {
                        webpack: e
                    } = webpackJsonp.push([
                        [], {
                            1234(e, t, a) {
                                t.webpack = a
                            }
                        },
                        [
                            ["1234"]
                        ]
                    ]);
                    return Object.keys(Object.values(e.c).find(e => e.exports.a?.Chick && e.exports.a?.Elephant).exports.a)
                }
            }],
            run: function(e) {
                let {
                    props: t
                } = Object.values(function e(t = document.querySelector("body>div")) {
                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                }())[1].children[0]._owner.stateNode;
                t.client.blook = e, t.liveGameController.setVal({
                    path: `c/${t.client.name}/b`,
                    val: e
                })
            }
        }, {
            name: "Host Any Gamemode",
            description: "Change the selected gamemode on the host settings page",
            inputs: [{
                name: "Gamemode",
                type: "options",
                options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Candy", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"]
            }],
            run: function(e) {
                let t = document.createElement("iframe");
                if (document.body.append(t), window.alert = t.contentWindow.alert.bind(window), window.prompt = t.contentWindow.prompt.bind(window), t.remove(), "/host/settings" != location.pathname) return alert("Run this script on the host settings page");
                let {
                    stateNode: a
                } = Object.values(function e(t = document.querySelector("body>div")) {
                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                }())[1].children[0]._owner;
                a.setState({
                    settings: {
                        type: e
                    }
                })
            }
        }],

        voyage: [{
            name: "Max Levels",
            description: "Maxes out all islands and your boat",
            run: function() {
                let {
                    stateNode: e
                } = Object.values(function e(t = document.querySelector("body>div")) {
                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                }())[1].children[0]._owner;
                e.setState({
                    islandLevels: Array(e.state.islandLevels.length).fill(5)
                }, e.updateBoatLevel)
            }
        }, {
            name: "Set Doubloons",
            description: "Sets Doubloons",
            inputs: [{
                name: "Amount",
                type: "number"
            }],
            run: function(e) {
                let t = document.createElement("iframe");
                document.body.append(t), window.prompt = t.contentWindow.prompt.bind(window), t.remove();
                let {
                    stateNode: a
                } = Object.values(function e(t = document.querySelector("body>div")) {
                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                }())[1].children[0]._owner;
                a.setState({
                    doubloons: e
                }), a.props.liveGameController.setVal({
                    path: `c/${a.props.client.name}/d`,
                    val: e
                })
            }
        }, {
            name: "Start Heist",
            description: "Starts a heist on someone",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let {
                        stateNode: e
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }())[1].children[0]._owner;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
                }
            }],
            run: function(e) {
                let t = document.createElement("iframe");
                document.body.append(t), window.prompt = t.contentWindow.prompt.bind(window), t.remove();
                let {
                    stateNode: a
                } = Object.values(function e(t = document.querySelector("body>div")) {
                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                }())[1].children[0]._owner;
                a.props.liveGameController.getDatabaseVal("c", function(t) {
                    let o = Object.entries(t || {}).reduce((e, [t, o]) => (t != a.props.client.name && e.push({
                        name: t,
                        blook: o.b,
                        doubloons: o.d || 0
                    }), e), []);
                    if (0 === o.length) return a.questionsToAnswer = 1, void a.randomQ();
                    let {
                        name: i,
                        blook: r,
                        doubloons: s
                    } = o.find(t => t.name == e) || o.sort((e, t) => t.doubloons - e.doubloons)[0];
                    a.setState({
                        stage: "heist",
                        heistInfo: {
                            name: i,
                            blook: r
                        },
                        prizeAmount: Math.max(1e3, s)
                    })
                })
            }
        }, {
            name: "Swap Doubloons",
            description: "Swaps Doubloons with someone",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let {
                        stateNode: e
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }())[1].children[0]._owner;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
                }
            }],
            run: async function(e) {
                let t = document.createElement("iframe");
                document.body.append(t), window.prompt = t.contentWindow.prompt.bind(window), t.remove();
                let {
                    stateNode: a
                } = Object.values(function e(t = document.querySelector("body>div")) {
                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                }())[1].children[0]._owner, o = Object.entries(await new Promise(e => a.props.liveGameController.getDatabaseVal("c", e))).sort((e, t) => t[1].d - e[1].d).filter(e => e[0] != a.props.client.name), i = o.find(t => t[0] == e) || o[0];
                a.props.liveGameController.setVal({
                    path: `c/${a.props.client.name}`,
                    val: {
                        b: a.props.client.blook,
                        d: i[1].d,
                        tat: `${i[0]}:${i[1].d-a.state.doubloons}`
                    }
                }), a.setState({
                    doubloons: i[1].d
                })
            }
        }, {
            name: "Take Doubloons",
            description: "Takes Doubloons from someone",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let {
                        stateNode: e
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }())[1].children[0]._owner;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
                }
            }],
            run: async function(e) {
                let t = document.createElement("iframe");
                document.body.append(t), window.prompt = t.contentWindow.prompt.bind(window), t.remove();
                let {
                    stateNode: a
                } = Object.values(function e(t = document.querySelector("body>div")) {
                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                }())[1].children[0]._owner, o = Object.entries(await new Promise(e => a.props.liveGameController.getDatabaseVal("c", e))).sort((e, t) => t[1].d - e[1].d).filter(e => e[0] != a.props.client.name), i = o.find(t => t[0] == e) || o[0];
                a.setState({
                    doubloons: a.state.doubloons + i[1].d
                }), a.props.liveGameController.setVal({
                    path: `c/${a.props.client.name}`,
                    val: {
                        b: a.props.client.blook,
                        d: i[1].d,
                        tat: `${i[0]}:${i[1].d}`
                    }
                })
            }
        }],
        brawl: [{
            name: "Double Enemy XP",
            description: "Doubles enemy XP drop value",
            run: function() {
                for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) {
                    var t = e.object2;
                    let a = t.classType.prototype.start;
                    t.classType.prototype.start = function() {
                        a.apply(this, arguments), this.val *= 2
                    }, t.children.entries.forEach(e => e.val *= 2)
                }
            }
        }, {
            name: "Half Enemy Speed",
            description: "Makes enemies move 2x slower",
            run: function() {
                for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) {
                    var t = e.object2;
                    let a = t.classType.prototype.start;
                    t.classType.prototype.start = function() {
                        a.apply(this, arguments), this.speed *= .5
                    }, t.children.entries.forEach(e => e.speed *= .5)
                }
            }
        }, {
            name: "Instant Kill",
            description: "Sets all enemies health to 1",
            run: function() {
                for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) {
                    var t = e.object2;
                    let a = t.classType.prototype.start;
                    t.classType.prototype.start = function() {
                        a.apply(this, arguments), this.hp = 1
                    }, t.children.entries.forEach(e => e.hp = 1)
                }
            }
        }, {
            name: "Invincibility",
            description: "Makes you invincible",
            run: function() {
                for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) e.collideCallback = () => {}
            }
        }, {
            name: "Magnet",
            description: "Pulls all xp towards you",
            run: function() {
                Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.find(e => e.collideCallback?.toString().includes("magnetTime")).collideCallback({
                    active: !0
                }, {
                    active: !0,
                    setActive() {},
                    setVisible() {}
                })
            }
        }, {
            name: "Max Current Abilities",
            description: "Maxes out all your current abilities",
            run: function() {
                let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                for (var [t, a] of Object.entries(e.state.abilities))
                    for (let o = 0; o < 10 - a; o++) e.game.current.scene.scenes[0].game.events.emit("level up", t, e.state.abilities[t]++);
                e.setState({
                    level: e.game.current.scene.scenes[0].level = [1, 3, 5, 10, 15, 25, 35].sort((t, a) => Math.abs(t - e.state.level) - Math.abs(a - e.state.level))[0] - 1
                })
            }
        }, {
            name: "Next Level",
            description: "Skips to the next level",
            run: function() {
                var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode,
                    {
                        object1: t,
                        object2: a
                    } = e.game.current.scene.scenes[0].physics.world.colliders._active.find(e => e.collideCallback?.toString().includes('emit("xp"'));
                a.get().spawn(t.x, t.y, (1 === (a = e.state.level) ? 1 : a < 5 ? 5 : a < 10 ? 10 : a < 20 ? 20 : a < 30 ? 30 : a < 40 ? 40 : a < 50 ? 50 : 100) - e.xp)
            }
        }, {
            name: "Remove Obstacles",
            description: "Removes all rocks and obstacles",
            run: function() {
                Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.bodies.entries.forEach(e => {
                    try {
                        e.gameObject.frame.texture.key.includes("obstacle") && e.gameObject.destroy()
                    } catch {}
                })
            }
        }, {
            name: "Kill Enemies",
            description: "Kills all current enemies",
            run: function() {
                Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.bodies.entries.forEach(e => e?.gameObject?.receiveDamage?.(e.gameObject.hp, 1))
            }
        }, {
            name: "Reset Health",
            description: "Resets health and gives invincibility for 3 seconds",
            run: function() {
                Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].game.events._events.respawn.fn()
            }
        }, {
            name: "Set XP",
            description: "Sets amount of XP",
            inputs: [{
                name: "XP",
                type: "number"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                    xp: e,
		    totalXp: e
                }),t.xp=e,t.totalXp=e, t.props?.liveGameController.setVal({
                    path: "c/".concat(t.props.client.name),
                    val: {
                        b: t.props.client.blook,
                        xp: e
                    }
                })
            }
        }, {
            name: "Set Level",
            description: "Sets your level",
            inputs: [{
                name: "XP",
                type: "number"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
		   level:e
                });
            }
        }],
        cafe: [{
            name: "Max Items",
            description: "Maxes out items in the shop (Only usable in the shop)",
            run: function() {
                var e = document.createElement("iframe");
                document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/cafe/shop" !== window.location.pathname ? alert("This can only be run in the shop") : (e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode).setState({
                    items: Object.fromEntries(Object.entries(e.state.items).map(e => [e[0], 5]))
                })
            }
        }, {
            name: "Remove Customers",
            description: "Skips the current customers (Not usable in the shop)",
            run: function() {
                let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e.state.customers.forEach((t, a) => Object.keys(t).length && e.removeCustomer(a, !0))
            }
        }, {
            name: "Reset Abilities",
            description: "Resets used abilities in shop (Only usable in the shop)",
            run: function() {
                var e = document.createElement("iframe");
                document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/cafe/shop" !== window.location.pathname ? alert("This can only be run in the shop") : (e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode).setState({
                    abilities: Object.fromEntries(Object.entries(e.state.abilities).map(e => [e[0], 5]))
                })
            }
        }, {
            name: "Set Cash",
            description: "Sets cafe cash",
            inputs: [{
                name: "Amount",
                type: "number"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                    cafeCash: e
                }), t.props.liveGameController.setVal({
                    path: "c/" + t.props.client.name,
                    val: {
                        b: t.props.client.blook,
                        ca: e
                    }
                })
            }
        }, {
            name: "Stock Food",
            description: "Stocks all food to 99 (Not usable in the shop)",
            run: function() {
                var e = document.createElement("iframe");
                document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/cafe" !== window.location.pathname ? alert("This can't be run in the shop") : (e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode).setState({
                    foods: e.state.foods.map(e => ({
                        ...e,
                        stock: 99,
                        level: 5
                    }))
                })
            }
        }],
        crypto: [{
                    name: "Choice ESP", // Made by minesraft2 Remade by Dannydan https://github.com/DannyDan0167
                    description: "Shows what each choice will give you",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                            let {
                                stateNode: e
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner, {
                                text: t
                            } = e.state.choices[0], a = document.querySelector("[class^=styles__feedbackContainer___]");
                            if (a.children.length <= 4) {
                                let o = document.createElement("div");
                                o.style.color = "white", o.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif", o.style.fontSize = "2em", o.style.display = "flex", o.style.justifyContent = "center", o.style.marginTop = "675px", o.innerText = t, a.append(o)
                            }
                        }, 50))
                    }
                }, {
    name: "Password ESP", // Made by minesraft2 Remade by DannyDan0167 https://github.com/DannyDan0167
    description: "Highlights the wrong passwords",
    type: "toggle",
    enabled: false,
    data: null,
    run: function() {
        try {
            let passwordESP = this;
            if (passwordESP.enabled) {
                passwordESP.enabled = false;
                clearInterval(passwordESP.data);
                passwordESP.data = null;
            } else {
                passwordESP.enabled = true;
                passwordESP.data = setInterval(() => {
                    let { state: e } = Object.values(function e(t = document.querySelector("#app > div > div")) {
                        return Object.values(t)[1]?.children?.[1]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }())[1].children[1]._owner.stateNode;
                    if ("hack" === e.stage) {
                        Array.from(document.querySelectorAll('[role="button"]._button_mrhfb_157')).forEach(button => {
                            if (button.textContent.trim() !== e.correctPassword.trim()) {
                                button.style.outlineColor = "rgba(255, 64, 64, 0.8)";
                                button.style.backgroundColor = "rgba(255, 64, 64, 0.8)";
                                button.style.textShadow = "0 0 1px #f33";
                            } else {
                                button.style.outlineColor = "";
                                button.style.backgroundColor = "";
                                button.style.textShadow = "";
                            }
                        });
                    }
                }, 50);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
                }, { // 01000001 01101110 01110100 01101001 00101101 01010011 01101011 01101001 01100100 00100000 01100010 01111001 00100000 01000100 01100001 01101110 01101110 01111001 01000100 01100001 01101110 00110000 00110001 00110110 00110111 00100000 01101111 01101110 00100000 01100111 01101001 01110100 01101000 01110101 01100010
            name: "Always Triple",
            description: "Always get triple crypto",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    choices: [{
                        type: "mult",
                        val: 3,
                        rate: .075,
                        blook: "Brainy Bot",
                        text: "Triple Crypto"
                    }]
                }), 50))
            }
        }, {
                    name: "Always Hack", // By DannyDan0167 https://github.com/DannyDan0167
                    description: "Always get hack",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            choices: [{
                                type: "hack",
                                val: 3,
                                rate: .075,
                                blook: "Mega Bot",
                                text: "HACK"
                            }]
                        }), 50))
                    }
                },{
            name: "Crash Password", // By Cryptodude3 https://github.com/cryptodude3  Check out his YT https://www.youtube.com/@crypto.7562
    description: "Crashes other players when they attempt to hack you",
    type: "toggle",
    enabled: false,
    data: null,
    run: function() {
        var stateNode = Object.values((function react(r = document.querySelector("#app")) {
                return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                })())[1].children[0]._owner.stateNode;
        if (this.enabled) {
            this.enabled = false;
            clearInterval(this.data);
            this.data = null;
            stateNode.props.liveGameController.setVal({
                    path: `c/${stateNode.props.client.name}/p`,
                    val: stateNode.state?.password
                });
        } else {
            this.enabled = true;
            let crashPass = () => {
                stateNode.props.liveGameController.setVal({
                    path: `c/${stateNode.props.client.name}/p/toString`,
                    val: "crash"
                });
            };
            this.data = setInterval(crashPass, 25);
        }
    }
},{
    name: "Auto Guess", //Made by minesraft2 Remade by Dannydan https://github.com/DannyDan0167
    description: "Automatically performs the hack for you",
    type: "toggle",
    enabled: false,
    data: null,
    run: function() {
        try {
            let autoHack = this;
            if (autoHack.enabled) {
                autoHack.enabled = false;
                clearInterval(autoHack.data);
                autoHack.data = null;
            } else {
                autoHack.enabled = true;
                autoHack.data = setInterval(() => {
                    let autoPassword = true; // Always true

                    let reactHandler = () => Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;

                    if (getSite() === 'hack' && autoPassword) {
                        let { stage, correctPassword } = reactHandler().stateNode.state;
                        if (stage === 'hack') {
                            Array.from(document.querySelectorAll('div')).filter(x => x.innerHTML === correctPassword)[0].click();
                        }
                    }

                    function getSite() {
                        switch (window.location.pathname.split('/')[2]) {
                            case 'hack': return 'hack';
                            default: return false;
                        }
                    }
                }, 50);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
                }, {
            name: "Remove Hack",
            description: "Removes an attacking hack",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    hack: ""
                })
            }
        }, {
            name: "Set Crypto",
            description: "Sets crypto",
            inputs: [{
                name: "Amount",
                type: "number"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                    crypto: e,
                    crypto2: e
                }), t.props.liveGameController.setVal({
                    path: "c/".concat(t.props.client.name),
                    val: {
                        b: t.props.client.blook,
                        p: t.state.password,
                        cr: e
                    }
                })
            }
        }, {
            name: "Set Password",
            description: "Sets hacking password",
            inputs: [{
                name: "Custom Password",
                type: "string"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                    password: e
                }), t.props.liveGameController.setVal({
                    path: "c/".concat(t.props.client.name),
                    val: {
                        b: t.props.client.blook,
                        p: e,
                        cr: t.state.crypto
                    }
                })
            }
        }, {
              name: "Set Screen Text", // By Cryptodude3 https://github.com/cryptodude3  Check out his YT https://www.youtube.com/@crypto.7562
    description: "Makes the whole screen filled with text",
    inputs: [{
        name: "Text",
        type: "text",
        placeholder: "Enter the text you want to display"
    }],
    run: function(text) {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.prompt = i.contentWindow.prompt.bind(window);
        i.remove();
        
        var stateNode = Object.values((function react(r = document.querySelector("#app")) {
            return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"));
        })())[1].children[0]._owner.stateNode;
        
        var textArray = [];
        for (let i = 0; i < 999; i++) {
            textArray.push(text);
        }
        
        stateNode.props.liveGameController.setVal({
            path: `c/${stateNode.props.client.name}/cr`,
            val: `9999999999999999999999999999999999999999999999${textArray.join(" ")}`
        });
    }
},{
            name: "Steal Player's Crypto",
            description: "Steals all of someone's crypto",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
                }
            }],
            run: function(e) {
                let t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.props.liveGameController.getDatabaseVal("c", a => {
                    var o;
                    a && Object.keys(a).map(e => e.toLowerCase()).includes(e.toLowerCase()) && ([a, {
                        cr: o
                    }] = Object.entries(a).find(([t]) => t.toLowerCase() == e.toLowerCase()), t.setState({
                        crypto: t.state.crypto + o,
                        crypto2: t.state.crypto + o
                    }), t.props.liveGameController.setVal({
                        path: "c/".concat(t.props.client.name),
                        val: {
                            b: t.props.client.blook,
                            p: t.state.password,
                            cr: t.state.crypto + o,
                            tat: a + ":" + o
                        }
                    }))
                })
            }
        }],
        defense: [{
            name: "Earthquake",
            description: "Shuffles around towers",
            run: function() {
                let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode,
                    t = (e.setState({
                        eventName: "Earthquake",
                        event: {
                            short: "e",
                            color: "#805500",
                            icon: "fas fa-mountain",
                            desc: "All of your towers get mixed up",
                            rate: .02
                        },
                        buyTowerName: "",
                        buyTower: {}
                    }, () => e.eventTimeout = setTimeout(() => e.setState({
                        event: {},
                        eventName: ""
                    }), 6e3)), e.tiles.forEach(e => e.forEach((t, a) => 3 === t && (e[a] = 0))), e.tiles.flatMap((e, t) => e.map((e, a) => 0 === e && {
                        x: a,
                        y: t
                    })).filter(Boolean).sort(() => .5 - Math.random()));
                e.towers.forEach(a => {
                    var {
                        x: o,
                        y: i
                    } = t.shift();
                    a.move(o, i, e.tileSize), e.tiles[i][o] = 3
                })
            }
        }, {
            name: "Max Tower Stats",
            description: "Makes all placed towers overpowered",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.towers.forEach(e => {
                    e.range = 100, e.fullCd = e.cd = 0, e.damage = 1e6
                })
            }
        }, {
            name: "Remove Ducks",
            description: "Removes ducks",
            run: function() {
                let {
                    ducks: e,
                    tiles: t
                } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e.forEach(e => {
                    t[e.y][e.x] = 0
                }), e.length = 0
            }
        }, {
            name: "Remove Enemies",
            description: "Removes all the enemies",
            run: function() {
                var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e.enemies = e.futureEnemies = []
            }
        }, {
            name: "Remove Obstacles",
            description: "Lets you place towers anywhere",
            run: function() {
                var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e.tiles = e.tiles.map(e => e.fill(0))
            }
        }, {
            name: "Set Damage",
            description: "Sets damage",
            inputs: [{
                name: "Damage",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.dmg = e
            }
        }, {
            name: "Set Round",
            description: "Sets the current round",
            inputs: [{
                name: "Round",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    round: e
                })
            }
        }, {
            name: "Set Tokens",
            description: "Sets the amount of tokens you have",
            inputs: [{
                name: "Tokens",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    tokens: e
                })
            }
        }],
        defense2: [{
            name: "Max Tower Stats",
            description: "Makes all placed towers overpowered",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.state.towers.forEach(e => {
                    if (e.stats.dmg = 1e6, e.stats.fireRate = 50, e.stats.ghostDetect = !0, e.stats.maxTargets = 1e6, e.stats.numProjectiles &&= 100, e.stats.range = 100, e.stats.auraBuffs)
                        for (let t in e.stats.auraBuffs) e.stats.auraBuffs[t] *= 100
                })
            }
        }, {
            name: "Kill Enemies",
            description: "Kills all the enemies",
            run: function() {
                var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e.game.current.scene.scenes[0].enemyQueue.length = 0, e.game.current.scene.scenes[0].physics.world.bodies.entries.forEach(e => e?.gameObject?.receiveDamage?.(e.gameObject.hp, 1))
            }
        }, {
            name: "Set Coins",
            description: "Sets coins",
            inputs: [{
                name: "Coins",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    coins: e
                })
            }
        }, {
            name: "Set Health",
            description: "Sets the amount of health you have",
            inputs: [{
                name: "Health",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    health: e
                })
            }
        }, {
            name: "Set Round",
            description: "Sets the current round",
            inputs: [{
                name: "Round",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    round: e
                })
            }
        }],
        dinos: [{
                    name: "Auto Choose",          
                    description: "Automatically choose the best fossil when excavating",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    rand(e, t) {
                        const s = [];
                        while (s.length < t) {
                            const i = Math.random();
                            let r = 0, g = null;
                            for (let o = 0; o < e.length; o++) {
                                r += e[o].rate;
                                if (r >= i) {
                                    g = e[o];
                                    break;
                                }
                            }
                            g && !s.includes(g) && s.push(g)
                        }
                        return s;
                    },
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            const getFossils = () => this.rand([{ type: "fossil", val: 10, rate: .1, blook: "Amber" }, { type: "fossil", val: 25, rate: .1, blook: "Dino Egg" }, { type: "fossil", val: 50, rate: .175, blook: "Dino Fossil" }, { type: "fossil", val: 75, rate: .175, blook: "Stegosaurus" }, { type: "fossil", val: 100, rate: .15, blook: "Velociraptor" }, { type: "fossil", val: 125, rate: .125, blook: "Brontosaurus" }, { type: "fossil", val: 250, rate: .075, blook: "Triceratops" }, { type: "fossil", val: 500, rate: .025, blook: "Tyrannosaurus Rex" }, { type: "mult", val: 1.5, rate: .05 }, { type: "mult", val: 2, rate: .025 }], 3);
                            this.data = setInterval(() => {
                                try {
                                    let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                                    if (stateNode.state.stage === "excavate") {
                                        stateNode.state.choices.length || (stateNode.state.choices = getFossils());
                                        let max = 0, index = -1;
                                        for (let i = 0; i < stateNode.state.choices.length; i++) {
                                            const { type, val } = stateNode.state.choices[i];
                                            const value = (type == "fossil" ? stateNode.state.fossils + val * stateNode.state.fossilMult : stateNode.state.fossils * val) || 0;
                                            if (value <= max && type != "mult") continue;
                                            max = value, index = i + 1;
                                        }
                                        document.querySelector('div[class^="styles__rockRow"] > div[role="button"]:nth-child(' + index + ')').click();
                                    }
                                } catch { }
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    }
                },
                {
                    name: "Rock ESP",
                    description: "Shows what is under the rocks",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        const exps = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
                        const getExpAscii = (num) => {
                            let res = "";
                            while (num > 0) {
                                res = exps[num % 10] + res;;
                                num = ~~(num / 10);
                            }
                            return res;
                        };
        
                        const shortNum = (value) => {
                            let newValue = value.toString();
                            if (value >= 1000) {
                                const suffixes = ["", "K", "M", "B", "T"];
                                const suffixNum = ~~((digits(value) - 1) / 3);
                                if (suffixNum < suffixes.length) {
                                    let shortValue = "";
                                    for (let precision = 3; precision >= 1; precision--) {
                                        shortValue = parseFloat((suffixNum !== 0 ? value / 1000 ** suffixNum : value).toPrecision(precision)).toString();
                                        const dotLessShortValue = shortValue.replace(/[^a-zA-Z 0-9]+/g, "");
                                        if (dotLessShortValue.length <= 3) break;
                                    }
                                    if (Number(shortValue) % 1 !== 0) shortValue = Number(shortValue).toFixed(1);
                                    newValue = shortValue + suffixes[suffixNum];
                                } else {
                                    let num = value;
                                    let exp = 0;
                                    while (num >= 100) {
                                        num = Math.floor(num / 10);
                                        exp += 1;
                                    }
                                    newValue = `${num / 10} × 10${getExpAscii(exp + 1)}`;
                                }
                            }
                            return newValue;
                        };
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                                const rocks = [...document.querySelector('[class*="rockButton"]').parentElement.children];
                                if (!rocks.every(element => element.querySelector('div'))) stateNode.setState({
                                    choices: [{ type: "fossil", val: 10, rate: .1, blook: "Amber" }, { type: "fossil", val: 25, rate: .1, blook: "Dino Egg" }, { type: "fossil", val: 50, rate: .175, blook: "Dino Fossil" }, { type: "fossil", val: 75, rate: .175, blook: "Stegosaurus" }, { type: "fossil", val: 100, rate: .15, blook: "Velociraptor" }, { type: "fossil", val: 125, rate: .125, blook: "Brontosaurus" }, { type: "fossil", val: 250, rate: .075, blook: "Triceratops" }, { type: "fossil", val: 500, rate: .025, blook: "Tyrannosaurus Rex" }, { type: "mult", val: 1.5, rate: .05 }, { type: "mult", val: 2, rate: .025 }].sort(() => 0.5 - Math.random()).slice(0, 3)
                                }, () => {
                                    rocks.forEach((element, index) => {
                                        const rock = stateNode.state.choices[index];
                                        if (element.querySelector('div')) element.querySelector('div').remove();
                                        const choice = document.createElement("div");
                                        choice.style.color = "white";
                                        choice.style.fontFamily = "Macondo";
                                        choice.style.fontSize = "1em";
                                        choice.style.display = "flex";
                                        choice.style.justifyContent = "center";
                                        choice.style.transform = "translateY(25px)";
                                        choice.innerText = rock.type === "fossil" ? `+${Math.round(rock.val * stateNode.state.fossilMult) > 99999999 ? shortNum(Math.round(rock.val * stateNode.state.fossilMult)) : Math.round(rock.val * stateNode.state.fossilMult)} Fossils` : `x${rock.val} Fossils Per Excavation`;;
                                        element.append(choice);
                                    });
                                });
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    }
                },
                {
            name: "Set Fossils",
            description: "Sets the amount of fossils you have",
            inputs: [{
                name: "Fossils",
                type: "number"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                    fossils: e
                }), t.props.liveGameController.setVal({
                    path: "c/" + t.props.client.name,
                    val: {
                        b: t.props.client.blook,
                        f: e,
                        ic: t.state.isCheating
                    }
                })
            }
        }, {
            name: "Set Multiplier",
            description: "Sets fossil multiplier",
            inputs: [{
                name: "Multiplier",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    fossilMult: e
                })
            }
        }, {
            name: "Stop Cheating",
            description: "Undoes cheating so that you can't be caught",
            run: function() {
                var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e.setState({
                    isCheating: !1
                }), e.props.liveGameController.setVal({
                    path: `c/${e.props.client.name}/ic`,
                    val: !1
                })
            }
        }], // THIS IS AN ANTI-SKID MEASURE! THIS IS MADE BY DannyDan0167 https://github.com/DannyDan0167/Blooket-Cheats DO NOT TOUCH/MODIFY
        doom: [{
                    name: "Fill Deck",
                    description: "Fills your deck with every maxed out card and artifact (Only works on towers page)",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        if (window.location.pathname == "/tower/map") {
                            const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                            stateNode.props.tower.artifacts = "Medical Kit|Fury Relic|Survival Guide|Steel Socks|Piggy Bank|Lucky Feather|Coupon|Cheese|Tasty Egg|Training Weights|Mighty Shield|Toxic Waste|Lifeline Totem|Cursed Hourglass|Band-Aid|Elder Coins|Captain's Anchor|Chess Pieces|Pink Hippo|Anorak's Wizard Cap|Dave's Doggo|Anubis' Obelisk|Farm Tractor|Magic Seedling|Just A Bone|Cozy Igloo|King's Crown|Sacred Scroll".split("|");
                            stateNode.props.tower.cards = 'Chick,🌽|Chicken,🌽|Cow,🌽|Goat,🌽|Horse,🌽|Pig,🌽|Sheep,🌽|Duck,🌽|Dog,🌽|Cat,🐾|Rabbit,🐾|Goldfish,🐾|Hamster,🐾|Turtle,🐾|Kitten,🐾|Puppy,🐾|Bear,🌲|Moose,🌲|Fox,🌲|Raccoon,🌲|Squirrel,🌲|Owl,🌲|Hedgehog,🌲|Baby Penguin,❄️|Penguin,❄️|Arctic Fox,❄️|Snowy Owl,❄️|Polar Bear,❄️|Arctic Hare,❄️|Seal,❄️|Walrus,❄️|Tiger,🌴|Panther,🌴|Cockatoo,🌴|Orangutan,🌴|Anaconda,🌴|Macaw,🌴|Jaguar,🌴|Capuchin,🌴|Toucan,🌴|Parrot,🌴|Elf,⚔️|Witch,⚔️|Wizard,⚔️|Fairy,⚔️|Slime Monster,⚔️|Jester,⚔️|Dragon,⚔️|Unicorn,⚔️|Queen,⚔️|King,⚔️|Snow Globe,☃️|Holiday Gift,☃️|Hot Chocolate,☃️|Gingerbread Man,☃️|Gingerbread House,☃️|Holiday Wreath,☃️|Snowman,☃️|Santa Claus,☃️|Two of Spades,🏰|Eat Me,🏰|Drink Me,🏰|Alice,🏰|Queen of Hearts,🏰|Dormouse,🏰|White Rabbit,🏰|Cheshire Cat,🏰|Caterpillar,🏰|Mad Hatter,🏰|King of Hearts,🏰'.split("|").map(x => {
                                const [blook, c] = x.split(",");
                                return { strength: 20, charisma: 20, wisdom: 20, class: c, blook };
                            });
                            try { stateNode.props.addTowerNode(); } catch { }
                            stateNode.setState({ showDeck: false });
                        } else alert("You need to be on the map to run this cheat!");
                    }
                },
                {
            name: "Max Cards",
            description: "Maxes out all the cards in your deck",
            run: function() {
                var e = document.createElement("iframe");
                document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/tower/map" == window.location.pathname ? (e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode).props.tower.cards.forEach(e => {
                    e.strength = 20, e.charisma = 20, e.wisdom = 20
                }) : alert("You need to be on the map to run this cheat!")
            }
        }, {
            name: "Max Health",
            description: "Fills the player's health",
            run: function() {
                var e = document.createElement("iframe");
                document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/tower/battle" == window.location.pathname ? Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    myHealth: 100
                }) : alert("You need to be in battle to run this cheat!")
            }
        }, {
            name: "Max Card Stats",
            description: "Maxes out player's current card (Only works on attribute select page)",
            run: function() {
                var e = document.createElement("iframe"),
                    e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode;
                "select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({
                    myCard: {
                        ...e.state.myCard,
                        strength: 20,
                        charisma: 20,
                        wisdom: 20
                    }
                })
            }
        }, {
            name: "Min Enemy Stats",
            description: "Makes the enemy card stats all 0 (Only works on attribute select page)",
            run: function() {
                var e = document.createElement("iframe"),
                    e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode;
                "select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({
                    enemyCard: {
                        ...e.state.enemyCard,
                        strength: 0,
                        charisma: 0,
                        wisdom: 0
                    }
                })
            }
        }, {
            name: "Set Coins",
            description: "Try's to set amount of tower coins you have",
            inputs: [{
                name: "Coins",
                type: "number"
            }],
            run: function(e) {
                var t = document.createElement("iframe");
                if (document.body.append(t), window.alert = t.contentWindow.prompt.bind(window), t.remove(), "/tower/battle" == window.location.pathname) {
                    var t = parseInt("0" + alert("How many coins would you like?")),
                        a = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                    try {
                        a.props.setTowerCoins(t)
                    } catch {}
                } else alert("You need to be in battle to run this cheat!")
            }
        },{
            name: "Set Streak",
            description: "Sets your streak to the desired amount",
            inputs: [{
                name: "Streak",
                type: "number"
            }],
            run: function(str) {
                var e = document.createElement("iframe");
                document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/tower/battle" == window.location.pathname ? Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    myStreak:!0,
                    streak:str
                }) : alert("You need to be in battle to run this cheat!")
            }
        }],
        factory: [{
                    name: "Choose Blook",
                    description: "Gives you a blook",
                    inputs: [{
                        name: "Blook",
                        type: "options",
                        options: [{name:"Chick",color:"#ffcd05",class:"\uD83C\uDF3D",rarity:"Common",cash:[3,7,65,400,2500],time:[1,1,1,1,1],price:[300,3e3,3e4,2e5]},{name:"Chicken",color:"#ed1c24",class:"\uD83C\uDF3D",rarity:"Common",cash:[10,40,200,1400,1e4],time:[5,4,3,2,1],price:[570,4e3,5e4,8e5]},{name:"Cow",color:"#58595b",class:"\uD83C\uDF3D",rarity:"Common",cash:[25,75,1500,25e3,25e4],time:[15,10,10,10,5],price:[500,9500,16e4,4e6]},{name:"Duck",color:"#4ab96d",class:"\uD83C\uDF3D",rarity:"Common",cash:[4,24,200,3e3,4e4],time:[3,3,3,3,3],price:[450,4200,7e4,11e5]},{name:"Goat",color:"#c59a74",class:"\uD83C\uDF3D",rarity:"Common",cash:[5,28,200,1300,12e3],time:[3,3,2,2,2],price:[500,6400,45e3,5e5]},{name:"Horse",color:"#995b3c",class:"\uD83C\uDF3D",rarity:"Common",cash:[5,20,270,1800,15e3],time:[2,2,2,2,2],price:[550,8200,65e3,6e5]},{name:"Pig",color:"#f6a9cb",class:"\uD83C\uDF3D",rarity:"Common",cash:[20,50,1300,8e3,8e4],time:[7,7,7,7,5],price:[400,11e3,8e4,13e5]},{name:"Sheep",color:"#414042",class:"\uD83C\uDF3D",rarity:"Common",cash:[6,25,250,1500,11e3],time:[3,3,3,2,2],price:[500,5e3,5e4,43e4]},{name:"Cat",color:"#f49849",class:"\uD83D\uDC3E",rarity:"Common",cash:[5,18,170,1700,13e3],time:[2,2,2,2,2],price:[480,5500,6e4,5e5]},{name:"Dog",color:"#995b3c",class:"\uD83D\uDC3E",rarity:"Common",cash:[7,25,220,1900,9e3],time:[3,3,2,2,1],price:[460,6600,7e4,73e4]},{name:"Goldfish",color:"#f18221",class:"\uD83D\uDC3E",rarity:"Common",cash:[5,40,350,3500,35e3],time:[3,3,3,3,3],price:[750,7200,84e3,95e4]},{name:"Rabbit",color:"#e7bf9a",class:"\uD83D\uDC3E",rarity:"Common",cash:[3,18,185,800,7e3],time:[2,2,2,1,1],price:[500,5800,56e3,55e4]},{name:"Hamster",color:"#ce9176",class:"\uD83D\uDC3E",rarity:"Common",cash:[10,45,450,4500,45e3],time:[4,4,4,4,4],price:[650,6500,8e4,93e4]},{name:"Turtle",color:"#619a3c",class:"\uD83D\uDC3E",rarity:"Common",cash:[23,120,1400,15e3,17e4],time:[10,10,10,10,10],price:[700,8500,11e4,13e5]},{name:"Puppy",color:"#414042",class:"\uD83D\uDC3E",rarity:"Common",cash:[4,10,75,500,3e3],time:[1,1,1,1,1],price:[450,4e3,35e3,25e4]},{name:"Kitten",color:"#58595b",class:"\uD83D\uDC3E",rarity:"Common",cash:[4,8,60,400,2e3],time:[1,1,1,1,1],price:[350,3500,26e3,17e4]},{name:"Bear",color:"#995b3c",class:"\uD83C\uDF32",rarity:"Common",cash:[12,70,550,4500,1e5],time:[7,7,6,5,5],price:[550,5500,63e3,16e5]},{name:"Moose",color:"#995b3c",class:"\uD83C\uDF32",rarity:"Common",cash:[8,45,400,3500,26e3],time:[5,5,4,4,3],price:[520,6500,58e3,7e5]},{name:"Fox",color:"#f49849",class:"\uD83C\uDF32",rarity:"Common",cash:[7,15,80,550,3e3],time:[2,2,1,1,1],price:[400,4e3,36e3,24e4]},{name:"Raccoon",color:"#6d6e71",class:"\uD83C\uDF32",rarity:"Common",cash:[5,14,185,1900,19e3],time:[2,2,2,2,2],price:[400,5e3,71e3,8e5]},{name:"Squirrel",color:"#d25927",class:"\uD83C\uDF32",rarity:"Common",cash:[3,10,65,470,2600],time:[1,1,1,1,1],price:[420,3600,32e3,21e4]},{name:"Owl",color:"#594a42",class:"\uD83C\uDF32",rarity:"Common",cash:[4,17,155,1500,15e3],time:[2,2,2,2,2],price:[500,4800,55e3,58e4]},{name:"Hedgehog",color:"#3f312b",class:"\uD83C\uDF32",rarity:"Common",cash:[11,37,340,2200,3e4],time:[5,4,3,2,2],price:[540,7e3,77e3,12e5]},{name:"Seal",color:"#7ca1d5",class:"❄️",rarity:"Common",cash:[6,17,150,1200,13e3],time:[2,2,2,2,2],price:[480,4500,43e3,52e4]},{name:"Arctic Fox",color:"#7ca1d5",class:"❄️",rarity:"Common",cash:[5,18,180,850,8500],time:[2,2,2,1,1],price:[520,550,61e3,68e4]},{name:"Snowy Owl",color:"#feda3f",class:"❄️",rarity:"Common",cash:[5,20,190,1900,16e3],time:[3,3,2,2,2],price:[370,5300,76e3,62e4]},{name:"Arctic Hare",color:"#7ca1d5",class:"❄️",rarity:"Common",cash:[6,19,85,900,7e3],time:[2,2,1,1,1],price:[540,5200,66e3,55e4]},{name:"Penguin",color:"#fb8640",class:"❄️",rarity:"Common",cash:[4,21,310,3200,33e3],time:[3,3,3,3,3],price:[400,6500,76e3,87e4]},{name:"Baby Penguin",color:"#414042",class:"❄️",rarity:"Common",cash:[3,8,70,450,2700],time:[1,1,1,1,1],price:[420,3300,33e3,23e4]},{name:"Polar Bear",color:"#7ca1d5",class:"❄️",rarity:"Common",cash:[12,75,700,6500,85e3],time:[8,7,6,5,5],price:[630,7e3,91e3,14e5]},{name:"Walrus",color:"#7d4f33",class:"❄️",rarity:"Common",cash:[11,46,420,3700,51e3],time:[5,5,4,4,4],price:[550,6200,68e3,1e6]},{name:"Tiger",color:"#f18221",class:"\uD83C\uDF34",rarity:"Common",cash:[6,20,100,975,7500],time:[3,3,1,1,1],price:[390,6e3,7e4,61e4]},{name:"Jaguar",color:"#fbb040",class:"\uD83C\uDF34",rarity:"Common",cash:[8,28,230,1600,17e3],time:[3,3,2,2,2],price:[390,6e3,7e4,61e4]},{name:"Toucan",color:"#ffca34",class:"\uD83C\uDF34",rarity:"Common",cash:[9,20,175,625,3800],time:[2,2,2,1,1],price:[520,4800,42e3,3e5]},{name:"Cockatoo",color:"#7ca1d5",class:"\uD83C\uDF34",rarity:"Common",cash:[6,35,160,1700,18e3],time:[4,4,2,2,2],price:[500,5e3,63e3,7e5]},{name:"Macaw",color:"#00aeef",class:"\uD83C\uDF34",rarity:"Common",cash:[3,8,85,850,8500],time:[1,1,1,1,1],price:[480,5400,62e3,63e4]},{name:"Parrot",color:"#ed1c24",class:"\uD83C\uDF34",rarity:"Common",cash:[3,9,90,900,9e3],time:[1,1,1,1,1],price:[540,5700,65e3,69e4]},{name:"Panther",color:"#2f2c38",class:"\uD83C\uDF34",rarity:"Common",cash:[12,28,215,2100,21e3],time:[5,3,2,2,2],price:[530,6500,76e3,87e4]},{name:"Anaconda",color:"#8a9143",class:"\uD83C\uDF34",rarity:"Common",cash:[3,15,85,1500,7600],time:[1,2,1,2,1],price:[410,5100,58e3,59e4]},{name:"Orangutan",color:"#bc6234",class:"\uD83C\uDF34",rarity:"Common",cash:[13,52,570,4300,7e4],time:[5,5,5,4,4],price:[600,7e3,8e4,14e5]},{name:"Capuchin",color:"#e0b0a6",class:"\uD83C\uDF34",rarity:"Common",cash:[4,14,160,780,8200],time:[2,2,2,1,1],price:[390,4700,57e3,68e4]},{name:"Elf",color:"#a7d054",class:"⚔️",rarity:"Uncommon",cash:[5e3,15e3,15e4,15e5,1e7],time:[1,1,1,1,1],price:[8e5,9e6,11e7,8e8]},{name:"Witch",color:"#4ab96d",class:"⚔️",rarity:"Uncommon",cash:[18e3,6e4,4e4,4e6,35e6],time:[3,3,2,2,2],price:[11e5,12e6,15e7,14e8]},{name:"Wizard",color:"#5a459c",class:"⚔️",rarity:"Uncommon",cash:[19500,65e3,44e4,46e5,4e6],time:[3,3,2,2,2],price:[13e5,135e5,16e7,16e8]},{name:"Fairy",color:"#df6d9c",class:"⚔️",rarity:"Uncommon",cash:[18500,6e4,62e4,44e5,38e6],time:[3,3,3,2,2],price:[12e5,125e5,15e6,15e8]},{name:"Slime Monster",color:"#2fa04a",class:"⚔️",rarity:"Uncommon",cash:[35e3,14e4,1e6,11e6,11e7],time:[5,5,4,4,4],price:[16e5,15e6,2e8,23e8]},{name:"Jester",color:"#be1e2d",class:"⚔️",rarity:"Rare",cash:[25e3,1e5,68e4,65e5,32e6],time:[3,3,2,2,1],price:[2e6,21e6,23e7,26e8]},{name:"Dragon",color:"#2fa04a",class:"⚔️",rarity:"Rare",cash:[36e3,15e4,15e5,15e6,15e7],time:[4,4,4,4,4],price:[23e5,24e6,27e7,3e9]},{name:"Unicorn",color:"#f6afce",class:"⚔️",rarity:"Epic",cash:[24e3,15e4,14e5,7e6,75e6],time:[2,2,2,1,1],price:[45e5,45e6,55e7,65e8]},{name:"Queen",color:"#9e1f63",class:"⚔️",rarity:"Rare",cash:[24e3,95e3,95e4,97e5,95e6],time:[3,3,3,3,3],price:[19e5,2e7,23e7,25e8]},{name:"King",color:"#ee2640",class:"⚔️",rarity:"Legendary",cash:[75e3,4e5,6e6,9e7,125e7],time:[5,5,5,5,5],price:[6e6,95e6,16e8,25e9]},{name:"Two of Spades",color:"#414042",class:"\uD83C\uDFF0",rarity:"Uncommon",cash:[4500,14e3,14e4,14e5,9e6],time:[1,1,1,1,1],price:[77e4,83e5,98e6,71e7]},{name:"Eat Me",color:"#d58c55",class:"\uD83C\uDFF0",rarity:"Uncommon",cash:[13e3,45e3,45e4,45e5,5e7],time:[2,2,2,2,2],price:[13e5,14e6,16e7,2e9]},{name:"Drink Me",color:"#dd7399",class:"\uD83C\uDFF0",rarity:"Uncommon",cash:[12e3,4e4,4e5,4e6,45e6],time:[2,2,2,2,2],price:[12e5,12e6,14e7,18e8]},{name:"Alice",color:"#4cc9f5",class:"\uD83C\uDFF0",rarity:"Uncommon",cash:[13e3,42e3,21e4,21e5,23e6],time:[2,2,1,1,1],price:[12e5,13e6,15e7,19e8]},{name:"Queen of Hearts",color:"#d62027",class:"\uD83C\uDFF0",rarity:"Uncommon",cash:[23e3,87e3,62e4,75e5,9e7],time:[4,4,3,3,3],price:[13e5,13e6,18e7,24e8]},{name:"Dormouse",color:"#89d6f8",class:"\uD83C\uDFF0",rarity:"Rare",cash:[17e3,68e3,7e5,35e5,35e6],time:[2,2,1,1,1],price:[2e6,22e6,25e7,28e8]},{name:"White Rabbit",color:"#ffcd05",class:"\uD83C\uDFF0",rarity:"Rare",cash:[26e3,105e3,11e6,77e5,72e6],time:[3,3,3,2,2],price:[2e6,23e6,28e7,29e8]},{name:"Cheshire Cat",color:"#dd7399",class:"\uD83C\uDFF0",rarity:"Rare",cash:[32e3,1e5,9e5,9e6,6e7],time:[4,3,3,3,2],price:[18e5,19e6,22e7,24e8]},{name:"Caterpillar",color:"#00c0f3",class:"\uD83C\uDFF0",rarity:"Epic",cash:[1e4,7e4,65e4,75e5,85e6],time:[1,1,1,1,1],price:[42e5,42e6,54e7,69e8]},{name:"Mad Hatter",color:"#914f93",class:"\uD83C\uDFF0",rarity:"Epic",cash:[38e3,25e4,15e5,14e6,8e7],time:[3,3,2,2,1],price:[48e5,48e6,52e7,66e8]},{name:"King of Hearts",color:"#c62127",class:"\uD83C\uDFF0",rarity:"Legendary",cash:[8e4,42e4,68e5,1e8,15e8],time:[5,5,5,5,5],price:[7e6,11e7,18e8,3e10]},{name:"Earth",color:"#416eb5",class:"\uD83D\uDE80",rarity:"Uncommon",cash:[15e3,45e3,6e5,65e5,65e6],time:[3,3,3,3,3],price:[1e6,11e6,15e7,17e8]},{name:"Meteor",color:"#c68c3c",class:"\uD83D\uDE80",rarity:"Uncommon",cash:[23e3,65e3,7e5,45e5,2e7],time:[5,4,3,2,1],price:[95e4,13e6,16e7,16e8]},{name:"Stars",color:"#19184d",class:"\uD83D\uDE80",rarity:"Uncommon",cash:[1e4,4e4,2e5,2e6,18e6],time:[2,2,1,1,1],price:[14e5,14e6,15e7,15e8]},{name:"Alien",color:"#8dc63f",class:"\uD83D\uDE80",rarity:"Uncommon",cash:[3e4,1e5,1e6,11e6,85e6],time:[4,4,4,4,4],price:[15e5,17e6,19e7,17e8]},{name:"Planet",color:"#9dc6ea",class:"\uD83D\uDE80",rarity:"Rare",cash:[25e3,1e5,9e5,9e6,9e7],time:[3,3,3,3,3],price:[2e6,21e6,21e7,24e8]},{name:"UFO",color:"#a15095",class:"\uD83D\uDE80",rarity:"Rare",cash:[17e3,7e4,7e5,7e6,7e7],time:[2,2,2,2,2],price:[21e5,23e6,25e7,28e8]},{name:"Spaceship",color:"#ffcb29",class:"\uD83D\uDE80",rarity:"Epic",cash:[6e4,32e4,21e5,15e6,85e6],time:[5,4,3,2,1],price:[48e5,46e6,54e7,68e8]},{name:"Astronaut",color:"#9bd4ee",class:"\uD83D\uDE80",rarity:"Legendary",cash:[45e3,26e4,25e5,38e6,55e7],time:[3,3,2,2,2],price:[65e5,1e8,17e8,27e9]},{name:"Lil Bot",color:"#3e564a",class:"\uD83E\uDD16",rarity:"Uncommon",cash:[4e3,12e3,18e4,19e5,25e6],time:[1,1,1,1,1],price:[73e4,12e6,13e7,19e8]},{name:"Lovely Bot",color:"#f179af",class:"\uD83E\uDD16",rarity:"Uncommon",cash:[16e3,65e3,65e4,48e5,42e6],time:[3,3,3,2,2],price:[13e5,14e6,17e7,16e8]},{name:"Angry Bot",color:"#f1613a",class:"\uD83E\uDD16",rarity:"Uncommon",cash:[22e3,85e3,8e5,62e5,65e6],time:[4,4,4,3,3],price:[12e5,13e6,15e7,17e8]},{name:"Happy Bot",color:"#51ba6b",class:"\uD83E\uDD16",rarity:"Uncommon",cash:[11e3,45e3,5e5,25e5,3e7],time:[2,2,2,1,1],price:[14e5,15e6,18e7,24e8]},{name:"Watson",color:"#d69b5a",class:"\uD83E\uDD16",rarity:"Rare",cash:[24e3,1e5,1e6,1e7,1e8],time:[3,3,3,3,3],price:[2e6,22e6,24e7,26e8]},{name:"Buddy Bot",color:"#9dc6ea",class:"\uD83E\uDD16",rarity:"Rare",cash:[22e3,95e3,65e4,65e5,65e6],time:[3,3,2,2,2],price:[19e5,21e6,23e7,25e8]},{name:"Brainy Bot",color:"#9ecf7a",class:"\uD83E\uDD16",rarity:"Epic",cash:[5e4,25e4,21e5,21e6,17e7],time:[4,3,3,3,2],price:[5e6,46e6,5e8,67e8]},{name:"Mega Bot",color:"#d71f27",class:"\uD83E\uDD16",rarity:"Legendary",cash:[8e4,43e4,42e5,62e6,1e9],time:[5,5,3,3,3],price:[7e6,12e7,19e8,35e9]}].map(x => ({ name: x.name, value: JSON.stringify(x) }))
                    }],
                    run: function (blook) {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        if (stateNode.state.blooks.length >= 10) alert("Choose a blook to replace");
                        stateNode.chooseBlook(JSON.parse(blook));
                    }
                },
                {
            name: "Free Upgrades",
            description: "Sets upgrade prices to 0 for all current blooks",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState(e => ({
                    ...e,
                    blooks: e.blooks.map(e => ({
                        ...e,
                        price: [0, 0, 0, 0]
                    }))
                }))
            }
        }, {
            name: "Max Blooks",
            description: "Maxes out all your blooks' levels",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.state.blooks.forEach(e => e.level = 4)
            }
        }, {
            name: "Remove Glitches",
            description: "Removes all enemy glitches",
            run: function() {
                var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e.setState({
                    bits: 0,
                    ads: [],
                    hazards: [],
                    color: "",
                    lol: !1,
                    joke: !1,
                    slow: !1,
                    dance: !1,
                    glitch: "",
                    glitcherName: "",
                    glitcherBlook: ""
                }), clearTimeout(e.adTimeout), clearInterval(e.hazardInterval), clearTimeout(e.nightTimeout), clearTimeout(e.glitchTimeout), clearTimeout(e.lolTimeout), clearTimeout(e.jokeTimeout), clearTimeout(e.slowTimeout), clearTimeout(e.danceTimeout), clearTimeout(e.nameTimeout)
            }
        }, {
            name: "Send Glitch",
            description: "Sends a glitch to everyone else playing",
            inputs: [{
                name: "Glitch",
                type: "options",
                options: Object.entries({
                    lb: "Lunch Break",
                    as: "Ad Spam",
                    e37: "Error 37",
                    nt: "Night Time",
                    lo: "#LOL",
                    j: "Jokester",
                    sm: "Slow Mo",
                    dp: "Dance Party",
                    v: "Vortex",
                    r: "Reverse",
                    f: "Flip",
                    m: "Micro"
                }).map(([e, t]) => ({
                    name: t,
                    value: e
                }))
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.safe = !0, t.props.liveGameController.setVal({
                    path: `c/${t.props.client.name}/tat`,
                    val: e
                })
            }
        }, {
            name: "Set All MegaBot",
            description: "Sets all your blooks to maxed out Mega Bots",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    blooks: Array(10).fill({
                        name: "Mega Bot",
                        color: "#d71f27",
                        class: "\uD83E\uDD16",
                        rarity: "Legendary",
                        cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                        time: [5, 5, 3, 3, 3],
                        price: [7e6, 12e7, 19e8, 35e9],
                        active: !1,
                        level: 4,
                        bonus: 5.5
                    })
                })
            }
        }, {
            name: "Set Cash",
            description: "Sets amount of cash you have",
            inputs: [{
                name: "Cash",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    cash: e
                })
            }
        }],
        fishing: [{
            name: "Frenzy",
            description: "Sets everyone to frenzy mode",
            run: function() {
                var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e.props.liveGameController.setVal({
                    path: "c/" + e.props.client.name,
                    val: {
                        b: e.props.client.blook,
                        w: e.state.weight,
                        f: "Frenzy",
                        s: !0
                    }
                })
            }
        }, {
            name: "Remove Distractions",
            description: "Removes distractions",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                    Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                        party: ""
                    })
                }, 50))
            }
        }, {
            name: "Send Distraction",
            description: "Sends a distraction to everyone",
            inputs: [{
                name: "Distraction",
                type: "options",
                options: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"]
            }],
            run: function(e) {
                var t = document.createElement("iframe"),
                    t = (document.body.append(t), window.alert = t.contentWindow.alert.bind(window), t.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode;
                t.safe = !0, t.props.liveGameController.setVal({
                    path: "c/" + t.props.client.name,
                    val: {
                        b: t.props.client.blook,
                        w: t.state.weight,
                        f: e,
                        s: !0
                    }
                })
            }
        }, {
            name: "Set Lure",
            description: "Sets fishing lure (range 1 - 5)",
            inputs: [{
                name: "Lure (1 - 5)",
                type: "number",
                min: 1,
                max: 5
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    lure: Math.max(Math.min(e - 1, 4), 0)
                })
            }
        }, {
              name: "Set Next Fish",
    description: "Sets the next fish to catch",
    inputs: [{
        name: "Fish",
        type: "options",
        options: [
            "Old Boot", "Waffle", "Two of Spades", "Jellyfish", "Clownfish", "Goldfish",
            "Frog", "Blizzard Clownfish", "Turtle", "Cat", "Lovely Frog", "Lucky Frog",
            "Poison Dart Frog", "Seal", "Walrus", "Fairy", "Crab", "Lemon Crab",
            "Pufferfish", "Blobfish", "Rainbow Jellyfish", "Octopus", "Pirate Pufferfish",
            "Donut Blobfish", "Crimson Octopus", "Narwhal", "Baby Shark", "Megalodon",
            "Alien", "Rainbow Narwhal", "UFO", "Santa Claus", "Swamp Monster",
            "Red Astronaut", "Spooky Pumpkin", "Dragon", "Tim the Alien"
        ]
    }],
    run: function(fishToCatch) {
        function reactHandler() {
            return Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
        }

        var stuff = {
            "Old Boot": {
                rarity: "Trash",
                minWeight: 1,
                maxWeight: 10,
                tiers: ["F", "D", "C"]
            },
            Waffle: {
                rarity: "Trash",
                minWeight: 1,
                maxWeight: 10,
                tiers: ["F", "D", "C"]
            },
            "Two of Spades": {
                rarity: "Trash",
                minWeight: 1,
                maxWeight: 10,
                tiers: ["F", "D", "C"]
            },
            Jellyfish: {
                rarity: "Easy One",
                minWeight: 10,
                maxWeight: 25,
                tiers: ["D", "C", "B"]
            },
            Clownfish: {
                rarity: "Easy One",
                minWeight: 20,
                maxWeight: 45,
                tiers: ["D", "C", "B"]
            },
            Goldfish: {
                rarity: "Easy One",
                minWeight: 30,
                maxWeight: 65,
                tiers: ["D", "C", "B"]
            },
            Frog: {
                rarity: "Easy One",
                minWeight: 50,
                maxWeight: 100,
                tiers: ["D", "C", "B"]
            },
            "Blizzard Clownfish": {
                rarity: "Great Catch",
                minWeight: 75,
                maxWeight: 125,
                tiers: ["D", "C", "B"]
            },
            Turtle: {
                rarity: "Great Catch",
                minWeight: 100,
                maxWeight: 150,
                tiers: ["D", "C", "B", "A"]
            },
            Cat: {
                rarity: "Great Catch",
                minWeight: 100,
                maxWeight: 200,
                tiers: ["D", "C", "B", "A"]
            },
            "Lovely Frog": {
                rarity: "Great Catch",
                minWeight: 150,
                maxWeight: 350,
                tiers: ["D", "C", "B", "A"]
            },
            "Lucky Frog": {
                rarity: "Great Catch",
                minWeight: 200,
                maxWeight: 400,
                tiers: ["D", "C", "B", "A"]
            },
            "Poison Dart Frog": {
                rarity: "Great Catch",
                minWeight: 250,
                maxWeight: 750,
                tiers: ["D", "C", "B", "A"]
            },
            Seal: {
                rarity: "Rare Find",
                minWeight: 500,
                maxWeight: 1e3,
                tiers: ["D", "C", "B", "A"]
            },
            Walrus: {
                rarity: "Rare Find",
                minWeight: 700,
                maxWeight: 2200,
                tiers: ["D", "C", "B", "A"]
            },
            Fairy: {
                rarity: "Rare Find",
                minWeight: 1500,
                maxWeight: 2500,
                tiers: ["D", "C", "B", "A"]
            },
            Crab: {
                rarity: "Rare Find",
                minWeight: 1e3,
                maxWeight: 3e3,
                tiers: ["D", "C", "B", "A"]
            },
            "Lemon Crab": {
                rarity: "Rare Find",
                minWeight: 2e3,
                maxWeight: 5e3,
                tiers: ["C", "B", "A"]
            },
            Pufferfish: {
                rarity: "Rare Find",
                minWeight: 2e3,
                maxWeight: 4e3,
                tiers: ["D", "C", "B", "A"]
            },
            Blobfish: {
                rarity: "Rare Find",
                minWeight: 3e3,
                maxWeight: 5e3,
                tiers: ["D", "C", "B", "A"]
            },
            "Rainbow Jellyfish": {
                rarity: "Epic Grab",
                minWeight: 7e3,
                maxWeight: 1e4,
                tiers: ["C", "B", "A"]
            },
            Octopus: {
                rarity: "Epic Grab",
                minWeight: 1e4,
                maxWeight: 15e3,
                tiers: ["C", "B", "A"]
            },
            "Pirate Pufferfish": {
                rarity: "Epic Grab",
                minWeight: 12e3,
                maxWeight: 2e4,
                tiers: ["C", "B", "A"]
            },
            "Donut Blobfish": {
                rarity: "Epic Grab",
                minWeight: 13e3,
                maxWeight: 25e3,
                tiers: ["C", "B", "A"]
            },
            "Crimson Octopus": {
                rarity: "Epic Grab",
                minWeight: 15e3,
                maxWeight: 3e4,
                tiers: ["B", "A"]
            },
            Narwhal: {
                rarity: "Catch of the Day",
                minWeight: 25e3,
                maxWeight: 5e4,
                tiers: ["B", "A", "S"]
            },
            "Baby Shark": {
                rarity: "Catch of the Day",
                minWeight: 5e4,
                maxWeight: 1e5,
                tiers: ["B", "A", "S"]
            },
            Megalodon: {
                rarity: "Catch of the Day",
                minWeight: 25e4,
                maxWeight: 5e5,
                tiers: ["B", "A", "S"]
            },
            Alien: {
                rarity: "Angler's Legend",
                minWeight: 5e5,
                maxWeight: 7e5,
                tiers: ["A", "S"]
            },
            "Rainbow Narwhal": {
                rarity: "Angler's Legend",
                minWeight: 75e4,
                maxWeight: 1e6,
                tiers: ["A", "S", "S+"]
            },
            UFO: {
                rarity: "Angler's Legend",
                minWeight: 1e6,
                maxWeight: 2e6,
                tiers: ["A", "S", "S+"]
            },
            "Santa Claus": {
                rarity: "Angler's Legend",
                minWeight: 1e6,
                maxWeight: 2e6,
                tiers: ["A", "S", "S+"]
            },
            "Swamp Monster": {
                rarity: "Angler's Legend",
                minWeight: 1e6,
                maxWeight: 2e6,
                tiers: ["A", "S", "S+"]
            },
            "Red Astronaut": {
                rarity: "Angler's Legend",
                minWeight: 1e6,
                maxWeight: 2e6,
                tiers: ["A", "S", "S+"]
            },
            "Spooky Pumpkin": {
                rarity: "Angler's Legend",
                minWeight: 1e6,
                maxWeight: 2e6,
                tiers: ["A", "S", "S+"]
            },
            Dragon: {
                rarity: "Angler's Legend",
                minWeight: 1e6,
                maxWeight: 2e6,
                tiers: ["A", "S", "S+"]
            },
            "Tim the Alien": {
                rarity: "Angler's Legend",
                minWeight: 15e5,
                maxWeight: 25e5,
                tiers: ["A", "S", "S+"]
            }
        };

        var specialFish = ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"];

        function getFish(fish) {
            function rand(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            }
            return {
                name: fish,
                rarity: stuff[fish].rarity,
                weight: rand(stuff[fish].minWeight, stuff[fish].maxWeight),
                tier: stuff[fish].tiers[Math.floor(Math.random() * stuff[fish].tiers.length)],
                isSpecial: specialFish.includes(fish) && Math.floor(Math.random() * 100) < 8
            };
        }

        if (!window.functionSet) {
            var origAns = reactHandler().stateNode.answerNext;
            reactHandler().stateNode.answerNext = function() {
                if (reactHandler().stateNode.state.hackFish) {
                    reactHandler().stateNode.setState({
                        stage: "caught",
                        isCast: false,
                        fish: getFish(fishToCatch),
                        claimReady: false
                    });
                    setTimeout(function() {
                        reactHandler().stateNode.setState({
                            claimReady: true
                        })
                    }, 1600);
                    reactHandler().stateNode.state.hackFish = null;
                } else {
                    origAns.apply(this, arguments);
                }
            }
        }
        window.functionSet = true;

        function setHackFish(val) {
            if (Object.keys(stuff).includes(val)) {
                reactHandler().stateNode.state.hackFish = val;
            } else {
                alert("That fish does not exist!");
                return;
            }
        }
        setHackFish(fishToCatch);
    }
},{
            name: "Set Weight",
            description: "Sets weight",
            inputs: [{
                name: "Weight",
                type: "number"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                    weight: e,
                    weight2: e
                }), t.props.liveGameController.setVal({
                    path: "c/" + t.props.client.name,
                    val: {
                        b: t.props.client.blook,
                        w: e,
                        f: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(9 * Math.random())]
                    }
                })
            }
        }],
        flappy: [{
            name: "Toggle Ghost",
            description: "Lets you go through the pipes",
            type: "toggle",
            enabled: !1,
            run: function() {
                this.enabled = !this.enabled, Object.values(document.querySelector("#phaser-bouncy"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.bodies.entries.forEach(e => e.gameObject.frame.texture.key.startsWith("blook") && (e.checkCollision.none = this.enabled, e.gameObject.setAlpha(this.enabled ? .5 : 1)))
            }
        }, {
            name: "Set Score",
            description: "Sets flappy blook score",
            inputs: [{
                name: "Score",
                type: "number"
            }], // 
            run: function(e) {
                Object.values(document.querySelector("#phaser-bouncy"))[1].children[0]._owner.stateNode.setState({
                    score: e
                })
            }
        }],
        gold: [{
            name: "Always Triple",
            description: "Always get triple gold",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e._choosePrize ||= e.choosePrize, this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null, e.choosePrize = e._choosePrize || e.choosePrize) : (this.enabled = !0, this.data = setInterval(() => {
                    e.choosePrize = function(t) {
                        e.state.choices[t] = {
                            type: "multiply",
                            val: 3,
                            text: "Triple Gold!",
                            blook: "Unicorn"
                        }, e._choosePrize(t)
                    }
                }, 50))
            }
        }, {
            name: "Auto Choose",
            description: "Automatically picks the option that would give you the most gold",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(async () => {
                    try {
                        let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        if ("prize" === e.state.stage) {
                            var t = Object.entries(await new Promise(t => e.props.liveGameController.getDatabaseVal("c", e => e && t(e))) || []).filter(t => t[0] != e.props.client.name).sort((e, t) => t[1].g - e[1].g)[0]?.[1]?.g || 0;
                            let a = 0;
                            index = -1;
                            for (let o = 0; o < e.state.choices.length; o++) {
                                var {
                                    type: i,
                                    val: r
                                } = e.state.choices[o];
                                let s = e.state.gold;
                                switch (i) {
                                    case "gold":
                                        s = e.state.gold + r || e.state.gold;
                                        break;
                                    case "multiply":
                                    case "divide":
                                        s = Math.round(e.state.gold * r) || e.state.gold;
                                        break;
                                    case "swap":
                                        s = t || e.state.gold;
                                    case "take":
                                        s = e.state.gold + t * r || e.state.gold
                                }(s || 0) <= a || (a = s, index = o + 1)
                            }
                            document.querySelector(`div[class^='styles__choice${index}']`).click()
                        }
                    } catch {}
                }, 50))
            }
        }, {
            name: "Chest ESP", // Made by minesraft2 Remade by DannyDan0167 https://github.com/DannyDan0167
    description: "Shows what each chest will give you",
    type: "toggle",
    enabled: false,
    data: null,
    run: function() {
        let chestESP = this;

        if (chestESP.enabled) {
            clearInterval(chestESP.data);
            chestESP.data = null;
            chestESP.enabled = false;
        } else {
            chestESP.enabled = true;
            chestESP.data = setInterval(() => {
                let curPage = getSite();
                if (curPage === 'gold' && chestESP.enabled) {
                    try {
                        if (reactHandler().stateNode.state.stage === 'prize') {
                            let { choices } = reactHandler().stateNode.state;
                            let div = document.querySelector("div[class*='regularBody']").children[1];
                            if (div) {
                                if (!document.querySelectorAll(".chest-esp").length) {
                                    choices.forEach((box, i) => {
                                        textElement = document.createElement('p');
                                        textElement.className = "chest-esp";
                                        textElement.innerText = box.text;
                                        textElement.style = `text-align: center; font-size: 30px; color: white; font-family:Titan One, sans-serif; border-color: black; margin-top: 200px;`;
                                        try { div.children[i].appendChild(textElement); } catch (e) { console.log(e); }
                                    });
                                } else {
                                    choices.forEach((box, i) => {
                                        if (div.children.length == 3 && div.children[i].children[1].innerText != box.text) {
                                            div.children[i].children[1].innerText = box.text;
                                        }
                                    });
                                }
                            }
                        }
                    } catch (e) { console.log(e); }
                }
            }, 50); 
        }

        function getSite(capitalize) {
            switch (window.location.pathname.split('/')[2]) {
                case 'gold': return capitalize ? 'Gold Quest' : 'gold';
                default: return false;
            }
        }

        function reactHandler() {
            return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
        }
    }
},{
        name: "Remove Lose 25%-50%", // Made by DannyDan0167
    description: "Removes Lose 25%-50% chests",
    type: "toggle",
    enabled: false,
    data: null,
    run: function() {
        let antiLose = this;
        let chestESP = this;

        if (antiLose.enabled || chestESP.enabled) {
            clearInterval(antiLose.data);
            clearInterval(chestESP.data);
            antiLose.data = null;
            chestESP.data = null;
            antiLose.enabled = false;
            chestESP.enabled = false;
        } else {
            antiLose.enabled = true;
            chestESP.enabled = true;
            antiLose.data = setInterval(() => {
                let buttons = document.querySelectorAll('div[role="button"]');
                buttons.forEach(button => {
                    if (button.innerText === "Lose 25%" || button.innerText === "Lose 50%") {
                        button.style.display = "none";
                    }
                });
            }, 50);
            chestESP.data = setInterval(() => {
                let curPage = getSite();
                if (curPage === 'gold' && chestESP.enabled) {
                    try {
                        if (reactHandler().stateNode.state.stage === 'prize') {
                            let { choices } = reactHandler().stateNode.state;
                            let div = document.querySelector("div[class*='regularBody']").children[1];
                            if (div) {
                                if (!document.querySelectorAll(".chest-esp").length) {
                                    choices.forEach((box, i) => {
                                        textElement = document.createElement('p');
                                        textElement.className = "chest-esp";
                                        textElement.innerText = box.text;
                                        textElement.style = `text-align: center; font-size: 30px; color: white; font-family:Titan One, sans-serif; border-color: black; margin-top: 200px; opacity: 0;`;
                                        try { div.children[i].appendChild(textElement); } catch (e) { console.log(e); }
                                    });
                                } else {
                                    choices.forEach((box, i) => {
                                        if (div.children.length == 3 && div.children[i].children[1].innerText != box.text) {
                                            div.children[i].children[1].innerText = box.text;
                                        }
                                    });
                                }
                            }
                        }
                    } catch (e) { console.log(e); }
                }
            }, 50); 
        }

        function getSite(capitalize) {
            switch (window.location.pathname.split('/')[2]) {
                case 'gold': return capitalize ? 'Gold Quest' : 'gold';
                default: return false;
            }
        }

        function reactHandler() {
            return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
        }
    }
                }, {
            name: "Reset Players Gold",
            description: "Sets a player's gold to 0",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
                }
            }],
            run: function(e) {
                var {
                    props: t,
                    state: a
                } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.liveGameController.setVal({
                    path: "c/".concat(t.client.name),
                    val: {
                        b: t.client.blook,
                        g: a.gold,
                        tat: e + ":swap:0"
                    }
                })
            }
        }, {
            name: "Set Gold",
            description: "Sets amount of gold",
            inputs: [{
                name: "Gold",
                type: "number"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                    gold: e,
                    gold2: e
                }), t.props.liveGameController.setVal({
                    path: "c/".concat(t.props.client.name),
                    val: {
                        b: t.props.client.blook,
                        g: e
                    }
                })
            }
        }, {
            name: "Swap Gold",
            description: "Swaps gold with someone",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
                }
            }],
            run: function(e) {
                let t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.props.liveGameController.getDatabaseVal("c", a => {
                    a?.[e] && (a = a[e].g, t.props.liveGameController.setVal({
                        path: "c/".concat(t.props.client.name),
                        val: {
                            b: t.props.client.blook,
                            g: a,
                            tat: e + ":swap:" + t.state.gold
                        }
                    }), t.setState({
                        gold: a,
                        gold2: a
                    }))
                })
            }
        }, {
            name: "Reset All Players' Gold",
            description: "Set's everyone else's gold to 0",
            run: function() {
                var e = document.createElement("iframe");
                document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove();
                let {
                    props: t,
                    state: a
                } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode, o = 0;
                t.liveGameController.getDatabaseVal("c", async e => {
                    if (e)
                        for (let i of Object.keys(e)) t.liveGameController.setVal({
                            path: "c/".concat(t.client.name),
                            val: {
                                b: t.client.blook,
                                g: a.gold,
                                tat: i + ":swap:0"
                            }
                        }), o++, await new Promise(e => setTimeout(e, 4e3));
                    alert(`Reset ${o} players' gold!`)
                })
            }
        }],
        kingdom: [{
    name: "Choice ESP", // Made by minesraft2 Remade by DannyDan0167 https://github.com/DannyDan0167
    description: "Shows you what will happen if you say Yes or No",
    type: "toggle",
    enabled: false,
    data: null,
    run: function() {
        let choiceEspElements = {};
        let choiceEsp = this;

        function handleChoiceEsp() {
            if (choiceEsp.enabled) {
               
                choiceEsp.data = setInterval(() => {
                    try {
                        let elements = {
                            materials: Array.from(document.querySelectorAll('div')).find(x => Array.from(x.children).find(e => e.className.includes('tree'))),
                            people: Array.from(document.querySelectorAll('div')).find(x => Array.from(x.children).find(e => e.className.includes('users') && e.parentElement.className.includes('statContainer'))),
                            happiness: Array.from(document.querySelectorAll('div')).find(x => Array.from(x.children).find(e => e.className.includes('grin'))),
                            gold: Array.from(document.querySelectorAll('div')).find(x => Array.from(x.children).find(e => e.className.includes('coins')))
                        };

                        let data = reactHandler()?.stateNode?.state?.guest;

                        if (!data) {
                            return;
                        }

                        Object.entries(data.yes).forEach(x => {
                            if (x[0] === 'msg') return;
                            if (!choiceEspElements[`yes-${x[0]}`]) {
                                let element = document.createElement('div');
                                element.className = 'choice-esp';
                                element.style = `
                                    font-size: 24px;
                                    color: rgb(75, 194, 46);
                                    font-weight: bolder;
                                `;
                                elements[x[0]]?.appendChild(element);
                                choiceEspElements[`yes-${x[0]}`] = element;
                            }
                            choiceEspElements[`yes-${x[0]}`].innerText = String(x[1]);
                        });

                        Object.entries(data.no).forEach(x => {
                            if (x[0] === 'msg') return;
                            if (!choiceEspElements[`no-${x[0]}`]) {
                                let element = document.createElement('div');
                                element.className = 'choice-esp';
                                element.style = `
                                    font-size: 24px;
                                    color: darkred;
                                    font-weight: bolder;
                                `;
                                elements[x[0]]?.appendChild(element);
                                choiceEspElements[`no-${x[0]}`] = element;
                            }
                            choiceEspElements[`no-${x[0]}`].innerText = String(x[1]);
                        });
                    } catch (e) {
                        console.error(e);
                    }
                }, 50); 
            } else {

                clearInterval(choiceEsp.data);
                choiceEsp.data = null;

                Object.values(choiceEspElements).forEach(element => {
                    element.parentNode.removeChild(element);
                });
                choiceEspElements = {};
            }
        }


        handleChoiceEsp();

 
        choiceEsp.run = function() {
            choiceEsp.enabled = !choiceEsp.enabled;
            handleChoiceEsp();
        };

        function reactHandler() {
            try {
                return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
            } catch (e) {
                console.error(e);
                return null;
            }
        }
    }
                }, {
            name: "Disable Tax Toucan",
            description: "Tax evasion",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.taxCounter = Number.MAX_VALUE
            }
        }, {
            name: "Max Stats",
            description: "Sets all resources to the max",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    materials: 100,
                    people: 100,
                    happiness: 100,
                    gold: 100
                })
            }
        }, {
            name: "Set Guests",
            description: "Sets the amount of guests you've seen",
            inputs: [{
                name: "Guests",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    guestScore: e
                })
            }
        }, {
            name: "Skip Guest",
            description: "Skips the current guest",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.nextGuest()
            }
        }],
        racing: [{
            name: "Instant Win",
            description: "Instantly Wins the race",
            run: function() {
                let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e.setState({
                    progress: e.state.goalAmount
                }, () => {
                    let {
                        question: t
                    } = e.state;
                    try {
                        [...document.querySelectorAll('[class*="answerContainer"]')][t.answers.map((e, a) => t.correctAnswers.includes(e) ? a : null).filter(e => null != e)[0]]?.click?.()
                    } catch {}
                })
            }
        }],
        extras: [{
name: "Toggle Invert Colors",
description: "Toggle between inverting and restoring colors on the page",
run: function() {
    if (typeof all === 'undefined') {
        let all = [];
    }
    if (document.getElementsByTagName("html")[0].style.filter == "invert()") {
        document.getElementsByTagName("html")[0].style.filter = "";
    } else {
        document.getElementsByTagName("html")[0].style.filter = "invert()";
    }
    if (typeof elems === 'undefined') {
        let elems = [];
    }
    elems = document.querySelectorAll(" a, img, video");
    for (let j = 0; j < elems.length; j++) {
        if ((elems[j].nodeName == "A" && (elems[j].style.background != "" || elems[j].style.backgroundImage != "")) || elems[j].nodeName != "A") {
            if (elems[j].style.filter == "invert()") {
                elems[j].style.filter = "";
            } else {
                elems[j].style.filter = "invert()";
            }
        }
    }
    void 0;
}
                }, {
name: "Toggle Dark Mode", // By The Blooket Hacks https://github.com/The-Blooket-Hacks/
description: "Toggles Dark Mode",
run: function() {
    var alertAllow = document.createElement('iframe');
    document.body.append(alertAllow);
    window.alert = alertAllow.contentWindow.alert.bind(window);
    alertAllow.remove();

    function toggleDarkMode() {
        let q = document.querySelectorAll('#nightify');
        if (q.length) {
            q[0].parentNode.removeChild(q[0]);
        } else {
            var h = document.getElementsByTagName('head')[0],
                s = document.createElement('style');
            s.setAttribute('type', 'text/css');
            s.setAttribute('id', 'nightify');
            s.appendChild(document.createTextNode(`html{-webkit-filter:invert(100%) hue-rotate(180deg) contrast(70%) !important; background: #222;} .line-content {background-color: #333;}
html img{-webkit-filter:invert(100%) hue-rotate(0deg) contrast(100%) !important;}`));
            h.appendChild(s);
        }
    }

    toggleDarkMode();
}
                },{
    name: "3D Page",
    description: "Makes the page 3D",
    run: function() {
        var d = {
            menu: document.createElement("div"),
            limit: document.createElement("input"),
            gap: document.createElement("input"),
            sag: document.createElement("input"),
            fov: document.createElement("input"),
            flo: document.createElement("input"),
            off: document.createElement("input"),
            non: document.createElement("input"),
            end: document.createElement("input"),
            tgl: document.createElement("input"),
            cssStatic: document.createElement("style"),
            cssDynamic: document.createElement("style"),
            orientation: {
                yaw: 0,
                pitch: 0,
                roll: 0
            },
            mouseMove: function(e) {
                d.orientation.yaw = 180 * -Math.cos(Math.PI * e.clientX / innerWidth) * d.limit.value, d.orientation.pitch = 180 * Math.cos(Math.PI * e.clientY / innerHeight) * d.limit.value, d.updateBody()
            },
            gyroMove: function(e) {
                innerWidth > innerHeight ? (d.orientation.yaw = -(e.alpha + e.beta), d.orientation.pitch = e.gamma - 90 * Math.sign(90 - Math.abs(e.beta))) : (d.orientation.yaw = -(e.alpha + e.gamma), d.orientation.pitch = e.beta - 90), d.updateBody()
            },
            updateOrigin: function(e) {
                document.body.style.transformOrigin = innerWidth / 2 + pageXOffset + "px " + (innerHeight / 2 + pageYOffset) + "px"
            },
            updateBody: function() {
                document.body.style.transform = "perspective(" + Math.pow(2, d.fov.value) + "px) translateZ(-" + d.gap.value + "px) rotateX(" + d.orientation.pitch + "deg) rotateY(" + d.orientation.yaw + "deg)"
            },
            updateCSS: function() {
                if (d.non.checked) d.cssDynamic.innerHTML = "";
                else if (d.off.checked) d.cssDynamic.innerHTML = "* { transform-style: preserve-3d; }";
                else {
                    for (var e = 0; document.querySelector("body" + " > *".repeat(e)); e++);
                    var t = d.gap.value / e,
                        n = -Math.PI * d.sag.value / e;
                    d.cssDynamic.innerHTML = ` * { transform: translateZ(${t}px) rotateX(${n}rad); transform-style: preserve-3d; transition: transform 1s; outline: 1px solid rgba(0, 0, 0, 0.0625); ${d.flo.checked?"overflow: visible !important;":""} } *:hover { transform: translateZ(${2*t}px) rotateX(${2*n}rad); ${d.flo.checked?"":"overflow: visible;"} } `
                }
            },
            toggle: function() {
                "active" == d.menu.className ? d.menu.removeAttribute("class") : d.menu.className = "active"
            },
            quit: function() {
                window.removeEventListener("deviceorientation", d.gyroMove), window.removeEventListener("mousemove", d.mouseMove), window.removeEventListener("scroll", d.updateOrigin), window.addEventListener("resize", d.updateOrigin), d.menu.remove(), d.cssStatic.remove(), d.cssDynamic.remove(), document.body.removeAttribute("style")
            },
            newRange: function(e, t, n, o, i, a, r) {
                d.menu.appendChild(e), e.type = "range", e.min = n, e.max = i, e.step = o, e.value = a, e.addEventListener("input", r), d.menu.appendChild(document.createElement("span")).innerHTML = t, d.menu.appendChild(document.createElement("br"))
            },
            newCheckbox: function(e, t, n) {
                d.menu.appendChild(e), e.type = "checkbox", e.addEventListener("click", n), d.menu.appendChild(document.createElement("span")).innerHTML = t, d.menu.appendChild(document.createElement("br"))
            },
            newButton: function(e, t, n) {
                d.menu.appendChild(e), e.type = "button", e.value = t, e.addEventListener("click", n)
            },
            init: function() {
                document.body.parentNode.appendChild(d.menu).id = "tri-menu", d.newRange(d.limit, "limit", 0, .03125, 1, .125, d.updateBody), d.newRange(d.gap, "gap / distance", 0, 32, 512, 128, function() {
                    d.updateCSS(), d.updateBody()
                }), d.newRange(d.sag, "sag", -.25, .03125, .25, 0, d.updateCSS), d.newRange(d.fov, "field of view", 7, 1, 13, 10, d.updateBody), d.newCheckbox(d.flo, "force overflow", d.updateCSS), d.flo.setAttribute("checked", ""), d.newCheckbox(d.off, "flatten layers", d.updateCSS), d.newCheckbox(d.non, "flatten everything", d.updateCSS), d.newButton(d.end, "Quit", d.quit), d.newButton(d.tgl, "≡", d.toggle), d.tgl.id = "tri-toggle", d.menu.appendChild(d.cssStatic).innerHTML = ` html, body { transition-property: none; height: 100%25; width: 100%25; } html, html:hover, #tri-menu, #tri-menu > *, #tri-menu > *:hover { transform: none; outline: none; overflow: auto !important; float: none; } #tri-menu { position: fixed; top: 0; left: 0; background: rgba(0, 0, 0, 0.5); color: white; border: 1px solid rgba(255, 255, 255, 0.5);; border-radius: 0 0 16px 0; padding: 8px; transform: translate(-100%25, -100%25) translate(32px, 32px); } #tri-menu.active { transform: none; } #tri-toggle { position: absolute; bottom: 0; right: 0; height: 32px; width: 32px; background: transparent; color: white; border: none; cursor: pointer; } #tri-menu.active > #tri-toggle { background: white; color: black; border-radius: 8px 0 0 0; }`,d.menu.appendChild(d.cssDynamic),d.updateCSS(),window.addEventListener("deviceorientation",d.gyroMove),window.addEventListener("mousemove",d.mouseMove),window.addEventListener("scroll",d.updateOrigin),window.addEventListener("resize",d.updateOrigin),window.scrollBy(0,1)}};d.init();
    }
                }, {
         name: "History Flooder",
    description: "Floods browser history with specified amount of entries",
    inputs: [{
        name: "Amount",
        type: "number"
    }],
    run: function(amount) {
        var e = amount;
        done = !1, x = window.location.href;
        for (var t = 1; t <= e; t++) history.pushState(0, 0, t == e ? x : t.toString()), t == e && (done = !0);
        !0 === done && alert("History flood successful! " + window.location.href + " now appears in your history " + e + (1 == e ? " time." : " times. "))
    }
                }, {
      name: "Tab Cloaker",
    description: "Changes the tab image and name",
    inputs: [{
            name: "Icon URL",
            type: "text",
            placeholder: "ex. https://example.com/favicon.ico"
        },
        {
            name: "Tab Title",
            type: "text",
            placeholder: "ex. Example Title"
        }
    ],
    run: function(iconURL, tabTitle) {
        var icon = iconURL || 'https://www.blooket.com/favicon.ico';
        var title = tabTitle || 'Blooket';
        var l = document.querySelector("link[rel*='icon']") || document.createElement('link');
        l.type = 'image/x-icon';
        l.rel = 'shortcut icon';
        l.href = icon;
        document.getElementsByTagName('head')[0].appendChild(l);
        document.title = title;
    }

}], // YFIDOM/HCUOT TON OD staehC-tekoolB/7610naDynnaD/moc.buhtig//:sptth 7610naDynnaD YB EDAM SI SIHT !ERUSAEM DIKS-ITNA NA SI SIHT
        royale: [{
            name: "Auto Answer (Toggle)",
            description: "Toggles auto answer on",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                    var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                    e?.onAnswer?.(!0, e.props.client.question.correctAnswers[0])
                }, 50))
            }
        }, {
            name: "Auto Answer",
            description: "Chooses the correct answer for you",
            run: function() {
                var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e?.onAnswer?.(!0, e.props.client.question.correctAnswers[0])
            }
        }],
        rush: [{
            name: "Set Blooks",
            description: "Sets amount of blooks you or your team has",
            inputs: [{
                name: "Blooks",
                type: "number"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                    numBlooks: e
                }), t.isTeam ? t.props.liveGameController.setVal({
                    path: `a/${t.props.client.name}/bs`,
                    val: e
                }) : t.props.liveGameController.setVal({
                    path: `c/${t.props.client.name}/bs`,
                    val: numDefense
                })
            }
        }, {
            name: "Set Defense",
            description: "Sets amount of defense you or your team has (Max 4)",
            inputs: [{
                name: "Defense (max 4)",
                type: "number",
                max: 4
            }],
            run: function(e) {
                var e = Math.min(e, 4),
                    t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                    numDefense: e
                }), t.isTeam ? t.props.liveGameController.setVal({
                    path: `a/${t.props.client.name}/d`,
                    val: e
                }) : t.props.liveGameController.setVal({
                    path: `c/${t.props.client.name}/d`,
                    val: e
                })
            }
        }],
        workshop: [{
            name: "Remove Distractions",
            description: "Removes all enemy distractions",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    fog: !1,
                    dusk: !1,
                    wind: !1,
                    plow: !1,
                    blizzard: !1,
                    force: !1,
                    canada: !1,
                    trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1]
                })
            }
        }, {
            name: "Send Distraction",
            description: "Sends a distraction to everyone else playing",
            inputs: [{
                name: "Distraction",
                type: "options",
                options: Object.entries({
                    c: "Oh Canada",
                    b: "Blizzard",
                    f: "Fog Spell",
                    d: "Dark & Dusk",
                    w: "Howling Wind",
                    g: "Gift Time!",
                    t: "TREES",
                    s: "Snow Plow",
                    fr: "Use The Force"
                }).map(([e, t]) => ({
                    name: t,
                    value: e
                }))
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.safe = !0, t.props.liveGameController.setVal({
                    path: `c/${t.props.client.name}/tat`,
                    val: e
                })
            }
        }, {
            name: "Set Toys",
            description: "Sets amount of toys",
            inputs: [{
                name: "Toys",
                type: "number"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                    toys: e
                }), t.props.liveGameController.setVal({
                    path: "c/".concat(t.props.client.name),
                    val: {
                        b: t.props.client.blook,
                        t: e
                    }
                })
            }
        }, { // https://pastebin.com/raw/Xiy4KGLj
            name: "Set Toys Per Question",
            description: "Sets amount of toys per question",
            inputs: [{
                name: "Toys Per Question",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    toysPerQ: e
                })
            }
        }, {
            name: "Swap Toys",
            description: "Swaps toys with someone",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
                }
            }], // 
            run: function(e) {
                let t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.props.liveGameController.getDatabaseVal("c", a => {
                    var o;
                    a && Object.keys(a).map(e => e.toLowerCase()).includes(e.toLowerCase()) && ([a, {
                        t: o
                    }] = Object.entries(a).find(([t]) => t.toLowerCase() == e.toLowerCase()), t.props.liveGameController.setVal({
                        path: "c/".concat(t.props.client.name),
                        val: {
                            b: t.props.client.blook,
                            t: o,
                            tat: a + ":swap:" + t.state.toys
                        }
                    }), t.setState({
                        toys: o
                    }))
                })
            }
        }],
        settings: [{
            name: "Import Settings",
            description: "Import a custom theme",
            inputs: [{
                name: "JSON Data",
                type: "string"
            }],
            run: function(e) {
                try {
                    JSON.parse(e)
                } catch (t) {
                    return alert("Invalid JSON provided")
                }
                for (let a in e = {
                        backgroundColor: "rgb(11, 194, 207)",
                        infoColor: "#9a49aa",
                        cheatList: "#9a49aa",
                        defaultButton: "#9a49aa",
                        disabledButton: "#A02626",
                        enabledButton: "#47A547",
                        textColor: "white",
                        inputColor: "#7a039d",
                        contentBackground: "rgb(64, 17, 95)",
                        ...JSON.parse(e)
                    }, c.setItem("theme", e), e) p.sheet.cssRules[0].style.setProperty("--" + a, e[a])
            }
        }, {
            name: "Export Settings",
            description: "Export the current theme to JSON",
            run: async function() {
                await navigator.clipboard.writeText(JSON.stringify(c.data.theme, null, 4)), prompt("Text copied to clipboard. (Paste below to test)")
            }
        }, {
            name: "Defaults",
            description: "Changes all the settings to a preset",
            inputs: [{
                name: "Theme",
                type: "options",
                options: [{
                    name: "Default",
                    value: {
                        backgroundColor: "rgb(11, 194, 207)",
                        infoColor: "#9a49aa",
                        cheatList: "#9a49aa",
                        defaultButton: "#9a49aa",
                        disabledButton: "#A02626",
                        enabledButton: "#47A547",
                        textColor: "white",
                        inputColor: "#7a039d",
                        contentBackground: "rgb(64, 17, 95)"
                    }
                }, {
                   name: "Landscapes (Random)",
                    value: {
                        backgroundColor: "url(https://source.unsplash.com/1600x900/?landscape)",
                        infoColor: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                        cheatList: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                        defaultButton: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                        disabledButton: "linear-gradient(rgba(225, 0, 0, 0.3), rgba(225, 0, 0, 0.3))",
                        enabledButton: "linear-gradient(rgba(0, 128, 0, 0.3), rgba(0, 128, 0, 0.3))",
                        textColor: "white",
                        inputColor: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                        contentBackground: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
                    }
                }, {
                    name: "Blacket",
                    value: {
                        backgroundColor: "#4f4f4f",
                        infoColor: "#2f2f2f",
                        cheatList: "#2f2f2f",
                        defaultButton: "#4f4f4f",
                        disabledButton: "#eb6234",
                        enabledButton: "#00c20c",
                        textColor: "white",
                        inputColor: "#3f3f3f",
                        contentBackground: "#2f2f2f"
                    }
                }, {
                    name: "Ploopit",
                    value: {
                        backgroundColor: "url(https://i.ibb.co/6vvdq3f/ploopit.png)",
                        infoColor: "#3C75F5",
                        cheatList: "#204DD0",
                        defaultButton: "#204DD0",
                        disabledButton: "#A02626",
                        enabledButton: "#47A547",
                        textColor: "white",
                        inputColor: "#3f3f3f",
                        contentBackground: "#3C75F5"
                    }
                }, {
                    name: "Betastar",
                    value: {
                        backgroundColor: "url(https://i.ibb.co/8bkDpCn/GIFMaker-me.gif)",
                        infoColor: "#282828",
                        cheatList: "#282828",
                        defaultButton: "white",
                        disabledButton: "#9D0000",
                        enabledButton: "#013220",
                        textColor: "black",
                        inputColor: "gray",
                        contentBackground: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
                    }
                }, {
                    name: "Skool.lol",
                    value: {
                        backgroundColor: "linear-gradient(90deg, rgba(104,45,140,1) 220px, rgba(237,30,121,1) 100%)",
                        cheatList: "#1e2124",
                        infoColor: "#1e2124",
                        defaultButton: "#36393e",
                        inputColor: "#1e2124",
                        enabledButton: "#9c9a9a",
                        textColor: "white",
                        disabledButton: "#171717",
                        contentBackground: "#292929"
                    }
                }, {
                    name: "Blue - Purple Background",
                    value: {
                        backgroundColor: "linear-gradient(162.5deg, rgba(0,183,255,1) 220px, rgba(128,0,255,1) 100%)"
                    }
                }, {
                    name: "Saint Patricks Background",
                    value: {
                        backgroundColor: "rgb(9, 148, 65)"
                    }
                }, {
                    name: "Halloween Background",
                    value: {
                        backgroundColor: "rgb(41, 41, 41)"
                    }
                }, {
                    name: "Fall Background",
                    value: {
                        backgroundColor: "rgb(224, 159, 62)"
                    }
                }, {
                    name: "Winter Background",
                    value: {
                        backgroundColor: "linear-gradient(rgb(49, 170, 224), rgb(187, 221, 255))"
                    }
                }, {
                    name: "Crypto Hack",
                    value: {
                        backgroundColor: "radial-gradient(#11581e,#041607)",
                        infoColor: "#1a1a1a",
                        cheatList: "#1a1a1a",
                        defaultButton: "rgb(88 175 88)",
                        disabledButton: "#A02626",
                        enabledButton: "#0b601b",
                        textColor: "white",
                        inputColor: "rgb(0 0 0 / 25%)",
                        contentBackground: "#11581e"
                    }
                }, {
                    name: "Fishing Frenzy",
                    value: {
                        backgroundColor: "linear-gradient(180deg,#9be2fe 0,#67d1fb)",
                        infoColor: "#c8591e",
                        cheatList: "#c8591e",
                        defaultButton: "#ff751a",
                        disabledButton: "#bf0e0e",
                        enabledButton: "#2fb62f",
                        textColor: "white",
                        inputColor: "rgb(0 0 0 / 25%)",
                        contentBackground: "radial-gradient(#02b0ea 40%, #1d86ea)"
                    }
                }, {
                    name: "Deceptive Dinos",
                    value: {
                        backgroundColor: 'radial-gradient(rgba(220, 184, 86, 0), rgba(220, 184, 86, 0.4)), url("https://ac.blooket.com/play/111cb7e0ee6607ac3d1a13d534c0e0f1.png"), #ead49a',
                        infoColor: "#af8942",
                        cheatList: "#af8942",
                        defaultButton: "#af8942",
                        disabledButton: "#A02626",
                        enabledButton: "#47A547",
                        textColor: "white",
                        inputColor: "rgb(0 0 0 / 10%)",
                        contentBackground: "radial-gradient(rgba(1,104,162,.6),rgba(24,55,110,.5)),radial-gradient(#2783b4 1.5px,#18376e 0) center / 24px 24px"
                    }
                }, {
                    name: "Blook Rush",
                    value: {
                        backgroundColor: "repeating-linear-gradient(45deg,white,white 8%,#e6e6e6 0,#e6e6e6 16%)",
                        defaultButton: "#36c",
                        inputColor: "rgb(0 0 0 / 25%)",
                        infoColor: "#36c",
                        cheatList: "#36c",
                        contentBackground: "#888",
                        textColor: "white",
                        disabledButton: "#A02626",
                        enabledButton: "#47A547"
                    }
                }, {
                    name: "Factory",
                    value: {
                        defaultButton: "#1563bf",
                        infoColor: "#a5aabe",
                        cheatList: "#a5aabe",
                        contentBackground: "#2d313d",
                        backgroundColor: "#3a3a3a",
                        enabledButton: "rgb(75, 194, 46)",
                        disabledButton: "#9a49aa",
                        inputColor: "rgb(0 0 0 / 25%)",
                        textColor: "white"
                    }
                }, {
                    name: "Cafe",
                    value: {
                        backgroundColor: "linear-gradient(90deg,rgba(200,0,0,.5) 50%,transparent 0) center / 50px 50px,linear-gradient(rgba(200,0,0,0.5) 50%,transparent 0) white center / 50px 50px",
                        defaultButton: "#0bc2cf",
                        inputColor: "rgb(0 0 0 / 25%)",
                        infoColor: "#ac7339",
                        cheatList: "#ac7339",
                        contentBackground: "rgb(64, 64, 64)",
                        textColor: "white",
                        disabledButton: "#A02626",
                        enabledButton: "#47A547"
                    }
                }, {
                    name: "Tower of Doom",
                    value: {
                        backgroundColor: "rgb(41 41 41)",
                        disabledButton: "rgb(151, 15, 5)",
                        defaultButton: "#333",
                        inputColor: "rgb(0 0 0 / 25%)",
                        contentBackground: "#404040",
                        enabledButton: "#4bc22e",
                        textColor: "white",
                        infoColor: "#9a49aa",
                        cheatList: "#9a49aa"
                    }
                }, {
                    name: "Monster Brawl",
                    value: {
                        defaultButton: "rgb(45, 51, 67)",
                        backgroundColor: "rgb(78, 95, 124)",
                        inputColor: "rgb(0 0 0 / 25%)",
                        contentBackground: "linear-gradient(0deg,#374154,#4f5b74)",
                        infoColor: "#374154",
                        cheatList: "#374154",
                        textColor: "white",
                        enabledButton: "#47A547",
                        disabledButton: "#A02626"
                    }
                }, {
                    name: "Tower Defense 2",
                    value: {
                        backgroundColor: "url(https://media.blooket.com/image/upload/v1676164454/Media/defense/backgroundTd1-02.svg) center / cover",
                        cheatList: "#a33c22",
                        infoColor: "#a33c22",
                        defaultButton: "#40b1d8",
                        inputColor: "#3e8cbe",
                        contentBackground: "#293c82",
                        enabledButton: "#47A547",
                        disabledButton: "#A02626",
                        textColor: "white"
                    }
                }]
            }],
            run: function(e) {
                for (let t in c.setItem("theme", {
                        ...c.data.theme,
                        ...e
                    }), e) p.sheet.cssRules[0].style.setProperty("--" + t, e[t])
            }
        }, {
            name: "Scale",
            description: "Forces the GUI to scale from 25%-100%",
            inputs: [{
                type: "number",
                name: "Percent scale",
                min: 25,
                max: 100,
                value: 100 * (c.data.scale || 1)
            }],
            run: function(e) {
                e = Math.min(Math.max(e, 25), 100), c.setItem("scale", e / 100), b.style.transform = `scale(${e/100})`
            }
        }, {
            name: "Hide Keybind",
            description: "Change the hide keybind (Click button after input to change)",
            inputs: [{
                type: "function",
                name: "Input",
                function: e => T(({
                    shift: t,
                    ctrl: a,
                    alt: o,
                    key: i
                }) => e("" + [a && "Ctrl", t && "Shift", o && "Alt", i && i.toUpperCase()].filter(Boolean).join(" + ")))
            }],
            run: function(e) {
                c.setItem("hide", e), m.update(c.data.hide || {
                    ctrl: !0,
                    key: "e"
                }, c.data.close || {
                    ctrl: !0,
                    key: "x"
                })
            }
        }, { // https://pastebin.ai/raw/7zvaiuiuv8
            name: "Close Keybind",
            description: "Change the quick close keybind (Click button after input to change)",
            inputs: [{
                type: "function",
                name: "Input",
                function: e => T(({
                    shift: t,
                    ctrl: a,
                    alt: o,
                    key: i
                }) => e("" + [a && "Ctrl", t && "Shift", o && "Alt", i && i.toUpperCase()].filter(Boolean).join(" + ")))
            }],
            run: function(e) {
                c.setItem("close", e), m.update(c.data.hide || {
                    ctrl: !0,
                    key: "e"
                }, c.data.close || {
                    ctrl: !0,
                    key: "x"
                })
            }
        }, {
            name: "Background Color",
            description: "Changes the background color of the GUI",
            inputs: [{
                type: "string",
                name: "Color"
            }],
            run: function(e) {
                p.sheet.cssRules[0].style.setProperty("--backgroundColor", e), c.setItem("theme.backgroundColor", e)
            }
        }, {
            name: "Category List Color",
            description: "Changes the categories list background color",
            inputs: [{
                type: "string",
                name: "Color"
            }],
            run: function(e) {
                p.sheet.cssRules[0].style.setProperty("--cheatList", e), c.setItem("theme.cheatList", e)
            }
        }, {
            name: "Info Color",
            description: "Changes the color of the information at the top of the GUI",
            inputs: [{
                type: "string",
                name: "Color"
            }],
            run: function(e) {
                p.sheet.cssRules[0].style.setProperty("--infoColor", e), c.setItem("theme.infoColor", e)
            }
        }, {
            name: "Button Color",
            description: "Changes the color of the cheats",
            inputs: [{
                type: "string",
                name: "Color"
            }],
            run: function(e) {
                p.sheet.cssRules[0].style.setProperty("--defaultButton", e), c.setItem("theme.defaultButton", e)
            }
        }, {
            name: "Enabled Toggle Color",
            description: "Changes the color of enabled toggle cheats",
            inputs: [{
                type: "string",
                name: "Color"
            }],
            run: function(e) {
                c.setItem("theme.enabledButton", e)
            }
        }, {
            name: "Disabled Toggle Color",
            description: "Changes the color of disabled toggle cheats",
            inputs: [{
                type: "string",
                name: "Color"
            }],
            run: function(e) {
                p.sheet.cssRules[0].style.setProperty("--disabledButton", e), c.setItem("theme.disabledButton", e)
            }
        }, {
            name: "Text Color",
            description: "Changes the text color",
            inputs: [{
                type: "string",
                name: "Color"
            }],
            run: function(e) {
                p.sheet.cssRules[0].style.setProperty("--textColor", e), c.setItem("theme.textColor", e)
            }
        }, {
            name: "Input Color",
            description: "Changes the color of inputs, like the set gold number input",
            inputs: [{
                type: "string",
                name: "Color"
            }],
            run: function(e) {
                p.sheet.cssRules[0].style.setProperty("--inputColor", e), c.setItem("theme.inputColor", e)
            }
        }, {
            name: "Content Color",
            description: "Changes the background color of the cheats",
            inputs: [{
                type: "string",
                name: "Color"
            }],
            run: function(e) {
                p.sheet.cssRules[0].style.setProperty("--contentBackground", e), c.setItem("theme.contentBackground", e)
            }
        }],
        alerts: [{
            element: l("div", {
                className: "alertContainer",
                style: {
                    margin: "15px 15px 5px 15px",
                    backgroundColor: "rgb(0 0 0 / 50%)",
                    width: "95%",
                    height: "370px",
                    borderRadius: "7px",
                    display: "block",
                    alignItems: "center",
                    justifyContent: "center"
                }
            }, l("ul", {
                className: "alertList",
                style: {
                    margin: "10px 10px 0 10px",
                    padding: "0",
                    listStyleType: "none",
                    display: "flex",
                    flexDirection: "column-reverse",
                    height: "355px",
                    overflowY: "scroll",
                    wordWrap: "break-word"
                }
            }, l("li", {
                style: {
                    margin: "5px"
                }
            }, l("span", {
                style: {
                    color: "var(--textColor)"
                },
                innerText: "[LOG] GUI opened"
            })))),
            addLog(e, t) {
                return this.element.firstChild.prepend(l("li", {
                    style: {
                        margin: "5px"
                    }
                }, l("span", {
                    style: {
                        color: t || "var(--textColor)"
                    },
                    innerHTML: "[LOG] " + e
                })))
            },
            addAlert(e, t, a) {
                return this.element.firstChild.prepend(l("li", {
                    style: {
                        margin: "5px"
                    }
                }, l("img", {
                    src: t || this.blookData?.Black?.url,
                    alt: "blook",
                    draggable: !1,
                    style: {
                        height: "22.5px",
                        margin: "0 10px -5px 0"
                    }
                }), l("strong", {}, e), " ", a))
            },
            connection: null,
            data: {},
            updateLeaderboard(e) {
                for (var {
                        blook: t,
                        name: a,
                        value: o
                    }
                    of(this.leaderboardEl || this.addLeaderboard(), this.leaderboard.innerHTML = "", e)) this.leaderboard.append(l("li", {
                    style: {
                        fontSize: "2rem",
                        paddingInline: "72px 15px",
                        paddingBlock: "1.25px",
                        position: "relative"
                    }
                }, l("img", {
                    src: this.blookData?.[t]?.url || this.blookData.Black.url,
                    alt: t,
                    draggable: !1,
                    style: {
                        height: "45px",
                        position: "absolute",
                        left: "15px"
                    }
                }), a, l("span", {
                    innerText: this.parseNumber(parseInt(o)),
                    style: {
                        float: "right"
                    }
                })))
            },
            parseNumber(e = 0) {
                var t = e;
                if (e < 1e3) return t.toString();
                var a = ["", "K", "M", "B", "T"],
                    o = Math.floor((e.toString().length - 1) / 3);
                if (o < a.length) {
                    let i = 0;
                    for (let r = 3; 1 <= r && !((i = parseFloat((0 !== o ? e / Math.pow(1e3, o) : e).toPrecision(r))).toString().replace(/[^a-zA-Z 0-9]+/g, "").length <= 3); r--);
                    t = (i = i % 1 != 0 ? i.toFixed(1) : i) + a[o]
                } else {
                    let s = e,
                        n = 0;
                    for (; 100 <= s; n++) s = Math.floor(s / 10);
                    let l = "";
                    var c = ["⁰", "\xb9", "\xb2", "\xb3", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
                    for (let d of (n + 1).toString().split("")) l += c[Number(d)];
                    t = s / 10 + " \xd7 10" + l
                }
                return t
            },
            addLeaderboard() {
                this.blookData ||= Object.values(webpackJsonp.push([
                    [], {
                        ""(e, t, a) {
                            t.cache = a.c
                        }
                    },
                    [
                        [""]
                    ]
                ]).cache).find(e => e.exports?.a?.Alice && e.exports?.a?.Alien).exports.a, this.element.append(this.leaderboardEl = l("div", {
                    id: "leaderboardContent",
                    style: {
                        position: "absolute",
                        inset: "110% 0px"
                    }
                }, l("div", {
                    style: {
                        alignItems: "center",
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                        padding: "20px 5px 20px",
                        position: "relative",
                        width: "100%",
                        fontFamily: "Nunito, sans-serif",
                        fontWeight: "400",
                        color: "var(--textColor)",
                        background: "var(--contentBackground)",
                        boxShadow: "inset 0 -6px rgb(0 0 0 / 20%)",
                        borderRadius: "7px"
                    }
                }, l("div", {
                    className: "headerText",
                    style: {
                        boxSizing: "border-box",
                        display: "block",
                        height: "45px",
                        left: "-10px",
                        padding: "4px 4px 8px",
                        position: "absolute",
                        top: "-28px",
                        backgroundColor: "#ef7426",
                        boxShadow: "0 4px rgb(0 0 0 / 20%), inset 0 -4px rgb(0 0 0 / 20%)",
                        borderRadius: "7px"
                    }
                }, l("div", {
                    style: {
                        alignItems: "center",
                        boxSizing: "border-box",
                        display: "flex",
                        height: "100%",
                        justifyContent: "center",
                        padding: "0 15px",
                        width: "100%",
                        fontFamily: "Titan One, sans-serif",
                        fontSize: "26px",
                        fontWeight: "400",
                        textShadow: "-1px -1px 0 #646464, 1px -1px 0 #646464, -1px 1px 0 #646464, 2px 2px 0 #646464",
                        color: "white",
                        background: "linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a)",
                        borderRadius: "5px"
                    },
                    innerText: "Leaderboard"
                })), l("div", {
                    className: "alertContainer",
                    style: {
                        margin: "15px 15px 5px 15px",
                        backgroundColor: "rgb(0 0 0 / 50%)",
                        width: "95%",
                        height: "370px",
                        borderRadius: "7px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                }, this.leaderboard = l("nl", {
                    className: "alertList",
                    style: {
                        marginTop: "10px",
                        padding: "0",
                        listStyleType: "decimal",
                        width: "100%",
                        height: "355px",
                        overflowY: "scroll",
                        wordWrap: "break-word"
                    }
                })))))
            },
            async connect() {
                try {
                    var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                    if (!e?.props?.liveGameController?._liveGameCode) return !1;
                    this.connection = await e.props.liveGameController.getDatabaseRef("c");
                    let t = this.blookData = Object.values(webpackJsonp.push([
                            [], {
                                ""(e, t, a) {
                                    t.cache = a.c
                                }
                            },
                            [
                                [""]
                            ]
                        ]).cache).find(e => e.exports?.a?.Alice && e.exports?.a?.Alien).exports.a,
                        a = this.getGamemode(),
                        o = {
                            lb: "Lunch Break",
                            as: "Ad Spam",
                            e37: "Error 37",
                            nt: "Night Time",
                            lo: "#LOL",
                            j: "Jokester",
                            sm: "Slow Mo",
                            dp: "Dance Party",
                            v: "Vortex",
                            r: "Reverse",
                            f: "Flip",
                            m: "Micro"
                        };
                    this.connection.on("value", e => {
                        var i = e.val() || {};
                        if (i && this.diffObjects(this.data, i)) {
                            var r, s, n, l, c, d, p, u, $ = this.diffObjects(this.data, i);
                            this.data = i;
                            let m;
                            switch (a) {
                                case "racing":
                                    m = Object.entries(i).map(([e, {
                                        b: t,
                                        pr: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                case "classic":
                                    m = Object.entries(i).map(([e, {
                                        b: t,
                                        p: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                case "royale":
                                    m = Object.entries(i).map(([e, {
                                        b: t,
                                        e: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                case "workshop":
                                    m = Object.entries(i).map(([e, {
                                        b: t,
                                        t: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                case "brawl":
                                    m = Object.entries(i).map(([e, {
                                        b: t,
                                        xp: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                case "defense":
                                case "defense2":
                                    m = Object.entries(i).map(([e, {
                                        b: t,
                                        d: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                case "gold":
                                    for (let h in $) $[h].tat && ([r, s] = $[h].tat.split(":"), "swap" == s ? this.addAlert(h, t[i[h].b]?.url, "just swapped with " + r) : this.addAlert(h, t[i[h].b]?.url, `just took ${this.parseNumber(parseInt(s))} gold from ` + r));
                                    m = Object.entries(i).map(([e, {
                                        b: t,
                                        g: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                    break;
                                case "hack":
                                    for (let g in $) $[g].tat && ([n, l] = $[g].tat.split(":"), this.addAlert(g, t[i[g].b]?.url, `just took ${this.parseNumber(parseInt(l))} crypto from ` + n));
                                    m = Object.entries(i).map(([e, {
                                        b: t,
                                        cr: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                    break;
                                case "fishing":
                                    for (let y in $) "Frenzy" == $[y].f ? this.addAlert(y, t[i[y].b]?.url, "just started a frenzy") : $[y].s && this.addAlert(y, t[i[y].b]?.url, `just sent a ${$[y].f} distraction`);
                                    m = Object.entries(i).map(([e, {
                                        b: t,
                                        w: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                    break;
                                case "dino":
                                    for (let _ in $) $[_].tat && ([c, d] = $[_].tat.split(":"), "true" == d ? this.addAlert(_, t[i[_].b]?.url, `just caught ${c} CHEATING!`) : this.addAlert(_, t[i[_].b]?.url, "investigated " + c));
                                    m = Object.entries(i).map(([e, {
                                        b: t,
                                        f: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                    break;
                                case "cafe":
                                    for (let v in $) $[v].up && ([p, u] = $[v].up.split(":"), u) && this.addAlert(v, t[i[v].b]?.url, `upgraded ${p} to level ` + u);
                                    m = Object.entries(i).map(([e, {
                                        b: t,
                                        ca: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                    break;
                                case "factory":
                                    for (let b in $) {
                                        var f, w, k = $[b];
                                        k.g ? this.addAlert(b, t[i[b].b]?.url, `activated the ${o[k.g]} glitch!`) : k.s ? ([f, w] = k.s.split("-"), this.addAlert(b, t[i[b].b]?.url, `has a ${f} ${w} synergy!`)) : k.t && this.addAlert(b, t[i[b].b]?.url, "now has 10 Blooks!")
                                    }
                                    m = Object.entries(i).map(([e, {
                                        b: t,
                                        ca: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }))
                            }
                            this.updateLeaderboard(m.sort((e, t) => t.value - e.value))
                        }
                    })
                } catch {
                    return !1
                }
            },
            diffObjects(e, t) {
                var a, o = {};
                for (let i in e) i in t && ("object" == typeof e[i] && "object" == typeof t[i] ? (a = this.diffObjects(e[i], t[i])) && 0 !== Object.keys(a).length && (o[i] = a) : JSON.stringify(e[i]) !== JSON.stringify(t[i]) && (o[i] = t[i]));
                for (let r in t) r in e || (o[r] = t[r]);
                return 0 == Object.keys(o).length ? null : o
            },
            getGamemode() {
                switch (window.location.pathname) {
                    case "/play/racing":
                        return "racing";
                    case "/play/extras":
                        return "extras";
                    case "/play/pirate":
                        return "voyage";
                    case "/play/factory":
                        return "factory";
                    case "/play/classic/get-ready":
                    case "/play/classic/question":
                    case "/play/classic/answer/sent":
                    case "/play/classic/answer/result":
                    case "/play/classic/standings":
                        return "classic";
                    case "/play/battle-royale/match/preview":
                    case "/play/battle-royale/question":
                    case "/play/battle-royale/answer/sent":
                    case "/play/battle-royale/answer/result":
                    case "/play/battle-royale/match/result":
                        return "royale";
                    case "/play/toy":
                        return "workshop";
                    case "/play/gold":
                        return "gold";
                    case "/play/brawl":
                        return "brawl";
                    case "/play/hack":
                        return "hack";
                    case "/play/fishing":
                        return "fishing";
                    case "/play/rush":
                        return "rush";
                    case "/play/dino":
                        return "dino";
                    case "/tower/map":
                    case "/tower/battle":
                    case "/tower/rest":
                    case "/tower/risk":
                    case "/tower/shop":
                    case "/tower/victory":
                        return "doom";
                    case "/cafe":
                    case "/cafe/shop":
                        return "cafe";
                    case "/defense":
                        return "defense";
                    case "/play/defense2":
                        return "defense2";
                    case "/kingdom":
                        return "kingdom";
                    default:
                        return !1
                }
            }
        }]
    };

    function C(e, t) {
        var a, o, i = 0,
            r = 0;
        e.onpointerdown = function(e = window.event) {
            i = e.clientX, r = e.clientY, document.onpointerup = function() {
                document.onpointerup = null, document.onpointermove = null
            }, document.onpointermove = function(e = window.event) {
                a = i - e.clientX, o = r - e.clientY, i = e.clientX, r = e.clientY, t.style.top = t.offsetTop - o + "px", t.style.left = t.offsetLeft - a + "px"
            }
        }
    }
    w("Alerts", "https://i.ibb.co/hBNyCXG/559343-1.png", x.alerts, !0), w("Global", "https://i.ibb.co/gd4Qs8L/11507ef5615c554fe88fc22c86768501-simple-earth-icon-1.webp", x.global)(), w('<span style="font-size: 18px">Pirate\'s Voyage</span>', "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPjxnIGlkPSJCb2F0Ij48cGF0aCBkPSJNMTcwLjQsNTYuMDU0Yy02OC43ODgsMTAuMTc0IC0xMTUuOTcxLDU2LjkzOCAtMTQ1LjQxMSwxMzMuNzVsMTUuNDY5LDcuNzM0YzMwLjk2MiwtMjguMTc1IDc0LjcwNSwtMzcuNzg3IDEzMi4zMjIsLTI3LjI1bDAsLTE3LjYxMWMtMjUuNjI5LC0yNy45NTIgLTI2Ljk2NiwtNTYuNzcyIDAuNzE0LC04Ni42MjhsLTMuMDk0LC05Ljk5NVoiIHN0eWxlPSJmaWxsOiNmNmUwYmQ7Ii8+PHBhdGggZD0iTTE5OS42NzMsNjAuODEzYzMyLjc4NCw0Mi45ODIgNjUuODIyLDkwLjg4NyA5Ny4zMzcsMTM5LjU4MWwtNi42NjMsMGMtMTIuMDg1LC0zMS4xMTEgLTU3Ljg4MiwtMzkuNjk0IC05MS42MjYsLTI3LjI1YzIyLjUxNCwtMzQuNTc5IDE3Ljc5NiwtNzIuNjczIDAuOTUyLC0xMTIuMzMxWiIgc3R5bGU9ImZpbGw6I2Y2ZTBiZDsiLz48cGF0aCBkPSJNNjkuNDQ4LDE5Ny41MzhjMCwwIC01OS43MDcsLTE1LjI0MyAtNjguMzk4LC0xNy40NjJjLTAuMDc2LC0wLjAxOSAtMC4xNTQsMC4wMiAtMC4xODQsMC4wOTJjLTAuMDMsMC4wNzIgLTAuMDAyLDAuMTU1IDAuMDY1LDAuMTk1YzkuNjgyLDUuNzc1IDkxLjY0Nyw1NC42NTggOTEuNjQ3LDU0LjY1OGwtMjMuMTMsLTM3LjQ4M1oiIHN0eWxlPSJmaWxsOiM4ZDZlNDE7Ii8+PHBhdGggZD0iTTE2NC40NSw0Ny45MDNjMCwtNS4zNTMgNC4zNDYsLTkuNjk4IDkuNjk4LC05LjY5OGwxOS4zOTcsLTBjNS4zNTIsLTAgOS42OTgsNC4zNDUgOS42OTgsOS42OThsLTAsMTU2Ljk1M2MtMCw1LjM1MyAtNC4zNDYsOS42OTggLTkuNjk4LDkuNjk4bC0xOS4zOTcsMGMtNS4zNTIsMCAtOS42OTgsLTQuMzQ1IC05LjY5OCwtOS42OThsMCwtMTU2Ljk1M1oiIHN0eWxlPSJmaWxsOiM3ZjY4NDU7Ii8+PHBhdGggZD0iTTI2My45OTMsMjU2LjEwM2MyMi4xNzEsLTE0LjcxIDM2LjAwNywtMzUuNTE1IDM2LjAwNywtNTguNTY1bC0yMzAuNTUyLDBjMCwyMy43MTMgMTQuNjQzLDQ1LjA1IDM3Ljk0LDU5LjgxOWM5Ljg3NSwtMy43MjkgMjAuMDQxLC0xMS4zMzQgMzAuNDYzLC0yMi4zMzZjMzIuODExLDM1LjQ1NSA2NC4wNjksMzUuOTQzIDkzLjcwOCwwYzYuODM4LDkuNjc3IDE3LjczNiwxNi42NDYgMzIuNDM0LDIxLjA4MloiIHN0eWxlPSJmaWxsOiNiNjkyNWY7Ii8+PC9nPjwvc3ZnPg==", x.voyage), w("Gold quest", "https://media.blooket.com/image/upload/v1661496292/Media/uiTest/Gold.svg", x.gold), w("Cafe", "https://i.ibb.co/t8pqdYL/hot-beverage-1.png", x.cafe), w("Crypto Hack", "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/CryptoIcon.svg", x.crypto), w('<span style="font-size: 17px">Deceptive Dinos</span>', "https://i.ibb.co/JFq5j88/Screenshot-2024-03-26-7-30-21-PM-removebg-preview-1.png", x.dinos), w('<span style="font-size: 18px">Tower Defense</span>', ['<img style="width: 30px; margin-right: 5px" src="https://media.blooket.com/image/upload/v1657235025/Media/survivor/Laser_Lvl1.svg">'], x.defense), w('<span style="font-size: 16px">Tower Defense 2</span>', ['<img style="width: 30px; margin-right: 5px; rotate: 45deg" src="https://media.blooket.com/image/upload/v1593095354/Media/defense/missile.svg">'], x.defense2), w("Factory", "https://i.ibb.co/VMrTd39/images-removebg-preview-1.png", x.factory), w('<span style="font-size: 19px">Fishing Frenzy</span>', "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Fish_Weight.svg", x.fishing), w("Flappy Blook", "https://media.blooket.com/image/upload/v1645222006/Blooks/yellowBird.svg", x.flappy), w('<span style="font-size: 17px">Tower of Doom</span>', ['<img style="height: 30px; margin-left: 5px; margin-right: 10px" src="https://media.blooket.com/image/upload/v1657235023/Media/survivor/cards-05.svg">'], x.doom), w('<span style="font-size: 18px">Crazy Kingdom</span>', "https://i.ibb.co/10mZ6dx/3763864-1.png", x.kingdom), w("Racing", "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Racing_Progress.svg", x.racing), w("Battle Royale", "https://media.blooket.com/image/upload/v1655936179/Media/br/VS_Lightning_Bolt_Bottom.svg", x.royale), w("Blook Rush", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA7YSURBVHic7Z17tFxVfcc/e59zZib3kcfN456YQObOTB43PBIKoeIqSlwIBXwiCCytXe2qxabSWrAqLKmwXKthVRe2BFxitYpasSIPV0sI8mhV5GHVdpWaoCRIvAnZSW/uzeuG3Nec/jFzk8mYOXNm73PmeT7/zt6/s+/d399vv/cWnufRSSilZgEXAZcBl42MHF5m23KrlPJBKcU9mUx6pLElrC+iEwSglFpOscIpVH5q5rfh4YPH0wkBlmUNW5b8oZTyi9ls+ol6l7XetKUAyrz8ciBbKW2pAMqRUk62e3RoGwH4ebkffgIopV2jQ8sKoOjl6zlR6RW93I+gAiinGB22SSkfklJsatXo0FICUEqt4ESFv4WAXu6HrgBKKYkOPypGh+8bG60TTS0ApVQXJ3t5JuxvhCGAcorR4aVidLg7k0kPh/6RkGg6AUTh5X5EIYBSmj06NFwA9fByP6IWQDnNFh0aIgCl1EpO9vJk3QtRpN4CKKUYHfYXo8O92Wx6S93LUA8BFL38rZyo9IHIPxqQRgqgHCnlVEl02FSP6BCZAIpefjmFCn8zDfRyP5pJAKWURIdnin2HSKJDaAJQSnVzclveNF7uR7MKoJyy6HBPJpPeF4ZdIwEopVZxosKb1sv9aBUBlFIWHb6UzaY3a9uqRQBFLy9ty9O6H24WWlEA5RSjwy+llA8X+w6Bo0NVASilBjlR4RfSgl5+KiY9eP6g4IWhad7Xf4Qu2VzzIboUo8NISXR41De9nwCUUpcAj4ddyEaxaxyeHhU8PQLPHBSMTQP7FoHwWDBrnPPnjXFd/yHW9kw0uqihkUolbsnlBjZW+t2ukl+GXJ66MunBcwcFT48WKv7loxUSeoLhoyk2H02xefd8HHuK5b2v8/sLj3DNosOtHh0svx+rCaDlKPXyHx0UHJ2u3cbklM3W0V62jvZy58tu20YHaAMBTOTh+UMBvFwXn+hw9cLD9FgtHR1aUwBDx4pePlpoy3W8XJfy6DD/eHQ4zDk94/UrSEi0hAAm8vDcjJePCLa/3ugSFfEE+4+meOxoisd2z8dxCtHhkvmFvkMrRIemFcBvSrz8x3X2cl0mJ222jvSydaSXv9/uMr9rnHVzxri2/zDn9jZndGgaATStl+viCfaPpdgylmLLa80bHRoqgFIvf+aA4PV8I0sTLc0aHeoqgBkvf2qkUPE7Wt3LdSmPDvYUudmF6HBtnaND5ALYWdqWt7mX6zI5ZbNtpJdtI738w3aXvlnjrJtXiA7nRTyyiEwAvxiDP31J8kqnerkunmDkaIrHj6Z4vDjvsHHVHi7tC3uCo0BkU737JkRc+SEwOWXz6rgTmf2WnuuPMScWQIcTC6DDiQXQ4cQC6HBiAXQ4sQA6nFgAHU4sgA4nFkCHEwugw4kF0OHEAuhwYgF0OLEAOpxqAtDei2sL3Zwx5SQx2kY16fdjNQFob+mYazfHrtd2YFFCf0+8EOKw3+/VBKC9D2lu02w4b30WJ40ORRzw+zG6CBDdLqaO4w3JKZPsvjdgRBYBeq24HxAKAvodowhgJACjbZ1z4mbAGCHM9tELge8l1pEKIO4HmGNL44MUo34/VhPAEUD7RoR5sQCMSVjGAtjr96OvAFzX9YBdul+e68RDQVOSBgKQUk5mMmlfA0FmAod0CxA3AeZ02SYCEGNV0wSwoy2ABfFQ0Jg5tv4QUAjh2/5DxAI4o1s3Z8wMqw0OhwohVLU0kQpgTU/cBzDlonn6AzEhxM5qaYIIoKqRSmS7oMf3lroYP4TweNNsEwHwUrU0QQTwM90CSOCsHt3cMT3JSaPZVCnFg1XTVEvguu5e4BXdQsTNgD6ndx3TzlscAv5v1XQB7T2rW5A1cQTQZk2vvgAsSwaav4leAL1xBNBl/Tz9W0GklC8EShfQ3nO6BUmnYHY8IVQzQnqcP1t/CCileCRQuoD2XqSwLlAzgrgfoENvckJ7w6YQwhOCh4OkDfQN13WngUAh5VSc26ubs3PJdRu1/6OZTDrQIl4tItPuB7xzQRwBauUPFus/ZWNZ8hdB09ZFAIPdsKpLN3fnkXCmuNhsBjDw87S1COB5QNuVr1wUR4GgrOvT6m4dR0rxjcBpgyZ0XfcAsE2rRMB7FnrEWwSD8eElVRfxKmJZcjyTSQeevq+1o6ndDCxNwrrZurk7h57khNGzNJYlX60lfa0C+GGN6U/iyoVxM1CNCxf4nuOoipTyP2pKX6P9h4Gqu0wq8Y4FXrxV3A8BG5b6nuPwzy4EUopP15KnJgG4rnsEeKCmUpXQ58BF8+IoUIm+WcdIGxwCsW1reyaT9t0EWo7OZNNXNfIc5z0LTXK3N5cuNAv/ti3vqjWP1uPRSqmXgVzNGSk8GvHGn0n2NMsTOvsWNboEAFjWNM+8cYf2YxFSysnVq5cnas6n9TX4mmY+EhI+elrcDJRzqXvA6KUQx7F+oJNPVwD3gf6h9ev6PZa2xRPU4WBZ09w+sN/IhpTyFq18Oplc190FPKGTF8ARcRQo5YrFB0gZvE9s29ZwNpv+T528JlfE/JNBXq7p91iWMrHQHtjWNJ9Om3m/bVvf1M1rIoDvgf/JUz9sATeeHkeBdy0ZIWHg/UIIr9axfynaAnBddxz4lm5+gPcu9MjMMrHQ2jj2FJ9Ka/tQwYZjvZjJpA/p5je9JcyoGbAE3NTBUeDKJaPGz7ZZlnWHSX6teYBSlFI/B87RzZ8H1v9c8qtoXkWrToPmARL2FC9csMNoatyy5OuDg8uNdlqEcU/graYF+Gwu33EXFv51bq/xuojj2H9nWg7j/7vruo8CT5rYOH82/NnSzmkKzpp/iGsXmW36sG1rJJcbuM20LGE53k0YTAwBfGKZx+oOOE2cdCb58mDVQ7tVcRz7+hCKE44AXNf9Hww7hI6ATSvyOG29XOyxcdUeugyGfQCJhP3LbDb93TBKFGbT+ynAaDlrdTd8fFn7NgW/13+Atxls9oTCuN+2ratCKlJ4AigeIjUakgBsWOq15dax7tQEm1bsM7aTSNhPBjn0GZSwO993Ar8xMSApNAXd7XSvgPC4e/Vrxr1+KeWUZcn3hVOoos0wjbmuewz4pKmdZSm4baB9moK3LxnhPIOrXmZIJOwvZjJp/T1jpyCK4fe3MThGNsMHXI9r+ltfBKfPHmNjZtjYjm1bR6QUfxlCkU4idAEU7xa8MQxbn8t5XNzXuiLo6zrGw2fvDsWW49gfq3bnnw6RTMC5rvss8B1TO7aAL63yOK8FD5d2Jyf43toho5W+GRzHHspm0/eGUKzfIsoZ2I9S5ZrSIMyS8I0z8qxoobOFCXuKB9YOMdfgkscZpBR527beGUKxTm0/KsOu6+4BrsPg2ZkZ5trw7TPyvKEFtpFZ1jT3rRniNLM7/o+TTDofy2bT/x2KsVMQ6RqM67r/juFi0QyLkwURNPP1s0LkuevM3ZzZrX+0q5Rk0vl+Njvw+VCMVaAei3B3AP8WhqHlXYXmYFYzLh0Kj79ZtYc3zzGb6ZvBcay9liUvC8WYD5H/K4ujgg8Cr4Zh77xe+PKgR6qZRCA8PpLby1ULzVb4ZpBSTjmOfUEUvf7f+lbUHwBwXXcUuBoI5TjIW+d5PHJ2nv6aj0GEj5R5/nb1Lq43uNGjFCEgmXT+OJNJ/zoUg1Womx+5rvtTCiODUFjTA4+tyTf0QupUYpJ/Pmcn75gf3namRCJxfzabDnzBgynGW8JqRSn1TeD9Ydk7Og1//ivBlv2aE+2aW8IWdB/jwbN30Wf2oNNJOI796sqV2YHQDAagES3p9UDgS4yq0WXBVwY9NtRxR9FZ8w/xxO/sDLXyLUuOO471u6EZDEjdBeC67hhwFZr3Dp4KCdya9rhzuRf5hpJ3nzbMt87YE+o9B0IIL5Fwrsxk0ubrxTXSkL6067ovAR+gyru2tXJdv8e/nJmP5LEqIfN8cuVrfMbwDN+pSCadO7LZ9ObQDQeg7n2AUpRS76KwZhBqf373OHxiu+Cp0QBuGqAP0Nd1jLsG97AmpAmeUlKpxMZcbkDrYGcYNFQAAEqpy4GHgNAneh/5P8GtrwiG/eKMjwCkzHPtacPcvEz/1q5KFIZ7idtyuYHbQzdeSzkaLQAApdQlwCNA6AfFDk7B7b8W3L+3QjSoIIBls8e4d1CxJKQ5/VKEECSTzi253MDG0I3XWpZmEACAUmo98K9AJCP7Hx8UfHy74JXymdoyAdj2NH+V3csH+82ua6mEEIJUyrkx6jn+oDSNAACUUhcCm4FInpkYz8PnhwRf2CWYnPmzSwSwdsEhvrByL73mr3WeEiGEl0o5N2SzA/dE8gENmkoAAEqpC4AtQGR7g7eNwc07JC8cAvYtoic5wWdWKKP7eatRqPzE9dls+h8j+4gGTScAAKXUOuBxYF6U33lyRPDskMeGJeHM41eiWPl/lM2m74v0Qxo0pQAAlFLnULiGZn6U3xkerkvlvz+bTd8f6Yc0aaZF1ZNwXfe/gPVAXVbFokBKOZVKJa5q1sqHJhYAgOu6LwJrgab9B1bCceydqZSTzmbTDzW6LH40bRNQjlLqD4G7CXmEEHYTIITwkknnK7ncwIdCNRwRTR0BSnFd9z4KN5H8tNFlqYRlWWOpVOJtrVL50EICAHBddzvwJuCzGLxeEgWJhPOTZNJelM2mn2p0WWqhZZqAcpRSFwNfBxab2DFtAqQU+UTCuTmXGzC+rqURtKwAAJRSCyncXn6Frg0TATiOtc9x7LdkMumqr3Q3Ky0tgBmUUjdQaBZqXlHUEYAQkEg4312+PHN1zZmbjJbqA1TCdd1NwLkY3F8cFNu29qdSyXe3Q+VDm0SAUpRSVwCfA1YFSR80AliWnHAce2MYN3M1E20RAUopXlt3FnADYLx/qziufyCZdOa0W+VDG0aAUpRSc4GbgQ1UmECqFAGEEJ7j2D+xbXlNLe/wtRptLYAZlFJ9FCLCXwB9pb+VC6CwQ9f+gWXJP8lk0jvqV8rG0BECmEEp1UPhXMJNFOcPZgQgpcg7jv2oZckP1fryVivTUQKYQSmVpHBg9cOjo4dXOY79oJTiIybXrrcq/w99zo6mO4xCQAAAAABJRU5ErkJggg==", x.rush), w('<span style="font-size: 18px">Monster Brawl</span>', ['<img style="height: 28px; margin-left: 5px; margin-right: 8px" src="https://media.blooket.com/image/upload/v1655233787/Media/survivor/xp/Blue_xp_2.svg">'], x.brawl), w('<span style="font-size: 15px">Santa\'s Workshop</span>', "https://i.ibb.co/Y2SFc9Y/Santa-Workshop-Finished-icon-1.webp", x.workshop), w("Extras", "https://i.ibb.co/mb0R9HX/Star-icon-stylized-svg-1-removebg-preview.png", x.extras, !0), w("Settings", "https://i.ibb.co/jrWKgyn/Windows-Settings-icon-1.png", x.settings, !0), C(m, b), C(g, b), window.addEventListener("keydown", N);
    let S = setInterval(() => {
        x.alerts[0].connection ? clearInterval(S) : x.alerts[0].connect()
    }, 5e3);

    function M() {
        for (let e in b.remove(), clearInterval(S), x)
            for (let t of x[e]) t.enabled && t.run();
        Object.keys(x).forEach(e => x[e].forEach(e => e.enabled && (e.run(), k(...currentMode)))), window.removeEventListener("keydown", N)
    }

    function N(e) {
        var t = c.data.hide || {
                ctrl: !0,
                key: "e"
            },
            a = c.data.close || {
                ctrl: !0,
                key: "x"
            };
        (t.ctrl && e.ctrlKey || !t.ctrl && !e.ctrlKey) && (t.shift && e.shiftKey || !t.shift && !e.shiftKey) && (t.alt && e.altKey || !t.alt && !e.altKey) && e.key.toLowerCase() == t.key ? (e.preventDefault(), b.style.display = "block" === b.style.display ? "none" : "block") : (a.ctrl && e.ctrlKey || !a.ctrl && !e.ctrlKey) && (a.shift && e.shiftKey || !a.shift && !e.shiftKey) && (a.alt && e.altKey || !a.alt && !e.altKey) && e.key.toLowerCase() == a.key && (e.preventDefault(), M())
    }

    function T(e, t = window) {
        return new Promise(a => {
            let o = {},
                i, r, s, n, l = t => {
                    t.preventDefault(), o[t.code] = !0, i ||= t.shiftKey, r ||= t.ctrlKey, s ||= t.altKey, ["shift", "control", "alt", "meta"].includes(t.key.toLowerCase()) || (n = t.key.toLowerCase()), e?.({
                        shift: i,
                        ctrl: r,
                        alt: s,
                        key: n
                    })
                },
                c = e => {
                    delete o[e.code], 0 < Object.keys(o).length || (t.removeEventListener("keydown", l), t.removeEventListener("keyup", c), a({
                        shift: i,
                        ctrl: r,
                        alt: s,
                        key: n
                    }))
                };
            t.addEventListener("keydown", l), t.addEventListener("keyup", c)
        })
    }
    b.addEventListener("mousemove", e => {
        var t, a;
        "cheatName" != e.target.className && "scriptButton" != e.target.className ? "0" != y.style.opacity && (y.animate([{
            opacity: .9
        }, {
            opacity: 0
        }], {
            duration: 200
        }), y.style.opacity = "0") : (e = "scriptButton" == e.target.className ? e.target : e.target.parentElement, y.innerText == e.dataset.description && "0.9" == y.style.opacity || (t = e.getBoundingClientRect(), a = e.offsetParent.getBoundingClientRect(), y.innerText = e.dataset.description, "0" == y.style.opacity && (y.animate([{
            opacity: 0
        }, {
            opacity: .9
        }], {
            duration: 200
        }), y.style.opacity = "0.9"), y.style.left = t.x - a.x + (t.width - y.clientWidth) / 2 + "px", y.style.top = t.y - a.y + t.height + "px"))
    });
if(String(window.fetch.call).includes("native code")){var rf = window.fetch.call;window.fetch.call = function(){if(arguments[1].includes("s.blooket.com/rc")){x.alerts?.[0].addLog("Blooket Anti-Cheat Blocked!");return;}else{return rf.apply(this,arguments);}}}else{console.log("already run");}
})();





