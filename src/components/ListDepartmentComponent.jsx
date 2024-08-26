import React,{useEffect, useState} from 'react'
import { listDepartments } from '../services/DepartmentService';
import { Link, useNavigate } from 'react-router-dom';

import { deleteDepartment } from '../services/DepartmentService';

const ListDepartmentComponent = () => {

    const [departments, setDepartments] = useState([]);
    const navigator = useNavigate();
    useEffect(() => {
        getAllDepartments();
     }, [])
  
     function getAllDepartments() {
      listDepartments().then((response) => {
          setDepartments(response.data);
      }).catch(error => {
          console.error(error);
      })
     }

     function updateDepartment(id){
        navigator(`/update-department/${id}`)
   }

   function removeDepartment(id){
    console.log(id);

    deleteDepartment(id).then((response) => {
        getAllDepartments()
    }).catch(error => {
        console.error(error);
        
    })
   }
 
    return (
    <div className='container'>
        <h2 className='text-center'>List of Departments</h2>
        <Link className="btn btn-primary mb-2" to='/add-department'>Add Department</Link>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Department Id</th>
                    <th>Department Name</th>
                    <th>Department Description</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    departments.map( department =>
                     <tr key={department.id}>
                        <td>{department.id}</td>
                        <td>{department.departmentName}</td>
                        <td>{department.departmentDescription}</td>
                        <td>
                        <button className='btn btn-info' onClick={() => updateDepartment(department.id)}>Update</button>
                        <button className='btn btn-danger' onClick={() => removeDepartment(department.id)} style={{marginLeft : '10px'}}>Delete</button>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListDepartmentComponent