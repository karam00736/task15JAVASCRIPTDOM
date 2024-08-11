let clickBtn = document.querySelector(".clickMe",);

let displayText = document.querySelector("#text-change")
let inputBox = document.querySelector(".inputText")
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");

clickBtn.addEventListener("click", function(){
  displayText.innerHTML = "Hello, " + inputBox.value;
})
  
box1.addEventListener("click", function(){
  this.style.backgroundColor ="red";
  this.style.color ="white";

  })
  box2.addEventListener("click", function(){
    this.style.backgroundColor ="blue";
    this.style.color ="white";
  
    })
    box3.addEventListener("click", function(){
      this.style.backgroundColor ="green";
      this.style.color ="white";
    
      })
      box4.addEventListener("click", function(){
        this.style.backgroundColor ="yellow";
        this.style.color ="white";
      
        })