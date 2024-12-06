import React from "react";
import { useNavigate } from "react-router-dom";


const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" min-h-screen text-white bg-slate-950 font-fira ">
        <button
          onClick={() => navigate("/")}
          className="ui-btn mt-4 px-4 py-2 text-white font-fira text-lg absolute right-0  z-10 "
        >
          <span>Home</span>
        </button>

        <div className="text-4xl p-4 pt-10   ">About</div>
        <div className="p-4">
          <p>
            In cybersecurity education, there is a notable deficit in thorough,
            hands-on training for malware analysis. This project aims to address
            this deficit by providing a model educational walkthrough and
            supplement in the form of an example module. The walkthrough
            addresses this gap by engaging students in both dynamic and static
            analysis of the WannaCry malware, fostering active learning and
            critical thinking. Designed to immerse students in malware analysis,
            the module allows them to observe and interpret malware behavior in
            a controlled environment (dynamic analysis) and dissect its code and
            structure (static analysis). By using modern, open-source tools,
            students gain a comprehensive understanding of the malware's
            operations and potential impacts. This approach, combined with
            handling sensitive malware in a controlled setting, aims to foster
            responsibility and independence. Active engagement ensures students
            grasp theoretical concepts and develop essential problem-solving
            skills. Contemporary literature suggests that such comprehensive,
            hands-on education significantly enhances practical skills and
            prepares students for real-world challenges.
          </p>
          <br></br>
          <h1 className="text-2xl pb-4"> Module Summary</h1>
          <p>
            The module first introduces students to the primary method of safely
            analyzing malware via virtualization, known as live/dynamic
            analysis, as well as network emulation. The module moves on to its
            primary focus—static analysis with the NSA-developed reverse
            engineering framework and decompiler Ghidra. Students will be
            exposed to many techniques used by professional malware analysts,
            such as unpacking, reversing obfuscation, disassembly analysis,
            renaming, and data flow analysis. The final step in the analysis is
            automated dynamic analysis via Cuckoo Sandbox, a web-based malware
            analysis sandbox which executes malware and leverages its database
            of known malware functionality and characteristics to provide the
            analyst with new information and insights.
          </p>
          <br></br>
          <h1 className="text-2xl pb-4">Important Notice</h1>
          <p>
            This educational walkthrough involves working with malware,
            including the WannaCry ransomware, in a controlled environment. It
            is critical that all participants understand the potential risks and
            adhere strictly to the following guidelines to ensure their safety
            and the safety of their systems:
          </p>
          <br></br>
          <li>
            Always perform malware analysis in an isolated and controlled
            virtual environment (e.g., virtual machines). Do not execute malware
            on your personal or any non-isolated systems.
          </li>
          <li>
            Ensure your analysis environment is completely disconnected from the
            internet to prevent accidental spread or communication with
            malicious servers.
          </li>
          <li>
            This walkthrough is for educational purposes only. It is intended to
            enhance your understanding of cybersecurity and malware analysis.
            Any misuse of the provided materials is strictly prohibited and may
            violate ethical and legal standards.
          </li>
          <br></br>
          <p>
            By proceeding, you acknowledge that you understand these risks and
            agree to follow all precautions outlined in this walkthrough.
            Failure to comply can result in severe consequences, including
            damage to systems, networks, or legal implications.
          </p>
          <br></br>
          <p className="">
            For more information or questions, please email ecr00012@mix.wvu.edu
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
