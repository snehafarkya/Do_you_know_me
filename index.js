const que = document.querySelectorAll(".ques")
que.forEach((ques)=>{
   const btn = ques.querySelector(".btn") 
  btn.addEventListener("click",()=>{
      ques.classList.toggle("show-text")
  })
})