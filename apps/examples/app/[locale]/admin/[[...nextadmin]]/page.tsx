import Dashboard from "@/components/Dashboard";
import { options } from "@/options";
import { prisma } from "@/prisma";
import schema from "@/prisma/json-schema/json-schema.json";
import { NextAdmin, PageProps } from "@sse-ui/neadmin";
import { getNextAdminProps } from "@sse-ui/neadmin/dist/appRouter";
import { Metadata, Viewport } from "next";
import { getMessages } from "next-intl/server";

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  icons: "/assets/logo.svg",
};

export default async function AdminPage({
  params,
  searchParams,
}: Readonly<PageProps>) {
  const props = await getNextAdminProps({
    params: params.nextadmin,
    searchParams,
    basePath: "/admin",
    apiBasePath: "/api/admin",
    prisma,
    options,
    schema,
    getMessages: (locale) =>
      getMessages({ locale }).then(
        (messages) => messages.admin as Record<string, string>
      ),
    locale: params.locale as string,
  });

  const logoutRequest: [RequestInfo, RequestInit] = [
    "/",
    {
      method: "POST",
    },
  ];

  return (
    <NextAdmin
      {...props}
      dashboard={<Dashboard />}
      user={{
        data: {
          name: "John Doe",
        },
        logout: logoutRequest,
      }}
    />
  );
}
