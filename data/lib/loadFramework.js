//立即執行函式, 並封裝所有變數避免衝突
var loadFrameworkEnd;
(function(){
    //動態依序載入JS
    //ref: http://blog.darkthread.net/blogs/darkthreadtw/archive/2009/01/15/4061.aspx
    var  importJS = function(jsConf, src, lookFor) {
        var headID = document.getElementsByTagName("head")[0]; 
        var newJs = document.createElement('script');
        newJs.type = 'text/javascript';
        newJs.src= jsConf[0].src;
        headID.appendChild(newJs);
        wait_for_script_load(jsConf, function() {
            jsConf.splice(0, 1);
            if(jsConf.length > 0) {
                importJS(jsConf, lookFor);
            }else
            {
                loadFrameworkEnd = true;
            }
        });
    }

    var wait_for_script_load = function(jsConf, callback) {
        var interval = setInterval(function() {
            if (typeof jsConf[0].lookFor === 'undefined') {
                jsConf[0].lookFor = '';
            }

            if (jsConf[0].lookFor === '') {
                clearInterval(interval);
                callback();
            } else if (eval("typeof " + jsConf[0].lookFor) !== 'undefined') {
                    clearInterval(interval);
                    callback();      
                }
            }, 50);
    }

    //陣列和載入JS檔的順序相同, lookFor為在要載入的檔案中, 
    //有用到的全域變數, importJS這個function, 會在找到lookFor的變數後
    //才會繼續loading下一個檔案, 如果沒有需要lookFor, 則以空字串代表
	var path = "data/lib";
    var frameworklistScript = 
    [
        { src: path + '/config.js'},
        { src: path + '/Record.js'},
        { src: path + '/Replay.js'},
        { src: path + '/EqualCondition.js'},
        { src: path + '/Util.js'},
        { src: path + '/core.js'},
        { src: path + '/DebugInfo.js'},
        { src: path + '/FpsAnalysis.js'},
        { src: path + '/Point.js'},
        { src: path + '/GameObject.js'},
        { src: path + '/Sprite.js'},
        { src: path + '/animationSprite.js'},
        { src: path + '/Scene.js'},
        { src: path + '/ResourceManager.js'},
        { src: path + '/level.js'},
        { src: path + '/Game.js'},
        { src: path + '/MouseManager.js'},
        { src: path + '/KeyBoardManager.js'},
        { src: path + '/TouchManager.js'},
        { src: path + '/gameMainMenu.js'},
        { src: path + '/Audio.js'},
        { src: path + '/Box2dWeb-2.1.a.3.js'},
        { src: path + '/Box2D.js'},
        { src: path + '/circleComponent.js'},
        { src: path + '/polygonComponent.js'},
        { src: path + '/squareComponent.js'},
        { src: path + '/triangleComponent.js'},
    ]
    importJS(frameworklistScript);
    
})();


    
