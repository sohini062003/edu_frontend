import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import { 
  FaArrowRight, 
  FaChevronRight, 
  FaChevronLeft,
  FaArrowDown,
  FaArrowUp,
  FaTwitter,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import { 
  FiFileText,
  FiSettings,
  FiAward,
  FiBookOpen,
  FiHelpCircle
} from "react-icons/fi";

const QAGenerator = () => {
  // Color palette with green accent
  const colors = {
    primary: 'bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900',
    secondary: 'bg-gradient-to-br from-blue-900 to-gray-900',
    accent: 'bg-gradient-to-r from-green-400 to-cyan-500', // Updated to green-cyan gradient
    card: 'bg-gradient-to-br from-gray-800/50 to-gray-900/80',
    featureOdd: 'bg-gradient-to-br from-purple-900/70 to-blue-900/70',
    featureEven: 'bg-gradient-to-br from-blue-900/70 to-gray-900/70',
    sectionLight: 'bg-gray-800/40',
    sectionDark: 'bg-gray-900/60'
  };

  const [text, setText] = useState("");
  const [questionType, setQuestionType] = useState("short");
  const [numQuestions, setNumQuestions] = useState(3);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [showAnswers, setShowAnswers] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false
    });
  }, []);

  const useCases = [
    "Create quizzes from textbook paragraphs.",
    "Generate questions for reading comprehension tests.",
    "Design training material for employees.",
    "Make practice tests for competitive exams.",
    "Create fill-in-the-blanks for language learners."
  ];

  const faqs = [
    {
      q: "What types of questions can it generate?",
      a: "It supports short answer, multiple choice (MCQ), fill in the blanks, and true/false."
    },
    {
      q: "Can I use it for long texts?",
      a: "Yes, but keep paragraphs focused. Too much context may reduce accuracy."
    },
    {
      q: "How many questions can I generate at once?",
      a: "You can generate up to 5 questions per request."
    },
    {
      q: "Is this tool free to use?",
      a: "Yes, this is a free educational tool."
    }
  ];

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://edu-backend-qeo7.onrender.com/qa-generator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text,
          type: questionType,
          num: numQuestions,
        }),
      });

      const data = await response.json();
      const processedQuestions = (data.questions || []).map(q => ({
        ...q,
        question: q.question?.toString() || "Question not generated",
        answer: q.answer?.toString() || "Answer not provided",
        options: q.type === "mcq" 
          ? (q.options || []).map(opt => opt?.toString()) 
          : null
      }));
      setQuestions(processedQuestions);
      setShowAnswers(new Array(processedQuestions.length).fill(false));
    } catch (error) {
      console.error("Error generating questions:", error);
      alert("Failed to generate questions. Please try again.");
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
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-purple-900/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-green-900/10 blur-3xl"></div>
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
              AI Question Generator
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Transform your study materials into practice questions with our AI-powered generator
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#generator" className="inline-flex items-center bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-400 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-green-500/30 transition-all">
              Try Question Generator <FaArrowRight className="ml-2" />
            </a>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section className={`py-16 mb-20 ${colors.featureOdd} rounded-3xl p-8 backdrop-blur-sm`} data-aos="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three simple steps to create perfect practice questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiFileText className="text-4xl text-green-400 mx-auto" />,
                title: "Input Content",
                description: "Paste your textbook content, lecture notes, or any study material"
              },
              {
                icon: <FiSettings className="text-4xl text-cyan-400 mx-auto" />,
                title: "Select Options",
                description: "Choose question type and number of questions to generate"
              },
              {
                icon: <FiAward className="text-4xl text-green-400 mx-auto" />,
                title: "Get Questions",
                description: "Receive AI-generated questions with answers instantly"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className={`${index % 2 === 0 ? colors.card : 'bg-gray-800/70'} p-8 rounded-xl border border-gray-700/50 backdrop-blur-sm`}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{item.title}</h3>
                <p className="text-gray-300 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Generator Tool Section */}
        <section id="generator" className={`py-16 mb-20 ${colors.featureEven} rounded-3xl p-8 backdrop-blur-sm`} data-aos="fade-up">
          <div className="bg-gray-900/60 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Question Generator
            </h2>
            
            <div className="mb-8">
              <label className="block text-gray-300 mb-2 font-medium">Paste your content:</label>
              <textarea
                className="w-full h-48 p-4 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="Paste textbook content, lecture notes, or any study material here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-1">
                <label className="block text-gray-300 mb-2 font-medium">Question Type:</label>
                <select
                  className="w-full p-3 bg-gray-800/70 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={questionType}
                  onChange={(e) => setQuestionType(e.target.value)}
                >
                  <option value="short">Short Answer</option>
                  <option value="mcq">Multiple Choice</option>
                  <option value="fill">Fill in the Blank</option>
                  <option value="tf">True/False</option>
                </select>
              </div>

              <div className="w-full md:w-40">
                <label className="block text-gray-300 mb-2 font-medium">Number of Questions:</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={numQuestions}
                  onChange={(e) => setNumQuestions(e.target.value)}
                  className="w-full p-3 bg-gray-800/70 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGenerate}
              disabled={!text || loading}
              className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                loading 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-400 hover:to-cyan-500 shadow-lg hover:shadow-green-500/30'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </span>
              ) : (
                "Generate Questions"
              )}
            </motion.button>

            {questions.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 text-center text-white">
                  Generated Questions
                </h3>
                <div className="space-y-6">
                  {questions.map((q, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`${idx % 2 === 0 ? colors.card : 'bg-gray-800/70'} p-6 rounded-xl border border-gray-600/50`}
                    >
                      <div className="flex items-start">
                        <span className="bg-green-500/20 text-green-400 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          {idx + 1}
                        </span>
                        <div className="w-full">
                          <h3 className="font-bold text-lg text-white mb-2">
                            {q.question}
                          </h3>
                          
                          {q.type === "fill" && (
                            <div className="mt-4 mb-4">
                              <input
                                type="text"
                                className="bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white w-full max-w-md"
                                placeholder="Type your answer here..."
                              />
                            </div>
                          )}

                          {q.type === "mcq" && q.options && (
                            <ul className="mt-3 space-y-2">
                              {q.options.map((opt, optIdx) => (
                                <li key={optIdx} className="flex items-center">
                                  <span className="mr-2 text-green-400">{optIdx + 1})</span>
                                  <span className="text-gray-300">{opt}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          <div className="mt-4">
                            <button 
                              onClick={() => {
                                const newShowAnswers = [...showAnswers];
                                newShowAnswers[idx] = !newShowAnswers[idx];
                                setShowAnswers(newShowAnswers);
                              }}
                              className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg text-green-400"
                            >
                              {showAnswers[idx] ? "Hide Answer" : "Show Answer"}
                            </button>
                            {showAnswers[idx] && (
                              <div className="mt-2 bg-gray-900/30 px-4 py-2 rounded-lg">
                                <span className="font-medium text-green-400">Answer:</span> {q.answer}
                              </div>
                            )}
                          </div>
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
        <section className={`py-16 mb-20 ${colors.secondary} rounded-3xl p-8 backdrop-blur-sm`} data-aos="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                Popular Use Cases
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how students and educators are using our tool
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
            <div className="flex items-center justify-between gap-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevCase}
                className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition text-gray-300 hover:text-white"
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
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextCase}
                className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition text-gray-300 hover:text-white"
              >
                <FaChevronRight className="text-xl" />
              </motion.button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={`py-16 mb-20 ${colors.featureOdd} rounded-3xl p-8 backdrop-blur-sm`} data-aos="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about our question generator
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl border border-gray-700/50 overflow-hidden">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="border-b border-gray-700/50 last:border-b-0"
              >
                <div
                  className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-700/30 transition"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-medium text-white text-lg">{faq.q}</h3>
                  <span className="text-green-400 text-xl">
                    {openFaqIndex === index ? <FaArrowUp /> : <FaArrowDown />}
                  </span>
                </div>
                {openFaqIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 text-gray-300"
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Next Steps Section */}
        <section className={`py-16 ${colors.featureEven} rounded-3xl text-center`} data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
              Ready for the Next Step?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Discover how our AI can help match you with perfect career opportunities
          </p>
          <button
            onClick={() => window.location.href = "/job-recommend"}
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-green-500/30 transition-all"
          >
            Explore Job Recommendations <FaArrowRight className="ml-2" />
          </button>
        </section>

        {/* Footer */}
        <footer className="pt-16 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                AI StudyMate
              </span>
              <p className="text-gray-400 mt-2">Empowering students with AI tools</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-400 transition">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">
                <FaGithub className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">
                <FaLinkedin className="text-xl" />
              </a>
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

export default QAGenerator;