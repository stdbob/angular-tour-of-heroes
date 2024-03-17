import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from "./messages/messages.component";

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeroesComponent, MessagesComponent]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
