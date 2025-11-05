import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./SlickArrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const blogPosts = [
    {
        title: "Architecting a scalable React application with Redux Toolkit",
        slug: "architecting-a-scalable-react-application-with-redux-toolkit",
        date: "Oct 2, 2025",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        tags: "React, Redux",
        description: "A deep dive into how to structure a large-scale application using Redux Toolkit to ensure predictable state management and maintainability."
    },
    {
        title: "5 best practices for accessible UI components",
        slug: "5-best-practices-for-accessible-ui-components",
        date: "Sep 15, 2025",
        image: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        tags: "Accessibility, UI/UX",
        description: "Learn how to build UI components that are usable for everyone, from proper semantic HTML to ARIA attributes and keyboard navigation."
    },
    {
        title: "From Figma to Code: A guide to perfect UI implementation",
        slug: "from-figma-to-code-a-guide-to-perfect-ui-implementation",
        date: "Aug 20, 2025",
        image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        tags: "UI/UX, Development",
        description: "A practical guide to bridging the gap between design and development, ensuring your coded components are pixel-perfect and match the Figma prototype."
    },
    {
        title: "Lazy Loading in React for Performance",
        slug: "lazy-loading-in-react-for-performance",
        date: "July 10, 2025",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        tags: "React, Performance",
        description: "Boost your application's speed by learning how to implement lazy loading for components, routes, and images in React."
    },
    {
        title: "A Guide to Performance Optimization in React",
        slug: "performance-optimization-in-react",
        date: "June 5, 2025",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        tags: "React, Performance",
        description: "Explore key techniques like memoization with `React.memo`, `useMemo`, and `useCallback` to prevent unnecessary re-renders and optimize your app."
    },
    {
        title: "Implementing Secure Routing in React Applications",
        slug: "implementing-secure-routing-in-react",
        date: "May 1, 2025",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        tags: "React, Security, Routing",
        description: "Learn how to protect routes and manage user authentication states to build secure and robust single-page applications with React Router."
    },
    {
        title: "Building an Advanced, Excel-like Data Grid in React",
        slug: "building-advanced-excel-like-data-grid-in-react",
        date: "Nov 5, 2025",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        tags: "React, MUI, Redux, Data Grid",
        description: "A deep dive into creating a feature-rich data grid with MUI, Redux for state history (undo/redo), drag-and-drop, and advanced cell navigation."
    },
];

