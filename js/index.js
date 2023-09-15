const validacao = document.querySelectorAll(".validacao")
const botaoEnviar = document.querySelector(".btn")


botaoEnviar.addEventListener('click', function () {
    validacao.forEach(function (item) {
        if(item.value !== "") {
            item.classList.add("preenchido");
            item.classList.remove("borda-nao-preenchida");
        } else {
            item.classList.remove("validacao")
            item.classList.add("borda-nao-preenchida");
            item.classList.remove("campo-obrigatorio")
            item.nextElementSibling.classList.add("nao-preenchido")
        } if (item.value !== "") {
            item.classList.add("validacao")
            item.classList.remove("campo-obrigatorio")
            item.nextElementSibling.classList.remove("nao-preenchido")
        }
    })
})