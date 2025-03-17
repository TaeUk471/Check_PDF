import { http, HttpResponse } from "msw";

const MOCK_API_URL = process.env.MOCK_API_URL || "http://localhost:5000/mocks";

export const dashboardHandlers = [
  http.get(`${MOCK_API_URL}/dashboards`, async ({ request }) => {
    console.log("📡 MSW: GET /mocks 요청 받음", request.url);

    return HttpResponse.json({ process: 21141, success: 20018, fail: 1123 });
  }),
];
