# Quickstart Guide for SpriteAI

SpriteAI is a powerful tool for generating game assets using AI. This guide will help you get started with installing the library and using its main functions to create character spritesheets and landscape sprites.

## Installation

To get started with SpriteAI, follow these steps:

1. Ensure you have Node.js installed on your system.
2. Create a new directory for your project and navigate to it in your terminal.
3. Initialize a new Node.js project:

   ```bash
   npm init -y
   ```

4. Install SpriteAI and its dependencies:

   ```bash
   npm install spriteai openai axios sharp jimp
   ```

5. Create a new file named `index.js` in your project directory.

## Basic Usage

### Importing SpriteAI

In your `index.js` file, start by importing the necessary modules:

```javascript
import { sprite } from 'spriteai';
import OpenAI from 'openai';
```

### Setting up OpenAI

Before using SpriteAI, you need to set up your OpenAI API key:

```javascript
const openai = new OpenAI({ apiKey: 'your-api-key-here' });
```

Replace `'your-api-key-here'` with your actual OpenAI API key.

### Generating a Character Spritesheet

To generate a character spritesheet, use the `generateSprite` function:

```javascript
async function generateCharacterSpritesheet() {
  try {
    const result = await sprite.generateSprite('pixel art warrior', { size: '1024x1024' });
    console.log('Character Spritesheet:', result);
  } catch (error) {
    console.error('Error generating character spritesheet:', error);
  }
}

generateCharacterSpritesheet();
```

This will generate a 1024x1024 pixel art warrior spritesheet with 6 frames optimized for walking animations.

### Generating a Landscape Sprite

To generate a landscape sprite, use the `generateHouseAsset` function:

```javascript
async function generateLandscapeSprite() {
  try {
    const result = await sprite.generateHouseAsset('medieval castle', { size: '1024x1024' });
    console.log('Landscape Sprite:', result);
  } catch (error) {
    console.error('Error generating landscape sprite:', error);
  }
}

generateLandscapeSprite();
```

This will generate a 1024x1024 2D asset depicting a medieval castle that can be used in a Phaser.js game.

## Advanced Options

Both `generateSprite` and `generateHouseAsset` functions accept an options object as their second parameter. Some useful options include:

- `size`: Specify the size of the generated image (e.g., '1024x1024', '512x512').
- `save`: Set to `true` to save the generated image to the local file system.
- `iterations`: Generate multiple variations of the sprite (only for `generateHouseAsset`).

Example with advanced options:

```javascript
const result = await sprite.generateSprite('pixel art warrior', {
  size: '512x512',
  save: true
});
```

## Next Steps

Now that you've generated your first sprites using SpriteAI, you can:

1. Experiment with different descriptions to create various characters and landscapes.
2. Integrate the generated sprites into your Phaser.js game.
3. Explore the `removeBackgroundColor` and `getUniqueColors` functions in the SpriteAI library for additional image processing capabilities.

Remember to refer to the OpenAI documentation for rate limits and best practices when making API calls.

Happy sprite generating!