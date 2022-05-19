

<script setup>


</script>

<template>
<div class="container">
    <div class="contenedor-circulo">
        <div class="circulo1"></div>
    </div>
    <div class="contenedor-circulo">
        <div class="circulo2"></div>
    </div>
    <div class="contenedor-circulo">
        <div class="circulo3"></div>
    </div>
</div>
</template>

<style scoped>
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}
.container {
    display:flex;
    flex-direction: row;
    justify-content: center;
}
.contenedor-circulo{
   
    margin:25px; 
    text-align:center;
    background: transparent;
    border-radius:50%;
   
}
.circulo1 {
    display:inline-block;
    width: 100px;
    height: 100px;
    margin-top: 100px;
    border-radius:50%;
    animation: girar 3s infinite linear;
    background-image: url("https://th.bing.com/th/id/OIP.OCudoKwh31DS7ONiRpocCgHaEc?pid=ImgDet&rs=1");
    background-position: center;
    background-size:140px;
    background-repeat: no-repeat;
    box-shadow: 5px 5px 30px 30px rgb(4, 61, 86);
}
.circulo2 {
    display:inline-block;
    width: 150px;
    height: 150px;
    margin-top: 100px;
    border-radius:50%;
    animation: girar 3s infinite linear;
    background-image: url("https://th.bing.com/th/id/OIP.1FuuLnbD8YmtFm4PTHZM6QHaG_?pid=ImgDet&w=193&h=182&c=7");
    background-position: center;
    background-size:210px;
    box-shadow: 5px 5px 30px 30px rgb(73, 62, 3);
}
.circulo3 {
    display:inline-block;
    width: 100px;
    height: 100px;
    margin-top: 100px;
    border-radius:50%;
    animation: girar 3s infinite linear;
    background-image: url("https://th.bing.com/th/id/OIP._Fgi-1YZl2GGoSYPXFtLQwHaHa?pid=ImgDet&rs=1");
    background-position: center;
    background-size:140px;
    box-shadow: 5px 5px 30px 30px rgb(12, 11, 4);
}
@keyframes girar {
    from { transform: rotate(0deg)  translate(-100px) rotate(0deg); }
    to { transform: rotate(360deg) translate(-100px) rotate(-360deg); }
}
</style>