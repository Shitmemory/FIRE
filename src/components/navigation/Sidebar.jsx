
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ShoppingBag, LogIn, UserPlus, LogOut, MapPin, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isAuthenticated, setIsAuthenticated] = React.useState(!!localStorage.getItem('authToken'));

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    setIsAuthenticated(false);
    setIsOpen(false);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/login');
  };

  React.useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem('authToken'));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const commonLinkClass = "sidebar-link flex items-center space-x-4 p-4 w-full text-left text-lg border-b border-[hsl(var(--muted)_/_0.2)]";
  const iconClass = "h-6 w-6";

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent 
        side="left" 
        className="w-[300px] sm:w-[400px] bg-[hsl(var(--background))] border-r border-[hsl(var(--muted))]"
      >
        <SheetHeader className="mb-8 pt-8">
          <SheetTitle className="text-4xl font-bold text-[hsl(var(--fire-primary))]">
            FIRE
          </SheetTitle>
        </SheetHeader>
        <nav className="flex-grow flex flex-col">
          <Link to="/" onClick={() => setIsOpen(false)} className={commonLinkClass}>
            <Home className={`${iconClass} text-[hsl(var(--fire-primary))]`} />
            <span>Home</span>
          </Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className={commonLinkClass}>
            <ShoppingBag className={`${iconClass} text-[hsl(var(--fire-primary))]`} />
            <span>Products</span>
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={commonLinkClass}>
            <Phone className={`${iconClass} text-[hsl(var(--fire-primary))]`} />
            <span>Contact</span>
          </Link>
          <Link to="/locations" onClick={() => setIsOpen(false)} className={commonLinkClass}>
            <MapPin className={`${iconClass} text-[hsl(var(--fire-primary))]`} />
            <span>Locations</span>
          </Link>
          {!isAuthenticated && (
            <>
              <Link to="/login" onClick={() => setIsOpen(false)} className={commonLinkClass}>
                <LogIn className={`${iconClass} text-[hsl(var(--fire-primary))]`} />
                <span>Login</span>
              </Link>
              <Link to="/signup" onClick={() => setIsOpen(false)} className={commonLinkClass}>
                <UserPlus className={`${iconClass} text-[hsl(var(--fire-primary))]`} />
                <span>Sign Up</span>
              </Link>
            </>
          )}
        </nav>
        {isAuthenticated && (
          <div className="mt-auto pt-4 border-t border-[hsl(var(--muted))]">
            <p className="text-sm text-[hsl(var(--fire-secondary))] mb-4 px-4">
              Logged in as: {localStorage.getItem('userEmail')}
            </p>
            <Button 
              variant="outline" 
              onClick={handleLogout} 
              className="w-full border-[hsl(var(--fire-primary))] text-[hsl(var(--fire-primary))]"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
