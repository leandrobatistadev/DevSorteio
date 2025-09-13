let inputmin = document.querySelector(".inputmin")
let inputmax = document.querySelector(".inputmax")
let botao = document.querySelector(".botao")

botao.addEventListener("click", function(){
let min = Math.ceil( inputmin.value)
let max = Math.floor(inputmax.value)
 let resultado = Math.floor(Math.random()*(max-min +1))+min;
 
alert(resultado)

})


