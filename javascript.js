const button = document.querySelector("#button");
const message = document.querySelector("#message");

function changeMessage() {
    message.textContent = "I hope that today you will have a great day today. ";
}

button.addEventListener("click", changeMessage);