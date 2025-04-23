# SpriteAI API Reference

This document provides a comprehensive API reference for SpriteAI, detailing all public functions, their parameters, return values, and usage examples. The reference covers both the main library functions and the SDK functions.

## Table of Contents

1. [sprite.generateSprite()](#spritegeneratesprite)
2. [sprite.generateHouseAsset()](#spritegeneratehouseasset)
3. [removeBackgroundColor()](#removebackgroundcolor)
4. [encodeImage()](#encodeimage)
5. [getUniqueColors()](#getuniquecolors)

## Main Library Functions

### sprite.generateSprite()

Generates a sprite sheet based on a given description.

#### Parameters

- `description` (string): A description of the character to generate.
- `options` (object, optional): Configuration options for the sprite generation.
  - `iterations` (number, optional): Number of iterations to generate.
  - `size` (string, optional): Size of the generated image (default: "1024x1024").
  - `save` (boolean, optional): Whether to save the generated image to disk.

#### Returns

- If `options.iterations` is not set:
  - An object containing:
    - `messages`: JSON object with frameHeight and frameWidth.
    - `image`: Base64-encoded image data URL.
- If `options.iterations` is set:
  - An array of objects, each containing:
    - `messages`: JSON object with frameHeight and frameWidth.
    - `image`: Base64-encoded image data URL.

#### Usage Example

```javascript
import { sprite } from 'spriteai';

const result = await sprite.generateSprite('a pixelated knight', {
  size: '1024x1024',
  save: true
});

console.log(result.messages);
console.log(result.image);
```

### sprite.generateHouseAsset()

Generates a 2D house asset for use in a Phaser JS game.

#### Parameters

- `description` (string): A description of the house asset to generate.
- `options` (object): Configuration options for the asset generation.
  - `iterations` (number, optional): Number of iterations to generate.
  - `size` (string, optional): Size of the generated image (default: "1024x1024").

#### Returns

- If `options.iterations` is not set:
  - The response object from the DALL-E 3 API.
- If `options.iterations` is set:
  - An array of response objects from the DALL-E 3 API.

#### Usage Example

```javascript
import { sprite } from 'spriteai';

const result = await sprite.generateHouseAsset('medieval cottage', {
  size: '1024x1024'
});

console.log(result);
```

## Utility Functions

### removeBackgroundColor()

Removes a specified background color from an image.

#### Parameters

- `inputPath` (string): Path to the input image file.
- `outputPath` (string): Path where the processed image will be saved.
- `targetColor` (string): CSS color string of the background color to remove.
- `colorThreshold` (number, optional): Threshold for color matching (default: 0).
- `options` (object, optional): Additional options (not specified in the provided code).

#### Returns

- A promise that resolves with the result of the image write operation.

#### Usage Example

```javascript
import { removeBackgroundColor } from 'spriteai';

await removeBackgroundColor('input.png', 'output.png', '#FFFFFF', 5);
```

### encodeImage()

Encodes an image file to a base64 string.

#### Parameters

- `imagePath` (string): Path to the image file.

#### Returns

- A base64-encoded string representation of the image.

#### Usage Example

```javascript
import { encodeImage } from 'spriteai';

const base64Image = encodeImage('path/to/image.png');
console.log(base64Image);
```

### getUniqueColors()

Retrieves an array of unique colors present in an image.

#### Parameters

- `imagePath` (string): Path to the image file.
- `options` (object, optional): Additional options (not specified in the provided code).

#### Returns

- A promise that resolves with an array of unique color integers.

#### Usage Example

```javascript
import { getUniqueColors } from 'spriteai';

const colors = await getUniqueColors('path/to/image.png');
console.log(colors);
```