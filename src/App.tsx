import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Experience } from "./components/Experience/Experience";
import { Technologies } from "./components/Technologies/Technologies";
import { Articles } from "./components/Articles/Articles";
import { Footer } from "./components/Footer/Footer";
import { articles } from "./data/articles";
import { experience } from "./data/experience";
import { technologies } from "./data/technologies";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Experience items={experience} />
        <Technologies items={technologies} />
        <Articles articles={articles} />
      </main>

      <Footer />
    </>
  );
}

export default App;
