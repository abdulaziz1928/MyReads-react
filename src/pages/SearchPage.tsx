import Book from "../models/book";
import { useState } from "react";
import SearchBar from "../components/search/SearchBar";
import SearchBookResults from "../components/search/SearchBookResults";

export interface SearchPageProps {
  books: Book[];
}

export default function SearchPage(props: SearchPageProps) {
  const { books } = props;
  const [query, setQuery] = useState("");

  const updateQuery = (query: string) => {
    setQuery(query.trim());
  };

  const searchResults =
    query === ""
      ? []
      : books.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase().trim())
        );

  return (
    <div className="search-books">
      <SearchBar updateQuery={updateQuery} />
      <SearchBookResults searchResults={searchResults} />
    </div>
  );
}
