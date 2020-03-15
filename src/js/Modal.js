let language = {
  'ru': {
    title: 'Письмо отправлено',
    subject: 'Тема:',
    withoutSubject: 'Без темы',
    desc: 'Описание:',
    withoutDesc: 'Без описания'
  },
  'en': {
    title: 'The letter was sent',
    subject: 'Subject:',
    withoutSubject: 'Without subject',
    desc: 'Description:',
    withoutDesc: 'Without description'
  }
}
export class Modal {
  constructor(lang, data) {
    this.lang = lang
    this.data = data
    this.overlay = ''
    this.modal = ''
  }

  buildModal() {
    this.overlay = this.createDomNode('div', 'overlay')
    this.modal = this.createDomNode('div', 'modal')
    let modalHeader = this.createDomNode('div', 'modal__header')
    let modalContent = this.createDomNode('div', 'modal__content')
    let modalFooter = this.createDomNode('div', 'modal__footer')
    modalHeader.innerHTML = `
        <div class="modal__title">${language[this.lang].title}</div>
    `

    for (let key in this.data) {
      let node = this.createDomNode('p', 'modal__text')
      node.innerHTML = this.data[key] ? `${language[this.lang][key]} ${this.data[key]}` : language[this.lang]['without' + (key.charAt(0).toUpperCase() + key.slice(1))]
      modalContent.append(node)
    }

    modalFooter.innerHTML = `
    <button class="modal__btn" type="submit">OK</button>
    `

    this.overlay.addEventListener('click', (e) => this.close(e))
    this.modal.addEventListener('click', (e) => this.close(e))

    this.modal.append(modalHeader)
    this.modal.append(modalContent)
    this.modal.append(modalFooter)

    this.overlay.append(this.modal)

    return this.overlay

  }

  createDomNode(element, ...classes) {
    let node = document.createElement(element)
    node.classList.add(...classes)
    return node
  }

  open() {
    let modal = this.buildModal()
    document.body.append(modal)
  }

  close(e) {
    let classes = e.target.classList
    if (!this.overlay) {
      return
    }
    if (classes.contains('overlay') || classes.contains('modal__btn')) {
      this.overlay.remove()
    }
  }
}