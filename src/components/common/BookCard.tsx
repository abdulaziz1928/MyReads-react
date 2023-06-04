import Book from "../../models/book";
import BookCover from "./BookCover";
import BookShelfChanger from "./BookShelfChanger";
import { Context } from "../../App";
import { useContext } from "react";
import BookAuthors from "./BookAuthors";
export interface BookCardProps {
  book: Book;
}

export default function BookCard(props: BookCardProps) {
  const { book } = props;
  const { updateBook } = useContext(Context)!;

  const updateShelf = (shelf: string) => {
    updateBook(book, shelf);
  };

  return (
    <div className="book">
      <div className="book-top">
        <BookCover frontCoverURL={book.imageLinks?.thumbnail} />
        <BookShelfChanger bookShelf={book.shelf} updateShelf={updateShelf} />
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors && <BookAuthors authors={book.authors} />}
    </div>
  );
}
