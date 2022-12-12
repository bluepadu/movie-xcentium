import useSWR from "swr"
import Image from "components/elements/Image";
import cn from 'classnames';
import { fetcher } from "../../../utils";

export default function Movie({ imdbID, Poster, className }) {
    return (
        <div className={cn('relative flex flex-col', className)}>
            <Image src={Poster} alt={imdbID} className='w-[22rem] h-[30rem] object-cover' />
        </div>
    )
}