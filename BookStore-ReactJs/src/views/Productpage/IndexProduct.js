import React, { Component,Suspense } from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import LandingPageHeader from 'components/Headers/LandingPageHeader'
import { 
    Container, 
    Row, 
    Col,
    Alert, Card, CardImg, CardBody, CardTitle, CardText, Button 
} from 'reactstrap'
import { connect } from 'react-redux'
import { actFetchAllBookDataRequest } from 'redux/actions/FetchBookData'
import DemoFooter from 'components/Footers/DemoFooter'
import { actFetchCategoryDataRequest } from 'redux/actions/FetchCategoryData'
import { actAddToCart } from 'redux/actions/Cart'

//services
import GetRandomQoutes from 'services/GetRandomQuotes'
import { QOUTES } from 'redux/actiontypes/ActionTypes'
import { Link, NavLink } from 'react-router-dom'
import { actGetBookByCategory } from 'redux/actions/FetchBookData'

class IndexProduct extends Component {
    constructor(props){
        super(props)
        this.state = {
            isReload: false,    
            isFavorite: false
        }
    }
    componentDidMount(){
        this.props.fetchAllBook();
        this.props.fetchCategory();
    }
    addToCart = book =>{
        this.props.onAddToCart(book)
    }
    cateTest = (category) =>{
        this.props.onGetBookByCategory(category);
    }
    onReload = () =>{
        this.props.fetchAllBook();
    }
    render() {
        var { url } = this.props.match
        var data = this.props.AllBook
        var {Category} = this.props
        var category = Category.map((cate)=>{
            return  <Col key={cate.categoryID} style={{marginBottom:'10px'}}>
                        <NavLink 
                            to={`/cate/${cate.categoryName}`} 
                            className="h6" 
                            style={{color:"grey"}}
                            activeStyle={{color: "gold"}}
                            onClick = {() => this.cateTest(cate.categoryName)}
                        > {cate.categoryName} </NavLink>
                    </Col>
        })
        var allbook = data.map((book)=>{
             return  <Card style={{width: '18rem',marginRight:'10px'}} key={book.bookID}>
                        <Link to ={`${url}/${book.bookID}`}>
                            <CardImg 
                                top 
                                src={book.bookImage} 
                                alt="..."/>
                        </Link>
                        <CardBody style={{height:"296px"}}>
                            <CardTitle><h5 style={{height:'52px'}}>{book.title}</h5></CardTitle>
                            <br></br>
                            <CardText className="card-text">Author: {book.name}</CardText>
                            <CardText className="card-text">Price: {book.price} $</CardText>
                            <CardText></CardText>
                            <Button onClick = {() => this.addToCart(book)} color="success" className="btn-icon btn-round">
                                <i className="fa fa-shopping-cart"></i>
                            </Button>&nbsp;
                        </CardBody>
                    </Card>
                   
        })
        var quotes = GetRandomQoutes(QOUTES)
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
                                <p>{quotes.Quote} <br />
                                    <strong>{quotes.Author}</strong>
                                </p>
                                <br />
                                <br />
                            </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col xs="2.5" style={{marginRight:'40px'}}>
                                <h6 style={{fontSize:'15px'}}>Pick your category</h6>
                                <Col style={{marginBottom:'10px'}}>
                                    <NavLink 
                                        to={`/product-page`} 
                                        className="h6" 
                                        style={{color:"grey"}}
                                        activeStyle={{color: "gold"}}
                                        onClick = {()=> this.onReload()}
                                    >
                                        All Book
                                    </NavLink>
                                </Col>
                                {category}
                            </Col>
                            <Col>
                                <Row>
                                    {allbook}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <DemoFooter />
            </>
        )
    }
}

const mapStateToProps = state =>{
    return {
        AllBook : state.AllBook,
        Category : state.Category
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchAllBook : () =>{
            dispatch(actFetchAllBookDataRequest())
        },
        fetchCategory: ()=>{
            dispatch(actFetchCategoryDataRequest())
        },
        onAddToCart: (book)=>{
            dispatch(actAddToCart(book,1))
        },
        onGetBookByCategory:(category)=>{
            dispatch(actGetBookByCategory(category))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexProduct)