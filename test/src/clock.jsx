import React, {Component} from 'react';
import './App.css'

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state={
      Days: 0,
      Hours:0,
      Minutes:0,
      Seconds:0
    }
  }

  getTime(deadline){
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000)%60);
    const minutes = Math.floor((time/1000/60)%60);
    const hours = Math.floor(time/(1000*60*60)%24);
    const days = Math.floor(time/(1000*60*60*24));

    this.setState({Days: days, Hours: hours, Minutes: minutes, Seconds: seconds});
  }

  componentDidMount(){
    setInterval(() => this.getTime(this.props.deadline), 1000);
  }

  componentWillMount(){
    this.getTime(this.props.deadline);
  }

  leading0(num){
    return num < 10 ? '0'+num : num;
  }

  render(){
    return(
      <div>
        <div className="clock-d">{this.leading0(this.state.Days)} Days</div>
        <div className="clock-h">{this.leading0(this.state.Hours)} Hours</div>
        <div className="clock-m">{this.leading0(this.state.Minutes)} Minutes</div>
        <div className="clock-s">{this.leading0(this.state.Seconds)} Seconds</div>
      </div>
    );
  }
}
export default Clock;
