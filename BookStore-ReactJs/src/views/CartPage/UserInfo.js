import React, { Component } from 'react'
import {
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";
export default class UserInfo extends Component {
    render() {
        var { userInfo } = this.props
        console.log(userInfo)
        return (
            <form style={{textAlign:'left'}}>
                <div className="form-row" >
                    <FormGroup className="col-md-6">
                        <Label >Username</Label>
                        <Input type="text" placeholder="Email" defaultValue = {userInfo.userName}/>
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label for="inputPassword4">Password</Label>
                        <Input type="password"  id="inputPassword4" placeholder="Password" autoComplete="off"/>
                    </FormGroup>
                </div>
                <div className="form-row">
                    <FormGroup className="col-md-6">
                        <Label>Display name</Label>
                        <Input type="text" placeholder="1234 Main St" defaultValue = { userInfo.displayName }/>
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label >Phone number</Label>
                        <Input type="text" defaultValue = { userInfo.phoneNumber }/>
                    </FormGroup>
                </div>
                <Button type="submit" color="primary">Save</Button>
            </form>
        )
    }
}
