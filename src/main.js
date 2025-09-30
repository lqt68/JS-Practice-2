const input = document.querySelector('.lists');
const pencil = document.querySelector('#pencil');
const ul = document.querySelector('.todos');
const save = document.querySelector('.save');
const clear = document.querySelector('.clear');
const tips = document.querySelector('.tips');
const all = document.querySelector('.all');
const active = document.querySelector('.active');
const performed = document.querySelector('.performed');

pencil.addEventListener('click', () => {
    input.classList.toggle('display');
});

input.addEventListener('keypress',(e) => {
    if(e.key === 'Enter'){
        addToDo(input.value);
        input.value = '';
    }
});



const addToDo = (text) => {
    if(text.length === 0) return;
    const li = document.createElement('li'); // <li></li>
    const span = document.createElement('span');// <span></span>
    const i = document.createElement('i');// <i></i>
    li.textContent = text;// <li>text</li>
    i.classList.add('fas', 'fa-trash-alt');// <i class="fas fa-trash-alt"></i>
    span.insertAdjacentElement('afterbegin', i);// <span><i class="fas fa-trash-alt"></i></span>
    li.insertAdjacentElement('afterbegin', span);// <li><span><i class="fas fa-trash-alt"></i></span>text</li>
    ul.insertAdjacentElement('afterbegin', li);// <ul><li><span><i class="fas fa-trash-alt"></i></span>text</li></ul>
}

ul.addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
    if(e.target.tagName === 'I'){
        e.target.parentElement.parentElement.remove();
    }
});

all.addEventListener('click', () => {
    const list = document.querySelectorAll('.todos li');
    for (let i = 0; i < list.length; i++) {
        list[i].style.display = 'list-item';
    }
});

active.addEventListener('click', () => {
    const list = document.querySelectorAll('.todos li');
    for (let i = 0; i < list.length; i++) {
        list[i].style.display = 'list-item';
        if(list[i].className === 'checked') {
            list[i].style.display = 'none';
        }
    }
});

performed.addEventListener('click', () => {
    const list = document.querySelectorAll('.todos li');
    for (let i = 0; i < list.length; i++) {
        list[i].style.display = 'none';
        if (list[i].className === 'checked') {
            list[i].style.display = 'list-item';
        }
    }
});

const tipsBtn = document.querySelector('.tips');
const overlay = document.getElementById('tips-overlay');

tipsBtn.addEventListener('click', () => {
    overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
});

