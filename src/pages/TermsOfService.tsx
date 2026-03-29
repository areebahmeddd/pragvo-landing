import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsOfService() {
  return (
    <div className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-black/60 transition-colors hover:text-black"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-5xl font-black tracking-tight text-black md:text-6xl">
            Terms of Service
          </h1>
          <p className="mb-12 text-sm text-black/50">
            Last updated: March 01, 2026
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="mb-8 text-lg leading-relaxed text-black/70">
              Welcome to the website of <strong>Pragvo Advisors LLP</strong>{" "}
              (“Pragvo,” “we,” “us,” or “our”). These Terms of Service (“Terms”)
              govern your access to and use of this website and any online
              features we offer in connection with it (collectively, the
              “Site”). They also describe how our general advisory activities
              relate to formal client engagements. By accessing or using the
              Site, you agree to these Terms and to our{" "}
              <Link to="/privacy-policy" className="text-black underline">
                Privacy Policy
              </Link>
              . If you do not agree, please do not use the Site.
            </p>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-black">
                1. Nature of the Site and professional services
              </h2>
              <p className="mb-4 text-black/70">
                The Site is intended to introduce Pragvo’s capabilities in
                investment banking and HR advisory, to share general
                information, and to provide a way to contact us or request a
                consultation. Unless and until we enter into a written
                engagement agreement with you (or your organization),{" "}
                <strong>
                  nothing on the Site creates an advisory, fiduciary, or other
                  professional-client relationship
                </strong>
                , and nothing on the Site is a substitute for tailored
                professional advice.
              </p>
              <div className="my-6 rounded-xl border border-black/10 bg-black/[0.03] p-5 text-black/70">
                <p className="mb-0 text-base leading-relaxed">
                  Content on the Site is for general information only. We do not
                  provide securities, investment, legal, tax, or other regulated
                  advice through the Site alone. Decisions that may affect your
                  business, organization, or finances should be taken only after
                  consulting qualified advisors and, where appropriate, pursuant
                  to a formal engagement with us.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-black">
                2. Who may use the Site
              </h2>
              <p className="mb-4 text-black/70">
                The Site is directed at businesses, institutions, and
                professionals considering advisory support. By using the Site,
                you represent that you are at least the age of majority in your
                jurisdiction and that you have authority to bind yourself or the
                organization on whose behalf you act. Information you submit
                (including through contact or consultation forms) must be
                accurate and not misleading.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-black">
                3. Limited licence to use the Site
              </h2>
              <p className="mb-4 text-black/70">
                Subject to these Terms, Pragvo grants you a personal,
                non-exclusive, non-transferable, revocable licence to access and
                use the Site for lawful, internal business or personal
                information purposes. You may view and print reasonable copies
                of public pages for those purposes, provided you do not remove
                proprietary notices. Except as permitted by applicable law, you
                must not:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-black/70">
                <li>
                  Copy, scrape, mirror, or systematically harvest content from
                  the Site without our prior written consent
                </li>
                <li>
                  Use the Site or its content to develop a competing product or
                  service, or for any public commercial exploitation without
                  permission
                </li>
                <li>
                  Attempt to probe, interfere with, or circumvent the security
                  or availability of the Site or our systems
                </li>
                <li>
                  Use automated means (e.g., bots, scripts) in a way that
                  burdens the Site or violates these Terms
                </li>
                <li>Misrepresent your identity or affiliation with Pragvo</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-black">
                4. Description of advisory capabilities and client engagements
              </h2>
              <p className="mb-4 text-black/70">
                Pragvo provides strategic advisory services in areas described
                on the Site, including without limitation:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-black/70">
                <li>
                  <strong>Investment banking advisory</strong>, such as debt and
                  equity capital markets and mergers and acquisitions, as
                  described in our Core Domains
                </li>
                <li>
                  <strong>HR advisory</strong>, including talent, organization
                  design, performance and rewards, HR technology implementation,
                  leadership and culture, events and engagement programs, and
                  related topics as described on the Site
                </li>
              </ul>
              <p className="mt-4 text-black/70">
                The scope of any advisory assignment, deliverables, fees,
                timelines, confidentiality, conflicts, regulatory requirements,
                and liability are governed solely by the{" "}
                <strong>engagement letter or other written agreement</strong>{" "}
                executed between you (or your organization) and Pragvo. Those
                documents prevail over these Terms if there is any inconsistency
                as to the services actually performed for a client.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-black">
                5. Communications and electronic delivery
              </h2>
              <p className="text-black/70">
                When you contact us through the Site (including scheduling a
                consultation), you consent to us communicating with you by
                email, telephone, or other reasonable channels regarding your
                inquiry. Standard email is not fully secure; do not send
                highly-sensitive or regulated information unless we have agreed
                secure channels. See our Privacy Policy for how we handle
                personal data.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-black">
                6. Confidentiality
              </h2>
              <p className="mb-4 text-black/70">
                We treat client and prospect information seriously. Specific
                confidentiality, data protection, and use restrictions for
                engagement work are set out in applicable engagement agreements
                and our Privacy Policy. Public or marketing materials on the
                Site do not disclose client confidential information without
                consent as required.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-black">
                7. Intellectual property
              </h2>
              <p className="mb-4 text-black/70">
                The Site, including text, layout, graphics, logos, and
                compilation of content, is owned by Pragvo or its licensors and
                is protected by intellectual property laws. The “Pragvo” name
                and related branding may not be used in a way that implies
                endorsement or affiliation without written permission. Rights in
                deliverables produced under a client engagement are as stated in
                the relevant contract.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-black">
                8. Disclaimers
              </h2>
              <p className="mb-4 text-black/70">
                To the fullest extent permitted by law, the Site and all
                information and materials on it are provided on an “as is” and
                “as available” basis. We disclaim all warranties, whether
                express, implied, or statutory, including implied warranties of
                merchantability, fitness for a particular purpose, and
                non-infringement, except any that cannot be excluded under
                applicable law.
              </p>
              <p className="text-black/70">
                Illustrative examples, case descriptions, or metrics on the Site
                may not reflect a promise of similar results in any matter. Past
                experience does not guarantee future performance.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-black">
                9. Limitation of liability
              </h2>
              <p className="text-black/70">
                To the maximum extent permitted by law, Pragvo and its partners,
                members, directors, officers, employees, and representatives
                shall not be liable for any indirect, incidental, special,
                consequential, exemplary, or punitive damages, or for any loss
                of profits, revenue, goodwill, data, or opportunity, arising out
                of or related to your use of the Site or reliance on Site
                content, whether or not we have been advised of the possibility
                of such damages. Our aggregate liability to you for claims
                arising from your use of the Site (other than liability under an
                executed engagement agreement, which is governed by that
                agreement) shall not exceed the greater of (a) the amount you
                paid us for access to the Site in the twelve months preceding
                the claim (if any) or (b) a nominal sum as permitted by law.
                Some jurisdictions do not allow certain limitations; in those
                cases, our liability is limited to the extent permitted by
                applicable law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-black">
                10. Indemnity
              </h2>
              <p className="text-black/70">
                You agree to indemnify and hold harmless Pragvo and its
                affiliates and personnel from and against any claims, damages,
                losses, costs, and expenses (including reasonable legal fees)
                arising from your misuse of the Site, your violation of these
                Terms, or your infringement of any third-party rights.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-black">
                11. Third-party links and tools
              </h2>
              <p className="text-black/70">
                The Site may reference or link to third-party websites, tools,
                or services (e.g., professional networks). Those are provided
                for convenience only. We do not control and are not responsible
                for third-party content, policies, or practices. Your use of
                third-party services is at your own risk and subject to their
                terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-black">
                12. Suspension and changes
              </h2>
              <p className="mb-4 text-black/70">
                We may modify, suspend, or discontinue any part of the Site, or
                restrict access, at any time without liability to you. We may
                update these Terms from time to time by posting a revised
                version on the Site and updating the “Last updated” date.
                Continued use after changes constitutes acceptance of the
                revised Terms, to the extent permitted by law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-black">
                13. Governing law and jurisdiction
              </h2>
              <p className="mb-4 text-black/70">
                These Terms are governed by the laws of India, without regard to
                conflict-of-law rules that would require another jurisdiction’s
                law. Subject to any mandatory provisions of applicable law, the
                courts at New Delhi, India shall have exclusive jurisdiction
                over disputes arising out of or relating to these Terms or the
                Site (excluding disputes governed solely by a written engagement
                agreement, which may specify different dispute resolution).
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-black">
                14. General
              </h2>
              <ul className="list-disc space-y-2 pl-6 text-black/70">
                <li>
                  <strong>Severability.</strong> If any provision is held
                  invalid, the remainder remains in effect.
                </li>
                <li>
                  <strong>No waiver.</strong> Failure to enforce a provision is
                  not a waiver.
                </li>
                <li>
                  <strong>Assignment.</strong> You may not assign these Terms;
                  Pragvo may assign them in connection with a reorganization or
                  transfer of business.
                </li>
                <li>
                  <strong>Entire agreement (Site use).</strong> These Terms,
                  together with our Privacy Policy, constitute the entire
                  agreement between you and Pragvo regarding your use of the
                  Site. Client services are additionally governed by executed
                  engagement documentation.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-black">
                15. Contact
              </h2>
              <p className="mb-4 text-black/70">Questions about these Terms:</p>
              <div className="surface-elevated ring-brand-blue/10 rounded-xl p-6 ring-1">
                <p className="mb-2 text-black/70">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@pragvo.in"
                    className="text-black hover:underline"
                  >
                    info@pragvo.in
                  </a>
                </p>
                <p className="mb-2 text-black/70">
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+919311142495"
                    className="text-black hover:underline"
                  >
                    +91 93111-42495
                  </a>
                </p>
                <p className="text-black/70">
                  <strong>Location:</strong> New Delhi, India
                </p>
              </div>
            </section>

            <div className="mt-12 border-t border-black/10 pt-8">
              <p className="text-sm text-black/50">
                By using this Site, you acknowledge that you have read and
                understood these Terms of Service.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
