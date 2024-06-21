import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList:Character[]=[{
    name:'trunk',
    power:10
  }]

  @Output()
  public onDeleteId: EventEmitter<string>= new EventEmitter();


  onDeleteCharacter(id:string):void {
    console.log(id)
    this.onDeleteId.emit(id)
  }
}
