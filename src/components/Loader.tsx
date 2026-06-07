import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const lines = [
      "> INITIALIZING SYSTEMS...",
      "> LOADING CORE MODULES...",
      "> ESTABLISHING SECURE CONNECTION...",
      "> OPTIMIZING USER INTERFACE...",
      "> READY."
    ];

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setTerminalLines((prev) => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
        }, 800);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isLoaded && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[100] flex flex-col items-start justify-center bg-black p-8 sm:p-16 font-mono"
        >
          <div className="max-w-2xl w-full">
            {terminalLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="text-emerald-500 text-sm sm:text-base mb-2 tracking-wider font-medium"
              >
                {line}
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-2 h-4 sm:w-3 sm:h-5 bg-emerald-500 mt-1 inline-block"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
