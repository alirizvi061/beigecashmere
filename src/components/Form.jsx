import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="form">
                <h1>REQUEST A FREE QUOTE</h1>
                <form>
                    <input type='text' size="50" placeholder="Name" /><br />
                    <input type='text' size="50" placeholder="Email" /><br />
                    <input type='text' size="50" placeholder="Phone" /><br />
                    <input type='text' size="50" placeholder="Tell us about your project" /><br />
                    <input type='submit' /><br />
                </form>
            </div>
        );
    }
}

export default Form;