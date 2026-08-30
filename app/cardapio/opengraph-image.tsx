import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Cardápio — Crema & Co. Café";
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
  const photoData = readFileSync(join(process.cwd(), "public/iced-latte.jpg"));
  const photoBase64 = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  const [bold, light] = await Promise.all([
    loadCormorant("CARDÁPIO Nosso", 700),
    loadCormorant("O que preparamos para você Café, aconchego e boas conversas cremacafeteria.com", 300, true),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "#1A120A",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow quente sutil */}
        <div
          style={{
            position: "absolute",
            left: "-160px",
            top: "-160px",
            width: "620px",
            height: "620px",
            borderRadius: "9999px",
            background:
              "radial-gradient(ellipse at center, rgba(201,169,110,0.16) 0%, transparent 65%)",
            display: "flex",
          }}
        />

        {/* Foto — cartão à direita (radius direto na img, o clip do wrapper não é confiável no Satori) */}
        <div
          style={{
            position: "absolute",
            right: "64px",
            top: "44px",
            bottom: "44px",
            width: "372px",
            display: "flex",
            boxShadow: "0 30px 70px rgba(0,0,0,0.45)",
          }}
        >
          <img
            src={photoBase64}
            style={{
              width: "372px",
              height: "542px",
              objectFit: "cover",
              objectPosition: "center 35%",
              borderRadius: "18px",
            }}
          />
        </div>

        {/* Conteúdo — lado esquerdo */}
        <div
          style={{
            position: "relative",
            width: "660px",
            height: "630px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 76px",
          }}
        >
          <div
            style={{
              fontFamily: "CormorantLight",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "16px",
              letterSpacing: "1px",
              color: "#C9A96E",
              marginBottom: "20px",
              display: "flex",
            }}
          >
            O que preparamos para você
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "16px",
              marginBottom: "22px",
            }}
          >
            <div
              style={{
                fontFamily: "CormorantLight",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "42px",
                color: "#F5ECD7",
                display: "flex",
              }}
            >
              Nosso
            </div>
            <div
              style={{
                fontFamily: "CormorantBold",
                fontWeight: 700,
                fontSize: "56px",
                letterSpacing: "1px",
                color: "#FFFFFF",
                display: "flex",
              }}
            >
              CARDÁPIO
            </div>
          </div>

          <div
            style={{
              width: "48px",
              height: "1px",
              background: "#C9A96E",
              marginBottom: "22px",
              display: "flex",
            }}
          />

          <div
            style={{
              fontFamily: "CormorantLight",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "20px",
              color: "#B8B0A4",
              marginBottom: "40px",
              display: "flex",
            }}
          >
            Café, aconchego e boas conversas.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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
                color: "rgba(245,236,215,0.75)",
                display: "flex",
              }}
            >
              cremacafeteria.com
            </div>
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
