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

export const isAuthRoute = (pathname) => {
  return pathname.includes("login") || pathname.includes("signup");
};

export const parseApolloError = (apolloError) => {
  if (!apolloError) {
    return 'Unknown Error';
  }
  if (apolloError.message) {
    return apolloError.message;
  }
  if (apolloError.cause?.message) {
    return apolloError.cause.message;
  }
  return 'Something Went Wrong';
}
