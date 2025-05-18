import { useState, useEffect } from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronRight, FaArrowRight } from "react-icons/fa";

const Summarizer = () => {
  const [text, setText] = useState("");
  const [style, setStyle] = useState("bullet");
  const [numPoints, setNumPoints] = useState(5);
  const [extractive, setExtractive] = useState([]);
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Color palette matching Home page
  const colors = {
    primary: 'bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900',
    secondary: 'bg-gradient-to-br from-blue-900 to-gray-900',
    accent: 'bg-gradient-to-r from-cyan-400 to-purple-500',
    card: 'bg-gradient-to-br from-gray-800/50 to-gray-900/80',
    featureOdd: 'bg-gradient-to-br from-purple-900/70 to-blue-900/70',
    featureEven: 'bg-gradient-to-br from-blue-900/70 to-gray-900/70'
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSummarize = async () => {
    if (!text.trim()) return;
    
    setIsLoading(true);
    try {
      const res = await fetch("https://edu-backend-qeo7.onrender.com/summarizer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, style, num: numPoints }),
      });

      const data = await res.json();
      setExtractive(data.extractive);
      setSummary(data.summary);
    } catch (error) {
      console.error("Error summarizing text:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const faqs = [
    {
      q: "How does this summarizer work?",
      a: "We use an extractive method (TF-IDF) to pick key sentences, and then use an LLM (like GPT) to create a natural summary.",
    },
    {
      q: "What styles can I choose?",
      a: "You can summarize into bullet points, Q&A format, or a paragraph.",
    },
    {
      q: "Is my data stored?",
      a: "Nope! Everything runs in real-time and we don't save any data.",
    },
    {
      q: "Can I use this for academic purposes?",
      a: "Absolutely. It's great for notes, essay breakdowns, or even simplifying research papers.",
    },
  ];

  const useCases = [
    "Summarize long research papers into key points.",
    "Simplify legal documents into readable content.",
    "Convert news articles into digestible paragraphs.",
    "Transform meeting notes into professional summaries.",
    "Create Q&A formats for revision before exams.",
    "Write abstracts for blog posts or content."
  ];

  const nextCase = () => {
    setCurrentCaseIndex((prevIndex) => (prevIndex + 1) % useCases.length);
  };

  const prevCase = () => {
    setCurrentCaseIndex((prevIndex) =>
      prevIndex === 0 ? useCases.length - 1 : prevIndex - 1
    );
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className={`text-gray-100 min-h-screen ${colors.primary} relative overflow-x-hidden`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-purple-900/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Smart Text Summarizer
            </span>
          </motion.h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            Transform lengthy content into concise, meaningful summaries with AI-powered precision
          </p>
          
          <button
            onClick={() => document.getElementById("summarizer-tool").scrollIntoView({ behavior: "smooth" })}
            className={`${colors.accent} text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:scale-105 flex items-center mx-auto`}
          >
            Start Summarizing <FaArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our three-step process ensures accurate and readable summaries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Extract Key Content",
              desc: "Important sentences are identified using advanced algorithms",
              icon: "🔍",
              color: "from-cyan-600 to-blue-700"
            },
            {
              title: "AI Processing",
              desc: "Our models analyze and rephrase the content naturally",
              icon: "🧠",
              color: "from-purple-600 to-indigo-700"
            },
            {
              title: "Custom Output",
              desc: "Get summaries in your preferred format instantly",
              icon: "✨",
              color: "from-pink-600 to-purple-700"
            }
          ].map((step, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${step.color} p-0.5 rounded-xl shadow-lg`}
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <div className="bg-gray-900/80 rounded-xl p-6 h-full backdrop-blur-sm border border-gray-700 hover:border-cyan-400/30 transition-all">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary Tool */}
      <section id="summarizer-tool" className="py-16 px-6 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800/50 to-gray-900/80 shadow-2xl rounded-xl p-8 border border-gray-700/50">
          <div className="flex items-center mb-6">
            <div className="w-3 h-8 rounded-full mr-3 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
            <h2 className="text-3xl font-bold" data-aos="fade-right">Text Summarizer</h2>
          </div>
          
          <div className="mb-6" data-aos="fade-up">
            <label className="block text-sm font-medium text-gray-300 mb-2">Paste your text below</label>
            <textarea
              rows="10"
              className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-gray-200 placeholder-gray-500 transition backdrop-blur-sm"
              placeholder="Paste your article, research paper, meeting notes, or any text you want to summarize here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <label className="block text-sm font-medium text-gray-300 mb-2">Summary Style</label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-700 p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none text-gray-200 backdrop-blur-sm"
              >
                <option value="bullet">Bullet Points</option>
                <option value="qa">Q&A Format</option>
                <option value="paragraph">Paragraph</option>
              </select>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <label className="block text-sm font-medium text-gray-300 mb-2">Number of Points</label>
              <input
                type="number"
                min="1"
                max="10"
                value={numPoints}
                onChange={(e) => setNumPoints(Number(e.target.value))}
                className="w-full bg-gray-800/50 border border-gray-700 p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none text-gray-200 backdrop-blur-sm"
              />
            </div>

            <div className="flex items-end" data-aos="fade-up" data-aos-delay="300">
              <button
                onClick={handleSummarize}
                disabled={isLoading || !text.trim()}
                className={`w-full py-3 px-6 rounded-lg shadow-md transition-all flex items-center justify-center ${
                  isLoading || !text.trim()
                    ? "bg-gray-700 cursor-not-allowed"
                    : `${colors.accent} hover:shadow-cyan-500/30 text-white font-bold hover:scale-105`
                }`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Summarize <FaArrowRight className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </div>

          {extractive.length > 0 && (
            <div className="mb-8" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <div className="w-3 h-6 rounded-full mr-3 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
                <h3 className="text-xl font-semibold">Key Sentences Extracted</h3>
              </div>
              <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700/50 backdrop-blur-sm">
                <ul className="space-y-3">
                  {extractive.map((sentence, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span className="text-gray-300">{sentence}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {summary && (
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-4">
                <div className="w-3 h-6 rounded-full mr-3 bg-gradient-to-b from-purple-400 to-pink-500"></div>
                <h3 className="text-xl font-semibold">AI-Generated Summary</h3>
              </div>
              <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700/50 whitespace-pre-line text-gray-300 backdrop-blur-sm">
                {summary}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Use Cases Carousel */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900/30 to-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Use Cases
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover how our summarizer can help in various scenarios
            </p>
          </div>

          <div className="relative" data-aos="zoom-in">
            <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-700/50 min-h-[200px] flex items-center justify-center backdrop-blur-sm">
              <p className="text-gray-200 text-lg text-center">{useCases[currentCaseIndex]}</p>
            </div>

            <button
              onClick={prevCase}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-cyan-500 hover:bg-cyan-600 text-white w-10 h-10 rounded-full shadow flex items-center justify-center transition transform hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextCase}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-cyan-500 hover:bg-cyan-600 text-white w-10 h-10 rounded-full shadow flex items-center justify-center transition transform hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {useCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCaseIndex(index)}
                  className={`w-3 h-3 rounded-full transition ${currentCaseIndex === index ? 'bg-cyan-400' : 'bg-gray-600'}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our summarizer
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="rounded-xl overflow-hidden border border-gray-700/50 transition-all duration-300 backdrop-blur-sm bg-gray-800/30"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div
                className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-700/30 transition"
                onClick={() => toggleFaq(i)}
              >
                <h4 className="font-semibold text-lg text-white">{faq.q}</h4>
                <FaChevronDown 
                  className={`text-cyan-400 transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180' : ''}`}
                />
              </div>
              {openFaqIndex === i && (
                <div className="p-6 pt-0 text-gray-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/50 to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-aos="zoom-in"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Generate Questions from Your Summary?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Take your summaries to the next level by converting them into quiz questions
            </p>
            <Link to="/qa-generator">
            <button
              onClick={() => window.location.href = "/qa-generator"}
              className={`${colors.accent} text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:scale-105 inline-flex items-center`}
            >
              
              Go to Question Generator <FaArrowRight className="ml-2" />
            </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/90 border-t border-gray-800/50 py-12 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Smart Text Summarizer
              </h3>
              <p className="text-gray-400">AI-powered summarization for professionals</p>
            </div>
            <div className="flex space-x-6">
              {['Twitter', 'GitHub', 'LinkedIn'].map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-400 hover:text-cyan-400 transition transform hover:-translate-y-1"
                  aria-label={social}
                >
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                    {social.charAt(0)}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800/50 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>Made with ❤️ by Sohini Mukherjee</p>
            <p className="mt-2">&copy; {new Date().getFullYear()} Smart Summarizer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Summarizer;