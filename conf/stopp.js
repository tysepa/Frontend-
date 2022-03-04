const preventBack=()=>{
    window.history.forward()
};
setTimeout("preventBack()",0);
window.onunload = ()=>{
    null;
}