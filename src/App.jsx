
import Navbar from './components/Navbar'
import FlavorSections from './sections/FlavorSections'
import HeroSection from './sections/HeroSection'
import MessageSections from './sections/MessageSections'

const App = () => {
  return (
    <main>
      <Navbar />
      <section>
        <HeroSection />
        <MessageSections />
        <FlavorSections />
        <div className="bg-light-brown border border-red-500 h-dvh"></div>
      </section>
    </main>
  )
}

export default App