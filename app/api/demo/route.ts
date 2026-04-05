import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, empresa, rol, email, whatsapp, mensaje } = body;

    if (!nombre || !empresa || !rol || !email) {
      return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      // If Supabase is not configured, log and return success
      console.log("Demo request (Supabase not configured):", body);
      return NextResponse.json({ ok: true });
    }

    const res = await fetch(`${supabaseUrl}/rest/v1/demo_requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
      body: JSON.stringify({ nombre, empresa, rol, email, whatsapp, mensaje }),
    });

    if (!res.ok) {
      throw new Error(`Supabase error: ${res.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error saving demo request:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
