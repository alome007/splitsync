import React from 'react';
import { Github, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AUDIOSPLIT</h3>
            <p className="text-zinc-400">
              Professional AI-powered audio separation technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-400">
          <p>&copy; {new Date().getFullYear()} AUDIOSPLIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;