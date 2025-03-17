import { http, HttpResponse } from "msw";

const MOCK_API_URL = process.env.MOCK_API_URL || "http://localhost:5000/mocks";

console.log("✅ MSW에서 처리하는 MOCK_API_URL:", MOCK_API_URL);

export const hospitalHandlers = [
  http.get(`${MOCK_API_URL}/hospitals`, async ({ request }) => {
    console.log("📡 MSW: GET /mocks 요청 받음", request.url);

    return HttpResponse.json([
      { hospitalId: 35419283, hospitalName: "강남성심병원" },
      { hospitalId: 82736491, hospitalName: "서울 아산 병원" },
      { hospitalId: 19237465, hospitalName: "부산대학교 병원" },
      { hospitalId: 83749126, hospitalName: "전남대학교 병원" },
      { hospitalId: 19287364, hospitalName: "강북삼성병원" },
      { hospitalId: 99871234, hospitalName: "대구 카톨릭 병원" },
      { hospitalId: 38471695, hospitalName: "울산대학교 병원" },
      { hospitalId: 72039481, hospitalName: "고려대학교 안암 병원" },
      { hospitalId: 39487102, hospitalName: "서울성모병원" },
      { hospitalId: 81726394, hospitalName: "경북대학교 병원" },
      { hospitalId: 56172903, hospitalName: "원주 세브란스 병원" },
      { hospitalId: 34981726, hospitalName: "건국대학교 병원" },
      { hospitalId: 12312312, hospitalName: "신촌 세브란스 병원" },
      { hospitalId: 22223333, hospitalName: "서울 대학교 병원" },
      { hospitalId: 98124356, hospitalName: "중앙대학교 병원" },
      { hospitalId: 19283746, hospitalName: "순천향대학교 병원" },
      { hospitalId: 88236451, hospitalName: "한양대학교 병원" },
      { hospitalId: 57293841, hospitalName: "계명대학교 동산병원" },
      { hospitalId: 10293847, hospitalName: "인하대학교 병원" },
      { hospitalId: 43918276, hospitalName: "충남대학교 병원" },
      { hospitalId: 23498761, hospitalName: "부천성모병원" },
      { hospitalId: 87412390, hospitalName: "강동 경희대학교 병원" },
      { hospitalId: 74628139, hospitalName: "서울특별시 보라매병원" },
      { hospitalId: 83920147, hospitalName: "용인 세브란스 병원" },
      { hospitalId: 92837465, hospitalName: "경희의료원" },
      { hospitalId: 76123984, hospitalName: "강원대학교 병원" },
      { hospitalId: 41239876, hospitalName: "동국대학교 일산병원" },
      { hospitalId: 51672903, hospitalName: "제주대학교 병원" },
    ]);
  }),

  http.post(`${MOCK_API_URL}/hospitals`, async ({ request }) => {
    console.log("📡 MSW: POST /hospitals 요청 받음");
    console.log("🔍 요청된 URL:", request.url);

    const newHospital = await request.json();
    console.log(newHospital, "뉴 하스피터");
    return HttpResponse.json(
      { message: "Hospital created successfully", hospital: newHospital },
      { status: 201 },
    );
  }),

  http.delete(`${MOCK_API_URL}/hospitals/:id`, async ({ request, params }) => {
    console.log(`📡 MSW: DELETE /hospitals/${params.id} 요청 받음`);
    console.log("🔍 요청된 URL:", request.url);

    return HttpResponse.json({ message: `Hospital ${params.id} deleted` }, { status: 200 });
  }),
];
