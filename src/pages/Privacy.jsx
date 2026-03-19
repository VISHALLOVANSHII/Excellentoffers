import React, { useState } from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-slate-900 to-black py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mt-12 mb-10">
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-gray-400 mt-2 text-sm">
            Last Updated: 8th of August, 2025
          </p>
        </div>

        {/* Main Box */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-10 text-gray-300 space-y-6">
          {/* ✅ INTRO (TOP) */}
          <div className="space-y-4">
            <p>
              This privacy policy (the "Privacy Policy") explains how Harman
              Interactive Marketing, LLC (“Company,” “we,” or “us”) collects,
              uses, shares, and protects information of the users of Company’s
              websites and mobile applications.
            </p>

            <p>
              By using the Website, you agree to disclose personal information
              and interact with third parties.
            </p>

            <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
              <p className="text-red-400 font-semibold text-sm">
                BY USING THE WEBSITE, YOU AGREE TO BE BOUND BY OUR PRIVACY
                POLICY.
              </p>
            </div>

            <p>
              This Privacy Policy applies only to this Website, not third-party
              platforms.
            </p>
          </div>

          {/* ✅ SECTION 1 */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-2 border-l-4 border-cyan-400 pl-3">
              1. Who controls your information?
            </h2>

            <p>
              Harman Interactive Marketing, LLC <br />
              10580 N McCarran Blvd #115,
              <br />
              Reno, NV 89503 <br />
              <span className="text-cyan-400">admin@excellentoffers.com</span>
            </p>
          </div>

          {/* ✅ SECTION 2 WITH NESTED */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3 border-l-4 border-cyan-400 pl-3">
              2. What types of information do we collect?
            </h2>

            <div className="space-y-3">
              <AccordionSmall title="Information you provide (name, email, phone)">
                <p>
                   We collect information from you when you voluntarily provide
                  it to us over the Website, including as part of registering a
                  user account or using the Service. Such information may
                  include identifiers and personal information such as your
                  name, email address, telephone number, and address.
                </p>
              </AccordionSmall>

              <AccordionSmall title="Public content (reviews, comments)">
                <p>
                   Company may collect information that you voluntarily upload
                  to or about the Website for public display (“Public
                  Information”), such as when you post a product review, comment
                  on a good or service, or participate in a forum on the
                  Website. Once you submit Public Information, neither you nor
                  Company are able to control how it may be copied, shared, or
                  used by third parties, even if you and/or Company later delete
                  such Public Information. Accordingly, you should carefully
                  consider what personal information you choose to include
                  within your Public Information.
                </p>
              </AccordionSmall>

              <AccordionSmall title="Transaction information">
                <p>
                   We may gather additional information from you when you use
                  the Service or contact customer service regarding a prior
                  transaction. Such information may include information
                  regarding the products you requested. When you click on links
                  on the Website, we may collect or create records regarding
                  your preferences or tendencies.
                </p>
              </AccordionSmall>

              <AccordionSmall title="Device & IP info">
                <p>
                   When you use the Website, we automatically gather information
                  made available by your web browser (such as Microsoft Edge or
                  Google Chrome), internet service provider (such as Comcast or
                  Cox), and device (such as your computer, phone, or tablet),
                  depending on your settings for each. For example, we may
                  collect your IP address, information about the operating
                  system or type of device you use, the device ID associated
                  with your device, the date and time you access the Website,
                  and your log in attempts.
                </p>
              </AccordionSmall>

              <AccordionSmall title="Browsing activity">
                <p>
                   We may also collect information about your browsing history,
                  search history, and information regarding your interaction
                  with a particular website, application, or advertisement,
                  including the Website. We may collect information regarding
                  the websites, application, or advertisement you visited
                  immediately before and after your use of the Website.
                </p>
              </AccordionSmall>

              <AccordionSmall title="Geolocation data">
                <p>
                   We may collect information about where you are located, both
                  generally and at the time you access the Website. For example,
                  we may collect your mailing address or ascertain your
                  approximate location from your IP address.
                </p>
              </AccordionSmall>

              <AccordionSmall title="Other info & inference data">
                <p>
                   We may collect other information from you, such as when you
                  make a claim for a promotion run on the Website, when you
                  request customer service assistance, or when you voluntarily
                  subscribe to promotions, reminders, or newsletters.
                  <br />
                   Company may also create new information about you by drawing
                  inferences from the information identified in the categories
                  listed above, such as to create a profile about you reflecting
                  your preferences.
                </p>
              </AccordionSmall>
            </div>
          </div>
        </div>

        {/* ✅ MAIN ACCORDIONS (3–15) */}
        <div className="mt-6 space-y-4">
          <Accordion title="3. How and when do we collect information?">
            <p>Add full content here</p>
          </Accordion>

          <Accordion title="4. How do we use your information?">
            <p>Add full content here</p>
          </Accordion>

          <Accordion title="5. How do we share your information?">
            <p>Add full content here</p>
          </Accordion>

          <Accordion title="6. Do we sell your information?">
            <p>No. We do not sell personal information.</p>
          </Accordion>

          <Accordion title="7. How do we protect your information?">
            <p>Add full content here</p>
          </Accordion>

          <Accordion title="8. How long do we keep your information?">
            <p>Add full content here</p>
          </Accordion>

          <Accordion title="9. Do we transfer your information?">
            <p>Add full content here</p>
          </Accordion>

          <Accordion title="10. Your rights">
            <p>Add full content here</p>
          </Accordion>

          <Accordion title="11. Children's privacy">
            <p>Add full content here</p>
          </Accordion>

          <Accordion title="12. Marketing communications">
            <p>Add full content here</p>
          </Accordion>

          <Accordion title="13. Do Not Track">
            <p>Add full content here</p>
          </Accordion>

          <Accordion title="14. Policy updates">
            <p>Add full content here</p>
          </Accordion>

          <Accordion title="15. Contact us">
            <p>Add full content here</p>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

/* MAIN ACCORDION */
const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 text-white font-semibold hover:bg-white/10"
      >
        {title}
        <span className={`${open ? "rotate-180" : ""}`}>▼</span>
      </button>

      <div
        className={`${open ? "max-h-[500px] p-4" : "max-h-0 overflow-hidden"} transition-all`}
      >
        {children}
      </div>
    </div>
  );
};

/* SMALL NESTED ACCORDION */
const AccordionSmall = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-3 text-sm text-gray-200 hover:bg-white/10"
      >
        {title}
        <span className={`${open ? "rotate-180" : ""}`}>▼</span>
      </button>

      <div
        className={`${open ? "max-h-[300px] p-3" : "max-h-0 overflow-hidden"} transition-all`}
      >
        <div className="text-gray-400 text-sm">{children}</div>
      </div>
    </div>
  );
};

export default Privacy;
