import React from 'react';
import { Download, Calendar, Clock } from 'lucide-react';

interface Split {
  id: string;
  fileName: string;
  date: string;
  status: 'completed' | 'processing';
  stems: {
    type: string;
    url: string;
  }[];
}

const Dashboard = () => {
  const [splits] = React.useState<Split[]>([
    {
      id: '1',
      fileName: 'song.mp3',
      date: '2024-02-28',
      status: 'completed',
      stems: [
        { type: 'vocals', url: '#' },
        { type: 'instrumental', url: '#' },
        { type: 'drums', url: '#' },
        { type: 'bass', url: '#' }
      ]
    },
    {
      id: '1',
      fileName: 'song.mp3',
      date: '2024-02-28',
      status: 'completed',
      stems: [
        { type: 'vocals', url: '#' },
        { type: 'instrumental', url: '#' },
        { type: 'drums', url: '#' },
        { type: 'bass', url: '#' }
      ]
    },
    {
      id: '1',
      fileName: 'song.mp3',
      date: '2024-02-28',
      status: 'completed',
      stems: [
        { type: 'vocals', url: '#' },
        { type: 'instrumental', url: '#' },
        { type: 'drums', url: '#' },
        { type: 'bass', url: '#' }
      ]
    }
    // Add more mock data as needed
  ]);

  return (
    <div className="bg-zinc-900 rounded-2xl p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">Your Splits</h2>
      <div className="space-y-4">
        {splits.map((split) => (
          <div 
            key={split.id}
            className="bg-zinc-800/50 rounded-xl p-4 hover:bg-zinc-800 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-medium mb-1">{split.fileName}</h3>
                <div className="flex items-center space-x-4 text-sm text-zinc-400">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {split.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {split.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {split.stems.map((stem, index) => (
                <a
                  key={index}
                  href={stem.url}
                  className="flex items-center justify-center space-x-2 bg-zinc-700/50 hover:bg-zinc-700 text-sm rounded-lg py-2 px-4 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>{stem.type}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;