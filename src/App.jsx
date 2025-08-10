import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

// App.jsx serves as the main entry point for the application
// It sets up the routing structure using React Router
// AppLayout is the layout route because it doesn't have the path prop
// AppLayout serves as a wrapper for the main application routes
// It uses the Outlet component to render child routes, allowing for a consistent layout
// GlobalStyles applies global CSS styles to the application
// The BrowserRouter component manages the routing for the application
// The Routes component defines the different routes and their corresponding components
// The Navigate component is used to redirect from the root path to the dashboard
// The PageNotFound component handles any unmatched routes, providing a user-friendly error page
// The Login route is defined both inside and outside the AppLayout to ensure accessibility
// This structure allows for a clean separation of concerns and a modular approach to building the application
// This setup is ideal for applications with multiple pages that share a common layout
// It allows for easy navigation and consistent user experience across the application

// REACT QUERY
// npm i @tanstack/react-query@4
// npm i @tanstack/react-query-devtools@4

// npm i date-fns - Library for helper.js

// staleTime - time it takes for data to become stale and JQuery refreshes it {Was swt to 1min}
// In the JQuery console, you have the stale and fresh tab indicators, when it is stale and you move to another page or tab, it refreshes.

// Displaying Notifications => React hot toast
// npm i react-hot-toast

// Introducing Another Library - React Hook Form
//npm i react-hook-form@7
