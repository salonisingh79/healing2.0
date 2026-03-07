import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const navigate = useNavigate();

  const handleSignIn = () => {
    onClose();
    navigate('/signin');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-muted/50 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-foreground/60" />
              </button>

              {/* Content */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Sign in to save favorites
                </h2>
                
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Create an account or sign in to save your favorite wellness centres and access them anytime from your dashboard.
                </p>

                <div className="space-y-3">
                  <button
                    onClick={handleSignIn}
                    className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                  >
                    Sign In
                  </button>
                  
                  <button
                    onClick={onClose}
                    className="w-full px-6 py-3 bg-transparent hover:bg-muted/50 text-foreground/70 rounded-xl font-semibold transition-all border border-muted/50"
                  >
                    Maybe Later
                  </button>
                </div>

                <p className="text-sm text-foreground/50 mt-6">
                  New to The Healing Groove? Signing in will create your free account.
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
