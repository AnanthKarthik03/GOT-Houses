import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../core/services/character.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  char = signal<any>(null);

  constructor(private route: ActivatedRoute, private router: Router, private cs: CharacterService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.cs.getCharacter(id).subscribe((data) => {
        this.char.set(data);    
       });     
    
  }

  back() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}