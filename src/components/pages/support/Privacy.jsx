import Text from "@/components/UI/text";
import React from "react";

const Privacy = () => {
  return (
    <section className="container-fluid pt-40 pb-40">
      <div className="container">
        <Text small mb="mb-20">
          In summary; registrant contact information is NOT shared with third
          parties without your consent. Registrant information is primarily used
          to verify registration and notify you of similar events held by STAR
          Conferences in future. We may share your contact information with
          sponsors but only with your consent upon registering.
        </Text>
        <Text h4 mb="mb-25 mt-25">
          Collection of Information
        </Text>
        <Text small mb="mb-20">
          We collect information you provide directly to us. For example, we
          collect information when you register for an event, fill out a form or
          otherwise communicate with us. The types of information we may collect
          include your email address, mail address and other contact or
          identifying information in order to register for our events. All
          information provided can be modified through our website{" "}
          <a href="https://www.starconferences.org">www.starconferences.org</a>
        </Text>
        <Text h4 mb="mb-25 mt-25">
          Use of Information
        </Text>
        <Text small mb="mb-20">
          We use information about you for various purposes, including to:
          Provide, maintain and improve our Services; Provide and deliver the
          products and services you request, process transactions, and to send
          you related information, including confirmations and invoices; Send
          you technical notices, updates, security alerts and support and
          administrative messages; Respond to your comments, questions and
          requests and provide customer service. By accessing and using the
          Services, you consent to the processing and transfer of your
          information in and to the United States and other countries.
        </Text>
        <Text h4 mb="mb-25 mt-25">
          Sharing of Information
        </Text>
        <Text small mb="mb-20">
          We do not share or sell your information to vendors or third parties.
          However for certain events you register for we do ask for your consent
          to share your contact information with sponsors who may wish to
          contact you regarding special promotions or discounts. Upon
          registering you will have the ability to opt out of such
          communications. You will have the opportunity to “opt-out” by
          following the unsubscribe instructions provided in the e-mail you
          receive.
        </Text>
        <Text h4 mb="mb-25 mt-25">
          Promotional communications
        </Text>
        <Text small mb="mb-20">
          We will periodically send you free newsletters and e-mails that
          directly promote our conferences, events and gatherings. When you
          receive newsletters or promotional communications from us, you may
          indicate a preference to stop receiving further communications from us
          – you will have the opportunity to “opt-out” by following the
          unsubscribe instructions provided in the e-mail you receive. Despite
          your indicated e-mail preferences, we may send you notice of any
          updates to our Terms of Service or Privacy Policy.
        </Text>
        <Text h4 mb="mb-25 mt-25">
          Sensitive Personal Information
        </Text>
        <Text small mb="mb-20">
          STAR CONFERENCES does not directly collect sensitive information such
          as Social Security number etc. All registrations and payments are
          exclusively been done on our website
        </Text>
        <Text h4 mb="mb-25 mt-25">
          Cookies
        </Text>
        <Text small mb="mb-20">
          As you browse STAR CONFERENCES Websites online ad networks we work
          with may place anonymous cookies on your computer, and use similar
          technologies, in order to understand your interests based on your
          (anonymous) online activities, and thus to tailor more relevant ads to
          you. You can choose to accept or decline cookies. Most web browsers
          automatically accept cookies, but you can usually modify your browser
          setting to decline cookies if you prefer. (This will not prevent you
          from seeing ads; the ads simply will not be delivered through these
          targeting methods.)
        </Text>
        <Text h4 mb="mb-25 mt-25">
          Contact Us
        </Text>
        <Text small mb="mb-20">
          If you have any questions about this Privacy Policy, please contact us
          at:{" "}
          <a href="mailto:contact@starconferences.org">
            contact@starconferences.org
          </a>
        </Text>
      </div>
    </section>
  );
};

export default Privacy;
