import { http, HttpResponse } from "msw";

const MOCK_API_URL = process.env.MOCK_API_URL || "http://localhost:5000/mocks";

export const NotificationHandlers = [
  http.get(`${MOCK_API_URL}/notifications`, async ({ request }) => {
    console.log("📡 MSW: GET notification/mocks 요청 받음", request.url);
    return HttpResponse.json([
      {
        hospitalId: 35419283,
        title: "작업중지상태",
        severity: "danger",
        hospitalName: "강남성심병원",
        fileName: {
          filePath: "대장암_검진_결과통보서/Path",
        },
        createdAt: "2025-03-05T02:24:16.582",
      },
      {
        hospitalId: 82736491,
        title: "새로운 타입추가",
        severity: "waiting",
        hospitalName: "서울 아산 병원",
        fileName: {
          filePath: "간경화_검진_결과통보서/Path",
        },
        createdAt: "2025-03-05T02:24:16.582",
      },
      {
        hospitalId: 19237465,
        title: "작업중지상태",
        severity: "danger",
        hospitalName: "부산대학교 병원",
        fileName: {
          filePath: "대장암_검진_결과통보서/Path",
        },
        createdAt: "2025-03-05T02:24:16.582",
      },
      {
        hospitalId: 83749126,
        title: "작업중지상태",
        severity: "danger",
        hospitalName: "전남대학교 병원",
        fileName: {
          filePath: "대장암_검진_결과통보서/Path",
        },
        createdAt: "2025-03-05T02:24:16.582",
      },
      {
        hospitalId: 19287364,
        title: "타입 에러",
        severity: "warning",
        hospitalName: "강북삼성병원",
        fileName: {
          filePath: "간암_검진_결과통보서/Path",
        },
        createdAt: "2025-03-05T02:24:16.582",
      },
      {
        hospitalId: 99871234,
        title: "타입 에러",
        severity: "warning",
        hospitalName: "대구 카톨릭 병원",
        fileName: {
          filePath: "대장암_검진_결과통보서/Path",
        },
        createdAt: "2025-03-05T02:24:16.582",
      },
      {
        hospitalId: 38471695,
        title: "식별자 에러",
        severity: "warning",
        hospitalName: "울산대학교 병원",
        fileName: {
          filePath: "뇌졸중_검진_결과통보서/Path",
        },
        createdAt: "2025-03-05T02:24:16.582",
      },
      {
        hospitalId: 72039481,
        title: "작업중지상태",
        severity: "danger",
        hospitalName: "고려대학교 안암 병원",
        fileName: {
          filePath: "대장암_검진_결과통보서/Path",
        },
        createdAt: "2025-03-05T02:24:16.582",
      },
      {
        hospitalId: 23498761,
        title: "작업중지상태",
        severity: "danger",
        hospitalName: "부천성모병원",
        fileName: { filePath: "폐암_검진_결과통보서/Path" },
        createdAt: "2025-03-05T02:43:04",
      },
      {
        hospitalId: 57293841,
        title: "식별자 에러",
        severity: "warning",
        hospitalName: "계명대학교 동산병원",
        fileName: { filePath: "대장암_검진_결과통보서/Path" },
        createdAt: "2025-03-05T18:43:24",
      },
      {
        hospitalId: 74628139,
        title: "식별자 에러",
        severity: "warning",
        hospitalName: "서울특별시 보라매병원",
        fileName: { filePath: "갑상선암_검진_결과통보서/Path" },
        createdAt: "2025-03-06T02:47:28",
      },
      {
        hospitalId: 12312312,
        title: "타입 에러",
        severity: "warning",
        hospitalName: "신촌 세브란스 병원",
        fileName: { filePath: "췌장암_검진_결과통보서/Path" },
        createdAt: "2025-03-06T03:21:14",
      },
      {
        hospitalId: 92837465,
        title: "타입 에러",
        severity: "warning",
        hospitalName: "경희의료원",
        fileName: { filePath: "백혈병_검진_결과통보서/Path" },
        createdAt: "2025-03-05T17:13:09",
      },
      {
        hospitalId: 51672903,
        title: "새로운 타입추가",
        severity: "waiting",
        hospitalName: "제주대학교 병원",
        fileName: { filePath: "대장암_검진_결과통보서/Path" },
        createdAt: "2025-03-06T04:52:20",
      },
      {
        hospitalId: 56172903,
        title: "식별자 에러",
        severity: "warning",
        hospitalName: "원주 세브란스 병원",
        fileName: { filePath: "유방암_검진_결과통보서/Path" },
        createdAt: "2025-03-05T11:56:37",
      },
      {
        hospitalId: 87412390,
        title: "새로운 타입추가",
        severity: "waiting",
        hospitalName: "강동 경희대학교 병원",
        fileName: { filePath: "대장암_검진_결과통보서/Path" },
        createdAt: "2025-03-06T05:47:39",
      },
      {
        hospitalId: 43918276,
        title: "타입 에러",
        severity: "warning",
        hospitalName: "충남대학교 병원",
        fileName: { filePath: "간경화_검진_결과통보서/Path" },
        createdAt: "2025-03-05T18:44:27",
      },

      {
        hospitalId: 22223333,
        title: "타입 에러",
        severity: "warning",
        hospitalName: "서울 대학교 병원",
        fileName: { filePath: "대장암_검진_결과통보서/Path" },
        createdAt: "2025-03-05T19:06:44",
      },
      {
        hospitalId: 34981726,
        title: "작업중지상태",
        severity: "danger",
        hospitalName: "건국대학교 병원",
        fileName: { filePath: "간경화_검진_결과통보서/Path" },
        createdAt: "2025-03-05T13:51:58",
      },

      {
        hospitalId: 39487102,
        title: "식별자 에러",
        severity: "warning",
        hospitalName: "서울성모병원",
        fileName: { filePath: "위암_검진_결과통보서/Path" },
        createdAt: "2025-03-05T09:20:29",
      },

      {
        hospitalId: 88236451,
        title: "작업중지상태",
        severity: "danger",
        hospitalName: "한양대학교 병원",
        fileName: { filePath: "췌장암_검진_결과통보서/Path" },
        createdAt: "2025-03-05T05:12:14",
      },
      {
        hospitalId: 10293847,
        title: "새로운 타입추가",
        severity: "waiting",
        hospitalName: "인하대학교 병원",
        fileName: { filePath: "폐암_검진_결과통보서/Path" },
        createdAt: "2025-03-05T06:26:04",
      },
    ]);
  }),
];
