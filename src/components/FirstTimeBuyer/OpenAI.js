import OpenAI from "openai";

export const getCarSuggestions = async (userPreferences) => {
  const openai = new OpenAI({
    // apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  const systemMessage = {
    role: "system",
    content: `Based on the following preferences, Please suggest cars that match these criteria and brand.
     If there is no criteria match then don't apologize and return the match brand cars.
      And send me a response in the following format: 
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
    ]`,
  };

  try {
    // Step 1: Initial conversation setup
    const userPrompt1 = ` \n${JSON.stringify(
      userPreferences.What_Essentials,
      null,
      2
    )}\n `;
    const userPrompt2 = ` \n${JSON.stringify(
      userPreferences.Preferred_car_brand,
      null,
      2
    )}\n .`;
    const userPrompt3 = ` \n${JSON.stringify(
      userPreferences.Total_Seat_Requirements,
      null,
      2
    )}\n `;
    const userPrompt4 = ` \n${JSON.stringify(
      userPreferences.Vehicle_Preference,
      null,
      2
    )}\n `;
    const userPrompt5 = ` \n${JSON.stringify(
      userPreferences.Ride_Power_Consumption,
      null,
      2
    )}\n `;
    const userPrompt6 = ` \n${JSON.stringify(
      userPreferences?.PurposeOfUse,
      null,
      2
    )}\n `;
    const finalStep = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage,
        { role: "user", content: userPrompt1 },
        { role: "user", content: userPrompt2 },
        { role: "user", content: userPrompt3 },
        { role: "user", content: userPrompt4 },
        { role: "user", content: userPrompt5 },
        { role: "user", content: userPrompt6 },
      ],
    });

    const suggestedCars = JSON.parse(finalStep.choices[0].message.content);
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
