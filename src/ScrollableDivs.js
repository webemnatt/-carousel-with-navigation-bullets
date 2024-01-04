import React from 'react';
import Counter from './Counter';

export default function ScrollableDiv() {
  //script para scrollable-------------------------------------------------
  const container = document.querySelector('.container');
  const scrollable = document.querySelector('.scrollable');

  let isScrolling = false;
  let startPosition = 0;
  let scrollPosition = 0;

  container.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isScrolling = true;
    startPosition = e.clientX;
    scrollPosition = container.scrollLeft;
    scrollable.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isScrolling) return;
    const delta = e.clientX - startPosition;
    container.scrollLeft = scrollPosition - delta;
  });

  document.addEventListener('mouseup', () => {
    isScrolling = false;
    scrollable.style.cursor = 'grab';
  });

  //bullets de navegação------------------------------------------------------

  const bulletContainer = document.getElementById('bulletContainer');

  // Função para criar bullets
  function createBullets() {
    const divs = document.querySelectorAll('.scrollable > div');
    divs.forEach((div, index) => {
      const bullet = document.createElement('div');
      bullet.className = 'bullet';
      bullet.addEventListener('click', () => scrollToDiv(index));
      bulletContainer.appendChild(bullet);
    });
  }

  // Função para rolar até a div correspondente à bullet clicada
  function scrollToDiv(index) {
    const divs = document.querySelectorAll('.scrollable > div');
    const divToScroll = divs[index];
    container.scrollLeft = divToScroll.offsetLeft;
  }

  // Atualiza as bullets com base na posição atual do scroll
  function updateBullets() {
    const divs = document.querySelectorAll('.scrollable > div');
    const scrollLeft = container.scrollLeft;
    divs.forEach((div, index) => {
      const bullet = bulletContainer.children[index];
      if (
        scrollLeft >= div.offsetLeft &&
        scrollLeft < div.offsetLeft + div.clientWidth
      ) {
        bullet.classList.add('active');
      } else {
        bullet.classList.remove('active');
      }
    });
  }

  // Cria as bullets e atualiza quando o scroll é alterado
  createBullets();
  container.addEventListener('scroll', updateBullets);

  return (
    <div class="wrapper">
      <h5>scrollable</h5>
      <div class="container">
        <div class="scrollable" draggable="true">
          <div>01/12 mude</div>
          <div>02/12 para</div>
          <div>03/12 scrollar</div>
          <div>04/12 ao</div>
          <div>05/12 clicar</div>
          <div>06/12 com</div>
          <div>07/12 o</div>
          <div>08/12 mouse</div>
          <div>09/12 um</div>
          <div>10/12 texto</div>
          <div>11/12 muito</div>
          <div>12/12 longo</div>
        </div>
      </div>
      {/* <div class="bullet-container" id="bulletContainer">
        
      </div> */}
      <Counter className="bullets" activeCard={activeCard}>
        {this.props.children}
      </Counter>
    </div>
  );
}
