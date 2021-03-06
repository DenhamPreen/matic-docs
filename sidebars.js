/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  introduction: [
    "home/new-to-matic",
    {
      type: "category",
      label: "Blockchain Basics",
      items: [
        "home/blockchain-basics/blockchain",
        "home/blockchain-basics/blockchain-types",
        "home/blockchain-basics/consensus-mechanism",
        "home/blockchain-basics/ethereum",
        "home/blockchain-basics/matic",
        "home/blockchain-basics/solidity",
        "home/blockchain-basics/transactions",
        "home/blockchain-basics/gas",
        "home/blockchain-basics/accounts",
        "home/blockchain-basics/sidechain",
        "home/blockchain-basics/import-account-to-metamask",
      ],
    },
    "home/architecture/matic-architecture",
    // "home/architecture/matic-flow",
    "home/architecture/security-models",
    // "home/architecture/bor-chain",
    // "home/architecture/heimdall-chain",
    "home/faq",
  ],
  development: [
    "develop/getting-started",
    {
      type: "category",
      label: "Deploying on Matic",
      items: ["develop/remix", "develop/truffle"],
    },
    {
      type: "category",
      label: "Network Details",
      items: [
        "develop/network-details/network",
        "develop/network-details/mapped-tokens",
        "develop/network-details/gas-token",
        "develop/network-details/genesis-contracts",
        "develop/network-details/full-node-deployment",
        "develop/network-details/matic-gas-station",
      ],
    },
    {
      type: "category",
      label: "Tools",
      items: [
        {
          type: "link",
          label: "Matic Faucet",
          href: "https://faucet.matic.network/",
        },
        {
          type: "link",
          label: "RPC Health",
          href: "https://status.matic.today",
        },
        {
          type: "link",
          label: "Checkpoint Status",
          href: "https://status.matic.today/#/checkpoints",
        },
      ],
    },
    {
      type: "category",
      label: "Using Metamask",
      items: [
        "develop/metamask/hello",
        "develop/metamask/custom-tokens",
        "develop/metamask/testnet",
        "develop/metamask/multiple-accounts",
      ],
    },

    {
      type: "category",
      label: "Wallets",
      items: [
        "develop/wallets/getting-started",
        "develop/wallets/metamask",
        "develop/wallets/torus",
        "develop/wallets/portis",
        "develop/wallets/fortmatic",
        "develop/wallets/arkane",
        "develop/wallets/walletconnect",
      ],
    },
    {
      type: "category",
      label: "Ethereum ↔ Matic",
      items: [
        "develop/ethereum-matic/getting-started",
        {
          type: "category",
          label: "PoS Bridge",
          items: [
            "develop/ethereum-matic/pos/getting-started",
            "develop/ethereum-matic/pos/eth-deposit-withdraw",
            "develop/ethereum-matic/pos/erc20-deposit-withdraw",
            "develop/ethereum-matic/pos/erc721-deposit-withdraw",
            "develop/ethereum-matic/pos/erc1155-deposit-withdraw",
            "develop/ethereum-matic/pos/deployment",
            "develop/ethereum-matic/pos/contract-interfaces",
            "develop/ethereum-matic/pos/support-multiple-token",
          ],
        },
        {
          type: "category",
          label: "Plasma Bridge",
          items: [
            "develop/ethereum-matic/plasma/getting-started",
            "develop/ethereum-matic/plasma/mapping-assets",
            "develop/ethereum-matic/plasma/deposit",
            "develop/ethereum-matic/plasma/transfer",
            "develop/ethereum-matic/plasma/withdraw",
            "develop/ethereum-matic/plasma/api-reference",
          ],
        },
        "develop/ethereum-matic/submit-mapping-request",
      ],
    },
    {
      type: "category",
      label: "Meta Transactions",
      items: [
        "develop/metatransactions/getting-started",
        "develop/metatransactions/metatransactions-biconomy",
        "develop/metatransactions/metatransactions-gsn",
      ],
    },
    {
      type: "category",
      label: "Oracles",
      items: [
        "develop/oracles/getting-started",
        "develop/oracles/razor",
        "develop/oracles/bandchain",
      ],
    },
    "develop/fiat-on-ramp",
    {
      type: "category",
      label: "Realtime Updates",
      items: [
        "develop/dagger",
        {
          type: "category",
          label: "Zapier - Mulitple Apps",
          items: ["develop/zapier/about", "develop/zapier/getting-started"],
        },
      ],
    },
    {
      type: "category",
      label: "Decentralised Storage",
      items: ["develop/decentralised-storage/moibit"],
    },
    {
      type: "category",
      label: "Tutorials",
      items: ["develop/full-stack-dapp-with-pos"],
    },
    {
      type: "category",
      label: "Advanced",
      items: [
        "develop/advanced/calling-plasma-contracts",
        "develop/advanced/swap-assets",
        "develop/advanced/deploy-your-own-matic-testnet",
        "develop/advanced/custom-restrictions",
        "develop/advanced/transfer-data",
      ],
    },
    {
      type: "category",
      label: "Architecture",
      items: [
        "contribute/matic-architecture",
        {
          type: "category",
          label: "Heimdall",
          items: [
            "contribute/heimdall/overview",
            {
              type: "category",
              label: "Core Concepts",
              items: [
                "contribute/heimdall/encoder",
                "contribute/heimdall/transactions",
                "contribute/heimdall/stdtx",
                "contribute/heimdall/types",
                "contribute/heimdall/validators",
                "contribute/heimdall/checkpoint",
                "contribute/heimdall/validator-key-management",
                "contribute/heimdall/antehandler",
              ],
            },
            {
              type: "category",
              label: "Modules",
              items: [
                "contribute/heimdall/modules/auth",
                "contribute/heimdall/modules/bank",
                "contribute/heimdall/modules/governance",
                "contribute/heimdall/modules/staking",
                "contribute/heimdall/modules/checkpoint",
                "contribute/heimdall/modules/bor",
                "contribute/heimdall/modules/topup",
                "contribute/heimdall/modules/clerk",
                "contribute/heimdall/modules/chainmanager",
              ],
            },
            "contribute/peppermint",
          ],
        },
        {
          type: "category",
          label: "Bor",
          items: [
            "contribute/bor/overview",
            "contribute/bor/bor",
            "contribute/bor/core_concepts",
            "contribute/bor/consensus",
          ],
        },
        {
          type: "category",
          label: "Contracts",
          items: [
            "contribute/contracts/stakingmanager",
            "contribute/contracts/delegation",
            {
              type: "category",
              label: "Plasma Contracts",
              items: [
                "contribute/contracts/plasma_contracts/account_based_plasma",
                "contribute/contracts/plasma_contracts/predicates",
                "contribute/contracts/plasma_contracts/important-contracts",
              ],
            },
          ],
        },
        "contribute/state-sync",
        "home/architecture/security-models",
      ],
    },
  ],
  Integrate: [
    "integrate/quickstart",
    {
      type: "category",
      label: "Network Information",
      items: [
        "integrate/network",
        {
          type: "category",
          label: "Network Details",
          items: [
            "integrate/network-detail",
            {
              type: "link",
              label: "Matic-Mainnet",
              href:
                "https://github.com/maticnetwork/static/blob/master/network/mainnet/v1/index.json",
            },
            {
              type: "link",
              label: "Mumbai",
              href:
                "https://static.matic.network/network/testnet/mumbai/index.json",
            },
            {
              type: "link",
              label: "BetaV2",
              href: "https://static.matic.network/network/beta/v2/index.json",
            },
            {
              type: "link",
              label: "Alpha-Mainnet",
              href: "https://static.matic.network/network/alpha/v1/index.json",
            },
          ],
        },
        {
          type: "link",
          label: "Matic Faucet",
          href: "https://faucet.matic.network/",
        },
        {
          type: "link",
          label: "RPC Health",
          href: "https://status.matic.today",
        },
        {
          type: "link",
          label: "Checkpoint Status",
          href: "https://status.matic.today/#/checkpoints",
        },
      ],
    },
    {
      type: "category",
      label: "Advanced",
      items: ["integrate/full-node-deployment"],
    },
  ],
  Validate: [
    "validate/orientation",
    {
      type: "category",
      label: "Basics",
      items: [
        "validate/basics/what-is-matic",
        "validate/basics/validator",
        "validate/basics/delegator",
        "validate/basics/pos_staking_delegation",
        "validate/economics",
        "validate/technical-requirements",
      ],
    },
    {
      type: "category",
      label: "Validator",
      items: [
        "validate/validator/introduction",
        "validate/validator/architecture",
        "validate/validator/responsibilities",
        {
          type: "category",
          label: "Core Components",
          items: [
            "validate/validator/heimdall-chain",
            "validate/validator/bor-chain",
            "validate/validator/checkpoint-mechanism",
            "validate/validator/proposer-producer-selection",
            "validate/validator/key_management",
            // "validate/validator/bridge",
            "validate/validator/staking",
            "validate/validator/delegation",
            "validate/validator/derivatives",
            "validate/validator/proposer_bonus",
            "validate/validator/transaction_fees",
            "validate/validator/state-sync-mechanism",
          ],
        },
      ],
    },
    "validate/delegator",
    "validate/delegator-faq",
    // "validate/port_management",
    "validate/counter_stake",
    {
      type: "category",
      label: "Counter Stake: Stage 2",
      items: [
        "validate/counter-stake-stage-2/getting-started",
        "validate/counter-stake-stage-2/core-components",
        {
          type: "category",
          label: "Node Setup",
          items: [
            {
              type: "category",
              label: "With Sentry",
              items: [
                "validate/counter-stake-stage-2/linux-validator-sentry-setup",
                "validate/counter-stake-stage-2/binaries-validator-sentry-setup",
              ],
            },
            {
              type: "category",
              label: "Without Sentry",
              items: [
                "validate/counter-stake-stage-2/linux-package-installation",
                "validate/counter-stake-stage-2/running-with-binaries",
              ],
            },
          ],
        },
        //"validate/counter-stake-stage-2/running-with-docker",
        "validate/counter-stake-stage-2/stake-on-matic",
        "validate/counter-stake-stage-2/rewards",
        "validate/counter-stake-stage-2/delegate",
        "validate/counter-stake-stage-2/validator-replacement",
        "validate/counter-stake-stage-2/signer-change",
        "validate/counter-stake-stage-2/technical-faqs",
      ],
    },
    "validate/faqs",
    "validate/bug-bounty-program",
    "validate/reporting-issues",
    "validate/validator/rewards",
  ],
  Contributors: [
    "contribute/orientation",
    "contribute/community-maintainers",
    "validate/bug-bounty-program",
    {
      type: "category",
      label: "Architecture",
      items: [
        "contribute/matic-architecture",
        {
          type: "category",
          label: "Heimdall",
          items: [
            "contribute/heimdall/overview",
            {
              type: "category",
              label: "Core Concepts",
              items: [
                "contribute/heimdall/encoder",
                "contribute/heimdall/transactions",
                "contribute/heimdall/stdtx",
                "contribute/heimdall/types",
                "contribute/heimdall/validators",
                "contribute/heimdall/checkpoint",
                "contribute/heimdall/validator-key-management",
                "contribute/heimdall/antehandler",
              ],
            },
            {
              type: "category",
              label: "Modules",
              items: [
                "contribute/heimdall/modules/auth",
                "contribute/heimdall/modules/bank",
                "contribute/heimdall/modules/governance",
                "contribute/heimdall/modules/staking",
                "contribute/heimdall/modules/checkpoint",
                "contribute/heimdall/modules/bor",
                "contribute/heimdall/modules/topup",
                "contribute/heimdall/modules/clerk",
                "contribute/heimdall/modules/chainmanager",
              ],
            },
            "contribute/peppermint",
          ],
        },
        {
          type: "category",
          label: "Bor",
          items: [
            "contribute/bor/overview",
            "contribute/bor/bor",
            "contribute/bor/core_concepts",
            "contribute/bor/consensus",
          ],
        },
        {
          type: "category",
          label: "Contracts",
          items: [
            "contribute/contracts/stakingmanager",
            "contribute/contracts/delegation",
            {
              type: "category",
              label: "Plasma Contracts",
              items: [
                "contribute/contracts/plasma_contracts/account_based_plasma",
                "contribute/contracts/plasma_contracts/predicates",
                "contribute/contracts/plasma_contracts/important-contracts",
              ],
            },
          ],
        },
        "contribute/state-sync",
        "home/architecture/security-models",
      ],
    },
  ],
};
