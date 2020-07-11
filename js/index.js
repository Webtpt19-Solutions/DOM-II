// Your code goes here
const title = document.querySelector('header h1');
title.addEventListener('click', (e) => {
    e.target.textContent = 'This again?'
})
title.addEventListener('dblclick', (e) => {
    e.target.textContent = 'Not fun bus'
})

const headerImg = document.querySelector('header img');
headerImg.addEventListener('mousedown', () => {
    headerImg.style.transform = 'scale(1.5)'
    headerImg.style.transition = '0.75s'
})
headerImg.addEventListener('mouseup', () => {
    headerImg.style.transform = 'scale(1.0)'
})

const navItmes = document.querySelectorAll('nav a')
navItmes.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = 'red'
        item.style.fontSize = '25px'
    })
    item.addEventListener('mouseleave', () => {
        item.style.color = 'black'
        item.style.fontSize = '16px'
    })
    item.addEventListener('click',(e)=>{
        e.preventDefault();
        e.stopPropagation();
    })
})

const contentImgs = document.querySelectorAll('.img-content img');
contentImgs.forEach(item => {
    item.addEventListener('mouseenter', ()=>{
        item.style.transform = 'scale(1.1)'
        item.style.transition = '0.5s';
    })
    item.addEventListener('mouseleave', ()=>{
        item.style.transform = 'scale(1.0)'
    })
})


const body = document.querySelector('body');
document.addEventListener('keydown', () =>{
    body.style.backgroundColor = 'black';
    body.style.color = '#FFA71A';
})
document.addEventListener('keyup', () =>{
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
})
document.addEventListener('scroll', () => {
    alert('Most of these are honestly not creative or original....')
})
