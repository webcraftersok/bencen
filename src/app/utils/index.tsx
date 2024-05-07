export const convertLinkString = (string: string): string => {
  return string
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
};

export const navigateTo = (linkString: string) => {
  const stringToUpperCase = linkString.toUpperCase();
  switch (stringToUpperCase) {
    case "BENCEN":
      return "/";
    case "SOBRE NOSOTROS":
      return "/dashboard/aboutUs";
    case "ABOUT US":
      return "/dashboard/aboutUs";
    case "SERVICIOS":
      return "/dashboard/services";
    case "SERVICES":
      return "/dashboard/services";
    case "NOTICIAS":
      return "/dashboard/news";
    case "NEWS":
      return "/dashboard/news";
    case "CONTACTO":
      return "/dashboard/contact";
    case "CONTACT":
      return "/dashboard/contact";
    case "PROYECTOS":
      return "/dashboard/projects";
    case "PROJECTS":
      return "/dashboard/projects";
    case "POLÍTICA DE PRIVACIDAD":
      return "/dashboard/privacyPolicy";
    case "PRIVACY POLICY":
      return "/dashboard/privacyPolicy";
    case "TÉRMINOS Y CONDICIONES":
      return "/dashboard/termsAndConditions";
    case "TERMS AND CONDITIONS":
      return "/dashboard/termsAndConditions";
    default:
      return convertLinkString(stringToUpperCase);
  }
};

export const changeFolderPath = (string: string) => {
  switch (string) {
    case "Sobre Nosotros":
      return "aboutUs";
    case "Servicios":
      return "services";
    case "Noticias":
      return "news";
    case "Contacto":
      return "contact";
    case "Proyectos":
      return "projects";
    case "Política de Privacidad":
      return "polTicaDePrivacidad";
    case "Términos y Condiciones":
      return "termsAndConditions";
    default:
      return convertLinkString(string);
  }
};

export const languageRendering = (language: string, object: any) =>
  language === "english" ? object.english : object.spanish;

export const scrollToId = (id: number, offset: number) => {
  const element = document.getElementById(`${id}`);
  if (element) {
    if (typeof window !== "undefined") {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
};
