import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  if (request.nextUrl.searchParams.get("badge") !== "1") {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  return NextResponse.json(
    { waiting: false, waitingName: null },
    { headers: { "cache-control": "no-store" } }
  );
}

export async function POST() {
  return NextResponse.json(
    { error: "Online multiplayer is currently disabled. Please use Solo Chess to play locally." },
    { status: 503 }
  );
}
