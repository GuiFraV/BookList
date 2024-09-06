import React, { useState } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  gender: string;
  pages: number;
}

type NewBook = Omit<Book, "id">;

const BookList = () => {
  const [bookInput, setBookInput] = useState<NewBook>({
    title: "",
    author: "",
    gender: "",
    pages: 0,
  });
  const [books, setBooks] = useState<Book[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    setBookInput((prevBook) => ({
      ...prevBook,
      [name]: value === "pages" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (bookInput.title && bookInput.author) {
      setBooks((prevBook) => [...prevBook, { id: Date.now(), ...bookInput }]);
    }
    setBookInput({
      title: "",
      author: "",
      gender: "",
      pages: 0,
    });
  };

  const deleteBook = (id: number) => {
    setBooks((prevBook) => prevBook.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h2>BookForm</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          value={bookInput.title}
          placeholder="title"
          name="title"
        ></input>
        <input
          onChange={handleInput}
          value={bookInput.author}
          placeholder="author"
          name="author"
        ></input>
        <input
          onChange={handleInput}
          value={bookInput.gender}
          placeholder="gender"
          name="gender"
        ></input>
        <input
          onChange={handleInput}
          value={bookInput.pages}
          placeholder="pages"
          name="pages"
        ></input>
        <input type="submit"></input>
      </form>

      <h2>BookList</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
            {book.gender && <span> - Gender : {book.gender} </span>}
            {book.pages > 0 && <span>{book.pages} pages.</span>}
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
