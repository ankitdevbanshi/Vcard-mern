import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import NotificationContext from "../store/notification-context";
import Notification from "./Notification";

function ContactForm() {
  const [isNotification, setIsNotification] = useState({
    show: false,
    message: "",
    status: undefined,
  });

  useEffect(() => {
    if (isNotification.show) {
      setTimeout(() => {
        setIsNotification((prev) => {
          return {
            show: false,
            message: "",
            status: undefined,
          };
        });
      }, 8000);
    }
  }, [isNotification]);

  const sendReq = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("https://vcard-fmlz.onrender.com/contactus", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Response:", data);
        setIsNotification((prev) => {
          return {
            show: true,
            message: data.message,
            status: "success",
          };
        });
      })
      .catch((error) => {
        setIsNotification((prev) => {
          return {
            show: true,
            message: error.message,
            status: "error",
          };
        });
        console.error("Error:", error);
        // Handle any errors that occurred during the request
      });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      sendReq(values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "name is required";
      }
      if (!values.email) {
        errors.email = "email is required";
      } else if (
        /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/i.test(
          values.email
        )
      ) {
        errors.email = "invalid email";
      }

      return errors;
    },
  });
  let ctx = useContext(NotificationContext);
  console.log("ctx ", ctx);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mt-16 flex flex-col gap-4 items-center"
      action=""
    >
      <input
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.name}
        className="rounded-md border border-gray-600 py-2 px-4"
        name="name"
        type="text"
        placeholder="Name"
      />

      <p
        className={`${
          formik.touched.name && formik.errors.name ? "" : "invisible"
        } text-red-600`}
      >
        {formik.errors.name}
      </p>

      <input
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
        className="rounded-md border border-gray-600 py-2 px-4"
        name="email"
        type="email"
        placeholder="email"
      />
      {formik.touched.email && formik.errors.email ? (
        <p className="text-red-600">{formik.errors.email}</p>
      ) : null}
      <textarea
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.message}
        className="rounded-md border border-gray-600 py-2 px-4"
        name="message"
        placeholder="message"
        cols="30"
        rows="5"
      ></textarea>

      <button
        type="submit"
        className="rounded-md py-2 px-4 bg-gray-600 text-white"
      >
        send
      </button>
      {isNotification.show
        ? ReactDOM.createPortal(
            <Notification
              message={isNotification.message}
              status={isNotification.status}
            />,
            document.getElementById("notification")
          )
        : null}
      {ReactDOM.create}
    </form>
  );
}

export default ContactForm;
