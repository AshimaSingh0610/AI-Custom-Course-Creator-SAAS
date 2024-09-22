

# 🎓 AI-Powered Course Builder Cum Creator - Full Stack Web App


<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/AshimaSingh0610/AI-Course-Crafter-N-Generator.svg)](https://github.com/AshimaSingh0610/AI-Course-Crafter-N-Generator/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/AshimaSingh0610/AI-Course-Crafter-N-Generator.svg)](https://github.com/AshimaSingh0610/AI-Course-Crafter-N-Generator/pulls)

</div>

This cutting-edge full-stack web app is crafted with Next.js, React, and TailwindCSS, allowing users to effortlessly create personalized courses powered by AI-generated materials and curated video content. It integrates the Gemini API for automated content creation, the YouTube API to bring in relevant video resources, and Clerk for seamless user authentication and management.


# 🚀 Features
- **Next.js** for server-side rendering and optimized routing.
- **React** for building interactive UI components.
- **Drizzle ORM** for managing database interactions.
- **TailwindCSS** for modern and responsive UI design.
- **Shadcn UI** for enhanced UI components.
- **Clerk** for user authentication and access control.
- **Gemini API** for generating AI-driven course content.
- **YouTube API** for video integration and curation.

# 📚 Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)
- [Contributing](#contributing)

# 💻 Installation

### Prerequisites
- **Node.js** >= 14.x
- **npm** or **yarn**
- **PostgreSQL** (for database with Drizzle ORM)

### Clone the repository
```bash
git clone https://github.com/varun442/AI-Course-Generator.git
cd AI-Course-Generator
```

### Install dependencies
```bash
npm install
# or
yarn install
```

### Set up environment variables
Create a `.env.local` file in the root directory and configure the following variables:

```plaintext
NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
CLERK_API_KEY=<your-clerk-api-key>

GEMINI_API_KEY=<your-gemini-api-key>
YOUTUBE_API_KEY=<your-youtube-api-key>

DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database-name>

NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Database Migration
Ensure you have PostgreSQL installed and create a database. Use Drizzle ORM to set up the schema:

```bash
npx drizzle-kit migrate:run
```

### Run the application
To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Visit the app at `[http://localhost:3000](https://ai-course-crafter-n-generator.vercel.app/)`.

# ⚙️ Configuration

### Clerk
Clerk provides user authentication for the application. Ensure you set up your project on Clerk's website and configure the necessary API keys in the `.env.local` file.

### Gemini API
This app leverages the Gemini API to generate AI-driven content for courses. You need to sign up for an API key from Gemini API.

### YouTube API
For video integration, the application uses the YouTube Data API. You can get an API key from the Google Developer Console.

#🛠️  Usage

### Creating a Course
1. Sign Up / Log In: Use Clerk authentication to sign up or log in.
2. Generate AI Content: Use the Gemini API integration to automatically generate content for your custom course.
3. Add Video Resources: Search and integrate videos from YouTube using the YouTube API.
4. Save and Manage Courses: Save courses and manage them through your user profile.

### Admin Panel
Admins can manage user permissions, view generated content, and perform other administrative tasks.

# 🖥️ Technologies Used
- **Next.js**: React framework with built-in server-side rendering (SSR).
- **React**: For building dynamic UI components.
- **Drizzle ORM**: Simple, type-safe ORM for managing PostgreSQL databases.
- **TailwindCSS**: Utility-first CSS framework for designing responsive UIs.
- **Shadcn UI**: A modern UI component library for enhanced UI elements.
- **Clerk**: Authentication solution for user management.
- **Gemini API**: AI-driven content generation API.
- **YouTube API**: Used for searching and embedding video resources.

# 🔗 API Integration

### Clerk API
Clerk handles user authentication and provides the necessary endpoints for signing up, logging in, and managing users.

### Gemini API
The Gemini API is used for generating AI-driven content for each course. You can customize content by sending prompts and receiving responses from the API.

### YouTube API
The YouTube API is integrated for searching video content that can be added to courses. Use the API to curate video playlists directly into the course creation workflow.

# 🤝 Contributing

We love contributions! 
Help us make this even better by contributing to the project. 
Your input is highly valued. 🤗
If you have any ideas, suggestions, or issues, feel free to submit a pull request or open an issue.

Steps to Contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

# ✍️ Authors <a name="authors"></a>

- [@AshimaSingh0610](https://github.com/AshimaSingh0610) - Creator & Maintainer

