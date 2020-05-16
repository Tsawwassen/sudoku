import React, { Component } from 'react';

class Sudoku extends Component {

  	constructor(props){
	    super(props);
	    this.state = {

	    	/* //Template for basic valid sudoku puzzle
	    	board: [
	    			[
	    				[[1, 2, 3], [4, 5, 6],[7, 8, 9]], [[4, 5, 6], [7, 8, 9],[1, 2, 3]], [[7, 8, 9], [1, 2, 3],[4, 5, 6]]
	    		   	],
	    		   	[
	    				[[9, 1, 2], [3, 4, 5],[6, 7, 8]], [[3, 4, 5], [6, 7, 8],[9, 1, 2]], [[6, 7, 8], [9, 1, 2],[3, 4, 5]]
	    		   	],
	    		   	[
	    				[[8, 9, 1], [2, 3, 4],[5, 6, 7]], [[2, 3, 4], [5, 6, 7],[8, 9, 1]], [[5, 6, 7], [8, 9, 1],[2, 3, 4]]
	    		   	]
	    		   ]
	    	*/
	    	board: [
	    			[
	    				[[1, 2, 3], [4, 5, 6],[7, 8, 9]], [[4, 5, 6], [7, 8, 9],[1, 2, 3]], [[7, 8, 9], [1, 2, 3],[4, 5, 6]]
	    		   	],
	    		   	[
	    				[[9, 1, 2], [3, 4, 5],[6, 7, 8]], [[3, 4, 5], [6, 7, 8],[9, 1, 2]], [[6, 7, 8], [9, 1, 2],[3, 4, 5]]
	    		   	],
	    		   	[
	    				[[8, 9, 1], [2, 3, 4],[5, 6, 7]], [[2, 3, 4], [5, 6, 7],[8, 9, 1]], [[5, 6, 7], [8, 9, 1],[2, 3, 4]]
	    		   	]
	    		   ]
	    	

    	};

    	this.handleButton = this.handleButton.bind(this);
    	this.checkMiniGrib = this.checkMiniGrib.bind(this);
    	this.checkRows = this.checkRows.bind(this);
  	}

  	componentDidMount(){
 
  	}

  	checkMiniGrib(miniBoard){
  		//console.log("inside checkMiniGrib");

  		/************ Version 1 ************
  		* The below code does work, but it is checking two cells that have already been checked
  		*
  		************************************/

  		/*for(let r = 0; r < miniBoard.length ; r++){
  			for(let c = 0 ; c < miniBoard[r].length ; c++){
  				//console.log(`row ${r} cell ${c} value ${miniBoard[r][c]}`);
  				for(let i = r ; i < miniBoard.length ; i++){
  					for(let j = 0 ; j < miniBoard[r].length ; j++){
  						console.log(`checking ${miniBoard[r][c]} with ${miniBoard[i][j]}`); 
  						if((r === i) && (c === j)){
  							console.log("dont need to check this cell");
  						} else if (miniBoard[r][c] === miniBoard[i][j]){
  							console.log("duplicate cell values"); 
  							return false;
  						} else {
  							console.log("keep checking");
  						}
  					}
  				}

  			}
  		} */

  		/************ Version 2 ************
  		* Given a 2D array, flatten it, and then check for duplicates
  		*
  		************************************/

  		let flatArray = miniBoard.toString().split(',');

  		//console.log(flatArray);
  		for(let i = 0 ; i < flatArray.length ; i++){
  			for(let j = i + 1; j < flatArray.length ; j++){
  				if(flatArray[i] === flatArray[j]) return false;
  			}
  		}


  		return true;
  	}

  	checkRows(rows){
  		for(let row = 0; row < rows.length ; row++){
  			for(let i = 0 ; i < rows[row].length ; i++){
  				for(let j = i + 1 ; j < rows[row].length ; j++){
  					
  					if(rows[row][i] === rows[row][j]) return false;
  					
  				}
  			}
  		}

  		return  true;

  	}

  	handleButton(event){
  		let game = this.state.board

  		for(let i = 0 ; i < game.length ; i++){
  			for(let j = 0 ; j < game[i].length ; j++){
  				if(!this.checkMiniGrib(game[i][j])){
  					console.log("invalid Sudoku mini grid");
  					return
  				} else {
  					console.log("valid Sudoku mini grid")
  				}
  			}
  		}
  		//At this point, all the miniboards have been checked and are valid
  		//Next, check all rows and columns 
  

  		

  		/**
  		*
  		* Dev Note, In my head, i would have thought that the below loops would stop at correct length that it is tracking
  		* But in the r loop, if i tell it to stop at game[i][j].length i get an undefined error, but I can see the length outsidse of the loop
  		*
  		*/
  		/*console.log(game.length);
  		console.log(game[i].length);
  		console.log(game[i][j].length);
  		console.log(game[i][j][r].length);*/

  		let rows = [];
  		let rowIndex = 0;

  		//Get all the roas from game and push them onto rows
  		for(let i = 0 ; i < game.length; i++){
  			for(let r = 0 ; r < game[i].length; r++){
  				rows[rowIndex] = [];
  				for(let j = 0 ; j < game[i].length ; j++){
  					for(let c = 0; c < game[i].length; c++){
  						rows[rowIndex].push(game[i][j][r][c]);
  					}
  				}
  				rowIndex++;
  			}
  		}

  		if(!this.checkRows(rows)){
  			console.log("invalid sudoku row");
  			return;
  		} else {
  			console.log("valid rows");
  		}

  	}


  	
  render () {
  	let board = this.state.board

    return (
    	<div>
    	<table>
    	<tbody>
    		{board.map(bigRow => ( 
    			<tr>
    				{bigRow.map(bigCell => (
    					<td>
				    		<table>
				    			<tbody>
						    		{bigCell.map(row => (
						    			<tr>
						    				{row.map(cell => (
						    					<td>{cell}</td>
						    					))}
						    			</tr>
						    		))}
				    			</tbody>
				    		</table>
			    		</td>
		    		))}
		    	</tr>
    		))}
    	</tbody>
    	</table>

    		<button onClick={this.handleButton}>Check Puzzle</button>
	    </div>
    );
  }
}

export default Sudoku;