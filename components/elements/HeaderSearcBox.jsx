import React from 'react'
import styles from '../../styles/Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
function HeaderSearcBox() {
    const [text, setText] = React.useState("")
    const _change = (e)=>{
        const val = e.target.value 
        setText(val)
    }
    return (
        <div className={styles.header_searchbox}>
            <SearchIcon/>
            <input  placeholder='جستجو در خاتون زیبا...'
            type="text" className={styles.header_searchbox_input} value={text} onChange={_change}/>
        </div>
    )
}

export default HeaderSearcBox