# WaiterX

## Overview

This project is a Next.js, TailwindCSS, TypeScript, Prisma, and Web3 application. It is designed to provide a simple, easy to use, and help onboarding people into the Ethereum ecosystem.
With the ability to create a wallet, send and receive ETH and tokens, bridge to other chains using **Hyperlane**, and interact with DeFi protocol.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)
- [Contact](#contact)

## Getting Started

### Prerequisites

- Node.js v14.x.x or above
- NextJS
- A modern web browser
- Telegram Bot
- Prisma ORM (PostgreSQL)

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Magicred-1/WaiterX/

  ```
   Install the dependencies using yarn
  ```
    yarn install
  ```
Usage
To use the application, create a telegram bot and setup the webhook to the server (it must be https) and run the following commands:
```
    yarn dev
    ngrok http 3000
```
Then copy the https url and paste it in the telegram bot webhook url field.
```
    curl -X POST "https://api.telegram.org/bot<bot_token>/setWebhook?url=<ngrok_url>/webhook"
```

Contribution
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

License
This project is licensed under the MIT License - see the LICENSE.md file for details

Contact
Djason Gadiou - djasongadiou@gmail.com
Project Link: https://github.com/Magicred-1/WaiterX/
