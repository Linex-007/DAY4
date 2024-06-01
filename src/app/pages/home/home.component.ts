import { Component } from '@angular/core';
import { CarouselComponent } from '../../units/carousel/carousel.component';
import { NavbarComponent } from '../../units/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from '../../units/cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent,CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
