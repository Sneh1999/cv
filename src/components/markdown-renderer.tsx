import { ExternalLinkIcon } from "lucide-react";
import React from "react";
import Markdown from "react-markdown";

export const MarkdownRenderer: React.FC<{ children: string }> = ({
  children,
}) => {
  return (
    <Markdown
      components={{
        ul: (props) => {
          return (
            <ul {...props} className="flex flex-col gap-px pb-2">
              {props.children}
            </ul>
          );
        },
        li: ({ children }) => {
          return <li className="list-outside list-disc">{children}</li>;
        },

        a: (props) => {
          return (
            <a
              {...props}
              className="inline-flex items-center gap-1 font-bold transition-all hover:text-foreground hover:underline"
            >
              {props.children}
              <ExternalLinkIcon className="h-3 w-3 print:hidden" />
            </a>
          );
        },
      }}
    >
      {children}
    </Markdown>
  );
};
