import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { 
  FaArrowRight, 
  FaChevronRight, 
  FaChevronLeft,
  FaArrowDown,
  FaArrowUp,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaBriefcase,
  FaChartLine,
  FaGraduationCap,
  FaLightbulb,
  FaStar,
  FaRocket
} from 'react-icons/fa';
import { 
  FiSearch,
  FiTarget,
  FiBook,
  FiAward,
  FiHelpCircle,
  FiUserCheck
} from 'react-icons/fi';

const JobRecommendation = () => {
  // Enhanced Color palette with yellow accents
  const colors = {
    primary: 'bg-gradient-to-br from-indigo-900 via-gray-900 to-gray-900',
    secondary: 'bg-gradient-to-br from-teal-900 to-gray-900',
    accent: 'bg-gradient-to-r from-teal-400 to-purple-500',
    card: 'bg-gradient-to-br from-gray-800/60 to-gray-900/90',
    featureOdd: 'bg-gradient-to-br from-indigo-900/80 to-teal-900/80',
    featureEven: 'bg-gradient-to-br from-yellow-900/40 to-gray-900/80', // Changed to yellow
    sectionLight: 'bg-gray-800/50',
    sectionDark: 'bg-yellow-900/20', // Changed to yellow
    highlight: 'bg-gradient-to-r from-teal-400 to-cyan-500',
    danger: 'bg-gradient-to-r from-pink-500 to-rose-500',
    yellowAccent: 'bg-gradient-to-r from-yellow-500 to-yellow-600', // New yellow accent
    yellowHighlight: 'bg-gradient-to-br from-yellow-400/90 to-yellow-600/90' // New yellow highlight
  };

  const [skills, setSkills] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false
    });
  }, []);

  const useCases = [
    "Discover ideal career paths based on your current skill set",
    "Identify skill gaps for your dream job and get learning resources",
    "Find emerging tech roles that match your expertise",
    "Get personalized recommendations for career advancement",
    "Explore alternative career options you might not have considered"
  ];

  const faqs = [
    {
      q: "How accurate are the job recommendations?",
      a: "Our AI analyzes thousands of job postings to provide the most relevant matches based on your skills."
    },
    {
      q: "What if I don't have many technical skills yet?",
      a: "The system will recommend entry-level positions and learning paths to build your skills."
    },
    {
      q: "How often should I use this tool?",
      a: "We recommend checking every 3-6 months as your skills evolve and job markets change."
    },
    {
      q: "Is my data secure?",
      a: "Yes, we don't store your personal information or skill data permanently."
    }
  ];

  const handleRecommend = async () => {
    if (!skills.trim()) return;
  
    setLoading(true);
    setRecommendations([]);
  
    try {
      const response = await fetch('https://edu-backend-qeo7.onrender.com/job-recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ skills: skills.split(',').map(s => s.trim()) }),
      });
  
      const data = await response.json();
      setRecommendations(data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  const nextCase = () => {
    setCurrentCaseIndex((prev) => (prev + 1) % useCases.length);
  };

  const prevCase = () => {
    setCurrentCaseIndex((prev) => (prev === 0 ? useCases.length - 1 : prev - 1));
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className={`min-h-screen ${colors.primary} text-white relative overflow-x-hidden`}>
      {/* Enhanced Animated background elements with yellow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-indigo-900/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-yellow-900/10 blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-cyan-900/15 blur-3xl animate-pulse animation-delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-yellow-600/10 blur-3xl animate-pulse animation-delay-4000"></div>
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400  to-purple-500">
              AI Career Navigator
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Discover your perfect career path with our intelligent matching system
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <a href="#recommender" className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-yellow-500/30 transition-all group">
              <span className="group-hover:scale-105 transition-transform">Launch Career Explorer</span>
              <FaRocket className="ml-2 group-hover:animate-bounce" />
            </a>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section className={`py-16 mb-20 ${colors.featureOdd} rounded-3xl p-8 backdrop-blur-sm border border-indigo-700/30`} data-aos="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI analyzes your skills to match you with ideal career opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiSearch className="text-4xl text-teal-400 mx-auto" />,
                title: "Input Your Skills",
                description: "List your technical skills, languages, and tools you're familiar with",
                border: "border-teal-500/30"
              },
              {
                icon: <FaChartLine className="text-4xl text-indigo-400 mx-auto" />,
                title: "AI Analysis",
                description: "Our system compares your skills against thousands of job requirements",
                border: "border-indigo-500/30"
              },
              {
                icon: <FiUserCheck className="text-4xl text-yellow-400 mx-auto" />, // Changed to yellow
                title: "Get Matches",
                description: "Receive personalized job recommendations and skill gap analysis",
                border: "border-yellow-500/30" // Changed to yellow
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`${colors.card} p-8 rounded-xl border ${item.border} backdrop-blur-sm shadow-lg hover:shadow-yellow-500/20 transition-all`}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <motion.div 
                  whileHover={{ rotate: 5 }}
                  className="mb-6 flex justify-center"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{item.title}</h3>
                <p className="text-gray-300 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Recommendation Tool Section */}
        <section id="recommender" className={`py-16 mb-20 ${colors.yellowHighlight} rounded-3xl p-8 backdrop-blur-sm border border-yellow-600/30`} data-aos="fade-up">
          <div className="bg-gray-900/70 rounded-xl p-8 border border-yellow-600/30 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Career Match Engine
            </h2>
            
            <div className="mb-8">
              <label className="block text-gray-300 mb-2 font-medium">
                <span className="text-yellow-400">✦</span> Enter your skills (comma separated):
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                rows={3}
                placeholder="e.g., Python, React, SQL, Machine Learning, Data Analysis"
                className="w-full p-4 rounded-lg bg-gray-800/80 text-white placeholder-gray-400 border border-yellow-600/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleRecommend}
              disabled={!skills.trim() || loading}
              className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                loading 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : `${colors.yellowAccent} hover:shadow-yellow-500/40 shadow-lg text-gray-900`
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing Your Skills...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <FiTarget className="mr-2" /> Find Career Matches
                </span>
              )}
            </motion.button>

            {recommendations.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 text-center text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                    Your Career Matches
                  </span>
                </h3>
                <div className="space-y-6">
                  {recommendations.map((rec, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`${idx % 2 === 0 ? 'bg-gray-800/70' : 'bg-yellow-900/20'} p-6 rounded-xl border ${idx % 2 === 0 ? 'border-yellow-600/30' : 'border-indigo-600/30'} shadow-md hover:shadow-yellow-500/20 transition-all`}
                    >
                      <div className="flex items-start">
                        <span className={`${colors.yellowAccent} bg-clip-text text-transparent font-bold text-2xl mr-4`}>
                          0{idx + 1}
                        </span>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <h3 className="font-bold text-xl text-white mb-1">{rec.role}</h3>
                            <div className="flex items-center mb-3 md:mb-0">
                              <span className={`text-sm ${colors.yellowAccent} bg-clip-text text-transparent font-bold`}>
                                Match Score: {rec.match_score.toFixed(2)}%
                              </span>
                              <div className="ml-3 w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${rec.match_score}%` }}
                                  transition={{ delay: idx * 0.1 + 0.3 }}
                                  className={`h-full ${colors.yellowAccent}`}
                                />
                              </div>
                            </div>
                          </div>

                          {rec.skill_gaps.length > 0 ? (
                            <div>
                              <p className="font-medium text-gray-300 mb-2 flex items-center">
                                <FaGraduationCap className="text-yellow-400 mr-2" /> 
                                Skills to Develop:
                              </p>
                              <ul className="space-y-3">
                                {rec.skill_gaps.map((skill) => (
                                  <motion.li 
                                    key={skill}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start"
                                  >
                                    <span className="text-yellow-400 mr-2">▹</span>
                                    <div>
                                      <span className="text-gray-300">{skill}</span>
                                      {rec.gap_resources[skill] && (
                                        <a
                                          href={rec.gap_resources[skill]}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="ml-2 text-yellow-300 hover:underline flex items-center text-sm"
                                        >
                                          <FiBook className="mr-1" /> Learning Resource
                                        </a>
                                      )}
                                    </div>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <div className="flex items-center text-green-400 bg-green-900/20 px-4 py-2 rounded-lg">
                              <FaStar className="mr-2 text-yellow-400" />
                              <span>Excellent match! No significant skill gaps detected</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className={`py-16 mb-20 ${colors.sectionDark} rounded-3xl p-8 backdrop-blur-sm border border-yellow-700/30`} data-aos="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                Who Benefits Most?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how different professionals use our career matcher
            </p>
          </div>

          <div className="bg-gray-900/60 rounded-xl p-8 border border-yellow-600/30 shadow-lg">
            <div className="flex items-center justify-between gap-6">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(234, 179, 8, 0.1)' }}
                whileTap={{ scale: 0.9 }}
                onClick={prevCase}
                className="p-3 rounded-full bg-gray-700 hover:bg-yellow-900/50 transition text-gray-300 hover:text-yellow-400 border border-yellow-600/30"
              >
                <FaChevronLeft className="text-xl" />
              </motion.button>
              
              <motion.p
                key={currentCaseIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xl text-gray-200 text-center flex-1"
              >
                {useCases[currentCaseIndex]}
              </motion.p>
              
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(234, 179, 8, 0.1)' }}
                whileTap={{ scale: 0.9 }}
                onClick={nextCase}
                className="p-3 rounded-full bg-gray-700 hover:bg-yellow-900/50 transition text-gray-300 hover:text-yellow-400 border border-yellow-600/30"
              >
                <FaChevronRight className="text-xl" />
              </motion.button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={`py-16 mb-20 ${colors.featureOdd} rounded-3xl p-8 backdrop-blur-sm border border-indigo-700/30`} data-aos="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
                Career Questions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about our career matching system
            </p>
          </div>

          <div className="bg-gray-900/60 rounded-xl border border-indigo-600/30 overflow-hidden shadow-lg">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="border-b border-indigo-700/30 last:border-b-0"
              >
                <div
                  className="flex justify-between items-center p-6 cursor-pointer hover:bg-indigo-900/20 transition"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-medium text-white text-lg flex items-center">
                    <span className="text-yellow-400 mr-3">✦</span>
                    {faq.q}
                  </h3>
                  <motion.span
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    className="text-yellow-400 text-xl"
                  >
                    <FaArrowDown />
                  </motion.span>
                </div>
                {openFaqIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 text-gray-300 ml-8"
                  >
                    <p className="flex items-start">
                      <span className="text-yellow-400 mr-2">➤</span>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Next Steps Section */}
        <section className={`py-16 ${colors.yellowAccent} rounded-3xl text-center relative overflow-hidden`} data-aos="fade-up">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Skill Up?
            </h2>
            <p className="text-xl text-gray-900/90 max-w-2xl mx-auto mb-8">
              Explore our learning tools to bridge your skill gaps and advance your career
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/summarizer" 
                className="inline-flex items-center bg-gray-900 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-gray-900/30 transition-all"
              >
                Explore Learning Tools <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-16 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                AI StudyMate
              </span>
              <p className="text-gray-400 mt-2">Your AI-powered career companion</p>
            </div>
            <div className="flex space-x-6">
              <motion.a 
                whileHover={{ y: -3, color: '#FACC15' }}
                href="#" 
                className="text-gray-400 transition"
              >
                <FaTwitter className="text-xl" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, color: '#FACC15' }}
                href="#" 
                className="text-gray-400 transition"
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, color: '#FACC15' }}
                href="#" 
                className="text-gray-400 transition"
              >
                <FaLinkedin className="text-xl" />
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

export default JobRecommendation;