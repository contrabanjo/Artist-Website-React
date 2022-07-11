import React, {Component} from "react";
import {hot} from "react-hot-loader";


import Gallery from "./Components/Gallery.jsx"
import Contact from "./Components/Contact.jsx"


class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			page: "gallery",
			children: []
		}
	}

	componentDidMount(){
		console.log("component did mount");
		fetch("http://localhost:3001/allImages").then((res)=> res.json()).then(data => this.setState({children: data.images}));
	}

	componentWillUnmount(){
		console.log("component will unmount")
	}

	renderSwitch(page){
		switch(page){
			case 'gallery':
				return <Gallery children={this.state.children}/>
			case 'contact':
				return <Contact />

		}

	}

	clickHandler(e){
		console.log(e.target.name, "has been clicked")
		this.setState({page: e.target.name})

	}

	render(){
		return (
		 <div className="App">
		    <div id="header">
		    	<h1>D<span>A</span>N GRIMSH<span>A</span>W</h1>
		    	<div id="buttons">
		    		<button onClick={(e)=> {this.clickHandler(e)}} name="gallery">GALLERY</button>
		    		<button onClick={(e)=> {this.clickHandler(e)}} name="contact">CONTACT</button>
		    	</div>
		    </div>
		 	{this.renderSwitch(this.state.page)}
		 </div>
		);
	}
}

export default hot(module)(App);