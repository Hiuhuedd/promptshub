"use client";
import { ClerkProvider } from "@clerk/nextjs";

export default function ClerkWrapper({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: "dark", // Optional: Aligns with your default dark theme
        variables: {
          colorPrimary: "#3b82f6", // Matches your #3b82f6
          fontFamily: "'Poppins', sans-serif",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}

