import {Modal} from "./js/Modal";
import {MySLider} from './js/Slider'

window.onload = () => {

  addSlider()

  siteScroll()

  addBurgerMenuClickHandler()

  addMenuClickHandler()

  addPhoneClickHandler()
  
  // Portfolio
  addTagClickHandler()
  addPortfolioClickHandler()

  // Form send
  addFormClickHandler()
  
}

const addSlider = () => {
  let nodeSlider = document.querySelector('.sliders')
  let slider = new MySLider(nodeSlider)
  slider.init()
}

const siteScroll = () => {
  document.addEventListener('scroll', (e) => {
    let curPos = pageYOffset

    document.querySelectorAll('[id]').forEach(x => {
      if (x.offsetTop - x.offsetHeight*0.3 < curPos && x.offsetTop + x.offsetHeight*0.7 > curPos) {
        if  (document.querySelector('.nav__item_active')) {
          document.querySelector('.nav__item_active').classList.remove('nav__item_active')
        }
        document.querySelector(`[href="#${x.id}"]`).parentElement.classList.add('nav__item_active')
      }
    })
  })
}

const shuffleDomEl = (parentNode) => {
  for (let i = parentNode.children.length; i >= 0; i--) {
    parentNode.appendChild(parentNode.children[Math.random() * i | 0]);
  }
}

const addBurgerMenuClickHandler = () => {
  let burgerMenu = document.querySelector('.burger-menu')
  let nav = document.querySelector('.nav')
  let logo = document.querySelector('.logo')

  burgerMenu.addEventListener('touchend', () => {
    burgerMenu.classList.toggle('burger-menu_active')
    nav.classList.toggle('nav_burger')
    logo.classList.toggle('logo_burger')
  })
  
  nav.addEventListener('touchend', (e) => {
    if (!nav.classList.contains('nav_burger')) {
      return
    }

    if (e.target.classList.contains('nav_burger') || e.target.classList.contains('nav__link')) {
      burgerMenu.classList.toggle('burger-menu_active')
      nav.classList.toggle('nav_burger')
      console.log(e.target)
    }
  })
  
}

const addPhoneClickHandler = () => {
  let phoneBox = document.querySelector('.sliders')
  
  phoneBox.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.closest('.phone__btn')) {
      e.target.parentNode.classList.toggle('phone_off')
    }

  })
  
}

const addMenuClickHandler = () => {
  let navList = document.querySelector('.nav__list')

  navList.addEventListener('click', (e) => {
    if (e.target.closest('.nav__item')) {
      document.querySelectorAll('.nav__item_active').forEach(x => {
        x.classList.remove('nav__item_active')
      })

      let navItem = e.target.closest('.nav__item')
      navItem.classList.add('nav__item_active')
    }
  })

}

const addTagClickHandler  = () => {
  let porfoliosContainer = document.querySelector('.portfolios')
  let tags = document.querySelector('.tags')

  tags.addEventListener('click', (e) => {
    if (e.target.closest('.tag') && !e.target.closest('.tag_active')) {
      document.querySelectorAll('.tag_active').forEach(x => {
        x.classList.remove('tag_active')
      })

      let tag = e.target.closest('.tag')
      tag.classList.add('tag_active')

      shuffleDomEl(porfoliosContainer)
    }
  })
}

const addPortfolioClickHandler = () => {
  let portfolios = document.querySelector('.portfolios')

  portfolios.addEventListener('click', (e) => {
    if (e.target.closest('.portfolios__item')) {
      let portfolioItem = e.target.closest('.portfolios__item')
      portfolioItem.classList.toggle('portfolios__item_active')

      document.querySelectorAll('.portfolios__item_active').forEach(x => {
        if (x !== portfolioItem) x.classList.remove('portfolios__item_active')
      })
    }
  })

}

const addFormClickHandler = () => {
  let form = document.querySelector('form')

  form.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      let name = form.querySelector('[name=name]').value
      let email = form.querySelector('[name=email]').value
      let subject = form.querySelector('[name=subject]').value
      let desc = form.querySelector('[name=desc]').value

      if (name && email) {
        e.preventDefault()
        let modal = new Modal('ru', form, {
          subject,
          desc
        })
        modal.open()
      }
    }
  })

}
