import React from 'react';

class ToggleMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state =>({
            isToggleOn : !state.isToggleOn
        }));
    }

    render() {
        return(
        <button className="navbar-toggler" onClick={this.handleClick}
                type="button" 
                data-toggle="collapse" 
                data-target="#ftco-nav" 
                aria-controls="ftco-nav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                        {this.state.isToggleOn}
                    <span className="oi oi-menu"></span> 
                    Menu
        </button>
        )
    }
}

export default ToggleMenu;