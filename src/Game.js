import React from 'react';

export default class Game extends React.Component {
    constructor(props){
      super(props);
      this.state = {};
      this.makeNewQuestion();
    }
	
	makeNewQuestion = () => {
      this.setState({
      	value1: Math.floor(Math.random() * 100),
      	value2: Math.floor(Math.random() * 100),
      	value3: Math.floor(Math.random() * 100)
      });
      this.setState((prevState) => ({
      	proposedAnswer: Math.floor(Math.random() * 3) + prevState.value1 + prevState.value2 + prevState.value3
      }));
    }

	checkAnswer = (event) => {
      const answer = event.target.name;
      this.props.updateScore(answer);
      this.makeNewQuestion();
    };

     render(){
     	return(
       		<div className="game">
          		<h2>Mental Math</h2>
       			<div className="equation">
            		<p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
     			</div>
                <button onClick={this.checkAnswer} name='true'>True</button>
                <button onClick={this.checkAnswer} name='false'>False</button>
        	</div>
       		
       )
     }
}