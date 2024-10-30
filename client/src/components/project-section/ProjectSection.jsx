import React from 'react';
import styles from './projectSection.module.css';

const ProjectSection = () => {
  return (
    <section className={styles.projectSection}>
      <h1 className={styles.title}>Projects</h1>
      <p className={styles.description}>
        From configuration to security, web apps to big data—whatever the
        infrastructure needs of your application may be, there is a Spring
        Project to help you build it. Start small and use just what you
        need—Spring is modular by design.
      </p>
    </section>
  );
};

export default ProjectSection;
