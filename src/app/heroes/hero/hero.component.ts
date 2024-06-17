import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name :string = 'ironman';
  public edad: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  get HeroDescription():string{
    return  `${this.name}-${this.edad}`;

  }

  changenHero(): void {
    this.name = 'spiderman';


  }

  changeAge():void{
    this.edad = 10;
  }

  resetForm():void{
    this.edad= 45;
    this.name = 'ironman'
  }
}
