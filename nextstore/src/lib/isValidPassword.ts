export async function isValidPassword(
  password: string,
  hashedPassword: string
) {
  console.log(await hashPassword(password));
  return (await hashPassword(password)) === hashedPassword;
}

async function hashPassword(password: string) {
  // perform encryption of password using SHA-512 hashing algorithm
  const arrayBuffer = await crypto.subtle.digest(
    "SHA-512",
    new TextEncoder().encode(password)
  );

  // shorten our very long "SHA-512" string to a very short base 64 string
  return Buffer.from(arrayBuffer).toString("base64");
}
