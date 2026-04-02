'use client';

import { ConnectKitProvider } from 'connectkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createConfig, fallback, http, WagmiProvider } from 'wagmi';
import { base, mainnet, optimism, polygon, sepolia } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';
import { ReactNode, useState } from 'react';

const config = createConfig({
  chains: [mainnet, sepolia, polygon, optimism, base],
  connectors: [injected()],
  transports: {
    [mainnet.id]: fallback([
      http('https://eth.llamarpc.com'),
      http('https://cloudflare-eth.com'),
      http(),
    ]),
    [sepolia.id]: fallback([http('https://rpc.sepolia.org'), http()]),
    [polygon.id]: fallback([http('https://polygon-rpc.com'), http()]),
    [optimism.id]: http(),
    [base.id]: http(),
  },
});

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config} reconnectOnMount={false}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
