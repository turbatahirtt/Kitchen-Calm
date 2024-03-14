jQuery(function() {

  $('input:checkbox').change(function() {
    if ($(this).is(':checked')) {
      let parent = $(this).parent();
      console.log(parent.children()[1]);
      parent.children().eq(1).css('text-decoration', 'line-through');
    }

    if ($(this).is(':not(:checked)')) {
      let parent = $(this).parent();
      console.log(parent.children()[1]);
      parent.children().eq(1).css('text-decoration', '');
    }
  })

})