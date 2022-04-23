import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './Calculator';
import './scss/style.scss';

const $root = document.querySelector('#root');
if ($root) {
  const root = ReactDOM.createRoot($root);
  root.render(<Calculator />);
}

console.log(process);
const a = 'a';
const b = 'b';
const c = () => {
  return null;
};
const d = () => {
  return null;
};

a && c();

c() || d();
