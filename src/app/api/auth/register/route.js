import { db } from "../../../lib/firebase";
import { hashPassword } from "../../../lib/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { identifier, email, password, firstName, lastName } = await req.json();

  const userRef = db.collection("Users").doc();
  await userRef.set({
    identifier,
    email,
    firstName,
    lastName,
    passwordHash: hashPassword(password),
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json({ message: "Utilisateur créé" }, { status: 201 });
}
