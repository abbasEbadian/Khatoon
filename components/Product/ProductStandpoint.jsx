import React from 'react'
import StandpointDialog from '../dialog/StandpointDialog';
import StandpointShow from './StandpointShow';
export default function ProductStandpoint() {
  const [standpoints, setstandpoints] = React.useState([]);
  return (
    <div className='row' dir="rtl">
    <div className="col-lg-4 col-12 ">
        <div className='sticky-top'style={{top:"100px"}}>
        <StandpointDialog/>
        </div>
      </div>
      <div className="col-lg-8 col-12">
        {standpoints.map((item,idx)=>(
            <StandpointShow standpoint={item} key={idx}/>

        ))
        }
      </div>
    </div>
  )
}
