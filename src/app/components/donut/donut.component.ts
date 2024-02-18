import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-donut',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './donut.component.html',
  styleUrl: './donut.component.css'
})
export class DonutComponent implements OnInit, OnDestroy {

  routeSubscription!: Subscription;
  querySubscription!: Subscription;
  id: number = 0;
  params$ = this.activatedRoute.params;
  queryParams$ = this.activatedRoute.queryParams;
  name: string | null = null

  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    })

    this.querySubscription = this.activatedRoute.queryParams.subscribe(queryParams => {
      if (queryParams['name']) {
        this.name = queryParams['name'];
      }
    })
  }

  ngOnDestroy(): void {
    
    this.routeSubscription.unsubscribe();
    this.querySubscription.unsubscribe();
  }
}