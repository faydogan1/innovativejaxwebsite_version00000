import { useState, useEffect } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';
import AuthModal from './AuthModal';
import ShoppingCart from './ShoppingCart';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onCartUpdate?: () => void;
}

export default function Navigation({ currentPage, onNavigate, onCartUpdate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const initAuth = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (isMounted) {
          setUser(user || null);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error checking user:', error);
        if (isMounted) {
          setUser(null);
          setLoading(false);
        }
      }
    };

    initAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (isMounted) {
          setUser(session?.user || null);
        }
      }
    );

    return () => {
      isMounted = false;
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'clients', label: 'Our Clients' },
    { id: 'shop', label: 'Shop' },
    { id: 'careers', label: 'Work With Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg backdrop-blur-md bg-opacity-95'
            : 'bg-white shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => onNavigate('home')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">IJ</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
                InnovativeJax
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    currentPage === item.id
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {!loading && (
                <>
                  <ShoppingCart userId={user?.id} onAddToCart={onCartUpdate || (() => {})} />
                  {user ? (
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium text-gray-700 hidden sm:inline">
                        {user.email?.split('@')[0]}
                      </span>
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all"
                      >
                        <LogOut size={18} />
                        <span className="text-sm font-medium hidden sm:inline">Logout</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsAuthModalOpen(true)}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
                    >
                      Login
                    </button>
                  )}
                </>
              )}

              <button
                className="md:hidden text-gray-700 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-in slide-in-from-top">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                    currentPage === item.id
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={() => {
          checkUser();
        }}
      />
    </>
  );
}
