import { http, HttpResponse } from "msw";

const MOCK_API_URL = process.env.MOCK_API_URL || "http://localhost:5000/mocks";

// 상위에서 정의한 hospitalId를 사용해서 httpResponse를 400이상의 에러로 배출

export const TypeHandlers = [
  http.get(`${MOCK_API_URL}/:hospitalId/type`, async ({ params }) => {
    const { hospitalId } = params;

    return HttpResponse.json({
      hospitalId,
      typeFiles: [
        {
          typeId: "1",
          coverFile: {
            name: "1-1.pdf",
            base64: "JVBERi0xLjQKJ...",
          },
          group: "A",
        },
        {
          typeId: "2",
          coverFile: {
            name: "2-1.pdf",
            base64: "JVBERi0xLjQKJ...",
          },
          group: "B",
        },
        {
          typeId: "3",
          coverFile: {
            name: "3-1.pdf",
            base64: "JVBERi0xLjQKJ...",
          },
          group: "C",
        },
        {
          typeId: "4",
          coverFile: {
            name: "4-1.pdf",
            base64: "JVBERi0xLjQKJ...",
          },
          group: "D",
        },
        {
          typeId: "5",
          coverFile: {
            name: "5-1.pdf",
            base64: "JVBERi0xLjQKJ...",
          },
          group: "E",
        },
        {
          typeId: "6",
          coverFile: {
            name: "6-1.pdf",
            base64: "JVBERi0xLjQKJ...",
          },
          group: "F",
        },
        {
          typeId: "7",
          coverFile: {
            name: "7-1.pdf",
            base64: "JVBERi0xLjQKJ...",
          },
          group: "G",
        },
        {
          typeId: "8",
          coverFile: {
            name: "8-1.pdf",
            base64: "JVBERi0xLjQKJ...",
          },
          group: "H",
        },
        {
          typeId: "9",
          coverFile: {
            name: "9-1.pdf",
            base64: "JVBERi0xLjQKJ...",
          },
          group: "I",
        },
        {
          typeId: "10",
          coverFile: {
            name: "10-1.pdf",
            base64: "JVBERi0xLjQKJ...",
          },
          group: "J",
        },
        {
          typeId: "11",
          coverFile: {
            name: "11-1.pdf",
            base64: "JVBERi0xLjQKJ...",
          },
          group: "K",
        },
      ],
      folderNames: {
        A: "유방암 보고서",
        B: "간암 검진 결과 통보서",
        C: "간암 의사 소견서",
        D: "위암 진단서",
        E: "유방암 상세 보고서",
        F: "대장암 검사 결과",
        G: "폐암 진단서",
        H: "전립선암 검사 기록",
        I: "뇌종양 진단 보고서",
        J: "심장 질환 검사 결과",
        K: "신장 기능 검사 기록",
      },
    });
  }),
];
