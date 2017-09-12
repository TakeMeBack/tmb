import React, { Component } from 'react';
import './style.css';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentPlayed: 0,
    }
  }
  componentDidMount() {
    this.audio = this.refs.audio;
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isPlaying !== this.props.isPlaying) {
      if (nextProps.isPlaying){
        this.audio.play();
        this._anim=this.animate();
      } else {
        this.audio.pause();
        cancelAnimationFrame(this._anim);
      }
    }
  }
  togglePlay(){
    this.props.isPlaying ? this.props.pressPause(): this.props.pressPlay();
  }
  timeTravel(event) {
    this.audio.currentTime = event.target.value * this.audio.duration / 100;
  }

  animate() {
    const { currentTime, duration } = this.audio;
    this.setState({ percentPlayed: currentTime / duration * 100});
    this._anim=requestAnimationFrame(this.animate.bind(this));
  }

  render() {
    return (
      <div className="player">
        <button className="reverse">reverse</button>
        <button className="play" onClick={this.togglePlay.bind(this)}>
          {this.props.isPlaying ? "pause" : "play"}
        </button>
        <div className="info">
          runtime
          <input type="range" min="0" max="100" 
            value={this.state.percentPlayed}
            onChange={e=>this.timeTravel(e)}/>
        </div>
        <audio ref="audio" src={this.props.src}></audio>
        <button className="">volume</button>
        <button className="fforward">fforward</button>        
      </div>
    );
  }
}


export default Player;