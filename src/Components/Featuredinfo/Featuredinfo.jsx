import React from 'react'
import './Featuredinfo.css'
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
export default function Featuredinfo() {
  return (
    <div  className= 'featured'>
        <div  className='featureditem'>
            <span className="featuredtitle">Revanue</span>
            <div className="featuredmoneycontainer">
                <span className='featuredmoney '>$2,456</span>
                <span className='featuredmoneyrate '>
                    -11,4 <ArrowDownward className='featuredIcon negative'/></span>
            </div>
            <span className='featuredsub'> compared to last month</span>
        </div>
        
        <div  className='featureditem'>
            <span className="featuredtitle">Sales</span>
            <div className="featuredmoneycontainer">
                <span className='featuredmoney '>$4,456</span>
                <span className='featuredmoneyrate '>
                    -11,4 <ArrowDownward className='featuredIcon negative'/></span>
            </div>
            <span className='featuredsub'> compared to last month</span>
        </div>   

        <div  className='featureditem'>
            <span className="featuredtitle">Cost</span>
            <div className="featuredmoneycontainer">
                <span className='featuredmoney '>$2,456</span>
                <span className='featuredmoneyrate '>
                    +2.4 <ArrowUpward className='featuredicon'/></span>
            </div>
            <span className='featuredsub'> compared to last month</span>
        </div>
    </div>
  )
}

