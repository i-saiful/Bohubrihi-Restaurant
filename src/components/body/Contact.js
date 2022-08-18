import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      telNumber: '',
      email: '',
      agree: false,
      contactType: 'Tel.',
      message: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
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
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <FormGroup row>
                <Label md={2} htmlFor='firstName'>First Name</Label>
                <Col md={10}>
                  <Input placeholder="First Name" name="firstName" type='text' value={firstName}
                    onChange={this.handleInputChange} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={2} htmlFor='lastName'>Last Name</Label>
                <Col md={10}>
                  <Input placeholder="Last Name" name="lastName" type='text' value={lastName}
                    onChange={this.handleInputChange} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={2} htmlFor='telNumber'>Telephone Number</Label>
                <Col md={10}>
                  <Input placeholder="Telephone Number" name="telNumber" type='tel' value={telNumber}
                    onChange={this.handleInputChange} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={2} htmlFor='email'>Email</Label>
                <Col md={10}>
                  <Input placeholder="Email" name="email" type='email' value={email}
                    onChange={this.handleInputChange} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name='agree' checked={agree}
                        onChange={this.handleInputChange} />
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>

                <Col md={{ size: 3, offset: 1 }}>
                  <Input type='select' name="contactType" value={contactType}
                    onChange={this.handleInputChange}>
                    <option>Tel.</option>
                    <option>Eamil</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={2} htmlFor='message'>Feedback</Label>
                <Col md={10}>
                  <Input placeholder="message" name="message"
                    type='textarea' value={message} rows='12'
                    onChange={this.handleInputChange} />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color='primary'>Send Feedback</Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact