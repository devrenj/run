export const links = {
  carpedia: { url: 'https://renj.dev.br/carpedia/', desc: 'Projeto: Carpedia' },
  github: { url: 'https://github.com/devrenj', desc: 'Github: @Devrenj' },
  dio: { url: 'https://web.dio.me/', desc: 'Dio.me' },
  default: () => {
    document.body.style.opacity = 0;
    alert('Site não encontrado, tente novamente')
    window.history.back();
  }
}