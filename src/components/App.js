import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from '../sample-fishes';
import Fish from "./Fish";

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

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    }

    addToOrder = (key) => {
        // Take a copy of state
        const order = {...this.state.order};
        // Add or update amount in order
        order[key] = order[key] + 1 || 1;
        // Call setState to update our state object
        this.setState({order});
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        { /* The key property on <Fish> is a react special property */ }
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish 
                                key={key} 
                                index={key}
                                details={this.state.fishes[key]} 
                                addToOrder={this.addToOrder} 
                            />
                        ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        );
    }
}

export default App;