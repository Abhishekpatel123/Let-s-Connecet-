

const postQuestionId = document.getElementById("post-question-id");
const btn1 = document.querySelector('.btn1');
const questionHereA = document.getElementById("question-here-a");

const questionSave = document.getElementById('question-save');

mainDiv2 = document.getElementById('main-div2');

btn1.addEventListener("click", () => {
  const question = postQuestionId.value;
  mainDiv2.innerHTML = mainDiv2.innerHTML +  `
  <div class="outer-live-post-div">

                    <div class="top-div">
                        <i class="fas fa-star"></i>
                        <p>Questions For You</p>
                    </div>
                    <hr>
                    <div class="middle-div">
                        <p>Mathematic</p>
                        <h2 id="question-save">${question}</h2>
                        <div>
                            <h5>No answer yet</h5><span>Last followed in 1m ago</span>
                        </div>
                    </div>
                    <div class="bottom-div">
                        <button type="button">
                            <i class="far fa-edit"></i>
                            <span>Answer</span>
                        </button>
                        <button type="button">
                            <i class="fab fa-gratipay"></i>
                            <span>Follow</span>
                        </button>
                        <button type="button">
                            <i class="fab fa-gratipay"></i>
                            <span>Follow</span>
                        </button>

                    </div>
                </div>
  
  
  `;
//   questionSave.innerHTML = question;

  console.log(question)

});





// fetching data from /a 

const option = {
    method : "get",
    headers : { ContentType : "application/json"}
  }
  
  fetch("/a",option).then((res)=>{
    return res.json();
  }).then((res2)=>{

    
    const question = postQuestionId.value;

    res2.forEach(element => {
        console.log(element)
        const QuestionType = element.QuestionType;
        const Question = element.Question;



        mainDiv2.innerHTML = mainDiv2.innerHTML +  `
  <div class="outer-live-post-div">

                    <div class="top-div">
                        <i class="fas fa-star"></i>
                        <p>Questions For You</p>
                    </div>
                    <hr>
                    <div class="middle-div">
                        <p>${QuestionType}</p>
                        <h2 id="question-save">${Question}</h2>
                        <div>
                            <h5>No answer yet</h5><span>Last followed in 1m ago</span>
                        </div>
                    </div>
                    <div class="bottom-div">
                        <button type="button">
                            <i class="far fa-edit"></i>
                            <span>Answer</span>
                        </button>
                        <button type="button">
                            <i class="fab fa-gratipay"></i>
                            <span>Follow</span>
                        </button>
                        <button type="button">
                            <i class="fab fa-gratipay"></i>
                            <span>Follow</span>
                        </button>

                    </div>
                </div>
  
  
  `;




        
    });
  
  
  
  });