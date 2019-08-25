import './style/index.css'
import icon from './images/icon.svg'
import _ from 'lodash'
function component() {
  let ele = document.createElement('div')
  ele.innerHTML = _.join(['w', 'p'], '')
  ele.classList = 'title'
  let image = new Image(50, 50)
  image.src = icon
  ele.appendChild(image)
  return ele
}

document.body.appendChild(component())