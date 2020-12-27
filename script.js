const open = document.querySelector('#open')
const container = document.querySelector('.container')
const close = document.querySelector('#close')


open.addEventListener('click', ()=>{
    container.classList.add('show-nav')
})

close.addEventListener('click', ()=>{
    container.classList.remove('show-nav')
})