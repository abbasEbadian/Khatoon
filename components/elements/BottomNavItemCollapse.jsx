import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Collapse, Link, List, ListItem, ListItemText , Divider} from '@mui/material'
import React from 'react'
function BottomNavItemCollapse({item}) {
    const [open, setOpen] = React.useState({})
    React.useEffect(()=>{
        let x = {}
        Array.from({length: 100}).map(e=>x["cat"+e]=false)
        setOpen({...x})
    }, [])
    const handleOpen = (id)=>{
      setOpen({...open, ["cat"+id]: !open["cat"+id]})
  }
    return <List sx={{px: 1}} className={"footerDialog"}>
        {
            item.categories? item.categories.map((item2, idx)=>{
                return <React.Fragment key={idx}><ListItem button onClick={e=>handleOpen(idx)} >
                      {item2.categories?<span>{open["cat"+idx] ? <ExpandLess /> : <ExpandMore />} </span>:undefined}                 
                      <ListItemText primary={item2.persian_name} className="text-start" sx={{fontSize: "12px"}}/>
                      {item2.categories?<ListItemText className="text-end">
                          <Link href={"/shop/category"+item2.id}>
                              <a>
                                  <small >مشاهده همه</small>

                              </a>
                          </Link>
                      </ListItemText>:undefined}
                    </ListItem>
                    {item2.categories?<Collapse in={open["cat"+idx]} timeout="auto" unmountOnExit>
                        <BottomNavItemCollapse item={item2}/> 
                    </Collapse>:undefined}
                    {idx+1< item.categories.length && <Divider />}
                    </React.Fragment>
            }): 
            <ListItemText primary={item.persian_name} className="text-start"/>
        }
    </List>
}

export default BottomNavItemCollapse