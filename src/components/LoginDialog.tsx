import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const LoginDialog = () => {
  const { signInWithGoogle } = useAuthStore();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-sm bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-lg font-semibold transition-colors">
          Login
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 p-6 rounded-2xl shadow-xl w-[90vw] max-w-md">
          <Dialog.Title className="text-xl font-bold mb-4">
            Welcome back
          </Dialog.Title>
          <Dialog.Description className="text-zinc-400 mb-6">
            Sign in to access your dashboard and manage your audio splits.
          </Dialog.Description>
          
          <button
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center space-x-2 bg-white text-black rounded-lg p-3 hover:bg-gray-100 transition-colors"
          >
            <img 
              src="https://www.google.com/favicon.ico" 
              alt="Google" 
              className="w-5 h-5"
            />
            <span>Continue with Google</span>
          </button>

          <Dialog.Close asChild>
            <button className="absolute top-4 right-4 text-zinc-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default LoginDialog;