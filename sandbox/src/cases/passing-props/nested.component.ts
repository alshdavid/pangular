import { Component, Input } from '@pangular/core'
import { html } from '@pangular/compiler'

@Component({
  selector: 'app-nested',
  template: html`<div>Nested: {{ value }}</div>`
})
export class NestedComponent {
  @Input()
  public value = 'nested-default' 
}

