const pagesContent = {
  page1: {
    title: "Instructional Content for Page 1",
    content: [
      {
        type: "text",
        value: "Welcome to Page 1. This is some introductory text.",
      },
      {
        type: "image",
        value: "https://example.com/image1.jpg",
        alt: "An example image",
      },
      {
        type: "question",
        field: "q1",
        question: "What is 2 + 2?",
        correctAnswer: "4",
      },
      { type: "text", value: "Here is some more text after the question." },
      {
        type: "gif",
        value: "https://example.com/animation1.gif",
        alt: "An example GIF",
      },
      {
        type: "question",
        field: "q2",
        question: "What is the capital of France?",
        correctAnswer: "Paris",
      },
    ],
  },
  page2: {
    title: "Instructional Content for Page 2",
    content: [
      {
        type: "text",
        value: "Welcome to Page 2. This page has a question and a GIF.",
      },
      {
        type: "question",
        field: "q1",
        question: "What is the capital of France?",
        correctAnswer: "Paris",
      },
      {
        type: "gif",
        value: "https://example.com/animation2.gif",
        alt: "Another example GIF",
      },
    ],
  },
  page3: {
    title: "Instructional Content for Page 3",
    content: [
      {
        type: "text",
        value:
          "Welcome to Page 3. This page has no questions, just information.",
      },
      {
        type: "image",
        value: "https://example.com/image3.jpg",
        alt: "A beautiful scenery",
      },
    ],
  },
  // Add more pages as needed
};

export default pagesContent;
