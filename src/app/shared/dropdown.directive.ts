import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

//open
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isMenuOpen = false

  constructor( private elementRef: ElementRef) { }

  hasClickedOnMenu(event: Event){
    return this.elementRef.nativeElement.contains(event.target)
  }

  @HostBinding('class') classes: string
  @HostListener('document:click', ['$event']) toggleMenu(event: Event) {
    if(this.hasClickedOnMenu(event)){
      this.isMenuOpen = !this.isMenuOpen
    } else{
      this.isMenuOpen = false
    }

    this.classes = this.isMenuOpen ? 'dropdown open' : 'dropdown'
  }

}
