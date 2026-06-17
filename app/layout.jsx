import '@/assets/styles/globals.css'
export const metadata = {
    title: "PropertyPulse | Find The Perfect Rental",
    description: "Find Your Dream Rental Property",
    keywords: "rentals, find properties, find rentals"
}

function MainLayout({children}) {
  return (
    <html>
        <body>
            <div>{children}</div>
        </body>
        
    </html>
    
  )
}

export default MainLayout