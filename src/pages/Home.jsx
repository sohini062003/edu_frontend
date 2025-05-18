import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import logo from "../assets/logo.png";
import sum from "../assets/Summarizer.jpg";
import q from "../assets/post-questions-generator.png";
// import careerMatch from "../assets/career-match.jpg";
// import careerMatch from "../assets/career-match.jpg";
import job from "../assets/job.png";
import tutorbot from "../assets/tutorbot.jpg";
import bgVideo from "../assets/hero-video.mp4";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { 
  FaBookOpen, 
  FaRobot, 
  FaComments, 
  FaBriefcase, 
  FaArrowDown,
  FaChartLine, 
  FaShieldAlt, 
  FaLightbulb,
  FaStar,
  FaChevronRight
} from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 80,
      easing: "ease-in-out",
    });
  }, []);

  // Color palette
  const colors = {
    primary: 'bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900',
    secondary: 'bg-gradient-to-br from-blue-900 to-gray-900',
    accent: 'bg-gradient-to-r from-cyan-400 to-purple-500',
    card: 'bg-gradient-to-br from-gray-800/50 to-gray-900/80',
    featureOdd: 'bg-gradient-to-br from-purple-900/70 to-blue-900/70',
    featureEven: 'bg-gradient-to-br from-blue-900/70 to-gray-900/70'
  };

  return (
    <div className={`text-gray-100 min-h-screen ${colors.primary} relative overflow-x-hidden`}>
    {/* Animated background elements */}
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-purple-900/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-cyan-900/10 blur-3xl"></div>
    </div>

   <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
  {/* Background video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-[0.6] backdrop-blur-sm"
  >
    <source src={bgVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
    {/* Logo Container Only */}
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-center mb-3"
    >
      <img 
        src={logo} 
        alt="LearnGeniee Logo" 
        className="h-50 w-auto md:h-50"
      />
    </motion.div>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="text-lg md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] mt-4"
    >
      Revolutionizing engineering education with AI-powered tools for smarter, faster, sharper learning.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 1 }}
      className="flex flex-col sm:flex-row justify-center gap-6"
    >
      <Link to="/summarizer">
        <button className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-[0_10px_30px_-5px_rgba(34,211,238,0.3)] hover:shadow-[0_15px_40px_-5px_rgba(34,211,238,0.4)] transition-all hover:scale-105">
          Get Started
        </button>
      </Link>
      <Link to="/aboutus">
        <button className="bg-black/70 hover:bg-black/90 text-white font-bold py-4 px-10 rounded-full border border-gray-600 shadow-[0_10px_20px_-5px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_30px_-5px_rgba(255,255,255,0.2)] transition-all hover:scale-105">
          Know More
        </button>
      </Link>
    </motion.div>

    {/* Scroll Down Arrow */}
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="mt-16"
    >
      <a href="#features" className="inline-block text-cyan-400 animate-pulse">
        <FaArrowDown className="text-4xl drop-shadow-[0_5px_10px_rgba(34,211,238,0.5)]" />
      </a>
    </motion.div>
  </div>
</section>
      {/* Features in Zig-Zag Pattern */}
