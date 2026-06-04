export default function StarRating({ rating = 3.5 }) {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;

  for (let i = 0; i < full; i++) {
    stars.push(<i key={`full-${i}`} className="fa-solid fa-star" aria-hidden="true" />);
  }
  if (half) {
    stars.push(<i key="half" className="fa-solid fa-star-half-stroke" aria-hidden="true" />);
  }
  while (stars.length < 5) {
    stars.push(
      <i key={`empty-${stars.length}`} className="fa-regular fa-star" aria-hidden="true" />
    );
  }

  return <div className="star-rating">{stars}</div>;
}
