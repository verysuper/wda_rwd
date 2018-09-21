// JavaScript Document
//$(function(){}); == $(document).ready(function(){}); $(document).ready(function() {

$(document).ready(function() {
    var gg=0;
	var xx=0;
	var timee; 
	$("#myicon li").eq(0).addClass("th")
	//addClass("th")指定kk做為文字ICON滑鼠滑過顏色能變色,做出反應回饋

<!----按鈕控制圖片能滑動展示	--->
	$("#myicon li").click(function() {
        gg=$(this).index(); //this = 物件本身
		xx=gg*1200*-1;
		$("#boxin ul").animate({left:xx},1000,"easeOutElastic"); //時間為1秒
		$(this).addClass("th").siblings().removeClass();  // 換樣式>正在運作當中>移除別人CLASS
    });

<!----能自動定時輪播之語法---->
     function GoTime(){
		 $("#boxin ul").animate({left:xx},3000,"easeOutElastic");
		 $("#myicon li").removeClass().eq(gg).addClass("th");//此段謌法順序不能亂掉哦,要先removeClass()清除前面按鈕記憶,再eq(gg)是得知現在按鈕輪到那個順序,最後再addClass("th")讓該按鈕顏色能變更正確
		 if(gg<8){
			 gg+=1;
			 xx=gg*1200*-1;
			 }else{
			  gg=0;
			  xx=0;	 
			 }
		   timee=setTimeout(GoTime,5000);//5000為亳秒,等於5秒	 
		 }
       GoTime();//此GoTime();語法是用來呼叫上方所設定之function GoTime(){...}函數參數的  重新跑過GOTIME的FUNCTION 重新判斷當前位置
<!----若按了按鈕後先清除自動定時輪播之後再恢復之語法---->
        $("#boxin,#myicon").hover(function(){
			clearTimeout(timee);//這語法是只要游標停在按鈕上時,則清除計時,圖片則不會輪播會一直停止,方便網友看仔細圖片
			},function(){
			timee=setTimeout(GoTime,3000);  //3秒之後自動恢復輪播
			});      

});

/*
"slow"是指animate動畫之速度為慢(fast為快)
也可用1000數字來指定速度,數字大則慢,回彈面積也大
"easeOutElastic"是使圖片有來回彈簧效果,但要配合引用jquery-ui.min-1.11.2.js才會有效果,若引用則有來回彈簧效果
"easeInOutBack"是使圖片有彈回效果,但要配合引用jquery-ui.min-1.11.2.js才會有效果,若引用則無彈回效果
*/