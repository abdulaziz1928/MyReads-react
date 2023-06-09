import Book from "../../models/book";
import BookCard from "../common/BookCard";

export interface SearchBookResultsProps {
  searchResults: Book[];
}

export default function SearchBookResults(props: SearchBookResultsProps) {
  const { searchResults } = props;
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {searchResults.map((book) => {
          return (
            <li key={book.id ?? book.title}>
              <BookCard book={book} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
