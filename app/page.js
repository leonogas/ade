import ProductHeroLayout from "./components/ProductHeroLayout";

export default function Home() {
  return (
    <>
      {" "}
      <ProductHeroLayout
        welcomeText="Welcome"
        subtitleText="Ultimate Reviews and Suggestions"
        sloganText="Let’s help reduce the time it takes you to make that decision"
      />
    </>
  );
}
