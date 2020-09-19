import React, { Component } from 'react';
// import { string }from 'prop-types';


class Counter extends Component {

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call and get new data from the server 
        }
    }

    componentWillUnmount() {
        console.log('Counter - Unmount');
    }


    handleChange = (event) => {
        
        var newInput = event.target.value;
        this.props.onChanges(this.props.counter, newInput);
    }

    handleSubmitting = async () => {

        await this.props.onSubmit(this.props.counter);
    }

    render() {
        // console.log('props', this.props)
        return (
        <div>
            <input type="text" onChange={ this.handleChange.bind(this) }/>
            <button type="submit" className="btn btn-primary m-2" onClick={ this.handleSubmitting }>Submit</button> 
            <button onClick={() => this.props.onDelete(this.props.counter.id)}
             className="btn btn-danger m-2">Delete</button>
            {this.props.children}          {/* children prop is used to pass complex elements to the children*/}
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value ===  0 ? 'Zero' : value;

    }
}
 
export default Counter;