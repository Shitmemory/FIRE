
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please fill in all fields.",
      });
      return;
    }

    // Simulate API call / local storage check
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email && user.password === password) {
        localStorage.setItem('authToken', 'dummyAuthToken'); // Simulate auth token
        localStorage.setItem('userEmail', email); // Store user email for display
        toast({
          title: "Login Successful",
          description: "Welcome back!",
        });
        // Force a storage event to update sidebar in MainLayout/Sidebar
        window.dispatchEvent(new Event("storage"));
        navigate('/');
        return;
      }
    }
    
    toast({
      variant: "destructive",
      title: "Login Failed",
      description: "Invalid email or password. If you're new, please sign up.",
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center py-12"
    >
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1}} transition={{delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            className="mx-auto bg-[hsl(var(--fire-primary))] p-3 rounded-full w-fit mb-4"
          >
            <LogIn className="h-8 w-8 text-[hsl(var(--fire-primary-foreground))]" />
          </motion.div>
          <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Enter your credentials to access your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-[hsl(var(--fire-primary))] text-[hsl(var(--fire-primary-foreground))] hover:bg-[hsl(var(--fire-primary)_/_0.9)]">
              Log In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Button variant="link" asChild className="p-0 h-auto text-[hsl(var(--fire-primary))]">
              <Link to="/signup">Sign up</Link>
            </Button>
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default LoginPage;
