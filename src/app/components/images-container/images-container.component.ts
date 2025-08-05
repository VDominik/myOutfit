import { Component } from '@angular/core';
import { SupabaseService } from 'src/app/services/supabase.service';
import { Router } from '@angular/router'; // <-- import Router

@Component({
  selector: 'app-images-container',
  templateUrl: './images-container.component.html',
  styleUrls: ['./images-container.component.scss'],
})
export class ImagesContainerComponent {
  // images: any[] = [];
  // private imagesCache: { [bucket: string]: any[] } = {};
  // constructor(
  //   private supabaseService: SupabaseService,
  //   private router: Router
  // ) {
  //   this.loadImages();
  // }
  // async loadImages() {
  //   let bucket = 'inspirations';
  //   if (this.router.url.includes('outfit')) {
  //     bucket = 'outfits';
  //   }
  //   // Clear cache for current bucket before reload
  //   this.imagesCache[bucket] = undefined;
  //   if (this.imagesCache[bucket]) {
  //     this.images = this.imagesCache[bucket];
  //     return;
  //   }
  //   try {
  //     const loadedImages = await this.supabaseService.getAllImages(bucket);
  //     this.imagesCache[bucket] = loadedImages;
  //     this.images = loadedImages;
  //   } catch (error) {
  //     console.error('Error loading images:', error);
  //     this.images = [];
  //   }
  // }
}
