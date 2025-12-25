import { Component, Input } from '@angular/core';
import { ContentMetadata } from '../../models/content-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-component',
  imports: [CommonModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css',
})
export class FooterComponent {
  @Input() metadata?: ContentMetadata;
  currentYear = new Date().getFullYear();
}
