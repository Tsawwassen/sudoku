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
  				if(flatArray[i] === flatArray[j]) return false
  			}
  		}


  		return true;
  	}

  	handleButton(event){
  		let game = this.state.board

  		for(let i = 0 ; i < game.length ; i++){
  			for(let j = 0 ; j < game[i].length ; j++){
  				if(!this.checkMiniGrib(game[i][j])){
  					console.log("invalid Sudoku");
  					return
  				} else {
  					//console.log("valid Sudoku")
  				}
  			}
  		}
  		//At this point, all the miniboards have been checked and are valid
  		//Next, check all rows and columns 

  		
  		for(let i = 0 ; i < game.length ; i++){
  			for(let j = 0 ; j < game[i].length ; j++){
  				//console.log(game[i][j]);
  				//row.push(game[i][j][0]);
  				for(let r = 0 ; r < game[i][j].length ; r++){
  					console.log(game[i][j][r]);
  				}
  			}
  			//console.log(row);
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