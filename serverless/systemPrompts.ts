import { SystemPrompt } from "./types";

export const EXTRACT_KEY_INFO_PROMPT: SystemPrompt = {
  template:
    "Your task is to extract key structural and relational information from the provided input text: {inputText}. For the purpose of generating Mermaid.js diagrams. Focus on identifying entities, relationships, and hierarchical structures clearly from the input text. Do not include any information that is not provided in the input text. Guidelines: Identify key entities (e.g., components, processes, systems, data points). Capture relationships between entities, such as dependencies, interactions, or data flows. Distinguish hierarchies (parent-child relationships, nested components). Include labels and descriptions only if they clarify the diagram's purpose. Ignore irrelevant or purely descriptive information not useful for visual representation. Do not include '\\n' or line breaks in the extracted information.",
  inputVariables: ["inputText"],
};

export const GENERATE_MERMAID_PROMPT: SystemPrompt = {
  template:
    "Generate a mermaid diagram from the provided extracted information: {extractedInfo}. Do not include '\\n' or line breaks in the output. Do not include anything other than the Mermaid code. Do not include anything before 'graph' which is the beginning of the Mermaid code. Ensure each node is clearly labeled to represent a part of the research process. Use directional arrows to show the flow from data collection to final results. Consider using different colors or styles to distinguish between different types of processes (e.g., model components, evaluation). Adjust labels and details to best fit your understanding and objectives.",
  inputVariables: ["extractedInfo"],
};
