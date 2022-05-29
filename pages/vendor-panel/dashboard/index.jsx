import React from 'react'
import VendorPanelBase from '../../../components/VendorPanelBase'
import Notification from '../../../components/Ui/Notification'
import FinancialSituation from '../../../components/Ui/FinancialSituation'
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

  return (
    <div className=''>
      <VendorPanelBase active="dashboard">

        <div className="row">
          <div className="col-lg-9 col-12 h-100">
              <FinancialSituation />
              <div className='p-3 col-12 card'>
                <h6>آمار یک سال اخیر</h6>
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
          </div>
          <div className="col-lg-3 col-12  ">
            <div className='card mb-5'>
              <Line 
                options={options}
                data={{
                  labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر',
                    'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
                  datasets: [
                    {
                      label: "گزارش عملکرد",
                      data: bar1,
                      borderColor: 'rgb(53, 162, 235)',
                      backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    }
                  ]
                }}
              />
            </div>
            <div className='card'>
              <Notification />
              <Notification />
              <Notification />
            </div>
          </div>
        </div>
        
      </VendorPanelBase>
    </div>
  )
}

export default withAuth(VendorPanel)

