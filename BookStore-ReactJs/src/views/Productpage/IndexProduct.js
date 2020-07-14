import React, { Component } from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import LandingPageHeader from 'components/Headers/LandingPageHeader'
import { 
    Container, 
    Row, 
    Col, 
    Label,
    Input,
} from 'reactstrap'
import { connect } from 'react-redux'
import { actFetchAllBookDataRequest } from 'redux/actions/FetchBookData'
import DemoFooter from 'components/Footers/DemoFooter'
import { actFetchCategoryDataRequest } from 'redux/actions/FetchCategoryData'
import ProductByCategory from './ProductByCategory'

//services
import GetRandomQoutes from 'services/GetRandomQuotes'



class IndexProduct extends Component {
    constructor(props){
        super(props)
        this.state = {
            isReload: false,    
            Quotes:[
                {
                    id:1,
                    Quote: "“Many people, myself among them, feel better at the mere sight of a book.”",
                    Author: "- Jane Smiley -"
                },
                {
                    id:2,
                    Quote: "“′Classic′ – a book which people praise and don’t read.”",
                    Author: "- Mark Twain -"
                },
                {
                    id:3,
                    Quote: "“Sleep is good, he said, and books are better.”",
                    Author: "- George R.R. Martin -"
                },
                {
                    id:4,
                    Quote: "“The library is inhabited by spirits that come out of the pages at night.”",
                    Author: "- Isabel Allende -"
                },
                {
                    id:5,
                    Quote: "“Rainy days should be spent at home with a cup of tea and a good book.”",
                    Author: "- Bill Patterson -"
                },
                {
                    id:6,
                    Quote:"“No pen no gain.”",
                    Author:"- Huan Rose -"
                }
            ],
            isFavorite: false,
        }
    }
    componentDidMount(){
        this.props.fetchAllBook();
        this.props.fetchCategory();
    }
    test(){
        console.log(document.getElementById('exampleRadios1').checked);
    }
    toggle = () =>{
        this.setState({
            isFavorite: !this.state.isFavorite
        })
    }
    render() {
        var { url } = this.props.match
        var data = this.props.AllBook
        var {Category} = this.props
        var item = Category.map((category,index)=>{
                    return <ProductByCategory 
                                    key = {category.categoryID}
                                    category = {category.categoryName}
                                    books = {data}
                                    url = {url}
                            />
        })
        var quotes = GetRandomQoutes(this.state.Quotes)
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
                        <Row>
                            <Col></Col>
                            <Col >
                                <Row>
                                    <Col>
                                        <h6>Sort by name</h6>
                                        <div className="form-check-radio">
                                            <Label check>
                                            <Input type="radio" name="sortByNameRadios" id="exampleRadios1" value="option1"defaultChecked/>
                                                A to Z
                                            <span className="form-check-sign"></span>
                                            </Label>
                                        </div>
                                        <div className="form-check-radio">
                                            <Label check>
                                            <Input type="radio" name="sortByNameRadios" id="exampleRadios2" value="option2" />
                                                Z to A
                                            <span className="form-check-sign"></span>
                                            </Label>
                                        </div>
                                    </Col>
                                    <Col>
                                        <h6>Sort by price</h6>
                                        <div className="form-check-radio">
                                                <Label check>
                                                    <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option3" defaultChecked/>
                                                    High to low
                                                    <span className="form-check-sign"></span>
                                                </Label>
                                            </div>
                                            <div className="form-check-radio">
                                                <Label check>
                                                <Input type="radio" name="exampleRadios" id="exampleRadios2" value="option4" />
                                                Low to high
                                                <span className="form-check-sign"></span>
                                                </Label>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr></hr>
                        {item}
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexProduct)
