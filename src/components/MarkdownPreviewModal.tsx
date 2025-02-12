import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import MDEditor from '@uiw/react-md-editor';
import MarkdownPreview from '@uiw/react-markdown-preview';

const MarkdownPreviewModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [markdown, setMarkdown] = useState(`# Hello World

This is a markdown preview.

## Features
- Full screen layout
- Scrollable preview
- Easy editing
- Real-time preview

## Try it out!
1. Click the Edit button
2. Make some changes
3. See the preview update

## Example Content
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

### Code Example
\`\`\`javascript
function hello() {
  console.log("Hello World!");
}
\`\`\`

### Table Example
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
`);

  return (
    <div className="markdown-container">
      <div className="window-container">
        <div className="editor-window">
          <div className="window-header">
            <div className="traffic-lights">
              <span className="light red"></span>
              <span className="light yellow"></span>
              <span className="light green"></span>
            </div>
          </div>
          <div className="preview-section" data-color-mode="light">
            <MarkdownPreview source={markdown} />
          </div>
        </div>
      </div>

      <Button
        className="floating-edit-button"
        onClick={() => setIsModalOpen(true)}
        icon={null}
      >
        @nam077
      </Button>

      <Modal
        title="Markdown Editor"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        width="80%"
        style={{ top: 20 }}
        styles={{
          body: { 
            height: 'calc(90vh - 110px)',
            padding: 0
          }
        }}
      >
        <div data-color-mode="light" style={{ height: '100%' }}>
          <MDEditor
            value={markdown}
            onChange={(value) => setMarkdown(value || '')}
            height="100%"
            preview="edit"
          />
        </div>
      </Modal>

      <style>
        {`
          .markdown-container {
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 20px;
            padding-bottom: 70px;
            position: relative;
            z-index: 1;
          }
          .window-container {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 60px;
            min-height: 0;
          }
          .editor-window {
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.98);
            border-radius: 10px;
            overflow: hidden !important;
            box-shadow: 0 25px 60px rgba(0,0,0,0.3), 0 15px 25px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
          }
          .window-header {
            background: rgba(230, 230, 230, 0.8);
            padding: 15px 20px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid rgba(0,0,0,0.08);
            flex-shrink: 0;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
          .traffic-lights {
            display: flex;
            gap: 8px;
            margin-right: 20px;
            z-index: 1;
          }
          .light {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            transition: opacity 0.2s;
          }
          .light:hover {
            opacity: 0.8;
          }
          .red { background: #ff5f56; box-shadow: 0 0 2px rgba(255,95,86,0.4); }
          .yellow { background: #ffbd2e; box-shadow: 0 0 2px rgba(255,189,46,0.4); }
          .green { background: #27c93f; box-shadow: 0 0 2px rgba(39,201,63,0.4); }
          .window-title {
            color: #666;
            font-size: 13px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            opacity: 0.8;
          }
          .preview-section {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            padding-bottom: 70px;
            min-height: 0;
            background: white;
            scrollbar-width: none;
            -ms-overflow-style: none;
            margin-bottom: 40px;
          }
          .preview-section::-webkit-scrollbar {
            display: none;
          }
          /* Markdown preview styles */
          .wmde-markdown {
            font-size: 16px;
            line-height: 1.8;
            padding: 0 12px;
            margin-bottom: 40px;
          }
          .wmde-markdown h1,
          .wmde-markdown h2,
          .wmde-markdown h3 {
            margin-top: 2em;
            margin-bottom: 1em;
          }
          .wmde-markdown p {
            margin-bottom: 1.5em;
          }
          .wmde-markdown code {
            background: #f6f8fa;
            padding: 0.2em 0.4em;
            border-radius: 3px;
          }
          .wmde-markdown pre {
            background: #f6f8fa;
            padding: 16px;
            border-radius: 6px;
          }
          /* Floating edit button */
          .floating-edit-button {
            position: fixed !important;
            bottom: 24px;
            right: 24px;
            padding: 4px 12px !important;
            height: auto !important;
            border-radius: 6px !important;
            display: flex !important;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            transition: all 0.3s !important;
            opacity: 0.7;
            border: none !important;
            background: rgba(255, 255, 255, 0.95) !important;
            color: #333 !important;
            font-family: monospace !important;
            font-size: 13px !important;
          }
          .floating-edit-button:hover {
            transform: translateY(-2px);
            opacity: 1;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
          }
          /* Make modal content full height */
          .ant-modal-content {
            height: 90vh;
            display: flex;
            flex-direction: column;
          }
          .ant-modal-body {
            flex: 1;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default MarkdownPreviewModal;
