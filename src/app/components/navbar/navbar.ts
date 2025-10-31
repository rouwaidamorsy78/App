import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive,],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
navPadding = 'py-4';

@HostListener('document:scroll') 
  scrollNavbar(){
if (scrollY > 50){
this.navPadding = 'py-2';
}
else { this.navPadding = 'py-4';

}

  }
}


