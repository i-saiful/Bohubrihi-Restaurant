import React, { Component } from 'react';
import MenuItem from './MenuItem.js';
import DishDetail from './DishDetail.js';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../../redux/actionCreators.js';
import Loading from './Loading.js';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, author, rating, comment) => dispatch(
            addComment(dishId, author, rating, comment)
        ),
        fetchDishes: () => dispatch(fetchDishes())
    }
}

class Menu extends Component {

    state = {
        selectedDish: null,
        modalOpen: false,
    }

    onDishSelete = dish => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        })
        // console.log(this.props);
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    componentDidMount() {
        this.props.fetchDishes()
    }

    render() {
        document.title = 'Menu'
        if (this.props.dishes.isLoading) {
            return (
                <Loading />
            )
        } else {
            const menu = this.props.dishes.dishes.map(item =>
                <MenuItem
                    dish={item}
                    key={item.id}
                    onDishSelete={() => this.onDishSelete(item)}
                />)
            let dishDetail = null;
            if (this.state.selectedDish) {
                const { selectedDish } = this.state;
                const comments = this.props.comments.filter(dish => dish.dishId === selectedDish.id)
                dishDetail = <DishDetail
                    dish={selectedDish}
                    comments={comments}
                    addComment={this.props.addComment}
                />
            }
            return (
                <div className='container'>
                    <div className="row">
                        <CardColumns>{menu}</CardColumns>
                        <Modal isOpen={this.state.modalOpen}>
                            <ModalBody>
                                {dishDetail}
                            </ModalBody>
                            <ModalFooter>
                                <Button color='secondary'
                                    onClick={this.toggleModal}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);