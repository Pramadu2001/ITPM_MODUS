import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import ResponsiveNav from '@/Components/Home/Navbar/ResponsiveNav';
import Footer from '@/Components/Home/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import { Providers } from './provider';

const font = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Modus E-Learning Platform',
  description: 'E-Learning website using next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <ResponsiveNav /> {/* No props needed since state is managed internally */}
          {children}
          <Toaster position="top-center" reverseOrder={false} />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

/*const Custom: React.FC<{children: React.ReactNode}> = ({children}) => {
  const {isLoading} = useLoadUserQuery({});
  return(
    <>
    {
      isLoading ? <Loader/> : <>{children}</>
    }
    </>
  )
}*/