import { Component } from '@angular/core';
import { Header } from "../../partials/header/header";
import { Footer } from "../../partials/footer/footer";
import { MainNav } from "../../partials/main-nav/main-nav";

@Component({
  selector: 'app-cars',
  imports: [Header, Footer, MainNav],
  templateUrl: './cars.html',
  styleUrl: './cars.css',
})
export class Cars {

}
