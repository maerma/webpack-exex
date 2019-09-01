import _ from 'lodash'
import './style/index.css'
// import { cube } from './math'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

function component() {
  var ele = document.createElement('div')
  // ele.innerHTML = _.join(['wp, ', '5 cubed is equal to ', cube(5)], '\n\n')
  // ele.innerHTML = ['wp, ', '5 cubed is equal to ', cube(5)].join('')
  // ele.innerHTML = ['wp, '].join('')
  ele.innerHTML = _.join(['wp, '], '')
  ele.classList = 'title'
  var btn = document.createElement('button')
  btn.innerHTML = 'check the console?';
  btn.onclick = e => {
    import(/* webpackChunkName: 'print' */'./print').then(m => {
      console.log(m)
      var printFunc = m.default
      printFunc()
    })
  }
  ele.appendChild(btn)
  return ele
}

document.body.appendChild(component())