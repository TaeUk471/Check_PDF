import { DashboardDataType } from "./dashboard/dashboard.fragments";
import { GET_DASHBOARD } from "./dashboard/dashboard.queries";
import { HospitalDataType, HospitalMessage } from "./hospital/hospital.fragments";
import { CREATE_HOSPITAL, DELETE_HOSPITAL } from "./hospital/hospital.mutation";
import { GET_HOSPITALS } from "./hospital/hospital.queries";
import { FolderNames, TypeMessage, TypesDataType } from "./merge/type.fragment";
import { CREATE_TYPE } from "./merge/type.mutation";
import { GET_TYPES } from "./merge/type.queries";
import { NewTypesDataType, OldTypesDataType } from "./newType/newType.fragment";
import { GET_NEW_TYPES } from "./newType/newType.queries";
import { NotificationDataType } from "./notification/notification.fragment";
import { GET_NOTIFICATIONS } from "./notification/notification.queries";
import { UserDataType, UserMessage } from "./user/user.fragments";
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./user/user.mutations";
import { GET_USER, GET_USERS } from "./user/user.queries";

// Type 문서에서
// query 값은 GraphQl 문서 ( DocumentNode )
// variables 값은 해당 쿼리에 전달할 변수( params )를 의미
// Return 값에 대한 Type도 명시해서 여기서 처리 (자동 추출보다 안전!)

export const GRAPHQL_QUERIES = {
  /**
   * User
   */
  getUser: { query: GET_USER, variables: { id: "" }, result: { user: {} as UserDataType } },
  getUsers: { query: GET_USERS, variables: {}, result: { users: [] as UserDataType[] } },

  /**
   * Hospital
   */
  getHospitals: {
    query: GET_HOSPITALS,
    variables: {},
    result: { hospitals: [] as HospitalDataType[] },
  },

  /**
   * Notification
   */
  getNotifications: {
    query: GET_NOTIFICATIONS,
    variables: {},
    result: { notifications: [] as NotificationDataType[] },
  },

  /**
   * Merge
   */
  getTypes: {
    query: GET_TYPES,
    variables: {},
    result: { HospitalFiles: [] as TypesDataType[], folderNames: {} as FolderNames },
  },

  /**
   * Dashboard
   */
  getDashboard: {
    query: GET_DASHBOARD,
    variables: {},
    result: { DashboardData: {} as DashboardDataType },
  },

  /**
   * NewType
   */
  getNewType: {
    query: GET_NEW_TYPES,
    variables: {},
    result: {
      group: [] as OldTypesDataType[],
      newHospitalTypeFiles: [] as NewTypesDataType[],
      folderNames: {} as FolderNames,
    },
  },
};

export const GRAPHQL_MUTATIONS = {
  /**
   * User
   */
  createUser: {
    mutation: CREATE_USER,
    variables: { name: "", email: "" },
    result: { message: {} as UserMessage },
  },
  updateUser: {
    mutation: UPDATE_USER,
    variables: { id: "", name: "", email: "" },
    result: { message: {} as UserMessage },
  },
  deleteUser: {
    mutation: DELETE_USER,
    variables: { id: "" },
    result: { message: {} as UserMessage },
  },

  /**
   * Hospital
   */
  createHospital: {
    mutation: CREATE_HOSPITAL,
    variables: { hospitalId: 0, hospitalName: "" },
    result: { message: {} as HospitalMessage },
  },
  deleteHospital: {
    mutation: DELETE_HOSPITAL,
    variables: { hospitalId: 0 },
    result: { message: {} as HospitalMessage },
  },

  /**
   * Merge
   */
  createType: {
    mutation: CREATE_TYPE,
    variables: { hospitalId: 0 },
    result: { message: {} as TypeMessage },
  },
};

export type GraphQLQueries = typeof GRAPHQL_QUERIES;
export type GraphQLMutations = typeof GRAPHQL_MUTATIONS;
