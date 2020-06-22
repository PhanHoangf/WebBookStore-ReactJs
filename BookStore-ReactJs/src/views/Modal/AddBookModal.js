import React, { Component } from 'react'
import { Modal, FormGroup, Input, Button, Form } from 'reactstrap';
import { connect } from 'react-redux';
import { actAddBookRequest } from 'redux/actions/FetchBookData';

class AddBookModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            txtTitle : "",
            txtAuthor: "",
            txtCategory: "",
            txtPrice: 0,
            txtDescribe: "",
            txtNumberOfPages: 0,
            txtLinkImage:""
        }
    }
    setAddBookModal = (setBookModal) =>{
        this.props.onSetModal(setBookModal)
    }

    onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.value;
		this.setState({
		    [name]: value,
		});
    };
    onAddBook = (e) =>{
        var book = {
            title : this.state.txtTitle,
            authorID : 103,
            categoryID : 86,
            price : Number(this.state.txtPrice),
            describe : this.state.txtDescribe,
            numberOfPages : Number(this.state.txtNumberOfPages),
            bookImage : this.state.txtLinkImage
        }
        this.props.actAddBook(book)
    }
    render() {
        const {Author}= this.props
        const {Category} = this.props
        const category = Category.map( ( item ) => {
            return <option key={item.categoryID}>{item.categoryName}</option>
        })
        const author = Author.map( ( item ) => {
            return <option key={item.authorID}>{item.name}</option>
        })
        return (
            <div>
                <Modal
                    isOpen={this.props.setModal}
                    toggle={() => this.setAddBookModal(false)}
                    modalClassName="modal-register"
                >
                    <div className="modal-header no-border-header text-center">
                    <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => this.setAddBookModal(false)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                    <h3 className="modal-title text-center" style = {{fontWeight:"bold"}}>Add Book</h3>
                    </div>
                    <Form 
                        className="modal-body"
                        onSubmit = {this.onAddBook}
                    >
                            <FormGroup>
                                <label>Title</label>
                                <Input 

                                    placeholder="title" 
                                    type="text"
                                    name = "txtTitle"
                                    value = {this.state.txtTitle}
                                    onChange = {this.onChange} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>Author</label>
                                {/* <Input defaultValue="" placeholder="author" type="text" /> */}
                                <select className="form-control" id="author">
                                    {author}
                                </select>
                            </FormGroup>
                            <FormGroup>
                                <label>Category</label>
                                {/* <Input defaultValue="" placeholder="category" type="text" /> */}
                                <select className="form-control" id="category">
                                    {category}
                                </select>
                            </FormGroup>
                            <FormGroup>
                                <label>Price</label>
                                <Input 
                                    placeholder="Price" 
                                    type="text"
                                    name = "txtPrice"
                                    value = { this.state.txtPrice }
                                    onChange = { this.onChange } 
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>Describe</label>
                                <Input  
                                    placeholder="Describe" 
                                    type="text"
                                    name = "txtDescribe"
                                    value = { this.state.txtDescribe }
                                    onChange = { this.onChange } 
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>Number of pages</label>
                                <Input  
                                    placeholder="Pages" 
                                    type="text"
                                    name = "txtNumberOfPages" 
                                    value = { this.state.txtNumberOfPages }
                                    onChange = { this.onChange }
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>Link Image</label>
                                <Input  
                                    placeholder="Link" 
                                    type="text"
                                    name = "txtLinkImage"
                                    value = { this.state.txtLinkImage }
                                    onChange = { this.onChange }
                                />
                            </FormGroup>
                            <Button block className="btn-round" color="success" type="submit">
                                Add
                            </Button>
                            <Button block className="btn-round" color="danger">
                                Cancel
                            </Button>
                    </Form>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        Category: state.Category,
        Author : state.AllAuthor
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        actAddBook: book =>{
            dispatch(actAddBookRequest(book))
        }
    }   
}

export default connect(mapStateToProps,mapDispatchToProps)(AddBookModal) 