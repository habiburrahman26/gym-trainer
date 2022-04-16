import React from 'react'

const Checkout = () => {
  return (
    <form className="form-control">
      <h1 className="heading">Checkout</h1>
      <div className="input-control">
        <label htmlFor="username">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="input-control">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="input-control">
        <label htmlFor="address">Address</label>
        <input type="address" name="address" id="address" />
      </div>
      <div>
        <button className="btn-login">Checkout</button>
      </div>
    </form>
  )
}

export default Checkout