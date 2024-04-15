import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";
import VolunteerForm from "./volunteer.jsx";


const Support = () => {
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

  return (
    <div>
      <Navbar />
      <div className="bg-blue-700 py-4"></div>
      <section className="py-10" style={{ padding: "0 20px" }}> {/* Added padding */}
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 mt-4 ml-2 lg:text-center">
            Support Our Cause
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="w-full md:w-1/2 mb-12 sm:w-1/3">
              <h3 className="text-xl font-semibold mb-4">Make a Donation</h3>
              <p className="text-l mb-4">
                Your generosity fuels our mission to protect the planet and
                inspire future generations. Please take a moment to express your
                interest in supporting our programs by filling out the form
                below. A member of our team will be in touch with you soon to
                discuss the next steps.
              </p>
              <form
                id="donation-form"
                onSubmit={handleDonationSubmit}
                className="bg-blue-100 p-8 rounded-lg shadow-md"
              >
                <label htmlFor="donor-email" className="block mb-2">
                  Your Email Address:
                </label>
                <input
                  type="email"
                  id="donor-email"
                  name="email"
                  value={donorEmail}
                  onChange={handleEmailChange}
                  required
                  className="w-full px-4 py-2 mb-4 border rounded-md"
                />
                <label htmlFor="donation-amount" className="block mb-2">
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
                    email={donorEmail} // Use donor's email dynamically
                    amount={Number(donationAmount) * 100}
                    currency="GHS" // Set currency to GHS
                    publicKey={paystackPublicKey}
                    onSuccess={handlePaymentSuccess}
                    onClose={handlePaymentClose}
                    className="donate-button" // Add a class for styling
                  >
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md cursor-pointer">Donate</button>
                  </PaystackButton>
                )}

                {paymentSuccess && (
                  <p className="text-sky-900">Thank you for your donation!</p>
                )}
              </form>
            </div>
            <div className="w-full md:w-1/2 sm:1/3">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Support;
