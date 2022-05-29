import React from 'react'
import '../styles/globals.css'
import '../styles/master.scss'
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header'
import BottomNavigation2 from '../components/BottomNavigation'
import 'swiper/css';

import {configure} from '../redux/axiosConfig'
import {useStore } from '../redux/store';
import { Provider } from 'react-redux'
import { useRouter } from 'next/router';
import {get_initial_data} from '../redux/actions'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import SVGBoxes from '../components/Ui/SVGBoxes';
import Footer from '../components/Footer';
import LoginModal from '../components/Ui/LoginModal';

import {ToastContainer} from 'react-toastify'


const theme = createTheme({
  direction: 'rtl', 
  palette: {
    main: {
      main: "#DF443D",
      contrastText: "#fff"
    },
    orange: {
      main : "#FFAD14",
      contrastText: "#fff"
    },
    white:{
      main: "#FFFFFF",
      contrastText: "#222"
    },
    skyblue:{
      contrastText: "#fff",
      main: "lightseagreen"
    }
  },
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


function MyApp({ Component, pageProps }) {

  const [loginModalOpen, setLoginModalOpen] = React.useState(false)
  const handleLoginClose = ()=>{setLoginModalOpen(false);}
  const handleLoginOpen = ()=>{setLoginModalOpen(true);}

  configure()
  const store = useStore(pageProps.initialReduxState)
  const router = useRouter();
  const excludeUrls = [
    "user-panel",
    "vendor-panel",
    "new-vendor",
    'card'
  ] 
  React.useEffect(()=>{
    store.dispatch(get_initial_data())
  }, [])
  return (
    <Provider store={store}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <div dir="rtl">
            <SVGBoxes/>
            <Header  handleLoginClose={handleLoginClose} handleLoginOpen={handleLoginOpen} loginModalOpen={loginModalOpen}></Header>
            <Component {...pageProps } handleLoginClose={handleLoginClose} handleLoginOpen={handleLoginOpen} loginModalOpen={loginModalOpen}/>
           
            <LoginModal handleLoginClose={handleLoginClose} handleLoginOpen={handleLoginOpen} loginModalOpen={loginModalOpen} />
            {
              excludeUrls.every(item=>router.pathname.indexOf(item) === -1)
              &&
              <>
              <Footer />
              <BottomNavigation2/>
              </>
            }
           
           <ToastContainer
              position="bottom-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>  
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  )
}

export default MyApp
