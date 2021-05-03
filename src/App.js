import './App.css';
import Parse from 'parse';
import { useState } from 'react'
import * as Env from "./environments";
var CheeseComponent = require(`./CheeseComponent`).default;
var SingleCheseVewComponet = require(`./SingleCheseVewComponet`).default;


function App() {

	console.log(`reload`);

	Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
	Parse.serverURL = Env.SERVER_URL;
	const CheeseClass = Parse.Object.extend('cheese');

	const [cheseList, setcheseList] = useState([])
	const [searchValue, setsearchValue] = useState(`search`);
	const [selectedCheese, setselectedCheese] = useState(false);

	let selectedCheeseTest = selectedCheese;
	let numberOfCheesesInDb = 0;

	// console.log(`/*----------  cheseList  ----------*/`)
	// console.log(cheseList);

	if(cheseList.length === 0 ){
		const query = new Parse.Query(CheeseClass);
		query.count().then(
			(results) => {
				// console.log(`ran numberOfCheesesInDb`);
				numberOfCheesesInDb = results;
				getCheseFromDb(0, [])
			}, (error) => {
				alert('Error while fetching ParseObjects', error);
			}
		)
	}

	function getCheseFromDb(skip, arr){

		// console.log(`getCheseFromDb`);
		// console.log(`skip at beginning ${skip}`);

		const query = new Parse.Query(CheeseClass);
		if(skip > 0){
			query.skip(skip);
		}

		query.find().then(
			(results) => {

				// console.log(`results.length : ${results.length}`);

				results.map((i, index)=>{
					arr.push(i);

					if(arr.length < numberOfCheesesInDb-1 && index === results.length-1){
						// console.log(`/*----------  arr  ----------*/`);
						// console.log(arr)
						// console.log(`/*----------  arr.length  ----------*/`);
						// console.log(arr.length)
						// console.log(`/*----------  skip  ----------*/`);
						// console.log(skip)
						// console.log(`/*----------  numberOfCheesesInDb  ----------*/`);
						// console.log(numberOfCheesesInDb)

						getCheseFromDb(arr.length, arr);
					}else{
						if(arr.length === numberOfCheesesInDb-1){

						// console.log(`got the data`)
						setcheseList(arr);
						}
					}
				})
			}, (error) => {
				alert('Error while fetching ParseObjects', error);
			}
		)

	}

	function textChange(e){
		// console.log(e.target.value);
		if(e.target.value != searchValue){
			startSearch(e.target.value);
		}
	}

	let delayTimer;

	function startSearch(text) {
		clearTimeout(delayTimer);
		delayTimer = setTimeout(function() {
			doSearch(text)
		}, 1000);
	}

	function doSearch(text){
		setsearchValue(text);
	}

	function clearInput(){
		document.getElementById('userinput').value = ``;
	}

	function searchValueBlank(){
		if(document.getElementById('userinput').value === ``){
			document.getElementById('userinput').value = `search`;
			setsearchValue(`search`);
		}
	}

	function togleSingleCheseVew(i){
		// console.log(`HIT togleSingleCheseVew`);
		setselectedCheese(i)
	}

	function togleSingleCheseVewClear(){
		setselectedCheese(false);
	}

	return (
		<div>
			<div id="userinputRapper">
				<input type="text" id="userinput" defaultValue={searchValue} onChange={textChange} onBlur={searchValueBlank} onClick={clearInput}></input>
			</div>
			<table>
				<tbody>
					{cheseList.map((i, index)=>{
						if(searchValue === `` | searchValue === `search`){													//THIS IS A HARD CODDED THING YOU MAY NEED TO CHANGE THIS LATTER
							return(
								<CheeseComponent key={index} cheese={i} click={togleSingleCheseVew}/>
							);
						}else{
							if(i.get("producer").toLowerCase().includes(searchValue.toLowerCase()) | i.get("itemName").toLowerCase().includes(searchValue.toLowerCase())){
								return(
									<CheeseComponent key={index} cheese={i} click={togleSingleCheseVew}/>
								);
							}
						}
					})}
				</tbody>
			</table>
			<SingleCheseVewComponet cheese={selectedCheeseTest} click={()=>{togleSingleCheseVewClear()}}/>
		</div>
	);
}

export default App;
