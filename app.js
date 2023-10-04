const quote = document.querySelector(".quote");
const button = document.querySelector(".btn");
const author = document.querySelector(".author");
const vol = document.querySelector(".volume");
const copy = document.querySelector(".copy");

function generateQuote(){
    button.classList.add("active");
    button.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random").
    then(res=>res.json())
    .then(res=>{
        // console.log(res);
        quote.innerText = res.content;
        author.innerText = res.author;
        button.classList.remove("active");
        button.innerText = "New Quote";
        
    })
}

button.addEventListener("click" , generateQuote);

vol.addEventListener("click" , ()=>{
    let voice = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`); 
    speechSynthesis.speak(voice); //it will speak the quote
});

copy.addEventListener("click" , ()=>{
    navigator.clipboard.writeText(quote.innerText);
});