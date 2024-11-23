import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { Upload, Wand2, Music2, Download } from 'lucide-react';
import { auth } from './lib/firebase';
import { useAuthStore } from './store/authStore';
import Header from './components/Header';
import InstrumentSelect from './components/InstrumentSelect';
import ProcessingStatus from './components/ProcessingStatus';
import PricingSection from './components/PricingSection';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  const { user, setUser } = useAuthStore();
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedInstrument, setSelectedInstrument] = useState('all');
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [setUser]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'audio/*': ['.mp3', '.wav', '.m4a'],
      'video/*': ['.mp4', '.mov']
    },
    maxFiles: 20,
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
      setShowPayment(true);
    }
  });

  const handleStartProcessing = () => {
    setShowPayment(false);
    setIsProcessing(true);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {user && !isProcessing ? (
          <Dashboard />
        ) : (
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Extract vocal,{' '}
                <span className="block">accompaniment and</span>
                <span className="block">various instruments</span>
                <span className="block">from any audio and</span>
                <span className="block">video</span>
              </h1>
              <p className="text-lg text-zinc-400 mb-8">
                High-quality stem splitting based on the world's #1 AI-powered technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-zinc-900 rounded-2xl p-8"
            >
              {!isProcessing && !showPayment ? (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">
                    Select stems & choose files
                  </h2>
                  <p className="text-zinc-400 mb-6">
                    Upload up to 20 files to split into stems
                  </p>
                  
                  <InstrumentSelect
                    value={selectedInstrument}
                    onChange={setSelectedInstrument}
                  />

                  <div
                    {...getRootProps()}
                    className={`mt-6 border-2 border-dashed rounded-xl p-12 text-center transition-colors
                      ${isDragActive 
                        ? 'border-yellow-400 bg-yellow-400/10' 
                        : 'border-zinc-700 hover:border-yellow-400/50 hover:bg-zinc-800/50'
                      }`}
                  >
                    <input {...getInputProps()} />
                    <Upload className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                    <p className="text-lg mb-2">Select Files</p>
                    <p className="text-sm text-zinc-400">
                      Support for MP3, WAV, M4A, MP4, and MOV files
                    </p>
                  </div>
                </div>
              ) : showPayment ? (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Complete Payment</h2>
                  <div className="bg-zinc-800/50 rounded-xl p-4 mb-6">
                    <p className="text-sm text-zinc-300 mb-2">Selected files: {files.length}</p>
                    <p className="text-sm text-zinc-300">Required tokens: {files.length * 5}</p>
                  </div>
                  <button
                    onClick={handleStartProcessing}
                    className="w-full py-3 px-6 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors"
                  >
                    Pay & Start Processing
                  </button>
                </div>
              ) : (
                <ProcessingStatus files={files} />
              )}
            </motion.div>
          </div>
        )}
      </main>

      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;