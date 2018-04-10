let initialState = {}

export default(state = initialState, payload) => {
  switch (payload.type) {

    case 'CONNECT_UPORT':
      return {
        ...state,
        uport: payload.data,
        credentials: payload.data,
        badgeFormPage: true,
      }

      case 'CONNECT_UPORT2':
      return {
        ...state,
        uport: payload.data,
        credentials: payload.data,
        getBadgesPage: true,
      }
    case 'UPDATE_NAME_INPUT':
      return {
        ...state,
        nameInput: payload.data
      }
    case 'UPDATE_DESCRIPTION_INPUT':
      return {
        ...state,
        descriptionInput: payload.data
      }
    case 'UPDATE_BUFFER':
      return {
        ...state,
        buffer: payload.data
      }
    case 'UPDATE_IPFS':
      return {
        ...state,
        ipfsHash: payload.data
      }
    case 'UPDATE_BADGES':
      return {
        ...state,
        badges: payload.data
      }
    case 'CREATE_BADGE_REQUEST':
      return {
        ...state,
        createBadgeInProgress: true
      }
    case 'CREATE_BADGE_PENDING':
      return {
        ...state
      }
    case 'CREATE_BADGE_SUCCESS':
      return {
        ...state,
        createBadgeInProgress: false,
        createBadge: payload.data
      }
    case 'CREATE_BADGE_ERROR':
      return {
        ...state,
        createBadgeInProgress: false,
        error: payload.data
      }
    case 'CREATE_BADGE_COMPLETE':
      return {
        ...state,
        badgeFormPage: false,
        getBadgesPage: true
      }
    case 'GET_BADGES_COMPLETE':
      return {
        ...state,
        badgeFormPage: true,
        getBadgesPage: false
      }
      case 'GO_FIND_JOBS':
      return {
        ...state,
        findJobsPage: true,
        findPeoplePage: false,
      }
      case 'GO_FIND_PEOPLE':
      return {
        ...state,
        findPeoplePage: true,
        findJobsPage: false,
      }
    case 'LOGOUT':
      return {
        ...state,
        uport: null,
        logOutPage: true
      }
    default:
      return state
  }
}
