import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import associated_photo from './images/associated_photo.png'
import dashboard from './images/dashboard.png'



export default function Sidebar() {
  
      
     

  return (
  
        <div style={{marginLeft:'5vw' , marginTop:'5vw',borderBlockWidth:'1vw'}}>
            <Card style={{width:'18rem', borderWidth:'1vw'}}>
                <Card.Body>
                    <text style={{color:'#0A47C4', fontSize:'1.5vw', fontWeight:'700', fontFamily:'sequel-sans', marginLeft:'1vw'}}>
                        XO.
                    </text>
            <table style={{borderWidth:'10vw', marginTop:'3vw'}}>
                <tr>
                    <td>
                <img src={associated_photo} alt="associated_photo"
                style={{marginBottom:'1vw'}}/>
                </td>
                <td >
                    <tr>
                    <text style={{marginLeft:'2vw'}}>    Ahmed Reda </text>
                    </tr>
                    <tr>
                        <text style={{marginLeft:'2vw', color:'#90A0B7'}}>id number</text>
                        
                    </tr>
                </td>
                </tr>
                <tr>
                    <td style={{borderSpacing:'1vw'}}>
                <img 
                src={dashboard} alt="dashboard"
               />
                </td>
                <td >
                    <text >
                    Dashboard
                    </text>
                </td>
                </tr>
            </table>
            </Card.Body>
            </Card>

     
        </div>

  );

}

