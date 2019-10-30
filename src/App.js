import React from 'react';
import  GenerateEmployee  from  './GenerateEmployee';
import  DisplayEmployee  from  './DisplayEmployee';
import './App.css';

const  sampleEmployee = {
  gender:  'male',
  name: {
      title:  'mr',
      first:  'mathys',
      last:  'aubert'
  },
  location: {
      street:  '9467 rue gasparin',
      city:  'perpignan',
      postcode:  '90208'
  },
  email:  'mathys.aubert@example.com',
  picture: {
      large:  'https://randomuser.me/api/portraits/men/66.jpg'
  }
};

class App extends React.Component{
  state = {
    employee:  sampleEmployee
  };
  getEmployee() {
    fetch("https://randomuser.me/api?nat=fr")
      .then(response  =>  response.json())
      .then(data  => {
        this.setState({
          employee:  data.results[0],
        });
    });
  }
  render(){
    console.log(this.state.employee)
   
    return (
    <div  className="card text-center mx-auto" style ={{ marginTop: '20px', width: '300px'}}>
      
      <DisplayEmployee employee={this.state.employee} />

      <GenerateEmployee selectEmployee={() =>  this.getEmployee()} />
    </div>
  );
  }
}

export default App;
