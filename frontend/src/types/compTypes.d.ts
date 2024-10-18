import React from "react";

export type MarkdownInputPropTypes = {
  markdown: string;
  handleMarkdownChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

export type HtmlPreviewPropTypes = {
  markdown: string;
};
