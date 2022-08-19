import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form'

class Contact extends Component {

  handleSubmit = e => {
    console.log(e);
  }

  render() {
    document.title = 'Contact'
    const { firstName, lastName, telNumber, email, agree, contactType, message } = this.state;
    return (
      <div className='container'>
        <div className="row row-content" style={{ paddingLeft: '20px', textAlign: 'left' }}>
          <div className="col-12">
            <h3>Send us Feedback</h3>
          </div>
          <div className="col-12 col-md-7">
            <LocalForm onSubmit={e => this.handleSubmit(e)}>
              <FormGroup row>
                <Label md={2} htmlFor='firstName'>First Name</Label>
                <Col md={10}>
                  <Control.text
                    placeholder="First Name"
                    name="firstName"
                    model='.firstName'
                    className='form-control'
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={2} htmlFor='lastName'>Last Name</Label>
                <Col md={10}>
                  <Control.text
                    placeholder="Last Name"
                    name="lastName"
                    model='.lastName'
                    className='form-control'
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={2} htmlFor='telNumber'>Telephone Number</Label>
                <Col md={10}>
                  <Control.text
                    placeholder="Telephone Number"
                    name="telNumber"
                    model='.telNumber'
                    className='form-control'
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={2} htmlFor='email'>Email</Label>
                <Col md={10}>
                  <Control.text
                    placeholder="Email"
                    name="email"
                    model='.email'
                    className='form-control'
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        name='agree'
                        className='form-check-input' 
                      />
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>

                <Col md={{ size: 3, offset: 1 }}>
                  <Control.select
                    name="contactType"
                    model='.contactType'
                    className='form-control'
                  >
                    <option>Tel.</option>
                    <option>Eamil</option>
                  </Control.select>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={2} htmlFor='message'>Feedback</Label>
                <Col md={10}>
                  <Control.textarea
                    placeholder="message"
                    name="message"
                    model='.message'
                    rows='12'
                    className='form-control'
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color='primary'>Send Feedback</Button>
                </Col>
              </FormGroup>
            </LocalForm>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact