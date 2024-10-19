import { useGetHtmlFromMarkdown } from "../hooks/useGetHtmlFromMarkdown";
import { HtmlPreviewPropTypes } from "../types/compTypes";

const HtmlPreview = ({ markdown }: HtmlPreviewPropTypes) => {
  const { html } = useGetHtmlFromMarkdown(markdown);
  return (
    <div className="preview">
      <h1 className="title">Live Preview</h1>
      <div className="html-output" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default HtmlPreview;
