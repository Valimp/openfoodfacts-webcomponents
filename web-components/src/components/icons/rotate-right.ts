import { css, LitElement } from "lit"
import { html } from "lit-html"
import { customElement } from "lit/decorators.js"

/**
 * Rotate right icon
 */
@customElement("rotate-right-icon")
export class RotateRightIcon extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  `
  override render() {
    return html`
      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
        <path
          d="M15.55 5.55 11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42 1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"
        ></path>
      </svg>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rotate-right-icon": RotateRightIcon
  }
}
