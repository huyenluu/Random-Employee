import  React  from  'react';

const  GenerateEmployee = ({ selectEmployee }) => {
    return (
        <div style ={{ margin: "20px"}}>
            <button  className="btn btn-primary text-center"  onClick={selectEmployee}>Get another employee</button>
        </div>
    );
};

export  default  GenerateEmployee;

