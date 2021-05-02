import React from 'react';

function test(prop){
	// console.log(`${prop.cheese.get(`itemName`)}`);
	prop.click();
}

class SingleCheseVewComponet extends React.Component {

	render() {
		if(this.props.cheese != false){
			return(
				<div id="SingleCheseVewComponet" onClick={()=>{test(this.props)}}>
					<table>
						<tbody>
							<tr>
								<td>
									Producer
								</td>
								<td>
									{this.props.cheese.get(`producer`)}
								</td>
							</tr>

							<tr>
								<td>
									Chese Name
								</td>
								<td>
									{this.props.cheese.get("itemName")}
								</td>
							</tr>
							<tr>
								<td>
									PLU
								</td>
								<td>
									{this.props.cheese.get("plu")}
								</td>
							</tr>
							<tr>
								<td>
									Cut type
								</td>
								<td>
									{this.props.cheese.get("cutStyle")}
								</td>
							</tr>
							<tr>
								<td>
									Days for Wheel
								</td>
								<td>
									{this.props.cheese.get("whole")}
								</td>
							</tr>
							<tr>
								<td>
									Days for half Wheel	
								</td>
								<td>
									{this.props.cheese.get("halfQtr")}
								</td>
							</tr>
							<tr>
								<td>
									Days for piece	
								</td>
								<td>
									{this.props.cheese.get("cut")}
								</td>
							</tr>
							<tr>
								<td>
									Cheese Family	
								</td>
								<td>
									{this.props.cheese.get("family")}
								</td>
							</tr>
							
						</tbody>
					</table>
				</div>
			)
		}else{
			return(
				<div>

				</div>
			)
		}
	}
}

export default SingleCheseVewComponet;


/*

<tr>
								<td>
									Chese Name
								</td>
								<td>
									{this.props.cheese.get("itemName")}
								</td>
							</tr>
							<tr>
								<td>
									PLU
								</td>
								<td>
									{this.props.cheese.get("plu")}
								</td>
							</tr>
							<tr>
								<td>
									Cut type
								</td>
								<td>
									{this.props.cheese.get("cutStyle")}
								</td>
							</tr>
							<tr>
								<td>
									Days for Wheel
								</td>
								<td>
									{this.props.cheese.get("whole")}
								</td>
							</tr>
							<tr>
								<td>
									Days for half Wheel	
								</td>
								<td>
									{this.props.cheese.get("halfQtr")}
								</td>
							</tr>
							<tr>
								<td>
									Days for pice	
								</td>
								<td>
									{this.props.cheese.get("cut")}
								</td>
							</tr>
							<tr>
								<td>
									Cheese Family	
								</td>
								<td>
									{this.props.cheese.get("family")}
								</td>
							</tr>

*/