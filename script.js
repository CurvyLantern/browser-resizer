"use strict"

const getElm = id => document.getElementById(id)

const myForm = getElm('my_form')
const myButton = getElm('my_button')



let wp = null

myForm.addEventListener('submit', event => {
  event.preventDefault()

  if (wp) {
    wp.close()
    myButton.textContent = 'Open'
    wp = null
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