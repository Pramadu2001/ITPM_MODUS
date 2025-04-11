

import { streamText, Message } from "ai"; 
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { initialMessage } from "@/Components/Novelty/lib/data";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY || "", 
});

// Define the runtime as "edge"
export const runtime = "edge";

// Function to build the prompt for Gemini AI
const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => {
  return [
    {
      id: crypto.randomUUID(), // Generate a unique ID for the user
      role: "system", // Role as user
      content: initialMessage.content, // Use the initial message from your data
    },
    ...messages.map((message) => ({
      id: crypto.randomUUID(), // Generate unique IDs for each message
      role: message.role, // Role (user or assistant)
      content: message.content, // Content of the message
    })),
  ];
};

// Handle POST requests
export async function POST(req: Request) {
  try {
    // Parse the incoming request body to extract messages
    const { messages } = await req.json();

    // Validate the messages input
    if (!messages || !Array.isArray(messages)) {
      return new Response("Invalid request: messages must be an array.", {
        status: 400,
      });
    }

    // Stream the text response from Gemini
    const stream = await streamText({
      model: google("gemini-1.5-flash"), // Use the Gemini model
      messages: buildGoogleGenAIPrompt(messages), // Format the prompt with messages
      temperature: 1, // Set the temperature for the response generation
    });

    // Ensure the stream is available
    if (!stream) {
      throw new Error("Failed to stream response.");
    }

    // Return the streamed response
    return stream.toDataStreamResponse();
  } catch (error) {
    // Handle any errors and log them
    console.error("Error occurred in Gemini route:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
