import React, {Component, createContext, Fragment} from "react";

const TitleContex = createContext()

const Level3 = () => {
    return(
        <div>
            <TitleContex.Consumer>
                { ({title, subTitle, click}) => (
                    <Fragment>
                        <h1 onClick={click}>{title}</h1>
                        <h2>{subTitle}</h2>
                    </Fragment>
                ) }

            </TitleContex.Consumer>
        </div>
    )
}
const Level2 = () => <Level3 />
const Level1 = () => <Level2 />

export class Lesson_15 extends Component{
    render() {
        return(
            <div>
                <TitleContex.Provider value={ {title: 'Hello World!', subTitle: 'JavaScript', click: () => {
                        console.log('You clicked title!')}}} >
                    <Level1 />
                </TitleContex.Provider>
            </div>
        );
    }
}