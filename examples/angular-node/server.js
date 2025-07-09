const express = require('express');
const { generateText } = require('ai');
const { openai } = require('@ai-sdk/openai');

const app = express();
app.use(express.json());

app.post('/api/completion', async (req, res) => {
  const prompt = req.body.prompt ?? '';
  try {
    const { text } = await generateText({
      model: openai('gpt-3.5-turbo'),
      prompt,
    });
    res.json({ completion: text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
