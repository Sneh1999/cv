import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sneh Koul",
  about: "",
  summary: "Software engineer with a curiousity to learn.",
  avatarUrl: "./profile.jpeg",
  contact: {
    email: "snehkoul1999@gmail.com",
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
      degree: "Honors Computer Engineering (w/ distinction)",
      start: "",
      end: "",
    },
  ],
  work: [
    {
      company: "Coinbase",
      link: "https://www.coinbase.com/",
      badges: ["Cryptography", "Go", "gRPC", "Security", "AWS"],
      title: "Software Engineer",
      description: `- Brought an **80% performance** improvement and **saved six-figure on costs** for a **Go**/**gRPC**/**Postgres** service used for fraud detection for transactions on Coinbase and CB Wallet.
- **Led** the project to conslidate privacy preferences for users across different platforms in response to regulatory changes and coordinated across ~5 multi-functional teams.
- Contributed to the **key generation, management, and recovery** process for the **Bitcoin ETF** custody accounts at Coinbase for Blackrock and Grayscale.
- Contributed to open-source by creating the [build-onchain-apps](https://github.com/coinbase/build-onchain-apps) package, to help developers get started building dApps quickly with best practices.
- Contributed to a massive code migration of a legacy **Ruby** monolith to **Go** microservices.`,
    },
    {
      company: "MetaMask",
      link: "https://metamask.io/",
      badges: ["Ethereum", "TypeScript", "React"],
      title: "Software Engineer",
      description: `- Spearheaded the implementation of a pivotal feature that automatically redirects users to the requesting dApp after first installation of MetaMask.
- Migrated the MetaMask extension from **JavaScript** to **TypeScript**, enhancing consistency, readability, and long-term maintainability.
- Added extensive end-to-end testing using **Selenium** and **Jest** to rigorously test the functionality of the MetaMask extension across all RPC methods and **web3.js** compatibility.`,
    },
    {
      company: "Arctic Wolf Networks",
      link: "https://arcticwolf.com/",
      badges: ["Cybersecurity", "Go", "AWS"],
      title: "Software Engineer",
      description: `- Developed and managed **Go** microservices for a cybersecurity vulnerabilities tracking application.
- Implemented user facing features in a **React**/**TypeScript** application, enhancing user experience.
- Optimized deployment processes by setting up CI/CD pipelines via **GitHub Actions**, resulting in reduced deployment time.
- Orchestrated deployment of services as **Docker** containers on **AWS-managed Kubernetes** clusters, ensuring scalability and efficiency in operations.`,
    },
    {
      company: "LearnWeb3",
      link: "https://learnweb3.io/",
      badges: ["Ethereum", "TypeScript", "Solidity", "Rust"],
      title: "Software Engineer",
      description: `- Developed open-source learning codebases in NextJS, React, and Typescript, covering key web3 topics: Account Abstraction, ZK, MEV, NFTs, DeFi, and more.
- Contributed to establishing a leading web3 community, reaching **120,000+ students** and fostering a friendly community culture.`,
    },
    {
      company: "Agilicus",
      link: "https://www.agilicus.com/",
      badges: ["OpenAPI", "Python", "GCP"],
      title: "Software Engineer",
      description: `- Developed an **OAuth 2.0** server and auth flows, and the relevant REST APIs based on **OpenAPI** specifications.
- Streamlined deployment by implementing CI/CD pipelines through **GitHub Actions**, reducing deployment time.
- Developed monitors to detect issues and downtime using **Prometheus**, **ElasticSearch**, and **Kibana** for effective tracking.
- Managed deployment of services as **Docker** containers on **Google Cloud Platform's Kubernetes** clusters, ensuring scalability and operational efficiency.`,
    },
  ],
  languages: ["TypeScript", "Go", "Solidity ", "Python", "Rust"],
  blockchainTools: [
    "viem",
    "wagmi",
    "ethers-js",
    "Hardhat",
    "Foundry",
    "Graph",
    "Chainlink",
    "geth",
  ],
  cloudAndDatabases: [
    "Docker",
    "AWS",
    "Kubernetes",
    "MongoDB",
    "Postgres",
    "Github Actions",
  ],
  projects: [
    {
      title: "CAIP Extended",
      techStack: ["TypeScript", "Open Source"],
      description:
        "TypeScript reference implementation for the Chain Agnostic Standards Association standards to house multiple namespace interfaces for different blockchain ecosystems.",
      link: {
        label: "",
        href: "https://github.com/ChainAgnostic/caip-extended",
      },
    },
    {
      title: "CB One Paymaster",
      techStack: ["NextJS", "TypeScript"],
      description:
        "A paymaster to sponsor ERC-4337 UserOps on Base for users who are Coinbase One subscribers. Won Coinbase Onchain Winter hackathon.",
      link: {
        label: "monito.dev",
        href: "https://github.com/Sneh1999/BridgeKit",
      },
    },
    {
      title: "BridgeKit",
      techStack: ["NextJS", "TypeScript"],
      description:
        "A plug-and-play React library to offer cross-chain bridging and swapping within any dApp. Won Coinbase Onchain Summer hackathon.",
      link: {
        label: "monito.dev",
        href: "https://github.com/Sneh1999/BridgeKit",
      },
    },
    {
      title: "DeFi-dY",
      techStack: ["Solidity", "Typescript"],
      description:
        "A futures protocol to invest in the performance of other DeFi primitives. Won multiple ETH Waterloo sponsor tracks.",
      link: {
        label: "github.com",
        href: "https://devpost.com/software/defy-dy",
      },
    },
    {
      title: "Cygnus",
      techStack: ["Solidity", "Typescript"],
      description:
        "Cygnus is a mechanism that provides a reliable signaling of community preference without arbitrarily defining stakeholder groups. Won multiple ETH New York sponsor tracks.",
      link: {
        label: "Cygnus",
        href: "https://devpost.com/software/zaqar",
      },
    },
    {
      title: "NFT Puzzle Thing",
      techStack: ["Next.js", "Solidity"],
      description:
        "An onchain jigsaw game with randomized lootboxes, gas-free piece trading, and a real-time race to be the first to solve for 1/1 NFT prizes. Won multiple prizes at Scaling Ethereum 2022.",
      link: {
        label: "nftea-room",
        href: "https://devfolio.co/projects/nftea-room-5944",
      },
    },
    {
      title: "NFTea Room",
      techStack: ["Next.js", "Solidity"],
      description:
        "Crowdsourced democratic NFT price attestations protocol designed as a DAO. Won multiple sponsor tracks at ETH Denver 2020.",
      link: {
        label: "nftea-room",
        href: "https://devfolio.co/projects/nftea-room-5944",
      },
    },
    {
      title: "Indices.Fi",
      techStack: ["Rust", "Next.js"],
      description:
        "An onchain index fund protocol to create, manage, invest in, and trade baskets of tokens on NEAR. Won NEAR MetaBuild III hackathon.",
      link: {
        label: "flow",
        href: "https://devfolio.co/projects/flow-chat-2576",
      },
    },
    {
      title: "Flow Chat",
      techStack: ["Swift", "SwiftUI", "Flow", "Cadence"],
      description:
        "Venmo for Flow - the easiest and quickest way to chat with friends, show off your NFTs, and transfer money. Won category overall prize at Flow Hackathon S1.",
      link: {
        label: "flow",
        href: "https://devfolio.co/projects/flow-chat-2576",
      },
    },
  ],
} as const;