// Full content for blog posts
const fullContent = {
    'architecting-a-scalable-react-application-with-redux-toolkit': (
        <div className="prose lg:prose-xl max-w-none text-gray-700">
            <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="React and Redux logos" className="rounded-lg mb-8" />
            <p className="lead">
                When building large-scale React applications, managing state can quickly become complex. Prop-drilling, inconsistent state updates, and boilerplate code are common challenges. Redux has long been the go-to solution, and its modern incarnation, Redux Toolkit (RTK), makes it more powerful and developer-friendly than ever. Let's explore how to architect a scalable application using RTK.
            </p>

            <h3 className="font-bold text-2xl mt-8 mb-4">Why Redux Toolkit?</h3>
            <p>Redux Toolkit (RTK) is the official, opinionated, "batteries-included" toolset for efficient Redux development. It was created to solve three major problems with traditional Redux:</p>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Too much boilerplate:</strong> Writing actions and reducers required multiple files and a lot of repetitive code.</li>
                <li><strong>Complexity:</strong> Setting up a Redux store with middleware like Thunk and DevTools was a multi-step process.</li>
                <li><strong>Immutability:</strong> Accidentally mutating state in reducers was a common source of bugs.</li>
            </ul>
            <p>RTK addresses these with utilities like `configureStore`, `createSlice`, and `createAsyncThunk`, which use libraries like Immer and Redux Thunk under the hood to provide a simpler, safer, and more powerful API.</p>

            <h3 className="font-bold text-2xl mt-8 mb-4">Structuring Your Application: The "Slices" Pattern</h3>
            <p>A scalable architecture starts with a logical folder structure. The "feature folder" or "slices" pattern is highly recommended. Instead of separating files by type (e.g., `/actions`, `/reducers`), group them by feature.</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg my-4"><code>{`src/
├── app/
│   └── store.js            # The single Redux store configuration
├── features/
│   ├── users/
│   │   ├── usersSlice.js     # Reducer, actions, and thunks for users
│   │   └── UsersList.jsx     # A component using the users slice
│   └── posts/
│       ├── postsSlice.js     # Reducer, actions, and thunks for posts
│       └── PostsList.jsx     # A component using the posts slice
└── ...`}
            </code></pre>

            <h3 className="font-bold text-2xl mt-8 mb-4">Example: A Complete User Slice</h3>
            <p>Let's see how `createSlice` and `createAsyncThunk` work together. Here’s a simple `usersSlice.js` that fetches a list of users from an API.</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg my-4"><code>{`import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 1. Create an async thunk for fetching data
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers', // Action type prefix
  async () => {
    const response = await fetch('https://api.example.com/users');
    return response.json();
  }
);

// 2. Create the slice
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    entities: [],
    loading: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    // Standard reducers for synchronous actions
  },
  extraReducers: (builder) => {
    // Reducers for handling actions from other slices or async thunks
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.entities = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;`}
            </code></pre>
            <p className="mt-4">Notice how little boilerplate there is. `createAsyncThunk` handles the action types for pending, fulfilled, and rejected states. Inside the reducers, Immer allows us to write seemingly "mutating" logic that is turned into safe, immutable updates.</p>

            <h3 className="font-bold text-2xl mt-8 mb-4">Connecting to Components</h3>
            <p>In your component, you use the `useDispatch` and `useSelector` hooks from `react-redux` to interact with the store.</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg my-4"><code>{`import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './usersSlice';

export function UsersList() {
  const dispatch = useDispatch();
  const { entities: users, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading === 'loading') return <p>Loading...</p>;

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}`}
            </code></pre>
            <p>By adopting Redux Toolkit and a feature-sliced architecture, you create a codebase that is easier to navigate, maintain, and scale, providing a clear pattern for state management as your application grows.</p>
        </div>
    ),
    '5-best-practices-for-accessible-ui-components': (
        <div className="prose lg:prose-xl max-w-none text-gray-700">
            <img src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="A person using a laptop with a screen reader" className="rounded-lg mb-8" />
            <p className="lead">
                Accessibility (a11y) is not a feature, but a fundamental part of creating inclusive web experiences. Building accessible UI components ensures that people with disabilities can perceive, understand, navigate, and interact with your application. Here are five best practices to follow.
            </p>
            <h3 className="font-bold text-2xl mt-8 mb-4">1. Use Semantic HTML</h3>
            <p>
                {`Always start with the right tool for the job. Native HTML elements come with built-in accessibility features. A \`<button>\` is keyboard-focusable and announces itself as a button to screen readers. A \`<div>\` does not. Using semantic tags like \`<nav>\`, \`<main>\`, and \`<article>\` provides a clear structure that assistive technologies can understand.`}
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg my-4"><code>{`// Bad: Not accessible to keyboard or screen readers without extra work
<div onClick={handleClick}>Submit</div>

// Good: Natively accessible and semantic
<button onClick={handleClick}>Submit</button>`}</code></pre>
            
            <h3 className="font-bold text-2xl mt-8 mb-4">2. Manage Focus</h3>
            <p>Ensure that all interactive elements are focusable and have a visible focus indicator. For custom components or dynamic content (like modals), you must manage focus programmatically. When a modal opens, focus should move inside it. When it closes, focus should return to the element that opened it.</p>

            <h3 className="font-bold text-2xl mt-8 mb-4">3. Implement ARIA Roles and Attributes</h3>
            <p>Accessible Rich Internet Applications (ARIA) attributes bridge the gap where HTML semantics are insufficient. Use roles like `role="dialog"` or `role="alert"` and properties like `aria-label` or `aria-describedby` to provide context that isn't visually apparent.</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg my-4"><code>{`// Example of a custom checkbox
<div
  role="checkbox"
  aria-checked={isChecked}
  tabIndex="0"
  onClick={() => setIsChecked(!isChecked)}
  onKeyDown={(e) => e.key === ' ' && setIsChecked(!isChecked)}
