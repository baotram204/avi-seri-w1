const sub = document.querySelector('.sub')
const sub2 = document.querySelector('.sub2')
const icon = document.querySelector('.fa-xmark')
const container = document.querySelector('.subscribe')
const subConta  = document.querySelector('.subConta')
const listImgs = document.querySelectorAll('.list-imgs')
const sliders = document.querySelectorAll('.slider')

var currentIndex = 0;
listImgs[currentIndex].style.opacity = 1

sub.onclick = function(e) {
    container.classList.add('open')
}

sub2.onclick = function(e) {
    container.classList.add('open')
}

icon.onclick = function(e) {
    container.classList.remove('open')
}

subConta.onclick = function(e) {
    container.classList.remove('open')
}



Array.from(listImgs).map(function(img, index) {
    img.addEventListener('click', function(e) {
        if (  !(index === currentIndex)) {
            img.style.opacity = 1
            listImgs[currentIndex].style.opacity = 0.7
            sliders[index].classList.add('active')
            sliders[currentIndex].classList.remove('active')
            currentIndex = index 
        } 
        
    })
})

