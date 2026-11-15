import gsap from "gsap";
import MouseFollower from "mouse-follower";
import { prefersReducedMotion } from "./accessibility";

type CursorInstance = { destroy: () => void };

export function initMouseFollower() {
  if (prefersReducedMotion() || !window.matchMedia("(pointer: fine)").matches) return;

  const appWindow = window as Window & { mfCursor?: CursorInstance };
  appWindow.mfCursor?.destroy();

  MouseFollower.registerGSAP(gsap);
  appWindow.mfCursor = new MouseFollower({
    speed: 0.5,
    ease: "power3.out",
  }) as CursorInstance;
}
