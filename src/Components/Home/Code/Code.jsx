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
interface User { id: number; name: string; email: string; }
const user: User = { id: 1, name: "Alice", email: "alice@example.com" };
console.log(user.name);

function add(a: number, b: number): number {
    return a + b;
}

const numbers: number[] = [1,2,3,4,5];
numbers.forEach(num => console.log(add(num, 10)));

type Role = "admin" | "user";
const currentRole: Role = "user";
if(currentRole === "admin") console.log("Admin Access");

function greet(user: User): string {
    return \`Hello, \${user.name}!\`;
}

console.log(greet(user));

const todos: {id: number; task: string; done: boolean}[] = [
    {id:1, task:"Learn TS", done:false},
    {id:2, task:"Build App", done:true}
];

todos.forEach(todo => {
    console.log(\`\${todo.task} - \${todo.done}\`);
});`,

  Python: `# Python Example
def greet(name):
    return f"Hello, {name}"

print(greet("Alice"))

numbers = [1,2,3,4,5]
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
    for i in range(1, n+1):
        result *= i
    return result

print(factorial(5))`,

  Laravel: `<?php
namespace Database\Factories;
use App\\Models\\Post;

class PostFactory {
    protected $model = Post::class;
    public function definition() {
        return ['title' => 'Hello', 'body' => 'Content'];
    }
}

$posts = Post::all();
foreach($posts as $post){
    echo $post->title;
}

function greet($name){
    return "Hello ".$name;
}

$users = ["Alice", "Bob", "Charlie"];
foreach($users as $user){
    echo $user . "\\n";
}

class User {
    public $name;
    function __construct($name){ $this->name = $name; }
}
$alice = new User("Alice");
echo $alice->name;`,

  cURL: `# cURL Example
curl -X GET https://api.example.com/users -H "Authorization: Bearer TOKEN"
curl -X POST https://api.example.com/users -d '{"name":"Alice"}' -H "Content-Type: application/json"
curl -X PUT https://api.example.com/users/1 -d '{"name":"Alice Updated"}'
curl -X DELETE https://api.example.com/users/1

curl -X PATCH https://api.example.com/users/1 -d '{"email":"alice@example.com"}'
curl -X GET https://api.example.com/posts
curl -X POST https://api.example.com/posts -d '{"title":"New Post"}'
curl -X DELETE https://api.example.com/posts/1
curl -X GET https://api.example.com/comments`,

  React: `import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alice");

  const increment = () => setCount(count + 1);
  const greet = () => alert("Hello " + name);

  return (
    <div>
      <button onClick={increment}>{count}</button>
      <button onClick={greet}>Greet</button>
    </div>
  );
}

function TodoList() {
  const [todos, setTodos] = useState([{id:1, task:"Learn React", done:false}]);

  const addTodo = task => setTodos([...todos, {id:todos.length+1, task, done:false}]);

  return (
    <div>
      {todos.map(todo => <div key={todo.id}>{todo.task}</div>)}
    </div>
  );
}`,

  PHP: `<?php
function greet($name){ return "Hello ".$name; }
echo greet("Alice");

$users = ["Alice", "Bob", "Charlie"];
foreach($users as $user){
    echo $user . "\\n";
}

class User {
    public $name;
    function __construct($name){ $this->name = $name; }
}
$alice = new User("Alice");
echo $alice->name;

function add($a, $b){ return $a + $b; }
echo add(5, 10);

$numbers = [1,2,3,4,5];
foreach($numbers as $n){
    echo $n * 2 . "\\n";
}`,
};

// --- Icons and colors for tabs ---
const TAB_ICONS = {
  TypeScript: { icon: <SiTypescript />, color: "#3178c6" },
  Python: { icon: <FaPython />, color: "#306998" },
  Laravel: { icon: <FaLaravel />, color: "#FF2D20" },
  cURL: { icon: <SiCurl />, color: "#A8B9C8" },
  React: { icon: <FaReact />, color: "#61DAFB" },
  PHP: { icon: <FaPhp />, color: "#777BB4" },
};

