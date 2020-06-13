import React, { Component } from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import ProfilePageHeader from 'components/Headers/ProfilePageHeader'
import { Container, Row, Col, Button, Nav, NavItem, TabContent, TabPane, FormGroup, Label, Input,NavLink, Table, Alert } from 'reactstrap';
import { connect } from 'react-redux';


class IndexCart extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeTab : '1'
        }
    }
    render() {
        const toggle = tab =>{
            if(this.state.activeTab !== tab){
                this.setState({
                    activeTab :tab
                })
            }
        }
        var BookCart = this.props.BookCart
        if(BookCart.length === 0){
            return (
                <>
                <IndexNavbar />
                <ProfilePageHeader />
                <div className="section profile-content">
                    <Container>
                    <div className="owner">
                        <div className="avatar">
                        <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/User.png")}
                        />
                        </div>
                        <div className="name">
                        <h4 className="title">
                            Administrator <br />
                        </h4>
                        </div>
                    </div>
                    <br />
                    <div className="nav-tabs-navigation">
                        <div className="nav-tabs-wrapper">
                        <Nav role="tablist" tabs>
                            <NavItem>
                            <NavLink
                                className={this.state.activeTab === "1" ? "active" : ""}
                                onClick={() => {
                                toggle("1");
                                }}
                                style = {{fontSize:'20px',fontWeight:'bold'}}
                            >
                                <i className="fa fa-shopping-cart"></i>&nbsp;
                                Giỏ hàng
                            </NavLink>
                            </NavItem>
                        </Nav>
                        </div>
                    </div>
                    {/* Tab panes */}
                        <TabContent className="following" activeTab={this.state.activeTab}>
                                <Alert color="info">
                                    You don't have any products yet!!
                                </Alert>
                        </TabContent>
                    </Container>
                </div>
            </>
            )
        }
        else{
           const elm =  BookCart.map((book, index)=>{
                return <tbody key={index}>
                        <tr>
                        <th scope="row">1</th>
                        <td>
                            <img
                                alt="..."
                                className="img-rounded img-no-padding img-responsive"
                                src=""
                            />
                        </td>
                        <td></td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                    </tbody>
            })
            return (
                <>
                    <IndexNavbar />
                    <ProfilePageHeader />
                    <div className="section profile-content">
                        <Container>
                        <div className="owner">
                            <div className="avatar">
                            <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/User.png")}
                            />
                            </div>
                            <div className="name">
                            <h4 className="title">
                                Administrator <br />
                            </h4>
                            </div>
                        </div>
                        <br />
                        <div className="nav-tabs-navigation">
                            <div className="nav-tabs-wrapper">
                            <Nav role="tablist" tabs>
                                <NavItem>
                                <NavLink
                                    className={this.state.activeTab === "1" ? "active" : ""}
                                    onClick={() => {
                                    toggle("1");
                                    }}
                                    style = {{fontSize:'20px',fontWeight:'bold'}}
                                >
                                    <i className="fa fa-shopping-cart"></i>&nbsp;
                                    Giỏ hàng
                                </NavLink>
                                </NavItem>
                            </Nav>
                            </div>
                        </div>
                        {/* Tab panes */}
                            <TabContent className="following" activeTab={this.state.activeTab}>
                                <Table borderless hover>
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th></th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>
                                    {elm}
                                </Table>
                            </TabContent>
                        </Container>
                    </div>
                </>
            )
        }
    }
}

const mapStateToProps = state =>{
    return {
        BookCart: state.BookCart
    }
}



export default connect(mapStateToProps, null)(IndexCart)
