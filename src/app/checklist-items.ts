const CHECKLISTS = [
  {
    id: 'Level A/B',
    'Thinking Within the Text': {
      'Solving Words': [
        'Locates known word(s) in text',
        'Analyzes words from left to right, using knowledge of sound/letter relationships',
        'Recognizes a few high frequency words',
        'Locates easy high frequency words in the text',
      ],
      'Searching for and Using Information': [
        'Matches spoken word with printed word',
        'Moves from left to right when reading',
        'Searches for and uses information in pictures',
        'Uses oral language in combination with pointing',
        'Uses the language structure to learn about the print',
        'Asks questions to clarify meaning or get information',
      ],
      'Monitoring and Correcting': [
        'Uses word-by-word matching',
        'Uses prior knowledge to self-correct and self-monitor',
        'Uses known words to self-monitor and self-correct',
        'Begins to crosscheck one kind of information against another to monitor and self-correct reading',
        'Re-reads to self-correct errors or confirm meaning',
      ],
      Summarizing: [
        'Remembers what the story is about during reading',
        'Remembers important information from the text',
        'Remembers information to help understand the end of the story',
      ],
      'Maintaining Fluency': [
        'Notices and uses end punctuation and reflects it in voice',
        'Points to words and reads at a steady rate without long pauses',
      ],
    },
    'Thinking Beyond the Text': {
      Predicting: [
        'Uses knowledge of language structure to anticipate text',
        'Makes predictions based on information in pictures',
        'Predicts the ending of a story based on reading the beginning and the middle of the story',
        'Makes predictions based on prior knowledge and experiences',
      ],
      'Making Connections': [
        'Talks about own experiences in relation to the text',
        'Makes connections between similar texts/topics',
        'Identifies recurring characters where applicable',
      ],
      Synthesizing: [
        'Identifies new information in text/pictures',
        'Talks about what the reader already knows relative to information in the text',
      ],
      Inferring: [
        "Talks about characters' feelings",
        'Talks about pictures, and interprets ideas from them',
      ],
      'Analyzing/Critiquing': [
        'Understands how the ideas in a book are related to each other',
        'Understands how the ideas in a text are related to a title',
        'Shares opinions about books and illustrations',
      ],
    },
  },
  {
    id: 'Level C/D',
    'Thinking Within the Text': {
      'Solving Words': [
        'Locates easy high frequency words in the text',
        'Attends to beginning letter(s) and progresses to using final letter(s)',
        'Locates the first and last letters of words in continuous text',
        'Uses knowledge of syllables to help in word-by-word matching',
        'Uses letter/sound information in coordination with meaning and language structure to solve words',
        'Takes apart words by using the sounds of letters (CVC patterns)',
        'Recognizes 10/20 or more high frequency words',
      ],
      'Searching for and Using Information': [
        'Reads left to right and returns to the next line',
        'Integrates sources of information: making sure it makes sense, sounds right and looks right',
        'Processes texts with simple dialogue and some pronouns',
        'Remembers and uses language patterns to help reading',
        'Asks questions to clarify meaning',
      ],
      'Monitoring and Correcting': [
        'Re-reads to self-correct errors or confirm meaning',
        'Uses prior knowledge to self-correct and self-monitor',
        'Uses known words to self-monitor and self-correct',
        'Re-reads to search for information',
        'Begins to crosscheck one kind of information against another to monitor and self-correct reading',
        'Uses two or more sources of information to monitor and self-correct reading',
      ],
      Summarizing: [
        'Remembers information to help understand the end of the story',
        'Recalls and re-tells important information or events from the text',
        'Understands and talks about a simple sequence or events in the story',
      ],
      'Maintaining Fluency': [
        'Notices and uses punctuation through appropriate pausing and intonation',
        'Identifies and reads some phrases as word groups',
      ],
    },
    'Thinking Beyond the Text': {
      Predicting: [
        'Uses knowledge of language structure to anticipate text',
        'Makes predictions based on pictures',
        'Predicts the ending of a story based on reading the beginning and the middle of the story',
        'Makes predictions based on prior knowledge',
        'Makes predictions based on information gained through reading',
      ],
      'Making Connections': [
        'Talks about own experiences in relation to the text',
        'Makes connections between similar texts/topics',
        'Recognizes and applies attributes of recurring characters where applicable',
      ],
      Synthesizing: [
        'Remembers information and details to understand after reading',
        'Talks about what the reader already knows relative to information in the text',
        'Acquires and reports new information from text',
        'Talks about what the reader already knows about a topic or a character prior to reading',
        'Shows evidence in the text of new ideas or information',
      ],
      Inferring: [
        "Talks about characters' feelings",
        'Talks about pictures, and interprets ideas from them',
      ],
      'Analyzing/Critiquing': [
        'Understands how the ideas in a text are related to a title',
        'Notices and points out connections between text and pictures',
        'Understands how the ideas in a book are related to each other',
        'Shares opinions about books and illustrations',
      ],
    },
  },
  {
    id: 'Level E',
    'Thinking Within the Text': {
      'Solving Words': [
        'Recognizes many regular words and high frequency words quickly and easily',
        'Uses beginning and ending parts of words to solve them',
        'Recognizes and uses word parts - onset and rimes, consonant clusters to solve words while reading',
        'Makes connections between words by letters, sounds or spelling patterns',
        'Tales apart many new words such as compound words, to solve them',
      ],
      'Searching for and Using Information': [
        'Notices details in pictures and uses information to understand text',
        'Rereads to search for and use information from language structures or meaning',
        'Processes texts with simple dialogue and some pronouns',
        'Uses all sources of information to solve new words',
      ],
      'Monitoring and Correcting': [
        'Re-reads the sentence or phrase to self-correct or confirm',
        'Re-reads the sentence to search for and use information',
        'Uses sounds related to consonants to monitor and self-correct reading',
        'Uses known words to monitor and self-correct',
      ],
      Summarizing: [
        'Remembers information to help understand the end of the story',
        'Recalls and re-tells important information or events from the text',
        'Understands and talks about a simple sequence or events in the story',
        'Provides an oral summary of a text',
      ],
      'Maintaining Fluency': [
        'Demonstrates phrased, fluent oral reading',
        'Reflects language syntax and meaning through phrasing and expression',
        'Notices and uses punctuation through appropriate pausing and intonation',
        'Demonstrates appropriate stress on words in a sentence',
      ],
    },
    'Thinking Beyond the Text': {
      Predicting: [
        'Uses knowledge of language structure to anticipate text',
        'Predicts the ending of a story based on reading the beginning and the middle of the story',
        'Makes predictions based on prior knowledge',
        'Makes predictions based on information and pictures gained through reading',
      ],
      'Making Connections': [
        'Makes and discusses connections about own experiences in relation to the text',
        'Makes connections between similar texts/topics',
        'Recognizes and applies attributes of recurring characters where applicable',
      ],
      Synthesizing: [
        'Identifies new information in text/pictures',
        'Talks about what the reader already knows relative to information in the text',
        'Acquires and reports new information from text',
        'Talks about what the reader already knows about a topic or a character prior to reading',
        'Shows evidence in the text of new ideas or information',
      ],
      Inferring: [
        "Talks about characters' feelings",
        'Talks about pictures, and interprets ideas from them',
        'Sees changes in characters over time and can cite reasons',
        'Shows evidence in the print or pictures to support inferences',
      ],
      'Analyzing/Critiquing': [
        'Notices and appreciates humor',
        'Recognizes whether a text is fiction or non-fiction',
        'Discusses the differences between photographs and illustrations',
        'Understands that a story has a beginning, middle, and end',
        'Recognizes and discusses how print layout or features are used to convey meaning',
        'Understands how writers use interesting characters and events',
      ],
    },
  },
];

export { CHECKLISTS };
