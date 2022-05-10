import React from 'react'
import SidebarVendor from '../../../components/elements/SidebarVendor'
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
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const [bar1, setbar1] = React.useState([100, 200, 300, 400, 150, 800])
  const [bar2, setbar2] = React.useState([400, 800, 300, 100, 150, 400])

  return (
    <div className='container'>
      <div className="row">
          <div className="col-md-3">
            <SidebarVendor />
          </div>
          <div className="col-md-9 card_style">
            <Line
              data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green',
                  'Purple', 'Orange'],
                datasets: [
                  {
                    label: "data1",
                    data: bar1,

                  }
                  , {
                    label: "data12",
                    data: bar2
                  },

                ]
              }}
            />
        </div>
      </div>
    </div>
  )
}

export default VendorPanel

