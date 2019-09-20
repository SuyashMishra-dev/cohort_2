import React from 'react'

class Button extends React.Component {
    constructor(label, color){
        super(label, color);

        this.state = {
            label : ["JOIN US", "SETTINGS", "LOGIN", "CONTACT US", "SEARCH", "HELP", "HOME", "DOWNLOAD"],
            color : ["blue", "aqua", "yellow","red", "green", "violet", "pink", "brown"]
        }
    }
    render() {
        return (
            <div>
                <div>
                    <button type="button" className="button1" style={{background:'blue', borderRadius : '50%', marginRight:'17px'}}>{this.state.label[0]}</button>
                    <button type="button" className="button2" style={{background:'aqua', borderRadius : '50%', marginRight:'3px'}}>{this.state.label[1]}</button>
                </div>
                <div>
                    <button type="button" className="button3" style={{background:'yellow', borderRadius : '50%', marginRight:'25px'}}>{this.state.label[2]}</button>
                    <button type="button" className="button4" style={{background:'red', borderRadius : '50%', marginRight:'3px'}}>{this.state.label[3]}</button>
                </div>
                <div>
                    <button type="button" className="button5" style={{background:'green', borderRadius : '50%', marginRight:'15px'}}>{this.state.label[4]}</button>
                    <button type="button" className="button6" style={{background:'violet', borderRadius : '50%', marginRight:'3px'}}>{this.state.label[5]}</button>
                </div>
                <div>
                    <button type="button" className="button7" style={{background:'pink', borderRadius : '50%', marginRight:'25px'}}>{this.state.label[6]}</button>
                    <button type="button" className="button8" style={{background:'brown', borderRadius : '50%', marginRight:'3px'}}>{this.state.label[7]}</button>
                </div>
            </div>
            
        );
    }
}

export default Button;