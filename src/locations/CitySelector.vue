<template>
    <div class="container">
        <img class="construction hidden-sm-and-down" src="../assets/Under-Construction-Sign.png">
        <img class="construction-small hidden-sm-and-up" src="../assets/Under-Construction-Sign.png">
    </div>
</template>

<script>
export default {
    name: 'CitySelector',

}
</script>

<style scoped>
.container {
 display: flex;
 justify-content: center;
 align-content: center;
}
.construction {
    width: 964px;
}
.construction-small {
    width: 80%;
}
</style>