import { Injectable } from '@angular/core';
// Add Supabase client import
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  // Replace with your Supabase project URL and anon key
  private supabaseUrl = 'https://iabmyrlkbjtubymbceqx.supabase.co';
  private supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhYm15cmxrYmp0dWJ5bWJjZXF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzNDE0MzUsImV4cCI6MjA2OTkxNzQzNX0.g_nJG8P3h3I8_pNRZk6jEOuQOOcFkg5xCf-DMO265E0';

  constructor() {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
  }

  /**
   * Uploads an image to Supabase Storage
   * @param bucketName The name of the storage bucket
   * @param filePath The path (filename) in the bucket
   * @param file The image file (Blob or File)
   * @returns Promise with upload result
   */
  async uploadImage(
    bucketName: string,
    filePath: string,
    file: File | Blob
  ): Promise<any> {
    const { data, error } = await this.supabase.storage
      .from(bucketName)
      .upload(filePath, file);

    if (error) {
      throw error;
    }
    return data;
  }

  /**
   * Gets all images from a bucket folder and returns their public URLs
   * @param bucketName The name of the bucket ('inspirations' or 'outfits')
   * @returns Array of objects: { name: string, url: string }
   */
  async getAllImages(
    bucketName: string
  ): Promise<{ name: string; url: string }[]> {
    // Folder path is the same as bucket name
    const folderPath = `${bucketName}/`;

    // List all files in the folder
    const { data, error } = await this.supabase.storage
      .from(bucketName)
      .list(folderPath);

    if (error) {
      throw error;
    }

    // Map each file to its public URL
    const images = (data ?? []).map((file) => {
      const {
        data: { publicUrl },
      } = this.supabase.storage
        .from(bucketName)
        .getPublicUrl(`${folderPath}${file.name}`);
      return {
        name: file.name,
        url: publicUrl,
      };
    });

    return images;
  }

  /**
   * Deletes an image from a bucket
   * @param bucketName The name of the bucket
   * @param filePath The path (filename) of the image to delete
   * @returns Promise with delete result
   */
  async deleteImage(bucketName: string, filePath: string): Promise<any> {
    const { data, error } = await this.supabase.storage
      .from(bucketName)
      .remove([filePath]);

    if (error) {
      throw error;
    }
    return data;
  }
}
