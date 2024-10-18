import { HtmlPreviewPropTypes } from "../types/compTypes";

const HtmlPreview = ({ markdown }: HtmlPreviewPropTypes) => {
  return (
    <div className="w-full lg:w-1/2 p-4 lg:pl-8 bg-white border border-gray-200 rounded-md overflow-y-auto shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Live Preview</h1>
      <div
        className="prose lg:prose-xl max-w-none"
        dangerouslySetInnerHTML={{ __html: markdown }}
      />
    </div>
  );
};

export default HtmlPreview;
