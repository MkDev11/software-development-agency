"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState("");

  function isValidEmail(email: string): boolean {
    // Regular expression for validating email addresses
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function isEmpty(str: string): boolean {
    return str.trim().length === 0;
  }

  const sendEmail = async (event) => {
    event.preventDefault()

    if (!isValidEmail(email)) {
      console.log('Invalid Email')
      return ;
    }
    if (isEmpty(name) || isEmpty(email) || isEmpty(message)) {
      console.log('[Empty...]')
      return;
    }

    const userData : {
      from_email: string,
      from_name: string,
      message: string,
    } = {
      from_email: email,
      from_name: name,
      message: message,
    };

    emailjs.init("kBhxn_qVut0crV7nb");
    try {
      await emailjs.send("service_y0hgghf", "template_f4zknnc", userData);
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setName("")
    setEmail("")
    setMessage("")
  };

  return (
    <section id="contact" className="overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mb-12 w-full rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button onClick = {(e) => sendEmail(e)} className="rounded-sm bg-primary px-16 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
