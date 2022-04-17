import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    <p style={{fontSize:'26px'}}>{toast.success('Booked Successfully')}</p>
  };
  return (
    <form className="form-control" onSubmit={submitHandler}>
      <h1 className="heading">Checkout</h1>
      <div className="input-control">
        <label htmlFor="username">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className="input-control">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div className="input-control">
        <label htmlFor="address">Address</label>
        <input type="address" name="address" id="address" required />
      </div>
      <div className="input-control">
        <label htmlFor="phone">Phone Number</label>
        <input type="phone" name="phone" id="phone" required />
      </div>
      <div>
        <button type="submit" className="btn-login">
          Checkout
        </button>
      </div>
      <ToastContainer className="tostify"/>
    </form>
  );
};

export default Checkout;
