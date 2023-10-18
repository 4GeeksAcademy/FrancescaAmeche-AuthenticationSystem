import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Login = () => {

	return (
		<form className="container my-4">
            <h1>Login</h1>
            <div className="form-group">
                <label className="mt-2" htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label className="mt-2" htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control mt-2" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
	);
};
