import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { notion } from "./notion";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getNotionDatabaseRowCount(databaseId: string) {
  try {
    let allResults: unknown[] = [];
    let hasMore = true;
    let startCursor: string | null = null;

    // Fetch all pages from the database (handling pagination)
    while (hasMore) {
      const response = await notion.databases.query({
        database_id: databaseId,
        start_cursor: startCursor ?? undefined,
        page_size: 100,
      });

      allResults = allResults.concat(response.results);
      hasMore = response.has_more;
      startCursor = response.next_cursor;
    }

    return allResults.length;
  } catch (error) {
    console.error("Error fetching database rows:", error);
    // Return 0 instead of throwing to allow page to load gracefully
    return 0;
  }
}
// Simple referral code generator used in the Notion API route
const REFERRAL_CODE_CHARSET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function generateCode(length = 8): string {
  let code = "";
  const charsetLength = REFERRAL_CODE_CHARSET.length;

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * charsetLength);
    code += REFERRAL_CODE_CHARSET[index];
  }

  return code;
}
