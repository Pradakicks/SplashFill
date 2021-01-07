window.onload = function () {
    var toggled = false
    var toggled1 = false
    var toggled2 = false
document.getElementById('toggle-btn').onclick = function toggle(){
				if(!toggled){
					toggled = true;
					document.getElementById("toggle-btn").style.display = "none"
					document.getElementById("toggle-btn").value = true
					document.getElementById("toggle-btn1").style.display = "block"
					document.getElementById("toggle-btn1").value = true;
					return;
				}
				if(toggled){
					toggled = false;
                    document.getElementById("toggle-btn").style.display = "block";
                    document.getElementById("toggle-btn").value = false
                    document.getElementById("toggle-btn1").style.display = "none";
                    document.getElementById("toggle-btn1").value = false;
					return;
				}
            } 
document.getElementById('toggle-btn1').onclick = function toggle(){
    if(!toggled){
        toggled = true;
        document.getElementById("toggle-btn").style.display = "none"
        document.getElementById("toggle-btn").value = true
        document.getElementById("toggle-btn1").style.display = "block"
        document.getElementById("toggle-btn1").value = true;
        return;
    }
    if(toggled){
        toggled = false;
        document.getElementById("toggle-btn").style.display = "block";
        document.getElementById("toggle-btn").value = false
        document.getElementById("toggle-btn1").style.display = "none";
        document.getElementById("toggle-btn1").value = false;
        return;
    }
} 
document.getElementById('req-toggle-btn').onclick = function toggle(){
    if(!toggled1){
        toggled1 = true;
        document.getElementById("req-toggle-btn").style.display = "none"
        document.getElementById("req-toggle-btn").value = true
        document.getElementById("req-toggle-btn1").style.display = "block"
        document.getElementById("req-toggle-btn1").value = true;
        return;
    }
    if(toggled1){
        toggled1 = false;
        document.getElementById("req-toggle-btn").style.display = "block";
        document.getElementById("req-toggle-btn").value = false
        document.getElementById("req-toggle-btn1").style.display = "none";
        document.getElementById("req-toggle-btn1").value = false;
        return;
    }
} 
document.getElementById('req-toggle-btn1').onclick = function toggle(){
if(!toggled1){
toggled1 = true;
document.getElementById("req-toggle-btn").style.display = "none"
document.getElementById("req-toggle-btn").value = true
document.getElementById("req-toggle-btn1").style.display = "block"
document.getElementById("req-toggle-btn1").value = true;
return;
}
if(toggled1){
toggled1 = false;
document.getElementById("req-toggle-btn").style.display = "block";
document.getElementById("req-toggle-btn").value = false
document.getElementById("req-toggle-btn1").style.display = "none";
document.getElementById("req-toggle-btn1").value = false;
return;
}
} 
document.getElementById('normal-aco-toggle').onclick = function toggle(){
    if(!toggled2){
        toggled2 = true;
        document.getElementById("normal-aco-toggle").style.display = "none"
        document.getElementById("normal-aco-toggle").value = true
        document.getElementById("normal-aco-toggle1").style.display = "block"
        document.getElementById("normal-aco-toggle1").value = true;
        return;
    }
    if(toggled2){
        toggled2 = false;
        document.getElementById("normal-aco-toggle").style.display = "block";
        document.getElementById("normal-aco-toggle").value = false
        document.getElementById("normal-aco-toggle1").style.display = "none";
        document.getElementById("normal-aco-toggle1").value = false;
        return;
    }
} 
document.getElementById('normal-aco-toggle1').onclick = function toggle(){
if(!toggled2){
    toggled2 = true;
document.getElementById("normal-aco-toggle").style.display = "none"
document.getElementById("normal-aco-toggle").value = true
document.getElementById("normal-aco-toggle1").style.display = "block"
document.getElementById("normal-aco-toggle1").value = true;
return;
}
if(toggled2){
    toggled2 = false;
document.getElementById("normal-aco-toggle").style.display = "block";
document.getElementById("normal-aco-toggle").value = false
document.getElementById("normal-aco-toggle1").style.display = "none";
document.getElementById("normal-aco-toggle1").value = false;
return;
}
}
			

        
    }