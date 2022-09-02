import React from 'react'
import withAuth from '../../redux/withAuth'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import VendorSettingTabOne from '../../components/Vendor/VendorSettingTabOne';
import VendorSettingTabTwo from '../../components/Vendor/VendorSettingTabTwo';
import VendorSettingTabThree from '../../components/Vendor/VendorSettingTabThree';
import VendorSettingTabZero from '../../components/Vendor/VendorSettingTabZero';

import {useSelector} from 'react-redux'
import {useRouter} from 'next/router'


const steps = [
    {label:' نوع غرفه'},
    {label: ' اطلاعات عمومی غرفه',},
    {label: 'اطلاعات شخصی و بانکی',},
    {label: 'آپلود مدارک',},
];

function NewVendor() {
    const matches = useMediaQuery('(max-width:768px)');
    const user = useSelector(s=>s.auth.user)
    const router = useRouter()
    const [activeStep, setActiveStep] = React.useState(0);
    const [isRejected, setIsRejected] = React.useState(false);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    React.useEffect(()=>{
        if(user && user.market){
            setIsRejected(user.market.status === "rejected");
            if(user.market.status !== "starter" || user.market.status !== "rejected"){
                router.replace('/vendor-panel/dashboard/')
                return;
            }
            if(user.market.document) setActiveStep(3)
            else if(user.market.card_number) setActiveStep(2)
            else if(user.market.message) setActiveStep(1)
        }else{
            setActiveStep(0)
        }
    }, [user])

    return (
        <main className="container_custom" id="enw-vendor-page">
            <h3 className="text-center mb-5">ساخت غرفه</h3>
            <Box sx={{ flexGrow: 1 }} className=" row">
                <div className=" col-12 card_style  p-4 mb-4">
                    <Stepper activeStep={activeStep} orientation={matches? "vertical": "horizontal"}>
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel>
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    {/* <Typography  className="pb-4">{step.description}</Typography> */}
                                    <Box sx={{ mb: 1, display: "none" }}>
                                        <div>
                                            <Button
                                                variant="contained"
                                                sx={{ mt: 1, mr: 1 }}

                                            >
                                                <Link href={step.link}>
                                                    <a target="_blank" className="text-white">
                                                        برو به تنظیمات
                                                    </a>
                                                </Link>
                                            </Button>
                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{ mt: 1, mr: 1 }}
                                                color="success"
                                            >
                                                {index === steps.length - 1 ?
                                                    'اتمام'
                                                    : 'انجام دادم'}
                                            </Button>

                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </div>
                <div className=" col-12 card_style  p-4">
                    {
                        activeStep === 0?
                        <VendorSettingTabZero goToNext={handleNext} createMode/>
                        : activeStep === 1?
                            <VendorSettingTabTwo goToNext={handleNext} createMode/>
                        : activeStep === 3?
                            <VendorSettingTabOne goToNext={handleNext}/>
                        : activeStep === 3?
                            <VendorSettingTabThree goToNext={handleNext} />
                        : (
                            <Paper square elevation={0} sx={{ p: 3 }} className="col-lg-4 col-12 text-center mx-auto">
                                <Typography>تبریک ! مراحل ثبت اطلاعات با موفقیت  تکمیل گردید.</Typography>
                                <br />
                                <Typography>فروشگاه شما بعد از تایید توسط کارشناسان ما ، شروع به کار خواهد کرد.</Typography>
                                <br />
                                <Button sx={{ mt: 1, mr: 1 }} variant="outlined">
                                    <Link href="/vendor-panel/dashboard">
                                        <a >برو به فروشگاه</a>
                                    </Link>
                                </Button>
                            </Paper>
                        )
                    }
                </div>
                
            </Box>
        </main>

    );
}


export default withAuth(NewVendor)