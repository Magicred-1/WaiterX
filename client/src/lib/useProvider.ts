import { use, useEffect, useState } from 'react';

import { EthereumProvider } from '@cowprotocol/widget-lib';

import { useAccount, useConfig, useWalletClient, useConnect } from 'wagmi';

import EventEmitter from 'events';

const onDisconnect = new EventEmitter();

const getUsedConnectorId = (connector: string) => {
  switch (connector) {
    case 'walletConnect':
      return 0;
    case 'injected':
      return 1;
    default:
      return 0;
  }
};

export function useProvider(): EthereumProvider | undefined {
  const { isDisconnected, connector: usedConnector } = useAccount();

  useEffect(() => {
    console.log('connector.connectors', usedConnector);
  }, [usedConnector]);

  const connector = useConnect();
  const [provider, setProvider] = useState<EthereumProvider | undefined>(
    undefined
  );

  useEffect(() => {
    if (
      !connector ||
      !connector.connectors.length ||
      provider ||
      !usedConnector?.id
    )
      return;
    console.log('connector.FEJNLZNVNZV', usedConnector);
    // change 0 or 1 to change the provider
    connector.connectors[getUsedConnectorId(usedConnector.id)]
      .getProvider()
      .then((newProvider) => {
        setProvider(getEthereumProvider(newProvider, onDisconnect));
      });
  }, [connector, provider, usedConnector?.id]);

  useEffect(() => {
    if (!provider || !isDisconnected) return;
    onDisconnect.emit('disconnect');
  }, [provider, isDisconnected]);

  return provider;
}

function getEthereumProvider(
  provider: EthereumProvider,
  onDisconnect: EventEmitter
): EthereumProvider {
  return {
    request(...args) {
      return provider.request(...args);
    },
    enable(...args) {
      return provider.enable(...args);
    },
    on(event: string, args: never) {
      if (event === 'disconnect' || event === 'close') {
        return onDisconnect.on('disconnect', args);
      } else {
        return provider.on(event, args);
      }
    },
  };
}
