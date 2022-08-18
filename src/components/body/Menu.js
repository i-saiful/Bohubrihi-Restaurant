import React, { Component } from 'react';
import Dishes from '../../data/dishes.js';
import COMMENTS from '../../data/comments.js'
import MenuItem from './MenuItem.js';
import DishDetail from './DishDetail.js';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

export default class Menu extends Component {

    state = {
        dishes: Dishes,
        selectedDish: null,
        modalOpen: false,
        comments: COMMENTS
    }

    onDishSelete = dish => {
        console.log(dish);
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        })
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        document.title = 'Menu'
        const menu = this.state.dishes.map(item =>
            <MenuItem
                dish={item}
                key={item.id}
                onDishSelete={() => this.onDishSelete(item)}
            />)

        let dishDetail = null;
        if (this.state.selectedDish) {
            const { selectedDish } = this.state;
            const comments = this.state.comments.filter(dish => dish.dishId === selectedDish.id)
            dishDetail = <DishDetail dish={selectedDish} comments={comments} />
        }
        return (
            <div className='container'>
                <div className="row">
                    <CardColumns>{menu}</CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
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