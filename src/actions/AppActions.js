// //////////////////////////////////////////////
// Connect uPort
// //////////////////////////////////////////////

export const connectUport = (data) => {
  return {
    type: 'CONNECT_UPORT',
    data
  }
}

export const connectUport2 = (data) => {
  return {
    type: 'CONNECT_UPORT2',
    data
  }
}

export const updateNameInput = (data) => {
  return {
    type: 'UPDATE_NAME_INPUT',
    data
  }
}

export const updateDescriptionInput = (data) => {
  return {
    type: 'UPDATE_DESCRIPTION_INPUT',
    data
  }
}

export const updateBuffer = (data) => {
  return {
    type: 'UPDATE_BUFFER',
    data
  }
}

export const updateIPFS = (data) => {
  return {
    type: 'UPDATE_IPFS',
    data
  }
}

export const updateBadges = (data) => {
  return {
    type: 'UPDATE_BADGES',
    data
  }
}
// //////////////////////////////////////////////
// create Badge props
// //////////////////////////////////////////////

export const createBadgeREQUEST = () => {
  return {
    type: 'CREATE_BADGE_REQUEST'
  }
}

export const createBadgePENDING = (data) => {
  return {
    type: 'CREATE_BADGE_PENDING',
    data
  }
}

export const createBadgeSUCCESS = (data) => {
  return {
    type: 'CREATE_BADGE_SUCCESS',
    data
  }
}
export const createBadgeERROR = (data) => {
  return {
    type: 'CREATE_BADGE_ERROR',
    data
  }
}


// //////////////////////////////////////////////
// Get Assertion props
// //////////////////////////////////////////////

export const getBadgeREQUEST = () => {
  return {
    type: 'GET_BADGE_REQUEST'
  }
}
export const getBadgeSUCCESS = (data) => {
  return {
    type: 'GET_BADGE_SUCCESS',
    data
  }
}
export const getBadgeERROR = (data) => {
  return {
    type: 'GET_BADGE_ERROR',
    data
  }
}

export const createBadgeComplete = (data) => {
  return {
    type: 'CREATE_BADGE_COMPLETE'
  }
}

export const getBadgesComplete = (data) => {
  return {
    type: 'GET_BADGES_COMPLETE'
  }
}

export const goFindJobs = (data) => {
  return {
    type: 'GO_FIND_JOBS'
  }
}

export const goFindPeople = (data) => {
  return {
    type: 'GO_FIND_PEOPLE'
  }
}
// //////////////////////////////////////////////
// Complete Credentials Collect
// //////////////////////////////////////////////

export const credentialsCollectComplete = (data) => {
  return {
    type: 'CREDENTIALS_COLLECT_COMPLETE'
  }
}

// //////////////////////////////////////////////
// Register App Area Complete
// //////////////////////////////////////////////

export const registerAppAreaComplete = (data) => {
  return {
    type: 'LOGOUT'
    //type: 'CREDENTIALS_DEMO_COMPLETE'
  }
}
