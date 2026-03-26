import React from 'react';
import { EnquiryPage } from './EnquiryPage';

export function ConnectWithUsPage() {
  return (
    <EnquiryPage
      retreatIdOverride="general"
      variant="connect"
      showBackButton={false}
      subjectPrefix="New Healing Groove Enquiry from"
      topHeading="Connect With Us"
      topDescription="Whether you're planning a wellness program or seeking guidance, share your details and we'll respond within 24 hours."
      contactInfo={{
        phone: '8427775621',
        officialEmail: 'info@thehealinggroove.com',
        alternateEmail: 'chetnahealinggroove@gmail.com',
        linkedinUrl: 'https://www.linkedin.com/company/the-healing-groove/',
        twitterUrl: 'https://x.com/HealingGroove',
        instagramUrl:
          'https://www.instagram.com/the_healing_groove?igsh=ajVnMHV5NmZ3cDQ0&utm_source=qr',
      }}
    />
  );
}

