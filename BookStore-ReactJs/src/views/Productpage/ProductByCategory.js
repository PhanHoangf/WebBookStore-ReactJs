import React, { Component } from 'react'
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { isEmpty } from 'lodash'
import { connect } from 'react-redux'
import { actAddToCart } from 'redux/actions/Cart'

class ProductByCategory extends Component {
    addToCart = book =>{
        this.props.onAddToCart(book)
    }
    render() {
        var { books,url,category } = this.props
        var elm = books.filter(book=>book.categoryName === category).map(book =>{
                return <Col key={book.bookID}>
                            <Card style={{width: '20rem'}}>
                                <Link to ={`${url}/${book.bookID}`}>
                                    <CardImg 
                                        top 
                                        src={book.bookImage} 
                                        alt="..."/>
                                </Link>
                                <CardBody style={{height:"296px"}}>
                                    <CardTitle><h3>{book.title}</h3></CardTitle>
                                    <br></br>
                                    <CardText className="card-text">Author: {book.name}</CardText>
                                    <CardText className="card-text">Price: {book.price} $</CardText>
                                    <CardText></CardText>
                                    <Button onClick = {() => this.addToCart(book)} color="success" className="btn-icon btn-round">
                                        <i className="fa fa-shopping-cart"></i>
                                    </Button>&nbsp;
                                </CardBody>
                            </Card>
                        </Col>
            }
        )
        if(!isEmpty(elm)){
            console.log('a')
            return (
                <div>
                    <Row>
                        <p className="h6" style={{fontSize:'20px'}}>{category}</p>
                    </Row>
                    <Row>
                        {elm}
                    </Row>
                </div>
            )
        }
        else{
            console.log('b')
            return <div></div>
        }
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onAddToCart: (book)=>{
            dispatch(actAddToCart(book,1))
        },
    }
}

export default connect (null, mapDispatchToProps) (ProductByCategory)