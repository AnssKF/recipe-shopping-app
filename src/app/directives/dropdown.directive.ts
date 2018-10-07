import { Directive, HostListener, HostBinding, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input() appDropdown:ElementRef;
  
  show:boolean = false;

  constructor(private renderer: Renderer2){}

  @HostListener('click') toggleDropDown(){
    if(!this.show){
      this.renderer.addClass(this.appDropdown,'show');
      this.show = !this.show;
    }else{
      this.renderer.removeClass(this.appDropdown,'show');
      this.show = !this.show;
    }
  }

}
