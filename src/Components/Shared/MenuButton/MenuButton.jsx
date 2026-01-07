import React, { useState, useRef, useEffect, useCallback } from "react";
import favBlack from "../../../assets/Brand/FaviconBlack.svg";

const hilnexInfo = {
  name: "HiLNEX LIMITED",
  phone1: "01300981501",
  phone2: "",
  email: "mdrakibhossencse@gmail.com",
  location:
    "Muktobangla Complex, Suite-124, Level-6, Mirpur-1, Dhaka-1216, Bangladesh",
  services: [
    "Web Development",
    "Software Development",
    "App Development",
    "Graphics Design",
    "Digital Marketing",
    "IT Consultancy",
  ],
};

// --- Custom Message Renderer Component (Innovative Bot Reply) ---
const BotMessageContent = ({ message }) => {
  if (message.dataType === "contactInfo") {
    return (
      <div className="p-3 bg-blue-100 border-l-4 border-blue-500 rounded-lg shadow-md">
        <p className="font-bold text-blue-700 mb-2">
          📞 Contact HiLNEX (Let's connect!):
        </p>
        <ul className="space-y-1 text-sm text-gray-800">
          <li>
            <strong>Phone 1:</strong>{" "}
            <a
              href={`tel:${message.data.phone1}`}
              className="text-blue-600 hover:underline"
            >
              {message.data.phone1}
            </a>
          </li>
          <li>
            <strong>Phone 2:</strong>{" "}
            <a
              href={`tel:${message.data.phone2}`}
              className="text-blue-600 hover:underline"
            >
              {message.data.phone2}
            </a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${message.data.email}`}
              className="text-blue-600 hover:underline"
            >
              {message.data.email}
            </a>
          </li>
          <li>
            <strong>Location:</strong> {message.data.location}
          </li>
        </ul>
      </div>
    );
  }

  if (message.dataType === "services") {
    return (
      <div className="p-3 bg-green-100 border-l-4 border-green-500 rounded-lg shadow-md">
        <p className="font-bold text-green-700 mb-2">
          ✨ Our Key Services (Innovate with us!):
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
          {message.data.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    );
  }

  // Individual Phone Card
  if (message.dataType === "phoneInfo") {
    return (
      <div className="p-3 bg-indigo-100 border-l-4 border-indigo-500 rounded-lg shadow-md">
        <p className="font-bold text-indigo-700 mb-2">📞 Our Phone Numbers:</p>
        <p className="text-sm text-gray-800">
          Reach us directly at:
          <br />
          <a
            href={`tel:${message.data.phone1}`}
            className="text-indigo-600 hover:underline font-semibold"
          >
            {message.data.phone1}
          </a>
          <br />
          <a
            href={`tel:${message.data.phone2}`}
            className="text-indigo-600 hover:underline font-semibold"
          >
            {message.data.phone2}
          </a>
          <br />
          Available during business hours (10AM - 7PM)
        </p>
      </div>
    );
  }

  // Individual Email Card
  if (message.dataType === "emailInfo") {
    return (
      <div className="p-3 bg-purple-100 border-l-4 border-purple-500 rounded-lg shadow-md">
        <p className="font-bold text-purple-700 mb-2">📧 Our Email Address:</p>
        <p className="text-sm text-gray-800">
          Send us a message anytime:
          <br />
          <a
            href={`mailto:${message.data.email}`}
            className="text-purple-600 hover:underline font-semibold"
          >
            {message.data.email}
          </a>
          <br />
          (We aim to respond within 24 hours)
        </p>
      </div>
    );
  }

  // Individual Location Card
  if (message.dataType === "locationInfo") {
    return (
      <div className="p-3 bg-red-100 border-l-4 border-red-500 rounded-lg shadow-md">
        <p className="font-bold text-red-700 mb-2">📍 Our Office Location:</p>
        <p className="text-sm text-gray-800">
          You can find us here:
          <br />
          <span className="font-semibold">{message.data.location}</span>
          <br />
          (Located in Muktobangla Complex)
        </p>
      </div>
    );
  }

  // Default text message
  return <p className="text-sm">{message.text}</p>;
};

// --- Typing Indicator Component ---
const TypingIndicator = () => (
  <div className="flex items-center space-x-2 p-2 bg-gray-200 rounded-full rounded-bl-none shadow-sm max-w-min">
    <span className="text-xs text-gray-700">Thinking...</span>
    <div className="flex space-x-0.5 items-center pt-1">
      <div
        className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"
        style={{ animationDelay: "0.4s" }}
      ></div>
    </div>
  </div>
);

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hilnexInfoVisible, setHilnexInfoVisible] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Welcome! I'm HiLNEX AI, your digital assistant. How can I brighten your day? Try 'Services', 'Contact', or just say 'Hi'!",
      sender: "bot",
      timestamp: new Date(),
      dataType: "text",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const [isBotTyping, setIsBotTyping] = useState(false);
  const [error, setError] = useState(null);

  const joinedPath = `
  M60,411
  L320,411
  L380,340
  L610,340
  L670,411
  L930,411
`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll whenever messages or state changes
  useEffect(() => {
    scrollToBottom();
  }, [messages, isBotTyping, error]);

  // --- Core Bot Response Logic (Updated for Individual Info Cards) ---
  const simulateBotResponse = useCallback((userText, currentMessagesLength) => {
    setIsBotTyping(false);
    setError(null);

    try {
      const lowerText = userText.toLowerCase().trim();
      let botMessage = null;

      // --- KEYWORD DEFINITIONS ---
      const phoneKeywords = /phone|number|call|dial|mobile/i;
      const emailKeywords = /email|mail|address|inbox/i;
      const locationKeywords = /location|address|office|where|find|map/i;

      const contactKeywords = /contact|get in touch|details/i;
      const serviceKeywords =
        /service|work|solution|develop|app|website|design|marketing|consultancy|offer|help/i;
      const greetingKeywords =
        /hi|hello|hlw|hey|good morning|good afternoon|good evening/i;
      // ---------------------------

      // 1. Handle Greetings
      if (greetingKeywords.test(lowerText)) {
        const greetingReplies = [
          "Mega greetings! I see you. How can I digitally assist you today?",
          "Hello there! I'm an AI from HiLNEX, ready to process your query. What's on your mind?",
          "Hi! It's a great day for innovation. Ask me about our **services** or **contact** info!",
          "Greetings! How may I empower your digital journey today?",
        ];
        botMessage = {
          id: currentMessagesLength + 2,
          text: greetingReplies[
            Math.floor(Math.random() * greetingReplies.length)
          ],
          sender: "bot",
          timestamp: new Date(),
          dataType: "text",
        };
      }
      // 2. Handle Individual Contact Requests (now uses new dataTypes)
      else if (phoneKeywords.test(lowerText)) {
        botMessage = {
          id: currentMessagesLength + 2,
          text: "Here are the direct lines to HiLNEX:",
          sender: "bot",
          timestamp: new Date(),
          dataType: "phoneInfo",
          data: hilnexInfo,
        };
      } else if (emailKeywords.test(lowerText)) {
        botMessage = {
          id: currentMessagesLength + 2,
          text: "You can send us an email to our dedicated inbox:",
          sender: "bot",
          timestamp: new Date(),
          dataType: "emailInfo",
          data: hilnexInfo,
        };
      } else if (locationKeywords.test(lowerText)) {
        botMessage = {
          id: currentMessagesLength + 2,
          text: "Find our physical location here:",
          sender: "bot",
          timestamp: new Date(),
          dataType: "locationInfo",
          data: hilnexInfo,
        };
      }
      // 3. Handle General Requests (Contact & Services)
      else if (contactKeywords.test(lowerText)) {
        botMessage = {
          id: currentMessagesLength + 2,
          text: "Accessing the main HiLNEX portal... Here are the vital contact coordinates you requested:",
          sender: "bot",
          timestamp: new Date(),
          dataType: "contactInfo",
          data: hilnexInfo,
        };
      } else if (serviceKeywords.test(lowerText)) {
        botMessage = {
          id: currentMessagesLength + 2,
          text: "Analyzing your request... Our expertise spans these core areas of digital transformation:",
          sender: "bot",
          timestamp: new Date(),
          dataType: "services",
          data: hilnexInfo,
        };
      }
      // 4. Default Fallback
      else {
        botMessage = {
          id: currentMessagesLength + 2,
          text: `I'm still learning! For now, I can provide our **Services**, **Contact** details, or specific info like **Phone**, **Email**, or **Location**. What would you like to know?`,
          sender: "bot",
          timestamp: new Date(),
          dataType: "text",
        };
      }

      if (botMessage) {
        setMessages((prev) => [...prev, botMessage]);
      }
    } catch (err) {
      console.error("Bot Error:", err.message);
      setError(
        "Oops! My apologies, a glitch occurred. Please try again or refresh the page."
      );
    }
  }, []);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
      dataType: "text",
    };

    const currentLength = messages.length;
    const currentInput = inputMessage;

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    setIsBotTyping(true);
    setError(null);

    setTimeout(() => {
      simulateBotResponse(currentInput, currentLength);
    }, 1000);
  };

  const handleQuickAction = (actionText) => {
    const userMessage = {
      id: messages.length + 1,
      text: actionText,
      sender: "user",
      timestamp: new Date(),
      dataType: "text",
    };

    const currentLength = messages.length;

    setMessages((prev) => [...prev, userMessage]);

    setIsBotTyping(true);
    setError(null);

    setTimeout(() => {
      simulateBotResponse(actionText, currentLength);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* === Always-visible Bottom Shape (WITH BLACK SHADOW) === */}
      <div className="fixed -bottom-2 left-0 right-0 flex justify-center items-center px-4 z-[40] bg-transparent md:hidden">
        <div className="relative w-full max-w-[600px]">
          {/* Black Shadow Layer - positioned below the path */}
          <div className="absolute bottom-0 left-0 right-0 h-9 bg-black blur-md opacity-50 -z-10"></div>
          
          <svg
            fill="none"
            viewBox="0 0 990 450"
            className="w-full h-[197px] relative z-10"
          >
            {/* Curved Shape */}
            <path
              d={joinedPath}
              stroke="#41454b"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* === Left Corner Cross === */}
            <foreignObject x="-15" y="380" width="70" height="60">
              <div className="flex justify-center items-center w-full h-full">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#41454b"
                  strokeWidth="1"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </foreignObject>

            {/* === Right Corner Cross === */}
            <foreignObject x="935" y="380" width="70" height="60">
              <div className="flex justify-center items-center w-full h-full">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5d6167"
                  strokeWidth="1"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </foreignObject>

            {/* === Center Menu Button === */}
            <foreignObject x="42%" y="75%" width="15%" height="21%">
              <div className="flex flex-row items-center justify-between w-full h-full gap-4">
                {/* Hamburger / Close Button */}
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="relative flex h-[20px] w-[48px] flex-col items-stretch justify-center"
                >
                  <span
                    className={`absolute h-0.5 w-full transition-all duration-300 ${
                      menuOpen
                        ? "rotate-[18deg] top-1/2 -translate-y-1/2 bg-black"
                        : "top-0 bg-[#eeeff1]"
                    }`}
                  ></span>
                  <span
                    className={`absolute h-0.5 w-full transition-all duration-300 ${
                      menuOpen
                        ? "-rotate-[18deg] top-1/2 -translate-y-1/2 bg-black"
                        : "bottom-0 bg-[#eeeff1]"
                    }`}
                  ></span>
                </button>

                {/* Menu Text Toggle */}
                <div
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="cursor-pointer text-center transition-all duration-300 select-none flex items-center"
                  style={{ fontFamily: "sans-serif", color: "#ffffff" }}
                >
                  <span className="text-[34px] font-bold uppercase whitespace-nowrap">
                    {menuOpen ? "CLOSE" : "CHAT"}
                  </span>
                </div>
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>

      {/* === Chatboard Overlay (Added 10px black shadow) === */}
      {menuOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50">
          {/* Added shadow-2xl with 10px black shadow */}
          <div
            className="relative w-full max-w-4xl h-[100vh] bg-white rounded shadow-2xl overflow-hidden flex flex-col z-[71] 
                        sm:h-screen sm:max-w-full sm:mx-0 sm:rounded-none"
            style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 1)" }}
          >
            {/* Chat Header (Unchanged) */}
            <div className="bg-gradient-to-r from-[#ff8402] to-black p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Logo Circle */}
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <img
                      src={favBlack}
                      alt="favBlack"
                      className="w-6 h-6 object-contain"
                    />
                  </div>

                  {/* Text Info */}
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold text-white">
                      {hilnexInfo.name}
                    </h2>
                    <p className="text-xs md:text-sm text-blue-100 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Online • Ready to help
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setHilnexInfoVisible(!hilnexInfoVisible)}
                    className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
                    aria-label="Toggle company info"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={() => setMenuOpen(false)}
                    className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
                    aria-label="Close chat"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Hilnex Contact Details Section (Animated) */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  hilnexInfoVisible
                    ? "max-h-40 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="  bg-black  rounded p-3 text-sm text-blue-50">
                  <p className="font-semibold">{hilnexInfo.name}</p>
                  <p>
                    <strong className="text-blue-200">Phone:</strong>{" "}
                    {hilnexInfo.phone1}, {hilnexInfo.phone2}
                  </p>
                  <p>
                    <strong className="text-blue-200">Email:</strong>{" "}
                    <a
                      href={`mailto:${hilnexInfo.email}`}
                      className="underline hover:text-white"
                    >
                      {hilnexInfo.email}
                    </a>
                  </p>
                  <p>
                    <strong className="text-blue-200">Location:</strong>{" "}
                    {hilnexInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-4 ${
                        message.sender === "user"
                          ? "bg-blue-500 text-white rounded-br-none"
                          : "bg-white text-gray-800 rounded-bl-none shadow-sm"
                      }`}
                    >
                      {/* Use the custom component to render bot messages */}
                      {message.sender === "bot" ? (
                        <BotMessageContent message={message} />
                      ) : (
                        <p className="text-sm">{message.text}</p>
                      )}

                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user"
                            ? "text-blue-200"
                            : "text-gray-500"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {isBotTyping && (
                  <div className="flex justify-start">
                    <TypingIndicator />
                  </div>
                )}

                {error && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl p-4 bg-red-100 text-red-700 rounded-bl-none shadow-sm">
                      <p className="text-sm font-semibold">{error}</p>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 bg-white text-gray-800 p-4">
              <div className="flex space-x-2">
                <div className="flex-1">
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    // Adjusted sizing for mobile consistency
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-sm"
                    rows="1"
                    style={{ minHeight: "50px", maxHeight: "120px" }}
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isBotTyping}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all flex-shrink-0 ${
                    inputMessage.trim() && !isBotTyping
                      ? "bg-blue-500 text-white hover:bg-blue-600 transform hover:scale-105"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>

              {/* Quick Actions (Horizontal Scroll) */}
              <div className="flex space-x-2 mt-3 overflow-x-auto pb-1">
                {["Contact", "Services", "Phone", "Email", "Location"].map(
                  (text) => (
                    <button
                      key={text}
                      onClick={() => handleQuickAction(text)}
                      disabled={isBotTyping}
                      className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full whitespace-nowrap transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                    >
                      {text}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;