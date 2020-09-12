import React, { Component } from 'react';
import Popup from 'react-popup';
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

      if (firstName !== '' && lastName !== '' && email !== '') {
        Popup.create({
          title: 'Person Information',
          content: (
            <div>
              <p>
                <strong>Name:</strong>
                {' '}
                {firstName}
                {' '}
                {lastName}
              </p>
              <p>
                <strong>Email:</strong>
                {' '}
                {email}
              </p>
              {phone && (
              <p>
                <strong>Phone:</strong>
                {' '}
                {phone}
              </p>
              )}
            </div>
          ),
          buttons: {
            right: [{
              text: 'Close',
              action: (popup) => popup.close(),
            }],
          },
        });
      }

      const data = {
        firstName,
        lastName,
        email,
        phone,
      };

      console.log(data);
    }

    render() {
      const {
        firstName, lastName, email, phone, errors
      } = this.state;
      return (
        <div className="Person">
          <form onSubmit={this.handleSubmit}>
            <div>
              <p><strong>First Name:</strong></p>
              <p>
                <input
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={this.handleChange}
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && (<div className="errorMessage">Required field</div>)}
              </p>
            </div>
            <div>
              <p><strong>Last Name:</strong></p>
              <p>
                <input
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={this.handleChange}
                  className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && (<div className="errorMessage">Required field</div>)}
              </p>
            </div>
            <div>
              <p><strong>Email:</strong></p>
              <p><input name="email" type="email" value={email} onChange={this.handleChange} /></p>
            </div>
            <div>
              <p><strong>Phone:</strong></p>
              <p><input name="phone" type="tel" value={phone} onChange={this.handleChange} /></p>
            </div>
            <p>
              <button type="submit">Save Information</button>
            </p>
          </form>
        </div>
      );
    }
}

export default Person;
