
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import LearnMore from "./pages/LearnMore";
import Dashboard from "./pages/Dashboard";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  const [userRole, setUserRole] = React.useState<string | null>(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      setIsAuthenticated(!!session);
      if (session) {
        const { data: { role } = {} } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();
        setUserRole(role);
      } else {
        setUserRole(null);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route 
                path="/" 
                element={
                  isAuthenticated && userRole === "staff" ? (
                    <Navigate to="/dashboard" replace />
                  ) : (
                    <Index />
                  )
                } 
              />
              <Route 
                path="/dashboard" 
                element={
                  !isAuthenticated ? (
                    <Navigate to="/auth" replace />
                  ) : userRole !== "staff" ? (
                    <Navigate to="/" replace />
                  ) : (
                    <Dashboard />
                  )
                } 
              />
              <Route path="/auth" element={<Auth />} />
              <Route path="/learn-more" element={<LearnMore />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.Fragment>
  );
};

export default App;

