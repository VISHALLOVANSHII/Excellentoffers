import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center">
            <div className="inline-flex lg:mt-10 md:mt-4 items-center gap-2 border border-white/20 rounded-full px-4 py-2 mb-6 bg-white/5">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-400">Legal Agreement</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Please read these terms carefully before using our service.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Important Notice */}
        <div className="border border-white/10 rounded-xl p-6 mb-8 bg-white/5">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 border border-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg
                className="w-4 h-4 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-gray-300 text-sm">
              <span className="text-cyan-400 font-semibold">Important:</span> By
              accessing or using ExcellentOffers, you agree to be bound by these
              Terms of Service and our Privacy Policy.
            </p>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-3">
          {/* Section 1 */}
          <Section title="1. Introduction.">
            <div className="space-y-4 text-gray-400">
              <div>
                <h4 className="font-semibold text-white mb-2">
                  1.1. Agreement.
                </h4>
                <p className="text-sm leading-relaxed">
                  Welcome to ExcellentOffers! Harman Interactive Marketing, LLC
                  ("ExcellentOffers " or "Company") recommends that you ("you")
                  read the following terms and conditions carefully. By
                  accessing or using the ExcellentOffers website, the
                  ExcellentOffers Service, including any software applications
                  made available by ExcellentOffers (together, the "Website" or
                  "Service"), however accessed or used, you agree to be bound by
                  these terms (the "Terms of Service" or the "Agreement"), which
                  constitute a legally binding agreement between ExcellentOffers
                  and you concerning your use of the Service. We encourage you
                  to print the Agreement or save it to your computer for
                  reference.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">
                  1.2. Separate Privacy Policy.
                </h4>
                <p className="text-sm leading-relaxed">
                  By using the Service, you represent and warrant that you have
                  read and understood, and agree to be bound by, this Agreement
                  and Harman Interactive Marketing, LLC's Privacy Policy (the
                  "Privacy Policy"), which is incorporated into this Agreement
                  by reference. The Privacy Policy is available at
                  <Link
                    to="http://excellentoffers.com/privacy"
                    className="text-cyan-400 hover:text-cyan-300 ml-1"
                  >
                    http://excellentoffers.com/privacy
                  </Link>
                  .
                </p>
              </div>

              <div className="border border-white/20 rounded-lg p-4 bg-white/5">
                <h4 className="font-semibold text-white mb-2">
                  1.3. No Permission Without Agreement.
                </h4>
                <p className="text-sm">
                  If you do not understand this Agreement, or do not agree to be
                  bound by it or the Privacy Policy, you may not access or use
                  the Service, and you must immediately cease accessing or using
                  the Service.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">
                  1.4. Arbitration and Remedies.
                </h4>
                <p className="text-sm">
                  These terms contain a mandatory arbitration of disputes
                  provision that requires the use of arbitration on an
                  individual basis to resolve disputes, rather than jury trials
                  or class actions, and also limits the remedies available to
                  you in the event of a dispute. See below for full details.
                </p>
              </div>
            </div>
          </Section>

          {/* Section 2 */}
          <Section title="2. Dispute Resolution.">
            <div className="space-y-4 text-gray-400">
              <p className="text-sm">
                By using the Service, you consent to the collection and use of
                certain information about you, as specified in the Privacy
                Policy discussed in Section 1.3 (Separate Privacy Policy).
                ExcellentOffers encourages users of the Service to frequently
                check the Privacy Policy for changes.
              </p>

              <div>
                <h4 className="font-semibold text-white mb-2">
                  2.1 Binding Arbitration.
                </h4>
                <p className="text-sm mb-2">
                  2.1.1. If you and ExcellentOffers cannot resolve a Claim
                  through negotiations, either party may elect to have the Claim
                  finally and exclusively resolved by binding arbitration.
                  "Claim(s)" shall mean all claims, actions, demands, causes of
                  action, and other proceedings, including but not limited to
                  legal costs and fees. Any election to arbitrate by one party
                  shall be final and binding on the other(s).
                </p>
                <p className="text-sm">
                  2.1.2. The Federal Arbitration Act governs the interpretation
                  and enforcement of this agreement to arbitrate. The
                  arbitration shall be commenced and conducted through JAMS
                  (www.jamsadr.com) under the Streamlined Rules, as modified by
                  this agreement to arbitrate. All remedies available to the
                  parties under applicable federal, state, or local laws shall
                  remain available in arbitration. The parties shall each
                  participate in the selection of a neutral arbitrator pursuant
                  to the Streamlined Rules. Unless you and Company agree
                  otherwise in writing, the final arbitration hearing shall take
                  place in person at the JAMS facility located in or nearest to
                  your city of residence. If you initiate arbitration against
                  Company, you will be required to pay an initial fee of $250
                  (unless you qualify for a waiver), and all other arbitration
                  costs (including any remaining JAMS Case Management Fee and
                  all professional fees for the arbitrator's services) shall be
                  paid as determined by the arbitrator. If Company initiates
                  arbitration against you, Company shall pay all costs
                  associated with the arbitration. If JAMS is unavailable to
                  arbitrate a dispute or claim, you and Company agree to
                  arbitrate using an alternative arbitral forum. Regardless of
                  the outcome of the arbitration, you and Company will each pay
                  your own attorney's fees and costs unless an award of
                  attorney's fees is available under applicable statute. The
                  arbitrator's award will consist of a written statement stating
                  the disposition of each Claim. The award will also provide a
                  concise written statement of the essential findings and
                  conclusions on which the award is based. The arbitrator must
                  follow applicable law, and any award may be challenged if the
                  arbitrator fails to do so. Either party may litigate to compel
                  arbitration in a Court of Competent Jurisdiction, to stay
                  proceedings pending arbitration, or to modify, confirm,
                  vacate, or enter judgment on the award entered by the
                  arbitrator. You agree that without the terms above and below,
                  you would have the right to sue in court with a jury trial or
                  participate in a class action.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">
                  2.2 Waiver of Class Actions and Joinder of Claims.
                </h4>
                <p className="text-sm mb-2">
                  2.2.1. You and ExcellentOffers agree that any arbitration
                  shall be limited to each Claim individually. You and
                  ExcellentOffers agree that each may only bring claims against
                  the other in your or ExcellentOffers's individual capacity and
                  not as a plaintiff or class member in any purported class or
                  representative proceeding. You and ExcellentOffers knowingly
                  and voluntarily waive any right to proceed in a class action
                  or representative proceeding or to join claims or sue in court
                  with a jury.
                </p>
                <p className="text-sm">
                  2.2.2. If this specific provision is found to be unenforceable
                  in a Court of Competent Jurisdiction, the Claim will still be
                  finally and exclusively resolved by binding arbitration upon
                  the election of either party, and any election to arbitrate by
                  one party shall be final and binding on the other(s). In
                  addition: (1) no arbitration shall be joined with any other
                  arbitration, and (2) there is no right for any Claim to be
                  arbitrated on a class-action basis or to employ class action
                  procedures, and (3) there is no right of authority for any
                  dispute to be brought in a purported representative capacity
                  on behalf either of the general public or any other
                  individuals.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">
                  2.3. Remedies in Aid of Arbitration; Equitable Relief.
                </h4>
                <p className="text-sm">
                  This agreement to arbitrate will not preclude you or
                  ExcellentOffers from seeking provisional remedies in aid of
                  arbitration, including without limitation orders to stay a
                  court action, compel arbitration, or confirm an arbitral
                  award, from a Court of Competent Jurisdiction. Furthermore,
                  this agreement to arbitrate will not preclude you or
                  ExcellentOffers from applying to a Court of Competent
                  Jurisdiction for a temporary restraining order, preliminary
                  injunction, or other interim or conservatory relief, as
                  necessary. "Court of Competent Jurisdiction" means any federal
                  or state court: (1) that has jurisdiction over the subject
                  matter; and (2) that is located in San Francisco, California.
                  Choice of Law and Venue. This Agreement, including without
                  limitation this Agreement's interpretation, shall be treated
                  as though this Agreement were executed and performed in the
                  State of California, and shall be governed by and construed in
                  accordance with the laws of the State of California without
                  regard to its conflict of law principles. The language in this
                  Agreement shall be interpreted in accordance with its fair
                  meaning and not strictly for or against either party. The
                  proper venue for any judicial action arising out of, relating
                  to, or in connection with this Agreement, if authorized
                  herein, will be the state and federal courts located in San
                  Francisco, California. The parties stipulate to, and agree to
                  waive any objection to, the personal jurisdiction and venue of
                  such courts, and further expressly submit to extraterritorial
                  service of process.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">
                  2.4. Choice of Law and Venue.
                </h4>
                <p className="text-sm">
                  This Agreement, including without limitation this Agreement's
                  interpretation, shall be treated as though this Agreement were
                  executed and performed in the State of California, and shall
                  be governed by and construed in accordance with the laws of
                  the State of California without regard to its conflict of law
                  principles. The language in this Agreement shall be
                  interpreted in accordance with its fair meaning and not
                  strictly for or against either party. The proper venue for any
                  judicial action arising out of, relating to, or in connection
                  with this Agreement, if authorized herein, will be the state
                  and federal courts located in San Francisco, California. The
                  parties stipulate to, and agree to waive any objection to, the
                  personal jurisdiction and venue of such courts, and further
                  expressly submit to extraterritorial service of process.
                </p>
              </div>
            </div>
          </Section>

          {/* Section 3 */}
          <Section title="3. Changes to Agreement and Privacy Policy.">
            <p className="text-gray-400 text-sm">
              Internet technology and the applicable laws, rules, and
              regulations change frequently. Accordingly, ExcellentOffers
              reserves the right to change this Agreement and its Privacy Policy
              at any time upon notice to you, to be given by the posting of a
              new version or a change notice. It is your responsibility to
              review this Agreement and the Privacy Policy periodically. If at
              any time you find either this Agreement or the Privacy Policy
              unacceptable, you must immediately cease accessing and/or using
              the Service.
            </p>
          </Section>

          {/* Section 4 */}
          <Section title="4. Eligibility.">
            <p className="text-gray-400 text-sm">
              By accessing and/or using the Service, including by doing so after
              accessing this Agreement, you represent and warrant that you are
              at least 18 years old, and are otherwise legally qualified to
              enter into and form contracts under applicable law. If you are
              using the Service on behalf of a company, you further represent
              and warrant that you are authorized to act and enter into
              contracts on behalf of that company.
            </p>
          </Section>

          {/* Section 5 */}
          <Section title="5. Limited License.">
            <p className="text-gray-400 text-sm">
              Subject to your compliance with these Terms of Service,
              ExcellentOffers grants you a non-exclusive, non-sublicensable,
              revocable, non-transferable, limited license to access and use the
              ExcellentOffers Website. The Service, including any portion of the
              ExcellentOffers Website, may not be reproduced, duplicated,
              copied, modified, sold, resold, distributed, transmitted, or
              otherwise exploited for any commercial purpose without the prior,
              express written consent of ExcellentOffers. All rights not
              expressly granted in this Agreement are reserved by
              ExcellentOffers. Without limitation, this Agreement grants you no
              rights to the intellectual property of ExcellentOffers or any
              other party, except as expressly stated in this Agreement. Your
              rights under this section will immediately terminate if you
              breach, actually or potentially, in the sole judgment of
              ExcellentOffers, any provision of this Agreement or violate any
              applicable law.
            </p>
          </Section>

          {/* Section 6 */}
          <Section title="6. No Reliance on Third Party Content.">
            <p className="text-gray-400 text-sm">
              Opinions, advice, statements, or other information made available
              through the Service by third parties are those of their respective
              authors and should not necessarily be relied upon. Those authors
              are solely responsible for their content. ExcellentOffers does
              not: (i) guarantee the accuracy, completeness, or usefulness of
              any third-party information accessible on or through the Service;
              or (ii) adopt, endorse, or accept responsibility for the accuracy
              or reliability of any opinion, advice, or statement made by a
              third party through the Service. Under no circumstances will
              ExcellentOffers be responsible for any loss or damage resulting
              from your reliance on third-party information or content.
            </p>
          </Section>

          {/* Section 7 */}
          <Section title="7. Assumption of Risk; Release.">
            <p className="text-gray-400 text-sm">
              You knowingly and freely assume all risk when using the Service,
              which allows members to receive a free Goodie Box, subject to
              availability, in exchange for signing up and providing your honest
              opinion. You understand that Company does not manufacture any
              products, and product descriptions and instructions are qualified
              in their entirety by the information available from manufacturers
              of the products. You should contact the manufacturer or your
              physician if you have any questions.
            </p>
          </Section>

          {/* Section 8 */}
          <Section title="8. Disclaimers; Limitation of Liability..">
            <div className="space-y-4 text-gray-400">
              <div>
                <h4 className="font-semibold text-white mb-2">
                  8.1. No Warranties..
                </h4>
                <p className="text-sm">
                  ExcellentOffers, on behalf of itself and its licensors and
                  suppliers, expressly disclaims any and all warranties, express
                  or implied, regarding the Service, arising by operation of law
                  or otherwise, including without limitation any and all implied
                  warranties of merchantability, fitness for a particular
                  purpose, non-infringement, no encumbrance, or title, in
                  addition to any warranties arising from a course of dealing,
                  usage, or trade practice. Neither ExcellentOffers nor its
                  licensors or suppliers warrants that the Service will meet
                  your requirements, that you will get a Goodie Box (including
                  as they are subject to availability) or that the operation of
                  the Service will be uninterrupted or error-free.
                  ExcellentOffers provides the Service on an "as is" and "as
                  available" basis. ExcellentOffers disclaims all implied
                  liability for damages arising out of the furnishing of the
                  Service pursuant to this Agreement, including without
                  limitation, mistakes, omissions, interruptions, delays,
                  tortious conduct, errors, representations, or other defects
                  arising out of the failure to the furnish the Service, whether
                  caused by acts of commission or omission, or any other damage
                  occurring. ExcellentOffers shall not be liable for any
                  indirect, incidental, special, consequential, or punitive
                  damages (including without limitation damages for lost profits
                  or lost revenues), whether caused by the acts or omissions of
                  ExcellentOffers, Company Parties, or ExcellentOffers users, or
                  their agents or representatives.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">
                  8.2. Your Responsibility for Loss or Damage; Backup of Data.
                </h4>
                <p className="text-sm mb-2">
                  8.2.1. You agree that your use of the Service is at your sole
                  risk. You will not hold ExcellentOffers or its licensors and
                  suppliers, as applicable, responsible for any loss or damage
                  that results from your access to and/or use of the Service,
                  including without limitation any loss or damage to any of your
                  computers, mobile devices, including without limitations
                  tablets and/or smartphones, or data. The Service may contain
                  bugs, errors, problems, or other limitations.
                </p>
                <p className="text-sm">
                  8.2.2. Importantly, you acknowledge that a catastrophic disk
                  failure or other similar event could result in the loss of all
                  of the data related to your account. You agree and understand
                  that it is your responsibility to backup your data to your
                  personal computer or external storage device and to ensure
                  such backups are secure.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">
                  8.3. Limitation of Liability.
                </h4>
                <p className="text-sm">
                  In no event shall ExcellentOffers or its licensors or
                  suppliers be liable to you for any claims arising from your
                  use with the Service, including without limitation for
                  special, incidental, or consequential damages, lost profits,
                  lost data or confidential or other information, loss of
                  privacy, costs of procurement of substitute goods or services,
                  failure to meet any duty including without limitation of good
                  faith or of reasonable care, negligence, or otherwise,
                  regardless of the foreseeability of those damages or of any
                  advice or notice given to ExcellentOffers or its licensors and
                  suppliers arising out of or in connection with your use of the
                  Service; and ExcellentOffers shall not be liable for any
                  third-party products or content, whether or not they are
                  available on or through the Service. These limitations shall
                  apply regardless of whether the damages arise out of breach of
                  contract, tort, or any other legal theory or form of action.
                  You agree that these limitations of liability represent a
                  reasonable allocation of risk and are a fundamental element of
                  the basis of the bargain between ExcellentOffers and you. The
                  Service would not be provided without such limitations.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">
                  8.4. Application of Disclaimers.
                </h4>
                <p className="text-sm">
                  The above disclaimers, waivers, and limitations do not in any
                  way limit any other disclaimer of warranties or any other
                  limitation of liability in any other agreement between you and
                  ExcellentOffers or between you and any of ExcellentOffers's
                  licensors and suppliers. Some jurisdictions may not allow the
                  exclusion of certain implied warranties or the limitation of
                  certain damages, so some of the above disclaimers, waivers,
                  and limitations of liability may not apply to you.
                  ExcellentOffers's licensors and suppliers are intended
                  third-party beneficiaries of these disclaimers, waivers, and
                  limitations. No advice or information, whether oral or
                  written, obtained by you through the Service or otherwise
                  shall alter any of the disclaimers or limitations stated in
                  this section.
                </p>
              </div>
            </div>
          </Section>

          {/* Section 9 */}
          <Section title="9. User Account, Accuracy, and Security.">
            <div className="space-y-4 text-gray-400">
              <div>
                <h4 className="font-semibold text-white mb-2">
                  9.1. User Account.
                </h4>
                <p className="text-sm">
                  To use the Service, you must register and create a user
                  account ("Account"). During the Account creation process, you
                  will be asked to provide information that personally
                  identifies you ("Personal Information").
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  9.2. No Pseudonyms.
                </h4>
                <p className="text-sm">
                  You must use your real name on ExcellentOffers.
                </p>
              </div>
            </div>
          </Section>

          {/* Section 10 */}
          <Section title="10. Consent to Receive Electronic Communications from Company.">
            <p className="text-gray-400 text-sm">
              By registering for the Service and providing your name, email,
              postal or residential address, and/or phone number through the
              Service, you expressly consent to receive electronic and other
              communications from ExcellentOffers, over the short term and
              periodically, including email and short-message service ("SMS" or
              "text message") communications. These communications will be about
              the Service, new product offers, promotions, and other matters.
              Further, by joining the ExcellentOffers Facebook page, you consent
              to participating in the ExcellentOffers Facebook promotions and
              drawings, and you consent to receive communications about any
              promotions or drawings that you win. You may opt out of receiving
              electronic communications at any time by following the unsubscribe
              instructions contained in each communication, or by sending an
              email to admin@excellentoffers.com. You agree that these
              electronic communications satisfy any legal requirements that
              communications or notices to you be in writing.
            </p>
          </Section>

          {/* Section 11 */}
          <Section title="11. Third Party Websites.">
            <p className="text-gray-400 text-sm">
              The Service may be linked with or link to the websites of third
              parties ("Third-Party Websites"), some of whom may have
              established relationships with ExcellentOffers and some of whom
              may not. ExcellentOffers does not have control over the content
              and performance of Third-Party Websites. ExcellentOffers has not
              reviewed, and cannot review or control, all of the material,
              including computer software or other goods or services, made
              available on Third-Party Websites. Accordingly, ExcellentOffers
              does not represent, warrant, or endorse any Third-Party Websites,
              or the accuracy, currency, content, fitness, lawfulness, or
              quality of the information, material, goods, or services available
              through Third-Party Websites. ExcellentOffers disclaims, and you
              agree to assume, all responsibility and liability for any damages
              or other harm, whether to you or to third parties, resulting from
              your use of Third-Party Websites.
            </p>
          </Section>

          {/* Section 12 */}
          <Section title="12. Your Responsibility.">
            <p className="text-gray-400 text-sm">
              You represent and warrant that your use of the Service will be in
              accordance with this Agreement and any other ExcellentOffers
              policies, and with any applicable laws or regulations. In
              particular, you agree and understand that you may be held legally
              responsible for damages suffered by other users or third parties
              as the result of your remarks, information, feedback, or other
              content posted or made available through the Service that is
              deemed defamatory or otherwise legally actionable. Under Section
              230 of the Federal Communications Decency Act of 1996,
              ExcellentOffers is not legally responsible, nor can it be held
              liable for damages of any kind, arising out of or in connection to
              any defamatory or otherwise legally actionable remarks,
              information, feedback, or other user content posted or made
              available through the Service.
            </p>
          </Section>

          {/* Section 14 */}
          <Section title="14. Intellectual Property.">
            <div className="space-y-4 text-gray-400">
              <div>
                <h4 className="font-semibold text-white mb-2">
                  14.1. Compliance with Law.
                </h4>
                <p className="text-sm">
                  You represent and warrant that, when using the Service, you
                  will obey all applicable laws and respect the intellectual
                  property rights of others. Your use of the Service is at all
                  times governed by and subject to copyright and other
                  intellectual property laws. You agree not to upload, post,
                  transmit, display, perform, or distribute any content,
                  information, or other materials in violation of any third
                  party's copyrights, trademarks, or other intellectual property
                  or proprietary rights.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">
                  14.2. Trademarks.
                </h4>
                <p className="text-sm">
                  ExcellentOffers and the ExcellentOffers logo (collectively,
                  the "Company Marks") are trademarks or registered trademarks
                  of ExcellentOffers. Other trademarks, service marks, graphics,
                  logos, and domain names appearing anywhere on, through, or in
                  connection with the Service may be the trademarks of Company
                  or third parties. Neither your use of the Service nor this
                  Agreement grant you any right, title, or interest in, or any
                  license to reproduce or otherwise use, the Company Marks or
                  any third-party trademarks, service marks, graphics, logos, or
                  domain names. You agree that any goodwill in the Company Marks
                  generated as a result of your use of the Service will inure to
                  the benefit of ExcellentOffers, and you agree to assign, and
                  do assign, all such goodwill to ExcellentOffers. You shall not
                  at any time, nor shall you assist others to, challenge
                  ExcellentOffers's right, title, interest in, or the validity
                  of, the Company Marks.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">
                  14.3. Copyrighted Materials; Copyright Notice.
                </h4>
                <p className="text-sm">
                  All content and other materials available through the Service,
                  including without limitation the ExcellentOffers logo, design,
                  text, graphics, and other files, and their selection,
                  arrangement, and organization, excluding user content, are
                  either owned by ExcellentOffers or are the property of
                  ExcellentOffers's licensors and suppliers. Except as
                  explicitly provided, neither your use of the Service nor this
                  Agreement grant you any right, title, or interest in any such
                  materials.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">
                  14.4. DMCA Policy.
                </h4>
                <p className="text-sm mb-2">
                  14.4.1. As ExcellentOffers asks others to respect
                  ExcellentOffers's intellectual property rights,
                  ExcellentOffers respects the intellectual property rights of
                  others. ExcellentOffers follows the notice and takedown
                  procedures in the Digital Millennium Copyright Act ("DMCA").
                </p>
                <p className="text-sm mb-2">
                  14.4.2. If you believe content located on or linked to by the
                  Service violates your copyright, please immediately notify
                  ExcellentOffers by emailed DMCA takedown notice ("Infringement
                  Notice"), providing the information described below. If
                  ExcellentOffers takes action in response to an Infringement
                  Notice, it will make a good faith attempt to contact the party
                  who made the content available at the most recent email
                  address that party provided to ExcellentOffers.
                </p>
                <p className="text-sm mb-2">
                  14.4.3. Under the DMCA, you may be held liable for damages
                  based on material misrepresentations in your Infringement
                  Notice. You must also make a good-faith evaluation of whether
                  the use of your content is a fair use.
                </p>
                <p className="text-sm mb-2">
                  14.4.4 The DMCA requires that all Infringement Notices must
                  include the following:
                </p>
                <p className="text-sm mb-1">
                  14.4.4.1 A signature, electronic or physical, of the copyright
                  owner or a person authorized to act on their behalf;
                </p>
                <p className="text-sm mb-1">
                  14.4.4.2 An identification of the copyright claimed to have
                  been infringed;
                </p>
                <p className="text-sm mb-1">
                  14.4.4.3 A description of the nature and location of the
                  material that you claim to infringe your copyright, in
                  sufficient detail to permit ExcellentOffers to find and
                  positively identify that material;
                </p>
                <p className="text-sm mb-1">
                  14.4.4.4 Your name, address, telephone number, and email
                  address; and
                </p>
                <p className="text-sm mb-2">
                  14.4.4.5 A statement by you: (i) that you believe in good
                  faith that the use of the material that you claim to infringe
                  your copyright is not authorized by law, or by the copyright
                  owner or such owner's agent; and, (ii) under penalty of
                  perjury, that all of the information contained in your
                  Infringement Notice is accurate, and that you are either the
                  copyright owner or a person authorized to act on their behalf.
                </p>
                <p className="text-sm mb-2">
                  14.4.5. Infringement Notices should be sent to
                  admin@excellentoffers.com with the subject line "DMCA Notice:
                  (INSERT YOUR NAME OR YOUR COMPANY'S NAME)".
                </p>
                <p className="text-sm">
                  14.4.6. ExcellentOffers will respond to all DMCA-compliant
                  Infringement Notices, including, as required or appropriate,
                  by removing the offending material or disabling all links to
                  the offending material.
                </p>
              </div>
            </div>
          </Section>

          {/* Section 15 */}
          <Section title="15. Indemnity by You.">
            <div className="space-y-4 text-gray-400">
              <p className="text-sm">
                15.1. Without limiting any indemnification provision of this
                Agreement, you (the "Indemnitor") agree to defend, indemnify,
                and hold harmless ExcellentOffers and the Company Parties
                (collectively, the "Indemnitees") from and against any and all
                Claims arising out of or relating to: (i) your conduct; (ii)
                your breach of this Agreement, including without limitation any
                representation or warranty contained in this Agreement; (iii)
                your access to or use of the Service, including any conduct or
                content stemming from your Account; (iv) your provision to
                ExcellentOffers or any of the Indemnitees of information or
                other data; (v) your violation or alleged violation of any law
                or regulation; or (vi) your violation or alleged violation of
                any third party's copyrights, trademarks, or other intellectual
                property or proprietary rights.
              </p>
              <p className="text-sm">
                15.2. The Indemnitees each have the individual right, but not
                the obligation, to participate through counsel of their choice
                in any defense by you of any Claim. You may not settle any Claim
                without the prior written consent of the concerned Company
                Parties.
              </p>
              <p className="text-sm">
                15.3. Without limitation, the Indemnitor also agrees to
                compensate ExcellentOffers for any and all lost revenues, future
                lost profits, reasonable search costs, and any other reasonable
                expenses resulting from any Indemnitor violation of Section 13
                (Prohibited Uses), including without limitation any suspension
                of affiliate accounts or affiliate payment attributable to
                fraudulent efforts to manipulate or otherwise modify reported
                impressions generated by the Company Parties under any affiliate
                advertising agreement.
              </p>
            </div>
          </Section>

          {/* Section 16 */}
          <Section title="16. Termination.">
            <div className="space-y-4 text-gray-400">
              <div>
                <h4 className="font-semibold text-white mb-2">
                  16.1. By Company.
                </h4>
                <p className="text-sm">
                  Without limiting any other provision of this Agreement,
                  ExcellentOffers reserves the right to, in ExcellentOffers's
                  sole discretion and without notice or liability, deny use of
                  the Service to any person for any reason or for no reason at
                  all, including without limitation for any breach or suspected
                  breach of any representation, warranty, or covenant contained
                  in this Agreement, or of any applicable law or regulation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  16.2. Automatic Termination Upon Breach by You.
                </h4>
                <p className="text-sm">
                  This Agreement shall automatically terminate if you breach any
                  of this Agreement's representations, warranties, or covenants.
                  Such termination shall be automatic and shall not require any
                  action by ExcellentOffers.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">16.3. By You.</h4>
                <p className="text-sm">
                  You may terminate this Agreement and your rights under it at
                  any time, for any or no reason at all, by providing to
                  ExcellentOffers notice of your intention to do so by ceasing
                  using the Service.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  16.4. Effect of Termination.
                </h4>
                <p className="text-sm mb-2">
                  16.4.1. Any termination of this Agreement automatically
                  terminates all rights and licenses granted to you under this
                  Agreement, including all rights to use the Service. Upon
                  termination, you shall cease any use of the Service.
                </p>
                <p className="text-sm">
                  16.4.2. After Termination. ExcellentOffers reserves the right
                  to exercise whatever means it deems necessary to prevent your
                  unauthorized use of the Service, including without limitation
                  technological barriers such as IP blocking and direct contact
                  with your Internet Service Provider.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  16.5. Survival.
                </h4>
                <p className="text-sm">
                  Upon termination, all rights and obligations created by this
                  Agreement will terminate, except that Sections that by their
                  nature intend to survive, including Sections regarding dispute
                  resolution, disclaimers, representations and warranties,
                  prohibited conduct, intellectual property, limitations of
                  liability, indemnity, assumption of risk, and general
                  provisions, will survive any termination of this Agreement.
                </p>
              </div>
            </div>
          </Section>

          {/* Section 17 */}
          <Section title="17. General.">
            <div className="space-y-4 text-gray-400">
              <div>
                <h4 className="font-semibold text-white mb-2">
                  17.1. Entire Agreement.
                </h4>
                <p className="text-sm">
                  This Agreement constitutes the entire agreement between
                  ExcellentOffers and you concerning your use of the Service.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  17.2. Partial Invalidity.
                </h4>
                <p className="text-sm">
                  Should any part of this Agreement be declared invalid, void,
                  or unenforceable by a Court of Competent Jurisdiction, such
                  decision shall not affect the validity of any remaining
                  portion of this Agreement, which shall remain in full force
                  and effect, and the parties acknowledge and agree that they
                  would have executed the remaining portion without including
                  the part so adjudged to be invalid, void, or unenforceable.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  17.3. Amendments.
                </h4>
                <p className="text-sm">
                  This Agreement may only be modified by a written amendment
                  signed by an authorized executive of ExcellentOffers, or by
                  the unilateral amendment of this Agreement by ExcellentOffers
                  along with the posting by ExcellentOffers of that amended
                  version.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  17.4. No Waiver.
                </h4>
                <p className="text-sm">
                  A waiver by either party of any term or condition of this
                  Agreement, or any breach, in any one instance, will not waive
                  that term or condition or any later breach.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  17.5. Assignment.
                </h4>
                <p className="text-sm">
                  This Agreement and all of your rights and obligations under it
                  will not be assignable or transferable by you without the
                  prior written consent of ExcellentOffers. This Agreement will
                  be binding upon and will inure to the benefit of the parties,
                  their successors, and permitted assigns.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  17.6. Independent Contractors.
                </h4>
                <p className="text-sm">
                  You and ExcellentOffers are independent contractors, and no
                  agency, partnership, joint venture, or employee-employer
                  relationship is intended or created by this Agreement.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  17.7. No Third-Party Beneficiaries.
                </h4>
                <p className="text-sm">
                  There are no third-party beneficiaries to this Agreement, with
                  the following exceptions: the Company Parties and
                  ExcellentOffers's licensors and suppliers (to the extent
                  expressly stated in this Agreement).
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">17.8.</h4>
                <p className="text-sm">
                  You acknowledge and agree that any actual or threatened
                  infringement of proprietary rights by you would cause
                  irreparable injury to ExcellentOffers and ExcellentOffers's
                  licensors and suppliers, and would therefore entitle
                  ExcellentOffers or ExcellentOffers's licensors or suppliers,
                  as the case may be, to seek preliminary and permanent
                  injunctive relief.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  17.9. Notices.
                </h4>
                <p className="text-sm">
                  All notices required or permitted to be given under this
                  Agreement must be in writing. ExcellentOffers shall give any
                  notice by email sent to the most recent email address, if any,
                  provided by the intended recipient to ExcellentOffers. You
                  agree that any notice received from ExcellentOffers
                  electronically satisfies any legal requirement that such
                  notice be in writing. You bear the sole responsibility of
                  ensuring that your email address on file with ExcellentOffers
                  is accurate and current, and notice to you shall be deemed
                  effective upon the sending by ExcellentOffers of an email to
                  that address. You shall give any notice to ExcellentOffers by
                  email to admin@excellentoffers.com.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  17.10. Headings.
                </h4>
                <p className="text-sm">
                  The headings in this Agreement are for convenience only and
                  shall have no legal or contractual effect.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  17.11. Severability.
                </h4>
                <p className="text-sm">
                  If any provision of this Agreement is adjudged to be invalid,
                  illegal, or unenforceable, that shall not affect the
                  enforceability of any other provision of this Agreement; and
                  the provision deemed to be invalid, illegal, or unenforceable
                  shall be modified so that it is valid, legal, and enforceable
                  and to the fullest extent reflects the intention of the
                  parties.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* Footer Contact */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white mb-2">
              Contact Us
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <a
              href="mailto:admin@excellentoffers.com"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              admin@excellentoffers.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Section Accordion Component
const Section = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
      >
        <h2 className="text-base md:text-lg font-semibold text-white">
          {title}
        </h2>
        <div
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-5 pt-0 border-t border-white/10">{children}</div>
      </div>
    </div>
  );
};

export default TermsOfService;
