<template>
    <div class="picture-size">
        <v-img
                src="https://source.unsplash.com/140x140/?portraits"
        ></v-img>
        <div class="picture-size__full">
            <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.3681 18.6223C13.1965 18.6223 13.8681 19.2939 13.8681 20.1223C13.8681 20.9507 13.1965 21.6223 12.3681 21.6223V18.6223ZM0.324219 11.0642C0.324219 10.2357 0.995792 9.56416 1.82422 9.56416C2.65265 9.56416 3.32422 10.2357 3.32422 11.0642H0.324219ZM3.82422 18.6223H8.85346V21.6223H3.82422V18.6223ZM8.85346 18.6223H12.3681V21.6223H8.85346V18.6223ZM3.32422 14.0835V18.1223H0.324219V14.0835H3.32422ZM3.32422 11.0642V14.0835H0.324219V11.0642H3.32422ZM3.82422 21.6223C1.89122 21.6223 0.324219 20.0553 0.324219 18.1223H3.32422C3.32422 18.3985 3.54808 18.6223 3.82422 18.6223V21.6223Z" fill="#ECF6FF"/>
                <path d="M12.3663 3.50635C11.5379 3.50635 10.8663 2.83477 10.8663 2.00635C10.8663 1.17792 11.5379 0.506348 12.3663 0.506348V3.50635ZM24.4102 11.0645C24.4102 11.8929 23.7386 12.5645 22.9102 12.5645C22.0817 12.5645 21.4102 11.8929 21.4102 11.0645H24.4102ZM20.9102 3.50635H15.8809V0.506348H20.9102V3.50635ZM15.8809 3.50635H12.3663V0.506348H15.8809V3.50635ZM21.4102 8.04512V4.00635H24.4102V8.04512H21.4102ZM21.4102 11.0645V8.04512H24.4102V11.0645H21.4102ZM20.9102 0.506348C22.8432 0.506348 24.4102 2.07335 24.4102 4.00635H21.4102C21.4102 3.73021 21.1863 3.50635 20.9102 3.50635V0.506348Z" fill="#ECF6FF"/>
            </svg>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ImageSize',
        data() {
            return {
            }
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    .picture-size {
        position: relative;
        width: 100%;
        max-height: 780px;
        border-radius: .75rem;
        background-color: $blue01;
        overflow: hidden;
        user-select: none;
        .v-image{
            display: block;
            width: 100%;
            height: 380px;
            max-height: 780px;
            object-fit: cover;
        }
        .picture-size__full{
            position: absolute;
            bottom: .5rem;
            right: .5rem;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: .5rem;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #464EA3;
            cursor: pointer;
            &:hover{
                background-color: #95B0DA;
            }
        }
    }
</style>