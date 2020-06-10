export const ADD_FEATURE = 'ADD_FEATURE'

export const addFeature = (newFeatureObj) => {
    return { type: ADD_FEATURE, payload: newFeatureObj }
}


export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const removeFeature = (addedFeatureObj) => {
    return {type: REMOVE_FEATURE, payload: addedFeatureObj}
}