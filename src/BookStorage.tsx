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

const BookStorage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    author: "",
    gender: "",
    pages: 0,
  });

  const [books, setBooks] = useState<Book[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "pages" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.title && formData.author) {
      setBooks((prevBooks) => [
        ...prevBooks,
        {
          id: prevBooks.length + 1,
          ...formData,
        },
      ]);
      setFormData({
        title: "",
        author: "",
        gender: "",
        pages: 0,
      });
    }
  };

  return (
    <div>
      <h2>Book Storage</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          onChange={handleInputChange}
          placeholder="Title"
          value={formData.title}
          required
        />
        <input
          name="author"
          onChange={handleInputChange}
          placeholder="Author"
          value={formData.author}
          required
        />
        <input
          name="gender"
          onChange={handleInputChange}
          placeholder="Gender"
          value={formData.gender}
        />
        <input
          name="pages"
          type="number"
          onChange={handleInputChange}
          placeholder="Pages"
          value={formData.pages}
        />
        <button type="submit">Add Book</button>
      </form>

      <h3>Book List</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
            {book.gender && <span> - Genre: {book.gender}</span>}
            {book.pages > 0 && <span> - {book.pages} pages</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookStorage;
