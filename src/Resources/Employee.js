import React, {useEffect, useState } from 'react'
import axios from "axios"
import * as ReactBootStrap from 'react-bootstrap';



function Employee(props){
    const  [newCrew, setNewCrew] = useState(null);
    
    useEffect(
        function () {

        axios.get(`http://statenweb.mockable.io/employee/${props.selectedEmployee}`).then(function(response) 
        {
           setNewCrew(response.data);
        });
    }, 
    [props.selectedEmployee]
    );
    if(!newCrew) {
      
      return <p>Loading...</p>;
      
  }
    
    return <div class="card text-center">   
          <ReactBootStrap.Card style={{ width: '18rem' }} >
    <ReactBootStrap.Card.Img variant="top" src={newCrew.photo} />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title class=" text-decoration-underline">{newCrew.name}</ReactBootStrap.Card.Title>
     </ReactBootStrap.Card.Body>
    <ReactBootStrap.ListGroup className="list-group-flush">
    <ReactBootStrap.ListGroupItem >Employee Id:{newCrew.id}</ReactBootStrap.ListGroupItem>
      <ReactBootStrap.ListGroupItem>Start Date:{newCrew.startDate}</ReactBootStrap.ListGroupItem>
      <ReactBootStrap.ListGroupItem>Role:{newCrew.role}</ReactBootStrap.ListGroupItem>
      <ReactBootStrap.ListGroupItem>Department:{newCrew.department}</ReactBootStrap.ListGroupItem>
    </ReactBootStrap.ListGroup>
  </ReactBootStrap.Card>
         </div>

}
   


export default Employee;