import Book from "../../models/book";
import BookCover from "./BookCover";
import BookShelfChanger from "./BookShelfChanger";

export interface BookCardProps {
  book: Book;
  updateBook: (book: Book, shelf: string) => Promise<void>;
}

export default function BookCard(props: BookCardProps) {
  const { book, updateBook } = props;

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
      {book.authors?.map((author) => {
        return (
          <div key={author} className="book-authors">
            {author}
          </div>
        );
      })}
    </div>
  );
}
