import React from 'react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import Header from '../components/Header'
import BottomNavigation2 from '../components/BottomNavigation'

import {configure} from '../redux/axiosConfig'
import {useStore } from '../redux/store';
import { Provider } from 'react-redux'
import { useRouter } from 'next/router';
import {get_initial_data} from '../redux/actions'

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
      <Header></Header>
      <Component {...pageProps} />
      <BottomNavigation2/>
    </Provider>
  )
}

export default MyApp
