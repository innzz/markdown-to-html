import { MarkdownInputPropTypes } from "../types/compTypes";

const MarkdownInput = ({
  markdown,
  handleMarkdownChange,
}: MarkdownInputPropTypes) => {
  return (
    <div className="editor">
      <h1 className="title">Markdown Editor</h1>
      <textarea
        className="markdown-input"
        value={markdown}
        onChange={handleMarkdownChange}
        placeholder="Enter Markdown here..."
      />
    </div>
  );
};

export default MarkdownInput;
