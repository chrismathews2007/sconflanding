import Text from "@/components/UI/text";
import React from "react";

const Terms = () => {
  return (
    <section className="container-fluid pt-40 pb-40">
      <div className="container">
        <Text small mb="mb-20">
          Thank you for registering STAR conferences (“Conference”). Regardless
          of whether your registration is submitted by you or your proxy, the
          following Conferences Terms and Conditions (“Terms”) apply to you and
          your participation in any STAR Conference. Depending on the type of
          conference, certain terms below may not apply. “Attendee” for purposes
          of these Terms will include all participants at the Conference,
          including Exhibitors and Attendees. By participating in this
          Conference, you agree to these Terms so please read them carefully.
          These Terms include and incorporate by reference STAR’s Privacy
          Policy. This Conference is organized by STAR, which reserves the
          right, in its sole discretion, to limit or deny access to any entity
          or individual.
        </Text>
        <Text h4 mb="mb-25 mt-25">
          Conferences Registration Payment Terms
        </Text>
        <Text small mb="mb-20">
          Currency Exchange Rate Disclaimer: Client/Cardholder confirms
          acknowledgment and acceptance of a potential gain/loss incurred by any
          adjustments made by their bank due to the currency exchange rate. STAR
          will not be liable or responsible for any loss incurred by the
          Client/Cardholder from an adjustment made due to the currency exchange
          rate. Nor will STAR pursue the Client/Cardholder for collection if
          that adjustment should be made in the Client’s/Cardholder’s favor.
        </Text>
        <Text small mb="mb-20">
          Submission of a registration online, by phone, email or fax,
          constitutes an official registration and intent to attend the
          Conference. Invoices are payable upon receipt. Full payment must be
          received prior to the Conference in order to gain entry.
        </Text>
        <Text small mb="mb-20">
          You agree that, in the unlikely event that STAR cannot resolve your
          payment issue and you dispute the credit card charge, your electronic
          statement may be used as evidence that said charge is valid and just.
          If there are any issues with your credit card charge, please contact
          STAR Finance{" "}
          <a href="mailto:contact@starconferences.org">
            contact@starconferences.org
          </a>
        </Text>
        <Text h4 mb="mb-25 mt-25">
          Attendee Cancellation Policy
        </Text>
        <Text small mb="mb-20">
          If circumstances change and you can no longer attend this Conference,
          you may cancel your registration by providing written notice to the
          STAR Global Conferences team{" "}
          <a href="mailto:contact@starconferences.org">
            contact@starconferences.org
          </a>
        </Text>
        <Text small mb="mb-20">
          <ul>
            <li className="mb-10">
              - Registrations cancelled more than 60 days before the event will
              be refunded 80% - 100% of the registration fees.
            </li>
            <li className="mb-10">
              - Registrations cancelled less than 60 but more than 30 days
              before the event will be refunded 50% of the registration fees.
            </li>
            <li className="mb-10">
              - Registrations cancelled less than 30 days before the event will
              not be eligible for a refund
            </li>
          </ul>
        </Text>
        <Text small mb="mb-20">
          Our attendee cancellation policy is outlined below.
        </Text>
        <Text small mb="mb-20">
          Cancellations received after the cancellation cutoff date or
          nonattendance will not be refunded and/or tickets will not be
          re-activated. For cancellations received after the cutoff date with a
          balance due, the registration amount remains due in full.
        </Text>
        <Text small mb="mb-20">
          Please remember that canceling your registration does not
          automatically cancel your hotel and travel arrangements. Attendees are
          responsible for canceling their own hotel and travel reservations.
        </Text>
        <Text small mb="mb-20">
          Cancellations received after the cancellation cutoff date or
          nonattendance will not be refunded and/or tickets will not be
          re-activated. For cancellations received after the cutoff date with a
          balance due, the registration amount remains due in full.After the
          cancellation cutoff date, payments made are not refundable for any
          reason, including, but not limited to, failure to use conference
          attendance credentials due to illness or due to any event beyond the
          reasonable control of the parties, such as an act of God, natural
          disaster, travel-related problems or an act of terrorism.
        </Text>

        <Text h4 className="mb-20">
          Substitution and Badge Policy
        </Text>
        <Text small mb="mb-20">
          Substitution of registrations may be made at any time up to the
          conference start date. Certain conferences require attendees to be
          qualified by STAR to attend and any substitutions would also require
          approval by STAR. “No Shows” will be deemed a cancellation per the
          cancellation cutoff date in the Cancellation Policy listed above.
          Invitations that are part of a STAR membership or invitational program
          are non-transferable and are not eligible for substitution. Additional
          terms of your STAR agreement may apply. Please consult your STAR
          representative with any questions.
        </Text>
        <Text small mb="mb-20">
          Sharing of Attendee passes is not permitted at any time. Badges are
          issued to, can be picked up by, and used by only the Attendee named in
          the registration. Photo ID will be required for each Attendee when
          collecting a badge onsite. Badges must be worn at all times during the
          Conference.
        </Text>
        <Text small mb="mb-20">
          A STAR Conference badge allows an attendee entry to the overall
          Conference, but cannot guarantee admission to every session, lounge,
          or meeting area. Admission is subject to venue capacity and other
          requirements. For example, certain sessions may be restricted from
          vendor attendees.
        </Text>
      </div>
    </section>
  );
};

export default Terms;
