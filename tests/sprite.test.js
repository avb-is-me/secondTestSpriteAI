const sprite = require('./index').sprite;
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

describe('sprite', () => {
  describe('generateSprite', () => {
    it('should generate a sprite with the correct frame dimensions', async () => {
      const description = 'knight';
      const options = { iterations: 1 };
      const result = await sprite.generateSprite(description, options);

      expect(result).toBeDefined();
      expect(result.length).toBe(1);

      const { messages, image } = result[0];
      expect(messages).toBeDefined();
      expect(image).toBeDefined();

      const frameInfo = JSON.parse(messages.content);
      expect(frameInfo).toHaveProperty('frameWidth');
      expect(frameInfo).toHaveProperty('frameHeight');

      const buffer = Buffer.from(image.split(',')[1], 'base64');
      const imageData = await sharp(buffer).metadata();
      expect(imageData.width).toBe(1024);
      expect(imageData.height).toBe(1024);
    });

    // Add more test cases as needed bro brooo trader joes
  });

  describe('generateHouseAsset', () => {
    //lol
    it('should generate a house asset', async () => {
      const description = 'house';
      const options = { iterations: 1 };
      const result = await sprite.generateHouseAsset(description, options);

      expect(result).toBeDefined();
      expect(result.length).toBe(1);

      const asset = result[0];
      expect(asset.data).toBeDefined();
      expect(asset.data.length).toBeGreaterThan(0);
    });

    // Add more test cases as needed
  });
});