import React from "react";

const TermsConditions = () => {
  return (
    <div className="terms-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .terms-page {
          min-height: 100vh;
          background: #f6f8fb;
          color: #1f2937;
          font-family: Inter, Arial, Helvetica, sans-serif;
          line-height: 1.7;
        }

        .terms-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          padding: 50px 20px 70px;
        }

        /* Hero */
        .terms-hero {
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          border-radius: 24px;
          padding: 48px 35px;
          margin-bottom: 28px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(37, 99, 235, 0.18);
        }

        .terms-hero h1 {
          margin: 0 0 12px;
          font-size: 40px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .terms-hero p {
          max-width: 700px;
          margin: 0 auto;
          font-size: 16px;
          line-height: 1.8;
          opacity: 0.95;
        }

        .effective-date {
          display: inline-block;
          margin-top: 16px;
          padding: 7px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.15);
          font-size: 14px;
        }

        /* Cards */
        .terms-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          padding: 32px;
          margin-bottom: 20px;
          box-shadow: 0 5px 20px rgba(15, 23, 42, 0.05);
        }

        .terms-card h2 {
          margin: 0 0 15px;
          color: #111827;
          font-size: 23px;
          font-weight: 750;
        }

        .terms-card p {
          margin: 0 0 14px;
          color: #4b5563;
          font-size: 15.5px;
        }

        .terms-card p:last-child {
          margin-bottom: 0;
        }

        .terms-card ul {
          margin: 8px 0 16px;
          padding-left: 22px;
          color: #4b5563;
        }

        .terms-card li {
          margin: 7px 0;
          font-size: 15.5px;
        }

        /* Highlight */
        .highlight {
          margin-top: 18px;
          padding: 17px 18px;
          background: #eff6ff;
          border-left: 4px solid #2563eb;
          border-radius: 10px;
          color: #374151;
        }

        .warning {
          margin-top: 18px;
          padding: 17px 18px;
          background: #fff7ed;
          border-left: 4px solid #f97316;
          border-radius: 10px;
          color: #374151;
        }

        /* Contact */
        .contact-box {
          margin-top: 18px;
          padding: 20px;
          border-radius: 14px;
          background: #f8fafc;
          border: 1px solid #e5e7eb;
        }

        .contact-link {
          color: #2563eb;
          text-decoration: none;
          font-weight: 600;
        }

        .contact-link:hover {
          text-decoration: underline;
        }

        /* Footer */
        .terms-footer {
          text-align: center;
          color: #6b7280;
          font-size: 14px;
          padding-top: 10px;
        }

        @media (max-width: 700px) {
          .terms-wrapper {
            padding: 25px 14px 45px;
          }

          .terms-hero {
            padding: 36px 22px;
            border-radius: 18px;
          }

          .terms-hero h1 {
            font-size: 30px;
          }

          .terms-hero p {
            font-size: 15px;
          }

          .terms-card {
            padding: 22px 19px;
            border-radius: 16px;
          }

          .terms-card h2 {
            font-size: 20px;
          }

          .terms-card p,
          .terms-card li {
            font-size: 15px;
          }
        }
      `}</style>

      <main className="terms-wrapper">

        {/* Hero */}
        <section className="terms-hero">
          <h1>Terms & Conditions</h1>

          <p>
            Welcome to ByeBye Berojgar. Please read these Terms and
            Conditions carefully before using our application or website.
          </p>

          <span className="effective-date">
            Effective Date: August 2026
          </span>
        </section>

        {/* Introduction */}
        <section className="terms-card">
          <h2>Introduction</h2>

          <p>
            These Terms and Conditions ("Terms") govern your access to and
            use of the ByeBye Berojgar application and website.
          </p>

          <p>
            By accessing or using ByeBye Berojgar, you acknowledge that you
            have read, understood, and agree to be bound by these Terms.
          </p>
        </section>

        {/* 1 */}
        <section className="terms-card">
          <h2>1. Use of the Platform</h2>

          <p>
            ByeBye Berojgar is an educational platform intended to support
            students and competitive-exam aspirants with learning,
            preparation, practice, and self-assessment.
          </p>

          <p>
            You agree to use the application only for lawful purposes and
            in accordance with these Terms.
          </p>

          <ul>
            <li>
              You must not attempt to hack, disrupt, damage, or interfere
              with the application or its services.
            </li>
            <li>
              You must not use the platform for unlawful or fraudulent
              activities.
            </li>
            <li>
              You must not attempt to gain unauthorized access to systems,
              servers, APIs, or data.
            </li>
            <li>
              You must not intentionally introduce malicious code,
              malware, or harmful content.
            </li>
          </ul>
        </section>

        {/* 2 */}
        <section className="terms-card">
          <h2>2. User Accounts</h2>

          <div className="highlight">
            <strong>Current status:</strong> ByeBye Berojgar currently does
            not require users to create an account or log in to use its
            basic features.
          </div>

          <p style={{ marginTop: "18px" }}>
            If account-based functionality is introduced in a future
            version, additional terms relating to account security,
            registration, and account management may apply.
          </p>
        </section>

        {/* 3 */}
        <section className="terms-card">
          <h2>3. Educational Content and Test Results</h2>

          <p>
            ByeBye Berojgar may provide mock tests, practice questions,
            educational resources, explanations, and other exam-preparation
            content.
          </p>

          <p>
            Test scores, answers, explanations, rankings, or other results
            are intended to support learning and self-assessment.
          </p>

          <div className="warning">
            <strong>Important:</strong> Educational content and AI-generated
            responses may contain mistakes or inaccuracies. Users should
            independently verify important information, especially
            examination dates, eligibility requirements, official rules,
            notifications, and other information issued by official
            authorities.
          </div>
        </section>

        {/* 4 */}
        <section className="terms-card">
          <h2>4. AI-Powered Features</h2>

          <p>
            ByeBye Berojgar may provide AI-powered educational features for
            explanations, questions, practice assistance, and other
            learning-related purposes.
          </p>

          <p>
            AI-generated responses are provided for educational assistance
            and should not be considered a guarantee of correctness.
          </p>

          <p>
            Users are responsible for verifying information before relying
            on it for important academic, examination, employment, legal,
            financial, or other decisions.
          </p>
        </section>

        {/* 5 */}
        <section className="terms-card">
          <h2>5. Intellectual Property</h2>

          <p>
            Unless otherwise stated, the ByeBye Berojgar name, branding,
            website design, application interface, original content,
            graphics, text, and software are owned by or licensed to
            ByeBye Berojgar.
          </p>

          <p>
            You may use the platform for personal and lawful educational
            purposes. You may not copy, reproduce, distribute, modify,
            sell, or commercially exploit our proprietary content or
            application without appropriate authorization.
          </p>
        </section>

        {/* 6 */}
        <section className="terms-card">
          <h2>6. User-Submitted Content</h2>

          <p>
            If you voluntarily submit questions, feedback, suggestions, or
            other content through the application, you agree that the
            content should be lawful and should not infringe the rights of
            others.
          </p>

          <ul>
            <li>Do not submit illegal or harmful content.</li>
            <li>Do not submit another person's private information without permission.</li>
            <li>Do not submit malicious code or harmful files.</li>
            <li>Do not use the platform to harass, abuse, or deceive others.</li>
          </ul>
        </section>

        {/* 7 */}
        <section className="terms-card">
          <h2>7. Third-Party Services</h2>

          <p>
            ByeBye Berojgar may depend on third-party services for hosting,
            AI functionality, infrastructure, security, or other technical
            features.
          </p>

          <p>
            Third-party services operate under their own terms and policies.
            ByeBye Berojgar is not responsible for the independent actions,
            availability, policies, or content of third-party services.
          </p>
        </section>

        {/* 8 */}
        <section className="terms-card">
          <h2>8. Availability of the Service</h2>

          <p>
            We aim to keep ByeBye Berojgar available and functional, but we
            do not guarantee that the application or website will always be
            available, uninterrupted, error-free, or free from technical
            problems.
          </p>

          <p>
            Services may occasionally be unavailable because of maintenance,
            updates, technical failures, network problems, security issues,
            or circumstances outside our reasonable control.
          </p>
        </section>

        {/* 9 */}
        <section className="terms-card">
          <h2>9. Limitation of Liability</h2>

          <p>
            To the extent permitted by applicable law, ByeBye Berojgar and
            its operators shall not be liable for indirect, incidental,
            special, consequential, or unforeseeable losses arising from
            the use of, or inability to use, the application or website.
          </p>

          <p>
            Users are responsible for how they use educational information,
            test results, AI-generated responses, and other content provided
            through the platform.
          </p>
        </section>

        {/* 10 */}
        <section className="terms-card">
          <h2>10. Privacy</h2>

          <p>
            Your use of ByeBye Berojgar is also governed by our Privacy
            Policy, which explains how information may be collected,
            processed, used, stored, and shared.
          </p>
        </section>

        {/* 11 */}
        <section className="terms-card">
          <h2>11. Modifications to the Service</h2>

          <p>
            We may add, modify, suspend, or remove features of ByeBye
            Berojgar from time to time in order to improve the application,
            introduce new functionality, address technical issues, or comply
            with legal requirements.
          </p>
        </section>

        {/* 12 */}
        <section className="terms-card">
          <h2>12. Changes to These Terms</h2>

          <p>
            We may update these Terms and Conditions from time to time.
            Updated Terms will be published on this page together with a
            revised effective date.
          </p>

          <p>
            Continued use of ByeBye Berojgar after updated Terms are
            published may constitute acceptance of the revised Terms,
            subject to applicable law.
          </p>
        </section>

        {/* 13 */}
        <section className="terms-card">
          <h2>13. Termination and Restriction of Access</h2>

          <p>
            We reserve the right to restrict, suspend, or terminate access
            to the application or specific features where reasonably
            necessary due to misuse, security concerns, violation of these
            Terms, unlawful activity, or other legitimate operational
            reasons.
          </p>
        </section>

        {/* 14 */}
        <section className="terms-card">
          <h2>14. Governing Law</h2>

          <p>
            These Terms and Conditions shall be governed by and interpreted
            in accordance with the applicable laws of India, subject to
            applicable legal requirements.
          </p>
        </section>

        {/* 15 */}
        <section className="terms-card">
          <h2>15. Contact Us</h2>

          <p>
            If you have questions, concerns, or feedback regarding these
            Terms and Conditions, please contact us.
          </p>

          <div className="contact-box">
            <p>
              <strong>App Name:</strong> ByeBye Berojgar
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a
                className="contact-link"
                href="mailto:shopsmartindia78@gmail.com"
              >
                shopsmartindia78@gmail.com
              </a>
            </p>

            <p>
              <strong>Effective Date:</strong> August 2026
            </p>
          </div>
        </section>

        <div className="terms-footer">
          © 2026 ByeBye Berojgar. All rights reserved.
        </div>

      </main>
    </div>
  );
};

export default TermsConditions;

