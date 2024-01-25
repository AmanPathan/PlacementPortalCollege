import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Home.css';

const URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=Wh2yOsYx0021pprIJ-_QQR3wvC-lsNtAG1YYSmHwaRsVJFCbD58HNjbT7IxVqa5QHE633B8tHgG0mkxglihzKZEBFQ8kHV53m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnI3aDJLLctJszbMpHDG99BmGToPixATg_Fje7jePNlVck6LAAyiuTnvxxsyOVjQDmwwDZqrGzItjDM02ltmyyK-SmQqOgz05wg&lib=M87ZCNbwYoCzHvmJLU7cWdXjso4tBXRfx';
function Forms() {

  const [data,setData] = useState([]);
  const fetchData = async ()=>{
    const res = await axios.get(URL);
    // const resData = res.data();
    console.log(res.data.data.slice(1,));
    setData(res.data.data.slice(1,));
  }

  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>
      {data.map((item,index)=>{
        const {Name,Email,Address,Phone,Link} = item;
        return (
          <div className='text' key={index}>
          <p>{Address}</p>
          </div>
        )
      })

      }
    </div>
  )
}

export default Forms;