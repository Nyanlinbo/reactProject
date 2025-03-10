import React, { lazy, useEffect, useState } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router';



const Dashboard = () => {

  const history = useHistory();

  const[data,setData]=useState(
    [
      {
          "id": 1,
          "name": "Nyan",
          "email": "nyan28@gmail.com",
          "gender": "male",
          "date_of_birth": "2023-04-22",
          "english_skill": "Elementary",
          "japanese_skill": "N5",
          "deleted_at": null,
          "created_at": "2023-04-22T23:31:19.000000Z",
          "updated_at": "2024-05-28T05:33:06.000000Z"
      },
      {
          "id": 3,
          "name": "Linn",
          "email": "linn28@gmail.com",
          "gender": "male",
          "date_of_birth": "2023-04-22",
          "english_skill": "Elementary",
          "japanese_skill": "N4",
          "deleted_at": null,
          "created_at": "2023-04-22T23:31:49.000000Z",
          "updated_at": "2024-03-16T06:23:01.000000Z"
      },
      {
          "id": 4,
          "name": "Bo",
          "email": "bo28@gmail.com",
          "gender": "male",
          "date_of_birth": "2023-04-22",
          "english_skill": "Elementary",
          "japanese_skill": "N3",
          "deleted_at": null,
          "created_at": "2023-04-22T23:31:50.000000Z",
          "updated_at": "2024-05-28T05:36:04.000000Z"
      },
      {
          "id": 5,
          "name": "Tin Mg",
          "email": "tinmg@gmail.com",
          "gender": "male",
          "date_of_birth": "2023-04-13",
          "english_skill": "Advanced",
          "japanese_skill": "N4",
          "deleted_at": null,
          "created_at": "2023-04-22T23:31:51.000000Z",
          "updated_at": "2024-05-28T05:08:12.000000Z"
      },
      {
          "id": 6,
          "name": "Kyaw Gyi",
          "email": "kyawgyi11@gmail.com",
          "gender": "male",
          "date_of_birth": "2023-04-22",
          "english_skill": "Elementary",
          "japanese_skill": "N1",
          "deleted_at": null,
          "created_at": "2023-04-22T23:31:52.000000Z",
          "updated_at": "2023-04-22T17:24:20.000000Z"
      },
      {
          "id": 7,
          "name": "Kyaw Lay",
          "email": "kyawlay22@gmail.com",
          "gender": "male",
          "date_of_birth": "2023-04-22",
          "english_skill": "Elementary",
          "japanese_skill": "N2",
          "deleted_at": null,
          "created_at": "2023-04-22T23:31:52.000000Z",
          "updated_at": "2023-04-22T17:08:37.000000Z"
      },
      {
          "id": 8,
          "name": "Okkalapa Zoe",
          "email": "okkalapazoe22@gmail.com",
          "gender": "male",
          "date_of_birth": "2023-04-22",
          "english_skill": "Elementary",
          "japanese_skill": "N3",
          "deleted_at": null,
          "created_at": "2023-04-22T23:31:53.000000Z",
          "updated_at": "2023-07-16T06:35:49.000000Z"
      },
      {
          "id": 9,
          "name": "Zoe Lay",
          "email": "zoelay44@gmail.com",
          "gender": "male",
          "date_of_birth": "2023-04-22",
          "english_skill": "Elementary",
          "japanese_skill": "N5",
          "deleted_at": null,
          "created_at": "2023-04-22T23:31:54.000000Z",
          "updated_at": "2024-03-16T06:23:18.000000Z"
      },
      {
          "id": 10,
          "name": "Mg Mg",
          "email": "mg@gmail.com",
          "gender": "male",
          "date_of_birth": "2023-04-22",
          "english_skill": "Elementary",
          "japanese_skill": "N1",
          "deleted_at": null,
          "created_at": "2023-04-22T23:31:54.000000Z",
          "updated_at": "2024-03-17T05:21:56.000000Z"
      },
      {
          "id": 11,
          "name": "Min Min",
          "email": "min77@gmail.com",
          "gender": "male",
          "date_of_birth": "2023-04-22",
          "english_skill": "Elementary",
          "japanese_skill": "N3",
          "deleted_at": null,
          "created_at": "2023-04-22T23:32:09.000000Z",
          "updated_at": "2023-07-23T06:09:00.000000Z"
      }
  ]
  )
  
  useEffect(() => {
    let flag = localStorage.getItem(`LoginProcess`)
    if(flag != "true"){
      history.push(`/Login`);
    }
}, );

const delClick = (ss,aa) =>{

  alert("Love " + ss + " he is " + aa);
}

  return (
<>
<h3>Welcome</h3>
   {data.length > 0 && (
<>
<table className='table table-warning table-striped'>
          <thead>
            <tr>
              <th>No</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Japanese Skill</th>
              <th>English Skill</th>
              <th>Delete</th>
            </tr>
          </thead>
             <tbody>
   {data.map((mappedData,index)=>{
         return(
          <tr>
          <td>{index+1}</td>
          <td>{mappedData.id}</td>
          <td>{mappedData.name}</td>
          <td>{mappedData.email}</td>
          <td>{mappedData.gender}</td>
          <td>{mappedData.date_of_birth}</td>
          <td>{mappedData.english_skill}</td>
          <td>{mappedData.japanese_skill}</td>
          <td><CButton className="btn-danger" 
          onClick={() => {delClick(mappedData.name,mappedData.gender,)}}>
            Delete</CButton></td>
        </tr>
         )
   })}


             </tbody>

</table>


</>

   )}


</>

  );}
export default Dashboard;
