import { MarkdownInputPropTypes } from "../types/compTypes";

const MarkdownInput = ({
  markdown,
  handleMarkdownChange,
}: MarkdownInputPropTypes) => {
  return (
    <div className="w-full lg:w-1/2 p-4 lg:pr-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Markdown Editor</h1>
      <textarea
        className="w-full h-80 lg:h-full p-4 border border-gray-300 rounded-md resize-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={markdown}
        onChange={handleMarkdownChange}
        placeholder="Enter Markdown here..."
      />
    </div>
  );
};

export default MarkdownInput;
