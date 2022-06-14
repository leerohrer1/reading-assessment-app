interface itemsWithinText {
  'Solving Words': string[];
  'Searching for and Using Information': string[];
  'Monitoring and Correcting': string[];
  Summarizing: string[];
  'Maintaining Fluency': string[];
}

interface itemsBeyondText {
  Predicting: string[];
  'Making Connections': string[];
  Synthesizing: string[];
  Inferring: string[];
  'Analyzing/Critiquing': string[];
}

interface Checklist {
  id: string;
  'Thinking Within the Text': itemsWithinText;
  'Thinking Beyond the Text': itemsBeyondText;
}

export { Checklist };
