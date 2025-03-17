import { createApp } from 'vue'
import App from './App.vue'

customElements.define('hello-world', class HelloWorld extends HTMLElement {
  #testProp = ''
  #output: HTMLDivElement

  get testProp() {
    return this.#testProp
  }

  set testProp(value: string) {
    this.#testProp = value
    this.#update()
  }

  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot!.innerHTML = `<div class="output"></div>`
    this.#output = this.shadowRoot?.querySelector('.output') as HTMLDivElement
  }

  connectedCallback() {
    this.#update()
  }

  #update() {
    this.#output.innerHTML = `this.testProp = ${this.#testProp}`
  }
})

createApp(App).mount('#app')
