
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please fill in all fields.",
      });
      return;
    }
    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords do not match.",
        description: "Please ensure your passwords match.",
      });
      return;
    }
    // Simulate user creation
    localStorage.setItem('user', JSON.stringify({ email, password }));
    localStorage.setItem('authToken', 'dummyAuthToken'); // Simulate auto-login
    localStorage.setItem('userEmail', email); // Store user email for display
    toast({
      title: "Account Created!",
      description: "You have successfully signed up and logged in.",
    });
    // Force a storage event to update sidebar in MainLayout/Sidebar
    window.dispatchEvent(new Event("storage"));
    navigate('/');
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
            <UserPlus className="h-8 w-8 text-[hsl(var(--fire-primary-foreground))]" />
          </motion.div>
          <CardTitle className="text-3xl font-bold">Create an Account</CardTitle>
          <CardDescription>Join FIRE Wholesale to access premium ingredients.</CardDescription>
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
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-[hsl(var(--fire-primary))] text-[hsl(var(--fire-primary-foreground))] hover:bg-[hsl(var(--fire-primary)_/_0.9)]">
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Button variant="link" asChild className="p-0 h-auto text-[hsl(var(--fire-primary))]">
              <Link to="/login">Log in</Link>
            </Button>
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default SignUpPage;
