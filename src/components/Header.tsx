import React from 'react';
import { Menu, X } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import LoginDialog from './LoginDialog';

const Header = () => {
  const { user, tokens, logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-zinc-900/50 backdrop-blur-sm sticky top-0 z-50 border-b border-zinc-800/50">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">AUDIOSPLIT</span>
          </div>

          <nav className={`${
            isMenuOpen 
              ? 'absolute top-16 left-0 right-0 bg-zinc-900 border-b border-zinc-800'
              : 'hidden'
            } md:relative md:flex md:bg-transparent md:border-none`}>
            <div className={`${
              isMenuOpen ? 'flex flex-col p-4' : 'hidden'
            } md:flex md:flex-row md:items-center md:space-x-8`}>
              <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors py-2 md:py-0">
                Products
              </a>
              <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors py-2 md:py-0">
                Pricing
              </a>
              <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors py-2 md:py-0">
                Help
              </a>
              <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors py-2 md:py-0">
                Blog
              </a>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-yellow-400">{tokens} tokens</span>
                <button
                  onClick={logout}
                  className="text-sm bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <LoginDialog />
            )}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;