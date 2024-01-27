import React from "react"
const Template = ({children}:{children:React.ReactNode}) => {
  return (
    <html>
         <body>
            <header>
                 header
            </header>
            {children}
         </body>
    </html>
  )
}

export default Template