import { FaRobot, FaBookOpen, FaLightbulb, FaCode, FaBrain } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SmartGineer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 80,
      easing: "ease-in-out",
    });
  }, []);

  // Color palette matching Home.jsx
  const colors = {
    primary: 'bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900',
    featureOdd: 'bg-gradient-to-br from-purple-900/70 to-blue-900/70',
    featureEven: 'bg-gradient-to-br from-blue-900/70 to-gray-900/70'
  };

  return (
    <div className={`min-h-screen text-gray-100 ${colors.primary} relative overflow-x-hidden`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-purple-900/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-6 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <FaRobot className="text-6xl text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              SmartGineer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Your 24/7 AI Tutor for all levels of Education
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`${colors.featureOdd} p-1 rounded-2xl shadow-xl mb-12`}
            data-aos="fade-up"
          >
            <div className="bg-gray-900/80 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400 flex items-center">
                <FaBookOpen className="mr-3" /> About SmartGineer
              </h2>
              <p className="text-gray-300 mb-4">
                SmartGineer is an AI-powered tutor designed specifically for all students. It provides:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li>Instant explanations of complex engineering concepts</li>
                <li>Personalized learning assistance across multiple disciplines</li>
                <li>24/7 availability for study support</li>
                <li>All education explanations with academic rigor</li>
              </ul>
              <p className="text-gray-300">
                Unlike generic chatbots, SmartGineer gives accurate satisfactory explanations on any genre of education.
              </p>
            </div>
          </div>

          {/* Technology Stack */}
          <div 
            className={`${colors.featureEven} p-1 rounded-2xl shadow-xl mb-12`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="bg-gray-900/80 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400 flex items-center">
                <FaCode className="mr-3" /> How It Works
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">Technical Implementation</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Built with <span className="text-cyan-400">LangChain</span> for AI orchestration</li>
                    <li>Powered by <span className="text-purple-400">Groq's Llama3-70b</span> via API</li>
                    <li>Originally used FAISS for vector similarity (removed for deployment)</li>
                    <li>Memory-optimized for Render's free tier constraints</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">Pedagogical Approach</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Step-by-step problem solving</li>
                    <li>Conceptual explanations with technical depth</li>
                    <li>Error analysis and correction</li>
                    <li>Adaptive difficulty based on user responses</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <p className="text-gray-400 italic">
                  <FaLightbulb className="inline mr-2 text-yellow-400" />
                  <strong>Note:</strong> The original implementation used FAISS vector stores for document retrieval, but was simplified to reduce memory usage for deployment on Render's free tier.
                </p>
              </div>
            </div>
          </div>

          {/* Access Instructions */}
          <div 
            className={`${colors.featureOdd} p-1 rounded-2xl shadow-xl`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="bg-gray-900/80 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6 text-purple-400 flex items-center">
                <FaBrain className="mr-3" /> How to Access
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  SmartGineer is available on every page of LearnGeniee:
                </p>
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  <span>Look for the <span className="text-yellow-400 font-bold">yellow chatbot icon</span> in the bottom-right corner</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  <span>Click the icon to open the chat interface</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  <span>Type your questions in natural language</span>
                </div>
                <div className="mt-6 p-4 bg-yellow-900/10 rounded-lg border border-yellow-800/50">
                  <p className="text-yellow-200">
                    <strong>Pro Tip:</strong> For best results, be specific with your questions (e.g., "Explain Kirchhoff's laws with circuit examples" rather than just "Help with circuits").
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start chatting with SmartGineer now - your AI tutor is just one click away!
          </p>
          <div className="flex justify-center">
            <a 
              href="/" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-yellow-500/30 transition-all hover:scale-105"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartGineer;