const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    if (!verificarTexto(textoEncriptado)) {
        alert("Ingreso un texto con Mayusculas o tildes");
        textArea.value = "";
        return;
    }
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado
}
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado
}

function btnCopiar() {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);
    document.execCommand("copy");
    mensaje.blur();
    mensaje.value = "";
    alert("¡Texto copiado!");
    mensaje.style.removeProperty("background-image");
}

function verificarTexto(texto) {
    const textoSinTildes = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const textoSinMayusculas = texto.toLowerCase();

    if (texto !== textoSinTildes || texto !== textoSinMayusculas) {
        return false;
    }

    return true;
}