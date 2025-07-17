import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./components/hero/hero.component";
import { WorkComponent } from "./components/work/work.component";
import { ToolkitComponent } from "./components/toolkit/toolkit.component";
import { ConnectComponent } from "./components/connect/connect.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { RgbDividerComponent } from "./layout/rgb-divider/rgb-divider.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, WorkComponent, ToolkitComponent, ConnectComponent, FooterComponent, NavbarComponent, RgbDividerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'devportfolio';
}
