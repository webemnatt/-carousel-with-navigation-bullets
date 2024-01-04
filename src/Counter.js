import React, { Component } from 'react';
import BulletHandler from './BulletHandler'; // Importe a classe BulletHandler

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: 0, // Defina o estado ativo aqui (pode ser alterado dinamicamente)
    };

    this.containerRef = React.createRef();
    this.scrollableRef = React.createRef();
    this.bulletContainerRef = React.createRef();

    // Crie uma instância da classe BulletHandler
    this.bulletHandler = new BulletHandler(
      this.containerRef,
      this.scrollableRef,
      this.bulletContainerRef
    );
  }

  componentDidMount() {
    this.bulletHandler.createBullets(); // Use a classe para criar bullets
    this.containerRef.current.addEventListener(
      'scroll',
      this.bulletHandler.updateBullets
    ); // Use a classe para atualizar bullets
  }

  render() {
    const { children } = this.props;
    const { activeCard } = this.state;

    return (
      <div ref={this.containerRef}>
        {React.Children.map(children, (_, index) => {
          let placeholder = '';
          if ((activeCard === 0 || activeCard === 1) && index === 4) {
            placeholder = 'placehold';
          } else if ((activeCard === 3 || activeCard === 4) && index === 0) {
            placeholder = 'placehold';
          } else if (activeCard === 2) {
            placeholder = '';
          }
          return (
            <div
              key={index}
              className={`bullet ${
                index === activeCard ? 'active' : ''
              }${placeholder}`}
            />
          );
        })}
        <div ref={this.bulletContainerRef}></div>
      </div>
    );
  }
}

export default Counter;
