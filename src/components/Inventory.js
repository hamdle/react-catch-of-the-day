import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory goes here</h2>
                <AddFishForm />
            </div>
        )
    }
}

export default Inventory;