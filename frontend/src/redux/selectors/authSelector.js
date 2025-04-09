export const selectUser = (state) => state.auth.user;
export const selectAuthToken = (state) => state.auth.token;
export const selectHasCompletedStartup = (state) => state?.auth?.user?.displayName != null || false
