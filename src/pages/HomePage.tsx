import { Link } from "react-router-dom";
import PageRoutes from "../enums/page-routes";
import BookShelf from "../components/home/BookShelf";
import Shelf from "../enums/shelf";
import Book from "../models/book";

export interface HomePageProps {
  books: Book[];
}

export default function HomePage(props: HomePageProps) {
  const { books } = props;
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
            title="Currently Reading"
          />
          <BookShelf
            books={getShelfBooks(Shelf.WantToRead)}
            title="Want to Read"
          />
          <BookShelf books={getShelfBooks(Shelf.Read)} title="Read" />
        </div>
      </div>

      <div className="open-search">
        <Link to={PageRoutes.Search}>Add a book</Link>
      </div>
    </div>
  );
}
