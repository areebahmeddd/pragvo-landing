import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-black text-black tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-black/50 text-sm mb-12">Last Updated: February 01, 2026</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-black/70 leading-relaxed mb-8">
              Pragvo Advisors LLP ("we," "our," or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website and engage with our advisory services
              (collectively, the "Services").
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-black mb-3 mt-6">
                1.1 Information You Provide
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-black/70">
                <li>
                  <strong>Contact Information:</strong> Name, email address, phone number, and
                  company details when you submit inquiries or request consultations.
                </li>
                <li>
                  <strong>Professional Information:</strong> Business details, industry sector,
                  transaction information, and other relevant details shared during advisory
                  engagements.
                </li>
                <li>
                  <strong>Communication Content:</strong> Messages, documents, and other materials
                  shared through email, calls, or our contact forms.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-black mb-3 mt-6">
                1.2 Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-black/70">
                <li>
                  <strong>Technical Data:</strong> IP address, browser type, device information, and
                  operating system.
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent on pages, navigation
                  patterns, and referring URLs.
                </li>
                <li>
                  <strong>Cookies:</strong> Small data files stored on your device to enhance user
                  experience and analytics.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-black/70">
                <li>
                  <strong>Service Provision:</strong> To respond to inquiries, provide advisory
                  services, and manage client engagements.
                </li>
                <li>
                  <strong>Communication:</strong> To send updates, newsletters, and information
                  about our services (with your consent).
                </li>
                <li>
                  <strong>Service Improvement:</strong> To analyze usage patterns and improve our
                  website and service offerings.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To comply with applicable laws, regulations,
                  and professional standards.
                </li>
                <li>
                  <strong>Security:</strong> To protect against fraud, unauthorized access, and
                  other security threats.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">3. Data Storage and Security</h2>
              <ul className="list-disc pl-6 space-y-2 text-black/70">
                <li>
                  <strong>Secure Storage:</strong> Your data is stored on secure servers with
                  industry-standard encryption and access controls.
                </li>
                <li>
                  <strong>Access Control:</strong> Access to personal information is restricted to
                  authorized personnel who need it to perform their duties.
                </li>
                <li>
                  <strong>Confidentiality:</strong> All client information is treated with strict
                  confidentiality in accordance with professional advisory standards.
                </li>
                <li>
                  <strong>Data Protection:</strong> We implement appropriate technical and
                  organizational measures to protect against unauthorized access, alteration, or
                  destruction of data.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-black/70 mb-4">
                We do not sell your personal information. We may share data only in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/70">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party vendors who assist in
                  operating our website and providing services (e.g., hosting, analytics).
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or
                  regulatory authority.
                </li>
                <li>
                  <strong>Professional Advisors:</strong> With legal, financial, or other
                  professional advisors when necessary for service delivery.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or
                  sale of assets.
                </li>
                <li>
                  <strong>Consent:</strong> When you have given explicit consent for specific
                  sharing.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">5. Your Rights and Choices</h2>
              <ul className="list-disc pl-6 space-y-2 text-black/70">
                <li>
                  <strong>Access:</strong> You have the right to request access to the personal
                  information we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> You can request correction of inaccurate or
                  incomplete information.
                </li>
                <li>
                  <strong>Deletion:</strong> You can request deletion of your personal information,
                  subject to legal and contractual obligations.
                </li>
                <li>
                  <strong>Opt-Out:</strong> You can unsubscribe from marketing communications at any
                  time.
                </li>
                <li>
                  <strong>Data Portability:</strong> You can request a copy of your data in a
                  structured, machine-readable format.
                </li>
                <li>
                  <strong>Object:</strong> You have the right to object to certain processing of
                  your personal information.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">6. Data Retention</h2>
              <p className="text-black/70">
                We retain your information for as long as necessary to fulfill the purposes outlined
                in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce
                agreements. Client engagement records are retained in accordance with professional
                standards and regulatory requirements.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">7. Cookies and Tracking</h2>
              <p className="text-black/70 mb-4">
                Our website uses cookies and similar tracking technologies for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/70">
                <li>Essential functionality and security</li>
                <li>Analytics and performance monitoring</li>
                <li>User experience enhancement</li>
              </ul>
              <p className="text-black/70 mt-4">
                You can control cookies through your browser settings, though disabling cookies may
                affect website functionality.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">
                8. International Data Transfers
              </h2>
              <p className="text-black/70">
                Your information may be transferred to and processed in countries other than India.
                We ensure appropriate safeguards are in place to protect your data in accordance
                with this Privacy Policy and applicable data protection laws.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">9. Third-Party Links</h2>
              <p className="text-black/70">
                Our website may contain links to third-party websites. We are not responsible for
                the privacy practices of these external sites. We encourage you to review their
                privacy policies.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-black/70">
                We may update this Privacy Policy periodically to reflect changes in our practices
                or legal requirements. We will notify you of significant changes by updating the
                "Last Updated" date. Continued use of our Services after changes constitutes
                acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">11. Contact Us</h2>
              <p className="text-black/70 mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices,
                please contact us at:
              </p>
              <div className="bg-white/40 p-6 rounded-xl border border-black/10">
                <p className="text-black/70 mb-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@pragvo.in" className="text-black hover:underline">
                    info@pragvo.in
                  </a>
                </p>
                <p className="text-black/70 mb-2">
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+919311142495" className="text-black hover:underline">
                    +91 93111-42495
                  </a>
                </p>
                <p className="text-black/70">
                  <strong>Address:</strong> New Delhi, India
                </p>
              </div>
            </section>

            <div className="border-t border-black/10 pt-8 mt-12">
              <p className="text-sm text-black/50 italic">
                By using our Services, you acknowledge that you have read and understood this
                Privacy Policy and agree to its terms.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
