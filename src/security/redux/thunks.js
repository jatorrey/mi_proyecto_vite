import { getInstitutesAll } from './actions/institutesAction';
import { SET_DATA_INSTITUTES } from './slices/institutesSlice';

export const GET_DATA_START = () => {
    return async (dispatch, getState) => {
        dispatch(
            SET_DATA_INSTITUTES(
                //FIC: lo que esta comentado es para cuando se utiliza
                //un reducer que contedra un arreglo de colecciones
                //tal sera el caso como el de catalogos.
                //{
                    //institutesDataArr: await getInstitutesAll(),
                    await getInstitutesAll(),
                //}
            )
        )
    };
};