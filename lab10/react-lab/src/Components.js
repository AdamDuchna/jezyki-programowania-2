import React from 'react';
class About extends React.Component {
    state = {
      text: 'Kliknij',
      input: '',
      wprow: '',
      list: [],
      wpis: ''
    }
  
    onClickB = () => {
      this.setState({
        text: 'Kliknięty'
      });
    }
    Subm = () =>{
        this.setState({wprow: this.state.input})
    }
    Change = (event) => {
        this.setState({input: event.target.value});
    }
    ChangeList = (event) => {
        this.setState({wpis: event.target.value});
    }
    SubmList = () => {
        this.setState({list: [...this.state.list,this.state.wpis]})
    }
  
    render() {
        var tekst="To jest about w zmiennej"
      return (
        <div>
            <h1>{tekst}</h1>
          <button onClick={this.onClickB}>
          {this.state.text}
          </button>
        <div>
         <input type="text" value={this.state.input} onChange={this.Change} />
          <button onClick={this.Subm}>Submit</button>
        </div>
      <h1>{this.state.wprow}</h1>
      <div>
         <input type="text" value={this.state.wpis} onChange={this.ChangeList} />
          <button onClick={this.SubmList}>Submit element to list</button>
        </div>
        <h1>{this.state.list}</h1>
    </div>

      );
    }
  }

export default About;


