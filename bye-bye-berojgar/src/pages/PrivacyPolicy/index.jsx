
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .privacy-page {
          min-height: 100vh;
          background: #f6f8fb;
          color: #1f2937;
          font-family: Inter, Arial, Helvetica, sans-serif;
          line-height: 1.75;
        }

        .privacy-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          padding: 50px 20px 70px;
        }

        .privacy-header {
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          border-radius: 24px;
          padding: 45px 35px;
          margin-bottom: 28px;
          box-shadow: 0 15px 40px rgba(37, 99, 235, 0.18);
        }

        .privacy-header h1 {
          margin: 0 0 10px;
          font-size: 38px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .privacy-header p {
          margin: 7px 0;
          font-size: 16px;
          opacity: 0.95;
        }

        .effective-date {
          display: inline-block;
          margin-top: 14px;
          padding: 7px 13px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.15);
          font-size: 14px;
        }

        .privacy-card {
          background: white;
          border-radius: 20px;
          padding: 32px;
          margin-bottom: 20px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 5px 20px rgba(15, 23, 42, 0.05);
        }

        .privacy-card h2 {
          margin: 0 0 16px;
          color: #111827;
          font-size: 23px;
          font-weight: 750;
        }

        .privacy-card h3 {
          margin: 24px 0 10px;
          color: #374151;
          font-size: 17px;
        }

        .privacy-card p {
          margin: 0 0 14px;
          font-size: 15.5px;
          color: #4b5563;
        }

        .privacy-card ul {
          margin: 8px 0 16px;
          padding-left: 22px;
          color: #4b5563;
        }

        .privacy-card li {
          margin: 7px 0;
          font-size: 15.5px;
        }

        .highlight {
          background: #eff6ff;
          border-left: 4px solid #2563eb;
          padding: 17px 18px;
          border-radius: 10px;
          margin: 18px 0;
          color: #374151;
        }

        .warning {
          background: #fff7ed;
          border-left: 4px solid #f97316;
          padding: 17px 18px;
          border-radius: 10px;
          margin: 18px 0;
          color: #374151;
        }

        .contact-box {
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 20px;
          margin-top: 15px;
        }

        .contact-box strong {
          color: #111827;
        }

        .email {
          color: #2563eb;
          font-weight: 600;
          text-decoration: none;
        }

        .email:hover {
          text-decoration: underline;
        }

        .privacy-footer {
          text-align: center;
          color: #6b7280;
          font-size: 14px;
          padding-top: 15px;
        }

        @media (max-width: 700px) {
          .privacy-wrapper {
            padding: 25px 14px 45px;
          }

          .privacy-header {
            padding: 30px 22px;
            border-radius: 18px;
          }

          .privacy-header h1 {
            font-size: 29px;
          }

          .privacy-card {
            padding: 22px 19px;
            border-radius: 16px;
          }

          .privacy-card h2 {
            font-size: 20px;
          }

          .privacy-card p,
          .privacy-card li {
            font-size: 15px;
          }
        }
      `}</style>

      <main className="privacy-wrapper">

        {/* Header */}
        <header className="privacy-header">
          <h1>Privacy Policy</h1>
          <p><strong>ByeBye Berojgar</strong></p>
          <p>
            Your privacy matters to us. This policy explains how information
            may be handled when you use our application and website.
          </p>

          <span className="effective-date">
            Effective Date: August 2026
          </span>
        </header>

        {/* 1 */}
        <section className="privacy-card">
          <h2>1. Introduction</h2>

          <p>
            ByeBye Berojgar ("we", "us", "our", or "the App") is an
            educational platform designed to help students and government
            job-exam aspirants with exam preparation, mock tests, practice
            questions, educational resources, and learning assistance.
          </p>

          <p>
            This Privacy Policy explains what information may be collected,
            processed, used, stored, or shared when you access or use
            ByeBye Berojgar.
          </p>

          <div className="highlight">
            <strong>Current application status:</strong> ByeBye Berojgar
            currently does not require users to create an account or log in
            to use its basic educational and test features.
          </div>
        </section>

        {/* 2 */}
        <section className="privacy-card">
          <h2>2. Information We Collect</h2>

          <p>
            We aim to collect only information that is reasonably necessary
            for providing and improving the educational services.
          </p>

          <h3>Information Provided by Users</h3>

          <ul>
            <li>Questions or text voluntarily entered into educational features</li>
            <li>Answers submitted during mock tests and quizzes</li>
            <li>Feedback, suggestions, or messages voluntarily submitted by users</li>
            <li>Name or contact information, where voluntarily provided</li>
          </ul>

          <h3>Test and Performance Information</h3>

          <p>
            When you use mock tests, quizzes, or practice features, the
            application may process information related to your use of those
            features, such as:
          </p>

          <ul>
            <li>Questions attempted</li>
            <li>Answers selected</li>
            <li>Correct and incorrect answers</li>
            <li>Scores and marks</li>
            <li>Test completion information</li>
            <li>Practice and performance information</li>
          </ul>

          <h3>Technical Information</h3>

          <p>
            Certain technical information may be processed automatically
            where necessary for application functionality, security, and
            troubleshooting. This may include:
          </p>

          <ul>
            <li>Device type and operating system</li>
            <li>Application version</li>
            <li>Browser or WebView information</li>
            <li>Crash or diagnostic information</li>
            <li>General technical usage information</li>
          </ul>
        </section>

        {/* 3 */}
        <section className="privacy-card">
          <h2>3. How We Use Information</h2>

          <p>
            Information processed through ByeBye Berojgar may be used for
            the following purposes:
          </p>

          <ul>
            <li>Providing educational content and learning features</li>
            <li>Providing mock tests, quizzes, and practice questions</li>
            <li>Calculating and displaying test results</li>
            <li>Providing performance analysis</li>
            <li>Providing AI-powered educational assistance</li>
            <li>Improving application features and user experience</li>
            <li>Diagnosing technical issues and application crashes</li>
            <li>Maintaining application security and reliability</li>
            <li>Preventing misuse, fraud, abuse, or unauthorized activity</li>
            <li>Complying with applicable laws and legal obligations</li>
          </ul>
        </section>

        {/* 4 */}
        <section className="privacy-card">
          <h2>4. AI-Powered Educational Features</h2>

          <p>
            ByeBye Berojgar may provide AI-powered educational features to
            assist users with questions, explanations, practice material,
            and other learning-related activities.
          </p>

          <p>
            When you submit text or other content to an AI-powered feature,
            the submitted information may be transmitted to the relevant
            AI service provider in order to generate the requested response.
          </p>

          <div className="warning">
            <strong>Please note:</strong> Users should avoid submitting
            passwords, financial information, government identification
            numbers, or other unnecessary sensitive personal information
            into AI prompts or free-text fields.
          </div>

          <p>
            AI service providers may process submitted information according
            to their own privacy policies, terms, and applicable requirements.
          </p>
        </section>

        {/* 5 */}
        <section className="privacy-card">
          <h2>5. Third-Party Services</h2>

          <p>
            ByeBye Berojgar may use third-party technology providers to host,
            operate, secure, maintain, or provide specific functionality of
            the application and website.
          </p>

          <p>
            Depending on the application version and enabled features, these
            services may include hosting providers, database services,
            AI service providers, security services, and other infrastructure
            providers.
          </p>

          <p>
            Third-party providers may process information according to their
            own privacy policies and applicable terms.
          </p>

          <div className="highlight">
            <strong>Advertising status:</strong> Advertising is not currently
            enabled in the ByeBye Berojgar application at the time this policy
            is published. If advertising services are introduced in a future
            version, this Privacy Policy and the application's Google Play
            Data Safety information may be updated accordingly.
          </div>
        </section>

        {/* 6 */}
        <section className="privacy-card">
          <h2>6. Information Sharing</h2>

          <p>
            We do not sell or rent users' personal information for monetary
            gain.
          </p>

          <p>
            Information may be shared with or processed by third-party service
            providers only when reasonably necessary to operate or provide
            specific functionality of ByeBye Berojgar.
          </p>

          <p>This may include:</p>

          <ul>
            <li>AI service providers for requested AI functionality</li>
            <li>Hosting and infrastructure providers</li>
            <li>Security and technical service providers</li>
            <li>Government or legal authorities where required by law</li>
          </ul>
        </section>

        {/* 7 */}
        <section className="privacy-card">
          <h2>7. Cookies, Local Storage and Similar Technologies</h2>

          <p>
            The website or application may use cookies, local storage,
            session storage, device storage, or similar technologies where
            required for functionality and user experience.
          </p>

          <p>These technologies may be used for purposes such as:</p>

          <ul>
            <li>Saving user preferences</li>
            <li>Maintaining application functionality</li>
            <li>Saving certain test or practice-related information</li>
            <li>Improving application performance</li>
            <li>Supporting security and technical functionality</li>
          </ul>
        </section>

        {/* 8 */}
        <section className="privacy-card">
          <h2>8. Data Security</h2>

          <p>
            We use reasonable technical and organizational measures designed
            to protect information against unauthorized access, misuse,
            alteration, disclosure, or destruction.
          </p>

          <p>
            Where applicable, information transmitted between the application
            and our servers may be protected using HTTPS/TLS encryption and
            other reasonable security controls.
          </p>

          <p>
            However, no method of internet transmission or electronic storage
            can be guaranteed to be completely secure.
          </p>
        </section>

        {/* 9 */}
        <section className="privacy-card">
          <h2>9. Data Retention</h2>

          <p>
            Information is retained only for as long as reasonably necessary
            to provide services, maintain application functionality, improve
            our services, resolve technical issues, prevent misuse, or comply
            with applicable legal obligations.
          </p>

          <p>
            ByeBye Berojgar currently does not require users to create a
            personal account for its basic services. Therefore, we do not
            maintain a traditional user-account database for users who simply
            use the application without creating an account.
          </p>

          <p>
            Information stored locally on a user's device may remain until
            it is cleared by the user, application, or operating system.
          </p>

          <p>
            Information processed independently by third-party service
            providers may be retained according to their respective policies.
          </p>
        </section>

        {/* 10 */}
        <section className="privacy-card">
          <h2>10. Account and Data Deletion</h2>

          <p>
            ByeBye Berojgar currently does not provide user account
            registration or login for its basic features. As a result,
            there is currently no traditional personal account that users
            can delete through an in-app account deletion feature.
          </p>

          <p>
            If you have voluntarily provided personal information to us and
            would like to request its deletion, you may contact us using the
            email address provided in the Contact Us section below.
          </p>

          <p>
            We will review valid requests and handle them subject to applicable
            legal, security, fraud-prevention, and record-retention
            requirements.
          </p>

          <p>
            Information stored only on the user's device may generally be
            removed by clearing the application's data or uninstalling the
            application, subject to information independently retained by
            third-party services.
          </p>
        </section>

        {/* 11 */}
        <section className="privacy-card">
          <h2>11. Children's Privacy</h2>

          <p>
            ByeBye Berojgar is an educational application intended for
            students and learners.
          </p>

          <p>
            We do not knowingly request unnecessary personal information
            from children.
          </p>

          <p>
            Users should avoid entering unnecessary personal or sensitive
            information into AI prompts, feedback forms, or other free-text
            fields.
          </p>

          <p>
            If a parent or guardian believes that a child has provided
            personal information to us inappropriately, they may contact us
            using the contact information below.
          </p>
        </section>

        {/* 12 */}
        <section className="privacy-card">
          <h2>12. Third-Party Websites and External Links</h2>

          <p>
            ByeBye Berojgar may contain links to external websites,
            educational resources, or third-party services.
          </p>

          <p>
            We are not responsible for the privacy practices, security,
            content, or policies of third-party websites or services.
          </p>

          <p>
            Users are encouraged to review the privacy policies of external
            services before providing personal information to them.
          </p>
        </section>

        {/* 13 */}
        <section className="privacy-card">
          <h2>13. International Data Processing</h2>

          <p>
            Some third-party service providers used by ByeBye Berojgar may
            process or store information on servers located outside the
            user's country of residence.
          </p>

          <p>
            Where applicable, information may therefore be transferred,
            processed, or stored in other countries in accordance with
            applicable laws and the privacy practices of those service
            providers.
          </p>
        </section>

        {/* 14 */}
        <section className="privacy-card">
          <h2>14. Legal Compliance</h2>

          <p>
            We may access, preserve, use, or disclose information where
            reasonably necessary to:
          </p>

          <ul>
            <li>Comply with applicable laws and regulations</li>
            <li>Respond to lawful governmental or legal requests</li>
            <li>Protect the rights, property, or safety of users or others</li>
            <li>Detect or prevent fraud, abuse, or security incidents</li>
            <li>Protect and maintain the security of our services</li>
          </ul>
        </section>

        {/* 15 */}
        <section className="privacy-card">
          <h2>15. Changes to This Privacy Policy</h2>

          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our application, features, technologies,
            third-party services, or applicable legal requirements.
          </p>

          <p>
            When changes are made, the revised Privacy Policy will be
            published on this page together with an updated effective date.
          </p>
        </section>

        {/* 16 */}
        <section className="privacy-card">
          <h2>16. Contact Us</h2>

          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the handling of information through ByeBye
            Berojgar, please contact us.
          </p>

          <div className="contact-box">
            <p>
              <strong>App Name:</strong> ByeBye Berojgar
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a
                className="email"
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

        <div className="privacy-footer">
          © 2026 ByeBye Berojgar. All rights reserved.
        </div>

      </main>
    </div>
  );
};

export default PrivacyPolicy;

