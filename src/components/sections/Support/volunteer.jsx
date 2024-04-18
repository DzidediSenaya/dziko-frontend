import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../../src/theme.js';

const VolunteerForm = () => {
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
            <div style={{ padding: "20px" }}>
                {!submitted ? (
                    <form ref={formRef} onSubmit={handleSubmit} className="bg-sky-900 p-8 rounded-lg shadow-md">
                        <label htmlFor="volunteer-name" className="block mb-2 text-white">Your Name:</label>
                        <input type="text" id="volunteer-name" name="name" required className="w-full px-4 py-2 mb-4 border rounded-md" />
                        <label htmlFor="volunteer-email" className="block mb-2 text-white">Email Address:</label>
                        <input type="email" id="volunteer-email" name="email" required className="w-full px-4 py-2 mb-4 border rounded-md" />
                        <label htmlFor="volunteer-message" className="block mb-2 text-white">Briefly describe your motivations:</label>
                        <textarea id="volunteer-message" name="message" rows="4" required className="w-full px-4 py-2 mb-4 border rounded-md"></textarea>
                        <button type="submit" className="w-full bg-white hover:bg-sky-200 text-sky-900 font-bold py-2 px-4 rounded-md cursor-pointer">Submit</button>
                    </form>
                ) : (
                    <p className="text-green-500">Thank you for volunteering!</p>
                )}
            </div>
        </ThemeProvider>
    );
};

export default VolunteerForm;

