"use strict"

const getElm = id => document.getElementById(id)

const myForm = getElm('my_form')
const myButton = getElm('my_button')


let windowOpened = false
let wp = null

myForm.addEventListener('submit', event => {
  event.preventDefault()

  if (windowOpened) {
    wp.close()
  }
  else {
    const fd = new FormData(event.target)

    const myUrl = fd.get('my_url')

    if (myUrl) {
      wp = window.open(myUrl, '', 'width=320')
      myButton.textContent = 'Close'
    }
  }
})