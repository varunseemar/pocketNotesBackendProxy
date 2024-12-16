const express = require('express');
const cors = require('cors');
const translate = require('google-translate-api-x');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/translate', async (req, res) => {
  const { text, targetLang } = req.body;
  try {
    const result = await translate(text, { to: targetLang });
    res.json({ translatedText: result.text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Translation server running on http://localhost:${PORT}`);
});