var Desktop = {
  options: {
    windowArea: ".window-area",
    windowAreaClass: "",
    taskBar: ".task-bar > .tasks",
    taskBarClass: ""
  },

  wins: {},

  createWindow: function(o) {
    var that = this;
//    o.onDragStart = function(pos, el) {
 //     win = $(el);
 //     $(".window").css("z-index", 1);
 //     if (!win.hasClass("modal")) win.css("z-index", 3);
  //  };
    o.onDragStop = function(pos, el) {
   //   win = $(el);
  //    if (!win.hasClass("modal")) win.css("z-index", 2);
    };
    o.onWindowDestroy = function(win) {
 //     that.removeFromTaskBar(win);
    };
    var w = $("<div>").appendTo($(this.options.windowArea));
    var wnd = w.window(o).data("window");

    var win = wnd.win;
   
    w.remove();
  }
};

// Desktop.setup();
