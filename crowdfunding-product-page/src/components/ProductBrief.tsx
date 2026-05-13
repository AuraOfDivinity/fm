import styles from './ProductBrief.module.css'

const ProductBrief = () => {
    return(
        <article className={styles.productBrief}>
            <img src={"/public/images/logo-mastercraft.svg"} className={styles.productBrief__logo}/>
            <p className={`${styles.productBrief__title} text-preset-2`}>Mastercraft Bamboo Monitor Riser</p>
            <p className={`${styles.productBrief__description} text-preset-6-regular`}>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className={styles.productBrief__ctaWrapper}>
                <button className={`${styles.productBrief__back} text-preset-6-bold`}>Back this project</button>
                <button className={styles.productBrief__bookmark}>
                    <img className={styles.productBrief__bookmarkIcon} src={"/public/images/icon-bookmark.svg"}/>
                    <p className={`text-preset-6-bold `}>Bookmark</p>
                </button>
            </div>
        </article>
    )
}

export default ProductBrief