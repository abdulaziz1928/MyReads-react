import { Link } from "react-router-dom";
import PageRoutes from "../enums/page-routes";
import BookShelf from "../components/home/BookShelf";
import Shelf from "../enums/shelf";
import Book from "../models/book";

export interface HomePageProps {
  books: Book[];
  updateBook: (book: Book, shelf: string) => Promise<void>;
}

export default function HomePage(props: HomePageProps) {
  const { books, updateBook } = props;
  const getShelfBooks = (shelf: string): Book[] => {
    return books.filter((book) => book.shelf === shelf);
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            books={getShelfBooks(Shelf.CurrentlyReading)}
            updateBook={updateBook}
            title="Currently Reading"
          />
          <BookShelf
            books={getShelfBooks(Shelf.WantToRead)}
            updateBook={updateBook}
            title="Want to Read"
          />
          <BookShelf
            books={getShelfBooks(Shelf.Read)}
            updateBook={updateBook}
            title="Read"
          />
        </div>
      </div>

      <div className="open-search">
        <Link to={PageRoutes.Search}>Add a book</Link>
      </div>
    </div>
  );
}
