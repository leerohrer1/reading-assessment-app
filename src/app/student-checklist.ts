type StudentChecklist =
  [
    {
      id: 'Level A/B',
      'Thinking Within the Text': {
        'Solving Words': {
          'Locates known word(s) in text': boolean,
          'Analyzes words from left to right, using knowledge of sound/letter relationships': boolean,
          'Recognizes a few high frequency words': boolean,
          'Locates easy high frequency words in the text': boolean,
        },
        'Searching for and Using Information': {
          'Matches spoken word with printed word': boolean,
          'Moves from left to right when reading': boolean,
          'Searches for and uses information in pictures': boolean,
          'Uses oral language in combination with pointing': boolean,
          'Uses the language structure to learn about the print': boolean,
          'Asks questions to clarify meaning or get information': boolean,
        },
        'Monitoring and Correcting': {
          'Uses word-by-word matching': boolean,
          'Uses prior knowledge to self-correct and self-monitor': boolean,
          'Uses known words to self-monitor and self-correct': boolean,
          'Begins to crosscheck one kind of information against another to monitor and self-correct reading': boolean,
          'Re-reads to self-correct errors or confirm meaning': boolean,
      },
        Summarizing: {
          'Remembers what the story is about during reading': boolean,
          'Remembers important information from the text': boolean,
          'Remembers information to help understand the end of the story': boolean,
        },
        'Maintaining Fluency': {
          'Notices and uses end punctuation and reflects it in voice': boolean,
          'Points to words and reads at a steady rate without long pauses': boolean,
        },
      },
      'Thinking Beyond the Text': {
        Predicting: {
          'Uses knowledge of language structure to anticipate text': boolean,
          'Makes predictions based on information in pictures': boolean,
          'Predicts the ending of a story based on reading the beginning and the middle of the story': boolean,
          'Makes predictions based on prior knowledge and experiences': boolean,
        },
        'Making Connections': {
          'Talks about own experiences in relation to the text': boolean,
          'Makes connections between similar texts/topics': boolean,
          'Identifies recurring characters where applicable': boolean,
        },
        Synthesizing: {
          'Identifies new information in text/pictures': boolean,
          'Talks about what the reader already knows relative to information in the text': boolean,
        },
        Inferring: {
          "Talks about characters' feelings": boolean,
          'Talks about pictures, and interprets ideas from them': boolean,
      },
        'Analyzing/Critiquing': {
          'Understands how the ideas in a book are related to each other': boolean,
          'Understands how the ideas in a text are related to a title': boolean,
          'Shares opinions about books and illustrations': boolean,
        },
      },
    },
    {
      id: 'Level C/D',
      'Thinking Within the Text': {
        'Solving Words': {
          'Locates easy high frequency words in the text': boolean,
          'Attends to beginning letter(s) and progresses to using final letter(s)': boolean,
          'Locates the first and last letters of words in continuous text': boolean,
          'Uses knowledge of syllables to help in word-by-word matching': boolean,
          'Uses letter/sound information in coordination with meaning and language structure to solve words': boolean,
          'Takes apart words by using the sounds of letters (CVC patterns)': boolean,
          'Recognizes 10/20 or more high frequency words': boolean,
        },
        'Searching for and Using Information': {
          'Reads left to right and returns to the next line': boolean,
          'Integrates sources of information: making sure it makes sense, sounds right and looks right': boolean,
          'Processes texts with simple dialogue and some pronouns': boolean,
          'Remembers and uses language patterns to help reading': boolean,
          'Asks questions to clarify meaning': boolean,
      },
        'Monitoring and Correcting': {
          'Re-reads to self-correct errors or confirm meaning': boolean,
          'Uses prior knowledge to self-correct and self-monitor': boolean,
          'Uses known words to self-monitor and self-correct': boolean,
          'Re-reads to search for information': boolean,
          'Begins to crosscheck one kind of information against another to monitor and self-correct reading': boolean,
          'Uses two or more sources of information to monitor and self-correct reading': boolean,
        },
        Summarizing: {
          'Remembers information to help understand the end of the story': boolean,
          'Recalls and re-tells important information or events from the text': boolean,
          'Understands and talks about a simple sequence or events in the story': boolean,
        },
        'Maintaining Fluency': {
          'Notices and uses punctuation through appropriate pausing and intonation': boolean,
          'Identifies and reads some phrases as word groups': boolean,
        },
      },
      'Thinking Beyond the Text': {
        Predicting: {
          'Uses knowledge of language structure to anticipate text': boolean,
          'Makes predictions based on pictures': boolean,
          'Predicts the ending of a story based on reading the beginning and the middle of the story': boolean,
          'Makes predictions based on prior knowledge': boolean,
          'Makes predictions based on information gained through reading': boolean,
      },
        'Making Connections': {
          'Talks about own experiences in relation to the text': boolean,
          'Makes connections between similar texts/topics': boolean,
          'Recognizes and applies attributes of recurring characters where applicable': boolean,
      },
        Synthesizing: {
          'Remembers information and details to understand after reading': boolean,
          'Talks about what the reader already knows relative to information in the text': boolean,
          'Acquires and reports new information from text': boolean,
          'Talks about what the reader already knows about a topic or a character prior to reading': boolean,
          'Shows evidence in the text of new ideas or information': boolean,
        },
        Inferring: {
          "Talks about characters' feelings": boolean,
          'Talks about pictures, and interprets ideas from them': boolean,
        },
        'Analyzing/Critiquing': {
          'Understands how the ideas in a text are related to a title': boolean,
          'Notices and points out connections between text and pictures': boolean,
          'Understands how the ideas in a book are related to each other': boolean,
          'Shares opinions about books and illustrations': boolean,
        },
      },
    },
    {
      id: 'Level E',
      'Thinking Within the Text': {
        'Solving Words': {
          'Recognizes many regular words and high frequency words quickly and easily': boolean,
          'Uses beginning and ending parts of words to solve them': boolean,
          'Recognizes and uses word parts - onset and rimes, consonant clusters to solve words while reading': boolean,
          'Makes connections between words by letters, sounds or spelling patterns': boolean,
          'Tales apart many new words such as compound words, to solve them': boolean,
        },
        'Searching for and Using Information': {
          'Notices details in pictures and uses information to understand text': boolean,
          'Rereads to search for and use information from language structures or meaning': boolean,
          'Processes texts with simple dialogue and some pronouns': boolean,
          'Uses all sources of information to solve new words': boolean,
        },
        'Monitoring and Correcting': {
          'Re-reads the sentence or phrase to self-correct or confirm': boolean,
          'Re-reads the sentence to search for and use information': boolean,
          'Uses sounds related to consonants to monitor and self-correct reading': boolean,
          'Uses known words to monitor and self-correct': boolean,
        },
        Summarizing: {
          'Remembers information to help understand the end of the story': boolean,
          'Recalls and re-tells important information or events from the text': boolean,
          'Understands and talks about a simple sequence or events in the story': boolean,
          'Provides an oral summary of a text': boolean,
        },
        'Maintaining Fluency': {
          'Demonstrates phrased, fluent oral reading': boolean,
          'Reflects language syntax and meaning through phrasing and expression': boolean,
          'Notices and uses punctuation through appropriate pausing and intonation': boolean,
          'Demonstrates appropriate stress on words in a sentence': boolean,
        },
      },
      'Thinking Beyond the Text': {
        Predicting: {
          'Uses knowledge of language structure to anticipate text': boolean,
          'Predicts the ending of a story based on reading the beginning and the middle of the story': boolean,
          'Makes predictions based on prior knowledge': boolean,
          'Makes predictions based on information and pictures gained through reading': boolean,
        },
        'Making Connections': {
          'Makes and discusses connections about own experiences in relation to the text': boolean,
          'Makes connections between similar texts/topics': boolean,
          'Recognizes and applies attributes of recurring characters where applicable': boolean,
        },
        Synthesizing: {
          'Identifies new information in text/pictures': boolean,
          'Talks about what the reader already knows relative to information in the text': boolean,
          'Acquires and reports new information from text': boolean,
          'Talks about what the reader already knows about a topic or a character prior to reading': boolean,
          'Shows evidence in the text of new ideas or information': boolean,
        },
        Inferring: {
          "Talks about characters' feelings": boolean,
          'Talks about pictures, and interprets ideas from them': boolean,
          'Sees changes in characters over time and can cite reasons': boolean,
          'Shows evidence in the print or pictures to support inferences': boolean,
        },
        'Analyzing/Critiquing': {
          'Notices and appreciates humor': boolean,
          'Recognizes whether a text is fiction or non-fiction': boolean,
          'Discusses the differences between photographs and illustrations': boolean,
          'Understands that a story has a beginning, middle, and end': boolean,
          'Recognizes and discusses how print layout or features are used to convey meaning': boolean,
          'Understands how writers use interesting characters and events': boolean,
        },
      },
    },
  ]