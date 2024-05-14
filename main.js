'use strict'
let users = [
    {
        name: "Wayne Barnett",
        role : "Founder & CEO",
        image: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role : "Chief Editor",
        image: "img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role : "Office Manager",
        image: "img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role : "Social Media Manager",
        image: "img/angela-lopez-social-media-manager.jpg"
    
    },
    {
        name: "Scott Estrada",
        role : "Developer",
        image: "img/scott-estrada-developer.jpg"
    
    },
    {
        name: "Barbara Ramos",
        role : "Graphic Designer",
        image: "img/barbara-ramos-graphic-designer.jpg"
    }
];

for(let i=0 ; i < users.length; i++) {
    let ul = document.getElementById("membri");
    let li = document.createElement("li");
    li.innerText = users[i].name;
    ul.appendChild(li);
}
 for(let i=0 ; i < users.length; i++) {
     let ul = document.getElementById("membri");
     let li = document.createElement("li");
     li.innerText = users[i].role;
     ul.appendChild(li);
 }
 for(let i=0 ; i < users.length; i++) {
     let ul = document.getElementById("membri");
     let li = document.createElement("img");
     li.src = users[i].image;
     ul.appendChild(li);
 }

    