import '@/assets/styles/global.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
export const metadata = {
    title: "PropertyPulse | Find The Perfect Rental",
    description: "Find Your Dream Rental Property",
    keywords: "rentals, find properties, find rentals"
}

const MainLayout = ({children}) => {
  return (
    <html>
        <body>
          <Navbar/>
          <main>{children}</main>
          <Footer />
        </body>
        
    </html>
    
  )
}

export default MainLayout