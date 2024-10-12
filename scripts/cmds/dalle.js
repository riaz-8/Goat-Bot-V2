const axios = require('axios');
const fs = require('fs');

module.exports = {
  config: {
    name: "dalle",
    version: "1.2",
    author: "ArYAN",
    countDown: 10,
    role: 0,
    longDescription: {
      en: "Generate images using OpenAI's model Dalle."
    },
    category: "media",
    guide: {
      en: "{p}dalle <prompt>"
    }
  },

  onStart: async function({ message, args, api, event }) {
    try {
      const prompt = args.join(" ");
      if (!prompt) {
        return message.reply("🤔 J'ai été mis au point pour t'aider par Riaz pour t'aider à générer quelques images \n Donc entre le texte de ce que tu veux générer");
      }

      const baseURL = `https://c-v3.onrender.com/v3/dalle?prompt=${encodeURIComponent(prompt)}`;

      const response = await axios.get(baseURL);
      console.log('API Response:', response.data);

      const imageUrl = response.data.images;
      if (!imageUrl) {
        return message.reply("❌ No image returned from API.");
      }

      const fileName = 'dalle.png';
      const filePath = `/tmp/${fileName}`;

      const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });

      await fs.promises.writeFile(filePath, imageResponse.data);
      
      message.reply({
        body: `🎊🎊🎉Image générée avec succès \n By Riaz`,
        attachment: fs.createReadStream(filePath)
      });

    } catch (error) {
      console.error('Error generating image:', error.response ? error.response.data : error.message);
      message.reply("☠️");
    }
  }
};
