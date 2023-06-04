import { Link } from "react-router-dom";
import PageRoutes from "../../enums/page-routes";

export interface SearchBarProps {
  updateQuery: (query: string) => void;
}
export default function SearchBar(props: SearchBarProps) {
  const { updateQuery } = props;

  return (
    <div className="search-books-bar">
      <Link className="close-search" to={PageRoutes.Home}>
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onChange={(e) => updateQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
