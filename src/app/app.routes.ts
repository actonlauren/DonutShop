import { Routes } from '@angular/router';
import { DonutComponent } from './components/donut/donut.component'; 
import {DetailsComponent} from './components/details/details.component';

export const routes: Routes = [
    { path: 'donut', component: DonutComponent },
    { path: 'details', component: DetailsComponent },

    
    { path: 'donut/:id', component: DonutComponent },
];
