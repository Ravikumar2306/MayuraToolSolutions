import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import "../styles/contact.css"
import AddressIcon from "../assets/Contact/address-icon.svg?react"
import PhoneIcon from "../assets/Contact/phone-icon.svg?react"
import EmailIcon from "../assets/Contact/email-icon.svg?react"


export default function Contact() {
    const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    confirm: false,
  });

   const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // submit logic here
  };

  return (
    <section className="" id="contact">
        <section className="contact-banner d-flex flex-column align-items-center justify-content-md-center p-5">
             <Container className="p-3">
        <h1 className="text-white display-3 fw-medium text-center">
              Contact</h1>
        </Container>
        </section>

        <Container className="section-padding">
            <Row className="m-0">
                <Col md={6} className="pe-md-5 ">
                    <div className="mb-5 text-center text-md-start">
                        <h1 className="text-blue fs-2 ">Have a quation?</h1>
                        <p className="text-dark-gray">Fill out the form below with your details and your message, and our team will get back to you as soon as possible. </p>
                    </div>

                    <Form onSubmit={handleSubmit}>
        {/* Full Name */}
        <Form.Group className="mb-4" controlId="fullName">
          <Form.Label className="text-blue text-center">Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Full Name here"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-4" controlId="email">
          <Form.Label className="text-blue text-center">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your Email here"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Message */}
        <Form.Group className="mb-4" controlId="message">
          <Form.Label className="text-blue text-center">Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your Message here"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Confirmation Checkbox */}
        <Form.Group className="mb-4" controlId="confirm">
          <Form.Check
            type="checkbox"
            label="I confirm that the information provided above is accurate and complete."
            name="confirm"
            checked={formData.confirm}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Submit Button (optional, add if needed) */}
         <button className="dark-bg text-white py-3 px-5 rounded-pill contact-button " variant="primary" type="submit">
              Send Message
            </button>
      </Form>
                </Col>

                <Col md={6} className="ps-md-5 mt-5 mt-md-0">
                <div className="contact-bg p-4 p-md-5 rounded-5">
                    <div className="mb-5">
                        <h1 className="text-blue fs-2">Get it touch</h1>
                        <p className="text-dark-gray">We’d love to hear from you. I’m always here to chat and help you out.</p>
                    </div>

                    {/* Address */}
                    <div className="d-flex align-items-center">
                        <AddressIcon className="me-4 contact-icon" />
                        <div>
                        <h1 className="text-blue fs-5">Address</h1>
                        <p className="text-dark-gray m-0">01, Mangala Vinayagar Kovil Street, Thirubuvanai, Puducherry – 605 107. </p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="d-flex align-items-center my-5">
                        <PhoneIcon className="me-4 contact-icon" />
                        <div>
                        <h1 className="text-blue fs-5">Phone</h1>
                        <p className="text-dark-gray m-0">+91 9789 689 277</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="d-flex align-items-center">
                        <EmailIcon className="me-4 contact-icon" />
                        <div>
                        <h1 className="text-blue fs-5">Email</h1>
                        <p className="text-dark-gray m-0">mayuratoolsolution@gmail.com</p>
                        </div>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
}
