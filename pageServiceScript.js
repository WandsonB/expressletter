const secaoDocTrack = document.querySelector('#sectDocTrack')
const secaoDocRegister = document.querySelector('#sectDocRegister')
const btnTrack = document.querySelector('#trackMenuSelect')
const btnRegister = document.querySelector('#sandMenuSelect')

btnTrack.addEventListener("click", function() {
    secaoDocTrack.classList.add('sectNone')
    secaoDocRegister.classList.remove('sectNone')
})

btnRegister.addEventListener("click", function() {
    secaoDocTrack.classList.remove('sectNone')
    secaoDocRegister.classList.add('sectNone')
})
