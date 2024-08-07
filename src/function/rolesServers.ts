"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";
import { roles } from "./roles";

export const useRoleAccess = async ({
  page,
  role,
}: {
  page: string;
  role?: string;
}) => {
  const session = await getServerSession(authOptions);
  const accessLevels = roles[role || session?.user.role]?.[page];
  return {
    create: accessLevels.c,
    read: accessLevels.r,
    update: accessLevels.u,
    delete: accessLevels.d,
  };
};
