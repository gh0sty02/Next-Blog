export interface IPost {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug?: string;
}

export interface IData {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  isFeatured: boolean;
}
