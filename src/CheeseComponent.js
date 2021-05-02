import React from 'react';

function test(prop){
	// console.log(`${prop.cheese.get(`itemName`)}`);
	prop.click(prop.cheese);
}

class CheeseComponent extends React.Component {

	render() {

		return(
			<tr>
				<td 
					onClick={()=>{test(this.props)}}
				>
					-{this.props.cheese.get("producer")} <br/>
					-{this.props.cheese.get("itemName")} <br/>
					{this.props.cheese.get("plu")}
				</td>
			</tr>
		)
	}
}

export default CheeseComponent;