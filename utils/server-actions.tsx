"use server";

export const checkEnvVars = async () => {
  const keys = [
    "NEXT_PUBLIC_RAPID_API_KEY",
    "NEXT_PUBLIC_IMAGIN_API_KEY",
    "NEXTAUTH_CLIENTID",
    "NEXTAUTH_SECRET",
    "NEXTAUTH_URL",
  ];

  const envVarsOk = keys.map((k) => process.env[k]).every(Boolean);
  return envVarsOk;
};
