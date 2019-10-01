import React from "react"
import "./App.css"

 export default class Profile extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			name: "Ricky Martin",
			location: "NEW YORK",
			description: "User interferace designer and front-end developer",
			skills: ["UI/UX", "front-End-Development", "HTML", "CSS", "Javascript", "React", "Node"]
		}
	}

	render(){
		let a=this.state.skills.map(el=>
			<button>{el}</button> )
			
		return(

		     <div className="main_card">

             <div className="card">

             <img className="img1"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgAn-b6SQjErZ714g_S1gFjRehhk9Ie0rBj_Bz6bsEYQQuKne"></img>
             <p>{this.state.name}</p>
             <p>{this.state.location}</p>
             <p>{this.state.description}</p>
             <p>Skills</p>
             <div className="skills">{a}</div>
             </div>
             </div>
			)
	}
}


