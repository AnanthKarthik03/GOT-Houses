import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HouseService } from '../../core/services/house.service';
import { CharacterService } from '../../core/services/character.service';
import { forkJoin } from 'rxjs';
import { ExtractIdPipe } from '../../shared/pipes/extract-id.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, ExtractIdPipe],
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss'],
})
export class HouseDetailComponent implements OnInit {
  /** Selected House */
  house = signal<any>(null);
  /** Resolved sworn‑member characters */
  members = signal<any[]>([]);
  /** Loading state for characters */
  loadingMembers = signal(false);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hs: HouseService,
    private cs: CharacterService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.hs.getHouse(id).subscribe((h) => {
      this.house.set(h);

      // 👉 Only fetch sworn members if URLs are present
      const memberUrls = (h.swornMembers ?? []).filter(Boolean);
      if (memberUrls.length) {
        this.loadingMembers.set(true);
        forkJoin(memberUrls.map((url: string) => this.cs.getCharacterByUrl(url))).subscribe({
          next: (chars) => this.members.set(chars),
          error: () => this.members.set([]),
          complete: () => this.loadingMembers.set(false),
        });
      }
    });
  }

  back(): void {
    this.router.navigate(['/']);
  }
}