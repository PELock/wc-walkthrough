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
        id: "1",
      },
      {
        type: "text",
        value:
          "You will be taking the role of digital forensic analyst and are tasked with dissecting this virus: Uncovering and analyzing its behavior and functionality. You will be leveraging modern open source tools used by cybersecurity professionals.",
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

        correctAnswer: "Infected",
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
        type: "subheading",
        value: "Dynamic Analysis",
        id: "1",
      },
      {
        type: "image",
        value: "/Logos/prelaunch_fn.png",
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
      {
        type: "text",
        value:
          "When you're ready, revert your virtual machine's state back to the snapshot you took earlier. The next part is incredibly important: Add a host-only or internal network adapter. This is necessary to use our next analysis tool. ",
      },

      {
        type: "text",
        value:
          "One of the most--if not the most-- important components of any malware is how it propagates. Most commonly, malware will interact with victim networks in some fashion, whether through the Server Message Block, like WannaCry, through email phishing, or through some other internet service. ",
      },
      {
        type: "image",
        value: "/Logos/highlight_fn.png",
      },
      {
        type: "text",
        value:
          "There is a myriad of network analyzers and packet sniffers available, but we will be utilizing FLAREVM's software Fakenet-ng. Fakenet is an open-source network emulator, and is used to 'trick' programs into thinking they're connected to the internet. If you want to learn more, click the link on the resources page. Launch Fakenet.",
      },

      {
        type: "image",
        value: "/Logos/launch_fn2.png",
      },
      {
        type: "text",
        value:
          "Visit your favorite website. See what happens. Often, requests are made for resources we never know are being accessed and loaded. Try running some programs on your device which might need access to the internet.",
      },
      {
        type: "text",
        value:
          "Once you feel comfortable, we're ready to understand how our virus interacts with the internet. It is now essential that you ensure your machine's network adapter is host-only or on an internal network. Once again, execute WannaCry.",
      },
      {
        type: "image",
        value: "/Logos/infected_fn.png",
      },
      {
        type: "box",
        question:
          "See what's different. Research codes. Interact with the ransom page. Take note of anything unusual that you think might help in our analysis of this malware.",
      },
    ],
  },

  page3: {
    title: "Reverse Engineering with Ghidra",
    content: [
    
  
      { type: "subheading", value: "Analyzing the Binary", id: "1" },
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
        id: "2",
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
        id: "1",
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
          "It's time to put one of the main skills of a reverse engineer to work: recognition and renaming. As we work to discover the intent of the author of code, it is integral that we rework the code so that it becomes more understandable to us. Moving forward, we are going to look for recognizable snippets and functions to rename in a manner that pieces the puzzle together.",
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
        id: "2",
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
        id: "3",
      },

      {
        type: "chronological",
        question:
          "Arrange the control flow and function calls in chronological order.",
        field: "wannacryChronology",
        events: [
          {
            id: "event1",
            content: "WannaCry executable checks killswitch URL",
          },
          {
            id: "event2",
            content: "Tasksche.exe is run with /i argument",
          },
          {
            id: "event3",
            content: "Real_entry is entered",
          },
          { id: "event4", content: "Microsoft Security Center service runs" },
        ],
        correctOrder: [
          {
            id: "event1",
            content: "WannaCry executable checks killswitch URL",
          },
          { id: "event4", content: "Microsoft Security Center service runs" },
          {
            id: "event3",
            content: "Real_entry is entered",
          },
          {
            id: "event2",
            content: "Tasksche.exe is run with /i argument",
          },
        ],
      },
      {
        type: "subheading",
        value: "Examining Resource 1831",
        id: "4",
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
          "Think back to our live analysis of the virus. What kind of addresses do these strings look like?",

        correctAnswer: "bitcoin ",
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
          "We can assume that this function creates an entry relevant to our current working directry in the registry. Set the function name to something relevant and move back into WinMain.",
      },
    ],
  },
  page5: {
    title: "Preparing the Victim",
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
        id: "1",
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
          "This means we're looking at C++ code. Unfortunately, Ghidra's decompilation for this C++ code is very messy. To aid our analysis, we'll be employing the Cambridge University developed Kaiju framework for Ghidra. The Kaiju framework includes a myriad of tools, but we will be focusing on the JSON importer. This tool facilitates the integration of Ghidra;s decompilation with C++ Class information derived by another CERT tool called OOanalyzer. OOanalyzer was developed in response to the challenge ofstatically analyzing object-oriented code. Ensure now that Ghidra's 'Kaiju' menu is active. If not, simply go to File > Configure.",
      },
      {
        type: "image",
        value: "/Logos/configure.png",
      },
      {
        type: "text",
        value:
          "OOanalyzer relies on the Pharos Docker image to run and therefore relies on virtualization. As nested virtualization can be difficult to implement depending on your host hardware, you have been supplied with the OOanalyzer output on your analysis machine. In practice, it would be your responsibility to either implement this or run the Docker image on your host machine. Import the R1831.json file now.",
      },
      {
        type: "image",
        value: "/Logos/oo_1.png",
      },
      {
        type: "box",
        question:
          "The syntax may seem intimidating, but take a moment to familiarize yourself with the three-term structure. What do each of them signify?",
      },
      {
        type: "text",
        value:
          "Note the first and last OOanalyzer functions. The cls methods denote constructors or destructors, and their parameter are the object invoked upon. Moving into the first method in WinMain--dubbed method 1 for simplicity--we can't make much immediate sense. However, if we investigate the listing for the initial DAT and check its other references, we come across another function which reveals its identity.",
      },
      {
        type: "question",
        question: "What is the name of the process that this DAT is assigned?",
        correctAnswer: "CryptAcquireContext",
        field: "q34",
      },
      {
        type: "image",
        value: "/Logos/crypt_pointers.png",
      },
      {
        type: "question",
        question:
          "Find this function which assigns these globals to various crypto process addresses. Upon investigating meth_401861 further, we can determine that it imports a cryptographic key and allocates two class fields. This allocation is notable not just because it is global, but because it allocates how much memory? One ________.",
        correctAnswer: "megabyte",
        field: "q35",
      },
      {
        type: "question",
        question:
          "Move back into the function which imports the Crypto key. The key is stored in a Global DAT buffer. By investigating it further, what is it? Provide the listing value.",
        correctAnswer: "RSA2",
        field: "q36",
      },

      {
        type: "subheading",
        value: "The Extracted DLL",
        id: "2",
      },
      {
        type: "text",
        value:
          "The next method in WinMain is responsible for decrypting t.wnry with the integrated or file-retrieved RSA key. The decryption of t.wnry results in a DLL. ",
      },
      {
        type: "text",
        value:
          "The extraction and analysis of this DLL is slightly tedious. You are welcome to investigate on your own, though you have been provided with the DLL binary to analyze. Import dll.dec and analyze it with the same settings as before and jump in when you're ready.",
      },
      {
        type: "image",
        value: "/Logos/taskstart.png",
      },
      {
        type: "text",
        value:
          "Recall this call to the TaskStart function in R1831. This calls one of the two named functions in the extracted DLL, so let's begin there. ",
      },
      {
        type: "list",
        listElements: [
          {
            list: "We first see three operations which are pretty characteristic of an initialization function:",
            text: "1. The function acquires a mutex to ensure resource protection and management.",
          },
          {
            text: "2. The current path is acquired by GetModuleFileNameW",
          },
          {
            text: "3. The current directory is entered.",
          },
        ],
      },
      {
        type: "text",
        value:
          "Set a foundation for our analysis by commenting and renaming functions to your liking. ",
      },
      {
        type: "text",
        value: "Below these functions is an interesting segment of code:",
      },
      {
        type: "image",
        value: "/Logos/taskstart_prints.png",
      },
      {
        type: "question",
        question:
          "This function copies what file into memory? Rename the appropriate parameter of this function and move on.",
        correctAnswer: "c.wnry",
        field: "q37",
      },
      {
        type: "text",
        value:
          "As we now know what this unknown (UNK_) data structure's specified field actually is, rename the field to the file name.",
      },
      {
        type: "image",
        value: "/Logos/unknown_dtype.png",
      },
      {
        type: "text",
        value:
          "If you encountered some error like this, it's because Ghidra can't actually access the field to rename it unless it has a more specific understanding of the data structures's fields. Open the DataType Manager window to configure this dtype.",
      },
      {
        type: "image",
        value: "/Logos/dtype_manager.png",
      },
      {
        type: "text",
        value:
          "Once you start to configure your new struct, there are a few key details in almost every case you need tp consider:",
      },
      {
        type: "text",
        value:
          "1. The name of your new struct. It must be appropriate for the use case and easy to find later.",
      },
      {
        type: "text",
        value:
          "2. The size / number of fields. Take another look at the UNK_ global and its field. What is the minimum number of fields it can have?",
      },
      {
        type: "question",
        question: "Enter numeral.",
        correctAnswer: "2",
        field: "q38",
      },
      {
        type: "question",
        question:
          "At what byte offset is the field we're interested in located? Enter the hex value.",
        correctAnswer: "0x4",
        field: "q39",
      },
      {
        type: "text",
        value:
          "Creating structure definitions in reverse engineering is often iterative. We know there must be these fields, but the structure may have more and be larger. To address this, we need to supply the struct with an estimated size based on what we already know.",
      },
      {
        type: "image",
        value: "/Logos/struc_editor_1.png",
      },
      {
        type: "text",
        value:
          "Notice the new field put into the function in TaskStart takes on the field name you just created. If you further attempt to change it and you get the same error, making new fields without knowing their size can be challenging.",
      },
      {
        type: "text",
        value:
          "It's often better to wait until you come across another field and need to edit the new struct to accomodate it.",
      },
      {
        type: "text",
        value:
          "The next function gets the current user, and checks if running as system to ensure the malware has system privileges. Below that, another function acquires handles to some file functions. Rename those so we recognize them later on.",
      },
      {
        type: "text",
        value:
          "Check out the next few lines. This creates three strings, formated as eight zeroes followed by .res, .eky, and .pky. Rename the globals they're stores in. (If there are any issues with the Globals not being separate, clear the bytes in the listing) Below, a mutex is acquired-- if successful, another critical part of this initialization function is entered.",
      },
      {
        type: "question",
        question:
          "The function within the conditional statement is immediately interesting because it introduces what new type of file? \nJust state the extension. ",
        correctAnswer: ".dky",
        field: "q40",
      },
      {
        type: "image",
        value: "/Logos/conditional_dky_func.png",
      },
      {
        type: "text",
        value:
          "This function is quite apparently a wrapper function with error handling to ensure the integrity of the .dky and .pky files before performing some operation, located in a new critical section. Explore that function now.",
      },
      {
        type: "box",
        question:
          "Document your observations and theories on what the functionality of this code is. Include any significant globals, files, and functionality.",
      },
      {
        type: "subheading",
        value: "Encryption and Decryption",
        id: "3",
      },
      {
        type: "text",
        value:
          "From your previous analysis, it should be clear that the function in the conditional statement imports the .dky and and the .pky files as crypto keys and tests them with crypto encryption and decryption calls against some test data stored in some globals. The function in the critical section does this and ensures successful encryption and decryption of its test data. If successful and both files exist, the conditional block is skipped over.",
      },
      {
        type: "box",
        question:
          "Using this knowledge and your intuition, what does this conditional block do?",
      },
      {
        type: "text",
        value:
          "Finally, we can move onto the threads. The ransomware has ensured it can decrypt and encrypt data and is ready to attack its victims' files.",
      },
      {
        type: "box",
        question:
          "The first two threads are quite simple. Analyze them now-- rename variables and functions and state your observations. ",
      },
      {
        type: "list",
        listElements: [
          {
            text: "Hint: In the second thread, why would the malware authors want to concurrently repeat the encryption and decryption process we just saw it successfully executed? Keep this iterative process in mind when we examine what happens on encryption/decryption failure...",
          },
        ],
      },
      {
        type: "image",
        value: "/Logos/getLogicalDrives.png",
      },
      {
        type: "text",
        value:
          "The first thing this thread does is call getLogicalDrives(). This function returns all drives connected to the system. ",
      },
      {
        type: "text",
        value:
          "This includes your hard drive, any cd's, or anything else. Rename this Dvar2 to 'drives' and continue.",
      },
      {
        type: "text",
        value:
          "Lines 18 and 19 reveal the intent behind this very interesting function. getLogicalDrives() is called again and compared to the previous value via xor. So, if any new drives were added during this process, some action would be taken in this new thread. Let's check it out! ",
      },
      {
        type: "text",
        value:
          "In our current function, there are several other functions called below. To make sense of what's happening, we can begin by examining our local stack variables. What stands out is a large buffer, passed to almost all of the functions here. ",
      },
      {
        type: "text",
        value:
          "Since we've already noticed this pattern, let's try to trace our parent function's functionality by following this buffer and its use, instead of going one by one through each child function. When following this approach, it can often be helpful to rename the formal parameter (which you're tracing) once you've entered its function.",
      },
      {
        type: "gif",
        value: "/Logos/unknown_buffer.gif",
      },
      {
        type: "text",
        value:
          "This function appears to prepare different offsets in the buffer, likely establishing separate sections to represent separate information. Not very helpful. Return back into the parent.",
      },
      {
        type: "text",
        value:
          "Naturally, we want to keep following this buffer; however, the next function which calls it is inside a conditional statement and it's important we understand why it is being entered. So... look at the function which has a return value stored in ivar1.",
      },
      {
        type: "text",
        value:
          "Work sequentially to find out what these parameters are. (This is especially important because the LABEL parameter actually denotes a function.)",
      },
      {
        type: "list",
        listElements: [
          {
            list: "First Parameter: pky key",
            text: "There is some functionality with the pky key, which we've already established is a crypto key used for decryption/encryption.",
          },
          {
            list: "Second Parameter: Label (Function address)",
            text: "Create a function at this location so we can reverse it.",
          },
          {
            list: "Third Parameter: DAT variable",
            text: "Investigate this global in the listing. Find a reference to a function we've already explored to understand what it contains. ",
          },
        ],
      },
      {
        type: "text",
        value:
          "The function in the conditional clause doesn't offer much information; move on to the next. Rename its formal parameters.",
      },
      {
        type: "question",
        question:
          "For the second parameter, trace back through the threads and find its value from the lpParam value. What is it? The number of what?",
        correctAnswer: "drives",
        field: "41",
      },
      {
        type: "text",
        value:
          "This function instantly offers useful information in the form of GetDriveType.  ",
      },
      {
        type: "list",
        listElements: [
          {
            list: "To recap: ",
          },
          {
            list: "I",
            text: "The parent function retrieves all logical drives, then launches a thread for each drive.",
          },
          {
            list: "II",
            text: "It then checks the drive for its type.",
          },
          {
            list: "III",
            text: "CONCAT22 is typically used to combine two 16-bit values into a single 32-bit value. The \"22\" in the name likely refers to combining two 2-byte (16-bit) values. (short)drive_number + 65 creates the ASCII value for a drive letter: If drive_number is 0, 65 ('A') is added to create 'A'; If drive_number is 1, it creates 'B', and so on.",
          },
          {
            list: "IV",
            text: "It then supposedly performs some other action based on the type of drive. Let's see where this leads.",
          },
        ],
      },
      {
        type: "text",
        value:
          "The next conditional clause checks if the third parameter is 0; it is. In this path, it ensures that the current drive is valid (using the drive type 'C: etc.' and the stack variables, which likely form the rest of the drive string info.) and has open space, rechecking every second for 30 seconds. ",
      },
      {
        type: "image",
        value: "/Logos/drive_types.png",
        size: "small",
      },
      {
        type: "question",
        question:
          "This table is taken from the windows documentation for GetDriveTypeW. Based on these entries, what kind of drive does the malware ignore?",
        correctAnswer: "CD_ROM",
        field: "42",
      },
      {
        type: "question",
        question: "Which type does it attack?",
        correctAnswer: "DRIVE_FIXED",
        field: "43",
      },
      {
        type: "text",
        value:
          "This makes sense because CD_ROM drives refers to external drives that your computer can not write to, but can read (for example... a CD). Fixed drives are those permanently installed, such as a hard drive. The documentation also includes flash-drives. Think back to before, where GetLogicalDrives was called in the parent thread. This means that if any drives were installed while the malware was already running, the malware supposedly spreads! This is a red flag that this thread is a main actor -- for either the ransomware or exploitation. Rename this function according to its purpose and move into the next function.",
      },
      {
        type: "text",
        value:
          'The "_format" variable is C for representing the current drive. It is once against assigned the letter with the ASCII concatenation. As our drive number is 3, _Format contains the value \'C\'. We then see the malware establish a temporary directory if Windows is on the supplied drive. Rename the function to something like "Create_Temp_Directory".',
      },
      {
        type: "question",
        question: "The next function generates a path for what file extension?",
        correctAnswer: ".wncryt",
        field: "44",
      },
      {
        type: "subheading",
        value: "Kaiju Import",
      },
      {
        type: "text",
        value:
          "Up until now, you may have seen some C++ code. We've been able to glean enough from the source C not to need to import the C++ json file, but the last function we're faced with is indecipherable without it. You've been provided with the OOanalyzer output for the decrypted DLL. Import it now through Kaiju as before.",
      },
      {
        type: "image",
        value: "/Logos/dll_meth.png",
      },
      {
        type: "text",
        value:
          'Look at the last function here. This is another example of a decompilation mistake by Ghidra. As it is a method, its first parameter, "unaff_returnaddr", should be an instance of a class. The second parameter is the path for the current drive, and the third is the value 1. Once you enter the function, rename the formal parameters before we examine it. ',
      },

      {
        type: "list",
        listElements: [
          {
            text: "An essential skill for reverse engineering is understanding ways the decompiled data could possibly be represented, or--in our case--misrepresented. Likewise, an essential part of understanding this method is understanding a subtelty of C programming and a basic structure in C: linked lists. Heads of linked lists may be implemented as int**.",
          },
        ],
      },
      { type: "text", value: "Notice the following int**, local14:" },
      {
        type: "image",
        value: "/Logos/local14.png",
      },
      {
        type: "list",
        listElements: [
          {
            text: "Tracking the different occurences of local14 in this function is very important to understanding its usage. To better track a variable, go to 'Edit > Tools > Listing Fields > Cursor Text Highlight' and switch to left click.",
          },
        ],
      },
      {
        type: "text",
        value:
          "We see that local 14 has some strange assignments with itself. Given that we suspect this may be a linked list, we should create a new data type to represent it as such. Using your experience with structure creation, create a new structure for a doubly linked list node. ",
      },
      { type: "image", value: "/Logos/linked_list.png" },
      {
        type: "text",
        value:
          "Retype plvar5 and 6 and give them new names to help us understand what's going on. Now, move onto the first function. Ghidra incorrectly decompiled this, so we'll need to edit the function signature and remove the unsigned integer parameter. Once this is done, notice the type cast below and retype local_18, which is passed into the previously mentioned function. Enter the function, and ensure you rename all the formal parameters inside. Moving on, some retyping is necessary. Approach your 'local_a40' and retype it so your decompilation goes from this: ",
      },
      {
        type: "image",
        value: "/Logos/list_retype_1.png",
        size: "small",
      },
      {
        type: "text",
        value: "To this:",
      },
      {
        type: "image",
        value: "/Logos/list_retype_2.png",
        size: "small",
      },
      {
        type: "text",
        value:
          "Now rename it so you know it's a list. A file handle below is created to find each file with the provided path as a directory.",
      },
      {
        type: "question",
        question: "What is prepended to the path?",
        correctAnswer: "*",
        field: "45",
      },
      {
        type: "image",
        value: "/Logos/dataw.png",
        size: "small",
      },
      {
        type: "text",
        value:
          "Moving on, a file handle is acquired. FirstFileW, of course, finds the first file with the provided path. According to the Windows API documentation, the second parameter stores the found file's associated information. ",
      },
      {
        type: "text",
        value:
          "Below, the file is checked to be valid (not -1). Let's assume this is true and move on to the else block. ",
      },
      {
        type: "question",
        question:
          "What kind of file does the first function in the else block create? A ---- file.",
        correctAnswer: "temp",
        field: "46",
      },
      {
        type: "text",
        value:
          "Below, examine the conditional block which tests if the file is created:",
      },
      {
        type: "list",
        listElements: [
          {
            list: "This code block is performing several filtering operations on files during a directory traversal:",
            text: "",
          },
          {
            list: '1. First, it checks that the current filename is not ".." (parent directory)',
          },
          {
            list: "2. Constructs a full file path using swprintf() with the current path and filename",
          },
          {
            list: "3. Checks if the current item is NOT a directory (found_file_data & 0x10 checks directory flag)",
          },
          {
            list: "4. If a temporary file was created, it further filters out specific files:",
            text: 'Excludes "@Please Read Me.txt"',
          },
          { text: 'Excludes "@WanaDecryptor@.exe.lnk"' },
          {
            text: 'Excludes "@WanaDecryptor@.bmp"',
          },
          {
            list: "5. If certain conditions are met (iStack_10 = FUN_10002d60(awStack_9e4)), it:",
            text: "Copies the filename and full path",
          },
          {
            text: "Calls meth_0x10003760() to add the file to the linked list",
          },
        ],
      },
      {
        type: "text",
        value:
          "The certain conditions are made clear after a quick look into FUN_10002d60. This is where WC checks to see what kind of file it's processing. For instance, one condition checks if it's a .wncry file... meaning it's already been encrypted.",
      },
      {
        type: "question",
        question:
          "Move below to find a pointer to the list of filenames WC checks the given file against. Which is the first on the list? Just provide the extension.",
        correctAnswer: "docx",
        field: "47",
      },
      {
        type: "text",
        value:
          "Move back out and observe that WC checks to see if the file has one of the extensions on its hardcoded list and then adds it to a linked list with 3760(). This is where WannaCry is preparing its list of files to be encrypted. It skips over its own files--it certainly doesn't want to encrypt those--and any directory paths. It iteratively checks if the directory is a parent directory, moving throughout your file system and encrypting everything it sees. Let's move on to see how it accomplishes this.",
      },
    ],
  },
  page6: {
    title: "The Encryption",
    content: [
      {
        type: "subheading",
        value: "Recap",
      },
      {
        type: "chronological",
        question:
          "Arrange the control flow and function calls in chronological order.",
        field: "wannacryChronology",
        events: [
          {
            id: "3",
            content:
              "WannaCry loads in crypto keys for encryption and decryption.",
          },
          {
            id: "4",
            content:
              "A procedure for detecting and encrypting new drives begins. ",
          },
          {
            id: "2",
            content: "R1831 calls TaskStart, the main ransomware function.",
          },
          {
            id: "1",
            content: "Decrypting t.wnry results in a DLL.",
          },
          {
            id: "5",
            content: "Vulnerable files are iteratively added to a list.",
          },
        ],
        correctOrder: [
          {
            id: "1",
            content: "Decrypting t.wnry results in a DLL.",
          },
          {
            id: "2",
            content: "R1831 calls TaskStart, the main ransomware function.",
          },
          {
            id: "3",
            content:
              "WannaCry loads in crypto keys for encryption and decryption.",
          },
          {
            id: "4",
            content:
              "A procedure for detecting and encrypting new drives begins. ",
          },
          {
            id: "5",
            content: "Vulnerable files are iteratively added to a list.",
          },
        ],
      },
      {
        type: "text",
        value:
          "Line 132 on appears to be another systematic traversal, but not on the file system. This code traverses through the collected victim files.",
      },
      {
        type: "image",
        value: "/Logos/process_file_loop.png",
      },
      {
        type: "text",
        value:
          "This loop performs some action on each element of our list and then calls method 3760 again to add to another list. Could the action performed finally be the encryption?",
      },
      {
        type: "subheading",
        value: "For each file...",
      },
      {
        type: "text",
        value: "Line 8 classifies the file.",
      },
      {
        type: "image",
        value: "/Logos/line8.png",
        size: "small",
      },
      {
        type: "text",
        value:
          "There is only one function in and after the switch statement, so we'll look here for answers. Similarly, this function's main functionality is in meth_0x10001960. ",
      },
      {
        type: "image",
        value: "/Logos/enc_wrapper.png",
      },
      {
        type: "box",
        question:
          "We have finally arrived at the core of WannaCry's encryption. It's now up to you to figure out what's goin on. How does WC encrypt the user's files? Where are the extensions changed? Which API functions and crypto keys are used? ",
      },
    ],
  },
  page7: {
    title: "The Worm",
    content: [
      {
        type: "text",
        value:
          "Now that we have uncovered the inner workings of WannaCry's encryption, persistence, and system control, there is one crucial element we have so far left untouched: the worm. ",
      },
      {
        type: "text",
        value:
          "Until now, we've only dissected half of the original real_entry function. We know there's a propagation component, but we've seen no evidence in tasksche.exe or anywhere else we've looked. Let's go back to the beginning. We need to explore and see what happens when the WannaCry executable is launched with arguments, meaning this is not part of the initial file encryption. We observe the service configuration being changed with the parameter '2', Upon investigation, this is likely an error handler.",
      },
      {
        type: "question",
        question:
          "Moving on, we can see the Microsoft Security Center process being set up in a service table entry structure. What is the structure's name?",
        correctAnswer: "Sstack_10",
        field: "q30",
      },
      {
        type: "text",
        value:
          "Rename the variable accordingly. Observe the assigned value of the service process. This is a label, another Ghidra-assignment for a section of code that it cannot recognize. It is critical to note that LAB denotes unrecognized functions, while DAT denotes unrecognized data. By locating it in the assembly, you can use Ghidra's 'create function' utility. Rename it fittingly.",
      },
      {
        type: "image",
        value: "/Logos/init_mssec.png",
      },
      {
        type: "text",
        value:
          "The service initialization function registers a handle and then calls another function. Investigate the latter. The first function called to initializes a certain Windows API library. ",
      },
      {
        type: "question",
        question:
          "This library is essential for certain network operation. This is our first clue that this may have something to do with WannaCry's propagation component. What is the name of the library being initialized?",
        correctAnswer: "Winsock",
        field: "q31",
      },

      {
        type: "text",
        value:
          "The second function call obtains a handle to a crytographic provider and initializes a critical section, a measure ensuring resource protection. The final function is very special. ",
      },
      {
        type: "box",
        question:
          "Take a moment to try and figure out what is going on. What is being manipulated? To what end?",
      },
      {
        type: "text",
        value:
          "One of the less obscure parts of this function are the two DAT variables. These are the destinations in memory of the contents of the file being pointed at.",
      },
      {
        type: "question",
        question:
          "What is the name of the file which is stored in memory? Rename the Globals and their parent function.",
        correctAnswer: "WC.exe",
        field: "q32",
      },
      {
        type: "image",
        value: "/Logos/wc_copy.png",
      },
      {
        type: "text",
        value:
          "We can confirm that this is the method by which the program copies itself in preparation to propagate. Proceed into the second thread initialized in the mssec process. ",
      },
      {
        type: "text",
        value:
          "The function gets the current time and its process information. It then seeds a random number generator with these parameters. Rename these variables accordingly. The next functions utilizes cryptographic random number generation. ",
      },
      {
        type: "text",
        value:
          "Other than showing us the malware authors were dedicated to their craft, this convoluted random number generation implies that random, secure generation is essential to this function. Keep track of and rename any variables that random numbers are stored into.",
      },
      {
        type: "text",
        value:
          "After renaming all the variables up to the call to sprintf that uses the format string, it is clear what is happening. These random values are being used to dynamically generate random IP addresses! ",
      },
      {
        type: "question",
        question:
          "Now that we know that Ip addresses are being enumerated, where do we go next?",
        correctAnswer: "FUN_00407480",
        field: "q27",
      },
      {
        type: "text",
        value:
          "This function appears to be attempting to establish a TCP connection to a specific IP address and port.",
      },
      {
        type: "question",
        question: "What port is being connected to?",
        correctAnswer: "445",
        field: "q28",
      },
      {
        type: "question",
        question: "What service is this port typically used for?",
        correctAnswer: "SMB",
        field: "q29",
      },
      {
        type: "text",
        value:
          "The function is determining viable IP addresses and then sending packets to viable connections. Move back into the parent function and explore the final undefined function. ",
      },
      {
        type: "box",
        question:
          "This thread is very similar to the previously analyzed thread, with one key difference. Describe that key difference and its implications for the malware's propagation.",
      },
      {
        type: "subheading",
        value: "Recap",
        id: "1",
      },
      {
        type: "chronological",
        question: "Arrange the control flow in chronological order.",
        field: "wormRecap",
        events: [
          {
            id: "event3",
            content:
              "Analysis of the service initialization function shows it registers a handle and calls another function, initializing a Windows API library essential for network operations (Winsock).",
          },
          {
            id: "event1",
            content:
              "The investigation begins by revisiting the original real_entry function to explore the worm's propagation mechanism, which has not yet been fully analyzed.",
          },
          {
            id: "event8",
            content:
              "Attempts to establish a TCP connection to IP addresses on port 445, which is commonly associated with the SMB (Server Message Block) protocol.",
          },
          {
            id: "event4",
            content:
              "The subsequent function obtains a handle to a cryptographic provider and initializes a critical section to protect shared resources, preparing the malware for further action.",
          },
          {
            id: "event10",
            content: "A second thread is created with a key difference.",
          },
          {
            id: "event2",
            content:
              "The WannaCry executable, when launched with specific arguments, alters the service configuration, potentially indicating an error handler involved in propagation.",
          },
          {
            id: "event6",
            content:
              "Uses the current time and process information to seed a random number generator, emphasizing the importance of secure, random number generation for its operations.",
          },
          {
            id: "event7",
            content:
              "AThese random numbers are used to dynamically generate random IP addresses, which the malware then attempts to connect to, indicating its worm-like spreading behavior.",
          },
          {
            id: "event5",
            content:
              "The analysis identifies two memory locations (DAT variables) that store the file contents, revealing how WannaCry copies itself in preparation for propagation",
          },
          {
            id: "event9",
            content:
              "Sends packets to these viable IP addresses, further probing network vulnerabilities and attempting to spread to other systems.",
          },
        ],
        correctOrder: [
          {
            id: "event1",
            content:
              "The investigation begins by revisiting the original real_entry function to explore the worm's propagation mechanism, which has not yet been fully analyzed.",
          },
          {
            id: "event2",
            content:
              "The WannaCry executable, when launched with specific arguments, alters the service configuration, potentially indicating an error handler involved in propagation.",
          },
          {
            id: "event3",
            content:
              "Analysis of the service initialization function shows it registers a handle and calls another function, initializing a Windows API library essential for network operations (Winsock).",
          },
          {
            id: "event4",
            content:
              "The subsequent function obtains a handle to a cryptographic provider and initializes a critical section to protect shared resources, preparing the malware for further action.",
          },
          {
            id: "event5",
            content:
              "The analysis identifies two memory locations (DAT variables) that store the file contents, revealing how WannaCry copies itself in preparation for propagation",
          },
          {
            id: "event6",
            content:
              "Uses the current time and process information to seed a random number generator, emphasizing the importance of secure, random number generation for its operations.",
          },
          {
            id: "event7",
            content:
              "AThese random numbers are used to dynamically generate random IP addresses, which the malware then attempts to connect to, indicating its worm-like spreading behavior.",
          },
          {
            id: "event8",
            content:
              "Attempts to establish a TCP connection to IP addresses on port 445, which is commonly associated with the SMB (Server Message Block) protocol.",
          },
          {
            id: "event9",
            content:
              "Sends packets to these viable IP addresses, further probing network vulnerabilities and attempting to spread to other systems.",
          },
          {
            id: "event10",
            content: "A second thread is created with a key difference.",
          },
        ],
      },
      {
        type: "subheading",
        value: "The exploit",
        id: "2",
      },
      {
        type: "text",
        value:
          "We have discerned WannaCry's method of copying itself and gathering both local and random global IP addresses. We know that it attempts a connection to the SMB service. What we don't know, however, is where the famous exploit is employed. Return to the first thread which finds and sends packets to machines on your local network. Go through to the next thread and then the next. This function has a series of other functions which send different SMB packets to the IP address given to the parent. These different functions are likely responsible for different stages of the infection process. These stages are typically as follows: Testing Connection > Testing Vulnerability > Delivering Payload.",
      },
      {
        type: "text",
        value:
          "Before we proceed, we must discover the red flags to look for to determine where WannaCry is exploiting the victim machine and delivering its payload. To this end, we will research the SMB vulnerability, the DoublePulsar Backdoor, and the EternalBlue exploit, all of which we are aware WannaCry attempts to employ in its exploitation of its victims. We will investigate each of these individually and apply the information to our analysis.",
      },
      {
        type: "image",
        value: "/Logos/blackberry_1.png",
      },
      {
        type: "gif",
        value: "/Logos/packets.gif",
      },
      {
        type: "text",
        value:
          "Notice the strcpy which initializes the stack variable as the internet address. Observe each function's parameters--at least the internet address and the SMB port--and functionality as they send their packets to the victim machine. Enter the first of these functions. This function--for simplicity, dubbed 'send_packets_2' sends a series of packets, which contain unknown contents currently displayed as buffer variables. Let's look into these buffers to figure out what WannaCry is trying to do.",
      },
      {
        type: "text",
        value:
          "Go to the first buffer's location in the listing. Immediately, the header tells us all we need to know; the SMB header, followed by some other letter. SMB headers are structured in such a way that the hex value immediately after the 'S' 'M' 'B' reveals the command. Research the code. ",
      },
      {
        type: "question",
        question: "What is the command associated with this code?",
        correctAnswer: "SMB_COM_NEGOTIATE",
        field: "q37",
      },
      {
        type: "text",
        value:
          "Rename the global buffer according to its command. Do this with the next buffer. It is clear that this code is attempting to communicate and conduct a transaction. We can assume this is some kind of test, as there is no evidence of a payload. There is a lengthy test performed at the end of this function, involving several local variables that confusingly have been assigned no value. It is a deceptive idiosyncracy of decompiled C code at work here: often, when local variables are declared together, they are typically laid out sequentially on the stack. When this happens, and they are not assigned a value but contain one, it indicates that they are parts of the same larger buffer that the decompiler interpereted incorrectly or ineffieciently. It should also pique our interest that local_400 is assigned a char value. This indicates that it is actually the beginning of the buffer. Retype it now to a char[1024], as its size is indicated in the send and recv functions.",
      },
      {
        type: "text",
        value:
          "Our code is now much more succinct. It turns out the decompiler just gave different names to different offsets in our buffer!",
      },
      {
        type: "image",
        value: "/Logos/local_400.png",
      },
      {
        type: "text",
        value:
          "Let's deconstruct this. After WC sends the SMB transaction packet, it receives a response from the targeted machine. It then parses the response to check for some code. This code involves '5', '2', '0', and a misleading '-40'. The final segment is interesting because -0x40, in hex, is 0xC0. Here is the moment WannaCry shines. If we reverse these values, because of little-endian representation, we are presented with 0xC0000205, also known as STATUS_INSUFF_SERVER_RESOURCES, and finally also known as the the flag of a machine vulnerable to MS17-010. Congratulations. We have found the location of the exploits.",
      },
      {
        type: "text",
        value:
          "Jump back into the parent function and rename the exploit-check function. Notice that if the machine is vulnerable to the exploit, a loop is entered, calling two other functions which send another series of SMB packets. Now that we know the MS17-010 exploit was checked by sending a series of packets and examining the final message, trace through the function to find the final SMB flag of the packet sent, rename accordingly and examine the checked result. Research this sent package and the returned hex code. What is the name of the vulnerability indicated? ",
      },
      {
        type: "question",
        question: " ",
        correctAnswer: "doublepulsar",
        field: "q38",
      },
      {
        type: "text",
        value:
          "This exploit is an example of a backdoor, a method commonly used by both authorized administrators and unauthorized malicious actors alike to bypass typical security measures and get high level access. Therefore, WannaCry uses this function to check for the double pulsar backdoor. The previous function outside the loop checks if the machine is vulnerable to employment of the backdoor.",
      },
      {
        type: "box",
        question:
          "Observe the looping mechanism. Predict why WannaCry checks for the doublepulsar exploit several times and sleeps. Where does this fourth function come in? Can we predict what it will do?",
      },
      {
        type: "text",
        value:
          "Explore the final function. For now, we can assume this is the payload delivery mechanism. Rename it accordingly and get ready to dive in. Proceed with your analysis, renaming, and retyping as you've learned so far before we jump into the child functions. ",
      },
      {
        type: "text",
        value:
          "Using your intuition, determine which function might contain the payload functionality. Depending on how Ghidra processes this code, the function we're analyzing may have an incorect signature. Look at the call. How can you fix this?",
      },
      {
        type: "image",
        value: "/Logos/func_sig.png",
      },
      {
        type: "subheading",
        value: "Delivering the Payload",
        id: "3",
      },
      {
        type: "box",
        question:
          "Explore this function. Collect and define familiar global variables, unique functions, strings, flags, etc. ",
      },
      {
        type: "text",
        value:
          "This function is the final stage of payload delivery; it serves as an excellent example of how malicious actors perform their attack. The copies of the worm executable are accessed here. Notice their assigned sizes. The two copies of different sizes are likely used for different architectures, variant attacks, etc. The payload is delivered in what is known in malware analysis as chunking, done to obfuscate and decrease the chances of detection compared to the delivery of a large, single payload. The propagation of this malware classifies it as a worm because of it is highly infectious and self-replicating. Its replication is highly complex, utilizing high level exploitation, modularity, network operations, and resource management. Our analysis has revealed that WannaCry is an extremely dangerous malware, and--if not for the kill switch and Marcus Hutchins--could have permanently damaged government and commercial infrastructure around the world.",
      },
    ],
  },
  page8: {
    title: "Cuckoo Sandbox",
    content: [
      {
        type: "text",
        value:
          "Now that we have explored the source code of the virus, we will move on to a final step which will give us a broader, thorough understanding of the virus.",
      },
      {
        type: "text",
        value:
          "An invaluable piece of malware analysis is exploring previous documentation. Especially in extremely infectous malware or phishing scams, other victims and analysts will report malware, often recognized by some moniker like WannaCry or their MD5/SHA hash. A wonderful tool for investigating whether our subject of analysis has been previously identified is Cuckoo Sandbox. Cuckoo is an open-source dynamic analysis platform which offers free automated dynamic analysis built on clean and isolated virtualization. ",
      },
      {
        type: "text",
        value:
          "To reach cuckoo, you will have to reconfigure your virtual machine to add a network adapter. Proceed with caution and open Cuckoo in the browser. Submit the file for analysis and ensure the machine option is set to Windows.",
      },
      {
        type: "image",
        value: "/Logos/cuckoo_submit.png",
      },
      {
        type: "text",
        value: "Analyze now.",
      },
      {
        type: "text",
        value:
          "Post-analysis, go to the recent tab and find your submitted sample. Depending on your browser, you will likely encounter some variant of this warning. This is expected and a persistent side-effect of working with malware samples on the internet. Disregard and proceed.",
      },
      {
        type: "image",
        value: "/Logos/browser_error.png",
      },
      {
        type: "image",
        value: "/Logos/cuckoo_summary.png",
      },
      {
        type: "text",
        value:
          "The initial summary confirms much of what we already know. The file is extremely suspicious and high-risk. It provides information about the worm and that this sample is the version that was released in the initial attack. It also relays the relationship to EternalBlue and the DoublePulsar back door.",
      },
      {
        type: "text",
        value:
          "Our summary also provides us with a list of Yara rules, a python-based tool which is used commonly in the field of malware analysis for pattern-matching to identify and classify malware. In future analyses, you will be certain to make use of Yara. The analysis communicates which packer was used; if this is known, an analyst may use an unpacking tool to automatically perform what we did manually in our static analysis. Packing is a form of obfuscation, used to make static analysis more challenging.",
      },
      {
        type: "question",
        question:
          "What is the entropy value of this file? Round to four digits.",
        correctAnswer: "0.9460",
        field: "q33",
      },
      {
        type: "text",
        value:
          "The entropy value of a file is a measurement of unpredictability or randomness in its code. The primary contribution to this file is packing and encryption, as well as the cryptography in number generation. Finally, WannaCry's determination of virtual network adapters, performed in the MSSEC 2.0 service--the vehicle of WannaCry's propagation, resulted in stalling and malware analysis evasion. ",
      },
      {
        type: "text",
        value:
          "The use of such automated tools is a valuable part of malware analysis, but is not a substitute for the work we have done--rather, it complements and reinforces our discoveries and conclusions.",
      },
    ],
  },
  page9: {
    title: "Final Results",
    content: []
  }
};

export default pagesContent;
