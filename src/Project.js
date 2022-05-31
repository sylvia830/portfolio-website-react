import React from 'react';

function Project(props) {
  return (
    <div className='card'>
		<div className='card-body'>
			<img className='card-img' height='150px' width='240px'
			src={props.image} alt ='img'/>
			<h2 className='card-title'>{props.title}</h2>
			<p className='card-description'>{props.description}</p>
		</div>
		<a className='card-btn' href={props.link} target="_blank" rel="noreferrer">
		<button className='card-button'>View Project</button>
        </a>
		
	</div>
  );
}

export default Project;