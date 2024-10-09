<template>
    <div>
        <div class="accordion" id="accordion-component">
            <!-- <div class="accordion-item">
                <h2 class="accordion-header" id="heading">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#'+props.accordionId" aria-expanded="true" aria-controls="collapseOne">
                        <slot name="title" />
                    </button>
                </h2>
                <div :id="props.accordionId" class="accordion-collapse collapse show" aria-labelledby="heading" data-bs-parent="#accordion-component">
                    <div class="accordion-body">
                        <slot name="body"/>
                    </div>
                </div>
            </div> -->

            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + accordionId + '-collapseOne'" aria-expanded="true" :aria-controls="accordionId + '-collapseOne'">
                        <slot name="title" />
                    </button>
                </h2>
                <div :id="accordionId + '-collapseOne'" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        <slot name="body" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        accordionId: {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
</style>