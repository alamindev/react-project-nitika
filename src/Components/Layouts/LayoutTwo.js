import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/FooterTwo"
class LayoutTwo extends React.Component {
  render(){
    return (
      <>
        <Header />
          <main className="bg-brand-gray-600">{this.props.children}</main>
        <Footer />
      </>
    )
  }
}
export default LayoutTwo;