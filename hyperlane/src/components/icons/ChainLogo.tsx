import Image from 'next/image';
import { ComponentProps, useMemo } from 'react';

import { isNumeric } from '@hyperlane-xyz/utils';
import { ChainLogo as ChainLogoInner } from '@hyperlane-xyz/widgets';

import { parseCaip2Id } from '../../features/caip/chains';
import { getChainDisplayName } from '../../features/chains/utils';
import { getMultiProvider } from '../../features/multiProvider';
import { logger } from '../../utils/logger';

type Props = Omit<ComponentProps<typeof ChainLogoInner>, 'chainId' | 'chainName'> & {
  chainCaip2Id?: ChainCaip2Id;
};

export function ChainLogo(props: Props) {
  const { chainCaip2Id, ...rest } = props;
  const { chainId, chainName, icon } = useMemo(() => {
    if (!chainCaip2Id) return {};
    try {
      const { reference } = parseCaip2Id(chainCaip2Id);
      const chainId = isNumeric(reference) ? parseInt(reference, 10) : undefined;
      const chainName = getChainDisplayName(chainCaip2Id);
      const logoUri = getMultiProvider().tryGetChainMetadata(reference)?.logoURI;
      const icon = logoUri
        ? (props: { width: number; height: number; title?: string }) => (
            <Image src={logoUri} alt="" {...props} />
          )
        : undefined;
      return {
        chainId,
        chainName,
        icon,
      };
    } catch (error) {
      logger.error('Failed to parse caip2 id', error);
      return {};
    }
  }, [chainCaip2Id]);

  return <ChainLogoInner {...rest} chainId={chainId} chainName={chainName} icon={icon} />;
}
