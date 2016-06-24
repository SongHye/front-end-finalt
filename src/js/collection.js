(function(app, $){

  var data = [];

  app.collection = {
    set: function(arr){
      data = arr;
      app.$wrap.trigger("addCollection", [data]);
    },
    toJSON: function() {
      return data;
    },
    add: function (note) {
      data.push(note);
      app.$wrap.trigger("addCollection", [data]);
    },
    remove: function (id) {

      for (var i = 0; i < data.length; i++) {

        if (data[i].id === id) {
          console.log('find', i)
          //data에서  memo를 지워야해
          data.splice(i, 1);
          break;
        }

      }//end for

      app.$wrap.trigger("removeCollection", [data]);

    },
   check: function(id){
      
      for(var i=0; i<data.length; i++){
         if(data[i].id === id){
            console.log('check find',i)
            if(data[i].checker === true){
               data[i].checker = false
            }
            else{
               data[i].checker = true
            }
            
            console.log(data[i].title + "'s checker is ")
            console.log(data[i].checker)
         
         }
      }
      app.$wrap.trigger("checkCollection", [data]);
   }

  };
})(MyNote, jQuery);
