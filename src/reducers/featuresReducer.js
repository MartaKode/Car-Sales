import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/featuresActions'

export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const featuresReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case ADD_FEATURE:
            const newFeature = {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price
            }
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features, newFeature]
                    // , price: state.car.price + newFeature.price
                },
                additionalFeatures: state.additionalFeatures.filter(item => {
                    // debugger
                    if (item.id !== newFeature.id) {
                        return item
                    }
                }),
                additionalPrice: state.additionalPrice + newFeature.price
            }

        case REMOVE_FEATURE:
            const addedFeature = {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price
            }
            return {
                ...state,
                additionalFeatures: [...state.additionalFeatures, addedFeature], 
                car:{
                    ...state.car,
                    features: state.car.features.filter(item => {
                        if(item.id !== addedFeature.id){
                            return item
                        }
                    })
                },
                additionalPrice: state.additionalPrice - addedFeature.price
            }

        default:
            return state;
    }
}