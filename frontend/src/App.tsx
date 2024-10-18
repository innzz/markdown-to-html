import React, { useState } from "react";
import MarkdownInput from "./components/MarkdownInput";

const App = () => {
  const [markdown, setMarkdown] = useState("");

  const onMarkdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen p-4 lg:p-8 bg-gray-100">
      <MarkdownInput
        markdown={markdown}
        handleMarkdownChange={onMarkdownChange}
      />
    </div>
  );
};

export default App;
