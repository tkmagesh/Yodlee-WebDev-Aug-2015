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
                    if (typeof this.onCountChange === 'function')
                        this.onCountChange(storage.length);
                    return result;

                },
                save : function(taskName){
                    var newTaskId = Date.now().toString();
                    storage.setItem(newTaskId, taskName);
                    var task = { id : newTaskId, name : taskName };
                    if (typeof this.onCountChange === 'function')
                        this.onCountChange(storage.length);
                    return task;
                },
                remove : function(taskId){
                    storage.removeItem(taskId);
                    if (typeof this.onCountChange === 'function')
                        this.onCountChange(storage.length);
                },
                onCountChange : null
            }
        }
