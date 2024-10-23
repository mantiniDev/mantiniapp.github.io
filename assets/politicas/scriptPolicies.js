// Função para verificar se o aviso de cookies deve ser exibido
function shouldShowCookieConsent() {
  const localConsent = localStorage.getItem('cookieConsent');
  const sessionConsent = sessionStorage.getItem('cookieConsent');
  
  // Se já foi aceito nesta sessão, não mostra o aviso
  if (sessionConsent) {
    return false;
  }

  // Se já aceitou antes (localStorage), não mostra o aviso nesta sessão
  if (localConsent) {
    sessionStorage.setItem('cookieConsent', 'true'); // Define o consentimento para a sessão atual
    return false;
  }

  // Caso contrário, deve mostrar o aviso
  return true;
}

// Função para ocultar o aviso e salvar o consentimento
function acceptCookies() {
  document.getElementById('cookie-consent').style.display = 'none';
  
  // Armazena o consentimento permanentemente e na sessão atual
  localStorage.setItem('cookieConsent', 'true');
  sessionStorage.setItem('cookieConsent', 'true');
}

// Adiciona o evento ao botão de aceitar cookies
document.getElementById('accept-cookies').addEventListener('click', acceptCookies);

// Exibe o aviso de cookies se necessário
if (shouldShowCookieConsent()) {
  document.getElementById('cookie-consent').style.display = 'block';
} else {
  document.getElementById('cookie-consent').style.display = 'none'; // Garante que o aviso seja ocultado
}

