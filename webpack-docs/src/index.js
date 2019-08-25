import _ from 'lodash'
import './style/index.css'
import printFunc from './print';

function component() {
  let ele = document.createElement('div')
  ele.innerHTML = _.join(['w', 'p'], '')
  ele.classList = 'title'
  let btn = document.createElement('button')
  btn.innerHTML = 'check the console?';
  btn.onclick = printFunc
  ele.appendChild(btn)
  return ele
}

document.body.appendChild(component())