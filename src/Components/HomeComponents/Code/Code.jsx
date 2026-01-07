import React, { useState } from "react";
import {
  FaReact,
  FaGithub,
  FaDownload,
  FaServer,
  FaPhp,
  FaLaravel,
  FaPython,
} from "react-icons/fa";
import { SiTypescript, SiCurl } from "react-icons/si";
import { VscFileCode } from "react-icons/vsc";

const CODE_SNIPPETS = {
  TypeScript: `// TypeScript Example
interface User { 
  id: number; 
  name: string; 
  email: string; 
}

const user: User = { 
  id: 1, 
  name: "Alice", 
  email: "alice@example.com" 
};

console.log(user.name);

function add(a: number, b: number): number {
  return a + b;
}

const numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(add(num, 10)));

type Role = "admin" | "user";
const currentRole: Role = "user";

if (currentRole === "admin") {
  console.log("Admin Access");
}

function greet(user: User): string {
  return \`Hello, \${user.name}!\`;
}

console.log(greet(user));`,

  Python: `# Python Example
def greet(name):
    return f"Hello, {name}"

print(greet("Alice"))

numbers = [1, 2, 3, 4, 5]
squared = [x**2 for x in numbers]

for n in squared:
    print(n)

class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age

alice = User("Alice", 25)
print(alice.name)

def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

print(factorial(5))`,

  Laravel: `<?php
namespace Database\\Factories;

use App\\Models\\Post;

class PostFactory 
{
    protected $model = Post::class;
    
    public function definition() 
    {
        return [
            'title' => 'Hello World',
            'body' => 'This is a sample post content'
        ];
    }
}

$posts = Post::all();

foreach($posts as $post) {
    echo $post->title;
}

function greet($name) {
    return "Hello " . $name;
}

$users = ["Alice", "Bob", "Charlie"];

foreach($users as $user) {
    echo $user . "\\n";
}`,

  cURL: `# cURL API Examples

# GET request
curl -X GET https://api.example.com/users \\
  -H "Authorization: Bearer token123" \\
  -H "Content-Type: application/json"

# POST request
curl -X POST https://api.example.com/users \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Alice", "email": "alice@example.com"}'

# PUT request
curl -X PUT https://api.example.com/users/1 \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Alice Updated"}'

# DELETE request
curl -X DELETE https://api.example.com/users/1`,

  React: `import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alice");

  const increment = () => setCount(count + 1);
  const greet = () => alert(\`Hello \${name}!\`);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div className="counter">
      <h1>Hello, {name}!</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={greet}>Greet</button>
    </div>
  );
}

export default Counter;`,

  PHP: `<?php
// PHP Basic Example
function greet($name) { 
    return "Hello " . $name; 
}

echo greet("Alice");

$users = ["Alice", "Bob", "Charlie"];

foreach($users as $user) {
    echo $user . "\\n";
}

class User {
    public $name;
    public $email;
    
    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
    }
    
    public function getInfo() {
        return "Name: " . $this->name . ", Email: " . $this->email;
    }
}

$alice = new User("Alice", "alice@example.com");
echo $alice->getInfo();`,
};

const TAB_ICONS = {
  TypeScript: { icon: <SiTypescript />, color: "#3178c6" },
  Python: { icon: <FaPython />, color: "#306998" },
  Laravel: { icon: <FaLaravel />, color: "#FF2D20" },
  cURL: { icon: <SiCurl />, color: "#A8B9C8" },
  React: { icon: <FaReact />, color: "#61DAFB" },
  PHP: { icon: <FaPhp />, color: "#777BB4" },
};

