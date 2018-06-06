import React from 'react'
import PropTypes from 'prop-types'

import {growRight, shrinkLeft} from '../util/animate'

class Nav extends React.Component {

    constructor(props) {
        super(props)
        this.navRef = React.createRef()
        this.state = {minimized: true}
        this.toggle.bind(this)
    }

    toggle() {
        if( this.state.minimized ) {
            growRight( this.navRef.current, 100)( () => {
                this.setState({
                    minimized: false
                })
            } )
        } else {
            shrinkLeft( this.navRef.current, 0, 5)( () => {
                this.setState({
                    minimized: true
                })
            } )
        }
    }

    render() {
        const listStyle = {
            position: 'absolute',
            left: '0px'
        }
        return (
            <nav>
                <p onClick={() => this.toggle()}><i class="fas fa-bars"></i> <span>Menu</span></p>
                <ul ref={this.navRef} style={listStyle}>
                    {this.props.items.map( (item, index) => <li key={`pill${index}`}>{this.props.labelProvider(item)}</li>)}
                </ul>
            </nav>
        )
    }
}

Nav.propTypes = {
    items: PropTypes.array,
    labelProvider: PropTypes.func.isRequired
}

export default Nav