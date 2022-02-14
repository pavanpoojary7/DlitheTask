//importing identifiers from node modules
import React, { useState,useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import info, { getting } from './DataAccess'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import { oneAtTime} from "./Api";



const List=()=>{
    const [cview,setCview]=useState(false)
    const [rview,setRview]=useState(false)
    const [eview,setEview]=useState(false)
    const[all, setAll]= useState([])

    useEffect(()=>{
        iterate()
    },[])

    const iterate=async()=>{
        const t= await oneAtTime()
        setAll(t.data) 
    }

    
    const [data,setdate]=useState(
        {
            "id":0,
            "ownerName":"",
            "vehicleNumber":"",
            "vendor":"",
            "balance":0,
            "transactions":0

        }
    )

    return(
        <>
        
        {/* listing fastTag details */}
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 table-responsive">
                    <table className="table table-stripped table-hover shodow text-light bg-primary">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>ownerName</th>
                                <th>vehicleNumber</th>
                                <th>vendor</th>
                                <th>balance</th>
                                <th>transactions</th>              
                            </tr>
                        </thead>
                        <tbody>
                            {all.map((data,index)=>(
                                <tr>
                                    <td>
                                        {data.id}
                                        </td>
                                    <td>{data.ownerName}</td>
                                    {/* { <td>
                                        {data.ownerName.map((ele)=>(
                                            <p>{ele}</p>
                                        ))} </td>*/}
                                     
                                    <td>{data.vehicleNumber}</td>
                                    <td>{data.vendor}</td>
                                    <td>{data.transactions}</td>
                                    {/* { <td>
                                        {data.transactions.map((ele)=>(
                                            <p>{ele}</p>
                                        ))}
                                    </td> } */}
                                    <td>{data.balance}</td>
                                    {/* { <td>
                                        {data.balance.map((ele)=>(
                                            <p>{ele}</p>
                                        ))}
                                    </td> } */}
                                    <td>
                                        <Button color="error" className="btn btn-outline-danger" onClick={()=>{
                                            // abort(data.org)
                                        }}>
                                            <RemoveCircleIcon/>
                                        </Button>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-warning"onClick={
                                            ()=>{
                                               // setEview(true)
                                              // setCompany(data.org)
                                            }
                                        }>
                                            <EditIcon/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        
    
        </>
    );
}   

export default List;
