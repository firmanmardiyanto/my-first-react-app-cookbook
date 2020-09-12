import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      errors: {
        firstName: false,
        lastName: false,
      },
    };
  }

    handleChange = (e) => {
      const { target: { name, value } } = e;
      this.setState({
        [name]: value,
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const {
        firstName, lastName, email, phone,
      } = this.state;

      this.setState({
        errors: {
          firstName: firstName === '',
          lastName: lastName === '',
        },
      });

      const data = {
        firstName,
        lastName,
        email,
        phone,
      };

      console.log(data);
    }

    render() {
      return (
        <div className="Person">
          <form onSubmit={this.handleSubmit}>
            <div>
              <p><strong>First Name:</strong></p>
              <p>
                <input
                  name="firstName"
                  type="text"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  className={this.state.errors.firstName ? 'error' : ''}
                />
                {this.state.errors.firstName && (<div className="errorMessage">Required field</div>)}
              </p>
            </div>
            <div>
              <p><strong>Last Name:</strong></p>
              <p>
                <input
                  name="lastName"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  className={this.state.errors.lastName ? 'error' : ''}
                />
                {this.state.errors.lastName && (<div className="errorMessage">Required field</div>)}
              </p>
            </div>
            <div>
              <p><strong>Email:</strong></p>
              <p><input name="email" type="email" value={this.state.email} onChange={this.handleChange} /></p>
            </div>
            <div>
              <p><strong>Phone:</strong></p>
              <p><input name="phone" type="tel" value={this.state.phone} onChange={this.handleChange} /></p>
            </div>
            <p>
              <button>Save Information</button>
            </p>
          </form>
        </div>
      );
    }
}

export default Person;
