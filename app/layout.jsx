import React from 'react'

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