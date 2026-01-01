import Hero from "../components/Hero";
import Challenge from '../components/Challenge';
import { Solution } from "../components/Solution";
import { Benefits } from "../components/Benifits";
import { Services } from "../components/Services";
import { HowItWorks } from "../components/HowItWorks";
// import { Trust } from "../components/Trust";
import { FinalCTA } from "../components/FinalCTA";
import { Audit } from "../components/Audit";

const index = () => {
  return (
    <>
        <Hero />
        <Challenge />
        <Solution />
        <Benefits />
        <Services />
        <Audit />
        <HowItWorks />
        {/* <Trust /> */}
        <FinalCTA />
    </>
  )
}

export default index