import React, { Component } from 'react';
import { Form, Button, Input } from 'reactstrap';

class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: '',
            rating: '',
            comment: ''
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const {author, rating, comment} = this.state;
        const {dishID} = this.props;
        this.props.addComment(dishID, author, rating, comment)
        this.setState({
            author: '',
            rating: '',
            comment: ''
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Input
                        name='author'
                        value={this.state.author}
                        type='text'
                        placeholder='your name'
                        required
                        onChange={(e) => this.handleInputChange(e)}
                    />
                    <br />

                    <Input
                        name='rating'
                        value={this.state.rating}
                        type='select'
                        onChange={(e) => this.handleInputChange(e)}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />

                    <Input
                        name='comment'
                        type='textarea'
                        value={this.state.comment}
                        placeholder='your message'
                        required
                        onChange={(e) => this.handleInputChange(e)}
                    />
                    <br />
                    <Button type='submit'>Submit Comment</Button>
                </Form>
            </div>
        )
    }
}

export default CommentForm;