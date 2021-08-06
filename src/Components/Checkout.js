import React from 'react'
import { Form, Row, Col } from "react-bootstrap";
import {makeStyles} from '@material-ui/core/styles';

function Checkout() {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "#fff",
          fontFamily: "Nunito",
          // textAlign: 'center',
        },
        button: {
          color: "#fff",
          backgroundColor: "#FCC4D6",
          fontSize: "1.5rem",
          margin: "1.5px",
          borderRadius: 3,
          borderColor: "rgba(0,0,0,0.08)",
          borderWidth: 0.3,
        },
        colorText: {
          color: "#FCC4D6",
        },
        title: {
          fontSize: "3rem",
        },
      }));
      const classes = useStyles();
    
    return (
        <div className="editProfile">
        <h1 className={classes.title}>
          Billing <span className={classes.colorText}>Details</span>
        </h1>
        <br />
        <br />
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Billing Address:</Form.Label>
            <Form.Control
              placeholder="Street Address"
            />
          </Form.Group>
          <Row>
          <Col>
              City:
              <Form.Control
                placeholder="City"
              />
            </Col>
            <Col>
              State:
              <Form.Control
                placeholder="State"
              />
            </Col>
            <Col>
              Zip Code:
              <Form.Control
                placeholder="Zip Code"
              />
            </Col>
          </Row>
          <Form.Group className="mb-3">
              <br />
            <Form.Label>Card Number:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Card number"
            />
          </Form.Group>
          <Row>
          <Col>
              CVV:
              <Form.Control
                placeholder="CVV"
              />
            </Col>
            <Col>
              Expiration Date:
              <Form.Control
                placeholder="Expiration Date"
              />
            </Col>
            <Col>
              Zip Code:
              <Form.Control
                placeholder="Zip Code"
              />
            </Col>
          </Row>
          <Form.Group className="mb-3">
              <br/>
            <Form.Label>Shipping Address:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Shipping Address"
            />
          </Form.Group>
          <Row>
          <Col>
              City:
              <Form.Control
                placeholder="City"
              />
            </Col>
            <Col>
              State:
              <Form.Control
                placeholder="State"
              />
            </Col>
            <Col>
              Zip Code:
              <Form.Control
                placeholder="Zip Code"
              />
            </Col>
          </Row>
          <br />
          <button className="profile-btn">
            Place Order
          </button>
        </Form>
      </div>
    )
}

export default Checkout
