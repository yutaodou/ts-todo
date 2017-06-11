import * as _ from 'lodash';
import * as AV from 'leancloud-storage';
import { ToDo } from '../../model';

AV.init({
    appId: process.env.REACT_APP_LEANCLOUD_APP_ID,
    appKey: process.env.REACT_APP_LEANCLOUD_APP_KEY
});

const ClassNames = {
    ToDo: 'ToDo'
}

const ToDoObject = AV.Object.extend(ClassNames.ToDo);

class LeanCloudStore {
    static async getInboxItems(): Promise<ToDo[]> {
        const query = new AV.Query(ClassNames.ToDo);
        query.equalTo('processed', false);
        const results = await query.find();
        return _.map(results, mapToDo);
    }

    static async addToDo(todo: ToDo): Promise<ToDo> {
        const todoObj = new ToDoObject();
        const acl = new AV.ACL();
        acl.setPublicReadAccess(true);
        acl.setPublicWriteAccess(true);
        todoObj.setACL(acl);
        for (var key in todo) {
            if (todo.hasOwnProperty(key)) {
                todoObj.set(key, todo[key])
            }
        }
        const result = await <ToDo> todoObj.save()
        return mapToDo(result);
    }

    static async toggleToDo(todoId: string, completed: boolean): Promise<ToDo> {
        var todo = AV.Object.createWithoutData(ClassNames.ToDo, todoId);
        todo.set('completed', completed);
        const result = await todo.save();
        return mapToDo(result);
    }
}

function mapToDo(record: any): ToDo {
    return {
        id: record.id,
        title: record.get('title'),
        completed: record.get('completed')
    }
}

export { LeanCloudStore as Storage }