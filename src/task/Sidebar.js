import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import associated_photo from './images/associated_photo.png'
import dashboard from './images/dashboard.png'
import tasks from './images/tasks-active.png'
import email from './images/email.png'
import contacts from './images/contacts.png'
import chat from './images/chat.png'
import settings from './images/settings.png'
import logout from './images/toggle.png'

export default function Sidebar() {
  return (
        <div style={{}}>
            <Card>
                <Card.Body>
                    <table>
                    <text style={{color:'#0A47C4', fontSize:'1.5vw', fontWeight:'700', fontFamily:'sequel-sans', marginLeft:'1vw'}}>
                        XO. 
                    </text>
                    <table style={{marginTop:'3vw'}}>
                    <tr>
                    <td>
                    <img src={associated_photo} alt="associated_photo"
                    style={{marginBottom:'1vw'}}/>
                   </td>
                   <td >
                   <tr>
                   <text style={{marginLeft:'2vw'}}> Ahmed Reda </text>
                   </tr>
                   <tr>
                   <text style={{marginLeft:'2vw', color:'#90A0B7'}}>id number</text>       
                   </tr>
                   </td>
                   </tr>

                <tr> 
                    <img src={dashboard} alt="dashboard"/>  
                <button style={{border:'none', background:'white'}}>
                    <text style={{marginLeft:'1vw'}} >
                    Dashboard
                    </text>
                    </button>
                </tr>
               
                <tr>
                <img src={tasks} alt="tasks" style={{marginTop:'0.5vw'}}
               />
                <button style={{border:'none', background:'white'}}>
                    <text style={{marginLeft:'1vw', marginBottom:'1vw'}}>
                   Requests
                    </text>
                    </button>
                </tr>

                <tr>
                <img src={email} alt="email"/>
                <button style={{border:'none', background:'white'}}>
                    <text style={{marginLeft:'1vw'}} >
              Users
                    </text>     
                </button>
                </tr>

                <tr>      
                <img src={contacts} alt="contacts"/>
                <button style={{border:'none', background:'white'}}>
                    <text style={{marginLeft:'1vw'}} >
              Boxes
                    </text>
                    </button>
                </tr>
            </table>

            <tr>
                <img  src={chat} alt="chat"/>
                <button style={{border:'none', background:'white'}}>
                    <text  style={{marginLeft:'1vw'}}>
              Orders
                    </text>
                    </button>
                </tr>

                <div style={{ borderTop: "#ffffff", marginLeft: '5vw', marginRight: '5vw'
             }}></div>
             <div style={{marginTop:'3vw'}}>
             <tr>
                <td style={{borderSpacing:'1vw'}}>
            <img  src={settings} alt="settings"/>
            </td>
            <td >
            <button style={{border:'none', background:'white'}}>
                <text >
                  Settings
                </text>
                </button>
            </td>
           
            </tr>
            </div>

            <div style={{marginTop:'3vw'}}>
            <tr>
                <td style={{borderSpacing:'1vw'}}>
            <img src={logout} alt="logout"/>
            </td>
            <td >
            <button style={{border:'none', background:'white'}}>
                <text >
                 Logout
                </text>
                </button>
            </td>
   
            </tr>
            </div>
            </table>
            </Card.Body>
            </Card>

        </div>
  );

}

