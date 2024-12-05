import { Directive, ElementRef, OnInit } from '@angular/core';
import Cleave from 'cleave.js';

@Directive({
  selector: '[telefoneMask]'
})
export class TelefoneMaskDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    new Cleave(this.el.nativeElement, {
      phone: true,
      phoneRegionCode: 'BR'
    });
  }
}
