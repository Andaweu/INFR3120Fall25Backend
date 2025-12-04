import { Component } from '@angular/core';
import { Header } from "../../partials/header/header";
import { Footer } from "../../partials/footer/footer";
import { MainNav } from "../../partials/main-nav/main-nav";

@Component({
  selector: 'app-home',
  imports: [Header, Footer, MainNav],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
