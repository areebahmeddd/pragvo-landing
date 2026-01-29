import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-black/50 text-sm mb-12">Last Updated: February 01, 2026</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-black/70 leading-relaxed mb-8">
              Welcome to Pragvo Advisors LLP. These Terms of Service ("Terms") govern your access to
              and use of our website and advisory services (collectively, the "Services"). By using
              our Services, you agree to be bound by these Terms. If you do not agree, please
              discontinue use immediately.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">1. Acceptance of Terms</h2>
              <p className="text-black/70">
                By accessing or using any part of our Services, you acknowledge that you have read,
                understood, and agree to be bound by these Terms and our Privacy Policy. These Terms
                apply to all visitors, prospective clients, and clients of Pragvo Advisors LLP.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">2. Eligibility</h2>
              <p className="text-black/70 mb-4">
                Our Services are intended for businesses, institutional clients, and professionals
                seeking strategic advisory services. By using our Services, you represent and
                warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/70">
                <li>You have the legal capacity to enter into binding agreements</li>
                <li>
                  You are authorized to represent any organization on whose behalf you engage with
                  us
                </li>
                <li>All information you provide is accurate, current, and complete</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">3. Services Overview</h2>

              <h3 className="text-xl font-semibold text-black mb-3 mt-6">3.1 Advisory Services</h3>
              <p className="text-black/70 mb-4">Pragvo Advisors provides:</p>
              <ul className="list-disc pl-6 space-y-2 text-black/70">
                <li>
                  <strong>Investment Banking Advisory:</strong> Debt capital markets, equity capital
                  markets, and M&A advisory services
                </li>
                <li>
                  <strong>HR Advisory:</strong> Talent acquisition, organization design, performance
                  management, compensation advisory, and HRIS implementation support
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-black mb-3 mt-6">3.2 Engagement Terms</h3>
              <p className="text-black/70">
                Specific terms for each advisory engagement will be documented in separate
                engagement letters or agreements. These Terms serve as a general framework and are
                supplemented by engagement-specific agreements.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">4. Use of Website</h2>

              <h3 className="text-xl font-semibold text-black mb-3 mt-6">4.1 Permitted Use</h3>
              <p className="text-black/70">
                You may use our website to learn about our services, contact us, and access
                information we make publicly available.
              </p>

              <h3 className="text-xl font-semibold text-black mb-3 mt-6">
                4.2 Prohibited Activities
              </h3>
              <p className="text-black/70 mb-4">You agree NOT to:</p>
              <ul className="list-disc pl-6 space-y-2 text-black/70">
                <li>Use the website for any unlawful purpose or in violation of these Terms</li>
                <li>Attempt to gain unauthorized access to our systems, servers, or databases</li>
                <li>Interfere with or disrupt the integrity or performance of the website</li>
                <li>
                  Use automated tools (bots, scrapers) to access the website without permission
                </li>
                <li>Reverse engineer, decompile, or disassemble any part of the website</li>
                <li>Upload malicious code, viruses, or harmful content</li>
                <li>Impersonate Pragvo Advisors, our partners, or other users</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">
                5. Advisory Information and Disclaimers
              </h2>

              <h3 className="text-xl font-semibold text-black mb-3 mt-6">
                5.1 Not Financial Advice
              </h3>
              <p className="text-black/70">
                Information provided on this website is for general informational purposes only and
                does not constitute financial, investment, legal, or professional advice. Formal
                advisory relationships are established only through executed engagement agreements.
              </p>

              <h3 className="text-xl font-semibold text-black mb-3 mt-6">5.2 No Guarantees</h3>
              <p className="text-black/70">
                While we strive to deliver exceptional results, we cannot guarantee specific
                outcomes for advisory engagements. Transaction success, fundraising outcomes, and
                organizational changes depend on numerous factors beyond our control.
              </p>

              <h3 className="text-xl font-semibold text-black mb-3 mt-6">
                5.3 Information Accuracy
              </h3>
              <p className="text-black/70">
                We make reasonable efforts to ensure information on our website is accurate and
                current. However, we do not warrant the completeness, accuracy, or reliability of
                any content. You should verify critical information independently.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">6. Confidentiality</h2>
              <p className="text-black/70 mb-4">We maintain strict confidentiality standards:</p>
              <ul className="list-disc pl-6 space-y-2 text-black/70">
                <li>
                  All client information shared during engagements is treated as strictly
                  confidential
                </li>
                <li>Confidentiality obligations are detailed in engagement-specific agreements</li>
                <li>
                  We implement industry-standard security measures to protect sensitive information
                </li>
                <li>
                  Our partners and team members are bound by professional confidentiality standards
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">7. Intellectual Property</h2>

              <h3 className="text-xl font-semibold text-black mb-3 mt-6">7.1 Our Property</h3>
              <p className="text-black/70">
                All content on this website, including text, graphics, logos, images, and software,
                is the property of Pragvo Advisors LLP and protected by intellectual property laws.
                "Pragvo Advisors" and associated branding are our trademarks.
              </p>

              <h3 className="text-xl font-semibold text-black mb-3 mt-6">
                7.2 Engagement Deliverables
              </h3>
              <p className="text-black/70">
                Ownership and usage rights for engagement deliverables (reports, analyses,
                recommendations) are specified in individual engagement agreements.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">
                8. Disclaimers and Limitation of Liability
              </h2>

              <h3 className="text-xl font-semibold text-black mb-3 mt-6">8.1 "AS IS" Basis</h3>
              <p className="text-black/70 uppercase bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
                THE WEBSITE AND GENERAL INFORMATION ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
                IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT.
              </p>

              <h3 className="text-xl font-semibold text-black mb-3 mt-6">
                8.2 Limitation of Liability
              </h3>
              <p className="text-black/70 uppercase bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, PRAGVO ADVISORS LLP SHALL NOT BE LIABLE FOR
                ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS
                OF PROFITS, REVENUE, DATA, OR USE, ARISING FROM YOUR USE OF THE WEBSITE OR SERVICES,
                EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">9. Indemnification</h2>
              <p className="text-black/70">
                You agree to indemnify, defend, and hold harmless Pragvo Advisors LLP, its partners,
                employees, and affiliates from any claims, damages, losses, liabilities, and
                expenses (including legal fees) arising from your use of the Services, violation of
                these Terms, or infringement of any rights of another party.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">10. Third-Party Services</h2>
              <p className="text-black/70">
                Our website may integrate with or link to third-party services and websites. Your
                use of these services is subject to their respective terms and policies. We are not
                responsible for third-party content, services, or practices.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">11. Termination</h2>
              <p className="text-black/70 mb-4">
                We reserve the right to suspend or terminate your access to our website at any time,
                with or without cause, with or without notice. Upon termination, your right to use
                the website will immediately cease.
              </p>
              <p className="text-black/70">
                Client engagement termination is governed by the specific terms of engagement
                agreements.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">
                12. Modifications to Services and Terms
              </h2>
              <p className="text-black/70">
                We reserve the right to modify, suspend, or discontinue any part of our website or
                Services at any time. We may also update these Terms periodically. Continued use of
                the Services after changes constitutes acceptance of the modified Terms. We will
                update the "Last Updated" date to reflect changes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">
                13. Governing Law and Dispute Resolution
              </h2>
              <p className="text-black/70 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India,
                without regard to conflict of law provisions.
              </p>
              <p className="text-black/70 mb-4">
                Any disputes arising from these Terms or the Services shall first be resolved
                through good faith negotiation. If negotiation fails, disputes shall be subject to
                the exclusive jurisdiction of the courts located in New Delhi, India.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">14. Severability</h2>
              <p className="text-black/70">
                If any provision of these Terms is found to be invalid or unenforceable by a court
                of competent jurisdiction, the remaining provisions will continue in full force and
                effect.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">15. Entire Agreement</h2>
              <p className="text-black/70">
                These Terms, together with our Privacy Policy and any engagement-specific
                agreements, constitute the entire agreement between you and Pragvo Advisors LLP
                regarding the Services and supersede all prior agreements and understandings.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">16. Contact Information</h2>
              <p className="text-black/70 mb-4">
                If you have questions about these Terms, please contact us at:
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
                By using our Services, you acknowledge that you have read, understood, and agree to
                be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