// --- Simple syntax highlighter ---
const highlightCode = (code) => {
  // Colors
  const KEYWORD_COLOR = "#ff79c6"; // pinkish keywords
  const TYPE_COLOR = "#8be9fd"; // cyan types
  const STRING_COLOR = "#f1fa8c"; // yellow strings
  const NUMBER_COLOR = "#bd93f9"; // purple numbers
  const COMMENT_COLOR = "#6272a4"; // grayish-blue comments

  let highlighted = code;

  // Comments
  highlighted = highlighted.replace(
    /(\/\/.*|#.*|\/\*[\s\S]*?\*\/)/g,
    `<span style="color:${COMMENT_COLOR}">$1</span>`
  );

  // Strings
  highlighted = highlighted.replace(
    /(["'`].*?["'`])/g,
    `<span style="color:${STRING_COLOR}">$1</span>`
  );

  // Numbers
  highlighted = highlighted.replace(
    /\b\d+(\.\d+)?\b/g,
    `<span style="color:${NUMBER_COLOR}">$&</span>`
  );

  // Keywords (simplified)
  highlighted = highlighted.replace(
    /\b(import|const|return|function|interface|class|def|echo|namespace|use|public|protected|private|new|async|await)\b/g,
    `<span style="color:${KEYWORD_COLOR}">$1</span>`
  );

  // Types
  highlighted = highlighted.replace(
    /\b(User|Post|number|string|boolean)\b/g,
    `<span style="color:${TYPE_COLOR}">$1</span>`
  );

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

  return (
    <div
      className="border border-gray-900 pb-20 md:pb-30 bg-black text-white"
    style={{
  background: "#0d0d0d", // main black background
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
      {/* Header Section */}
      <div className="bg-black w-full p-10 text-center border-none">
        <h2 className="text-3xl font-bold">
          Making voice AI simple
          <br />
          and accessible.
        </h2>
      </div>
      <div className=" w-10/12 mx-auto ">
        {/* Top SVG & Dots */}
       {/* Top SVG & Dots Section */}
<div className="bg-black border  border-gray-900  flex justify-between p-2">
  {/* Left SVGs */}
  <div className="flex gap-2">
    <svg
      className="shrink-0 -rotate-45"
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="19.5" stroke="#27272A"></circle>
      <rect
        height="2"
        stroke="#3F3F46"
        width="21"
        x="9.5"
        y="19.5"
      ></rect>
    </svg>
    <svg
      className="shrink-0"
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="19.5" stroke="#27272A"></circle>
      <rect
        height="2"
        stroke="#3F3F46"
        width="21"
        x="9.5"
        y="19.5"
      ></rect>
    </svg>
  </div>

  {/* Divider */}
  <div className="border-r  border-gray-900  w-[10%] md:w-[30%]"></div>

  {/* Right section (The complex dot pattern) */}
  <div className="flex flex-1 gap-2 px-2">
    {/* Top dots */}
    <div className="flex items-center gap-2 px-4 flex-none md:flex-auto">
      <div className=" border-gray-900  h-3 flex-1 rounded-full border sm:w-[30%] sm:flex-none"></div>
      <div className=" border-gray-900  w-3 h-3 rounded-full border"></div>
      <div className=" border-gray-900  hidden w-3 h-3 rounded-full border sm:block"></div>
    </div>

    {/* Middle dots */}
    <div className="flex flex-1 items-center justify-between gap-2 border-x  border-gray-900  px-4">
      <div className="flex gap-2">
        <div className=" border-gray-900  w-3 h-3 rounded-full border"></div>
        <div className=" border-gray-900  hidden w-3 h-3 rounded-full border sm:block"></div>
        <div className=" border-gray-900  hidden w-3 h-3 rounded-full border xl:block"></div>
      </div>
      <div className="flex gap-2">
        <div className=" border-gray-900  w-3 h-3 rounded-full border"></div>
        <div className=" border-gray-900  hidden w-3 h-3 rounded-full border sm:block"></div>
        <div className=" border-gray-900  hidden w-3 h-3 rounded-full border xl:block"></div>
      </div>
    </div>

    {/* Bottom dots */}
    <div className="flex items-center justify-between gap-2 px-4 flex-1">
      <div className="flex gap-2">
        <div className=" border-gray-900  w-3 h-3 rounded-full border"></div>
        <div className=" border-gray-900  hidden w-3 h-3 rounded-full border sm:block"></div>
      </div>
      <div className=" border-gray-900  w-3 h-3 rounded-full border"></div>
    </div>
  </div>
</div>
        {/* Tabs */}
        <div className=" border-gray-900  bg-black border p-2 rounded">
          <div className="flex gap-2 overflow-auto">
            {Object.keys(CODE_SNIPPETS).map((tab) => (
              <button
                key={tab}
                onMouseEnter={() => setHoverTab(tab)}
                onMouseLeave={() => setHoverTab(null)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition ${
                  tab === activeTab
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {React.cloneElement(TAB_ICONS[tab].icon, {
                  style: {
                    color:
                      tab === activeTab || hoverTab === tab
                        ? TAB_ICONS[tab].color
                        : "gray",
                    transition: "color 0.3s",
                  },
                })}
                <span
                  style={{
                    color:
                      tab === activeTab || hoverTab === tab
                        ? TAB_ICONS[tab].color
                        : "inherit",
                    transition: "color 0.3s",
                  }}
                >
                  {tab}
                </span>
              </button>
            ))}
          </div>

          {/* Code block */}
          <section className="min-h-[200px] max-h-[50vh] overflow-auto border  border-gray-900  p-4 mt-2 bg-black rounded shadow-md">
            <pre className="text-sm text-white flex">
              <div className="pr-4 text-right select-none text-gray-500">
                {CODE_SNIPPETS[activeTab].split("\n").map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <code
                className="flex-1"
                dangerouslySetInnerHTML={{
                  __html: highlightCode(CODE_SNIPPETS[activeTab]),
                }}
              ></code>
            </pre>
          </section>

          {/* Bottom buttons */}
          <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
            <div className="flex gap-2 flex-wrap">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-900  rounded hover:bg-gray-700">
                <FaGithub /> View on Github
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-900  rounded hover:bg-gray-700">
                <FaDownload /> Download ZIP
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-900  rounded hover:bg-gray-700">
                <VscFileCode /> Client SDK
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded hover:bg-gray-700">
                <FaServer /> Server SDK
              </button>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900  rounded hover:bg-gray-700"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
