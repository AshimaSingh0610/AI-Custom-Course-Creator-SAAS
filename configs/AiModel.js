/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const GenerateCourseLayout_AI = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter \nName ,about, Duration: Category: 'Programming',\nTopic: Python, Level:Basic, Duration: 1 hours,\nNoOf Chapters:5, in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "course": {\n    "name": "Python Programming for Beginners",\n    "description": "Learn the fundamentals of Python programming, from basic syntax to core concepts like variables, data types, loops, and functions. This course is designed for absolute beginners with no prior programming experience.",\n    "chapters": [\n      {\n        "name": "Introduction to Python",\n        "about": "This chapter covers the history of Python, its features, and why it\'s a popular choice for beginners. We\'ll also set up your development environment and write your first Python program.",\n        "duration": "15 minutes"\n      },\n      {\n        "name": "Variables and Data Types",\n        "about": "Learn about different data types in Python, such as integers, floats, strings, and booleans. We\'ll explore how to assign values to variables and perform basic operations on them.",\n        "duration": "20 minutes"\n      },\n      {\n        "name": "Control Flow and Loops",\n        "about": "Discover how to control the flow of your Python programs using conditional statements (if, elif, else). You\'ll learn about loops (for, while) and how to iterate over collections of data.",\n        "duration": "25 minutes"\n      },\n      {\n        "name": "Functions and Modules",\n        "about": "This chapter teaches you how to create and use your own functions to organize code and improve reusability. We\'ll also explore how to import and use modules to extend your Python capabilities.",\n        "duration": "20 minutes"\n      },\n      {\n        "name": "Lists, Tuples, and Dictionaries",\n        "about": "Learn about different data structures in Python, including lists (ordered collections), tuples (immutable sequences), and dictionaries (key-value pairs). You\'ll explore common operations and methods associated with each structure.",\n        "duration": "20 minutes"\n      }\n    ],\n    "duration": "1 hour",\n    "category": "Programming",\n    "topic": "Python",\n    "level": "Basic",\n    "noOfChapters": 5\n  }\n}\n```\n',
        },
      ],
    },
  ],
});


export const GenerateChapterContent_AI = model.startChat({
  generationConfig,
// safetySettings: Adjust safety settings
// See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {text: "Explain the concept in Detail on Topic: Python Basic Chapter:variables and Data types in JSON Format with list of array with field as title,explanation on given chapter in detail, Code Example(Code field in <precode> format) if applicable"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n{\n  \"title\": \"Variables and Data Types in Python\",\n  \"explanation\": \"Variables are like containers that hold data in your Python programs.  They allow you to store and manipulate information efficiently. Data types define what kind of information a variable can hold.  Let's explore these concepts in detail:\\n\\n**1. Variables:**\\n\\n* **Definition:** A variable is a named location in your computer's memory where you store data.  You use a variable's name to access and work with its contents.\\n* **Declaration:** You declare a variable by assigning a value to it using the equals sign (=).\\n* **Naming Conventions:**\\n    * Variable names must start with a letter (a-z, A-Z) or an underscore (_).\\n    * They can contain letters, numbers, and underscores.\\n    * They are case-sensitive (e.g., `myVariable` is different from `myvariable`)\\n* **Example:**\\n    ```python\\n    age = 25  # Assign the value 25 to the variable 'age'\\n    name = 'Alice' # Assign the string 'Alice' to the variable 'name'\\n    ```\\n\\n**2. Data Types:**\\n\\n* **Integers (int):** Whole numbers (e.g., 10, -5, 0)\\n* **Floating-point Numbers (float):** Numbers with decimal points (e.g., 3.14, -2.5)\\n* **Strings (str):** Sequences of characters enclosed in single or double quotes (e.g., 'Hello', \\\"Python\\\")\\n* **Booleans (bool):** Represent truth values (True or False)\\n\\n**3. Data Type Examples:**\\n\\n```python\\n# Integers\\nmy_age = 28\\n\\n# Floating-point Numbers\\npi = 3.14159\\n\\n# Strings\\ngreeting = 'Hello, World!'\\n\\n# Booleans\\nis_active = True\\n```\\n\\n**4.  Using Variables:**\\n\\n* **Accessing Values:** You can retrieve the value stored in a variable by simply using its name.\\n* **Changing Values:** You can modify the value of a variable by assigning a new value to it.\\n\\n**5. Code Example:**\\n\\n```python\\n# Declare and initialize variables\\nname = 'Bob'\\nage = 30\\noccupation = 'Software Engineer'\\n\\n# Output using variables\\nprint('Name:', name)\\nprint('Age:', age)\\nprint('Occupation:', occupation)\\n```\\n\\n**6. Important Points:**\\n\\n* **Dynamic Typing:** Python is dynamically typed, meaning you don't have to explicitly declare the data type of a variable.  Python automatically determines the data type based on the value assigned.\\n* **Type Checking:**  You can use the `type()` function to check the data type of a variable.\\n\\n**7.  Working with Data Types:**\\n\\n* **String Manipulation:** Python offers various methods for working with strings, such as slicing, concatenation, and formatting.\\n* **Arithmetic Operations:**  You can perform arithmetic operations (addition, subtraction, multiplication, division) on numeric data types.\\n* **Boolean Logic:** You can combine Boolean values using logical operators (AND, OR, NOT).\\n\\n**8.  Conclusion:**\\n\\nUnderstanding variables and data types is fundamental to programming in Python.  By effectively storing and manipulating data, you can build powerful and flexible programs.\"\n}\n```"},
      ],
    },
  ],
});
