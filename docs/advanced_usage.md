# Advanced Usage Guide for SpriteAI

## Table of Contents
1. [Introduction](#introduction)
2. [Custom Animation States](#custom-animation-states)
3. [Complex Landscape Generation](#complex-landscape-generation)
4. [Integrating SpriteAI Output into Game Development Workflows](#integrating-spriteai-output-into-game-development-workflows)
5. [Best Practices](#best-practices)

## Introduction

This guide covers advanced usage techniques for SpriteAI, helping you leverage its full potential in your game development projects. We'll explore custom animation states, complex landscape generation, and integration strategies for your game development workflow.

## Custom Animation States

SpriteAI's `generateSprite` function can be extended to create custom animation states beyond the default walking animation.

### Example: Creating a Running Animation

To create a running animation, you can modify the prompt in the `generateSprite` function:

```javascript
const runningSprite = await sprite.generateSprite("running character", {
  iterations: 1,
  size: "1024x1024",
  prompt: `Generate 6 frames of a 24-bit character running, optimized for running animations.
    -The top half of the image should be the frames and the bottom half should be a blank white background.
    -Style should resemble Super Nintendo graphics.
    -The background of each frame should be white, with no extra items.
    -The frames should be two rows with 3 columns each.`
});
```

This will generate a sprite sheet optimized for running animations, which you can then use in your Phaser.js game.

## Complex Landscape Generation

The `generateHouseAsset` function can be utilized to create more complex landscapes and environmental elements.

### Example: Generating a Forest Scene

```javascript
const forestScene = await sprite.generateHouseAsset("dense forest with a winding path", {
  iterations: 1,
  size: "1024x1024"
});
```

This will generate a 2D asset depicting a forest scene that can be used as a background or environment in your game.

## Integrating SpriteAI Output into Game Development Workflows

### Automated Asset Pipeline

You can create an automated asset pipeline by combining SpriteAI with your build process:

1. Define asset requirements in a JSON file.
2. Create a script that reads the JSON and calls SpriteAI functions.
3. Save generated assets to your project's asset folder.
4. Use a build tool like Webpack to include these assets in your game bundle.

Example script:

```javascript
import { sprite } from './spriteAI';
import fs from 'fs';

async function generateGameAssets() {
  const assetRequirements = JSON.parse(fs.readFileSync('assetRequirements.json', 'utf8'));
  
  for (const asset of assetRequirements) {
    if (asset.type === 'sprite') {
      const result = await sprite.generateSprite(asset.description, asset.options);
      // Save the sprite to the assets folder
      fs.writeFileSync(`./assets/${asset.name}.png`, Buffer.from(result.image.split(',')[1], 'base64'));
    } else if (asset.type === 'landscape') {
      const result = await sprite.generateHouseAsset(asset.description, asset.options);
      // Save the landscape to the assets folder
      fs.writeFileSync(`./assets/${asset.name}.png`, Buffer.from(result.data[0].b64_json, 'base64'));
    }
  }
}

generateGameAssets();
```

## Best Practices

1. **Optimize Prompts**: Refine your prompts to get the best results from DALL-E 3. Be specific about style, perspective, and key features.

2. **Iterate and Refine**: Use the `iterations` option to generate multiple versions of an asset, then choose the best one or combine elements from different iterations.

3. **Post-processing**: Apply post-processing techniques using libraries like Sharp or Jimp to further refine generated assets.

4. **Version Control**: Keep track of your prompts and generated assets in version control to maintain consistency across your project.

5. **Performance Considerations**: Generate assets during the development or build phase rather than at runtime to avoid API rate limits and improve game performance.

6. **Error Handling**: Implement robust error handling when working with SpriteAI to manage potential API failures or unexpected results.

By following these advanced techniques and best practices, you can fully leverage SpriteAI to streamline your game asset creation process and focus on building engaging gameplay experiences.