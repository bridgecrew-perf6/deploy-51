<template>
    <div>
        <v-dialog v-model="show" content-class="modal-revision" max-width="430">
            <div class="v-application v-application--is-ltr">
                <div class="modal-close" @click.stop="show = false"></div>
                <!-- Шапка попапа -->
                <div class="modal-revision__content">
                    <div class="text-middle weight-500">Отправить на доработку</div>
                    <!-- Контент попапа -->
                    <div >
                        <v-textarea
                            auto-grow
                            class="create-note__text"
                            hide-details
                            single-line
                            rows="1"
                            label=""
                        ></v-textarea>
                    </div>
                </div>
                <div class="modal-revision__footer">
                    <div class="d-flex justify-center">
                        <base-button label="Сохранить" type="submit" backgroundColor="#6E65AE"></base-button>
                    </div>
                </div>
            </div>
        </v-dialog>
    </div>
</template>

<script>



    export default {
        name: 'ModalRevision',
        components: {
        },
        props: {
            visible: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {}
        },

        computed: {
            show: {
                get() {
                    return this.visible
                },
                set(value) {
                    if (!value) {
                        this.$emit('close')
                    }
                },
            },

        },
        methods: {

        },
        mounted() {

        },
    }
</script>
<style lang="scss">
    .v-dialog {
        &.modal-revision {
            border-radius: 28px;
            box-shadow: 0 6px 8px rgba(137, 155, 201, 0.15);
            background: #464EA3;
        }
    }
</style>
<style lang="scss" scoped>
    .v-dialog {
        &.modal-revision {
            .modal-close{
                opacity: .3;
                top: 1.5rem!important;
                right: 1.5rem!important;
            }
            .modal-revision__content{
                color: #36427D;
                background: #FFFFFF;
                border-radius: 28px;
                padding: 1.25rem 1.5rem;
                &::v-deep {
                    .v-input__control,
                    .v-input__slot{
                        &:before,
                        &:after{
                            display: none!important;
                        }
                    }
                    textarea {
                        color: #464EA3;
                        height: 208px!important;
                        box-sizing: border-box;
                        resize: none;
                        padding: .5rem 1.25rem;
                        border: 1px solid #DCE5F2;
                        border-radius: 4px;
                    }
                }
            }
            .modal-revision__footer{
                padding: .25rem 0;
                background: #464EA3;
            }
        }
    }

    .v-btn {
        &::v-deep {
            .v-btn__content {
                line-height: 32px !important;
            }
        }
    }


</style>