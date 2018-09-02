import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {

    static propTypes = {
        history: PropTypes.object
    }

    myInput = React.createRef();

    // Define a property bound to the instance
    goToStore = (event) => {
        // Stop form from submitting
        event.preventDefault();
        // Get input data
        const storeName = this.myInput.current.value;
        // Redirect to store/data
        // Change the URL using push state
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                { /* comment */ }
                <h2>Please Enter A Store</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
                    required placeholder="Store Name" 
                    defaultValue={getFunName()} 
                />
                <button type="submit">Visit Store ></button>
            </form>
        )
    }
}

export default StorePicker;