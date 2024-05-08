import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInComponent = ({ children }: any) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo activar una vez
    threshold: 0.5, // El elemento se activa cuando está al menos un 50% visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Inicialmente transparente y desplazado hacia abajo
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Fade in y desplazamiento
      transition={{ duration: 0.5 }} // Duración de la transición
    >
      {children}
    </motion.div>
  );
};

export default FadeInComponent;
