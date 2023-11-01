export function getEmail(): string | null {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem("email");
    }else{
        return '';
    }
  }