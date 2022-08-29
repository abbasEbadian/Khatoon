import Link from 'next/link'
import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


function FinancialSituation() {
    const [dateFinicial, setdateFinicial] = React.useState({
        created: "2029-02-04T22:53:38.542904+03:30",
    })
    const [Msettlement, setMsettlement] = React.useState([
        {
            MoneySettlement: "0"
        }
    ])

    return (
        <div className="col-md-12 col-12 card mb-4">
            <div className={"finicial "}>
                <div className={"head_finicial "}>
                    <p >وضعیت مالی</p>
                    <Link href="/">
                        <a style={{color:"#e9696d"}}>
                            مشاهده بیشتر <ArrowBackIosNewIcon/>
                        </a>
                    </Link>
                </div>
                <div className={"content_finicial "}>
                    <div className={"right_content_finicial "}>
                        {new Date(dateFinicial.created).toLocaleDateString("fa-IR")}
                        <CalendarMonthIcon classsName='ms-1'/>
                         <p className='text-muted'>آخرین تسویه</p>
                    </div>
                    <div className={"left_content_finicial "}>
                        {Msettlement.map((item, idx) => {
                            return (
                                <>
                                    <div>
                                        <span className='me-1'>{item.MoneySettlement}</span>
                                        تومان
                                    </div>
                                    <p className='text-muted'>مبلغ قابل تسویه شما</p>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinancialSituation