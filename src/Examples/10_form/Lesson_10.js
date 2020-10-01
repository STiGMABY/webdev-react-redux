import React, {Component, Fragment} from "react";

export class Lesson_10 extends Component {
    state = {
        inputText: '',
        textAreaText: '',
        showData: {
            name: '',
            text: ''
        }
    }
    // inputChangeHandler = (e) => {
    //    //debugger
    //     this.setState({
    //         inputText: e.target.value
    //     })
    // }
    inputChangeHandler = ( {target: {value} }) => {
        //debugger
        this.setState({
            inputText: value
        })
    }
    textAreaChangeHandler = ( {target: {value} }) => {
        this.setState({
            textAreaText: value
        })
    }
    onButtonClick = (e) => {
        e.preventDefault()
        const {inputText, textAreaText} = this.state
        this.setState({
            inputText: '',
            textAreaText: '',
            showData: {
                name: inputText,
                text: textAreaText
            }
        })
        console.log(this.state)
    }

    render() {
        const {inputText, textAreaText, showData} = this.state
        const {name, text} = showData

        return (
            <Fragment>
                <form>
                    <input type={'text'} value={inputText} onChange={this.inputChangeHandler}/><br/>
                    <textarea value={textAreaText} onChange={this.textAreaChangeHandler}/><br/>
                    <button onClick={this.onButtonClick}>Click</button>
                </form>

                <h2>{name}</h2>
                <h2>{text}</h2>
                {/*<span>{this.state.showData.name}</span>*/}
                {/*<span>{this.state.showData.text}</span>*/}
            </Fragment>
        )
    }
}