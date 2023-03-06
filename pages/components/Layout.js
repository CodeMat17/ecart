import Footer from "./Footer"
import NavHeader from "./NavHeader"


const Layout = ({children}) => {
  return (
      <>
          <NavHeader />
          <main>{children}</main>
          <Footer />
      </>
  )
}

export default Layout