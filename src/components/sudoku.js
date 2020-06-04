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
    	this.checkForDuplicates = this.checkForDuplicates.bind(this);
  	}

  	componentDidMount(){
 
  	}

  	//Check a 2D array to see if there is a duplicate in a row
  	checkForDuplicates(table){
  		for(let row = 0; row < table.length ; row++){
  			for(let i = 0 ; i < table[row].length ; i++){
  				for(let j = i + 1 ; j < table[row].length ; j++){
  					if(table[row][i] === table[row][j]) return false;
  				}
  			}
  		}

  		return  true;
  	}

  	handleButton(event){
  		let game = this.state.board

		//Check mini grids
  		let miniGrid = []
  		let miniGridIndex = 0;

  		for(let i = 0 ; i < game.length ; i++){
  			for(let j = 0 ; j < game[i].length ; j++){
  				miniGrid[miniGridIndex] = game[i][j].toString().split(',');
  				miniGridIndex++;
  			}
  		}

  		if(!this.checkForDuplicates(miniGrid)){
  			console.log("invalid sudoku mini grid");
  			return;
  		} else {
  			console.log("valid mini grid");
  		}
  

  		//Check Rows
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

  		//Get all the rows from game and push them onto rows
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

  		if(!this.checkForDuplicates(rows)){
  			console.log("invalid sudoku row");
  			return;
  		} else {
  			console.log("valid rows");
  		}

  		//Check Columns
  		let cols = [];
  		let colIndex = 0;
  		for(let j = 0 ; j < game.length ; j++){
  			for(let c = 0 ; c < game.length ; c++){
  				cols[colIndex] = [];
  				for(let i = 0 ; i < game.length ; i++){
  					for(let r = 0 ; r < game.length ; r++){
  						cols[colIndex].push(game[i][j][r][c]);
  					}
  				}
  				colIndex++;
  			}
  		}
  		 if(!this.checkForDuplicates(cols)){
  			console.log("invalid sudoku columns");
  			return;
  		} else {
  			console.log("valid columns");
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