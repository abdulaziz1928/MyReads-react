export interface BookCoverProps {
  frontCoverURL?: string;
}

export default function BookCover(props: BookCoverProps) {
  const { frontCoverURL } = props;
  return (
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 192,
        backgroundImage: `url(${frontCoverURL})`,
      }}
    ></div>
  );
}
