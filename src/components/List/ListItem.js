import React from 'react'
import styles from './ListItem.module.scss'
import dotsImage from '../../assets/images/dots.png'

const ListItem = () => (
    <li className={styles.listItem}>
        <img
            className={styles.listItemImg}
            src='https://assets.tmecosys.com/image/upload/t_web276x230@2x/img/recipe/ras/Assets/73BDF0E2-F8C2-42BD-AB20-6B3FF913A9EB/Derivates/5adab12c-e759-4857-979e-0256fce640ad.jpg' alt='chorrizo soup' />
        <div className={styles.listItemTitle}>
            <p>Meksykańska zupa z batatami, fasolą i chorizo</p>
            <button>
                <img className={styles.dots}
                    src={dotsImage} alt=""
                />
            </button>
        </div>
    </li>
);

export default ListItem;