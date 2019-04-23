 
  /* when document is ready */
  $(function(){

    /*
     * initiate the plugin without buttons and numeration
     * setting midRange to 4 (number of pages)
     * perPage to 1 and links to 'title'
     */
     $("div.holder").jPages({
      containerID : "pageContainer",
      first       : false,
      previous    : false,
      next        : false,
      last        : false,
      perPage     : 1,
      midRange    : 3,
      links       : "title",
      animation   : "fadeInUp"
    });

   });
