# Troubleshooting Guide for SpriteAI Library

This guide aims to help you resolve common issues you might encounter while using the SpriteAI library. We'll cover API-related problems, image processing errors, and unexpected results, as well as provide guidance on interpreting error messages and where to seek further assistance.

## Table of Contents

1. [API-Related Issues](#api-related-issues)
2. [Image Processing Errors](#image-processing-errors)
3. [Unexpected Results](#unexpected-results)
4. [Interpreting Error Messages](#interpreting-error-messages)
5. [Seeking Further Assistance](#seeking-further-assistance)

## API-Related Issues

### Authentication Errors

If you're experiencing authentication issues:

1. Ensure you've set up your OpenAI API key correctly.
2. Check that your API key has the necessary permissions for image generation.

Example of setting up the API key:

```javascript
import OpenAI from "openai";

const openAiObject = new OpenAI({
  apiKey: 'your-api-key-here'
});
```

### Rate Limiting

If you're hitting rate limits:

1. Implement proper error handling for rate limit errors.
2. Consider using exponential backoff for retries.

Example error handling:

```javascript
try {
  const response = await openAiObject.images.generate(/* ... */);
} catch (error) {
  if (error.response && error.response.status === 429) {
    console.log("Rate limit exceeded. Please wait and try again.");
    // Implement retry logic here
  } else {
    console.error("An error occurred:", error);
  }
}
```

## Image Processing Errors

### File Format Issues

Ensure you're using supported image formats (PNG, JPEG) for input and output.

If you encounter format-related errors:

1. Check the file extension of your input images.
2. Verify that the `sharp` library is correctly installed and imported.

Example of using `sharp` for image conversion:

```javascript
import sharp from "sharp";

async function convertToPng(inputPath, outputPath) {
  try {
    await sharp(inputPath).png().toFile(outputPath);
  } catch (error) {
    console.error("Error converting image:", error);
  }
}
```

### Memory Issues

If you're processing large images and encountering memory errors:

1. Consider resizing images before processing.
2. Use streaming methods when possible to reduce memory usage.

Example of resizing an image:

```javascript
import sharp from "sharp";

async function resizeImage(inputPath, outputPath, width, height) {
  try {
    await sharp(inputPath)
      .resize(width, height)
      .toFile(outputPath);
  } catch (error) {
    console.error("Error resizing image:", error);
  }
}
```

## Unexpected Results

### Incorrect Sprite Dimensions

If the generated sprite dimensions are incorrect:

1. Double-check the `frameWidth` and `frameHeight` values in your Phaser.js configuration.
2. Ensure the AI-generated image matches the expected layout (2x3 grid of frames).

Example of loading a sprite with correct dimensions:

```javascript
this.load.spritesheet('character', 'path/to/spritesheet.png', { 
  frameWidth: 341,  // Adjust based on AI output
  frameHeight: 341  // Adjust based on AI output
});
```

### Unexpected Image Content

If the generated images don't match your expectations:

1. Review and refine your prompt in the `generateSprite` or `generateHouseAsset` function.
2. Experiment with different prompts to achieve desired results.

Example of a more detailed prompt:

```javascript
const response = await dalle3.generate({
  model: "dall-e-3",
  prompt: `Generate a 2D pixel art asset of a medieval knight for a top-down RPG game. 
           The knight should be facing forward and have a sword and shield. 
           Use a limited color palette reminiscent of SNES-era games.`,
  n: 1,
  size: "1024x1024",
});
```

## Interpreting Error Messages

Common error messages and their meanings:

- "Invalid API key": Check your OpenAI API key configuration.
- "Rate limit exceeded": You've hit the API rate limit. Implement a backoff strategy.
- "Billing hard limit reached": Your OpenAI account has reached its billing limit.
- "Input image not found": Verify the file path for input images.
- "Unsupported image format": Ensure you're using supported image formats (PNG, JPEG).

## Seeking Further Assistance

If you're still experiencing issues:

1. Check the [OpenAI API documentation](https://platform.openai.com/docs/api-reference) for up-to-date information on API usage.
2. Review the [Jimp documentation](https://github.com/jimp-dev/jimp#readme) for image processing-related issues.
3. Consult the [Sharp documentation](https://sharp.pixelplumbing.com/) for advanced image manipulation techniques.
4. For Phaser.js-specific questions, refer to the [Phaser documentation](https://photonstorm.github.io/phaser3-docs/).
5. If the issue persists, consider opening an issue on the SpriteAI GitHub repository with a detailed description of the problem and steps to reproduce it.

Remember to include relevant code snippets, error messages, and environment details when seeking assistance to help others understand and resolve your issue more effectively.