import React from 'react'


const Students=(props)=>{
    let data=props.data
    return(
        <div>
<table border="2px" style={{textAlign:"center",fontWeight:"bold"}}>
<tr>
    <th>Studentname</th>
    <th>Studentid</th>
    <th>Branch</th>
    <th>Dob</th>
    <th>Photo</th>
    <th>Phone</th>
</tr>
{data.map((x)=>{
    return <tr>
<td>{x.studentname}</td>
<td>{x.studentid}</td>
<td>{x.branch}</td>
<td>{x.dob}</td>
<td> <img src={x.photo} alt="" style={{height:"50px",width:"50px"}} /></td>
<td>
<ol>
    {x.phone.map((x)=>{
        return <li>{x}</li>
    })}
    </ol>
    </td>
    </tr>
})}
</table>

 </div>
    )
}
export default Students