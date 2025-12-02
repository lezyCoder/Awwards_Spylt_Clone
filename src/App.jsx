import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import MessageSections from './sections/MessageSections'

const App = () => {
  return (
    <main>
      <Navbar />

      <section>
        <HeroSection />
        <MessageSections />
      </section>

    </main>
  )
}

export default App