import { Component, Output, EventEmitter } from '@angular/core';
import { SupabaseService } from 'src/app/services/supabase.service';
import { Router } from '@angular/router'; // <-- import Router

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent {
  @Output() imageUploaded = new EventEmitter<void>();

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  showModal = false;
  selectedFile: File | null = null;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedFile = null;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  async uploadImage() {
    if (!this.selectedFile) return;
    // Determine bucket based on current route
    const currentRoute = this.router.url;
    let bucketName = 'outfits';
    if (currentRoute.includes('inspirations')) {
      bucketName = 'inspirations';
    }
    const filePath = `${bucketName}/${this.selectedFile.name}`;
    try {
      await this.supabaseService.uploadImage(
        bucketName,
        filePath,
        this.selectedFile
      );
      this.imageUploaded.emit();
    } catch (error) {
      console.error('Upload failed:', error);
    }
    this.closeModal();
  }

  onAddClick() {
    this.openModal();
  }
}
