
import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .contact-page {
          min-height: 100vh;
          background: #f6f8fb;
          color: #1f2937;
          font-family: Inter, Arial, Helvetica, sans-serif;
          line-height: 1.7;
        }

        .contact-wrapper {
          max-width: 900px;
          margin: 0 auto;
          padding: 50px 20px 70px;
        }

        .contact-hero {
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          padding: 50px 35px;
          border-radius: 24px;
          text-align: center;
          margin-bottom: 25px;
          box-shadow: 0 15px 40px rgba(37, 99, 235, 0.18);
        }

        .contact-hero h1 {
          margin: 0 0 12px;
          font-size: 40px;
          font-weight: 800;
        }

        .contact-hero p {
          max-width: 650px;
          margin: 0 auto;
          font-size: 16px;
          opacity: 0.95;
        }

        .contact-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          padding: 32px;
          margin-bottom: 20px;
          box-shadow: 0 5px 20px rgba(15, 23, 42, 0.05);
        }

        .contact-card h2 {
          margin: 0 0 14px;
          color: #111827;
          font-size: 23px;
        }

        .contact-card p {
          color: #4b5563;
          font-size: 15.5px;
          margin: 0 0 12px;
        }

        .contact-info {
          display: grid;
          gap: 14px;
          margin-top: 20px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 17px;
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
        }

        .contact-icon {
          width: 44px;
          height: 44px;
          min-width: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eff6ff;
          color: #2563eb;
          font-size: 19px;
          font-weight: 700;
        }

        .contact-item-label {
          font-size: 13px;
          color: #6b7280;
          margin-bottom: 2px;
        }

        .contact-item-value {
          font-size: 15.5px;
          font-weight: 600;
          color: #111827;
        }

        .contact-link {
          color: #2563eb;
          text-decoration: none;
        }

        .contact-link:hover {
          text-decoration: underline;
        }

        .response-box {
          background: #eff6ff;
          border-left: 4px solid #2563eb;
          border-radius: 10px;
          padding: 18px;
          color: #374151;
          margin-top: 17px;
        }

        .note-box {
          background: #fff7ed;
          border-left: 4px solid #f97316;
          border-radius: 10px;
          padding: 18px;
          color: #374151;
          margin-top: 17px;
        }

        .note-box strong,
        .response-box strong {
          color: #111827;
        }

        .contact-footer {
          text-align: center;
          color: #6b7280;
          font-size: 14px;
          padding-top: 10px;
        }

        @media (max-width: 700px) {
          .contact-wrapper {
            padding: 25px 14px 45px;
          }

          .contact-hero {
            padding: 38px 22px;
            border-radius: 18px;
          }

          .contact-hero h1 {
            font-size: 30px;
          }

          .contact-hero p {
            font-size: 15px;
          }

          .contact-card {
            padding: 22px 19px;
            border-radius: 16px;
          }

          .contact-card h2 {
            font-size: 20px;
          }

          .contact-item {
            align-items: flex-start;
          }
        }
      `}</style>

      <main className="contact-wrapper">

        {/* Hero */}
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>
            We are here to help with your questions, feedback, or issues
            related to ByeBye Berojgar.
          </p>
        </section>

        {/* Support */}
        <section className="contact-card">
          <h2>Support & Assistance</h2>

          <p>
            If you experience a technical issue, have a question about an
            educational feature, find incorrect information, or want to share
            feedback about the application, please contact us.
          </p>

          <p>
            We appreciate your feedback and use it to improve the ByeBye
            Berojgar experience.
          </p>
        </section>

        {/* Contact Information */}
        <section className="contact-card">
          <h2>Contact Information</h2>

          <div className="contact-info">

            <div className="contact-item">
              <div className="contact-icon">@</div>

              <div>
                <div className="contact-item-label">
                  Email
                </div>

                <div className="contact-item-value">
                  <a
                    className="contact-link"
                    href="mailto:shopsmartindia78@gmail.com"
                  >
                    shopsmartindia78@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Response Time */}
        <section className="contact-card">
          <h2>Response Time</h2>

          <p>
            We generally try to respond to genuine support and feedback
            requests within <strong>24–48 hours</strong> on working days.
          </p>

          <div className="response-box">
            <strong>Tip:</strong> Please provide enough information about
            your issue so that we can understand and address it more
            efficiently.
          </div>
        </section>

        {/* Important Note */}
        <section className="contact-card">
          <h2>Important Information</h2>

          <div className="note-box">
            <strong>For faster support:</strong> Please mention the name of
            the feature you were using, describe the problem clearly, and
            include screenshots or other relevant details when possible.
            Please do not send passwords, OTPs, payment credentials, or other
            sensitive information by email.
          </div>
        </section>

        {/* Footer */}
        <div className="contact-footer">
          © 2026 ByeBye Berojgar. All rights reserved.
        </div>

      </main>
    </div>
  );
};

export default ContactUs;

