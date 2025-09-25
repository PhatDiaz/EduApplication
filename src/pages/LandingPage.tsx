import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, FileText, Users, BarChart3, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LandingPage = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI Mindmap Learning',
      description: 'Phân tích lỗi sai và tạo mindmap học tập cá nhân hóa với trí tuệ nhân tạo',
      gradient: 'gradient-primary'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Kiểm tra thông minh',
      description: 'Tạo và quản lý đề thi trực tuyến với hệ thống chấm điểm tự động',
      gradient: 'gradient-success'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Quản lý lớp học',
      description: 'Theo dõi tiến độ học tập của từng học sinh và toàn bộ lớp học',
      gradient: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Báo cáo chi tiết',
      description: 'Phân tích dữ liệu học tập và đưa ra gợi ý cải thiện hiệu quả',
      gradient: 'bg-gradient-to-br from-orange-400 to-red-500'
    }
  ];

  const testimonials = [
    {
      name: 'Cô Nguyễn Thị Mai',
      role: 'Giáo viên Toán - THCS Chu Văn An',
      content: 'EduMap đã giúp tôi tiết kiệm 70% thời gian chấm bài và phát hiện những lỗi sai phổ biến của học sinh.',
      rating: 5
    },
    {
      name: 'Phạm Văn Nam',
      role: 'Học sinh lớp 9A - THCS Lê Quý Đôn',
      content: 'Mindmap học tập của EduMap giúp mình hiểu rõ điểm yếu và cải thiện điểm số đáng kể.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        
        <div className="relative container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <Badge className="gradient-primary text-white border-0 text-sm px-4 py-2">
                  🚀 Nền tảng giáo dục AI hàng đầu
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    EduMap
                  </span>
                  <br />
                  Học thông minh với AI
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Kết hợp kiểm tra trực tuyến và mindmap học tập được hỗ trợ bởi AI. 
                  Giải pháp giáo dục toàn diện cho giáo viên và học sinh.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="gradient" size="xl" asChild>
                  <Link to="/auth">
                    Bắt đầu ngay
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="glass" size="xl">
                  Xem demo
                </Button>
              </div>
              
              <div className="flex items-center gap-8 justify-center lg:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold">10,000+</div>
                  <div className="text-sm text-muted-foreground">Học sinh</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">Giáo viên</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-muted-foreground">Trường học</div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
                <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Tính năng nổi bật
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              EduMap tích hợp những công nghệ tiên tiến nhất để mang đến trải nghiệm học tập tối ưu
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="elevated-card text-center">
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${feature.gradient} text-white flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Tại sao chọn EduMap?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  'Tiết kiệm 70% thời gian chấm bài với AI tự động',
                  'Phát hiện điểm yếu học tập qua phân tích mindmap',
                  'Theo dõi tiến độ học tập thời gian thực',
                  'Gợi ý cải thiện cá nhân hóa cho từng học sinh',
                  'Báo cáo chi tiết và dễ hiểu cho phụ huynh',
                  'Hỗ trợ đa nền tảng: Web, Mobile, Tablet'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="relative">
                <Card className="elevated-card p-8">
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-success">98%</div>
                    <p className="text-muted-foreground">
                      Giáo viên hài lòng với EduMap
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Người dùng nói gì về EduMap
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="elevated-card">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-lg italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Sẵn sàng bắt đầu hành trình học tập thông minh?
            </h2>
            <p className="text-xl opacity-90">
              Tham gia cùng hàng nghìn giáo viên và học sinh đã tin tương EduMap
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl" asChild>
                <Link to="/auth">
                  Đăng ký miễn phí
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button variant="ghost" size="xl" className="text-white border-white hover:bg-white/10">
                Liên hệ tư vấn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                EduMap
              </span>
            </div>
            
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Về chúng tôi</a>
              <a href="#" className="hover:text-primary transition-colors">Liên hệ</a>
              <a href="#" className="hover:text-primary transition-colors">Điều khoản</a>
              <a href="#" className="hover:text-primary transition-colors">Bảo mật</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;