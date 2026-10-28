export type AdminSession = {
  csrf: string;
};

export const fetchAdminSession = async (api: string): Promise<AdminSession | null> => {
  const response = await fetch(`${api}/api/auth/session`, {
    credentials: "include",
  });

  if (!response.ok) return null;

  const payload = await response.json();
  return {
    csrf: String(payload.data?.csrf ?? ""),
  };
};

export const requireAdminSession = async (
  api: string,
  redirectTo = "/admin/entrar/",
): Promise<AdminSession | null> => {
  const session = await fetchAdminSession(api);

  if (!session) {
    location.href = redirectTo + "?next=" + encodeURIComponent(location.pathname + location.search);
    return null;
  }

  return session;
};

export const logoutAdmin = async (api: string, csrf = "") => {
  await fetch(`${api}/api/auth/logout`, {
    method: "POST",
    credentials: "include",
    headers: csrf ? { "X-CSRF-Token": csrf } : {},
  });
};


export const safeAdminNext = (value: string | null, origin: string): string => {
  if (!value || !value.startsWith("/admin/") || value.includes("\\")) return "/admin/publicacao/";
  try {
    const target = new URL(value, origin);
    if (target.origin !== origin || !target.pathname.startsWith("/admin/") || target.pathname.startsWith("/admin/entrar")) return "/admin/publicacao/";
    return target.pathname + target.search;
  } catch { return "/admin/publicacao/"; }
};
