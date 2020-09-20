import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        const { onReset, counters, onDelete, onIncrement, onChanges, onSubmit, onAdd} = this.props;

        return (
        <div align = "center">
            {/* Reset Button*/}
            <button
                onClick={onReset}
                className="btn btn-outline-dark m-3">
                Reset
            </button>
            <button 
                onClick={onAdd}
                className="btn btn-outline-dark m-3">
                Add
            </button>
            {counters.map(counter => (
            <Counter 
                key={counter.id} 
                onDelete={onDelete} 
                onIncrement={onIncrement}
                onChanges={onChanges}
                onSubmit={onSubmit}
                counter={counter}
            >
            <h6>Date & Time: {counter.output}</h6>
            </Counter>
            ))}

        </div>);
    }
}
 
export default Counters;