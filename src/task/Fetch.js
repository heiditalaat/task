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
            
            })
            .catch((err) => {});
    
        }, []);
      
     

  return (
  
        <div>
            {console.log(Orders)}
            <tr>
                Requests
            </tr>
            <tr>
        <Card style={{}}>
           
            <checkbox/>
            <td>
                ID number:
            </td>

            <td>
                Name:
            </td>

            <td>
                Status:
            </td>

            <td>
                Supplier:
            </td>

            <td>
                Date:
            </td>


        </Card>
        </tr>
        <tr>
            <Card>
                {/*view here with map*/}
            </Card>
        </tr>
        </div>

  );

}

