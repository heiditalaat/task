import {React,useState} from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import search from './search.css'

const SearchPage = () => {
 const [name, setName] = useState("")
 
  return (
    <MDBCol md="6">
      <div className="input-group md-form form-sm form-1 pl-0"
      style={{marginLeft:'70vw'}}>
        <div className="input-group-prepend">
          <span className="input-group-text purple lighten-3" id="basic-text1">
            <MDBIcon className="text-white" icon="search" />
          </span>
        </div>

        <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />

    
      </div>
    </MDBCol>
  );
}

export default SearchPage;