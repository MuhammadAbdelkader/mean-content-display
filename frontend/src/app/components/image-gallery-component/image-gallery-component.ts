import { Component, Input } from '@angular/core';
import { ContentImage } from '../../models/content-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-gallery-component',
  imports: [CommonModule],
  templateUrl: './image-gallery-component.html',
  styleUrl: './image-gallery-component.css',
})
export class ImageGalleryComponent  {
  @Input() images: ContentImage[] = [];
}
