'use client';

import { Avatar, ConnectKitButton } from 'connectkit';

function formatAddress(address?: string) {
  if (!address) return '';
  return `${address.slice(0, 6)}....${address.slice(-4)}`;
}

export default function WalletButton() {
  return (
    <div className="wallet-wrapper">
      <ConnectKitButton.Custom>
        {({ show, isConnected, truncatedAddress, address }) => {
          const label = truncatedAddress ?? formatAddress(address);

          if (isConnected) {
            return (
              <button type="button" onClick={show} className="wallet-button wallet-button-connected">
                <span className="wallet-avatar" aria-hidden="true">
                  <Avatar address={address} size={32} radius={32} />
                </span>
                <span>{label}</span>
              </button>
            );
          }

          return (
            <button type="button" onClick={show} className="wallet-button">
              Connect Wallet
            </button>
          );
        }}
      </ConnectKitButton.Custom>
    </div>
  );
}
