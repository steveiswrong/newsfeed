import React from 'react'
import Nav from "./nav/Nav"

class Newsfeed extends React.PureComponent {
    render() {
        return (
            <Nav items={['test', 'test1', 'test2']} labelProvider={(item) => {
                return item
            }}/>
        )
    }
}

export default Newsfeed