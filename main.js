'use strict'
let wayneBarnett = {
    role : "Founder & CEO",
    image: "img/wayne-barnett-founder-ceo.jpg"
};
console.log(wayneBarnett);
let ul = document.getElementById("primo");
for (let i=0; i < wayneBarnett.lenght; i++){
    let li = document.createElement("li");
    li = wayneBarnett[i];
    ul.appendChild(li);
}


const angelaCaroll = {
    role : "Chief Editor",
    image: "img/angela-caroll-chief-editor.jpg"
}
console.log(angelaCaroll);

const walterGordon = {
    role : "Office Manager",
    image: "img/walter-gordon-office-manager.jpg"
}
console.log(walterGordon);

const angelaLopez = {
    role : "Social Media Manager",
    image: "img/angela-lopez-social-media-manager.jpg"

}
console.log(angelaLopez);

const scottEstrada = {
    role : "Developer",
    image: "img/scott-estrada-developer.jpg"

}
console.log(scottEstrada);

const barbaraRamos = {
    role : "Graphic Designer",
    image: "img/barbara-ramos-graphic-designer.jpg"
}
console.log(barbaraRamos);