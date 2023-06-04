export interface IndustryIdentifier {
  type: string;
  identifier: string;
}
export interface ReadingMode {
  text: boolean;
  image: boolean;
}
export interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}
export interface ImageLink {
  smallThumbnail: string;
  thumbnail: string;
}
export default interface Book {
  id?: string;
  shelf?: string;
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: Date;
  description: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: ReadingMode;
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: PanelizationSummary;
  imageLinks: ImageLink;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}
