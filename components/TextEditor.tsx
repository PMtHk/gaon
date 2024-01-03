"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

import ReactQuill, { ReactQuillProps } from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["link", "image"],
  ],
  clipboard: {
    matchVisual: false, // toggle to add extra line breaks when pasting HTML:
  },
};

interface ForwardedQuillComponent extends ReactQuillProps {
  forwardedRef: React.Ref<ReactQuill>;
}

const QuillNoSSRWrapper = dynamic(
  async () => {
    const { default: QuillComponent } = await import("react-quill");
    const Quill = ({ forwardedRef, ...props }: ForwardedQuillComponent) => (
      <QuillComponent ref={forwardedRef} {...props} modules={modules} />
    );
    return Quill;
  },
  { loading: () => <div>...loading</div>, ssr: false }
);

interface TextEditorProps extends ReactQuillProps {}

const TextEditor = ({ ...props }: TextEditorProps) => {
  const quillInstance = useRef<ReactQuill>(null);

  return (
    <QuillNoSSRWrapper forwardedRef={quillInstance} theme="snow" {...props} />
  );
};

export default TextEditor;
