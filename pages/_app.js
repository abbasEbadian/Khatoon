import React from 'react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Header from '../components/Header'
import BottomNavigation2 from '../components/BottomNavigation'

import {configure} from '../redux/axiosConfig'
import {useStore } from '../redux/store';
import { Provider } from 'react-redux'
import { useRouter } from 'next/router';
import {get_initial_data} from '../redux/actions'

const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


function MyApp({ Component, pageProps }) {
  configure()
  const store = useStore(pageProps.initialReduxState)
  const router = useRouter();
  const excludeUrls = [
    "login",
    "signup",
    "logout"
  ] 
  React.useEffect(()=>{
    store.dispatch(get_initial_data())
  }, [])
  return (
    <Provider store={store}>
      <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
        <Header></Header>
      <Component {...pageProps} />
      <BottomNavigation2/>
       </div>  
       </ThemeProvider>
       </CacheProvider>
      
    </Provider>
  )
}

export default MyApp
