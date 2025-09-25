import React from 'react';
import { 
  Brain, 
  Trophy, 
  Clock, 
  Target,
  BookOpen,
  TrendingUp,
  Calendar,
  Star,
  Flame,
  CheckCircle2,
  AlertCircle,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ReactNode;
  gradient?: string;
  progress?: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle, icon, gradient = "gradient-primary", progress }) => {
  return (
    <Card className="stat-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl ${gradient} text-white`}>
            {icon}
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
        {subtitle && (
          <p className="text-sm text-muted-foreground mb-2">{subtitle}</p>
        )}
        {progress !== undefined && (
          <Progress value={progress} className="learning-progress" />
        )}
      </CardContent>
    </Card>
  );
};

const UpcomingExams = () => {
  const exams = [
    { 
      title: 'Kiểm tra Toán 8 - Chương 4', 
      subject: 'Toán học',
      dueDate: '2024-01-15', 
      duration: 60,
      questions: 25,
      status: 'pending'
    },
    { 
      title: 'Bài tập Vật lý - Áp suất', 
      subject: 'Vật lý',
      dueDate: '2024-01-16', 
      duration: 45,
      questions: 20,
      status: 'pending'
    },
  ];

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Bài thi sắp tới
        </CardTitle>
        <CardDescription>
          Các bài thi cần hoàn thành trong tuần này
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {exams.map((exam, index) => (
          <div key={index} className="p-4 rounded-xl border border-border/50 space-y-3 hover:shadow-card transition-all">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium">{exam.title}</h4>
                <p className="text-sm text-muted-foreground">{exam.subject}</p>
              </div>
              <Badge variant="outline">
                {new Date(exam.dueDate).toLocaleDateString('vi-VN')}
              </Badge>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {exam.duration} phút
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  {exam.questions} câu
                </span>
              </div>
            </div>
            <Button variant="gradient" className="w-full">
              <Play className="h-4 w-4 mr-2" />
              Bắt đầu làm bài
            </Button>
          </div>
        ))}
        <Button variant="outline" className="w-full">
          Xem tất cả bài thi
        </Button>
      </CardContent>
    </Card>
  );
};

const LearningProgress = () => {
  const subjects = [
    { name: 'Toán học', progress: 85, score: 8.5, improvement: '+12%' },
    { name: 'Vật lý', progress: 72, score: 7.8, improvement: '+8%' },
    { name: 'Hóa học', progress: 68, score: 7.2, improvement: '+15%' },
    { name: 'Sinh học', progress: 91, score: 9.1, improvement: '+5%' },
  ];

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          Tiến độ học tập
        </CardTitle>
        <CardDescription>
          Theo dõi progress và điểm số các môn học
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {subjects.map((subject, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">{subject.name}</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Điểm TB: {subject.score}</span>
                  <Badge variant={subject.improvement.startsWith('+') ? 'default' : 'secondary'} className="text-xs">
                    {subject.improvement}
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium">{subject.progress}%</span>
              </div>
            </div>
            <Progress value={subject.progress} className="learning-progress" />
          </div>
        ))}
        <Button variant="mindmap" className="w-full">
          <Brain className="h-4 w-4 mr-2" />
          Xem mindmap học tập
        </Button>
      </CardContent>
    </Card>
  );
};

const RecentResults = () => {
  const results = [
    { test: 'Kiểm tra Toán - Phương trình', score: 8.5, date: '2024-01-10', status: 'excellent' },
    { test: 'Bài tập Vật lý - Quang học', score: 7.2, date: '2024-01-08', status: 'good' },
    { test: 'Đánh giá Hóa - Axit Bazơ', score: 6.8, date: '2024-01-05', status: 'average' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent': return <CheckCircle2 className="h-4 w-4 text-success" />;
      case 'good': return <Star className="h-4 w-4 text-primary" />;
      default: return <AlertCircle className="h-4 w-4 text-warning" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-success';
    if (score >= 6.5) return 'text-primary';
    return 'text-warning';
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5" />
          Kết quả gần đây
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {results.map((result, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              {getStatusIcon(result.status)}
              <div>
                <p className="font-medium text-sm">{result.test}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(result.date).toLocaleDateString('vi-VN')}
                </p>
              </div>
            </div>
            <div className={`text-lg font-bold ${getScoreColor(result.score)}`}>
              {result.score}
            </div>
          </div>
        ))}
        <Button variant="outline" className="w-full">
          Xem tất cả kết quả
        </Button>
      </CardContent>
    </Card>
  );
};

