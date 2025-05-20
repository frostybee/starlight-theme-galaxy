import { definePlugin } from "@expressive-code/core";
import { h } from "@expressive-code/core/hast";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

function sideBorder() {
  return definePlugin({
    name: "Adds side border to Starlight code blocks",
    baseStyles: `
       .sideBar {
            position: absolute;
            top: calc(var(--button-spacing) - 6px);
            bottom: 0;
            left: 0;
            width: 100px;
            border-left-width: 2px;
            border-left-style: solid;
            border-color: #2479f4;
            border-top-left-radius: 0.4rem;
            border-bottom-left-radius: 0.4rem;
        }
        `,
    hooks: {
      postprocessRenderedBlock: async (context) => {
        if (
          context.renderData.blockAst.children[1].properties
            .dataLanguage !== "css"
        ) {
          return;
        }
        const side = h("div.sideBar");

        const ast = context.renderData.blockAst;
        ast.children.push(side);

        context.renderData.blockAst = ast;
      },
    },
  });
}

function remapLanguageIdentifiers(lang) {
  switch (lang) {
    case "cpp": {
      return "C++";
    }
    case "sh": {
      return "bash";
    }
    default: {
      return lang;
    }
  }
}

function languageLabel() {
  return definePlugin({
    name: "Adds language label to code blocks",
    baseStyles: `
        .language-label {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            inset-block-start: calc(var(--ec-brdWd) + var(--button-spacing));
            inset-inline-end: calc(var(--ec-brdWd) + var(--ec-uiPadInl) );
            direction: ltr;
            font-size: 0.8rem;
            color: var(--fb-ec-language-color);
            font-weight: 400;
            opacity: 1;
            transition: opacity 0.3s;
        }
        div.expressive-code:hover .language-label,
        .expressive-code:hover .language-label {
            opacity: 0;
        }
        `,
    hooks: {
      postprocessRenderedBlock: async (context) => {
        const language =
          context.renderData.blockAst.children[1].properties
            .dataLanguage;

        const label = h("div.language-label", {}, [
          remapLanguageIdentifiers(language),
        ]);

        const ast = context.renderData.blockAst;
        ast.children.push(label);

        context.renderData.blockAst = ast;
      },
    },
  });
}

export default {
  plugins: [
    sideBorder(),
    languageLabel(),
    pluginLineNumbers(),
  ],
  defaultProps: {
    showLineNumbers: false,
    wrap: true,
  },
  themes: ["github-dark-high-contrast", "light-plus"],
  styleOverrides: {
    borderRadius: "0.4rem",
    borderColor: "var(--fb-code-block-bg-color)",
    frames: {
      shadowColor: "var(--sl-shadow-sm)"
    },
    codeBackground: "var(--fb-code-block-bg-color)",
    fontFamily: "'Fira Code', monospace",
    fontSize: "0.9em",
    lineHeight: "1.5",
  },
  frames: {
    extractFileNameFromCode: false,
  },
};
