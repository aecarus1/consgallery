import { useState } from 'react';

const images = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  url: `https://picsum.photos/seed/${i + 10}/800/600`,
  alt: `Image ${i + 1}`
}));

export const App = () => {
  const [view, setView] = useState('grid');

  const handleUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    input.onchange = (e) => {
      console.log('Files selected:', e.target.files);
    };
    input.click();
  };

  return (
    <main className="min-h-screen w-full bg-neutral-950 p-4 pb-24 md:pb-4">
      {/* Floating Dock Container */}
      <div className="fixed z-50 flex items-center gap-3 transition-all duration-300
        bottom-6 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:top-6 md:right-6 md:translate-x-0 w-max">

        {/* Upload Section */}
        <button
          onClick={handleUpload}
          className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-neutral-800 shadow-2xl text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/80 transition-all active:scale-95 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
          <span className="text-sm font-medium hidden sm:inline font-mono">UPLOAD</span>
        </button>

        {/* View Section */}
        <div className="flex items-center gap-1 p-1.5 rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-neutral-800 shadow-2xl">
          <button
            onClick={() => setView('grid')}
            className={`p-2 rounded-xl transition-all ${view === 'grid' ? 'bg-neutral-800 text-neutral-100 shadow-sm' : 'text-neutral-500 hover:text-neutral-300'} cursor-pointer`}
            title="Grid View"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
          </button>
          <button
            onClick={() => setView('list')}
            className={`p-2 rounded-xl transition-all ${view === 'list' ? 'bg-neutral-800 text-neutral-100 shadow-sm' : 'text-neutral-500 hover:text-neutral-300'} cursor-pointer`}
            title="List View"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" x2="21" y1="6" y2="6" /><line x1="8" x2="21" y1="12" y2="12" /><line x1="8" x2="21" y1="18" y2="18" /><line x1="3" x2="3.01" y1="6" y2="6" /><line x1="3" x2="3.01" y1="12" y2="12" /><line x1="3" x2="3.01" y1="18" y2="18" /></svg>
          </button>
        </div>
      </div>

      <div className={`transition-all duration-500 ${view === 'grid'
        ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
        : 'flex flex-col items-center gap-8 max-w-2xl mx-auto'
        }`}>
        {images.map((image) => (
          <div
            key={image.id}
            className={`overflow-hidden rounded-lg bg-neutral-900 group transition-all duration-300 ${view === 'grid' ? 'aspect-square' : 'w-full aspect-video'
              } cursor-pointer`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </main>
  );
};