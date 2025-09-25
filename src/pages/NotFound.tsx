import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold gradient-primary bg-clip-text text-transparent">404</h1>
          <h2 className="text-2xl font-semibold">Trang không tìm thấy</h2>
          <p className="text-muted-foreground max-w-md">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gradient" asChild>
            <Link to="/">
              Về trang chủ
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;