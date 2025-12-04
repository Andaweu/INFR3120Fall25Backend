import { Routes } from '@angular/router';
import { Home } from "./pages/home/home";
import { Cars } from "./pages/cars/cars";
import { Caradd } from "./pages/caradd/caradd";
import { Caredit } from "./pages/caredit/caredit";
import { Cardelete } from "./pages/cardelete/cardelete";
export const routes: Routes = [
    {path:"", component:Home},
    {path:"home", component:Home},
    {path:"cars", component:Cars},
    {path:"cars/view", component:Cars},
    {path:"cars/add", component:Caradd},
    {path:"cars/edit", component:Caredit},
    {path:"cars/delete", component:Cardelete}
];

