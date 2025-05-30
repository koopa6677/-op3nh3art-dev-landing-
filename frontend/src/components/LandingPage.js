import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  ShoppingCart, 
  Clock, 
  DollarSign, 
  Shield, 
  Star, 
  Phone, 
  Mail, 
  CheckCircle,
  ArrowRight,
  Menu,
  X
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Our online sales increased by 300% after getting our new website. The team delivered exactly what we needed!",
      author: "Sarah Johnson",
      business: "Johnson's Boutique",
      rating: 5
    },
    {
      text: "Fast, professional, and affordable. They built our app in just 5 days and it's working perfectly.",
      author: "Mike Chen",
      business: "Chen's Restaurant",
      rating: 5
    },
    {
      text: "Finally found someone who understands small business needs. Great communication throughout the process.",
      author: "Lisa Rodriguez",
      business: "Rodriguez Consulting",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Op3nH3art <span className="text-blue-400">Dev</span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white hover:text-blue-400 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-white hover:text-blue-400 transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-white hover:text-blue-400 transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white transition-all hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/95 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')} 
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')} 
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="block bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white transition-all"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(30, 58, 138, 0.6)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')`
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Get Your Professional
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Website & App
              </span>
              <br />
              for Just <span className="text-green-400">$95</span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-semibold text-yellow-400">FREE if not completed in 7 days!</span>
              <br />
              Perfect for growing small businesses ready to dominate online
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2"
              >
                Start Your Project <ArrowRight size={20} />
              </button>
              
              <a 
                href="tel:4692437585"
                className="bg-white/20 backdrop-blur-md border border-white/30 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:bg-white/30 flex items-center gap-2"
              >
                <Phone size={20} /> Call Now: (469) 243-7585
              </a>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <CheckCircle className="text-green-400 mx-auto mb-2" size={32} />
                <h3 className="text-white font-semibold mb-2">7-Day Guarantee</h3>
                <p className="text-gray-300 text-sm">Free if not delivered on time</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <DollarSign className="text-green-400 mx-auto mb-2" size={32} />
                <h3 className="text-white font-semibold mb-2">Fixed $95 Price</h3>
                <p className="text-gray-300 text-sm">No hidden fees or surprises</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <Shield className="text-blue-400 mx-auto mb-2" size={32} />
                <h3 className="text-white font-semibold mb-2">Small Business Focus</h3>
                <p className="text-gray-300 text-sm">Designed for growth & success</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything Your Business Needs to 
              <span className="text-blue-600"> Succeed Online</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From professional websites to mobile apps, we create digital solutions that grow your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Website Development */}
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-full h-48 bg-cover bg-center rounded-lg mb-6"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1593720213428-28a5b9e94613')` }}
              />
              <Code className="text-blue-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Websites</h3>
              <p className="text-gray-600 mb-6">
                Modern, responsive websites that convert visitors into customers. Perfect for service businesses, portfolios, and more.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  Mobile-responsive design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  SEO optimized
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  Contact forms & analytics
                </li>
              </ul>
            </motion.div>

            {/* Mobile Apps */}
            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-full h-48 bg-cover bg-center rounded-lg mb-6"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c')` }}
              />
              <Smartphone className="text-purple-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Apps</h3>
              <p className="text-gray-600 mb-6">
                Native mobile apps for iOS and Android that keep your customers engaged and coming back for more.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  iOS & Android compatible
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  Push notifications
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  User-friendly interface
                </li>
              </ul>
            </motion.div>

            {/* E-commerce */}
            <motion.div 
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-full h-48 bg-cover bg-center rounded-lg mb-6"
                style={{ backgroundImage: `url('https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg')` }}
              />
              <ShoppingCart className="text-green-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce Solutions</h3>
              <p className="text-gray-600 mb-6">
                Complete online stores with payment processing, inventory management, and order tracking systems.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  Secure payment processing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  Inventory management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  Customer accounts
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Results for 
              <span className="text-blue-600"> Real Businesses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              1 year of experience helping small businesses succeed online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-full h-64 bg-cover bg-center rounded-lg mb-6"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692')` }}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Team</h3>
              <p className="text-gray-600">
                Experienced developers dedicated to bringing your vision to life with cutting-edge technology and proven methodologies.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-full h-64 bg-cover bg-center rounded-lg mb-6"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf')` }}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
              <p className="text-gray-600">
                Our clients see real growth - from increased online sales to improved customer engagement and brand recognition.
              </p>
            </motion.div>
          </div>

          {/* Testimonials */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={24} />
                  ))}
                </div>
                <p className="text-xl text-gray-700 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-blue-600">
                    {testimonials[currentTestimonial].business}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Honest 
              <span className="text-yellow-400"> Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No hidden fees, no surprises. Just professional results at an unbeatable price.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-yellow-400 mb-4">$95</div>
              <h3 className="text-2xl font-semibold text-white mb-2">Complete Website or App</h3>
              <p className="text-gray-300">Everything you need to succeed online</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span>Professional design</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span>Mobile responsive</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span>SEO optimized</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span>Contact forms</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span>Social media integration</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span>Google Analytics setup</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span>7-day delivery</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Clock className="text-yellow-400 flex-shrink-0" size={20} />
                  <span className="font-semibold text-yellow-400">FREE if not done in 7 days!</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 px-8 py-4 rounded-full text-white font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
              >
                Start Your Project Now
              </button>
              <p className="text-gray-300 mt-4 text-sm">
                Ready to get started? Contact us today!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to 
              <span className="text-blue-600"> Transform Your Business?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your professional website or app in just 7 days, or it's absolutely free!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <a 
                  href="tel:4692437585"
                  className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                >
                  <Phone className="text-blue-600 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">Call Now</div>
                    <div className="text-blue-600 font-medium">(469) 243-7585</div>
                  </div>
                </a>
                
                <a 
                  href="mailto:op3nh3art@outlook.com"
                  className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
                >
                  <Mail className="text-green-600 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-green-600 font-medium">op3nh3art@outlook.com</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-yellow-600" size={20} />
                  <span className="font-semibold text-gray-900">7-Day Guarantee</span>
                </div>
                <p className="text-gray-700 text-sm">
                  We deliver on time, every time. If your project isn't completed within 7 days, it's completely free!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Op3nH3art Dev?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">1 Year Experience</div>
                    <div className="text-gray-600 text-sm">Proven track record with small businesses</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Small Business Focus</div>
                    <div className="text-gray-600 text-sm">We understand your unique needs</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Fast Delivery</div>
                    <div className="text-gray-600 text-sm">Your project completed in 7 days or less</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Affordable Pricing</div>
                    <div className="text-gray-600 text-sm">Professional quality at a fraction of the cost</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$95</div>
                  <div className="text-gray-900 font-semibold">Complete Website or App</div>
                  <div className="text-gray-600 text-sm">No hidden fees • 7-day delivery • Free if late</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Op3nH3art <span className="text-blue-400">Dev</span></h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional websites and mobile apps for small businesses. 
              $95 flat rate, 7-day delivery guarantee, or it's free!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <a 
              href="tel:4692437585"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Phone size={18} />
              (469) 243-7585
            </a>
            <a 
              href="mailto:op3nh3art@outlook.com"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={18} />
              op3nh3art@outlook.com
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Op3nH3art Dev. All rights reserved. • Professional websites and apps for small businesses.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;