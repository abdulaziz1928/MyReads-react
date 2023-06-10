import Shelf from "../../enums/shelf";
export interface BookShelfChangerProps {
  bookShelf?: string;
  updateShelf?: any;
}
export default function BookShelfChanger(props: BookShelfChangerProps) {
  const { updateShelf, bookShelf } = props;
  return (
    <div className="book-shelf-changer">
      <select
        value={bookShelf ?? Shelf.None}
        onChange={(shelf) => updateShelf(shelf.target.value)}
      >
        <option disabled>Move to...</option>
        <option value={Shelf.CurrentlyReading}>Currently Reading</option>
        <option value={Shelf.WantToRead}>Want to Read</option>
        <option value={Shelf.Read}>Read</option>
        <option value={Shelf.None}>None</option>
      </select>
    </div>
  );
}
