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
    window.location.href = "html/bakedsalmon.html";
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

  var stepInstructions = [
    'Cut the salmon filet into 3-4 pieces.',
    'Finely grate the ginger.',
    'Finely chop the garlic.',
    'Add ginger and garlic to a bowl.',
    'In the same bowl add vinegar, soy sauce, honey, sesame oil.',
    'In the same bowl add the black pepper.',
    'In the same bowl add the salt.',
    'Mix together.',
    'Coat the salmon with the marinade.',
    'Cover with plastic wrap and let it chill in the fridge for at least half an hour.',
    'Bake salmon at 350F for 10 minutes.',
    'Enjoy!'
  ]
  
  $("#prev-button").click(function() {
    if (currentStep === 0) return;
    currentStep = currentStep - 1;

    $("#current-step").html(stepInstructions[currentStep]);
    $("#video-img").attr("hidden", false);
    $("#video-player").attr("hidden", true);

    $("#video-img").attr("src", images[currentStep])
    $("#video-source").attr("src", videos[currentStep])
    $("#video-player").get(0).load();
  })
  $("#next-button").click(function() {
    if (currentStep === 11) return;
    currentStep = currentStep + 1;

    $("#current-step").html(stepInstructions[currentStep]);
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