import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {

    myInput = React.createRef();

    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }

    goToStore(event) {
        // Stop form from submitting
        event.preventDefault();
        // Get input data
        console.log(this);
        // Redirect to store/data
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