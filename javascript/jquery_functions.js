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

  $("#recipe-of-the-week-img").click(function() {
    window.location.href = "html/recipe1.html";
  })

  var currentStep = 0;
  var images = [
    '../Images/Step-1.png',
    '../Images/Step-2.png',
    '../Images/Step-2.2.png',
    '../Images/Step-3.png',
    '../Images/Step-4.png',
    '../Images/Step-5.png',
    '../Images/Step-6.png',
    '../Images/Step-7.png',
    '../Images/Step-8.png',
    '../Images/Step-9.png',
    '../Images/Step-10.png',
    '../Images/Step-11.png',
  ]

  var videos = [
    '../Videos/Step 1.mp4',
    '../Videos/Step 2.mp4',
    '../Videos/Step 2.2.mp4',
    '../Videos/Step 3.mp4',
    '../Videos/Step 4.mp4',
    '../Videos/Step 5.mp4',
    '../Videos/Step 6.mp4',
    '../Videos/Step 7.mp4',
    '../Videos/Step 8.mp4',
    '../Videos/Step 9.mp4',
    '../Videos/Step 10.mp4',
  ]
  $("#prev-button").click(function() {
    if (currentStep === 0) return;
    currentStep = currentStep - 1;

    $("#video-img").attr("hidden", false);
    $("#video-player").attr("hidden", true);

    $("#video-img").attr("src", images[currentStep])
    $("#video-source").attr("src", videos[currentStep])
    $("#video-player").get(0).load();
  })
  $("#next-button").click(function() {
    if (currentStep === 11) return;
    currentStep = currentStep + 1;

    $("#video-img").attr("hidden", false);
    $("#video-player").attr("hidden", true);

    $("#video-img").attr("src", images[currentStep])
    $("#video-source").attr("src", videos[currentStep])
    $("#video-player").get(0).load();
  })

  $("#video-img").click(function() {
    if (currentStep === 11) return;
    $("#video-img").attr("hidden", true);
    $("#video-player").attr("hidden", false);
  })

})