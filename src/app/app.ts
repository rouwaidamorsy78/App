import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
 



@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, Footer,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}

