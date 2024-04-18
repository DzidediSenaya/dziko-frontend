import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../../src/theme.js';

const ContactForm = () => {
    const formRef = useRef();
    const [submitted, setSubmitted] = useState(false);

    const serviceId = 'service_rs791jj';
    const templateId = 'template_wsuwkkf';
    const publicKey = 'QXEJOQ0_JmeGAKK4Z';

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
            console.log('Email sent successfully:', response);
            setSubmitted(true);
            formRef.current.reset(); // Clear the form after submission
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <ThemeProvider theme={theme}>
          <div>
            <Navbar />
            <div className="bg-sky-900 py-4 pt-24"></div>
                <section id="home" className="max-w-3xl mx-auto py-8">
                    <section className="bg-sky-900 py-20 w-full md:w-5/6 mx-auto text-center rounded-md" style={{ padding: "20px" }}> {/* Added padding */}
                        <div className="max-w-md mx-auto px-4" style={{ width: "80%" }}>
                            <h2 className="text-3xl font-semibold mb-8 text-white">Contact Us</h2>
                            <p className="text-xl mb-8 text-white italic">
                                Have questions or want to collaborate? Reach out to us and let's work together
                                to make a positive impact on the environment.
                            </p>
                            {!submitted ? (
                                <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-white">Name</label>
                                        <input type="text" id="name" name="name" className="mt-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 pl-2 pb-2" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-white">Email</label>
                                        <input type="email" id="email" name="email" className="mt-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 pl-2 pb-2" required />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-white">Message</label>
                                        <textarea id="message" name="message" style={{ height: "200px" }} className="mt-2 block w-full rounded-md border-gray-300 focus:border-blue-500 pl-2 focus:ring-blue-500" required></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="bg-white hover:bg-sky-200 text-sky-900 font-bold px-4 py-2 rounded-md transition duration-300">Submit</button>
                                    </div>
                                </form>
                            ) : (
                                <div className="text-blue-500">Thank you for contacting us. We'll get back to you soon!</div>
                            )}
                        </div>
                    </section>
                </section>
                <Footer />
                <div className="bg-blue-900 py-4"></div>
            </div>
        </ThemeProvider>
    );
};

export default ContactForm;
