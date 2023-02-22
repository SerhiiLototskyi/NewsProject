const initialState = {

}

export const ProfileReducer = (state= initialState, action: ProfileActionsType) => {
    switch (action.type) {

        default:
            return state
    }
}

//export const setProfileAC = (profile: ProfileType) => ({type: 'GET-PROFILE', profile} as const)

/*
export const SetUserProfileThunk = (userId: number): AppThunk => async (dispatch) => {
    dispatch(setInitializeStatusAC(true))
    try {
        const res = await ProfileAPI.getUserProfile(userId)
        dispatch(setProfileAC(res.data))
    } catch (e) {
        throw new Error()
    } finally {
        dispatch(setInitializeStatusAC(false))
        dispatch(firstInitializeMeAC(false))
    }
}
*/

export type ProfileActionsType = any
