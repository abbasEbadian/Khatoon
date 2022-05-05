import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider() {

    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 1000000,
            label: '1M',
        },
        {
            value: 2000000,
            label: '2M',
        },
        {
            value: 3000000,
            label: '3M',
        },
        {
            value: 4000000,
            label: '4M',
        },
        {
            value:5000000,
            label: '5M',
        },
        {
            value: 6000000,
            label: '6M',
        },
        {
            value: 7000000,
            label: '7M',
        },
        {
            value: 8000000,
            label: '8M',
        },
        {
            value: 9000000,
            label: '9M',
        },
        {
            value: 10000000,
            label: '10M',
        },
    ]
    const minDistance = 100000;

    const handleInputChange = (event, idx) => {
        const val = event.target.value === '' ? '' : Number(event.target.value);
        handleChange1(event, idx?[value1[0], val] :[ val, value1[1] ], idx)
    };

   
    const [value1, setValue1] = React.useState([0, 10000000]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
        setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
        setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    
  return (
    <div>
      <div >

            <Slider
                value={value1}
                onChange={handleChange1}
                aria-labelledby="input-slider"
                step={100000}
                min={0}
                max={10000000}
                disableSwap
                marks={marks}
                isRtl={true}
                />
        </div>
        <div className="row price-limit">
            <div className="col d-flex flex-column align-items-center">
                <span>از</span>
                <Input
                    value={value1[0]}
                    onChange={handleInputChange}
                    className="form-control form-control-sm w-100 my-3"
                    inputProps={{
                        step: 100000,
                        min: 0,
                        max: 10000000,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
                <span>تومان</span>
            </div>
            <div className="col d-flex flex-column align-items-center">
                <span>تا</span>
                <Input
                    value={value1[1]}
                    onChange={e=>handleInputChange(e, 1)}
                    className="form-control form-control-sm w-100 my-3"
                    inputProps={{
                        step: 100000,
                        min: 0,
                        max: 10000000,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
                <span>تومان</span>
            </div>
        </div>
    </div>
  );
}