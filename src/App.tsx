import React, { useState, useMemo } from "react";
import { BookForm } from "./components/BookForm/BookForm";
import { BookList } from "./components/BookList/BookList";
import { GenreFilter } from "./components/GenreFilter/GenreFilter";
import { Book, FormData } from "./types";

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [activeGenre, setActiveGenre] = useState("");

  const addBook = (bookData: FormData) => {
    setBooks((prevBooks) => [...prevBooks, { ...bookData, id: Date.now() }]);
  };

  const genres = useMemo(() => {
    return Array.from(new Set(books.map((book) => book.genre)));
  }, [books]);

  const filteredBooks = useMemo(() => {
    return activeGenre
      ? books.filter((book) => book.genre === activeGenre)
      : books;
  }, [books, activeGenre]);

  return (
    <div>
      <h1>Book Management App</h1>
      <BookForm onSubmit={addBook} />
      <GenreFilter
        genres={genres}
        activeGenre={activeGenre}
        onGenreChange={setActiveGenre}
      />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default App;
