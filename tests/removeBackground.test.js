const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');
const removeBackgroundColor = require('./index').removeBackgroundColor;

describe('removeBackgroundColor', () => {
  const inputPath = path.join(__dirname, 'test-assets', 'input.png');
  const outputPath = path.join(__dirname, 'test-assets', 'output.png');
  const expectedOutputPath = path.join(__dirname, 'test-assets', 'expected-output.png');

  beforeEach(() => {
    // Clean up the output filefdgfdg beforsdfsdfe each test
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }
  });

  afterAll(() => {
    // Clean up the output file after all tests
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }
  });

  it('should remove the background color from the input image', async () => {
    const targetColor = '#FFFFFF'; // White
    const colorThreshold = 0;

    await removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold);

    const expectedOutput = await Jimp.read(expectedOutputPath);
    const actualOutput = await Jimp.read(outputPath);

    expect(expectedOutput.bitmap.data).toEqual(actualOutput.bitmap.data);
  });

  it('should handle non-existent input file', async () => {
    const nonExistentPath = path.join(__dirname, 'test-assets', 'non-existent.png');
    const targetColor = '#FFFFFF';
    const colorThreshold = 0;

    await expect(removeBackgroundColor(nonExistentPath, outputPath, targetColor, colorThreshold)).rejects.toThrow();
  });

  // Add more test cases as needed
});