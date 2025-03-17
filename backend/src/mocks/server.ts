import { setupServer } from "msw/node";

import { dashboardHandlers } from "./handlers/dashboard.handler";
import { hospitalHandlers } from "./handlers/hospital.handler";
import { NewTypeHandlers } from "./handlers/newType.handler";
import { NotificationHandlers } from "./handlers/notification.handler";
import { TypeHandlers } from "./handlers/type.handler";

export const server = setupServer(
  ...hospitalHandlers,
  ...NotificationHandlers,
  ...TypeHandlers,
  ...dashboardHandlers,
  ...NewTypeHandlers,
);

server.events.on("request:unhandled", ({ request }) => {
  if (request.url.startsWith("ws://") || request.url.includes("127.0.0.1:65531")) {
    return;
  }
  console.warn(" MSW: 요청 핸들러 없음", request.method, request.url.toString());
});

// 중복 실행 방지
if (!global.__MSW_SERVER_STARTED__) {
  global.__MSW_SERVER_STARTED__ = true;
  console.log("⚡ MSW 서버 실행 중...");
  server.listen({ onUnhandledRequest: "warn" });
  console.log("⚡ MSW 서버 실행 완료!");
}
