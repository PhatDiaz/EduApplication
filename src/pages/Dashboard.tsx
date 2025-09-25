import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TeacherDashboard from './TeacherDashboard';
import StudentDashboard from './StudentDashboard';

interface User {
  name: string;
  email: string;
  role: 'teacher' | 'student';
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // If no user is found, redirect to auth
      navigate('/auth');
    }
  }, [navigate]);

  // Loading state while checking authentication
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-muted-foreground">
          Đang tải...
        </div>
      </div>
    );
  }

  // Render the appropriate dashboard based on user role
  return user.role === 'teacher' ? <TeacherDashboard /> : <StudentDashboard />;
}