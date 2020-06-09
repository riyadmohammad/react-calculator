import React, { Component } from "react";
import './App.css';
import Button from './componant/Button';
import Input from './componant/Input';
import ClearButton from './componant/ClearButton';
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }
addToinput=val=>{

  this.setState({ input: this.state.input +val});

}

handleEqual = () => {
  this.setState({ input: math.evaluate(this.state.input) });
};


  render() {
  return (
    <div className="app">
      <div className="clac-wrapper">

        <div className="input">

        <Input input={this.state.input} />


        </div>
             
             <div className="row">

               <Button handleClick={this.addToinput}> 7 </Button>
               <Button handleClick={this.addToinput}> 8 </Button>
               <Button handleClick={this.addToinput}> 9 </Button>
               <Button handleClick={this.addToinput}> / </Button>
             </div>

             <div className="row">

                <Button handleClick={this.addToinput}> 4 </Button>
                <Button handleClick={this.addToinput}> 5 </Button>
                <Button handleClick={this.addToinput}> 5 </Button>
                <Button handleClick={this.addToinput}> * </Button>
             </div>

             <div className="row">

                    <Button handleClick={this.addToinput}> 1 </Button>
                    <Button handleClick={this.addToinput}> 2 </Button>
                    <Button handleClick={this.addToinput}> 2 </Button>
                    <Button handleClick={this.addToinput}> + </Button>
              </div>

              <div className="row">

                <Button handleClick={this.addToinput}> . </Button>
                <Button handleClick={this.addToinput}> 0 </Button>
                <Button handleClick={() => this.handleEqual()}> = </Button>
                <Button handleClick={this.addToinput}>-</Button>
          </div>

        <div className="row">

        <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearButton>
        </div>





      </div>

    </div>
  );
}
}

export default App;
