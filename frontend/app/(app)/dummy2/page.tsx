// CSR 및 React Query 시험창구

"use client";

import { UserDataType } from "graphql/user/user.fragments";
import { processResultType, useQueryStreamLine } from "middleware/reactQuery.middleware";

const Dummy2Page = () => {
  const queryResults = useQueryStreamLine({
    queries: [{ queryKey: ["getUser"], variables: { id: "4" } }, { queryKey: ["getUsers"] }],
  });

  const user = processResultType<{ getUser: UserDataType }>(queryResults.getUser.data)?.getUser;
  const users =
    processResultType<{ users: UserDataType[] }>(queryResults.getUsers.data)?.users ?? [];

  // const { hospital } = queries.getHospital?.data || {};

  console.log(JSON.stringify(user, null, 2));
  console.log("👤 유저 정보:", users);
  // console.log("🏥 병원 정보:", hospital);

  return (
    <>
      <div className="bg-blue-300 text-black font-poppins text-2xl">
        <div>{user?.id}</div>
        <div>{user?.name}</div>
        <div>{user?.email}</div>
      </div>
    </>
  );
};

export default Dummy2Page;

// const { mutateAsync: createUser } = useMutationStreamLine({
//   mutationKey: "createUser",
// });

// const handleCreateUser = async () => {
//   const newUser = await createUser({ name: "John Doe", email: "john@example.com" });
//   console.log("🆕 생성된 유저:", newUser);
// };
