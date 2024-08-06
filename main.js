"use strict";

const svg = document.querySelector("svg");
const path = svg.querySelector("path");
const links = document.querySelectorAll(".linkwrappers a");

renderMenu();

function renderMenu(e) {
    links.forEach(l => l.classList.remove("active"));
    let d = "";
    let {width: w, height: h, left: l}
    = svg.getBoundingClientRect();
    if(!e)
    {
        d =
        `M5 20 Q5 5 20 5
        L${w - 20} 5
        Q${w -5} 5 ${w - 5} 20
        L${w - 5} ${h - 20}
        Q${w - 5} ${h - 5} ${w - 20} ${h - 5}
        L20 ${h - 5}
        Q5 ${h - 5}
        5 ${h - 20}
        L5 20`;
    }
    else {
        let {left: al, right: ar, width: aw, top: at}
        = e.currentTarget.getBoundingClientRect();
        let leftoffset = al - l;
        let thirdwidth = aw / 3;
        let newtop = at / 3;
        d =
        `M5 20 Q5 5 20 5
        L${leftoffset - thirdwidth} 5

        C${leftoffset - 20} 5
         ${leftoffset - 20} ${newtop}
         ${leftoffset + 30} ${newtop}
        L${leftoffset + aw - 30} ${newtop}
        C${leftoffset + aw + 20} ${newtop}
         ${leftoffset + aw + 20} 5
         ${leftoffset + aw + thirdwidth} 5

        L${w - 20} 5


        Q${w - 5} 5 ${w - 5} 20
        L${w - 5} ${h - 20}
        Q${w - 5} ${h - 5} ${w - 20} ${h - 5}
        L20 ${h - 5}
        Q5 ${h - 5}
        5 ${h - 20}
        L5 20`;
        e.currentTarget.classList.add("active");
    }
    path.setAttribute("d", d);
}


links.forEach(a => {
    a.addEventListener("click", renderMenu);
});