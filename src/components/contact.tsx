import React, { useState } from 'react';

const Contact: React.FC = () => {
  // State to hold form values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Encode message to ensure new lines and special characters work well in mailto URL
    const encodedMessage = message.replaceAll('\n', '%0D%0A');

    // Construct mailto URL
    const mailtoLink = `mailto:amhfrfr@gmail.com?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(encodedMessage)}%0D%0A%0D%0AContact me:%0D%0APhone: ${encodeURIComponent(phone)}%0D%0AEmail: ${encodeURIComponent(email)}`;

    // Open mailto link
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="Contact"
      className="flex items-center flex-col justify-center min-h-screen bg-black gap-16"
    >
      <div>
        <h1 className="font-extrabold border-b-4 text-6xl text-white border-b-[#9BEC00] pt-12">
          Contact Me
        </h1>
      </div>

      <div className="max-w-6xl w-full mx-auto bg-black shadow-lg lg:bg-gray-800 rounded-3xl overflow-hidden text-white">
        <div className="lg:flex">
          {/* Left side: Image */}
          <div className="lg:block hidden">
            <img
              className="object-cover w-full h-full"
              src="./Contact_image.png"
              alt="Contact"
            />
          </div>

          {/* Right side: Contact form */}
          <div className="p-8 lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4" id="form">
              {/* Name input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#9BEC00]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9BEC00] bg-gray-900"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#9BEC00]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9BEC00] bg-gray-900"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Phone number input */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#9BEC00]"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9BEC00] bg-gray-900"
                  placeholder="Your Phone Number"
                />
              </div>

              {/* Message input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#9BEC00]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9BEC00] bg-gray-900"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  id="submitBtn"
                  className="w-full text-white px-4 py-2 hover:border-b-4 hover:border-b-[#9BEC00] transition-all duration-300 font-bold text-xl"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
