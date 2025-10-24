import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterLink } from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar'
import {MatIconModule} from "@angular/material/icon"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    RouterLink, 
    MatButtonModule, 
    MatToolbar, 
    MatIconModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('crud-angular-material');
}
