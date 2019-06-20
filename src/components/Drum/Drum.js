import * as React from "react";
import './Drum.css'
import DrumPad from '../DrumPad/DrumPad'
import { Checkbox } from 'semantic-ui-react';

const DRUM_SET_ONE = [
    {id: "pad-one", buttonText: "Q", keyCode: 81, sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", display: "Heater-1"},
    {id: "pad-two", buttonText: "W", keyCode: 87, sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", display: "Heater-2"},
    {id: "pad-three", buttonText: "E", keyCode: 69, sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", display: "Heater-3"},
    {id: "pad-four", buttonText: "A", keyCode: 65, sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", display: "Heater-4"},
    {id: "pad-five", buttonText: "S", keyCode: 83, sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", display: "Heater-6"},
    {id: "pad-six", buttonText: "D", keyCode: 68, sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", display: "Kick-n-Hat"},
    {id: "pad-seven", buttonText: "Z", keyCode: 90, sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", display: "Disc-Oh"},
    {id: "pad-eight", buttonText: "X", keyCode: 88, sound: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3", display: "Give-us-a-light"},
    {id: "pad-nine", buttonText: "C", keyCode: 67, sound: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3 ", display: "Dry-Ohh"}
];
class Drum extends React.Component{
     constructor(props){
         super(props);
         this.state = {
             displayText : 'Power is off',
             power: false
         }
         this.keyDownUpdate = this.keyDownUpdate.bind(this);
         this.powerChange = this.powerChange.bind(this);
     }
     keyDownUpdate(display){
             this.setState({
                 displayText: display});
         }
     powerChange(){
         this.state.displayText == "Power is off"?
         this.setState({
             power : !this.state.power,
             displayText: "Power is on"
         }):this.setState({
                 power : !this.state.power,
                 displayText: "Power is off"
             })

     }
     render(){
         let pads;
          pads = DRUM_SET_ONE.map((drumObj, i, padBankArr) => {
              return (<DrumPad id={padBankArr[i].id} text={padBankArr[i].buttonText} keycode={padBankArr[i].keyCode} source={padBankArr[i].sound} display = {padBankArr[i].display} keydown = {this.keyDownUpdate} power={this.state.power}/>)});
         return(
             <div id="drum-machine">
                 <div>
                 <div id="display">{this.state.displayText}</div>
             <div id="pad">
                 {pads}
             </div>
                 </div>
             <div id = "controls">
                <div style={{display:"flex", alignItems: "center", flexDirection :"column"}}>
                    <i className="fas fa-drum" style={{color:"#4dc75b", fontSize : "70px", marginBotttom : "10px"}}></i>
                    <div style={{color:"#4dc75b", fontSize : "20px"}}><strong>Drum machine</strong></div>
                </div>
                 <div style={{display:"flex", alignItems: "center", flexDirection :"column"}}>
                     <div style={{color:"#4dc75b",  marginBottom: "10px", fontSize : "20px"}} >Power</div>
                     <Checkbox slider id="power"  onChange={this.powerChange}/>
                 </div>
             </div>
             </div>
         )
     }
}
export default Drum;