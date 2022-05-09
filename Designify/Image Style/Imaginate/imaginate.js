Vue.component('imageOverlay',{
	props:['imageUrl','in','out','id'],
template:`
<div class="Image-Overlay" :id="id">
  <img  :src="imageUrl" alt="Avatar" class="Image-Overlay--Image" :id="ImageID">
  <div class="Image-Overlay--Overlay animated" :id="OverlayID">
    <slot></slot>
  </div>
</div>
`,
computed:{
	ImageID:function(){
		return this.id+'Image';
	},
	OverlayID:function(){
		return this.id + 'Overlay';
	}
},
mounted:function(){	
	$("#"+this.id).mouseover(function(){
		$("#"+this.OverlayID).removeClass(this.out).addClass(this.in).css('display','block');		
	}.bind(this));
	$("#"+this.id).mouseleave(function(){
  		$("#"+this.OverlayID).removeClass(this.in).addClass(this.out);
  		window.setTimeout(function(){
           	$("#"+this.OverlayID).css("display",'none');
        }, 1000);
	}.bind(this));
}
});