import Book from "../../models/book";
import BookCard from "../common/BookCard";

export interface BookShelfProps {
  title: string;
  books: Book[];
}

export default function BookShelf(props: BookShelfProps) {
  const { title, books } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <li key={book.title}>
                <BookCard book={book} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
