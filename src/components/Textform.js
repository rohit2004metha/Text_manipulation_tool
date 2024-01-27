import React, {useState} from 'react'




export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
    setText((prevText) => {
        const newText = prevText.toLowerCase();
        props.showAlert("Converted to lowercase!", "success");
        return newText;
    });
};

const handleCustomFunction7 = () => {
    setText((prevText) => {
        const lowercaseText = prevText.toLowerCase();
        const capitalizedText = lowercaseText.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        props.showAlert("First Letter Capitalized in Each Word!", "success");
        return capitalizedText;
    });
};







// Apply the same pattern to other functions as needed


    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

   
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    
const handleCustomFunction2 = () => {
    // Custom Function 2: Reverse the text
    const reversedText = text.split('').reverse().join('');
    setText(reversedText);
    props.showAlert("Text Reversed!", "success");
}

const handleCustomFunction3 = () => {
    // Custom Function 3: Convert text to alternating case
    const alternatingCaseText = text.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
    setText(alternatingCaseText);
    props.showAlert("Text Converted to Alternating Case!", "success");
}
    
    const handleCustomFunction6 = () => {
        const numbersInText = text.match(/\d+/g);
        const result = numbersInText ? numbersInText.join(', ') : 'No numbers found';
        props.showAlert(`Numbers in the text: ${result}`, "success");
    }
    

    const handleCustomFunction5 = () => {
        const textWithDashes = text.split(' ').join('_');
        setText(textWithDashes);
        props.showAlert("Spaces Replaced with Slachs!", "success");
    }

   
    
    const handleCustomFunction12 = () => {
        // Custom Function 12: Extract email addresses from the text
        const emailAddresses = text.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g);
        const result = emailAddresses ? emailAddresses.join(', ') : 'No email addresses found';
        props.showAlert(`Email Addresses in the text: ${result}`, "success");
    }
    
    const handleCustomFunction13 = () => {
        // Custom Function 13: Convert text to a numbered list
        const textLines = text.split('\n');
        const numberedText = textLines.map((line, index) => `${index + 1}. ${line}`).join('\n');
        setText(numberedText);
        props.showAlert("Text Converted to Numbered List!", "success");
    }

    const handleCustomFunction21 = () => {
    // Custom Function 21: Replace a specific word with another word (user input)
    const wordToReplace = window.prompt("Enter the word to replace:");
    const replacementWord = window.prompt(`Enter the replacement for "${wordToReplace}":`);

    if (wordToReplace && replacementWord) {
        const updatedText = text.replace(new RegExp(wordToReplace, 'ig'), replacementWord);
        setText(updatedText);
        props.showAlert(`Replaced "${wordToReplace}" with "${replacementWord}"!`, "success");
    } else {
        props.showAlert("Replacement canceled or input invalid.", "danger");
    }
}

const handleCustomFunction26 = () => {
    // Custom Function 26: Remove duplicate lines
    const uniqueLines = Array.from(new Set(text.split('\n'))).join('\n');
    setText(uniqueLines);
    props.showAlert("Duplicate Lines Removed!", "success");
}

const handleCustomFunction31 = () => {
    // Custom Function 31: Generate a random password with user-defined length
    const passwordLengthInput = window.prompt("Enter the desired password length:");
    const passwordLength = parseInt(passwordLengthInput);

    if (!isNaN(passwordLength) && passwordLength > 0) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
        const randomPassword = Array.from({ length: passwordLength }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
        setText(randomPassword);
        props.showAlert(`Random Password (${passwordLength} characters) Generated!`, "success");
    } else {
        props.showAlert("Invalid password length. Please enter a positive integer.", "danger");
    }
}



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
    // Custom Function 41: Sort lines alphabetically
    const sortedText = text.split('\n').sort().join('\n');
    setText(sortedText);
    props.showAlert("Lines Sorted Alphabetically!", "success");
}

const handleCustomFunction43 = () => {
    // Custom Function 43: Sort lines with marks
    const sortedText = text
        .split('\n')
        .sort((a, b) => {
            // Extract the numeric part for sorting (considering only marks)
            const marksA = parseInt(a.match(/[\d]+/) || 0);
            const marksB = parseInt(b.match(/[\d]+/) || 0);

            return marksA - marksB;
        })
        .join('\n');

    setText(sortedText);
    props.showAlert("Lines Sorted with Marks!", "success");
}

const handleCustomFunction44 = () => {
    // Custom Function 44: Sort lines with percentages
    const sortedText = text
        .split('\n')
        .sort((a, b) => {
            // Extract the numeric part for sorting (considering percentages)
            const percentageA = parseFloat(a.match(/[\d.]+%/) || 0);
            const percentageB = parseFloat(b.match(/[\d.]+%/) || 0);

            return percentageA - percentageB;
        })
        .join('\n');

    setText(sortedText);
    props.showAlert("Lines Sorted with Percentages!", "success");
}


    const [text, setText] = useState(''); 
  
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCustomFunction7}>Capitalize First Letter</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCustomFunction2}>Reverse Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCustomFunction3}>Alternating Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCustomFunction6}>Extract Numbers</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCustomFunction5}>Replace Spaces with Shelsh</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCustomFunction12}>Extract Email Addresses</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCustomFunction13}>Convert to Numbered List</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCustomFunction21}>Replace Word</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCustomFunction26}>Remove Duplicate Lines</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCustomFunction31}>Generate Random Password</button>
            {/* <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCustomFunction85}>Translate Text</button> */}
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCustomFunction41}>Sort Lines Alphabetically</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCustomFunction43}>Sort with Marks</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCustomFunction44}>Sort with Percentages</button>






        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}

