import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2 } from 'lucide-react';

interface ProcessingStatusProps {
  files: File[];
}

const ProcessingStatus = ({ files }: ProcessingStatusProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Processing files...</h2>
        <div className="flex items-center text-yellow-400">
          <Clock className="w-5 h-5 mr-2" />
          <span className="text-sm">~5 min remaining</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {files.map((file, index) => (
          <div key={index} className="bg-zinc-800/50 rounded-xl p-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <p className="text-sm font-medium truncate mb-2">{file.name}</p>
                <div className="h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-yellow-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 300 }} // 5 minutes
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-yellow-400">Processing...</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-4 text-center">
        <p className="text-sm text-yellow-400 mb-2">
          Your files are being processed using our AI technology
        </p>
        <p className="text-xs text-zinc-400">
          You can close this window. We'll save your processed files for 24 hours.
        </p>
      </div>
    </div>
  );
};

export default ProcessingStatus;