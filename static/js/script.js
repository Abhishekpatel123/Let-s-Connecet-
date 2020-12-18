// like code start here

const likeBtn = document.querySelector(".like-btn");
const like = document.querySelector(".like");
let count1 = 1;

likeBtn.addEventListener("click", () => {
  like.innerHTML = count1++;
});

const commentBtn = document.querySelector(".comment-btn");
const comment = document.querySelector(".comment");
let count2 = 1;

commentBtn.addEventListener("click", () => {
  comment.innerHTML = count2++;
});

const shareBtn = document.querySelector(".share-btn");
const share = document.querySelector(".share");
let count3 = 1;

shareBtn.addEventListener("click", () => {
  share.innerHTML = count3++;
});



// like code end here




// responsive aside bar code start



const aside = document.querySelector('aside');
const openBar = document.querySelector('.open-bar');
const closeBar = document.querySelector('.close-bar');
const mainDiv = document.querySelector('.main-div');

openBar.addEventListener('click',()=>{
  aside.style.display = "flex";
  closeBar.style.display = "block";
  openBar.style.display = "none";

});

closeBar.addEventListener('click',()=>{
  aside.style.display = "none";
  closeBar.style.display = "none";
  openBar.style.display = "block";


});


// responsive aside bar code end 


// // ================   model code start here ==================

// const addQuestion = document.querySelector(".add-question");
// const postQuestion = document.querySelector(".post-question");
// const postModelDiv = document.querySelector(".post-model-div");

// addQuestion.addEventListener("click", () => {
//   postModelDiv.style.display = "flex";
// });

// const cancelDiv = document.querySelector(".cancel-div");

// cancelDiv.addEventListener("click", () => {
//   postModelDiv.style.display = "none";
// });




// // ================   model code start here ==================

// const postQuestionId = document.getElementById("post-question-id");
// const btn1 = document.querySelector('.btn1');
// const questionHereA = document.getElementById("question-here-a");
// const hello = document.querySelector('.hello');

// const questionSave = document.getElementById('question-save');

// btn1.addEventListener("click", () => {
//   const question = postQuestionId.value;
//   console.log(question)
//   // hello.innerHTML = question;

//   questionSave.innerHTML = question;
//   // questionHereA.innerText = postQuestionId.value;

//   console.log(question)

//   // questionHereA.innerHTML = question;
// });
