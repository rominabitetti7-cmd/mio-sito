import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  const { filename, mime, size } = data;

  // Simulazione di una firma di upload
  const key = `${Date.now()}-${filename}`;
  const url = `https://mqkjeacaifsoidqwsouh.supabase.co/storage/v1/object/uploads/${key}`;

  return NextResponse.json({ key, url });
}
