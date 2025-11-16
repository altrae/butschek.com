import { Component, h, Prop } from '@stencil/core';

/**
 * @slot header - Displays header content.
 */
@Component({
  shadow: true,
  styleUrl: 'modal.css',
  tag: 'butschek-modal',
})
export class Modal {
  /** Opens modal. */
  @Prop() open = false;

  render() {
    return (
      <dialog open={this.open}>
        <header>
            <slot name="header"></slot>
        </header>

        <div>
          <slot></slot>
        </div>

        <footer>
          <slot name="footer"></slot>
        </footer>
      </dialog>
    );
  }
}
