import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Crema & Co. Café — Caçapava, SP";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadCormorant(text: string, weight: number, italic = false) {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@${italic ? 1 : 0},${weight}&text=${encodeURIComponent(text)}`
    )
  ).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);
  if (!match) throw new Error("failed to resolve font url");
  const res = await fetch(match[1]);
  return res.arrayBuffer();
}

export default async function Image() {
  const photoData = readFileSync(join(process.cwd(), "public/og/hero-frame.jpg"));
  const photoBase64 = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  const [bold, light] = await Promise.all([
    loadCormorant("RESPIRAR COM CALMA. CREMA & CO. CAFÉ", 700),
    loadCormorant("Um lugar para Caçapava – SP cremacafeteria.com", 300, true),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#1A120A",
        }}
      >
        <img
          src={photoBase64}
          style={{
            position: "absolute",
            inset: 0,
            width: "1200px",
            height: "630px",
            objectFit: "cover",
            objectPosition: "58% 45%",
          }}
        />

        {/* Overlay escuro uniforme pra legibilidade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(20,13,7,0.62)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(26,18,10,0.35) 0%, rgba(26,18,10,0) 40%, rgba(26,18,10,0.55) 100%)",
            display: "flex",
          }}
        />

        {/* Conteúdo — bloco superior, longe da xícara */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            textAlign: "center",
            padding: "72px 100px 0",
          }}
        >
          <div
            style={{
              fontFamily: "CormorantLight",
              fontSize: "16px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#C9A96E",
              marginBottom: "20px",
              display: "flex",
            }}
          >
            Caçapava – SP
          </div>

          <div
            style={{
              fontFamily: "CormorantLight",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "34px",
              color: "#F5ECD7",
              display: "flex",
            }}
          >
            Um lugar para
          </div>

          <div
            style={{
              fontFamily: "CormorantBold",
              fontWeight: 700,
              fontSize: "62px",
              letterSpacing: "2px",
              color: "#FFFFFF",
              lineHeight: 1.05,
              marginTop: "6px",
              display: "flex",
            }}
          >
            RESPIRAR COM CALMA.
          </div>
        </div>

        {/* Rodapé */}
        <div
          style={{
            position: "absolute",
            left: "76px",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "9999px",
              background: "#C9A96E",
              display: "flex",
            }}
          />
          <div
            style={{
              fontFamily: "CormorantLight",
              fontSize: "17px",
              letterSpacing: "1px",
              color: "rgba(245,236,215,0.85)",
              display: "flex",
            }}
          >
            cremacafeteria.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "CormorantBold", data: bold, weight: 700, style: "normal" },
        { name: "CormorantLight", data: light, weight: 300, style: "normal" },
      ],
    }
  );
}
