# connect-wallet

Jednoducha ukazka Next.js aplikace s tlacitkem **Connect Wallet** a pripojenim penezky pres ConnectKit.

## 1) Instalace

```bash
npm install
```

## 2) Nastaveni WalletConnect Project ID

Zkopiruj `.env.example` do `.env.local` a dopln:

```bash
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
```

Project ID ziskas na https://cloud.walletconnect.com

## 3) Spusteni

```bash
npm run dev
```

Pak otevri http://localhost:3000
