import React from "react";
import PropTypes from 'prop-types';
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

    static propTypes = {
        match: PropTypes.object
    }

    // This is a react life-cycle method
    componentDidMount() {
        const { params } = this.props.match;
        
        // First reinstate our localStorage
        const localStorageRef = localStorage.getItem(params.storeID);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef)});
        }

        this.loadSampleFishes();
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeID, JSON.stringify(this.state.order));
    }

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

    updatedFish = (key, updatedFish) => {
        // Take a copy of the current state of fishes
        const fishes = {...this.state.fishes };
        // Update that state
        fishes[key] = updatedFish;
        // Set that to state
        this.setState({ fishes: fishes }); // or just { fishes }
    }

    deleteFish = (key) => {
        // Take a copy of state
        const fishes = {...this.state.fishes};
        // Update the state
        // we would use delete fish1 but firebase needs a null
        fishes[key] = null;
        // Update state
        this.setState({fishes});
    }

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

    removeFromOrder = (key) => {
        // Take a copy of state
        const order = {...this.state.order};
        // Remove from order
        // using delete because we're not sync w/firebase
        delete order[key]
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
                <Order 
                    fishes={this.state.fishes} 
                    order={this.state.order} 
                    removeFromOrder={this.removeFromOrder}
                />
                <Inventory 
                    addFish={this.addFish} 
                    updatedFish={this.updatedFish}
                    deleteFish={this.deleteFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}
                    storeId={this.props.match.params.storeId}
                />
            </div>
        );
    }
}

export default App;