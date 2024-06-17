import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3> counter: {{counter}}</h3>
  <button (click)="increaseby(1)">+1</button>
  <button (click)="reset_counter()">reset</button>
  <button (click)="increaseby(-1)">-1</button>


  `
})

export class CounterComponent {
  public counter:number = 10;

   increaseby (value:number):void{
    this.counter +=value;
  }

  reset_counter ():void{
    this.counter = 10;
  }



}
