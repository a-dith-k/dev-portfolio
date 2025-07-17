import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('navbar');
    const navbarInner = document.getElementById('navbar-inner');

    if (window.scrollY > 50) {
      navbar?.classList.add('mt-4');
      navbarInner?.classList.remove('max-w-screen-xl', 'px-8');
      navbarInner?.classList.add('max-w-screen-md', 'px-4');
    } else {
      navbar?.classList.remove('mt-4');
      navbarInner?.classList.remove('max-w-screen-md', 'px-4');
      navbarInner?.classList.add('max-w-screen-xl', 'px-8');
    }
  }
}
