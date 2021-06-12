import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import Fetch from './task/Fetch'
import Sidebar from './task/Sidebar';
import Pagination from './task/Pagination';
import axios from 'axios';
import SearchPage from './task/SearchPage';

function App() {

  const [orders, setOrders]= useState([]);
  const [currentPage, setCurrentPage]= useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(8);

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

  //Get current orders
  const indexOfLastOrder = currentPage*ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder-ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  
  return (
    <div style={{color:'black', font:'3vw'}}>
         <SearchPage/>
         <Sidebar/>  <Fetch/>
         <Pagination ordersPerPage={ordersPerPage}  
          totalOrders={orders.length}/>
    </div>
  );
} 

export default App;
