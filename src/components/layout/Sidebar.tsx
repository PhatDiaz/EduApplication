import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Brain, 
  Users, 
  BarChart3, 
  BookOpen, 
  PlusCircle,
  Trophy,
  Clock,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Sidebar as SidebarPrimitive, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useSidebar } from '@/components/ui/sidebar';

interface SidebarProps {
  userRole: 'teacher' | 'student';
}

const teacherMenuItems = [
  { title: 'Tổng quan', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Quản lý đề thi', url: '/tests', icon: FileText },
  { title: 'Phân tích AI', url: '/analytics', icon: Brain },
  { title: 'Lớp học', url: '/classes', icon: Users },
  { title: 'Báo cáo', url: '/reports', icon: BarChart3 },
];

const studentMenuItems = [
  { title: 'Trang chủ', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Bài thi', url: '/exams', icon: FileText },
  { title: 'Mindmap học tập', url: '/mindmap', icon: Brain },
  { title: 'Lớp học', url: '/classes', icon: BookOpen },
  { title: 'Thành tích', url: '/achievements', icon: Trophy },
];

const quickActions = {
  teacher: [
    { title: 'Tạo đề thi mới', url: '/tests/create', icon: PlusCircle, variant: 'gradient' as const },
    { title: 'Mời học sinh', url: '/classes/invite', icon: Users, variant: 'success' as const },
  ],
  student: [
    { title: 'Luyện tập', url: '/practice', icon: Target, variant: 'gradient' as const },
    { title: 'Bài thi sắp tới', url: '/upcoming', icon: Clock, variant: 'success' as const },
  ],
};

export const AppSidebar: React.FC<SidebarProps> = ({ userRole }) => {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = userRole === 'teacher' ? teacherMenuItems : studentMenuItems;
  const actions = quickActions[userRole];
  const isCollapsed = state === 'collapsed';

  const isActive = (path: string) => currentPath === path;
  
  const getNavClassName = (active: boolean) =>
    active ? 'nav-item active' : 'nav-item';

  return (
    <SidebarPrimitive className={isCollapsed ? "w-14" : "w-64"}>
      <SidebarContent className="custom-scrollbar">
        {/* Quick Actions */}
        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? 'sr-only' : ''}>
            Thao tác nhanh
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              {actions.map((action) => (
                <Button
                  key={action.title}
                  variant={action.variant}
                  size={isCollapsed ? 'icon' : 'default'}
                  asChild
                  className="w-full justify-start"
                >
                  <NavLink to={action.url}>
                    <action.icon className="h-4 w-4" />
                    {!isCollapsed && <span className="ml-2">{action.title}</span>}
                  </NavLink>
                </Button>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? 'sr-only' : ''}>
            Menu chính
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={getNavClassName(isActive(item.url))}
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                      {/* Add notification badge for specific items */}
                      {!isCollapsed && item.title === 'Bài thi' && userRole === 'student' && (
                        <Badge variant="destructive" className="ml-auto h-5 w-5 rounded-full p-0 text-xs">
                          2
                        </Badge>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Recent Items */}
        {!isCollapsed && userRole === 'teacher' && (
          <SidebarGroup>
            <SidebarGroupLabel>Gần đây</SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2 p-2 text-muted-foreground hover:text-foreground">
                  <FileText className="h-3 w-3" />
                  <span>Kiểm tra Toán 8 - Chương 2</span>
                </div>
                <div className="flex items-center gap-2 p-2 text-muted-foreground hover:text-foreground">
                  <Users className="h-3 w-3" />
                  <span>Lớp 8A1</span>
                </div>
                <div className="flex items-center gap-2 p-2 text-muted-foreground hover:text-foreground">
                  <Brain className="h-3 w-3" />
                  <span>Phân tích lỗi Vật lý</span>
                </div>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </SidebarPrimitive>
  );
};