<section id="features" className="relative py-24">
  <div className="container mx-auto px-6">
    <div className="text-center mb-20" data-aos="fade-up">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Powerful Features
        </span>
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Designed to transform how engineering students learn and prepare
      </p>
    </div>
    
    {[
      {
        title: "Smart Summarizer",
        description: "Our AI analyzes complex engineering texts and extracts key concepts, creating concise summaries that highlight the most important information. Perfect for exam prep and quick reviews.Save time and focus on what matters most in your studies. Get summaries tailored to your learning style and preferences.Ideal for busy students who need to grasp concepts quickly and efficiently.",
        icon: <FaBookOpen className="text-5xl text-cyan-400" />,
        image: sum,
        link: "/summarizer",
        reverse: false
      },
      {
        title: "Question Generator",
        description: "Automatically generates practice questions from your study materials. The AI creates multiple question types including conceptual, numerical, and application-based questions.Ideal for self-assessment and exam preparation.Get personalized quizzes based on your study materials and track your progress over time.",
        icon:<FaComments className="text-5xl text-green-400" />,
        image: q,
        link: "/qa-generator",
        reverse: true
      },
      {
        title: "AI Tutor Chat",
        description: "24/7 personalized assistance for all your engineering queries. Our chatbot understands technical concepts across multiple engineering disciplines and provides detailed explanations.Whether you need help with a specific topic or just want to chat about engineering, our AI is here for you.Get instant answers to your questions, explanations of complex concepts, and even study tips tailored to your learning style.",
        icon:  <FaRobot className="text-5xl text-purple-400" />,
        image: tutorbot,
        link: "/smartgineer",
        reverse: false
      },
      {
        title: "Career Match",
        description: "Our system analyzes your skills and learning patterns to recommend the most suitable engineering career paths and job opportunities in your field.Get personalized job suggestions based on your profile.Find internships and job openings that match your skills and interests.",
        icon: <FaBriefcase className="text-5xl text-yellow-400" />,
        image: job,
        link: "/job-recommend",
        reverse: true
      }
    ].map((feature, index) => (
      <div 
        key={index}
        className={`flex flex-col ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 mb-28`}
        data-aos={feature.reverse ? "fade-left" : "fade-right"}
      >
        <div className="md:w-1/2">
          <div className={`${index % 2 === 0 ? colors.featureOdd : colors.featureEven} p-1 rounded-2xl shadow-xl`}>
            <div className="bg-gray-900/80 rounded-xl p-8 h-full backdrop-blur-sm">
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              <Link
                to={feature.link || "#"}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group transition"
              >
                Learn more <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 w-full">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className={`${index % 2 === 0 ? 'bg-gradient-to-br from-purple-900/40 to-blue-900/40' : 'bg-gradient-to-br from-blue-900/40 to-gray-900/40'} rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50`}
          >
            <div className="relative aspect-video w-full h-auto">
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-full h-full object-cover"
                style={{
                  maxHeight: "400px",
                  objectPosition: "center"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/30 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMTExMTExIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15K+", label: "Active Students", icon: <FaComments className="inline-block mb-2" /> },
              { number: "95%", label: "Satisfaction", icon: <FaStar className="inline-block mb-2" /> },
              { number: "50+", label: "Engineering Fields", icon: <FaLightbulb className="inline-block mb-2" /> },
              { number: "24/7", label: "AI Availability", icon: <FaShieldAlt className="inline-block mb-2" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 backdrop-blur-sm bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-5xl font-bold mb-2 text-cyan-400">
                  {stat.icon} {stat.number}
                </div>
                <div className="text-gray-300 uppercase text-sm tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-purple-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three simple steps to supercharge your learning
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transform -translate-y-1/2 z-0 opacity-30"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  step: "1",
                  title: "Input Content",
                  description: "Upload your notes, paste text, or describe what you need help with",
                  icon: <FaComments className="text-2xl" />,
                  color: "from-cyan-600 to-blue-700"
                },
                {
                  step: "2",
                  title: "AI Processing",
                  description: "Our specialized models analyze and understand engineering content",
                  icon: <FaLightbulb className="text-2xl" />,
                  color: "from-purple-600 to-indigo-700"
                },
                {
                  step: "3",
                  title: "Get Results",
                  description: "Receive tailored summaries, questions, or career advice instantly",
                  icon: <FaChartLine className="text-2xl" />,
                  color: "from-pink-600 to-purple-700"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className={`bg-gradient-to-br ${item.color} rounded-xl p-8 shadow-lg border border-gray-700 hover:shadow-cyan-500/20 transition-all`}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 mx-auto backdrop-blur-sm">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-white">{item.title}</h3>
                  <p className="text-gray-300 text-center">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900/30 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Student Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of engineering students achieving academic excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "AI StudyMate helped me reduce my study time by 40% while improving my exam scores. The summaries are incredibly precise for technical content.",
                name: "Sarah K.",
                role: "Computer Engineering",
                rating: 5
              },
              {
                quote: "The question generator created perfect practice problems for my circuits course. I aced my finals thanks to this tool!",
                name: "Raj P.",
                role: "Electrical Engineering",
                rating: 5
              },
              {
                quote: "I received 3 internship offers through the career matching system. It understands engineering specializations better than any human counselor.",
                name: "Miguel T.",
                role: "Mechanical Engineering",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 rounded-xl p-8 shadow-lg border border-gray-700/50 hover:border-purple-400/30 transition-all backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'} mr-1`} />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mr-3"></div>
                  <div>
                    <div className="text-cyan-400 font-bold">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900/70 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMTExMTExIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-aos="zoom-in"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Engineering Education?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the thousands of students achieving more with AI StudyMate
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/summarizer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-cyan-500/30 transition-all"
                >
                  Start Free Trial
                </motion.button>
              </Link>
              <Link to="#features">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white font-bold py-4 px-10 rounded-full border border-cyan-400 hover:bg-cyan-400/10 transition-all"
                >
                  See All Features
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/90 border-t border-gray-800/50 py-16 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">LearnGeniee</span>
              </div>
              <p className="text-gray-400">
                The premier AI-powered learning platform for students worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Features</h4>
              <ul className="space-y-3">
                <li><a href="/summarizer" className="text-gray-400 hover:text-cyan-400 transition flex items-center"><FaChevronRight className="mr-2 text-xs" /> Text Summarizer</a></li>
                <li><a href="/qa-generator" className="text-gray-400 hover:text-cyan-400 transition flex items-center"><FaChevronRight className="mr-2 text-xs" /> Question Generator</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition flex items-center"><FaChevronRight className="mr-2 text-xs" /> AI Tutor Chat</a></li>
                <li><a href="/job-recommend" className="text-gray-400 hover:text-cyan-400 transition flex items-center"><FaChevronRight className="mr-2 text-xs" /> Career Match</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition flex items-center"><FaChevronRight className="mr-2 text-xs" /> About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition flex items-center"><FaChevronRight className="mr-2 text-xs" /> Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition flex items-center"><FaChevronRight className="mr-2 text-xs" /> Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition flex items-center"><FaChevronRight className="mr-2 text-xs" /> Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition flex items-center"><FaChevronRight className="mr-2 text-xs" /> Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition flex items-center"><FaChevronRight className="mr-2 text-xs" /> Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition flex items-center"><FaChevronRight className="mr-2 text-xs" /> Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} LearnGeniee. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

     
    </div>
  );
};

export default Home;
