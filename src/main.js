const insideBox = document.querySelectorAll(".box > *")
const txt = document.getElementById("username");
const button = document.getElementById("btn");
const output = document.getElementById("output");

function hideAll()
{   
    insideBox.forEach(item => item.classList.add('turnOff'));
}

function outputName()
{
    hideAll();
    output.innerHTML = "Obrigado " + txt.value + ", enviaremos à você uma mensagem para contato via e-mail. Esperamos por você!"
    output.classList.remove('turnOff');
}

button.addEventListener('click', outputName);