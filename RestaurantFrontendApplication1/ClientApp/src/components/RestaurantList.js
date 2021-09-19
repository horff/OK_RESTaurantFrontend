import React, { Component } from 'react';

export class RestaurantList extends Component {
    displayName = RestaurantList.name

    constructor(props) {
        super(props);
        this.state = { resaurants: [], loading: true };

        fetch('https:/ok-restaurantapi.azurewebsites.net/api/restaurant')
            .then(response => response.json())
            .then(data => {
                this.setState({ resaurants: data, loading: false });
            });
    }

    static renderRestaurantsTable(resaurants) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address Line 1</th>
                        <th>Address Line 2</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Description</th>
                        <th>Hours</th>
                        <th>Average Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {resaurants.map(resaurant =>
                        <tr key={resaurant.id}>
                            <td>{resaurant.name}</td>
                            <td>{resaurant.addressLine1}</td>
                            <td>{resaurant.addressLine2}</td>
                            <td>{resaurant.city}</td>
                            <td>{resaurant.state}</td>
                            <td>{resaurant.zip}</td>
                            <td>{resaurant.description}</td>
                            <td>{resaurant.hours}</td>
                            <td>{resaurant.averageRating}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : RestaurantList.renderRestaurantsTable(this.state.resaurants);

        return (
            <div>
                <h1>Rate These Restaurants!</h1>
                {contents}
            </div>
        );
    }
}
