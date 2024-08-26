
const chavesDeCriptografia = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
};

function ocultarInstrucoes() {
    const instrucoes = document.querySelector('.conteudo__saida .conteudo__saida-texto');
    if (instrucoes && instrucoes.innerText === "Nenhuma mensagem encontrada.") {
        instrucoes.style.display = 'none';
    }
}

function criptografarTexto() {
    let inputTexto = document.getElementById("input-texto").value;
    
    if (!isLowercaseAndNoAccent(inputTexto)) {
        alert("Erro: O texto deve conter apenas letras minúsculas e não acentuadas.");
        return;
    }
    
    let textoCriptografado = inputTexto
        .replace(/e/g, chavesDeCriptografia.e)
        .replace(/i/g, chavesDeCriptografia.i)
        .replace(/a/g, chavesDeCriptografia.a)
        .replace(/o/g, chavesDeCriptografia.o)
        .replace(/u/g, chavesDeCriptografia.u);
    

    const saidaTexto = document.querySelector(".conteudo__saida-texto");
    saidaTexto.innerText = textoCriptografado;

    document.getElementById("input-texto").value = '';

    ocultarInstrucoes();
}

function descriptografarTexto() {
    let inputTexto = document.getElementById("input-texto").value;
    
    if (!isLowercaseAndNoAccent(inputTexto)) {
        alert("Erro: O texto deve conter apenas letras minúsculas e não acentuadas.");
        return;
    }

    let textoDescriptografado = inputTexto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    document.getElementById("input-texto").value = '';

    const saidaTexto = document.querySelector(".conteudo__saida-texto");
    saidaTexto.innerText = textoDescriptografado;

    ocultarInstrucoes();
}

function copiarTexto() {
    let textoCopiado = document.querySelector(".conteudo__saida-texto").innerText;
    
    navigator.clipboard.writeText(textoCopiado).then(() => {
        const copiarIcone = document.getElementById("copiar-icone");
        copiarIcone.src = "./assets/copiado-icone-branco.png"; 
        

        setTimeout(() => {
            copiarIcone.src = "./assets/copiar-icone-branco.png"; 
        }, 3000); 
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
}

function isLowercaseAndNoAccent(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}
