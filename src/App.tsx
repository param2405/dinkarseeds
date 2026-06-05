import Header from './components/Header'
import Hero from './components/Hero'
import CompanyOverview from './components/CompanyOverview'
import ProductCategories from './components/ProductCategories'
import WhyTrust from './components/WhyTrust'
import Infrastructure from './components/Infrastructure'
import Statistics from './components/Statistics'
import ChairmanMessage from './components/ChairmanMessage'
import CTA from './components/CTA'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg-light">
      <Header />
      <Hero />
      <CompanyOverview />
      <ProductCategories />
      <WhyTrust />
      <Infrastructure />
      <Statistics />
      <ChairmanMessage />
      <CTA />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
