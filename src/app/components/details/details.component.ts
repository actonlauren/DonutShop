import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    console.log("Donut Details Stored!");
  }

  ngOnDestroy(): void {
    console.log("Donut Deleted!");
  }
}