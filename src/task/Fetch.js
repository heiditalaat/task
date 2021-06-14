import { withStyles} from "@material-ui/core/styles";
import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import Pagination from './Pagination';
import Form from 'react-bootstrap/Form'

const useStyles = theme => ({
    text: { marginLeft:'5vw', marginRight:'5vw', color:'#90A0B7', fontSize:'13px', fontWeight:'500'},
    text2: { marginLeft:'5vw', marginRight:'5vw', color:'#90A0B7', fontSize:'13px', fontWeight:'500'},  
})

export default function Fetch(props) {
        const [Orders, setOrders] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const [ordersPerPage, setOrdersPerPage] = useState(8);
        //Get current orders
        const indexOfLastOrder = currentPage*ordersPerPage;
        const indexOfFirstOrder = indexOfLastOrder-ordersPerPage;
        const currentOrders = Orders.slice(indexOfFirstOrder, indexOfLastOrder);   
        //For styling
        const classes = useStyles()

        useEffect(() => {
          axios
            .get(
              "https://o53hpo7bf9.execute-api.us-west-2.amazonaws.com/dev/orders"    
            )
            .then((res) => {
                  setOrders(res.data.orders)
            })
            .catch((err) => {});
        }, []);

    

  return (
        <div>
            <table>
            <tr style={{fontSize:'14px', fontWeight:'500'}}>
                Requests
            </tr>
            <tr>

        <Card>
      
            <td>
                <text className={classes.text}>    ID number</text>
            </td>

            <td>
            <text className={classes.text}>  Name:</text>
            </td>

            <td>
            <text className={classes.text}>   Status</text>
            </td>

            <td>
            <text className={classes.text}>    Supplier</text>
            </td>

            <td>
            <text className={classes.text}>    Date</text>
            </td>
        </Card>

        </tr>

        <tr>
        {currentOrders.map((item, index) => {
          return (
            
            <Card style={{marginTop:'3vw'}}>
                <Form.Check type="checkbox" />

            <td>
                <text style={{marginLeft:'5vw', marginRight:'5vw', color:'black', fontSize:'13px', fontWeight:'500'}}> {Orders[index].id}  {/*Orders[1].customer.id*/}</text>
            
            </td>

            <td>
            <text className={classes.text2}> {Orders[index].customer.fname} </text>
            </td>

            <td>
            <text className={classes.text2}> {Orders[index].status} </text>
            </td>

            <td>
            <text className={classes.text}> {Orders[index].supplier} </text>
            </td>

            <td>
            <text className={classes.text}> {Orders[index].created_at} </text>
            </td>
        { 
        //To filter data
           currentOrders
            .filter(index => index > 3)
            .map(index => <li>{index}</li>)  
        }

            </Card>
        )
        })}
        </tr>
     
        </table>
        </div>
  );
}