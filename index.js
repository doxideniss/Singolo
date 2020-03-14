window.onload = () => {

  siteScroll()

  addMenuClickHandler()

  // Portfolio
  addTagClickHandler()
  addPortfolioClickHandler()

  // Form send
  addFormClickHandler()

}

const siteScroll = () => {
  document.addEventListener('scroll', (e) => {
    let header = document.querySelector('.header__wrapper')
    pageYOffset > 450 ? header.classList.add('header__wrapper_small') : header.classList.remove('header__wrapper_small')
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

}

const addPortfolioClickHandler = () => {
  let portfolios = document.querySelector('.portfolios')

  portfolios.addEventListener('click', (e) => {
    if (e.target.closest('.portfolios__item')) {
      document.querySelectorAll('.portfolios__item_active').forEach(x => {
        x.classList.remove('portfolios__item_active')
      })

      let portfolioItem = e.target.closest('.portfolios__item')
      portfolioItem.classList.add('portfolios__item_active')
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
      let descr = form.querySelector('[name=descr]').value

      if (name && email) {
        console.log(name, email, subject, descr)
        e.preventDefault()
      }
    }
  })

}