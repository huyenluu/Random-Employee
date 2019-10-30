import  React  from  'react';

const  DisplayEmployee = ({ employee }) => {
    return (
        <div > 
            <img  className = "card-img-top" src={employee.picture.large}  alt="picture"  />
            <h3 className="card-title">
                {employee.name.title} {' '}
                <span>{employee.name.last}</span> {' '}
                <span>{employee.name.first}</span>
                
            </h3>
                
                <p className="card-text">E-mail : {employee.email}</p>
                <p className="card-text"> 
                    Location : {employee.location.street.number} {' '} {employee.location.street.name} {' '} {employee.location.city} {' '}  {employee.location.postcode} 
                </p>
        </div>
    );
};

export  default  DisplayEmployee;