const pagesContent = {
  page1: {
    title: "The WannaCry Ransomware",
    content: [
      {
        type: "text",
        value:
          "The WannaCry Ransomware Attack was a worldwide cyber attack in early 2017 by the WannaCry Ransomware Cryptoworm. It propagated Microsoft OS machines by using EternalBlue, an exploit of a flaw in Microsoft's Server Message Block protocol. Developed by the United States National Security Agency, EternalBlue was subsequently leaked and stolen by a cyber-terrorist organization known as The Shadow Brokers. The ransomware operated in a characteristic way, encrypting a user's files, informing them, and demanding payment for a decryption key which the message claimed would completely restore their data files.",
      },

      {
        type: "question",
        field: "q1",
        question:
          "What Microsoft Windows exploit does WannaCry take advantage of?",
        correctAnswer: "eternalblue",
      },

      {
        type: "image",
        value: "/Logos/wc_msg.png",
        alt: "An example image",
      },
      {
        type: "text",
        value:
          "The post-encryption ransom message. Notedly, poor grammar and odd vocabulary are throughout. What does this tell us about the attack? About the attackers?",
      },

      {
        type: "text",
        value:
          "The attack began May 12 of 2017 at 07:44 UTC and was stopped seven hours later by the registration of a kill switch discovered by Marcus Hutchins, aka MalwareTechno. The kill switch prevented already infected computers from being encrypted or further spreading WannaCry. An estimated 300,000 machines were infected, across 150 countries, resulting in a net loss of an estimated hundreds of millions to billions of USD. Some substantial targets were the UK National Health Service, Nissan Motors, Fedex, and Boeing. Although new infections were rendered impotent, the registration of the kill switch was irrelevant for machines already infected. Machines not connected to the internet, but through local servers were also still vulnerable to infection. As seen below, the propogation of the virus was not ended completely, nor were all its victims saved from the attack.",
      },

      {
        type: "gif",
        value: "/Logos/wc_prop_gif.gif",
        alt: "An example GIF",
      },
      {
        type: "question",
        field: "q2",
        question: "What year did the first WannaCry attack take place?",
        correctAnswer: "2017",
      },
      {
        type: "subheading",
        value: "Your Task",
      },
      {
        type: "text",
        value:
          "You will be taking the role of digital forensic analyst and are tasked with dissecting a personal machine of unknown origin. You will be leveraging modern open source tools professionally used in the fields of digital investigation, research, and cyber security. The goal of this investigation is to discover the origins of this machine, the owner or user, and what risks it contains. Additionally, we will be further diving into anything we find that poses a greater security threat. ",
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
        type: "text",
        value:
          "At this point in our investigation, we have retrieved a suspicious, obscurely named zip file. Let's see what's inside. ",
      },
      {
        type: "image",
        value: "/Logos/binZipHome2.png",
        alt: "Extracted binary",
      },
      {
        type: "question",
        field: "q4",
        question: "What are the last four characters of the zip file?",
        correctAnswer: "e8cf",
      },
      {
        type: "text",
        value:
          "The extraction has revealed a mysterious binary file, also obscurely named. At this point in your investigation, you have two basic starting options:  You can either run the binary, potentially compromising your own system, or you can take extra steps to discover its purpose. As a responsible forensic analyst, it is your responsibility to ensure the security of your system during your investigation. Opt for the latter.",
      },
      { type: "subheading", value: "Analyzing the Binary" },
      {
        type: "text",
        value:
          "There are many tools at our disposal to make sense of this mysterious binary file. Perhaps the most obvious solution is what is known as reverse engineering. Reverse engineering involves the use of a decompiler, which attempts to reconstruct thebinary's source code. There are many popular and efficient decompilers out there, but we will be using the open-source National Security Agency developed Ghidra. ",
      },
      {
        type: "image",
        value: "/Logos/GhidraRun.png",
        alt: "Click on 'GhidraRun' batch file.",
      },
      {
        type: "text",
        value:
          "Once you've launched Ghidra, created a new unshared project and name it appropriately. For our uses, let's call this 'WC'. ",
      },
      {
        type: "text",
        value:
          "Move the zip or extracted binary into your new project folder. Import it as a batch import, uncheck the DOS executable and continue.",
      },
      { type: "image", value: "/Logos/MalwareZip_Password.png" },
      {
        type: "text",
        value:
          "What's this?! This zip file is encrypted and requires a password to extract its contents. Let's think back to our earlier investigation with Autopsy. Recall the mysterious password in 'ENTER LOCATION HERE'? Try it! ",
      },

      {
        type: "text",
        value:
          "We're in! Now double click on this file to open Ghidra's decompiler and analyze. Leave every option selected and additionally select the Decompiler Paramater ID and Windows x86 Propogate External Parameters. Once we've finalized our analysis option, click analyze and let Ghidra work. Once it's completed decompilation, click on the window tab and open the Decompiler, Function, and Listing windows.",
      },
      {
        type: "subheading",
        value: "Where the Fun Begins",
      },
      {
        type: "image",
        value: "/Logos/WindowsGHIDRA.png",
      },
      {
        type: "text",
        value:
          "Ghidra works by decompiling binaries function-by-function. This allows us to go through the functions and analyze the corresponding assembly and source code. However, it would be extremely inefficient and often impossible, to try and reconstruct every single line of code from the decompilation. Instead, we have to use our intuition to discover keys which reveal the code's intent.  ",
      },
      {
        type: "question",
        field: "q5",
        question:
          "Look at the functions Ghidra has provided us. Using your intuiton, where should we begin our dive into the code? Enter the name of a function.",
        correctAnswer: "entry",
      },
    ],
  },
  page4: {
    title: "Diving Into the Code",
    content: [
      {},
    ],
  },
  
};

export default pagesContent;
