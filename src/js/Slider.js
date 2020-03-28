export class MySLider {
  constructor(nodeSlider) {
    this.nodeSlider = nodeSlider
    this.sliderItems = [...nodeSlider.children]
    this.controlBox = null
    this.isEnabled = true
    this.currentItem = 0
    this.length = this.sliderItems.length
  }

  init() {
    this.nodeSlider.classList.add('myslider')
    this.createControlBtn()
    this.sliderItems.forEach(el => {
      el.classList.add('myslider__item')
    })
    this.sliderItems[this.currentItem].classList.add('myslider__active')
    this.swipeDetect()
  }

  createControlBtn() {
    this.controlBox = document.createElement('div')
    this.controlBox.classList.add('myslider__control')

    let leftBtn = document.createElement('div')
    leftBtn.classList.add('myslider__btn-left')
    let rightBtn = document.createElement('div')
    rightBtn.classList.add('myslider__btn-right')

    leftBtn.addEventListener('click', () => {
      if (this.isEnabled) {
        this.previousItem(this.currentItem)
      }
    })

    rightBtn.addEventListener('click', () => {
      if (this.isEnabled) {
        this.nextItem(this.currentItem)
      }
    })

    this.controlBox.append(leftBtn)
    this.controlBox.append(rightBtn)

    this.nodeSlider.append(this.controlBox)
  }

  changeCurrentItem(n) {
    this.currentItem = (n + this.length) % this.length;
    if ((this.currentItem + 1) % 2 === 0) {
      this.nodeSlider.parentNode.parentNode.parentNode.classList.add('slider_colored')
    } else {
      this.nodeSlider.parentNode.parentNode.parentNode.classList.remove('slider_colored')
    }
  }

  hideItem(direction) {
    this.isEnabled = false
    this.sliderItems[this.currentItem].classList.add(direction)
    this.sliderItems[this.currentItem].addEventListener('animationend', function() {
      this.classList.remove('myslider__active', direction)
    })
  }

  showItem(direction) {
    this.sliderItems[this.currentItem].classList.add('myslider__next', direction)
    this.sliderItems[this.currentItem].addEventListener('animationend', () => {
      this.sliderItems[this.currentItem].classList.remove('myslider__next', direction)
      this.sliderItems[this.currentItem].classList.add('myslider__active')
      this.isEnabled = true
    })
  }

  previousItem() {
    this.hideItem('to-right')
    this.changeCurrentItem(this.currentItem - 1)
    this.showItem('from-left')
  }

  nextItem() {
    this.hideItem('to-left')
    this.changeCurrentItem(this.currentItem + 1)
    this.showItem('from-right')
  }

  swipeDetect() {
    let startX = 0
    let startY = 0
    let distX = 0
    let distY = 0
    let startTime = 0
    let elapsedTime = 0
    let threshold = 150
    let resistant = 100
    let allowedTime = 300

    this.nodeSlider.addEventListener('mousedown', (el) => {
      startX = el.pageX
      startY = el.pageY
      startTime = new Date().getTime()
      el.preventDefault()
    })

    this.nodeSlider.addEventListener('mouseup', (el) => {
      distX = el.pageX - startX;
      distY = el.pageY - startY;
      elapsedTime = new Date().getTime() - startTime

      if (elapsedTime <= allowedTime && this.isEnabled) {
        if (Math.abs(distX) > threshold && Math.abs(distY) <= resistant) {
          if (distX > 0) {
            this.previousItem()
          } else {
            this.nextItem()
          }
        }
      }

      el.preventDefault()
    })

    this.nodeSlider.addEventListener('touchstart', (el) => {
      if (el.target.classList.contains('myslider__btn-left') || el.target.classList.contains('myslider__btn-right')) {
        if (this.isEnabled) {
          if (el.target.classList.contains('myslider__btn-left')) {
            this.previousItem()
          } else if (el.target.classList.contains('myslider__btn-right')) {
            this.nextItem()
          }
        }
      }
      let touchObj = el.changedTouches[0]
      startX = touchObj.pageX
      startY = touchObj.pageY
      startTime = new Date().getTime()
      el.preventDefault()
    })

    this.nodeSlider.addEventListener('touchmove', (el) => {
      el.preventDefault()
    })

    this.nodeSlider.addEventListener('touchend', (el) => {
      let touchObj = el.changedTouches[0]
      distX = touchObj.pageX - startX;
      distY = touchObj.pageY - startY;
      elapsedTime = new Date().getTime() - startTime

      if (elapsedTime <= allowedTime && this.isEnabled) {
        if (Math.abs(distX) > threshold && Math.abs(distY) <= resistant) {
          if (distX > 0) {
            this.previousItem()
          } else {
            this.nextItem()
          }
        }
      }

      el.preventDefault()
    })
  }

}