var Desktop = {
  options: {
    windowArea: ".window-area",
    windowAreaClass: "",
    taskBar: ".task-bar > .tasks",
    taskBarClass: ""
  },

  createWindow: function(o) {
    var that = this;
    var w = $("<div>").appendTo($(this.options.windowArea));
    var wnd = $("body").window(o).data("window");
   
    w.remove();
  }
};
