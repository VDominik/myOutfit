import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspirationsComponent } from './pages/inspirations/inspirations.component';
import { OutfitsComponent } from './pages/outfits/outfits.component';

const routes: Routes = [
  { path: '', redirectTo: '/outfits', pathMatch: 'full' },
  { path: 'outfits', component: OutfitsComponent },
  { path: 'inspirations', component: InspirationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
