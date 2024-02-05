import OpenAI from "openai";

export const getCarSuggestions = async (userPreferences) => {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  // Convert user preferences into a prompt
  const prompt = `Based on the following preferences:\n${JSON.stringify(
    userPreferences,
    null,
    2
  )}\nPlease suggest cars that match these criteria. And send me a response in the following format: 
  \`\`\`
  [
    {
      "id": 1,
      "imageSrc": "",
      "CarModel": "",
      "CarYear": "",
      "totalamount": "",
      "downpayment": "",
      "monthlypayment": "",
      "variant": ""
    }
  ]
  \`\`\``;

  try {
    // Create a completion request
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    // Extract and parse the suggested cars from the response
    const suggestedCars = JSON.parse(chatCompletion.choices[0].message.content);
    return suggestedCars;
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      // Handle API errors
      console.error(error.status, error.message);
    } else {
      // Handle other errors
      console.log(error);
    }
  }
};
