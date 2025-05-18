// src/components/ChatWidget.jsx
import { useState, useEffect, useRef } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ClipLoader } from "react-spinners";
import "./ChatWidget.css"; // optional custom styles

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I’m your AI study buddy. Ask me anything." },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { type: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setIsSending(true);

    try {
      const res = await fetch("https://edu-backend-qeo7.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botReply = data.response || "⚠️ Something went wrong.";

      setTimeout(() => {
        setMessages((prev) => [...prev, { type: "bot", text: botReply }]);
        setIsSending(false);
      }, 1200); // simulate typing delay
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "⚠️ Failed to connect to the AI server." },
      ]);
      setIsSending(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isSending) sendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-yellow-400 hover:bg-yellow-500 text-black p-4 rounded-full shadow-lg transition"
      >
        {isOpen ? <FaTimes /> : <FaCommentDots size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", bounce: 0.25 }}
            className="w-80 h-96 mt-4 bg-white text-black shadow-2xl rounded-xl flex flex-col overflow-hidden border border-purple-700"
          >
            <div className="bg-purple-700 text-white px-4 py-3 font-semibold text-sm flex items-center justify-between">
              🤖 SmartGineer- Your AI Buddy!
            </div>

            <div className="flex-1 p-3 overflow-y-auto text-sm space-y-3 custom-scrollbar">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.type === "user" ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`p-2 rounded-xl max-w-xs ${
                    msg.type === "user"
                      ? "bg-yellow-100 self-end ml-auto text-right"
                      : "bg-purple-100 self-start mr-auto text-left"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              {isSending && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-left text-sm flex items-center gap-2 text-blue-700"
                >
                  <ClipLoader size={18} color="#3b82f6" />
                  <span>AI is typing...</span>
                </motion.div>
              )}
              <div ref={chatEndRef}></div>
            </div>

            <div className="p-2 border-t flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                className="flex-1 px-2 py-1 text-sm border rounded-l-md focus:outline-none"
              />
              <button
                onClick={sendMessage}
                disabled={isSending}
                className="bg-purple-700 text-white px-4 rounded-r-md hover:bg-purple-800 transition text-sm"
              >
                {isSending ? "..." : "Send"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
