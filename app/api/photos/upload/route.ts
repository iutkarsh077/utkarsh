import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Photos upload API is disabled in local mode without cloud storage." },
    { status: 501 }
  );
}
