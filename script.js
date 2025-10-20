// Función para cambiar el texto del botón de iniciar sesión
function toggleLogin(button) {
    if (button.innerText === "Iniciar sesión") {
        button.innerText = "Cerrar sesión";
    } else {
        button.innerText = "Iniciar sesión";
    }
}

// Función para sumar "likes" en la tarjeta del ninja
function LikeNinja(button) {
    let likes = parseInt(button.querySelector('span').innerText);
    likes++;
    button.querySelector('span').innerText = `${likes} likes`;
}

// Función para sumar "likes" en la tarjeta del rockero
function addLike(button) {
    let likes = parseInt(button.querySelector('span').innerText);
    likes++;
    button.querySelector('span').innerText = `${likes} likes`;
}

// Función para remover el botón y mostrar un mensaje
function removeBtn(button) {
    button.style.display = "none";
    alert("¡Hiciste clic para ver más información! 🎉");
}
