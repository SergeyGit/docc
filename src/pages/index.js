import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { HomepageHead } from '../components/HomePage/HomePageHead/HomePageHead';
import { TextBlock } from '../components/HomePage/TextBlock/TextBlock';
import { InfoBlock } from '../components/HomePage/InfoBlock/InfoBlock';
import { ComplecsBlock } from '../components/HomePage/ComplecsBlock/ComplecsBlock';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHead />
      <TextBlock />
      <InfoBlock />
      <ComplecsBlock />
    </Layout>
  );
}
