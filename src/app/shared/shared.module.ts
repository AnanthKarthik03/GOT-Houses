import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule],
  exports: [NavbarComponent]  // <- This is important
})
export class SharedModule {}