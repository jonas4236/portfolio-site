import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    function clear() {
      setName("");
      setEmail("");
      setMessage("");
    }

    if (!name && !email && !name) {
      return Swal.fire({
        title: "Cannot Sending Contact",
        text: "Please fill out this information in all these this form. Thank you.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      emailjs
        .send(
          process.env.YOUR_SERVICE_ID!,
          process.env.YOUR_TEMPLATE_ID!,
          {
            from_name: name,
            to_name: "Thanakorn",
            from_email: email,
            to_email: "bossview59@gmail.com",
            message: message,
          },
          {
            publicKey: process.env.YOUR_PUBLIC_KEY,
          }
        )
        .then(
          (response) => {
            // console.log("SUCCESS!", response.status, response.text);
            if (response.status === 200) {
              setLoading(false);
              clear();
              Swal.fire({
                title: "Sending Contact Successfully",
                text: "Contact message sent successfully, I'll get your back as soon as possible :)",
                icon: "success",
                confirmButtonText: "OK",
              });
            }
          },
          (err) => {
            console.log("FAILED:", err);
            Swal.fire({
              title: "Cannot Sending Contact",
              text: "Please fill out this information in all these this form. Thank you.",
              icon: "error",
              confirmButtonText: "OK",
            });
          }
        );
    }
  };

  // console.log("name:", name);
  // console.log("email:", email);
  // console.log("message:", message);

  return (
    <>
      <div
        id="#contact"
        className="w-full mx-auto mt-24 flex flex-col items-center"
      >
        <h3 className="text-[24px] font-bold">
          <span className="text-[#07ABFD] text-[24px] mr-1">&lt;</span>
          Contact
          <span className="text-[#07ABFD] text-[24px] ml-2">/&gt;</span>
        </h3>
        <h1 className="text-[36px] font-bold">Contact Me</h1>
        <div className="mt-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col bg-[#151B2D] p-4 rounded-lg"
          >
            <div className="flex flex-col p-4 ">
              <label className="mb-1" htmlFor="username">
                Your Name
              </label>
              <input
                className="py-2 px-4 xl:w-[700px] lg:w-[700px] md:w-[700px] sm:w-[500px] max-[639px]:w-[300px] bg-[#293352] rounded-lg"
                type="text"
                name="name"
                value={name}
                placeholder="What's your name?"
                onChange={(e) => setName((e.target as HTMLInputElement).value)}
              />
              <label className="mt-4 mb-1" htmlFor="username">
                Your Email
              </label>
              <input
                className="py-2 px-4 xl:w-[700px] lg:w-[700px] md:w-[700px] sm:w-[500px] max-[639px]:w-[300px] bg-[#293352] rounded-lg"
                type="text"
                name="email"
                value={email}
                placeholder="What's your email?"
                onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
              />
              <label className="mt-4 mb-1" htmlFor="username">
                Your Message
              </label>
              <textarea
                className="resize-none h-[300px] mb-1 py-2 px-4 xl:w-[700px] lg:w-[700px] md:w-[700px] sm:w-[500px] max-[639px]:w-[300px] bg-[#293352] rounded-lg"
                name="message"
                value={message}
                placeholder="Send message to me"
                onChange={(e) =>
                  setMessage((e.target as HTMLTextAreaElement).value)
                }
              />
              <div className="flex justify-end mt-4">
                <button className="py-2 px-8 rounded-lg bg-green-700 hover:bg-green-900 hover:text-white/80 flex">
                  Send
                  {loading && (
                    <span className="flex justify-center items-center ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z"
                        >
                          <animateTransform
                            attributeName="transform"
                            dur="0.75s"
                            repeatCount="indefinite"
                            type="rotate"
                            values="0 12 12;360 12 12"
                          />
                        </path>
                      </svg>
                    </span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
