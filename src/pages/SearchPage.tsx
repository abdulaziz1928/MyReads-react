import { Link } from "react-router-dom";
import PageRoutes from "../enums/page-routes";
import Book from "../models/book";
import BookCard from "../components/common/BookCard";
import { useState } from "react";
import SearchBar from "../components/search/SearchBar";
import SearchBookResults from "../components/search/SearchBookResults";

export interface SearchPageProps {
  books: Book[];
  updateBook: (book: Book, shelf: string) => Promise<void>;
}

export default function SearchPage(props: SearchPageProps) {
  const { books, updateBook } = props;
  const [query, setQuery] = useState("");

  const updateQuery = (query: string) => {
    setQuery(query.trim());
  };

  const searchResults =
    query === ""
      ? books
      : books.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase().trim())
        );

  return (
    <div className="search-books">
      <SearchBar updateQuery={updateQuery} />
      <SearchBookResults
        searchResults={searchResults}
        updateBook={updateBook}
      />
    </div>
  );
}
