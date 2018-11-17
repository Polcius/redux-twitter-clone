import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import { setAuthedUser } from "./authedUser";

export const RECEIVE_DATA = "RECEIVE_DATA";

const AUTHED_ID = "dan_abramov";

export function handleInitialData() {
  return dispatch =>
    getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
}
