import _ from 'lodash';
import printMe from './print';

function component() {
  const btn = document.createElement('button');
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';

  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
