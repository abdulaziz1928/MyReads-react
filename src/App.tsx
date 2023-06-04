import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState, createContext } from "react";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import PageRoutes from "./enums/page-routes";
import { getAll, update } from "./services/BookService";
import Book from "./models/book";

export interface BookContext {
  updateBook: (book: Book, shelf: string) => Promise<void>;
}
export const Context = createContext<BookContext | null>(null);

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const res = await getAll();
    setBooks(res);
  };

  const updateBook = async (book: Book, shelf: string) => {
    await update(book, shelf);
    const index = books.findIndex((bk) => book.id === bk.id);
    books[index].shelf = shelf;
    setBooks([...books]);
  };

  return (
    <Context.Provider value={{ updateBook }}>
      <Routes>
        <Route path={PageRoutes.Home} element={<HomePage books={books} />} />
        <Route
          path={PageRoutes.Search}
          element={<SearchPage books={books} />}
        />
      </Routes>
    </Context.Provider>
  );
}

export default App;

