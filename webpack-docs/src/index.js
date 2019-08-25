// import _ from 'lodash'
import './style/index.css'
// import { cube } from './math'

function component() {
  var ele = document.createElement('div')
  // ele.innerHTML = _.join(['wp, ', '5 cubed is equal to ', cube(5)], '\n\n')
  // ele.innerHTML = ['wp, ', '5 cubed is equal to ', cube(5)].join('')
  ele.innerHTML = ['wp, '].join('')
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