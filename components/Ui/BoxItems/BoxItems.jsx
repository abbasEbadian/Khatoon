import React from 'react'
import styles from './BoxItems.module.scss';
import BoxItem from '../BoxItem/BoxItem';

function BoxItems({ title, boxClasses }) {

    return (
        <div className={styles.box + ' ' + boxClasses}>
            <h4 className={styles.box_title}>{title}</h4>
            <div className='row'>
                <div className='col-12 col-md-3'>
                    <BoxItem />
                </div>
                <div className='col-12 col-md-3'>
                    <BoxItem />
                </div>
                <div className='col-12 col-md-3'>
                    <BoxItem />
                </div>
                <div className='col-12 col-md-3'>
                    <BoxItem />
                </div>

            </div>
        </div>
    )
}

export default React.memo(BoxItems)