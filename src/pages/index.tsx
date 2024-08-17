import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CenteredTextWithLines from '@site/src/components/CenteredTextWithLines';
import ValuesSection from '@site/src/components/ValuesSection';
import ContactSection from '@site/src/components/ContactSection';
import FAQSection from '@site/src/components/FAQSection';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.fullScreenHeader)}>
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>{siteConfig.title}</h1>
        <p className={styles.headerSubtitle}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <CenteredTextWithLines />
        <ValuesSection />
        <ContactSection />
        <FAQSection />
      </main>
    </Layout>
  );
}
