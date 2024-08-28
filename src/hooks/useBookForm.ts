import { useState, useCallback } from "react";
import { FormData } from "../types";

const INITIAL_FORM_STATE: FormData = {
  title: "",
  author: "",
  genre: "",
  pages: 0,
};

export const useBookForm = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: name === "pages" ? Number(value) || 0 : value,
      }));
    },
    []
  );

  const resetForm = useCallback(() => setFormData(INITIAL_FORM_STATE), []);

  return { formData, handleInputChange, resetForm };
};
