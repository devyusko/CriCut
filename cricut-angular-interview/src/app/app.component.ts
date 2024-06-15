import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  standalone: true,
  imports: [RouterModule, CommonModule] // Import RouterModule here
})
export class AppComponent {
  title = 'cricut-angular-interview';
  showPlaceholder = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showPlaceholder = event.urlAfterRedirects !== '/assessment';
    });
  }
}
