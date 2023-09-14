const inputVazio = document.querySelectorAll(".input-vazio");

const btnEnviar = document.querySelector(".btn");

inputVazio.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.remove("input-vazio")
            input.classList.add("borda-verde");
        } else {
            input.classList.add("input-vazio")
            input.classList.remove("borda-verde")
        }
    });
});