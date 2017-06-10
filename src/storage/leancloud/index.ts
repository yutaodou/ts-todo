import * as AV from 'leancloud-storage';
import { ToDo } from '../../model';

const appId = process.env.APP_ID;
const appKey = process.env.APP_KEY;
AV.init({ appId, appKey });

const ClassNames = {
    ToDo: 'ToDo'
}

export default class LeanCloudStore {
    async getInboxItems(): Promise<ToDo[]> {
        const query = new AV.Query(ClassNames.ToDo);
        query.equalTo('processed', false);
        const results = await query.find();
        return <ToDo[]> results;
    }
}