export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  pages: number;
}

export type FormData = Omit<Book, "id">;
