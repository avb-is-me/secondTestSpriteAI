# Troubleshooting Guide for SpriteAI

This guide addresses common issues that users might encounter when using SpriteAI, including problems related to image generation, API interactions, and integration into projects. Follow the step-by-step solutions and explanations for each issue.

## Table of Contents
1. [Image Generation Issues](#image-generation-issues)
2. [API Interaction Problems](#api-interaction-problems)
3. [Project Integration Challenges](#project-integration-challenges)

## Image Generation Issues

### 1. Sprite Generation Fails

**Problem**: The `generateSprite` function is not producing the expected output.

**Solution**:

1. Check your OpenAI API key:
   - Ensure that you have set up your OpenAI API key correctly.
   - Verify that the API key has the necessary permissions for image generation.

2. Validate the description input:
   - Make sure the description is clear and specific.
   - Avoid using overly complex or ambiguous language.

3. Review the options:
   - Check if you're passing the correct options object.
   - Ensure the `size` parameter is one of the supported values (e.g., "1024x1024").

Example of correct usage:

```javascript
const result = await sprite.generateSprite("A pixelated robot character", {
  size: "1024x1024",
  save: true
});
```

### 2. Unexpected Sprite Appearance

**Problem**: The generated sprite doesn't match the description or has unexpected elements.

**Solution**:

1. Refine your prompt:
   - Be more specific in your description.
   - Include details about the style, pose, and any other relevant characteristics.

2. Check the DALL-E 3 prompt:
   - Review the hardcoded prompt in the `generateSprite` function.
   - If necessary, modify the prompt to better suit your needs (requires code change).

3. Adjust grayscale conversion:
   - If the sprite lacks color diversity, consider removing the grayscale conversion:

```javascript
// Comment out or remove this line
// let grayImageBuffer = await sharp(imgBuffer).ensureAlpha().greyscale().toBuffer()
```

## API Interaction Problems

### 1. OpenAI API Rate Limiting

**Problem**: Encountering rate limit errors when making multiple requests.

**Solution**:

1. Implement rate limiting in your code:
   - Add a delay between API calls using `setTimeout` or a rate-limiting library.

2. Use exponential backoff:
   - Implement a retry mechanism with increasing delays between attempts.

Example implementation:

```javascript
async function retryWithBackoff(fn, maxRetries = 3) {
  let retries = 0;
  while (retries < maxRetries) {
    try {
      return await fn();
    } catch (error) {
      if (error.response && error.response.status === 429) {
        const delay = Math.pow(2, retries) * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
        retries++;
      } else {
        throw error;
      }
    }
  }
  throw new Error('Max retries reached');
}

// Usage
await retryWithBackoff(() => sprite.generateSprite("description"));
```

### 2. API Response Parsing Errors

**Problem**: Errors when parsing the API response from OpenAI.

**Solution**:

1. Check API version compatibility:
   - Ensure you're using the latest version of the OpenAI npm package.
   - Update your package.json and run `npm install`.

2. Validate the response structure:
   - Log the full API response for debugging.
   - Compare the response structure with the OpenAI API documentation.

3. Use error handling:
   - Implement try-catch blocks to handle potential parsing errors.

Example:

```javascript
try {
  const response = await openAiObject.chat.completions.create({
    // ... your API call parameters
  });
  console.log(JSON.stringify(response, null, 2)); // Log full response
  // Process the response
} catch (error) {
  console.error("API Error:", error.message);
  // Handle the error appropriately
}
```

## Project Integration Challenges

### 1. Importing SpriteAI Module

**Problem**: Difficulty importing the SpriteAI module into a project.

**Solution**:

1. Check your project structure:
   - Ensure the SpriteAI module is correctly placed in your project directory.

2. Verify import statement:
   - Use the correct path in your import statement.
   - If using CommonJS, change `import` to `require`.

3. Configure your project for ES modules:
   - Add `"type": "module"` to your package.json file.
   - Or use the `.mjs` extension for your files.

Example import statement:

```javascript
import { sprite } from './path/to/spriteai/index.js';
// or for CommonJS
// const { sprite } = require('./path/to/spriteai/index.js');
```

### 2. Handling Asynchronous Operations

**Problem**: Issues with asynchronous operations when using SpriteAI functions.

**Solution**:

1. Use async/await syntax:
   - Ensure all SpriteAI function calls are properly awaited.

2. Implement proper error handling:
   - Use try-catch blocks around async operations.

3. Consider using Promise.all for multiple operations:
   - If generating multiple sprites, use Promise.all to handle them concurrently.

Example:

```javascript
async function generateMultipleSprites(descriptions) {
  try {
    const spritePromises = descriptions.map(desc => sprite.generateSprite(desc));
    const sprites = await Promise.all(spritePromises);
    return sprites;
  } catch (error) {
    console.error("Error generating sprites:", error);
    throw error;
  }
}

// Usage
const descriptions = ["Robot", "Alien", "Superhero"];
const results = await generateMultipleSprites(descriptions);
```

By following this troubleshooting guide, you should be able to resolve common issues encountered when using SpriteAI. If you continue to experience problems, please refer to the official OpenAI documentation or seek support from the SpriteAI community.