import { LandingPage } from "./page.client";
import { connection } from "next/server";
import { getNotionDatabaseRowCount } from "~/lib/utils";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [waitlistPeople] = await Promise.all([
    await getNotionDatabaseRowCount(process.env.NOTION_DB_ID as string),
    // forces the page to be dyamically rendered
    await connection(),
  ]);

  return <LandingPage waitlistPeople={waitlistPeople} />;
}
