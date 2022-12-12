import useSWR from "swr";
import Link from 'next/link';
import Movie from "components/elements/Movie";
import { fetcher } from "utils";
import styles from "./movies.module.scss"
export default function Movies() {

  const { data: movies } = useSWR('/api/movies', fetcher);

  return (
    <div className={styles.movies}>
      {
        movies?.map(({imdbID, Poster}, i) => (
          <Link href={`/movies/${imdbID}`}>
            <Movie key={i} imdbID={imdbID} Poster={Poster} className={styles.movie} />
          </Link>
        ))
      }
    </div>
  );
}
