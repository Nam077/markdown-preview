import { useRef } from 'react'
import MarkdownPreviewModal from './components/MarkdownPreviewModal'
import * as htmlToImage from 'html-to-image';
import './App.css'

function App() {
  const componentRef = useRef<HTMLDivElement>(null);

  const takeScreenshot = async () => {
    if (componentRef.current) {
      try {
        const dataUrl = await htmlToImage.toPng(componentRef.current, {
          quality: 1.0,
          pixelRatio: 2,
          backgroundColor: 'white'
        });
        
        const link = document.createElement('a');
        link.download = 'markdown-preview.png';
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error('Error taking screenshot:', error);
      }
    }
  };

  return (
    <div className="app">
      <div ref={componentRef} style={{ height: '100%', overflow: 'auto' }}>
        <MarkdownPreviewModal />
      </div>
      <button 
        onClick={takeScreenshot}
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          padding: '4px 12px',
          borderRadius: '6px',
          background: 'rgba(255, 255, 255, 0.95)',
          border: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          color: '#333',
          fontFamily: 'monospace',
          fontSize: '13px',
          opacity: 0.7,
          cursor: 'pointer',
          transition: 'all 0.3s',
          zIndex: 1000
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
        onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
      >
        📸 capture
      </button>
    </div>
  )
}

export default App
