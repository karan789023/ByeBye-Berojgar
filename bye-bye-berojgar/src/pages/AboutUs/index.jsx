import React from "react";

const AboutUs = () => {
  return (
    <div className="about-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .about-page {
          min-height: 100vh;
          background: #f6f8fb;
          color: #1f2937;
          font-family: Inter, Arial, Helvetica, sans-serif;
          line-height: 1.7;
        }

        .about-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          padding: 50px 20px 70px;
        }

        /* Hero */
        .about-hero {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          border-radius: 24px;
          padding: 55px 38px;
          margin-bottom: 28px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(37, 99, 235, 0.18);
        }

        .about-hero::before {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          top: -70px;
          right: -50px;
        }

        .about-hero::after {
          content: "";
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          bottom: -60px;
          left: -40px;
        }

        .about-hero-content {
          position: relative;
          z-index: 1;
        }

        .about-hero h1 {
          margin: 0 0 12px;
          font-size: 40px;
          font-weight: 800;
          letter-spacing: -0.7px;
        }

        .about-hero p {
          max-width: 700px;
          margin: 0 auto;
          font-size: 17px;
          line-height: 1.8;
          opacity: 0.95;
        }

        .hero-badge {
          display: inline-block;
          margin-bottom: 18px;
          padding: 7px 15px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.15);
          font-size: 14px;
          font-weight: 600;
        }

        /* Cards */
        .about-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          padding: 32px;
          margin-bottom: 20px;
          box-shadow: 0 5px 20px rgba(15, 23, 42, 0.05);
        }

        .about-card h2 {
          margin: 0 0 15px;
          color: #111827;
          font-size: 24px;
          font-weight: 750;
        }

        .about-card p {
          margin: 0 0 14px;
          color: #4b5563;
          font-size: 15.5px;
        }

        .about-card p:last-child {
          margin-bottom: 0;
        }

        /* Feature Grid */
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 20px;
        }

        .feature-item {
          padding: 18px;
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .feature-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.07);
        }

        .feature-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eff6ff;
          color: #2563eb;
          font-size: 20px;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .feature-item h3 {
          margin: 0 0 6px;
          color: #111827;
          font-size: 16px;
        }

        .feature-item p {
          margin: 0;
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
        }

        /* Vision */
        .vision-box {
          background: linear-gradient(135deg, #eff6ff, #eef2ff);
          border: 1px solid #dbeafe;
          border-radius: 16px;
          padding: 22px;
          margin-top: 15px;
        }

        .vision-box p {
          color: #374151;
          margin: 0;
        }

        /* Commitment */
        .commitment-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 25px;
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
        }

        .commitment-list li {
          position: relative;
          padding-left: 25px;
          color: #4b5563;
          font-size: 15px;
          margin: 5px 0;
        }

        .commitment-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 0;
          color: #2563eb;
          font-weight: 800;
        }

        /* Contact */
        .contact-card {
          background: linear-gradient(135deg, #111827, #1f2937);
          color: white;
          border: none;
        }

        .contact-card h2 {
          color: white;
        }

        .contact-card p {
          color: #d1d5db;
        }

        .contact-box {
          margin-top: 20px;
          padding: 20px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-row {
          display: flex;
          gap: 8px;
          align-items: center;
          margin: 7px 0;
          font-size: 15px;
        }

        .contact-label {
          color: #9ca3af;
          min-width: 80px;
        }

        .contact-link {
          color: white;
          text-decoration: none;
          font-weight: 600;
        }

        .contact-link:hover {
          text-decoration: underline;
        }

        /* Footer */
        .about-footer {
          text-align: center;
          color: #6b7280;
          font-size: 14px;
          padding-top: 10px;
        }

        /* Responsive */
        @media (max-width: 700px) {
          .about-wrapper {
            padding: 25px 14px 45px;
          }

          .about-hero {
            padding: 38px 22px;
            border-radius: 18px;
          }

          .about-hero h1 {
            font-size: 30px;
          }

          .about-hero p {
            font-size: 15px;
          }

          .about-card {
            padding: 22px 19px;
            border-radius: 16px;
          }

          .about-card h2 {
            font-size: 21px;
          }

          .feature-grid,
          .commitment-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <main className="about-wrapper">

        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <span className="hero-badge">
              Educational & Exam Preparation Platform
            </span>

            <h1>About ByeBye Berojgar</h1>

            <p>
              ByeBye Berojgar is an educational platform created to support
              students and government job-exam aspirants with mock tests,
              practice questions, educational resources, and learning
              assistance.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="about-card">
          <h2>Who We Are</h2>

          <p>
            ByeBye Berojgar is designed to make exam preparation easier,
            more accessible, and more convenient for students and competitive
            exam aspirants.
          </p>

          <p>
            Our platform brings useful preparation tools and practice
            features together so that learners can regularly practice,
            evaluate their performance, and improve their preparation.
          </p>
        </section>

        {/* Vision */}
        <section className="about-card">
          <h2>Our Vision</h2>

          <div className="vision-box">
            <p>
              Our vision is to make quality exam-preparation resources more
              accessible to learners by providing a simple, practical, and
              user-friendly digital learning platform.
            </p>
          </div>

          <p style={{ marginTop: "18px" }}>
            We aim to support students in developing a consistent study and
            practice routine while making self-assessment easier.
          </p>
        </section>

        {/* What We Offer */}
        <section className="about-card">
          <h2>What We Offer</h2>

          <p>
            Depending on the available features of the application, users
            may have access to:
          </p>

          <div className="feature-grid">

            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h3>Mock Tests</h3>
              <p>
                Practice with exam-oriented mock tests and assess your
                preparation.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">?</div>
              <h3>Practice Questions</h3>
              <p>
                Solve questions regularly to strengthen knowledge and
                improve exam readiness.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">★</div>
              <h3>Performance Analysis</h3>
              <p>
                Review test results and understand your performance after
                completing practice sessions.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">AI</div>
              <h3>AI Learning Assistance</h3>
              <p>
                Use AI-powered educational features for learning support,
                explanations, and practice assistance where available.
              </p>
            </div>

          </div>
        </section>

        {/* Purpose */}
        <section className="about-card">
          <h2>Our Purpose</h2>

          <p>
            Preparing for competitive examinations requires consistent
            practice, revision, and self-assessment. ByeBye Berojgar is built
            to make these activities easier to access through a digital
            platform.
          </p>

          <p>
            We want learners to spend more time learning and practicing
            while using simple digital tools to monitor their preparation.
          </p>
        </section>

        {/* AI */}
        <section className="about-card">
          <h2>AI-Powered Learning</h2>

          <p>
            Where available, ByeBye Berojgar may use artificial intelligence
            to provide educational assistance, explanations, practice support,
            and other learning-related functionality.
          </p>

          <p>
            AI-generated information is intended to support learning and
            should be independently verified whenever accuracy is important,
            especially for examination-related information.
          </p>
        </section>

        {/* Commitment */}
        <section className="about-card">
          <h2>Our Commitment</h2>

          <p>
            We are committed to continuously improving the ByeBye Berojgar
            experience and building useful tools for students and exam
            aspirants.
          </p>

          <ul className="commitment-list">
            <li>Simple and accessible learning experience</li>
            <li>Useful exam-preparation tools</li>
            <li>Regular improvement of application features</li>
            <li>Reasonable privacy and security practices</li>
            <li>Transparent use of technology and services</li>
            <li>User-focused educational functionality</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="about-card contact-card">
          <h2>Contact Us</h2>

          <p>
            We value your feedback, suggestions, and questions. If you have
            any questions or suggestions regarding ByeBye Berojgar, please
            contact us.
          </p>

          <div className="contact-box">
            <div className="contact-row">
              <span className="contact-label">App:</span>
              <strong>ByeBye Berojgar</strong>
            </div>

            <div className="contact-row">
              <span className="contact-label">Email:</span>

              <a
                className="contact-link"
                href="mailto:shopsmartindia78@gmail.com"
              >
                shopsmartindia78@gmail.com
              </a>
            </div>
          </div>
        </section>

        <div className="about-footer">
          © 2026 ByeBye Berojgar. All rights reserved.
        </div>

      </main>
    </div>
  );
};

export default AboutUs;

