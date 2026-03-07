import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import React from 'react';
export function SignInPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock sign in
    navigate('/dashboard');
  };

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-primary/5 to-white py-16 min-h-[80vh] flex items-center">
        <div className="max-w-md mx-auto px-6 w-full">
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-foreground/60">
              {isSignUp ? 'Join to save centres and track bookings' : 'Sign in to manage your wellness journey'}
            </p>
          </div>

          <div className="bg-white rounded-xl border border-muted/50 shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {isSignUp && (
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="John Doe"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <input
                    type="email"
                    required
                    className="w-full pl-11 pr-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    className="w-full pl-11 pr-12 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {!isSignUp && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-muted" />
                    <span className="text-foreground/70">Remember me</span>
                  </label>
                  <button type="button" className="text-primary hover:text-primary/80 font-medium">
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-lg font-bold transition-all"
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>

              <div className="text-center text-sm text-foreground/60">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-primary hover:text-primary/80 font-semibold"
                >
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </div>
            </form>

            {isSignUp && (
              <p className="text-xs text-foreground/50 text-center mt-6">
                By creating an account, you agree to our{' '}
                <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </p>
            )}
          </div>

          <div className="text-center mt-6">
            <Link
              to="/"
              className="text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}