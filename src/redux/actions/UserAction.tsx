import { Dispatch } from 'redux';
import { setLoading } from '../creators/LoadingCreator';
import {
    storeDrugs,
    storeProcedure,
    storeFavDrug,
    storeFavProcedure,
    storeGuideLinesAndChecklistPdf
} from '../creators/AuthCreators';
import { AppActionTypes } from '../types';
import {
    executePostRequest,
    executeGetRequest,
    executePutRequest,
    executeDeleteRequest,
} from '../../utils/FetchUtils';
import { RootState } from '../reducers'
import { } from '../../utils/ValidationHelper'
import RNFS from 'react-native-fs';
import Config from '../../utils/Config'



const getPDFLink = async (result) => {
    console.log("here");
    let guideline = result.response.full_guideline_list
    let checklist = result.response.check_list

    /**
    * save all  guideline list pdf in device storage 
    */
    for (let i = 0; i < guideline.length; i++) {
        let DownloadFileOptions = {
            fromUrl: Config.server.BASE_URL + "/" + guideline[i].guideline_file,          // URL to download file from
            toFile: RNFS.DocumentDirectoryPath + "/" + guideline[i].file_name       // Local filesystem path to save the file to
        }
        try {
            RNFS.downloadFile(DownloadFileOptions).promise
                .then((val) => {
                    console.log("value guideline===>", val, RNFS.DocumentDirectoryPath + "/" + guideline[i].file_name);
                }).catch(function (error) {
                    console.log(error.message);
                });

        } catch (err) {
            console.log("err==>", err);

        }

    }
    /**
     * save all check  list pdf in device storage 
     */
    for (let i = 0; i < checklist.length; i++) {
        let DownloadFileOptions = {
            fromUrl: Config.server.BASE_URL + "/" + checklist[i].checklist_file,          // URL to download file from
            toFile: RNFS.DocumentDirectoryPath + "/" + checklist[i].file_name       // Local filesystem path to save the file to
        }
        try {
            RNFS.downloadFile(DownloadFileOptions).promise
                .then((val) => {
                    console.log("value checklist===>", val, RNFS.DocumentDirectoryPath + "/" + checklist[i].file_name);
                }).catch(function (error) {
                    console.log(error.message);
                });

        } catch (err) {
            console.log("err==>", err);

        }

    }


}



export const GetAllDrugsAction = () => {
    return async (dispatch: Dispatch<AppActionTypes>, getState: () => RootState,) => {
        const token = getState().persistedReducer.token;
        // dispatch(setLoading(true));
        const result: any = await executeGetRequest(
            'api/v1/drugs/?search=',
            token
        );
        if (result.code == 200) {
            dispatch(storeDrugs(result?.response))
            dispatch(storeFavDrug(result?.response?.favorite_drugs))
        }
        dispatch(GetAllProcedureAction())
        // dispatch(setLoading(false));
        return result
    };
};


export const GetAllProcedureAction = () => {
    return async (dispatch: Dispatch<AppActionTypes>, getState: () => RootState,) => {
        const token = getState().persistedReducer.token;
        // dispatch(setLoading(true));
        const result: any = await executeGetRequest(
            'api/v1/procedure/?search=',
            token
        );
        if (result.code == 200) {
            dispatch(storeProcedure(result?.response))
            dispatch(storeFavProcedure(result?.response?.fav_procedure_list))
            dispatch(GetAllgGuidelineAndChecklistAction())
        }
        // dispatch(setLoading(false));
        return result
    };
};

export const GetAllgGuidelineAndChecklistAction = () => {
    return async (dispatch: Dispatch<AppActionTypes>, getState: () => RootState,) => {
        const token = getState().persistedReducer.token;
        // dispatch(setLoading(true));
        const result: any = await executeGetRequest(
            'api/v1/guidelineandchecklist/get_checklist_and_guideline_list',
            token
        );
        if (result.code == 200) {
            dispatch(storeGuideLinesAndChecklistPdf(result.response))
            getPDFLink(result)
        }
        dispatch(setLoading(false));
        return result
    };
};


export const FavoriteDrugAction = (data: any) => {
    console.log("params", data);

    return async (dispatch: Dispatch<AppActionTypes>, getState: () => RootState,) => {
        const token = getState().persistedReducer.token;
        // dispatch(setLoading(true));
        const result: any = await executePostRequest(
            'api/v1/drugs/mark_drug_as_favorite',
            data,
            token
        );
        console.log("FavDrug====>", result);
        dispatch(setLoading(false));
        return result

    };
};

export const FavoriteProcedureAction = (data: any) => {
    return async (dispatch: Dispatch<AppActionTypes>, getState: () => RootState,) => {
        const token = getState().persistedReducer.token;
        // dispatch(setLoading(true));
        const result: any = await executePostRequest(
            'api/v1/procedure/mark_procedure_as_favorite',
            data,
            token
        );
        console.log("FavProcedure====>", result);
        dispatch(setLoading(false));
        return result

    };
};

