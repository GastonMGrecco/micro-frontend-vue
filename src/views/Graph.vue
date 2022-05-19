<script setup>

</script>

<template>
<div class="contenedor-circulo">
    <div class="circulo"></div>
    <div class="circulo"></div>
    <div class="circulo"></div>
</div>
</template>

<style scoped>
.contenedor-circulo{
    width:300px;
    height: 300px;
    margin:0 auto; 
    text-align:center;
    background: #E5E5E5;
    border-radius:50%;
}
.circulo {
    display:inline-block;
    width: 100px;
    height: 100px;
    margin-top: 100px;
    border-radius:50%;
    animation: girar 2s infinite linear;
    background-image: url("https://th.bing.com/th/id/OIP.1FuuLnbD8YmtFm4PTHZM6QHaG_?pid=ImgDet&w=193&h=182&c=7");
    background-position: center;
    background-size:140px;
}
@keyframes girar {
    from { transform: rotate(0deg)  translate(-100px) rotate(0deg); }
    to { transform: rotate(360deg) translate(-100px) rotate(-360deg); }
}
</style>