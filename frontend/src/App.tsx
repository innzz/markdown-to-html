import React, { useState } from "react";
import MarkdownInput from "./components/MarkdownInput";
import HtmlPreview from "./components/HtmlPreview";

const App = () => {
  const [markdown, setMarkdown] = useState("");

  const onMarkdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="container">
      <div className="editor-preview">
        {/* Markdown Editor */}
        <MarkdownInput
          markdown={markdown}
          handleMarkdownChange={onMarkdownChange}
        />

        {/* Html Preview */}
        <HtmlPreview markdown={markdown} />
      </div>
    </div>
  );
};

export default App;
