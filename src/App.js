import React from 'react';
import './style.scss';
import ScrollableDivs from './ScrollableDivs';

export default function App() {
  return (
    <div>
      <div class="div1"></div>
      <ScrollableDivs />
      <div class="div3"></div>
    </div>
  );
}
