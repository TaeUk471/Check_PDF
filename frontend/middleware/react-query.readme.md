간단한 Reminder (이후 삭제 예정)

const {data: user} = useQuery ({
queryKey : ["user", email],
queryFn : getUserByEmail,
})

const userId = user?.id;

const {
status,
fetchStatus,
data : projects,
} = useQuery ({
queryKey : ['projects', userId],
queryFn : getProjectsByUser,
enabled : !!userId
})

// 여기서 보면 userId를 Key값으로 사용하기 때문에 userId가 먼저 존재해야한다는 것을 enabled 로 명시해주는 것을 알 수 있다.

const { status, data : todos, error, isFetching} // 이렇게 기본적으로 사용될 수 있는 데이터가 있다.
이중 status = { "pending" | "error" | {...} } 등의 값을 가진다. 이를 이용하여 loading, refreshing등의 상태를 UI적으로 표현 가능하다.

// 만약 데이터를 불러왔을 때, window focus 로직이 필요하다면 focusMangaer.setEventListener를 사용해라!

[1] useParallelQueries() 호출
│
├── [2] useQueries() 실행 (병렬 Query 실행)
│ ├── [3] queryFn: fetchGraphQL() 실행
│ │ ├── [4] Apollo Client로 요청 전송
│ │ │ ├── [5] Apollo Middleware(Apollo Link) 가로채기
│ │ │ │ ├── [6] NestJS GraphQL Resolver에서 요청 처리
│ │ │ │ │ ├── [7] NestJS Service에서 DB 조회 후 응답 반환
│ │ │ │ │ │ ├── [8] Apollo Link를 거쳐 React Query로 전달
│ │ │ │ │ │ │ ├── [9] React Query에서 캐싱 후 `data` 반환
│ │ │ │ │ │ │ ├── [10] 컴포넌트에서 `queryResults` 사용 가능!
│ │ │ │ │ │ │ │
├── [11] mutations 실행 (mutationFn: mutateGraphQL() 실행)
├── [12] Apollo Client로 Mutation 요청 전송
│ ├── [13] Apollo Middleware(Apollo Link) 가로채기
│ │ ├── [14] NestJS GraphQL Resolver에서 요청 처리
│ │ │ ├── [15] NestJS Service에서 DB 업데이트 후 응답 반환
│ │ │ │ ├── [16] Apollo Link를 거쳐 React Query로 전달
│ │ │ │ │ ├── [17] React Query에서 캐싱 업데이트 후 `mutationResults` 반환
│ │ │ │ │ ├── [18] 컴포넌트에서 `mutationResults` 사용 가능!
