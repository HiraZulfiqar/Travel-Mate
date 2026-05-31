const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

if (!apiKey) {
  throw new Error("Missing VITE_OPENROUTER_API_KEY in .env");
}

const FREE_MODELS = [
  "openai/gpt-oss-20b:free",
  "moonshotai/kimi-k2.6:free",
  "deepseek/deepseek-v4-flash:free",
  "meta-llama/llama-3.2-3b-instruct:free",
  "meta-llama/llama-3.3-70b-instruct:free",
  "qwen/qwen3-next-80b-a3b-instruct:free",
];

const callOpenRouter = async (message, model) => {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: message }],
      max_tokens: 8192,
      temperature: 1,
    }),
  });

  const data = await response.json();
  console.log(`OpenRouter response [${model}]:`, data);

  if (!response.ok) {
    throw new Error(data.error?.message || JSON.stringify(data));
  }

  return data;
};

export const chatSession = {
  sendMessage: async (message) => {
    let lastError;

    // ✅ Try each model until one works
    for (const model of FREE_MODELS) {
      try {
        console.log(`Trying model: ${model}`);
        const data = await callOpenRouter(message, model);
        return {
          response: {
            text: () => data.choices[0].message.content,
          },
        };
      } catch (error) {
        console.warn(`Model ${model} failed:`, error.message);
        lastError = error;
        // Wait 1 second before trying next model
        await new Promise((res) => setTimeout(res, 1000));
      }
    }

    throw new Error("All models failed: " + lastError?.message);
  },
};