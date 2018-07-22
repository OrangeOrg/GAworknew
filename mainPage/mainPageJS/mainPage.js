var WGmap3D;
var initparameter = {
	infoBox: false
}

var tooltip;
var handlerPoint;
var handlerPolygon;
var handlerDis;
var handlerArea;
var handlerHeight;

var leftClick_handler;

var sceneBubble;

var closePanel;
var closeResultPanel;
var modelurl = ['data/xfc.s3m']


function initmap3D(){	
	$('#loadingbar').css({'display':'block'});
	WGmap3D = new Orange.WGmap3D('cesiumContainer', initparameter);
	$('#loadingbar').hide();
	if(!WGmap3D.scene.pickPositionSupported) {
		alert('不支持深度拾取,量算功能无法使用(无法进行鼠标交互绘制)！');
	}
}
var liClick=function(){
	alert('点集 ')
}
