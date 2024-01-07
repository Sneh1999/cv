import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sneh Koul",
  initials: "",
  location: "",
  locationLink: "",
  about: "",
  summary: "Blockchain Engineer/Software Engineer who loves to build cool shit",
  avatarUrl: "./profile.jpeg",
  contact: {
    email: "snehkoul1999@gmail.com",
    tel: "5197292137",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Sneh1999",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/snehkoul/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/snoopies_eth",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Waterloo",
      degree: "Bachelor's Degree in Computer Engineering with a distinction",
      start: "",
      end: "",
    },
  ],
  work: [
    {
      company: "Coinbase",
      link: "https://www.coinbase.com/",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: "./coinbaseLogo.png",
      description: `\u2022 Engineered a robust service leveraging Golang, gRPC, Postgres, to detect, analyze transactions associated with malicious addresses or known hackers. 
\u2022 Lead the development of a privacy-centric cookie management and third-party tracking service for Coinbase.com and the mobile app, integrating React, Typescript, Golang, and Postgres.
\u2022 Contributed to the open-source community by creating the 'build-on-chain-apps' package ([github.com/coinbase/build-onchain-apps]). This resourceful toolkit empowers developers to bootstrap their first web3 project  
\u2022 Utilized Kafka and Golang to generate risk scores for transfers from cold storage to users' wallets. This initiative played a pivotal role in ensuring enhanced security protocols, safeguarding user assets during transactions.`,
    },
    {
      company: "MetaMask",
      link: "https://metamask.io/",
      badges: ["Remote"],
      title: "Sofware Engineer",
      logo: ClevertechLogo,
      description: `\u2022 Spearheaded the implementation of a pivotal feature that automatically redirects users to the dApp post-installation of MetaMask, leveraging TypeScript.
\u2022 Helped migrate the MetaMask extension from JavaScript to TypeScript, enhancing codebase consistency, readability, and maintainability.
\u2022 Worked on comprehensive testing utilizing Selenium and Jest to rigorously test the functionality of the MetaMask extension across all ethersJs functions.`,
    },
    {
      company: "Arctic Wolf Networks",
      link: "https://arcticwolf.com/",
      badges: [],
      title: "Software Engineer",
      logo: JojoMobileLogo,
      description: `\u2022 Developed and managed Golang backend APIs for a vulnerabilities tracking application.
\u2022 Implemented user facing features in a React+Redux application, enhancing user experience.
\u2022 Optimized deployment processes by setting up CI/CD pipelines via GitHub actions, resulting in reduced deployment time.
\u2022 Orchestrated deployment of services as Docker containers on AWS-managed Kubernetes clusters, ensuring scalability and efficiency in operations.`,
    },
    {
      company: "LearnWeb3",
      link: "https://learnweb3.io/",
      badges: [],
      title: "Software Engineer",
      logo: NSNLogo,
      description: `\u2022 Developed open-source learning codebases in NextJS, React, and Typescript, covering key web3 topics: Abstraction, ZK, MEV, NFTs, DeFi (https://github.com/LearnWeb3DAO/smart-contract-wallet)
\u2022 Contributed to establishing a leading web3 learning community, reaching 100,000+ students, fostering education, and collaboration in decentralized technologies.`,
    },
    {
      company: "Agilicus",
      link: "https://www.agilicus.com/",
      badges: [],
      title: "Software Engineer",
      logo: NSNLogo,
      description: `\u2022 Developed REST APIs based on OpenAPI specifications, integrating OAuth 2.0 authentication flows for enhanced security.
\u2022 Streamlined deployment by implementing CI/CD pipelines through GitHub actions, reducing deployment time.
\u2022 Developed monitors to detect issues and downtime using Prometheus, ElasticSearch, and Kibana for effective tracking.
\u2022 Managed deployment of services as Docker containers on Google Cloud Platform's Kubernetes clusters, ensuring scalability and operational efficiency.`,
    },
  ],
  languages: ["JavaScript", "TypeScript", "Golang", "Solidity ", "Python"],
  blockchainTools: ["Viem", "WAGMI", "Ethers", "Hardhat", "Foundry"],
  cloudAndDatabases: [
    "Docker",
    "AWS",
    "Kubernetes",
    "MongoDB",
    "Postgres",
    "Github CI/CD",
  ],
  projects: [
    {
      title: "caip-extended ",
      techStack: ["TypeScript", "Open Source"],
      description:
        "TypeScript reference implementation for CASA’s (Chain Agnostic Standard Association) standards to house multiple namespace-specific standard-compliant interfaces",
      logo: "./casaLogo.jpeg",
      link: {
        label: "",
        href: "https://github.com/ChainAgnostic/caip-extended",
      },
    },
    {
      title: "🏆 bridge-kit @Coinbase Hackathon Finalist",
      techStack: ["NextJS", "TypeScript"],
      description:
        "Created a plug-and-play React library to offer an in-app bridging and swapping experience within any dApp",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://github.com/Sneh1999/BridgeKit",
      },
    },
    {
      title: "🏆 Defi-dy @ETH Waterloo Sponsor Prizes",
      techStack: ["Solidity", "Typescript"],
      description:
        "Developed a futures protocol to invest in the performance of DeFi protocols",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://devpost.com/software/defy-dy",
      },
    },
    {
      title: "🏆 Cygnus  @EthNewYork Sponsor Prizer",
      techStack: ["Solidity", "Typescript"],
      description:
        "Cygnus is a mechanism that provides a reliable signaling of community preference without arbitrarily defining stakeholder groups or falling victim to plutocracy.",
      logo: Minimal,
      link: {
        label: "Cygnus",
        href: "https://devpost.com/software/zaqar",
      },
    },
    {
      title: "🏆 NFTTea Room @ Finalist ETH Denver",
      techStack: ["Side Project", "Next.js", "Solidity"],
      description:
        "A platform and DAO to supply and decide accurate pricing information for NFTs using a decentralized and democratic voting process.",
      logo: BarepapersLogo,
      link: {
        label: "nftea-room",
        href: "https://devfolio.co/projects/nftea-room-5944",
      },
    },
    {
      title: "🏆 Flow Chat - Finalist at Flow Hackathon",
      techStack: ["Side Project", "Swift", "Flow", "Cadence"],
      description:
        "Venmo for Flow - the easiest and quickest way to chat with friends, show off your NFTs, and transfer money.",
      logo: YearProgressLogo,
      link: {
        label: "flow",
        href: "https://devfolio.co/projects/flow-chat-2576",
      },
    },
  ],
} as const;
