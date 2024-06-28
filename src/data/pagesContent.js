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
        type: "subheading",
        value: "The Case",
      },
      {
        type: "text",
        value:
          "You are a forensic analyst contracted at Morgan & Morgan, a criminal law firm operating out of Morgantown, West Virginia. Your manager has come to you with an interesting task: A paralegal has  discreetly reported one of his coworkers to a firm partner for suspicious activity. The paralegal believes he saw unauthorized documents and other suspicious files on the reported firm computer, but he wasn't sure how to proceed and didn't want to risk conflict. You've been provided with an image of the employee's computer. Your task is to investigate the employee's activity and files and discover what risks, if any, are present.",
      },
      {
        type: "question",
        field: "q7",
        question:
          "What is the type of image provided to you? Provide the file extension.",
        correctAnswer: "ISO",
      },
      {
        type: "text",
        value:
          "One of the premier open-source tools for hard drive investigation is Autopsy. Autopsy has many capabilties and supports many extra modules which exend its capabilities. This is the first tool you will be leveraging in your investigation. ",
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
          "There are many tools at our disposal to make sense of this mysterious binary file. Perhaps the most obvious solution is what is known as reverse engineering. Reverse engineering involves the use of a decompiler, which attempts to reconstruct the binary's source code. There are many popular and efficient decompilers out there, but we will be using the open-source National Security Agency developed Ghidra. ",
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
          "Ghidra works by decompiling binaries function-by-function. This allows us to go through the functions and analyze the corresponding assembly and source code. However, it would be extremely inefficient and often impossible to try and reconstruct every single line of code from the decompilation. Instead, we have to use our intuition to discover keys which reveal the code's intent.  ",
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
      {
        type: "subheading",
        value: "The Windows entry Function",
      },
      {
        type: "text",
        value:
          "This entry point function is the default entry code generated for all Windows executables. ",
      },
      {
        type: "question",
        field: "q6",
        question: "Skim through the function. Where should it lead?",
        correctAnswer: "FUN_00408140",
      },
      {
        type: "text",
        valeu:
          "Once recognized, never forgotten. It's time to put one of, if not the main, skills of a reverse engineer to work: renaming. As we work to discover the intent of the author of code, it is integral that we rework the code so that it becomes more understandable to us. Moving forward, we are going to look for recognizable snippets and functions to rename in a manner that pieces the puzzle together.",
      },
      {
        type: "text",
        value:
          "Our first rename will be this newfound function. As we know the entry point leads to the actual Windows entry, we can rename it fittingly. Look up the 'WinMain application entry point' and copy the function signature.",
      },
      {
        type: "gif",
        value: "/Logos/WinMain.gif",
      },
      {
        type: "text",
        value:
          "Now it's time that we put our investigative skills to work. What do we notice first? ",
      },
      {
        type: "image",
        value: "/Logos/KillSwitchString.png",
      },
      {
        type: "text",
        value:
          "As a reverse engineer, you'll come to recognize many red flags. One of the most important are hardcoded strings. When investigating decompiled code, not much is given to us at face value. When it is, we need to make the most of it.",
      },
      {
        type: "text",
        value:
          "Some great examples are IP addresses, names, bitcoin addresses, and of course what we've just discovered: internet domains.",
      },
      {
        type: "text",
        value:
          "Let's rename the variable this domain is stored in. Let's call it 'suspicious domain.' Also, change the type to char*. The next chunk of code should be widely recognizable to us, though in a slightly muddled manner. This is a simple for loop, copying the url into another variable. Rename this to your liking and switch to a char*.",
      },
      {
        type: "image",
        value: "/Logos/dataChooser.png",
      },
      {
        type: "text",
        value:
          "Moving on, the next lines of import will be those containing functions 'InternetOpenUrlA'. Ghidra has no function description, but let's take a minute to think about this. Without attempting to further demystify the decompilation, we can intuit what is attempted here. The function attempts to make a connection to the URL; the return value is then stored in a new i variable. ",
      },
      {
        type: "question",
        field: "q8",
        question:
          "In C code, what integer return value signifies successful execution?",
        correctAnswer: "0",
      },
      {
        type: "text",
        value:
          "This particular function return, however, cannot be trusted. In Ghidra's failure to recognize the microsoft function, it has misconstructed the return. In fact, this particular function return an hInternet void pointer, and the condition checks if it is void. This means that it checks if the connection was Unsuccessful.",
      },
      {
        type: "text",
        value:
          "The implentation of some URL or other changeable resource is a common strategy in malware design. This is knows as the Kill Switch. This way, the malware author or attacker can register the URL as a means to stop the malware from executing to its fullest extent. This is almost undeniable evidence that the binary we're dealing with is a piece of dangerous, malicious code.",
      },
      {
        type: "subheading",
        value: "The Real Entry Function"
      },
      {
        type: "text",
        value: "At the failure of the kill switch, we can assume this is where the malicious activity will begin to take place. As such, name the function called upon failure to request the url 'real_entry'. Double click to jump into the function. "
      },
      {
        type: "text",
        value: "Past the stack variables, the first line retrieves the executable path. Rename the variable the path is stored in to something like 'exe_path'. The next line retrieves the number of passed arguments. Let's name this variable 'num_args'. The next conditional check is quite clear. If the executable is supplied with less than two arguments, enter the specified function. Let's fittinly name this function as 'no_args_handler'. "
      },
      {
        type: "image",
        value: "/Logos/no_args.png"
      },
      {
        type: "text",
        value: "Open the renamed handler. "},
    ],
  },
};

export default pagesContent;
