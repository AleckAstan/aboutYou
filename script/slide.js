! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.sideways = {})
}(this, function(e) {
    "use strict";
    let t = document.querySelector(".sideways"),
        n = document.querySelector(".sideways > .pages"),
        o = document.querySelectorAll(".page-left"),
        i = document.querySelectorAll(".page-right"),
        a = document.querySelectorAll(".page"),
        s = a.length;
    var r = {
        sideways: t,
        container: n,
        pageLefts: o,
        pageRights: i,
        pages: a,
        numPages: s,
        update: function() {
            t = document.querySelector(".sideways"),
                n = document.querySelector(".sideways > .pages"),
                o = document.querySelectorAll(".page-left"),
                i = document.querySelectorAll(".page-right"),
                a = document.querySelectorAll(".page"),
                s = a.length
        }
    };
    const d = document.createElement("style");
    d.type = "text/css", d.innerHTML = `
                                        \n\n.sideways {\n overflow: hidden;\n}
                                        \n\n.sideways > .pages {\n  position: fixed;\n}
                                        \n\n.page {\n  float: left;\n}
                                        \n\n.animated {\n  transition: all 300ms ease-out;\n}\n`;
    var l = {
        load: function() {
            document.getElementsByTagName("head")[0].appendChild(d)
        },
        addAnimation: function() {
            r.container.classList.add("animated")
        },
        removeAnimation: function() {
            r.container.classList.remove("animated")
        },
        updateWidth: function() {
            r.container.style.width = `${r.sideways.offsetWidth * r.numPages}px`;
            for (let e of r.pages) e.style.width = `${r.sideways.offsetWidth}px`
        }
    };
    let c = 0,
        u = document.querySelectorAll(".page");
    const m = e => new Promise(t => setTimeout(t, e)),
        f = () => c;
    async function y(e) { u[c].classList.contains("sw-scroll") && (u[c].style.overflowY = "hidden"), r.container.style.transform = `translate3d(-${r.sideways.offsetWidth * e}px, 0px, 0px)`, u[c = e].classList.contains("sw-scroll") && (await m(300), u[c].style.overflowY = "scroll") }
    async function g() { l.addAnimation(), y(c - 1), await m(300), l.removeAnimation() }
    async function p() { l.addAnimation(), y(c + 1), await m(300), l.removeAnimation() }
    e.init = function(e) {
            l.load(), y(e), l.updateWidth(),
                window.addEventListener("resize",
                    () => { l.updateWidth(), y(f()) }),
                r.pageLefts.forEach(e => e.addEventListener("click", () => g())),
                r.pageRights.forEach(e => e.addEventListener("click", () => p()))
        }, e.delay = m,
        e.moveTo = y,
        e.moveLeft = g,
        e.moveRight = p,
        e.movePageToLeft = function(e) {
            let t = u[e],
                n = u[c];
            e !== c ? (r.container.removeChild(t),
                r.container.insertBefore(t, n), e > c && y(++c),
                u = document.querySelectorAll(".page")) : console.warn("")
        }, e.movePageToRight = async function(e) {
            let t = u[e],
                n = u[c];
            e !== c ? (r.container.removeChild(t), r.container.insertBefore(t, n.nextSibling), e < c && y(--c), u = document.querySelectorAll(".page")) : console.warn("")
        }, e.getCurrentPage = f, e.getPages = (() => u), Object.defineProperty(e, "__esModule", { value: !0 })
});