>
  {/* Custom checkbox visuals */}
</div>`}</code></pre>

            <h3 className="font-bold text-2xl mt-8 mb-4">4. Ensure Sufficient Color Contrast</h3>
            <p>Text should have a contrast ratio of at least 4.5:1 against its background (or 3:1 for large text) to be readable for users with low vision. Use browser developer tools or online checkers to verify your color palette meets WCAG guidelines.</p>

            <h3 className="font-bold text-2xl mt-8 mb-4">5. Support Keyboard Navigation</h3>
            <p>All functionality that can be accessed with a mouse must also be accessible using only a keyboard. This means logical tab order, keyboard-operable custom components (e.g., using arrow keys for a custom dropdown), and no "keyboard traps" where a user can't tab out of a component.</p>

            <h3 className="font-bold text-2xl mt-8 mb-4">Bonus: Test with Accessibility Tools</h3>
            <p>Regularly test your application with automated tools and manual checks. Tools like Axe DevTools (browser extension), Lighthouse (in Chrome DevTools), and screen readers (VoiceOver on macOS, NVDA on Windows) are invaluable for catching issues you might otherwise miss.</p>
        </div>
    ),
    'from-figma-to-code-a-guide-to-perfect-ui-implementation': (
        <div className="prose lg:prose-xl max-w-none text-gray-700">
            <img src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="A designer's desk with Figma on screen" className="rounded-lg mb-8" />
            <p className="lead">
                The handover from design to development is a critical phase where beautiful mockups can turn into frustrating implementations. Bridging this gap requires clear communication, a systematic approach, and the right tools. Here's a guide to achieving pixel-perfect UI implementation from a Figma design.
            </p>
            <h3 className="font-bold text-2xl mt-8 mb-4">1. Establish a Design System and Tokens</h3>
            <p>Before writing a single line of code, collaborate with the designer to define a design system. This includes establishing design tokens—variables for colors, fonts, spacing, and shadows. Storing these in a central place (like a `theme.js` file or CSS custom properties) ensures consistency and makes updates trivial.</p>

            <h3 className="font-bold text-2xl mt-8 mb-4">2. Use Figma's Inspect Panel</h3>
            <p>Figma's "Inspect" panel is your best friend. It provides CSS properties, measurements, and asset export options. Use it to get exact values for sizes, spacing, and styles. Don't eyeball it; trust the data provided by the design tool. You can even switch the output from CSS to iOS or Android code to help mobile developers.</p>

            <h3 className="font-bold text-2xl mt-8 mb-4">3. Build with Components</h3>
            <p>Break down the design into reusable components, just as a designer does in Figma. A button, an input field, or a card should be a single, configurable React component. Adopting a methodology like Atomic Design can provide a clear hierarchy for your components.</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg my-4"><code>{`// Atomic Design Structure
components/
├── atoms/
│   ├── Button.jsx
│   └── Input.jsx
├── molecules/
│   └── SearchForm.jsx (Input + Button)
└── organisms/
    └── Header.jsx (SearchForm + Navigation)`}</code></pre>

            <h3 className="font-bold text-2xl mt-8 mb-4">4. Handle Responsive Design Proactively</h3>
            <p>Don't treat mobile or tablet views as an afterthought. Figma designs should include mockups for different breakpoints. Implement responsive styles using a mobile-first approach with media queries or a utility-first framework like Tailwind CSS. Check how components reflow and adapt to different screen sizes early and often.</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg my-4"><code>{`// Mobile-first with Tailwind CSS
<div class="flex flex-col md:flex-row">
  {/* Stacks vertically on mobile, horizontally on medium screens and up */}
