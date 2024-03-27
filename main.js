/*
const addTaskForm=document.querySelector("form");
const checkboxes = [];
addTaskForm.onsubmit=function (e){
    e.preventDefault();
    if(e.target.elements['task'].value){
   const elements=e.target.elements;
   const input=elements['task'].value;
   console.log(input);
   addTask(input);
    }
    else {
        alert("you must enter text")
    }
}
function addTask(input){
    const result=`
    <li>
    <input class"box"  type="checkbox" onchange="change(this)"  name="task" >
    <span >${input}</span>
    </li> `;
  
    document.querySelector("ul").innerHTML+=result;
    console.log(document.querySelector("ul input").checked);
    checkboxes.push(document.querySelector("ul.tasks li:last-child input"));
}
function change(checkbox){
    for (let index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index] === checkbox) {
            const span = document.querySelectorAll("ul.tasks span")[index];
            if (checkbox.checked) {
                span.classList.add("under-line");
            } else {
                span.classList.remove("under-line");
            }
            break;
        }}
}

    // const checkboxArray=[];
    // checkboxArray.push(checkbox);
 
    // console.log(checkboxArray);
    
    // if(checkbox.checked){
    //    const spans= document.querySelectorAll("span");
    //    console.log(spans);
    // }
    // else {
    //     document.querySelector("span").classList.remove("under-line"); 
    // }*/
const addTaskForm = document.querySelector("form");
const checkboxes = [];

addTaskForm.onsubmit = function(e) {
    e.preventDefault();
    if (e.target.elements['task'].value) {
        const elements = e.target.elements;
        const input = elements['task'].value;
        addTask(input);
    } else {
        alert("you must enter text")
    }
}

function addTask(input) {
    const result = `
        <li>
            <input class="box" type="checkbox" onchange="change(this)" name="task">
            <span>${input}</span>
        </li>`;
  
    document.querySelector("ul").innerHTML += result;
    checkboxes.push(document.querySelector("ul.tasks li:last-child input"));
}

function change(checkbox) {
    const li = checkbox.closest('li');
    console.log(li);
    const span = li.querySelector("span");
    console.log(span);
    if(checkbox.checked){
        span.classList.add("under-line");
    }
    else  span.classList.remove("under-line");
    
}
