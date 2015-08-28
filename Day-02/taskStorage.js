function getTaskStorage(){
            var storage = window.localStorage;
            return {
                getAll : function(){
                    var result = [];
                    for(var i=0; i<storage.length; i++){
                        var key = storage.key(i);
                        var taskAsString = storage.getItem(key);
                        var task = JSON.parse(taskAsString);
                        result.push(task);
                    }
                    if (typeof this.onCountChange === 'function')
                        this.onCountChange(storage.length);
                    return result;

                },
                save : function(task){
                    task.id = task.id || Date.now();
                    storage.setItem(task.id, JSON.stringify(task));
                    if (typeof this.onCountChange === 'function')
                        this.onCountChange(storage.length);
                    return task;
                },
                toggle : function(taskId){
                    var taskAsString = storage.getItem(taskId);
                    var task = JSON.parse(taskAsString);
                    task.isCompleted = !task.isCompleted;
                    storage.setItem(task.id, JSON.stringify(task));
                },
                remove : function(taskId){
                    storage.removeItem(taskId);
                    if (typeof this.onCountChange === 'function')
                        this.onCountChange(storage.length);
                },
                onCountChange : null
            }
        }
