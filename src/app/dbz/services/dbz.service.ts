import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import{v4 as uuid} from 'uuid';
@Injectable({providedIn: 'root'})
export class DbzService {

  public characters:Character[]=[{
    id: uuid(),
    name: 'Krillin',
    power:1000
  },{
    id: uuid(),
    name:'goku',
    power:9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power:7500
  }
];

addCharacter(Character1:Character):void {

  const newCharacter:Character={
    id: uuid(),...Character1
  };

  this.characters.push(newCharacter);

}

//onDeleteCharacter(index:number):void{

//  this.characters.splice(index,1 )
deleteCharactersById(id:string){
  this.characters= this.characters.filter(Character1 => Character1.id !==id);
}

}



