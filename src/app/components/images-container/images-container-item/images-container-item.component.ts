import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-images-container-item',
  templateUrl: './images-container-item.component.html',
  styleUrls: ['./images-container-item.component.scss'],
})
export class ImagesContainerItemComponent {
  images: any[] = [];
  showModal = false;
  selectedImage: any = null;

  constructor(
    private supabaseService: SupabaseService,
    private router: Router // <-- inject Router
  ) {
    this.loadImages();
  }

  async loadImages() {
    // Determine bucket name based on route
    let bucket = 'outfits';
    if (this.router.url.includes('inspirations')) {
      bucket = 'inspirations';
    }
    try {
      this.images = await this.supabaseService.getAllImages(bucket);
    } catch (error) {
      console.error('Error loading images:', error);
      this.images = [];
    }
  }

  openImageModal(image: any) {
    this.selectedImage = image;
    this.showModal = true;
  }

  closeImageModal() {
    this.showModal = false;
    this.selectedImage = null;
  }
}
