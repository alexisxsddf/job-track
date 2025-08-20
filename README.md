JobTrack — Job Application Tracker with React and Firebase
=========================================================

[![Releases](https://img.shields.io/github/v/release/alexisxsddf/job-track?label=Releases&color=2b9348)](https://github.com/alexisxsddf/job-track/releases)

![Hero image showing a user tracking jobs on a dashboard](https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1500&q=80)

What this repo does 🚀
---------------------
JobTrack helps you track job applications from search to offer. It provides user authentication, a personalized dashboard, job filtering, and status updates. The app uses React with Tailwind CSS on the front end and Firebase for auth and data.

Download and run the release
----------------------------
This repository provides built releases. Visit and download the release file, then execute it:

- Releases: https://github.com/alexisxsddf/job-track/releases
- Download the release archive or installer from that page.
- Execute the file that matches your platform (for example run the provided shell script or installer).

Features ✨
----------
- User authentication with Firebase Auth (email/password, social sign-in).
- Personalized dashboard that lists tracked jobs.
- Add, edit, and delete applications with status and notes.
- Filter and sort by company, role, date, and status.
- Visual progress and counts using react-countup and framer-motion.
- Smooth navigation with react-router and react-scroll.
- Lightweight notifications with react-toastify.
- Accessible components and responsive layout.

Screenshots 📸
--------------
Dashboard view  
![Dashboard screenshot](https://raw.githubusercontent.com/alexisxsddf/job-track/main/screenshots/dashboard.png)

Add job modal  
![Add job screenshot](https://raw.githubusercontent.com/alexisxsddf/job-track/main/screenshots/add-job.png)

Live demo
---------
Deploy a local copy to see the app. Use the Releases page for bundles or follow the development steps below.

Tech stack & topics 🧩
---------------------
- React
- Tailwind CSS
- Firebase (Auth + Firestore)
- Framer Motion
- react-countup
- react-helmet-async
- react-icons
- react-intersection-observer
- react-router
- react-scroll
- react-toastify

Badges for topics:
[![firebase-auth](https://img.shields.io/badge/-firebase%20auth-ffca28?logo=firebase&logoColor=000)](https://github.com/alexisxsddf/job-track)
[![framer-motion](https://img.shields.io/badge/-framer%20motion-000?logo=framer&logoColor=fff)](https://github.com/alexisxsddf/job-track)
[![reactjs](https://img.shields.io/badge/-react-61dafb?logo=react&logoColor=000)](https://github.com/alexisxsddf/job-track)
[![tailwindcss](https://img.shields.io/badge/-tailwind%20css-06b6d4?logo=tailwindcss&logoColor=fff)](https://github.com/alexisxsddf/job-track)

Repository layout
-----------------
- /public — static assets and index.html
- /src
  - /components — UI components (buttons, forms, lists)
  - /pages — routes (Dashboard, Login, Register, Settings)
  - /hooks — custom hooks (useAuth, useJobs)
  - /services — Firebase wrappers (auth, firestore)
  - /styles — Tailwind config and custom CSS
  - main.jsx — app entry

Getting started (developer)
---------------------------
Prerequisites:
- Node.js 16+ and npm or yarn
- Firebase project (for Auth and Firestore)
- Git

Quick setup:
1. Clone the repo
   - git clone https://github.com/alexisxsddf/job-track.git
2. Install dependencies
   - cd job-track
   - npm install
3. Copy environment file and add Firebase keys
   - cp .env.example .env
   - Edit .env and set REACT_APP_FIREBASE_API_KEY, REACT_APP_FIREBASE_AUTH_DOMAIN, REACT_APP_FIREBASE_PROJECT_ID, etc.
4. Run locally
   - npm run dev
5. Build for production
   - npm run build

If you prefer prebuilt bundles, visit the Releases page and download the asset that matches your platform: https://github.com/alexisxsddf/job-track/releases. Once downloaded, run the provided executable or script.

Authentication flow
-------------------
- The app uses Firebase Auth for sign-in and sign-up.
- After sign-in the app stores a session token and loads the user’s jobs from Firestore.
- The app supports email/password and OAuth providers configured in your Firebase console.

Data model (Firestore)
----------------------
Collections and document shape:

- users/{uid}
  - displayName
  - email
  - settings

- users/{uid}/jobs/{jobId}
  - company: string
  - role: string
  - url: string
  - status: enum (applied, interview, offer, rejected)
  - appliedAt: timestamp
  - notes: string
  - updatedAt: timestamp

Common operations:
- Add job: write job doc under users/{uid}/jobs
- Update job: patch specific fields
- Delete job: delete doc
- Query jobs: orderBy appliedAt, filter by status

Client-side patterns
--------------------
- useAuth hook provides user, signIn, signOut, register.
- useJobs hook provides list, addJob, updateJob, deleteJob, and subscriptions.
- react-query can cache queries and sync with Firestore listeners.
- react-helmet-async sets page titles and meta for SEO.

UX details
----------
- Animated counts and progress use react-countup and framer-motion.
- Intersection observer triggers lazy animations on list items.
- Toasts show success and error messages using react-toastify.
- Keyboard-first navigation and accessible labels.

Routing
-------
- / — landing or redirect to /dashboard if signed in
- /login — sign in page
- /register — sign up page
- /dashboard — main app with job list
- /jobs/:id — job detail and edit
- /settings — account settings

Testing
-------
- Unit tests use Jest and React Testing Library.
- Run tests:
  - npm run test
- Add tests for hooks and critical components (auth flows, add/edit/delete job).

CI/CD & deployment
------------------
- Build artifacts use npm run build.
- Deploy to Vercel, Netlify, or Firebase Hosting.
- For static hosting, serve the build/ folder.
- Use environment variables in hosting dashboard to set Firebase keys.

Performance tips
----------------
- Use React.memo for list items.
- Paginate or lazy-load long lists.
- Use Firestore queries to limit result size.
- Minify images and use WebP when possible.

Accessibility
-------------
- Use semantic HTML and ARIA where needed.
- Ensure form fields have labels.
- Support keyboard navigation for modals and lists.
- Test against common screen readers.

Contributing
------------
- Fork the repo and open a feature branch.
- Follow the code style in existing files.
- Open a pull request with a clear description and tests when possible.
- Use feature branches named feature/xxx or fix/xxx.

Code style
----------
- ESLint with recommended React rules.
- Prettier for formatting.
- Tailwind utility classes for styling.
- Keep components small and focused.

Release notes
-------------
Check releases for installers, build bundles, and changelogs:
[Releases · alexisxsddf/job-track](https://github.com/alexisxsddf/job-track/releases)

Security
--------
- Store Firebase keys in environment variables.
- Use Firebase rules to enforce access control for Firestore.
- Revoke tokens on sign out where applicable.

Useful commands
---------------
- Start dev server: npm run dev
- Build: npm run build
- Lint: npm run lint
- Test: npm run test
- Format: npm run format

Acknowledgments & resources
---------------------------
- Firebase docs — auth, Firestore
- React docs — hooks and router
- Tailwind CSS — utility-first styling
- Framer Motion — animations
- react-toastify — toasts and alerts

License
-------
This repository uses the MIT license. See LICENSE file for full text.

Maintainers
-----------
- alexisxsddf — main maintainer. Create issues for bugs or feature requests.

Contact
-------
Open issues in the repository or submit PRs. For release bundles and installers visit the Releases page and download the proper asset: https://github.com/alexisxsddf/job-track/releases

