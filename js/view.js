(function($, app){


  var $listDom = $('#noteList');
  var noteTemplateHtml = $('#noteTemplate').html();

  app.view ={

    addNote: function(event){
      var $field = $(event.currentTarget);
      var fieldValue = $field.val();

      if (event.keyCode !== 13 || fieldValue === "") {

        console.log('event stop');
        return false;
      }

      $field.val('');

      var memo = $.extend({}, app.model, {
        id: app.util.uniqId(),
        context: fieldValue
      });

      //console.log('new​ note.model:', note);
      app.collection.add(memo);
    },
    render: function(){
      $listDom.html(tmpl( memoTemplateHtml, {notes: app.collection.toJSON() } ));
    }
  };

  app.$wrap.on('addCollection', app.view.render);
  app.$wrap.on('removeCollection', app.view.render);


})(jQuery, MyNote);

