const KEYS = {
  username: 'admin',
  password: '1234',
};

const ProjectsInfo = [
  {
    title: 'Spring Boot',
    imageSrc: '/src/assets/spring-boot.svg',
    description:
      'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.',
    cardUrl: 'https://spring.io/projects/spring-boot',
  },
  {
    title: 'Spring Framework',
    imageSrc: '/src/assets/spring-framework.svg',
    description:
      'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.',
    cardUrl: 'https://spring.io/projects/spring-framework',
  },
  {
    title: 'Spring Data',
    imageSrc: '/src/assets/spring-data.svg',
    description:
      'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.',
    cardUrl: 'https://spring.io/projects/spring-data',
  },
  {
    title: 'Spring Cloud',
    imageSrc: '/src/assets/spring-cloud.svg',
    description:
      'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.',
    cardUrl: 'https://spring.io/projects/spring-cloud',
  },
  {
    title: 'Spring Cloud Data Flow',
    imageSrc: '/src/assets/spring-data-flow.svg',
    description:
      'Provides an orchestration service for composable data microservice applications on modern runtimes.',
    cardUrl: 'https://spring.io/projects/spring-data-flow',
  },
  {
    title: 'Spring Security',
    imageSrc: '/src/assets/spring-security.svg',
    description:
      'Protects your application with comprehensive and extensible authentication and authorization support.',
    cardUrl: 'https://spring.io/projects/spring-security',
  },
];

module.exports = {
  KEYS,
  ProjectsInfo,
};
