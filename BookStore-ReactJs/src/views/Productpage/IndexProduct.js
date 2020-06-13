import React, { Component } from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import LandingPageHeader from 'components/Headers/LandingPageHeader'
import { 
    Container, 
    Row, 
    Col, 
    Button, 
    Card,
    CardImg, 
    CardBody, 
    CardTitle, 
    CardText, 
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'
import { connect } from 'react-redux'
import { actFetchAllBookDataRequest } from 'redux/actions/FetchBookData'
import { actAddToCart } from 'redux/actions/Cart'

class IndexProduct extends Component {
    componentDidMount(){
        this.props.fetchAllBook()
    }
    addToCart = book =>{
        this.props.onAddToCart(book)
    }
    render() {
        var data = this.props.AllBook
        const elm = data.map((book,index)=>{
            return <Col key={book.bookID}>
                        <Card style={{width: '20rem'}}>
                            <CardImg 
                                top 
                                src={book.bookImage} 
                                alt="..."/>
                            <CardBody>
                                <CardTitle><h3>{book.title}</h3></CardTitle>
                                <br></br>
                                <CardText className="card-text">{book.name}</CardText>
                                <CardText className="card-text">{book.price} $</CardText>
                                <CardText></CardText>
                                <Button onClick = {() => this.addToCart(book)} color="success" className="btn-icon btn-round">
                                    <i className="fa fa-shopping-cart"></i>
                                </Button>
                            </CardBody>
                        </Card>
                </Col>
        })
        return (
            <>
                <IndexNavbar />
                <LandingPageHeader />
                <div className="section profile-content" >
                    <Container>
                    <div className="owner">
                        <div className="avatar">
                        <img
                            alt="library"
                            className="img-rounded img-no-padding img-responsive"
                            src={require("assets/img/library.png")}
                        />
                        </div>
                        <div className="name">
                        <h3 className="title">
                            Book Shelf <br />
                        </h3>
                        </div>
                    </div>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="6">
                        <p>
                            “′Classic′ – a book which people praise and don’t read.” <strong>- Mark Twain</strong>
                        </p>
                        <p>
                            “Sleep is good, he said, and books are better.”
                            <strong>– George R.R. Martin</strong>
                        </p>
                        <p>
                            “Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.”
                            <strong>-Charles W. Eliot</strong>
                        </p>
                        <br />
                        </Col>
                    </Row>
                    <UncontrolledDropdown className="btn-group">
                        <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        color="secondary"
                        data-toggle="dropdown"
                        type="button"
                        >
                        Category
                        </DropdownToggle>
                        <DropdownMenu>
                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                            Action
                        </DropdownItem>
                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                            Another action
                        </DropdownItem>
                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                            Something else here
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                            Separated link
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <hr></hr>
                    <Row>
                       {elm}
                    </Row>
                    </Container>
                </div>
            </>
        )
    }
}
const mapStateToProps = state =>{
    return {
        AllBook : state.AllBook
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchAllBook : () =>{
            dispatch(actFetchAllBookDataRequest())
        },
        onAddToCart: (book)=>{
            dispatch(actAddToCart(book,1))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexProduct)
