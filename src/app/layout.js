import { Inter } from 'next/font/google'
import './globals.css';
import "primereact/resources/themes/lara-light-pink/theme.css";
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PrimeReactProvider>
      <body className={inter.className}>{children}</body>
      </PrimeReactProvider>
      
      
    </html>
  )
}
