import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import PageRoutes from "./enums/page-routes";
import { getAll, update } from "./services/BookService";
import Book from "./models/book";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = async () => {
    const res = await getAll();
    setBooks(res);
  };
  const handleUpdateBook = async (book: Book, shelf: string) => {
    await update(book, shelf);
    book.shelf = shelf;
    setBooks([...books.filter((b) => book.id !== b.id), book]);
  };
  return (
    <Routes>
      <Route
        path={PageRoutes.Home}
        element={<HomePage books={books} updateBook={handleUpdateBook} />}
      />
      <Route
        path={PageRoutes.Search}
        element={<SearchPage books={books} updateBook={handleUpdateBook} />}
      />
    </Routes>
  );
}

export default App;

