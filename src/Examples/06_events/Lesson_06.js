import React, {Component} from "react";
import PropTypes from 'prop-types'

const MyLink = ({text, onClick}) => {
    return <a href="/test" onClick={onClick}>{text}</a>
}

MyLink.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

MyLink.defaultProps = {
    text: 'Link',
    onClick: () => {}
}

export class Lesson_06 extends Component{
    handleClick = (e) =>{
        e.preventDefault()
        console.log('Clicked')
    }

    render() {
        return (
            <div>
                <MyLink onClick={(e) => this.handleClick(e, 'text')}/>
            </div>
        );
    }
}