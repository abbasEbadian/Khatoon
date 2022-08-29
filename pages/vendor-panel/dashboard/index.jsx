import React from 'react'
import VendorPanelBase from '../../../components/VendorPanelBase'
import Notification from '../../../components/Ui/Notification'
import FinancialSituation from '../../../components/Ui/FinancialSituation'
import ShopReview from '../../../components/Ui/ShopReview'
import withAuth from '../../../redux/withAuth'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {IconButton,Button} from '@mui/material'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Select from "react-select";
import SlideCard from '../../../components/Ui/SlideCard';
import Badge from '@mui/material/Badge';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function VendorPanel() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };
  const percentage = 70;

  const [bar1, setbar1] = React.useState([100, 200, 300, 400, 150, 800])
  const [bar2, setbar2] = React.useState([400, 800, 300, 100, 150, 400])
  const [timedata,setTimedata]=React.useState([
    {value:1,label:"یک روز اخیر"},
    {value:3,label:"3 روز اخیر"},
    {value:5,label:"5 روز اخیر"},
    {value:7,label:"هفته اخیر"},
    {value:10,label:"10 روز اخیر"},
    {value:15,label:"15 روز اخیر"},
    {value:30,label:"یک ماه اخیر"},
    {value:60,label:" 2 ماه اخیر"},

  ])
  return (
    <div className=''>
      <VendorPanelBase active="dashboard">

        <div className="row">
          <div className="col-lg-9 col-12 h-100">
              <FinancialSituation />
              
              <SlideCard />
              <div className='p-3 col-12 card text-right'>
                <h6>آمار بازدید و فروش</h6>
                <div className="col-4 p-3">
                <Select 
                 defaultValue={timedata[0]}
                 options={timedata}
                 isRtl={true}
                />
                </div>
                
                <Line
                  options={options}
                  data={{
                    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر',
                      'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
                    datasets: [
                      {
                        label: "آمار فروش",
                        data: bar1,
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',

                      }
                      , {
                        label: "آمار بازدید",
                        data: bar2,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                      },
                    ]
                  }}
                />
              </div>
              <ShopReview />
          </div>
          <div className="col-lg-3 col-12">
            <div className="card p-3">
                <center>
                     <IconButton>
                      <Badge badgeContent={4} color="main"  anchorOrigin={{vertical: 'top',horizontal: 'left',}}>
                      <NotificationsNoneIcon fontSize="large"/>
                      </Badge>
                    </IconButton>
                </center>
                  
            </div>
           <div className="card mt-4 card-body">
             <p className="card-title mb-5 text-center">تجربه خرید مشتریان</p>
             <center>
             <div style={{width:"100px",height:"100px"}}>
                  <CircularProgressbar styles={buildStyles({
                    textColor:"#df443d",
                    pathColor: '#df443d',
                  })} value={percentage} text={`${percentage}%`} />
              </div>
               </center>
                <Button color="main" className="mt-3">
                  بیشتر <ArrowBackIosNewIcon/>
                </Button>
           </div>
          </div>
        </div>
        
      </VendorPanelBase>
    </div>
  )
}

export default withAuth(VendorPanel)

