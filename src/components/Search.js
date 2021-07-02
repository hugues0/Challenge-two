import React,{useState} from 'react'
import "../App.css";



function Search(props){

    const [albumId,setAlbumiD] = useState("");

    const onChangeHandle =(e)=>{
        
        setAlbumiD(e.target.value)

    }

   
return (
  <div>
    <input
      type="text"
      placeholder="Enter album ID"
      onChange={onChangeHandle}
      value={albumId}
      name="albumId"
      className="input-box"
    ></input>
    <button onClick={() => props.searchHandle(albumId)} className="btn">
      Get photos By
    </button>
  </div>
);
}

export default Search