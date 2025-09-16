// Executa o script apenas quando o conteúdo da página estiver totalmente carregado.
document.addEventListener('DOMContentLoaded', () => {

  // 1. Seleciona os elementos do DOM de forma segura.
  const consentBanner = document.getElementById('cookie-consent');
  const acceptButton = document.getElementById('accept-cookies');

  // 2. Garante que o script não quebre se os elementos não existirem na página.
  if (!consentBanner || !acceptButton) {
    // console.log('Elementos de consentimento de cookies não encontrados nesta página.');
    return; // Interrompe a execução do script se não houver banner.
  }

  // 3. Lógica simplificada para verificar o consentimento.
  // Apenas o localStorage é necessário para um consentimento "permanente".
  const hasConsented = localStorage.getItem('cookieConsent') === 'true';

  // Função para aceitar os cookies
  const acceptCookies = () => {
    // Esconde o banner usando a classe de CSS para a transição suave.
    consentBanner.classList.remove('visible');
    
    // Salva o consentimento do usuário.
    localStorage.setItem('cookieConsent', 'true');
  };

  // Adiciona o evento de clique ao botão
  acceptButton.addEventListener('click', acceptCookies);

  // 4. Exibe o aviso apenas se o usuário ainda não tiver consentido.
  if (!hasConsented) {
    // Adiciona a classe que o torna visível com a transição.
    consentBanner.classList.add('visible');
  }

});
