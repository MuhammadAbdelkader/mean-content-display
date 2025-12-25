import { Component, Input } from '@angular/core';
import { ContentSection } from '../../models/content-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-section-component',
  imports: [CommonModule],
  templateUrl: './content-section-component.html',
  styleUrl: './content-section-component.css',
})
export class ContentSectionComponent {
  @Input() sections: ContentSection[] = [];
}
