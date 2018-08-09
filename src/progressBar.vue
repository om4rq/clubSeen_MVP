<template>
<div>
    <div class="row">
        <div class="col-xs-3">
            <p>ClubScore</p>
        </div>
        <div class="col-xs-9">
            <div class="progress">
                <div id="serviceValue" class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="5" :style="{width: average()/5*100+'%'}"><span class="sr-only">{{average()}}</span></div>
            </div>
        </div>
    </div>
    <div v-for="criteria in ratings[0]" class="row">
        <div>
            <div class="col-xs-3">
                <p>{{criteria.criteria}}</p>
            </div>
            <div class="col-xs-9">
                <div class="progress">
                    <div id="serviceValue" class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="5" :style="{width: criteria.value/5*100+'%'}"><span class="sr-only">{{criteria.value}}</span></div>
                </div>
            </div>
        </div>
    </div>
    <p>{{count}}</p>

</div>
    
</template>

<script>
    var App = require('./App')
    var club = require('./clubData.js')
    var Counter = require('./counter.js')
    var club = require('./clubData.js')
    console.log(App.counter)
    console.log(Counter.spec)


    export default {
        name: 'progressBar',
        data() {
            return {
                count: App.counter,
                ratings: [
                    [{
                        criteria: 'Service',
                        value: 4.2
                    }, {
                        criteria: 'VIP',
                        value: 1.2
                    }, {
                        criteria: 'Drinks',
                        value: 4.2
                    }, {
                        criteria: 'Safety',
                        value: 4.1
                    }, {
                        criteria: 'Wifi',
                        value: 4.3
                    }],
                    [{
                        criteria: 'Service',
                        value: 3.2
                    }, {
                        criteria: 'VIP',
                        value: 3.2
                    }, {
                        criteria: 'Drinks',
                        value: 3.2
                    }, {
                        criteria: 'Safety',
                        value: 3.1
                    }, {
                        criteria: 'Wifi',
                        value: 3.3
                    }],
                    [{
                        criteria: 'Service',
                        value: 3.2
                    }, {
                        criteria: 'VIP',
                        value: 2.2
                    }, {
                        criteria: 'Drinks',
                        value: 3.2
                    }, {
                        criteria: 'Safety',
                        value: 4.1
                    }, {
                        criteria: 'Wifi',
                        value: 1.3
                    }],
                    [{
                        criteria: 'Service',
                        value: 4.6
                    }, {
                        criteria: 'VIP',
                        value: 1.5
                    }, {
                        criteria: 'Drinks',
                        value: 4.3
                    }, {
                        criteria: 'Safety',
                        value: 2.1
                    }, {
                        criteria: 'Wifi',
                        value: 3.9
                    }],
                    [{
                        criteria: 'Service',
                        value: 4.9
                    }, {
                        criteria: 'VIP',
                        value: 1.5
                    }, {
                        criteria: 'Drinks',
                        value: 4.7
                    }, {
                        criteria: 'Safety',
                        value: 4.7
                    }, {
                        criteria: 'Wifi',
                        value: 4.9
                    }],
                    [{
                        criteria: 'Service',
                        value: 2.2
                    }, {
                        criteria: 'VIP',
                        value: 2.2
                    }, {
                        criteria: 'Drinks',
                        value: 2.2
                    }, {
                        criteria: 'Safety',
                        value: 2.1
                    }, {
                        criteria: 'Wifi',
                        value: 4.3
                    }]
                ]
            };
        }
    }

</script>
