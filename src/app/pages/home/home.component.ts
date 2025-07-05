import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { HouseService } from '../../core/services/house.service';
import { House } from '../../core/models/house';
import { ExtractIdPipe } from '../../shared/pipes/extract-id.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ExtractIdPipe],
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('cardHover', [
      state('rest', style({ transform: 'scale(1)', boxShadow: 'none' })),
      state('hover', style({ transform: 'scale(1.03)', boxShadow: '0 12px 24px rgba(0,0,0,.6)' })),
      transition('rest <=> hover', animate('200ms ease-in-out')),
    ]),
  ],
  templateUrl: './home.component.html',
 })
export class HomeComponent implements OnInit {
  houses = signal<House[]>([]);
  loading = signal(true);
  error = signal(false);
  hoverIndex = signal<number | null>(null);

  constructor(private houseService: HouseService) {}

  ngOnInit(): void {
    this.houseService.getAllHouses().subscribe({
      next: (data) => {
        this.houses.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      },
    });
  }
}