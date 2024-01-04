import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const res = await axios.post("https://discord.com/api/webhooks/" + process.env.TEST_CHEANEL, {
    content: "oh! github webhook is coming!!",
  });

  return NextResponse.json({ massage: "hello user!" });
};
