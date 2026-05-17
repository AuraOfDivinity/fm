import { ComponentPropsWithoutRef } from 'react';
import styles from './BookmarkButton.module.css';

type TBookmarButtonProps = ComponentPropsWithoutRef<'button'> & {
    bookmarked: boolean;
};

const BookmarkButton = ({ bookmarked = false, ...rest }: TBookmarButtonProps) => {
    return (
        <button className={`${styles.bookmark} ${bookmarked ? styles['bookmark--bookmarked'] : ''}`} {...rest}>
            <img
                src={bookmarked ? '/images/icon-bookmark-active.svg' : '/images/icon-bookmark.svg'}
                alt="bookmark icon"
            />
            <p className={`text-preset-6-bold `}>{bookmarked ? 'Bookmarked' : 'Bookmark'}</p>
        </button>
    );
};

export default BookmarkButton;
