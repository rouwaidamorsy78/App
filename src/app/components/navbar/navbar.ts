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
navPadding = 'py-9';

@HostListener('document:scroll') 
  scrollNavbar(){
if (scrollY > 50){
this.navPadding = 'py-4';
}
else { this.navPadding = 'py-9';

}

  }

  toggleTheme(event: any) {
  const isChecked = event.target.checked;

  if (isChecked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

}


