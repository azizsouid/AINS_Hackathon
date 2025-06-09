import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  startJourney() {
    this.router.navigate(['/select-class']); 
  }
}