</div>`}</code></pre>

            <h3 className="font-bold text-2xl mt-8 mb-4">5. Communicate and Iterate</h3>
            <p>Perfect implementation is a dialogue. If a design element is technically challenging or has accessibility issues, discuss it with the designer. They may not be aware of the technical constraints. Regular check-ins and collaborative reviews ensure the final product is both beautiful and functional.</p>
        </div> // This was missing a closing </p> tag before the </div>
    ),
    'lazy-loading-in-react-for-performance': (
        <div className="prose lg:prose-xl max-w-none text-gray-700">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="A loading bar on a screen" className="rounded-lg mb-8" />
            <p className="lead">
                As your React application grows, so does its bundle size. Large bundles can significantly slow down initial page loads. Lazy loading is a powerful technique to combat this by splitting your code into smaller chunks and loading them only when they are needed.
            </p>
            <h3 className="font-bold text-2xl mt-8 mb-4">Lazy Loading Components with `React.lazy`</h3>
            <p>React provides a built-in way to lazy load components using `React.lazy` and `Suspense`. `React.lazy` lets you render a dynamically imported component as a regular component.</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg my-4"><code>{`import React, { Suspense } from 'react';

const MyHeavyComponent = React.lazy(() => import('./MyHeavyComponent'));

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MyHeavyComponent />
      </Suspense>
    </div>
  );
}`}</code></pre>
            <p>The `Suspense` component allows you to specify a loading indicator (like a spinner) while the lazy component is being loaded. This provides a much better user experience than a blank screen.</p>
            <h3 className="font-bold text-2xl mt-8 mb-4">Route-based Code Splitting</h3>
            <p>A common and effective strategy is to apply lazy loading to your routes. This means users only download the code for the page they are currently visiting. With React Router, this is straightforward.</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg my-4"><code>{`import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const HomePage = React.lazy(() => import('./pages/Home'));
const AboutPage = React.lazy(() => import('./pages/About'));

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}`}</code></pre>
            <h3 className="font-bold text-2xl mt-8 mb-4">Analyzing Your Bundle</h3>
            <p>To identify which components are the best candidates for lazy loading, you need to analyze your bundle. Tools like `webpack-bundle-analyzer` generate a visual map of your bundle, making it easy to spot large modules that can be split off.</p>
            <p>By implementing lazy loading, you can dramatically improve your application's initial load time and overall performance, ensuring your users have a fast and responsive experience.</p>
        </div>
    ),
    'performance-optimization-in-react': (
        <div className="prose lg:prose-xl max-w-none text-gray-700">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="A dashboard with performance charts" className="rounded-lg mb-8" />
            <p className="lead">
                React's virtual DOM is fast, but unnecessary re-renders can still bog down complex applications. Understanding and using React's optimization tools is key to building high-performance UIs. Let's look at `React.memo`, `useMemo`, and `useCallback`.
            </p>
            <h3 className="font-bold text-2xl mt-8 mb-4">`React.memo` for Components</h3>
            <p>`React.memo` is a higher-order component that memoizes your component's render output. If its props haven't changed, React will skip re-rendering the component and reuse the last rendered result. This is incredibly useful for pure components that render the same output for the same props.</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg my-4"><code>{`const UserAvatar = React.memo(function UserAvatar({ username }) {
  console.log(\`Rendering avatar for \${username}\`);
  return <img src={\`/avatars/\${username}.png\`} alt={username} />;
});

// In parent component:
// UserAvatar will only re-render if its 'username' prop changes.`}</code></pre>
            <h3 className="font-bold text-2xl mt-8 mb-4">`useMemo` for Values</h3>
            <p>The `useMemo` hook memoizes the result of a function call. It re-runs the function only when one of its dependencies has changed. This is perfect for expensive calculations that you don't want to re-compute on every render.</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg my-4"><code>{`function ProductList({ products, filter }) {
  const visibleProducts = useMemo(() => {
    // This expensive filtering only runs when 'products' or 'filter' changes
    return products.filter(p => p.name.includes(filter));
  }, [products, filter]);

  return <ul>{visibleProducts.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}`}</code></pre>
            <h3 className="font-bold text-2xl mt-8 mb-4">`useCallback` for Functions</h3>
            <p>The `useCallback` hook memoizes a function definition. This is important when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary re-renders. Without `useCallback`, a new function is created on every render, causing child components to re-render even if nothing has changed.</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg my-4"><code>{`function Parent() {
  const [count, setCount] = useState(0);

  // Without useCallback, a new function is created on every render,
  // causing MemoizedButton to re-render unnecessarily.
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  }, []); // Empty dependency array means the function is created only once.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <MemoizedButton onClick={handleClick} />
    </div>
  );
}`}</code></pre>
            <p>By strategically applying these tools, you can eliminate performance bottlenecks and ensure your application remains fast and responsive, even as it grows in complexity.</p>
        </div>
    ),
    'implementing-secure-routing-in-react': (
        <div className="prose lg:prose-xl max-w-none text-gray-700">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="A digital lock on a screen" className="rounded-lg mb-8" />
            <p className="lead">
                In many web applications, certain pages should only be accessible to authenticated users. Implementing secure routing in a React single-page application (SPA) is crucial for protecting sensitive data and functionality. Let's see how to create protected routes using React Router.
            </p>
            <h3 className="font-bold text-2xl mt-8 mb-4">Creating a `ProtectedRoute` Component</h3>
            <p>A common pattern is to create a wrapper component that checks the user's authentication status. If the user is authenticated, it renders the requested component. If not, it redirects them to a login page.</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg my-4"><code>{`import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// This is a simplified example. In a real app, you'd use context or Redux.
