import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
class Layouts extends React.Component {
  render(){
    return (
      <>
        <Header />
          <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}
export default Layouts;