import React, { useRef, useState, useEffect } from 'react';
import ChatWidget from '../components/ChatWidget'; // Adjust path as needed

function Root({ children }) {
    const chatWidgetRef = useRef(null);
    const [askAiButtonVisible, setAskAiButtonVisible] = useState(false);
    const [askAiButtonPosition, setAskAiButtonPosition] = useState({ top: 0, left: 0 });
    const [selectedText, setSelectedText] = useState('');

    const handleMouseUp = () => {
        const selection = window.getSelection();
        if (selection && selection.toString().length > 0) {
            const text = selection.toString();
            setSelectedText(text);
            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();
            setAskAiButtonPosition({
                top: rect.top + window.scrollY - 40, // 40px above selection
                left: rect.right + window.scrollX - 50, // 50px left from right edge of selection
            });
            setAskAiButtonVisible(true);
        } else {
            setAskAiButtonVisible(false);
        }
    };

    const handleAskAiClick = () => {
        if (chatWidgetRef.current && selectedText) {
            chatWidgetRef.current.sendMessageFromOutside(selectedText);
            setAskAiButtonVisible(false); // Hide button after click
        }
    };

    useEffect(() => {
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
            {children}
            {askAiButtonVisible && (
                <button
                    className="ask-ai-button"
                    style={{ top: askAiButtonPosition.top, left: askAiButtonPosition.left }}
                    onClick={handleAskAiClick}
                >
                    Ask AI
                </button>
            )}
            <ChatWidget ref={chatWidgetRef} />
        </>
    );
}

export default Root;
