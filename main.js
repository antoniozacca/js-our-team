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
    const user = users[i];
    let ul = document.getElementById("membri");
    let li = document.createElement("li");
    li.classList.add("col-4")
    li.classList.add("text-center")
    
    // image
    let img = document.createElement("img");
    img.classList.add("p-5");
    img.src = user.image;
    li.appendChild(img);

    // name
    let h3 = document.createElement("h3");
    h3.append(user.name)
    li.appendChild(h3);

    // role
    let p = document.createElement("p");
    p.append(user.role);
    li.append(p);

    ul.appendChild(li);
    
}

// for(let i=0 ; i < users.length; i++) {
//     let ul = document.getElementById("membri");
//     let li = document.createElement("li");
//     li.innerText = users[i].name;
//     ul.appendChild(li);
// }
//  for(let i=0 ; i < users.length; i++) {
//      let ul = document.getElementById("membri");
//      let li = document.createElement("li");
//      li.innerText = users[i].role;
//      ul.appendChild(li);
//  }
 

    