const Achievements = () => {
  const achievements = [
    { title: 'Streak 7 ngày', description: 'Học tập liên tục 7 ngày', icon: <Flame className="h-5 w-5" />, earned: true },
    { title: 'Điểm cao Toán', description: 'Đạt điểm 9+ môn Toán', icon: <Star className="h-5 w-5" />, earned: true },
    { title: 'Hoàn thành tháng', description: 'Hoàn thành tất cả bài tập trong tháng', icon: <Target className="h-5 w-5" />, earned: false },
  ];

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5" />
          Thành tích
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
              achievement.earned ? 'bg-gradient-success text-white' : 'bg-muted/50'
            }`}
          >
            <div className={`p-2 rounded-lg ${achievement.earned ? 'bg-white/20' : 'bg-primary/10'}`}>
              {achievement.icon}
            </div>
            <div className="flex-1">
              <p className={`font-medium text-sm ${achievement.earned ? 'text-white' : ''}`}>
                {achievement.title}
              </p>
              <p className={`text-xs ${achievement.earned ? 'text-white/80' : 'text-muted-foreground'}`}>
                {achievement.description}
              </p>
            </div>
            {achievement.earned && (
              <CheckCircle2 className="h-4 w-4 text-white" />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default function StudentDashboard() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">Xin chào, Học sinh! 👋</h1>
          <Badge className="gradient-primary text-white border-0">
            <Flame className="h-3 w-3 mr-1" />
            Streak 7 ngày
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Hãy tiếp tục hành trình học tập của bạn. Bạn đang làm rất tốt!
        </p>
      </div>

      {/* Personal Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Điểm trung bình"
          value="8.2"
          subtitle="Tăng 0.3 điểm"
          icon={<TrendingUp className="h-5 w-5" />}
          gradient="gradient-primary"
        />
        <StatCard
          title="Bài hoàn thành"
          value="24/28"
          subtitle="Tuần này"
          icon={<CheckCircle2 className="h-5 w-5" />}
          gradient="gradient-success"
          progress={85}
        />
        <StatCard
          title="Xếp hạng lớp"
          value="#3"
          subtitle="Trong 32 học sinh"
          icon={<Trophy className="h-5 w-5" />}
          gradient="bg-gradient-to-br from-yellow-400 to-orange-500"
        />
        <StatCard
          title="Mục tiêu tháng"
          value="82%"
          subtitle="Hoàn thành 90%"
          icon={<Target className="h-5 w-5" />}
          gradient="bg-gradient-to-br from-purple-500 to-pink-500"
          progress={82}
        />
      </div>

      {/* Quick Actions */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Bắt đầu học ngay</CardTitle>
          <CardDescription>Các hoạt động học tập được đề xuất cho bạn</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="gradient" className="h-20 flex-col gap-2">
              <Play className="h-6 w-6" />
              <span>Làm bài thi</span>
            </Button>
            <Button variant="success" className="h-20 flex-col gap-2">
              <Target className="h-6 w-6" />
              <span>Luyện tập</span>
            </Button>
            <Button variant="mindmap" className="h-20 flex-col gap-2">
              <Brain className="h-6 w-6" />
              <span>Xem mindmap</span>
            </Button>
            <Button variant="floating" className="h-20 flex-col gap-2">
              <BookOpen className="h-6 w-6" />
              <span>Ôn bài</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <UpcomingExams />
        <LearningProgress />
        <div className="space-y-6">
          <RecentResults />
          <Achievements />
        </div>
      </div>
    </div>
  );
}