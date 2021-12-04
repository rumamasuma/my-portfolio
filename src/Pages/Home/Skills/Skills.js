import React from 'react';


const Skills = () => {
    return (
        <div id='skills'  className='m-5 p-5 border rounded contact fst-italic'>
            <h2 >TECHNICAL SKILLS</h2>
            <div className="row ">
            <div className="col-sm-12 col-md-4">
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">Front-End Technologies </h5>
        <hr />
     <p>Languages - HTML5 |  CSS3 | JavaScript |  ES6 | React  </p>
     <p>Framework - Bootstrap5 | Tailwind CSS | Material UI | React Js | React Bootstrap </p>
          
      </div>
    </div>
  </div>

  <div className="col-sm-12 col-md-4">
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">Back-End Technologies </h5>
        <hr />
      <p> Node Js | Express | MongoDB  | REST API</p>
        
      </div>
    </div>
  </div>
  <div className="col-sm-12 col-md-4">
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">Tools</h5>  
        <hr />
        <p> VS Code | Chrome Dev Tool | Github </p>
        <h6>Hosting - Firebase | Netlify | Heroku</h6>     
      </div>
    </div>
  </div>
</div>
   </div>     
    );
};

export default Skills;
