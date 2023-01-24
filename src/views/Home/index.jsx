import Adventures from "../../Components/Home/Adventures";
import Destinations from "../../Components/Home/Destinations"; 
import Filter from "../../Components/Home/Filter"; 
import MultiCountry from "../../Components/Home/MultiCountry";
import SectionOne from "../../Components/Home/SectionOne";
import Touring from "../../Components/Home/Touring";
import Visited from "../../Components/Home/Visited";
import Layout from '../../Components/Layouts/Layouts';

function Index() {
  return (
    <>
      <Layout>
          <Filter />
          <SectionOne />
          <Touring />
          <Adventures />
          <Visited />
          <MultiCountry />
        <Destinations /> 
      </Layout>
    </>
  );
}
export default Index;