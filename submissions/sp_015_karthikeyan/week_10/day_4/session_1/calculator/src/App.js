import React from 'react';
import { Button } from './components/Button';

//#d40640

import { connect } from 'react-redux';
import { add, substract, multiply, divide, remainder, clear } from './redux/actions';

import History from './components/History'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            operandOne: '',
            operandTwo: '',
            operator: '',

        }
    }

    handleKeyStroke = (keyStroke) => {
        console.log(keyStroke);
        if(keyStroke.type === 'operator') {
            console.log('operator is pressed')
            this.setState({operator: keyStroke.key})
        }
        else if(keyStroke.type === 'number') {
            console.log('number is pressed');
            if(this.state.operator) {
                this.setState({ operandTwo: `${this.state.operandTwo}${keyStroke.key}` })
            }
            else this.setState({ operandOne: `${this.state.operandOne}${keyStroke.key}` })
        }
        else if(keyStroke.type === 'action') {
            console.log('action is pressed');
            if(keyStroke.key === '=') {
                if(this.state.operator === '+') {
                    this.props.add(this.state.operandOne, this.state.operandTwo);
                }
                else if(this.state.operator === '-') {
                    this.props.substract(this.state.operandOne, this.state.operandTwo);
                }
                else if(this.state.operator === '*') {
                    this.props.multiply(this.state.operandOne, this.state.operandTwo);
                }
                else if(this.state.operator === '/') {
                    this.props.divide(this.state.operandOne, this.state.operandTwo);
                }
                else if(this.state.operator === '%') {
                    this.props.remainder(this.state.operandOne, this.state.operandTwo);
                }
                this.setState({ operandOne: '', operandTwo: '', operator: '' })
            }
            else if(keyStroke.key === 'C') {
                this.setState({ operandOne: '', operandTwo: '', operator: '' })
                this.props.clear();
            }
        }
    }

    render() {
        console.log(this.state)
        const keysData = [
            {
                key: 'C',
                color: '#d40640',
                type: 'action'
            },
            {
                key: '←',
                color: '#d40640',
                type: 'action'
            },
            {
                key: '%',
                color: '#d40640',
                type: 'operator'
            },
            {
                key: '/',
                color: '#d40640',
                type: 'operator'
            },
            {
                key: 9,
                color: 'black',
                type: 'number'
            },
            {
                key: 8,
                color: 'black',
                type: 'number'
            },
            {
                key: 7,
                color: 'black',
                type: 'number'
            },
            {
                key: '*',
                color: '#d40640',
                type: 'operator'
            },
            {
                key: 6,
                color: 'black',
                type: 'number'
            },
            {
                key: 5,
                color: 'black',
                type: 'number'
            },
            {
                key: 4,
                color: 'black',
                type: 'number'
            },
            {
                key: '-',
                color: '#d40640',
                type: 'operator'
            },
            {
                key: 3,
                color: 'black',
                type: 'number'
            },
            {
                key: 2,
                color: 'black',
                type: 'number'
            },
            {
                key: 1,
                color: 'black',
                type: 'number'
            },
            {
                key: '+',
                color: '#d40640',
                type: 'operator'
            },
            {
                key: 0,
                color: 'black',
                type: 'number'
            },
            {
                key: '.',
                color: 'black',
                type: 'number'
            },
            {
                key: '=',
                color: 'white',
                id: 'equals-key',
                type: 'action'
            }
        ]
        return (
            <>
                <div id='calculator'>
                    <div id='values-grid'>
                        <h1 id='answer-field'>{this.props.answer}</h1>
                        <p id='text-field'>{this.state.operandOne} {this.state.operator} {this.state.operandTwo}</p>
                    </div>
                    <div id='keys-grid'>
                        {keysData.map(ele => <Button data={ele} function={this.handleKeyStroke} key={ele.key} />)}
                    </div>
                </div>
                <History />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        answer: state.answer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (operandOne, operandTwo) => {
            console.log('performing addition');
            console.log(operandOne, operandTwo)
            dispatch(add(operandOne, operandTwo))
        },
        substract: (operandOne, operandTwo) => {
            console.log('performing substracrion');
            dispatch(substract(operandOne, operandTwo))
        },
        multiply: (operandOne, operandTwo) => {
            console.log('performing substracrion');
            dispatch(multiply(operandOne, operandTwo))
        },
        divide: (operandOne, operandTwo) => {
            console.log('performing substracrion');
            dispatch(divide(operandOne, operandTwo))
        },
        remainder: (operandOne, operandTwo) => {
            console.log('performing substracrion');
            dispatch(remainder(operandOne, operandTwo))
        },
        clear: () => {
            dispatch(clear());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);