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

  const handleInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setDataForm((prevData) => ({
      ...prevData,
      [name]: name === "pages" ? Number(value) : value,
    }));
  };

  const [books, setBooks] = useState<Book[]>([]);

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (dataForm.title && dataForm.author) {
      setBooks((prevBooks) => [
        ...prevBooks,
        { id: prevBooks.length + 1, ...dataForm },
      ]);
    }
    setDataForm({
      title: "",
      author: "",
      gender: "",
      pages: 0,
    });
  };

  return (
    <div>
      <h1>BookList</h1>
      <form>
        <input
          name="title"
          onChange={handleInputData}
          value={dataForm.title}
          placeholder="Title"
        ></input>
        <input
          name="author"
          onChange={handleInputData}
          value={dataForm.author}
          placeholder="Author"
        ></input>
        <input
          name="gender"
          onChange={handleInputData}
          value={dataForm.gender}
          placeholder="Gender"
        ></input>
        <input
          name="pages"
          onChange={handleInputData}
          value={dataForm.pages}
          placeholder="Pages"
        ></input>
        <input onClick={handleSubmit} type="submit"></input>
      </form>

      <h3>Books</h3>
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
