import {
  GET_ALL_COUNTRIES,
  GET_SEARCH_NAME,
  GET_DETAIL,
  POST_ACTIVITY,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  GET_ORDER_ALF,
  GET_CANTD_POBLATION,
  GET_ACTIVITIES,
} from './actions';

const initialState = {
  allCountries: [],
  copyCountries: [],
  activitiesCreated: [],
  detail: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        copyCountries: action.payload
      };
    case GET_SEARCH_NAME:
      return {
        ...state,
        allCountries: action.payload
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload
      };
    case POST_ACTIVITY:
      return {
        ...state,
      };
    case FILTER_BY_CONTINENT:
      const ctry = state.copyCountries;
      const continetFilter = action.payload === 'All'
        ? ctry
        : ctry.filter(c => c.continent === action.payload)
      return {
        ...state,
        allCountries: continetFilter
      };
    case FILTER_BY_ACTIVITY:
      let newArr = []     
      state.copyCountries.map(c => c.Activities.forEach(e => {
        if (e.name === action.payload) {
          newArr.push(c)
        }
      }))

      return {
        ...state,
        allCountries: newArr
      };
    // case GET_ORDER_ALF:
      // let order = action.payload === 'A-Z' 
      // ? state.copyCountries.sort((a,b) => a.name - b.name) 
      // : state.copyCountries.sort((a,b) => b.name - a.name)
      // return{
      //     ...state,
      //     allCountries: order
      // };   
    case GET_ORDER_ALF:
      const organized = state.allCountries;
      const order = organized.sort(function (a, b) {
        if (action.payload === 'A-Z') {
          if (a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          } else {
            return 0;
          }
        } else if (action.payload === 'Z-A') {
          if (a.name > b.name) {
            return -1;
          } else if (a.name < b.name) {
            return 1;
          } else {
            return 0;
          }
        }

        return 'ordered list';
      });

      return {
        ...state,
        allCountries: order
      };  
    case GET_CANTD_POBLATION:
     
      let orderPopulation = action.payload === 'Menor a Mayor' ? state.allCountries.sort((a,b) => a.population - b.population) :
        state.allCountries.sort((a,b) => b.population - a.population)
        return{
            ...state,
            allCountries: orderPopulation
        };      
    case GET_ACTIVITIES:
      return {
        ...state,
        activitiesCreated: action.payload
      };

    default:
      return state;
  }
};
