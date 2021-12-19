import React, {useEffect, useState} from 'react'
import axios from "axios";
import * as ReactBootStrap from 'react-bootstrap';
import Employee from './Employee';
import "../Resources/card.css";


const Employees = () => {
    
    

    const [posts, setPosts] = useState ({ staff: [] });
    const [selectedEmployee, setSelectedEmployee] = useState(null)
    

    

    useEffect(() => {
        
        const fetchPostList = async () => {
          const { data } = await axios(
            "https://statenweb.mockable.io/employees"
          );
          setPosts({ staff: data });
          console.log(data);
        };
        fetchPostList();
      }, [setPosts]);

        if(selectedEmployee) {
            return (
                <div>
                <Employee selectedEmployee={selectedEmployee} />
            
                
                </div>
            )
        }

      return (
          
          <div>
              <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>#ID</th>
      <th>Name</th>
      <th>Department</th>
      <th>Click For More Info</th>
    </tr>
  </thead>
  <tbody>
    {
        posts.staff && posts.staff.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.department}</td>
                 <td><button onClick = { () =>setSelectedEmployee(item.id) }>Employee Info</button></td>
                 
                
            </tr>

        ))
    }
  
   
  </tbody>
</ReactBootStrap.Table>
          

      


 


</div>
      );
}
export default Employees;