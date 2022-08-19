import React, { Component } from 'react';
import { Button, FormGroup, Label, Col } from 'reactstrap';
import { Form, Control, Errors, actions } from 'react-redux-form';
import { connect } from 'react-redux';

const mapDispatchToProps = dispactch => ({
  resetFeedbackForm: () => dispactch(actions.reset('feedback'))
})

const required = val => val && val.length
const isNumber = val => !isNaN(Number(val))
const validMail = mail => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(mail);

class Contact extends Component {

  handleSubmit = values => {
    console.log(values);
    this.props.resetFeedbackForm();
  }

  render() {
    document.title = 'Contact'

    return (
      <div className='container'>
        <div className="row row-content" style={{ paddingLeft: '20px', textAlign: 'left' }}>
          <div className="col-12">
            <h3>Send us Feedback</h3>
          </div>
          <div className="col-12 col-md-7">
            <Form model='feedback' onSubmit={e => this.handleSubmit(e)}>
              <FormGroup row>
                <Label md={2} htmlFor='firstName'>First Name</Label>
                <Col md={10}>
                  <Control.text
                    placeholder="First Name"
                    name="firstName"
                    model='.firstName'
                    className='form-control'
                    validators={{ required }}
                  />
                  <Errors
                    model='.firstName'
                    className='text-danger'
                    show='touched'
                    messages={{
                      required: "Required"
                    }}
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
                    validators={{ required }}
                  />
                  <Errors
                    model='.lastName'
                    className='text-danger'
                    show='touched'
                    messages={{
                      required: "Required"
                    }}
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
                    validators={{ required, isNumber }}
                  />
                  <Errors
                    model='.telNumber'
                    className='text-danger'
                    show='touched'
                    messages={{
                      required: "Required, ",
                      isNumber: "Invalid Number"
                    }}
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
                    validators={{ required, validMail }}
                  />
                  <Errors
                    model='.email'
                    className='text-danger'
                    show='touched'
                    messages={{
                      required: "Required, ",
                      validMail: "Invalid Email"
                    }}
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
                    validators={{ required }}
                  />
                  <Errors
                    model='.message'
                    className='text-danger'
                    show='touched'
                    messages={{
                      required: "Required"
                    }}
                  />
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

export default connect(null, mapDispatchToProps)(Contact);