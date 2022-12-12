import { useRouter } from "next/router";
import styles from "./index.module.scss";
import Image from "components/elements/Image";
import { useAppSelector } from "store/hook";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateMovie } from "store/slices/movieSlice";

export default function Movie() {
  const movieData = useAppSelector(state => state.movie);
  const router = useRouter();
  const dispatch = useDispatch();
  let movie = router.query.imdbID && movieData[router.query.imdbID as string];

  useEffect(() => {
    if(!router.query || movie) return;
    fetch(`http://www.omdbapi.com/?apikey=f4f629a1&i=${router.query.imdbID}`)
      .then(data => data.json())
      .then((data) => {
        dispatch(updateMovie(data));
      })
  }, [router.query]);

  return (
    <article className={styles.article}>
      <figure className={styles.figure}>
        <Image src={movie?.Poster} alt={movie?.Title} className={styles.image} />
      </figure>
      <section className={styles.section}>
        <h1 className={styles.title}>{movie?.Title}</h1>
        <p>{movie?.description}</p>
        <aside>
          {movie?.Ratings.map((rating, index) => (
            <div className={styles.rating}>
              <h4>{rating.Source}</h4>
              <p>{rating.Value}</p>
            </div>
          ))}
        </aside>
      </section>
    </article>
  );
}
