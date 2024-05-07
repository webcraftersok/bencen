"use client";
import { IconProps } from "@/app/types";
import Image from "next/image";

let Icons: any = {
  logo: "/img/logo.svg",
  language: "/img/languageEs.svg",
  languageEn: "/img/languageEn.svg",
  letra: "/img/letraLogo.svg",
};

/**
 * @param name Nombre del icono
 * @param size Tamaño del icono
 * @param color Color del icono
 * @param onClick Función a ejecutar al hacer click
 */

//Considerar agregar una prop color (ejemplo: para el hover)
export default function IconWithImages({
  name,
  size = 20,
  onClick,
}: IconProps) {
  let src = Icons[name] ? Icons[name] : "/img/logo.svg";

  return (
    <span className="icon">
      <Image
        src={src}
        title={name}
        alt={name}
        height={size}
        width={size}
        onClick={() => {
          onClick ? onClick() : null;
        }}
      />
    </span>
  );
}
