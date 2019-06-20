import React from 'react';
import "./DrumPad.css"
const inactiveStyle = {
    margin: '2px',
    backgroundColor: '#343434',
    color: '#4dc75b',
    fontSize: '25px',
    borderRadius: '5px',
    border: '2px solid grey',
    boxShadow: '2px 2px 2px black',
    fontFamily: '8BITWONDERNominal'
}
const activeStyle = {
    backgroundColor: '#4dc75b',
    color: 'rgb(82, 82, 82)',
    transform: 'scale(1.1)',
    borderRadius: '5px',
    border: '2px solid grey',
    fontSize: '25px',
    fontFamily: '8BITWONDERNominal'
}
class DrumPad extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            active: inactiveStyle
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.playSound = this.playSound.bind(this);
        this.activatePad = this.activatePad.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    activatePad(){
        this.state.active.color === '#4dc75b'?
        this.setState({
            active: activeStyle
        }):
            this.setState({
                active: inactiveStyle
            })


    }
    handleKeyPress(event){
        if(event.keyCode===this.props.keycode){
            this.playSound();
        }
    }
    playSound(){
        if(this.props.power==true){
       let sound = document.getElementById(this.props.text);
       this.props.keydown(this.props.display);
       sound.currentTime = 0;
       sound.play();
        this.activatePad();
        setTimeout(() => this.activatePad(), 150);
    }
    }
   render() {
       return (
           <button className="drum-pad"  style={this.state.active} id={this.props.id} onClick={this.playSound}>{this.props.text}
               <audio id={this.props.text} className="clip" src={this.props.source} preload="auto" type="audio/mpeg">
               </audio>
           </button>
       );
   }
}
export default DrumPad;