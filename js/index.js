const inputPreenchido = document.querySelectorAll(".input-preenchido");

inputPreenchido.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.remove("input-preenchido")
            input.classList.add("borda-verde");
        } else {
            input.classList.add("input-preenchido")
            input.classList.remove("borda-verde")
        }
    });
});

const enviarForm = document.getElementById("btn-check")


