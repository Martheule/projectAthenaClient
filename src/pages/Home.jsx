import Hero from "../components/Hero";
import SimplePageWrapper from "../components/PageWrapper";
const Home = () => {
  return (
    <SimplePageWrapper pageKey="/">
      <div>
        <Hero />
      </div>
    </SimplePageWrapper>
  );
};

export default Home;
