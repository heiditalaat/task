import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';



export default function Fetch() {
    const token = localStorage.getItem("user");
        const [Customer, setCustomer] = useState([]);
        const [Orders, setOrders] = useState([]);
        const [email, setEmail] = useState("");
        const [FirstName, setFirstName] = useState("");
        const [Gender, setGender] = useState("");
        const [lastName, setLastName] = useState("");
      
        useEffect(() => {
          axios
            .get(
              "https://o53hpo7bf9.execute-api.us-west-2.amazonaws.com/dev/orders"
              
            )
            .then((res) => {
            
                  setOrders(res.data.orders)
                  setCustomer(Orders[8].customer)
                  setFirstName(Customer.fname)
            
            })
            .catch((err) => {});
    
        }, []);
      
     

  return (
  
        <div style={{marginLeft:'10vw', marginRight:'10vw', marginTop:'10vw', marginBottom:'2vw'}}>
            <table>
            <tr style={{fontSize:'14px', fontWeight:'500'}}>
                Requests
            </tr>
            <tr>
        <Card style={{marginTop:'2vw'}}>
           
            <checkbox/>
            <td>
                <text style={{marginLeft:'5vw', marginRight:'5vw', color:'#90A0B7', fontSize:'13px', fontWeight:'500'}}>    ID number</text>
            
            </td>

            <td>
            <text style={{marginLeft:'1.5vw', marginRight:'5vw', color:'#90A0B7', fontSize:'13px', fontWeight:'500'}}>  Name:</text>
            </td>

            <td>
            <text style={{marginLeft:'5vw', marginRight:'5vw', color:'#90A0B7', fontSize:'13px', fontWeight:'500'}}>   Status</text>
            </td>

            <td>
            <text style={{marginLeft:'5vw', marginRight:'5vw', color:'#90A0B7', fontSize:'13px', fontWeight:'500'}}>    Supplier</text>
            </td>

            <td>
            <text style={{marginLeft:'5vw', marginRight:'5vw', color:'#90A0B7', fontSize:'13px', fontWeight:'500'}}>    Date</text>
            </td>


        </Card>
        </tr>
        <tr>
        {Orders.map((item, index) => {
          return (
            <Card style={{marginTop:'3vw'}}>
            <td>
                <text style={{marginLeft:'5vw', marginRight:'5vw', color:'black', fontSize:'13px', fontWeight:'500'}}> {Orders[index].id}  {/*Orders[1].customer.id*/}</text>
            
            </td>

            <td>
            <text style={{marginLeft:'5vw', marginRight:'5vw', color:'#90A0B7', fontSize:'13px', fontWeight:'500'}}>     {Orders[index].customer.fname}</text>
            </td>

            <td>
            <text style={{marginLeft:'6vw', marginRight:'5vw', color:'#90A0B7', fontSize:'13px', fontWeight:'500', textAlign:'left'}}>   {Orders[index].status}</text>
            </td>

            <td>
            <text style={{marginLeft:'5vw', marginRight:'5vw', color:'#90A0B7', fontSize:'13px', fontWeight:'500'}}>    {Orders[index].supplier}</text>
            </td>

            <td>
            <text style={{marginLeft:'5vw', marginRight:'5vw', color:'#90A0B7', fontSize:'13px', fontWeight:'500'}}>    {Orders[index].created_at}</text>
            </td>
            </Card>
                 )
                })}
        </tr>
        </table>
        </div>

  );

}

