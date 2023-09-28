import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    // debugger;
    // console.log(this.character);
    if ( this.character.name.length === 0) return;
    // this.onNewCharacter.emit({...this.character}); // hace lo mismo que abajo, angular se encarga de mandar
    // los objetos separado por sus propiedades por default (lo que hace el operador spread en javascript)
    // en un nuevo objeto para romper la referencia con el objeto original
    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0 };
  }
}
