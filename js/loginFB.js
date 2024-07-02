
function initFacebookSdk() {
    // Substitua 'seu_app_id' pelo ID do seu aplicativo do Facebook
    var appId = '771951601770539';

    // Carrega o SDK do Facebook
    $.ajaxSetup({ cache: true });
    $.getScript('https://connect.facebook.net/pt_BR/sdk.js', function() {
        // Inicializa o SDK do Facebook
        FB.init({
            appId: appId,
            cookie: true,
            xfbml: true,
            version: 'v12.0'
        });
    });
}

// Função para lidar com o login do Facebook
function loginWithFacebook() {
    // Requisita login ao usuário
    FB.login(function(response) {
        if (response.authResponse) {
            // Obtem o token de acesso
            var accessToken = response.authResponse.accessToken;

            // Exemplo de como usar o token de acesso
            console.log('Token de Acesso: ' + accessToken);

          

        } else {
            console.log('Login com Facebook cancelado.');
        }
    }, { scope: 'email,public_profile' }); // Solicita as permissões necessárias
}

// Inicializa o SDK do Facebook quando o documento estiver pronto
$(document).ready(function() {
    initFacebookSdk();
});