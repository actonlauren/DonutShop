import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import {DonutComponent} from './components/donut/donut.component';
import {DetailsComponent} from './components/details/details.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DonutComponent, DetailsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {

  }

  routeToDonut(id: number) {

    
    this.router.navigate(['donut', id], { queryParams: { name: 'Long-John' } });

  }
}
