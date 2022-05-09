import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VendorPanelBase from '../../../components/VendorPanelBase';
import VendorSettingTabOne from '../../../components/Vendor/VendorSettingTabOne';
import VendorSettingTabTwo from '../../../components/Vendor/VendorSettingTabTwo';
import VendorSettingTabThree from '../../../components/Vendor/VendorSettingTabThree';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
        <VendorPanelBase active={"settings"}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="اطلاعات فروشگاه" {...a11yProps(0)} />
                    <Tab label="اطلاعات شخصی" {...a11yProps(1)} />
                    <Tab label="مدارک" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <VendorSettingTabTwo />

            </TabPanel>
            <TabPanel value={value} index={1}>
                <VendorSettingTabOne />
                
            </TabPanel>
            <TabPanel value={value} index={2}>
                <VendorSettingTabThree/>
            </TabPanel>
        </VendorPanelBase>
    </Box>
  );
}