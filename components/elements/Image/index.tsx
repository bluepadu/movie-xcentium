import NextImage from 'next/image';
import cn from 'classnames';
import styles from './Image.module.scss';

export default function Image( { src, alt, className=''} ){
    return (
        <div className={cn(styles.imageContainer, className)}>
            <NextImage src={src} layout='fill' alt={alt} className={styles.image} />
        </div>
    )
}