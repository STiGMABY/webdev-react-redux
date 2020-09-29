import React from "react";

export class Lesson_03 extends React.Component {
    state = {
        counter: 0
    }
    // onHandleClick = () => {
    //     this.setState( prevState => ({
    //         counter: prevState.counter +1
    //     }))
    // }

    onHandleClick = () => {
        this.setState( ({counter}) => ({ //деструктуризация
            counter: counter +1
        }))
    }

    render() {
        const {counter} = this.state
        return (
            <div>
                <div>{counter}</div>
                <button onClick={ this.onHandleClick }>+1</button>
            </div>
        )
    }
}