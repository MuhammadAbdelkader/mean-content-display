import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { HeaderComponent } from './components/header-component/header-component';
import { FooterComponent } from './components/footer-component/footer-component';
import { ContentSectionComponent } from './components/content-section-component/content-section-component';
import { ImageGalleryComponent } from './components/image-gallery-component/image-gallery-component';
import { LoadingSpinnerComponent } from './components/loading-spinner-component/loading-spinner-component';
import { StaticContent } from './models/content-model';
import { ContentService } from './services/content-service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, FooterComponent, ContentSectionComponent, ImageGalleryComponent, LoadingSpinnerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  content?: StaticContent;
  loading = true;
  error = false;
  errorMessage = '';

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.loadContent();
  }

  loadContent(): void {
    this.loading = true;
    this.error = false;

    this.contentService.getContent().subscribe({
      next: (data) => {
        this.content = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = true;
        this.errorMessage = 'Failed to load content. Please try again later.';
        this.loading = false;
        console.error('Error loading content:', err);
      }
    });
  }

  retryLoad(): void {
    this.loadContent();
  }
}
