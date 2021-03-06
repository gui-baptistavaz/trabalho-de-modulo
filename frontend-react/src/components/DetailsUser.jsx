import React, { Component } from 'react'
import UserService from '../services/UserService'

class DetailsUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name: </label>
                            <div> { this.state.user.nome }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name: </label>
                            <div> { this.state.user.username }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Email ID: </label>
                            <div> { this.state.user.email }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default DetailsUser