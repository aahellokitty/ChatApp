<template>
    <div id="pyqlists">
        <div class="face">
            <img class="imglist" :src="url" alt="">
        </div>
        <div class="info">
            <div>{{nick}}</div>
            <div>
               {{content}}
            </div>
            <div class="image">
                <img v-for="(item,index) in imagelists" :key="index" :src="item" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["url",'nick','content','imagelists']
}
</script>
<style lang='scss'>
#pyqlists{
    width: 100%;
    display: flex;
    flex-direction: row;
    .face{
        flex: 0.2;
        text-align: center;
        .imglist{
            width: 3rem;
            height: 3rem;
            border-radius: 1rem;
        }
    }
    .info{
        flex: 0.7;
        display: flex;
        flex-direction: column;
        div{
            margin: 0.2rem 0;
        }
        .image{
            flex: 1;
            img{
                width: 5rem;
                height: 5rem;
                margin: 0.2rem 0 0 0.2rem;
            }

        }
    }
}
</style>