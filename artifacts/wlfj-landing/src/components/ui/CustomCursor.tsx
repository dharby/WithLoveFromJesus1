import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hasMouse, setHasMouse] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!hasMouse) setHasMouse(true);
      setVisible(true);
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [hasMouse]);

  if (!hasMouse) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999]"
      style={{ left: pos.x, top: pos.y, translateX: "-50%", translateY: "-50%" }}
      animate={{ scale: clicking ? 0.65 : 1, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.12, ease: "easeOut" }}
    >
      <motion.svg
        viewBox="0 0 24 24"
        className="w-8 h-8 drop-shadow-[0_2px_8px_rgba(249,115,22,0.5)]"
        fill="#f97316"
        animate={{ scale: clicking ? [1, 1.4, 1] : 1 }}
        transition={{ duration: 0.3 }}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </motion.svg>
    </motion.div>
  );
}
