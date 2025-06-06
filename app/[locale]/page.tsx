import Home from "./Home";

const locales = ["en", "sk"]; 

export async function generateStaticParams() {
  return locales.map(locale => ({
    locale,
  }));
}

function Page() {
  return <Home />;
}

export default Page;
