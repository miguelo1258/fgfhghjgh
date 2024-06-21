import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  //llama  al servidor para importar los datos

  constructor(private dbzService:DbzService){}

  get characters():Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharactersById(id);
  }

  oneNewCharacter1(character:Character):void{
    this.dbzService.addCharacter(character);
  }






}
