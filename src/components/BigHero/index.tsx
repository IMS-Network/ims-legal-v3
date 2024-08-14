import React from 'react';
import './styles.module.css'; // Import the CSS file for styling

const LegalSection: React.FC = () => {
  return (
    <section className="legal-section fullwidth align-stretch">
      <div className="background-overlay"></div>
      <div className="shape-divider-top"></div>
      <div className="shape-divider-bottom"></div>
      <div className="content-container column-gap-default">
        <div className="column">
          <div className="column-background-overlay"></div>
          <div className="sticky-wrapper" data-id="column-1">
            <div className="column-content">
              <div className="text-editor">
                <div className="text-content-inner">
                  <h1 className="heading-primary animate-fadeInUp">
                    IMS – Legal
                  </h1>
                  <h2 className="heading-secondary animate-fadeInUp">
                    כל המידע החוקי שלנו במקום אחד
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;
