import Book from "../models/book";
import { useState } from "react";
import SearchBar from "../components/search/SearchBar";
import SearchBookResults from "../components/search/SearchBookResults";
import { debounce } from "throttle-debounce";
import { search } from "../services/BookService";
export interface SearchPageProps {
  books: Book[];
}

export default function SearchPage(props: SearchPageProps) {
  const { books } = props;
  const [bookResults, setBookResults] = useState<Book[]>([]);

  const searchQuery = (query: string) => {
    debouncedSearch(query.toLowerCase().trim());
  };

  const debouncedSearch = debounce(500, (query: string) => {
    if (query !== "") {
      search(query).then((books) => searchResults(books));
    } else {
      setBookResults([]);
    }
  });

  const searchResults = (results: Book[]) => {
    if (results.length) {
      const filteredBooks = books.filter((a) =>
        results.some((b) => a.id === b.id)
      );

      for (var i = 0; i < results.length; i++)
        for (const book of filteredBooks)
          if (book.id === results[i].id) results[i] = book;

      setBookResults(results);
    } else {
      setBookResults([]);
    }
  };

  return (
    <div className="search-books">
      <SearchBar updateQuery={searchQuery} />
      <SearchBookResults searchResults={bookResults} />
    </div>
  );
}
