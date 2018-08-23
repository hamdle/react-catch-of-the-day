import React from 'react';

class EditFishForm extends React.Component {

    // This data needs to go upstream back up through
    // our Inventory then to the state in App
    handleChange = (event) => {
        console.log(event.currentTarget.name);
        // Update this fish
        // Take a copy of the current fish
        // Use new ES6 'computed property names'
        const updatedFish = { 
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updatedFish(this.props.index, updatedFish);
    }

    render() {
        return (
        <div className="fish-edit">
            <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
            <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
            <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}></textarea>
            <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
        </div>
        );
    }
}

export default EditFishForm;