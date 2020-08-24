import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <h1>GET YOUR QUOTE</h1>
                <form>
                    <input type='text' placeholder="Name" /><br />
                    <input type='text' placeholder="Email" /><br />
                    <input type='text' placeholder="Phone" /><br />
                    <textarea placeholder="Tell us about your project" /><br />
                    <input type='submit' /><br />
                </form>
            </div>
        );
    }
}

export default Form;