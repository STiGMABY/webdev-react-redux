import React, {Component, createRef, Fragment} from "react";

export class Lesson_10 extends Component {
    state = {
        inputText: '',
        textAreaText: '',
        selectText: '',
        showData: {
            name: '',
            text: '',
            position: ''
        }
    }

    inputRef = createRef()
    textAreatRef = createRef()
    selectRef = createRef()

    changeHandler = () => {
        this.setState({
            inputText: this.inputRef.current.value,
            textAreaText: this.textAreatRef.current.value,
            selectText: this.selectRef.current.value
        })
    }

    // inputChangeHandler = ({target: {value}}) => {
    //     //debugger
    //     this.setState({
    //         inputText: value
    //     })
    // }
    // textAreaChangeHandler = ({target: {value}}) => {
    //     this.setState({
    //         textAreaText: value
    //     })
    // }
    // selectTextChangeHandler = ({target: {value}}) => {
    //     this.setState({
    //         selectText: value
    //     })
    // }

    onButtonClick = (e) => {
        e.preventDefault()
        const {inputText, textAreaText, selectText} = this.state
        this.setState({
            inputText: '',
            textAreaText: '',
            selectText: '',
            showData: {
                name: inputText,
                text: textAreaText,
                position: selectText
            }
        })
        console.log(this.state)
    }

    render() {
        const {inputText, textAreaText, showData, selectText} = this.state
        const {name, text, position} = showData

        return (
            <Fragment>
                <form>
                    <input ref={this.inputRef} type={'text'} value={inputText} onChange={this.changeHandler}/><br/>
                    <textarea ref={this.textAreatRef} value={textAreaText} onChange={this.changeHandler}/><br/>
                    <select ref={this.selectRef} value={selectText} onChange={this.changeHandler}>
                        <option value={'Frontend-Dev'}>Frontend-Dev</option>
                        <option value={'Backend-Dev'}>Backend-Dev</option>
                    </select>
                </form>
                <button onClick={this.onButtonClick}>Click</button>

                <h2>{name}</h2>
                <h2>{text}</h2>
                <h2>{position}</h2>
                {/*<span>{this.state.showData.name}</span>*/}
                {/*<span>{this.state.showData.text}</span>*/}
            </Fragment>
        )
    }
}