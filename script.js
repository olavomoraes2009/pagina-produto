const principal= document.querySelector('.imagens-produto > img');
const mini=document.querySelectorAll('.miniaturas > img');

console.log(principal)


for(let i =0;i< mini.length;i++){
    mini[i].addEventListener('click',(e)=>{
        principal.src =e.target.src;
    })
}