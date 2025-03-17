import { http, HttpResponse } from "msw";

const MOCK_API_URL = process.env.MOCK_API_URL || "http://localhost:5000/mocks";

export const NewTypeHandlers = [
  http.get(`${MOCK_API_URL}/:hospitalId/newType`, async ({ params }) => {
    const { hospitalId } = params;

    return HttpResponse.json({
      hospitalId,
      group: [
        { groupName: "A", typeIds: [1, 3, 4], coverPdf: "A.pdf" },
        { groupName: "B", typeIds: [2, 5, 8], coverPdf: "B.pdf" },
        { groupName: "C", typeIds: [7, 10], coverPdf: "C.pdf" },
        { groupName: "D", typeIds: [9, 11], coverPdf: "D.pdf" },
        { groupName: "E", typeIds: [12, 14, 16], coverPdf: "E.pdf" },
        { groupName: "F", typeIds: [6, 17, 19], coverPdf: "F.pdf" },
        { groupName: "G", typeIds: [13, 15, 18, 20], coverPdf: "G.pdf" },
        { groupName: "H", typeIds: [21, 22, 23], coverPdf: "H.pdf" },
        { groupName: "I", typeIds: [24, 25, 26], coverPdf: "I.pdf" },
        { groupName: "J", typeIds: [27, 28, 29, 30, 31], coverPdf: "J.pdf" },
      ],
      newHospitalTypeFiles: [
        { typeId: 32, typeName: "32.pdf", group: "" },
        { typeId: 33, typeName: "33.pdf", group: "" },
      ],
      folderNames: {
        A: "유방암",
        B: "간암_검진_결과통보서",
        C: "간암_의사소견서",
        D: "위암_진단서",
        E: "폐암_진단서",
        F: "대장암_검진결과",
        G: "췌장암_검진보고서",
        H: "갑상선암_소견서",
        I: "전립선암_진료기록",
        J: "자궁경부암_검진자료",
      },
    });
  }),
];
