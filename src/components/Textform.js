import React, { useState } from "react";
import './styles.css';


export default function TextForm(props) {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = inputText.toUpperCase();
    setOutputText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
      const newText = inputText.toLowerCase();
      props.showAlert("Converted to lowercase!", "success");
      setOutputText(newText)
  };

  //To capitailize first letter
  const handleCustomFunction7 = () => {
      const lowercaseText = inputText.toLowerCase();
      const capitalizedText = lowercaseText
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      props.showAlert("First Letter Capitalized in Each Word!", "success");
      setOutputText(capitalizedText)
  };

  const handleClearClick = () => {
    let newText = "";
    setOutputText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setInputText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    props.showAlert("Copied to Clipboard!", "success");
  };

  // const handlePaste = () => {
  //   navigator.clipboard
  //     .readText()
  //     .then((pastedText) => {
  //       setText(pastedText);
  //       props.showAlert("Text Pasted!", "success");
  //     })
  //     .catch((error) => {
  //       console.error("Error pasting text:", error);
  //       props.showAlert("Failed to paste text.", "danger");
  //     });
  // };

  const handleExtraSpaces = () => {
    let newText = inputText.split(/[ ]+/);
    setOutputText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleCustomFunction2 = () => {
    const reversedText = inputText.split("").reverse().join("");
    setOutputText(reversedText);
    props.showAlert("Text Reversed!", "success");
  };

  const handleCustomFunction3 = () => {
    const alternatingCaseText = inputText
      .split("")
      .map((char, index) =>
        index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      )
      .join("");
    setOutputText(alternatingCaseText);
    props.showAlert("Text Converted to Alternating Case!", "success");
  };

  const handleCustomFunction6 = () => {
    const numbersInText = inputText.match(/\b\d+\b/g); // Match standalone numbers
    const result = numbersInText ? numbersInText.join(", ") : "No numbers found";
    setOutputText(result);
    props.showAlert(`Numbers in the text: ${result}`, "success");
  };
  

  const handleCustomFunction5 = () => {
    const textWithDashes = inputText.split(" ").join("_");
    setOutputText(textWithDashes);
    props.showAlert("Spaces Replaced with Slachs!", "success");
  };

  const handleCustomFunction12 = () => {
    const emailAddresses = inputText.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g); // Match typical email patterns
    const result = emailAddresses ? emailAddresses.join(", ") : "No email addresses found";
    setOutputText(result);
    props.showAlert(`Email Addresses in the text: ${result}`, "success");
  };
  
  

  const handleCustomFunction13 = () => {
    const textLines = inputText.split("\n");
    const numberedText = textLines
      .map((line, index) => `${index + 1}. ${line}`)
      .join("\n");
    setOutputText(numberedText);
    props.showAlert("Text Converted to Numbered List!", "success");
  };

  const handleCustomFunction21 = () => {
    const wordToReplace = window.prompt("Enter the word to replace:");
    const replacementWord = window.prompt(
      `Enter the replacement for "${wordToReplace}":`
    );

    if (wordToReplace && replacementWord) {
      const updatedText = inputText.replace(
        new RegExp(wordToReplace, "ig"),
        replacementWord
      );
      setOutputText(updatedText);
      props.showAlert(
        `Replaced "${wordToReplace}" with "${replacementWord}"!`,
        "success"
      );
    } else {
      props.showAlert("Replacement canceled or input invalid.", "danger");
    }
  };

  const handleCustomFunction26 = () => {
    const uniqueLines = Array.from(new Set(inputText.split("\n"))).join("\n");
    setOutputText(uniqueLines);
    props.showAlert("Duplicate Lines Removed!", "success");
  };

  const handleCustomFunction31 = () => {
    const passwordLengthInput = window.prompt(
      "Enter the desired password length:"
    );
    const passwordLength = parseInt(passwordLengthInput);

    if (!isNaN(passwordLength) && passwordLength > 0) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
      const randomPassword = Array.from(
        { length: passwordLength },
        () => characters[Math.floor(Math.random() * characters.length)]
      ).join("");
      setOutputText(randomPassword);
      props.showAlert(
        `Random Password (${passwordLength} characters) Generated!`,
        "success"
      );
    } else {
      props.showAlert(
        "Invalid password length. Please enter a positive integer.",
        "danger"
      );
    }
  };

  // const handleCustomFunction85 = async () => {
  //     // Custom Function 85: Translate text using the RapidAPI Microsoft Text Translation API (user input)
  //     const targetLanguage = window.prompt("Enter the target language code (e.g., 'es' for Spanish):");

  //     if (targetLanguage) {
  //         try {
  //             const response = await fetch(`https://rapidapi.p.rapidapi.com/translate?text=${encodeURIComponent(text)}&to=${targetLanguage}`, {
  //                 method: 'GET',
  //                 headers: {
  //                     'X-RapidAPI-Host': 'microsoft-text-translation.p.rapidapi.com',
  //                     'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace with your actual RapidAPI key
  //                 },
  //             });

  //             const data = await response.json();

  //             if (response.ok && data && data.text) {
  //                 setText(data.text);
  //                 props.showAlert(`Text Translated to ${targetLanguage.toUpperCase()}!`, "success");
  //             } else {
  //                 console.log("Translation API response:", data);
  //                 props.showAlert("Translation failed. Please check the language code or try again later.", "danger");
  //             }
  //         } catch (error) {
  //             console.error("Error translating text:", error);
  //             props.showAlert(`Failed to translate text. Error: ${error.message}`, "danger");
  //         }
  //     } else {
  //         props.showAlert("Translation operation canceled or input invalid.", "danger");
  //     }
  // }

  const handleCustomFunction41 = () => {
    const sortedText = inputText.split("\n").sort().join("\n");
    setOutputText(sortedText);
    props.showAlert("Lines Sorted Alphabetically!", "success");
  };

  const handleCustomFunction43 = () => {
    const sortedText = inputText
      .split("\n")
      .sort((a, b) => {
        const marksA = parseInt(a.match(/[\d]+/) || 0);
        const marksB = parseInt(b.match(/[\d]+/) || 0);

        return marksA - marksB;
      })
      .join("\n");

    setOutputText(sortedText);
    props.showAlert("Lines Sorted with Marks!", "success");
  };

  const handleCustomFunction44 = () => {

    const sortedText = inputText
        .split('\n')
        .map(line => {

            const percentages = line.match(/[\d.]+%/g);
            if (percentages) {

                const sortedPercentages = percentages.sort((a, b) => {
                    const percentageA = parseFloat(a);
                    const percentageB = parseFloat(b);
                    return percentageA - percentageB;
                });
                return line.replace(/[\d.]+%/g, () => sortedPercentages.shift());
            } else {
                return line;
            }
        })
        .sort()
        .join('\n');

    setOutputText(sortedText);
    props.showAlert("Lines Sorted with Percentages!", "success");
};

  // Define other text manipulation functions...

  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3 row" style={{ display: "flex" }}>
          <textarea
            className="form-control "
            // value={inputText}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
              width: "50%", marginRight: "20px" , flex: "1",
            }}
            id="myBox"
            rows="8"
            placeholder="Enter your text here..."
          ></textarea>
          <textarea
            className="form-control "
            value={outputText}
            onChange={handleOnChange}
            readOnly
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
              width: "50%", flex: "1",
            }}
            id="outputBox"
            rows="8"
            placeholder = "Output appear here..."
          ></textarea>
        </div>
        
        <button
          disabled={inputText.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={inputText.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={inputText.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCustomFunction7}
        >
          Capitalize First Letter
        </button>
        <button
          disabled={inputText.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={inputText.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        {/* <button  disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1" onClick={handlePaste}>
          Paste Text
        </button> */}
        <button
          disabled={inputText.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={inputText.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCustomFunction2}
        >
          Reverse Text
        </button>
        <button
          disabled={inputText.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCustomFunction3}
        >
          Alternating Case
        </button>
        <button
          disabled={inputText.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCustomFunction6}
        >
          Extract Numbers
        </button>
        <button
          disabled={inputText.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCustomFunction5}
        >
          Replace Spaces with Underscore
        </button>
        <button
          disabled={inputText.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCustomFunction12}
        >
          Extract Email Addresses
        </button>
        <button
          disabled={inputText.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCustomFunction13}
        >
          Convert to Numbered List
        </button>
        <button
          disabled={inputText.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCustomFunction21}
        >
          Replace Word
        </button>
        <button
          disabled={inputText.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCustomFunction26}
        >
          Remove Duplicate Lines
        </button>
        <button
          disabled={inputText.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCustomFunction31}
        >
          Generate Random Password
        </button>
        <button
          disabled={inputText.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCustomFunction41}
        >
          Ascend Lines Alphabetically
        </button>
        <button
          disabled={inputText.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCustomFunction43}
        >
          Ascend Lines with Marks 
        </button>
        <button
          disabled={inputText.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCustomFunction44}
        >
          Ascend Lines with Percentage
        </button>
        </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            inputText.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {inputText.length} characters
        </p>
        <p>
          {0.008 *
            inputText.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{inputText.length > 0 ? inputText : "Nothing to preview!"}</p>
      </div>
    </>
  );
}

