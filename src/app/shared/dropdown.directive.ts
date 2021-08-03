import { Directive, HostBinding, HostListener } from '@angular/core';

//open
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isMenuOpen = false

  constructor() { }

  @HostBinding('class') classes: string
  @HostListener('click') toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
    this.classes = this.isMenuOpen ? 'dropdown open' : 'dropdown'
  }

}
