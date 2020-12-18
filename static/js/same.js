// responsive nav bar code start

const menuBar = document.getElementById('menu-bar');
const cancel = document.getElementById('cancel');
const outerNav = document.querySelector('.outer-nav');


menuBar.addEventListener('click',()=>{
  outerNav.style.transform = "translate(0%)"
  cancel.style.display = "block";
  menuBar.style.display = "none";
});
cancel.addEventListener('click',()=>{
  outerNav.style.transform = "translate(-100%)"
  menuBar.style.display = "block";
  cancel.style.display = "none";
});


// responsive nav bar code end



// ================   model code start here ==================

const addQuestion = document.querySelector(".add-question");
const postQuestion = document.querySelector(".post-question");
const postModelDiv = document.querySelector(".post-model-div");

addQuestion.addEventListener("click", () => {
  postModelDiv.style.display = "flex";
});

const cancelDiv = document.querySelector(".cancel-div");

cancelDiv.addEventListener("click", () => {
  postModelDiv.style.display = "none";
});


// ================   model code end here ==================


window.addEventListener('resize',(e)=>{
  if(window.innerWidth > 800){
    outerNav.style.transform = "translateX(0%)";
     menuBar.style.display = "none";  
  }
  else{
    outerNav.style.transform = "translateX(-100%)";
    menuBar.style.display = "flex";
  }
})