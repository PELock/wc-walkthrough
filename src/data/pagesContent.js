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

        question:
          "What Microsoft Windows exploit does WannaCry take advantage of?",
        correctAnswer: "eternalblue",
        field: "q1",
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

        question: "What year did the first WannaCry attack take place?",
        correctAnswer: "2017",
        field: "q2",
      },
      {
        type: "subheading",
        value: "Your Task",
      },
      {
        type: "text",
        value:
          "You will be taking the role of digital forensic analyst and are tasked with dissecting a personal machine of a potential insider threat. You will be leveraging modern open source tools professionally used in the fields of digital investigation, research, and cyber security. The goal of this investigation is to discover what risks, if any, it contains. Additionally, we will be further diving into anything we find that poses a greater security threat. ",
      },
    ],
  },

  page2: {
    title: "Live Behavioral Analysis",
    content: [
      {
        type: "text",
        value:
          "As a responsible forensic analyst, it is your responsibility to ensure the security of your system during your investigation. Obviously, you should never execute malware on your host or analysis machines. However, observing malware behavior real-time-- known as behavioral analysis-- is an indispensible form of analysis. To accomplish this safely, we are going to be using a virtual machine to take the role of a victim; specifically designed for executing the malware in a closed system. You have been provided with such a virtual machine. Access it now.",
      },
      {
        type: "question",
        question: "What is the name of the virtual machine provided?",

        correctAnswer: "Infected Windows 7",
        field: "q3",
      },
      {
        type: "text",
        value:
          "Your first objective would typically be connecting your analysis machine to your victim in order to transfer the virus zip file. This process involves creating a closed network, configured specificially for the virus in question. For convenience, however, the virus has been pre-installed on the victim. ",
      },
      {
        type: "text",
        value:
          "Regardless of whatever virtualization software you're using, it is essential to limit the communication and access between the victim VM and both your host system and network. Remove any network adapters and disable any drag-and-drop features. This is a critical step, and if skipped, could corrupt and infect your host.",
      },
      {
        type: "text",
        value:
          "Especially when accessing files downloaded from the internet and perhaps archived using different tools, the windows zip extractor is insufficient. To this end, this VM has been prepared with the 7-zip tool installed.",
      },
      {
        type: "subheading",
        value: "Dynamic Analysis",
      },
      {
        type: "text",
        value:
          "We now have the binary executable. At this point, it is imperative that you ensure there is no network adapter or connection on the victim VM. Before executing the virus, use your virtualization platform to take a snapshot. If snapshots are not a built-in utility, you can use your CLI to take one with the underlying hypervisor. Fire off the virus. ",
      },
      {
        type: "question",
        question:
          "Notice all the victim machine's files are now encrypted. What extension has been added to the victim's files?",

        correctAnswer: ".WNRY",
        field: "q4",
      },
      {
        type: "text",
        value:
          "Notice the post-encryption ransom message. Notedly, poor grammar and odd vocabulary are throughout. What does this tell us about the attack? About the attackers?",
      },
      {
        type: "box",

        question:
          "Mark down this and other significant observations here for later use. What stand out? ",
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

        question: "What are the last four characters of the zip file?",
        correctAnswer: "e8cf",
        field: "q5",
      },
      {
        type: "text",
        value:
          "The extraction has revealed a binary file, also obscurely named. ",
      },
      { type: "subheading", value: "Analyzing the Binary" },
      {
        type: "text",
        value:
          "There are many tools at our disposal to make sense of this binary file. Perhaps the most obvious solution is what is known as reverse engineering. Reverse engineering involves the use of a decompiler, which attempts to reconstruct the binary's source code. There are many popular and efficient decompilers out there, but we will be using the open-source National Security Agency developed Ghidra. ",
      },
      {
        type: "image",
        value: "/Logos/GhidraRun.png",
        alt: "Click on 'GhidraRun' batch file.",
      },
      {
        type: "text",
        value:
          "Once you've launched Ghidra, create a new unshared project and name it appropriately. For our uses, let's call this 'WC'. ",
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
          "What's this?! This zip file is encrypted and requires a password to extract its contents. A common trend in the world of malware analysis is protecting malware binaries with encrypted zips. A complementary trend is assigning the password 'infected' to protect these zip files. Try it now.",
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

        question:
          "Look at the functions Ghidra has provided us. Using your intuition, where should we begin our dive into the code? Enter the name of a function.",
        correctAnswer: "entry",
        field: "q6",
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

        question: "Skim through the function. Where should it lead?",
        correctAnswer: "FUN_00408140",
        field: "q7",
      },
      {
        type: "text",
        value:
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

        question:
          "In C code, what integer return value signifies successful execution?",
        correctAnswer: "0",
        field: "q8",
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
        value: "The Real Entry Function",
      },
      {
        type: "text",
        value:
          "At the failure of the kill switch, we can assume this is where the malicious activity will begin to take place. As such, name the function called upon failure to request the url 'real_entry'. Double click to jump into the function. ",
      },
      {
        type: "text",
        value:
          "Past the stack variables, the first line retrieves the executable path. Rename the variable the path is stored in to something like 'exe_path'. The next line retrieves the number of passed arguments. Let's name this variable 'num_args'. The next conditional check is quite clear. If the executable is supplied with less than two arguments, enter the specified function. Let's fittingly name this function as 'no_args_handler'. ",
      },
      {
        type: "image",
        value: "/Logos/no_args.png",
      },
      {
        type: "text",
        value: "Open the renamed handler.  ",
      },
      {
        type: "text",
        value:
          "At the top of this function, you'll notice a couple SC_HANDLE globals. If you're unfamiliar, these are essentially typedefs for handles to Microsoft services. Specifically, these are used to create and manage services by interacting with the Service Control Manager database. Examine line 9. This prints the exact path int the char[] local104, with additional flags. Do you know what this looks like?  ",
      },
      {
        type: "question",
        question:
          "What is the segment of the string entered into local104? Start at the Folder containing the zip. ",

        correctAnswer:
          "Desktop\\32f24601153be0885f11d62e0a8a2f0280a2034fc981d8184180c5d3b1b9e8cf.zip\\32f24601153be0885f11d62e0a8a2f0280a2034fc981d8184180c5d3b1b9e8cf.bin -m security ",
        field: "q9",
      },
      {
        type: "text",
        value:
          "Precisely. Therefore, this string is a representation of the binary, followed by the arguments -m security. Let's rename this string to 'execute_with_args'. The next few lines attempt to get a handle to the SCM and set the malicious code to run with all permissions and on boot. Recognizing and understanding what this means is essential. If this process is executed on boot, this is the key persistence mechanism of the malware. Additionally, this service is registered under the guise of a different service.",
      },
      {
        type: "question",
        question:
          "What is the name of the newly created service? Enter it just as found in the function.",

        correctAnswer: "s_Microsoft_Security_Center_(2.0)_s_00431308",
        field: "q10",
      },
      {
        type: "text",
        value:
          "Let's rename this function accordingly. How about 'create_malicious_service'?",
      },
      {
        type: "text",
        value:
          "Return to the no_args_handler. Go into the second function. This function is much longer and less clear. One of your main responsibilities as a reverse engineer is to be able to examine a daunting segment of code and find clues to build on. Let's find one such clue.",
      },
      {
        type: "text",
        value:
          "The first line we're confronted with gets a handle to kernel32.dll. This is a DLL that is essential to managing Windows at a system-level. Rename this 'kernel32_module_handle'. The next lines of code extract four functions from the DLL. The next piece of code to catch our eye is line 40, containing the function findResourceA. This function finds the location of the given resource (the second argument). Right-click on the resource variable, and set it to its Decimal value. Rename the hResInfo variable the resource in decimal format, followed by _info.",
      },
      {
        type: "question",
        question: "What is the name of the resource? Enter the decimal format.",

        correctAnswer: "1831",
        field: "q11",
      },
      {
        type: "text",
        value: "Format the following resource info variables accordingly.",
      },
      {
        type: "image",
        value: "/Logos/1831_info.png",
      },
      {
        type: "text",
        value:
          "Move ahead to the next items of note. Down at lines 65 and 66, we see two calls to sprintf. The format strings are clearly paths but are missing arguments! When there are clearly missing arguments or variables, it is often a good idea to check the disassembly. Open the Listing window and click on the first sprintf. We can see here that two more arguments were pushed on the stack but not recognized by Ghidra. This confirms our suspicions.",
      },
      {
        type: "image",
        value: "/Logos/missing_paths.png",
      },
      {
        type: "text",
        value:
          "Override the function signatures of the calls to sprintf. Append the missing char* formal arguments. The strings in their respective char[] are now much more appropriate. Change the variable names to represent their paths. Let's go with 'tasksche_path' and 'strange_path'. The next line down copies the tasksche path into the strange path. Below is a series of common functions unrecognized by Ghidra. The most notable of which is a strcat() that appends '/i' to the end of taskche.exe. This is obviously intended to serve as an argument.",
      },
      {
        type: "text",
        value:
          "Skimming through the rest of the file, nothing else stands out except the pointer to the CreateProcessA function with ambiguous parameters. Hovering over, we can see the handle is currently undefned. Let's retype it to CreateProcessA. The resource is now clearly defined as an argument; This will create the process tashsche.exe, therefore running the loaded 1831 resource. Rename the function accordingly to describe its purpose. Finally, it's time to ask: what is resource 1831?",
      },
      {
        type: "gif",
        value: "/Logos/ProcAtypeChange.gif",
      },

      {
        type: "subheading",
        value: "Recap",
      },
      {
        type: "text",
        value:
          "Before we move on, look back at the control flow of the program and where it's at now. Write down a linear, clear sequence of events and function calls. ",
      },
      {
        type: "chronological",
        question:
          "Arrange the following events related to the WannaCry attack in chronological order:",
        field: "wannacryChronology",
        events: [
          { id: "event1", content: "WannaCry ransomware attack starts." },
          {
            id: "event2",
            content: "Microsoft releases security patch MS17-010.",
          },
          {
            id: "event3",
            content: "Marcus Hutchins discovers the kill switch.",
          },
          { id: "event4", content: "NSA exploit EternalBlue is leaked." },
        ],
        correctOrder: [
          {
            id: "event2",
            content: "Microsoft releases security patch MS17-010.",
          },
          { id: "event4", content: "NSA exploit EternalBlue is leaked." },
          { id: "event1", content: "WannaCry ransomware attack starts." },
          {
            id: "event3",
            content: "Marcus Hutchins discovers the kill switch.",
          },
        ],
      },
      {
        type: "subheading",
        value: "Examining Resource 1831",
      },
      {
        type: "text",
        value:
          "It is now time to look inside resource 1831. To this end, we will use the open-source tool Resource Hacker, developed by Angus Johnson. Simply open the app and drag the binary into the left-side panel. If any anti-virus issues persist, once again visit the protection history and both allow and restore the binary on the machine.",
      },
      {
        type: "image",
        value: "/Logos/resourceHacker.png",
      },
      {
        type: "text",
        value:
          "Right-click on the desired resource and extract the .bin. Allow the ransomware on the device. Load this into Ghidra under a new folder in our project.",
      },
      {
        type: "image",
        value: "/Logos/1831_Ghidra.png",
      },
      {
        type: "text",
        value:
          "Open and analyze the resource. Select the same additional analyzers as before.",
      },
      {
        type: "text",
        value:
          "Go through the same process; find entry and edit the signature into WinMain. ",
      },
      {
        type: "text",
        value:
          "Before we proceed, however, let's skim over the hard-coded strings collected by Ghidra. Open up the 'Defined Strings' window. Scrolling through, we can recognize some benign functions, DLL, and other values that don't particularly catch our eye. Around halfway through, however, something very interesting begins to happen. A list of dozens of file extensions take shape.",
      },
      {
        type: "question",
        question:
          "Beginning just a couple entries above the list of extensions, what is the first particularly suspicious file in this list?",

        correctAnswer: "c.wnry",
        field: "q12",
      },
      {
        type: "image",
        value: "/Logos/bitcoin.png",
      },
      {
        type: "question",
        question:
          "Think back to our live analysis of the virus. What do these strings look like?",

        correctAnswer: "bitcoin addresses",
        field: "q13",
      },
      {
        type: "text",
        value: "Hint: Two words.",
      },
      {
        type: "text",
        value:
          "This is another crucial lesson of reverse engineering taking shape. By simply looking over the defined strings, we have a significantly clearer picture of what lies before us. We are given a plethora of extensions, cryptograohic libraries and functions, and even a direct reference to the name of the virus. Before we move on from the strings, take note of the strings which stand out the most. 'c.wnry', 't.wnry', 'WANACRY!' and the strange, cryptic 'WNcry@2017'",
      },
      {
        type: "text",
        value:
          "Let's jump into WinMain. Below the unrecognized memset() is a function retrieving a file name. Rename the local variable fittingly. The final largument is the size of the char[]. Change its format to decimal, and retype the char[] to this decimal value.",
      },
      {
        type: "question",
        question: "What is the decimal format of the char[] size?",

        correctAnswer: "520",
        field: "q14",
      },
      {
        type: "gif",
        value: "/Logos/210_to_filename.gif",
      },
      {
        type: "text",
        value:
          "Move on to the function directly below. Now, it's time to put your new skills to the test. Try to rename and track the flow of the function to discover its purpose.",
      },
      {
        type: "question",
        question:
          "The first part of this function is used to generate something. What is it? A...",

        correctAnswer: "random number",
        field: "q15",
      },
      {
        type: "text",
        value: "Hint: Two words.",
      },
      {
        type: "question",
        question: "Very good! Now, what is that then converted to? A...",

        correctAnswer: "char*",
        field: "q16",
      },
      {
        type: "text",
        value: "Hint: C data type.",
      },
      {
        type: "text",
        value:
          "Before moving back into WinMain, rename the function. Something like random_string_generator. Retype and rename the formal parameter. Although unseeming, this function is a key actor in WannaCry's malware detection evasion. This generates a new filename for each newly infected machine's ransom note. ",
      },
      {
        type: "text",
        value:
          "The next lines until 47 checks if the first argument supplied in the execution of the binary was '/i' ; if so, this creates a hidden directory and launches a copy of itself (taskche.exe) inside, launching a randomly named service with the randomly generated string!",
      },
      {
        type: "text",
        value: "Throw a comment here on WinMain to remind us what's going on.",
      },
      {
        type: "box",
        question:
          "Next, we move into the file_name directory. Look into the function directly below.  What is the first suspicious variable you see? What do you think this is?",
      },
      {
        type: "Below puVar3 is a miscompilation by Ghidra, which we have seen often throughout our static analysis. This is a strcpy(), and will eventually become recognizable. With this in mind, rename puVar3 accordingly.",
      },
      {
        type: "text",
        value:
          "In the below function that performs concatenation with our mysterious resource, look at the parameters. Ghidra assigns the prefix DAT followed by a hexadecimal identifer when it encounters data that has no more specific type. When this occurs, we must use context clues to help determine what its correct type should be.",
      },
      {
        type: "question",
        question: "What is the correct type of this DAT?",
        correctAnswer: "wchar_t*",
        field: "q17",
      },
      {
        type: "text",
        value:
          'We again need to clear the bytes with options, and then set the correct type. This may take a few tries, but go through Ghidra\'s "Data" options and test out different types until you come upon a legible value.',
      },
      {
        type: "question",
        question:
          "What is the value uncovered? Enter the value between the quotes.",
        correctAnswer: "WanaCrypt0r",
        field: "q18",
      },
      {},
      {
        type: "text",
        value:
          "Moving on through this function, it is evident that something new is happening.",
      },
      {
        type: "question",
        question: " What is being queried or altered?",
        correctAnswer: "The registry",
        field: "q19",
      },
      {
        type: "text",
        value:
          "We can assume that this function creates and entry relevant to our current working directry in the registry. Set the function name to something relevant and move back into WinMain.",
      },
    ],
  },
  page5: {
    title: "The Final Resource: XIA",
    content: [
      {
        type: "text",
        value:
          "Moving into the next function, we see many references to and functions loading the resource referenced before. Perhaps it's time we take a look and see what it's about. Open resource hacker once again and investigate to see what's revealed.",
      },
      {
        type: "image",
        value: "/Logos/Rh_1831.png",
      },
      {
        type: "question",
        question: "What is the name of this resource?",
        correctAnswer: "2058",
        field: "q20",
      },
      {
        type: "image",
        value: "/Logos/XIA_encrypted.png",
      },
      {
        type: "text",
        value:
          "It seems we've hit a dead end in trying to open this resource. It appears that it is an encrypted folder. Go back into 1831 to see if we can track down the password. There is a good chance that this password is either dynamically generated elsewhere and passed into this function, or hidden as a hardcoded string. ",
      },
      {
        type: "text",
        value:
          "Hint: Perhaps investigating WinMain's disassembly listing around these functions can give us a clue... ",
      },
      {
        type: "question",
        question: "What is the password?",
        correctAnswer: "WNcry_@2ol7",
        field: "q21",
      },
      {
        type: "text",
        value:
          "Congratulations. You've just unpacked and exposed the secrets of one of the most infamous ransomware in the world. Now, enter the password into Ghidra and export the contents to a destination of your choosing.",
      },
      {
        type: "text",
        value:
          "The great list of messages shows us something deeply unsettling and revealing. The author of this virus fully intended for the virus to spead worldwide; if nothing else, they had ambition.",
      },
      {
        type: "text",
        value:
          "We can't seem to make much sense of the other files, but we can assume they are resources such as images and text, judging from the messages. However, there are two live executables. Take a new snapshot of your analysis VM and ensure you have no internet connection, just as you did your victim. One misclick and you could lose all of your progress in the analysis. Now imagine how those truly infected felt.",
      },
      {
        type: "text",
        value:
          "Upload the executables into Ghidra. Additionally, u.wnry is actually a hidden executable. If you would like to discover what the other files are, you may investigate with another third-party tool, or investigate the hex values.",
      },
      {
        type: "image",
        value: "/Logos/tasksdll.png",
      },
      {
        type: "text",
        value:
          "Before investigating those executables, we need to finish analyzing resource 1831 and discovering how it uses the extracted resources. Jump back into 1831's main and enter the next unanalyzed function. By now, the premier contents should be immediately recognizable as red flags: hardcoded strings.",
      },
      {
        type: "question",
        question:
          "Think back to our live observation of the malware. What are these strings?",
        correctAnswer: "Bitcoin Addresses",
        field: "q22",
      },
      {
        type: "text",
        value:
          "Move into the subsequent function. Take note of the paramters. Clearly, some file is being opened and edited or read, mode determined by the parameter passed in. Rename the formal parameter as such.",
      },
      {
        type: "question",
        question:
          "Investigate the pointer _Mode is to be assigned if mode equals 0. See if you can assign its data type. What is its value?",
        correctAnswer: "wb",
        field: "q23",
      },
      {
        type: "text",
        value:
          "Moving on, we can see that this opens the 'c.wnry' file according to the supplied mode. Take important note of this. We can assume c.wnry has something to do with the bitcoin transfers.",
      },
      {
        type: "text",
        value:
          "Back out to the parent function. The next few lines simply ensures one of the addresses are written into c.wnry if not already there. Rename the function.",
      },
      {
        type: "image",
        value: "/Logos/bit_to_c.png",
      },
      {
        type: "text",
        value:
          "Back in WinMain, the next two calls are to the same function. Upon a quick look, these hide the program's directory and grant it elevated permissions. Raname this function to your liking. The next function sets kernal32DLL's function pointers, similar to the original binary.",
      },
      {
        type: "subheading",
        value: "Expanding Ghidra: The Kaiju Plugin",
      },
      {
        type: "question",
        question:
          "Look into FUN_00401861. There is one word that marks this function as very different. What is it?",
        correctAnswer: "this",
        field: "q24",
      },
      {
        type: "text",
        value:
          "This means we're looking at C++ code. Unfortunately, Ghidra's decompilation for this C++ code is very messy. To aid our analysis, we'll be employing the Cambridge University developed Kaiju framework for Ghidra.",
      },
    ],
  },
  page6: {
    title: "Automated Dynamic Analysis with Cuckoo Sandbox ",
    content: [{}],
  },
};

export default pagesContent;
