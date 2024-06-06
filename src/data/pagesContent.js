const pagesContent = {
  page1: {
    title: "Introduction: The WannaCry Ransomware",
    content: [
      {
        type: "text",
        value: "The WannaCry Ransomware Attack was a worldwide cyber attack in early 2017 by the WannaCry Ransomware Cryptoworm. It propagated Microsoft OS machines by using EternalBlue, an exploit of a flaw in Microsoft's Server Message Block protocol. Developed by the United States National Security Agency, EternalBlue was subsequently leaked and stolen by a cyber-terrorist organization known as The Shadow Brokers. The ransomware operated in a characteristic way, encrypting a user's files, informing them, and demanding payment for a decryption key which the message claimed would completely restore their data files.",
      },
      {
        type: "image",
        value: "/Logos/wc_msg.png",
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
        value: "/Logos/wc_prop_gif.gif",
        alt: "An example GIF",
      },
      {
        type: "question",
        field: "q2",
        question: "What is the capital of Portugal?",
        correctAnswer: "Lisbon",
      },
    ],
  },
  page2: {
    title: "Beginning Your Investigation: Autopsy",
    content: [
      {
        type: "text",
        value: "Welcome to Page 2. This page has a question and a GIF.",
      },
      {
        type: "question",
        field: "q3",
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
    title: "Reverse Engineering with Ghidra",
    content: [
      {
        type: "question",
        field: "q4",
        question: "What color is the sky?",
        correctAnswer: "Blue",
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
