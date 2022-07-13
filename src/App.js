import React, {Component} from "react";



import Gallery from "./Components/Gallery.jsx"
import Contact from "./Components/Contact.jsx"
import Manage from "./Components/Manage.jsx"

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			page: "manage",
			children: []
		}
	}

	componentDidMount(){
		fetch("/allMedia").then((res)=> res.json()).then(data => this.setState({children: data.images}));
	}

	renderSwitch(page){
		switch(page){
			case 'gallery':
				return <Gallery children={this.state.children}/>
			case 'contact':
				return <Contact />
			case 'manage':
				return <Manage children={this.state.children}/>

		}

	}

	clickHandler(e){
		this.setState({page: e.target.title})
	}

	isSelected(page){
		return this.state.page === page ? 'selected' : null;
	}

	render(){
		return (
		 <div className="App">
		    <div id="header">
		    	<h1>D<span onClick={(e)=>{this.clickHandler(e)}} title="manage">A</span>N GRIMSH<span>A</span>W</h1>
		    	<div id="buttons">
		    		<button className={this.isSelected("gallery")} onClick={(e)=> {this.clickHandler(e)}} title="gallery">GALLERY</button>
		    		<button className={this.isSelected("contact")} onClick={(e)=> {this.clickHandler(e)}} title="contact">CONTACT</button>
		    	</div>
		    </div>
		 	{this.renderSwitch(this.state.page)}
		 </div>
		);
	}
}

export default App;