const useAuth = () => {
  // Replace with your actual auth logic
  const user = localStorage.getItem('user');
  return { isAuthenticated: !!user };
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. This allows us to send them back after they log in.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};`}</code></pre>
            <h3 className="font-bold text-2xl mt-8 mb-4">Using the `ProtectedRoute`</h3>
            <p>Now you can easily protect any route by wrapping its component with your new `ProtectedRoute`.</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg my-4"><code>{`import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Dashboard = () => <h2>Welcome to your Dashboard</h2>;
const Profile = () => <h2>Your Profile</h2>;
const LoginPage = () => <h2>Login Page</h2>;
const HomePage = () => <h2>Home Page</h2>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}`}</code></pre>
            <p>This approach provides a clean, reusable, and declarative way to manage access control in your React application, making your routing logic both secure and easy to maintain.</p>
        </div>
    ),
    'building-advanced-excel-like-data-grid-in-react': (
        <div className="prose lg:prose-xl max-w-none text-gray-700">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="A modern data grid interface" className="rounded-lg mb-8" />
            <p className="lead">
                Modern web applications often require complex data manipulation capabilities, similar to desktop spreadsheet software like Excel. In this post, we'll explore how to build a highly interactive and feature-rich data grid in React, leveraging a powerful stack of libraries to handle everything from data rendering to undo/redo functionality and encryption.
            </p>

            <h3 className="font-bold text-2xl mt-8 mb-4">1. The Foundation: MUI Data Grid</h3>
            <p>
                For rendering and basic data manipulation, we chose <a href="https://mui.com/x/react-data-grid/" target="_blank" rel="noopener noreferrer">MUI Data Grid</a>. It's a powerful and customizable component that provides a solid foundation with features like sorting, filtering, and pagination out of the box. Its flexible API, particularly the ability to provide custom renderers for cells and headers, was crucial. This allowed us to override default behaviors and inject our own complex state logic and interaction models directly into the grid cells.
            </p>

            <h3 className="font-bold text-2xl mt-8 mb-4">2. State Management and Versioning with Redux</h3>
            <p>
                A critical requirement was implementing robust undo/redo functionality, allowing users to navigate back and forth through their changes an unlimited number of times. We achieved this by using Redux as our state management solution. Instead of just storing the current state of the data grid, we maintained a history of states.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg my-4"><code>{`// Example Redux state shape
{
  grid: {
    past: [/* array of previous data states */],
    present: { /* the current data state */ },
    future: [/* array of future (undone) data states */]
  }
}`}
            </code></pre>
            <p>
                With every user modification, we would push the *previous* present state into the `past` array and update `present` with the new state. Crucially, any "redo" history in the `future` array was cleared on a new action, ensuring a linear history. An "undo" action would pop from `past` and move the current `present` into `future`. A "redo" action does the reverse. This pattern provides a complete, reliable, and unlimited versioning of the data, giving users the freedom to explore changes without fear of losing work.
            </p>

            <h3 className="font-bold text-2xl mt-8 mb-4">3. Tracking Data Modifications</h3>
            <p>
                To easily identify what changed between versions, each modified data entry was decorated with a special property, for example, `__meta`. This object contained metadata about the change, including not just the previous and current values, but also a timestamp and user ID.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg my-4"><code>{`// Example of a modified data row
{
  id: 1,
  name: "New Name",
  value: 100,
  __meta: {
    isModified: true,
    changes: {
      name: { previous: "Old Name", current: "New Name" }
    }
  }
}`}
            </code></pre>
            <p>This granular tracking was invaluable. It made it simple to apply conditional styling to highlight changed cells in the UI, providing immediate visual feedback. It also allowed us to generate clean, minimal payloads for API updates, sending only the delta of what had actually changed, which significantly improved network performance and reduced server load.</p>

            <h3 className="font-bold text-2xl mt-8 mb-4">4. Advanced Interactivity: Drag-and-Drop and Keyboard Navigation</h3>
            <p>
                To mimic the Excel experience, we implemented two key features:
            </p>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Drag-and-Drop:</strong> Using libraries like `react-dnd`, we enabled users to reorder entire rows by dragging them. More impressively, we implemented cell-level drag-to-fill, where a user could drag the small handle on the corner of a selected cell to intelligently copy its value down or across adjacent cells, a core feature of any spreadsheet software.</li>
                <li><strong>Keyboard Navigation:</strong> We added global event listeners to capture keyboard events (`ArrowUp`, `ArrowDown`, `Tab`, etc.) to allow seamless navigation between cells without ever touching the mouse. This included more advanced logic for moving an entire row up or down using keyboard shortcuts (e.g., `Alt+Up/Down`), which would dispatch an action to reorder the data in our Redux store.</li>
            </ul>

            <h3 className="font-bold text-2xl mt-8 mb-4">5. Securing the Data</h3>
            <p>
                Finally, with sensitive data being handled, security was paramount. Before any data was sent to the server, and before any state was persisted to the browser's local storage, we implemented client-side encryption using a robust library like `crypto-js`. The entire data grid state was serialized and encrypted into a non-readable string. It was only decrypted in memory when the application was loaded, ensuring that the raw data was never stored in a vulnerable, plain-text state on the client machine or during transit.
            </p>
            <p className="mt-4">
                By combining these technologies, we were able to build a powerful, secure, and user-friendly data grid that provides a rich, Excel-like experience directly in the browser.
            </p>
        </div>
    ),
};

export default function Blog() {
    const [selectedPost, setSelectedPost] = useState(null);

    const settings = {
        dots: true,
        infinite: blogPosts.length > 2,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1, // This was correct, but the 1024 breakpoint was wrong
                },
            },
        ],
    };

    return (
        <section id="blog" className="bg-gray-50 py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">From the Blog</h2>
                </div>
                <Slider {...settings}>
                    {blogPosts.map((post, index) => (
                        <div key={post.title} className="p-4">
                            <motion.div
                                className="bg-white shadow-lg rounded-xl h-full cursor-pointer flex flex-col hover:shadow-xl hover:scale-105 transform transition-all duration-300 overflow-hidden"
                                onClick={() => setSelectedPost(post)}
                            >
                                <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold mb-2 flex-grow min-h-[3.5rem]">{post.title}</h3>
                                    <p className="text-sm text-gray-500 mb-2">{post.date} • {post.tags}</p>
                                    <p className="text-gray-700 text-sm">{post.description}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </Slider>
            </div>

            {selectedPost && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4" 
                    onClick={() => setSelectedPost(null)}
                >
                    <div 
                        className="relative w-full h-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-xl overflow-y-auto" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setSelectedPost(null)} 
                            className="sticky top-4 right-4 float-right bg-gray-200 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold hover:bg-gray-300 transition-colors z-10"
                            aria-label="Close blog post"
                        >
                            &times;
                        </button>
                        <article className="p-8 md:p-12">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{selectedPost.title}</h1>
                            <p className="text-gray-500 mb-8">{selectedPost.date} • {selectedPost.tags}</p>
                            <div>
                                {fullContent[selectedPost.slug] || <p>{selectedPost.description}</p>}
                            </div>
                        </article>
                    </div>
                </div>
            )}
        </section>
    );
}