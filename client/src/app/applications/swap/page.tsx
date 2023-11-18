'use client';

import { CowSwapWidget, CowSwapWidgetParams, TradeType } from '@cowprotocol/widget-react'

//  Fill this form https://cowprotocol.typeform.com/to/rONXaxHV once you pick your "appCode"
const params: CowSwapWidgetParams = {
    "appCode": "WaiterX", // Name of your app (max 50 characters)
    "width": "100%", // Width in pixels (or 100% to use all available space)
    "height": "100%",
    "provider": window.ethereum, // Ethereum EIP-1193 provider. For a quick test, you can pass `window.ethereum`, but consider using something like https://web3modal.com
    "chainId": 1, // 1 (Mainnet), 5 (Goerli), 100 (Gnosis)
    "tradeType": TradeType.SWAP, // TradeType.SWAP, TradeType.LIMIT or TradeType.ADVANCED
    "sell": { // Sell token. Optionally add amount for sell orders
        "asset": "COW",
        "amount": "100"
    },
    "buy": { // Buy token. Optionally add amount for buy orders
        "asset": "USDC",
        "amount": "0"
    },
    "enabledTradeTypes": [ // TradeType.SWAP, TradeType.LIMIT and/or TradeType.ADVANCED
        TradeType.SWAP,
        TradeType.LIMIT,
        TradeType.ADVANCED
    ],
    "theme": "dark", // light/dark or provide your own color palette
    "interfaceFeeBips": "50" // Fill the form above if you are interested
}

const page = () => {

  return (
    <div>
      <CowSwapWidget params={params} />
    </div>
  )
}

export default page 