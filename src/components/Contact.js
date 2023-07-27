import { useState } from "react";
import React from "react";

export default function Contact(props) {
  const handleUpBtn = () => {
    console.log("this is clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("converted","sucess");
    document.title="sumit's * Website"

    setInterval(() => {
      document.title="sumit's * Website"
    }, 1500);
    setInterval(() => {
      document.title="sumit's "
    }, 1600);
  };

  const handleOn = (event) => {
    console.log("fired");
    setText(event.target.value);
  };

  // setting default states
  const [text, setText] = useState("Write something");

  return (
    <div>
      <div className="container my-5 ">
        <h1>Contact Us</h1>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Your Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value="mark@example.com"
            ></input>
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
        </form>
        <form className="row g-3 needs-validation" novalidate>
          <div className="col-md-4">
            <label for="validationCustom01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              value="Mark"
              required
            ></input>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label for="validationCustom02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              value="Otto"
              required
            ></input>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label for="validationCustom03" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              value="Mumbai"
              required
            ></input>
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div className="mb-3">
            <div className="mb-3">
              <label
                for="exampleFormControlTextarea1"
                className="form-label"
              ></label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value="please provide feedback"
              ></textarea>
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              ></input>
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={text}
          onChange={handleOn}
        ></textarea>
        <div>
          
          {text.split(" ").length} words and {text.length} character and{" "}
          {0.008 * text.split(" ").length} minute read{" "}
        </div>
        <button className="btn btn-primary" onClick={handleUpBtn}>
          TO Upper Case
        </button>
      </div>
    </div>
  );
}
