import React from 'react'
import VendorPanelBase from '../../../components/VendorPanelBase'
import Notification from '../../../components/Ui/Notification'
import FinancialSituation from '../../../components/Ui/FinancialSituation'
import ShopReview from '../../../components/Ui/ShopReview'
import withAuth from '../../../redux/withAuth'

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
          <div className="col-lg-11 col-12 h-100">
              <FinancialSituation />
              <div className="p-3 col-12 card mb-4">
                <div>
                  <p>jjjj</p>
                </div>
              </div>
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
          <div className="col-lg-1 col-12  ">
            
          </div>
        </div>
        
      </VendorPanelBase>
    </div>
  )
}

export default withAuth(VendorPanel)

