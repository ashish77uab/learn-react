import React, { useState, useRef } from 'react';
import Tesseract from 'tesseract.js';

const LotteryNumberExtractor = () => {
    const [image, setImage] = useState(null);
    const [mainNumbers, setMainNumbers] = useState([]);
    const [jackpotNumbers, setJackpotNumbers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const fileInputRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
                extractNumbers(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const extractNumbers = async (imageSrc) => {
        setLoading(true);
        setProgress(0);

        try {
            const { data: { text } } = await Tesseract.recognize(
                imageSrc,
                'eng',
                {
                    logger: m => {
                        if (m.status === 'recognizing text') {
                            setProgress(Math.round(m.progress * 100));
                        }
                    }
                }
            );

            processExtractedText(text);
        } catch (error) {
            console.error('Error extracting text:', error);
        } finally {
            setLoading(false);
        }
    };

    const processExtractedText = (text) => {
        console.log('Raw extracted text:', text);

        // Extract all numbers from the text
        const allNumbers = text.match(/\d+/g) || [];
        const uniqueNumbers = [...new Set(allNumbers.map(num => parseInt(num)))].sort((a, b) => a - b);

        // Based on your image structure, we know:
        // Main numbers: 1-30
        // Jackpot numbers: 1-3

        const mainNums = uniqueNumbers.filter(num => num >= 1 && num <= 30);
        const jackpotNums = uniqueNumbers.filter(num => num >= 1 && num <= 3);

        setMainNumbers(mainNums);
        setJackpotNumbers(jackpotNums);
    };

    // Predefined numbers based on your image description
    const predefinedMainNumbers = Array.from({ length: 30 }, (_, i) => i + 1);
    const predefinedJackpotNumbers = [1, 2, 3];

    const resetExtraction = () => {
        setImage(null);
        setMainNumbers([]);
        setJackpotNumbers([]);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Lottery Number Extractor</h2>

            {/* File Upload */}
            <div className="mb-6">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    ref={fileInputRef}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
            </div>

            {/* Progress */}
            {loading && (
                <div className="mb-6">
                    <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Extracting numbers...</span>
                        <span className="text-sm font-medium">{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            )}

            {/* Results Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Main Numbers */}
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">
                        🎯 Main Numbers (Choose 5)
                    </h3>
                    <p className="text-sm text-green-600 mb-3">Range: 1-30</p>
                    <div className="flex gap-1 flex-wrap">
                        {predefinedMainNumbers.map((number) => (
                            <span
                                key={number}
                                className={`px-2 py-1 rounded text-xs font-medium ${mainNumbers.includes(number)
                                    ? 'bg-green-500 text-white'
                                    : 'bg-green-100 text-green-800'
                                    }`}
                            >
                                {number}
                            </span>
                        ))}
                    </div>
                    <div className="mt-3 p-2 bg-white rounded">
                        <p className="text-sm font-medium">Extracted: {mainNumbers.join(', ') || 'None'}</p>
                        <p className="text-xs text-gray-500">Total: {mainNumbers.length} numbers</p>
                    </div>
                </div>

                {/* Jackpot Numbers */}
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h3 className="text-lg font-semibold text-purple-800 mb-3">
                        💎 Jackpot Numbers (Choose 2)
                    </h3>
                    <p className="text-sm text-purple-600 mb-3">Range: 1-3</p>
                    <div className="flex gap-2">
                        {predefinedJackpotNumbers.map((number) => (
                            <span
                                key={number}
                                className={`px-4 py-2 rounded-lg text-lg font-bold ${jackpotNumbers.includes(number)
                                    ? 'bg-purple-500 text-white'
                                    : 'bg-purple-100 text-purple-800'
                                    }`}
                            >
                                {number}
                            </span>
                        ))}
                    </div>
                    <div className="mt-3 p-2 bg-white rounded">
                        <p className="text-sm font-medium">Extracted: {jackpotNumbers.join(', ') || 'None'}</p>
                        <p className="text-xs text-gray-500">Total: {jackpotNumbers.length} numbers</p>
                    </div>
                </div>
            </div>

            {/* Summary */}
            {(mainNumbers.length > 0 || jackpotNumbers.length > 0) && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Extraction Summary</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <strong>Main Numbers Found:</strong> {mainNumbers.length}/30
                        </div>
                        <div>
                            <strong>Jackpot Numbers Found:</strong> {jackpotNumbers.length}/3
                        </div>
                    </div>
                </div>
            )}

            {/* Manual Override - Since we know the exact numbers from your description */}
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Known Numbers from Image</h4>
                <div className="space-y-2 text-sm">
                    <div>
                        <strong>Main Numbers (1-30):</strong>
                        <span className="ml-2 text-gray-600">1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30</span>
                    </div>
                    <div>
                        <strong>Jackpot Numbers (1-3):</strong>
                        <span className="ml-2 text-gray-600">1, 2, 3</span>
                    </div>
                </div>
            </div>

            {image && (
                <div className="mt-6">
                    <button
                        onClick={resetExtraction}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Extract Another Image
                    </button>

                    <div className="mt-4">
                        <h4 className="font-semibold mb-2">Image Preview:</h4>
                        <img
                            src={image}
                            alt="Uploaded lottery"
                            className="max-w-full h-auto rounded border max-h-64"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default LotteryNumberExtractor;