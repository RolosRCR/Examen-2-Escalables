import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatButtonModule,MatMenuModule,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Examen_Parcial_2_Productos';
}
