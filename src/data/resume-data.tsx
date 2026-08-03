import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sneh Koul",
  about: `Software engineer who cares about building impactful products, clean code, and passionate work. I do Rust, Go, and TypeScript.`,
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
      company: "Espresso Systems",
      link: "https://www.espressosys.com/",
      badges: [
        "Golang",
        "Rust",
        "Arbitrum Nitro",
        "OP Stack",
        "TEE",
        "ZK",
      ],
      roles: [
        {
          title: "Team Lead",
          description: `- Led the architecture and delivery of Espresso Network's integration with **Arbitrum Nitro**, enabling adoption across **10+ rollup chains**.
- Managed and provided technical direction to a team of **five engineers**, driving execution across sequencer infrastructure, L1 contracts, and the Arbitrum geth fork.
- Architected a trust-minimized integration using **TEEs**, including **AWS Nitro Enclaves, Intel SGX, and Intel TDX**, across Golang infrastructure and Solidity contracts.
- Introduced **Succinct's SP1 zero-knowledge proofs** for TEE attestations, reducing verification costs by **300x**.`,
        },
        {
          title: "Senior Software Engineer",
          description: `- Built core components of the **Espresso Stack**, a framework for launching rollups on Espresso using **Besu, Rust, and Succinct's SP1**.
- Drove Espresso's **OP Stack** integration across op-geth, op-node, and Kona, contributing production infrastructure in **Golang and Rust**.`,
        },
      ],
    },
    {
      company: "Coinbase",
      link: "https://www.coinbase.com/",
      badges: ["Cryptography", "Go", "gRPC", "GraphQL", "Security", "AWS", "TypeScript", "React"],
      title: "Software Engineer IV",
      description: `- Led a regulatory-critical consolidation of privacy preferences across web and mobile platforms, coordinating execution across approximately **five cross-functional teams**.
- Re-architected a high-volume **Go, gRPC, and Postgres** fraud-detection service, improving performance by **80%** and delivering **six-figure annual cost savings**.
- Contributed to the secure key generation, management, and recovery systems supporting Coinbase's **Bitcoin ETF custody** for BlackRock and Grayscale.
- Created and open-sourced [**build-onchain-apps**](https://github.com/coinbase/build-onchain-apps), giving developers a production-ready foundation for building decentralized applications.
- Helped modernize Coinbase's backend architecture by migrating critical functionality from a legacy **Ruby monolith** to **Go microservices**.`,
    },
    {
      company: "LearnWeb3",
      link: "https://learnweb3.io/",
      badges: ["Ethereum", "TypeScript", "Solidity", "Rust", "Postgres", "GraphQL"],
      title: "Software Engineer",
      description: `- Built open-source educational platforms and reference implementations covering **account abstraction, zero-knowledge proofs, MEV, NFTs, and DeFi** using Next.js, TypeScript, Solidity, and Rust.
- Helped scale LearnWeb3 into a leading developer education platform serving more than **120,000 students** worldwide.
- Contributed to the company's early growth and technical execution, supporting a successful **$1 million fundraising round**.`,
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
  ],
  languages: ["TypeScript", "Go",  "Rust", "Solidity ", "Python",],
  blockchainTools: [
    "viem",
    "wagmi",
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
      title: "UniCoW",
      techStack: ["Solidity", "Typescript"],
      description:
        "A Uniswap v4 hook combined with an EigenLayer AVS to enable coincidence of wants on Uniswap v4.",
      link: {
        label: "Unicow",
        href: "https://github.com/Sneh1999/UniCow",
      },
    },
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
      title: "uniswap-sdk-monorepo",
      techStack: ["Solidity", "Typescript"],
      description:
        "Worked with Uniswap to develop a typescript sdk for interacting with Uniswap v4.",
      link: {
        label: "Unicow",
        href: "https://github.com/Sneh1999/UniCow",
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
  ],
} as const;
