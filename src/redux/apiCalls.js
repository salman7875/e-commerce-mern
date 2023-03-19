import { publicRequest } from '../requestMethods'
import { userActions } from './userRedux'

export const login = async (dispatch, user) => {
  dispatch(userActions.loginStart())
  try {
    const res = await publicRequest.post('auth/login', user)
    dispatch(userActions.loginSuccess(res.data))
  } catch (err) {
    dispatch(userActions.loginFailure())
  }
}
