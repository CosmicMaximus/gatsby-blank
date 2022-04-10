import React from "react";
import emailjs from "emailjs-com";
import { contact } from "../assets/maconData";

const Form = () => {
  const [errors, setErrors] = React.useState({
    name: "",
    subject: "",
    phone: "",
    email: "",
  });

  const [formState, setFormState] = React.useState(0);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    switch (name) {
      case "name":
        errors.name = value.length === 0 ? "Name is not empty" : "";
        break;
      case "subject":
        errors.subject = value.length < 5 ? "Subject must be 5 characters" : "";
        break;
      case "phone":
        errors.phone = value.length < 5 ? "phone is not empty" : "";
        break;
      case "email":
        errors.email = value.length < 5 ? "Subject is not empty" : "";
        let appos = value.indexOf("@");
        let dots = value.lastIndexOf(".");

        if (appos < 1 || dots - appos < 2) {
          errors.email = "please enter valid email";
        }

        break;

      default:
        break;
    }
    setErrors({ ...errors, [name]: value });
  };

  const sendConversionEvent = () => {
    console.log("attempting gtag call");
    window.gtag("event", "conversion", {
      send_to: "AW-389792692/4hD6CIfvnIUDELSH77kB",
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m1vlzvm",
        "template_7wwc9hz",
        e.target,
        "user_l3ZdogmG7uEZ0ps1rjV6S"
      )

      .then(
        (result) => {
          console.log(result.text);
          sendConversionEvent();
          setFormState(1);
          // alert("form is valid");
        },
        (error) => {
          console.log(error.text);
          setFormState(2);
          // alert("form is invalid");
        }
      );
  };

  switch (formState) {
    case 2:
      return (
        <div>
          We're sorry, our messaging system failed, please email us directly at{" "}
          {contact.email} or call {contact.phone}.
        </div>
      );

    case 1:
      //<!-- Event snippet for Schedule Your Online Consultation conversion page -->
      return (
        <div>
          Thank you, your message was delivered succesfully, we will be in
          contact soon.
        </div>
      );

    case 0:
    default:
      return (
        <form onSubmit={submitHandler} className="form_class">
          <div className="row">
            <div className="col-lg-6">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Your Name*"
                onChange={handleChange}
              />
              <p>{errors.name}</p>
            </div>
            <div className="col-lg-6">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Your Email*"
                onChange={handleChange}
              />
              <p>{errors.email}</p>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                placeholder="Subject*"
                onChange={handleChange}
              />
              <p>{errors.subject}</p>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Phone*"
                onChange={handleChange}
              />
              <p>{errors.phone}</p>
            </div>
          </div>
          <textarea
            name="message"
            id="message"
            className="form-control"
            rows="6"
            placeholder="Your Message ..."
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn send_btn theme_btn">
            Send Message
          </button>
        </form>
      );
  }
};

export default Form;
