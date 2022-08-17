import React, { Component } from 'react';
import Dishes from '../../data/dishes.js';
import MenuItem from './MenuItem.js';
import DishDetail from './DishDetail.js';

export default class Menu extends Component {

    state = {
        dishes: Dishes,
        selectedDish: null
    }

    onDishSelete = dish => {
        console.log(dish);
        this.setState({ selectedDish: dish })
    }


    render() {
        const menu = this.state.dishes.map(item =>
            <MenuItem
                dish={item}
                key={item.id}
                onDishSelete={() => this.onDishSelete(item)}
            />)

        let dishDetail = null;
        if (this.state.selectedDish) {
            dishDetail = <DishDetail dish={this.state.selectedDish}/>
        }
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetail}
                    </div>
                </div>
            </div>
        )
    }
}