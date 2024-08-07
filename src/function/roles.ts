//API ROLES
export const roles: any = {
  admin: {
    posts: { c: 1, r: 1, u: 1, d: 1 },
  },
  user: {
    posts: { c: 0, r: 1, u: 0, d: 0 },
  },
};

export const roleAccessMap: any = {
  admin: ["/", "/add", "/edit/[id]", "/article/[id]"],
  user: ["/", "/article/[id]"],
};

export function doesRoleHaveAccessToURL(role: string, url: string) {
  const accessibleRoutes = roleAccessMap[role] || [];
  return accessibleRoutes.some((route: string) => {
    // Create a regex from the route by replacing dynamic segments
    const regexPattern = route.replace(/\[.*?\]/g, "[^/]+").replace("/", "\\/");
    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(url);
  });
}
