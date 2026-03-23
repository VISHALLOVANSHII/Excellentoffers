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
                  Company may collect information that you voluntarily upload to
                  or about the Website for public display (“Public
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
                  We may gather additional information from you when you use the
                  Service or contact customer service regarding a prior
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
            <AccordionSmall title="1. When you enter or upload information to the Website.">
              <p>
                Company collects information you provide to us, content you make
                public, transaction information, and geolocation information
                when you enter such information on a form on the Website
                (including during sign up), request products, sign up for
                newsletters or promotional material, enter contests, upload
                content, post in a forum, and otherwise interact with the
                Website.
              </p>
            </AccordionSmall>{" "}
            <br />
            <AccordionSmall title="2. When you communicate with us.">
              <p>
                Company may also collect information you provide to us, content
                you make public, transaction information, geolocation
                information, and from you outside of the Website, such as when
                you contact our customer service department, email us (including
                any response to an email communication from Company), or
                communicate with Company via social media, such as by posting on
                a page hosted by Company or tagging Company in your own post.
                The information collected off the Website may be combined with
                that collected through the Website—for example, if you order a
                product from the Website and later call customer service about
                the order, the information collected in both interactions may be
                linked.
              </p>
            </AccordionSmall>{" "}
            <br />
            <AccordionSmall title="3. Through Cookies, tracking tools, and other automated technologies.">
              <p>
                When you use any website, certain information can be
                automatically collected through technological means. When you
                access the Website, your web browser automatically sends us
                device and internet connection information and certain internet
                activity information as described in Section 2. Company also
                uses Cookies and web beacon technology to gather device and
                internet connection information, internet activity information,
                geolocation information, and biometric information. “Cookies”
                are files that are placed on your computer or other device by
                websites you visit. The primary purpose of a Cookie is to
                identify you as a unique user of the Website. Company uses the
                following types of Cookies, some of which may be placed by Third
                Parties, to customize your internet experience, keep you logged
                into websites, and remember your search terms:
              </p>
            </AccordionSmall>{" "}
          </Accordion>

          <Accordion title="4. How do we use your information?">
            <p className="text-gray-400">
              Company may use the information we've gathered from you or your
              device, including through Cookies and Third Parties, for the
              following purposes:
            </p>
          </Accordion>

          <Accordion title="5. How do we share your information?">
            <p>Add full content here</p>
          </Accordion>

          <Accordion title="6. Do we sell your information?">
            <p>No. Company does not sell consumers' personal information.</p>
          </Accordion>

          <Accordion title="7. How do we protect your information?">
            <p className="text-gray-400">
              Company, and the Third-Party vendors we use to store your
              information, employ technical, administrative, and physical
              security measures that are designed to protect against the loss,
              misuse, and alteration of the information under our control. We
              regularly review our security procedures to consider appropriate
              new technology and methods. However, no system can be completely
              secure. Therefore, although we take steps to secure your
              information, we cannot promise, and you should not expect, that
              your personal and commercial information, or other communications,
              will always remain secure. The safety and security of your
              information also depends on you. Never share account information
              with anyone else and notify us as soon as possible if you believe
              your account security has been breached.
            </p>
          </Accordion>

          <Accordion title="8. How long do we keep your information?">
            <p className="text-gray-400">
              Company will retain your information for the length of time
              necessary to fulfill the Business Purposes and Commercial Purposes
              outlined in this Privacy Policy, unless a longer retention period
              is required or permitted by law or valid court order. If you
              request deletion of your information pursuant to Section 10, your
              request will be processed according to the timeframes indicated
              therein and/or pursuant to any applicable legislation.
            </p>
          </Accordion>

          <Accordion title="9. Do we transfer your information?">
            <p className="text-gray-400">
              If you are visiting the Website from a location outside of the
              United States, your connection will be through and to servers
              located in the United States, and all information you provide will
              be processed and securely maintained in our web servers and
              internal systems located within the United States. By using the
              Website, you authorize and specifically consent to the transfer of
              personal data to the United States and its storage and use as
              specified above when you provide such information to us.
            </p>
          </Accordion>

          <Accordion title="10. What are your rights when it comes to accessing, correcting, or deleting your information, and how can you exercise them?">
            <p className="text-gray-400 mb-4">
              You may access all information we've collected and retained about
              you for purposes of correcting, amending, downloading, or deleting
              such information. Access can be obtained by logging into your
              account, filling out a Contact Form, or contacting us at
              admin@excellentoffers.com with your full name and email address.
              To protect your privacy and security, we may take reasonable steps
              to help verify your identity before granting access, making
              corrections, providing you with information, or deleting
              information. If your request is through an agent, please also
              provide your agent's full name and a verified statement of
              authority. We will not discriminate against you for making a
              request or asserting your rights. If certain privacy laws apply to
              you, you may have the right to request that Company disclose the
              following to you:
            </p>
            <ul className="list-disc pl-5 text-gray-400 space-y-2">
              <li>
                The categories of personal information we have collected about
                you;
              </li>
              <li>
                The business or commercial purpose for collecting personal
                information;
              </li>
              <li>
                The categories of third parties with whom we share personal
                information;
              </li>
              <li>
                The specific pieces of personal information we have collected
                about you.
              </li>
            </ul>{" "}
            <br />
            <p className="text-gray-400 mb-4">
              Under California's "Shine the Light" law, California residents who
              provide personal information to the Website may request certain
              information regarding our disclosure of personal information to
              third parties for their direct marketing purposes. To make such a
              request, please fill out a Contact Form, or contact us at
              admin@excellentoffers.com.
            </p>
          </Accordion>

          <Accordion title="11. How do we protect the privacy of children?">
            <p className="text-gray-400">
              Company will never knowingly collect any personal information
              about children under the age of 13. If we obtain actual knowledge
              that we have collected personal information about a child under
              the age of 13, that information will be immediately deleted from
              our database. Because we do not collect such information, we have
              no such information to use or to disclose to Third Parties.
            </p>
          </Accordion>

          <Accordion title="12. How can you receive and opt-out from marketing communications?">
            <p className="text-gray-400">
              By providing your email address to Company through the Website or
              an email initiated by you, you consent to receive emails from us,
              including information concerning your account and advertising
              messages. Providing consent to promotional emails is NOT a
              condition of purchasing any goods or services from Company. You
              can unsubscribe to advertising emails at any time by clicking the
              unsubscribe link within the email or by contacting us at
              admin@excellentoffers.com. Please note that, even if you
              unsubscribe from advertising emails, we will still send you
              necessary, non-promotional emails about your order, account, or
              updates to our Privacy Policy and Terms of service.
            </p>
          </Accordion>

          <Accordion title="13. Do we respond to Do Not Track (DNT) Signals?">
            <p className="text-gray-400">
              DNT is a feature offered by some browsers which, when enabled,
              sends a signal to websites to request that your browsing is not
              tracked. Company does not currently respond to DNT requests.
            </p>
          </Accordion>

          <Accordion title="14. How will you know when we change the Privacy Policy?">
            <p className="text-gray-400">
              Each time you use the Website, the then-current version of this
              Privacy Policy will apply. Although most changes are likely to be
              minor, we reserve the right to modify this Privacy Policy by
              posting such modification on this page; however, if changes are
              significant, we may provide a more prominent notice or email you.
              Unless we receive your express consent, any revised Privacy Policy
              will apply only to information collected after the effective date
              of such revised Privacy Policy, and not to information collected
              under any earlier version.
            </p>
          </Accordion>

          <Accordion title="15. How can you contact us regarding this Privacy Policy?">
            <p className="text-gray-400">
              The Website contains a Contact Form, which can be used for
              electronic contact. If you use this option, the data entered by
              you in the form will be transmitted to us and stored as part of
              your information. Alternatively, you can contact us via email at
              admin@excellentoffers.com. In this case, your information
              transmitted by email will be stored. If needed, your information
              will be relayed to our Third-Party partners for the sole purpose
              of processing any request by you in the communication.
            </p>
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
        <span className={`${open ? "rotate-180" : ""} transition-transform`}>
          ▼
        </span>
      </button>

      <div
        className={`${open ? "max-h-[500px] p-4" : "max-h-0 overflow-hidden"} transition-all duration-300`}
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
        <span className={`${open ? "rotate-180" : ""} transition-transform`}>
          ▼
        </span>
      </button>

      <div
        className={`${open ? "max-h-[300px] p-3" : "max-h-0 overflow-hidden"} transition-all duration-300`}
      >
        <div className="text-gray-400 text-sm">{children}</div>
      </div>
    </div>
  );
};
export default Privacy;
