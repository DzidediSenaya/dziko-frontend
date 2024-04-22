import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";
import VolunteerForm from "./volunteer.jsx";
import { FaHandHolding, FaDonate } from 'react-icons/fa';

const Support = () => {
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const paystackPublicKey = process.env.REACT_APP_API;

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission here
  };

  const handleAmountChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleEmailChange = (e) => {
    setDonorEmail(e.target.value);
  };

  const handlePaymentSuccess = (response) => {
    setPaymentSuccess(true);
    // Handle successful payment here
  };

  const handlePaymentClose = () => {
    // Handle payment closure here
  };

  const toggleDonationForm = () => {
    setShowDonationForm(!showDonationForm);
    setShowVolunteerForm(false); // Hide volunteer form when toggling donation form
  };

  const toggleVolunteerForm = () => {
    setShowVolunteerForm(!showVolunteerForm);
    setShowDonationForm(false); // Hide donation form when toggling volunteer form
  };

  return (
    <div>
      <Navbar />
      <div className="bg-indigo-900 py-4 "></div>
      <section className="py-10" style={{ padding: "0 20px" }}>
        <div className="container mx-auto">
          <div className="relative flex items-center justify-center">
            <h2 className="text-4xl font-bold mb-8 mt-4 lg:text-center pt-32 text-indigo-900 mb-8 mr-16clea">
              Support Our Cause
            </h2>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="mb-12 relative">
              <FaDonate className="text-5xl text-indigo-900 ml-2" />
              <h3 className="text-xl font-semibold mb-4 text-indigo-900">Make a Donation</h3>
              <p className="text-l italic mb-4">
                Your generosity fuels our mission to protect the planet and
                inspire future generations. Please take a moment to express
                your interest in supporting our programs by filling out the form
                below. A member of our team will be in touch with you soon to
                discuss the next steps.
              </p>
              {showDonationForm && (
                <div>
                  <form
                    id="donation-form"
                    onSubmit={handleDonationSubmit}
                    className="bg-indigo-900 p-8 rounded-lg shadow-md"
                  >
                    <label
                      htmlFor="donor-email"
                      className="block mb-2 text-white"
                    >
                      Your Email Address:
                    </label>
                    <input
                      type="email"
                      id="donor-email"
                      name="email"
                      value={donorEmail}
                      onChange={handleEmailChange}
                      required
                      className="w-full px-4 py-2 mb-4 border rounded-md "
                    />
                    <label
                      htmlFor="donation-amount"
                      className="block mb-2 text-white"
                    >
                      Donation Amount (₵):
                    </label>
                    <input
                      type="number"
                      id="donation-amount"
                      name="amount"
                      value={donationAmount}
                      onChange={handleAmountChange}
                      required
                      className="w-full px-4 py-2 mb-4 border rounded-md"
                    />
                    {!paymentSuccess && (
                      <PaystackButton
                        email={donorEmail}
                        amount={Number(donationAmount) * 100}
                        currency="GHS"
                        publicKey={paystackPublicKey}
                        onSuccess={handlePaymentSuccess}
                        onClose={handlePaymentClose}
                        className="donate-button"
                      >
                        <button className="w-full bg-white hover:bg-sky-200 text-indigo-900 font-bold py-2 px-4 rounded-md cursor-pointer">
                          Donate
                        </button>
                      </PaystackButton>
                    )}
                    {paymentSuccess && (
                      <p className="text-white font-bold italic">
                        Thank you for your donation!
                      </p>
                    )}
                  </form>
                </div>
              )}
              <button
                onClick={toggleDonationForm}
                className="bg-indigo-900 hover:bg-indigo-400 text-white px-4 py-2 rounded-md transition duration-300 mt-2"
              >
                {showDonationForm ? "Hide Donation Form" : "Show Donation Form"}
              </button>
            </div>
            <div className="mb-12">
              <FaHandHolding className="text-5xl text-indigo-900 ml-2" />
              <h3 className="text-xl font-semibold mb-4 text-indigo-900">Volunteer with Us</h3> 
              <p className="text-l italic mb-10">
                Join us in making a positive impact on the environment by
                volunteering with our team. Your passion and dedication can
                help drive our initiatives forward. Fill out the form below to
                express your interest, and we'll get back to you soon.
              </p>
              {showVolunteerForm && <VolunteerForm />}
              <button
                onClick={toggleVolunteerForm}
                className="bg-indigo-900 hover:bg-indigo-400 text-white px-4 py-2 rounded-md transition duration-300 mt-2 mb-6 "
              >
                {showVolunteerForm ? "Hide Volunteer Form" : "Show Volunteer Form"}
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Support;
