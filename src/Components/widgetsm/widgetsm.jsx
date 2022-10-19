import React from 'react'
import './widgetsm.css'
import {Visibility} from '@mui/icons-material'
export default function widgetsm() {
  return (
    <div className='widgetsm'>
     <span className='widgetsmtitle'> New join Members </span>
    <ul className='widgetsmalllist'>
        <li className='widgetsmalllistitem'>
            <img className='widgetsmimg' src='https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZXxlbnwwfHwwfHw%3D&w=1000&q=80'></img>
            <div className='widgetsmuser'>
                <span className='widgetsmallusername'> Patrick keller</span>
                <span className='widgetsmallusertitle'> Software Engineer</span>
            </div>
            <button  className='widgetsmbutton'>
         <Visibility className='widgetsmicon' />
         display
        </button>
        </li>
       
        <li className='widgetsmalllistitem'>
            <img  className='widgetsmimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnAnsdGXVDmA5PBls5P6Z0dG4tywmrnCtDg&usqp=CAU'></img>
            <div className='widgetsmuser'>
                <span className='widgetsmallusername'> Anna keller</span>
                <span className='widgetsmallusertitle'> Software Engineer</span>
            </div>
            <button  className='widgetsmbutton'>
         <Visibility className='widgetsmicon' />
         display
        </button>
        </li>

        <li className='widgetsmalllistitem'>
            <img className='widgetsmimg' src='https://www.gala.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2F5f91f651-099d-4dd7-9773-5e001abe4275.2Ejpeg/2216x1536/quality/80/ryan-gosling.jpeg'></img>
            <div className='widgetsmuser'>
                <span className='widgetsmallusername'> Ryan Gosling</span>
                <span className='widgetsmallusertitle'> Software Engineer</span>
            </div>
            <button  className='widgetsmbutton'>
         <Visibility className='widgetsmicon'/>
         display
        </button>
        </li>

        <li className='widgetsmalllistitem'>
            <img className='widgetsmimg'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEBcNDpx98JySCpZq4EHoO4SxOJYo7jDhBIQ&usqp=CAU'></img>
            <div className='widgetsmuser'>
                <span className='widgetsmallusername'> Katy Perry</span>
                <span className='widgetsmallusertitle'> Software Engineer</span>
            </div>
            <button  className='widgetsmbutton'>
         <Visibility className='widgetsmicon'/>
         display
        </button>
        </li>

        <li className='widgetsmalllistitem'>
            <img className='widgetsmimg'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKApvEHDKq6NFI6kDtQSeGw4N1iceYyTiOCA&usqp=CAU'></img>
            <div className='widgetsmuser'>
                <span className='widgetsmallusername'>brad pitt</span>
                <span className='widgetsmallusertitle'> Software Engineer</span>
            </div>
            <button  className='widgetsmbutton'>
         <Visibility className='widgetsmicon'/>
         display
        </button>
        </li>
    </ul>
    </div>
  )
}
