import {
    GET_ALL_COUNTRIES,
    GET_SEARCH_NAME,
    GET_DETAIL,
    POST_ACTIVITY,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,   
    GET_ORDER_ALF,
    GET_CANTD_POBLATION,
    GET_PAGE,
} from './actions';

const initialState = {
    allCountries: [],
    countries: [],
    activities: [],
    details: [],
    page: 1
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                // countries: action.payload
            };
        case GET_SEARCH_NAME:
            return {
                ...state,
                allCountries: action.payload
            };
        case GET_DETAIL:
            return {
                ...state,
                details: action.payload
            };
        case POST_ACTIVITY:
            return {
                ...state,
                activities: action.payload
            };
        case FILTER_BY_CONTINENT:
            const ctry = state.countries;
            const continetFilter = action.payload === 'All'
                ? ctry
                : ctry.filter(c => c.continet === action.payload)
            return {
                ...state,
                allCountries: action.payload
            };
        case FILTER_BY_ACTIVITY:
            let newArr = []
            state.countries.map(c => c.activities.forEach(e => {
                if (e.name === action.payload) {
                    newArr.push(e)
                }
            }))

            return {
                ...state,
                allCountries: action.payload
            };
        case GET_ORDER_ALF:
            const organized = state.countries;
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
                countries: order
              };
        case GET_CANTD_POBLATION:
            let orderPopulation =
        action.payload === "Menor a Mayor"
          ? state.countries.sort((a, b) => {
              if (a.population > b.population) {
                return 1;
              } else if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort((a, b) => {
              if (a.population > b.population) {
                return -1;
              } else if (b.population > a.population) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: orderPopulation,
      };
        case GET_PAGE:
            return {
                ...state,
                page: action.payload                
            };
       
        default:
            return state;
    }
};
