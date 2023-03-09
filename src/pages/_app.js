import '@/styles/globals.css'
import axiosInstance from '@/services/axios';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const apiUrl = process.env.API_KEY;
  console.log("111111111111111", apiUrl);
  useEffect(() => {
    async function fetchData() {
      const res = await axiosInstance.getUnicornsList();
      console.log("res", res.data);     
    }
    fetchData();
  }, []);  

  return <Component {...pageProps} />
}
