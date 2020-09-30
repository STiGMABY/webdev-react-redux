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

export class Lesson_07 extends Component {
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
                <button data-name={1} onClick={this.handleClick}>Tab1</button>
                <button data-name={2} onClick={this.handleClick}>Tab2</button>
                <button data-name={3} onClick={this.handleClick}>Tab3</button>
                {/*{activeTab === 1 && <Tab1 />}*/}
                {/*{activeTab === 2 && <Tab2 />}*/}
                {/*{activeTab === 3 && <Tab3 />}*/}
                {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : <Tab3 />}
                <div>
                    {`Active tab is: ${activeTab === 1 ? 'First' : activeTab === 2 ? 'Second' : 'Third'}`}
                </div>
            </div>
        );
    }
}