import React from 'react';
import { Piano, Mic2, Guitar, Drum } from 'lucide-react';

interface InstrumentSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const InstrumentSelect = ({ value, onChange }: InstrumentSelectProps) => {
  const instruments = [
    { id: 'piano', label: 'Piano', icon: Piano },
    { id: 'vocals', label: 'Vocals', icon: Mic2 },
    { id: 'guitar', label: 'Guitar', icon: Guitar },
    { id: 'drums', label: 'Drums', icon: Drum },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {instruments.map((instrument) => {
        const Icon = instrument.icon;
        const isSelected = value === instrument.id;
        
        return (
          <button
            key={instrument.id}
            onClick={() => onChange(instrument.id)}
            className={`flex items-center space-x-3 p-4 rounded-xl border transition-all
              ${isSelected 
                ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400' 
                : 'border-zinc-700 hover:border-yellow-400/50 text-zinc-400'
              }`}
          >
            <Icon className="w-5 h-5" />
            <span>{instrument.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default InstrumentSelect;