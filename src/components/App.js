import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {

    // Create state --
    // You can set state in a contructor too
    // Or like this using a property
    state = {
        fishes: {},
        order: {}
    };

    // Must use React set state API
    addFish = (fish) => {
        // Take a copy of existing state
        const fishes = {...this.state.fishes};
        // Add new fish to new fishes
        fishes[`fish${Date.now()}`] = fish;
        // Set the new fishes object to state
        // Using built in react setState()
        this.setState({
            fishes  // ES6 if property and value are the same - fishes: fishes
        });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        );
    }
}

export default App;