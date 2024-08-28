import React from "react";
import { Book } from "../../types";

interface BookListProps {
  books: Book[];
}

export const BookList: React.FC<BookListProps> = ({ books }) => {
  if (books.length === 0) {
    return <p>No books available. Add some books to your list!</p>;
  }

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <strong>{book.title}</strong> by {book.author}
          {book.genre && <span> - Genre: {book.genre}</span>}
          {book.pages > 0 && <span> - {book.pages} pages</span>}
        </li>
      ))}
    </ul>
  );
};
