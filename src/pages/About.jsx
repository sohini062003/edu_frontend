import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaBrain, FaServer, FaDatabase, FaBriefcase, FaBook, FaUserTie, FaRobot } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';

const AboutUs = () => {
  // Updated color palette with more vibrant accents
  const colors = {
    primary: 'bg-gradient-to-br from-indigo-900 via-gray-900 to-gray-900',
    secondary: 'bg-gradient-to-br from-teal-900 to-gray-900',
    accent: 'bg-gradient-to-r from-teal-400 to-purple-500',
    card: 'bg-gradient-to-br from-gray-800/60 to-gray-900/90',
    featureOdd: 'bg-gradient-to-br from-indigo-900/80 to-teal-900/80',
    featureEven: 'bg-gradient-to-br from-teal-900/80 to-gray-900/80',
    highlight: 'bg-gradient-to-r from-teal-400 to-cyan-500',
    techCard: 'bg-gradient-to-br from-gray-800/80 to-gray-900/90'
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false
    });
  }, []);

  const features = [
    {
      icon: <FaBook className="text-4xl text-purple-400" />,
      title: "Text Summarizer",
      description: "Combines traditional and AI-powered techniques for comprehensive summaries",
      tech: (
        <ul className="list-disc pl-5 space-y-1">
          <li>TF-IDF summarizer using NLTK and scikit-learn</li>
          <li>LLaMA 3 model via Groq API for advanced summaries</li>
          <li>LangChain integration for structured outputs</li>
          <li>Supports bullet points, Q&A, and paragraph formats</li>
        </ul>
      ),
      benefit: "Get both fast factual summaries and detailed human-like explanations",
      reference: "Combines traditional NLP with cutting-edge LLM technology"
    },
    {
      icon: <FaBrain className="text-4xl text-teal-400" />,
      title: "Question Generator",
      description: "Creates diverse question types from study materials automatically",
      tech: (
        <ul className="list-disc pl-5 space-y-1">
          <li>spaCy for named entity recognition</li>
          <li>T5 Transformer (valhalla/t5-small-qa-qg-hl) from Hugging Face</li>
          <li>Generates short answer, MCQs, fill-in-the-blanks, true/false</li>
          <li>Intelligent distractor generation for MCQs</li>
        </ul>
      ),
      benefit: "Creates practice questions 10x faster than manual methods",
      reference: "Adapted from academic research on automated question generation"
    },
    {
      icon: <FaBriefcase className="text-4xl text-indigo-400" />,
      title: "Career Matchmaker",
      description: "Matches skills with ideal job opportunities and identifies gaps",
      tech: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Sentence-BERT (all-MiniLM-L6-v2) for semantic similarity</li>
          <li>Cosine similarity for job role matching</li>
          <li>Curated dataset of 500+ tech job roles</li>
          <li>Personalized skill gap analysis</li>
        </ul>
      ),
      benefit: "Identifies your best career paths and what skills to develop",
      reference: "Inspired by LinkedIn's skill assessment algorithms"
    },
    {
      icon: <FaRobot className="text-4xl text-cyan-400" />,
      title: "AI TutorBot",
      description: "24/7 personalized tutoring with instant explanations",
      tech: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Semantic search with FAISS index</li>
          <li>LLaMA 3 for response generation</li>
          <li>Sentence-BERT embeddings for context understanding</li>
          <li>Topic-specific knowledge retrieval</li>
        </ul>
      ),
      benefit: "Get instant, accurate explanations for any study topic",
      reference: "Based on latest research in educational AI assistants"
    }
  ];

  // Enhanced tech stack with more details
 const techStack = [
    { 
      name: "React", 
      purpose: "Frontend framework", 
      icon: "⚛️",
      color: "from-blue-500/20 to-blue-600/30"
    },
    { 
      name: "Flask", 
      purpose: "Python backend", 
      icon: "🍶",  // Flask emoji
      color: "from-gray-500/20 to-gray-600/30"
    },
    { 
      name: "Python", 
      purpose: "AI/ML processing", 
      icon: "🐍",
      color: "from-yellow-500/20 to-yellow-600/30"
    },
    { 
      name: "LLaMA 3", 
      purpose: "LLM for summaries & Q&A", 
      icon: "🧠",
      color: "from-purple-500/20 to-purple-600/30"
    },
    { 
      name: "Hugging Face", 
      purpose: "Transformer models", 
      icon: "🤗",
      color: "from-pink-500/20 to-pink-600/30"
    },
    { 
      name: "FAISS", 
      purpose: "Semantic search", 
      icon: "🔍",
      color: "from-red-500/20 to-red-600/30"
    },
    { 
      name: "Groq API", 
      purpose: "LLM inference", 
      icon: "⚡",
      color: "from-teal-500/20 to-teal-600/30"
    },
    { 
      name: "NLTK", 
      purpose: "Natural Language Toolkit", 
      icon: "📚",  // Books emoji for NLP
      color: "from-green-600/20 to-green-700/30"
    },
    { 
      name: "Tailwind CSS", 
      purpose: "Styling", 
      icon: "🎨",
      color: "from-cyan-500/20 to-cyan-600/30"
    },
    { 
      name: "spaCy", 
      purpose: "NLP processing", 
      icon: "📝",
      color: "from-blue-600/20 to-blue-700/30"
    },
    { 
      name: "scikit-learn", 
      purpose: "ML algorithms", 
      icon: "🔬",
      color: "from-orange-500/20 to-orange-600/30"
    },
    { 
      name: "LangChain", 
      purpose: "LLM orchestration", 
      icon: "⛓️",
      color: "from-indigo-500/20 to-indigo-600/30"
    }
  ];

  return (
    <div className={`min-h-screen ${colors.primary} text-white relative overflow-x-hidden`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-indigo-900/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-teal-900/20 blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header Section */}
        <section className="text-center mb-20" data-aos="fade-up">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
              About AI StudyMate
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Revolutionizing education through advanced AI-powered learning tools
          </motion.p>
        </section>

        {/* Mission Section */}
        <section className={`py-16 mb-20 ${colors.featureOdd} rounded-3xl p-8 backdrop-blur-sm border border-indigo-700/30`} data-aos="fade-up">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Our Mission
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              To empower students and professionals with intelligent tools that make learning more efficient, personalized, and accessible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: "🚀",
                  title: "Efficiency",
                  description: "Reduce study time while improving retention"
                },
                {
                  icon: "🎯",
                  title: "Personalization",
                  description: "Tailored recommendations for each user"
                },
                {
                  icon: "🌍",
                  title: "Accessibility",
                  description: "Free tools for global education access"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`${colors.card} p-6 rounded-xl border border-teal-600/30 backdrop-blur-sm`}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Deep Dive */}
        <section className="mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
              Our Advanced Features
            </span>
          </h2>
          
          <div className="space-y-16">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${index % 2 === 0 ? colors.featureEven : colors.featureOdd} rounded-3xl p-8 backdrop-blur-sm border ${index % 2 === 0 ? 'border-teal-700/30' : 'border-indigo-700/30'}`}
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="p-6 bg-gray-800/50 rounded-full border border-teal-500/20">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-gray-900/50 p-4 rounded-lg border border-teal-600/20">
                        <h4 className="font-bold text-teal-400 mb-2 flex items-center">
                          <FaCode className="mr-2" /> Technology
                        </h4>
                        <div className="text-gray-300">{feature.tech}</div>
                      </div>
                      <div className="bg-gray-900/50 p-4 rounded-lg border border-indigo-600/20">
                        <h4 className="font-bold text-indigo-400 mb-2 flex items-center">
                          <FaUserTie className="mr-2" /> Benefit
                        </h4>
                        <p className="text-gray-300">{feature.benefit}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-gray-900/70 p-4 rounded-lg border border-purple-600/20">
                      <h4 className="font-bold text-purple-400 mb-2 flex items-center">
                        <FaBook className="mr-2" /> Research Reference
                      </h4>
                      <p className="text-gray-300">{feature.reference}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack - Enhanced Section */}
<section className={`py-16 mb-20 ${colors.secondary} rounded-3xl p-8 backdrop-blur-sm border border-teal-700/30`} data-aos="fade-up">
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
      Our Technology Stack
    </span>
  </h2>
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {techStack.map((tech, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -5, scale: 1.05 }}
        className={`bg-gradient-to-br ${tech.color} p-6 rounded-xl border border-gray-700/50 text-center shadow-lg`}
      >
        <div className="text-3xl mb-3">{tech.icon}</div>
        <h3 className="font-bold text-white">{tech.name}</h3>
        <p className="text-gray-300 text-sm mt-1">{tech.purpose}</p>
      </motion.div>
    ))}
  </div>
</section>


        {/* About Me Section */}
        <section className={`py-16 mb-20 ${colors.featureOdd} rounded-3xl p-8 backdrop-blur-sm border border-indigo-700/30`} data-aos="fade-up">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex justify-center">
              <motion.div
                whileHover={{ rotate: 2, scale: 1.03 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-md"></div>
                <img 
                  src="/developer-photo.jpg" 
                  alt="Developer"
                  className="relative z-10 w-64 h-64 object-cover rounded-full border-4 border-teal-500/30 shadow-lg"
                />
              </motion.div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
                  About The Developer
                </span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
"I'm Sohini Mukherjee, a BTech CSE-AIML student at Haldia Institute of Technology with a passion for Machine Learning, Data Science, and Web Development. This project reflects my exploration of Large Language Models (LLMs), where I’ve implemented AI-powered study tools using LangChain and Hugging Face models to enhance learning experiences for engineering students."

              </p>
              <p className="text-gray-300 mb-8 text-lg">
 "By integrating AI summarization, Q&A generation, and personalized tutoring, I aimed to bridge the gap between complex engineering concepts and student-friendly learning. Beyond code, I believe in building intelligent systems that make education accessible, efficient, and adaptive. Let’s connect to discuss AI, open-source contributions, or innovative tech ideas!"              </p>
              
              <div className="flex space-x-6">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://github.com/sohini062003" 
                  target="_blank"
                  rel="noopener"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  <FaGithub className="text-2xl" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://www.linkedin.com/in/sohini-mukherjee-b0596b284/" 
                  target="_blank"
                  rel="noopener"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  <FaLinkedin className="text-2xl" />
                </motion.a>
                
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={`py-16 ${colors.highlight} rounded-3xl text-center relative overflow-hidden`} data-aos="fade-up">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Experience the power of AI-enhanced education today
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/" 
                className="inline-flex items-center bg-white text-gray-900 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-white/30 transition-all"
              >
                Try AI StudyMate Now <FiExternalLink className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-16 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                AI StudyMate
              </span>
              <p className="text-gray-400 mt-2">Intelligent learning for the modern student</p>
            </div>
            <div className="flex space-x-6">
              <motion.a 
                whileHover={{ y: -3, color: '#2DD4BF' }}
                href="#" 
                className="text-gray-400 transition"
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, color: '#2DD4BF' }}
                href="#" 
                className="text-gray-400 transition"
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, color: '#2DD4BF' }}
                href="#" 
                className="text-gray-400 transition"
              >
                <FaTwitter className="text-xl" />
              </motion.a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} AI StudyMate. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;