# Character Spritesheet Generation

This guide provides a detailed explanation of how to use the `generateSprite` function to create character spritesheets for your Phaser.js games. We'll cover the available options, how to customize animation states, and best practices for creating high-quality character spritesheets.

## Table of Contents

1. [Introduction](#introduction)
2. [Function Overview](#function-overview)
3. [Basic Usage](#basic-usage)
4. [Available Options](#available-options)
5. [Customizing Animation States](#customizing-animation-states)
6. [Best Practices](#best-practices)
7. [Error Handling](#error-handling)

## Introduction

The `generateSprite` function is a powerful tool that leverages AI to create character spritesheets for your Phaser.js games. It uses DALL-E 3 to generate the initial images and GPT-4 Vision to analyze and provide frame dimensions.

## Function Overview

```javascript
async generateSprite(description, options = {})
```

- `description`: A string describing the character you want to generate.
- `options`: An optional object to customize the generation process.

## Basic Usage

To generate a basic character spritesheet, you can use the function as follows:

```javascript
import { sprite } from './path/to/spriteModule';

const result = await sprite.generateSprite('a cartoon cat');
console.log(result.messages); // Contains frame dimensions
console.log(result.image); // Base64 encoded image data
```

This will generate a spritesheet with 6 frames of a cartoon cat character, optimized for walking animations.

## Available Options

The `options` object can include the following properties:

- `size`: The size of the generated image (default: "1024x1024")
- `save`: Boolean to indicate whether to save the image to disk (default: false)
- `iterations`: Number of different versions to generate (default: 1)

Example with options:

```javascript
const result = await sprite.generateSprite('a robot warrior', {
  size: "512x512",
  save: true,
  iterations: 3
});
```

## Customizing Animation States

While the current implementation focuses on walking animations, you can customize the prompt to generate different animation states. For example:

```javascript
const runningSprite = await sprite.generateSprite(
  'a superhero running at high speed',
  { size: "1024x1024" }
);
```

## Best Practices

1. **Be Specific**: Provide clear and detailed descriptions for best results.
2. **Consistent Style**: Use similar prompts for characters in the same game to maintain a consistent art style.
3. **Iterate**: Use the `iterations` option to generate multiple versions and choose the best one.
4. **Optimize File Size**: Use the `size` option to generate smaller images if you don't need high resolution.
5. **Post-Processing**: Consider using image editing tools to refine the generated spritesheets if necessary.

## Error Handling

The `generateSprite` function may throw errors in case of API issues or invalid inputs. Always wrap your calls in a try-catch block:

```javascript
try {
  const result = await sprite.generateSprite('a medieval knight');
  // Process the result
} catch (error) {
  console.error('Error generating sprite:', error);
}
```

Remember that the generated spritesheets are AI-created and may require some post-processing or adjustments to fit perfectly into your game. Always review the output and make necessary modifications to ensure the best quality for your project.