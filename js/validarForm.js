document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form-contacto');
    var mensagemElement = document.getElementById('mensagem');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que o formulário seja enviado automaticamente

        // Validar campos
        var nome = document.getElementById('nome').value.trim();
        var email = document.getElementById('email').value.trim();
        var telefone = document.getElementById('telefone').value.trim();
        var objetivo = document.getElementById('objetivo').value.trim();

        // Verificar se os campos obrigatórios estão preenchidos
        if (nome === '' || email === '' || telefone === '' || objetivo === '') {
            MostrarMensagem('Por favor, preencha todos os campos.', 'error');
            return;
        }

        // Verificar formato do email
        if (!validarEmail(email)) {
            MostrarMensagem('Por favor, insira um endereço de e-mail válido.', 'error');
            return;
        }

        // Se passou na validação, pode enviar o formulário
        MostrarMensagem('Formulário enviado com sucesso!', 'success');
        form.reset(); // Limpar campos após envio
    });

    // Função para validar o formato do email
    function validarEmail(email) {
        var emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    // Função para mostrar mensagens na tela
    function MostrarMensagem(message, type) {
        mensagemElement.innerHTML = '<p class="' + type + '">' + message + '</p>';

        // Abrir uma caixa de diálogo para mostrar a mensagem
        alert(message);
    }
});
