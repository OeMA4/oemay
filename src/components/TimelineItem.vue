<template>
<v-container>
    <v-card>
        <v-layout column>
            <v-layout row>
                <v-flex>
                    <span class="date"> {{ data.date }} </span>
                </v-flex>
                <v-flex>
                    <span class="tag"> {{ data.category.tag }} </span>
                </v-flex>
            </v-layout>
            <v-flex>
                <div class="itemText">
                <p>{{ data.text }}</p>
                </div>
            </v-flex>
        </v-layout>

        <div className="timeline-item">
            <div className="timeline-item-content">
                    <a :href= "data.link.url" target="_blank" rel="noopener noreferrer">
                        {{ data.link.text }}
                    </a>
                <span className="circle" />
            </div>
        </div>
    </v-card>
</v-container>
</template>

<script>

export default {
  props: { data: Object }

}
</script>

<style>
.tag {
    background-color:goldenrod;
    font-family:fantasy;
}
.date {
    color: grey
}
</style>
