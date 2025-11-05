import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './Blog'; // We'll export this from Blog.jsx
import Navbar from './Navbar';
import Footer from './Footer';

export default function BlogPostPage() {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow flex items-center justify-center text-center px-6 py-24">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800">404</h1>
                        <p className="text-xl text-gray-600 mt-4">Blog post not found.</p>
                        <Link to="/" className="mt-8 inline-block bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            Back to Home
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // The full blog post content is here.
    const fullContent = {
        'architecting-a-scalable-react-application-with-redux-toolkit': (
            <div className="prose lg:prose-xl max-w-none text-gray-700">
                <p className="lead">
                    When building large-scale React applications, managing state can quickly become complex. Prop-drilling, inconsistent state updates, and boilerplate code are common challenges. Redux has long been the go-to solution, and its modern incarnation, Redux Toolkit (RTK), makes it more powerful and developer-friendly than ever. Let's explore how to architect a scalable application using RTK.
                </p>

                <h3 className="font-bold text-2xl mt-8 mb-4">Why Redux Toolkit?</h3>
                <p>
                    Redux Toolkit is the official, opinionated, "batteries-included" toolset for efficient Redux development. It simplifies most Redux tasks, prevents common mistakes, and makes it easier to write good Redux applications. It includes utilities like:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>configureStore():</strong> Wraps `createStore` to provide simplified configuration options and good defaults. It automatically combines your slice reducers and includes Redux Thunk by default.</li>
                    <li><strong>createSlice():</strong> Lets you write "slices" of your Redux state. It automatically generates action creators and action types, drastically reducing boilerplate.</li>
                    <li><strong>createAsyncThunk():</strong> A utility for creating thunks to handle asynchronous logic like API calls.</li>
                </ul>

                <h3 className="font-bold text-2xl mt-8 mb-4">Structuring Your Application: The "Slices" Pattern</h3>
                <p>
                    A scalable architecture starts with a logical folder structure. The "feature folder" or "slices" pattern is highly recommended. Instead of separating files by type (e.g., `/actions`, `/reducers`), group them by feature.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg"><code>
                    {`src/
├── app/
│   └── store.js         # The single Redux store
├── features/
│   ├── users/
│   │   ├── usersSlice.js  # Reducer, actions, and thunks for users
│   │   └── UsersList.jsx  # A component using the users slice
│   └── posts/
│       ├── postsSlice.js  # Reducer, actions, and thunks for posts
│       └── PostsList.jsx  # A component using the posts slice
└── ...`}
                </code></pre>

                <h3 className="font-bold text-2xl mt-8 mb-4">Example: A User Slice</h3>
                <p>
                    Let's see how `createSlice` and `createAsyncThunk` work together. Here’s a simple `usersSlice.js`:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg"><code>
                    {`import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://api.example.com/users');
  return response.json();
});

const usersSlice = createSlice({
  name: 'users',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.entities = action.payload;
      });
  },
});

export default usersSlice.reducer;`}
                </code></pre>
                <p className="mt-4">
                    Notice how little boilerplate there is. `createAsyncThunk` handles the action types for pending, fulfilled, and rejected states, and we listen for them in `extraReducers`. The reducers written with Immer (included in RTK) allow us to write seemingly "mutating" logic that is turned into safe, immutable updates.
                </p>
                <p className="mt-4">By adopting Redux Toolkit and a feature-sliced architecture, you create a codebase that is easier to navigate, maintain, and scale. It provides a clear and predictable pattern for state management that will serve your application well as it grows in complexity.</p>
            </div>
        )
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow bg-white py-16 px-6">
                <article className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
                    <p className="text-gray-500 mb-8">{post.date} • {post.tags}</p>
                    {fullContent[post.slug] || <p>{post.description}</p>}
                </article>
            </main>
            <Footer />
        </div>
    );
}