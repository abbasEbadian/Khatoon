import React from 'react'
import SidebarVendor from '../../../components/elements/SidebarVendor'
import Notification from '../../../components/Ui/notification';
import FinancialSituation from '../../../components/Ui/FinancialSituation';
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
import { Line, defaults } from 'react-chartjs-2';


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
        labels: {
          font: {
            size: "10px",
            family: 'IRANSans-web',
          }
        },
      },
      title: {
        display: false,
        text: 'آمار فروش یک سال اخیر',
      },
    },
    scales: {
      xAxes: {
        ticks: {
          font: {
            family: "IRANSans-web",
            size: "8px"
          }
        }
      }
    }
  };

  const [bar1, setbar1] = React.useState([150, 200, 300, 400, 150, 800])
  const [bar2, setbar2] = React.useState([400, 800, 300, 100, 150, 400])

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-3">
          <SidebarVendor />
        </div>
        <div className="col-md-6  h-100">
          <div className='p-3 col-12 card_style'>
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
          <FinancialSituation/>
        </div>
        <div className="col-md-3 ">
          <div>
            <Line className='card_style'
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
          <div className='card_style'>
            <Notification />
            <Notification />
            <Notification />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorPanel

