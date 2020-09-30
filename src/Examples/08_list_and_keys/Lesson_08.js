import React, {Component} from "react";

const ValidationMsg = ({val}) => {
    if (val < 10) {
        return <h2>Less then 10</h2>
    } else {
        return <h2>More then 10</h2>
    }
}

const Tab1 = () => {
    return <h1>Text of tab1</h1>
}
const Tab2 = () => {
    return <h1>Text of tab2</h1>
}
const Tab3 = () => {
    return <h1>Text of tab3</h1>
}

let persons = ['Max', 'Geks', 'Dex', 'Flex', 'Bob']

let BTN_TAB = [
    {dataName: 1, title: 'Tab1', icon: '+'},
    {dataName: 2, title: 'Tab2', icon: '-'},
    {dataName: 3, title: 'Tab3', icon: '*'}
]

export class Lesson_08 extends Component {
    state = {
        activeTab: 1
    }
    handleClick = (e) => {
        this.setState({
            activeTab: +e.target.getAttribute('data-name')
        })
    }

    render() {
        const {activeTab} = this.state
        console.log(this.state)
        return (
            <div>
                {BTN_TAB.map(({dataName, title, icon})=> {
                    return <button
                        key={`${dataName}-${title}`}
                        data-name={dataName}
                        onClick={this.handleClick}
                    >{icon}{title}</button>
                })}
                {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : <Tab3 />}
                <div>
                    {`Active tab is: ${activeTab === 1 ? 'First' : activeTab === 2 ? 'Second' : 'Third'}`}
                </div>
                <ul>
                    {persons.map((person, index)=> {
                        return <li key={index}>{person}</li>
                    })}
                </ul>
            </div>
        );
    }
}