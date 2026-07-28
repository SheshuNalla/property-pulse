import '@/assets/styles/global.css'
import AuthProvider from '@/components/AuthProvider'
import { ToastContainer } from 'react-toastify';
import { GlobalProvider } from '@/context/GlobalContext';
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'


export const metadata = {
    title: "PropertyPulse | Find The Perfect Rental",
    description: "Find Your Dream Rental Property",
    keywords: "rentals, find properties, find rentals"
}

const MainLayout = ({children}) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html>
            <body>
              <Navbar/>
              <main>{children}</main>
              <Footer />
              <ToastContainer />
            </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
    
  )
}

export default MainLayout