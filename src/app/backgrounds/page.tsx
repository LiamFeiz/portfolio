"use client";

import { useEffect, useRef, useState } from "react";

const cursorEffects = [
  { name: "Soft Dot", style: "dot" },
  { name: "Smooth Ring", style: "ring" },
  { name: "Spotlight", style: "spotlight" },
  { name: "Crosshair", style: "crosshair" },
  { name: "Liquid Blob", style: "blob" },
  { name: "Orbit", style: "orbit" },
  { name: "Inverted", style: "invert" },
  { name: "Magnetic", style: "magnetic" },
  { name: "Arrow", style: "arrow" },
  { name: "Pixel Trail", style: "pixels" },
  { name: "Ripple", style: "ripple" },
  { name: "Text Reveal", style: "text" },
  { name: "Scanner", style: "scanner" },
  { name: "Corner Brackets", style: "brackets" },
  { name: "Neon Glow", style: "glow" },
  { name: "Elastic Ring", style: "elastic" },
  { name: "Bubble", style: "bubble" },
  { name: "Radar", style: "radar" },
  { name: "Particle Field", style: "particles" },
  { name: "Perspective", style: "perspective" },
];

export default function CursorSamplesPage() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState("dot");

  useEffect(() => {
    const move = (event: PointerEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const updateCard = (
    event: React.PointerEvent<HTMLElement>,
    effect: string,
  ) => {
    setStyle(effect);
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mx",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--my",
      `${event.clientY - rect.top}px`,
    );
  };

  return (
    <main className="min-h-screen cursor-none bg-[#07111f] px-5 py-12 text-[#edf7ff]">
      <div
        ref={cursorRef}
        className={`cursor-preview cursor-preview--${style}`}
        aria-hidden="true"
      >
        <span>VIEW</span>
      </div>

      <div className="mx-auto max-w-[1500px]">
        <header className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#66d8ff]">
              20 interactive directions
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Cursor animation samples
            </h1>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#91a9b9]">
            Move across each card to preview its cursor behavior. Tell me the
            number to implement on the portfolio.
          </p>
        </header>

        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cursorEffects.map((effect, index) => (
            <article
              key={effect.name}
              className={`cursor-card cursor-card--${effect.style}`}
              onPointerEnter={(event) => updateCard(event, effect.style)}
              onPointerMove={(event) => updateCard(event, effect.style)}
            >
              <div className="cursor-card__number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="cursor-card__visual">
                <div className="cursor-card__orb" />
                <div className="cursor-card__ring" />
              </div>
              <footer>
                <h2>{effect.name}</h2>
                <p>Pointer effect</p>
              </footer>
            </article>
          ))}
        </section>
      </div>

      <style jsx global>{`
        .cursor-card {
          position: relative;
          min-height: 280px;
          overflow: hidden;
          border: 1px solid rgba(126, 210, 255, 0.12);
          border-radius: 24px;
          background:
            radial-gradient(
              circle at var(--mx, 50%) var(--my, 50%),
              rgba(102, 216, 255, 0.16),
              transparent 120px
            ),
            linear-gradient(
              145deg,
              rgba(12, 31, 51, 0.94),
              rgba(5, 13, 24, 0.98)
            );
          padding: 18px;
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.18);
        }
        .cursor-card__number {
          position: absolute;
          right: 18px;
          top: 16px;
          color: #66d8ff;
          font-size: 12px;
          letter-spacing: 0.16em;
        }
        .cursor-card footer {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 16px;
        }
        .cursor-card footer h2 {
          margin: 0;
          font-size: 20px;
          letter-spacing: -0.03em;
        }
        .cursor-card footer p {
          margin: 5px 0 0;
          color: #91a9b9;
          font-size: 12px;
        }
        .cursor-card__visual {
          position: absolute;
          inset: 35px 18px 72px;
          display: grid;
          place-items: center;
        }
        .cursor-card__orb {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          border: 1px solid rgba(160, 234, 255, 0.42);
          background: rgba(102, 216, 255, 0.08);
          box-shadow: 0 0 40px rgba(102, 216, 255, 0.12);
        }
        .cursor-card__ring {
          position: absolute;
          width: 112px;
          height: 112px;
          border: 1px solid rgba(160, 234, 255, 0.12);
          border-radius: 50%;
        }

        .cursor-preview {
          position: fixed;
          left: 0;
          top: 0;
          z-index: 9999;
          pointer-events: none;
          width: 12px;
          height: 12px;
          margin: -6px 0 0 -6px;
          border-radius: 50%;
          background: #a0eaff;
          box-shadow: 0 0 18px rgba(102, 216, 255, 0.8);
          transition:
            width 0.25s,
            height 0.25s,
            margin 0.25s,
            border-radius 0.25s,
            background 0.25s,
            transform 0.06s linear;
        }
        .cursor-preview span {
          display: none;
        }
        .cursor-preview--ring,
        .cursor-preview--elastic {
          width: 42px;
          height: 42px;
          margin: -21px 0 0 -21px;
          background: transparent;
          border: 1px solid #a0eaff;
          box-shadow: none;
        }
        .cursor-preview--spotlight {
          width: 150px;
          height: 150px;
          margin: -75px 0 0 -75px;
          background: rgba(102, 216, 255, 0.1);
          box-shadow: 0 0 55px rgba(102, 216, 255, 0.12);
          filter: blur(8px);
        }
        .cursor-preview--crosshair {
          width: 44px;
          height: 44px;
          margin: -22px 0 0 -22px;
          border-radius: 0;
          background:
            linear-gradient(#a0eaff, #a0eaff) center/1px 44px no-repeat,
            linear-gradient(#a0eaff, #a0eaff) center/44px 1px no-repeat;
          box-shadow: none;
        }
        .cursor-preview--blob {
          width: 72px;
          height: 72px;
          margin: -36px 0 0 -36px;
          border-radius: 58% 42% 48% 52%;
          background: rgba(102, 216, 255, 0.24);
          filter: blur(2px);
          backdrop-filter: blur(4px);
        }
        .cursor-preview--orbit {
          width: 64px;
          height: 64px;
          margin: -32px 0 0 -32px;
          background: transparent;
          border: 1px solid #a0eaff;
        }
        .cursor-preview--orbit::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fff;
          left: 28px;
          top: -4px;
          box-shadow: 0 0 12px #a0eaff;
        }
        .cursor-preview--invert {
          width: 28px;
          height: 28px;
          margin: -14px 0 0 -14px;
          background: white;
          mix-blend-mode: difference;
        }
        .cursor-preview--magnetic {
          width: 88px;
          height: 88px;
          margin: -44px 0 0 -44px;
          background: rgba(102, 216, 255, 0.08);
          border: 1px solid rgba(160, 234, 255, 0.55);
        }
        .cursor-preview--arrow {
          width: 58px;
          height: 58px;
          margin: -29px 0 0 -29px;
          border-radius: 50%;
          background: rgba(102, 216, 255, 0.12);
        }
        .cursor-preview--arrow::after {
          content: "↗";
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: white;
          font-size: 18px;
        }
        .cursor-preview--pixels {
          width: 22px;
          height: 22px;
          border-radius: 3px;
          background: #66d8ff;
          box-shadow:
            14px 12px 0 rgba(102, 216, 255, 0.65),
            -12px 15px 0 rgba(102, 216, 255, 0.35);
        }
        .cursor-preview--ripple {
          width: 58px;
          height: 58px;
          margin: -29px 0 0 -29px;
          background: transparent;
          border: 1px solid #a0eaff;
          animation: cursor-ripple 1.2s ease-out infinite;
        }
        .cursor-preview--text {
          width: 74px;
          height: 30px;
          margin: -15px 0 0 -37px;
          border-radius: 999px;
          background: #edf7ff;
          display: grid;
          place-items: center;
        }
        .cursor-preview--text span {
          display: block;
          color: #07111f;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.16em;
        }
        .cursor-preview--scanner {
          width: 80px;
          height: 80px;
          margin: -40px 0 0 -40px;
          border-radius: 12px;
          background: repeating-linear-gradient(
            0deg,
            transparent 0 7px,
            rgba(102, 216, 255, 0.25) 8px
          );
          border: 1px solid rgba(160, 234, 255, 0.5);
        }
        .cursor-preview--brackets {
          width: 70px;
          height: 70px;
          margin: -35px 0 0 -35px;
          border-radius: 0;
          background:
            linear-gradient(#a0eaff, #a0eaff) left top/18px 1px no-repeat,
            linear-gradient(#a0eaff, #a0eaff) left top/1px 18px no-repeat,
            linear-gradient(#a0eaff, #a0eaff) right bottom/18px 1px no-repeat,
            linear-gradient(#a0eaff, #a0eaff) right bottom/1px 18px no-repeat;
        }
        .cursor-preview--glow {
          width: 36px;
          height: 36px;
          margin: -18px 0 0 -18px;
          background: #66d8ff;
          box-shadow:
            0 0 18px #66d8ff,
            0 0 55px rgba(102, 216, 255, 0.8),
            0 0 90px rgba(102, 216, 255, 0.35);
        }
        .cursor-preview--elastic {
          border-radius: 48% 52% 58% 42%;
        }
        .cursor-preview--bubble {
          width: 90px;
          height: 90px;
          margin: -45px 0 0 -45px;
          background: radial-gradient(
            circle at 34% 28%,
            rgba(255, 255, 255, 0.8),
            rgba(102, 216, 255, 0.16) 18%,
            rgba(102, 216, 255, 0.05) 62%,
            transparent 64%
          );
          border: 1px solid rgba(160, 234, 255, 0.35);
        }
        .cursor-preview--radar {
          width: 70px;
          height: 70px;
          margin: -35px 0 0 -35px;
          background: repeating-radial-gradient(
            circle,
            transparent 0 12px,
            rgba(160, 234, 255, 0.38) 13px 14px
          );
        }
        .cursor-preview--particles {
          width: 18px;
          height: 18px;
          box-shadow:
            32px 8px 0 -6px #66d8ff,
            -24px 20px 0 -7px #66d8ff,
            18px -28px 0 -8px #66d8ff,
            -30px -18px 0 -7px #66d8ff;
        }
        .cursor-preview--perspective {
          width: 52px;
          height: 52px;
          margin: -26px 0 0 -26px;
          border-radius: 8px;
          background: rgba(102, 216, 255, 0.12);
          border: 1px solid #a0eaff;
          transform: translate3d(var(--x, 0), var(--y, 0), 0) rotate(45deg);
        }

        .cursor-card--dot .cursor-card__orb {
          animation: pulse-card 1.8s ease-in-out infinite;
        }
        .cursor-card--ring .cursor-card__ring {
          animation: spin-card 6s linear infinite;
        }
        .cursor-card--crosshair .cursor-card__visual {
          background:
            linear-gradient(#66d8ff, #66d8ff) center/1px 100% no-repeat,
            linear-gradient(#66d8ff, #66d8ff) center/100% 1px no-repeat;
        }
        .cursor-card--blob .cursor-card__orb {
          border-radius: 58% 42% 48% 52%;
          animation: morph-card 4s ease-in-out infinite;
        }
        .cursor-card--orbit .cursor-card__ring {
          animation: spin-card 3s linear infinite;
        }
        .cursor-card--orbit .cursor-card__orb::after {
          content: "";
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #a0eaff;
          transform: translate(46px, -5px);
        }
        .cursor-card--pixels .cursor-card__orb {
          border-radius: 4px;
          transform: rotate(45deg);
        }
        .cursor-card--ripple .cursor-card__ring {
          animation: ripple-card 1.8s ease-out infinite;
        }
        .cursor-card--radar .cursor-card__orb {
          background: repeating-radial-gradient(
            circle,
            rgba(102, 216, 255, 0.32) 0 5px,
            transparent 6px 12px
          );
        }
        .cursor-card--perspective .cursor-card__visual {
          perspective: 300px;
        }
        .cursor-card--perspective .cursor-card__orb {
          transform: rotateX(24deg) rotateY(-22deg);
        }

        @keyframes pulse-card {
          50% {
            transform: scale(0.82);
            opacity: 0.7;
          }
        }
        @keyframes spin-card {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes morph-card {
          50% {
            border-radius: 42% 58% 62% 38%;
          }
        }
        @keyframes ripple-card {
          0% {
            transform: scale(0.25);
            opacity: 0;
          }
          30% {
            opacity: 0.7;
          }
          100% {
            transform: scale(1.25);
            opacity: 0;
          }
        }
        @keyframes cursor-ripple {
          0% {
            transform: scale(0.45);
            opacity: 1;
          }
          100% {
            transform: scale(1.45);
            opacity: 0;
          }
        }

        @media (pointer: coarse), (max-width: 700px) {
          .cursor-preview {
            display: none;
          }
          main {
            cursor: auto;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .cursor-card *,
          .cursor-preview {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}
