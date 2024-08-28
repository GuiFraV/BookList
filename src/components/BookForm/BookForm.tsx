import React from "react";
import { FormData } from "../../types";
import { useBookForm } from "../../hooks/useBookForm";

interface BookFormProps {
  onSubmit: (book: FormData) => void;
}

export const BookForm: React.FC<BookFormProps> = ({ onSubmit }) => {
  const { formData, handleInputChange, resetForm } = useBookForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.title.trim() && formData.author.trim()) {
      onSubmit(formData);
      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="pages">Pages:</label>
        <input
          type="number"
          id="pages"
          name="pages"
          value={formData.pages}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};
