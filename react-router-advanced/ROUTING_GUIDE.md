# Advanced React Router Implementation Guide

This guide demonstrates advanced routing techniques in a React application using React Router v6.

## Features Implemented

### 1. Basic Routing Setup

- **BrowserRouter**: Wraps the entire application for client-side routing
- **Routes & Route**: Define URL patterns and corresponding components
- **Navigation**: Global navigation bar with links to all main sections

### 2. Nested Routes

The Profile component demonstrates nested routing with sub-sections:

```
/profile                    → Profile component (parent route)
/profile/details           → ProfileDetails component
/profile/settings           → ProfileSettings component
```

**Implementation:**

- Parent route uses `<Outlet />` to render child routes
- Child routes are defined as nested Route components
- Navigation between sub-routes using `<Link>` components

### 3. Dynamic Routing

Two types of dynamic routing are implemented:

#### Blog Posts

```
/blog/:slug                → Dynamic blog post based on slug
```

- Uses `useParams()` hook to extract URL parameters
- Fetches content based on the dynamic slug parameter
- Handles 404 cases for non-existent posts

#### User Profiles

```
/users/:username            → Dynamic user profile based on username
```

- Similar implementation using URL parameters
- Displays user-specific information
- Graceful handling of missing users

### 4. Protected Routes

Authentication-based route protection for sensitive areas:

```
/profile/*                 → Requires authentication
```

**Features:**

- `ProtectedRoute` component wraps sensitive routes
- Checks localStorage for authentication status
- Redirects unauthenticated users to `/login`
- Loading state during authentication check
- Maintains intended destination for post-login redirect

### 5. Authentication Flow

- Login page with form validation
- Simulated authentication using localStorage
- Automatic redirect after successful login
- Preserves original destination using `useLocation` state

### 6. Error Handling

- 404 Not Found page for invalid routes
- Catch-all route (`*`) redirects to 404 page
- Graceful handling of missing dynamic content

## File Structure

```
src/
├── components/
│   ├── Home.jsx              # Landing page with navigation
│   ├── Profile.jsx            # Profile parent component with Outlet
│   ├── ProfileDetails.jsx     # Profile details section
│   ├── ProfileSettings.jsx    # Profile settings section
│   ├── BlogList.jsx           # Blog posts listing
│   ├── BlogPost.jsx           # Dynamic blog post component
│   ├── UserProfile.jsx        # Dynamic user profile component
│   ├── ProtectedRoute.jsx     # Authentication wrapper component
│   ├── Login.jsx              # Authentication page
│   └── NotFound.jsx           # 404 error page
├── App.jsx                    # Main router configuration
└── App.css                    # Comprehensive styling
```

## Route Configuration

The main routing is defined in `App.jsx`:

```jsx
<Routes>
  <Route path="/" element={<Home />} />

  {/* Protected Profile Routes */}
  <Route
    path="/profile"
    element={
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    }
  >
    <Route index element={<ProfileDetails />} />
    <Route path="details" element={<ProfileDetails />} />
    <Route path="settings" element={<ProfileSettings />} />
  </Route>

  {/* Blog Routes */}
  <Route path="/blog" element={<BlogList />} />
  <Route path="/blog/:slug" element={<BlogPost />} />

  {/* Dynamic User Profile Routes */}
  <Route path="/users/:username" element={<UserProfile />} />

  {/* Authentication Routes */}
  <Route path="/login" element={<Login />} />

  {/* 404 Not Found Route */}
  <Route path="/404" element={<NotFound />} />
  <Route path="*" element={<Navigate to="/404" replace />} />
</Routes>
```

## Testing Routes

### Basic Navigation

- **Home**: `/` - Landing page with navigation options
- **Blog List**: `/blog` - View all blog posts
- **User Example**: `/users/john` - View sample user profile

### Protected Routes

1. Try accessing `/profile` without authentication
2. Should redirect to `/login`
3. Login with any email/password
4. Should redirect back to `/profile`
5. Navigate between `/profile/details` and `/profile/settings`

### Dynamic Routes

- **Blog Posts**: `/blog/getting-started-react-router`
- **User Profiles**: `/users/jane`, `/users/bob`
- Try invalid URLs to see 404 handling

### Error Handling

- Visit any invalid URL to see the 404 page
- Try non-existent blog slugs or usernames

## Key Concepts Demonstrated

### 1. Route Hierarchy

- Parent-child route relationships
- Nested routing with `<Outlet />`
- Index routes for default child rendering

### 2. Dynamic Parameters

- URL parameter extraction with `useParams()`
- Type-safe parameter handling
- Conditional rendering based on parameters

### 3. Route Protection

- HOC pattern for route wrapping
- Authentication state management
- Redirect logic with state preservation

### 4. Navigation Patterns

- Declarative navigation with `<Link>`
- Programmatic navigation with `Navigate`
- Back navigation patterns

### 5. Error Boundaries

- 404 route handling
- Wildcard route matching
- Graceful fallbacks

## Best Practices Implemented

1. **Component Organization**: Logical separation of route components
2. **State Management**: LocalStorage for authentication persistence
3. **User Experience**: Loading states and smooth transitions
4. **Accessibility**: Semantic HTML and proper navigation structure
5. **Responsive Design**: Mobile-friendly layout and navigation
6. **Error Handling**: Comprehensive error states and user feedback

## Running the Application

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open browser to `http://localhost:5173`
4. Test all routing scenarios as outlined above

This implementation provides a solid foundation for building complex React applications with sophisticated routing requirements.
