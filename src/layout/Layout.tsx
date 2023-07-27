import Footer from "@/component/Footer"
import Header from "@/component/Header"
import React, {ReactComponentElement, ReactNode} from "react"

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout;