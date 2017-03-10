import React from 'react';

class App extends React.Component {
   render() {
   		var result = 74;
   		var grade;

		if(result>70){
  			grade = 'A';
  		} else {
  			grade = 'E';
  		}

  		var myStyle = {
  			fontSize : 100,
  			color : '#ff0000'
  		};

      	return (
        	<div>
            	<h1 style = {myStyle}>Hello World!!!</h1>
				{//<h2>Hello Love</h2>...}
				<p>Hello kity {1+6}</p>
				<center>
	         		Grade Nilai : {grade}
	         	</center>
         	</div>
      	);
   }
}

export default App;

