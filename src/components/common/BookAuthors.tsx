export interface BookAuthorsProps {
  authors: string[];
}

export default function BookAuthors(props: BookAuthorsProps) {
  const { authors } = props;

  return (
    <>
      {authors.map((author) => (
        <div key={author} className="book-authors">
          {author}
        </div>
      ))}
    </>
  );
}
