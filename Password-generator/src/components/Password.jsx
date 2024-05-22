import React, { useCallback, useEffect, useState, useRef } from "react";

const Password = () => {
    const [length, setLength] = useState(4);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null)

    const copyToClipBoard = useCallback(() => {
        passwordRef.current?.se
        Window.navigator.clipboard.writeText(password)
    }, [password])

    const passwordField = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "<>?,./;:[]{}|`~!@#$%^&*()_-";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass);
    }, [length, numberAllowed, charAllowed]);

    useEffect(() => {
        passwordField();
    }, [length, numberAllowed, charAllowed, passwordField]);

    return (
        <>
            <h1 className="bg-gray-500 m-4 text-white text-xl p-4 rounded">Password Generator</h1>
            <div className="mb-4">
                <div className="flex items-center">
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded w-full"
                        value={password}
                        placeholder="Password"
                        ref={passwordRef}
                        readOnly
                    />
                </div>
                <button onClick={copyToClipBoard}>Copy</button>
            </div>

            <div className="mb-4">
                <div className="flex items-center">
                    <input
                        type="range"
                        min={4}
                        max={20}
                        value={length}
                        className="cursor-pointer mr-4"
                        onChange={(e) => setLength(e.target.value)}
                    />
                    <label className="text-gray-700">Length: {length}</label>
                </div>
            </div>

            <div className="mb-4">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        defaultChecked={numberAllowed}
                        id="numberInput"
                        className="mr-2"
                        onChange={() => setNumberAllowed((prev) => !prev)}
                    />
                    <label htmlFor="numberInput" className="text-gray-700">Numbers</label>
                </div>
            </div>

            <div className="mb-4">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        defaultChecked={charAllowed}
                        id="charInput"
                        className="mr-2"
                        onChange={() => setCharAllowed((prev) => !prev)}
                    />
                    <label htmlFor="charInput" className="text-gray-700">Characters</label>
                </div>
            </div>
        </>
    );
}

export default Password;
