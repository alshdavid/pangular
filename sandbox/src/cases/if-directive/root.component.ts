import { Component } from '@pangular/core'
import { IfDirective } from '@pangular/platform'
import { html } from '@pangular/compiler'

@Component({
  selector: 'app-root',
  declarations: [
    IfDirective
  ],
  template: html`
    <div>
      <div *pgIf="shouldShow">Hi</div>
      <button (onClick)="toggle()">Toggle</button>
    </div>
  `
})
export class RootComponent {
  shouldShow = true

  toggle() {
    this.shouldShow = !this.shouldShow
    console.log('toggled')
  }
}

