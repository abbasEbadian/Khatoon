import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Header.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
function HeaderMegaMenu({isActive}) {
    const [activeCategory, setActiveCategory] = React.useState({})
    const [categories, setCategories] = React.useState([
        {id: 1, name: "", persian_name: "مواد غذایی", subcategories: [
            {id: 1, name: "", persian_name: "مواد غذایی 1", subcategories: [
                {id: 1, name: "", persian_name: "مواد غذایی 1"},
                {id: 1, name: "", persian_name: "مواد غذایی 2"},
                {id: 1, name: "", persian_name: "مواد غذایی 3"},
            ]},
            {id: 1, name: "", persian_name: "مواد غذایی 2", subcategories: [
                {id: 1, name: "", persian_name: "مواد غذایی 1"},
                {id: 1, name: "", persian_name: "مواد غذایی 2"},
                {id: 1, name: "", persian_name: "مواد غذایی 3"},
            ]},
            {id: 1, name: "", persian_name: "مواد غذایی 3", subcategories: [
                {id: 1, name: "", persian_name: "مواد غذایی 1"},
                {id: 1, name: "", persian_name: "مواد غذایی 2"},
                {id: 1, name: "", persian_name: "مواد غذایی 3"},
            ]},
        ]},
        {id: 2, name: "", persian_name: "مد و پوشاک", subcategories: [
            {id: 1, name: "", persian_name: "مد و پوشاک 1",subcategories: [
            {id: 1, name: "", persian_name: "مد و پوشاک 1"},
            {id: 1, name: "", persian_name: "مد و پوشاک 2"},
            {id: 1, name: "", persian_name: "مد و پوشاک 3"},
        ]},
            {id: 1, name: "", persian_name: "مد و پوشاک 2",subcategories: [
            {id: 1, name: "", persian_name: "مد و پوشاک 1"},
            {id: 1, name: "", persian_name: "مد و پوشاک 2"},
            {id: 1, name: "", persian_name: "مد و پوشاک 3"},
        ]},
            {id: 1, name: "", persian_name: "مد و پوشاک 3",subcategories: [
            {id: 1, name: "", persian_name: "مد و پوشاک 1"},
            {id: 1, name: "", persian_name: "مد و پوشاک 2"},
            {id: 1, name: "", persian_name: "مد و پوشاک 3"},
        ]},
        ]},
        {id: 3, name: "", persian_name: "خانه و آشپزخانه", subcategories: [
            {id: 1, name: "", persian_name: "خانه و آشپزخانه 1",subcategories: [
            {id: 1, name: "", persian_name: "خانه و آشپزخانه 1"},
            {id: 1, name: "", persian_name: "خانه و آشپزخانه 2"},
            {id: 1, name: "", persian_name: "خانه و آشپزخانه 3"},
        ]},
            {id: 1, name: "", persian_name: "خانه و آشپزخانه 2",subcategories: [
            {id: 1, name: "", persian_name: "خانه و آشپزخانه 1"},
            {id: 1, name: "", persian_name: "خانه و آشپزخانه 2"},
            {id: 1, name: "", persian_name: "خانه و آشپزخانه 3"},
        ]},
            {id: 1, name: "", persian_name: "خانه و آشپزخانه 3",subcategories: [
            {id: 1, name: "", persian_name: "خانه و آشپزخانه 1"},
            {id: 1, name: "", persian_name: "خانه و آشپزخانه 2"},
            {id: 1, name: "", persian_name: "خانه و آشپزخانه 3"},
        ]},
        ]},
        {id: 4, name: "", persian_name: "صنایع دستی", subcategories: [
            {id: 1, name: "", persian_name: "صنایع دستی 1",subcategories: [
            {id: 1, name: "", persian_name: "صنایع دستی 1"},
            {id: 1, name: "", persian_name: "صنایع دستی 2"},
            {id: 1, name: "", persian_name: "صنایع دستی 3"},
        ]},
            {id: 1, name: "", persian_name: "صنایع دستی 2",subcategories: [
            {id: 1, name: "", persian_name: "صنایع دستی 1"},
            {id: 1, name: "", persian_name: "صنایع دستی 2"},
            {id: 1, name: "", persian_name: "صنایع دستی 3"},
        ]},
            {id: 1, name: "", persian_name: "صنایع دستی 3",subcategories: [
            {id: 1, name: "", persian_name: "صنایع دستی 1"},
            {id: 1, name: "", persian_name: "صنایع دستی 2"},
            {id: 1, name: "", persian_name: "صنایع دستی 3"},
        ]},
        ]},
        {id: 5, name: "", persian_name: "عطاری", subcategories: [
            {id: 1, name: "", persian_name: "عطاری 1", subcategories: [
            {id: 1, name: "", persian_name: "عطاری 1"},
            {id: 1, name: "", persian_name: "عطاری 2"},
            {id: 1, name: "", persian_name: "عطاری 3"},
        ]},
            {id: 1, name: "", persian_name: "عطاری 2", subcategories: [
            {id: 1, name: "", persian_name: "عطاری 1"},
            {id: 1, name: "", persian_name: "عطاری 2"},
            {id: 1, name: "", persian_name: "عطاری 3"},
        ]},
            {id: 1, name: "", persian_name: "عطاری 3", subcategories: [
            {id: 1, name: "", persian_name: "عطاری 1"},
            {id: 1, name: "", persian_name: "عطاری 2"},
            {id: 1, name: "", persian_name: "عطاری 3"},
        ]},
        ]},
        {id: 6, name: "", persian_name: "آرایشی بهداشتی", subcategories: [
            {id: 1, name: "", persian_name: "آرایشی بهداشتی 1", subcategories: [
            {id: 1, name: "", persian_name: "آرایشی بهداشتی 1"},
            {id: 1, name: "", persian_name: "آرایشی بهداشتی 2"},
            {id: 1, name: "", persian_name: "آرایشی بهداشتی 3"},
        ]},
            {id: 1, name: "", persian_name: "آرایشی بهداشتی 2", subcategories: [
            {id: 1, name: "", persian_name: "آرایشی بهداشتی 1"},
            {id: 1, name: "", persian_name: "آرایشی بهداشتی 2"},
            {id: 1, name: "", persian_name: "آرایشی بهداشتی 3"},
        ]},
            {id: 1, name: "", persian_name: "آرایشی بهداشتی 3", subcategories: [
            {id: 1, name: "", persian_name: "آرایشی بهداشتی 1"},
            {id: 1, name: "", persian_name: "آرایشی بهداشتی 2"},
            {id: 1, name: "", persian_name: "آرایشی بهداشتی 3"},
        ]},
        ]},
        {id: 7, name: "", persian_name: "فرهنگی ، آموزشی و سرگرمی", subcategories: [
            {id: 1, name: "", persian_name: "فرهنگی 1", subcategories: [
            {id: 1, name: "", persian_name: "فرهنگی 1"},
            {id: 1, name: "", persian_name: "فرهنگی 2"},
            {id: 1, name: "", persian_name: "فرهنگی 3"},
        ]},
            {id: 1, name: "", persian_name: "فرهنگی 2", subcategories: [
            {id: 1, name: "", persian_name: "فرهنگی 1"},
            {id: 1, name: "", persian_name: "فرهنگی 2"},
            {id: 1, name: "", persian_name: "فرهنگی 3"},
        ]},
            {id: 1, name: "", persian_name: "فرهنگی 3", subcategories: [
            {id: 1, name: "", persian_name: "فرهنگی 1"},
            {id: 1, name: "", persian_name: "فرهنگی 2"},
            {id: 1, name: "", persian_name: "فرهنگی 3"},
        ]},
        ]},
        {id: 8, name: "", persian_name: "ورزش و سفر", subcategories: [
            {id: 1, name: "", persian_name: "ورزش و سفر 1", subcategories: [
            {id: 1, name: "", persian_name: "ورزش و سفر 1"},
            {id: 1, name: "", persian_name: "ورزش و سفر 2"},
            {id: 1, name: "", persian_name: "ورزش و سفر 3"},
        ]},
            {id: 1, name: "", persian_name: "ورزش و سفر 2", subcategories: [
            {id: 1, name: "", persian_name: "ورزش و سفر 1"},
            {id: 1, name: "", persian_name: "ورزش و سفر 2"},
            {id: 1, name: "", persian_name: "ورزش و سفر 3"},
        ]},
            {id: 1, name: "", persian_name: "ورزش و سفر 3", subcategories: [
            {id: 1, name: "", persian_name: "ورزش و سفر 1"},
            {id: 1, name: "", persian_name: "ورزش و سفر 2"},
            {id: 1, name: "", persian_name: "ورزش و سفر 3"},
        ]},
        ]},
        {id: 9, name: "", persian_name: "خدمات کسب و کار", subcategories: [
            {id: 1, name: "", persian_name: "خدمات کسب و کار 1", subcategories: [
            {id: 1, name: "", persian_name: "خدمات کسب و کار 1"},
            {id: 1, name: "", persian_name: "خدمات کسب و کار 2"},
            {id: 1, name: "", persian_name: "خدمات کسب و کار 3"},
        ]},
            {id: 1, name: "", persian_name: "خدمات کسب و کار 2", subcategories: [
            {id: 1, name: "", persian_name: "خدمات کسب و کار 1"},
            {id: 1, name: "", persian_name: "خدمات کسب و کار 2"},
            {id: 1, name: "", persian_name: "خدمات کسب و کار 3"},
        ]},
            {id: 1, name: "", persian_name: "خدمات کسب و کار 3", subcategories: [
            {id: 1, name: "", persian_name: "خدمات کسب و کار 1"},
            {id: 1, name: "", persian_name: "خدمات کسب و کار 2"},
            {id: 1, name: "", persian_name: "خدمات کسب و کار 3"},
        ]},
        ]},
    ])
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
                    {categories && categories.map((item)=>{
                        return <div key={item.name} className={styles.headerMegaMenuItem}>
                            <span className={styles.headerMegaMenuItemTitle}
                                onMouseEnter={e=>setActiveCategory(item)}
                            >{item.persian_name}</span>
                        </div>
                    })}
                </div>
                <div className={styles.headerMegaMenuContent}>
                    <Link href={"/shop/category/" + activeCategory.id}>
                        <a>
                            <p>همه محصولات {activeCategory.persian_name} <KeyboardArrowLeftIcon/></p>
                        </a>
                    </Link>
                    <div className={styles.headerMegaMenuList}>
                        {activeCategory.subcategories?.map(item=>{
                            return (<>
                                <Link key={item.id} href={'/shop/category/'+ item.id} >
                                    <a>
                                        <h6 key={item.id} className={styles.headerMegaMenuLevel1}>{item.persian_name} {" "} <KeyboardArrowLeftIcon/></h6>
                                    </a>
                                </Link>
                                {item.subcategories && item.subcategories.map(item2=>{
                                    return <p  key={item2.id}><small>{item2.persian_name}</small></p>
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