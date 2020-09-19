import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        const { onReset, counters, onDelete, onIncrement, onChanges, onSubmit} = this.props;

        return (
        <div>
            <button
                onClick={onReset}
                className="btn btn-secondary btn-sm m-2">
                Reset
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
            <p className="serif">Time: {counter.output}</p>
            </Counter>
            ))}

        </div>);
    }
}
 
export default Counters;