
import { useState } from "react";

function App() {
  const[inputdata,setInputData]=useState("");
  const[data,setData]=useState([])

  function addItem(){
    if(inputdata != ""){
      setData([...data,inputdata])
      setInputData("")
    }
    
  }
  function deleteItem(e){
    console.log(e)
    setData(data.filter((ele)=>{return ele != e}))

  }
  function EditItem(e){
    setInputData(e)
  }

  return (
   <div className="container"> 
      <div className='row mt-5 mx-5'>
       <div  className='col-lg-4 col-md-4 col-sm-12 ' ></div>
  
       <div className=' inputBox row col-lg-4 col-md-4 col-sm-12 '>
          <div className='col-lg-6 col-sm-6 col-md-6 '>
               <input 
               className="form-control"
               type="text"
               value={inputdata}
               onChange={(e)=>setInputData(e.target.value)}
               />
          </div>
          <div  className='col-lg-6 col-sm-6 col-md-6  '>
          <button className='btn btn-primary' onClick={()=>addItem()} >+</button>
          </div>
  
        </div>
  
  
     
    </div>
    <div className="row">
         <div className="col-lg-3 col-md-12 col-md-4 "></div>
         <div className="col-lg-6 col-md-12 col-md-4 mx-5 mt-5 ">
         {data.map((ele)=>{
                 return(
                  <div className="container">
                    <div className="row ">
                    <li>{ele} <span className="btn btn-danger" onClick={()=>deleteItem(ele)}>delete</span>
                    <span className="btn btn-primary" onClick={()=>EditItem(ele)}>edit</span>
                    </li> 

                    </div>
                    <div className="">

                    </div>
                   </div>
                 )
               })}
         </div>
         <div className="col-lg-3 col-md-12 col-md-4 "></div>
    </div>
   
    </div>
     
     
    
  )
}

export default App
