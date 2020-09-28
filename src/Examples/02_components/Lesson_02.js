import React, {Component} from "react";

function Welcome() {
    return <div>Hello World!</div>
}

class SuperWelcome extends Component{
    render() {
        return <div>Hello World!</div>
    }
}
export function Lesson_02() {
    return(
        <div>
            <Welcome />
            <SuperWelcome />
        </div>
    )
}