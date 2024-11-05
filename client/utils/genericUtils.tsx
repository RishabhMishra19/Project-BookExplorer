export const getInitialNavItem = (pathname) => {
  if (pathname.includes("books")) {
    return "books";
  } else if (pathname.includes("authors")) {
    return "authors";
  } else if (pathname.includes("login")) {
    return "login";
  } else if (pathname.includes("signup")) {
    return "signup";
  }
};
