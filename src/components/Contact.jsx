import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function Contact() {
  const ref = useRef();
  useIntersectionObserver(ref);

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-layout">
          <div className="contact-info fade-up">
            <h2 className="contact-title">Let&apos;s Build Together</h2>
            <p className="contact-description">
              Tell us about your product vision. We&apos;ll respond within 24 hours with a tailored approach and timeline.
            </p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <strong>Response Time:</strong> Within 24 hours
              </div>
              <div className="contact-detail-item">
                <strong>Kickoff:</strong> 48-hour sprint start
              </div>
              <div className="contact-detail-item">
                <strong>Engagement:</strong> Project or retainer
              </div>
            </div>
          </div>
          <form className="contact-form fade-up" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="232f952d-ea3a-4cb5-a410-01f5833ab5b4" />

            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" name="name" className="form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" className="form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="company" className="form-label">Company</label>
              <input type="text" id="company" name="company" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="project" className="form-label">Project Type</label>
              <select id="project" name="project" className="form-input">
                <option value="">Select...</option>
                <option value="new-product">New Product Launch</option>
                <option value="redesign">Website Redesign</option>
                <option value="cloud">Cloud Migration</option>
                <option value="growth">Growth & Marketing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Tell us about your project</label>
              <textarea id="message" name="message" className="form-input form-textarea" rows="5" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
