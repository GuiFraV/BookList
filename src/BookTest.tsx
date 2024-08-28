import React, { useState } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  gender: string;
  pages: number;
}

interface FormData {
  title: string;
  author: string;
  gender: string;
  pages: number;
}

const BookTest = () => {
  const [dataForm, setDataForm] = useState<FormData>({
    title: "",
    author: "",
    gender: "",
    pages: 0,
  });

  const [books, setBooks] = useState<Book[]>([]);

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setDataForm((prevData) => ({
      ...prevData,
      [name]: name === "pages" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (dataForm.title && dataForm.author) {
      setBooks((prevBook) => [...prevBook, { id: Date.now(), ...dataForm }]);
    }
  };

  return (
    <div>
      <h1>Hello BookList</h1>
      <form>
        <input
          onChange={handleFormInput}
          name="title"
          placeholder="title"
          value={dataForm.title}
        ></input>
        <input
          onChange={handleFormInput}
          name="author"
          value={dataForm.author}
          placeholder="author"
        ></input>
        <input
          onChange={handleFormInput}
          name="gender"
          value={dataForm.gender}
          placeholder="gender"
        ></input>
        <input
          onChange={handleFormInput}
          name="pages"
          value={dataForm.pages}
          placeholder="pages"
        ></input>
        <input onClick={handleSubmit} type="submit"></input>
      </form>

      <h2>My BookList</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
            {book.gender && <span> - Genre : {book.gender}</span>}
            {book.pages > 0 && <span> - {book.pages} pages</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookTest;
