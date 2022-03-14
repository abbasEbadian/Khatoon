import React from 'react'

function Text_head_Title() {
    return (
        <div className={styles.text_head}>
            <div>
                <h5>{props.title}</h5>
                <span>{props.details}</span>
            </div>
        </div>
    )
}

export default Text_head_Title