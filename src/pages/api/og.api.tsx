import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          color: "#00875F",
          background: "#121214",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "700",
        }}
      >
        Ignite Call
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
