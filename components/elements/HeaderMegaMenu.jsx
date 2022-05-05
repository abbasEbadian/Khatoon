import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Header.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {useSelector} from 'react-redux'
function HeaderMegaMenu({isActive}) {
    const [activeCategory, setActiveCategory] = React.useState({})
    const categories = useSelector(s=>s.main.categories) 
    React.useEffect(()=>{
        if(categories){
            setActiveCategory(categories[0])
        }
    }, [categories])
    return (
        <div className={styles.megaMenuParent}>
            <span>
                <MenuIcon mx={2}/>
                 دسته بندی کالا ها
                </span>
            <div className={styles.headerMegaMenu +  (isActive?" active": "")}>
                <div className={styles.headerMegaMenuSide}>
                    {categories&&categories.filter(i=>!i.parent_id).map((item)=>{
                        return <div key={item.name} className={styles.headerMegaMenuItem}>
                            <span className={styles.headerMegaMenuItemTitle}
                                onMouseEnter={e=>setActiveCategory(item)}
                            >{item.persian_name}</span>
                        </div>
                    })}
                </div>
                <div className={styles.headerMegaMenuContent}>
                    <Link href={"/shop/category/" + activeCategory?.url}>
                        <a>
                            <p>همه محصولات {activeCategory?.persian_name} <KeyboardArrowLeftIcon/></p>
                        </a>
                    </Link>
                    <div className={styles.headerMegaMenuList}>
                        {categories.filter(item=>item.parent_id === activeCategory?.id)?.map(item=>{
                            return (<>
                                <Link key={item.id} href={'/shop/category/'+ item.url} >
                                    <a>
                                        <h6 key={item.id} className={styles.headerMegaMenuLevel1}>{item.persian_name} {" "} <KeyboardArrowLeftIcon/></h6>
                                    </a>
                                </Link>
                                {categories.filter(item2=>item2.parent_id === item.id)?.map(item2=>{
                                    return <Link key={item2.id} href={'/shop/category/'+ item2.url} >
                                    <a>
                                     <p  ><small>{item2.persian_name}</small></p>
                                    </a>
                                </Link>
                                     
                                })}
                                </>
                            )
                        })}
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default HeaderMegaMenu