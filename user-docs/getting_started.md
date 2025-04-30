# Getting Started with SpriteAI

SpriteAI is a powerful library that allows you to generate character spritesheets and landscape sprites for your Phaser JS games using AI. This guide will walk you through the installation process and demonstrate basic usage of the library.

## Installation

To get started with SpriteAI, follow these steps:

1. Ensure you have Node.js installed on your system.
2. Create a new directory for your project and navigate to it in the terminal.
3. Initialize a new Node.js project:

```bash
npm init -y
```

4. Install SpriteAI and its dependencies:

```bash
npm install spriteai openai axios sharp jimp
```

## Basic Usage

### Importing SpriteAI

First, import the SpriteAI library in your JavaScript file:

```javascript
import { sprite } from 'spriteai';
```

### Generating Character Spritesheets

To generate a character spritesheet, use the `generateSprite` function:

```javascript
async function createCharacterSprite() {
  try {
    const result = await sprite.generateSprite('medieval knight');
    console.log(result);
  } catch (error) {
    console.error('Error generating sprite:', error);
  }
}

createCharacterSprite();
```

This will generate a spritesheet with 6 frames of a medieval knight character, optimized for walking animations.

### Generating Landscape Sprites

To generate a landscape sprite, use the `generateHouseAsset` function:

```javascript
async function createLandscapeSprite() {
  try {
    const result = await sprite.generateHouseAsset('medieval castle');
    console.log(result);
  } catch (error) {
    console.error('Error generating landscape sprite:', error);
  }
}

createLandscapeSprite();
```

This will generate a 2D asset depicting a medieval castle that can be used in your Phaser JS game.

## Advanced Options

Both `generateSprite` and `generateHouseAsset` functions accept an optional `options` object as a second parameter. This allows you to customize the generation process:

```javascript
const options = {
  size: '512x512', // Set the size of the generated image
  save: true, // Save the generated image to the assets folder
  iterations: 3 // Generate multiple variations (only for generateHouseAsset)
};

const result = await sprite.generateSprite('elf archer', options);
```

## Library Capabilities

SpriteAI offers the following main features:

1. Character Spritesheet Generation: Create 6-frame spritesheets for walking animations.
2. Landscape Asset Generation: Produce 2D assets for game environments.
3. Multiple Iterations: Generate several variations of landscape assets.
4. Image Processing: Automatically convert images to grayscale and optimize for game use.
5. Integration with OpenAI: Utilizes DALL-E 3 for image generation and GPT-4 for image analysis.

## Next Steps

Now that you're familiar with the basics of SpriteAI, you can start integrating it into your Phaser JS projects. Experiment with different descriptions and options to create unique assets for your games.

For more advanced usage and detailed API documentation, please refer to the other sections of our documentation.