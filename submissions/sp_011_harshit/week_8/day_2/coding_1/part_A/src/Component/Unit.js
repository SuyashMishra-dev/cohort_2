import React from 'react'
import { breakStatement } from '@babel/types';
var flag = false;
class Unit extends React.Component{
    constructor(props){
    super(props)
    this.state={
            Volume:['select','litre','milliliter','cubic'],
            Speed:['Select','km/hr','miles/hr','mtr/s'],
            Temparature:['select','K','C','F'],
            Choice1:'',
            Choice2:'',
            Choice3:'',
            value:'',
            ans:'',
            final_output:''

    }
}
handleChoice = (e) =>
{
    this.setState({
        Choice1:e.target.value
    })  
}

handleChoice2 = (e) =>
{
    // console.log(this.state.Choice1)
    // console.log(this.state.Choice3)
    this.setState ({
        Choice2:e.target.value
    })

            
   console.log(this.state.Choice2)
    
}


//ans Choice
    handleChoice3 = (e) => {
        this.setState({
            Choice3: e.target.value
        })
        console.log(this.state.Choice3)
    }
    display = () =>
    {
        
            let a=this.state.Choice2
            let b=this.state.Choice3
          
            switch (a)
            {
                case 'C':
                    if(b==='F')
                    {
                        this.state.final_output = (Number(this.state.value)*9/5)+32;
                        console.log(this.state.final_output)
                    }
                    if(b==='K')
                    {
                        this.state.final_output = Number(this.state.value)+273.15;
                        console.log(this.state.final_output)
                         flag=true
                    }
                    break;

                case 'F':
                    if(b==='C')
                    {
                        this.state.final_output = Number(this.state.value -32)*5/9;
                    }
                    if(b==='K')
                    {
                        this.state.final_output = Number(this.state.value-32)*5/9+273.15;
                    }
                    break;

                case 'K':
                    if(b==='C')
                    {
                        this.state.final_output = Number(this.state.value)-272.15;
                    }
                    if(b==='F')
                    {
                        this.state.final_output = Number(this.state.value-273.5)*9/5+32;
                        console.log('hi'+''+this.state.final_output)
                    }
                    break;

                case 'km/hr':
                        if(b==='miles/hr')
                        {
                            this.state.final_output = Number(this.state.value)/1.609;
                            console.log(this.state.final_output)
                        }
                        if(b==='mtr/s')
                        {
                            this.state.final_output = Number(this.state.value)*1000;
                            console.log(this.state.final_output)
                        }
                        break;

                    case 'miles/hr':
                        if(b==='km/hr')
                        {
                            this.state.final_output = Number(this.state.value)*1.609;
                            console.log(this.state.final_output)
                        }
                        if(b==='mtr/s')
                        {
                            this.state.final_output = Number(this.state.value)*1609.3;
                            console.log(this.state.final_output)
                        }
                        break;

                    case 'mtr/s':
                        if(b==='km/hr')
                        {
                            this.state.final_output = Number(this.state.value)
                        }
                        if(b==='miles/hr')
                        {
                            this.state.final_output = Number(this.state.value)/1609.344
                            console.log(this.state.final_output)
                        }
                        break;

                    case 'litre':
                        if(b==='milliliter')
                        {
                            this.state.final_output = Number(this.state.value)*1000;
                            console.log(this.state.final_output)
                        }
                        if(b==='cubic')
                        {
                            this.state.final_output  =Number(this.state.value)/28.317;
                            console.log(this.state.final_output)
                        }
                        break;

                        case 'milliliter':
                            if(b==='liter')
                            {
                                this.state.final_output = Number(this.state.value)/1000;
                                console.log(this.state.final_output)
                            }
                            if(b==='cubic')
                            {
                                this.state.final_output = Number(this.state.value)/28316.8;
                                console.log(this.state.final_output)
                            }
                            break;
            }
            this.setState({
                final_output:this.state.final_output
            })
        
    }


handleName = (e) =>
{
    this.setState({
        value:e.target.value
    })
    console.log(this.state.value)
}
render(){
    //Rendering the select options in Sub select list
        let ans;
        var flag=false;
        var final_output ;
    if(this.state.Choice1=='Volume')
    {
     ans= this.state.Volume.map(a=>{
        return    <option value={a}>{a}</option>
     })
    }

     if(this.state.Choice1=='Speed')
     {
     ans = this.state.Speed.map(b=>{
         return <option value={b}>{b}</option>
     })
    }

    if(this.state.Choice1=='Temparature')
    {
     ans = this.state.Temparature.map(c=>{
         return <option value={c}>{c}</option>
     })
    }

  

    return(
        <div className="container">
            <div className="offset-3 row mt-4">
                <select className="bg-secondary text-white" onChange={(e) => this.handleChoice(e)}>
                    <option>Select unit</option>
                    <option value="Temparature">Temparature</option>
                    <option value="Speed">Speed</option>
                    <option value="Volume">Volume</option>
                </select>
            </div> 
            <div className = "row offset-1">
                <div className = "col-xl-3">
                        <input type = "text" onChange={(e)=>this.handleName(e)} value={this.state.value}></input>
                       {/* <select>
                          
                       </select> */}
                        <select onChange={(e)=>this.handleChoice2(e)}>{ans}</select>      
                </div>
                <div className="col-xl-1">
                    <h1>{"="}</h1>
                    <button onClick={()=>this.display()}>display</button>
                </div>

                <div className = "col-xl-3 ml-4">
                <input value={this.state.final_output}></input>    
                       <select onChange={(e)=>this.handleChoice3(e)}>
                           {ans}
                       </select>
                        
                </div>
                <div className="col">
                        
                        <h3></h3>
                       
                        {/* <h3>{this.state.value}</h3> */}
                </div>
                
            </div>
        </div>
    )
}
}
export default Unit;