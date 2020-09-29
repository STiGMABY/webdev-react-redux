import React from "react";
import PropTypes from 'prop-types'

const Counter = ({counter, func, number, string}) => {
    console.log(counter, func, number, string)
    return <h1>{`Counter value is: ${counter}`}</h1>
}

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    func: PropTypes.func,
    number: PropTypes.number,
    string: PropTypes.string
}

Counter.defaultProps = {
    func: () => {},
    number: 5,
    string: 'default string'
}

export class Lesson_04 extends React.Component {
    state = {
        counter: 0
    }

    onHandleClick = () => {
        this.setState( ({counter}) => ({ //деструктуризация
            counter: counter +1
        }))
    }

    render() {
        const {counter} = this.state
        return (
            <div>
                <Counter
                    counter={counter}/>
                <div>{counter}</div>
                <button onClick={ this.onHandleClick }>+1</button>
            </div>
        )
    }
}