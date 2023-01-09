function addNewWEField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");

    let weOb = document.getElementById("we");

    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb)
}

function addNewskillField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");

    let skillOb = document.getElementById("skill");

    let skillAddButtonOb = document.getElementById("skillAddButton");

    skillOb.insertBefore(newNode, skillAddButtonOb)
}

function addNeweducationField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("educationField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");

    let educationOb = document.getElementById("education");

    let educationAddButtonOb = document.getElementById("educationAddButton");

    educationOb.insertBefore(newNode, educationAddButtonOb)
}

function addNewaffiliationField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("affiliationField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");

    let affiliationOb = document.getElementById("affiliation");

    let affiliationAddButtonOb = document.getElementById("affiliationAddButton");

    affiliationOb.insertBefore(newNode, affiliationAddButtonOb)
}

function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");

    let aqOb = document.getElementById("aq");

    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb)

}


function generateCV() {
    console.log("heyyyaa")

    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField;

    document.getElementById("nameT2").innerHTML = nameField;


    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    let wes = document.getElementsByClassName("weField");

    let str = "";

    for(let e of wes){
        str = str + `<li> ${e.value}</li>`;
    }

    document.getElementById("weT").innerHTML = str;


    let educations = document.getElementsByClassName("educationField");

    let str4 = "";

    for(let e of educations){
        str4 = str4 + `<li> ${e.value}</li>`;
    }

    document.getElementById("educationT").innerHTML = str4;



    let skills = document.getElementsByClassName("skillField");

    let str2 = "";

    for(let e of skills){
        str2 = str2 + `<li> ${e.value}</li>`;
    }

    document.getElementById("skillT").innerHTML = str2;

    

    let affiliations = document.getElementsByClassName("affiliationField");

    let str3 = "";

    for(let e of affiliations){
        str3 = str3 + `<li> ${e.value}</li>`;
    }

    document.getElementById("affiliationT").innerHTML = str3;




    let aqs = document.getElementsByClassName("eqField");

    let str1 = "";

    for(let e of aqs){
        str1 = str1 + `<li> ${e.value}</li>`;
    }

    document.getElementById("aqT").innerHTML = str1;

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

function printCV(){
    window.print();
}








  
  
  
