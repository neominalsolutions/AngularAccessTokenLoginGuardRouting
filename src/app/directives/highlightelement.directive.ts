import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightelementDirective {

 // <p>

  constructor(private elementRef: ElementRef) {
    console.log('elementRef', this.elementRef); 
    this.elementRef.nativeElement.style.color = 'red';
    this.elementRef.nativeElement.style.fontSize = '0.5rem';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }



}
