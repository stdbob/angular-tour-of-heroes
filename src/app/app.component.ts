import { Component } from '@angular/core';
import { MessagesComponent } from "./messages/messages.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [MessagesComponent,RouterOutlet,RouterLink]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
