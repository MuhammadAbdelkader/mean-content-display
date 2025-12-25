export interface ContentSection {
  id: number;
  title: string;
  content: string;
  icon: string;
}

export interface ContentImage {
  id: number;
  title: string;
  alt: string;
  description: string;
  url: string;
}

export interface ContentMetadata {
  version: string;
  author: string;
  client: string;
  deliveryDate: string;
  technologies: string[];
}

export interface StaticContent {
  title: string;
  subtitle: string;
  description: string;
  sections: ContentSection[];
  images: ContentImage[];
  metadata: ContentMetadata;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}
