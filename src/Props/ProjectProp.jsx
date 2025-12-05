import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProjectProp({ title,description,buybtn, link }) {
  const navigate = useNavigate();
  return (
    <div className='project'>
        <h4>{title}</h4>
        <ul>
            {description.map((point,i) => <li key={i}>{point}</li>)}
        </ul>
        <button onClick={()=>navigate(`/packages${link}`)}>{buybtn}</button>
    </div>
  );
}

export default ProjectProp