const highlightCode = (code, language) => {
  // Define colors for different languages
  const colors = {
    keyword: "#ff79c6",      // Pink for keywords
    type: "#8be9fd",         // Cyan for types
    string: "#f1fa8c",       // Yellow for strings
    number: "#bd93f9",       // Purple for numbers
    comment: "#6272a4",      // Gray for comments
    function: "#50fa7b",     // Green for functions
    operator: "#ff5555",     // Red for operators
  };

  let highlighted = code;

  // Comments (different patterns for different languages)
  if (language === "TypeScript" || language === "React") {
    highlighted = highlighted.replace(
      /(\/\/.*$)/gm,
      `<span style="color: ${colors.comment}">$1</span>`
    );
  } else if (language === "Python") {
    highlighted = highlighted.replace(
      /(#.*$)/gm,
      `<span style="color: ${colors.comment}">$1</span>`
    );
  } else if (language === "PHP" || language === "Laravel") {
    highlighted = highlighted.replace(
      /(\/\/.*$|#.*$)/gm,
      `<span style="color: ${colors.comment}">$1</span>`
    );
  }

  // Strings
  highlighted = highlighted.replace(
    /(["'`](?:\\\\.|[^"'`\\])*["'`])/g,
    `<span style="color: ${colors.string}">$1</span>`
  );

  // Numbers
  highlighted = highlighted.replace(
    /\b(\d+\.?\d*)\b/g,
    `<span style="color: ${colors.number}">$1</span>`
  );

  // Keywords (language specific)
  const keywords = {
    TypeScript: ["const", "let", "function", "interface", "type", "return", "if", "else", "for", "foreach"],
    Python: ["def", "class", "return", "if", "else", "for", "in", "print"],
    PHP: ["function", "class", "echo", "return", "if", "else", "foreach", "public", "protected", "private"],
    Laravel: ["function", "class", "echo", "return", "if", "else", "foreach", "public", "protected", "private", "namespace", "use"],
    React: ["import", "export", "function", "const", "return", "useState", "useEffect"],
    cURL: ["curl", "GET", "POST", "PUT", "DELETE"]
  };

  keywords[language]?.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, "g");
    highlighted = highlighted.replace(
      regex,
      `<span style="color: ${colors.keyword}">${keyword}</span>`
    );
  });

  // Functions
  highlighted = highlighted.replace(
    /(\b\w+)(?=\s*\()/g,
    `<span style="color: ${colors.function}">$1</span>`
  );

  // Types (for TypeScript)
  if (language === "TypeScript") {
    highlighted = highlighted.replace(
      /\b(number|string|boolean|any|void|undefined|null)\b/g,
      `<span style="color: ${colors.type}">$1</span>`
    );
  }

  return highlighted;
};

const Code = () => {
  const [activeTab, setActiveTab] = useState("TypeScript");
  const [copied, setCopied] = useState(false);
  const [hoverTab, setHoverTab] = useState(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mobileTabs = ["TypeScript", "Laravel", "PHP"];
  const allTabs = Object.keys(CODE_SNIPPETS);

  return (
    <div
      className="border border-gray-900 pb-6 sm:pb-8 md:pb-12 lg:pb-16 xl:pb-20 bg-black text-white"
      style={{
        background: "#0d0d0d",
        backgroundImage: `
          repeating-linear-gradient(
            to bottom, 
            rgba(255,255,255,0.03), 1px, 
            transparent 1px, 
            transparent 16px
          ), 
          repeating-linear-gradient(
            to right, 
            rgba(255,255,255,0.03), 1px, 
            transparent 1px, 
            transparent 16px
          )
        `,
      }}
    >
      <div className="w-11/12 xs:w-10/12 sm:w-9/12 md:w-9/12 lg:w-9/12 mx-auto px-2 md:px-0 mt-6 xs:px-0">
        {/* Header Section */}
        <div className="bg-black border border-gray-900 flex justify-between p-2 sm:p-3 md:p-4">
          <div className="flex gap-1 sm:gap-2 md:gap-3">
            <svg className="shrink-0 -rotate-45 w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" fill="none" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19.5" stroke="#27272A"></circle>
              <rect height="2" stroke="#3F3F46" width="21" x="9.5" y="19.5"></rect>
            </svg>
            <svg className="shrink-0 w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" fill="none" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19.5" stroke="#27272A"></circle>
              <rect height="2" stroke="#3F3F46" width="21" x="9.5" y="19.5"></rect>
            </svg>
          </div>

          <div className="border-r border-gray-900 w-[5%] xs:w-[8%] sm:w-[12%] md:w-[15%] lg:w-[20%] xl:w-[25%]"></div>

          <div className="flex flex-1 gap-1 xs:gap-2 sm:gap-3 px-1 xs:px-2">
            <div className="flex items-center gap-1 xs:gap-2 px-1 xs:px-2 sm:px-3 md:px-4 flex-none md:flex-auto">
              <div className="border-gray-900 h-2 xs:h-3 flex-1 rounded-full border sm:w-[25%] md:w-[30%] sm:flex-none"></div>
              <div className="border-gray-900 w-2 h-2 xs:w-3 xs:h-3 rounded-full border"></div>
              <div className="border-gray-900 hidden xs:block w-3 h-3 rounded-full border"></div>
            </div>

            <div className="flex flex-1 items-center justify-between gap-1 xs:gap-2 border-x border-gray-900 px-1 xs:px-2 sm:px-3 md:px-4">
              <div className="flex gap-1 xs:gap-2">
                <div className="border-gray-900 w-2 h-2 xs:w-3 xs:h-3 rounded-full border"></div>
                <div className="border-gray-900 hidden xs:block w-3 h-3 rounded-full border"></div>
                <div className="border-gray-900 hidden lg:block w-3 h-3 rounded-full border"></div>
              </div>
              <div className="flex gap-1 xs:gap-2">
                <div className="border-gray-900 w-2 h-2 xs:w-3 xs:h-3 rounded-full border"></div>
                <div className="border-gray-900 hidden xs:block w-3 h-3 rounded-full border"></div>
                <div className="border-gray-900 hidden lg:block w-3 h-3 rounded-full border"></div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-1 xs:gap-2 px-1 xs:px-2 sm:px-3 md:px-4 flex-1">
              <div className="flex gap-1 xs:gap-2">
                <div className="border-gray-900 w-2 h-2 xs:w-3 xs:h-3 rounded-full border"></div>
                <div className="border-gray-900 hidden xs:block w-3 h-3 rounded-full border"></div>
              </div>
              <div className="border-gray-900 w-2 h-2 xs:w-3 xs:h-3 rounded-full border"></div>
            </div>
          </div>
        </div>

        {/* Code Editor Section */}
        <div className="border-gray-900 bg-black border p-2 sm:p-3 md:p-4 rounded">
          {/* Tabs */}
          <div className="flex gap-1 xs:gap-2 sm:gap-3 overflow-x-auto scrollbar-hide">
            {(window.innerWidth < 768 ? mobileTabs : allTabs).map((tab) => (
              <button
                key={tab}
                onMouseEnter={() => setHoverTab(tab)}
                onMouseLeave={() => setHoverTab(null)}
                className={`flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-2 xs:px-3 sm:px-3 md:px-4 py-1.5 xs:py-2 sm:py-2.5 rounded font-medium transition text-xs xs:text-sm sm:text-base flex-shrink-0 ${
                  tab === activeTab
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {React.cloneElement(TAB_ICONS[tab].icon, {
                  className: "w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5",
                  style: {
                    color: tab === activeTab || hoverTab === tab ? TAB_ICONS[tab].color : "gray",
                    transition: "color 0.3s",
                  },
                })}
                <span
                  className="whitespace-nowrap"
                  style={{
                    color: tab === activeTab || hoverTab === tab ? TAB_ICONS[tab].color : "inherit",
                    transition: "color 0.3s",
                  }}
                >
                  {tab}
                </span>
              </button>
            ))}
          </div>

          {/* Code Display */}
          <section className="min-h-[120px] xs:min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] max-h-[35vh] xs:max-h-[40vh] sm:max-h-[45vh] md:max-h-[50vh] overflow-auto border border-gray-900 p-2 xs:p-3 sm:p-4 mt-2 bg-black rounded shadow-md">
            <pre className="text-xs xs:text-sm sm:text-base text-white flex font-mono">
              <div className="pr-2 xs:pr-3 sm:pr-4 text-right select-none text-gray-500 flex-shrink-0">
                {CODE_SNIPPETS[activeTab].split("\n").map((_, i) => (
                  <div key={i} className="leading-relaxed xs:leading-normal">
                    {i + 1}
                  </div>
                ))}
              </div>
              <code
                className="flex-1 overflow-x-auto"
                dangerouslySetInnerHTML={{
                  __html: highlightCode(CODE_SNIPPETS[activeTab], activeTab),
                }}
              ></code>
            </pre>
          </section>

          {/* Action Buttons */}
          <div className="flex flex-row items-center justify-between gap-2 xs:gap-3 sm:gap-4 mt-3 sm:mt-4 p-1 overflow-x-auto scrollbar-hide">
            <div className="flex gap-1 xs:gap-2 flex-nowrap whitespace-nowrap">
              <button 
                className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-2 xs:px-2.5 sm:px-3 md:px-4 py-1.5 xs:py-2 bg-gray-900 rounded hover:bg-gray-700 text-xs xs:text-sm sm:text-base justify-center flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="View code on GitHub"
              >
                <FaGithub className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" aria-hidden="true" />
                <span>View on Github</span>
              </button>
              
              <button 
                className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-2 xs:px-2.5 sm:px-3 md:px-4 py-1.5 xs:py-2 bg-gray-900 rounded hover:bg-gray-700 text-xs xs:text-sm sm:text-base justify-center flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Download code as ZIP file"
              >
                <FaDownload className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" aria-hidden="true" />
                <span>Download ZIP</span>
              </button>
            </div>
            
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 xs:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 bg-gray-900 rounded hover:bg-gray-700 text-xs xs:text-sm sm:text-base flex-shrink-0 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label={copied ? "Code copied to clipboard" : "Copy code to clipboard"}
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        
     
    
        </div>
      </div>
    </div>
  );
};

export default Code;