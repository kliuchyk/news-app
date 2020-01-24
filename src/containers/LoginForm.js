import React from 'react';

export default function LoginForm() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">User Name</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Log in
      </button>
    </form>
  );
}
