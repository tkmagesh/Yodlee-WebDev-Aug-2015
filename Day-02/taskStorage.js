function getTaskStorage(){
            var storage = window.localStorage;
            return {
                getAll : function(){
                    var result = [];
                    for(var i=0; i<storage.length; i++){
                        var key = storage.key(i);
                        var taskName = storage.getItem(key);
                        var task = {
                            id : key,
                            name : taskName
                        };
                        result.push(task);
                    }
                    return result;
                },
                save : function(taskName){
                    var newTaskId = Date.now().toString();
                    storage.setItem(newTaskId, taskName);
                    var task = { id : newTaskId, name : taskName };
                    return task;
                },
                remove : function(taskId){
                    storage.removeItem(taskId);
                }
            }
        }
