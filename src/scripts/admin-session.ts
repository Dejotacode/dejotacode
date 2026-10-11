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
  redirectTo = "/admin/",
): Promise<AdminSession | null> => {
  const session = await fetchAdminSession(api);

  if (!session) {
    location.href = redirectTo;
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
