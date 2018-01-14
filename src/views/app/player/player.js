import React, { Component } from 'react';
import style from './style.css';

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
    if (nextProps.isPlaying){
      setTimeout(()=> this.audio.play(), 0);
      this._anim=this.animate();
    } else {
      this.audio.pause();
      cancelAnimationFrame(this._anim);
    }
  }

  togglePlay(){
    this.props.isPlaying ? this.props.pressPause(): this.props.pressPlay();
  }

  timeTravel(event) {
    this.audio.currentTime = event.target.value * this.audio.duration / 10000;
  }

  animate() {
    const { currentTime, duration } = this.audio;
    this.setState({ 
      currentTime,
      duration,
    });
    this._anim=requestAnimationFrame(this.animate.bind(this));
  }

  render() {
    return (
      <div className={this.props.src ? style.container : style.container_disable}>
        <div className={this.props.src ? style.player : style.player_disable}>
          {/* <button className={style.rev}>reverse</button> */}
          <button className={style.play} onClick={this.togglePlay.bind(this)}>
            {this.props.isPlaying ? "pause" : "play"}
          </button>
          <div className={style.player_info}>
            <input type="range" min="0" max="10000" 
              value={this._getPercentPlayed(this.state) || 0}
              onChange={e=>this.timeTravel(e)}/>
            <div className={style.player_clock}>
              {this._formatTime(this.state.currentTime)} / {this._formatTime(this.state.duration)}
            </div>
          </div>
          <audio ref="audio" src={this.props.src}></audio>
          {/* <button className={style.vol}>volume</button> */}
          {/* <button className={style.fwd}>fforward</button>         */}
        </div>
      </div>
    );
  }

  _getPercentPlayed(state) {
    return state.currentTime / state.duration * 10000;
  }

  _formatTime(seconds) {
    if (!seconds) return "00:00:00";
    let hh = new String(Math.floor(seconds / 3600));
    while (hh.length < 2)  hh = "0" + hh;
    let mm = new String(Math.floor(seconds / 60) % 60);
    while (mm.length < 2)  mm = "0" + mm;
    let ss = new String(Math.floor(seconds) % 60 % 60);
    while (ss.length < 2)  ss = "0" + ss;
    return `${hh}:${mm}:${ss}`;
  }
}


export default Player;