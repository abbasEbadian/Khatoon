import React from 'react'
import Link from 'next/link'
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
        <div className={"megaMenuParent "}>
            <span>
                <MenuIcon mx={2}/>
                 دسته بندی کالا ها
                </span>
            <div className={"headerMegaMenu " +  (isActive?" active": "")}>
                <div className={"headerMegaMenuSide "}>
                    {categories&&categories.filter(i=>!i.parent_id).map((item)=>{
                        return <div key={item.name} className={"headerMegaMenuItem "}>
                            <span className={"headerMegaMenuItemTitle "}
                                onMouseEnter={e=>setActiveCategory(item)}
                            >{item.persian_name}</span>
                        </div>
                    })}
                </div>
                <div className={"headerMegaMenuContent "}>
                    <Link href={"/shop/category/" + activeCategory?.url}>
                        <a>
                            <p>همه محصولات {activeCategory?.persian_name} <KeyboardArrowLeftIcon/></p>
                        </a>
                    </Link>
                    <div className={"headerMegaMenuList "}>
                        {activeCategory?.categories?.map(item=>{
                            return (<>
                                <Link key={item.id} href={'/shop/category/'+ item.url} >
                                    <a>
                                        <h6 key={item.id} className={"headerMegaMenuLevel1 "}>{item.persian_name} {" "} <KeyboardArrowLeftIcon/></h6>
                                    </a>
                                </Link>
                                {item.categories?.map(item2=>{
                                    return <Link key={item2.id} href={'/shop/category/'+ item2.url} >
                                    <a>
                                        <p className="my-2"><small>{item2.persian_name}</small></p>
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