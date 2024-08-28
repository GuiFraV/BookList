import React from "react";

interface GenreFilterProps {
  genres: string[];
  activeGenre: string;
  onGenreChange: (genre: string) => void;
}

export const GenreFilter: React.FC<GenreFilterProps> = ({
  genres,
  activeGenre,
  onGenreChange,
}) => {
  return (
    <div>
      <h3>Filter by Genre</h3>
      <button onClick={() => onGenreChange("")} disabled={activeGenre === ""}>
        All Genres
      </button>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onGenreChange(genre)}
          disabled={activeGenre === genre}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};
