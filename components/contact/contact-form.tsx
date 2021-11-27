import { useState, useRef, FormEvent, useEffect } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

interface formdata {
  email: string;
  name: string;
  message: string;
}

const ContactForm = () => {
  const [requestStatus, setRequestStatus] = useState<string | null>();
  const [RequestError, setRequestError] = useState<string>();

  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);

  const sendMessage = (message: formdata) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  };

  const formSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;

    if (
      !name ||
      name.trim() === "" ||
      !email ||
      !email.includes("@") ||
      !message ||
      message.trim() === ""
    ) {
      return;
    }

    setRequestStatus("pending");
    try {
      await sendMessage({ name, email, message });
      setRequestStatus("success");
    } catch (err) {
      setRequestError("Something went wrong");
      setRequestStatus("error");
    }
  };

  let notification;

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "success",
      message: " message send successfully",
    };
  }
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "sending message",
      message: "Your message is on its way",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error",
      message: RequestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How Can I Help You ?</h1>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input ref={nameRef} type="text" name="name" id="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea ref={messageRef} name="message" id="message" cols={5} />
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>

      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </section>
  );
};

export default ContactForm;
