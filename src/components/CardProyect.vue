<template>
<div class="cardProyectTemplate">
    <div class="card-content">
        <p>{{titulo}}</p><h3>{{titulo}}</h3>
        <p>{{ descripcion }}</p>
        <br>
        <small v-if="extra">{{ extra }}</small>
    </div>
</div>
</template>

<script>
export default {
    //name:'card',
    props: {
        titulo: String,
        descripcion: String,
        extra: String
    }
};
</script>

<style>
.cardProyectTemplate {
    padding: 20px;
    border: 1px solid #16d33f;
    background-color: #1B1F24;
    color: white;
    border-radius: 25px;
    max-width: 400px;
    box-sizing: border-box;
}
.card-content{
    width: 350px;
    height: 160px;
    box-sizing: border-box;
}

.cardProyectTemplate h3 {
    text-align: center;
    color: #16d33f;
    box-sizing: border-box;
}
</style>
