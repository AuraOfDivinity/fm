import { ComponentPropsWithoutRef } from 'react';
import styles from './MobileBookmarkButton.module.css';

type TMobileBookmarkButtonProps = ComponentPropsWithoutRef<'button'> & {
    bookmarked: boolean;
};

const MobileBookmarkButton = ({ bookmarked, ...rest }: TMobileBookmarkButtonProps) => {
    return (
        <button {...rest} className={styles.mobileBookmarlButton}>
            <img
                src={bookmarked ? '/public/images/icon-bookmark-active.svg' : '/public/images/icon-bookmark.svg'}
                alt="mobile bookmark icon"
            />
        </button>
    );
};

export default MobileBookmarkButton;
