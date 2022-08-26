//Action Creator
export const setAuth = (details) => {
    return {
      type: "NAME",
      details: {
       firstname : details.firstname,
       lastname : details.lastname
      }
    }
  }
 