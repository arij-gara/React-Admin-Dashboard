import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import {LineStyle , Timeline, TrendingUp,Report ,PersonOutline, WorkOutline,Store,AttachMoney,BarChart,MailOutline,DynamicFeed,ChatBubbleOutline} from '@mui/icons-material';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className ='sidebarwrapper'>
        <div classame='sidebarmenu'>
          <h3 className='sidebartitle'> Dashboard</h3>
          <ul className='sidebarlist'>
            <Link to='/' className='link'>
          <li className='sidebarlistitem active'>
            <LineStyle  className='sidebaricon'/>
            Home
          </li>
          </Link>
          <li className='sidebarlistitem'>
            <Timeline className='sidebaricon' />
            Analytics
          </li>
          <li className='sidebarlistitem'>
            <TrendingUp className='sidebaricon' />
           sales
          </li>

          </ul>
        </div>
        <div classame='sidebarmenu'>
          <h3 className='sidebartitle'> Quick Menu </h3>
          <ul className='sidebarlist'>
            <Link  to= '/users' className='link'>
          <li className='sidebarlistitem active'>
            <PersonOutline className='sidebaricon'/>
            Users
          </li>
          </Link>
          <Link to ='/products' className='link'>
          <li className='sidebarlistitem'>
            <Store className='sidebaricon' />
           Products
          </li>
          </Link>
          <li className='sidebarlistitem'>
            <AttachMoney className='sidebaricon' />
           Transactions
          </li>

<li className='sidebarlistitem'>
            <BarChart className='sidebaricon' />
           Reports
          </li>
          </ul>
        </div>
        <div classame='sidebarmenu'>
          <h3 className='sidebartitle'> Notifications</h3>
          <ul className='sidebarlist'>
          <li className='sidebarlistitem active'>
            <MailOutline  className='sidebaricon'/>
            Mail
          </li>

          <li className='sidebarlistitem'>
            <DynamicFeed className='sidebaricon' />
           Feedback
          </li>
          <li className='sidebarlistitem'>
            <ChatBubbleOutline className='sidebaricon' />
           Messages
          </li>

          </ul>
        </div>
        <div classame='sidebarmenu'>
          <h3 className='sidebartitle'> Staff</h3>
          <ul className='sidebarlist'>
          <li className='sidebarlistitem active'>
            < WorkOutline className='sidebaricon'/>
            Manage
          </li>

          <li className='sidebarlistitem'>
            < Timeline className='sidebaricon' />
           Analytics
          </li>
          <li className='sidebarlistitem'>
            <Report className='sidebaricon' />
           Reports
          </li>

          </ul>
        </div>
      </div>
      
    </div>
  )
}

