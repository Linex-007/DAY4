import { Component } from '@angular/core';
import { CardsComponent } from '../../units/cards/cards.component';
import { NavbarComponent } from '../../units/navbar/navbar.component';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [NavbarComponent,CardsComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
 department=[
  {
    id:1,
    title:"Healthcare",
    image:"../../../assets/HD-wallpaper-medical-hospital.jpg"
  },
  {
    id:2,
    title:"Banking and Finance",
    image:"../../../assets/bankingandfinance.jpg"
  },
  {
    id:3,
    title:"Aeronotics",
    image:"../../../assets/aero.jpg"
  },
  {
    id:4,
    title:"Mobility",
    image:"../../../assets/mob.jpg"
  },
  {
    id:5,
    title:"GIS",
    image:"../../../assets/gis.jpg"
  },
  {
    id:6,
    title:"Insurance",
    image:"../../../assets/insur.jpg"
  },
 ]

}
