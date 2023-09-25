import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'She Hulk',
    'Thor'];
  public deletedHeroes: string[] = [];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
    if (this.deletedHeroes.indexOf(this.deletedHero!) < 0)
      this.deletedHeroes.push(this.deletedHero!);
  }

  returnLastDeletedHero(): void {
    if (this.deletedHero) this.heroNames.push(this.deletedHeroes.pop()!);
    this.deletedHero = this.deletedHeroes.at(this.deletedHeroes.length - 1);
  }

  returnAllDeletedHeroes(): void {
    for (let i = this.deletedHeroes.length - 1; i >= 0; i--) {
      this.heroNames.push(this.deletedHeroes.pop()!);
    }
    this.deletedHero = undefined;
  }
}
