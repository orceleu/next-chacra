import { ReplicateStream, StreamingTextResponse } from "ai";

import Replicate from "replicate";
import { experimental_buildLlama2Prompt } from "ai/prompts";
import { NextResponse } from "next/server";

const replicate = new Replicate({
  auth: "r8_AEpZ22smqf8JW47jcT02Zo0iB4i7JkG0BaGRq",
});

// IMPORTANT! Set the runtime to edge

export async function POST(req) {
  const { prompt } = await req.json();

  const response = await replicate.predictions.create({
    // You must enable streaming.
    stream: true,
    // The model must support streaming. See https://replicate.com/docs/streaming
    // This is the model ID for Llama 2 70b Chat02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3
    version: "f4e2de70d66816a838a89eeeb621910adffb0dd0baba3976c96980970978018d",
    // Format the message list into the format expected by Llama 2
    // @see https://github.com/vercel/ai/blob/99cf16edf0a09405d15d3867f997c96a8da869c6/packages/core/prompts/huggingface.ts#L53C1-L78C2
    input: {
      prompt: prompt,
      temperature: 0.75,
      system_prompt: "your response must be in french.",
      max_new_tokens: 500,
      min_new_tokens: -1,
    },
  });

  // Convert the response into a friendly text-stream
  const stream = await ReplicateStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
