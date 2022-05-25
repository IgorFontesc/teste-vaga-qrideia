const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);


function acao() {

    let modal = document.querySelector('.informacao');
    
    modal.style.display = 'block'
}

function fechar() {
    
    let fechar = document.querySelector('.informacao');
    let fechar_2 = document.querySelector('.informacao_2');
    let fechar_3 = document.querySelector('.informacao_3');

    fechar.style.display = 'none'
    fechar_2.style.display = 'none'
    fechar_3.style.display = 'none'
}

function acao_2() {

    let modal = document.querySelector('.informacao_2');
    
    modal.style.display = 'block'
}

function acao_3() {

    let modal = document.querySelector('.informacao_3');
    
    modal.style.display = 'block'
}
