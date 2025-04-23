# Configuration Options for SpriteAI

This guide provides a detailed overview of all configuration options available in SpriteAI, including options for sprite generation, background removal, and other customizable features.

## Sprite Generation

### generateSprite(description, options)

This function generates a sprite based on a given description.

#### Parameters:

- `description` (string): A text description of the character or object to generate.
- `options` (object): An optional configuration object with the following properties:

  - `iterations` (number): Number of iterations to generate. If specified, multiple sprites will be generated.
  - `size` (string): Size of the generated image. Default is "1024x1024".
  - `save` (boolean): If true, saves the generated image to the assets folder.

#### Example:

```javascript
const result = await sprite.generateSprite("a cute robot", {
  iterations: 3,
  size: "512x512",
  save: true
});
```

### generateHouseAsset(description, options)

This function generates a 2D house asset for use in Phaser JS games.

#### Parameters:

- `description` (string): A text description of the house asset to generate.
- `options` (object): An optional configuration object with the following properties:

  - `iterations` (number): Number of iterations to generate. If specified, multiple assets will be generated.
  - `size` (string): Size of the generated image. Default is "1024x1024".

#### Example:

```javascript
const result = await sprite.generateHouseAsset("medieval cottage", {
  iterations: 2,
  size: "512x512"
});
```

## Background Removal

### removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold, options)

This function removes a specific background color from an image.

#### Parameters:

- `inputPath` (string): Path to the input image file.
- `outputPath` (string): Path where the processed image will be saved.
- `targetColor` (string): CSS color string of the background color to remove (e.g., "#FFFFFF").
- `colorThreshold` (number): Tolerance for color matching. Default is 0.
- `options` (object): Additional options (currently not used in the provided code).

#### Example:

```javascript
await removeBackgroundColor("input.png", "output.png", "#FFFFFF", 10);
```

## Utility Functions

### encodeImage(imagePath)

Encodes an image file to base64.

#### Parameters:

- `imagePath` (string): Path to the image file.

#### Returns:

A base64 encoded string of the image.

### getUniqueColors(imagePath, options)

Retrieves an array of unique colors in an image.

#### Parameters:

- `imagePath` (string): Path to the image file.
- `options` (object): Additional options (currently not used in the provided code).

#### Returns:

An array of unique color integers found in the image.

## Notes

- The sprite generation functions use OpenAI's DALL-E 3 model for image creation and GPT-4 Vision for analyzing the generated images.
- The background removal function uses the Jimp library for image processing.
- All image processing functions are asynchronous and return Promises.

For more detailed information on using these functions in your project, please refer to the specific API documentation for each function.