# Advanced Customization for SpriteAI

This guide covers advanced customization techniques for the SpriteAI library, including fine-tuning prompts, adjusting image processing parameters, and creating custom sprite generation workflows.

## Fine-tuning Prompts

The SpriteAI library uses AI-generated prompts to create sprite sheets. You can customize these prompts to achieve specific results.

### Sprite Generation Prompt

The `generateSprite` function uses a detailed prompt to generate sprite sheets. Here's how you can customize it:

```javascript
const prompt = `I NEED to test how the tool works with extremely simple prompts. DO NOT add any detail, just use it AS-IS.
Generate 6 frames of a 24-bit character of the requested character of ${description}, optimized for walking animations.
Other Instructions:

-The top half of the image should be the frames and the bottom half should be a blank white background with nothing in it.
-Style should resemble Super Nintendo graphics.
-The background of the image, and frame should just be the color white, with no extra items, lines, text, or grids.
-The frames should be two rows with 3 columns each, so a 2 by 3 table.
`;
```

You can modify this prompt to:
- Change the number of frames
- Alter the style (e.g., from Super Nintendo to another game console era)
- Adjust the layout of the frames
- Add specific details about the character or animation

### House Asset Generation Prompt

For generating house assets, the prompt is simpler:

```javascript
const prompt = `Generate a 2D asset that I could use with a phaser JS game depitcing a (an) ${description}.`;
```

You can enhance this prompt by adding:
- Specific architectural styles
- Time period references
- Environmental context (e.g., "in a snowy landscape")

## Adjusting Image Processing Parameters

### Color Removal

The `removeBackgroundColor` function allows for precise color removal:

```javascript
async function removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold = 0, options = {}) {
  // ... function implementation ...
}
```

Customize this function by:
- Adjusting the `colorThreshold` to control how strictly the color matching is performed
- Modifying the `options` parameter to include additional processing steps

### Grayscale Conversion

In the sprite generation process, images are converted to grayscale:

```javascript
let grayImageBuffer = await sharp(imgBuffer).ensureAlpha().greyscale().toBuffer()
```

You can adjust this process by:
- Applying different color manipulations (e.g., `tint()`, `negate()`)
- Adjusting contrast or brightness before grayscale conversion

## Custom Sprite Generation Workflows

### Iterative Generation

The library supports generating multiple iterations of sprites:

```javascript
if(options.iterations) {
  let i = 0;
  let iterations = []
  while (i < options.iterations) {
    // Generation code...
    iterations.push({messages: jsonFrameResponse.choices[0].message, image: imageDataUrl})
  }
  return iterations
}
```

Customize this process by:
- Implementing a selection mechanism to choose the best iteration
- Adding variation to the prompt for each iteration

### Frame Size Detection

The library uses AI to detect optimal frame sizes:

```javascript
const result = await openAiObject.chat.completions.create({
  model: "gpt-4-vision-preview",
  max_tokens: 1000,
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: `For this 1024x1024 image, what would be the frameWidth and frameHeight if I was to use this image as a spritesheet for this phaser js function:

        this.load.spritesheet('test', path to png, { frameWidth: 115, frameHeight: 380 });
        `
      },
      {
        type: "image_url",
        image_url: imageDataUrl,
      },
    ],
  ],
});
```

You can enhance this process by:
- Implementing manual override options for frame sizes
- Adding logic to adjust frame sizes based on specific game requirements

## Conclusion

By leveraging these advanced customization techniques, you can tailor the SpriteAI library to meet specific project needs, creating unique and optimized sprite assets for your Phaser.js games.