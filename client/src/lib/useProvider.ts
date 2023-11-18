import { useEffect, useState } from 'react'

import { EthereumProvider } from '@cowprotocol/widget-lib'

import { useAccount, useConfig, useWalletClient, useConnect } from 'wagmi'

import EventEmitter from 'events'

const onDisconnect = new EventEmitter()

export function useProvider(): EthereumProvider | undefined {
  const { isDisconnected } = useAccount()
  const connector = useConnect()
  const [provider, setProvider] = useState<EthereumProvider | undefined>(undefined)

  useEffect(() => {
    if (!connector || !connector.connectors.length || provider) return

    // change 0 or 1 to change the provider
    connector.connectors[1].getProvider().then((newProvider) => {
        setProvider(getEthereumProvider(newProvider, onDisconnect))
      })
  }, [connector, provider])

  useEffect(() => {
    if (!provider || !isDisconnected) return

    onDisconnect.emit('disconnect')
  }, [provider, isDisconnected])

  return provider
}

function getEthereumProvider(provider: EthereumProvider, onDisconnect: EventEmitter): EthereumProvider {
  return {
    request(...args) {
      return provider.request(...args)
    },
    enable(...args) {
      return provider.enable(...args)
    },
    on(event: string, args: never) {
      if (event === 'disconnect' || event === 'close') {
        return onDisconnect.on('disconnect', args)
      } else {
        return provider.on(event, args)
      }
    },
  }
}
