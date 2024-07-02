document.addEventListener('DOMContentLoaded', function() {
    const textoAmor = document.getElementById('texto-amor');
    const textoCompleto = 'Amor';
    let textoAtual = '';

    function exibirTexto() {
        textoAtual = '';
        for (let i = 0; i <= textoCompleto.length; i++) {
            setTimeout(function() {
                textoAtual = textoCompleto.substring(0, i);
                textoAmor.textContent = textoAtual;
                if (i < textoCompleto.length) {
                    textoAmor.style.display = 'inline'; // Mostra cada letra uma por uma
                } else {
                    setTimeout(exibirTexto, 2000); // Aguarda 1 segundo antes de reiniciar
                }
            }, 150 * i);
        }
    }

    exibirTexto(); 
});


$(document).ready(function () {
    $('#menu-toggle').click(function () {
        $('#menu-sidebar').toggleClass('active');
    });
});