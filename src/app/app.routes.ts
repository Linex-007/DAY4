import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'department',component:DepartmentComponent},
    {path:'contacts',component:ContactsComponent}
];
