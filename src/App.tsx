import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = localStorage.getItem('user');
  
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  
  return <MainLayout>{children}</MainLayout>;
};

// Public route wrapper (redirects if already authenticated)
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const user = localStorage.getItem('user');
  
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/EduApplication">
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Authentication pages */}
          <Route path="/auth" element={
            <PublicRoute>
              <Auth />
            </PublicRoute>
          } />
          
          {/* Protected routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          {/* Teacher routes */}
          <Route path="/tests" element={
            <ProtectedRoute>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Quản lý đề thi</h1>
                <p className="text-muted-foreground mt-2">Trang này đang được phát triển...</p>
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/tests/create" element={
            <ProtectedRoute>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Tạo đề thi mới</h1>
                <p className="text-muted-foreground mt-2">Trang này đang được phát triển...</p>
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/analytics" element={
            <ProtectedRoute>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Phân tích AI</h1>
                <p className="text-muted-foreground mt-2">Trang này đang được phát triển...</p>
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/classes" element={
            <ProtectedRoute>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Lớp học</h1>
                <p className="text-muted-foreground mt-2">Trang này đang được phát triển...</p>
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/reports" element={
            <ProtectedRoute>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Báo cáo</h1>
                <p className="text-muted-foreground mt-2">Trang này đang được phát triển...</p>
              </div>
            </ProtectedRoute>
          } />
          
          {/* Student routes */}
          <Route path="/exams" element={
            <ProtectedRoute>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Bài thi</h1>
                <p className="text-muted-foreground mt-2">Trang này đang được phát triển...</p>
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/mindmap" element={
            <ProtectedRoute>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Mindmap học tập</h1>
                <p className="text-muted-foreground mt-2">Trang này đang được phát triển...</p>
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/achievements" element={
            <ProtectedRoute>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Thành tích</h1>
                <p className="text-muted-foreground mt-2">Trang này đang được phát triển...</p>
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/practice" element={
            <ProtectedRoute>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Luyện tập</h1>
                <p className="text-muted-foreground mt-2">Trang này đang được phát triển...</p>
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/upcoming" element={
            <ProtectedRoute>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Bài thi sắp tới</h1>
                <p className="text-muted-foreground mt-2">Trang này đang được phát triển...</p>
              </div>
            </ProtectedRoute>
          } />

          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;