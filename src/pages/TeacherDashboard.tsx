import React from 'react';
import { 
  FileText, 
  Users, 
  BookOpen, 
  TrendingUp,
  Brain,
  PlusCircle,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Clock,
  Target,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
  description?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend, icon, description }) => {
  const trendColor = trend === 'up' ? 'text-success' : trend === 'down' ? 'text-error' : 'text-muted-foreground';
  
  return (
    <Card className="stat-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-primary text-white">
              {icon}
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{title}</p>
              <p className="text-2xl font-bold">{value}</p>
            </div>
          </div>
          <div className={`text-sm ${trendColor} flex items-center gap-1`}>
            <TrendingUp className="h-3 w-3" />
            {change}
          </div>
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-2">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

const RecentActivity = () => {
  const activities = [
    { action: 'Học sinh Nguyễn Văn A hoàn thành bài kiểm tra Toán 8', time: '5 phút trước', type: 'completed' },
    { action: 'Tạo đề thi mới: "Kiểm tra Vật lý - Chương 3"', time: '2 giờ trước', type: 'created' },
    { action: 'Lớp 8B1 có 3 học sinh chưa làm bài', time: '4 giờ trước', type: 'warning' },
    { action: 'AI phát hiện lỗi phổ biến trong bài Hóa học', time: '1 ngày trước', type: 'ai' },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'completed': return <CheckCircle2 className="h-4 w-4 text-success" />;
      case 'created': return <PlusCircle className="h-4 w-4 text-primary" />;
      case 'warning': return <AlertCircle className="h-4 w-4 text-warning" />;
      case 'ai': return <Brain className="h-4 w-4 text-secondary" />;
      default: return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Hoạt động gần đây
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
            {getActivityIcon(activity.type)}
            <div className="flex-1 min-w-0">
              <p className="text-sm">{activity.action}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
        <Button variant="ghost" className="w-full mt-4">
          Xem tất cả hoạt động
        </Button>
      </CardContent>
    </Card>
  );
};

const UpcomingExams = () => {
  const exams = [
    { title: 'Kiểm tra Toán 8 - Chương 4', class: '8A1', date: '2024-01-15', students: 32, completed: 0 },
    { title: 'Bài tập Vật lý - Áp suất', class: '8B2', date: '2024-01-16', students: 28, completed: 5 },
    { title: 'Đánh giá Hóa học - Oxi', class: '8A2', date: '2024-01-18', students: 30, completed: 0 },
  ];

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Bài thi sắp tới
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {exams.map((exam, index) => (
          <div key={index} className="p-4 rounded-xl border border-border/50 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium">{exam.title}</h4>
                <p className="text-sm text-muted-foreground">Lớp {exam.class}</p>
              </div>
              <Badge variant="outline">
                {new Date(exam.date).toLocaleDateString('vi-VN')}
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Tiến độ làm bài</span>
                <span>{exam.completed}/{exam.students} học sinh</span>
              </div>
              <Progress value={(exam.completed / exam.students) * 100} className="h-2" />
            </div>
          </div>
        ))}
        <Button variant="gradient" className="w-full">
          <PlusCircle className="h-4 w-4 mr-2" />
          Tạo bài thi mới
        </Button>
      </CardContent>
    </Card>
  );
};

const ClassPerformance = () => {
  const classes = [
    { name: '8A1', students: 32, avgScore: 85, improvement: 12 },
    { name: '8A2', students: 30, avgScore: 78, improvement: -5 },
    { name: '8B1', students: 28, avgScore: 92, improvement: 8 },
    { name: '8B2', students: 31, avgScore: 74, improvement: 15 },
  ];

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Thành tích các lớp
        </CardTitle>
        <CardDescription>
          Điểm trung bình và xu hướng cải thiện
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {classes.map((cls, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary text-white font-medium flex items-center justify-center">
                {cls.name}
              </div>
              <div>
                <p className="font-medium">{cls.students} học sinh</p>
                <p className="text-sm text-muted-foreground">Điểm TB: {cls.avgScore}</p>
              </div>
            </div>
            <Badge variant={cls.improvement > 0 ? 'default' : 'secondary'}>
              {cls.improvement > 0 ? '+' : ''}{cls.improvement}%
            </Badge>
          </div>
        ))}
        <Button variant="outline" className="w-full">
          Xem báo cáo chi tiết
        </Button>
      </CardContent>
    </Card>
  );
};

export default function TeacherDashboard() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Dashboard Giáo viên</h1>
        <p className="text-muted-foreground">
          Chào mừng trở lại! Theo dõi tiến độ học tập của học sinh và quản lý các bài kiểm tra.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Tổng đề thi"
          value="24"
          change="+3 tuần này"
          trend="up"
          icon={<FileText className="h-5 w-5" />}
          description="Đã tạo trong tháng"
        />
        <StatCard
          title="Học sinh hoạt động"
          value="142"
          change="+8 hôm nay"
          trend="up"
          icon={<Users className="h-5 w-5" />}
          description="Đăng nhập trong 24h"
        />
        <StatCard
          title="Bài cần chấm"
          value="18"
          change="-5 từ hôm qua"
          trend="down"
          icon={<BookOpen className="h-5 w-5" />}
          description="Đang chờ đánh giá"
        />
        <StatCard
          title="AI Insights"
          value="12"
          change="+4 mới"
          trend="up"
          icon={<Brain className="h-5 w-5" />}
          description="Gợi ý cải thiện"
        />
      </div>

      {/* Quick Actions */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Thao tác nhanh</CardTitle>
          <CardDescription>Các tác vụ thường dùng để quản lý lớp học</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="gradient" className="h-20 flex-col gap-2">
              <PlusCircle className="h-6 w-6" />
              <span>Tạo đề mới</span>
            </Button>
            <Button variant="success" className="h-20 flex-col gap-2">
              <Users className="h-6 w-6" />
              <span>Mời học sinh</span>
            </Button>
            <Button variant="floating" className="h-20 flex-col gap-2">
              <BarChart3 className="h-6 w-6" />
              <span>Xem báo cáo</span>
            </Button>
            <Button variant="mindmap" className="h-20 flex-col gap-2">
              <Brain className="h-6 w-6" />
              <span>Phân tích AI</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <RecentActivity />
        <UpcomingExams />
        <ClassPerformance />
      </div>
    </div>
  );
}