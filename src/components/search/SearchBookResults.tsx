import Book from "../../models/book";
import BookCard from "../common/BookCard";

export interface SearchBookResultsProps {
  searchResults: Book[];
  updateBook: (book: Book, shelf: string) => Promise<void>;
}

export default function SearchBookResults(props: SearchBookResultsProps) {
  const { searchResults, updateBook } = props;
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {searchResults.map((book) => {
          return (
            <li key={book.title}>
              <BookCard book={book} updateBook={updateBook} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
