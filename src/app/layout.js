// import { Inter } from 'next/font/google'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './globals.css'
import Navbar from '@/shared/Navbar/Navbar'


// const inter = Inter({ subsets: ['latin'] }) 
// className={inter.className}

export const metadata = {
  title: 'BreakPointArt Next Recipe',
  description: 'Recipe App With CRUD Operation',
}

// const client = new QueryClient();


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body >
        {/* <QueryClientProvider client={client}> */}
          <Navbar></Navbar>
          {children}
        {/* </QueryClientProvider> */}

      </body>
    </html>
  )
}
