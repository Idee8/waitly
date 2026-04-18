"use client";

import { useRef } from "react";

import Demo from "~/components/demo";
import Faq from "~/components/faq";
import Footer from "~/components/footer";
import Hero from "~/components/hero";
import { Confetti, type ConfettiRef } from "~/components/magicui/confetti";
import Powered from "~/components/powered";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export function LandingPage({ waitlistPeople }: { waitlistPeople: number }) {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 🌈 Shader Background */}
      <div className="fixed inset-0 -z-10">
        <ShaderGradientCanvas style={{ width: "100%", height: "100%" }}>
          <ShaderGradient
            animate="on"
            axesHelper="off"
            brightness={1.2}
            cAzimuthAngle={170}
            cDistance={4.4}
            cPolarAngle={70}
            cameraZoom={1}
            // color1="#94ffd1"
            // color2="#6bf5ff"
            // color3="#ffffff"
            color1="#D6E0D1"
            color2="#95AD8B"
            color3="#ffffff"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            format="gif"
            fov={45}
            frameRate={10}
            gizmoHelper="hide"
            grain="off"
            lightType="3d"
            pixelDensity={1}
            positionX={0}
            positionY={0.9}
            positionZ={-0.3}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={45}
            rotationY={0}
            rotationZ={0}
            shader="defaults"
            type="waterPlane"
            uAmplitude={0}
            uDensity={1.2}
            uFrequency={0}
            uSpeed={0.2}
            uStrength={3.4}
            uTime={0}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>

      {/* Optional: soft glass overlay for readability */}
      <div className="fixed inset-0 -z-10 bg-white/40 backdrop-blur-[2px]" />

      {/* 🎉 Confetti */}
      <Confetti
        ref={confettiRef}
        className="fixed inset-0 z-50 pointer-events-none"
        manualstart={true}
      />

      {/* 📄 Content */}
      <main className="mx-auto max-w-screen-2xl w-full flex flex-col relative z-10">
        <Hero waitlistPeople={waitlistPeople} />
        <Demo videoSrc="/demo.mp4" thumbnailSrc="/demo.png" />
        <Powered />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}
