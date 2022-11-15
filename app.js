const container = document.getElementsByClassName('cne');
const answe = document.getElementsByClassName('answer');
const question = document.getElementsByClassName('question')

for(let i = 0; i < container.length ; i++){
    container[i].addEventListener('click',()=>{
        answe[i].classList.toggle('active')
        question[i].classList.toggle('minus')
        
    })
}

