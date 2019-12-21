import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPhones } from '../../actions/index';
import { getPhones } from '../../selectors/selectors'

class Phones extends Component {
    componentDidMount(){
        this.props.fetchPhones()
    }

    render() {
        console.log('phones', this.props.phones)
        return(
            <div>Phones</div>
        )
    }
}

const mapStateToProps = state => {
    phones: getPhones(state)
}
const mapDispatchToProps = {
    fetchPhones,
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones);