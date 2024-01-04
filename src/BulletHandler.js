class BulletHandler {
  // inicializando a instância da classe
  constructor(containerRef, scrollableRef) {
    this.containerRef = containerRef;
    this.scrollableRef = scrollableRef;
  }

  // Função para criar bullets
  createBullets = () => {
    const divs = this.scrollableRef.current.querySelectorAll('div');
    divs.forEach((div, index) => {
      const bullet = document.createElement('div');
      bullet.className = 'bullet';
      bullet.addEventListener('click', () => this.scrollToDiv(index));
      this.bulletContainerRef.current.appendChild(bullet);
    });
  };

  // Função para rolar até a div correspondente à bullet clicada
  scrollToDiv = (index) => {
    const divs = this.scrollableRef.current.querySelectorAll('div');
    const divToScroll = divs[index];
    this.containerRef.current.scrollLeft = divToScroll.offsetLeft;
  };

  // Atualiza as bullets com base na posição atual do scroll
  updateBullets = () => {
    const divs = this.scrollableRef.current.querySelectorAll('div');
    const scrollLeft = this.containerRef.current.scrollLeft;
    divs.forEach((div, index) => {
      const bullet = this.bulletContainerRef.current.children[index];
      if (
        scrollLeft >= div.offsetLeft &&
        scrollLeft < div.offsetLeft + div.clientWidth
      ) {
        bullet.classList.add('active');
      } else {
        bullet.classList.remove('active');
      }
    });
  };
}

export default BulletHandler;
