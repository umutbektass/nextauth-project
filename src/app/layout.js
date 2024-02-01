
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Navbar from './components/Navbar';
import AuthProvider from './components/AuthProvider';


export default async function RootLayout({ children }) {
 

  return (
    <AuthProvider>
    <html lang="en">
      <body >
      <Navbar/> 
      <Theme>
      
       
      
          {children}
         
        </Theme>
       
      </body>
    </html>
    </AuthProvider>
  );
}
