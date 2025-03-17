//SSR 시험창구

import { fetchGraphQL } from "graphql/fetch";
import { UserDataType } from "graphql/user/user.fragments";

const getUsersFromGraphQL = await fetchGraphQL<"getUsers">({
  queryKey: ["getUsers", {}],
});

const getUserFromGraphQL = await fetchGraphQL<"getUser">({
  queryKey: ["getUser", { id: "2" }],
});

// const getHospitalsFromGraphql = await fetchGraphQL<"getHospitals">({
//   queryKey: ["getHospitals", {}],
// });

// const twoUser = await fetchGraphQL<"getUser">({
//   queryKey: ["getUser", { id: "2" }],
// });

// const getUsersFromRest = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/hospitals");
//   const data = await res.json();
//   console.log("REST DATA : ", data);
//   return data;
// };

// async function createUser() {
//   const newUser = await mutateGraphQL<"createUser">({
//     mutationKey: "createUser",
//     variables: {
//       name: "John Doe",
//       email: "john@example.com",
//     },
//   });

//   console.log("Created User:", newUser);
// }

export default async function UsersPage() {
  const { users } = getUsersFromGraphQL;
  console.log("여긴 바깥", users);
  console.log(typeof users);

  // const { hospitals } = getHospitalsFromGraphql;
  // console.log("병원임니당", hospitals);

  console.log(getUserFromGraphQL);
  console.log(getUsersFromGraphQL);
  const { user: oneUser } = getUserFromGraphQL;
  console.log(oneUser);

  // console.log(oneUser);
  // console.log(twoUser);

  // const RestUsers = await getUsersFromRest();
  // console.log("한겹 벗겨!", RestUsers);

  // const queries = useQueryStreamLine({
  //   queries: [
  //     { queryKey: "getUsers" },
  //     { queryKey: "getUser", variables: { id: "2" } },
  //   ],
  // });

  // const { users } = queries.getUsers.data;
  // const { getUser: oneUser } = queries.getUser.data;
  return (
    <div className="flex gap-12">
      <div className="bg-pink-300 text-black font-poppins text-2xl p-24">
        {users.map((user: UserDataType) => (
          <div key={user.id}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <hr />
          </div>
        ))}
        <div className="bg-black text-white font-poppins text-4xl p-24">
          {oneUser ? (
            <div>
              <p>ID: {oneUser.id}</p>
              <p>Name: {oneUser.name}</p>
              <p>Email: {oneUser.email}</p>
            </div>
          ) : (
            "No user found"
          )}
        </div>
        {/* <div className="bg-black text-white font-poppins text-4xl p-24">
          {twoUser.getUser ? (
            <div>
              <p>ID: {twoUser.getUser.id}</p>
              <p>Name: {twoUser.getUser.name}</p>
              <p>Email: {oneUser.email}</p>
            </div>
          ) : (
            "No user found"
          )}
        </div> */}
      </div>
      {/* <button onClick={() => createUser()}>작동해라 얍</button> */}
      {/* <div className="bg-blue-300 text-black font-poppins text-2xl p-24">
        {RestUsers.map((user: UserDataType) => (
          <div key={user.id}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <hr />
          </div>
        ))}
      </div> */}
    </div>
  );
}
