// 기존 fetcter함수를 통해서 모두 zustand 에 저장하려던 전략 수정.

// import { create } from "zustand";

// import {
//   fetchCreateUser,
//   fetchDeleteUser,
//   fetchGetUsers,
//   fetchUpdateUser,
// } from "graphql/user/user.api";

// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// interface UserStore {
//   users: User[];
//   fetchUsers: () => Promise<void>;
//   createUser: (name: string, email: string) => Promise<void>;
//   updateUser: (id: string, name: string, email: string) => Promise<void>;
//   deleteUser: (id: string) => Promise<void>;
// }

// export const useUserStore = create<UserStore>(set => ({
//   users: [],

//   fetchUsers: async () => {
//     try {
//       const { users } = await fetchGetUsers();
//       set(() => ({ users })); //
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   },

//   createUser: async (name, email) => {
//     try {
//       const { createUser } = await fetchCreateUser(name, email);
//       set(state => ({ users: [...state.users, createUser] }));
//     } catch (error) {
//       console.error("Error creating user:", error);
//     }
//   },

//   updateUser: async (id, name, email) => {
//     try {
//       const { updateUser } = await fetchUpdateUser(id, name, email);
//       set(state => ({
//         users: state.users.map(user => (user.id === id ? updateUser : user)),
//       }));
//     } catch (error) {
//       console.error("Error updating user:", error);
//     }
//   },

//   deleteUser: async id => {
//     try {
//       await fetchDeleteUser(id);
//       set(state => ({ users: state.users.filter(user => user.id !== id) }));
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   },
// }));

// import { create } from "zustand";
// import { withMiddleware } from "./zustand.middleware";

// interface UserState {
//   user: string | null;
//   setUser: (user: string) => void;
// }

// export const useUserStore = create<UserState>()(
//   withMiddleware(
//     (set) => ({
//       user: null,
//       setUser: (user) => set({ user }),
//     }),
//     "user-storage"
//   )
// );
