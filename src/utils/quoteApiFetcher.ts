import { Quote } from "@/types/quotes";

export async function fetchQuoteByTag(tag: string): Promise<Quote> {
  try {
    const resp = await fetch(`https://api.quotable.io/random?tags=${tag}`);
    if (!resp.ok) {
      throw new Error("Failed to fetch quote...");
    }
    const data = await resp.json();
    return { content: data.content, author: data.author };
  } catch (err) {
    console.error("Error fetching quote:", err);
    return { content: "Oops something went wrong.", author: "Unknown" };
  }
}
