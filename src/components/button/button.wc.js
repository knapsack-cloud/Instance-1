import { LitElement, css, customElement, property, html } from 'lit-element';

@customElement('ex-button')
export class MyButton extends LitElement {
  @property() size = 'md';

  @property() type = 'primary';

  @property({
    type: Boolean,
  })

  @property({
    type: Boolean,
  })
  disabled = false;

  render() {
    const classes = [
      'ex-button',
      this.type ? `ex-button--${this.type}` : '',
      this.disabled ? 'ex-button--disabled' : '',
      this.size ? `ex-button--size-${this.size}` : '',
    ].join(' ');

    return html`
      <link rel="stylesheet" href="/dist/index.css" />
      <button class="${classes}">
        <slot></slot>
      </button>
    `;
  }
}
